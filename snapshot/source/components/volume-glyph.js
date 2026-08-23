import { symbol_073 as imported, symbol_063 as imported_2 } from "../entry.js";
(function () {
  try {
    const local =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
          ? global
          : typeof globalThis !== "undefined"
            ? globalThis
            : typeof self !== "undefined"
              ? self
              : {};
    local.SENTRY_RELEASE = {
      id: "1.1.2",
    };
    const local_2 = new local.Error().stack;
    if (local_2) {
      local._sentryDebugIds = local._sentryDebugIds || {};
      local._sentryDebugIds[local_2] = "<sentry-debug-id>";
      local._sentryDebugIdIdentifier = "sentry-dbid-<sentry-debug-id>";
    }
  } catch {}
})();
export function fn_86d3d305({
  muted: arg = false,
  volume: arg_2 = 1,
  size: arg_3 = 20,
}) {
  const local = arg || arg_2 === 0;
  const local_2 = !local && arg_2 < 0.7;
  return imported("svg", {
    width: arg_3,
    height: arg_3,
    viewBox: "0 0 20 20",
    fill: "none",
    "aria-hidden": "true",
    children: imported("g", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      children: [
        imported("path", {
          d: "M9.2 4a.6.6 0 0 0-1-.5L5.3 6.3l-.8.4h-2a1 1 0 0 0-.8.8v5a1 1 0 0 0 .8.8h2l.8.4 2.9 2.8a.6.6 0 0 0 1-.4z",
        }),
        local
          ? imported("path", {
              d: "M13.5 8l4 4M17.5 8l-4 4",
            })
          : imported(imported_2, {
              children: [
                imported("path", {
                  d: "M13.3 7.5a4 4 0 0 1 0 5",
                }),
                !local_2 &&
                  imported("path", {
                    d: "M16.1 15.3a7.5 7.5 0 0 0 0-10.6",
                  }),
              ],
            }),
      ],
    }),
  });
}
