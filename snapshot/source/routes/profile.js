const local_d3e9f901 = (
  arg,
  arg_2 = local_d3e9f901,
  arg_3 = arg_2.f ||
    (arg_2.f = [
      "./subscription-modal.js",
      "../entry.js",
      "../entry.css",
      "../shared/chunk-3d5994e265d4.js",
      "../shared/chunk-3d5994e265d4.css",
      "../components/icon-info.js",
      "../components/icon-notification-mention.js",
      "../components/icon-chevron-right.js",
      "../components/icon-chevron-left.js",
      "./subscription-modal.css",
      "./drawing-canvas.js",
      "./drawing-canvas.css",
      "../shared/chunk-1f9577716691.js",
      "../components/icon-check-circle.js",
      "../shared/chunk-1f9577716691.css",
      "./report-modal.js",
      "./report-modal.css",
      "../shared/chunk-0e8ef113cb20.js",
      "../components/icon-check.js",
      "../shared/chunk-0e8ef113cb20.css",
    ]),
) => arg.map((arg) => arg_3[arg]);
import {
  symbol_081 as imported,
  symbol_066 as imported_2,
  symbol_003 as imported_3,
  symbol_014 as imported_4,
  symbol_005 as imported_5,
  symbol_010 as imported_6,
  symbol_067 as imported_7,
  symbol_069 as imported_8,
  symbol_064 as imported_9,
  symbol_070 as imported_10,
  symbol_071 as imported_11,
  symbol_086 as imported_12,
  symbol_020 as imported_13,
  symbol_072 as imported_14,
  symbol_073 as imported_15,
  symbol_002 as imported_16,
  symbol_068 as imported_17,
  symbol_074 as imported_18,
  symbol_075 as imported_19,
  symbol_028 as imported_20,
  symbol_077 as imported_21,
  symbol_078 as imported_22,
  symbol_079 as imported_23,
  symbol_080 as imported_24,
  symbol_082 as imported_25,
  symbol_083 as imported_26,
  symbol_084 as imported_27,
  symbol_001 as imported_28,
  symbol_065 as imported_29,
  symbol_085 as imported_30,
  symbol_004 as imported_31,
  symbol_006 as imported_32,
  symbol_007 as imported_33,
  symbol_008 as imported_34,
  symbol_009 as imported_35,
  symbol_011 as imported_36,
  symbol_012 as imported_37,
  symbol_013 as imported_38,
  symbol_015 as imported_39,
  symbol_016 as imported_40,
  symbol_018 as imported_41,
  symbol_019 as imported_42,
  symbol_021 as imported_43,
  symbol_022 as imported_44,
  symbol_024 as imported_45,
  symbol_025 as imported_46,
  symbol_076 as imported_47,
  symbol_026 as imported_48,
  symbol_062 as imported_49,
  symbol_027 as imported_50,
  symbol_030 as imported_51,
  symbol_031 as imported_52,
  symbol_032 as imported_53,
  a3 as imported_54,
  a4 as imported_55,
  a5 as imported_56,
  a6 as imported_57,
  a7 as imported_58,
  a8 as imported_59,
  symbol_023 as imported_60,
  symbol_063 as imported_61,
  symbol_017 as imported_62,
} from "../entry.js";
import { I as imported_63 } from "../components/icon-check.js";
import { I as imported_64 } from "../components/icon-chevron-left.js";
import { C as imported_65 } from "../shared/chunk-3d5994e265d4.js";
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
const local_e67a7b1e = ({ size: arg = 24 }) =>
  imported("svg", {
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      imported("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      imported("path", {
        d: "M5.5 5.5L18.5 18.5",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
      }),
    ],
  });
const local_2d34ceb6 = () =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "none",
    children: imported("path", {
      stroke: "currentColor",
      "stroke-width": "1.333",
      d: "M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333ZM10.666 1.333V4M5.333 1.333V4M2 6.667h12",
    }),
  });
