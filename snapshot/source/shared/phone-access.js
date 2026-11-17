import {
  symbol_051 as imported,
  aM as imported_2,
  aW as imported_3,
  aP as imported_4,
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
export async function fn_a0c85d74(arg, arg_2, arg_3 = false, arg_4 = "direct") {
  const local = {
    method: arg_2 ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-ITD-Phone-Reverse": "1",
      "X-ITD-Flow-Expiry": "1",
      ...(arg_4 === "reverse"
        ? {
            "X-ITD-Phone-Method": "reverse",
          }
        : {}),
    },
    ...(arg_2
      ? {
          body: JSON.stringify(arg_2),
        }
      : {}),
    signal: AbortSignal.timeout(20000),
  };
  const local_2 = await (arg_3 ? imported_3 : fetch)(
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
    throw new imported(
      local_3.error?.code || "REQUEST_FAILED",
      local,
      imported_4(local_2),
    );
  }
  return local_3;
}
export const local_501940fb = {
  resume: async (arg, arg_2) => {
    const local = await fetch("/api/v1/auth/phone/resume", {
      method: "POST",
      credentials: "include",
      redirect: "error",
      headers: {
        "Content-Type": "application/json",
        "X-ITD-Phone-Resume": "1",
      },
      body: JSON.stringify({
        phone: arg,
        flowToken: arg_2,
      }),
      signal: AbortSignal.timeout(10000),
    });
    const local_2 = await local.json();
    if (!local.ok) {
      throw new imported(
        local_2.error?.code ||
          (local.status === 404 ? "RESUME_UNSUPPORTED" : "REQUEST_FAILED"),
      );
    }
    if (
      !Number.isInteger(local_2.expiresIn) ||
      local_2.expiresIn <= 0 ||
      local_2.expiresIn > 300
    ) {
      throw new Error("Invalid phone expiry");
    }
    return {
      ...imported_2(local_2),
      expiresIn: local_2.expiresIn,
    };
  },
  start: async (arg, arg_2, arg_3, arg_4 = "direct") => {
    const local = await fn_a0c85d74(
      "/phone/start",
      {
        phone: arg,
        captcha: arg_2,
        legal: arg_3,
      },
      false,
      arg_4,
    );
    if (typeof local.flowToken !== "string" || local.flowToken.length !== 32) {
      throw new Error("Invalid phone flow");
    }
    return {
      ...imported_2(local),
      flowToken: local.flowToken,
    };
  },
  verify: (arg, arg_2, arg_3) =>
    fn_a0c85d74("/verify-otp", {
      phone: arg,
      flowToken: arg_2,
      otp: arg_3,
    }),
  password: (arg, arg_2, arg_3) =>
    fn_a0c85d74("/phone/password", {
      phone: arg,
      flowToken: arg_2,
      password: arg_3,
    }),
  reset: (arg, arg_2, arg_3) =>
    fn_a0c85d74("/phone/reset-password", {
      phone: arg,
      flowToken: arg_2,
      newPassword: arg_3,
    }),
  resend: async (arg, arg_2) =>
    imported_2(
      await fn_a0c85d74("/resend-otp", {
        phone: arg,
        flowToken: arg_2,
      }),
    ),
};
export const local_39740d38 = (arg) => {
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
        "Проверка этого номера уже начата. Подождите перед новым запросом.",
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
