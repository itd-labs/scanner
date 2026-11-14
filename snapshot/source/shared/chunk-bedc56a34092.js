import {
  symbol_047 as imported,
  symbol_064 as imported_2,
  symbol_002 as imported_3,
  symbol_068 as imported_4,
  symbol_048 as imported_5,
  symbol_077 as imported_6,
  symbol_081 as imported_7,
  symbol_045 as imported_8,
  aj as imported_9,
  symbol_020 as imported_10,
  symbol_003 as imported_11,
  symbol_049 as imported_12,
  symbol_050 as imported_13,
  symbol_051 as imported_14,
  symbol_052 as imported_15,
  symbol_046 as imported_16,
  symbol_053 as imported_17,
  symbol_083 as imported_18,
  symbol_054 as imported_19,
  symbol_065 as imported_20,
  aq as imported_21,
} from "../entry.js";
import { C as imported_22 } from "./chunk-ab6fb2cd21e7.js";
import {
  symbol_002 as imported_23,
  s as imported_24,
  a as imported_25,
  symbol_001 as imported_26,
} from "./phone-access-module.js";
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
const local_f06debfc = 2;
const local_21adbbce = "phone_entry";
const local_19496933 = {
  LEGAL_CONTEXT_EXPIRED: true,
  LEGAL_DOCUMENTS_UPDATED: true,
  LEGAL_RECEIPT_EXPIRED: true,
  LEGAL_CONTEXT_INVALID: true,
  LEGAL_CONTEXT_USED: true,
};
const local_515315ce = "Не удалось загрузить документы. Попробуйте ещё раз.";
const local_4e00404c = (arg) =>
  arg instanceof imported && Object.hasOwn(local_19496933, arg.code);
