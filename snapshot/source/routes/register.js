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
import { V as imported_11 } from "../shared/chunk-7195651f0d46.js";
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
const local_f53702d6 = "c_inputWrapper";
const local_301b9a53 = "c_input";
const local_fe9ec23f = "c_label";
const local_053694e9 = "c_inputError";
const local_889abf52 = "c_fieldError";
const local_43fe4b00 = "c_eyeButton";
const local_57643cbe = "c_terms";
const local_7149ec44 = "c_submitButton";
const local_8ed84883 = "c_loginLink";
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
  inputWrapper: local_f53702d6,
  input: local_301b9a53,
  label: local_fe9ec23f,
  inputError: local_053694e9,
  fieldError: local_889abf52,
  eyeButton: local_43fe4b00,
  terms: local_57643cbe,
  submitButton: local_7149ec44,
  loginLink: local_8ed84883,
};
export const local_2ca450e5 = (arg) => {
  const [local, local_2] = imported("");
  const [local_3, local_4] = imported("");
  const [local_5, local_6] = imported(false);
  const [local_7, local_8] = imported(false);
  const [local_9, local_10] = imported(null);
  const [local_11, local_12] = imported(null);
  const [local_13, local_14] = imported(null);
  const [local_15, local_16] = imported("credentials");
  const {
    register: local_17,
    status: local_18,
    reset: local_19,
  } = imported_2();
  const local_20 = local_18 === "loading";
  const local_21 = (arg) => {
    arg.preventDefault();
    local_10(null);
    local_12(null);
    local_14(null);
    if (!local.trim()) {
      local_12("Введите email");
      return;
    }
    if (!local_3.trim()) {
      local_14("Введите пароль");
      return;
    }
    if (local_3.length < 10) {
      local_14("Минимум 10 символов");
      return;
    }
    if (local_3.length > 128) {
      local_14("Максимум 128 символов");
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(local_3)) {
      local_14("Только латиница, цифры и знаки пунктуации");
      return;
    }
    local_8(true);
  };
  const local_22 = imported_3(
    async (arg) => {
      local_8(false);
      try {
        await local_17({
          email: local,
          password: local_3,
          turnstileToken: arg,
        });
        local_16("verify");
      } catch (error) {
        if (imported_4(error)) {
          switch (error.code) {
            case imported_5.ENTITY_ALREADY_EXISTS:
              local_12("Этот email уже зарегистрирован");
              break;
            case imported_5.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED:
              local_12("Почта этого домена не поддерживается");
              break;
            case imported_5.CAPTCHA_FAILED:
              local_10("Проверка captcha не пройдена. Попробуйте снова");
              break;
            case imported_5.RATE_LIMIT_EXCEEDED:
              local_10("Слишком много попыток. Попробуйте позже");
              break;
            case imported_5.VALIDATION_ERROR:
              local_10("Проверьте введённые данные");
              break;
            default:
              local_10(error.message || "Ошибка регистрации");
          }
        } else {
          local_10("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [local, local_3, local_17],
  );
  const local_23 = imported_3(() => {
    local_19();
    local_16("credentials");
  }, [local_19]);
  return imported_6(imported_9, {
    children: [
      imported_6("div", {
        className: local_474661d1.container,
        children: [
          imported_6("div", {
            className: local_474661d1.logo,
            children: imported_6(imported_7, {}),
          }),
          local_15 === "credentials"
            ? imported_6("form", {
                className: local_474661d1.form,
                onSubmit: local_21,
                children: [
                  imported_6("div", {
                    className: local_474661d1.header,
                    children: [
                      imported_6("h1", {
                        className: local_474661d1.title,
                        children: "Создание аккаунта",
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
                            disabled: local_20,
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
                                className: `${local_474661d1.input} ${local_13 ? local_474661d1.inputError : ""}`,
                                value: local_3,
                                onInput: (arg) => {
                                  local_4(arg.target.value);
                                  local_14(null);
                                },
                                placeholder: "Минимум 10 символов",
                                disabled: local_20,
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
                          local_13 &&
                            imported_6("span", {
                              className: local_474661d1.fieldError,
                              children: local_13,
                            }),
                        ],
                      }),
                    ],
                  }),
                  imported_6("p", {
                    className: local_474661d1.terms,
                    children: [
                      "Продолжая, вы соглашаетесь с",
                      "./register.js",
                      imported_6("a", {
                        href: "/terms",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "условиями использования",
                      }),
                      " и",
                      "./register.js",
                      imported_6("a", {
                        href: "/privacy",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "политикой конфиденциальности",
                      }),
                    ],
                  }),
                  imported_6(imported_8, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: local_474661d1.submitButton,
                    disabled: local_20,
                    children: local_20 ? "Регистрация..." : "Продолжить",
                  }),
                  imported_6("p", {
                    className: local_474661d1.loginLink,
                    children: [
                      "Уже есть аккаунт? ",
                      imported_6("a", {
                        href: "/login",
                        children: "Войти",
                      }),
                    ],
                  }),
                ],
              })
            : imported_6(imported_11, {
                email: local,
                onBack: local_23,
              }),
        ],
      }),
      imported_6(imported_10, {
        isOpen: local_7,
        onClose: () => local_8(false),
        onVerify: local_22,
      }),
    ],
  });
};
export { local_2ca450e5 as default };
