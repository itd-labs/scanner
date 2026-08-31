import {
  symbol_002 as imported,
  symbol_054 as imported_2,
  symbol_058 as imported_3,
  symbol_033 as imported_4,
  symbol_071 as imported_5,
  symbol_034 as imported_6,
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
const local_e2a47d41 = "c_frame";
const local_30e69e8f = "c_raised";
const local_4ae1eafe = {
  frame: local_e2a47d41,
  raised: local_30e69e8f,
};
const local_bcced4d6 = "/public/shop";
function fn_d9068f76() {
  const local = window.location.pathname.replace(/^\/shop\/?/, "");
  if (local) {
    return `${local_bcced4d6}/${local}${window.location.search}`;
  }
  return `${local_bcced4d6}/`;
}
export function fn_29449b32(arg) {
  const local = imported(null);
  const local_2 = imported(fn_d9068f76()).current;
  const [local_3, local_4] = imported_2(false);
  const local_5 = imported(window.location.pathname.replace(/^\/shop\/?/, ""));
  imported_3(() => {
    const local = () => {
      const local = local.current?.contentWindow;
      if (local) {
        local.postMessage(
          {
            type: "itd-shop:auth",
            token: imported_6(),
          },
          window.location.origin,
        );
      }
    };
    const local_2 = () => {
      const local = local.current?.contentWindow;
      if (!local) {
        return;
      }
      const local_2 = getComputedStyle(document.documentElement);
      const local_3 = (arg) => parseInt(local_2.getPropertyValue(arg), 10) || 0;
      const local_4 =
        window.innerWidth >= 1174
          ? local_3("--sidebar-gap") + local_3("--sidebar-width") + 24
          : 0;
      local.postMessage(
        {
          type: "itd-shop:layout",
          gutter: local_4,
        },
        window.location.origin,
      );
    };
    const local_3 = (arg, arg_2) => {
      local_5.current = arg;
      const local = `/shop${arg ? `/${arg}` : ""}${arg_2}`;
      if (local !== window.location.pathname + window.location.search) {
        history.replaceState(null, "", local);
      }
    };
    const local_4 = (arg) => {
      if (typeof arg !== "string") {
        return;
      }
      let local;
      try {
        local = new URL(arg);
      } catch {
        return;
      }
      if (local.protocol !== "./shop-frame.js") {
        console.warn(
          "Магазин просил уйти по небезопасной ссылке",
          local.protocol,
        );
        return;
      }
      window.location.href = local.toString();
    };
    const local_5 = (arg) => {
      if (
        arg.origin !== window.location.origin ||
        arg.source !== local.current?.contentWindow
      ) {
        return;
      }
      const local = arg.data;
      if (local?.type === "itd-shop:leave") {
        local_4(local.url);
        return;
      }
      if (local?.type === "itd-shop:overlay") {
        local_4(!!local.open);
        return;
      }
      if (local?.type === "itd-shop:auth-request") {
        local();
        local_2();
        return;
      }
      if (local?.type === "itd-shop:path") {
        local_3(
          typeof local.path === "string" ? local.path : "",
          typeof local.search === "string" ? local.search : "",
        );
      }
    };
    const local_6 = imported_4(local);
    window.addEventListener("message", local_5);
    window.addEventListener("resize", local_2);
    return () => {
      local_6();
      window.removeEventListener("message", local_5);
      window.removeEventListener("resize", local_2);
    };
  }, []);
  imported_3(() => {
    const local = window.location.pathname.replace(/^\/shop\/?/, "");
    if (local !== local_5.current) {
      local_5.current = local;
      local.current?.contentWindow?.postMessage(
        {
          type: "itd-shop:goto",
          path: local,
          search: window.location.search,
        },
        window.location.origin,
      );
    }
  });
  return imported_5("iframe", {
    ref: local,
    className: `${local_4ae1eafe.frame} ${local_3 ? local_4ae1eafe.raised : ""}`,
    src: local_2,
    title: "Магазин ИТД",
    sandbox:
      "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation",
  });
}
