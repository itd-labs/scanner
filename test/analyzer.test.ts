import { describe, expect, it } from "vitest";

import { analyzeJavaScript, createSummaryMarkdown } from "../src/analyzer.js";

describe("analyzeJavaScript", () => {
  it("extracts review-relevant surface changes", () => {
    const report = analyzeJavaScript([
      `
        localStorage.setItem("theme-storage", "dark");
        fetch("/api/v1/posts");
        const socket = "wss://ws.example.test/live";
        const image = "https://cdn.example.test/images/avatar.jpg";
        const telemetry = "https://key@sentry.example.test/2";
        view(Switch, { children: [
          view(Login, { path: "/login" }),
          view(NotFound, { default: true }),
        ] });
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

  it("preserves route priority, fallbacks, and effective parameter constraints", () => {
    const source = `
      const ProfileRoute = ({ slug }) => {
        if (!slug?.startsWith("@")) return view(NotFound, {});
        return view(Profile, { username: slug.slice(1) });
      };
      const navigation = { href: "/not-a-route" };
      view(Switch, {
        children: [
          view(Home, { path: "/" }),
          view(Shop, { path: "/shop/:rest*" }),
          view(ProfileRoute, { path: "/:slug" }),
          view(NotFound, { default: true }),
        ],
      });
    `;
    const report = analyzeJavaScript([source]);

    expect(report.routes).toEqual(["/", "/shop/:rest*", "/@:slug", "*"]);
    expect(report.routes).not.toContain("/not-a-route");
    expect(report.routeDefinitions).toEqual([
      {
        table: "source:1#1",
        priority: 1,
        declaredPath: "/",
        effectivePath: "/",
        kind: "route",
        constraints: [],
      },
      {
        table: "source:1#1",
        priority: 2,
        declaredPath: "/shop/:rest*",
        effectivePath: "/shop/:rest*",
        kind: "route",
        constraints: ["rest is a zero-or-more segment splat"],
      },
      {
        table: "source:1#1",
        priority: 3,
        declaredPath: "/:slug",
        effectivePath: "/@:slug",
        kind: "route",
        constraints: ['slug starts with "@"'],
      },
      {
        table: "source:1#1",
        priority: 4,
        declaredPath: "*",
        effectivePath: "*",
        kind: "fallback",
        constraints: ["matches when no earlier route matched"],
      },
    ]);

    const summary = createSummaryMarkdown(report, undefined, {
      fingerprint: "test",
      resources: 1,
      bytes: source.length,
    });
    expect(summary).toContain("first match wins");
    expect(summary).toContain("| `source:1#1` | 3 | `/:slug` | `/@:slug`");

    const changedSource = source
      .replace('startsWith("@")', 'startsWith("#")')
      .replace(
        'view(Shop, { path: "/shop/:rest*" }),\n          view(ProfileRoute, { path: "/:slug" })',
        'view(ProfileRoute, { path: "/:slug" }),\n          view(Shop, { path: "/shop/:rest*" })',
      );
    const changedSummary = createSummaryMarkdown(
      analyzeJavaScript([changedSource]),
      report,
      { fingerprint: "changed", resources: 1, bytes: changedSource.length },
    );
    expect(changedSummary).toContain(
      "Changed `/:slug`: priority 3 → 2; effective pattern `/@:slug` → `/#:slug`",
    );
    expect(changedSummary).toContain("Changed `/shop/:rest*`: priority 2 → 3");

    const incidentalCheck = analyzeJavaScript([
      `
        const BroadRoute = ({ slug }) => {
          const helper = () => {
            if (!slug.startsWith("@")) return false;
            return true;
          };
          return view(Page, { highlighted: helper() });
        };
        view(Switch, { children: [
          view(Home, { path: "/" }),
          view(BroadRoute, { path: "/:slug" }),
          view(NotFound, { default: true }),
        ] });
      `,
    ]);
    expect(incidentalCheck.routes).toContain("/:slug");
    expect(incidentalCheck.routes).not.toContain("/@:slug");

    const nonRejectingGuards = analyzeJavaScript([
      `
        const PreviewRoute = ({ previewSlug, preview }) => {
          if (preview) {
            if (!previewSlug.startsWith("@")) return view(NotFound, {});
          }
          return view(Profile, {});
        };
        const LoadingRoute = ({ loadingSlug }) => {
          if (!loadingSlug.startsWith("#")) return view(Loading, {});
          return view(Profile, {});
        };
        view(Switch, { children: [
          view(PreviewRoute, { path: "/preview/:previewSlug" }),
          view(LoadingRoute, { path: "/loading/:loadingSlug" }),
          view(NotFound, { default: true }),
        ] });
      `,
    ]);
    expect(nonRejectingGuards.routes).toContain("/preview/:previewSlug");
    expect(nonRejectingGuards.routes).toContain("/loading/:loadingSlug");
    expect(nonRejectingGuards.routes).not.toContain("/preview/@:previewSlug");
    expect(nonRejectingGuards.routes).not.toContain("/loading/#:loadingSlug");
  });

  it("keeps independent route tables and resolves component bindings by scope", () => {
    const report = analyzeJavaScript([
      `
        {
          const R = ({ slug }) => {
            if (!slug.startsWith("@")) return view(NotFound, {});
            return view(Profile, {});
          };
          view(Switch, { children: [
            view(Home, { path: "/" }),
            view(R, { path: "/:slug" }),
            view(NotFound, { default: true }),
          ] });
        }
        const telemetry = { path: "/not-a-real-route" };
        {
          const R = ({ slug }) => {
            if (!slug.startsWith("#")) return view(NotFound, {});
            return view(AdminSection, {});
          };
          view(Switch, { children: [
            view(Admin, { path: "/admin" }),
            view(R, { path: "/:slug" }),
            view(NotFound, { default: true }),
          ] });
        }
      `,
    ]);

    expect(report.routes).toEqual(["/", "/@:slug", "*", "/admin", "/#:slug"]);
    expect(report.routes).not.toContain("/not-a-real-route");
    expect(report.routeDefinitions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          table: "source:1#1",
          priority: 2,
          declaredPath: "/:slug",
          effectivePath: "/@:slug",
        }),
        expect.objectContaining({
          table: "source:1#2",
          priority: 1,
          declaredPath: "/admin",
        }),
        expect.objectContaining({
          table: "source:1#2",
          priority: 2,
          declaredPath: "/:slug",
          effectivePath: "/#:slug",
        }),
      ]),
    );

    const firstTable = `view(Switch, { children: [
      view(A, { path: "/a" }),
      view(NotFound, { default: true }),
    ] });`;
    const secondTable = `view(Switch, { children: [
      view(B, { path: "/b" }),
      view(NotFound, { default: true }),
    ] });`;
    const originalOrder = analyzeJavaScript([
      { id: "a.js", source: firstTable },
      { id: "b.js", source: secondTable },
    ]);
    const reversedOrder = analyzeJavaScript([
      { id: "b.js", source: secondTable },
      { id: "a.js", source: firstTable },
    ]);
    expect(reversedOrder.routeDefinitions).toEqual(
      originalOrder.routeDefinitions,
    );
    const reorderedSourcesSummary = createSummaryMarkdown(
      reversedOrder,
      originalOrder,
      { fingerprint: "reordered", resources: 2, bytes: 1 },
    );
    expect(reorderedSourcesSummary).toContain("No changes.");
    expect(reorderedSourcesSummary).not.toContain("table `a.js#1` →");

    const previousMembership = analyzeJavaScript([
      {
        id: "entry.js",
        source: `
          view(Switch, { children: [
            view(X, { path: "/x" }),
            view(A, { path: "/a" }),
            view(NotFound, { default: true }),
          ] });
          view(Switch, { children: [
            view(Y, { path: "/y" }),
            view(B, { path: "/b" }),
            view(NotFound, { default: true }),
          ] });
        `,
      },
    ]);
    const currentMembership = analyzeJavaScript(
      [
        {
          id: "entry.js",
          source: `
          view(Switch, { children: [
            view(Y, { path: "/y" }),
            view(A, { path: "/a" }),
            view(NotFound, { default: true }),
          ] });
          view(Switch, { children: [
            view(X, { path: "/x" }),
            view(B, { path: "/b" }),
            view(NotFound, { default: true }),
          ] });
          `,
        },
      ],
      previousMembership,
    );
    const membershipSummary = createSummaryMarkdown(
      currentMembership,
      previousMembership,
      { fingerprint: "membership", resources: 1, bytes: 1 },
    );
    expect(membershipSummary).toContain(
      "Changed `/x`: table `entry.js#1` → `entry.js#2`",
    );
    expect(membershipSummary).toContain(
      "Changed `/y`: table `entry.js#2` → `entry.js#1`",
    );
  });

  it("keeps table identities when tables are inserted or removed", () => {
    const table = (path: string, component: string) => `
      view(Switch, { children: [
        view(${component}, { path: "${path}" }),
        view(NotFound, { default: true }),
      ] });
    `;
    const previous = analyzeJavaScript([
      {
        id: "entry.js",
        source: `${table("/a", "A")} ${table("/b", "B")}`,
      },
    ]);
    const inserted = analyzeJavaScript(
      [
        {
          id: "entry.js",
          source: `${table("/new", "New")} ${table("/a", "A")} ${table("/b", "B")}`,
        },
      ],
      previous,
    );

    expect(
      inserted.routeDefinitions.find(
        ({ declaredPath }) => declaredPath === "/a",
      )?.table,
    ).toBe("entry.js#1");
    expect(
      inserted.routeDefinitions.find(
        ({ declaredPath }) => declaredPath === "/b",
      )?.table,
    ).toBe("entry.js#2");
    expect(
      inserted.routeDefinitions.find(
        ({ declaredPath }) => declaredPath === "/new",
      )?.table,
    ).toBe("entry.js#3");

    const insertedSummary = createSummaryMarkdown(inserted, previous, {
      fingerprint: "inserted-table",
      resources: 1,
      bytes: 1,
    });
    expect(insertedSummary).toContain("Added: table `entry.js#3` #1 `/new`");
    expect(insertedSummary).toContain("Added: table `entry.js#3` #2 `*`");
    expect(insertedSummary).not.toContain("Changed `/a`");
    expect(insertedSummary).not.toContain("Changed `/b`");

    const removed = analyzeJavaScript(
      [
        {
          id: "entry.js",
          source: table("/b", "B"),
        },
      ],
      previous,
    );
    expect(
      removed.routeDefinitions.find(({ declaredPath }) => declaredPath === "/b")
        ?.table,
    ).toBe("entry.js#2");
    const removedSummary = createSummaryMarkdown(removed, previous, {
      fingerprint: "removed-table",
      resources: 1,
      bytes: 1,
    });
    expect(removedSummary).toContain("Removed: table `entry.js#1` #1 `/a`");
    expect(removedSummary).not.toContain("Changed `/b`");

    const renamedPrevious = analyzeJavaScript([
      {
        id: "entry.js",
        source: table("/a", "A"),
      },
    ]);
    const renamed = analyzeJavaScript(
      [
        {
          id: "entry.js",
          source: table("/renamed", "Renamed"),
        },
      ],
      renamedPrevious,
    );
    expect(renamed.routeDefinitions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          table: "entry.js#1",
          declaredPath: "/renamed",
        }),
        expect.objectContaining({
          table: "entry.js#1",
          kind: "fallback",
        }),
      ]),
    );
    expect(renamed.routeDefinitions).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({ table: "entry.js#2" }),
      ]),
    );
    const renamedSummary = createSummaryMarkdown(renamed, renamedPrevious, {
      fingerprint: "renamed-route",
      resources: 1,
      bytes: 1,
    });
    expect(renamedSummary).not.toContain("fallback");
    expect(renamedSummary).not.toContain("entry.js#2");
  });

  it("diffs repeated declared patterns by occurrence without map collisions", () => {
    const oldSource = `
      const AtRoute = ({ slug }) => {
        if (!slug.startsWith("@")) return view(NotFound, {});
        return view(Profile, {});
      };
      const HashRoute = ({ slug }) => {
        if (!slug.startsWith("#")) return view(NotFound, {});
        return view(Tag, {});
      };
      view(Switch, { children: [
        view(Home, { path: "/" }),
        view(AtRoute, { path: "/:slug" }),
        view(HashRoute, { path: "/:slug" }),
        view(NotFound, { default: true }),
      ] });
    `;
    const previous = analyzeJavaScript([oldSource]);
    const current = analyzeJavaScript([
      oldSource.replace('slug.startsWith("#")', 'slug.startsWith("$")'),
    ]);
    const summary = createSummaryMarkdown(current, previous, {
      fingerprint: "duplicates",
      resources: 1,
      bytes: oldSource.length,
    });

    expect(summary.match(/Changed `\/:slug`/gu)).toHaveLength(1);
    expect(summary).toContain("effective pattern `/#:slug` → `/$:slug`");
    expect(summary).not.toContain("effective pattern `/@:slug` →");

    const reordered = analyzeJavaScript([
      oldSource.replace(
        'view(AtRoute, { path: "/:slug" }),\n        view(HashRoute, { path: "/:slug" })',
        'view(HashRoute, { path: "/:slug" }),\n        view(AtRoute, { path: "/:slug" })',
      ),
    ]);
    const reorderedSummary = createSummaryMarkdown(reordered, previous, {
      fingerprint: "duplicate-order",
      resources: 1,
      bytes: oldSource.length,
    });
    expect(reorderedSummary.match(/Changed `\/:slug`/gu)).toHaveLength(2);
    expect(reorderedSummary).toContain("priority 3 → 2");
    expect(reorderedSummary).toContain("priority 2 → 3");
    expect(reorderedSummary).not.toContain("effective pattern");
  });
});
