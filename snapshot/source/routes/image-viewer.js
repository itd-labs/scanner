import {
  symbol_291 as imported,
  symbol_222 as imported_2,
  symbol_282 as imported_3,
  symbol_002 as imported_4,
  symbol_036 as imported_5,
  symbol_295 as imported_6,
  symbol_020 as imported_7,
  symbol_111 as imported_8,
  symbol_101 as imported_9,
  symbol_147 as imported_10,
  symbol_100 as imported_11,
  symbol_041 as imported_12,
  symbol_103 as imported_13,
} from "../entry.js";
import { I as imported_14 } from "../components/icon-download.js";
import { I as imported_15 } from "../components/icon-chevron-left.js";
import { I as imported_16 } from "../components/icon-chevron-right.js";
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
const local_bf41db52 = "c_fadeClosing";
const local_e31f1c74 = "c_toolbar";
const local_54499ee8 = "c_counter";
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
const local_f2bf345a = {
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
  fadeClosing: local_bf41db52,
  toolbar: local_e31f1c74,
  counter: local_54499ee8,
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
function fn_a5f53a56({
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
        type: "button",
        "aria-label": "Предыдущее изображение",
        className: `${local_f2bf345a.navArea} ${local_f2bf345a.navLeft}`,
        onClick: arg_3,
        disabled: arg === 0,
        children: imported_6(imported_15, {
          size: 24,
        }),
      }),
      imported_6("button", {
        type: "button",
        "aria-label": "Следующее изображение",
        className: `${local_f2bf345a.navArea} ${local_f2bf345a.navRight}`,
        onClick: arg_4,
        disabled: arg === arg_2 - 1,
        children: imported_6(imported_16, {
          size: 24,
        }),
      }),
    ],
  });
}
function fn_11c8fa81({ total: arg, currentIndex: arg_2, onDotClick: arg_3 }) {
  if (arg <= 1) {
    return null;
  }
  return imported_6("div", {
    className: local_f2bf345a.dots,
    children: Array.from(
      {
        length: arg,
      },
      (arg, arg_2) =>
        imported_6(
          "button",
          {
            className: `${local_f2bf345a.dot} ${arg_2 === arg_2 ? local_f2bf345a.active : ""}`,
            onClick: () => arg_3(arg_2),
          },
          arg_2,
        ),
    ),
  });
}
function fn_d38ee55b({
  images: arg,
  currentIndex: arg_2,
  isClosing: arg_3,
  onPick: arg_4,
}) {
  if (arg.length <= 1) {
    return null;
  }
  return imported_6("div", {
    className: `${local_f2bf345a.filmstrip} ${arg_3 ? local_f2bf345a.filmstripLeaving : ""}`,
    children: arg.map((arg, arg_2) =>
      imported_6(
        "button",
        {
          type: "button",
          className: `${local_f2bf345a.filmshot} ${arg_2 === arg_2 ? local_f2bf345a.filmshotActive : ""}`,
          onClick: (arg) => {
            arg.stopPropagation();
            arg_4(arg_2);
          },
          "aria-label": `Фотография ${arg_2 + 1}`,
          "aria-pressed": arg_2 === arg_2,
          children: imported_6("img", {
            src: arg.thumbUrl || arg.url,
            alt: "",
            className: local_f2bf345a.filmshotImage,
          }),
        },
        arg.id,
      ),
    ),
  });
}
function fn_e8206ee9({
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
  const local_14 = imported_5(() => imported_8(arg.thumbhash), [arg.thumbhash]);
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
function fn_a8ff7ab3({
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
    className: `${local_f2bf345a.windowContainer} ${arg_12 ? local_f2bf345a.windowZoomed : ""}`,
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
      className: local_f2bf345a.track,
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
            className: local_f2bf345a.slide,
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
              imported_6(fn_e8206ee9, {
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
function fn_2bb87887({
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
    className: local_f2bf345a.mobileContainer,
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
      className: local_f2bf345a.mobileTrack,
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
            className: local_f2bf345a.mobileSlide,
            onClick: (arg) => {
              arg.stopPropagation();
              arg_9();
            },
            "data-active-slide": local_2 ? "" : undefined,
            "data-slide-index": arg_2,
            children:
              local &&
              imported_6(fn_e8206ee9, {
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
function fn_fd297351(arg, arg_2) {
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
export function fn_9c4d3446({
  images: arg,
  initialIndex: arg_2,
  sourceRect: arg_3 = null,
  resolveSourceRect: arg_4 = null,
  zoomable: arg_5 = false,
  thumbs: arg_6 = false,
  onClose: arg_7,
}) {
  const local = imported_4(null);
  const local_2 = imported_4(false);
  const [local_3, local_4] = imported_2(false);
  imported_9(() => {
    const local = document.activeElement;
    local.current?.querySelector("[data-viewer-close]")?.focus({
      preventScroll: true,
    });
    return () => {
      if (local instanceof HTMLElement && local.isConnected) {
        local.focus({
          preventScroll: true,
        });
      }
    };
  }, []);
  const local_5 = imported_4(null);
  const local_6 = imported_4(null);
  const local_7 = imported_4(null);
  const local_8 = imported_4(null);
  const local_9 = imported_4(local_347c45cc()).current;
  const [local_10, local_11] = imported_2(false);
  const [local_12, local_13] = imported_2(false);
  const [local_14, local_15] = imported_2(arg_3 !== null && !local_9);
  const local_16 = imported_10();
  const local_17 = fn_bb641065(arg, local_16);
  const local_18 = fn_a180c8aa({
    initialIndex: arg_2,
    total: arg.length,
  });
  imported_11();
  const local_19 = imported(() => {
    const local = local.current;
    if (local) {
      return local.querySelector("[data-active-slide] img");
    }
    return null;
  }, []);
  const local_20 = imported((arg) => {
    const local = local.current;
    if (local) {
      return local.querySelector(`[data-slide-index="${arg}"] img`);
    }
    return null;
  }, []);
  const local_21 = imported(() => {
    const local = local_6.current;
    if (local_7.current === "open" && local && local.playState === "running") {
      local.finish();
    }
    local_15(false);
  }, []);
  const local_22 = imported(() => {
    local_21();
    local_18.goToPrev();
  }, [local_21, local_18.goToPrev]);
  const local_23 = imported(() => {
    local_21();
    local_18.goToNext();
  }, [local_21, local_18.goToNext]);
  const local_24 = imported((arg, arg_2) => {
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
    const local_34 = fn_fd297351(arg.borderRadius, local_14);
    const local_35 = `inset(${local_20}px ${local_21}px ${local_22}px ${local_19}px round ${local_34})`;
    return {
      transform: local_33,
      clipPath: local_35,
      borderRadius: local_34,
    };
  }, []);
  const local_25 = imported((arg) => {
    const local = getComputedStyle(arg);
    return {
      transform: local.transform === "none" ? "none" : local.transform,
      clipPath:
        local.clipPath === "none" ? "inset(0px round 0px)" : local.clipPath,
      borderRadius: `${local.borderTopLeftRadius} ${local.borderTopRightRadius} ${local.borderBottomRightRadius} ${local.borderBottomLeftRadius}`,
    };
  }, []);
  const local_26 = (arg, arg_2) => {
    arg.style.transform = arg_2.transform;
    arg.style.clipPath = arg_2.clipPath;
    arg.style.borderRadius = arg_2.borderRadius;
  };
  const local_27 = (arg) => {
    arg.style.removeProperty("transform");
    arg.style.removeProperty("clip-path");
    arg.style.removeProperty("border-radius");
  };
  const local_28 = imported((arg, arg_2) => {
    local_26(arg, arg_2);
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
    local_6.current = local;
    local_7.current = "open";
    local_8.current = arg;
    local.addEventListener("finish", () => {
      local_27(arg);
      local.cancel();
      if (local_6.current === local) {
        local_6.current = null;
        local_7.current = null;
      }
      local_15(false);
    });
    local.addEventListener("cancel", () => local_15(false), {
      once: true,
    });
  }, []);
  const local_29 = imported(
    (arg, arg_2, arg_3) => {
      local_26(arg, arg_2);
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
      local_6.current = local;
      local_7.current = "close";
      local_8.current = arg;
      local.addEventListener("finish", () => arg_7());
    },
    [arg_7],
  );
  const local_30 = imported(
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
  const local_31 = imported(
    (arg = false) => {
      if (local_9) {
        arg_7();
        return;
      }
      const local = local_6.current;
      const local_2 = local_8.current;
      if (local && local.playState === "running" && local_2) {
        const local = local_7.current === "open";
        const local_2 = local_25(local_2);
        local.cancel();
        local_27(local_2);
        local_6.current = null;
        local_7.current = null;
        if (local) {
          const local = local_32.freezeInFlight();
          const local_2 = local_30(local);
          const local_3 = local_2 ? local_24(local_2, local_2) : null;
          local_11(true);
          if (local_3) {
            local_29(local_2, local_2, local_3);
          } else {
            local_26(local_2, local_2);
            local_13(true);
            setTimeout(arg_7, local_f06debfc_6);
          }
        } else {
          local_32.unfreeze();
          local_11(false);
          local_15(true);
          local_28(local_2, local_2);
        }
        return;
      }
      if (local_10) {
        return;
      }
      const local_3 = local_32.freezeInFlight();
      const local_4 = local_30(local_3);
      if (arg && local_16 && !local_4) {
        local_32.animateClose();
        setTimeout(arg_7, 150);
        return;
      }
      local_11(true);
      if (local_4) {
        const local = local_20(local_3);
        const local_2 = local_24(local_4, local);
        if (local_2 && local) {
          local_29(
            local,
            {
              ...local_50cfe1ce,
            },
            local_2,
          );
          return;
        }
      }
      local_13(true);
      setTimeout(arg_7, local_f06debfc_6);
    },
    [
      local_10,
      local_30,
      local_18.currentIndex,
      local_25,
      local_24,
      local_28,
      local_29,
      local_20,
      local_16,
      arg_7,
      local_9,
    ],
  );
  const local_32 = fn_6d555ac9({
    currentIndex: local_18.currentIndex,
    imagesCount: arg.length,
    imageSizes: local_17,
    isMobile: local_16,
    isAnimating: local_18.isAnimating,
    setIsAnimating: local_18.setIsAnimating,
    cancelAnimation: local_18.cancelAnimation,
    onIndexChange: local_18.goToIndex,
    onClose: local_31,
    trackRef: local_5,
    onDragStart: local_21,
  });
  const [local_33, local_34] = imported_2(null);
  const local_35 = imported_4({
    x: 0,
    y: 0,
    panX: 0,
    panY: 0,
  });
  const local_36 = imported_4(false);
  const local_37 = imported_4(false);
  const local_38 = imported_4(null);
  const local_39 = imported_4(null);
  const local_40 = imported(
    (arg = false) => {
      if (local_39.current === null) {
        if (local_33 && !local_16 && !local_9) {
          local_36.current = false;
          local_34(null);
          local_39.current = window.setTimeout(() => {
            local_39.current = null;
            local_31(arg);
          }, local_f06debfc_7);
          return;
        }
        local_31(arg);
      }
    },
    [local_31, local_16, local_9, local_33],
  );
  imported_3(
    () => () => {
      if (local_39.current !== null) {
        window.clearTimeout(local_39.current);
      }
    },
    [],
  );
  const local_41 = imported(() => {
    if (!local_10) {
      local_40(true);
    }
  }, [local_10, local_40]);
  fn_75a20b26({
    onClose: local_41,
    onPrev: local_22,
    onNext: local_23,
  });
  imported_3(() => {
    const local = [
      arg[local_18.currentIndex - 1],
      arg[local_18.currentIndex + 1],
      arg[local_18.currentIndex - 2],
      arg[local_18.currentIndex + 2],
    ];
    for (const local of local) {
      if (!local || (local.loadSrc && !local.thumbUrl)) {
        continue;
      }
      const local = new Image();
      local.decoding = "async";
      local.src = local.thumbUrl || local.url;
    }
  }, [arg, local_18.currentIndex]);
  const [local_42, local_43] = imported_2(-1);
  const local_44 = imported(() => {
    local_43(local_18.currentIndex);
  }, [local_18.currentIndex]);
  const local_45 = imported_4(null);
  imported_3(() => {
    const local = new AbortController();
    local_45.current = local;
    return () => local.abort();
  }, []);
  imported_3(() => {
    if (local_42 === local_18.currentIndex) {
      for (const local of [
        arg[local_18.currentIndex - 1],
        arg[local_18.currentIndex + 1],
      ]) {
        if (!local) {
          continue;
        }
        if (local.loadSrc) {
          local.loadSrc(local_45.current?.signal).then((arg) => {
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
  }, [local_42, local_18.currentIndex, arg]);
  imported_9(() => {
    if (!arg_3 || local_9) {
      local_15(false);
      return;
    }
    const local = local_19();
    if (!local) {
      local_15(false);
      return;
    }
    const local_2 = local_24(arg_3, local);
    if (!local_2) {
      local_15(false);
      return;
    }
    local_28(local, {
      transform: local_2.transform,
      clipPath: local_2.clipPath,
      borderRadius: local_2.borderRadius,
    });
    return () => {
      local_6.current?.cancel();
    };
  }, []);
  imported_3(() => {
    local_34(null);
  }, [local_18.currentIndex]);
  const local_46 = imported((arg, arg_2, arg_3) => {
    const local = arg_2 === "x" ? arg_3.width : arg_3.height;
    const local_2 = (arg_2 === "x" ? arg_3.originX : arg_3.originY) / 100;
    const local_3 = local * local_2 * (arg_3.scale - 1);
    const local_4 = local * (1 - local_2) * (arg_3.scale - 1);
    return Math.max(-local_4, Math.min(local_3, arg));
  }, []);
  const local_47 = imported(
    (arg, arg_2, arg_3) => {
      const local = local_46(arg, arg_2, arg_3);
      const local_2 = arg - local;
      if (local_2 === 0) {
        return arg;
      }
      return (
        local + Math.sign(local_2) * Math.min(72, Math.abs(local_2) * 0.18)
      );
    },
    [local_46],
  );
  const local_48 = imported(
    (arg) => {
      if (!local_36.current || local_16) {
        return;
      }
      const local = arg.clientX - local_35.current.x;
      const local_2 = arg.clientY - local_35.current.y;
      if (Math.abs(local) > 4 || Math.abs(local_2) > 4) {
        local_37.current = true;
      }
      local_34(
        (arg) =>
          arg && {
            ...arg,
            panX: local_47(local_35.current.panX + local, "x", arg),
            panY: local_47(local_35.current.panY + local_2, "y", arg),
          },
      );
      arg.preventDefault();
    },
    [local_47, local_16],
  );
  const local_49 = imported(() => {
    if (local_36.current) {
      local_36.current = false;
      local_34(
        (arg) =>
          arg && {
            ...arg,
            panX: local_46(arg.panX, "x", arg),
            panY: local_46(arg.panY, "y", arg),
            isPanning: false,
          },
      );
      if (local_37.current) {
        if (local_38.current !== null) {
          window.clearTimeout(local_38.current);
        }
        local_38.current = window.setTimeout(() => {
          local_37.current = false;
          local_38.current = null;
        }, 0);
      }
    }
  }, [local_46]);
  imported_3(() => {
    window.addEventListener("mousemove", local_48);
    window.addEventListener("mouseup", local_49);
    window.addEventListener("blur", local_49);
    return () => {
      window.removeEventListener("mousemove", local_48);
      window.removeEventListener("mouseup", local_49);
      window.removeEventListener("blur", local_49);
      if (local_38.current !== null) {
        window.clearTimeout(local_38.current);
      }
    };
  }, [local_49, local_48]);
  const local_50 = {
    onMouseDown: (arg) => {
      if (!local_33 || local_16) {
        local_32.desktopHandlers.onMouseDown(arg);
        return;
      }
      if (arg.button === 0) {
        local_36.current = true;
        local_37.current = false;
        local_35.current = {
          x: arg.clientX,
          y: arg.clientY,
          panX: local_33.panX,
          panY: local_33.panY,
        };
        local_34(
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
      if (!local_33 || local_16) {
        local_32.desktopHandlers.onMouseMove(arg);
        return;
      }
    },
    onMouseUp: () => {
      if (!local_33 || local_16) {
        local_32.desktopHandlers.onMouseUp();
        return;
      }
      local_49();
    },
    onMouseLeave: () => {
      if (!local_33 || local_16) {
        local_32.desktopHandlers.onMouseLeave();
        return;
      }
    },
  };
  const local_51 = imported(
    (arg) => {
      if (local_37.current) {
        local_37.current = false;
        return;
      }
      if (local_32.wasDragging.current) {
        local_32.wasDragging.current = false;
        return;
      }
      if (
        arg.target instanceof Element &&
        !arg.target.closest('img,button,a,[role="button"]')
      ) {
        local_40(true);
      }
    },
    [local_40],
  );
  const local_52 = imported(
    (arg) => {
      if (local_37.current) {
        local_37.current = false;
        return;
      }
      if (local_32.wasDragging.current) {
        local_32.wasDragging.current = false;
        return;
      }
      if (arg_5 && !local_16) {
        if (local_33) {
          local_34(null);
          return;
        }
        const local = arg?.currentTarget?.getBoundingClientRect();
        if (!local || !arg) {
          local_34({
            scale: local_f06debfc_8,
            originX: 50,
            originY: 50,
            panX: 0,
            panY: 0,
            width: local?.width || local_32.displaySize.width,
            height: local?.height || local_32.displaySize.height,
            isPanning: false,
          });
          return;
        }
        local_34({
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
      local_31(local_16);
    },
    [local_31, local_16, arg_5, local_33, local_32.displaySize],
  );
  return imported_12(
    imported_6("div", {
      ref: local,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Просмотр изображений",
      onKeyDown: (arg) => {
        if (arg.key !== "Tab") {
          return;
        }
        const local = Array.from(
          local.current?.querySelectorAll(
            'button:not(:disabled),a[href],[tabindex="0"]',
          ) ?? [],
        ).filter((arg) => arg.getClientRects().length > 0);
        const local_2 = arg.shiftKey ? local.at(-1) : local[0];
        if (
          (!arg.shiftKey && document.activeElement === local.at(-1)) ||
          (arg.shiftKey && document.activeElement === local[0])
        ) {
          arg.preventDefault();
          local_2?.focus();
        }
      },
      className: `${local_f2bf345a.viewer} ${local_10 ? local_f2bf345a.closing : ""} ${local_12 ? local_f2bf345a.fadeClosing : ""} ${local_14 ? local_f2bf345a.transitioning : ""} ym-hide-content`,
      style: {
        "--opacity": local_32.opacity,
        "--opacity-transition": local_18.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: local_51,
      children: [
        imported_6("div", {
          className: local_f2bf345a.backdrop,
          "aria-hidden": true,
        }),
        imported_6("div", {
          className: local_f2bf345a.toolbar,
          children: [
            imported_6("span", {
              className: local_f2bf345a.counter,
              "aria-live": "polite",
              children: [local_18.currentIndex + 1, " из ", arg.length],
            }),
            arg[local_18.currentIndex]?.onDownload &&
              imported_6("button", {
                type: "button",
                "aria-label": "Скачать изображение",
                disabled: local_3,
                onClick: async (arg) => {
                  arg.stopPropagation();
                  if (local_2.current) {
                    return;
                  }
                  const local = arg[local_18.currentIndex]?.onDownload;
                  if (local) {
                    local_2.current = true;
                    local_4(true);
                    try {
                      await local();
                    } finally {
                      local_2.current = false;
                      local_4(false);
                    }
                  }
                },
                children: imported_6(imported_14, {
                  size: 22,
                }),
              }),
            imported_6("button", {
              type: "button",
              "data-viewer-close": true,
              "aria-label": "Закрыть изображение",
              onClick: (arg) => {
                arg.stopPropagation();
                local_41();
              },
              children: imported_6(imported_13, {
                size: 24,
              }),
            }),
          ],
        }),
        !local_16 &&
          imported_6(fn_a8ff7ab3, {
            images: arg,
            imageSizes: local_17,
            currentIndex: local_18.currentIndex,
            offsetX: local_32.offsetX,
            offsetY: local_32.offsetY,
            isAnimating: local_18.isAnimating,
            displaySize: local_32.displaySize,
            trackRef: local_5,
            handlers: local_50,
            onImageClick: local_52,
            onActiveFullReady: local_44,
            zoom: local_33,
          }),
        local_16 &&
          imported_6(fn_2bb87887, {
            images: arg,
            imageSizes: local_17,
            currentIndex: local_18.currentIndex,
            offsetX: local_32.offsetX,
            offsetY: local_32.offsetY,
            isAnimating: local_18.isAnimating,
            isClosing: false,
            handlers: local_32.mobileHandlers,
            onImageClick: local_52,
            onActiveFullReady: local_44,
            zoom: local_32.zoom,
          }),
        !local_16 &&
          imported_6(fn_a5f53a56, {
            currentIndex: local_18.currentIndex,
            total: arg.length,
            onPrev: local_22,
            onNext: local_23,
          }),
        arg_6
          ? imported_6(fn_d38ee55b, {
              images: arg,
              currentIndex: local_18.currentIndex,
              isClosing: local_10,
              onPick: (arg) => {
                local_21();
                local_18.goToIndex(arg);
              },
            })
          : imported_6(fn_11c8fa81, {
              total: arg.length,
              currentIndex: local_18.currentIndex,
              onDotClick: (arg) => {
                local_21();
                local_18.goToIndex(arg);
              },
            }),
      ],
    }),
    document.body,
  );
}
export { fn_9c4d3446 as default };
