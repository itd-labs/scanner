import {
  symbol_222 as imported,
  symbol_282 as imported_2,
  symbol_138 as imported_3,
  symbol_036 as imported_4,
  symbol_002 as imported_5,
  symbol_291 as imported_6,
  symbol_112 as imported_7,
  symbol_113 as imported_8,
  symbol_295 as imported_9,
  symbol_074 as imported_10,
  symbol_020 as imported_11,
} from "../entry.js";
const local_2b79335c = "c_picker";
const local_65939b73 = "c_nativeEmoji";
const local_9c08f813 = "c_searchFloating";
const local_7fe71380 = "c_searchInput";
const local_ebf2866d = "c_skinTonePopup";
const local_946a7751 = "c_skinVariantButton";
const local_09f82399 = "c_skinVariantImage";
const local_4d84dbb6 = "c_content";
const local_f9ab355a = "c_categoryTitle";
const local_2d9c7e7a = "c_emojiGrid";
const local_93b33afa = "c_emojiButton";
const local_39ba1510 = "c_noResults";
const local_ef2e066d = {
  picker: local_2b79335c,
  nativeEmoji: local_65939b73,
  searchFloating: local_9c08f813,
  searchInput: local_7fe71380,
  skinTonePopup: local_ebf2866d,
  skinVariantButton: local_946a7751,
  skinVariantImage: local_09f82399,
  content: local_4d84dbb6,
  categoryTitle: local_f9ab355a,
  emojiGrid: local_2d9c7e7a,
  emojiButton: local_93b33afa,
  noResults: local_39ba1510,
};
const local_1ac9d2ca = [
  "Smileys & Emotion",
  "People & Body",
  "Animals & Nature",
  "Food & Drink",
  "Travel & Places",
  "Activities",
  "Objects",
  "Symbols",
  "Flags",
];
const local_bce1a7f0 = ["", "1F3FB", "1F3FC", "1F3FD", "1F3FE", "1F3FF"];
const local_4e0d90fd = "emoji-picker-recent";
const local_f06debfc = 32;
const local_e724dfd3 = (arg) => {
  try {
    return String.fromCodePoint(
      ...arg.split("-").map((arg) => parseInt(arg, 16)),
    );
  } catch {
    return "";
  }
};
const local_414660d2 = (arg) =>
  `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@latest/img/apple/64/${arg.toLowerCase()}.png`;
