import {
  symbol_002 as imported,
  symbol_069 as imported_2,
  symbol_073 as imported_3,
  symbol_077 as imported_4,
  ax as imported_5,
  symbol_056 as imported_6,
  symbol_006 as imported_7,
  symbol_053 as imported_8,
} from "../entry.js";
import { V as imported_9 } from "../components/volume-glyph.js";
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
const local_82353520 = "c_wrapper";
const local_2d2dc45b = "c_track";
const local_966f2da5 = "c_fill";
const local_c7ff5b22 = "c_thumb";
const local_960709d8 = {
  wrapper: local_82353520,
  track: local_2d2dc45b,
  fill: local_966f2da5,
  thumb: local_c7ff5b22,
};
function fn_75fa0972({
  value: arg,
  onChange: arg_2,
  onDragStart: arg_3,
  onDragEnd: arg_4,
}) {
  const local = imported(null);
  const local_2 = imported_2(
    (arg) => {
      const local = local.current;
      if (!local) {
        return;
      }
      const local_2 = local.getBoundingClientRect();
      const local_3 = 1 - (arg - local_2.top) / local_2.height;
      arg_2(Math.max(0, Math.min(1, local_3)));
    },
    [arg_2],
  );
  const local_3 = imported_2(
    (arg) => {
      arg.stopPropagation();
      arg.preventDefault();
      arg_3?.();
      local_2(arg.clientY);
      const local = (arg) => local_2(arg.clientY);
      const local_2 = () => {
        arg_4?.();
        document.removeEventListener("mousemove", local);
        document.removeEventListener("mouseup", local_2);
      };
      document.addEventListener("mousemove", local);
      document.addEventListener("mouseup", local_2);
    },
    [local_2, arg_3, arg_4],
  );
  const local_4 = 7;
  const local_5 = 80;
  const local_6 = local_4;
  const local_7 = local_5 - local_4;
  const local_8 = local_6 + arg * (local_7 - local_6);
  const local_9 = `${local_8}px`;
  return imported_3("div", {
    className: local_960709d8.wrapper,
    onMouseDown: local_3,
    onClick: (arg) => {
      arg.stopPropagation();
      arg.preventDefault();
    },
    children: imported_3("div", {
      ref: local,
      className: local_960709d8.track,
      children: [
        imported_3("div", {
          className: local_960709d8.fill,
          style: {
            height: local_9,
          },
        }),
        imported_3("div", {
          className: local_960709d8.thumb,
          style: {
            bottom: `${local_8}px`,
          },
        }),
      ],
    }),
  });
}
const local_f06debfc = 250;
function fn_b719eab0({
  videoRef: arg,
  vs: arg_2,
  attachmentId: arg_3,
  source: arg_4,
}) {
  const local = imported(0);
  const local_2 = imported(null);
  const local_3 = imported(0);
  imported_4(() => {
    const local = arg.current;
    if (!local || !arg_2 || !arg_3) {
      return;
    }
    const local_2 = () => {
      local_2.current = Date.now();
    };
    const local_3 = () => {
      if (local_2.current !== null) {
        local.current += Date.now() - local_2.current;
        local_2.current = null;
      }
    };
    const local_4 = () => {
      if (local.paused || local_2.current === null) {
        return;
      }
      const local = Date.now();
      local.current += local - local_2.current;
      local_2.current = local;
    };
    const local_5 = () => {
      if (local.duration > 0 && Number.isFinite(local.duration)) {
        local_3.current = Math.round(local.duration * 1000);
      }
    };
    if (!local.paused && local.readyState >= 3) {
      local_2.current = Date.now();
    }
    local.addEventListener("playing", local_2);
    local.addEventListener("pause", local_3);
    local.addEventListener("waiting", local_3);
    local.addEventListener("timeupdate", local_4);
    local.addEventListener("loadedmetadata", local_5);
    if (local.duration > 0 && Number.isFinite(local.duration)) {
      local_3.current = Math.round(local.duration * 1000);
    }
    return () => {
      local.removeEventListener("playing", local_2);
      local.removeEventListener("pause", local_3);
      local.removeEventListener("waiting", local_3);
      local.removeEventListener("timeupdate", local_4);
      local.removeEventListener("loadedmetadata", local_5);
    };
  }, [arg, arg_2, arg_3]);
  const local_4 = imported_2(() => {
    if (!(!arg_2 || !arg_3)) {
      if (local_2.current !== null) {
        local.current += Date.now() - local_2.current;
        local_2.current = null;
      }
      if (local.current >= local_f06debfc && local_3.current > 0) {
        const local = arg_4 === "post_page" || arg_4 === "link";
        imported_5.trackVideoProgress(
          arg_2,
          arg_3,
          local.current,
          local_3.current,
          local ? arg_4 : undefined,
        );
      }
      local.current = 0;
    }
  }, [arg_2, arg_3, arg_4]);
  imported_4(() => () => local_4(), [local_4]);
  return {
    emit: local_4,
  };
}
const local_adb43aea = "c_container";
const local_b75dbab3 = "c_hidden";
const local_44ac62a9 = "c_video";
const local_6573f01d = "c_revealing";
const local_529ee1fe = "c_canvas";
const local_e64243f5 = "c_duration";
const local_e06ef7ad = "c_bottomOverlay";
const local_7e71b37a = "c_volumeControl";
const local_6ab69625 = "c_active";
const local_d9930430 = "c_volumeSlider";
const local_09f868c6 = "c_muteButton";
const local_0ea2feb9 = "c_muteButtonMobile";
const local_93707e4d = "c_controlButton";
const local_66fefc28 = "c_playButton";
const local_381e78b8 = "c_fullscreenButton";
const local_fbad67b4 = "c_progressContainer";
const local_a0489884 = "c_progressTrack";
const local_9954e574 = "c_progressFill";
const local_f21f5012 = "c_scrubbing";
const local_66259d24 = {
  container: local_adb43aea,
  hidden: local_b75dbab3,
  video: local_44ac62a9,
  revealing: local_6573f01d,
  canvas: local_529ee1fe,
  duration: local_e64243f5,
  bottomOverlay: local_e06ef7ad,
  volumeControl: local_7e71b37a,
  active: local_6ab69625,
  volumeSlider: local_d9930430,
  muteButton: local_09f868c6,
  muteButtonMobile: local_0ea2feb9,
  controlButton: local_93707e4d,
  playButton: local_66fefc28,
  fullscreenButton: local_381e78b8,
  progressContainer: local_fbad67b4,
  progressTrack: local_a0489884,
  progressFill: local_9954e574,
  scrubbing: local_f21f5012,
};
const local_bcf4e7ce = parseFloat(localStorage.getItem("video-volume") ?? "1");
let local_a1f22b9b = true;
let local_09086d0f = isNaN(local_bcf4e7ce) ? 1 : local_bcf4e7ce;
const local_a1e12a9e = new Set();
const local_a1e12a9e_2 = new Map();
let local_9b12006c = false;
let local_0a9fda83 = null;
function fn_2d875e90() {
  const local = window.innerHeight / 2;
  let local_2 = null;
  let local_3 = Infinity;
  for (const [local] of local_a1e12a9e_2) {
    const local = local.getBoundingClientRect();
    if (Math.abs(local.top + local.height / 2 - local) < local_3) {
      local_3 = Math.abs(local.top + local.height / 2 - local);
      local_2 = local;
    }
  }
  for (const [local, local_2] of local_a1e12a9e_2) {
    local === local_2 && !local_2.userPaused
      ? local_2.video.paused && local_2.video.play().catch(() => {})
      : local_2.video.paused || local_2.video.pause();
  }
}
function fn_3ec8b813() {
  if (local_0a9fda83 == null) {
    local_0a9fda83 = requestAnimationFrame(() => {
      local_0a9fda83 = null;
      fn_2d875e90();
    });
  }
}
function fn_ba5ad8c7() {
  const local = local_a1e12a9e_2.size > 1;
  if (local !== local_9b12006c) {
    if (local) {
      window.addEventListener("scroll", fn_3ec8b813, {
        passive: true,
      });
    } else {
      window.removeEventListener("scroll", fn_3ec8b813);
    }
    local_9b12006c = local;
  }
}
function fn_a01d1e0a(arg) {
  local_a1f22b9b = arg;
  localStorage.setItem("video-muted", String(arg));
  local_a1e12a9e.forEach((arg) => arg(arg));
}
function fn_34f0bf46(arg) {
  local_09086d0f = arg;
  localStorage.setItem("video-volume", String(arg));
}
function fn_493ae501(arg) {
  const local = Math.floor(arg / 60);
  const local_2 = arg % 60;
  return `${local}:${local_2.toString().padStart(2, "0")}`;
}
function fn_4cc17855() {
  return imported_3("svg", {
    width: "13",
    height: "14",
    viewBox: "0 0 13 14",
    fill: "none",
    "aria-hidden": "true",
    children: imported_3("path", {
      fill: "currentColor",
      d: "M12 5.3a2 2 0 0 1 0 3.4l-9 5c-1.3.8-3-.2-3-1.6V1.9C0 .5 1.7-.5 3 .3z",
    }),
  });
}
function fn_65c560b6() {
  return imported_3("svg", {
    width: "13",
    height: "14",
    viewBox: "0 0 13 14",
    fill: "currentColor",
    "aria-hidden": "true",
    children: [
      imported_3("rect", {
        width: "4",
        height: "14",
        rx: "2",
      }),
      imported_3("rect", {
        x: "9",
        width: "4",
        height: "14",
        rx: "2",
      }),
    ],
  });
}
function fn_49d970dd() {
  return imported_3("svg", {
    width: "19",
    height: "18",
    viewBox: "0 0 25 24",
    fill: "none",
    "aria-hidden": "true",
    children: imported_3("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "3",
      d: "M4 16q0 5 5 5M22 16q0 5-5 5M22 8q0-5-5-5M4 8q0-5 5-5",
    }),
  });
}
export function fn_8957b73e({
  src: arg,
  spoiler: arg_2 = false,
  width: arg_3,
  height: arg_4,
  duration: arg_5,
  className: arg_6 = "",
  postVs: arg_7,
  source: arg_8,
  attachmentId: arg_9,
}) {
  const local = imported(null);
  const local_2 = imported(null);
  const local_3 = imported(null);
  const local_4 = imported(null);
  const local_5 = imported(null);
  const [local_6, local_7] = imported_6(!arg_2);
  const [local_8, local_9] = imported_6(false);
  const [local_10, local_11] = imported_6(false);
  const [local_12, local_13] = imported_6(local_a1f22b9b);
  const [local_14, local_15] = imported_6(local_09086d0f);
  const [local_16, local_17] = imported_6(false);
  const [local_18, local_19] = imported_6(0);
  const [local_20, local_21] = imported_6(false);
  const [local_22, local_23] = imported_6(false);
  const local_24 = imported(false);
  const local_25 = imported(false);
  const local_26 = imported_7();
  const { emit: local_27 } = fn_b719eab0({
    videoRef: local,
    vs: arg_7,
    attachmentId: arg_9,
    source: arg_8,
  });
  const { resetOpacity: local_28 } = imported_8(local_3, local_2, {
    isVisible: local_10 && !local_6 && arg_2,
    isRevealing: local_8,
    onRevealComplete: () => local_7(true),
  });
  imported_4(() => {
    const local = (arg) => {
      local_13(arg);
      if (local.current) {
        local.current.muted = arg;
      }
    };
    local_a1e12a9e.add(local);
    return () => {
      local_a1e12a9e.delete(local);
    };
  }, []);
  imported_4(() => {
    const local = local_2.current;
    if (!local) {
      return;
    }
    const local_2 = new IntersectionObserver(
      (arg) => {
        arg.forEach((arg) => {
          local_11(arg.isIntersecting);
          const local = local.current;
          local &&
            (arg.isIntersecting
              ? ((local.currentTime = 0),
                (local.muted = local_a1f22b9b),
                (local.volume = local_09086d0f),
                local_a1e12a9e_2.set(local, {
                  video: local,
                  userPaused: false,
                }),
                fn_ba5ad8c7(),
                fn_2d875e90())
              : (local_a1e12a9e_2.delete(local),
                fn_ba5ad8c7(),
                fn_2d875e90(),
                local.pause(),
                local_27(),
                (local.currentTime = 0)));
        });
      },
      {
        threshold: 0.3,
      },
    );
    local_2.observe(local);
    return () => {
      local_2.disconnect();
      local_a1e12a9e_2.delete(local);
      fn_ba5ad8c7();
      fn_2d875e90();
      local_27();
    };
  }, [local_6, local_27]);
  imported_4(() => {
    const local = local.current;
    if (!local) {
      return;
    }
    const local_2 = () => {
      if (local_24.current) {
        return;
      }
      const local = local.duration;
      if (!(!Number.isFinite(local) || local <= 0)) {
        local_19((local.currentTime / local) * 100);
      }
    };
    const local_3 = () => local_19(0);
    local.addEventListener("timeupdate", local_2);
    local.addEventListener("loadedmetadata", local_2);
    local.addEventListener("emptied", local_3);
    return () => {
      local.removeEventListener("timeupdate", local_2);
      local.removeEventListener("loadedmetadata", local_2);
      local.removeEventListener("emptied", local_3);
    };
  }, []);
  imported_4(() => {
    const local = local.current;
    if (!local) {
      return;
    }
    const local_2 = () => local_23(true);
    const local_3 = () => local_23(false);
    local.addEventListener("play", local_2);
    local.addEventListener("pause", local_3);
    local_23(!local.paused);
    return () => {
      local.removeEventListener("play", local_2);
      local.removeEventListener("pause", local_3);
    };
  }, []);
  const local_29 = imported_2((arg) => {
    const local = local_5.current;
    const local_2 = local.current;
    if (!local || !local_2) {
      return;
    }
    const local_3 = local.getBoundingClientRect();
    if (local_3.width <= 0) {
      return;
    }
    const local_4 = Math.min(
      1,
      Math.max(0, (arg - local_3.left) / local_3.width),
    );
    if (!(!Number.isFinite(local_2.duration) || local_2.duration <= 0)) {
      local_2.currentTime = local_2.duration * local_4;
      local_19(local_4 * 100);
    }
  }, []);
  const local_30 = imported_2(
    (arg) => {
      arg.stopPropagation();
      local_24.current = true;
      local_21(true);
      const local = arg.currentTarget;
      try {
        local.setPointerCapture(arg.pointerId);
      } catch {}
      local_29(arg.clientX);
      const local_2 = (arg) => local_29(arg.clientX);
      const local_3 = () => {
        try {
          local.releasePointerCapture(arg.pointerId);
        } catch {}
        document.removeEventListener("pointermove", local_2);
        document.removeEventListener("pointerup", local_3);
        document.removeEventListener("pointercancel", local_3);
        window.removeEventListener("blur", local_3);
        local_21(false);
        setTimeout(() => {
          local_24.current = false;
        }, 0);
      };
      document.addEventListener("pointermove", local_2);
      document.addEventListener("pointerup", local_3);
      document.addEventListener("pointercancel", local_3);
      window.addEventListener("blur", local_3);
    },
    [local_29],
  );
  const local_31 = (arg) => {
    arg.stopPropagation();
    if (!(local_25.current || local_24.current)) {
      if (!local_6 && !local_8 && arg_2) {
        local_9(true);
        local_28();
        return;
      }
      local_34();
    }
  };
  const local_32 = (arg) => {
    arg.stopPropagation();
    local_35();
  };
  const local_33 = imported_2((arg) => {
    arg.stopPropagation();
    arg.preventDefault();
    fn_a01d1e0a(!local_a1f22b9b);
  }, []);
  const local_34 = imported_2(() => {
    const local = local.current;
    const local_2 = local_2.current;
    if (!local || !local_2) {
      return;
    }
    const local_3 = local_a1e12a9e_2.get(local_2);
    if (local.paused) {
      if (local_3) {
        local_3.userPaused = false;
      }
      local.play().catch(() => {});
    } else {
      if (local_3) {
        local_3.userPaused = true;
      }
      local.pause();
    }
  }, []);
  const local_35 = imported_2(() => {
    const local = local.current;
    const local_2 = local_2.current;
    if (!local) {
      return;
    }
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
      return;
    }
    const local_3 = local;
    if (local_2?.requestFullscreen) {
      local_2.requestFullscreen().catch(() => {});
    } else if (local_3.webkitEnterFullscreen) {
      local_3.webkitEnterFullscreen();
    }
  }, []);
  const local_36 = imported_2(
    (arg) => {
      arg.stopPropagation();
      arg.preventDefault();
      local_34();
    },
    [local_34],
  );
  const local_37 = imported_2(
    (arg) => {
      arg.stopPropagation();
      arg.preventDefault();
      local_35();
    },
    [local_35],
  );
  const local_38 = imported_2((arg) => {
    local_15(arg);
    fn_34f0bf46(arg);
    if (local.current) {
      local.current.volume = arg;
    }
    if (arg > 0 && local_a1f22b9b) {
      fn_a01d1e0a(false);
    } else if (arg === 0 && !local_a1f22b9b) {
      fn_a01d1e0a(true);
    }
  }, []);
  const local_39 = !local_6 && arg_2;
  return imported_3("div", {
    ref: local_2,
    className: `${local_66259d24.container} ${arg_6} ${local_39 ? local_66259d24.hidden : ""} ${local_8 ? local_66259d24.revealing : ""}`,
    onClick: local_31,
    onDblClick: local_32,
    children: [
      imported_3("video", {
        ref: local,
        src: arg,
        preload: "metadata",
        playsInline: true,
        muted: local_12,
        loop: true,
        className: local_66259d24.video,
        width: arg_3,
        height: arg_4,
      }),
      arg_5 != null &&
        local_39 &&
        imported_3("div", {
          className: local_66259d24.duration,
          children: fn_493ae501(arg_5),
        }),
      (local_6 || !arg_2) &&
        imported_3("div", {
          className: local_66259d24.bottomOverlay,
          children: [
            imported_3("button", {
              className: `${local_66259d24.controlButton} ${local_66259d24.playButton}`,
              onClick: local_36,
              type: "button",
              "aria-label": local_22 ? "Pause" : "Play",
              children: local_22
                ? imported_3(fn_65c560b6, {})
                : imported_3(fn_4cc17855, {}),
            }),
            imported_3("button", {
              className: `${local_66259d24.controlButton} ${local_66259d24.fullscreenButton}`,
              onClick: local_37,
              type: "button",
              "aria-label": "Fullscreen",
              children: imported_3(fn_49d970dd, {}),
            }),
            local_26
              ? imported_3("button", {
                  className: local_66259d24.muteButtonMobile,
                  onClick: local_33,
                  type: "button",
                  "aria-label": local_12 ? "Unmute" : "Mute",
                  children: imported_3(imported_9, {
                    muted: local_12,
                    volume: local_14,
                  }),
                })
              : imported_3("div", {
                  className: `${local_66259d24.volumeControl} ${local_16 ? local_66259d24.active : ""}`,
                  children: [
                    imported_3("div", {
                      className: local_66259d24.volumeSlider,
                      children: imported_3(fn_75fa0972, {
                        value: local_12 ? 0 : local_14,
                        onChange: local_38,
                        onDragStart: () => {
                          local_25.current = true;
                          local_17(true);
                        },
                        onDragEnd: () => {
                          local_17(false);
                          setTimeout(() => {
                            local_25.current = false;
                          }, 0);
                        },
                      }),
                    }),
                    imported_3("button", {
                      className: local_66259d24.muteButton,
                      onClick: local_33,
                      type: "button",
                      "aria-label": local_12 ? "Unmute" : "Mute",
                      children: imported_3(imported_9, {
                        muted: local_12,
                        volume: local_14,
                      }),
                    }),
                  ],
                }),
            imported_3("div", {
              ref: local_4,
              className: local_66259d24.progressContainer,
              onPointerDown: local_30,
              onClick: (arg) => arg.stopPropagation(),
              children: imported_3("div", {
                ref: local_5,
                className: local_66259d24.progressTrack,
                children: imported_3("div", {
                  className: `${local_66259d24.progressFill} ${local_20 ? local_66259d24.scrubbing : ""}`,
                  style: {
                    width: `${local_18}%`,
                  },
                }),
              }),
            }),
          ],
        }),
      local_39 &&
        imported_3("canvas", {
          ref: local_3,
          className: local_66259d24.canvas,
        }),
    ],
  });
}
