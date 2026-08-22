import generate from "@babel/generator";
import { parse } from "@babel/parser";
import traverse, {
  type Binding,
  type NodePath,
  type Scope,
} from "@babel/traverse";
import * as t from "@babel/types";
import { format } from "prettier";

import { normalizedStructuralTokens, sha256 } from "./hash.js";
import { relativeImport } from "./path-utils.js";

export interface JavaScriptNormalizationContext {
  logicalPath: string;
  sourceUrl: string;
  urlToLogicalPath: ReadonlyMap<string, string>;
  exportMaps: ReadonlyMap<string, ReadonlyMap<string, string>>;
  cssClassNames: ReadonlyMap<string, string>;
}

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/iu;
const MINIFIED_EXPORT = /^(?:[A-Za-z_$]{1,2}|[A-Za-z_$]\d+)$/u;

export function parseJavaScript(source: string) {
  return parse(source, {
    sourceType: "module",
    allowAwaitOutsideFunction: true,
    errorRecovery: false,
  });
}

export function buildExportMaps(
  javascriptByUrl: ReadonlyMap<string, string>,
): Map<string, Map<string, string>> {
  const result = new Map<string, Map<string, string>>();
  for (const [url, source] of javascriptByUrl) {
    const ast = parseJavaScript(source);
    const exports = new Map<string, string>();
    let internalCounter = 0;
    for (const statement of ast.program.body) {
      if (!t.isExportNamedDeclaration(statement)) continue;
      for (const specifier of statement.specifiers) {
        if (!t.isExportSpecifier(specifier)) continue;
        const original = identifierName(specifier.exported);
        if (!original) continue;
        if (original === "default" || !MINIFIED_EXPORT.test(original)) {
          exports.set(original, original);
        } else {
          internalCounter += 1;
          exports.set(
            original,
            `symbol_${String(internalCounter).padStart(3, "0")}`,
          );
        }
      }
    }
    result.set(url, exports);
  }
  return result;
}

export function collectCssClassNames(
  sources: Iterable<string>,
  cssSources: Iterable<string> = [],
): Map<string, string> {
  const result = new Map<string, string>();
  const knownCssClasses = new Set<string>();
  for (const css of cssSources) {
    for (const match of css.matchAll(
      /\.([A-Za-z][A-Za-z0-9_-]{3})(?![\w-])/gu,
    )) {
      if (match[1]) knownCssClasses.add(match[1]);
    }
  }
  for (const source of sources) {
    const ast = parseJavaScript(source);
    traverse(ast, {
      ObjectExpression(path) {
        const pairs = path.node.properties
          .filter((property): property is t.ObjectProperty =>
            t.isObjectProperty(property),
          )
          .map((property) => ({
            key: propertyKey(property.key),
            value: resolveStringValue(path, property.value),
          }))
          .filter(
            (pair): pair is { key: string; value: string } =>
              pair.key !== undefined &&
              pair.value !== undefined &&
              /^[A-Za-z][A-Za-z0-9_-]{3}$/u.test(pair.value),
          );
        const usedForClassNames = objectIsUsedForClassNames(path);
        const eligiblePairs = usedForClassNames
          ? pairs
          : pairs.filter(({ value }) => knownCssClasses.has(value));
        const minimumPairs =
          usedForClassNames || knownCssClasses.size === 0 ? 1 : 3;
        if (eligiblePairs.length < minimumPairs) return;
        for (const { key, value } of eligiblePairs) {
          const canonical = `c_${key.replace(/[^A-Za-z0-9_-]/gu, "_")}`;
          const existing = result.get(value);
          if (!existing || existing === canonical) result.set(value, canonical);
        }
      },
    });
  }
  return result;
}

function objectIsUsedForClassNames(
  path: NodePath<t.ObjectExpression>,
): boolean {
  if (
    !path.parentPath.isVariableDeclarator() ||
    !t.isIdentifier(path.parentPath.node.id)
  )
    return false;
  const binding = path.scope.getBinding(path.parentPath.node.id.name);
  if (!binding) return false;
  return binding.referencePaths.some((reference) =>
    Boolean(
      reference.findParent((parent) => {
        if (parent.isFunction() || parent.isProgram()) return false;
        if (!parent.isObjectProperty()) return false;
        const key = propertyKey(parent.node.key);
        return key === "className";
      }),
    ),
  );
}

