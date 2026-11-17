import {
  symbol_051 as imported,
  symbol_002 as imported_2,
  symbol_069 as imported_3,
  symbol_073 as imported_4,
  symbol_052 as imported_5,
  aj as imported_6,
  ak as imported_7,
  symbol_053 as imported_8,
  symbol_082 as imported_9,
  symbol_086 as imported_10,
  symbol_054 as imported_11,
  symbol_049 as imported_12,
  symbol_055 as imported_13,
  symbol_020 as imported_14,
  symbol_003 as imported_15,
  symbol_056 as imported_16,
  symbol_057 as imported_17,
  aq as imported_18,
  symbol_058 as imported_19,
  symbol_050 as imported_20,
  symbol_059 as imported_21,
  symbol_060 as imported_22,
  symbol_061 as imported_23,
  symbol_062 as imported_24,
  symbol_063 as imported_25,
  symbol_088 as imported_26,
  ax as imported_27,
  symbol_070 as imported_28,
  symbol_064 as imported_29,
} from "../entry.js";
import { C as imported_30 } from "./chunk-ab6fb2cd21e7.js";
import {
  p as imported_31,
  a as imported_32,
  s as imported_33,
} from "./phone-access.js";
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
const local_9636b4c8 = "itd:pending-phone-verification:v1";
let local_f06debfc = 0;
const local_a1e12a9e = new Set();
function fn_f5b4f06f(arg) {
  local_a1e12a9e.add(arg);
  return () => {
    local_a1e12a9e.delete(arg);
  };
}
const local_347e59d3 =
  typeof window !== "undefined" && typeof BroadcastChannel !== "undefined"
    ? new BroadcastChannel("itd-auth-boundary")
    : null;
