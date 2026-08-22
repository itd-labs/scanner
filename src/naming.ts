import { basename, extname } from "node:path/posix";

import { minhashSimilarity, structuralSignature } from "./hash.js";
import { toKebabCase } from "./path-utils.js";
import type {
  LogicalResource,
  ManifestResource,
  ResourceGraph,
  ResourceSignature,
  SnapshotManifest,
} from "./types.js";

interface RouteHint {
  assetName: string;
  componentName: string;
  dependencies: string[];
}

const VITE_HASHED_NAME = /^(.*)-([A-Za-z0-9_-]{8})\.(m?js|css)$/u;
const GENERIC_STEMS = new Set(["index", "main", "chunk", "app"]);

export function assignLogicalNames(
  graph: ResourceGraph,
  previous?: SnapshotManifest,
): LogicalResource[] {
  const signatures = new Map<string, ResourceSignature>();
  for (const resource of graph.resources.values()) {
    signatures.set(
      resource.url,
      structuralSignature(resource.text ?? resource.sha256),
    );
  }

  const logicalByUrl = new Map<string, string>();
  const usedPaths = new Set<string>();
  const html = graph.resources.get(graph.documentUrl);
  if (html) assign(html.url, "site/index.html");

  graph.entryScripts.forEach((url, index) => {
    assign(url, index === 0 ? "entry.js" : `entry-${index + 1}.js`);
  });
  graph.entryStyles.forEach((url, index) => {
    assign(url, index === 0 ? "entry.css" : `entry-${index + 1}.css`);
  });

  const routeHints = discoverRouteHints(graph);
  for (const hint of routeHints) {
    const resource = findByAssetName(graph, hint.assetName);
    if (resource)
      assign(resource.url, `routes/${toKebabCase(hint.componentName)}.js`);
  }

  for (const resource of graph.resources.values()) {
    if (logicalByUrl.has(resource.url) || resource.kind !== "javascript")
      continue;
    const originalName = basename(new URL(resource.url).pathname);
    const match = originalName.match(VITE_HASHED_NAME);
    const stem = match?.[1] ?? originalName.replace(/\.(?:m?js)$/u, "");
    if (!GENERIC_STEMS.has(stem.toLowerCase())) {
      const category = /^(?:Icon|VolumeGlyph)/u.test(stem)
        ? "components"
        : "shared";
      assign(resource.url, `${category}/${toKebabCase(stem)}.js`);
    }
  }

  matchPreviousResources(
    graph,
    signatures,
    previous,
    logicalByUrl,
    usedPaths,
    assign,
  );

  for (const resource of graph.resources.values()) {
    if (logicalByUrl.has(resource.url) || resource.kind !== "javascript")
      continue;
    const signature = signatures.get(resource.url);
    if (!signature) throw new Error(`Missing signature for ${resource.url}`);
    assign(resource.url, `shared/chunk-${signature.shapeHash.slice(0, 12)}.js`);
  }

  assignCssNames(graph, logicalByUrl, usedPaths, assign);

  for (const resource of graph.resources.values()) {
    if (logicalByUrl.has(resource.url)) continue;
    const originalName = basename(new URL(resource.url).pathname) || "resource";
    const extension = extname(originalName);
    const stem = extension
      ? originalName.slice(0, -extension.length)
      : originalName;
    const match = originalName.match(VITE_HASHED_NAME);
    const cleanStem = match?.[1] ?? stem;
    assign(
      resource.url,
      `assets/${toKebabCase(cleanStem) || "resource"}${extension.toLowerCase()}`,
    );
  }

  return [...graph.resources.values()]
    .map((resource) => {
      const signature = signatures.get(resource.url);
      const logicalPath = logicalByUrl.get(resource.url);
      if (!signature || !logicalPath)
        throw new Error(`Failed to name ${resource.url}`);
      return { ...resource, ...signature, logicalPath };
    })
    .sort((left, right) => left.logicalPath.localeCompare(right.logicalPath));

  function assign(url: string, preferredPath: string): void {
    if (logicalByUrl.has(url)) return;
    const path = uniquePath(preferredPath, usedPaths);
    logicalByUrl.set(url, path);
    usedPaths.add(path);
  }
}

function uniquePath(preferred: string, used: Set<string>): string {
  if (!used.has(preferred)) return preferred;
  const extension = extname(preferred);
  const stem = extension ? preferred.slice(0, -extension.length) : preferred;
  for (let counter = 2; ; counter += 1) {
    const candidate = `${stem}-${counter}${extension}`;
    if (!used.has(candidate)) return candidate;
  }
}

function findByAssetName(graph: ResourceGraph, name: string) {
  return [...graph.resources.values()].find(
    (resource) => basename(new URL(resource.url).pathname) === basename(name),
  );
}