function resolveStringValue(
  path: NodePath<t.ObjectExpression>,
  value: t.Expression | t.PatternLike,
): string | undefined {
  if (t.isStringLiteral(value)) return value.value;
  if (!t.isIdentifier(value)) return undefined;
  const binding = path.scope.getBinding(value.name);
  if (!binding?.path.isVariableDeclarator()) return undefined;
  return t.isStringLiteral(binding.path.node.init)
    ? binding.path.node.init.value
    : undefined;
}

export async function normalizeJavaScript(
  source: string,
  context: JavaScriptNormalizationContext,
): Promise<string> {
  const ast = parseJavaScript(source);

  rewriteImportsAndMetadata(ast, context);
  rewriteCssModuleValues(ast, context.cssClassNames);
  renameBindings(ast);

  const generated = generate(ast, {
    comments: true,
    compact: false,
    concise: false,
    jsescOption: { minimal: true },
    retainLines: false,
  }).code;
  return format(generated, { parser: "babel", endOfLine: "lf" });
}

function rewriteImportsAndMetadata(
  ast: ReturnType<typeof parseJavaScript>,
  context: JavaScriptNormalizationContext,
): void {
  const unresolvedAssets = new Map<string, string>();
  traverse(ast, {
    StringLiteral(path) {
      const mayBeSentryId =
        UUID_PATTERN.test(path.node.value) ||
        /sentry-dbid-/iu.test(path.node.value);
      if (mayBeSentryId && hasSentryAncestor(path)) {
        path.node.value = path.node.value.replace(
          /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/giu,
          "<sentry-debug-id>",
        );
        if (UUID_PATTERN.test(path.node.value))
          path.node.value = "<sentry-debug-id>";
        return;
      }
      const resolved = resolveLocalAsset(
        path.node.value,
        context.sourceUrl,
        context.urlToLogicalPath,
      );
      if (resolved) {
        path.node.value = relativeImport(
          context.logicalPath,
          resolved.logicalPath,
        );
      } else {
        path.node.value = canonicalizeUnresolvedAsset(
          path.node.value,
          unresolvedAssets,
        );
      }
    },
    ImportDeclaration(path) {
      rewriteImportSpecifiers(
        path.node.specifiers,
        path.node.source.value,
        context,
      );
    },
    ExportNamedDeclaration(path) {
      if (path.node.source) {
        rewriteExportSpecifiers(
          path.node.specifiers,
          path.node.source.value,
          context,
        );
      } else {
        const ownMap = context.exportMaps.get(context.sourceUrl);
        if (ownMap) {
          for (const specifier of path.node.specifiers) {
            if (!t.isExportSpecifier(specifier)) continue;
            const original = identifierName(specifier.exported);
            const canonical = original ? ownMap.get(original) : undefined;
            if (canonical && original !== canonical)
              specifier.exported = t.identifier(canonical);
          }
        }
      }
    },
  });
}

function canonicalizeUnresolvedAsset(
  value: string,
  replacements: Map<string, string>,
): string {
  const match = value.match(
    /^(.*\/)?([A-Za-z][A-Za-z0-9_.-]*?)-([A-Za-z0-9_-]{8})(\.(?:m?js|css))$/u,
  );
  if (!match) return value;
  const [, prefix = "", stem, hash, extension] = match;
  if (!stem || !hash || !extension) return value;
  const originalName = `${stem}-${hash}${extension}`;
  let replacement = replacements.get(originalName);
  if (!replacement) {
    const generic = new Set(["index", "main", "chunk", "app"]).has(
      stem.toLowerCase(),
    );
    replacement = generic
      ? `unresolved-${String([...replacements.values()].filter((item) => item.startsWith("unresolved-")).length + 1).padStart(3, "0")}${extension}`
      : `${stem}${extension}`;
    replacements.set(originalName, replacement);
  }
  return `${prefix}${replacement}`;
}

