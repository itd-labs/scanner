import { describe, expect, it } from "vitest";

import { minhashSimilarity, structuralSignature } from "../src/hash.js";

describe("structuralSignature", () => {
  it("ignores local identifier and Vite hash churn", () => {
    const oldSource = `import{a as x}from"./index-AbCd1234.js";const y=(z)=>z+1;`;
    const newSource = `import{b as q}from"./index-ZyXw9876.js";const p=(r)=>r+1;`;
    const oldSignature = structuralSignature(oldSource);
    const newSignature = structuralSignature(newSource);

    expect(oldSignature.shapeHash).toBe(newSignature.shapeHash);
    expect(minhashSimilarity(oldSignature.minhash, newSignature.minhash)).toBe(
      1,
    );
  });

  it("retains meaningful literal changes", () => {
    const oldSignature = structuralSignature(`fetch("/api/v1/posts")`);
    const newSignature = structuralSignature(`fetch("/api/v2/posts")`);
    expect(oldSignature.shapeHash).not.toBe(newSignature.shapeHash);
  });
});
