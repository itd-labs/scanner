import {
  ak as imported,
  symbol_042 as imported_2,
  symbol_073 as imported_3,
  a6 as imported_4,
  a7 as imported_5,
  symbol_056 as imported_6,
  symbol_003 as imported_7,
  symbol_014 as imported_8,
  symbol_039 as imported_9,
  symbol_075 as imported_10,
  symbol_076 as imported_11,
  symbol_037 as imported_12,
  symbol_043 as imported_13,
  symbol_040 as imported_14,
  symbol_044 as imported_15,
  symbol_066 as imported_16,
  symbol_006 as imported_17,
  symbol_045 as imported_18,
  symbol_002 as imported_19,
  symbol_077 as imported_20,
  symbol_067 as imported_21,
  symbol_069 as imported_22,
  symbol_046 as imported_23,
  a5 as imported_24,
  symbol_063 as imported_25,
  aq as imported_26,
  symbol_057 as imported_27,
  symbol_001 as imported_28,
  symbol_061 as imported_29,
  symbol_058 as imported_30,
  symbol_027 as imported_31,
  symbol_047 as imported_32,
  symbol_072 as imported_33,
  symbol_065 as imported_34,
  symbol_048 as imported_35,
  symbol_049 as imported_36,
  a2 as imported_37,
  symbol_050 as imported_38,
  symbol_004 as imported_39,
  symbol_051 as imported_40,
  symbol_071 as imported_41,
  symbol_020 as useSettingsStore,
} from "../entry.js";
import { C as imported_42 } from "../shared/chunk-3d5994e265d4.js";
import { I as imported_43 } from "../components/icon-info.js";
import { I as imported_44 } from "../components/icon-notification-mention.js";
import { I as imported_45 } from "../components/icon-chevron-right.js";
import { I as imported_46 } from "../components/icon-chevron-left.js";
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
const local_4942f276 = () => {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
};
const local_fe95a305 = () => {
  if (typeof window !== "undefined") {
    const local = localStorage.getItem("theme-storage");
    if (local) {
      try {
        return JSON.parse(local).state?.theme || "system";
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
const local_5e175cca = imported()(
  imported_2(
    (arg) => ({
      theme: local_fe95a305(),
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
      if (local_5e175cca.getState().theme === "system") {
        local_655b2db1("system");
      }
    });
}
const local_a008ba72 = ({ size: arg = 18 }) =>
  imported_3("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      imported_3("path", {
        fill: "currentColor",
        d: "M7.17 14.288c.03.12.064.238.102.354.213.661.543 1.251.926 1.772a3.964 3.964 0 0 1-2.036-1.164.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328c.16.014.32.025.477.036ZM9.002 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .277-.008.517-.015.74-.006.202-.011.384-.01.56-.253.05-.49.126-.706.213a3.832 3.832 0 0 0-.803-.23v.001a5.083 5.083 0 0 0-2.274.149l-.009.003-.01.003c-2.594.808-3.54 3.168-3.364 5.22-1.696-.11-3.138-.427-3.744-1.285-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Z",
      }),
      imported_3("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M17.758 11.709a2.743 2.743 0 0 0-1.751-1.575 3.024 3.024 0 0 0-1.38-.095c-.423.069-.806.313-1.128.54-.311-.218-.704-.466-1.129-.535a3.083 3.083 0 0 0-1.378.09c-1.768.55-2.312 2.412-1.818 3.893.77 2.377 4.084 3.888 4.225 3.952a.247.247 0 0 0 .2 0c.139-.063 3.404-1.548 4.22-3.95.261-.783.239-1.607-.061-2.32Z",
        clipRule: "evenodd",
      }),
    ],
  });
const local_8b78497b = ({ size: arg = 18 }) =>
  imported_3("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      imported_3("path", {
        fill: "currentColor",
        d: "M6.694 14.252c.453.038.891.066 1.317.084.034.63.168 1.26.406 1.864-.021.07-.043.153-.065.243a3.946 3.946 0 0 1-2.19-1.193.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328ZM9.001 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .277-.008.517-.015.74-.005.17-.01.327-.01.477a5.988 5.988 0 0 0-4.44 1.75l-.001.002a6.01 6.01 0 0 0-1.734 3.733c-2.108-.05-4.014-.307-4.735-1.328-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm1.963 9.894a3.977 3.977 0 0 0-.004.004l.004-.004Z",
      }),
      imported_3("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.83 11.17a4.008 4.008 0 0 0-5.659 0 4.017 4.017 0 0 0-.805 4.506c.077.192.132.337.132.456 0 .141-.06.316-.117.486-.111.327-.238.698.034.969.27.271.642.143.97.031.167-.057.34-.117.48-.117.122 0 .277.062.455.134a4.019 4.019 0 0 0 4.51-.807 4.007 4.007 0 0 0 0-5.659Z",
        clipRule: "evenodd",
      }),
    ],
  });
const local_eb61682a = ({ size: arg = 18 }) =>
  imported_3("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      imported_3("path", {
        fill: "currentColor",
        d: "M6.694 14.252c.479.04.941.069 1.389.087a4.72 4.72 0 0 0 .067 2.063 3.968 3.968 0 0 1-1.988-1.152.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328ZM9.001 1.5c3.269 0 4.905 2.546 5.18 4.657-1.042.362-1.842 1.336-1.842 2.559v1.764c-1.79.208-3.352 1.368-4.009 3.012-2.228-.033-4.286-.261-5.042-1.332-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm3.919 10.944a2.894 2.894 0 0 1 .191.007l-.191-.007Z",
      }),
      imported_3("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.835 15.172c0-.01.006-.018.006-.028v-4.477a3.56 3.56 0 0 0 1.259.5c.404.077.801-.17.885-.556.083-.387-.18-.764-.586-.842-1.136-.22-1.591-1.27-1.608-1.31a.756.756 0 0 0-.838-.446.725.725 0 0 0-.614.703v4.094a2.99 2.99 0 0 0-1.42-.365c-1.61 0-2.919 1.246-2.919 2.778C10 16.754 11.31 18 12.92 18c1.61 0 2.92-1.245 2.92-2.777 0-.018-.005-.033-.005-.051Z",
        clipRule: "evenodd",
      }),
    ],
  });
const local_c1f17bb2 = ({ size: arg = 18 }) =>
  imported_3("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      imported_3("path", {
        fill: "currentColor",
        d: "M6.694 14.252C7.151 14.291 7.593 14.318 8.021 14.336 8.121 15.23 8.613 16.004 9.322 16.484 9.215 16.494 9.106 16.5 8.997 16.5H8.995C7.933 16.5 6.927 16.055 6.162 15.25 6.077 15.163 6.023 15.051 6.006 14.931 5.989 14.81 6.011 14.687 6.068 14.58 6.186 14.36 6.439 14.233 6.694 14.252ZM9.001 1.5C12.603 1.5 14.223 4.592 14.223 6.786 14.223 7.063 14.216 7.303 14.208 7.525 14.203 7.697 14.199 7.855 14.198 8.007 14.133 8.003 14.067 8 14 8 12.343 8 11 9.343 11 11 9.517 11 8.287 12.076 8.045 13.489 5.928 13.44 4.012 13.185 3.288 12.16 2.942 11.671 2.908 11.069 3.187 10.373 3.838 8.981 3.822 8.464 3.792 7.525 3.784 7.303 3.777 7.062 3.777 6.786 3.777 4.592 5.398 1.5 9.001 1.5ZM13 11C13 10.448 13.448 10 14 10 14.552 10 15 10.448 15 11V17C15 17.552 14.552 18 14 18 13.448 18 13 17.552 13 17V11Z",
      }),
      imported_3("path", {
        fill: "currentColor",
        d: "M11 15C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H11Z",
      }),
    ],
  });
const local_645d4878 = ({ size: arg = 24 }) =>
  imported_3("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    children: imported_3("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M8.078 10.367c0-.01.006-.019.006-.029V5.636a3.46 3.46 0 0 0 1.257.526.749.749 0 1 0 .299-1.469c-1.135-.23-1.589-1.333-1.606-1.375a.75.75 0 0 0-1.45.269v4.3a2.873 2.873 0 0 0-1.418-.384 2.92 2.92 0 0 0-2.916 2.918 2.92 2.92 0 0 0 2.916 2.916 2.92 2.92 0 0 0 2.917-2.916c0-.019-.005-.035-.005-.054ZM21.75 6.503a.749.749 0 0 0-1.067-.68c-2.557 1.189-5.245 1.683-7.982 1.469a.752.752 0 0 0-.568.196.752.752 0 0 0-.24.55v7.697a2.866 2.866 0 0 0-1.402-.377 2.907 2.907 0 0 0-2.903 2.904 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903v-6.925c.183.007.368.023.552.023 2.151 0 4.26-.427 6.303-1.228V14.2a2.87 2.87 0 0 0-1.403-.377 2.906 2.906 0 0 0-2.903 2.903 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903V6.502Z",
      "clip-rule": "evenodd",
    }),
  });
const local_4c6f99c7 = ({ size: arg = 20 }) =>
  imported_3("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 20 20",
    fill: "none",
    children: imported_3("path", {
      fill: "currentColor",
      d: "M9.905 2.501c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.39-1.69 4.06-4.113 4.06H4.113c-2.422 0-4.113-1.67-4.113-4.06V6.56c0-2.391 1.691-4.06 4.113-4.06zm8.053 2.379c.439-.223.954-.2 1.373.064.419.263.669.72.669 1.22v7.675a1.43 1.43 0 0 1-1.412 1.436c-.215 0-.43-.05-.631-.153l-1.481-.748a1.62 1.62 0 0 1-.888-1.457V7.085c0-.621.34-1.18.888-1.456z",
    }),
  });
const local_0ead779e = ({ size: arg = 24 }) =>
  imported_3("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      imported_3("rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "5",
        rx: "2",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      imported_3("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M2 10h20",
      }),
    ],
  });
const local_6b96bea9 = ({ size: arg = 18 }) =>
  imported_3("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 18 18",
    children: imported_3("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 7 4 4 4-4",
    }),
  });
const local_fb3663a3 = ({ size: arg = 24 }) =>
  imported_3("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 24 24",
    children: imported_3("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.723 10.043a.918.918 0 0 0-.658-.261c-1.069 0-1.939.832-1.939 1.853 0 .015 0 .049-.004.06l-.008 1.876c0 .22-.18.392-.41.392a.397.397 0 0 1-.41-.392V5.948c0-.366-.153-.722-.42-.98-.548-.52-1.48-.523-2.045.003-.27.27-.42.618-.42.977v5.034a.401.401 0 0 1-.409.391c-.219 0-.41-.182-.41-.391v-6.61a1.342 1.342 0 0 0-.422-.968 1.408 1.408 0 0 0-.471-.3 1.513 1.513 0 0 0-1.098-.001 1.426 1.426 0 0 0-.783.747c-.072.156-.11.342-.11.522v6.61a.401.401 0 0 1-.41.391c-.219 0-.41-.182-.41-.391V7.126c0-.736-.671-1.382-1.438-1.382C5.677 5.744 5 6.385 5 7.116v7.276c.023 1.768.759 3.426 2.074 4.67A7.162 7.162 0 0 0 12 21a7.16 7.16 0 0 0 4.926-1.937c1.315-1.245 2.052-2.907 2.074-4.684v-3.704c0-.241-.097-.461-.277-.632Z",
      clipRule: "evenodd",
    }),
  });
const local_840b6115 = ({ size: arg = 24 }) =>
  imported_3("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    children: imported_3("path", {
      fill: "currentColor",
      d: "M16.5 3q5.4.1 5.5 5.4h-4.2c-2 0-3.6 1.6-3.6 3.5s1.6 3.4 3.6 3.4H22v.4q-.1 5.1-5.5 5.3h-9Q2 20.8 2 15.7V8.3Q2.1 3.2 7.5 3zm4.8 6.9q.6 0 .7.7v2.5q0 .7-.7.8h-3.5q-1.6-.1-2-1.6a2 2 0 0 1 .4-1.7 2 2 0 0 1 1.6-.7zm-3 1.1h-.4q-.3 0-.5.3-.2.1-.2.5 0 .6.7.7h.3q.8 0 .8-.7t-.8-.8m-6-4.1H6.8q-.6 0-.7.7t.7.8h5.7q.6-.1.7-.8t-.7-.7",
    }),
  });