function discoverRouteHints(graph: ResourceGraph): RouteHint[] {
  const hints: RouteHint[] = [];
  for (const entryUrl of graph.entryScripts) {
    const source = graph.resources.get(entryUrl)?.text;
    if (!source) continue;
    const dependencyFiles = extractViteDependencyFiles(source);
    const imports = [
      ...source.matchAll(/import\(\s*["']\.\/([^"']+\.m?js)["']\s*\)/gu),
    ];
    for (const item of imports) {
      const assetName = item[1];
      if (!assetName || item.index === undefined) continue;
      const trailer = source.slice(
        item.index + item[0].length,
        item.index + item[0].length + 500,
      );
      const component = trailer.match(
        /default\s*:\s*[A-Za-z_$][\w$]*\.([A-Za-z_$][\w$]*)/u,
      )?.[1];
      if (!component) continue;
      const indices =
        trailer
          .match(/__vite__mapDeps\(\[([^\]]*)\]\)/u)?.[1]
          ?.split(",")
          .map((value) => Number.parseInt(value.trim(), 10))
          .filter(Number.isFinite) ?? [];
      hints.push({
        assetName,
        componentName: component,
        dependencies: indices
          .map((index) => dependencyFiles[index])
          .filter((value): value is string => value !== undefined),
      });
    }
  }
  return hints;
}

function extractViteDependencyFiles(source: string): string[] {
  const map = source.match(
    /__vite__mapDeps[\s\S]{0,500}?\.f\s*\|\|\s*\([^=]*=\s*\[([\s\S]*?)\]\s*\)/u,
  )?.[1];
  if (!map) return [];
  return [...map.matchAll(/["'](?:assets\/)?([^"']+\.(?:m?js|css))["']/gu)]
    .map((match) => match[1])
    .filter((value): value is string => value !== undefined);
}

function matchPreviousResources(
  graph: ResourceGraph,
  signatures: Map<string, ResourceSignature>,
  previous: SnapshotManifest | undefined,
  logicalByUrl: Map<string, string>,
  usedPaths: Set<string>,
  assign: (url: string, path: string) => void,
): void {
  if (!previous) return;
  const candidates = previous.resources.filter(
    (resource) =>
      resource.kind === "javascript" && !usedPaths.has(resource.logicalPath),
  );

  for (const resource of graph.resources.values()) {
    if (resource.kind !== "javascript" || logicalByUrl.has(resource.url))
      continue;
    const signature = signatures.get(resource.url);
    if (!signature) continue;
    const ranked = candidates
      .filter((candidate) => !usedPaths.has(candidate.logicalPath))
      .map((candidate) => ({
        candidate,
        score:
          candidate.shapeHash === signature.shapeHash
            ? 1
            : minhashSimilarity(candidate.minhash, signature.minhash),
      }))
      .sort((left, right) => right.score - left.score);
    const best = ranked[0];
    const second = ranked[1];
    if (
      best &&
      best.score >= 0.62 &&
      (!second || best.score - second.score >= 0.08)
    ) {
      assign(resource.url, best.candidate.logicalPath);
    }
  }
}

function assignCssNames(
  graph: ResourceGraph,
  logicalByUrl: Map<string, string>,
  usedPaths: Set<string>,
  assign: (url: string, path: string) => void,
): void {
  const javascriptClasses = [...graph.resources.values()]
    .filter(
      (resource) =>
        resource.kind === "javascript" && logicalByUrl.has(resource.url),
    )
    .map((resource) => ({
      resource,
      classes: new Set(
        resource.text
          ?.match(/["'][A-Za-z][A-Za-z0-9_-]{3,10}["']/gu)
          ?.map((v) => v.slice(1, -1)) ?? [],
      ),
    }));

  for (const css of graph.resources.values()) {
    if (css.kind !== "css" || logicalByUrl.has(css.url)) continue;
    const cssClasses = new Set(
      [
        ...(css.text ?? "").matchAll(
          /\.([A-Za-z][A-Za-z0-9_-]{3,10})(?![\w-])/gu,
        ),
      ]
        .map((match) => match[1])
        .filter((value): value is string => value !== undefined),
    );
    const ranked = javascriptClasses
      .map(({ resource, classes }) => ({
        resource,
        score: [...cssClasses].filter((name) => classes.has(name)).length,
      }))
      .sort((left, right) => right.score - left.score);
    const best = ranked[0];
    if (best && best.score >= 2) {
      const jsPath = logicalByUrl.get(best.resource.url);
      if (jsPath) {
        const preferred = jsPath.replace(/\.m?js$/u, ".css");
        assign(css.url, uniquePath(preferred, usedPaths));
      }
    }
  }

  for (const css of graph.resources.values()) {
    if (css.kind !== "css" || logicalByUrl.has(css.url)) continue;
    const name = basename(new URL(css.url).pathname);
    const match = name.match(VITE_HASHED_NAME);
    const stem = match?.[1] ?? name.replace(/\.css$/u, "");
    assign(css.url, `styles/${toKebabCase(stem) || "style"}.css`);
  }
}

export function manifestLookup(
  previous: SnapshotManifest | undefined,
): Map<string, ManifestResource> {
  return new Map(
    previous?.resources.map((resource) => [resource.logicalPath, resource]) ??
      [],
  );
}
