import { describe, expect, it } from "vitest";

import { normalizeCss } from "../src/css-normalizer.js";

describe("normalizeCss", () => {
  it("replaces CSS module hashes without changing declarations", async () => {
    const output = await normalizeCss(
      ".ShiD{display:flex}.ShiD .Qo2d:hover{color:red}",
      new Map([
        ["ShiD", "c_container"],
        ["Qo2d", "c_button"],
      ]),
    );
    expect(output).toContain(".c_container");
    expect(output).toContain(".c_button:hover");
    expect(output).toContain("display: flex");
  });

  it("stabilizes orphan CSS-module selectors by rule structure", async () => {
    const before = await normalizeCss(
      ".X9N2{display:flex}.X9N2:hover{color:red}.eGS9{width:24px}",
      new Map(),
    );
    const after = await normalizeCss(
      ".pivt{display:flex}.pivt:hover{color:red}.ipF5{width:24px}",
      new Map(),
    );
    expect(after).toBe(before);
  });
});
