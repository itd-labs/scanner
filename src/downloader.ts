import { init, parse as parseImports } from "es-module-lexer";
import { parse as parseHtml } from "parse5";

import { sha256 } from "./hash.js";
import { safeMirrorPath } from "./path-utils.js";
import type {
  DownloadedResource,
  ResourceGraph,
  ResourceKind,
  ScannerConfig,
} from "./types.js";

interface HtmlNode {
  tagName?: string;
  attrs?: Array<{ name: string; value: string }>;
  childNodes?: HtmlNode[];
}

interface QueuedUrl {
  url: string;
  discoveredFrom?: string;
  expectedKind?: ResourceKind;
  required: boolean;
}

const TEXT_KINDS = new Set<ResourceKind>(["html", "javascript", "css", "json"]);
const REDIRECT_CODES = new Set([301, 302, 303, 307, 308]);

export async function downloadSite(
  config: ScannerConfig,
): Promise<ResourceGraph> {
  await init;
  const target = new URL(config.target);
  const allowedOrigin = target.origin;
  const resources = new Map<string, DownloadedResource>();
  const urlAliases = new Map<string, string>();
  const entryScripts: string[] = [];
  const entryStyles: string[] = [];
  const queued = new Set<string>();
  const missingOptional = new Set<string>();
  const queue: QueuedUrl[] = [
    { url: target.href, expectedKind: "html", required: true },
  ];
  let totalBytes = 0;
  let documentUrl = target.href;

  while (queue.length > 0) {
    const item = queue.shift();
    if (!item) break;
    const normalizedUrl = normalizeUrl(item.url);
    if (queued.has(normalizedUrl)) continue;
    queued.add(normalizedUrl);

    const existingResource = resources.get(normalizedUrl);
    if (existingResource) {
      validateResponse(
        item.expectedKind,
        existingResource.kind,
        existingResource.mediaType,
        existingResource.bytes,
        existingResource.url,
      );
      urlAliases.set(normalizedUrl, normalizedUrl);
      continue;
    }

    if (queued.size > config.maxResources) {
      throw new Error(`Resource limit exceeded (${config.maxResources})`);
    }

    let response: Response;
    try {
      response = await fetchWithRetries(normalizedUrl, allowedOrigin, config);
    } catch (error) {
      if (
        !item.required &&
        error instanceof HttpStatusError &&
        error.status === 404
      ) {
        queued.delete(normalizedUrl);
        missingOptional.add(normalizedUrl);
        continue;
      }
      throw error;
    }
    const bytes = new Uint8Array(await response.arrayBuffer());
    if (bytes.byteLength > config.maxResourceBytes) {
      throw new Error(
        `Resource is too large (${bytes.byteLength} bytes): ${normalizedUrl}`,
      );
    }
    totalBytes += bytes.byteLength;
    if (totalBytes > config.maxTotalBytes) {
      throw new Error(
        `Total download limit exceeded (${config.maxTotalBytes} bytes)`,
      );
    }

    const mediaType =
      (response.headers.get("content-type") ?? "")
        .split(";", 1)[0]
        ?.trim()
        .toLowerCase() ?? "";
    const kind = detectKind(response.url, mediaType, item.expectedKind);
    validateResponse(item.expectedKind, kind, mediaType, bytes, response.url);
    const text = TEXT_KINDS.has(kind)
      ? decodeUtf8(bytes, response.url)
      : undefined;
    const etag = response.headers.get("etag");
    const lastModified = response.headers.get("last-modified");
    const resource: DownloadedResource = {
      url: normalizeUrl(response.url),
      requestedUrl: normalizedUrl,
      originalPath: safeMirrorPath(new URL(response.url)),
      kind,
      mediaType,
      bytes,
      sha256: sha256(bytes),
      ...(etag ? { etag } : {}),
      ...(lastModified ? { lastModified } : {}),
      ...(text === undefined ? {} : { text }),
      ...(item.discoveredFrom ? { discoveredFrom: item.discoveredFrom } : {}),
    };
    urlAliases.set(normalizedUrl, resource.url);
    resources.set(resource.url, resource);

    if (kind === "html" && text !== undefined) {
      documentUrl = resource.url;
      const htmlAssets = discoverHtmlAssets(text, resource.url);
      if (htmlAssets.scripts.length === 0) {
        throw new Error(
          `No external scripts found in HTML; refusing to snapshot a challenge page`,
        );
      }
      const scripts = new Set(htmlAssets.scripts);
      const styles = new Set(htmlAssets.styles);
      for (const candidate of htmlAssets.all) {
        enqueue(
          candidate,
          resource.url,
          true,
          scripts.has(candidate)
            ? "javascript"
            : styles.has(candidate)
              ? "css"
              : undefined,
        );
      }
      for (const script of htmlAssets.scripts) {
        if (new URL(script).origin === allowedOrigin)
          entryScripts.push(normalizeUrl(script));
      }
      for (const style of htmlAssets.styles) {
        if (new URL(style).origin === allowedOrigin)
          entryStyles.push(normalizeUrl(style));
      }
    } else if (kind === "javascript" && text !== undefined) {
      for (const candidate of discoverJavaScriptAssets(text, resource.url)) {
        enqueue(
          candidate.url,
          resource.url,
          candidate.required,
          candidate.required
            ? (kindFromPathname(new URL(candidate.url).pathname) ??
                "javascript")
            : undefined,
        );
      }
    } else if (kind === "css" && text !== undefined) {
      for (const candidate of discoverCssAssets(text, resource.url)) {
        enqueue(candidate, resource.url, false);
      }
    }
  }

  return {
    target: target.href,
    documentUrl,
    resources,
    urlAliases,
    entryScripts: resolveFinalUrls(entryScripts),
    entryStyles: resolveFinalUrls(entryStyles),
  };

  function enqueue(
    candidate: string,
    discoveredFrom: string,
    required: boolean,
    expectedKind?: ResourceKind,
  ): void {
    const resolved = new URL(candidate, discoveredFrom);
    resolved.hash = "";
    if (resolved.origin !== allowedOrigin) return;
    if (resolved.protocol !== "https:") return;
    const href = normalizeUrl(resolved.href);
    if (missingOptional.has(href) && !required) return;
    if (!queued.has(href)) {
      const inferredKind = expectedKind ?? kindFromPathname(resolved.pathname);
      queue.push({
        url: href,
        discoveredFrom,
        ...(inferredKind ? { expectedKind: inferredKind } : {}),
        required,
      });
    }
  }

  function resolveFinalUrls(urls: string[]): string[] {
    return [...new Set(urls.map((url) => urlAliases.get(url) ?? url))]
      .filter((url) => resources.has(url))
      .sort();
  }
}

