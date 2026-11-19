import {
  symbol_289 as imported,
  symbol_097 as imported_2,
  symbol_166 as imported_3,
  symbol_167 as imported_4,
  symbol_103 as imported_5,
  symbol_022 as imported_6,
  symbol_023 as imported_7,
  symbol_223 as imported_8,
  symbol_003 as imported_9,
  symbol_275 as imported_10,
  symbol_084 as imported_11,
  symbol_080 as imported_12,
  symbol_012 as imported_13,
  symbol_081 as imported_14,
  symbol_082 as imported_15,
  symbol_168 as imported_16,
  symbol_137 as imported_17,
  symbol_169 as imported_18,
  symbol_053 as imported_19,
  symbol_148 as imported_20,
  symbol_197 as imported_21,
  symbol_002 as imported_22,
  symbol_276 as imported_23,
  symbol_090 as imported_24,
  symbol_285 as imported_25,
  symbol_198 as imported_26,
  symbol_075 as imported_27,
  symbol_020 as imported_28,
  symbol_199 as imported_29,
  symbol_001 as imported_30,
  symbol_140 as subscriptionApi,
  symbol_061 as imported_31,
  symbol_046 as imported_32,
  symbol_200 as imported_33,
  symbol_006 as imported_34,
  symbol_007 as imported_35,
  symbol_201 as imported_36,
  symbol_098 as imported_37,
  symbol_291 as imported_38,
  symbol_202 as imported_39,
  symbol_287 as imported_40,
  symbol_279 as imported_41,
  symbol_029 as imported_42,
  symbol_094 as imported_43,
  symbol_158 as imported_44,
  symbol_290 as imported_45,
  symbol_017 as imported_46,
  symbol_083 as imported_47,
  symbol_203 as imported_48,
  symbol_278 as imported_49,
  symbol_280 as imported_50,
  symbol_293 as imported_51,
  symbol_294 as imported_52,
  symbol_008 as imported_53,
  symbol_204 as imported_54,
  symbol_128 as imported_55,
  symbol_049 as imported_56,
  symbol_104 as imported_57,
  symbol_066 as imported_58,
  symbol_205 as imported_59,
  symbol_096 as imported_60,
  symbol_073 as imported_61,
  symbol_085 as imported_62,
  symbol_118 as imported_63,
  symbol_099 as imported_64,
  symbol_032 as imported_65,
  symbol_129 as imported_66,
  symbol_206 as imported_67,
  symbol_130 as imported_68,
  symbol_068 as useSettingsStore,
} from "../entry.js";
import { G as GiftSubscriptionModal } from "../shared/chunk-7229b2be5161.js";
import { M as imported_69 } from "../shared/mobile-subscription-warning.js";
import { ConfirmModal as imported_70 } from "../shared/chunk-842b5763c39c.js";
import {
  symbol_002 as SubscriptionModal,
  symbol_001 as imported_71,
} from "../shared/chunk-1666d5f9c5d4.js";
import { I as imported_72 } from "../components/icon-chevron-down.js";
import { I as imported_73 } from "../components/icon-chevron-right.js";
import { I as imported_74 } from "../components/icon-chevron-left.js";
import "../shared/use-purchase-dialog.js";
import "../components/icon-info.js";
const local_a008ba72 = ({ size: arg = 18 }) =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      imported("path", {
        fill: "currentColor",
        d: "M7.17 14.288c.03.12.064.238.102.354.213.661.543 1.251.926 1.772a3.964 3.964 0 0 1-2.036-1.164.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328c.16.014.32.025.477.036ZM9.002 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .277-.008.517-.015.74-.006.202-.011.384-.01.56-.253.05-.49.126-.706.213a3.832 3.832 0 0 0-.803-.23v.001a5.083 5.083 0 0 0-2.274.149l-.009.003-.01.003c-2.594.808-3.54 3.168-3.364 5.22-1.696-.11-3.138-.427-3.744-1.285-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Z",
      }),
      imported("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M17.758 11.709a2.743 2.743 0 0 0-1.751-1.575 3.024 3.024 0 0 0-1.38-.095c-.423.069-.806.313-1.128.54-.311-.218-.704-.466-1.129-.535a3.083 3.083 0 0 0-1.378.09c-1.768.55-2.312 2.412-1.818 3.893.77 2.377 4.084 3.888 4.225 3.952a.247.247 0 0 0 .2 0c.139-.063 3.404-1.548 4.22-3.95.261-.783.239-1.607-.061-2.32Z",
        clipRule: "evenodd",
      }),
    ],
  });
const local_8b78497b = ({ size: arg = 18 }) =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      imported("path", {
        fill: "currentColor",
        d: "M6.694 14.252c.453.038.891.066 1.317.084.034.63.168 1.26.406 1.864-.021.07-.043.153-.065.243a3.946 3.946 0 0 1-2.19-1.193.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328ZM9.001 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .277-.008.517-.015.74-.005.17-.01.327-.01.477a5.988 5.988 0 0 0-4.44 1.75l-.001.002a6.01 6.01 0 0 0-1.734 3.733c-2.108-.05-4.014-.307-4.735-1.328-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm1.963 9.894a3.977 3.977 0 0 0-.004.004l.004-.004Z",
      }),
      imported("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.83 11.17a4.008 4.008 0 0 0-5.659 0 4.017 4.017 0 0 0-.805 4.506c.077.192.132.337.132.456 0 .141-.06.316-.117.486-.111.327-.238.698.034.969.27.271.642.143.97.031.167-.057.34-.117.48-.117.122 0 .277.062.455.134a4.019 4.019 0 0 0 4.51-.807 4.007 4.007 0 0 0 0-5.659Z",
        clipRule: "evenodd",
      }),
    ],
  });
const local_eb61682a = ({ size: arg = 18 }) =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      imported("path", {
        fill: "currentColor",
        d: "M6.694 14.252c.479.04.941.069 1.389.087a4.72 4.72 0 0 0 .067 2.063 3.968 3.968 0 0 1-1.988-1.152.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328ZM9.001 1.5c3.269 0 4.905 2.546 5.18 4.657-1.042.362-1.842 1.336-1.842 2.559v1.764c-1.79.208-3.352 1.368-4.009 3.012-2.228-.033-4.286-.261-5.042-1.332-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm3.919 10.944a2.894 2.894 0 0 1 .191.007l-.191-.007Z",
      }),
      imported("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.835 15.172c0-.01.006-.018.006-.028v-4.477a3.56 3.56 0 0 0 1.259.5c.404.077.801-.17.885-.556.083-.387-.18-.764-.586-.842-1.136-.22-1.591-1.27-1.608-1.31a.756.756 0 0 0-.838-.446.725.725 0 0 0-.614.703v4.094a2.99 2.99 0 0 0-1.42-.365c-1.61 0-2.919 1.246-2.919 2.778C10 16.754 11.31 18 12.92 18c1.61 0 2.92-1.245 2.92-2.777 0-.018-.005-.033-.005-.051Z",
        clipRule: "evenodd",
      }),
    ],
  });
const local_c1f17bb2 = ({ size: arg = 18 }) =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      imported("path", {
        fill: "currentColor",
        d: "M6.694 14.252C7.151 14.291 7.593 14.318 8.021 14.336 8.121 15.23 8.613 16.004 9.322 16.484 9.215 16.494 9.106 16.5 8.997 16.5H8.995C7.933 16.5 6.927 16.055 6.162 15.25 6.077 15.163 6.023 15.051 6.006 14.931 5.989 14.81 6.011 14.687 6.068 14.58 6.186 14.36 6.439 14.233 6.694 14.252ZM9.001 1.5C12.603 1.5 14.223 4.592 14.223 6.786 14.223 7.063 14.216 7.303 14.208 7.525 14.203 7.697 14.199 7.855 14.198 8.007 14.133 8.003 14.067 8 14 8 12.343 8 11 9.343 11 11 9.517 11 8.287 12.076 8.045 13.489 5.928 13.44 4.012 13.185 3.288 12.16 2.942 11.671 2.908 11.069 3.187 10.373 3.838 8.981 3.822 8.464 3.792 7.525 3.784 7.303 3.777 7.062 3.777 6.786 3.777 4.592 5.398 1.5 9.001 1.5ZM13 11C13 10.448 13.448 10 14 10 14.552 10 15 10.448 15 11V17C15 17.552 14.552 18 14 18 13.448 18 13 17.552 13 17V11Z",
      }),
      imported("path", {
        fill: "currentColor",
        d: "M11 15C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H11Z",
      }),
    ],
  });
const local_0ead779e = ({ size: arg = 24 }) =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      imported("rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "5",
        rx: "2",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      imported("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M2 10h20",
      }),
    ],
  });
const local_fb3663a3 = ({ size: arg = 24 }) =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 24 24",
    children: imported("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.723 10.043a.918.918 0 0 0-.658-.261c-1.069 0-1.939.832-1.939 1.853 0 .015 0 .049-.004.06l-.008 1.876c0 .22-.18.392-.41.392a.397.397 0 0 1-.41-.392V5.948c0-.366-.153-.722-.42-.98-.548-.52-1.48-.523-2.045.003-.27.27-.42.618-.42.977v5.034a.401.401 0 0 1-.409.391c-.219 0-.41-.182-.41-.391v-6.61a1.342 1.342 0 0 0-.422-.968 1.408 1.408 0 0 0-.471-.3 1.513 1.513 0 0 0-1.098-.001 1.426 1.426 0 0 0-.783.747c-.072.156-.11.342-.11.522v6.61a.401.401 0 0 1-.41.391c-.219 0-.41-.182-.41-.391V7.126c0-.736-.671-1.382-1.438-1.382C5.677 5.744 5 6.385 5 7.116v7.276c.023 1.768.759 3.426 2.074 4.67A7.162 7.162 0 0 0 12 21a7.16 7.16 0 0 0 4.926-1.937c1.315-1.245 2.052-2.907 2.074-4.684v-3.704c0-.241-.097-.461-.277-.632Z",
      clipRule: "evenodd",
    }),
  });
const local_840b6115 = ({ size: arg = 24 }) =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    children: imported("path", {
      fill: "currentColor",
      d: "M16.5 3q5.4.1 5.5 5.4h-4.2c-2 0-3.6 1.6-3.6 3.5s1.6 3.4 3.6 3.4H22v.4q-.1 5.1-5.5 5.3h-9Q2 20.8 2 15.7V8.3Q2.1 3.2 7.5 3zm4.8 6.9q.6 0 .7.7v2.5q0 .7-.7.8h-3.5q-1.6-.1-2-1.6a2 2 0 0 1 .4-1.7 2 2 0 0 1 1.6-.7zm-3 1.1h-.4q-.3 0-.5.3-.2.1-.2.5 0 .6.7.7h.3q.8 0 .8-.7t-.8-.8m-6-4.1H6.8q-.6 0-.7.7t.7.8h5.7q.6-.1.7-.8t-.7-.7",
    }),
  });
const local_8b255c95 = ({ size: arg = 24 }) =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 24 24",
    children: imported("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.532 5.497C17.905 4.83 12.91 3 12 3c-.91 0-5.906 1.83-6.532 2.498-.497.533-.491.944-.452 3.218.016.923.037 2.18.037 3.919 0 6.07 6.75 8.322 6.818 8.345a.424.424 0 0 0 .258 0c.068-.023 6.818-2.276 6.818-8.345 0-1.735.021-2.99.037-3.912.038-2.28.046-2.691-.453-3.226Z",
      clipRule: "evenodd",
    }),
  });
const local_2db7ffcd = ({ size: arg = 24 }) =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      imported("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M21 12V7H5a2 2 0 0 1 0-4h14v4",
      }),
      imported("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M3 5v14a2 2 0 0 0 2 2h16v-5",
      }),
      imported("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M18 12a2 2 0 0 0 0 4h4v-4h-4Z",
      }),
    ],
  });
