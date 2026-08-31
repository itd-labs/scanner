import {
  symbol_002 as imported,
  symbol_021 as imported_2,
  symbol_052 as imported_3,
  symbol_015 as imported_4,
  symbol_016 as imported_5,
  symbol_018 as imported_6,
  symbol_019 as imported_7,
  symbol_073 as imported_8,
  symbol_058 as imported_9,
  symbol_067 as imported_10,
  symbol_068 as imported_11,
  symbol_071 as imported_12,
  symbol_055 as imported_13,
  symbol_053 as imported_14,
  symbol_024 as imported_15,
  symbol_025 as imported_16,
} from "../entry.js";
import { I as imported_17 } from "../components/icon-chevron-left.js";
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
const local_301dfc98 = "c_postPage";
const local_969d651e = "c_pageHeader";
const local_b79c6e36 = "c_pageTitle";
const local_247b3d24 = "c_postSection";
const local_85b1b822 = "c_backButton";
const local_8f7de938 = "c_post";
const local_3326ddb9 = "c_commentsSection";
const local_7abbc161 = "c_fixedInputWrapper";
const local_79555638 = "c_notFound";
const local_50ed0b16 = {
  postPage: local_301dfc98,
  pageHeader: local_969d651e,
  pageTitle: local_b79c6e36,
  postSection: local_247b3d24,
  backButton: local_85b1b822,
  post: local_8f7de938,
  commentsSection: local_3326ddb9,
  fixedInputWrapper: local_7abbc161,
  notFound: local_79555638,
};
export function fn_6247f2d8({ postId: arg, comment: arg_2 }) {
  const local = imported(null);
  const local_2 = imported_2(
    () =>
      arg_2 ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [arg_2],
  );
  const {
    currentPost: local_3,
    currentPostError: local_4,
    fetchPost: local_5,
  } = imported_3(
    imported_4((arg) => ({
      currentPost: arg.currentPost,
      currentPostError: arg.currentPostError,
      fetchPost: arg.fetchPost,
    })),
  );
  const {
    comments: local_6,
    commentsLoading: local_7,
    commentsLoadingMore: local_8,
    commentsHasMore: local_9,
    clearComments: local_10,
    fetchComments: local_11,
    loadMoreComments: local_12,
    toggleCommentLike: local_13,
    addComment: local_14,
    setHighlightedCommentId: local_15,
  } = imported_5(
    imported_4((arg) => ({
      comments: arg.comments,
      commentsLoading: arg.commentsLoading,
      commentsLoadingMore: arg.commentsLoadingMore,
      commentsHasMore: arg.commentsHasMore,
      clearComments: arg.clearComments,
      fetchComments: arg.fetchComments,
      loadMoreComments: arg.loadMoreComments,
      toggleCommentLike: arg.toggleCommentLike,
      addComment: arg.addComment,
      setHighlightedCommentId: arg.setHighlightedCommentId,
    })),
  );
  const local_16 = imported_6((arg) => arg.navigatedInApp)
    ? "post_page"
    : "link";
  if (arg && local.current !== arg) {
    local.current = arg;
    local_10();
  }
  const { commentsSort: local_17, setCommentsSort: local_18 } = imported_7(
    imported_4((arg) => ({
      commentsSort: arg.commentsSort,
      setCommentsSort: arg.setCommentsSort,
    })),
  );
  const local_19 = imported_8((arg) => arg.profile?.id);
  const local_20 = local_3?.wallOwnerId === local_19;
  imported_9(() => {
    if (!local_2) {
      window.scrollTo(0, 0);
    }
  }, [arg, local_2]);
  imported_9(() => {
    if (!arg) {
      return;
    }
    let local = false;
    (async () => {
      await local_5(arg);
      return local || (await local_11(arg));
    })();
    return () => {
      local = true;
    };
  }, [arg, local_5, local_11]);
  const local_21 = imported(null);
  imported_9(() => {
    if (!arg || !local_2) {
      return;
    }
    const local = `${arg}:${local_2}`;
    if (local_21.current !== local) {
      local_21.current = local;
      local_15(local_2);
    }
  }, [arg, local_2, local_15]);
  const local_22 = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      imported_13("../site/index.html");
    }
  };
  const local_23 = (arg) => {
    local_18(arg);
    if (arg) {
      local_11(arg);
    }
  };
  const local_24 = () => {
    if (arg && local_9 && !local_8) {
      local_12(arg);
    }
  };
  const local_25 = (arg) => {
    local_13(arg);
  };
  const local_26 = async (arg) => {
    if (arg) {
      await local_14(arg, arg);
    }
  };
  const local_27 = imported_10(
    async (arg) => {
      if (arg) {
        try {
          const local = `voice_${Date.now()}.webm`;
          const local_2 = new File([arg], local, {
            type: arg.type || "audio/webm",
          });
          const local_3 = await imported_11.uploadMedia(local_2);
          await local_14(arg, {
            text: "",
            attachments: [
              {
                mediaId: local_3.id,
              },
            ],
          });
        } catch (error) {
          console.error("Failed to send voice message:", error);
        }
      }
    },
    [local_14, arg],
  );
  if (local_4) {
    return imported_12("div", {
      className: local_50ed0b16.notFound,
      children: [
        imported_12("h2", {
          children: "Пост не найден",
        }),
        imported_12("button", {
          onClick: () => imported_13("../site/index.html"),
          children: "Вернуться на главную",
        }),
      ],
    });
  }
  if (local_3) {
    return imported_12("div", {
      className: local_50ed0b16.postPage,
      children: [
        imported_12("header", {
          className: local_50ed0b16.pageHeader,
          children: [
            imported_12("button", {
              className: local_50ed0b16.backButton,
              onClick: local_22,
              children: imported_12(imported_17, {
                size: 24,
              }),
            }),
            imported_12("h1", {
              className: local_50ed0b16.pageTitle,
              children: "Пост",
            }),
          ],
        }),
        imported_12("div", {
          className: local_50ed0b16.postSection,
          children: [
            imported_12(imported_14, {
              className: local_50ed0b16.post,
              post: local_3,
              variant: "modal",
              source: local_16,
              sourceContext: local_3.id,
            }),
            imported_12("div", {
              className: local_50ed0b16.commentsSection,
              "data-comments-section": true,
              children: imported_12(imported_15, {
                comments: local_6,
                isLoading: local_7,
                isLoadingMore: local_8,
                hasMore: local_9,
                sort: local_17,
                onSortChange: local_23,
                onLikeComment: local_25,
                onAddComment: local_26,
                onVoiceSend: local_27,
                onLoadMore: local_24,
                isWallOwner: local_20,
                variant: "page",
                hideInput: true,
              }),
            }),
          ],
        }),
        imported_12("div", {
          className: local_50ed0b16.fixedInputWrapper,
          children: imported_12(imported_16, {
            onSubmit: (arg, arg_2, arg_3) =>
              local_26({
                text: arg,
                spans: arg_2,
                attachments: arg_3,
              }),
            onVoiceSend: local_27,
          }),
        }),
      ],
    });
  }
  return null;
}
export { fn_6247f2d8 as default };
