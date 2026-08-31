import {
  symbol_054 as imported,
  symbol_002 as imported_2,
  symbol_058 as imported_3,
  symbol_067 as imported_4,
  symbol_071 as imported_5,
  a5 as imported_6,
  ak as imported_7,
} from "../entry.js";
import { I as imported_8, a as imported_9 } from "../components/icon-play.js";
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
function fn_3506a85a() {
  const [local, local_2] = imported(false);
  const [local_3, local_4] = imported(false);
  const [local_5, local_6] = imported(0);
  const [local_7, local_8] = imported(false);
  const [local_9, local_10] = imported(0);
  const [local_11, local_12] = imported(0);
  const [local_13, local_14] = imported([]);
  const [local_15, local_16] = imported(0);
  const local_17 = imported_2(0);
  const local_18 = imported_2(null);
  const local_19 = imported_2(null);
  const local_20 = imported_2(null);
  const local_21 = imported_2(null);
  const local_22 = imported_2([]);
  const local_23 = imported_2(null);
  const local_24 = imported_2(null);
  const local_25 = imported_2(null);
  const local_26 = imported_2(null);
  const local_27 = imported_2(null);
  const local_28 = imported_2(null);
  const local_29 = imported_2([]);
  const local_30 = imported_2(false);
  const local_31 = imported_2(0);
  const local_32 = imported_2([]);
  const local_33 = imported_2(0);
  imported_3(() => {
    local_30.current = local;
  }, [local]);
  imported_3(
    () => () => {
      if (local_23.current) {
        clearInterval(local_23.current);
      }
      if (local_24.current) {
        cancelAnimationFrame(local_24.current);
      }
      if (local_28.current) {
        clearInterval(local_28.current);
      }
      if (local_21.current) {
        local_21.current.getTracks().forEach((arg) => arg.stop());
      }
      if (local_18.current) {
        local_18.current.ondataavailable = null;
        local_18.current.onstop = null;
      }
      if (local_19.current && local_19.current.state !== "closed") {
        local_19.current.close();
      }
      if (local_25.current) {
        local_25.current.pause();
        local_25.current.onloadedmetadata = null;
        local_25.current.ontimeupdate = null;
        local_25.current.onended = null;
        local_25.current = null;
      }
      if (local_26.current) {
        URL.revokeObjectURL(local_26.current);
      }
    },
    [],
  );
  const local_34 = imported_4(() => {
    if (!local_20.current) {
      return;
    }
    const local = local_20.current;
    const local_2 = local.frequencyBinCount;
    const local_3 = new Uint8Array(local_2);
    local.getByteFrequencyData(local_3);
    let local_4 = 0;
    for (let local = 0; local < local_2; local++) {
      local_4 += local_3[local];
    }
    const local_5 = local_4 / local_2 / 255;
    const local_6 = Math.min(1, local_5 * 3);
    const local_7 = Math.max(0.1, local_6);
    if (local_30.current) {
      const local = performance.now() - local_31.current;
      const local_2 = Math.floor(local / 80);
      local_32.current.push(local_7);
      if (local_2 > local_33.current) {
        const local = local_32.current;
        const local_2 =
          local.length > 0
            ? local.reduce((arg, arg_2) => arg + arg_2, 0) / local.length
            : 0.05;
        local_29.current.push(local_2);
        local_17.current += 4;
        local_14((arg) => [...arg, local_2]);
        local_16(local_17.current);
        local_32.current = [];
        local_33.current = local_2;
      }
      local_24.current = requestAnimationFrame(local_34);
    }
  }, []);
  const local_35 = imported_4(() => {
    const local = local_29.current;
    if (local.length > 0) {
      return [...local];
    }
    return [];
  }, []);
  const local_36 = imported_4(async () => {
    try {
      if (local_26.current) {
        URL.revokeObjectURL(local_26.current);
        local_26.current = null;
      }
      local_27.current = null;
      if (local_25.current) {
        local_25.current.pause();
        local_25.current = null;
      }
      const local = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      local_21.current = local;
      const local_2 = new AudioContext();
      local_19.current = local_2;
      const local_3 = local_2.createAnalyser();
      local_3.fftSize = 256;
      local_3.smoothingTimeConstant = 0.3;
      local_20.current = local_3;
      local_2.createMediaStreamSource(local).connect(local_3);
      const local_4 = new MediaRecorder(local, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      local_18.current = local_4;
      local_22.current = [];
      local_29.current = [];
      local_31.current = performance.now();
      local_32.current = [];
      local_33.current = 0;
      local_4.ondataavailable = (arg) => {
        if (arg.data.size > 0) {
          local_22.current.push(arg.data);
        }
      };
      local_4.start(100);
      local_2(true);
      local_4(false);
      local_6(0);
      local_10(0);
      local_12(0);
      local_8(false);
      local_17.current = 0;
      local_14([]);
      local_16(0);
      local_30.current = true;
      const local_5 = Date.now();
      local_23.current = window.setInterval(() => {
        const local = Math.floor((Date.now() - local_5) / 1000);
        local_6(local);
      }, 100);
      local_24.current = requestAnimationFrame(local_34);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  }, [local_34]);
  const local_37 = imported_4(
    () =>
      new Promise((arg) => {
        local_30.current = false;
        local_2(false);
        if (local_18.current && local_18.current.state !== "inactive") {
          local_18.current.onstop = () => {
            if (local_22.current.length > 0) {
              const local = local_18.current?.mimeType || "audio/webm";
              const local_2 = new Blob(local_22.current, {
                type: local,
              });
              const local_3 = URL.createObjectURL(local_2);
              local_26.current = local_3;
              local_27.current = local_2;
              const local_4 = new Audio(local_3);
              local_25.current = local_4;
              local_4.onloadedmetadata = () => {
                if (isFinite(local_4.duration)) {
                  local_12(local_4.duration);
                } else {
                  local_4.currentTime = 1e101;
                  local_4.ontimeupdate = function () {
                    local_4.ontimeupdate = null;
                    local_4.currentTime = 0;
                    local_12(local_4.duration);
                  };
                }
              };
              local_4.onended = () => {
                local_8(false);
                local_10(0);
                local_4.currentTime = 0;
                if (local_28.current) {
                  clearInterval(local_28.current);
                  local_28.current = null;
                }
              };
              local_4(true);
              arg(local_2);
            } else {
              arg(null);
            }
          };
          local_18.current.stop();
        } else {
          arg(null);
        }
        if (local_21.current) {
          local_21.current.getTracks().forEach((arg) => arg.stop());
          local_21.current = null;
        }
        if (local_23.current) {
          clearInterval(local_23.current);
          local_23.current = null;
        }
        if (local_24.current) {
          cancelAnimationFrame(local_24.current);
          local_24.current = null;
        }
        if (local_19.current && local_19.current.state !== "closed") {
          local_19.current.close();
          local_19.current = null;
        }
        const local = local_35();
        local_17.current = 0;
        local_14(local);
        local_16(0);
        local_10(0);
      }),
    [local_35],
  );
  const local_38 = imported_4(() => {
    local_30.current = false;
    if (local_18.current) {
      local_18.current.ondataavailable = null;
      local_18.current.onstop = null;
      if (local_18.current.state !== "inactive") {
        local_18.current.stop();
      }
      local_18.current = null;
    }
    if (local_21.current) {
      local_21.current.getTracks().forEach((arg) => arg.stop());
      local_21.current = null;
    }
    if (local_23.current) {
      clearInterval(local_23.current);
      local_23.current = null;
    }
    if (local_24.current) {
      cancelAnimationFrame(local_24.current);
      local_24.current = null;
    }
    if (local_28.current) {
      clearInterval(local_28.current);
      local_28.current = null;
    }
    if (local_19.current && local_19.current.state !== "closed") {
      local_19.current.close();
      local_19.current = null;
    }
    if (local_25.current) {
      local_25.current.pause();
      local_25.current = null;
    }
    if (local_26.current) {
      URL.revokeObjectURL(local_26.current);
      local_26.current = null;
    }
    local_27.current = null;
    local_2(false);
    local_4(false);
    local_6(0);
    local_8(false);
    local_10(0);
    local_12(0);
    local_17.current = 0;
    local_14([]);
    local_16(0);
    local_29.current = [];
    local_22.current = [];
  }, []);
  const local_39 = imported_4(() => {
    if (local_28.current) {
      clearInterval(local_28.current);
    }
    local_28.current = window.setInterval(() => {
      const local = local_25.current;
      if (!local || local.paused || local.ended) {
        if (local_28.current) {
          clearInterval(local_28.current);
          local_28.current = null;
        }
        return;
      }
      if (local.duration > 0) {
        local_10(local.currentTime / local.duration);
      }
    }, 100);
  }, []);
  const local_40 = imported_4(() => {
    if (!local_25.current || !local_26.current) {
      return;
    }
    if (local_28.current) {
      clearInterval(local_28.current);
      local_28.current = null;
    }
    const local = local_25.current;
    if (local.ended || local.currentTime >= local.duration) {
      local.currentTime = 0;
      local_10(0);
    }
    local_8(true);
    local
      .play()
      .then(() => {
        local_39();
      })
      .catch((arg) => {
        console.error("Error playing audio:", arg);
        local_8(false);
      });
  }, [local_39]);
  const local_41 = imported_4(() => {
    if (local_28.current) {
      clearInterval(local_28.current);
      local_28.current = null;
    }
    if (local_25.current) {
      local_25.current.pause();
      if (local_25.current.duration > 0) {
        local_10(local_25.current.currentTime / local_25.current.duration);
      }
    }
    local_8(false);
  }, []);
  const local_42 = imported_4(
    (arg) => {
      if (!local_25.current || !local_3) {
        return;
      }
      const local = local_25.current;
      const local_2 = Math.max(0, Math.min(1, arg));
      local.currentTime = local_2 * local.duration;
      local_10(local_2);
      if (local.paused) {
        if (local_28.current) {
          clearInterval(local_28.current);
          local_28.current = null;
        }
        local
          .play()
          .then(() => {
            local_8(true);
            local_39();
          })
          .catch((arg) => {
            console.error("Error playing audio:", arg);
          });
      }
    },
    [local_3, local_39],
  );
  const local_43 = imported_4(() => local_27.current, []);
  return {
    isRecording: local,
    hasRecording: local_3,
    recordingTime: local_5,
    audioLevels: local_13,
    slideOffset: local_15,
    isPlaying: local_7,
    playbackProgress: local_9,
    duration: local_11,
    audioElementRef: local_25,
    startRecording: local_36,
    stopRecording: local_37,
    cancelRecording: local_38,
    playAudio: local_40,
    pauseAudio: local_41,
    seekTo: local_42,
    getAudioBlob: local_43,
  };
}
const local_1a7005fc = ({ size: arg = 16 }) =>
  imported_5("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 16 16",
    children: imported_5("rect", {
      width: "10",
      height: "10",
      x: "3",
      y: "3",
      fill: "currentColor",
      rx: "3",
    }),
  });
const local_f06debfc = 2;
const local_f06debfc_2 = 2;
const local_84cb9055 = local_f06debfc + local_f06debfc_2;
const local_f06debfc_3 = 24;
const local_f06debfc_4 = 80;
const local_15086922 = "rgba(142, 142, 147, 0.6)";
const local_3a5b5f52 = "#FFFFFF";
function fn_9bc11df4({
  levels: arg,
  slideOffset: arg_2,
  audioRef: arg_3,
  isRecording: arg_4,
  hasRecording: arg_5,
  isPlaying: arg_6,
  onSeek: arg_7,
  onPlay: arg_8,
}) {
  const local = imported_2(null);
  const local_2 = imported_2(null);
  const local_3 = imported_2(false);
  const local_4 = imported_2(0);
  const local_5 = imported_2(0);
  const local_6 = imported_2(0);
  const local_7 = imported_2(0);
  const local_8 = imported_2(null);
  const local_9 = imported_2(null);
  const local_10 = imported_2(0);
  const [local_11, local_12] = imported(0);
  const local_13 = Math.max(1, Math.floor(local_11 / local_84cb9055));
  imported_3(() => {
    local_6.current = arg_2;
    if (arg_2 === 0) {
      local_5.current = 0;
    }
  }, [arg_2]);
  imported_3(() => {
    const local = local_2.current;
    if (!local) {
      return;
    }
    const local_2 = new ResizeObserver((arg) => {
      for (const local of arg) {
        const local = local.contentRect.width;
        if (local > 0) {
          local_12(local);
        }
      }
    });
    local_2.observe(local);
    const local_3 = local.getBoundingClientRect();
    if (local_3.width > 0) {
      local_12(local_3.width);
    }
    return () => {
      local_2.disconnect();
    };
  }, []);
  imported_3(() => {
    const local = local.current;
    if (!local || local_11 === 0) {
      return;
    }
    const local_2 = window.devicePixelRatio || 1;
    local.width = local_11 * local_2;
    local.height = local_f06debfc_3 * local_2;
    local.style.width = `${local_11}px`;
    local.style.height = `${local_f06debfc_3}px`;
  }, [local_11]);
  const local_14 = imported_4(
    (arg) => {
      const local = local.current;
      if (!local || local_11 === 0) {
        return;
      }
      const local_2 = local.getContext("2d");
      if (!local_2) {
        return;
      }
      const local_3 = window.devicePixelRatio || 1;
      local_2.clearRect(0, 0, local.width, local.height);
      local_2.save();
      local_2.scale(local_3, local_3);
      const local_4 = local_f06debfc_3 / 2;
      const local_5 = local_f06debfc_3 - 4;
      for (let local = 0; local < local_13; local++) {
        let local;
        if (arg.length === 0) {
          local = 0.05;
        } else if (arg.length === 1) {
          local = arg[0];
        } else {
          const local = (local / (local_13 - 1)) * (arg.length - 1);
          const local_2 = Math.floor(local);
          const local_3 = Math.min(local_2 + 1, arg.length - 1);
          const local_4 = local - local_2;
          local = arg[local_2] * (1 - local_4) + arg[local_3] * local_4;
        }
        const local_2 = Math.max(4, local * local_5);
        const local_3 = local * local_84cb9055;
        const local_4 = local_4 - local_2 / 2;
        const local_5 = local < arg;
        local_2.fillStyle = local_5 ? local_3a5b5f52 : local_15086922;
        const local_6 = local_f06debfc / 2;
        local_2.beginPath();
        local_2.roundRect(local_3, local_4, local_f06debfc, local_2, local_6);
        local_2.fill();
      }
      local_2.restore();
    },
    [arg, local_11, local_13],
  );
  const local_15 = imported_4(
    (arg) => {
      const local = local.current;
      if (!local || local_11 === 0) {
        return;
      }
      const local_2 = local.getContext("2d");
      if (!local_2) {
        return;
      }
      const local_3 = window.devicePixelRatio || 1;
      const local_4 = local_6.current;
      const local_5 = local_5.current;
      if (local_5 !== local_4) {
        const local = arg - local_7.current;
        const local_2 = (local_84cb9055 / local_f06debfc_4) * local;
        if (local_5 < local_4) {
          local_5.current = Math.min(local_4, local_5 + local_2);
        } else {
          local_5.current = local_4;
        }
      }
      local_7.current = arg;
      const local_6 = local_5.current;
      local_2.clearRect(0, 0, local.width, local.height);
      local_2.save();
      local_2.scale(local_3, local_3);
      local_2.translate(-local_6, 0);
      const local_7 = local_f06debfc_3 / 2;
      const local_8 = local_f06debfc_3 - 4;
      const local_9 = local_13 + arg.length;
      for (let local = 0; local < local_9; local++) {
        const local = local - local_13;
        const local_2 = local >= 0 && local < arg.length ? arg[local] : 0.05;
        const local_3 = Math.max(4, local_2 * local_8);
        const local_4 = local * local_84cb9055;
        const local_5 = local_7 - local_3 / 2;
        local_2.fillStyle = local_15086922;
        const local_6 = local_f06debfc / 2;
        local_2.beginPath();
        local_2.roundRect(local_4, local_5, local_f06debfc, local_3, local_6);
        local_2.fill();
      }
      local_2.restore();
      if (local_5.current !== local_6.current || arg_4) {
        local_8.current = requestAnimationFrame(local_15);
      }
    },
    [arg, local_11, local_13, arg_4],
  );
  imported_3(() => {
    if (arg_4) {
      local_7.current = performance.now();
      local_8.current = requestAnimationFrame(local_15);
    } else if (local_8.current) {
      cancelAnimationFrame(local_8.current);
      local_8.current = null;
    }
    return () => {
      if (local_8.current) {
        cancelAnimationFrame(local_8.current);
        local_8.current = null;
      }
    };
  }, [arg_4, local_15]);
  imported_3(() => {
    if (!arg_6 || arg_4) {
      if (local_9.current) {
        cancelAnimationFrame(local_9.current);
        local_9.current = null;
      }
      return;
    }
    const local = () => {
      const local = arg_3.current;
      if (!local || local.paused || local.ended) {
        local_9.current = null;
        return;
      }
      const local_2 = local.currentTime / local.duration;
      const local_3 = Math.ceil(local_2 * local_13);
      if (local_3 !== local_10.current) {
        local_10.current = local_3;
        local_14(local_3);
      }
      local_9.current = requestAnimationFrame(local);
    };
    local_9.current = requestAnimationFrame(local);
    return () => {
      if (local_9.current) {
        cancelAnimationFrame(local_9.current);
        local_9.current = null;
      }
    };
  }, [arg_6, arg_4, arg_3, local_13, local_14]);
  imported_3(() => {
    if (!arg_4 && !arg_6 && arg_5) {
      const local = arg_3.current;
      if (local && local.duration > 0 && local.currentTime > 0) {
        const local = local.currentTime / local.duration;
        const local_2 = Math.ceil(local * local_13);
        local_10.current = local_2;
        local_14(local_2);
      } else {
        local_10.current = 0;
        local_14(0);
      }
    }
  }, [arg_4, arg_6, arg_5, local_14, arg_3, local_13]);
  imported_3(() => {
    if (!arg_4 && arg_5 && !arg_6) {
      local_14(local_10.current);
    }
  }, [arg, local_13, arg_4, arg_5, arg_6, local_14]);
  const local_16 = imported_4((arg) => {
    const local = local_2.current;
    if (!local) {
      return 0;
    }
    const local_2 = local.getBoundingClientRect();
    const local_3 = "touches" in arg ? arg.touches[0].clientX : arg.clientX;
    return Math.max(0, Math.min(1, (local_3 - local_2.left) / local_2.width));
  }, []);
  const local_17 = imported_4(
    (arg) => {
      if (!(!arg_5 || arg_4)) {
        arg.preventDefault();
        if (!arg_6) {
          arg_8();
          return;
        }
        local_3.current = true;
        local_4.current = local_16(arg);
      }
    },
    [arg_5, arg_4, arg_6, local_16, arg_8],
  );
  const local_18 = imported_4(
    (arg) => {
      if (local_3.current) {
        local_4.current = local_16(arg);
      }
    },
    [local_16],
  );
  const local_19 = imported_4(() => {
    if (local_3.current) {
      arg_7(local_4.current);
      local_3.current = false;
    }
  }, [arg_7]);
  imported_3(() => {
    const local = (arg) => local_18(arg);
    const local_2 = () => local_19();
    window.addEventListener("mousemove", local);
    window.addEventListener("mouseup", local_2);
    window.addEventListener("touchmove", local);
    window.addEventListener("touchend", local_2);
    return () => {
      window.removeEventListener("mousemove", local);
      window.removeEventListener("mouseup", local_2);
      window.removeEventListener("touchmove", local);
      window.removeEventListener("touchend", local_2);
    };
  }, [local_18, local_19]);
  return imported_5("div", {
    ref: local_2,
    style: {
      width: "100%",
      height: `${local_f06debfc_3}px`,
      overflow: "hidden",
      cursor: arg_5 && !arg_4 ? "pointer" : "default",
    },
    onMouseDown: local_17,
    onTouchStart: local_17,
    children: imported_5("canvas", {
      ref: local,
    }),
  });
}
const local_bd3f38fe = "c_voiceInput";
const local_1d4f092b = "c_circleButton";
const local_66fefc28 = "c_playButton";
const local_77e0f8b0 = "c_hasRecording";
const local_803410e5 = "c_stopButton";
const local_6ece7e03 = "c_recording";
const local_a430f3b3 = "c_sendButton";
const local_2a26d2b1 = "c_audioVisualizer";
const local_cd7aa9d3 = "c_waveformContainer";
const local_21b2c703 = "c_recordingTime";
const local_8a90869a = "c_exiting";
const local_c9c49b86 = {
  voiceInput: local_bd3f38fe,
  circleButton: local_1d4f092b,
  playButton: local_66fefc28,
  hasRecording: local_77e0f8b0,
  stopButton: local_803410e5,
  recording: local_6ece7e03,
  sendButton: local_a430f3b3,
  audioVisualizer: local_2a26d2b1,
  waveformContainer: local_cd7aa9d3,
  recordingTime: local_21b2c703,
  exiting: local_8a90869a,
};
export function fn_cb39b492({
  onCancel: arg,
  onSend: arg_2,
  isExiting: arg_3,
  onExitComplete: arg_4,
}) {
  const [local, local_2] = imported(false);
  const {
    isRecording: local_3,
    hasRecording: local_4,
    recordingTime: local_5,
    audioLevels: local_6,
    slideOffset: local_7,
    isPlaying: local_8,
    playbackProgress: local_9,
    duration: local_10,
    audioElementRef: local_11,
    startRecording: local_12,
    stopRecording: local_13,
    cancelRecording: local_14,
    playAudio: local_15,
    pauseAudio: local_16,
    seekTo: local_17,
    getAudioBlob: local_18,
  } = fn_3506a85a();
  imported_3(() => {
    local_12();
  }, []);
  imported_3(() => {
    if (arg_3 && arg_4) {
      const local = setTimeout(arg_4, 300);
      return () => clearTimeout(local);
    }
  }, [arg_3, arg_4]);
  const local_19 = (arg) => {
    if (!isFinite(arg) || isNaN(arg)) {
      return "00:00";
    }
    const local = Math.floor(arg / 60);
    const local_2 = Math.floor(arg % 60);
    return `${local.toString().padStart(2, "0")}:${local_2.toString().padStart(2, "0")}`;
  };
  const local_20 = () => {
    local_4 && (local_8 ? local_16() : local_15());
  };
  const local_21 = () => {
    if (local_3) {
      local_13();
    }
  };
  const local_22 = imported_4(
    (arg) => {
      local_17(arg);
    },
    [local_17],
  );
  const local_23 = imported_4(async () => {
    if (!(local || !arg_2)) {
      local_2(true);
      try {
        let local = null;
        if (local_3) {
          local = await local_13();
        } else {
          local = local_18();
        }
        if (!local) {
          return;
        }
        await arg_2(local);
        local_14();
        arg();
      } catch (error) {
        console.error("Failed to send voice message:", error);
      } finally {
        local_2(false);
      }
    }
  }, [local, local_3, local_13, local_18, arg_2, local_14, arg]);
  const local_24 = local_19(
    local_3 ? local_5 : local_8 ? local_9 * local_10 : local_10,
  );
  const local_25 = [
    local_c9c49b86.voiceInput,
    local_3 ? local_c9c49b86.recording : "",
    local_4 ? local_c9c49b86.hasRecording : "",
    arg_3 ? local_c9c49b86.exiting : "",
  ]
    .filter(Boolean)
    .join("./voice-input.js");
  return imported_5("div", {
    className: local_25,
    children: [
      imported_5("button", {
        className: `${local_c9c49b86.circleButton} ${local_c9c49b86.playButton}`,
        onClick: local_20,
        children: local_8
          ? imported_5(imported_8, {
              size: 20,
            })
          : imported_5(imported_9, {
              size: 20,
            }),
      }),
      imported_5("div", {
        className: local_c9c49b86.audioVisualizer,
        children: [
          imported_5("div", {
            className: local_c9c49b86.waveformContainer,
            children: imported_5(fn_9bc11df4, {
              levels: local_6,
              slideOffset: local_7,
              audioRef: local_11,
              isRecording: local_3,
              hasRecording: local_4,
              isPlaying: local_8,
              onSeek: local_22,
              onPlay: local_15,
            }),
          }),
          imported_5("span", {
            className: local_c9c49b86.recordingTime,
            children: local_24,
          }),
        ],
      }),
      imported_5("button", {
        className: `${local_c9c49b86.circleButton} ${local_c9c49b86.stopButton}`,
        onClick: local_21,
        children: imported_5(local_1a7005fc, {
          size: 20,
        }),
      }),
      imported_5("button", {
        className: `${local_c9c49b86.circleButton} ${local_c9c49b86.sendButton}`,
        onClick: local_23,
        disabled: local || (local_3 && local_5 < 1),
        children: local
          ? imported_5(imported_6, {
              size: "xs",
            })
          : imported_5(imported_7, {
              size: 20,
            }),
      }),
    ],
  });
}
