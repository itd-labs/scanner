import {
  symbol_076 as imported,
  symbol_002 as imported_2,
  symbol_089 as imported_3,
  symbol_080 as imported_4,
  symbol_029 as imported_5,
  symbol_087 as imported_6,
  symbol_090 as imported_7,
  symbol_093 as imported_8,
  symbol_010 as imported_9,
  symbol_003 as imported_10,
  symbol_020 as imported_11,
} from "../entry.js";
import { C as imported_12 } from "../shared/index-ggtxn-mrt-portal20261026.js";
import { symbol_001 as imported_13 } from "../shared/index-df-ak-iq-portal20261026.js";
import {
  I as imported_14,
  a as imported_15,
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
async function fn_c8f66bab() {
  const local = await fetch("/api/v1/auth/registration-context", {
    cache: "no-store",
    credentials: "include",
  });
  if (!local.ok) {
    throw Error("LEGAL_UNAVAILABLE");
  }
  const local_2 = await local.json();
  if (
    local_2.protocolVersion !== 1 ||
    typeof local_2.contextToken !== "string" ||
    local_2.expiresAt <= Date.now() ||
    !Array.isArray(local_2.bundle?.documents)
  ) {
    throw Error("LEGAL_UNAVAILABLE");
  }
  if (
    local_2.bundle.actionVersion !== "registration-v1" ||
    local_2.bundle.actionText !==
      "Нажимая «Зарегистрироваться», вы принимаете Пользовательское соглашение и подтверждаете, что ознакомились с Политикой конфиденциальности."
  ) {
    throw Error("LEGAL_ACTION_UNSUPPORTED");
  }
  for (const local of ["terms", "privacy"]) {
    const local = local_2.bundle.documents.find((arg) => arg.slug === local);
    if (
      !local ||
      !/^[\d.-]+$/.test(local.version) ||
      !/^[a-f0-9]{64}$/.test(local.contentSha256) ||
      local.url !== `/legal/${local}/versions/${local.version}`
    ) {
      throw Error("LEGAL_UNAVAILABLE");
    }
  }
  return local_2;
}
const local_12bca483 =
  "От 8 до 100 символов, хотя бы одна латинская буква и одна цифра.";
function fn_fa99ef8c(arg) {
  return (
    arg.length >= 8 &&
    arg.length <= 100 &&
    /[A-Za-z]/.test(arg) &&
    /\d/.test(arg)
  );
}
function fn_0a31d76f(arg) {
  if (arg.code === "INVALID_PASSWORD") {
    return true;
  }
  return (
    arg.code === "VALIDATION_ERROR" &&
    [
      "Password must be 8-100 chars with at least 1 letter and 1 number",
      "Password requirement not met",
      "Password is required",
    ].includes(arg.message)
  );
}
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
const local_9edfc4a1 = "c_passwordHint";
const local_43fe4b00 = "c_eyeButton";
const local_57643cbe = "c_terms";
const local_7149ec44 = "c_submitButton";
const local_8ed84883 = "c_loginLink";
const local_66259d24 = {
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
  passwordHint: local_9edfc4a1,
  eyeButton: local_43fe4b00,
  terms: local_57643cbe,
  submitButton: local_7149ec44,
  loginLink: local_8ed84883,
};
export const local_8a5692cc = (arg) => {
  const [local, local_2] = imported("");
  const [local_3, local_4] = imported("");
  const [local_5, local_6] = imported(false);
  const [local_7, local_8] = imported(false);
  const [local_9, local_10] = imported(null);
  const [local_11, local_12] = imported(null);
  const [local_13, local_14] = imported(null);
  const [local_15, local_16] = imported("credentials");
  const [local_17, local_18] = imported(null);
  const [local_19, local_20] = imported("");
  const local_21 = imported_2(null);
  const local_22 = imported_2(0);
  const local_23 = imported_3(async () => {
    const local = ++local_22.current;
    local_18(null);
    local_20("");
    try {
      const local = await fn_c8f66bab();
      if (local === local_22.current) {
        local_18(local);
      }
    } catch {
      if (local === local_22.current) {
        local_20("Не удалось загрузить документы. Попробуйте ещё раз");
      }
    }
  }, []);
  imported_4(() => {
    local_23();
    return () => {
      local_22.current++;
    };
  }, [local_23]);
  const {
    register: local_24,
    status: local_25,
    reset: local_26,
  } = imported_5();
  const local_27 = local_25 === "loading";
  const local_28 = (arg) => {
    arg.preventDefault();
    local_10(null);
    local_12(null);
    local_14(null);
    if (!local.trim()) {
      local_12("Введите email");
      return;
    }
    if (!fn_fa99ef8c(local_3)) {
      local_14(local_12bca483);
      local_10(local_12bca483);
      return;
    }
    if (!local_17 || local_17.expiresAt <= Date.now()) {
      local_10(
        "Документы обновлены. Проверьте ссылки и нажмите «Зарегистрироваться» ещё раз",
      );
      local_23();
      return;
    }
    local_21.current = local_17;
    local_8(true);
  };
  const local_29 = imported_3(
    async (arg) => {
      local_8(false);
      try {
        if (!local_21.current) {
          throw Error("LEGAL_CONTEXT_REQUIRED");
        }
        await local_24({
          email: local,
          password: local_3,
          turnstileToken: arg,
          legal: {
            protocolVersion: 1,
            contextToken: local_21.current.contextToken,
          },
        });
        local_16("verify");
      } catch (error) {
        if (
          error &&
          typeof error === "object" &&
          "code" in error &&
          String(error.code).startsWith("LEGAL_")
        ) {
          local_10(
            "Не удалось подтвердить документы. Проверьте их и повторите регистрацию",
          );
          local_21.current = null;
          local_23();
          return;
        }
        if (imported_6(error)) {
          if (fn_0a31d76f(error)) {
            local_14(local_12bca483);
            local_10(local_12bca483);
            return;
          }
          switch (error.code) {
            case imported_7.ENTITY_ALREADY_EXISTS:
              local_12("Этот email уже зарегистрирован");
              break;
            case imported_7.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED:
              local_12("Почта этого домена не поддерживается");
              break;
            case imported_7.CAPTCHA_FAILED:
              local_10("Проверка captcha не пройдена. Попробуйте снова");
              break;
            case imported_7.RATE_LIMIT_EXCEEDED:
              local_10("Слишком много попыток. Попробуйте позже");
              break;
            case imported_7.VALIDATION_ERROR:
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
    [local, local_3, local_24, local_23],
  );
  const local_30 = imported_3(() => {
    local_26();
    local_16("credentials");
  }, [local_26]);
  const local_31 = imported_3(
    (arg) => {
      local_26();
      local_21.current = null;
      local_16("credentials");
      local_10(
        arg === "LEGAL_RECEIPT_EXPIRED"
          ? "Время подтверждения документов истекло. Проверьте ссылки и нажмите «Зарегистрироваться» ещё раз"
          : "Не удалось подтвердить документы. Проверьте ссылки и повторите регистрацию",
      );
      local_23();
    },
    [local_26, local_23],
  );
  return imported_8(imported_11, {
    children: [
      imported_8("div", {
        className: local_66259d24.container,
        children: [
          imported_8("div", {
            className: local_66259d24.logo,
            children: imported_8(imported_9, {}),
          }),
          local_15 === "credentials"
            ? imported_8("form", {
                className: local_66259d24.form,
                onSubmit: local_28,
                children: [
                  imported_8("div", {
                    className: local_66259d24.header,
                    children: [
                      imported_8("h1", {
                        className: local_66259d24.title,
                        children: "Создание аккаунта",
                      }),
                      imported_8("p", {
                        className: local_66259d24.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  local_9 &&
                    imported_8("div", {
                      className: local_66259d24.error,
                      role: "alert",
                      children: local_9,
                    }),
                  imported_8("div", {
                    className: local_66259d24.inputs,
                    children: [
                      imported_8("div", {
                        className: local_66259d24.inputGroup,
                        children: [
                          imported_8("label", {
                            className: local_66259d24.label,
                            htmlFor: "register-email",
                            children: "E-Mail",
                          }),
                          imported_8("input", {
                            id: "register-email",
                            type: "email",
                            autoComplete: "email",
                            className: `${local_66259d24.input} ${local_11 ? local_66259d24.inputError : ""}`,
                            value: local,
                            onInput: (arg) => {
                              local_2(arg.target.value);
                              local_12(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: local_27,
                          }),
                          local_11 &&
                            imported_8("span", {
                              className: local_66259d24.fieldError,
                              children: local_11,
                            }),
                        ],
                      }),
                      imported_8("div", {
                        className: local_66259d24.inputGroup,
                        children: [
                          imported_8("label", {
                            className: local_66259d24.label,
                            htmlFor: "register-password",
                            children: "Пароль",
                          }),
                          imported_8("div", {
                            className: local_66259d24.inputWrapper,
                            children: [
                              imported_8("input", {
                                id: "register-password",
                                type: local_5 ? "text" : "password",
                                autoComplete: "new-password",
                                "aria-describedby": "register-password-hint",
                                "aria-invalid": !!local_13,
                                className: `${local_66259d24.input} ${local_13 ? local_66259d24.inputError : ""}`,
                                value: local_3,
                                onInput: (arg) => {
                                  local_4(arg.target.value);
                                  if (local_13) {
                                    local_10(null);
                                  }
                                  local_14(null);
                                },
                                placeholder: "Введите пароль",
                                disabled: local_27,
                              }),
                              imported_8("button", {
                                type: "button",
                                "aria-label": local_5
                                  ? "Скрыть пароль"
                                  : "Показать пароль",
                                className: local_66259d24.eyeButton,
                                onClick: () => local_6(!local_5),
                                children: local_5
                                  ? imported_8(imported_14, {
                                      size: 20,
                                    })
                                  : imported_8(imported_15, {
                                      size: 20,
                                    }),
                              }),
                            ],
                          }),
                          imported_8("p", {
                            id: "register-password-hint",
                            className: local_66259d24.passwordHint,
                            children: local_12bca483,
                          }),
                        ],
                      }),
                    ],
                  }),
                  imported_8("p", {
                    className: local_66259d24.terms,
                    children: [
                      "Нажимая «Зарегистрироваться», вы принимаете",
                      "./register.js",
                      imported_8("a", {
                        href:
                          local_17?.bundle.documents.find(
                            (arg) => arg.slug === "terms",
                          )?.url ?? "/terms",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Пользовательское соглашение",
                      }),
                      "./register.js",
                      "и подтверждаете, что ознакомились с",
                      "./register.js",
                      imported_8("a", {
                        href:
                          local_17?.bundle.documents.find(
                            (arg) => arg.slug === "privacy",
                          )?.url ?? "/privacy",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Политикой конфиденциальности",
                      }),
                      ".",
                    ],
                  }),
                  local_19 &&
                    imported_8("p", {
                      role: "alert",
                      className: local_66259d24.fieldError,
                      children: [
                        local_19,
                        "./register.js",
                        imported_8("button", {
                          type: "button",
                          onClick: () => {
                            local_23();
                          },
                          children: "Повторить",
                        }),
                      ],
                    }),
                  imported_8(imported_10, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: local_66259d24.submitButton,
                    disabled: local_27 || !local_17,
                    children: local_27
                      ? "Регистрация..."
                      : !local_17 && !local_19
                        ? "Загрузка документов..."
                        : "Зарегистрироваться",
                  }),
                  imported_8("p", {
                    className: local_66259d24.loginLink,
                    children: [
                      "Уже есть аккаунт? ",
                      imported_8("a", {
                        href: "/login",
                        children: "Войти",
                      }),
                    ],
                  }),
                ],
              })
            : imported_8(imported_13, {
                email: local,
                onBack: local_30,
                onLegalError: local_31,
              }),
        ],
      }),
      imported_8(imported_12, {
        isOpen: local_7,
        onClose: () => local_8(false),
        onVerify: local_29,
      }),
    ],
  });
};
export { local_8a5692cc as default };
