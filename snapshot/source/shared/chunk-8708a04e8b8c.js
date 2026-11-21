import {
  symbol_012 as imported,
  symbol_222 as imported_2,
  symbol_002 as imported_3,
  symbol_275 as imported_4,
  symbol_050 as imported_5,
  symbol_051 as imported_6,
  symbol_288 as imported_7,
  symbol_041 as imported_8,
  symbol_072 as imported_9,
  symbol_083 as imported_10,
  symbol_046 as imported_11,
  symbol_089 as imported_12,
} from "../entry.js";
import { s as imported_13 } from "./search-api.js";
import { G as imported_14 } from "./chunk-7229b2be5161.js";
import "./use-purchase-dialog.js";
const local_49250f21 = "c_modal";
const local_4d1d1199 = "c_info";
const local_2b79335c = "c_picker";
const local_96021100 = "c_stage";
const local_7a20a5a9 = "c_glow";
const local_9073986e = "c_pin";
const local_bf576e2f = "c_sparkles";
const local_38234735 = "c_capsule";
const local_458fcd7d = "c_skeleton";
const local_3793ee2e = "c_features";
const local_fcc2eb6c = "c_primary";
const local_a394e6fb = "c_secondary";
const local_c876bc81 = "c_retry";
const local_f5e1b846 = "c_person";
const local_68cde253 = "c_results";
const local_d0e9365a = "c_subscriptionStatus";
const local_6ba984d4 = {
  modal: local_49250f21,
  info: local_4d1d1199,
  picker: local_2b79335c,
  stage: local_96021100,
  glow: local_7a20a5a9,
  pin: local_9073986e,
  sparkles: local_bf576e2f,
  capsule: local_38234735,
  skeleton: local_458fcd7d,
  features: local_3793ee2e,
  primary: local_fcc2eb6c,
  secondary: local_a394e6fb,
  retry: local_c876bc81,
  person: local_f5e1b846,
  results: local_68cde253,
  subscriptionStatus: local_d0e9365a,
};
const local_dcea9abb = (arg) => {
  if (arg % 10 >= 2 && arg % 10 <= 4 && (arg % 100 < 12 || arg % 100 > 14)) {
    return "раза";
  }
  return "раз";
};
const local_7053fd03 =
  "У пользователя уже есть подписка. Подарить ещё одну нельзя.";
