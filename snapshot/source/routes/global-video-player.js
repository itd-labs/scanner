import {
  symbol_002 as imported,
  symbol_067 as imported_2,
  symbol_071 as imported_3,
  symbol_029 as imported_4,
  symbol_001 as imported_5,
  symbol_054 as imported_6,
  symbol_058 as imported_7,
  symbol_028 as imported_8,
} from "../entry.js";
import { u as imported_9 } from "../shared/use-body-scroll-lock.js";
import { V as imported_10 } from "../components/volume-glyph.js";
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
function fn_4b406778({
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
            height: `${local_8}px`,
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
const local_672a1b2c = "c_overlay";
const local_bd5f9277 = "c_chrome";
const local_cc8fa504 = "c_closing";
const local_3d40993b = "c_backdrop";
const local_0888f962 = "c_overlayFade";
const local_96021100 = "c_stage";
const local_44ac62a9 = "c_video";
const local_a0a69816 = "c_poster";
const local_e06ef7ad = "c_bottomOverlay";
const local_93707e4d = "c_controlButton";
const local_66fefc28 = "c_playButton";
const local_15aa885a = "c_time";
const local_0df4a777 = "c_speedButton";
const local_7e71b37a = "c_volumeControl";
const local_1787e340 = "c_volumeActive";
const local_d9930430 = "c_volumeSlider";
const local_09f868c6 = "c_muteButton";
const local_381e78b8 = "c_fullscreenButton";
const local_fbad67b4 = "c_progressContainer";
const local_a0489884 = "c_progressTrack";
const local_dfdc7264 = "c_progressBuffered";
const local_9954e574 = "c_progressFill";
const local_f21f5012 = "c_scrubbing";
const local_2ba33e70 = {
  overlay: local_672a1b2c,
  chrome: local_bd5f9277,
  closing: local_cc8fa504,
  backdrop: local_3d40993b,
  overlayFade: local_0888f962,
  stage: local_96021100,
  video: local_44ac62a9,
  poster: local_a0a69816,
  bottomOverlay: local_e06ef7ad,
  controlButton: local_93707e4d,
  playButton: local_66fefc28,
  time: local_15aa885a,
  speedButton: local_0df4a777,
  volumeControl: local_7e71b37a,
  volumeActive: local_1787e340,
  volumeSlider: local_d9930430,
  muteButton: local_09f868c6,
  fullscreenButton: local_381e78b8,
  progressContainer: local_fbad67b4,
  progressTrack: local_a0489884,
  progressBuffered: local_dfdc7264,
  progressFill: local_9954e574,
  scrubbing: local_f21f5012,
};
const local_f06debfc = 280;
const local_b45f1b6a = "cubic-bezier(0.32, 0.72, 0, 1)";
const local_a3e1b3a5 = [0.5, 1, 1.5, 2];
function fn_e1cfa157(arg) {
  if (!isFinite(arg) || arg < 0) {
    return "0:00";
  }
  const local = Math.floor(arg / 60);
  const local_2 = Math.floor(arg % 60);
  return `${local}:${String(local_2).padStart(2, "0")}`;
}
function fn_e4c56f65(arg, arg_2) {
  const local = Math.min(window.innerWidth / arg, window.innerHeight / arg_2);
  return {
    width: Math.round(arg * local),
    height: Math.round(arg_2 * local),
  };
}
function fn_c9f9dd54(arg) {
  const local = parseFloat(arg ?? "");
  if (Number.isFinite(local)) {
    return local;
  }
  return 0;
}
const local_bcf4e7ce = parseFloat(localStorage.getItem("video-volume") ?? "1");
const local_a2e58ed8 = Number.isNaN(local_bcf4e7ce) ? 1 : local_bcf4e7ce;
export function fn_055e6b10() {
  const local = imported_4((arg) => arg.isOpen);
  const local_2 = imported_4((arg) => arg.options);
  const local_3 = imported_4((arg) => arg.session);
  const local_4 = imported_4((arg) => arg.close);
  if (!local || !local_2) {
    return null;
  }
  return imported_5(
    imported_3(
      fn_d2c81560,
      {
        options: local_2,
        onUnmount: local_4,
      },
      local_3,
    ),
    document.body,
  );
}
function fn_d2c81560({ options: arg, onUnmount: arg_2 }) {
  const local = imported(null);
  const local_2 = imported(null);
  const local_3 = imported(null);
  const local_4 = imported(null);
  const [local_5, local_6] = imported_6(false);
  const [local_7, local_8] = imported_6(arg.startTime ?? 0);
  const [local_9, local_10] = imported_6(0);
  const [local_11, local_12] = imported_6(local_a2e58ed8);
  const [local_13, local_14] = imported_6(false);
  const [local_15, local_16] = imported_6(1);
  const [local_17, local_18] = imported_6(false);
  const [local_19, local_20] = imported_6(false);
  const [local_21, local_22] = imported_6(!!arg.poster);
  const [local_23, local_24] = imported_6(() => {
    if (arg.width && arg.height) {
      return {
        w: arg.width,
        h: arg.height,
      };
    }
    const local = arg.sourceRect;
    if (local && local.width > 0 && local.height > 0) {
      return {
        w: local.width,
        h: local.height,
      };
    }
    return {
      w: 16,
      h: 9,
    };
  });
  const [local_25, local_26] = imported_6({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  const local_27 = imported(false);
  const local_28 = imported(false);
  const local_29 = imported(false);
  imported_9();
  const local_30 = fn_e4c56f65(local_23.w, local_23.h);
  imported_7(() => {
    const local = () =>
      local_26({
        w: window.innerWidth,
        h: window.innerHeight,
      });
    window.addEventListener("resize", local);
    return () => window.removeEventListener("resize", local);
  }, []);
  imported_8(() => {
    const local = local_2.current;
    const local_2 = arg.sourceRect;
    if (!local || !local_2) {
      return;
    }
    const local_3 = local.getBoundingClientRect();
    if (local_3.width <= 0 || local_3.height <= 0) {
      return;
    }
    const local_4 = local_2.width / local_3.width;
    const local_5 = local_2.height / local_3.height;
    const local_6 =
      local_2.left + local_2.width / 2 - (local_3.left + local_3.width / 2);
    const local_7 =
      local_2.top + local_2.height / 2 - (local_3.top + local_3.height / 2);
    const local_8 = fn_c9f9dd54(local_2.borderRadius);
    local.animate(
      [
        {
          transform: `translate(${local_6}px, ${local_7}px) scale(${local_4}, ${local_5})`,
          borderRadius: `${local_8 / Math.max(local_4, 0.01)}px`,
        },
        {
          transform: "none",
          borderRadius: "0px",
        },
      ],
      {
        duration: local_f06debfc,
        easing: local_b45f1b6a,
        fill: "backwards",
      },
    );
  }, []);
  const local_31 = imported_2(() => {
    if (local_27.current) {
      return;
    }
    local_27.current = true;
    const local = local_3.current;
    arg.onCloseStart?.(local?.currentTime ?? 0);
    const local_2 = local.current;
    const local_3 = local_2.current;
    local_2?.classList.add(local_2ba33e70.closing);
    const local_4 = arg.resolveCloseRect?.() ?? arg.sourceRect ?? null;
    if (!local_3 || !local_4) {
      local_3?.animate(
        [
          {
            opacity: 1,
          },
          {
            opacity: 0,
          },
        ],
        {
          duration: 200,
          easing: "ease-out",
          fill: "forwards",
        },
      );
      setTimeout(arg_2, 210);
      return;
    }
    const local_5 = local_3.getBoundingClientRect();
    const local_6 = local_4.width / local_5.width;
    const local_7 = local_4.height / local_5.height;
    const local_8 =
      local_4.left + local_4.width / 2 - (local_5.left + local_5.width / 2);
    const local_9 =
      local_4.top + local_4.height / 2 - (local_5.top + local_5.height / 2);
    const local_10 = fn_c9f9dd54(local_4.borderRadius);
    local_3
      .animate(
        [
          {
            transform: "none",
            borderRadius: "0px",
          },
          {
            transform: `translate(${local_8}px, ${local_9}px) scale(${local_6}, ${local_7})`,
            borderRadius: `${local_10 / Math.max(local_6, 0.01)}px`,
          },
        ],
        {
          duration: local_f06debfc,
          easing: local_b45f1b6a,
          fill: "forwards",
        },
      )
      .addEventListener("finish", arg_2);
  }, [arg, arg_2]);
  imported_7(() => {
    const local = local_3.current;
    if (local) {
      local.volume = local_a2e58ed8;
      local.playbackRate = local_a3e1b3a5[1];
      if (arg.startTime && arg.startTime > 0) {
        local.currentTime = arg.startTime;
      }
      local
        .play()
        .then(() => local_6(true))
        .catch(() => {
          local.muted = true;
          local_14(true);
          local
            .play()
            .then(() => local_6(true))
            .catch(() => {});
        });
    }
  }, []);
  imported_7(() => {
    const local = local_3.current;
    return () => {
      if (local) {
        try {
          local.pause();
          local.removeAttribute("src");
          local.load();
        } catch {}
      }
    };
  }, []);
  imported_7(() => {
    const local = local_3.current;
    if (!local || !arg.poster) {
      return;
    }
    let local_2 = false;
    const local_3 = () => {
      if (!local_2) {
        local_22(false);
      }
    };
    const local_4 = local.requestVideoFrameCallback;
    if (typeof local_4 === "function") {
      local_4.call(local, local_3);
      return () => {
        local_2 = true;
      };
    }
    const local_5 = () => requestAnimationFrame(local_3);
    local.addEventListener("playing", local_5, {
      once: true,
    });
    return () => {
      local_2 = true;
      local.removeEventListener("playing", local_5);
    };
  }, []);
  imported_7(() => {
    if (!local_5) {
      return;
    }
    let local = 0;
    const local_2 = () => {
      const local = local_3.current;
      if (local && !local_28.current) {
        local_8(local.currentTime);
      }
      local = requestAnimationFrame(local_2);
    };
    local = requestAnimationFrame(local_2);
    return () => cancelAnimationFrame(local);
  }, [local_5]);
  const [local_32, local_33] = imported_6([]);
  imported_7(() => {
    const local = local_3.current;
    if (!local) {
      return;
    }
    const local_2 = () => {
      const local = local.duration;
      if (!Number.isFinite(local) || local <= 0) {
        return;
      }
      const local_2 = [];
      for (let local = 0; local < local.buffered.length; local++) {
        const local = local.buffered.start(local);
        const local_2 = local.buffered.end(local);
        local_2.push({
          left: (local / local) * 100,
          width: ((local_2 - local) / local) * 100,
        });
      }
      local_33(local_2);
    };
    local.addEventListener("progress", local_2);
    local.addEventListener("loadedmetadata", local_2);
    local.addEventListener("durationchange", local_2);
    local.addEventListener("seeked", local_2);
    local_2();
    return () => {
      local.removeEventListener("progress", local_2);
      local.removeEventListener("loadedmetadata", local_2);
      local.removeEventListener("durationchange", local_2);
      local.removeEventListener("seeked", local_2);
    };
  }, []);
  const local_34 = imported_2(() => {
    const local = local_3.current;
    local &&
      (local.paused
        ? local
            .play()
            .then(() => local_6(true))
            .catch(() => {})
        : (local.pause(), local_6(false)));
  }, []);
  const local_35 = imported_2((arg) => {
    const local = local_3.current;
    if (!(!local || !Number.isFinite(local.duration))) {
      local.currentTime = Math.max(
        0,
        Math.min(local.duration, local.currentTime + arg),
      );
      local_8(local.currentTime);
    }
  }, []);
  const local_36 = imported_2(() => {
    const local = local_3.current;
    if (local) {
      local.muted = !local.muted;
      local_14(local.muted);
    }
  }, []);
  const local_37 = imported_2((arg) => {
    local_12(arg);
    localStorage.setItem("video-volume", String(arg));
    const local = local_3.current;
    if (local) {
      local.volume = arg;
      local.muted = arg === 0;
      local_14(arg === 0);
    }
  }, []);
  const local_38 = imported_2(() => {
    local_16((arg) => {
      const local = (arg + 1) % local_a3e1b3a5.length;
      if (local_3.current) {
        local_3.current.playbackRate = local_a3e1b3a5[local];
      }
      return local;
    });
  }, []);
  const local_39 = imported_2(() => {
    const local = local.current;
    const local_2 = local_3.current;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
      return;
    }
    if (local?.requestFullscreen) {
      local.requestFullscreen().catch(() => {});
    } else {
      local_2?.webkitEnterFullscreen?.();
    }
  }, []);
  imported_7(() => {
    const local = (arg) => {
      switch (arg.key) {
        case "Escape":
          local_31();
          break;
        case "./global-video-player.js":
          arg.preventDefault();
          local_34();
          break;
        case "ArrowLeft":
          arg.preventDefault();
          local_35(-5);
          break;
        case "ArrowRight":
          arg.preventDefault();
          local_35(5);
          break;
        case "m":
        case "M":
        case "ь":
        case "Ь":
          local_36();
          break;
        case "f":
        case "F":
        case "а":
        case "А":
          local_39();
          break;
      }
    };
    window.addEventListener("keydown", local);
    return () => window.removeEventListener("keydown", local);
  }, [local_31, local_34, local_35, local_36, local_39]);
  const local_40 = imported_2((arg) => {
    const local = local_4.current;
    const local_2 = local_3.current;
    if (
      !local ||
      !local_2 ||
      !Number.isFinite(local_2.duration) ||
      local_2.duration <= 0
    ) {
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
    local_2.currentTime = local_2.duration * local_4;
    local_8(local_2.currentTime);
  }, []);
  const local_41 = imported_2(
    (arg) => {
      arg.stopPropagation();
      local_28.current = true;
      local_18(true);
      const local = arg.currentTarget;
      try {
        local.setPointerCapture(arg.pointerId);
      } catch {}
      local_40(arg.clientX);
      const local_2 = (arg) => local_40(arg.clientX);
      const local_3 = () => {
        try {
          local.releasePointerCapture(arg.pointerId);
        } catch {}
        document.removeEventListener("pointermove", local_2);
        document.removeEventListener("pointerup", local_3);
        document.removeEventListener("pointercancel", local_3);
        window.removeEventListener("blur", local_3);
        local_18(false);
        setTimeout(() => {
          local_28.current = false;
        }, 0);
      };
      document.addEventListener("pointermove", local_2);
      document.addEventListener("pointerup", local_3);
      document.addEventListener("pointercancel", local_3);
      window.addEventListener("blur", local_3);
    },
    [local_40],
  );
  const local_42 = local_9 > 0 ? (local_7 / local_9) * 100 : 0;
  const local_43 = !arg.sourceRect;
  return imported_3("div", {
    ref: local,
    "data-vp": "overlay",
    className: `${local_2ba33e70.overlay} ${local_43 ? local_2ba33e70.overlayFade : ""} ym-hide-content`,
    onClick: local_31,
    children: [
      imported_3("div", {
        className: local_2ba33e70.backdrop,
      }),
      imported_3("div", {
        ref: local_2,
        "data-vp": "stage",
        className: local_2ba33e70.stage,
        style: {
          width: `${local_30.width}px`,
          height: `${local_30.height}px`,
        },
        onClick: (arg) => {
          arg.stopPropagation();
          if (!local_28.current && !local_29.current) {
            local_34();
          }
        },
        onDblClick: (arg) => {
          arg.stopPropagation();
          local_39();
        },
        children: [
          imported_3("video", {
            ref: local_3,
            "data-vp": "video",
            src: arg.url,
            className: local_2ba33e70.video,
            playsInline: true,
            onPlay: () => local_6(true),
            onPause: () => local_6(false),
            onEnded: () => local_6(false),
            onLoadedMetadata: (arg) => {
              const local = arg.currentTarget;
              local_10(local.duration);
              if (!arg.width && local.videoWidth > 0 && local.videoHeight > 0) {
                local_24({
                  w: local.videoWidth,
                  h: local.videoHeight,
                });
              }
            },
            onSeeked: (arg) => local_8(arg.currentTarget.currentTime),
          }),
          arg.poster &&
            local_21 &&
            imported_3("img", {
              className: local_2ba33e70.poster,
              src: arg.poster,
              alt: "",
              "aria-hidden": "true",
            }),
          imported_3("div", {
            className: `${local_2ba33e70.chrome} ${local_2ba33e70.bottomOverlay}`,
            onDblClick: (arg) => arg.stopPropagation(),
            children: [
              imported_3("button", {
                type: "button",
                className: `${local_2ba33e70.controlButton} ${local_2ba33e70.playButton}`,
                onClick: (arg) => {
                  arg.stopPropagation();
                  local_34();
                },
                "aria-label": local_5 ? "Пауза" : "Воспроизвести",
                children: local_5
                  ? imported_3(fn_65c560b6, {})
                  : imported_3(fn_4cc17855, {}),
              }),
              imported_3("span", {
                className: local_2ba33e70.time,
                children: [
                  fn_e1cfa157(local_7),
                  "../site/index.html",
                  fn_e1cfa157(local_9),
                ],
              }),
              imported_3("button", {
                type: "button",
                className: `${local_2ba33e70.controlButton} ${local_2ba33e70.speedButton}`,
                onClick: (arg) => {
                  arg.stopPropagation();
                  local_38();
                },
                "aria-label": "Скорость воспроизведения",
                children: [local_a3e1b3a5[local_15], "×"],
              }),
              imported_3("div", {
                className: `${local_2ba33e70.volumeControl} ${local_19 ? local_2ba33e70.volumeActive : ""}`,
                onClick: (arg) => arg.stopPropagation(),
                children: [
                  imported_3("div", {
                    className: local_2ba33e70.volumeSlider,
                    children: imported_3(fn_4b406778, {
                      value: local_13 ? 0 : local_11,
                      onChange: local_37,
                      onDragStart: () => {
                        local_29.current = true;
                        local_20(true);
                      },
                      onDragEnd: () => {
                        local_20(false);
                        setTimeout(() => {
                          local_29.current = false;
                        }, 0);
                      },
                    }),
                  }),
                  imported_3("button", {
                    type: "button",
                    className: local_2ba33e70.muteButton,
                    onClick: (arg) => {
                      arg.stopPropagation();
                      local_36();
                    },
                    "aria-label": local_13 ? "Включить звук" : "Выключить звук",
                    children: imported_3(imported_10, {
                      muted: local_13 || local_11 === 0,
                      volume: local_11,
                    }),
                  }),
                ],
              }),
              imported_3("button", {
                type: "button",
                className: `${local_2ba33e70.controlButton} ${local_2ba33e70.fullscreenButton}`,
                onClick: (arg) => {
                  arg.stopPropagation();
                  local_39();
                },
                "aria-label": "На весь экран",
                children: imported_3(fn_49d970dd, {}),
              }),
              imported_3("div", {
                "data-vp": "progress",
                className: local_2ba33e70.progressContainer,
                onPointerDown: local_41,
                onClick: (arg) => arg.stopPropagation(),
                children: imported_3("div", {
                  ref: local_4,
                  className: local_2ba33e70.progressTrack,
                  children: [
                    local_32.map((arg, arg_2) =>
                      imported_3(
                        "div",
                        {
                          className: local_2ba33e70.progressBuffered,
                          style: {
                            left: `${arg.left}%`,
                            width: `${arg.width}%`,
                          },
                        },
                        arg_2,
                      ),
                    ),
                    imported_3("div", {
                      className: `${local_2ba33e70.progressFill} ${local_17 ? local_2ba33e70.scrubbing : ""}`,
                      style: {
                        width: `${local_42}%`,
                      },
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
