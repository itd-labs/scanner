import { symbol_071 as imported } from "../entry.js";
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
      id: "1.1.4",
    };
    const local_2 = new local.Error().stack;
    if (local_2) {
      local._sentryDebugIds = local._sentryDebugIds || {};
      local._sentryDebugIds[local_2] = "<sentry-debug-id>";
      local._sentryDebugIdIdentifier = "sentry-dbid-<sentry-debug-id>";
    }
  } catch {}
})();
export const local_e17ee56b = ({ size: arg = 24 }) =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    children: [
      imported("path", {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      }),
      imported("circle", {
        cx: "12",
        cy: "12",
        r: "3",
      }),
    ],
  });
export const local_7873ca36 = ({ size: arg = 24 }) =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    children: [
      imported("path", {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      }),
      imported("path", {
        d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
      }),
      imported("path", {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      }),
      imported("path", {
        d: "m2 2 20 20",
      }),
    ],
  });