async function fetchWithRetries(
  initialUrl: string,
  allowedOrigin: string,
  config: ScannerConfig,
): Promise<Response> {
  let lastError: unknown;
  for (let attempt = 0; attempt <= config.retries; attempt += 1) {
    try {
      return await fetchFollowingSafeRedirects(
        initialUrl,
        allowedOrigin,
        config,
      );
    } catch (error) {
      lastError = error;
      if (!isRetryable(error)) throw error;
      if (attempt >= config.retries) break;
      await new Promise((resolve) => setTimeout(resolve, 250 * 3 ** attempt));
    }
  }
  throw new Error(`Failed to download ${initialUrl}`, { cause: lastError });
}

async function fetchFollowingSafeRedirects(
  initialUrl: string,
  allowedOrigin: string,
  config: ScannerConfig,
): Promise<Response> {
  let current = new URL(initialUrl);
  for (let redirect = 0; redirect <= 5; redirect += 1) {
    if (current.origin !== allowedOrigin || current.protocol !== "https:") {
      throw new Error(`Blocked cross-origin redirect: ${current.href}`);
    }
    const response = await fetch(current, {
      redirect: "manual",
      headers: {
        accept: "text/html,application/javascript,text/css,*/*;q=0.8",
        "user-agent": config.userAgent,
      },
      signal: AbortSignal.timeout(config.requestTimeoutMs),
    });

    if (REDIRECT_CODES.has(response.status)) {
      const location = response.headers.get("location");
      if (!location)
        throw new Error(`Redirect without Location from ${current.href}`);
      current = new URL(location, current);
      continue;
    }
    if (response.status === 429 || response.status >= 500) {
      throw new RetryableHttpError(response.status, current.href);
    }
    if (!response.ok) throw new HttpStatusError(response.status, current.href);
    return response;
  }
  throw new Error(`Too many redirects for ${initialUrl}`);
}

class RetryableHttpError extends Error {
  constructor(
    public readonly status: number,
    url: string,
  ) {
    super(`HTTP ${status} for ${url}`);
  }
}

class HttpStatusError extends Error {
  constructor(
    public readonly status: number,
    url: string,
  ) {
    super(`HTTP ${status} for ${url}`);
  }
}

function isRetryable(error: unknown): boolean {
  return (
    error instanceof RetryableHttpError ||
    (error instanceof Error &&
      (error.name === "TimeoutError" || error.name === "TypeError"))
  );
}

function normalizeUrl(value: string): string {
  const url = new URL(value);
  url.hash = "";
  return url.href;
}

function detectKind(
  url: string,
  mediaType: string,
  expected?: ResourceKind,
): ResourceKind {
  if (mediaType === "text/html" || mediaType === "application/xhtml+xml")
    return "html";
  if (/^(?:application|text)\/(?:javascript|ecmascript)$/u.test(mediaType))
    return "javascript";
  if (mediaType === "text/css") return "css";
  if (mediaType === "application/json") return "json";
  if (mediaType.startsWith("image/")) return "image";
  if (mediaType.startsWith("font/") || mediaType.includes("woff"))
    return "font";

  const pathname = new URL(url).pathname.toLowerCase();
  if (/\.(?:m?js)$/u.test(pathname)) return "javascript";
  if (pathname.endsWith(".css")) return "css";
  if (pathname.endsWith(".json")) return "json";
  if (/\.(?:png|jpe?g|gif|svg|webp|avif|ico)$/u.test(pathname)) return "image";
  if (/\.(?:woff2?|ttf|otf)$/u.test(pathname)) return "font";
  return expected ?? "other";
}

