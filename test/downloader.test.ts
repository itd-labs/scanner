import { afterEach, describe, expect, it, vi } from "vitest";

import { downloadSite } from "../src/downloader.js";
import type { ScannerConfig } from "../src/types.js";

const CONFIG: ScannerConfig = {
  target: "https://example.test/",
  output: "snapshot",
  requestTimeoutMs: 1_000,
  retries: 0,
  maxResources: 10,
  maxResourceBytes: 10_000,
  maxTotalBytes: 50_000,
  userAgent: "itd-scanner-test",
};

afterEach(() => vi.unstubAllGlobals());

describe("downloadSite", () => {
  it("rejects HTML returned for a JavaScript entrypoint", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (input: string | URL | Request) => {
        const url = String(input);
        return response(
          url,
          url.endsWith("app.js")
            ? "<!doctype html><script src='/challenge.js'></script>"
            : "<!doctype html><script src='/app.js'></script>",
          "text/html",
        );
      }),
    );

    await expect(downloadSite(CONFIG)).rejects.toThrow(
      "Expected javascript but received html",
    );
  });

  it("uses the final same-origin URL as the entrypoint after a redirect", async () => {
    const finalUrl = "https://example.test/assets/app-AbCd1234.js";
    vi.stubGlobal(
      "fetch",
      vi.fn(async (input: string | URL | Request) => {
        const url = String(input);
        if (url === CONFIG.target) {
          return response(
            url,
            "<!doctype html><script src='/app.js'></script>",
            "text/html",
          );
        }
        if (url.endsWith("/app.js")) {
          return response(url, "", "text/plain", 302, { location: finalUrl });
        }
        return response(url, "export const value = 1", "text/javascript");
      }),
    );

    const graph = await downloadSite(CONFIG);

    expect(graph.entryScripts).toEqual([finalUrl]);
    expect(graph.resources.get(finalUrl)?.requestedUrl).toBe(
      "https://example.test/app.js",
    );
    expect(graph.urlAliases.get("https://example.test/app.js")).toBe(finalUrl);
  });

  it("does not let an earlier optional 404 hide a required import", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (input: string | URL | Request) => {
        const url = String(input);
        if (url === CONFIG.target) {
          return response(
            url,
            "<!doctype html><script src='/first.js'></script><script src='/second.js'></script>",
            "text/html",
          );
        }
        if (url.endsWith("/first.js")) {
          return response(
            url,
            'const optionalAsset = "/missing.js";',
            "text/javascript",
          );
        }
        if (url.endsWith("/second.js")) {
          return response(url, 'import "/missing.js";', "text/javascript");
        }
        return response(url, "missing", "text/plain", 404);
      }),
    );

    await expect(downloadSite(CONFIG)).rejects.toThrow(
      "HTTP 404 for https://example.test/missing.js",
    );
  });

  it("validates a cached redirect target when it later becomes required", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (input: string | URL | Request) => {
        const url = String(input);
        if (url === CONFIG.target) {
          return response(
            url,
            "<!doctype html><script src='/first.js'></script><script src='/second.js'></script>",
            "text/html",
          );
        }
        if (url.endsWith("/first.js")) {
          return response(
            url,
            'const optionalAsset = "/alias.png";',
            "text/javascript",
          );
        }
        if (url.endsWith("/second.js")) {
          return response(url, 'import "/shared.js";', "text/javascript");
        }
        if (url.endsWith("/alias.png")) {
          return response(url, "", "text/plain", 302, {
            location: "https://example.test/shared.js",
          });
        }
        return response(url, "not really javascript", "image/png");
      }),
    );

    await expect(downloadSite(CONFIG)).rejects.toThrow(
      "Expected javascript but received image",
    );
  });
});

function response(
  url: string,
  body: string,
  contentType: string,
  status = 200,
  headers: Record<string, string> = {},
): Response {
  const result = new Response(body, {
    status,
    headers: { "content-type": contentType, ...headers },
  });
  Object.defineProperty(result, "url", { value: url });
  return result;
}
