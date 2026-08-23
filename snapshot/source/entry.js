const local_5b673d6a = (
  symbol_073,
  arg = local_5b673d6a,
  arg_2 = arg.f ||
    (arg.f = [
      "./routes/subscription-modal.js",
      "./shared/chunk-3d5994e265d4.js",
      "./shared/chunk-3d5994e265d4.css",
      "./components/icon-info.js",
      "./components/icon-notification-mention.js",
      "./components/icon-chevron-right.js",
      "./components/icon-chevron-left.js",
      "./routes/subscription-modal.css",
      "./routes/changelog-modal.js",
      "./routes/changelog-modal.css",
      "./routes/voice-input.js",
      "./components/icon-play.js",
      "./routes/voice-input.css",
      "./routes/post-media-video.js",
      "./components/volume-glyph.js",
      "./routes/post-media-video.css",
      "./routes/report-modal.js",
      "./components/icon-check-circle.js",
      "./routes/report-modal.css",
      "./routes/poll.js",
      "./routes/poll.css",
      "./routes/voice-message.js",
      "./routes/voice-message.css",
      "./routes/emoji-picker.js",
      "./routes/emoji-picker.css",
      "./routes/drawing-canvas.js",
      "./routes/drawing-canvas.css",
      "./routes/image-viewer.js",
      "./shared/use-body-scroll-lock.js",
      "./routes/image-viewer.css",
      "./routes/auth-layout.js",
      "./routes/auth-layout.css",
      "./routes/global-video-player.js",
      "./routes/global-video-player.css",
      "./routes/hashtag.js",
      "./routes/hashtag.css",
      "./routes/profile.js",
      "./components/icon-check.js",
      "./routes/profile.css",
      "./routes/post-page.js",
      "./routes/post-page.css",
      "./routes/notifications.js",
      "./routes/notifications.css",
      "./routes/search.js",
      "./routes/search.css",
      "./routes/shop-frame.js",
      "./routes/shop-frame.css",
      "./routes/delete-account.js",
      "./routes/delete-account.css",
      "./routes/terms.js",
      "./routes/terms.css",
      "./routes/privacy.js",
      "./routes/privacy.css",
      "./routes/cookies.js",
      "./routes/cookies.css",
      "./routes/external-link.js",
      "./routes/external-link.css",
      "./routes/support.js",
      "./routes/support.css",
      "./routes/child-safety.js",
      "./routes/child-safety.css",
      "./routes/event.js",
      "./routes/event.css",
      "./routes/subscription-terms.js",
      "./shared/subscription-terms-module.js",
      "./shared/subscription-terms-module.css",
      "./routes/recurring-terms.js",
      "./routes/login.js",
      "./shared/chunk-0684deeacdb3.js",
      "./shared/chunk-0684deeacdb3.css",
      "./shared/chunk-7195651f0d46.js",
      "./shared/chunk-7195651f0d46.css",
      "./components/icon-eye-off.js",
      "./routes/login.css",
      "./routes/register.js",
      "./routes/register.css",
      "./routes/forgot-password.js",
      "./routes/forgot-password.css",
      "./routes/reset-password.js",
      "./routes/reset-password.css",
      "./routes/onboarding.js",
      "./routes/onboarding.css",
    ]),
) => symbol_073.map((symbol_073) => arg_2[symbol_073]);
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
(function () {
  const local = document.createElement("link").relList;
  if (local && local.supports && local.supports("modulepreload")) {
    return;
  }
  for (const local of document.querySelectorAll('link[rel="modulepreload"]')) {
    fn_2(local);
  }
  new MutationObserver((arg) => {
    for (const local of arg) {
      if (local.type === "childList") {
        for (const local of local.addedNodes) {
          if (local.tagName === "LINK" && local.rel === "modulepreload") {
            fn_2(local);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true,
  });
  function fn(arg) {
    const local = {};
    if (arg.integrity) {
      local.integrity = arg.integrity;
    }
    if (arg.referrerPolicy) {
      local.referrerPolicy = arg.referrerPolicy;
    }
    if (arg.crossOrigin === "use-credentials") {
      local.credentials = "include";
    } else if (arg.crossOrigin === "anonymous") {
      local.credentials = "omit";
    } else {
      local.credentials = "same-origin";
    }
    return local;
  }
  function fn_2(arg) {
    if (arg.ep) {
      return;
    }
    arg.ep = true;
    const local = fn(arg);
    fetch(arg.href, local);
  }
})();
let local_657db3b7;
let local_657db3b7_2;
let local_657db3b7_3;
let local_657db3b7_4;
let local_657db3b7_5;
let local_657db3b7_6;
let local_657db3b7_7;
let local_657db3b7_8;
let local_657db3b7_9;
let local_657db3b7_10;
let local_657db3b7_11;
let local_657db3b7_12;
const local_603ced16 = {};
const local_0f018a95 = [];
const local_ad6d7392 =
  /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const local_2cae01a0 = Array.isArray;
function fn_be5cf4ce(arg, arg_2) {
  for (const local in arg_2) {
    arg[local] = arg_2[local];
  }
  return arg;
}
function fn_c05b34ab(arg) {
  if (arg && arg.parentNode) {
    arg.parentNode.removeChild(arg);
  }
}
function fn_ba0330ef(arg, arg_2, arg_3) {
  let local;
  let local_2;
  let local_3;
  const local_4 = {};
  for (local_3 in arg_2) {
    if (local_3 == "key") {
      local = arg_2[local_3];
    } else if (local_3 == "ref") {
      local_2 = arg_2[local_3];
    } else {
      local_4[local_3] = arg_2[local_3];
    }
  }
  if (arguments.length > 2) {
    local_4.children =
      arguments.length > 3 ? local_657db3b7.call(arguments, 2) : arg_3;
  }
  if (typeof arg === "function" && arg.defaultProps != null) {
    for (local_3 in arg.defaultProps) {
      if (local_4[local_3] === undefined) {
        local_4[local_3] = arg.defaultProps[local_3];
      }
    }
  }
  return fn_99846410(arg, local_4, local, local_2, null);
}
function fn_99846410(arg, arg_2, arg_3, arg_4, arg_5) {
  const local = {
    type: arg,
    props: arg_2,
    key: arg_3,
    ref: arg_4,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: undefined,
    __v: arg_5 ?? ++local_657db3b7_3,
    __i: -1,
    __u: 0,
  };
  if (arg_5 == null && local_657db3b7_2.vnode != null) {
    local_657db3b7_2.vnode(local);
  }
  return local;
}
function fn_e91fa79b() {
  return {
    current: null,
  };
}
function symbol_063(arg) {
  return arg.children;
}
class clazz_183a9acd {
  constructor(arg, arg_2) {
    this.props = arg;
    this.context = arg_2;
  }
  setState(arg, arg_2) {
    let local;
    local =
      this.__s != null && this.__s != this.state
        ? this.__s
        : (this.__s = fn_be5cf4ce({}, this.state));
    if (typeof arg === "function") {
      arg = arg(fn_be5cf4ce({}, local), this.props);
    }
    if (arg) {
      fn_be5cf4ce(local, arg);
    }
    if (arg != null && this.__v) {
      if (arg_2) {
        this._sb.push(arg_2);
      }
      fn_006034fa(this);
    }
  }
  forceUpdate(arg) {
    if (this.__v) {
      this.__e = true;
      if (arg) {
        this.__h.push(arg);
      }
      fn_006034fa(this);
    }
  }
}
function fn_f258c0a1(arg, arg_2) {
  if (arg_2 == null) {
    if (arg.__) {
      return fn_f258c0a1(arg.__, arg.__i + 1);
    }
    return null;
  }
  let local;
  for (; arg_2 < arg.__k.length; arg_2++) {
    if ((local = arg.__k[arg_2]) != null && local.__e != null) {
      return local.__e;
    }
  }
  if (typeof arg.type === "function") {
    return fn_f258c0a1(arg);
  }
  return null;
}
function fn_08fc7834(arg) {
  let local;
  let local_2;
  if ((arg = arg.__) != null && arg.__c != null) {
    arg.__e = null;
    arg.__c.base = null;
    for (local = 0; local < arg.__k.length; local++) {
      if ((local_2 = arg.__k[local]) != null && local_2.__e != null) {
        arg.__e = arg.__c.base = local_2.__e;
        break;
      }
    }
    return fn_08fc7834(arg);
  }
}
function fn_006034fa(arg) {
  if (
    (!arg.__d &&
      (arg.__d = true) &&
      local_657db3b7_4.push(arg) &&
      !fn_cb9fee21.__r++) ||
    local_657db3b7_5 != local_657db3b7_2.debounceRendering
  ) {
    (
      (local_657db3b7_5 = local_657db3b7_2.debounceRendering) ||
      local_657db3b7_6
    )(fn_cb9fee21);
  }
}
function fn_cb9fee21() {
  let local;
  let local_2;
  let local_3;
  let local_4;
  let local_5;
  let local_6;
  let local_7;
  let local_8 = 1;
  while (local_657db3b7_4.length) {
    if (local_657db3b7_4.length > local_8) {
      local_657db3b7_4.sort(local_657db3b7_7);
    }
    local = local_657db3b7_4.shift();
    local_8 = local_657db3b7_4.length;
    if (local.__d) {
      local_3 = undefined;
      local_4 = undefined;
      local_5 = (local_4 = (local_2 = local).__v).__e;
      local_6 = [];
      local_7 = [];
      if (local_2.__P) {
        (local_3 = fn_be5cf4ce({}, local_4)).__v = local_4.__v + 1;
        if (local_657db3b7_2.vnode) {
          local_657db3b7_2.vnode(local_3);
        }
        fn_49f0a109(
          local_2.__P,
          local_3,
          local_4,
          local_2.__n,
          local_2.__P.namespaceURI,
          32 & local_4.__u ? [local_5] : null,
          local_6,
          local_5 ?? fn_f258c0a1(local_4),
          !!(32 & local_4.__u),
          local_7,
        );
        local_3.__v = local_4.__v;
        local_3.__.__k[local_3.__i] = local_3;
        fn_863f0984(local_6, local_3, local_7);
        local_4.__e = local_4.__ = null;
        if (local_3.__e != local_5) {
          fn_08fc7834(local_3);
        }
      }
    }
  }
  fn_cb9fee21.__r = 0;
}
function fn_4f1570cb(
  arg,
  arg_2,
  arg_3,
  arg_4,
  arg_5,
  arg_6,
  arg_7,
  arg_8,
  arg_9,
  arg_10,
  arg_11,
) {
  let local;
  let local_2;
  let local_3;
  let local_4;
  let local_5;
  let local_6;
  let local_7;
  const local_8 = (arg_4 && arg_4.__k) || local_0f018a95;
  const local_9 = arg_2.length;
  arg_9 = fn_fc873439(arg_3, arg_2, local_8, arg_9, local_9);
  for (local = 0; local < local_9; local++) {
    if ((local_3 = arg_3.__k[local]) != null) {
      local_2 =
        local_3.__i == -1
          ? local_603ced16
          : local_8[local_3.__i] || local_603ced16;
      local_3.__i = local;
      local_6 = fn_49f0a109(
        arg,
        local_3,
        local_2,
        arg_5,
        arg_6,
        arg_7,
        arg_8,
        arg_9,
        arg_10,
        arg_11,
      );
      local_4 = local_3.__e;
      if (local_3.ref && local_2.ref != local_3.ref) {
        if (local_2.ref) {
          fn_1e9bf172(local_2.ref, null, local_3);
        }
        arg_11.push(local_3.ref, local_3.__c || local_4, local_3);
      }
      if (local_5 == null && local_4 != null) {
        local_5 = local_4;
      }
      if ((local_7 = !!(4 & local_3.__u)) || local_2.__k === local_3.__k) {
        arg_9 = fn_1ba9d87d(local_3, arg_9, arg, local_7);
      } else if (typeof local_3.type === "function" && local_6 !== undefined) {
        arg_9 = local_6;
      } else if (local_4) {
        arg_9 = local_4.nextSibling;
      }
      local_3.__u &= -7;
    }
  }
  arg_3.__e = local_5;
  return arg_9;
}
function fn_fc873439(arg, arg_2, arg_3, arg_4, arg_5) {
  let local;
  let local_2;
  let local_3;
  let local_4;
  let local_5;
  const local_6 = arg_3.length;
  let local_7 = local_6;
  let local_8 = 0;
  arg.__k = new Array(arg_5);
  for (local = 0; local < arg_5; local++) {
    if (
      (local_2 = arg_2[local]) != null &&
      typeof local_2 !== "boolean" &&
      typeof local_2 !== "function"
    ) {
      if (
        typeof local_2 === "string" ||
        typeof local_2 === "number" ||
        typeof local_2 === "bigint" ||
        local_2.constructor == String
      ) {
        local_2 = arg.__k[local] = fn_99846410(null, local_2, null, null, null);
      } else if (local_2cae01a0(local_2)) {
        local_2 = arg.__k[local] = fn_99846410(
          symbol_063,
          {
            children: local_2,
          },
          null,
          null,
          null,
        );
      } else if (local_2.constructor === undefined && local_2.__b > 0) {
        local_2 = arg.__k[local] = fn_99846410(
          local_2.type,
          local_2.props,
          local_2.key,
          local_2.ref ? local_2.ref : null,
          local_2.__v,
        );
      } else {
        arg.__k[local] = local_2;
      }
      local_4 = local + local_8;
      local_2.__ = arg;
      local_2.__b = arg.__b + 1;
      local_3 = null;
      (local_5 = local_2.__i = fn_c884de1f(local_2, arg_3, local_4, local_7)) !=
        -1 && (local_7--, (local_3 = arg_3[local_5]) && (local_3.__u |= 2));
      local_3 == null || local_3.__v == null
        ? (local_5 == -1 &&
            (arg_5 > local_6 ? local_8-- : arg_5 < local_6 && local_8++),
          typeof local_2.type !== "function" && (local_2.__u |= 4))
        : local_5 != local_4 &&
          (local_5 == local_4 - 1
            ? local_8--
            : local_5 == local_4 + 1
              ? local_8++
              : (local_5 > local_4 ? local_8-- : local_8++,
                (local_2.__u |= 4)));
    } else {
      arg.__k[local] = null;
    }
  }
  if (local_7) {
    for (local = 0; local < local_6; local++) {
      if ((local_3 = arg_3[local]) != null && (2 & local_3.__u) == 0) {
        if (local_3.__e == arg_4) {
          arg_4 = fn_f258c0a1(local_3);
        }
        fn_72e1cf92(local_3, local_3);
      }
    }
  }
  return arg_4;
}
function fn_1ba9d87d(arg, arg_2, arg_3, arg_4) {
  let local;
  let local_2;
  if (typeof arg.type === "function") {
    local = arg.__k;
    for (local_2 = 0; local && local_2 < local.length; local_2++) {
      if (local[local_2]) {
        local[local_2].__ = arg;
        arg_2 = fn_1ba9d87d(local[local_2], arg_2, arg_3, arg_4);
      }
    }
    return arg_2;
  }
  if (arg.__e != arg_2) {
    if (arg_4) {
      if (arg_2 && arg.type && !arg_2.parentNode) {
        arg_2 = fn_f258c0a1(arg);
      }
      arg_3.insertBefore(arg.__e, arg_2 || null);
    }
    arg_2 = arg.__e;
  }
  do {
    arg_2 = arg_2 && arg_2.nextSibling;
  } while (arg_2 != null && arg_2.nodeType == 8);
  return arg_2;
}
function fn_c7d3eb90(arg, arg_2) {
  arg_2 = arg_2 || [];
  arg == null ||
    typeof arg === "boolean" ||
    (local_2cae01a0(arg)
      ? arg.some(function (arg) {
          fn_c7d3eb90(arg, arg_2);
        })
      : arg_2.push(arg));
  return arg_2;
}
function fn_c884de1f(arg, arg_2, arg_3, arg_4) {
  let local;
  let local_2;
  let local_3;
  const local_4 = arg.key;
  const local_5 = arg.type;
  let local_6 = arg_2[arg_3];
  const local_7 = local_6 != null && (2 & local_6.__u) == 0;
  if (
    (local_6 === null && local_4 == null) ||
    (local_7 && local_4 == local_6.key && local_5 == local_6.type)
  ) {
    return arg_3;
  }
  if (arg_4 > (local_7 ? 1 : 0)) {
    local = arg_3 - 1;
    for (local_2 = arg_3 + 1; local >= 0 || local_2 < arg_2.length;) {
      if (
        (local_6 = arg_2[(local_3 = local >= 0 ? local-- : local_2++)]) !=
          null &&
        (2 & local_6.__u) == 0 &&
        local_4 == local_6.key &&
        local_5 == local_6.type
      ) {
        return local_3;
      }
    }
  }
  return -1;
}
function fn_9175ac3d(arg, arg_2, arg_3) {
  if (arg_2[0] == "-") {
    arg.setProperty(arg_2, arg_3 ?? "");
  } else {
    arg[arg_2] =
      arg_3 == null
        ? ""
        : typeof arg_3 !== "number" || local_ad6d7392.test(arg_2)
          ? arg_3
          : `${arg_3}px`;
  }
}
function fn_0074851c(arg, arg_2, arg_3, arg_4, arg_5) {
  let local;
  let local_2;
  e: if (arg_2 == "style") {
    if (typeof arg_3 === "string") {
      arg.style.cssText = arg_3;
    } else {
      if (typeof arg_4 === "string") {
        arg.style.cssText = arg_4 = "";
      }
      if (arg_4) {
        for (arg_2 in arg_4) {
          if (!(arg_3 && arg_2 in arg_3)) {
            fn_9175ac3d(arg.style, arg_2, "");
          }
        }
      }
      if (arg_3) {
        for (arg_2 in arg_3) {
          if (!(arg_4 && arg_3[arg_2] == arg_4[arg_2])) {
            fn_9175ac3d(arg.style, arg_2, arg_3[arg_2]);
          }
        }
      }
    }
  } else if (arg_2[0] == "o" && arg_2[1] == "n") {
    local = arg_2 != (arg_2 = arg_2.replace(local_657db3b7_8, "$1"));
    local_2 = arg_2.toLowerCase();
    arg_2 =
      local_2 in arg || arg_2 == "onFocusOut" || arg_2 == "onFocusIn"
        ? local_2.slice(2)
        : arg_2.slice(2);
    if (!arg.l) {
      arg.l = {};
    }
    arg.l[arg_2 + local] = arg_3;
    if (arg_3) {
      if (arg_4) {
        arg_3.u = arg_4.u;
      } else {
        arg_3.u = local_657db3b7_9;
        arg.addEventListener(
          arg_2,
          local ? local_657db3b7_11 : local_657db3b7_10,
          local,
        );
      }
    } else {
      arg.removeEventListener(
        arg_2,
        local ? local_657db3b7_11 : local_657db3b7_10,
        local,
      );
    }
  } else {
    if (arg_5 == "http://www.w3.org/2000/svg") {
      arg_2 = arg_2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    } else if (
      arg_2 != "width" &&
      arg_2 != "height" &&
      arg_2 != "href" &&
      arg_2 != "list" &&
      arg_2 != "form" &&
      arg_2 != "tabIndex" &&
      arg_2 != "download" &&
      arg_2 != "rowSpan" &&
      arg_2 != "colSpan" &&
      arg_2 != "role" &&
      arg_2 != "popover" &&
      arg_2 in arg
    ) {
      try {
        arg[arg_2] = arg_3 ?? "";
        break e;
      } catch {}
    }
    typeof arg_3 === "function" ||
      (arg_3 == null || (arg_3 === false && arg_2[4] != "-")
        ? arg.removeAttribute(arg_2)
        : arg.setAttribute(
            arg_2,
            arg_2 == "popover" && arg_3 == 1 ? "" : arg_3,
          ));
  }
}
function fn_c6434f8e(arg) {
  return function (arg) {
    if (this.l) {
      const local = this.l[arg.type + arg];
      if (arg.t == null) {
        arg.t = local_657db3b7_9++;
      } else if (arg.t < local.u) {
        return;
      }
      return local(local_657db3b7_2.event ? local_657db3b7_2.event(arg) : arg);
    }
  };
}
function fn_49f0a109(
  arg,
  arg_2,
  arg_3,
  arg_4,
  arg_5,
  arg_6,
  arg_7,
  arg_8,
  arg_9,
  arg_10,
) {
  let local;
  let local_2;
  let local_3;
  let local_4;
  let local_5;
  let local_6;
  let local_7;
  let local_8;
  let local_9;
  let local_10;
  let local_11;
  let local_12;
  let local_13;
  let local_14;
  let local_15;
  let local_16;
  let local_17;
  const local_18 = arg_2.type;
  if (arg_2.constructor !== undefined) {
    return null;
  }
  if (128 & arg_3.__u) {
    arg_9 = !!(32 & arg_3.__u);
    arg_6 = [(arg_8 = arg_2.__e = arg_3.__e)];
  }
  if ((local = local_657db3b7_2.__b)) {
    local(arg_2);
  }
  e: if (typeof local_18 === "function") {
    try {
      local_8 = arg_2.props;
      local_9 = "prototype" in local_18 && local_18.prototype.render;
      local_10 = (local = local_18.contextType) && arg_4[local.__c];
      local_11 = local ? (local_10 ? local_10.props.value : local.__) : arg_4;
      if (arg_3.__c) {
        local_7 = (local_2 = arg_2.__c = arg_3.__c).__ = local_2.__E;
      } else {
        if (local_9) {
          arg_2.__c = local_2 = new local_18(local_8, local_11);
        } else {
          arg_2.__c = local_2 = new clazz_183a9acd(local_8, local_11);
          local_2.constructor = local_18;
          local_2.render = fn_194ce442;
        }
        if (local_10) {
          local_10.sub(local_2);
        }
        if (!local_2.state) {
          local_2.state = {};
        }
        local_2.__n = arg_4;
        local_3 = local_2.__d = true;
        local_2.__h = [];
        local_2._sb = [];
      }
      if (local_9 && local_2.__s == null) {
        local_2.__s = local_2.state;
      }
      if (local_9 && local_18.getDerivedStateFromProps != null) {
        if (local_2.__s == local_2.state) {
          local_2.__s = fn_be5cf4ce({}, local_2.__s);
        }
        fn_be5cf4ce(
          local_2.__s,
          local_18.getDerivedStateFromProps(local_8, local_2.__s),
        );
      }
      local_4 = local_2.props;
      local_5 = local_2.state;
      local_2.__v = arg_2;
      if (local_3) {
        if (
          local_9 &&
          local_18.getDerivedStateFromProps == null &&
          local_2.componentWillMount != null
        ) {
          local_2.componentWillMount();
        }
        if (local_9 && local_2.componentDidMount != null) {
          local_2.__h.push(local_2.componentDidMount);
        }
      } else {
        if (
          local_9 &&
          local_18.getDerivedStateFromProps == null &&
          local_8 !== local_4 &&
          local_2.componentWillReceiveProps != null
        ) {
          local_2.componentWillReceiveProps(local_8, local_11);
        }
        if (
          arg_2.__v == arg_3.__v ||
          (!local_2.__e &&
            local_2.shouldComponentUpdate != null &&
            local_2.shouldComponentUpdate(local_8, local_2.__s, local_11) ===
              false)
        ) {
          if (arg_2.__v != arg_3.__v) {
            local_2.props = local_8;
            local_2.state = local_2.__s;
            local_2.__d = false;
          }
          arg_2.__e = arg_3.__e;
          arg_2.__k = arg_3.__k;
          arg_2.__k.some(function (arg) {
            if (arg) {
              arg.__ = arg_2;
            }
          });
          for (local_12 = 0; local_12 < local_2._sb.length; local_12++) {
            local_2.__h.push(local_2._sb[local_12]);
          }
          local_2._sb = [];
          if (local_2.__h.length) {
            arg_7.push(local_2);
          }
          break e;
        }
        if (local_2.componentWillUpdate != null) {
          local_2.componentWillUpdate(local_8, local_2.__s, local_11);
        }
        if (local_9 && local_2.componentDidUpdate != null) {
          local_2.__h.push(function () {
            local_2.componentDidUpdate(local_4, local_5, local_6);
          });
        }
      }
      local_2.context = local_11;
      local_2.props = local_8;
      local_2.__P = arg;
      local_2.__e = false;
      local_13 = local_657db3b7_2.__r;
      local_14 = 0;
      if (local_9) {
        local_2.state = local_2.__s;
        local_2.__d = false;
        if (local_13) {
          local_13(arg_2);
        }
        local = local_2.render(local_2.props, local_2.state, local_2.context);
        for (local_15 = 0; local_15 < local_2._sb.length; local_15++) {
          local_2.__h.push(local_2._sb[local_15]);
        }
        local_2._sb = [];
      } else {
        do {
          local_2.__d = false;
          if (local_13) {
            local_13(arg_2);
          }
          local = local_2.render(local_2.props, local_2.state, local_2.context);
          local_2.state = local_2.__s;
        } while (local_2.__d && ++local_14 < 25);
      }
      local_2.state = local_2.__s;
      if (local_2.getChildContext != null) {
        arg_4 = fn_be5cf4ce(fn_be5cf4ce({}, arg_4), local_2.getChildContext());
      }
      if (local_9 && !local_3 && local_2.getSnapshotBeforeUpdate != null) {
        local_6 = local_2.getSnapshotBeforeUpdate(local_4, local_5);
      }
      local_16 = local;
      if (local != null && local.type === symbol_063 && local.key == null) {
        local_16 = fn_bc75b4cb(local.props.children);
      }
      arg_8 = fn_4f1570cb(
        arg,
        local_2cae01a0(local_16) ? local_16 : [local_16],
        arg_2,
        arg_3,
        arg_4,
        arg_5,
        arg_6,
        arg_7,
        arg_8,
        arg_9,
        arg_10,
      );
      local_2.base = arg_2.__e;
      arg_2.__u &= -161;
      if (local_2.__h.length) {
        arg_7.push(local_2);
      }
      if (local_7) {
        local_2.__E = local_2.__ = null;
      }
    } catch (error) {
      arg_2.__v = null;
      if (arg_9 || arg_6 != null) {
        if (error.then) {
          for (
            arg_2.__u |= arg_9 ? 160 : 128;
            arg_8 && arg_8.nodeType == 8 && arg_8.nextSibling;
          ) {
            arg_8 = arg_8.nextSibling;
          }
          arg_6[arg_6.indexOf(arg_8)] = null;
          arg_2.__e = arg_8;
        } else {
          for (local_17 = arg_6.length; local_17--;) {
            fn_c05b34ab(arg_6[local_17]);
          }
          fn_abffc197(arg_2);
        }
      } else {
        arg_2.__e = arg_3.__e;
        arg_2.__k = arg_3.__k;
        if (!error.then) {
          fn_abffc197(arg_2);
        }
      }
      local_657db3b7_2.__e(error, arg_2, arg_3);
    }
  } else {
    if (arg_6 == null && arg_2.__v == arg_3.__v) {
      arg_2.__k = arg_3.__k;
      arg_2.__e = arg_3.__e;
    } else {
      arg_8 = arg_2.__e = fn_c3d56538(
        arg_3.__e,
        arg_2,
        arg_3,
        arg_4,
        arg_5,
        arg_6,
        arg_7,
        arg_9,
        arg_10,
      );
    }
  }
  if ((local = local_657db3b7_2.diffed)) {
    local(arg_2);
  }
  if (128 & arg_2.__u) {
    return undefined;
  }
  return arg_8;
}
function fn_abffc197(arg) {
  if (arg && arg.__c) {
    arg.__c.__e = true;
  }
  if (arg && arg.__k) {
    arg.__k.forEach(fn_abffc197);
  }
}
function fn_863f0984(arg, arg_2, arg_3) {
  for (let local = 0; local < arg_3.length; local++) {
    fn_1e9bf172(arg_3[local], arg_3[++local], arg_3[++local]);
  }
  if (local_657db3b7_2.__c) {
    local_657db3b7_2.__c(arg_2, arg);
  }
  arg.some(function (arg) {
    try {
      arg = arg.__h;
      arg.__h = [];
      arg.some(function (arg) {
        arg.call(arg);
      });
    } catch (error) {
      local_657db3b7_2.__e(error, arg.__v);
    }
  });
}
function fn_bc75b4cb(arg) {
  if (typeof arg !== "object" || arg == null || (arg.__b && arg.__b > 0)) {
    return arg;
  }
  if (local_2cae01a0(arg)) {
    return arg.map(fn_bc75b4cb);
  }
  return fn_be5cf4ce({}, arg);
}
function fn_c3d56538(
  arg,
  arg_2,
  arg_3,
  arg_4,
  arg_5,
  arg_6,
  arg_7,
  arg_8,
  arg_9,
) {
  let local;
  let local_2;
  let local_3;
  let local_4;
  let local_5;
  let local_6;
  let local_7;
  let local_8 = arg_3.props || local_603ced16;
  const local_9 = arg_2.props;
  const local_10 = arg_2.type;
  if (local_10 == "svg") {
    arg_5 = "http://www.w3.org/2000/svg";
  } else if (local_10 == "math") {
    arg_5 = "http://www.w3.org/1998/Math/MathML";
  } else if (!arg_5) {
    arg_5 = "http://www.w3.org/1999/xhtml";
  }
  if (arg_6 != null) {
    for (local = 0; local < arg_6.length; local++) {
      if (
        (local_5 = arg_6[local]) &&
        "setAttribute" in local_5 == !!local_10 &&
        (local_10 ? local_5.localName == local_10 : local_5.nodeType == 3)
      ) {
        arg = local_5;
        arg_6[local] = null;
        break;
      }
    }
  }
  if (arg == null) {
    if (local_10 == null) {
      return document.createTextNode(local_9);
    }
    arg = document.createElementNS(arg_5, local_10, local_9.is && local_9);
    if (arg_8) {
      if (local_657db3b7_2.__m) {
        local_657db3b7_2.__m(arg_2, arg_6);
      }
      arg_8 = false;
    }
    arg_6 = null;
  }
  if (local_10 == null) {
    if (!(local_8 === local_9 || (arg_8 && arg.data == local_9))) {
      arg.data = local_9;
    }
  } else {
    arg_6 = arg_6 && local_657db3b7.call(arg.childNodes);
    if (!arg_8 && arg_6 != null) {
      local_8 = {};
      for (local = 0; local < arg.attributes.length; local++) {
        local_8[(local_5 = arg.attributes[local]).name] = local_5.value;
      }
    }
    for (local in local_8) {
      local_5 = local_8[local];
      if (local != "children") {
        if (local == "dangerouslySetInnerHTML") {
          local_3 = local_5;
        } else if (!(local in local_9)) {
          if (
            (local == "value" && "defaultValue" in local_9) ||
            (local == "checked" && "defaultChecked" in local_9)
          ) {
            continue;
          }
          fn_0074851c(arg, local, null, local_5, arg_5);
        }
      }
    }
    for (local in local_9) {
      local_5 = local_9[local];
      if (local == "children") {
        local_4 = local_5;
      } else if (local == "dangerouslySetInnerHTML") {
        local_2 = local_5;
      } else if (local == "value") {
        local_6 = local_5;
      } else if (local == "checked") {
        local_7 = local_5;
      } else if (!(
        (arg_8 && typeof local_5 !== "function") ||
        local_8[local] === local_5
      )) {
        fn_0074851c(arg, local, local_5, local_8[local], arg_5);
      }
    }
    if (local_2) {
      if (!(
        arg_8 ||
        (local_3 &&
          (local_2.__html == local_3.__html || local_2.__html == arg.innerHTML))
      )) {
        arg.innerHTML = local_2.__html;
      }
      arg_2.__k = [];
    } else {
      if (local_3) {
        arg.innerHTML = "";
      }
      fn_4f1570cb(
        arg_2.type == "template" ? arg.content : arg,
        local_2cae01a0(local_4) ? local_4 : [local_4],
        arg_2,
        arg_3,
        arg_4,
        local_10 == "foreignObject" ? "http://www.w3.org/1999/xhtml" : arg_5,
        arg_6,
        arg_7,
        arg_6 ? arg_6[0] : arg_3.__k && fn_f258c0a1(arg_3, 0),
        arg_8,
        arg_9,
      );
      if (arg_6 != null) {
        for (local = arg_6.length; local--;) {
          fn_c05b34ab(arg_6[local]);
        }
      }
    }
    if (!arg_8) {
      local = "value";
      if (local_10 == "progress" && local_6 == null) {
        arg.removeAttribute("value");
      } else if (
        local_6 != null &&
        (local_6 !== arg[local] ||
          (local_10 == "progress" && !local_6) ||
          (local_10 == "option" && local_6 != local_8[local]))
      ) {
        fn_0074851c(arg, local, local_6, local_8[local], arg_5);
      }
      local = "checked";
      if (local_7 != null && local_7 != arg[local]) {
        fn_0074851c(arg, local, local_7, local_8[local], arg_5);
      }
    }
  }
  return arg;
}
function fn_1e9bf172(arg, arg_2, arg_3) {
  try {
    if (typeof arg === "function") {
      const local = typeof arg.__u === "function";
      if (local) {
        arg.__u();
      }
      if (!(local && arg_2 == null)) {
        arg.__u = arg(arg_2);
      }
    } else {
      arg.current = arg_2;
    }
  } catch (error) {
    local_657db3b7_2.__e(error, arg_3);
  }
}
function fn_72e1cf92(arg, arg_2, arg_3) {
  let local;
  let local_2;
  if (local_657db3b7_2.unmount) {
    local_657db3b7_2.unmount(arg);
  }
  (local = arg.ref) &&
    ((local.current && local.current != arg.__e) ||
      fn_1e9bf172(local, null, arg_2));
  if ((local = arg.__c) != null) {
    if (local.componentWillUnmount) {
      try {
        local.componentWillUnmount();
      } catch (error) {
        local_657db3b7_2.__e(error, arg_2);
      }
    }
    local.base = null;
    local.__P = null;
  }
  if ((local = arg.__k)) {
    for (local_2 = 0; local_2 < local.length; local_2++) {
      if (local[local_2]) {
        fn_72e1cf92(
          local[local_2],
          arg_2,
          arg_3 || typeof arg.type !== "function",
        );
      }
    }
  }
  if (!arg_3) {
    fn_c05b34ab(arg.__e);
  }
  arg.__c = undefined;
  arg.__ = undefined;
  arg.__e = undefined;
}
function fn_194ce442(arg, arg_2, arg_3) {
  return this.constructor(arg, arg_3);
}
function fn_5b06483a(arg, arg_2, arg_3) {
  let local;
  let local_2;
  let local_3;
  let local_4;
  if (arg_2 == document) {
    arg_2 = document.documentElement;
  }
  if (local_657db3b7_2.__) {
    local_657db3b7_2.__(arg, arg_2);
  }
  local_2 = (local = typeof arg_3 === "function")
    ? null
    : (arg_3 && arg_3.__k) || arg_2.__k;
  local_3 = [];
  local_4 = [];
  fn_49f0a109(
    arg_2,
    (arg = ((!local && arg_3) || arg_2).__k =
      fn_ba0330ef(symbol_063, null, [arg])),
    local_2 || local_603ced16,
    local_603ced16,
    arg_2.namespaceURI,
    !local && arg_3
      ? [arg_3]
      : local_2
        ? null
        : arg_2.firstChild
          ? local_657db3b7.call(arg_2.childNodes)
          : null,
    local_3,
    !local && arg_3 ? arg_3 : local_2 ? local_2.__e : arg_2.firstChild,
    local,
    local_4,
  );
  fn_863f0984(local_3, arg, local_4);
}
function fn_73211618(arg, arg_2) {
  fn_5b06483a(arg, arg_2, fn_73211618);
}
function fn_fa5fc2cb(arg, arg_2, arg_3) {
  let local;
  let local_2;
  let local_3;
  let local_4;
  const local_5 = fn_be5cf4ce({}, arg.props);
  if (arg.type && arg.type.defaultProps) {
    local_4 = arg.type.defaultProps;
  }
  for (local_3 in arg_2) {
    if (local_3 == "key") {
      local = arg_2[local_3];
    } else if (local_3 == "ref") {
      local_2 = arg_2[local_3];
    } else {
      local_5[local_3] =
        arg_2[local_3] === undefined && local_4 != null
          ? local_4[local_3]
          : arg_2[local_3];
    }
  }
  if (arguments.length > 2) {
    local_5.children =
      arguments.length > 3 ? local_657db3b7.call(arguments, 2) : arg_3;
  }
  return fn_99846410(
    arg.type,
    local_5,
    local || arg.key,
    local_2 || arg.ref,
    null,
  );
}
function fn_c05a86e1(arg) {
  function fn(arg) {
    let local;
    let local_2;
    if (!this.getChildContext) {
      local = new Set();
      (local_2 = {})[fn.__c] = this;
      this.getChildContext = function () {
        return local_2;
      };
      this.componentWillUnmount = function () {
        local = null;
      };
      this.shouldComponentUpdate = function (arg) {
        if (this.props.value != arg.value) {
          local.forEach(function (arg) {
            arg.__e = true;
            fn_006034fa(arg);
          });
        }
      };
      this.sub = function (arg) {
        local.add(arg);
        const local = arg.componentWillUnmount;
        arg.componentWillUnmount = function () {
          if (local) {
            local.delete(arg);
          }
          if (local) {
            local.call(arg);
          }
        };
      };
    }
    return arg.children;
  }
  fn.__c = `__cC${local_657db3b7_12++}`;
  fn.__ = arg;
  fn.Provider = fn;
  fn.__l = fn;
  (fn.Consumer = function (arg, arg_2) {
    return arg.children(arg_2);
  }).contextType = fn;
  return fn;
}
local_657db3b7 = local_0f018a95.slice;
local_657db3b7_2 = {
  __e(arg, arg_2, arg_3, arg_4) {
    let local;
    let local_2;
    let local_3;
    while ((arg_2 = arg_2.__)) {
      if ((local = arg_2.__c) && !local.__) {
        try {
          if (
            (local_2 = local.constructor) &&
            local_2.getDerivedStateFromError != null
          ) {
            local.setState(local_2.getDerivedStateFromError(arg));
            local_3 = local.__d;
          }
          if (local.componentDidCatch != null) {
            local.componentDidCatch(arg, arg_4 || {});
            local_3 = local.__d;
          }
          if (local_3) {
            return (local.__E = local);
          }
        } catch (error) {
          arg = error;
        }
      }
    }
    throw arg;
  },
};
local_657db3b7_3 = 0;
clazz_183a9acd.prototype.render = symbol_063;
local_657db3b7_4 = [];
local_657db3b7_6 =
  typeof Promise === "function"
    ? Promise.prototype.then.bind(Promise.resolve())
    : setTimeout;
local_657db3b7_7 = function (arg, arg_2) {
  return arg.__v.__b - arg_2.__v.__b;
};
fn_cb9fee21.__r = 0;
local_657db3b7_8 = /(PointerCapture)$|Capture$/i;
local_657db3b7_9 = 0;
local_657db3b7_10 = fn_c6434f8e(false);
local_657db3b7_11 = fn_c6434f8e(true);
local_657db3b7_12 = 0;
let local_f06debfc = 0;
function symbol_073(arg, arg_2, arg_3, arg_4, arg_5, arg_6) {
  if (!arg_2) {
    arg_2 = {};
  }
  let local;
  let local_2;
  let local_3 = arg_2;
  if ("ref" in local_3) {
    local_3 = {};
    for (local_2 in arg_2) {
      if (local_2 == "ref") {
        local = arg_2[local_2];
      } else {
        local_3[local_2] = arg_2[local_2];
      }
    }
  }
  const local_4 = {
    type: arg,
    props: local_3,
    key: arg_3,
    ref: local,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: undefined,
    __v: --local_f06debfc,
    __i: -1,
    __u: 0,
    __source: arg_5,
    __self: arg_6,
  };
  if (typeof arg === "function" && (local = arg.defaultProps)) {
    for (local_2 in local) {
      if (local_3[local_2] === undefined) {
        local_3[local_2] = local[local_2];
      }
    }
  }
  if (local_657db3b7_2.vnode) {
    local_657db3b7_2.vnode(local_4);
  }
  return local_4;
}
const local_23bb5d69 =
  typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const local_f090a36f = globalThis;
const local_32bc66f7 = "10.52.0";
function fn_324f4519() {
  fn_2e1450a8(local_f090a36f);
  return local_f090a36f;
}
function fn_2e1450a8(arg) {
  const local = (arg.__SENTRY__ = arg.__SENTRY__ || {});
  local.version = local.version || local_32bc66f7;
  return (local[local_32bc66f7] = local[local_32bc66f7] || {});
}
function fn_9cfc19fb(arg, arg_2, arg_3 = local_f090a36f) {
  const local = (arg_3.__SENTRY__ = arg_3.__SENTRY__ || {});
  const local_2 = (local[local_32bc66f7] = local[local_32bc66f7] || {});
  return local_2[arg] || (local_2[arg] = arg_2());
}
const local_0296945c = [
  "debug",
  "info",
  "warn",
  "error",
  "log",
  "assert",
  "trace",
];
const local_43ff4522 = "Sentry Logger ";
const local_603ced16_2 = {};
function fn_a1a275d6(arg) {
  if (!("console" in local_f090a36f)) {
    return arg();
  }
  const local = local_f090a36f.console;
  const local_2 = {};
  const local_3 = Object.keys(local_603ced16_2);
  local_3.forEach((arg) => {
    const local = local_603ced16_2[arg];
    local_2[arg] = local[arg];
    local[arg] = local;
  });
  try {
    return arg();
  } finally {
    local_3.forEach((arg) => {
      local[arg] = local_2[arg];
    });
  }
}
function fn_200718a0() {
  fn_4b52037e().enabled = true;
}
function fn_a39512de() {
  fn_4b52037e().enabled = false;
}
function fn_5a72670c() {
  return fn_4b52037e().enabled;
}
function fn_3ad7d7c6(...arg) {
  fn_f9659db6("log", ...arg);
}
function fn_ef2987cf(...arg) {
  fn_f9659db6("warn", ...arg);
}
function fn_359adae9(...arg) {
  fn_f9659db6("error", ...arg);
}
function fn_f9659db6(arg, ...arg_2) {
  if (local_23bb5d69 && fn_5a72670c()) {
    fn_a1a275d6(() => {
      local_f090a36f.console[arg](`${local_43ff4522}[${arg}]:`, ...arg_2);
    });
  }
}
function fn_4b52037e() {
  if (local_23bb5d69) {
    return fn_9cfc19fb("loggerSettings", () => ({
      enabled: false,
    }));
  }
  return {
    enabled: false,
  };
}
const local_5a6ba1bf = {
  enable: fn_200718a0,
  disable: fn_a39512de,
  isEnabled: fn_5a72670c,
  log: fn_3ad7d7c6,
  warn: fn_ef2987cf,
  error: fn_359adae9,
};
const local_f06debfc_2 = 50;
const local_e1081c14 = "?";
const local_29000119 = /\(error: (.*)\)/;
const local_eab8ce67 = /captureMessage|captureException/;
function fn_72a34818(...arg) {
  const local = arg
    .sort((arg, arg_2) => arg[0] - arg_2[0])
    .map((arg) => arg[1]);
  return (arg, arg_2 = 0, arg_3 = 0) => {
    const local = [];
    const local_2 = arg.split(`
`);
    for (let local = arg_2; local < local_2.length; local++) {
      let local = local_2[local];
      if (local.length > 1024) {
        local = local.slice(0, 1024);
      }
      const local_2 = local_29000119.test(local)
        ? local.replace(local_29000119, "$1")
        : local;
      if (!local_2.includes("Error: ")) {
        for (const local of local) {
          const local = local(local_2);
          if (local) {
            local.push(local);
            break;
          }
        }
        if (local.length >= local_f06debfc_2 + arg_3) {
          break;
        }
      }
    }
    return fn_6af246bf(local.slice(arg_3));
  };
}
function fn_b73466db(arg) {
  if (Array.isArray(arg)) {
    return fn_72a34818(...arg);
  }
  return arg;
}
function fn_6af246bf(arg) {
  if (!arg.length) {
    return [];
  }
  const local = Array.from(arg);
  if (/sentryWrapped/.test(fn_6a41056d(local).function || "")) {
    local.pop();
  }
  local.reverse();
  if (local_eab8ce67.test(fn_6a41056d(local).function || "")) {
    local.pop();
    if (local_eab8ce67.test(fn_6a41056d(local).function || "")) {
      local.pop();
    }
  }
  return local.slice(0, local_f06debfc_2).map((arg) => ({
    ...arg,
    filename: arg.filename || fn_6a41056d(local).filename,
    function: arg.function || local_e1081c14,
  }));
}
function fn_6a41056d(arg) {
  return arg[arg.length - 1] || {};
}
const local_89418bcf = "<anonymous>";
function fn_38b209f1(arg) {
  try {
    if (!arg || typeof arg !== "function") {
      return local_89418bcf;
    }
    return arg.name || local_89418bcf;
  } catch {
    return local_89418bcf;
  }
}
function fn_b8c28533(arg) {
  const local = arg.exception;
  if (local) {
    const local = [];
    try {
      local.values.forEach((arg) => {
        if (arg.stacktrace.frames) {
          local.push(...arg.stacktrace.frames);
        }
      });
      return local;
    } catch {
      return;
    }
  }
}
function fn_fa18e46f(arg) {
  if ("__v_isVNode" in arg && arg.__v_isVNode) {
    return "[VueVNode]";
  }
  return "[VueViewModel]";
}
const local_603ced16_3 = {};
const local_603ced16_4 = {};
function fn_8c3b3d2d(arg, arg_2) {
  local_603ced16_3[arg] = local_603ced16_3[arg] || [];
  local_603ced16_3[arg].push(arg_2);
  return () => {
    const local = local_603ced16_3[arg];
    if (local) {
      const local = local.indexOf(arg_2);
      if (local !== -1) {
        local.splice(local, 1);
      }
    }
  };
}
function fn_131e115c(arg, arg_2) {
  if (!local_603ced16_4[arg]) {
    local_603ced16_4[arg] = true;
    try {
      arg_2();
    } catch (error) {
      if (local_23bb5d69) {
        local_5a6ba1bf.error(`Error while instrumenting ${arg}`, error);
      }
    }
  }
}
function fn_346ded5d(arg, arg_2) {
  const local = arg && local_603ced16_3[arg];
  if (local) {
    for (const local of local) {
      try {
        local(arg_2);
      } catch (error) {
        if (local_23bb5d69) {
          local_5a6ba1bf.error(
            `Error while triggering instrumentation handler.
Type: ${arg}
Name: ${fn_38b209f1(local)}
Error:`,
            error,
          );
        }
      }
    }
  }
}
let local_0a9fda83 = null;
function fn_2d8ea36f(arg) {
  const local = "error";
  fn_8c3b3d2d(local, arg);
  fn_131e115c(local, fn_d86369c5);
}
function fn_d86369c5() {
  local_0a9fda83 = local_f090a36f.onerror;
  local_f090a36f.onerror = function (arg, arg_2, arg_3, arg_4, arg_5) {
    fn_346ded5d("error", {
      column: arg_4,
      error: arg_5,
      line: arg_3,
      msg: arg,
      url: arg_2,
    });
    if (local_0a9fda83) {
      return local_0a9fda83.apply(this, arguments);
    }
    return false;
  };
  local_f090a36f.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let local_0a9fda83_2 = null;
function fn_6f6110ff(arg) {
  const local = "unhandledrejection";
  fn_8c3b3d2d(local, arg);
  fn_131e115c(local, fn_3b1c59a9);
}
function fn_3b1c59a9() {
  local_0a9fda83_2 = local_f090a36f.onunhandledrejection;
  local_f090a36f.onunhandledrejection = function (arg) {
    fn_346ded5d("unhandledrejection", arg);
    if (local_0a9fda83_2) {
      return local_0a9fda83_2.apply(this, arguments);
    }
    return true;
  };
  local_f090a36f.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
const local_dac76287 = Object.prototype.toString;
function fn_7b60edb8(arg) {
  switch (local_dac76287.call(arg)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return true;
    default:
      return fn_e4697554(arg, Error);
  }
}
function fn_e2e38ba2(arg, arg_2) {
  return local_dac76287.call(arg) === `[object ${arg_2}]`;
}
function fn_c1a7a7ab(arg) {
  return fn_e2e38ba2(arg, "ErrorEvent");
}
function fn_bb01f144(arg) {
  return fn_e2e38ba2(arg, "DOMError");
}
function fn_6f396a2c(arg) {
  return fn_e2e38ba2(arg, "DOMException");
}
function fn_bdd4075c(arg) {
  return fn_e2e38ba2(arg, "String");
}
function fn_b23d0128(arg) {
  return (
    typeof arg === "object" &&
    arg !== null &&
    "__sentry_template_string__" in arg &&
    "__sentry_template_values__" in arg
  );
}
function fn_8a91c46c(arg) {
  return (
    arg === null ||
    fn_b23d0128(arg) ||
    (typeof arg !== "object" && typeof arg !== "function")
  );
}
function fn_5ee37d10(arg) {
  return fn_e2e38ba2(arg, "Object");
}
function fn_af94ae8c(arg) {
  return typeof Event !== "undefined" && fn_e4697554(arg, Event);
}
function fn_af94ae8c_2(arg) {
  return typeof Element !== "undefined" && fn_e4697554(arg, Element);
}
function fn_2ee03663(arg) {
  return fn_e2e38ba2(arg, "RegExp");
}
function fn_0dbd451a(arg) {
  return !!(arg?.then && typeof arg.then === "function");
}
function fn_d0f27641(arg) {
  return (
    fn_5ee37d10(arg) &&
    "nativeEvent" in arg &&
    "preventDefault" in arg &&
    "stopPropagation" in arg
  );
}
function fn_e4697554(arg, arg_2) {
  try {
    return arg instanceof arg_2;
  } catch {
    return false;
  }
}
function fn_2b08bc2f(arg) {
  return !!(
    typeof arg === "object" &&
    arg !== null &&
    (arg.__isVue || arg._isVue || arg.__v_isVNode)
  );
}
function fn_af94ae8c_3(arg) {
  return typeof Request !== "undefined" && fn_e4697554(arg, Request);
}
const local_f090a36f_2 = local_f090a36f;
const local_f06debfc_3 = 80;
function fn_9a310b32(arg, arg_2 = {}) {
  if (!arg) {
    return "<unknown>";
  }
  try {
    let local = arg;
    const local_2 = 5;
    const local_3 = [];
    let local_4 = 0;
    let local_5 = 0;
    const local_6 = " > ";
    const local_7 = local_6.length;
    let local_8;
    const local_9 = Array.isArray(arg_2) ? arg_2 : arg_2.keyAttrs;
    const local_10 =
      (!Array.isArray(arg_2) && arg_2.maxStringLength) || local_f06debfc_3;
    while (
      local &&
      local_4++ < local_2 &&
      ((local_8 = fn_76eb1917(local, local_9)),
      !(
        local_8 === "html" ||
        (local_4 > 1 &&
          local_5 + local_3.length * local_7 + local_8.length >= local_10)
      ))
    ) {
      local_3.push(local_8);
      local_5 += local_8.length;
      local = local.parentNode;
    }
    return local_3.reverse().join(local_6);
  } catch {
    return "<unknown>";
  }
}
function fn_76eb1917(arg, arg_2) {
  const local = arg;
  const local_2 = [];
  if (!local?.tagName) {
    return "";
  }
  if (
    local_f090a36f_2.HTMLElement &&
    local instanceof HTMLElement &&
    local.dataset
  ) {
    if (local.dataset.sentryComponent) {
      return local.dataset.sentryComponent;
    }
    if (local.dataset.sentryElement) {
      return local.dataset.sentryElement;
    }
  }
  local_2.push(local.tagName.toLowerCase());
  const local_3 = arg_2?.length
    ? arg_2
        .filter((arg) => local.getAttribute(arg))
        .map((arg) => [arg, local.getAttribute(arg)])
    : null;
  if (local_3?.length) {
    local_3.forEach((arg) => {
      local_2.push(`[${arg[0]}="${arg[1]}"]`);
    });
  } else {
    if (local.id) {
      local_2.push(`#${local.id}`);
    }
    const local = local.className;
    if (local && fn_bdd4075c(local)) {
      const local = local.split(/\s+/);
      for (const local of local) {
        local_2.push(`.${local}`);
      }
    }
  }
  for (const local of ["aria-label", "type", "name", "title", "alt"]) {
    const local = local.getAttribute(local);
    if (local) {
      local_2.push(`[${local}="${local}"]`);
    }
  }
  return local_2.join("");
}
function fn_1d107afc() {
  try {
    return local_f090a36f_2.document.location.href;
  } catch {
    return "";
  }
}
function fn_08cf125e(arg, arg_2 = 5) {
  if (!local_f090a36f_2.HTMLElement) {
    return null;
  }
  let local = arg;
  for (let local = 0; local < arg_2; local++) {
    if (!local) {
      return null;
    }
    if (local instanceof HTMLElement) {
      if (local.dataset.sentryComponent) {
        return local.dataset.sentryComponent;
      }
      if (local.dataset.sentryElement) {
        return local.dataset.sentryElement;
      }
    }
    local = local.parentNode;
  }
  return null;
}
function fn_344b1aa6(arg, arg_2, arg_3) {
  if (!(arg_2 in arg)) {
    return;
  }
  const local = arg[arg_2];
  if (typeof local !== "function") {
    return;
  }
  const local_2 = arg_3(local);
  if (typeof local_2 === "function") {
    fn_2d23a036(local_2, local);
  }
  try {
    arg[arg_2] = local_2;
  } catch {
    if (local_23bb5d69) {
      local_5a6ba1bf.log(`Failed to replace method "${arg_2}" in object`, arg);
    }
  }
}
function fn_84ede063(arg, arg_2, arg_3) {
  try {
    Object.defineProperty(arg, arg_2, {
      value: arg_3,
      writable: true,
      configurable: true,
    });
  } catch {
    if (local_23bb5d69) {
      local_5a6ba1bf.log(
        `Failed to add non-enumerable property "${String(arg_2)}" to object`,
        arg,
      );
    }
  }
}
function fn_2d23a036(arg, arg_2) {
  try {
    const local = arg_2.prototype || {};
    arg.prototype = local;
    arg_2.prototype = local;
    fn_84ede063(arg, "__sentry_original__", arg_2);
  } catch {}
}
function fn_092c85be(arg) {
  return arg.__sentry_original__;
}
function fn_0476c2c9(arg) {
  if (fn_7b60edb8(arg)) {
    return {
      message: arg.message,
      name: arg.name,
      stack: arg.stack,
      ...fn_14b20c85(arg),
    };
  }
  if (fn_af94ae8c(arg)) {
    const local = {
      type: arg.type,
      target: fn_37c8bf77(arg.target),
      currentTarget: fn_37c8bf77(arg.currentTarget),
      ...fn_14b20c85(arg),
    };
    if (typeof CustomEvent !== "undefined" && fn_e4697554(arg, CustomEvent)) {
      local.detail = arg.detail;
    }
    return local;
  } else {
    return arg;
  }
}
function fn_37c8bf77(arg) {
  try {
    if (fn_af94ae8c_2(arg)) {
      return fn_9a310b32(arg);
    }
    return Object.prototype.toString.call(arg);
  } catch {
    return "<unknown>";
  }
}
function fn_14b20c85(arg) {
  if (typeof arg === "object" && arg !== null) {
    return Object.fromEntries(Object.entries(arg));
  }
  return {};
}
function fn_4c904858(arg) {
  const local = Object.keys(fn_0476c2c9(arg));
  local.sort();
  if (local[0]) {
    return local.join(", ");
  }
  return "[object has no keys]";
}
let local_657db3b7_13;
function fn_3ba42ed1(arg) {
  if (local_657db3b7_13 !== undefined) {
    if (local_657db3b7_13) {
      return local_657db3b7_13(arg);
    }
    return arg();
  }
  const local = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
  const local_2 = local_f090a36f;
  if (local in local_2 && typeof local_2[local] === "function") {
    return ((local_657db3b7_13 = local_2[local]), local_657db3b7_13(arg));
  }
  return ((local_657db3b7_13 = null), arg());
}
function fn_ce103458() {
  return fn_3ba42ed1(() => Math.random());
}
function fn_ce103458_2() {
  return fn_3ba42ed1(() => Date.now());
}
function fn_910ea535(arg, arg_2 = 0) {
  if (typeof arg !== "string" || arg_2 === 0 || arg.length <= arg_2) {
    return arg;
  }
  return `${arg.slice(0, arg_2)}...`;
}
function fn_59a2fb0b(arg, arg_2) {
  if (!Array.isArray(arg)) {
    return "";
  }
  const local = [];
  for (let local = 0; local < arg.length; local++) {
    const local = arg[local];
    try {
      if (fn_2b08bc2f(local)) {
        local.push(fn_fa18e46f(local));
      } else {
        local.push(String(local));
      }
    } catch {
      local.push("[value cannot be serialized]");
    }
  }
  return local.join(arg_2);
}
function fn_847aa30e(arg, arg_2, arg_3 = false) {
  if (fn_bdd4075c(arg)) {
    if (fn_2ee03663(arg_2)) {
      return arg_2.test(arg);
    }
    if (fn_bdd4075c(arg_2)) {
      if (arg_3) {
        return arg === arg_2;
      }
      return arg.includes(arg_2);
    }
    if (typeof arg_2 === "function") {
      return arg_2(arg);
    }
    return false;
  }
  return false;
}
function fn_719ef462(arg, arg_2 = [], arg_3 = false) {
  return arg_2.some((arg) => fn_847aa30e(arg, arg, arg_3));
}
function fn_701f14d0() {
  const local = local_f090a36f;
  return local.crypto || local.msCrypto;
}
let local_657db3b7_14;
function fn_0362e0cf() {
  return fn_ce103458() * 16;
}
function fn_8e541891(arg = fn_701f14d0()) {
  try {
    if (arg?.randomUUID) {
      return fn_3ba42ed1(() => arg.randomUUID()).replace(/-/g, "");
    }
  } catch {}
  if (!local_657db3b7_14) {
    local_657db3b7_14 = `10000000100040008000${100000000000}`;
  }
  return local_657db3b7_14.replace(/[018]/g, (arg) =>
    (arg ^ ((fn_0362e0cf() & 15) >> (arg / 4))).toString(16),
  );
}
function fn_548f3d36(arg) {
  return arg.exception?.values?.[0];
}
function fn_e3ddf09f(arg) {
  const { message: local, event_id: local_2 } = arg;
  if (local) {
    return local;
  }
  const local_3 = fn_548f3d36(arg);
  if (local_3) {
    if (local_3.type && local_3.value) {
      return `${local_3.type}: ${local_3.value}`;
    }
    return local_3.type || local_3.value || local_2 || "<unknown>";
  }
  return local_2 || "<unknown>";
}
function fn_32053b25(arg, arg_2, arg_3) {
  const local = (arg.exception = arg.exception || {});
  const local_2 = (local.values = local.values || []);
  const local_3 = (local_2[0] = local_2[0] || {});
  if (!local_3.value) {
    local_3.value = arg_2 || "";
  }
  if (!local_3.type) {
    local_3.type = "Error";
  }
}
function fn_9efed769(arg, arg_2) {
  const local = fn_548f3d36(arg);
  if (!local) {
    return;
  }
  const local_2 = {
    type: "generic",
    handled: true,
  };
  const local_3 = local.mechanism;
  local.mechanism = {
    ...local_2,
    ...local_3,
    ...arg_2,
  };
  if (arg_2 && "data" in arg_2) {
    const local = {
      ...local_3?.data,
      ...arg_2.data,
    };
    local.mechanism.data = local;
  }
}
function fn_cf16777a(arg) {
  if (fn_01800d02(arg)) {
    return true;
  }
  try {
    fn_84ede063(arg, "__sentry_captured__", true);
  } catch {}
  return false;
}
function fn_01800d02(arg) {
  try {
    return arg.__sentry_captured__;
  } catch {}
}
const local_f06debfc_4 = 1000;
function fn_f900ccad() {
  return fn_ce103458_2() / local_f06debfc_4;
}
function fn_ed6a49b6() {
  const { performance: local } = local_f090a36f;
  if (!local?.now || !local.timeOrigin) {
    return fn_f900ccad;
  }
  const local_2 = local.timeOrigin;
  return () => (local_2 + fn_3ba42ed1(() => local.now())) / local_f06debfc_4;
}
let local_657db3b7_15;
function fn_d10ac820() {
  return (local_657db3b7_15 ??= fn_ed6a49b6())();
}
function fn_ec91e4f1(arg) {
  const local = fn_d10ac820();
  const local_2 = {
    sid: fn_8e541891(),
    init: true,
    timestamp: local,
    started: local,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => fn_bf811ba1(local_2),
  };
  if (arg) {
    fn_f4593a38(local_2, arg);
  }
  return local_2;
}
function fn_f4593a38(arg, arg_2 = {}) {
  arg_2.user &&
    (!arg.ipAddress &&
      arg_2.user.ip_address &&
      (arg.ipAddress = arg_2.user.ip_address),
    !arg.did &&
      !arg_2.did &&
      (arg.did = arg_2.user.id || arg_2.user.email || arg_2.user.username));
  arg.timestamp = arg_2.timestamp || fn_d10ac820();
  if (arg_2.abnormal_mechanism) {
    arg.abnormal_mechanism = arg_2.abnormal_mechanism;
  }
  if (arg_2.ignoreDuration) {
    arg.ignoreDuration = arg_2.ignoreDuration;
  }
  if (arg_2.sid) {
    arg.sid = arg_2.sid.length === 32 ? arg_2.sid : fn_8e541891();
  }
  if (arg_2.init !== undefined) {
    arg.init = arg_2.init;
  }
  if (!arg.did && arg_2.did) {
    arg.did = `${arg_2.did}`;
  }
  if (typeof arg_2.started === "number") {
    arg.started = arg_2.started;
  }
  if (arg.ignoreDuration) {
    arg.duration = undefined;
  } else if (typeof arg_2.duration === "number") {
    arg.duration = arg_2.duration;
  } else {
    const local = arg.timestamp - arg.started;
    arg.duration = local >= 0 ? local : 0;
  }
  if (arg_2.release) {
    arg.release = arg_2.release;
  }
  if (arg_2.environment) {
    arg.environment = arg_2.environment;
  }
  if (!arg.ipAddress && arg_2.ipAddress) {
    arg.ipAddress = arg_2.ipAddress;
  }
  if (!arg.userAgent && arg_2.userAgent) {
    arg.userAgent = arg_2.userAgent;
  }
  if (typeof arg_2.errors === "number") {
    arg.errors = arg_2.errors;
  }
  if (arg_2.status) {
    arg.status = arg_2.status;
  }
}
function fn_4c142178(arg, arg_2) {
  let local = {};
  if (arg.status === "ok") {
    local = {
      status: "exited",
    };
  }
  fn_f4593a38(arg, local);
}
function fn_bf811ba1(arg) {
  return {
    sid: `${arg.sid}`,
    init: arg.init,
    started: new Date(arg.started * 1000).toISOString(),
    timestamp: new Date(arg.timestamp * 1000).toISOString(),
    status: arg.status,
    errors: arg.errors,
    did:
      typeof arg.did === "number" || typeof arg.did === "string"
        ? `${arg.did}`
        : undefined,
    duration: arg.duration,
    abnormal_mechanism: arg.abnormal_mechanism,
    attrs: {
      release: arg.release,
      environment: arg.environment,
      ip_address: arg.ipAddress,
      user_agent: arg.userAgent,
    },
  };
}
function fn_152db074(arg, arg_2, arg_3 = 2) {
  if (!arg_2 || typeof arg_2 !== "object" || arg_3 <= 0) {
    return arg_2;
  }
  if (arg && Object.keys(arg_2).length === 0) {
    return arg;
  }
  const local = {
    ...arg,
  };
  for (const local in arg_2) {
    if (Object.prototype.hasOwnProperty.call(arg_2, local)) {
      local[local] = fn_152db074(local[local], arg_2[local], arg_3 - 1);
    }
  }
  return local;
}
function fn_ddb3f7b3() {
  return fn_8e541891();
}
function fn_0ee91f89() {
  return fn_8e541891().substring(16);
}
const local_e49fd8b4 = "_sentrySpan";
function fn_6185ec9a(arg, arg_2) {
  if (arg_2) {
    fn_84ede063(arg, local_e49fd8b4, arg_2);
  } else {
    delete arg[local_e49fd8b4];
  }
}
function fn_561318cf(arg) {
  return arg[local_e49fd8b4];
}
const local_f06debfc_5 = 100;
class clazz_b6ac9163 {
  constructor() {
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._attributes = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
    this._propagationContext = {
      traceId: fn_ddb3f7b3(),
      sampleRand: fn_ce103458(),
    };
  }
  clone() {
    const local = new clazz_b6ac9163();
    local._breadcrumbs = [...this._breadcrumbs];
    local._tags = {
      ...this._tags,
    };
    local._attributes = {
      ...this._attributes,
    };
    local._extra = {
      ...this._extra,
    };
    local._contexts = {
      ...this._contexts,
    };
    if (this._contexts.flags) {
      local._contexts.flags = {
        values: [...this._contexts.flags.values],
      };
    }
    local._user = this._user;
    local._level = this._level;
    local._session = this._session;
    local._transactionName = this._transactionName;
    local._fingerprint = this._fingerprint;
    local._eventProcessors = [...this._eventProcessors];
    local._attachments = [...this._attachments];
    local._sdkProcessingMetadata = {
      ...this._sdkProcessingMetadata,
    };
    local._propagationContext = {
      ...this._propagationContext,
    };
    local._client = this._client;
    local._lastEventId = this._lastEventId;
    local._conversationId = this._conversationId;
    fn_6185ec9a(local, fn_561318cf(this));
    return local;
  }
  setClient(arg) {
    this._client = arg;
  }
  setLastEventId(arg) {
    this._lastEventId = arg;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(arg) {
    this._scopeListeners.push(arg);
  }
  addEventProcessor(arg) {
    this._eventProcessors.push(arg);
    return this;
  }
  setUser(arg) {
    this._user = arg || {
      email: undefined,
      id: undefined,
      ip_address: undefined,
      username: undefined,
    };
    if (this._session) {
      fn_f4593a38(this._session, {
        user: arg,
      });
    }
    this._notifyScopeListeners();
    return this;
  }
  getUser() {
    return this._user;
  }
  setConversationId(arg) {
    this._conversationId = arg || undefined;
    this._notifyScopeListeners();
    return this;
  }
  setTags(arg) {
    this._tags = {
      ...this._tags,
      ...arg,
    };
    this._notifyScopeListeners();
    return this;
  }
  setTag(arg, arg_2) {
    return this.setTags({
      [arg]: arg_2,
    });
  }
  setAttributes(arg) {
    this._attributes = {
      ...this._attributes,
      ...arg,
    };
    this._notifyScopeListeners();
    return this;
  }
  setAttribute(arg, arg_2) {
    return this.setAttributes({
      [arg]: arg_2,
    });
  }
  removeAttribute(arg) {
    if (arg in this._attributes) {
      delete this._attributes[arg];
      this._notifyScopeListeners();
    }
    return this;
  }
  setExtras(arg) {
    this._extra = {
      ...this._extra,
      ...arg,
    };
    this._notifyScopeListeners();
    return this;
  }
  setExtra(arg, arg_2) {
    this._extra = {
      ...this._extra,
      [arg]: arg_2,
    };
    this._notifyScopeListeners();
    return this;
  }
  setFingerprint(arg) {
    this._fingerprint = arg;
    this._notifyScopeListeners();
    return this;
  }
  setLevel(arg) {
    this._level = arg;
    this._notifyScopeListeners();
    return this;
  }
  setTransactionName(arg) {
    this._transactionName = arg;
    this._notifyScopeListeners();
    return this;
  }
  setContext(arg, arg_2) {
    if (arg_2 === null) {
      delete this._contexts[arg];
    } else {
      this._contexts[arg] = arg_2;
    }
    this._notifyScopeListeners();
    return this;
  }
  setSession(arg) {
    if (arg) {
      this._session = arg;
    } else {
      delete this._session;
    }
    this._notifyScopeListeners();
    return this;
  }
  getSession() {
    return this._session;
  }
  update(arg) {
    if (!arg) {
      return this;
    }
    const local = typeof arg === "function" ? arg(this) : arg;
    const local_2 =
      local instanceof clazz_b6ac9163
        ? local.getScopeData()
        : fn_5ee37d10(local)
          ? arg
          : undefined;
    const {
      tags: local_3,
      attributes: local_4,
      extra: local_5,
      user: local_6,
      contexts: local_7,
      level: local_8,
      fingerprint: local_9 = [],
      propagationContext: local_10,
      conversationId: local_11,
    } = local_2 || {};
    this._tags = {
      ...this._tags,
      ...local_3,
    };
    this._attributes = {
      ...this._attributes,
      ...local_4,
    };
    this._extra = {
      ...this._extra,
      ...local_5,
    };
    this._contexts = {
      ...this._contexts,
      ...local_7,
    };
    if (local_6 && Object.keys(local_6).length) {
      this._user = local_6;
    }
    if (local_8) {
      this._level = local_8;
    }
    if (local_9.length) {
      this._fingerprint = local_9;
    }
    if (local_10) {
      this._propagationContext = local_10;
    }
    if (local_11) {
      this._conversationId = local_11;
    }
    return this;
  }
  clear() {
    this._breadcrumbs = [];
    this._tags = {};
    this._attributes = {};
    this._extra = {};
    this._user = {};
    this._contexts = {};
    this._level = undefined;
    this._transactionName = undefined;
    this._fingerprint = undefined;
    this._session = undefined;
    this._conversationId = undefined;
    fn_6185ec9a(this, undefined);
    this._attachments = [];
    this.setPropagationContext({
      traceId: fn_ddb3f7b3(),
      sampleRand: fn_ce103458(),
    });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(arg, arg_2) {
    const local = typeof arg_2 === "number" ? arg_2 : local_f06debfc_5;
    if (local <= 0) {
      return this;
    }
    const local_2 = {
      timestamp: fn_f900ccad(),
      ...arg,
      message: arg.message ? fn_910ea535(arg.message, 2048) : arg.message,
    };
    this._breadcrumbs.push(local_2);
    if (this._breadcrumbs.length > local) {
      this._breadcrumbs = this._breadcrumbs.slice(-local);
      this._client?.recordDroppedEvent("buffer_overflow", "log_item");
    }
    this._notifyScopeListeners();
    return this;
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  }
  addAttachment(arg) {
    this._attachments.push(arg);
    return this;
  }
  clearAttachments() {
    this._attachments = [];
    return this;
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      attributes: this._attributes,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: fn_561318cf(this),
      conversationId: this._conversationId,
    };
  }
  setSDKProcessingMetadata(arg) {
    this._sdkProcessingMetadata = fn_152db074(
      this._sdkProcessingMetadata,
      arg,
      2,
    );
    return this;
  }
  setPropagationContext(arg) {
    this._propagationContext = arg;
    return this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(arg, arg_2) {
    const local = arg_2?.event_id || fn_8e541891();
    if (!this._client) {
      if (local_23bb5d69) {
        local_5a6ba1bf.warn(
          "No client configured on scope - will not capture exception!",
        );
      }
      return local;
    }
    const local_2 = new Error("Sentry syntheticException");
    this._client.captureException(
      arg,
      {
        originalException: arg,
        syntheticException: local_2,
        ...arg_2,
        event_id: local,
      },
      this,
    );
    return local;
  }
  captureMessage(arg, arg_2, arg_3) {
    const local = arg_3?.event_id || fn_8e541891();
    if (!this._client) {
      if (local_23bb5d69) {
        local_5a6ba1bf.warn(
          "No client configured on scope - will not capture message!",
        );
      }
      return local;
    }
    const local_2 = arg_3?.syntheticException ?? new Error(arg);
    this._client.captureMessage(
      arg,
      arg_2,
      {
        originalException: arg,
        syntheticException: local_2,
        ...arg_3,
        event_id: local,
      },
      this,
    );
    return local;
  }
  captureEvent(arg, arg_2) {
    const local = arg.event_id || arg_2?.event_id || fn_8e541891();
    if (this._client) {
      return (
        this._client.captureEvent(
          arg,
          {
            ...arg_2,
            event_id: local,
          },
          this,
        ),
        local
      );
    }
    return (
      local_23bb5d69 &&
        local_5a6ba1bf.warn(
          "No client configured on scope - will not capture event!",
        ),
      local
    );
  }
  _notifyScopeListeners() {
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      this._scopeListeners.forEach((arg) => {
        arg(this);
      });
      this._notifyingListeners = false;
    }
  }
}
function fn_32277858() {
  return fn_9cfc19fb("defaultCurrentScope", () => new clazz_b6ac9163());
}
function fn_6fc936f4() {
  return fn_9cfc19fb("defaultIsolationScope", () => new clazz_b6ac9163());
}
const local_45405e2f = (arg) => arg instanceof Promise && !arg[local_9071e751];
const local_9071e751 = Symbol("chained PromiseLike");
const local_a0eafe6b = (arg, arg_2, arg_3) => {
  const local = arg.then(
    (arg) => {
      arg_2(arg);
      return arg;
    },
    (arg) => {
      arg_3(arg);
      throw arg;
    },
  );
  if (local_45405e2f(local) && local_45405e2f(arg)) {
    return local;
  }
  return local_c0f65dd2(arg, local);
};
const local_c0f65dd2 = (arg, arg_2) => {
  if (!arg_2) {
    return arg;
  }
  let local = false;
  for (const local in arg) {
    if (local in arg_2) {
      continue;
    }
    local = true;
    const local = arg[local];
    if (typeof local === "function") {
      Object.defineProperty(arg_2, local, {
        value: (...arg) => local.apply(arg, arg),
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      arg_2[local] = local;
    }
  }
  if (local) {
    Object.assign(arg_2, {
      [local_9071e751]: true,
    });
  }
  return arg_2;
};
class clazz_dca7c5a8 {
  constructor(arg, arg_2) {
    let local;
    if (arg) {
      local = arg;
    } else {
      local = new clazz_b6ac9163();
    }
    let local_2;
    if (arg_2) {
      local_2 = arg_2;
    } else {
      local_2 = new clazz_b6ac9163();
    }
    this._stack = [
      {
        scope: local,
      },
    ];
    this._isolationScope = local_2;
  }
  withScope(arg) {
    const local = this._pushScope();
    let local_2;
    try {
      local_2 = arg(local);
    } catch (error) {
      this._popScope();
      throw error;
    }
    if (fn_0dbd451a(local_2)) {
      return local_a0eafe6b(
        local_2,
        () => this._popScope(),
        () => this._popScope(),
      );
    }
    return (this._popScope(), local_2);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const local = this.getScope().clone();
    this._stack.push({
      client: this.getClient(),
      scope: local,
    });
    return local;
  }
  _popScope() {
    if (this._stack.length <= 1) {
      return false;
    }
    return !!this._stack.pop();
  }
}
function fn_811be520() {
  const local = fn_324f4519();
  const local_2 = fn_2e1450a8(local);
  return (local_2.stack =
    local_2.stack || new clazz_dca7c5a8(fn_32277858(), fn_6fc936f4()));
}
function fn_77d7b663(arg) {
  return fn_811be520().withScope(arg);
}
function fn_f46854e5(arg, arg_2) {
  const local = fn_811be520();
  return local.withScope(() => {
    local.getStackTop().scope = arg;
    return arg_2(arg);
  });
}
function fn_5f43ff6d(arg) {
  return fn_811be520().withScope(() => arg(fn_811be520().getIsolationScope()));
}
function fn_9d11c0cb() {
  return {
    withIsolationScope: fn_5f43ff6d,
    withScope: fn_77d7b663,
    withSetScope: fn_f46854e5,
    withSetIsolationScope: (arg, arg_2) => fn_5f43ff6d(arg_2),
    getCurrentScope: () => fn_811be520().getScope(),
    getIsolationScope: () => fn_811be520().getIsolationScope(),
  };
}
function fn_16dd7cb0(arg) {
  const local = fn_2e1450a8(arg);
  if (local.acs) {
    return local.acs;
  }
  return fn_9d11c0cb();
}
function fn_bff325b9() {
  const local = fn_324f4519();
  return fn_16dd7cb0(local).getCurrentScope();
}
function fn_bff325b9_2() {
  const local = fn_324f4519();
  return fn_16dd7cb0(local).getIsolationScope();
}
function fn_5ba46d8d() {
  return fn_9cfc19fb("globalScope", () => new clazz_b6ac9163());
}
function fn_ded9c9e3(...arg) {
  const local = fn_324f4519();
  const local_2 = fn_16dd7cb0(local);
  if (arg.length === 2) {
    const [local, local_2] = arg;
    if (local) {
      return local_2.withSetScope(local, local_2);
    }
    return local_2.withScope(local_2);
  }
  return local_2.withScope(arg[0]);
}
function fn_df50106e() {
  return fn_bff325b9().getClient();
}
function fn_1ae32594(arg) {
  const local = arg.getPropagationContext();
  const {
    traceId: local_2,
    parentSpanId: local_3,
    propagationSpanId: local_4,
  } = local;
  const local_5 = {
    trace_id: local_2,
    span_id: local_4 || fn_0ee91f89(),
  };
  if (local_3) {
    local_5.parent_span_id = local_3;
  }
  return local_5;
}
const local_82701b29 = "sentry.source";
const local_8b6e71b8 = "sentry.sample_rate";
const local_ff272b2a = "sentry.previous_trace_sample_rate";
const local_11f53be5 = "sentry.op";
const local_d6aaddac = "sentry.origin";
const local_9ff4c9b4 = "sentry.profile_id";
const local_a9ec10af = "sentry.exclusive_time";
const local_59c72df3 = "gen_ai.conversation.id";
const local_f06debfc_6 = 0;
const local_f06debfc_7 = 1;
function fn_2207778a(arg) {
  if (arg) {
    if (
      typeof arg === "object" &&
      "deref" in arg &&
      typeof arg.deref === "function"
    ) {
      try {
        return arg.deref();
      } catch {
        return;
      }
    }
    return arg;
  }
}
const local_38581a95 = "_sentryScope";
const local_e4ffb7d4 = "_sentryIsolationScope";
function fn_02e90b88(arg) {
  const local = arg;
  return {
    scope: local[local_38581a95],
    isolationScope: fn_2207778a(local[local_e4ffb7d4]),
  };
}
const local_b20e6361 = "sentry-";
function fn_5ce849be(arg) {
  const local = fn_d293d69e(arg);
  if (!local) {
    return;
  }
  const local_2 = Object.entries(local).reduce((arg, [arg_2, arg_3]) => {
    if (arg_2.startsWith(local_b20e6361)) {
      const local = arg_2.slice(local_b20e6361.length);
      arg[local] = arg_3;
    }
    return arg;
  }, {});
  if (Object.keys(local_2).length > 0) {
    return local_2;
  }
}
function fn_d293d69e(arg) {
  if (!(!arg || (!fn_bdd4075c(arg) && !Array.isArray(arg)))) {
    if (Array.isArray(arg)) {
      return arg.reduce((arg, arg_2) => {
        const local = fn_3c16f4b2(arg_2);
        Object.entries(local).forEach(([arg, arg_2]) => {
          arg[arg] = arg_2;
        });
        return arg;
      }, {});
    }
    return fn_3c16f4b2(arg);
  }
}
function fn_3c16f4b2(arg) {
  return arg
    .split(",")
    .map((arg) => {
      const local = arg.indexOf("=");
      if (local === -1) {
        return [];
      }
      const local_2 = arg.slice(0, local);
      const local_3 = arg.slice(local + 1);
      return [local_2, local_3].map((arg) => {
        try {
          return decodeURIComponent(arg.trim());
        } catch {
          return;
        }
      });
    })
    .reduce((arg, [arg_2, arg_3]) => {
      if (arg_2 && arg_3) {
        arg[arg_2] = arg_3;
      }
      return arg;
    }, {});
}
const local_8282d733 = /^o(\d+)\./;
const local_afc093de =
  /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
function fn_2caef1e8(arg) {
  return arg === "http" || arg === "https";
}
function fn_c87543dd(arg, arg_2 = false) {
  const {
    host: local,
    path: local_2,
    pass: local_3,
    port: local_4,
    projectId: local_5,
    protocol: local_6,
    publicKey: local_7,
  } = arg;
  return `${local_6}://${local_7}${arg_2 && local_3 ? `:${local_3}` : ""}@${local}${local_4 ? `:${local_4}` : ""}/${local_2 && `${local_2}/`}${local_5}`;
}
function fn_aaa8ff57(arg) {
  const local = local_afc093de.exec(arg);
  if (!local) {
    fn_a1a275d6(() => {
      console.error(`Invalid Sentry Dsn: ${arg}`);
    });
    return;
  }
  const [
    local_2,
    local_3,
    local_4 = "",
    local_5 = "",
    local_6 = "",
    local_7 = "",
  ] = local.slice(1);
  let local_8 = "";
  let local_9 = local_7;
  const local_10 = local_9.split("./site/index.html");
  if (local_10.length > 1) {
    local_8 = local_10.slice(0, -1).join("./site/index.html");
    local_9 = local_10.pop();
  }
  if (local_9) {
    const local = local_9.match(/^\d+/);
    if (local) {
      local_9 = local[0];
    }
  }
  return fn_33459324({
    host: local_5,
    pass: local_4,
    path: local_8,
    projectId: local_9,
    port: local_6,
    protocol: local_2,
    publicKey: local_3,
  });
}
function fn_33459324(arg) {
  return {
    protocol: arg.protocol,
    publicKey: arg.publicKey || "",
    pass: arg.pass || "",
    host: arg.host,
    port: arg.port || "",
    path: arg.path || "",
    projectId: arg.projectId,
  };
}
function fn_a7a8c2f5(arg) {
  if (!local_23bb5d69) {
    return true;
  }
  const { port: local, projectId: local_2, protocol: local_3 } = arg;
  if (
    ["protocol", "publicKey", "host", "projectId"].find((arg) => {
      if (arg[arg]) {
        return false;
      }
      return (local_5a6ba1bf.error(`Invalid Sentry Dsn: ${arg} missing`), true);
    })
  ) {
    return false;
  }
  if (local_2.match(/^\d+$/)) {
    if (fn_2caef1e8(local_3)) {
      if (local && isNaN(parseInt(local, 10))) {
        return (
          local_5a6ba1bf.error(`Invalid Sentry Dsn: Invalid port ${local}`),
          false
        );
      }
      return true;
    }
    return (
      local_5a6ba1bf.error(`Invalid Sentry Dsn: Invalid protocol ${local_3}`),
      false
    );
  }
  return (
    local_5a6ba1bf.error(`Invalid Sentry Dsn: Invalid projectId ${local_2}`),
    false
  );
}
function fn_21b84495(arg) {
  return arg.match(local_8282d733)?.[1];
}
function fn_e50692cf(arg) {
  const local = arg.getOptions();
  const { host: local_2 } = arg.getDsn() || {};
  let local_3;
  if (local.orgId) {
    local_3 = String(local.orgId);
  } else if (local_2) {
    local_3 = fn_21b84495(local_2);
  }
  return local_3;
}
function fn_2d12d30f(arg) {
  const local = typeof arg === "string" ? fn_aaa8ff57(arg) : fn_33459324(arg);
  if (!(!local || !fn_a7a8c2f5(local))) {
    return local;
  }
}
function fn_931b18fa(arg) {
  if (typeof arg === "boolean") {
    return Number(arg);
  }
  const local = typeof arg === "string" ? parseFloat(arg) : arg;
  if (!(typeof local !== "number" || isNaN(local) || local < 0 || local > 1)) {
    return local;
  }
}
const local_f06debfc_8 = 1;
let local_9b12006c = false;
function fn_1badae7f(arg) {
  const {
    spanId: local,
    traceId: local_2,
    isRemote: local_3,
  } = arg.spanContext();
  const local_4 = local_3 ? local : fn_0aacd2da(arg).parent_span_id;
  const local_5 = fn_02e90b88(arg).scope;
  const local_6 = local_3
    ? local_5?.getPropagationContext().propagationSpanId || fn_0ee91f89()
    : local;
  return {
    parent_span_id: local_4,
    span_id: local_6,
    trace_id: local_2,
  };
}
function fn_b6f4704e(arg) {
  if (arg && arg.length > 0) {
    return arg.map(
      ({
        context: { spanId: arg, traceId: arg_2, traceFlags: arg_3, ...arg_4 },
        attributes: arg_5,
      }) => ({
        span_id: arg,
        trace_id: arg_2,
        sampled: arg_3 === local_f06debfc_8,
        attributes: arg_5,
        ...arg_4,
      }),
    );
  }
}
function fn_9c8eefeb(arg) {
  if (typeof arg === "number") {
    return fn_d44ac56f(arg);
  }
  if (Array.isArray(arg)) {
    return arg[0] + arg[1] / 1000000000;
  }
  if (arg instanceof Date) {
    return fn_d44ac56f(arg.getTime());
  }
  return fn_d10ac820();
}
function fn_d44ac56f(arg) {
  if (arg > 9999999999) {
    return arg / 1000;
  }
  return arg;
}
function fn_0aacd2da(arg) {
  if (fn_a06a5c10(arg)) {
    return arg.getSpanJSON();
  }
  const { spanId: local, traceId: local_2 } = arg.spanContext();
  if (fn_418de9fb(arg)) {
    const {
      attributes: local,
      startTime: local_2,
      name: local_3,
      endTime: local_4,
      status: local_5,
      links: local_6,
    } = arg;
    return {
      span_id: local,
      trace_id: local_2,
      data: local,
      description: local_3,
      parent_span_id: fn_36f67def(arg),
      start_timestamp: fn_9c8eefeb(local_2),
      timestamp: fn_9c8eefeb(local_4) || undefined,
      status: fn_f54b18de(local_5),
      op: local[local_11f53be5],
      origin: local[local_d6aaddac],
      links: fn_b6f4704e(local_6),
    };
  }
  return {
    span_id: local,
    trace_id: local_2,
    start_timestamp: 0,
    data: {},
  };
}
function fn_36f67def(arg) {
  if ("parentSpanId" in arg) {
    return arg.parentSpanId;
  }
  if ("parentSpanContext" in arg) {
    return arg.parentSpanContext?.spanId;
  }
}
function fn_418de9fb(arg) {
  const local = arg;
  return (
    !!local.attributes &&
    !!local.startTime &&
    !!local.name &&
    !!local.endTime &&
    !!local.status
  );
}
function fn_a06a5c10(arg) {
  return typeof arg.getSpanJSON === "function";
}
function fn_54927b57(arg) {
  const { traceFlags: local } = arg.spanContext();
  return local === local_f06debfc_8;
}
function fn_f54b18de(arg) {
  if (!(!arg || arg.code === local_f06debfc_6)) {
    if (arg.code === local_f06debfc_7) {
      return "ok";
    }
    return arg.message || "internal_error";
  }
}
const local_adda1723 = "_sentryRootSpan";
const local_f090a36f_3 = fn_ca180906;
function fn_ca180906(arg) {
  return arg[local_adda1723] || arg;
}
function fn_f2b31c5d() {
  if (!local_9b12006c) {
    fn_a1a275d6(() => {
      console.warn(
        "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.",
      );
    });
    local_9b12006c = true;
  }
}
function fn_9f6962cb(arg) {
  if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const local = fn_df50106e()?.getOptions();
  return !!local && (local.tracesSampleRate != null || !!local.tracesSampler);
}
function fn_5956797a(arg) {
  local_5a6ba1bf.log(
    `Ignoring span ${arg.op} - ${arg.description} because it matches \`ignoreSpans\`.`,
  );
}
function fn_6f7aff87(arg, arg_2) {
  if (!arg_2?.length) {
    return false;
  }
  for (const local of arg_2) {
    if (fn_b5562a95(local)) {
      if (arg.description && fn_847aa30e(arg.description, local)) {
        if (local_23bb5d69) {
          fn_5956797a(arg);
        }
        return true;
      }
      continue;
    }
    const local =
      !!local.attributes && Object.keys(local.attributes).length > 0;
    if (!local.name && !local.op && !local) {
      continue;
    }
    const local_2 = local.name
      ? arg.description && fn_847aa30e(arg.description, local.name)
      : true;
    const local_3 = local.op ? arg.op && fn_847aa30e(arg.op, local.op) : true;
    const local_4 = local.attributes
      ? Object.entries(local.attributes).every(([arg, arg_2]) =>
          fn_815086a3(arg.attributes?.[arg], arg_2),
        )
      : true;
    if (local_2 && local_3 && local_4) {
      if (local_23bb5d69) {
        fn_5956797a(arg);
      }
      return true;
    }
  }
  return false;
}
function fn_815086a3(arg, arg_2) {
  if (
    typeof arg === "string" &&
    (typeof arg_2 === "string" || arg_2 instanceof RegExp)
  ) {
    return fn_847aa30e(arg, arg_2);
  }
  if (Array.isArray(arg) && Array.isArray(arg_2)) {
    return (
      arg.length === arg_2.length &&
      arg.every((arg, arg_2) => arg === arg_2[arg_2])
    );
  }
  return arg === arg_2;
}
function fn_a6871141(arg, arg_2) {
  const local = arg_2.parent_span_id;
  const local_2 = arg_2.span_id;
  if (local) {
    for (const local of arg) {
      if (local.parent_span_id === local_2) {
        local.parent_span_id = local;
      }
    }
  }
}
function fn_b5562a95(arg) {
  return typeof arg === "string" || arg instanceof RegExp;
}
const local_7597049d = "production";
const local_d9277da7 = "_frozenDsc";
function fn_a59a8864(arg, arg_2) {
  const local = arg_2.getOptions();
  const { publicKey: local_2 } = arg_2.getDsn() || {};
  const local_3 = {
    environment: local.environment || local_7597049d,
    release: local.release,
    public_key: local_2,
    trace_id: arg,
    org_id: fn_e50692cf(arg_2),
  };
  arg_2.emit("createDsc", local_3);
  return local_3;
}
function fn_671c62a8(arg, arg_2) {
  const local = arg_2.getPropagationContext();
  return local.dsc || fn_a59a8864(local.traceId, arg);
}
function fn_5dbacd9c(arg) {
  const local = fn_df50106e();
  if (!local) {
    return {};
  }
  const local_2 = local_f090a36f_3(arg);
  const local_3 = fn_0aacd2da(local_2);
  const local_4 = local_3.data;
  const local_5 = local_2.spanContext().traceState;
  const local_6 =
    local_5?.get("sentry.sample_rate") ??
    local_4[local_8b6e71b8] ??
    local_4[local_ff272b2a];
  function fn(arg) {
    if (typeof local_6 === "number" || typeof local_6 === "string") {
      arg.sample_rate = `${local_6}`;
    }
    return arg;
  }
  const local_7 = local_2[local_d9277da7];
  if (local_7) {
    return fn(local_7);
  }
  const local_8 = local_5?.get("sentry.dsc");
  const local_9 = local_8 && fn_5ce849be(local_8);
  if (local_9) {
    return fn(local_9);
  }
  const local_10 = fn_a59a8864(arg.spanContext().traceId, local);
  const local_11 = local_4[local_82701b29] ?? local_4["sentry.span.source"];
  const local_12 = local_3.description;
  if (local_11 !== "url" && local_12) {
    local_10.transaction = local_12;
  }
  if (fn_9f6962cb()) {
    local_10.sampled = String(fn_54927b57(local_2));
    local_10.sample_rand =
      local_5?.get("sentry.sample_rand") ??
      fn_02e90b88(local_2).scope?.getPropagationContext().sampleRand.toString();
  }
  fn(local_10);
  local.emit("createDsc", local_10, local_2);
  return local_10;
}
function fn_afd39aa0(arg) {
  return (
    !!arg && typeof arg === "function" && "_streamed" in arg && !!arg._streamed
  );
}
const local_b7c88805 = Symbol.for("sentry.skipNormalization");
const local_98a488cb = Symbol.for("sentry.overrideNormalizationDepth");
function fn_61a6acad(arg) {
  return !!arg[local_b7c88805];
}
function fn_b36c7183(arg) {
  const local = arg[local_98a488cb];
  if (typeof local === "number") {
    return local;
  }
}
function fn_49b28d31(arg, arg_2 = 100, arg_3 = Infinity) {
  try {
    return fn_ca7d5fff("", arg, arg_2, arg_3);
  } catch (error) {
    return {
      ERROR: `**non-serializable** (${error})`,
    };
  }
}
function fn_05588881(arg, arg_2 = 3, arg_3 = 100 * 1024) {
  const local = fn_49b28d31(arg, arg_2);
  if (fn_2dca9dbd(local) > arg_3) {
    return fn_05588881(arg, arg_2 - 1, arg_3);
  }
  return local;
}
function fn_ca7d5fff(
  arg,
  arg_2,
  arg_3 = Infinity,
  arg_4 = Infinity,
  arg_5 = fn_9b8f932e(),
) {
  const [local, local_2] = arg_5;
  if (
    arg_2 == null ||
    ["boolean", "string"].includes(typeof arg_2) ||
    (typeof arg_2 === "number" && Number.isFinite(arg_2))
  ) {
    return arg_2;
  }
  const local_3 = fn_f3088c4c(arg, arg_2);
  if (!local_3.startsWith("[object ")) {
    return local_3;
  }
  if (fn_61a6acad(arg_2)) {
    return arg_2;
  }
  const local_4 = fn_b36c7183(arg_2);
  const local_5 = local_4 !== undefined ? local_4 : arg_3;
  if (local_5 === 0) {
    return local_3.replace("object ", "");
  }
  if (local(arg_2)) {
    return "[Circular ~]";
  }
  const local_6 = arg_2;
  if (local_6 && typeof local_6.toJSON === "function") {
    try {
      const local = local_6.toJSON();
      return fn_ca7d5fff("", local, local_5 - 1, arg_4, arg_5);
    } catch {}
  }
  const local_7 = Array.isArray(arg_2) ? [] : {};
  let local_8 = 0;
  const local_9 = fn_0476c2c9(arg_2);
  for (const local in local_9) {
    if (!Object.prototype.hasOwnProperty.call(local_9, local)) {
      continue;
    }
    if (local_8 >= arg_4) {
      local_7[local] = "[MaxProperties ~]";
      break;
    }
    const local = local_9[local];
    local_7[local] = fn_ca7d5fff(local, local, local_5 - 1, arg_4, arg_5);
    local_8++;
  }
  local_2(arg_2);
  return local_7;
}
function fn_f3088c4c(arg, arg_2) {
  try {
    if (
      arg === "domain" &&
      arg_2 &&
      typeof arg_2 === "object" &&
      arg_2._events
    ) {
      return "[Domain]";
    }
    if (arg === "domainEmitter") {
      return "[DomainEmitter]";
    }
    if (typeof global !== "undefined" && arg_2 === global) {
      return "[Global]";
    }
    if (typeof window !== "undefined" && arg_2 === window) {
      return "[Window]";
    }
    if (typeof document !== "undefined" && arg_2 === document) {
      return "[Document]";
    }
    if (fn_2b08bc2f(arg_2)) {
      return fn_fa18e46f(arg_2);
    }
    if (fn_d0f27641(arg_2)) {
      return "[SyntheticEvent]";
    }
    if (typeof arg_2 === "number" && !Number.isFinite(arg_2)) {
      return `[${arg_2}]`;
    }
    if (typeof arg_2 === "function") {
      return `[Function: ${fn_38b209f1(arg_2)}]`;
    }
    if (typeof arg_2 === "symbol") {
      return `[${String(arg_2)}]`;
    }
    if (typeof arg_2 === "bigint") {
      return `[BigInt: ${String(arg_2)}]`;
    }
    const local = fn_77e71660(arg_2);
    if (/^HTML(\w*)Element$/.test(local)) {
      return `[HTMLElement: ${local}]`;
    }
    return `[object ${local}]`;
  } catch (error) {
    return `**non-serializable** (${error})`;
  }
}
function fn_77e71660(arg) {
  const local = Object.getPrototypeOf(arg);
  if (local?.constructor) {
    return local.constructor.name;
  }
  return "null prototype";
}
function fn_cbc0fbc7(arg) {
  return ~-encodeURI(arg).split(/%..|./).length;
}
function fn_2dca9dbd(arg) {
  return fn_cbc0fbc7(JSON.stringify(arg));
}
function fn_9b8f932e() {
  const local = new WeakSet();
  function fn(arg) {
    if (local.has(arg)) {
      return true;
    }
    return (local.add(arg), false);
  }
  function fn_2(arg) {
    local.delete(arg);
  }
  return [fn, fn_2];
}
function fn_d71bf2e7(arg, arg_2 = []) {
  return [arg, arg_2];
}
function fn_f144f74a(arg, arg_2) {
  const [local, local_2] = arg;
  return [local, [...local_2, arg_2]];
}
function fn_5ad2c136(arg, arg_2) {
  const local = arg[1];
  for (const local of local) {
    const local = local[0].type;
    if (arg_2(local, local)) {
      return true;
    }
  }
  return false;
}
function fn_060a4533(arg, arg_2) {
  return fn_5ad2c136(arg, (arg, arg_2) => arg_2.includes(arg_2));
}
function fn_a4fb976a(arg) {
  const local = fn_2e1450a8(local_f090a36f);
  if (local.encodePolyfill) {
    return local.encodePolyfill(arg);
  }
  return new TextEncoder().encode(arg);
}
function fn_109b90e9(arg) {
  const [local, local_2] = arg;
  let local_3 = JSON.stringify(local);
  function fn(arg) {
    if (typeof local_3 === "string") {
      local_3 =
        typeof arg === "string" ? local_3 + arg : [fn_a4fb976a(local_3), arg];
    } else {
      local_3.push(typeof arg === "string" ? fn_a4fb976a(arg) : arg);
    }
  }
  for (const local of local_2) {
    const [local, local_2] = local;
    fn(`
${JSON.stringify(local)}
`);
    if (typeof local_2 === "string" || local_2 instanceof Uint8Array) {
      fn(local_2);
    } else {
      let local;
      try {
        local = JSON.stringify(local_2);
      } catch {
        local = JSON.stringify(fn_49b28d31(local_2));
      }
      fn(local);
    }
  }
  if (typeof local_3 === "string") {
    return local_3;
  }
  return fn_ab936250(local_3);
}
function fn_ab936250(arg) {
  const local = arg.reduce((arg, arg_2) => arg + arg_2.length, 0);
  const local_2 = new Uint8Array(local);
  let local_3 = 0;
  for (const local of arg) {
    local_2.set(local, local_3);
    local_3 += local.length;
  }
  return local_2;
}
function fn_5823ef71(arg) {
  const local = typeof arg.data === "string" ? fn_a4fb976a(arg.data) : arg.data;
  return [
    {
      type: "attachment",
      length: local.length,
      filename: arg.filename,
      content_type: arg.contentType,
      attachment_type: arg.attachmentType,
    },
    local,
  ];
}
const local_de6401a1 = {
  sessions: "session",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  raw_security: "security",
  log: "log_item",
  trace_metric: "metric",
};
function fn_0cee0ac1(arg) {
  return arg in local_de6401a1;
}
function fn_206e6841(arg) {
  if (fn_0cee0ac1(arg)) {
    return local_de6401a1[arg];
  }
  return arg;
}
function fn_300e801b(arg) {
  if (!arg?.sdk) {
    return;
  }
  const { name: local, version: local_2 } = arg.sdk;
  return {
    name: local,
    version: local_2,
  };
}
function fn_097f3630(arg, arg_2, arg_3, arg_4) {
  const local = arg.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: arg.event_id,
    sent_at: new Date().toISOString(),
    ...(arg_2 && {
      sdk: arg_2,
    }),
    ...(!!arg_3 &&
      arg_4 && {
        dsn: fn_c87543dd(arg_4),
      }),
    ...(local && {
      trace: local,
    }),
  };
}
function fn_8e6d5464(arg, arg_2) {
  if (!arg_2) {
    return arg;
  }
  const local = arg.sdk || {};
  arg.sdk = {
    ...local,
    name: local.name || arg_2.name,
    version: local.version || arg_2.version,
    integrations: [
      ...(arg.sdk?.integrations || []),
      ...(arg_2.integrations || []),
    ],
    packages: [...(arg.sdk?.packages || []), ...(arg_2.packages || [])],
    settings:
      arg.sdk?.settings || arg_2.settings
        ? {
            ...arg.sdk?.settings,
            ...arg_2.settings,
          }
        : undefined,
  };
  return arg;
}
function fn_4e9eb070(arg, arg_2, arg_3, arg_4) {
  const local = fn_300e801b(arg_3);
  const local_2 = {
    sent_at: new Date().toISOString(),
    ...(local && {
      sdk: local,
    }),
    ...(!!arg_4 &&
      arg_2 && {
        dsn: fn_c87543dd(arg_2),
      }),
  };
  const local_3 =
    "aggregates" in arg
      ? [
          {
            type: "sessions",
          },
          arg,
        ]
      : [
          {
            type: "session",
          },
          arg.toJSON(),
        ];
  return fn_d71bf2e7(local_2, [local_3]);
}
function fn_4f0242e8(arg, arg_2, arg_3, arg_4) {
  const local = fn_300e801b(arg_3);
  const local_2 = arg.type && arg.type !== "replay_event" ? arg.type : "event";
  fn_8e6d5464(arg, arg_3?.sdk);
  const local_3 = fn_097f3630(arg, local, arg_4, arg_2);
  delete arg.sdkProcessingMetadata;
  return fn_d71bf2e7(local_3, [
    [
      {
        type: local_2,
      },
      arg,
    ],
  ]);
}
function fn_e3f121e3(arg, arg_2) {
  const {
    fingerprint: local,
    span: local_2,
    breadcrumbs: local_3,
    sdkProcessingMetadata: local_4,
  } = arg_2;
  fn_98c735b0(arg, arg_2);
  if (local_2) {
    fn_124e8768(arg, local_2);
  }
  fn_110f4deb(arg, local);
  fn_3b7d27b0(arg, local_3);
  fn_745ebe2d(arg, local_4);
}
function fn_3777c4c1(arg, arg_2) {
  const {
    extra: local,
    tags: local_2,
    attributes: local_3,
    user: local_4,
    contexts: local_5,
    level: local_6,
    sdkProcessingMetadata: local_7,
    breadcrumbs: local_8,
    fingerprint: local_9,
    eventProcessors: local_10,
    attachments: local_11,
    propagationContext: local_12,
    transactionName: local_13,
    span: local_14,
  } = arg_2;
  fn_d1b5ff56(arg, "extra", local);
  fn_d1b5ff56(arg, "tags", local_2);
  fn_d1b5ff56(arg, "attributes", local_3);
  fn_d1b5ff56(arg, "user", local_4);
  fn_d1b5ff56(arg, "contexts", local_5);
  arg.sdkProcessingMetadata = fn_152db074(
    arg.sdkProcessingMetadata,
    local_7,
    2,
  );
  if (local_6) {
    arg.level = local_6;
  }
  if (local_13) {
    arg.transactionName = local_13;
  }
  if (local_14) {
    arg.span = local_14;
  }
  if (local_8.length) {
    arg.breadcrumbs = [...arg.breadcrumbs, ...local_8];
  }
  if (local_9.length) {
    arg.fingerprint = [...arg.fingerprint, ...local_9];
  }
  if (local_10.length) {
    arg.eventProcessors = [...arg.eventProcessors, ...local_10];
  }
  if (local_11.length) {
    arg.attachments = [...arg.attachments, ...local_11];
  }
  arg.propagationContext = {
    ...arg.propagationContext,
    ...local_12,
  };
}
function fn_d1b5ff56(arg, arg_2, arg_3) {
  arg[arg_2] = fn_152db074(arg[arg_2], arg_3, 1);
}
function fn_709d17d4(arg, arg_2) {
  const local = fn_5ba46d8d().getScopeData();
  if (arg) {
    fn_3777c4c1(local, arg.getScopeData());
  }
  if (arg_2) {
    fn_3777c4c1(local, arg_2.getScopeData());
  }
  return local;
}
function fn_98c735b0(arg, arg_2) {
  const {
    extra: local,
    tags: local_2,
    user: local_3,
    contexts: local_4,
    level: local_5,
    transactionName: local_6,
  } = arg_2;
  if (Object.keys(local).length) {
    arg.extra = {
      ...local,
      ...arg.extra,
    };
  }
  if (Object.keys(local_2).length) {
    arg.tags = {
      ...local_2,
      ...arg.tags,
    };
  }
  if (Object.keys(local_3).length) {
    arg.user = {
      ...local_3,
      ...arg.user,
    };
  }
  if (Object.keys(local_4).length) {
    arg.contexts = {
      ...local_4,
      ...arg.contexts,
    };
  }
  if (local_5) {
    arg.level = local_5;
  }
  if (local_6 && arg.type !== "transaction") {
    arg.transaction = local_6;
  }
}
function fn_3b7d27b0(arg, arg_2) {
  const local = [...(arg.breadcrumbs || []), ...arg_2];
  arg.breadcrumbs = local.length ? local : undefined;
}
function fn_745ebe2d(arg, arg_2) {
  arg.sdkProcessingMetadata = {
    ...arg.sdkProcessingMetadata,
    ...arg_2,
  };
}
function fn_124e8768(arg, arg_2) {
  arg.contexts = {
    trace: fn_1badae7f(arg_2),
    ...arg.contexts,
  };
  arg.sdkProcessingMetadata = {
    dynamicSamplingContext: fn_5dbacd9c(arg_2),
    ...arg.sdkProcessingMetadata,
  };
  const local = local_f090a36f_3(arg_2);
  const local_2 = fn_0aacd2da(local).description;
  if (local_2 && !arg.transaction && arg.type === "transaction") {
    arg.transaction = local_2;
  }
}
function fn_110f4deb(arg, arg_2) {
  arg.fingerprint = arg.fingerprint
    ? Array.isArray(arg.fingerprint)
      ? arg.fingerprint
      : [arg.fingerprint]
    : [];
  if (arg_2) {
    arg.fingerprint = arg.fingerprint.concat(arg_2);
  }
  arg.fingerprint.length || delete arg.fingerprint;
}
function fn_95df3475(arg) {
  if (!arg) {
    return {};
  }
  const local = arg.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
  );
  if (!local) {
    return {};
  }
  const local_2 = local[6] || "";
  const local_3 = local[8] || "";
  return {
    host: local[4],
    path: local[5],
    protocol: local[2],
    search: local_2,
    hash: local_3,
    relative: local[5] + local_2 + local_3,
  };
}
function fn_52a7926e(arg, arg_2 = true) {
  if (arg.startsWith("data:")) {
    const local = arg.match(/^data:([^;,]+)/);
    const local_2 = local ? local[1] : "text/plain";
    const local_3 = arg.includes(";base64,");
    const local_4 = arg.indexOf(",");
    let local_5 = "";
    if (arg_2 && local_4 !== -1) {
      const local = arg.slice(local_4 + 1);
      local_5 =
        local.length > 10 ? `${local.slice(0, 10)}... [truncated]` : local;
    }
    return `data:${local_2}${local_3 ? ",base64" : ""}${local_5 ? `,${local_5}` : ""}`;
  }
  return arg;
}
function fn_5144a7de(arg, arg_2) {
  const local = arg.attributes ?? (arg.attributes = {});
  Object.entries(arg_2).forEach(([arg, arg_2]) => {
    if (arg_2 != null && !(arg in local)) {
      local[arg] = arg_2;
    }
  });
}
const local_f06debfc_9 = 0;
const local_f06debfc_10 = 1;
const local_f06debfc_11 = 2;
function fn_ec2ed68c(arg) {
  return new clazz_bb0a3dcc((arg) => {
    arg(arg);
  });
}
function fn_1fd7697a(arg) {
  return new clazz_bb0a3dcc((arg, arg_2) => {
    arg_2(arg);
  });
}
class clazz_bb0a3dcc {
  constructor(arg) {
    this._state = local_f06debfc_9;
    this._handlers = [];
    this._runExecutor(arg);
  }
  then(arg, arg_2) {
    return new clazz_bb0a3dcc((arg, arg_2) => {
      this._handlers.push([
        false,
        (arg) => {
          if (!arg) {
            arg(arg);
          } else {
            try {
              arg(arg(arg));
            } catch (error) {
              arg_2(error);
            }
          }
        },
        (arg) => {
          if (!arg_2) {
            arg_2(arg);
          } else {
            try {
              arg(arg_2(arg));
            } catch (error) {
              arg_2(error);
            }
          }
        },
      ]);
      this._executeHandlers();
    });
  }
  catch(arg) {
    return this.then((arg) => arg, arg);
  }
  finally(arg) {
    return new clazz_bb0a3dcc((arg, arg_2) => {
      let local;
      let local_2;
      return this.then(
        (arg) => {
          local_2 = false;
          local = arg;
          if (arg) {
            arg();
          }
        },
        (arg) => {
          local_2 = true;
          local = arg;
          if (arg) {
            arg();
          }
        },
      ).then(() => {
        if (local_2) {
          arg_2(local);
          return;
        }
        arg(local);
      });
    });
  }
  _executeHandlers() {
    if (this._state === local_f06debfc_9) {
      return;
    }
    const local = this._handlers.slice();
    this._handlers = [];
    local.forEach((arg) => {
      if (!arg[0]) {
        if (this._state === local_f06debfc_10) {
          arg[1](this._value);
        }
        if (this._state === local_f06debfc_11) {
          arg[2](this._value);
        }
        arg[0] = true;
      }
    });
  }
  _runExecutor(arg) {
    const local = (arg, arg_2) => {
      if (this._state === local_f06debfc_9) {
        if (fn_0dbd451a(arg_2)) {
          arg_2.then(local_2, local_3);
          return;
        }
        this._state = arg;
        this._value = arg_2;
        this._executeHandlers();
      }
    };
    const local_2 = (arg) => {
      local(local_f06debfc_10, arg);
    };
    const local_3 = (arg) => {
      local(local_f06debfc_11, arg);
    };
    try {
      arg(local_2, local_3);
    } catch (error) {
      local_3(error);
    }
  }
}
function fn_329a7e61(arg, arg_2, arg_3, arg_4 = 0) {
  try {
    const local = fn_e632fffc(arg_2, arg_3, arg, arg_4);
    if (fn_0dbd451a(local)) {
      return local;
    }
    return fn_ec2ed68c(local);
  } catch (error) {
    return fn_1fd7697a(error);
  }
}
function fn_e632fffc(arg, arg_2, arg_3, arg_4) {
  const local = arg_3[arg_4];
  if (!arg || !local) {
    return arg;
  }
  const local_2 = local(
    {
      ...arg,
    },
    arg_2,
  );
  if (local_23bb5d69 && local_2 === null) {
    local_5a6ba1bf.log(`Event processor "${local.id || "?"}" dropped event`);
  }
  if (fn_0dbd451a(local_2)) {
    return local_2.then((arg) => fn_e632fffc(arg, arg_2, arg_3, arg_4 + 1));
  }
  return fn_e632fffc(local_2, arg_2, arg_3, arg_4 + 1);
}
let local_657db3b7_16;
let local_657db3b7_17;
let local_657db3b7_18;
let local_657db3b7_19;
function fn_79c28e66(arg) {
  const local = local_f090a36f._sentryDebugIds;
  const local_2 = local_f090a36f._debugIds;
  if (!local && !local_2) {
    return {};
  }
  const local_3 = local ? Object.keys(local) : [];
  const local_4 = local_2 ? Object.keys(local_2) : [];
  if (
    local_657db3b7_19 &&
    local_3.length === local_657db3b7_17 &&
    local_4.length === local_657db3b7_18
  ) {
    return local_657db3b7_19;
  }
  local_657db3b7_17 = local_3.length;
  local_657db3b7_18 = local_4.length;
  local_657db3b7_19 = {};
  if (!local_657db3b7_16) {
    local_657db3b7_16 = {};
  }
  const local_5 = (arg, arg_2) => {
    for (const local of arg) {
      const local = arg_2[local];
      const local_2 = local_657db3b7_16?.[local];
      if (local_2 && local_657db3b7_19 && local) {
        local_657db3b7_19[local_2[0]] = local;
        if (local_657db3b7_16) {
          local_657db3b7_16[local] = [local_2[0], local];
        }
      } else if (local) {
        const local = arg(local);
        for (let local = local.length - 1; local >= 0; local--) {
          const local = local[local]?.filename;
          if (local && local_657db3b7_19 && local_657db3b7_16) {
            local_657db3b7_19[local] = local;
            local_657db3b7_16[local] = [local, local];
            break;
          }
        }
      }
    }
  };
  if (local) {
    local_5(local_3, local);
  }
  if (local_2) {
    local_5(local_4, local_2);
  }
  return local_657db3b7_19;
}
function fn_e31cb7ef(arg, arg_2, arg_3, arg_4, arg_5, arg_6) {
  const { normalizeDepth: local = 3, normalizeMaxBreadth: local_2 = 1000 } =
    arg;
  const local_3 = {
    ...arg_2,
    event_id: arg_2.event_id || arg_3.event_id || fn_8e541891(),
    timestamp: arg_2.timestamp || fn_f900ccad(),
  };
  const local_4 = arg_3.integrations || arg.integrations.map((arg) => arg.name);
  fn_16be4959(local_3, arg);
  fn_65a14805(local_3, local_4);
  if (arg_5) {
    arg_5.emit("applyFrameMetadata", arg_2);
  }
  if (arg_2.type === undefined) {
    fn_3f49d190(local_3, arg.stackParser);
  }
  const local_5 = fn_c30adcf3(arg_4, arg_3.captureContext);
  if (arg_3.mechanism) {
    fn_9efed769(local_3, arg_3.mechanism);
  }
  const local_6 = arg_5 ? arg_5.getEventProcessors() : [];
  const local_7 = fn_709d17d4(arg_6, local_5);
  const local_8 = [...(arg_3.attachments || []), ...local_7.attachments];
  if (local_8.length) {
    arg_3.attachments = local_8;
  }
  fn_e3f121e3(local_3, local_7);
  const local_9 = [...local_6, ...local_7.eventProcessors];
  return (
    arg_3.data && arg_3.data.__sentry__ === true
      ? fn_ec2ed68c(local_3)
      : fn_329a7e61(local_9, local_3, arg_3)
  ).then((arg) => {
    if (arg) {
      fn_57982663(arg);
    }
    if (typeof local === "number" && local > 0) {
      return fn_67dcdd1e(arg, local, local_2);
    }
    return arg;
  });
}
function fn_16be4959(arg, arg_2) {
  const {
    environment: local,
    release: local_2,
    dist: local_3,
    maxValueLength: local_4,
  } = arg_2;
  arg.environment = arg.environment || local || local_7597049d;
  if (!arg.release && local_2) {
    arg.release = local_2;
  }
  if (!arg.dist && local_3) {
    arg.dist = local_3;
  }
  const local_5 = arg.request;
  if (local_5?.url && local_4) {
    local_5.url = fn_910ea535(local_5.url, local_4);
  }
  local_4 &&
    arg.exception?.values?.forEach((arg) => {
      if (arg.value) {
        arg.value = fn_910ea535(arg.value, local_4);
      }
    });
}
function fn_3f49d190(arg, arg_2) {
  const local = fn_79c28e66(arg_2);
  arg.exception?.values?.forEach((arg) => {
    arg.stacktrace?.frames?.forEach((arg) => {
      if (arg.filename) {
        arg.debug_id = local[arg.filename];
      }
    });
  });
}
function fn_57982663(arg) {
  const local = {};
  arg.exception?.values?.forEach((arg) => {
    arg.stacktrace?.frames?.forEach((arg) => {
      arg.debug_id &&
        (arg.abs_path
          ? (local[arg.abs_path] = arg.debug_id)
          : arg.filename && (local[arg.filename] = arg.debug_id),
        delete arg.debug_id);
    });
  });
  if (Object.keys(local).length === 0) {
    return;
  }
  arg.debug_meta = arg.debug_meta || {};
  arg.debug_meta.images = arg.debug_meta.images || [];
  const local_2 = arg.debug_meta.images;
  Object.entries(local).forEach(([arg, arg_2]) => {
    local_2.push({
      type: "sourcemap",
      code_file: arg,
      debug_id: arg_2,
    });
  });
}
function fn_65a14805(arg, arg_2) {
  if (arg_2.length > 0) {
    arg.sdk = arg.sdk || {};
    arg.sdk.integrations = [...(arg.sdk.integrations || []), ...arg_2];
  }
}
function fn_67dcdd1e(arg, arg_2, arg_3) {
  if (!arg) {
    return null;
  }
  const local = {
    ...arg,
    ...(arg.breadcrumbs && {
      breadcrumbs: arg.breadcrumbs.map((arg) => ({
        ...arg,
        ...(arg.data && {
          data: fn_49b28d31(arg.data, arg_2, arg_3),
        }),
      })),
    }),
    ...(arg.user && {
      user: fn_49b28d31(arg.user, arg_2, arg_3),
    }),
    ...(arg.contexts && {
      contexts: fn_49b28d31(arg.contexts, arg_2, arg_3),
    }),
    ...(arg.extra && {
      extra: fn_49b28d31(arg.extra, arg_2, arg_3),
    }),
  };
  if (arg.contexts?.trace && local.contexts) {
    local.contexts.trace = arg.contexts.trace;
    if (arg.contexts.trace.data) {
      local.contexts.trace.data = fn_49b28d31(
        arg.contexts.trace.data,
        arg_2,
        arg_3,
      );
    }
  }
  if (arg.spans) {
    local.spans = arg.spans.map((arg) => ({
      ...arg,
      ...(arg.data && {
        data: fn_49b28d31(arg.data, arg_2, arg_3),
      }),
    }));
  }
  if (arg.contexts?.flags && local.contexts) {
    local.contexts.flags = fn_49b28d31(arg.contexts.flags, 3, arg_3);
  }
  return local;
}
function fn_c30adcf3(arg, arg_2) {
  if (!arg_2) {
    return arg;
  }
  const local = arg ? arg.clone() : new clazz_b6ac9163();
  local.update(arg_2);
  return local;
}
function fn_a2fae08b(arg) {
  if (arg) {
    if (fn_48b4cf9b(arg)) {
      return {
        captureContext: arg,
      };
    }
    if (fn_3ea0d91c(arg)) {
      return {
        captureContext: arg,
      };
    }
    return arg;
  }
}
function fn_48b4cf9b(arg) {
  return arg instanceof clazz_b6ac9163 || typeof arg === "function";
}
const local_a0348a55 = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext",
];
function fn_3ea0d91c(arg) {
  return Object.keys(arg).some((arg) => local_a0348a55.includes(arg));
}
function fn_0e42a633(arg, arg_2) {
  return fn_bff325b9().captureException(arg, fn_a2fae08b(arg_2));
}
function fn_2f9eb5a7(arg, arg_2) {
  return fn_bff325b9().captureEvent(arg, arg_2);
}
function fn_2e3776e9(arg, arg_2) {
  fn_bff325b9_2().setContext(arg, arg_2);
}
function fn_92f56a1f(arg) {
  fn_bff325b9_2().setUser(arg);
}
function fn_df50106e_2() {
  return fn_bff325b9_2().lastEventId();
}
function fn_03a10270(arg) {
  const local = fn_bff325b9_2();
  const { user: local_2 } = fn_709d17d4(local, fn_bff325b9());
  const { userAgent: local_3 } = local_f090a36f.navigator || {};
  const local_4 = fn_ec91e4f1({
    user: local_2,
    ...(local_3 && {
      userAgent: local_3,
    }),
    ...arg,
  });
  const local_5 = local.getSession();
  if (local_5?.status === "ok") {
    fn_f4593a38(local_5, {
      status: "exited",
    });
  }
  fn_9b7e79fa();
  local.setSession(local_4);
  return local_4;
}
function fn_9b7e79fa() {
  const local = fn_bff325b9_2();
  const local_2 = fn_bff325b9().getSession() || local.getSession();
  if (local_2) {
    fn_4c142178(local_2);
  }
  fn_c062c4ce();
  local.setSession();
}
function fn_c062c4ce() {
  const local = fn_bff325b9_2();
  const local_2 = fn_df50106e();
  const local_3 = local.getSession();
  if (local_3 && local_2) {
    local_2.captureSession(local_3);
  }
}
function fn_d346974a(arg = false) {
  if (arg) {
    fn_9b7e79fa();
    return;
  }
  fn_c062c4ce();
}
const local_aff16741 = "7";
function fn_aa58755e(arg) {
  const local = arg.protocol ? `${arg.protocol}:` : "";
  const local_2 = arg.port ? `:${arg.port}` : "";
  return `${local}//${arg.host}${local_2}${arg.path ? `/${arg.path}` : ""}/api/`;
}
function fn_1f081a75(arg) {
  return `${fn_aa58755e(arg)}${arg.projectId}/envelope/`;
}
function fn_9d49a2ce(arg, arg_2) {
  const local = {
    sentry_version: local_aff16741,
  };
  if (arg.publicKey) {
    local.sentry_key = arg.publicKey;
  }
  if (arg_2) {
    local.sentry_client = `${arg_2.name}/${arg_2.version}`;
  }
  return new URLSearchParams(local).toString();
}
function fn_d87264e0(arg, arg_2, arg_3) {
  return arg_2 || `${fn_1f081a75(arg)}?${fn_9d49a2ce(arg, arg_3)}`;
}
function fn_700c4b91(arg, arg_2) {
  const local = fn_2d12d30f(arg);
  if (!local) {
    return "";
  }
  const local_2 = `${fn_aa58755e(local)}embed/error-page/`;
  let local_3 = `dsn=${fn_c87543dd(local)}`;
  for (const local in arg_2) {
    if (local !== "dsn" && local !== "onClose") {
      if (local === "user") {
        const local = arg_2.user;
        if (!local) {
          continue;
        }
        if (local.name) {
          local_3 += `&name=${encodeURIComponent(local.name)}`;
        }
        if (local.email) {
          local_3 += `&email=${encodeURIComponent(local.email)}`;
        }
      } else {
        local_3 += `&${encodeURIComponent(local)}=${encodeURIComponent(arg_2[local])}`;
      }
    }
  }
  return `${local_2}?${local_3}`;
}
const local_0f018a95_2 = [];
function fn_150aac4f(arg) {
  const local = {};
  arg.forEach((arg) => {
    const { name: local } = arg;
    const local_2 = local[local];
    if (!(local_2 && !local_2.isDefaultInstance && arg.isDefaultInstance)) {
      local[local] = arg;
    }
  });
  return Object.values(local);
}
function fn_b770395e(arg) {
  const local = arg.defaultIntegrations || [];
  const local_2 = arg.integrations;
  local.forEach((arg) => {
    arg.isDefaultInstance = true;
  });
  let local_3;
  if (Array.isArray(local_2)) {
    local_3 = [...local, ...local_2];
  } else if (typeof local_2 === "function") {
    const local = local_2(local);
    local_3 = Array.isArray(local) ? local : [local];
  } else {
    local_3 = local;
  }
  return fn_150aac4f(local_3);
}
function fn_cb0c74c4(arg, arg_2) {
  const local = {};
  arg_2.forEach((arg) => {
    if (arg?.beforeSetup) {
      arg.beforeSetup(arg);
    }
  });
  arg_2.forEach((arg) => {
    if (arg) {
      fn_62f30600(arg, arg, local);
    }
  });
  return local;
}
function fn_028ba656(arg, arg_2) {
  for (const local of arg_2) {
    if (local?.afterAllSetup) {
      local.afterAllSetup(arg);
    }
  }
}
function fn_62f30600(arg, arg_2, arg_3) {
  if (arg_3[arg_2.name]) {
    if (local_23bb5d69) {
      local_5a6ba1bf.log(
        `Integration skipped because it was already installed: ${arg_2.name}`,
      );
    }
    return;
  }
  arg_3[arg_2.name] = arg_2;
  if (
    !local_0f018a95_2.includes(arg_2.name) &&
    typeof arg_2.setupOnce === "function"
  ) {
    arg_2.setupOnce();
    local_0f018a95_2.push(arg_2.name);
  }
  if (arg_2.setup && typeof arg_2.setup === "function") {
    arg_2.setup(arg);
  }
  if (typeof arg_2.preprocessEvent === "function") {
    const local = arg_2.preprocessEvent.bind(arg_2);
    arg.on("preprocessEvent", (arg, arg_2) => local(arg, arg_2, arg));
  }
  if (typeof arg_2.processEvent === "function") {
    const local = arg_2.processEvent.bind(arg_2);
    const local_2 = Object.assign((arg, arg_2) => local(arg, arg_2, arg), {
      id: arg_2.name,
    });
    arg.addEventProcessor(local_2);
  }
  ["processSpan", "processSegmentSpan"].forEach((arg) => {
    const local = arg_2[arg];
    if (typeof local === "function") {
      arg.on(arg, (arg) => local.call(arg_2, arg, arg));
    }
  });
  if (local_23bb5d69) {
    local_5a6ba1bf.log(`Integration installed: ${arg_2.name}`);
  }
}
function fn_29e64c1f() {
  return (
    typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" &&
    !!__SENTRY_BROWSER_BUNDLE__
  );
}
function fn_b502e70d() {
  return "npm";
}
function fn_c301911a() {
  return (
    !fn_29e64c1f() &&
    Object.prototype.toString.call(
      typeof process !== "undefined" ? process : 0,
    ) === "[object process]"
  );
}
function fn_30c44482() {
  return typeof window !== "undefined" && (!fn_c301911a() || fn_f889afbf());
}
function fn_f889afbf() {
  return local_f090a36f.process?.type === "renderer";
}
function fn_1ea8508a(arg, arg_2) {
  const local = arg_2 ? "auto" : "never";
  return [
    {
      type: "log",
      item_count: arg.length,
      content_type: "application/vnd.sentry.items.log+json",
    },
    {
      version: 2,
      ...(fn_30c44482() && {
        ingest_settings: {
          infer_ip: local,
          infer_user_agent: local,
        },
      }),
      items: arg,
    },
  ];
}
function fn_aa848eaa(arg, arg_2, arg_3, arg_4, arg_5) {
  const local = {};
  if (arg_2?.sdk) {
    local.sdk = {
      name: arg_2.sdk.name,
      version: arg_2.sdk.version,
    };
  }
  if (arg_3 && arg_4) {
    local.dsn = fn_c87543dd(arg_4);
  }
  return fn_d71bf2e7(local, [fn_1ea8508a(arg, arg_5)]);
}
function fn_8a39f6db(arg, arg_2) {
  const local = arg_2 ?? fn_77d7b663_2(arg) ?? [];
  if (local.length === 0) {
    return;
  }
  const local_2 = arg.getOptions();
  const local_3 = fn_aa848eaa(
    local,
    local_2._metadata,
    local_2.tunnel,
    arg.getDsn(),
    local_2.sendDefaultPii,
  );
  fn_bcf7d701().set(arg, []);
  arg.emit("flushLogs");
  arg.sendEnvelope(local_3);
}
function fn_77d7b663_2(arg) {
  return fn_bcf7d701().get(arg);
}
function fn_bcf7d701() {
  return fn_9cfc19fb("clientToLogBufferMap", () => new WeakMap());
}
function fn_306d92ce(arg, arg_2) {
  const local = arg_2 ? "auto" : "never";
  return [
    {
      type: "trace_metric",
      item_count: arg.length,
      content_type: "application/vnd.sentry.items.trace-metric+json",
    },
    {
      version: 2,
      ...(fn_30c44482() && {
        ingest_settings: {
          infer_ip: local,
          infer_user_agent: local,
        },
      }),
      items: arg,
    },
  ];
}
function fn_aa848eaa_2(arg, arg_2, arg_3, arg_4, arg_5) {
  const local = {};
  if (arg_2?.sdk) {
    local.sdk = {
      name: arg_2.sdk.name,
      version: arg_2.sdk.version,
    };
  }
  if (arg_3 && arg_4) {
    local.dsn = fn_c87543dd(arg_4);
  }
  return fn_d71bf2e7(local, [fn_306d92ce(arg, arg_5)]);
}
function fn_935d65bb(arg, arg_2) {
  const local = arg_2 ?? fn_77d7b663_3(arg) ?? [];
  if (local.length === 0) {
    return;
  }
  const local_2 = arg.getOptions();
  const local_3 = fn_aa848eaa_2(
    local,
    local_2._metadata,
    local_2.tunnel,
    arg.getDsn(),
    local_2.sendDefaultPii,
  );
  fn_1a15942c().set(arg, []);
  arg.emit("flushMetrics");
  arg.sendEnvelope(local_3);
}
function fn_77d7b663_3(arg) {
  return fn_1a15942c().get(arg);
}
function fn_1a15942c() {
  return fn_9cfc19fb("clientToMetricBufferMap", () => new WeakMap());
}
function fn_fadde79a(arg) {
  if (typeof arg === "object" && typeof arg.unref === "function") {
    arg.unref();
  }
  return arg;
}
const local_d1fb3cf7 = Symbol.for("SentryBufferFullError");
function fn_440daecb(arg = 100) {
  const local = new Set();
  function fn() {
    return local.size < arg;
  }
  function fn_2(arg) {
    local.delete(arg);
  }
  function fn_3(arg) {
    if (!fn()) {
      return fn_1fd7697a(local_d1fb3cf7);
    }
    const local = arg();
    local.add(local);
    local.then(
      () => fn_2(local),
      () => fn_2(local),
    );
    return local;
  }
  function fn_4(arg) {
    if (!local.size) {
      return fn_ec2ed68c(true);
    }
    const local = Promise.allSettled(Array.from(local)).then(() => true);
    if (!arg) {
      return local;
    }
    const local_2 = [
      local,
      new Promise((arg) => fn_fadde79a(setTimeout(() => arg(false), arg))),
    ];
    return Promise.race(local_2);
  }
  return {
    get $() {
      return Array.from(local);
    },
    add: fn_3,
    drain: fn_4,
  };
}
const local_aad0de78 = 60 * 1000;
function fn_295b11e9(arg, arg_2 = fn_ce103458_2()) {
  const local = parseInt(`${arg}`, 10);
  if (!isNaN(local)) {
    return local * 1000;
  }
  const local_2 = Date.parse(`${arg}`);
  if (isNaN(local_2)) {
    return local_aad0de78;
  }
  return local_2 - arg_2;
}
function fn_a576e6fa(arg, arg_2) {
  return arg[arg_2] || arg.all || 0;
}
function fn_c93800c9(arg, arg_2, arg_3 = fn_ce103458_2()) {
  return fn_a576e6fa(arg, arg_2) > arg_3;
}
function fn_4d7456cc(
  arg,
  { statusCode: arg_2, headers: arg_3 },
  arg_4 = fn_ce103458_2(),
) {
  const local = {
    ...arg,
  };
  const local_2 = arg_3?.["x-sentry-rate-limits"];
  const local_3 = arg_3?.["retry-after"];
  if (local_2) {
    for (const local of local_2.trim().split(",")) {
      const [local, local_2, , , local_3] = local.split(":", 5);
      const local_4 = parseInt(local, 10);
      const local_5 = (isNaN(local_4) ? 60 : local_4) * 1000;
      if (!local_2) {
        local.all = arg_4 + local_5;
      } else {
        for (const local of local_2.split(";")) {
          if (local === "metric_bucket") {
            if (!local_3 || local_3.split(";").includes("custom")) {
              local[local] = arg_4 + local_5;
            }
          } else {
            local[local] = arg_4 + local_5;
          }
        }
      }
    }
  } else {
    if (local_3) {
      local.all = arg_4 + fn_295b11e9(local_3, arg_4);
    } else if (arg_2 === 429) {
      local.all = arg_4 + 60 * 1000;
    }
  }
  return local;
}
const local_f06debfc_12 = 64;
function fn_7424b233(
  arg,
  arg_2,
  arg_3 = fn_440daecb(arg.bufferSize || local_f06debfc_12),
) {
  let local = {};
  const local_2 = (arg) => arg_3.drain(arg);
  function fn(arg) {
    const local = [];
    fn_5ad2c136(arg, (arg, arg_2) => {
      const local = fn_206e6841(arg_2);
      if (fn_c93800c9(local, local)) {
        arg.recordDroppedEvent("ratelimit_backoff", local);
      } else {
        local.push(arg);
      }
    });
    if (local.length === 0) {
      return Promise.resolve({});
    }
    const local_2 = fn_d71bf2e7(arg[0], local);
    const local_3 = (arg) => {
      if (fn_060a4533(local_2, ["client_report"])) {
        if (local_23bb5d69) {
          local_5a6ba1bf.warn(
            `Dropping client report. Will not send outcomes (reason: ${arg}).`,
          );
        }
        return;
      }
      fn_5ad2c136(local_2, (arg, arg_2) => {
        arg.recordDroppedEvent(arg, fn_206e6841(arg_2));
      });
    };
    const local_4 = () =>
      arg_2({
        body: fn_109b90e9(local_2),
      }).then(
        (arg) => {
          if (arg.statusCode === 413) {
            return (
              local_23bb5d69 &&
                local_5a6ba1bf.error(
                  "Sentry responded with status code 413. Envelope was discarded due to exceeding size limits.",
                ),
              local_3("send_error"),
              arg
            );
          }
          return (
            local_23bb5d69 &&
              arg.statusCode !== undefined &&
              (arg.statusCode < 200 || arg.statusCode >= 300) &&
              local_5a6ba1bf.warn(
                `Sentry responded with status code ${arg.statusCode} to sent event.`,
              ),
            (local = fn_4d7456cc(local, arg)),
            arg
          );
        },
        (arg) => {
          local_3("network_error");
          if (local_23bb5d69) {
            local_5a6ba1bf.error(
              "Encountered error running transport request:",
              arg,
            );
          }
          throw arg;
        },
      );
    return arg_3.add(local_4).then(
      (arg) => arg,
      (arg) => {
        if (arg === local_d1fb3cf7) {
          if (local_23bb5d69) {
            local_5a6ba1bf.error(
              "Skipped sending event because buffer is full.",
            );
          }
          local_3("queue_overflow");
          return Promise.resolve({});
        }
        throw arg;
      },
    );
  }
  return {
    send: fn,
    flush: local_2,
  };
}
function fn_173899f9(arg, arg_2, arg_3) {
  const local = [
    {
      type: "client_report",
    },
    {
      timestamp: fn_f900ccad(),
      discarded_events: arg,
    },
  ];
  return fn_d71bf2e7(
    arg_2
      ? {
          dsn: arg_2,
        }
      : {},
    [local],
  );
}
function fn_b3d5859a(arg) {
  const local = [];
  if (arg.message) {
    local.push(arg.message);
  }
  try {
    const local = arg.exception.values[arg.exception.values.length - 1];
    if (local?.value) {
      local.push(local.value);
      if (local.type) {
        local.push(`${local.type}: ${local.value}`);
      }
    }
  } catch {}
  return local;
}
function fn_d7c11708(arg) {
  const {
    trace_id: local,
    parent_span_id: local_2,
    span_id: local_3,
    status: local_4,
    origin: local_5,
    data: local_6,
    op: local_7,
  } = arg.contexts?.trace ?? {};
  return {
    data: local_6 ?? {},
    description: arg.transaction,
    op: local_7,
    parent_span_id: local_2,
    span_id: local_3 ?? "",
    start_timestamp: arg.start_timestamp ?? 0,
    status: local_4,
    timestamp: arg.timestamp,
    trace_id: local ?? "",
    origin: local_5,
    profile_id: local_6?.[local_9ff4c9b4],
    exclusive_time: local_6?.[local_a9ec10af],
    measurements: arg.measurements,
    is_segment: true,
  };
}
function fn_cf13ed60(arg) {
  return {
    type: "transaction",
    timestamp: arg.timestamp,
    start_timestamp: arg.start_timestamp,
    transaction: arg.description,
    contexts: {
      trace: {
        trace_id: arg.trace_id,
        span_id: arg.span_id,
        parent_span_id: arg.parent_span_id,
        op: arg.op,
        status: arg.status,
        origin: arg.origin,
        data: {
          ...arg.data,
          ...(arg.profile_id && {
            [local_9ff4c9b4]: arg.profile_id,
          }),
          ...(arg.exclusive_time && {
            [local_a9ec10af]: arg.exclusive_time,
          }),
        },
      },
    },
    measurements: arg.measurements,
  };
}
const local_6e7b2a55 =
  "Not capturing exception because it's already been captured.";
const local_fc9b5ca8 =
  "Discarded session because of missing or non-string release";
const local_d8826da0 = Symbol.for("SentryInternalError");
const local_16cacc41 = Symbol.for("SentryDoNotSendEventError");
const local_f06debfc_13 = 5000;
function fn_c832dd52(arg) {
  return {
    message: arg,
    [local_d8826da0]: true,
  };
}
function fn_c832dd52_2(arg) {
  return {
    message: arg,
    [local_16cacc41]: true,
  };
}
function fn_54d16b6a(arg) {
  return !!arg && typeof arg === "object" && local_d8826da0 in arg;
}
function fn_54d16b6a_2(arg) {
  return !!arg && typeof arg === "object" && local_16cacc41 in arg;
}
function fn_4e7b43e7(arg, arg_2, arg_3, arg_4, arg_5) {
  let local = 0;
  let local_2;
  let local_3 = false;
  arg.on(arg_3, () => {
    local = 0;
    clearTimeout(local_2);
    local_3 = false;
  });
  arg.on(arg_2, (arg) => {
    local += arg_4(arg);
    if (local >= 800000) {
      arg_5(arg);
    } else if (!local_3) {
      local_3 = true;
      local_2 = fn_fadde79a(
        setTimeout(() => {
          arg_5(arg);
        }, local_f06debfc_13),
      );
    }
  });
  arg.on("flush", () => {
    arg_5(arg);
  });
}
class clazz_8953f139 {
  constructor(arg) {
    this._options = arg;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    this._promiseBuffer = fn_440daecb(
      arg.transportOptions?.bufferSize ?? local_f06debfc_12,
    );
    if (arg.dsn) {
      this._dsn = fn_2d12d30f(arg.dsn);
    } else if (local_23bb5d69) {
      local_5a6ba1bf.warn("No DSN provided, client will not send events.");
    }
    if (this._dsn) {
      const local = fn_d87264e0(
        this._dsn,
        arg.tunnel,
        arg._metadata ? arg._metadata.sdk : undefined,
      );
      this._transport = arg.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...arg.transportOptions,
        url: local,
      });
    }
    this._options.enableLogs =
      this._options.enableLogs ?? this._options._experiments?.enableLogs;
    if (this._options.enableLogs) {
      fn_4e7b43e7(
        this,
        "afterCaptureLog",
        "flushLogs",
        fn_41db159b,
        fn_8a39f6db,
      );
    }
    if (
      this._options.enableMetrics ??
      this._options._experiments?.enableMetrics ??
      true
    ) {
      fn_4e7b43e7(
        this,
        "afterCaptureMetric",
        "flushMetrics",
        fn_eef7c3ae,
        fn_935d65bb,
      );
    }
  }
  captureException(arg, arg_2, arg_3) {
    const local = fn_8e541891();
    if (fn_cf16777a(arg)) {
      if (local_23bb5d69) {
        local_5a6ba1bf.log(local_6e7b2a55);
      }
      return local;
    }
    const local_2 = {
      event_id: local,
      ...arg_2,
    };
    this._process(
      () =>
        this.eventFromException(arg, local_2)
          .then((arg) => this._captureEvent(arg, local_2, arg_3))
          .then((arg) => arg),
      "error",
    );
    return local_2.event_id;
  }
  captureMessage(arg, arg_2, arg_3, arg_4) {
    const local = {
      event_id: fn_8e541891(),
      ...arg_3,
    };
    const local_2 = fn_b23d0128(arg) ? arg : String(arg);
    const local_3 = fn_8a91c46c(arg);
    const local_4 = local_3
      ? this.eventFromMessage(local_2, arg_2, local)
      : this.eventFromException(arg, local);
    this._process(
      () => local_4.then((arg) => this._captureEvent(arg, local, arg_4)),
      local_3 ? "unknown" : "error",
    );
    return local.event_id;
  }
  captureEvent(arg, arg_2, arg_3) {
    const local = fn_8e541891();
    if (arg_2?.originalException && fn_cf16777a(arg_2.originalException)) {
      if (local_23bb5d69) {
        local_5a6ba1bf.log(local_6e7b2a55);
      }
      return local;
    }
    const local_2 = {
      event_id: local,
      ...arg_2,
    };
    const local_3 = arg.sdkProcessingMetadata || {};
    const local_4 = local_3.capturedSpanScope;
    const local_5 = local_3.capturedSpanIsolationScope;
    const local_6 = fn_3f17fbc3(arg.type);
    this._process(
      () => this._captureEvent(arg, local_2, local_4 || arg_3, local_5),
      local_6,
    );
    return local_2.event_id;
  }
  captureSession(arg) {
    this.sendSession(arg);
    fn_f4593a38(arg, {
      init: false,
    });
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  async flush(arg) {
    const local = this._transport;
    this.emit("flush");
    if (!local) {
      return true;
    }
    const local_2 = await this._isClientDoneProcessing(arg);
    const local_3 = await local.flush(arg);
    return local_2 && local_3;
  }
  async close(arg) {
    fn_8a39f6db(this);
    const local = await this.flush(arg);
    this.getOptions().enabled = false;
    this.emit("close");
    return local;
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(arg) {
    this._eventProcessors.push(arg);
  }
  init() {
    if (
      this._isEnabled() ||
      this._options.integrations.some(({ name: arg }) =>
        arg.startsWith("Spotlight"),
      )
    ) {
      this._setupIntegrations();
    }
  }
  getIntegrationByName(arg) {
    return this._integrations[arg];
  }
  addIntegration(arg) {
    const local = this._integrations[arg.name];
    if (!local && arg.beforeSetup) {
      arg.beforeSetup(this);
    }
    fn_62f30600(this, arg, this._integrations);
    if (!local) {
      fn_028ba656(this, [arg]);
    }
  }
  sendEvent(arg, arg_2 = {}) {
    this.emit("beforeSendEvent", arg, arg_2);
    let local = fn_4f0242e8(
      arg,
      this._dsn,
      this._options._metadata,
      this._options.tunnel,
    );
    for (const local of arg_2.attachments || []) {
      local = fn_f144f74a(local, fn_5823ef71(local));
    }
    this.sendEnvelope(local).then((arg) =>
      this.emit("afterSendEvent", arg, arg),
    );
  }
  sendSession(arg) {
    const { release: local, environment: local_2 = local_7597049d } =
      this._options;
    if ("aggregates" in arg) {
      const local = arg.attrs || {};
      if (!local.release && !local) {
        if (local_23bb5d69) {
          local_5a6ba1bf.warn(local_fc9b5ca8);
        }
        return;
      }
      local.release = local.release || local;
      local.environment = local.environment || local_2;
      arg.attrs = local;
    } else {
      if (!arg.release && !local) {
        if (local_23bb5d69) {
          local_5a6ba1bf.warn(local_fc9b5ca8);
        }
        return;
      }
      arg.release = arg.release || local;
      arg.environment = arg.environment || local_2;
    }
    this.emit("beforeSendSession", arg);
    const local_3 = fn_4e9eb070(
      arg,
      this._dsn,
      this._options._metadata,
      this._options.tunnel,
    );
    this.sendEnvelope(local_3);
  }
  recordDroppedEvent(arg, arg_2, arg_3 = 1) {
    if (this._options.sendClientReports) {
      const local = `${arg}:${arg_2}`;
      if (local_23bb5d69) {
        local_5a6ba1bf.log(
          `Recording outcome: "${local}"${arg_3 > 1 ? ` (${arg_3} times)` : ""}`,
        );
      }
      this._outcomes[local] = (this._outcomes[local] || 0) + arg_3;
    }
  }
  on(arg, arg_2) {
    const local = (this._hooks[arg] = this._hooks[arg] || new Set());
    const local_2 = (...arg) => arg_2(...arg);
    local.add(local_2);
    return () => {
      local.delete(local_2);
    };
  }
  emit(arg, ...arg_2) {
    const local = this._hooks[arg];
    if (local) {
      local.forEach((arg) => arg(...arg_2));
    }
  }
  async sendEnvelope(arg) {
    this.emit("beforeEnvelope", arg);
    if (this._isEnabled() && this._transport) {
      try {
        return await this._transport.send(arg);
      } catch (error) {
        if (local_23bb5d69) {
          local_5a6ba1bf.error("Error while sending envelope:", error);
        }
        return {};
      }
    }
    if (local_23bb5d69) {
      local_5a6ba1bf.error("Transport disabled");
    }
    return {};
  }
  registerCleanup(arg) {}
  dispose() {}
  _setupIntegrations() {
    const { integrations: local } = this._options;
    this._integrations = fn_cb0c74c4(this, local);
    fn_028ba656(this, local);
  }
  _updateSessionFromEvent(arg, arg_2) {
    let local = arg_2.level === "fatal";
    let local_2 = false;
    const local_3 = arg_2.exception?.values;
    if (local_3) {
      local_2 = true;
      local = false;
      for (const local of local_3) {
        if (local.mechanism?.handled === false) {
          local = true;
          break;
        }
      }
    }
    const local_4 = arg.status === "ok";
    if ((local_4 && arg.errors === 0) || (local_4 && local)) {
      fn_f4593a38(arg, {
        ...(local && {
          status: "crashed",
        }),
        errors: arg.errors || Number(local_2 || local),
      });
      this.captureSession(arg);
    }
  }
  async _isClientDoneProcessing(arg) {
    let local = 0;
    while (!arg || local < arg) {
      await new Promise((arg) => setTimeout(arg, 1));
      if (!this._numProcessing) {
        return true;
      }
      local++;
    }
    return false;
  }
  _isEnabled() {
    return this.getOptions().enabled !== false && this._transport !== undefined;
  }
  _prepareEvent(arg, arg_2, arg_3, arg_4) {
    const local = this.getOptions();
    const local_2 = Object.keys(this._integrations);
    if (!arg_2.integrations && local_2?.length) {
      arg_2.integrations = local_2;
    }
    this.emit("preprocessEvent", arg, arg_2);
    if (!arg.type) {
      arg_4.setLastEventId(arg.event_id || arg_2.event_id);
    }
    return fn_e31cb7ef(local, arg, arg_2, arg_3, this, arg_4).then((arg) => {
      if (arg === null) {
        return arg;
      }
      this.emit("postprocessEvent", arg, arg_2);
      arg.contexts = {
        trace: {
          ...arg.contexts?.trace,
          ...fn_1ae32594(arg_3),
        },
        ...arg.contexts,
      };
      const local = fn_671c62a8(this, arg_3);
      arg.sdkProcessingMetadata = {
        dynamicSamplingContext: local,
        ...arg.sdkProcessingMetadata,
      };
      return arg;
    });
  }
  _captureEvent(
    arg,
    arg_2 = {},
    arg_3 = fn_bff325b9(),
    arg_4 = fn_bff325b9_2(),
  ) {
    if (local_23bb5d69 && fn_726f04b2(arg)) {
      local_5a6ba1bf.log(
        `Captured error event \`${fn_b3d5859a(arg)[0] || "<unknown>"}\``,
      );
    }
    return this._processEvent(arg, arg_2, arg_3, arg_4).then(
      (arg) => arg.event_id,
      (arg) => {
        local_23bb5d69 &&
          (fn_54d16b6a_2(arg)
            ? local_5a6ba1bf.log(arg.message)
            : fn_54d16b6a(arg)
              ? local_5a6ba1bf.warn(arg.message)
              : local_5a6ba1bf.warn(arg));
      },
    );
  }
  _processEvent(arg, arg_2, arg_3, arg_4) {
    const local = this.getOptions();
    const { sampleRate: local_2 } = local;
    const local_3 = fn_50b2193c(arg);
    const local_4 = fn_726f04b2(arg);
    const local_5 = `before send for type \`${arg.type || "error"}\``;
    const local_6 =
      typeof local_2 === "undefined" ? undefined : fn_931b18fa(local_2);
    if (local_4 && typeof local_6 === "number" && fn_ce103458() > local_6) {
      this.recordDroppedEvent("sample_rate", "error");
      return fn_1fd7697a(
        fn_c832dd52_2(
          `Discarding event because it's not included in the random sample (sampling rate = ${local_2})`,
        ),
      );
    }
    const local_7 = fn_3f17fbc3(arg.type);
    return this._prepareEvent(arg, arg_2, arg_3, arg_4)
      .then((arg) => {
        if (arg === null) {
          this.recordDroppedEvent("event_processor", local_7);
          throw fn_c832dd52_2(
            "An event processor returned `null`, will not send event.",
          );
        }
        if (arg_2.data?.__sentry__ === true) {
          return arg;
        }
        const local = fn_75070cfd(this, local, arg, arg_2);
        return fn_1654dafa(local, local_5);
      })
      .then((arg) => {
        if (arg === null) {
          this.recordDroppedEvent("before_send", local_7);
          if (local_3) {
            const local = 1 + (arg.spans || []).length;
            this.recordDroppedEvent("before_send", "span", local);
          }
          throw fn_c832dd52_2(
            `${local_5} returned \`null\`, will not send event.`,
          );
        }
        const local = arg_3.getSession() || arg_4.getSession();
        if (local_4 && local) {
          this._updateSessionFromEvent(local, arg);
        }
        if (local_3) {
          const local =
            arg.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
          const local_2 = arg.spans ? arg.spans.length : 0;
          const local_3 = local - local_2;
          if (local_3 > 0) {
            this.recordDroppedEvent("before_send", "span", local_3);
          }
        }
        const local_2 = arg.transaction_info;
        if (local_3 && local_2 && arg.transaction !== arg.transaction) {
          const local = "custom";
          arg.transaction_info = {
            ...local_2,
            source: local,
          };
        }
        this.sendEvent(arg, arg_2);
        return arg;
      })
      .catch((arg) => {
        throw fn_54d16b6a_2(arg) || fn_54d16b6a(arg)
          ? arg
          : (this.captureException(arg, {
              mechanism: {
                handled: false,
                type: "internal",
              },
              data: {
                __sentry__: true,
              },
              originalException: arg,
            }),
            fn_c832dd52(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${arg}`));
      });
  }
  _process(arg, arg_2) {
    this._numProcessing++;
    this._promiseBuffer.add(arg).then(
      (arg) => {
        this._numProcessing--;
        return arg;
      },
      (arg) => {
        this._numProcessing--;
        if (arg === local_d1fb3cf7) {
          this.recordDroppedEvent("queue_overflow", arg_2);
        }
        return arg;
      },
    );
  }
  _clearOutcomes() {
    const local = this._outcomes;
    this._outcomes = {};
    return Object.entries(local).map(([arg, arg_2]) => {
      const [local, local_2] = arg.split(":");
      return {
        reason: local,
        category: local_2,
        quantity: arg_2,
      };
    });
  }
  _flushOutcomes() {
    if (local_23bb5d69) {
      local_5a6ba1bf.log("Flushing outcomes...");
    }
    const local = this._clearOutcomes();
    if (local.length === 0) {
      if (local_23bb5d69) {
        local_5a6ba1bf.log("No outcomes to send");
      }
      return;
    }
    if (!this._dsn) {
      if (local_23bb5d69) {
        local_5a6ba1bf.log("No dsn provided, will not send outcomes");
      }
      return;
    }
    if (local_23bb5d69) {
      local_5a6ba1bf.log("Sending outcomes:", local);
    }
    const local_2 = fn_173899f9(
      local,
      this._options.tunnel && fn_c87543dd(this._dsn),
    );
    this.sendEnvelope(local_2);
  }
}
function fn_3f17fbc3(arg) {
  if (arg === "replay_event") {
    return "replay";
  }
  return arg || "error";
}
function fn_1654dafa(arg, arg_2) {
  const local = `${arg_2} must return \`null\` or a valid event.`;
  if (fn_0dbd451a(arg)) {
    return arg.then(
      (arg) => {
        if (!fn_5ee37d10(arg) && arg !== null) {
          throw fn_c832dd52(local);
        }
        return arg;
      },
      (arg) => {
        throw fn_c832dd52(`${arg_2} rejected with ${arg}`);
      },
    );
  }
  if (!fn_5ee37d10(arg) && arg !== null) {
    throw fn_c832dd52(local);
  }
  return arg;
}
function fn_75070cfd(arg, arg_2, arg_3, arg_4) {
  const {
    beforeSend: local,
    beforeSendTransaction: local_2,
    ignoreSpans: local_3,
  } = arg_2;
  const local_4 = !fn_afd39aa0(arg_2.beforeSendSpan) && arg_2.beforeSendSpan;
  let local_5 = arg_3;
  if (fn_726f04b2(local_5) && local) {
    return local(local_5, arg_4);
  }
  if (fn_50b2193c(local_5)) {
    if (local_4 || local_3) {
      const local = fn_d7c11708(local_5);
      if (
        local_3?.length &&
        fn_6f7aff87(
          {
            description: local.description,
            op: local.op,
            attributes: local.data,
          },
          local_3,
        )
      ) {
        return null;
      }
      if (local_4) {
        const local = local_4(local);
        if (local) {
          local_5 = fn_152db074(arg_3, fn_cf13ed60(local));
        } else {
          fn_f2b31c5d();
        }
      }
      if (local_5.spans) {
        const local = [];
        const local_2 = local_5.spans;
        for (const local of local_2) {
          if (
            local_3?.length &&
            fn_6f7aff87(
              {
                description: local.description,
                op: local.op,
                attributes: local.data,
              },
              local_3,
            )
          ) {
            fn_a6871141(local_2, local);
            continue;
          }
          if (local_4) {
            const local = local_4(local);
            if (local) {
              local.push(local);
            } else {
              fn_f2b31c5d();
              local.push(local);
            }
          } else {
            local.push(local);
          }
        }
        const local_3 = local_5.spans.length - local.length;
        if (local_3) {
          arg.recordDroppedEvent("before_send", "span", local_3);
        }
        local_5.spans = local;
      }
    }
    if (local_2) {
      if (local_5.spans) {
        const local = local_5.spans.length;
        local_5.sdkProcessingMetadata = {
          ...arg_3.sdkProcessingMetadata,
          spanCountBeforeProcessing: local,
        };
      }
      return local_2(local_5, arg_4);
    }
  }
  return local_5;
}
function fn_726f04b2(arg) {
  return arg.type === undefined;
}
function fn_50b2193c(arg) {
  return arg.type === "transaction";
}
function fn_eef7c3ae(arg) {
  let local = 0;
  if (arg.name) {
    local += arg.name.length * 2;
  }
  local += 8;
  return local + fn_de97d0d9(arg.attributes);
}
function fn_41db159b(arg) {
  let local = 0;
  if (arg.message) {
    local += arg.message.length * 2;
  }
  return local + fn_de97d0d9(arg.attributes);
}
function fn_de97d0d9(arg) {
  if (!arg) {
    return 0;
  }
  let local = 0;
  Object.values(arg).forEach((arg) => {
    if (Array.isArray(arg)) {
      local += arg.length * fn_7f90f37c(arg[0]);
    } else if (fn_8a91c46c(arg)) {
      local += fn_7f90f37c(arg);
    } else {
      local += 100;
    }
  });
  return local;
}
function fn_7f90f37c(arg) {
  if (typeof arg === "string") {
    return arg.length * 2;
  }
  if (typeof arg === "number") {
    return 8;
  }
  if (typeof arg === "boolean") {
    return 4;
  }
  return 0;
}
function fn_f78a30f6(arg) {
  return (
    fn_7b60edb8(arg) &&
    "__sentry_fetch_url_host__" in arg &&
    typeof arg.__sentry_fetch_url_host__ === "string"
  );
}
function fn_dfc9998e(arg) {
  if (fn_f78a30f6(arg)) {
    return `${arg.message} (${arg.__sentry_fetch_url_host__})`;
  }
  return arg.message;
}
function fn_b973be8f(arg, arg_2) {
  arg_2.debug === true &&
    (local_23bb5d69
      ? local_5a6ba1bf.enable()
      : fn_a1a275d6(() => {
          console.warn(
            "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
          );
        }));
  fn_bff325b9().update(arg_2.initialScope);
  const local = new arg(arg_2);
  fn_92f56a1f_2(local);
  local.init();
  return local;
}
function fn_92f56a1f_2(arg) {
  fn_bff325b9().setClient(arg);
}
function fn_67dfb170(arg) {
  "aggregates" in arg
    ? arg.attrs?.ip_address === undefined &&
      (arg.attrs = {
        ...arg.attrs,
        ip_address: "{{auto}}",
      })
    : arg.ipAddress === undefined && (arg.ipAddress = "{{auto}}");
}
function fn_bb415fac(arg, arg_2, arg_3 = [arg_2], arg_4 = "npm") {
  const local = ((arg._metadata = arg._metadata || {}).sdk =
    arg._metadata.sdk || {});
  if (!local.name) {
    local.name = `sentry.javascript.${arg_2}`;
    local.packages = arg_3.map((arg) => ({
      name: `${arg_4}:@sentry/${arg}`,
      version: local_32bc66f7,
    }));
    local.version = local_32bc66f7;
  }
}
const local_f06debfc_14 = 100;
function fn_e0908e45(arg, arg_2) {
  const local = fn_df50106e();
  const local_2 = fn_bff325b9_2();
  if (!local) {
    return;
  }
  const {
    beforeBreadcrumb: local_3 = null,
    maxBreadcrumbs: local_4 = local_f06debfc_14,
  } = local.getOptions();
  if (local_4 <= 0) {
    return;
  }
  const local_5 = {
    timestamp: fn_f900ccad(),
    ...arg,
  };
  const local_6 = local_3
    ? fn_a1a275d6(() => local_3(local_5, arg_2))
    : local_5;
  if (local_6 !== null) {
    if (local.emit) {
      local.emit("beforeAddBreadcrumb", local_6, arg_2);
    }
    local_2.addBreadcrumb(local_6, local_4);
  }
}
let local_657db3b7_20;
const local_d041c6c3 = "FunctionToString";
const local_a1e12a9e = new WeakMap();
const local_92b9b6bc = () => ({
  name: local_d041c6c3,
  setupOnce() {
    local_657db3b7_20 = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...arg) {
        const local = fn_092c85be(this);
        const local_2 =
          local_a1e12a9e.has(fn_df50106e()) && local !== undefined
            ? local
            : this;
        return local_657db3b7_20.apply(local_2, arg);
      };
    } catch {}
  },
  setup(arg) {
    local_a1e12a9e.set(arg, true);
  },
});
const local_f090a36f_4 = local_92b9b6bc;
const local_51c9269f = [
  /^Script error\.?$/,
  /^Javascript error: Script error\.? on line 0$/,
  /^ResizeObserver loop completed with undelivered notifications.$/,
  /^Cannot redefine property: googletag$/,
  /^Can't find variable: gmo$/,
  /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
  /can't redefine non-configurable property "solana"/,
  /vv\(\)\.getRestrictions is not a function/,
  /Can't find variable: _AutofillCallbackHandler/,
  /Object Not Found Matching Id:\d+, MethodName:simulateEvent/,
  /^Java exception was raised during method invocation$/,
];
const local_8affdb84 = "EventFilters";
const local_60e83861 = (arg = {}) => {
  let local;
  return {
    name: local_8affdb84,
    setup(arg) {
      const local = arg.getOptions();
      local = fn_d101b114(arg, local);
    },
    processEvent(arg, arg_2, arg_3) {
      if (!local) {
        const local = arg_3.getOptions();
        local = fn_d101b114(arg, local);
      }
      if (fn_8cff7b02(arg, local)) {
        return null;
      }
      return arg;
    },
  };
};
const local_b8a86faf = (arg = {}) => ({
  ...local_60e83861(arg),
  name: "InboundFilters",
});
function fn_d101b114(arg = {}, arg_2 = {}) {
  return {
    allowUrls: [...(arg.allowUrls || []), ...(arg_2.allowUrls || [])],
    denyUrls: [...(arg.denyUrls || []), ...(arg_2.denyUrls || [])],
    ignoreErrors: [
      ...(arg.ignoreErrors || []),
      ...(arg_2.ignoreErrors || []),
      ...(arg.disableErrorDefaults ? [] : local_51c9269f),
    ],
    ignoreTransactions: [
      ...(arg.ignoreTransactions || []),
      ...(arg_2.ignoreTransactions || []),
    ],
  };
}
function fn_8cff7b02(arg, arg_2) {
  if (arg.type) {
    if (
      arg.type === "transaction" &&
      fn_8fe8ead1(arg, arg_2.ignoreTransactions)
    ) {
      if (local_23bb5d69) {
        local_5a6ba1bf.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${fn_e3ddf09f(arg)}`);
      }
      return true;
    }
  } else {
    if (fn_c8535518(arg, arg_2.ignoreErrors)) {
      if (local_23bb5d69) {
        local_5a6ba1bf.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${fn_e3ddf09f(arg)}`);
      }
      return true;
    }
    if (fn_327bae55(arg)) {
      if (local_23bb5d69) {
        local_5a6ba1bf.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${fn_e3ddf09f(arg)}`);
      }
      return true;
    }
    if (fn_a97c4528(arg, arg_2.denyUrls)) {
      if (local_23bb5d69) {
        local_5a6ba1bf.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${fn_e3ddf09f(arg)}.
Url: ${fn_8e7f031e(arg)}`);
      }
      return true;
    }
    if (!fn_eac09cc1(arg, arg_2.allowUrls)) {
      if (local_23bb5d69) {
        local_5a6ba1bf.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${fn_e3ddf09f(arg)}.
Url: ${fn_8e7f031e(arg)}`);
      }
      return true;
    }
  }
  return false;
}
function fn_c8535518(arg, arg_2) {
  if (arg_2?.length) {
    return fn_b3d5859a(arg).some((arg) => fn_719ef462(arg, arg_2));
  }
  return false;
}
function fn_8fe8ead1(arg, arg_2) {
  if (!arg_2?.length) {
    return false;
  }
  const local = arg.transaction;
  if (local) {
    return fn_719ef462(local, arg_2);
  }
  return false;
}
function fn_a97c4528(arg, arg_2) {
  if (!arg_2?.length) {
    return false;
  }
  const local = fn_8e7f031e(arg);
  if (local) {
    return fn_719ef462(local, arg_2);
  }
  return false;
}
function fn_eac09cc1(arg, arg_2) {
  if (!arg_2?.length) {
    return true;
  }
  const local = fn_8e7f031e(arg);
  if (local) {
    return fn_719ef462(local, arg_2);
  }
  return true;
}
function fn_1f71d398(arg = []) {
  for (let local = arg.length - 1; local >= 0; local--) {
    const local = arg[local];
    if (
      local &&
      local.filename !== "<anonymous>" &&
      local.filename !== "[native code]"
    ) {
      return local.filename || null;
    }
  }
  return null;
}
function fn_8e7f031e(arg) {
  try {
    const local = [...(arg.exception?.values ?? [])]
      .reverse()
      .find(
        (arg) =>
          arg.mechanism?.parent_id === undefined &&
          arg.stacktrace?.frames?.length,
      )?.stacktrace?.frames;
    if (local) {
      return fn_1f71d398(local);
    }
    return null;
  } catch {
    if (local_23bb5d69) {
      local_5a6ba1bf.error(`Cannot extract url for event ${fn_e3ddf09f(arg)}`);
    }
    return null;
  }
}
function fn_327bae55(arg) {
  if (arg.exception?.values?.length) {
    return (
      !arg.message &&
      !arg.exception.values.some(
        (arg) =>
          arg.stacktrace || (arg.type && arg.type !== "Error") || arg.value,
      )
    );
  }
  return false;
}
function fn_93cfddb0(arg, arg_2, arg_3, arg_4, arg_5, arg_6) {
  if (
    !arg_5.exception?.values ||
    !arg_6 ||
    !fn_e4697554(arg_6.originalException, Error)
  ) {
    return;
  }
  const local =
    arg_5.exception.values.length > 0
      ? arg_5.exception.values[arg_5.exception.values.length - 1]
      : undefined;
  if (local) {
    arg_5.exception.values = fn_c19bc9b0(
      arg,
      arg_2,
      arg_4,
      arg_6.originalException,
      arg_3,
      arg_5.exception.values,
      local,
      0,
    );
  }
}
function fn_c19bc9b0(arg, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8) {
  if (arg_6.length >= arg_3 + 1) {
    return arg_6;
  }
  let local = [...arg_6];
  if (fn_e4697554(arg_4[arg_5], Error)) {
    fn_a8b56104(arg_7, arg_8, arg_4);
    const local = arg(arg_2, arg_4[arg_5]);
    const local_2 = local.length;
    fn_4ed7c7bf(local, arg_5, local_2, arg_8);
    local = fn_c19bc9b0(
      arg,
      arg_2,
      arg_3,
      arg_4[arg_5],
      arg_5,
      [local, ...local],
      local,
      local_2,
    );
  }
  if (fn_a5545a59(arg_4)) {
    arg_4.errors.forEach((arg, arg_2) => {
      if (fn_e4697554(arg, Error)) {
        fn_a8b56104(arg_7, arg_8, arg_4);
        const local = arg(arg_2, arg);
        const local_2 = local.length;
        fn_4ed7c7bf(local, `errors[${arg_2}]`, local_2, arg_8);
        local = fn_c19bc9b0(
          arg,
          arg_2,
          arg_3,
          arg,
          arg_5,
          [local, ...local],
          local,
          local_2,
        );
      }
    });
  }
  return local;
}
function fn_a5545a59(arg) {
  return Array.isArray(arg.errors);
}
function fn_a8b56104(arg, arg_2, arg_3) {
  arg.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...(fn_a5545a59(arg_3) && {
      is_exception_group: true,
    }),
    ...arg.mechanism,
    exception_id: arg_2,
  };
}
function fn_4ed7c7bf(arg, arg_2, arg_3, arg_4) {
  arg.mechanism = {
    handled: true,
    ...arg.mechanism,
    type: "chained",
    source: arg_2,
    exception_id: arg_3,
    parent_id: arg_4,
  };
}
function fn_cd7d391d(arg) {
  const local = "console";
  const local_2 = fn_8c3b3d2d(local, arg);
  fn_131e115c(local, fn_469b7a08);
  return local_2;
}
function fn_469b7a08() {
  if ("console" in local_f090a36f) {
    local_0296945c.forEach(function (arg) {
      if (arg in local_f090a36f.console) {
        fn_344b1aa6(local_f090a36f.console, arg, function (arg) {
          local_603ced16_2[arg] = arg;
          return function (...arg) {
            fn_346ded5d("console", {
              args: arg,
              level: arg,
            });
            local_603ced16_2[arg]?.apply(local_f090a36f.console, arg);
          };
        });
      }
    });
  }
}
function fn_60d07a08(arg) {
  if (arg === "warn") {
    return "warning";
  }
  if (["fatal", "error", "warning", "log", "info", "debug"].includes(arg)) {
    return arg;
  }
  return "log";
}
const local_f602e287 = "Dedupe";
const local_d48be5c7 = () => {
  let local;
  return {
    name: local_f602e287,
    processEvent(arg) {
      if (arg.type) {
        return arg;
      }
      try {
        if (fn_3e556ebf(arg, local)) {
          if (local_23bb5d69) {
            local_5a6ba1bf.warn(
              "Event dropped due to being a duplicate of previously captured event.",
            );
          }
          return null;
        }
      } catch {}
      return (local = arg);
    },
  };
};
const local_f090a36f_5 = local_d48be5c7;
function fn_3e556ebf(arg, arg_2) {
  if (arg_2) {
    return !!(fn_c1a1c2d8(arg, arg_2) || fn_1d7a3246(arg, arg_2));
  }
  return false;
}
function fn_c1a1c2d8(arg, arg_2) {
  const local = arg.message;
  const local_2 = arg_2.message;
  return !(
    (!local && !local_2) ||
    (local && !local_2) ||
    (!local && local_2) ||
    local !== local_2 ||
    !fn_84807ac3(arg, arg_2) ||
    !fn_0c85c338(arg, arg_2)
  );
}
function fn_1d7a3246(arg, arg_2) {
  const local = fn_548f3d36_2(arg_2);
  const local_2 = fn_548f3d36_2(arg);
  return !(
    !local ||
    !local_2 ||
    local.type !== local_2.type ||
    local.value !== local_2.value ||
    !fn_84807ac3(arg, arg_2) ||
    !fn_0c85c338(arg, arg_2)
  );
}
function fn_0c85c338(arg, arg_2) {
  let local = fn_b8c28533(arg);
  let local_2 = fn_b8c28533(arg_2);
  if (!local && !local_2) {
    return true;
  }
  if (
    (local && !local_2) ||
    (!local && local_2) ||
    ((local = local), (local_2 = local_2), local_2.length !== local.length)
  ) {
    return false;
  }
  for (let local = 0; local < local_2.length; local++) {
    const local = local_2[local];
    const local_2 = local[local];
    if (
      local.filename !== local_2.filename ||
      local.lineno !== local_2.lineno ||
      local.colno !== local_2.colno ||
      local.function !== local_2.function
    ) {
      return false;
    }
  }
  return true;
}
function fn_84807ac3(arg, arg_2) {
  let local = arg.fingerprint;
  let local_2 = arg_2.fingerprint;
  if (!local && !local_2) {
    return true;
  }
  if ((local && !local_2) || (!local && local_2)) {
    return false;
  }
  local = local;
  local_2 = local_2;
  try {
    return local.join("") === local_2.join("");
  } catch {
    return false;
  }
}
function fn_548f3d36_2(arg) {
  return arg.exception?.values?.[0];
}
const local_351dc3c1 = "ConversationId";
const local_0200eba9 = () => ({
  name: local_351dc3c1,
  setup(arg) {
    arg.on("spanStart", (arg) => {
      const local = fn_bff325b9().getScopeData();
      const local_2 = fn_bff325b9_2().getScopeData();
      const local_3 = local.conversationId || local_2.conversationId;
      if (local_3) {
        const {
          op: local,
          data: local_2,
          description: local_3,
        } = fn_0aacd2da(arg);
        if (
          !local?.startsWith("gen_ai.") &&
          !local_2["ai.operationId"] &&
          !local_3?.startsWith("ai.")
        ) {
          return;
        }
        arg.setAttribute(local_59c72df3, local_3);
      }
    });
  },
});
const local_f090a36f_6 = local_0200eba9;
function fn_772a0bd5(arg) {
  if (arg !== undefined) {
    if (arg >= 400 && arg < 500) {
      return "warning";
    }
    if (arg >= 500) {
      return "error";
    }
    return undefined;
  }
}
const local_f090a36f_7 = local_f090a36f;
function fn_53346ed1() {
  return "history" in local_f090a36f_7 && !!local_f090a36f_7.history;
}
function fn_72ea682b() {
  if (!("fetch" in local_f090a36f_7)) {
    return false;
  }
  try {
    new Headers();
    new Request("data:,");
    new Response();
    return true;
  } catch {
    return false;
  }
}
function fn_445f8733(arg) {
  return (
    arg &&
    /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(arg.toString())
  );
}
function fn_f8d64f5a() {
  if (typeof EdgeRuntime === "string") {
    return true;
  }
  if (!fn_72ea682b()) {
    return false;
  }
  if (fn_445f8733(local_f090a36f_7.fetch)) {
    return true;
  }
  let local = false;
  const local_2 = local_f090a36f_7.document;
  if (local_2 && typeof local_2.createElement === "function") {
    try {
      const local = local_2.createElement("iframe");
      local.hidden = true;
      local_2.head.appendChild(local);
      if (local.contentWindow?.fetch) {
        local = fn_445f8733(local.contentWindow.fetch);
      }
      local_2.head.removeChild(local);
    } catch (error) {
      if (local_23bb5d69) {
        local_5a6ba1bf.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          error,
        );
      }
    }
  }
  return local;
}
function fn_9fa9e26e(arg, arg_2) {
  const local = "fetch";
  const local_2 = fn_8c3b3d2d(local, arg);
  fn_131e115c(local, () => fn_dc01c4f2(undefined, arg_2));
  return local_2;
}
function fn_dc01c4f2(arg, arg_2 = false) {
  if (!(arg_2 && !fn_f8d64f5a())) {
    fn_344b1aa6(local_f090a36f, "fetch", function (arg) {
      return function (...arg) {
        const local = new Error();
        const { method: local_2, url: local_3 } = fn_665115d7(arg);
        const local_4 = {
          args: arg,
          fetchData: {
            method: local_2,
            url: local_3,
          },
          startTimestamp: fn_d10ac820() * 1000,
          virtualError: local,
          headers: fn_374832b3(arg),
        };
        fn_346ded5d("fetch", {
          ...local_4,
        });
        return arg.apply(local_f090a36f, arg).then(
          async (arg) => {
            fn_346ded5d("fetch", {
              ...local_4,
              endTimestamp: fn_d10ac820() * 1000,
              response: arg,
            });
            return arg;
          },
          (arg) => {
            fn_346ded5d("fetch", {
              ...local_4,
              endTimestamp: fn_d10ac820() * 1000,
              error: arg,
            });
            if (fn_7b60edb8(arg) && arg.stack === undefined) {
              arg.stack = local.stack;
              fn_84ede063(arg, "framesToPop", 1);
            }
            const local =
              fn_df50106e()?.getOptions().enhanceFetchErrorMessages ?? "always";
            if (
              local !== false &&
              arg instanceof TypeError &&
              (arg.message === "Failed to fetch" ||
                arg.message === "Load failed" ||
                arg.message ===
                  "NetworkError when attempting to fetch resource.")
            ) {
              try {
                const local = new URL(local_4.fetchData.url).host;
                if (local === "always") {
                  arg.message = `${arg.message} (${local})`;
                } else {
                  fn_84ede063(arg, "__sentry_fetch_url_host__", local);
                }
              } catch {}
            }
            throw arg;
          },
        );
      };
    });
  }
}
function fn_35d753dc(arg, arg_2) {
  return !!arg && typeof arg === "object" && !!arg[arg_2];
}
function fn_d52f1540(arg) {
  if (typeof arg === "string") {
    return arg;
  }
  if (arg) {
    if (fn_35d753dc(arg, "url")) {
      return arg.url;
    }
    if (arg.toString) {
      return arg.toString();
    }
    return "";
  }
  return "";
}
function fn_665115d7(arg) {
  if (arg.length === 0) {
    return {
      method: "GET",
      url: "",
    };
  }
  if (arg.length === 2) {
    const [local, local_2] = arg;
    return {
      url: fn_d52f1540(local),
      method: fn_35d753dc(local_2, "method")
        ? String(local_2.method).toUpperCase()
        : fn_af94ae8c_3(local) && fn_35d753dc(local, "method")
          ? String(local.method).toUpperCase()
          : "GET",
    };
  }
  const local = arg[0];
  return {
    url: fn_d52f1540(local),
    method: fn_35d753dc(local, "method")
      ? String(local.method).toUpperCase()
      : "GET",
  };
}
function fn_374832b3(arg) {
  const [local, local_2] = arg;
  try {
    if (
      typeof local_2 === "object" &&
      local_2 !== null &&
      "headers" in local_2 &&
      local_2.headers
    ) {
      return new Headers(local_2.headers);
    }
    if (fn_af94ae8c_3(local)) {
      return new Headers(local.headers);
    }
  } catch {}
}
const local_f090a36f_8 = local_f090a36f;
let local_f06debfc_15 = 0;
function fn_0bc06bb1() {
  return local_f06debfc_15 > 0;
}
function fn_a047a318() {
  local_f06debfc_15++;
  setTimeout(() => {
    local_f06debfc_15--;
  });
}
function fn_2a655c7d(arg, arg_2 = {}) {
  function fn(arg) {
    return typeof arg === "function";
  }
  if (!fn(arg)) {
    return arg;
  }
  try {
    const local = arg.__sentry_wrapped__;
    if (local) {
      if (typeof local === "function") {
        return local;
      }
      return arg;
    }
    if (fn_092c85be(arg)) {
      return arg;
    }
  } catch {
    return arg;
  }
  const local = function (...arg) {
    try {
      const local = arg.map((arg) => fn_2a655c7d(arg, arg_2));
      return arg.apply(this, local);
    } catch (error) {
      fn_a047a318();
      fn_ded9c9e3((arg) => {
        arg.addEventProcessor((arg) => {
          if (arg_2.mechanism) {
            fn_32053b25(arg, undefined);
            fn_9efed769(arg, arg_2.mechanism);
          }
          arg.extra = {
            ...arg.extra,
            arguments: arg,
          };
          return arg;
        });
        fn_0e42a633(error);
      });
      throw error;
    }
  };
  try {
    for (const local in arg) {
      if (Object.prototype.hasOwnProperty.call(arg, local)) {
        local[local] = arg[local];
      }
    }
  } catch {}
  fn_2d23a036(local, arg);
  fn_84ede063(arg, "__sentry_wrapped__", local);
  try {
    if (Object.getOwnPropertyDescriptor(local, "name").configurable) {
      Object.defineProperty(local, "name", {
        get() {
          return arg.name;
        },
      });
    }
  } catch {}
  return local;
}
function fn_b2bf5d9b() {
  const local = fn_1d107afc();
  const { referrer: local_2 } = local_f090a36f_8.document || {};
  const { userAgent: local_3 } = local_f090a36f_8.navigator || {};
  const local_4 = {
    ...(local_2 && {
      Referer: local_2,
    }),
    ...(local_3 && {
      "User-Agent": local_3,
    }),
  };
  return {
    url: local,
    headers: local_4,
  };
}
function fn_e94fbdc7(arg, arg_2) {
  const local = fn_9488c03b(arg, arg_2);
  const local_2 = {
    type: fn_ff7a0a73(arg_2),
    value: fn_f8268d59(arg_2),
  };
  if (local.length) {
    local_2.stacktrace = {
      frames: local,
    };
  }
  if (local_2.type === undefined && local_2.value === "") {
    local_2.value = "Unrecoverable error caught";
  }
  return local_2;
}
function fn_7bba19e5(arg, arg_2, arg_3, arg_4) {
  const local = fn_df50106e()?.getOptions().normalizeDepth;
  const local_2 = fn_bf6be14b(arg_2);
  const local_3 = {
    __serialized__: fn_05588881(arg_2, local),
  };
  if (local_2) {
    return {
      exception: {
        values: [fn_e94fbdc7(arg, local_2)],
      },
      extra: local_3,
    };
  }
  const local_4 = {
    exception: {
      values: [
        {
          type: fn_af94ae8c(arg_2)
            ? arg_2.constructor.name
            : arg_4
              ? "UnhandledRejection"
              : "Error",
          value: fn_0b6e0960(arg_2, {
            isUnhandledRejection: arg_4,
          }),
        },
      ],
    },
    extra: local_3,
  };
  if (arg_3) {
    const local = fn_9488c03b(arg, arg_3);
    if (local.length) {
      local_4.exception.values[0].stacktrace = {
        frames: local,
      };
    }
  }
  return local_4;
}
function fn_a40c2590(arg, arg_2) {
  return {
    exception: {
      values: [fn_e94fbdc7(arg, arg_2)],
    },
  };
}
function fn_9488c03b(arg, arg_2) {
  const local = arg_2.stacktrace || arg_2.stack || "";
  const local_2 = fn_a6ff1721(arg_2);
  const local_3 = fn_bca9da94(arg_2);
  try {
    return arg(local, local_2, local_3);
  } catch {}
  return [];
}
const local_15e5c13b = /Minified React error #\d+;/i;
function fn_a6ff1721(arg) {
  if (arg && local_15e5c13b.test(arg.message)) {
    return 1;
  }
  return 0;
}
function fn_bca9da94(arg) {
  if (typeof arg.framesToPop === "number") {
    return arg.framesToPop;
  }
  return 0;
}
function fn_3bdc7af7(arg) {
  if (
    typeof WebAssembly !== "undefined" &&
    typeof WebAssembly.Exception !== "undefined"
  ) {
    return arg instanceof WebAssembly.Exception;
  }
  return false;
}
function fn_ff7a0a73(arg) {
  const local = arg?.name;
  if (!local && fn_3bdc7af7(arg)) {
    if (arg.message && Array.isArray(arg.message) && arg.message.length == 2) {
      return arg.message[0];
    }
    return "WebAssembly.Exception";
  }
  return local;
}
function fn_f8268d59(arg) {
  const local = arg?.message;
  if (fn_3bdc7af7(arg)) {
    if (Array.isArray(arg.message) && arg.message.length == 2) {
      return arg.message[1];
    }
    return "wasm exception";
  }
  if (local) {
    if (local.error && typeof local.error.message === "string") {
      return fn_dfc9998e(local.error);
    }
    return fn_dfc9998e(arg);
  }
  return "No error message";
}
function fn_f81dc4f8(arg, arg_2, arg_3, arg_4) {
  const local = arg_3?.syntheticException || undefined;
  const local_2 = fn_e27f863c(arg, arg_2, local, arg_4);
  fn_9efed769(local_2);
  local_2.level = "error";
  if (arg_3?.event_id) {
    local_2.event_id = arg_3.event_id;
  }
  return fn_ec2ed68c(local_2);
}
function fn_4934cb57(arg, arg_2, arg_3 = "info", arg_4, arg_5) {
  const local = arg_4?.syntheticException || undefined;
  const local_2 = fn_18e92425(arg, arg_2, local, arg_5);
  local_2.level = arg_3;
  if (arg_4?.event_id) {
    local_2.event_id = arg_4.event_id;
  }
  return fn_ec2ed68c(local_2);
}
function fn_e27f863c(arg, arg_2, arg_3, arg_4, arg_5) {
  let local;
  if (fn_c1a7a7ab(arg_2) && arg_2.error) {
    return fn_a40c2590(arg, arg_2.error);
  }
  if (fn_bb01f144(arg_2) || fn_6f396a2c(arg_2)) {
    const local = arg_2;
    if ("stack" in arg_2) {
      local = fn_a40c2590(arg, arg_2);
    } else {
      const local =
        local.name || (fn_bb01f144(local) ? "DOMError" : "DOMException");
      const local_2 = local.message ? `${local}: ${local.message}` : local;
      local = fn_18e92425(arg, local_2, arg_3, arg_4);
      fn_32053b25(local, local_2);
    }
    if ("code" in local) {
      local.tags = {
        ...local.tags,
        "DOMException.code": `${local.code}`,
      };
    }
    return local;
  }
  if (fn_7b60edb8(arg_2)) {
    return fn_a40c2590(arg, arg_2);
  }
  if (fn_5ee37d10(arg_2) || fn_af94ae8c(arg_2)) {
    return (
      (local = fn_7bba19e5(arg, arg_2, arg_3, arg_5)),
      fn_9efed769(local, {
        synthetic: true,
      }),
      local
    );
  }
  return (
    (local = fn_18e92425(arg, arg_2, arg_3, arg_4)),
    fn_32053b25(local, `${arg_2}`),
    fn_9efed769(local, {
      synthetic: true,
    }),
    local
  );
}
function fn_18e92425(arg, arg_2, arg_3, arg_4) {
  const local = {};
  if (arg_4 && arg_3) {
    const local = fn_9488c03b(arg, arg_3);
    if (local.length) {
      local.exception = {
        values: [
          {
            value: arg_2,
            stacktrace: {
              frames: local,
            },
          },
        ],
      };
    }
    fn_9efed769(local, {
      synthetic: true,
    });
  }
  if (fn_b23d0128(arg_2)) {
    const {
      __sentry_template_string__: local,
      __sentry_template_values__: local_2,
    } = arg_2;
    local.logentry = {
      message: local,
      params: local_2,
    };
    return local;
  }
  local.message = arg_2;
  return local;
}
function fn_0b6e0960(arg, { isUnhandledRejection: arg_2 }) {
  const local = fn_4c904858(arg);
  const local_2 = arg_2 ? "promise rejection" : "exception";
  if (fn_c1a7a7ab(arg)) {
    return `Event \`ErrorEvent\` captured as ${local_2} with message \`${arg.message}\``;
  }
  if (fn_af94ae8c(arg)) {
    return `Event \`${fn_9b832241(arg)}\` (type=${arg.type}) captured as ${local_2}`;
  }
  return `Object captured as ${local_2} with keys: ${local}`;
}
function fn_9b832241(arg) {
  try {
    const local = Object.getPrototypeOf(arg);
    if (local) {
      return local.constructor.name;
    }
    return undefined;
  } catch {}
}
function fn_bf6be14b(arg) {
  return Object.values(arg).find((arg) => arg instanceof Error);
}
class clazz_d7549466 extends clazz_8953f139 {
  constructor(arg) {
    const local = fn_9965b2cb(arg);
    const local_2 = local_f090a36f_8.SENTRY_SDK_SOURCE || fn_b502e70d();
    fn_bb415fac(local, "browser", ["browser"], local_2);
    if (local._metadata?.sdk) {
      local._metadata.sdk.settings = {
        infer_ip: local.sendDefaultPii ? "auto" : "never",
        ...local._metadata.sdk.settings,
      };
    }
    super(local);
    const {
      sendDefaultPii: local_3,
      sendClientReports: local_4,
      enableLogs: local_5,
      _experiments: local_6,
      enableMetrics: local_7,
    } = this._options;
    const local_8 = local_7 ?? local_6?.enableMetrics ?? true;
    if (local_f090a36f_8.document && (local_4 || local_5 || local_8)) {
      local_f090a36f_8.document.addEventListener("visibilitychange", () => {
        local_f090a36f_8.document.visibilityState === "hidden" &&
          (local_4 && this._flushOutcomes(),
          local_5 && fn_8a39f6db(this),
          local_8 && fn_935d65bb(this));
      });
    }
    if (local_3) {
      this.on("beforeSendSession", fn_67dfb170);
    }
  }
  eventFromException(arg, arg_2) {
    return fn_f81dc4f8(
      this._options.stackParser,
      arg,
      arg_2,
      this._options.attachStacktrace,
    );
  }
  eventFromMessage(arg, arg_2 = "info", arg_3) {
    return fn_4934cb57(
      this._options.stackParser,
      arg,
      arg_2,
      arg_3,
      this._options.attachStacktrace,
    );
  }
  _prepareEvent(arg, arg_2, arg_3, arg_4) {
    arg.platform = arg.platform || "javascript";
    return super._prepareEvent(arg, arg_2, arg_3, arg_4);
  }
}
function fn_9965b2cb(arg) {
  return {
    release:
      typeof __SENTRY_RELEASE__ === "string"
        ? __SENTRY_RELEASE__
        : local_f090a36f_8.SENTRY_RELEASE?.id,
    sendClientReports: true,
    parentSpanIsAlwaysRootSpan: true,
    ...arg,
  };
}
const local_23bb5d69_2 =
  typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const local_f090a36f_9 = local_f090a36f;
const local_f06debfc_16 = 1000;
let local_657db3b7_21;
let local_657db3b7_22;
let local_657db3b7_23;
function fn_8d79bda4(arg) {
  fn_8c3b3d2d("dom", arg);
  fn_131e115c("dom", fn_01fd347a);
}
function fn_01fd347a() {
  if (!local_f090a36f_9.document) {
    return;
  }
  const local = fn_346ded5d.bind(null, "dom");
  const local_2 = fn_c07356fa(local, true);
  local_f090a36f_9.document.addEventListener("click", local_2, false);
  local_f090a36f_9.document.addEventListener("keypress", local_2, false);
  ["EventTarget", "Node"].forEach((arg) => {
    const local = local_f090a36f_9[arg]?.prototype;
    if (local?.hasOwnProperty?.("addEventListener")) {
      fn_344b1aa6(local, "addEventListener", function (arg) {
        return function (arg, arg_2, arg_3) {
          if (arg === "click" || arg == "keypress") {
            try {
              const local = (this.__sentry_instrumentation_handlers__ =
                this.__sentry_instrumentation_handlers__ || {});
              const local_2 = (local[arg] = local[arg] || {
                refCount: 0,
              });
              if (!local_2.handler) {
                const local = fn_c07356fa(local);
                local_2.handler = local;
                arg.call(this, arg, local, arg_3);
              }
              local_2.refCount++;
            } catch {}
          }
          return arg.call(this, arg, arg_2, arg_3);
        };
      });
      fn_344b1aa6(local, "removeEventListener", function (arg) {
        return function (arg, arg_2, arg_3) {
          if (arg === "click" || arg == "keypress") {
            try {
              const local = this.__sentry_instrumentation_handlers__ || {};
              const local_2 = local[arg];
              local_2 &&
                (local_2.refCount--,
                local_2.refCount <= 0 &&
                  (arg.call(this, arg, local_2.handler, arg_3),
                  (local_2.handler = undefined),
                  delete local[arg]),
                Object.keys(local).length === 0 &&
                  delete this.__sentry_instrumentation_handlers__);
            } catch {}
          }
          return arg.call(this, arg, arg_2, arg_3);
        };
      });
    }
  });
}
function fn_ef74b8b8(arg) {
  if (arg.type !== local_657db3b7_22) {
    return false;
  }
  try {
    if (!arg.target || arg.target._sentryId !== local_657db3b7_23) {
      return false;
    }
  } catch {}
  return true;
}
function fn_f0c8d490(arg, arg_2) {
  if (arg !== "keypress") {
    return false;
  }
  if (arg_2?.tagName) {
    return !(
      arg_2.tagName === "INPUT" ||
      arg_2.tagName === "TEXTAREA" ||
      arg_2.isContentEditable
    );
  }
  return true;
}
function fn_c07356fa(arg, arg_2 = false) {
  return (arg) => {
    if (!arg || arg._sentryCaptured) {
      return;
    }
    const local = fn_114ef939(arg);
    if (fn_f0c8d490(arg.type, local)) {
      return;
    }
    fn_84ede063(arg, "_sentryCaptured", true);
    if (local && !local._sentryId) {
      fn_84ede063(local, "_sentryId", fn_8e541891());
    }
    const local_2 = arg.type === "keypress" ? "input" : arg.type;
    if (!fn_ef74b8b8(arg)) {
      arg({
        event: arg,
        name: local_2,
        global: arg_2,
      });
      local_657db3b7_22 = arg.type;
      local_657db3b7_23 = local ? local._sentryId : undefined;
    }
    clearTimeout(local_657db3b7_21);
    local_657db3b7_21 = local_f090a36f_9.setTimeout(() => {
      local_657db3b7_23 = undefined;
      local_657db3b7_22 = undefined;
    }, local_f06debfc_16);
  };
}
function fn_114ef939(arg) {
  try {
    return arg.target;
  } catch {
    return null;
  }
}
let local_657db3b7_24;
function fn_f8426bd2(arg) {
  const local = "history";
  fn_8c3b3d2d(local, arg);
  fn_131e115c(local, fn_abed4dcd);
}
function fn_abed4dcd() {
  local_f090a36f_9.addEventListener("popstate", () => {
    const local = local_f090a36f_9.location.href;
    const local_2 = local_657db3b7_24;
    local_657db3b7_24 = local;
    if (local_2 === local) {
      return;
    }
    fn_346ded5d("history", {
      from: local_2,
      to: local,
    });
  });
  if (!fn_53346ed1()) {
    return;
  }
  function fn(arg) {
    return function (...arg) {
      const local = arg.length > 2 ? arg[2] : undefined;
      if (local) {
        const local = local_657db3b7_24;
        const local_2 = fn_38ceaa05(String(local));
        local_657db3b7_24 = local_2;
        if (local === local_2) {
          return arg.apply(this, arg);
        }
        fn_346ded5d("history", {
          from: local,
          to: local_2,
        });
      }
      return arg.apply(this, arg);
    };
  }
  fn_344b1aa6(local_f090a36f_9.history, "pushState", fn);
  fn_344b1aa6(local_f090a36f_9.history, "replaceState", fn);
}
function fn_38ceaa05(arg) {
  try {
    return new URL(arg, local_f090a36f_9.location.origin).toString();
  } catch {
    return arg;
  }
}
const local_603ced16_5 = {};
function fn_71fad101(arg) {
  const local = local_603ced16_5[arg];
  if (local) {
    return local;
  }
  let local_2 = local_f090a36f_9[arg];
  if (fn_445f8733(local_2)) {
    return (local_603ced16_5[arg] = local_2.bind(local_f090a36f_9));
  }
  const local_3 = local_f090a36f_9.document;
  if (local_3 && typeof local_3.createElement === "function") {
    try {
      const local = local_3.createElement("iframe");
      local.hidden = true;
      local_3.head.appendChild(local);
      const local_2 = local.contentWindow;
      if (local_2?.[arg]) {
        local_2 = local_2[arg];
      }
      local_3.head.removeChild(local);
    } catch (error) {
      if (local_23bb5d69_2) {
        local_5a6ba1bf.warn(
          `Could not create sandbox iframe for ${arg} check, bailing to window.${arg}: `,
          error,
        );
      }
    }
  }
  return local_2 && (local_603ced16_5[arg] = local_2.bind(local_f090a36f_9));
}
function fn_0e7e93c1(arg) {
  local_603ced16_5[arg] = undefined;
}
const local_b48f120e = "__sentry_xhr_v3__";
function fn_33a7addb(arg) {
  fn_8c3b3d2d("xhr", arg);
  fn_131e115c("xhr", fn_5de713d7);
}
function fn_5de713d7() {
  if (!local_f090a36f_9.XMLHttpRequest) {
    return;
  }
  const local = XMLHttpRequest.prototype;
  local.open = new Proxy(local.open, {
    apply(arg, arg_2, arg_3) {
      const local = new Error();
      const local_2 = fn_d10ac820() * 1000;
      const local_3 = fn_bdd4075c(arg_3[0])
        ? arg_3[0].toUpperCase()
        : undefined;
      const local_4 = fn_e4d74267(arg_3[1]);
      if (!local_3 || !local_4) {
        return arg.apply(arg_2, arg_3);
      }
      arg_2[local_b48f120e] = {
        method: local_3,
        url: local_4,
        request_headers: {},
      };
      if (local_3 === "POST" && local_4.match(/sentry_key/)) {
        arg_2.__sentry_own_request__ = true;
      }
      const local_5 = () => {
        const local = arg_2[local_b48f120e];
        if (local && arg_2.readyState === 4) {
          try {
            local.status_code = arg_2.status;
          } catch {}
          const local = {
            endTimestamp: fn_d10ac820() * 1000,
            startTimestamp: local_2,
            xhr: arg_2,
            virtualError: local,
          };
          fn_346ded5d("xhr", local);
        }
      };
      if (
        "onreadystatechange" in arg_2 &&
        typeof arg_2.onreadystatechange === "function"
      ) {
        arg_2.onreadystatechange = new Proxy(arg_2.onreadystatechange, {
          apply(arg, arg_2, arg_3) {
            local_5();
            return arg.apply(arg_2, arg_3);
          },
        });
      } else {
        arg_2.addEventListener("readystatechange", local_5);
      }
      arg_2.setRequestHeader = new Proxy(arg_2.setRequestHeader, {
        apply(arg, arg_2, arg_3) {
          const [local, local_2] = arg_3;
          const local_3 = arg_2[local_b48f120e];
          if (local_3 && fn_bdd4075c(local) && fn_bdd4075c(local_2)) {
            local_3.request_headers[local.toLowerCase()] = local_2;
          }
          return arg.apply(arg_2, arg_3);
        },
      });
      return arg.apply(arg_2, arg_3);
    },
  });
  local.send = new Proxy(local.send, {
    apply(arg, arg_2, arg_3) {
      const local = arg_2[local_b48f120e];
      if (!local) {
        return arg.apply(arg_2, arg_3);
      }
      if (arg_3[0] !== undefined) {
        local.body = arg_3[0];
      }
      const local_2 = {
        startTimestamp: fn_d10ac820() * 1000,
        xhr: arg_2,
      };
      fn_346ded5d("xhr", local_2);
      return arg.apply(arg_2, arg_3);
    },
  });
}
function fn_e4d74267(arg) {
  if (fn_bdd4075c(arg)) {
    return arg;
  }
  try {
    return arg.toString();
  } catch {}
}
const local_f06debfc_17 = 40;
function fn_98fd8283(arg, arg_2 = fn_71fad101("fetch")) {
  let local = 0;
  let local_2 = 0;
  async function fn(arg) {
    const local = arg.body.length;
    local += local;
    local_2++;
    const local_2 = {
      body: arg.body,
      method: "POST",
      referrerPolicy: "strict-origin",
      headers: arg.headers,
      keepalive: local <= 60000 && local_2 < 15,
      ...arg.fetchOptions,
    };
    try {
      const local = await arg_2(arg.url, local_2);
      return {
        statusCode: local.status,
        headers: {
          "x-sentry-rate-limits": local.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": local.headers.get("Retry-After"),
        },
      };
    } catch (error) {
      fn_0e7e93c1("fetch");
      throw error;
    } finally {
      local -= local;
      local_2--;
    }
  }
  return fn_7424b233(arg, fn, fn_440daecb(arg.bufferSize || local_f06debfc_17));
}
const local_23bb5d69_3 =
  typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const local_f06debfc_18 = 30;
const local_f06debfc_19 = 50;
function fn_c4818767(arg, arg_2, arg_3, arg_4) {
  const local = {
    filename: arg,
    function: arg_2 === "<anonymous>" ? local_e1081c14 : arg_2,
    in_app: true,
  };
  if (arg_3 !== undefined) {
    local.lineno = arg_3;
  }
  if (arg_4 !== undefined) {
    local.colno = arg_4;
  }
  return local;
}
const local_2fb22811 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
const local_0f82369d =
  /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const local_c2e03475 = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const local_e5eb22aa = /at (.+?) ?\(data:(.+?),/;
const local_cc298b63 = (arg) => {
  const local = arg.match(local_e5eb22aa);
  if (local) {
    return {
      filename: `<data:${local[2]}>`,
      function: local[1],
    };
  }
  const local_2 = local_2fb22811.exec(arg);
  if (local_2) {
    const [, local, local_2, local_3] = local_2;
    return fn_c4818767(local, local_e1081c14, +local_2, +local_3);
  }
  const local_3 = local_0f82369d.exec(arg);
  if (local_3) {
    if (local_3[2]?.indexOf("eval") === 0) {
      const local = local_c2e03475.exec(local_3[2]);
      if (local) {
        local_3[2] = local[1];
        local_3[3] = local[2];
        local_3[4] = local[3];
      }
    }
    const [local, local_2] = local_7f570ebe(
      local_3[1] || local_e1081c14,
      local_3[2],
    );
    return fn_c4818767(
      local_2,
      local,
      local_3[3] ? +local_3[3] : undefined,
      local_3[4] ? +local_3[4] : undefined,
    );
  }
};
const local_4247765a = [local_f06debfc_18, local_cc298b63];
const local_67f5e0d6 =
  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const local_af9829f1 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const local_890371d8 = (arg) => {
  const local = local_67f5e0d6.exec(arg);
  if (local) {
    if (local[3] && local[3].indexOf(" > eval") > -1) {
      const local = local_af9829f1.exec(local[3]);
      if (local) {
        local[1] = local[1] || "eval";
        local[3] = local[1];
        local[4] = local[2];
        local[5] = "";
      }
    }
    let local = local[3];
    let local_2 = local[1] || local_e1081c14;
    [local_2, local] = local_7f570ebe(local_2, local);
    return fn_c4818767(
      local,
      local_2,
      local[4] ? +local[4] : undefined,
      local[5] ? +local[5] : undefined,
    );
  }
};
const local_4247765a_2 = [local_f06debfc_19, local_890371d8];
const local_4247765a_3 = [local_4247765a, local_4247765a_2];
const local_bc4c708d = fn_72a34818(...local_4247765a_3);
const local_7f570ebe = (arg, arg_2) => {
  const local = arg.indexOf("safari-extension") !== -1;
  const local_2 = arg.indexOf("safari-web-extension") !== -1;
  if (local || local_2) {
    return [
      arg.indexOf("@") !== -1 ? arg.split("@")[0] : local_e1081c14,
      local ? `safari-extension:${arg_2}` : `safari-web-extension:${arg_2}`,
    ];
  }
  return [arg, arg_2];
};
const local_f06debfc_20 = 1024;
const local_8da0abd6 = "Breadcrumbs";
const local_facdb130 = (arg = {}) => {
  const local = {
    console: true,
    dom: true,
    fetch: true,
    history: true,
    sentry: true,
    xhr: true,
    ...arg,
  };
  return {
    name: local_8da0abd6,
    setup(arg) {
      if (local.console) {
        fn_cd7d391d(fn_7c78097e(arg));
      }
      if (local.dom) {
        fn_8d79bda4(fn_d516452d(arg, local.dom));
      }
      if (local.xhr) {
        fn_33a7addb(fn_687021b8(arg));
      }
      if (local.fetch) {
        fn_9fa9e26e(fn_c78e246f(arg));
      }
      if (local.history) {
        fn_f8426bd2(fn_d7627cc4(arg));
      }
      if (local.sentry) {
        arg.on("beforeSendEvent", fn_3e1f45eb(arg));
      }
    },
  };
};
const local_f090a36f_10 = local_facdb130;
function fn_3e1f45eb(arg) {
  return function (arg) {
    if (fn_df50106e() === arg) {
      fn_e0908e45(
        {
          category: `sentry.${arg.type === "transaction" ? "transaction" : "event"}`,
          event_id: arg.event_id,
          level: arg.level,
          message: fn_e3ddf09f(arg),
        },
        {
          event: arg,
        },
      );
    }
  };
}
function fn_d516452d(arg, arg_2) {
  return function (arg) {
    if (fn_df50106e() !== arg) {
      return;
    }
    let local;
    let local_2;
    let local_3 =
      typeof arg_2 === "object" ? arg_2.serializeAttribute : undefined;
    let local_4 =
      typeof arg_2 === "object" && typeof arg_2.maxStringLength === "number"
        ? arg_2.maxStringLength
        : undefined;
    if (local_4 && local_4 > local_f06debfc_20) {
      if (local_23bb5d69_3) {
        local_5a6ba1bf.warn(
          `\`dom.maxStringLength\` cannot exceed ${local_f06debfc_20}, but a value of ${local_4} was configured. Sentry will use ${local_f06debfc_20} instead.`,
        );
      }
      local_4 = local_f06debfc_20;
    }
    if (typeof local_3 === "string") {
      local_3 = [local_3];
    }
    try {
      const local = arg.event;
      const local_2 = fn_63db3352(local) ? local.target : local;
      local = fn_9a310b32(local_2, {
        keyAttrs: local_3,
        maxStringLength: local_4,
      });
      local_2 = fn_08cf125e(local_2);
    } catch {
      local = "<unknown>";
    }
    if (local.length === 0) {
      return;
    }
    const local_5 = {
      category: `ui.${arg.name}`,
      message: local,
    };
    if (local_2) {
      local_5.data = {
        "ui.component_name": local_2,
      };
    }
    fn_e0908e45(local_5, {
      event: arg.event,
      name: arg.name,
      global: arg.global,
    });
  };
}
function fn_7c78097e(arg) {
  return function (arg) {
    if (fn_df50106e() !== arg) {
      return;
    }
    const local = {
      category: "console",
      data: {
        arguments: arg.args,
        logger: "console",
      },
      level: fn_60d07a08(arg.level),
      message: fn_59a2fb0b(arg.args, "./entry.js"),
    };
    if (arg.level === "assert") {
      if (arg.args[0] === false) {
        local.message = `Assertion failed: ${fn_59a2fb0b(arg.args.slice(1), "./entry.js") || "console.assert"}`;
        local.data.arguments = arg.args.slice(1);
      } else {
        return;
      }
    }
    fn_e0908e45(local, {
      input: arg.args,
      level: arg.level,
    });
  };
}
function fn_687021b8(arg) {
  return function (arg) {
    if (fn_df50106e() !== arg) {
      return;
    }
    const { startTimestamp: local, endTimestamp: local_2 } = arg;
    const local_3 = arg.xhr[local_b48f120e];
    if (!local || !local_2 || !local_3) {
      return;
    }
    const {
      method: local_4,
      url: local_5,
      status_code: local_6,
      body: local_7,
    } = local_3;
    const local_8 = {
      method: local_4,
      url: local_5,
      status_code: local_6,
    };
    const local_9 = {
      xhr: arg.xhr,
      input: local_7,
      startTimestamp: local,
      endTimestamp: local_2,
    };
    const local_10 = {
      category: "xhr",
      data: local_8,
      type: "http",
      level: fn_772a0bd5(local_6),
    };
    arg.emit("beforeOutgoingRequestBreadcrumb", local_10, local_9);
    fn_e0908e45(local_10, local_9);
  };
}
function fn_c78e246f(arg) {
  return function (arg) {
    if (fn_df50106e() !== arg) {
      return;
    }
    const { startTimestamp: local, endTimestamp: local_2 } = arg;
    if (
      local_2 &&
      !(
        arg.fetchData.url.match(/sentry_key/) && arg.fetchData.method === "POST"
      )
    ) {
      if (arg.error) {
        const local = {
          data: arg.error,
          input: arg.args,
          startTimestamp: local,
          endTimestamp: local_2,
        };
        const local_2 = {
          category: "fetch",
          data: arg.fetchData,
          level: "error",
          type: "http",
        };
        arg.emit("beforeOutgoingRequestBreadcrumb", local_2, local);
        fn_e0908e45(local_2, local);
      } else {
        const local = arg.response;
        const local_2 = {
          ...arg.fetchData,
          status_code: local?.status,
        };
        const local_3 = {
          input: arg.args,
          response: local,
          startTimestamp: local,
          endTimestamp: local_2,
        };
        const local_4 = {
          category: "fetch",
          data: local_2,
          type: "http",
          level: fn_772a0bd5(local_2.status_code),
        };
        arg.emit("beforeOutgoingRequestBreadcrumb", local_4, local_3);
        fn_e0908e45(local_4, local_3);
      }
    }
  };
}
function fn_d7627cc4(arg) {
  return function (arg) {
    if (fn_df50106e() !== arg) {
      return;
    }
    let local = arg.from;
    let local_2 = arg.to;
    const local_3 = fn_95df3475(local_f090a36f_8.location.href);
    let local_4 = local ? fn_95df3475(local) : undefined;
    const local_5 = fn_95df3475(local_2);
    if (!local_4?.path) {
      local_4 = local_3;
    }
    if (
      local_3.protocol === local_5.protocol &&
      local_3.host === local_5.host
    ) {
      local_2 = local_5.relative;
    }
    if (
      local_3.protocol === local_4.protocol &&
      local_3.host === local_4.host
    ) {
      local = local_4.relative;
    }
    fn_e0908e45({
      category: "navigation",
      data: {
        from: local,
        to: local_2,
      },
    });
  };
}
function fn_63db3352(arg) {
  return !!arg && !!arg.target;
}
const local_3def398a =
  "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
    ",",
  );
const local_4748e695 = "BrowserApiErrors";
const local_028efd13 = (arg = {}) => {
  const local = {
    XMLHttpRequest: true,
    eventTarget: true,
    requestAnimationFrame: true,
    setInterval: true,
    setTimeout: true,
    unregisterOriginalCallbacks: false,
    ...arg,
  };
  return {
    name: local_4748e695,
    setupOnce() {
      if (local.setTimeout) {
        fn_344b1aa6(local_f090a36f_8, "setTimeout", fn_682c3d18);
      }
      if (local.setInterval) {
        fn_344b1aa6(local_f090a36f_8, "setInterval", fn_682c3d18);
      }
      if (local.requestAnimationFrame) {
        fn_344b1aa6(local_f090a36f_8, "requestAnimationFrame", fn_32fd6b13);
      }
      if (local.XMLHttpRequest && "XMLHttpRequest" in local_f090a36f_8) {
        fn_344b1aa6(XMLHttpRequest.prototype, "send", fn_90bedd56);
      }
      const local = local.eventTarget;
      if (local) {
        (Array.isArray(local) ? local : local_3def398a).forEach((arg) =>
          fn_b70cdf1c(arg, local),
        );
      }
    },
  };
};
const local_f090a36f_11 = local_028efd13;
function fn_682c3d18(arg) {
  return function (...arg) {
    const local = arg[0];
    arg[0] = fn_2a655c7d(local, {
      mechanism: {
        handled: false,
        type: `auto.browser.browserapierrors.${fn_38b209f1(arg)}`,
      },
    });
    return arg.apply(this, arg);
  };
}
function fn_32fd6b13(arg) {
  return function (arg) {
    return arg.apply(this, [
      fn_2a655c7d(arg, {
        mechanism: {
          data: {
            handler: fn_38b209f1(arg),
          },
          handled: false,
          type: "auto.browser.browserapierrors.requestAnimationFrame",
        },
      }),
    ]);
  };
}
function fn_90bedd56(arg) {
  return function (...arg) {
    const local = this;
    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((arg) => {
      if (arg in local && typeof local[arg] === "function") {
        fn_344b1aa6(local, arg, function (arg) {
          const local = {
            mechanism: {
              data: {
                handler: fn_38b209f1(arg),
              },
              handled: false,
              type: `auto.browser.browserapierrors.xhr.${arg}`,
            },
          };
          const local_2 = fn_092c85be(arg);
          if (local_2) {
            local.mechanism.data.handler = fn_38b209f1(local_2);
          }
          return fn_2a655c7d(arg, local);
        });
      }
    });
    return arg.apply(this, arg);
  };
}
function fn_b70cdf1c(arg, arg_2) {
  const local = local_f090a36f_8[arg]?.prototype;
  if (local?.hasOwnProperty?.("addEventListener")) {
    fn_344b1aa6(local, "addEventListener", function (arg) {
      return function (arg, arg_2, arg_3) {
        try {
          if (fn_a06a5c10_2(arg_2)) {
            arg_2.handleEvent = fn_2a655c7d(arg_2.handleEvent, {
              mechanism: {
                data: {
                  handler: fn_38b209f1(arg_2),
                  target: arg,
                },
                handled: false,
                type: "auto.browser.browserapierrors.handleEvent",
              },
            });
          }
        } catch {}
        if (arg_2.unregisterOriginalCallbacks) {
          fn_dff1bd7b(this, arg, arg_2);
        }
        return arg.apply(this, [
          arg,
          fn_2a655c7d(arg_2, {
            mechanism: {
              data: {
                handler: fn_38b209f1(arg_2),
                target: arg,
              },
              handled: false,
              type: "auto.browser.browserapierrors.addEventListener",
            },
          }),
          arg_3,
        ]);
      };
    });
    fn_344b1aa6(local, "removeEventListener", function (arg) {
      return function (arg, arg_2, arg_3) {
        try {
          const local = arg_2.__sentry_wrapped__;
          if (local) {
            arg.call(this, arg, local, arg_3);
          }
        } catch {}
        return arg.call(this, arg, arg_2, arg_3);
      };
    });
  }
}
function fn_a06a5c10_2(arg) {
  return typeof arg.handleEvent === "function";
}
function fn_dff1bd7b(arg, arg_2, arg_3) {
  if (
    arg &&
    typeof arg === "object" &&
    "removeEventListener" in arg &&
    typeof arg.removeEventListener === "function"
  ) {
    arg.removeEventListener(arg_2, arg_3);
  }
}
const local_3a99c10a = (arg = {}) => {
  const local = arg.lifecycle ?? "route";
  return {
    name: "BrowserSession",
    setupOnce() {
      if (typeof local_f090a36f_8.document === "undefined") {
        if (local_23bb5d69_3) {
          local_5a6ba1bf.warn(
            "Using the `browserSessionIntegration` in non-browser environments is not supported.",
          );
        }
        return;
      }
      fn_03a10270({
        ignoreDuration: true,
      });
      fn_d346974a();
      const local = fn_bff325b9_2();
      let local_2 = local.getUser();
      local.addScopeListener((arg) => {
        const local = arg.getUser();
        if (
          local_2?.id !== local?.id ||
          local_2?.ip_address !== local?.ip_address
        ) {
          fn_d346974a();
          local_2 = local;
        }
      });
      if (local === "route") {
        fn_f8426bd2(({ from: arg, to: symbol_052 }) => {
          if (arg !== symbol_052) {
            fn_03a10270({
              ignoreDuration: true,
            });
            fn_d346974a();
          }
        });
      }
    },
  };
};
const local_fd47abdb = "CultureContext";
const local_dad2de0e = () => ({
  name: local_fd47abdb,
  preprocessEvent(arg) {
    const local = fn_fda3c423();
    if (local) {
      arg.contexts = {
        ...arg.contexts,
        culture: {
          ...local,
          ...arg.contexts?.culture,
        },
      };
    }
  },
  processSegmentSpan(arg) {
    const local = fn_fda3c423();
    if (local) {
      fn_5144a7de(arg, {
        "culture.locale": local.locale,
        "culture.timezone": local.timezone,
        "culture.calendar": local.calendar,
      });
    }
  },
});
const local_f090a36f_12 = local_dad2de0e;
function fn_fda3c423() {
  try {
    const local = local_f090a36f_8.Intl;
    if (!local) {
      return;
    }
    const local_2 = local.DateTimeFormat().resolvedOptions();
    return {
      locale: local_2.locale,
      timezone: local_2.timeZone,
      calendar: local_2.calendar,
    };
  } catch {
    return;
  }
}
const local_2a51f164 = "GlobalHandlers";
const local_743162a8 = (arg = {}) => {
  const local = {
    onerror: true,
    onunhandledrejection: true,
    ...arg,
  };
  return {
    name: local_2a51f164,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(arg) {
      if (local.onerror) {
        fn_a1bb7feb(arg);
        fn_74aaf4da("onerror");
      }
      if (local.onunhandledrejection) {
        fn_069c510e(arg);
        fn_74aaf4da("onunhandledrejection");
      }
    },
  };
};
const local_f090a36f_13 = local_743162a8;
function fn_a1bb7feb(arg) {
  fn_2d8ea36f((arg) => {
    const { stackParser: local, attachStacktrace: local_2 } = fn_6f485e72();
    if (fn_df50106e() !== arg || fn_0bc06bb1()) {
      return;
    }
    const {
      msg: local_3,
      url: local_4,
      line: local_5,
      column: local_6,
      error: local_7,
    } = arg;
    const local_8 = fn_44847b8a(
      fn_e27f863c(local, local_7 || local_3, undefined, local_2, false),
      local_4,
      local_5,
      local_6,
    );
    local_8.level = "error";
    fn_2f9eb5a7(local_8, {
      originalException: local_7,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror",
      },
    });
  });
}
function fn_069c510e(arg) {
  fn_6f6110ff((arg) => {
    const { stackParser: local, attachStacktrace: local_2 } = fn_6f485e72();
    if (fn_df50106e() !== arg || fn_0bc06bb1()) {
      return;
    }
    const local_3 = fn_1e4f8466(arg);
    const local_4 = fn_8a91c46c(local_3)
      ? fn_76e8bcf0(local_3)
      : fn_e27f863c(local, local_3, undefined, local_2, true);
    local_4.level = "error";
    fn_2f9eb5a7(local_4, {
      originalException: local_3,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection",
      },
    });
  });
}
function fn_1e4f8466(arg) {
  if (fn_8a91c46c(arg)) {
    return arg;
  }
  try {
    if ("reason" in arg) {
      return arg.reason;
    }
    if ("detail" in arg && "reason" in arg.detail) {
      return arg.detail.reason;
    }
  } catch {}
  return arg;
}
function fn_76e8bcf0(arg) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(arg)}`,
        },
      ],
    },
  };
}
function fn_44847b8a(arg, arg_2, arg_3, arg_4) {
  const local = (arg.exception = arg.exception || {});
  const local_2 = (local.values = local.values || []);
  const local_3 = (local_2[0] = local_2[0] || {});
  const local_4 = (local_3.stacktrace = local_3.stacktrace || {});
  const local_5 = (local_4.frames = local_4.frames || []);
  if (local_5.length === 0) {
    local_5.push({
      colno: arg_4,
      lineno: arg_3,
      filename: fn_446a54bf(arg_2) ?? fn_1d107afc(),
      function: local_e1081c14,
      in_app: true,
    });
  }
  return arg;
}
function fn_74aaf4da(arg) {
  if (local_23bb5d69_3) {
    local_5a6ba1bf.log(`Global Handler attached: ${arg}`);
  }
}
function fn_6f485e72() {
  return (
    fn_df50106e()?.getOptions() || {
      stackParser: () => [],
      attachStacktrace: false,
    }
  );
}
function fn_446a54bf(arg) {
  if (!(!fn_bdd4075c(arg) || arg.length === 0)) {
    if (arg.startsWith("data:")) {
      return `<${fn_52a7926e(arg, false)}>`;
    }
    return arg;
  }
}
const local_51d2251b = () => ({
  name: "HttpContext",
  preprocessEvent(arg) {
    if (
      !local_f090a36f_8.navigator &&
      !local_f090a36f_8.location &&
      !local_f090a36f_8.document
    ) {
      return;
    }
    const local = fn_b2bf5d9b();
    const local_2 = {
      ...local.headers,
      ...arg.request?.headers,
    };
    arg.request = {
      ...local,
      ...arg.request,
      headers: local_2,
    };
  },
  processSegmentSpan(arg) {
    if (
      !local_f090a36f_8.navigator &&
      !local_f090a36f_8.location &&
      !local_f090a36f_8.document
    ) {
      return;
    }
    const local = fn_b2bf5d9b();
    fn_5144a7de(arg, {
      "url.full": local.url || undefined,
      "http.request.header.user_agent": local.headers["User-Agent"],
      "http.request.header.referer": local.headers.Referer,
    });
  },
});
const local_e7b21f1a = "cause";
const local_f06debfc_21 = 5;
const local_0f5c4aef = "LinkedErrors";
const local_2fd4a810 = (arg = {}) => {
  const local = arg.limit || local_f06debfc_21;
  const local_2 = arg.key || local_e7b21f1a;
  return {
    name: local_0f5c4aef,
    preprocessEvent(arg, arg_2, arg_3) {
      const local = arg_3.getOptions();
      fn_93cfddb0(fn_e94fbdc7, local.stackParser, local_2, local, arg, arg_2);
    },
  };
};
const local_f090a36f_14 = local_2fd4a810;
function fn_22b7182f() {
  if (fn_88d7ccbb()) {
    return (
      local_23bb5d69_3 &&
        fn_a1a275d6(() => {
          console.error(
            "[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/",
          );
        }),
      true
    );
  }
  return false;
}
function fn_88d7ccbb() {
  if (typeof local_f090a36f_8.window === "undefined") {
    return false;
  }
  const local = local_f090a36f_8;
  if (local.nw || !(local.chrome || local.browser)?.runtime?.id) {
    return false;
  }
  const local_2 = fn_1d107afc();
  return !(
    local_f090a36f_8 === local_f090a36f_8.top &&
    /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(
      local_2,
    )
  );
}
function fn_4dbf8045(arg) {
  return [
    local_b8a86faf(),
    local_f090a36f_4(),
    local_f090a36f_6(),
    local_f090a36f_11(),
    local_f090a36f_10(),
    local_f090a36f_13(),
    local_f090a36f_14(),
    local_f090a36f_5(),
    local_51d2251b(),
    local_f090a36f_12(),
    local_3a99c10a(),
  ];
}
function fn_fb5a2df9(arg = {}) {
  const local = !arg.skipBrowserExtensionCheck && fn_22b7182f();
  let local_2 =
    arg.defaultIntegrations == null ? fn_4dbf8045() : arg.defaultIntegrations;
  const local_3 = {
    ...arg,
    enabled: local ? false : arg.enabled,
    stackParser: fn_b73466db(arg.stackParser || local_bc4c708d),
    integrations: fn_b770395e({
      integrations: arg.integrations,
      defaultIntegrations: local_2,
    }),
    transport: arg.transport || fn_98fd8283,
  };
  return fn_b973be8f(clazz_d7549466, local_3);
}
function fn_92c4c017(arg = {}) {
  const local = local_f090a36f_8.document;
  const local_2 = local?.head || local?.body;
  if (!local_2) {
    if (local_23bb5d69_3) {
      local_5a6ba1bf.error("[showReportDialog] Global document not defined");
    }
    return;
  }
  const local_3 = fn_bff325b9();
  const local_4 = fn_df50106e()?.getDsn();
  if (!local_4) {
    if (local_23bb5d69_3) {
      local_5a6ba1bf.error("[showReportDialog] DSN not configured");
    }
    return;
  }
  const local_5 = {
    ...arg,
    user: {
      ...local_3.getUser(),
      ...arg.user,
    },
    eventId: arg.eventId || fn_df50106e_2(),
  };
  const local_6 = local_f090a36f_8.document.createElement("script");
  local_6.async = true;
  local_6.crossOrigin = "anonymous";
  local_6.src = fn_700c4b91(local_4, local_5);
  const { onLoad: local_7, onClose: local_8 } = local_5;
  if (local_7) {
    local_6.onload = local_7;
  }
  if (local_8) {
    const local = (arg) => {
      if (arg.data === "__sentry_reportdialog_closed__") {
        try {
          local_8();
        } finally {
          local_f090a36f_8.removeEventListener("message", local);
        }
      }
    };
    local_f090a36f_8.addEventListener("message", local);
  }
  local_2.appendChild(local_6);
}
let local_657db3b7_25;
let local_657db3b7_26;
let local_657db3b7_27;
let local_657db3b7_28;
let local_f06debfc_22 = 0;
const local_0f018a95_3 = [];
const local_f090a36f_15 = local_657db3b7_2;
const local_2cae01a0_2 = local_f090a36f_15.__b;
const local_2cae01a0_3 = local_f090a36f_15.__r;
const local_2cae01a0_4 = local_f090a36f_15.diffed;
const local_2cae01a0_5 = local_f090a36f_15.__c;
const local_2cae01a0_6 = local_f090a36f_15.unmount;
const local_2cae01a0_7 = local_f090a36f_15.__;
function fn_8de7da45(arg, arg_2) {
  if (local_f090a36f_15.__h) {
    local_f090a36f_15.__h(local_657db3b7_26, arg, local_f06debfc_22 || arg_2);
  }
  local_f06debfc_22 = 0;
  const local =
    local_657db3b7_26.__H ||
    (local_657db3b7_26.__H = {
      __: [],
      __h: [],
    });
  if (arg >= local.__.length) {
    local.__.push({});
  }
  return local.__[arg];
}
function symbol_056(arg) {
  local_f06debfc_22 = 1;
  return fn_73273d2f(fn_bd290b6f, arg);
}
function fn_73273d2f(arg, arg_2, arg_3) {
  const local = fn_8de7da45(local_657db3b7_25++, 2);
  local.t = arg;
  if (
    !local.__c &&
    ((local.__ = [
      arg_3 ? arg_3(arg_2) : fn_bd290b6f(undefined, arg_2),
      function (arg) {
        const local = local.__N ? local.__N[0] : local.__[0];
        const local_2 = local.t(local, arg);
        if (local !== local_2) {
          local.__N = [local_2, local.__[1]];
          local.__c.setState({});
        }
      },
    ]),
    (local.__c = local_657db3b7_26),
    !local_657db3b7_26.__f)
  ) {
    const local = function (arg, arg_2, arg_3) {
      if (!local.__c.__H) {
        return true;
      }
      const local = local.__c.__H.__.filter(function (arg) {
        return !!arg.__c;
      });
      if (
        local.every(function (arg) {
          return !arg.__N;
        })
      ) {
        return !local_2 || local_2.call(this, arg, arg_2, arg_3);
      }
      let local_2 = local.__c.props !== arg;
      local.forEach(function (arg) {
        if (arg.__N) {
          const local = arg.__[0];
          arg.__ = arg.__N;
          arg.__N = undefined;
          if (local !== arg.__[0]) {
            local_2 = true;
          }
        }
      });
      return (local_2 && local_2.call(this, arg, arg_2, arg_3)) || local_2;
    };
    local_657db3b7_26.__f = true;
    var local_2 = local_657db3b7_26.shouldComponentUpdate;
    const local_2 = local_657db3b7_26.componentWillUpdate;
    local_657db3b7_26.componentWillUpdate = function (arg, arg_2, arg_3) {
      if (this.__e) {
        const local = local_2;
        local_2 = undefined;
        local(arg, arg_2, arg_3);
        local_2 = local;
      }
      if (local_2) {
        local_2.call(this, arg, arg_2, arg_3);
      }
    };
    local_657db3b7_26.shouldComponentUpdate = local;
  }
  return local.__N || local.__;
}
function symbol_077(arg, arg_2) {
  const local = fn_8de7da45(local_657db3b7_25++, 3);
  if (!local_f090a36f_15.__s && fn_3a986a6c(local.__H, arg_2)) {
    local.__ = arg;
    local.u = arg_2;
    local_657db3b7_26.__H.__h.push(local);
  }
}
function symbol_028(arg, arg_2) {
  const local = fn_8de7da45(local_657db3b7_25++, 4);
  if (!local_f090a36f_15.__s && fn_3a986a6c(local.__H, arg_2)) {
    local.__ = arg;
    local.u = arg_2;
    local_657db3b7_26.__h.push(local);
  }
}
function symbol_002(arg) {
  local_f06debfc_22 = 5;
  return symbol_021(function () {
    return {
      current: arg,
    };
  }, []);
}
function symbol_046(arg, arg_2, arg_3) {
  local_f06debfc_22 = 6;
  symbol_028(
    function () {
      if (typeof arg === "function") {
        const local = arg(arg_2());
        return function () {
          arg(null);
          if (local && typeof local === "function") {
            local();
          }
        };
      }
      if (arg) {
        arg.current = arg_2();
        return function () {
          return (arg.current = null);
        };
      }
    },
    arg_3 == null ? arg_3 : arg_3.concat(arg),
  );
}
function symbol_021(arg, arg_2) {
  const local = fn_8de7da45(local_657db3b7_25++, 7);
  if (fn_3a986a6c(local.__H, arg_2)) {
    local.__ = arg();
    local.__H = arg_2;
    local.__h = arg;
  }
  return local.__;
}
function symbol_069(arg, arg_2) {
  local_f06debfc_22 = 8;
  return symbol_021(function () {
    return arg;
  }, arg_2);
}
function fn_4eb8acde(arg) {
  const local = local_657db3b7_26.context[arg.__c];
  const local_2 = fn_8de7da45(local_657db3b7_25++, 9);
  local_2.c = arg;
  if (local) {
    return (
      local_2.__ == null && ((local_2.__ = true), local.sub(local_657db3b7_26)),
      local.props.value
    );
  }
  return arg.__;
}
function fn_b0431071(arg, arg_2) {
  if (local_f090a36f_15.useDebugValue) {
    local_f090a36f_15.useDebugValue(arg_2 ? arg_2(arg) : arg);
  }
}
function fn_9c941575() {
  const local = fn_8de7da45(local_657db3b7_25++, 11);
  if (!local.__) {
    for (
      var local_2 = local_657db3b7_26.__v;
      local_2 !== null && !local_2.__m && local_2.__ !== null;
    ) {
      local_2 = local_2.__;
    }
    const local = local_2.__m || (local_2.__m = [0, 0]);
    local.__ = `P${local[0]}-${local[1]++}`;
  }
  return local.__;
}
function fn_b3de4e17() {
  let local;
  while ((local = local_0f018a95_3.shift())) {
    if (local.__P && local.__H) {
      try {
        local.__H.__h.forEach(fn_ec371939);
        local.__H.__h.forEach(fn_f8b704f8);
        local.__H.__h = [];
      } catch (error) {
        local.__H.__h = [];
        local_f090a36f_15.__e(error, local.__v);
      }
    }
  }
}
local_f090a36f_15.__b = function (arg) {
  local_657db3b7_26 = null;
  if (local_2cae01a0_2) {
    local_2cae01a0_2(arg);
  }
};
local_f090a36f_15.__ = function (arg, arg_2) {
  if (arg && arg_2.__k && arg_2.__k.__m) {
    arg.__m = arg_2.__k.__m;
  }
  if (local_2cae01a0_7) {
    local_2cae01a0_7(arg, arg_2);
  }
};
local_f090a36f_15.__r = function (arg) {
  if (local_2cae01a0_3) {
    local_2cae01a0_3(arg);
  }
  local_657db3b7_25 = 0;
  const local = (local_657db3b7_26 = arg.__c).__H;
  local &&
    (local_657db3b7_27 === local_657db3b7_26
      ? ((local.__h = []),
        (local_657db3b7_26.__h = []),
        local.__.forEach(function (arg) {
          if (arg.__N) {
            arg.__ = arg.__N;
          }
          arg.u = undefined;
          arg.__N = undefined;
        }))
      : (local.__h.forEach(fn_ec371939),
        local.__h.forEach(fn_f8b704f8),
        (local.__h = []),
        (local_657db3b7_25 = 0)));
  local_657db3b7_27 = local_657db3b7_26;
};
local_f090a36f_15.diffed = function (arg) {
  if (local_2cae01a0_4) {
    local_2cae01a0_4(arg);
  }
  const local = arg.__c;
  if (local && local.__H) {
    local.__H.__h.length &&
      ((local_0f018a95_3.push(local) !== 1 &&
        local_657db3b7_28 === local_f090a36f_15.requestAnimationFrame) ||
        (
          (local_657db3b7_28 = local_f090a36f_15.requestAnimationFrame) ||
          fn_c3d22614
        )(fn_b3de4e17));
    local.__H.__.forEach(function (arg) {
      if (arg.u) {
        arg.__H = arg.u;
      }
      arg.u = undefined;
    });
  }
  local_657db3b7_27 = null;
  local_657db3b7_26 = null;
};
local_f090a36f_15.__c = function (arg, arg_2) {
  arg_2.some(function (arg) {
    try {
      arg.__h.forEach(fn_ec371939);
      arg.__h = arg.__h.filter(function (arg) {
        return !arg.__ || fn_f8b704f8(arg);
      });
    } catch (error) {
      arg_2.some(function (arg) {
        if (arg.__h) {
          arg.__h = [];
        }
      });
      arg_2 = [];
      local_f090a36f_15.__e(error, arg.__v);
    }
  });
  if (local_2cae01a0_5) {
    local_2cae01a0_5(arg, arg_2);
  }
};
local_f090a36f_15.unmount = function (arg) {
  if (local_2cae01a0_6) {
    local_2cae01a0_6(arg);
  }
  let local;
  const local_2 = arg.__c;
  if (local_2 && local_2.__H) {
    local_2.__H.__.forEach(function (arg) {
      try {
        fn_ec371939(arg);
      } catch (error) {
        local = error;
      }
    });
    local_2.__H = undefined;
    if (local) {
      local_f090a36f_15.__e(local, local_2.__v);
    }
  }
};
const local_ba3befec = typeof requestAnimationFrame === "function";
function fn_c3d22614(arg) {
  let local;
  const local_2 = function () {
    clearTimeout(local_3);
    if (local_ba3befec) {
      cancelAnimationFrame(local);
    }
    setTimeout(arg);
  };
  var local_3 = setTimeout(local_2, 35);
  if (local_ba3befec) {
    local = requestAnimationFrame(local_2);
  }
}
function fn_ec371939(arg) {
  const local = local_657db3b7_26;
  const local_2 = arg.__c;
  if (typeof local_2 === "function") {
    arg.__c = undefined;
    local_2();
  }
  local_657db3b7_26 = local;
}
function fn_f8b704f8(arg) {
  const local = local_657db3b7_26;
  arg.__c = arg.__();
  local_657db3b7_26 = local;
}
function fn_3a986a6c(arg, arg_2) {
  return (
    !arg ||
    arg.length !== arg_2.length ||
    arg_2.some(function (arg, arg_2) {
      return arg !== arg[arg_2];
    })
  );
}
function fn_bd290b6f(arg, arg_2) {
  if (typeof arg_2 === "function") {
    return arg_2(arg);
  }
  return arg_2;
}
function fn_be5cf4ce_2(arg, arg_2) {
  for (const local in arg_2) {
    arg[local] = arg_2[local];
  }
  return arg;
}
function fn_6364a171(arg, arg_2) {
  for (const local in arg) {
    if (local !== "__source" && !(local in arg_2)) {
      return true;
    }
  }
  for (const local in arg_2) {
    if (local !== "__source" && arg[local] !== arg_2[local]) {
      return true;
    }
  }
  return false;
}
function fn_fa7edb97(arg, arg_2) {
  const local = arg_2();
  const local_2 = symbol_056({
    t: {
      __: local,
      u: arg_2,
    },
  });
  const local_3 = local_2[0].t;
  const local_4 = local_2[1];
  symbol_028(
    function () {
      local_3.__ = local;
      local_3.u = arg_2;
      if (fn_6802f567(local_3)) {
        local_4({
          t: local_3,
        });
      }
    },
    [arg, local, arg_2],
  );
  symbol_077(
    function () {
      if (fn_6802f567(local_3)) {
        local_4({
          t: local_3,
        });
      }
      return arg(function () {
        if (fn_6802f567(local_3)) {
          local_4({
            t: local_3,
          });
        }
      });
    },
    [arg],
  );
  return local;
}
function fn_6802f567(arg) {
  let local;
  let local_2;
  const local_3 = arg.u;
  const local_4 = arg.__;
  try {
    const local = local_3();
    return !(
      ((local = local_4) === (local_2 = local) &&
        (local !== 0 || 1 / local == 1 / local_2)) ||
      (local != local && local_2 != local_2)
    );
  } catch {
    return true;
  }
}
function fn_bd7bb893(arg) {
  arg();
}
function fn_f354ee7e(arg) {
  return arg;
}
function fn_aba1f681() {
  return [false, fn_bd7bb893];
}
const local_f090a36f_16 = symbol_028;
function fn_183ac9a7(arg, arg_2) {
  this.props = arg;
  this.context = arg_2;
}
function symbol_052(arg, arg_2) {
  function fn(arg) {
    const local = this.props.ref;
    const local_2 = local == arg.ref;
    !local_2 && local && (local.call ? local(null) : (local.current = null));
    if (arg_2) {
      return !arg_2(this.props, arg) || !local_2;
    }
    return fn_6364a171(this.props, arg);
  }
  function fn_2(arg) {
    this.shouldComponentUpdate = fn;
    return fn_ba0330ef(arg, arg);
  }
  fn_2.displayName = `Memo(${arg.displayName || arg.name})`;
  fn_2.prototype.isReactComponent = true;
  fn_2.__f = true;
  fn_2.type = arg;
  return fn_2;
}
(fn_183ac9a7.prototype = new clazz_183a9acd()).isPureReactComponent = true;
fn_183ac9a7.prototype.shouldComponentUpdate = function (arg, arg_2) {
  return fn_6364a171(this.props, arg) || fn_6364a171(this.state, arg_2);
};
const local_2cae01a0_8 = local_657db3b7_2.__b;
local_657db3b7_2.__b = function (arg) {
  if (arg.type && arg.type.__f && arg.ref) {
    arg.props.ref = arg.ref;
    arg.ref = null;
  }
  if (local_2cae01a0_8) {
    local_2cae01a0_8(arg);
  }
};
const local_090e3b51 =
  (typeof Symbol !== "undefined" &&
    Symbol.for &&
    Symbol.for("react.forward_ref")) ||
  3911;
function symbol_044(arg) {
  function fn(arg) {
    const local = fn_be5cf4ce_2({}, arg);
    delete local.ref;
    return arg(local, arg.ref || null);
  }
  fn.$$typeof = local_090e3b51;
  fn.render = arg;
  fn.prototype.isReactComponent = true;
  fn.__f = true;
  fn.displayName = `ForwardRef(${arg.displayName || arg.name})`;
  return fn;
}
const local_22cd1784 = function (arg, arg_2) {
  if (arg == null) {
    return null;
  }
  return fn_c7d3eb90(fn_c7d3eb90(arg).map(arg_2));
};
const local_46ff30d2 = {
  map: local_22cd1784,
  forEach: local_22cd1784,
  count(arg) {
    if (arg) {
      return fn_c7d3eb90(arg).length;
    }
    return 0;
  },
  only(arg) {
    const local = fn_c7d3eb90(arg);
    if (local.length !== 1) {
      throw "Children.only";
    }
    return local[0];
  },
  toArray: fn_c7d3eb90,
};
const local_2cae01a0_9 = local_657db3b7_2.__e;
local_657db3b7_2.__e = function (arg, arg_2, arg_3, arg_4) {
  if (arg.then) {
    let local;
    for (let local = arg_2; (local = local.__);) {
      if ((local = local.__c) && local.__c) {
        if (arg_2.__e == null) {
          arg_2.__e = arg_3.__e;
          arg_2.__k = arg_3.__k;
        }
        return local.__c(arg, arg_2);
      }
    }
  }
  local_2cae01a0_9(arg, arg_2, arg_3, arg_4);
};
const local_2cae01a0_10 = local_657db3b7_2.unmount;
function fn_55832ef8(arg, arg_2, arg_3) {
  if (arg) {
    if (arg.__c && arg.__c.__H) {
      arg.__c.__H.__.forEach(function (arg) {
        if (typeof arg.__c === "function") {
          arg.__c();
        }
      });
      arg.__c.__H = null;
    }
    if ((arg = fn_be5cf4ce_2({}, arg)).__c != null) {
      if (arg.__c.__P === arg_3) {
        arg.__c.__P = arg_2;
      }
      arg.__c.__e = true;
      arg.__c = null;
    }
    arg.__k =
      arg.__k &&
      arg.__k.map(function (arg) {
        return fn_55832ef8(arg, arg_2, arg_3);
      });
  }
  return arg;
}
function fn_66173163(arg, arg_2, arg_3) {
  if (arg && arg_3) {
    arg.__v = null;
    arg.__k =
      arg.__k &&
      arg.__k.map(function (arg) {
        return fn_66173163(arg, arg_2, arg_3);
      });
    if (arg.__c && arg.__c.__P === arg_2) {
      if (arg.__e) {
        arg_3.appendChild(arg.__e);
      }
      arg.__c.__e = true;
      arg.__c.__P = arg_3;
    }
  }
  return arg;
}
function symbol_062() {
  this.__u = 0;
  this.o = null;
  this.__b = null;
}
function fn_bae18ea2(arg) {
  const local = arg.__.__c;
  return local && local.__a && local.__a(arg);
}
function symbol_078(arg) {
  let local;
  let local_2;
  let local_3;
  let local_4 = null;
  function fn(arg) {
    if (!local) {
      (local = arg()).then(
        function (arg) {
          if (arg) {
            local_4 = arg.default || arg;
          }
          local_3 = true;
        },
        function (arg) {
          local_2 = arg;
          local_3 = true;
        },
      );
    }
    if (local_2) {
      throw local_2;
    }
    if (!local_3) {
      throw local;
    }
    if (local_4) {
      return fn_ba0330ef(local_4, arg);
    }
    return null;
  }
  fn.displayName = "Lazy";
  fn.__f = true;
  return fn;
}
function fn_d3fcfea0() {
  this.i = null;
  this.l = null;
}
local_657db3b7_2.unmount = function (arg) {
  const local = arg.__c;
  if (local && local.__R) {
    local.__R();
  }
  if (local && 32 & arg.__u) {
    arg.type = null;
  }
  if (local_2cae01a0_10) {
    local_2cae01a0_10(arg);
  }
};
(symbol_062.prototype = new clazz_183a9acd()).__c = function (arg, arg_2) {
  const local = arg_2.__c;
  const local_2 = this;
  if (local_2.o == null) {
    local_2.o = [];
  }
  local_2.o.push(local);
  const local_3 = fn_bae18ea2(local_2.__v);
  let local_4 = false;
  const local_5 = function () {
    if (!local_4) {
      local_4 = true;
      local.__R = null;
      if (local_3) {
        local_3(local_6);
      } else {
        local_6();
      }
    }
  };
  local.__R = local_5;
  var local_6 = function () {
    if (!--local_2.__u) {
      if (local_2.state.__a) {
        const local = local_2.state.__a;
        local_2.__v.__k[0] = fn_66173163(local, local.__c.__P, local.__c.__O);
      }
      let local;
      for (
        local_2.setState({
          __a: (local_2.__b = null),
        });
        (local = local_2.o.pop());
      ) {
        local.forceUpdate();
      }
    }
  };
  if (!(local_2.__u++ || 32 & arg_2.__u)) {
    local_2.setState({
      __a: (local_2.__b = local_2.__v.__k[0]),
    });
  }
  arg.then(local_5, local_5);
};
symbol_062.prototype.componentWillUnmount = function () {
  this.o = [];
};
symbol_062.prototype.render = function (arg, arg_2) {
  if (this.__b) {
    if (this.__v.__k) {
      const local = document.createElement("div");
      const local_2 = this.__v.__k[0].__c;
      this.__v.__k[0] = fn_55832ef8(
        this.__b,
        local,
        (local_2.__O = local_2.__P),
      );
    }
    this.__b = null;
  }
  const local = arg_2.__a && fn_ba0330ef(symbol_063, null, arg.fallback);
  if (local) {
    local.__u &= -33;
  }
  return [
    fn_ba0330ef(symbol_063, null, arg_2.__a ? null : arg.children),
    local,
  ];
};
const local_742546a5 = function (arg, arg_2, arg_3) {
  if (++arg_3[1] === arg_3[0]) {
    arg.l.delete(arg_2);
  }
  if (
    arg.props.revealOrder &&
    (arg.props.revealOrder[0] !== "t" || !arg.l.size)
  ) {
    for (arg_3 = arg.i; arg_3;) {
      while (arg_3.length > 3) {
        arg_3.pop()();
      }
      if (arg_3[1] < arg_3[0]) {
        break;
      }
      arg.i = arg_3 = arg_3[2];
    }
  }
};
function fn_9401c323(arg) {
  this.getChildContext = function () {
    return arg.context;
  };
  return arg.children;
}
function fn_a57d1531(arg) {
  const local = this;
  const local_2 = arg.h;
  local.componentWillUnmount = function () {
    fn_5b06483a(null, local.v);
    local.v = null;
    local.h = null;
  };
  if (local.h && local.h !== local_2) {
    local.componentWillUnmount();
  }
  if (!local.v) {
    for (
      var local_3 = local.__v;
      local_3 !== null && !local_3.__m && local_3.__ !== null;
    ) {
      local_3 = local_3.__;
    }
    local.h = local_2;
    local.v = {
      nodeType: 1,
      parentNode: local_2,
      childNodes: [],
      __k: {
        __m: local_3.__m,
      },
      contains() {
        return true;
      },
      insertBefore(arg, arg_2) {
        this.childNodes.push(arg);
        local.h.insertBefore(arg, arg_2);
      },
      removeChild(arg) {
        this.childNodes.splice(this.childNodes.indexOf(arg) >>> 1, 1);
        local.h.removeChild(arg);
      },
    };
  }
  fn_5b06483a(
    fn_ba0330ef(
      fn_9401c323,
      {
        context: local.context,
      },
      arg.__v,
    ),
    local.v,
  );
}
function symbol_001(arg, arg_2) {
  const local = fn_ba0330ef(fn_a57d1531, {
    __v: arg,
    h: arg_2,
  });
  local.containerInfo = arg_2;
  return local;
}
(fn_d3fcfea0.prototype = new clazz_183a9acd()).__a = function (arg) {
  const local = this;
  const local_2 = fn_bae18ea2(local.__v);
  const local_3 = local.l.get(arg);
  local_3[0]++;
  return function (arg) {
    const local = function () {
      if (local.props.revealOrder) {
        local_3.push(arg);
        local_742546a5(local, arg, local_3);
      } else {
        arg();
      }
    };
    if (local_2) {
      local_2(local);
    } else {
      local();
    }
  };
};
fn_d3fcfea0.prototype.render = function (arg) {
  this.i = null;
  this.l = new Map();
  const local = fn_c7d3eb90(arg.children);
  if (arg.revealOrder && arg.revealOrder[0] === "b") {
    local.reverse();
  }
  for (let local = local.length; local--;) {
    this.l.set(local[local], (this.i = [1, 0, this.i]));
  }
  return arg.children;
};
fn_d3fcfea0.prototype.componentDidUpdate =
  fn_d3fcfea0.prototype.componentDidMount = function () {
    const local = this;
    this.l.forEach(function (arg, arg_2) {
      local_742546a5(local, arg_2, arg);
    });
  };
const local_04d34787 =
  (typeof Symbol !== "undefined" &&
    Symbol.for &&
    Symbol.for("react.element")) ||
  60103;
const local_967d76b0 =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
const local_3e372c83 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const local_a6071b18 = /[A-Z0-9]/g;
const local_378539c9 = typeof document !== "undefined";
const local_550a1b14 = function (arg) {
  return (
    typeof Symbol !== "undefined" && typeof Symbol() === "symbol"
      ? /fil|che|rad/
      : /fil|che|ra/
  ).test(arg);
};
function fn_826376a5(arg, arg_2, arg_3) {
  if (arg_2.__k == null) {
    arg_2.textContent = "";
  }
  fn_5b06483a(arg, arg_2);
  if (typeof arg_3 === "function") {
    arg_3();
  }
  if (arg) {
    return arg.__c;
  }
  return null;
}
function fn_618cc22a(arg, arg_2, arg_3) {
  fn_73211618(arg, arg_2);
  if (typeof arg_3 === "function") {
    arg_3();
  }
  if (arg) {
    return arg.__c;
  }
  return null;
}
clazz_183a9acd.prototype.isReactComponent = {};
[
  "componentWillMount",
  "componentWillReceiveProps",
  "componentWillUpdate",
].forEach(function (arg) {
  Object.defineProperty(clazz_183a9acd.prototype, arg, {
    configurable: true,
    get() {
      return this[`UNSAFE_${arg}`];
    },
    set(arg) {
      Object.defineProperty(this, arg, {
        configurable: true,
        writable: true,
        value: arg,
      });
    },
  });
});
const local_2cae01a0_11 = local_657db3b7_2.event;
function fn_40cd9af9() {}
function fn_758ba590() {
  return this.cancelBubble;
}
function fn_758ba590_2() {
  return this.defaultPrevented;
}
local_657db3b7_2.event = function (arg) {
  if (local_2cae01a0_11) {
    arg = local_2cae01a0_11(arg);
  }
  arg.persist = fn_40cd9af9;
  arg.isPropagationStopped = fn_758ba590;
  arg.isDefaultPrevented = fn_758ba590_2;
  return (arg.nativeEvent = arg);
};
let local_657db3b7_29;
const local_9f478cd9 = {
  enumerable: false,
  configurable: true,
  get() {
    return this.class;
  },
};
const local_2cae01a0_12 = local_657db3b7_2.vnode;
local_657db3b7_2.vnode = function (arg) {
  if (typeof arg.type === "string") {
    (function (arg) {
      const local = arg.props;
      const local_2 = arg.type;
      const local_3 = {};
      const local_4 = local_2.indexOf("-") === -1;
      for (let local in local) {
        let local = local[local];
        if (!(
          (local === "value" && "defaultValue" in local && local == null) ||
          (local_378539c9 && local === "children" && local_2 === "noscript") ||
          local === "class" ||
          local === "className"
        )) {
          let local = local.toLowerCase();
          if (
            local === "defaultValue" &&
            "value" in local &&
            local.value == null
          ) {
            local = "value";
          } else if (local === "download" && local === true) {
            local = "";
          } else if (local === "translate" && local === "no") {
            local = false;
          } else if (local[0] === "o" && local[1] === "n") {
            if (local === "ondoubleclick") {
              local = "ondblclick";
            } else if (
              local !== "onchange" ||
              (local_2 !== "input" && local_2 !== "textarea") ||
              local_550a1b14(local.type)
            ) {
              if (local === "onfocus") {
                local = "onfocusin";
              } else if (local === "onblur") {
                local = "onfocusout";
              } else if (local_3e372c83.test(local)) {
                local = local;
              }
            } else {
              local = local = "oninput";
            }
          } else if (local_4 && local_967d76b0.test(local)) {
            local = local.replace(local_a6071b18, "-$&").toLowerCase();
          } else if (local === null) {
            local = undefined;
          }
          if (local === "oninput" && local_3[(local = local)]) {
            local = "oninputCapture";
          }
          local_3[local] = local;
        }
      }
      if (
        local_2 == "select" &&
        local_3.multiple &&
        Array.isArray(local_3.value)
      ) {
        local_3.value = fn_c7d3eb90(local.children).forEach(function (arg) {
          arg.props.selected = local_3.value.indexOf(arg.props.value) != -1;
        });
      }
      if (local_2 == "select" && local_3.defaultValue != null) {
        local_3.value = fn_c7d3eb90(local.children).forEach(function (arg) {
          arg.props.selected = local_3.multiple
            ? local_3.defaultValue.indexOf(arg.props.value) != -1
            : local_3.defaultValue == arg.props.value;
        });
      }
      if (local.class && !local.className) {
        local_3.class = local.class;
        Object.defineProperty(local_3, "className", local_9f478cd9);
      } else if (
        (local.className && !local.class) ||
        (local.class && local.className)
      ) {
        local_3.class = local_3.className = local.className;
      }
      arg.props = local_3;
    })(arg);
  }
  arg.$$typeof = local_04d34787;
  if (local_2cae01a0_12) {
    local_2cae01a0_12(arg);
  }
};
const local_2cae01a0_13 = local_657db3b7_2.__r;
local_657db3b7_2.__r = function (arg) {
  if (local_2cae01a0_13) {
    local_2cae01a0_13(arg);
  }
  local_657db3b7_29 = arg.__c;
};
const local_2cae01a0_14 = local_657db3b7_2.diffed;
local_657db3b7_2.diffed = function (arg) {
  if (local_2cae01a0_14) {
    local_2cae01a0_14(arg);
  }
  const local = arg.props;
  const local_2 = arg.__e;
  if (
    local_2 != null &&
    arg.type === "textarea" &&
    "value" in local &&
    local.value !== local_2.value
  ) {
    local_2.value = local.value == null ? "" : local.value;
  }
  local_657db3b7_29 = null;
};
const local_51c02428 = {
  ReactCurrentDispatcher: {
    current: {
      readContext(arg) {
        return local_657db3b7_29.__n[arg.__c].props.value;
      },
      useCallback: symbol_069,
      useContext: fn_4eb8acde,
      useDebugValue: fn_b0431071,
      useDeferredValue: fn_f354ee7e,
      useEffect: symbol_077,
      useId: fn_9c941575,
      useImperativeHandle: symbol_046,
      useInsertionEffect: local_f090a36f_16,
      useLayoutEffect: symbol_028,
      useMemo: symbol_021,
      useReducer: fn_73273d2f,
      useRef: symbol_002,
      useState: symbol_056,
      useSyncExternalStore: fn_fa7edb97,
      useTransition: fn_aba1f681,
    },
  },
};
const local_8f06da6d = "18.3.1";
function fn_d0081f84(arg) {
  return fn_ba0330ef.bind(null, arg);
}
function fn_86fd8a5a(arg) {
  return !!arg && arg.$$typeof === local_04d34787;
}
function fn_49de1e8b(arg) {
  return fn_86fd8a5a(arg) && arg.type === symbol_063;
}
function fn_de2e34c7(arg) {
  return (
    !!arg &&
    !!arg.displayName &&
    (typeof arg.displayName === "string" ||
      arg.displayName instanceof String) &&
    arg.displayName.startsWith("Memo(")
  );
}
function fn_4c6054db(arg) {
  if (fn_86fd8a5a(arg)) {
    return fn_fa5fc2cb.apply(null, arguments);
  }
  return arg;
}
function fn_150723fa(arg) {
  return !!arg.__k && (fn_5b06483a(null, arg), true);
}
function fn_33a67bf0(arg) {
  return (arg && (arg.base || (arg.nodeType === 1 && arg))) || null;
}
const local_0d71927e = function (arg, arg_2) {
  return arg(arg_2);
};
const local_0d71927e_2 = function (arg, arg_2) {
  return arg(arg_2);
};
const local_f090a36f_17 = symbol_063;
const local_f090a36f_18 = fn_86fd8a5a;
const local_eff139f9 = {
  useState: symbol_056,
  useId: fn_9c941575,
  useReducer: fn_73273d2f,
  useEffect: symbol_077,
  useLayoutEffect: symbol_028,
  useInsertionEffect: local_f090a36f_16,
  useTransition: fn_aba1f681,
  useDeferredValue: fn_f354ee7e,
  useSyncExternalStore: fn_fa7edb97,
  startTransition: fn_bd7bb893,
  useRef: symbol_002,
  useImperativeHandle: symbol_046,
  useMemo: symbol_021,
  useCallback: symbol_069,
  useContext: fn_4eb8acde,
  useDebugValue: fn_b0431071,
  version: "18.3.1",
  Children: local_46ff30d2,
  render: fn_826376a5,
  hydrate: fn_618cc22a,
  unmountComponentAtNode: fn_150723fa,
  createPortal: symbol_001,
  createElement: fn_ba0330ef,
  createContext: fn_c05a86e1,
  createFactory: fn_d0081f84,
  cloneElement: fn_4c6054db,
  createRef: fn_e91fa79b,
  Fragment: symbol_063,
  isValidElement: fn_86fd8a5a,
  isElement: local_f090a36f_18,
  isFragment: fn_49de1e8b,
  isMemo: fn_de2e34c7,
  findDOMNode: fn_33a67bf0,
  Component: clazz_183a9acd,
  PureComponent: fn_183ac9a7,
  memo: symbol_052,
  forwardRef: symbol_044,
  flushSync: local_0d71927e_2,
  unstable_batchedUpdates: local_0d71927e,
  StrictMode: local_f090a36f_17,
  Suspense: symbol_062,
  SuspenseList: fn_d3fcfea0,
  lazy: symbol_078,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: local_51c02428,
};
function fn_55d335c1(arg) {
  const local = {
    ...arg,
  };
  fn_bb415fac(local, "react");
  fn_2e3776e9("react", {
    version: local_8f06da6d,
  });
  return fn_fb5a2df9(local);
}
function fn_e8c3ea08(arg) {
  const local = arg.match(/^([^.]+)/);
  return local !== null && parseInt(local[0]) >= 17;
}
function fn_30d8cc23(arg, arg_2) {
  const local = new WeakSet();
  function fn(arg, arg_2) {
    if (!local.has(arg)) {
      if (arg.cause) {
        local.add(arg);
        return fn(arg.cause, arg_2);
      }
      arg.cause = arg_2;
    }
  }
  fn(arg, arg_2);
}
function fn_90d8e424(arg, { componentStack: arg_2 }, arg_3) {
  if (fn_e8c3ea08(local_8f06da6d) && fn_7b60edb8(arg) && arg_2) {
    const local = new Error(arg.message);
    local.name = `React ErrorBoundary ${arg.name}`;
    local.stack = arg_2;
    fn_30d8cc23(arg, local);
  }
  return fn_ded9c9e3((arg) => {
    arg.setContext("react", {
      componentStack: arg_2,
    });
    return fn_0e42a633(arg, arg_3);
  });
}
const local_23bb5d69_4 =
  typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const local_501af22c = {
  componentStack: null,
  error: null,
  eventId: null,
};
class clazz_b30b8e71 extends clazz_183a9acd {
  constructor(arg) {
    super(arg);
    this.state = local_501af22c;
    this._openFallbackReportDialog = true;
    const local = fn_df50106e();
    if (local && arg.showDialog) {
      this._openFallbackReportDialog = false;
      this._cleanupHook = local.on("afterSendEvent", (arg) => {
        if (
          !arg.type &&
          this._lastEventId &&
          arg.event_id === this._lastEventId
        ) {
          fn_92c4c017({
            ...arg.dialogOptions,
            eventId: this._lastEventId,
          });
        }
      });
    }
  }
  componentDidCatch(arg, arg_2) {
    const { componentStack: local } = arg_2;
    const {
      beforeCapture: local_2,
      onError: local_3,
      showDialog: local_4,
      dialogOptions: local_5,
    } = this.props;
    fn_ded9c9e3((arg) => {
      if (local_2) {
        local_2(arg, arg, local);
      }
      const local =
        this.props.handled != null ? this.props.handled : !!this.props.fallback;
      const local_2 = fn_90d8e424(arg, arg_2, {
        mechanism: {
          handled: local,
          type: "auto.function.react.error_boundary",
        },
      });
      if (local_3) {
        local_3(arg, local, local_2);
      }
      if (local_4) {
        this._lastEventId = local_2;
        if (this._openFallbackReportDialog) {
          fn_92c4c017({
            ...local_5,
            eventId: local_2,
          });
        }
      }
      this.setState({
        error: arg,
        componentStack: local,
        eventId: local_2,
      });
    });
  }
  componentDidMount() {
    const { onMount: local } = this.props;
    if (local) {
      local();
    }
  }
  componentWillUnmount() {
    const {
      error: local,
      componentStack: local_2,
      eventId: local_3,
    } = this.state;
    const { onUnmount: local_4 } = this.props;
    local_4 &&
      (this.state === local_501af22c
        ? local_4(null, null, null)
        : local_4(local, local_2, local_3));
    if (this._cleanupHook) {
      this._cleanupHook();
      this._cleanupHook = undefined;
    }
  }
  resetErrorBoundary() {
    const { onReset: local } = this.props;
    const {
      error: local_2,
      componentStack: local_3,
      eventId: local_4,
    } = this.state;
    if (local) {
      local(local_2, local_3, local_4);
    }
    this.setState(local_501af22c);
  }
  render() {
    const { fallback: local, children: local_2 } = this.props;
    const local_3 = this.state;
    if (local_3.componentStack === null) {
      if (typeof local_2 === "function") {
        return local_2();
      }
      return local_2;
    }
    const local_4 =
      typeof local === "function"
        ? fn_ba0330ef(local, {
            error: local_3.error,
            componentStack: local_3.componentStack,
            resetError: () => this.resetErrorBoundary(),
            eventId: local_3.eventId,
          })
        : local;
    if (fn_86fd8a5a(local_4)) {
      return local_4;
    }
    return (
      local &&
        local_23bb5d69_4 &&
        local_5a6ba1bf.warn("fallback did not produce a valid ReactElement"),
      null
    );
  }
}
fn_55d335c1({
  dsn: "https://693c388031bcee4cd87e917055abf6a2@sentry.xn--d1ah4a.com/2",
  environment: "production",
  enabled: true,
  sendDefaultPii: true,
  tracesSampleRate: 0.1,
  release: "1.1.2",
});
function fn_909ba931(arg) {
  return {
    render(arg) {
      fn_826376a5(arg, arg);
    },
    unmount() {
      fn_150723fa(arg);
    },
  };
}
const local_e454ea41 = "modulepreload";
const local_62d44f1c = function (arg) {
  return `/${arg}`;
};
const local_603ced16_6 = {};
const symbol_064 = function (arg, arg_2, arg_3) {
  let local = Promise.resolve();
  if (arg_2 && arg_2.length > 0) {
    let local = function (arg) {
      return Promise.all(
        arg.map((arg) =>
          Promise.resolve(arg).then(
            (arg) => ({
              status: "fulfilled",
              value: arg,
            }),
            (arg) => ({
              status: "rejected",
              reason: arg,
            }),
          ),
        ),
      );
    };
    document.getElementsByTagName("link");
    const local_2 = document.querySelector("meta[property=csp-nonce]");
    const local_3 = local_2?.nonce || local_2?.getAttribute("nonce");
    local = local(
      arg_2.map((arg) => {
        arg = local_62d44f1c(arg);
        if (arg in local_603ced16_6) {
          return;
        }
        local_603ced16_6[arg] = true;
        const local = arg.endsWith(".css");
        const local_2 = local ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${arg}"]${local_2}`)) {
          return;
        }
        const local_3 = document.createElement("link");
        local_3.rel = local ? "stylesheet" : local_e454ea41;
        if (!local) {
          local_3.as = "script";
        }
        local_3.crossOrigin = "";
        local_3.href = arg;
        if (local_3) {
          local_3.setAttribute("nonce", local_3);
        }
        document.head.appendChild(local_3);
        if (local) {
          return new Promise((arg, arg_2) => {
            local_3.addEventListener("load", arg);
            local_3.addEventListener("error", () =>
              arg_2(new Error(`Unable to preload CSS for ${arg}`)),
            );
          });
        }
      }),
    );
  }
  function fn(arg) {
    const local = new Event("vite:preloadError", {
      cancelable: true,
    });
    local.payload = arg;
    window.dispatchEvent(local);
    if (!local.defaultPrevented) {
      throw arg;
    }
  }
  return local.then((arg) => {
    for (const local of arg || []) {
      if (local.status === "rejected") {
        fn(local.reason);
      }
    }
    return arg().catch(fn);
  });
};
const local_603ced16_7 = {};
function fn_be5cf4ce_3(arg, arg_2) {
  for (const local in arg_2) {
    arg[local] = arg_2[local];
  }
  return arg;
}
function fn_df383351(arg, arg_2, arg_3) {
  let local;
  const local_2 = /(?:\?([^#]*))?(#.*)?$/;
  const local_3 = arg.match(local_2);
  const local_4 = {};
  if (local_3 && local_3[1]) {
    for (
      let local = local_3[1].split("&"), local_2 = 0;
      local_2 < local.length;
      local_2++
    ) {
      const local = local[local_2].split("=");
      local_4[decodeURIComponent(local[0])] = decodeURIComponent(
        local.slice(1).join("="),
      );
    }
  }
  arg = fn_82f230d6(arg.replace(local_2, ""));
  arg_2 = fn_82f230d6(arg_2 || "");
  for (
    let local = Math.max(arg.length, arg_2.length), local_2 = 0;
    local_2 < local;
    local_2++
  ) {
    if (arg_2[local_2] && arg_2[local_2].charAt(0) === ":") {
      const local = arg_2[local_2].replace(/(^:|[+*?]+$)/g, "");
      const local_2 =
        (arg_2[local_2].match(/[+*?]+$/) || local_603ced16_7)[0] || "";
      const local_3 = ~local_2.indexOf("+");
      const local_4 = ~local_2.indexOf("*");
      const local_5 = arg[local_2] || "";
      if (!local_5 && !local_4 && (local_2.indexOf("?") < 0 || local_3)) {
        local = false;
        break;
      }
      local_4[local] = decodeURIComponent(local_5);
      if (local_3 || local_4) {
        local_4[local] = arg
          .slice(local_2)
          .map(decodeURIComponent)
          .join("./site/index.html");
        break;
      }
    } else if (arg_2[local_2] !== arg[local_2]) {
      local = false;
      break;
    }
  }
  return (arg_3.default === true || local !== false) && local_4;
}
function fn_686461a3(arg, arg_2) {
  if (arg.rank < arg_2.rank) {
    return 1;
  }
  if (arg.rank > arg_2.rank) {
    return -1;
  }
  return arg.index - arg_2.index;
}
function fn_6f0e1c15(arg, arg_2) {
  arg.index = arg_2;
  arg.rank = (function (arg) {
    if (arg.props.default) {
      return 0;
    }
    return fn_82f230d6(arg.props.path).map(fn_6da43139).join("");
  })(arg);
  return arg.props;
}
function fn_82f230d6(arg) {
  return arg.replace(/(^\/+|\/+$)/g, "").split("./site/index.html");
}
function fn_6da43139(arg) {
  if (arg.charAt(0) == ":") {
    return 1 + "*+?".indexOf(arg.charAt(arg.length - 1)) || 4;
  }
  return 5;
}
const local_603ced16_8 = {};
const local_0f018a95_4 = [];
const local_0f018a95_5 = [];
let local_0a9fda83_3 = null;
const local_2b32041e = {
  url: fn_744ccf64(),
};
const local_d95e5548 = fn_c05a86e1(local_2b32041e);
function symbol_045() {
  const local = fn_4eb8acde(local_d95e5548);
  if (local === local_2b32041e) {
    const local = symbol_056()[1];
    symbol_077(function () {
      local_0f018a95_5.push(local);
      return function () {
        return local_0f018a95_5.splice(local_0f018a95_5.indexOf(local), 1);
      };
    }, []);
  }
  return [local, symbol_057];
}
function fn_744ccf64() {
  let local;
  return (
    "" +
    ((local =
      local_0a9fda83_3 && local_0a9fda83_3.location
        ? local_0a9fda83_3.location
        : local_0a9fda83_3 && local_0a9fda83_3.getCurrentLocation
          ? local_0a9fda83_3.getCurrentLocation()
          : typeof location !== "undefined"
            ? location
            : local_603ced16_8).pathname || "") +
    (local.search || "")
  );
}
function symbol_057(arg, arg_2 = false) {
  if (typeof arg !== "string" && arg.url) {
    arg_2 = arg.replace;
    arg = arg.url;
  }
  if (
    (function (arg) {
      for (let local = local_0f018a95_4.length; local--;) {
        if (local_0f018a95_4[local].canRoute(arg)) {
          return true;
        }
      }
      return false;
    })(arg)
  ) {
    (function (arg, arg_2 = "push") {
      if (local_0a9fda83_3 && local_0a9fda83_3[arg_2]) {
        local_0a9fda83_3[arg_2](arg);
      } else if (typeof history !== "undefined" && history[`${arg_2}State`]) {
        history[`${arg_2}State`](null, null, arg);
      }
    })(arg, arg_2 ? "replace" : "push");
  }
  return fn_8e6dbad8(arg);
}
function fn_8e6dbad8(arg) {
  let local = false;
  for (let local = 0; local < local_0f018a95_4.length; local++) {
    if (local_0f018a95_4[local].routeTo(arg)) {
      local = true;
    }
  }
  return local;
}
function fn_96a6df44(arg) {
  if (arg && arg.getAttribute) {
    const local = arg.getAttribute("href");
    const local_2 = arg.getAttribute("target");
    if (
      local &&
      local.match(/^\//g) &&
      (!local_2 || local_2.match(/^_?self$/i))
    ) {
      return symbol_057(local);
    }
  }
}
function fn_a6953c67(arg) {
  if (arg.stopImmediatePropagation) {
    arg.stopImmediatePropagation();
  }
  if (arg.stopPropagation) {
    arg.stopPropagation();
  }
  arg.preventDefault();
  return false;
}
function fn_f7a9e663(arg) {
  if (!(
    arg.ctrlKey ||
    arg.metaKey ||
    arg.altKey ||
    arg.shiftKey ||
    arg.button
  )) {
    let local = arg.target;
    do {
      if (local.localName === "a" && local.getAttribute("href")) {
        if (local.hasAttribute("data-native") || local.hasAttribute("native")) {
          return;
        }
        if (fn_96a6df44(local)) {
          return fn_a6953c67(arg);
        }
      }
    } while ((local = local.parentNode));
  }
}
let local_9b12006c_2 = false;
function fn_1889606d(arg) {
  if (arg.history) {
    local_0a9fda83_3 = arg.history;
  }
  this.state = {
    url: arg.url || fn_744ccf64(),
  };
}
fn_be5cf4ce_3((fn_1889606d.prototype = new clazz_183a9acd()), {
  shouldComponentUpdate(arg) {
    return (
      arg.static !== true ||
      arg.url !== this.props.url ||
      arg.onChange !== this.props.onChange
    );
  },
  canRoute(arg) {
    const local = fn_c7d3eb90(this.props.children);
    return this.g(local, arg) !== undefined;
  },
  routeTo(arg) {
    this.setState({
      url: arg,
    });
    const local = this.canRoute(arg);
    if (!this.p) {
      this.forceUpdate();
    }
    return local;
  },
  componentWillMount() {
    this.p = true;
  },
  componentDidMount() {
    const local = this;
    if (!local_9b12006c_2) {
      local_9b12006c_2 = true;
      if (!local_0a9fda83_3) {
        addEventListener("popstate", function () {
          fn_8e6dbad8(fn_744ccf64());
        });
      }
      addEventListener("click", fn_f7a9e663);
    }
    local_0f018a95_4.push(this);
    if (local_0a9fda83_3) {
      this.u = local_0a9fda83_3.listen(function (arg) {
        const local = arg.location || arg;
        local.routeTo("" + (local.pathname || "") + (local.search || ""));
      });
    }
    this.p = false;
  },
  componentWillUnmount() {
    if (typeof this.u === "function") {
      this.u();
    }
    local_0f018a95_4.splice(local_0f018a95_4.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(arg, arg_2) {
    arg = arg.filter(fn_6f0e1c15).sort(fn_686461a3);
    for (let local = 0; local < arg.length; local++) {
      const local = arg[local];
      const local_2 = fn_df383351(arg_2, local.props.path, local.props);
      if (local_2) {
        return [local, local_2];
      }
    }
  },
  render(arg, arg_2) {
    let local;
    let local_2;
    const local_3 = arg.onChange;
    const local_4 = arg_2.url;
    let local_5 = this.c;
    const local_6 = this.g(fn_c7d3eb90(arg.children), local_4);
    if (local_6) {
      local_2 = fn_fa5fc2cb(
        local_6[0],
        fn_be5cf4ce_3(
          fn_be5cf4ce_3(
            {
              url: local_4,
              matches: (local = local_6[1]),
            },
            local,
          ),
          {
            key: undefined,
            ref: undefined,
          },
        ),
      );
    }
    if (local_4 !== (local_5 && local_5.url)) {
      fn_be5cf4ce_3(
        local_2b32041e,
        (local_5 = this.c =
          {
            url: local_4,
            previous: local_5 && local_5.url,
            current: local_2,
            path: local_2 ? local_2.props.path : null,
            matches: local,
          }),
      );
      local_5.router = this;
      local_5.active = local_2 ? [local_2] : [];
      for (let local = local_0f018a95_5.length; local--;) {
        local_0f018a95_5[local]({});
      }
      if (typeof local_3 === "function") {
        local_3(local_5);
      }
    }
    return fn_ba0330ef(
      local_d95e5548.Provider,
      {
        value: local_5,
      },
      local_2,
    );
  },
});
const local_54474213 = (arg) => {
  let local;
  const local_2 = new Set();
  const local_3 = (arg, arg_2) => {
    const local = typeof arg === "function" ? arg(local) : arg;
    if (!Object.is(local, local)) {
      const local = local;
      local =
        (arg_2 ?? (typeof local !== "object" || local === null))
          ? local
          : {
              ...local,
              ...local,
            };
      local_2.forEach((arg) => arg(local, local));
    }
  };
  const local_4 = () => local;
  const local_5 = {
    setState: local_3,
    getState: local_4,
    getInitialState: () => local_6,
    subscribe: (arg) => {
      local_2.add(arg);
      return () => local_2.delete(arg);
    },
  };
  const local_6 = (local = arg(local_3, local_4, local_5));
  return local_5;
};
const local_7d651640 = (arg) => {
  if (arg) {
    return local_54474213(arg);
  }
  return local_54474213;
};
const local_63a20886 = (arg) => arg;
function fn_9c3e714b(arg, arg_2 = local_63a20886) {
  const local = local_eff139f9.useSyncExternalStore(
    arg.subscribe,
    local_eff139f9.useCallback(() => arg_2(arg.getState()), [arg, arg_2]),
    local_eff139f9.useCallback(
      () => arg_2(arg.getInitialState()),
      [arg, arg_2],
    ),
  );
  local_eff139f9.useDebugValue(local);
  return local;
}
const local_f5cbdd13 = (arg) => {
  const local = local_7d651640(arg);
  const local_2 = (arg) => fn_9c3e714b(local, arg);
  Object.assign(local_2, local);
  return local_2;
};
export const local_7d651640_2 = (arg) => {
  if (arg) {
    return local_f5cbdd13(arg);
  }
  return local_f5cbdd13;
};
function fn_fe2ed958(arg, arg_2) {
  let local;
  try {
    local = arg();
  } catch {
    return;
  }
  return {
    getItem: (arg) => {
      var local;
      const local_2 = (arg) => {
        if (arg === null) {
          return null;
        }
        return JSON.parse(arg, undefined);
      };
      const local_3 = (local = local.getItem(arg)) != null ? local : null;
      if (local_3 instanceof Promise) {
        return local_3.then(local_2);
      }
      return local_2(local_3);
    },
    setItem: (arg, arg_2) =>
      local.setItem(arg, JSON.stringify(arg_2, undefined)),
    removeItem: (arg) => local.removeItem(arg),
  };
}
const local_9dbd4d0a = (arg) => (arg) => {
  try {
    const local = arg(arg);
    if (local instanceof Promise) {
      return local;
    }
    return {
      then(arg) {
        return local_9dbd4d0a(arg)(local);
      },
      catch(arg) {
        return this;
      },
    };
  } catch (error) {
    return {
      then(arg) {
        return this;
      },
      catch(arg) {
        return local_9dbd4d0a(arg)(error);
      },
    };
  }
};
const local_7f0135d4 = (arg, arg_2) => (arg, arg_2, arg_3) => {
  let local = {
    storage: fn_fe2ed958(() => localStorage),
    partialize: (arg) => arg,
    version: 0,
    merge: (arg, arg_2) => ({
      ...arg_2,
      ...arg,
    }),
    ...arg_2,
  };
  let local_2 = false;
  const local_3 = new Set();
  const local_4 = new Set();
  let local_5 = local.storage;
  if (!local_5) {
    return arg(
      (...arg) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${local.name}', the given storage is currently unavailable.`,
        );
        arg(...arg);
      },
      arg_2,
      arg_3,
    );
  }
  const local_6 = () => {
    const local = local.partialize({
      ...arg_2(),
    });
    return local_5.setItem(local.name, {
      state: local,
      version: local.version,
    });
  };
  const local_7 = arg_3.setState;
  arg_3.setState = (arg, arg_2) => {
    local_7(arg, arg_2);
    return local_6();
  };
  const local_8 = arg(
    (...arg) => {
      arg(...arg);
      return local_6();
    },
    arg_2,
    arg_3,
  );
  arg_3.getInitialState = () => local_8;
  let local_9;
  const local_10 = () => {
    var local;
    var local_2;
    if (!local_5) {
      return;
    }
    local_2 = false;
    local_3.forEach((arg) => {
      var local;
      return arg((local = arg_2()) != null ? local : local_8);
    });
    const local_3 =
      ((local_2 = local.onRehydrateStorage) == null
        ? undefined
        : local_2.call(local, (local = arg_2()) != null ? local : local_8)) ||
      undefined;
    return local_9dbd4d0a(local_5.getItem.bind(local_5))(local.name)
      .then((arg) => {
        if (arg) {
          if (
            typeof arg.version === "number" &&
            arg.version !== local.version
          ) {
            if (local.migrate) {
              const local = local.migrate(arg.state, arg.version);
              if (local instanceof Promise) {
                return local.then((arg) => [true, arg]);
              }
              return [true, local];
            }
            console.error(
              "State loaded from storage couldn't be migrated since no migrate function was provided",
            );
          } else {
            return [false, arg.state];
          }
        }
        return [false, undefined];
      })
      .then((arg) => {
        var local;
        const [local_2, local_3] = arg;
        local_9 = local.merge(
          local_3,
          (local = arg_2()) != null ? local : local_8,
        );
        arg(local_9, true);
        if (local_2) {
          return local_6();
        }
      })
      .then(() => {
        local_3?.(local_9, undefined);
        local_9 = arg_2();
        local_2 = true;
        local_4.forEach((arg) => arg(local_9));
      })
      .catch((arg) => {
        local_3?.(undefined, arg);
      });
  };
  arg_3.persist = {
    setOptions: (arg) => {
      local = {
        ...local,
        ...arg,
      };
      if (arg.storage) {
        local_5 = arg.storage;
      }
    },
    clearStorage: () => {
      local_5?.removeItem(local.name);
    },
    getOptions: () => local,
    rehydrate: () => local_10(),
    hasHydrated: () => local_2,
    onHydrate: (arg) => {
      local_3.add(arg);
      return () => {
        local_3.delete(arg);
      };
    },
    onFinishHydration: (arg) => {
      local_4.add(arg);
      return () => {
        local_4.delete(arg);
      };
    },
  };
  if (!local.skipHydration) {
    local_10();
  }
  return local_9 || local_8;
};
const symbol_042 = local_7f0135d4;
const local_aac74809 = local_7d651640_2((arg, arg_2) => ({
  isOpen: false,
  images: [],
  initialIndex: 0,
  sourceRect: null,
  resolveSourceRect: null,
  session: 0,
  zoomable: false,
  thumbs: false,
  open: (arg, arg_2 = 0, arg_3 = null, arg_4 = null, arg_5) =>
    arg({
      isOpen: true,
      images: arg,
      initialIndex: arg_2,
      sourceRect: arg_3,
      resolveSourceRect: arg_4,
      zoomable: arg_5?.zoomable ?? false,
      thumbs: arg_5?.thumbs ?? false,
      session: arg_2().session + 1,
    }),
  close: (arg) => {
    if (!(arg !== undefined && arg !== arg_2().session)) {
      arg({
        isOpen: false,
        images: [],
        initialIndex: 0,
        sourceRect: null,
        resolveSourceRect: null,
        zoomable: false,
        thumbs: false,
      });
    }
  },
}));
const symbol_029 = local_7d651640_2((arg, arg_2) => ({
  isOpen: false,
  options: null,
  session: 0,
  open: (arg) =>
    arg({
      isOpen: true,
      options: arg,
      session: arg_2().session + 1,
    }),
  close: () =>
    arg({
      isOpen: false,
      options: null,
    }),
}));
const symbol_019 = local_7d651640_2((arg, arg_2) => ({
  navigatedInApp: false,
  markNavigated: () => {
    if (!arg_2().navigatedInApp) {
      arg({
        navigatedInApp: true,
      });
    }
  },
}));
const symbol_009 = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
};
function symbol_076(arg) {
  return (
    arg instanceof Error &&
    "status" in arg &&
    "code" in arg &&
    arg.name === "ApiError"
  );
}
const symbol_037 = {
  BAD_REQUEST: "BAD_REQUEST",
  UNAUTHORIZED: "UNAUTHORIZED",
  ACCESS_DENIED: "ACCESS_DENIED",
  ENTITY_NOT_FOUND: "ENTITY_NOT_FOUND",
  ENTITY_ALREADY_EXISTS: "ENTITY_ALREADY_EXISTS",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  BUSINESS_RULE_VIOLATION: "BUSINESS_RULE_VIOLATION",
  RATE_LIMIT_EXCEEDED: "RATE_LIMIT_EXCEEDED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
  NETWORK_ERROR: "NETWORK_ERROR",
  TIMEOUT: "TIMEOUT",
  CAPTCHA_FAILED: "CAPTCHA_FAILED",
  OTP_INVALID: "OTP_INVALID",
  ACCOUNT_DEACTIVATED: "ACCOUNT_DEACTIVATED",
  ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: "ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED",
  ACCOUNT_INVALID_CREDENTIALS: "ACCOUNT_INVALID_CREDENTIALS",
  ACCOUNT_TEMPORARILY_LOCKED: "ACCOUNT_TEMPORARILY_LOCKED",
  ACCOUNT_CURRENT_PASSWORD_INCORRECT: "ACCOUNT_CURRENT_PASSWORD_INCORRECT",
  SESSION_EXPIRED: "SESSION_EXPIRED",
  SESSION_REVOKED: "SESSION_REVOKED",
  SESSION_INVALID_REFRESH_TOKEN: "SESSION_INVALID_REFRESH_TOKEN",
  MISSING_FLOW_TOKEN: "MISSING_FLOW_TOKEN",
  PROFILE_USERNAME_TAKEN: "PROFILE_USERNAME_TAKEN",
  PROFILE_USERNAME_RESERVED: "PROFILE_USERNAME_RESERVED",
  PROFILE_RESTRICTION_ACTIVE: "PROFILE_RESTRICTION_ACTIVE",
  PROFILE_MODIFICATION_RESTRICTED: "PROFILE_MODIFICATION_RESTRICTED",
  CONTENT_MODERATION_FAILED: "CONTENT_MODERATION_FAILED",
  FILE_TOO_LARGE: "FILE_TOO_LARGE",
  UNSUPPORTED_FILE_TYPE: "UNSUPPORTED_FILE_TYPE",
  UPLOAD_FAILED: "UPLOAD_FAILED",
  VIDEO_REQUIRES_VERIFICATION: "VIDEO_REQUIRES_VERIFICATION",
};
const local_f06debfc_23 = 4000;
const local_d62c94db = local_7d651640_2((arg, arg_2) => ({
  toasts: [],
  addToast: (arg) => {
    const local = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const local_2 = arg.duration ?? local_f06debfc_23;
    arg((arg) => ({
      toasts: [
        ...arg.toasts,
        {
          ...arg,
          id: local,
          duration: local_2,
        },
      ],
    }));
    if (local_2 > 0) {
      setTimeout(() => {
        arg_2().removeToast(local);
      }, local_2);
    }
    return local;
  },
  removeToast: (arg) => {
    arg((arg) => ({
      toasts: arg.toasts.filter((arg) => arg.id !== arg),
    }));
  },
}));
const symbol_072 = {
  success: (arg, arg_2) =>
    local_d62c94db.getState().addToast({
      type: "success",
      message: arg,
      duration: arg_2,
    }),
  error: (arg, arg_2) =>
    local_d62c94db.getState().addToast({
      type: "error",
      message: arg,
      duration: arg_2,
    }),
};
const local_f49e61ca = {
  [symbol_037.CONTENT_MODERATION_FAILED]:
    "Изображение содержит запрещённый контент",
  [symbol_037.FILE_TOO_LARGE]: "Файл слишком большой",
  [symbol_037.UNSUPPORTED_FILE_TYPE]: "Неподдерживаемый формат файла",
  [symbol_037.UPLOAD_FAILED]: "Не удалось загрузить файл",
  [symbol_037.VIDEO_REQUIRES_VERIFICATION]:
    "Видео — только для верифицированных пользователей",
  [symbol_037.RATE_LIMIT_EXCEEDED]: "Слишком много запросов. Попробуйте позже",
  [symbol_037.UNAUTHORIZED]: "Требуется авторизация",
  [symbol_037.ACCESS_DENIED]: "Доступ запрещён",
  [symbol_037.NETWORK_ERROR]: "Ошибка сети. Проверьте подключение",
  [symbol_037.TIMEOUT]: "Превышено время ожидания",
  [symbol_037.VALIDATION_ERROR]: "Проверьте правильность введённых данных",
  [symbol_037.ENTITY_NOT_FOUND]: "Запрошенные данные не найдены",
  [symbol_037.ENTITY_ALREADY_EXISTS]: "Такая запись уже существует",
  [symbol_037.CAPTCHA_FAILED]: "Проверка captcha не пройдена. Попробуйте снова",
  [symbol_037.OTP_INVALID]: "Неверный код. Попробуйте снова",
  [symbol_037.ACCOUNT_DEACTIVATED]: "Аккаунт деактивирован",
  [symbol_037.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED]:
    "Почта этого домена не поддерживается",
  [symbol_037.ACCOUNT_INVALID_CREDENTIALS]: "Неверный email или пароль",
  [symbol_037.ACCOUNT_TEMPORARILY_LOCKED]:
    "Аккаунт временно заблокирован. Попробуйте позже",
  [symbol_037.ACCOUNT_CURRENT_PASSWORD_INCORRECT]: "Неверный текущий пароль",
  [symbol_037.MISSING_FLOW_TOKEN]: "Сессия истекла. Начните заново",
  [symbol_037.PROFILE_USERNAME_TAKEN]: "Этот username уже занят",
  [symbol_037.PROFILE_USERNAME_RESERVED]:
    "Этот username зарезервирован системой",
};
const local_04b8aa3a = {
  rate_limited: "Слишком много действий. Попробуйте позже",
  "This username is reserved by the system":
    "Этот username зарезервирован системой",
  "Username is already taken": "Этот username уже занят",
  "Profile not found. Please create your profile first.":
    "Сначала создайте профиль",
  "Please create your profile first": "Сначала создайте профиль",
  "Profile not found": "Профиль не найден",
  "User not found": "Пользователь не найден",
  "Banner file not found": "Файл обложки не найден",
  "You can only use your own files as banner":
    "Можно использовать только свои файлы",
  "Cannot follow yourself": "Нельзя подписаться на себя",
  "Cannot follow this user": "Подписка на пользователя недоступна",
  "Already following this user": "Вы уже подписаны",
  "Cannot block yourself": "Нельзя заблокировать себя",
  "User already blocked": "Пользователь уже заблокирован",
  "User is not blocked": "Пользователь не заблокирован",
  "You do not own this pin": "Этот значок вам не принадлежит",
  "Bio too long": "Описание профиля слишком длинное",
  "Username is required": "Укажите username",
  "Username cannot be empty": "Username не может быть пустым",
  "Username must start with a letter": "Username должен начинаться с буквы",
  "Display name is required": "Укажите отображаемое имя",
  "Display name cannot be empty": "Отображаемое имя не может быть пустым",
  "Display name is too complex": "Отображаемое имя слишком сложное",
  "Display name must contain letters, numbers, or emoji":
    "Имя должно содержать буквы, цифры или эмодзи",
  "Name contains invalid characters": "Имя содержит недопустимые символы",
  "Name contains invalid invisible characters":
    "Имя содержит недопустимые невидимые символы",
  "Avatar cannot be empty": "Выберите аватар",
  "Avatar must be a single valid emoji":
    "Аватар должен состоять из одного эмодзи",
  "This symbol is not allowed": "Этот символ нельзя использовать",
  "Banner cannot be NSFW content": "Обложка содержит недопустимый контент",
  "Banner must be an image": "Обложка должна быть изображением",
  "Post not found": "Пост не найден",
  "Comment not found": "Комментарий не найден",
  "Repost not found": "Репост не найден",
  "Wall recipient not found": "Владелец стены не найден",
  "Post contains prohibited content": "Пост содержит запрещённый контент",
  "Comment contains prohibited content":
    "Комментарий содержит запрещённый контент",
  "Not allowed to edit this post": "Нельзя редактировать этот пост",
  "Not allowed to delete this post": "Нельзя удалить этот пост",
  "Not allowed to restore this post": "Нельзя восстановить этот пост",
  "Not allowed to edit this comment": "Нельзя редактировать этот комментарий",
  "Not allowed to delete this comment": "Нельзя удалить этот комментарий",
  "Not allowed to restore this comment": "Нельзя восстановить этот комментарий",
  "Content cannot be empty": "Текст не может быть пустым",
  "Content or attachments required": "Добавьте текст или вложение",
  "Content, attachments or poll required": "Добавьте текст, вложение или опрос",
  "Maximum 10 attachments allowed per post": "Максимум 10 файлов в посте",
  "Cannot write on this wall": "Публикация на этой стене недоступна",
  "Cannot write on your own wall": "Создайте обычный пост",
  "This account is private": "Это закрытый аккаунт",
  "This user has closed their wall": "Стена пользователя закрыта",
  "You do not have permission to write on this wall":
    "Нельзя публиковать на этой стене",
  "Can only pin your own posts or posts on your wall":
    "Можно закреплять только свои посты",
  "This post is not pinned": "Этот пост не закреплён",
};
const local_a003bf7e = [
  {
    pattern: /^text must be at most (\d+) characters$/i,
    translate: (arg) => `Максимум ${arg[1]} символов`,
  },
  {
    pattern: /^max (\d+) attachments per message$/i,
    translate: (arg) => `Максимум ${arg[1]} файлов в сообщении`,
  },
  {
    pattern: /^file not found(?:: .+)?$/i,
    translate: () => "Вложение не найдено",
  },
  {
    pattern: /^file .+ not owned by sender$/i,
    translate: () => "Можно отправлять только свои файлы",
  },
  {
    pattern: /^Username must be at least (\d+) characters$/i,
    translate: (arg) => `Username: минимум ${arg[1]} символов`,
  },
  {
    pattern: /^Username must be at most (\d+) characters$/i,
    translate: (arg) => `Username: максимум ${arg[1]} символов`,
  },
  {
    pattern: /^Display name must be between (\d+) and (\d+) characters$/i,
    translate: (arg) => `Имя: от ${arg[1]} до ${arg[2]} символов`,
  },
];
const local_e973c722 = {
  INVALID_EMAIL: symbol_037.VALIDATION_ERROR,
  INVALID_PASSWORD: symbol_037.VALIDATION_ERROR,
  EMAIL_DOMAIN_NOT_ALLOWED: symbol_037.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED,
  CONFLICT: symbol_037.ENTITY_ALREADY_EXISTS,
  INVALID_CREDENTIALS: symbol_037.ACCOUNT_INVALID_CREDENTIALS,
  USER_INACTIVE: symbol_037.ACCOUNT_DEACTIVATED,
  TURNSTILE_TOKEN_MISSING: symbol_037.CAPTCHA_FAILED,
  TURNSTILE_API_ERROR: symbol_037.CAPTCHA_FAILED,
  TURNSTILE_ERROR: symbol_037.CAPTCHA_FAILED,
  TURNSTILE_VERIFICATION_FAILED: symbol_037.CAPTCHA_FAILED,
  INVALID_FLOW_TOKEN: symbol_037.MISSING_FLOW_TOKEN,
  NO_PENDING_OTP: symbol_037.MISSING_FLOW_TOKEN,
  INVALID_OTP_FORMAT: symbol_037.OTP_INVALID,
  ACCOUNT_NOT_FOUND: symbol_037.ENTITY_NOT_FOUND,
  CURRENT_PASSWORD_INCORRECT: symbol_037.ACCOUNT_CURRENT_PASSWORD_INCORRECT,
  INVALID_OLD_PASSWORD: symbol_037.ACCOUNT_CURRENT_PASSWORD_INCORRECT,
  USERNAME_TAKEN: symbol_037.PROFILE_USERNAME_TAKEN,
  USERNAME_RESERVED: symbol_037.PROFILE_USERNAME_RESERVED,
  PROFILE_NOT_FOUND: symbol_037.ENTITY_NOT_FOUND,
  USER_NOT_FOUND: symbol_037.ENTITY_NOT_FOUND,
  FILE_NOT_FOUND: symbol_037.ENTITY_NOT_FOUND,
  NOT_FOUND: symbol_037.ENTITY_NOT_FOUND,
  FORBIDDEN: symbol_037.ACCESS_DENIED,
  TOO_MANY_REQUESTS: symbol_037.RATE_LIMIT_EXCEEDED,
};
function fn_bedfa411(arg) {
  return local_e973c722[arg] ?? arg;
}
function symbol_043(arg) {
  const local = local_04b8aa3a[arg];
  if (local) {
    return local;
  }
  for (const { pattern: local, translate: local_2 } of local_a003bf7e) {
    const local = arg.match(local);
    if (local) {
      return local_2(local);
    }
  }
  return arg;
}
function symbol_040(arg, arg_2 = "Произошла ошибка") {
  const local = symbol_043(arg_2);
  if (local !== arg_2 || /[А-Яа-яЁё]/.test(local) || !arg) {
    return local;
  }
  return local_f49e61ca[fn_bedfa411(arg)] ?? local;
}
let local_0a9fda83_4 = null;
const local_a1e12a9e_2 = new Set();
function symbol_034() {
  return local_0a9fda83_4;
}
function fn_e7e0f229(arg) {
  if (local_0a9fda83_4 !== arg) {
    local_0a9fda83_4 = arg;
    for (const local of local_a1e12a9e_2) {
      local(arg);
    }
  }
}
function symbol_033(arg) {
  local_a1e12a9e_2.add(arg);
  return () => {
    local_a1e12a9e_2.delete(arg);
  };
}
function fn_a8b4ba4b() {
  if (local_0a9fda83_4) {
    return {
      Authorization: `Bearer ${local_0a9fda83_4}`,
    };
  }
  return {};
}
let local_0a9fda83_5 = null;
let local_0a9fda83_6 = null;
function fn_bdc7aa48(arg) {
  local_0a9fda83_5 = arg;
}
async function fn_cdf0c470(arg) {
  const local = navigator.locks;
  if (local?.request) {
    return await local.request("auth:refresh", arg);
  }
  return arg();
}
async function fn_6641fca1() {
  if (local_0a9fda83_5) {
    return (
      local_0a9fda83_6 ||
      ((local_0a9fda83_6 = fn_cdf0c470(local_0a9fda83_5).finally(() => {
        local_0a9fda83_6 = null;
      })),
      local_0a9fda83_6)
    );
  }
  return null;
}
async function fn_bddeb5bb(arg, arg_2 = {}) {
  const local = () => {
    const local = new Headers(arg_2.headers);
    const local_2 = symbol_034();
    if (local_2) {
      local.set("Authorization", `Bearer ${local_2}`);
    }
    return fetch(arg, {
      credentials: "include",
      ...arg_2,
      headers: local,
    });
  };
  const local_2 = await local();
  if (local_2.status !== 401 || !(await fn_6641fca1())) {
    return local_2;
  }
  return local();
}
function fn_b9979219() {
  const local = "device_id";
  let local_2 = localStorage.getItem(local);
  if (!local_2) {
    local_2 = crypto.randomUUID();
    localStorage.setItem(local, local_2);
  }
  return local_2;
}
const local_ce9f9c1f = fn_b9979219();
class clazz_66a5e06b {
  baseURL;
  defaultTimeout;
  defaultHeaders;
  onUnauthorizedCallback = null;
  constructor(arg) {
    this.baseURL = arg.baseURL;
    this.defaultTimeout = arg.timeout ?? 30000;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      ...arg.headers,
    };
  }
  setOnUnauthorizedCallback(arg) {
    this.onUnauthorizedCallback = arg;
  }
  isToastSkipped(arg, arg_2) {
    if (arg) {
      return arg === true || arg.includes(arg_2);
    }
    return false;
  }
  notifyError(arg) {
    if (arg.status !== symbol_009.UNAUTHORIZED) {
      if (arg.code === "PHONE_VERIFICATION_REQUIRED") {
        window.dispatchEvent(new Event("phone-verification-required"));
        return;
      }
      if (arg.code === "WRITE_ACCESS_RESTRICTED") {
        symbol_072.error(
          "Вы не можете сделать это сегодня. Попробуйте завтра.",
        );
        return;
      }
      symbol_072.error(symbol_040(arg.code, arg.message || "Произошла ошибка"));
    }
  }
  buildUrl(arg) {
    const local = this.baseURL.replace(/\/$/, "");
    const local_2 = arg.startsWith("./site/index.html") ? arg : `/${arg}`;
    return `${local}${local_2}`;
  }
  buildHeaders(arg) {
    const local = new Headers({
      ...this.defaultHeaders,
      ...arg,
      ...fn_a8b4ba4b(),
    });
    local.set("X-Device-Id", local_ce9f9c1f);
    return local;
  }
  async handleResponse(arg) {
    if (arg.status === symbol_009.NO_CONTENT) {
      return null;
    }
    let local;
    try {
      local = await arg.json();
    } catch {
      if (!arg.ok) {
        throw this.createApiError(
          arg.status,
          "Invalid response format",
          "INVALID_RESPONSE",
        );
      }
      return null;
    }
    if (!arg.ok) {
      const local = local;
      const local_2 = local.error;
      const local_3 = local_2 && typeof local_2 === "object" ? local_2 : local;
      let local_4 = local_3.errors;
      if (local_3.violations && Array.isArray(local_3.violations)) {
        local_4 = {};
        for (const local of local_3.violations) {
          if (!local_4[local.field]) {
            local_4[local.field] = [];
          }
          local_4[local.field].push(local.message);
        }
      }
      throw this.createApiError(
        arg.status,
        local_3.detail || local_3.message || local_3.title || "Request failed",
        local_3.code || this.mapStatusToErrorCode(arg.status),
        local_4,
      );
    }
    return local;
  }
  mapStatusToErrorCode(arg) {
    switch (arg) {
      case symbol_009.BAD_REQUEST:
        return symbol_037.BAD_REQUEST;
      case symbol_009.UNAUTHORIZED:
        return symbol_037.UNAUTHORIZED;
      case symbol_009.FORBIDDEN:
        return symbol_037.ACCESS_DENIED;
      case symbol_009.NOT_FOUND:
        return symbol_037.ENTITY_NOT_FOUND;
      case symbol_009.CONFLICT:
        return symbol_037.ENTITY_ALREADY_EXISTS;
      case symbol_009.UNPROCESSABLE_ENTITY:
        return symbol_037.VALIDATION_ERROR;
      case symbol_009.TOO_MANY_REQUESTS:
        return symbol_037.RATE_LIMIT_EXCEEDED;
      default:
        return symbol_037.UNKNOWN_ERROR;
    }
  }
  createApiError(arg, arg_2, arg_3, arg_4) {
    const local = new Error(arg_2);
    local.status = arg;
    local.code = fn_bedfa411(arg_3);
    local.errors = arg_4;
    local.name = "ApiError";
    return local;
  }
  async executeRequest(arg, arg_2, arg_3, arg_4, arg_5 = false) {
    const local = this.buildUrl(arg_2);
    const local_2 = this.buildHeaders(arg_4?.headers);
    const local_3 = new AbortController();
    const local_4 = arg_4?.timeout ?? this.defaultTimeout;
    const local_5 = setTimeout(() => local_3.abort(), local_4);
    try {
      const local =
        arg_3 instanceof ArrayBuffer ||
        (typeof Uint8Array !== "undefined" && arg_3 instanceof Uint8Array) ||
        (typeof Blob !== "undefined" && arg_3 instanceof Blob)
          ? arg_3
          : arg_3 != null
            ? JSON.stringify(arg_3)
            : undefined;
      const {
        headers: local_2,
        skipErrorToast: local_3,
        ...local_4
      } = arg_4 ?? {};
      const local_5 = await fetch(local, {
        method: arg,
        body: local,
        signal: local_3.signal,
        credentials: "include",
        ...local_4,
        headers: local_2,
      });
      clearTimeout(local_5);
      const local_6 =
        arg_2.startsWith("/auth/") ||
        arg_2.startsWith("/sign-") ||
        arg_2.startsWith("/verify-") ||
        arg_2.startsWith("/resend-") ||
        arg_2.startsWith("/refresh") ||
        arg_2.startsWith("/forgot-") ||
        arg_2.startsWith("/reset-") ||
        arg_2.startsWith("/login/");
      if (
        local_5.status === symbol_009.UNAUTHORIZED &&
        !arg_5 &&
        !local_6 &&
        symbol_034()
      ) {
        if (await fn_6641fca1()) {
          return this.executeRequest(arg, arg_2, arg_3, arg_4, true);
        }
        this.onUnauthorizedCallback?.();
        throw this.createApiError(
          symbol_009.UNAUTHORIZED,
          "Session expired",
          symbol_037.UNAUTHORIZED,
        );
      }
      return await this.handleResponse(local_5);
    } catch (error) {
      clearTimeout(local_5);
      if (error instanceof Error) {
        const local = (arg) =>
          !arg_5 && !this.isToastSkipped(arg_4?.skipErrorToast, arg.status);
        if (error.name === "AbortError") {
          const local = this.createApiError(
            0,
            "Request timeout",
            symbol_037.TIMEOUT,
          );
          if (local(local)) {
            this.notifyError(local);
          }
          throw local;
        }
        if (error.name === "ApiError") {
          const local = error;
          if (local(local)) {
            this.notifyError(local);
          }
          throw error;
        }
        const local_2 = this.createApiError(
          0,
          error.message || "Network error",
          symbol_037.NETWORK_ERROR,
        );
        if (local(local_2)) {
          this.notifyError(local_2);
        }
        throw local_2;
      }
      throw error;
    }
  }
  async get(arg, arg_2) {
    return this.executeRequest("GET", arg, undefined, arg_2);
  }
  async post(arg, arg_2, arg_3) {
    return this.executeRequest("POST", arg, arg_2, arg_3);
  }
  async put(arg, arg_2, arg_3) {
    return this.executeRequest("PUT", arg, arg_2, arg_3);
  }
  async patch(arg, arg_2, arg_3) {
    return this.executeRequest("PATCH", arg, arg_2, arg_3);
  }
  async delete(arg, arg_2) {
    return this.executeRequest("DELETE", arg, undefined, arg_2);
  }
  async uploadFormData(arg, arg_2, arg_3, arg_4 = false) {
    const local = this.buildUrl(arg);
    const local_2 = {
      "X-Requested-With": "XMLHttpRequest",
      "X-Device-Id": local_ce9f9c1f,
      ...fn_a8b4ba4b(),
    };
    const local_3 = new AbortController();
    const local_4 = arg_3?.timeout ?? this.defaultTimeout;
    const local_5 = setTimeout(() => local_3.abort(), local_4);
    try {
      const local = await fetch(local, {
        method: "POST",
        headers: local_2,
        body: arg_2,
        signal: local_3.signal,
        credentials: "include",
      });
      clearTimeout(local_5);
      if (local.status === symbol_009.UNAUTHORIZED && !arg_4 && symbol_034()) {
        if (await fn_6641fca1()) {
          return this.uploadFormData(arg, arg_2, arg_3, true);
        }
        this.onUnauthorizedCallback?.();
        throw this.createApiError(
          symbol_009.UNAUTHORIZED,
          "Session expired",
          symbol_037.UNAUTHORIZED,
        );
      }
      return await this.handleResponse(local);
    } catch (error) {
      clearTimeout(local_5);
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          const local = this.createApiError(
            0,
            "Request timeout",
            symbol_037.TIMEOUT,
          );
          if (!arg_4) {
            this.notifyError(local);
          }
          throw local;
        }
        if (error.name === "ApiError") {
          if (!arg_4) {
            this.notifyError(error);
          }
          throw error;
        }
        const local = this.createApiError(
          0,
          error.message || "Network error",
          symbol_037.NETWORK_ERROR,
        );
        if (!arg_4) {
          this.notifyError(local);
        }
        throw local;
      }
      throw error;
    }
  }
}
export const local_1c641230 = new clazz_66a5e06b({
  baseURL: "/api",
  timeout: 30000,
});
const local_8b3b0704 = new clazz_66a5e06b({
  baseURL: "/api/v1/auth",
  timeout: 30000,
});
const symbol_036 = local_7d651640_2((arg, arg_2) => ({
  portal: {
    active: false,
  },
  loaded: false,
  fetchPortal: async () => {
    if (!arg_2().loaded) {
      try {
        const local = await local_1c641230.get("/v1/portal");
        arg({
          portal: local,
          loaded: true,
        });
      } catch {
        arg({
          loaded: true,
        });
      }
    }
  },
}));
const symbol_035 = () => symbol_036((arg) => arg.portal);
const local_a1e12a9e_3 = new Set();
let local_0a9fda83_7 = null;
const local_f06debfc_24 = 30000;
function fn_b21bc410() {
  if (local_0a9fda83_7 === null) {
    local_0a9fda83_7 = window.setInterval(() => {
      local_a1e12a9e_3.forEach((arg) => arg());
    }, local_f06debfc_24);
  }
}
function fn_c8c9465e() {
  if (local_0a9fda83_7 !== null) {
    clearInterval(local_0a9fda83_7);
    local_0a9fda83_7 = null;
  }
}
function fn_5ff99dd6(arg) {
  local_a1e12a9e_3.add(arg);
  if (local_a1e12a9e_3.size === 1) {
    fn_b21bc410();
  }
}
function fn_f48ad526(arg) {
  local_a1e12a9e_3.delete(arg);
  if (local_a1e12a9e_3.size === 0) {
    fn_c8c9465e();
  }
}
function fn_5cd4a629(arg) {
  const local = Date.now();
  const local_2 = Math.floor((local - arg.getTime()) / 1000);
  if (local_2 < 60) {
    return "сейчас";
  }
  if (local_2 < 3600) {
    return `${Math.floor(local_2 / 60)} мин.`;
  }
  if (local_2 < 86400) {
    return `${Math.floor(local_2 / 3600)} ч.`;
  }
  if (local_2 < 604800) {
    return `${Math.floor(local_2 / 86400)} дн.`;
  }
  if (local_2 < 2419200) {
    return `${Math.floor(local_2 / 604800)} нед.`;
  }
  return arg.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "short",
  });
}
function fn_b5e97943(arg) {
  const local = new Date(arg).getTime();
  const local_2 = !isNaN(local);
  const local_3 = local_2 ? local : 0;
  const [local_4, local_5] = symbol_056(() => {
    if (local_2) {
      return fn_5cd4a629(new Date(local_3));
    }
    return "";
  });
  symbol_077(() => {
    if (!local_2) {
      local_5("");
      return;
    }
    const local = new Date(local_3);
    local_5(fn_5cd4a629(local));
    const local_2 = () => {
      local_5(fn_5cd4a629(local));
    };
    fn_5ff99dd6(local_2);
    return () => fn_f48ad526(local_2);
  }, [local_3, local_2]);
  return local_4;
}
const local_f06debfc_25 = 1174;
function symbol_006() {
  const [local, local_2] = symbol_056(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.innerWidth < local_f06debfc_25;
  });
  symbol_077(() => {
    const local = window.matchMedia(`(max-width: ${local_f06debfc_25 - 1}px)`);
    const local_2 = (arg) => {
      local_2(arg.matches);
    };
    local_2(local.matches);
    local.addEventListener("change", local_2);
    return () => {
      local.removeEventListener("change", local_2);
    };
  }, []);
  return local;
}
const local_3825d11b = fn_c05a86e1({
  isHidden: false,
});
const local_c15c3c53 = () => {
  const [local, local_2] = symbol_056(false);
  const local_3 = symbol_002(0);
  symbol_077(() => {
    const local = () => {
      const local = window.scrollY;
      const local_2 = local - local_3.current;
      if (local_2 > 10 && local > 50) {
        local_2(true);
      } else if (local_2 < -10) {
        local_2(false);
      }
      local_3.current = local;
    };
    window.addEventListener("scroll", local, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", local);
  }, []);
  return local;
};
function fn_9d6d3161(arg = "", arg_2 = []) {
  const [local, local_2] = symbol_056(arg);
  const [local_3, local_4] = symbol_056(arg_2);
  const local_5 = symbol_002(null);
  const local_6 = symbol_069((arg, arg_2) => {
    local_2(arg);
    local_4(arg_2);
  }, []);
  const local_7 = symbol_069((arg) => {
    local_5.current?.insertText(arg);
  }, []);
  const local_8 = symbol_069(() => {
    local_2("");
    local_4([]);
  }, []);
  return {
    text: local,
    spans: local_3,
    editorRef: local_5,
    handleChange: local_6,
    insertText: local_7,
    reset: local_8,
    setText: local_2,
    setSpans: local_4,
  };
}
export function fn_c6e473a2({
  sentinelRef: arg,
  hasMore: arg_2,
  isLoading: arg_3,
  onLoadMore: arg_4,
  rootMargin: arg_5 = "100px",
}) {
  symbol_077(() => {
    if (!arg_2 || arg_3) {
      return;
    }
    const local = arg.current;
    if (!local) {
      return;
    }
    const local_2 = new IntersectionObserver(
      (arg) => {
        if (arg[0].isIntersecting) {
          arg_4();
        }
      },
      {
        rootMargin: arg_5,
      },
    );
    local_2.observe(local);
    return () => local_2.disconnect();
  }, [arg_2, arg_3, arg_4, arg_5, arg]);
}
function fn_f204a1a3({
  itemCount: arg,
  estimatedItemHeight: arg_2,
  overscan: arg_3 = 5,
  gap: arg_4 = 0,
  getItemKey: arg_5 = (arg) => arg,
  initialMeasuredHeights: arg_6,
  scrollElement: arg_7,
  initialScrollTop: arg_8,
}) {
  const [, local] = symbol_056(0);
  const local_2 = () => {
    if (arg_7) {
      return Math.max(0, arg_7.scrollTop);
    }
    if (arg_8 !== undefined) {
      return arg_8;
    }
    if (typeof window !== "undefined") {
      return Math.max(0, window.scrollY);
    }
    return 0;
  };
  const local_3 = () => {
    if (arg_7) {
      return arg_7.clientHeight;
    }
    if (typeof window !== "undefined") {
      return window.innerHeight;
    }
    return 0;
  };
  const local_4 = symbol_002(arg_6 ?? new Map());
  const local_5 = symbol_002(null);
  const local_6 = symbol_002(null);
  const local_7 = symbol_002(new Map());
  const local_8 = symbol_002(arg_5);
  local_8.current = arg_5;
  const local_9 = (arg) => local_4.current.get(arg_5(arg)) ?? arg_2;
  const local_10 = (arg) => {
    let local = 0;
    for (let local = 0; local < arg; local++) {
      local += local_9(local) + arg_4;
    }
    return local;
  };
  const local_11 = () => {
    if (arg === 0) {
      return 0;
    }
    let local = 0;
    for (let local = 0; local < arg; local++) {
      local += local_9(local);
    }
    local += Math.max(0, arg - 1) * arg_4;
    return local;
  };
  const local_12 = () => {
    if (arg === 0) {
      return {
        start: 0,
        end: 0,
      };
    }
    const local = local_2();
    const local_2 = local_3();
    let local_3 = 0;
    let local_4 = 0;
    for (let local = 0; local < arg; local++) {
      const local = local_9(local) + arg_4;
      if (local_4 + local > local) {
        local_3 = local;
        break;
      }
      local_4 += local;
    }
    let local_5 = local_3;
    let local_6 = 0;
    for (
      let local = local_3;
      local < arg &&
      ((local_6 += local_9(local) + arg_4),
      (local_5 = local),
      !(local_6 >= local_2));
      local++
    );
    return {
      start: Math.max(0, local_3 - arg_3),
      end: Math.min(arg - 1, local_5 + arg_3),
    };
  };
  const local_13 = () => {
    if (arg === 0) {
      return [];
    }
    const { start: local, end: local_2 } = local_12();
    const local_3 = [];
    for (let local = local; local <= local_2; local++) {
      local_3.push({
        index: local,
        key: arg_5(local),
        start: local_10(local),
      });
    }
    return local_3;
  };
  if (!local_6.current) {
    local_6.current = new ResizeObserver((arg) => {
      let local = false;
      for (const local of arg) {
        const local = local.target;
        const local_2 = local_7.current.get(local);
        if (local_2 === undefined) {
          continue;
        }
        const local_3 = local.borderBoxSize && local.borderBoxSize[0];
        const local_4 = local_3
          ? local_3.blockSize
          : local.getBoundingClientRect().height;
        if (local_4 > 0 && local_4.current.get(local_2) !== local_4) {
          local_4.current.set(local_2, local_4);
          local = true;
        }
      }
      if (local) {
        local((arg) => arg + 1);
      }
    });
  }
  const local_14 = symbol_069((arg, arg_2) => {
    if (!arg) {
      return;
    }
    const local = local_8.current(arg_2);
    local_7.current.set(arg, local);
    local_6.current?.observe(arg, {
      box: "border-box",
    });
    const local_2 = arg.getBoundingClientRect().height;
    if (local_2 > 0 && local_4.current.get(local) !== local_2) {
      local_4.current.set(local, local_2);
      local((arg) => arg + 1);
    }
  }, []);
  symbol_028(() => {
    const local = arg_7 ?? window;
    const local_2 = () => {
      if (!local_5.current) {
        local_5.current = requestAnimationFrame(() => {
          local_5.current = null;
          local((arg) => arg + 1);
        });
      }
    };
    local.addEventListener("scroll", local_2, {
      passive: true,
    });
    local((arg) => arg + 1);
    return () => {
      local.removeEventListener("scroll", local_2);
      if (local_5.current) {
        cancelAnimationFrame(local_5.current);
      }
    };
  }, [arg_7]);
  symbol_077(
    () => () => {
      local_6.current?.disconnect();
      local_7.current.clear();
    },
    [],
  );
  const local_15 = symbol_069(() => new Map(local_4.current), []);
  return {
    virtualItems: local_13(),
    totalSize: local_11(),
    measureElement: local_14,
    getMeasuredHeights: local_15,
  };
}
const local_5003aee4 = "https://cdn.xn--d1ah4a.com/public/assets/icons";
const local_33611d03 = "itd:icons:checkedAt";
const local_aad0de78_2 = 1800 * 1000;
const local_a1e12a9e_4 = new Map();
const local_a1e12a9e_5 = new Map();
const local_a1e12a9e_6 = new Map();
const local_bae059a2 = (arg) => `${local_5003aee4}/${arg}.svg`;
const local_29589dcc = (() => {
  try {
    const local = Number(localStorage.getItem(local_33611d03) ?? 0);
    if (Date.now() - local < local_aad0de78_2) {
      return false;
    }
    return (localStorage.setItem(local_33611d03, String(Date.now())), true);
  } catch {
    return false;
  }
})();
const local_d3a9aab1 = (arg) =>
  /^\s*<svg[\s>]/i.test(arg) &&
  !/<script|<foreignObject|\son[a-z]+\s*=/i.test(arg);
const local_09c265c5 = (arg, arg_2) => {
  local_a1e12a9e_4.set(arg, arg_2);
  local_a1e12a9e_6.get(arg)?.forEach((arg) => arg(arg_2));
};
const local_9582fd2f = (arg, arg_2 = false) => {
  if (!arg_2) {
    const local = local_a1e12a9e_4.get(arg);
    if (local) {
      return Promise.resolve(local);
    }
    const local_2 = local_a1e12a9e_5.get(arg);
    if (local_2) {
      return local_2;
    }
  }
  const local = arg_2 ? "reload" : local_29589dcc ? "no-cache" : "force-cache";
  const local_2 = fetch(local_bae059a2(arg), {
    cache: local,
  })
    .then(async (arg) => {
      if (!arg.ok) {
        return null;
      }
      const local = await arg.text();
      if (local_d3a9aab1(local)) {
        return (local_09c265c5(arg, local), local);
      }
      return null;
    })
    .catch(() => null)
    .finally(() => local_a1e12a9e_5.delete(arg));
  local_a1e12a9e_5.set(arg, local_2);
  return local_2;
};
const local_4d132258 = (arg, arg_2) =>
  arg.replace(/<svg\b([^>]*)>/i, (arg, arg_2) => {
    const local = /\bwidth\s*=\s*["']([^"']+)["']/i.exec(arg_2)?.[1];
    const local_2 = /\bheight\s*=\s*["']([^"']+)["']/i.exec(arg_2)?.[1];
    let local_3 = arg_2.replace(/\s(width|height)\s*=\s*["'][^"']*["']/gi, "");
    if (!/\bviewBox\s*=/i.test(local_3) && local && local_2) {
      local_3 += ` viewBox="0 0 ${local} ${local_2}"`;
    }
    return `<svg${local_3} width="${arg_2}" height="${arg_2}">`;
  });
const local_39aeca81 = ({ name: arg, size: arg_2 = 20, className: arg_3 }) => {
  const [local, local_2] = symbol_056(() => local_a1e12a9e_4.get(arg) ?? null);
  symbol_077(() => {
    local_2(local_a1e12a9e_4.get(arg) ?? null);
    const local = local_a1e12a9e_6.get(arg) ?? new Set();
    local.add(local_2);
    local_a1e12a9e_6.set(arg, local);
    local_9582fd2f(arg);
    return () => {
      local.delete(local_2);
      if (local.size === 0) {
        local_a1e12a9e_6.delete(arg);
      }
    };
  }, [arg]);
  const local_3 = typeof arg_2 === "number" ? `${arg_2}px` : arg_2;
  return symbol_073("span", {
    "data-icon": arg,
    "aria-hidden": "true",
    className: arg_3,
    style: {
      display: "block",
      width: local_3,
      height: local_3,
      lineHeight: 0,
    },
    dangerouslySetInnerHTML: local
      ? {
          __html: local_4d132258(local, arg_2),
        }
      : undefined,
  });
};
const local_2266b1ba = ({ size: arg = 18 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      symbol_073("path", {
        d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z",
      }),
      symbol_073("path", {
        d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z",
      }),
    ],
  });
const local_f79a8e51 = ({ size: arg = 18 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      symbol_073("polyline", {
        points: "16 18 22 12 16 6",
      }),
      symbol_073("polyline", {
        points: "8 6 2 12 8 18",
      }),
    ],
  });
const local_595b56df = ({ size: arg = 18 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      symbol_073("line", {
        x1: "19",
        y1: "4",
        x2: "10",
        y2: "4",
      }),
      symbol_073("line", {
        x1: "14",
        y1: "20",
        x2: "5",
        y2: "20",
      }),
      symbol_073("line", {
        x1: "15",
        y1: "4",
        x2: "9",
        y2: "20",
      }),
    ],
  });
const local_3ea3ac5c = ({ size: arg = 18 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      symbol_073("path", {
        d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      }),
      symbol_073("path", {
        d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      }),
    ],
  });
const local_bb67df5f = ({ size: arg = 18 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: symbol_073("path", {
      d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
    }),
  });
const local_29080f6a = ({ size: arg = 18 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      symbol_073("path", {
        d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94",
      }),
      symbol_073("path", {
        d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19",
      }),
      symbol_073("line", {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23",
      }),
      symbol_073("path", {
        d: "M14.12 14.12a3 3 0 1 1-4.24-4.24",
      }),
    ],
  });
const local_2c195875 = ({ size: arg = 18 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      symbol_073("path", {
        d: "M16 4H9a3 3 0 0 0-3 3c0 1.66 1.34 3 3 3h6",
      }),
      symbol_073("path", {
        d: "M8 20h7a3 3 0 0 0 3-3c0-1.66-1.34-3-3-3H4",
      }),
      symbol_073("line", {
        x1: "4",
        y1: "12",
        x2: "20",
        y2: "12",
      }),
    ],
  });
const local_4bedf0ab = ({ size: arg = 18 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      symbol_073("path", {
        d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3",
      }),
      symbol_073("line", {
        x1: "4",
        y1: "21",
        x2: "20",
        y2: "21",
      }),
    ],
  });
const local_c518db66 = ({ size: arg = 18 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 18 18",
    children: symbol_073("g", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      children: [
        symbol_073("path", {
          d: "M9 2c-.53 0-1.04.219-1.414.608C7.21 2.998 7 3.526 7 4.077v4.846c0 .55.21 1.08.586 1.469.375.39.884.608 1.414.608.53 0 1.04-.219 1.414-.608.375-.39.586-.918.586-1.469V4.077c0-.55-.21-1.08-.586-1.469A1.963 1.963 0 0 0 9 2Z",
        }),
        symbol_073("path", {
          d: "M14 8v1.333c0 1.238-.527 2.425-1.464 3.3C11.598 13.508 10.326 14 9 14s-2.598-.492-3.536-1.367C4.527 11.758 4 10.571 4 9.333V8M9 14v2",
        }),
      ],
    }),
  });
const local_59d4f3fb = ({ size: arg = 24 }) =>
  symbol_073("svg", {
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: symbol_073("path", {
      d: "M8 5v14l11-7z",
    }),
  });
export const local_fa759dff = ({ size: arg = 24 }) =>
  symbol_073("svg", {
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      symbol_073("path", {
        d: "M5 12L12 5L19 12",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      symbol_073("path", {
        d: "M12 19V5",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
const local_e89bf398 = ({ size: arg = 20 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 20 20",
    children: symbol_073("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.833",
      d: "m17.867 9.208-7.659 7.659a5.003 5.003 0 1 1-7.075-7.075l7.659-7.659a3.335 3.335 0 1 1 4.716 4.717l-7.666 7.658a1.667 1.667 0 1 1-2.359-2.358l7.075-7.067",
    }),
  });
const local_e2a3198b = ({ size: arg = 8 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 8 8",
    children: [
      symbol_073("g", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        clipPath: "url(#af)",
        children: symbol_073("path", {
          d: "M1 4h6M4 1v6",
        }),
      }),
      symbol_073("defs", {
        children: symbol_073("clipPath", {
          id: "af",
          children: symbol_073("path", {
            fill: "#fff",
            d: "M0 0h8v8H0z",
          }),
        }),
      }),
    ],
  });
const local_327b00ca = ({ size: arg = 8 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 8 8",
    children: symbol_073("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M1 4h6",
    }),
  });
const symbol_038 = () =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "36",
    height: "18",
    fill: "none",
    children: [
      symbol_073("path", {
        fill: "currentColor",
        d: "M12 3V0h12v3h-4v11h-4V3h-4Z",
      }),
      symbol_073("path", {
        fill: "currentColor",
        d: "M12 3V0h12v3h-4v11h-4V3h-4ZM9 0 3 9V0H0v14h3l6-9v9h3V0H9Z",
      }),
      symbol_073("path", {
        fill: "currentColor",
        "fill-rule": "evenodd",
        d: "M34 11h2v7h-3v-4h-9v4h-3v-7c3 0 3-4 3-11h10v11Zm-7-8v8h4V3h-4Z",
        "clip-rule": "evenodd",
      }),
    ],
  });
const symbol_049 = ({ size: arg = 24 }) =>
  symbol_073("svg", {
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      symbol_073("path", {
        d: "M18 6L6 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      symbol_073("path", {
        d: "M6 6L18 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
const symbol_027 = ({ size: arg = 20 }) =>
  symbol_073(local_39aeca81, {
    name: "comment",
    size: arg,
  });
const symbol_026 = ({ size: arg = 18 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      symbol_073("path", {
        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      }),
      symbol_073("path", {
        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
      }),
    ],
  });
const local_b2622f5b = ({ size: arg = 24 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      symbol_073("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      symbol_073("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M15 9l-6 6m0-6l6 6",
      }),
    ],
  });
const local_fa5c2464 = () =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "none",
    children: symbol_073("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M20.689 10.968a2.806 2.806 0 0 0-2.244-1.108H5.555c-.887 0-1.705.404-2.244 1.107a2.808 2.808 0 0 0-.485 2.455l1.65 6.112a2.83 2.83 0 0 0 2.729 2.09h9.589a2.832 2.832 0 0 0 2.729-2.09l1.65-6.111a2.804 2.804 0 0 0-.484-2.455ZM8.436 3.875h7.125a.75.75 0 0 0 0-1.5H8.436a.75.75 0 0 0 0 1.5ZM5.682 7.253h12.634a.75.75 0 0 0 0-1.5H5.682a.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd",
    }),
  });
const symbol_060 = ({ size: arg = 18 }) =>
  symbol_073("svg", {
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: symbol_073("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.0463 8.361L19.6973 3.35C19.8203 3.118 19.8133 2.839 19.6773 2.613C19.5413 2.387 19.2973 2.25 19.0343 2.25H4.96533C4.55133 2.25 4.21533 2.586 4.21533 3V21C4.21533 21.414 4.55133 21.75 4.96533 21.75C5.37933 21.75 5.71533 21.414 5.71533 21V14.544L19.0443 14.365C19.3073 14.361 19.5483 14.221 19.6813 13.995C19.8143 13.768 19.8183 13.489 19.6943 13.258L17.0463 8.361Z",
      fill: "currentColor",
    }),
  });
const local_fe55573b = ({ size: arg = 24 }) =>
  symbol_073("svg", {
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      symbol_073("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2",
      }),
      symbol_073("circle", {
        cx: "8.5",
        cy: "8.5",
        r: "1.5",
      }),
      symbol_073("polyline", {
        points: "21 15 16 10 5 21",
      }),
    ],
  });
const symbol_030 = ({
  filled: arg = false,
  size: arg_2 = 20,
  className: arg_3,
}) =>
  symbol_073(local_39aeca81, {
    name: arg ? "liked" : "like",
    size: arg_2,
    className: arg_3,
  });
const symbol_048 = ({ size: arg = 24 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      animation: "spin 1s linear infinite",
    },
    children: symbol_073("path", {
      d: "M19 12a7 7 0 1 1-4.83-6.66",
    }),
  });
export const local_b6621a61 = ({ size: arg = 24 }) =>
  symbol_073("svg", {
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      symbol_073("path", {
        d: "M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      symbol_073("path", {
        d: "M16 17L21 12L16 7",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      symbol_073("path", {
        d: "M21 12H9",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
const symbol_010 = ({ size: arg = 18 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 18 18",
    children: symbol_073("path", {
      fill: "currentColor",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M9 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14.25 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM3.75 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    }),
  });
const symbol_050 = ({ size: arg = 24 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 24 24",
    children: symbol_073("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M19.742 13.807c-.86-1.832-.837-2.52-.798-3.773.01-.296.02-.617.02-.986C18.964 6.122 16.804 2 12 2 7.197 2 5.036 6.122 5.036 9.048c0 .368.01.69.02.986.04 1.252.062 1.941-.807 3.797-.372.928-.327 1.73.135 2.382C5.492 17.783 8.7 18 12 18s6.508-.216 7.616-1.787c.463-.653.508-1.454.125-2.406Zm-4.686 5.198c-1.848.193-3.852.192-6.13-.002a.873.873 0 0 0-.835.437.763.763 0 0 0 .125.893C9.236 21.407 10.578 22 11.994 22h.002c1.42 0 2.765-.592 3.788-1.667a.765.765 0 0 0 .122-.9c-.162-.294-.495-.458-.85-.428Z",
      clipRule: "evenodd",
    }),
  });
const symbol_071 = ({ size: arg = 24 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    children: symbol_073("path", {
      fill: "currentColor",
      d: "M12 3c5 0 9 3.6 9 8a5 5 0 0 1-5 5h-1.8a1.5 1.5 0 0 0-1.5 1.5q0 .6.4 1 .3.4.4 1-.2 1.3-1.5 1.5c-5 0-9-4-9-9s4-9 9-9m-4.7 8a1.3 1.3 0 1 0 0 2.5 1.3 1.3 0 0 0 0-2.5m9-2a1.3 1.3 0 1 0 0 2.5 1.3 1.3 0 0 0 0-2.5m-7-2a1.2 1.2 0 1 0 0 2.5 1.2 1.2 0 0 0 0-2.5m4-1a1.3 1.3 0 1 0 0 2.5 1.3 1.3 0 0 0 0-2.5",
    }),
  });
const symbol_051 = ({ size: arg = 24 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 24 24",
    children: symbol_073("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M11.998 11a3.996 3.996 0 0 0 4-4c.084-2.213-1.702-4-4-4A3.995 3.995 0 0 0 8 7c0 2.213 1.787 4 3.998 4Zm6.94 6.878c-.3-1.04-.9-1.986-2.097-2.743C15.843 14.473 14.246 14 12.05 14c-4.292 0-6.39 1.892-6.987 3.878-.2.568.1 1.136.598 1.42C7.458 20.431 9.654 21 12.05 21c2.296 0 4.492-.662 6.288-1.703.5-.284.8-.851.6-1.419Z",
      clipRule: "evenodd",
    }),
  });
const local_c88205fb = ({ size: arg = 18 }) =>
  symbol_073("svg", {
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: symbol_073("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.0397 9.25349L14.7397 3.95349C13.9837 3.19649 12.6657 3.19649 11.9097 3.95349L11.3187 4.54549C10.7487 5.11449 10.5767 5.96749 10.8957 6.75249C11.0497 7.12649 10.9647 7.55249 10.6797 7.83949L9.34373 9.17449C9.22773 9.28849 9.08673 9.37449 8.93473 9.42249L5.77073 10.4125C5.46773 10.5085 5.18573 10.6795 4.95673 10.9065C4.57773 11.2855 4.36973 11.7875 4.36973 12.3225C4.36973 12.8575 4.57873 13.3585 4.95673 13.7355L7.07573 15.8545L3.59573 19.3345C3.30273 19.6275 3.30273 20.1025 3.59573 20.3955C3.74173 20.5415 3.93373 20.6145 4.12573 20.6145C4.31773 20.6145 4.50973 20.5415 4.65573 20.3955L8.13573 16.9145L10.2577 19.0365C10.6467 19.4255 11.1587 19.6195 11.6707 19.6195C12.1837 19.6195 12.6957 19.4245 13.0867 19.0355C13.3147 18.8055 13.4847 18.5235 13.5797 18.2205L14.5687 15.0605C14.6187 14.9045 14.7037 14.7635 14.8167 14.6505L16.1537 13.3125C16.4387 13.0265 16.8627 12.9415 17.2737 13.1085C18.0197 13.4155 18.8747 13.2465 19.4477 12.6745L20.0397 12.0815C20.8187 11.3015 20.8187 10.0325 20.0397 9.25349Z",
      fill: "currentColor",
    }),
  });
const symbol_065 = ({ size: arg = 24 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 24 24",
    children: symbol_073("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M5 12h14M12 5v14",
    }),
  });
const local_4837987e = ({ size: arg = 20 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 24 24",
    children: symbol_073("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 20V10M12 20V4M6 20v-6",
    }),
  });
const symbol_031 = ({ size: arg = 20 }) =>
  symbol_073(local_39aeca81, {
    name: "share",
    size: arg,
  });
export const local_e33d719c = ({ size: arg = 24 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    children: symbol_073("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      d: "m19.5 19.5-3-3M11 4.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Z",
    }),
  });
const local_1b669a11 = ({ size: arg = 24 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 24 24",
    children: symbol_073("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M12 14.8a4 4 0 0 1-3.9-3.5.7.7 0 0 1 1.5-.1q0 .8.7 1.4.7.7 1.7.7c1.2 0 2.2-1 2.4-2.1q.1-.7.8-.7.6 0 .7.9c-.3 2-2 3.4-3.9 3.4m0-11c1.5 0 2.8 1.2 3 2.7H9a3 3 0 0 1 3-2.6m4.6 2.7A4.6 4.6 0 0 0 12 2.4a4.6 4.6 0 0 0-4.6 4.1C4.7 6.8 3 8.8 3 11.8v4.5c0 3.2 2 5.3 5 5.3H16c3 0 5-2.1 5-5.3v-4.5q-.2-4.7-4.4-5.3",
      clipRule: "evenodd",
    }),
  });
const local_40eb419c = ({ size: arg = 20, color: arg_2 = "currentColor" }) =>
  symbol_073("svg", {
    width: arg,
    height: arg,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      symbol_073("path", {
        d: "M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z",
        stroke: arg_2,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      symbol_073("path", {
        d: "M7.6 11.908c.585.76 1.445 1.234 2.4 1.234.956 0 1.816-.474 2.4-1.234M7.308 7.504v-.043m-.038-.127a.188.188 0 1 0 .002.374.188.188 0 0 0-.002-.374ZM12.692 7.504v-.043m-.005-.127a.188.188 0 1 0 .002.374.188.188 0 0 0-.002-.374Z",
        stroke: arg_2,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
const local_132b8ed2 = ({ size: arg = 24 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      symbol_073("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      symbol_073("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M8 12l3 3 5-6",
      }),
    ],
  });
const local_00b66f33 = ({ size: arg = 48 }) =>
  symbol_073("svg", {
    width: arg,
    height: arg,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      symbol_073("circle", {
        cx: "24",
        cy: "24",
        r: "24",
        fill: "#2AABEE",
        fillOpacity: "0.12",
      }),
      symbol_073("svg", {
        x: "8",
        y: "8",
        width: "32",
        height: "32",
        viewBox: "0 0 1000 1000",
        children: symbol_073("path", {
          d: "M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z",
          fill: "#2AABEE",
        }),
      }),
    ],
  });
const symbol_074 = ({ size: arg = 18 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      symbol_073("polyline", {
        points: "3 6 5 6 21 6",
      }),
      symbol_073("path", {
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
      }),
      symbol_073("line", {
        x1: "10",
        y1: "11",
        x2: "10",
        y2: "17",
      }),
      symbol_073("line", {
        x1: "14",
        y1: "11",
        x2: "14",
        y2: "17",
      }),
    ],
  });
const symbol_059 = ({ size: arg = 16 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 16 16",
    children: [
      symbol_073("path", {
        fill: "#0080FF",
        d: "M6.724.821a1.63 1.63 0 0 1 2.858.051l.556 1.042a1.634 1.634 0 0 0 1.672.856l1.155-.166c1.263-.181 2.238 1.108 1.742 2.303L14.253 6a1.69 1.69 0 0 0 .385 1.863l.847.815c.927.891.544 2.47-.685 2.821l-1.122.32a1.663 1.663 0 0 0-1.192 1.468l-.098 1.181c-.108 1.294-1.56 1.974-2.596 1.216l-.946-.693a1.62 1.62 0 0 0-1.872-.033l-.969.658c-1.06.721-2.49-.01-2.552-1.306l-.058-1.184a1.666 1.666 0 0 0-1.141-1.51l-1.11-.36C-.073 10.864-.402 9.272.556 8.413l.874-.783a1.69 1.69 0 0 0 .448-1.849l-.416-1.108c-.454-1.212.565-2.466 1.821-2.24l1.148.207a1.632 1.632 0 0 0 1.7-.796L6.724.82Z",
      }),
      symbol_073("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.333",
        d: "M10.667 6.667 7.11 10.222 5.334 8.444",
      }),
    ],
  });
const local_98bb194d = ({ size: arg = 20 }) =>
  symbol_073("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 20 20",
    children: [
      symbol_073("path", {
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M2 10s2.91-6 8-6 8 6 8 6-2.91 6-8 6-8-6-8-6Z",
      }),
      symbol_073("path", {
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      }),
    ],
  });
function fn_1061c07b(arg) {
  const local = symbol_045()[0];
  return arg.children({
    url: local.url,
    path: local.path,
    matches: fn_df383351(local.path || local.url, arg.path, {}) !== false,
  });
}
const local_5b65c2e8 = "c_aside";
const local_3225ddbb = "c_asideBottom";
const local_4aa9675c = "c_logoutButton";
const local_e41b42f3 = "c_asideBrand";
const local_7045d39d = "c_asideBrandVersion";
const local_92241379 = "c_nav";
const local_087b0d80 = "c_navItem";
const local_6ab69625 = "c_active";
const local_165b4cbe = "c_iconWrapper";
const local_e42e0a7a = "c_portalButton";
const local_f503e9c0 = "c_portalActive";
const local_3401e491 = "c_portalImage";
const local_111bfc92 = "c_badge";
const local_bd6a6a7b = {
  aside: local_5b65c2e8,
  asideBottom: local_3225ddbb,
  logoutButton: local_4aa9675c,
  asideBrand: local_e41b42f3,
  asideBrandVersion: local_7045d39d,
  nav: local_92241379,
  navItem: local_087b0d80,
  active: local_6ab69625,
  iconWrapper: local_165b4cbe,
  portalButton: local_e42e0a7a,
  portalActive: local_f503e9c0,
  portalImage: local_3401e491,
  badge: local_111bfc92,
};
const local_b294611d = {
  HOME: "./site/index.html",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  VERIFY_EMAIL: "/verify-email",
  RESET_PASSWORD: "/reset-password",
  ONBOARDING: "/onboarding",
  TERMS: "/terms",
  PRIVACY: "/privacy",
  COOKIES: "/cookies",
  EXTERNAL: "/external",
  SUPPORT: "/support",
  CHILD_SAFETY: "/child-safety",
  SHOP: "/shop",
  SUBSCRIPTION_TERMS: "/subscription-terms",
};
const local_e11d105a = [
  local_b294611d.SHOP,
  local_b294611d.LOGIN,
  local_b294611d.REGISTER,
  local_b294611d.FORGOT_PASSWORD,
  local_b294611d.RESET_PASSWORD,
  local_b294611d.VERIFY_EMAIL,
  local_b294611d.TERMS,
  local_b294611d.PRIVACY,
  local_b294611d.COOKIES,
  local_b294611d.EXTERNAL,
  local_b294611d.SUPPORT,
  local_b294611d.CHILD_SAFETY,
  local_b294611d.SUBSCRIPTION_TERMS,
];
const local_e0268f28 = [
  local_b294611d.LOGIN,
  local_b294611d.REGISTER,
  local_b294611d.FORGOT_PASSWORD,
  local_b294611d.RESET_PASSWORD,
  local_b294611d.VERIFY_EMAIL,
  local_b294611d.ONBOARDING,
];
export const local_34f0cdfd = {
  auth: {
    signUp: "/sign-up",
    signIn: "/sign-in",
    verifyOtp: "/verify-otp",
    resendOtp: "/resend-otp",
    refresh: "/refresh",
    logout: "/logout",
    changePassword: "/change-password",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
    loginYandex: "/login/yandex",
    loginGoogle: "/login/google",
  },
  users: {
    me: "/users/me",
    profile: (arg) => `/users/${arg}`,
    updateProfile: "/users/me",
    privacy: "/users/me/privacy",
    follow: (arg) => `/users/${arg}/follow`,
    followers: (arg) => `/users/${arg}/followers`,
    following: (arg) => `/users/${arg}/following`,
    whoToFollow: "/users/suggestions/who-to-follow",
    topClans: "/users/stats/top-clans",
    pins: "/users/me/pins",
    setPin: "/users/me/pin",
    followStatus: "/users/follow-status",
    block: (arg) => `/users/${arg}/block`,
    blocked: "/users/me/blocked",
    checkUsername: "/users/check-username",
    deleteAccount: "/users/me",
    restoreAccount: "/users/me/restore",
  },
  posts: {
    list: "/posts",
    single: (arg) => `/posts/${arg}`,
    create: "/posts",
    update: (arg) => `/posts/${arg}`,
    delete: (arg) => `/posts/${arg}`,
    restore: (arg) => `/posts/${arg}/restore`,
    like: (arg) => `/posts/${arg}/like`,
    repost: (arg) => `/posts/${arg}/repost`,
    dwellLog: "/v1/i",
    interactionLog: "/v1/x",
    pin: (arg) => `/posts/${arg}/pin`,
    pollVote: (arg) => `/posts/${arg}/poll/vote`,
    byUser: (arg) => `/posts/user/${arg}`,
    likedByUser: (arg) => `/posts/user/${arg}/liked`,
    comments: (arg) => `/posts/${arg}/comments`,
  },
  comments: {
    edit: (arg) => `/comments/${arg}`,
    delete: (arg) => `/comments/${arg}`,
    restore: (arg) => `/comments/${arg}/restore`,
    like: (arg) => `/comments/${arg}/like`,
    replies: (arg) => `/comments/${arg}/replies`,
  },
  notifications: {
    list: "/notifications/",
    count: "/notifications/count",
    markAllRead: "/notifications/read-all",
    stream: "/notifications/stream",
    settings: "/notifications/settings",
  },
  files: {
    upload: "/files/upload",
    get: (arg) => `/files/${arg}`,
    delete: (arg) => `/files/${arg}`,
  },
  reports: {
    create: "/reports",
  },
  hashtags: {
    trending: "/hashtags/trending",
    posts: (arg) => `/hashtags/${encodeURIComponent(arg)}/posts`,
  },
  search: {
    global: "/search",
  },
  subscription: {
    status: "/v1/subscription/",
    pay: "/v1/subscription/pay",
    autoRenewal: "/v1/subscription/auto-renewal",
    bindCard: "/v1/subscription/bind-card",
    methods: "/v1/subscription/methods",
    methodDefault: (arg) => `/v1/subscription/methods/${arg}/default`,
    methodDelete: (arg) => `/v1/subscription/methods/${arg}`,
  },
  verification: {
    status: "/verification/status",
    submit: "/verification/submit",
  },
  platform: {
    changelog: "/platform/changelog",
    announcements: "/platform/announcements",
  },
  sessions: {
    list: "/v1/auth/sessions",
    revoke: (arg) => `/v1/auth/sessions/${arg}`,
    revokeOthers: "/v1/auth/sessions",
  },
};
const local_a375fc0d = {
  like: "post_reaction",
  comment_like: "comment_reaction",
  comment: "post_comment",
  reply: "comment_reply",
  repost: "post_repost",
  mention: "post_mention",
  follow: "follow",
  wall_post: "wall_post",
};
function fn_47e7e1a5(arg) {
  const local = arg.type === "repost" ? null : (arg.subjectId ?? null);
  return {
    id: arg.id,
    type: local_a375fc0d[arg.type] ?? "follow",
    entityId: local ?? arg.targetId ?? null,
    parentEntityId: local ? (arg.targetId ?? null) : null,
    isRead: arg.read ?? false,
    payload: {
      actors: arg.actor ? [arg.actor] : [],
      count: 1,
      entityPreview: arg.preview ?? null,
      commentId: local ?? undefined,
    },
    createdAt: arg.createdAt,
    updatedAt: arg.readAt ?? arg.createdAt,
  };
}
const local_a1ffb7a0 = {
  async getNotifications(arg = {}) {
    const local = new URLSearchParams();
    const local_2 = arg.limit ?? 20;
    local.set("limit", local_2.toString());
    const local_3 = arg.cursor ? parseInt(arg.cursor) : (arg.offset ?? 0);
    if (local_3 > 0) {
      local.set("offset", local_3.toString());
    }
    const local_4 = local.toString();
    const local_5 = `${local_34f0cdfd.notifications.list}${local_4 ? `?${local_4}` : ""}`;
    const local_6 = await local_1c641230.get(local_5);
    const local_7 = local_6.notifications ?? [];
    const local_8 = local_6.hasMore ? String(local_3 + local_7.length) : null;
    return {
      notifications: local_7.map(fn_47e7e1a5),
      nextCursor: local_8,
    };
  },
  async getUnreadCount() {
    return (await local_1c641230.get(local_34f0cdfd.notifications.count)).count;
  },
  async markAllAsRead() {
    await local_1c641230.post(local_34f0cdfd.notifications.markAllRead);
  },
  async getSettings() {
    const local = await local_1c641230.get(
      local_34f0cdfd.notifications.settings,
    );
    return {
      webEnabled: local.enabled ?? true,
      soundEnabled: local.sound ?? true,
      preferences: {
        follows: local.follows ?? true,
        reactions: local.likes ?? true,
        replies: local.comments ?? true,
        mentions: local.mentions ?? true,
        wallPosts: local.wallPosts ?? true,
      },
    };
  },
  async updateSettings(arg) {
    const local = {};
    if (arg.webEnabled !== undefined) {
      local.enabled = arg.webEnabled;
    }
    if (arg.soundEnabled !== undefined) {
      local.sound = arg.soundEnabled;
    }
    const local_2 = arg.preferences;
    if (local_2?.follows !== undefined) {
      local.follows = local_2.follows;
    }
    if (local_2?.reactions !== undefined) {
      local.likes = local_2.reactions;
    }
    if (local_2?.replies !== undefined) {
      local.comments = local_2.replies;
    }
    if (local_2?.mentions !== undefined) {
      local.mentions = local_2.mentions;
    }
    if (local_2?.wallPosts !== undefined) {
      local.wallPosts = local_2.wallPosts;
    }
    await local_1c641230.put(local_34f0cdfd.notifications.settings, local);
  },
};
const local_eeb70029 = [1000, 2000, 4000, 8000, 16000, 30000];
const local_f06debfc_26 = 0.3;
const local_f06debfc_27 = 15;
function fn_a180603d(arg) {
  const local = local_eeb70029[Math.min(arg, local_eeb70029.length - 1)];
  const local_2 = local * local_f06debfc_26 * (Math.random() * 2 - 1);
  return Math.round(local + local_2);
}
let local_0a9fda83_8 = null;
let local_0a9fda83_9 = null;
let local_f06debfc_28 = 0;
let local_0a9fda83_10 = null;
function fn_5b3d8f14(arg) {
  const { url: local, onMessage: local_2, onStatusChange: local_3 } = arg;
  function fn() {
    if (local_0a9fda83_8) {
      return;
    }
    if (!symbol_034()) {
      local_3("error");
      return;
    }
    local_3("connecting");
    local_0a9fda83_8 = new AbortController();
    (async () => {
      try {
        const local = await fn_bddeb5bb(local, {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            "Cache-Control": "no-cache",
          },
          signal: local_0a9fda83_8?.signal,
        });
        if (!local.ok) {
          if (local.status === 401) {
            local_3("error");
            return;
          }
          throw new Error(`SSE connection failed: ${local.status}`);
        }
        if (!local.body) {
          throw new Error("SSE response has no body");
        }
        local_f06debfc_28 = 0;
        local_3("connected");
        if (local_0a9fda83_10) {
          local_0a9fda83_10.cancel().catch(() => {});
          local_0a9fda83_10 = null;
        }
        const local_2 = local.body.getReader();
        local_0a9fda83_10 = local_2;
        const local_3 = new TextDecoder();
        let local_4 = "";
        while (true) {
          const { done: local, value: local_2 } = await local_2.read();
          if (local) {
            break;
          }
          local_4 += local_3.decode(local_2, {
            stream: true,
          });
          const local_3 = local_4.split(`
`);
          local_4 = local_3.pop() || "";
          let local_4 = "";
          let local_5 = "";
          for (const local of local_3) {
            if (local.startsWith("event: ")) {
              local_4 = local.slice(7);
            } else if (local.startsWith("data: ")) {
              local_5 = local.slice(6);
            } else if (local === "" && local_5) {
              try {
                const local = JSON.parse(local_5);
                const local_2 = local_4 || local.type;
                local_2(local_2, local);
              } catch (error) {
                console.error("SSE message parse error:", error, local_5);
              }
              local_4 = "";
              local_5 = "";
            }
          }
        }
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }
        local_3("error");
        if (local_f06debfc_28 >= local_f06debfc_27) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection",
          );
          local_0a9fda83_8 = null;
          return;
        }
        const local = fn_a180603d(local_f06debfc_28);
        local_f06debfc_28++;
        local_0a9fda83_9 = setTimeout(() => {
          local_0a9fda83_8 = null;
          fn();
        }, local);
      }
    })();
  }
  function fn_2() {
    if (local_0a9fda83_9) {
      clearTimeout(local_0a9fda83_9);
      local_0a9fda83_9 = null;
    }
    if (local_0a9fda83_10) {
      local_0a9fda83_10.cancel().catch(() => {});
      local_0a9fda83_10 = null;
    }
    if (local_0a9fda83_8) {
      local_0a9fda83_8.abort();
      local_0a9fda83_8 = null;
    }
    local_f06debfc_28 = 0;
    local_3("disconnected");
  }
  return {
    connect: fn,
    disconnect: fn_2,
  };
}
const local_6d574dcf = {
  notifications: [],
  unreadCount: 0,
  nextCursor: null,
  status: "idle",
  sseStatus: "disconnected",
  error: null,
  settings: null,
  settingsLoading: false,
  isInitialized: false,
  lastSseToast: null,
};
const local_b48f5f32 = fn_5b3d8f14({
  url: "/api/notifications/stream",
  onMessage: (arg, arg_2) => {
    if (arg === "notification") {
      const local = fn_47e7e1a5(arg_2);
      const local_2 = local.payload.actors[0];
      const local_3 = {
        id: local.id,
        type: local.type,
        actorName: local_2?.displayName || "Пользователь",
        actorUsername: local_2?.username || "",
        actorAvatar: local_2?.avatar || "",
        count: local.payload.count,
        message: fn_de743490(
          local.type,
          local_2?.displayName || "Пользователь",
          local.payload.count,
        ),
        entityId: local.entityId,
        parentEntityId: local.parentEntityId,
      };
      local_e4a1ecd0.setState((arg) => ({
        notifications: [local, ...arg.notifications],
        unreadCount: arg.unreadCount + 1,
        lastSseToast: local_3,
      }));
      if (arg_2.sound) {
        fn_02166569();
      }
    }
  },
  onStatusChange: (arg) => {
    local_e4a1ecd0.setState({
      sseStatus: arg,
      error: arg === "error" ? "SSE connection error" : null,
    });
  },
});
export const local_e4a1ecd0 = local_7d651640_2()((arg, arg_2) => ({
  ...local_6d574dcf,
  initialize: () => {
    if (!arg_2().isInitialized) {
      arg({
        isInitialized: true,
      });
      local_b48f5f32.connect();
      arg_2().fetchUnreadCount();
    }
  },
  fetchNotifications: async (arg = false) => {
    const {
      status: local,
      nextCursor: local_2,
      notifications: local_3,
    } = arg_2();
    if (
      local !== "loading" &&
      !(!arg && local_2 === null && local_3.length > 0)
    ) {
      arg({
        status: "loading",
        error: null,
      });
      try {
        const local = arg ? undefined : (local_2 ?? undefined);
        const local_2 = await local_a1ffb7a0.getNotifications({
          cursor: local,
          limit: 20,
        });
        arg({
          notifications: arg
            ? local_2.notifications
            : [...local_3, ...local_2.notifications],
          nextCursor: local_2.nextCursor,
          status: "success",
        });
      } catch (error) {
        const local =
          error instanceof Error
            ? error.message
            : "Failed to fetch notifications";
        arg({
          status: "error",
          error: local,
        });
      }
    }
  },
  fetchUnreadCount: async () => {
    try {
      const local = await local_a1ffb7a0.getUnreadCount();
      arg({
        unreadCount: local,
      });
    } catch {}
  },
  markAllAsRead: async () => {
    arg((arg) => ({
      notifications: arg.notifications.map((arg) => ({
        ...arg,
        isRead: true,
      })),
      unreadCount: 0,
    }));
    try {
      await local_a1ffb7a0.markAllAsRead();
    } catch {}
  },
  connectSSE: () => local_b48f5f32.connect(),
  disconnectSSE: () => local_b48f5f32.disconnect(),
  fetchSettings: async () => {
    arg({
      settingsLoading: true,
    });
    try {
      const local = await local_a1ffb7a0.getSettings();
      arg({
        settings: local,
        settingsLoading: false,
      });
    } catch {
      arg({
        settingsLoading: false,
      });
    }
  },
  updateSettings: async (arg) => {
    const { settings: local } = arg_2();
    if (local) {
      const local = {
        webEnabled: arg.webEnabled ?? local.webEnabled,
        soundEnabled: arg.soundEnabled ?? local.soundEnabled,
        preferences: {
          ...local.preferences,
          ...arg.preferences,
        },
      };
      arg({
        settings: local,
      });
    }
    try {
      await local_a1ffb7a0.updateSettings(arg);
    } catch {
      arg({
        settings: local,
      });
    }
  },
  reset: () => {
    local_b48f5f32.disconnect();
    arg(local_6d574dcf);
  },
}));
const local_95ee709d = {
  follow: (arg, arg_2) => {
    if (arg_2 > 1) {
      return `${arg} и ещё ${arg_2 - 1} подписались на вас`;
    }
    return `${arg} подписался(-ась) на вас`;
  },
  follow_request: (arg) => `${arg} хочет подписаться на вас`,
  follow_accepted: (arg) => `${arg} принял(а) вашу заявку`,
  post_reaction: (arg, arg_2) => {
    if (arg_2 > 1) {
      return `${arg} и ещё ${arg_2 - 1} оценили ваш пост`;
    }
    return `${arg} оценил(а) ваш пост`;
  },
  post_comment: (arg) => `${arg} прокомментировал(а) ваш пост`,
  post_repost: (arg, arg_2) => {
    if (arg_2 > 1) {
      return `${arg} и ещё ${arg_2 - 1} сделали репост`;
    }
    return `${arg} сделал(а) репост`;
  },
  comment_reaction: (arg, arg_2) => {
    if (arg_2 > 1) {
      return `${arg} и ещё ${arg_2 - 1} оценили ваш комментарий`;
    }
    return `${arg} оценил(а) ваш комментарий`;
  },
  comment_reply: (arg) => `${arg} ответил(а) на ваш комментарий`,
  post_mention: (arg) => `${arg} упомянул(а) вас в посте`,
  comment_mention: (arg) => `${arg} упомянул(а) вас в комментарии`,
  wall_post: (arg) => `${arg} написал(а) на вашей стене`,
};
function fn_de743490(arg, arg_2, arg_3) {
  const local = local_95ee709d[arg];
  if (local) {
    return local(arg_2, arg_3);
  }
  return "Новое уведомление";
}
function fn_02166569() {
  try {
    const local = new Audio("/assets/notification.ogg");
    local.volume = 0.5;
    local.play().catch(() => {});
  } catch {}
}
export const local_9812c6ee = () => local_e4a1ecd0((arg) => arg.unreadCount);
const local_9812c6ee_2 = () => local_e4a1ecd0((arg) => arg.lastSseToast);
const local_4e0e1df1 = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];
const local_865f321e = ["video/mp4", "video/webm", "video/quicktime"];
const local_2ace5464 = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const local_e23ce327 = ".mp4,.webm,.mov";
const symbol_070 = {
  async uploadMedia(arg) {
    const local = new FormData();
    local.append("file", arg);
    return await local_1c641230.uploadFormData(
      local_34f0cdfd.files.upload,
      local,
      {
        timeout: 300 * 1000,
      },
    );
  },
  async deleteFile(arg) {
    await local_1c641230.delete(local_34f0cdfd.files.delete(arg));
  },
  isValidImageType(arg) {
    return local_4e0e1df1.includes(arg.type);
  },
  isValidVideoType(arg) {
    return local_865f321e.includes(arg.type);
  },
  isValidMediaType(arg) {
    return this.isValidImageType(arg) || this.isValidVideoType(arg);
  },
};
export const local_91547acf = {
  async getChangelog() {
    const local = await local_1c641230.get(local_34f0cdfd.platform.changelog);
    if (Array.isArray(local)) {
      return local;
    }
    return local?.data ?? [];
  },
  async getAnnouncements() {
    const local = await local_1c641230.get(
      local_34f0cdfd.platform.announcements,
    );
    if (Array.isArray(local)) {
      return local;
    }
    return local?.announcements ?? [];
  },
};
export class clazz_fb2ffcc0 {
  cache = new Map();
  maxSize;
  ttl;
  constructor(arg = 100, arg_2 = 300 * 1000) {
    this.maxSize = arg;
    this.ttl = arg_2;
  }
  get(arg) {
    const local = this.cache.get(arg);
    if (local) {
      if (Date.now() - local.timestamp > this.ttl) {
        this.cache.delete(arg);
        return;
      }
      this.cache.delete(arg);
      this.cache.set(arg, local);
      return local.value;
    }
  }
  set(arg, arg_2) {
    if (this.cache.has(arg)) {
      this.cache.delete(arg);
    }
    if (this.cache.size >= this.maxSize) {
      const local = this.cache.keys().next().value;
      if (local) {
        this.cache.delete(local);
      }
    }
    this.cache.set(arg, {
      value: arg_2,
      timestamp: Date.now(),
    });
  }
  has(arg) {
    const local = this.cache.get(arg);
    if (local) {
      if (Date.now() - local.timestamp > this.ttl) {
        return (this.cache.delete(arg), false);
      }
      return true;
    }
    return false;
  }
  delete(arg) {
    return this.cache.delete(arg);
  }
  clear() {
    this.cache.clear();
  }
  getAge(arg) {
    const local = this.cache.get(arg);
    if (local) {
      return Date.now() - local.timestamp;
    }
  }
  isFresh(arg, arg_2 = this.ttl) {
    const local = this.getAge(arg);
    return local !== undefined && local < arg_2;
  }
  get size() {
    return this.cache.size;
  }
  cleanup() {
    const local = Date.now();
    for (const [local, local_2] of this.cache.entries()) {
      if (local - local_2.timestamp > this.ttl) {
        this.cache.delete(local);
      }
    }
  }
}
function fn_2da865ce(arg) {
  const local = {
    ...arg,
  };
  if ("verified" in local && !("isVerified" in local)) {
    local.isVerified = local.verified;
  }
  if (!("isVerified" in local)) {
    local.isVerified = false;
  }
  if (!("isPrivate" in local) || local.isPrivate === undefined) {
    local.isPrivate = false;
  }
  if (typeof local.banner === "string") {
    local.banner = {
      url: local.banner,
    };
  }
  if (
    !local.stats &&
    ("followersCount" in local || "followingCount" in local)
  ) {
    local.stats = {
      followers: local.followersCount ?? 0,
      following: local.followingCount ?? 0,
    };
  }
  if (
    !local.interaction &&
    ("isFollowing" in local ||
      "isFollowedBy" in local ||
      "isBlockedByMe" in local ||
      "isBlocking" in local ||
      "isBlockedByThem" in local)
  ) {
    local.interaction = {
      isFollowing: local.isFollowing ?? false,
      isFollowedBy: local.isFollowedBy ?? false,
      hasOutgoingRequest: local.hasOutgoingRequest ?? false,
      hasIncomingRequest: local.hasIncomingRequest ?? false,
      isBlocking: local.isBlocking ?? local.isBlockedByMe ?? false,
      isBlockedBy: local.isBlockedBy ?? local.isBlockedByThem ?? false,
    };
  }
  if (
    !local.privacySettings &&
    ("wallAccess" in local || "likesVisibility" in local)
  ) {
    local.privacySettings = {
      whoCanPostOnWall: local.wallAccess ?? "everyone",
      whoCanSeeMyPostReactions: local.likesVisibility ?? "everyone",
    };
  }
  return local;
}
const local_f50950e4 = new clazz_fb2ffcc0(100, 300 * 1000);
const local_aad0de78_3 = 60 * 1000;
setInterval(() => local_f50950e4.cleanup(), 120 * 1000);
const symbol_067 = {
  async checkUsername(arg) {
    return (
      await local_1c641230.get(
        `/users/check-username?username=${encodeURIComponent(arg)}`,
      )
    ).available;
  },
  async createProfile(arg) {
    return await local_1c641230.post("/users/profile", arg);
  },
  async getMyProfile() {
    const local = await local_1c641230.get(local_34f0cdfd.users.me);
    return fn_2da865ce(local);
  },
  async updateProfile(arg) {
    return await local_1c641230.put(local_34f0cdfd.users.updateProfile, arg);
  },
  async getProfileByUsername(arg) {
    const local = arg.toLowerCase();
    const local_2 = local_f50950e4.get(local);
    if (local_2 && local_f50950e4.isFresh(local, local_aad0de78_3)) {
      return (this._fetchAndCacheProfile(arg, local).catch(() => {}), local_2);
    }
    if (local_2) {
      return (this._fetchAndCacheProfile(arg, local).catch(() => {}), local_2);
    }
    return this._fetchAndCacheProfile(arg, local);
  },
  getCachedProfile(arg) {
    return local_f50950e4.get(arg.toLowerCase()) ?? null;
  },
  async _fetchAndCacheProfile(arg, arg_2) {
    const local = await local_1c641230.get(local_34f0cdfd.users.profile(arg), {
      skipErrorToast: [symbol_009.NOT_FOUND],
    });
    const local_2 = fn_2da865ce(local);
    local_f50950e4.set(arg_2, local_2);
    return local_2;
  },
  invalidateProfileCache(arg) {
    local_f50950e4.delete(arg.toLowerCase());
  },
  updateProfileCache(arg, arg_2) {
    const local = arg.toLowerCase();
    const local_2 = local_f50950e4.get(local);
    if (local_2) {
      local_f50950e4.set(local, {
        ...local_2,
        ...arg_2,
      });
    }
  },
  async followUser(arg) {
    await local_1c641230.post(local_34f0cdfd.users.follow(arg), {});
  },
  async unfollowUser(arg) {
    await local_1c641230.delete(local_34f0cdfd.users.follow(arg));
  },
  async pinPost(arg) {
    await local_1c641230.post(local_34f0cdfd.posts.pin(arg));
  },
  async unpinPost(arg) {
    await local_1c641230.delete(local_34f0cdfd.posts.pin(arg));
  },
  async getPrivacySettings() {
    const local = await local_1c641230.get(local_34f0cdfd.users.privacy);
    return {
      isPrivate: local.isPrivate ?? false,
      showLastSeen: local.showLastSeen ?? true,
      whoCanPostOnWall:
        local.whoCanPostOnWall ?? local.wallAccess ?? "everyone",
      whoCanSeeMyPostReactions:
        local.whoCanSeeMyPostReactions ?? local.likesVisibility ?? "everyone",
      whoCanMessageMe:
        local.whoCanMessageMe ?? local.messageAccess ?? "everyone",
    };
  },
  async updatePrivacySettings(arg) {
    const local = {};
    if (arg.whoCanPostOnWall) {
      local.wallAccess = arg.whoCanPostOnWall;
    }
    if (arg.whoCanSeeMyPostReactions) {
      local.likesVisibility = arg.whoCanSeeMyPostReactions;
    }
    if (arg.whoCanMessageMe) {
      local.messageAccess = arg.whoCanMessageMe;
    }
    if (arg.showLastSeen !== undefined) {
      local.showLastSeen = arg.showLastSeen;
    }
    await local_1c641230.put(local_34f0cdfd.users.privacy, local);
  },
  async getVerificationStatus() {
    try {
      return await local_1c641230.get(local_34f0cdfd.verification.status);
    } catch (error) {
      if (
        error &&
        typeof error === "object" &&
        "status" in error &&
        error.status === 404
      ) {
        return null;
      }
      throw error;
    }
  },
  async submitVerificationRequest(arg) {
    return await local_1c641230.post(local_34f0cdfd.verification.submit, {
      videoUrl: arg,
    });
  },
  async getMyPins() {
    const local = await local_1c641230.get(local_34f0cdfd.users.pins);
    const local_2 = local.data ?? local;
    return {
      pins: local_2.pins ?? [],
      activePin: local_2.activePin ?? null,
    };
  },
  async setActivePin(arg) {
    await local_1c641230.put(local_34f0cdfd.users.setPin, {
      slug: arg,
    });
  },
  async removeActivePin() {
    await local_1c641230.delete(local_34f0cdfd.users.setPin);
  },
  async deleteAccount() {
    await local_1c641230.delete(local_34f0cdfd.users.deleteAccount);
  },
  async restoreAccount() {
    await local_1c641230.post(local_34f0cdfd.users.restoreAccount);
  },
};
function fn_9d3c588a(arg) {
  const local = arg.user ?? arg;
  const local_2 = local.id ?? arg.id;
  return {
    id: arg.id,
    userId: local_2,
    displayName: local.displayName ?? "",
    username: local.username ?? null,
    avatar: local.avatar ?? "",
    isVerified: local.isVerified ?? local.verified ?? false,
    isPrivate: local.isPrivate ?? false,
    interaction: arg.interaction ?? {
      isFollowing: arg.isFollowing ?? false,
      isFollowedBy: arg.isFollowedBy ?? false,
      hasOutgoingRequest: arg.hasOutgoingRequest ?? false,
      hasIncomingRequest: arg.hasIncomingRequest ?? false,
      isBlocking: arg.isBlocking ?? false,
      isBlockedBy: arg.isBlockedBy ?? false,
    },
  };
}
export const local_7ef1de1e = local_7d651640_2((arg) => ({
  statuses: {},
  setStatuses: (arg) =>
    arg((arg) => ({
      statuses: {
        ...arg.statuses,
        ...arg,
      },
    })),
  setStatus: (arg, arg_2) =>
    arg((arg) => ({
      statuses: {
        ...arg.statuses,
        [arg]: arg_2,
      },
    })),
  clear: () =>
    arg({
      statuses: {},
    }),
}));
let local_a1e12a9e_7 = new Set();
let local_0a9fda83_11 = null;
function fn_c5a9d635() {
  if (!local_0a9fda83_11) {
    local_0a9fda83_11 = setTimeout(async () => {
      local_0a9fda83_11 = null;
      const local = Array.from(local_a1e12a9e_7);
      local_a1e12a9e_7.clear();
      if (local.length !== 0) {
        for (let local = 0; local < local.length; local += 20) {
          const local = local.slice(local, local + 20);
          try {
            const local = await symbol_004.batchFollowStatus(local);
            local_7ef1de1e.getState().setStatuses(local);
          } catch {}
        }
      }
    }, 50);
  }
}
export function fn_585b8996(arg) {
  const local = symbol_075((arg) => arg.profile?.id);
  const local_2 = local_7ef1de1e((arg) => arg.statuses);
  const local_3 = symbol_002("");
  symbol_077(() => {
    if (!local) {
      return;
    }
    const local = arg.filter(
      (arg) => arg !== local && local_2[arg] === undefined,
    );
    const local_2 = local.sort().join(",");
    if (!(local_2 === local_3.current || local_2 === "")) {
      local_3.current = local_2;
      for (const local of local) {
        local_a1e12a9e_7.add(local);
      }
      fn_c5a9d635();
    }
  }, [arg, local]);
  return {
    getStatus: symbol_069(
      (arg) => {
        if (arg !== local) {
          return local_2[arg];
        }
      },
      [local_2, local],
    ),
    statuses: local_2,
  };
}
const local_f50950e4_2 = new clazz_fb2ffcc0(500, 120 * 1000);
setInterval(() => local_f50950e4_2.cleanup(), 60 * 1000);
const symbol_004 = {
  async followUser(arg) {
    const local = await local_1c641230.post(
      local_34f0cdfd.users.follow(arg),
      {},
    );
    local_f50950e4_2.delete(arg);
    local_7ef1de1e.getState().setStatus(arg, true);
    if (local.following) {
      return "following";
    }
    return local.status ?? "following";
  },
  async unfollowUser(arg) {
    await local_1c641230.delete(local_34f0cdfd.users.follow(arg));
    local_f50950e4_2.delete(arg);
    local_7ef1de1e.getState().setStatus(arg, false);
  },
  async getFollowers(arg, arg_2 = {}) {
    const local = new URLSearchParams();
    const local_2 = arg_2.limit ?? 20;
    local.set("limit", local_2.toString());
    const local_3 = arg_2.cursor ? parseInt(arg_2.cursor) : (arg_2.page ?? 1);
    local.set("page", local_3.toString());
    const local_4 = local.toString();
    const local_5 = `${local_34f0cdfd.users.followers(arg)}${local_4 ? `?${local_4}` : ""}`;
    const local_6 = await local_1c641230.get(local_5);
    const local_7 = local_6.data ?? local_6;
    const local_8 = local_7.users ?? local_7.followers ?? [];
    const local_9 =
      (local_7.pagination?.hasMore ?? false) ? String(local_3 + 1) : null;
    return {
      data: local_8.map(fn_9d3c588a),
      nextCursor: local_9,
    };
  },
  async getFollowing(arg, arg_2 = {}) {
    const local = new URLSearchParams();
    const local_2 = arg_2.limit ?? 20;
    local.set("limit", local_2.toString());
    const local_3 = arg_2.cursor ? parseInt(arg_2.cursor) : (arg_2.page ?? 1);
    local.set("page", local_3.toString());
    const local_4 = local.toString();
    const local_5 = `${local_34f0cdfd.users.following(arg)}${local_4 ? `?${local_4}` : ""}`;
    const local_6 = await local_1c641230.get(local_5);
    const local_7 = local_6.data ?? local_6;
    const local_8 = local_7.users ?? local_7.following ?? [];
    const local_9 =
      (local_7.pagination?.hasMore ?? false) ? String(local_3 + 1) : null;
    return {
      data: local_8.map(fn_9d3c588a),
      nextCursor: local_9,
    };
  },
  async blockUser(arg) {
    await local_1c641230.post(local_34f0cdfd.users.block(arg), {});
    local_f50950e4_2.delete(arg);
  },
  async unblockUser(arg) {
    await local_1c641230.delete(local_34f0cdfd.users.block(arg));
    local_f50950e4_2.delete(arg);
  },
  async getBlockedUsers(arg = {}) {
    const local = new URLSearchParams();
    const local_2 = arg.limit ?? 20;
    local.set("limit", local_2.toString());
    const local_3 = arg.cursor ? parseInt(arg.cursor) : (arg.page ?? 1);
    local.set("page", local_3.toString());
    const local_4 = local.toString();
    const local_5 = `${local_34f0cdfd.users.blocked}${local_4 ? `?${local_4}` : ""}`;
    const local_6 = await local_1c641230.get(local_5);
    const local_7 = local_6.data ?? local_6;
    let local_8 = [];
    if (Array.isArray(local_7.users)) {
      local_8 = local_7.users;
    } else if (Array.isArray(local_7)) {
      local_8 = local_7;
    }
    const local_9 = local_8.map((arg) => {
      const local = arg.user ?? arg;
      return {
        id: local.id,
        username: local.username ?? null,
        displayName: local.displayName ?? "",
        avatar: local.avatar ?? null,
        isVerified: local.isVerified ?? local.verified ?? false,
        isPrivate: local.isPrivate ?? false,
        isBlocked: true,
      };
    });
    const local_10 = local_7.pagination?.hasMore ?? false;
    const local_11 = local_10 ? String(local_3 + 1) : null;
    return {
      users: local_9,
      nextCursor: local_11,
      hasMore: local_10,
    };
  },
  async batchFollowStatus(arg) {
    if (arg.length === 0) {
      return {};
    }
    return (
      (
        await local_1c641230.post(local_34f0cdfd.users.followStatus, {
          userIds: arg,
        })
      ).data ?? {}
    );
  },
  invalidateSocialCache(arg) {
    local_f50950e4_2.delete(arg);
  },
  clearSocialCache() {
    local_f50950e4_2.clear();
  },
};
function symbol_032(arg) {
  const local = local_7ef1de1e((arg) => arg.statuses[arg]);
  const local_2 = symbol_069(async () => {
    local_7ef1de1e.getState().setStatus(arg, true);
    try {
      await symbol_004.followUser(arg);
    } catch {
      local_7ef1de1e.getState().setStatus(arg, false);
    }
  }, [arg]);
  const local_3 = symbol_069(async () => {
    local_7ef1de1e.getState().setStatus(arg, false);
    try {
      await symbol_004.unfollowUser(arg);
    } catch {
      local_7ef1de1e.getState().setStatus(arg, true);
    }
  }, [arg]);
  return {
    isFollowing: local,
    follow: local_2,
    unfollow: local_3,
  };
}
const local_672a1b2c = "c_overlay";
const local_46cbcfdf = "c_modalWrapper";
const local_a4983375 = "c_wide";
const local_49250f21 = "c_modal";
const local_98a7309a = "c_frameless";
const local_f1c23efb = "c_header";
const local_9d9cf508 = "c_title";
const local_df39e8f2 = "c_closeButton";
const local_198a163a = "c_externalCloseButton";
const local_f16bfc83 = "c_mobileOverlay";
const local_cc8fa504 = "c_closing";
const local_124577c6 = "c_bottomSheet";
const local_59fd0a7f = "c_dragHandle";
const local_adf9efa2 = "c_dragIndicator";
const local_f87edbe4 = {
  overlay: local_672a1b2c,
  modalWrapper: local_46cbcfdf,
  wide: local_a4983375,
  modal: local_49250f21,
  frameless: local_98a7309a,
  header: local_f1c23efb,
  title: local_9d9cf508,
  closeButton: local_df39e8f2,
  externalCloseButton: local_198a163a,
  mobileOverlay: local_f16bfc83,
  closing: local_cc8fa504,
  bottomSheet: local_124577c6,
  dragHandle: local_59fd0a7f,
  dragIndicator: local_adf9efa2,
};
const local_dc634aac = fn_c05a86e1(null);
const local_f06debfc_29 = 100;
const local_f06debfc_30 = 0.5;
function symbol_014({
  children: arg,
  onClose: arg_2,
  title: arg_3,
  showHeader: arg_4 = true,
  showCloseButton: arg_5 = true,
  frameless: arg_6 = false,
  className: arg_7,
  contentClassName: arg_8,
  size: arg_9 = "default",
  onBeforeClose: arg_10,
}) {
  const local = symbol_002(null);
  const local_2 = symbol_002(null);
  const local_3 = symbol_002(null);
  const local_4 = symbol_006();
  const local_5 = symbol_002(0);
  const local_6 = symbol_002(false);
  const [local_7, local_8] = symbol_056(false);
  const local_9 = symbol_002(0);
  const local_10 = symbol_002(0);
  const local_11 = symbol_002(0);
  symbol_077(() => {
    const local = (arg) => {
      if (arg.key === "Escape") {
        if (arg_10 && !arg_10()) {
          return;
        }
        arg_2();
      }
    };
    const local_2 = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", local);
    return () => {
      document.removeEventListener("keydown", local);
      document.documentElement.style.overflow = local_2;
    };
  }, [arg_2]);
  const local_12 = (arg) => {
    local_3.current = arg.target;
  };
  const local_13 = (arg) => {
    if (local_3.current === local.current && arg.target === local.current) {
      if (local_4) {
        local_14();
      } else {
        if (arg_10 && !arg_10()) {
          return;
        }
        arg_2();
      }
    }
    local_3.current = null;
  };
  const local_14 = symbol_069(() => {
    if (arg_10 && !arg_10()) {
      local_18(0, "transform 0.2s ease-out");
      local_19(0);
      local_5.current = 0;
      return;
    }
    local_8(true);
    setTimeout(() => {
      arg_2();
    }, 200);
  }, [arg_2, arg_10]);
  const local_15 = symbol_002(false);
  const local_16 = symbol_002(false);
  const local_17 = (arg) => {
    let local = arg;
    while (local && local !== local_2.current) {
      const local = window.getComputedStyle(local).overflowY;
      if (
        (local === "auto" || local === "scroll") &&
        local.scrollHeight > local.clientHeight
      ) {
        return local;
      }
      local = local.parentElement;
    }
    return null;
  };
  const local_18 = (arg, arg_2) => {
    if (local_2.current) {
      local_2.current.style.transform = arg > 0 ? `translateY(${arg}px)` : "";
      local_2.current.style.transition = arg_2 || "";
    }
  };
  const local_19 = (arg) => {
    if (local.current && arg > 0) {
      local.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(0, 0.4 - arg / 500)})`;
    } else if (local.current) {
      local.current.style.backgroundColor = "";
    }
  };
  const local_20 = (arg) => {
    if (!local_4) {
      return;
    }
    local_9.current = arg.touches[0].clientY;
    local_10.current = Date.now();
    local_11.current = arg.touches[0].clientY;
    const local = arg.target;
    if (local.closest(`.${local_f87edbe4.dragHandle}`)) {
      local_15.current = true;
      local_16.current = true;
      local_6.current = true;
      if (local_2.current) {
        local_2.current.style.transition = "none";
      }
      return;
    }
    local_15.current = false;
    if (
      local.closest(
        'button, a, input, textarea, select, video, [role="button"]',
      )
    ) {
      local_16.current = false;
      return;
    }
    if (local.tagName === "CANVAS" || local.closest("canvas")) {
      local_16.current = false;
      return;
    }
    const local_2 = local_17(local);
    local_16.current = !local_2 || local_2.scrollTop === 0;
  };
  const local_21 = (arg) => {
    if (!local_4) {
      return;
    }
    const local = arg.touches[0].clientY;
    const local_2 = local - local_9.current;
    local_11.current = local;
    if (local_15.current) {
      if (local_2 > 0) {
        local_5.current = local_2;
        local_18(local_2);
        local_19(local_2);
        arg.preventDefault();
      }
      return;
    }
    if (local_16.current) {
      if (local_6.current && local_5.current > 0) {
        if (local_2 > 0) {
          local_5.current = local_2;
          local_18(local_2);
          local_19(local_2);
          arg.preventDefault();
        } else {
          local_5.current = 0;
          local_6.current = false;
          local_18(0);
          local_19(0);
        }
        return;
      }
      if (local_2 > 0) {
        if (!local_6.current) {
          local_6.current = true;
          if (local_2.current) {
            local_2.current.style.transition = "none";
          }
        }
        local_5.current = local_2;
        local_18(local_2);
        local_19(local_2);
        arg.preventDefault();
      }
    }
  };
  const local_22 = () => {
    if (!local_4) {
      return;
    }
    const local = local_11.current - local_9.current;
    const local_2 = Date.now() - local_10.current;
    const local_3 = local / local_2;
    if (
      local_6.current &&
      (local > local_f06debfc_29 || local_3 > local_f06debfc_30)
    ) {
      local_14();
    } else if (local_5.current > 0) {
      local_18(0, "transform 0.2s ease-out");
      local_19(0);
      local_5.current = 0;
    }
    local_6.current = false;
    local_15.current = false;
    local_16.current = false;
  };
  const local_23 = (() => {
    if (local_4 && local_7) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();
  const local_24 = {
    onClose: arg_2,
    isMobile: local_4,
    isClosing: local_7,
    handleClose: local_14,
  };
  return symbol_073(local_dc634aac.Provider, {
    value: local_24,
    children: symbol_073("div", {
      ref: local,
      className: `${local_f87edbe4.overlay} ${local_4 ? local_f87edbe4.mobileOverlay : ""} ${local_7 ? local_f87edbe4.closing : ""}`,
      onMouseDown: local_12,
      onMouseUp: local_13,
      children: symbol_073("div", {
        ref: local_2,
        className: `${local_f87edbe4.modalWrapper} ${arg_9 === "wide" ? local_f87edbe4.wide : ""} ${local_4 ? local_f87edbe4.bottomSheet : ""}`,
        style: local_23,
        onTouchStart: local_20,
        onTouchMove: local_21,
        onTouchEnd: local_22,
        children: [
          arg_6 &&
            !local_4 &&
            symbol_073("button", {
              type: "button",
              className: local_f87edbe4.externalCloseButton,
              onClick: (arg) => {
                arg.stopPropagation();
                arg_2();
              },
              children: symbol_073(symbol_049, {
                size: 24,
              }),
            }),
          local_4 &&
            symbol_073("div", {
              className: local_f87edbe4.dragHandle,
              children: symbol_073("div", {
                className: local_f87edbe4.dragIndicator,
              }),
            }),
          symbol_073("div", {
            className: `${local_f87edbe4.modal} ${arg_6 ? local_f87edbe4.frameless : ""} ${arg_7 || ""} ${arg_8 || ""}`,
            children: [
              !arg_6 &&
                arg_4 &&
                !local_4 &&
                symbol_073("div", {
                  className: local_f87edbe4.header,
                  children: [
                    symbol_073("span", {
                      className: local_f87edbe4.title,
                      children: arg_3,
                    }),
                    arg_5 &&
                      symbol_073("button", {
                        type: "button",
                        className: local_f87edbe4.closeButton,
                        onClick: (arg) => {
                          arg.stopPropagation();
                          arg_2();
                        },
                        children: symbol_073(symbol_049, {
                          size: 16,
                        }),
                      }),
                  ],
                }),
              arg,
            ],
          }),
        ],
      }),
    }),
  });
}
const local_ee7a6f6b = "c_spinner";
const local_5b42bf7d = "uuPt";
const local_d3808147 = "c_xs";
const local_9350219d = "c_sm";
const local_a8a24a1e = "c_md";
const local_afefddb7 = "c_lg";
const local_0ab9bf6f = {
  spinner: local_ee7a6f6b,
  spin: local_5b42bf7d,
  xs: local_d3808147,
  sm: local_9350219d,
  md: local_a8a24a1e,
  lg: local_afefddb7,
};
export function fn_42234aa5({ size: arg = "md", className: arg_2 }) {
  const local = [local_0ab9bf6f.spinner, local_0ab9bf6f[arg], arg_2]
    .filter(Boolean)
    .join("./entry.js");
  return symbol_073("div", {
    className: local,
    children: symbol_073(symbol_048, {}),
  });
}
const local_9e87ce8c = "c_button";
const local_fcc2eb6c = "c_primary";
const local_a394e6fb = "c_secondary";
const local_bf064b97 = "c_ghost";
const local_87642add = "c_accent";
const local_cd953748 = "c_danger";
const local_9350219d_2 = "c_sm";
const local_a8a24a1e_2 = "c_md";
const local_afefddb7_2 = "c_lg";
const local_b250ba32 = "c_fullWidth";
const local_e8fe33fc = "c_iconOnly";
const local_7aaa5b57 = "c_loading";
const local_d09bc3f9 = {
  button: local_9e87ce8c,
  primary: local_fcc2eb6c,
  secondary: local_a394e6fb,
  ghost: local_bf064b97,
  accent: local_87642add,
  danger: local_cd953748,
  sm: local_9350219d_2,
  md: local_a8a24a1e_2,
  lg: local_afefddb7_2,
  fullWidth: local_b250ba32,
  iconOnly: local_e8fe33fc,
  loading: local_7aaa5b57,
};
function symbol_003({
  children: arg,
  variant: arg_2 = "primary",
  size: arg_3 = "md",
  fullWidth: arg_4 = false,
  iconOnly: arg_5 = false,
  loading: arg_6 = false,
  className: arg_7,
  type: arg_8 = "button",
  disabled: arg_9,
  ...arg_10
}) {
  const local = [
    local_d09bc3f9.button,
    local_d09bc3f9[arg_2],
    local_d09bc3f9[arg_3],
    arg_4 && local_d09bc3f9.fullWidth,
    arg_5 && local_d09bc3f9.iconOnly,
    arg_6 && local_d09bc3f9.loading,
    arg_7,
  ]
    .filter(Boolean)
    .join("./entry.js");
  return symbol_073("button", {
    type: arg_8,
    className: local,
    disabled: arg_9 || arg_6,
    ...arg_10,
    children: arg_6
      ? symbol_073(fn_42234aa5, {
          size: "sm",
        })
      : arg,
  });
}
const local_4d84dbb6 = "c_content";
const local_9d9cf508_2 = "c_title";
const local_8c84ac4c = "c_subtitle";
const local_8c4f8b4b = "c_actions";
const local_825c4075 = {
  content: local_4d84dbb6,
  title: local_9d9cf508_2,
  subtitle: local_8c84ac4c,
  actions: local_8c4f8b4b,
};
function symbol_008({ displayName: arg, onConfirm: arg_2, onClose: arg_3 }) {
  return symbol_073(symbol_014, {
    onClose: arg_3,
    showHeader: false,
    children: symbol_073("div", {
      className: local_825c4075.content,
      children: [
        symbol_073("h2", {
          className: local_825c4075.title,
          children: "Отписаться?",
        }),
        symbol_073("p", {
          className: local_825c4075.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            symbol_073("strong", {
              children: arg,
            }),
            "?",
          ],
        }),
        symbol_073("div", {
          className: local_825c4075.actions,
          children: [
            symbol_073(symbol_003, {
              variant: "secondary",
              onClick: (arg) => {
                arg.stopPropagation();
                arg_3();
              },
              children: "Отмена",
            }),
            symbol_073(symbol_003, {
              variant: "danger",
              onClick: (arg) => {
                arg.stopPropagation();
                arg_2();
                arg_3();
              },
              children: "Отписаться",
            }),
          ],
        }),
      ],
    }),
  });
}
const local_dc634aac_2 = fn_c05a86e1(null);
let local_f06debfc_31 = 0;
function fn_4ef4b2cc({ children: arg }) {
  const [local, local_2] = symbol_056([]);
  const local_3 = symbol_069((arg) => {
    const local = `modal-${++local_f06debfc_31}`;
    local_2((arg) => [
      ...arg,
      {
        id: local,
        component: arg,
      },
    ]);
    return local;
  }, []);
  const local_4 = symbol_069((arg) => {
    local_2((arg) => {
      if (arg) {
        return arg.filter((arg) => arg.id !== arg);
      }
      return arg.slice(0, -1);
    });
  }, []);
  const local_5 = symbol_069(() => {
    local_2([]);
  }, []);
  symbol_077(() => {
    let local = window.location.pathname + window.location.search;
    const local_2 = () => {
      const local = window.location.pathname + window.location.search;
      if (local !== local) {
        local = local;
        local_2([]);
      }
    };
    window.addEventListener("popstate", local_2);
    const local_3 = history.pushState;
    history.pushState = function (...arg) {
      local_3.apply(this, arg);
      local_2();
    };
    const local_4 = history.replaceState;
    history.replaceState = function (...arg) {
      local_4.apply(this, arg);
      local_2();
    };
    return () => {
      window.removeEventListener("popstate", local_2);
      history.pushState = local_3;
      history.replaceState = local_4;
    };
  }, []);
  return symbol_073(local_dc634aac_2.Provider, {
    value: {
      openModal: local_3,
      closeModal: local_4,
      closeAllModals: local_5,
    },
    children: [
      arg,
      local.length > 0 &&
        symbol_073(fn_1348a3fa, {
          modals: local,
        }),
    ],
  });
}
function fn_1348a3fa({ modals: arg }) {
  return symbol_001(
    symbol_073(symbol_063, {
      children: arg.map(({ id: arg, component: arg_2 }) =>
        symbol_073(
          symbol_062,
          {
            fallback: null,
            children: arg_2,
          },
          arg,
        ),
      ),
    }),
    document.body,
  );
}
function symbol_066() {
  const local = fn_4eb8acde(local_dc634aac_2);
  if (!local) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return local;
}
const local_5d627137 = "c_avatar";
const local_d3808147_2 = "c_xs";
const local_0e81c732 = "c_emoji";
const local_0186644c = "c_onlineDot";
const local_9350219d_3 = "c_sm";
const local_a8a24a1e_3 = "c_md";
const local_afefddb7_3 = "c_lg";
const local_3208c7e3 = "c_xl";
const local_111bfc92_2 = "c_badge";
const local_117e7cdb = "c_followBadge";
const local_3242b14b = "c_notFollowing";
const local_55a49589 = "c_following";
const local_0ce30cdf = {
  avatar: local_5d627137,
  xs: local_d3808147_2,
  emoji: local_0e81c732,
  onlineDot: local_0186644c,
  sm: local_9350219d_3,
  md: local_a8a24a1e_3,
  lg: local_afefddb7_3,
  xl: local_3208c7e3,
  badge: local_111bfc92_2,
  followBadge: local_117e7cdb,
  notFollowing: local_3242b14b,
  following: local_55a49589,
};
function fn_d2f1ecf2(arg) {
  return (
    arg.startsWith("http://") ||
    arg.startsWith("https://") ||
    arg.startsWith("./site/index.html")
  );
}
function symbol_058({
  src: arg,
  alt: arg_2,
  size: arg_3 = "md",
  badge: arg_4,
  online: arg_5,
  followBadge: arg_6,
  onFollowBadgeClick: arg_7,
  className: arg_8,
}) {
  const local = arg ? fn_d2f1ecf2(arg) : false;
  return symbol_073("div", {
    className: `${local_0ce30cdf.avatar} ${local_0ce30cdf[arg_3]} ${arg_8 || ""}`,
    children: [
      local && arg
        ? symbol_073("img", {
            src: arg,
            alt: arg_2 || "",
          })
        : symbol_073("span", {
            className: local_0ce30cdf.emoji,
            children: arg || "👤",
          }),
      arg_4 &&
        symbol_073("div", {
          className: local_0ce30cdf.badge,
          children: arg_4,
        }),
      arg_6 !== undefined
        ? symbol_073("button", {
            type: "button",
            className: `${local_0ce30cdf.followBadge} ${arg_6 ? local_0ce30cdf.following : local_0ce30cdf.notFollowing}`,
            onClick: (arg) => {
              arg.preventDefault();
              arg.stopPropagation();
              arg_7?.(arg);
            },
            children: arg_6
              ? symbol_073(local_327b00ca, {
                  size: 8,
                })
              : symbol_073(local_e2a3198b, {
                  size: 8,
                }),
          })
        : arg_5 &&
          symbol_073("span", {
            className: local_0ce30cdf.onlineDot,
          }),
    ],
  });
}
const local_c291d9cf = "c_userName";
const local_90464304 = "c_pinBadge";
const local_95ed4c70 = "c_text";
const local_60af8289 = "c_nukstaGlow";
const local_d3808147_3 = "c_xs";
const local_9350219d_4 = "c_sm";
const local_a8a24a1e_4 = "c_md";
const local_afefddb7_4 = "c_lg";
const local_67af4b99 = "c_pinWrapper";
const local_d39047f1 = "c_pinClickable";
const local_f845cc15 = "c_pinTooltip";
const local_c9e9a898 = "c_pinTooltipFadeIn";
const local_52a6dce0 = "c_pinTooltipRow";
const local_07f5c886 = "c_pinTooltipLabel";
const local_7c8859d6 = "c_pinTooltipArrow";
const local_e3745767 = {
  userName: local_c291d9cf,
  pinBadge: local_90464304,
  text: local_95ed4c70,
  nukstaGlow: local_60af8289,
  xs: local_d3808147_3,
  sm: local_9350219d_4,
  md: local_a8a24a1e_4,
  lg: local_afefddb7_4,
  pinWrapper: local_67af4b99,
  pinClickable: local_d39047f1,
  pinTooltip: local_f845cc15,
  pinTooltipFadeIn: local_c9e9a898,
  pinTooltipRow: local_52a6dce0,
  pinTooltipLabel: local_07f5c886,
  pinTooltipArrow: local_7c8859d6,
};
const local_f2c3a8a6 = symbol_078(() =>
  symbol_064(
    () => import("./routes/subscription-modal.js"),
    local_5b673d6a([0, 1, 2, 3, 4, 5, 6, 7]),
  ).then((arg) => ({
    default: arg.SubscriptionModal,
  })),
);
const local_d968b24d = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 22,
};
const local_e22f9db9 = "subscription_nuksta";
function symbol_022({
  name: arg,
  verified: arg_2,
  hasNuksta: arg_3,
  pin: arg_4,
  size: arg_5 = "md",
  className: arg_6,
}) {
  const local = local_d968b24d[arg_5];
  const local_2 = symbol_002(null);
  const [local_3, local_4] = symbol_056(null);
  const [local_5, local_6] = symbol_056(false);
  const local_7 = arg_4?.slug === local_e22f9db9;
  const local_8 = symbol_069(() => {
    if (!local_2.current) {
      return;
    }
    const local = local_2.current.getBoundingClientRect();
    local_4({
      x: local.left + local.width / 2,
      y: local.top,
    });
  }, []);
  const local_9 = symbol_069(() => {
    local_4(null);
  }, []);
  return symbol_073("span", {
    className: `${local_e3745767.userName} ${local_e3745767[arg_5]} ${arg_6 || ""}`,
    children: [
      arg_3
        ? symbol_073("span", {
            className: local_e3745767.nukstaGlow,
            children: symbol_073("span", {
              className: local_e3745767.text,
              children: arg,
            }),
          })
        : symbol_073("span", {
            className: local_e3745767.text,
            children: arg,
          }),
      arg_2 && symbol_073(symbol_059, {}),
      arg_4 &&
        symbol_073("span", {
          ref: local_2,
          className: `${local_e3745767.pinWrapper} ${local_7 ? local_e3745767.pinClickable : ""}`,
          onMouseEnter: local_8,
          onMouseLeave: local_9,
          onClick: local_7
            ? (arg) => {
                arg.stopPropagation();
                arg.preventDefault();
                local_6(true);
              }
            : undefined,
          children: [
            symbol_073("img", {
              src: arg_4.url,
              alt: arg_4.name,
              className: local_e3745767.pinBadge,
              width: local,
              height: local,
            }),
            local_3 &&
              symbol_001(
                symbol_073("div", {
                  className: local_e3745767.pinTooltip,
                  style: {
                    left: `${local_3.x}px`,
                    top: `${local_3.y}px`,
                  },
                  children: [
                    symbol_073("span", {
                      className: local_e3745767.pinTooltipRow,
                      children: [
                        symbol_073("span", {
                          className: local_e3745767.pinTooltipLabel,
                          children: "Пин:",
                        }),
                        "./entry.js",
                        arg_4.name,
                      ],
                    }),
                    arg_4.description &&
                      symbol_073("span", {
                        className: local_e3745767.pinTooltipRow,
                        children: [
                          symbol_073("span", {
                            className: local_e3745767.pinTooltipLabel,
                            children: "Ивент:",
                          }),
                          "./entry.js",
                          arg_4.description,
                        ],
                      }),
                    symbol_073("span", {
                      className: local_e3745767.pinTooltipArrow,
                    }),
                  ],
                }),
                document.body,
              ),
          ],
        }),
      local_5 &&
        symbol_073(symbol_062, {
          fallback: null,
          children: symbol_073(local_f2c3a8a6, {
            isOpen: true,
            onClose: () => local_6(false),
          }),
        }),
    ],
  });
}
function fn_53c06807(arg) {
  return "accessToken" in arg;
}
function fn_53c06807_2(arg) {
  return "accessToken" in arg;
}
const local_1014925d = {
  skipErrorToast: true,
};
const symbol_039 = {
  async register(arg) {
    return await local_8b3b0704.post(
      local_34f0cdfd.auth.signUp,
      arg,
      local_1014925d,
    );
  },
  async login(arg) {
    return await local_8b3b0704.post(
      local_34f0cdfd.auth.signIn,
      arg,
      local_1014925d,
    );
  },
  async verifyOtp(arg) {
    return await local_8b3b0704.post(
      local_34f0cdfd.auth.verifyOtp,
      arg,
      local_1014925d,
    );
  },
  async resendOtp(arg) {
    await local_8b3b0704.post(
      local_34f0cdfd.auth.resendOtp,
      arg,
      local_1014925d,
    );
  },
  async refreshSession() {
    return await local_8b3b0704.post(local_34f0cdfd.auth.refresh);
  },
  async logout() {
    await local_8b3b0704.post(local_34f0cdfd.auth.logout);
  },
  async logoutAll() {
    await local_8b3b0704.post(`${local_34f0cdfd.auth.logout}-all`);
  },
  async forgotPassword(arg) {
    return await local_8b3b0704.post(
      local_34f0cdfd.auth.forgotPassword,
      arg,
      local_1014925d,
    );
  },
  async resetPassword(arg) {
    await local_8b3b0704.post(
      local_34f0cdfd.auth.resetPassword,
      arg,
      local_1014925d,
    );
  },
  async changePassword(arg) {
    await local_8b3b0704.post(
      local_34f0cdfd.auth.changePassword,
      arg,
      local_1014925d,
    );
  },
};
function fn_eb364989(arg, arg_2) {
  if (!arg) {
    fn_92f56a1f(null);
    return;
  }
  fn_92f56a1f({
    id: arg.id,
    username: arg.username ?? undefined,
    email: arg_2 ?? undefined,
  });
}
const local_7ede37c7 = {
  status: "idle",
  profile: null,
  email: null,
  pendingEmail: null,
  pendingPassword: null,
  flowToken: null,
  error: null,
  errorCode: null,
  canRestore: null,
  restoreDeadline: null,
};
const symbol_075 = local_7d651640_2()(
  symbol_042(
    (arg, arg_2) => {
      const local = fn_e7e0f229;
      fn_bdc7aa48(async () => {
        try {
          const local = await symbol_039.refreshSession();
          local(local.accessToken);
          return local.accessToken;
        } catch (error) {
          if (symbol_076(error) && error.status >= 500) {
            return (
              arg({
                status: "service_error",
              }),
              null
            );
          }
          return (arg_2().reset(), null);
        }
      });
      local_1c641230.setOnUnauthorizedCallback(() => {
        if (arg_2().status !== "service_error") {
          arg_2().reset();
        }
      });
      return {
        ...local_7ede37c7,
        register: async (arg) => {
          arg({
            status: "loading",
            error: null,
            errorCode: null,
          });
          try {
            const local = await symbol_039.register(arg);
            arg({
              status: "needs_verification",
              pendingEmail: arg.email,
              pendingPassword: arg.password,
              flowToken: local.flowToken ?? null,
            });
            return local.nextStep;
          } catch (error) {
            const local = symbol_076(error)
              ? error.message
              : "Registration failed";
            const local_2 = symbol_076(error) ? error.code : null;
            arg({
              status: "unauthenticated",
              error: local,
              errorCode: local_2,
            });
            throw error;
          }
        },
        login: async (arg) => {
          arg({
            status: "loading",
            error: null,
            errorCode: null,
          });
          try {
            const local = await symbol_039.login(arg);
            if (fn_53c06807_2(local)) {
              local(local.accessToken);
              try {
                await arg_2().fetchProfile();
                if (arg_2().status !== "account_deleted") {
                  arg({
                    status: "authenticated",
                    pendingEmail: null,
                    email: arg.email,
                  });
                  fn_eb364989(arg_2().profile, arg.email);
                }
              } catch (error) {
                if (
                  symbol_076(error) &&
                  (error.code === symbol_037.ENTITY_NOT_FOUND ||
                    error.status === 404)
                ) {
                  arg({
                    status: "needs_profile",
                    pendingEmail: null,
                    email: arg.email,
                  });
                } else {
                  throw error;
                }
              }
              return "authenticated";
            }
            const local_2 = local;
            arg({
              status: "needs_verification",
              pendingEmail: arg.email,
              pendingPassword: arg.password,
              flowToken: local_2.flowToken ?? null,
            });
            return local.nextStep;
          } catch (error) {
            const local = symbol_076(error) ? error.message : "Login failed";
            const local_2 = symbol_076(error) ? error.code : null;
            arg({
              status: "unauthenticated",
              error: local,
              errorCode: local_2,
            });
            throw error;
          }
        },
        verifyOtp: async (arg) => {
          arg({
            status: "loading",
            error: null,
            errorCode: null,
          });
          const {
            pendingEmail: local,
            pendingPassword: local_2,
            flowToken: local_3,
          } = arg_2();
          try {
            const local = await symbol_039.verifyOtp({
              email: local || "",
              password: local_2 || "",
              otp: arg,
              flowToken: local_3 || "",
            });
            arg({
              pendingPassword: null,
            });
            if (fn_53c06807(local)) {
              local(local.accessToken);
              const local = local;
              try {
                await arg_2().fetchProfile();
                if (arg_2().status !== "account_deleted") {
                  arg({
                    status: "authenticated",
                    pendingEmail: null,
                    pendingPassword: null,
                    flowToken: null,
                    email: local,
                  });
                  fn_eb364989(arg_2().profile, local);
                }
              } catch (error) {
                if (
                  symbol_076(error) &&
                  (error.code === symbol_037.ENTITY_NOT_FOUND ||
                    error.status === 404)
                ) {
                  arg({
                    status: "needs_profile",
                    pendingEmail: null,
                    pendingPassword: null,
                    flowToken: null,
                    email: local,
                  });
                } else {
                  throw error;
                }
              }
              return "authenticated";
            }
            arg({
              status: "needs_verification",
            });
            return "password_reset";
          } catch (error) {
            const local = symbol_076(error)
              ? error.message
              : "Verification failed";
            const local_2 = symbol_076(error) ? error.code : null;
            arg({
              status: "needs_verification",
              error: local,
              errorCode: local_2,
            });
            throw error;
          }
        },
        resendOtp: async () => {
          arg({
            error: null,
            errorCode: null,
          });
          const { pendingEmail: local, flowToken: local_2 } = arg_2();
          try {
            await symbol_039.resendOtp({
              email: local || "",
              flowToken: local_2 || "",
            });
          } catch (error) {
            const local = symbol_076(error)
              ? error.message
              : "Failed to resend code";
            const local_2 = symbol_076(error) ? error.code : null;
            arg({
              error: local,
              errorCode: local_2,
            });
            throw error;
          }
        },
        createProfile: async (arg) => {
          arg({
            error: null,
            errorCode: null,
          });
          try {
            await symbol_067.createProfile(arg);
            await arg_2().fetchProfile();
            arg({
              status: "authenticated",
            });
            fn_eb364989(arg_2().profile, arg_2().email);
          } catch (error) {
            const local = symbol_076(error)
              ? error.message
              : "Failed to create profile";
            const local_2 = symbol_076(error) ? error.code : null;
            arg({
              error: local,
              errorCode: local_2,
            });
            throw error;
          }
        },
        logout: async () => {
          try {
            await symbol_039.logout();
          } catch {
          } finally {
            local(null);
            arg({
              ...local_7ede37c7,
              status: "unauthenticated",
            });
            fn_eb364989(null, null);
          }
        },
        logoutAll: async () => {
          try {
            await symbol_039.logoutAll();
          } catch {
          } finally {
            local(null);
            arg({
              ...local_7ede37c7,
              status: "unauthenticated",
            });
            fn_eb364989(null, null);
          }
        },
        refreshSession: async () => {
          try {
            const local = await symbol_039.refreshSession();
            local(local.accessToken);
            return local.accessToken;
          } catch (error) {
            if (symbol_076(error) && error.status >= 500) {
              return (
                arg({
                  status: "service_error",
                }),
                null
              );
            }
            return (arg_2().reset(), null);
          }
        },
        fetchProfile: async () => {
          const local = await symbol_067.getMyProfile();
          if (local.isDeleted) {
            arg({
              status: "account_deleted",
              profile: null,
              canRestore: local.canRestore ?? false,
              restoreDeadline: local.restoreDeadline ?? null,
            });
            return;
          }
          arg({
            profile: local,
          });
        },
        initialize: async () => {
          if (
            !document.cookie
              .split(";")
              .some((arg) => arg.trim().startsWith("is_auth="))
          ) {
            arg({
              status: "unauthenticated",
            });
            return;
          }
          arg({
            status: "loading",
          });
          try {
            if (!(await arg_2().refreshSession())) {
              if (arg_2().status === "service_error") {
                return;
              }
              arg({
                status: "unauthenticated",
              });
              return;
            }
            try {
              await arg_2().fetchProfile();
              if (arg_2().status !== "account_deleted") {
                arg({
                  status: "authenticated",
                });
                fn_eb364989(arg_2().profile, arg_2().email);
              }
            } catch (error) {
              if (
                symbol_076(error) &&
                (error.code === symbol_037.ENTITY_NOT_FOUND ||
                  error.status === 404)
              ) {
                arg({
                  status: "needs_profile",
                });
              } else {
                throw error;
              }
            }
          } catch (error) {
            if (symbol_076(error) && error.status >= 500) {
              arg({
                status: "service_error",
              });
            } else {
              arg({
                status: "unauthenticated",
              });
            }
          }
        },
        deleteAccount: async () => {
          await symbol_067.deleteAccount();
          await arg_2().logout();
        },
        restoreAccount: async () => {
          await symbol_067.restoreAccount();
          await arg_2().fetchProfile();
          const { status: local } = arg_2();
          if (local === "account_deleted") {
            arg({
              status: "authenticated",
              canRestore: null,
              restoreDeadline: null,
            });
          }
        },
        clearError: () => {
          arg({
            error: null,
            errorCode: null,
          });
        },
        reset: () => {
          local(null);
          arg({
            ...local_7ede37c7,
            status: "unauthenticated",
          });
          fn_eb364989(null, null);
        },
        setProfile: (arg) => {
          arg({
            profile: arg,
          });
        },
      };
    },
    {
      name: "auth-storage",
      storage: fn_fe2ed958(() => sessionStorage),
      partialize: (arg) => ({
        profile: arg.profile,
        email: arg.email,
      }),
    },
  ),
);
const local_9812c6ee_3 = () => symbol_075((arg) => arg.status);
const symbol_061 = () => symbol_075((arg) => arg.profile);
const symbol_007 = () => symbol_075((arg) => arg.status === "authenticated");
const local_bc478864 = "c_screen";
const local_8236b951 = "c_fullscreen";
const local_1d2f8d3d = "c_image";
const local_9d9cf508_3 = "c_title";
const local_5df6efc6 = "c_description";
const local_406cc78f = "c_action";
const local_00b90fb4 = {
  screen: local_bc478864,
  fullscreen: local_8236b951,
  image: local_1d2f8d3d,
  title: local_9d9cf508_3,
  description: local_5df6efc6,
  action: local_406cc78f,
};
const local_58c59e98 = {
  notFound: "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/404.png",
  server: "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/500.png",
};
const symbol_012 = ({
  kind: arg,
  title: arg_2,
  description: arg_3,
  action: arg_4,
  fullscreen: arg_5 = false,
}) =>
  symbol_073("div", {
    className: `${local_00b90fb4.screen} ${arg_5 ? local_00b90fb4.fullscreen : ""}`,
    children: [
      symbol_073("img", {
        className: local_00b90fb4.image,
        src: local_58c59e98[arg],
        alt: "",
        width: 256,
        height: 256,
        "aria-hidden": "true",
      }),
      symbol_073("h1", {
        className: local_00b90fb4.title,
        children: arg_2,
      }),
      arg_3 &&
        symbol_073("p", {
          className: local_00b90fb4.description,
          children: arg_3,
        }),
      arg_4 &&
        symbol_073("div", {
          className: local_00b90fb4.action,
          children: arg_4,
        }),
    ],
  });
function fn_fc99b4db({ children: arg, currentPath: arg_2 }) {
  const local = local_9812c6ee_3();
  const local_2 = symbol_075((arg) => arg.initialize);
  symbol_077(() => {
    if (local === "idle") {
      local_2();
    }
  }, [local, local_2]);
  symbol_077(() => {
    if (local === "loading" || local === "idle") {
      return;
    }
    const local = local_e11d105a.some((arg) => arg_2.startsWith(arg));
    local === "unauthenticated" && !local
      ? symbol_057(local_b294611d.LOGIN) ||
        window.location.replace(local_b294611d.LOGIN)
      : local === "needs_profile" && arg_2 !== local_b294611d.ONBOARDING
        ? symbol_057(local_b294611d.ONBOARDING) ||
          window.location.replace(local_b294611d.ONBOARDING)
        : local === "authenticated" &&
          (arg_2 === local_b294611d.LOGIN ||
            arg_2 === local_b294611d.REGISTER ||
            arg_2 === local_b294611d.ONBOARDING) &&
          symbol_057(local_b294611d.HOME);
  }, [local, arg_2]);
  const local_3 = local_e11d105a.some((arg) => arg_2.startsWith(arg));
  if (local === "idle" || (local === "loading" && !local_3)) {
    return null;
  }
  if (local === "service_error") {
    return symbol_073(fn_8217e7d0, {});
  }
  if (local === "account_deleted") {
    return symbol_073(fn_17127ac5, {});
  }
  if (
    (local === "unauthenticated" && !local_3) ||
    (local === "needs_profile" && arg_2 !== local_b294611d.ONBOARDING)
  ) {
    return null;
  }
  return symbol_073(symbol_063, {
    children: arg,
  });
}
function fn_8217e7d0() {
  const local = symbol_075((arg) => arg.initialize);
  const [local_2, local_3] = symbol_056(false);
  return symbol_073(symbol_012, {
    kind: "server",
    fullscreen: true,
    title: "Сервис недоступен",
    description:
      "Не удалось подключиться к серверу. Попробуйте обновить страницу или повторите попытку позже.",
    action: symbol_073(symbol_003, {
      onClick: async () => {
        local_3(true);
        try {
          await local();
        } finally {
          local_3(false);
        }
      },
      disabled: local_2,
      children: local_2 ? "Подключение..." : "Попробовать снова",
    }),
  });
}
function fn_17127ac5() {
  const local = symbol_075((arg) => arg.canRestore);
  const local_2 = symbol_075((arg) => arg.restoreDeadline);
  const local_3 = symbol_075((arg) => arg.restoreAccount);
  const local_4 = symbol_075((arg) => arg.logout);
  const [local_5, local_6] = symbol_056(false);
  const local_7 = local_2
    ? new Date(local_2).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;
  const local_8 = async () => {
    local_6(true);
    try {
      await local_3();
    } catch {
      local_6(false);
    }
  };
  return symbol_073("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "24px",
    },
    children: symbol_073("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        maxWidth: "400px",
        width: "100%",
        textAlign: "center",
      },
      children: [
        symbol_073("h1", {
          style: {
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: 0,
          },
          children: "Аккаунт удалён",
        }),
        local_5
          ? symbol_073("p", {
              style: {
                fontSize: "15px",
                color: "var(--text-secondary)",
                margin: 0,
              },
              children: "Восстановление аккаунта...",
            })
          : local
            ? symbol_073(symbol_063, {
                children: [
                  symbol_073("p", {
                    style: {
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      margin: 0,
                      lineHeight: 1.5,
                    },
                    children: [
                      "Ваш аккаунт был удалён. Вы можете восстановить его",
                      local_7 ? ` до ${local_7}` : "",
                      ".",
                    ],
                  }),
                  symbol_073("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "12px",
                      marginTop: "8px",
                      width: "100%",
                    },
                    children: [
                      symbol_073(symbol_003, {
                        onClick: local_8,
                        children: "Восстановить аккаунт",
                      }),
                      symbol_073("button", {
                        type: "button",
                        onClick: () => local_4(),
                        style: {
                          background: "none",
                          border: "none",
                          color: "var(--text-secondary)",
                          fontSize: "14px",
                          cursor: "pointer",
                          padding: "8px",
                        },
                        children: "Выйти",
                      }),
                    ],
                  }),
                ],
              })
            : symbol_073(symbol_063, {
                children: [
                  symbol_073("p", {
                    style: {
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      margin: 0,
                    },
                    children: "Срок восстановления аккаунта истёк.",
                  }),
                  symbol_073("div", {
                    style: {
                      marginTop: "8px",
                    },
                    children: symbol_073(symbol_003, {
                      onClick: () => local_4(),
                      children: "Выйти",
                    }),
                  }),
                ],
              }),
      ],
    }),
  });
}
const local_4d84dbb6_2 = "c_content";
const local_3abd7bdb = "c_icon";
const local_95ed4c70_2 = "c_text";
const local_9e87ce8c_2 = "c_button";
const local_e5cc91d8 = {
  content: local_4d84dbb6_2,
  icon: local_3abd7bdb,
  text: local_95ed4c70_2,
  button: local_9e87ce8c_2,
};
const symbol_041 = "phone-verification-required";
function fn_f2614556() {
  const [local, local_2] = symbol_056(false);
  const local_3 = symbol_075((arg) => arg.profile?.id ?? "");
  symbol_077(() => {
    const local = () => local_2(true);
    window.addEventListener(symbol_041, local);
    return () => window.removeEventListener(symbol_041, local);
  }, []);
  if (!local) {
    return null;
  }
  const local_4 = `https://t.me/itd_verification_bot?start=${local_3}`;
  return symbol_073(symbol_014, {
    onClose: () => local_2(false),
    title: "Подтверждение телефона",
    children: symbol_073("div", {
      className: local_e5cc91d8.content,
      children: [
        symbol_073("div", {
          className: local_e5cc91d8.icon,
          children: symbol_073(local_00b66f33, {
            size: 48,
          }),
        }),
        symbol_073("p", {
          className: local_e5cc91d8.text,
          children:
            "Для публикации постов и комментариев необходимо подтвердить номер телефона через Telegram-бота.",
        }),
        symbol_073("a", {
          href: local_4,
          target: "_blank",
          rel: "noopener noreferrer",
          className: local_e5cc91d8.button,
          onClick: () => local_2(false),
          children: "Подтвердить через Telegram",
        }),
      ],
    }),
  });
}
function fn_548a27eb(arg) {
  return arg.pagination?.nextCursor ?? arg.cursor ?? null;
}
const local_f50950e4_3 = new clazz_fb2ffcc0(50, 300 * 1000);
const local_aad0de78_4 = 60 * 1000;
setInterval(() => local_f50950e4_3.cleanup(), 120 * 1000);
function fn_a07b7efb(arg) {
  return {
    id: arg.id,
    username: arg.username,
    displayName: arg.displayName,
    avatar: arg.avatar,
    isVerified: arg.isVerified ?? arg.verified ?? false,
    hasNuksta: arg.hasNuksta ?? false,
    pin: arg.pin ?? null,
  };
}
function fn_bc022a61(arg) {
  const local = (arg.attachments ?? []).map((arg) => {
    if (arg.type === "poll") {
      const local = arg;
      const local_2 = local.options.map((arg) => ({
        id: arg.id,
        text: arg.text,
        votes: arg.votesCount ?? arg.voteCount ?? arg.votes ?? 0,
      }));
      return {
        ...arg,
        options: local_2,
        totalVotes: local.totalVotes ?? 0,
        multipleChoice: local.multipleChoice ?? false,
        myVotes: local.votedOptionIds?.length
          ? local.votedOptionIds
          : arg.viewerStatus?.pollVote
            ? [arg.viewerStatus.pollVote]
            : [],
        myVote: local.votedOptionIds?.[0] ?? arg.viewerStatus?.pollVote ?? null,
      };
    }
    return arg;
  });
  if (arg.poll && !local.some((arg) => arg.type === "poll")) {
    const local = arg.poll;
    const local_2 = {
      id: local.id,
      type: "poll",
      question: local.question,
      multipleChoice: local.multipleChoice ?? false,
      options: (local.options ?? []).map((arg) => ({
        id: arg.id,
        text: arg.text,
        votes: arg.votesCount ?? arg.voteCount ?? 0,
      })),
      totalVotes: local.totalVotes ?? 0,
      myVotes: local.votedOptionIds ?? [],
      myVote: local.votedOptionIds?.length > 0 ? local.votedOptionIds[0] : null,
    };
    local.push(local_2);
  }
  const local_2 = arg.stats?.reactions ?? arg.likesCount ?? 0;
  const local_3 = arg.stats?.views ?? arg.viewsCount ?? 0;
  const local_4 = arg.stats?.comments ?? arg.commentsCount ?? 0;
  const local_5 = arg.stats?.reposts ?? arg.repostsCount ?? 0;
  const local_6 = arg.viewerStatus?.reaction ?? (arg.isLiked ? "like" : null);
  const local_7 = arg.viewerStatus?.isReposted ?? arg.isReposted ?? false;
  const local_8 = arg.text ?? arg.content ?? "";
  return {
    id: arg.id,
    author: fn_a07b7efb(arg.author),
    wallOwnerId: arg.wallOwnerId ?? arg.authorId ?? arg.author?.id,
    text: local_8,
    spans: arg.spans ?? [],
    attachments: local,
    reactions: {
      total: local_2,
      myReaction: local_6,
    },
    stats: {
      views: local_3,
      comments: local_4,
      reposts: local_5,
    },
    reposted: local_7,
    originalPost: arg.originalPost ? fn_bc022a61(arg.originalPost) : null,
    dominantEmoji: arg.dominantEmoji ?? null,
    createdAt: arg.createdAt,
    editedAt: arg.editedAt ?? null,
    vs: typeof arg.vs === "string" ? arg.vs : undefined,
  };
}
const symbol_068 = {
  async getFeed(arg, arg_2 = {}) {
    const local = new URLSearchParams();
    local.set("limit", String(arg_2.limit || 20));
    local.set(
      "tab",
      arg === "global" ? "popular" : arg === "clan" ? "clan" : "following",
    );
    if (arg_2.cursor) {
      local.set("cursor", arg_2.cursor);
    }
    const local_2 = local.toString();
    const local_3 = `${local_34f0cdfd.posts.list}${local_2 ? `?${local_2}` : ""}`;
    const local_4 = await local_1c641230.get(local_3);
    return {
      data: local_4.data.posts.map(fn_bc022a61),
      nextCursor: fn_548a27eb(local_4.data),
    };
  },
  async getPost(arg) {
    const local = await local_1c641230.get(local_34f0cdfd.posts.single(arg));
    return fn_bc022a61(local.data);
  },
  async getUserWall(arg, arg_2 = {}) {
    if (!arg_2.cursor) {
      const local = arg;
      const local_2 = local_f50950e4_3.get(local);
      const local_3 =
        local_2 && local_2.pinnedPostId === (arg_2.pinnedPostId ?? null);
      if (
        local_2 &&
        local_3 &&
        local_f50950e4_3.isFresh(local, local_aad0de78_4)
      ) {
        return (
          this._fetchAndCacheWall(arg, arg_2, local).catch(() => {}),
          {
            data: local_2.posts,
            nextCursor: local_2.nextCursor,
          }
        );
      }
      if (local_2 && local_3) {
        return (
          this._fetchAndCacheWall(arg, arg_2, local).catch(() => {}),
          {
            data: local_2.posts,
            nextCursor: local_2.nextCursor,
          }
        );
      }
      return this._fetchAndCacheWall(arg, arg_2, local);
    }
    return this._fetchWall(arg, arg_2);
  },
  getCachedWall(arg, arg_2) {
    const local = local_f50950e4_3.get(arg);
    if (!local || local.pinnedPostId !== (arg_2 ?? null)) {
      return null;
    }
    return {
      data: local.posts,
      nextCursor: local.nextCursor,
    };
  },
  async _fetchAndCacheWall(arg, arg_2, arg_3) {
    const local = await this._fetchWall(arg, arg_2);
    local_f50950e4_3.set(arg_3, {
      posts: local.data,
      nextCursor: local.nextCursor,
      pinnedPostId: arg_2.pinnedPostId ?? null,
    });
    return local;
  },
  async _fetchWall(arg, arg_2) {
    const local = new URLSearchParams();
    if (arg_2.limit) {
      local.set("limit", arg_2.limit.toString());
    }
    local.set("sort", "new");
    if (arg_2.cursor) {
      local.set("cursor", arg_2.cursor);
    }
    if (arg_2.pinnedPostId) {
      local.set("pinnedPostId", arg_2.pinnedPostId);
    }
    const local_2 = local.toString();
    const local_3 = `${local_34f0cdfd.posts.byUser(arg)}${local_2 ? `?${local_2}` : ""}`;
    const local_4 = await local_1c641230.get(local_3);
    return {
      data: local_4.data.posts.map(fn_bc022a61),
      nextCursor: fn_548a27eb(local_4.data),
    };
  },
  invalidateWallCache(arg) {
    local_f50950e4_3.delete(arg);
  },
  updatePostInWallCache(arg, arg_2, arg_3) {
    const local = local_f50950e4_3.get(arg);
    if (local) {
      const local = local.posts.map((arg) => {
        if (arg.id === arg_2) {
          return {
            ...arg,
            ...arg_3,
          };
        }
        return arg;
      });
      local_f50950e4_3.set(arg, {
        ...local,
        posts: local,
      });
    }
  },
  removePostFromWallCache(arg, arg_2) {
    const local = local_f50950e4_3.get(arg);
    if (local) {
      const local = local.posts.filter((arg) => arg.id !== arg_2);
      local_f50950e4_3.set(arg, {
        ...local,
        posts: local,
      });
    }
  },
  async likePost(arg) {
    return await local_1c641230.post(local_34f0cdfd.posts.like(arg));
  },
  async unlikePost(arg) {
    return await local_1c641230.delete(local_34f0cdfd.posts.like(arg));
  },
  async createPost(arg) {
    return await local_1c641230.post(local_34f0cdfd.posts.create, {
      content: arg.text,
      spans: arg.spans,
      wallRecipientId: arg.wallOwnerId,
      attachmentIds: arg.attachmentIds,
      poll: arg.poll,
    });
  },
  async createRepost(arg, arg_2) {
    const local = await local_1c641230.post(local_34f0cdfd.posts.repost(arg), {
      content: arg_2,
    });
    return fn_bc022a61(local);
  },
  async getPostsStats(arg) {
    if (arg.length === 0) {
      return [];
    }
    return (
      (
        await local_1c641230.post(`${local_34f0cdfd.posts.list}/stats`, {
          ids: arg,
        })
      ).posts ?? []
    );
  },
  async editPost(arg, arg_2) {
    const local = arg_2.content ?? arg_2.text;
    await local_1c641230.put(local_34f0cdfd.posts.update(arg), {
      content: local,
      spans: arg_2.spans,
    });
  },
  async deletePost(arg) {
    await local_1c641230.delete(local_34f0cdfd.posts.delete(arg));
  },
  async restorePost(arg) {
    await local_1c641230.post(local_34f0cdfd.posts.restore(arg));
  },
  async getUserPosts(arg, arg_2 = {}) {
    const local = new URLSearchParams();
    if (arg_2.limit) {
      local.set("limit", arg_2.limit.toString());
    }
    if (arg_2.cursor) {
      local.set("cursor", arg_2.cursor);
    }
    if (arg_2.sort) {
      local.set("sort", arg_2.sort);
    }
    if (arg_2.pinnedPostId) {
      local.set("pinnedPostId", arg_2.pinnedPostId);
    }
    const local_2 = local.toString();
    const local_3 = `${local_34f0cdfd.posts.byUser(arg)}${local_2 ? `?${local_2}` : ""}`;
    const local_4 = await local_1c641230.get(local_3);
    return {
      data: local_4.data.posts.map(fn_bc022a61),
      nextCursor: fn_548a27eb(local_4.data),
    };
  },
  async getUserLikedPosts(arg, arg_2 = {}) {
    const local = new URLSearchParams();
    if (arg_2.limit) {
      local.set("limit", arg_2.limit.toString());
    }
    if (arg_2.cursor) {
      local.set("cursor", arg_2.cursor);
    }
    const local_2 = local.toString();
    const local_3 = `${local_34f0cdfd.posts.likedByUser(arg)}${local_2 ? `?${local_2}` : ""}`;
    const local_4 = await local_1c641230.get(local_3);
    return {
      data: local_4.data.posts.map(fn_bc022a61),
      nextCursor: fn_548a27eb(local_4.data),
    };
  },
  async pinPost(arg) {
    await local_1c641230.post(local_34f0cdfd.posts.pin(arg));
  },
  async unpinPost(arg) {
    await local_1c641230.delete(local_34f0cdfd.posts.pin(arg));
  },
  async votePoll(arg, arg_2) {
    const local = await local_1c641230.post(
      local_34f0cdfd.posts.pollVote(arg),
      {
        optionIds: arg_2,
      },
    );
    return local.data ?? local;
  },
  async unrepost(arg) {
    await local_1c641230.delete(local_34f0cdfd.posts.repost(arg));
  },
  async getPostsByHashtag(arg, arg_2 = {}) {
    const local = new URLSearchParams();
    if (arg_2.limit) {
      local.set("limit", arg_2.limit.toString());
    }
    if (arg_2.cursor) {
      local.set("cursor", arg_2.cursor);
    }
    const local_2 = local.toString();
    const local_3 = `${local_34f0cdfd.hashtags.posts(arg)}${local_2 ? `?${local_2}` : ""}`;
    const local_4 = await local_1c641230.get(local_3);
    return {
      data: local_4.data.posts.map(fn_bc022a61),
      nextCursor: fn_548a27eb(local_4.data),
    };
  },
};
const local_a663ed8c = {
  new: "newest",
  old: "oldest",
  popular: "popular",
};
function fn_a07b7efb_2(arg) {
  return {
    id: arg.id,
    username: arg.username,
    displayName: arg.displayName,
    avatar: arg.avatar,
    isVerified: arg.isVerified ?? arg.verified ?? false,
    hasNuksta: arg.hasNuksta ?? false,
    pin: arg.pin ?? null,
  };
}
function fn_b6c83bb9(arg) {
  const local = arg.stats?.reactions ?? arg.likesCount ?? 0;
  const local_2 = arg.stats?.replies ?? arg.repliesCount ?? 0;
  const local_3 = arg.viewerStatus?.reaction ?? (arg.isLiked ? "like" : null);
  const local_4 = arg.text ?? arg.content ?? "";
  return {
    id: arg.id,
    postId: arg.postId,
    author: fn_a07b7efb_2(arg.author),
    parentId: arg.parentId,
    rootId: arg.rootId ?? null,
    text: local_4,
    spans: arg.spans ?? [],
    attachments: arg.attachments ?? [],
    reactions: {
      total: local,
      myReaction: local_3,
    },
    stats: {
      replies: local_2,
    },
    replyTo: arg.replyTo ?? null,
    previewReplies:
      (arg.previewReplies ?? arg.replies)
        ? (arg.previewReplies ?? arg.replies).map(fn_b6c83bb9)
        : undefined,
    createdAt: arg.createdAt,
    editedAt: arg.editedAt ?? null,
  };
}
const local_8321e242 = {
  async getComments(arg, arg_2 = {}) {
    const local = new URLSearchParams();
    if (arg_2.limit) {
      local.set("limit", arg_2.limit.toString());
    }
    if (arg_2.sort) {
      local.set("sort", local_a663ed8c[arg_2.sort]);
    }
    if (arg_2.cursor) {
      local.set("cursor", arg_2.cursor);
    }
    const local_2 = local.toString();
    const local_3 = `${local_34f0cdfd.posts.comments(arg)}${local_2 ? `?${local_2}` : ""}`;
    const local_4 = await local_1c641230.get(local_3);
    let local_5 = [];
    let local_6 = null;
    if (Array.isArray(local_4.data)) {
      local_5 = local_4.data;
    } else if (local_4.data && "comments" in local_4.data) {
      local_5 = local_4.data.comments;
      local_6 = local_4.data.nextCursor ?? null;
    } else if (local_4.comments) {
      local_5 = local_4.comments;
    }
    local_6 = local_6 ?? local_4.cursor ?? local_4.meta?.cursor?.next ?? null;
    return {
      data: local_5.map(fn_b6c83bb9),
      nextCursor: local_6,
    };
  },
  async getReplies(arg, arg_2 = {}) {
    const local = new URLSearchParams();
    if (arg_2.limit) {
      local.set("limit", arg_2.limit.toString());
    }
    if (arg_2.cursor) {
      local.set("cursor", arg_2.cursor);
    }
    const local_2 = local.toString();
    const local_3 = `${local_34f0cdfd.comments.replies(arg)}${local_2 ? `?${local_2}` : ""}`;
    const local_4 = await local_1c641230.get(local_3);
    let local_5 = [];
    let local_6 = null;
    if (Array.isArray(local_4.data)) {
      local_5 = local_4.data;
    } else if (local_4.data && "replies" in local_4.data) {
      local_5 = local_4.data.replies;
      local_6 = local_4.data.nextCursor ?? null;
    } else if (local_4.replies) {
      local_5 = local_4.replies;
    }
    local_6 = local_6 ?? local_4.cursor ?? local_4.meta?.cursor?.next ?? null;
    return {
      data: local_5.map(fn_b6c83bb9),
      nextCursor: local_6,
    };
  },
  async createComment(arg, arg_2, arg_3, arg_4, arg_5) {
    return await local_1c641230.post(local_34f0cdfd.posts.comments(arg), {
      content: arg_2,
      attachmentIds: arg_5?.map((arg) => arg.mediaId),
    });
  },
  async createReply(arg, arg_2, arg_3, arg_4, arg_5) {
    return await local_1c641230.post(local_34f0cdfd.comments.replies(arg), {
      content: arg_2,
      replyToUserId: arg_4,
      attachmentIds: arg_5?.map((arg) => arg.mediaId),
    });
  },
  async editComment(arg, arg_2, arg_3) {
    await local_1c641230.patch(local_34f0cdfd.comments.edit(arg), {
      content: arg_2,
    });
  },
  async deleteComment(arg) {
    await local_1c641230.delete(local_34f0cdfd.comments.delete(arg));
  },
  async likeComment(arg) {
    await local_1c641230.post(local_34f0cdfd.comments.like(arg));
  },
  async unlikeComment(arg) {
    await local_1c641230.delete(local_34f0cdfd.comments.like(arg));
  },
};
const symbol_054 = local_7d651640_2((arg, arg_2) => ({
  posts: [],
  activeFeed: "global",
  isLoading: false,
  isLoadingMore: false,
  isRefreshing: false,
  hasMore: true,
  nextCursor: null,
  error: null,
  feedScrollPosition: 0,
  feedMeasuredHeights: new Map(),
  feedCache: {},
  feedRestoreToken: 0,
  profileScrollByUser: {},
  profileMeasuredHeightsByUser: {},
  highlightedPostId: null,
  postStatsCache: {},
  _lastPostEdit: null,
  _lastLikeUpdate: null,
  _lastRepostUpdate: null,
  _lastStatsBatch: null,
  _likePending: {},
  _likeSettledAt: {},
  currentPost: null,
  currentPostLoading: false,
  currentPostError: false,
  setActiveFeed: (arg) => {
    const local = arg_2();
    if (local.activeFeed === arg) {
      return;
    }
    const local_2 = local.feedCache[local.activeFeed];
    const local_3 = {
      ...local.feedCache,
      [local.activeFeed]: {
        posts: local.posts,
        nextCursor: local.nextCursor,
        hasMore: local.hasMore,
        scrollPosition: typeof window !== "undefined" ? window.scrollY : 0,
        measuredHeights: local_2?.measuredHeights ?? local.feedMeasuredHeights,
      },
    };
    const local_4 = local_3[arg];
    if (local_4 && local_4.posts.length > 0) {
      arg({
        activeFeed: arg,
        posts: local_4.posts,
        nextCursor: local_4.nextCursor,
        hasMore: local_4.hasMore,
        isLoading: false,
        isLoadingMore: false,
        error: null,
        feedScrollPosition: local_4.scrollPosition,
        feedMeasuredHeights: local_4.measuredHeights,
        feedCache: local_3,
        feedRestoreToken: local.feedRestoreToken + 1,
      });
    } else {
      arg({
        activeFeed: arg,
        posts: [],
        hasMore: true,
        nextCursor: null,
        isLoading: false,
        error: null,
        feedScrollPosition: 0,
        feedMeasuredHeights: new Map(),
        feedCache: local_3,
        feedRestoreToken: local.feedRestoreToken + 1,
      });
    }
  },
  fetchFeed: async (arg = false) => {
    const {
      activeFeed: local,
      isLoading: local_2,
      isRefreshing: local_3,
    } = arg_2();
    if (!(local_2 || local_3)) {
      arg({
        isLoading: !arg,
        isRefreshing: arg,
        error: null,
      });
      try {
        const local = await symbol_068.getFeed(local, {
          limit: 20,
        });
        arg({
          posts: local.data,
          nextCursor: local.nextCursor,
          hasMore: local.nextCursor !== null,
          isLoading: false,
          isRefreshing: false,
        });
      } catch (error) {
        arg({
          isLoading: false,
          isRefreshing: false,
          error: symbol_076(error)
            ? symbol_040(error.code, error.message)
            : "Не удалось загрузить ленту",
        });
      }
    }
  },
  loadMoreFeed: async () => {
    const {
      activeFeed: local,
      isLoadingMore: local_2,
      hasMore: local_3,
      nextCursor: local_4,
    } = arg_2();
    if (!(local_2 || !local_3)) {
      arg({
        isLoadingMore: true,
      });
      try {
        const local = await symbol_068.getFeed(local, {
          limit: 20,
          cursor: local_4 ?? undefined,
        });
        arg((arg) => ({
          posts: [...arg.posts, ...local.data],
          nextCursor: local.nextCursor,
          hasMore: local.nextCursor !== null,
          isLoadingMore: false,
        }));
      } catch {
        arg({
          isLoadingMore: false,
        });
      }
    }
  },
  createPost: async ({
    wallOwnerId: arg,
    text: arg_2,
    spans: arg_3 = [],
    attachments: arg_4 = [],
    poll: arg_5,
  }) => {
    const local = symbol_075.getState().profile;
    if (!local) {
      throw new Error("Not authenticated");
    }
    try {
      const local = arg_4.map(({ mediaId: arg }) => arg);
      const { id: local_2 } = await symbol_068.createPost({
        wallOwnerId: arg !== local.id ? arg : undefined,
        text: arg_2,
        spans: arg_3.length > 0 ? arg_3 : undefined,
        attachmentIds: local.length > 0 ? local : undefined,
        poll: arg_5
          ? {
              question: arg_5.question,
              options: arg_5.options,
              multipleChoice: arg_5.multipleChoice ?? false,
            }
          : undefined,
      });
      const local_3 = arg_4.map(({ url: arg }, arg_2) => ({
        id: `temp-${arg_2}`,
        url: arg,
        type: "image",
      }));
      if (arg_5) {
        local_3.push({
          id: `temp-poll-${Date.now()}`,
          type: "poll",
          question: arg_5.question,
          options: arg_5.options.map((arg, arg_2) => ({
            id: `temp-opt-${arg_2}`,
            text: arg.text,
            votes: 0,
          })),
          totalVotes: 0,
          myVote: null,
        });
      }
      const local_4 = {
        id: local_2,
        author: {
          id: local.id,
          username: local.username,
          displayName: local.displayName,
          avatar: local.avatar,
          isVerified: local.isVerified,
        },
        wallOwnerId: arg,
        text: arg_2,
        spans: arg_3,
        attachments: local_3,
        reactions: {
          total: 0,
          myReaction: null,
        },
        stats: {
          views: 0,
          comments: 0,
          reposts: 0,
        },
        reposted: false,
        originalPost: null,
        dominantEmoji: null,
        createdAt: new Date().toISOString(),
        editedAt: null,
      };
      arg((arg) => ({
        posts: [local_4, ...arg.posts],
        highlightedPostId: local_2,
      }));
      symbol_068.invalidateWallCache(arg);
      try {
        const local = await symbol_068.getPost(local_2);
        arg((arg) => ({
          posts: arg.posts.map((arg) => {
            if (arg.id === local_2) {
              return local;
            }
            return arg;
          }),
        }));
      } catch {}
    } catch (error) {
      console.error("Failed to create post:", error);
      throw error;
    }
  },
  clearHighlightedPost: () => {
    arg({
      highlightedPostId: null,
    });
  },
  fetchPost: async (arg) => {
    const local = arg_2().posts.find((arg) => arg.id === arg);
    if (local) {
      arg({
        currentPost: local,
        currentPostLoading: false,
        currentPostError: false,
      });
      return;
    }
    if (arg_2().currentPost?.id !== arg) {
      arg({
        currentPostLoading: true,
        currentPost: null,
        currentPostError: false,
      });
      try {
        const local = await symbol_068.getPost(arg);
        arg({
          currentPost: local,
          currentPostLoading: false,
          currentPostError: false,
        });
      } catch {
        arg({
          currentPost: null,
          currentPostLoading: false,
          currentPostError: true,
        });
      }
    }
  },
  setCurrentPost: (arg) => {
    arg({
      currentPost: arg,
      currentPostLoading: false,
      currentPostError: false,
    });
  },
  editPost: async (arg, arg_2, arg_3) => {
    await symbol_068.editPost(arg, {
      text: arg_2,
      spans: arg_3,
    });
    const { posts: local, currentPost: local_2 } = arg_2();
    const local_3 = new Date().toISOString();
    const local_4 = local.find((arg) => arg.id === arg);
    arg({
      posts: local.map((arg) => {
        if (arg.id === arg) {
          return {
            ...arg,
            text: arg_2,
            spans: arg_3 ?? arg.spans,
            editedAt: local_3,
          };
        }
        return arg;
      }),
      currentPost:
        local_2?.id === arg
          ? {
              ...local_2,
              text: arg_2,
              spans: arg_3 ?? local_2.spans,
              editedAt: local_3,
            }
          : local_2,
      _lastPostEdit: {
        postId: arg,
        text: arg_2,
        spans: arg_3 ?? [],
        editedAt: local_3,
      },
    });
    if (local_4?.wallOwnerId) {
      symbol_068.updatePostInWallCache(local_4.wallOwnerId, arg, {
        text: arg_2,
        spans: arg_3 ?? local_4.spans,
        editedAt: local_3,
      });
    }
  },
  deletePost: async (arg) => {
    const { posts: local, currentPost: local_2 } = arg_2();
    const local_3 = local;
    const local_4 = local.find((arg) => arg.id === arg);
    arg({
      posts: local.filter((arg) => arg.id !== arg),
      currentPost: local_2?.id === arg ? null : local_2,
    });
    try {
      await symbol_068.deletePost(arg);
    } catch (error) {
      console.error("Failed to delete post:", error);
      if (local_4) {
        arg({
          posts: local_3,
        });
      }
      throw error;
    }
  },
  updatePostLike: (arg, arg_2, arg_3) => {
    arg((arg) => {
      const local = arg.postStatsCache[arg];
      const local_2 = local
        ? {
            ...arg.postStatsCache,
            [arg]: {
              ...local,
              myReaction: arg_2,
              likesTotal: Math.max(0, local.likesTotal + arg_3),
            },
          }
        : arg.postStatsCache;
      return {
        posts: arg.posts.map((arg) => {
          if (arg.id === arg) {
            return {
              ...arg,
              reactions: {
                ...arg.reactions,
                myReaction: arg_2,
                total: Math.max(0, arg.reactions.total + arg_3),
              },
            };
          }
          return arg;
        }),
        currentPost:
          arg.currentPost?.id === arg
            ? {
                ...arg.currentPost,
                reactions: {
                  ...arg.currentPost.reactions,
                  myReaction: arg_2,
                  total: Math.max(0, arg.currentPost.reactions.total + arg_3),
                },
              }
            : arg.currentPost,
        postStatsCache: local_2,
        _lastLikeUpdate: {
          postId: arg,
          myReaction: arg_2,
          totalDelta: arg_3,
        },
      };
    });
  },
  updatePostReposted: (arg, arg_2, arg_3) => {
    arg((arg) => {
      const local = arg.postStatsCache[arg];
      const local_2 = local
        ? {
            ...arg.postStatsCache,
            [arg]: {
              ...local,
              reposted: arg_2,
              repostsCount: Math.max(0, local.repostsCount + arg_3),
            },
          }
        : arg.postStatsCache;
      return {
        posts: arg.posts.map((arg) => {
          if (arg.id === arg) {
            return {
              ...arg,
              reposted: arg_2,
              stats: {
                ...arg.stats,
                reposts: Math.max(0, arg.stats.reposts + arg_3),
              },
            };
          }
          return arg;
        }),
        currentPost:
          arg.currentPost?.id === arg
            ? {
                ...arg.currentPost,
                reposted: arg_2,
                stats: {
                  ...arg.currentPost.stats,
                  reposts: Math.max(0, arg.currentPost.stats.reposts + arg_3),
                },
              }
            : arg.currentPost,
        postStatsCache: local_2,
        _lastRepostUpdate: {
          postId: arg,
          reposted: arg_2,
          countDelta: arg_3,
        },
      };
    });
  },
  prependPost: (arg) => {
    arg((arg) => ({
      posts: arg.posts.some((arg) => arg.id === arg.id)
        ? arg.posts
        : [arg, ...arg.posts],
      highlightedPostId: arg.id,
    }));
    arg_2().seedPostStats(arg);
  },
  seedPostStats: (arg) => {
    arg((arg) => {
      const local = arg.postStatsCache;
      const local_2 = {};
      const local_3 = (arg) => {
        if (!local[arg.id] && !local_2[arg.id]) {
          local_2[arg.id] = {
            likesTotal: arg.reactions.total,
            myReaction: arg.reactions.myReaction,
            commentsCount: arg.stats.comments,
            repostsCount: arg.stats.reposts,
            viewsCount: arg.stats.views,
            dominantEmoji: arg.dominantEmoji,
            reposted: arg.reposted,
          };
        }
        if (arg.originalPost) {
          local_3(arg.originalPost);
        }
      };
      local_3(arg);
      if (Object.keys(local_2).length === 0) {
        return arg;
      }
      return {
        postStatsCache: {
          ...local,
          ...local_2,
        },
      };
    });
  },
  beginLikeMutation: (arg) => {
    arg((arg) => ({
      _likePending: {
        ...arg._likePending,
        [arg]: (arg._likePending[arg] ?? 0) + 1,
      },
    }));
  },
  endLikeMutation: (arg, arg_2) => {
    arg((arg) => {
      const local = (arg._likePending[arg] ?? 1) - 1;
      const local_2 = {
        ...arg._likePending,
      };
      if (local > 0) {
        local_2[arg] = local;
      } else {
        delete local_2[arg];
      }
      const local_3 = arg.postStatsCache[arg];
      const local_4 = local === 0 && arg_2 !== undefined && local_3;
      return {
        _likePending: local_2,
        _likeSettledAt: {
          ...arg._likeSettledAt,
          [arg]: Date.now(),
        },
        postStatsCache: local_4
          ? {
              ...arg.postStatsCache,
              [arg]: {
                ...local_3,
                likesTotal: arg_2,
              },
            }
          : arg.postStatsCache,
        posts: local_4
          ? arg.posts.map((arg) => {
              if (arg.id === arg) {
                return {
                  ...arg,
                  reactions: {
                    ...arg.reactions,
                    total: arg_2,
                  },
                };
              }
              return arg;
            })
          : arg.posts,
      };
    });
  },
  applyStatsUpdates: (arg, arg_2 = Date.now()) => {
    if (arg.length === 0) {
      return;
    }
    const { _likePending: local, _likeSettledAt: local_2 } = arg_2();
    const local_3 = (arg) =>
      (local[arg] ?? 0) > 0 || (local_2[arg] ?? 0) > arg_2;
    const local_4 = new Map(arg.map((arg) => [arg.id, arg]));
    const local_5 = (arg) => {
      const local = local_4.get(arg.id);
      const local_2 = arg.originalPost
        ? local_5(arg.originalPost)
        : arg.originalPost;
      if (!local && local_2 === arg.originalPost) {
        return arg;
      }
      return {
        ...arg,
        ...(local && {
          reactions: {
            ...arg.reactions,
            total: local_3(arg.id) ? arg.reactions.total : local.likesCount,
          },
          stats: {
            ...arg.stats,
            views: local.viewsCount,
            comments: local.commentsCount,
            reposts: local.repostsCount,
          },
          dominantEmoji: local.dominantEmoji,
        }),
        originalPost: local_2,
      };
    };
    arg((arg) => {
      const local = {
        ...arg.postStatsCache,
      };
      for (const local of arg) {
        const local = local[local.id];
        if (local) {
          local[local.id] = {
            ...local,
            likesTotal: local_3(local.id) ? local.likesTotal : local.likesCount,
            commentsCount: local.commentsCount,
            repostsCount: local.repostsCount,
            viewsCount: local.viewsCount,
            dominantEmoji: local.dominantEmoji,
          };
        }
      }
      return {
        posts: arg.posts.map(local_5),
        currentPost: arg.currentPost
          ? local_5(arg.currentPost)
          : arg.currentPost,
        postStatsCache: local,
        _lastStatsBatch: arg.map((arg) => {
          if (local_3(arg.id)) {
            return {
              ...arg,
              likesCount: local[arg.id]?.likesTotal ?? arg.likesCount,
            };
          }
          return arg;
        }),
      };
    });
  },
  updatePollVote: (arg, arg_2, arg_3) => {
    const local = (arg) => {
      const local = arg.attachments.findIndex((arg) => arg.type === "poll");
      if (local === -1) {
        return arg;
      }
      const local_2 = arg.attachments[local];
      const local_3 = local_2.options.map((arg) => {
        if (arg.id === arg_2) {
          return {
            ...arg,
            votes: (arg.votes ?? 0) + 1,
          };
        }
        if (arg.id === arg_3) {
          return {
            ...arg,
            votes: Math.max(0, (arg.votes ?? 0) - 1),
          };
        }
        return arg;
      });
      const local_4 = arg_3 ? 0 : 1;
      const local_5 = {
        ...local_2,
        options: local_3,
        totalVotes: (local_2.totalVotes ?? 0) + local_4,
        myVote: arg_2,
      };
      const local_6 = [...arg.attachments];
      local_6[local] = local_5;
      return {
        ...arg,
        attachments: local_6,
      };
    };
    arg((arg) => {
      const local = arg.posts.map((arg) => {
        if (arg.id === arg) {
          return local(arg);
        }
        return arg;
      });
      const local_2 =
        arg.currentPost?.id === arg ? local(arg.currentPost) : arg.currentPost;
      return {
        posts: local,
        currentPost: local_2,
      };
    });
  },
  updatePollData: (arg, arg_2) => {
    const local = (arg) => {
      const local = arg.attachments.findIndex((arg) => arg.type === "poll");
      if (local === -1) {
        return arg;
      }
      const local_2 = {
        ...arg.attachments[local],
        options: (arg_2.options ?? []).map((arg) => ({
          id: arg.id,
          text: arg.text,
          votes: arg.votesCount ?? arg.voteCount ?? 0,
        })),
        totalVotes: arg_2.totalVotes ?? 0,
        myVote:
          (arg_2.votedOptionIds?.length ?? 0) > 0
            ? arg_2.votedOptionIds[0]
            : null,
      };
      const local_3 = [...arg.attachments];
      local_3[local] = local_2;
      return {
        ...arg,
        attachments: local_3,
      };
    };
    arg((arg) => {
      const local = arg.posts.map((arg) => {
        if (arg.id === arg) {
          return local(arg);
        }
        return arg;
      });
      const local_2 =
        arg.currentPost?.id === arg ? local(arg.currentPost) : arg.currentPost;
      return {
        posts: local,
        currentPost: local_2,
      };
    });
  },
  setFeedScrollPosition: (arg) => {
    arg({
      feedScrollPosition: arg,
    });
  },
  setFeedMeasuredHeights: (arg) => {
    arg({
      feedMeasuredHeights: arg,
    });
  },
  cacheFeedHeights: (arg, arg_2) => {
    arg((arg) => {
      const local = arg.feedCache[arg];
      return {
        feedCache: {
          ...arg.feedCache,
          [arg]: {
            posts: local?.posts ?? [],
            nextCursor: local?.nextCursor ?? null,
            hasMore: local?.hasMore ?? true,
            scrollPosition: local?.scrollPosition ?? 0,
            measuredHeights: arg_2,
          },
        },
        ...(arg.activeFeed === arg
          ? {
              feedMeasuredHeights: arg_2,
            }
          : {}),
      };
    });
  },
  setProfileScrollPosition: (arg, arg_2) => {
    arg((arg) => ({
      profileScrollByUser: {
        ...arg.profileScrollByUser,
        [arg]: arg_2,
      },
    }));
  },
  setProfileMeasuredHeights: (arg, arg_2) => {
    arg((arg) => ({
      profileMeasuredHeightsByUser: {
        ...arg.profileMeasuredHeightsByUser,
        [arg]: arg_2,
      },
    }));
  },
  reset: () => {
    arg_2().feedMeasuredHeights.clear();
    symbol_064(async () => {
      const { useCommentsStore: local } = await Promise.resolve().then(
        () => local_ab34ad2e_2,
      );
      return {
        useCommentsStore: local,
      };
    }, undefined).then(({ useCommentsStore: arg }) => {
      arg.getState().reset();
    });
    arg({
      posts: [],
      isLoading: false,
      isLoadingMore: false,
      isRefreshing: false,
      hasMore: true,
      nextCursor: null,
      error: null,
      feedScrollPosition: 0,
      feedCache: {},
      feedRestoreToken: 0,
      profileScrollByUser: {},
      profileMeasuredHeightsByUser: {},
      highlightedPostId: null,
      _lastPostEdit: null,
      _lastLikeUpdate: null,
      _lastRepostUpdate: null,
      _lastStatsBatch: null,
      _likePending: {},
      _likeSettledAt: {},
      postStatsCache: {},
      currentPost: null,
      currentPostLoading: false,
      currentPostError: false,
    });
  },
}));
const local_ab34ad2e = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      usePostsStore: symbol_054,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    },
  ),
);
const symbol_020 = local_7d651640_2()(
  symbol_042(
    (arg) => ({
      commentsSort: "popular",
      setCommentsSort: (arg) => {
        arg({
          commentsSort: arg,
        });
      },
    }),
    {
      name: "settings",
      storage: fn_fe2ed958(() => localStorage),
    },
  ),
);
const local_a1e12a9e_8 = new Map();
const local_aad0de78_5 = 60 * 1000;
const local_aad0de78_6 = 300 * 1000;
const local_f06debfc_32 = 20;
const local_f06debfc_33 = 500;
function fn_e336e58a() {
  const local = Date.now();
  for (const [local, local_2] of local_a1e12a9e_8.entries()) {
    if (local - local_2.timestamp > local_aad0de78_6) {
      local_a1e12a9e_8.delete(local);
    }
  }
  if (local_a1e12a9e_8.size > local_f06debfc_32) {
    const local = Array.from(local_a1e12a9e_8.entries()).sort(
      (arg, arg_2) => arg[1].timestamp - arg_2[1].timestamp,
    );
    local
      .slice(0, local.length - local_f06debfc_32)
      .forEach(([arg]) => local_a1e12a9e_8.delete(arg));
  }
}
const symbol_018 = local_7d651640_2((arg, arg_2) => ({
  comments: [],
  commentsLoading: false,
  commentsLoadingMore: false,
  commentsHasMore: true,
  commentsNextCursor: null,
  highlightedCommentId: null,
  clearComments: () => {
    arg({
      comments: [],
      commentsLoading: true,
      commentsHasMore: true,
      commentsNextCursor: null,
    });
  },
  fetchComments: async (arg) => {
    const { usePostsStore: local } = await symbol_064(async () => {
      const { usePostsStore: local } = await Promise.resolve().then(
        () => local_ab34ad2e,
      );
      return {
        usePostsStore: local,
      };
    }, undefined);
    const local_2 = local.getState().currentPost;
    if (local_2 && local_2.id === arg && local_2.stats.comments === 0) {
      arg({
        comments: [],
        commentsLoading: false,
        commentsHasMore: false,
        commentsNextCursor: null,
      });
      return;
    }
    fn_e336e58a();
    const local_3 = symbol_020.getState().commentsSort;
    const local_4 = arg;
    const local_5 = local_a1e12a9e_8.get(local_4);
    const local_6 = Date.now();
    if (local_5 && local_5.sort === local_3) {
      if (local_6 - local_5.timestamp < local_aad0de78_5) {
        arg({
          comments: local_5.comments,
          commentsNextCursor: local_5.nextCursor,
          commentsHasMore: local_5.hasMore,
          commentsLoading: false,
        });
        local_8321e242
          .getComments(arg, {
            limit: 100,
            sort: local_3,
          })
          .then((arg) => {
            const local = arg.data;
            local_a1e12a9e_8.set(local_4, {
              comments: local,
              hasMore: arg.nextCursor !== null,
              nextCursor: arg.nextCursor,
              timestamp: Date.now(),
              sort: local_3,
            });
            arg((arg) => {
              if (arg.comments.length > 0 && arg.comments[0]?.postId === arg) {
                return {
                  comments: local,
                  commentsNextCursor: arg.nextCursor,
                  commentsHasMore: arg.nextCursor !== null,
                };
              }
              return arg;
            });
          })
          .catch(() => {});
        return;
      } else {
        arg({
          comments: local_5.comments,
          commentsNextCursor: local_5.nextCursor,
          commentsHasMore: local_5.hasMore,
          commentsLoading: true,
        });
      }
    } else {
      arg({
        commentsLoading: true,
        comments: [],
        commentsHasMore: true,
        commentsNextCursor: null,
      });
    }
    try {
      const local = await local_8321e242.getComments(arg, {
        limit: 100,
        sort: local_3,
      });
      const local_2 = local.data;
      local_a1e12a9e_8.set(local_4, {
        comments: local_2,
        hasMore: local.nextCursor !== null,
        nextCursor: local.nextCursor,
        timestamp: Date.now(),
        sort: local_3,
      });
      arg({
        comments: local_2,
        commentsNextCursor: local.nextCursor,
        commentsHasMore: local.nextCursor !== null,
        commentsLoading: false,
      });
    } catch {
      arg({
        commentsLoading: false,
      });
    }
  },
  loadMoreComments: async (arg) => {
    const {
      commentsLoadingMore: local,
      commentsHasMore: local_2,
      commentsNextCursor: local_3,
    } = arg_2();
    if (local || !local_2) {
      return;
    }
    const local_4 = symbol_020.getState().commentsSort;
    arg({
      commentsLoadingMore: true,
    });
    try {
      const local = await local_8321e242.getComments(arg, {
        limit: 100,
        sort: local_4,
        cursor: local_3 ?? undefined,
      });
      arg((arg) => {
        const local = [...arg.comments, ...local.data];
        return {
          comments:
            local.length > local_f06debfc_33
              ? local.slice(-local_f06debfc_33)
              : local,
          commentsNextCursor: local.nextCursor,
          commentsHasMore: local.nextCursor !== null,
          commentsLoadingMore: false,
        };
      });
    } catch {
      arg({
        commentsLoadingMore: false,
      });
    }
  },
  toggleCommentLike: async (arg) => {
    const { comments: local } = arg_2();
    let local_2 = local.findIndex((arg) => arg.id === arg);
    let local_3 = false;
    let local_4 = -1;
    let local_5 = -1;
    if (local_2 === -1) {
      for (let local = 0; local < local.length; local++) {
        const local = (local[local].previewReplies ?? []).findIndex(
          (arg) => arg.id === arg,
        );
        if (local !== -1) {
          local_3 = true;
          local_4 = local;
          local_5 = local;
          break;
        }
      }
    }
    if (local_2 === -1 && !local_3) {
      return;
    }
    const local_6 = local_3
      ? local[local_4].previewReplies[local_5]
      : local[local_2];
    const local_7 = local_6.reactions.myReaction;
    const local_8 = local_6.reactions.total;
    const local_9 = local_7 !== null;
    const local_10 = local_9 ? Math.max(0, local_8 - 1) : local_8 + 1;
    const local_11 = local_9 ? null : "love";
    const local_12 = [...local];
    if (local_3) {
      const local = [...(local_12[local_4].previewReplies ?? [])];
      local[local_5] = {
        ...local[local_5],
        reactions: {
          total: local_10,
          myReaction: local_11,
        },
      };
      local_12[local_4] = {
        ...local_12[local_4],
        previewReplies: local,
      };
    } else {
      local_12[local_2] = {
        ...local_12[local_2],
        reactions: {
          total: local_10,
          myReaction: local_11,
        },
      };
    }
    arg({
      comments: local_12,
    });
    try {
      if (local_9) {
        await local_8321e242.unlikeComment(arg);
      } else {
        await local_8321e242.likeComment(arg);
      }
    } catch (error) {
      console.error("Failed to toggle comment like:", error);
      const local = [...arg_2().comments];
      if (local_3) {
        const local = local.findIndex((arg) =>
          arg.previewReplies?.some((arg) => arg.id === arg),
        );
        if (local !== -1) {
          const local = local[local].previewReplies.findIndex(
            (arg) => arg.id === arg,
          );
          if (local !== -1) {
            const local = [...local[local].previewReplies];
            local[local] = {
              ...local[local],
              reactions: {
                total: local_8,
                myReaction: local_7,
              },
            };
            local[local] = {
              ...local[local],
              previewReplies: local,
            };
          }
        }
      } else {
        const local = local.findIndex((arg) => arg.id === arg);
        if (local !== -1) {
          local[local] = {
            ...local[local],
            reactions: {
              total: local_8,
              myReaction: local_7,
            },
          };
        }
      }
      arg({
        comments: local,
      });
    }
  },
  addComment: async (
    arg,
    {
      text: arg_2,
      spans: arg_3 = [],
      parentId: arg_4,
      attachments: arg_5,
      replyToUserId: arg_6,
      replyToInfo: arg_7,
    },
  ) => {
    try {
      const local = arg_4
        ? await local_8321e242.createReply(arg_4, arg_2, arg_3, arg_6, arg_5)
        : await local_8321e242.createComment(
            arg,
            arg_2,
            arg_3,
            undefined,
            arg_5,
          );
      const local_2 = symbol_075.getState().profile;
      if (local_2) {
        const local = (local.attachments || [])
          .filter((arg) => typeof arg === "object" && arg !== null)
          .map((arg) => {
            if (arg.type === "media" && arg.media) {
              return {
                id: arg.media.id,
                type: arg.media.type,
                url: arg.media.url,
                duration: arg.media.duration,
              };
            }
            return {
              id: arg.id,
              type: arg.type,
              url: arg.url,
              duration: arg.duration,
            };
          });
        const local_2 = {
          id: local.id,
          postId: arg,
          author: {
            id: local_2.id,
            username: local_2.username,
            displayName: local_2.displayName,
            avatar: local_2.avatar,
            isVerified: local_2.isVerified,
          },
          parentId: arg_4 ?? null,
          rootId: arg_4 ?? null,
          text: local.text ?? local.content ?? arg_2,
          spans: local.spans,
          attachments: local,
          replyTo: local.replyTo ?? arg_7 ?? null,
          reactions: {
            total: 0,
            myReaction: null,
          },
          stats: {
            replies: 0,
          },
          createdAt: new Date().toISOString(),
          editedAt: null,
        };
        arg(
          arg_4
            ? (arg) => ({
                comments: arg.comments.map((arg) => {
                  if (arg.id === arg_4) {
                    return {
                      ...arg,
                      previewReplies: [...(arg.previewReplies || []), local_2],
                      stats: {
                        ...arg.stats,
                        replies: arg.stats.replies + 1,
                      },
                    };
                  }
                  return arg;
                }),
                highlightedCommentId: local.id,
              })
            : (arg) => ({
                comments: [local_2, ...arg.comments],
                highlightedCommentId: local.id,
              }),
        );
      }
      const { usePostsStore: local_3 } = await symbol_064(async () => {
        const { usePostsStore: local } = await Promise.resolve().then(
          () => local_ab34ad2e,
        );
        return {
          usePostsStore: local,
        };
      }, undefined);
      const local_4 = local_3.getState();
      if (local_4.currentPost && local_4.currentPost.id === arg) {
        local_3.setState({
          currentPost: {
            ...local_4.currentPost,
            stats: {
              ...local_4.currentPost.stats,
              comments: local_4.currentPost.stats.comments + 1,
            },
          },
        });
      }
      const local_5 = symbol_020.getState().commentsSort;
      const local_6 = local_a1e12a9e_8.get(arg);
      if (local_6) {
        local_a1e12a9e_8.set(arg, {
          ...local_6,
          comments: arg_2().comments,
          timestamp: Date.now(),
        });
      } else {
        local_a1e12a9e_8.set(arg, {
          comments: arg_2().comments,
          hasMore: arg_2().commentsHasMore,
          nextCursor: arg_2().commentsNextCursor,
          timestamp: Date.now(),
          sort: local_5,
        });
      }
    } catch (error) {
      console.error("Failed to add comment:", error);
      throw error;
    }
  },
  loadReplies: async (arg) => {
    const { comments: local } = arg_2();
    if (local.findIndex((arg) => arg.id === arg) !== -1) {
      try {
        const local = await local_8321e242.getReplies(arg, {
          limit: 100,
        });
        arg((arg) => ({
          comments: arg.comments.map((arg) => {
            if (arg.id === arg) {
              return {
                ...arg,
                previewReplies: local.data,
              };
            }
            return arg;
          }),
        }));
      } catch (error) {
        console.error("Failed to load replies:", error);
      }
    }
  },
  editComment: async (arg, arg_2, arg_3) => {
    const { comments: local } = arg_2();
    const local_2 = (arg) =>
      arg.map((arg) => {
        if (arg.id === arg) {
          return {
            ...arg,
            text: arg_2,
            spans: arg_3 ?? arg.spans,
            editedAt: new Date().toISOString(),
          };
        }
        if (arg.previewReplies) {
          return {
            ...arg,
            previewReplies: arg.previewReplies.map((arg) => {
              if (arg.id === arg) {
                return {
                  ...arg,
                  text: arg_2,
                  spans: arg_3 ?? arg.spans,
                  editedAt: new Date().toISOString(),
                };
              }
              return arg;
            }),
          };
        }
        return arg;
      });
    const local_3 = local;
    arg({
      comments: local_2(local),
    });
    try {
      await local_8321e242.editComment(arg, arg_2, arg_3);
    } catch (error) {
      console.error("Failed to edit comment:", error);
      arg({
        comments: local_3,
      });
      throw error;
    }
  },
  deleteComment: async (arg) => {
    const { comments: local } = arg_2();
    const local_2 = local.some((arg) => arg.id === arg);
    const local_3 = local.find((arg) =>
      arg.previewReplies?.some((arg) => arg.id === arg),
    );
    const local_4 = local;
    if (local_2) {
      arg({
        comments: local.filter((arg) => arg.id !== arg),
      });
    } else if (local_3) {
      arg({
        comments: local.map((arg) => {
          if (arg.id === local_3.id) {
            return {
              ...arg,
              previewReplies: arg.previewReplies?.filter(
                (arg) => arg.id !== arg,
              ),
              stats: {
                ...arg.stats,
                replies: arg.stats.replies - 1,
              },
            };
          }
          return arg;
        }),
      });
    }
    const { usePostsStore: local_5 } = await symbol_064(async () => {
      const { usePostsStore: local } = await Promise.resolve().then(
        () => local_ab34ad2e,
      );
      return {
        usePostsStore: local,
      };
    }, undefined);
    const local_6 = local_5.getState().currentPost;
    if (local_6) {
      local_5.setState({
        currentPost: {
          ...local_6,
          stats: {
            ...local_6.stats,
            comments: Math.max(0, local_6.stats.comments - 1),
          },
        },
      });
    }
    try {
      await local_8321e242.deleteComment(arg);
    } catch (error) {
      console.error("Failed to delete comment:", error);
      arg({
        comments: local_4,
      });
      throw error;
    }
  },
  clearHighlightedComment: () => {
    arg({
      highlightedCommentId: null,
    });
  },
  setHighlightedCommentId: (arg) => {
    arg({
      highlightedCommentId: arg,
    });
  },
  reset: () => {
    local_a1e12a9e_8.clear();
    arg({
      comments: [],
      commentsLoading: false,
      commentsLoadingMore: false,
      commentsHasMore: true,
      commentsNextCursor: null,
      highlightedCommentId: null,
    });
  },
}));
const local_ab34ad2e_2 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      useCommentsStore: symbol_018,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    },
  ),
);
const local_2c7e8deb = {
  feed_global: 1,
  feed_following: 2,
  feed_clan: 3,
  profile: 4,
  hashtag: 5,
  post_page: 6,
  link: 7,
  search: 8,
};
const local_f06debfc_34 = 0;
const local_f06debfc_35 = 1;
const local_f06debfc_36 = 2;
const local_f06debfc_37 = 3;
const local_f06debfc_38 = 4;
const local_f06debfc_39 = 5;
const local_f06debfc_40 = 250;
const local_f06debfc_41 = 0.5;
const local_f06debfc_42 = 30000;
const local_f06debfc_43 = 2000;
const local_f06debfc_44 = 20;
const local_5d1a826f = "dwell_sid";
const local_c07705b3 = [
  0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
  0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
];
function fn_67c4b2b3() {
  try {
    let local = sessionStorage.getItem(local_5d1a826f);
    if (!local) {
      local = crypto.randomUUID();
      sessionStorage.setItem(local_5d1a826f, local);
    }
    return local;
  } catch {
    return crypto.randomUUID();
  }
}
function fn_c7a41549(arg) {
  if (!arg.isIntersecting) {
    return false;
  }
  const local = arg.boundingClientRect;
  if (!local || local.height === 0) {
    return false;
  }
  const local_2 = arg.intersectionRect;
  const local_3 = arg.rootBounds;
  return (
    (local_2 ? local_2.height / local.height : 0) >= local_f06debfc_41 ||
    (local_3 ? local_2.height >= local_3.height / 2 : false) ||
    arg.intersectionRatio > 0.95
  );
}
class clazz_21748117 {
  observer = null;
  elementToPostId = new WeakMap();
  posts = new Map();
  buffer = [];
  seenPostIds = new Set();
  recentEvents = [];
  lastActivityAt = Date.now();
  sessionId = "";
  bound = false;
  init() {
    if (this.bound || typeof window === "undefined") {
      return;
    }
    this.bound = true;
    this.sessionId = fn_67c4b2b3();
    this.observer = new IntersectionObserver(
      (arg) => {
        for (const local of arg) {
          const local = this.elementToPostId.get(local.target);
          if (!local) {
            continue;
          }
          const local_2 = this.posts.get(local);
          if (local_2) {
            local_2.lastEntry = local;
            this.evaluate(local_2, null);
          }
        }
      },
      {
        threshold: local_c07705b3,
      },
    );
    const local = () => {
      this.lastActivityAt = Date.now();
    };
    const local_2 = ["mousemove", "scroll", "keydown", "touchstart", "wheel"];
    for (const local of local_2) {
      window.addEventListener(local, local, {
        passive: true,
      });
    }
    document.addEventListener("visibilitychange", () => {
      const local = document.hidden ? local_f06debfc_36 : null;
      this.evaluateAll(local);
      if (document.hidden) {
        this.flushBeacon();
      }
    });
    window.addEventListener("blur", () => {
      setTimeout(() => {
        if (!document.hidden) {
          this.evaluateAll(local_f06debfc_35);
        }
      }, 50);
    });
    window.addEventListener("focus", () => this.evaluateAll(null));
    setInterval(() => this.evaluateAll(null), 5000);
    window.addEventListener("pagehide", () => {
      this.evaluateAll(local_f06debfc_37);
      this.flushBeacon();
    });
    setInterval(() => this.flush(), local_f06debfc_43);
  }
  observe(arg, arg_2, arg_3, arg_4, arg_5) {
    if (!this.observer) {
      this.init();
    }
    if (!this.observer) {
      return;
    }
    const local = this.elementToPostId.get(arg);
    if (local && local !== arg_2) {
      const local = this.posts.get(local);
      if (local && local.element === arg) {
        this.evaluate(local, local_f06debfc_38);
        this.posts.delete(local);
      }
    }
    this.elementToPostId.set(arg, arg_2);
    this.posts.set(arg_2, {
      postId: arg_2,
      source: arg_3,
      sourceContext: arg_4,
      vs: arg_5,
      element: arg,
      visibleSince: null,
      lastEntry: null,
    });
    this.observer.observe(arg);
  }
  getActivePosts() {
    return [];
  }
  getRecentEvents() {
    return [];
  }
  unobserve(arg) {
    if (!this.observer) {
      return;
    }
    const local = this.elementToPostId.get(arg);
    this.observer.unobserve(arg);
    this.elementToPostId.delete(arg);
    if (!local) {
      return;
    }
    const local_2 = this.posts.get(local);
    if (local_2) {
      this.evaluate(local_2, local_f06debfc_38);
      this.posts.delete(local);
    }
  }
  isUserActive() {
    return (
      Date.now() - this.lastActivityAt < local_f06debfc_42 && !document.hidden
    );
  }
  evaluateAll(arg) {
    for (const local of this.posts.values()) {
      this.evaluate(local, arg);
    }
  }
  evaluate(arg, arg_2) {
    const local = arg.lastEntry;
    const local_2 = !!local && fn_c7a41549(local);
    const local_3 = local_2 && this.isUserActive() && arg_2 === null;
    const local_4 = arg.visibleSince !== null;
    const local_5 = Date.now();
    if (!local_4 && local_3) {
      arg.visibleSince = local_5;
      return;
    }
    if (local_4 && !local_3) {
      const local = arg.visibleSince;
      const local_2 = local_5 - local;
      arg.visibleSince = null;
      if (local_2 < local_f06debfc_40) {
        return;
      }
      const local_3 =
        arg_2 ?? (local_2 ? local_f06debfc_39 : local_f06debfc_34);
      const local_4 = this.seenPostIds.has(arg.postId);
      this.seenPostIds.add(arg.postId);
      const local_5 = arg.source === "post_page" || arg.source === "link";
      const local_6 = {
        md: local_2,
        et: local,
        xt: local_5,
        r: local_3,
        v: arg.vs,
      };
      if (arg.sourceContext) {
        local_6.sc = arg.sourceContext;
      }
      if (local_5) {
        local_6.s = local_2c7e8deb[arg.source];
      }
      if (local_4) {
        local_6.b = 1;
      }
      this.enqueue(local_6, arg.postId, local_2c7e8deb[arg.source]);
    }
  }
  enqueue(arg, arg_2, arg_3) {
    this.buffer.push(arg);
    if (this.buffer.length >= local_f06debfc_44) {
      this.flush();
    }
  }
  async maybeCompress(arg) {
    const local = {
      "Content-Type": "application/json",
    };
    if (typeof CompressionStream === "undefined" || arg.length < 512) {
      return {
        body: new TextEncoder().encode(arg),
        headers: local,
      };
    }
    try {
      const local = new Blob([arg])
        .stream()
        .pipeThrough(new CompressionStream("deflate"));
      const local_2 = await new Response(local).arrayBuffer();
      if (local_2.byteLength < arg.length) {
        return {
          body: local_2,
          headers: {
            ...local,
            "Content-Encoding": "deflate",
          },
        };
      }
    } catch {}
    return {
      body: new TextEncoder().encode(arg),
      headers: local,
    };
  }
  async flush() {
    if (this.buffer.length === 0) {
      return;
    }
    const local = this.buffer;
    this.buffer = [];
    const local_2 = JSON.stringify({
      sid: this.sessionId,
      e: local,
    });
    const { body: local_3, headers: local_4 } =
      await this.maybeCompress(local_2);
    local_1c641230
      .post(local_34f0cdfd.posts.dwellLog, local_3, {
        headers: local_4,
      })
      .catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const local = this.buffer;
    this.buffer = [];
    local_1c641230
      .post(
        local_34f0cdfd.posts.dwellLog,
        {
          sid: this.sessionId,
          e: local,
        },
        {
          keepalive: true,
        },
      )
      .catch(() => {});
  }
}
const local_a1e12a9e_9 = new clazz_21748117();
function fn_2df383fe(arg, arg_2, arg_3, arg_4 = "", arg_5 = undefined) {
  symbol_077(() => {
    const local = arg_2.current;
    if (!(!local || !arg_5)) {
      local_a1e12a9e_9.observe(local, arg, arg_3, arg_4, arg_5);
      return () => {
        local_a1e12a9e_9.unobserve(local);
      };
    }
  }, [arg, arg_2, arg_3, arg_4, arg_5]);
}
function fn_61d7292b(arg) {
  const local = symbol_054((arg) => arg.postStatsCache[arg.id]);
  return (
    local || {
      likesTotal: arg.reactions.total,
      myReaction: arg.reactions.myReaction,
      commentsCount: arg.stats.comments,
      repostsCount: arg.stats.reposts,
      viewsCount: arg.stats.views,
      dominantEmoji: arg.dominantEmoji,
      reposted: arg.reposted,
    }
  );
}
const local_d4f3f2a4 = "shop-cart";
function fn_19ce2071() {
  try {
    const local = localStorage.getItem(local_d4f3f2a4);
    if (!local) {
      return 0;
    }
    const local_2 = JSON.parse(local)?.state?.items;
    if (Array.isArray(local_2)) {
      return local_2.reduce((arg, arg_2) => arg + (Number(arg_2?.qty) || 0), 0);
    }
    return 0;
  } catch {
    return 0;
  }
}
function fn_3215cb92() {
  const [local, local_2] = symbol_056(fn_19ce2071);
  symbol_077(() => {
    const local = (arg) => {
      if (!(arg.key !== null && arg.key !== local_d4f3f2a4)) {
        local_2(fn_19ce2071());
      }
    };
    window.addEventListener("storage", local);
    return () => window.removeEventListener("storage", local);
  }, []);
  return local;
}
const local_f88ff501 = symbol_078(() =>
  symbol_064(
    () => import("./routes/changelog-modal.js"),
    local_5b673d6a([8, 9]),
  ).then((arg) => ({
    default: arg.ChangelogModal,
  })),
);
const local_f2c3a8a6_2 = symbol_078(() =>
  symbol_064(
    () => import("./routes/subscription-modal.js"),
    local_5b673d6a([0, 1, 2, 3, 4, 5, 6, 7]),
  ).then((arg) => ({
    default: arg.SubscriptionModal,
  })),
);
const local_10cf883a = ({
  href: arg,
  icon: arg_2,
  children: arg_3,
  badge: arg_4,
  onActiveClick: arg_5,
  isActive: arg_6 = false,
}) => {
  const [local] = symbol_045();
  const local_2 = local.url || "./site/index.html";
  const local_3 = local_2 === arg || local_2.startsWith(`${arg}/`) || arg_6;
  return symbol_073("a", {
    href: arg,
    className: `${local_bd6a6a7b.navItem} ${local_3 ? local_bd6a6a7b.active : ""}`,
    onClick: (arg) => {
      if (local_3 && arg_5) {
        arg.preventDefault();
        arg_5();
      }
    },
    children: [
      symbol_073("span", {
        className: local_bd6a6a7b.iconWrapper,
        children: [
          arg_2,
          arg_4 !== undefined &&
            arg_4 > 0 &&
            symbol_073("span", {
              className: local_bd6a6a7b.badge,
              children: arg_4 > 99 ? "99+" : arg_4,
            }),
        ],
      }),
      symbol_073("span", {
        children: arg_3,
      }),
    ],
  });
};
const local_6ba9fd1a = (arg) =>
  symbol_073(local_10cf883a, {
    ...arg,
  });
const local_610f3303 = () => {
  const [local] = symbol_045();
  const local_2 = symbol_054((arg) => arg.fetchFeed);
  const local_3 = symbol_054((arg) => arg.isRefreshing);
  const local_4 = symbol_075((arg) => arg.logout);
  const local_5 = symbol_007();
  const local_6 = symbol_061();
  const local_7 = local_9812c6ee();
  const local_8 = fn_3215cb92();
  const { initialize: local_9, disconnectSSE: local_10 } = local_e4a1ecd0();
  const [local_11, local_12] = symbol_056(false);
  const [local_13, local_14] = symbol_056(false);
  const local_15 = symbol_035();
  const local_16 = symbol_036((arg) => arg.fetchPortal);
  const local_17 = local_6?.username ? `/@${local_6.username}` : "/profile";
  symbol_077(() => {
    if (local_5) {
      local_9();
    }
    return () => {
      local_10();
    };
  }, [local_5, local_9, local_10]);
  symbol_077(() => {
    local_16();
  }, [local_16]);
  const local_18 = symbol_069(() => {
    if (window.scrollY > 1) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    } else {
      local_2(true);
    }
  }, [local_2]);
  const local_19 = symbol_069(() => {
    local_4();
  }, [local_4]);
  const local_20 = symbol_021(() => {
    const local = local.url || "./site/index.html";
    return local_e0268f28.some((arg) => local.startsWith(arg));
  }, [local.url]);
  const local_21 = symbol_021(() => {
    const local = local.url || "./site/index.html";
    if (local_6?.username) {
      return (
        local === `/@${local_6.username}` ||
        local.startsWith(`/@${local_6.username}/`)
      );
    }
    return false;
  }, [local.url, local_6?.username]);
  if (local_20) {
    return null;
  }
  return symbol_073("aside", {
    className: local_bd6a6a7b.aside,
    children: [
      symbol_073("div", {
        className: local_bd6a6a7b.asideTop,
        children: [
          symbol_073("div", {
            className: local_bd6a6a7b.asideBrand,
            children: [
              symbol_073(symbol_038, {}),
              symbol_073("button", {
                className: local_bd6a6a7b.asideBrandVersion,
                onClick: () => local_12(true),
                title: "Что нового",
                children: ["v", "1.1.2"],
              }),
            ],
          }),
          symbol_073("nav", {
            className: local_bd6a6a7b.nav,
            children: [
              symbol_073(local_6ba9fd1a, {
                href: "./site/index.html",
                icon: local_3
                  ? symbol_073(symbol_048, {})
                  : symbol_073(local_fa5c2464, {}),
                onActiveClick: local_18,
                children: "Лента",
              }),
              symbol_073(local_6ba9fd1a, {
                href: "/search",
                icon: symbol_073(local_e33d719c, {}),
                children: "Поиск",
              }),
              symbol_073(local_6ba9fd1a, {
                href: "/shop",
                icon: symbol_073(local_1b669a11, {}),
                badge: local_8,
                children: "Магаз",
              }),
              symbol_073(fn_1061c07b, {
                path: "/event",
                children: ({ matches: arg }) =>
                  symbol_073("a", {
                    href:
                      local_15.active && local_15.url ? local_15.url : "/event",
                    target:
                      local_15.active && local_15.url ? "_blank" : undefined,
                    rel:
                      local_15.active && local_15.url
                        ? "noopener noreferrer"
                        : undefined,
                    className: `${local_bd6a6a7b.portalButton} ${local_15.active ? local_bd6a6a7b.portalActive : ""} ${arg ? local_bd6a6a7b.active : ""}`,
                    title: "Ивент",
                    children: [
                      symbol_073("img", {
                        src: local_15.active
                          ? "/assets/portal/portal-active.gif"
                          : "./assets/portal-inactive.png",
                        alt: "Ивент",
                        className: local_bd6a6a7b.portalImage,
                      }),
                      symbol_073("span", {
                        children: "Ивент",
                      }),
                    ],
                  }),
              }),
              symbol_073(local_6ba9fd1a, {
                href: "/notifications",
                icon: symbol_073(symbol_050, {}),
                badge: local_7,
                children: "Уведомления",
              }),
              symbol_073(local_10cf883a, {
                href: local_17,
                icon: symbol_073(symbol_051, {}),
                isActive: local_21,
                children: "Профиль",
              }),
            ],
          }),
        ],
      }),
      symbol_073("div", {
        className: local_bd6a6a7b.asideBottom,
        children: local_5
          ? symbol_073(symbol_063, {
              children: [
                !local_6?.subscription?.isActive &&
                  symbol_073("button", {
                    className: local_bd6a6a7b.logoutButton,
                    onClick: () => local_14(true),
                    children: [
                      symbol_073("span", {
                        children: "⭐",
                      }),
                      symbol_073("span", {
                        children: "ИТД НУКСТА",
                      }),
                    ],
                  }),
                symbol_073("button", {
                  className: local_bd6a6a7b.logoutButton,
                  onClick: local_19,
                  children: [
                    symbol_073(local_b6621a61, {
                      size: 20,
                    }),
                    symbol_073("span", {
                      children: "Выйти",
                    }),
                  ],
                }),
              ],
            })
          : symbol_073("a", {
              className: local_bd6a6a7b.logoutButton,
              href: local_b294611d.LOGIN,
              children: [
                symbol_073(symbol_051, {
                  size: 20,
                }),
                symbol_073("span", {
                  children: "Войти",
                }),
              ],
            }),
      }),
      local_11 &&
        symbol_073(symbol_062, {
          fallback: null,
          children: symbol_073(local_f88ff501, {
            isOpen: local_11,
            onClose: () => local_12(false),
          }),
        }),
      local_13 &&
        symbol_073(symbol_062, {
          fallback: null,
          children: symbol_073(local_f2c3a8a6_2, {
            isOpen: local_13,
            onClose: () => local_14(false),
          }),
        }),
    ],
  });
};
const local_80a09076 = "c_sidebar";
const local_e82b12d5 = "c_sidebarContent";
const local_c1049a8a = "c_sidebarBottom";
const local_e4028826 = "c_legalLinks";
const local_960709d8 = {
  sidebar: local_80a09076,
  sidebarContent: local_e82b12d5,
  sidebarBottom: local_c1049a8a,
  legalLinks: local_e4028826,
};
const local_945b98e5 = () => {
  const [local] = symbol_045();
  if (
    symbol_021(() => {
      const local = local.url || "./site/index.html";
      return local_e0268f28.some((arg) => local.startsWith(arg));
    }, [local.url])
  ) {
    return null;
  }
  return symbol_073("aside", {
    className: local_960709d8.sidebar,
    children: [
      symbol_073("div", {
        className: local_960709d8.sidebarContent,
      }),
      symbol_073("div", {
        className: local_960709d8.sidebarBottom,
        children: [
          symbol_073("ul", {
            className: local_960709d8.legalLinks,
            children: [
              symbol_073("li", {
                children: symbol_073("a", {
                  href: "https://статус.итд.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Статус серверов",
                }),
              }),
              symbol_073("li", {
                children: symbol_073("a", {
                  href: "/terms",
                  children: "Условия использования",
                }),
              }),
              symbol_073("li", {
                children: symbol_073("a", {
                  href: "/privacy",
                  children: "Конфиденциальность",
                }),
              }),
              symbol_073("li", {
                children: symbol_073("a", {
                  href: "/cookies",
                  children: "Политика Cookies",
                }),
              }),
            ],
          }),
          symbol_073("span", {
            className: local_960709d8.copyright,
            children: "© 2026 ООО «ИТД»",
          }),
        ],
      }),
    ],
  });
};
const local_05ae2d1f = "c_mobileNavigationWrapper";
const local_abaccb0a = "c_navigation";
const local_c8bbfbe3 = "c_indicator";
const local_0e04dd03 = "c_indicatorHidden";
const local_087b0d80_2 = "c_navItem";
const local_fe9ec23f = "c_label";
const local_6ab69625_2 = "c_active";
const local_fa0b7fe4 = "c_createButton";
const local_165b4cbe_2 = "c_iconWrapper";
const local_3401e491_2 = "c_portalImage";
const local_8ae6030b = "c_portalImageActive";
const local_111bfc92_3 = "c_badge";
const local_236f2925 = {
  mobileNavigationWrapper: local_05ae2d1f,
  navigation: local_abaccb0a,
  indicator: local_c8bbfbe3,
  indicatorHidden: local_0e04dd03,
  navItem: local_087b0d80_2,
  label: local_fe9ec23f,
  active: local_6ab69625_2,
  createButton: local_fa0b7fe4,
  iconWrapper: local_165b4cbe_2,
  portalImage: local_3401e491_2,
  portalImageActive: local_8ae6030b,
  badge: local_111bfc92_3,
};
const local_8ef0fa77 = (arg) => Symbol.iterator in arg;
const local_80f5e00d = (arg) => "entries" in arg;
const local_c4ab5a8e = (arg, arg_2) => {
  const local = arg instanceof Map ? arg : new Map(arg.entries());
  const local_2 = arg_2 instanceof Map ? arg_2 : new Map(arg_2.entries());
  if (local.size !== local_2.size) {
    return false;
  }
  for (const [local, local_2] of local) {
    if (!local_2.has(local) || !Object.is(local_2, local_2.get(local))) {
      return false;
    }
  }
  return true;
};
const local_470c261b = (arg, arg_2) => {
  const local = arg[Symbol.iterator]();
  const local_2 = arg_2[Symbol.iterator]();
  let local_3 = local.next();
  let local_4 = local_2.next();
  while (!local_3.done && !local_4.done) {
    if (!Object.is(local_3.value, local_4.value)) {
      return false;
    }
    local_3 = local.next();
    local_4 = local_2.next();
  }
  return !!local_3.done && !!local_4.done;
};
function fn_7135e770(arg, arg_2) {
  if (Object.is(arg, arg_2)) {
    return true;
  }
  if (
    typeof arg !== "object" ||
    arg === null ||
    typeof arg_2 !== "object" ||
    arg_2 === null ||
    Object.getPrototypeOf(arg) !== Object.getPrototypeOf(arg_2)
  ) {
    return false;
  }
  if (local_8ef0fa77(arg) && local_8ef0fa77(arg_2)) {
    if (local_80f5e00d(arg) && local_80f5e00d(arg_2)) {
      return local_c4ab5a8e(arg, arg_2);
    }
    return local_470c261b(arg, arg_2);
  }
  return local_c4ab5a8e(
    {
      entries: () => Object.entries(arg),
    },
    {
      entries: () => Object.entries(arg_2),
    },
  );
}
function symbol_016(arg) {
  const local = local_eff139f9.useRef(undefined);
  return (arg) => {
    const local = arg(arg);
    if (fn_7135e770(local.current, local)) {
      return local.current;
    }
    return (local.current = local);
  };
}
const local_458fcd7d = "c_skeleton";
const local_90492d76 = "c_comment";
const local_4d84dbb6_3 = "c_content";
const local_f1c23efb_2 = "c_header";
const local_63e01459 = "c_headerLeft";
const local_e148243e = "c_body";
const local_8c4f8b4b_2 = "c_actions";
const local_8e76bd1b = "c_likeBtn";
const local_59af08d5 = "c_shimmer";
const local_5d627137_2 = "c_avatar";
const local_1b46ce22 = "c_more";
const local_ca82fb5b = "c_likeIcon";
const local_8d0c49b2 = "c_name";
const local_15aa885a = "c_time";
const local_aabd87fe = "c_line";
const local_a725f8e4 = "c_w100";
const local_687afd97 = "c_w85";
const local_5295db5d = "c_w65";
const local_a2fc1519 = "c_w50";
const local_e05be680 = "c_w40";
const local_85d789af = "c_replyLabel";
const local_0a85d740 = "c_likeCount";
const local_e9ccbd22 = "c_list";
const local_779de6fd = {
  skeleton: local_458fcd7d,
  comment: local_90492d76,
  content: local_4d84dbb6_3,
  header: local_f1c23efb_2,
  headerLeft: local_63e01459,
  body: local_e148243e,
  actions: local_8c4f8b4b_2,
  likeBtn: local_8e76bd1b,
  shimmer: local_59af08d5,
  avatar: local_5d627137_2,
  more: local_1b46ce22,
  likeIcon: local_ca82fb5b,
  name: local_8d0c49b2,
  time: local_15aa885a,
  line: local_aabd87fe,
  w100: local_a725f8e4,
  w85: local_687afd97,
  w65: local_5295db5d,
  w50: local_a2fc1519,
  w40: local_e05be680,
  replyLabel: local_85d789af,
  likeCount: local_0a85d740,
  list: local_e9ccbd22,
};
function fn_1844e7b7(arg) {
  switch (arg) {
    case "short":
      return symbol_073("div", {
        className: local_779de6fd.body,
        children: symbol_073("div", {
          className: `${local_779de6fd.shimmer} ${local_779de6fd.line} ${local_779de6fd.w50}`,
        }),
      });
    case "medium":
      return symbol_073("div", {
        className: local_779de6fd.body,
        children: [
          symbol_073("div", {
            className: `${local_779de6fd.shimmer} ${local_779de6fd.line} ${local_779de6fd.w100}`,
          }),
          symbol_073("div", {
            className: `${local_779de6fd.shimmer} ${local_779de6fd.line} ${local_779de6fd.w65}`,
          }),
        ],
      });
    case "long":
      return symbol_073("div", {
        className: local_779de6fd.body,
        children: [
          symbol_073("div", {
            className: `${local_779de6fd.shimmer} ${local_779de6fd.line} ${local_779de6fd.w100}`,
          }),
          symbol_073("div", {
            className: `${local_779de6fd.shimmer} ${local_779de6fd.line} ${local_779de6fd.w85}`,
          }),
          symbol_073("div", {
            className: `${local_779de6fd.shimmer} ${local_779de6fd.line} ${local_779de6fd.w40}`,
          }),
        ],
      });
  }
}
function fn_10dc4524({ variant: arg = "medium", delayMs: arg_2 = 0 }) {
  const local = arg_2
    ? {
        "--shimmer-delay": `${arg_2}ms`,
      }
    : undefined;
  return symbol_073("div", {
    className: local_779de6fd.skeleton,
    "aria-hidden": "true",
    style: local,
    children: symbol_073("div", {
      className: local_779de6fd.comment,
      children: [
        symbol_073("div", {
          className: `${local_779de6fd.shimmer} ${local_779de6fd.avatar}`,
        }),
        symbol_073("div", {
          className: local_779de6fd.content,
          children: [
            symbol_073("div", {
              className: local_779de6fd.header,
              children: [
                symbol_073("div", {
                  className: local_779de6fd.headerLeft,
                  children: [
                    symbol_073("div", {
                      className: `${local_779de6fd.shimmer} ${local_779de6fd.name}`,
                    }),
                    symbol_073("div", {
                      className: `${local_779de6fd.shimmer} ${local_779de6fd.time}`,
                    }),
                  ],
                }),
                symbol_073("div", {
                  className: `${local_779de6fd.shimmer} ${local_779de6fd.more}`,
                }),
              ],
            }),
            fn_1844e7b7(arg),
            symbol_073("div", {
              className: local_779de6fd.actions,
              children: [
                symbol_073("div", {
                  className: `${local_779de6fd.shimmer} ${local_779de6fd.replyLabel}`,
                }),
                symbol_073("div", {
                  className: local_779de6fd.likeBtn,
                  children: [
                    symbol_073("div", {
                      className: `${local_779de6fd.shimmer} ${local_779de6fd.likeIcon}`,
                    }),
                    symbol_073("div", {
                      className: `${local_779de6fd.shimmer} ${local_779de6fd.likeCount}`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const local_82346740 = ["medium", "short", "long", "medium", "short"];
function fn_4392d77d({ count: arg = 4 }) {
  return symbol_073("div", {
    className: local_779de6fd.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка комментариев",
    children: Array.from(
      {
        length: arg,
      },
      (arg, arg_2) =>
        symbol_073(
          fn_10dc4524,
          {
            variant: local_82346740[arg_2 % local_82346740.length],
            delayMs: arg_2 * 120,
          },
          arg_2,
        ),
    ),
  });
}
const local_58bcf8ef = {
  MAX_CHARS: 1000,
  MIN_POLL_OPTIONS: 2,
  MAX_POLL_OPTIONS: 10,
  MAX_POLL_QUESTION_LENGTH: 200,
  MAX_POLL_OPTION_LENGTH: 100,
  MAX_TEXTAREA_HEIGHT: 400,
};
const local_54b59c52 = {
  question: "",
  options: [
    {
      id: "1",
      text: "",
    },
    {
      id: "2",
      text: "",
    },
  ],
  multipleChoice: false,
};
function fn_79fd0324() {
  const [local, local_2] = symbol_056(false);
  const [local_3, local_4] = symbol_056(local_54b59c52);
  const local_5 = symbol_069((arg) => {
    if (arg.length <= local_58bcf8ef.MAX_POLL_QUESTION_LENGTH) {
      local_4((arg) => ({
        ...arg,
        question: arg,
      }));
    }
  }, []);
  const local_6 = symbol_069((arg, arg_2) => {
    if (arg_2.length <= local_58bcf8ef.MAX_POLL_OPTION_LENGTH) {
      local_4((arg) => ({
        ...arg,
        options: arg.options.map((arg) => {
          if (arg.id === arg) {
            return {
              ...arg,
              text: arg_2,
            };
          }
          return arg;
        }),
      }));
    }
  }, []);
  const local_7 = symbol_069(() => {
    if (local_3.options.length < local_58bcf8ef.MAX_POLL_OPTIONS) {
      local_4((arg) => ({
        ...arg,
        options: [
          ...arg.options,
          {
            id: Date.now().toString(),
            text: "",
          },
        ],
      }));
    }
  }, [local_3.options.length]);
  const local_8 = symbol_069(
    (arg) => {
      if (local_3.options.length > local_58bcf8ef.MIN_POLL_OPTIONS) {
        local_4((arg) => ({
          ...arg,
          options: arg.options.filter((arg) => arg.id !== arg),
        }));
      }
    },
    [local_3.options.length],
  );
  const local_9 = symbol_069(() => {
    local_4((arg) => ({
      ...arg,
      multipleChoice: !arg.multipleChoice,
    }));
  }, []);
  const local_10 = symbol_069(() => {
    local_2(false);
    local_4(local_54b59c52);
  }, []);
  const local_11 = symbol_069(() => {
    local_2((arg) => !arg);
  }, []);
  const local_12 = symbol_069(() => {
    if (!local) {
      return true;
    }
    const local = local_3.question.trim().length > 0;
    const local_2 = local_3.options.filter((arg) => arg.text.trim().length > 0);
    return local && local_2.length >= local_58bcf8ef.MIN_POLL_OPTIONS;
  }, [local, local_3]);
  const local_13 = symbol_069(() => {
    if (!(!local || !local_12())) {
      return {
        question: local_3.question.trim(),
        options: local_3.options
          .filter((arg) => arg.text.trim().length > 0)
          .map((arg) => ({
            text: arg.text.trim(),
          })),
        multipleChoice: local_3.multipleChoice,
      };
    }
  }, [local, local_12, local_3]);
  const local_14 = symbol_069(() => {
    local_2(false);
    local_4(local_54b59c52);
  }, []);
  return {
    isPollOpen: local,
    poll: local_3,
    togglePoll: local_11,
    handlePollQuestionChange: local_5,
    handlePollOptionChange: local_6,
    handleAddPollOption: local_7,
    handleRemovePollOption: local_8,
    handleMultipleChoiceToggle: local_9,
    handleClosePoll: local_10,
    isPollValid: local_12,
    getPollData: local_13,
    resetPoll: local_14,
  };
}
function fn_94884e4d(arg = 10, arg_2 = false) {
  const [local, local_2] = symbol_056([]);
  const [local_3, local_4] = symbol_056([]);
  const local_5 = symbol_002(null);
  const local_6 = symbol_002(local);
  const local_7 = symbol_002(local_3);
  local_6.current = local;
  local_7.current = local_3;
  symbol_077(
    () => () => {
      local_6.current.forEach((arg) => URL.revokeObjectURL(arg.previewUrl));
      local_7.current.forEach((arg) => URL.revokeObjectURL(arg.previewUrl));
    },
    [],
  );
  const local_8 = local_3.length > 0;
  const local_9 =
    local.some((arg) => arg.type === "video") ||
    local_3.some((arg) => arg.type === "video");
  const local_10 =
    local.some((arg) => arg.type === "image") ||
    local_3.some((arg) => arg.type === "image");
  const local_11 = symbol_069(() => {
    local_5.current?.click();
  }, []);
  const local_12 = symbol_069(
    async (arg) => {
      const local = symbol_070.isValidVideoType(arg);
      const local_2 = symbol_070.isValidImageType(arg);
      if (local && !arg_2) {
        symbol_072.error(
          "Загрузка видео доступна только верифицированным пользователям",
        );
        return;
      }
      if (!local_2 && !local) {
        symbol_072.error("Неподдерживаемый формат файла");
        return;
      }
      const local_3 = local_6.current;
      const local_4 = local_7.current;
      const local_5 =
        local_3.some((arg) => arg.type === "video") ||
        local_4.some((arg) => arg.type === "video");
      const local_6 =
        local_3.some((arg) => arg.type === "image") ||
        local_4.some((arg) => arg.type === "image");
      if (local && local_6) {
        symbol_072.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (local_2 && local_5) {
        symbol_072.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (local && local_5) {
        symbol_072.error("Можно загрузить только 1 видео");
        return;
      }
      const local_7 = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const local_8 = URL.createObjectURL(arg);
      const local_9 = local ? "video" : "image";
      local_4((arg) => [
        ...arg,
        {
          id: local_7,
          file: arg,
          previewUrl: local_8,
          progress: 0,
          type: local_9,
        },
      ]);
      try {
        const local = await symbol_070.uploadMedia(arg);
        local_4((arg) => arg.filter((arg) => arg.id !== local_7));
        local_2((arg) => [
          ...arg,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: local.id,
            url: local.url,
            previewUrl: local_8,
            type: local_9,
          },
        ]);
      } catch (error) {
        let local = "Ошибка загрузки";
        if (symbol_076(error)) {
          local = symbol_040(error.code, error.message);
        } else if (error instanceof Error) {
          local = error.message;
        }
        symbol_072.error(local);
        local_4((arg) => arg.filter((arg) => arg.id !== local_7));
        URL.revokeObjectURL(local_8);
      }
    },
    [arg_2],
  );
  const local_13 = symbol_069(
    (arg) => {
      const local = arg.target;
      const local_2 = local.files;
      if (!local_2 || local_2.length === 0) {
        return;
      }
      const local_3 = local.length + local_3.length;
      const local_4 = arg - local_3;
      if (local_4 <= 0) {
        return;
      }
      Array.from(local_2).slice(0, local_4).forEach(local_12);
      local.value = "";
    },
    [local.length, local_3.length, arg, local_12],
  );
  const local_14 = symbol_069((arg) => {
    local_2((arg) => {
      const local = arg.find((arg) => arg.id === arg);
      if (local) {
        URL.revokeObjectURL(local.previewUrl);
      }
      return arg.filter((arg) => arg.id !== arg);
    });
    local_4((arg) => {
      const local = arg.find((arg) => arg.id === arg);
      if (local) {
        URL.revokeObjectURL(local.previewUrl);
      }
      return arg.filter((arg) => arg.id !== arg);
    });
  }, []);
  const local_15 = symbol_069(
    (arg) => {
      const local = arg.filter((arg) => {
        if (arg_2) {
          return symbol_070.isValidMediaType(arg);
        }
        return symbol_070.isValidImageType(arg);
      });
      if (local.length === 0) {
        return;
      }
      const local_2 = local_6.current.length + local_7.current.length;
      const local_3 = arg - local_2;
      if (!(local_3 <= 0)) {
        local.slice(0, local_3).forEach(local_12);
      }
    },
    [arg, local_12, arg_2],
  );
  const local_16 = symbol_069(
    async (arg) => {
      const [local, local_2] = arg.split(",");
      const local_3 = local.match(/:(.*?);/)?.[1] || "image/png";
      const local_4 = atob(local_2);
      const local_5 = new Uint8Array(local_4.length);
      for (let local = 0; local < local_4.length; local++) {
        local_5[local] = local_4.charCodeAt(local);
      }
      const local_6 = new Blob([local_5], {
        type: local_3,
      });
      const local_7 = new File([local_6], `drawing-${Date.now()}.png`, {
        type: "image/png",
      });
      local_12(local_7);
    },
    [local_12],
  );
  const local_17 = symbol_069(() => {
    local.forEach((arg) => URL.revokeObjectURL(arg.previewUrl));
    local_3.forEach((arg) => URL.revokeObjectURL(arg.previewUrl));
    local_2([]);
    local_4([]);
  }, [local, local_3]);
  return {
    images: local,
    uploadingImages: local_3,
    isUploading: local_8,
    hasVideo: local_9,
    hasImages: local_10,
    openFilePicker: local_11,
    removeImage: local_14,
    addImage: local_16,
    uploadFiles: local_15,
    clearAll: local_17,
    fileInputRef: local_5,
    handleFileChange: local_13,
  };
}
const local_7ab56d01 = "c_form";
const local_8c3908b1 = "c_dragActive";
const local_e78cb809 = "c_whatsNew";
const local_7b2acc5c = "c_editor";
const local_da91ef47 = "c_dragOverlay";
const local_a8b504eb = "c_attachments";
const local_63416bbf = "c_attachmentPreview";
const local_87957932 = "c_uploading";
const local_8079b036 = "c_uploadError";
const local_835ecf14 = "c_videoPreviewWrapper";
const local_6b4da54b = "c_videoPlayIcon";
const local_479a2f9d = "c_uploadOverlay";
const local_ee7a6f6b_2 = "c_spinner";
const local_63880a17 = "c_errorOverlay";
const local_bcebeb33 = "c_errorText";
const local_40d2d59f = "c_removeAttachment";
const local_8c4f8b4b_3 = "c_actions";
const local_033f1d4a = "c_mediaButtons";
const local_39ce1bad = "c_mediaButton";
const local_45d9d45c = "c_submitGroup";
const local_ddd6ec9e = "c_charCount";
const local_cd23a337 = "c_error";
const local_1cf45662 = "c_pollContainer";
const local_900d227e = "c_pollHeader";
const local_45cffe8f = "c_pollTitle";
const local_f8da52c5 = "c_pollClose";
const local_6219bba1 = "c_pollQuestion";
const local_b8c29f71 = "c_pollOptions";
const local_bc206bf5 = "c_pollOptionRow";
const local_43612517 = "c_pollOption";
const local_bd57ec58 = "c_removeOption";
const local_c2e35764 = "c_addOption";
const local_f076a584 = "c_pollFooter";
const local_7da401cc = "c_pollToggle";
const local_6ab69625_3 = "c_active";
const local_6930e397 = {
  form: local_7ab56d01,
  dragActive: local_8c3908b1,
  whatsNew: local_e78cb809,
  editor: local_7b2acc5c,
  dragOverlay: local_da91ef47,
  attachments: local_a8b504eb,
  attachmentPreview: local_63416bbf,
  uploading: local_87957932,
  uploadError: local_8079b036,
  videoPreviewWrapper: local_835ecf14,
  videoPlayIcon: local_6b4da54b,
  uploadOverlay: local_479a2f9d,
  spinner: local_ee7a6f6b_2,
  errorOverlay: local_63880a17,
  errorText: local_bcebeb33,
  removeAttachment: local_40d2d59f,
  actions: local_8c4f8b4b_3,
  mediaButtons: local_033f1d4a,
  mediaButton: local_39ce1bad,
  submitGroup: local_45d9d45c,
  charCount: local_ddd6ec9e,
  error: local_cd23a337,
  pollContainer: local_1cf45662,
  pollHeader: local_900d227e,
  pollTitle: local_45cffe8f,
  pollClose: local_f8da52c5,
  pollQuestion: local_6219bba1,
  pollOptions: local_b8c29f71,
  pollOptionRow: local_bc206bf5,
  pollOption: local_43612517,
  removeOption: local_bd57ec58,
  addOption: local_c2e35764,
  pollFooter: local_f076a584,
  pollToggle: local_7da401cc,
  active: local_6ab69625_3,
};
function fn_12ea3240({ src: arg, type: arg_2 }) {
  if (arg_2 === "video") {
    return symbol_073("div", {
      className: local_6930e397.videoPreviewWrapper,
      children: [
        symbol_073("video", {
          src: arg,
          preload: "metadata",
        }),
        symbol_073("div", {
          className: local_6930e397.videoPlayIcon,
          children: symbol_073(local_59d4f3fb, {
            size: 24,
          }),
        }),
      ],
    });
  }
  return symbol_073("img", {
    src: arg,
    alt: "",
  });
}
function fn_58944426({ images: arg, uploadingImages: arg_2, onRemove: arg_3 }) {
  if (arg.length > 0 || arg_2.length > 0) {
    return symbol_073("div", {
      className: local_6930e397.attachments,
      children: [
        arg.map((arg) =>
          symbol_073(
            "div",
            {
              className: local_6930e397.attachmentPreview,
              children: [
                symbol_073(fn_12ea3240, {
                  src: arg.previewUrl,
                  type: arg.type,
                }),
                symbol_073("button", {
                  className: local_6930e397.removeAttachment,
                  onClick: () => arg_3(arg.id),
                  children: symbol_073(symbol_049, {}),
                }),
              ],
            },
            arg.id,
          ),
        ),
        arg_2.map((arg) =>
          symbol_073(
            "div",
            {
              className: `${local_6930e397.attachmentPreview} ${arg.error ? local_6930e397.uploadError : local_6930e397.uploading}`,
              children: [
                symbol_073(fn_12ea3240, {
                  src: arg.previewUrl,
                  type: arg.type,
                }),
                !arg.error &&
                  symbol_073("div", {
                    className: local_6930e397.uploadOverlay,
                    children: symbol_073("div", {
                      className: local_6930e397.spinner,
                    }),
                  }),
                arg.error &&
                  symbol_073("div", {
                    className: local_6930e397.errorOverlay,
                    children: symbol_073("span", {
                      className: local_6930e397.errorText,
                      children: arg.error,
                    }),
                  }),
                symbol_073("button", {
                  className: local_6930e397.removeAttachment,
                  onClick: () => arg_3(arg.id),
                  children: symbol_073(symbol_049, {}),
                }),
              ],
            },
            arg.id,
          ),
        ),
      ],
    });
  }
  return null;
}
function fn_9716bb9e({
  poll: arg,
  onQuestionChange: arg_2,
  onOptionChange: arg_3,
  onAddOption: arg_4,
  onRemoveOption: arg_5,
  onMultipleChoiceToggle: arg_6,
  onClose: arg_7,
}) {
  return symbol_073("div", {
    className: local_6930e397.pollContainer,
    children: [
      symbol_073("div", {
        className: local_6930e397.pollHeader,
        children: [
          symbol_073("span", {
            className: local_6930e397.pollTitle,
            children: "Опрос",
          }),
          symbol_073("button", {
            className: local_6930e397.pollClose,
            onClick: arg_7,
            children: symbol_073(symbol_049, {}),
          }),
        ],
      }),
      symbol_073("input", {
        type: "text",
        className: local_6930e397.pollQuestion,
        placeholder: "Вопрос опроса",
        value: arg.question,
        onInput: (arg) => arg_2(arg.target.value),
      }),
      symbol_073("div", {
        className: local_6930e397.pollOptions,
        children: arg.options.map((arg, arg_2) =>
          symbol_073(
            "div",
            {
              className: local_6930e397.pollOptionRow,
              children: [
                symbol_073("input", {
                  type: "text",
                  className: local_6930e397.pollOption,
                  placeholder: `Вариант ${arg_2 + 1}`,
                  value: arg.text,
                  maxLength: 50,
                  onInput: (arg) => arg_3(arg.id, arg.target.value),
                }),
                arg.options.length > local_58bcf8ef.MIN_POLL_OPTIONS &&
                  symbol_073("button", {
                    className: local_6930e397.removeOption,
                    onClick: () => arg_5(arg.id),
                    children: symbol_073(symbol_049, {}),
                  }),
              ],
            },
            arg.id,
          ),
        ),
      }),
      arg.options.length < local_58bcf8ef.MAX_POLL_OPTIONS &&
        symbol_073("button", {
          className: local_6930e397.addOption,
          onClick: arg_4,
          children: [
            symbol_073(symbol_065, {}),
            symbol_073("span", {
              children: "Добавить вариант",
            }),
          ],
        }),
      symbol_073("div", {
        className: local_6930e397.pollFooter,
        children: symbol_073("label", {
          className: local_6930e397.pollToggle,
          children: [
            symbol_073("input", {
              type: "checkbox",
              checked: arg.multipleChoice,
              onChange: arg_6,
            }),
            symbol_073("span", {
              children: "Несколько вариантов ответа",
            }),
          ],
        }),
      }),
    ],
  });
}
const local_7b2acc5c_2 = "c_editor";
const local_119f77f9 = "c_empty";
const local_57dba5d3 = "c_bold";
const local_72857482 = "c_italic";
const local_a04b7f28 = "c_underline";
const local_4d65e68e = "c_strike";
const local_c1e123d3 = "c_spoiler";
const local_48965102 = "c_monospace";
const local_50c198f6 = "c_quote";
const local_2c917740 = "c_link";
const local_19c27dce = "c_menu";
const local_38263102 = "c_buttons";
const local_9e87ce8c_3 = "c_button";
const local_7dbba3b2 = "c_linkForm";
const local_81920a20 = "c_linkInput";
const local_c7fa00fe = "c_linkSubmit";
const local_41e5f641 = {
  editor: local_7b2acc5c_2,
  empty: local_119f77f9,
  bold: local_57dba5d3,
  italic: local_72857482,
  underline: local_a04b7f28,
  strike: local_4d65e68e,
  spoiler: local_c1e123d3,
  monospace: local_48965102,
  quote: local_50c198f6,
  link: local_2c917740,
  menu: local_19c27dce,
  buttons: local_38263102,
  button: local_9e87ce8c_3,
  linkForm: local_7dbba3b2,
  linkInput: local_81920a20,
  linkSubmit: local_c7fa00fe,
};
const local_dbbaf3b2 = {
  bold: local_41e5f641.bold,
  italic: local_41e5f641.italic,
  underline: local_41e5f641.underline,
  strike: local_41e5f641.strike,
  spoiler: local_41e5f641.spoiler,
  monospace: local_41e5f641.monospace,
  quote: local_41e5f641.quote,
  link: local_41e5f641.link,
};
function fn_6e13c644(arg) {
  return arg
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function fn_2a874703(arg) {
  return arg
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function fn_9d34860e(arg) {
  return arg !== "mention" && arg !== "hashtag";
}
function fn_a937b453(arg, arg_2) {
  if (arg_2.length === 0) {
    return arg;
  }
  let local = arg;
  for (const local of arg_2) {
    if (!fn_9d34860e(local.type)) {
      continue;
    }
    const local = local_dbbaf3b2[local.type];
    const local_2 =
      local.type === "link" ? ` data-url="${fn_2a874703(local.url)}"` : "";
    local = `<span class="${local}"${local_2}>${local}</span>`;
  }
  return local;
}
function fn_833011fa(arg, arg_2, arg_3) {
  let local = 0;
  const local_2 = document.createTreeWalker(arg, NodeFilter.SHOW_TEXT);
  let local_3 = local_2.nextNode();
  while (local_3) {
    if (local_3 === arg_2) {
      return local + arg_3;
    }
    local += local_3.textContent?.length || 0;
    local_3 = local_2.nextNode();
  }
  return local;
}
function fn_5890bf29(arg, arg_2) {
  return arg
    .map((arg) => {
      const local = arg.offset + arg.length;
      if (arg.offset >= arg_2.length) {
        return null;
      }
      if (local > arg_2.length) {
        return {
          ...arg,
          length: arg_2.length - arg.offset,
        };
      }
      return arg;
    })
    .filter((arg) => arg !== null);
}
function fn_4d178f8b(arg) {
  const local = [];
  const local_2 = (arg, arg_2) => {
    if (arg.nodeType === Node.TEXT_NODE) {
      return arg_2 + (arg.textContent?.length || 0);
    }
    if (arg.nodeType === Node.ELEMENT_NODE) {
      const local = arg;
      if (local.tagName === "BR") {
        return arg_2 + 1;
      }
      let local_2 = null;
      for (const [local, local_2] of Object.entries(local_dbbaf3b2)) {
        if (local.classList.contains(local_2)) {
          local_2 = local;
          break;
        }
      }
      const local_3 = arg_2;
      let local_4 = arg_2;
      for (const local of Array.from(arg.childNodes)) {
        local_4 = local_2(local, local_4);
      }
      if (local_2 && local_4 > local_3) {
        const local =
          local_2 === "link"
            ? {
                type: "link",
                url: local.dataset.url || "",
                offset: local_3,
                length: local_4 - local_3,
              }
            : {
                type: local_2,
                offset: local_3,
                length: local_4 - local_3,
              };
        local.push(local);
      }
      return local_4;
    }
    return arg_2;
  };
  local_2(arg, 0);
  return local;
}
function fn_8ae913df(arg, arg_2) {
  let local = arg;
  while (local && local.nodeType !== Node.DOCUMENT_NODE) {
    if (local.nodeType === Node.ELEMENT_NODE) {
      const local = local;
      if (local.classList.contains(arg_2)) {
        return local;
      }
    }
    local = local.parentNode;
  }
  return null;
}
function fn_fd53a43f(arg) {
  const local = arg.parentNode;
  if (local) {
    while (arg.firstChild) {
      local.insertBefore(arg.firstChild, arg);
    }
    local.removeChild(arg);
  }
}
const local_f05391d9 = [
  {
    type: "bold",
    icon: local_2266b1ba,
    title: "Жирный",
  },
  {
    type: "italic",
    icon: local_595b56df,
    title: "Курсив",
  },
  {
    type: "underline",
    icon: local_4bedf0ab,
    title: "Подчёркнутый",
  },
  {
    type: "strike",
    icon: local_2c195875,
    title: "Зачёркнутый",
  },
  {
    type: "spoiler",
    icon: local_29080f6a,
    title: "Спойлер",
  },
  {
    type: "monospace",
    icon: local_f79a8e51,
    title: "Моноширинный",
  },
  {
    type: "quote",
    icon: local_bb67df5f,
    title: "Цитата",
  },
  {
    type: "link",
    icon: local_3ea3ac5c,
    title: "Ссылка",
  },
];
const local_7fa9686b = symbol_044(function (
  {
    value: arg,
    spans: arg_2,
    onChange: arg_3,
    placeholder: arg_4 = "Написать...",
    maxLength: arg_5 = 5000,
    autoFocus: arg_6 = false,
    className: arg_7 = "",
    minHeight: arg_8 = 40,
    maxHeight: arg_9 = 400,
    onSubmit: arg_10,
    disableFormatting: arg_11 = false,
    onImagePaste: arg_12,
  },
  arg_13,
) {
  const local = symbol_002(null);
  const [local_2, local_3] = symbol_056(false);
  const [local_4, local_5] = symbol_056({
    x: 0,
    y: 0,
  });
  const [local_6, local_7] = symbol_056(false);
  const [local_8, local_9] = symbol_056("");
  const local_10 = symbol_002(null);
  const local_11 = symbol_002(null);
  const local_12 = symbol_002(null);
  const local_13 = symbol_002(false);
  const local_14 = symbol_002(false);
  const local_15 = symbol_002(arg);
  const local_16 = symbol_002(arg_2);
  const local_17 = symbol_002(arg_3);
  symbol_077(() => {
    local_15.current = arg;
    local_16.current = arg_2;
    local_17.current = arg_3;
  }, [arg, arg_2, arg_3]);
  symbol_046(
    arg_13,
    () => ({
      insertText: (arg) => {
        const local = local.current;
        if (!local) {
          return;
        }
        local.focus();
        const local_2 = window.getSelection();
        if (!local_2) {
          return;
        }
        let local_3 = 0;
        if (local_2.rangeCount > 0) {
          const local = local_2.getRangeAt(0);
          local_3 = fn_833011fa(local, local.startContainer, local.startOffset);
        }
        const local_4 = local_15.current;
        const local_5 = local_16.current;
        const local_6 =
          local_4.slice(0, local_3) + arg + local_4.slice(local_3);
        const local_7 = local_5.map((arg) => {
          if (arg.offset >= local_3) {
            return {
              ...arg,
              offset: arg.offset + arg.length,
            };
          }
          if (arg.offset + arg.length > local_3) {
            return {
              ...arg,
              length: arg.length + arg.length,
            };
          }
          return arg;
        });
        local_14.current = true;
        local_15.current = local_6;
        local_16.current = local_7;
        const local_8 = document.createTextNode(arg);
        if (local_2.rangeCount > 0) {
          const local = local_2.getRangeAt(0);
          local.deleteContents();
          local.insertNode(local_8);
          local.setStartAfter(local_8);
          local.setEndAfter(local_8);
          local_2.removeAllRanges();
          local_2.addRange(local);
        }
        local_17.current(local_6, local_7);
      },
      focus: () => {
        local.current?.focus();
      },
    }),
    [],
  );
  const local_18 = symbol_069(() => {
    if (!arg) {
      return "";
    }
    if (arg_2.length === 0) {
      return fn_6e13c644(arg);
    }
    const local = [...arg_2].sort((arg, arg_2) => arg.offset - arg_2.offset);
    const local_2 = [];
    for (const local of local) {
      local_2.push({
        pos: local.offset,
        type: "start",
        span: local,
      });
      local_2.push({
        pos: local.offset + local.length,
        type: "end",
        span: local,
      });
    }
    local_2.sort((arg, arg_2) => {
      if (arg.pos !== arg_2.pos) {
        return arg.pos - arg_2.pos;
      }
      if (arg.type !== arg_2.type) {
        if (arg.type === "end") {
          return -1;
        }
        return 1;
      }
      return 0;
    });
    let local_3 = "";
    let local_4 = 0;
    const local_5 = [];
    for (const local of local_2) {
      if (local.pos > local_4) {
        const local = arg.substring(local_4, local.pos);
        local_3 += fn_a937b453(fn_6e13c644(local), local_5);
        local_4 = local.pos;
      }
      if (local.type === "start") {
        local_5.push(local.span);
      } else {
        const local = local_5.indexOf(local.span);
        if (local !== -1) {
          local_5.splice(local, 1);
        }
      }
    }
    if (local_4 < arg.length) {
      const local = arg.substring(local_4);
      local_3 += fn_a937b453(fn_6e13c644(local), local_5);
    }
    return local_3 || "<br>";
  }, [arg, arg_2]);
  symbol_077(() => {
    if (local_14.current) {
      local_14.current = false;
      return;
    }
    const local = local.current;
    if (!local || (document.activeElement === local && arg !== "")) {
      return;
    }
    const local_2 = local_18();
    if (local.innerHTML !== local_2) {
      local.innerHTML = local_2;
    }
  }, [local_18, arg]);
  symbol_077(() => {
    if (arg_6 && local.current) {
      const local = local.current;
      local.focus();
      if (local.childNodes.length > 0) {
        const local = window.getSelection();
        if (local) {
          const local = document.createRange();
          local.selectNodeContents(local);
          local.collapse(false);
          local.removeAllRanges();
          local.addRange(local);
        }
      }
    }
  }, [arg_6]);
  symbol_077(() => {
    if (local_6 && local_11.current) {
      local_11.current.focus();
    }
  }, [local_6]);
  const local_19 = symbol_069(
    (arg) => {
      if (local_13.current) {
        return;
      }
      const local = local.current;
      if (!local) {
        return;
      }
      if (arg?.data === "./entry.js") {
        const local = window.getSelection();
        if (local && local.rangeCount > 0) {
          const local = local.getRangeAt(0).startContainer;
          let local_2 = null;
          let local_3 = local;
          while (local_3 && local_3 !== local) {
            if (local_3.nodeType === Node.ELEMENT_NODE) {
              const local = local_3;
              if (local.tagName === "SPAN" && local.className) {
                local_2 = local;
                break;
              }
            }
            local_3 = local_3.parentNode;
          }
          if (local_2) {
            const local = local_2.textContent || "";
            if (local.endsWith("./entry.js")) {
              local_2.textContent = local.slice(0, -1);
              const local = document.createTextNode("./entry.js");
              local_2.parentNode?.insertBefore(local, local_2.nextSibling);
              const local_2 = document.createRange();
              local_2.setStartAfter(local);
              local_2.setEndAfter(local);
              local.removeAllRanges();
              local.addRange(local_2);
            }
          }
        }
      }
      const local_2 = local.innerText.replace(/\n$/, "");
      if (local_2.length > arg_5) {
        const local = local_2.substring(0, arg_5);
        local_14.current = true;
        arg_3(local, fn_5890bf29(arg_2, local));
        return;
      }
      const local_3 = fn_4d178f8b(local);
      local_14.current = true;
      arg_3(local_2, local_3);
    },
    [arg_5, arg_3, arg_2],
  );
  const local_20 = symbol_069(
    (arg) => {
      if (arg_11) {
        return;
      }
      const local = window.getSelection();
      if (!local || local.isCollapsed) {
        return;
      }
      arg.preventDefault();
      local_12.current = local.getRangeAt(0).cloneRange();
      const local_2 = Math.max(
        10,
        Math.min(arg.clientX - 150, window.innerWidth - 310),
      );
      const local_3 = Math.max(10, arg.clientY - 50);
      local_5({
        x: local_2,
        y: local_3,
      });
      local_3(true);
    },
    [arg_11],
  );
  const local_21 = symbol_069(
    (arg) => {
      arg.preventDefault();
      if (arg_12 && arg.clipboardData?.files?.length) {
        const local = Array.from(arg.clipboardData.files).filter((arg) =>
          arg.type.startsWith("image/"),
        );
        if (local.length > 0) {
          arg_12(local);
          return;
        }
      }
      const local = arg.clipboardData?.getData("text/plain") || "";
      if (!local) {
        return;
      }
      const local_2 = window.getSelection();
      if (!local_2 || !local_2.rangeCount) {
        return;
      }
      const local_3 = local_2.getRangeAt(0);
      local_3.deleteContents();
      const local_4 = document.createTextNode(local);
      local_3.insertNode(local_4);
      local_3.setStartAfter(local_4);
      local_3.setEndAfter(local_4);
      local_2.removeAllRanges();
      local_2.addRange(local_3);
      local_19();
    },
    [local_19, arg_12],
  );
  const local_22 = symbol_069(() => {
    const local = local.current;
    if (local && !local_15.current) {
      const local = window.getSelection();
      if (local) {
        const local = document.createRange();
        local.setStart(local, 0);
        local.collapse(true);
        local.removeAllRanges();
        local.addRange(local);
      }
    }
  }, []);
  const local_23 = symbol_069(
    (arg) => {
      if (arg.key === "Enter" && !arg.shiftKey && arg_10) {
        arg.preventDefault();
        arg_10();
        return;
      }
      if (!arg_11 && (arg.ctrlKey || arg.metaKey)) {
        let local = null;
        switch (arg.key.toLowerCase()) {
          case "b":
            local = "bold";
            break;
          case "i":
            local = "italic";
            break;
          case "u":
            local = "underline";
            break;
        }
        if (local) {
          arg.preventDefault();
          local_24(local);
        }
      }
    },
    [arg_10, arg_11],
  );
  const local_24 = symbol_069(
    (arg, arg_2) => {
      const local = local.current;
      if (!local) {
        return;
      }
      const local_2 = window.getSelection();
      if (
        !local_2 ||
        (local_12.current &&
          (local_2.removeAllRanges(), local_2.addRange(local_12.current)),
        local_2.isCollapsed)
      ) {
        return;
      }
      const local_3 = local_2.getRangeAt(0);
      const local_4 = document.createElement("span");
      local_4.className = local_dbbaf3b2[arg];
      if (arg === "link" && arg_2) {
        local_4.dataset.url = arg_2;
      }
      const local_5 = fn_8ae913df(
        local_3.commonAncestorContainer,
        local_dbbaf3b2[arg],
      );
      if (local_5) {
        fn_fd53a43f(local_5);
      } else {
        try {
          local_3.surroundContents(local_4);
        } catch {
          const local = local_3.extractContents();
          local_4.appendChild(local);
          local_3.insertNode(local_4);
        }
      }
      local_19();
      local_3(false);
      local_7(false);
      local_9("");
      local_12.current = null;
      local.focus();
    },
    [local_19],
  );
  const local_25 = symbol_069(
    (arg) => {
      if (arg === "link") {
        local_7(true);
      } else {
        local_24(arg);
      }
    },
    [local_24],
  );
  const local_26 = symbol_069(
    (arg) => {
      arg.preventDefault();
      if (local_8.trim()) {
        local_24("link", local_8.trim());
      }
    },
    [local_24, local_8],
  );
  symbol_077(() => {
    if (!local_2) {
      return;
    }
    const local = (arg) => {
      if (local_10.current && !local_10.current.contains(arg.target)) {
        local_3(false);
        local_7(false);
        local_9("");
        local_12.current = null;
      }
    };
    const local_2 = () => {
      local_3(false);
      local_7(false);
      local_9("");
      local_12.current = null;
    };
    document.addEventListener("mousedown", local);
    window.addEventListener("scroll", local_2, true);
    return () => {
      document.removeEventListener("mousedown", local);
      window.removeEventListener("scroll", local_2, true);
    };
  }, [local_2]);
  const local_27 = !arg;
  return symbol_073(symbol_063, {
    children: [
      symbol_073("div", {
        ref: local,
        className: `${local_41e5f641.editor} ${arg_7} ${local_27 ? local_41e5f641.empty : ""}`,
        contentEditable: true,
        "data-placeholder": arg_4,
        onInput: (arg) => local_19(arg),
        onFocus: local_22,
        onPaste: local_21,
        onContextMenu: local_20,
        onKeyDown: local_23,
        onCompositionStart: () => {
          local_13.current = true;
        },
        onCompositionEnd: () => {
          local_13.current = false;
          local_19();
        },
        style: {
          minHeight: arg_8,
          maxHeight: arg_9,
        },
      }),
      local_2 &&
        symbol_001(
          symbol_073("div", {
            ref: local_10,
            className: local_41e5f641.menu,
            style: {
              left: local_4.x,
              top: local_4.y,
            },
            children: local_6
              ? symbol_073("form", {
                  className: local_41e5f641.linkForm,
                  onSubmit: local_26,
                  children: [
                    symbol_073("input", {
                      ref: local_11,
                      type: "url",
                      className: local_41e5f641.linkInput,
                      placeholder: "https://...",
                      value: local_8,
                      onInput: (arg) => local_9(arg.target.value),
                    }),
                    symbol_073("button", {
                      type: "submit",
                      className: local_41e5f641.linkSubmit,
                      disabled: !local_8.trim(),
                      children: "OK",
                    }),
                  ],
                })
              : symbol_073("div", {
                  className: local_41e5f641.buttons,
                  children: local_f05391d9.map(
                    ({ type: arg, icon: arg_2, title: arg_3 }) =>
                      symbol_073(
                        "button",
                        {
                          type: "button",
                          className: local_41e5f641.button,
                          onClick: () => local_25(arg),
                          title: arg_3,
                          children: symbol_073(arg_2, {
                            size: 16,
                          }),
                        },
                        arg,
                      ),
                  ),
                }),
          }),
          document.body,
        ),
    ],
  });
});
const local_cfbe29dc = "c_commentInput";
const local_6058f848 = "c_replyMode";
const local_bda066e8 = "c_inputRow";
const local_f1849383 = "c_attachmentStrip";
const local_1d4f092b = "c_circleButton";
const local_10d36d7d = "c_micButton";
const local_a430f3b3 = "c_sendButton";
const local_2a9e285b = "c_submitting";
const local_ff755d3b = "c_textareaContainer";
const local_d442578c = "c_expanded";
const local_0c709345 = "c_voiceMode";
const local_f53702d6 = "c_inputWrapper";
const local_1a757f5e = "c_commentCharCount";
const local_cd23a337_2 = "c_error";
const local_301b9a53 = "c_input";
const local_603234cf = "c_replyHeader";
const local_825a7418 = "c_replyText";
const local_469d4ba6 = "c_replyName";
const local_1c223043 = "c_replyClose";
const local_8c3908b1_2 = "c_dragActive";
const local_da91ef47_2 = "c_dragOverlay";
const local_00c0e56d = {
  commentInput: local_cfbe29dc,
  replyMode: local_6058f848,
  inputRow: local_bda066e8,
  attachmentStrip: local_f1849383,
  circleButton: local_1d4f092b,
  micButton: local_10d36d7d,
  sendButton: local_a430f3b3,
  submitting: local_2a9e285b,
  textareaContainer: local_ff755d3b,
  expanded: local_d442578c,
  voiceMode: local_0c709345,
  inputWrapper: local_f53702d6,
  commentCharCount: local_1a757f5e,
  error: local_cd23a337_2,
  input: local_301b9a53,
  replyHeader: local_603234cf,
  replyText: local_825a7418,
  replyName: local_469d4ba6,
  replyClose: local_1c223043,
  dragActive: local_8c3908b1_2,
  dragOverlay: local_da91ef47_2,
};
const local_90fb249e = "c_textInput";
const local_3b82a308 = "c_entering";
const local_a430f3b3_2 = "c_sendButton";
const local_1019f609 = {
  textInput: local_90fb249e,
  entering: local_3b82a308,
  sendButton: local_a430f3b3_2,
};
const local_f06debfc_45 = 1000;
function fn_790c5628({
  text: arg,
  spans: arg_2,
  onChange: arg_3,
  placeholder: arg_4,
  onSubmit: arg_5,
  isEntering: arg_6,
  autoFocus: arg_7,
  isSubmitting: arg_8,
  sendDisabled: arg_9,
  onImagePaste: arg_10,
}) {
  const local = local_f06debfc_45 - arg.length;
  const local_2 = local < 0;
  const local_3 = [
    local_1019f609.textInput,
    arg_6 ? local_1019f609.entering : "",
  ]
    .filter(Boolean)
    .join("./entry.js");
  return symbol_073("div", {
    className: local_3,
    children: [
      symbol_073("div", {
        className: local_00c0e56d.inputWrapper,
        children: [
          symbol_073(local_7fa9686b, {
            value: arg,
            spans: arg_2,
            onChange: arg_3,
            placeholder: arg_4,
            autoFocus: arg_7,
            className: local_00c0e56d.input,
            minHeight: 24,
            maxHeight: 200,
            onSubmit: local_2 ? undefined : arg_5,
            disableFormatting: true,
            onImagePaste: arg_10,
          }),
          local_2 &&
            symbol_073("span", {
              className: `${local_00c0e56d.commentCharCount} ${local_00c0e56d.error}`,
              children: local,
            }),
        ],
      }),
      symbol_073("button", {
        className: `${local_00c0e56d.circleButton} ${local_00c0e56d.sendButton} ${local_1019f609.sendButton} ${arg_8 ? local_00c0e56d.submitting : ""}`,
        onClick: arg_5,
        disabled: arg_8 || arg_9 || local_2,
        children: arg_8
          ? symbol_073(fn_42234aa5, {
              size: "xs",
            })
          : symbol_073(local_fa759dff, {
              size: 20,
            }),
      }),
    ],
  });
}
const local_c0a30487 = symbol_078(() =>
  symbol_064(
    () => import("./routes/voice-input.js"),
    local_5b673d6a([10, 11, 12]),
  ).then((arg) => ({
    default: arg.VoiceInput,
  })),
);
function symbol_025({
  onSubmit: arg,
  onVoiceSend: arg_2,
  placeholder: arg_3 = "Написать комментарий...",
  replyTo: arg_4,
  onCancelReply: arg_5,
  autoFocus: arg_6,
}) {
  const {
    text: local,
    spans: local_2,
    handleChange: local_3,
    reset: local_4,
  } = fn_9d6d3161();
  const [local_5, local_6] = symbol_056("text");
  const [local_7, local_8] = symbol_056(false);
  const [local_9, local_10] = symbol_056(false);
  const [local_11, local_12] = symbol_056(false);
  const [local_13, local_14] = symbol_056(false);
  const local_15 = symbol_002(false);
  const local_16 = symbol_002(null);
  const local_17 = symbol_002(0);
  const {
    images: local_18,
    uploadingImages: local_19,
    isUploading: local_20,
    openFilePicker: local_21,
    removeImage: local_22,
    uploadFiles: local_23,
    clearAll: local_24,
    fileInputRef: local_25,
    handleFileChange: local_26,
  } = fn_94884e4d(4);
  symbol_077(
    () => () => {
      if (local_16.current) {
        clearTimeout(local_16.current);
      }
    },
    [],
  );
  const local_27 = local_18.length > 0 || local_19.length > 0;
  const local_28 = local.length > 0 || local_11 || local_27;
  const local_29 = local_5 === "voice";
  const local_30 = 1000;
  const local_31 = async () => {
    const local = local.trim().length > 0;
    const local_2 = local_18.length > 0;
    if (
      (!local && !local_2) ||
      local_11 ||
      local_20 ||
      local.length > local_30
    ) {
      return;
    }
    const local_3 = local.trim();
    const local_4 = [...local_2];
    const local_5 = local_18.map((arg) => ({
      mediaId: arg.mediaId,
    }));
    local_12(true);
    try {
      await arg(local_3, local_4, local_5.length > 0 ? local_5 : undefined);
      local_4();
      local_24();
    } catch (error) {
      console.error("Failed to submit comment:", error);
    } finally {
      local_12(false);
    }
  };
  const local_32 = () => {
    local_15.current = true;
    local_6("voice");
    local_10(false);
  };
  const local_33 = () => {
    local_8(true);
  };
  const local_34 = () => {
    local_8(false);
    local_6("text");
    local_10(true);
    if (local_16.current) {
      clearTimeout(local_16.current);
    }
    local_16.current = window.setTimeout(() => {
      local_16.current = null;
      local_10(false);
    }, 300);
  };
  const local_35 = symbol_069((arg) => {
    arg.preventDefault();
    arg.stopPropagation();
    local_17.current++;
    if (arg.dataTransfer?.types.includes("Files")) {
      local_14(true);
    }
  }, []);
  const local_36 = symbol_069((arg) => {
    arg.preventDefault();
    arg.stopPropagation();
  }, []);
  const local_37 = symbol_069((arg) => {
    arg.preventDefault();
    arg.stopPropagation();
    local_17.current--;
    if (local_17.current === 0) {
      local_14(false);
    }
  }, []);
  const local_38 = symbol_069(
    (arg) => {
      arg.preventDefault();
      arg.stopPropagation();
      local_17.current = 0;
      local_14(false);
      const local = arg.dataTransfer?.files;
      if (local && local.length > 0) {
        local_23(Array.from(local));
      }
    },
    [local_23],
  );
  const local_39 = [
    local_00c0e56d.commentInput,
    local_28 ? local_00c0e56d.expanded : "",
    local_29 ? local_00c0e56d.voiceMode : "",
    arg_4 ? local_00c0e56d.replyMode : "",
    local_13 ? local_00c0e56d.dragActive : "",
  ]
    .filter(Boolean)
    .join("./entry.js");
  return symbol_073("div", {
    className: local_39,
    onDragEnter: local_35,
    onDragOver: local_36,
    onDragLeave: local_37,
    onDrop: local_38,
    children: [
      local_13 &&
        symbol_073("div", {
          className: local_00c0e56d.dragOverlay,
          children: [
            symbol_073(local_fe55573b, {
              size: 24,
            }),
            symbol_073("span", {
              children: "Перетащите изображение",
            }),
          ],
        }),
      arg_4 &&
        symbol_073("div", {
          className: local_00c0e56d.replyHeader,
          children: [
            symbol_073("span", {
              className: local_00c0e56d.replyText,
              children: [
                "Ответ для ",
                symbol_073("span", {
                  className: local_00c0e56d.replyName,
                  children: arg_4.authorName,
                }),
              ],
            }),
            symbol_073("button", {
              className: local_00c0e56d.replyClose,
              onClick: arg_5,
              children: symbol_073(symbol_049, {
                size: 16,
              }),
            }),
          ],
        }),
      !local_29 &&
        !local_7 &&
        local_27 &&
        symbol_073("div", {
          className: local_00c0e56d.attachmentStrip,
          children: symbol_073(fn_58944426, {
            images: local_18,
            uploadingImages: local_19,
            onRemove: local_22,
          }),
        }),
      symbol_073("div", {
        className: local_00c0e56d.inputRow,
        children: [
          symbol_073("button", {
            className: local_00c0e56d.circleButton,
            onClick: local_29 ? local_33 : local_21,
            children: local_29
              ? symbol_073(symbol_049, {
                  size: 20,
                })
              : symbol_073(local_e89bf398, {
                  size: 20,
                }),
          }),
          symbol_073("div", {
            className: local_00c0e56d.textareaContainer,
            children:
              local_29 || local_7
                ? symbol_073(symbol_062, {
                    fallback: null,
                    children: symbol_073(local_c0a30487, {
                      onCancel: local_33,
                      onSend: arg_2,
                      isExiting: local_7,
                      onExitComplete: local_34,
                    }),
                  })
                : symbol_073(fn_790c5628, {
                    text: local,
                    spans: local_2,
                    onChange: local_3,
                    placeholder: arg_3,
                    onSubmit: local_31,
                    isEntering: local_9,
                    autoFocus: arg_6,
                    isSubmitting: local_11,
                    sendDisabled: local_20,
                    onImagePaste: local_23,
                  }),
          }),
          !local_29 &&
            !local_7 &&
            symbol_073("button", {
              className: `${local_00c0e56d.circleButton} ${local_00c0e56d.micButton}`,
              onClick: local_32,
              children: symbol_073(local_c518db66, {
                size: 20,
              }),
            }),
        ],
      }),
      symbol_073("input", {
        ref: local_25,
        type: "file",
        accept: local_2ace5464,
        multiple: true,
        onChange: local_26,
        style: {
          display: "none",
        },
      }),
    ],
  });
}
const local_54499ee8 = "c_counter";
const local_54e3c2ab = "c_digit";
const local_aca5f673 = "c_prev";
const local_2528f463 = "c_current";
const local_5dd66b58 = "c_animating";
const local_2dd95584 = "c_up";
const local_847c4bd6 = "c_down";
const local_724a2377 = {
  counter: local_54499ee8,
  digit: local_54e3c2ab,
  prev: local_aca5f673,
  current: local_2528f463,
  animating: local_5dd66b58,
  up: local_2dd95584,
  down: local_847c4bd6,
};
function fn_e22ca1f5(arg) {
  if (arg >= 1000000) {
    const local = arg / 1000000;
    if (local % 1 === 0) {
      return `${local}M`;
    }
    return `${local.toFixed(1)}M`;
  }
  if (arg >= 1000) {
    const local = arg / 1000;
    if (local % 1 === 0) {
      return `${local}K`;
    }
    return `${local.toFixed(1)}K`;
  }
  return arg.toString();
}
function fn_2d0b32d3({ value: arg }) {
  const local = fn_e22ca1f5(arg);
  const local_2 = symbol_002(arg);
  const local_3 = symbol_002(local.length);
  const local_4 = symbol_002(Date.now());
  const [local_5, local_6] = symbol_056(() =>
    local.split("").map((arg, arg_2) => ({
      char: arg,
      prevChar: arg,
      isAnimating: false,
      key: arg_2,
    })),
  );
  const [local_7, local_8] = symbol_056(null);
  symbol_077(() => {
    if (Date.now() - local_4.current < 100) {
      local_2.current = arg;
      return;
    }
    if (arg === local_2.current) {
      return;
    }
    const local = arg > local_2.current ? "up" : "down";
    local_8(local);
    local_2.current = arg;
    const local_2 = local.split("");
    const local_3 = local_5.map((arg) => arg.char);
    const local_4 = Math.max(local_2.length, local_3.length);
    const local_5 = local_3.join("").padStart(local_4, "./entry.js").split("");
    const local_6 = local_2
      .join("")
      .padStart(local_4, "./entry.js")
      .split("")
      .map((arg, arg_2) => {
        const local = local_5[arg_2] || "./entry.js";
        const local_2 = local_5[arg_2 - (local_4 - local_5.length)];
        if (arg !== local) {
          return (
            local_3.current++,
            {
              char: arg,
              prevChar: local,
              isAnimating: true,
              key: local_3.current,
            }
          );
        }
        return {
          char: arg,
          prevChar: arg,
          isAnimating: false,
          key: local_2?.key ?? arg_2,
        };
      })
      .filter((arg) => arg.char !== "./entry.js" || arg.isAnimating);
    local_6(local_6);
    const local_7 = setTimeout(() => {
      local_6((arg) =>
        arg.map((arg) => ({
          ...arg,
          isAnimating: false,
        })),
      );
      local_8(null);
    }, 300);
    return () => clearTimeout(local_7);
  }, [arg]);
  if (!local_5.some((arg) => arg.isAnimating)) {
    return symbol_073("span", {
      children: local,
    });
  }
  const local_9 =
    local_7 === "up"
      ? local_724a2377.up
      : local_7 === "down"
        ? local_724a2377.down
        : "";
  return symbol_073("span", {
    className: local_724a2377.counter,
    children: local_5.map((arg) => {
      if (arg.isAnimating) {
        return symbol_073(
          "span",
          {
            className: `${local_724a2377.digit} ${local_724a2377.animating} ${local_9}`,
            children: [
              symbol_073("span", {
                className: local_724a2377.prev,
                children: arg.prevChar,
              }),
              symbol_073("span", {
                className: local_724a2377.current,
                children: arg.char,
              }),
            ],
          },
          arg.key,
        );
      }
      return symbol_073(
        "span",
        {
          children: arg.char,
        },
        arg.key,
      );
    }),
  });
}
const local_79a99ee5 = "c_dropdownWrapper";
const local_ff1bceb0 = "c_trigger";
const local_19c27dce_2 = "c_menu";
const local_b75dbab3 = "c_hidden";
const local_ad9811e4 = "c_menuItem";
const local_cd953748_2 = "c_danger";
const local_91b7e964 = "c_itemIcon";
const local_b6081d82 = "c_itemLabel";
const local_2345161f = "c_divider";
const local_34166590 = {
  dropdownWrapper: local_79a99ee5,
  trigger: local_ff1bceb0,
  menu: local_19c27dce_2,
  hidden: local_b75dbab3,
  menuItem: local_ad9811e4,
  danger: local_cd953748_2,
  itemIcon: local_91b7e964,
  itemLabel: local_b6081d82,
  divider: local_2345161f,
};
function symbol_005({
  trigger: arg,
  items: arg_2,
  position: arg_3 = "bottom-right",
  dividerAfter: arg_4 = [],
  className: arg_5,
}) {
  const [local, local_2] = symbol_056(false);
  const [local_3, local_4] = symbol_056(false);
  const [local_5, local_6] = symbol_056({
    top: 0,
    left: 0,
  });
  const local_7 = symbol_002(null);
  const local_8 = symbol_002(null);
  const local_9 = symbol_069(() => {
    if (!local_7.current) {
      return;
    }
    const local = local_7.current.getBoundingClientRect();
    const local_2 = local_8.current?.offsetHeight || 150;
    const local_3 = local_8.current?.offsetWidth || 160;
    let local_4 = 0;
    let local_5 = 0;
    if (arg_3.startsWith("bottom")) {
      local_4 = local.bottom + 4;
    } else {
      local_4 = local.top - local_2 - 4;
    }
    if (arg_3.endsWith("right")) {
      local_5 = local.right - local_3;
    } else {
      local_5 = local.left;
    }
    const local_6 = window.innerWidth;
    const local_7 = window.innerHeight;
    if (local_5 + local_3 > local_6) {
      local_5 = local_6 - local_3 - 8;
    }
    if (local_5 < 8) {
      local_5 = 8;
    }
    if (local_4 + local_2 > local_7) {
      local_4 = local.top - local_2 - 4;
    }
    if (local_4 < 8) {
      local_4 = local.bottom + 4;
    }
    local_6({
      top: local_4,
      left: local_5,
    });
    local_4(true);
  }, [arg_3]);
  const local_10 = symbol_069((arg) => {
    const local = arg.target;
    if (
      local_7.current &&
      !local_7.current.contains(local) &&
      local_8.current &&
      !local_8.current.contains(local)
    ) {
      local_2(false);
      local_4(false);
    }
  }, []);
  symbol_077(() => {
    if (local) {
      local_9();
      document.addEventListener("mousedown", local_10);
      window.addEventListener("scroll", local_9, true);
      window.addEventListener("resize", local_9);
      return () => {
        document.removeEventListener("mousedown", local_10);
        window.removeEventListener("scroll", local_9, true);
        window.removeEventListener("resize", local_9);
      };
    }
  }, [local, local_10, local_9]);
  const local_11 = (arg) => {
    arg.stopPropagation();
    if (local) {
      local_2(false);
      local_4(false);
    } else {
      local_2(true);
    }
  };
  const local_12 = (arg, arg_2) => {
    arg.stopPropagation();
    arg_2.onClick();
    local_2(false);
    local_4(false);
  };
  return symbol_073("div", {
    className: `${local_34166590.dropdownWrapper} ${arg_5 || ""}`,
    children: [
      symbol_073("div", {
        ref: local_7,
        className: local_34166590.trigger,
        onClick: local_11,
        children: arg,
      }),
      local &&
        symbol_001(
          symbol_073("div", {
            ref: local_8,
            className: `${local_34166590.menu} ${local_3 ? "" : local_34166590.hidden}`,
            style: {
              top: local_5.top,
              left: local_5.left,
            },
            children: arg_2.map((arg, arg_2) =>
              symbol_073(
                "div",
                {
                  children: [
                    symbol_073("button", {
                      type: "button",
                      className: `${local_34166590.menuItem} ${arg.danger ? local_34166590.danger : ""}`,
                      onClick: (arg) => local_12(arg, arg),
                      children: [
                        arg.icon &&
                          symbol_073("span", {
                            className: local_34166590.itemIcon,
                            children: arg.icon,
                          }),
                        symbol_073("span", {
                          className: local_34166590.itemLabel,
                          children: arg.label,
                        }),
                      ],
                    }),
                    arg_4.includes(arg.id) &&
                      arg_2 < arg_2.length - 1 &&
                      symbol_073("div", {
                        className: local_34166590.divider,
                      }),
                  ],
                },
                arg.id,
              ),
            ),
          }),
          document.body,
        ),
    ],
  });
}
const local_a04b7f28_2 = "c_underline";
const local_48965102_2 = "c_monospace";
const local_50c198f6_2 = "c_quote";
const local_c1e123d3_2 = "c_spoiler";
const local_948f5160 = "c_revealed";
const local_2c917740_2 = "c_link";
const local_89415eea = "c_mention";
const local_41fd64f7 = "c_hashtag";
const local_bd78acf1 = {
  underline: local_a04b7f28_2,
  monospace: local_48965102_2,
  quote: local_50c198f6_2,
  spoiler: local_c1e123d3_2,
  revealed: local_948f5160,
  link: local_2c917740_2,
  mention: local_89415eea,
  hashtag: local_41fd64f7,
};
function fn_1bfd6162(arg) {
  try {
    const local = new URL(arg);
    return local.protocol === "http:" || local.protocol === "./entry.js";
  } catch {
    return false;
  }
}
function fn_6ed72f1f(arg) {
  if (!fn_1bfd6162(arg)) {
    return "#";
  }
  const local = new TextEncoder().encode(arg);
  const local_2 = String.fromCharCode(...local);
  const local_3 = btoa(local_2);
  return `/external?url=${encodeURIComponent(local_3)}`;
}
function fn_a782b940({ text: arg, spans: arg_2 = [], className: arg_3 = "" }) {
  const [local, local_2] = symbol_056(new Set());
  const local_3 = symbol_021(() => {
    if (arg_2.length === 0) {
      return [
        {
          text: arg,
          styles: new Set(),
        },
      ];
    }
    const local = [];
    arg_2.forEach((arg, arg_2) => {
      local.push({
        pos: arg.offset,
        type: "start",
        span: arg,
        index: arg_2,
      });
      local.push({
        pos: arg.offset + arg.length,
        type: "end",
        span: arg,
        index: arg_2,
      });
    });
    local.sort((arg, arg_2) => {
      if (arg.pos !== arg_2.pos) {
        return arg.pos - arg_2.pos;
      }
      if (arg.type !== arg_2.type) {
        if (arg.type === "end") {
          return -1;
        }
        return 1;
      }
      return 0;
    });
    const local_2 = [];
    let local_3 = 0;
    const local_4 = new Map();
    for (const local of local) {
      if (local.pos > local_3) {
        const local = arg.substring(local_3, local.pos);
        const local_2 = new Set();
        let local_3;
        let local_4;
        let local_5;
        local_4.forEach((arg) => {
          local_2.add(arg.type);
          if (arg.type === "link" && arg.url) {
            local_3 = arg.url;
          }
          if (arg.type === "mention" && (arg.username || arg.id)) {
            local_4 = arg.username || arg.id;
          }
          if (arg.type === "hashtag" && arg.tag) {
            local_5 = arg.tag;
          }
        });
        local_2.push({
          text: local,
          styles: local_2,
          url: local_3,
          mentionId: local_4,
          hashtag: local_5,
        });
      }
      if (local.type === "start") {
        local_4.set(local.index, local.span);
      } else {
        local_4.delete(local.index);
      }
      local_3 = local.pos;
    }
    if (local_3 < arg.length) {
      local_2.push({
        text: arg.substring(local_3),
        styles: new Set(),
      });
    }
    return local_2;
  }, [arg, arg_2]);
  const local_4 = (arg, arg_2) => {
    arg.stopPropagation();
    local_2((arg) => {
      const local = new Set(arg);
      if (local.has(arg_2)) {
        local.delete(arg_2);
      } else {
        local.add(arg_2);
      }
      return local;
    });
  };
  const local_5 = (arg, arg_2) => {
    let local = arg.text;
    if (arg.styles.has("bold")) {
      local = symbol_073("strong", {
        children: local,
      });
    }
    if (arg.styles.has("italic")) {
      local = symbol_073("em", {
        children: local,
      });
    }
    if (arg.styles.has("underline")) {
      local = symbol_073("span", {
        className: local_bd78acf1.underline,
        children: local,
      });
    }
    if (arg.styles.has("strike")) {
      local = symbol_073("s", {
        children: local,
      });
    }
    if (arg.styles.has("monospace")) {
      local = symbol_073("code", {
        className: local_bd78acf1.monospace,
        children: local,
      });
    }
    if (arg.styles.has("quote")) {
      local = symbol_073("span", {
        className: local_bd78acf1.quote,
        children: local,
      });
    }
    if (arg.styles.has("spoiler")) {
      const local = local.has(arg_2);
      local = symbol_073("span", {
        className: `${local_bd78acf1.spoiler} ${local ? local_bd78acf1.revealed : ""}`,
        onClick: (arg) => local_4(arg, arg_2),
        children: local,
      });
    }
    if (arg.styles.has("link") && arg.url) {
      const local = fn_6ed72f1f(arg.url);
      local = symbol_073("a", {
        href: local,
        target: "_blank",
        rel: "noopener noreferrer",
        className: local_bd78acf1.link,
        onClick: (arg) => arg.stopPropagation(),
        children: local,
      });
    }
    if (arg.styles.has("mention") && arg.mentionId) {
      const local = `/@${arg.mentionId}`;
      local = symbol_073("a", {
        href: local,
        className: local_bd78acf1.mention,
        onClick: (arg) => {
          arg.preventDefault();
          arg.stopPropagation();
          symbol_057(local);
        },
        children: local,
      });
    }
    if (arg.styles.has("hashtag") && arg.hashtag) {
      const local = `/hashtag/${encodeURIComponent(arg.hashtag)}`;
      local = symbol_073("a", {
        href: local,
        className: local_bd78acf1.hashtag,
        onClick: (arg) => {
          arg.preventDefault();
          arg.stopPropagation();
          symbol_057(local);
        },
        children: local,
      });
    }
    return symbol_073(
      "span",
      {
        children: local,
      },
      arg_2,
    );
  };
  return symbol_073("span", {
    className: arg_3,
    children: local_3.map((arg, arg_2) => local_5(arg, arg_2)),
  });
}
function symbol_053(arg, arg_2, arg_3) {
  const {
    isVisible: local,
    isRevealing: local_2,
    onRevealComplete: local_3,
  } = arg_3;
  const local_4 = symbol_002([]);
  const local_5 = symbol_002(null);
  const local_6 = symbol_002(null);
  const local_7 = symbol_002({
    width: 0,
    height: 0,
  });
  const local_8 = symbol_002(1);
  const local_9 = symbol_069((arg, arg_2) => {
    const local = Math.random() * 80 + 60;
    return {
      x: Math.random() * arg,
      y: Math.random() * arg_2,
      size: Math.random() * 1.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      life: Math.random() * local,
      maxLife: local,
    };
  }, []);
  const local_10 = symbol_069(
    (arg, arg_2) => {
      const local = Math.floor((arg * arg_2) / 600);
      const local_2 = [];
      for (let local = 0; local < local; local++) {
        local_2.push(local_9(arg, arg_2));
      }
      local_4.current = local_2;
    },
    [local_9],
  );
  const local_11 = symbol_069(() => {
    const local = arg.current;
    const local_2 = arg_2.current;
    if (!local || !local_2) {
      return;
    }
    const local_3 = local_2.getBoundingClientRect();
    if (local_3.width === 0 || local_3.height === 0) {
      return;
    }
    const local_4 = window.devicePixelRatio || 1;
    if (
      local_7.current.width !== local_3.width ||
      local_7.current.height !== local_3.height
    ) {
      local_7.current = {
        width: local_3.width,
        height: local_3.height,
      };
      local.width = local_3.width * local_4;
      local.height = local_3.height * local_4;
      local.style.width = `${local_3.width}px`;
      local.style.height = `${local_3.height}px`;
      const local = local.getContext("2d");
      if (local) {
        local.setTransform(local_4, 0, 0, local_4, 0, 0);
        local_6.current = local;
      }
      local_10(local_3.width, local_3.height);
    }
  }, [arg, arg_2, local_10]);
  const local_12 = symbol_069(() => {
    local_8.current = 1;
  }, []);
  symbol_077(() => {
    if (!local) {
      if (local_5.current) {
        cancelAnimationFrame(local_5.current);
        local_5.current = null;
      }
      return;
    }
    local_11();
    const local = () => {
      const local = local_6.current;
      const { width: local_2, height: local_3 } = local_7.current;
      if (!local || local_2 === 0 || local_3 === 0) {
        local_5.current = requestAnimationFrame(local);
        return;
      }
      if (local_2 && ((local_8.current -= 0.05), local_8.current <= 0)) {
        local_3();
        return;
      }
      local.clearRect(0, 0, local_2, local_3);
      local_4.current.forEach((arg, arg_2) => {
        arg.x += arg.speedX;
        arg.y += arg.speedY;
        arg.life--;
        if (arg.x < 0) {
          arg.x = local_2;
        }
        if (arg.x > local_2) {
          arg.x = 0;
        }
        if (arg.y < 0) {
          arg.y = local_3;
        }
        if (arg.y > local_3) {
          arg.y = 0;
        }
        if (arg.life <= 0) {
          local_4.current[arg_2] = local_9(local_2, local_3);
          return;
        }
        const local = arg.life / arg.maxLife;
        const local_2 = local < 0.3 ? local / 0.3 : 1;
        const local_3 = arg.opacity * local_2 * local_8.current;
        local.beginPath();
        local.arc(arg.x, arg.y, arg.size, 0, Math.PI * 2);
        local.fillStyle = `rgba(255, 255, 255, ${local_3})`;
        local.fill();
      });
      local_5.current = requestAnimationFrame(local);
    };
    local_5.current = requestAnimationFrame(local);
    window.addEventListener("resize", local_11);
    return () => {
      if (local_5.current) {
        cancelAnimationFrame(local_5.current);
      }
      window.removeEventListener("resize", local_11);
    };
  }, [local, local_2, local_9, local_11, local_3]);
  return {
    resetOpacity: local_12,
  };
}
const local_adb43aea = "c_container";
const local_b75dbab3_2 = "c_hidden";
const local_1d2f8d3d_2 = "c_image";
const local_6573f01d = "c_revealing";
const local_529ee1fe = "c_canvas";
const local_91772deb = {
  container: local_adb43aea,
  hidden: local_b75dbab3_2,
  image: local_1d2f8d3d_2,
  revealing: local_6573f01d,
  canvas: local_529ee1fe,
};
const local_f06debfc_46 = 5;
function fn_cfe6dd12({
  src: arg,
  alt: arg_2 = "",
  spoiler: arg_3 = false,
  width: arg_4,
  height: arg_5,
  className: arg_6 = "",
  onClick: arg_7,
}) {
  const [local, local_2] = symbol_056(!arg_3);
  const [local_3, local_4] = symbol_056(false);
  const [local_5, local_6] = symbol_056(false);
  const local_7 = symbol_002(null);
  const local_8 = symbol_002(null);
  const local_9 = symbol_002(null);
  const local_10 = symbol_002(false);
  const { resetOpacity: local_11 } = symbol_053(local_7, local_8, {
    isVisible: local_5 && !local && arg_3,
    isRevealing: local_3,
    onRevealComplete: () => local_2(true),
  });
  symbol_077(() => {
    const local = local_8.current;
    if (!local) {
      return;
    }
    const local_2 = new IntersectionObserver(
      (arg) => {
        arg.forEach((arg) => {
          local_6(arg.isIntersecting);
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 200px 0px 200px",
      },
    );
    local_2.observe(local);
    return () => {
      local_2.disconnect();
    };
  }, []);
  const local_12 = (arg) => {
    local_9.current = {
      x: arg.clientX,
      y: arg.clientY,
    };
    local_10.current = false;
  };
  const local_13 = (arg) => {
    if (!local_9.current) {
      return;
    }
    const local = Math.abs(arg.clientX - local_9.current.x);
    const local_2 = Math.abs(arg.clientY - local_9.current.y);
    if (local > local_f06debfc_46 || local_2 > local_f06debfc_46) {
      local_10.current = true;
    }
  };
  const local_14 = (arg) => {
    if (local_10.current) {
      local_10.current = false;
      arg.stopPropagation();
      return;
    }
    if (!local && !local_3 && arg_3) {
      arg.stopPropagation();
      local_4(true);
      local_11();
    } else if (arg_7) {
      arg_7(arg);
    }
  };
  const local_15 = !local && arg_3;
  const local_16 =
    arg_4 && arg_5
      ? {
          aspectRatio: `${arg_4} / ${arg_5}`,
        }
      : undefined;
  if (arg_3) {
    return symbol_073("div", {
      ref: local_8,
      className: `${local_91772deb.container} ${arg_6} ${local_15 ? local_91772deb.hidden : ""} ${local_3 ? local_91772deb.revealing : ""}`,
      style: local_16,
      onPointerDown: local_12,
      onPointerMove: local_13,
      onClick: local_14,
      children: [
        symbol_073("img", {
          src: arg,
          alt: arg_2,
          className: local_91772deb.image,
          loading: "lazy",
          width: arg_4,
          height: arg_5,
          draggable: false,
          "data-post-media-image": true,
        }),
        local_15 &&
          symbol_073("canvas", {
            ref: local_7,
            className: local_91772deb.canvas,
          }),
      ],
    });
  }
  return symbol_073("img", {
    src: arg,
    alt: arg_2,
    className: arg_6,
    loading: "lazy",
    draggable: false,
    width: arg_4,
    height: arg_5,
    style:
      arg_4 && arg_5
        ? {
            aspectRatio: `${arg_4} / ${arg_5}`,
          }
        : undefined,
    onClick: arg_7,
    "data-post-media-image": true,
  });
}
function fn_3d85e25b(arg) {
  let local = arg;
  let local_2 = 0;
  while (local && local_2 < 4) {
    const local = window.getComputedStyle(local).borderRadius;
    if (local && local !== "0px" && local !== "0%") {
      return local;
    }
    local = local.parentElement;
    local_2++;
  }
  return "0px";
}
function fn_326c4d77(arg, arg_2) {
  const local =
    (arg
      ? [
          ...(arg.matches("img") ? [arg] : []),
          ...Array.from(arg.querySelectorAll("img")),
        ]
      : []
    ).find((arg) => {
      const local = arg.getBoundingClientRect();
      return local.width > 0 && local.height > 0;
    }) ?? arg;
  const local_2 = local?.getBoundingClientRect();
  if (!local_2 || local_2.width <= 0 || local_2.height <= 0) {
    return null;
  }
  const local_3 = arg_2?.getBoundingClientRect();
  const local_4 = Math.max(0, local_3 ? local_3.left : 0);
  const local_5 = Math.max(0, local_3 ? local_3.top : 0);
  const local_6 = Math.min(
    window.innerWidth,
    local_3 ? local_3.right : Infinity,
  );
  const local_7 = Math.min(
    window.innerHeight,
    local_3 ? local_3.bottom : Infinity,
  );
  const local_8 = Math.max(local_2.left, local_4);
  const local_9 = Math.max(local_2.top, local_5);
  const local_10 = Math.min(local_2.right, local_6);
  const local_11 = Math.min(local_2.bottom, local_7);
  const local_12 = Math.max(0, local_10 - local_8);
  const local_13 = Math.max(0, local_11 - local_9);
  if (local_12 <= 0 || local_13 <= 0) {
    return null;
  }
  return {
    left: local_8,
    top: local_9,
    width: local_12,
    height: local_13,
    hiddenLeft: local_8 - local_2.left,
    hiddenTop: local_9 - local_2.top,
    hiddenRight: local_2.right - local_10,
    hiddenBottom: local_2.bottom - local_11,
    borderRadius: fn_3d85e25b(local),
  };
}
const local_16468f59 = {
  photo_open: 1,
  video_progress: 2,
};
const local_f06debfc_47 = 2000;
const local_f06debfc_48 = 20;
const local_5d1a826f_2 = "dwell_sid";
function fn_67c4b2b3_2() {
  try {
    let local = sessionStorage.getItem(local_5d1a826f_2);
    if (!local) {
      local = crypto.randomUUID();
      sessionStorage.setItem(local_5d1a826f_2, local);
    }
    return local;
  } catch {
    return crypto.randomUUID();
  }
}
class clazz_af2db558 {
  buffer = [];
  sessionId = "";
  bound = false;
  ensureInit() {
    if (!(this.bound || typeof window === "undefined")) {
      this.bound = true;
      this.sessionId = fn_67c4b2b3_2();
      window.setInterval(() => this.flush(), local_f06debfc_47);
      window.addEventListener("pagehide", () => this.flushBeacon());
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          this.flushBeacon();
        }
      });
    }
  }
  trackPhotoOpen(arg, arg_2, arg_3, arg_4) {
    if (!arg || !arg_2) {
      return;
    }
    this.ensureInit();
    const local = {
      t: local_16468f59.photo_open,
      v: arg,
      ai: arg_2,
    };
    if (arg_3 !== undefined) {
      local.mi = arg_3;
    }
    if (arg_4) {
      local.s = local_2c7e8deb[arg_4];
    }
    this.enqueue(local);
  }
  trackVideoProgress(arg, arg_2, arg_3, arg_4, arg_5) {
    if (
      !arg ||
      !arg_2 ||
      !Number.isFinite(arg_3) ||
      arg_3 <= 0 ||
      !Number.isFinite(arg_4) ||
      arg_4 <= 0
    ) {
      return;
    }
    this.ensureInit();
    const local = {
      t: local_16468f59.video_progress,
      v: arg,
      ai: arg_2,
      pm: Math.round(arg_3),
      dm: Math.round(arg_4),
    };
    if (arg_5) {
      local.s = local_2c7e8deb[arg_5];
    }
    this.enqueue(local);
  }
  enqueue(arg) {
    this.buffer.push(arg);
    if (this.buffer.length >= local_f06debfc_48) {
      this.flush();
    }
  }
  async maybeCompress(arg) {
    const local = {
      "Content-Type": "application/json",
    };
    if (typeof CompressionStream === "undefined" || arg.length < 512) {
      return {
        body: new TextEncoder().encode(arg),
        headers: local,
      };
    }
    try {
      const local = new Blob([arg])
        .stream()
        .pipeThrough(new CompressionStream("deflate"));
      const local_2 = await new Response(local).arrayBuffer();
      if (local_2.byteLength < arg.length) {
        return {
          body: local_2,
          headers: {
            ...local,
            "Content-Encoding": "deflate",
          },
        };
      }
    } catch {}
    return {
      body: new TextEncoder().encode(arg),
      headers: local,
    };
  }
  async flush() {
    if (this.buffer.length === 0) {
      return;
    }
    const local = this.buffer;
    this.buffer = [];
    const local_2 = JSON.stringify({
      sid: this.sessionId,
      e: local,
    });
    const { body: local_3, headers: local_4 } =
      await this.maybeCompress(local_2);
    local_1c641230
      .post(local_34f0cdfd.posts.interactionLog, local_3, {
        headers: local_4,
      })
      .catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const local = this.buffer;
    this.buffer = [];
    local_1c641230
      .post(
        local_34f0cdfd.posts.interactionLog,
        {
          sid: this.sessionId,
          e: local,
        },
        {
          keepalive: true,
        },
      )
      .catch(() => {});
  }
}
export const local_a1e12a9e_10 = new clazz_af2db558();
function fn_e578e8b1(arg, arg_2) {
  return symbol_069(
    (arg, arg_2) => {
      if (!arg || !arg) {
        return;
      }
      const local = arg_2 === "post_page" || arg_2 === "link";
      local_a1e12a9e_10.trackPhotoOpen(
        arg,
        arg,
        arg_2,
        local ? arg_2 : undefined,
      );
    },
    [arg, arg_2],
  );
}
const local_a71e0095 = "c_mediaWrapper";
const local_33accdab = "c_isFeed";
const local_dc707a91 = "c_single";
const local_1d2f8d3d_3 = "c_image";
const local_863a5210 = "c_singleVideo";
const local_65cb46b6 = "c_media";
const local_46549dc5 = "c_dragging";
const local_89a6df8b = {
  mediaWrapper: local_a71e0095,
  isFeed: local_33accdab,
  single: local_dc707a91,
  image: local_1d2f8d3d_3,
  singleVideo: local_863a5210,
  media: local_65cb46b6,
  dragging: local_46549dc5,
};
const local_b492dcb2 = symbol_078(() =>
  symbol_064(
    () => import("./routes/post-media-video.js"),
    local_5b673d6a([13, 14, 15]),
  ).then((arg) => ({
    default: arg.PostMediaVideo,
  })),
);
const local_f06debfc_49 = 5;
const local_f06debfc_50 = 0.95;
const local_f06debfc_51 = 0.5;
const local_f06debfc_52 = 650;
const local_f06debfc_53 = 500;
const local_f06debfc_54 = 300;
function fn_c467be0d(arg, arg_2, arg_3, arg_4) {
  const local = arg / arg_2;
  if (local > arg_3 / arg_4) {
    return Math.min(arg, arg_3);
  }
  return Math.min(arg_2, arg_4) * local;
}
function fn_e598d88e({
  media: arg,
  isFeed: arg_2 = false,
  postVs: arg_3,
  source: arg_4,
}) {
  const local = arg?.filter((arg) => arg.type === "image") ?? [];
  const local_2 = arg?.filter((arg) => arg.type === "video") ?? [];
  const local_3 = symbol_002(null);
  const local_4 = local_aac74809((arg) => arg.open);
  const local_5 = symbol_006() ? local_f06debfc_54 : local_f06debfc_53;
  const local_6 = fn_e578e8b1(arg_3, arg_4);
  const local_7 = symbol_002(false);
  const local_8 = symbol_002(0);
  const local_9 = symbol_002(0);
  const local_10 = symbol_002(false);
  const local_11 = symbol_002(0);
  const local_12 = symbol_002(0);
  const local_13 = symbol_002(0);
  const local_14 = symbol_002(null);
  const local_15 = () => {
    if (local_14.current) {
      cancelAnimationFrame(local_14.current);
      local_14.current = null;
    }
  };
  const local_16 = () => {
    const local = local_3.current;
    if (local) {
      local_13.current *= local_f06debfc_50;
      if (Math.abs(local_13.current) < local_f06debfc_51) {
        local_15();
        return;
      }
      local.scrollLeft += local_13.current;
      local_14.current = requestAnimationFrame(local_16);
    }
  };
  const local_17 = (arg) => {
    const local = local_3.current;
    if (!(!local || local.length + local_2.length <= 1)) {
      local_15();
      local_7.current = true;
      local.classList.add(local_89a6df8b.dragging);
      local_8.current = arg.clientX;
      local_11.current = arg.clientX;
      local_12.current = Date.now();
      local_9.current = local.scrollLeft;
      local_10.current = false;
      local_13.current = 0;
      arg.preventDefault();
    }
  };
  const local_18 = (arg) => {
    if (!local_7.current) {
      return;
    }
    const local = local_3.current;
    if (!local) {
      return;
    }
    const local_2 = Date.now();
    const local_3 = arg.clientX - local_8.current;
    const local_4 = arg.clientX - local_11.current;
    const local_5 = local_2 - local_12.current;
    if (Math.abs(local_3) > local_f06debfc_49) {
      local_10.current = true;
    }
    if (local_5 > 0) {
      local_13.current = (-local_4 / local_5) * 16;
    }
    local_11.current = arg.clientX;
    local_12.current = local_2;
    local.scrollLeft = local_9.current - local_3;
  };
  const local_19 = () => {
    if (local_7.current && Math.abs(local_13.current) > local_f06debfc_51) {
      local_16();
    }
    local_7.current = false;
    local_3.current?.classList.remove(local_89a6df8b.dragging);
  };
  const local_20 = () => {
    if (local_7.current) {
      if (Math.abs(local_13.current) > local_f06debfc_51) {
        local_16();
      }
      local_7.current = false;
      local_3.current?.classList.remove(local_89a6df8b.dragging);
    }
  };
  symbol_077(
    () => () => {
      local_15();
      local_3.current?.classList.remove(local_89a6df8b.dragging);
    },
    [],
  );
  const local_21 = (arg, arg_2) => {
    if (local_10.current) {
      local_10.current = false;
      arg_2.stopPropagation();
      return;
    }
    const local = local[arg];
    if (local) {
      local_6(local.id, arg);
    }
    const local_2 = arg_2.currentTarget ?? null;
    const local_3 = fn_326c4d77(local_2, local_3.current);
    const local_4 = (arg) => {
      const local = local_3.current;
      if (!local) {
        if (arg !== arg || !local_2?.isConnected) {
          return null;
        }
        return fn_326c4d77(local_2, null);
      }
      const local_2 = local.querySelectorAll("[data-post-media-image]")[arg];
      if (local_2) {
        return (
          local_2.scrollIntoView({
            behavior: "instant",
            inline: "center",
            block: "nearest",
          }),
          fn_326c4d77(local_2, local)
        );
      }
      return null;
    };
    local_4(
      local.map((arg) => ({
        id: arg.id,
        url: arg.url,
        width: arg.width || 800,
        height: arg.height || 600,
      })),
      arg,
      local_3,
      local_4,
    );
  };
  const local_22 = (arg) => {
    arg.stopPropagation();
    local_10.current = false;
  };
  if (local.length === 0 && local_2.length === 0) {
    return null;
  }
  const local_23 = local.length + local_2.length;
  if (local_23 === 1) {
    if (local.length === 1) {
      const local = local[0];
      const local_2 =
        local.width && local.height
          ? {
              width: `${Math.round(fn_c467be0d(local.width, local.height, local_f06debfc_52, local_5))}px`,
              aspectRatio: `${local.width} / ${local.height}`,
            }
          : undefined;
      return symbol_073("div", {
        className: `${local_89a6df8b.mediaWrapper} ${arg_2 ? local_89a6df8b.isFeed : ""}`,
        "data-count": 1,
        children: symbol_073("div", {
          className: local_89a6df8b.single,
          style: local_2,
          onClick: (arg) => {
            arg.stopPropagation();
            local_21(0, arg);
          },
          children: symbol_073(
            fn_cfe6dd12,
            {
              src: local.url,
              spoiler: local.spoiler,
              width: local.width,
              height: local.height,
              className: local_89a6df8b.image,
              onClick: (arg) => {
                arg.stopPropagation();
                local_21(0, arg);
              },
            },
            local.id,
          ),
        }),
      });
    }
    if (local_2.length === 1) {
      const local = local_2[0];
      return symbol_073("div", {
        className: `${local_89a6df8b.mediaWrapper} ${arg_2 ? local_89a6df8b.isFeed : ""}`,
        "data-count": 1,
        onClick: (arg) => arg.stopPropagation(),
        children: symbol_073("div", {
          className: local_89a6df8b.singleVideo,
          children: symbol_073(symbol_062, {
            fallback: null,
            children: symbol_073(
              local_b492dcb2,
              {
                src: local.url,
                spoiler: local.spoiler,
                width: local.width,
                height: local.height,
                duration: local.duration,
                postVs: arg_3,
                source: arg_4,
                attachmentId: local.id,
              },
              local.id,
            ),
          }),
        }),
      });
    }
  }
  return symbol_073("div", {
    className: `${local_89a6df8b.mediaWrapper} ${arg_2 ? local_89a6df8b.isFeed : ""}`,
    "data-count": local_23,
    children: symbol_073("div", {
      ref: local_3,
      className: `${local_89a6df8b.media} ${arg_2 ? local_89a6df8b.isFeed : ""}`,
      "data-count": local_23,
      onClick: local_22,
      onMouseDown: local_17,
      onMouseMove: local_18,
      onMouseUp: local_19,
      onMouseLeave: local_20,
      children: [
        local_2.map((arg) =>
          symbol_073(
            symbol_062,
            {
              fallback: null,
              children: symbol_073(local_b492dcb2, {
                src: arg.url,
                spoiler: arg.spoiler,
                width: arg.width,
                height: arg.height,
                duration: arg.duration,
                className: local_89a6df8b.image,
                postVs: arg_3,
                source: arg_4,
                attachmentId: arg.id,
              }),
            },
            arg.id,
          ),
        ),
        local.map((arg, arg_2) =>
          symbol_073(
            fn_cfe6dd12,
            {
              src: arg.url,
              spoiler: arg.spoiler,
              width: arg.width,
              height: arg.height,
              className: local_89a6df8b.image,
              onClick: (arg) => local_21(arg_2, arg),
            },
            arg.id,
          ),
        ),
      ],
    }),
  });
}
const local_f06debfc_55 = 0.5;
const local_f06debfc_56 = 250;
const local_f06debfc_57 = 1000;
const local_f06debfc_58 = 50;
const local_10344d9a = [0, local_f06debfc_55, 1];
const local_a1e12a9e_11 = new Set();
const local_a1e12a9e_12 = new WeakMap();
const local_a1e12a9e_13 = new Map();
const local_a1e12a9e_14 = new Map();
const local_a1e12a9e_15 = new Set();
const local_a1e12a9e_16 = new Set();
let local_0a9fda83_12 = null;
let local_0a9fda83_13 = null;
function fn_fb58d97c(arg) {
  if (local_a1e12a9e_15.size !== 0) {
    local_a1e12a9e_16.add(arg);
    if (local_0a9fda83_12 === null) {
      local_0a9fda83_12 = setTimeout(() => {
        local_0a9fda83_12 = null;
        if (local_a1e12a9e_16.size === 0) {
          return;
        }
        const local = Array.from(local_a1e12a9e_16);
        local_a1e12a9e_16.clear();
        const local_2 = local.length > 20 ? local.slice(0, 20) : local;
        for (const local of local_a1e12a9e_15) {
          local(local_2);
        }
      }, local_f06debfc_58);
    }
  }
}
function fn_7552a852() {
  return (
    local_0a9fda83_13 ||
    (typeof IntersectionObserver === "undefined"
      ? null
      : ((local_0a9fda83_13 = new IntersectionObserver(
          (arg) => {
            for (const local of arg) {
              const local = local_a1e12a9e_12.get(local.target);
              if (!local || local.length === 0) {
                continue;
              }
              const local_2 = local.intersectionRatio >= local_f06debfc_55;
              for (const local of local) {
                if (local_2) {
                  const local = local_a1e12a9e_14.get(local);
                  if (local !== undefined) {
                    clearTimeout(local);
                    local_a1e12a9e_14.delete(local);
                    continue;
                  }
                  if (
                    local_a1e12a9e_11.has(local) ||
                    local_a1e12a9e_13.has(local)
                  ) {
                    continue;
                  }
                  const local_2 = setTimeout(() => {
                    local_a1e12a9e_13.delete(local);
                    local_a1e12a9e_11.add(local);
                    fn_fb58d97c(local);
                  }, local_f06debfc_56);
                  local_a1e12a9e_13.set(local, local_2);
                } else {
                  const local = local_a1e12a9e_13.get(local);
                  if (local !== undefined) {
                    clearTimeout(local);
                    local_a1e12a9e_13.delete(local);
                  }
                  if (
                    !local_a1e12a9e_11.has(local) ||
                    local_a1e12a9e_14.has(local)
                  ) {
                    continue;
                  }
                  const local_2 = setTimeout(() => {
                    local_a1e12a9e_14.delete(local);
                    local_a1e12a9e_11.delete(local);
                  }, local_f06debfc_57);
                  local_a1e12a9e_14.set(local, local_2);
                }
              }
            }
          },
          {
            threshold: local_10344d9a,
          },
        )),
        local_0a9fda83_13))
  );
}
const local_89524df6 = {
  observe(arg, arg_2) {
    const local = fn_7552a852();
    if (!local) {
      return;
    }
    const local_2 = Array.isArray(arg_2) ? arg_2.filter(Boolean) : [arg_2];
    if (local_2.length !== 0) {
      local_a1e12a9e_12.set(arg, local_2);
      local.observe(arg);
    }
  },
  unobserve(arg) {
    if (!local_0a9fda83_13) {
      return;
    }
    const local = local_a1e12a9e_12.get(arg);
    local_0a9fda83_13.unobserve(arg);
    local_a1e12a9e_12.delete(arg);
    if (local) {
      for (const local of local) {
        const local = local_a1e12a9e_13.get(local);
        if (local !== undefined) {
          clearTimeout(local);
          local_a1e12a9e_13.delete(local);
        }
        const local_2 = local_a1e12a9e_14.get(local);
        if (local_2 !== undefined) {
          clearTimeout(local_2);
          local_a1e12a9e_14.delete(local);
        }
        local_a1e12a9e_11.delete(local);
      }
    }
  },
  getSnapshot() {
    return Array.from(local_a1e12a9e_11);
  },
  size() {
    return local_a1e12a9e_11.size;
  },
  onAppear(arg) {
    local_a1e12a9e_15.add(arg);
    return () => {
      local_a1e12a9e_15.delete(arg);
    };
  },
};
const local_ca66b2a4 = "c_hint";
const local_5b0e20a9 = "c_multiline";
const local_06d417e6 = "c_arrow";
const local_fd34eba8 = {
  hint: local_ca66b2a4,
  multiline: local_5b0e20a9,
  arrow: local_06d417e6,
};
function symbol_047({
  text: arg,
  children: arg_2,
  className: arg_3,
  multiline: arg_4,
}) {
  const local = symbol_002(null);
  const [local_2, local_3] = symbol_056(null);
  const local_4 = symbol_069(() => {
    if (!local.current) {
      return;
    }
    const local = local.current.getBoundingClientRect();
    local_3({
      x: local.left + local.width / 2,
      y: local.top,
    });
  }, []);
  const local_5 = symbol_069(() => {
    local_3(null);
  }, []);
  const local_6 = symbol_069(
    (arg) => {
      arg.stopPropagation();
      if (local_2) {
        local_5();
      } else {
        local_4();
      }
    },
    [local_2, local_4, local_5],
  );
  symbol_077(() => {
    if (!local_2) {
      return;
    }
    const local = (arg) => {
      if (local.current && !local.current.contains(arg.target)) {
        local_5();
      }
    };
    document.addEventListener("touchstart", local);
    document.addEventListener("mousedown", local);
    window.addEventListener("scroll", local_5, true);
    return () => {
      document.removeEventListener("touchstart", local);
      document.removeEventListener("mousedown", local);
      window.removeEventListener("scroll", local_5, true);
    };
  }, [local_2, local_5]);
  return symbol_073("span", {
    ref: local,
    className: arg_3,
    onMouseEnter: local_4,
    onMouseLeave: local_5,
    onClick: local_6,
    children: [
      arg_2,
      local_2 &&
        symbol_001(
          symbol_073("div", {
            className: `${local_fd34eba8.hint} ${arg_4 ? local_fd34eba8.multiline : ""}`,
            style: {
              left: `${local_2.x}px`,
              top: `${local_2.y}px`,
            },
            children: [
              arg,
              symbol_073("span", {
                className: local_fd34eba8.arrow,
              }),
            ],
          }),
          document.body,
        ),
    ],
  });
}
const local_f1c23efb_3 = "c_header";
const local_f6d1a982 = "c_headerMain";
const local_86f9be05 = "c_moreDropdown";
const local_b3685f31 = "c_pinnedBadge";
const local_25ccaeea = "c_authorInfo";
const local_2ff1f21a = "c_authorLink";
const local_15aa885a_2 = "c_time";
const local_852526af = "c_edited";
const local_f697b03b = {
  header: local_f1c23efb_3,
  headerMain: local_f6d1a982,
  moreDropdown: local_86f9be05,
  pinnedBadge: local_b3685f31,
  authorInfo: local_25ccaeea,
  authorLink: local_2ff1f21a,
  time: local_15aa885a_2,
  edited: local_852526af,
};
function fn_9f9edcc8({
  author: arg,
  createdAt: arg_2,
  editedAt: arg_3,
  postId: arg_4,
  showAvatar: arg_5 = true,
  isOnOwnProfile: arg_6 = false,
  isPinned: arg_7 = false,
  onReport: arg_8,
  onEdit: arg_9,
  onDelete: arg_10,
  onPin: arg_11,
  onCopyLink: arg_12,
}) {
  const local = fn_b5e97943(arg_2);
  const local_2 = symbol_075((arg) => arg.profile?.id);
  const local_3 = arg.id === local_2;
  const local_4 = 2880 * 60 * 1000;
  const local_5 = local_3 && Date.now() - new Date(arg_2).getTime() < local_4;
  const local_6 = symbol_021(() => {
    const local = [];
    local.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: symbol_073(local_3ea3ac5c, {
        size: 16,
      }),
      onClick: () => arg_12?.(arg_4),
    });
    if (local_5) {
      local.push({
        id: "edit",
        label: "Редактировать",
        icon: symbol_073(symbol_026, {
          size: 16,
        }),
        onClick: () => arg_9?.(arg_4),
      });
    }
    if (arg_6) {
      local.push({
        id: "pin",
        label: arg_7 ? "Открепить" : "Закрепить",
        icon: symbol_073(local_c88205fb, {
          size: 16,
        }),
        onClick: () => arg_11?.(arg_4),
      });
    }
    if (local_3 || arg_6) {
      local.push({
        id: "delete",
        label: "Удалить",
        icon: symbol_073(symbol_074, {
          size: 16,
        }),
        danger: true,
        onClick: () => arg_10?.(arg_4),
      });
    }
    if (!local_3) {
      local.push({
        id: "report",
        label: "Пожаловаться",
        icon: symbol_073(symbol_060, {
          size: 16,
        }),
        danger: true,
        onClick: () => arg_8?.(arg_4),
      });
    }
    return local;
  }, [
    local_3,
    local_5,
    arg_6,
    arg_7,
    arg_4,
    arg_9,
    arg_10,
    arg_11,
    arg_8,
    arg_12,
  ]);
  return symbol_073("header", {
    className: local_f697b03b.header,
    children: [
      arg_7 &&
        symbol_073("div", {
          className: local_f697b03b.pinnedBadge,
          children: [
            symbol_073(local_c88205fb, {
              size: 14,
            }),
            symbol_073("span", {
              children: "Закреплённый пост",
            }),
          ],
        }),
      symbol_073("div", {
        className: local_f697b03b.headerMain,
        children: [
          arg_5 &&
            symbol_073("a", {
              href: `/@${arg.username}`,
              children: symbol_073(symbol_058, {
                src: arg.avatar,
                alt: arg.displayName,
                size: "sm",
                online: arg.online,
              }),
            }),
          symbol_073("div", {
            className: local_f697b03b.authorInfo,
            children: [
              symbol_073("a", {
                href: `/@${arg.username}`,
                className: local_f697b03b.authorLink,
                children: symbol_073(symbol_022, {
                  name: arg.displayName,
                  verified: arg.isVerified,
                  hasNuksta: arg.hasNuksta,
                  pin: arg.pin,
                  size: "sm",
                }),
              }),
              symbol_073("time", {
                dateTime: arg_2,
                className: local_f697b03b.time,
                children: [
                  local,
                  arg_3 &&
                    symbol_073(symbol_047, {
                      text: new Date(arg_3).toLocaleString("ru-RU"),
                      children: symbol_073("span", {
                        className: local_f697b03b.edited,
                        children: " (ред.)",
                      }),
                    }),
                ],
              }),
            ],
          }),
          symbol_073(symbol_005, {
            trigger: symbol_073(symbol_010, {
              size: 18,
            }),
            items: local_6,
            position: "bottom-right",
            className: local_f697b03b.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
const local_8c4f8b4b_4 = "c_actions";
const local_dc607243 = "c_compact";
const local_406cc78f_2 = "c_action";
const local_1fac7f38 = "c_views";
const local_b73f1b7e = "c_flush";
const local_3b5a6263 = "c_actionsLeft";
const local_f58ba0b9 = "c_disabled";
const local_5ab563c6 = "c_liked";
const local_b07f8075 = "c_unliked";
const local_fb809364 = "c_reposted";
const local_a5fb6075 = "c_noAnimation";
const local_9bd7cd8f = "c_reactionWrapper";
const local_f966812d = "c_actionsRight";
const local_a1544812 = "c_captured";
const local_79018b94 = "c_capturedEmoji";
const local_00e02cfa = "c_capturedText";
const local_56ca4669 = "c_capturedMobile";
const local_dece2290 = "c_capturedSolo";
const local_d04ad379 = {
  actions: local_8c4f8b4b_4,
  compact: local_dc607243,
  action: local_406cc78f_2,
  views: local_1fac7f38,
  flush: local_b73f1b7e,
  actionsLeft: local_3b5a6263,
  disabled: local_f58ba0b9,
  liked: local_5ab563c6,
  unliked: local_b07f8075,
  reposted: local_fb809364,
  noAnimation: local_a5fb6075,
  reactionWrapper: local_9bd7cd8f,
  actionsRight: local_f966812d,
  captured: local_a1544812,
  capturedEmoji: local_79018b94,
  capturedText: local_00e02cfa,
  capturedMobile: local_56ca4669,
  capturedSolo: local_dece2290,
};
function fn_6403e5bb({
  liked: arg,
  reposted: arg_2,
  likesCount: arg_3,
  repostsCount: arg_4,
  commentsCount: arg_5,
  viewsCount: arg_6,
  dominantEmoji: arg_7,
  onLike: arg_8,
  onRepost: arg_9,
  onComment: arg_10,
  disableRepost: arg_11 = false,
  compact: arg_12 = false,
  emojiOnly: arg_13 = false,
  flush: arg_14 = false,
  infiniteLike: arg_15 = false,
}) {
  const local = symbol_002(false);
  const local_2 = arg_12 ? 17 : 20;
  return symbol_073("footer", {
    className: `${local_d04ad379.actions} ${arg_12 ? local_d04ad379.compact : ""} ${arg_14 ? local_d04ad379.flush : ""}`,
    children: [
      symbol_073("div", {
        className: local_d04ad379.actionsLeft,
        children: [
          symbol_073("div", {
            className: local_d04ad379.reactionWrapper,
            onClick: (arg) => arg.stopPropagation(),
            children: symbol_073("button", {
              className: `${local_d04ad379.action} ${arg ? local_d04ad379.liked : ""} ${local.current && !arg ? local_d04ad379.unliked : ""} ${!local.current && arg ? local_d04ad379.noAnimation : ""}`,
              onClick: (arg) => {
                arg.stopPropagation();
                local.current = true;
                arg_8();
              },
              "aria-label": "Нравится",
              children: [
                symbol_073(
                  symbol_030,
                  {
                    filled: arg,
                    size: local_2,
                  },
                  arg_15 ? `liked-${arg_3}` : arg ? "liked" : "not-liked",
                ),
                symbol_073(fn_2d0b32d3, {
                  value: arg_3,
                }),
              ],
            }),
          }),
          symbol_073("button", {
            className: local_d04ad379.action,
            onClick: (arg) => {
              arg.stopPropagation();
              arg_10();
            },
            "aria-label": "Комментировать",
            children: [
              symbol_073(symbol_027, {
                size: local_2,
              }),
              symbol_073(fn_2d0b32d3, {
                value: arg_5,
              }),
            ],
          }),
          symbol_073("button", {
            className: `${local_d04ad379.action} ${arg_2 ? local_d04ad379.reposted : ""} ${arg_11 ? local_d04ad379.disabled : ""}`,
            onClick: (arg) => {
              arg.stopPropagation();
              if (!arg_11) {
                arg_9();
              }
            },
            disabled: arg_11,
            "aria-label": "Репост",
            children: [
              symbol_073(symbol_031, {
                size: local_2,
              }),
              symbol_073(fn_2d0b32d3, {
                value: arg_4,
              }),
            ],
          }),
        ],
      }),
      symbol_073("div", {
        className: local_d04ad379.actionsRight,
        children: [
          arg_7 &&
            (arg_13
              ? symbol_073(symbol_047, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: local_d04ad379.capturedSolo,
                  children: symbol_073("span", {
                    className: local_d04ad379.capturedEmoji,
                    children: arg_7,
                  }),
                })
              : symbol_073(symbol_063, {
                  children: [
                    symbol_073(symbol_047, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: local_d04ad379.captured,
                      children: [
                        symbol_073("span", {
                          className: local_d04ad379.capturedEmoji,
                          children: arg_7,
                        }),
                        symbol_073("span", {
                          className: local_d04ad379.capturedText,
                          children: "Пост захвачен",
                        }),
                      ],
                    }),
                    symbol_073(symbol_047, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: local_d04ad379.capturedMobile,
                      children: symbol_073("span", {
                        children: arg_7,
                      }),
                    }),
                  ],
                })),
          symbol_073("span", {
            className: local_d04ad379.views,
            children: [
              symbol_073(local_98bb194d, {
                size: local_2,
              }),
              symbol_073(fn_2d0b32d3, {
                value: arg_6,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const local_b84ad31b = symbol_078(() =>
  symbol_064(
    () => import("./routes/report-modal.js"),
    local_5b673d6a([16, 17, 18]),
  ).then((arg) => ({
    default: arg.ReportModal,
  })),
);
function fn_f770ea94(arg, arg_2) {
  const { openModal: local, closeModal: local_2, onDelete: local_3 } = arg_2;
  const local_4 = symbol_006();
  const local_5 = symbol_054((arg) => arg.deletePost);
  const local_6 = symbol_054((arg) => arg.updatePostLike);
  const local_7 = symbol_054((arg) => arg.beginLikeMutation);
  const local_8 = symbol_054((arg) => arg.endLikeMutation);
  const local_9 = symbol_054((arg) => arg.updatePollVote);
  const local_10 = symbol_054((arg) => arg.updatePollData);
  const local_11 = fn_61d7292b(arg);
  const local_12 = local_11.myReaction !== null;
  const local_13 = local_11.likesTotal;
  const local_14 = symbol_021(
    () => fn_65dff5a1(arg.attachments),
    [arg.attachments],
  );
  const local_15 = symbol_069(async () => {
    const local = local_12;
    const local_2 = local ? -1 : 1;
    local_6(arg.id, local ? null : "love", local_2);
    local_7(arg.id);
    try {
      const local = local
        ? await symbol_068.unlikePost(arg.id)
        : await symbol_068.likePost(arg.id);
      local_8(arg.id, local?.likesCount);
    } catch (error) {
      local_6(arg.id, local ? "love" : null, -local_2);
      local_8(arg.id);
      console.error("Failed to toggle like:", error);
    }
  }, [arg.id, local_12, local_6, local_7, local_8]);
  const local_16 = symbol_069(() => {
    if (!local_12) {
      local_15();
    }
  }, [local_12, local_15]);
  const local_17 = symbol_069(
    (arg) => {
      const local = arg.author.username ?? arg.author.id;
      const local_2 = `${window.location.origin}/@${local}/post/${arg}`;
      navigator.clipboard.writeText(local_2);
      symbol_072.success("Ссылка скопирована");
    },
    [arg.author.username, arg.author.id],
  );
  const local_18 = symbol_069(
    (arg) => {
      local(
        symbol_073(local_b84ad31b, {
          targetType: "post",
          targetId: arg,
          onClose: local_2,
        }),
      );
    },
    [local, local_2],
  );
  const local_19 = symbol_069(
    (arg) => {
      local(
        symbol_073(fn_e1d37297, {
          postId: arg.id,
          initialText: arg.text ?? "",
          initialSpans: arg.spans ?? [],
        }),
      );
    },
    [local, arg.id, arg.text, arg.spans],
  );
  const local_20 = symbol_069(
    async (arg) => {
      if (confirm("Вы уверены, что хотите удалить этот пост?")) {
        try {
          await local_5(arg);
          local_3?.(arg);
        } catch (error) {
          console.error("Failed to delete post:", error);
        }
      }
    },
    [local_5, local_3],
  );
  const local_21 = symbol_069(() => {
    if (local_4) {
      local(
        symbol_073(fn_4e3ee8c9, {
          postId: arg.id,
          onClose: local_2,
        }),
      );
    } else {
      const local = arg.author.username ?? arg.author.id;
      symbol_057(`/@${local}/post/${arg.id}`);
    }
  }, [arg.author.username, arg.author.id, arg.id, local_4, local, local_2]);
  const local_22 = symbol_069(() => {
    local(
      symbol_073(fn_14b687be, {
        post: arg,
        onClose: local_2,
      }),
    );
  }, [local, local_2, arg]);
  const local_23 = symbol_069(
    async (arg) => {
      const local = local_14?.myVote ?? null;
      local_9(arg.id, arg, local);
      try {
        const local = await symbol_068.votePoll(arg.id, [arg]);
        if (local) {
          local_10(arg.id, local);
          return local;
        }
      } catch (error) {
        console.error("[Poll] Failed to vote:", error);
        if (local) {
          local_9(arg.id, local, arg);
        }
      }
      return null;
    },
    [arg.id, local_14?.myVote, local_9, local_10],
  );
  const local_24 = symbol_069(
    async (arg) => {
      try {
        const local = await symbol_068.votePoll(arg.id, arg);
        if (local) {
          local_10(arg.id, local);
          return local;
        }
      } catch (error) {
        console.error("[Poll] Failed to vote multiple:", error);
      }
      return null;
    },
    [arg.id, local_10],
  );
  return {
    liked: local_12,
    totalLikes: local_13,
    handleLike: local_15,
    handleDoubleTap: local_16,
    handleComment: local_21,
    handleRepost: local_22,
    handleReport: local_18,
    handleEdit: local_19,
    handleDelete: local_20,
    handleCopyLink: local_17,
    handlePollVote: local_23,
    handlePollVoteMultiple: local_24,
  };
}
function fn_6ad6c437(arg) {
  const local = symbol_069(() => {
    symbol_054.getState().updatePostLike(arg, "love", 1);
  }, [arg]);
  const local_2 = symbol_069(() => {
    const { postStatsCache: local, applyStatsUpdates: local_2 } =
      symbol_054.getState();
    const local_3 = local[arg];
    if (local_3) {
      local_2([
        {
          id: arg,
          likesCount: local_3.likesTotal,
          commentsCount: local_3.commentsCount + 1,
          repostsCount: local_3.repostsCount,
          viewsCount: local_3.viewsCount,
          dominantEmoji: local_3.dominantEmoji,
        },
      ]);
    }
  }, [arg]);
  const local_3 = symbol_069(() => {
    symbol_054.getState().updatePostReposted(arg, true, 1);
  }, [arg]);
  return {
    handleLike: local,
    handleComment: local_2,
    handleRepost: local_3,
  };
}
const local_8f7de938 = "c_post";
const local_dc1e35e9 = "c_postInner";
const local_33accdab_2 = "c_isFeed";
const local_ad66ff17 = "c_avatarLink";
const local_34f14abd = "c_postContent";
const local_e7621ec7 = "c_postBody";
const local_551e0319 = "c_textWrapper";
const local_95ed4c70_3 = "c_text";
const local_56815455 = "c_collapsed";
const local_b60b3485 = "c_expandButton";
const local_f8238cd0 = "c_originalPost";
const local_66c99ac3 = "c_originalPostHeader";
const local_a140ac9d = "c_originalPostTime";
const local_9134ac3d = "c_originalPostText";
const local_ee986de2 = "c_originalPostMedia";
const local_b6f17743 = {
  post: local_8f7de938,
  postInner: local_dc1e35e9,
  isFeed: local_33accdab_2,
  avatarLink: local_ad66ff17,
  postContent: local_34f14abd,
  postBody: local_e7621ec7,
  textWrapper: local_551e0319,
  text: local_95ed4c70_3,
  collapsed: local_56815455,
  expandButton: local_b60b3485,
  originalPost: local_f8238cd0,
  originalPostHeader: local_66c99ac3,
  originalPostTime: local_a140ac9d,
  originalPostText: local_9134ac3d,
  originalPostMedia: local_ee986de2,
};
function fn_8998240c(arg) {
  if (!arg) {
    return "";
  }
  const local = new Date(arg);
  if (isNaN(local.getTime())) {
    return "";
  }
  return local.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "short",
  });
}
function fn_5ef7518c({ attachments: arg, postVs: arg_2, source: arg_3 }) {
  const local = symbol_021(() => fn_9f548ab4(arg), [arg]);
  if (local.length === 0) {
    return null;
  }
  return symbol_073("div", {
    className: local_b6f17743.originalPostMedia,
    children: symbol_073(fn_e598d88e, {
      media: local,
      postVs: arg_2,
      source: arg_3,
    }),
  });
}
function fn_6d5d7444({
  originalPost: arg,
  source: arg_2,
  showcase: arg_3 = false,
}) {
  const local = fn_8998240c(arg.createdAt);
  const { openModal: local_2, closeModal: local_3 } = symbol_066();
  const {
    liked: local_4,
    totalLikes: local_5,
    handleLike: local_6,
    handleComment: local_7,
    handleRepost: local_8,
  } = fn_f770ea94(arg, {
    openModal: local_2,
    closeModal: local_3,
  });
  const {
    handleLike: local_9,
    handleComment: local_10,
    handleRepost: local_11,
  } = fn_6ad6c437(arg.id);
  const local_12 = fn_61d7292b(arg);
  const local_13 = symbol_069(
    (arg) => {
      arg.stopPropagation();
      if (arg_3) {
        return;
      }
      const local = arg.author.username ?? arg.author.id;
      symbol_057(`/@${local}/post/${arg.id}`);
    },
    [arg.author.username, arg.author.id, arg.id, arg_3],
  );
  return symbol_073("div", {
    className: local_b6f17743.originalPost,
    onClick: local_13,
    children: [
      symbol_073("div", {
        className: local_b6f17743.originalPostHeader,
        children: [
          symbol_073(symbol_031, {
            size: 14,
          }),
          symbol_073(symbol_058, {
            src: arg.author.avatar ?? "",
            alt: arg.author.displayName,
            size: "xs",
          }),
          symbol_073(symbol_022, {
            name: arg.author.displayName,
            verified: arg.author.isVerified,
            hasNuksta: arg.author.hasNuksta,
            pin: arg.author.pin,
            size: "xs",
          }),
          symbol_073("span", {
            className: local_b6f17743.originalPostTime,
            children: local,
          }),
        ],
      }),
      arg.text &&
        symbol_073("div", {
          className: local_b6f17743.originalPostText,
          children: arg.text,
        }),
      arg.attachments &&
        arg.attachments.length > 0 &&
        symbol_073(fn_5ef7518c, {
          attachments: arg.attachments,
          postVs: arg.vs,
          source: arg_2,
        }),
      symbol_073(fn_6403e5bb, {
        liked: local_4,
        reposted: local_12.reposted,
        likesCount: local_5,
        repostsCount: local_12.repostsCount,
        commentsCount: local_12.commentsCount,
        viewsCount: local_12.viewsCount,
        dominantEmoji: local_12.dominantEmoji,
        onLike: arg_3 ? local_9 : local_6,
        onRepost: arg_3 ? local_11 : local_8,
        onComment: arg_3 ? local_10 : local_7,
        compact: true,
        emojiOnly: arg_3,
        infiniteLike: arg_3,
      }),
    ],
  });
}
const local_0da67384 = symbol_078(() =>
  symbol_064(() => import("./routes/poll.js"), local_5b673d6a([19, 20])).then(
    (arg) => ({
      default: arg.Poll,
    }),
  ),
);
function fn_196235f1(arg) {
  return {
    id: arg.id,
    username: arg.username ?? "",
    displayName: arg.displayName,
    avatar: arg.avatar ?? "",
    isVerified: arg.isVerified,
    hasNuksta: arg.hasNuksta ?? false,
    pin: arg.pin ?? null,
  };
}
function fn_9f548ab4(arg) {
  return arg
    .filter(
      (arg) =>
        arg.type === "image" ||
        arg.type === "video" ||
        (arg.type === "media" && "media" in arg),
    )
    .map((arg) => {
      if (arg.type === "media" && "media" in arg) {
        return arg.media;
      }
      return arg;
    });
}
function fn_65dff5a1(arg) {
  return arg.find((arg) => arg.type === "poll");
}
const local_f06debfc_59 = 300;
const local_f06debfc_60 = 500;
const symbol_055 = symbol_052(
  function ({
    post: arg,
    variant: arg_2 = "feed",
    className: arg_3,
    isOnOwnProfile: arg_4 = false,
    isPinned: arg_5 = false,
    isHighlighted: arg_6 = false,
    source: arg_7,
    sourceContext: arg_8 = "",
    showcase: arg_9 = false,
    onEdit: arg_10,
    onPin: arg_11,
    onDelete: arg_12,
  }) {
    const local = arg_2 === "feed";
    const local_2 = symbol_006();
    const { openModal: local_3, closeModal: local_4 } = symbol_066();
    const local_5 = symbol_054((arg) => arg.setCurrentPost);
    const local_6 = symbol_054((arg) => arg.seedPostStats);
    const local_7 = symbol_054((arg) =>
      arg.posts.find((arg) => arg.id === arg.id),
    );
    const local_8 = symbol_075((arg) => arg.profile);
    symbol_077(() => {
      local_6(arg);
    }, [arg, local_6]);
    const local_9 = fn_61d7292b(arg);
    const {
      isFollowing: local_10,
      follow: local_11,
      unfollow: local_12,
    } = symbol_032(arg.author.id);
    const local_13 =
      local && local_8?.id !== arg.author.id ? local_10 : undefined;
    const {
      liked: local_14,
      totalLikes: local_15,
      handleLike: local_16,
      handleDoubleTap: local_17,
      handleComment: local_18,
      handleRepost: local_19,
      handleReport: local_20,
      handleEdit: local_21,
      handleDelete: local_22,
      handleCopyLink: local_23,
      handlePollVote: local_24,
      handlePollVoteMultiple: local_25,
    } = fn_f770ea94(arg, {
      openModal: local_3,
      closeModal: local_4,
      onDelete: arg_12,
    });
    const {
      handleLike: local_26,
      handleComment: local_27,
      handleRepost: local_28,
    } = fn_6ad6c437(arg.id);
    const local_29 = symbol_069(() => {
      local_13 !== undefined &&
        (local_13
          ? local_3(
              symbol_073(symbol_008, {
                displayName: arg.author.displayName,
                onConfirm: local_12,
                onClose: local_4,
              }),
            )
          : local_11());
    }, [
      local_13,
      arg.author.displayName,
      local_11,
      local_12,
      local_3,
      local_4,
    ]);
    const local_30 = symbol_002(null);
    const local_31 = symbol_002(null);
    const local_32 = symbol_002(null);
    const [local_33, local_34] = symbol_056(local_f06debfc_59);
    const [local_35, local_36] = symbol_056(0);
    const local_37 = local_35 > local_33;
    symbol_077(
      () => () => {
        if (local_32.current) {
          cancelAnimationFrame(local_32.current);
          local_32.current = null;
        }
      },
      [],
    );
    const local_38 = symbol_069(
      (arg) => {
        if (arg && local) {
          if (local_32.current) {
            cancelAnimationFrame(local_32.current);
          }
          local_32.current = requestAnimationFrame(() => {
            local_32.current = null;
            local_36(arg.scrollHeight);
          });
        }
        if (local_31) {
          local_31.current = arg;
        }
      },
      [local],
    );
    const local_39 = symbol_069((arg) => {
      arg.stopPropagation();
      local_34((arg) => arg + local_f06debfc_60);
    }, []);
    fn_2df383fe(arg.id, local_30, arg_7, arg_8, arg.vs);
    const local_40 = arg.originalPost?.id;
    symbol_077(() => {
      const local = local_30.current;
      if (!local) {
        return;
      }
      const local_2 = local_40 ? [arg.id, local_40] : arg.id;
      local_89524df6.observe(local, local_2);
      return () => local_89524df6.unobserve(local);
    }, [arg.id, local_40]);
    const local_41 = symbol_002(null);
    const local_42 = symbol_002(0);
    const local_43 = symbol_069((arg) => {
      local_41.current = arg.target;
    }, []);
    const local_44 = symbol_069(() => {
      local_5(local_7 ?? arg);
      const local = arg.author.username ?? arg.author.id;
      symbol_057(`/@${local}/post/${arg.id}`);
    }, [arg, local_7, local_5]);
    const local_45 = symbol_069(
      (arg) => {
        const local = arg.target;
        if (
          local.closest("button") ||
          local.closest("a") ||
          local.closest("video") ||
          local.closest("img")
        ) {
          return;
        }
        if (local_2) {
          const local = Date.now();
          if (local - local_42.current < 300) {
            local_42.current = 0;
            local_17();
            return;
          }
          local_42.current = local;
          return;
        }
        if (local_41.current !== local) {
          local_41.current = null;
          return;
        }
        local_41.current = null;
        const local_2 = window.getSelection();
        if (!(local_2 && local_2.toString().length > 0)) {
          local_44();
        }
      },
      [local_2, local_17, local_44],
    );
    const local_46 = symbol_021(() => fn_196235f1(arg.author), [arg.author]);
    const local_47 = symbol_021(
      () => fn_9f548ab4(arg.attachments),
      [arg.attachments],
    );
    const local_48 = symbol_021(
      () => fn_65dff5a1(arg.attachments),
      [arg.attachments],
    );
    const local_49 = symbol_073("div", {
      className: `${local_b6f17743.postInner} ${local ? local_b6f17743.isFeed : ""} ${arg_3 || ""}`,
      children: [
        local &&
          symbol_073("a", {
            href: `/@${arg.author.username ?? arg.author.id}`,
            className: local_b6f17743.avatarLink,
            children: symbol_073(symbol_058, {
              src: arg.author.avatar ?? "",
              alt: arg.author.displayName,
              size: "sm",
              followBadge: local_13,
              onFollowBadgeClick: local_29,
            }),
          }),
        symbol_073("div", {
          className: local_b6f17743.postContent,
          children: [
            symbol_073(fn_9f9edcc8, {
              author: local_46,
              createdAt: arg.createdAt,
              editedAt: arg.editedAt,
              postId: arg.id,
              showAvatar: !local,
              isOnOwnProfile: arg_4,
              isPinned: arg_5,
              onReport: local_20,
              onEdit: arg_10 ?? local_21,
              onDelete: local_22,
              onPin: arg_11,
              onCopyLink: local_23,
            }),
            symbol_073("div", {
              className: local_b6f17743.postBody,
              children: [
                arg.text &&
                  symbol_073("div", {
                    className: local_b6f17743.textWrapper,
                    children: [
                      symbol_073("div", {
                        ref: local_38,
                        className: `${local_b6f17743.text} ${local_37 ? local_b6f17743.collapsed : ""}`,
                        style:
                          local && local_37
                            ? {
                                maxHeight: `${local_33}px`,
                              }
                            : undefined,
                        children: symbol_073(fn_a782b940, {
                          text: arg.text,
                          spans: arg.spans ?? [],
                        }),
                      }),
                      local &&
                        local_37 &&
                        symbol_073("button", {
                          type: "button",
                          className: local_b6f17743.expandButton,
                          onClick: local_39,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                local_47.length > 0 &&
                  symbol_073(fn_e598d88e, {
                    media: local_47,
                    isFeed: local,
                    postVs: arg.vs,
                    source: arg_7,
                  }),
                local_48 &&
                  symbol_073(symbol_062, {
                    fallback: null,
                    children: symbol_073(local_0da67384, {
                      title: local_48.question,
                      options: local_48.options.map((arg) => ({
                        id: arg.id,
                        text: arg.text,
                        votes: arg.votes ?? 0,
                      })),
                      totalVotes: local_48.totalVotes ?? 0,
                      voted:
                        (local_48.myVotes ?? []).length > 0 ||
                        (local_48.myVote !== undefined &&
                          local_48.myVote !== null),
                      selectedOptionId: local_48.myVote,
                      selectedOptionIds: local_48.myVotes ?? [],
                      multipleChoice: local_48.multipleChoice ?? false,
                      onVote: local_24,
                      onVoteMultiple: local_25,
                      disabled: local_48.id.startsWith("temp-"),
                    }),
                  }),
                arg.originalPost &&
                  symbol_073(fn_6d5d7444, {
                    originalPost: arg.originalPost,
                    source: arg_7,
                    showcase: arg_9,
                  }),
                symbol_073(fn_6403e5bb, {
                  compact: arg_9,
                  emojiOnly: arg_9,
                  flush: arg_9,
                  infiniteLike: arg_9,
                  liked: local_14,
                  reposted: local_9.reposted,
                  likesCount: local_15,
                  repostsCount: local_9.repostsCount,
                  commentsCount: local_9.commentsCount,
                  viewsCount: local_9.viewsCount,
                  dominantEmoji: local_9.dominantEmoji,
                  onLike: arg_9 ? local_26 : local_16,
                  onRepost: arg_9 ? local_28 : local_19,
                  onComment: arg_9 ? local_27 : local_18,
                }),
              ],
            }),
          ],
        }),
      ],
    });
    if (local) {
      return symbol_073("article", {
        ref: local_30,
        className: `${local_b6f17743.post} ${arg_6 ? "flash-highlight" : ""}`,
        onMouseDown: local_43,
        onClick: local_45,
        children: local_49,
      });
    }
    return symbol_073("div", {
      ref: local_30,
      children: local_49,
    });
  },
  (arg, arg_2) =>
    arg.post.id === arg_2.post.id &&
    arg.post.text === arg_2.post.text &&
    arg.post.spans === arg_2.post.spans &&
    arg.post.editedAt === arg_2.post.editedAt &&
    arg.post.attachments === arg_2.post.attachments &&
    arg.post.originalPost === arg_2.post.originalPost &&
    arg.variant === arg_2.variant &&
    arg.isOnOwnProfile === arg_2.isOnOwnProfile &&
    arg.isPinned === arg_2.isPinned &&
    arg.isHighlighted === arg_2.isHighlighted &&
    arg.source === arg_2.source &&
    arg.showcase === arg_2.showcase &&
    arg.sourceContext === arg_2.sourceContext,
);
const local_3efedb04 = "c_commentWrapper";
const local_e82cf97b = "c_threadItem";
const local_400b701e = "c_avatarWrapper";
const local_b8bfdc0c = "c_threadLine";
const local_c3d5effb = "c_commentBody";
const local_84f026e2 = "c_showMoreBtn";
const local_ed5e7285 = "c_avatarPlaceholder";
const local_90492d76_2 = "c_comment";
const local_ab76902d = "c_small";
const local_1cb32b2d = "c_commentTime";
const local_982611fe = "c_commentText";
const local_a4e85027 = "c_commentActions";
const local_88e5cc14 = "c_commentContent";
const local_ad66ff17_2 = "c_avatarLink";
const local_2ff1f21a_2 = "c_authorLink";
const local_10769907 = "c_commentHeader";
const local_e029f614 = "c_moreButton";
const local_80848f26 = "c_commentHeaderLeft";
const local_b41fab85 = "c_replyMention";
const local_035cae0f = "c_commentMedia";
const local_9bd7cd8f_2 = "c_reactionWrapper";
const local_ce99aa82 = "c_commentAction";
const local_5ab563c6_2 = "c_liked";
const local_4da1f290 = "c_replyButton";
const local_af046160 = {
  commentWrapper: local_3efedb04,
  threadItem: local_e82cf97b,
  avatarWrapper: local_400b701e,
  threadLine: local_b8bfdc0c,
  commentBody: local_c3d5effb,
  showMoreBtn: local_84f026e2,
  avatarPlaceholder: local_ed5e7285,
  comment: local_90492d76_2,
  small: local_ab76902d,
  commentTime: local_1cb32b2d,
  commentText: local_982611fe,
  commentActions: local_a4e85027,
  commentContent: local_88e5cc14,
  avatarLink: local_ad66ff17_2,
  authorLink: local_2ff1f21a_2,
  commentHeader: local_10769907,
  moreButton: local_e029f614,
  commentHeaderLeft: local_80848f26,
  replyMention: local_b41fab85,
  commentMedia: local_035cae0f,
  reactionWrapper: local_9bd7cd8f_2,
  commentAction: local_ce99aa82,
  liked: local_5ab563c6_2,
  replyButton: local_4da1f290,
};
const local_22c6c85e = symbol_078(() =>
  symbol_064(
    () => import("./routes/voice-message.js"),
    local_5b673d6a([21, 11, 22]),
  ).then((arg) => ({
    default: arg.VoiceMessage,
  })),
);
const local_4d88b603 = symbol_052(function ({
  author: arg,
  commentId: arg_2,
  text: arg_3,
  spans: arg_4 = [],
  attachments: arg_5 = [],
  createdAt: arg_6,
  reactionsCount: arg_7,
  isReacted: arg_8,
  size: arg_9 = "sm",
  onLike: arg_10,
  onReply: arg_11,
  onReport: arg_12,
  onEdit: arg_13,
  onDelete: arg_14,
  replyTo: arg_15,
  hideAvatar: arg_16 = false,
  isWallOwner: arg_17 = false,
}) {
  const local = fn_b5e97943(arg_6);
  const local_2 = symbol_075((arg) => arg.profile?.id);
  const local_3 = arg.id === local_2;
  const local_4 = local_3 || arg_17;
  const local_5 = arg_9 === "xs";
  const local_6 = symbol_021(() => {
    const local = [];
    if (local_3 && arg_13) {
      local.push({
        id: "edit",
        label: "Редактировать",
        icon: symbol_073(symbol_026, {
          size: 16,
        }),
        onClick: () => arg_13(arg_2),
      });
    }
    if (local_4 && arg_14) {
      local.push({
        id: "delete",
        label: "Удалить",
        icon: symbol_073(symbol_074, {
          size: 16,
        }),
        danger: true,
        onClick: () => arg_14(arg_2),
      });
    }
    if (!local_3) {
      local.push({
        id: "report",
        label: "Пожаловаться",
        icon: symbol_073(symbol_060, {
          size: 16,
        }),
        danger: true,
        onClick: () => arg_12(arg_2),
      });
    }
    return local;
  }, [local_3, local_4, arg_2, arg_13, arg_14, arg_12]);
  const local_7 = `/@${arg.username ?? arg.id}`;
  return symbol_073("div", {
    className: `${local_af046160.comment} ${local_5 ? local_af046160.small : ""}`,
    children: [
      !arg_16 &&
        symbol_073("a", {
          href: local_7,
          className: local_af046160.avatarLink,
          children: symbol_073(symbol_058, {
            src: arg.avatar,
            alt: arg.displayName,
            size: arg_9,
          }),
        }),
      symbol_073("div", {
        className: local_af046160.commentContent,
        children: [
          symbol_073("div", {
            className: local_af046160.commentHeader,
            children: [
              symbol_073("div", {
                className: local_af046160.commentHeaderLeft,
                children: [
                  symbol_073("a", {
                    href: local_7,
                    className: local_af046160.authorLink,
                    children: symbol_073(symbol_022, {
                      name: arg.displayName,
                      verified: arg.isVerified,
                      hasNuksta: arg.hasNuksta,
                      pin: arg.pin,
                      size: arg_9,
                    }),
                  }),
                  symbol_073("span", {
                    className: local_af046160.commentTime,
                    children: local,
                  }),
                ],
              }),
              symbol_073(symbol_005, {
                trigger: symbol_073(symbol_010, {
                  size: local_5 ? 14 : 16,
                }),
                items: local_6,
                position: "bottom-right",
                className: local_af046160.moreButton,
              }),
            ],
          }),
          (arg_15 || arg_3) &&
            symbol_073("div", {
              className: local_af046160.commentText,
              children: [
                arg_15 &&
                  symbol_073(symbol_063, {
                    children: [
                      symbol_073("a", {
                        href: `/@${arg_15.username}`,
                        className: local_af046160.replyMention,
                        children: ["@", arg_15.displayName],
                      }),
                      ", ",
                    ],
                  }),
                arg_3 &&
                  symbol_073(fn_a782b940, {
                    text: arg_3,
                    spans: arg_4,
                  }),
              ],
            }),
          fn_9f548ab4(arg_5).length > 0 &&
            symbol_073("div", {
              className: local_af046160.commentMedia,
              children: symbol_073(fn_e598d88e, {
                media: fn_9f548ab4(arg_5),
              }),
            }),
          arg_5
            .filter((arg) => arg.type === "audio")
            .map((arg) =>
              symbol_073(
                symbol_062,
                {
                  fallback: null,
                  children: symbol_073(local_22c6c85e, {
                    src: arg.url,
                    duration: arg.duration,
                  }),
                },
                arg.id,
              ),
            ),
          symbol_073("div", {
            className: local_af046160.commentActions,
            children: [
              symbol_073("button", {
                className: local_af046160.replyButton,
                onClick: arg_11,
                children: "Ответить",
              }),
              symbol_073("div", {
                className: local_af046160.reactionWrapper,
                children: symbol_073("button", {
                  className: `${local_af046160.commentAction} ${arg_8 ? local_af046160.liked : ""}`,
                  onClick: () => arg_10(),
                  children: [
                    symbol_073(symbol_030, {
                      size: 14,
                      filled: arg_8,
                    }),
                    symbol_073(fn_2d0b32d3, {
                      value: arg_7,
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});
const local_3b5973e6 = symbol_052(function ({
  comment: arg,
  onLike: arg_2,
  onLikeReply: arg_3,
  replyingTo: arg_4,
  onStartReply: arg_5,
  onCancelReply: arg_6,
  onSubmitReply: arg_7,
  onVoiceSend: arg_8,
  onLoadReplies: arg_9,
  onReport: arg_10,
  onEdit: arg_11,
  onDelete: arg_12,
  isLoadingReplies: arg_13 = false,
  flashingCommentId: arg_14,
  isWallOwner: arg_15 = false,
}) {
  const local = arg_4?.commentId === arg.id;
  const local_2 = {
    id: arg.author.id,
    username: arg.author.username,
    avatar: arg.author.avatar ?? "",
    displayName: arg.author.displayName,
    isVerified: arg.author.isVerified,
    pin: arg.author.pin,
  };
  const local_3 = arg.previewReplies ?? [];
  const local_4 = arg_14 === arg.id;
  const local_5 = arg.stats.replies > local_3.length;
  const local_6 = [
    {
      type: "parent",
      data: arg,
      author: local_2,
    },
    ...local_3.map((arg) => ({
      type: "reply",
      data: arg,
      author: {
        id: arg.author.id,
        username: arg.author.username,
        avatar: arg.author.avatar ?? "",
        displayName: arg.author.displayName,
        isVerified: arg.author.isVerified,
        pin: arg.author.pin,
      },
    })),
  ];
  return symbol_073("div", {
    className: `${local_af046160.commentWrapper} ${local_4 ? "flash-highlight" : ""}`,
    "data-comment-id": arg.id,
    children: [
      local_6.map((arg, arg_2) => {
        const local = !(arg_2 === local_6.length - 1 && !local && !local_5);
        const local_2 = arg_14 === arg.data.id;
        return symbol_073(
          "div",
          {
            "data-comment-id": arg.data.id,
            className: `${local_af046160.threadItem} ${local_2 ? "flash-highlight" : ""}`,
            children: [
              symbol_073("div", {
                className: local_af046160.avatarWrapper,
                children: [
                  symbol_073("a", {
                    href: `/@${arg.author.username ?? arg.author.id}`,
                    className: local_af046160.avatarLink,
                    children: symbol_073(symbol_058, {
                      src: arg.author.avatar,
                      alt: arg.author.displayName,
                      size: "sm",
                    }),
                  }),
                  local &&
                    symbol_073("div", {
                      className: local_af046160.threadLine,
                    }),
                ],
              }),
              symbol_073("div", {
                className: local_af046160.commentBody,
                children: symbol_073(local_4d88b603, {
                  author: arg.author,
                  commentId: arg.data.id,
                  text: arg.data.text,
                  spans: arg.data.spans ?? [],
                  attachments: arg.data.attachments ?? [],
                  replyTo: arg.data.replyTo,
                  createdAt: arg.data.createdAt,
                  reactionsCount: arg.data.reactions.total,
                  isReacted: arg.data.reactions.myReaction !== null,
                  size: "sm",
                  onLike:
                    arg.type === "parent" ? arg_2 : () => arg_3(arg.data.id),
                  onReply: () => {
                    if (arg.type === "parent") {
                      return arg_5(
                        arg.id,
                        arg.author.username ?? arg.author.id,
                        arg.author.displayName,
                        arg.author.id,
                      );
                    }
                    return arg_5(
                      arg.id,
                      arg.data.author.username ?? arg.data.author.id,
                      arg.data.author.displayName,
                      arg.data.author.id,
                      arg.data.id,
                    );
                  },
                  onReport: arg_10,
                  onEdit: arg_11,
                  onDelete: arg_12,
                  hideAvatar: true,
                  isWallOwner: arg_15,
                }),
              }),
            ],
          },
          arg.data.id,
        );
      }),
      local &&
        symbol_073("div", {
          className: local_af046160.threadItem,
          children: [
            symbol_073("div", {
              className: local_af046160.avatarWrapper,
              children: [
                symbol_073("div", {
                  className: local_af046160.avatarPlaceholder,
                }),
                local_5 &&
                  symbol_073("div", {
                    className: local_af046160.threadLine,
                  }),
              ],
            }),
            symbol_073("div", {
              className: local_af046160.commentBody,
              children: symbol_073(symbol_025, {
                placeholder: "Написать ответ...",
                replyTo: {
                  id: arg_4.commentId,
                  authorName: arg_4.displayName,
                },
                onCancelReply: arg_6,
                onSubmit: arg_7,
                onVoiceSend: arg_8,
                autoFocus: true,
              }),
            }),
          ],
        }),
      local_5 &&
        !arg_13 &&
        symbol_073("button", {
          className: local_af046160.showMoreBtn,
          onClick: () => arg_9(arg.id),
          children: [
            "Показать ещё ",
            arg.stats.replies - local_3.length,
            " ответов",
          ],
        }),
    ],
  });
});
function fn_eb3fb58d({
  itemCount: arg,
  estimatedItemHeight: arg_2,
  overscan: arg_3 = 5,
  getItemKey: arg_4 = (arg) => arg,
}) {
  const local = symbol_002(null);
  const [local_2, local_3] = symbol_056(0);
  const [local_4, local_5] = symbol_056(0);
  const local_6 = symbol_002(new Map());
  const local_7 = symbol_002(new Map());
  const local_8 = symbol_002(0);
  if (local_8.current !== arg) {
    local_8.current = arg;
    local_7.current.clear();
  }
  const local_9 = symbol_069(
    (arg) => {
      const local = arg_4(arg);
      return local_6.current.get(local) ?? arg_2;
    },
    [arg_4, arg_2],
  );
  const local_10 = symbol_069(
    (arg) => {
      if (arg === 0) {
        return 0;
      }
      const local = local_7.current.get(arg);
      if (local !== undefined) {
        return local;
      }
      let local_2 = 0;
      let local_3 = 0;
      for (let local = arg - 1; local >= 0; local--) {
        const local = local_7.current.get(local);
        if (local !== undefined) {
          local_2 = local;
          local_3 = local;
          break;
        }
      }
      for (let local = local_2; local < arg; local++) {
        local_3 += local_9(local);
      }
      local_7.current.set(arg, local_3);
      return local_3;
    },
    [local_9],
  );
  const local_11 = symbol_021(() => {
    if (arg === 0) {
      return 0;
    }
    return local_10(arg - 1) + local_9(arg - 1);
  }, [arg, local_10, local_9]);
  const { startIndex: local_12, endIndex: local_13 } = symbol_021(() => {
    if (arg === 0 || local_4 === 0) {
      return {
        startIndex: 0,
        endIndex: 0,
      };
    }
    let local = 0;
    let local_2 = arg - 1;
    while (local < local_2) {
      const local = Math.floor((local + local_2) / 2);
      const local_2 = local_10(local);
      const local_3 = local_9(local);
      if (local_2 + local_3 < local_2) {
        local = local + 1;
      } else {
        local_2 = local;
      }
    }
    const local_3 = Math.max(0, local - arg_3);
    let local_4 = local;
    let local_5 = local_10(local) - local_2;
    while (local_4 < arg && local_5 < local_4 + arg_2 * arg_3) {
      local_5 += local_9(local_4);
      local_4++;
    }
    local_4 = Math.min(arg - 1, local_4 + arg_3);
    return {
      startIndex: local_3,
      endIndex: local_4,
    };
  }, [arg, local_2, local_4, local_10, local_9, arg_3, arg_2]);
  const local_14 = symbol_021(() => {
    if (arg === 0) {
      return [];
    }
    const local = [];
    for (let local = local_12; local <= local_13; local++) {
      local.push({
        index: local,
        key: arg_4(local),
        start: local_10(local),
        size: local_9(local),
      });
    }
    return local;
  }, [local_12, local_13, arg_4, local_10, local_9, arg]);
  const local_15 = symbol_069(
    (arg, arg_2) => {
      if (!arg) {
        return;
      }
      const local = arg_4(arg_2);
      const local_2 = arg.getBoundingClientRect().height;
      if (local_2 <= 0) {
        return;
      }
      const local_3 = local_6.current.get(local);
      if (local_3 === undefined || Math.abs(local_3 - local_2) > 2) {
        local_6.current.set(local, local_2);
        local_7.current.clear();
      }
    },
    [arg_4],
  );
  const local_16 = symbol_069(() => {
    if (local.current) {
      local_3(local.current.scrollTop);
    }
  }, []);
  const local_17 = symbol_069(
    (arg) => {
      if (local.current) {
        local.current.removeEventListener("scroll", local_16);
      }
      local.current = arg;
      if (arg) {
        local_5(arg.clientHeight);
        local_3(arg.scrollTop);
        arg.addEventListener("scroll", local_16, {
          passive: true,
        });
      }
    },
    [local_16],
  );
  symbol_077(() => {
    if (!local.current) {
      return;
    }
    const local = new ResizeObserver((arg) => {
      for (const local of arg) {
        local_5(local.contentRect.height);
      }
    });
    local.observe(local.current);
    return () => local.disconnect();
  }, []);
  symbol_077(
    () => () => {
      if (local.current) {
        local.current.removeEventListener("scroll", local_16);
      }
    },
    [local_16],
  );
  return {
    containerRef: local_17,
    virtualItems: local_14,
    totalSize: local_11,
    measureElement: local_15,
  };
}
const local_9edbea5d = "c_comments";
const local_c5537644 = "c_sortWrapper";
const local_a0cd225c = "c_sortSelect";
const local_2b8e92ad = "c_commentsList";
const local_a8d0f8ec = "c_commentItem";
const local_119f77f9_2 = "c_empty";
const local_ef501043 = "c_loadMoreSentinel";
const local_dcb0ee80 = "c_virtualContainer";
const local_76955cb6 = "c_virtualContent";
const local_db38bffd = "c_virtualItem";
const local_f53702d6_2 = "c_inputWrapper";
const local_dc4fb1de = {
  comments: local_9edbea5d,
  sortWrapper: local_c5537644,
  sortSelect: local_a0cd225c,
  commentsList: local_2b8e92ad,
  commentItem: local_a8d0f8ec,
  empty: local_119f77f9_2,
  loadMoreSentinel: local_ef501043,
  virtualContainer: local_dcb0ee80,
  virtualContent: local_76955cb6,
  virtualItem: local_db38bffd,
  inputWrapper: local_f53702d6_2,
};
const local_f06debfc_61 = 120;
function fn_46dde2df({
  comments: arg,
  hasMore: arg_2,
  isLoadingMore: arg_3,
  onLoadMore: arg_4,
  replyingTo: arg_5,
  flashingCommentId: arg_6,
  loadingRepliesId: arg_7,
  isWallOwner: arg_8,
  onLikeComment: arg_9,
  onLikeReply: arg_10,
  onStartReply: arg_11,
  onCancelReply: arg_12,
  onSubmitReply: arg_13,
  onVoiceSend: arg_14,
  onLoadReplies: arg_15,
  onReport: arg_16,
  onEdit: arg_17,
  onDelete: arg_18,
}) {
  const local = symbol_002(false);
  const {
    containerRef: local_2,
    virtualItems: local_3,
    totalSize: local_4,
    measureElement: local_5,
  } = fn_eb3fb58d({
    itemCount: arg.length,
    estimatedItemHeight: local_f06debfc_61,
    overscan: 3,
    getItemKey: (arg) => arg[arg]?.id ?? arg,
  });
  symbol_077(() => {
    if (!arg_2 || arg_3 || local_3.length === 0) {
      local.current = false;
      return;
    }
    const local = local_3[local_3.length - 1]?.index ?? 0;
    const local_2 = arg.length - 5;
    if (local >= local_2 && !local.current) {
      local.current = true;
      arg_4();
    }
  }, [local_3, arg.length, arg_2, arg_3, arg_4]);
  symbol_077(() => {
    if (!arg_3) {
      local.current = false;
    }
  }, [arg_3]);
  const local_6 = symbol_069(
    (arg, arg_2) => {
      local_5(arg, arg_2);
    },
    [local_5],
  );
  return symbol_073("div", {
    ref: local_2,
    className: local_dc4fb1de.virtualContainer,
    "data-comments-scroll": true,
    children: [
      symbol_073("div", {
        className: local_dc4fb1de.virtualContent,
        style: {
          height: `${local_4}px`,
        },
        children: local_3.map((arg) => {
          const local = arg[arg.index];
          if (local) {
            return symbol_073(
              "div",
              {
                ref: (arg) => local_6(arg, arg.index),
                className: local_dc4fb1de.virtualItem,
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  transform: `translateY(${arg.start}px)`,
                },
                children: symbol_073(local_3b5973e6, {
                  comment: local,
                  onLike: () => arg_9(local.id),
                  onLikeReply: arg_10,
                  replyingTo: arg_5?.commentId === local.id ? arg_5 : null,
                  onStartReply: arg_11,
                  onCancelReply: arg_12,
                  onSubmitReply: arg_13,
                  onVoiceSend: arg_14,
                  onLoadReplies: arg_15,
                  onReport: arg_16,
                  onEdit: arg_17,
                  onDelete: arg_18,
                  isLoadingReplies: arg_7 === local.id,
                  flashingCommentId: arg_6,
                  isWallOwner: arg_8,
                }),
              },
              arg.key,
            );
          }
          return null;
        }),
      }),
      arg_3 &&
        symbol_073(fn_10dc4524, {
          variant: "medium",
        }),
    ],
  });
}
const local_82353520 = "c_wrapper";
const local_6f1a1319 = "c_popup";
const local_cc8fa504_2 = "c_closing";
const local_a98795d7 = {
  wrapper: local_82353520,
  popup: local_6f1a1319,
  closing: local_cc8fa504_2,
};
const local_76950eb5 = symbol_078(() =>
  symbol_064(
    () => import("./routes/emoji-picker.js"),
    local_5b673d6a([23, 24]),
  ).then((arg) => ({
    default: arg.EmojiPicker,
  })),
);
const local_f06debfc_62 = 280;
const local_f06debfc_63 = 380;
const local_f06debfc_64 = 8;
const local_f06debfc_65 = 100;
const local_f06debfc_66 = 150;
const local_f06debfc_67 = 150;
function fn_06bf3f19({
  onEmojiSelect: arg,
  buttonClassName: arg_2,
  size: arg_3 = 20,
}) {
  const [local, local_2] = symbol_056(false);
  const [local_3, local_4] = symbol_056(false);
  const [local_5, local_6] = symbol_056(null);
  const local_7 = symbol_002(null);
  const local_8 = symbol_002(null);
  const local_9 = symbol_002(null);
  const local_10 = symbol_002(null);
  const local_11 = symbol_002(null);
  const local_12 = symbol_002(null);
  const local_13 = symbol_069(() => {
    const local = local_7.current;
    if (!local) {
      return;
    }
    const local_2 = local.getBoundingClientRect();
    const local_3 = window.innerHeight;
    const local_4 = window.innerWidth;
    const local_5 = local_3 - local_2.bottom;
    const local_6 = local_4 - local_2.left;
    const local_7 = local_2.right;
    const local_8 =
      local_5 >= local_f06debfc_63 + local_f06debfc_64 ? "bottom" : "top";
    const local_9 =
      local_6 >= local_f06debfc_62 || local_6 > local_7 ? "left" : "right";
    let local_10;
    let local_11;
    if (local_8 === "top") {
      local_10 = local_2.top - local_f06debfc_63 - local_f06debfc_64;
    } else {
      local_10 = local_2.bottom + local_f06debfc_64;
    }
    if (local_9 === "left") {
      local_11 = local_2.left;
    } else {
      local_11 = local_2.right - local_f06debfc_62;
    }
    local_6({
      top: local_10,
      left: local_11,
      transformOrigin: `${local_8 === "top" ? "bottom" : "top"} ${local_9 === "left" ? "left" : "right"}`,
    });
  }, []);
  const local_14 = symbol_069(() => {
    if (!(local || local_3)) {
      local_13();
      local_2(true);
    }
  }, [local, local_3, local_13]);
  const local_15 = symbol_069(() => {
    if (!(!local || local_3)) {
      local_4(true);
      local_12.current = window.setTimeout(() => {
        local_2(false);
        local_4(false);
      }, local_f06debfc_67);
    }
  }, [local, local_3]);
  const local_16 = () => {
    if (local_11.current) {
      clearTimeout(local_11.current);
      local_11.current = null;
    }
    if (local_12.current) {
      clearTimeout(local_12.current);
      local_12.current = null;
    }
    if (local_3) {
      local_4(false);
    }
    if (!local) {
      local_10.current = window.setTimeout(() => {
        local_14();
      }, local_f06debfc_65);
    }
  };
  const local_17 = () => {
    if (local_10.current) {
      clearTimeout(local_10.current);
      local_10.current = null;
    }
    local_11.current = window.setTimeout(() => {
      local_15();
    }, local_f06debfc_66);
  };
  symbol_077(
    () => () => {
      if (local_10.current) {
        clearTimeout(local_10.current);
      }
      if (local_11.current) {
        clearTimeout(local_11.current);
      }
      if (local_12.current) {
        clearTimeout(local_12.current);
      }
    },
    [],
  );
  const local_18 = () => {
    if (local_11.current) {
      clearTimeout(local_11.current);
      local_11.current = null;
    }
    if (local_12.current) {
      clearTimeout(local_12.current);
      local_12.current = null;
    }
    if (local_3) {
      local_4(false);
    }
  };
  const local_19 = () => {
    local_11.current = window.setTimeout(() => {
      local_15();
    }, local_f06debfc_66);
  };
  const local_20 = (arg) => {
    arg.preventDefault();
  };
  return symbol_073("div", {
    ref: local_8,
    className: local_a98795d7.wrapper,
    onMouseEnter: local_16,
    onMouseLeave: local_17,
    onMouseDown: local_20,
    children: [
      symbol_073("button", {
        ref: local_7,
        className: arg_2,
        title: "Добавить эмоджи",
        children: symbol_073(local_40eb419c, {
          size: arg_3,
        }),
      }),
      local &&
        local_5 &&
        symbol_001(
          symbol_073("div", {
            ref: local_9,
            className: `${local_a98795d7.popup} ${local_3 ? local_a98795d7.closing : ""}`,
            style: {
              position: "fixed",
              top: local_5.top,
              left: local_5.left,
              transformOrigin: local_5.transformOrigin,
            },
            onMouseEnter: local_18,
            onMouseLeave: local_19,
            onMouseDown: local_20,
            children: symbol_073(symbol_062, {
              fallback: null,
              children: symbol_073(local_76950eb5, {
                onEmojiSelect: arg,
              }),
            }),
          }),
          document.body,
        ),
    ],
  });
}
const local_e98354d3 = "c_editCommentModal";
const local_7ab56d01_2 = "c_form";
const local_f1c23efb_4 = "c_header";
const local_9d9cf508_4 = "c_title";
const local_4d84dbb6_4 = "c_content";
const local_7b2acc5c_3 = "c_editor";
const local_8c4f8b4b_5 = "c_actions";
const local_033f1d4a_2 = "c_mediaButtons";
const local_39ce1bad_2 = "c_mediaButton";
const local_45d9d45c_2 = "c_submitGroup";
const local_ddd6ec9e_2 = "c_charCount";
const local_cd23a337_3 = "c_error";
const local_9bab1bec = {
  editCommentModal: local_e98354d3,
  form: local_7ab56d01_2,
  header: local_f1c23efb_4,
  title: local_9d9cf508_4,
  content: local_4d84dbb6_4,
  editor: local_7b2acc5c_3,
  actions: local_8c4f8b4b_5,
  mediaButtons: local_033f1d4a_2,
  mediaButton: local_39ce1bad_2,
  submitGroup: local_45d9d45c_2,
  charCount: local_ddd6ec9e_2,
  error: local_cd23a337_3,
};
const local_f06debfc_68 = 2000;
function fn_bfb01173({
  commentId: arg,
  initialText: arg_2,
  initialSpans: arg_3 = [],
}) {
  const { closeModal: local } = symbol_066();
  const local_2 = symbol_018((arg) => arg.editComment);
  const local_3 = symbol_075((arg) => arg.profile);
  const local_4 = symbol_006();
  const {
    text: local_5,
    spans: local_6,
    editorRef: local_7,
    handleChange: local_8,
    insertText: local_9,
  } = fn_9d6d3161(arg_2, arg_3);
  const [local_10, local_11] = symbol_056(false);
  const local_12 = local_f06debfc_68 - local_5.length;
  const local_13 = local_12 < 0;
  const local_14 = local_5 !== arg_2;
  const local_15 = JSON.stringify(local_6) !== JSON.stringify(arg_3);
  const local_16 = local_14 || local_15;
  const local_17 = symbol_069(
    (arg) => {
      local_9(arg.emoji);
    },
    [local_9],
  );
  const local_18 = symbol_069(async () => {
    if (!(!local_5.trim() || local_13 || !local_16 || local_10)) {
      local_11(true);
      try {
        await local_2(arg, local_5, local_6);
        local();
      } catch (error) {
        console.error("Failed to update comment:", error);
      } finally {
        local_11(false);
      }
    }
  }, [local_5, local_6, local_13, local_16, local_10, local_2, arg, local]);
  return symbol_073(symbol_014, {
    frameless: true,
    onClose: local,
    className: local_9bab1bec.editCommentModal,
    children: symbol_073("div", {
      className: local_9bab1bec.form,
      children: [
        symbol_073("div", {
          className: local_9bab1bec.header,
          children: symbol_073("span", {
            className: local_9bab1bec.title,
            children: "Редактирование комментария",
          }),
        }),
        symbol_073("div", {
          className: local_9bab1bec.content,
          children: [
            symbol_073(symbol_058, {
              src: local_3?.avatar ?? "",
              size: "sm",
            }),
            symbol_073(local_7fa9686b, {
              ref: local_7,
              value: local_5,
              spans: local_6,
              onChange: local_8,
              placeholder: "Комментарий...",
              maxLength: local_f06debfc_68,
              autoFocus: true,
              className: local_9bab1bec.editor,
              minHeight: 40,
              maxHeight: 300,
              disableFormatting: true,
            }),
          ],
        }),
        symbol_073("div", {
          className: local_9bab1bec.actions,
          children: [
            symbol_073("div", {
              className: local_9bab1bec.mediaButtons,
              children:
                !local_4 &&
                symbol_073(fn_06bf3f19, {
                  onEmojiSelect: local_17,
                  buttonClassName: local_9bab1bec.mediaButton,
                }),
            }),
            symbol_073("div", {
              className: local_9bab1bec.submitGroup,
              children: [
                local_13 &&
                  symbol_073("span", {
                    className: `${local_9bab1bec.charCount} ${local_9bab1bec.error}`,
                    children: local_12,
                  }),
                symbol_073(symbol_003, {
                  size: "md",
                  variant: "ghost",
                  onClick: () => local(),
                  children: "Отмена",
                }),
                symbol_073(symbol_003, {
                  size: "md",
                  disabled:
                    !local_5.trim() || local_13 || !local_16 || local_10,
                  onClick: local_18,
                  children: local_10 ? "Сохранение..." : "Сохранить",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const local_b84ad31b_2 = symbol_078(() =>
  symbol_064(
    () => import("./routes/report-modal.js"),
    local_5b673d6a([16, 17, 18]),
  ).then((arg) => ({
    default: arg.ReportModal,
  })),
);
function symbol_024({
  comments: arg,
  isLoading: arg_2,
  isLoadingMore: arg_3,
  hasMore: arg_4,
  sort: arg_5,
  onSortChange: arg_6,
  onLikeComment: arg_7,
  onAddComment: arg_8,
  onVoiceSend: arg_9,
  onLoadMore: arg_10,
  isWallOwner: arg_11 = false,
  variant: arg_12 = "modal",
  hideInput: arg_13 = false,
}) {
  const local = symbol_006() && arg_12 === "modal";
  const [local_2, local_3] = symbol_056(null);
  const [local_4, local_5] = symbol_056(null);
  const [local_6, local_7] = symbol_056(null);
  const [local_8, local_9] = symbol_056(null);
  const local_10 = symbol_002(null);
  const { openModal: local_11 } = symbol_066();
  const local_12 = symbol_018((arg) => arg.highlightedCommentId);
  const local_13 = symbol_018((arg) => arg.clearHighlightedComment);
  const local_14 = symbol_018((arg) => arg.loadReplies);
  const local_15 = symbol_018((arg) => arg.deleteComment);
  const local_16 = symbol_018((arg) => arg.toggleCommentLike);
  fn_c6e473a2({
    sentinelRef: local_10,
    hasMore: arg_4,
    isLoading: arg_3,
    onLoadMore: arg_10,
    rootMargin: "200px",
  });
  symbol_077(
    () => () => {
      local_13();
    },
    [local_13],
  );
  symbol_077(() => {
    if (!local_12) {
      return;
    }
    let local = false;
    const local_2 = [];
    const local_3 = (arg) => {
      if (local) {
        return;
      }
      const local = document.querySelector(`[data-comment-id="${local_12}"]`);
      if (!local) {
        if (arg > 0) {
          local_2.push(window.setTimeout(() => local_3(arg - 1), 150));
        } else {
          local_13();
        }
        return;
      }
      local.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      local_5(local_12);
      local_13();
      local_2.push(window.setTimeout(() => local_5(null), 900));
    };
    local_3(40);
    return () => {
      local = true;
      local_2.forEach((arg) => clearTimeout(arg));
    };
  }, [local_12, local_13]);
  const local_17 = async (arg, arg_2, arg_3) => {
    if (local_2) {
      await arg_8({
        text: arg,
        spans: arg_2,
        parentId: local_2.commentId,
        replyToUserId: local_2.userId,
        replyToInfo: {
          id: local_2.userId,
          username: local_2.username,
          displayName: local_2.displayName,
        },
        attachments: arg_3,
      });
      local_3(null);
    }
  };
  const local_18 = (arg, arg_2, arg_3, arg_4, arg_5) => {
    local_3({
      commentId: arg,
      username: arg_2,
      displayName: arg_3,
      userId: arg_4,
      replyId: arg_5,
    });
  };
  const local_19 = () => {
    local_3(null);
  };
  const local_20 = symbol_069(
    (arg) => {
      local_16(arg);
    },
    [local_16],
  );
  const local_21 = symbol_069(
    async (arg) => {
      local_7(arg);
      try {
        await local_14(arg);
      } finally {
        local_7(null);
      }
    },
    [local_14],
  );
  const local_22 = symbol_069((arg) => {
    local_9(arg);
  }, []);
  const local_23 = symbol_069(
    (arg) => {
      let local = "";
      let local_2 = [];
      for (const local of arg) {
        if (local.id === arg) {
          local = local.text;
          local_2 = local.spans ?? [];
          break;
        }
        const local = local.previewReplies?.find((arg) => arg.id === arg);
        if (local) {
          local = local.text;
          local_2 = local.spans ?? [];
          break;
        }
      }
      local_11(
        symbol_073(fn_bfb01173, {
          commentId: arg,
          initialText: local,
          initialSpans: local_2,
        }),
      );
    },
    [arg, local_11],
  );
  const local_24 = symbol_069(
    (arg) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        local_15(arg);
      }
    },
    [local_15],
  );
  return symbol_073("div", {
    className: local_dc4fb1de.comments,
    children: [
      symbol_073("div", {
        className: local_dc4fb1de.sortWrapper,
        children: symbol_073("select", {
          value: arg_5,
          onChange: (arg) => arg_6(arg.target.value),
          className: local_dc4fb1de.sortSelect,
          children: [
            symbol_073("option", {
              value: "new",
              children: "Новые",
            }),
            symbol_073("option", {
              value: "old",
              children: "Старые",
            }),
            symbol_073("option", {
              value: "popular",
              children: "Популярные",
            }),
          ],
        }),
      }),
      arg_2
        ? symbol_073(fn_4392d77d, {
            count: 5,
          })
        : arg.length === 0
          ? symbol_073("div", {
              className: local_dc4fb1de.empty,
              children: "Нет комментариев",
            })
          : local
            ? symbol_073(fn_46dde2df, {
                comments: arg,
                hasMore: arg_4,
                isLoadingMore: arg_3,
                onLoadMore: arg_10,
                replyingTo: local_2,
                flashingCommentId: local_4,
                loadingRepliesId: local_6,
                isWallOwner: arg_11,
                onLikeComment: arg_7,
                onLikeReply: local_20,
                onStartReply: local_18,
                onCancelReply: local_19,
                onSubmitReply: local_17,
                onVoiceSend: arg_9,
                onLoadReplies: local_21,
                onReport: local_22,
                onEdit: local_23,
                onDelete: local_24,
              })
            : symbol_073("div", {
                className: local_dc4fb1de.commentsList,
                children: [
                  arg.map((arg) =>
                    symbol_073(
                      "div",
                      {
                        className: local_dc4fb1de.commentItem,
                        children: symbol_073(local_3b5973e6, {
                          comment: arg,
                          onLike: () => arg_7(arg.id),
                          onLikeReply: local_20,
                          replyingTo:
                            local_2?.commentId === arg.id ? local_2 : null,
                          onStartReply: local_18,
                          onCancelReply: local_19,
                          onSubmitReply: local_17,
                          onVoiceSend: arg_9,
                          onLoadReplies: local_21,
                          onReport: local_22,
                          onEdit: local_23,
                          onDelete: local_24,
                          isLoadingReplies: local_6 === arg.id,
                          flashingCommentId: local_4,
                          isWallOwner: arg_11,
                        }),
                      },
                      arg.id,
                    ),
                  ),
                  arg_4 &&
                    symbol_073("div", {
                      ref: local_10,
                      className: local_dc4fb1de.loadMoreSentinel,
                      children:
                        arg_3 &&
                        symbol_073(fn_10dc4524, {
                          variant: "medium",
                        }),
                    }),
                ],
              }),
      !arg_13 &&
        symbol_073("div", {
          className: local_dc4fb1de.inputWrapper,
          children: symbol_073(symbol_025, {
            onSubmit: (arg, arg_2, arg_3) =>
              arg_8({
                text: arg,
                spans: arg_2,
                attachments: arg_3,
              }),
            onVoiceSend: arg_9,
          }),
        }),
      local_8 &&
        symbol_073(symbol_062, {
          fallback: null,
          children: symbol_073(local_b84ad31b_2, {
            targetType: "comment",
            targetId: local_8,
            onClose: () => local_9(null),
          }),
        }),
    ],
  });
}
const local_b40b6467 = "c_commentsModal";
const local_f1c23efb_5 = "c_header";
const local_9d9cf508_5 = "c_title";
const local_4d84dbb6_5 = "c_content";
const local_bd39b1cd = {
  commentsModal: local_b40b6467,
  header: local_f1c23efb_5,
  title: local_9d9cf508_5,
  content: local_4d84dbb6_5,
};
function fn_4e3ee8c9({ postId: arg, onClose: arg_2 }) {
  const local = symbol_002(null);
  const {
    comments: local_2,
    commentsLoading: local_3,
    commentsLoadingMore: local_4,
    commentsHasMore: local_5,
    clearComments: local_6,
    fetchComments: local_7,
    loadMoreComments: local_8,
    toggleCommentLike: local_9,
    addComment: local_10,
  } = symbol_018(
    symbol_016((arg) => ({
      comments: arg.comments,
      commentsLoading: arg.commentsLoading,
      commentsLoadingMore: arg.commentsLoadingMore,
      commentsHasMore: arg.commentsHasMore,
      clearComments: arg.clearComments,
      fetchComments: arg.fetchComments,
      loadMoreComments: arg.loadMoreComments,
      toggleCommentLike: arg.toggleCommentLike,
      addComment: arg.addComment,
    })),
  );
  const { commentsSort: local_11, setCommentsSort: local_12 } = symbol_020(
    symbol_016((arg) => ({
      commentsSort: arg.commentsSort,
      setCommentsSort: arg.setCommentsSort,
    })),
  );
  if (local.current !== arg) {
    local.current = arg;
    local_6();
  }
  symbol_077(() => {
    local_7(arg);
  }, [arg, local_7]);
  const local_13 = symbol_069(
    (arg) => {
      local_12(arg);
      local_7(arg);
    },
    [local_12, local_7, arg],
  );
  const local_14 = symbol_069(() => {
    if (local_5 && !local_4) {
      local_8(arg);
    }
  }, [local_5, local_4, local_8, arg]);
  const local_15 = symbol_069(
    (arg) => {
      local_9(arg);
    },
    [local_9],
  );
  const local_16 = symbol_069(
    async (arg) => {
      await local_10(arg, arg);
    },
    [local_10, arg],
  );
  const local_17 = symbol_069(
    async (arg) => {
      const local = `voice_${Date.now()}.webm`;
      const local_2 = new File([arg], local, {
        type: arg.type || "audio/webm",
      });
      const local_3 = await symbol_070.uploadMedia(local_2);
      await local_10(arg, {
        text: "",
        attachments: [
          {
            mediaId: local_3.id,
          },
        ],
      });
    },
    [local_10, arg],
  );
  return symbol_073(symbol_014, {
    frameless: true,
    onClose: arg_2,
    className: local_bd39b1cd.commentsModal,
    children: [
      symbol_073("div", {
        className: local_bd39b1cd.header,
        children: symbol_073("span", {
          className: local_bd39b1cd.title,
          children: "Комментарии",
        }),
      }),
      symbol_073("div", {
        className: local_bd39b1cd.content,
        "data-comments-modal": true,
        children: symbol_073(symbol_024, {
          comments: local_2,
          isLoading: local_3,
          isLoadingMore: local_4,
          hasMore: local_5,
          sort: local_11,
          onSortChange: local_13,
          onLikeComment: local_15,
          onAddComment: local_16,
          onVoiceSend: local_17,
          onLoadMore: local_14,
        }),
      }),
    ],
  });
}
const local_c65d5c43 = symbol_078(() =>
  symbol_064(
    () => import("./routes/drawing-canvas.js"),
    local_5b673d6a([25, 26]),
  ).then((arg) => ({
    default: arg.DrawingCanvas,
  })),
);
function symbol_015({
  onSubmit: arg,
  autoFocus: arg_2 = false,
  placeholder: arg_3 = "Что нового?",
}) {
  const {
    text: local,
    spans: local_2,
    editorRef: local_3,
    handleChange: local_4,
    insertText: local_5,
    reset: local_6,
  } = fn_9d6d3161();
  const [local_7, local_8] = symbol_056(false);
  const [local_9, local_10] = symbol_056(false);
  const [local_11, local_12] = symbol_056(false);
  const local_13 = symbol_002(0);
  const local_14 = symbol_006();
  const local_15 = symbol_061()?.subscription?.isActive ?? false;
  const {
    images: local_16,
    uploadingImages: local_17,
    isUploading: local_18,
    hasVideo: local_19,
    openFilePicker: local_20,
    removeImage: local_21,
    addImage: local_22,
    uploadFiles: local_23,
    clearAll: local_24,
    fileInputRef: local_25,
    handleFileChange: local_26,
  } = fn_94884e4d(10, local_15);
  const {
    isPollOpen: local_27,
    poll: local_28,
    togglePoll: local_29,
    handlePollQuestionChange: local_30,
    handlePollOptionChange: local_31,
    handleAddPollOption: local_32,
    handleRemovePollOption: local_33,
    handleMultipleChoiceToggle: local_34,
    handleClosePoll: local_35,
    isPollValid: local_36,
    getPollData: local_37,
    resetPoll: local_38,
  } = fn_79fd0324();
  const local_39 = local_58bcf8ef.MAX_CHARS - local.length;
  const local_40 = local_39 < 0;
  const local_41 = local_27 && local_36();
  const local_42 = local_16.length > 0 || local_17.length > 0;
  const local_43 = local.trim().length > 0 || local_41 || local_42;
  const local_44 = local_15
    ? `${local_2ace5464},${local_e23ce327}`
    : local_2ace5464;
  const local_45 = symbol_069(async () => {
    if (!(!local_43 || local_40 || local_18 || local_9)) {
      local_10(true);
      try {
        const local = local_16.map((arg) => ({
          mediaId: arg.mediaId,
          url: arg.url,
        }));
        await arg?.(local, local_2, local, local_37());
        local_6();
        local_24();
        local_38();
      } catch {
      } finally {
        local_10(false);
      }
    }
  }, [
    local_43,
    local_40,
    local_18,
    local_9,
    local,
    local_2,
    local_16,
    local_37,
    arg,
    local_6,
    local_24,
    local_38,
  ]);
  const local_46 = symbol_069(
    (arg) => {
      local_22(arg);
    },
    [local_22],
  );
  const local_47 = symbol_069(
    (arg) => {
      local_5(arg.emoji);
    },
    [local_5],
  );
  const local_48 = symbol_069((arg) => {
    arg.preventDefault();
    arg.stopPropagation();
    local_13.current++;
    if (arg.dataTransfer?.types.includes("Files")) {
      local_12(true);
    }
  }, []);
  const local_49 = symbol_069((arg) => {
    arg.preventDefault();
    arg.stopPropagation();
  }, []);
  const local_50 = symbol_069((arg) => {
    arg.preventDefault();
    arg.stopPropagation();
    local_13.current--;
    if (local_13.current === 0) {
      local_12(false);
    }
  }, []);
  const local_51 = symbol_069(
    (arg) => {
      arg.preventDefault();
      arg.stopPropagation();
      local_13.current = 0;
      local_12(false);
      const local = arg.dataTransfer?.files;
      if (local && local.length > 0) {
        local_23(Array.from(local));
      }
    },
    [local_23],
  );
  return symbol_073("div", {
    className: `${local_6930e397.form} ${local_11 ? local_6930e397.dragActive : ""}`,
    onDragEnter: local_48,
    onDragOver: local_49,
    onDragLeave: local_50,
    onDrop: local_51,
    children: [
      local_11 &&
        symbol_073("div", {
          className: local_6930e397.dragOverlay,
          children: [
            symbol_073(local_fe55573b, {
              size: 32,
            }),
            symbol_073("span", {
              children: local_15 ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      symbol_073("div", {
        className: local_6930e397.whatsNew,
        children: symbol_073(local_7fa9686b, {
          ref: local_3,
          value: local,
          spans: local_2,
          onChange: local_4,
          placeholder: arg_3,
          autoFocus: arg_2,
          className: local_6930e397.editor,
          minHeight: 40,
          maxHeight: local_58bcf8ef.MAX_TEXTAREA_HEIGHT,
          onImagePaste: local_23,
        }),
      }),
      symbol_073(fn_58944426, {
        images: local_16,
        uploadingImages: local_17,
        onRemove: local_21,
      }),
      symbol_073("input", {
        ref: local_25,
        type: "file",
        accept: local_44,
        multiple: !local_19,
        onChange: local_26,
        style: {
          display: "none",
        },
      }),
      local_27 &&
        symbol_073(fn_9716bb9e, {
          poll: local_28,
          onQuestionChange: local_30,
          onOptionChange: local_31,
          onAddOption: local_32,
          onRemoveOption: local_33,
          onMultipleChoiceToggle: local_34,
          onClose: local_35,
        }),
      symbol_073("div", {
        className: local_6930e397.actions,
        children: [
          symbol_073("div", {
            className: local_6930e397.mediaButtons,
            children: [
              symbol_073("button", {
                className: local_6930e397.mediaButton,
                onClick: local_20,
                title: local_15 ? "Добавить медиа" : "Добавить изображение",
                children: symbol_073(local_e89bf398, {}),
              }),
              !local_14 &&
                symbol_073(fn_06bf3f19, {
                  onEmojiSelect: local_47,
                  buttonClassName: local_6930e397.mediaButton,
                }),
              symbol_073("button", {
                className: local_6930e397.mediaButton,
                onClick: () => local_8(true),
                title: "Нарисовать",
                disabled: local_19,
                children: symbol_073(symbol_071, {
                  size: 20,
                }),
              }),
              symbol_073("button", {
                className: `${local_6930e397.mediaButton} ${local_27 ? local_6930e397.active : ""}`,
                onClick: local_29,
                title: "Добавить опрос",
                children: symbol_073(local_4837987e, {}),
              }),
            ],
          }),
          symbol_073("div", {
            className: local_6930e397.submitGroup,
            children: [
              local_40 &&
                symbol_073("span", {
                  className: `${local_6930e397.charCount} ${local_6930e397.error}`,
                  children: local_39,
                }),
              symbol_073(symbol_003, {
                size: "lg",
                disabled: !local_43 || local_40 || local_18 || local_9,
                loading: local_9,
                onClick: local_45,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      local_7 &&
        symbol_073(symbol_062, {
          fallback: null,
          children: symbol_073(local_c65d5c43, {
            isOpen: local_7,
            onClose: () => local_8(false),
            onSave: local_46,
            mode: "post",
          }),
        }),
    ],
  });
}
const local_9ccfd1d1 = "c_createPostModal";
const local_9d9cf508_6 = "c_title";
const local_339f5c81 = {
  createPostModal: local_9ccfd1d1,
  title: local_9d9cf508_6,
};
function symbol_011({
  wallOwnerId: arg,
  placeholder: arg_2,
  onPostCreated: arg_3,
}) {
  const { closeModal: local } = symbol_066();
  const local_2 = symbol_075((arg) => arg.profile);
  const local_3 = symbol_054((arg) => arg.createPost);
  const local_4 = async (arg, arg_2, arg_3, arg_4) => {
    if (!local_2) {
      return;
    }
    const local = arg ?? local_2.id;
    await local_3({
      wallOwnerId: local,
      text: arg,
      spans: arg_2,
      attachments: arg_3,
      poll: arg_4,
    });
    await arg_3?.();
    local();
  };
  return symbol_073(symbol_014, {
    frameless: true,
    onClose: local,
    className: local_339f5c81.createPostModal,
    children: [
      symbol_073("h2", {
        className: local_339f5c81.title,
        children: "Создать пост",
      }),
      symbol_073(symbol_015, {
        onSubmit: local_4,
        autoFocus: true,
        placeholder: arg_2,
      }),
    ],
  });
}
const local_d290c834 = "c_editPostModal";
const local_7ab56d01_3 = "c_form";
const local_e78cb809_2 = "c_whatsNew";
const local_7b2acc5c_4 = "c_editor";
const local_8c4f8b4b_6 = "c_actions";
const local_033f1d4a_3 = "c_mediaButtons";
const local_39ce1bad_3 = "c_mediaButton";
const local_45d9d45c_3 = "c_submitGroup";
const local_ddd6ec9e_3 = "c_charCount";
const local_cd23a337_4 = "c_error";
const local_7f9fe33f = {
  editPostModal: local_d290c834,
  form: local_7ab56d01_3,
  whatsNew: local_e78cb809_2,
  editor: local_7b2acc5c_4,
  actions: local_8c4f8b4b_6,
  mediaButtons: local_033f1d4a_3,
  mediaButton: local_39ce1bad_3,
  submitGroup: local_45d9d45c_3,
  charCount: local_ddd6ec9e_3,
  error: local_cd23a337_4,
};
const local_f06debfc_69 = 5000;
function fn_e1d37297({
  postId: arg,
  initialText: arg_2,
  initialSpans: arg_3 = [],
}) {
  const { closeModal: local } = symbol_066();
  const local_2 = symbol_054((arg) => arg.editPost);
  const local_3 = symbol_075((arg) => arg.profile);
  const local_4 = symbol_006();
  const {
    text: local_5,
    spans: local_6,
    editorRef: local_7,
    handleChange: local_8,
    insertText: local_9,
  } = fn_9d6d3161(arg_2, arg_3);
  const [local_10, local_11] = symbol_056(false);
  const local_12 = local_f06debfc_69 - local_5.length;
  const local_13 = local_12 < 0;
  const local_14 = local_5 !== arg_2;
  const local_15 = JSON.stringify(local_6) !== JSON.stringify(arg_3);
  const local_16 = local_14 || local_15;
  const local_17 = symbol_069(
    (arg) => {
      local_9(arg.emoji);
    },
    [local_9],
  );
  const local_18 = symbol_069(async () => {
    if (!(!local_5.trim() || local_13 || !local_16 || local_10)) {
      local_11(true);
      try {
        await local_2(arg, local_5, local_6);
        local();
      } catch (error) {
        console.error("Failed to update post:", error);
      } finally {
        local_11(false);
      }
    }
  }, [local_5, local_6, local_13, local_16, local_10, local_2, arg, local]);
  return symbol_073(symbol_014, {
    frameless: true,
    onClose: local,
    className: local_7f9fe33f.editPostModal,
    children: symbol_073("div", {
      className: local_7f9fe33f.form,
      children: [
        symbol_073("div", {
          className: local_7f9fe33f.whatsNew,
          children: [
            symbol_073(symbol_058, {
              src: local_3?.avatar ?? "",
              size: "md",
            }),
            symbol_073(local_7fa9686b, {
              ref: local_7,
              value: local_5,
              spans: local_6,
              onChange: local_8,
              placeholder: "Что нового?",
              maxLength: local_f06debfc_69,
              autoFocus: true,
              className: local_7f9fe33f.editor,
              minHeight: 40,
              maxHeight: 400,
            }),
          ],
        }),
        symbol_073("div", {
          className: local_7f9fe33f.actions,
          children: [
            symbol_073("div", {
              className: local_7f9fe33f.mediaButtons,
              children:
                !local_4 &&
                symbol_073(fn_06bf3f19, {
                  onEmojiSelect: local_17,
                  buttonClassName: local_7f9fe33f.mediaButton,
                }),
            }),
            symbol_073("div", {
              className: local_7f9fe33f.submitGroup,
              children: [
                local_13 &&
                  symbol_073("span", {
                    className: `${local_7f9fe33f.charCount} ${local_7f9fe33f.error}`,
                    children: local_12,
                  }),
                symbol_073(symbol_003, {
                  size: "lg",
                  disabled: !local_5.trim() || local_13 || !local_16,
                  loading: local_10,
                  onClick: local_18,
                  children: "Сохранить",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const local_12fecb6d = "c_repostModal";
const local_4d84dbb6_6 = "c_content";
const local_9d9cf508_7 = "c_title";
const local_a7e6a630 = "c_inputSection";
const local_ea607732 = "c_textarea";
const local_f8238cd0_2 = "c_originalPost";
const local_f16ff391 = "c_postHeader";
const local_044115b6 = "c_postText";
const local_8c4f8b4b_7 = "c_actions";
const local_5f1fffe7 = {
  repostModal: local_12fecb6d,
  content: local_4d84dbb6_6,
  title: local_9d9cf508_7,
  inputSection: local_a7e6a630,
  textarea: local_ea607732,
  originalPost: local_f8238cd0_2,
  postHeader: local_f16ff391,
  postText: local_044115b6,
  actions: local_8c4f8b4b_7,
};
function fn_14b687be({ post: arg, onClose: arg_2, onSuccess: arg_3 }) {
  const [local, local_2] = symbol_056("");
  const [local_3, local_4] = symbol_056(false);
  const local_5 = symbol_075((arg) => arg.profile);
  const local_6 = symbol_054((arg) => arg.updatePostReposted);
  const local_7 = symbol_054((arg) => arg.prependPost);
  const local_8 = async () => {
    local_4(true);
    try {
      const local = await symbol_068.createRepost(
        arg.id,
        local.trim() || undefined,
      );
      local_6(arg.id, true, arg.reposted ? 0 : 1);
      local_7(local);
      if (local_5?.username) {
        symbol_068.invalidateWallCache(local_5.username);
      }
      arg_3?.();
      arg_2();
    } catch (error) {
      console.error("Failed to create repost:", error);
    } finally {
      local_4(false);
    }
  };
  return symbol_073(symbol_014, {
    onClose: arg_2,
    showHeader: false,
    frameless: false,
    className: local_5f1fffe7.repostModal,
    children: symbol_073("div", {
      className: local_5f1fffe7.content,
      children: [
        symbol_073("h2", {
          className: local_5f1fffe7.title,
          children: "Репост",
        }),
        symbol_073("div", {
          className: local_5f1fffe7.inputSection,
          children: [
            local_5 &&
              symbol_073(symbol_058, {
                src: local_5.avatar,
                alt: local_5.displayName,
                size: "sm",
              }),
            symbol_073("textarea", {
              className: local_5f1fffe7.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: local,
              onInput: (arg) => local_2(arg.target.value),
              rows: 3,
            }),
          ],
        }),
        symbol_073("div", {
          className: local_5f1fffe7.originalPost,
          children: [
            symbol_073("div", {
              className: local_5f1fffe7.postHeader,
              children: [
                symbol_073(symbol_058, {
                  src: arg.author.avatar ?? "",
                  alt: arg.author.displayName,
                  size: "xs",
                }),
                symbol_073(symbol_022, {
                  name: arg.author.displayName,
                  verified: arg.author.isVerified,
                  hasNuksta: arg.author.hasNuksta,
                  pin: arg.author.pin,
                  size: "xs",
                }),
              ],
            }),
            symbol_073("p", {
              className: local_5f1fffe7.postText,
              children: arg.text,
            }),
          ],
        }),
        symbol_073("div", {
          className: local_5f1fffe7.actions,
          children: [
            symbol_073(symbol_003, {
              variant: "secondary",
              onClick: (arg) => {
                arg.stopPropagation();
                arg_2();
              },
              disabled: local_3,
              children: "Отмена",
            }),
            symbol_073(symbol_003, {
              variant: "primary",
              onClick: (arg) => {
                arg.stopPropagation();
                local_8();
              },
              disabled: local_3,
              children: local_3 ? "Репост..." : "Репостнуть",
            }),
          ],
        }),
      ],
    }),
  });
}
const local_1ae1f526 = () => {
  const local = symbol_061();
  const local_2 = symbol_007();
  const { initialize: local_3, disconnectSSE: local_4 } = local_e4a1ecd0();
  const local_5 = symbol_035();
  const local_6 = symbol_036((arg) => arg.fetchPortal);
  symbol_077(() => {
    if (local_2) {
      local_3();
    }
    return () => {
      local_4();
    };
  }, [local_2, local_3, local_4]);
  symbol_077(() => {
    local_6();
  }, [local_6]);
  const local_7 = local?.username ? `/@${local.username}` : "/profile";
  const local_8 = symbol_021(
    () => [
      {
        id: "feed",
        label: "Лента",
        icon: local_fa5c2464,
        href: "./site/index.html",
      },
      {
        id: "shop",
        label: "Магаз",
        icon: local_1b669a11,
        href: "/shop",
      },
      {
        id: "event",
        label: "Ивент",
        icon: null,
        href: "/event",
      },
      {
        id: "notifications",
        label: "Уведы",
        icon: symbol_050,
        href: "/notifications",
      },
      {
        id: "profile",
        label: "Профиль",
        icon: symbol_051,
        href: local_7,
      },
    ],
    [local_7],
  );
  const [local_9, local_10] = symbol_056({});
  const [local_11, local_12] = symbol_056(true);
  const local_13 = symbol_002([]);
  const local_14 = symbol_002(null);
  const [local_15] = symbol_045();
  const { openModal: local_16 } = symbol_066();
  const local_17 = symbol_054((arg) => arg.fetchFeed);
  const local_18 = symbol_054((arg) => arg.isRefreshing);
  const local_19 = local_9812c6ee();
  const local_20 = fn_3215cb92();
  const local_21 = symbol_069(() => {
    if (window.scrollY > 1) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    } else {
      local_17(true);
    }
  }, [local_17]);
  const local_22 = symbol_021(() => {
    const local = local_15.url || "./site/index.html";
    return local_e0268f28.some((arg) => local.startsWith(arg));
  }, [local_15.url]);
  const local_23 = symbol_021(() => {
    const local = local_15.url || "./site/index.html";
    if (local?.username) {
      return (
        local === `/@${local.username}` ||
        local.startsWith(`/@${local.username}/`)
      );
    }
    return false;
  }, [local_15.url, local?.username]);
  const local_24 = symbol_002(null);
  const local_25 = symbol_069((arg, arg_2 = false) => {
    if (!arg_2 && local_24.current === arg) {
      return;
    }
    local_24.current = arg;
    const local = local_13.current[arg];
    const local_2 = local_14.current;
    if (local && local_2) {
      const local = parseFloat(getComputedStyle(local_2).paddingLeft) || 0;
      local_10({
        width: local.offsetWidth,
        transform: `translateX(${local.offsetLeft - local}px)`,
      });
      local_12(true);
    }
  }, []);
  symbol_077(() => {
    const local = local_15.url || "./site/index.html";
    const local_2 = local_8.findIndex(
      (arg) =>
        local === arg.href ||
        local.startsWith(`${arg.href}/`) ||
        (arg.id === "profile" && local_23),
    );
    if (local_2 === -1) {
      local_12(false);
    } else {
      local_25(local_2, true);
    }
  }, [local_15.url, local_8, local_23, local_25]);
  symbol_077(() => {
    const local = local_14.current;
    if (!local) {
      return;
    }
    const local_2 = local.querySelector(`.${local_236f2925.active}`);
    if (local_2) {
      const local = local_13.current.indexOf(local_2);
      if (local !== -1) {
        local_24.current = null;
        local_25(local);
      }
    }
  }, []);
  symbol_077(() => {
    const local = local_14.current;
    if (!local) {
      return;
    }
    const local_2 = () => {
      const local = local.querySelector(`.${local_236f2925.active}`);
      if (local) {
        const local = local_13.current.indexOf(local);
        if (local !== -1) {
          local_25(local, true);
        }
      }
    };
    const local_3 = new ResizeObserver(local_2);
    local_3.observe(local);
    window.addEventListener("resize", local_2);
    return () => {
      local_3.disconnect();
      window.removeEventListener("resize", local_2);
    };
  }, [local_25]);
  const local_26 = () => {
    local_16(symbol_073(symbol_011, {}));
  };
  if (local_22) {
    return null;
  }
  return symbol_073("div", {
    className: local_236f2925.mobileNavigationWrapper,
    children: [
      symbol_073("nav", {
        ref: local_14,
        className: local_236f2925.navigation,
        children: [
          symbol_073("div", {
            className: `${local_236f2925.indicator} ${local_11 ? "" : local_236f2925.indicatorHidden}`,
            style: local_9,
          }),
          local_8.map((arg, arg_2) => {
            const local = arg.icon;
            const local_2 = arg.id === "event";
            const local_3 = local_2 && local_5.active && !!local_5.url;
            const local_4 = local_15.url || "./site/index.html";
            const local_5 =
              local_4 === arg.href ||
              local_4.startsWith(`${arg.href}/`) ||
              (arg.id === "profile" && local_23);
            return symbol_073(
              "a",
              {
                href: local_3 ? local_5.url : arg.href,
                target: local_3 ? "_blank" : undefined,
                rel: local_3 ? "noopener noreferrer" : undefined,
                ref: (arg) => {
                  local_13.current[arg_2] = arg;
                  if (arg && local_5) {
                    local_25(arg_2);
                  }
                },
                className: `${local_236f2925.navItem} ${local_5 ? local_236f2925.active : ""}`,
                onClick: (arg) => {
                  if (local_5 && arg.id === "feed") {
                    arg.preventDefault();
                    local_21();
                  }
                },
                children: [
                  symbol_073("span", {
                    className: local_236f2925.iconWrapper,
                    children: local_2
                      ? symbol_073("img", {
                          src: local_5.active
                            ? "/assets/portal/portal-active.gif"
                            : "./assets/portal-inactive.png",
                          alt: "Ивент",
                          className: `${local_236f2925.portalImage} ${local_5.active ? local_236f2925.portalImageActive : ""}`,
                        })
                      : symbol_073(symbol_063, {
                          children: [
                            arg.id === "feed" && local_18
                              ? symbol_073(symbol_048, {})
                              : symbol_073(local, {}),
                            arg.id === "notifications" &&
                              local_19 > 0 &&
                              symbol_073("span", {
                                className: local_236f2925.badge,
                                children: local_19 > 99 ? "99+" : local_19,
                              }),
                            arg.id === "shop" &&
                              local_20 > 0 &&
                              symbol_073("span", {
                                className: local_236f2925.badge,
                                children: local_20,
                              }),
                          ],
                        }),
                  }),
                  symbol_073("span", {
                    className: local_236f2925.label,
                    children: arg.label,
                  }),
                ],
              },
              arg.id,
            );
          }),
        ],
      }),
      local_2 &&
        symbol_073("button", {
          className: local_236f2925.createButton,
          onClick: local_26,
          "aria-label": "Создать пост",
          children: symbol_073(symbol_065, {}),
        }),
    ],
  });
};
const local_111bfc92_4 = "c_badge";
const local_6ffa3df6 = "c_red";
const local_d4ea5c9b = "c_green";
const local_153f84c8 = "c_blue";
const local_760f4793 = {
  badge: local_111bfc92_4,
  red: local_6ffa3df6,
  green: local_d4ea5c9b,
  blue: local_153f84c8,
};
function fn_f3d00567({ type: arg }) {
  const local =
    arg === "like"
      ? local_760f4793.red
      : ["wall_post", "reply", "repost"].includes(arg)
        ? local_760f4793.green
        : local_760f4793.blue;
  return symbol_073("div", {
    className: `${local_760f4793.badge} ${local}`,
    children: [
      arg === "follow" &&
        symbol_073(symbol_065, {
          size: 12,
        }),
      ["wall_post", "reply"].includes(arg) &&
        symbol_073(symbol_027, {
          size: 12,
          filled: true,
        }),
      arg === "like" &&
        symbol_073(symbol_030, {
          size: 12,
          filled: true,
        }),
      arg === "repost" &&
        symbol_073(symbol_031, {
          size: 12,
        }),
    ],
  });
}
const local_adb43aea_2 = "c_container";
const local_d52cbd52 = "c_clearAllButton";
const local_1c026e09 = "c_toastList";
const local_f50c9028 = "c_toast";
const local_882e7639 = "c_toastLeft";
const local_01b68ed9 = "c_toastData";
const local_9d9cf508_8 = "c_title";
const local_806ef98a = "c_message";
const local_46549dc5_2 = "c_dragging";
const local_df39e8f2_2 = "c_closeButton";
const local_a2acbc37 = "c_belowTabs";
const local_4f4408db = {
  container: local_adb43aea_2,
  clearAllButton: local_d52cbd52,
  toastList: local_1c026e09,
  toast: local_f50c9028,
  toastLeft: local_882e7639,
  toastData: local_01b68ed9,
  title: local_9d9cf508_8,
  message: local_806ef98a,
  dragging: local_46549dc5_2,
  closeButton: local_df39e8f2_2,
  belowTabs: local_a2acbc37,
};
const local_dc634aac_3 = fn_c05a86e1(null);
function fn_6f3a9292({ children: arg }) {
  const [local, local_2] = symbol_056([]);
  const local_3 = symbol_069((arg) => {
    const local = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    local_2((arg) => [
      ...arg,
      {
        id: local,
        message: arg.message,
        notificationType: arg.notificationType || "follow",
        actorName: arg.actorName,
        actorUsername: arg.actorUsername,
        actorAvatar: arg.actorAvatar,
        clickUrl: arg.clickUrl,
        apiType: arg.apiType,
        entityId: arg.entityId,
        parentEntityId: arg.parentEntityId,
      },
    ]);
  }, []);
  const local_4 = symbol_069((arg) => {
    local_2((arg) => arg.filter((arg) => arg.id !== arg));
  }, []);
  const local_5 = symbol_069(() => {
    local_2([]);
  }, []);
  const local_6 = local_9812c6ee_2();
  symbol_077(() => {
    if (local_6) {
      const local = fn_6844b49a(local_6.type);
      local_3({
        message: local_6.message,
        notificationType: local,
        actorName: local_6.actorName,
        actorUsername: local_6.actorUsername,
        actorAvatar: local_6.actorAvatar,
        clickUrl: local_6.clickUrl,
        apiType: local_6.type,
        entityId: local_6.entityId,
        parentEntityId: local_6.parentEntityId,
      });
      local_e4a1ecd0.setState({
        lastSseToast: null,
      });
    }
  }, [local_6, local_3]);
  return symbol_073(local_dc634aac_3.Provider, {
    value: {
      toasts: local,
      addToast: local_3,
      removeToast: local_4,
      clearAll: local_5,
    },
    children: [
      arg,
      symbol_073(fn_5854f35f, {
        toasts: local,
        onRemove: local_4,
        onClearAll: local_5,
      }),
    ],
  });
}
function fn_5854f35f({ toasts: arg, onRemove: arg_2, onClearAll: arg_3 }) {
  const [local, local_2] = symbol_056(false);
  const local_3 =
    typeof window !== "undefined" &&
    (window.location.pathname === "./site/index.html" ||
      window.location.pathname === "");
  if (arg.length === 0) {
    return null;
  }
  const local_4 = arg.slice(-4);
  const local_5 = () => {
    local_2(true);
    setTimeout(() => {
      arg_3();
      local_2(false);
    }, 300);
  };
  return symbol_073("div", {
    className: `${local_4f4408db.container} ${local_3 ? local_4f4408db.belowTabs : ""} ym-hide-content`,
    children: [
      symbol_073("div", {
        className: `${local_4f4408db.toastList} ${local ? local_4f4408db.clearing : ""}`,
        children: local_4.map((arg, arg_2) =>
          symbol_073(
            fn_d77c5a70,
            {
              toast: arg,
              onRemove: arg_2,
              clearingDelay: local ? arg_2 * 50 : 0,
              isClearing: local,
            },
            arg.id,
          ),
        ),
      }),
      arg.length > 1 &&
        symbol_073(symbol_003, {
          className: local_4f4408db.clearAllButton,
          onClick: local_5,
          children: "Скрыть все",
        }),
    ],
  });
}
const local_f06debfc_70 = 80;
function fn_6844b49a(arg) {
  return (
    {
      follow: "follow",
      follow_request: "follow",
      follow_accepted: "follow",
      post_reaction: "like",
      post_comment: "reply",
      post_repost: "repost",
      comment_reaction: "like",
      comment_reply: "reply",
      post_mention: "reply",
      comment_mention: "reply",
      wall_post: "reply",
    }[arg] || "follow"
  );
}
function fn_a844a33b(arg) {
  const {
    apiType: local,
    entityId: local_2,
    parentEntityId: local_3,
    actorUsername: local_4,
    clickUrl: local_5,
  } = arg;
  const local_6 = ["post_reaction", "post_repost", "post_mention", "wall_post"];
  const local_7 = [
    "post_comment",
    "comment_reaction",
    "comment_reply",
    "comment_mention",
  ];
  if (local && local_2 && local_4) {
    if (local_6.includes(local)) {
      return `/@${local_4}/post/${local_2}`;
    }
    if (local_7.includes(local)) {
      if (local_3) {
        return `/@${local_4}/post/${local_3}?comment=${local_2}`;
      }
      return `/@${local_4}/post/${local_2}`;
    }
  }
  if (
    local &&
    ["follow", "follow_request", "follow_accepted"].includes(local) &&
    local_4
  ) {
    return `/@${local_4}`;
  }
  return local_5 || "/notifications";
}
function fn_d77c5a70({
  toast: arg,
  onRemove: arg_2,
  clearingDelay: arg_3 = 0,
  isClearing: arg_4 = false,
}) {
  const local = symbol_002(null);
  const [local_2, local_3] = symbol_056(0);
  const [local_4, local_5] = symbol_056(false);
  const [local_6, local_7] = symbol_056(false);
  const local_8 = symbol_002(0);
  const local_9 = symbol_002(false);
  const local_10 = (arg) => {
    local_8.current = arg.clientX;
    local_9.current = false;
    local_5(true);
  };
  const local_11 = symbol_069(
    (arg) => {
      if (!local_4) {
        return;
      }
      const local = arg.clientX - local_8.current;
      if (Math.abs(local) > 5) {
        local_9.current = true;
      }
      local_3(local);
    },
    [local_4],
  );
  const local_12 = symbol_069(() => {
    if (local_4) {
      local_5(false);
      if (Math.abs(local_2) > local_f06debfc_70) {
        local_7(true);
        local_3(local_2 > 0 ? 400 : -400);
        setTimeout(() => arg_2(arg.id), 200);
      } else {
        local_3(0);
        if (!local_9.current) {
          const local = fn_a844a33b(arg);
          if (local) {
            symbol_057(local);
            arg_2(arg.id);
          }
        }
      }
    }
  }, [local_4, local_2, arg_2, arg]);
  symbol_077(() => {
    if (local_4) {
      document.addEventListener("mousemove", local_11);
      document.addEventListener("mouseup", local_12);
      return () => {
        document.removeEventListener("mousemove", local_11);
        document.removeEventListener("mouseup", local_12);
      };
    }
  }, [local_4, local_11, local_12]);
  const local_13 = (arg) => {
    local_8.current = arg.touches[0].clientX;
    local_5(true);
  };
  const local_14 = (arg) => {
    if (!local_4) {
      return;
    }
    const local = arg.touches[0].clientX - local_8.current;
    local_3(local);
  };
  const local_15 = () => {
    local_12();
  };
  const local_16 =
    local_6 || arg_4 ? 0 : Math.max(0, 1 - Math.abs(local_2) / 200);
  const local_17 = arg_4 ? 400 : local_2;
  return symbol_073("div", {
    ref: local,
    className: `${local_4f4408db.toast} ${local_4 ? local_4f4408db.dragging : ""}`,
    style: {
      transform: `translateX(${local_17}px)`,
      opacity: local_16,
      transition: local_4
        ? "none"
        : `transform 0.3s ease ${arg_3}ms, opacity 0.3s ease ${arg_3}ms`,
    },
    onMouseDown: local_10,
    onTouchStart: local_13,
    onTouchMove: local_14,
    onTouchEnd: local_15,
    children: [
      symbol_073("div", {
        className: local_4f4408db.toastLeft,
        children: [
          symbol_073(symbol_058, {
            src: arg.actorAvatar || "",
            badge: symbol_073(fn_f3d00567, {
              type: arg.notificationType,
            }),
          }),
          symbol_073("div", {
            className: local_4f4408db.toastData,
            children: [
              arg.actorName &&
                symbol_073("div", {
                  className: local_4f4408db.title,
                  children: symbol_073(symbol_022, {
                    name: arg.actorName,
                  }),
                }),
              symbol_073("p", {
                className: local_4f4408db.message,
                children: arg.message,
              }),
            ],
          }),
        ],
      }),
      symbol_073("button", {
        className: local_4f4408db.closeButton,
        onClick: (arg) => {
          arg.stopPropagation();
          arg_2(arg.id);
        },
        onMouseDown: (arg) => arg.stopPropagation(),
        onTouchStart: (arg) => arg.stopPropagation(),
        children: symbol_073(symbol_049, {
          size: 16,
        }),
      }),
    ],
  });
}
const local_adb43aea_3 = "c_container";
const local_f50c9028_2 = "c_toast";
const local_79ee4ce1 = "c_slideUp";
const local_2c9afb60 = "c_leaving";
const local_2a0c1d30 = "c_fadeOut";
const local_988f55fc = "c_success";
const local_3abd7bdb_2 = "c_icon";
const local_806ef98a_2 = "c_message";
const local_df39e8f2_3 = "c_closeButton";
const local_cd23a337_5 = "c_error";
const local_cda3bf5e = {
  container: local_adb43aea_3,
  toast: local_f50c9028_2,
  slideUp: local_79ee4ce1,
  leaving: local_2c9afb60,
  fadeOut: local_2a0c1d30,
  success: local_988f55fc,
  icon: local_3abd7bdb_2,
  message: local_806ef98a_2,
  closeButton: local_df39e8f2_3,
  error: local_cd23a337_5,
};
const local_2e5ff558 = {
  success: local_132b8ed2,
  error: local_b2622f5b,
};
function fn_97f7214e({
  id: arg,
  type: arg_2,
  message: arg_3,
  onRemove: arg_4,
}) {
  const [local, local_2] = symbol_056(false);
  const local_3 = local_2e5ff558[arg_2];
  const local_4 = symbol_069(() => {
    local_2(true);
    setTimeout(() => {
      arg_4(arg);
    }, 300);
  }, [arg, arg_4]);
  return symbol_073("div", {
    className: `${local_cda3bf5e.toast} ${local_cda3bf5e[arg_2]} ${local ? local_cda3bf5e.leaving : ""}`,
    children: [
      symbol_073("span", {
        className: local_cda3bf5e.icon,
        children: symbol_073(local_3, {
          size: 20,
        }),
      }),
      symbol_073("span", {
        className: local_cda3bf5e.message,
        children: arg_3,
      }),
      symbol_073("button", {
        className: local_cda3bf5e.closeButton,
        onClick: local_4,
        children: symbol_073(symbol_049, {
          size: 14,
        }),
      }),
    ],
  });
}
function fn_bd4e493e() {
  const local = local_d62c94db((arg) => arg.toasts);
  const local_2 = local_d62c94db((arg) => arg.removeToast);
  if (local.length === 0) {
    return null;
  }
  return symbol_073("div", {
    className: local_cda3bf5e.container,
    children: local.map((arg) =>
      symbol_073(
        fn_97f7214e,
        {
          id: arg.id,
          type: arg.type,
          message: arg.message,
          onRemove: local_2,
        },
        arg.id,
      ),
    ),
  });
}
const local_f78e4c51 = "c_tabs";
const local_c8bbfbe3_2 = "c_indicator";
const local_9e87ce8c_4 = "c_button";
const local_6ab69625_4 = "c_active";
const local_bd39b1cd_2 = {
  tabs: local_f78e4c51,
  indicator: local_c8bbfbe3_2,
  button: local_9e87ce8c_4,
  active: local_6ab69625_4,
};
function symbol_013({
  tabs: arg,
  defaultTab: arg_2 = 0,
  activeIndex: arg_3,
  onChange: arg_4,
  className: arg_5 = "",
}) {
  const [local, local_2] = symbol_056(arg_2);
  const local_3 = arg_3 !== undefined ? arg_3 : local;
  const [local_4, local_5] = symbol_056({});
  const local_6 = symbol_002([]);
  const local_7 = symbol_002(null);
  const local_8 = symbol_002(false);
  const local_9 = symbol_069(() => {
    const local = local_6.current[local_3];
    if (local) {
      const local = local.parentElement;
      const local_2 = local
        ? parseFloat(getComputedStyle(local).paddingLeft)
        : 0;
      const local_3 = !local_8.current;
      local_5({
        width: local.offsetWidth,
        transform: `translateX(${local.offsetLeft - local_2}px)`,
        ...(local_3
          ? {
              transition: "none",
            }
          : {}),
      });
      if (local_3) {
        requestAnimationFrame(() => {
          local_8.current = true;
          local_5((arg) => {
            const { transition: local, ...local_2 } = arg;
            return local_2;
          });
        });
      }
    }
  }, [local_3]);
  symbol_077(() => {
    local_9();
  }, [local_9]);
  symbol_077(() => {
    const local = local_7.current;
    if (!local) {
      return;
    }
    const local_2 = new ResizeObserver(() => {
      local_9();
    });
    local_2.observe(local);
    return () => {
      local_2.disconnect();
    };
  }, [local_9]);
  const local_10 = (arg) => {
    if (arg_3 === undefined) {
      local_2(arg);
    }
    arg_4?.(arg, arg[arg]);
  };
  const local_11 = (arg) => {
    if (typeof arg === "string") {
      return arg;
    }
    return arg.label;
  };
  const local_12 = (arg, arg_2) => {
    if (typeof arg === "string") {
      return `${arg_2}`;
    }
    return arg.id;
  };
  return symbol_073("div", {
    ref: local_7,
    className: `${local_bd39b1cd_2.tabs} ${arg_5}`,
    children: [
      symbol_073("div", {
        className: local_bd39b1cd_2.indicator,
        style: local_4,
      }),
      arg.map((arg, arg_2) =>
        symbol_073(
          "button",
          {
            ref: (arg) => {
              local_6.current[arg_2] = arg;
            },
            onClick: () => local_10(arg_2),
            className: `${local_bd39b1cd_2.button} ${local_3 === arg_2 ? local_bd39b1cd_2.active : ""}`,
            children: local_11(arg),
          },
          local_12(arg, arg_2),
        ),
      ),
    ],
  });
}
const local_e5f18eb8 = symbol_078(() =>
  symbol_064(
    () => import("./routes/image-viewer.js"),
    local_5b673d6a([27, 28, 6, 5, 29]),
  ).then((arg) => ({
    default: arg.ImageViewer,
  })),
);
function fn_30574445() {
  const {
    isOpen: local,
    images: local_2,
    initialIndex: local_3,
    sourceRect: local_4,
    resolveSourceRect: local_5,
    zoomable: local_6,
    thumbs: local_7,
    session: local_8,
    close: local_9,
  } = local_aac74809();
  if (local) {
    return symbol_073(symbol_062, {
      fallback: null,
      children: symbol_073(
        local_e5f18eb8,
        {
          images: local_2,
          initialIndex: local_3,
          sourceRect: local_4,
          resolveSourceRect: local_5,
          zoomable: local_6,
          thumbs: local_7,
          onClose: () => local_9(local_8),
        },
        local_8,
      ),
    });
  }
  return null;
}
const local_57ccc57d = "c_layout";
const local_82353520_2 = "c_wrapper";
const local_97d89813 = "c_wrapperShop";
const local_4d84dbb6_7 = "c_content";
const local_e42c74a1 = {
  layout: local_57ccc57d,
  wrapper: local_82353520_2,
  wrapperShop: local_97d89813,
  content: local_4d84dbb6_7,
};
const local_8e5652b5 = symbol_078(() =>
  symbol_064(
    () => import("./routes/auth-layout.js"),
    local_5b673d6a([30, 31]),
  ).then((arg) => ({
    default: arg.AuthLayout,
  })),
);
const local_483bd706 = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];
const local_d50c9609 = [
  "/terms",
  "/privacy",
  "/cookies",
  "/external",
  "/support",
  "/delete-account",
  "/child-safety",
  "/subscription-terms",
  "/recurring-terms",
];
const local_808f09a9 = ["/shop"];
const local_ba097f2c = ({ children: arg }) => {
  const local = symbol_006();
  const local_2 = symbol_007();
  const local_3 = local_c15c3c53();
  const [local_4, local_5] = symbol_056(window.location.pathname);
  symbol_077(() => {
    const local = () => {
      local_5(window.location.pathname);
    };
    window.addEventListener("popstate", local);
    const local_2 = history.pushState.bind(history);
    const local_3 = history.replaceState.bind(history);
    history.pushState = (...arg) => {
      local_2(...arg);
      local();
    };
    history.replaceState = (...arg) => {
      local_3(...arg);
      local();
    };
    return () => {
      window.removeEventListener("popstate", local);
      history.pushState = local_2;
      history.replaceState = local_3;
    };
  }, []);
  const local_6 = local_483bd706.includes(local_4);
  const local_7 = local_808f09a9.some(
    (arg) => local_4 === arg || local_4.startsWith(`${arg}/`),
  );
  const local_8 = local_d50c9609.includes(local_4);
  const local_9 = (local_2 || local_7) && !local_8;
  if (local_6) {
    return symbol_073(symbol_062, {
      fallback: null,
      children: symbol_073(local_8e5652b5, {
        children: arg,
      }),
    });
  }
  return symbol_073(local_3825d11b.Provider, {
    value: {
      isHidden: local_3,
    },
    children: symbol_073("div", {
      className: local_e42c74a1.layout,
      children: symbol_073("div", {
        className: `${local_e42c74a1.wrapper} ${local_7 ? local_e42c74a1.wrapperShop : ""}`,
        children: [
          local_9 &&
            (local
              ? symbol_073(local_1ae1f526, {})
              : symbol_073(local_610f3303, {})),
          local_9 && !local && symbol_073(local_945b98e5, {}),
          symbol_073("div", {
            className: local_e42c74a1.content,
            children: arg,
          }),
        ],
      }),
    }),
  });
};
const local_672a1b2c_2 = "c_overlay";
const local_724c774d = "c_card";
const local_fdd4371a = "c_imageWrap";
const local_1d2f8d3d_4 = "c_image";
const local_e148243e_2 = "c_body";
const local_34365a93 = "c_titleRow";
const local_9d9cf508_9 = "c_title";
const local_111bfc92_5 = "c_badge";
const local_36041fd6 = "c_texts";
const local_95ed4c70_4 = "c_text";
const local_e029f614_2 = "c_moreButton";
const local_38263102_2 = "c_buttons";
const local_9e87ce8c_5 = "c_button";
const local_fcc2eb6c_2 = "c_primary";
const local_a394e6fb_2 = "c_secondary";
const local_a8453371 = {
  overlay: local_672a1b2c_2,
  card: local_724c774d,
  imageWrap: local_fdd4371a,
  image: local_1d2f8d3d_4,
  body: local_e148243e_2,
  titleRow: local_34365a93,
  title: local_9d9cf508_9,
  badge: local_111bfc92_5,
  texts: local_36041fd6,
  text: local_95ed4c70_4,
  moreButton: local_e029f614_2,
  buttons: local_38263102_2,
  button: local_9e87ce8c_5,
  primary: local_fcc2eb6c_2,
  secondary: local_a394e6fb_2,
};
const local_66857703 = "seen_announcements";
function fn_ab7a77b5() {
  try {
    const local = localStorage.getItem(local_66857703);
    if (!local) {
      return [];
    }
    const local_2 = JSON.parse(local);
    if (Array.isArray(local_2)) {
      return local_2.filter((arg) => typeof arg === "string");
    }
    return [];
  } catch {
    return [];
  }
}
function fn_e90a3968(arg) {
  try {
    const local = fn_ab7a77b5();
    if (!local.includes(arg)) {
      local.push(arg);
      localStorage.setItem(local_66857703, JSON.stringify(local));
    }
  } catch {}
}
function fn_58b6388b() {
  const local = symbol_007();
  const [local_2, local_3] = symbol_056(null);
  const [local_4, local_5] = symbol_056(false);
  const local_6 = symbol_069(() => {
    local_5(false);
    local_3((arg) => {
      if (arg) {
        fn_e90a3968(arg.id);
      }
      return null;
    });
  }, []);
  symbol_077(() => {
    if (!local) {
      return;
    }
    let local = false;
    local_91547acf
      .getAnnouncements()
      .then((arg) => {
        if (local) {
          return;
        }
        const local = fn_ab7a77b5();
        const local_2 = arg.find((arg) => arg?.id && !local.includes(arg.id));
        if (local_2) {
          local_3(local_2);
        }
      })
      .catch(() => {});
    return () => {
      local = true;
    };
  }, [local]);
  symbol_077(() => {
    if (!local_2) {
      return;
    }
    const local = (arg) => {
      if (arg.key === "Escape") {
        local_6();
      }
    };
    const local_2 = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", local);
    return () => {
      document.documentElement.style.overflow = local_2;
      document.removeEventListener("keydown", local);
    };
  }, [local_2, local_6]);
  if (!local_2) {
    return null;
  }
  const local_7 = (arg) => {
    const local = arg.action;
    local?.type === "link" &&
      local.url &&
      (/^https?:\/\//.test(local.url)
        ? window.open(local.url, "_blank", "noopener,noreferrer")
        : symbol_057(local.url));
    local_6();
  };
  const local_8 = (arg) => {
    if (arg.target === arg.currentTarget) {
      local_6();
    }
  };
  const {
    image: local_9,
    badge: local_10,
    title: local_11,
    description: local_12,
    additional_text: local_13,
    buttons: local_14,
  } = local_2;
  return symbol_001(
    symbol_073("div", {
      className: local_a8453371.overlay,
      onClick: local_8,
      children: symbol_073("div", {
        className: local_a8453371.card,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": local_11,
        children: [
          local_9?.url &&
            symbol_073("div", {
              className: local_a8453371.imageWrap,
              style:
                local_9.width && local_9.height
                  ? {
                      aspectRatio: `${local_9.width} / ${local_9.height}`,
                    }
                  : undefined,
              children: symbol_073("img", {
                className: local_a8453371.image,
                src: local_9.url,
                alt: "",
                width: local_9.width,
                height: local_9.height,
              }),
            }),
          symbol_073("div", {
            className: local_a8453371.body,
            children: [
              symbol_073("div", {
                className: local_a8453371.titleRow,
                children: [
                  symbol_073("h2", {
                    className: local_a8453371.title,
                    children: local_11,
                  }),
                  local_10 &&
                    symbol_073("span", {
                      className: local_a8453371.badge,
                      children: local_10,
                    }),
                ],
              }),
              (local_12 || local_13) &&
                symbol_073("div", {
                  className: local_a8453371.texts,
                  children: [
                    local_12 &&
                      symbol_073("p", {
                        className: local_a8453371.text,
                        children: local_12,
                      }),
                    local_13 &&
                      (local_4
                        ? symbol_073("p", {
                            className: local_a8453371.text,
                            children: local_13,
                          })
                        : symbol_073("button", {
                            type: "button",
                            className: local_a8453371.moreButton,
                            onClick: () => local_5(true),
                            children: "Подробнее",
                          })),
                  ],
                }),
              !!local_14?.length &&
                symbol_073("div", {
                  className: local_a8453371.buttons,
                  children: local_14.map((arg, arg_2) =>
                    symbol_073(
                      "button",
                      {
                        type: "button",
                        className: `${local_a8453371.button} ${arg.style === "secondary" ? local_a8453371.secondary : local_a8453371.primary}`,
                        onClick: () => local_7(arg),
                        children: arg.title,
                      },
                      arg_2,
                    ),
                  ),
                }),
            ],
          }),
        ],
      }),
    }),
    document.body,
  );
}
const local_f06debfc_71 = 3000;
const local_f06debfc_72 = 500;
const local_f06debfc_73 = 30000;
const local_6717f24f = [
  "mousemove",
  "keydown",
  "touchstart",
  "wheel",
  "scroll",
];
function fn_7d2d0183() {
  const local = symbol_054((arg) => arg.applyStatsUpdates);
  const local_2 = local_9812c6ee_3();
  symbol_077(() => {
    if (local_2 !== "authenticated") {
      return;
    }
    let local = null;
    let local_2 = Infinity;
    let local_3 = false;
    let local_4 = false;
    let local_5 = Date.now();
    const local_6 = () => Date.now() - local_5 > local_f06debfc_73;
    const local_7 = async () => {
      if (local_3 || (typeof document !== "undefined" && document.hidden)) {
        return;
      }
      if (local_6()) {
        local_4 = true;
        if (local !== null) {
          clearTimeout(local);
          local = null;
        }
        local_2 = Infinity;
        return;
      }
      const local = local_89524df6.getSnapshot();
      if (local.length === 0) {
        return;
      }
      local_3 = true;
      const local_2 = Date.now();
      try {
        const local = local.length > 20 ? local.slice(0, 20) : local;
        const local_2 = await symbol_068.getPostsStats(local);
        if (local_2.length > 0) {
          local(local_2, local_2);
        }
      } catch {
      } finally {
        local_3 = false;
      }
    };
    const local_8 = (arg) => {
      const local = Date.now() + arg;
      if (!(local >= local_2)) {
        if (local !== null) {
          clearTimeout(local);
        }
        local_2 = local;
        local = setTimeout(async () => {
          local = null;
          local_2 = Infinity;
          await local_7();
          if (!local_4) {
            local_8(local_f06debfc_71);
          }
        }, arg);
      }
    };
    const local_9 = () => {
      local_5 = Date.now();
      if (local_4) {
        local_4 = false;
        local_8(0);
      }
    };
    for (const local of local_6717f24f) {
      window.addEventListener(local, local_9, {
        passive: true,
      });
    }
    const local_10 = () => {
      if (!document.hidden) {
        local_9();
      }
    };
    document.addEventListener("visibilitychange", local_10);
    const local_11 = local_89524df6.onAppear(() => {
      if (!(local_4 || document.hidden)) {
        local_8(local_f06debfc_72);
      }
    });
    local_8(local_f06debfc_71);
    return () => {
      if (local !== null) {
        clearTimeout(local);
      }
      document.removeEventListener("visibilitychange", local_10);
      for (const local of local_6717f24f) {
        window.removeEventListener(local, local_9);
      }
      local_11();
    };
  }, [local, local_2]);
}
const local_8d71271f = () =>
  symbol_073(symbol_012, {
    kind: "notFound",
    title: "Страница не найдена",
    description:
      "Такой страницы нет — возможно, ссылка устарела или в адресе опечатка.",
    action: symbol_073(symbol_003, {
      onClick: () => symbol_057("./site/index.html"),
      children: "Вернуться на главную",
    }),
  });
const local_458fcd7d_2 = "c_skeleton";
const local_582c91f4 = "c_inner";
const local_4d84dbb6_8 = "c_content";
const local_f1c23efb_6 = "c_header";
const local_e148243e_3 = "c_body";
const local_8c4f8b4b_8 = "c_actions";
const local_59af08d5_2 = "c_shimmer";
const local_5d627137_3 = "c_avatar";
const local_8d0c49b2_2 = "c_name";
const local_15aa885a_3 = "c_time";
const local_aabd87fe_2 = "c_line";
const local_a725f8e4_2 = "c_w100";
const local_e60fb125 = "c_w92";
const local_687afd97_2 = "c_w85";
const local_3d9c5124 = "c_w78";
const local_5295db5d_2 = "c_w65";
const local_a2fc1519_2 = "c_w50";
const local_e05be680_2 = "c_w40";
const local_65cb46b6_2 = "c_media";
const local_da39f5b1 = "c_mediaTall";
const local_51204fb7 = "c_pill";
const local_e9ccbd22_2 = "c_list";
const local_382fe44d = {
  skeleton: local_458fcd7d_2,
  inner: local_582c91f4,
  content: local_4d84dbb6_8,
  header: local_f1c23efb_6,
  body: local_e148243e_3,
  actions: local_8c4f8b4b_8,
  shimmer: local_59af08d5_2,
  avatar: local_5d627137_3,
  name: local_8d0c49b2_2,
  time: local_15aa885a_3,
  line: local_aabd87fe_2,
  w100: local_a725f8e4_2,
  w92: local_e60fb125,
  w85: local_687afd97_2,
  w78: local_3d9c5124,
  w65: local_5295db5d_2,
  w50: local_a2fc1519_2,
  w40: local_e05be680_2,
  media: local_65cb46b6_2,
  mediaTall: local_da39f5b1,
  pill: local_51204fb7,
  list: local_e9ccbd22_2,
};
function fn_af1450fa(arg) {
  switch (arg) {
    case "short":
      return symbol_073("div", {
        className: local_382fe44d.body,
        children: symbol_073("div", {
          className: `${local_382fe44d.shimmer} ${local_382fe44d.line} ${local_382fe44d.w65}`,
        }),
      });
    case "medium":
      return symbol_073("div", {
        className: local_382fe44d.body,
        children: [
          symbol_073("div", {
            className: `${local_382fe44d.shimmer} ${local_382fe44d.line} ${local_382fe44d.w100}`,
          }),
          symbol_073("div", {
            className: `${local_382fe44d.shimmer} ${local_382fe44d.line} ${local_382fe44d.w78}`,
          }),
        ],
      });
    case "long":
      return symbol_073("div", {
        className: local_382fe44d.body,
        children: [
          symbol_073("div", {
            className: `${local_382fe44d.shimmer} ${local_382fe44d.line} ${local_382fe44d.w100}`,
          }),
          symbol_073("div", {
            className: `${local_382fe44d.shimmer} ${local_382fe44d.line} ${local_382fe44d.w92}`,
          }),
          symbol_073("div", {
            className: `${local_382fe44d.shimmer} ${local_382fe44d.line} ${local_382fe44d.w85}`,
          }),
          symbol_073("div", {
            className: `${local_382fe44d.shimmer} ${local_382fe44d.line} ${local_382fe44d.w50}`,
          }),
        ],
      });
    case "media":
      return symbol_073("div", {
        className: local_382fe44d.body,
        children: [
          symbol_073("div", {
            className: `${local_382fe44d.shimmer} ${local_382fe44d.line} ${local_382fe44d.w92}`,
          }),
          symbol_073("div", {
            className: `${local_382fe44d.shimmer} ${local_382fe44d.line} ${local_382fe44d.w40}`,
          }),
          symbol_073("div", {
            className: `${local_382fe44d.shimmer} ${local_382fe44d.media}`,
          }),
        ],
      });
    case "mediaTall":
      return symbol_073("div", {
        className: local_382fe44d.body,
        children: [
          symbol_073("div", {
            className: `${local_382fe44d.shimmer} ${local_382fe44d.line} ${local_382fe44d.w78}`,
          }),
          symbol_073("div", {
            className: `${local_382fe44d.shimmer} ${local_382fe44d.mediaTall}`,
          }),
        ],
      });
  }
}
function fn_909c5e8a({ variant: arg = "medium", delayMs: arg_2 = 0 }) {
  const local = arg_2
    ? {
        "--shimmer-delay": `${arg_2}ms`,
      }
    : undefined;
  return symbol_073("article", {
    className: local_382fe44d.skeleton,
    "aria-hidden": "true",
    style: local,
    children: symbol_073("div", {
      className: local_382fe44d.inner,
      children: [
        symbol_073("div", {
          className: `${local_382fe44d.shimmer} ${local_382fe44d.avatar}`,
        }),
        symbol_073("div", {
          className: local_382fe44d.content,
          children: [
            symbol_073("div", {
              className: local_382fe44d.header,
              children: [
                symbol_073("div", {
                  className: `${local_382fe44d.shimmer} ${local_382fe44d.name}`,
                }),
                symbol_073("div", {
                  className: `${local_382fe44d.shimmer} ${local_382fe44d.time}`,
                }),
              ],
            }),
            fn_af1450fa(arg),
            symbol_073("div", {
              className: local_382fe44d.actions,
              children: [
                symbol_073("div", {
                  className: `${local_382fe44d.shimmer} ${local_382fe44d.pill}`,
                }),
                symbol_073("div", {
                  className: `${local_382fe44d.shimmer} ${local_382fe44d.pill}`,
                }),
                symbol_073("div", {
                  className: `${local_382fe44d.shimmer} ${local_382fe44d.pill}`,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const local_b9554821 = ["medium", "media", "short", "long", "mediaTall"];
function symbol_017({ count: arg = 4 }) {
  return symbol_073("div", {
    className: local_382fe44d.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка постов",
    children: Array.from(
      {
        length: arg,
      },
      (arg, arg_2) =>
        symbol_073(
          fn_909c5e8a,
          {
            variant: local_b9554821[arg_2 % local_b9554821.length],
            delayMs: arg_2 * 120,
          },
          arg_2,
        ),
    ),
  });
}
const local_d5eb7445 = "c_virtualFeed";
const local_76955cb6_2 = "c_virtualContent";
const local_db38bffd_2 = "c_virtualItem";
const local_a16b021c = {
  virtualFeed: local_d5eb7445,
  virtualContent: local_76955cb6_2,
  virtualItem: local_db38bffd_2,
};
function symbol_023({
  posts: arg,
  renderPost: arg_2,
  isLoadingMore: arg_3 = false,
  hasMore: arg_4 = false,
  onLoadMore: arg_5,
  estimatedPostHeight: arg_6 = 300,
  overscan: arg_7 = 5,
  gap: arg_8 = 10,
  initialMeasuredHeights: arg_9,
  onMeasuredHeightsChange: arg_10,
}) {
  const local = symbol_002(null);
  const local_2 = symbol_002(false);
  const [local_3, local_4] = symbol_056(null);
  const [local_5, local_6] = symbol_056(window.innerWidth < 1174);
  const local_7 = symbol_054((arg) => arg.highlightedPostId);
  const local_8 = symbol_054((arg) => arg.clearHighlightedPost);
  symbol_077(() => {
    const local = () => local_6(window.innerWidth < 1174);
    window.addEventListener("resize", local);
    return () => window.removeEventListener("resize", local);
  }, []);
  const local_9 = local_5 ? 0 : arg_8;
  const local_10 = symbol_069(
    (arg) => {
      const local = arg[arg];
      if (!local) {
        return arg;
      }
      const local_2 = local.attachments?.[0]?.id ?? "";
      return `${local.id}-${local_2}`;
    },
    [arg],
  );
  const {
    virtualItems: local_11,
    totalSize: local_12,
    measureElement: local_13,
    getMeasuredHeights: local_14,
  } = fn_f204a1a3({
    itemCount: arg.length,
    estimatedItemHeight: arg_6,
    overscan: arg_7,
    gap: local_9,
    getItemKey: local_10,
    initialMeasuredHeights: arg_9,
  });
  symbol_077(
    () => () => {
      if (arg_10) {
        arg_10(local_14());
      }
    },
    [arg_10, local_14],
  );
  symbol_077(() => {
    if (!local_7) {
      return;
    }
    local.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    const local = setTimeout(() => {
      local_4(local_7);
      local_8();
      setTimeout(() => local_4(null), 600);
    }, 300);
    return () => clearTimeout(local);
  }, [local_7, local_8]);
  const local_15 = symbol_069(() => {
    if (!arg_5 || !arg_4 || arg_3) {
      return;
    }
    const local =
      document.documentElement.scrollHeight -
      window.scrollY -
      window.innerHeight;
    if (local < 500 && !local_2.current) {
      local_2.current = true;
      arg_5();
    }
    if (local > 600) {
      local_2.current = false;
    }
  }, [arg_5, arg_4, arg_3]);
  symbol_077(() => {
    if (!arg_3) {
      local_2.current = false;
    }
  }, [arg_3]);
  symbol_077(() => {
    window.addEventListener("scroll", local_15, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", local_15);
  }, [local_15]);
  return symbol_073("div", {
    ref: local,
    className: local_a16b021c.virtualFeed,
    children: [
      symbol_073("div", {
        className: local_a16b021c.virtualContent,
        style: {
          height: `${local_12}px`,
        },
        children: local_11.map((arg) => {
          const local = arg[arg.index];
          if (local) {
            return symbol_073(
              "div",
              {
                ref: (arg) => local_13(arg, arg.index),
                className: local_a16b021c.virtualItem,
                style: {
                  transform: `translateY(${arg.start}px)`,
                },
                children: arg_2(local, arg.index, local.id === local_3),
              },
              arg.key,
            );
          }
          return null;
        }),
      }),
      arg_3 &&
        symbol_073("div", {
          style: {
            marginTop: `${local_9}px`,
          },
          children: symbol_073(fn_909c5e8a, {
            variant: "medium",
          }),
        }),
    ],
  });
}
const local_ef251bc6 = "c_page";
const local_b0d40848 = "c_createPostWrapper";
const local_e4d9221e = "c_tabsWrapper";
const local_0b9431a0 = "c_searchButton";
const local_cd23a337_6 = "c_error";
const local_119f77f9_3 = "c_empty";
const local_76da9dd7 = {
  page: local_ef251bc6,
  createPostWrapper: local_b0d40848,
  tabsWrapper: local_e4d9221e,
  searchButton: local_0b9431a0,
  error: local_cd23a337_6,
  empty: local_119f77f9_3,
};
const local_bcb2f379 = (arg) => {
  const local = symbol_054((arg) => arg.posts);
  const local_2 = symbol_054((arg) => arg.activeFeed);
  const local_3 = symbol_054((arg) => arg.isLoading);
  const local_4 = symbol_054((arg) => arg.isLoadingMore);
  const local_5 = symbol_054((arg) => arg.hasMore);
  const local_6 = symbol_054((arg) => arg.error);
  const local_7 = symbol_054((arg) => arg.feedScrollPosition);
  const local_8 = symbol_054((arg) => arg.feedMeasuredHeights);
  const local_9 = symbol_054((arg) => arg.feedRestoreToken);
  const local_10 = symbol_054((arg) => arg.setActiveFeed);
  const local_11 = symbol_054((arg) => arg.fetchFeed);
  const local_12 = symbol_054((arg) => arg.loadMoreFeed);
  const local_13 = symbol_054((arg) => arg.createPost);
  const local_14 = symbol_054((arg) => arg.cacheFeedHeights);
  const local_15 = symbol_075((arg) => arg.profile);
  const local_16 = symbol_075((arg) => arg.status);
  const local_17 = symbol_002(false);
  const local_18 = symbol_021(() => local.map((arg) => arg.author.id), [local]);
  fn_585b8996(local_18);
  symbol_077(() => {
    if (local_16 === "authenticated" && local.length === 0 && !local_3) {
      local_11();
    }
  }, [local_2, local_16]);
  symbol_028(() => {
    local_17.current ||
      (local.length !== 0 &&
        ((local_17.current = true),
        local_7 > 0 &&
          (window.scrollTo(0, local_7),
          requestAnimationFrame(() => window.scrollTo(0, local_7)))));
  }, [local.length, local_7]);
  const local_19 = symbol_002(null);
  symbol_028(() => {
    if (local_19.current === null) {
      local_19.current = local_9;
      return;
    }
    if (local_19.current === local_9) {
      return;
    }
    local_19.current = local_9;
    const local = local_7;
    window.scrollTo(0, local);
    requestAnimationFrame(() => window.scrollTo(0, local));
  }, [local_9, local_7]);
  const local_20 = symbol_069(
    (arg) => {
      local_14(local_2, arg);
    },
    [local_2, local_14],
  );
  const local_21 = (arg) => {
    const local = ["global", "clan", "following"][arg] ?? "global";
    if (local !== local_2) {
      local_10(local);
    } else if (window.scrollY > 1) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    } else {
      local_11(true);
    }
  };
  const local_22 = async (arg, arg_2, arg_3, arg_4) => {
    if (local_15) {
      await local_13({
        wallOwnerId: local_15.id,
        text: arg,
        spans: arg_2,
        attachments: arg_3,
        poll: arg_4,
      });
    }
  };
  const local_23 = symbol_069(() => {
    if (local_5 && !local_4) {
      local_12();
    }
  }, [local_5, local_4, local_12]);
  const local_24 =
    local_2 === "global"
      ? "feed_global"
      : local_2 === "following"
        ? "feed_following"
        : "feed_clan";
  const local_25 = symbol_069(
    (arg, arg_2, arg_3) =>
      symbol_073(
        symbol_055,
        {
          post: arg,
          isHighlighted: arg_3,
          source: local_24,
        },
        arg.id,
      ),
    [local_24],
  );
  return symbol_073("div", {
    className: local_76da9dd7.page,
    children: [
      symbol_073("div", {
        className: local_76da9dd7.tabsWrapper,
        children: [
          symbol_073(symbol_013, {
            tabs: ["Для вас", "Лента кланов", "Подписки"],
            activeIndex: local_2 === "global" ? 0 : local_2 === "clan" ? 1 : 2,
            onChange: local_21,
          }),
          symbol_073("a", {
            href: "/search",
            className: local_76da9dd7.searchButton,
            "aria-label": "Поиск",
            children: symbol_073(local_e33d719c, {}),
          }),
        ],
      }),
      symbol_073("div", {
        className: local_76da9dd7.createPostWrapper,
        children: [
          local_15 &&
            symbol_073(symbol_058, {
              src: local_15.avatar ?? "",
              alt: local_15.displayName,
              size: "sm",
            }),
          symbol_073(symbol_015, {
            onSubmit: local_22,
          }),
        ],
      }),
      local_6
        ? symbol_073("div", {
            className: local_76da9dd7.error,
            children: [
              symbol_073("p", {
                children: local_6,
              }),
              symbol_073("button", {
                onClick: () => local_11(),
                children: "Повторить",
              }),
            ],
          })
        : local_3 && local.length === 0
          ? symbol_073(symbol_017, {
              count: 4,
            })
          : local.length === 0
            ? symbol_073("div", {
                className: local_76da9dd7.empty,
                children: "Нет постов",
              })
            : local.length > 0
              ? symbol_073(
                  symbol_023,
                  {
                    posts: local,
                    renderPost: local_25,
                    isLoadingMore: local_4,
                    hasMore: local_5,
                    onLoadMore: local_23,
                    estimatedPostHeight: 250,
                    overscan: 3,
                    initialMeasuredHeights: local_8,
                    onMeasuredHeightsChange: local_20,
                  },
                  local_2,
                )
              : null,
    ],
  });
};
const local_98d04132 = symbol_078(() =>
  symbol_064(
    () => import("./routes/global-video-player.js"),
    local_5b673d6a([32, 28, 14, 33]),
  ).then((arg) => ({
    default: arg.GlobalVideoPlayer,
  })),
);
const local_3f597d55 = symbol_078(() =>
  symbol_064(
    () => import("./routes/hashtag.js"),
    local_5b673d6a([34, 6, 35]),
  ).then((arg) => ({
    default: arg.Hashtag,
  })),
);
const local_44b61a2d = symbol_078(() =>
  symbol_064(
    () => import("./routes/profile.js"),
    local_5b673d6a([36, 37, 1, 2, 38]),
  ).then((arg) => ({
    default: arg.Profile,
  })),
);
const local_dd51dc2e = symbol_078(() =>
  symbol_064(
    () => import("./routes/post-page.js"),
    local_5b673d6a([39, 6, 40]),
  ).then((arg) => ({
    default: arg.PostPage,
  })),
);
const local_67ce3a09 = symbol_078(() =>
  symbol_064(
    () => import("./routes/notifications.js"),
    local_5b673d6a([41, 4, 37, 42]),
  ).then((arg) => ({
    default: arg.Notifications,
  })),
);
const local_da240d58 = symbol_078(() =>
  symbol_064(() => import("./routes/search.js"), local_5b673d6a([43, 44])).then(
    (arg) => ({
      default: arg.Search,
    }),
  ),
);
const local_e757f6d6 = symbol_078(() =>
  symbol_064(
    () => import("./routes/shop-frame.js"),
    local_5b673d6a([45, 46]),
  ).then((arg) => ({
    default: arg.ShopFrame,
  })),
);
const local_d72873f9 = symbol_078(() =>
  symbol_064(
    () => import("./routes/delete-account.js"),
    local_5b673d6a([47, 6, 48]),
  ).then((arg) => ({
    default: arg.DeleteAccount,
  })),
);
const local_2e50693e = symbol_078(() =>
  symbol_064(
    () => import("./routes/terms.js"),
    local_5b673d6a([49, 6, 50]),
  ).then((arg) => ({
    default: arg.Terms,
  })),
);
const local_9294a375 = symbol_078(() =>
  symbol_064(
    () => import("./routes/privacy.js"),
    local_5b673d6a([51, 6, 52]),
  ).then((arg) => ({
    default: arg.Privacy,
  })),
);
const local_e631d126 = symbol_078(() =>
  symbol_064(
    () => import("./routes/cookies.js"),
    local_5b673d6a([53, 6, 54]),
  ).then((arg) => ({
    default: arg.Cookies,
  })),
);
const local_7e8db683 = symbol_078(() =>
  symbol_064(
    () => import("./routes/external-link.js"),
    local_5b673d6a([55, 6, 3, 56]),
  ).then((arg) => ({
    default: arg.ExternalLink,
  })),
);
const local_abff2b23 = symbol_078(() =>
  symbol_064(
    () => import("./routes/support.js"),
    local_5b673d6a([57, 6, 58]),
  ).then((arg) => ({
    default: arg.Support,
  })),
);
const local_258ec8ab = symbol_078(() =>
  symbol_064(
    () => import("./routes/child-safety.js"),
    local_5b673d6a([59, 6, 60]),
  ).then((arg) => ({
    default: arg.ChildSafety,
  })),
);
const local_d0a4bb43 = symbol_078(() =>
  symbol_064(() => import("./routes/event.js"), local_5b673d6a([61, 62])).then(
    (arg) => ({
      default: arg.Event,
    }),
  ),
);
const local_842f5b5a = symbol_078(() =>
  symbol_064(
    () => import("./routes/subscription-terms.js"),
    local_5b673d6a([63, 64, 65, 6]),
  ).then((arg) => ({
    default: arg.SubscriptionTerms,
  })),
);
const local_fc232288 = symbol_078(() =>
  symbol_064(
    () => import("./routes/recurring-terms.js"),
    local_5b673d6a([66, 64, 65, 6]),
  ).then((arg) => ({
    default: arg.RecurringTerms,
  })),
);
const local_0c023eb0 = symbol_078(() =>
  symbol_064(
    () => import("./routes/login.js"),
    local_5b673d6a([67, 68, 69, 70, 71, 72, 73]),
  ).then((arg) => ({
    default: arg.Login,
  })),
);
const local_c56cfae5 = symbol_078(() =>
  symbol_064(
    () => import("./routes/register.js"),
    local_5b673d6a([74, 68, 69, 70, 71, 72, 75]),
  ).then((arg) => ({
    default: arg.Register,
  })),
);
const local_90c62287 = symbol_078(() =>
  symbol_064(
    () => import("./routes/forgot-password.js"),
    local_5b673d6a([76, 68, 69, 72, 77]),
  ).then((arg) => ({
    default: arg.ForgotPassword,
  })),
);
const local_ed3a5f6b = symbol_078(() =>
  symbol_064(
    () => import("./routes/reset-password.js"),
    local_5b673d6a([78, 72, 79]),
  ).then((arg) => ({
    default: arg.ResetPassword,
  })),
);
const local_5926c003 = symbol_078(() =>
  symbol_064(() => import("./routes/verify-email.js"), []).then((arg) => ({
    default: arg.VerifyEmail,
  })),
);
const local_df5e24cd = symbol_078(() =>
  symbol_064(
    () => import("./routes/onboarding.js"),
    local_5b673d6a([80, 81]),
  ).then((arg) => ({
    default: arg.Onboarding,
  })),
);
const local_c5c21362 = symbol_078(() =>
  symbol_064(() => import("./routes/verification.js"), []).then((arg) => ({
    default: arg.Verification,
  })),
);
function fn_8da7f068(arg) {
  const local = arg.match(/^\/@([^/]+)\/?$/);
  if (local) {
    return local[1];
  }
  return null;
}
const local_581e3cd8 = ({ slug: arg }) => {
  if (!arg?.startsWith("@")) {
    return symbol_073(local_8d71271f, {});
  }
  const local = arg.slice(1);
  return symbol_073(local_44b61a2d, {
    username: local,
  });
};
function fn_2fde2b5f() {
  const [local, local_2] = symbol_056(window.location.pathname);
  const local_3 = symbol_029((arg) => arg.isOpen);
  fn_7d2d0183();
  return symbol_073(fn_6f3a9292, {
    children: symbol_073(fn_4ef4b2cc, {
      children: symbol_073(fn_fc99b4db, {
        currentPath: local,
        children: [
          symbol_073(fn_30574445, {}),
          local_3 &&
            symbol_073(symbol_062, {
              fallback: null,
              children: symbol_073(local_98d04132, {}),
            }),
          symbol_073(fn_bd4e493e, {}),
          symbol_073(fn_f2614556, {}),
          symbol_073(fn_58b6388b, {}),
          symbol_073(local_ba097f2c, {
            children: symbol_073(symbol_062, {
              fallback: null,
              children: symbol_073(fn_1889606d, {
                onChange: (arg) => {
                  const local = local;
                  local_2(arg.url);
                  if (arg.url === local) {
                    return;
                  }
                  symbol_019.getState().markNavigated();
                  const local_2 = symbol_054.getState();
                  if (local === "./site/index.html" || local === "") {
                    local_2.setFeedScrollPosition(window.scrollY);
                  } else {
                    const local = fn_8da7f068(local);
                    if (local) {
                      local_2.setProfileScrollPosition(local, window.scrollY);
                    }
                  }
                  const local_3 = arg.url === "./site/index.html";
                  const local_4 = !!fn_8da7f068(arg.url);
                  if (!local_3 && !local_4) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  symbol_073(local_bcb2f379, {
                    path: "./site/index.html",
                  }),
                  symbol_073(local_67ce3a09, {
                    path: "/notifications",
                  }),
                  symbol_073(local_0c023eb0, {
                    path: "/login",
                  }),
                  symbol_073(local_c56cfae5, {
                    path: "/register",
                  }),
                  symbol_073(local_90c62287, {
                    path: "/forgot-password",
                  }),
                  symbol_073(local_ed3a5f6b, {
                    path: "/reset-password",
                  }),
                  symbol_073(local_5926c003, {
                    path: "/verify-email",
                  }),
                  symbol_073(local_2e50693e, {
                    path: "/terms",
                  }),
                  symbol_073(local_9294a375, {
                    path: "/privacy",
                  }),
                  symbol_073(local_e631d126, {
                    path: "/cookies",
                  }),
                  symbol_073(local_df5e24cd, {
                    path: "/onboarding",
                  }),
                  symbol_073(local_da240d58, {
                    path: "/search",
                  }),
                  symbol_073(local_e757f6d6, {
                    path: "/shop/:rest*",
                  }),
                  symbol_073(local_3f597d55, {
                    path: "/hashtag/:name",
                  }),
                  symbol_073(local_7e8db683, {
                    path: "/external",
                  }),
                  symbol_073(local_abff2b23, {
                    path: "/support",
                  }),
                  symbol_073(local_d72873f9, {
                    path: "/delete-account",
                  }),
                  symbol_073(local_258ec8ab, {
                    path: "/child-safety",
                  }),
                  symbol_073(local_d0a4bb43, {
                    path: "/event",
                  }),
                  symbol_073(local_c5c21362, {
                    path: "/verification",
                  }),
                  symbol_073(local_842f5b5a, {
                    path: "/subscription-terms",
                  }),
                  symbol_073(local_fc232288, {
                    path: "/recurring-terms",
                  }),
                  symbol_073(local_dd51dc2e, {
                    path: "/:username/post/:postId",
                  }),
                  symbol_073(local_581e3cd8, {
                    path: "/:slug",
                  }),
                  symbol_073(local_8d71271f, {
                    default: true,
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
fn_909ba931(document.getElementById("root")).render(
  symbol_073(local_f090a36f_17, {
    children: symbol_073(clazz_b30b8e71, {
      fallback: symbol_073("div", {
        children: "Something went wrong",
      }),
      children: symbol_073(fn_2fde2b5f, {}),
    }),
  }),
);
export {
  symbol_001,
  symbol_002,
  symbol_003,
  symbol_004,
  symbol_005,
  symbol_006,
  symbol_007,
  symbol_008,
  symbol_009,
  symbol_010,
  symbol_011,
  symbol_012,
  symbol_013,
  symbol_014,
  symbol_015,
  symbol_016,
  symbol_017,
  symbol_018,
  symbol_019,
  symbol_020,
  symbol_021,
  symbol_022,
  symbol_023,
  symbol_024,
  symbol_025,
  symbol_026,
  symbol_027,
  symbol_028,
  symbol_029,
  symbol_030,
  symbol_031,
  symbol_032,
  symbol_033,
  symbol_034,
  symbol_035,
  symbol_036,
  symbol_037,
  symbol_038,
  symbol_039,
  symbol_040,
  symbol_041,
  symbol_042,
  symbol_043,
  symbol_044,
  symbol_045,
  symbol_046,
  symbol_047,
  symbol_048,
  symbol_049,
  symbol_050,
  symbol_051,
  symbol_052,
  symbol_053,
  symbol_054,
  symbol_055,
  symbol_056,
  symbol_057,
  symbol_058,
  symbol_059,
  symbol_060,
  symbol_061,
  symbol_062,
  symbol_063,
  symbol_064,
  symbol_065,
  symbol_066,
  symbol_067,
  symbol_068,
  symbol_069,
  symbol_070,
  symbol_071,
  symbol_072,
  symbol_073,
  symbol_074,
  symbol_075,
  symbol_076,
  symbol_077,
  symbol_078,
};
