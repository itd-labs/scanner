import postcss from "postcss";
import selectorParser from "postcss-selector-parser";
import { format } from "prettier";

import { sha256 } from "./hash.js";

export async function normalizeCss(
  source: string,
  classNames: ReadonlyMap<string, string>,
): Promise<string> {
  const root = postcss.parse(source);
  const keyframes = new Map<string, string>();
  let keyframeIndex = 0;
  root.walkAtRules(/keyframes$/iu, (rule) => {
    keyframeIndex += 1;
    const replacement = `keyframe_${keyframeIndex}`;
    keyframes.set(rule.params, replacement);
    rule.params = replacement;
  });
  const localClassNames = buildStructuralClassNames(root, classNames);
  root.walkRules((rule) => {
    rule.selector = selectorParser((selectors) => {
      selectors.walkClasses((classNode) => {
        const replacement =
          classNames.get(classNode.value) ??
          localClassNames.get(classNode.value);
        if (replacement) classNode.value = replacement;
      });
    }).processSync(rule.selector);
  });

  root.walkDecls((declaration) => {
    if (
      declaration.prop === "animation" ||
      declaration.prop === "animation-name"
    ) {
      for (const [original, replacement] of keyframes) {
        declaration.value = declaration.value.replace(
          new RegExp(`(^|\\s|,)${escapeRegExp(original)}(?=\\s|,|$)`, "gu"),
          `$1${replacement}`,
        );
      }
    }
    declaration.value = declaration.value.replace(
      /url\(\s*(["']?)([^"')]+)\1\s*\)/giu,
      (full, quote: string, value: string) => {
        const normalized = value.replace(
          /([A-Za-z][A-Za-z0-9_.-]*?)-[A-Za-z0-9_-]{8}(?=\.(?:png|jpe?g|gif|svg|webp|avif|woff2?|ttf|otf))/gu,
          "$1-<hash>",
        );
        return `url(${quote}${normalized}${quote})`;
      },
    );
  });

  return format(root.toString(), { parser: "css", endOfLine: "lf" });
}

function buildStructuralClassNames(
  root: postcss.Root,
  knownNames: ReadonlyMap<string, string>,
): Map<string, string> {
  const signatures = new Map<string, string[]>();
  root.walkRules((rule) => {
    const classes: string[] = [];
    const selectorShape = selectorParser((selectors) => {
      selectors.walkClasses((classNode) => {
        classes.push(classNode.value);
        classNode.value = "css_module_class";
      });
    }).processSync(rule.selector);
    const declarationShape =
      rule.nodes?.map((node) => node.toString()).join(";") ?? "";
    const ruleShape = `${selectorShape}{${declarationShape}}`;
    for (const name of new Set(classes)) {
      if (knownNames.has(name) || !/^[A-Za-z][A-Za-z0-9_-]{3}$/u.test(name))
        continue;
      const values = signatures.get(name) ?? [];
      values.push(ruleShape);
      signatures.set(name, values);
    }
  });
  return new Map(
    [...signatures].map(([name, rules]) => [
      name,
      `c_auto_${sha256(rules.sort().join("\n")).slice(0, 10)}`,
    ]),
  );
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
}