const local_52c3a44c = (arg) => {
  if (arg) {
    return `${local_4e0d90fd}:${encodeURIComponent(arg)}`;
  }
  return local_4e0d90fd;
};
const local_076c27f5 = (arg) => {
  try {
    const local = localStorage.getItem(local_52c3a44c(arg));
    const local_2 = local ? JSON.parse(local) : [];
    if (Array.isArray(local_2)) {
      return local_2
        .filter(
          (arg) =>
            typeof arg === "string" &&
            /^[0-9a-f]{1,6}(?:-[0-9a-f]{1,6}){0,15}$/i.test(arg),
        )
        .slice(0, local_f06debfc);
    }
    return [];
  } catch {
    return [];
  }
};
const local_966eb2af = (arg, arg_2) => {
  try {
    localStorage.setItem(
      local_52c3a44c(arg_2),
      JSON.stringify(arg.slice(0, local_f06debfc)),
    );
  } catch {}
};
const local_42891504 = (arg, arg_2) => {
  const local = [];
  const local_2 = {};
  for (const [local, local_2] of Object.entries(arg)) {
    local_2[local] = local_2.map((arg) => {
      const local = Array.isArray(arg.s) ? arg.s : [arg.s];
      const local_2 = {
        unified: arg.u,
        short_name: arg_2[arg.u]?.[0] ?? local[0],
        short_names: [...local, ...(arg_2[arg.u] ?? [])],
        category: local,
        skin_variations: arg.v,
      };
      local.push(local_2);
      return local_2;
    });
  }
  return {
    all: local,
    byCategory: local_2,
  };
};
let local_0a9fda83 = null;
const local_0ba72c5a = () => {
  const [local, local_2] = imported(local_0a9fda83);
  const [local_3, local_4] = imported(!local_0a9fda83);
  imported_2(() => {
    if (local_0a9fda83) {
      return;
    }
    (async () => {
      try {
        const [local, local_2] = await Promise.all([
          imported_3(() => import("../shared/emoji-data.js"), []),
          imported_3(() => import("../shared/emoji-ru.js"), []),
        ]);
        const local_3 = local_42891504(local.default, local_2.default);
        local_0a9fda83 = local_3;
        local_2(local_3);
      } catch (error) {
        console.error("Failed to load emoji data:", error);
      } finally {
        local_4(false);
      }
    })();
  }, []);
  return imported_4(
    () => ({
      all: local?.all ?? [],
      byCategory: local?.byCategory ?? {},
      isLoading: local_3,
    }),
    [local, local_3],
  );
};
const local_bb8842aa = (arg, arg_2) => {
  const [local, local_2] = imported([]);
  const local_3 = imported_5({
    scope: arg_2,
    items: [],
  });
  imported_2(() => {
    local_2(local_076c27f5(arg_2));
  }, [arg_2]);
  const local_4 = imported_4(
    () =>
      local
        .slice(0, local_f06debfc)
        .map((arg) => {
          const local = arg.find(
            (arg) =>
              arg.unified === arg ||
              Object.values(arg.skin_variations ?? {}).includes(arg),
          );
          return (
            local &&
            (local.unified === arg
              ? local
              : {
                  ...local,
                  unified: arg,
                  skin_variations: undefined,
                })
          );
        })
        .filter((arg) => arg !== undefined),
    [local, arg],
  );
  const local_5 = imported_6(
    (arg) => {
      if (local_3.current.scope !== arg_2) {
        local_3.current = {
          scope: arg_2,
          items: [],
        };
      }
      if (!local_3.current.items.includes(arg)) {
        local_3.current.items.unshift(arg);
      }
    },
    [arg_2],
  );
  const local_6 = imported_6(() => {
    if (local_3.current.scope !== arg_2 || local_3.current.items.length === 0) {
      return;
    }
    const local = local_076c27f5(arg_2);
    const local_2 = [...local_3.current.items];
    for (const local of local) {
      if (!local_2.includes(local)) {
        local_2.push(local);
      }
    }
    local_966eb2af(local_2.slice(0, local_f06debfc), arg_2);
    local_2(local_2.slice(0, local_f06debfc));
    local_3.current = {
      scope: arg_2,
      items: [],
    };
  }, [arg_2]);
  return {
    recentEmojis: local_4,
    addRecentEmoji: local_5,
    flushRecentEmojis: local_6,
  };
};
const local_0cd6f1d4 = imported_7(false);
const local_5eb1eb41 = ({ emoji: arg, onClick: arg_2 }) => {
  const local = imported_8(local_0cd6f1d4);
  return imported_9("button", {
    type: "button",
    className: local_ef2e066d.emojiButton,
    onClick: arg_2,
    "aria-label": arg.short_name,
    title: arg.short_name,
    children: local
      ? imported_9("span", {
          className: local_ef2e066d.nativeEmoji,
          "aria-hidden": "true",
          children: local_e724dfd3(arg.unified),
        })
      : imported_9("img", {
          src: local_414660d2(arg.unified),
          alt: arg.short_name,
          loading: "lazy",
        }),
  });
};
const local_ea93ad6a = (arg) => {
  const local = [arg.unified];
  if (arg.skin_variations) {
    for (const local of local_bce1a7f0.slice(1)) {
      const local = arg.skin_variations[local];
      if (local) {
        local.push(local);
      }
    }
  }
  return local;
};
const local_1ea2a949 = ({ popup: arg, onSelect: arg_2, onClose: arg_3 }) => {
  const local = imported_8(local_0cd6f1d4);
  const local_2 = imported_5(null);
  const local_3 = local_ea93ad6a(arg.emoji);
  imported_2(() => {
    const local = (arg) => {
      if (local_2.current && !local_2.current.contains(arg.target)) {
        arg_3();
      }
    };
    document.addEventListener("mousedown", local);
    return () => document.removeEventListener("mousedown", local);
  }, [arg_3]);
  return imported_9("div", {
    ref: local_2,
    className: local_ef2e066d.skinTonePopup,
    style: {
      left: arg.x,
      top: arg.y,
    },
    children: local_3.map((arg, arg_2) =>
      imported_9(
        "button",
        {
          type: "button",
          "aria-label": [
            "Без оттенка кожи",
            "Светлый тон кожи",
            "Умеренно светлый тон кожи",
            "Средний тон кожи",
            "Умеренно тёмный тон кожи",
            "Тёмный тон кожи",
          ][arg_2],
          className: local_ef2e066d.skinVariantButton,
          onClick: () => arg_2(arg, arg.emoji.short_name),
          children: local
            ? imported_9("span", {
                className: local_ef2e066d.nativeEmoji,
                "aria-hidden": "true",
                children: local_e724dfd3(arg),
              })
            : imported_9("img", {
                src: local_414660d2(arg),
                alt: "",
                className: local_ef2e066d.skinVariantImage,
              }),
        },
        arg,
      ),
    ),
  });
};
const local_b6434ef4 = ({ emojis: arg, onEmojiClick: arg_2 }) =>
  imported_9("div", {
    className: local_ef2e066d.emojiGrid,
    children: arg.map((arg) =>
      imported_9(
        local_5eb1eb41,
        {
          emoji: arg,
          onClick: (arg) => arg_2(arg, arg),
        },
        arg.unified,
      ),
    ),
  });
