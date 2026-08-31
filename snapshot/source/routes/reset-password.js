import {
  symbol_054 as imported,
  symbol_071 as imported_2,
  symbol_037 as imported_3,
  symbol_003 as imported_4,
  symbol_020 as imported_5,
  symbol_038 as imported_6,
  symbol_055 as imported_7,
  symbol_074 as imported_8,
  ae as imported_9,
} from "../entry.js";
import {
  I as imported_10,
  a as imported_11,
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
const local_9d9cf508 = "c_title";
const local_8c84ac4c = "c_subtitle";
const local_cd23a337 = "c_error";
const local_570c1c99 = "c_inputs";
const local_4dc32079 = "c_inputGroup";
const local_fe9ec23f = "c_label";
const local_f53702d6 = "c_inputWrapper";
const local_301b9a53 = "c_input";
const local_053694e9 = "c_inputError";
const local_889abf52 = "c_fieldError";
const local_ca66b2a4 = "c_hint";
const local_43fe4b00 = "c_eyeButton";
const local_7149ec44 = "c_submitButton";
const local_0e84bcea = "c_backLink";
const local_474661d1 = {
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
  inputWrapper: local_f53702d6,
  input: local_301b9a53,
  inputError: local_053694e9,
  fieldError: local_889abf52,
  hint: local_ca66b2a4,
  eyeButton: local_43fe4b00,
  submitButton: local_7149ec44,
  backLink: local_0e84bcea,
};
export const local_a34523c6 = (arg) => {
  const [local, local_2] = imported("");
  const [local_3, local_4] = imported("");
  const [local_5, local_6] = imported(false);
  const [local_7, local_8] = imported(false);
  const [local_9, local_10] = imported(null);
  const [local_11, local_12] = imported(null);
  const [local_13, local_14] = imported(null);
  const [local_15, local_16] = imported(false);
  const local_17 = async (arg) => {
    arg.preventDefault();
    local_10(null);
    local_12(null);
    local_14(null);
    if (!local.trim()) {
      local_12("Введите новый пароль");
      return;
    }
    if (local.length < 10) {
      local_12("Минимум 10 символов");
      return;
    }
    if (local.length > 128) {
      local_12("Максимум 128 символов");
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(local)) {
      local_12("Только латиница, цифры и знаки пунктуации");
      return;
    }
    if (local !== local_3) {
      local_14("Пароли не совпадают");
      return;
    }
    local_16(true);
    try {
      await imported_6.resetPassword({
        newPassword: local,
      });
      imported_7("/login");
    } catch (error) {
      if (imported_8(error)) {
        switch (error.code) {
          case imported_9.MISSING_FLOW_TOKEN:
          case imported_9.UNAUTHORIZED:
          case imported_9.BAD_REQUEST:
            local_10("Сессия сброса пароля истекла. Начните заново");
            break;
          case imported_9.VALIDATION_ERROR:
            local_12("Пароль не соответствует требованиям");
            break;
          case imported_9.RATE_LIMIT_EXCEEDED:
            local_10("Слишком много попыток. Попробуйте позже");
            break;
          default:
            local_10(error.message || "Произошла ошибка");
        }
      } else {
        local_10("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      local_16(false);
    }
  };
  return imported_2(imported_5, {
    children: imported_2("div", {
      className: local_474661d1.container,
      children: [
        imported_2("div", {
          className: local_474661d1.logo,
          children: imported_2(imported_3, {}),
        }),
        imported_2("form", {
          className: local_474661d1.form,
          onSubmit: local_17,
          children: [
            imported_2("div", {
              className: local_474661d1.header,
              children: [
                imported_2("h1", {
                  className: local_474661d1.title,
                  children: "Новый пароль",
                }),
                imported_2("p", {
                  className: local_474661d1.subtitle,
                  children: "Придумайте новый пароль для вашего аккаунта",
                }),
              ],
            }),
            local_9 &&
              imported_2("div", {
                className: local_474661d1.error,
                children: local_9,
              }),
            imported_2("div", {
              className: local_474661d1.inputs,
              children: [
                imported_2("div", {
                  className: local_474661d1.inputGroup,
                  children: [
                    imported_2("label", {
                      className: local_474661d1.label,
                      children: "Новый пароль",
                    }),
                    imported_2("div", {
                      className: local_474661d1.inputWrapper,
                      children: [
                        imported_2("input", {
                          type: local_5 ? "text" : "password",
                          className: `${local_474661d1.input} ${local_11 ? local_474661d1.inputError : ""}`,
                          value: local,
                          onInput: (arg) => {
                            local_2(arg.target.value);
                            local_12(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: local_15,
                        }),
                        imported_2("button", {
                          type: "button",
                          className: local_474661d1.eyeButton,
                          onClick: () => local_6(!local_5),
                          children: local_5
                            ? imported_2(imported_10, {
                                size: 20,
                              })
                            : imported_2(imported_11, {
                                size: 20,
                              }),
                        }),
                      ],
                    }),
                    imported_2("span", {
                      className: local_474661d1.hint,
                      children:
                        "Минимум 10 символов, латиница, цифры и пунктуация",
                    }),
                    local_11 &&
                      imported_2("span", {
                        className: local_474661d1.fieldError,
                        children: local_11,
                      }),
                  ],
                }),
                imported_2("div", {
                  className: local_474661d1.inputGroup,
                  children: [
                    imported_2("label", {
                      className: local_474661d1.label,
                      children: "Подтверждение пароля",
                    }),
                    imported_2("div", {
                      className: local_474661d1.inputWrapper,
                      children: [
                        imported_2("input", {
                          type: local_7 ? "text" : "password",
                          className: `${local_474661d1.input} ${local_13 ? local_474661d1.inputError : ""}`,
                          value: local_3,
                          onInput: (arg) => {
                            local_4(arg.target.value);
                            local_14(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: local_15,
                        }),
                        imported_2("button", {
                          type: "button",
                          className: local_474661d1.eyeButton,
                          onClick: () => local_8(!local_7),
                          children: local_7
                            ? imported_2(imported_10, {
                                size: 20,
                              })
                            : imported_2(imported_11, {
                                size: 20,
                              }),
                        }),
                      ],
                    }),
                    local_13 &&
                      imported_2("span", {
                        className: local_474661d1.fieldError,
                        children: local_13,
                      }),
                  ],
                }),
              ],
            }),
            imported_2(imported_4, {
              type: "submit",
              variant: "primary",
              size: "lg",
              fullWidth: true,
              className: local_474661d1.submitButton,
              disabled: local_15,
              children: local_15 ? "Сохранение..." : "Сохранить пароль",
            }),
            imported_2("p", {
              className: local_474661d1.backLink,
              children: imported_2("a", {
                href: "/login",
                children: "Вернуться ко входу",
              }),
            }),
          ],
        }),
      ],
    }),
  });
};
export { local_a34523c6 as default };
