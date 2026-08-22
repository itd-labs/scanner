import traverse from "@babel/traverse";
import * as t from "@babel/types";

import { parseJavaScript } from "./js-normalizer.js";
import type { AnalysisReport } from "./types.js";

export function analyzeJavaScript(sources: Iterable<string>): AnalysisReport {
  const routes = new Set<string>();
  const endpoints = new Set<string>();
  const webSockets = new Set<string>();
  const storageKeys = new Set<string>();
  const userVisibleStrings = new Set<string>();
  const sentryReleases = new Set<string>();

  for (const source of sources) {
    const ast = parseJavaScript(source);
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
      ObjectProperty(path) {
        const key = t.isIdentifier(path.node.key)
          ? path.node.key.name
          : t.isStringLiteral(path.node.key)
            ? path.node.key.value
            : undefined;
        if (key !== "path" && key !== "href") return;
        if (!t.isStringLiteral(path.node.value)) return;
        const value = path.node.value.value;
        if (value.startsWith("/") && !/^\/(?:api|v\d+)(?:\/|$)/iu.test(value))
          routes.add(value);
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

  return {
    routes: sorted(routes),
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

  appendSection("Routes", current.routes, previous?.routes);
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

function inlineCode(value: string): string {
  return `\`${value.replaceAll("`", "\\`")}\``;
}