local_347e59d3?.addEventListener("message", (arg) => {
  if (arg.data === "changed") {
    fn_eeed1770();
  }
});
if (typeof window !== "undefined") {
  window.addEventListener("storage", (arg) => {
    if (arg.key === "itd-auth-boundary") {
      fn_eeed1770();
    }
  });
}
function fn_49b69c99() {
  try {
    sessionStorage.removeItem(local_9636b4c8);
  } catch {}
}
function fn_eeed1770() {
  local_f06debfc++;
  fn_49b69c99();
  for (const local of local_a1e12a9e) {
    try {
      local();
    } catch {}
  }
}
function fn_f6c960a2(arg) {
  if (!arg || typeof arg !== "object") {
    return false;
  }
  const local = arg;
  return (
    local.version === 1 &&
    typeof local.phone === "string" &&
    /^\+[1-9]\d{7,14}$/.test(local.phone) &&
    typeof local.flowToken === "string" &&
    /^[a-f0-9]{32}$/.test(local.flowToken) &&
    ["code", "choice", "reverse"].includes(String(local.mode)) &&
    Number.isSafeInteger(local.expiresAt) &&
    local.expiresAt > Date.now() &&
    local.expiresAt <= Date.now() + 300000
  );
}
function fn_0620d594() {
  try {
    const local = sessionStorage.getItem(local_9636b4c8);
    if (!local) {
      return null;
    }
    if (local.length > 512) {
      fn_49b69c99();
      return null;
    }
    const local_2 = JSON.parse(local);
    if (fn_f6c960a2(local_2)) {
      return {
        version: 1,
        phone: local_2.phone,
        flowToken: local_2.flowToken,
        mode: local_2.mode,
        expiresAt: local_2.expiresAt,
      };
    }
  } catch {}
  fn_49b69c99();
  return null;
}
function fn_2e9c8355(arg, arg_2) {
  if (!(
    arg_2 !== local_f06debfc ||
    !fn_f6c960a2({
      ...arg,
      version: 1,
    })
  )) {
    try {
      sessionStorage.setItem(
        local_9636b4c8,
        JSON.stringify({
          version: 1,
          phone: arg.phone,
          flowToken: arg.flowToken,
          mode: arg.mode,
          expiresAt: arg.expiresAt,
        }),
      );
    } catch {}
  }
}
const local_f06debfc_2 = 2;
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
function fn_d75c103f(arg) {
  if (arg instanceof imported) {
    if (arg.code === "LEGAL_DOCUMENTS_UPDATED") {
      return "Документы обновились. Проверьте их и отправьте номер ещё раз.";
    }
    if (
      arg.code === "LEGAL_CONTEXT_EXPIRED" ||
      arg.code === "LEGAL_RECEIPT_EXPIRED"
    ) {
      return "Время проверки истекло. Отправьте номер ещё раз.";
    }
    if (
      arg.code === "LEGAL_CONTEXT_USED" ||
      arg.code === "LEGAL_CONTEXT_INVALID"
    ) {
      return "Не удалось начать проверку номера. Отправьте его ещё раз.";
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
    local.protocolVersion !== local_f06debfc_2 ||
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
async function fn_6b6df8fd(arg = local_21adbbce) {
  const local = await imported_31(`/consent?flow=${encodeURIComponent(arg)}`);
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
  const local_2 = imported_2(fn_0620d594());
  const local_3 = imported_2(local_f06debfc);
  const local_4 = imported_2(false);
  const local_5 = imported_2(0);
  const [local_6, local_7] = imported_3(!!local_2.current);
  const [local_8, local_9] = imported_3(false);
  const [local_10, local_11] = imported_3(false);
  const local_12 = (arg, arg_2, arg_3) => {
    if (local_4.current) {
      fn_2e9c8355(
        {
          phone: arg,
          flowToken: arg_2,
          mode: arg_3,
          expiresAt: local_5.current,
        },
        local_3.current,
      );
    }
  };
  const [local_13, local_14] = imported_3(false);
  const local_15 = imported_2("direct");
  const [local_16, local_17] = imported_3(false);
  const local_18 = imported_2(0);
  const [, local_19] = imported_3("");
  const [local_20, local_21] = imported_3("");
  const [local_22, local_23] = imported_3("number");
  const [local_24, local_25] = imported_3("ru");
  const [local_26, local_27] = imported_3("");
  const [local_28, local_29] = imported_3("");
  const [local_30, local_31] = imported_3("");
  const [local_32, local_33] = imported_3(false);
  const [local_34, local_35] = imported_3(false);
  const local_36 = imported_2(false);
  const [local_37, local_38] = imported_3("");
  const [local_39, local_40] = imported_3("");
  const [local_41, local_42] = imported_3(null);
  const [local_43, local_44] = imported_3([]);
  const [local_45, local_46] = imported_3("");
  const [local_47, local_48] = imported_3("");
  const [local_49, local_50] = imported_3(0);
  const [local_51, local_52] = imported_3(0);
  const [local_53, local_54] = imported_3(false);
  const [local_55, local_56] = imported_3(() => Date.now());
  const local_57 = async () => {
    const local = fn_0620d594();
    if (!local) {
      local_7(false);
      local_9(false);
      return;
    }
    local_7(true);
    local_9(false);
    try {
      const local = await imported_32.resume(local.phone, local.flowToken);
      if (!local_4.current || local_3.current !== local_f06debfc) {
        return;
      }
      const local_2 = imported_21(local.phone, "ru");
      if (imported_5(local_2.country, local_2.digits) !== local.phone) {
        fn_49b69c99();
        return;
      }
      local_5.current = Math.min(
        local.expiresAt,
        Date.now() + local.expiresIn * 1000,
      );
      local_25(local_2.country);
      local_27(local_2.digits);
      local_29("");
      local_38(local.phone);
      local_40(local.flowToken);
      local_42(local);
      local_44([]);
      local_50(Date.now() + local.retryIn * 1000);
      local_18.current = local_5.current;
      const local_3 = local.mode === "reverse";
      local_17(false);
      local_11(local_3);
      local_14(local_3);
      local_23(local.mode === "choice" ? "number" : "code");
      local_31(local.mode === "choice" ? imported_19 : "");
      local_12(local.phone, local.flowToken, local.mode);
    } catch (error) {
      if (!local_4.current || local_3.current !== local_f06debfc) {
        return;
      }
      if (
        error instanceof imported &&
        ["INVALID_FLOW_TOKEN", "OTP_EXPIRED", "RESUME_UNSUPPORTED"].includes(
          error.code,
        )
      ) {
        fn_49b69c99();
      } else {
        local_9(true);
      }
    } finally {
      if (local_4.current) {
        local_7(false);
      }
    }
  };
  imported_4(() => {
    local_4.current = true;
    const local = fn_f5b4f06f(() => {
      local_40("");
      local_42(null);
      local_11(false);
      local_14(false);
      local_23("number");
      local_44([]);
      local_46("");
      local_48("");
      local_7(false);
      local_9(false);
    });
    if (local_2.current) {
      local_57();
    }
    return () => {
      local_4.current = false;
      local();
    };
  }, []);
  imported_4(() => {
    const local = setInterval(() => local_56(Date.now()), 1000);
    return () => clearInterval(local);
  }, []);
  const local_58 = Math.max(0, Math.ceil((local_49 - local_55) / 1000));
  const local_59 = Math.max(0, Math.ceil((local_51 - local_55) / 1000));
  const local_60 = !local_28 && imported_5(local_24, local_26);
  const local_61 = imported_6();
  const local_62 = imported_7(local_61, local_24);
  const local_63 =
    !!local_60 && imported_8(local_61, local_24) && local_20 !== local_60;
  const [local_64, local_65] = imported_3(null);
  const [local_66, local_67] = imported_3(false);
  const [local_68, local_69] = imported_3("Получить код");
  const local_70 = imported_2(0);
  const local_71 = imported_2(null);
  const local_72 = imported_2(null);
  const local_73 = imported_9(async () => {
    const local = ++local_70.current;
    try {
      const local = await fn_6b6df8fd();
      if (local !== local_70.current) {
        return;
      }
      local_65(local);
      local_69(local.bundle.submitLabel);
    } catch {
      if (local === local_70.current) {
        local_67(true);
      }
    }
  }, []);
  const local_74 = imported_9(() => {
    local_65(null);
    local_67(false);
    local_73();
  }, [local_73]);
  imported_4(() => {
    const local = local_70;
    local_73();
    return () => {
      local.current++;
    };
  }, [local_73]);
  const local_75 = (arg = 0) => {
    fn_49b69c99();
    local_2.current = null;
    local_5.current = 0;
    local_18.current = 0;
    local_40("");
    local_42(null);
    local_44([]);
    local_11(false);
    local_17(false);
    local_14(false);
    local_23("number");
    local_33(false);
    local_54(false);
    local_52(Date.now() + arg * 1000);
    local_31(imported_25);
    local_74();
  };
  const local_76 = async (arg) => {
    if (!local_36.current) {
      local_36.current = true;
      local_35(true);
      local_31("");
      try {
        await arg();
      } catch (error) {
        if (
          local_22 === "code" &&
          imported_22(error) &&
          error.flowExpiresIn > 0
        ) {
          local_54(true);
          local_52(Date.now() + error.flowExpiresIn * 1000);
          local_31(imported_23);
        } else if (local_22 === "code" && imported_22(error)) {
          local_75();
        } else {
          local_31(
            fn_d75c103f(error) || imported_33(error) || imported_24(error),
          );
        }
        if (
          local_22 === "number" &&
          error instanceof imported &&
          error.code === "PHONE_VERIFICATION_PENDING"
        ) {
          local_52(Date.now() + error.retryIn * 1000);
        }
        if (
          error instanceof imported &&
          error.retryIn &&
          !(local_22 === "number" && local_15.current === "reverse")
        ) {
          local_50(Date.now() + error.retryIn * 1000);
        }
      } finally {
        local_36.current = false;
        local_35(false);
      }
    }
  };
  const local_77 = async () => {
    await imported_26.getState().initialize();
    const local = imported_26.getState().status;
    if (local !== "authenticated" && local !== "needs_profile") {
      throw new Error("Session unavailable");
    }
    if (local === "needs_profile") {
      if (
        window.location.pathname !== imported_27.ONBOARDING &&
        !imported_28(imported_27.ONBOARDING, true)
      ) {
        window.location.assign(imported_27.ONBOARDING);
      }
      return;
    }
    imported_29.syncIfAttached().catch(() => {});
    if (
      [imported_27.LOGIN, imported_27.REGISTER, imported_27.ONBOARDING].some(
        (arg) => arg === window.location.pathname,
      )
    ) {
      const local = imported_27.HOME;
      if (!imported_28(local, true)) {
        window.location.assign(local);
      }
    }
  };
  const local_78 = async (arg) => {
    if (!(!local_4.current || local_3.current !== local_f06debfc)) {
      fn_49b69c99();
      if (arg.step === "password" && arg.flowToken) {
        local_40(arg.flowToken);
        local_46("");
        local_23("password");
      } else if (arg.accessToken) {
        await local_77();
      } else {
        throw new Error("Unexpected login response");
      }
    }
  };
  const local_79 = (arg) => {
    local_33(false);
    const local = local_71.current;
    local_71.current = null;
    if (local_60) {
      if (!local) {
        local_31(local_515315ce);
        local_74();
        return;
      }
      local_76(async () => {
        try {
          local_72.current = local_60;
          const local = await imported_32.start(
            local_60,
            arg,
            local_bb7cdd2d(local),
            local_15.current,
          );
          if (!local_4.current || local_3.current !== local_f06debfc) {
            return;
          }
          local_5.current = Date.now() + 300000;
          local_18.current = local_5.current;
          local_54(false);
          local_52(0);
          local_11(false);
          local_12(
            local_60,
            local.flowToken,
            local.reverseOnly && local_15.current !== "reverse"
              ? "choice"
              : local_15.current === "reverse"
                ? "reverse"
                : "code",
          );
          if (local.reverseOnly && local_15.current !== "reverse") {
            local_21("");
            local_19("");
            local_38(local_60);
            local_40(local.flowToken);
            local_42(local);
            local_44([]);
            local_18.current = Date.now() + 240000;
            local_31(imported_19);
            return;
          }
          local_21("");
          local_19("");
          local_17(local_15.current === "reverse");
          local_14(local.reverseOnly === true);
          local_38(local_60);
          local_40(local.flowToken);
          local_42(local);
          local_44([]);
          local_23("code");
          if (local_15.current !== "reverse") {
            local_50(Date.now() + local.retryIn * 1000);
          }
        } catch (error) {
          if (fn_d75c103f(error)) {
            local_74();
          }
          error instanceof imported &&
            (error.code === "PHONE_NUMBER_LIMIT_REVERSE_AVAILABLE"
              ? (local_19(local_60),
                local_21(""),
                local_38(local_60),
                local_40(""),
                local_42(null))
              : [
                  "TOO_MANY_REQUESTS",
                  "REVERSE_BUDGET_EXHAUSTED",
                  "REVERSE_UNAVAILABLE",
                ].includes(error.code) &&
                (local_19(""),
                local_21(local_60),
                local_42(null),
                local_40("")));
          throw error;
        }
      });
    }
  };
  const local_80 = (arg) => {
    arg.preventDefault();
    if (local_22 === "number") {
      if (
        !local_62 ||
        !local_60 ||
        local_58 ||
        local_59 ||
        local_34 ||
        local_6 ||
        local_8
      ) {
        return;
      }
      if (!local_64 || local_ca89592c(local_64)) {
        local_74();
        return;
      }
      local_15.current = "direct";
      local_71.current = local_64;
      local_31("");
      local_33(true);
      return;
    }
    local_76(async () => {
      if (local_22 === "code") {
        if (
          !local_41 ||
          local_41.reverseOnly ||
          local_43.join("").length !== local_41.codeLength
        ) {
          return;
        }
        let local;
        try {
          local = await imported_32.verify(
            local_37,
            local_39,
            local_43.join(""),
          );
        } catch (error) {
          if (local_4e00404c(error)) {
            fn_49b69c99();
            local_23("number");
            local_44([]);
            local_40("");
            local_42(null);
            local_74();
          }
          throw error;
        }
        await local_78(local);
      } else {
        if (
          local_22 === "reset" &&
          (local_45 !== local_47 ||
            !/^(?=.*[A-Za-z])(?=.*\d).{8,100}$/.test(local_45))
        ) {
          local_31(
            "Пароли должны совпадать: от 8 символов, латинская буква и цифра.",
          );
          return;
        }
        if (local_22 === "reset") {
          await imported_32.reset(local_37, local_39, local_45);
        } else {
          await imported_32.password(local_37, local_39, local_45);
        }
        await local_77();
      }
    });
  };
  return imported_10("div", {
    className: imported_11.card,
    "data-reverse-open": local_13,
    children: [
      imported_10("div", {
        className: imported_11.brand,
        children: imported_10(imported_12, {}),
      }),
      imported_10("div", {
        className: imported_11.symbol,
        children: imported_10("svg", {
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          children: [
            imported_10("rect", {
              x: "6",
              y: "2",
              width: "12",
              height: "20",
              rx: "3",
            }),
            imported_10("path", {
              d: "M10 5h4m-3 14h2",
            }),
          ],
        }),
      }),
      imported_10(
        "h1",
        {
          className: imported_11.phase,
          children:
            local_22 === "number"
              ? local === "sign-up"
                ? "Регистрация"
                : "Вход по телефону"
              : local_22 === "code"
                ? local_13
                  ? "Позвоните сами"
                  : local_41?.reverseOnly
                    ? "Не удалось позвонить"
                    : "Подтвердите номер"
                : local_22 === "reset"
                  ? "Новый пароль"
                  : "Облачный пароль",
        },
        local_22 + String(local_13),
      ),
      imported_10(
        "p",
        {
          className: `${imported_11.description} ${imported_11.phase}`,
          children:
            local_22 === "number"
              ? local === "sign-up"
                ? local_62
                  ? "Создайте аккаунт по номеру телефона. Номер подтвердим проверочным кодом."
                  : "Создайте аккаунт по номеру телефона. Подтвердите номер звонком."
                : local_62
                  ? "Войдите или создайте аккаунт. Номер подтвердим проверочным кодом."
                  : "Войдите или создайте аккаунт. Подтвердите номер звонком."
              : local_22 === "code"
                ? local_13
                  ? "Позвоните на выданный номер с этого телефона. Код вводить не нужно."
                  : local_41?.reverseOnly
                    ? "Вы можете позвонить сами или повторить запрос позже."
                    : local_41?.channel === "push"
                      ? "Код отправлен в приложение ИТД."
                      : local_41?.channel === "sms"
                        ? "Введите код из сообщения."
                        : `Введите последние ${local_41?.codeLength ?? 4} цифры номера входящего звонка.`
                : local_22 === "password"
                  ? "Для этого аккаунта включена дополнительная защита."
                  : "Номер подтверждён. Задайте новый пароль для входа.",
        },
        local_22 + String(local_13),
      ),
      imported_10(
        "form",
        {
          className: `${imported_11.form} ${imported_11.phase}`,
          onSubmit: local_80,
          children: [
            local_22 === "number"
              ? imported_10(imported_13, {
                  country: local_24,
                  digits: local_26,
                  disabled: local_34 || local_6 || local_8,
                  error: local_28,
                  onChange: (arg, arg_2, arg_3) => {
                    local_25(arg);
                    local_27(arg_2);
                    local_29(arg_3);
                    local_31("");
                    if (
                      local_72.current &&
                      imported_5(arg, arg_2) !== local_72.current
                    ) {
                      local_72.current = null;
                      local_74();
                    }
                  },
                })
              : imported_10("span", {
                  className: imported_11.number,
                  children: local_37.replace(
                    /^\+7(\d{3})(\d{3})(\d{2})(\d{2})$/,
                    "+7 ($1) $2-$3-$4",
                  ),
                }),
            (local_22 === "password" || local_22 === "reset") &&
              imported_10("label", {
                className: imported_11.field,
                children: [
                  local_22 === "reset" ? "Новый пароль" : "Облачный пароль",
                  imported_10("input", {
                    type: "password",
                    autoComplete:
                      local_22 === "reset"
                        ? "new-password"
                        : "current-password",
                    maxLength: 100,
                    value: local_45,
                    onInput: (arg) => local_46(arg.currentTarget.value),
                    disabled: local_34,
                    required: true,
                  }),
                ],
              }),
            local_22 === "reset" &&
              imported_10("label", {
                className: imported_11.field,
                children: [
                  "Повторите пароль",
                  imported_10("input", {
                    type: "password",
                    autoComplete: "new-password",
                    maxLength: 100,
                    value: local_47,
                    onInput: (arg) => local_48(arg.currentTarget.value),
                    disabled: local_34,
                    required: true,
                  }),
                ],
              }),
            (local_30 || local_28 || (local_22 === "number" && local_66)) &&
              imported_10("p", {
                className: imported_11.error,
                role: "alert",
                children: local_30 || local_28 || local_515315ce,
              }),
            local_22 === "number" &&
              local_66 &&
              imported_10("button", {
                className: imported_11.link,
                type: "button",
                onClick: local_74,
                children: "Загрузить документы ещё раз",
              }),
            local_22 === "number" &&
              local_8 &&
              imported_10(imported_14, {
                children: [
                  imported_10("p", {
                    className: imported_11.error,
                    role: "alert",
                    children: "Не удалось восстановить начатую проверку.",
                  }),
                  imported_10("button", {
                    className: imported_11.link,
                    type: "button",
                    disabled: local_6,
                    onClick: () => {
                      local_57();
                    },
                    children: "Продолжить проверку",
                  }),
                  imported_10("button", {
                    className: imported_11.link,
                    type: "button",
                    onClick: () => {
                      fn_49b69c99();
                      local_9(false);
                      local_2.current = null;
                    },
                    children: "Начать заново",
                  }),
                ],
              }),
            local_22 !== "code" &&
              (local_22 !== "number" || local_62) &&
              imported_10(imported_14, {
                children: imported_10(imported_15, {
                  type: "submit",
                  fullWidth: true,
                  size: "lg",
                  loading: local_34 || local_6,
                  disabled:
                    local_6 ||
                    local_8 ||
                    (local_22 === "number"
                      ? !local_60 || !!local_58 || !!local_59 || !local_64
                      : !local_45),
                  children:
                    local_22 === "number"
                      ? local_58
                        ? `Подождите ${local_58} с`
                        : local_59
                          ? `Новая проверка через ${local_59} с`
                          : local_68
                      : local_22 === "reset"
                        ? "Сохранить и войти"
                        : "Войти",
                }),
              }),
            local_22 === "number" &&
              imported_10("div", {
                className: imported_11.reverseEntry,
                "data-ready": local_63,
                "aria-hidden": !local_63,
                inert: !local_63,
                children: imported_10("div", {
                  children: imported_10(imported_15, {
                    type: "button",
                    fullWidth: true,
                    size: "lg",
                    disabled:
                      local_34 || local_6 || local_8 || !!local_59 || !local_64,
                    onClick: () => {
                      if (!(
                        !local_60 ||
                        local_36.current ||
                        local_6 ||
                        local_8 ||
                        local_59
                      )) {
                        if (
                          local_37 === local_60 &&
                          local_41?.reverseOnly &&
                          local_39 &&
                          Date.now() < local_18.current
                        ) {
                          local_12(local_37, local_39, "reverse");
                          local_17(true);
                          local_11(false);
                          local_14(true);
                          local_23("code");
                          local_31("");
                          return;
                        }
                        if (!local_64 || local_ca89592c(local_64)) {
                          local_74();
                          return;
                        }
                        local_15.current = "reverse";
                        local_71.current = local_64;
                        local_31("");
                        local_33(true);
                      }
                    },
                    children: local_59
                      ? `Позвонить самому через ${local_59} с`
                      : "Позвонить самому",
                  }),
                }),
              }),
            local_22 === "code" &&
              imported_10("div", {
                className: imported_11.verification,
                children: [
                  local_41 &&
                    imported_10(imported_16, {
                      visible: !local_13 && !local_41.reverseOnly,
                      children: [
                        imported_10(imported_17, {
                          value: local_43,
                          length: local_41.codeLength,
                          onChange: local_44,
                          disabled: local_34,
                          status: local_30 ? "error" : "idle",
                        }),
                        imported_10(imported_15, {
                          type: "submit",
                          fullWidth: true,
                          size: "lg",
                          loading: local_34,
                          disabled:
                            local_43.join("").length !== local_41.codeLength,
                          children: "Продолжить",
                        }),
                        imported_10("button", {
                          className: imported_11.link,
                          type: "button",
                          disabled: local_34 || !!local_58 || local_53,
                          onClick: () => {
                            local_76(async () => {
                              const local = await imported_32.resend(
                                local_37,
                                local_39,
                              );
                              local_42(local);
                              local_44([]);
                              local_50(Date.now() + local.retryIn * 1000);
                            });
                          },
                          children: local_58
                            ? `Повторить через ${local_58} с`
                            : "Позвонить ещё раз",
                        }),
                        local_53 &&
                          imported_10(imported_15, {
                            type: "button",
                            fullWidth: true,
                            size: "lg",
                            disabled: local_34 || !!local_59,
                            onClick: () => local_75(),
                            children: local_59
                              ? `Новая проверка через ${local_59} с`
                              : "Начать новую проверку",
                          }),
                      ],
                    }),
                  imported_10(
                    imported_18,
                    {
                      embedded: true,
                      resumeOpen: local_10,
                      directEntry: local_16,
                      onRestart: () => local_75(),
                      onUnavailable: () => {
                        fn_49b69c99();
                        local_23("number");
                        local_14(false);
                        local_19("");
                        local_21(local_37);
                        local_42(null);
                        local_40("");
                        local_31(
                          "Слишком много попыток. Подождите перед повторным запросом.",
                        );
                      },
                      onExit: (arg, arg_2) => {
                        if (arg || arg_2 === 0) {
                          fn_49b69c99();
                          local_40("");
                          local_42(null);
                          local_19(arg_2 === 0 ? "" : local_37);
                          local_18.current = 0;
                        }
                        if (arg_2 === 0) {
                          local_21(local_37);
                        }
                        local_23("number");
                        local_14(false);
                        local_31(
                          arg_2 === 0
                            ? "Слишком много попыток. Подождите перед повторным запросом."
                            : local_58
                              ? "Подождите перед повторным запросом, либо воспользуйтесь альтернативным методом."
                              : imported_19,
                        );
                      },
                      initialFailure: local_41?.reverseOnly,
                      phone: local_37,
                      flowToken: local_39,
                      disabled: local_34,
                      onModeChange: (arg) => {
                        local_12(
                          local_37,
                          local_39,
                          arg
                            ? "reverse"
                            : local_41?.reverseOnly
                              ? "choice"
                              : "code",
                        );
                        local_14(arg);
                        local_31("");
                      },
                      onComplete: local_78,
                    },
                    local_37 + local_39,
                  ),
                  local_41?.reverseOnly &&
                    !local_13 &&
                    imported_10("button", {
                      className: imported_11.link,
                      type: "button",
                      disabled: local_34 || !!local_58 || local_53,
                      onClick: () => {
                        local_76(async () => {
                          const local = await imported_32.resend(
                            local_37,
                            local_39,
                          );
                          local_42(local);
                          local_44([]);
                          local_50(Date.now() + local.retryIn * 1000);
                        });
                      },
                      children: local_58
                        ? `Повторить через ${local_58} с`
                        : "Позвонить ещё раз",
                    }),
                ],
              }),
            local_22 === "password" &&
              imported_10("button", {
                className: imported_11.link,
                type: "button",
                disabled: local_34,
                onClick: () => {
                  local_23("reset");
                  local_46("");
                  local_31("");
                },
                children: "Не помню пароль",
              }),
            local_22 === "reset" &&
              imported_10("a", {
                className: imported_11.link,
                href: "/forgot-password",
                children: "Восстановить через почту",
              }),
            local_22 === "number"
              ? arg.intent === "sign-up"
                ? imported_10("p", {
                    className: imported_11.terms,
                    children: [
                      "Уже есть аккаунт? ",
                      imported_10("a", {
                        href: "/login",
                        children: "Войти",
                      }),
                    ],
                  })
                : imported_10("button", {
                    className: imported_11.back,
                    type: "button",
                    disabled: local_34,
                    onClick: arg.onBack,
                    children: "Вернуться ко входу по почте",
                  })
              : imported_10("button", {
                  className: imported_11.back,
                  type: "button",
                  disabled: local_34,
                  onClick: () => {
                    fn_49b69c99();
                    local_11(false);
                    local_23("number");
                    local_44([]);
                    local_46("");
                    local_48("");
                    local_40("");
                    local_31("");
                  },
                  children: "Другой номер телефона",
                }),
            (local_22 === "code" ||
              local_22 === "password" ||
              local_22 === "reset") &&
              imported_10(imported_20, {}),
          ],
        },
        local_22,
      ),
      local_22 === "number" &&
        local_64 &&
        imported_10("p", {
          className: imported_11.terms,
          children: local_64.bundle.text.map((arg, arg_2) => {
            const local =
              arg.document &&
              local_64.bundle.documents.find((arg) => arg.slug === arg.document)
                ?.url;
            if (local) {
              return imported_10(
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
      imported_10(imported_30, {
        isOpen: local_32,
        onClose: () => local_33(false),
        onVerify: local_79,
      }),
    ],
  });
}
export { symbol_001 };
