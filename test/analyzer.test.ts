import { describe, expect, it } from "vitest";

import { analyzeJavaScript } from "../src/analyzer.js";

describe("analyzeJavaScript", () => {
  it("extracts review-relevant surface changes", () => {
    const report = analyzeJavaScript([
      `
        localStorage.setItem("theme-storage", "dark");
        fetch("/api/v1/posts");
        const socket = "wss://ws.example.test/live";
        const image = "https://cdn.example.test/images/avatar.jpg";
        const telemetry = "https://key@sentry.example.test/2";
        const route = { path: "/login" };
        const label = "Войти в аккаунт";
      `,
    ]);
    expect(report.storageKeys).toContain("theme-storage");
    expect(report.endpoints).toContain("/api/v1/posts");
    expect(report.endpoints).toContain("https://key@sentry.example.test/2");
    expect(report.endpoints).not.toContain(
      "https://cdn.example.test/images/avatar.jpg",
    );
    expect(report.webSockets).toContain("wss://ws.example.test/live");
    expect(report.routes).toContain("/login");
    expect(report.userVisibleStrings).toContain("Войти в аккаунт");
  });
});
