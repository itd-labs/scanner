import {
  symbol_067 as imported,
  symbol_054 as imported_2,
  symbol_058 as imported_3,
  symbol_002 as imported_4,
  symbol_021 as imported_5,
  symbol_071 as imported_6,
  symbol_020 as imported_7,
  symbol_004 as imported_8,
  symbol_028 as imported_9,
  symbol_001 as imported_10,
} from "../entry.js";
import { u as imported_11 } from "../shared/use-body-scroll-lock.js";
import { I as imported_12 } from "../components/icon-chevron-left.js";
import { I as imported_13 } from "../components/icon-chevron-right.js";
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
const local_f06debfc = 100;
function fn_bb641065(arg, arg_2) {
  const local = imported(() => {
    const local = arg_2
      ? window.innerWidth
      : window.innerWidth - local_f06debfc * 2;
    const local_2 = window.innerHeight;
    return arg.map((arg) => {
      if (!arg.width || !arg.height) {
        return {
          width: local,
          height: local_2,
        };
      }
      const local = Math.min(local / arg.width, local_2 / arg.height);
      return {
        width: arg.width * local,
        height: arg.height * local,
      };
    });
  }, [arg, arg_2]);
  const [local_2, local_3] = imported_2(local);
  imported_3(() => {
    local_3(local());
    const local = () => local_3(local());
    window.addEventListener("resize", local);
    return () => window.removeEventListener("resize", local);
  }, [local]);
  return local_2;
}
function fn_75a20b26({ onClose: arg, onPrev: arg_2, onNext: arg_3 }) {
  imported_3(() => {
    const local = (arg) => {
      switch (arg.key) {
        case "Escape":
          arg.preventDefault();
          arg.stopPropagation();
          arg();
          break;
        case "ArrowLeft":
          arg.preventDefault();
          arg.stopPropagation();
          arg_2();
          break;
        case "ArrowRight":
          arg.preventDefault();
          arg.stopPropagation();
          arg_3();
          break;
      }
    };
    window.addEventListener("keydown", local, true);
    return () => window.removeEventListener("keydown", local, true);
  }, [arg, arg_2, arg_3]);
}
function fn_a180c8aa({ initialIndex: arg, total: arg_2 }) {
  const [local, local_2] = imported_2(arg);
  const [local_3, local_4] = imported_2(false);
  const local_5 = imported_4(null);
  const local_6 = imported(() => {
    if (local_5.current) {
      clearTimeout(local_5.current);
      local_5.current = null;
      local_4(false);
    }
  }, []);
  const local_7 = imported(
    (arg) => {
      if (!(arg === local || arg < 0 || arg >= arg_2)) {
        local_6();
        local_4(true);
        local_2(arg);
        local_5.current = window.setTimeout(() => {
          local_5.current = null;
          local_4(false);
        }, 500);
      }
    },
    [local, arg_2, local_6],
  );
  const local_8 = imported(() => {
    if (local > 0) {
      local_7(local - 1);
    }
  }, [local, local_7]);
  const local_9 = imported(() => {
    if (local < arg_2 - 1) {
      local_7(local + 1);
    }
  }, [local, arg_2, local_7]);
  return {
    currentIndex: local,
    setCurrentIndex: local_2,
    isAnimating: local_3,
    setIsAnimating: local_4,
    cancelAnimation: local_6,
    goToIndex: local_7,
    goToPrev: local_8,
    goToNext: local_9,
  };
}
const local_f06debfc_2 = 150;
const local_f06debfc_3 = 0.3;
function fn_fa9d0b00(arg, arg_2) {
  const local = arg.clientX - arg_2.clientX;
  const local_2 = arg.clientY - arg_2.clientY;
  return Math.sqrt(local * local + local_2 * local_2);
}
function fn_6d555ac9({
  currentIndex: arg,
  imagesCount: arg_2,
  imageSizes: arg_3,
  isMobile: arg_4,
  isAnimating: arg_5,
  setIsAnimating: arg_6,
  cancelAnimation: arg_7,
  onIndexChange: arg_8,
  onClose: arg_9,
  trackRef: arg_10,
  onDragStart: arg_11,
}) {
  const [local, local_2] = imported_2(0);
  const [local_3, local_4] = imported_2(0);
  const [local_5, local_6] = imported_2(false);
  const [local_7, local_8] = imported_2(1);
  const [local_9, local_10] = imported_2(null);
  const [local_11, local_12] = imported_2(null);
  const [local_13, local_14] = imported_2(1);
  const [local_15, local_16] = imported_2(0);
  const [local_17, local_18] = imported_2(0);
  const [local_19, local_20] = imported_2(false);
  const local_21 = imported_4(1);
  const local_22 = imported_4({
    x: 0,
    y: 0,
  });
  const local_23 = imported_4(false);
  const local_24 = imported_4(false);
  const local_25 = imported_4(0);
  const local_26 = imported_4(0);
  const local_27 = imported_4(0);
  const local_28 = imported_4(1);
  const local_29 = imported_4({
    x: 0,
    y: 0,
  });
  const local_30 = imported_4({
    x: 0,
    y: 0,
  });
  const local_31 = imported_4({
    x: 0,
    y: 0,
  });
  const local_32 = imported_4(0);
  const local_33 = imported_4(0);
  const local_34 = imported_4(null);
  const local_35 = imported_4(false);
  const local_36 = imported_4(null);
  const local_37 = imported_4(null);
  const local_38 = imported_4(false);
  const local_39 = imported((arg) => {
    local_21.current = arg;
    local_14(arg);
  }, []);
  const local_40 = imported((arg, arg_2) => {
    local_22.current = {
      x: arg,
      y: arg_2,
    };
    local_16(arg);
    local_18(arg_2);
  }, []);
  const local_41 = imported(() => {
    local_20(true);
    local_39(1);
    local_40(0, 0);
    setTimeout(() => local_20(false), 300);
  }, [local_39, local_40]);
  const local_42 = imported(
    (arg, arg_2, arg_3) => {
      const local = arg_3[arg];
      if (!local) {
        return {
          x: 0,
          y: 0,
        };
      }
      const local_2 = Math.max(
        0,
        (local.width * arg_3 - window.innerWidth) / 2,
      );
      const local_3 = Math.max(
        0,
        (local.height * arg_3 - window.innerHeight) / 2,
      );
      return {
        x: Math.max(-local_2, Math.min(local_2, arg)),
        y: Math.max(-local_3, Math.min(local_3, arg_2)),
      };
    },
    [arg_3, arg],
  );
  imported_3(() => {
    local_21.current = 1;
    local_22.current = {
      x: 0,
      y: 0,
    };
    local_14(1);
    local_16(0);
    local_18(0);
    local_20(false);
  }, [arg]);
  imported_3(
    () => () => {
      if (local_36.current) {
        clearTimeout(local_36.current);
        local_36.current = null;
      }
    },
    [],
  );
  const local_43 = imported(
    (arg) => {
      let local = arg;
      if ((arg === 0 && local > 0) || (arg === arg_2 - 1 && local < 0)) {
        local *= local_f06debfc_3;
      }
      return local;
    },
    [arg, arg_2],
  );
  const local_44 = imported(() => {
    if (Math.abs(local_3) > local_f06debfc_2) {
      return (arg_9(arg_4), true);
    }
    return (
      arg_6(true),
      local_4(0),
      local_2(0),
      local_8(1),
      (local_36.current = window.setTimeout(() => {
        local_36.current = null;
        arg_6(false);
      }, 300)),
      false
    );
  }, [local_3, arg_4, arg_9, arg_6]);
  const local_45 = imported(
    (arg) => {
      if (arg_4 || arg.button !== 0) {
        return;
      }
      const local = local_37.current ?? arg;
      let local_2 = 0;
      const local_3 = arg_10?.current;
      if (local_3) {
        const local = getComputedStyle(local_3).transform;
        if (local && local !== "none") {
          const local = new DOMMatrixReadOnly(local).m41;
          let local_2 = 0;
          for (let local = 0; local < local; local++) {
            local_2 += arg_3[local]?.width || 0;
          }
          local_2 = local + local_2;
          if (Math.abs(local_2) < 1) {
            local_2 = 0;
          }
        }
      }
      arg_7();
      if (local_36.current) {
        clearTimeout(local_36.current);
        local_36.current = null;
      }
      if (local_37.current !== null) {
        arg_8(local_37.current);
        local_37.current = null;
      }
      arg_6(false);
      local_10(null);
      local_12(null);
      local_32.current = local_2;
      local_33.current = 0;
      local_2(local_2);
      local_6(true);
      local_35.current = false;
      local_31.current = {
        x: arg.clientX,
        y: arg.clientY,
      };
      local_34.current = null;
      arg.preventDefault();
    },
    [arg_4, arg, arg_3, arg_10, arg_7, arg_8, arg_6],
  );
  const local_46 = imported(
    (arg) => {
      if (!local_5 || arg_4) {
        return;
      }
      const local = arg.clientX - local_31.current.x;
      const local_2 = arg.clientY - local_31.current.y;
      if (
        !local_34.current &&
        (Math.abs(local) > 10 || Math.abs(local_2) > 10)
      ) {
        local_34.current = Math.abs(local) > Math.abs(local_2) ? "x" : "y";
        local_35.current = true;
        arg_11?.();
      }
      if (local_34.current === "x") {
        local_33.current = local;
        local_2(local_43(local_32.current + local));
      } else if (local_34.current === "y") {
        local_4(local_2);
        const local = Math.min(Math.abs(local_2) / local_f06debfc_2, 1);
        local_8(1 - local * 0.5);
      }
    },
    [local_5, arg_4, local_43, arg_11],
  );
  const local_47 = imported(() => {
    if (!(!local_5 || arg_4)) {
      local_6(false);
      if (local_34.current === "x") {
        const local = local_37.current ?? arg;
        const local_2 = local_33.current;
        let local_3 = local;
        if (local_2 < -80 && local < arg_2 - 1) {
          local_3 = local + 1;
        } else if (local_2 > 80 && local > 0) {
          local_3 = local - 1;
        }
        if (local_3 !== local) {
          const local = arg_3[local_3]?.width || 0;
          const local_2 = arg_3[local]?.width || 0;
          const local_3 = local_3 > local ? -local_2 : local;
          arg_6(true);
          local_10(local_3);
          local_2(local_3);
          local_37.current = local_3;
          local_36.current = window.setTimeout(() => {
            local_36.current = null;
            arg_6(false);
            local_10(null);
            local_2(0);
            local_37.current = null;
            arg_8(local_3);
          }, 500);
        } else {
          arg_6(true);
          local_2(0);
          local_36.current = window.setTimeout(() => {
            local_36.current = null;
            arg_6(false);
          }, 300);
        }
      } else {
        if (local_34.current === "y") {
          local_44();
        } else if (local !== 0) {
          arg_6(true);
          local_2(0);
          local_36.current = window.setTimeout(() => {
            local_36.current = null;
            arg_6(false);
          }, 300);
        }
      }
      local_34.current = null;
    }
  }, [local_5, arg_4, arg, local, arg_2, arg_3, local_44, arg_8, arg_6]);
  const local_48 = imported(
    (arg) => {
      if (!arg_4) {
        return;
      }
      local_26.current = Math.max(local_26.current, arg.touches.length);
      if (arg.touches.length === 2) {
        local_23.current = true;
        local_24.current = true;
        local_27.current = fn_fa9d0b00(arg.touches[0], arg.touches[1]);
        local_28.current = local_21.current;
        local_6(false);
        local_34.current = null;
        local_2(0);
        local_4(0);
        local_8(1);
        local_20(false);
        return;
      }
      if (local_21.current > 1) {
        local_26.current = 1;
        local_29.current = {
          x: arg.touches[0].clientX,
          y: arg.touches[0].clientY,
        };
        local_30.current = {
          ...local_22.current,
        };
        local_6(true);
        local_35.current = false;
        local_34.current = null;
        local_20(false);
        const local = arg.target;
        local_38.current =
          local.tagName === "IMG" && local.hasAttribute("data-viewer-image");
        return;
      }
      local_26.current = 1;
      local_24.current = false;
      arg_7();
      if (local_36.current) {
        clearTimeout(local_36.current);
        local_36.current = null;
      }
      arg_6(false);
      local_2(0);
      local_35.current = false;
      const local = arg.target;
      local_38.current =
        local.tagName === "IMG" && local.hasAttribute("data-viewer-image");
      local_31.current = {
        x: arg.touches[0].clientX,
        y: arg.touches[0].clientY,
      };
      local_34.current = null;
      local_6(true);
    },
    [arg_4, arg_7, arg_6],
  );
  const local_49 = imported(
    (arg) => {
      if (!arg_4) {
        return;
      }
      local_26.current = Math.max(local_26.current, arg.touches.length);
      if (local_23.current && arg.touches.length >= 2) {
        const local = fn_fa9d0b00(arg.touches[0], arg.touches[1]);
        const local_2 = local_28.current * (local / local_27.current);
        const local_3 = Math.min(Math.max(local_2, 0.5), 5);
        const local_4 = local_42(
          local_22.current.x,
          local_22.current.y,
          local_3,
        );
        local_39(local_3);
        local_40(local_4.x, local_4.y);
        return;
      }
      if (local_21.current > 1 && local_5 && !local_23.current) {
        const local = arg.touches[0].clientX - local_29.current.x;
        const local_2 = arg.touches[0].clientY - local_29.current.y;
        if (Math.abs(local) > 5 || Math.abs(local_2) > 5) {
          local_35.current = true;
        }
        const local_3 = local_42(
          local_30.current.x + local,
          local_30.current.y + local_2,
          local_21.current,
        );
        local_40(local_3.x, local_3.y);
        return;
      }
      if (!local_5) {
        return;
      }
      const local = arg.touches[0].clientX - local_31.current.x;
      const local_2 = arg.touches[0].clientY - local_31.current.y;
      if (
        !local_34.current &&
        (Math.abs(local) > 10 || Math.abs(local_2) > 10)
      ) {
        local_34.current = Math.abs(local) > Math.abs(local_2) ? "x" : "y";
        local_35.current = true;
        arg_11?.();
      }
      if (local_34.current === "x") {
        local_2(local_43(local));
      } else if (local_34.current === "y") {
        local_4(local_2);
        const local = Math.min(Math.abs(local_2) / local_f06debfc_2, 1);
        local_8(Math.round((1 - local * 0.7) * 100) / 100);
      }
    },
    [arg_4, local_5, local_39, local_40, local_42, local_43, arg_11],
  );
  const local_50 = imported(() => {
    if (arg_4) {
      if (local_23.current) {
        local_23.current = false;
        local_25.current = Date.now();
        if (local_21.current < 1.1) {
          local_41();
        }
        return;
      }
      if (local_21.current > 1) {
        local_6(false);
        return;
      }
      if (local_26.current > 1 || local_24.current) {
        local_6(false);
        local_4(0);
        local_8(1);
        local_34.current = null;
        return;
      }
      if (Date.now() - local_25.current < 300) {
        local_6(false);
        local_4(0);
        local_8(1);
        local_34.current = null;
        return;
      }
      if (local_5) {
        local_6(false);
        if (!local_38.current) {
          if (!local_34.current) {
            local_35.current = true;
            arg_9(true);
            return;
          }
          if (local_34.current === "y" && local_3 > 30) {
            local_35.current = true;
            arg_9(true);
            return;
          }
        }
        if (local_34.current === "x") {
          let local = arg;
          if (local < -50 && arg < arg_2 - 1) {
            local = arg + 1;
          } else if (local > 50 && arg > 0) {
            local = arg - 1;
          }
          arg_6(true);
          local_2(0);
          if (local !== arg) {
            arg_8(local);
          }
          local_36.current = window.setTimeout(() => {
            local_36.current = null;
            arg_6(false);
          }, 500);
        } else {
          if (local_34.current === "y") {
            local_44();
          }
        }
        local_34.current = null;
      }
    }
  }, [
    arg_4,
    local_5,
    arg,
    local,
    local_3,
    arg_2,
    local_44,
    arg_8,
    arg_9,
    arg_6,
    local_41,
  ]);
  const local_51 = imported(() => {
    if (arg_4) {
      local_23.current = false;
      local_24.current = false;
      local_26.current = 0;
      local_34.current = null;
      local_6(false);
      local_2(0);
      local_4(0);
      local_8(1);
      arg_6(false);
      if (local_21.current < 1.1) {
        local_41();
      }
    }
  }, [arg_4, local_41, arg_6]);
  const local_52 = imported(() => {
    const local = local_37.current;
    const local_2 = local ?? arg;
    const local_3 = arg_10?.current;
    if (local_3) {
      const local = getComputedStyle(local_3).transform;
      if (local && local !== "none") {
        const local = new DOMMatrixReadOnly(local).m41;
        let local_2 = 0;
        for (let local = 0; local < local_2; local++) {
          local_2 += arg_3[local]?.width || 0;
        }
        local_2(local + local_2);
      }
      const local_2 = local_3.parentElement;
      if (local_2) {
        const local = local_2.getBoundingClientRect();
        local_12({
          width: local.width,
          height: local.height,
        });
      }
    }
    if (local_36.current) {
      clearTimeout(local_36.current);
      local_36.current = null;
    }
    if (local !== null) {
      arg_8(local);
      local_37.current = null;
    }
    arg_6(false);
    local_10(null);
    return local_2;
  }, [arg, arg_3, arg_10, arg_8, arg_6]);
  const local_53 = imported(() => {
    local_12(null);
    if (local !== 0 || local_3 !== 0 || local_7 !== 1) {
      arg_6(true);
      local_2(0);
      local_4(0);
      local_8(1);
      if (local_36.current) {
        clearTimeout(local_36.current);
      }
      local_36.current = window.setTimeout(() => {
        local_36.current = null;
        arg_6(false);
      }, 300);
    }
  }, [local, local_3, local_7, arg_6]);
  const local_54 = imported_5(() => {
    if (local_11) {
      return local_11;
    }
    const local = local_37.current ?? arg;
    const local_2 = arg_3[local] || {
      width: 600,
      height: 400,
    };
    if (arg_5 && local_9 !== null) {
      const local = arg_3[local_9] || local_2;
      return {
        width: local.width,
        height: local.height,
      };
    }
    if (local_5 && local_34.current !== "y" && local !== 0) {
      const local =
        local < 0 ? Math.min(local + 1, arg_2 - 1) : Math.max(local - 1, 0);
      if (local === local) {
        return local_2;
      }
      const local_2 = arg_3[local] || local_2;
      const local_3 = local_2.width / 2 + local_2.width / 2;
      const local_4 = Math.min(Math.abs(local) / local_3, 1);
      return {
        width: local_2.width + (local_2.width - local_2.width) * local_4,
        height: local_2.height + (local_2.height - local_2.height) * local_4,
      };
    }
    return local_2;
  }, [local_11, arg_3, arg, arg_5, local_9, local_5, local, arg_2]);
  const local_55 = imported(() => {
    arg_6(true);
    local_4(window.innerHeight);
    local_8(0);
  }, [arg_6]);
  return {
    offsetX: local,
    offsetY: local_3,
    isDragging: local_5,
    opacity: local_7,
    wasDragging: local_35,
    displaySize: local_54,
    animateClose: local_55,
    freezeInFlight: local_52,
    unfreeze: local_53,
    zoom: {
      scale: local_13,
      panX: local_15,
      panY: local_17,
      isAnimating: local_19,
    },
    desktopHandlers: {
      onMouseDown: local_45,
      onMouseMove: local_46,
      onMouseUp: local_47,
      onMouseLeave: local_47,
    },
    mobileHandlers: {
      onTouchStart: local_48,
      onTouchMove: local_49,
      onTouchEnd: local_50,
      onTouchCancel: local_51,
    },
  };
}
const local_68136740 = "c_viewer";
const local_9b1e06e3 = "c_transitioning";
const local_472a5c39 = "c_windowContainer";
const local_ad11c8e8 = "c_mobileContainer";
const local_eeaff68a = "c_mobileSlide";
const local_cc8fa504 = "c_closing";
const local_c3660bff = "c_slide";
const local_44550d3b = "c_navArea";
const local_97326966 = "c_dots";
const local_3d40993b = "c_backdrop";
const local_5198a2f0 = "c_windowZoomed";
const local_2d2dc45b = "c_track";
const local_2251b4e5 = "c_mobileTrack";
const local_da986173 = "c_navLeft";
const local_8a71e1c3 = "c_navRight";
const local_0a50781b = "c_dot";
const local_6ab69625 = "c_active";
const local_b05e3d73 = "c_filmstrip";
const local_2cc25269 = "c_filmstripLeaving";
const local_b92bde6e = "c_filmshot";
const local_5756bcd2 = "c_filmshotActive";
const local_87a54fb0 = "c_filmshotImage";
const local_c642bb00 = {
  viewer: local_68136740,
  transitioning: local_9b1e06e3,
  windowContainer: local_472a5c39,
  mobileContainer: local_ad11c8e8,
  mobileSlide: local_eeaff68a,
  closing: local_cc8fa504,
  slide: local_c3660bff,
  navArea: local_44550d3b,
  dots: local_97326966,
  backdrop: local_3d40993b,
  windowZoomed: local_5198a2f0,
  track: local_2d2dc45b,
  mobileTrack: local_2251b4e5,
  navLeft: local_da986173,
  navRight: local_8a71e1c3,
  dot: local_0a50781b,
  active: local_6ab69625,
  filmstrip: local_b05e3d73,
  filmstripLeaving: local_2cc25269,
  filmshot: local_b92bde6e,
  filmshotActive: local_5756bcd2,
  filmshotImage: local_87a54fb0,
};
function fn_6a21b789({
  currentIndex: arg,
  total: arg_2,
  onPrev: arg_3,
  onNext: arg_4,
}) {
  if (arg_2 <= 1) {
    return null;
  }
  return imported_6(imported_7, {
    children: [
      imported_6("button", {
        className: `${local_c642bb00.navArea} ${local_c642bb00.navLeft}`,
        onClick: arg_3,
        disabled: arg === 0,
        children: imported_6(imported_12, {
          size: 24,
        }),
      }),
      imported_6("button", {
        className: `${local_c642bb00.navArea} ${local_c642bb00.navRight}`,
        onClick: arg_4,
        disabled: arg === arg_2 - 1,
        children: imported_6(imported_13, {
          size: 24,
        }),
      }),
    ],
  });
}
function fn_856a9d72({ total: arg, currentIndex: arg_2, onDotClick: arg_3 }) {
  if (arg <= 1) {
    return null;
  }
  return imported_6("div", {
    className: local_c642bb00.dots,
    children: Array.from(
      {
        length: arg,
      },
      (arg, arg_2) =>
        imported_6(
          "button",
          {
            className: `${local_c642bb00.dot} ${arg_2 === arg_2 ? local_c642bb00.active : ""}`,
            onClick: () => arg_3(arg_2),
          },
          arg_2,
        ),
    ),
  });
}
function fn_0b68fa19({
  images: arg,
  currentIndex: arg_2,
  isClosing: arg_3,
  onPick: arg_4,
}) {
  if (arg.length <= 1) {
    return null;
  }
  return imported_6("div", {
    className: `${local_c642bb00.filmstrip} ${arg_3 ? local_c642bb00.filmstripLeaving : ""}`,
    children: arg.map((arg, arg_2) =>
      imported_6(
        "button",
        {
          type: "button",
          className: `${local_c642bb00.filmshot} ${arg_2 === arg_2 ? local_c642bb00.filmshotActive : ""}`,
          onClick: (arg) => {
            arg.stopPropagation();
            arg_4(arg_2);
          },
          "aria-label": `Фотография ${arg_2 + 1}`,
          "aria-pressed": arg_2 === arg_2,
          children: imported_6("img", {
            src: arg.thumbUrl || arg.url,
            alt: "",
            className: local_c642bb00.filmshotImage,
          }),
        },
        arg.id,
      ),
    ),
  });
}
function fn_723d72f2(arg) {
  const {
    PI: local,
    min: local_2,
    max: local_3,
    cos: local_4,
    round: local_5,
  } = Math;
  const local_6 = arg[0] | (arg[1] << 8) | (arg[2] << 16);
  const local_7 = arg[3] | (arg[4] << 8);
  const local_8 = (local_6 & 63) / 63;
  const local_9 = ((local_6 >> 6) & 63) / 31.5 - 1;
  const local_10 = ((local_6 >> 12) & 63) / 31.5 - 1;
  const local_11 = ((local_6 >> 18) & 31) / 31;
  const local_12 = local_6 >> 23;
  const local_13 = ((local_7 >> 3) & 63) / 63;
  const local_14 = ((local_7 >> 9) & 63) / 63;
  const local_15 = local_7 >> 15;
  const local_16 = local_3(3, local_15 ? (local_12 ? 5 : 7) : local_7 & 7);
  const local_17 = local_3(3, local_15 ? local_7 & 7 : local_12 ? 5 : 7);
  const local_18 = local_12 ? (arg[5] & 15) / 15 : 1;
  const local_19 = (arg[5] >> 4) / 15;
  const local_20 = local_12 ? 6 : 5;
  let local_21 = 0;
  const local_22 = (arg, arg_2, arg_3) => {
    const local = [];
    for (let local = 0; local < arg_2; local++) {
      for (
        let local = local ? 0 : 1;
        local * arg_2 < arg * (arg_2 - local);
        local++
      ) {
        local.push(
          (((arg[local_20 + (local_21 >> 1)] >> ((local_21++ & 1) << 2)) & 15) /
            7.5 -
            1) *
            arg_3,
        );
      }
    }
    return local;
  };
  const local_23 = local_22(local_16, local_17, local_11);
  const local_24 = local_22(3, 3, local_13 * 1.25);
  const local_25 = local_22(3, 3, local_14 * 1.25);
  const local_26 = local_12 ? local_22(5, 5, local_19) : null;
  const local_27 = fn_2a81af50(arg);
  const local_28 = local_5(local_27 > 1 ? 32 : 32 * local_27);
  const local_29 = local_5(local_27 > 1 ? 32 / local_27 : 32);
  const local_30 = new Uint8Array(local_28 * local_29 * 4);
  const local_31 = [];
  const local_32 = [];
  for (let local = 0, local_2 = 0; local < local_29; local++) {
    for (let local = 0; local < local_28; local++, local_2 += 4) {
      let local = local_8;
      let local_2 = local_9;
      let local_3 = local_10;
      let local_4 = local_18;
      for (
        let local = 0, local_2 = local_3(local_16, local_12 ? 5 : 3);
        local < local_2;
        local++
      ) {
        local_31[local] = local_4((local / local_28) * (local + 0.5) * local);
      }
      for (
        let local = 0, local_2 = local_3(local_17, local_12 ? 5 : 3);
        local < local_2;
        local++
      ) {
        local_32[local] = local_4((local / local_29) * (local + 0.5) * local);
      }
      for (let local = 0, local_2 = 0; local < local_17; local++) {
        for (
          let local = local ? 0 : 1, local_2 = local_32[local] * 2;
          local * local_17 < local_16 * (local_17 - local);
          local++, local_2++
        ) {
          local += local_23[local_2] * local_31[local] * local_2;
        }
      }
      for (let local = 0, local_2 = 0; local < 3; local++) {
        for (
          let local = local ? 0 : 1, local_2 = local_32[local] * 2;
          local < 3 - local;
          local++, local_2++
        ) {
          const local = local_31[local] * local_2;
          local_2 += local_24[local_2] * local;
          local_3 += local_25[local_2] * local;
        }
      }
      if (local_12 && local_26) {
        for (let local = 0, local_2 = 0; local < 5; local++) {
          for (
            let local = local ? 0 : 1, local_2 = local_32[local] * 2;
            local < 5 - local;
            local++, local_2++
          ) {
            local_4 += local_26[local_2] * local_31[local] * local_2;
          }
        }
      }
      const local_5 = local - (2 / 3) * local_2;
      const local_6 = (3 * local - local_5 + local_3) / 2;
      const local_7 = local_6 - local_3;
      local_30[local_2] = local_3(0, 255 * local_2(1, local_6));
      local_30[local_2 + 1] = local_3(0, 255 * local_2(1, local_7));
      local_30[local_2 + 2] = local_3(0, 255 * local_2(1, local_5));
      local_30[local_2 + 3] = local_3(0, 255 * local_2(1, local_4));
    }
  }
  return {
    w: local_28,
    h: local_29,
    rgba: local_30,
  };
}
function fn_2a81af50(arg) {
  const local = arg[3];
  const local_2 = arg[2] & 128;
  const local_3 = arg[4] & 128;
  const local_4 = local_3 ? (local_2 ? 5 : 7) : local & 7;
  const local_5 = local_3 ? local & 7 : local_2 ? 5 : 7;
  return local_4 / local_5;
}
function fn_b440327e(arg, arg_2, arg_3) {
  const local = arg * 4 + 1;
  const local_2 = 6 + arg_2 * (5 + local);
  const local_3 = [
    137,
    80,
    78,
    71,
    13,
    10,
    26,
    10,
    0,
    0,
    0,
    13,
    73,
    72,
    68,
    82,
    0,
    0,
    arg >> 8,
    arg & 255,
    0,
    0,
    arg_2 >> 8,
    arg_2 & 255,
    8,
    6,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    local_2 >>> 24,
    (local_2 >> 16) & 255,
    (local_2 >> 8) & 255,
    local_2 & 255,
    73,
    68,
    65,
    84,
    120,
    1,
  ];
  const local_4 = [
    0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960,
    1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376,
    -2032938284, -1609899400, -1111625188,
  ];
  let local_5 = 1;
  let local_6 = 0;
  for (
    let local = 0, local_2 = 0, local_3 = local - 1;
    local < arg_2;
    local++, local_3 += local - 1
  ) {
    local_3.push(
      local + 1 < arg_2 ? 0 : 1,
      local & 255,
      local >> 8,
      ~local & 255,
      (local >> 8) ^ 255,
      0,
    );
    for (local_6 = (local_6 + local_5) % 65521; local_2 < local_3; local_2++) {
      const local = arg_3[local_2] & 255;
      local_3.push(local);
      local_5 = (local_5 + local) % 65521;
      local_6 = (local_6 + local_5) % 65521;
    }
  }
  local_3.push(
    local_6 >> 8,
    local_6 & 255,
    local_5 >> 8,
    local_5 & 255,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    73,
    69,
    78,
    68,
    174,
    66,
    96,
    130,
  );
  for (const [local, local_2] of [
    [12, 29],
    [37, 41 + local_2],
  ]) {
    let local = -1;
    for (let local = local; local < local_2; local++) {
      local ^= local_3[local];
      local = (local >>> 4) ^ local_4[local & 15];
      local = (local >>> 4) ^ local_4[local & 15];
    }
    local = ~local;
    let local_2 = local_2;
    local_3[local_2++] = local >>> 24;
    local_3[local_2++] = (local >> 16) & 255;
    local_3[local_2++] = (local >> 8) & 255;
    local_3[local_2++] = local & 255;
  }
  return `data:image/png;base64,${btoa(String.fromCharCode(...local_3))}`;
}
function fn_0a49a74c(arg) {
  const { w: local, h: local_2, rgba: local_3 } = fn_723d72f2(arg);
  return fn_b440327e(local, local_2, local_3);
}
function fn_00da9caf(arg) {
  if (!arg) {
    return null;
  }
  try {
    const local = atob(arg);
    const local_2 = new Uint8Array(local.length);
    for (let local = 0; local < local.length; local++) {
      local_2[local] = local.charCodeAt(local);
    }
    return fn_0a49a74c(local_2);
  } catch {
    return null;
  }
}
function fn_1bd8ba58({
  img: arg,
  isActive: arg_2,
  style: arg_3,
  dataViewerImage: arg_4,
  onFullReady: arg_5,
}) {
  const {
    url: local,
    thumbUrl: local_2,
    loadSrc: local_3,
    loadThumb: local_4,
  } = arg;
  const [local_5, local_6] = imported_2(null);
  const [local_7, local_8] = imported_2(null);
  imported_3(() => {
    if (!local_4 || local_2 || local_7 || local_5) {
      return;
    }
    let local = false;
    local_4().then((arg) => {
      if (!local && arg) {
        local_8(arg);
      }
    });
    return () => {
      local = true;
    };
  }, [local_4, local_2, local_7, local_5]);
  const [local_9, local_10] = imported_2(() => {
    if (local_3) {
      return false;
    }
    if (!local_2) {
      return true;
    }
    if (!arg_2) {
      return false;
    }
    const local = new Image();
    local.src = local;
    return local.complete;
  });
  const [local_11, local_12] = imported_2(false);
  const local_13 = imported_4(null);
  imported_3(() => {
    const local = new AbortController();
    local_13.current = local;
    return () => local.abort();
  }, []);
  imported_3(() => {
    if (!local_3 || !arg_2 || local_5 || local_11) {
      return;
    }
    let local = false;
    local_3(local_13.current?.signal).then((arg) => {
      if (local) {
        return;
      }
      if (!arg) {
        local_12(true);
        return;
      }
      const local = new Image();
      local.src = arg;
      const local_2 = () => {
        if (!local) {
          local_6(arg);
          local_10(true);
        }
      };
      if (local.complete) {
        local_2();
        return;
      }
      local.onload = () => {
        (local.decode ? local.decode() : Promise.resolve())
          .catch(() => {})
          .then(local_2);
      };
    });
    return () => {
      local = true;
    };
  }, [local_3, arg_2, local_5, local_11]);
  imported_3(() => {
    if (local_3 && !local_11) {
      return;
    }
    if (!local_2) {
      local_10(true);
      return;
    }
    if (local_9 || !arg_2) {
      return;
    }
    const local = new Image();
    local.src = local;
    if (local.complete) {
      local_10(true);
      return;
    }
    let local_2 = false;
    const local_3 = () => {
      if (!local_2) {
        local_10(true);
      }
    };
    local.onload = () => {
      (local.decode ? local.decode() : Promise.resolve())
        .catch(() => {})
        .then(local_3);
    };
    return () => {
      local_2 = true;
      local.onload = null;
    };
  }, [local, local_2, arg_2, local_9, local_3, local_11]);
  imported_3(() => {
    arg_2 && local_9 && arg_5?.();
  }, [arg_2, local_9]);
  const local_14 = imported_5(
    () => fn_00da9caf(arg.thumbhash),
    [arg.thumbhash],
  );
  return imported_6("img", {
    src:
      local_3 && !local_11
        ? (local_5 ?? local_2 ?? local_7 ?? undefined)
        : local_9 || !local_2
          ? local
          : local_2,
    alt: "",
    draggable: false,
    decoding: arg_2 ? "sync" : "async",
    loading: arg_2 ? "eager" : "lazy",
    ...(arg_4
      ? {
          "data-viewer-image": true,
        }
      : {}),
    style: {
      ...(arg_3 ?? {}),
      ...(!local_9 && local_14
        ? {
            backgroundImage: `url(${local_14})`,
            backgroundSize: "100% 100%",
          }
        : {}),
    },
  });
}
const local_f06debfc_4 = 2;
function fn_5d7bad9d({
  images: arg,
  imageSizes: arg_2,
  currentIndex: arg_3,
  offsetX: arg_4,
  offsetY: arg_5,
  isAnimating: arg_6,
  displaySize: arg_7,
  trackRef: arg_8,
  handlers: arg_9,
  onImageClick: arg_10,
  onActiveFullReady: arg_11,
  zoom: arg_12 = null,
}) {
  const local = imported_5(() => {
    let local = 0;
    for (let local = 0; local < arg_3; local++) {
      local += arg_2[local]?.width || 0;
    }
    return local;
  }, [arg_3, arg_2]);
  return imported_6("div", {
    className: `${local_c642bb00.windowContainer} ${arg_12 ? local_c642bb00.windowZoomed : ""}`,
    style: {
      width: `${arg_7.width}px`,
      height: `${arg_7.height}px`,
      transform: `translateY(${arg_5}px)`,
      transition: arg_6
        ? "width 0.5s cubic-bezier(0.32, 0.72, 0, 1), height 0.5s cubic-bezier(0.32, 0.72, 0, 1), transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
        : "none",
    },
    onMouseDown: arg_9.onMouseDown,
    onMouseMove: arg_9.onMouseMove,
    onMouseUp: arg_9.onMouseUp,
    onMouseLeave: arg_9.onMouseLeave,
    children: imported_6("div", {
      ref: arg_8,
      className: local_c642bb00.track,
      style: {
        transform: `translateX(${-local + arg_4}px)`,
        transition: arg_6
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: arg.map((arg, arg_2) => {
        const local = Math.abs(arg_2 - arg_3) <= local_f06debfc_4;
        const local_2 = arg_2[arg_2];
        const local_3 = arg_2 === arg_3;
        return imported_6(
          "div",
          {
            className: local_c642bb00.slide,
            onClick: arg_10,
            style: {
              ...(local_2
                ? {
                    width: `${local_2.width}px`,
                    height: `${local_2.height}px`,
                  }
                : {}),
              transition: arg_12?.isPanning
                ? "none"
                : "transform 220ms cubic-bezier(0.32, 0.72, 0, 1)",
              ...(local_3 && arg_12
                ? {
                    transform: `translate(${arg_12.panX}px, ${arg_12.panY}px) scale(${arg_12.scale})`,
                    transformOrigin: `${arg_12.originX}% ${arg_12.originY}%`,
                  }
                : {}),
            },
            "data-active-slide": local_3 ? "" : undefined,
            "data-slide-index": arg_2,
            children:
              local &&
              imported_6(fn_1bd8ba58, {
                img: arg,
                isActive: local_3,
                onFullReady: local_3 ? arg_11 : undefined,
                style: {
                  width: local_2?.width || "auto",
                  height: local_2?.height || "auto",
                },
              }),
          },
          arg.id,
        );
      }),
    }),
  });
}
const local_f06debfc_5 = 2;
function fn_9cf23fc2({
  images: arg,
  imageSizes: arg_2,
  currentIndex: arg_3,
  offsetX: arg_4,
  offsetY: arg_5,
  isAnimating: arg_6,
  isClosing: arg_7,
  handlers: arg_8,
  onImageClick: arg_9,
  onActiveFullReady: arg_10,
  zoom: arg_11,
}) {
  return imported_6("div", {
    className: local_c642bb00.mobileContainer,
    style: {
      transform: `translateY(${arg_5}px)`,
      transition: arg_6
        ? `transform ${arg_7 ? "0.15s" : "0.3s"} cubic-bezier(0.32, 0.72, 0, 1)`
        : "none",
    },
    onTouchStart: arg_8.onTouchStart,
    onTouchMove: arg_8.onTouchMove,
    onTouchEnd: arg_8.onTouchEnd,
    onTouchCancel: arg_8.onTouchCancel,
    children: imported_6("div", {
      className: local_c642bb00.mobileTrack,
      style: {
        transform: `translateX(calc(-${arg_3 * 100}% + ${arg_4}px))`,
        transition: arg_6
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: arg.map((arg, arg_2) => {
        const local = Math.abs(arg_2 - arg_3) <= local_f06debfc_5;
        const local_2 = arg_2 === arg_3;
        const local_3 = arg_2[arg_2];
        const local_4 = local_3
          ? {
              width: `${local_3.width}px`,
              height: `${local_3.height}px`,
            }
          : {};
        if (local_2 && arg_11.scale !== 1) {
          local_4.transform = `translate(${arg_11.panX}px, ${arg_11.panY}px) scale(${arg_11.scale})`;
          local_4.transition = arg_11.isAnimating
            ? "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
            : "none";
        }
        return imported_6(
          "div",
          {
            className: local_c642bb00.mobileSlide,
            onClick: arg_9,
            "data-active-slide": local_2 ? "" : undefined,
            "data-slide-index": arg_2,
            children:
              local &&
              imported_6(fn_1bd8ba58, {
                img: arg,
                isActive: local_2,
                onFullReady: local_2 ? arg_10 : undefined,
                dataViewerImage: true,
                style: local_4,
              }),
          },
          arg.id,
        );
      }),
    }),
  });
}
const local_f06debfc_6 = 280;
const local_b45f1b6a = "cubic-bezier(0.32, 0.72, 0, 1)";
const local_f06debfc_7 = 220;
const local_50cfe1ce = {
  transform: "none",
  clipPath: "inset(0px round 0px)",
  borderRadius: "0px",
};
function fn_1c822420(arg, arg_2) {
  if (!arg || arg === "0px" || arg_2 <= 0 || !Number.isFinite(arg_2)) {
    return "0px";
  }
  return arg.replace(/([\d.]+)px/g, (arg, arg_2) => {
    const local = parseFloat(arg_2) / arg_2;
    if (Number.isFinite(local)) {
      return `${local}px`;
    }
    return "0px";
  });
}
const local_f06debfc_8 = 2.5;
const local_347c45cc = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
export function fn_9d6d4906({
  images: arg,
  initialIndex: arg_2,
  sourceRect: arg_3 = null,
  resolveSourceRect: arg_4 = null,
  zoomable: arg_5 = false,
  thumbs: arg_6 = false,
  onClose: arg_7,
}) {
  const local = imported_4(null);
  const local_2 = imported_4(null);
  const local_3 = imported_4(null);
  const local_4 = imported_4(null);
  const local_5 = imported_4(null);
  const local_6 = imported_4(local_347c45cc()).current;
  const [local_7, local_8] = imported_2(false);
  const [local_9, local_10] = imported_2(arg_3 !== null && !local_6);
  const local_11 = imported_8();
  const local_12 = fn_bb641065(arg, local_11);
  const local_13 = fn_a180c8aa({
    initialIndex: arg_2,
    total: arg.length,
  });
  imported_11();
  const local_14 = imported(() => {
    const local = local.current;
    if (local) {
      return local.querySelector("[data-active-slide] img");
    }
    return null;
  }, []);
  const local_15 = imported((arg) => {
    const local = local.current;
    if (local) {
      return local.querySelector(`[data-slide-index="${arg}"] img`);
    }
    return null;
  }, []);
  const local_16 = imported(() => {
    const local = local_3.current;
    if (local_4.current === "open" && local && local.playState === "running") {
      local.finish();
    }
    local_10(false);
  }, []);
  const local_17 = imported(() => {
    local_16();
    local_13.goToPrev();
  }, [local_16, local_13.goToPrev]);
  const local_18 = imported(() => {
    local_16();
    local_13.goToNext();
  }, [local_16, local_13.goToNext]);
  const local_19 = imported((arg, arg_2) => {
    if (!arg_2) {
      return null;
    }
    const local = arg_2.getBoundingClientRect();
    if (local.width === 0 || local.height === 0) {
      return null;
    }
    const local_2 = arg.hiddenLeft ?? 0;
    const local_3 = arg.hiddenTop ?? 0;
    const local_4 = arg.hiddenRight ?? 0;
    const local_5 = arg.hiddenBottom ?? 0;
    const local_6 = arg.width + local_2 + local_4;
    const local_7 = arg.height + local_3 + local_5;
    const local_8 = (local_2 / local_6) * local.width;
    const local_9 = (local_3 / local_7) * local.height;
    const local_10 = (local_4 / local_6) * local.width;
    const local_11 = (local_5 / local_7) * local.height;
    const local_12 = local.width - local_8 - local_10;
    const local_13 = local.height - local_9 - local_11;
    const local_14 = Math.max(arg.width / local_12, arg.height / local_13);
    const local_15 = arg.width / local_14;
    const local_16 = arg.height / local_14;
    const local_17 = Math.max(0, (local_12 - local_15) / 2);
    const local_18 = Math.max(0, (local_13 - local_16) / 2);
    const local_19 = local_8 + local_17;
    const local_20 = local_9 + local_18;
    const local_21 = local_10 + local_17;
    const local_22 = local_11 + local_18;
    const local_23 = (local_19 + (local.width - local_21)) / 2;
    const local_24 = (local_20 + (local.height - local_22)) / 2;
    const local_25 = local.left + local.width / 2;
    const local_26 = local.top + local.height / 2;
    const local_27 = local_25 + (local_23 - local.width / 2) * local_14;
    const local_28 = local_26 + (local_24 - local.height / 2) * local_14;
    const local_29 = arg.left + arg.width / 2;
    const local_30 = arg.top + arg.height / 2;
    const local_31 = local_29 - local_27;
    const local_32 = local_30 - local_28;
    const local_33 = `translate(${local_31}px, ${local_32}px) scale(${local_14})`;
    const local_34 = fn_1c822420(arg.borderRadius, local_14);
    const local_35 = `inset(${local_20}px ${local_21}px ${local_22}px ${local_19}px round ${local_34})`;
    return {
      transform: local_33,
      clipPath: local_35,
      borderRadius: local_34,
    };
  }, []);
  const local_20 = imported((arg) => {
    const local = getComputedStyle(arg);
    return {
      transform: local.transform === "none" ? "none" : local.transform,
      clipPath:
        local.clipPath === "none" ? "inset(0px round 0px)" : local.clipPath,
      borderRadius: `${local.borderTopLeftRadius} ${local.borderTopRightRadius} ${local.borderBottomRightRadius} ${local.borderBottomLeftRadius}`,
    };
  }, []);
  const local_21 = (arg, arg_2) => {
    arg.style.transform = arg_2.transform;
    arg.style.clipPath = arg_2.clipPath;
    arg.style.borderRadius = arg_2.borderRadius;
  };
  const local_22 = (arg) => {
    arg.style.removeProperty("transform");
    arg.style.removeProperty("clip-path");
    arg.style.removeProperty("border-radius");
  };
  const local_23 = imported((arg, arg_2) => {
    local_21(arg, arg_2);
    const local = arg.animate(
      [
        arg_2,
        {
          ...local_50cfe1ce,
        },
      ],
      {
        duration: local_f06debfc_6,
        easing: local_b45f1b6a,
        fill: "forwards",
      },
    );
    local_3.current = local;
    local_4.current = "open";
    local_5.current = arg;
    local.addEventListener("finish", () => {
      local_22(arg);
      local.cancel();
      if (local_3.current === local) {
        local_3.current = null;
        local_4.current = null;
      }
      local_10(false);
    });
    local.addEventListener("cancel", () => local_10(false), {
      once: true,
    });
  }, []);
  const local_24 = imported(
    (arg, arg_2, arg_3) => {
      local_21(arg, arg_2);
      const local = arg.animate(
        [
          arg_2,
          {
            transform: arg_3.transform,
            clipPath: arg_3.clipPath,
            borderRadius: arg_3.borderRadius,
          },
        ],
        {
          duration: local_f06debfc_6,
          easing: local_b45f1b6a,
          fill: "forwards",
        },
      );
      local_3.current = local;
      local_4.current = "close";
      local_5.current = arg;
      local.addEventListener("finish", () => arg_7());
    },
    [arg_7],
  );
  const local_25 = imported(
    (arg) => {
      if (arg_4) {
        return arg_4(arg);
      }
      if (arg === arg_2) {
        return arg_3;
      }
      return null;
    },
    [arg_4, arg_2, arg_3],
  );
  const local_26 = imported(
    (arg = false) => {
      if (local_6) {
        arg_7();
        return;
      }
      const local = local_3.current;
      const local_2 = local_5.current;
      if (local && local.playState === "running" && local_2) {
        const local = local_4.current === "open";
        const local_2 = local_20(local_2);
        local.cancel();
        local_22(local_2);
        local_3.current = null;
        local_4.current = null;
        if (local) {
          const local = local_27.freezeInFlight();
          const local_2 = local_25(local);
          const local_3 = local_2 ? local_19(local_2, local_2) : null;
          local_8(true);
          if (local_3) {
            local_24(local_2, local_2, local_3);
          } else {
            setTimeout(arg_7, local_f06debfc_6);
          }
        } else {
          local_27.unfreeze();
          local_8(false);
          local_10(true);
          local_23(local_2, local_2);
        }
        return;
      }
      if (local_7) {
        return;
      }
      const local_3 = local_27.freezeInFlight();
      const local_4 = local_25(local_3);
      if (arg && local_11 && !local_4) {
        local_27.animateClose();
        setTimeout(arg_7, 150);
        return;
      }
      local_8(true);
      if (local_4) {
        const local = local_15(local_3);
        const local_2 = local_19(local_4, local);
        if (local_2 && local) {
          local_24(
            local,
            {
              ...local_50cfe1ce,
            },
            local_2,
          );
          return;
        }
      }
      setTimeout(arg_7, local_f06debfc_6);
    },
    [
      local_7,
      local_25,
      local_13.currentIndex,
      local_20,
      local_19,
      local_23,
      local_24,
      local_15,
      local_11,
      arg_7,
      local_6,
    ],
  );
  const local_27 = fn_6d555ac9({
    currentIndex: local_13.currentIndex,
    imagesCount: arg.length,
    imageSizes: local_12,
    isMobile: local_11,
    isAnimating: local_13.isAnimating,
    setIsAnimating: local_13.setIsAnimating,
    cancelAnimation: local_13.cancelAnimation,
    onIndexChange: local_13.goToIndex,
    onClose: local_26,
    trackRef: local_2,
    onDragStart: local_16,
  });
  const [local_28, local_29] = imported_2(null);
  const local_30 = imported_4({
    x: 0,
    y: 0,
    panX: 0,
    panY: 0,
  });
  const local_31 = imported_4(false);
  const local_32 = imported_4(false);
  const local_33 = imported_4(null);
  const local_34 = imported_4(null);
  const local_35 = imported(
    (arg = false) => {
      if (local_34.current === null) {
        if (local_28 && !local_11 && !local_6) {
          local_31.current = false;
          local_29(null);
          local_34.current = window.setTimeout(() => {
            local_34.current = null;
            local_26(arg);
          }, local_f06debfc_7);
          return;
        }
        local_26(arg);
      }
    },
    [local_26, local_11, local_6, local_28],
  );
  imported_3(
    () => () => {
      if (local_34.current !== null) {
        window.clearTimeout(local_34.current);
      }
    },
    [],
  );
  const local_36 = imported(() => {
    if (!local_7) {
      local_35();
    }
  }, [local_7, local_35]);
  fn_75a20b26({
    onClose: local_36,
    onPrev: local_17,
    onNext: local_18,
  });
  imported_3(() => {
    const local = [
      arg[local_13.currentIndex - 1],
      arg[local_13.currentIndex + 1],
      arg[local_13.currentIndex - 2],
      arg[local_13.currentIndex + 2],
    ];
    for (const local of local) {
      if (!local || (local.loadSrc && !local.thumbUrl)) {
        continue;
      }
      const local = new Image();
      local.decoding = "async";
      local.src = local.thumbUrl || local.url;
    }
  }, [arg, local_13.currentIndex]);
  const [local_37, local_38] = imported_2(-1);
  const local_39 = imported(() => {
    local_38(local_13.currentIndex);
  }, [local_13.currentIndex]);
  const local_40 = imported_4(null);
  imported_3(() => {
    const local = new AbortController();
    local_40.current = local;
    return () => local.abort();
  }, []);
  imported_3(() => {
    if (local_37 === local_13.currentIndex) {
      for (const local of [
        arg[local_13.currentIndex - 1],
        arg[local_13.currentIndex + 1],
      ]) {
        if (!local) {
          continue;
        }
        if (local.loadSrc) {
          local.loadSrc(local_40.current?.signal).then((arg) => {
            if (!arg) {
              return;
            }
            const local = new Image();
            local.decoding = "async";
            local.src = arg;
          });
          continue;
        }
        if (!local.thumbUrl) {
          continue;
        }
        const local = new Image();
        local.decoding = "async";
        local.src = local.url;
      }
    }
  }, [local_37, local_13.currentIndex, arg]);
  imported_9(() => {
    if (!arg_3 || local_6) {
      local_10(false);
      return;
    }
    const local = local_14();
    if (!local) {
      local_10(false);
      return;
    }
    const local_2 = local_19(arg_3, local);
    if (!local_2) {
      local_10(false);
      return;
    }
    local_23(local, {
      transform: local_2.transform,
      clipPath: local_2.clipPath,
      borderRadius: local_2.borderRadius,
    });
    return () => {
      local_3.current?.cancel();
    };
  }, []);
  imported_3(() => {
    local_29(null);
  }, [local_13.currentIndex]);
  const local_41 = imported((arg, arg_2, arg_3) => {
    const local = arg_2 === "x" ? arg_3.width : arg_3.height;
    const local_2 = (arg_2 === "x" ? arg_3.originX : arg_3.originY) / 100;
    const local_3 = local * local_2 * (arg_3.scale - 1);
    const local_4 = local * (1 - local_2) * (arg_3.scale - 1);
    return Math.max(-local_4, Math.min(local_3, arg));
  }, []);
  const local_42 = imported(
    (arg, arg_2, arg_3) => {
      const local = local_41(arg, arg_2, arg_3);
      const local_2 = arg - local;
      if (local_2 === 0) {
        return arg;
      }
      return (
        local + Math.sign(local_2) * Math.min(72, Math.abs(local_2) * 0.18)
      );
    },
    [local_41],
  );
  const local_43 = imported(
    (arg) => {
      if (!local_31.current || local_11) {
        return;
      }
      const local = arg.clientX - local_30.current.x;
      const local_2 = arg.clientY - local_30.current.y;
      if (Math.abs(local) > 4 || Math.abs(local_2) > 4) {
        local_32.current = true;
      }
      local_29(
        (arg) =>
          arg && {
            ...arg,
            panX: local_42(local_30.current.panX + local, "x", arg),
            panY: local_42(local_30.current.panY + local_2, "y", arg),
          },
      );
      arg.preventDefault();
    },
    [local_42, local_11],
  );
  const local_44 = imported(() => {
    if (local_31.current) {
      local_31.current = false;
      local_29(
        (arg) =>
          arg && {
            ...arg,
            panX: local_41(arg.panX, "x", arg),
            panY: local_41(arg.panY, "y", arg),
            isPanning: false,
          },
      );
      if (local_32.current) {
        if (local_33.current !== null) {
          window.clearTimeout(local_33.current);
        }
        local_33.current = window.setTimeout(() => {
          local_32.current = false;
          local_33.current = null;
        }, 0);
      }
    }
  }, [local_41]);
  imported_3(() => {
    window.addEventListener("mousemove", local_43);
    window.addEventListener("mouseup", local_44);
    window.addEventListener("blur", local_44);
    return () => {
      window.removeEventListener("mousemove", local_43);
      window.removeEventListener("mouseup", local_44);
      window.removeEventListener("blur", local_44);
      if (local_33.current !== null) {
        window.clearTimeout(local_33.current);
      }
    };
  }, [local_44, local_43]);
  const local_45 = {
    onMouseDown: (arg) => {
      if (!local_28 || local_11) {
        local_27.desktopHandlers.onMouseDown(arg);
        return;
      }
      if (arg.button === 0) {
        local_31.current = true;
        local_32.current = false;
        local_30.current = {
          x: arg.clientX,
          y: arg.clientY,
          panX: local_28.panX,
          panY: local_28.panY,
        };
        local_29(
          (arg) =>
            arg && {
              ...arg,
              isPanning: true,
            },
        );
        arg.preventDefault();
      }
    },
    onMouseMove: (arg) => {
      if (!local_28 || local_11) {
        local_27.desktopHandlers.onMouseMove(arg);
        return;
      }
    },
    onMouseUp: () => {
      if (!local_28 || local_11) {
        local_27.desktopHandlers.onMouseUp();
        return;
      }
      local_44();
    },
    onMouseLeave: () => {
      if (!local_28 || local_11) {
        local_27.desktopHandlers.onMouseLeave();
        return;
      }
    },
  };
  const local_46 = imported(
    (arg) => {
      if (local_32.current) {
        local_32.current = false;
        return;
      }
      if (local_27.wasDragging.current) {
        local_27.wasDragging.current = false;
        return;
      }
      if (arg.target === local.current) {
        local_35();
      }
    },
    [local_35],
  );
  const local_47 = imported(
    (arg) => {
      if (local_32.current) {
        local_32.current = false;
        return;
      }
      if (local_27.wasDragging.current) {
        local_27.wasDragging.current = false;
        return;
      }
      if (arg_5 && !local_11) {
        if (local_28) {
          local_29(null);
          return;
        }
        const local = arg?.currentTarget?.getBoundingClientRect();
        if (!local || !arg) {
          local_29({
            scale: local_f06debfc_8,
            originX: 50,
            originY: 50,
            panX: 0,
            panY: 0,
            width: local?.width || local_27.displaySize.width,
            height: local?.height || local_27.displaySize.height,
            isPanning: false,
          });
          return;
        }
        local_29({
          scale: local_f06debfc_8,
          originX: ((arg.clientX - local.left) / local.width) * 100,
          originY: ((arg.clientY - local.top) / local.height) * 100,
          panX: 0,
          panY: 0,
          width: local.width,
          height: local.height,
          isPanning: false,
        });
        return;
      }
      local_26(local_11);
    },
    [local_26, local_11, arg_5, local_28, local_27.displaySize],
  );
  return imported_10(
    imported_6("div", {
      ref: local,
      className: `${local_c642bb00.viewer} ${local_7 ? local_c642bb00.closing : ""} ${local_9 ? local_c642bb00.transitioning : ""} ym-hide-content`,
      style: {
        "--opacity": local_27.opacity,
        "--opacity-transition": local_13.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: local_46,
      children: [
        imported_6("div", {
          className: local_c642bb00.backdrop,
          "aria-hidden": true,
        }),
        !local_11 &&
          imported_6(fn_5d7bad9d, {
            images: arg,
            imageSizes: local_12,
            currentIndex: local_13.currentIndex,
            offsetX: local_27.offsetX,
            offsetY: local_27.offsetY,
            isAnimating: local_13.isAnimating,
            displaySize: local_27.displaySize,
            trackRef: local_2,
            handlers: local_45,
            onImageClick: local_47,
            onActiveFullReady: local_39,
            zoom: local_28,
          }),
        local_11 &&
          imported_6(fn_9cf23fc2, {
            images: arg,
            imageSizes: local_12,
            currentIndex: local_13.currentIndex,
            offsetX: local_27.offsetX,
            offsetY: local_27.offsetY,
            isAnimating: local_13.isAnimating,
            isClosing: false,
            handlers: local_27.mobileHandlers,
            onImageClick: local_47,
            onActiveFullReady: local_39,
            zoom: local_27.zoom,
          }),
        !local_11 &&
          imported_6(fn_6a21b789, {
            currentIndex: local_13.currentIndex,
            total: arg.length,
            onPrev: local_17,
            onNext: local_18,
          }),
        arg_6
          ? imported_6(fn_0b68fa19, {
              images: arg,
              currentIndex: local_13.currentIndex,
              isClosing: local_7,
              onPick: (arg) => {
                local_16();
                local_13.goToIndex(arg);
              },
            })
          : imported_6(fn_856a9d72, {
              total: arg.length,
              currentIndex: local_13.currentIndex,
              onDotClick: (arg) => {
                local_16();
                local_13.goToIndex(arg);
              },
            }),
      ],
    }),
    document.body,
  );
}
export { fn_9d6d4906 as default };
