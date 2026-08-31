import {
  symbol_054 as imported,
  symbol_002 as imported_2,
  symbol_058 as imported_3,
  symbol_071 as imported_4,
  symbol_003 as imported_5,
  symbol_020 as imported_6,
  symbol_039 as imported_7,
  a7 as imported_8,
  symbol_067 as imported_9,
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
const local_df19a87e = {
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
const symbol_002 = ({
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
    className: local_df19a87e.form,
    onSubmit: local_11,
    children: [
      imported_4("div", {
        className: local_df19a87e.inputGroup,
        children: [
          imported_4("label", {
            className: local_df19a87e.label,
            children: arg,
          }),
          imported_4("div", {
            className: local_df19a87e.codeInputs,
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
                  className: `${local_df19a87e.codeInput} ${arg_2 ? local_df19a87e.error : ""}`,
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
              className: local_df19a87e.errorText,
              children: arg_2,
            }),
        ],
      }),
      imported_4(imported_5, {
        type: "submit",
        variant: "primary",
        size: "lg",
        fullWidth: true,
        className: local_df19a87e.submitButton,
        disabled: !local_13 || arg_9,
        children: arg_3,
      }),
      imported_4("p", {
        className: local_df19a87e.resendLink,
        children: local_5
          ? imported_4("button", {
              type: "button",
              className: local_df19a87e.resendButton,
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
const local_75905c2f = {
  provider: "cloudflare",
  field: "turnstileToken",
};
let local_0a9fda83 = null;
const local_f06debfc = 3000;
function fn_f9da4be0() {
  return (
    local_0a9fda83 ||
    ((local_0a9fda83 = (async () => {
      try {
        const local = await imported_7.get(imported_8.auth.captchaProvider, {
          timeout: local_f06debfc,
          skipErrorToast: true,
        });
        if (
          (local?.provider === "itd" && local.field === "token") ||
          (local?.provider === "cloudflare" && local.field === "turnstileToken")
        ) {
          return local;
        }
        return local_75905c2f;
      } catch {
        local_0a9fda83 = null;
        return local_75905c2f;
      }
    })()),
    local_0a9fda83)
  );
}
function symbol_003(arg, arg_2) {
  if (arg_2 === "token") {
    return {
      token: arg,
    };
  }
  return {
    turnstileToken: arg,
  };
}
const local_b4ad899c = "0x4AAAAAACHhxczw6fJGwPBg";
const local_89f415cc = "https://captcha.xn--d1ah4a.com";
const local_161ce873 = "sk_44d64cf7bf8bc8377f5b";
function fn_09bc3b65({ provider: arg = local_75905c2f.provider, ...arg_2 }) {
  if (arg === "itd") {
    return imported_4(fn_3443025e, {
      ...arg_2,
    });
  }
  return imported_4(fn_1ce4d392, {
    ...arg_2,
  });
}
function fn_1ce4d392({
  onVerify: arg,
  onExpire: arg_2,
  onError: arg_3,
  onReady: arg_4,
  theme: arg_5 = "auto",
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
        theme: arg_5,
        callback: (arg) => arg(arg, "turnstileToken"),
        "expired-callback": arg_2,
        "error-callback": arg_3,
      });
      arg_4?.();
    }
  }, [local_3, arg, arg_2, arg_3, arg_4, arg_5]);
  return imported_4("div", {
    style: {
      display: "flex",
      width: "300px",
      height: "65px",
    },
    ref: local,
  });
}
const local_16468f59 = {
  width: 300,
  height: 74,
};
function fn_3443025e({
  onVerify: arg,
  onExpire: arg_2,
  onError: arg_3,
  onReady: arg_4,
  theme: arg_5 = "auto",
  action: arg_6 = "",
}) {
  const local = imported_2(null);
  const [local_2, local_3] = imported(local_16468f59);
  const local_4 = imported_2({
    onVerify: arg,
    onExpire: arg_2,
    onError: arg_3,
    onReady: arg_4,
  });
  imported_3(() => {
    local_4.current = {
      onVerify: arg,
      onExpire: arg_2,
      onError: arg_3,
      onReady: arg_4,
    };
  });
  imported_3(() => {
    const local = (arg) => {
      if (
        arg.origin !== local_89f415cc ||
        (local.current && arg.source !== local.current.contentWindow)
      ) {
        return;
      }
      let local;
      try {
        local = typeof arg.data === "string" ? JSON.parse(arg.data) : arg.data;
      } catch {
        return;
      }
      if (local.type === "token" && local.token) {
        local_4.current.onVerify(local.token, "token");
      } else if (local.type === "expired") {
        local_4.current.onExpire?.();
      } else if (local.type === "error") {
        local_4.current.onError?.();
      } else if (local.type === "ready") {
        local_4.current.onReady?.();
      } else if (local.type === "size" && local.width && local.height) {
        local_3({
          width: local.width,
          height: local.height,
        });
      }
    };
    window.addEventListener("message", local);
    return () => window.removeEventListener("message", local);
  }, []);
  const local_5 =
    arg_5 !== "auto"
      ? arg_5
      : document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark";
  const local_6 = `${local_89f415cc}/widget.html?sitekey=${encodeURIComponent(local_161ce873)}&theme=${local_5}&action=${encodeURIComponent(arg_6)}`;
  return imported_4("iframe", {
    ref: local,
    src: local_6,
    title: "Проверка",
    width: local_2.width,
    height: local_2.height,
    style: {
      border: 0,
      colorScheme: "normal",
      display: "block",
    },
  });
}
function fn_3a58ea16(arg) {
  const [local, local_2] = imported(null);
  imported_3(() => {
    if (!arg || local) {
      return;
    }
    let local = true;
    fn_f9da4be0().then((arg) => {
      if (local) {
        local_2(arg);
      }
    });
    return () => {
      local = false;
    };
  }, [arg, local]);
  return local;
}
const local_672a1b2c = "c_overlay";
const local_bec7c8fb = "c_loader";
const local_5d17799a = "c_pending";
const local_84b00f5b = {
  overlay: local_672a1b2c,
  loader: local_bec7c8fb,
  pending: local_5d17799a,
};
const local_f06debfc_2 = 15000;
function symbol_001({
  isOpen: arg,
  onClose: arg_2,
  onVerify: arg_3,
  action: arg_4 = "",
}) {
  const [local, local_2] = imported(false);
  const local_3 = fn_3a58ea16(arg);
  imported_3(() => {
    if (!arg) {
      return;
    }
    const local = (arg) => {
      if (arg.key === "Escape") {
        arg_2();
      }
    };
    document.addEventListener("keydown", local);
    const local_2 = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const local_3 = setTimeout(() => local_2(true), local_f06debfc_2);
    return () => {
      document.removeEventListener("keydown", local);
      document.body.style.overflow = local_2;
      clearTimeout(local_3);
    };
  }, [arg, arg_2]);
  imported_3(() => {
    if (!arg) {
      local_2(false);
    }
  }, [arg]);
  const local_4 = imported_9(
    (arg, arg_2) => {
      arg_3(arg, arg_2);
      arg_2();
    },
    [arg_3, arg_2],
  );
  const local_5 = imported_9(() => local_2(true), []);
  if (arg) {
    return imported_4("div", {
      class: local_84b00f5b.overlay,
      onMouseDown: (arg) => {
        if (arg.target !== arg.currentTarget) {
          arg.stopPropagation();
        }
      },
      onClick: (arg) => {
        if (arg.target === arg.currentTarget) {
          arg_2();
        }
      },
      children: [
        (!local || !local_3) &&
          imported_4("div", {
            class: local_84b00f5b.loader,
            "aria-label": "Загрузка проверки",
          }),
        local_3 &&
          imported_4("div", {
            class: local ? undefined : local_84b00f5b.pending,
            children: imported_4(fn_09bc3b65, {
              provider: local_3.provider,
              onVerify: local_4,
              onReady: local_5,
              onError: local_5,
              action: arg_4,
            }),
          }),
      ],
    });
  }
  return null;
}
export { symbol_001, symbol_002, symbol_003 };