const local_58182039 = ({
  name: arg,
  emojis: arg_2,
  onEmojiClick: arg_3,
  sectionRef: arg_4,
}) =>
  imported_9("div", {
    ref: arg_4,
    className: local_ef2e066d.categorySection,
    children: [
      imported_9("div", {
        className: local_ef2e066d.categoryTitle,
        children: arg,
      }),
      imported_9(local_b6434ef4, {
        emojis: arg_2,
        onEmojiClick: arg_3,
      }),
    ],
  });
const local_9808ec9d = ({
  value: arg,
  onChange: arg_2,
  placeholder: arg_3 = "Поиск эмодзи",
}) =>
  imported_9("div", {
    className: local_ef2e066d.searchFloating,
    children: imported_9("input", {
      type: "text",
      className: local_ef2e066d.searchInput,
      placeholder: arg_3,
      "aria-label": arg_3,
      value: arg,
      onInput: (arg) => arg_2(arg.target.value),
    }),
  });
const local_1a71c12e = {
  "Smileys & Emotion": "Смайлы и эмоции",
  "People & Body": "Люди и жесты",
  "Animals & Nature": "Животные и природа",
  "Food & Drink": "Еда и напитки",
  "Travel & Places": "Путешествия",
  Activities: "Занятия",
  Objects: "Предметы",
  Symbols: "Символы",
  Flags: "Флаги",
};
export const local_c938f6b5 = ({
  onEmojiSelect: arg,
  onClose: arg_2,
  width: arg_3 = 280,
  height: arg_4 = 380,
  excludeCategories: arg_5 = [],
  native: arg_6 = false,
  recentScope: arg_7,
}) => {
  const [local, local_2] = imported("apple");
  const [local_3, local_4] = imported("");
  const [local_5, local_6] = imported(null);
  const local_7 = imported_5(null);
  const local_8 = imported_5(null);
  const local_9 = imported_5({});
  const {
    all: local_10,
    byCategory: local_11,
    isLoading: local_12,
  } = local_0ba72c5a();
  const {
    recentEmojis: local_13,
    addRecentEmoji: local_14,
    flushRecentEmojis: local_15,
  } = local_bb8842aa(local_10, arg_7);
  imported_2(
    () => () => {
      local_15();
      arg_2?.();
    },
    [local_15, arg_2],
  );
  const local_16 = imported_4(() => {
    if (!local_3.trim()) {
      return null;
    }
    const local = local_3.toLowerCase();
    return local_10
      .filter(
        (arg) =>
          !arg_5.includes(arg.category) &&
          (arg.short_names.some((arg) => arg.toLowerCase().includes(local)) ||
            local_e724dfd3(arg.unified).includes(local)),
      )
      .slice(0, 100);
  }, [local_3, local_10, arg_5]);
  const local_17 = imported_4(() => {
    if (local === "apple") {
      const local = [];
      if (local_13.length > 0) {
        local.push({
          id: "recent",
          name: "Недавние",
          emojis: local_13,
        });
      }
      for (const local of local_1ac9d2ca) {
        if (arg_5.includes(local)) {
          continue;
        }
        const local = local_11[local] || [];
        if (local.length !== 0) {
          local.push({
            id: local,
            name: local_1a71c12e[local] ?? local,
            emojis: local,
          });
        }
      }
      return local;
    }
    return [];
  }, [local, local_13, local_11, arg_5]);
  const local_18 = imported_6((arg, arg_2) => {
    const local = local_ea93ad6a(arg);
    if (local.length > 1) {
      const local = arg_2.currentTarget;
      const local_2 = local_8.current?.getBoundingClientRect();
      const local_3 = local.getBoundingClientRect();
      if (local_2) {
        const local = local.length * 36 + (local.length - 1) * 4 + 16;
        const local_2 = Math.max(
          local / 2 + 4,
          Math.min(
            local_2.width - local / 2 - 4,
            local_3.left - local_2.left + local_3.width / 2,
          ),
        );
        const local_3 = Math.max(
          4,
          Math.min(local_2.height - 56, local_3.top - local_2.top - 60),
        );
        local_6({
          emoji: arg,
          x: local_2,
          y: local_3,
        });
      }
      return;
    }
    local_19(arg.unified, arg.short_name);
  }, []);
  const local_19 = imported_6(
    (arg, arg_2) => {
      local_14(arg);
      local_6(null);
      arg({
        unified: arg,
        emoji: local_e724dfd3(arg),
        name: arg_2,
        imageUrl: arg_6 ? "" : local_414660d2(arg),
      });
    },
    [arg, local_14, arg_6],
  );
  const local_20 = () => {
    if (local_12) {
      return imported_9(imported_10, {});
    }
    if (local_3 && local_16) {
      if (local_16.length === 0) {
        return imported_9("div", {
          className: local_ef2e066d.noResults,
          children: "Ничего не найдено",
        });
      }
      return imported_9(local_b6434ef4, {
        emojis: local_16,
        onEmojiClick: local_18,
      });
    }
    return imported_9(imported_11, {
      children: local_17.map((arg) =>
        imported_9(
          local_58182039,
          {
            name: arg.name,
            emojis: arg.emojis,
            onEmojiClick: local_18,
            sectionRef: (arg) => {
              local_9.current[arg.id] = arg;
            },
          },
          arg.id,
        ),
      ),
    });
  };
  return imported_9(local_0cd6f1d4.Provider, {
    value: arg_6,
    children: imported_9("div", {
      className: local_ef2e066d.picker,
      role: "dialog",
      "aria-label": "Выбор эмодзи",
      style: {
        width: arg_3,
        height: arg_4,
      },
      ref: local_8,
      children: [
        local_5 &&
          imported_9(local_1ea2a949, {
            popup: local_5,
            onSelect: local_19,
            onClose: () => local_6(null),
          }),
        imported_9("div", {
          className: local_ef2e066d.content,
          ref: local_7,
          children: local_20(),
        }),
        imported_9(local_9808ec9d, {
          value: local_3,
          onChange: local_4,
        }),
      ],
    }),
  });
};
export { local_c938f6b5 as default };
