import { format } from "prettier";

import { analyzeJavaScript, createSummaryMarkdown } from "./analyzer.js";
import { normalizeCss } from "./css-normalizer.js";
import { decompileJavaScript, mapConcurrent } from "./decompiler.js";
import { downloadSite } from "./downloader.js";
import { buildFingerprint } from "./hash.js";
import {
  buildExportMaps,
  collectCssClassNames,
  normalizeJavaScript,
} from "./js-normalizer.js";
import { assignLogicalNames } from "./naming.js";
import { relativeImport } from "./path-utils.js";
import type {
  LogicalResource,
  ScanOptions,
  ScanResult,
  ScannerConfig,
  SnapshotManifest,
} from "./types.js";
import { readPreviousManifest, writeMirror, writeSnapshot } from "./writer.js";

const VERSION = "0.1.0";
const NORMALIZATION_VERSION = 3;

export async function scanSite(
  config: ScannerConfig,
  options: ScanOptions,
): Promise<ScanResult> {
  const output = options.output ?? config.output;
  const previous = await readPreviousManifest(output);
  const graph = await downloadSite(config);
  const fingerprint = buildFingerprint(graph.resources.values());
  const resources = assignLogicalNames(graph, previous);

  if (options.mirror) await writeMirror(resources, options.mirror);
  if (
    previous?.buildFingerprint === fingerprint &&
    previous.generator.normalizationVersion === NORMALIZATION_VERSION &&
    previous.generator.version === VERSION
  ) {
    return {
      changed: false,
      fingerprint,
      resourceCount: resources.length,
      output,
    };
  }

  const javascriptResources = resources.filter(
    (resource): resource is LogicalResource & { text: string } =>
      resource.kind === "javascript" && resource.text !== undefined,
  );
  const decompiled = await mapConcurrent(
    javascriptResources,
    4,
    async (resource) => ({
      resource,
      source: await decompileJavaScript(
        resource.text,
        resource.logicalPath,
        options.useWakaru,
      ),
    }),
  );
  const decompiledByUrl = new Map(
    decompiled.map(({ resource, source }) => [resource.url, source]),
  );
  const decompiledByKnownUrl = new Map(decompiledByUrl);
  for (const [alias, finalUrl] of graph.urlAliases) {
    const source = decompiledByUrl.get(finalUrl);
    if (source !== undefined) decompiledByKnownUrl.set(alias, source);
  }
  const exportMaps = buildExportMaps(decompiledByKnownUrl);
  const cssClassNames = collectCssClassNames(
    decompiledByUrl.values(),
    resources
      .filter(
        (resource) => resource.kind === "css" && resource.text !== undefined,
      )
      .map((resource) => resource.text as string),
  );
  const urlToLogicalPath = new Map(
    resources.map((resource) => [resource.url, resource.logicalPath]),
  );
  for (const [alias, finalUrl] of graph.urlAliases) {
    const logicalPath = urlToLogicalPath.get(finalUrl);
    if (logicalPath !== undefined) urlToLogicalPath.set(alias, logicalPath);
  }
  const canonicalSources = new Map<string, string>();

  for (const { resource, source } of decompiled) {
    canonicalSources.set(
      resource.logicalPath,
      await normalizeJavaScript(source, {
        logicalPath: resource.logicalPath,
        sourceUrl: resource.url,
        urlToLogicalPath,
        exportMaps,
        cssClassNames,
      }),
    );
  }

  for (const resource of resources) {
    if (resource.kind === "css" && resource.text !== undefined) {
      canonicalSources.set(
        resource.logicalPath,
        await normalizeCss(resource.text, cssClassNames),
      );
    } else if (resource.kind === "html" && resource.text !== undefined) {
      canonicalSources.set(
        resource.logicalPath,
        await normalizeHtml(
          resource.text,
          resource,
          resources,
          graph.urlAliases,
        ),
      );
    } else if (resource.kind === "json" && resource.text !== undefined) {
      canonicalSources.set(
        resource.logicalPath,
        `${JSON.stringify(JSON.parse(resource.text), null, 2)}\n`,
      );
    }
  }

  const analysis = analyzeJavaScript(decompiledByUrl.values());
  const manifest: SnapshotManifest = {
    schemaVersion: 1,
    generator: {
      name: "itd-scanner",
      version: VERSION,
      normalizationVersion: NORMALIZATION_VERSION,
      wakaruLevel: "minimal",
    },
    target: graph.target,
    documentUrl: graph.documentUrl,
    buildFingerprint: fingerprint,
    entrypoints: [...graph.entryScripts, ...graph.entryStyles]
      .map((url) => urlToLogicalPath.get(url))
      .filter((value): value is string => value !== undefined),
    resources: resources.map((resource) => ({
      sourceUrl: resource.url,
      originalPath: resource.originalPath,
      logicalPath: resource.logicalPath,
      kind: resource.kind,
      mediaType: resource.mediaType,
      bytes: resource.bytes.byteLength,
      sha256: resource.sha256,
      shapeHash: resource.shapeHash,
      minhash: resource.minhash,
      ...(resource.etag ? { etag: resource.etag } : {}),
      ...(resource.lastModified ? { lastModified: resource.lastModified } : {}),
    })),
    analysis,
  };
  const previousAnalysis =
    previous?.generator.normalizationVersion === NORMALIZATION_VERSION
      ? previous.analysis
      : undefined;
  const summary = createSummaryMarkdown(analysis, previousAnalysis, {
    fingerprint,
    resources: resources.length,
    bytes: resources.reduce(
      (total, resource) => total + resource.bytes.byteLength,
      0,
    ),
  });
  await writeSnapshot({
    output,
    resources,
    canonicalSources,
    manifest,
    summary,
  });
  return {
    changed: true,
    fingerprint,
    resourceCount: resources.length,
    output,
  };
}

async function normalizeHtml(
  html: string,
  current: LogicalResource,
  resources: LogicalResource[],
  urlAliases: ReadonlyMap<string, string>,
): Promise<string> {
  let normalized = html;
  const replacements = new Map<string, string>();
  for (const resource of resources) {
    if (resource.kind === "html" || resource.url === current.url) continue;
    const relativePath = relativeImport(
      current.logicalPath,
      resource.logicalPath,
    );
    const knownUrls = [
      resource.url,
      ...[...urlAliases]
        .filter(([, finalUrl]) => finalUrl === resource.url)
        .map(([alias]) => alias),
    ];
    for (const value of knownUrls) {
      const source = new URL(value);
      if (source.pathname === "/") continue;
      const pathAndQuery = `${source.pathname}${source.search}`;
      replacements.set(source.href, relativePath);
      replacements.set(pathAndQuery, relativePath);
    }
  }
  for (const [candidate, replacement] of [...replacements].sort(
    ([left], [right]) => right.length - left.length,
  )) {
    normalized = normalized.replaceAll(candidate, replacement);
  }
  return format(normalized, { parser: "html", endOfLine: "lf" });
}
