import {
  symbol_084 as imported,
  symbol_222 as imported_2,
  symbol_275 as imported_3,
  symbol_085 as imported_4,
  symbol_086 as imported_5,
  symbol_087 as imported_6,
  symbol_088 as imported_7,
  symbol_089 as imported_8,
  symbol_090 as imported_9,
  symbol_091 as imported_10,
  symbol_092 as imported_11,
  symbol_040 as imported_12,
} from "../entry.js";
const local_a1e12a9e = new Map();
imported_12(() => {
  local_a1e12a9e.clear();
});
export function fn_8f8975c2(arg, arg_2 = true, arg_3 = true) {
  const local = imported()?.id;
  const local_2 = imported_11();
  const local_3 = local && arg ? `${local_2}:${local}:${arg}` : "";
  const [, local_4] = imported_2(0);
  imported_3(() => {
    if (!local_3 || !arg || !arg_2) {
      return;
    }
    let local = local_a1e12a9e.get(local_3);
    if (!local) {
      if (local_a1e12a9e.size >= 20) {
        for (const [local, local_2] of local_a1e12a9e) {
          if (!local_2.listeners.size) {
            local_a1e12a9e.delete(local);
            break;
          }
        }
      }
      local = {
        profile: null,
        updatedAt: 0,
        revision: 0,
        listeners: new Set(),
      };
      local_a1e12a9e.set(local_3, local);
    }
    const local_2 = local;
    const local_3 = () => local_4((arg) => arg + 1);
    local_2.listeners.add(local_3);
    const local_4 = (arg = false) => {
      if (
        !imported_6(local_2) ||
        local_a1e12a9e.get(local_3) !== local_2 ||
        local_2.pending ||
        (!arg && Date.now() - local_2.updatedAt <= 60000)
      ) {
        return;
      }
      if (arg && local_2.profile) {
        local_2.profile = imported_7(local_2.profile, false);
        local_2.listeners.forEach((arg) => arg());
      }
      const local = local_2.revision;
      const local_2 = imported_8
        .getProfileByUsername(arg, {
          force: true,
          silent: true,
        })
        .then((arg) => {
          if (!(
            !imported_6(local_2) ||
            local_a1e12a9e.get(local_3) !== local_2 ||
            local_2.revision !== local
          )) {
            local_2.profile = imported_7(arg);
            if (local && arg !== local && arg.displayName) {
              imported_9({
                ownerId: local,
                peerId: arg,
                displayName: arg.displayName,
                session: local_2,
              });
            }
            local_2.updatedAt = Date.now();
            local_2.listeners.forEach((arg) => arg());
          }
        })
        .catch(() => {})
        .finally(() => {
          if (local_2.pending === local_2) {
            local_2.pending = undefined;
          }
        });
      local_2.pending = local_2;
    };
    const local_5 = () => {
      local_2.revision++;
      local_2.updatedAt = 0;
      local_2.pending = undefined;
      if (local_2.profile) {
        local_2.profile = imported_7(local_2.profile, false);
      }
      local_2.listeners.forEach((arg) => arg());
      local_4(true);
    };
    const local_6 = arg_3 ? imported_4(local_5) : () => {};
    const local_7 = arg_3
      ? imported_5((arg) => {
          if (!arg || arg === arg) {
            local_5();
          }
        })
      : () => {};
    const local_8 = () => {
      if (document.visibilityState === "visible") {
        local_5();
      }
    };
    const local_9 = arg_3
      ? setInterval(() => {
          if (
            typeof document === "undefined" ||
            document.visibilityState === "visible"
          ) {
            local_4(true);
          }
        }, 30000)
      : undefined;
    local_4(arg_3);
    if (arg_3 && typeof document !== "undefined") {
      document.addEventListener("visibilitychange", local_8);
    }
    local_3();
    return () => {
      local_6();
      local_7();
      clearInterval(local_9);
      local_2.listeners.delete(local_3);
      if (typeof document !== "undefined") {
        document.removeEventListener("visibilitychange", local_8);
      }
    };
  }, [local_3, arg, arg_2, local_2, arg_3]);
  const local_5 = local_3 && arg_2 ? local_a1e12a9e.get(local_3) : undefined;
  if (local_5?.profile) {
    return imported_7(
      local_5.profile,
      imported_10() && local_5.listeners.size > 0,
    );
  }
  return null;
}
export function fn_8a3f472f(arg, arg_2) {
  return `${arg_2 === "male" ? "был" : arg_2 === "female" ? "была" : "был(а)"} ${fn_fa935f2f(arg) ?? "недавно"}`;
}
function fn_0f3f04de(arg, arg_2, arg_3, arg_4) {
  const local = Math.abs(arg);
  const local_2 = local % 10;
  const local_3 = local % 100;
  if (local_3 >= 11 && local_3 <= 19) {
    return arg_4;
  }
  if (local_2 === 1) {
    return arg_2;
  }
  if (local_2 >= 2 && local_2 <= 4) {
    return arg_3;
  }
  return arg_4;
}
export function fn_fa935f2f(arg) {
  if (!arg) {
    return null;
  }
  switch (arg.unit) {
    case "just_now":
      return "только что";
    case "minutes": {
      const local = arg.value ?? 1;
      const local_2 = fn_0f3f04de(local, "минуту", "минуты", "минут");
      return `${local} ${local_2} назад`;
    }
    case "hours": {
      const local = arg.value ?? 1;
      const local_2 = fn_0f3f04de(local, "час", "часа", "часов");
      return `${local} ${local_2} назад`;
    }
    case "recently":
      return "недавно";
    case "this_week":
      return "на этой неделе";
    case "this_month":
      return "в этом месяце";
    case "long_ago":
      return "давно";
    default:
      return null;
  }
}
