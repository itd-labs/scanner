import {
  symbol_009 as imported,
  symbol_029 as imported_2,
  symbol_035 as imported_3,
  symbol_024 as imported_4,
  symbol_073 as imported_5,
  symbol_085 as imported_6,
  symbol_079 as imported_7,
  symbol_001 as imported_8,
  symbol_028 as imported_9,
  symbol_092 as imported_10,
  symbol_002 as imported_11,
  symbol_090 as imported_12,
  symbol_057 as imported_13,
} from "../entry.js";
const local_6ca67a93 = (arg) =>
  arg.slice(imported.route.length).replace(/^\//, "");
function fn_d000d2f3(arg, arg_2) {
  if (
    arg.length > 512 ||
    arg_2.length > 2048 ||
    /[\\#?]/.test(arg) ||
    arg.includes("..") ||
    arg.startsWith("../site/index.html") ||
    (arg_2 && !arg_2.startsWith("?"))
  ) {
    return null;
  }
  return `${imported.route}${arg ? `/${arg}` : ""}${arg_2}`;
}
const local_882784bd = (arg) =>
  typeof arg === "string" && /^\/(?!\/)/.test(arg);
let local_f06debfc = 0;
async function fn_8a0fa2f0(arg) {
  if (typeof arg !== "string" || imported_2.getState().profile?.id !== arg) {
    return;
  }
  const local = ++local_f06debfc;
  for (const local of [0, 750, 2000]) {
    if (local) {
      await new Promise((arg) => setTimeout(arg, local));
    }
    if (local !== local_f06debfc || imported_2.getState().profile?.id !== arg) {
      return;
    }
    try {
      const local = await imported_3.getMyProfile();
      if (
        local !== local_f06debfc ||
        imported_2.getState().profile?.id !== arg ||
        local.id !== arg
      ) {
        return;
      }
      local.halloween = imported_4(local.halloween);
      imported_2.getState().setProfile(local);
      if (local.username) {
        imported_3.updateProfileCache(local.username, {
          halloween: local.halloween,
        });
      }
      imported_5.getState().replaceAuthorHalloween(arg, local.halloween);
      window.dispatchEvent(
        new CustomEvent("halloween-profile-refreshed", {
          detail: arg,
        }),
      );
    } catch {}
  }
}
function fn_47b98a01(arg, arg_2, arg_3, arg_4) {
  if (arg && arg_3?.visible) {
    return "active";
  }
  if (arg_2 && arg_4?.visible) {
    return "checking";
  }
  if (!arg || arg_2) {
    return "loading";
  }
  return "closed";
}
const local_112fc3b2 = "c_shell";
const local_063b6a9a = "c_viewport";
const local_e66023ff = "c_waiting";
const local_e2a47d41 = "c_frame";
const local_960709d8 = {
  shell: local_112fc3b2,
  viewport: local_063b6a9a,
  waiting: local_e66023ff,
  frame: local_e2a47d41,
};
const local_17addb08 = (arg) => {
  if (typeof arg === "string") {
    return arg;
  }
  return "";
};
export const local_defeef44 = () => {
  const {
    loaded: local,
    event: local_2,
    lastEvent: local_3,
    error: local_4,
  } = imported_6();
  const local_5 = fn_47b98a01(local, local_4, local_2, local_3);
  const local_6 = local_5 === "checking";
  imported_7(() => {
    if (local_5 === "closed") {
      imported_8(imported_9.EVENT, true);
    }
  }, [local_5]);
  switch (local_5) {
    case "closed":
      return null;
    case "loading":
      return imported_10("div", {
        className: local_960709d8.shell,
        children: imported_10("p", {
          className: local_960709d8.waiting,
          role: "status",
          children: local_4
            ? "Не удалось проверить доступ к ивенту. Повторим при восстановлении связи."
            : "Загружаем ивент…",
        }),
      });
    default:
      return imported_10("div", {
        className: local_960709d8.shell,
        "aria-busy": local_6,
        children: [
          imported_10("div", {
            className: local_960709d8.viewport,
            inert: local_6 || undefined,
            children: imported_10(fn_a5d2c08b, {}),
          }),
          local_6 &&
            imported_10("p", {
              className: local_960709d8.waiting,
              role: "status",
              children: "Проверяем доступ к ивенту…",
            }),
        ],
      });
  }
};
function fn_a5d2c08b() {
  const local = imported_11(null);
  const local_2 = imported_11(
    `${imported.framePath}/${local_6ca67a93(window.location.pathname)}${window.location.search}`,
  ).current;
  const local_3 = imported_11(local_6ca67a93(window.location.pathname));
  const local_4 = imported_11(window.location.search);
  imported_7(() => {
    const local = (arg) => imported_13(local.current, arg);
    const local_2 = (arg, arg_2) => {
      local_3.current = arg;
      local_4.current = arg_2;
      const local = fn_d000d2f3(arg, arg_2);
      if (!(
        !local || local === window.location.pathname + window.location.search
      )) {
        history.replaceState(null, "", local);
      }
    };
    const local_3 = (arg) => {
      if (
        arg.origin !== window.location.origin ||
        arg.source !== local.current?.contentWindow
      ) {
        return;
      }
      const local = arg.data;
      switch (local?.type) {
        case "itd-event:auth-request":
          local(local.expired === true);
          return;
        case "itd-event:path":
          local_2(local_17addb08(local.path), local_17addb08(local.search));
          return;
        case "itd-event:navigate":
          if (local_882784bd(local.path)) {
            imported_8(local.path);
          }
          return;
        case "itd-event:profile-changed":
          if (typeof local.profileId === "string") {
            fn_8a0fa2f0(local.profileId);
          }
          return;
        case "itd-event:settings-changed":
          window.dispatchEvent(new Event("halloween-settings-changed"));
          return;
      }
    };
    const local_4 = imported_12(() => {
      local(false);
    });
    window.addEventListener("message", local_3);
    return () => {
      local_4();
      window.removeEventListener("message", local_3);
    };
  }, []);
  imported_7(() => {
    const local = local_6ca67a93(window.location.pathname);
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
  return imported_10("iframe", {
    ref: local,
    className: local_960709d8.frame,
    src: local_2,
    title: `Ивент «${imported.title}»`,
    sandbox:
      "allow-scripts allow-same-origin allow-forms allow-popups allow-downloads",
  });
}
