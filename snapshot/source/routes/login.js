const local_caaca7ea = (
  arg,
  arg_2 = local_caaca7ea,
  arg_3 = arg_2.f ||
    (arg_2.f = [
      "../shared/chunk-12e7070934fc.js",
      "../entry.js",
      "../entry.css",
      "../shared/chunk-12b08122b95d.js",
      "../shared/chunk-12b08122b95d.css",
      "../shared/chunk-12e7070934fc.css",
    ]),
) => arg.map((arg) => arg_3[arg]);
import {
  symbol_054 as imported,
  symbol_073 as imported_2,
  symbol_004 as imported_3,
  symbol_067 as imported_4,
  symbol_074 as imported_5,
  ae as imported_6,
  symbol_071 as imported_7,
  symbol_037 as imported_8,
  symbol_003 as imported_9,
  symbol_061 as imported_10,
  symbol_076 as imported_11,
  symbol_020 as imported_12,
  symbol_062 as imported_13,
} from "../entry.js";
import {
  symbol_003 as imported_14,
  symbol_001 as imported_15,
} from "../shared/chunk-12b08122b95d.js";
import { symbol_001 as imported_16 } from "../shared/chunk-7195651f0d46.js";
import {
  I as imported_17,
  a as imported_18,
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
      id: "1.1.4",
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
const local_ab7982d5 = "c_row";
const local_f9d38289 = "c_qrCol";
const local_ac64d1ae = "c_qrLabel";
const local_fdd13e19 = "c_qrSlot";
const local_c642bb00 = {
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
  row: local_ab7982d5,
  qrCol: local_f9d38289,
  qrLabel: local_ac64d1ae,
  qrSlot: local_fdd13e19,
};
const local_5340a218 = imported_11(() =>
  imported_13(
    () => import("../shared/chunk-12e7070934fc.js"),
    local_caaca7ea([0, 1, 2, 3, 4, 5]),
  ).then((arg) => ({
    default: arg.QrLogin,
  })),
);
export const local_e8679747 = (arg) => {
  const [local, local_2] = imported("");
  const [local_3, local_4] = imported("");
  const [local_5, local_6] = imported(false);
  const [local_7, local_8] = imported(false);
  const [local_9, local_10] = imported(null);
  const [local_11, local_12] = imported(null);
  const [local_13, local_14] = imported("credentials");
  const { login: local_15, status: local_16, reset: local_17 } = imported_2();
  const local_18 = imported_3();
  const local_19 = local_16 === "loading";
  const local_20 = (arg) => {
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
  const local_21 = imported_4(
    async (arg, arg_2) => {
      local_8(false);
      try {
        if (
          (await local_15({
            email: local,
            password: local_3,
            ...imported_14(arg, arg_2),
          })) !== "authenticated"
        ) {
          local_14("verify");
        }
      } catch (error) {
        if (imported_5(error)) {
          switch (error.code) {
            case imported_6.ACCOUNT_INVALID_CREDENTIALS:
              local_10("Неверный email или пароль");
              break;
            case imported_6.ACCOUNT_DEACTIVATED:
              local_10("Аккаунт деактивирован");
              break;
            case imported_6.ACCOUNT_TEMPORARILY_LOCKED:
              local_10("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            case imported_6.CAPTCHA_FAILED:
              local_10("Проверка captcha не пройдена. Попробуйте снова");
              break;
            case imported_6.RATE_LIMIT_EXCEEDED:
              local_10("Слишком много попыток. Попробуйте позже");
              break;
            case imported_6.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED:
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
  const local_22 = imported_4(() => {
    local_17();
    local_14("credentials");
  }, [local_17]);
  return imported_7(imported_12, {
    children: [
      imported_7("div", {
        className: local_c642bb00.container,
        children: [
          imported_7("div", {
            className: local_c642bb00.logo,
            children: imported_7(imported_8, {}),
          }),
          local_13 === "credentials"
            ? imported_7("div", {
                className: local_c642bb00.row,
                children: [
                  imported_7("form", {
                    className: local_c642bb00.form,
                    onSubmit: local_20,
                    children: [
                      imported_7("div", {
                        className: local_c642bb00.header,
                        children: [
                          imported_7("h1", {
                            className: local_c642bb00.title,
                            children: "Вход",
                          }),
                          imported_7("p", {
                            className: local_c642bb00.subtitle,
                            children: "Пожалуйста, введите ваши данные",
                          }),
                        ],
                      }),
                      local_9 &&
                        imported_7("div", {
                          className: local_c642bb00.error,
                          children: local_9,
                        }),
                      imported_7("div", {
                        className: local_c642bb00.inputs,
                        children: [
                          imported_7("div", {
                            className: local_c642bb00.inputGroup,
                            children: [
                              imported_7("label", {
                                className: local_c642bb00.label,
                                children: "E-Mail",
                              }),
                              imported_7("input", {
                                type: "email",
                                className: `${local_c642bb00.input} ${local_11 ? local_c642bb00.inputError : ""}`,
                                value: local,
                                onInput: (arg) => {
                                  local_2(arg.target.value);
                                  local_12(null);
                                },
                                placeholder: "ilya@gmail.com",
                                disabled: local_19,
                              }),
                              local_11 &&
                                imported_7("span", {
                                  className: local_c642bb00.fieldError,
                                  children: local_11,
                                }),
                            ],
                          }),
                          imported_7("div", {
                            className: local_c642bb00.inputGroup,
                            children: [
                              imported_7("label", {
                                className: local_c642bb00.label,
                                children: "Пароль",
                              }),
                              imported_7("div", {
                                className: local_c642bb00.inputWrapper,
                                children: [
                                  imported_7("input", {
                                    type: local_5 ? "text" : "password",
                                    className: local_c642bb00.input,
                                    value: local_3,
                                    onInput: (arg) => local_4(arg.target.value),
                                    placeholder: "••••••••••••",
                                    disabled: local_19,
                                  }),
                                  imported_7("button", {
                                    type: "button",
                                    className: local_c642bb00.eyeButton,
                                    onClick: () => local_6(!local_5),
                                    children: local_5
                                      ? imported_7(imported_17, {
                                          size: 20,
                                        })
                                      : imported_7(imported_18, {
                                          size: 20,
                                        }),
                                  }),
                                ],
                              }),
                              imported_7("a", {
                                href: "/forgot-password",
                                className: local_c642bb00.forgotPassword,
                                children: "Забыли пароль?",
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
                        className: local_c642bb00.submitButton,
                        disabled: local_19,
                        children: local_19 ? "Вход..." : "Войти",
                      }),
                      imported_7("p", {
                        className: local_c642bb00.signupLink,
                        children: [
                          "Еще нет аккаунта? ",
                          imported_7("a", {
                            href: "/register",
                            children: "Создать аккаунт",
                          }),
                        ],
                      }),
                    ],
                  }),
                  !local_18 &&
                    imported_7("aside", {
                      className: local_c642bb00.qrCol,
                      children: [
                        imported_7("p", {
                          className: local_c642bb00.qrLabel,
                          children: "или QR-код",
                        }),
                        imported_7("div", {
                          className: local_c642bb00.qrSlot,
                          children: imported_7(imported_10, {
                            fallback: null,
                            children: imported_7(local_5340a218, {
                              enabled: true,
                              caption: "Отсканируйте код в приложении ИТД",
                            }),
                          }),
                        }),
                      ],
                    }),
                ],
              })
            : imported_7(imported_16, {
                email: local,
                onBack: local_22,
              }),
        ],
      }),
      imported_7(imported_15, {
        isOpen: local_7,
        onClose: () => local_8(false),
        onVerify: local_21,
        action: "login",
      }),
    ],
  });
};
export { local_e8679747 as default };