const local_4942f276 = () => {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
};
const local_cbde8c94 = () => {
  if (typeof window !== "undefined") {
    const local = imported_5.getItem("theme-storage");
    if (local) {
      try {
        const local = JSON.parse(local).state?.theme;
        if (local === "light" || local === "dark") {
          return local;
        }
        return "system";
      } catch {
        return "system";
      }
    }
  }
  return "system";
};
const local_655b2db1 = (arg) => {
  const local = arg === "system" ? local_4942f276() : arg;
  document.documentElement.setAttribute("data-theme", local);
};
const local_703810da = imported_2()(
  imported_3(
    (arg) => ({
      theme: local_cbde8c94(),
      setTheme: (arg) => {
        local_655b2db1(arg);
        arg({
          theme: arg,
        });
      },
      toggleTheme: () =>
        arg((arg) => {
          const local = arg.theme === "light" ? "dark" : "light";
          local_655b2db1(local);
          return {
            theme: local,
          };
        }),
    }),
    {
      name: "theme-storage",
      storage: imported_4(() => imported_5),
      onRehydrateStorage: () => (arg) => {
        if (arg?.theme) {
          local_655b2db1(arg.theme);
        }
      },
    },
  ),
);
if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (local_703810da.getState().theme === "system") {
        local_655b2db1("system");
      }
    });
}
const local_4e84fc10 = "c_toggle";
const local_6ab69625 = "c_active";
const local_339f5c81 = {
  toggle: local_4e84fc10,
  active: local_6ab69625,
};
function fn_0acfc694({ checked: arg, onChange: arg_2, disabled: arg_3 }) {
  const local = (arg) => {
    arg.stopPropagation();
    if (!arg_3) {
      arg_2(!arg);
    }
  };
  return imported("button", {
    type: "button",
    className: `${local_339f5c81.toggle} ${arg ? local_339f5c81.active : ""}`,
    onClick: local,
    disabled: arg_3,
    role: "switch",
    "aria-checked": arg,
  });
}
const local_96437191 = {
  async list() {
    return (await imported_6.get(imported_7.sessions.list))?.sessions ?? [];
  },
  async revoke(arg, arg_2) {
    await imported_6.delete(imported_7.sessions.revoke(arg));
    return {
      loggedOut: arg_2,
    };
  },
  async revokeOthers() {
    return (
      (await imported_6.delete(imported_7.sessions.revokeOthers))
        ?.revokedCount ?? 0
    );
  },
};
const local_f53702d6 = "c_inputWrapper";
const local_fe9ec23f = "c_label";
const local_ca66b2a4 = "c_hint";
const local_301b9a53 = "c_input";
const local_cd23a337 = "c_error";
const local_ab76902d = "c_small";
const local_181a1b43 = "c_medium";
const local_2a0a69f3 = "c_large";
const local_29e5fdcf = "c_outline";
const local_bcebeb33 = "c_errorText";
const local_3cccfc6a = {
  inputWrapper: local_f53702d6,
  label: local_fe9ec23f,
  hint: local_ca66b2a4,
  input: local_301b9a53,
  error: local_cd23a337,
  small: local_ab76902d,
  medium: local_181a1b43,
  large: local_2a0a69f3,
  default: "c_default",
  outline: local_29e5fdcf,
  errorText: local_bcebeb33,
};
function fn_c0682123({
  value: arg,
  onChange: arg_2,
  label: arg_3,
  hint: arg_4,
  error: arg_5,
  size: arg_6 = "medium",
  variant: arg_7 = "default",
  className: arg_8,
  ...arg_9
}) {
  const local = (arg) => {
    arg_2?.(arg.currentTarget.value);
  };
  return imported("div", {
    className: local_3cccfc6a.inputWrapper,
    children: [
      arg_3 &&
        imported("label", {
          className: local_3cccfc6a.label,
          children: [
            arg_3,
            arg_4 &&
              imported("span", {
                className: local_3cccfc6a.hint,
                children: arg_4,
              }),
          ],
        }),
      imported("input", {
        className: `${local_3cccfc6a.input} ${local_3cccfc6a[arg_6]} ${local_3cccfc6a[arg_7]} ${arg_5 ? local_3cccfc6a.error : ""} ${arg_8 || ""}`,
        value: arg,
        onInput: local,
        ...arg_9,
      }),
      arg_5 &&
        imported("span", {
          className: local_3cccfc6a.errorText,
          children: arg_5,
        }),
    ],
  });
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
const local_7ab56d01 = "c_form";
const local_33b3cec1 = "c_field";
const local_fe9ec23f_2 = "c_label";
const local_ca66b2a4_2 = "c_hint";
const local_889abf52 = "c_fieldError";
const local_cd23a337_2 = "c_error";
const local_8c4f8b4b = "c_actions";
const local_b00398c6 = {
  form: local_7ab56d01,
  field: local_33b3cec1,
  label: local_fe9ec23f_2,
  hint: local_ca66b2a4_2,
  fieldError: local_889abf52,
  error: local_cd23a337_2,
  actions: local_8c4f8b4b,
};
export function fn_2572ab35({ onClose: arg, onBack: arg_2 }) {
  const [local, local_2] = imported_8("");
  const [local_3, local_4] = imported_8("");
  const [local_5, local_6] = imported_8("");
  const [local_7, local_8] = imported_8(false);
  const [local_9, local_10] = imported_8(null);
  const [local_11, local_12] = imported_8({});
  const local_13 = async (arg) => {
    arg.preventDefault();
    local_10(null);
    local_12({});
    if (local_3 !== local_5) {
      local_12({
        confirmPassword: "Пароли не совпадают",
      });
      return;
    }
    if (!fn_fa99ef8c(local_3)) {
      local_12({
        newPassword: local_12bca483,
      });
      return;
    }
    if (local_3 === local) {
      local_12({
        newPassword: "Новый пароль должен отличаться от текущего",
      });
      return;
    }
    local_8(true);
    try {
      await imported_12.changePassword({
        oldPassword: local,
        newPassword: local_3,
      });
      await imported_13.getState().logout();
      arg();
    } catch (error) {
      if (imported_14(error)) {
        if (error.code === imported_15.ACCOUNT_CURRENT_PASSWORD_INCORRECT) {
          local_12({
            currentPassword: "Неверный текущий пароль",
          });
        } else if (error.code === "SAME_PASSWORD") {
          local_12({
            newPassword: "Новый пароль должен отличаться от текущего",
          });
        } else if (
          error.code === imported_15.VALIDATION_ERROR &&
          !error.errors
        ) {
          local_12({
            newPassword: local_12bca483,
          });
        } else if (error.code === "PASSWORD_NOT_SET") {
          local_10(
            "У аккаунта ещё нет пароля. Создайте его в разделе «Безопасность»",
          );
        } else if (error.errors) {
          const local = {};
          for (const [local, local_2] of Object.entries(error.errors)) {
            local[local] = imported_16(local_2[0] || "Ошибка валидации");
          }
          local_12(local);
        } else {
          local_10(
            imported_17(
              error.code,
              error.message || "Не удалось сменить пароль",
            ),
          );
        }
      } else {
        local_10("Не удалось сменить пароль");
      }
    } finally {
      local_8(false);
    }
  };
  const local_14 = local.length > 0 && local_3.length > 0 && local_5.length > 0;
  return imported(imported_11, {
    onClose: arg_2,
    title: "Смена пароля",
    children: imported("form", {
      onSubmit: local_13,
      className: local_b00398c6.form,
      children: [
        imported("div", {
          className: local_b00398c6.field,
          children: [
            imported("label", {
              className: local_b00398c6.label,
              children: "Текущий пароль",
            }),
            imported(fn_c0682123, {
              type: "password",
              value: local,
              onChange: local_2,
              placeholder: "Введите текущий пароль",
              autoComplete: "current-password",
            }),
            local_11.currentPassword &&
              imported("span", {
                className: local_b00398c6.fieldError,
                children: local_11.currentPassword,
              }),
          ],
        }),
        imported("div", {
          className: local_b00398c6.field,
          children: [
            imported("label", {
              className: local_b00398c6.label,
              children: "Новый пароль",
            }),
            imported(fn_c0682123, {
              type: "password",
              value: local_3,
              onChange: local_4,
              placeholder: "Введите новый пароль",
              autoComplete: "new-password",
            }),
            imported("span", {
              className: local_b00398c6.hint,
              children: local_12bca483,
            }),
            local_11.newPassword &&
              imported("span", {
                className: local_b00398c6.fieldError,
                children: local_11.newPassword,
              }),
          ],
        }),
        imported("div", {
          className: local_b00398c6.field,
          children: [
            imported("label", {
              className: local_b00398c6.label,
              children: "Подтверждение пароля",
            }),
            imported(fn_c0682123, {
              type: "password",
              value: local_5,
              onChange: local_6,
              placeholder: "Повторите новый пароль",
              autoComplete: "new-password",
            }),
            local_11.confirmPassword &&
              imported("span", {
                className: local_b00398c6.fieldError,
                children: local_11.confirmPassword,
              }),
          ],
        }),
        local_9 &&
          imported("div", {
            className: local_b00398c6.error,
            children: local_9,
          }),
        imported("div", {
          className: local_b00398c6.actions,
          children: [
            imported(imported_9, {
              type: "button",
              variant: "secondary",
              onClick: arg_2,
              disabled: local_7,
              children: "Отмена",
            }),
            imported(imported_9, {
              type: "submit",
              disabled: !local_14 || local_7,
              children: local_7 ? "Сохранение..." : "Сменить пароль",
            }),
          ],
        }),
        imported(imported_10, {}),
      ],
    }),
  });
}
const local_4d84dbb6 = "c_content";
const local_9d9cf508 = "c_title";
const local_8c84ac4c = "c_subtitle";
const local_8c4f8b4b_2 = "c_actions";
const local_e5cc91d8 = {
  content: local_4d84dbb6,
  title: local_9d9cf508,
  subtitle: local_8c84ac4c,
  actions: local_8c4f8b4b_2,
};
export function fn_081d8787({ onClose: arg }) {
  const local = async () => {
    await imported_13.getState().deleteAccount();
    arg();
  };
  return imported(imported_11, {
    onClose: arg,
    showHeader: false,
    children: imported("div", {
      className: local_e5cc91d8.content,
      children: [
        imported("h2", {
          className: local_e5cc91d8.title,
          children: "Удалить аккаунт?",
        }),
        imported("p", {
          className: local_e5cc91d8.subtitle,
          children:
            "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
        }),
        imported("p", {
          className: local_e5cc91d8.subtitle,
          children: imported(imported_69, {}),
        }),
        imported("div", {
          className: local_e5cc91d8.actions,
          children: [
            imported(imported_9, {
              variant: "secondary",
              onClick: (arg) => {
                arg.stopPropagation();
                arg();
              },
              children: "Отмена",
            }),
            imported(imported_9, {
              variant: "danger",
              onClick: (arg) => {
                arg.stopPropagation();
                local();
              },
              children: "Удалить аккаунт",
            }),
          ],
        }),
      ],
    }),
  });
}
const local_42987ab2 = "c_modalContainer";
const local_e537bcb7 = "c_settingsModal";
const local_80a09076 = "c_sidebar";
const local_1b82bf6c = "c_sidebarTitle";
const local_087b0d80 = "c_navItem";
const local_6ab69625_2 = "c_active";
const local_3d8ba2c2 = "c_contentWrapper";
const local_4d84dbb6_2 = "c_content";
const local_0a59c643 = "c_actionBar";
const local_a8a4775a = "c_contentTitle";
const local_cb65b52f = "c_subscriptionCancel";
const local_41d8075d = "c_subscriptionRenew";
const local_e80380ce = "c_paymentMethodsList";
const local_c624166a = "c_paymentMethodRow";
const local_540be676 = "c_paymentMethodIcon";
const local_57ae4087 = "c_paymentMethodInfo";
const local_83c3507b = "c_paymentMethodTitle";
const local_f195d5e1 = "c_paymentMethodBadge";
const local_c574cf3e = "c_paymentMethodSubtitle";
const local_71d85eea = "c_paymentMethodActions";
const local_5bc25d59 = "c_paymentMethodAdd";
const local_695fe42d = "c_paymentMethodsEmpty";
const local_1ac02fc3 = "c_paymentMethodBtn";
const local_501a92b6 = "c_paymentMethodBtnDanger";
const local_af0b94fd = "c_section";
const local_288346ca = "c_sectionTitle";
const local_93a8a6e2 = "c_settingItem";
const local_bdea34cf = "c_clickable";
const local_1d618df6 = "c_column";
const local_e7516b39 = "c_settingInfo";
const local_b0c49225 = "c_settingIcon";
const local_153f84c8 = "c_blue";
const local_6ffa3df6 = "c_red";
const local_97226d80 = "c_purple";
const local_0ddca94b = "c_settingText";
const local_dbb08c85 = "c_settingTitle";
const local_16e9a4e4 = "c_settingDescription";
const local_eaafa426 = "c_settingControl";
const local_c9563cc5 = "c_sessionsList";
const local_e941e3c5 = "c_sessionItem";
const local_80fe547d = "c_sessionIcon";
const local_5e3f16bf = "c_sessionInfo";
const local_3f588e5b = "c_sessionDevice";
const local_fcff5a7a = "c_sessionTime";
const local_0e1f08e5 = "c_sessionCurrentBadge";
const local_1b0f14ad = "c_sessionRemove";
const local_6b5ef1c6 = "c_avatarDisplay";
const local_4a519263 = "c_pinGrid";
const local_5743c361 = "c_pinItem";
const local_f7c65c54 = "c_pinActive";
const local_774f2b8d = "c_pinImage";
const local_2b83dcd7 = "c_pinName";
const local_ff92a8ea = "c_bioTextarea";
const local_889abf52_2 = "c_fieldError";
const local_c66f1de8 = "c_saveError";
const local_f1d7c0bd = "c_emptyBlocklist";
const local_0ef26e2b = "c_blockedUsersList";
const local_d9f3c6e6 = "c_blockedUserItem";
const local_67c0659d = "c_blockedUserInfo";
const local_4ae5cb95 = "c_blockedUserName";
const local_6ebdf41f = "c_blockedUserUsername";
const local_c4d9f6ad = "c_deleteAccountButton";
const local_4aa9675c = "c_logoutButton";
const local_a99a350a = "c_mobilePager";
const local_7dc6fb7e = "c_detailOpen";
const local_8609c961 = "c_mobileScreen";
const local_fa995287 = "c_mobileMenuTitle";
const local_b116e4f8 = "c_mobileMenu";
const local_1d45ca52 = "c_mobileMenuItem";
const local_3d9518df = "c_mobileMenuIcon";
const local_427bce18 = "c_mobileMenuChevron";
const local_c53d1077 = "c_mobileHeader";
const local_33f43040 = "c_mobileBack";
const local_57bda57c = "c_mobileHeaderTitle";
const local_98798dac = {
  modalContainer: local_42987ab2,
  settingsModal: local_e537bcb7,
  sidebar: local_80a09076,
  sidebarTitle: local_1b82bf6c,
  navItem: local_087b0d80,
  active: local_6ab69625_2,
  contentWrapper: local_3d8ba2c2,
  content: local_4d84dbb6_2,
  actionBar: local_0a59c643,
  contentTitle: local_a8a4775a,
  subscriptionCancel: local_cb65b52f,
  subscriptionRenew: local_41d8075d,
  paymentMethodsList: local_e80380ce,
  paymentMethodRow: local_c624166a,
  paymentMethodIcon: local_540be676,
  paymentMethodInfo: local_57ae4087,
  paymentMethodTitle: local_83c3507b,
  paymentMethodBadge: local_f195d5e1,
  paymentMethodSubtitle: local_c574cf3e,
  paymentMethodActions: local_71d85eea,
  paymentMethodAdd: local_5bc25d59,
  paymentMethodsEmpty: local_695fe42d,
  paymentMethodBtn: local_1ac02fc3,
  paymentMethodBtnDanger: local_501a92b6,
  section: local_af0b94fd,
  sectionTitle: local_288346ca,
  settingItem: local_93a8a6e2,
  clickable: local_bdea34cf,
  column: local_1d618df6,
  settingInfo: local_e7516b39,
  settingIcon: local_b0c49225,
  blue: local_153f84c8,
  red: local_6ffa3df6,
  purple: local_97226d80,
  settingText: local_0ddca94b,
  settingTitle: local_dbb08c85,
  settingDescription: local_16e9a4e4,
  settingControl: local_eaafa426,
  sessionsList: local_c9563cc5,
  sessionItem: local_e941e3c5,
  sessionIcon: local_80fe547d,
  sessionInfo: local_5e3f16bf,
  sessionDevice: local_3f588e5b,
  sessionTime: local_fcff5a7a,
  sessionCurrentBadge: local_0e1f08e5,
  sessionRemove: local_1b0f14ad,
  avatarDisplay: local_6b5ef1c6,
  pinGrid: local_4a519263,
  pinItem: local_5743c361,
  pinActive: local_f7c65c54,
  pinImage: local_774f2b8d,
  pinName: local_2b83dcd7,
  bioTextarea: local_ff92a8ea,
  fieldError: local_889abf52_2,
  saveError: local_c66f1de8,
  emptyBlocklist: local_f1d7c0bd,
  blockedUsersList: local_0ef26e2b,
  blockedUserItem: local_d9f3c6e6,
  blockedUserInfo: local_67c0659d,
  blockedUserName: local_4ae5cb95,
  blockedUserUsername: local_6ebdf41f,
  deleteAccountButton: local_c4d9f6ad,
  logoutButton: local_4aa9675c,
  mobilePager: local_a99a350a,
  detailOpen: local_7dc6fb7e,
  mobileScreen: local_8609c961,
  mobileMenuTitle: local_fa995287,
  mobileMenu: local_b116e4f8,
  mobileMenuItem: local_1d45ca52,
  mobileMenuIcon: local_3d9518df,
  mobileMenuChevron: local_427bce18,
  mobileHeader: local_c53d1077,
  mobileBack: local_33f43040,
  mobileHeaderTitle: local_57bda57c,
};
const local_0a5f369b = imported_18(function (
  { onDirtyChange: arg, onSavingChange: arg_2, onClose: arg_3 },
  arg_4,
) {
  const local = imported_13((arg) => arg.profile);
  const local_2 = imported_13((arg) => arg.logout);
  const local_3 = imported_13((arg) => arg.isLoggingOut);
  const { openModal: local_4, closeModal: local_5 } = imported_19();
  const local_6 = imported_20();
  const [local_7] = imported_21();
  const local_8 = local_7?.url || window.location.pathname;
  const [local_9, local_10] = imported_8(true);
  const [local_11, local_12] = imported_8(false);
  const [local_13, local_14] = imported_8(false);
  const [local_15, local_16] = imported_8({});
  const [local_17, local_18] = imported_8(null);
  const [local_19, local_20] = imported_8(null);
  const [local_21, local_22] = imported_8({
    name: "",
    username: "",
    bio: "",
    avatar: "😀",
  });
  const [local_23, local_24] = imported_8([]);
  const [local_25, local_26] = imported_8(null);
  const local_27 = imported_22(null);
  const [local_28, local_29] = imported_8(true);
  imported_23(() => {
    if (local) {
      const local = {
        name: local.displayName,
        username: local.username || "",
        bio: local.bio || "",
        avatar: local.clanAvatar ?? local.avatar,
      };
      local_22(local);
      local_20(local);
      local_10(false);
      const local_2 = local.pin ?? null;
      local_26(local_2);
      local_27.current = local_2;
    }
  }, [local]);
  imported_23(() => {
    imported_24
      .getMyPins()
      .then((arg) => {
        local_24(arg.pins);
        if (arg.activePin && !local_27.current) {
          const local = arg.pins.find((arg) => arg.slug === arg.activePin);
          if (local) {
            local_26(local);
            local_27.current = local;
          }
        }
      })
      .catch(() => local_24([]))
      .finally(() => local_29(false));
  }, []);
  imported_23(() => {
    arg(local_13);
  }, [local_13]);
  imported_23(() => {
    arg_2(local_11);
  }, [local_11]);
  const local_30 = imported_25(
    (arg, arg_2) => {
      if (!local_19) {
        return false;
      }
      const local = Object.keys(arg).some((arg) => arg[arg] !== local_19[arg]);
      const local_2 =
        (arg_2?.slug ?? null) !== (local_27.current?.slug ?? null);
      return local || local_2;
    },
    [local_19],
  );
  const local_31 = (arg, arg_2) => {
    if (local_15[arg]) {
      local_16((arg) => {
        const local = {
          ...arg,
        };
        delete local[arg];
        return local;
      });
    }
    local_18(null);
    local_22((arg) => {
      const local = {
        ...arg,
        [arg]: arg_2,
      };
      local_14(local_30(local, local_25));
      return local;
    });
  };
  const local_32 = imported_25(
    (arg) => {
      const local = local_25?.slug === arg.slug ? null : arg;
      local_26(local);
      local_14(local_30(local_21, local));
    },
    [local_25, local_21, local_30],
  );
  const local_33 = async () => {
    if (!local_13 || local_11) {
      return;
    }
    local_12(true);
    local_16({});
    local_18(null);
    const local = local_19?.username;
    const local_2 = local_21.username;
    try {
      if (
        local_19 &&
        Object.keys(local_21).some((arg) => local_21[arg] !== local_19[arg])
      ) {
        await imported_24.updateProfile({
          displayName: local_21.name,
          username: local_21.username || undefined,
          bio: local_21.bio || null,
        });
      }
      (local_25?.slug ?? null) !== (local_27.current?.slug ?? null) &&
        (local_25
          ? await imported_24.setActivePin(local_25.slug)
          : await imported_24.removeActivePin());
      local_20({
        ...local_21,
      });
      local_27.current = local_25;
      local_14(false);
      const local = imported_13.getState().profile;
      if (local) {
        imported_13.getState().setProfile({
          ...local,
          displayName: local_21.name,
          username: local_21.username,
          bio: local_21.bio || null,
          pin: local_25,
        });
      }
      if (
        local_2 &&
        local_2 !== local &&
        (local_8 === `/@${local}` || local_8 === `/@${local?.id}`)
      ) {
        imported_30(`/@${local_2}`);
      }
    } catch (error) {
      console.error("Failed to save profile:", error);
      if (imported_14(error)) {
        if (error.errors) {
          const local = {};
          for (const [local, local_2] of Object.entries(error.errors)) {
            local[local] = imported_16(local_2[0] || "Ошибка валидации");
          }
          local_16(local);
        } else {
          local_18(
            imported_17(
              error.code,
              error.message || "Не удалось сохранить изменения",
            ),
          );
        }
      } else {
        local_18("Не удалось сохранить изменения");
      }
    } finally {
      local_12(false);
    }
  };
  const local_34 = () => {
    if (local_19) {
      local_22({
        ...local_19,
      });
      local_26(local_27.current);
      local_14(false);
    }
  };
  imported_26(arg_4, () => ({
    save: local_33,
    discard: local_34,
  }));
  if (local_9) {
    return imported(imported_28, {
      children: [
        imported("h2", {
          className: local_98798dac.contentTitle,
          children: "Аккаунт",
        }),
        imported(imported_27, {}),
      ],
    });
  }
  return imported(imported_28, {
    children: [
      imported("h2", {
        className: local_98798dac.contentTitle,
        children: "Аккаунт",
      }),
      imported("div", {
        className: local_98798dac.section,
        children: [
          imported("div", {
            className: local_98798dac.settingItem,
            children: [
              imported("div", {
                className: local_98798dac.settingInfo,
                children: imported("div", {
                  className: local_98798dac.settingText,
                  children: [
                    imported("span", {
                      className: local_98798dac.settingTitle,
                      children: "Эмоджи-клан",
                    }),
                    imported("span", {
                      className: local_98798dac.settingDescription,
                      children: "Выбран при регистрации. Изменить нельзя",
                    }),
                  ],
                }),
              }),
              imported("div", {
                className: local_98798dac.avatarDisplay,
                children: local_21.avatar,
              }),
            ],
          }),
          imported("div", {
            className: local_98798dac.settingItem,
            children: [
              imported("div", {
                className: local_98798dac.settingInfo,
                children: imported("div", {
                  className: local_98798dac.settingText,
                  children: [
                    imported("span", {
                      className: local_98798dac.settingTitle,
                      children: "Имя",
                    }),
                    imported("span", {
                      className: local_98798dac.settingDescription,
                      children: "Ваше отображаемое имя",
                    }),
                  ],
                }),
              }),
              imported("div", {
                className: local_98798dac.settingControl,
                children: [
                  imported(fn_c0682123, {
                    value: local_21.name,
                    onChange: (arg) => local_31("name", arg),
                  }),
                  local_15.displayName &&
                    imported("span", {
                      className: local_98798dac.fieldError,
                      children: local_15.displayName,
                    }),
                ],
              }),
            ],
          }),
          imported("div", {
            className: local_98798dac.settingItem,
            children: [
              imported("div", {
                className: local_98798dac.settingInfo,
                children: imported("div", {
                  className: local_98798dac.settingText,
                  children: [
                    imported("span", {
                      className: local_98798dac.settingTitle,
                      children: "Username",
                    }),
                    imported("span", {
                      className: local_98798dac.settingDescription,
                      children:
                        "Ваш уникальный идентификатор (только латиница, цифры и _)",
                    }),
                  ],
                }),
              }),
              imported("div", {
                className: local_98798dac.settingControl,
                children: [
                  imported(fn_c0682123, {
                    value: local_21.username,
                    onChange: (arg) => local_31("username", arg),
                  }),
                  local_15.username &&
                    imported("span", {
                      className: local_98798dac.fieldError,
                      children: local_15.username,
                    }),
                ],
              }),
            ],
          }),
          imported("div", {
            className: `${local_98798dac.settingItem} ${local_98798dac.column}`,
            children: [
              imported("div", {
                className: local_98798dac.settingInfo,
                children: imported("div", {
                  className: local_98798dac.settingText,
                  children: [
                    imported("span", {
                      className: local_98798dac.settingTitle,
                      children: "О себе",
                    }),
                    imported("span", {
                      className: local_98798dac.settingDescription,
                      children: "Расскажите немного о себе",
                    }),
                  ],
                }),
              }),
              imported("textarea", {
                className: local_98798dac.bioTextarea,
                value: local_21.bio,
                onChange: (arg) => local_31("bio", arg.target.value),
                placeholder: "Напиши что-нибудь о себе...",
                rows: 3,
              }),
              local_15.bio &&
                imported("span", {
                  className: local_98798dac.fieldError,
                  children: local_15.bio,
                }),
            ],
          }),
          !local_28 &&
            local_23.length > 0 &&
            imported("div", {
              className: `${local_98798dac.settingItem} ${local_98798dac.column}`,
              children: [
                imported("div", {
                  className: local_98798dac.settingInfo,
                  children: imported("div", {
                    className: local_98798dac.settingText,
                    children: [
                      imported("span", {
                        className: local_98798dac.settingTitle,
                        children: "Пин",
                      }),
                      imported("span", {
                        className: local_98798dac.settingDescription,
                        children: "Отображается рядом с именем",
                      }),
                    ],
                  }),
                }),
                imported("div", {
                  className: local_98798dac.pinGrid,
                  children: local_23.map((arg) =>
                    imported(
                      "button",
                      {
                        className: `${local_98798dac.pinItem} ${local_25?.slug === arg.slug ? local_98798dac.pinActive : ""}`,
                        onClick: () => local_32(arg),
                        disabled: local_11,
                        title: arg.description || arg.name,
                        type: "button",
                        children: [
                          imported("img", {
                            src: arg.url,
                            alt: arg.name,
                            className: local_98798dac.pinImage,
                          }),
                          imported("span", {
                            className: local_98798dac.pinName,
                            children: arg.name,
                          }),
                        ],
                      },
                      arg.slug,
                    ),
                  ),
                }),
              ],
            }),
          local_17 &&
            imported("div", {
              className: local_98798dac.saveError,
              children: local_17,
            }),
        ],
      }),
      local_6 &&
        imported("div", {
          className: local_98798dac.section,
          children: imported("button", {
            type: "button",
            className: local_98798dac.logoutButton,
            disabled: local_3,
            "aria-busy": local_3,
            onClick: async () => {
              if (await local_2()) {
                arg_3();
              }
            },
            children: [
              imported(imported_29, {
                size: 20,
              }),
              imported("span", {
                children: local_3 ? "Выходим..." : "Выйти из аккаунта",
              }),
            ],
          }),
        }),
      imported("div", {
        className: local_98798dac.section,
        children: [
          imported("button", {
            type: "button",
            className: local_98798dac.deleteAccountButton,
            onClick: () =>
              local_4(
                imported(fn_081d8787, {
                  onClose: local_5,
                }),
              ),
            children: "Удалить аккаунт",
          }),
          imported(imported_10, {}),
          local_6 &&
            imported("p", {
              children: imported("a", {
                href: "/terms",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Пользовательское соглашение",
              }),
            }),
        ],
      }),
    ],
  });
});
const local_4d84dbb6_3 = "c_content";
const local_9d9cf508_2 = "c_title";
const local_8c84ac4c_2 = "c_subtitle";
const local_8c4f8b4b_3 = "c_actions";
const local_e5cc91d8_2 = {
  content: local_4d84dbb6_3,
  title: local_9d9cf508_2,
  subtitle: local_8c84ac4c_2,
  actions: local_8c4f8b4b_3,
};
export function fn_bc6396a2({
  expiresAt: arg,
  onConfirm: arg_2,
  onClose: arg_3,
}) {
  const [local, local_2] = imported_8(false);
  const local_3 = new Date(arg).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const local_4 = async () => {
    if (!local) {
      local_2(true);
      try {
        await arg_2();
        arg_3();
      } catch {
        local_2(false);
      }
    }
  };
  return imported(imported_11, {
    onClose: arg_3,
    showHeader: false,
    children: imported("div", {
      className: local_e5cc91d8_2.content,
      children: [
        imported("h2", {
          className: local_e5cc91d8_2.title,
          children: "Отключить автопродление?",
        }),
        imported("p", {
          className: local_e5cc91d8_2.subtitle,
          children: [
            "Подписка будет действовать до ",
            local_3,
            ". После этой даты она просто не продлится автоматически. Вы сможете включить автопродление обратно в любой момент.",
          ],
        }),
        imported("div", {
          className: local_e5cc91d8_2.actions,
          children: [
            imported(imported_9, {
              variant: "secondary",
              onClick: (arg) => {
                arg.stopPropagation();
                arg_3();
              },
              children: "Оставить",
            }),
            imported(imported_9, {
              variant: "danger",
              onClick: (arg) => {
                arg.stopPropagation();
                local_4();
              },
              disabled: local,
              children: "Отключить автопродление",
            }),
          ],
        }),
      ],
    }),
  });
}
const local_4d84dbb6_4 = "c_content";
const local_9d9cf508_3 = "c_title";
const local_8c84ac4c_3 = "c_subtitle";
const local_077f6834 = "c_disclaimer";
const local_8c4f8b4b_4 = "c_actions";
const local_b305877c = {
  content: local_4d84dbb6_4,
  title: local_9d9cf508_3,
  subtitle: local_8c84ac4c_3,
  disclaimer: local_077f6834,
  actions: local_8c4f8b4b_4,
};
export function fn_abc06512({ onConfirm: arg, onClose: arg_2 }) {
  const [local, local_2] = imported_8(false);
  const local_3 = async () => {
    if (!local) {
      local_2(true);
      try {
        await arg();
        arg_2();
      } catch {
        local_2(false);
      }
    }
  };
  return imported(imported_11, {
    onClose: arg_2,
    showHeader: false,
    children: imported("div", {
      className: local_b305877c.content,
      children: [
        imported("h2", {
          className: local_b305877c.title,
          children: "Включить автопродление?",
        }),
        imported("p", {
          className: local_b305877c.subtitle,
          children:
            "Подписка будет автоматически продлеваться каждый месяц. Средства будут списываться с привязанной карты.",
        }),
        imported("p", {
          className: local_b305877c.disclaimer,
          children: [
            "Нажимая «Включить», вы соглашаетесь с",
            "./subscription-modal.js",
            imported("a", {
              href: "/subscription-terms",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "условиями подписки",
            }),
            ",",
            "./subscription-modal.js",
            imported("a", {
              href: "/privacy",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "политикой конфиденциальности",
            }),
            " и",
            "./subscription-modal.js",
            imported("a", {
              href: "/terms",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "условиями использования",
            }),
            ".",
          ],
        }),
        imported("div", {
          className: local_b305877c.actions,
          children: [
            imported(imported_9, {
              variant: "secondary",
              onClick: (arg) => {
                arg.stopPropagation();
                arg_2();
              },
              children: "Отмена",
            }),
            imported(imported_9, {
              variant: "primary",
              onClick: (arg) => {
                arg.stopPropagation();
                local_3();
              },
              disabled: local,
              children: "Включить",
            }),
          ],
        }),
      ],
    }),
  });
}
const local_2fcdda14 = {
  yoo_money: "ЮMoney",
  sberbank: "SberPay",
  tinkoff_bank: "T-Pay",
  sbp: "СБП",
  mobile_balance: "Баланс телефона",
  sber_loan: "Кредит от СберБанка",
  sber_bnpl: "Плати частями",
  cash: "Наличные",
};
const local_24f9d3be = {
  bank_card: "Банковская карта",
  yoo_money: "Электронный кошелёк",
  sberbank: "SberPay",
  tinkoff_bank: "T-Pay",
  sbp: "Система быстрых платежей",
  mobile_balance: "Оплата с телефона",
  sber_loan: "Покупки в кредит",
  sber_bnpl: "Рассрочка",
  cash: "Наличные",
};
function fn_102c5470(arg) {
  if (arg.type === "bank_card") {
    return `${arg.cardBrand || "Карта"} •••• ${arg.cardLast4 || ""}`.trim();
  }
  return local_2fcdda14[arg.type] || arg.type;
}
function fn_486ae540(arg) {
  return local_24f9d3be[arg.type] || "";
}
const local_f06debfc = 5;
function fn_6dcb824e() {
  const local = imported_13((arg) => arg.profile);
  const [local_2, local_3] = imported_8(false);
  const [local_4, local_5] = imported_8(false);
  const [local_6, local_7] = imported_8(false);
  const [local_8, local_9] = imported_8([]);
  const [local_10, local_11] = imported_8(true);
  const [local_12, local_13] = imported_8(false);
  const [local_14, local_15] = imported_8(false);
  const [local_16, local_17] = imported_8(null);
  const [local_18, local_19] = imported_8(false);
  imported_23(() => {
    subscriptionApi
      .getStatus()
      .then((arg) => local_19(!!arg.recurringEnabled))
      .catch(() => local_19(false));
  }, []);
  imported_23(() => {
    let local = false;
    const local_2 = local?.id;
    const local_3 = () => {
      local_11(true);
      subscriptionApi
        .getMethods()
        .then((arg) => {
          if (!local && imported_13.getState().profile?.id === local_2) {
            local_9(arg);
          }
        })
        .catch(() => {
          if (!local) {
            local_9([]);
          }
        })
        .finally(() => {
          if (!local) {
            local_11(false);
          }
        });
    };
    if (local_18) {
      local_3();
      window.addEventListener("focus", local_3);
    }
    return () => {
      local = true;
      window.removeEventListener("focus", local_3);
    };
  }, [local_18, local?.id]);
  const local_20 = () => {
    subscriptionApi
      .getMethods()
      .then(local_9)
      .catch(() => {});
  };
  const local_21 = async (arg) => {
    try {
      await subscriptionApi.setDefaultMethod(arg);
      local_9((arg) =>
        arg.map((arg) => ({
          ...arg,
          isDefault: arg.id === arg,
        })),
      );
    } catch {
      imported_32.error("Не удалось изменить основной способ оплаты");
    }
  };
  const local_22 = async (arg) => {
    try {
      const local = await subscriptionApi.deleteMethod(arg.id);
      local_9((arg) => arg.filter((arg) => arg.id !== arg.id));
      if (local.autoRenewalDisabled && local?.subscription) {
        imported_13.getState().setProfile({
          ...local,
          subscription: {
            ...local.subscription,
            autoRenewal: false,
          },
        });
      }
      local_20();
    } catch {
      imported_32.error("Не удалось отвязать карту");
    }
  };
  const local_23 = async (arg) => {
    if (local_12) {
      return;
    }
    local_13(true);
    local_15(false);
    const local = window.open("about:blank", "_blank");
    try {
      const local = await subscriptionApi.bindCard(arg);
      const local_2 = local.error;
      if (local_2 || !local.confirmationUrl) {
        local?.close();
        imported_32.error(local_2 || "Привязка карт временно недоступна");
        return;
      }
      if (local) {
        local.location.href = local.confirmationUrl;
      } else {
        window.location.href = local.confirmationUrl;
      }
    } catch (error) {
      local?.close();
      imported_32.error(
        error instanceof Error && error.message
          ? error.message
          : "Привязка карт временно недоступна",
      );
    } finally {
      local_13(false);
    }
  };
  const local_24 = [...local_8].sort((arg, arg_2) => {
    if (arg.isDefault !== arg_2.isDefault) {
      if (arg.isDefault) {
        return -1;
      }
      return 1;
    }
    return (arg_2.createdAt || "").localeCompare(arg.createdAt || "");
  });
  const local_25 =
    local_18 && !local_10 && local_8.some((arg) => arg.canAutoRenew === true);
  return imported(imported_28, {
    children: [
      imported("h2", {
        className: local_98798dac.contentTitle,
        children: "Оплата",
      }),
      imported("div", {
        className: local_98798dac.section,
        children: [
          local?.subscription?.isActive
            ? imported("div", {
                className: local_98798dac.settingItem,
                children: [
                  imported("div", {
                    className: local_98798dac.settingInfo,
                    children: imported("div", {
                      className: local_98798dac.settingText,
                      children: [
                        imported("span", {
                          className: local_98798dac.settingTitle,
                          children: "Подписка ИТД НУКСТА",
                        }),
                        imported("span", {
                          className: local_98798dac.settingDescription,
                          children: local.subscription.expiresAt
                            ? (() => {
                                const local = new Date(
                                  local.subscription.expiresAt,
                                );
                                const local_2 = new Date();
                                const local_3 = Math.max(
                                  0,
                                  Math.ceil(
                                    (local.getTime() - local_2.getTime()) /
                                      (1000 * 60 * 60 * 24),
                                  ),
                                );
                                return `до ${local.toLocaleDateString("ru-RU", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })} (${local_3} ${local_3 === 1 ? "день" : local_3 < 5 ? "дня" : "дней"})`;
                              })()
                            : "Активна",
                        }),
                        !local.subscription.autoRenewal &&
                          !local_10 &&
                          !local_25 &&
                          imported("span", {
                            className: local_98798dac.settingDescription,
                            children:
                              "Для автопродления сначала добавьте способ оплаты",
                          }),
                      ],
                    }),
                  }),
                  local.subscription.autoRenewal
                    ? imported("button", {
                        type: "button",
                        className: local_98798dac.subscriptionCancel,
                        onClick: () => local_3(true),
                        children: "Отключить автопродление",
                      })
                    : imported("button", {
                        type: "button",
                        className: local_98798dac.subscriptionRenew,
                        disabled: !local_25,
                        title: local_25
                          ? undefined
                          : "Сначала добавьте и подтвердите способ оплаты",
                        onClick: () => {
                          if (local_25) {
                            local_5(true);
                          }
                        },
                        children: "Включить автопродление",
                      }),
                ],
              })
            : imported("div", {
                className: local_98798dac.settingItem,
                children: [
                  imported("div", {
                    className: local_98798dac.settingInfo,
                    children: imported("div", {
                      className: local_98798dac.settingText,
                      children: [
                        imported("span", {
                          className: local_98798dac.settingTitle,
                          children: "Подписка ИТД НУКСТА",
                        }),
                        imported("span", {
                          className: local_98798dac.settingDescription,
                          children: "Не оформлена",
                        }),
                      ],
                    }),
                  }),
                  imported("button", {
                    type: "button",
                    className: local_98798dac.subscriptionRenew,
                    onClick: () => local_7(true),
                    children: "Оформить",
                  }),
                ],
              }),
          local_18 &&
            imported("div", {
              className: `${local_98798dac.settingItem} ${local_98798dac.column}`,
              children: [
                imported("div", {
                  className: local_98798dac.settingInfo,
                  children: imported("div", {
                    className: local_98798dac.settingText,
                    children: [
                      imported("span", {
                        className: local_98798dac.settingTitle,
                        children: "Способы оплаты",
                      }),
                      imported("span", {
                        className: local_98798dac.settingDescription,
                        children:
                          "Сохранённые способы для автопродления подписки. Отвязать можно в любой момент",
                      }),
                    ],
                  }),
                }),
                imported("div", {
                  className: local_98798dac.paymentMethodsList,
                  children: local_10
                    ? imported(imported_27, {})
                    : imported(imported_28, {
                        children: [
                          local_24.map((arg) => {
                            const local =
                              arg.type === "bank_card"
                                ? local_0ead779e
                                : local_2db7ffcd;
                            return imported(
                              "div",
                              {
                                className: local_98798dac.paymentMethodRow,
                                children: [
                                  imported("div", {
                                    className: local_98798dac.paymentMethodIcon,
                                    children: imported(local, {
                                      size: 18,
                                    }),
                                  }),
                                  imported("div", {
                                    className: local_98798dac.paymentMethodInfo,
                                    children: [
                                      imported("span", {
                                        className:
                                          local_98798dac.paymentMethodTitle,
                                        children: [
                                          fn_102c5470(arg),
                                          arg.isDefault &&
                                            local_8.length > 1 &&
                                            imported("span", {
                                              className:
                                                local_98798dac.paymentMethodBadge,
                                              children: "основной",
                                            }),
                                        ],
                                      }),
                                      imported("span", {
                                        className:
                                          local_98798dac.paymentMethodSubtitle,
                                        children: fn_486ae540(arg),
                                      }),
                                    ],
                                  }),
                                  imported("div", {
                                    className:
                                      local_98798dac.paymentMethodActions,
                                    children: [
                                      !arg.isDefault &&
                                        imported("button", {
                                          type: "button",
                                          className:
                                            local_98798dac.paymentMethodBtn,
                                          onClick: () => local_21(arg.id),
                                          children: "Сделать основным",
                                        }),
                                      imported("button", {
                                        type: "button",
                                        className:
                                          local_98798dac.paymentMethodBtnDanger,
                                        onClick: () => local_17(arg),
                                        children: "Отвязать",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              arg.id,
                            );
                          }),
                          local_8.length === 0 &&
                            imported("div", {
                              className: local_98798dac.paymentMethodsEmpty,
                              children: [
                                imported(local_0ead779e, {
                                  size: 18,
                                }),
                                imported("span", {
                                  children: "Нет привязанных методов оплаты",
                                }),
                              ],
                            }),
                          local_8.length < local_f06debfc
                            ? local_14
                              ? imported(imported_28, {
                                  children: [
                                    imported("button", {
                                      type: "button",
                                      className:
                                        local_98798dac.paymentMethodAdd,
                                      onClick: () => local_23("bank_card"),
                                      disabled: local_12,
                                      children: [
                                        imported("span", {
                                          className:
                                            local_98798dac.paymentMethodIcon,
                                          children: imported(local_0ead779e, {
                                            size: 16,
                                          }),
                                        }),
                                        "Банковская карта",
                                      ],
                                    }),
                                    imported("button", {
                                      type: "button",
                                      className:
                                        local_98798dac.paymentMethodAdd,
                                      onClick: () => local_23("sbp"),
                                      disabled: local_12,
                                      children: [
                                        imported("span", {
                                          className:
                                            local_98798dac.paymentMethodIcon,
                                          children: imported(local_2db7ffcd, {
                                            size: 16,
                                          }),
                                        }),
                                        "СБП",
                                      ],
                                    }),
                                  ],
                                })
                              : imported("button", {
                                  type: "button",
                                  className: local_98798dac.paymentMethodAdd,
                                  onClick: () => local_15(true),
                                  disabled: local_12,
                                  children: [
                                    imported("span", {
                                      className:
                                        local_98798dac.paymentMethodIcon,
                                      children: imported(imported_31, {
                                        size: 16,
                                      }),
                                    }),
                                    "Добавить способ оплаты",
                                  ],
                                })
                            : imported("div", {
                                className: local_98798dac.paymentMethodsEmpty,
                                children: imported("span", {
                                  children: [
                                    "Достигнут лимит способов оплаты (",
                                    local_f06debfc,
                                    ")",
                                  ],
                                }),
                              }),
                        ],
                      }),
                }),
              ],
            }),
        ],
      }),
      local_2 &&
        local?.subscription?.expiresAt &&
        imported(fn_bc6396a2, {
          expiresAt: local.subscription.expiresAt,
          onConfirm: async () => {
            const local = await subscriptionApi.setAutoRenewal(false);
            imported_13.getState().setProfile({
              ...local,
              subscription: {
                ...local.subscription,
                autoRenewal: local.autoRenewal,
              },
            });
          },
          onClose: () => local_3(false),
        }),
      local_4 &&
        imported(fn_abc06512, {
          onConfirm: async () => {
            const local = await subscriptionApi.getMethods();
            local_9(local);
            if (!local.some((arg) => arg.canAutoRenew === true)) {
              local_5(false);
              imported_32.error("Сначала добавьте и подтвердите способ оплаты");
              return;
            }
            const local_2 = await subscriptionApi.setAutoRenewal(true);
            imported_13.getState().setProfile({
              ...local,
              subscription: {
                ...local.subscription,
                autoRenewal: local_2.autoRenewal,
                ...(local_2.expiresAt
                  ? {
                      expiresAt: local_2.expiresAt,
                    }
                  : {}),
              },
            });
          },
          onClose: () => local_5(false),
        }),
      local_16 &&
        imported(imported_70, {
          title: "Отвязать способ оплаты?",
          message: `${fn_102c5470(local_16)} будет отвязан. Это действие нельзя отменить.`,
          confirmText: "Отвязать",
          danger: true,
          onConfirm: () => local_22(local_16),
          onClose: () => local_17(null),
        }),
      imported(SubscriptionModal, {
        isOpen: local_6,
        onClose: () => {
          local_7(false);
          subscriptionApi
            .getMethods()
            .then(local_9)
            .catch(() => {});
        },
      }),
    ],
  });
}
const local_58d3e49f = "c_selectWrapper";
const local_c45c7651 = "c_select";
const local_e57d11db = "c_open";
const local_4a1c0659 = "c_selectedValue";
const local_b2da19f6 = "c_dropdown";
const local_f2ac596c = "c_option";
const local_4811d0dc = "c_selected";
const local_28704e24 = {
  selectWrapper: local_58d3e49f,
  select: local_c45c7651,
  open: local_e57d11db,
  selectedValue: local_4a1c0659,
  dropdown: local_b2da19f6,
  option: local_f2ac596c,
  selected: local_4811d0dc,
};
function fn_1845876d({
  value: arg,
  options: arg_2,
  onChange: arg_3,
  disabled: arg_4,
}) {
  const [local, local_2] = imported_8(false);
  const local_3 = imported_22(null);
  const local_4 = arg_2.find((arg) => arg.value === arg);
  imported_23(() => {
    const local = (arg) => {
      if (local_3.current && !local_3.current.contains(arg.target)) {
        local_2(false);
      }
    };
    if (local) {
      document.addEventListener("mousedown", local);
    }
    return () => {
      document.removeEventListener("mousedown", local);
    };
  }, [local]);
  const local_5 = (arg) => {
    arg_3(arg);
    local_2(false);
  };
  return imported("div", {
    ref: local_3,
    className: local_28704e24.selectWrapper,
    children: [
      imported("button", {
        type: "button",
        className: `${local_28704e24.select} ${local ? local_28704e24.open : ""}`,
        onClick: (arg) => {
          arg.stopPropagation();
          if (!arg_4) {
            local_2(!local);
          }
        },
        disabled: arg_4,
        children: [
          imported("span", {
            className: local_28704e24.selectedValue,
            children: local_4?.label,
          }),
          imported(imported_72, {
            size: 16,
          }),
        ],
      }),
      local &&
        imported("div", {
          className: local_28704e24.dropdown,
          children: arg_2.map((arg) =>
            imported(
              "button",
              {
                type: "button",
                className: `${local_28704e24.option} ${arg.value === arg ? local_28704e24.selected : ""}`,
                onClick: () => local_5(arg.value),
                children: arg.label,
              },
              arg.value,
            ),
          ),
        }),
    ],
  });
}
const local_341987ca = [
  {
    value: "everyone",
    label: "Все",
  },
  {
    value: "followers",
    label: "Подписчики",
  },
  {
    value: "mutual",
    label: "Взаимные подписчики",
  },
  {
    value: "nobody",
    label: "Никто",
  },
];
const local_6c3e9196 = [
  ...local_341987ca.slice(0, 2),
  {
    value: "following",
    label: "Те, на кого я подписан",
  },
  ...local_341987ca.slice(2),
];
const local_bfddd7ce = [
  {
    value: "light",
    label: "Светлая",
  },
  {
    value: "dark",
    label: "Тёмная",
  },
  {
    value: "system",
    label: "Системная",
  },
];
function fn_92ca2ba3() {
  const { theme: local, setTheme: local_2 } = local_703810da();
  return imported(imported_28, {
    children: [
      imported("h2", {
        className: local_98798dac.contentTitle,
        children: "Оформление",
      }),
      imported("div", {
        className: local_98798dac.section,
        children: imported("div", {
          className: local_98798dac.settingItem,
          children: [
            imported("div", {
              className: local_98798dac.settingInfo,
              children: imported("div", {
                className: local_98798dac.settingText,
                children: [
                  imported("span", {
                    className: local_98798dac.settingTitle,
                    children: "Тема",
                  }),
                  imported("span", {
                    className: local_98798dac.settingDescription,
                    children: "Выберите цветовую схему приложения",
                  }),
                ],
              }),
            }),
            imported(fn_1845876d, {
              value: local,
              options: local_bfddd7ce,
              onChange: (arg) => local_2(arg),
            }),
          ],
        }),
      }),
    ],
  });
}
async function fn_007c8a7a(arg, arg_2, arg_3, arg_4 = false, arg_5 = "direct") {
  const local = await fetch(`/api/v1/auth${arg_2}`, {
    method: arg,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-ITD-Phone-Reverse": "1",
      "X-ITD-Flow-Expiry": "1",
      ...(arg_5 === "reverse"
        ? {
            "X-ITD-Phone-Method": "reverse",
          }
        : {}),
      ...imported_36(),
    },
    ...(arg_3
      ? {
          body: JSON.stringify(arg_3),
        }
      : {}),
    signal: AbortSignal.timeout(20000),
  });
  const local_2 = await local.json().catch(() => null);
  if (local.ok) {
    return local_2;
  }
  const local_3 = local_2?.error || local_2;
  if (
    local.status === 401 &&
    !arg_4 &&
    (!local_3?.code || local_3.code === "UNAUTHORIZED") &&
    (await imported_37())
  ) {
    return fn_007c8a7a(arg, arg_2, arg_3, true, arg_5);
  }
  const local_4 = Math.max(
    Number(local_3?.retryIn) || 0,
    Number(local_3?.retryAfter) || 0,
    Number(local.headers.get("Retry-After")) || 0,
  );
  throw new imported_38(
    local_3?.code || (local.status === 401 ? "UNAUTHORIZED" : "REQUEST_FAILED"),
    local.status === 429 ? Math.max(local_4, 30) : local_4,
    imported_39(local),
  );
}
function fn_d032fbfc(arg) {
  if (typeof arg.flowToken !== "string" || arg.flowToken.length !== 32) {
    throw new Error("Invalid verification flow");
  }
  return arg.flowToken;
}
const local_b41bdddd = {
  methods: () => fn_007c8a7a("GET", "/methods"),
  setPassword: (arg) =>
    fn_007c8a7a("POST", "/set-password", {
      password: arg,
    }),
  attachEmail: async (arg) =>
    fn_d032fbfc(
      await fn_007c8a7a("POST", "/email/attach", {
        email: arg,
      }),
    ),
  verifyEmail: (arg, arg_2, arg_3) =>
    fn_007c8a7a("POST", "/verify-otp", {
      email: arg,
      otp: arg_2,
      flowToken: arg_3,
    }),
  resendEmail: (arg, arg_2) =>
    fn_007c8a7a("POST", "/resend-otp", {
      email: arg,
      flowToken: arg_2,
    }),
  changePhone: async (arg, arg_2, arg_3 = "direct") => {
    const local = await fn_007c8a7a(
      "POST",
      "/phone/change",
      {
        phone: arg,
        captcha: arg_2,
      },
      false,
      arg_3,
    );
    return {
      ...imported_33(local),
      flowToken: fn_d032fbfc(local),
    };
  },
  resendPhone: async (arg, arg_2) =>
    imported_33(
      await fn_007c8a7a("POST", "/resend-otp", {
        phone: arg,
        flowToken: arg_2,
      }),
    ),
  changeEmail: async (arg) =>
    fn_d032fbfc(
      await fn_007c8a7a("POST", "/email/change", {
        email: arg,
      }),
    ),
  verifyChange: async (arg, arg_2, arg_3) => {
    const local = await fn_007c8a7a("POST", "/verify-otp", {
      ...arg,
      otp: arg_2,
      flowToken: arg_3,
    });
    if (
      local.mode !== "change" ||
      typeof local.changeToken !== "string" ||
      !Array.isArray(local.proofs)
    ) {
      throw new Error("Unexpected change response");
    }
    return {
      changeToken: local.changeToken,
      proofs: local.proofs,
      waitDays: Number(local.waitDays) || 7,
    };
  },
  requestProof: async (arg, arg_2) => {
    const local = await fn_007c8a7a("POST", "/change/proof", {
      changeToken: arg,
      method: arg_2,
    });
    return {
      sentTo: local.sentTo,
      delivery: local.delivery
        ? imported_33({
            delivery: local.delivery,
            retryIn: 0,
          })
        : null,
    };
  },
  confirm: (arg, arg_2) =>
    fn_007c8a7a("POST", "/change/confirm", {
      changeToken: arg,
      ...arg_2,
    }),
  wait: (arg) =>
    fn_007c8a7a("POST", "/change/wait", {
      changeToken: arg,
    }),
  pending: async () => (await fn_007c8a7a("GET", "/change/pending")).requests,
  cancelPending: (arg) =>
    fn_007c8a7a("DELETE", `/change/pending/${encodeURIComponent(arg)}`),
};
const local_45600a9b = (arg) => {
  if (arg instanceof imported_38) {
    return arg.code;
  }
  return "";
};
function fn_f369556a(arg, arg_2, arg_3 = false) {
  const local = arg_2 === "phone";
  return (
    {
      SAME_PHONE: "Это ваш текущий номер.",
      SAME_EMAIL: "Это ваша текущая почта.",
      EMAIL_TAKEN: "Эта почта уже используется другим аккаунтом.",
      IDENTIFIER_TAKEN: local
        ? "Этот номер уже привязан к другому аккаунту."
        : "Эта почта уже используется другим аккаунтом.",
      CHANGE_PENDING:
        "Смена уже ждёт подтверждения. Отмените её в разделе «Безопасность», чтобы начать новую.",
      CHANGE_COOLDOWN: "Новую смену можно начать через сутки после отмены.",
      METHOD_CHANGED: local
        ? "Номер уже изменился. Откройте настройки заново."
        : "Почта уже изменилась. Откройте настройки заново.",
      INVALID_CHANGE_TOKEN:
        "Время на подтверждение вышло. Начните смену заново.",
      NOT_ATTACHED: local
        ? "Сначала привяжите номер."
        : "Сначала привяжите почту.",
      PROOF_NOT_AVAILABLE: "Этот способ сейчас недоступен.",
      NO_PROOF_REQUESTED: "Сначала запросите код.",
      NOT_FOUND: "Заявка уже не действует.",
      SESSION_TOO_NEW:
        "Отменить заявку можно с устройства, на котором вход выполнен раньше, чем её подали.",
      ...(arg_2 === "email"
        ? {
            ALREADY_ATTACHED: "К аккаунту уже привязана почта.",
          }
        : {}),
      ...(arg_2
        ? {
            INVALID_PASSWORD: "Неверный пароль.",
            DELIVERY_FAILED: "Не удалось отправить код. Попробуйте ещё раз.",
          }
        : {}),
      ...(arg_3
        ? {
            OTP_INVALID: "Неверный код. Проверьте письмо и попробуйте ещё раз.",
            DELIVERY_FAILED: "Не удалось отправить письмо. Попробуйте ещё раз.",
          }
        : {}),
    }[local_45600a9b(arg)] ||
    imported_34(arg) ||
    imported_35(arg)
  );
}
function fn_20f2ed02() {
  const [local, local_2] = imported_8(0);
  const [local_3, local_4] = imported_8(() => Date.now());
  imported_23(() => {
    if (local <= Date.now()) {
      return;
    }
    const local = setInterval(() => {
      const local = Date.now();
      local_4(local);
      if (local >= local) {
        clearInterval(local);
      }
    }, 1000);
    return () => clearInterval(local);
  }, [local]);
  return [
    Math.max(0, Math.ceil((local - local_3) / 1000)),
    (arg) => {
      const local = Date.now();
      local_4(local);
      local_2(local + arg * 1000);
    },
  ];
}
function fn_47c8dfb0(arg, arg_2) {
  const [local, local_2] = imported_8(false);
  const [local_3, local_4] = imported_8("");
  const local_5 = imported_22(false);
  return {
    busy: local,
    error: local_3,
    setError: local_4,
    run: async (arg, arg_2) => {
      if (!local_5.current) {
        local_5.current = true;
        local_2(true);
        local_4("");
        try {
          await arg();
        } catch (error) {
          local_4(arg(error));
          error instanceof imported_38 &&
            error.retryIn &&
            arg_2?.(error.retryIn);
          arg_2?.(error);
        } finally {
          local_5.current = false;
          local_2(false);
        }
      }
    },
  };
}
const local_482c1796 = (arg) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(arg);
const local_b6c83f75 = (arg) => {
  if (arg.channel === "sms") {
    return "Отправили SMS";
  }
  if (arg.channel === "push") {
    return "Отправили уведомление";
  }
  return "Сейчас позвоним";
};
const local_f62db418 = (arg) => {
  if (arg.channel === "sms") {
    return "Введите код из сообщения.";
  }
  if (arg.channel === "voice_call") {
    return `Возьмите трубку — робот продиктует код из ${arg.codeLength} цифр.`;
  }
  if (arg.channel === "push") {
    return "Посмотрите код в уведомлении на устройстве, где вы уже вошли в ИТД.";
  }
  return `Отвечать не нужно. Введите последние ${arg.codeLength} цифры номера, с которого поступит звонок.`;
};
function fn_ab408515(arg) {
  const local = arg % 10;
  const local_2 = arg % 100;
  const local_3 =
    local === 1 && local_2 !== 11
      ? "день"
      : local >= 2 && local <= 4 && (local_2 < 12 || local_2 > 14)
        ? "дня"
        : "дней";
  return `${arg} ${local_3}`;
}
function fn_9e6a953e(arg) {
  const local = new Date(arg);
  if (Number.isNaN(local.getTime())) {
    return arg;
  }
  return `${local.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
  })} в ${local.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}
const local_f06debfc_2 = 60;
function fn_b4e36455({ onClose: arg, onAttached: arg_2 }) {
  const [local, local_2] = imported_8("email");
  const [local_3, local_4] = imported_8("");
  const [local_5, local_6] = imported_8("");
  const [local_7, local_8] = imported_8([]);
  const [local_9, local_10] = fn_20f2ed02();
  const {
    busy: local_11,
    error: local_12,
    setError: local_13,
    run: local_14,
  } = fn_47c8dfb0(
    (arg) => fn_f369556a(arg, "email", local === "code"),
    local_10,
  );
  const local_15 = (arg) => {
    arg.preventDefault();
    if (local_11 || local_9) {
      return;
    }
    const local = local_3.trim().toLowerCase();
    if (!local_482c1796(local)) {
      local_13("Проверьте адрес почты.");
      return;
    }
    local_14(async () => {
      local_6(await local_b41bdddd.attachEmail(local));
      local_4(local);
      local_8(Array(6).fill(""));
      local_10(local_f06debfc_2);
      local_2("code");
    });
  };
  const local_16 = (arg) => {
    arg.preventDefault();
    if (!(local_11 || !local_7.every(Boolean))) {
      local_14(
        async () => {
          if (
            !(
              await local_b41bdddd.verifyEmail(
                local_3,
                local_7.join(""),
                local_5,
              )
            ).success
          ) {
            throw new Error("Email was not attached");
          }
          arg_2(local_3);
        },
        () => local_8(Array(6).fill("")),
      );
    }
  };
  const local_17 = () => {
    if (!(local_11 || local_9)) {
      local_14(async () => {
        await local_b41bdddd.resendEmail(local_3, local_5);
        local_8(Array(6).fill(""));
        local_10(local_f06debfc_2);
      });
    }
  };
  const local_18 = () => {
    if (!local_11) {
      local_2("email");
      local_6("");
      local_8([]);
      local_13("");
      local_10(0);
    }
  };
  return imported(imported_11, {
    title: "Почта",
    onClose: arg,
    className: imported_40.dialog,
    onBeforeClose: () => !local_11,
    children: imported("div", {
      className: imported_40.dialogContent,
      children: imported("div", {
        className: imported_40.card,
        children: [
          imported("h1", {
            children:
              local === "email" ? "Привязать почту" : "Подтвердите почту",
          }),
          imported("p", {
            className: imported_40.description,
            children:
              local === "email"
                ? "Пришлём код подтверждения на эту почту."
                : `Мы отправили код на ${local_3}.`,
          }),
          local === "email" &&
            imported("form", {
              className: imported_40.form,
              onSubmit: local_15,
              children: [
                imported("label", {
                  className: imported_40.field,
                  children: [
                    "Почта",
                    imported("input", {
                      type: "email",
                      autoComplete: "email",
                      placeholder: "you@example.com",
                      maxLength: 255,
                      required: true,
                      value: local_3,
                      onInput: (arg) => {
                        local_4(arg.currentTarget.value);
                        local_13("");
                      },
                      disabled: local_11,
                    }),
                  ],
                }),
                local_12 &&
                  imported("p", {
                    className: imported_40.error,
                    role: "alert",
                    children: local_12,
                  }),
                imported(imported_9, {
                  type: "submit",
                  size: "lg",
                  fullWidth: true,
                  loading: local_11,
                  disabled: !local_3 || !!local_9,
                  children: local_9
                    ? `Подождите ${local_9} с`
                    : "Отправить код",
                }),
                imported(imported_10, {}),
              ],
            }),
          local === "code" &&
            imported("form", {
              className: imported_40.form,
              onSubmit: local_16,
              children: [
                imported(imported_41, {
                  value: local_7,
                  length: 6,
                  onChange: (arg) => {
                    local_8(arg);
                    local_13("");
                  },
                  disabled: local_11,
                  status: local_12 ? "error" : "idle",
                }),
                local_12 &&
                  imported("p", {
                    className: imported_40.error,
                    role: "alert",
                    children: local_12,
                  }),
                imported(imported_9, {
                  type: "submit",
                  size: "lg",
                  fullWidth: true,
                  loading: local_11,
                  disabled: !local_7.every(Boolean),
                  children: "Подтвердить почту",
                }),
                imported("button", {
                  type: "button",
                  className: imported_40.link,
                  disabled: local_11 || !!local_9,
                  onClick: local_17,
                  children: local_9
                    ? `Отправить код повторно через ${local_9} с`
                    : "Отправить код повторно",
                }),
                imported("button", {
                  type: "button",
                  className: imported_40.back,
                  disabled: local_11,
                  onClick: local_18,
                  children: "Ошиблись в адресе? Изменить",
                }),
              ],
            }),
        ],
      }),
    }),
  });
}
const local_f06debfc_3 = 60;
const local_367ab72d = [
  "INVALID_CHANGE_TOKEN",
  "METHOD_CHANGED",
  "IDENTIFIER_TAKEN",
];
function fn_93035bce(arg, arg_2, arg_3) {
  if (arg === "email_code") {
    if (arg_3.email) {
      return `Код на почту ${arg_3.email}`;
    }
    return "Код на почту";
  }
  if (arg === "phone_code") {
    if (arg_3.phone) {
      return `Код на номер ${arg_3.phone}`;
    }
    return "Код на номер";
  }
  if (arg_2 === "phone") {
    if (arg_3.phone) {
      return `Код на старый номер ${arg_3.phone}`;
    }
    return "Код на старый номер";
  }
  if (arg_3.email) {
    return `Код на старую почту ${arg_3.email}`;
  }
  return "Код на старую почту";
}
function fn_22a725eb({ kind: arg, methods: arg_2, onClose: arg_3 }) {
  const local = arg === "phone";
  const [local_2, local_3] = imported_8("value");
  const [local_4, local_5] = imported_8("ru");
  const [local_6, local_7] = imported_8("");
  const [local_8, local_9] = imported_8("");
  const [local_10, local_11] = imported_8(null);
  const [local_12, local_13] = imported_8(0);
  const [local_14, local_15] = imported_8("");
  const [local_16, local_17] = imported_8("");
  const [local_18, local_19] = imported_8("");
  const [local_20, local_21] = imported_8(null);
  const [local_22, local_23] = imported_8([]);
  const [local_24, local_25] = imported_8(false);
  const [local_26, local_27] = imported_8(false);
  const [local_28, local_29] = imported_8(null);
  const [local_30, local_31] = imported_8("");
  const [local_32, local_33] = imported_8(null);
  const [local_34, local_35] = imported_8(null);
  const [local_36, local_37] = imported_8(null);
  const [local_38, local_39] = imported_8(null);
  const [local_40, local_41] = fn_20f2ed02();
  const [local_42, local_43] = fn_20f2ed02();
  const [local_44, local_45] = imported_8(false);
  const local_46 =
    local_2 === "code"
      ? !local
      : local_2 === "proofCode" && !local_34?.delivery;
  const {
    busy: local_47,
    error: local_48,
    setError: local_49,
    run: local_50,
  } = fn_47c8dfb0((arg) => fn_f369556a(arg, arg, local_46), local_41);
  const local_51 = imported_25((arg) => local_11(arg), []);
  const local_52 = imported_25(() => local_11(null), []);
  const local_53 = imported_42();
  const local_54 = imported_43(local_53, local_4);
  const local_55 = imported_44(local_53, local_4);
  const local_56 = local && !local_8 ? imported_45(local_4, local_6) : null;
  const local_57 =
    local_2 === "code"
      ? (local_20?.codeLength ?? 6)
      : (local_34?.delivery?.codeLength ?? 6);
  const local_58 = local_22.length === local_57 && local_22.every(Boolean);
  const local_59 = (arg = 0) => {
    local_3("value");
    local_19("");
    local_21(null);
    local_23([]);
    local_25(false);
    local_27(false);
    local_45(false);
    local_11(null);
    local_13((arg) => arg + 1);
    local_43(arg);
    local_49(imported_53);
  };
  const local_60 = !!local_28?.proofs.includes("password");
  const local_61 = (arg, arg_2) => {
    local_39({
      title: arg,
      lede: arg_2,
    });
    local_49("");
    local_3("result");
  };
  const local_62 = (arg) => {
    if (local_367ab72d.includes(local_45600a9b(arg))) {
      local_61("Не получилось", fn_f369556a(arg, arg));
    }
  };
  const local_63 = () =>
    local_61(
      local ? "Номер изменён" : "Почта изменена",
      local
        ? `Теперь входите по номеру ${local_16}`
        : `Теперь входите по почте ${local_16}`,
    );
  const local_64 = (arg, arg_2 = "direct") => {
    arg.preventDefault();
    if (
      local_47 ||
      local_42 ||
      (arg_2 === "direct" && (local_40 || (local && !local_54))) ||
      (arg_2 === "reverse" && (!local || !local_55))
    ) {
      return;
    }
    if (local) {
      if (!local_56 || !local_10) {
        return;
      }
      const local = local_10;
      local_11(null);
      local_50(async () => {
        try {
          const local = await local_b41bdddd.changePhone(
            local_56,
            local,
            arg_2,
          );
          local_45(false);
          local_43(0);
          local_27(arg_2 === "reverse");
          local_25(false);
          local_17(local_56);
          local_19(local.flowToken);
          local_21(local);
          local_23(Array(local.codeLength).fill(""));
          local_41(local.retryIn);
          local_3("code");
        } finally {
          local_13((arg) => arg + 1);
        }
      });
      return;
    }
    const local = local_14.trim().toLowerCase();
    if (!local_482c1796(local)) {
      local_49("Проверьте адрес почты.");
      return;
    }
    local_50(async () => {
      local_19(await local_b41bdddd.changeEmail(local));
      local_15(local);
      local_17(local);
      local_21(null);
      local_23(Array(6).fill(""));
      local_41(local_f06debfc_3);
      local_3("code");
    });
  };
  const local_65 = (arg) => {
    arg.preventDefault();
    if (
      !local_58 ||
      local_47 ||
      (local_2 === "code" && local_20?.reverseOnly)
    ) {
      return;
    }
    const local = local_22.join("");
    if (local_2 === "code") {
      local_50(
        async () => {
          const local = await local_b41bdddd.verifyChange(
            local
              ? {
                  phone: local_16,
                }
              : {
                  email: local_16,
                },
            local,
            local_18,
          );
          local_29(local);
          local_31("");
          local_41(0);
          local_3("proof");
        },
        (arg) => {
          if (local && imported_51(arg)) {
            local_59(arg.flowExpiresIn ?? 0);
          } else {
            local_23(Array(local_57).fill(""));
          }
        },
      );
      return;
    }
    if (local_28) {
      local_50(
        async () => {
          await local_b41bdddd.confirm(local_28.changeToken, {
            code: local,
          });
          local_63();
        },
        (arg) => {
          local_23(Array(local_57).fill(""));
          local_62(arg);
        },
      );
    }
  };
  const local_66 = () => {
    if (!(local_47 || local_40)) {
      local_50(
        async () => {
          if (local_2 === "proofCode" && local_28 && local_36) {
            const local = await local_b41bdddd.requestProof(
              local_28.changeToken,
              local_36,
            );
            local_35(local);
            local_23(Array(local.delivery?.codeLength ?? 6).fill(""));
            local_41(local_f06debfc_3);
          } else if (local) {
            const local = await local_b41bdddd.resendPhone(local_16, local_18);
            local_21(local);
            local_23(Array(local.codeLength).fill(""));
            local_41(local.retryIn);
          } else {
            await local_b41bdddd.resendEmail(local_16, local_18);
            local_23(Array(6).fill(""));
            local_41(local_f06debfc_3);
          }
        },
        local_2 === "proofCode"
          ? local_62
          : (arg) => {
              local &&
                imported_51(arg) &&
                (arg.flowExpiresIn > 0
                  ? (local_45(true),
                    local_43(arg.flowExpiresIn),
                    local_49(imported_52))
                  : local_59());
            },
      );
    }
  };
  const local_67 = (arg) => {
    arg.preventDefault();
    if (!(!local_28 || !local_30 || local_47)) {
      local_33("password");
      local_50(async () => {
        await local_b41bdddd.confirm(local_28.changeToken, {
          password: local_30,
        });
        local_63();
      }, local_62).finally(() => local_33(null));
    }
  };
  const local_68 = (arg) => {
    if (!(!local_28 || local_47)) {
      local_33(arg);
      local_50(async () => {
        if (arg === "wait") {
          const local = await local_b41bdddd.wait(local_28.changeToken);
          local_61(
            "Заявка принята",
            `${local ? "Номер" : "Почта"} сменится ${fn_9e6a953e(local.appliesAt)}. До этого заявку можно отменить в разделе «Безопасность»; на всех ваших устройствах придёт уведомление.`,
          );
          return;
        }
        const local = await local_b41bdddd.requestProof(
          local_28.changeToken,
          arg,
        );
        local_37(arg);
        local_35(local);
        local_23(Array(local.delivery?.codeLength ?? 6).fill(""));
        local_41(local_f06debfc_3);
        local_3("proofCode");
      }, local_62).finally(() => local_33(null));
    }
  };
  const local_69 = () => {
    if (!local_47) {
      local_49("");
      local_41(0);
      if (local_2 === "proofCode") {
        local_3("proof");
      } else {
        local_3("value");
        local_23([]);
        local_11(null);
        local_13((arg) => arg + 1);
      }
    }
  };
  const local_70 = local_34?.delivery ?? null;
  const local_71 =
    local_2 === "value"
      ? local
        ? "Новый номер"
        : "Новая почта"
      : local_2 === "code"
        ? local_20?.reverseOnly
          ? "Не удалось позвонить"
          : local_20
            ? local_b6c83f75(local_20)
            : "Код из письма"
        : local_2 === "proof"
          ? "Подтвердите смену"
          : local_2 === "proofCode"
            ? local_70
              ? local_b6c83f75(local_70)
              : "Код из письма"
            : local_38?.title;
  const local_72 =
    local_2 === "value"
      ? local
        ? local_54
          ? "Позвоним на него, чтобы убедиться, что номер ваш."
          : "Подтвердите новый номер звонком."
        : "Пришлём на неё код, чтобы убедиться, что почта ваша."
      : local_2 === "code"
        ? local_20?.reverseOnly
          ? "Вы можете позвонить сами или повторить запрос позже."
          : local_20
            ? local_f62db418(local_20)
            : `Отправили на ${local_16}.`
        : local_2 === "proof"
          ? local_60
            ? "Введите пароль от аккаунта или выберите другой способ."
            : "Выберите, как подтвердить, что смену запросили вы."
          : local_2 === "proofCode"
            ? local_70
              ? local_f62db418(local_70)
              : `Отправили на ${local_34?.sentTo ?? ""}.`
            : local_38?.lede;
  const local_73 =
    (local_2 === "code" && local_20) || local_2 === "proof"
      ? local_16
      : local_2 === "proofCode" && local_70 && local_70.channel !== "push"
        ? local_34?.sentTo
        : null;
  const local_74 = local_28
    ? [
        ...local_28.proofs
          .filter((arg) => arg !== "password")
          .map((arg) => [arg, fn_93035bce(arg, arg, arg_2)]),
        ["wait", `Подождать ${fn_ab408515(local_28.waitDays)}`],
      ]
    : [];
  return imported(imported_11, {
    title: local ? "Смена номера" : "Смена почты",
    onClose: arg_3,
    className: imported_40.dialog,
    onBeforeClose: () => !local_47,
    children: imported("div", {
      className: imported_40.dialogContent,
      children: imported("div", {
        className: imported_40.card,
        children: [
          imported("h1", {
            children:
              local_24 && local_2 === "code" ? "Позвоните сами" : local_71,
          }),
          local_73 &&
            imported("p", {
              className: imported_40.number,
              children: local_73,
            }),
          imported("p", {
            className: imported_40.description,
            children:
              local_24 && local_2 === "code"
                ? "Позвоните на выданный номер с этого телефона. Код вводить не нужно."
                : local_72,
          }),
          local_2 === "value" &&
            imported("form", {
              className: imported_40.form,
              onSubmit: local_64,
              children: [
                local
                  ? imported(imported_28, {
                      children: [
                        imported(imported_46, {
                          country: local_4,
                          digits: local_6,
                          error: local_8,
                          disabled: local_47,
                          onChange: (arg, arg_2, arg_3) => {
                            if (arg !== local_4) {
                              local_11(null);
                              local_13((arg) => arg + 1);
                            }
                            local_5(arg);
                            local_7(arg_2);
                            local_9(arg_3);
                            local_49("");
                          },
                        }),
                        imported("div", {
                          className: imported_40.captcha,
                          children: imported(
                            imported_47,
                            {
                              theme:
                                document.documentElement.getAttribute(
                                  "data-theme",
                                ) === "dark"
                                  ? "dark"
                                  : "light",
                              onVerify: local_51,
                              onExpire: local_52,
                              onError: local_52,
                            },
                            local_12,
                          ),
                        }),
                      ],
                    })
                  : imported("label", {
                      className: imported_40.field,
                      children: [
                        "Новая почта",
                        imported("input", {
                          type: "email",
                          autoComplete: "email",
                          placeholder: "you@example.com",
                          maxLength: 255,
                          required: true,
                          value: local_14,
                          onInput: (arg) => {
                            local_15(arg.currentTarget.value);
                            local_49("");
                          },
                          disabled: local_47,
                        }),
                      ],
                    }),
                (local_48 || local_8) &&
                  imported("p", {
                    className: imported_40.error,
                    role: "alert",
                    children: local_48 || local_8,
                  }),
                (!local || local_54) &&
                  imported(imported_9, {
                    type: "submit",
                    size: "lg",
                    fullWidth: true,
                    loading: local_47,
                    disabled:
                      !!local_40 ||
                      !!local_42 ||
                      (local ? !local_56 || !local_10 : !local_14),
                    children: local_40
                      ? `Подождите ${local_40} с`
                      : local_42
                        ? `Новая проверка через ${local_42} с`
                        : "Получить код",
                  }),
                imported(imported_48, {
                  available: local && !!local_56 && local_55,
                  disabled: local_47 || !!local_42 || !local_10,
                  onClick: (arg) => local_64(arg, "reverse"),
                }),
                imported(imported_10, {}),
              ],
            }),
          (local_2 === "code" || local_2 === "proofCode") &&
            imported("form", {
              className: imported_40.form,
              onSubmit: local_65,
              children: [
                imported(imported_49, {
                  visible:
                    local_2 !== "code" || (!local_24 && !local_20?.reverseOnly),
                  children: [
                    imported(imported_41, {
                      value: local_22,
                      length: local_57,
                      onChange: (arg) => {
                        local_23(arg);
                        local_49("");
                      },
                      disabled: local_47,
                      status: local_48 ? "error" : "idle",
                    }),
                    local_48 &&
                      imported("p", {
                        className: imported_40.error,
                        role: "alert",
                        children: local_48,
                      }),
                    imported(imported_9, {
                      type: "submit",
                      size: "lg",
                      fullWidth: true,
                      loading: local_47,
                      disabled: !local_58,
                      children:
                        local_2 === "code" ? "Продолжить" : "Подтвердить",
                    }),
                    imported("button", {
                      type: "button",
                      className: imported_40.link,
                      disabled: local_47 || !!local_40 || local_44,
                      onClick: local_66,
                      children: local_40
                        ? `Отправить код повторно через ${local_40} с`
                        : "Отправить код повторно",
                    }),
                    local_44 &&
                      imported(imported_9, {
                        type: "button",
                        fullWidth: true,
                        size: "lg",
                        disabled: local_47 || !!local_42,
                        onClick: () => local_59(),
                        children: local_42
                          ? `Новая проверка через ${local_42} с`
                          : "Начать новую проверку",
                      }),
                  ],
                }),
                local_2 === "code" &&
                  local &&
                  imported(
                    imported_50,
                    {
                      embedded: true,
                      directEntry: local_26,
                      initialFailure: local_20?.reverseOnly,
                      phone: local_16,
                      flowToken: local_18,
                      authenticated: true,
                      disabled: local_47,
                      onRestart: () => local_59(),
                      onModeChange: (arg) => {
                        local_25(arg);
                        local_49("");
                      },
                      onComplete: async (arg) => {
                        if (
                          !arg.changeToken ||
                          !Array.isArray(arg.proofs) ||
                          typeof arg.waitDays !== "number"
                        ) {
                          throw new Error("Invalid change confirmation");
                        }
                        local_29(arg);
                        local_31("");
                        local_41(0);
                        local_3("proof");
                      },
                    },
                    local_16 + local_18,
                  ),
                local_2 === "code" &&
                  local_20?.reverseOnly &&
                  !local_24 &&
                  imported(imported_28, {
                    children: [
                      local_48 &&
                        imported("p", {
                          className: imported_40.error,
                          role: "alert",
                          children: local_48,
                        }),
                      imported("button", {
                        type: "button",
                        className: imported_40.link,
                        disabled: local_47 || !!local_40,
                        onClick: local_66,
                        children: local_40
                          ? `Повторить через ${local_40} с`
                          : "Позвонить ещё раз",
                      }),
                    ],
                  }),
                imported("button", {
                  type: "button",
                  className: imported_40.back,
                  disabled: local_47,
                  onClick: local_69,
                  children:
                    local_2 === "code"
                      ? local
                        ? "Другой номер"
                        : "Другая почта"
                      : "Другой способ",
                }),
              ],
            }),
          local_2 === "proof" &&
            local_28 &&
            imported("form", {
              className: imported_40.form,
              onSubmit: local_67,
              children: [
                local_60 &&
                  imported(imported_28, {
                    children: [
                      imported("label", {
                        className: imported_40.field,
                        children: [
                          "Пароль",
                          imported("input", {
                            type: "password",
                            autoComplete: "current-password",
                            placeholder: "Пароль от аккаунта",
                            maxLength: 100,
                            value: local_30,
                            onInput: (arg) => {
                              local_31(arg.currentTarget.value);
                              local_49("");
                            },
                            disabled: local_47,
                          }),
                        ],
                      }),
                      imported(imported_9, {
                        type: "submit",
                        size: "lg",
                        fullWidth: true,
                        loading: local_47 && local_32 === "password",
                        disabled:
                          !local_30 || (local_47 && local_32 !== "password"),
                        children: "Подтвердить",
                      }),
                    ],
                  }),
                local_48 &&
                  imported("p", {
                    className: imported_40.error,
                    role: "alert",
                    children: local_48,
                  }),
                local_74.map(([arg, arg_2]) =>
                  imported(
                    imported_9,
                    {
                      type: "button",
                      variant: "secondary",
                      size: "lg",
                      fullWidth: true,
                      loading: local_47 && local_32 === arg,
                      disabled: local_47 && local_32 !== arg,
                      onClick: () => local_68(arg),
                      children: arg_2,
                    },
                    arg,
                  ),
                ),
              ],
            }),
          local_2 === "result" &&
            imported(imported_9, {
              size: "lg",
              fullWidth: true,
              onClick: arg_3,
              children: "Готово",
            }),
        ],
      }),
    }),
  });
}
function fn_2a06d949({ onClose: arg, onSaved: arg_2 }) {
  const [local, local_2] = imported_8("");
  const [local_3, local_4] = imported_8("");
  const [local_5, local_6] = imported_8(false);
  const {
    busy: local_7,
    error: local_8,
    setError: local_9,
    run: local_10,
  } = fn_47c8dfb0((arg) => fn_f369556a(arg));
  const local_11 = (arg) => {
    arg.preventDefault();
    if (!local_7) {
      if (!fn_fa99ef8c(local)) {
        local_9(local_12bca483);
        return;
      }
      if (local !== local_3) {
        local_9("Пароли не совпадают.");
        return;
      }
      local_10(async () => {
        await local_b41bdddd.setPassword(local);
        local_2("");
        local_4("");
        local_6(true);
        arg_2();
      });
    }
  };
  return imported(imported_11, {
    title: "Пароль",
    onClose: arg,
    className: imported_40.dialog,
    onBeforeClose: () => !local_7,
    children: imported("div", {
      className: imported_40.dialogContent,
      children: imported("div", {
        className: imported_40.card,
        children: [
          imported("h1", {
            children: local_5 ? "Пароль создан" : "Создать пароль",
          }),
          imported("p", {
            className: imported_40.description,
            children: local_5
              ? "Теперь можно входить с паролем по почте и по номеру."
              : "С паролем можно входить по почте и по номеру без кода.",
          }),
          local_5
            ? imported(imported_9, {
                size: "lg",
                fullWidth: true,
                onClick: arg,
                children: "Готово",
              })
            : imported("form", {
                className: imported_40.form,
                onSubmit: local_11,
                children: [
                  imported("label", {
                    className: imported_40.field,
                    children: [
                      "Новый пароль",
                      imported("input", {
                        type: "password",
                        autoComplete: "new-password",
                        maxLength: 100,
                        required: true,
                        value: local,
                        onInput: (arg) => {
                          local_2(arg.currentTarget.value);
                          local_9("");
                        },
                        disabled: local_7,
                      }),
                    ],
                  }),
                  imported("label", {
                    className: imported_40.field,
                    children: [
                      "Повторите пароль",
                      imported("input", {
                        type: "password",
                        autoComplete: "new-password",
                        maxLength: 100,
                        required: true,
                        value: local_3,
                        onInput: (arg) => {
                          local_4(arg.currentTarget.value);
                          local_9("");
                        },
                        disabled: local_7,
                      }),
                    ],
                  }),
                  imported("p", {
                    className: imported_40.terms,
                    children: local_12bca483,
                  }),
                  local_8 &&
                    imported("p", {
                      className: imported_40.error,
                      role: "alert",
                      children: local_8,
                    }),
                  imported(imported_9, {
                    type: "submit",
                    size: "lg",
                    fullWidth: true,
                    loading: local_7,
                    disabled: !local || !local_3,
                    children: "Создать пароль",
                  }),
                  imported(imported_10, {}),
                ],
              }),
        ],
      }),
    }),
  });
}
function fn_5be740c2({ onChangePassword: arg }) {
  const [local, local_2] = imported_8(null);
  const [local_3, local_4] = imported_8([]);
  const [local_5, local_6] = imported_8("");
  const [local_7, local_8] = imported_8(null);
  const [local_9, local_10] = imported_8(null);
  const [local_11, local_12] = imported_8(false);
  const [local_13, local_14] = imported_8("");
  const local_15 = async () => {
    try {
      const [local, local_2] = await Promise.all([
        local_b41bdddd.methods(),
        local_b41bdddd.pending(),
      ]);
      local_2(local);
      local_4(local_2);
      local_6("");
    } catch {
      local_6("Не удалось загрузить способы входа. Попробуйте ещё раз.");
    }
  };
  imported_23(() => {
    local_15();
  }, []);
  const local_16 = () => {
    local_8(null);
    local_15();
  };
  const local_17 = async (arg) => {
    local_12(true);
    try {
      await local_b41bdddd.cancelPending(arg.id);
      local_4((arg) => arg.filter((arg) => arg.id !== arg.id));
    } catch (error) {
      local_14(fn_f369556a(error, arg.kind));
    } finally {
      local_12(false);
      local_10(null);
    }
  };
  const local_18 = local
    ? local.hasPassword
      ? local.email
        ? null
        : "Привяжите почту, чтобы входить по ней и восстанавливать пароль."
      : "Создайте пароль, чтобы входить по почте и по номеру без кода."
    : null;
  return imported(imported_28, {
    children: [
      imported("div", {
        className: imported_40.rows,
        children: [
          local_5 &&
            imported("div", {
              className: imported_40.error,
              role: "alert",
              children: [
                local_5,
                imported("button", {
                  className: imported_40.link,
                  onClick: () => {
                    local_15();
                  },
                  children: "Повторить",
                }),
              ],
            }),
          imported("div", {
            className: imported_40.row,
            children: [
              imported("div", {
                children: [
                  imported("strong", {
                    children: "Телефон",
                  }),
                  imported("p", {
                    children: local
                      ? local.phone || "Номер не привязан"
                      : "Загрузка…",
                  }),
                ],
              }),
              imported(imported_9, {
                size: "sm",
                disabled: !local,
                onClick: () =>
                  local_8(
                    local?.phone
                      ? {
                          change: "phone",
                        }
                      : "attachPhone",
                  ),
                children: local?.phone ? "Изменить" : "Привязать",
              }),
            ],
          }),
          imported("div", {
            className: imported_40.row,
            children: [
              imported("div", {
                children: [
                  imported("strong", {
                    children: "Почта",
                  }),
                  imported("p", {
                    children: local
                      ? local.email || "Почта не привязана"
                      : "Загрузка…",
                  }),
                ],
              }),
              imported(imported_9, {
                size: "sm",
                disabled: !local,
                onClick: () =>
                  local_8(
                    local?.email
                      ? {
                          change: "email",
                        }
                      : "attachEmail",
                  ),
                children: local?.email ? "Изменить" : "Привязать",
              }),
            ],
          }),
          imported("div", {
            className: imported_40.row,
            children: [
              imported("div", {
                children: [
                  imported("strong", {
                    children: "Пароль",
                  }),
                  imported("p", {
                    children: local
                      ? local.hasPassword
                        ? "Пароль установлен"
                        : "Пароль пока не создан"
                      : "Загрузка…",
                  }),
                ],
              }),
              imported(imported_9, {
                size: "sm",
                disabled: !local,
                onClick: () => {
                  if (local?.hasPassword) {
                    return arg();
                  }
                  return local_8("setPassword");
                },
                children: local?.hasPassword ? "Сменить" : "Создать",
              }),
            ],
          }),
          local_18 &&
            imported("p", {
              className: imported_40.hint,
              children: local_18,
            }),
        ],
      }),
      local_3.length > 0 &&
        imported("div", {
          className: imported_40.rows,
          children: [
            local_3.map((arg) =>
              imported(
                "div",
                {
                  className: imported_40.row,
                  children: [
                    imported("div", {
                      children: [
                        imported("strong", {
                          children:
                            arg.kind === "phone"
                              ? "Смена номера"
                              : "Смена почты",
                        }),
                        imported("p", {
                          children: ["На ", arg.newIdentifier],
                        }),
                        imported("p", {
                          children: ["Сработает ", fn_9e6a953e(arg.appliesAt)],
                        }),
                      ],
                    }),
                    imported(imported_9, {
                      size: "sm",
                      variant: "danger",
                      onClick: () => local_10(arg),
                      children: "Отменить",
                    }),
                  ],
                },
                arg.id,
              ),
            ),
            imported("p", {
              className: imported_40.hint,
              children:
                "Смена применится сама в указанный срок. Если её запросили не вы — отмените заявку и смените пароль.",
            }),
          ],
        }),
      local_7 === "attachPhone" &&
        imported(imported_54, {
          onClose: local_16,
        }),
      local_7 === "attachEmail" &&
        imported(fn_b4e36455, {
          onClose: local_16,
          onAttached: local_16,
        }),
      local_7 === "setPassword" &&
        local &&
        imported(fn_2a06d949, {
          onClose: local_16,
          onSaved: () =>
            local_2({
              ...local,
              hasPassword: true,
            }),
        }),
      typeof local_7 === "object" &&
        local_7 &&
        local &&
        imported(fn_22a725eb, {
          kind: local_7.change,
          methods: local,
          onClose: local_16,
        }),
      local_9 &&
        imported(imported_55, {
          title: "Отменить смену?",
          message: `${local_9.kind === "phone" ? "Номер останется прежним" : "Почта останется прежней"}. Новую смену можно будет начать через сутки.`,
          onDismiss: () => {
            if (!local_11) {
              local_10(null);
            }
          },
          actions: [
            {
              label: "Оставить",
              role: "cancel",
              onClick: () => local_10(null),
            },
            {
              label: "Отменить смену",
              role: "destructive",
              loading: local_11,
              onClick: () => {
                local_17(local_9);
              },
            },
          ],
        }),
      local_13 &&
        imported(imported_55, {
          title: "Не удалось отменить",
          message: local_13,
          onDismiss: () => local_14(""),
          actions: [
            {
              label: "Понятно",
              role: "cancel",
              onClick: () => local_14(""),
            },
          ],
        }),
    ],
  });
}
function fn_db72d620(arg, arg_2, arg_3, arg_4) {
  const local = arg % 10;
  const local_2 = arg % 100;
  if (local_2 >= 11 && local_2 <= 19) {
    return arg_4;
  }
  if (local === 1) {
    return arg_2;
  }
  if (local >= 2 && local <= 4) {
    return arg_3;
  }
  return arg_4;
}
function fn_f162dc64(arg) {
  const local = new Date(arg).getTime();
  if (Number.isNaN(local)) {
    return "—";
  }
  const local_2 = Math.max(0, Math.floor((Date.now() - local) / 1000));
  if (local_2 < 60) {
    return "только что";
  }
  const local_3 = Math.floor(local_2 / 60);
  if (local_3 < 60) {
    return `${local_3} ${fn_db72d620(local_3, "минуту", "минуты", "минут")} назад`;
  }
  const local_4 = Math.floor(local_3 / 60);
  if (local_4 < 24) {
    return `${local_4} ${fn_db72d620(local_4, "час", "часа", "часов")} назад`;
  }
  const local_5 = Math.floor(local_4 / 24);
  if (local_5 < 30) {
    return `${local_5} ${fn_db72d620(local_5, "день", "дня", "дней")} назад`;
  }
  return new Date(arg).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
function fn_43c5b541(arg) {
  if (arg.clientName === "ITD iOS") {
    return "Приложение ИТД · iOS";
  }
  if (arg.clientName === "ITD Android") {
    return "Приложение ИТД · Android";
  }
  const local = arg.clientName ?? "Неизвестное устройство";
  if (arg.osName) {
    return `${local} · ${arg.osName}${arg.osVersion ? ` ${arg.osVersion}` : ""}`;
  }
  return local;
}
function fn_983517b5(arg) {
  const local = [arg.ipCity, arg.ipCountry].filter(Boolean);
  if (local.length) {
    return local.join(", ");
  }
  return "Местоположение неизвестно";
}
function fn_2d43bd11({ type: arg }) {
  switch (arg) {
    case "mobile":
      return imported("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          imported("rect", {
            x: "6",
            y: "2",
            width: "12",
            height: "20",
            rx: "2.5",
          }),
          imported("path", {
            d: "M11 18.5h2",
          }),
        ],
      });
    case "tablet":
      return imported("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          imported("rect", {
            x: "4",
            y: "2.5",
            width: "16",
            height: "19",
            rx: "2.5",
          }),
          imported("path", {
            d: "M11 18h2",
          }),
        ],
      });
    default:
      return imported("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          imported("rect", {
            x: "2.5",
            y: "4",
            width: "19",
            height: "13",
            rx: "2",
          }),
          imported("path", {
            d: "M8.5 21h7M12 17v4",
          }),
        ],
      });
  }
}
function fn_131f0f80({ onChangePassword: arg }) {
  const [local, local_2] = imported_8([]);
  const [local_3, local_4] = imported_8(true);
  const [local_5, local_6] = imported_8(null);
  const [local_7, local_8] = imported_8(null);
  const [local_9, local_10] = imported_8(false);
  const local_11 = imported_25(async () => {
    local_4(true);
    local_6(null);
    try {
      local_2(await local_96437191.list());
    } catch {
      local_6("Не удалось загрузить активные сессии");
    } finally {
      local_4(false);
    }
  }, []);
  imported_23(() => {
    local_11();
  }, [local_11]);
  const [local_12, local_13] = imported_8(null);
  const local_14 = imported_25(
    async (arg) => {
      local_8(arg.id);
      try {
        const { loggedOut: local } = await local_96437191.revoke(
          arg.id,
          arg.isCurrent,
        );
        if (local) {
          await imported_13.getState().logout({
            sessionAlreadyRevoked: true,
          });
          return;
        }
        local_2((arg) => arg.filter((arg) => arg.id !== arg.id));
        imported_32.success("Сессия завершена");
      } catch {
        local_11();
      } finally {
        local_8(null);
      }
    },
    [local_11],
  );
  const local_15 = imported_25(async () => {
    try {
      const local = await local_96437191.revokeOthers();
      local_10(false);
      imported_32.success(
        local > 0 ? `Завершено сессий: ${local}` : "Других активных сессий нет",
      );
      await local_11();
    } catch {}
  }, [local_11]);
  const local_16 = local.reduce((arg, arg_2) => {
    if (arg_2.isCurrent) {
      return arg;
    }
    return arg + 1;
  }, 0);
  return imported(imported_28, {
    children: [
      imported("h2", {
        className: local_98798dac.contentTitle,
        children: "Безопасность",
      }),
      imported(fn_5be740c2, {
        onChangePassword: arg,
      }),
      imported("div", {
        className: local_98798dac.section,
        children: [
          imported("div", {
            className: local_98798dac.settingText,
            style: {
              marginBottom: 12,
            },
            children: [
              imported("span", {
                className: local_98798dac.settingTitle,
                children: "Активные сессии",
              }),
              imported("span", {
                className: local_98798dac.settingDescription,
                children:
                  "Устройства, на которых сейчас выполнен вход в ваш аккаунт",
              }),
            ],
          }),
          local_3
            ? imported(imported_27, {})
            : local_5
              ? imported("div", {
                  className: local_98798dac.saveError,
                  children: local_5,
                })
              : local.length === 0
                ? imported("div", {
                    className: local_98798dac.emptyBlocklist,
                    children: "Активных сессий не найдено",
                  })
                : imported(imported_28, {
                    children: [
                      imported("div", {
                        className: local_98798dac.sessionsList,
                        children: local.map((arg) =>
                          imported(
                            "div",
                            {
                              className: local_98798dac.sessionItem,
                              children: [
                                imported("div", {
                                  className: local_98798dac.sessionIcon,
                                  children: imported(fn_2d43bd11, {
                                    type: arg.deviceType,
                                  }),
                                }),
                                imported("div", {
                                  className: local_98798dac.sessionInfo,
                                  children: [
                                    imported("div", {
                                      className: local_98798dac.sessionDevice,
                                      children: fn_43c5b541(arg),
                                    }),
                                    imported("div", {
                                      className: local_98798dac.sessionTime,
                                      children: [
                                        fn_983517b5(arg),
                                        " · ",
                                        fn_f162dc64(arg.lastUsedAt),
                                      ],
                                    }),
                                  ],
                                }),
                                arg.isCurrent
                                  ? imported("span", {
                                      className:
                                        local_98798dac.sessionCurrentBadge,
                                      children: "Это устройство",
                                    })
                                  : imported("button", {
                                      type: "button",
                                      className: local_98798dac.sessionRemove,
                                      title: "Завершить сессию",
                                      "aria-label": "Завершить сессию",
                                      disabled: local_7 === arg.id,
                                      onClick: () => local_13(arg),
                                      children:
                                        local_7 === arg.id
                                          ? imported(imported_56, {
                                              size: 16,
                                            })
                                          : imported(imported_57, {
                                              size: 16,
                                            }),
                                    }),
                              ],
                            },
                            arg.id,
                          ),
                        ),
                      }),
                      local_16 > 0 &&
                        imported("button", {
                          type: "button",
                          className: local_98798dac.logoutButton,
                          onClick: () => local_10(true),
                          children: "Завершить все другие сессии",
                        }),
                    ],
                  }),
        ],
      }),
      local_12 &&
        imported(imported_70, {
          title: "Завершить сессию?",
          message: `Вы действительно хотите завершить сессию «${fn_43c5b541(local_12)}»? Устройство будет разлогинено.`,
          confirmText: "Завершить",
          danger: true,
          onConfirm: () => local_14(local_12),
          onClose: () => local_13(null),
        }),
      local_9 &&
        imported(imported_70, {
          title: "Завершить все другие сессии?",
          message: `Вы действительно хотите завершить ${local_16} ${fn_db72d620(local_16, "другую сессию", "другие сессии", "других сессий")}? Устройства будут разлогинены.`,
          confirmText: `Завершить все (${local_16})`,
          danger: true,
          onConfirm: local_15,
          onClose: () => local_10(false),
        }),
    ],
  });
}
const local_5f5441cd = imported_18(function (
  { onDirtyChange: arg, onSavingChange: arg_2 },
  arg_3,
) {
  const {
    settings: local,
    fetchSettings: local_2,
    updateSettings: local_3,
  } = imported_58();
  const [local_4, local_5] = imported_8({
    webEnabled: true,
    soundEnabled: true,
    messages: true,
    follows: true,
    reactions: true,
    replies: true,
    mentions: true,
    wallPosts: true,
  });
  const [local_6, local_7] = imported_8(null);
  const [local_8, local_9] = imported_8(false);
  const [local_10, local_11] = imported_8(false);
  const [local_12, local_13] = imported_8(false);
  imported_23(() => {
    if (!local_12 && !local) {
      local_2();
    }
  }, [local_12]);
  imported_23(() => {
    if (local && !local_12) {
      const local = {
        webEnabled: local.webEnabled,
        soundEnabled: local.soundEnabled,
        messages: local.preferences.messages,
        follows: local.preferences.follows,
        reactions: local.preferences.reactions,
        replies: local.preferences.replies,
        mentions: local.preferences.mentions,
        wallPosts: local.preferences.wallPosts,
      };
      local_5(local);
      local_7(local);
      local_9(false);
      local_13(true);
    }
  }, [local, local_12]);
  imported_23(() => {
    arg(local_8);
  }, [local_8]);
  imported_23(() => {
    arg_2(local_10);
  }, [local_10]);
  const local_14 = (arg, arg_2) => {
    const local = {
      ...local_4,
      [arg]: arg_2,
    };
    local_5(local);
    if (local_6) {
      const local = Object.keys(local).some(
        (arg) => local[arg] !== local_6[arg],
      );
      local_9(local);
    }
  };
  const local_15 = async () => {
    if (!(!local_8 || local_10)) {
      local_11(true);
      try {
        await local_3({
          webEnabled: local_4.webEnabled,
          soundEnabled: local_4.soundEnabled,
          preferences: {
            messages: local_4.messages,
            follows: local_4.follows,
            reactions: local_4.reactions,
            replies: local_4.replies,
            mentions: local_4.mentions,
            wallPosts: local_4.wallPosts,
          },
        });
        local_7({
          ...local_4,
        });
        local_9(false);
        imported_32.success("Настройки уведомлений сохранены");
      } catch (error) {
        console.error("Failed to save notification settings:", error);
        imported_32.error("Не удалось сохранить настройки");
      } finally {
        local_11(false);
      }
    }
  };
  const local_16 = () => {
    if (local_6) {
      local_5({
        ...local_6,
      });
      local_9(false);
    }
  };
  imported_26(arg_3, () => ({
    save: local_15,
    discard: local_16,
  }));
  return imported(imported_28, {
    children: [
      imported("h2", {
        className: local_98798dac.contentTitle,
        children: "Уведомления",
      }),
      imported("div", {
        className: local_98798dac.section,
        children: [
          imported("div", {
            className: local_98798dac.sectionTitle,
            children: "Основные",
          }),
          imported("div", {
            className: `${local_98798dac.settingItem} ${local_98798dac.clickable}`,
            onClick: () => local_14("webEnabled", !local_4.webEnabled),
            children: [
              imported("div", {
                className: local_98798dac.settingInfo,
                children: [
                  imported("div", {
                    className: `${local_98798dac.settingIcon} ${local_98798dac.blue}`,
                    children: imported(imported_59, {
                      size: 20,
                    }),
                  }),
                  imported("div", {
                    className: local_98798dac.settingText,
                    children: [
                      imported("span", {
                        className: local_98798dac.settingTitle,
                        children: "Уведомления",
                      }),
                      imported("span", {
                        className: local_98798dac.settingDescription,
                        children: "Включение или отключение всех уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              imported(fn_0acfc694, {
                checked: local_4.webEnabled,
                onChange: (arg) => local_14("webEnabled", arg),
              }),
            ],
          }),
          imported("div", {
            className: `${local_98798dac.settingItem} ${local_98798dac.clickable}`,
            onClick: () => local_14("soundEnabled", !local_4.soundEnabled),
            children: [
              imported("div", {
                className: local_98798dac.settingInfo,
                children: [
                  imported("div", {
                    className: `${local_98798dac.settingIcon} ${local_98798dac.blue}`,
                    children: imported(local_eb61682a, {
                      size: 20,
                    }),
                  }),
                  imported("div", {
                    className: local_98798dac.settingText,
                    children: [
                      imported("span", {
                        className: local_98798dac.settingTitle,
                        children: "Уведомления со звуком",
                      }),
                      imported("span", {
                        className: local_98798dac.settingDescription,
                        children: "Воспроизводить звуки уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              imported(fn_0acfc694, {
                checked: local_4.soundEnabled,
                onChange: (arg) => local_14("soundEnabled", arg),
              }),
            ],
          }),
        ],
      }),
      imported("div", {
        className: local_98798dac.section,
        children: [
          imported("div", {
            className: local_98798dac.sectionTitle,
            children: "Сообщения",
          }),
          imported("div", {
            className: `${local_98798dac.settingItem} ${local_98798dac.clickable}`,
            onClick: () => local_14("messages", !local_4.messages),
            children: [
              imported("div", {
                className: local_98798dac.settingInfo,
                children: [
                  imported("div", {
                    className: `${local_98798dac.settingIcon} ${local_98798dac.blue}`,
                    children: imported(local_8b78497b, {
                      size: 20,
                    }),
                  }),
                  imported("div", {
                    className: local_98798dac.settingText,
                    children: [
                      imported("span", {
                        className: local_98798dac.settingTitle,
                        children: "Новые сообщения",
                      }),
                      imported("span", {
                        className: local_98798dac.settingDescription,
                        children:
                          "Всплывающие уведомления о новых сообщениях на сайте",
                      }),
                    ],
                  }),
                ],
              }),
              imported(fn_0acfc694, {
                checked: local_4.messages,
                onChange: (arg) => local_14("messages", arg),
              }),
            ],
          }),
        ],
      }),
      imported("div", {
        className: local_98798dac.section,
        children: [
          imported("div", {
            className: local_98798dac.sectionTitle,
            children: "Пользователи",
          }),
          imported("div", {
            className: `${local_98798dac.settingItem} ${local_98798dac.clickable}`,
            onClick: () => local_14("follows", !local_4.follows),
            children: [
              imported("div", {
                className: local_98798dac.settingInfo,
                children: [
                  imported("div", {
                    className: `${local_98798dac.settingIcon} ${local_98798dac.blue}`,
                    children: imported(local_c1f17bb2, {
                      size: 20,
                    }),
                  }),
                  imported("div", {
                    className: local_98798dac.settingText,
                    children: [
                      imported("span", {
                        className: local_98798dac.settingTitle,
                        children: "Подписки",
                      }),
                      imported("span", {
                        className: local_98798dac.settingDescription,
                        children: "Уведомления о подписках и запросах в друзья",
                      }),
                    ],
                  }),
                ],
              }),
              imported(fn_0acfc694, {
                checked: local_4.follows,
                onChange: (arg) => local_14("follows", arg),
              }),
            ],
          }),
          imported("div", {
            className: `${local_98798dac.settingItem} ${local_98798dac.clickable}`,
            onClick: () => local_14("wallPosts", !local_4.wallPosts),
            children: [
              imported("div", {
                className: local_98798dac.settingInfo,
                children: [
                  imported("div", {
                    className: `${local_98798dac.settingIcon} ${local_98798dac.blue}`,
                    children: imported(local_8b78497b, {
                      size: 20,
                    }),
                  }),
                  imported("div", {
                    className: local_98798dac.settingText,
                    children: [
                      imported("span", {
                        className: local_98798dac.settingTitle,
                        children: "Посты на стене",
                      }),
                      imported("span", {
                        className: local_98798dac.settingDescription,
                        children: "Уведомления о новых постах на вашей стене",
                      }),
                    ],
                  }),
                ],
              }),
              imported(fn_0acfc694, {
                checked: local_4.wallPosts,
                onChange: (arg) => local_14("wallPosts", arg),
              }),
            ],
          }),
        ],
      }),
      imported("div", {
        className: local_98798dac.section,
        children: [
          imported("div", {
            className: local_98798dac.sectionTitle,
            children: "Посты",
          }),
          imported("div", {
            className: `${local_98798dac.settingItem} ${local_98798dac.clickable}`,
            onClick: () => local_14("reactions", !local_4.reactions),
            children: [
              imported("div", {
                className: local_98798dac.settingInfo,
                children: [
                  imported("div", {
                    className: `${local_98798dac.settingIcon} ${local_98798dac.red}`,
                    children: imported(local_a008ba72, {
                      size: 20,
                    }),
                  }),
                  imported("div", {
                    className: local_98798dac.settingText,
                    children: [
                      imported("span", {
                        className: local_98798dac.settingTitle,
                        children: "Лайки и реакции",
                      }),
                      imported("span", {
                        className: local_98798dac.settingDescription,
                        children:
                          "Уведомления о реакциях на ваши посты и комментарии",
                      }),
                    ],
                  }),
                ],
              }),
              imported(fn_0acfc694, {
                checked: local_4.reactions,
                onChange: (arg) => local_14("reactions", arg),
              }),
            ],
          }),
          imported("div", {
            className: `${local_98798dac.settingItem} ${local_98798dac.clickable}`,
            onClick: () => local_14("replies", !local_4.replies),
            children: [
              imported("div", {
                className: local_98798dac.settingInfo,
                children: [
                  imported("div", {
                    className: `${local_98798dac.settingIcon} ${local_98798dac.blue}`,
                    children: imported(local_8b78497b, {
                      size: 20,
                    }),
                  }),
                  imported("div", {
                    className: local_98798dac.settingText,
                    children: [
                      imported("span", {
                        className: local_98798dac.settingTitle,
                        children: "Комментарии и ответы",
                      }),
                      imported("span", {
                        className: local_98798dac.settingDescription,
                        children: "Уведомления о новых комментариях и ответах",
                      }),
                    ],
                  }),
                ],
              }),
              imported(fn_0acfc694, {
                checked: local_4.replies,
                onChange: (arg) => local_14("replies", arg),
              }),
            ],
          }),
          imported("div", {
            className: `${local_98798dac.settingItem} ${local_98798dac.clickable}`,
            onClick: () => local_14("mentions", !local_4.mentions),
            children: [
              imported("div", {
                className: local_98798dac.settingInfo,
                children: [
                  imported("div", {
                    className: `${local_98798dac.settingIcon} ${local_98798dac.purple}`,
                    children: imported(imported_71, {
                      size: 20,
                    }),
                  }),
                  imported("div", {
                    className: local_98798dac.settingText,
                    children: [
                      imported("span", {
                        className: local_98798dac.settingTitle,
                        children: "Упоминания",
                      }),
                      imported("span", {
                        className: local_98798dac.settingDescription,
                        children: "Уведомления когда вас упоминают в постах",
                      }),
                    ],
                  }),
                ],
              }),
              imported(fn_0acfc694, {
                checked: local_4.mentions,
                onChange: (arg) => local_14("mentions", arg),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});
const local_cf76073a = imported_18(function (
  { onDirtyChange: arg, onSavingChange: arg_2 },
  arg_3,
) {
  const [local, local_2] = imported_8({
    isPrivate: false,
    whoCanPostOnWall: "everyone",
    whoCanSeeMyPostReactions: "everyone",
    whoCanMessageMe: "everyone",
    showLastSeen: true,
  });
  const [local_3, local_4] = imported_8(null);
  const [local_5, local_6] = imported_8(false);
  const [local_7, local_8] = imported_8(false);
  const [local_9, local_10] = imported_8(false);
  const [local_11, local_12] = imported_8(false);
  const [local_13, local_14] = imported_8([]);
  const [local_15, local_16] = imported_8(null);
  const [local_17, local_18] = imported_8(true);
  const [local_19, local_20] = imported_8(false);
  const [local_21, local_22] = imported_8(false);
  imported_23(() => {
    local_23();
    if (!local_21) {
      local_24();
    }
  }, []);
  imported_23(() => {
    arg(local_5);
  }, [local_5]);
  imported_23(() => {
    arg_2(local_7);
  }, [local_7]);
  const local_23 = async () => {
    if (!local_11) {
      local_10(true);
    }
    try {
      const local = await imported_24.getPrivacySettings();
      const local_2 = {
        isPrivate: local.isPrivate ?? false,
        whoCanPostOnWall: local.whoCanPostOnWall ?? "everyone",
        whoCanSeeMyPostReactions: local.whoCanSeeMyPostReactions ?? "everyone",
        whoCanMessageMe: local.whoCanMessageMe ?? "everyone",
        showLastSeen: local.showLastSeen ?? true,
      };
      local_2(local_2);
      local_4(local_2);
      local_6(false);
      local_12(true);
    } catch (error) {
      console.error("Failed to load privacy settings:", error);
    } finally {
      local_10(false);
    }
  };
  const local_24 = async (arg) => {
    if (!local_19) {
      local_20(true);
      try {
        const local = await imported_60.getBlockedUsers({
          cursor: arg,
          limit: 20,
        });
        local_14(arg ? (arg) => [...arg, ...local.users] : local.users);
        local_16(local.nextCursor);
        local_18(local.hasMore);
        local_22(true);
      } catch (error) {
        console.error("Failed to load blocked users:", error);
      } finally {
        local_20(false);
      }
    }
  };
  const local_25 = async (arg) => {
    try {
      await imported_60.unblockUser(arg);
      local_14((arg) => arg.filter((arg) => arg.id !== arg));
      imported_32.success("Пользователь разблокирован");
    } catch (error) {
      console.error("Failed to unblock user:", error);
      imported_32.error("Не удалось разблокировать пользователя");
    }
  };
  const local_26 = () => {
    if (local_17 && local_15) {
      local_24(local_15);
    }
  };
  const local_27 = (arg, arg_2) => {
    const local = {
      ...local,
      [arg]: arg_2,
    };
    local_2(local);
    if (local_3) {
      const local = Object.keys(local).some(
        (arg) => local[arg] !== local_3[arg],
      );
      local_6(local);
    }
  };
  const local_28 = async () => {
    if (!(!local_5 || local_7)) {
      local_8(true);
      try {
        await imported_24.updatePrivacySettings({
          whoCanPostOnWall: local.whoCanPostOnWall,
          whoCanSeeMyPostReactions: local.whoCanSeeMyPostReactions,
          whoCanMessageMe: local.whoCanMessageMe,
          showLastSeen: local.showLastSeen,
        });
        local_4({
          ...local,
        });
        local_6(false);
        imported_32.success("Настройки приватности сохранены");
      } catch (error) {
        console.error("Failed to save privacy settings:", error);
        imported_32.error("Не удалось сохранить настройки");
      } finally {
        local_8(false);
      }
    }
  };
  const local_29 = () => {
    if (local_3) {
      local_2({
        ...local_3,
      });
      local_6(false);
    }
  };
  imported_26(arg_3, () => ({
    save: local_28,
    discard: local_29,
  }));
  return imported(imported_28, {
    children: [
      imported("h2", {
        className: local_98798dac.contentTitle,
        children: "Приватность",
      }),
      local_11 &&
        imported("div", {
          className: local_98798dac.section,
          children: [
            imported("div", {
              className: local_98798dac.settingItem,
              children: [
                imported("div", {
                  className: local_98798dac.settingInfo,
                  children: imported("div", {
                    className: local_98798dac.settingText,
                    children: [
                      imported("span", {
                        className: local_98798dac.settingTitle,
                        children: "Стена",
                      }),
                      imported("span", {
                        className: local_98798dac.settingDescription,
                        children: "Кто может писать на вашей стене",
                      }),
                    ],
                  }),
                }),
                imported(fn_1845876d, {
                  value: local.whoCanPostOnWall,
                  options: local_341987ca,
                  onChange: (arg) => local_27("whoCanPostOnWall", arg),
                }),
              ],
            }),
            imported("div", {
              className: local_98798dac.settingItem,
              children: [
                imported("div", {
                  className: local_98798dac.settingInfo,
                  children: imported("div", {
                    className: local_98798dac.settingText,
                    children: [
                      imported("span", {
                        className: local_98798dac.settingTitle,
                        children: "Лайки",
                      }),
                      imported("span", {
                        className: local_98798dac.settingDescription,
                        children: "Кто может видеть ваши лайкнутые посты",
                      }),
                    ],
                  }),
                }),
                imported(fn_1845876d, {
                  value: local.whoCanSeeMyPostReactions,
                  options: local_341987ca,
                  onChange: (arg) => local_27("whoCanSeeMyPostReactions", arg),
                }),
              ],
            }),
            imported("div", {
              className: local_98798dac.settingItem,
              children: [
                imported("div", {
                  className: local_98798dac.settingInfo,
                  children: imported("div", {
                    className: local_98798dac.settingText,
                    children: [
                      imported("span", {
                        className: local_98798dac.settingTitle,
                        children: "Сообщения",
                      }),
                      imported("span", {
                        className: local_98798dac.settingDescription,
                        children: "Кто может писать вам сообщения",
                      }),
                    ],
                  }),
                }),
                imported(fn_1845876d, {
                  value: local.whoCanMessageMe,
                  options: local_6c3e9196,
                  onChange: (arg) => local_27("whoCanMessageMe", arg),
                }),
              ],
            }),
            imported("div", {
              className: `${local_98798dac.settingItem} ${local_98798dac.clickable}`,
              onClick: () => local_27("showLastSeen", !local.showLastSeen),
              children: [
                imported("div", {
                  className: local_98798dac.settingInfo,
                  children: imported("div", {
                    className: local_98798dac.settingText,
                    children: [
                      imported("span", {
                        className: local_98798dac.settingTitle,
                        children: "Онлайн-статус",
                      }),
                      imported("span", {
                        className: local_98798dac.settingDescription,
                        children:
                          "Показывать онлайн и время визита. При отключении точный статус других тоже скрыт.",
                      }),
                    ],
                  }),
                }),
                imported(fn_0acfc694, {
                  checked: local.showLastSeen,
                  onChange: (arg) => local_27("showLastSeen", arg),
                }),
              ],
            }),
          ],
        }),
      imported("div", {
        className: local_98798dac.section,
        children: [
          imported("div", {
            className: local_98798dac.sectionTitle,
            children: "Чёрный список",
          }),
          local_19 && !local_21
            ? imported(imported_27, {})
            : local_21
              ? imported(imported_28, {
                  children:
                    local_13.length === 0
                      ? imported("div", {
                          className: local_98798dac.emptyBlocklist,
                          children: "Чёрный список пуст",
                        })
                      : imported("div", {
                          className: local_98798dac.blockedUsersList,
                          children: [
                            local_13.map((arg) =>
                              imported(
                                "div",
                                {
                                  className: local_98798dac.blockedUserItem,
                                  children: [
                                    imported(imported_61, {
                                      src: arg.avatar,
                                      alt: arg.displayName,
                                      size: "sm",
                                    }),
                                    imported("div", {
                                      className: local_98798dac.blockedUserInfo,
                                      children: [
                                        imported("span", {
                                          className:
                                            local_98798dac.blockedUserName,
                                          children: arg.displayName,
                                        }),
                                        arg.username &&
                                          imported("span", {
                                            className:
                                              local_98798dac.blockedUserUsername,
                                            children: ["@", arg.username],
                                          }),
                                      ],
                                    }),
                                    imported(imported_9, {
                                      size: "sm",
                                      variant: "secondary",
                                      onClick: () => local_25(arg.id),
                                      children: "Разблокировать",
                                    }),
                                  ],
                                },
                                arg.id,
                              ),
                            ),
                            local_17 &&
                              imported(imported_9, {
                                variant: "secondary",
                                onClick: local_26,
                                disabled: local_19,
                                loading: local_19,
                                children: "Загрузить ещё",
                              }),
                          ],
                        }),
                })
              : null,
        ],
      }),
    ],
  });
});
const local_02ce1672 = "c_note";
const local_bc406f03 = "c_nicknameRow";
const local_cd23a337_3 = "c_error";
const local_1167d74d = "c_avatarRow";
const local_60207a9f = "c_avatarPreview";
const local_2ad5f236 = "c_avatarActions";
const local_cd953748 = "c_danger";
const local_b13cd586 = {
  note: local_02ce1672,
  nicknameRow: local_bc406f03,
  error: local_cd23a337_3,
  avatarRow: local_1167d74d,
  avatarPreview: local_60207a9f,
  avatarActions: local_2ad5f236,
  danger: local_cd953748,
};
async function fn_a0727a08(arg) {
  const [local, local_2, local_3] = await Promise.allSettled(arg);
  const local_4 = [local, local_2, local_3].filter(
    (arg) => arg.status === "rejected",
  ).length;
  return {
    profile: local.status === "fulfilled" ? local.value : null,
    nicknames: local_2.status === "fulfilled" ? local_2.value : null,
    avatar: local_3.status === "fulfilled" ? local_3.value : null,
    failed: local_4,
  };
}
function fn_fd72cadd() {
  const local = imported_62()?.id;
  const [local_2, local_3] = imported_8(null);
  const [local_4, local_5] = imported_8(null);
  const [local_6, local_7] = imported_8(null);
  const [local_8, local_9] = imported_8(false);
  const [local_10, local_11] = imported_8(true);
  const [local_12, local_13] = imported_8(false);
  const [local_14, local_15] = imported_8("");
  const local_16 = imported_25(async () => {
    if (local) {
      local_11(true);
      local_15("");
      try {
        const local = await fn_a0727a08([
          imported_63.profile(local),
          imported_63.nicknames(),
          imported_63.profileAvatar(),
        ]);
        local_3(local.profile);
        local_5(local.nicknames);
        local_7(local.avatar);
        if (local.failed === 3) {
          local_15("Не удалось загрузить настройки ивента.");
        } else if (local.failed > 0) {
          local_15("Часть настроек не загрузилась.");
        }
      } finally {
        local_11(false);
      }
    }
  }, [local]);
  imported_23(() => {
    local_16();
  }, [local_16]);
  const local_17 = async (arg) => {
    if (!(!local || !local_2?.curtains.hasCurtains || local_12)) {
      local_13(true);
      try {
        await imported_63.setCurtains(local, arg);
        local_3(
          (arg) =>
            arg && {
              ...arg,
              curtains: {
                ...arg.curtains,
                closed: arg,
              },
            },
        );
        imported_64(local);
        imported_32.success(arg ? "Шторы задёрнуты" : "Шторы открыты");
      } catch {
        imported_32.error("Не удалось изменить положение штор");
      } finally {
        local_13(false);
      }
    }
  };
  const local_18 = async (arg) => {
    if (!local || !local_4 || local_12) {
      return;
    }
    const local = arg || null;
    if (local !== local_4.active) {
      local_13(true);
      try {
        const local = await imported_63.setActiveNickname(local);
        local_5(
          (arg) =>
            arg && {
              ...arg,
              active: local.nickname,
            },
        );
        window.dispatchEvent(
          new CustomEvent("event-nickname-changed", {
            detail: {
              userId: local,
              label: local.nickname,
            },
          }),
        );
        imported_64(local);
        imported_32.success(
          local.nickname ? "Кликуха выбрана" : "Кликуха снята",
        );
      } catch {
        imported_32.error("Не удалось сменить кликуху");
      } finally {
        local_13(false);
      }
    }
  };
  const local_19 = async () => {
    if (!(!local_6?.active || local_12)) {
      local_13(true);
      try {
        await imported_63.removeProfileAvatar();
        local_7(
          (arg) =>
            arg && {
              ...arg,
              active: null,
            },
        );
        await imported_13.getState().fetchProfile();
        if (local) {
          const local = imported_13.getState().profile;
          if (local?.id === local) {
            imported_65
              .getState()
              .replaceAuthorAvatar(local, local.avatar ?? null);
          }
          imported_64(local);
        }
        imported_32.success("Аватарка удалена");
      } catch (error) {
        imported_32.error("Не удалось удалить аватарку");
        throw error;
      } finally {
        local_13(false);
      }
    }
  };
  const local_20 = local_2?.curtains;
  const local_21 = [
    {
      value: "",
      label: "Без кликухи",
    },
    ...(local_4?.owned ?? []).map((arg) => ({
      value: arg,
      label: arg.toLocaleLowerCase("ru-RU"),
    })),
  ];
  return imported(imported_28, {
    children: [
      imported("h2", {
        className: local_98798dac.contentTitle,
        children: "Ивент",
      }),
      local_10 &&
        imported("p", {
          className: local_b13cd586.note,
          children: "Загрузка настроек…",
        }),
      local_14 &&
        imported("div", {
          className: local_b13cd586.error,
          role: "alert",
          children: [
            imported("span", {
              children: local_14,
            }),
            imported("button", {
              type: "button",
              onClick: () => {
                local_16();
              },
              children: "Повторить",
            }),
          ],
        }),
      !local_10 &&
        (local_2 || local_4 || local_6) &&
        imported("div", {
          className: local_98798dac.section,
          children: [
            local_2 &&
              imported(imported_28, {
                children: [
                  imported("div", {
                    className: local_98798dac.settingItem,
                    children: [
                      imported("div", {
                        className: local_98798dac.settingInfo,
                        children: imported("div", {
                          className: local_98798dac.settingText,
                          children: [
                            imported("span", {
                              className: local_98798dac.settingTitle,
                              children: "Задёрнуть шторы",
                            }),
                            imported("span", {
                              className: local_98798dac.settingDescription,
                              children: "Гости увидят полотно вместо профиля",
                            }),
                          ],
                        }),
                      }),
                      imported(fn_0acfc694, {
                        checked: local_20?.closed ?? false,
                        disabled: !local_20?.hasCurtains || local_12,
                        onChange: (arg) => {
                          local_17(arg);
                        },
                      }),
                    ],
                  }),
                  !local_20?.hasCurtains &&
                    imported("p", {
                      className: local_b13cd586.note,
                      children:
                        "Шторы можно закрывать, когда сбор достигнет 100 мелков.",
                    }),
                ],
              }),
            local_4 &&
              local_4.owned.length > 0 &&
              imported("div", {
                className: `${local_98798dac.settingItem} ${local_b13cd586.nicknameRow}`,
                children: [
                  imported("div", {
                    className: local_98798dac.settingInfo,
                    children: imported("div", {
                      className: local_98798dac.settingText,
                      children: [
                        imported("span", {
                          className: local_98798dac.settingTitle,
                          children: "Кликуха",
                        }),
                        imported("span", {
                          className: local_98798dac.settingDescription,
                          children: "Золотом после имени в профиле",
                        }),
                      ],
                    }),
                  }),
                  imported(fn_1845876d, {
                    value: local_4.active ?? "",
                    options: local_21,
                    disabled: local_12,
                    onChange: (arg) => {
                      local_18(arg);
                    },
                  }),
                ],
              }),
            local_6?.active &&
              imported("div", {
                className: `${local_98798dac.settingItem} ${local_b13cd586.avatarRow}`,
                children: [
                  imported("div", {
                    className: local_98798dac.settingInfo,
                    children: [
                      imported("img", {
                        className: local_b13cd586.avatarPreview,
                        src: local_6.active.url,
                        alt: "Текущая аватарка",
                      }),
                      imported("div", {
                        className: local_98798dac.settingText,
                        children: [
                          imported("span", {
                            className: local_98798dac.settingTitle,
                            children: "Аватарка",
                          }),
                          imported("span", {
                            className: local_98798dac.settingDescription,
                            children: "Своя картинка установлена",
                          }),
                        ],
                      }),
                    ],
                  }),
                  imported("div", {
                    className: local_b13cd586.avatarActions,
                    children: imported("button", {
                      type: "button",
                      className: local_b13cd586.danger,
                      disabled: local_12,
                      onClick: () => local_9(true),
                      children: "Удалить",
                    }),
                  }),
                ],
              }),
          ],
        }),
      local_8 &&
        imported(imported_70, {
          title: "Удалить аватарку?",
          message:
            "В профиле снова появится ваш эмодзи. Потраченное право установки не вернётся.",
          confirmText: "Удалить",
          danger: true,
          onConfirm: local_19,
          onClose: () => local_9(false),
        }),
    ],
  });
}
const local_f81543a8 = [
  {
    id: "account",
    icon: imported_67,
    label: "Аккаунт",
    color: "#3b82f6",
  },
  {
    id: "payment",
    icon: local_840b6115,
    label: "Оплата",
    color: "#34c759",
  },
  {
    id: "appearance",
    icon: imported_68,
    label: "Оформление",
    color: "#8b5cf6",
  },
  {
    id: "security",
    icon: local_8b255c95,
    label: "Безопасность",
    color: "#ef4444",
  },
  {
    id: "privacy",
    icon: local_fb3663a3,
    label: "Приватность",
    color: "#f59e0b",
  },
  {
    id: "notifications",
    icon: imported_59,
    label: "Уведомления",
    color: "#ec4899",
  },
  {
    id: "event",
    icon: imported_68,
    label: "Ивент",
    color: "#a855f7",
  },
];
export function fn_76ac1a68({ onClose: arg }) {
  const local = imported_66();
  const local_2 = local_f81543a8.filter(
    (arg) => arg.id !== "event" || local.status === "allowed",
  );
  const local_3 = imported_20();
  const [local_4, local_5] = imported_8("account");
  imported_23(() => {
    if (local.status !== "allowed" && local_4 === "event") {
      local_5("account");
    }
  }, [local.status, local_4]);
  const [local_6, local_7] = imported_8(false);
  const [local_8, local_9] = imported_8(false);
  const [local_10, local_11] = imported_8({});
  const [local_12, local_13] = imported_8({});
  const local_14 = imported_22(null);
  const local_15 = imported_22(null);
  const local_16 = imported_22(null);
  const local_17 = Object.values(local_10).some(Boolean);
  const local_18 = Object.values(local_12).some(Boolean);
  const local_19 = imported_25(
    (arg) => (arg) => {
      local_11((arg) => ({
        ...arg,
        [arg]: arg,
      }));
    },
    [],
  );
  const local_20 = imported_25(
    (arg) => (arg) => {
      local_13((arg) => ({
        ...arg,
        [arg]: arg,
      }));
    },
    [],
  );
  const local_21 = async () => {
    const local = [];
    if (local_10.account) {
      local.push(local_14.current?.save() ?? Promise.resolve());
    }
    if (local_10.notifications) {
      local.push(local_15.current?.save() ?? Promise.resolve());
    }
    if (local_10.privacy) {
      local.push(local_16.current?.save() ?? Promise.resolve());
    }
    await Promise.all(local);
  };
  const local_22 = (arg) => {
    if (arg !== local_4) {
      local_11({});
      local_5(arg);
    }
  };
  const local_23 = (arg) => {
    local_11({});
    local_5(arg);
    local_7(true);
  };
  const local_24 = () => {
    local_11({});
    local_7(false);
  };
  const local_25 = () => {
    arg();
  };
  const local_26 = () => {
    switch (local_4) {
      case "account":
        return imported(local_0a5f369b, {
          ref: local_14,
          onDirtyChange: local_19("account"),
          onSavingChange: local_20("account"),
          onClose: arg,
        });
      case "payment":
        return imported(fn_6dcb824e, {});
      case "appearance":
        return imported(fn_92ca2ba3, {});
      case "security":
        return imported(fn_131f0f80, {
          onChangePassword: () => local_9(true),
        });
      case "notifications":
        return imported(local_5f5441cd, {
          ref: local_15,
          onDirtyChange: local_19("notifications"),
          onSavingChange: local_20("notifications"),
        });
      case "privacy":
        return imported(local_cf76073a, {
          ref: local_16,
          onDirtyChange: local_19("privacy"),
          onSavingChange: local_20("privacy"),
        });
      case "event":
        if (local.status === "allowed") {
          return imported(fn_fd72cadd, {});
        }
        return null;
    }
  };
  if (local_8) {
    return imported(fn_2572ab35, {
      onClose: arg,
      onBack: () => local_9(false),
    });
  }
  const local_27 = local_17
    ? imported("div", {
        className: local_98798dac.actionBar,
        children: [
          imported(imported_9, {
            variant: "secondary",
            onClick: local_25,
            children: "Отмена",
          }),
          imported(imported_9, {
            variant: "primary",
            onClick: local_21,
            disabled: local_18,
            loading: local_18,
            children: "Сохранить",
          }),
        ],
      })
    : null;
  return imported(imported_11, {
    onClose: local_25,
    frameless: true,
    size: "wide",
    className: local_98798dac.modalContainer,
    children: imported("div", {
      className: local_98798dac.settingsModal,
      children: local_3
        ? imported("div", {
            className: `${local_98798dac.mobilePager} ${local_6 ? local_98798dac.detailOpen : ""}`,
            children: [
              imported("div", {
                className: local_98798dac.mobileScreen,
                children: [
                  imported("div", {
                    className: local_98798dac.mobileMenuTitle,
                    children: "Настройки",
                  }),
                  imported("nav", {
                    className: local_98798dac.mobileMenu,
                    children: [
                      local_2.map((arg) =>
                        imported(
                          "button",
                          {
                            type: "button",
                            className: local_98798dac.mobileMenuItem,
                            onClick: () => local_23(arg.id),
                            children: [
                              imported("span", {
                                className: local_98798dac.mobileMenuIcon,
                                style: {
                                  background: arg.color,
                                },
                                children: imported(arg.icon, {
                                  size: 16,
                                }),
                              }),
                              imported("span", {
                                children: arg.label,
                              }),
                              imported("span", {
                                className: local_98798dac.mobileMenuChevron,
                                children: imported(imported_73, {
                                  size: 18,
                                }),
                              }),
                            ],
                          },
                          arg.id,
                        ),
                      ),
                      imported("a", {
                        className: local_98798dac.mobileMenuItem,
                        href: "/legal",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Правовые документы",
                      }),
                    ],
                  }),
                ],
              }),
              imported("div", {
                className: local_98798dac.mobileScreen,
                children: [
                  imported("div", {
                    className: local_98798dac.mobileHeader,
                    children: [
                      imported("button", {
                        type: "button",
                        className: local_98798dac.mobileBack,
                        onClick: local_24,
                        children: [
                          imported(imported_74, {
                            size: 22,
                          }),
                          imported("span", {
                            children: "Настройки",
                          }),
                        ],
                      }),
                      imported("span", {
                        className: local_98798dac.mobileHeaderTitle,
                        children: local_2.find((arg) => arg.id === local_4)
                          ?.label,
                      }),
                    ],
                  }),
                  imported("div", {
                    className: local_98798dac.content,
                    children: local_26(),
                  }),
                  local_27,
                ],
              }),
            ],
          })
        : imported(imported_28, {
            children: [
              imported("div", {
                className: local_98798dac.sidebar,
                children: [
                  imported("div", {
                    className: local_98798dac.sidebarTitle,
                    children: "Настройки",
                  }),
                  imported("nav", {
                    children: local_2.map((arg) =>
                      imported(
                        "button",
                        {
                          type: "button",
                          className: `${local_98798dac.navItem} ${local_4 === arg.id ? local_98798dac.active : ""}`,
                          onClick: () => local_22(arg.id),
                          children: [
                            imported(arg.icon, {
                              size: 24,
                            }),
                            imported("span", {
                              children: arg.label,
                            }),
                          ],
                        },
                        arg.id,
                      ),
                    ),
                  }),
                ],
              }),
              imported("div", {
                className: local_98798dac.contentWrapper,
                children: [
                  imported("div", {
                    className: local_98798dac.content,
                    children: local_26(),
                  }),
                  local_27,
                ],
              }),
            ],
          }),
    }),
  });
}
export {
  GiftSubscriptionModal,
  SubscriptionModal,
  subscriptionApi,
  useSettingsStore,
};