function kindFromPathname(pathname: string): ResourceKind | undefined {
  const lower = pathname.toLowerCase();
  if (/\.(?:m?js)$/u.test(lower)) return "javascript";
  if (lower.endsWith(".css")) return "css";
  if (lower.endsWith(".json")) return "json";
  if (/\.(?:png|jpe?g|gif|svg|webp|avif|ico)$/u.test(lower)) return "image";
  if (/\.(?:woff2?|ttf|otf)$/u.test(lower)) return "font";
  return undefined;
}

function validateResponse(
  expectedKind: ResourceKind | undefined,
  kind: ResourceKind,
  mediaType: string,
  bytes: Uint8Array,
  url: string,
): void {
  if (bytes.byteLength === 0) throw new Error(`Empty response: ${url}`);
  if (expectedKind && kind !== expectedKind) {
    throw new Error(
      `Expected ${expectedKind} but received ${kind}${mediaType ? ` (${mediaType})` : ""}: ${url}`,
    );
  }
}

function decodeUtf8(bytes: Uint8Array, url: string): string {
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch (error) {
    throw new Error(`Response is not valid UTF-8: ${url}`, { cause: error });
  }
}

function discoverHtmlAssets(
  html: string,
  baseUrl: string,
): {
  all: string[];
  scripts: string[];
  styles: string[];
} {
  const root = parseHtml(html) as unknown as HtmlNode;
  const all = new Set<string>();
  const scripts = new Set<string>();
  const styles = new Set<string>();

  visit(root);
  return { all: [...all], scripts: [...scripts], styles: [...styles] };

  function visit(node: HtmlNode): void {
    const attrs = Object.fromEntries(
      (node.attrs ?? []).map(({ name, value }) => [name, value]),
    );
    if (node.tagName === "script" && attrs.src) {
      const url = new URL(attrs.src, baseUrl).href;
      all.add(url);
      scripts.add(url);
    } else if (node.tagName === "link" && attrs.href) {
      const relations = new Set((attrs.rel ?? "").toLowerCase().split(/\s+/u));
      if (
        relations.has("stylesheet") ||
        relations.has("modulepreload") ||
        relations.has("preload") ||
        relations.has("icon")
      ) {
        const url = new URL(attrs.href, baseUrl).href;
        all.add(url);
        if (relations.has("stylesheet")) styles.add(url);
      }
    } else if (
      (node.tagName === "img" || node.tagName === "source") &&
      attrs.src
    ) {
      all.add(new URL(attrs.src, baseUrl).href);
    }
    for (const child of node.childNodes ?? []) visit(child);
  }
}

function discoverJavaScriptAssets(
  source: string,
  baseUrl: string,
): Array<{ url: string; required: boolean }> {
  const result = new Map<string, boolean>();
  const [imports] = parseImports(source);
  for (const item of imports) {
    if (!item.n || item.n.startsWith("data:") || item.n.startsWith("node:"))
      continue;
    try {
      result.set(resolveDiscoveredUrl(item.n, baseUrl), true);
    } catch {
      // A non-URL bare package import is not a downloadable site asset.
    }
  }

  const quotedAsset =
    /["']((?:\.\/|\/)?(?:assets\/)?[^"']+\.(?:m?js|css|json|svg|png|jpe?g|webp|avif|woff2?|ttf|otf)(?:\?[^"']*)?)["']/giu;
  for (const match of source.matchAll(quotedAsset)) {
    const specifier = match[1];
    if (!specifier) continue;
    try {
      const url = resolveDiscoveredUrl(specifier, baseUrl);
      if (!result.has(url)) result.set(url, false);
    } catch {
      // Ignore malformed literals; the parser will report malformed JS later.
    }
  }
  return [...result].map(([url, required]) => ({ url, required }));
}

function resolveDiscoveredUrl(specifier: string, baseUrl: string): string {
  if (specifier.startsWith("assets/")) {
    return new URL(`/${specifier}`, new URL(baseUrl).origin).href;
  }
  return new URL(specifier, baseUrl).href;
}

function discoverCssAssets(source: string, baseUrl: string): string[] {
  const result = new Set<string>();
  const urlPattern = /url\(\s*(["']?)([^"')]+)\1\s*\)/giu;
  for (const match of source.matchAll(urlPattern)) {
    const specifier = match[2]?.trim();
    if (
      !specifier ||
      specifier.startsWith("data:") ||
      specifier.startsWith("#")
    )
      continue;
    try {
      result.add(new URL(specifier, baseUrl).href);
    } catch {
      // Ignore malformed CSS URLs.
    }
  }
  return [...result];
}