function rewriteImportSpecifiers(
  specifiers: Array<
    t.ImportSpecifier | t.ImportDefaultSpecifier | t.ImportNamespaceSpecifier
  >,
  source: string,
  context: JavaScriptNormalizationContext,
): void {
  const resolved = resolveLocalAsset(
    source,
    context.sourceUrl,
    context.urlToLogicalPath,
  );
  const exportMap = resolved ? context.exportMaps.get(resolved.url) : undefined;
  if (!exportMap) return;
  for (const specifier of specifiers) {
    if (!t.isImportSpecifier(specifier)) continue;
    const original = identifierName(specifier.imported);
    const canonical = original ? exportMap.get(original) : undefined;
    if (canonical && canonical !== original)
      specifier.imported = t.identifier(canonical);
  }
}

function rewriteExportSpecifiers(
  specifiers: Array<
    t.ExportSpecifier | t.ExportDefaultSpecifier | t.ExportNamespaceSpecifier
  >,
  source: string,
  context: JavaScriptNormalizationContext,
): void {
  const resolved = resolveLocalAsset(
    source,
    context.sourceUrl,
    context.urlToLogicalPath,
  );
  const exportMap = resolved ? context.exportMaps.get(resolved.url) : undefined;
  if (!exportMap) return;
  for (const specifier of specifiers) {
    if (!t.isExportSpecifier(specifier)) continue;
    const original = identifierName(specifier.local);
    const canonical = original ? exportMap.get(original) : undefined;
    if (canonical && canonical !== original)
      specifier.local = t.identifier(canonical);
  }
}

function resolveLocalAsset(
  specifier: string,
  sourceUrl: string,
  urlToLogicalPath: ReadonlyMap<string, string>,
): { url: string; logicalPath: string } | undefined {
  if (
    !specifier ||
    specifier.startsWith("data:") ||
    specifier.startsWith("node:")
  )
    return undefined;
  const candidates: string[] = [];
  try {
    candidates.push(new URL(specifier, sourceUrl).href);
    if (specifier.startsWith("assets/")) {
      candidates.push(new URL(`/${specifier}`, new URL(sourceUrl).origin).href);
    }
  } catch {
    return undefined;
  }
  for (const url of candidates) {
    const logicalPath = urlToLogicalPath.get(url);
    if (logicalPath) return { url, logicalPath };
  }
  return undefined;
}

function hasSentryAncestor(path: NodePath<t.StringLiteral>): boolean {
  return Boolean(
    path.findParent((parent) => {
      if (t.isAssignmentExpression(parent.node)) {
        return generate(parent.node.left).code.toLowerCase().includes("sentry");
      }
      return false;
    }),
  );
}

function rewriteCssModuleValues(
  ast: ReturnType<typeof parseJavaScript>,
  classNames: ReadonlyMap<string, string>,
): void {
  traverse(ast, {
    StringLiteral(path) {
      const replacement = classNames.get(path.node.value);
      if (replacement) path.node.value = replacement;
    },
  });
}

function renameBindings(ast: ReturnType<typeof parseJavaScript>): void {
  const visited = new WeakSet<Scope>();
  const visitedBindings = new WeakSet<Binding>();
  const renames: Array<{
    binding: Binding;
    original: string;
    replacement: string;
  }> = [];
  traverse(ast, {
    Scopable(path) {
      const scope = path.scope;
      if (visited.has(scope)) return;
      visited.add(scope);
      const bindings = Object.values(scope.bindings)
        .filter((binding) => !visitedBindings.has(binding))
        .sort(
          (left, right) =>
            (left.identifier.start ?? 0) - (right.identifier.start ?? 0),
        );
      for (const binding of bindings) visitedBindings.add(binding);
      const counters = new Map<string, number>();
      const planned = bindings.map((binding) => {
        const semanticExport = exportedSemanticName(
          binding.path,
          binding.identifier.name,
        );
        if (semanticExport)
          return {
            original: binding.identifier.name,
            replacement: semanticExport,
          };
        const prefix = bindingPrefix(binding.path);
        const stableBase =
          scope.path.isProgram() && prefix !== "imported"
            ? `${prefix}_${topLevelBindingHash(binding)}`
            : prefix;
        const next = (counters.get(stableBase) ?? 0) + 1;
        counters.set(stableBase, next);
        return {
          original: binding.identifier.name,
          replacement: next === 1 ? stableBase : `${stableBase}_${next}`,
        };
      });
      for (let index = 0; index < planned.length; index += 1) {
        const binding = bindings[index];
        const item = planned[index];
        if (!binding || !item) continue;
        const { original, replacement } = item;
        if (original === replacement || scope.bindings[replacement]) continue;
        renames.push({ binding, original, replacement });
      }
    },
  });
  for (const rename of renames) renameBinding(rename);
}

