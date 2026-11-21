import {
  symbol_002 as imported,
  symbol_292 as imported_2,
  symbol_222 as imported_3,
  symbol_282 as imported_4,
  symbol_289 as imported_5,
  symbol_296 as imported_6,
  symbol_028 as imported_7,
  symbol_093 as imported_8,
  symbol_157 as imported_9,
  symbol_291 as imported_10,
  symbol_280 as imported_11,
  symbol_023 as imported_12,
  symbol_295 as imported_13,
  symbol_293 as imported_14,
  symbol_010 as imported_15,
  symbol_017 as imported_16,
  symbol_004 as imported_17,
  symbol_020 as imported_18,
  symbol_279 as imported_19,
  symbol_003 as imported_20,
  symbol_021 as imported_21,
  symbol_281 as imported_22,
  symbol_283 as imported_23,
  symbol_284 as imported_24,
  symbol_285 as imported_25,
  symbol_286 as imported_26,
  symbol_287 as imported_27,
  symbol_290 as imported_28,
  symbol_288 as imported_29,
  symbol_294 as imported_30,
  symbol_297 as imported_31,
  symbol_298 as imported_32,
  symbol_299 as imported_33,
  symbol_300 as imported_34,
  symbol_005 as imported_35,
  symbol_006 as imported_36,
  symbol_007 as imported_37,
  symbol_008 as imported_38,
  symbol_009 as imported_39,
  symbol_011 as imported_40,
  symbol_012 as imported_41,
  symbol_019 as imported_42,
  symbol_001 as imported_43,
  symbol_013 as imported_44,
  symbol_014 as imported_45,
  symbol_015 as imported_46,
  symbol_016 as imported_47,
} from "../entry.js";
import { C as imported_48 } from "./chunk-d0f3b8fb991b.js";
function symbol_001(arg) {
  const { intent: local } = arg;
  const local_2 = imported(imported_2());
  const local_3 = imported(imported_29());
  const local_4 = imported(false);
  const local_5 = imported(0);
  const [local_6, local_7] = imported_3(!!local_2.current);
  const [local_8, local_9] = imported_3(false);
  const [local_10, local_11] = imported_3(false);
  const local_12 = (arg, arg_2, arg_3) => {
    if (local_4.current) {
      imported_32(
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
  const local_15 = imported("direct");
  const [local_16, local_17] = imported_3(false);
  const local_18 = imported(0);
  const [, local_19] = imported_3("");
  const [local_20, local_21] = imported_3("");
  const [local_22, local_23] = imported_3("number");
  const [local_24, local_25] = imported_3(null);
  const [local_26, local_27] = imported_3(false);
  const [local_28, local_29] = imported_3("ru");
  const [local_30, local_31] = imported_3("");
  const [local_32, local_33] = imported_3("");
  const [local_34, local_35] = imported_3("");
  const [local_36, local_37] = imported_3(false);
  const [local_38, local_39] = imported_3(false);
  const local_40 = imported(false);
  const [local_41, local_42] = imported_3("");
  const [local_43, local_44] = imported_3("");
  const [local_45, local_46] = imported_3(null);
  const [local_47, local_48] = imported_3([]);
  const [local_49, local_50] = imported_3("");
  const [local_51, local_52] = imported_3("");
  const [local_53, local_54] = imported_3(0);
  const [local_55, local_56] = imported_3(0);
  const [local_57, local_58] = imported_3(false);
  const [local_59, local_60] = imported_3(() => Date.now());
  const local_61 = async () => {
    const local = imported_2();
    if (!local) {
      local_7(false);
      local_9(false);
      return;
    }
    local_7(true);
    local_9(false);
    try {
      const local = await imported_28.resume(local.phone, local.flowToken);
      if (!local_4.current || local_3.current !== imported_29()) {
        return;
      }
      const local_2 = imported_30(local.phone, "ru");
      if (imported_6(local_2.country, local_2.digits) !== local.phone) {
        imported_19();
        return;
      }
      local_5.current = Math.min(
        local.expiresAt,
        Date.now() + local.expiresIn * 1000,
      );
      local_29(local_2.country);
      local_31(local_2.digits);
      local_33("");
      local_42(local.phone);
      local_44(local.flowToken);
      local_46(local);
      local_48([]);
      local_54(Date.now() + local.retryIn * 1000);
      local_18.current = local_5.current;
      const local_3 = local.mode === "reverse";
      local_17(false);
      local_11(local_3);
      local_14(local_3);
      local_23(local.mode === "choice" ? "number" : "code");
      local_35(local.mode === "choice" ? imported_27 : "");
      local_12(local.phone, local.flowToken, local.mode);
    } catch (error) {
      if (!local_4.current || local_3.current !== imported_29()) {
        return;
      }
      if (
        error instanceof imported_31 &&
        ["INVALID_FLOW_TOKEN", "OTP_EXPIRED", "RESUME_UNSUPPORTED"].includes(
          error.code,
        )
      ) {
        imported_19();
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
    const local = imported_5(() => {
      local_44("");
      local_46(null);
      local_11(false);
      local_14(false);
      local_23("number");
      local_48([]);
      local_50("");
      local_52("");
      local_7(false);
      local_9(false);
    });
    if (local_2.current) {
      local_61();
    }
    return () => {
      local_4.current = false;
      local();
    };
  }, []);
  imported_4(() => {
    const local = setInterval(() => local_60(Date.now()), 1000);
    return () => clearInterval(local);
  }, []);
  const local_62 = Math.max(0, Math.ceil((local_53 - local_59) / 1000));
  const local_63 = Math.max(0, Math.ceil((local_55 - local_59) / 1000));
  const local_64 = !local_32 && imported_6(local_28, local_30);
  const local_65 = imported_7();
  const local_66 = imported_8(local_65, local_28);
  const local_67 =
    !!local_64 && imported_9(local_65, local_28) && local_20 !== local_64;
  const [local_68, local_69] = imported_3(null);
  const [local_70, local_71] = imported_3(false);
  const [local_72, local_73] = imported_3("Получить код");
  const local_74 = imported(0);
  const local_75 = imported(null);
  const local_76 = imported(null);
  const local_77 = imported_10(async () => {
    const local = ++local_74.current;
    try {
      const local = await imported_11(imported_12);
      if (local !== local_74.current) {
        return;
      }
      local_69(local);
      local_73(local.bundle.submitLabel);
    } catch {
      if (local === local_74.current) {
        local_71(true);
      }
    }
  }, []);
  const local_78 = imported_10(() => {
    local_69(null);
    local_71(false);
    local_77();
  }, [local_77]);
  imported_4(() => {
    const local = local_74;
    local_77();
    return () => {
      local.current++;
    };
  }, [local_77]);
  const local_79 = (arg = 0) => {
    imported_19();
    local_2.current = null;
    local_5.current = 0;
    local_18.current = 0;
    local_44("");
    local_46(null);
    local_48([]);
    local_11(false);
    local_17(false);
    local_14(false);
    local_23("number");
    local_37(false);
    local_58(false);
    local_56(Date.now() + arg * 1000);
    local_35(imported_38);
    local_78();
  };
  const local_80 = async (arg) => {
    if (!local_40.current) {
      local_40.current = true;
      local_39(true);
      local_35("");
      try {
        await arg();
      } catch (error) {
        if (local_22 === "terms" && imported_33(error)) {
          local_79();
        } else if (
          local_22 === "code" &&
          imported_33(error) &&
          error.flowExpiresIn > 0
        ) {
          local_58(true);
          local_56(Date.now() + error.flowExpiresIn * 1000);
          local_35(imported_34);
        } else if (local_22 === "code" && imported_33(error)) {
          local_79();
        } else {
          local_35(
            imported_35(error) || imported_36(error) || imported_37(error),
          );
        }
        if (
          local_22 === "number" &&
          error instanceof imported_31 &&
          error.code === "PHONE_VERIFICATION_PENDING"
        ) {
          local_56(Date.now() + error.retryIn * 1000);
        }
        if (
          error instanceof imported_31 &&
          error.retryIn &&
          !(local_22 === "number" && local_15.current === "reverse")
        ) {
          local_54(Date.now() + error.retryIn * 1000);
        }
      } finally {
        local_40.current = false;
        local_39(false);
      }
    }
  };
  const local_81 = async () => {
    await imported_41.getState().initialize();
    const local = imported_41.getState().status;
    if (local !== "authenticated" && local !== "needs_profile") {
      throw new Error("Session unavailable");
    }
    if (local === "needs_profile") {
      if (
        window.location.pathname !== imported_42.ONBOARDING &&
        !imported_43(imported_42.ONBOARDING, true)
      ) {
        window.location.assign(imported_42.ONBOARDING);
      }
      return;
    }
    imported_44.syncIfAttached().catch(() => {});
    if (
      [imported_42.LOGIN, imported_42.REGISTER, imported_42.ONBOARDING].some(
        (arg) => arg === window.location.pathname,
      )
    ) {
      const local = imported_42.HOME;
      if (!imported_43(local, true)) {
        window.location.assign(local);
      }
    }
  };
  const local_82 = async (arg) => {
    if (!(!local_4.current || local_3.current !== imported_29())) {
      if (arg.step === "terms") {
        if (!imported_39(arg.consent, imported_45)) {
          throw new imported_31("LEGAL_UNAVAILABLE");
        }
        local_25(arg.consent);
        local_27(false);
        local_23("terms");
        return;
      }
      imported_19();
      if (arg.step === "password" && arg.flowToken) {
        local_44(arg.flowToken);
        local_50("");
        local_23("password");
      } else if (arg.accessToken) {
        await local_81();
      } else {
        throw new Error("Unexpected login response");
      }
    }
  };
  const local_83 = (arg) => {
    local_37(false);
    const local = local_75.current;
    local_75.current = null;
    if (local_64) {
      if (!local) {
        local_35(imported_17);
        local_78();
        return;
      }
      local_80(async () => {
        try {
          local_76.current = local_64;
          const local = await imported_28.start(
            local_64,
            arg,
            imported_40(local),
            local_15.current,
          );
          if (!local_4.current || local_3.current !== imported_29()) {
            return;
          }
          local_5.current = Date.now() + 300000;
          local_18.current = local_5.current;
          local_58(false);
          local_56(0);
          local_11(false);
          local_12(
            local_64,
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
            local_42(local_64);
            local_44(local.flowToken);
            local_46(local);
            local_48([]);
            local_18.current = Date.now() + 240000;
            local_35(imported_27);
            return;
          }
          local_21("");
          local_19("");
          local_17(local_15.current === "reverse");
          local_14(local.reverseOnly === true);
          local_42(local_64);
          local_44(local.flowToken);
          local_46(local);
          local_48([]);
          local_23("code");
          if (local_15.current !== "reverse") {
            local_54(Date.now() + local.retryIn * 1000);
          }
        } catch (error) {
          if (imported_35(error)) {
            local_78();
          }
          error instanceof imported_31 &&
            (error.code === "PHONE_NUMBER_LIMIT_REVERSE_AVAILABLE"
              ? (local_19(local_64),
                local_21(""),
                local_42(local_64),
                local_44(""),
                local_46(null))
              : [
                  "TOO_MANY_REQUESTS",
                  "REVERSE_BUDGET_EXHAUSTED",
                  "REVERSE_UNAVAILABLE",
                ].includes(error.code) &&
                (local_19(""),
                local_21(local_64),
                local_46(null),
                local_44("")));
          throw error;
        }
      });
    }
  };
  const local_84 = (arg) => {
    arg.preventDefault();
    if (local_22 === "number") {
      if (
        !local_66 ||
        !local_64 ||
        local_62 ||
        local_63 ||
        local_38 ||
        local_6 ||
        local_8
      ) {
        return;
      }
      if (!local_68 || imported_23(local_68)) {
        local_78();
        return;
      }
      local_15.current = "direct";
      local_75.current = local_68;
      local_35("");
      local_37(true);
      return;
    }
    local_80(async () => {
      if (local_22 === "terms") {
        if (!local_26 || !local_24) {
          return;
        }
        const local = (arg) => {
          if (local_13) {
            return imported_46.complete(local_41, local_43, false, arg);
          }
          return imported_28.verify(local_41, local_43, local_47.join(""), arg);
        };
        try {
          if (imported_23(local_24)) {
            await local_82(await local());
          } else {
            await local_82(
              await local({
                accepted: true,
                contextToken: local_24.contextToken,
              }),
            );
          }
        } catch (error) {
          if (!imported_47(error)) {
            throw error;
          }
          await local_82(await local());
        }
      } else if (local_22 === "code") {
        if (
          !local_45 ||
          local_45.reverseOnly ||
          local_47.join("").length !== local_45.codeLength
        ) {
          return;
        }
        let local;
        try {
          local = await imported_28.verify(
            local_41,
            local_43,
            local_47.join(""),
          );
        } catch (error) {
          if (imported_47(error)) {
            imported_19();
            local_23("number");
            local_48([]);
            local_44("");
            local_46(null);
            local_78();
          }
          throw error;
        }
        await local_82(local);
      } else {
        if (
          local_22 === "reset" &&
          (local_49 !== local_51 ||
            !/^(?=.*[A-Za-z])(?=.*\d).{8,100}$/.test(local_49))
        ) {
          local_35(
            "Пароли должны совпадать: от 8 символов, латинская буква и цифра.",
          );
          return;
        }
        if (local_22 === "reset") {
          await imported_28.reset(local_41, local_43, local_49);
        } else {
          await imported_28.password(local_41, local_43, local_49);
        }
        await local_81();
      }
    });
  };
  return imported_13("div", {
    className: imported_14.card,
    "data-reverse-open": local_13,
    children: [
      imported_13("div", {
        className: imported_14.brand,
        children: imported_13(imported_15, {}),
      }),
      imported_13("div", {
        className: imported_14.symbol,
        children: imported_13("svg", {
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          children: [
            imported_13("rect", {
              x: "6",
              y: "2",
              width: "12",
              height: "20",
              rx: "3",
            }),
            imported_13("path", {
              d: "M10 5h4m-3 14h2",
            }),
          ],
        }),
      }),
      imported_13(
        "h1",
        {
          className: imported_14.phase,
          children:
            local_22 === "terms"
              ? "Создание аккаунта"
              : local_22 === "number"
                ? local === "sign-up"
                  ? "Регистрация"
                  : "Вход по телефону"
                : local_22 === "code"
                  ? local_13
                    ? "Позвоните сами"
                    : local_45?.reverseOnly
                      ? "Не удалось позвонить"
                      : "Подтвердите номер"
                  : local_22 === "reset"
                    ? "Новый пароль"
                    : "Облачный пароль",
        },
        local_22 + String(local_13),
      ),
      imported_13(
        "p",
        {
          className: `${imported_14.description} ${imported_14.phase}`,
          children:
            local_22 === "terms"
              ? "Номер подтверждён. Примите условия, чтобы создать аккаунт."
              : local_22 === "number"
                ? local === "sign-up"
                  ? local_66
                    ? "Создайте аккаунт по номеру телефона. Номер подтвердим проверочным кодом."
                    : "Создайте аккаунт по номеру телефона. Подтвердите номер звонком."
                  : local_66
                    ? "Войдите или создайте аккаунт. Номер подтвердим проверочным кодом."
                    : "Войдите или создайте аккаунт. Подтвердите номер звонком."
                : local_22 === "code"
                  ? local_13
                    ? "Позвоните на выданный номер с этого телефона. Код вводить не нужно."
                    : local_45?.reverseOnly
                      ? "Вы можете позвонить сами или повторить запрос позже."
                      : local_45?.channel === "push"
                        ? "Код отправлен в приложение ИТД."
                        : local_45?.channel === "sms"
                          ? "Введите код из сообщения."
                          : `Введите последние ${local_45?.codeLength ?? 4} цифры номера входящего звонка.`
                  : local_22 === "password"
                    ? "Для этого аккаунта включена дополнительная защита."
                    : "Номер подтверждён. Задайте новый пароль для входа.",
        },
        local_22 + String(local_13),
      ),
      imported_13(
        "form",
        {
          className: `${imported_14.form} ${imported_14.phase}`,
          onSubmit: local_84,
          children: [
            local_22 === "number"
              ? imported_13(imported_16, {
                  country: local_28,
                  digits: local_30,
                  disabled: local_38 || local_6 || local_8,
                  error: local_32,
                  onChange: (arg, arg_2, arg_3) => {
                    local_29(arg);
                    local_31(arg_2);
                    local_33(arg_3);
                    local_35("");
                    if (
                      local_76.current &&
                      imported_6(arg, arg_2) !== local_76.current
                    ) {
                      local_76.current = null;
                      local_78();
                    }
                  },
                })
              : imported_13("span", {
                  className: imported_14.number,
                  children: local_41.replace(
                    /^\+7(\d{3})(\d{3})(\d{2})(\d{2})$/,
                    "+7 ($1) $2-$3-$4",
                  ),
                }),
            (local_22 === "password" || local_22 === "reset") &&
              imported_13("label", {
                className: imported_14.field,
                children: [
                  local_22 === "reset" ? "Новый пароль" : "Облачный пароль",
                  imported_13("input", {
                    type: "password",
                    autoComplete:
                      local_22 === "reset"
                        ? "new-password"
                        : "current-password",
                    maxLength: 100,
                    value: local_49,
                    onInput: (arg) => local_50(arg.currentTarget.value),
                    disabled: local_38,
                    required: true,
                  }),
                ],
              }),
            local_22 === "reset" &&
              imported_13("label", {
                className: imported_14.field,
                children: [
                  "Повторите пароль",
                  imported_13("input", {
                    type: "password",
                    autoComplete: "new-password",
                    maxLength: 100,
                    value: local_51,
                    onInput: (arg) => local_52(arg.currentTarget.value),
                    disabled: local_38,
                    required: true,
                  }),
                ],
              }),
            (local_34 || local_32 || (local_22 === "number" && local_70)) &&
              imported_13("p", {
                className: imported_14.error,
                role: "alert",
                children: local_34 || local_32 || imported_17,
              }),
            local_22 === "number" &&
              local_70 &&
              imported_13("button", {
                className: imported_14.link,
                type: "button",
                onClick: local_78,
                children: "Загрузить документы ещё раз",
              }),
            local_22 === "number" &&
              local_8 &&
              imported_13(imported_18, {
                children: [
                  imported_13("p", {
                    className: imported_14.error,
                    role: "alert",
                    children: "Не удалось восстановить начатую проверку.",
                  }),
                  imported_13("button", {
                    className: imported_14.link,
                    type: "button",
                    disabled: local_6,
                    onClick: () => {
                      local_61();
                    },
                    children: "Продолжить проверку",
                  }),
                  imported_13("button", {
                    className: imported_14.link,
                    type: "button",
                    onClick: () => {
                      imported_19();
                      local_9(false);
                      local_2.current = null;
                    },
                    children: "Начать заново",
                  }),
                ],
              }),
            local_22 !== "code" &&
              local_22 !== "terms" &&
              (local_22 !== "number" || local_66) &&
              imported_13(imported_20, {
                type: "submit",
                fullWidth: true,
                size: "lg",
                loading: local_38 || local_6,
                disabled:
                  local_6 ||
                  local_8 ||
                  (local_22 === "number"
                    ? !local_64 || !!local_62 || !!local_63 || !local_68
                    : !local_49),
                children:
                  local_22 === "number"
                    ? local_62
                      ? `Подождите ${local_62} с`
                      : local_63
                        ? `Новая проверка через ${local_63} с`
                        : local_72
                    : local_22 === "reset"
                      ? "Сохранить и войти"
                      : "Войти",
              }),
            local_22 === "terms" &&
              local_24 &&
              imported_13(imported_18, {
                children: [
                  imported_13(imported_21, {
                    checked: local_26,
                    disabled: local_38,
                    onChange: local_27,
                    href:
                      local_24.bundle.documents.find(
                        (arg) => arg.slug === "terms",
                      )?.url ?? "/terms",
                  }),
                  imported_13(imported_22, {}),
                  imported_13(imported_20, {
                    type: "submit",
                    fullWidth: true,
                    size: "lg",
                    disabled: !local_26,
                    loading: local_38,
                    children: local_24.bundle.submitLabel,
                  }),
                ],
              }),
            local_22 === "number" &&
              imported_13("div", {
                className: imported_14.reverseEntry,
                "data-ready": local_67,
                "aria-hidden": !local_67,
                inert: !local_67,
                children: imported_13("div", {
                  children: imported_13(imported_20, {
                    type: "button",
                    fullWidth: true,
                    size: "lg",
                    disabled:
                      local_38 || local_6 || local_8 || !!local_63 || !local_68,
                    onClick: () => {
                      if (!(
                        !local_64 ||
                        local_40.current ||
                        local_6 ||
                        local_8 ||
                        local_63
                      )) {
                        if (
                          local_41 === local_64 &&
                          local_45?.reverseOnly &&
                          local_43 &&
                          Date.now() < local_18.current
                        ) {
                          local_12(local_41, local_43, "reverse");
                          local_17(true);
                          local_11(false);
                          local_14(true);
                          local_23("code");
                          local_35("");
                          return;
                        }
                        if (!local_68 || imported_23(local_68)) {
                          local_78();
                          return;
                        }
                        local_15.current = "reverse";
                        local_75.current = local_68;
                        local_35("");
                        local_37(true);
                      }
                    },
                    children: local_63
                      ? `Позвонить самому через ${local_63} с`
                      : "Позвонить самому",
                  }),
                }),
              }),
            local_22 === "code" &&
              imported_13("div", {
                className: imported_14.verification,
                children: [
                  local_45 &&
                    imported_13(imported_24, {
                      visible: !local_13 && !local_45.reverseOnly,
                      children: [
                        imported_13(imported_25, {
                          value: local_47,
                          length: local_45.codeLength,
                          onChange: local_48,
                          disabled: local_38,
                          status: local_34 ? "error" : "idle",
                        }),
                        imported_13(imported_20, {
                          type: "submit",
                          fullWidth: true,
                          size: "lg",
                          loading: local_38,
                          disabled:
                            local_47.join("").length !== local_45.codeLength,
                          children: "Продолжить",
                        }),
                        imported_13("button", {
                          className: imported_14.link,
                          type: "button",
                          disabled: local_38 || !!local_62 || local_57,
                          onClick: () => {
                            local_80(async () => {
                              const local = await imported_28.resend(
                                local_41,
                                local_43,
                              );
                              local_46(local);
                              local_48([]);
                              local_54(Date.now() + local.retryIn * 1000);
                            });
                          },
                          children: local_62
                            ? `Повторить через ${local_62} с`
                            : "Позвонить ещё раз",
                        }),
                        local_57 &&
                          imported_13(imported_20, {
                            type: "button",
                            fullWidth: true,
                            size: "lg",
                            disabled: local_38 || !!local_63,
                            onClick: () => local_79(),
                            children: local_63
                              ? `Новая проверка через ${local_63} с`
                              : "Начать новую проверку",
                          }),
                      ],
                    }),
                  imported_13(
                    imported_26,
                    {
                      embedded: true,
                      resumeOpen: local_10,
                      directEntry: local_16,
                      onRestart: () => local_79(),
                      onUnavailable: () => {
                        imported_19();
                        local_23("number");
                        local_14(false);
                        local_19("");
                        local_21(local_41);
                        local_46(null);
                        local_44("");
                        local_35(
                          "Слишком много попыток. Подождите перед повторным запросом.",
                        );
                      },
                      onExit: (arg, arg_2) => {
                        if (arg || arg_2 === 0) {
                          imported_19();
                          local_44("");
                          local_46(null);
                          local_19(arg_2 === 0 ? "" : local_41);
                          local_18.current = 0;
                        }
                        if (arg_2 === 0) {
                          local_21(local_41);
                        }
                        local_23("number");
                        local_14(false);
                        local_35(
                          arg_2 === 0
                            ? "Слишком много попыток. Подождите перед повторным запросом."
                            : local_62
                              ? "Подождите перед повторным запросом, либо воспользуйтесь альтернативным методом."
                              : imported_27,
                        );
                      },
                      initialFailure: local_45?.reverseOnly,
                      phone: local_41,
                      flowToken: local_43,
                      disabled: local_38,
                      onModeChange: (arg) => {
                        local_12(
                          local_41,
                          local_43,
                          arg
                            ? "reverse"
                            : local_45?.reverseOnly
                              ? "choice"
                              : "code",
                        );
                        local_14(arg);
                        local_35("");
                      },
                      onComplete: local_82,
                    },
                    local_41 + local_43,
                  ),
                  local_45?.reverseOnly &&
                    !local_13 &&
                    imported_13("button", {
                      className: imported_14.link,
                      type: "button",
                      disabled: local_38 || !!local_62 || local_57,
                      onClick: () => {
                        local_80(async () => {
                          const local = await imported_28.resend(
                            local_41,
                            local_43,
                          );
                          local_46(local);
                          local_48([]);
                          local_54(Date.now() + local.retryIn * 1000);
                        });
                      },
                      children: local_62
                        ? `Повторить через ${local_62} с`
                        : "Позвонить ещё раз",
                    }),
                ],
              }),
            local_22 === "password" &&
              imported_13("button", {
                className: imported_14.link,
                type: "button",
                disabled: local_38,
                onClick: () => {
                  local_23("reset");
                  local_50("");
                  local_35("");
                },
                children: "Не помню пароль",
              }),
            local_22 === "reset" &&
              imported_13("a", {
                className: imported_14.link,
                href: "/forgot-password",
                children: "Восстановить через почту",
              }),
            local_22 === "number"
              ? arg.intent === "sign-up"
                ? imported_13("p", {
                    className: imported_14.terms,
                    children: [
                      "Уже есть аккаунт? ",
                      imported_13("a", {
                        href: "/login",
                        children: "Войти",
                      }),
                    ],
                  })
                : imported_13("button", {
                    className: imported_14.back,
                    type: "button",
                    disabled: local_38,
                    onClick: arg.onBack,
                    children: "Вернуться ко входу по почте",
                  })
              : imported_13("button", {
                  className: imported_14.back,
                  type: "button",
                  disabled: local_38,
                  onClick: () => {
                    imported_19();
                    local_11(false);
                    local_23("number");
                    local_48([]);
                    local_50("");
                    local_52("");
                    local_44("");
                    local_35("");
                  },
                  children: "Другой номер телефона",
                }),
            (local_22 === "code" ||
              local_22 === "password" ||
              local_22 === "reset") &&
              imported_13(imported_22, {}),
          ],
        },
        local_22,
      ),
      local_22 === "number" &&
        local_68 &&
        imported_13("p", {
          className: imported_14.terms,
          children: local_68.bundle.text.map((arg, arg_2) => {
            const local =
              arg.document === "terms"
                ? "/terms"
                : arg.document === "privacy"
                  ? "/privacy"
                  : null;
            if (local) {
              return imported_13(
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
      imported_13(imported_48, {
        isOpen: local_36,
        onClose: () => local_37(false),
        onVerify: local_83,
      }),
    ],
  });
}
export { symbol_001 };
