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
const local_87ee5215 = "c_legal";
const local_85b1b822 = "c_backButton";
const local_9d9cf508 = "c_title";
const local_c7caffa4 = "c_updated";
const local_af0b94fd = "c_section";
const local_288346ca = "c_sectionTitle";
const local_95ed4c70 = "c_text";
const local_e9ccbd22 = "c_list";
const local_354b4818 = "c_contact";
const symbol_001 = {
  legal: local_87ee5215,
  backButton: local_85b1b822,
  title: local_9d9cf508,
  updated: local_c7caffa4,
  section: local_af0b94fd,
  sectionTitle: local_288346ca,
  text: local_95ed4c70,
  list: local_e9ccbd22,
  contact: local_354b4818,
};
export { symbol_001 };
