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
  symbol_071 as imported,
  symbol_056 as imported_2,
  symbol_003 as imported_3,
  symbol_014 as imported_4,
  symbol_005 as imported_5,
  symbol_010 as imported_6,
  symbol_057 as imported_7,
  symbol_059 as imported_8,
  symbol_054 as imported_9,
  symbol_060 as imported_10,
  symbol_061 as imported_11,
  symbol_076 as imported_12,
  symbol_020 as imported_13,
  symbol_062 as imported_14,
  symbol_063 as imported_15,
  symbol_064 as imported_16,
  symbol_067 as imported_17,
  symbol_065 as imported_18,
  symbol_070 as imported_19,
  symbol_068 as imported_20,
  symbol_069 as imported_21,
  symbol_072 as imported_22,
  symbol_022 as imported_23,
  symbol_066 as imported_24,
  symbol_058 as imported_25,
  symbol_052 as imported_26,
  symbol_073 as imported_27,
  symbol_002 as imported_28,
  symbol_074 as imported_29,
  symbol_009 as imported_30,
  symbol_075 as imported_31,
  symbol_004 as imported_32,
  symbol_006 as imported_33,
  symbol_007 as imported_34,
  symbol_008 as imported_35,
  symbol_028 as imported_36,
  symbol_021 as imported_37,
  symbol_055 as imported_38,
  symbol_011 as imported_39,
  symbol_012 as imported_40,
  symbol_013 as imported_41,
  symbol_023 as imported_42,
  symbol_053 as imported_43,
  symbol_017 as imported_44,
} from "../entry.js";
import { I as imported_45 } from "../components/icon-check.js";
import { C as imported_46 } from "../shared/chunk-3d5994e265d4.js";
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
const local_4c95c12d = {
  page: local_ef251bc6,
  tabsWrapper: local_e4d9221e,
  belowTabs: local_a2acbc37,
  createPostWrapper: local_b0d40848,
  writePostButton: local_c9f75872,
  profileCard: local_b2ff8ca6,
  banner: local_de69d44f,
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
const local_4eba3675 = {
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
      className: local_4eba3675.content,
      children: [
        imported(imported_2, {
          src: arg_3,
          alt: arg_2,
          size: "lg",
        }),
        imported("h2", {
          className: local_4eba3675.title,
          children: "Заблокировать пользователя?",
        }),
        imported("p", {
          className: local_4eba3675.description,
          children: [
            "Вы уверены, что хотите заблокировать",
            "./profile.js",
            imported("strong", {
              children: arg_2,
            }),
            arg &&
              imported("span", {
                className: local_4eba3675.username,
                children: [" (@", arg, ")"],
              }),
            "?",
          ],
        }),
        imported("p", {
          className: local_4eba3675.warning,
          children:
            "Заблокированный пользователь не сможет видеть ваш профиль и контент.",
        }),
        imported("div", {
          className: local_4eba3675.actions,
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
function fn_c7c8ba00(arg) {
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
function fn_9844f590(arg) {
  if (arg >= 1000000) {
    return `${(arg / 1000000).toFixed(1)}M`;
  }
  if (arg >= 1000) {
    return `${(arg / 1000).toFixed(1)}K`;
  }
  return arg.toString();
}
function fn_4a1f2f84({
  followers: arg,
  following: arg_2,
  isPhone: arg_3 = false,
  onFollowersClick: arg_4,
  onFollowingClick: arg_5,
}) {
  return imported("div", {
    className: local_4c95c12d.stats,
    children: [
      imported("div", {
        className: `${local_4c95c12d.stat} ${arg_4 ? local_4c95c12d.clickable : ""}`,
        onClick: arg_4,
        children: [
          imported("span", {
            className: local_4c95c12d.statValue,
            children: fn_9844f590(arg),
          }),
          imported("span", {
            className: local_4c95c12d.statLabel,
            children: "подписчиков",
          }),
        ],
      }),
      arg_3 && imported("hr", {}),
      imported("div", {
        className: `${local_4c95c12d.stat} ${arg_5 ? local_4c95c12d.clickable : ""}`,
        onClick: arg_5,
        children: [
          imported("span", {
            className: local_4c95c12d.statValue,
            children: fn_9844f590(arg_2),
          }),
          imported("span", {
            className: local_4c95c12d.statLabel,
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
          className: local_4c95c12d.ownActions,
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
              imported(imported_45, {
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
function fn_1ff18f6e({
  isOwnProfile: arg,
  isVerified: arg_2 = false,
  isBlocked: arg_3 = false,
  onVerificationRequest: arg_4,
  onBlockUser: arg_5,
  onReportUser: arg_6,
  ...arg_7
}) {
  const local = (() => {
    const local = [];
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
    className: local_4c95c12d.actions,
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
        ...arg_7,
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
function fn_dd84a1c6({
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
}) {
  const [local, local_2] = imported_9(false);
  const { openModal: local_3, closeModal: local_4 } = imported_16();
  const local_5 = imported_17(() => {
    local_2(true);
  }, []);
  const local_6 = imported_17(() => {
    local_3(
      imported(local_cfec21e2, {
        onClose: local_4,
      }),
    );
  }, [local_3, local_4]);
  const local_7 = imported_17(() => {
    if (arg_6) {
      arg_11?.();
      return;
    }
    local_3(
      imported(fn_7500e35b, {
        username: arg.username || "",
        displayName: arg.displayName,
        avatar: arg.avatar,
        onConfirm: () => arg_11?.(),
        onClose: local_4,
      }),
    );
  }, [arg_6, arg_11, local_3, local_4, arg]);
  const local_8 = imported_17(() => {
    local_3(
      imported(local_f8603183, {
        targetType: "user",
        targetId: arg.id,
        onClose: local_4,
      }),
    );
  }, [local_3, local_4, arg.id]);
  const local_9 = imported_17(() => {
    local_2(false);
  }, []);
  const local_10 = imported_17(() => {
    local_3(
      imported(imported_46, {
        title: "Удалить баннер?",
        message:
          "Баннер будет удалён из профиля. Это действие нельзя отменить.",
        confirmText: "Удалить",
        danger: true,
        onConfirm: async () => {
          try {
            await imported_18.updateProfile({
              bannerId: null,
            });
            arg_14?.(null);
          } catch (error) {
            console.error("Failed to delete banner:", error);
            imported_19.error("Не удалось удалить баннер");
            throw error;
          }
        },
        onClose: local_4,
      }),
    );
  }, [local_3, local_4, arg_14]);
  const local_11 = imported_17(
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
        const local_8 = await imported_20.uploadMedia(local_7);
        await imported_18.updateProfile({
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
        imported_19.error("Не удалось загрузить баннер");
        throw error;
      }
    },
    [arg_14],
  );
  return imported("div", {
    className: local_4c95c12d.profileCard,
    children: [
      imported("div", {
        className: local_4c95c12d.banner,
        children: [
          arg.banner?.url
            ? imported("img", {
                src: arg.banner.url,
                alt: "Banner",
              })
            : imported("div", {
                className: local_4c95c12d.bannerPlaceholder,
              }),
          arg_2 &&
            imported("div", {
              className: local_4c95c12d.bannerActions,
              children: [
                imported("button", {
                  className: local_4c95c12d.bannerActionButton,
                  onClick: local_5,
                  title: "Нарисовать баннер",
                  children: imported(imported_21, {
                    size: 20,
                  }),
                }),
                arg.banner?.url &&
                  imported("button", {
                    className: `${local_4c95c12d.bannerActionButton} ${local_4c95c12d.deleteBannerButton}`,
                    onClick: local_10,
                    title: "Удалить баннер",
                    children: imported(imported_22, {
                      size: 20,
                    }),
                  }),
              ],
            }),
        ],
      }),
      local &&
        imported(imported_11, {
          fallback: null,
          children: imported(local_06128897, {
            isOpen: local,
            onClose: local_9,
            onSave: local_11,
            mode: "banner",
          }),
        }),
      imported("div", {
        className: local_4c95c12d.profileContent,
        children: [
          imported("div", {
            className: local_4c95c12d.avatarRow,
            children: [
              imported(imported_2, {
                src: arg.avatar,
                alt: arg.displayName,
                size: "lg",
                online: arg.online,
                className: local_4c95c12d.avatar,
              }),
              !arg_8 &&
                imported(fn_1ff18f6e, {
                  isOwnProfile: arg_2,
                  isFollowing: arg_3,
                  isRequested: arg_4,
                  isFollowLoading: arg_5,
                  isVerified: arg.isVerified,
                  isBlocked: arg_6,
                  onEditProfile: arg_9,
                  onToggleFollow: arg_10,
                  onVerificationRequest: local_6,
                  onBlockUser: local_7,
                  onReportUser: local_8,
                }),
            ],
          }),
          imported("div", {
            className: local_4c95c12d.infoContainer,
            children: [
              imported("div", {
                className: local_4c95c12d.userInfo,
                children: [
                  imported(imported_23, {
                    name: arg.displayName,
                    verified: arg.isVerified,
                    hasNuksta: arg.hasNuksta,
                    pin: arg.pin,
                    size: "lg",
                    className: local_4c95c12d.name,
                  }),
                  arg.username &&
                    imported("span", {
                      className: local_4c95c12d.username,
                      children: ["@", arg.username],
                    }),
                ],
              }),
              arg_8 &&
                imported(imported_13, {
                  children: [
                    imported(fn_4a1f2f84, {
                      isPhone: true,
                      followers: arg.stats?.followers ?? 0,
                      following: arg.stats?.following ?? 0,
                      onFollowersClick: arg_12,
                      onFollowingClick: arg_13,
                    }),
                    imported("div", {
                      className: local_4c95c12d.mobileActions,
                      children: imported(fn_1ff18f6e, {
                        isOwnProfile: arg_2,
                        isFollowing: arg_3,
                        isRequested: arg_4,
                        isFollowLoading: arg_5,
                        isVerified: arg.isVerified,
                        isBlocked: arg_6,
                        onEditProfile: arg_9,
                        onToggleFollow: arg_10,
                        onVerificationRequest: local_6,
                        onBlockUser: local_7,
                        onReportUser: local_8,
                      }),
                    }),
                  ],
                }),
              arg.bio &&
                imported("p", {
                  className: local_4c95c12d.bio,
                  children: arg.bio,
                }),
              !arg_8 &&
                imported(fn_4a1f2f84, {
                  followers: arg.stats?.followers ?? 0,
                  following: arg.stats?.following ?? 0,
                  onFollowersClick: arg_12,
                  onFollowingClick: arg_13,
                }),
              !arg_2 &&
                !arg.online &&
                arg.lastSeen &&
                imported("span", {
                  className: local_4c95c12d.metaItem,
                  children: ["Был(а) в сети: ", fn_c7c8ba00(arg.lastSeen)],
                }),
              arg.createdAt &&
                imported("span", {
                  className: local_4c95c12d.metaItem,
                  children: [
                    imported(local_2d34ceb6, {}),
                    " Регистрация: ",
                    fn_46e426cc(arg.createdAt),
                  ],
                }),
              arg_7 &&
                !arg_2 &&
                imported("span", {
                  className: local_4c95c12d.followsYou,
                  children: "Подписан на вас",
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function fn_330f81cb({ profile: arg, isBlocked: arg_2 }) {
  const [local, local_2] = imported_9("posts");
  const [local_3] = imported_9(() => {
    if (arg && !arg_2) {
      return imported_24.getCachedWall(
        arg.username || arg.id,
        arg.pinnedPostId,
      );
    }
    return null;
  });
  const [local_4, local_5] = imported_9(local_3?.data ?? []);
  const [local_6, local_7] = imported_9(false);
  const [local_8, local_9] = imported_9(local_3?.nextCursor ?? null);
  const [local_10, local_11] = imported_9([]);
  const [local_12, local_13] = imported_9(false);
  const [local_14, local_15] = imported_9(null);
  const [local_16, local_17] = imported_9(false);
  const [local_18, local_19] = imported_9(null);
  const local_20 = imported_17(async (arg, arg_2, arg_3) => {
    local_7(true);
    try {
      const local = await imported_24.getUserWall(arg, {
        cursor: arg_3,
        limit: 20,
        pinnedPostId: arg_2,
      });
      const local_2 = local.data;
      local_5((arg) => {
        if (arg_3) {
          return [...arg, ...local_2];
        }
        return local_2;
      });
      local_9(local.nextCursor);
    } catch (error) {
      console.error("Failed to fetch wall posts:", error);
    } finally {
      local_7(false);
    }
  }, []);
  const local_21 = imported_17(
    async (arg, arg_2) => {
      if (!local_16) {
        local_13(true);
      }
      local_19(null);
      try {
        const local = await imported_24.getUserLikedPosts(arg, {
          cursor: arg_2,
          limit: 20,
        });
        const local_2 = local.data;
        local_11((arg) => {
          if (arg_2) {
            return [...arg, ...local_2];
          }
          return local_2;
        });
        local_15(local.nextCursor);
        local_17(true);
      } catch (error) {
        console.error("Failed to fetch liked posts:", error);
        if (
          error &&
          typeof error === "object" &&
          "status" in error &&
          error.status === 403
        ) {
          local_19("Лайки скрыты настройками приватности");
        }
      } finally {
        local_13(false);
      }
    },
    [local_16],
  );
  imported_25(() => {
    if (!(!arg || arg_2)) {
      local_20(arg.username || arg.id, arg.pinnedPostId);
    }
  }, [arg?.id, arg_2, local_20]);
  imported_25(() => {
    if (local === "likes" && arg) {
      local_21(arg.id);
    }
  }, [local, arg?.id, local_21]);
  const local_22 = imported_26((arg) => arg.posts);
  const local_23 = imported_26((arg) => arg.highlightedPostId);
  const local_24 = imported_26((arg) => arg._lastPostEdit);
  const local_25 = imported_26((arg) => arg._lastLikeUpdate);
  const local_26 = imported_26((arg) => arg._lastRepostUpdate);
  const local_27 = imported_26((arg) => arg._lastStatsBatch);
  imported_25(() => {
    if (!local_23 || !arg) {
      return;
    }
    const local = local_22.find((arg) => arg.id === local_23);
    if (!(
      !local ||
      local.wallOwnerId !== arg.id ||
      local_4.some((arg) => arg.id === local_23)
    )) {
      local_5((arg) => [local, ...arg]);
    }
  }, [local_23, local_22, arg?.id, local_4]);
  imported_25(() => {
    if (local_4.length !== 0) {
      local_5((arg) =>
        arg.map((arg) => {
          const local = local_22.find((arg) => arg.id === arg.id);
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
  }, [local_22]);
  imported_25(() => {
    if (local_24) {
      local_5((arg) =>
        arg.map((arg) => {
          if (arg.id === local_24.postId) {
            return {
              ...arg,
              text: local_24.text,
              spans: local_24.spans,
              editedAt: local_24.editedAt,
            };
          }
          return arg;
        }),
      );
    }
  }, [local_24]);
  imported_25(() => {
    if (!local_25) {
      return;
    }
    const {
      postId: local,
      myReaction: local_2,
      totalDelta: local_3,
    } = local_25;
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
    local_5((arg) => arg.map(local_4));
    local_11((arg) => arg.map(local_4));
  }, [local_25]);
  imported_25(() => {
    if (!local_26) {
      return;
    }
    const { postId: local, reposted: local_2, countDelta: local_3 } = local_26;
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
    local_5((arg) => arg.map(local_4));
    local_11((arg) => arg.map(local_4));
  }, [local_26]);
  imported_25(() => {
    if (!local_27 || local_27.length === 0) {
      return;
    }
    const local = new Map(local_27.map((arg) => [arg.id, arg]));
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
    local_5((arg) => arg.map(local_2));
    local_11((arg) => arg.map(local_2));
  }, [local_27]);
  const local_28 = imported_17(() => {
    !arg ||
      local_6 ||
      (local === "posts" && local_8
        ? local_20(arg.username || arg.id, arg.pinnedPostId, local_8)
        : local === "likes" &&
          local_14 &&
          !local_12 &&
          local_21(arg.id, local_14));
  }, [arg, local, local_8, local_14, local_6, local_12, local_20, local_21]);
  const local_29 = imported_17(
    async (arg) => {
      if (!arg) {
        return;
      }
      const local = arg.pinnedPostId === arg;
      try {
        if (local) {
          await imported_18.unpinPost(arg);
        } else {
          await imported_18.pinPost(arg);
        }
      } catch (error) {
        console.error("Failed to pin/unpin post:", error);
        throw error;
      }
    },
    [arg],
  );
  const local_30 = imported_17(async () => {
    if (arg) {
      imported_24.invalidateWallCache(arg.username || arg.id);
      await local_20(arg.username || arg.id, arg.pinnedPostId);
    }
  }, [arg, local_20]);
  const local_31 = imported_17(
    (arg) => {
      local_5((arg) => arg.filter((arg) => arg.id !== arg));
      local_11((arg) => arg.filter((arg) => arg.id !== arg));
      if (arg) {
        imported_24.removePostFromWallCache(arg.username || arg.id, arg);
      }
    },
    [arg],
  );
  const local_32 = imported_17((arg) => {
    local_2(arg);
  }, []);
  const local_33 = imported_17(() => {
    local_5([]);
    local_9(null);
    local_11([]);
    local_17(false);
    local_15(null);
    local_19(null);
    local_2("posts");
  }, []);
  return {
    posts: local === "posts" ? local_4 : local_10,
    postsLoading: local === "posts" ? local_6 : local_12,
    nextCursor: local === "posts" ? local_8 : local_14,
    activeTab: local,
    likesError: local_18,
    hasLoadedLikes: local_16,
    handleLoadMore: local_28,
    handlePinPost: local_29,
    refreshPosts: local_30,
    removePost: local_31,
    handleTabChange: local_32,
    resetPosts: local_33,
  };
}
function fn_c7fa7317({ username: arg }) {
  const local = imported_27((arg) => arg.profile);
  const local_2 = local?.id;
  const local_3 = imported_27((arg) => arg.setProfile);
  const [local_4, local_5] = imported_9(() => {
    if (arg) {
      return imported_18.getCachedProfile(arg);
    }
    return null;
  });
  const [local_6, local_7] = imported_9(local_4 === null);
  const local_8 = imported_28(local_4 ? (arg ?? null) : null);
  const [local_9, local_10] = imported_9(null);
  const [local_11, local_12] = imported_9("none");
  const [local_13, local_14] = imported_9(false);
  const [local_15, local_16] = imported_9(false);
  const [local_17, local_18] = imported_9(false);
  const local_19 = !!(local && local_4 && local.id === local_4.id);
  const local_20 = local_11 === "following";
  const local_21 = local_11 === "requested";
  const local_22 = local_4?.interaction?.isFollowedBy ?? false;
  const local_23 = local_4?.interaction?.isBlockedBy ?? false;
  const {
    posts: local_24,
    postsLoading: local_25,
    nextCursor: local_26,
    activeTab: local_27,
    likesError: local_28,
    hasLoadedLikes: local_29,
    handleLoadMore: local_30,
    handlePinPost: local_31,
    refreshPosts: local_32,
    removePost: local_33,
    handleTabChange: local_34,
    resetPosts: local_35,
  } = fn_330f81cb({
    profile: local_4,
    isBlocked: local_15,
  });
  imported_25(() => {
    if (!local_4 || local_19 || !local) {
      local_12("none");
      local_16(false);
      return;
    }
    if (local_4.interaction) {
      if (local_4.interaction.isFollowing) {
        local_12("following");
      } else if (local_4.interaction.hasOutgoingRequest) {
        local_12("requested");
      } else {
        local_12("none");
      }
      local_16(local_4.interaction.isBlocking);
    }
  }, [local_4?.id, local_19, local]);
  const local_36 = imported_28(true);
  imported_25(() => {
    local_36.current = true;
    return () => {
      local_36.current = false;
    };
  }, []);
  imported_25(() => {
    const local = new AbortController();
    (async () => {
      const local = local_8.current !== null && local_8.current === arg;
      local_8.current = null;
      if (!local) {
        local_5(null);
        local_7(true);
        local_12("none");
        local_16(false);
        local_35();
      }
      local_10(null);
      try {
        const local = arg
          ? await imported_18.getProfileByUsername(arg)
          : await imported_18.getMyProfile();
        if (!local_36.current || local.signal.aborted) {
          return;
        }
        if (local) {
          local_5(local);
        }
      } catch (error) {
        if (!local_36.current || local.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", error);
        const local = imported_29(error) ? error.status : 0;
        local_10(local === imported_30.NOT_FOUND ? "notFound" : "server");
      } finally {
        if (local_36.current && !local.signal.aborted) {
          local_7(false);
        }
      }
    })();
    return () => {
      local.abort();
    };
  }, [arg, local_2, local_35]);
  const local_37 = imported_17(async () => {
    if (!(!local_4 || local_13)) {
      local_14(true);
      try {
        const local = await imported_31.followUser(local_4.id);
        local_12(local);
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
            imported_18.updateProfileCache(local_4.username, {
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
        local_14(false);
      }
    }
  }, [local_4, local_13]);
  const local_38 = imported_17(async () => {
    if (!(!local_4 || local_13)) {
      local_14(true);
      try {
        await imported_31.unfollowUser(local_4.id);
        local_12("none");
        if (local_20 && local_4.stats) {
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
            imported_18.updateProfileCache(local_4.username, {
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
        local_14(false);
      }
    }
  }, [local_4, local_20, local_13]);
  const local_39 = imported_17(async () => {
    if (local_20 || local_21) {
      await local_38();
    } else {
      await local_37();
    }
  }, [local_20, local_21, local_37, local_38]);
  const local_40 = imported_17(
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
        await local_31(arg);
      } catch {
        local_5(local_4);
        if (local) {
          local_3(local_4);
        }
      }
    },
    [local_4, local, local_3, local_31],
  );
  const local_41 = imported_17(async () => {
    if (!(!local_4 || local_17 || local_19)) {
      local_18(true);
      try {
        if (local_15) {
          await imported_31.unblockUser(local_4.id);
          local_16(false);
          imported_19.success("Пользователь разблокирован");
        } else {
          await imported_31.blockUser(local_4.id);
          local_16(true);
          imported_19.success("Пользователь заблокирован");
          if (local_20) {
            local_12("none");
          }
        }
        if (local_4.username) {
          imported_18.invalidateProfileCache(local_4.username);
        }
      } catch (error) {
        console.error("Failed to toggle block:", error);
        imported_19.error("Не удалось выполнить действие");
      } finally {
        local_18(false);
      }
    }
  }, [local_4, local_15, local_17, local_19, local_20]);
  const local_42 = imported_17(
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
    posts: local_24,
    postsLoading: local_25,
    nextCursor: local_26,
    isOwnProfile: local_19,
    isFollowing: local_20,
    isFollowedBy: local_22,
    isBlockedBy: local_23,
    isRequested: local_21,
    isFollowLoading: local_13,
    handleToggleFollow: local_39,
    handleFollow: local_37,
    handleUnfollow: local_38,
    handleLoadMore: local_30,
    handlePinPost: local_40,
    refreshPosts: local_32,
    removePost: local_33,
    activeTab: local_27,
    handleTabChange: local_34,
    likesError: local_28,
    hasLoadedLikes: local_29,
    updateBanner: local_42,
    isBlocked: local_15,
    handleBlockUser: local_41,
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
export const local_63d098fa = ({ username: arg }) => {
  const local = imported_32();
  const local_2 = imported_33();
  const { openModal: local_3, closeModal: local_4 } = imported_16();
  const local_5 = imported_26((arg) => arg.createPost);
  const local_6 = imported_26((arg) => arg.profileScrollByUser);
  const local_7 = imported_26((arg) => arg.profileMeasuredHeightsByUser);
  const local_8 = imported_26((arg) => arg.setProfileMeasuredHeights);
  const local_9 = arg ? (local_6[arg] ?? 0) : 0;
  const local_10 = imported_28(null);
  const {
    profile: local_11,
    loading: local_12,
    error: local_13,
    posts: local_14,
    postsLoading: local_15,
    nextCursor: local_16,
    isOwnProfile: local_17,
    isFollowing: local_18,
    isFollowedBy: local_19,
    isBlockedBy: local_20,
    isRequested: local_21,
    isFollowLoading: local_22,
    isBlocked: local_23,
    handleFollow: local_24,
    handleUnfollow: local_25,
    handleBlockUser: local_26,
    handleLoadMore: local_27,
    handlePinPost: local_28,
    refreshPosts: local_29,
    removePost: local_30,
    activeTab: local_31,
    handleTabChange: local_32,
    likesError: local_33,
    updateBanner: local_34,
  } = fn_c7fa7317({
    username: arg,
  });
  const local_35 = arg ? `${arg}:${local_31}` : null;
  const local_36 = local_35 ? local_7[local_35] : undefined;
  const local_37 = imported_17(
    (arg) => {
      if (local_35) {
        local_8(local_35, arg);
      }
    },
    [local_35, local_8],
  );
  const local_38 = imported_17(() => {
    if (local_18 || local_21) {
      local_3(
        imported(imported_34, {
          displayName: local_11?.displayName ?? "",
          onConfirm: local_25,
          onClose: local_4,
        }),
      );
    } else {
      local_24();
    }
  }, [
    local_18,
    local_21,
    local_11?.displayName,
    local_24,
    local_25,
    local_3,
    local_4,
  ]);
  const local_39 = () => {
    local_3(
      imported(local_64782940_2, {
        onClose: local_4,
      }),
    );
  };
  const local_40 = imported_17(() => {
    if (local_11) {
      local_3(
        imported(local_01d34312, {
          userId: local_11.id,
          type: "followers",
          title: "Подписчики",
        }),
      );
    }
  }, [local_11, local_3]);
  const local_41 = imported_17(() => {
    if (local_11) {
      local_3(
        imported(local_01d34312, {
          userId: local_11.id,
          type: "following",
          title: "Подписки",
        }),
      );
    }
  }, [local_11, local_3]);
  const local_42 = async (arg, arg_2, arg_3, arg_4) => {
    if (local_11) {
      await local_5({
        wallOwnerId: local_11.id,
        text: arg,
        spans: arg_2,
        attachments: arg_3,
        poll: arg_4,
      });
      local_29();
    }
  };
  const local_43 = imported_17(() => {
    if (local_11) {
      local_3(
        imported(imported_35, {
          wallOwnerId: local_11.id,
          placeholder: `Написать на стене ${local_11.displayName}`,
          onPostCreated: local_29,
        }),
      );
    }
  }, [local_11, local_3, local_29]);
  imported_36(() => {
    if (arg && local_10.current !== arg && local_14.length !== 0) {
      local_10.current = arg;
      if (!(local_9 <= 0)) {
        window.scrollTo(0, local_9);
        requestAnimationFrame(() => window.scrollTo(0, local_9));
      }
    }
  }, [arg, local_14.length, local_9]);
  const local_44 = imported_37(() => {
    if (local_31 !== "posts" || !local_11?.pinnedPostId) {
      return local_14;
    }
    const local = local_14.find((arg) => arg.id === local_11.pinnedPostId);
    if (local) {
      return [
        local,
        ...local_14.filter((arg) => arg.id !== local_11.pinnedPostId),
      ];
    }
    return local_14;
  }, [local_14, local_11?.pinnedPostId, local_31]);
  const local_45 = imported_37(() => {
    if (!local_2) {
      return false;
    }
    if (local_17) {
      return true;
    }
    if (local_23 || local_20) {
      return false;
    }
    switch (local_11?.privacySettings?.whoCanPostOnWall) {
      case "everyone":
        return true;
      case "followers":
        return local_18;
      case "mutual":
        return local_18 && local_19;
      default:
        return false;
    }
  }, [
    local_2,
    local_17,
    local_23,
    local_20,
    local_11?.privacySettings?.whoCanPostOnWall,
    local_18,
    local_19,
  ]);
  const local_46 =
    local_17 ||
    local_11?.privacySettings?.whoCanSeeMyPostReactions === "everyone";
  const local_47 = imported_37(() => {
    const local = ["Посты"];
    if (local_46) {
      local.push("Лайки");
    }
    return local;
  }, [local_46]);
  const local_48 = imported_17(
    (arg) => {
      local_32(local_46 ? (arg === 0 ? "posts" : "likes") : "posts");
    },
    [local_32, local_46],
  );
  const local_49 = imported_28(null);
  imported_36(() => {
    const local = arg ?? "";
    const local_2 = local_49.current;
    local_49.current = {
      user: local,
      tab: local_31,
    };
    if (local_2 && local_2.user === local && local_2.tab !== local_31) {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, [local_31, arg]);
  if (local_12) {
    return null;
  }
  if (local_13 || !local_11) {
    const local = local_13 === "server";
    return imported(imported_39, {
      kind: local ? "server" : "notFound",
      title: local ? "Сервис недоступен" : "Профиль не найден",
      description: local
        ? "Не удалось получить профиль — сервер не ответил. Попробуйте обновить страницу позже."
        : "Пользователя с таким адресом нет. Возможно, профиль удалён или в ссылке опечатка.",
      action: imported(imported_3, {
        onClick: () => imported_38("../site/index.html"),
        children: "Вернуться на главную",
      }),
    });
  }
  return imported("div", {
    className: local_4c95c12d.page,
    children: [
      imported(fn_dd84a1c6, {
        profile: local_11,
        isOwnProfile: local_17,
        isFollowing: local_18,
        isRequested: local_21,
        isFollowLoading: local_22,
        isBlocked: local_23,
        isFollowedBy: local_19,
        isPhone: local,
        onEditProfile: local_39,
        onToggleFollow: local_38,
        onBlockUser: local_26,
        onFollowersClick: local_40,
        onFollowingClick: local_41,
        onBannerUpdate: local_34,
      }),
      imported("div", {
        className: local_4c95c12d.tabsWrapper,
        children: imported(imported_40, {
          tabs: local_47,
          activeIndex: local_31 === "posts" ? 0 : 1,
          onChange: local_48,
        }),
      }),
      imported("div", {
        className: local_4c95c12d.belowTabs,
        children: [
          local_45 &&
            imported(imported_13, {
              children: [
                imported("div", {
                  className: local_4c95c12d.createPostWrapper,
                  children: [
                    imported(imported_2, {
                      src: local_11.avatar ?? "",
                      alt: local_11.displayName,
                      size: "sm",
                    }),
                    imported(imported_41, {
                      onSubmit: local_42,
                      placeholder: local_17
                        ? "Что нового?"
                        : `Написать на стене ${local_11.displayName}`,
                    }),
                  ],
                }),
                imported(imported_3, {
                  variant: "secondary",
                  className: local_4c95c12d.writePostButton,
                  onClick: local_43,
                  children: "Написать на стене",
                }),
              ],
            }),
          local_23
            ? imported("div", {
                className: local_4c95c12d.emptyPosts,
                children: "Вы заблокировали этого пользователя",
              })
            : local_33
              ? imported("div", {
                  className: local_4c95c12d.emptyPosts,
                  children: local_33,
                })
              : local_44.length > 0
                ? imported(
                    imported_42,
                    {
                      posts: local_44,
                      renderPost: (arg, arg_2, arg_3) =>
                        imported(imported_43, {
                          post: arg,
                          isOnOwnProfile: local_17 && local_31 === "posts",
                          isPinned:
                            local_31 === "posts" &&
                            local_11?.pinnedPostId === arg.id,
                          isHighlighted: arg_3,
                          source: "profile",
                          sourceContext: local_11?.id ?? "",
                          onPin:
                            local_17 && local_31 === "posts"
                              ? local_28
                              : undefined,
                          onDelete: local_31 === "posts" ? local_30 : undefined,
                        }),
                      hasMore: !!local_16,
                      isLoadingMore: local_15,
                      onLoadMore: local_27,
                      initialMeasuredHeights: local_36,
                      onMeasuredHeightsChange: local_37,
                    },
                    local_35 ?? local_31,
                  )
                : local_15 && local_44.length === 0
                  ? imported(imported_44, {
                      count: 4,
                    })
                  : imported("div", {
                      className: local_4c95c12d.emptyPosts,
                      children:
                        local_31 === "posts" ? "Нет постов" : "Нет лайков",
                    }),
        ],
      }),
    ],
  });
};
