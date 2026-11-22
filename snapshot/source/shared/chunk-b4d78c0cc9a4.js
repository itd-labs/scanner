import {
  symbol_295 as imported,
  symbol_002 as imported_2,
  symbol_222 as imported_3,
  symbol_291 as imported_4,
  symbol_095 as socialApi,
  symbol_282 as imported_5,
  symbol_029 as imported_6,
  symbol_084 as imported_7,
  symbol_043 as imported_8,
  symbol_003 as imported_9,
  symbol_105 as imported_10,
  symbol_088 as imported_11,
  symbol_001 as imported_12,
  symbol_090 as profileApi,
  symbol_045 as imported_13,
  symbol_106 as imported_14,
  symbol_012 as imported_15,
  symbol_085 as imported_16,
  symbol_052 as imported_17,
  symbol_074 as imported_18,
  symbol_072 as imported_19,
  symbol_073 as imported_20,
  symbol_103 as imported_21,
  symbol_083 as imported_22,
  symbol_068 as imported_23,
  symbol_110 as UnfollowConfirmModal,
  symbol_107 as useFollowStatus,
  symbol_108 as useFollowStatusStore,
  symbol_109 as useFollowUser,
} from "../entry-2.js";
import { I as imported_24 } from "../components/icon-check.js";
import { I as imported_25 } from "../components/icon-check-circle.js";
const local_3aecdb4a = ({ size: arg = 48 }) =>
  imported("svg", {
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      imported("polygon", {
        points: "23 7 16 12 23 17 23 7",
      }),
      imported("rect", {
        x: "1",
        y: "5",
        width: "15",
        height: "14",
        rx: "2",
        ry: "2",
      }),
    ],
  });
const local_02d2738a = ({ size: arg = 48 }) =>
  imported("svg", {
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      imported("circle", {
        cx: "12",
        cy: "12",
        r: "10",
      }),
      imported("polyline", {
        points: "12 6 12 12 16 14",
      }),
    ],
  });
