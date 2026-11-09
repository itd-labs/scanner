import { symbol_074 as imported, symbol_033 as imported_2 } from "../entry.js";
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
const local_338c8b70 = "c_privacy";
const local_e3cffaad = {
  privacy: local_338c8b70,
};
export function fn_12a54aae() {
  return imported("p", {
    className: local_e3cffaad.privacy,
    children: imported("a", {
      href: imported_2.PRIVACY,
      target: "_blank",
      rel: "noopener noreferrer",
      children: "Политика конфиденциальности",
    }),
  });
}
