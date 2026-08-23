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

  it("extracts every path from an endpoint catalog used by an HTTP client", () => {
    const report = analyzeJavaScript([
      `
        const endpoints = {
          notifications: {
            list: "/notifications/",
            count: "/notifications/count",
            markAllRead: "/notifications/read-all",
            stream: "/notifications/stream",
            settings: "/notifications/settings",
          },
          users: {
            profile: (username) => \`/users/\${username}\`,
          },
        };
        const pageRoutes = { home: "/", notifications: "/notifications" };
        api.get(endpoints.notifications.count);
        navigate(pageRoutes.notifications);
      `,
    ]);

    expect(report.endpoints).toEqual(
      expect.arrayContaining([
        "/notifications/",
        "/notifications/count",
        "/notifications/read-all",
        "/notifications/stream",
        "/notifications/settings",
        "/users/:param",
      ]),
    );
    expect(report.endpoints).not.toContain("/notifications");
  });
});
