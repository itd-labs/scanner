import {
  symbol_054 as imported,
  symbol_052 as imported_2,
  symbol_058 as imported_3,
  symbol_067 as imported_4,
  symbol_066 as imported_5,
  symbol_071 as imported_6,
  symbol_017 as imported_7,
  symbol_023 as imported_8,
  symbol_053 as imported_9,
  symbol_055 as imported_10,
} from "../entry.js";
import { I as imported_11 } from "../components/icon-chevron-left.js";
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
const local_ef251bc6 = "c_page";
const local_f1c23efb = "c_header";
const local_85b1b822 = "c_backButton";
const local_2bb3a561 = "c_hashtagName";
const local_119f77f9 = "c_empty";
const local_d034c202 = "c_emptyText";
const local_cd23a337 = "c_error";
const local_bcebeb33 = "c_errorText";
const local_5e8e6f73 = "c_retryButton";
const local_50ed0b16 = {
  page: local_ef251bc6,
  header: local_f1c23efb,
  backButton: local_85b1b822,
  hashtagName: local_2bb3a561,
  empty: local_119f77f9,
  emptyText: local_d034c202,
  error: local_cd23a337,
  errorText: local_bcebeb33,
  retryButton: local_5e8e6f73,
};
export const local_8c7c4a0a = ({ name: arg }) => {
  const [local, local_2] = imported([]);
  const [local_3, local_4] = imported(true);
  const [local_5, local_6] = imported(null);
  const [local_7, local_8] = imported(null);
  const [local_9, local_10] = imported(false);
  const local_11 = arg ? decodeURIComponent(arg) : "";
  const local_12 = imported_2((arg) => arg._lastLikeUpdate);
  imported_3(() => {
    if (!local_12) {
      return;
    }
    const {
      postId: local,
      myReaction: local_2,
      totalDelta: local_3,
    } = local_12;
    local_2((arg) =>
      arg.map((arg) => {
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
      }),
    );
  }, [local_12]);
  const local_13 = imported_4(
    async (arg) => {
      if (local_11) {
        try {
          if (arg) {
            local_10(true);
          } else {
            local_4(true);
            local_6(null);
          }
          const local = await imported_5.getPostsByHashtag(local_11, {
            limit: 20,
            cursor: arg,
          });
          local_2(arg ? (arg) => [...arg, ...local.data] : local.data);
          local_8(local.nextCursor);
        } catch (error) {
          console.error("Failed to fetch hashtag posts:", error);
          if (!arg) {
            local_6("Не удалось загрузить посты");
          }
        } finally {
          local_4(false);
          local_10(false);
        }
      }
    },
    [local_11],
  );
  imported_3(() => {
    local_13();
  }, [local_13]);
  const local_14 = imported_4(() => {
    if (local_7 && !local_9) {
      local_13(local_7);
    }
  }, [local_7, local_9, local_13]);
  const local_15 = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      imported_10("/search");
    }
  };
  const local_16 = imported_4((arg) => {
    local_2((arg) => arg.filter((arg) => arg.id !== arg));
  }, []);
  if (local_11) {
    return imported_6("div", {
      className: local_50ed0b16.page,
      children: [
        imported_6("div", {
          className: local_50ed0b16.header,
          children: [
            imported_6("button", {
              className: local_50ed0b16.backButton,
              onClick: local_15,
              children: [
                imported_6(imported_11, {
                  size: 18,
                }),
                "Назад",
              ],
            }),
            imported_6("h1", {
              className: local_50ed0b16.hashtagName,
              children: ["#", local_11],
            }),
          ],
        }),
        local_3
          ? imported_6(imported_7, {
              count: 4,
            })
          : local_5
            ? imported_6("div", {
                className: local_50ed0b16.error,
                children: [
                  imported_6("span", {
                    className: local_50ed0b16.errorText,
                    children: local_5,
                  }),
                  imported_6("button", {
                    className: local_50ed0b16.retryButton,
                    onClick: () => local_13(),
                    children: "Повторить",
                  }),
                ],
              })
            : local.length === 0
              ? imported_6("div", {
                  className: local_50ed0b16.empty,
                  children: imported_6("span", {
                    className: local_50ed0b16.emptyText,
                    children: "Нет постов с этим хештегом",
                  }),
                })
              : imported_6(imported_8, {
                  posts: local,
                  renderPost: (arg) =>
                    imported_6(imported_9, {
                      post: arg,
                      source: "hashtag",
                      sourceContext: local_11,
                      onDelete: local_16,
                    }),
                  hasMore: !!local_7,
                  isLoadingMore: local_9,
                  onLoadMore: local_14,
                }),
      ],
    });
  }
  return imported_6("div", {
    className: local_50ed0b16.page,
    children: imported_6("div", {
      className: local_50ed0b16.error,
      children: imported_6("span", {
        className: local_50ed0b16.errorText,
        children: "Хештег не указан",
      }),
    }),
  });
};
export { local_8c7c4a0a as default };
