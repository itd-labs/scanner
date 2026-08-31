import {
  symbol_073 as imported,
  symbol_058 as imported_2,
  aj as imported_3,
} from "../entry.js";
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
export function fn_59f80974(arg) {
  const local = imported((arg) => arg.profile?.isPhoneVerified);
  imported_2(() => {
    if (local) {
      window.location.href = "../site/index.html";
      return;
    }
    window.dispatchEvent(new Event(imported_3));
  }, [local]);
  return null;
}
