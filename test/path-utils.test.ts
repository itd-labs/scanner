import { describe, expect, it } from "vitest";

import { safeMirrorPath } from "../src/path-utils.js";

describe("safeMirrorPath", () => {
  it("rejects encoded path separators inside a URL segment", () => {
    expect(() =>
      safeMirrorPath(
        new URL("https://example.test/assets/%2e%2e%2foutside.txt"),
      ),
    ).toThrow("Unsafe resource path");
    expect(() =>
      safeMirrorPath(
        new URL("https://example.test/assets/%2e%2e%5coutside.txt"),
      ),
    ).toThrow("Unsafe resource path");
  });

  it("keeps ordinary decoded resource paths", () => {
    expect(
      safeMirrorPath(new URL("https://example.test/assets/icon%20play.svg")),
    ).toBe("assets/icon play.svg");
  });
});
