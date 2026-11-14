import {
  symbol_045 as imported,
  symbol_062 as imported_2,
  symbol_002 as imported_3,
  symbol_066 as imported_4,
  symbol_046 as imported_5,
  symbol_075 as imported_6,
  symbol_079 as imported_7,
  symbol_043 as imported_8,
  aj as imported_9,
  symbol_020 as imported_10,
  symbol_003 as imported_11,
  symbol_047 as imported_12,
  symbol_048 as imported_13,
  symbol_049 as imported_14,
  symbol_044 as imported_15,
  symbol_050 as imported_16,
  symbol_081 as imported_17,
  symbol_051 as imported_18,
  symbol_063 as imported_19,
  symbol_052 as imported_20,
} from "../entry.js";
import { C as imported_21 } from "./chunk-ab6fb2cd21e7.js";
import {
  symbol_002 as imported_22,
  symbol_003 as imported_23,
  a as imported_24,
  symbol_001 as imported_25,
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
async function fn_64234a04(arg = local_21adbbce) {
  const local = await imported_22(`/consent?flow=${encodeURIComponent(arg)}`);
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
  const [local_4, local_5] = imported_2("number");
  const [local_6, local_7] = imported_2("ru");
  const [local_8, local_9] = imported_2("");
  const [local_10, local_11] = imported_2("");
  const [local_12, local_13] = imported_2("");
  const [local_14, local_15] = imported_2(false);
  const [local_16, local_17] = imported_2(false);
  const local_18 = imported_3(false);
  const [local_19, local_20] = imported_2("");
  const [local_21, local_22] = imported_2("");
  const [local_23, local_24] = imported_2(null);
  const [local_25, local_26] = imported_2([]);
  const [local_27, local_28] = imported_2("");
  const [local_29, local_30] = imported_2("");
  const [local_31, local_32] = imported_2(0);
  const [local_33, local_34] = imported_2(() => Date.now());
  imported_4(() => {
    const local = setInterval(() => local_34(Date.now()), 1000);
    return () => clearInterval(local);
  }, []);
  const local_35 = Math.max(0, Math.ceil((local_31 - local_33) / 1000));
  const local_36 = !local_10 && imported_5(local_6, local_8);
  const [local_37, local_38] = imported_2(null);
  const [local_39, local_40] = imported_2(false);
  const [local_41, local_42] = imported_2("Получить код");
  const local_43 = imported_3(0);
  const local_44 = imported_3(null);
  const local_45 = imported_6(async () => {
    const local = ++local_43.current;
    try {
      const local = await fn_64234a04();
      if (local !== local_43.current) {
        return;
      }
      local_38(local);
      local_42(local.bundle.submitLabel);
    } catch {
      if (local === local_43.current) {
        local_40(true);
      }
    }
  }, []);
  const local_46 = imported_6(() => {
    local_38(null);
    local_40(false);
    local_45();
  }, [local_45]);
  imported_4(() => {
    const local = local_43;
    local_45();
    return () => {
      local.current++;
    };
  }, [local_45]);
  const local_47 = async (arg) => {
    if (!local_18.current) {
      local_18.current = true;
      local_17(true);
      local_13("");
      try {
        await arg();
      } catch (error) {
        local_13(
          fn_8f59ad22(error) || imported_24(error) || imported_16(error),
        );
        if (error instanceof imported && error.retryIn) {
          local_32(Date.now() + error.retryIn * 1000);
        }
      } finally {
        local_18.current = false;
        local_17(false);
      }
    }
  };
  const local_48 = async () => {
    await imported_17.getState().initialize();
    const local = imported_17.getState().status;
    if (local !== "authenticated" && local !== "needs_profile") {
      throw new Error("Session unavailable");
    }
    if (local === "needs_profile") {
      if (
        window.location.pathname !== imported_18.ONBOARDING &&
        !imported_19(imported_18.ONBOARDING, true)
      ) {
        window.location.assign(imported_18.ONBOARDING);
      }
      return;
    }
    imported_20.syncIfAttached().catch(() => {});
    if (
      [imported_18.LOGIN, imported_18.REGISTER, imported_18.ONBOARDING].some(
        (arg) => arg === window.location.pathname,
      )
    ) {
      const local = imported_18.HOME;
      if (!imported_19(local, true)) {
        window.location.assign(local);
      }
    }
  };
  const local_49 = async (arg) => {
    if (arg.step === "password" && arg.flowToken) {
      local_22(arg.flowToken);
      local_28("");
      local_5("password");
    } else if (arg.accessToken) {
      await local_48();
    } else {
      throw new Error("Unexpected login response");
    }
  };
  const local_50 = (arg) => {
    local_15(false);
    const local = local_44.current;
    local_44.current = null;
    if (local_36) {
      if (!local) {
        local_13(local_515315ce);
        local_46();
        return;
      }
      local_47(async () => {
        try {
          const local = await imported_25.start(
            local_36,
            arg,
            local_bb7cdd2d(local),
          );
          local_3(false);
          local_20(local_36);
          local_22(local.flowToken);
          local_24(local);
          local_26([]);
          local_5("code");
          local_32(Date.now() + local.retryIn * 1000);
        } catch (error) {
          if (fn_8f59ad22(error)) {
            local_46();
          }
          throw error;
        }
      });
    }
  };
  const local_51 = (arg) => {
    arg.preventDefault();
    if (local_4 === "number") {
      if (!local_36 || local_35 || local_16) {
        return;
      }
      if (!local_37 || local_ca89592c(local_37)) {
        local_46();
        return;
      }
      local_44.current = local_37;
      local_13("");
      local_15(true);
      return;
    }
    local_47(async () => {
      if (local_4 === "code") {
        if (!local_23 || local_25.join("").length !== local_23.codeLength) {
          return;
        }
        let local;
        try {
          local = await imported_25.verify(
            local_19,
            local_21,
            local_25.join(""),
          );
        } catch (error) {
          if (local_4e00404c(error)) {
            local_5("number");
            local_26([]);
            local_22("");
            local_24(null);
            local_46();
          }
          throw error;
        }
        await local_49(local);
      } else {
        if (
          local_4 === "reset" &&
          (local_27 !== local_29 ||
            !/^(?=.*[A-Za-z])(?=.*\d).{8,100}$/.test(local_27))
        ) {
          local_13(
            "Пароли должны совпадать: от 8 символов, латинская буква и цифра.",
          );
          return;
        }
        if (local_4 === "reset") {
          await imported_25.reset(local_19, local_21, local_27);
        } else {
          await imported_25.password(local_19, local_21, local_27);
        }
        await local_48();
      }
    });
  };
  return imported_7("div", {
    className: imported_23.card,
    "data-reverse-open": local_2,
    children: [
      imported_7("div", {
        className: imported_23.brand,
        children: imported_7(imported_8, {}),
      }),
      imported_7("div", {
        className: imported_23.symbol,
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
          className: imported_23.phase,
          children:
            local_4 === "number"
              ? local === "sign-up"
                ? "Регистрация"
                : "Вход по телефону"
              : local_4 === "code"
                ? local_2
                  ? "Позвоните сами"
                  : "Подтвердите номер"
                : local_4 === "reset"
                  ? "Новый пароль"
                  : "Облачный пароль",
        },
        local_4 + String(local_2),
      ),
      imported_7(
        "p",
        {
          className: `${imported_23.description} ${imported_23.phase}`,
          children:
            local_4 === "number"
              ? local === "sign-up"
                ? "Создайте аккаунт по номеру телефона. Номер подтвердим проверочным кодом."
                : "Войдите или создайте аккаунт. Номер подтвердим проверочным кодом."
              : local_4 === "code"
                ? local_2
                  ? "Позвоните на выданный номер с этого телефона. Код вводить не нужно."
                  : local_23?.channel === "push"
                    ? "Код отправлен в приложение ИТД."
                    : local_23?.channel === "sms"
                      ? "Введите код из сообщения."
                      : `Введите последние ${local_23?.codeLength ?? 4} цифры номера входящего звонка.`
                : local_4 === "password"
                  ? "Для этого аккаунта включена дополнительная защита."
                  : "Номер подтверждён. Задайте новый пароль для входа.",
        },
        local_4 + String(local_2),
      ),
      imported_7(
        "form",
        {
          className: `${imported_23.form} ${imported_23.phase}`,
          onSubmit: local_51,
          children: [
            local_4 === "number"
              ? imported_7(imported_9, {
                  country: local_6,
                  digits: local_8,
                  disabled: local_16,
                  error: local_10,
                  onChange: (arg, arg_2, arg_3) => {
                    local_7(arg);
                    local_9(arg_2);
                    local_11(arg_3);
                    local_13("");
                  },
                })
              : imported_7("span", {
                  className: imported_23.number,
                  children: local_19.replace(
                    /^\+7(\d{3})(\d{3})(\d{2})(\d{2})$/,
                    "+7 ($1) $2-$3-$4",
                  ),
                }),
            (local_4 === "password" || local_4 === "reset") &&
              imported_7("label", {
                className: imported_23.field,
                children: [
                  local_4 === "reset" ? "Новый пароль" : "Облачный пароль",
                  imported_7("input", {
                    type: "password",
                    autoComplete:
                      local_4 === "reset" ? "new-password" : "current-password",
                    maxLength: 100,
                    value: local_27,
                    onInput: (arg) => local_28(arg.currentTarget.value),
                    disabled: local_16,
                    required: true,
                  }),
                ],
              }),
            local_4 === "reset" &&
              imported_7("label", {
                className: imported_23.field,
                children: [
                  "Повторите пароль",
                  imported_7("input", {
                    type: "password",
                    autoComplete: "new-password",
                    maxLength: 100,
                    value: local_29,
                    onInput: (arg) => local_30(arg.currentTarget.value),
                    disabled: local_16,
                    required: true,
                  }),
                ],
              }),
            (local_12 || local_10 || (local_4 === "number" && local_39)) &&
              imported_7("p", {
                className: imported_23.error,
                role: "alert",
                children: local_12 || local_10 || local_515315ce,
              }),
            local_4 === "number" &&
              local_39 &&
              imported_7("button", {
                className: imported_23.link,
                type: "button",
                onClick: local_46,
                children: "Загрузить документы ещё раз",
              }),
            local_4 !== "code" &&
              imported_7(imported_10, {
                children: imported_7(imported_11, {
                  type: "submit",
                  fullWidth: true,
                  size: "lg",
                  loading: local_16,
                  disabled:
                    local_4 === "number"
                      ? !local_36 || !!local_35 || !local_37
                      : !local_27,
                  children:
                    local_4 === "number"
                      ? local_35
                        ? `Подождите ${local_35} с`
                        : local_41
                      : local_4 === "reset"
                        ? "Сохранить и войти"
                        : "Войти",
                }),
              }),
            local_4 === "code" &&
              imported_7("div", {
                className: imported_23.verification,
                children: [
                  local_23 &&
                    imported_7(imported_12, {
                      visible: !local_2,
                      children: [
                        imported_7(imported_13, {
                          value: local_25,
                          length: local_23.codeLength,
                          onChange: local_26,
                          disabled: local_16,
                          status: local_12 ? "error" : "idle",
                        }),
                        imported_7(imported_11, {
                          type: "submit",
                          fullWidth: true,
                          size: "lg",
                          loading: local_16,
                          disabled:
                            local_25.join("").length !== local_23.codeLength,
                          children: "Продолжить",
                        }),
                        imported_7("button", {
                          className: imported_23.link,
                          type: "button",
                          disabled: local_16 || !!local_35,
                          onClick: () => {
                            local_47(async () => {
                              const local = await imported_25.resend(
                                local_19,
                                local_21,
                              );
                              local_24(local);
                              local_26([]);
                              local_32(Date.now() + local.retryIn * 1000);
                            });
                          },
                          children: local_35
                            ? `Повторить через ${local_35} с`
                            : "Позвонить ещё раз",
                        }),
                      ],
                    }),
                  imported_7(
                    imported_14,
                    {
                      embedded: true,
                      phone: local_19,
                      flowToken: local_21,
                      disabled: local_16,
                      onModeChange: (arg) => {
                        local_3(arg);
                        local_13("");
                      },
                      onComplete: local_49,
                    },
                    local_19 + local_21,
                  ),
                ],
              }),
            local_4 === "password" &&
              imported_7("button", {
                className: imported_23.link,
                type: "button",
                disabled: local_16,
                onClick: () => {
                  local_5("reset");
                  local_28("");
                  local_13("");
                },
                children: "Не помню пароль",
              }),
            local_4 === "reset" &&
              imported_7("a", {
                className: imported_23.link,
                href: "/forgot-password",
                children: "Восстановить через почту",
              }),
            local_4 === "number"
              ? arg.intent === "sign-up"
                ? imported_7("p", {
                    className: imported_23.terms,
                    children: [
                      "Уже есть аккаунт? ",
                      imported_7("a", {
                        href: "/login",
                        children: "Войти",
                      }),
                    ],
                  })
                : imported_7("button", {
                    className: imported_23.back,
                    type: "button",
                    disabled: local_16,
                    onClick: arg.onBack,
                    children: "Вернуться ко входу по почте",
                  })
              : imported_7("button", {
                  className: imported_23.back,
                  type: "button",
                  disabled: local_16,
                  onClick: () => {
                    local_5("number");
                    local_26([]);
                    local_28("");
                    local_30("");
                    local_22("");
                    local_13("");
                  },
                  children: "Другой номер телефона",
                }),
            (local_4 === "code" ||
              local_4 === "password" ||
              local_4 === "reset") &&
              imported_7(imported_15, {}),
          ],
        },
        local_4,
      ),
      local_4 === "number" &&
        local_37 &&
        imported_7("p", {
          className: imported_23.terms,
          children: local_37.bundle.text.map((arg, arg_2) => {
            const local =
              arg.document &&
              local_37.bundle.documents.find((arg) => arg.slug === arg.document)
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
      imported_7(imported_21, {
        isOpen: local_14,
        onClose: () => local_15(false),
        onVerify: local_50,
      }),
    ],
  });
}
export { symbol_001 };
