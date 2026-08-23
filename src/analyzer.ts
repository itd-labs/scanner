import traverse from "@babel/traverse";
import type { Binding, NodePath } from "@babel/traverse";
import * as t from "@babel/types";

import { parseJavaScript } from "./js-normalizer.js";
import type { AnalysisReport, RouteDefinition } from "./types.js";

export type JavaScriptAnalysisSource = string | { id: string; source: string };

export function analyzeJavaScript(
  sources: Iterable<JavaScriptAnalysisSource>,
  previous?: AnalysisReport,
): AnalysisReport {
  const routeTables: DiscoveredRouteTable[] = [];
  const endpoints = new Set<string>();
  const webSockets = new Set<string>();
  const storageKeys = new Set<string>();
  const userVisibleStrings = new Set<string>();
  const sentryReleases = new Set<string>();

  let sourceIndex = 0;
  for (const input of sources) {
    sourceIndex += 1;
    const source = typeof input === "string" ? input : input.source;
    const sourceId =
      typeof input === "string" ? `source:${sourceIndex}` : input.id;
    const ast = parseJavaScript(source);
    discoverRouteTables(ast).forEach((routes, tableIndex) => {
      routeTables.push({
        hint: `${sourceId}#${tableIndex + 1}`,
        sourceId,
        routes,
      });
    });
    for (const endpoint of discoverEndpointCatalogPaths(ast)) {
      endpoints.add(endpoint);
    }
    traverse(ast, {
      StringLiteral(path) {
        classifyString(path.node.value);
      },
      TemplateElement(path) {
        classifyString(path.node.value.cooked ?? path.node.value.raw);
      },
      CallExpression(path) {
        const firstArgument = path.node.arguments[0];
        const endpoint = literalValue(firstArgument);
        if (
          endpoint &&
          isEndpointCall(path.node.callee) &&
          endpoint.startsWith("/")
        ) {
          endpoints.add(endpoint);
        }
        const callee = path.node.callee;
        if (!t.isMemberExpression(callee) || callee.computed) return;
        if (!t.isIdentifier(callee.object) || !t.isIdentifier(callee.property))
          return;
        if (
          !new Set(["localStorage", "sessionStorage"]).has(callee.object.name)
        )
          return;
        if (
          !new Set(["getItem", "setItem", "removeItem"]).has(
            callee.property.name,
          )
        )
          return;
        const first = path.node.arguments[0];
        if (t.isStringLiteral(first)) storageKeys.add(first.value);
      },
      AssignmentExpression(path) {
        const left = path.node.left;
        if (
          !t.isMemberExpression(left) ||
          left.computed ||
          !t.isIdentifier(left.property)
        )
          return;
        if (
          left.property.name !== "SENTRY_RELEASE" ||
          !t.isObjectExpression(path.node.right)
        )
          return;
        for (const property of path.node.right.properties) {
          if (
            t.isObjectProperty(property) &&
            t.isIdentifier(property.key, { name: "id" }) &&
            t.isStringLiteral(property.value)
          ) {
            sentryReleases.add(property.value.value);
          }
        }
      },
    });
  }

  const routeDefinitions = identifyRouteTables(
    routeTables,
    previous?.routeDefinitions,
  )
    .sort((left, right) => compareStrings(left.id, right.id))
    .flatMap(({ id, routes }) =>
      routes.map((route, routeIndex) => ({
        table: id,
        priority: routeIndex + 1,
        ...route,
      })),
    );

  return {
    routes: [...new Set(routeDefinitions.map((route) => route.effectivePath))],
    routeDefinitions,
    endpoints: sorted(endpoints),
    webSockets: sorted(webSockets),
    storageKeys: sorted(storageKeys),
    userVisibleStrings: sorted(userVisibleStrings),
    sentryReleases: sorted(sentryReleases),
  };

  function classifyString(value: string): void {
    const clean = value.trim();
    if (!clean || clean.length > 500) return;
    if (/^wss?:\/\//iu.test(clean)) webSockets.add(clean);
    if (isAbsoluteEndpoint(clean) || /^\/(?:api|v\d+)(?:\/|$)/iu.test(clean))
      endpoints.add(clean);
    if (
      clean.length >= 3 &&
      /(?:[А-Яа-яЁё]{2}|[A-Za-z]{2}\s+[A-Za-z]{2})/u.test(clean) &&
      !/^(?:https?:|wss?:|data:|[.#][A-Za-z0-9_-]+$)/iu.test(clean)
    ) {
      userVisibleStrings.add(clean);
    }
  }
}

type RouteWithoutPriority = Omit<RouteDefinition, "table" | "priority">;

interface DiscoveredRouteTable {
  hint: string;
  sourceId: string;
  routes: RouteWithoutPriority[];
}

interface PreviousRouteTable {
  id: string;
  sourceId: string;
  routes: RouteWithoutPriority[];
}

function identifyRouteTables(
  currentTables: DiscoveredRouteTable[],
  previousDefinitions: RouteDefinition[] | undefined,
): Array<{ id: string; routes: RouteWithoutPriority[] }> {
  if (!previousDefinitions) {
    return currentTables.map(({ hint: id, routes }) => ({ id, routes }));
  }

  const previousTables = groupPreviousRouteTables(previousDefinitions);
  const candidates = currentTables.flatMap((current, currentIndex) =>
    previousTables
      .map((previous, previousIndex) => ({
        current,
        currentIndex,
        previous,
        previousIndex,
        similarity: routeTableSimilarity(current.routes, previous.routes),
      }))
      .filter(
        ({ current, previous, similarity }) =>
          similarity > 0 || current.hint === previous.id,
      ),
  );
  candidates.sort((left, right) => {
    if (left.similarity !== right.similarity) {
      return right.similarity - left.similarity;
    }
    const leftSameSource = Number(
      left.current.sourceId === left.previous.sourceId,
    );
    const rightSameSource = Number(
      right.current.sourceId === right.previous.sourceId,
    );
    if (leftSameSource !== rightSameSource) {
      return rightSameSource - leftSameSource;
    }
    const leftSamePosition = Number(left.current.hint === left.previous.id);
    const rightSamePosition = Number(right.current.hint === right.previous.id);
    if (leftSamePosition !== rightSamePosition) {
      return rightSamePosition - leftSamePosition;
    }
    return (
      compareStrings(left.current.hint, right.current.hint) ||
      compareStrings(left.previous.id, right.previous.id)
    );
  });

  const assignedIds = new Map<number, string>();
  const matchedPrevious = new Set<number>();
  for (const candidate of candidates) {
    if (
      assignedIds.has(candidate.currentIndex) ||
      matchedPrevious.has(candidate.previousIndex)
    ) {
      continue;
    }
    assignedIds.set(candidate.currentIndex, candidate.previous.id);
    matchedPrevious.add(candidate.previousIndex);
  }

  const reservedIds = new Set(previousTables.map(({ id }) => id));
  return currentTables.map(({ hint, sourceId, routes }, currentIndex) => {
    const matchedId = assignedIds.get(currentIndex);
    if (matchedId) return { id: matchedId, routes };

    const id = nextRouteTableId(sourceId, hint, reservedIds);
    reservedIds.add(id);
    return { id, routes };
  });
}

function groupPreviousRouteTables(
  definitions: RouteDefinition[],
): PreviousRouteTable[] {
  const grouped = new Map<string, PreviousRouteTable>();
  for (const { table, priority: _priority, ...route } of definitions) {
    const existing = grouped.get(table);
    if (existing) {
      existing.routes.push(route);
      continue;
    }
    grouped.set(table, {
      id: table,
      sourceId: routeTableSourceId(table),
      routes: [route],
    });
  }
  return [...grouped.values()];
}

function routeTableSimilarity(
  current: RouteWithoutPriority[],
  previous: RouteWithoutPriority[],
): number {
  const currentPatterns = routePatternCounts(current);
  const previousPatterns = routePatternCounts(previous);
  let intersection = 0;
  let union = 0;
  const patterns = new Set([
    ...currentPatterns.keys(),
    ...previousPatterns.keys(),
  ]);
  for (const pattern of patterns) {
    const currentCount = currentPatterns.get(pattern) ?? 0;
    const previousCount = previousPatterns.get(pattern) ?? 0;
    intersection += Math.min(currentCount, previousCount);
    union += Math.max(currentCount, previousCount);
  }
  return union === 0 ? 0 : intersection / union;
}

function routePatternCounts(
  routes: RouteWithoutPriority[],
): Map<string, number> {
  const counts = new Map<string, number>();
  for (const route of routes) {
    if (route.kind === "fallback") continue;
    const pattern = `${route.kind}\u0000${route.declaredPath}`;
    counts.set(pattern, (counts.get(pattern) ?? 0) + 1);
  }
  return counts;
}

function routeTableSourceId(tableId: string): string {
  return tableId.replace(/#\d+$/u, "");
}

function nextRouteTableId(
  sourceId: string,
  hint: string,
  reservedIds: Set<string>,
): string {
  if (!reservedIds.has(hint)) return hint;

  const prefix = `${sourceId}#`;
  let nextOrdinal = 1;
  for (const id of reservedIds) {
    if (!id.startsWith(prefix)) continue;
    const ordinal = Number(id.slice(prefix.length));
    if (Number.isInteger(ordinal)) {
      nextOrdinal = Math.max(nextOrdinal, ordinal + 1);
    }
  }
  return `${prefix}${nextOrdinal}`;
}

function compareStrings(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0;
}

function discoverRouteTables(ast: t.File): RouteWithoutPriority[][] {
  const rejectionTargets = discoverRouteRejectionTargets(ast);
  const parameterPrefixes = discoverRouteParameterPrefixes(
    ast,
    rejectionTargets,
  );
  const tables: RouteWithoutPriority[][] = [];

  traverse(ast, {
    ArrayExpression(path) {
      const elements = path.node.elements.filter(
        (element): element is t.Expression | t.SpreadElement =>
          element !== null,
      );
      if (
        elements.length < 2 ||
        elements.some((element) => !t.isCallExpression(element))
      ) {
        return;
      }
      const calls = elements.filter((element): element is t.CallExpression =>
        t.isCallExpression(element),
      );
      if (!callsShareFactory(calls, path)) return;
      const candidate = calls
        .map((call) =>
          routeDefinitionFromCall(
            call,
            routeComponentBinding(call, path, parameterPrefixes),
            parameterPrefixes,
          ),
        )
        .filter((route): route is RouteWithoutPriority => route !== undefined);
      if (candidate.length !== calls.length) return;
      const pathCount = candidate.filter(
        (route) => route.kind === "route",
      ).length;
      if (
        pathCount >= 1 &&
        candidate.some((route) => route.kind === "fallback")
      ) {
        tables.push(candidate);
      }
    },
  });

  return tables;
}

function callsShareFactory(
  calls: t.CallExpression[],
  path: NodePath<t.ArrayExpression>,
): boolean {
  const factories = new Set<Binding | string>();
  for (const call of calls) {
    if (!t.isIdentifier(call.callee)) return false;
    factories.add(path.scope.getBinding(call.callee.name) ?? call.callee.name);
  }
  return factories.size === 1;
}

function routeComponentBinding(
  call: t.CallExpression,
  path: NodePath<t.ArrayExpression>,
  parameterPrefixes: ReadonlyMap<Binding, ReadonlyMap<string, string>>,
): Binding | undefined {
  const component = call.arguments[0];
  if (!t.isIdentifier(component)) return undefined;
  const binding = path.scope.getBinding(component.name);
  return binding && parameterPrefixes.has(binding) ? binding : undefined;
}

function routeDefinitionFromCall(
  call: t.CallExpression,
  componentBinding: Binding | undefined,
  parameterPrefixes: ReadonlyMap<Binding, ReadonlyMap<string, string>>,
): RouteWithoutPriority | undefined {
  const properties = call.arguments.find((argument) =>
    t.isObjectExpression(argument),
  );
  if (!t.isObjectExpression(properties)) return undefined;

  const declaredPath = objectStringProperty(properties, "path");
  const isFallback = objectBooleanProperty(properties, "default") === true;
  if (!declaredPath && !isFallback) return undefined;
  if (declaredPath && !declaredPath.startsWith("/")) return undefined;
  if (isFallback && !declaredPath) {
    return {
      declaredPath: "*",
      effectivePath: "*",
      kind: "fallback",
      constraints: ["matches when no earlier route matched"],
    };
  }
  if (!declaredPath) return undefined;

  let effectivePath = declaredPath;
  const constraints: string[] = [];
  const prefixes = componentBinding
    ? parameterPrefixes.get(componentBinding)
    : undefined;
  for (const [parameter, prefix] of prefixes ?? []) {
    const token = new RegExp(`:${escapeRegExp(parameter)}(?=[/*]|$)`, "gu");
    if (!token.test(effectivePath)) continue;
    effectivePath = effectivePath.replace(token, `${prefix}:` + parameter);
    constraints.push(`${parameter} starts with ${JSON.stringify(prefix)}`);
  }
  for (const match of declaredPath.matchAll(/:([A-Za-z_$][\w$]*)\*/gu)) {
    constraints.push(`${match[1]} is a zero-or-more segment splat`);
  }

  return {
    declaredPath,
    effectivePath,
    kind: "route",
    constraints,
  };
}

function discoverRouteParameterPrefixes(
  ast: t.File,
  rejectionTargets: ReadonlyMap<Binding, readonly RenderTarget[]>,
): Map<Binding, Map<string, string>> {
  const result = new Map<Binding, Map<string, string>>();

  traverse(ast, {
    VariableDeclarator(path) {
      if (!t.isIdentifier(path.node.id)) return;
      const binding = path.scope.getBinding(path.node.id.name);
      if (!binding) return;
      const allowedTargets = rejectionTargets.get(binding);
      if (!allowedTargets?.length) return;

      const initPath = path.get("init");
      if (
        !initPath.isArrowFunctionExpression() &&
        !initPath.isFunctionExpression()
      )
        return;
      const aliases = new Map<string, string>();
      for (const parameter of initPath.node.params) {
        if (!t.isObjectPattern(parameter)) continue;
        for (const property of parameter.properties) {
          if (
            !t.isObjectProperty(property) ||
            !t.isIdentifier(property.value)
          ) {
            continue;
          }
          const routeParameter = propertyName(property.key);
          if (routeParameter) aliases.set(property.value.name, routeParameter);
        }
      }
      if (aliases.size === 0) return;

      const prefixes = new Map<string, string>();
      const bodyPath = initPath.get("body");
      if (!bodyPath.isBlockStatement()) return;
      const [statementPath] = bodyPath.get("body");
      if (statementPath?.isIfStatement()) {
        const guard = negatedStartsWithGuard(statementPath.node.test);
        if (!guard) return;
        const returnPath = directBranchReturn(statementPath.get("consequent"));
        if (!returnPath) return;
        const returnedTarget = renderTargetFromExpression(
          returnPath.node.argument,
          returnPath,
        );
        if (
          !returnedTarget ||
          !allowedTargets.some((target) =>
            renderTargetsEqual(target, returnedTarget),
          )
        ) {
          return;
        }
        const routeParameter = aliases.get(guard.identifier);
        if (routeParameter) prefixes.set(routeParameter, guard.prefix);
      }
      if (prefixes.size > 0) result.set(binding, prefixes);
    },
  });

  return result;
}

type ScopedReference = Binding | string;

interface RenderTarget {
  factory: ScopedReference;
  component: ScopedReference;
}

function discoverRouteRejectionTargets(
  ast: t.File,
): Map<Binding, RenderTarget[]> {
  const result = new Map<Binding, RenderTarget[]>();

  traverse(ast, {
    ArrayExpression(path) {
      const calls = path.node.elements.filter(
        (element): element is t.CallExpression => t.isCallExpression(element),
      );
      if (
        calls.length !== path.node.elements.length ||
        calls.length < 2 ||
        !callsShareFactory(calls, path)
      ) {
        return;
      }
      const definitions = calls.map((call) =>
        routeDefinitionFromCall(call, undefined, new Map()),
      );
      if (
        definitions.some((definition) => definition === undefined) ||
        !definitions.some((definition) => definition?.kind === "route") ||
        !definitions.some((definition) => definition?.kind === "fallback")
      ) {
        return;
      }

      const fallbackTargets = calls.flatMap((call, index) => {
        if (definitions[index]?.kind !== "fallback") return [];
        const target = renderTargetFromCall(call, path);
        return target ? [target] : [];
      });
      if (fallbackTargets.length === 0) return;

      calls.forEach((call, index) => {
        if (definitions[index]?.kind !== "route") return;
        const component = call.arguments[0];
        if (!t.isIdentifier(component)) return;
        const binding = path.scope.getBinding(component.name);
        if (!binding) return;
        const targets = result.get(binding) ?? [];
        for (const target of fallbackTargets) {
          if (!targets.some((existing) => renderTargetsEqual(existing, target)))
            targets.push(target);
        }
        result.set(binding, targets);
      });
    },
  });

  return result;
}

function negatedStartsWithGuard(
  test: t.Expression,
): { identifier: string; prefix: string } | undefined {
  if (!t.isUnaryExpression(test, { operator: "!" })) return undefined;
  const call = test.argument;
  if (!t.isCallExpression(call) && !t.isOptionalCallExpression(call))
    return undefined;
  const callee = call.callee;
  if (
    (!t.isMemberExpression(callee) && !t.isOptionalMemberExpression(callee)) ||
    callee.computed ||
    !t.isIdentifier(callee.object) ||
    !t.isIdentifier(callee.property, { name: "startsWith" })
  ) {
    return undefined;
  }
  const prefix = call.arguments[0];
  if (!t.isStringLiteral(prefix)) return undefined;
  return { identifier: callee.object.name, prefix: prefix.value };
}

function directBranchReturn(
  branchPath: NodePath<t.Statement>,
): NodePath<t.ReturnStatement> | undefined {
  if (branchPath.isReturnStatement()) return branchPath;
  if (!branchPath.isBlockStatement()) return undefined;
  const statements = branchPath.get("body");
  const [onlyStatement] = statements;
  return statements.length === 1 && onlyStatement?.isReturnStatement()
    ? onlyStatement
    : undefined;
}

function renderTargetFromExpression(
  expression: t.Expression | null | undefined,
  path: NodePath,
): RenderTarget | undefined {
  if (!t.isCallExpression(expression)) return undefined;
  return renderTargetFromCall(expression, path);
}

function renderTargetFromCall(
  call: t.CallExpression,
  path: NodePath,
): RenderTarget | undefined {
  if (!t.isIdentifier(call.callee)) return undefined;
  const component = call.arguments[0];
  if (!t.isIdentifier(component)) return undefined;
  return {
    factory: path.scope.getBinding(call.callee.name) ?? call.callee.name,
    component: path.scope.getBinding(component.name) ?? component.name,
  };
}

function renderTargetsEqual(left: RenderTarget, right: RenderTarget): boolean {
  return left.factory === right.factory && left.component === right.component;
}

function objectStringProperty(
  object: t.ObjectExpression,
  name: string,
): string | undefined {
  for (const property of object.properties) {
    if (
      t.isObjectProperty(property) &&
      propertyName(property.key) === name &&
      t.isStringLiteral(property.value)
    ) {
      return property.value.value;
    }
  }
  return undefined;
}

function objectBooleanProperty(
  object: t.ObjectExpression,
  name: string,
): boolean | undefined {
  for (const property of object.properties) {
    if (
      t.isObjectProperty(property) &&
      propertyName(property.key) === name &&
      t.isBooleanLiteral(property.value)
    ) {
      return property.value.value;
    }
  }
  return undefined;
}

function propertyName(key: t.ObjectProperty["key"]): string | undefined {
  if (t.isIdentifier(key)) return key.name;
  if (t.isStringLiteral(key)) return key.value;
  return undefined;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
}

function discoverEndpointCatalogPaths(ast: t.File): Set<string> {
  const endpoints = new Set<string>();

  traverse(ast, {
    VariableDeclarator(path) {
      if (
        !t.isIdentifier(path.node.id) ||
        !t.isObjectExpression(path.node.init)
      )
        return;
      const binding = path.scope.getBinding(path.node.id.name);
      if (
        !binding?.referencePaths.some((reference) =>
          isUsedByEndpointCall(reference as NodePath<t.Node>),
        )
      ) {
        return;
      }
      collectEndpointCatalogValues(path.node.init, endpoints);
    },
  });

  return endpoints;
}

function isUsedByEndpointCall(reference: NodePath<t.Node>): boolean {
  let current = reference;
  let parent = current.parentPath as NodePath<t.Node> | null;
  while (parent) {
    if (parent.isFunction()) return false;
    if (parent.isCallExpression()) {
      if (current.key !== "callee" && isEndpointCall(parent.node.callee)) {
        return true;
      }
    }
    current = parent;
    parent = parent.parentPath as NodePath<t.Node> | null;
  }
  return false;
}

function collectEndpointCatalogValues(
  object: t.ObjectExpression,
  endpoints: Set<string>,
): void {
  for (const property of object.properties) {
    if (!t.isObjectProperty(property)) continue;
    const value = property.value;
    if (t.isObjectExpression(value)) {
      collectEndpointCatalogValues(value, endpoints);
      continue;
    }
    const endpoint = endpointPattern(value);
    if (endpoint?.startsWith("/")) endpoints.add(endpoint);
  }
}

function endpointPattern(
  value: t.Expression | t.PatternLike,
): string | undefined {
  if (t.isStringLiteral(value)) return value.value;
  if (t.isTemplateLiteral(value)) return templatePattern(value);
  if (
    (t.isArrowFunctionExpression(value) || t.isFunctionExpression(value)) &&
    t.isTemplateLiteral(value.body)
  ) {
    return templatePattern(value.body);
  }
  return undefined;
}

function templatePattern(template: t.TemplateLiteral): string {
  let result =
    template.quasis[0]?.value.cooked ?? template.quasis[0]?.value.raw ?? "";
  for (let index = 0; index < template.expressions.length; index += 1) {
    result += index === 0 ? ":param" : `:param${index + 1}`;
    const quasi = template.quasis[index + 1];
    result += quasi?.value.cooked ?? quasi?.value.raw ?? "";
  }
  return result;
}

function isAbsoluteEndpoint(value: string): boolean {
  if (!/^https?:\/\//iu.test(value)) return false;
  try {
    const url = new URL(value);
    return (
      /(?:^|\.)api\./iu.test(url.hostname) ||
      /(?:^|\.)sentry\./iu.test(url.hostname) ||
      /^\/(?:api|v\d+)(?:\/|$)/iu.test(url.pathname)
    );
  } catch {
    return false;
  }
}

function literalValue(
  argument: t.CallExpression["arguments"][number] | undefined,
): string | undefined {
  if (t.isStringLiteral(argument)) return argument.value;
  if (t.isTemplateLiteral(argument) && argument.expressions.length === 0) {
    return argument.quasis[0]?.value.cooked ?? argument.quasis[0]?.value.raw;
  }
  return undefined;
}

function isEndpointCall(callee: t.CallExpression["callee"]): boolean {
  if (t.isIdentifier(callee)) return callee.name === "fetch";
  if (
    !t.isMemberExpression(callee) ||
    callee.computed ||
    !t.isIdentifier(callee.property)
  )
    return false;
  return new Set([
    "delete",
    "fetch",
    "get",
    "patch",
    "post",
    "put",
    "request",
    "requestJson",
  ]).has(callee.property.name);
}

function sorted(values: Set<string>): string[] {
  return [...values].sort((left, right) => left.localeCompare(right, "ru"));
}

export function createSummaryMarkdown(
  current: AnalysisReport,
  previous: AnalysisReport | undefined,
  metadata: { fingerprint: string; resources: number; bytes: number },
): string {
  const sections: string[] = [
    "# ITD frontend snapshot",
    "",
    `- Build fingerprint: \`${metadata.fingerprint}\``,
    `- Resources: ${metadata.resources}`,
    `- Downloaded bytes: ${metadata.bytes}`,
    `- Sentry releases: ${current.sentryReleases.length ? current.sentryReleases.map((v) => `\`${v}\``).join(", ") : "none"}`,
    "",
  ];

  appendRouteSection(current.routeDefinitions, previous?.routeDefinitions);
  appendSection("HTTP endpoints", current.endpoints, previous?.endpoints);
  appendSection(
    "WebSocket endpoints",
    current.webSockets,
    previous?.webSockets,
  );
  appendSection("Storage keys", current.storageKeys, previous?.storageKeys);
  appendSection(
    "User-visible strings",
    current.userVisibleStrings,
    previous?.userVisibleStrings,
    100,
  );
  return `${sections.join("\n").trimEnd()}\n`;

  function appendRouteSection(
    values: RouteDefinition[],
    oldValues: RouteDefinition[] | undefined,
  ): void {
    sections.push(
      "## Routes",
      "",
      "Route tables are independent. Within each table, routes are evaluated in priority order and the first match wins.",
      "",
    );
    if (!oldValues) {
      if (values.length === 0) {
        sections.push("None detected.", "");
        return;
      }
      sections.push(
        "| Table | Priority | Declared pattern | Effective pattern | Constraints |",
        "| ---: | ---: | --- | --- | --- |",
      );
      for (const route of values) {
        sections.push(
          `| ${inlineCode(route.table)} | ${route.priority} | ${inlineCode(route.declaredPath)} | ${inlineCode(route.effectivePath)} | ${route.constraints.length ? route.constraints.join("; ") : "—"} |`,
        );
      }
      sections.push("");
      return;
    }
    if (JSON.stringify(values) === JSON.stringify(oldValues)) {
      sections.push("No changes.", "");
      return;
    }

    const matched = matchRoutes(oldValues, values);
    const changesFound: string[] = [];
    for (const route of values) {
      const old = matched.previousByCurrent.get(route);
      if (!old) {
        changesFound.push(`- Added: ${formatRoute(route)}`);
        continue;
      }
      const changes: string[] = [];
      if (old.table !== route.table)
        changes.push(
          `table ${inlineCode(old.table)} → ${inlineCode(route.table)}`,
        );
      if (old.priority !== route.priority)
        changes.push(`priority ${old.priority} → ${route.priority}`);
      if (old.effectivePath !== route.effectivePath)
        changes.push(
          `effective pattern ${inlineCode(old.effectivePath)} → ${inlineCode(route.effectivePath)}`,
        );
      if (JSON.stringify(old.constraints) !== JSON.stringify(route.constraints))
        changes.push(
          `constraints ${formatConstraints(old.constraints)} → ${formatConstraints(route.constraints)}`,
        );
      if (changes.length > 0) {
        changesFound.push(
          `- Changed ${inlineCode(route.declaredPath)}: ${changes.join("; ")}`,
        );
      }
    }
    for (const route of matched.removed) {
      changesFound.push(`- Removed: ${formatRoute(route)}`);
    }
    sections.push(
      ...(changesFound.length > 0 ? changesFound : ["No changes."]),
    );
    sections.push("");
  }

  function appendSection(
    title: string,
    values: string[],
    oldValues: string[] | undefined,
    limit = 200,
  ): void {
    sections.push(`## ${title}`, "");
    if (oldValues) {
      const old = new Set(oldValues);
      const now = new Set(values);
      const added = values.filter((value) => !old.has(value));
      const removed = oldValues.filter((value) => !now.has(value));
      if (added.length === 0 && removed.length === 0) {
        sections.push("No changes.", "");
        return;
      }
      for (const value of added.slice(0, limit))
        sections.push(`- Added: ${inlineCode(value)}`);
      for (const value of removed.slice(0, limit))
        sections.push(`- Removed: ${inlineCode(value)}`);
      if (added.length + removed.length > limit)
        sections.push("- Additional changes omitted from this summary.");
    } else if (values.length === 0) {
      sections.push("None detected.");
    } else {
      for (const value of values.slice(0, limit))
        sections.push(`- ${inlineCode(value)}`);
      if (values.length > limit)
        sections.push(`- ${values.length - limit} additional values omitted.`);
    }
    sections.push("");
  }
}

function matchRoutes(
  previous: RouteDefinition[],
  current: RouteDefinition[],
): {
  previousByCurrent: Map<RouteDefinition, RouteDefinition>;
  removed: RouteDefinition[];
} {
  const previousByCurrent = new Map<RouteDefinition, RouteDefinition>();
  const unmatchedPrevious = new Set(previous);
  const unmatchedCurrent = new Set(current);

  pair(
    (old, route) =>
      old.table === route.table &&
      routeSemantics(old) === routeSemantics(route),
  );
  pair((old, route) => old.table === route.table);
  pair((old, route) => routeSemantics(old) === routeSemantics(route));
  pair(() => true);

  return {
    previousByCurrent,
    removed: previous.filter((route) => unmatchedPrevious.has(route)),
  };

  function pair(
    predicate: (old: RouteDefinition, route: RouteDefinition) => boolean,
  ): void {
    for (const route of current) {
      if (!unmatchedCurrent.has(route)) continue;
      const candidates = previous
        .filter(
          (old) =>
            unmatchedPrevious.has(old) &&
            old.kind === route.kind &&
            old.declaredPath === route.declaredPath &&
            predicate(old, route),
        )
        .sort(
          (left, right) =>
            Math.abs(left.priority - route.priority) -
            Math.abs(right.priority - route.priority),
        );
      const old = candidates[0];
      if (!old) continue;
      previousByCurrent.set(route, old);
      unmatchedPrevious.delete(old);
      unmatchedCurrent.delete(route);
    }
  }
}

function routeSemantics(route: RouteDefinition): string {
  return `${route.effectivePath}\0${route.constraints.join("\0")}`;
}

function formatRoute(route: RouteDefinition): string {
  const effective =
    route.effectivePath === route.declaredPath
      ? ""
      : ` → ${inlineCode(route.effectivePath)}`;
  const constraints = route.constraints.length
    ? ` (${route.constraints.join("; ")})`
    : "";
  return `table ${inlineCode(route.table)} #${route.priority} ${inlineCode(route.declaredPath)}${effective}${constraints}`;
}

function formatConstraints(values: string[]): string {
  return values.length ? values.join("; ") : "none";
}

function inlineCode(value: string): string {
  return `\`${value.replaceAll("`", "\\`")}\``;
}
