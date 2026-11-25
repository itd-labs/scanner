import {
  symbol_052 as imported,
  symbol_053 as imported_2,
  symbol_054 as imported_3,
  symbol_036 as imported_4,
  symbol_055 as imported_5,
  symbol_291 as imported_6,
  symbol_001 as imported_7,
  symbol_295 as imported_8,
  symbol_072 as imported_9,
  symbol_073 as imported_10,
  symbol_056 as imported_11,
  symbol_057 as imported_12,
} from "../entry-2.js";
const local_8f7de938 = "c_post";
const local_f1c23efb = "c_header";
const local_ad66ff17 = "c_avatarLink";
const local_ca9d5761 = "c_headText";
const local_f94281ad = "c_nameLink";
const local_15aa885a = "c_time";
const local_e148243e = "c_body";
const local_95ed4c70 = "c_text";
const local_65cb46b6 = "c_media";
const local_50ed0b16 = {
  post: local_8f7de938,
  header: local_f1c23efb,
  avatarLink: local_ad66ff17,
  headText: local_ca9d5761,
  nameLink: local_f94281ad,
  time: local_15aa885a,
  body: local_e148243e,
  text: local_95ed4c70,
  media: local_65cb46b6,
};
export function fn_598de4ff({ post: arg }) {
  const { openModal: local, closeModal: local_2 } = imported();
  const {
    liked: local_3,
    totalLikes: local_4,
    handleLike: local_5,
    handleComment: local_6,
    handleShare: local_7,
  } = imported_2(arg, {
    openModal: local,
    closeModal: local_2,
  });
  const local_8 = imported_3(arg);
  const local_9 = imported_4(
    () => imported_5(arg.attachments),
    [arg.attachments],
  );
  const local_10 = imported_6(
    (arg) => {
      arg.stopPropagation();
      const local = arg.author.username ?? arg.author.id;
      imported_7(`/@${local}/post/${arg.id}`);
    },
    [arg.author.username, arg.author.id, arg.id],
  );
  const local_11 = imported_6(
    (arg) => {
      arg.stopPropagation();
      imported_7(`/@${arg.author.username ?? arg.author.id}`);
    },
    [arg.author.username, arg.author.id],
  );
  return imported_8("div", {
    className: local_50ed0b16.post,
    children: [
      imported_8("div", {
        className: local_50ed0b16.header,
        onClick: local_10,
        children: [
          imported_8("span", {
            className: local_50ed0b16.avatarLink,
            onClick: local_11,
            children: imported_8(imported_9, {
              src: arg.author.avatar ?? "",
              alt: arg.author.displayName,
              size: "sm",
            }),
          }),
          imported_8("div", {
            className: local_50ed0b16.headText,
            children: [
              imported_8("span", {
                className: local_50ed0b16.nameLink,
                onClick: local_11,
                children: imported_8(imported_10, {
                  name: arg.author.displayName,
                  verified: arg.author.isVerified,
                  hasNuksta: arg.author.hasNuksta,
                  pin: arg.author.pin,
                  badgesMatchName: true,
                  halloween: arg.author.halloween,
                  size: "xs",
                }),
              }),
              imported_8("span", {
                className: local_50ed0b16.time,
                children: fn_64e34bae(arg.createdAt),
              }),
            ],
          }),
        ],
      }),
      imported_8("div", {
        className: local_50ed0b16.body,
        children: [
          arg.text &&
            imported_8("div", {
              className: local_50ed0b16.text,
              onClick: local_10,
              children: arg.text,
            }),
          local_9.length > 0 &&
            imported_8("div", {
              className: local_50ed0b16.media,
              children: imported_8(imported_11, {
                media: local_9,
                postVs: arg.vs,
                source: "link",
              }),
            }),
          imported_8(imported_12, {
            liked: local_3,
            reposted: local_8.reposted,
            likesCount: local_4,
            repostsCount: local_8.repostsCount,
            commentsCount: local_8.commentsCount,
            viewsCount: local_8.viewsCount,
            dominantEmoji: local_8.dominantEmoji,
            onLike: local_5,
            onRepost: local_7,
            onComment: local_6,
            compact: true,
            emojiOnly: true,
          }),
        ],
      }),
    ],
  });
}
function fn_64e34bae(arg) {
  const local = new Date(arg).getTime();
  if (Number.isNaN(local)) {
    return "";
  }
  const local_2 = Math.max(0, Math.floor((Date.now() - local) / 1000));
  if (local_2 < 60) {
    return "только что";
  }
  const local_3 = Math.floor(local_2 / 60);
  if (local_3 < 60) {
    return `${local_3} мин`;
  }
  const local_4 = Math.floor(local_3 / 60);
  if (local_4 < 24) {
    return `${local_4} ч`;
  }
  const local_5 = Math.floor(local_4 / 24);
  if (local_5 < 7) {
    return `${local_5} д`;
  }
  return new Date(arg).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "short",
  });
}
