import {
  symbol_060 as imported,
  symbol_061 as imported_2,
  symbol_062 as imported_3,
  ax as imported_4,
  symbol_070 as imported_5,
  symbol_067 as imported_6,
  symbol_063 as imported_7,
  symbol_083 as imported_8,
  symbol_002 as imported_9,
  symbol_058 as imported_10,
  az as imported_11,
  symbol_033 as imported_12,
  symbol_059 as imported_13,
  symbol_026 as imported_14,
  symbol_064 as imported_15,
  symbol_006 as imported_16,
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
const local_e2a47d41 = "c_frame";
const local_e3cffaad = {
  frame: local_e2a47d41,
};
const local_a07d92c1 = new RegExp(`^${imported_7.ALICE_EVENT}/?`);
function fn_e063082e() {
  const local = window.location.pathname.replace(local_a07d92c1, "");
  return `${imported_11}/${local}${window.location.search}`;
}
export function fn_3c3ff162(arg) {
  const local = imported();
  const local_2 = imported_2();
  const local_3 = imported_3((arg) => arg.fetchPortal);
  const local_4 = imported_4(local);
  imported_5(() => {
    local_3();
  }, [local_3]);
  imported_5(() => {
    if (local_2 && !local_4) {
      imported_6(imported_7.EVENT, true);
    }
  }, [local_2, local_4]);
  if (!local_2 || !local_4) {
    return null;
  }
  return imported_8(fn_fe166f3e, {});
}
function fn_fe166f3e() {
  const local = imported_9(null);
  const local_2 = imported_9(fn_e063082e()).current;
  const local_3 = imported_9(
    window.location.pathname.replace(local_a07d92c1, ""),
  );
  const local_4 = imported_9(window.location.search);
  imported_5(() => {
    const local = (arg) => {
      local.current?.contentWindow?.postMessage(arg, window.location.origin);
    };
    const local_2 = async (arg) => {
      const local = arg ? await imported_12() : imported_13();
      local({
        type: "itd-event:auth",
        token: local,
      });
    };
    const local_3 = (arg, arg_2) => {
      local_3.current = arg;
      local_4.current = arg_2;
      const local = `${imported_7.ALICE_EVENT}${arg ? `/${arg}` : ""}${arg_2}`;
      if (local !== window.location.pathname + window.location.search) {
        history.replaceState(null, "", local);
      }
    };
    const local_4 = async (arg) => {
      if (typeof arg.profileId !== "string") {
        return;
      }
      const local = arg.profileId;
      if (arg.avatar) {
        await imported_14.getState().fetchProfile();
        const local = imported_14.getState().profile;
        if (local?.id === local) {
          imported_15
            .getState()
            .replaceAuthorAvatar(local, local.avatar ?? null);
        }
      }
      if (arg.nickname) {
        window.dispatchEvent(new Event("event-nickname-changed"));
      }
      imported_16(local);
    };
    const local_5 = (arg) => {
      if (
        arg.origin !== window.location.origin ||
        arg.source !== local.current?.contentWindow
      ) {
        return;
      }
      const local = arg.data;
      switch (local?.type) {
        case "itd-event:auth-request":
          local_2(local.expired === true);
          return;
        case "itd-event:path":
          local_3(
            typeof local.path === "string" ? local.path : "",
            typeof local.search === "string" ? local.search : "",
          );
          return;
        case "itd-event:navigate":
          if (typeof local.path === "string" && /^\/(?!\/)/.test(local.path)) {
            imported_6(local.path);
          }
          return;
        case "itd-event:profile-changed":
          local_4(local);
          return;
      }
    };
    const local_6 = imported_10(() => {
      local_2(false);
    });
    window.addEventListener("message", local_5);
    return () => {
      local_6();
      window.removeEventListener("message", local_5);
    };
  }, []);
  imported_5(() => {
    const local = window.location.pathname.replace(local_a07d92c1, "");
    const local_2 = window.location.search;
    if (!(local === local_3.current && local_2 === local_4.current)) {
      local_3.current = local;
      local_4.current = local_2;
      local.current?.contentWindow?.postMessage(
        {
          type: "itd-event:goto",
          path: local,
          search: local_2,
        },
        window.location.origin,
      );
    }
  });
  return imported_8("iframe", {
    ref: local,
    className: local_e3cffaad.frame,
    src: local_2,
    title: "Ивент «Алиса AI»",
    sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
  });
}
