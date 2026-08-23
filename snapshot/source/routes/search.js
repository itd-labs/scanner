import {
  a6 as imported,
  a7 as imported_2,
  a8 as imported_3,
  symbol_056 as imported_4,
  symbol_002 as imported_5,
  symbol_077 as imported_6,
  symbol_069 as imported_7,
  symbol_073 as imported_8,
  a9 as imported_9,
  symbol_063 as imported_10,
  symbol_058 as imported_11,
  symbol_022 as imported_12,
  a5 as imported_13,
} from "../entry.js";
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
const local_f50950e4 = new imported_3(1, 300 * 1000);
const local_f50950e4_2 = new imported_3(1, 300 * 1000);
const local_c07ef0a9 = "data";
const local_90fe51e1 = {
  async getTrendingHashtags(arg = 10) {
    const local = local_f50950e4.get(local_c07ef0a9);
    if (local) {
      return local;
    }
    const local_2 = await imported.get(
      `${imported_2.hashtags.trending}?limit=${arg}`,
    );
    let local_3;
    if (local_2.data?.hashtags) {
      local_3 = local_2.data.hashtags;
    } else if (Array.isArray(local_2.hashtags)) {
      local_3 = local_2.hashtags;
    } else if (Array.isArray(local_2.data)) {
      local_3 = local_2.data;
    } else {
      local_3 = [];
    }
    const local_4 = local_3.map((arg) => ({
      ...arg,
      count: arg.count ?? arg.postsCount ?? 0,
    }));
    local_f50950e4.set(local_c07ef0a9, local_4);
    return local_4;
  },
  async getPopularAvatars() {
    const local = local_f50950e4_2.get(local_c07ef0a9);
    if (local) {
      return local;
    }
    const local_2 = await imported.get(imported_2.users.topClans);
    const local_3 = (local_2.clans || local_2.data || []).map((arg) => ({
      ...arg,
      count: arg.count ?? arg.memberCount ?? 0,
    }));
    local_f50950e4_2.set(local_c07ef0a9, local_3);
    return local_3;
  },
  async searchUsers(arg, arg_2 = 20, arg_3) {
    const local = new URLSearchParams({
      q: arg,
      limit: String(arg_2),
    });
    if (arg_3) {
      local.append("cursor", arg_3);
    }
    const local_2 = await imported.get(
      `${imported_2.users.search}?${local.toString()}`,
    );
    return {
      data: local_2.data?.users || local_2.users || [],
      nextCursor: null,
    };
  },
  async globalSearch(arg, arg_2 = 5, arg_3 = 5) {
    const local = new URLSearchParams({
      q: arg,
      userLimit: String(arg_2),
      hashtagLimit: String(arg_3),
    });
    const local_2 = await imported.get(
      `${imported_2.search.global}?${local.toString()}`,
    );
    const local_3 = local_2.data ?? local_2;
    return {
      users: local_3.users ?? [],
      hashtags: (local_3.hashtags ?? []).map((arg) => ({
        ...arg,
        count: arg.count ?? arg.postsCount ?? 0,
      })),
    };
  },
  async searchHashtags(arg, arg_2 = 10) {
    const local = new URLSearchParams({
      limit: String(arg_2),
    });
    if (arg) {
      local.set("q", arg);
    }
    const local_2 = await imported.get(
      `${imported_2.hashtags.search}?${local.toString()}`,
    );
    let local_3;
    if (local_2.data?.hashtags) {
      local_3 = local_2.data.hashtags;
    } else if (Array.isArray(local_2.hashtags)) {
      local_3 = local_2.hashtags;
    } else if (Array.isArray(local_2.data)) {
      local_3 = local_2.data;
    } else {
      local_3 = [];
    }
    return local_3.map((arg) => ({
      ...arg,
      count: arg.count ?? arg.postsCount ?? 0,
    }));
  },
};
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
const local_18dd68e0 = (arg) => {
  if (arg >= 1000000) {
    return `${(arg / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (arg >= 1000) {
    return `${(arg / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  }
  return arg.toString();
};
export const local_27022bee = (arg) => {
  const [local, local_2] = imported_4("");
  const [local_3, local_4] = imported_4([]);
  const [local_5, local_6] = imported_4([]);
  const [local_7, local_8] = imported_4([]);
  const [local_9, local_10] = imported_4([]);
  const [local_11, local_12] = imported_4(true);
  const [local_13, local_14] = imported_4(true);
  const [local_15, local_16] = imported_4(false);
  const local_17 = imported_5(null);
  imported_6(() => {
    (async () => {
      try {
        const [local, local_2] = await Promise.all([
          local_90fe51e1.getPopularAvatars(),
          local_90fe51e1.getTrendingHashtags(),
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
  const local_18 = imported_7(async (arg) => {
    const local = arg.trim().replace(/^@/, "").replace(/^#/, "");
    if (!local) {
      local_8([]);
      local_10([]);
      local_16(false);
      return;
    }
    local_16(true);
    try {
      const local = await local_90fe51e1.globalSearch(local, 10, 5);
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
  return imported_8("div", {
    className: local_f2bf345a.page,
    children: [
      imported_8("div", {
        className: local_f2bf345a.titleRow,
        children: imported_8("h1", {
          className: local_f2bf345a.pageTitle,
          children: "Поиск",
        }),
      }),
      imported_8("div", {
        className: local_f2bf345a.searchWrapper,
        children: [
          imported_8("div", {
            className: local_f2bf345a.searchIcon,
            children: imported_8(imported_9, {
              size: 20,
            }),
          }),
          imported_8("input", {
            type: "text",
            className: local_f2bf345a.searchInput,
            placeholder: "Поиск людей и хештегов",
            value: local,
            onInput: local_19,
          }),
        ],
      }),
      imported_8("div", {
        className: local_f2bf345a.sections,
        children: local_20
          ? imported_8(imported_10, {
              children: [
                imported_8("section", {
                  className: local_f2bf345a.section,
                  children: [
                    imported_8("div", {
                      className: local_f2bf345a.sectionHeader,
                      children: imported_8("h2", {
                        className: local_f2bf345a.sectionTitle,
                        children: "Люди",
                      }),
                    }),
                    imported_8("div", {
                      className: local_f2bf345a.usersList,
                      children: local_15
                        ? null
                        : local_7.length === 0
                          ? imported_8("div", {
                              className: local_f2bf345a.empty,
                              children: "Ничего не найдено",
                            })
                          : local_7.map((arg) =>
                              imported_8(
                                "a",
                                {
                                  href: `/@${arg.username ?? arg.userId}`,
                                  className: local_f2bf345a.userItem,
                                  children: [
                                    imported_8(imported_11, {
                                      src: arg.avatar,
                                      alt: arg.displayName,
                                      size: "md",
                                    }),
                                    imported_8("div", {
                                      className: local_f2bf345a.userInfo,
                                      children: [
                                        imported_8(imported_12, {
                                          name: arg.displayName,
                                          verified:
                                            arg.isVerified ?? arg.verified,
                                          hasNuksta: arg.hasNuksta,
                                          pin: arg.pin,
                                        }),
                                        arg.username &&
                                          imported_8("span", {
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
                  imported_8("section", {
                    className: local_f2bf345a.section,
                    children: [
                      imported_8("div", {
                        className: local_f2bf345a.sectionHeader,
                        children: imported_8("h2", {
                          className: local_f2bf345a.sectionTitle,
                          children: "Хештеги",
                        }),
                      }),
                      imported_8("div", {
                        className: local_f2bf345a.hashtagsList,
                        children: local_9.map((arg) =>
                          imported_8(
                            "a",
                            {
                              href: `/hashtag/${encodeURIComponent(arg.name)}`,
                              className: local_f2bf345a.hashtagItem,
                              children: imported_8("div", {
                                className: local_f2bf345a.hashtagInfo,
                                children: [
                                  imported_8("span", {
                                    className: local_f2bf345a.hashtagTag,
                                    children: ["#", arg.name],
                                  }),
                                  imported_8("span", {
                                    className: local_f2bf345a.hashtagCount,
                                    children: [
                                      local_18dd68e0(arg.count),
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
          : imported_8(imported_10, {
              children: [
                imported_8("section", {
                  className: local_f2bf345a.section,
                  children: [
                    imported_8("div", {
                      className: local_f2bf345a.sectionHeader,
                      children: imported_8("h2", {
                        className: local_f2bf345a.sectionTitle,
                        children: "Топ кланов",
                      }),
                    }),
                    imported_8("div", {
                      className: local_f2bf345a.clansBadges,
                      children: local_11
                        ? imported_8(imported_13, {
                            size: "sm",
                          })
                        : local_3.length === 0
                          ? imported_8("div", {
                              className: local_f2bf345a.empty,
                              children: "Нет данных",
                            })
                          : local_3.map((arg) =>
                              imported_8(
                                "div",
                                {
                                  className: local_f2bf345a.clanBadge,
                                  children: [
                                    imported_8("span", {
                                      className: local_f2bf345a.clanEmoji,
                                      children: arg.avatar,
                                    }),
                                    imported_8("span", {
                                      className: local_f2bf345a.clanCount,
                                      children: local_18dd68e0(arg.count),
                                    }),
                                  ],
                                },
                                arg.avatar,
                              ),
                            ),
                    }),
                  ],
                }),
                imported_8("section", {
                  className: local_f2bf345a.section,
                  children: [
                    imported_8("div", {
                      className: local_f2bf345a.sectionHeader,
                      children: imported_8("h2", {
                        className: local_f2bf345a.sectionTitle,
                        children: "Популярные хештеги",
                      }),
                    }),
                    imported_8("div", {
                      className: local_f2bf345a.hashtagsList,
                      children: local_13
                        ? imported_8(imported_13, {
                            size: "sm",
                          })
                        : local_5.length === 0
                          ? imported_8("div", {
                              className: local_f2bf345a.empty,
                              children: "Нет данных",
                            })
                          : local_5.map((arg, arg_2) =>
                              imported_8(
                                "a",
                                {
                                  href: `/hashtag/${encodeURIComponent(arg.name)}`,
                                  className: local_f2bf345a.hashtagItem,
                                  children: [
                                    imported_8("span", {
                                      className: local_f2bf345a.hashtagRank,
                                      children: arg_2 + 1,
                                    }),
                                    imported_8("div", {
                                      className: local_f2bf345a.hashtagInfo,
                                      children: [
                                        imported_8("span", {
                                          className: local_f2bf345a.hashtagTag,
                                          children: ["#", arg.name],
                                        }),
                                        imported_8("span", {
                                          className:
                                            local_f2bf345a.hashtagCount,
                                          children: [
                                            local_18dd68e0(arg.count),
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
export { local_27022bee as default };