const local_ef251bc6 = "c_page";
const local_e4d9221e = "c_tabsWrapper";
const local_a2acbc37 = "c_belowTabs";
const local_b0d40848 = "c_createPostWrapper";
const local_c9f75872 = "c_writePostButton";
const local_b2ff8ca6 = "c_profileCard";
const local_de69d44f = "c_banner";
const local_cec02155 = "c_bannerAura";
const local_3f3ece03 = "c_bannerActions";
const local_bd88df54 = "c_bannerActionButton";
const local_7df035ba = "c_deleteBannerButton";
const local_6d0b9266 = "c_profileContent";
const local_1167d74d = "c_avatarRow";
const local_5d627137 = "c_avatar";
const local_8c4f8b4b = "c_actions";
const local_3ffb44ef = "c_ownActions";
const local_046e51e2 = "c_mobileActions";
const local_c74fe9bf = "c_infoContainer";
const local_2e2a2f49 = "c_detailsRow";
const local_876cb03a = "c_hasCurtainFund";
const local_4a285d79 = "c_hasMobileAuraAndFund";
const local_30fcaa0e = "c_detailsMain";
const local_061d0e7a = "c_mobileAura";
const local_628ec8dd = "c_curtainFund";
const local_d5e52f71 = "c_userInfo";
const local_8d0c49b2 = "c_name";
const local_7585620f = "c_username";
const local_df1964f7 = "c_bio";
const local_45ea17af = "c_metaItem";
const local_534dc6ae = "c_followsYou";
const local_391a69d4 = "c_stats";
const local_4b10b0a5 = "c_stat";
const local_bdea34cf = "c_clickable";
const local_125fa0a9 = "c_statValue";
const local_0e9144f2 = "c_statLabel";
const local_c7b1e566 = "c_bannerPlaceholder";
const local_28fa84ee = "c_emptyPosts";
const local_819ff8dc = {
  page: local_ef251bc6,
  tabsWrapper: local_e4d9221e,
  belowTabs: local_a2acbc37,
  createPostWrapper: local_b0d40848,
  writePostButton: local_c9f75872,
  profileCard: local_b2ff8ca6,
  banner: local_de69d44f,
  bannerAura: local_cec02155,
  bannerActions: local_3f3ece03,
  bannerActionButton: local_bd88df54,
  deleteBannerButton: local_7df035ba,
  profileContent: local_6d0b9266,
  avatarRow: local_1167d74d,
  avatar: local_5d627137,
  actions: local_8c4f8b4b,
  ownActions: local_3ffb44ef,
  mobileActions: local_046e51e2,
  infoContainer: local_c74fe9bf,
  detailsRow: local_2e2a2f49,
  hasCurtainFund: local_876cb03a,
  hasMobileAuraAndFund: local_4a285d79,
  detailsMain: local_30fcaa0e,
  mobileAura: local_061d0e7a,
  curtainFund: local_628ec8dd,
  userInfo: local_d5e52f71,
  name: local_8d0c49b2,
  username: local_7585620f,
  bio: local_df1964f7,
  metaItem: local_45ea17af,
  followsYou: local_534dc6ae,
  stats: local_391a69d4,
  stat: local_4b10b0a5,
  clickable: local_bdea34cf,
  statValue: local_125fa0a9,
  statLabel: local_0e9144f2,
  bannerPlaceholder: local_c7b1e566,
  emptyPosts: local_28fa84ee,
};
const local_4d84dbb6 = "c_content";
const local_9d9cf508 = "c_title";
const local_5df6efc6 = "c_description";
const local_7585620f_2 = "c_username";
const local_42805e8c = "c_warning";
const local_8c4f8b4b_2 = "c_actions";
const local_cf774c16 = {
  content: local_4d84dbb6,
  title: local_9d9cf508,
  description: local_5df6efc6,
  username: local_7585620f_2,
  warning: local_42805e8c,
  actions: local_8c4f8b4b_2,
};
function fn_7500e35b({
  username: arg,
  displayName: arg_2,
  avatar: arg_3,
  onConfirm: arg_4,
  onClose: arg_5,
}) {
  const local = () => {
    arg_4();
    arg_5();
  };
  return imported(imported_4, {
    onClose: arg_5,
    showHeader: false,
    children: imported("div", {
      className: local_cf774c16.content,
      children: [
        imported(imported_2, {
          src: arg_3,
          alt: arg_2,
          size: "lg",
        }),
        imported("h2", {
          className: local_cf774c16.title,
          children: "Заблокировать пользователя?",
        }),
        imported("p", {
          className: local_cf774c16.description,
          children: [
            "Вы уверены, что хотите заблокировать",
            "./profile.js",
            imported("strong", {
              children: arg_2,
            }),
            arg &&
              imported("span", {
                className: local_cf774c16.username,
                children: [" (@", arg, ")"],
              }),
            "?",
          ],
        }),
        imported("p", {
          className: local_cf774c16.warning,
          children:
            "Заблокированный пользователь не сможет видеть ваш профиль и контент.",
        }),
        imported("div", {
          className: local_cf774c16.actions,
          children: [
            imported(imported_3, {
              variant: "secondary",
              onClick: () => arg_5(),
              fullWidth: true,
              children: "Отмена",
            }),
            imported(imported_3, {
              variant: "danger",
              onClick: () => local(),
              fullWidth: true,
              children: "Заблокировать",
            }),
          ],
        }),
      ],
    }),
  });
}
function fn_0f3f04de(arg, arg_2, arg_3, arg_4) {
  const local = Math.abs(arg);
  const local_2 = local % 10;
  const local_3 = local % 100;
  if (local_3 >= 11 && local_3 <= 19) {
    return arg_4;
  }
  if (local_2 === 1) {
    return arg_2;
  }
  if (local_2 >= 2 && local_2 <= 4) {
    return arg_3;
  }
  return arg_4;
}
function fn_7dc01f3c(arg) {
  if (!arg) {
    return null;
  }
  switch (arg.unit) {
    case "just_now":
      return "только что";
    case "minutes": {
      const local = arg.value ?? 1;
      const local_2 = fn_0f3f04de(local, "минуту", "минуты", "минут");
      return `${local} ${local_2} назад`;
    }
    case "hours": {
      const local = arg.value ?? 1;
      const local_2 = fn_0f3f04de(local, "час", "часа", "часов");
      return `${local} ${local_2} назад`;
    }
    case "recently":
      return "недавно";
    case "this_week":
      return "на этой неделе";
    case "this_month":
      return "в этом месяце";
    case "long_ago":
      return "давно";
    default:
      return null;
  }
}
function fn_ddbbf12c(arg) {
  if (arg >= 1000000) {
    return `${(arg / 1000000).toFixed(1)}M`;
  }
  if (arg >= 1000) {
    return `${(arg / 1000).toFixed(1)}K`;
  }
  return arg.toString();
}
function fn_312ee776({
  followers: arg,
  following: arg_2,
  isPhone: arg_3 = false,
  onFollowersClick: arg_4,
  onFollowingClick: arg_5,
}) {
  return imported("div", {
    className: local_819ff8dc.stats,
    children: [
      imported("div", {
        className: `${local_819ff8dc.stat} ${arg_4 ? local_819ff8dc.clickable : ""}`,
        onClick: arg_4,
        children: [
          imported("span", {
            className: local_819ff8dc.statValue,
            children: fn_ddbbf12c(arg),
          }),
          imported("span", {
            className: local_819ff8dc.statLabel,
            children: "подписчиков",
          }),
        ],
      }),
      arg_3 && imported("hr", {}),
      imported("div", {
        className: `${local_819ff8dc.stat} ${arg_5 ? local_819ff8dc.clickable : ""}`,
        onClick: arg_5,
        children: [
          imported("span", {
            className: local_819ff8dc.statValue,
            children: fn_ddbbf12c(arg_2),
          }),
          imported("span", {
            className: local_819ff8dc.statLabel,
            children: "подписок",
          }),
        ],
      }),
    ],
  });
}
const local_64782940 = imported_12(() =>
  imported_14(
    () => import("./subscription-modal.js"),
    local_d3e9f901([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
  ).then((arg) => ({
    default: arg.SubscriptionModal,
  })),
);
function fn_5d3ea10e({
  isOwnProfile: arg,
  isFollowing: arg_2,
  isRequested: arg_3 = false,
  isFollowLoading: arg_4,
  onEditProfile: arg_5,
  onToggleFollow: arg_6,
  fullWidth: arg_7 = false,
}) {
  const [local, local_2] = imported_9(false);
  const local_3 = imported_10()?.subscription?.isActive;
  if (arg) {
    return imported(imported_13, {
      children: [
        imported("div", {
          className: local_819ff8dc.ownActions,
          children: [
            imported(imported_3, {
              onClick: arg_5,
              fullWidth: arg_7,
              children: "Редактировать",
            }),
            !local_3 &&
              imported(imported_3, {
                variant: "secondary",
                onClick: () => local_2(true),
                fullWidth: arg_7,
                children: "ИТД НУКСТА",
              }),
          ],
        }),
        local &&
          imported(imported_11, {
            fallback: null,
            children: imported(local_64782940, {
              isOpen: local,
              onClose: () => local_2(false),
            }),
          }),
      ],
    });
  }
  return imported(imported_13, {
    children: imported(imported_3, {
      variant: arg_2 || arg_3 ? "secondary" : "primary",
      onClick: arg_6,
      disabled: arg_4,
      fullWidth: arg_7,
      children: arg_2
        ? imported(imported_13, {
            children: [
              imported(imported_63, {
                size: 18,
              }),
              "Вы подписаны",
            ],
          })
        : arg_3
          ? "Заявка отправлена"
          : imported(imported_13, {
              children: [
                imported(imported_15, {
                  size: 18,
                }),
                "Подписаться",
              ],
            }),
    }),
  });
}
function fn_2480d55e({
  isOwnProfile: arg,
  isVerified: arg_2 = false,
  isBlocked: arg_3 = false,
  onVerificationRequest: arg_4,
  onBlockUser: arg_5,
  onReportUser: arg_6,
  onAliceToolsClick: arg_7,
  ...arg_8
}) {
  const local = (() => {
    const local = [];
    if (arg_7) {
      local.push({
        id: "alice-ai",
        label: "Рюкзак",
        icon: imported("span", {
          "aria-hidden": "true",
          children: "✨",
        }),
        onClick: arg_7,
      });
    }
    if (!arg && arg_5) {
      local.push({
        id: "block",
        label: arg_3 ? "Разблокировать" : "Заблокировать",
        icon: imported(local_e67a7b1e, {
          size: 18,
        }),
        danger: !arg_3,
        onClick: arg_5,
      });
    }
    if (!arg && arg_6) {
      local.push({
        id: "report",
        label: "Пожаловаться",
        icon: imported(imported_8, {
          size: 18,
        }),
        danger: true,
        onClick: arg_6,
      });
    }
    return local;
  })();
  return imported("div", {
    className: local_819ff8dc.actions,
    children: [
      local.length > 0 &&
        imported(imported_5, {
          trigger: imported(imported_3, {
            variant: "secondary",
            iconOnly: true,
            children: imported(imported_6, {
              size: 18,
            }),
          }),
          items: local,
          position: "bottom-right",
        }),
      arg &&
        !arg_2 &&
        arg_4 &&
        imported(imported_3, {
          variant: "secondary",
          iconOnly: true,
          onClick: arg_4,
          children: imported(imported_7, {
            size: 18,
          }),
        }),
      imported(fn_5d3ea10e, {
        isOwnProfile: arg,
        isVerified: arg_2,
        ...arg_8,
      }),
    ],
  });
}
const local_26a24687 = (arg) =>
  new Promise((arg, arg_2) => {
    const local = new Image();
    local.onload = () => arg(local);
    local.onerror = arg_2;
    local.src = arg;
  });
function fn_097efd02(arg) {
  let local = 0xcbf29ce484222325n;
  for (const local of new TextEncoder().encode(arg)) {
    local ^= BigInt(local);
    local = BigInt.asUintN(64, local * 0x100000001b3n);
  }
  return Number(local % 8n);
}
function fn_e44fd459(arg, arg_2, arg_3, arg_4) {
  arg.save();
  arg.translate(arg_4 / 2, arg_4 / 2);
  arg.scale(Math.floor(arg_3 / 4) % 2 === 0 ? 1 : -1, 1);
  arg.rotate(((arg_3 % 4) * Math.PI) / 2);
  arg.drawImage(arg_2, -arg_4 / 2, -arg_4 / 2, arg_4, arg_4);
  arg.restore();
}
function fn_9163d334({ asset: arg, id: arg_2, stage: arg_3 }) {
  const local = imported_16(null);
  imported_17(() => {
    if (arg_3 <= 0 || !local.current) {
      return;
    }
    let local = false;
    const local_2 = 512;
    const local_3 = Math.min(3, Math.max(1, arg_3));
    const local_4 = arg_3 >= 2 ? Math.min(3, arg_3) : 0;
    Promise.all([
      local_26a24687(imported_18(arg)),
      local_26a24687(imported_18(`sticker_scrape_${local_3}`)),
      local_4
        ? local_26a24687(imported_18(`sticker_tear_${local_4}`))
        : Promise.resolve(null),
    ])
      .then(([arg, arg_2, arg_3]) => {
        const local = local.current;
        if (local || !local) {
          return;
        }
        local.width = local_2;
        local.height = local_2;
        const local_2 = local.getContext("2d");
        if (!local_2) {
          return;
        }
        local_2.clearRect(0, 0, local_2, local_2);
        local_2.drawImage(arg, 0, 0, local_2, local_2);
        const local_3 = document.createElement("canvas");
        local_3.width = local_2;
        local_3.height = local_2;
        const local_4 = local_3.getContext("2d");
        if (!local_4) {
          return;
        }
        const local_5 = fn_097efd02(arg_2);
        fn_e44fd459(local_4, arg_2, local_5, local_2);
        local_4.globalCompositeOperation = "source-in";
        local_4.fillStyle = "rgba(237, 237, 237, .88)";
        local_4.fillRect(0, 0, local_2, local_2);
        local_2.globalCompositeOperation = "source-atop";
        local_2.drawImage(local_3, 0, 0);
        if (arg_3) {
          local_4.globalCompositeOperation = "source-over";
          local_4.clearRect(0, 0, local_2, local_2);
          fn_e44fd459(local_4, arg_3, local_5, local_2);
          local_2.globalCompositeOperation = "destination-in";
          local_2.drawImage(local_3, 0, 0);
        }
        local_2.globalCompositeOperation = "source-over";
      })
      .catch(() => {
        local_26a24687(imported_18(arg))
          .then((arg) => {
            const local = local.current;
            if (local || !local) {
              return;
            }
            local.width = local_2;
            local.height = local_2;
            const local_2 = local.getContext("2d");
            if (local_2) {
              local_2.clearRect(0, 0, local_2, local_2);
              local_2.drawImage(arg, 0, 0, local_2, local_2);
            }
          })
          .catch(() => {});
      });
    return () => {
      local = true;
    };
  }, [arg, arg_2, arg_3]);
  if (arg_3 <= 0) {
    return imported("img", {
      src: imported_18(arg),
      alt: "",
      draggable: false,
    });
  }
  return imported("canvas", {
    ref: local,
    "aria-hidden": "true",
  });
}
const local_583be154 = "c_windowLayer";
const local_845327da = "c_root";
const local_270193d7 = "c_placement";
const local_2423ee0f = "c_sticker";
const local_c5472b89 = "c_splash";
const local_130622a6 = "c_cushionPlacement";
const local_996fb6f6 = "c_cushionPosition";
const local_976ac172 = "c_cushionArt";
const local_950a7633 = "c_windowPane";
const local_d04caa1c = "c_windowIntactArt";
const local_64d50ca7 = "c_windowBrokenArt";
const local_dec4d037 = "c_windowBroken";
const local_2f4d9ac1 = "c_windowImpact";
const local_52cb7723 = "c_curtainCover";
const local_45aa3b2a = "c_curtainDim";
const local_d8931598 = "c_curtainPanel";
const local_8edfe0dd = "c_curtainLeft";
const local_3b9a276f = "c_curtainRight";
const local_ba06c0d7 = "c_curtainOpening";
const local_a116eb47 = "c_curtainPlaque";
const local_b5da5138 = "c_curtainBack";
const local_ebf58a50 = "c_curtainOpenButton";
const local_c642bb00 = {
  windowLayer: local_583be154,
  root: local_845327da,
  placement: local_270193d7,
  sticker: local_2423ee0f,
  splash: local_c5472b89,
  cushionPlacement: local_130622a6,
  cushionPosition: local_996fb6f6,
  cushionArt: local_976ac172,
  windowPane: local_950a7633,
  windowIntactArt: local_d04caa1c,
  windowBrokenArt: local_64d50ca7,
  windowBroken: local_dec4d037,
  windowImpact: local_2f4d9ac1,
  curtainCover: local_52cb7723,
  curtainDim: local_45aa3b2a,
  curtainPanel: local_d8931598,
  curtainLeft: local_8edfe0dd,
  curtainRight: local_3b9a276f,
  curtainOpening: local_ba06c0d7,
  curtainPlaque: local_a116eb47,
  curtainBack: local_b5da5138,
  curtainOpenButton: local_ebf58a50,
};
function fn_bd0da112({ className: arg }) {
  return imported("svg", {
    className: arg,
    viewBox: "0 0 160 140",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      imported("defs", {
        children: [
          imported("linearGradient", {
            id: "alice-cushion-rubber",
            x1: "39",
            y1: "20",
            x2: "112",
            y2: "123",
            gradientUnits: "userSpaceOnUse",
            children: [
              imported("stop", {
                stopColor: "#ff9ca7",
              }),
              imported("stop", {
                offset: ".28",
                stopColor: "#fa5b79",
              }),
              imported("stop", {
                offset: ".7",
                stopColor: "#d53161",
              }),
              imported("stop", {
                offset: "1",
                stopColor: "#901d48",
              }),
            ],
          }),
          imported("radialGradient", {
            id: "alice-cushion-inflate",
            cx: "0",
            cy: "0",
            r: "1",
            gradientTransform: "translate(66 44) rotate(61) scale(76 69)",
            gradientUnits: "userSpaceOnUse",
            children: [
              imported("stop", {
                stopColor: "#ffd0cd",
              }),
              imported("stop", {
                offset: ".45",
                stopColor: "#ff7790",
              }),
              imported("stop", {
                offset: "1",
                stopColor: "#cf2d5d",
              }),
            ],
          }),
          imported("linearGradient", {
            id: "alice-cushion-valve",
            x1: "128",
            y1: "50",
            x2: "153",
            y2: "73",
            gradientUnits: "userSpaceOnUse",
            children: [
              imported("stop", {
                stopColor: "#ff9ba5",
              }),
              imported("stop", {
                offset: ".55",
                stopColor: "#e54469",
              }),
              imported("stop", {
                offset: "1",
                stopColor: "#9a234a",
              }),
            ],
          }),
        ],
      }),
      imported("path", {
        d: "M122 53c7-3 13-7 22-6 4 0 7 2 7 6v17c0 4-3 6-7 6-9 0-15-4-22-7Z",
        fill: "url(#alice-cushion-valve)",
        stroke: "#8f2149",
        strokeWidth: "3",
      }),
      imported("path", {
        d: "M145 48v27M137 51v21",
        stroke: "#8f2149",
        strokeWidth: "2.5",
        strokeLinecap: "round",
      }),
      imported("path", {
        d: "M145 50v11",
        stroke: "#ffd1cc",
        strokeOpacity: ".8",
        strokeWidth: "2",
        strokeLinecap: "round",
      }),
      imported("path", {
        d: "M20 69C22 39 45 17 76 16c32-1 58 18 62 48 5 33-17 61-50 65-36 4-66-18-69-48-1-4 0-8 1-12Z",
        fill: "#8b1c48",
      }),
      imported("path", {
        d: "M24 68C27 41 47 21 76 20c30-1 54 17 58 45 4 30-16 55-47 59-33 4-60-16-63-44-1-4-1-8 0-12Z",
        fill: "url(#alice-cushion-rubber)",
        stroke: "#ffb0b5",
        strokeOpacity: ".75",
        strokeWidth: "2",
      }),
      imported("path", {
        d: "M34 69c2-22 19-38 43-39 25-1 43 14 47 36 4 23-13 44-38 47-28 3-49-13-52-35-1-3-1-6 0-9Z",
        fill: "url(#alice-cushion-inflate)",
      }),
      imported("path", {
        d: "M57 49c7 5 11 11 13 17M90 43c-5 8-8 15-8 22M46 76c9-3 16-4 23-3M101 69c7-1 14 0 20 4M58 101c4-9 9-15 16-20M93 99c-5-7-8-12-9-18",
        stroke: "#aa2554",
        strokeOpacity: ".58",
        strokeWidth: "3",
        strokeLinecap: "round",
      }),
      imported("path", {
        d: "M69 67c6-7 17-8 24-2 6 5 5 13-2 18-6 5-16 5-22 0-6-5-6-11 0-16Z",
        fill: "#aa2956",
      }),
      imported("path", {
        d: "M71 67c6-4 14-5 19-1M70 82c7 4 14 3 20-1",
        stroke: "#ffadb1",
        strokeOpacity: ".8",
        strokeWidth: "2.4",
        strokeLinecap: "round",
      }),
      imported("path", {
        d: "M37 56c6-18 19-28 35-31M30 85c4 18 19 30 39 34M104 116c14-7 23-19 26-35",
        stroke: "#ffd5cf",
        strokeOpacity: ".68",
        strokeWidth: "3",
        strokeLinecap: "round",
      }),
      imported("path", {
        d: "M47 41c11-9 20-12 30-12",
        stroke: "#fff4e7",
        strokeOpacity: ".72",
        strokeWidth: "4",
        strokeLinecap: "round",
      }),
    ],
  });
}
const local_a1e12a9e = new Map();
const local_f06debfc = 50;
const local_d1dbed9e = "alice-profile-state:";
const local_aad0de78 = 10 * 60000;
const local_f06debfc_2 = 750;
const local_a1e12a9e_2 = new Set();
function fn_99993622(arg, arg_2) {
  if (!arg || typeof arg !== "object") {
    return false;
  }
  const local = arg;
  return (
    local.profileId === arg_2 &&
    typeof local.rev === "number" &&
    Array.isArray(local.layers) &&
    Array.isArray(local.placements)
  );
}
function fn_929a8e10(arg) {
  try {
    const local = window.sessionStorage.getItem(`${local_d1dbed9e}${arg}`);
    if (!local) {
      return null;
    }
    const local_2 = JSON.parse(local);
    if (
      typeof local_2.savedAt !== "number" ||
      Date.now() - local_2.savedAt > local_aad0de78 ||
      !fn_99993622(local_2.state, arg)
    ) {
      return (
        window.sessionStorage.removeItem(`${local_d1dbed9e}${arg}`),
        null
      );
    }
    return local_2.state;
  } catch {
    return null;
  }
}
function fn_a72cc1ab(arg, arg_2) {
  local_a1e12a9e.delete(arg);
  local_a1e12a9e.set(arg, arg_2);
  if (local_a1e12a9e.size > local_f06debfc) {
    const local = local_a1e12a9e.keys().next().value;
    if (local) {
      local_a1e12a9e.delete(local);
    }
  }
  try {
    window.sessionStorage.setItem(
      `${local_d1dbed9e}${arg}`,
      JSON.stringify({
        savedAt: Date.now(),
        state: arg_2,
      }),
    );
  } catch {}
}
function fn_1dd73c40(arg) {
  const local = local_a1e12a9e.get(arg) ?? fn_929a8e10(arg);
  if (local) {
    fn_a72cc1ab(arg, local);
  }
  return local ?? null;
}
function fn_c5f5c468({
  profileId: arg,
  profileName: arg_2,
  profileUsername: arg_3,
  profileAvatar: arg_4,
  isOwnProfile: arg_5,
  refreshKey: arg_6 = 0,
  onStateChange: arg_7,
}) {
  const [local, local_2] = imported_9(() => fn_1dd73c40(arg));
  const { addToast: local_3 } = imported_19();
  const local_4 = imported_16(null);
  const [local_5, local_6] = imported_9(null);
  const [local_7, local_8] = imported_9(false);
  const [local_9, local_10] = imported_9(false);
  const local_11 = imported_16(null);
  const local_12 = imported_16(arg);
  const local_13 = imported_16(0);
  const local_14 = imported_16(false);
  imported_20(() => {
    local_12.current = arg;
  }, [arg]);
  const local_15 = imported_21(() => {
    local_13.current++;
  }, []);
  const local_16 = imported_21(async () => {
    if (local_14.current) {
      return;
    }
    local_14.current = true;
    const local = ++local_13.current;
    try {
      const local = await imported_22.profile(arg);
      if (local_12.current !== arg || local !== local_13.current) {
        return;
      }
      if (!fn_99993622(local, arg)) {
        throw new Error("Invalid Alice profile state");
      }
      if ((local_a1e12a9e.get(arg)?.rev ?? -1) > local.rev) {
        return;
      }
      fn_a72cc1ab(arg, local);
      local_2(local);
      arg_7?.(local);
    } catch {
    } finally {
      local_14.current = false;
    }
  }, [arg, arg_7]);
  imported_17(() => {
    const local = fn_1dd73c40(arg);
    local_2(local);
    local_6(null);
    local_4.current = null;
    arg_7?.(local);
    local_11.current = null;
  }, [arg, arg_7]);
  imported_17(() => {
    local_16();
    const local = window.setInterval(() => {
      if (!document.hidden) {
        local_16();
      }
    }, 2000);
    return () => {
      window.clearInterval(local);
      local_15();
    };
  }, [local_16, arg_6, local_15]);
  imported_17(() => {
    const local = (arg) => {
      if (arg.detail === arg) {
        local_16();
      }
    };
    window.addEventListener(imported_23, local);
    return () => window.removeEventListener(imported_23, local);
  }, [local_16, arg]);
  imported_17(() => {
    const local = (arg) => {
      const local = arg.detail;
      if (local.profileId !== arg || local_12.current !== arg) {
        return;
      }
      const local_2 = local_a1e12a9e.get(arg) ?? local;
      if (!local_2 || local_2.profileId !== arg || local_2.rev > local.rev) {
        return;
      }
      const local_3 = {
        ...local.placement,
        kind: "sticker",
        wear: {
          stage: local.placement.wear,
          float: 0,
          holes: 0,
          seed: 0,
          erasesLeft: Math.max(0, 4 - local.placement.wear),
        },
      };
      const local_4 = {
        ...local_2,
        rev: local.rev,
        placements: [
          ...local_2.placements.filter(
            (arg) => arg.id !== local_3.id && !local.evicted.includes(arg.id),
          ),
          local_3,
        ],
      };
      fn_a72cc1ab(arg, local_4);
      local_2(local_4);
      arg_7?.(local_4);
    };
    window.addEventListener(imported_24, local);
    return () => window.removeEventListener(imported_24, local);
  }, [arg, local, arg_7]);
  const local_17 = local?.profileId === arg ? local : null;
  const local_18 = local_17 !== null;
  const local_19 = imported_21(() => {
    if (local_4.current === arg) {
      return;
    }
    let local = true;
    let local_2;
    local_4.current = arg;
    imported_22
      .claimCushion(arg)
      .then((arg) => {
        if (!(!local || local_12.current !== arg)) {
          local_6(
            arg.id && arg.expiresAt
              ? {
                  id: arg.id,
                  expiresAt: arg.expiresAt,
                  x: typeof arg.x === "number" ? arg.x : 0.5,
                  y: typeof arg.y === "number" ? arg.y : 0.5,
                  anchorKind: arg.anchorKind ?? "profile_header",
                  anchorId: arg.anchorId ?? null,
                }
              : null,
          );
          if (arg.show) {
            local_3({
              message: arg_5
                ? "В ваш профиль подкинули подушку-пердушку!"
                : "В этот профиль подкинули подушку-пердушку!",
              notificationType: "like",
            });
            local_2 = imported_25(
              imported_26,
              0.65,
              Date.parse(arg.expiresAt ?? "") || Date.now(),
            );
          }
        }
      })
      .catch(() => {
        if (local && local_4.current === arg) {
          local_4.current = null;
        }
      });
    return () => {
      local = false;
      local_2?.();
    };
  }, [arg, arg_5, local_3]);
  imported_17(() => {
    if (local_18) {
      return local_19();
    }
  }, [local_18, local_19]);
  imported_17(() => {
    if (!local_5) {
      return;
    }
    const local = Date.parse(local_5.expiresAt) - Date.now();
    if (!Number.isFinite(local) || local <= 0) {
      local_6(null);
      return;
    }
    const local_2 = window.setTimeout(
      () =>
        local_6((arg) => {
          if (arg?.id === local_5.id) {
            return null;
          }
          return arg;
        }),
      local,
    );
    return () => window.clearTimeout(local_2);
  }, [local_5]);
  imported_17(() => {
    const local = (arg) => {
      if (arg.detail === arg) {
        local_4.current = null;
        local_19();
      }
    };
    window.addEventListener(imported_23, local);
    return () => window.removeEventListener(imported_23, local);
  }, [local_19, arg]);
  const local_20 =
    local_17?.layers.some((arg) => arg.slot === "curtains") ?? false;
  const [local_21, local_22] = imported_9(false);
  const [local_23, local_24] = imported_9(null);
  if (
    local_17 &&
    (local_23?.profileId !== arg || local_23.closed !== local_20)
  ) {
    const local = local_23?.profileId === arg && local_23.closed && !local_20;
    local_24({
      profileId: arg,
      closed: local_20,
    });
    const local_2 =
      local && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (local_2 !== local_21) {
      local_22(local_2);
    }
  }
  imported_17(() => {
    if (!local_21) {
      return;
    }
    const local = window.setTimeout(() => local_22(false), local_f06debfc_2);
    return () => window.clearTimeout(local);
  }, [local_21]);
  const local_25 = local_20 || local_21;
  const local_26 =
    local_17?.layers.some((arg) => arg.slot === "window") ?? false;
  const local_27 =
    local_17?.layers.find((arg) => arg.slot === "window")?.setAt ?? "";
  const local_28 = local_5
    ? document.querySelector(
        `[data-alice-profile-root] [data-alice-water-anchor-kind="${local_5.anchorKind}"]${local_5.anchorKind === "post" ? `[data-alice-water-anchor-id="${local_5.anchorId}"]` : ""}`,
      )
    : null;
  imported_17(() => {
    if (!local_18) {
      return;
    }
    const local = `alice-window-break:${arg}:${local_27 || "legacy"}`;
    let local_2 = false;
    if (arg_5 && local_26 && !local_a1e12a9e_2.has(local)) {
      try {
        local_2 = localStorage.getItem(local) !== "seen";
      } catch {
        local_2 = true;
      }
    }
    const local_3 =
      local_26 && (local_2 || (!arg_5 && local_11.current === false));
    local_11.current = local_26;
    if (!local_3) {
      return;
    }
    local_8(true);
    const local_4 = window.setTimeout(() => local_8(false), 520);
    const local_5 = new Audio(imported_27);
    local_5.volume = 0.72;
    let local_6 = true;
    const local_7 = () => {
      if (!(!local_6 || !arg_5)) {
        local_a1e12a9e_2.add(local);
        try {
          localStorage.setItem(local, "seen");
        } catch {}
      }
    };
    const local_8 = () => {
      local_5
        .play()
        .then(() => {
          local_7();
          window.removeEventListener("pointerdown", local_8);
          window.removeEventListener("keydown", local_8);
        })
        .catch(() => {
          if (local_6 && arg_5) {
            window.addEventListener("pointerdown", local_8, {
              once: true,
            });
            window.addEventListener("keydown", local_8, {
              once: true,
            });
          }
        });
    };
    local_8();
    return () => {
      local_6 = false;
      window.clearTimeout(local_4);
      window.removeEventListener("pointerdown", local_8);
      window.removeEventListener("keydown", local_8);
      local_5.pause();
    };
  }, [local_18, local_26, arg_5, arg, local_27]);
  imported_17(() => {
    if (!local_20) {
      return;
    }
    const local = document.body.style.overflow;
    const local_2 = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = local;
      document.documentElement.style.overflow = local_2;
    };
  }, [local_20]);
  if (!local || local.profileId !== arg) {
    return null;
  }
  const local_29 = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      imported_29("../site/index.html");
    }
  };
  const local_30 = async () => {
    if (!(!arg_5 || local_9 || !local_17)) {
      local_10(true);
      try {
        const local = await imported_22.setCurtains(arg, false);
        const local_2 = {
          ...local_17,
          rev: local.rev,
          curtains: local.curtains,
          layers: local_17.layers.filter((arg) => arg.slot !== "curtains"),
        };
        fn_a72cc1ab(arg, local_2);
        local_2(local_2);
        arg_7?.(local_2);
        window.dispatchEvent(
          new CustomEvent(imported_23, {
            detail: arg,
          }),
        );
      } catch {
        imported_30.error("Не удалось открыть шторы. Попробуйте ещё раз.");
      } finally {
        local_10(false);
      }
    }
  };
  return imported(imported_13, {
    children: [
      local_5 &&
        local_28 &&
        imported_28(
          imported(
            "span",
            {
              className: local_c642bb00.cushionPlacement,
              "aria-hidden": "true",
              children: imported("span", {
                className: local_c642bb00.cushionPosition,
                style: {
                  left: `${local_5.x * 100}%`,
                  top: `${local_5.y * 100}%`,
                },
                children: imported(fn_bd0da112, {
                  className: local_c642bb00.cushionArt,
                }),
              }),
            },
            local_5.id,
          ),
          local_28,
        ),
      imported("div", {
        className: local_c642bb00.windowLayer,
        "aria-label": local_26 ? "Разбитое стекло" : "Стекло",
        children: imported("span", {
          className: `${local_c642bb00.windowPane} ${local_26 ? local_c642bb00.windowBroken : ""} ${local_7 ? local_c642bb00.windowImpact : ""}`,
          children: [
            imported("span", {
              className: local_c642bb00.windowIntactArt,
              "aria-hidden": "true",
            }),
            imported("span", {
              className: local_c642bb00.windowBrokenArt,
              "aria-hidden": "true",
            }),
          ],
        }),
      }),
      imported("div", {
        className: local_c642bb00.root,
        "aria-label": "Оформление профиля Алиса AI",
        children: local.placements.map((arg) =>
          imported(
            "span",
            {
              className: `${local_c642bb00.placement} ${arg.kind === "splash" ? local_c642bb00.splash : local_c642bb00.sticker}`,
              style: {
                left: `${arg.x * 100}%`,
                top: `${arg.y * 100}%`,
                width: `${arg.size * 100}%`,
                aspectRatio: "1",
                zIndex: 100 + arg.z,
                opacity:
                  arg.kind === "sticker" ? 1 - 0.04 * arg.wear.stage : 0.9,
                transform: `translate(-50%, -50%) rotate(${arg.angle}deg)`,
              },
              "aria-hidden": "true",
              children:
                arg.kind === "sticker"
                  ? imported(fn_9163d334, {
                      asset: arg.asset,
                      id: arg.id,
                      stage: arg.wear.stage,
                    })
                  : imported("img", {
                      src: imported_18(arg.asset),
                      alt: "",
                      draggable: false,
                    }),
            },
            arg.id,
          ),
        ),
      }),
      local_25 &&
        imported_28(
          imported("div", {
            className: `${local_c642bb00.curtainCover} ${local_20 ? "" : local_c642bb00.curtainOpening}`,
            role: "dialog",
            "aria-modal": local_20,
            "aria-hidden": !local_20,
            "aria-label": `Профиль ${arg_2} закрыт шторами`,
            children: [
              imported("div", {
                className: local_c642bb00.curtainDim,
                "aria-hidden": "true",
              }),
              imported("div", {
                className: `${local_c642bb00.curtainPanel} ${local_c642bb00.curtainLeft}`,
                "aria-hidden": "true",
              }),
              imported("div", {
                className: `${local_c642bb00.curtainPanel} ${local_c642bb00.curtainRight}`,
                "aria-hidden": "true",
              }),
              imported("button", {
                type: "button",
                className: local_c642bb00.curtainBack,
                onClick: local_29,
                "aria-label": "Вернуться назад",
                children: imported(imported_64, {
                  size: 24,
                }),
              }),
              imported("div", {
                className: local_c642bb00.curtainPlaque,
                children: [
                  imported(imported_2, {
                    src: arg_4 ?? null,
                    alt: arg_2,
                    size: "lg",
                  }),
                  imported("strong", {
                    children: arg_2,
                  }),
                  arg_3 &&
                    imported("span", {
                      children: ["@", arg_3],
                    }),
                  imported("b", {
                    children: "Шторы закрыты",
                  }),
                  imported("span", {
                    children: "Профиль задёрнут шторами",
                  }),
                  arg_5 &&
                    imported("button", {
                      type: "button",
                      className: local_c642bb00.curtainOpenButton,
                      disabled: local_9,
                      onClick: () => {
                        local_30();
                      },
                      children: local_9 ? "Открываем…" : "Открыть шторы",
                    }),
                ],
              }),
            ],
          }),
          document.body,
        ),
    ],
  });
}
const local_49250f21 = "c_modal";
const local_e148243e = "c_body";
const local_f1c23efb = "c_header";
const local_9d9cf508_2 = "c_title";
const local_cef2dff0 = "c_close";
const local_ca66b2a4 = "c_hint";
const local_e9ccbd22 = "c_list";
const local_4474a6b6 = "c_item";
const local_91b7e964 = "c_itemIcon";
const local_23b70773 = "c_balloonBody";
const local_ea62c39a = "c_cushionBody";
const local_84e8f4f7 = "c_itemTitle";
const local_8f67d98e = "c_itemText";
const local_119f77f9 = "c_empty";
const local_9b8c85cb = "c_placementMode";
const local_5d17799a = "c_pending";
const local_7389e09e = "c_placementHint";
const local_7fcec4ac = "c_eraseTarget";
const local_6be799a9 = "c_cancel";
const local_2e9bdc74 = "c_pagePending";
const local_8050e38c = "c_balloonAim";
const local_872e3f1a = "c_balloonImpactFrame";
const local_a939bb8a = "c_balloonImpact";
const local_996c5adc = "c_balloonBurst";
const local_89254a0e = "c_pagePlacementControls";
const local_f959f262 = "c_pageConfirm";
const local_3403f946 = "c_pageCancel";
const local_c9902c8d = {
  modal: local_49250f21,
  body: local_e148243e,
  header: local_f1c23efb,
  title: local_9d9cf508_2,
  close: local_cef2dff0,
  hint: local_ca66b2a4,
  list: local_e9ccbd22,
  item: local_4474a6b6,
  itemIcon: local_91b7e964,
  balloonBody: local_23b70773,
  cushionBody: local_ea62c39a,
  itemTitle: local_84e8f4f7,
  itemText: local_8f67d98e,
  empty: local_119f77f9,
  placementMode: local_9b8c85cb,
  pending: local_5d17799a,
  placementHint: local_7389e09e,
  eraseTarget: local_7fcec4ac,
  cancel: local_6be799a9,
  pagePending: local_2e9bdc74,
  balloonAim: local_8050e38c,
  balloonImpactFrame: local_872e3f1a,
  balloonImpact: local_a939bb8a,
  balloonBurst: local_996c5adc,
  pagePlacementControls: local_89254a0e,
  pageConfirm: local_f959f262,
  pageCancel: local_3403f946,
};
const local_9dd4d41f = (arg) => {
  if (arg.kind === "layer_window") {
    return "🪟";
  }
  if (arg.kind === "eraser") {
    return "🧽";
  }
  if (arg.kind === "splash") {
    return "💧";
  }
  return "⭐";
};
const local_c10a67ba = (arg) =>
  arg.kind === "layer_window" ||
  arg.kind === "sticker" ||
  arg.kind === "splash";