function fn_2d841615({
  userId: arg,
  name: arg_2,
  image: arg_3,
  onClose: arg_4,
}) {
  const local = imported((arg) => arg.profile?.id);
  const [local_2, local_3] = imported_2(null);
  const [local_4, local_5] = imported_2(0);
  const [local_6, local_7] = imported_2(false);
  const [local_8, local_9] = imported_2(0);
  const [local_10, local_11] = imported_2("info");
  const [local_12, local_13] = imported_2("");
  const [local_14, local_15] = imported_2([]);
  const [local_16, local_17] = imported_2(false);
  const [local_18, local_19] = imported_2(false);
  const [local_20, local_21] = imported_2(null);
  const [local_22, local_23] = imported_2(false);
  const [local_24, local_25] = imported_2(false);
  const local_26 = imported_3(null);
  imported_4(() => {
    let local = true;
    local_7(false);
    imported_5(arg)
      .then((arg) => {
        if (local) {
          local_3(arg);
        }
      })
      .catch(() => {
        if (local) {
          local_7(true);
        }
      });
    return () => {
      local = false;
    };
  }, [arg, local_8]);
  imported_4(() => {
    if (local_2 === null) {
      return;
    }
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      local_5(local_2);
      return;
    }
    let local = 0;
    const local_2 = performance.now();
    const local_3 = (arg) => {
      const local = Math.min(1, (arg - local_2) / 650);
      local_5(Math.round(local_2 * (1 - (1 - local) ** 3)));
      if (local < 1) {
        local = requestAnimationFrame(local_3);
      }
    };
    local = requestAnimationFrame(local_3);
    return () => cancelAnimationFrame(local);
  }, [local_2]);
  imported_4(() => {
    local_15([]);
    local_19(false);
    local_23(false);
    local_25(false);
    const local = local_12.trim();
    if (local_10 !== "pick" || !local || local.length < 2) {
      local_17(false);
      return;
    }
    let local_2 = true;
    local_17(true);
    const local_3 = setTimeout(() => {
      imported_13
        .globalSearch(local.slice(0, 100), 20, 1)
        .then((arg) => {
          if (local_2) {
            local_15(
              arg.users.filter((arg) => {
                const local = arg.userId ?? arg.id;
                return (
                  local &&
                  local !== local &&
                  local !== imported_6 &&
                  local !== "00000000-0000-0000-0000-000000000000"
                );
              }),
            );
          }
        })
        .catch(() => {
          if (local_2) {
            local_19(true);
          }
        })
        .finally(() => {
          if (local_2) {
            local_17(false);
          }
        });
    }, 300);
    return () => {
      local_2 = false;
      local_26.current = null;
      clearTimeout(local_3);
    };
  }, [local_12, local_10, local]);
  const local_27 = async (arg) => {
    const local = arg.userId ?? arg.id;
    if (
      !local ||
      !local ||
      local === local ||
      imported.getState().profile?.id !== local ||
      arg.hasNuksta ||
      local_26.current
    ) {
      return;
    }
    const local_2 = Symbol();
    const local_3 = imported_11.captureRequest();
    const local_4 = () =>
      local_26.current === local_2 &&
      local_3() &&
      imported.getState().profile?.id === local;
    local_26.current = local_2;
    local_23(true);
    local_25(false);
    try {
      const local = await imported_12.getProfileByUsername(local, {
        force: true,
        silent: true,
      });
      if (!local_4()) {
        return;
      }
      if (local.id !== local || local.isDeleted) {
        throw new Error("Recipient unavailable");
      }
      if (local.hasNuksta === true || local.subscription?.isActive === true) {
        local_15((arg) =>
          arg.map((arg) => {
            if ((arg.userId ?? arg.id) === local) {
              return {
                ...arg,
                hasNuksta: true,
              };
            }
            return arg;
          }),
        );
        return;
      }
      if (local.hasNuksta !== false && local.subscription?.isActive !== false) {
        throw new Error("Unknown subscription status");
      }
      local_21({
        id: local,
        name: arg.displayName,
        username: arg.username ?? undefined,
        avatar: arg.avatar,
      });
    } catch {
      if (local_4()) {
        local_25(true);
      }
    } finally {
      if (local_26.current === local_2) {
        local_26.current = null;
        local_23(false);
      }
    }
  };
  if (local_20) {
    return imported_7(imported_14, {
      isOpen: true,
      recipient: local_20,
      onClose: arg_4,
    });
  }
  return imported_8(
    imported_7(imported_10, {
      title: local_10 === "info" ? "Даритель НУКСТА" : "Кому подарить НУКСТА",
      onClose: arg_4,
      className: local_6ba984d4.modal,
      children:
        local_10 === "info"
          ? imported_7("div", {
              className: local_6ba984d4.info,
              children: [
                imported_7("div", {
                  className: local_6ba984d4.stage,
                  children: [
                    imported_7("span", {
                      className: local_6ba984d4.glow,
                    }),
                    imported_7("span", {
                      className: local_6ba984d4.sparkles,
                      "aria-hidden": "true",
                      children: "✦",
                    }),
                    imported_7("img", {
                      className: local_6ba984d4.pin,
                      src: arg_3,
                      alt: "Пин дарителя НУКСТА",
                      width: 150,
                      height: 150,
                    }),
                    imported_7("div", {
                      className: local_6ba984d4.capsule,
                      "aria-label":
                        local_2 === null
                          ? "Загружаем число подарков"
                          : `${local_2} подарков НУКСТЫ`,
                      children:
                        local_2 === null
                          ? imported_7("span", {
                              className: local_6ba984d4.skeleton,
                            })
                          : local_4.toLocaleString("ru-RU"),
                    }),
                  ],
                }),
                imported_7("h2", {
                  children:
                    local_2 === null
                      ? `${local === arg ? "Ты" : arg_2} — даритель НУКСТА`
                      : `${local === arg ? "Ты" : arg_2} подарил НУКСТА ${local_2.toLocaleString("ru-RU")} ${local_dcea9abb(local_2)}`,
                }),
                local_6 &&
                  imported_7("button", {
                    className: local_6ba984d4.retry,
                    onClick: () => local_9((arg) => arg + 1),
                    children: "Обновить число подарков",
                  }),
                imported_7("div", {
                  className: local_6ba984d4.features,
                  children: [
                    imported_7("h3", {
                      children: "Что даёт НУКСТА",
                    }),
                    imported_7("div", {
                      children: [
                        imported_7("span", {
                          "aria-hidden": "true",
                          children: "↗",
                        }),
                        imported_7("p", {
                          children: [
                            imported_7("strong", {
                              children: "Пишите кому угодно",
                            }),
                            "С НУКСТА можно писать в личку любому, кто открыт для сообщений.",
                          ],
                        }),
                      ],
                    }),
                    imported_7("div", {
                      children: [
                        imported_7("span", {
                          "aria-hidden": "true",
                          children: "✦",
                        }),
                        imported_7("p", {
                          children: [
                            imported_7("strong", {
                              children: "Видно издалека",
                            }),
                            "Ник с градиентом и пин рядом с именем.",
                          ],
                        }),
                      ],
                    }),
                    imported_7("div", {
                      children: [
                        imported_7("span", {
                          "aria-hidden": "true",
                          children: "♡",
                        }),
                        imported_7("p", {
                          children: [
                            imported_7("strong", {
                              children: "Подарок виден всем",
                            }),
                            "Каждый подарок прибавляется к счётчику на пине дарителя.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                imported_7("button", {
                  className: local_6ba984d4.primary,
                  disabled: !local,
                  onClick: () => local_11("pick"),
                  children: "Подарить НУКСТА",
                }),
                imported_7("button", {
                  className: local_6ba984d4.secondary,
                  onClick: arg_4,
                  children: "Не сейчас",
                }),
              ],
            })
          : imported_7("div", {
              className: local_6ba984d4.picker,
              children: [
                imported_7("input", {
                  autoFocus: true,
                  value: local_12,
                  maxLength: 100,
                  placeholder: "Имя или @никнейм",
                  "aria-label": "Найти получателя подарка",
                  onInput: (arg) => {
                    local_26.current = null;
                    local_15([]);
                    local_13(arg.currentTarget.value);
                  },
                }),
                imported_7("div", {
                  className: local_6ba984d4.results,
                  "aria-busy": local_16,
                  children: [
                    local_14.map((arg) =>
                      imported_7(
                        "button",
                        {
                          type: "button",
                          className: local_6ba984d4.person,
                          "aria-disabled": arg.hasNuksta === true || local_22,
                          title: arg.hasNuksta ? local_7053fd03 : undefined,
                          onClick: () => {
                            local_27(arg);
                          },
                          children: [
                            imported_7(imported_9, {
                              src: arg.avatar,
                              size: "sm",
                            }),
                            imported_7("span", {
                              children: [
                                imported_7("strong", {
                                  children: arg.displayName,
                                }),
                                imported_7("small", {
                                  children: ["@", arg.username],
                                }),
                                arg.hasNuksta &&
                                  imported_7("small", {
                                    className:
                                      local_6ba984d4.subscriptionStatus,
                                    children: "Уже есть подписка",
                                  }),
                              ],
                            }),
                          ],
                        },
                        arg.userId ?? arg.id,
                      ),
                    ),
                    local_16
                      ? imported_7("p", {
                          children: "Ищем…",
                        })
                      : local_18
                        ? imported_7("p", {
                            role: "alert",
                            children:
                              "Не удалось загрузить пользователей. Попробуйте ещё раз.",
                          })
                        : local_12.trim().length >= 2 && !local_14.length
                          ? imported_7("p", {
                              children: "Никого не нашли",
                            })
                          : null,
                    local_22 &&
                      imported_7("p", {
                        role: "status",
                        children: "Проверяем подписку…",
                      }),
                    local_24 &&
                      imported_7("p", {
                        role: "alert",
                        children:
                          "Не удалось проверить подписку. Попробуйте ещё раз.",
                      }),
                  ],
                }),
                imported_7("button", {
                  className: local_6ba984d4.secondary,
                  onClick: () => {
                    local_26.current = null;
                    local_11("info");
                  },
                  children: "Назад",
                }),
              ],
            }),
    }),
    document.body,
  );
}
export { fn_2d841615 as default };
