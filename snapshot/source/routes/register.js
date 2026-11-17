import { symbol_086 as imported } from "../entry.js";
import { symbol_001 as imported_2 } from "../shared/chunk-bedc56a34092.js";
import "../shared/chunk-ab6fb2cd21e7.js";
import "../shared/phone-access.js";
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
export const local_6a09b6ca = (arg) =>
  imported(imported_2, {
    intent: "sign-up",
  });
export { local_6a09b6ca as default };
