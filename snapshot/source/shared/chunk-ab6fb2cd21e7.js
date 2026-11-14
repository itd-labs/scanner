import {
  symbol_081 as imported,
  symbol_056 as imported_2,
  symbol_014 as imported_3,
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
const local_49250f21 = "c_modal";
const local_e3cffaad = {
  modal: local_49250f21,
};
export function fn_62f7b5db({ isOpen: arg, onClose: arg_2, onVerify: arg_3 }) {
  if (!arg) {
    return null;
  }
  const local = (arg) => {
    arg_3(arg);
    arg_2();
  };
  const local_2 =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light";
  return imported(imported_3, {
    onClose: arg_2,
    showHeader: false,
    className: local_e3cffaad.modal,
    frameless: true,
    children: imported(imported_2, {
      onVerify: local,
      onError: () => {},
      theme: local_2,
    }),
  });
}