const local_2f99206e = (arg) => {
  if (arg.kind === "splash") {
    return imported("img", {
      className: local_c9902c8d.balloonBody,
      src: imported_33,
      alt: "",
      draggable: false,
    });
  }
  if (arg.kind === "whoopee_cushion") {
    return imported(fn_bd0da112, {
      className: local_c9902c8d.cushionBody,
    });
  }
  if (local_c10a67ba(arg)) {
    return imported("img", {
      src: imported_18(
        arg.kind === "layer_window" ? "window_broken" : arg.asset,
      ),
      alt: "",
      draggable: false,
    });
  }
  return local_9dd4d41f(arg);
};
const local_900428e1 = (arg) => {
  if (arg.kind === "layer_window") {
    return "Разбить окно";
  }
  if (arg.kind === "eraser") {
    return "Ластик";
  }
  if (arg.kind === "splash") {
    return "Водный шарик";
  }
  if (arg.kind === "whoopee_cushion") {
    return "Подушка-пердушка";
  }
  return "Наклейка";
};
function fn_a7a5ce84(arg, arg_2) {
  const local = document.querySelector("[data-alice-profile-root]");
  if (!local) {
    return null;
  }
  const local_2 = local.querySelectorAll("[data-alice-water-anchor-kind]");
  for (const local of local_2) {
    const local = local.getBoundingClientRect();
    if (
      local.width <= 0 ||
      local.height <= 0 ||
      arg < local.left ||
      arg > local.right ||
      arg_2 < local.top ||
      arg_2 > local.bottom
    ) {
      continue;
    }
    const local_2 = local.dataset.aliceWaterAnchorKind;
    const local_3 = local.dataset.aliceWaterAnchorId ?? null;
    if (!(local_2 !== "profile_header" && (local_2 !== "post" || !local_3))) {
      return {
        x: Math.max(0, Math.min(1, (arg - local.left) / local.width)),
        y: Math.max(0, Math.min(1, (arg_2 - local.top) / local.height)),
        clientX: arg,
        clientY: arg_2,
        anchorKind: local_2,
        anchorId: local_2 === "post" ? local_3 : null,
      };
    }
  }
  return null;
}
function fn_3770f8ac() {
  const local = document.querySelectorAll(
    "[data-alice-profile-root] [data-alice-water-anchor-kind]",
  );
  for (const local of local) {
    const local = local.getBoundingClientRect();
    const local_2 = Math.max(local.left, 0);
    const local_3 = Math.min(local.right, window.innerWidth);
    const local_4 = Math.max(local.top, 0);
    const local_5 = Math.min(local.bottom, window.innerHeight);
    if (local_3 - local_2 < 32 || local_5 - local_4 < 32) {
      continue;
    }
    const local_6 = fn_a7a5ce84(
      (local_2 + local_3) / 2,
      (local_4 + local_5) / 2,
    );
    if (local_6) {
      return local_6;
    }
  }
  return null;
}
function fn_3bbe2496(arg) {
  const local = document.querySelectorAll(
    "[data-alice-profile-root] [data-alice-water-anchor-kind]",
  );
  for (const local of local) {
    if (
      local.dataset.aliceWaterAnchorKind !== arg.anchorKind ||
      (arg.anchorKind === "post" &&
        local.dataset.aliceWaterAnchorId !== arg.anchorId)
    ) {
      continue;
    }
    const local = local.getBoundingClientRect();
    return {
      left: local.left,
      top: local.top,
      width: local.width,
      height: local.height,
      radius: getComputedStyle(local).borderRadius,
    };
  }
  return null;
}
function fn_75d71f4e(arg) {
  if (imported_37(arg)) {
    if (arg.status >= 500) {
      return "Не удалось получить подтверждение. Повторите тем же предметом — второго списания не будет.";
    }
    return "Не удалось разместить предмет.";
  }
  return "Не удалось подтвердить размещение. Повторите тем же предметом.";
}
function fn_13234f11({
  profileId: arg,
  profileUsername: arg_2,
  ownProfile: arg_3 = false,
  openSignal: arg_4,
  onChanged: arg_5,
}) {
  const [local, local_2] = imported_9(false);
  const [local_3, local_4] = imported_9(false);
  const [local_5, local_6] = imported_9([]);
  const [local_7, local_8] = imported_9(null);
  const [local_9, local_10] = imported_9({
    x: 0.5,
    y: 0.5,
  });
  const [local_11, local_12] = imported_9(null);
  const local_13 = imported_16(false);
  const local_14 = imported_16(false);
  const local_15 = imported_16({
    x: 0,
    y: 0,
  });
  const [local_16, local_17] = imported_9(null);
  const [local_18, local_19] = imported_9(null);
  const local_20 = imported_16(new Map());
  const local_21 = imported_16(new Map());
  const [local_22, local_23] = imported_9(null);
  const [local_24, local_25] = imported_9("");
  const { openModal: local_26, closeModal: local_27 } = imported_31();
  imported_17(() => {
    if (!local_16) {
      return;
    }
    const local = setTimeout(
      () =>
        local_17((arg) => {
          if (arg?.key === local_16.key) {
            return null;
          }
          return arg;
        }),
      400,
    );
    return () => clearTimeout(local);
  }, [local_16]);
  imported_17(() => {
    if (
      (local_7?.kind !== "splash" && local_7?.kind !== "whoopee_cushion") ||
      local_18
    ) {
      return;
    }
    const local = () => {
      if (local_14.current) {
        return;
      }
      const local = local_11?.clientX ?? window.innerWidth / 2;
      const local_2 = local_11?.clientY ?? window.innerHeight / 2;
      const local_3 = fn_a7a5ce84(local, local_2) ?? fn_3770f8ac();
      local_12((arg) => {
        if (
          arg?.anchorKind === local_3?.anchorKind &&
          arg?.anchorId === local_3?.anchorId &&
          arg?.x === local_3?.x &&
          arg?.y === local_3?.y
        ) {
          return arg;
        }
        return local_3;
      });
    };
    document.addEventListener("scroll", local, true);
    window.addEventListener("resize", local);
    return () => {
      document.removeEventListener("scroll", local, true);
      window.removeEventListener("resize", local);
    };
  }, [local_7?.kind, local_18, local_11]);
  const local_28 = imported_21(() => {
    arg_5();
    imported_32(arg);
  }, [arg_5, arg]);
  const local_29 = imported_21(async () => {
    local_2(true);
    local_4(true);
    local_25("");
    try {
      const local = await imported_22.inventory();
      local_6(
        local.items.filter((arg) =>
          (arg_3
            ? ["sticker", "eraser"]
            : ["sticker", "splash", "eraser", "layer_window", "whoopee_cushion"]
          ).includes(arg.kind),
        ),
      );
    } catch {
      local_25("Не удалось загрузить рюкзак.");
    } finally {
      local_4(false);
    }
  }, [arg_3]);
  imported_17(() => {
    if (arg_4 > 0) {
      local_29();
    }
  }, [arg_4, local_29]);
  const local_30 = async (arg) => {
    if (!local_3) {
      if (arg.kind === "layer_window") {
        local_4(true);
        const local = local_21.current.get(arg.id) ?? crypto.randomUUID();
        local_21.current.set(arg.id, local);
        try {
          await imported_22.breakWindow(arg, arg.id, local);
          local_21.current.delete(arg.id);
          local_2(false);
          local_28();
        } catch {
          local_25(
            "Не удалось разбить окно. Предмет не будет списан повторно.",
          );
        } finally {
          local_4(false);
        }
        return;
      }
      if (arg.kind === "eraser") {
        local_4(true);
        try {
          const local = await imported_22.profile(arg);
          if (!local.placements.some((arg) => arg.kind === "sticker")) {
            local_25("На этом профиле пока нет наклеек.");
            return;
          }
          local_23(local);
          local_2(false);
        } catch {
          local_25("Не удалось загрузить наклейки профиля.");
        } finally {
          local_4(false);
        }
        return;
      }
      if (
        arg.kind === "sticker" ||
        arg.kind === "splash" ||
        arg.kind === "whoopee_cushion"
      ) {
        local_19(null);
        const local = arg.kind === "splash" || arg.kind === "whoopee_cushion";
        const local_2 = local ? fn_3770f8ac() : null;
        if (local && !local_2) {
          local_25("Не удалось найти место в профиле для предмета.");
          return;
        }
        if (arg.kind === "splash") {
          new Image().src = imported_18("water_stain");
        }
        local_10({
          x: 0.5,
          y: 0.5,
        });
        local_12(local_2);
        local_8(arg);
        local_2(false);
      }
    }
  };
  const local_31 = (arg) => {
    if (local_18) {
      return;
    }
    const local = arg.currentTarget.parentElement;
    if (!local) {
      return;
    }
    const local_2 = local.getBoundingClientRect();
    local_10({
      x: Math.max(0, Math.min(1, (arg.clientX - local_2.left) / local_2.width)),
      y: Math.max(0, Math.min(1, (arg.clientY - local_2.top) / local_2.height)),
    });
  };
  const local_32 = (arg, arg_2) => {
    if (local_18 || local_3) {
      return;
    }
    const local = fn_a7a5ce84(arg, arg_2);
    if (local) {
      local_12(local);
    }
  };
  const local_33 = async () => {
    if (!local_7 || local_3) {
      return;
    }
    const local =
      local_7.kind === "splash" || local_7.kind === "whoopee_cushion";
    if (local && !local_18 && !local_11) {
      local_12(null);
      imported_30.error("Выберите место для предмета.");
      return;
    }
    const local_2 = local_7;
    const local_3 = local_18 ?? {
      itemId: local_2.id,
      key: crypto.randomUUID(),
      position: {
        ...(local
          ? {
              x: local_11.x,
              y: local_11.y,
            }
          : local_9),
        size: local_2.kind === "splash" ? 0.22 : 0.16,
        angle: local_2.kind === "splash" ? Math.random() * 360 : 0,
      },
      ...(local
        ? {
            anchor: {
              anchorKind: local_11.anchorKind,
              anchorId: local_11.anchorId,
            },
          }
        : {}),
    };
    local_19(local_3);
    local_4(true);
    try {
      const local =
        local_2.kind === "splash"
          ? await imported_22.throwBalloon(
              arg,
              local_3.itemId,
              {
                x: local_3.position.x,
                y: local_3.position.y,
                ...local_3.anchor,
              },
              local_3.key,
            )
          : null;
      if (local_2.kind === "whoopee_cushion") {
        await imported_22.throwCushion(arg, local_3.itemId, local_3.key, {
          x: local_3.position.x,
          y: local_3.position.y,
          ...local_3.anchor,
        });
      } else if (local_2.kind === "sticker") {
        const local = await imported_22.place(
          arg,
          local_3.itemId,
          local_3.position,
          local_3.key,
        );
        imported_35({
          profileId: arg,
          ...local,
        });
      }
      if (local_2.kind === "splash" && local_11) {
        const local = fn_3bbe2496(local_11);
        if (local) {
          imported_36(local.balloon);
          if (local) {
            local_17({
              key: local_3.key,
              x: local_11.x,
              y: local_11.y,
              frame: local,
            });
          }
        }
      }
      local_19(null);
      local_12(null);
      local_8(null);
      local_28();
      imported_30.success(
        local_2.kind === "splash"
          ? "Шарик попал! След останется на 48 часов"
          : local_2.kind === "whoopee_cushion"
            ? "Подушка на месте: посетители услышат её в течение суток"
            : "Наклейка размещена",
      );
    } catch (error) {
      if (imported_37(error) && error.code === "CUSHION_ACTIVE") {
        imported_30.error(
          "На этом профиле уже есть подушка. Попробуйте после окончания суток.",
        );
      } else if (imported_37(error) && error.code === "ITEM_UNAVAILABLE") {
        imported_30.error("Этот предмет уже потрачен. Откройте рюкзак заново.");
      } else {
        imported_30.error(fn_75d71f4e(error));
      }
    } finally {
      local_4(false);
    }
  };
  const local_34 = async (arg) => {
    const local = local_20.current.get(arg) ?? crypto.randomUUID();
    local_20.current.set(arg, local);
    try {
      const local = await imported_22.erase(arg, arg, local);
      local_20.current.delete(arg);
      local_23(null);
      local_28();
      imported_30.success(
        local.removed ? "Наклейка стёрта" : "Наклейка потёрта",
      );
    } catch {
      imported_30.error(
        "Не удалось подтвердить стирание. Можно повторить без второго списания.",
      );
      throw new Error("Erase result is unknown");
    }
  };
  const local_35 = (arg) => {
    local_26(
      imported(imported_65, {
        title: "Стереть наклейку?",
        message:
          "Будет использован один ластик. Наклейка исчезнет после третьего стирания.",
        confirmText: "Стереть",
        danger: true,
        onConfirm: () => local_34(arg),
        onClose: local_27,
      }),
    );
  };
  return imported(imported_13, {
    children: [
      local_16 &&
        imported_28(
          imported(
            "span",
            {
              className: local_c9902c8d.balloonImpactFrame,
              style: {
                left: `${local_16.frame.left}px`,
                top: `${local_16.frame.top}px`,
                width: `${local_16.frame.width}px`,
                height: `${local_16.frame.height}px`,
                borderRadius: local_16.frame.radius,
              },
              "aria-hidden": "true",
              children: imported("span", {
                className: local_c9902c8d.balloonImpact,
                style: {
                  left: `${local_16.x * 100}%`,
                  top: `${local_16.y * 100}%`,
                },
                children: [
                  imported("img", {
                    className: local_c9902c8d.balloonBody,
                    src: imported_33,
                    alt: "",
                    draggable: false,
                  }),
                  imported("span", {
                    className: local_c9902c8d.balloonBurst,
                    children: Array.from(
                      {
                        length: 18,
                      },
                      (arg, arg_2) => imported("i", {}, arg_2),
                    ),
                  }),
                ],
              }),
            },
            local_16.key,
          ),
          document.body,
        ),
      local_7?.kind === "sticker" &&
        imported("div", {
          className: local_c9902c8d.placementMode,
          "aria-label": "Размещение наклейки на баннере",
          children: imported("span", {
            className: local_c9902c8d.pending,
            role: "slider",
            tabIndex: 0,
            "aria-label": "Положение предмета",
            "aria-valuetext": `${Math.round(local_9.x * 100)} на ${Math.round(local_9.y * 100)}`,
            style: {
              left: `${local_9.x * 100}%`,
              top: `${local_9.y * 100}%`,
              width: "16%",
            },
            onPointerDown: (arg) => {
              arg.stopPropagation();
              arg.currentTarget.setPointerCapture(arg.pointerId);
              local_13.current = true;
              local_31(arg);
            },
            onPointerMove: (arg) => {
              if (local_13.current) {
                local_31(arg);
              }
            },
            onPointerUp: (arg) => {
              const local = arg.currentTarget;
              if (local.hasPointerCapture(arg.pointerId)) {
                local.releasePointerCapture(arg.pointerId);
              }
              local_13.current = false;
              local_31(arg);
            },
            onPointerCancel: () => {
              local_13.current = false;
            },
            onKeyDown: (arg) => {
              const local = arg.shiftKey ? 0.05 : 0.01;
              if (!local_18) {
                if (arg.key === "ArrowLeft") {
                  local_10((arg) => ({
                    ...arg,
                    x: Math.max(0, arg.x - local),
                  }));
                } else if (arg.key === "ArrowRight") {
                  local_10((arg) => ({
                    ...arg,
                    x: Math.min(1, arg.x + local),
                  }));
                } else if (arg.key === "ArrowUp") {
                  local_10((arg) => ({
                    ...arg,
                    y: Math.max(0, arg.y - local),
                  }));
                } else if (arg.key === "ArrowDown") {
                  local_10((arg) => ({
                    ...arg,
                    y: Math.min(1, arg.y + local),
                  }));
                } else {
                  return;
                }
                arg.preventDefault();
              }
            },
            children: local_2f99206e(local_7),
          }),
        }),
      local_7?.kind === "sticker" &&
        imported_28(
          imported("div", {
            className: local_c9902c8d.pagePlacementControls,
            "data-alice-sticker-placement-controls": true,
            children: [
              imported("span", {
                children: local_3
                  ? "Размещаем…"
                  : local_18
                    ? "Повторите подтверждение"
                    : "Перетащите наклейку на баннере",
              }),
              imported("button", {
                type: "button",
                className: local_c9902c8d.pageConfirm,
                disabled: local_3,
                onClick: () => {
                  local_33();
                },
                children: local_3
                  ? "Подождите…"
                  : local_18
                    ? "Повторить"
                    : "Разместить",
              }),
              imported("button", {
                type: "button",
                className: local_c9902c8d.pageCancel,
                disabled: local_3,
                onClick: () => {
                  local_19(null);
                  local_12(null);
                  local_8(null);
                },
                children: "Отмена",
              }),
            ],
          }),
          document.body,
        ),
      (local_7?.kind === "splash" || local_7?.kind === "whoopee_cushion") &&
        imported_28(
          imported(imported_13, {
            children: [
              imported("div", {
                className: local_c9902c8d.pagePlacementControls,
                "data-alice-page-placement-controls": true,
                children: [
                  imported("span", {
                    children: local_3
                      ? "Размещаем…"
                      : local_18
                        ? "Повторите подтверждение"
                        : local_11
                          ? local_7.kind === "splash"
                            ? "Перетащите шарик и подтвердите"
                            : "Перетащите подушку и подтвердите"
                          : "Выберите место для предмета",
                  }),
                  imported("button", {
                    type: "button",
                    className: local_c9902c8d.pageConfirm,
                    disabled: local_3 || (!local_11 && !local_18),
                    onClick: () => {
                      local_33();
                    },
                    children: local_3
                      ? "Подождите…"
                      : local_18
                        ? "Повторить"
                        : local_7.kind === "splash"
                          ? "Кинуть шарик"
                          : "Положить подушку",
                  }),
                  imported("button", {
                    type: "button",
                    className: local_c9902c8d.pageCancel,
                    disabled: local_3,
                    onClick: () => {
                      local_19(null);
                      local_12(null);
                      local_8(null);
                    },
                    children: "Отмена",
                  }),
                ],
              }),
              local_11 &&
                imported("div", {
                  className: local_c9902c8d.balloonAim,
                  children: imported("span", {
                    className: local_c9902c8d.pagePending,
                    role: "slider",
                    tabIndex: 0,
                    "aria-label":
                      local_7.kind === "splash"
                        ? "Место броска шарика"
                        : "Место для подушки",
                    "aria-valuetext": `${Math.round(local_11.x * 100)} на ${Math.round(local_11.y * 100)}`,
                    style: {
                      left: `${local_11.clientX}px`,
                      top: `${local_11.clientY}px`,
                      width:
                        local_7.kind === "splash"
                          ? "clamp(80px, 16vw, 180px)"
                          : "clamp(74px, 13vw, 140px)",
                    },
                    onPointerDown: (arg) => {
                      arg.preventDefault();
                      arg.stopPropagation();
                      arg.currentTarget.setPointerCapture(arg.pointerId);
                      local_15.current = {
                        x: arg.clientX - local_11.clientX,
                        y: arg.clientY - local_11.clientY,
                      };
                      local_14.current = true;
                    },
                    onPointerMove: (arg) => {
                      if (local_14.current) {
                        local_32(
                          arg.clientX - local_15.current.x,
                          arg.clientY - local_15.current.y,
                        );
                      }
                    },
                    onPointerUp: (arg) => {
                      const local = arg.currentTarget;
                      if (local.hasPointerCapture(arg.pointerId)) {
                        local.releasePointerCapture(arg.pointerId);
                      }
                      local_14.current = false;
                      local_32(
                        arg.clientX - local_15.current.x,
                        arg.clientY - local_15.current.y,
                      );
                    },
                    onPointerCancel: () => {
                      local_14.current = false;
                    },
                    onClick: (arg) => {
                      arg.preventDefault();
                      arg.stopPropagation();
                    },
                    onKeyDown: (arg) => {
                      const local = arg.shiftKey ? 0.05 : 0.01;
                      if (!(local_18 || local_3)) {
                        if (arg.key === "ArrowLeft") {
                          local_12(
                            (arg) =>
                              arg &&
                              (fn_a7a5ce84(
                                arg.clientX - local * 100,
                                arg.clientY,
                              ) ??
                                arg),
                          );
                        } else if (arg.key === "ArrowRight") {
                          local_12(
                            (arg) =>
                              arg &&
                              (fn_a7a5ce84(
                                arg.clientX + local * 100,
                                arg.clientY,
                              ) ??
                                arg),
                          );
                        } else if (arg.key === "ArrowUp") {
                          local_12(
                            (arg) =>
                              arg &&
                              (fn_a7a5ce84(
                                arg.clientX,
                                arg.clientY - local * 100,
                              ) ??
                                arg),
                          );
                        } else if (arg.key === "ArrowDown") {
                          local_12(
                            (arg) =>
                              arg &&
                              (fn_a7a5ce84(
                                arg.clientX,
                                arg.clientY + local * 100,
                              ) ??
                                arg),
                          );
                        } else {
                          return;
                        }
                        arg.preventDefault();
                        arg.stopPropagation();
                      }
                    },
                    children: local_2f99206e(local_7),
                  }),
                }),
            ],
          }),
          document.body,
        ),
      local_22 &&
        imported("div", {
          className: local_c9902c8d.placementMode,
          "aria-label": "Выберите наклейку для стирания",
          children: [
            local_22.placements
              .filter((arg) => arg.kind === "sticker")
              .map((arg) =>
                imported(
                  "button",
                  {
                    type: "button",
                    className: local_c9902c8d.eraseTarget,
                    style: {
                      left: `${arg.x * 100}%`,
                      top: `${arg.y * 100}%`,
                      width: `${arg.size * 100}%`,
                      aspectRatio: "1",
                    },
                    "aria-label": "Выбрать наклейку для стирания",
                    onClick: () => local_35(arg.id),
                  },
                  arg.id,
                ),
              ),
            imported("span", {
              className: local_c9902c8d.placementHint,
              children: "Выберите наклейку и подтвердите стирание",
            }),
            imported("button", {
              type: "button",
              className: local_c9902c8d.cancel,
              onClick: () => local_23(null),
              children: "Отмена",
            }),
          ],
        }),
      local &&
        imported_28(
          imported(imported_4, {
            showHeader: false,
            className: local_c9902c8d.modal,
            onClose: () => local_2(false),
            children: imported("div", {
              className: local_c9902c8d.body,
              children: [
                imported("div", {
                  className: local_c9902c8d.header,
                  children: [
                    imported("h2", {
                      className: local_c9902c8d.title,
                      children: "Рюкзак",
                    }),
                    imported("button", {
                      type: "button",
                      className: local_c9902c8d.close,
                      "aria-label": "Закрыть",
                      onClick: () => local_2(false),
                      children: imported(imported_34, {
                        size: 18,
                      }),
                    }),
                  ],
                }),
                imported("p", {
                  className: local_c9902c8d.hint,
                  children:
                    "Наклейки размещаются на баннере. Шарики можно кинуть в шапку или пост чужого профиля — след остаётся на 48 часов.",
                }),
                imported(imported_3, {
                  fullWidth: true,
                  onClick: () => {
                    const local = new URLSearchParams({
                      profileId: arg,
                      returnTo: `/@${arg_2.replace(/^@/, "")}`,
                    });
                    local_2(false);
                    imported_29(`/event/alice-ai?${local.toString()}`);
                  },
                  children: "Открыть магазин",
                }),
                local_24 &&
                  imported("p", {
                    className: local_c9902c8d.hint,
                    role: "alert",
                    children: local_24,
                  }),
                imported("div", {
                  className: local_c9902c8d.list,
                  children: local_3
                    ? imported("div", {
                        className: local_c9902c8d.empty,
                        children: "Загрузка…",
                      })
                    : local_5.length
                      ? local_5.map((arg) =>
                          imported(
                            "button",
                            {
                              type: "button",
                              className: local_c9902c8d.item,
                              onClick: () => {
                                local_30(arg);
                              },
                              children: [
                                imported("span", {
                                  className: local_c9902c8d.itemIcon,
                                  "aria-hidden": "true",
                                  children: local_2f99206e(arg),
                                }),
                                imported("span", {
                                  children: [
                                    imported("span", {
                                      className: local_c9902c8d.itemTitle,
                                      children: local_900428e1(arg),
                                    }),
                                    imported("span", {
                                      className: local_c9902c8d.itemText,
                                      children: "Использовать на этом профиле",
                                    }),
                                  ],
                                }),
                                imported("span", {
                                  children: "›",
                                }),
                              ],
                            },
                            arg.id,
                          ),
                        )
                      : imported("div", {
                          className: local_c9902c8d.empty,
                          children: "В рюкзаке пока нет подходящих предметов.",
                        }),
                }),
              ],
            }),
          }),
          document.body,
        ),
    ],
  });
}
const local_724c774d = "c_card";
const local_74554b53 = "c_star";
const local_e39e93b0 = "c_copy";
const local_d6e6c6e3 = "c_reading";
const local_fe9ec23f = "c_label";
const local_83d2fa50 = "c_help";
const local_c93abff8 = "c_value";
const local_aed955ce = "c_rank";
const local_dc607243 = "c_compact";
const local_680c9d99 = "c_centered";
const local_9e30c4cd = "c_sideBySide";
const local_8ce643f9 = {
  card: local_724c774d,
  star: local_74554b53,
  copy: local_e39e93b0,
  reading: local_d6e6c6e3,
  label: local_fe9ec23f,
  help: local_83d2fa50,
  value: local_c93abff8,
  rank: local_aed955ce,
  compact: local_dc607243,
  centered: local_680c9d99,
  sideBySide: local_9e30c4cd,
};
const local_464a8bbc = (arg) => {
  if (arg >= 85) {
    return {
      title: "Сияет",
      color: "#5cea70",
    };
  }
  if (arg >= 65) {
    return {
      title: "Светится",
      color: "#75e19e",
    };
  }
  if (arg >= 45) {
    return {
      title: "Ровная",
      color: "#f2d159",
    };
  }
  if (arg >= 25) {
    return {
      title: "Мерцает",
      color: "#fa9e4d",
    };
  }
  return {
    title: "Тлеет",
    color: "#f26b6b",
  };
};
function fn_0d28a8dd({
  value: arg,
  profileUsername: arg_2,
  compact: arg_3 = false,
  centered: arg_4 = false,
  sideBySide: arg_5 = false,
}) {
  const local = local_464a8bbc(arg);
  const local_2 = new URLSearchParams({
    product: "aura_analyzer",
  });
  if (arg_2) {
    local_2.set("returnTo", `/@${arg_2.replace(/^@/, "")}`);
  }
  return imported("section", {
    className: `${local_8ce643f9.card} ${arg_3 ? local_8ce643f9.compact : ""} ${arg_4 ? local_8ce643f9.centered : ""} ${arg_5 ? local_8ce643f9.sideBySide : ""}`,
    style: {
      "--aura-color": local.color,
    },
    "aria-label": `Аура аккаунта: ${arg} из 100, ${local.title}`,
    children: [
      imported("span", {
        className: local_8ce643f9.star,
        "aria-hidden": "true",
        children: "✦",
      }),
      imported("span", {
        className: local_8ce643f9.copy,
        children: [
          imported("span", {
            className: local_8ce643f9.label,
            children: [
              "Аура аккаунта ",
              imported("button", {
                type: "button",
                className: local_8ce643f9.help,
                "aria-label": "Открыть анализатор ауры в магазине",
                title: "Оценку выдаёт анализатор ауры из ивент-магазина.",
                onClick: () =>
                  imported_29(`/event/alice-ai?${local_2.toString()}`),
                children: "?",
              }),
            ],
          }),
          imported("span", {
            className: local_8ce643f9.reading,
            children: [
              imported("span", {
                className: local_8ce643f9.value,
                children: [
                  arg,
                  imported("small", {
                    children: "/100",
                  }),
                ],
              }),
              imported("span", {
                className: local_8ce643f9.rank,
                children: [local.title, " ✦"],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const local_8f8b7f34 = "../assets/curtains-icon-d6-ivj7-uz.svg";
const local_e71a4ca6 = "../assets/chalk-icon-d6l-u3ica.svg";
const local_868e89b5 = "c_fund";
const local_f1c23efb_2 = "c_header";
const local_a0cefcb4 = "c_footer";
const local_4d8b9449 = "c_chalkCount";
const local_b441c017 = "c_chalkIcon";
const local_9d9cf508_3 = "c_title";
const local_bb982e9e = "c_modalTitle";
const local_9bcad1a8 = "c_helpDialog";
const local_d08fa2ce = "c_helpCopy";
const local_bb1a60d6 = "c_helpButton";
const local_2c917740 = "c_link";
const local_2d2dc45b = "c_track";
const local_7ab56d01 = "c_form";
const local_d71612fd = "c_amounts";
const local_c1f1f19d = "c_amount";
const local_24b1a1bd = "c_amountActive";
const local_8c4f8b4b_3 = "c_actions";
const local_6be799a9_2 = "c_cancel";
const local_a155ce36 = "c_submit";
const local_02ce1672 = "c_note";
const local_dc607243_2 = "c_compact";
const local_bbc4ec22 = {
  fund: local_868e89b5,
  header: local_f1c23efb_2,
  footer: local_a0cefcb4,
  chalkCount: local_4d8b9449,
  chalkIcon: local_b441c017,
  title: local_9d9cf508_3,
  modalTitle: local_bb982e9e,
  helpDialog: local_9bcad1a8,
  helpCopy: local_d08fa2ce,
  helpButton: local_bb1a60d6,
  link: local_2c917740,
  track: local_2d2dc45b,
  form: local_7ab56d01,
  amounts: local_d71612fd,
  amount: local_c1f1f19d,
  amountActive: local_24b1a1bd,
  actions: local_8c4f8b4b_3,
  cancel: local_6be799a9_2,
  submit: local_a155ce36,
  note: local_02ce1672,
  compact: local_dc607243_2,
};
const local_2d3b5f59 = [10, 25, 50];
const local_7f66de41 = {
  INSUFFICIENT_CHALKS: "Не хватает мелков",
  CURTAINS_FUNDED: "Шторы уже собраны",
  EVENT_PURCHASES_DISABLED: "Взносы сейчас на паузе. Мелки не списаны",
  EVENT_APPLICATIONS_DISABLED: "Взносы сейчас на паузе. Мелки не списаны",
  PROFILE_TARGET_NOT_FOUND: "Этот профиль сейчас недоступен",
};
function fn_df9a52ba({
  profileId: arg,
  isOwnProfile: arg_2,
  curtains: arg_3,
  compact: arg_4 = false,
  onChanged: arg_5,
}) {
  const local = Math.min(arg_3.fund, arg_3.goal);
  const local_2 = Math.max(0, arg_3.goal - arg_3.fund);
  const [local_3, local_4] = imported_9(false);
  const [local_5, local_6] = imported_9(Math.min(local_2d3b5f59[0], local_2));
  const [local_7, local_8] = imported_9(null);
  const [local_9, local_10] = imported_9(false);
  const [local_11, local_12] = imported_9(false);
  const [local_13, local_14] = imported_9("");
  const [local_15, local_16] = imported_9(false);
  const local_17 = imported_16(null);
  imported_17(() => {
    local_4(false);
    local_14("");
    local_12(false);
    local_17.current = null;
  }, [arg]);
  imported_17(() => {
    if (local_3) {
      imported_22.balance().then(local_8, () => local_8(null));
    }
  }, [local_3]);
  const local_18 = [...local_2d3b5f59, local_2].filter(
    (arg, arg_2, arg_3) =>
      arg > 0 && arg <= local_2 && arg_3.indexOf(arg) === arg_2,
  );
  const local_19 = Math.min(local_5, local_2);
  const local_20 = local_7 !== null && local_7 < local_19;
  const local_21 = async () => {
    if (local_9 || local_19 < 1) {
      return;
    }
    const local =
      local_17.current?.amount === local_19
        ? local_17.current
        : {
            amount: local_19,
            key: crypto.randomUUID(),
          };
    local_17.current = local;
    local_10(true);
    local_14("");
    try {
      const local = await imported_22.donateCurtains(
        arg,
        local.amount,
        local.key,
      );
      local_17.current = null;
      local_12(false);
      local_8(local.balance);
      arg_5(local.curtains);
      imported_32(arg);
      const local_2 = local.curtains.hasCurtains;
      imported_30.success(
        local_2
          ? "Сбор завершён — шторы теперь доступны"
          : `Скинули ${local.donated} мелков`,
      );
      if (local_2) {
        local_4(false);
      } else {
        local_6(
          Math.min(
            local_2d3b5f59[0],
            Math.max(1, local.curtains.goal - local.curtains.fund),
          ),
        );
      }
    } catch (error) {
      const local = imported_37(error) ? local_7f66de41[error.code] : undefined;
      if (local) {
        local_17.current = null;
        local_12(false);
        local_14(local);
      } else {
        local_12(true);
        local_14(
          "Ответ не дошёл. Нажмите ещё раз — это тот же взнос, второй раз не спишется",
        );
      }
    } finally {
      local_10(false);
    }
  };
  const local_22 = arg_3.closed
    ? "Шторы закрыты"
    : arg_3.hasCurtains
      ? "Сбор завершён"
      : arg_2
        ? "Можно скинуться"
        : "Можно помочь";
  const local_23 = !arg_3.hasCurtains;
  return imported("div", {
    className: `${local_bbc4ec22.fund} ${arg_4 ? local_bbc4ec22.compact : ""}`,
    children: [
      imported("div", {
        className: local_bbc4ec22.header,
        children: [
          imported("span", {
            className: local_bbc4ec22.title,
            children: [
              "Сбор на шторы",
              imported("button", {
                type: "button",
                className: local_bbc4ec22.helpButton,
                "aria-label": "Как работает сбор на шторы",
                onClick: () => local_16(true),
                children: "?",
              }),
            ],
          }),
          imported("strong", {
            className: local_bbc4ec22.chalkCount,
            children: [
              local,
              " из ",
              arg_3.goal,
              "./profile.js",
              imported("img", {
                src: local_e71a4ca6,
                alt: "мелков",
              }),
            ],
          }),
        ],
      }),
      imported("div", {
        className: local_bbc4ec22.track,
        role: "progressbar",
        "aria-label": "Сбор на шторы",
        "aria-valuemin": 0,
        "aria-valuemax": arg_3.goal,
        "aria-valuenow": local,
        children: imported("span", {
          style: {
            width: `${Math.min(100, (local / Math.max(1, arg_3.goal)) * 100)}%`,
          },
        }),
      }),
      imported("div", {
        className: local_bbc4ec22.footer,
        children: [
          imported("span", {
            children: local_22,
          }),
          local_23 &&
            !local_3 &&
            imported("button", {
              type: "button",
              className: local_bbc4ec22.link,
              onClick: () => local_4(true),
              children: "Поддержать",
            }),
        ],
      }),
      local_23 &&
        local_3 &&
        imported("div", {
          className: local_bbc4ec22.form,
          children: [
            imported("div", {
              className: local_bbc4ec22.amounts,
              role: "group",
              "aria-label": "Сколько скинуть",
              children: local_18.map((arg) =>
                imported(
                  "button",
                  {
                    type: "button",
                    className: `${local_bbc4ec22.amount} ${arg === local_19 ? local_bbc4ec22.amountActive : ""}`,
                    "aria-pressed": arg === local_19,
                    disabled: local_9 || local_11,
                    onClick: () => {
                      local_6(arg);
                      local_14("");
                    },
                    children:
                      arg === local_2 &&
                      arg !== local_2d3b5f59[0] &&
                      !local_2d3b5f59.includes(arg)
                        ? `все ${arg}`
                        : arg,
                  },
                  arg,
                ),
              ),
            }),
            imported("div", {
              className: local_bbc4ec22.actions,
              children: [
                imported("button", {
                  type: "button",
                  className: local_bbc4ec22.cancel,
                  disabled: local_9 || local_11,
                  onClick: () => {
                    local_4(false);
                    local_14("");
                  },
                  children: "Отмена",
                }),
                imported("button", {
                  type: "button",
                  className: local_bbc4ec22.submit,
                  disabled: local_9 || (local_20 && !local_11),
                  onClick: () => {
                    local_21();
                  },
                  children: local_9
                    ? "Отправляем…"
                    : local_11
                      ? "Повторить"
                      : imported(imported_13, {
                          children: [
                            "Скинуть ",
                            local_19,
                            "./profile.js",
                            imported("img", {
                              className: local_bbc4ec22.chalkIcon,
                              src: local_e71a4ca6,
                              alt: "мелков",
                            }),
                          ],
                        }),
                }),
              ],
            }),
            imported("p", {
              className: local_bbc4ec22.note,
              role: "status",
              children:
                local_13 ||
                (local_7 === null
                  ? ""
                  : local_20
                    ? `У вас ${local_7} мелков — не хватает`
                    : `У вас ${local_7} мелков`),
            }),
          ],
        }),
      local_15 &&
        imported(imported_38, {
          title: imported("span", {
            className: local_bbc4ec22.modalTitle,
            children: [
              imported("img", {
                src: local_8f8b7f34,
                alt: "",
                "aria-hidden": "true",
              }),
              "Сбор на шторы",
            ],
          }),
          message: imported("span", {
            className: local_bbc4ec22.helpCopy,
            children: [
              imported("span", {
                children:
                  "На шторы нужно 100 мелков. Их можно собрать самому или вместе с друзьями — в своём профиле или у друга.",
              }),
              imported("span", {
                children:
                  "Когда вся сумма собрана, владелец профиля сможет открывать и закрывать шторы в настройках ивента.",
              }),
            ],
          }),
          dialogClassName: local_bbc4ec22.helpDialog,
          actions: [
            {
              label: "Понятно",
              role: "cancel",
              onClick: () => local_16(false),
            },
          ],
          onDismiss: () => local_16(false),
        }),
    ],
  });
}
const local_06128897 = imported_12(() =>
  imported_14(
    () => import("./drawing-canvas.js"),
    local_d3e9f901([10, 1, 2, 11]),
  ).then((arg) => ({
    default: arg.DrawingCanvas,
  })),
);
const local_cfec21e2 = imported_12(() =>
  imported_14(
    () => import("../shared/chunk-1f9577716691.js"),
    local_d3e9f901([12, 1, 2, 13, 14]),
  ).then((arg) => ({
    default: arg.VerificationModal,
  })),
);
const local_f8603183 = imported_12(() =>
  imported_14(
    () => import("./report-modal.js"),
    local_d3e9f901([15, 1, 2, 13, 16]),
  ).then((arg) => ({
    default: arg.ReportModal,
  })),
);
function fn_46e426cc(arg) {
  return new Date(arg).toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });
}
function fn_c33f48f2({
  profile: arg,
  isOwnProfile: arg_2,
  isFollowing: arg_3,
  isRequested: arg_4 = false,
  isFollowLoading: arg_5,
  isBlocked: arg_6 = false,
  isFollowedBy: arg_7 = false,
  isPhone: arg_8,
  onEditProfile: arg_9,
  onToggleFollow: arg_10,
  onBlockUser: arg_11,
  onFollowersClick: arg_12,
  onFollowingClick: arg_13,
  onBannerUpdate: arg_14,
  onAliceStateChange: arg_15,
}) {
  const [local, local_2] = imported_9(false);
  const [local_3, local_4] = imported_9(0);
  const [local_5, local_6] = imported_9(0);
  const [local_7, local_8] = imported_9(null);
  const local_9 = imported_21(
    (arg) => {
      local_8(arg);
      arg_15?.(arg);
    },
    [arg_15],
  );
  const local_10 = imported_39().status === "allowed";
  const { openModal: local_11, closeModal: local_12 } = imported_31();
  const local_13 = imported_21(() => {
    local_2(true);
  }, []);
  const local_14 = imported_21(() => {
    local_11(
      imported(local_cfec21e2, {
        onClose: local_12,
      }),
    );
  }, [local_11, local_12]);
  const local_15 = imported_21(() => {
    if (arg_6) {
      arg_11?.();
      return;
    }
    local_11(
      imported(fn_7500e35b, {
        username: arg.username || "",
        displayName: arg.displayName,
        avatar: arg.avatar,
        onConfirm: () => arg_11?.(),
        onClose: local_12,
      }),
    );
  }, [arg_6, arg_11, local_11, local_12, arg]);
  const local_16 = imported_21(() => {
    local_11(
      imported(local_f8603183, {
        targetType: "user",
        targetId: arg.id,
        onClose: local_12,
      }),
    );
  }, [local_11, local_12, arg.id]);
  const local_17 = imported_21(() => {
    local_2(false);
  }, []);
  const local_18 = imported_21(() => {
    local_11(
      imported(imported_65, {
        title: "Удалить баннер?",
        message:
          "Баннер будет удалён из профиля. Это действие нельзя отменить.",
        confirmText: "Удалить",
        danger: true,
        onConfirm: async () => {
          try {
            await imported_40.updateProfile({
              bannerId: null,
            });
            arg_14?.(null);
          } catch (error) {
            console.error("Failed to delete banner:", error);
            imported_30.error("Не удалось удалить баннер");
            throw error;
          }
        },
        onClose: local_12,
      }),
    );
  }, [local_11, local_12, arg_14]);
  const local_19 = imported_21(
    async (arg) => {
      try {
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
        const local_7 = new File([local_6], "banner.png", {
          type: "image/png",
        });
        const local_8 = await imported_41.uploadMedia(local_7);
        await imported_40.updateProfile({
          bannerId: local_8.id,
        });
        arg_14?.({
          id: local_8.id,
          type: "image",
          url: local_8.url,
          width: local_8.width,
          height: local_8.height,
        });
      } catch (error) {
        console.error("Failed to upload banner:", error);
        imported_30.error("Не удалось загрузить баннер");
        throw error;
      }
    },
    [arg_14],
  );
  const local_20 =
    local_10 && arg_8 && local_7?.aura != null && !!local_7.curtains;
  return imported("div", {
    className: local_819ff8dc.profileCard,
    "data-alice-water-anchor-kind": "profile_header",
    children: [
      imported("div", {
        className: local_819ff8dc.banner,
        children: [
          arg.banner?.url
            ? imported("img", {
                src: arg.banner.url,
                alt: "Banner",
              })
            : imported("div", {
                className: local_819ff8dc.bannerPlaceholder,
              }),
          local_10 &&
            imported(fn_c5f5c468, {
              profileId: arg.id,
              profileName: arg.displayName,
              profileUsername: arg.username,
              profileAvatar: arg.avatar,
              isOwnProfile: arg_2,
              refreshKey: local_3,
              onStateChange: local_9,
            }),
          local_10 &&
            !arg_8 &&
            local_7?.aura != null &&
            imported("div", {
              className: local_819ff8dc.bannerAura,
              children: imported(fn_0d28a8dd, {
                value: local_7.aura,
                profileUsername: arg.username,
                compact: true,
              }),
            }),
          local_10 &&
            imported(
              fn_13234f11,
              {
                profileId: arg.id,
                profileUsername: arg.username,
                ownProfile: arg_2,
                openSignal: local_5,
                onChanged: () => local_4((arg) => arg + 1),
              },
              arg.id,
            ),
          arg_2 &&
            imported("div", {
              className: local_819ff8dc.bannerActions,
              children: [
                imported("button", {
                  className: local_819ff8dc.bannerActionButton,
                  onClick: local_13,
                  title: "Нарисовать баннер",
                  children: imported(imported_42, {
                    size: 20,
                  }),
                }),
                arg.banner?.url &&
                  imported("button", {
                    className: `${local_819ff8dc.bannerActionButton} ${local_819ff8dc.deleteBannerButton}`,
                    onClick: local_18,
                    title: "Удалить баннер",
                    children: imported(imported_43, {
                      size: 20,
                    }),
                  }),
              ],
            }),
        ],
      }),
      local_10 &&
        imported(imported_44, {
          placements: imported_45(local_7?.balloons, "profile_header", null),
          anchorKind: "profile_header",
          anchorId: null,
        }),
      local &&
        imported(imported_11, {
          fallback: null,
          children: imported(local_06128897, {
            isOpen: local,
            onClose: local_17,
            onSave: local_19,
            mode: "banner",
          }),
        }),
      imported("div", {
        className: local_819ff8dc.profileContent,
        children: [
          imported("div", {
            className: local_819ff8dc.avatarRow,
            children: [
              imported(imported_2, {
                src: arg.avatar,
                alt: arg.displayName,
                size: "lg",
                online: arg.online,
                className: local_819ff8dc.avatar,
              }),
              !arg_8 &&
                imported(fn_2480d55e, {
                  isOwnProfile: arg_2,
                  isFollowing: arg_3,
                  isRequested: arg_4,
                  isFollowLoading: arg_5,
                  isVerified: arg.isVerified,
                  isBlocked: arg_6,
                  onEditProfile: arg_9,
                  onToggleFollow: arg_10,
                  onVerificationRequest: local_14,
                  onBlockUser: local_15,
                  onReportUser: local_16,
                  onAliceToolsClick: local_10
                    ? () => local_6((arg) => arg + 1)
                    : undefined,
                }),
            ],
          }),
          imported("div", {
            className: local_819ff8dc.infoContainer,
            children: [
              imported("div", {
                className: local_819ff8dc.userInfo,
                children: [
                  imported(imported_46, {
                    userId: arg.id,
                    name: arg.displayName,
                    verified: arg.isVerified,
                    hasNuksta: arg.hasNuksta,
                    pin: arg.pin,
                    size: "lg",
                    className: local_819ff8dc.name,
                  }),
                  arg.username &&
                    imported("span", {
                      className: local_819ff8dc.username,
                      children: ["@", arg.username],
                    }),
                ],
              }),
              arg.bio &&
                imported("p", {
                  className: local_819ff8dc.bio,
                  children: arg.bio,
                }),
              imported("div", {
                className: `${local_819ff8dc.detailsRow} ${local_10 && local_7?.curtains ? local_819ff8dc.hasCurtainFund : ""} ${local_20 ? local_819ff8dc.hasMobileAuraAndFund : ""}`,
                children: [
                  imported("div", {
                    className: local_819ff8dc.detailsMain,
                    children: [
                      imported(fn_312ee776, {
                        isPhone: arg_8,
                        followers: arg.stats?.followers ?? 0,
                        following: arg.stats?.following ?? 0,
                        onFollowersClick: arg_12,
                        onFollowingClick: arg_13,
                      }),
                      arg_8 &&
                        imported("div", {
                          className: local_819ff8dc.mobileActions,
                          children: imported(fn_2480d55e, {
                            isOwnProfile: arg_2,
                            isFollowing: arg_3,
                            isRequested: arg_4,
                            isFollowLoading: arg_5,
                            isVerified: arg.isVerified,
                            isBlocked: arg_6,
                            onEditProfile: arg_9,
                            onToggleFollow: arg_10,
                            onVerificationRequest: local_14,
                            onBlockUser: local_15,
                            onReportUser: local_16,
                            onAliceToolsClick: local_10
                              ? () => local_6((arg) => arg + 1)
                              : undefined,
                          }),
                        }),
                      !arg_2 &&
                        !arg.online &&
                        arg.lastSeen &&
                        imported("span", {
                          className: local_819ff8dc.metaItem,
                          children: [
                            "Был(а) в сети: ",
                            fn_7dc01f3c(arg.lastSeen),
                          ],
                        }),
                      arg.createdAt &&
                        imported("span", {
                          className: local_819ff8dc.metaItem,
                          children: [
                            imported(local_2d34ceb6, {}),
                            " Регистрация: ",
                            fn_46e426cc(arg.createdAt),
                          ],
                        }),
                      arg_7 &&
                        !arg_2 &&
                        imported("span", {
                          className: local_819ff8dc.followsYou,
                          children: "Подписан на вас",
                        }),
                    ],
                  }),
                  local_10 &&
                    arg_8 &&
                    local_7?.aura != null &&
                    imported("div", {
                      className: local_819ff8dc.mobileAura,
                      children: imported(fn_0d28a8dd, {
                        value: local_7.aura,
                        profileUsername: arg.username,
                        centered: !local_20,
                        sideBySide: local_20,
                      }),
                    }),
                  local_10 &&
                    local_7?.curtains &&
                    imported("div", {
                      className: local_819ff8dc.curtainFund,
                      children: imported(fn_df9a52ba, {
                        profileId: arg.id,
                        isOwnProfile: arg_2,
                        curtains: local_7.curtains,
                        compact: local_20,
                        onChanged: (arg) =>
                          local_8(
                            (arg) =>
                              arg && {
                                ...arg,
                                curtains: arg,
                              },
                          ),
                      }),
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function fn_632095dd(arg, arg_2, arg_3) {
  const local = arg.originalPost
    ? fn_632095dd(arg.originalPost, arg_2, arg_3)
    : arg.originalPost;
  const local_2 =
    arg.author.id === arg_2 && arg.author.avatar !== arg_3
      ? {
          ...arg.author,
          avatar: arg_3,
        }
      : arg.author;
  if (local_2 !== arg.author || local !== arg.originalPost) {
    return {
      ...arg,
      author: local_2,
      originalPost: local,
    };
  }
  return arg;
}
function fn_849b710a({ profile: arg, isBlocked: arg_2 }) {
  const [local, local_2] = imported_9("posts");
  const local_3 = arg?.id;
  const [local_4] = imported_9(() => {
    if (arg && !arg_2) {
      return imported_47.getCachedWall(
        arg.username || arg.id,
        arg.pinnedPostId,
      );
    }
    return null;
  });
  const [local_5, local_6] = imported_9(local_4?.data ?? []);
  const [local_7, local_8] = imported_9(false);
  const [local_9, local_10] = imported_9(local_4?.nextCursor ?? null);
  const [local_11, local_12] = imported_9([]);
  const [local_13, local_14] = imported_9(false);
  const [local_15, local_16] = imported_9(null);
  const [local_17, local_18] = imported_9(false);
  const [local_19, local_20] = imported_9(null);
  const local_21 = imported_21(async (arg, arg_2, arg_3) => {
    local_8(true);
    try {
      const local = await imported_47.getUserWall(arg, {
        cursor: arg_3,
        limit: 20,
        pinnedPostId: arg_2,
      });
      const local_2 = local.data;
      local_6((arg) => {
        if (arg_3) {
          return [...arg, ...local_2];
        }
        return local_2;
      });
      local_10(local.nextCursor);
    } catch (error) {
      console.error("Failed to fetch wall posts:", error);
    } finally {
      local_8(false);
    }
  }, []);
  const local_22 = imported_21(
    async (arg, arg_2) => {
      if (!local_17) {
        local_14(true);
      }
      local_20(null);
      try {
        const local = await imported_47.getUserLikedPosts(arg, {
          cursor: arg_2,
          limit: 20,
        });
        const local_2 = local.data;
        local_12((arg) => {
          if (arg_2) {
            return [...arg, ...local_2];
          }
          return local_2;
        });
        local_16(local.nextCursor);
        local_18(true);
      } catch (error) {
        console.error("Failed to fetch liked posts:", error);
        if (
          error &&
          typeof error === "object" &&
          "status" in error &&
          error.status === 403
        ) {
          local_20("Лайки скрыты настройками приватности");
        }
      } finally {
        local_14(false);
      }
    },
    [local_17],
  );
  imported_17(() => {
    if (!(!arg || arg_2)) {
      local_21(arg.username || arg.id, arg.pinnedPostId);
    }
  }, [arg?.id, arg_2, local_21]);
  imported_17(() => {
    const local = (arg) => {
      const local = arg.detail;
      const local_2 = imported_48.getState().profile;
      if (!local_3 || local !== local_3 || local_2?.id !== local) {
        return;
      }
      const local_3 = local_2.avatar ?? null;
      local_6((arg) => arg.map((arg) => fn_632095dd(arg, local, local_3)));
      local_12((arg) => arg.map((arg) => fn_632095dd(arg, local, local_3)));
    };
    window.addEventListener(imported_23, local);
    return () => window.removeEventListener(imported_23, local);
  }, [local_3]);
  imported_17(() => {
    if (local === "likes" && arg) {
      local_22(arg.id);
    }
  }, [local, arg?.id, local_22]);
  const local_23 = imported_49((arg) => arg.posts);
  const local_24 = imported_49((arg) => arg.highlightedPostId);
  const local_25 = imported_49((arg) => arg._lastPostEdit);
  const local_26 = imported_49((arg) => arg._lastLikeUpdate);
  const local_27 = imported_49((arg) => arg._lastRepostUpdate);
  const local_28 = imported_49((arg) => arg._lastStatsBatch);
  imported_17(() => {
    if (!local_24 || !arg) {
      return;
    }
    const local = local_23.find((arg) => arg.id === local_24);
    if (!(
      !local ||
      local.wallOwnerId !== arg.id ||
      local_5.some((arg) => arg.id === local_24)
    )) {
      local_6((arg) => [local, ...arg]);
    }
  }, [local_24, local_23, arg?.id, local_5]);
  imported_17(() => {
    if (local_5.length !== 0) {
      local_6((arg) =>
        arg.map((arg) => {
          const local = local_23.find((arg) => arg.id === arg.id);
          if (
            local &&
            (local.editedAt !== arg.editedAt ||
              local.attachments !== arg.attachments)
          ) {
            return local;
          }
          return arg;
        }),
      );
    }
  }, [local_23]);
  imported_17(() => {
    if (local_25) {
      local_6((arg) =>
        arg.map((arg) => {
          if (arg.id === local_25.postId) {
            return {
              ...arg,
              text: local_25.text,
              spans: local_25.spans,
              editedAt: local_25.editedAt,
            };
          }
          return arg;
        }),
      );
    }
  }, [local_25]);
  imported_17(() => {
    if (!local_26) {
      return;
    }
    const {
      postId: local,
      myReaction: local_2,
      totalDelta: local_3,
    } = local_26;
    const local_4 = (arg) => {
      if (arg.id === local) {
        return {
          ...arg,
          reactions: {
            ...arg.reactions,
            myReaction: local_2,
            total: Math.max(0, arg.reactions.total + local_3),
          },
        };
      }
      return arg;
    };
    local_6((arg) => arg.map(local_4));
    local_12((arg) => arg.map(local_4));
  }, [local_26]);
  imported_17(() => {
    if (!local_27) {
      return;
    }
    const { postId: local, reposted: local_2, countDelta: local_3 } = local_27;
    const local_4 = (arg) => {
      if (arg.id === local) {
        return {
          ...arg,
          reposted: local_2,
          stats: {
            ...arg.stats,
            reposts: Math.max(0, arg.stats.reposts + local_3),
          },
        };
      }
      return arg;
    };
    local_6((arg) => arg.map(local_4));
    local_12((arg) => arg.map(local_4));
  }, [local_27]);
  imported_17(() => {
    if (!local_28 || local_28.length === 0) {
      return;
    }
    const local = new Map(local_28.map((arg) => [arg.id, arg]));
    const local_2 = (arg) => {
      const local = local.get(arg.id);
      if (local) {
        return {
          ...arg,
          reactions: {
            ...arg.reactions,
            total: local.likesCount,
          },
          stats: {
            ...arg.stats,
            views: local.viewsCount,
            comments: local.commentsCount,
            reposts: local.repostsCount,
          },
          dominantEmoji: local.dominantEmoji,
        };
      }
      return arg;
    };
    local_6((arg) => arg.map(local_2));
    local_12((arg) => arg.map(local_2));
  }, [local_28]);
  const local_29 = imported_21(() => {
    !arg ||
      local_7 ||
      (local === "posts" && local_9
        ? local_21(arg.username || arg.id, arg.pinnedPostId, local_9)
        : local === "likes" &&
          local_15 &&
          !local_13 &&
          local_22(arg.id, local_15));
  }, [arg, local, local_9, local_15, local_7, local_13, local_21, local_22]);
  const local_30 = imported_21(
    async (arg) => {
      if (!arg) {
        return;
      }
      const local = arg.pinnedPostId === arg;
      try {
        if (local) {
          await imported_40.unpinPost(arg);
        } else {
          await imported_40.pinPost(arg);
        }
      } catch (error) {
        console.error("Failed to pin/unpin post:", error);
        throw error;
      }
    },
    [arg],
  );
  const local_31 = imported_21(async () => {
    if (arg) {
      imported_47.invalidateWallCache(arg.username || arg.id);
      await local_21(arg.username || arg.id, arg.pinnedPostId);
    }
  }, [arg, local_21]);
  const local_32 = imported_21(
    (arg) => {
      local_6((arg) => arg.filter((arg) => arg.id !== arg));
      local_12((arg) => arg.filter((arg) => arg.id !== arg));
      if (arg) {
        imported_47.removePostFromWallCache(arg.username || arg.id, arg);
      }
    },
    [arg],
  );
  const local_33 = imported_21((arg) => {
    local_2(arg);
  }, []);
  const local_34 = imported_21(() => {
    local_6([]);
    local_10(null);
    local_12([]);
    local_18(false);
    local_16(null);
    local_20(null);
    local_2("posts");
  }, []);
  return {
    posts: local === "posts" ? local_5 : local_11,
    postsLoading: local === "posts" ? local_7 : local_13,
    nextCursor: local === "posts" ? local_9 : local_15,
    activeTab: local,
    likesError: local_19,
    hasLoadedLikes: local_17,
    handleLoadMore: local_29,
    handlePinPost: local_30,
    refreshPosts: local_31,
    removePost: local_32,
    handleTabChange: local_33,
    resetPosts: local_34,
  };
}
function fn_ac8e62aa({ username: arg }) {
  const local = imported_48((arg) => arg.profile);
  const local_2 = local?.id;
  const local_3 = imported_48((arg) => arg.setProfile);
  const [local_4, local_5] = imported_9(() => {
    if (arg) {
      return imported_40.getCachedProfile(arg);
    }
    return null;
  });
  const [local_6, local_7] = imported_9(local_4 === null);
  const local_8 = imported_16(local_4 ? (arg ?? null) : null);
  const [local_9, local_10] = imported_9(null);
  const local_11 = local_4?.id;
  const local_12 = local_4?.username;
  const [local_13, local_14] = imported_9("none");
  const [local_15, local_16] = imported_9(false);
  const [local_17, local_18] = imported_9(false);
  const [local_19, local_20] = imported_9(false);
  const local_21 = !!(local && local_4 && local.id === local_4.id);
  const local_22 = local_13 === "following";
  const local_23 = local_13 === "requested";
  const local_24 = local_4?.interaction?.isFollowedBy ?? false;
  const local_25 = local_4?.interaction?.isBlockedBy ?? false;
  const {
    posts: local_26,
    postsLoading: local_27,
    nextCursor: local_28,
    activeTab: local_29,
    likesError: local_30,
    hasLoadedLikes: local_31,
    handleLoadMore: local_32,
    handlePinPost: local_33,
    refreshPosts: local_34,
    removePost: local_35,
    handleTabChange: local_36,
    resetPosts: local_37,
  } = fn_849b710a({
    profile: local_4,
    isBlocked: local_17,
  });
  imported_17(() => {
    if (!local_4 || local_21 || !local) {
      local_14("none");
      local_18(false);
      return;
    }
    if (local_4.interaction) {
      if (local_4.interaction.isFollowing) {
        local_14("following");
      } else if (local_4.interaction.hasOutgoingRequest) {
        local_14("requested");
      } else {
        local_14("none");
      }
      local_18(local_4.interaction.isBlocking);
    }
  }, [local_4?.id, local_21, local]);
  const local_38 = imported_16(true);
  imported_17(() => {
    local_38.current = true;
    return () => {
      local_38.current = false;
    };
  }, []);
  imported_17(() => {
    const local = new AbortController();
    (async () => {
      const local = local_8.current !== null && local_8.current === arg;
      local_8.current = null;
      if (!local) {
        local_5(null);
        local_7(true);
        local_14("none");
        local_18(false);
        local_37();
      }
      local_10(null);
      try {
        const local = arg
          ? await imported_40.getProfileByUsername(arg)
          : await imported_40.getMyProfile();
        if (!local_38.current || local.signal.aborted) {
          return;
        }
        if (local) {
          local_5(local);
        }
      } catch (error) {
        if (!local_38.current || local.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", error);
        const local = imported_37(error) ? error.status : 0;
        local_10(local === imported_50.NOT_FOUND ? "notFound" : "server");
      } finally {
        if (local_38.current && !local.signal.aborted) {
          local_7(false);
        }
      }
    })();
    return () => {
      local.abort();
    };
  }, [arg, local_2, local_37]);
  imported_17(() => {
    const local = (arg) => {
      const local = arg.detail;
      const local_2 = imported_48.getState().profile;
      if (!(!local_11 || local !== local_11 || local_2?.id !== local)) {
        local_5(
          (arg) =>
            arg && {
              ...arg,
              avatar: local_2.avatar,
            },
        );
        if (local_12) {
          imported_40.updateProfileCache(local_12, {
            avatar: local_2.avatar,
          });
        }
      }
    };
    window.addEventListener(imported_23, local);
    return () => window.removeEventListener(imported_23, local);
  }, [local_11, local_12]);
  const local_39 = imported_21(async () => {
    if (!(!local_4 || local_15)) {
      local_16(true);
      try {
        const local = await imported_51.followUser(local_4.id);
        local_14(local);
        if (local === "following" && local_4.stats) {
          const local = local_4.stats.followers + 1;
          local_5((arg) => {
            if (arg?.stats) {
              return {
                ...arg,
                stats: {
                  ...arg.stats,
                  followers: local,
                },
              };
            }
            return arg;
          });
          if (local_4.username) {
            imported_40.updateProfileCache(local_4.username, {
              stats: {
                ...local_4.stats,
                followers: local,
              },
            });
          }
        }
      } catch (error) {
        console.error("Failed to follow:", error);
      } finally {
        local_16(false);
      }
    }
  }, [local_4, local_15]);
  const local_40 = imported_21(async () => {
    if (!(!local_4 || local_15)) {
      local_16(true);
      try {
        await imported_51.unfollowUser(local_4.id);
        local_14("none");
        if (local_22 && local_4.stats) {
          const local = local_4.stats.followers - 1;
          local_5((arg) => {
            if (arg?.stats) {
              return {
                ...arg,
                stats: {
                  ...arg.stats,
                  followers: local,
                },
              };
            }
            return arg;
          });
          if (local_4.username) {
            imported_40.updateProfileCache(local_4.username, {
              stats: {
                ...local_4.stats,
                followers: local,
              },
            });
          }
        }
      } catch (error) {
        console.error("Failed to unfollow:", error);
      } finally {
        local_16(false);
      }
    }
  }, [local_4, local_22, local_15]);
  const local_41 = imported_21(async () => {
    if (local_22 || local_23) {
      await local_40();
    } else {
      await local_39();
    }
  }, [local_22, local_23, local_39, local_40]);
  const local_42 = imported_21(
    async (arg) => {
      if (!local_4) {
        return;
      }
      const local = local_4.pinnedPostId === arg ? null : arg;
      const local_2 = {
        ...local_4,
        pinnedPostId: local,
      };
      local_5(local_2);
      if (local) {
        local_3(local_2);
      }
      try {
        await local_33(arg);
      } catch {
        local_5(local_4);
        if (local) {
          local_3(local_4);
        }
      }
    },
    [local_4, local, local_3, local_33],
  );
  const local_43 = imported_21(async () => {
    if (!(!local_4 || local_19 || local_21)) {
      local_20(true);
      try {
        if (local_17) {
          await imported_51.unblockUser(local_4.id);
          local_18(false);
          imported_30.success("Пользователь разблокирован");
        } else {
          await imported_51.blockUser(local_4.id);
          local_18(true);
          imported_30.success("Пользователь заблокирован");
          if (local_22) {
            local_14("none");
          }
        }
        if (local_4.username) {
          imported_40.invalidateProfileCache(local_4.username);
        }
      } catch (error) {
        console.error("Failed to toggle block:", error);
        imported_30.error("Не удалось выполнить действие");
      } finally {
        local_20(false);
      }
    }
  }, [local_4, local_17, local_19, local_21, local_22]);
  const local_44 = imported_21(
    (arg) => {
      local_5((arg) => {
        if (arg) {
          return {
            ...arg,
            banner: arg,
          };
        }
        return null;
      });
      if (local) {
        local_3({
          ...local,
          banner: arg,
        });
      }
    },
    [local, local_3],
  );
  return {
    profile: local_4,
    loading: local_6,
    error: local_9,
    posts: local_26,
    postsLoading: local_27,
    nextCursor: local_28,
    isOwnProfile: local_21,
    isFollowing: local_22,
    isFollowedBy: local_24,
    isBlockedBy: local_25,
    isRequested: local_23,
    isFollowLoading: local_15,
    handleToggleFollow: local_41,
    handleFollow: local_39,
    handleUnfollow: local_40,
    handleLoadMore: local_32,
    handlePinPost: local_42,
    refreshPosts: local_34,
    removePost: local_35,
    activeTab: local_29,
    handleTabChange: local_36,
    likesError: local_30,
    hasLoadedLikes: local_31,
    updateBanner: local_44,
    isBlocked: local_17,
    handleBlockUser: local_43,
  };
}
const local_64782940_2 = imported_12(() =>
  imported_14(
    () => import("./subscription-modal.js"),
    local_d3e9f901([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
  ).then((arg) => ({
    default: arg.SettingsModal,
  })),
);
const local_01d34312 = imported_12(() =>
  imported_14(
    () => import("../shared/chunk-0e8ef113cb20.js"),
    local_d3e9f901([17, 1, 2, 18, 12, 13, 14, 19]),
  ).then((arg) => ({
    default: arg.UserListModal,
  })),
);
export const local_877a0c56 = ({ username: arg }) => {
  const [local, local_2] = imported_9(null);
  const local_3 = imported_21((arg) => {
    local_2((arg) => {
      if (
        arg?.profileId === arg?.profileId &&
        arg?.rev === arg?.rev &&
        arg?.balloons?.length === arg?.balloons?.length
      ) {
        return arg;
      }
      return arg;
    });
  }, []);
  const local_4 = imported_52();
  const local_5 = imported_53();
  const { openModal: local_6, closeModal: local_7 } = imported_31();
  const local_8 = imported_49((arg) => arg.createPost);
  const local_9 = imported_49((arg) => arg.profileScrollByUser);
  const local_10 = imported_49((arg) => arg.profileMeasuredHeightsByUser);
  const local_11 = imported_49((arg) => arg.setProfileMeasuredHeights);
  const local_12 = arg ? (local_9[arg] ?? 0) : 0;
  const local_13 = imported_16(null);
  const {
    profile: local_14,
    loading: local_15,
    error: local_16,
    posts: local_17,
    postsLoading: local_18,
    nextCursor: local_19,
    isOwnProfile: local_20,
    isFollowing: local_21,
    isFollowedBy: local_22,
    isBlockedBy: local_23,
    isRequested: local_24,
    isFollowLoading: local_25,
    isBlocked: local_26,
    handleFollow: local_27,
    handleUnfollow: local_28,
    handleBlockUser: local_29,
    handleLoadMore: local_30,
    handlePinPost: local_31,
    refreshPosts: local_32,
    removePost: local_33,
    activeTab: local_34,
    handleTabChange: local_35,
    likesError: local_36,
    updateBanner: local_37,
  } = fn_ac8e62aa({
    username: arg,
  });
  const local_38 = arg ? `${arg}:${local_34}` : null;
  const local_39 = local_38 ? local_10[local_38] : undefined;
  const local_40 = imported_21(
    (arg) => {
      if (local_38) {
        local_11(local_38, arg);
      }
    },
    [local_38, local_11],
  );
  const local_41 = imported_21(() => {
    if (local_21 || local_24) {
      local_6(
        imported(imported_54, {
          displayName: local_14?.displayName ?? "",
          onConfirm: local_28,
          onClose: local_7,
        }),
      );
    } else {
      local_27();
    }
  }, [
    local_21,
    local_24,
    local_14?.displayName,
    local_27,
    local_28,
    local_6,
    local_7,
  ]);
  const local_42 = () => {
    local_6(
      imported(local_64782940_2, {
        onClose: local_7,
      }),
    );
  };
  const local_43 = imported_21(() => {
    if (local_14) {
      local_6(
        imported(local_01d34312, {
          userId: local_14.id,
          type: "followers",
          title: "Подписчики",
        }),
      );
    }
  }, [local_14, local_6]);
  const local_44 = imported_21(() => {
    if (local_14) {
      local_6(
        imported(local_01d34312, {
          userId: local_14.id,
          type: "following",
          title: "Подписки",
        }),
      );
    }
  }, [local_14, local_6]);
  const local_45 = async (arg, arg_2, arg_3, arg_4, arg_5) => {
    if (local_14) {
      await local_8({
        wallOwnerId: local_14.id,
        text: arg,
        spans: arg_2,
        attachments: arg_3,
        poll: arg_4,
        notebook: arg_5,
      });
      local_32();
    }
  };
  const local_46 = imported_21(() => {
    if (local_14) {
      local_6(
        imported(imported_55, {
          wallOwnerId: local_14.id,
          placeholder: `Написать на стене ${local_14.displayName}`,
          onPostCreated: local_32,
        }),
      );
    }
  }, [local_14, local_6, local_32]);
  imported_20(() => {
    if (arg && local_13.current !== arg && local_17.length !== 0) {
      local_13.current = arg;
      if (!(local_12 <= 0)) {
        window.scrollTo(0, local_12);
        requestAnimationFrame(() => window.scrollTo(0, local_12));
      }
    }
  }, [arg, local_17.length, local_12]);
  const local_47 = imported_56(() => {
    if (local_34 !== "posts" || !local_14?.pinnedPostId) {
      return local_17;
    }
    const local = local_17.find((arg) => arg.id === local_14.pinnedPostId);
    if (local) {
      return [
        local,
        ...local_17.filter((arg) => arg.id !== local_14.pinnedPostId),
      ];
    }
    return local_17;
  }, [local_17, local_14?.pinnedPostId, local_34]);
  const local_48 = imported_56(() => {
    if (!local_5) {
      return false;
    }
    if (local_20) {
      return true;
    }
    if (local_26 || local_23) {
      return false;
    }
    switch (local_14?.privacySettings?.whoCanPostOnWall) {
      case "everyone":
        return true;
      case "followers":
        return local_21;
      case "mutual":
        return local_21 && local_22;
      default:
        return false;
    }
  }, [
    local_5,
    local_20,
    local_26,
    local_23,
    local_14?.privacySettings?.whoCanPostOnWall,
    local_21,
    local_22,
  ]);
  const local_49 =
    local_20 ||
    local_14?.privacySettings?.whoCanSeeMyPostReactions === "everyone";
  const local_50 = imported_56(() => {
    const local = ["Посты"];
    if (local_49) {
      local.push("Лайки");
    }
    return local;
  }, [local_49]);
  const local_51 = imported_21(
    (arg) => {
      local_35(local_49 ? (arg === 0 ? "posts" : "likes") : "posts");
    },
    [local_35, local_49],
  );
  const local_52 = imported_16(null);
  imported_20(() => {
    const local = arg ?? "";
    const local_2 = local_52.current;
    local_52.current = {
      user: local,
      tab: local_34,
    };
    if (local_2 && local_2.user === local && local_2.tab !== local_34) {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, [local_34, arg]);
  if (local_15) {
    return null;
  }
  if (local_16 || !local_14) {
    const local = local_16 === "server";
    return imported(imported_57, {
      kind: local ? "server" : "notFound",
      title: local ? "Сервис недоступен" : "Профиль не найден",
      description: local
        ? "Не удалось получить профиль — сервер не ответил. Попробуйте обновить страницу позже."
        : "Пользователя с таким адресом нет. Возможно, профиль удалён или в ссылке опечатка.",
      action: imported(imported_3, {
        onClick: () => imported_29("../site/index.html"),
        children: "Вернуться на главную",
      }),
    });
  }
  return imported("div", {
    className: local_819ff8dc.page,
    "data-alice-profile-root": true,
    children: [
      imported(fn_c33f48f2, {
        profile: local_14,
        isOwnProfile: local_20,
        isFollowing: local_21,
        isRequested: local_24,
        isFollowLoading: local_25,
        isBlocked: local_26,
        isFollowedBy: local_22,
        isPhone: local_4,
        onEditProfile: local_42,
        onToggleFollow: local_41,
        onBlockUser: local_29,
        onFollowersClick: local_43,
        onFollowingClick: local_44,
        onBannerUpdate: local_37,
        onAliceStateChange: local_3,
      }),
      imported("div", {
        className: local_819ff8dc.tabsWrapper,
        children: imported(imported_58, {
          tabs: local_50,
          activeIndex: local_34 === "posts" ? 0 : 1,
          onChange: local_51,
        }),
      }),
      imported("div", {
        className: local_819ff8dc.belowTabs,
        children: [
          local_48 &&
            imported(imported_13, {
              children: [
                imported("div", {
                  className: local_819ff8dc.createPostWrapper,
                  children: [
                    imported(imported_2, {
                      src: local_14.avatar ?? "",
                      alt: local_14.displayName,
                      size: "sm",
                    }),
                    imported(imported_59, {
                      onSubmit: local_45,
                      placeholder: local_20
                        ? "Что нового?"
                        : `Написать на стене ${local_14.displayName}`,
                    }),
                  ],
                }),
                imported(imported_3, {
                  variant: "secondary",
                  className: local_819ff8dc.writePostButton,
                  onClick: local_46,
                  children: "Написать на стене",
                }),
              ],
            }),
          local_26
            ? imported("div", {
                className: local_819ff8dc.emptyPosts,
                children: "Вы заблокировали этого пользователя",
              })
            : local_36
              ? imported("div", {
                  className: local_819ff8dc.emptyPosts,
                  children: local_36,
                })
              : local_47.length > 0
                ? imported(
                    imported_60,
                    {
                      posts: local_47,
                      renderPost: (arg, arg_2, arg_3) =>
                        imported(imported_61, {
                          post: arg,
                          aliceWaterStains: imported_45(
                            local?.profileId === local_14.id
                              ? local.balloons
                              : [],
                            "post",
                            arg.id,
                          ),
                          isOnOwnProfile: local_20 && local_34 === "posts",
                          isPinned:
                            local_34 === "posts" &&
                            local_14?.pinnedPostId === arg.id,
                          isHighlighted: arg_3,
                          source: "profile",
                          sourceContext: local_14?.id ?? "",
                          onPin:
                            local_20 && local_34 === "posts"
                              ? local_31
                              : undefined,
                          onDelete: local_34 === "posts" ? local_33 : undefined,
                        }),
                      hasMore: !!local_19,
                      isLoadingMore: local_18,
                      onLoadMore: local_30,
                      initialMeasuredHeights: local_39,
                      onMeasuredHeightsChange: local_40,
                    },
                    local_38 ?? local_34,
                  )
                : local_18 && local_47.length === 0
                  ? imported(imported_62, {
                      count: 4,
                    })
                  : imported("div", {
                      className: local_819ff8dc.emptyPosts,
                      children:
                        local_34 === "posts" ? "Нет постов" : "Нет лайков",
                    }),
        ],
      }),
    ],
  });
};
