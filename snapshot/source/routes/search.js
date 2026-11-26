import {
  symbol_222 as imported,
  symbol_002 as imported_2,
  symbol_282 as imported_3,
  symbol_291 as imported_4,
  symbol_295 as imported_5,
  symbol_071 as imported_6,
  symbol_020 as imported_7,
  symbol_072 as imported_8,
  symbol_073 as imported_9,
  symbol_074 as imported_10,
} from "../entry-2.js";
import { s as imported_11 } from "../shared/search-api-987a1e6021eb.js";
const local_ef251bc6 = "c_page";
const local_b79c6e36 = "c_pageTitle";
const local_34365a93 = "c_titleRow";
const local_85107614 = "c_searchWrapper";
const local_89923dfc = "c_searchIcon";
const local_7fe71380 = "c_searchInput";
const local_89f8379c = "c_sections";
const local_af0b94fd = "c_section";
const local_d29c892c = "c_sectionHeader";
const local_288346ca = "c_sectionTitle";
const local_bfdd6b29 = "c_usersList";
const local_9dd6dc5c = "c_userItem";
const local_d5e52f71 = "c_userInfo";
const local_2cae12d7 = "c_userUsername";
const local_962c9cad = "c_clansBadges";
const local_cc20a72e = "c_clanBadge";
const local_1e70744e = "c_clanEmoji";
const local_e94c4a7f = "c_clanCount";
const local_7744b04a = "c_hashtagsList";
const local_297083bd = "c_hashtagItem";
const local_0919827d = "c_hashtagRank";
const local_e2e27174 = "c_hashtagInfo";
const local_80d615c8 = "c_hashtagTag";
const local_0e143f88 = "c_hashtagCount";
const local_119f77f9 = "c_empty";
const local_f2bf345a = {
  page: local_ef251bc6,
  pageTitle: local_b79c6e36,
  titleRow: local_34365a93,
  searchWrapper: local_85107614,
  searchIcon: local_89923dfc,
  searchInput: local_7fe71380,
  sections: local_89f8379c,
  section: local_af0b94fd,
  sectionHeader: local_d29c892c,
  sectionTitle: local_288346ca,
  usersList: local_bfdd6b29,
  userItem: local_9dd6dc5c,
  userInfo: local_d5e52f71,
  userUsername: local_2cae12d7,
  clansBadges: local_962c9cad,
  clanBadge: local_cc20a72e,
  clanEmoji: local_1e70744e,
  clanCount: local_e94c4a7f,
  hashtagsList: local_7744b04a,
  hashtagItem: local_297083bd,
  hashtagRank: local_0919827d,
  hashtagInfo: local_e2e27174,
  hashtagTag: local_80d615c8,
  hashtagCount: local_0e143f88,
  empty: local_119f77f9,
};
const local_b858f1d3 = (arg) => {
  if (arg >= 1000000) {
    return `${(arg / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (arg >= 1000) {
    return `${(arg / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  }
  return arg.toString();
};
export const local_933b8574 = (arg) => {
  const [local, local_2] = imported("");
  const [local_3, local_4] = imported([]);
  const [local_5, local_6] = imported([]);
  const [local_7, local_8] = imported([]);
  const [local_9, local_10] = imported([]);
  const [local_11, local_12] = imported(true);
  const [local_13, local_14] = imported(true);
  const [local_15, local_16] = imported(false);
  const local_17 = imported_2(null);
  imported_3(() => {
    (async () => {
      try {
        const [local, local_2] = await Promise.all([
          imported_11.getPopularAvatars(),
          imported_11.getTrendingHashtags(),
        ]);
        local_4(local.slice(0, 10));
        local_6(local_2.slice(0, 10));
      } catch (error) {
        console.error("Failed to fetch search data:", error);
      } finally {
        local_12(false);
        local_14(false);
      }
    })();
  }, []);
  const local_18 = imported_4(async (arg) => {
    const local = arg.trim().replace(/^@/, "").replace(/^#/, "");
    if (!local) {
      local_8([]);
      local_10([]);
      local_16(false);
      return;
    }
    local_16(true);
    try {
      const local = await imported_11.globalSearch(local, 10, 5);
      local_8(local.users);
      local_10(local.hashtags);
    } catch (error) {
      console.error("Failed to search:", error);
      local_8([]);
      local_10([]);
    } finally {
      local_16(false);
    }
  }, []);
  const local_19 = (arg) => {
    const local = arg.target.value;
    local_2(local);
    if (local_17.current) {
      clearTimeout(local_17.current);
    }
    local_17.current = window.setTimeout(() => {
      local_18(local);
    }, 1000);
  };
  const local_20 = local.trim().length > 0;
  return imported_5("div", {
    className: local_f2bf345a.page,
    children: [
      imported_5("div", {
        className: local_f2bf345a.titleRow,
        children: imported_5("h1", {
          className: local_f2bf345a.pageTitle,
          children: "Поиск",
        }),
      }),
      imported_5("div", {
        className: local_f2bf345a.searchWrapper,
        children: [
          imported_5("div", {
            className: local_f2bf345a.searchIcon,
            children: imported_5(imported_6, {
              size: 20,
            }),
          }),
          imported_5("input", {
            type: "text",
            className: local_f2bf345a.searchInput,
            placeholder: "Поиск людей и хештегов",
            value: local,
            onInput: local_19,
          }),
        ],
      }),
      imported_5("div", {
        className: local_f2bf345a.sections,
        children: local_20
          ? imported_5(imported_7, {
              children: [
                imported_5("section", {
                  className: local_f2bf345a.section,
                  children: [
                    imported_5("div", {
                      className: local_f2bf345a.sectionHeader,
                      children: imported_5("h2", {
                        className: local_f2bf345a.sectionTitle,
                        children: "Люди",
                      }),
                    }),
                    imported_5("div", {
                      className: local_f2bf345a.usersList,
                      children: local_15
                        ? null
                        : local_7.length === 0
                          ? imported_5("div", {
                              className: local_f2bf345a.empty,
                              children: "Ничего не найдено",
                            })
                          : local_7.map((arg) =>
                              imported_5(
                                "a",
                                {
                                  href: `/@${arg.username ?? arg.userId}`,
                                  className: local_f2bf345a.userItem,
                                  children: [
                                    imported_5(imported_8, {
                                      src: arg.avatar,
                                      alt: arg.displayName,
                                      size: "md",
                                      halloween: arg.halloween,
                                    }),
                                    imported_5("div", {
                                      className: local_f2bf345a.userInfo,
                                      children: [
                                        imported_5(imported_9, {
                                          userId: arg.id,
                                          halloween: arg.halloween,
                                          name: arg.displayName,
                                          verified:
                                            arg.isVerified ?? arg.verified,
                                          hasNuksta: arg.hasNuksta,
                                          pin: arg.pin,
                                        }),
                                        arg.username &&
                                          imported_5("span", {
                                            className:
                                              local_f2bf345a.userUsername,
                                            children: ["@", arg.username],
                                          }),
                                      ],
                                    }),
                                  ],
                                },
                                arg.userId,
                              ),
                            ),
                    }),
                  ],
                }),
                local_9.length > 0 &&
                  imported_5("section", {
                    className: local_f2bf345a.section,
                    children: [
                      imported_5("div", {
                        className: local_f2bf345a.sectionHeader,
                        children: imported_5("h2", {
                          className: local_f2bf345a.sectionTitle,
                          children: "Хештеги",
                        }),
                      }),
                      imported_5("div", {
                        className: local_f2bf345a.hashtagsList,
                        children: local_9.map((arg) =>
                          imported_5(
                            "a",
                            {
                              href: `/hashtag/${encodeURIComponent(arg.name)}`,
                              className: local_f2bf345a.hashtagItem,
                              children: imported_5("div", {
                                className: local_f2bf345a.hashtagInfo,
                                children: [
                                  imported_5("span", {
                                    className: local_f2bf345a.hashtagTag,
                                    children: ["#", arg.name],
                                  }),
                                  imported_5("span", {
                                    className: local_f2bf345a.hashtagCount,
                                    children: [
                                      local_b858f1d3(arg.count),
                                      " постов",
                                    ],
                                  }),
                                ],
                              }),
                            },
                            arg.name,
                          ),
                        ),
                      }),
                    ],
                  }),
              ],
            })
          : imported_5(imported_7, {
              children: [
                imported_5("section", {
                  className: local_f2bf345a.section,
                  children: [
                    imported_5("div", {
                      className: local_f2bf345a.sectionHeader,
                      children: imported_5("h2", {
                        className: local_f2bf345a.sectionTitle,
                        children: "Топ кланов",
                      }),
                    }),
                    imported_5("div", {
                      className: local_f2bf345a.clansBadges,
                      children: local_11
                        ? imported_5(imported_10, {
                            size: "sm",
                          })
                        : local_3.length === 0
                          ? imported_5("div", {
                              className: local_f2bf345a.empty,
                              children: "Нет данных",
                            })
                          : local_3.map((arg) =>
                              imported_5(
                                "div",
                                {
                                  className: local_f2bf345a.clanBadge,
                                  children: [
                                    imported_5("span", {
                                      className: local_f2bf345a.clanEmoji,
                                      children: arg.avatar,
                                    }),
                                    imported_5("span", {
                                      className: local_f2bf345a.clanCount,
                                      children: local_b858f1d3(arg.count),
                                    }),
                                  ],
                                },
                                arg.avatar,
                              ),
                            ),
                    }),
                  ],
                }),
                imported_5("section", {
                  className: local_f2bf345a.section,
                  children: [
                    imported_5("div", {
                      className: local_f2bf345a.sectionHeader,
                      children: imported_5("h2", {
                        className: local_f2bf345a.sectionTitle,
                        children: "Популярные хештеги",
                      }),
                    }),
                    imported_5("div", {
                      className: local_f2bf345a.hashtagsList,
                      children: local_13
                        ? imported_5(imported_10, {
                            size: "sm",
                          })
                        : local_5.length === 0
                          ? imported_5("div", {
                              className: local_f2bf345a.empty,
                              children: "Нет данных",
                            })
                          : local_5.map((arg, arg_2) =>
                              imported_5(
                                "a",
                                {
                                  href: `/hashtag/${encodeURIComponent(arg.name)}`,
                                  className: local_f2bf345a.hashtagItem,
                                  children: [
                                    imported_5("span", {
                                      className: local_f2bf345a.hashtagRank,
                                      children: arg_2 + 1,
                                    }),
                                    imported_5("div", {
                                      className: local_f2bf345a.hashtagInfo,
                                      children: [
                                        imported_5("span", {
                                          className: local_f2bf345a.hashtagTag,
                                          children: ["#", arg.name],
                                        }),
                                        imported_5("span", {
                                          className:
                                            local_f2bf345a.hashtagCount,
                                          children: [
                                            local_b858f1d3(arg.count),
                                            " постов",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                arg.name,
                              ),
                            ),
                    }),
                  ],
                }),
              ],
            }),
      }),
    ],
  });
};
export { local_933b8574 as default };
