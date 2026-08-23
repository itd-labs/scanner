import {
  symbol_056 as imported,
  symbol_002 as imported_2,
  symbol_077 as imported_3,
  symbol_073 as imported_4,
  symbol_003 as imported_5,
  symbol_063 as imported_6,
  symbol_014 as imported_7,
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
const local_7ab56d01 = "c_form";
const local_4dc32079 = "c_inputGroup";
const local_fe9ec23f = "c_label";
const local_9b3ec726 = "c_codeInputs";
const local_59474f97 = "c_codeInput";
const local_cd23a337 = "c_error";
const local_bcebeb33 = "c_errorText";
const local_7149ec44 = "c_submitButton";
const local_e76ac6e9 = "c_resendLink";
const local_22fad9fb = "c_resendButton";
const local_431fc652 = {
  form: local_7ab56d01,
  inputGroup: local_4dc32079,
  label: local_fe9ec23f,
  codeInputs: local_9b3ec726,
  codeInput: local_59474f97,
  error: local_cd23a337,
  errorText: local_bcebeb33,
  submitButton: local_7149ec44,
  resendLink: local_e76ac6e9,
  resendButton: local_22fad9fb,
};
const symbol_001 = ({
  label: arg = "Код с почты",
  error: arg_2,
  buttonText: arg_3 = "Продолжить",
  resendText: arg_4 = "Отправить код повторно",
  countdownText: arg_5 = (arg) => `Получить новый код через ${arg}с`,
  countdownDuration: arg_6 = 90,
  onSubmit: arg_7,
  onResend: arg_8,
  disabled: arg_9 = false,
}) => {
  const [local, local_2] = imported(["", "", "", "", "", ""]);
  const [local_3, local_4] = imported(arg_6);
  const [local_5, local_6] = imported(false);
  const local_7 = imported_2([]);
  imported_3(() => {
    local_7.current[0]?.focus();
  }, []);
  imported_3(() => {
    if (local_3 > 0) {
      const local = setTimeout(() => local_4(local_3 - 1), 1000);
      return () => clearTimeout(local);
    } else {
      local_6(true);
    }
  }, [local_3]);
  const local_8 = (arg, arg_2) => {
    if (!/^\d*$/.test(arg_2)) {
      return;
    }
    const local = [...local];
    local[arg] = arg_2.slice(-1);
    local_2(local);
    arg_2 && arg < 5 && local_7.current[arg + 1]?.focus();
  };
  const local_9 = (arg, arg_2) => {
    arg_2.key === "Backspace" &&
      !local[arg] &&
      arg > 0 &&
      local_7.current[arg - 1]?.focus();
  };
  const local_10 = (arg) => {
    arg.preventDefault();
    const local = (arg.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");
    const local_2 = [...local];
    local.forEach((arg, arg_2) => {
      if (arg_2 < 6) {
        local_2[arg_2] = arg;
      }
    });
    local_2(local_2);
    const local_3 = Math.min(local.length, 5);
    local_7.current[local_3]?.focus();
  };
  const local_11 = (arg) => {
    arg.preventDefault();
    const local = local.join("");
    arg_7?.(local);
  };
  const local_12 = () => {
    if (local_5) {
      arg_8?.();
      local_4(arg_6);
      local_6(false);
    }
  };
  const local_13 = local.every((arg) => arg !== "");
  return imported_4("form", {
    className: local_431fc652.form,
    onSubmit: local_11,
    children: [
      imported_4("div", {
        className: local_431fc652.inputGroup,
        children: [
          imported_4("label", {
            className: local_431fc652.label,
            children: arg,
          }),
          imported_4("div", {
            className: local_431fc652.codeInputs,
            children: local.map((arg, arg_2) =>
              imported_4(
                "input",
                {
                  ref: (arg) => {
                    local_7.current[arg_2] = arg;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${local_431fc652.codeInput} ${arg_2 ? local_431fc652.error : ""}`,
                  value: arg,
                  onInput: (arg) => local_8(arg_2, arg.target.value),
                  onKeyDown: (arg) => local_9(arg_2, arg),
                  onPaste: local_10,
                  maxLength: 1,
                  disabled: arg_9,
                },
                arg_2,
              ),
            ),
          }),
          arg_2 &&
            imported_4("p", {
              className: local_431fc652.errorText,
              children: arg_2,
            }),
        ],
      }),
      imported_4(imported_5, {
        type: "submit",
        variant: "primary",
        size: "lg",
        fullWidth: true,
        className: local_431fc652.submitButton,
        disabled: !local_13 || arg_9,
        children: arg_3,
      }),
      imported_4("p", {
        className: local_431fc652.resendLink,
        children: local_5
          ? imported_4("button", {
              type: "button",
              className: local_431fc652.resendButton,
              onClick: local_12,
              disabled: arg_9,
              children: arg_4,
            })
          : imported_4(imported_6, {
              children: arg_5(local_3),
            }),
      }),
    ],
  });
};
const local_b4ad899c = "0x4AAAAAACHhxczw6fJGwPBg";
function fn_855f38a4({
  onVerify: arg,
  onExpire: arg_2,
  onError: arg_3,
  theme: arg_4 = "auto",
}) {
  const local = imported_2(null);
  const local_2 = imported_2(null);
  const [local_3, local_4] = imported(false);
  imported_3(() => {
    window.onTurnstileLoad = () => {
      local_4(true);
    };
    if (document.getElementById("cf-turnstile-script")) {
      if (window.turnstile) {
        local_4(true);
      }
    } else {
      const local = document.createElement("script");
      local.id = "cf-turnstile-script";
      local.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
      local.async = true;
      local.defer = true;
      document.head.appendChild(local);
    }
    return () => {
      if (local_2.current && window.turnstile) {
        window.turnstile.remove(local_2.current);
        local_2.current = null;
      }
    };
  }, []);
  imported_3(() => {
    if (!local_3 || !local.current || local_2.current) {
      return;
    }
    const local = window.turnstile;
    if (local) {
      local_2.current = local.render(local.current, {
        sitekey: local_b4ad899c,
        theme: arg_4,
        callback: arg,
        "expired-callback": arg_2,
        "error-callback": arg_3,
      });
    }
  }, [local_3, arg, arg_2, arg_3, arg_4]);
  return imported_4("div", {
    style: {
      display: "flex",
      width: "300px",
      height: "65px",
    },
    ref: local,
  });
}
const local_49250f21 = "c_modal";
const local_e3cffaad = {
  modal: local_49250f21,
};
export function fn_30ee9c0c({ isOpen: arg, onClose: arg_2, onVerify: arg_3 }) {
  if (!arg) {
    return null;
  }
  const local = (arg) => {
    arg_3(arg);
    arg_2();
  };
  return imported_4(imported_7, {
    onClose: arg_2,
    showHeader: false,
    className: local_e3cffaad.modal,
    frameless: true,
    children: imported_4(fn_855f38a4, {
      onVerify: local,
      onError: () => {},
    }),
  });
}
export { symbol_001 };