export function fn_cc3b31b4(arg, arg_2) {
  const local = imported_2(null);
  const local_2 = `${arg || "me"}-${arg_2}`;
  const [local_3, local_4] = imported_3([]);
  const [local_5, local_6] = imported_3(true);
  const [local_7, local_8] = imported_3(false);
  const [local_9, local_10] = imported_3(null);
  const [local_11, local_12] = imported_3(new Map());
  const [local_13, local_14] = imported_3(new Set());
  const local_15 = imported_2(null);
  if (local.current !== local_2) {
    local.current = local_2;
    local_4([]);
    local_6(true);
    local_10(null);
    local_12(new Map());
    local_14(new Set());
  }
  const local_16 = imported_4(
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
          for (const local of arg) {
            if (local.interaction.isFollowing) {
              local.set(local.userId, "following");
            } else if (local.interaction.hasOutgoingRequest) {
              local.set(local.userId, "requested");
            } else {
              local.set(local.userId, null);
            }
          }
          return local;
        };
        if (local) {
          local_4(local.data);
          local_12(local_2(local.data));
        } else {
          local_4((arg) => {
            const local = new Set(arg.map((arg) => arg.userId));
            return [
              ...arg,
              ...local.data.filter((arg) => !local.has(arg.userId)),
            ];
          });
          local_12((arg) => {
            const local = new Map(arg);
            for (const local of local.data) {
              local.has(local.userId) ||
                (local.interaction.isFollowing
                  ? local.set(local.userId, "following")
                  : local.interaction.hasOutgoingRequest
                    ? local.set(local.userId, "requested")
                    : local.set(local.userId, null));
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
  imported_5(() => {
    local_16();
  }, [local_16]);
  const local_17 = imported_4(() => {
    if (local_9) {
      local_16(local_9);
    }
  }, [local_9, local_16]);
  imported_6({
    sentinelRef: local_15,
    hasMore: !!local_9,
    isLoading: local_7,
    onLoadMore: local_17,
  });
  const local_18 = imported_4(
    async (arg, arg_2) => {
      arg_2.stopPropagation();
      if (!local_13.has(arg)) {
        local_14((arg) => new Set(arg).add(arg));
        try {
          const local = local_11.get(arg);
          if (local === "following" || local === "requested") {
            await socialApi.unfollowUser(arg);
            local_12((arg) => {
              const local = new Map(arg);
              local.set(arg, null);
              return local;
            });
          } else {
            const local = await socialApi.followUser(arg);
            local_12((arg) => {
              const local = new Map(arg);
              local.set(arg, local);
              return local;
            });
          }
        } catch (error) {
          console.error("Failed to toggle follow:", error);
        } finally {
          local_14((arg) => {
            const local = new Set(arg);
            local.delete(arg);
            return local;
          });
        }
      }
    },
    [local_11, local_13],
  );
  return {
    users: local_3,
    isLoading: local_5,
    isLoadingMore: local_7,
    nextCursor: local_9,
    loadMoreRef: local_15,
    userFollowStatus: local_11,
    loadingFollowIds: local_13,
    handleToggleFollow: local_18,
  };
}
function fn_057b7ca4({ userId: arg, name: arg_2, onOpen: arg_3 }) {
  const local = imported_7()?.id;
  const [local_2, local_3] = imported_3(false);
  const local_4 = imported_2(true);
  imported_5(
    () => () => {
      local_4.current = false;
    },
    [],
  );
  if (!local || local === arg) {
    return null;
  }
  const local_5 = async () => {
    if (local_2) {
      return;
    }
    local_3(true);
    const local = imported_16();
    const local_2 = location.pathname;
    const local_3 = () =>
      local_4.current &&
      imported_11(local) &&
      imported_15.getState().profile?.id === local &&
      location.pathname === local_2;
    try {
      const local = imported_10.getState;
      let local_2 = local().chats.find(
        (arg) => arg.chat_type === 0 && arg.other_user_id === arg,
      );
      if (!local_2) {
        const local = await local().loadChats();
        if (!local_3()) {
          return;
        }
        local_2 = local().chats.find(
          (arg) => arg.chat_type === 0 && arg.other_user_id === arg,
        );
        if (!local_2 && !local) {
          throw Error("Incomplete chat list");
        }
      }
      if (local_2) {
        arg_3();
        imported_12(`/chats/${local_2.chat_id}`);
        return;
      }
      const local_3 = await profileApi.getProfileByUsername(arg, {
        force: true,
        silent: true,
      });
      if (!local_3()) {
        return;
      }
      if (local_3.isDeleted) {
        imported_13.error("Этот аккаунт удалён");
        return;
      }
      local().startDraft({
        id: arg,
        name: local_3.displayName || arg_2,
        username: local_3.username || arg,
        ...imported_14(local_3.avatar),
        verified: local_3.isVerified || local_3.verified,
      });
      arg_3();
      imported_12(`/chats/new/${arg}`);
    } catch {
      if (local_3()) {
        imported_13.error("Не удалось открыть переписку. Попробуйте снова");
      }
    } finally {
      if (local_3()) {
        local_3(false);
      }
    }
  };
  return imported(imported_9, {
    size: "sm",
    variant: "secondary",
    iconOnly: true,
    "aria-label": `Написать ${arg_2}`,
    title: "Написать сообщение",
    disabled: local_2,
    onClick: (arg) => {
      arg.stopPropagation();
      local_5();
    },
    children: imported(imported_8, {
      size: 18,
    }),
  });
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
const local_508c626c = {
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
export function fn_9cb3a429({ userId: arg, type: arg_2, title: arg_3 }) {
  const { closeModal: local } = imported_17();
  const local_2 = imported_15((arg) => arg.profile?.id);
  const {
    users: local_3,
    isLoading: local_4,
    isLoadingMore: local_5,
    nextCursor: local_6,
    loadMoreRef: local_7,
    userFollowStatus: local_8,
    loadingFollowIds: local_9,
    handleToggleFollow: local_10,
  } = fn_cc3b31b4(arg, arg_2);
  const [local_11, local_12] = imported_3(new Map());
  const [local_13, local_14] = imported_3(new Set());
  const local_15 = arg_2 === "pending-incoming";
  const local_16 = arg_2 === "pending-outgoing";
  const local_17 = imported_4(
    (arg) => {
      if (arg) {
        local();
        imported_12(`/@${arg}`);
      }
    },
    [local],
  );
  const local_18 = imported_4(
    async (arg, arg_2) => {
      arg_2.stopPropagation();
      if (!local_13.has(arg)) {
        console.warn("acceptFollowRequest not implemented in old backend");
      }
    },
    [local_13],
  );
  const local_19 = imported_4(
    async (arg, arg_2) => {
      arg_2.stopPropagation();
      if (!local_13.has(arg)) {
        console.warn("removeFollower not implemented in old backend");
      }
    },
    [local_13],
  );
  const local_20 = imported_4(
    async (arg, arg_2) => {
      arg_2.stopPropagation();
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
  return imported(imported_22, {
    onClose: local,
    title: arg_3,
    className: local_508c626c.userListModal,
    children: imported("div", {
      className: local_508c626c.content,
      children: local_4
        ? imported(imported_18, {})
        : local_3.length === 0
          ? imported("div", {
              className: local_508c626c.empty,
              children: local_21(),
            })
          : imported("div", {
              className: local_508c626c.userList,
              children: [
                local_3.map((arg) => {
                  const local = local_8.get(arg.userId);
                  const local_2 = local === "following";
                  const local_3 = local === "requested";
                  const local_4 = local_9.has(arg.userId);
                  const local_5 = arg.userId === local_2;
                  const local_6 = local_11.get(arg.userId);
                  const local_7 = local_13.has(arg.userId);
                  const local_8 = () => {
                    if (local_2) {
                      return "Отписаться";
                    }
                    if (local_3) {
                      return "Отменить";
                    }
                    return "Подписаться";
                  };
                  if (local_15) {
                    return imported(
                      "div",
                      {
                        className: `${local_508c626c.userItem} ${arg.username ? local_508c626c.clickable : ""}`,
                        onClick: () => local_17(arg.username),
                        children: [
                          imported(imported_19, {
                            src: arg.avatar,
                            size: "md",
                            halloween: arg.halloween,
                          }),
                          imported("div", {
                            className: local_508c626c.userInfo,
                            children: [
                              imported(imported_20, {
                                userId: arg.userId,
                                halloween: arg.halloween,
                                name: arg.displayName,
                                verified: arg.isVerified,
                                pin: arg.pin,
                                size: "md",
                                className: local_508c626c.displayName,
                              }),
                              arg.username &&
                                imported("span", {
                                  className: local_508c626c.username,
                                  children: ["@", arg.username],
                                }),
                            ],
                          }),
                          local_6 === "accepted"
                            ? imported("span", {
                                className: local_508c626c.actionStatus,
                                children: "Принято",
                              })
                            : local_6 === "rejected"
                              ? imported("span", {
                                  className: local_508c626c.actionStatus,
                                  children: "Отклонено",
                                })
                              : imported("div", {
                                  className: local_508c626c.actionButtons,
                                  children: [
                                    imported(imported_9, {
                                      size: "sm",
                                      variant: "primary",
                                      disabled: local_7,
                                      onClick: (arg) =>
                                        local_18(arg.userId, arg),
                                      className: local_508c626c.acceptButton,
                                      children: imported(imported_24, {
                                        size: 16,
                                      }),
                                    }),
                                    imported(imported_9, {
                                      size: "sm",
                                      variant: "secondary",
                                      disabled: local_7,
                                      onClick: (arg) =>
                                        local_19(arg.userId, arg),
                                      className: local_508c626c.rejectButton,
                                      children: imported(imported_21, {
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
                    return imported(
                      "div",
                      {
                        className: `${local_508c626c.userItem} ${arg.username ? local_508c626c.clickable : ""}`,
                        onClick: () => local_17(arg.username),
                        children: [
                          imported(imported_19, {
                            src: arg.avatar,
                            size: "md",
                            halloween: arg.halloween,
                          }),
                          imported("div", {
                            className: local_508c626c.userInfo,
                            children: [
                              imported(imported_20, {
                                userId: arg.userId,
                                halloween: arg.halloween,
                                name: arg.displayName,
                                verified: arg.isVerified,
                                pin: arg.pin,
                                size: "md",
                                className: local_508c626c.displayName,
                              }),
                              arg.username &&
                                imported("span", {
                                  className: local_508c626c.username,
                                  children: ["@", arg.username],
                                }),
                            ],
                          }),
                          local_6 === "rejected"
                            ? imported("span", {
                                className: local_508c626c.actionStatus,
                                children: "Отменено",
                              })
                            : imported(imported_9, {
                                size: "sm",
                                variant: "secondary",
                                disabled: local_7,
                                onClick: (arg) => local_20(arg.userId, arg),
                                className: local_508c626c.followButton,
                                children: "Отменить",
                              }),
                        ],
                      },
                      arg.userId,
                    );
                  }
                  return imported(
                    "div",
                    {
                      className: `${local_508c626c.userItem} ${arg.username ? local_508c626c.clickable : ""}`,
                      onClick: () => local_17(arg.username),
                      children: [
                        imported(imported_19, {
                          src: arg.avatar,
                          size: "md",
                          halloween: arg.halloween,
                        }),
                        imported("div", {
                          className: local_508c626c.userInfo,
                          children: [
                            imported(imported_20, {
                              userId: arg.userId,
                              halloween: arg.halloween,
                              name: arg.displayName,
                              verified: arg.isVerified,
                              pin: arg.pin,
                              size: "md",
                              className: local_508c626c.displayName,
                            }),
                            arg.username &&
                              imported("span", {
                                className: local_508c626c.username,
                                children: ["@", arg.username],
                              }),
                          ],
                        }),
                        !local_5 &&
                          imported(fn_057b7ca4, {
                            userId: arg.userId,
                            name: arg.displayName,
                            onOpen: () => local(),
                          }),
                        !local_5 &&
                          imported(imported_9, {
                            size: "sm",
                            variant:
                              local_2 || local_3 ? "secondary" : "primary",
                            disabled: local_4,
                            onClick: (arg) => local_10(arg.userId, arg),
                            className: local_508c626c.followButton,
                            children: local_8(),
                          }),
                      ],
                    },
                    arg.userId,
                  );
                }),
                local_6 &&
                  imported("div", {
                    ref: local_7,
                    className: local_508c626c.loadMoreSentinel,
                    children:
                      local_5 &&
                      imported(imported_18, {
                        size: "sm",
                      }),
                  }),
              ],
            }),
    }),
  });
}
const local_f3718aa0 = "c_checkbox";
const local_f58ba0b9 = "c_disabled";
const local_301b9a53 = "c_input";
const local_555fad26 = "c_checkmark";
const local_fe9ec23f = "c_label";
const local_74c5ff68 = {
  checkbox: local_f3718aa0,
  disabled: local_f58ba0b9,
  input: local_301b9a53,
  checkmark: local_555fad26,
  label: local_fe9ec23f,
};
function fn_51027f24({
  checked: arg,
  onChange: arg_2,
  label: arg_3,
  disabled: arg_4 = false,
  className: arg_5 = "",
}) {
  const local = (arg) => {
    arg_2(arg.target.checked);
  };
  return imported("label", {
    className: `${local_74c5ff68.checkbox} ${arg_4 ? local_74c5ff68.disabled : ""} ${arg_5}`,
    children: [
      imported("input", {
        type: "checkbox",
        checked: arg,
        onChange: local,
        disabled: arg_4,
        className: local_74c5ff68.input,
      }),
      imported("span", {
        className: local_74c5ff68.checkmark,
      }),
      arg_3 &&
        imported("span", {
          className: local_74c5ff68.label,
          children: arg_3,
        }),
    ],
  });
}
const local_49250f21 = "c_modal";
const local_4d84dbb6_2 = "c_content";
const local_29c96261 = "c_statusIcon";
const local_9d9cf508 = "c_title";
const local_5df6efc6 = "c_description";
const local_97d0556d = "c_rejectionNotice";
const local_0b7d32e9 = "c_rejectionTitle";
const local_34a1d34d = "c_rejectionReason";
const local_2fedaa4d = "c_fileInput";
const local_da055f3b = "c_dropzone";
const local_c3e08f24 = "c_dropzoneIcon";
const local_3f555595 = "c_dropzoneText";
const local_f48a103b = "c_dropzoneHint";
const local_9c18575c = "c_preview";
const local_44ac62a9 = "c_video";
const local_a107e92c = "c_removeButton";
const local_cd23a337 = "c_error";
const local_7d33a597 = "c_progressBar";
const local_9954e574 = "c_progressFill";
const local_8c4f8b4b = "c_actions";
const local_846aace2 = {
  modal: local_49250f21,
  content: local_4d84dbb6_2,
  statusIcon: local_29c96261,
  title: local_9d9cf508,
  description: local_5df6efc6,
  rejectionNotice: local_97d0556d,
  rejectionTitle: local_0b7d32e9,
  rejectionReason: local_34a1d34d,
  fileInput: local_2fedaa4d,
  dropzone: local_da055f3b,
  dropzoneIcon: local_c3e08f24,
  dropzoneText: local_3f555595,
  dropzoneHint: local_f48a103b,
  preview: local_9c18575c,
  video: local_44ac62a9,
  removeButton: local_a107e92c,
  error: local_cd23a337,
  progressBar: local_7d33a597,
  progressFill: local_9954e574,
  actions: local_8c4f8b4b,
};
const local_4cc8ec46 = 50 * 1024 * 1024;
const local_865f321e = ["video/mp4", "video/webm", "video/quicktime"];
export function fn_fd5363f6({ onClose: arg }) {
  const [local, local_2] = imported_3("loading");
  const [local_3, local_4] = imported_3(null);
  const [local_5, local_6] = imported_3(null);
  const [local_7, local_8] = imported_3(false);
  const [local_9, local_10] = imported_3(false);
  const [local_11, local_12] = imported_3(null);
  const [local_13, local_14] = imported_3(0);
  const local_15 = imported_2(null);
  imported_5(() => {
    (async () => {
      try {
        const local = await profileApi.getVerificationStatus();
        local_2(local);
      } catch (error) {
        console.error("Failed to load verification status:", error);
        local_2(null);
      }
    })();
  }, []);
  imported_5(
    () => () => {
      if (local_5) {
        URL.revokeObjectURL(local_5);
      }
    },
    [local_5],
  );
  const local_16 = (arg) => {
    const local = arg.target.files?.[0];
    if (local) {
      local_12(null);
      if (!local_865f321e.includes(local.type)) {
        local_12("Поддерживаются только форматы MP4, WebM и MOV");
        return;
      }
      if (local.size > local_4cc8ec46) {
        local_12("Размер видео не должен превышать 50 МБ");
        return;
      }
      if (local_5) {
        URL.revokeObjectURL(local_5);
      }
      local_4(local);
      local_6(URL.createObjectURL(local));
    }
  };
  const local_17 = () => {
    local_15.current?.click();
  };
  const local_18 = () => {
    if (local_5) {
      URL.revokeObjectURL(local_5);
    }
    local_4(null);
    local_6(null);
    if (local_15.current) {
      local_15.current.value = "";
    }
  };
  const local_19 = async () => {
    if (!(!local_3 || !local_7)) {
      local_10(true);
      local_12(null);
      local_14(0);
      try {
        local_14(30);
        const local = await imported_23.uploadMedia(local_3);
        local_14(70);
        await profileApi.submitVerificationRequest(local.url);
        local_14(100);
        const local_2 = await profileApi.getVerificationStatus();
        local_2(local_2);
      } catch (error) {
        console.error("Failed to submit verification request:", error);
        local_12("Не удалось отправить заявку. Попробуйте позже.");
      } finally {
        local_10(false);
      }
    }
  };
  if (local === "loading") {
    return imported(imported_22, {
      onClose: arg,
      showHeader: false,
      className: local_846aace2.modal,
      children: imported("div", {
        className: local_846aace2.content,
        children: imported(imported_18, {}),
      }),
    });
  }
  if (
    local &&
    typeof local === "object" &&
    (local.status === "pending" || local.status === "approved")
  ) {
    return imported(imported_22, {
      onClose: arg,
      showHeader: false,
      className: local_846aace2.modal,
      children: imported("div", {
        className: local_846aace2.content,
        children: [
          imported("div", {
            className: local_846aace2.statusIcon,
            children:
              local.status === "approved"
                ? imported(imported_25, {
                    size: 48,
                  })
                : imported(local_02d2738a, {
                    size: 48,
                  }),
          }),
          imported("h2", {
            className: local_846aace2.title,
            children:
              local.status === "approved"
                ? "Вы верифицированы!"
                : "Заявка на рассмотрении",
          }),
          imported("p", {
            className: local_846aace2.description,
            children:
              local.status === "approved"
                ? "Поздравляем! Ваш аккаунт верифицирован."
                : "Ваша заявка на верификацию находится на рассмотрении. Мы уведомим вас о результате.",
          }),
          imported("div", {
            className: local_846aace2.actions,
            children: imported(imported_9, {
              variant: "primary",
              onClick: () => arg(),
              children: "Понятно",
            }),
          }),
        ],
      }),
    });
  }
  return imported(imported_22, {
    onClose: arg,
    showHeader: false,
    className: local_846aace2.modal,
    children: imported("div", {
      className: local_846aace2.content,
      children: [
        imported("h2", {
          className: local_846aace2.title,
          children: "Верификация",
        }),
        imported("p", {
          className: local_846aace2.description,
          children:
            "Запишите видео, в котором объясните, почему вам нужна галочка и без неё никак.",
        }),
        local?.status === "rejected" &&
          imported("div", {
            className: local_846aace2.rejectionNotice,
            children: [
              imported("span", {
                className: local_846aace2.rejectionTitle,
                children: "Предыдущая заявка отклонена",
              }),
              local.reason &&
                imported("span", {
                  className: local_846aace2.rejectionReason,
                  children: local.reason,
                }),
            ],
          }),
        imported("input", {
          ref: local_15,
          type: "file",
          accept: "video/mp4,video/webm,video/quicktime,.mp4,.webm,.mov",
          onChange: local_16,
          className: local_846aace2.fileInput,
        }),
        local_3
          ? imported("div", {
              className: local_846aace2.preview,
              children: [
                imported("video", {
                  src: local_5,
                  controls: true,
                  className: local_846aace2.video,
                }),
                imported("button", {
                  className: local_846aace2.removeButton,
                  onClick: local_18,
                  type: "button",
                  children: imported(imported_21, {
                    size: 20,
                  }),
                }),
              ],
            })
          : imported("div", {
              className: local_846aace2.dropzone,
              onClick: local_17,
              children: [
                imported("div", {
                  className: local_846aace2.dropzoneIcon,
                  children: imported(local_3aecdb4a, {
                    size: 48,
                  }),
                }),
                imported("span", {
                  className: local_846aace2.dropzoneText,
                  children: "Нажмите, чтобы выбрать видео",
                }),
                imported("span", {
                  className: local_846aace2.dropzoneHint,
                  children: "MP4, WebM или MOV, до 50 МБ",
                }),
              ],
            }),
        local_11 &&
          imported("div", {
            className: local_846aace2.error,
            children: local_11,
          }),
        local_9 &&
          imported("div", {
            className: local_846aace2.progressBar,
            children: imported("div", {
              className: local_846aace2.progressFill,
              style: {
                width: `${local_13}%`,
              },
            }),
          }),
        imported(fn_51027f24, {
          checked: local_7,
          onChange: local_8,
          disabled: local_9,
          label:
            "Я соглашаюсь с тем, что моё видео может быть использовано в контенте Nowkie",
        }),
        imported("div", {
          className: local_846aace2.actions,
          children: [
            imported(imported_9, {
              variant: "secondary",
              onClick: () => arg(),
              disabled: local_9,
              children: "Отмена",
            }),
            imported(imported_9, {
              variant: "primary",
              onClick: local_19,
              disabled: !local_3 || !local_7 || local_9,
              children: local_9 ? "Отправка..." : "Отправить заявку",
            }),
          ],
        }),
      ],
    }),
  });
}
export {
  UnfollowConfirmModal,
  profileApi,
  socialApi,
  useFollowStatus,
  useFollowStatusStore,
  useFollowUser,
};
