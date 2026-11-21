import {
  symbol_012 as imported,
  symbol_222 as imported_2,
  symbol_284 as imported_3,
  symbol_001 as imported_4,
  symbol_080 as imported_5,
  symbol_081 as imported_6,
  symbol_288 as imported_7,
  symbol_083 as imported_8,
  symbol_003 as imported_9,
  symbol_010 as imported_10,
  symbol_274 as imported_11,
  symbol_020 as imported_12,
} from "../entry.js";
import { symbol_001 as imported_13 } from "../shared/chunk-bedc56a34092.js";
import { C as imported_14 } from "../shared/chunk-d0f3b8fb991b.js";
import { O as imported_15 } from "../shared/index-ggtxn-mrt-portal20261026.js";
import {
  I as imported_16,
  a as imported_17,
} from "../components/icon-eye-off.js";
const local_adb43aea = "c_container";
const local_f1c23efb = "c_header";
const local_9d9cf508 = "c_title";
const local_8c84ac4c = "c_subtitle";
const local_cd23a337 = "c_error";
const local_988f55fc = "c_success";
const local_85b1b822 = "c_backButton";
const local_b3567ea0 = "c_expiredModal";
const local_1482e028 = "c_expiredTitle";
const local_2dca8ec3 = "c_expiredText";
const local_6fcad58f = "c_expiredActions";
const local_3f60fd0d = {
  container: local_adb43aea,
  header: local_f1c23efb,
  title: local_9d9cf508,
  subtitle: local_8c84ac4c,
  error: local_cd23a337,
  success: local_988f55fc,
  backButton: local_85b1b822,
  expiredModal: local_b3567ea0,
  expiredTitle: local_1482e028,
  expiredText: local_2dca8ec3,
  expiredActions: local_6fcad58f,
};
function fn_fbf50e6d({ email: arg, onBack: arg_2, onLegalError: arg_3 }) {
  const { verifyOtp: local, resendOtp: local_2 } = imported();
  const [local_3, local_4] = imported_2(null);
  const [local_5, local_6] = imported_2(false);
  const [local_7, local_8] = imported_2(false);
  const [local_9, local_10] = imported_2(false);
  const [local_11, local_12] = imported_2(false);
  const local_13 = (arg) => {
    if (imported_5(arg)) {
      return (
        arg.code === imported_6.MISSING_FLOW_TOKEN ||
        arg.code === imported_6.UNAUTHORIZED ||
        (arg.code === imported_6.BAD_REQUEST &&
          arg.message?.toLowerCase().includes("flow token"))
      );
    }
    return false;
  };
  const local_14 = imported_3(
    async (arg) => {
      local_4(null);
      local_6(true);
      try {
        const local = await local(arg);
        local === "authenticated"
          ? imported.getState().status === "needs_profile"
            ? imported_4("/onboarding")
            : imported_4("../site/index.html")
          : local === "password_reset" && imported_4("/reset-password");
      } catch (error) {
        if (imported_5(error) && error.code.startsWith("LEGAL_") && arg_3) {
          arg_3(error.code);
        } else if (local_13(error)) {
          local_10(true);
        } else if (imported_5(error)) {
          switch (error.code) {
            case imported_6.OTP_INVALID:
              local_4("Неверный код. Попробуйте снова");
              break;
            case imported_6.RATE_LIMIT_EXCEEDED:
              local_4("Слишком много попыток. Попробуйте позже");
              break;
            default:
              local_4(error.message || "Ошибка проверки кода");
          }
        } else {
          local_4("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        local_6(false);
      }
    },
    [local, arg_3],
  );
  const local_15 = imported_3(async () => {
    local_4(null);
    local_8(false);
    try {
      await local_2();
      local_8(true);
      setTimeout(() => local_8(false), 3000);
    } catch (error) {
      if (imported_5(error)) {
        if (error.code === imported_6.RATE_LIMIT_EXCEEDED) {
          local_4("Слишком много запросов. Попробуйте позже");
        } else {
          local_4(error.message || "Не удалось отправить код");
        }
      } else {
        local_4("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [local_2]);
  const local_16 = imported_3(async () => {
    local_12(true);
    try {
      await local_2();
      local_10(false);
      local_8(true);
      setTimeout(() => local_8(false), 3000);
    } catch (error) {
      local_10(false);
      if (imported_5(error)) {
        local_4(error.message || "Не удалось отправить код");
      } else {
        local_4("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      local_12(false);
    }
  }, [local_2]);
  const local_17 = imported_3(() => {
    local_10(false);
    arg_2?.();
  }, [arg_2]);
  return imported_7("div", {
    className: local_3f60fd0d.container,
    children: [
      imported_7("div", {
        className: local_3f60fd0d.header,
        children: [
          imported_7("h1", {
            className: local_3f60fd0d.title,
            children: "Подтверждение действия",
          }),
          imported_7("p", {
            className: local_3f60fd0d.subtitle,
            children: [
              "Мы отправили шестизначный код на почту ",
              arg,
              ", чтобы убедиться, что вы – настоящий её владелец.",
            ],
          }),
        ],
      }),
      local_3 &&
        imported_7("div", {
          className: local_3f60fd0d.error,
          children: local_3,
        }),
      local_7 &&
        imported_7("div", {
          className: local_3f60fd0d.success,
          children: "Код отправлен повторно",
        }),
      imported_7(imported_15, {
        onSubmit: local_14,
        onResend: local_15,
        disabled: local_5,
      }),
      arg_2 &&
        imported_7("button", {
          type: "button",
          className: local_3f60fd0d.backButton,
          onClick: arg_2,
          children: "Назад",
        }),
      local_9 &&
        imported_7(imported_8, {
          onClose: local_17,
          showHeader: false,
          children: imported_7("div", {
            className: local_3f60fd0d.expiredModal,
            children: [
              imported_7("h2", {
                className: local_3f60fd0d.expiredTitle,
                children: "Время истекло",
              }),
              imported_7("p", {
                className: local_3f60fd0d.expiredText,
                children:
                  "Прошло слишком много времени, и прошлый код больше не действителен. Отправить новый код?",
              }),
              imported_7("div", {
                className: local_3f60fd0d.expiredActions,
                children: [
                  imported_7(imported_9, {
                    variant: "secondary",
                    onClick: local_17,
                    disabled: local_11,
                    children: "Нет, закрыть",
                  }),
                  imported_7(imported_9, {
                    onClick: local_16,
                    disabled: local_11,
                    children: "Да, отправить",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
const local_adb43aea_2 = "c_container";
const local_3f8170c1 = "c_logo";
const local_7ab56d01 = "c_form";
const local_f1c23efb_2 = "c_header";
const local_cd23a337_2 = "c_error";
const local_9d9cf508_2 = "c_title";
const local_8c84ac4c_2 = "c_subtitle";
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
const local_0aedf771 = {
  container: local_adb43aea_2,
  logo: local_3f8170c1,
  form: local_7ab56d01,
  header: local_f1c23efb_2,
  error: local_cd23a337_2,
  title: local_9d9cf508_2,
  subtitle: local_8c84ac4c_2,
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
export const local_71eec970 = (arg) => {
  const [local, local_2] = imported_2(false);
  const [local_3, local_4] = imported_2("");
  const [local_5, local_6] = imported_2("");
  const [local_7, local_8] = imported_2(false);
  const [local_9, local_10] = imported_2(false);
  const [local_11, local_12] = imported_2(null);
  const [local_13, local_14] = imported_2(null);
  const [local_15, local_16] = imported_2("credentials");
  const { login: local_17, status: local_18, reset: local_19 } = imported();
  const local_20 = local_18 === "loading";
  const local_21 = (arg) => {
    arg.preventDefault();
    local_12(null);
    local_14(null);
    if (!local_3.trim()) {
      local_12("Введите email");
      return;
    }
    if (!local_5.trim()) {
      local_12("Введите пароль");
      return;
    }
    local_10(true);
  };
  const local_22 = imported_3(
    async (arg) => {
      local_10(false);
      try {
        if (
          (await local_17({
            email: local_3,
            password: local_5,
            captcha: arg,
          })) !== "authenticated"
        ) {
          local_16("verify");
        }
      } catch (error) {
        if (imported_5(error)) {
          switch (error.code) {
            case imported_6.ACCOUNT_INVALID_CREDENTIALS:
              local_12("Неверный email или пароль");
              break;
            case imported_6.ACCOUNT_DEACTIVATED:
              local_12("Аккаунт деактивирован");
              break;
            case imported_6.ACCOUNT_TEMPORARILY_LOCKED:
              local_12("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            case imported_6.CAPTCHA_FAILED:
              local_12("Проверка captcha не пройдена. Попробуйте снова");
              break;
            case imported_6.RATE_LIMIT_EXCEEDED:
              local_12("Слишком много попыток. Попробуйте позже");
              break;
            case imported_6.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED:
              local_14("Почта этого домена не поддерживается");
              break;
            default:
              local_12(error.message || "Ошибка входа");
          }
        } else {
          local_12("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [local_3, local_5, local_17],
  );
  const local_23 = imported_3(() => {
    local_19();
    local_16("credentials");
  }, [local_19]);
  if (local) {
    return imported_7(imported_13, {
      intent: "sign-in",
      onBack: () => local_2(false),
    });
  }
  return imported_7(imported_12, {
    children: [
      imported_7("div", {
        className: local_0aedf771.container,
        children: [
          imported_7("div", {
            className: local_0aedf771.logo,
            children: imported_7(imported_10, {}),
          }),
          local_15 === "credentials"
            ? imported_7("form", {
                className: local_0aedf771.form,
                onSubmit: local_21,
                children: [
                  imported_7("div", {
                    className: local_0aedf771.header,
                    children: [
                      imported_7("h1", {
                        className: local_0aedf771.title,
                        children: "Вход",
                      }),
                      imported_7("p", {
                        className: local_0aedf771.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  local_11 &&
                    imported_7("div", {
                      className: local_0aedf771.error,
                      children: local_11,
                    }),
                  imported_7("div", {
                    className: local_0aedf771.inputs,
                    children: [
                      imported_7("div", {
                        className: local_0aedf771.inputGroup,
                        children: [
                          imported_7("label", {
                            className: local_0aedf771.label,
                            children: "E-Mail",
                          }),
                          imported_7("input", {
                            type: "email",
                            className: `${local_0aedf771.input} ${local_13 ? local_0aedf771.inputError : ""}`,
                            value: local_3,
                            onInput: (arg) => {
                              local_4(arg.target.value);
                              local_14(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: local_20,
                          }),
                          local_13 &&
                            imported_7("span", {
                              className: local_0aedf771.fieldError,
                              children: local_13,
                            }),
                        ],
                      }),
                      imported_7("div", {
                        className: local_0aedf771.inputGroup,
                        children: [
                          imported_7("label", {
                            className: local_0aedf771.label,
                            children: "Пароль",
                          }),
                          imported_7("div", {
                            className: local_0aedf771.inputWrapper,
                            children: [
                              imported_7("input", {
                                type: local_7 ? "text" : "password",
                                className: local_0aedf771.input,
                                value: local_5,
                                onInput: (arg) => local_6(arg.target.value),
                                placeholder: "••••••••••••",
                                disabled: local_20,
                              }),
                              imported_7("button", {
                                type: "button",
                                className: local_0aedf771.eyeButton,
                                onClick: () => local_8(!local_7),
                                children: local_7
                                  ? imported_7(imported_16, {
                                      size: 20,
                                    })
                                  : imported_7(imported_17, {
                                      size: 20,
                                    }),
                              }),
                            ],
                          }),
                          imported_7("a", {
                            href: "/forgot-password",
                            className: local_0aedf771.forgotPassword,
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
                    className: local_0aedf771.submitButton,
                    disabled: local_20,
                    children: local_20 ? "Вход..." : "Войти",
                  }),
                  imported_7(imported_9, {
                    variant: "secondary",
                    fullWidth: true,
                    size: "lg",
                    style: {
                      marginTop: 12,
                    },
                    onClick: () => local_2(true),
                    disabled: local_20,
                    children: "Войти по номеру телефона",
                  }),
                  imported_7("p", {
                    className: local_0aedf771.signupLink,
                    children: [
                      "Еще нет аккаунта? ",
                      imported_7("a", {
                        href: "/register",
                        children: "Создать аккаунт",
                      }),
                    ],
                  }),
                  imported_7(imported_11, {}),
                ],
              })
            : imported_7(fn_fbf50e6d, {
                email: local_3,
                onBack: local_23,
              }),
        ],
      }),
      imported_7(imported_14, {
        isOpen: local_9,
        onClose: () => local_10(false),
        onVerify: local_22,
      }),
    ],
  });
};
export { local_71eec970 as default };
