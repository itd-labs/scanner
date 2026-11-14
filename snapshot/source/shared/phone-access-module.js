import {
  symbol_045 as imported,
  aL as imported_2,
  aD as imported_3,
} from "../entry.js";
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
async function symbol_002(arg, arg_2, arg_3 = false) {
  const local = {
    method: arg_2 ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    ...(arg_2
      ? {
          body: JSON.stringify(arg_2),
        }
      : {}),
    signal: AbortSignal.timeout(20000),
  };
  const local_2 = await (arg_3 ? imported_2 : fetch)(
    `/api/v1/auth${arg}`,
    local,
  );
  const local_3 = await local_2.json();
  if (!local_2.ok) {
    const local = Math.max(
      Number(local_3.error?.retryIn) || 0,
      Number(local_3.error?.retryAfter) || 0,
      Number(local_2.headers.get("Retry-After")) || 0,
    );
    throw new imported(local_3.error?.code || "REQUEST_FAILED", local);
  }
  return local_3;
}
const symbol_001 = {
  start: async (arg, arg_2, arg_3) => {
    const local = await symbol_002("/phone/start", {
      phone: arg,
      captcha: arg_2,
      legal: arg_3,
    });
    if (typeof local.flowToken !== "string" || local.flowToken.length !== 32) {
      throw new Error("Invalid phone flow");
    }
    return {
      ...imported_3(local),
      flowToken: local.flowToken,
    };
  },
  verify: (arg, arg_2, arg_3) =>
    symbol_002("/verify-otp", {
      phone: arg,
      flowToken: arg_2,
      otp: arg_3,
    }),
  password: (arg, arg_2, arg_3) =>
    symbol_002("/phone/password", {
      phone: arg,
      flowToken: arg_2,
      password: arg_3,
    }),
  reset: (arg, arg_2, arg_3) =>
    symbol_002("/phone/reset-password", {
      phone: arg,
      flowToken: arg_2,
      newPassword: arg_3,
    }),
  resend: async (arg, arg_2) =>
    imported_3(
      await symbol_002("/resend-otp", {
        phone: arg,
        flowToken: arg_2,
      }),
    ),
};
export const local_023af00d = (arg) => {
  const local = arg instanceof imported ? arg.code : "";
  return (
    {
      INVALID_CREDENTIALS: "Неверный облачный пароль.",
      INVALID_OLD_PASSWORD: "Неверный текущий пароль.",
      INVALID_PASSWORD: "Нужно от 8 до 100 символов, латинская буква и цифра.",
      SAME_PASSWORD: "Новый пароль должен отличаться от текущего.",
      PASSWORD_ALREADY_SET: "У аккаунта уже есть пароль. Его можно сменить.",
      PASSWORD_NOT_SET: "У аккаунта ещё нет пароля. Создайте его.",
      SAME_EMAIL: "Эта почта уже привязана к вашему аккаунту.",
      EMAIL_TAKEN: "Эта почта уже используется другим аккаунтом.",
      INVALID_EMAIL: "Проверьте адрес электронной почты.",
      EMAIL_DOMAIN_NOT_ALLOWED: "Почта этого домена пока не поддерживается.",
      TOO_MANY_ATTEMPTS: "Слишком много попыток. Попробуйте позже.",
      PHONE_VERIFICATION_PENDING:
        "Код уже отправлен на этот номер. Попробуйте позже.",
      PHONE_BUDGET_EXHAUSTED:
        "Отправка кодов временно приостановлена. Попробуйте позже.",
      PHONE_BUDGET_UNAVAILABLE:
        "Отправка кодов временно приостановлена. Попробуйте позже.",
      RETRY_TOO_SOON: "Код уже отправлен. Подождите перед повторным запросом.",
      RESET_VIA_EMAIL: "Восстановите пароль через привязанную почту.",
      EMAIL_SIGNUP_DISABLED:
        "Регистрация по почте больше недоступна. Зарегистрируйтесь по номеру телефона.",
    }[local] || ""
  );
};
const local_724c774d = "c_card";
const local_bd56a6d0 = "c_brand";
const local_e9fcd358 = "c_symbol";
const local_5df6efc6 = "c_description";
const local_7ab56d01 = "c_form";
const local_1cefe1d0 = "c_number";
const local_33b3cec1 = "c_field";
const local_cd23a337 = "c_error";
const local_2c917740 = "c_link";
const local_f7881c4d = "c_back";
const local_57643cbe = "c_terms";
const local_396628bc = "c_rows";
const local_ab7982d5 = "c_row";
const local_6c1d1630 = "c_dialog";
const local_4745fc36 = "c_dialogContent";
const local_ca66b2a4 = "c_hint";
const local_a64731b5 = "c_captcha";
const local_000fcdf9 = "c_phase";
const local_1ceb1a82 = "c_verification";
const symbol_003 = {
  card: local_724c774d,
  brand: local_bd56a6d0,
  symbol: local_e9fcd358,
  description: local_5df6efc6,
  form: local_7ab56d01,
  number: local_1cefe1d0,
  field: local_33b3cec1,
  error: local_cd23a337,
  link: local_2c917740,
  back: local_f7881c4d,
  terms: local_57643cbe,
  rows: local_396628bc,
  row: local_ab7982d5,
  dialog: local_6c1d1630,
  dialogContent: local_4745fc36,
  hint: local_ca66b2a4,
  captcha: local_a64731b5,
  phase: local_000fcdf9,
  verification: local_1ceb1a82,
};
export { symbol_001, symbol_002, symbol_003 };