const local_8b255c95 = ({ size: arg = 24 }) =>
  imported_3("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 24 24",
    children: imported_3("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.532 5.497C17.905 4.83 12.91 3 12 3c-.91 0-5.906 1.83-6.532 2.498-.497.533-.491.944-.452 3.218.016.923.037 2.18.037 3.919 0 6.07 6.75 8.322 6.818 8.345a.424.424 0 0 0 .258 0c.068-.023 6.818-2.276 6.818-8.345 0-1.735.021-2.99.037-3.912.038-2.28.046-2.691-.453-3.226Z",
      clipRule: "evenodd",
    }),
  });
const local_2db7ffcd = ({ size: arg = 24 }) =>
  imported_3("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      imported_3("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M21 12V7H5a2 2 0 0 1 0-4h14v4",
      }),
      imported_3("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M3 5v14a2 2 0 0 0 2 2h16v-5",
      }),
      imported_3("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M18 12a2 2 0 0 0 0 4h4v-4h-4Z",
      }),
    ],
  });
const local_4e84fc10 = "c_toggle";
const local_6ab69625 = "c_active";
const local_339f5c81 = {
  toggle: local_4e84fc10,
  active: local_6ab69625,
};
function fn_6854c4bf({ checked: arg, onChange: arg_2, disabled: arg_3 }) {
  const local = (arg) => {
    arg.stopPropagation();
    if (!arg_3) {
      arg_2(!arg);
    }
  };
  return imported_3("button", {
    type: "button",
    className: `${local_339f5c81.toggle} ${arg ? local_339f5c81.active : ""}`,
    onClick: local,
    disabled: arg_3,
    role: "switch",
    "aria-checked": arg,
  });
}
export const local_73f326c5 = {
  async getStatus() {
    return imported_4.get(imported_5.subscription.status);
  },
  async pay(arg) {
    return imported_4.post(
      imported_5.subscription.pay,
      arg
        ? {
            methodId: arg,
          }
        : undefined,
    );
  },
  async setAutoRenewal(arg) {
    return imported_4.post(imported_5.subscription.autoRenewal, {
      enabled: arg,
    });
  },
  async bindCard(arg = "bank_card") {
    return imported_4.post(imported_5.subscription.bindCard, {
      type: arg,
    });
  },
  async getMethods() {
    return (await imported_4.get(imported_5.subscription.methods)).data;
  },
  async setDefaultMethod(arg) {
    return imported_4.put(imported_5.subscription.methodDefault(arg));
  },
  async deleteMethod(arg) {
    return imported_4.delete(imported_5.subscription.methodDelete(arg));
  },
};
const local_96437191 = {
  async list() {
    return (await imported_4.get(imported_5.sessions.list))?.sessions ?? [];
  },
  async revoke(arg, arg_2) {
    await imported_4.delete(imported_5.sessions.revoke(arg));
    return {
      loggedOut: arg_2,
    };
  },
  async revokeOthers() {
    return (
      (await imported_4.delete(imported_5.sessions.revokeOthers))
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
function fn_d13d3178({
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
  return imported_3("div", {
    className: local_3cccfc6a.inputWrapper,
    children: [
      arg_3 &&
        imported_3("label", {
          className: local_3cccfc6a.label,
          children: [
            arg_3,
            arg_4 &&
              imported_3("span", {
                className: local_3cccfc6a.hint,
                children: arg_4,
              }),
          ],
        }),
      imported_3("input", {
        className: `${local_3cccfc6a.input} ${local_3cccfc6a[arg_6]} ${local_3cccfc6a[arg_7]} ${arg_5 ? local_3cccfc6a.error : ""} ${arg_8 || ""}`,
        value: arg,
        onInput: local,
        ...arg_9,
      }),
      arg_5 &&
        imported_3("span", {
          className: local_3cccfc6a.errorText,
          children: arg_5,
        }),
    ],
  });
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
export function fn_689a0068({ onClose: arg, onBack: arg_2 }) {
  const [local, local_2] = imported_6("");
  const [local_3, local_4] = imported_6("");
  const [local_5, local_6] = imported_6("");
  const [local_7, local_8] = imported_6(false);
  const [local_9, local_10] = imported_6(null);
  const [local_11, local_12] = imported_6({});
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
    if (local_3.length < 10) {
      local_12({
        newPassword: "Минимум 10 символов",
      });
      return;
    }
    if (local_3.length > 128) {
      local_12({
        newPassword: "Максимум 128 символов",
      });
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(local_3)) {
      local_12({
        newPassword: "Только латиница, цифры и знаки пунктуации",
      });
      return;
    }
    local_8(true);
    try {
      await imported_9.changePassword({
        currentPassword: local,
        newPassword: local_3,
      });
      await imported_10.getState().logout();
      arg();
    } catch (error) {
      if (imported_11(error)) {
        if (error.code === imported_12.ACCOUNT_CURRENT_PASSWORD_INCORRECT) {
          local_12({
            currentPassword: "Неверный текущий пароль",
          });
        } else if (error.errors) {
          const local = {};
          for (const [local, local_2] of Object.entries(error.errors)) {
            local[local] = imported_13(local_2[0] || "Ошибка валидации");
          }
          local_12(local);
        } else {
          local_10(
            imported_14(
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
  const useSettingsStore =
    local.length > 0 && local_3.length >= 10 && local_5.length > 0;
  return imported_3(imported_8, {
    onClose: arg_2,
    title: "Смена пароля",
    children: imported_3("form", {
      onSubmit: local_13,
      className: local_b00398c6.form,
      children: [
        imported_3("div", {
          className: local_b00398c6.field,
          children: [
            imported_3("label", {
              className: local_b00398c6.label,
              children: "Текущий пароль",
            }),
            imported_3(fn_d13d3178, {
              type: "password",
              value: local,
              onChange: local_2,
              placeholder: "Введите текущий пароль",
              autoComplete: "current-password",
            }),
            local_11.currentPassword &&
              imported_3("span", {
                className: local_b00398c6.fieldError,
                children: local_11.currentPassword,
              }),
          ],
        }),
        imported_3("div", {
          className: local_b00398c6.field,
          children: [
            imported_3("label", {
              className: local_b00398c6.label,
              children: "Новый пароль",
            }),
            imported_3(fn_d13d3178, {
              type: "password",
              value: local_3,
              onChange: local_4,
              placeholder: "Введите новый пароль",
              autoComplete: "new-password",
            }),
            imported_3("span", {
              className: local_b00398c6.hint,
              children: "Минимум 10 символов, латиница, цифры и пунктуация",
            }),
            local_11.newPassword &&
              imported_3("span", {
                className: local_b00398c6.fieldError,
                children: local_11.newPassword,
              }),
          ],
        }),
        imported_3("div", {
          className: local_b00398c6.field,
          children: [
            imported_3("label", {
              className: local_b00398c6.label,
              children: "Подтверждение пароля",
            }),
            imported_3(fn_d13d3178, {
              type: "password",
              value: local_5,
              onChange: local_6,
              placeholder: "Повторите новый пароль",
              autoComplete: "new-password",
            }),
            local_11.confirmPassword &&
              imported_3("span", {
                className: local_b00398c6.fieldError,
                children: local_11.confirmPassword,
              }),
          ],
        }),
        local_9 &&
          imported_3("div", {
            className: local_b00398c6.error,
            children: local_9,
          }),
        imported_3("div", {
          className: local_b00398c6.actions,
          children: [
            imported_3(imported_7, {
              type: "button",
              variant: "secondary",
              onClick: arg_2,
              disabled: local_7,
              children: "Отмена",
            }),
            imported_3(imported_7, {
              type: "submit",
              disabled: !useSettingsStore || local_7,
              children: local_7 ? "Сохранение..." : "Сменить пароль",
            }),
          ],
        }),
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
export function fn_aa48405c({ onClose: arg }) {
  const local = async () => {
    await imported_10.getState().deleteAccount();
    arg();
  };
  return imported_3(imported_8, {
    onClose: arg,
    showHeader: false,
    children: imported_3("div", {
      className: local_e5cc91d8.content,
      children: [
        imported_3("h2", {
          className: local_e5cc91d8.title,
          children: "Удалить аккаунт?",
        }),
        imported_3("p", {
          className: local_e5cc91d8.subtitle,
          children:
            "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
        }),
        imported_3("div", {
          className: local_e5cc91d8.actions,
          children: [
            imported_3(imported_7, {
              variant: "secondary",
              onClick: (arg) => {
                arg.stopPropagation();
                arg();
              },
              children: "Отмена",
            }),
            imported_3(imported_7, {
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
const local_b77a44cd = {
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
const local_317424dd = imported_15(function (
  { onDirtyChange: arg, onSavingChange: arg_2, onClose: arg_3 },
  arg_4,
) {
  const local = imported_10((arg) => arg.profile);
  const local_2 = imported_10((arg) => arg.logout);
  const { openModal: local_3, closeModal: local_4 } = imported_16();
  const local_5 = imported_17();
  const [local_6] = imported_18();
  const local_7 = local_6?.url || window.location.pathname;
  const [local_8, local_9] = imported_6(true);
  const [local_10, useSettingsStore] = imported_6(false);
  const [local_11, local_12] = imported_6(false);
  const [local_13, local_14] = imported_6({});
  const [local_15, local_16] = imported_6(null);
  const [local_17, local_18] = imported_6(null);
  const [local_19, local_20] = imported_6({
    name: "",
    username: "",
    bio: "",
    avatar: "😀",
  });
  const [local_21, local_22] = imported_6([]);
  const [local_23, local_24] = imported_6(null);
  const local_25 = imported_19(null);
  const [local_26, local_27] = imported_6(true);
  imported_20(() => {
    if (local) {
      const local = {
        name: local.displayName,
        username: local.username || "",
        bio: local.bio || "",
        avatar: local.avatar,
      };
      local_20(local);
      local_18(local);
      local_9(false);
      const local_2 = local.pin ?? null;
      local_24(local_2);
      local_25.current = local_2;
    }
  }, [local]);
  imported_20(() => {
    imported_21
      .getMyPins()
      .then((arg) => {
        local_22(arg.pins);
        if (arg.activePin && !local_25.current) {
          const local = arg.pins.find((arg) => arg.slug === arg.activePin);
          if (local) {
            local_24(local);
            local_25.current = local;
          }
        }
      })
      .catch(() => local_22([]))
      .finally(() => local_27(false));
  }, []);
  imported_20(() => {
    arg(local_11);
  }, [local_11]);
  imported_20(() => {
    arg_2(local_10);
  }, [local_10]);
  const local_28 = imported_22(
    (arg, arg_2) => {
      if (!local_17) {
        return false;
      }
      const local = Object.keys(arg).some((arg) => arg[arg] !== local_17[arg]);
      const local_2 =
        (arg_2?.slug ?? null) !== (local_25.current?.slug ?? null);
      return local || local_2;
    },
    [local_17],
  );
  const local_29 = (arg, arg_2) => {
    if (local_13[arg]) {
      local_14((arg) => {
        const local = {
          ...arg,
        };
        delete local[arg];
        return local;
      });
    }
    local_16(null);
    local_20((arg) => {
      const local = {
        ...arg,
        [arg]: arg_2,
      };
      local_12(local_28(local, local_23));
      return local;
    });
  };
  const local_30 = imported_22(
    (arg) => {
      const local = local_23?.slug === arg.slug ? null : arg;
      local_24(local);
      local_12(local_28(local_19, local));
    },
    [local_23, local_19, local_28],
  );
  const local_31 = async () => {
    if (!local_11 || local_10) {
      return;
    }
    useSettingsStore(true);
    local_14({});
    local_16(null);
    const local = local_17?.username;
    const local_2 = local_19.username;
    try {
      if (
        local_17 &&
        Object.keys(local_19).some((arg) => local_19[arg] !== local_17[arg])
      ) {
        await imported_21.updateProfile({
          displayName: local_19.name,
          username: local_19.username || undefined,
          bio: local_19.bio || null,
        });
      }
      (local_23?.slug ?? null) !== (local_25.current?.slug ?? null) &&
        (local_23
          ? await imported_21.setActivePin(local_23.slug)
          : await imported_21.removeActivePin());
      local_18({
        ...local_19,
      });
      local_25.current = local_23;
      local_12(false);
      const local = imported_10.getState().profile;
      if (local) {
        imported_10.getState().setProfile({
          ...local,
          displayName: local_19.name,
          username: local_19.username,
          bio: local_19.bio || null,
          pin: local_23,
        });
      }
      if (
        local_2 &&
        local_2 !== local &&
        (local_7 === `/@${local}` || local_7 === `/@${local?.id}`)
      ) {
        imported_27(`/@${local_2}`);
      }
    } catch (error) {
      console.error("Failed to save profile:", error);
      if (imported_11(error)) {
        if (error.errors) {
          const local = {};
          for (const [local, local_2] of Object.entries(error.errors)) {
            local[local] = imported_13(local_2[0] || "Ошибка валидации");
          }
          local_14(local);
        } else {
          local_16(
            imported_14(
              error.code,
              error.message || "Не удалось сохранить изменения",
            ),
          );
        }
      } else {
        local_16("Не удалось сохранить изменения");
      }
    } finally {
      useSettingsStore(false);
    }
  };
  const local_32 = () => {
    if (local_17) {
      local_20({
        ...local_17,
      });
      local_24(local_25.current);
      local_12(false);
    }
  };
  imported_23(arg_4, () => ({
    save: local_31,
    discard: local_32,
  }));
  if (local_8) {
    return imported_3(imported_25, {
      children: [
        imported_3("h2", {
          className: local_b77a44cd.contentTitle,
          children: "Аккаунт",
        }),
        imported_3(imported_24, {}),
      ],
    });
  }
  return imported_3(imported_25, {
    children: [
      imported_3("h2", {
        className: local_b77a44cd.contentTitle,
        children: "Аккаунт",
      }),
      imported_3("div", {
        className: local_b77a44cd.section,
        children: [
          imported_3("div", {
            className: local_b77a44cd.settingItem,
            children: [
              imported_3("div", {
                className: local_b77a44cd.settingInfo,
                children: imported_3("div", {
                  className: local_b77a44cd.settingText,
                  children: [
                    imported_3("span", {
                      className: local_b77a44cd.settingTitle,
                      children: "Эмоджи-клан",
                    }),
                    imported_3("span", {
                      className: local_b77a44cd.settingDescription,
                      children: "Выбран при регистрации. Изменить нельзя",
                    }),
                  ],
                }),
              }),
              imported_3("div", {
                className: local_b77a44cd.avatarDisplay,
                children: local_19.avatar,
              }),
            ],
          }),
          imported_3("div", {
            className: local_b77a44cd.settingItem,
            children: [
              imported_3("div", {
                className: local_b77a44cd.settingInfo,
                children: imported_3("div", {
                  className: local_b77a44cd.settingText,
                  children: [
                    imported_3("span", {
                      className: local_b77a44cd.settingTitle,
                      children: "Имя",
                    }),
                    imported_3("span", {
                      className: local_b77a44cd.settingDescription,
                      children: "Ваше отображаемое имя",
                    }),
                  ],
                }),
              }),
              imported_3("div", {
                className: local_b77a44cd.settingControl,
                children: [
                  imported_3(fn_d13d3178, {
                    value: local_19.name,
                    onChange: (arg) => local_29("name", arg),
                  }),
                  local_13.displayName &&
                    imported_3("span", {
                      className: local_b77a44cd.fieldError,
                      children: local_13.displayName,
                    }),
                ],
              }),
            ],
          }),
          imported_3("div", {
            className: local_b77a44cd.settingItem,
            children: [
              imported_3("div", {
                className: local_b77a44cd.settingInfo,
                children: imported_3("div", {
                  className: local_b77a44cd.settingText,
                  children: [
                    imported_3("span", {
                      className: local_b77a44cd.settingTitle,
                      children: "Username",
                    }),
                    imported_3("span", {
                      className: local_b77a44cd.settingDescription,
                      children:
                        "Ваш уникальный идентификатор (только латиница, цифры и _)",
                    }),
                  ],
                }),
              }),
              imported_3("div", {
                className: local_b77a44cd.settingControl,
                children: [
                  imported_3(fn_d13d3178, {
                    value: local_19.username,
                    onChange: (arg) => local_29("username", arg),
                  }),
                  local_13.username &&
                    imported_3("span", {
                      className: local_b77a44cd.fieldError,
                      children: local_13.username,
                    }),
                ],
              }),
            ],
          }),
          imported_3("div", {
            className: `${local_b77a44cd.settingItem} ${local_b77a44cd.column}`,
            children: [
              imported_3("div", {
                className: local_b77a44cd.settingInfo,
                children: imported_3("div", {
                  className: local_b77a44cd.settingText,
                  children: [
                    imported_3("span", {
                      className: local_b77a44cd.settingTitle,
                      children: "О себе",
                    }),
                    imported_3("span", {
                      className: local_b77a44cd.settingDescription,
                      children: "Расскажите немного о себе",
                    }),
                  ],
                }),
              }),
              imported_3("textarea", {
                className: local_b77a44cd.bioTextarea,
                value: local_19.bio,
                onChange: (arg) => local_29("bio", arg.target.value),
                placeholder: "Напиши что-нибудь о себе...",
                rows: 3,
              }),
              local_13.bio &&
                imported_3("span", {
                  className: local_b77a44cd.fieldError,
                  children: local_13.bio,
                }),
            ],
          }),
          !local_26 &&
            local_21.length > 0 &&
            imported_3("div", {
              className: `${local_b77a44cd.settingItem} ${local_b77a44cd.column}`,
              children: [
                imported_3("div", {
                  className: local_b77a44cd.settingInfo,
                  children: imported_3("div", {
                    className: local_b77a44cd.settingText,
                    children: [
                      imported_3("span", {
                        className: local_b77a44cd.settingTitle,
                        children: "Пин",
                      }),
                      imported_3("span", {
                        className: local_b77a44cd.settingDescription,
                        children: "Отображается рядом с именем",
                      }),
                    ],
                  }),
                }),
                imported_3("div", {
                  className: local_b77a44cd.pinGrid,
                  children: local_21.map((arg) =>
                    imported_3(
                      "button",
                      {
                        className: `${local_b77a44cd.pinItem} ${local_23?.slug === arg.slug ? local_b77a44cd.pinActive : ""}`,
                        onClick: () => local_30(arg),
                        disabled: local_10,
                        title: arg.description || arg.name,
                        type: "button",
                        children: [
                          imported_3("img", {
                            src: arg.url,
                            alt: arg.name,
                            className: local_b77a44cd.pinImage,
                          }),
                          imported_3("span", {
                            className: local_b77a44cd.pinName,
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
          local_15 &&
            imported_3("div", {
              className: local_b77a44cd.saveError,
              children: local_15,
            }),
        ],
      }),
      local_5 &&
        imported_3("div", {
          className: local_b77a44cd.section,
          children: imported_3("button", {
            type: "button",
            className: local_b77a44cd.logoutButton,
            onClick: () => {
              local_2();
              arg_3();
            },
            children: [
              imported_3(imported_26, {
                size: 20,
              }),
              imported_3("span", {
                children: "Выйти из аккаунта",
              }),
            ],
          }),
        }),
      imported_3("div", {
        className: local_b77a44cd.section,
        children: imported_3("button", {
          type: "button",
          className: local_b77a44cd.deleteAccountButton,
          onClick: () =>
            local_3(
              imported_3(fn_aa48405c, {
                onClose: local_4,
              }),
            ),
          children: "Удалить аккаунт",
        }),
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
  const [local, local_2] = imported_6(false);
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
  return imported_3(imported_8, {
    onClose: arg_3,
    showHeader: false,
    children: imported_3("div", {
      className: local_e5cc91d8_2.content,
      children: [
        imported_3("h2", {
          className: local_e5cc91d8_2.title,
          children: "Отключить автопродление?",
        }),
        imported_3("p", {
          className: local_e5cc91d8_2.subtitle,
          children: [
            "Подписка будет действовать до ",
            local_3,
            ". После этой даты она просто не продлится автоматически. Вы сможете включить автопродление обратно в любой момент.",
          ],
        }),
        imported_3("div", {
          className: local_e5cc91d8_2.actions,
          children: [
            imported_3(imported_7, {
              variant: "secondary",
              onClick: (arg) => {
                arg.stopPropagation();
                arg_3();
              },
              children: "Оставить",
            }),
            imported_3(imported_7, {
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
const local_026ebd99 = {
  content: local_4d84dbb6_4,
  title: local_9d9cf508_3,
  subtitle: local_8c84ac4c_3,
  disclaimer: local_077f6834,
  actions: local_8c4f8b4b_4,
};
export function fn_abc06512({ onConfirm: arg, onClose: arg_2 }) {
  const [local, local_2] = imported_6(false);
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
  return imported_3(imported_8, {
    onClose: arg_2,
    showHeader: false,
    children: imported_3("div", {
      className: local_026ebd99.content,
      children: [
        imported_3("h2", {
          className: local_026ebd99.title,
          children: "Включить автопродление?",
        }),
        imported_3("p", {
          className: local_026ebd99.subtitle,
          children:
            "Подписка будет автоматически продлеваться каждый месяц. Средства будут списываться с привязанной карты.",
        }),
        imported_3("p", {
          className: local_026ebd99.disclaimer,
          children: [
            "Нажимая «Включить», вы соглашаетесь с",
            "./subscription-modal.js",
            imported_3("a", {
              href: "/subscription-terms",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "условиями подписки",
            }),
            ",",
            "./subscription-modal.js",
            imported_3("a", {
              href: "/privacy",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "политикой конфиденциальности",
            }),
            " и",
            "./subscription-modal.js",
            imported_3("a", {
              href: "/terms",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "условиями использования",
            }),
            ".",
          ],
        }),
        imported_3("div", {
          className: local_026ebd99.actions,
          children: [
            imported_3(imported_7, {
              variant: "secondary",
              onClick: (arg) => {
                arg.stopPropagation();
                arg_2();
              },
              children: "Отмена",
            }),
            imported_3(imported_7, {
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
const local_9d01cb12 = [
  [0, 0, 96, 28],
  [96, 0, 107, 52],
  [203, 0, 107, 107],
  [310, 0, 109, 105],
  [419, 0, 170, 114],
  [589, 0, 168, 102],
  [757, 0, 177, 93],
  [934, 0, 165, 105],
  [1099, 0, 170, 111],
  [1269, 0, 176, 123],
  [1445, 0, 141, 148],
  [1586, 0, 115, 157],
  [1701, 0, 144, 112],
  [1845, 0, 135, 114],
  [1980, 0, 136, 129],
  [2116, 0, 131, 114],
];
const local_f06debfc = 2247;
const local_f06debfc_2 = 157;
const local_a7ee6c81 = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  [0, 673, 329],
  [1, 666, 304],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 303],
  [2, 648, 252],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 649, 253],
  [3, 636, 259],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 637, 255],
  [3, 635, 259],
  [4, 627, 287],
  [5, 615, 316],
  [6, 612, 320],
  [6, 612, 320],
  [7, 615, 320],
  [7, 615, 320],
  [6, 612, 320],
  [6, 612, 320],
  [7, 615, 322],
  [7, 615, 327],
  [8, 617, 330],
  [9, 605, 334],
  [10, 628, 357],
  [11, 632, 393],
  [12, 617, 530],
  [13, 626, 575],
  [14, 623, 638],
  [15, 628, 717],
  [14, 623, 811],
  [15, 629, 922],
  [14, 623, 1052],
  [15, 629, 1202],
  [14, 623, 1373],
  [15, 629, 1567],
  [14, 624, 1785],
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
const local_2cae01a0 = local_a7ee6c81.length;
const local_9308d9b8 = 370 / 1080;
const local_f06debfc_3 = 605;
const local_f06debfc_4 = 40;
const local_16468f59 = {
  s: 14,
  x: 623,
};
const local_16468f59_2 = {
  s: 15,
  x: 629,
};
function fn_b267a7cf(arg, arg_2) {
  const local = (arg + arg_2 + 200) / local_9308d9b8;
  const local_2 = local_a7ee6c81.slice();
  let local_3 = 1785;
  let local_4 = 218;
  let local_5 = true;
  for (
    let local = 98;
    local < local_2cae01a0 &&
    ((local_4 += 18), (local_3 += local_4), !(local_3 > local));
    local++
  ) {
    const local = local_5 ? local_16468f59_2 : local_16468f59;
    local_2[local] = [local.s, local.x, local_3];
    local_5 = !local_5;
  }
  return local_2;
}
function fn_b6888d03() {
  const local = imported_19(null);
  const local_2 = imported_19(null);
  const local_3 = imported_19({
    f: 0,
    ts: 0,
    tl: local_a7ee6c81.slice(),
    xOff: 0,
    yOff: 0,
  });
  imported_20(() => {
    const local = local_2.current;
    const local_2 = local.current;
    if (!local || !local_2) {
      return;
    }
    function fn() {
      const local = window.innerHeight;
      const local_2 = window.innerWidth;
      const local_3 = local_2.parentElement;
      let local_4;
      let useSettingsStore;
      if (local_3) {
        const local = local_3.getBoundingClientRect();
        local_4 = local.top;
        useSettingsStore = local.left + (local.width - 370) / 2;
      } else {
        local_4 = (local - 900) / 2;
        useSettingsStore = (local_2 - 370) / 2;
      }
      const local_5 = local_2 <= 1173;
      local_3.current.yOff =
        357 * local_9308d9b8 - local_4 + (local_5 ? 60 : 0);
      const local_6 = 260;
      local_3.current.xOff =
        local_f06debfc_3 * local_9308d9b8 - useSettingsStore - local_6;
      local_3.current.tl = fn_b267a7cf(local, local_3.current.yOff);
    }
    const local_3 = setTimeout(fn, 260);
    let local_4;
    const local_5 = () => {
      clearTimeout(local_4);
      local_4 = setTimeout(fn, 150);
    };
    window.addEventListener("resize", local_5);
    let local_6;
    function fn_2(arg) {
      const local = local_3.current;
      if (arg - local.ts >= local_f06debfc_4) {
        const local = local.tl[local.f];
        if (!local) {
          local.style.visibility = "hidden";
        } else {
          const [local, useSettingsStore, local_2] = local;
          const [local_3, , local_4, local_5] = local_9d01cb12[local];
          const local_6 = (local_4 * local_9308d9b8 + 0.5) | 0;
          const local_7 = (local_5 * local_9308d9b8 + 0.5) | 0;
          local.style.cssText = `visibility:visible;width:${local_6}px;height:${local_7}px;background-image:url(/assets/nuksta/nuksta-chechik-sprite.png);background-repeat:no-repeat;image-rendering:pixelated;will-change:transform;background-position:${-((local_3 * local_9308d9b8 + 0.5) | 0)}px 0px;background-size:${(local_f06debfc * local_9308d9b8 + 0.5) | 0}px ${(local_f06debfc_2 * local_9308d9b8 + 0.5) | 0}px;transform:translate(${(useSettingsStore * local_9308d9b8 - local.xOff + 0.5) | 0}px,${(local_2 * local_9308d9b8 - local.yOff + 0.5) | 0}px)`;
        }
        local.f = (local.f + 1) % local_2cae01a0;
        local.ts = arg;
      }
      local_6 = requestAnimationFrame(fn_2);
    }
    local_6 = requestAnimationFrame(fn_2);
    return () => {
      cancelAnimationFrame(local_6);
      clearTimeout(local_3);
      clearTimeout(local_4);
      window.removeEventListener("resize", local_5);
    };
  }, []);
  return imported_3(imported_25, {
    children: [
      imported_3("div", {
        ref: local,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          pointerEvents: "none",
        },
      }),
      imported_28(
        imported_3("div", {
          style: {
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 99999,
            overflow: "hidden",
          },
          children: imported_3("div", {
            ref: local_2,
            style: {
              position: "absolute",
              backgroundImage: "url(/assets/nuksta/nuksta-chechik-sprite.png)",
              backgroundRepeat: "no-repeat",
              imageRendering: "pixelated",
              willChange: "transform",
            },
          }),
        }),
        document.body,
      ),
    ],
  });
}
const local_49250f21 = "c_modal";
const local_24243f59 = "c_sub";
const local_11f064fe = "c_top";
const local_807be581 = "c_bottom";
const local_9d9cf508_4 = "c_title";
const local_af0b94fd_2 = "c_section";
const local_fc53e62e = "c_profileSection";
const local_fe9ec23f_3 = "c_label";
const local_7d352a9c = "c_labelRow";
const local_3ed0446e = "c_dim";
const local_ab7982d5 = "c_row";
const local_3abd7bdb = "c_icon";
const local_ff65460c = "c_iconGradient";
const local_8d0c49b2 = "c_name";
const local_95abeb0d = "c_nameGradient";
const local_8a9e924c = "c_namePinBadge";
const local_075d32b6 = "c_promoVideo";
const local_3793ee2e = "c_features";
const local_63f2eee2 = "c_featureContent";
const local_677736f6 = "c_featureTitle";
const local_0e1d4667 = "c_gradientText";
const local_4a6a8c8f = "c_soon";
const local_9ec691ea = "c_infoBtn";
const local_a0cefcb4 = "c_footer";
const local_077f6834_2 = "c_disclaimer";
const local_f6c5ef46 = "c_methodSelectRow";
const local_735ec38e = "c_methodSelectLabel";
const local_a29deef3 = "c_methodSelect";
const local_34217f5c = "c_chargeInfo";
const local_390f5f49 = "c_consentLink";
const local_0a79b3ee = "c_subscribeBtn";
const local_d56475d7 = "c_btnLoading";
const local_3acc1aab = "c_btnSpinner";
const local_ecccec13 = "c_activeLabel";
const local_23034546 = {
  modal: local_49250f21,
  sub: local_24243f59,
  top: local_11f064fe,
  bottom: local_807be581,
  title: local_9d9cf508_4,
  section: local_af0b94fd_2,
  profileSection: local_fc53e62e,
  label: local_fe9ec23f_3,
  labelRow: local_7d352a9c,
  dim: local_3ed0446e,
  row: local_ab7982d5,
  icon: local_3abd7bdb,
  iconGradient: local_ff65460c,
  name: local_8d0c49b2,
  nameGradient: local_95abeb0d,
  namePinBadge: local_8a9e924c,
  promoVideo: local_075d32b6,
  features: local_3793ee2e,
  featureContent: local_63f2eee2,
  featureTitle: local_677736f6,
  gradientText: local_0e1d4667,
  soon: local_4a6a8c8f,
  infoBtn: local_9ec691ea,
  footer: local_a0cefcb4,
  disclaimer: local_077f6834_2,
  methodSelectRow: local_f6c5ef46,
  methodSelectLabel: local_735ec38e,
  methodSelect: local_a29deef3,
  chargeInfo: local_34217f5c,
  consentLink: local_390f5f49,
  subscribeBtn: local_0a79b3ee,
  btnLoading: local_d56475d7,
  btnSpinner: local_3acc1aab,
  activeLabel: local_ecccec13,
};
function fn_2c1b28aa({ text: arg }) {
  return imported_3(imported_32, {
    text: arg,
    multiline: true,
    children: imported_3("span", {
      className: local_23034546.infoBtn,
      children: imported_3(imported_43, {
        size: 14,
      }),
    }),
  });
}
const local_ae1f867d = "new";
function fn_36b21ae2(arg) {
  if (arg.type === "bank_card") {
    return `${arg.cardBrand || "Карта"} •••• ${arg.cardLast4 || ""}`.trim();
  }
  if (arg.type === "sbp") {
    return "СБП";
  }
  return arg.type;
}
export function fn_30e987f3({ isOpen: arg, onClose: arg_2 }) {
  const local = imported_29();
  const [local_2, local_3] = imported_6(false);
  const [local_4, local_5] = imported_6(false);
  const [local_6, local_7] = imported_6([]);
  const [local_8, local_9] = imported_6(local_ae1f867d);
  const [local_10, local_11] = imported_6(199);
  imported_20(() => {
    if (arg) {
      local_73f326c5
        .getStatus()
        .then((arg) => {
          local_5(!!arg.recurringEnabled);
          if (typeof arg.price === "number") {
            local_11(arg.price);
          }
          if (arg.recurringEnabled) {
            local_73f326c5
              .getMethods()
              .then((arg) => {
                local_7(arg);
                const local = arg.find((arg) => arg.isDefault) || arg[0];
                local_9(local ? local.id : local_ae1f867d);
              })
              .catch(() => local_7([]));
          }
        })
        .catch(() => local_5(false));
    }
  }, [arg]);
  if (!arg) {
    return null;
  }
  const local_12 = local?.subscription?.isActive ?? false;
  const local_13 = new Date();
  local_13.setMonth(local_13.getMonth() + 1);
  const useSettingsStore = local_13.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
  });
  const local_14 = local_4 && local_8 !== local_ae1f867d;
  const local_15 = async () => {
    if (local_2) {
      return;
    }
    local_3(true);
    if (local_14) {
      try {
        const local = await local_73f326c5.pay(local_8);
        if (local.error) {
          imported_33.error(local.error);
          return;
        }
        imported_33.success("Подписка оформлена!");
        arg_2();
        imported_10
          .getState()
          .fetchProfile()
          .catch(() => {});
      } catch (error) {
        imported_33.error(
          error instanceof Error && error.message
            ? error.message
            : "Ошибка при оплате",
        );
      } finally {
        local_3(false);
      }
      return;
    }
    const local = window.open("about:blank", "_blank");
    try {
      const local = await local_73f326c5.pay();
      if (local.error) {
        local?.close();
        imported_33.error(local.error);
        return;
      }
      if (local.confirmationUrl && local) {
        local.location.href = local.confirmationUrl;
      } else if (local.confirmationUrl) {
        window.location.href = local.confirmationUrl;
      }
    } catch (error) {
      local?.close();
      imported_33.error(
        error instanceof Error && error.message
          ? error.message
          : "Ошибка при создании платежа",
      );
    } finally {
      local_3(false);
    }
  };
  return imported_28(
    imported_3(imported_8, {
      onClose: arg_2,
      showHeader: false,
      frameless: true,
      className: local_23034546.modal,
      children: [
        imported_3(fn_b6888d03, {}),
        imported_3("div", {
          className: local_23034546.sub,
          children: [
            imported_3("div", {
              className: local_23034546.top,
              children: [
                imported_3("div", {
                  className: local_23034546.title,
                  children: "ИТД НУКСТА",
                }),
                imported_3("div", {
                  className: `${local_23034546.section} ${local_23034546.profileSection}`,
                  children: [
                    imported_3("div", {
                      className: local_23034546.label,
                      children: "Ваш профиль с ИТД НУКСТА",
                    }),
                    imported_3("div", {
                      className: local_23034546.row,
                      children: [
                        imported_3(imported_30, {
                          src: local?.avatar || null,
                          size: "sm",
                        }),
                        imported_3("div", {
                          children: [
                            imported_3("div", {
                              className: local_23034546.name,
                              children: [
                                imported_3("span", {
                                  className: local_23034546.nameGradient,
                                  children: local?.displayName,
                                }),
                                imported_3("img", {
                                  src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                  alt: "НУКСТА",
                                  width: 24,
                                  height: 24,
                                  className: local_23034546.namePinBadge,
                                }),
                              ],
                            }),
                            imported_3("div", {
                              className: local_23034546.dim,
                              children: "только что",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            imported_3("video", {
              src: `/assets/nuksta/nuksta-${document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"}.mp4`,
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true,
              width: 370,
              height: 268,
              className: local_23034546.promoVideo,
            }),
            imported_3("div", {
              className: local_23034546.bottom,
              children: [
                imported_3("div", {
                  className: local_23034546.section,
                  children: [
                    imported_3("div", {
                      className: local_23034546.labelRow,
                      children: [
                        imported_3("span", {
                          className: local_23034546.label,
                          children: "Прикольные украшалки",
                        }),
                        imported_3(fn_2c1b28aa, {
                          text: "итд — полностью независимый проект, который мы делаем сами, без инвесторов и крупных компаний. подписка НУКСТА — это способ поддержать нас, если вам хочется. это совсем не обязательно, мы рады каждому и так! ❤️",
                        }),
                      ],
                    }),
                    imported_3("div", {
                      className: local_23034546.features,
                      children: [
                        imported_3("div", {
                          className: local_23034546.row,
                          children: [
                            imported_3("span", {
                              className: local_23034546.icon,
                              children: imported_3("div", {
                                className: local_23034546.iconGradient,
                              }),
                            }),
                            imported_3("div", {
                              children: imported_3("div", {
                                className: `${local_23034546.featureTitle} ${local_23034546.gradientText}`,
                                children: "Уникальный цвет ника",
                              }),
                            }),
                          ],
                        }),
                        imported_3("div", {
                          className: local_23034546.row,
                          children: [
                            imported_3("span", {
                              className: local_23034546.icon,
                              children: imported_3("img", {
                                src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                alt: "Пин",
                                width: 20,
                                height: 20,
                              }),
                            }),
                            imported_3("div", {
                              children: imported_3("div", {
                                className: local_23034546.featureTitle,
                                children: "Пин поддерживателя",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                imported_3("div", {
                  className: local_23034546.section,
                  children: [
                    imported_3("div", {
                      className: local_23034546.labelRow,
                      children: [
                        imported_3("span", {
                          className: local_23034546.label,
                          children: "Сможете с нами тестить новые штуки",
                        }),
                        imported_3(fn_2c1b28aa, {
                          text: "мы постоянно добавляем в итд новые штуки и обычно тестим их внутри команды перед релизом. с подпиской НУКСТА вы сможете попробовать их первыми вместе с нами! а когда всё протестим — фишки станут доступны всем пользователям итд",
                        }),
                      ],
                    }),
                    imported_3("div", {
                      className: local_23034546.features,
                      children: [
                        imported_3("div", {
                          className: local_23034546.row,
                          children: [
                            imported_3("span", {
                              className: local_23034546.icon,
                              children: imported_3(local_4c6f99c7, {
                                size: 20,
                              }),
                            }),
                            imported_3("div", {
                              className: local_23034546.featureContent,
                              children: imported_3("div", {
                                className: local_23034546.featureTitle,
                                children: "Загрузка видео",
                              }),
                            }),
                          ],
                        }),
                        imported_3("div", {
                          className: local_23034546.row,
                          children: [
                            imported_3("span", {
                              className: local_23034546.icon,
                              children: imported_3(imported_31, {
                                size: 20,
                              }),
                            }),
                            imported_3("div", {
                              className: local_23034546.featureContent,
                              children: imported_3("div", {
                                className: local_23034546.featureTitle,
                                children: [
                                  "Сообщения ",
                                  imported_3("span", {
                                    className: local_23034546.soon,
                                    children: "soon",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        imported_3("div", {
                          className: local_23034546.row,
                          children: [
                            imported_3("span", {
                              className: local_23034546.icon,
                              children: imported_3(local_645d4878, {
                                size: 20,
                              }),
                            }),
                            imported_3("div", {
                              className: local_23034546.featureContent,
                              children: imported_3("div", {
                                className: local_23034546.featureTitle,
                                children: [
                                  "Музыка ",
                                  imported_3("span", {
                                    className: local_23034546.soon,
                                    children: "soon",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                imported_3("div", {
                  className: local_23034546.footer,
                  children: [
                    !local_12 &&
                      local_6.length > 0 &&
                      imported_3("label", {
                        className: local_23034546.methodSelectRow,
                        children: [
                          imported_3("span", {
                            className: local_23034546.methodSelectLabel,
                            children: "Сохранённый способ оплаты",
                          }),
                          imported_3("select", {
                            className: local_23034546.methodSelect,
                            value: local_8,
                            onChange: (arg) => local_9(arg.target.value),
                            children: [
                              local_6.map((arg) =>
                                imported_3(
                                  "option",
                                  {
                                    value: arg.id,
                                    children: fn_36b21ae2(arg),
                                  },
                                  arg.id,
                                ),
                              ),
                              imported_3("option", {
                                value: local_ae1f867d,
                                children: "Новый способ оплаты",
                              }),
                            ],
                          }),
                        ],
                      }),
                    !local_12 &&
                      imported_3("div", {
                        className: local_23034546.chargeInfo,
                        children: [
                          "Сегодня спишется ",
                          local_10,
                          " ₽, далее ежемесячно — следующее списание ",
                          useSettingsStore,
                          ".",
                        ],
                      }),
                    local_12
                      ? imported_3("div", {
                          className: local_23034546.activeLabel,
                          children: "Подписка активна",
                        })
                      : imported_3("button", {
                          type: "button",
                          className: local_23034546.subscribeBtn,
                          onClick: local_15,
                          disabled: local_2,
                          children: local_2
                            ? imported_3("span", {
                                className: local_23034546.btnLoading,
                                children: [
                                  imported_3(imported_24, {
                                    size: "xs",
                                    className: local_23034546.btnSpinner,
                                  }),
                                  "Оплачиваем…",
                                ],
                              })
                            : `Оплатить ${local_10}₽ на месяц`,
                        }),
                    !local_12 &&
                      imported_3("div", {
                        className: local_23034546.disclaimer,
                        children: [
                          "Нажимая кнопку, вы принимаете ",
                          imported_3("a", {
                            href: "/recurring-terms",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: local_23034546.consentLink,
                            children: "условия автопродления",
                          }),
                          ". Отключить его можно в настройках.",
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    document.body,
  );
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
const local_f06debfc_5 = 5;
function fn_0f03bcc0() {
  const local = imported_10((arg) => arg.profile);
  const [local_2, local_3] = imported_6(false);
  const [local_4, local_5] = imported_6(false);
  const [local_6, local_7] = imported_6(false);
  const [local_8, local_9] = imported_6([]);
  const [local_10, local_11] = imported_6(true);
  const [local_12, local_13] = imported_6(false);
  const [local_14, local_15] = imported_6(false);
  const [useSettingsStore, local_16] = imported_6(null);
  const [local_17, local_18] = imported_6(false);
  imported_20(() => {
    local_73f326c5
      .getStatus()
      .then((arg) => local_18(!!arg.recurringEnabled))
      .catch(() => local_18(false));
  }, []);
  imported_20(() => {
    if (local_17) {
      local_73f326c5
        .getMethods()
        .then(local_9)
        .catch(() => local_9([]))
        .finally(() => local_11(false));
    }
  }, [local_17]);
  const local_19 = () => {
    local_73f326c5
      .getMethods()
      .then(local_9)
      .catch(() => {});
  };
  const local_20 = async (arg) => {
    try {
      await local_73f326c5.setDefaultMethod(arg);
      local_9((arg) =>
        arg.map((arg) => ({
          ...arg,
          isDefault: arg.id === arg,
        })),
      );
    } catch {
      imported_33.error("Не удалось изменить основной способ оплаты");
    }
  };
  const local_21 = async (arg) => {
    try {
      const local = await local_73f326c5.deleteMethod(arg.id);
      local_9((arg) => arg.filter((arg) => arg.id !== arg.id));
      if (local.autoRenewalDisabled && local?.subscription) {
        imported_10.getState().setProfile({
          ...local,
          subscription: {
            ...local.subscription,
            autoRenewal: false,
          },
        });
      }
      local_19();
    } catch {
      imported_33.error("Не удалось отвязать карту");
    }
  };
  const local_22 = async (arg) => {
    if (local_12) {
      return;
    }
    local_13(true);
    local_15(false);
    const local = window.open("about:blank", "_blank");
    try {
      const local = await local_73f326c5.bindCard(arg);
      const local_2 = local.error;
      if (local_2 || !local.confirmationUrl) {
        local?.close();
        imported_33.error(local_2 || "Привязка карт временно недоступна");
        return;
      }
      if (local) {
        local.location.href = local.confirmationUrl;
      } else {
        window.location.href = local.confirmationUrl;
      }
    } catch (error) {
      local?.close();
      imported_33.error(
        error instanceof Error && error.message
          ? error.message
          : "Привязка карт временно недоступна",
      );
    } finally {
      local_13(false);
    }
  };
  const local_23 = [...local_8].sort((arg, arg_2) => {
    if (arg.isDefault !== arg_2.isDefault) {
      if (arg.isDefault) {
        return -1;
      }
      return 1;
    }
    return (arg_2.createdAt || "").localeCompare(arg.createdAt || "");
  });
  return imported_3(imported_25, {
    children: [
      imported_3("h2", {
        className: local_b77a44cd.contentTitle,
        children: "Оплата",
      }),
      imported_3("div", {
        className: local_b77a44cd.section,
        children: [
          local?.subscription?.isActive
            ? imported_3("div", {
                className: local_b77a44cd.settingItem,
                children: [
                  imported_3("div", {
                    className: local_b77a44cd.settingInfo,
                    children: imported_3("div", {
                      className: local_b77a44cd.settingText,
                      children: [
                        imported_3("span", {
                          className: local_b77a44cd.settingTitle,
                          children: "Подписка ИТД НУКСТА",
                        }),
                        imported_3("span", {
                          className: local_b77a44cd.settingDescription,
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
                      ],
                    }),
                  }),
                  local.subscription.autoRenewal
                    ? imported_3("button", {
                        type: "button",
                        className: local_b77a44cd.subscriptionCancel,
                        onClick: () => local_3(true),
                        children: "Отключить автопродление",
                      })
                    : imported_3("button", {
                        type: "button",
                        className: local_b77a44cd.subscriptionRenew,
                        onClick: () => local_5(true),
                        children: "Включить автопродление",
                      }),
                ],
              })
            : imported_3("div", {
                className: local_b77a44cd.settingItem,
                children: [
                  imported_3("div", {
                    className: local_b77a44cd.settingInfo,
                    children: imported_3("div", {
                      className: local_b77a44cd.settingText,
                      children: [
                        imported_3("span", {
                          className: local_b77a44cd.settingTitle,
                          children: "Подписка ИТД НУКСТА",
                        }),
                        imported_3("span", {
                          className: local_b77a44cd.settingDescription,
                          children: "Не оформлена",
                        }),
                      ],
                    }),
                  }),
                  imported_3("button", {
                    type: "button",
                    className: local_b77a44cd.subscriptionRenew,
                    onClick: () => local_7(true),
                    children: "Оформить",
                  }),
                ],
              }),
          local_17 &&
            imported_3("div", {
              className: `${local_b77a44cd.settingItem} ${local_b77a44cd.column}`,
              children: [
                imported_3("div", {
                  className: local_b77a44cd.settingInfo,
                  children: imported_3("div", {
                    className: local_b77a44cd.settingText,
                    children: [
                      imported_3("span", {
                        className: local_b77a44cd.settingTitle,
                        children: "Способы оплаты",
                      }),
                      imported_3("span", {
                        className: local_b77a44cd.settingDescription,
                        children:
                          "Сохранённые способы для автопродления подписки. Отвязать можно в любой момент",
                      }),
                    ],
                  }),
                }),
                imported_3("div", {
                  className: local_b77a44cd.paymentMethodsList,
                  children: local_10
                    ? imported_3(imported_24, {})
                    : imported_3(imported_25, {
                        children: [
                          local_23.map((arg) => {
                            const local =
                              arg.type === "bank_card"
                                ? local_0ead779e
                                : local_2db7ffcd;
                            return imported_3(
                              "div",
                              {
                                className: local_b77a44cd.paymentMethodRow,
                                children: [
                                  imported_3("div", {
                                    className: local_b77a44cd.paymentMethodIcon,
                                    children: imported_3(local, {
                                      size: 18,
                                    }),
                                  }),
                                  imported_3("div", {
                                    className: local_b77a44cd.paymentMethodInfo,
                                    children: [
                                      imported_3("span", {
                                        className:
                                          local_b77a44cd.paymentMethodTitle,
                                        children: [
                                          fn_102c5470(arg),
                                          arg.isDefault &&
                                            local_8.length > 1 &&
                                            imported_3("span", {
                                              className:
                                                local_b77a44cd.paymentMethodBadge,
                                              children: "основной",
                                            }),
                                        ],
                                      }),
                                      imported_3("span", {
                                        className:
                                          local_b77a44cd.paymentMethodSubtitle,
                                        children: fn_486ae540(arg),
                                      }),
                                    ],
                                  }),
                                  imported_3("div", {
                                    className:
                                      local_b77a44cd.paymentMethodActions,
                                    children: [
                                      !arg.isDefault &&
                                        imported_3("button", {
                                          type: "button",
                                          className:
                                            local_b77a44cd.paymentMethodBtn,
                                          onClick: () => local_20(arg.id),
                                          children: "Сделать основным",
                                        }),
                                      imported_3("button", {
                                        type: "button",
                                        className:
                                          local_b77a44cd.paymentMethodBtnDanger,
                                        onClick: () => local_16(arg),
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
                            imported_3("div", {
                              className: local_b77a44cd.paymentMethodsEmpty,
                              children: [
                                imported_3(local_0ead779e, {
                                  size: 18,
                                }),
                                imported_3("span", {
                                  children: "Нет привязанных методов оплаты",
                                }),
                              ],
                            }),
                          local_8.length < local_f06debfc_5
                            ? local_14
                              ? imported_3(imported_25, {
                                  children: [
                                    imported_3("button", {
                                      type: "button",
                                      className:
                                        local_b77a44cd.paymentMethodAdd,
                                      onClick: () => local_22("bank_card"),
                                      disabled: local_12,
                                      children: [
                                        imported_3("span", {
                                          className:
                                            local_b77a44cd.paymentMethodIcon,
                                          children: imported_3(local_0ead779e, {
                                            size: 16,
                                          }),
                                        }),
                                        "Банковская карта",
                                      ],
                                    }),
                                    imported_3("button", {
                                      type: "button",
                                      className:
                                        local_b77a44cd.paymentMethodAdd,
                                      onClick: () => local_22("sbp"),
                                      disabled: local_12,
                                      children: [
                                        imported_3("span", {
                                          className:
                                            local_b77a44cd.paymentMethodIcon,
                                          children: imported_3(local_2db7ffcd, {
                                            size: 16,
                                          }),
                                        }),
                                        "СБП",
                                      ],
                                    }),
                                  ],
                                })
                              : imported_3("button", {
                                  type: "button",
                                  className: local_b77a44cd.paymentMethodAdd,
                                  onClick: () => local_15(true),
                                  disabled: local_12,
                                  children: [
                                    imported_3("span", {
                                      className:
                                        local_b77a44cd.paymentMethodIcon,
                                      children: imported_3(imported_34, {
                                        size: 16,
                                      }),
                                    }),
                                    "Добавить способ оплаты",
                                  ],
                                })
                            : imported_3("div", {
                                className: local_b77a44cd.paymentMethodsEmpty,
                                children: imported_3("span", {
                                  children: [
                                    "Достигнут лимит способов оплаты (",
                                    local_f06debfc_5,
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
        imported_3(fn_bc6396a2, {
          expiresAt: local.subscription.expiresAt,
          onConfirm: async () => {
            const local = await local_73f326c5.setAutoRenewal(false);
            imported_10.getState().setProfile({
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
        imported_3(fn_abc06512, {
          onConfirm: async () => {
            const local = await local_73f326c5.setAutoRenewal(true);
            imported_10.getState().setProfile({
              ...local,
              subscription: {
                ...local.subscription,
                autoRenewal: local.autoRenewal,
                ...(local.expiresAt
                  ? {
                      expiresAt: local.expiresAt,
                    }
                  : {}),
              },
            });
          },
          onClose: () => local_5(false),
        }),
      useSettingsStore &&
        imported_3(imported_42, {
          title: "Отвязать способ оплаты?",
          message: `${fn_102c5470(useSettingsStore)} будет отвязан. Это действие нельзя отменить.`,
          confirmText: "Отвязать",
          danger: true,
          onConfirm: () => local_21(useSettingsStore),
          onClose: () => local_16(null),
        }),
      imported_3(fn_30e987f3, {
        isOpen: local_6,
        onClose: () => {
          local_7(false);
          local_73f326c5
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
function fn_71119f17({
  value: arg,
  options: arg_2,
  onChange: arg_3,
  disabled: arg_4,
}) {
  const [local, local_2] = imported_6(false);
  const local_3 = imported_19(null);
  const local_4 = arg_2.find((arg) => arg.value === arg);
  imported_20(() => {
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
  return imported_3("div", {
    ref: local_3,
    className: local_28704e24.selectWrapper,
    children: [
      imported_3("button", {
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
          imported_3("span", {
            className: local_28704e24.selectedValue,
            children: local_4?.label,
          }),
          imported_3(local_6b96bea9, {
            size: 16,
          }),
        ],
      }),
      local &&
        imported_3("div", {
          className: local_28704e24.dropdown,
          children: arg_2.map((arg) =>
            imported_3(
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
  const { theme: local, setTheme: local_2 } = local_5e175cca();
  return imported_3(imported_25, {
    children: [
      imported_3("h2", {
        className: local_b77a44cd.contentTitle,
        children: "Оформление",
      }),
      imported_3("div", {
        className: local_b77a44cd.section,
        children: imported_3("div", {
          className: local_b77a44cd.settingItem,
          children: [
            imported_3("div", {
              className: local_b77a44cd.settingInfo,
              children: imported_3("div", {
                className: local_b77a44cd.settingText,
                children: [
                  imported_3("span", {
                    className: local_b77a44cd.settingTitle,
                    children: "Тема",
                  }),
                  imported_3("span", {
                    className: local_b77a44cd.settingDescription,
                    children: "Выберите цветовую схему приложения",
                  }),
                ],
              }),
            }),
            imported_3(fn_71119f17, {
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
function fn_22d89f94(arg) {
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
      return imported_3("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          imported_3("rect", {
            x: "6",
            y: "2",
            width: "12",
            height: "20",
            rx: "2.5",
          }),
          imported_3("path", {
            d: "M11 18.5h2",
          }),
        ],
      });
    case "tablet":
      return imported_3("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          imported_3("rect", {
            x: "4",
            y: "2.5",
            width: "16",
            height: "19",
            rx: "2.5",
          }),
          imported_3("path", {
            d: "M11 18h2",
          }),
        ],
      });
    default:
      return imported_3("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          imported_3("rect", {
            x: "2.5",
            y: "4",
            width: "19",
            height: "13",
            rx: "2",
          }),
          imported_3("path", {
            d: "M8.5 21h7M12 17v4",
          }),
        ],
      });
  }
}
function fn_9c788d1e({ onChangePassword: arg }) {
  const [local, local_2] = imported_6([]);
  const [local_3, local_4] = imported_6(true);
  const [local_5, local_6] = imported_6(null);
  const [local_7, local_8] = imported_6(null);
  const [local_9, local_10] = imported_6(false);
  const local_11 = imported_22(async () => {
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
  imported_20(() => {
    local_11();
  }, [local_11]);
  const [local_12, local_13] = imported_6(null);
  const local_14 = imported_22(
    async (arg) => {
      local_8(arg.id);
      try {
        const { loggedOut: local } = await local_96437191.revoke(
          arg.id,
          arg.isCurrent,
        );
        if (local) {
          await imported_10.getState().logout();
          return;
        }
        local_2((arg) => arg.filter((arg) => arg.id !== arg.id));
        imported_33.success("Сессия завершена");
      } catch {
        local_11();
      } finally {
        local_8(null);
      }
    },
    [local_11],
  );
  const local_15 = imported_22(async () => {
    try {
      const local = await local_96437191.revokeOthers();
      local_10(false);
      imported_33.success(
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
  return imported_3(imported_25, {
    children: [
      imported_3("h2", {
        className: local_b77a44cd.contentTitle,
        children: "Безопасность",
      }),
      imported_3("div", {
        className: local_b77a44cd.section,
        children: imported_3("div", {
          className: local_b77a44cd.settingItem,
          children: [
            imported_3("div", {
              className: local_b77a44cd.settingInfo,
              children: imported_3("div", {
                className: local_b77a44cd.settingText,
                children: [
                  imported_3("span", {
                    className: local_b77a44cd.settingTitle,
                    children: "Пароль",
                  }),
                  imported_3("span", {
                    className: local_b77a44cd.settingDescription,
                    children: "Изменить пароль от аккаунта",
                  }),
                ],
              }),
            }),
            imported_3(imported_7, {
              size: "sm",
              onClick: arg,
              children: "Сменить пароль",
            }),
          ],
        }),
      }),
      imported_3("div", {
        className: local_b77a44cd.section,
        children: [
          imported_3("div", {
            className: local_b77a44cd.settingText,
            style: {
              marginBottom: 12,
            },
            children: [
              imported_3("span", {
                className: local_b77a44cd.settingTitle,
                children: "Активные сессии",
              }),
              imported_3("span", {
                className: local_b77a44cd.settingDescription,
                children:
                  "Устройства, на которых сейчас выполнен вход в ваш аккаунт",
              }),
            ],
          }),
          local_3
            ? imported_3(imported_24, {})
            : local_5
              ? imported_3("div", {
                  className: local_b77a44cd.saveError,
                  children: local_5,
                })
              : local.length === 0
                ? imported_3("div", {
                    className: local_b77a44cd.emptyBlocklist,
                    children: "Активных сессий не найдено",
                  })
                : imported_3(imported_25, {
                    children: [
                      imported_3("div", {
                        className: local_b77a44cd.sessionsList,
                        children: local.map((arg) =>
                          imported_3(
                            "div",
                            {
                              className: local_b77a44cd.sessionItem,
                              children: [
                                imported_3("div", {
                                  className: local_b77a44cd.sessionIcon,
                                  children: imported_3(fn_2d43bd11, {
                                    type: arg.deviceType,
                                  }),
                                }),
                                imported_3("div", {
                                  className: local_b77a44cd.sessionInfo,
                                  children: [
                                    imported_3("div", {
                                      className: local_b77a44cd.sessionDevice,
                                      children: fn_43c5b541(arg),
                                    }),
                                    imported_3("div", {
                                      className: local_b77a44cd.sessionTime,
                                      children: [
                                        fn_983517b5(arg),
                                        " · ",
                                        fn_22d89f94(arg.lastUsedAt),
                                      ],
                                    }),
                                  ],
                                }),
                                arg.isCurrent
                                  ? imported_3("span", {
                                      className:
                                        local_b77a44cd.sessionCurrentBadge,
                                      children: "Это устройство",
                                    })
                                  : imported_3("button", {
                                      type: "button",
                                      className: local_b77a44cd.sessionRemove,
                                      title: "Завершить сессию",
                                      "aria-label": "Завершить сессию",
                                      disabled: local_7 === arg.id,
                                      onClick: () => local_13(arg),
                                      children:
                                        local_7 === arg.id
                                          ? imported_3(imported_35, {
                                              size: 16,
                                            })
                                          : imported_3(imported_36, {
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
                        imported_3("button", {
                          type: "button",
                          className: local_b77a44cd.logoutButton,
                          onClick: () => local_10(true),
                          children: "Завершить все другие сессии",
                        }),
                    ],
                  }),
        ],
      }),
      local_12 &&
        imported_3(imported_42, {
          title: "Завершить сессию?",
          message: `Вы действительно хотите завершить сессию «${fn_43c5b541(local_12)}»? Устройство будет разлогинено.`,
          confirmText: "Завершить",
          danger: true,
          onConfirm: () => local_14(local_12),
          onClose: () => local_13(null),
        }),
      local_9 &&
        imported_3(imported_42, {
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
const local_a5ebbbd3 = imported_15(function (
  { onDirtyChange: arg, onSavingChange: arg_2 },
  arg_3,
) {
  const {
    settings: local,
    fetchSettings: local_2,
    updateSettings: local_3,
  } = imported_37();
  const [local_4, local_5] = imported_6({
    webEnabled: true,
    soundEnabled: true,
    follows: true,
    reactions: true,
    replies: true,
    mentions: true,
    wallPosts: true,
  });
  const [local_6, local_7] = imported_6(null);
  const [local_8, local_9] = imported_6(false);
  const [local_10, local_11] = imported_6(false);
  const [useSettingsStore, local_12] = imported_6(false);
  imported_20(() => {
    if (!useSettingsStore && !local) {
      local_2();
    }
  }, [useSettingsStore]);
  imported_20(() => {
    if (local && !useSettingsStore) {
      const local = {
        webEnabled: local.webEnabled,
        soundEnabled: local.soundEnabled,
        follows: local.preferences.follows,
        reactions: local.preferences.reactions,
        replies: local.preferences.replies,
        mentions: local.preferences.mentions,
        wallPosts: local.preferences.wallPosts,
      };
      local_5(local);
      local_7(local);
      local_9(false);
      local_12(true);
    }
  }, [local, useSettingsStore]);
  imported_20(() => {
    arg(local_8);
  }, [local_8]);
  imported_20(() => {
    arg_2(local_10);
  }, [local_10]);
  const local_13 = (arg, arg_2) => {
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
  const local_14 = async () => {
    if (!(!local_8 || local_10)) {
      local_11(true);
      try {
        await local_3({
          webEnabled: local_4.webEnabled,
          soundEnabled: local_4.soundEnabled,
          preferences: {
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
        imported_33.success("Настройки уведомлений сохранены");
      } catch (error) {
        console.error("Failed to save notification settings:", error);
        imported_33.error("Не удалось сохранить настройки");
      } finally {
        local_11(false);
      }
    }
  };
  const local_15 = () => {
    if (local_6) {
      local_5({
        ...local_6,
      });
      local_9(false);
    }
  };
  imported_23(arg_3, () => ({
    save: local_14,
    discard: local_15,
  }));
  return imported_3(imported_25, {
    children: [
      imported_3("h2", {
        className: local_b77a44cd.contentTitle,
        children: "Уведомления",
      }),
      imported_3("div", {
        className: local_b77a44cd.section,
        children: [
          imported_3("div", {
            className: local_b77a44cd.sectionTitle,
            children: "Основные",
          }),
          imported_3("div", {
            className: `${local_b77a44cd.settingItem} ${local_b77a44cd.clickable}`,
            onClick: () => local_13("webEnabled", !local_4.webEnabled),
            children: [
              imported_3("div", {
                className: local_b77a44cd.settingInfo,
                children: [
                  imported_3("div", {
                    className: `${local_b77a44cd.settingIcon} ${local_b77a44cd.blue}`,
                    children: imported_3(imported_38, {
                      size: 20,
                    }),
                  }),
                  imported_3("div", {
                    className: local_b77a44cd.settingText,
                    children: [
                      imported_3("span", {
                        className: local_b77a44cd.settingTitle,
                        children: "Уведомления",
                      }),
                      imported_3("span", {
                        className: local_b77a44cd.settingDescription,
                        children: "Включение или отключение всех уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              imported_3(fn_6854c4bf, {
                checked: local_4.webEnabled,
                onChange: (arg) => local_13("webEnabled", arg),
              }),
            ],
          }),
          imported_3("div", {
            className: `${local_b77a44cd.settingItem} ${local_b77a44cd.clickable}`,
            onClick: () => local_13("soundEnabled", !local_4.soundEnabled),
            children: [
              imported_3("div", {
                className: local_b77a44cd.settingInfo,
                children: [
                  imported_3("div", {
                    className: `${local_b77a44cd.settingIcon} ${local_b77a44cd.blue}`,
                    children: imported_3(local_eb61682a, {
                      size: 20,
                    }),
                  }),
                  imported_3("div", {
                    className: local_b77a44cd.settingText,
                    children: [
                      imported_3("span", {
                        className: local_b77a44cd.settingTitle,
                        children: "Уведомления со звуком",
                      }),
                      imported_3("span", {
                        className: local_b77a44cd.settingDescription,
                        children: "Воспроизводить звуки уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              imported_3(fn_6854c4bf, {
                checked: local_4.soundEnabled,
                onChange: (arg) => local_13("soundEnabled", arg),
              }),
            ],
          }),
        ],
      }),
      imported_3("div", {
        className: local_b77a44cd.section,
        children: [
          imported_3("div", {
            className: local_b77a44cd.sectionTitle,
            children: "Пользователи",
          }),
          imported_3("div", {
            className: `${local_b77a44cd.settingItem} ${local_b77a44cd.clickable}`,
            onClick: () => local_13("follows", !local_4.follows),
            children: [
              imported_3("div", {
                className: local_b77a44cd.settingInfo,
                children: [
                  imported_3("div", {
                    className: `${local_b77a44cd.settingIcon} ${local_b77a44cd.blue}`,
                    children: imported_3(local_c1f17bb2, {
                      size: 20,
                    }),
                  }),
                  imported_3("div", {
                    className: local_b77a44cd.settingText,
                    children: [
                      imported_3("span", {
                        className: local_b77a44cd.settingTitle,
                        children: "Подписки",
                      }),
                      imported_3("span", {
                        className: local_b77a44cd.settingDescription,
                        children: "Уведомления о подписках и запросах в друзья",
                      }),
                    ],
                  }),
                ],
              }),
              imported_3(fn_6854c4bf, {
                checked: local_4.follows,
                onChange: (arg) => local_13("follows", arg),
              }),
            ],
          }),
          imported_3("div", {
            className: `${local_b77a44cd.settingItem} ${local_b77a44cd.clickable}`,
            onClick: () => local_13("wallPosts", !local_4.wallPosts),
            children: [
              imported_3("div", {
                className: local_b77a44cd.settingInfo,
                children: [
                  imported_3("div", {
                    className: `${local_b77a44cd.settingIcon} ${local_b77a44cd.blue}`,
                    children: imported_3(local_8b78497b, {
                      size: 20,
                    }),
                  }),
                  imported_3("div", {
                    className: local_b77a44cd.settingText,
                    children: [
                      imported_3("span", {
                        className: local_b77a44cd.settingTitle,
                        children: "Посты на стене",
                      }),
                      imported_3("span", {
                        className: local_b77a44cd.settingDescription,
                        children: "Уведомления о новых постах на вашей стене",
                      }),
                    ],
                  }),
                ],
              }),
              imported_3(fn_6854c4bf, {
                checked: local_4.wallPosts,
                onChange: (arg) => local_13("wallPosts", arg),
              }),
            ],
          }),
        ],
      }),
      imported_3("div", {
        className: local_b77a44cd.section,
        children: [
          imported_3("div", {
            className: local_b77a44cd.sectionTitle,
            children: "Посты",
          }),
          imported_3("div", {
            className: `${local_b77a44cd.settingItem} ${local_b77a44cd.clickable}`,
            onClick: () => local_13("reactions", !local_4.reactions),
            children: [
              imported_3("div", {
                className: local_b77a44cd.settingInfo,
                children: [
                  imported_3("div", {
                    className: `${local_b77a44cd.settingIcon} ${local_b77a44cd.red}`,
                    children: imported_3(local_a008ba72, {
                      size: 20,
                    }),
                  }),
                  imported_3("div", {
                    className: local_b77a44cd.settingText,
                    children: [
                      imported_3("span", {
                        className: local_b77a44cd.settingTitle,
                        children: "Лайки и реакции",
                      }),
                      imported_3("span", {
                        className: local_b77a44cd.settingDescription,
                        children:
                          "Уведомления о реакциях на ваши посты и комментарии",
                      }),
                    ],
                  }),
                ],
              }),
              imported_3(fn_6854c4bf, {
                checked: local_4.reactions,
                onChange: (arg) => local_13("reactions", arg),
              }),
            ],
          }),
          imported_3("div", {
            className: `${local_b77a44cd.settingItem} ${local_b77a44cd.clickable}`,
            onClick: () => local_13("replies", !local_4.replies),
            children: [
              imported_3("div", {
                className: local_b77a44cd.settingInfo,
                children: [
                  imported_3("div", {
                    className: `${local_b77a44cd.settingIcon} ${local_b77a44cd.blue}`,
                    children: imported_3(local_8b78497b, {
                      size: 20,
                    }),
                  }),
                  imported_3("div", {
                    className: local_b77a44cd.settingText,
                    children: [
                      imported_3("span", {
                        className: local_b77a44cd.settingTitle,
                        children: "Комментарии и ответы",
                      }),
                      imported_3("span", {
                        className: local_b77a44cd.settingDescription,
                        children: "Уведомления о новых комментариях и ответах",
                      }),
                    ],
                  }),
                ],
              }),
              imported_3(fn_6854c4bf, {
                checked: local_4.replies,
                onChange: (arg) => local_13("replies", arg),
              }),
            ],
          }),
          imported_3("div", {
            className: `${local_b77a44cd.settingItem} ${local_b77a44cd.clickable}`,
            onClick: () => local_13("mentions", !local_4.mentions),
            children: [
              imported_3("div", {
                className: local_b77a44cd.settingInfo,
                children: [
                  imported_3("div", {
                    className: `${local_b77a44cd.settingIcon} ${local_b77a44cd.purple}`,
                    children: imported_3(imported_44, {
                      size: 20,
                    }),
                  }),
                  imported_3("div", {
                    className: local_b77a44cd.settingText,
                    children: [
                      imported_3("span", {
                        className: local_b77a44cd.settingTitle,
                        children: "Упоминания",
                      }),
                      imported_3("span", {
                        className: local_b77a44cd.settingDescription,
                        children: "Уведомления когда вас упоминают в постах",
                      }),
                    ],
                  }),
                ],
              }),
              imported_3(fn_6854c4bf, {
                checked: local_4.mentions,
                onChange: (arg) => local_13("mentions", arg),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});
const local_db92a3ab = imported_15(function (
  { onDirtyChange: arg, onSavingChange: arg_2 },
  arg_3,
) {
  const [local, local_2] = imported_6({
    isPrivate: false,
    whoCanPostOnWall: "everyone",
    whoCanSeeMyPostReactions: "everyone",
    showLastSeen: true,
  });
  const [local_3, local_4] = imported_6(null);
  const [local_5, local_6] = imported_6(false);
  const [local_7, local_8] = imported_6(false);
  const [local_9, local_10] = imported_6(false);
  const [local_11, useSettingsStore] = imported_6(false);
  const [local_12, local_13] = imported_6([]);
  const [local_14, local_15] = imported_6(null);
  const [local_16, local_17] = imported_6(true);
  const [local_18, local_19] = imported_6(false);
  const [local_20, local_21] = imported_6(false);
  imported_20(() => {
    local_22();
    if (!local_20) {
      local_23();
    }
  }, []);
  imported_20(() => {
    arg(local_5);
  }, [local_5]);
  imported_20(() => {
    arg_2(local_7);
  }, [local_7]);
  const local_22 = async () => {
    if (!local_11) {
      local_10(true);
    }
    try {
      const local = await imported_21.getPrivacySettings();
      const local_2 = {
        isPrivate: local.isPrivate ?? false,
        whoCanPostOnWall: local.whoCanPostOnWall ?? "everyone",
        whoCanSeeMyPostReactions: local.whoCanSeeMyPostReactions ?? "everyone",
        showLastSeen: local.showLastSeen ?? true,
      };
      local_2(local_2);
      local_4(local_2);
      local_6(false);
      useSettingsStore(true);
    } catch (error) {
      console.error("Failed to load privacy settings:", error);
    } finally {
      local_10(false);
    }
  };
  const local_23 = async (arg) => {
    if (!local_18) {
      local_19(true);
      try {
        const local = await imported_39.getBlockedUsers({
          cursor: arg,
          limit: 20,
        });
        local_13(arg ? (arg) => [...arg, ...local.users] : local.users);
        local_15(local.nextCursor);
        local_17(local.hasMore);
        local_21(true);
      } catch (error) {
        console.error("Failed to load blocked users:", error);
      } finally {
        local_19(false);
      }
    }
  };
  const local_24 = async (arg) => {
    try {
      await imported_39.unblockUser(arg);
      local_13((arg) => arg.filter((arg) => arg.id !== arg));
      imported_33.success("Пользователь разблокирован");
    } catch (error) {
      console.error("Failed to unblock user:", error);
      imported_33.error("Не удалось разблокировать пользователя");
    }
  };
  const local_25 = () => {
    if (local_16 && local_14) {
      local_23(local_14);
    }
  };
  const local_26 = (arg, arg_2) => {
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
  const local_27 = async () => {
    if (!(!local_5 || local_7)) {
      local_8(true);
      try {
        await imported_21.updatePrivacySettings({
          whoCanPostOnWall: local.whoCanPostOnWall,
          whoCanSeeMyPostReactions: local.whoCanSeeMyPostReactions,
          showLastSeen: local.showLastSeen,
        });
        local_4({
          ...local,
        });
        local_6(false);
        imported_33.success("Настройки приватности сохранены");
      } catch (error) {
        console.error("Failed to save privacy settings:", error);
        imported_33.error("Не удалось сохранить настройки");
      } finally {
        local_8(false);
      }
    }
  };
  const local_28 = () => {
    if (local_3) {
      local_2({
        ...local_3,
      });
      local_6(false);
    }
  };
  imported_23(arg_3, () => ({
    save: local_27,
    discard: local_28,
  }));
  return imported_3(imported_25, {
    children: [
      imported_3("h2", {
        className: local_b77a44cd.contentTitle,
        children: "Приватность",
      }),
      local_11 &&
        imported_3("div", {
          className: local_b77a44cd.section,
          children: [
            imported_3("div", {
              className: local_b77a44cd.settingItem,
              children: [
                imported_3("div", {
                  className: local_b77a44cd.settingInfo,
                  children: imported_3("div", {
                    className: local_b77a44cd.settingText,
                    children: [
                      imported_3("span", {
                        className: local_b77a44cd.settingTitle,
                        children: "Стена",
                      }),
                      imported_3("span", {
                        className: local_b77a44cd.settingDescription,
                        children: "Кто может писать на вашей стене",
                      }),
                    ],
                  }),
                }),
                imported_3(fn_71119f17, {
                  value: local.whoCanPostOnWall,
                  options: local_341987ca,
                  onChange: (arg) => local_26("whoCanPostOnWall", arg),
                }),
              ],
            }),
            imported_3("div", {
              className: local_b77a44cd.settingItem,
              children: [
                imported_3("div", {
                  className: local_b77a44cd.settingInfo,
                  children: imported_3("div", {
                    className: local_b77a44cd.settingText,
                    children: [
                      imported_3("span", {
                        className: local_b77a44cd.settingTitle,
                        children: "Лайки",
                      }),
                      imported_3("span", {
                        className: local_b77a44cd.settingDescription,
                        children: "Кто может видеть ваши лайкнутые посты",
                      }),
                    ],
                  }),
                }),
                imported_3(fn_71119f17, {
                  value: local.whoCanSeeMyPostReactions,
                  options: local_341987ca,
                  onChange: (arg) => local_26("whoCanSeeMyPostReactions", arg),
                }),
              ],
            }),
            imported_3("div", {
              className: `${local_b77a44cd.settingItem} ${local_b77a44cd.clickable}`,
              onClick: () => local_26("showLastSeen", !local.showLastSeen),
              children: [
                imported_3("div", {
                  className: local_b77a44cd.settingInfo,
                  children: imported_3("div", {
                    className: local_b77a44cd.settingText,
                    children: [
                      imported_3("span", {
                        className: local_b77a44cd.settingTitle,
                        children: "Онлайн-статус",
                      }),
                      imported_3("span", {
                        className: local_b77a44cd.settingDescription,
                        children: "Показывать время последнего визита",
                      }),
                    ],
                  }),
                }),
                imported_3(fn_6854c4bf, {
                  checked: local.showLastSeen,
                  onChange: (arg) => local_26("showLastSeen", arg),
                }),
              ],
            }),
          ],
        }),
      imported_3("div", {
        className: local_b77a44cd.section,
        children: [
          imported_3("div", {
            className: local_b77a44cd.sectionTitle,
            children: "Чёрный список",
          }),
          local_18 && !local_20
            ? imported_3(imported_24, {})
            : local_20
              ? imported_3(imported_25, {
                  children:
                    local_12.length === 0
                      ? imported_3("div", {
                          className: local_b77a44cd.emptyBlocklist,
                          children: "Чёрный список пуст",
                        })
                      : imported_3("div", {
                          className: local_b77a44cd.blockedUsersList,
                          children: [
                            local_12.map((arg) =>
                              imported_3(
                                "div",
                                {
                                  className: local_b77a44cd.blockedUserItem,
                                  children: [
                                    imported_3(imported_30, {
                                      src: arg.avatar,
                                      alt: arg.displayName,
                                      size: "sm",
                                    }),
                                    imported_3("div", {
                                      className: local_b77a44cd.blockedUserInfo,
                                      children: [
                                        imported_3("span", {
                                          className:
                                            local_b77a44cd.blockedUserName,
                                          children: arg.displayName,
                                        }),
                                        arg.username &&
                                          imported_3("span", {
                                            className:
                                              local_b77a44cd.blockedUserUsername,
                                            children: ["@", arg.username],
                                          }),
                                      ],
                                    }),
                                    imported_3(imported_7, {
                                      size: "sm",
                                      variant: "secondary",
                                      onClick: () => local_24(arg.id),
                                      children: "Разблокировать",
                                    }),
                                  ],
                                },
                                arg.id,
                              ),
                            ),
                            local_16 &&
                              imported_3(imported_7, {
                                variant: "secondary",
                                onClick: local_25,
                                disabled: local_18,
                                loading: local_18,
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
const local_e777614a = [
  {
    id: "account",
    icon: imported_40,
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
    icon: imported_41,
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
    icon: imported_38,
    label: "Уведомления",
    color: "#ec4899",
  },
];
export function fn_6f3fadc0({ onClose: arg }) {
  const local = imported_17();
  const [local_2, local_3] = imported_6("account");
  const [local_4, local_5] = imported_6(false);
  const [local_6, local_7] = imported_6(false);
  const [local_8, local_9] = imported_6({});
  const [local_10, local_11] = imported_6({});
  const local_12 = imported_19(null);
  const local_13 = imported_19(null);
  const local_14 = imported_19(null);
  const useSettingsStore = Object.values(local_8).some(Boolean);
  const local_15 = Object.values(local_10).some(Boolean);
  const local_16 = imported_22(
    (arg) => (arg) => {
      local_9((arg) => ({
        ...arg,
        [arg]: arg,
      }));
    },
    [],
  );
  const local_17 = imported_22(
    (arg) => (arg) => {
      local_11((arg) => ({
        ...arg,
        [arg]: arg,
      }));
    },
    [],
  );
  const local_18 = async () => {
    const local = [];
    if (local_8.account) {
      local.push(local_12.current?.save() ?? Promise.resolve());
    }
    if (local_8.notifications) {
      local.push(local_13.current?.save() ?? Promise.resolve());
    }
    if (local_8.privacy) {
      local.push(local_14.current?.save() ?? Promise.resolve());
    }
    await Promise.all(local);
  };
  const local_19 = (arg) => {
    if (arg !== local_2) {
      local_9({});
      local_3(arg);
    }
  };
  const local_20 = (arg) => {
    local_9({});
    local_3(arg);
    local_5(true);
  };
  const local_21 = () => {
    local_9({});
    local_5(false);
  };
  const local_22 = () => {
    arg();
  };
  const local_23 = () => {
    switch (local_2) {
      case "account":
        return imported_3(local_317424dd, {
          ref: local_12,
          onDirtyChange: local_16("account"),
          onSavingChange: local_17("account"),
          onClose: arg,
        });
      case "payment":
        return imported_3(fn_0f03bcc0, {});
      case "appearance":
        return imported_3(fn_92ca2ba3, {});
      case "security":
        return imported_3(fn_9c788d1e, {
          onChangePassword: () => local_7(true),
        });
      case "notifications":
        return imported_3(local_a5ebbbd3, {
          ref: local_13,
          onDirtyChange: local_16("notifications"),
          onSavingChange: local_17("notifications"),
        });
      case "privacy":
        return imported_3(local_db92a3ab, {
          ref: local_14,
          onDirtyChange: local_16("privacy"),
          onSavingChange: local_17("privacy"),
        });
    }
  };
  if (local_6) {
    return imported_3(fn_689a0068, {
      onClose: arg,
      onBack: () => local_7(false),
    });
  }
  const local_24 = useSettingsStore
    ? imported_3("div", {
        className: local_b77a44cd.actionBar,
        children: [
          imported_3(imported_7, {
            variant: "secondary",
            onClick: local_22,
            children: "Отмена",
          }),
          imported_3(imported_7, {
            variant: "primary",
            onClick: local_18,
            disabled: local_15,
            loading: local_15,
            children: "Сохранить",
          }),
        ],
      })
    : null;
  return imported_3(imported_8, {
    onClose: local_22,
    frameless: true,
    size: "wide",
    className: local_b77a44cd.modalContainer,
    children: imported_3("div", {
      className: local_b77a44cd.settingsModal,
      children: local
        ? imported_3("div", {
            className: `${local_b77a44cd.mobilePager} ${local_4 ? local_b77a44cd.detailOpen : ""}`,
            children: [
              imported_3("div", {
                className: local_b77a44cd.mobileScreen,
                children: [
                  imported_3("div", {
                    className: local_b77a44cd.mobileMenuTitle,
                    children: "Настройки",
                  }),
                  imported_3("nav", {
                    className: local_b77a44cd.mobileMenu,
                    children: local_e777614a.map((arg) =>
                      imported_3(
                        "button",
                        {
                          type: "button",
                          className: local_b77a44cd.mobileMenuItem,
                          onClick: () => local_20(arg.id),
                          children: [
                            imported_3("span", {
                              className: local_b77a44cd.mobileMenuIcon,
                              style: {
                                background: arg.color,
                              },
                              children: imported_3(arg.icon, {
                                size: 16,
                              }),
                            }),
                            imported_3("span", {
                              children: arg.label,
                            }),
                            imported_3("span", {
                              className: local_b77a44cd.mobileMenuChevron,
                              children: imported_3(imported_45, {
                                size: 18,
                              }),
                            }),
                          ],
                        },
                        arg.id,
                      ),
                    ),
                  }),
                ],
              }),
              imported_3("div", {
                className: local_b77a44cd.mobileScreen,
                children: [
                  imported_3("div", {
                    className: local_b77a44cd.mobileHeader,
                    children: [
                      imported_3("button", {
                        type: "button",
                        className: local_b77a44cd.mobileBack,
                        onClick: local_21,
                        children: [
                          imported_3(imported_46, {
                            size: 22,
                          }),
                          imported_3("span", {
                            children: "Настройки",
                          }),
                        ],
                      }),
                      imported_3("span", {
                        className: local_b77a44cd.mobileHeaderTitle,
                        children: local_e777614a.find(
                          (arg) => arg.id === local_2,
                        )?.label,
                      }),
                    ],
                  }),
                  imported_3("div", {
                    className: local_b77a44cd.content,
                    children: local_23(),
                  }),
                  local_24,
                ],
              }),
            ],
          })
        : imported_3(imported_25, {
            children: [
              imported_3("div", {
                className: local_b77a44cd.sidebar,
                children: [
                  imported_3("div", {
                    className: local_b77a44cd.sidebarTitle,
                    children: "Настройки",
                  }),
                  imported_3("nav", {
                    children: local_e777614a.map((arg) =>
                      imported_3(
                        "button",
                        {
                          type: "button",
                          className: `${local_b77a44cd.navItem} ${local_2 === arg.id ? local_b77a44cd.active : ""}`,
                          onClick: () => local_19(arg.id),
                          children: [
                            imported_3(arg.icon, {
                              size: 24,
                            }),
                            imported_3("span", {
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
              imported_3("div", {
                className: local_b77a44cd.contentWrapper,
                children: [
                  imported_3("div", {
                    className: local_b77a44cd.content,
                    children: local_23(),
                  }),
                  local_24,
                ],
              }),
            ],
          }),
    }),
  });
}
export { useSettingsStore };
