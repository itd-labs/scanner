import {
  symbol_075 as imported,
  symbol_056 as imported_2,
  symbol_069 as imported_3,
  symbol_057 as imported_4,
  symbol_076 as imported_5,
  symbol_037 as imported_6,
  symbol_073 as imported_7,
  symbol_014 as imported_8,
  symbol_003 as imported_9,
} from "../entry.js";
import { symbol_001 as imported_10 } from "./chunk-0684deeacdb3.js";
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
const local_23639ded = {
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
export function fn_6bb306ff({ email: arg, onBack: arg_2 }) {
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
        if (local_13(error)) {
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
    [local],
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
    className: local_23639ded.container,
    children: [
      imported_7("div", {
        className: local_23639ded.header,
        children: [
          imported_7("h1", {
            className: local_23639ded.title,
            children: "Подтверждение действия",
          }),
          imported_7("p", {
            className: local_23639ded.subtitle,
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
          className: local_23639ded.error,
          children: local_3,
        }),
      local_7 &&
        imported_7("div", {
          className: local_23639ded.success,
          children: "Код отправлен повторно",
        }),
      imported_7(imported_10, {
        onSubmit: local_14,
        onResend: local_15,
        disabled: local_5,
      }),
      arg_2 &&
        imported_7("button", {
          type: "button",
          className: local_23639ded.backButton,
          onClick: arg_2,
          children: "Назад",
        }),
      local_9 &&
        imported_7(imported_8, {
          onClose: local_17,
          showHeader: false,
          children: imported_7("div", {
            className: local_23639ded.expiredModal,
            children: [
              imported_7("h2", {
                className: local_23639ded.expiredTitle,
                children: "Время истекло",
              }),
              imported_7("p", {
                className: local_23639ded.expiredText,
                children:
                  "Прошло слишком много времени, и прошлый код больше не действителен. Отправить новый код?",
              }),
              imported_7("div", {
                className: local_23639ded.expiredActions,
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
