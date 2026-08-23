import {
  symbol_073 as imported,
  symbol_058 as imported_2,
  symbol_022 as imported_3,
  symbol_003 as imported_4,
  symbol_065 as imported_5,
  symbol_026 as imported_6,
  symbol_027 as imported_7,
  symbol_030 as imported_8,
  symbol_031 as imported_9,
  symbol_057 as imported_10,
  a2 as imported_11,
  a3 as imported_12,
  symbol_002 as imported_13,
  symbol_056 as imported_14,
  symbol_077 as imported_15,
  a4 as imported_16,
  symbol_069 as imported_17,
  symbol_004 as imported_18,
  a5 as imported_19,
} from "../entry.js";
import { I as imported_20 } from "../components/icon-notification-mention.js";
import { I as imported_21 } from "../components/icon-check.js";
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
const local_ef251bc6 = "c_page";
const local_b79c6e36 = "c_pageTitle";
const local_e9ccbd22 = "c_list";
const local_4474a6b6 = "c_item";
const local_ec362e2b = "c_btn";
const local_4d84dbb6 = "c_content";
const local_111bfc92 = "c_badge";
const local_6ffa3df6 = "c_red";
const local_d4ea5c9b = "c_green";
const local_153f84c8 = "c_blue";
const local_97226d80 = "c_purple";
const local_ad66ff17 = "c_avatarLink";
const local_4d1d1199 = "c_info";
const local_f1c23efb = "c_header";
const local_7d1a81a9 = "c_actorLink";
const local_8d0c49b2 = "c_name";
const local_406cc78f = "c_action";
const local_95ed4c70 = "c_text";
const local_ceae4223 = "c_date";
const local_34365a93 = "c_titleRow";
const local_ae3e6ade = "c_unread";
const local_119f77f9 = "c_empty";
const local_dd77767a = "c_loadMore";
const local_2ba33e70 = {
  page: local_ef251bc6,
  pageTitle: local_b79c6e36,
  list: local_e9ccbd22,
  item: local_4474a6b6,
  btn: local_ec362e2b,
  content: local_4d84dbb6,
  badge: local_111bfc92,
  red: local_6ffa3df6,
  green: local_d4ea5c9b,
  blue: local_153f84c8,
  purple: local_97226d80,
  avatarLink: local_ad66ff17,
  info: local_4d1d1199,
  header: local_f1c23efb,
  actorLink: local_7d1a81a9,
  name: local_8d0c49b2,
  action: local_406cc78f,
  text: local_95ed4c70,
  date: local_ceae4223,
  titleRow: local_34365a93,
  unread: local_ae3e6ade,
  empty: local_119f77f9,
  loadMore: local_dd77767a,
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
const local_48901e53 = {
  follow: {
    badgeColor: "blue",
    icon: imported(imported_5, {
      size: 12,
    }),
    getAction: (arg) => {
      if (arg > 1) {
        return `и ещё ${arg - 1} человек подписались на вас`;
      }
      return "подписался(-ась) на вас";
    },
  },
  follow_request: {
    badgeColor: "blue",
    icon: imported(imported_5, {
      size: 12,
    }),
    getAction: () => "хочет подписаться на вас",
  },
  follow_accepted: {
    badgeColor: "green",
    icon: imported(imported_21, {
      size: 12,
    }),
    getAction: () => "принял(а) вашу заявку на подписку",
  },
  post_reaction: {
    badgeColor: "red",
    icon: imported(imported_8, {
      size: 12,
      filled: true,
    }),
    getAction: (arg) => {
      if (arg > 1) {
        return `и ещё ${arg - 1} человек оценили ваш пост`;
      }
      return "оценил(а) ваш пост";
    },
  },
  post_comment: {
    badgeColor: "green",
    icon: imported(imported_7, {
      size: 12,
      filled: true,
    }),
    getAction: () => "прокомментировал(а) ваш пост",
  },
  post_repost: {
    badgeColor: "blue",
    icon: imported(imported_9, {
      size: 12,
    }),
    getAction: (arg) => {
      if (arg > 1) {
        return `и ещё ${arg - 1} человек сделали репост`;
      }
      return "сделал(а) репост вашего поста";
    },
  },
  comment_reaction: {
    badgeColor: "red",
    icon: imported(imported_8, {
      size: 12,
      filled: true,
    }),
    getAction: (arg) => {
      if (arg > 1) {
        return `и ещё ${arg - 1} человек оценили ваш комментарий`;
      }
      return "оценил(а) ваш комментарий";
    },
  },
  comment_reply: {
    badgeColor: "green",
    icon: imported(imported_7, {
      size: 12,
      filled: true,
    }),
    getAction: () => "ответил(а) на ваш комментарий",
  },
  post_mention: {
    badgeColor: "purple",
    icon: imported(imported_20, {
      size: 12,
    }),
    getAction: () => "упомянул(а) вас в посте",
  },
  comment_mention: {
    badgeColor: "purple",
    icon: imported(imported_20, {
      size: 12,
    }),
    getAction: () => "упомянул(а) вас в комментарии",
  },
  wall_post: {
    badgeColor: "blue",
    icon: imported(imported_6, {
      size: 12,
    }),
    getAction: () => "написал(а) на вашей стене",
  },
};
const local_5adaadb3 = ({ type: arg }) => {
  const local = local_48901e53[arg];
  const local_2 =
    local?.badgeColor === "red"
      ? local_2ba33e70.red
      : local?.badgeColor === "green"
        ? local_2ba33e70.green
        : local?.badgeColor === "purple"
          ? local_2ba33e70.purple
          : local_2ba33e70.blue;
  return imported("div", {
    className: `${local_2ba33e70.badge} ${local_2}`,
    children:
      local?.icon ||
      imported(imported_7, {
        size: 12,
      }),
  });
};
function fn_d63a129b({
  notification: arg,
  isVisuallyUnread: arg_2,
  onMarkRead: arg_3,
  followStatus: arg_4,
  onFollowToggle: arg_5,
  isFollowLoading: arg_6,
}) {
  const local = local_48901e53[arg.type];
  const local_2 = arg.payload.actors[0];
  const local_3 = arg.payload.count;
  const local_4 = () => {
    arg_3(arg.id);
    const {
      type: local,
      entityId: local_2,
      parentEntityId: local_3,
      payload: local_4,
    } = arg;
    let local_5 = local_4.clickUrl;
    const local_6 = [
      "post_reaction",
      "post_comment",
      "post_repost",
      "post_mention",
      "wall_post",
    ];
    const local_7 = ["comment_reaction", "comment_reply", "comment_mention"];
    local_2 &&
      local_2?.username &&
      (local_6.includes(local)
        ? local === "post_comment" && local_3
          ? (local_5 = `/@${local_2.username}/post/${local_3}?comment=${local_2}`)
          : (local_5 = `/@${local_2.username}/post/${local_2}`)
        : local_7.includes(local) &&
          (local_3
            ? (local_5 = `/@${local_2.username}/post/${local_3}?comment=${local_2}`)
            : (local_5 = `/@${local_2.username}/post/${local_2}`)));
    if (
      !local_5 &&
      local_2?.username &&
      ["follow", "follow_request", "follow_accepted"].includes(local)
    ) {
      local_5 = `/@${local_2.username}`;
    }
    if (local_5) {
      imported_10(local_5);
    }
  };
  const local_5 = arg.type === "follow" || arg.type === "follow_request";
  const local_6 = arg_6
    ? "loading"
    : arg_4
      ? arg_4.isFollowing
        ? "following"
        : arg_4.hasOutgoingRequest
          ? "requested"
          : "none"
      : "none";
  const local_7 = () => {
    switch (local_6) {
      case "loading":
        return "Загрузка...";
      case "following":
        return "Отписаться";
      case "requested":
        return "Отменить";
      default:
        if (arg_4?.isFollowedBy) {
          return "Подписаться в ответ";
        }
        return "Подписаться";
    }
  };
  const local_8 = () => {
    if (local_6 === "following" || local_6 === "requested") {
      return "secondary";
    }
    return "primary";
  };
  const local_9 = (arg) => {
    arg.stopPropagation();
    if (local_2?.id && !arg_6) {
      arg_5(local_2.id);
    }
  };
  const local_10 = (arg) => {
    arg.stopPropagation();
    arg.preventDefault();
    arg_3(arg.id);
    if (local_2?.username) {
      imported_10(`/@${local_2.username}`);
    }
  };
  return imported("div", {
    className: `${local_2ba33e70.item} ${arg_2 ? local_2ba33e70.unread : ""}`,
    onClick: local_4,
    role: "button",
    tabIndex: 0,
    children: [
      imported("div", {
        className: local_2ba33e70.content,
        children: [
          imported("a", {
            href: local_2?.username ? `/@${local_2.username}` : "#",
            className: local_2ba33e70.avatarLink,
            onClick: local_10,
            title: "Перейти в профиль",
            children: imported(imported_2, {
              src: local_2?.avatar || "",
              alt: local_2?.displayName || "User",
              size: "md",
              badge: imported(local_5adaadb3, {
                type: arg.type,
              }),
            }),
          }),
          imported("div", {
            className: local_2ba33e70.info,
            children: [
              imported("div", {
                className: local_2ba33e70.header,
                children: [
                  imported("a", {
                    href: local_2?.username ? `/@${local_2.username}` : "#",
                    className: local_2ba33e70.actorLink,
                    onClick: local_10,
                    title: "Перейти в профиль",
                    children: imported(imported_3, {
                      name: local_2?.displayName || "Пользователь",
                      verified:
                        local_2?.isVerified ?? local_2?.verified ?? false,
                      pin: local_2?.pin,
                      size: "sm",
                      className: local_2ba33e70.name,
                    }),
                  }),
                  imported("span", {
                    className: local_2ba33e70.action,
                    children: local?.getAction(local_3) || "уведомление",
                  }),
                ],
              }),
              arg.payload.entityPreview &&
                imported("p", {
                  className: local_2ba33e70.text,
                  children: arg.payload.entityPreview,
                }),
              imported("span", {
                className: local_2ba33e70.date,
                children: fn_8998240c(arg.createdAt),
              }),
            ],
          }),
        ],
      }),
      local_5 &&
        local_2?.id &&
        imported(imported_4, {
          variant: local_8(),
          size: "md",
          className: local_2ba33e70.btn,
          onClick: local_9,
          disabled: arg_6,
          children: [
            local_6 === "none" &&
              imported(imported_5, {
                size: 18,
              }),
            local_7(),
          ],
        }),
    ],
  });
}
export const local_58a6e47b = (arg) => {
  const {
    notifications: local,
    status: local_2,
    nextCursor: local_3,
    fetchNotifications: local_4,
    markAllAsRead: local_5,
  } = imported_11();
  const local_6 = imported_12();
  const local_7 = imported_13(null);
  const [local_8, local_9] = imported_14(new Set());
  const [local_10, local_11] = imported_14(new Map());
  const [local_12, local_13] = imported_14(new Set());
  imported_15(() => {
    const local = new Set();
    for (const local of local) {
      if (!local.isRead) {
        local.add(local.id);
      }
    }
    local_9((arg) => {
      const local = new Set(arg);
      for (const local of local) {
        local.add(local);
      }
      return local;
    });
  }, [local]);
  imported_15(() => {
    local_4(true).then(() => {
      const local = imported_11
        .getState()
        .notifications.filter((arg) => !arg.isRead)
        .map((arg) => arg.id);
      if (local.length > 0) {
        local_9((arg) => {
          const local = new Set(arg);
          for (const local of local) {
            local.add(local);
          }
          return local;
        });
      }
      local_5();
    });
  }, [local_4, local_5]);
  imported_15(() => {
    const local = ["follow", "follow_request"];
    const local_2 = [];
    for (const local of local) {
      if (!local.includes(local.type)) {
        continue;
      }
      const local = local.payload.actors[0];
      if (!(!local?.id || local_10.has(local.id))) {
        local_2.push([
          local.id,
          {
            isFollowing: local.isFollowing ?? false,
            isFollowedBy: local.isFollowedBy ?? true,
            hasOutgoingRequest: false,
            hasIncomingRequest: false,
            isBlocking: false,
            isBlockedBy: false,
          },
        ]);
      }
    }
    if (local_2.length > 0) {
      local_11((arg) => {
        const local = new Map(arg);
        for (const [local, local_2] of local_2) {
          local.set(local, local_2);
        }
        return local;
      });
    }
  }, [local]);
  imported_16({
    sentinelRef: local_7,
    hasMore: !!local_3,
    isLoading: local_2 === "loading",
    onLoadMore: local_4,
  });
  const local_14 = imported_17((arg) => {
    local_9((arg) => {
      const local = new Set(arg);
      local.delete(arg);
      return local;
    });
  }, []);
  const local_15 = imported_17(() => {
    local_9(new Set());
    local_5();
  }, [local_5]);
  const local_16 = imported_17(
    async (arg) => {
      if (!local_12.has(arg)) {
        local_13((arg) => new Set(arg).add(arg));
        try {
          const local = local_10.get(arg);
          if (local?.isFollowing || local?.hasOutgoingRequest) {
            await imported_18.unfollowUser(arg);
            local_11((arg) => {
              const local = new Map(arg);
              const local_2 = local.get(arg);
              if (local_2) {
                local.set(arg, {
                  ...local_2,
                  isFollowing: false,
                  hasOutgoingRequest: false,
                });
              }
              return local;
            });
          } else {
            const local = await imported_18.followUser(arg);
            local_11((arg) => {
              const local = new Map(arg);
              const local_2 = local.get(arg);
              if (local_2) {
                local.set(arg, {
                  ...local_2,
                  isFollowing: local === "following",
                  hasOutgoingRequest: local === "requested",
                });
              } else {
                local.set(arg, {
                  isFollowing: local === "following",
                  isFollowedBy: true,
                  hasOutgoingRequest: local === "requested",
                  hasIncomingRequest: false,
                  isBlocking: false,
                  isBlockedBy: false,
                });
              }
              return local;
            });
          }
        } catch (error) {
          if (
            error?.status === 409 ||
            error?.code === "CONFLICT" ||
            error?.message?.includes("Already following")
          ) {
            local_11((arg) => {
              const local = new Map(arg);
              const local_2 = local.get(arg);
              local.set(arg, {
                ...(local_2 ?? {
                  isFollowedBy: true,
                  hasIncomingRequest: false,
                  isBlocking: false,
                  isBlockedBy: false,
                }),
                isFollowing: true,
                hasOutgoingRequest: false,
              });
              return local;
            });
          } else {
            console.error("Failed to toggle follow:", error);
          }
        } finally {
          local_13((arg) => {
            const local = new Set(arg);
            local.delete(arg);
            return local;
          });
        }
      }
    },
    [local_10, local_12],
  );
  const local_17 = local_2 === "loading";
  const local_18 = local.length === 0 && !local_17;
  return imported("div", {
    className: `${local_2ba33e70.page} ym-hide-content`,
    children: [
      imported("div", {
        className: local_2ba33e70.titleRow,
        children: [
          imported("h1", {
            className: local_2ba33e70.pageTitle,
            children: "Уведомления",
          }),
          local_6 > 0 &&
            imported(imported_4, {
              variant: "ghost",
              size: "sm",
              onClick: local_15,
              children: "Прочитать все",
            }),
        ],
      }),
      local_18
        ? imported("div", {
            className: local_2ba33e70.empty,
            children: imported("p", {
              children: "Нет уведомлений",
            }),
          })
        : imported("div", {
            className: local_2ba33e70.list,
            children: [
              local.map((arg) => {
                const local = arg.payload.actors[0]?.id;
                return imported(
                  fn_d63a129b,
                  {
                    notification: arg,
                    isVisuallyUnread: local_8.has(arg.id),
                    onMarkRead: local_14,
                    followStatus: local ? (local_10.get(local) ?? null) : null,
                    onFollowToggle: local_16,
                    isFollowLoading: local ? local_12.has(local) : false,
                  },
                  arg.id,
                );
              }),
              local_3 &&
                imported("div", {
                  ref: local_7,
                  className: local_2ba33e70.loadMore,
                  children:
                    local_17 &&
                    imported(imported_19, {
                      size: "sm",
                    }),
                }),
            ],
          }),
    ],
  });
};
