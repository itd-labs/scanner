import { readFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";

import { scanSite } from "../src/scanner.js";
import type { ScannerConfig } from "../src/types.js";

const OUTPUT = `.tmp/scanner-test-${process.pid}`;
const CONFIG: ScannerConfig = {
  target: "https://example.test/",
  output: OUTPUT,
  requestTimeoutMs: 1_000,
  retries: 0,
  maxResources: 10,
  maxResourceBytes: 10_000,
  maxTotalBytes: 50_000,
  userAgent: "itd-scanner-test",
};

afterEach(async () => {
  vi.unstubAllGlobals();
  await rm(OUTPUT, { recursive: true, force: true });
});

describe("scanSite", () => {
  it("removes cache-busting query parameters from canonical HTML links", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (input: string | URL | Request) => {
        const url = String(input);
        const result = new Response(
          url === CONFIG.target
            ? "<!doctype html><script src='/app.js?v=build-123'></script>"
            : "export const value = 1;",
          {
            headers: {
              "content-type":
                url === CONFIG.target ? "text/html" : "text/javascript",
            },
          },
        );
        Object.defineProperty(result, "url", { value: url });
        return result;
      }),
    );

    await scanSite(CONFIG, {
      configPath: "unused.json",
      useWakaru: false,
    });

    const html = await readFile(join(OUTPUT, "source/site/index.html"), "utf8");
    expect(html).toContain('src="../entry.js"');
    expect(html).not.toContain("build-123");
  });
});
