import {
  symbol_027 as imported,
  symbol_018 as imported_2,
  symbol_079 as imported_3,
  symbol_001 as imported_4,
  symbol_028 as imported_5,
  symbol_092 as imported_6,
  symbol_002 as imported_7,
  symbol_090 as imported_8,
  symbol_030 as imported_9,
  symbol_083 as imported_10,
  symbol_029 as imported_11,
  symbol_073 as imported_12,
  symbol_031 as imported_13,
} from "../entry.js";
const local_e9c2b385 = imported((arg) => ({
  portal: {
    active: false,
  },
  loaded: false,
  fetchPortal: async () => {
    try {
      const local = await imported_2.get("/v1/portal");
      arg({
        portal: local,
        loaded: true,
      });
    } catch {
      arg({
        loaded: true,
      });
    }
  },
}));
const local_9812c6ee = () => local_e9c2b385((arg) => arg.portal);
const local_9812c6ee_2 = () => local_e9c2b385((arg) => arg.loaded);
const local_084773c6 = "/public/events/aliceai";
function fn_59f5ed30(arg) {
  if (!arg.active || !arg.url) {
    return false;
  }
  try {
    return new URL(arg.url, window.location.origin).pathname.startsWith(
      `${local_084773c6}/`,
    );
  } catch {
    return false;
  }
}
if (typeof window !== "undefined") {
  setInterval(() => {
    if (!document.hidden) {
      local_e9c2b385.getState().fetchPortal();
    }
  }, 15000);
  window.addEventListener("focus", () => {
    local_e9c2b385.getState().fetchPortal();
  });
}
const local_e2a47d41 = "c_frame";
const local_e3cffaad = {
  frame: local_e2a47d41,
};
const local_4cce3d02 = new RegExp(`^${imported_5.ALICE_EVENT}/?`);
function fn_52161e6f() {
  const local = window.location.pathname.replace(local_4cce3d02, "");
  return `${local_084773c6}/${local}${window.location.search}`;
}
export function fn_3c3ff162(arg) {
  const local = local_9812c6ee();
  const local_2 = local_9812c6ee_2();
  const local_3 = local_e9c2b385((arg) => arg.fetchPortal);
  const local_4 = fn_59f5ed30(local);
  imported_3(() => {
    local_3();
  }, [local_3]);
  imported_3(() => {
    if (local_2 && !local_4) {
      imported_4(imported_5.EVENT, true);
    }
  }, [local_2, local_4]);
  if (!local_2 || !local_4) {
    return null;
  }
  return imported_6(fn_20cd22cf, {});
}
function fn_20cd22cf() {
  const local = imported_7(null);
  const local_2 = imported_7(fn_52161e6f()).current;
  const local_3 = imported_7(
    window.location.pathname.replace(local_4cce3d02, ""),
  );
  const local_4 = imported_7(window.location.search);
  imported_3(() => {
    const local = (arg) => {
      local.current?.contentWindow?.postMessage(arg, window.location.origin);
    };
    const local_2 = async (arg) => {
      const local = arg ? await imported_9() : imported_10();
      local({
        type: "itd-event:auth",
        token: local,
      });
    };
    const local_3 = (arg, arg_2) => {
      local_3.current = arg;
      local_4.current = arg_2;
      const local = `${imported_5.ALICE_EVENT}${arg ? `/${arg}` : ""}${arg_2}`;
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
        await imported_11.getState().fetchProfile();
        const local = imported_11.getState().profile;
        if (local?.id === local) {
          imported_12
            .getState()
            .replaceAuthorAvatar(local, local.avatar ?? null);
        }
      }
      if (arg.nickname) {
        window.dispatchEvent(new Event("event-nickname-changed"));
      }
      imported_13(local);
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
            imported_4(local.path);
          }
          return;
        case "itd-event:profile-changed":
          local_4(local);
          return;
      }
    };
    const local_6 = imported_8(() => {
      local_2(false);
    });
    window.addEventListener("message", local_5);
    return () => {
      local_6();
      window.removeEventListener("message", local_5);
    };
  }, []);
  imported_3(() => {
    const local = window.location.pathname.replace(local_4cce3d02, "");
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
  return imported_6("iframe", {
    ref: local,
    className: local_e3cffaad.frame,
    src: local_2,
    title: "Ивент «Алиса AI»",
    sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
  });
}
