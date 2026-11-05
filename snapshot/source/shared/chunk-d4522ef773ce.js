import { symbol_093 as imported, symbol_019 as imported_2 } from "../entry.js";
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
const local_2c917740 = "c_link";
const local_e3cffaad = {
  link: local_2c917740,
};
export function fn_35c7e49d() {
  return imported("a", {
    className: local_e3cffaad.link,
    href: imported_2.PRIVACY,
    target: "_blank",
    rel: "noopener noreferrer",
    children: "Политика конфиденциальности",
  });
}
