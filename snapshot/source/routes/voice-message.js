import {
  ak as imported,
  symbol_021 as imported_2,
  symbol_056 as imported_3,
  symbol_002 as imported_4,
  symbol_077 as imported_5,
  symbol_069 as imported_6,
  symbol_073 as imported_7,
  symbol_048 as imported_8,
} from "../entry.js";
import { I as imported_9, a as imported_10 } from "../components/icon-play.js";
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
const local_57f57962 = imported((arg) => ({
  activeAudioId: null,
  setActiveAudio: (arg) =>
    arg({
      activeAudioId: arg,
    }),
}));
const local_0ee2786e = "c_voiceMessage";
const local_66fefc28 = "c_playButton";
const local_4d84dbb6 = "c_content";
const local_629ac11d = "c_waveform";
const local_46549dc5 = "c_dragging";
const local_b8c5a821 = "c_bar";
const local_7edb0357 = "c_played";
const local_4d1d1199 = "c_info";
const local_15aa885a = "c_time";
const local_e64243f5 = "c_duration";
const local_92418e80 = {
  voiceMessage: local_0ee2786e,
  playButton: local_66fefc28,
  content: local_4d84dbb6,
  waveform: local_629ac11d,
  dragging: local_46549dc5,
  bar: local_b8c5a821,
  played: local_7edb0357,
  info: local_4d1d1199,
  time: local_15aa885a,
  duration: local_e64243f5,
};
const local_f06debfc = 45;
function fn_fb8cfb97(arg) {
  let local = 0;
  for (let local = 0; local < arg.length; local++) {
    const local = arg.charCodeAt(local);
    local = (local << 5) - local + local;
    local = local & local;
  }
  return Math.abs(local);
}
function fn_9c291bbd(arg) {
  const local = [];
  let local_2 = fn_fb8cfb97(arg);
  for (let local = 0; local < local_f06debfc; local++) {
    local_2 = (local_2 * 9301 + 49297) % 233280;
    const local = 0.2 + (local_2 / 233280) * 0.8;
    local.push(local);
  }
  return local;
}
function fn_f1931fe8(arg) {
  if (!isFinite(arg) || isNaN(arg)) {
    return "0:00";
  }
  const local = Math.floor(arg / 60);
  const local_2 = Math.floor(arg % 60);
  return `${local}:${local_2.toString().padStart(2, "0")}`;
}
export function fn_5eac85a0({ src: arg, duration: arg_2 = 0 }) {
  const local = imported_2(() => arg, [arg]);
  const local_2 = imported_2(() => fn_9c291bbd(arg), [arg]);
  const local_3 = local_57f57962((arg) => arg.activeAudioId);
  const local_4 = local_57f57962((arg) => arg.setActiveAudio);
  const [local_5, local_6] = imported_3(true);
  const [local_7, local_8] = imported_3(0);
  const [local_9, local_10] = imported_3(arg_2);
  const [local_11, local_12] = imported_3(false);
  const local_13 = imported_4(null);
  const local_14 = imported_4(null);
  const local_15 = imported_4(null);
  const local_16 = local_3 === local;
  imported_5(() => {
    if (local_3 !== local && local_13.current && !local_13.current.paused) {
      local_13.current.pause();
      if (local_15.current) {
        cancelAnimationFrame(local_15.current);
        local_15.current = null;
      }
    }
  }, [local_3, local]);
  imported_5(() => {
    const local = new Audio(arg);
    local_13.current = local;
    const local_2 = () => {
      local_10(local.duration || arg_2);
      local_6(false);
    };
    const local_3 = () => {
      local_8(0);
      if (local_15.current) {
        cancelAnimationFrame(local_15.current);
        local_15.current = null;
      }
      local_4(null);
    };
    const local_4 = () => {
      local_6(false);
    };
    local.addEventListener("loadedmetadata", local_2);
    local.addEventListener("ended", local_3);
    local.addEventListener("error", local_4);
    return () => {
      local.removeEventListener("loadedmetadata", local_2);
      local.removeEventListener("ended", local_3);
      local.removeEventListener("error", local_4);
      local.pause();
      local_13.current = null;
      if (local_15.current) {
        cancelAnimationFrame(local_15.current);
      }
      if (local_57f57962.getState().activeAudioId === local) {
        local_4(null);
      }
    };
  }, [arg, arg_2, local, local_4]);
  const local_17 = imported_6(() => {
    if (local_13.current) {
      local_8(local_13.current.currentTime);
      local_15.current = requestAnimationFrame(local_17);
    }
  }, []);
  const local_18 = imported_6(() => {
    const local = local_13.current;
    !local ||
      local_5 ||
      (local_16
        ? (local.pause(),
          local_15.current &&
            (cancelAnimationFrame(local_15.current), (local_15.current = null)),
          local_4(null))
        : (local_4(local), local.play(), local_17()));
  }, [local_16, local_5, local, local_4, local_17]);
  const local_19 = imported_6(
    (arg) => {
      if (!local_14.current || !local_9) {
        return 0;
      }
      const local = local_14.current.getBoundingClientRect();
      const local_2 = arg.clientX;
      return (
        Math.max(0, Math.min(local_2 - local.left, local.width)) / local.width
      );
    },
    [local_9],
  );
  const local_20 = imported_6(
    (arg) => {
      const local = local_13.current;
      if (!local || !local_9 || local_11) {
        return;
      }
      const local_2 = local_19(arg);
      local.currentTime = local_2 * local_9;
      local_8(local.currentTime);
    },
    [local_9, local_11, local_19],
  );
  const local_21 = imported_6(
    (arg) => {
      const local = local_13.current;
      if (!local || !local_9) {
        return;
      }
      local_12(true);
      const local_2 = local_19(arg);
      local.currentTime = local_2 * local_9;
      local_8(local.currentTime);
    },
    [local_9, local_19],
  );
  imported_5(() => {
    if (!local_11) {
      return;
    }
    const local = (arg) => {
      const local = local_13.current;
      if (!local || !local_9) {
        return;
      }
      const local_2 = local_19(arg);
      local.currentTime = local_2 * local_9;
      local_8(local.currentTime);
    };
    const local_2 = () => {
      local_12(false);
    };
    document.addEventListener("mousemove", local);
    document.addEventListener("mouseup", local_2);
    return () => {
      document.removeEventListener("mousemove", local);
      document.removeEventListener("mouseup", local_2);
    };
  }, [local_11, local_9, local_19]);
  const local_22 = local_9 > 0 ? local_7 / local_9 : 0;
  return imported_7("div", {
    className: `${local_92418e80.voiceMessage} ${local_16 ? local_92418e80.playing : ""}`,
    children: [
      imported_7("button", {
        className: local_92418e80.playButton,
        onClick: local_18,
        disabled: local_5,
        children: local_5
          ? imported_7(imported_8, {
              size: 18,
            })
          : local_16
            ? imported_7(imported_9, {
                size: 18,
              })
            : imported_7(imported_10, {
                size: 18,
              }),
      }),
      imported_7("div", {
        className: local_92418e80.content,
        children: [
          imported_7("div", {
            ref: local_14,
            className: `${local_92418e80.waveform} ${local_11 ? local_92418e80.dragging : ""}`,
            onClick: local_20,
            onMouseDown: local_21,
            children: local_2.map((arg, arg_2) => {
              const local = (arg_2 + 0.5) / local_2.length <= local_22;
              return imported_7(
                "div",
                {
                  className: `${local_92418e80.bar} ${local ? local_92418e80.played : ""}`,
                  style: {
                    height: `${Math.max(4, arg * 24)}px`,
                  },
                },
                arg_2,
              );
            }),
          }),
          imported_7("div", {
            className: local_92418e80.info,
            children: [
              imported_7("span", {
                className: local_92418e80.time,
                children: fn_f1931fe8(
                  local_16 || local_7 > 0 ? local_7 : local_9,
                ),
              }),
              (local_16 || local_7 > 0) &&
                imported_7("span", {
                  className: local_92418e80.duration,
                  children: ["../site/index.html", fn_f1931fe8(local_9)],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { fn_5eac85a0 as default };