function topLevelBindingHash(binding: Binding): string {
  const node = binding.path.isIdentifier()
    ? binding.path.parentPath?.node
    : binding.path.node;
  const source = node ? generate(node).code : binding.identifier.name;
  return sha256(normalizedStructuralTokens(source).join("\u001f")).slice(0, 8);
}

function renameBinding({
  binding,
  original,
  replacement,
}: {
  binding: Binding;
  original: string;
  replacement: string;
}): void {
  binding.identifier.name = replacement;
  for (const reference of binding.referencePaths) {
    if (reference.isIdentifier())
      renameReference(reference, original, replacement);
  }
  for (const violation of binding.constantViolations) {
    if (violation.isIdentifier({ name: original })) {
      renameReference(violation, original, replacement);
      continue;
    }
    violation.traverse({
      Identifier(path) {
        if (path.node.name !== original) return;
        if (path.scope.getBinding(original) !== binding) return;
        if (
          path.parentPath.isMemberExpression() &&
          path.key === "property" &&
          !path.parentPath.node.computed
        )
          return;
        if (
          path.parentPath.isObjectProperty() &&
          path.key === "key" &&
          !path.parentPath.node.computed
        )
          return;
        renameReference(path, original, replacement);
      },
    });
  }
}

function renameReference(
  path: NodePath<t.Identifier>,
  original: string,
  replacement: string,
): void {
  if (path.parentPath.isObjectProperty() && path.parentPath.node.shorthand) {
    path.parentPath.node.shorthand = false;
    path.parentPath.node.key = t.identifier(original);
    path.parentPath.node.value = t.identifier(replacement);
    return;
  }
  path.node.name = replacement;
}

function bindingPrefix(path: NodePath): string {
  if (
    path.isImportSpecifier() ||
    path.isImportDefaultSpecifier() ||
    path.isImportNamespaceSpecifier()
  ) {
    return "imported";
  }
  if (path.listKey === "params" || path.parentPath?.listKey === "params")
    return "arg";
  if (path.isFunctionDeclaration() || path.isFunctionExpression()) return "fn";
  if (path.isClassDeclaration() || path.isClassExpression()) return "clazz";
  if (path.isCatchClause()) return "error";
  return "local";
}

function exportedSemanticName(
  path: NodePath,
  bindingName: string,
): string | undefined {
  const program = path.findParent((parent) => parent.isProgram());
  if (!program?.isProgram()) return undefined;
  for (const statement of program.node.body) {
    if (!t.isExportNamedDeclaration(statement)) continue;
    for (const specifier of statement.specifiers) {
      if (!t.isExportSpecifier(specifier)) continue;
      if (identifierName(specifier.local) !== bindingName) continue;
      const exported = identifierName(specifier.exported);
      if (
        exported &&
        exported !== "default" &&
        !MINIFIED_EXPORT.test(exported) &&
        t.isValidIdentifier(exported)
      ) {
        return exported;
      }
    }
  }
  return undefined;
}

function propertyKey(
  node: t.Expression | t.PrivateName | t.Identifier,
): string | undefined {
  if (t.isIdentifier(node)) return node.name;
  if (t.isStringLiteral(node)) return node.value;
  return undefined;
}

function identifierName(
  node: t.Identifier | t.StringLiteral,
): string | undefined {
  if (t.isIdentifier(node)) return node.name;
  if (t.isStringLiteral(node)) return node.value;
  return undefined;
}
