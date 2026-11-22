import {
  symbol_052 as imported,
  symbol_295 as imported_2,
  symbol_058 as imported_3,
  symbol_072 as imported_4,
  symbol_020 as imported_5,
  symbol_073 as imported_6,
  symbol_059 as imported_7,
  symbol_003 as imported_8,
  symbol_060 as imported_9,
  symbol_061 as imported_10,
  symbol_062 as imported_11,
  symbol_063 as imported_12,
  symbol_064 as imported_13,
  symbol_001 as imported_14,
  symbol_065 as imported_15,
  symbol_066 as imported_16,
  symbol_002 as imported_17,
  symbol_222 as imported_18,
  symbol_282 as imported_19,
  symbol_029 as imported_20,
  symbol_291 as imported_21,
  symbol_095 as imported_22,
  symbol_074 as imported_23,
} from "../entry-2.js";
import {
  symbol_001 as imported_24,
  symbol_002 as imported_25,
} from "../shared/chunk-1666d5f9c5d4.js";
import { I as imported_26 } from "../components/icon-check.js";
import "../shared/use-purchase-dialog.js";
import "../components/icon-info.js";
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
const local_1f2ab4d0 = "c_reminderTitle";
const local_0dbe8a71 = "c_reminderText";
const local_34365a93 = "c_titleRow";
const local_ae3e6ade = "c_unread";
const local_119f77f9 = "c_empty";
const local_dd77767a = "c_loadMore";
const local_f2bf345a = {
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
  reminderTitle: local_1f2ab4d0,
  reminderText: local_0dbe8a71,
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
const local_a4a37811 = {
  subscription_gift: {
    badgeColor: "purple",
    icon: imported_2("img", {
      src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
      alt: "",
      width: 18,
      height: 18,
      style: {
        objectFit: "contain",
      },
    }),
    getAction: () => "подарил вам подписку",
  },
  follow: {
    badgeColor: "blue",
    icon: imported_2(imported_9, {
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
    icon: imported_2(imported_9, {
      size: 12,
    }),
    getAction: () => "хочет подписаться на вас",
  },
  follow_accepted: {
    badgeColor: "green",
    icon: imported_2(imported_26, {
      size: 12,
    }),
    getAction: () => "принял(а) вашу заявку на подписку",
  },
  post_reaction: {
    badgeColor: "red",
    icon: imported_2(imported_12, {
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
    icon: imported_2(imported_11, {
      size: 12,
      filled: true,
    }),
    getAction: () => "прокомментировал(а) ваш пост",
  },
  post_repost: {
    badgeColor: "blue",
    icon: imported_2(imported_13, {
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
    icon: imported_2(imported_12, {
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
    icon: imported_2(imported_11, {
      size: 12,
      filled: true,
    }),
    getAction: () => "ответил(а) на ваш комментарий",
  },
  post_mention: {
    badgeColor: "purple",
    icon: imported_2(imported_24, {
      size: 12,
    }),
    getAction: () => "упомянул(а) вас в посте",
  },
  comment_mention: {
    badgeColor: "purple",
    icon: imported_2(imported_24, {
      size: 12,
    }),
    getAction: () => "упомянул(а) вас в комментарии",
  },
  wall_post: {
    badgeColor: "blue",
    icon: imported_2(imported_10, {
      size: 12,
    }),
    getAction: () => "написал(а) на вашей стене",
  },
};
const local_f18caa66 = ({ type: arg }) => {
  const local = local_a4a37811[arg];
  const local_2 =
    local?.badgeColor === "red"
      ? local_f2bf345a.red
      : local?.badgeColor === "green"
        ? local_f2bf345a.green
        : local?.badgeColor === "purple"
          ? local_f2bf345a.purple
          : local_f2bf345a.blue;
  return imported_2("div", {
    className: `${local_f2bf345a.badge} ${local_2}`,
    children:
      local?.icon ||
      imported_2(imported_11, {
        size: 12,
      }),
  });
};
function fn_d0cf9f9d({
  notification: arg,
  isVisuallyUnread: arg_2,
  onMarkRead: arg_3,
  followStatus: arg_4,
  onFollowToggle: arg_5,
  isFollowLoading: arg_6,
}) {
  const { openModal: local, closeModal: local_2 } = imported();
  const local_3 = local_a4a37811[arg.type];
  const local_4 = arg.payload.actors[0];
  const local_5 = arg.payload.count;
  const local_6 = arg.type === "alice_task_reminder";
  const local_7 = () => {
    arg_3(arg.id);
    const {
      type: local,
      entityId: local_2,
      parentEntityId: local_3,
      payload: local_4,
    } = arg;
    if (local === "subscription_gift") {
      local(
        imported_2(imported_25, {
          isOpen: true,
          onClose: () => local_2(),
        }),
      );
      return;
    }
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
      local_4?.username &&
      (local_6.includes(local)
        ? local === "post_comment" && local_3
          ? (local_5 = `/@${local_4.username}/post/${local_3}?comment=${local_2}`)
          : (local_5 = `/@${local_4.username}/post/${local_2}`)
        : local_7.includes(local) &&
          (local_3
            ? (local_5 = `/@${local_4.username}/post/${local_3}?comment=${local_2}`)
            : (local_5 = `/@${local_4.username}/post/${local_2}`)));
    if (
      !local_5 &&
      local_4?.username &&
      ["follow", "follow_request", "follow_accepted"].includes(local)
    ) {
      local_5 = `/@${local_4.username}`;
    }
    if (local_5) {
      imported_14(local_5);
    }
  };
  const local_8 = arg.type === "follow" || arg.type === "follow_request";
  const local_9 = arg_6
    ? "loading"
    : arg_4
      ? arg_4.isFollowing
        ? "following"
        : arg_4.hasOutgoingRequest
          ? "requested"
          : "none"
      : "none";
  const local_10 = () => {
    switch (local_9) {
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
  const local_11 = () => {
    if (local_9 === "following" || local_9 === "requested") {
      return "secondary";
    }
    return "primary";
  };
  const local_12 = (arg) => {
    arg.stopPropagation();
    if (local_4?.id && !arg_6) {
      arg_5(local_4.id);
    }
  };
  const local_13 = (arg) => {
    arg.stopPropagation();
    arg.preventDefault();
    arg_3(arg.id);
    if (local_4?.username) {
      imported_14(`/@${local_4.username}`);
    }
  };
  return imported_2("div", {
    className: `${local_f2bf345a.item} ${arg_2 ? local_f2bf345a.unread : ""}`,
    onClick: local_7,
    role: "button",
    tabIndex: 0,
    onKeyDown: (arg) => {
      if (
        (local_6 || arg.type === "subscription_gift") &&
        (arg.key === "Enter" || arg.key === "./notifications.js")
      ) {
        arg.preventDefault();
        local_7();
      }
    },
    children: [
      imported_2("div", {
        className: local_f2bf345a.content,
        children: [
          local_6
            ? imported_2(imported_3, {})
            : imported_2("a", {
                href: local_4?.username ? `/@${local_4.username}` : "#",
                className: local_f2bf345a.avatarLink,
                onClick: local_13,
                title: "Перейти в профиль",
                children: imported_2(imported_4, {
                  src: local_4?.avatar || "",
                  alt: local_4?.displayName || "User",
                  size: "md",
                  halloween: local_4?.halloween,
                  badge: imported_2(local_f18caa66, {
                    type: arg.type,
                  }),
                }),
              }),
          imported_2("div", {
            className: local_f2bf345a.info,
            children: [
              imported_2("div", {
                className: local_f2bf345a.header,
                children: local_6
                  ? imported_2("span", {
                      className: local_f2bf345a.reminderTitle,
                      children: arg.payload.title,
                    })
                  : imported_2(imported_5, {
                      children: [
                        imported_2("a", {
                          href: local_4?.username
                            ? `/@${local_4.username}`
                            : "#",
                          className: local_f2bf345a.actorLink,
                          onClick: local_13,
                          title: "Перейти в профиль",
                          children: imported_2(imported_6, {
                            userId: local_4?.id,
                            halloween: local_4?.halloween,
                            name:
                              arg.type === "subscription_gift"
                                ? imported_7(local_4)
                                : local_4?.displayName || "Пользователь",
                            verified:
                              local_4?.isVerified ?? local_4?.verified ?? false,
                            pin: local_4?.pin,
                            size: "sm",
                            className: local_f2bf345a.name,
                          }),
                        }),
                        imported_2("span", {
                          className: local_f2bf345a.action,
                          children:
                            local_3?.getAction(local_5) || "уведомление",
                        }),
                      ],
                    }),
              }),
              arg.payload.entityPreview &&
                imported_2("p", {
                  className: `${local_f2bf345a.text} ${local_6 ? local_f2bf345a.reminderText : ""}`,
                  children: arg.payload.entityPreview,
                }),
              imported_2("span", {
                className: local_f2bf345a.date,
                children: fn_8998240c(arg.createdAt),
              }),
            ],
          }),
        ],
      }),
      local_8 &&
        local_4?.id &&
        imported_2(imported_8, {
          variant: local_11(),
          size: "md",
          className: local_f2bf345a.btn,
          onClick: local_12,
          disabled: arg_6,
          children: [
            local_9 === "none" &&
              imported_2(imported_9, {
                size: 18,
              }),
            local_10(),
          ],
        }),
    ],
  });
}
export const local_8242fbd6 = (arg) => {
  const {
    notifications: local,
    status: local_2,
    nextCursor: local_3,
    fetchNotifications: local_4,
    markAllAsRead: local_5,
  } = imported_15();
  const local_6 = imported_16();
  const local_7 = imported_17(null);
  const [local_8, local_9] = imported_18(new Set());
  const [local_10, local_11] = imported_18(new Map());
  const [local_12, local_13] = imported_18(new Set());
  imported_19(() => {
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
  imported_19(() => {
    local_4(true).then(() => {
      const local = imported_15
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
  imported_19(() => {
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
  imported_20({
    sentinelRef: local_7,
    hasMore: !!local_3,
    isLoading: local_2 === "loading",
    onLoadMore: local_4,
  });
  const local_14 = imported_21((arg) => {
    local_9((arg) => {
      const local = new Set(arg);
      local.delete(arg);
      return local;
    });
  }, []);
  const local_15 = imported_21(() => {
    local_9(new Set());
    local_5();
  }, [local_5]);
  const local_16 = imported_21(
    async (arg) => {
      if (!local_12.has(arg)) {
        local_13((arg) => new Set(arg).add(arg));
        try {
          const local = local_10.get(arg);
          if (local?.isFollowing || local?.hasOutgoingRequest) {
            await imported_22.unfollowUser(arg);
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
            const local = await imported_22.followUser(arg);
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
  return imported_2("div", {
    className: `${local_f2bf345a.page} ym-hide-content`,
    children: [
      imported_2("div", {
        className: local_f2bf345a.titleRow,
        children: [
          imported_2("h1", {
            className: local_f2bf345a.pageTitle,
            children: "Уведомления",
          }),
          local_6 > 0 &&
            imported_2(imported_8, {
              variant: "ghost",
              size: "sm",
              onClick: local_15,
              children: "Прочитать все",
            }),
        ],
      }),
      local_18
        ? imported_2("div", {
            className: local_f2bf345a.empty,
            children: imported_2("p", {
              children: "Нет уведомлений",
            }),
          })
        : imported_2("div", {
            className: local_f2bf345a.list,
            children: [
              local.map((arg) => {
                const local = arg.payload.actors[0]?.id;
                return imported_2(
                  fn_d0cf9f9d,
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
                imported_2("div", {
                  ref: local_7,
                  className: local_f2bf345a.loadMore,
                  children:
                    local_17 &&
                    imported_2(imported_23, {
                      size: "sm",
                    }),
                }),
            ],
          }),
    ],
  });
};
