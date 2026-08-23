import {
  symbol_056 as imported,
  symbol_069 as imported_2,
  symbol_039 as imported_3,
  symbol_076 as imported_4,
  symbol_037 as imported_5,
  symbol_057 as imported_6,
  symbol_073 as imported_7,
  symbol_038 as imported_8,
  symbol_003 as imported_9,
  symbol_063 as imported_10,
} from "../entry.js";
import {
  symbol_001 as imported_11,
  C as imported_12,
} from "../shared/chunk-0684deeacdb3.js";
import {
  I as imported_13,
  a as imported_14,
} from "../components/icon-eye-off.js";
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
const local_adb43aea = "c_container";
const local_3f8170c1 = "c_logo";
const local_7ab56d01 = "c_form";
const local_f1c23efb = "c_header";
const local_9d9cf508 = "c_title";
const local_8c84ac4c = "c_subtitle";
const local_cd23a337 = "c_error";
const local_570c1c99 = "c_inputs";
const local_4dc32079 = "c_inputGroup";
const local_fe9ec23f = "c_label";
const local_301b9a53 = "c_input";
const local_f53702d6 = "c_inputWrapper";
const local_053694e9 = "c_inputError";
const local_889abf52 = "c_fieldError";
const local_43fe4b00 = "c_eyeButton";
const local_988f55fc = "c_success";
const local_85b1b822 = "c_backButton";
const local_7149ec44 = "c_submitButton";
const local_0e84bcea = "c_backLink";
const local_66259d24 = {
  container: local_adb43aea,
  logo: local_3f8170c1,
  form: local_7ab56d01,
  header: local_f1c23efb,
  title: local_9d9cf508,
  subtitle: local_8c84ac4c,
  error: local_cd23a337,
  inputs: local_570c1c99,
  inputGroup: local_4dc32079,
  label: local_fe9ec23f,
  input: local_301b9a53,
  inputWrapper: local_f53702d6,
  inputError: local_053694e9,
  fieldError: local_889abf52,
  eyeButton: local_43fe4b00,
  success: local_988f55fc,
  backButton: local_85b1b822,
  submitButton: local_7149ec44,
  backLink: local_0e84bcea,
};
export const local_c0c18d84 = (arg) => {
  const [local, local_2] = imported("");
  const [local_3, local_4] = imported("");
  const [local_5, local_6] = imported("");
  const [local_7, local_8] = imported(null);
  const [local_9, local_10] = imported(null);
  const [local_11, local_12] = imported(null);
  const [local_13, local_14] = imported(false);
  const [local_15, local_16] = imported(false);
  const [local_17, local_18] = imported("email");
  const [local_19, local_20] = imported("");
  const [local_21, local_22] = imported("");
  const [local_23, local_24] = imported(false);
  const [local_25, local_26] = imported(false);
  const [local_27, local_28] = imported(null);
  const [local_29, local_30] = imported(false);
  const local_31 = (arg) => {
    arg.preventDefault();
    local_8(null);
    local_10(null);
    if (!local.trim()) {
      local_10("Введите email");
      return;
    }
    local_16(true);
  };
  const local_32 = imported_2(
    async (arg) => {
      local_16(false);
      local_14(true);
      try {
        const local = await imported_3.forgotPassword({
          email: local,
          turnstileToken: arg,
        });
        local_4(local.flowToken ?? "");
        local_18("otp");
      } catch (error) {
        if (imported_4(error)) {
          switch (error.code) {
            case imported_5.ENTITY_NOT_FOUND:
              local_10("Аккаунт с таким email не найден");
              break;
            case imported_5.VALIDATION_ERROR:
              local_10("Введите корректный email");
              break;
            case imported_5.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED:
              local_10("Почта этого домена не поддерживается");
              break;
            case imported_5.CAPTCHA_FAILED:
              local_8("Проверка captcha не пройдена. Попробуйте снова");
              break;
            case imported_5.RATE_LIMIT_EXCEEDED:
              local_8("Слишком много попыток. Попробуйте позже");
              break;
            default:
              local_8(error.message || "Произошла ошибка");
          }
        } else {
          local_8("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        local_14(false);
      }
    },
    [local],
  );
  const local_33 = imported_2((arg) => {
    local_6(arg);
    local_8(null);
    local_18("password");
  }, []);
  const local_34 = imported_2(
    async (arg) => {
      arg.preventDefault();
      local_8(null);
      local_12(null);
      local_28(null);
      if (!local_19.trim()) {
        local_12("Введите новый пароль");
        return;
      }
      if (local_19.length < 10) {
        local_12("Минимум 10 символов");
        return;
      }
      if (local_19.length > 128) {
        local_12("Максимум 128 символов");
        return;
      }
      if (!/^[\x21-\x7E]+$/.test(local_19)) {
        local_12("Только латиница, цифры и знаки пунктуации");
        return;
      }
      if (local_19 !== local_21) {
        local_28("Пароли не совпадают");
        return;
      }
      local_14(true);
      try {
        await imported_3.resetPassword({
          email: local,
          flowToken: local_3,
          otp: local_5,
          newPassword: local_19,
        });
        imported_6("/login");
      } catch (error) {
        if (imported_4(error)) {
          switch (error.code) {
            case imported_5.OTP_INVALID:
              local_8("Неверный код. Попробуйте снова");
              local_18("otp");
              local_6("");
              break;
            case imported_5.MISSING_FLOW_TOKEN:
            case imported_5.UNAUTHORIZED:
              local_8("Сессия истекла. Начните заново");
              local_18("email");
              break;
            case imported_5.RATE_LIMIT_EXCEEDED:
              local_8("Слишком много попыток. Попробуйте позже");
              break;
            case imported_5.VALIDATION_ERROR:
              local_12("Пароль не соответствует требованиям");
              break;
            default:
              local_8(error.message || "Произошла ошибка");
          }
        } else {
          local_8("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        local_14(false);
      }
    },
    [local, local_3, local_5, local_19, local_21],
  );
  const local_35 = imported_2(async () => {
    local_8(null);
    local_30(false);
    try {
      await imported_3.resendOtp({
        email: local,
        flowToken: local_3,
      });
      local_30(true);
      setTimeout(() => local_30(false), 3000);
    } catch (error) {
      if (imported_4(error)) {
        if (error.code === imported_5.RATE_LIMIT_EXCEEDED) {
          local_8("Слишком много запросов. Попробуйте позже");
        } else {
          local_8(error.message || "Не удалось отправить код");
        }
      } else {
        local_8("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [local, local_3]);
  const local_36 = imported_2(() => {
    local_8(null);
    if (local_17 === "password") {
      local_12(null);
      local_28(null);
      local_20("");
      local_22("");
      local_18("otp");
    } else {
      local_18("email");
    }
  }, [local_17]);
  return imported_7(imported_10, {
    children: [
      imported_7("div", {
        className: local_66259d24.container,
        children: [
          imported_7("div", {
            className: local_66259d24.logo,
            children: imported_7(imported_8, {}),
          }),
          local_17 === "email" &&
            imported_7("form", {
              className: local_66259d24.form,
              onSubmit: local_31,
              children: [
                imported_7("div", {
                  className: local_66259d24.header,
                  children: [
                    imported_7("h1", {
                      className: local_66259d24.title,
                      children: "Забыли пароль?",
                    }),
                    imported_7("p", {
                      className: local_66259d24.subtitle,
                      children: "Введите ваш E-Mail для восстановления",
                    }),
                  ],
                }),
                local_7 &&
                  imported_7("div", {
                    className: local_66259d24.error,
                    children: local_7,
                  }),
                imported_7("div", {
                  className: local_66259d24.inputs,
                  children: imported_7("div", {
                    className: local_66259d24.inputGroup,
                    children: [
                      imported_7("label", {
                        className: local_66259d24.label,
                        children: "E-Mail",
                      }),
                      imported_7("input", {
                        type: "email",
                        className: `${local_66259d24.input} ${local_9 ? local_66259d24.inputError : ""}`,
                        value: local,
                        onInput: (arg) => {
                          local_2(arg.target.value);
                          local_10(null);
                        },
                        placeholder: "ilya@gmail.com",
                        disabled: local_13,
                      }),
                      local_9 &&
                        imported_7("span", {
                          className: local_66259d24.fieldError,
                          children: local_9,
                        }),
                    ],
                  }),
                }),
                imported_7(imported_9, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  fullWidth: true,
                  className: local_66259d24.submitButton,
                  disabled: local_13,
                  children: local_13 ? "Отправка..." : "Отправить",
                }),
                imported_7("p", {
                  className: local_66259d24.backLink,
                  children: imported_7("a", {
                    href: "/login",
                    children: "Вернуться ко входу",
                  }),
                }),
              ],
            }),
          local_17 === "otp" &&
            imported_7("div", {
              className: local_66259d24.form,
              children: [
                imported_7("div", {
                  className: local_66259d24.header,
                  children: [
                    imported_7("h1", {
                      className: local_66259d24.title,
                      children: "Введите код",
                    }),
                    imported_7("p", {
                      className: local_66259d24.subtitle,
                      children: ["Мы отправили шестизначный код на ", local],
                    }),
                  ],
                }),
                local_7 &&
                  imported_7("div", {
                    className: local_66259d24.error,
                    children: local_7,
                  }),
                local_29 &&
                  imported_7("div", {
                    className: local_66259d24.success,
                    children: "Код отправлен повторно",
                  }),
                imported_7(imported_11, {
                  onSubmit: local_33,
                  onResend: local_35,
                  disabled: local_13,
                  buttonText: "Продолжить",
                }),
                imported_7("button", {
                  type: "button",
                  className: local_66259d24.backButton,
                  onClick: local_36,
                  children: "Назад",
                }),
              ],
            }),
          local_17 === "password" &&
            imported_7("form", {
              className: local_66259d24.form,
              onSubmit: local_34,
              children: [
                imported_7("div", {
                  className: local_66259d24.header,
                  children: [
                    imported_7("h1", {
                      className: local_66259d24.title,
                      children: "Новый пароль",
                    }),
                    imported_7("p", {
                      className: local_66259d24.subtitle,
                      children: "Придумайте новый пароль для вашего аккаунта",
                    }),
                  ],
                }),
                local_7 &&
                  imported_7("div", {
                    className: local_66259d24.error,
                    children: local_7,
                  }),
                imported_7("div", {
                  className: local_66259d24.inputs,
                  children: [
                    imported_7("div", {
                      className: local_66259d24.inputGroup,
                      children: [
                        imported_7("label", {
                          className: local_66259d24.label,
                          children: "Новый пароль",
                        }),
                        imported_7("div", {
                          className: local_66259d24.inputWrapper,
                          children: [
                            imported_7("input", {
                              type: local_23 ? "text" : "password",
                              className: `${local_66259d24.input} ${local_11 ? local_66259d24.inputError : ""}`,
                              value: local_19,
                              onInput: (arg) => {
                                local_20(arg.target.value);
                                local_12(null);
                              },
                              placeholder: "Минимум 10 символов",
                              autoComplete: "new-password",
                              autoFocus: true,
                            }),
                            imported_7("button", {
                              type: "button",
                              className: local_66259d24.eyeButton,
                              onClick: () => local_24(!local_23),
                              children: local_23
                                ? imported_7(imported_13, {
                                    size: 20,
                                  })
                                : imported_7(imported_14, {
                                    size: 20,
                                  }),
                            }),
                          ],
                        }),
                        local_11 &&
                          imported_7("span", {
                            className: local_66259d24.fieldError,
                            children: local_11,
                          }),
                      ],
                    }),
                    imported_7("div", {
                      className: local_66259d24.inputGroup,
                      children: [
                        imported_7("label", {
                          className: local_66259d24.label,
                          children: "Повторите пароль",
                        }),
                        imported_7("div", {
                          className: local_66259d24.inputWrapper,
                          children: [
                            imported_7("input", {
                              type: local_25 ? "text" : "password",
                              className: `${local_66259d24.input} ${local_27 ? local_66259d24.inputError : ""}`,
                              value: local_21,
                              onInput: (arg) => {
                                local_22(arg.target.value);
                                local_28(null);
                              },
                              placeholder: "Повторите пароль",
                              autoComplete: "new-password",
                            }),
                            imported_7("button", {
                              type: "button",
                              className: local_66259d24.eyeButton,
                              onClick: () => local_26(!local_25),
                              children: local_25
                                ? imported_7(imported_13, {
                                    size: 20,
                                  })
                                : imported_7(imported_14, {
                                    size: 20,
                                  }),
                            }),
                          ],
                        }),
                        local_27 &&
                          imported_7("span", {
                            className: local_66259d24.fieldError,
                            children: local_27,
                          }),
                      ],
                    }),
                  ],
                }),
                imported_7(imported_9, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  fullWidth: true,
                  className: local_66259d24.submitButton,
                  disabled: local_13 || !local_19.trim(),
                  children: local_13 ? "Сброс..." : "Сбросить пароль",
                }),
                imported_7("button", {
                  type: "button",
                  className: local_66259d24.backButton,
                  onClick: local_36,
                  children: "Назад",
                }),
              ],
            }),
        ],
      }),
      imported_7(imported_12, {
        isOpen: local_15,
        onClose: () => local_16(false),
        onVerify: local_32,
      }),
    ],
  });
};
export { local_c0c18d84 as default };