function fn_8f59ad22(arg) {
  if (arg instanceof imported) {
    if (local_4e00404c(arg)) {
      return "Документы обновились. Проверьте их и отправьте номер ещё раз.";
    }
    if (arg.code === "LEGAL_UNAVAILABLE") {
      return local_515315ce;
    }
    return "";
  }
  return "";
}
const local_ca89592c = (arg, arg_2 = Date.now()) => arg_2 >= arg.expiresAt;
function fn_f7821baf(arg, arg_2) {
  if (!arg || typeof arg !== "object") {
    return false;
  }
  const local = arg;
  const local_2 = local.bundle;
  if (
    local.protocolVersion !== local_f06debfc ||
    typeof local.contextToken !== "string" ||
    !local.contextToken ||
    typeof local.expiresAt !== "number" ||
    !local_2 ||
    local_2.flow !== arg_2 ||
    typeof local_2.submitLabel !== "string" ||
    !local_2.submitLabel ||
    !Array.isArray(local_2.text) ||
    !local_2.text.length ||
    !Array.isArray(local_2.documents)
  ) {
    return false;
  }
  return local_2.text.every(
    (arg) =>
      typeof arg?.text === "string" &&
      (arg.document === undefined ||
        local_2.documents.some(
          (arg) =>
            arg?.slug === arg.document &&
            typeof arg.url === "string" &&
            arg.url.startsWith("/legal/"),
        )),
  );
}
async function fn_57bde396(arg = local_21adbbce) {
  const local = await imported_23(`/consent?flow=${encodeURIComponent(arg)}`);
  if (!fn_f7821baf(local, arg) || local_ca89592c(local)) {
    throw new imported("LEGAL_UNAVAILABLE");
  }
  return local;
}
const local_bb7cdd2d = (arg) => ({
  protocolVersion: arg.protocolVersion,
  contextToken: arg.contextToken,
});
function symbol_001(arg) {
  const { intent: local } = arg;
  const [local_2, local_3] = imported_2(false);
  const local_4 = imported_3("direct");
  const [local_5, local_6] = imported_2(false);
  const local_7 = imported_3(0);
  const [local_8, local_9] = imported_2("");
  const [local_10, local_11] = imported_2("");
  const [local_12, local_13] = imported_2("number");
  const [local_14, local_15] = imported_2("ru");
  const [local_16, local_17] = imported_2("");
  const [local_18, local_19] = imported_2("");
  const [local_20, local_21] = imported_2("");
  const [local_22, local_23] = imported_2(false);
  const [local_24, local_25] = imported_2(false);
  const local_26 = imported_3(false);
  const [local_27, local_28] = imported_2("");
  const [local_29, local_30] = imported_2("");
  const [local_31, local_32] = imported_2(null);
  const [local_33, local_34] = imported_2([]);
  const [local_35, local_36] = imported_2("");
  const [local_37, local_38] = imported_2("");
  const [local_39, local_40] = imported_2(0);
  const [local_41, local_42] = imported_2(() => Date.now());
  imported_4(() => {
    const local = setInterval(() => local_42(Date.now()), 1000);
    return () => clearInterval(local);
  }, []);
  const local_43 = Math.max(0, Math.ceil((local_39 - local_41) / 1000));
  const local_44 = !local_18 && imported_5(local_14, local_16);
  const local_45 =
    !!local_44 &&
    local_10 !== local_44 &&
    (local_8 === local_44 ||
      (local_27 === local_44 && local_31?.reverseOnly === true));
  const [local_46, local_47] = imported_2(null);
  const [local_48, local_49] = imported_2(false);
  const [local_50, local_51] = imported_2("Получить код");
  const local_52 = imported_3(0);
  const local_53 = imported_3(null);
  const local_54 = imported_6(async () => {
    const local = ++local_52.current;
    try {
      const local = await fn_57bde396();
      if (local !== local_52.current) {
        return;
      }
      local_47(local);
      local_51(local.bundle.submitLabel);
    } catch {
      if (local === local_52.current) {
        local_49(true);
      }
    }
  }, []);
  const local_55 = imported_6(() => {
    local_47(null);
    local_49(false);
    local_54();
  }, [local_54]);
  imported_4(() => {
    const local = local_52;
    local_54();
    return () => {
      local.current++;
    };
  }, [local_54]);
  const local_56 = async (arg) => {
    if (!local_26.current) {
      local_26.current = true;
      local_25(true);
      local_21("");
      try {
        await arg();
      } catch (error) {
        local_21(
          fn_8f59ad22(error) || imported_25(error) || imported_17(error),
        );
        if (
          error instanceof imported &&
          error.retryIn &&
          !(local_12 === "number" && local_4.current === "reverse")
        ) {
          local_40(Date.now() + error.retryIn * 1000);
        }
      } finally {
        local_26.current = false;
        local_25(false);
      }
    }
  };
  const local_57 = async () => {
    await imported_18.getState().initialize();
    const local = imported_18.getState().status;
    if (local !== "authenticated" && local !== "needs_profile") {
      throw new Error("Session unavailable");
    }
    if (local === "needs_profile") {
      if (
        window.location.pathname !== imported_19.ONBOARDING &&
        !imported_20(imported_19.ONBOARDING, true)
      ) {
        window.location.assign(imported_19.ONBOARDING);
      }
      return;
    }
    imported_21.syncIfAttached().catch(() => {});
    if (
      [imported_19.LOGIN, imported_19.REGISTER, imported_19.ONBOARDING].some(
        (arg) => arg === window.location.pathname,
      )
    ) {
      const local = imported_19.HOME;
      if (!imported_20(local, true)) {
        window.location.assign(local);
      }
    }
  };
  const local_58 = async (arg) => {
    if (arg.step === "password" && arg.flowToken) {
      local_30(arg.flowToken);
      local_36("");
      local_13("password");
    } else if (arg.accessToken) {
      await local_57();
    } else {
      throw new Error("Unexpected login response");
    }
  };
  const local_59 = (arg) => {
    local_23(false);
    const local = local_53.current;
    local_53.current = null;
    if (local_44) {
      if (!local) {
        local_21(local_515315ce);
        local_55();
        return;
      }
      local_56(async () => {
        try {
          const local = await imported_26.start(
            local_44,
            arg,
            local_bb7cdd2d(local),
            local_4.current,
          );
          if (local.reverseOnly && local_4.current !== "reverse") {
            local_11("");
            local_9("");
            local_28(local_44);
            local_30(local.flowToken);
            local_32(local);
            local_34([]);
            local_7.current = Date.now() + 240000;
            local_21(imported_15);
            return;
          }
          local_11("");
          local_9("");
          local_6(local_4.current === "reverse");
          local_3(local.reverseOnly === true);
          local_28(local_44);
          local_30(local.flowToken);
          local_32(local);
          local_34([]);
          local_13("code");
          if (local_4.current !== "reverse") {
            local_40(Date.now() + local.retryIn * 1000);
          }
        } catch (error) {
          if (fn_8f59ad22(error)) {
            local_55();
          }
          error instanceof imported &&
            (error.code === "PHONE_NUMBER_LIMIT_REVERSE_AVAILABLE"
              ? (local_9(local_44),
                local_11(""),
                local_28(local_44),
                local_30(""),
                local_32(null))
              : [
                  "TOO_MANY_REQUESTS",
                  "REVERSE_BUDGET_EXHAUSTED",
                  "REVERSE_UNAVAILABLE",
                ].includes(error.code) &&
                (local_9(""),
                local_11(local_44),
                local_32(null),
                local_30("")));
          throw error;
        }
      });
    }
  };
  const local_60 = (arg) => {
    arg.preventDefault();
    if (local_12 === "number") {
      if (!local_44 || local_43 || local_24) {
        return;
      }
      if (!local_46 || local_ca89592c(local_46)) {
        local_55();
        return;
      }
      local_4.current = "direct";
      local_53.current = local_46;
      local_21("");
      local_23(true);
      return;
    }
    local_56(async () => {
      if (local_12 === "code") {
        if (
          !local_31 ||
          local_31.reverseOnly ||
          local_33.join("").length !== local_31.codeLength
        ) {
          return;
        }
        let local;
        try {
          local = await imported_26.verify(
            local_27,
            local_29,
            local_33.join(""),
          );
        } catch (error) {
          if (local_4e00404c(error)) {
            local_13("number");
            local_34([]);
            local_30("");
            local_32(null);
            local_55();
          }
          throw error;
        }
        await local_58(local);
      } else {
        if (
          local_12 === "reset" &&
          (local_35 !== local_37 ||
            !/^(?=.*[A-Za-z])(?=.*\d).{8,100}$/.test(local_35))
        ) {
          local_21(
            "Пароли должны совпадать: от 8 символов, латинская буква и цифра.",
          );
          return;
        }
        if (local_12 === "reset") {
          await imported_26.reset(local_27, local_29, local_35);
        } else {
          await imported_26.password(local_27, local_29, local_35);
        }
        await local_57();
      }
    });
  };
  return imported_7("div", {
    className: imported_24.card,
    "data-reverse-open": local_2,
    children: [
      imported_7("div", {
        className: imported_24.brand,
        children: imported_7(imported_8, {}),
      }),
      imported_7("div", {
        className: imported_24.symbol,
        children: imported_7("svg", {
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          children: [
            imported_7("rect", {
              x: "6",
              y: "2",
              width: "12",
              height: "20",
              rx: "3",
            }),
            imported_7("path", {
              d: "M10 5h4m-3 14h2",
            }),
          ],
        }),
      }),
      imported_7(
        "h1",
        {
          className: imported_24.phase,
          children:
            local_12 === "number"
              ? local === "sign-up"
                ? "Регистрация"
                : "Вход по телефону"
              : local_12 === "code"
                ? local_2
                  ? "Позвоните сами"
                  : local_31?.reverseOnly
                    ? "Не удалось позвонить"
                    : "Подтвердите номер"
                : local_12 === "reset"
                  ? "Новый пароль"
                  : "Облачный пароль",
        },
        local_12 + String(local_2),
      ),
      imported_7(
        "p",
        {
          className: `${imported_24.description} ${imported_24.phase}`,
          children:
            local_12 === "number"
              ? local === "sign-up"
                ? "Создайте аккаунт по номеру телефона. Номер подтвердим проверочным кодом."
                : "Войдите или создайте аккаунт. Номер подтвердим проверочным кодом."
              : local_12 === "code"
                ? local_2
                  ? "Позвоните на выданный номер с этого телефона. Код вводить не нужно."
                  : local_31?.reverseOnly
                    ? "Вы можете позвонить сами или повторить запрос позже."
                    : local_31?.channel === "push"
                      ? "Код отправлен в приложение ИТД."
                      : local_31?.channel === "sms"
                        ? "Введите код из сообщения."
                        : `Введите последние ${local_31?.codeLength ?? 4} цифры номера входящего звонка.`
                : local_12 === "password"
                  ? "Для этого аккаунта включена дополнительная защита."
                  : "Номер подтверждён. Задайте новый пароль для входа.",
        },
        local_12 + String(local_2),
      ),
      imported_7(
        "form",
        {
          className: `${imported_24.form} ${imported_24.phase}`,
          onSubmit: local_60,
          children: [
            local_12 === "number"
              ? imported_7(imported_9, {
                  country: local_14,
                  digits: local_16,
                  disabled: local_24,
                  error: local_18,
                  onChange: (arg, arg_2, arg_3) => {
                    local_15(arg);
                    local_17(arg_2);
                    local_19(arg_3);
                    local_21("");
                  },
                })
              : imported_7("span", {
                  className: imported_24.number,
                  children: local_27.replace(
                    /^\+7(\d{3})(\d{3})(\d{2})(\d{2})$/,
                    "+7 ($1) $2-$3-$4",
                  ),
                }),
            (local_12 === "password" || local_12 === "reset") &&
              imported_7("label", {
                className: imported_24.field,
                children: [
                  local_12 === "reset" ? "Новый пароль" : "Облачный пароль",
                  imported_7("input", {
                    type: "password",
                    autoComplete:
                      local_12 === "reset"
                        ? "new-password"
                        : "current-password",
                    maxLength: 100,
                    value: local_35,
                    onInput: (arg) => local_36(arg.currentTarget.value),
                    disabled: local_24,
                    required: true,
                  }),
                ],
              }),
            local_12 === "reset" &&
              imported_7("label", {
                className: imported_24.field,
                children: [
                  "Повторите пароль",
                  imported_7("input", {
                    type: "password",
                    autoComplete: "new-password",
                    maxLength: 100,
                    value: local_37,
                    onInput: (arg) => local_38(arg.currentTarget.value),
                    disabled: local_24,
                    required: true,
                  }),
                ],
              }),
            (local_20 || local_18 || (local_12 === "number" && local_48)) &&
              imported_7("p", {
                className: imported_24.error,
                role: "alert",
                children: local_20 || local_18 || local_515315ce,
              }),
            local_12 === "number" &&
              local_48 &&
              imported_7("button", {
                className: imported_24.link,
                type: "button",
                onClick: local_55,
                children: "Загрузить документы ещё раз",
              }),
            local_12 !== "code" &&
              imported_7(imported_10, {
                children: imported_7(imported_11, {
                  type: "submit",
                  fullWidth: true,
                  size: "lg",
                  loading: local_24,
                  disabled:
                    local_12 === "number"
                      ? !local_44 || !!local_43 || !local_46
                      : !local_35,
                  children:
                    local_12 === "number"
                      ? local_43
                        ? `Подождите ${local_43} с`
                        : local_50
                      : local_12 === "reset"
                        ? "Сохранить и войти"
                        : "Войти",
                }),
              }),
            local_12 === "number" &&
              imported_7("div", {
                className: imported_24.reverseEntry,
                "data-ready": local_45,
                "aria-hidden": !local_45,
                inert: !local_45,
                children: imported_7("div", {
                  children: imported_7(imported_11, {
                    type: "button",
                    fullWidth: true,
                    size: "lg",
                    disabled: local_24 || !local_46,
                    onClick: () => {
                      if (!(!local_44 || local_26.current)) {
                        if (
                          local_27 === local_44 &&
                          local_31?.reverseOnly &&
                          local_29 &&
                          Date.now() < local_7.current
                        ) {
                          local_6(true);
                          local_3(true);
                          local_13("code");
                          local_21("");
                          return;
                        }
                        if (!local_46 || local_ca89592c(local_46)) {
                          local_55();
                          return;
                        }
                        local_4.current = "reverse";
                        local_53.current = local_46;
                        local_21("");
                        local_23(true);
                      }
                    },
                    children: "Позвонить самому",
                  }),
                }),
              }),
            local_12 === "code" &&
              imported_7("div", {
                className: imported_24.verification,
                children: [
                  local_31 &&
                    imported_7(imported_12, {
                      visible: !local_2 && !local_31.reverseOnly,
                      children: [
                        imported_7(imported_13, {
                          value: local_33,
                          length: local_31.codeLength,
                          onChange: local_34,
                          disabled: local_24,
                          status: local_20 ? "error" : "idle",
                        }),
                        imported_7(imported_11, {
                          type: "submit",
                          fullWidth: true,
                          size: "lg",
                          loading: local_24,
                          disabled:
                            local_33.join("").length !== local_31.codeLength,
                          children: "Продолжить",
                        }),
                        imported_7("button", {
                          className: imported_24.link,
                          type: "button",
                          disabled: local_24 || !!local_43,
                          onClick: () => {
                            local_56(async () => {
                              const local = await imported_26.resend(
                                local_27,
                                local_29,
                              );
                              local_32(local);
                              local_34([]);
                              local_40(Date.now() + local.retryIn * 1000);
                            });
                          },
                          children: local_43
                            ? `Повторить через ${local_43} с`
                            : "Позвонить ещё раз",
                        }),
                      ],
                    }),
                  imported_7(
                    imported_14,
                    {
                      embedded: true,
                      directEntry: local_5,
                      onUnavailable: () => {
                        local_13("number");
                        local_3(false);
                        local_9("");
                        local_11(local_27);
                        local_32(null);
                        local_30("");
                        local_21(
                          "Слишком много попыток. Подождите перед повторным запросом.",
                        );
                      },
                      onExit: (arg, arg_2) => {
                        if (arg || arg_2 === 0) {
                          local_30("");
                          local_32(null);
                          local_9(arg_2 === 0 ? "" : local_27);
                          local_7.current = 0;
                        }
                        if (arg_2 === 0) {
                          local_11(local_27);
                        }
                        local_13("number");
                        local_3(false);
                        local_21(
                          arg_2 === 0
                            ? "Слишком много попыток. Подождите перед повторным запросом."
                            : local_43
                              ? "Подождите перед повторным запросом, либо воспользуйтесь альтернативным методом."
                              : imported_15,
                        );
                      },
                      initialFailure: local_31?.reverseOnly,
                      phone: local_27,
                      flowToken: local_29,
                      disabled: local_24,
                      onModeChange: (arg) => {
                        local_3(arg);
                        local_21("");
                      },
                      onComplete: local_58,
                    },
                    local_27 + local_29,
                  ),
                  local_31?.reverseOnly &&
                    !local_2 &&
                    imported_7("button", {
                      className: imported_24.link,
                      type: "button",
                      disabled: local_24 || !!local_43,
                      onClick: () => {
                        local_56(async () => {
                          const local = await imported_26.resend(
                            local_27,
                            local_29,
                          );
                          local_32(local);
                          local_34([]);
                          local_40(Date.now() + local.retryIn * 1000);
                        });
                      },
                      children: local_43
                        ? `Повторить через ${local_43} с`
                        : "Позвонить ещё раз",
                    }),
                ],
              }),
            local_12 === "password" &&
              imported_7("button", {
                className: imported_24.link,
                type: "button",
                disabled: local_24,
                onClick: () => {
                  local_13("reset");
                  local_36("");
                  local_21("");
                },
                children: "Не помню пароль",
              }),
            local_12 === "reset" &&
              imported_7("a", {
                className: imported_24.link,
                href: "/forgot-password",
                children: "Восстановить через почту",
              }),
            local_12 === "number"
              ? arg.intent === "sign-up"
                ? imported_7("p", {
                    className: imported_24.terms,
                    children: [
                      "Уже есть аккаунт? ",
                      imported_7("a", {
                        href: "/login",
                        children: "Войти",
                      }),
                    ],
                  })
                : imported_7("button", {
                    className: imported_24.back,
                    type: "button",
                    disabled: local_24,
                    onClick: arg.onBack,
                    children: "Вернуться ко входу по почте",
                  })
              : imported_7("button", {
                  className: imported_24.back,
                  type: "button",
                  disabled: local_24,
                  onClick: () => {
                    local_13("number");
                    local_34([]);
                    local_36("");
                    local_38("");
                    local_30("");
                    local_21("");
                  },
                  children: "Другой номер телефона",
                }),
            (local_12 === "code" ||
              local_12 === "password" ||
              local_12 === "reset") &&
              imported_7(imported_16, {}),
          ],
        },
        local_12,
      ),
      local_12 === "number" &&
        local_46 &&
        imported_7("p", {
          className: imported_24.terms,
          children: local_46.bundle.text.map((arg, arg_2) => {
            const local =
              arg.document &&
              local_46.bundle.documents.find((arg) => arg.slug === arg.document)
                ?.url;
            if (local) {
              return imported_7(
                "a",
                {
                  href: local,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: arg.text,
                },
                arg_2,
              );
            }
            return arg.text;
          }),
        }),
      imported_7(imported_22, {
        isOpen: local_22,
        onClose: () => local_23(false),
        onVerify: local_59,
      }),
    ],
  });
}
export { symbol_001 };
