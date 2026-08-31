import {
  symbol_002 as imported,
  symbol_054 as imported_2,
  symbol_067 as imported_3,
  symbol_075 as socialApi,
  symbol_058 as imported_4,
  a4 as imported_5,
  symbol_064 as imported_6,
  symbol_073 as imported_7,
  symbol_055 as imported_8,
  symbol_071 as imported_9,
  a5 as imported_10,
  symbol_056 as imported_11,
  symbol_022 as imported_12,
  symbol_003 as imported_13,
  symbol_048 as imported_14,
  symbol_014 as imported_15,
  symbol_007 as UnfollowConfirmModal,
  symbol_065 as profileApi,
  aB as useFollowStatus,
  symbol_032 as useFollowStatusStore,
  aD as useFollowUser,
} from "../entry.js";
import { I as imported_16 } from "../components/icon-check.js";
import { VerificationModal } from "./chunk-1f9577716691.js";
import "../components/icon-check-circle.js";
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
export function fn_66c2d60a(arg, arg_2) {
  const local = imported(null);
  const local_2 = `${arg || "me"}-${arg_2}`;
  const [local_3, local_4] = imported_2([]);
  const [local_5, local_6] = imported_2(true);
  const [local_7, local_8] = imported_2(false);
  const [local_9, local_10] = imported_2(null);
  const [UnfollowConfirmModal, local_11] = imported_2(new Map());
  const [local_12, local_13] = imported_2(new Set());
  const local_14 = imported(null);
  if (local.current !== local_2) {
    local.current = local_2;
    local_4([]);
    local_6(true);
    local_10(null);
    local_11(new Map());
    local_13(new Set());
  }
  const local_15 = imported_3(
    async (arg) => {
      const local = !arg;
      if (local) {
        local_6(true);
      } else {
        local_8(true);
      }
      try {
        let local;
        switch (arg_2) {
          case "followers":
            if (!arg) {
              throw new Error("userId required for followers");
            }
            local = await socialApi.getFollowers(arg, {
              limit: 20,
              cursor: arg,
            });
            break;
          case "following":
            if (!arg) {
              throw new Error("userId required for following");
            }
            local = await socialApi.getFollowing(arg, {
              limit: 20,
              cursor: arg,
            });
            break;
          case "pending-incoming":
          case "pending-outgoing":
            local = {
              data: [],
              nextCursor: null,
            };
            break;
        }
        const local_2 = (arg) => {
          const local = new Map();
          for (const profileApi of arg) {
            if (profileApi.interaction.isFollowing) {
              local.set(profileApi.userId, "following");
            } else if (profileApi.interaction.hasOutgoingRequest) {
              local.set(profileApi.userId, "requested");
            } else {
              local.set(profileApi.userId, null);
            }
          }
          return local;
        };
        if (local) {
          local_4(local.data);
          local_11(local_2(local.data));
        } else {
          local_4((arg) => {
            const local = new Set(arg.map((profileApi) => profileApi.userId));
            return [
              ...arg,
              ...local.data.filter(
                (profileApi) => !local.has(profileApi.userId),
              ),
            ];
          });
          local_11((arg) => {
            const local = new Map(arg);
            for (const profileApi of local.data) {
              local.has(profileApi.userId) ||
                (profileApi.interaction.isFollowing
                  ? local.set(profileApi.userId, "following")
                  : profileApi.interaction.hasOutgoingRequest
                    ? local.set(profileApi.userId, "requested")
                    : local.set(profileApi.userId, null));
            }
            return local;
          });
        }
        local_10(local.nextCursor);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        local_6(false);
        local_8(false);
      }
    },
    [arg, arg_2],
  );
  imported_4(() => {
    local_15();
  }, [local_15]);
  const local_16 = imported_3(() => {
    if (local_9) {
      local_15(local_9);
    }
  }, [local_9, local_15]);
  imported_5({
    sentinelRef: local_14,
    hasMore: !!local_9,
    isLoading: local_7,
    onLoadMore: local_16,
  });
  const local_17 = imported_3(
    async (arg, arg_2) => {
      arg_2.stopPropagation();
      if (!local_12.has(arg)) {
        local_13((arg) => new Set(arg).add(arg));
        try {
          const local = UnfollowConfirmModal.get(arg);
          if (local === "following" || local === "requested") {
            await socialApi.unfollowUser(arg);
            local_11((arg) => {
              const local = new Map(arg);
              local.set(arg, null);
              return local;
            });
          } else {
            const local = await socialApi.followUser(arg);
            local_11((arg) => {
              const local = new Map(arg);
              local.set(arg, local);
              return local;
            });
          }
        } catch (error) {
          console.error("Failed to toggle follow:", error);
        } finally {
          local_13((arg) => {
            const local = new Set(arg);
            local.delete(arg);
            return local;
          });
        }
      }
    },
    [UnfollowConfirmModal, local_12],
  );
  return {
    users: local_3,
    isLoading: local_5,
    isLoadingMore: local_7,
    nextCursor: local_9,
    loadMoreRef: local_14,
    userFollowStatus: UnfollowConfirmModal,
    loadingFollowIds: local_12,
    handleToggleFollow: local_17,
  };
}
const local_dd2b2953 = "c_userListModal";
const local_4d84dbb6 = "c_content";
const local_8ee99bdf = "c_userList";
const local_9dd6dc5c = "c_userItem";
const local_bdea34cf = "c_clickable";
const local_d5e52f71 = "c_userInfo";
const local_690688a6 = "c_displayName";
const local_7585620f = "c_username";
const local_9eb5f296 = "c_followButton";
const local_0d0bff9e = "c_actionButtons";
const local_38ae5b95 = "c_acceptButton";
const local_006fd607 = "c_rejectButton";
const local_9baa0685 = "c_actionStatus";
const local_119f77f9 = "c_empty";
const local_ef501043 = "c_loadMoreSentinel";
const local_e1f3b173 = {
  userListModal: local_dd2b2953,
  content: local_4d84dbb6,
  userList: local_8ee99bdf,
  userItem: local_9dd6dc5c,
  clickable: local_bdea34cf,
  userInfo: local_d5e52f71,
  displayName: local_690688a6,
  username: local_7585620f,
  followButton: local_9eb5f296,
  actionButtons: local_0d0bff9e,
  acceptButton: local_38ae5b95,
  rejectButton: local_006fd607,
  actionStatus: local_9baa0685,
  empty: local_119f77f9,
  loadMoreSentinel: local_ef501043,
};
export function fn_7d27fe5a({
  userId: arg,
  type: arg_2,
  title: arg_3,
  onCountChange: arg_4,
}) {
  const { closeModal: local } = imported_6();
  const local_2 = imported_7((arg) => arg.profile?.id);
  const {
    users: local_3,
    isLoading: local_4,
    isLoadingMore: local_5,
    nextCursor: local_6,
    loadMoreRef: local_7,
    userFollowStatus: local_8,
    loadingFollowIds: local_9,
    handleToggleFollow: local_10,
  } = fn_66c2d60a(arg, arg_2);
  const [local_11, local_12] = imported_2(new Map());
  const [local_13, local_14] = imported_2(new Set());
  const local_15 = arg_2 === "pending-incoming";
  const local_16 = arg_2 === "pending-outgoing";
  const local_17 = imported_3(
    (arg) => {
      if (arg) {
        local();
        imported_8(`/@${arg}`);
      }
    },
    [local],
  );
  const local_18 = imported_3(
    async (arg, profileApi) => {
      profileApi.stopPropagation();
      if (!local_13.has(arg)) {
        console.warn("acceptFollowRequest not implemented in old backend");
      }
    },
    [local_13],
  );
  const local_19 = imported_3(
    async (arg, profileApi) => {
      profileApi.stopPropagation();
      if (!local_13.has(arg)) {
        console.warn("removeFollower not implemented in old backend");
      }
    },
    [local_13],
  );
  const local_20 = imported_3(
    async (arg, profileApi) => {
      profileApi.stopPropagation();
      if (!local_13.has(arg)) {
        local_14((arg) => new Set(arg).add(arg));
        try {
          await socialApi.unfollowUser(arg);
          local_12((arg) => {
            const local = new Map(arg);
            local.set(arg, "rejected");
            return local;
          });
        } catch (error) {
          console.error("Failed to cancel follow request:", error);
        } finally {
          local_14((arg) => {
            const local = new Set(arg);
            local.delete(arg);
            return local;
          });
        }
      }
    },
    [local_13],
  );
  const local_21 = () => {
    switch (arg_2) {
      case "followers":
        return "Нет подписчиков";
      case "following":
        return "Нет подписок";
      case "pending-incoming":
        return "Нет заявок";
      case "pending-outgoing":
        return "Нет исходящих заявок";
    }
  };
  return imported_9(imported_15, {
    onClose: local,
    title: arg_3,
    className: local_e1f3b173.userListModal,
    children: imported_9("div", {
      className: local_e1f3b173.content,
      children: local_4
        ? imported_9(imported_10, {})
        : local_3.length === 0
          ? imported_9("div", {
              className: local_e1f3b173.empty,
              children: local_21(),
            })
          : imported_9("div", {
              className: local_e1f3b173.userList,
              children: [
                local_3.map((arg) => {
                  const profileApi = local_8.get(arg.userId);
                  const local = profileApi === "following";
                  const local_2 = profileApi === "requested";
                  const local_3 = local_9.has(arg.userId);
                  const local_4 = arg.userId === local_2;
                  const local_5 = local_11.get(arg.userId);
                  const local_6 = local_13.has(arg.userId);
                  const local_7 = () => {
                    if (local) {
                      return "Отписаться";
                    }
                    if (local_2) {
                      return "Отменить";
                    }
                    return "Подписаться";
                  };
                  if (local_15) {
                    return imported_9(
                      "div",
                      {
                        className: `${local_e1f3b173.userItem} ${arg.username ? local_e1f3b173.clickable : ""}`,
                        onClick: () => local_17(arg.username),
                        children: [
                          imported_9(imported_11, {
                            src: arg.avatar,
                            size: "md",
                          }),
                          imported_9("div", {
                            className: local_e1f3b173.userInfo,
                            children: [
                              imported_9(imported_12, {
                                name: arg.displayName,
                                verified: arg.isVerified,
                                pin: arg.pin,
                                size: "md",
                                className: local_e1f3b173.displayName,
                              }),
                              arg.username &&
                                imported_9("span", {
                                  className: local_e1f3b173.username,
                                  children: ["@", arg.username],
                                }),
                            ],
                          }),
                          local_5 === "accepted"
                            ? imported_9("span", {
                                className: local_e1f3b173.actionStatus,
                                children: "Принято",
                              })
                            : local_5 === "rejected"
                              ? imported_9("span", {
                                  className: local_e1f3b173.actionStatus,
                                  children: "Отклонено",
                                })
                              : imported_9("div", {
                                  className: local_e1f3b173.actionButtons,
                                  children: [
                                    imported_9(imported_13, {
                                      size: "sm",
                                      variant: "primary",
                                      disabled: local_6,
                                      onClick: (arg) =>
                                        local_18(arg.userId, arg),
                                      className: local_e1f3b173.acceptButton,
                                      children: imported_9(imported_16, {
                                        size: 16,
                                      }),
                                    }),
                                    imported_9(imported_13, {
                                      size: "sm",
                                      variant: "secondary",
                                      disabled: local_6,
                                      onClick: (arg) =>
                                        local_19(arg.userId, arg),
                                      className: local_e1f3b173.rejectButton,
                                      children: imported_9(imported_14, {
                                        size: 16,
                                      }),
                                    }),
                                  ],
                                }),
                        ],
                      },
                      arg.userId,
                    );
                  }
                  if (local_16) {
                    return imported_9(
                      "div",
                      {
                        className: `${local_e1f3b173.userItem} ${arg.username ? local_e1f3b173.clickable : ""}`,
                        onClick: () => local_17(arg.username),
                        children: [
                          imported_9(imported_11, {
                            src: arg.avatar,
                            size: "md",
                          }),
                          imported_9("div", {
                            className: local_e1f3b173.userInfo,
                            children: [
                              imported_9(imported_12, {
                                name: arg.displayName,
                                verified: arg.isVerified,
                                pin: arg.pin,
                                size: "md",
                                className: local_e1f3b173.displayName,
                              }),
                              arg.username &&
                                imported_9("span", {
                                  className: local_e1f3b173.username,
                                  children: ["@", arg.username],
                                }),
                            ],
                          }),
                          local_5 === "rejected"
                            ? imported_9("span", {
                                className: local_e1f3b173.actionStatus,
                                children: "Отменено",
                              })
                            : imported_9(imported_13, {
                                size: "sm",
                                variant: "secondary",
                                disabled: local_6,
                                onClick: (arg) => local_20(arg.userId, arg),
                                className: local_e1f3b173.followButton,
                                children: "Отменить",
                              }),
                        ],
                      },
                      arg.userId,
                    );
                  }
                  return imported_9(
                    "div",
                    {
                      className: `${local_e1f3b173.userItem} ${arg.username ? local_e1f3b173.clickable : ""}`,
                      onClick: () => local_17(arg.username),
                      children: [
                        imported_9(imported_11, {
                          src: arg.avatar,
                          size: "md",
                        }),
                        imported_9("div", {
                          className: local_e1f3b173.userInfo,
                          children: [
                            imported_9(imported_12, {
                              name: arg.displayName,
                              verified: arg.isVerified,
                              size: "md",
                              className: local_e1f3b173.displayName,
                            }),
                            arg.username &&
                              imported_9("span", {
                                className: local_e1f3b173.username,
                                children: ["@", arg.username],
                              }),
                          ],
                        }),
                        !local_4 &&
                          imported_9(imported_13, {
                            size: "sm",
                            variant: local || local_2 ? "secondary" : "primary",
                            disabled: local_3,
                            onClick: (arg) => local_10(arg.userId, arg),
                            className: local_e1f3b173.followButton,
                            children: local_7(),
                          }),
                      ],
                    },
                    arg.userId,
                  );
                }),
                local_6 &&
                  imported_9("div", {
                    ref: local_7,
                    className: local_e1f3b173.loadMoreSentinel,
                    children:
                      local_5 &&
                      imported_9(imported_10, {
                        size: "sm",
                      }),
                  }),
              ],
            }),
    }),
  });
}
export {
  UnfollowConfirmModal,
  VerificationModal,
  profileApi,
  socialApi,
  useFollowStatus,
  useFollowStatusStore,
  useFollowUser,
};
