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
export const local_a6568a5b = ({ size: arg = 18 }) =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      imported("path", {
        fill: "currentColor",
        d: "M7.048 14.278c.022.184.052.368.09.55v.001a6.5 6.5 0 0 0 .466 1.403 4.044 4.044 0 0 1-1.442-.982.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328c.12.01.237.018.354.026Zm3.925 1.383c.052.062.108.12.166.179h-.001a3.253 3.253 0 0 1-.166-.179ZM9 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .088-.005.173-.006.254A6.5 6.5 0 0 0 7 13.443c-1.682-.111-3.11-.43-3.712-1.283-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm.32 10.333-.067.177c.02-.06.042-.119.065-.177l.075-.174a4.47 4.47 0 0 0-.074.174Zm4.998-2.759v.002c-.017-.003-.034-.008-.051-.01l.051.008Zm-.344-.05Z",
      }),
      imported("path", {
        fill: "currentColor",
        d: "M15.065 11.348c.324 0 .587.263.587.587v1.956a.587.587 0 0 0 1.174 0V13.5a3.327 3.327 0 1 0-1.33 2.66.587.587 0 0 1 .704.94 4.5 4.5 0 1 1 1.8-3.6v.391a1.76 1.76 0 0 1-3.05 1.2 2.152 2.152 0 1 1-.386-3.46.586.586 0 0 1 .501-.283ZM12.522 13.5a.978.978 0 1 0 1.956 0 .978.978 0 0 0-1.956 0Z",
      }),
    ],
  });
