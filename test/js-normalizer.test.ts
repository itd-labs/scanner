import { describe, expect, it } from "vitest";

import {
  buildExportMaps,
  collectCssClassNames,
  normalizeJavaScript,
} from "../src/js-normalizer.js";

const URL = "https://example.test/assets/login-AbCd1234.js";

async function normalize(source: string): Promise<string> {
  const sources = new Map([[URL, source]]);
  const cssClassNames = collectCssClassNames(sources.values(), [
    `.Ab3d{}.Xy91{}.Kp02{}.Rt8z{}.Lm31{}.Vv02{}`,
  ]);
  return normalizeJavaScript(source, {
    logicalPath: "routes/login.js",
    sourceUrl: URL,
    urlToLogicalPath: new Map([[URL, "routes/login.js"]]),
    exportMaps: buildExportMaps(sources),
    cssClassNames,
  });
}

describe("normalizeJavaScript", () => {
  it("is alpha-equivalent across minifier renames", async () => {
    const oldSource = `
      const A = "Ab3d", B = "Xy91", C = "Kp02";
      const s = { container: A, title: B, button: C };
      const q = (e) => { const t = e + 1; return t * 2 };
      export { q as Login, q as default };
    `;
    const newSource = `
      const X = "Rt8z", Y = "Lm31", Z = "Vv02";
      const c = { container: X, title: Y, button: Z };
      const p = (n) => { const r = n + 1; return r * 2 };
      export { p as Login, p as default };
    `;

    expect(await normalize(oldSource)).toBe(await normalize(newSource));
  });

  it("does not hide behavior changes", async () => {
    const oldOutput = await normalize(`const a=(b)=>b+1;export{a as Login}`);
    const newOutput = await normalize(`const x=(y)=>y+2;export{x as Login}`);
    expect(oldOutput).not.toBe(newOutput);
  });

  it("normalizes only Sentry UUID metadata", async () => {
    const first = await normalize(`
      const businessId = "11111111-1111-4111-8111-111111111111";
      globalThis._sentryDebugIdIdentifier = "sentry-dbid-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
      export { businessId as value };
    `);
    expect(first).toContain("11111111-1111-4111-8111-111111111111");
    expect(first).toContain("sentry-dbid-<sentry-debug-id>");
  });

  it("does not use a reserved export name as a local binding", async () => {
    const output = await normalize(`class A {}; export { A as class }`);
    expect(() => buildExportMaps(new Map([[URL, output]]))).not.toThrow();
    expect(output).not.toContain("class class ");
  });

  it("keeps unrelated top-level names stable when a declaration is inserted", async () => {
    const before = await normalize(`
      const a = () => "first";
      const b = () => "unchanged-marker";
      export { a as first, b as second };
    `);
    const after = await normalize(`
      const x = () => "first";
      const y = () => "new-value";
      const z = () => "unchanged-marker";
      export { x as first, y as added, z as second };
    `);
    const bindingForMarker = (source: string) =>
      source.match(
        /const\s+([\w$]+)\s*=\s*\(\)\s*=>\s*"unchanged-marker"/u,
      )?.[1];
    expect(bindingForMarker(before)).toBeDefined();
    expect(bindingForMarker(after)).toBe(bindingForMarker(before));
  });
});
