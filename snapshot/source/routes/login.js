import {
  symbol_056 as imported,
  symbol_075 as imported_2,
  symbol_069 as imported_3,
  symbol_076 as imported_4,
  symbol_037 as imported_5,
  symbol_073 as imported_6,
  symbol_038 as imported_7,
  symbol_003 as imported_8,
  symbol_063 as imported_9,
} from "../entry.js";
import { C as imported_10 } from "../shared/chunk-0684deeacdb3.js";
import { symbol_001 as imported_11 } from "../shared/chunk-7195651f0d46.js";
import {
  I as imported_12,
  a as imported_13,
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
const local_cd23a337 = "c_error";
const local_9d9cf508 = "c_title";
const local_8c84ac4c = "c_subtitle";
const local_570c1c99 = "c_inputs";
const local_4dc32079 = "c_inputGroup";
const local_fe9ec23f = "c_label";
const local_f53702d6 = "c_inputWrapper";
const local_301b9a53 = "c_input";
const local_053694e9 = "c_inputError";
const local_889abf52 = "c_fieldError";
const local_43fe4b00 = "c_eyeButton";
const local_6c402c90 = "c_forgotPassword";
const local_7149ec44 = "c_submitButton";
const local_ac2763e8 = "c_signupLink";
const local_474661d1 = {
  container: local_adb43aea,
  logo: local_3f8170c1,
  form: local_7ab56d01,
  header: local_f1c23efb,
  error: local_cd23a337,
  title: local_9d9cf508,
  subtitle: local_8c84ac4c,
  inputs: local_570c1c99,
  inputGroup: local_4dc32079,
  label: local_fe9ec23f,
  inputWrapper: local_f53702d6,
  input: local_301b9a53,
  inputError: local_053694e9,
  fieldError: local_889abf52,
  eyeButton: local_43fe4b00,
  forgotPassword: local_6c402c90,
  submitButton: local_7149ec44,
  signupLink: local_ac2763e8,
};
export const local_2e0168a2 = (arg) => {
  const [local, local_2] = imported("");
  const [local_3, local_4] = imported("");
  const [local_5, local_6] = imported(false);
  const [local_7, local_8] = imported(false);
  const [local_9, local_10] = imported(null);
  const [local_11, local_12] = imported(null);
  const [local_13, local_14] = imported("credentials");
  const { login: local_15, status: local_16, reset: local_17 } = imported_2();
  const local_18 = local_16 === "loading";
  const local_19 = (arg) => {
    arg.preventDefault();
    local_10(null);
    local_12(null);
    if (!local.trim()) {
      local_10("Введите email");
      return;
    }
    if (!local_3.trim()) {
      local_10("Введите пароль");
      return;
    }
    local_8(true);
  };
  const local_20 = imported_3(
    async (arg) => {
      local_8(false);
      try {
        if (
          (await local_15({
            email: local,
            password: local_3,
            turnstileToken: arg,
          })) !== "authenticated"
        ) {
          local_14("verify");
        }
      } catch (error) {
        if (imported_4(error)) {
          switch (error.code) {
            case imported_5.ACCOUNT_INVALID_CREDENTIALS:
              local_10("Неверный email или пароль");
              break;
            case imported_5.ACCOUNT_DEACTIVATED:
              local_10("Аккаунт деактивирован");
              break;
            case imported_5.ACCOUNT_TEMPORARILY_LOCKED:
              local_10("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            case imported_5.CAPTCHA_FAILED:
              local_10("Проверка captcha не пройдена. Попробуйте снова");
              break;
            case imported_5.RATE_LIMIT_EXCEEDED:
              local_10("Слишком много попыток. Попробуйте позже");
              break;
            case imported_5.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED:
              local_12("Почта этого домена не поддерживается");
              break;
            default:
              local_10(error.message || "Ошибка входа");
          }
        } else {
          local_10("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [local, local_3, local_15],
  );
  const local_21 = imported_3(() => {
    local_17();
    local_14("credentials");
  }, [local_17]);
  return imported_6(imported_9, {
    children: [
      imported_6("div", {
        className: local_474661d1.container,
        children: [
          imported_6("div", {
            className: local_474661d1.logo,
            children: imported_6(imported_7, {}),
          }),
          local_13 === "credentials"
            ? imported_6("form", {
                className: local_474661d1.form,
                onSubmit: local_19,
                children: [
                  imported_6("div", {
                    className: local_474661d1.header,
                    children: [
                      imported_6("h1", {
                        className: local_474661d1.title,
                        children: "Вход",
                      }),
                      imported_6("p", {
                        className: local_474661d1.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  local_9 &&
                    imported_6("div", {
                      className: local_474661d1.error,
                      children: local_9,
                    }),
                  imported_6("div", {
                    className: local_474661d1.inputs,
                    children: [
                      imported_6("div", {
                        className: local_474661d1.inputGroup,
                        children: [
                          imported_6("label", {
                            className: local_474661d1.label,
                            children: "E-Mail",
                          }),
                          imported_6("input", {
                            type: "email",
                            className: `${local_474661d1.input} ${local_11 ? local_474661d1.inputError : ""}`,
                            value: local,
                            onInput: (arg) => {
                              local_2(arg.target.value);
                              local_12(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: local_18,
                          }),
                          local_11 &&
                            imported_6("span", {
                              className: local_474661d1.fieldError,
                              children: local_11,
                            }),
                        ],
                      }),
                      imported_6("div", {
                        className: local_474661d1.inputGroup,
                        children: [
                          imported_6("label", {
                            className: local_474661d1.label,
                            children: "Пароль",
                          }),
                          imported_6("div", {
                            className: local_474661d1.inputWrapper,
                            children: [
                              imported_6("input", {
                                type: local_5 ? "text" : "password",
                                className: local_474661d1.input,
                                value: local_3,
                                onInput: (arg) => local_4(arg.target.value),
                                placeholder: "••••••••••••",
                                disabled: local_18,
                              }),
                              imported_6("button", {
                                type: "button",
                                className: local_474661d1.eyeButton,
                                onClick: () => local_6(!local_5),
                                children: local_5
                                  ? imported_6(imported_12, {
                                      size: 20,
                                    })
                                  : imported_6(imported_13, {
                                      size: 20,
                                    }),
                              }),
                            ],
                          }),
                          imported_6("a", {
                            href: "/forgot-password",
                            className: local_474661d1.forgotPassword,
                            children: "Забыли пароль?",
                          }),
                        ],
                      }),
                    ],
                  }),
                  imported_6(imported_8, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: local_474661d1.submitButton,
                    disabled: local_18,
                    children: local_18 ? "Вход..." : "Войти",
                  }),
                  imported_6("p", {
                    className: local_474661d1.signupLink,
                    children: [
                      "Еще нет аккаунта? ",
                      imported_6("a", {
                        href: "/register",
                        children: "Создать аккаунт",
                      }),
                    ],
                  }),
                ],
              })
            : imported_6(imported_11, {
                email: local,
                onBack: local_21,
              }),
        ],
      }),
      imported_6(imported_10, {
        isOpen: local_7,
        onClose: () => local_8(false),
        onVerify: local_20,
      }),
    ],
  });
};
export { local_2e0168a2 as default };
