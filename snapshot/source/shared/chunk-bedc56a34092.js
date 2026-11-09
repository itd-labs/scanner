import {
  symbol_040 as imported,
  symbol_057 as imported_2,
  symbol_002 as imported_3,
  symbol_061 as imported_4,
  symbol_041 as imported_5,
  symbol_070 as imported_6,
  symbol_074 as imported_7,
  symbol_039 as imported_8,
  symbol_042 as imported_9,
  aj as imported_10,
  symbol_003 as imported_11,
  ak as imported_12,
  symbol_076 as imported_13,
  symbol_043 as imported_14,
} from "../entry.js";
import { C as imported_15 } from "./chunk-ab6fb2cd21e7.js";
import { P as imported_16 } from "./chunk-d4522ef773ce.js";
import {
  symbol_002 as imported_17,
  symbol_003 as imported_18,
  a as imported_19,
  symbol_001 as imported_20,
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
  const local = await imported_17(`/consent?flow=${encodeURIComponent(arg)}`);
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
  const [local_2, local_3] = imported_2("number");
  const [local_4, local_5] = imported_2("ru");
  const [local_6, local_7] = imported_2("");
  const [local_8, local_9] = imported_2("");
  const [local_10, local_11] = imported_2("");
  const [local_12, local_13] = imported_2(false);
  const [local_14, local_15] = imported_2(false);
  const local_16 = imported_3(false);
  const [local_17, local_18] = imported_2("");
  const [local_19, local_20] = imported_2("");
  const [local_21, local_22] = imported_2(null);
  const [local_23, local_24] = imported_2([]);
  const [local_25, local_26] = imported_2("");
  const [local_27, local_28] = imported_2("");
  const [local_29, local_30] = imported_2(0);
  const [local_31, local_32] = imported_2(() => Date.now());
  imported_4(() => {
    const local = setInterval(() => local_32(Date.now()), 1000);
    return () => clearInterval(local);
  }, []);
  const local_33 = Math.max(0, Math.ceil((local_29 - local_31) / 1000));
  const local_34 = !local_8 && imported_5(local_4, local_6);
  const [local_35, local_36] = imported_2(null);
  const [local_37, local_38] = imported_2(false);
  const [local_39, local_40] = imported_2("Получить код");
  const local_41 = imported_3(0);
  const local_42 = imported_3(null);
  const local_43 = imported_6(async () => {
    const local = ++local_41.current;
    try {
      const local = await fn_64234a04();
      if (local !== local_41.current) {
        return;
      }
      local_36(local);
      local_40(local.bundle.submitLabel);
    } catch {
      if (local === local_41.current) {
        local_38(true);
      }
    }
  }, []);
  const local_44 = imported_6(() => {
    local_36(null);
    local_38(false);
    local_43();
  }, [local_43]);
  imported_4(() => {
    const local = local_41;
    local_43();
    return () => {
      local.current++;
    };
  }, [local_43]);
  const local_45 = async (arg) => {
    if (!local_16.current) {
      local_16.current = true;
      local_15(true);
      local_11("");
      try {
        await arg();
      } catch (error) {
        local_11(
          fn_8f59ad22(error) || imported_19(error) || imported_12(error),
        );
        if (error instanceof imported && error.retryIn) {
          local_30(Date.now() + error.retryIn * 1000);
        }
      } finally {
        local_16.current = false;
        local_15(false);
      }
    }
  };
  const local_46 = async () => {
    await imported_13.getState().initialize();
    const local = imported_13.getState().status;
    if (local !== "authenticated" && local !== "needs_profile") {
      throw new Error("Session unavailable");
    }
    if (local === "authenticated") {
      await imported_14.syncIfAttached();
    }
  };
  const local_47 = (arg) => {
    local_13(false);
    const local = local_42.current;
    local_42.current = null;
    if (local_34) {
      if (!local) {
        local_11(local_515315ce);
        local_44();
        return;
      }
      local_45(async () => {
        try {
          const local = await imported_20.start(
            local_34,
            arg,
            local_bb7cdd2d(local),
          );
          local_18(local_34);
          local_20(local.flowToken);
          local_22(local);
          local_24([]);
          local_3("code");
          local_30(Date.now() + local.retryIn * 1000);
        } catch (error) {
          if (fn_8f59ad22(error)) {
            local_44();
          }
          throw error;
        }
      });
    }
  };
  const local_48 = (arg) => {
    arg.preventDefault();
    if (local_2 === "number") {
      if (!local_34 || local_33 || local_14) {
        return;
      }
      if (!local_35 || local_ca89592c(local_35)) {
        local_44();
        return;
      }
      local_42.current = local_35;
      local_11("");
      local_13(true);
      return;
    }
    local_45(async () => {
      if (local_2 === "code") {
        if (!local_21 || local_23.join("").length !== local_21.codeLength) {
          return;
        }
        let local;
        try {
          local = await imported_20.verify(
            local_17,
            local_19,
            local_23.join(""),
          );
        } catch (error) {
          if (local_4e00404c(error)) {
            local_3("number");
            local_24([]);
            local_20("");
            local_22(null);
            local_44();
          }
          throw error;
        }
        if (local.step === "password" && local.flowToken) {
          local_20(local.flowToken);
          local_26("");
          local_3("password");
        } else if (local.accessToken) {
          await local_46();
        } else {
          throw new Error("Unexpected login response");
        }
      } else {
        if (
          local_2 === "reset" &&
          (local_25 !== local_27 ||
            !/^(?=.*[A-Za-z])(?=.*\d).{8,100}$/.test(local_25))
        ) {
          local_11(
            "Пароли должны совпадать: от 8 символов, латинская буква и цифра.",
          );
          return;
        }
        if (local_2 === "reset") {
          await imported_20.reset(local_17, local_19, local_25);
        } else {
          await imported_20.password(local_17, local_19, local_25);
        }
        await local_46();
      }
    });
  };
  return imported_7("div", {
    className: imported_18.card,
    children: [
      imported_7("div", {
        className: imported_18.brand,
        children: imported_7(imported_8, {}),
      }),
      imported_7("div", {
        className: imported_18.symbol,
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
      imported_7("h1", {
        children:
          local_2 === "number"
            ? local === "sign-up"
              ? "Регистрация"
              : "Вход по телефону"
            : local_2 === "code"
              ? "Подтвердите номер"
              : local_2 === "reset"
                ? "Новый пароль"
                : "Облачный пароль",
      }),
      imported_7("p", {
        className: imported_18.description,
        children:
          local_2 === "number"
            ? local === "sign-up"
              ? "Создайте аккаунт по номеру телефона. Номер подтвердим проверочным кодом."
              : "Войдите или создайте аккаунт. Номер подтвердим проверочным кодом."
            : local_2 === "code"
              ? local_21?.channel === "voice_call"
                ? "Ответьте на звонок: робот продиктует код."
                : local_21?.channel === "push"
                  ? "Код отправлен в приложение ИТД."
                  : local_21?.channel === "sms"
                    ? "Введите код из сообщения."
                    : "Введите последние цифры номера входящего звонка."
              : local_2 === "password"
                ? "Для этого аккаунта включена дополнительная защита."
                : "Номер подтверждён. Задайте новый пароль для входа.",
      }),
      imported_7("form", {
        className: imported_18.form,
        onSubmit: local_48,
        children: [
          local_2 === "number"
            ? imported_7(imported_9, {
                country: local_4,
                digits: local_6,
                disabled: local_14,
                error: local_8,
                onChange: (arg, arg_2, arg_3) => {
                  local_5(arg);
                  local_7(arg_2);
                  local_9(arg_3);
                  local_11("");
                },
              })
            : imported_7("span", {
                className: imported_18.number,
                children: local_17,
              }),
          local_2 === "code" &&
            local_21 &&
            imported_7(imported_10, {
              value: local_23,
              length: local_21.codeLength,
              onChange: local_24,
              disabled: local_14,
              status: local_10 ? "error" : "idle",
            }),
          (local_2 === "password" || local_2 === "reset") &&
            imported_7("label", {
              className: imported_18.field,
              children: [
                local_2 === "reset" ? "Новый пароль" : "Облачный пароль",
                imported_7("input", {
                  type: "password",
                  autoComplete:
                    local_2 === "reset" ? "new-password" : "current-password",
                  maxLength: 100,
                  value: local_25,
                  onInput: (arg) => local_26(arg.currentTarget.value),
                  disabled: local_14,
                  required: true,
                }),
              ],
            }),
          local_2 === "reset" &&
            imported_7("label", {
              className: imported_18.field,
              children: [
                "Повторите пароль",
                imported_7("input", {
                  type: "password",
                  autoComplete: "new-password",
                  maxLength: 100,
                  value: local_27,
                  onInput: (arg) => local_28(arg.currentTarget.value),
                  disabled: local_14,
                  required: true,
                }),
              ],
            }),
          (local_10 || local_8 || (local_2 === "number" && local_37)) &&
            imported_7("p", {
              className: imported_18.error,
              role: "alert",
              children: local_10 || local_8 || local_515315ce,
            }),
          local_2 === "number" &&
            local_37 &&
            imported_7("button", {
              className: imported_18.link,
              type: "button",
              onClick: local_44,
              children: "Загрузить документы ещё раз",
            }),
          imported_7(imported_11, {
            type: "submit",
            fullWidth: true,
            size: "lg",
            loading: local_14,
            disabled:
              local_2 === "number"
                ? !local_34 || !!local_33 || !local_35
                : local_2 === "code"
                  ? local_23.join("").length !== local_21?.codeLength
                  : !local_25,
            children:
              local_2 === "number"
                ? local_33
                  ? `Подождите ${local_33} с`
                  : local_39
                : local_2 === "code"
                  ? "Продолжить"
                  : local_2 === "reset"
                    ? "Сохранить и войти"
                    : "Войти",
          }),
          local_2 === "code" &&
            imported_7("button", {
              className: imported_18.link,
              type: "button",
              disabled: local_14 || !!local_33,
              onClick: () => {
                local_45(async () => {
                  const local = await imported_20.resend(local_17, local_19);
                  local_22(local);
                  local_24([]);
                  local_30(Date.now() + local.retryIn * 1000);
                });
              },
              children: local_33
                ? `Повторить через ${local_33} с`
                : "Отправить код ещё раз",
            }),
          local_2 === "password" &&
            imported_7("button", {
              className: imported_18.link,
              type: "button",
              disabled: local_14,
              onClick: () => {
                local_3("reset");
                local_26("");
                local_11("");
              },
              children: "Не помню пароль",
            }),
          local_2 === "reset" &&
            imported_7("a", {
              className: imported_18.link,
              href: "/forgot-password",
              children: "Восстановить через почту",
            }),
          local_2 === "number"
            ? arg.intent === "sign-up"
              ? imported_7("p", {
                  className: imported_18.terms,
                  children: [
                    "Уже есть аккаунт? ",
                    imported_7("a", {
                      href: "/login",
                      children: "Войти",
                    }),
                  ],
                })
              : imported_7("button", {
                  className: imported_18.back,
                  type: "button",
                  disabled: local_14,
                  onClick: arg.onBack,
                  children: "Вернуться ко входу по почте",
                })
            : imported_7("button", {
                className: imported_18.back,
                type: "button",
                disabled: local_14,
                onClick: () => {
                  local_3("number");
                  local_24([]);
                  local_26("");
                  local_28("");
                  local_20("");
                  local_11("");
                },
                children: "Другой номер телефона",
              }),
          (local_2 === "password" || local_2 === "reset") &&
            imported_7(imported_16, {}),
        ],
      }),
      local_2 === "number" &&
        local_35 &&
        imported_7("p", {
          className: imported_18.terms,
          children: local_35.bundle.text.map((arg, arg_2) => {
            const local =
              arg.document &&
              local_35.bundle.documents.find((arg) => arg.slug === arg.document)
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
      imported_7(imported_15, {
        isOpen: local_12,
        onClose: () => local_13(false),
        onVerify: local_47,
      }),
    ],
  });
}
export { symbol_001 };
