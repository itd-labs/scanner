import {
  symbol_056 as imported,
  symbol_077 as imported_2,
  symbol_064 as imported_3,
  symbol_021 as imported_4,
  symbol_002 as imported_5,
  symbol_069 as imported_6,
  symbol_073 as imported_7,
  a5 as imported_8,
  symbol_063 as imported_9,
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
const local_2b79335c = "c_picker";
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
const local_23639ded = {
  picker: local_2b79335c,
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
const local_60ab8f89 = () => {
  try {
    const local = localStorage.getItem(local_4e0d90fd);
    if (local) {
      return JSON.parse(local);
    }
    return [];
  } catch {
    return [];
  }
};
const local_7be845b7 = (arg) => {
  try {
    localStorage.setItem(
      local_4e0d90fd,
      JSON.stringify(arg.slice(0, local_f06debfc)),
    );
  } catch {}
};
const local_cc74e010 = (arg) => {
  const local = [];
  const local_2 = {};
  for (const [local, local_2] of Object.entries(arg)) {
    local_2[local] = local_2.map((arg) => {
      const local = Array.isArray(arg.s) ? arg.s : [arg.s];
      const local_2 = {
        unified: arg.u,
        short_name: local[0],
        short_names: local,
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
const local_d84aed9c = () => {
  const [local, local_2] = imported(local_0a9fda83);
  const [local_3, local_4] = imported(!local_0a9fda83);
  imported_2(() => {
    if (local_0a9fda83) {
      return;
    }
    (async () => {
      try {
        const local = await imported_3(
          () => import("../shared/emoji-data.js"),
          [],
        );
        const local_2 = local_cc74e010(local.default);
        local_0a9fda83 = local_2;
        local_2(local_2);
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
const local_4b5b3465 = (arg) => {
  const [local, local_2] = imported([]);
  const local_3 = imported_5([]);
  imported_2(() => {
    local_2(local_60ab8f89());
  }, []);
  const local_4 = imported_4(
    () =>
      local
        .slice(0, local_f06debfc)
        .map((arg) => arg.find((arg) => arg.unified === arg))
        .filter((arg) => arg !== undefined),
    [local, arg],
  );
  const local_5 = imported_6((arg) => {
    if (!local_3.current.includes(arg)) {
      local_3.current.push(arg);
    }
  }, []);
  const local_6 = imported_6(() => {
    if (local_3.current.length === 0) {
      return;
    }
    const local = local_60ab8f89();
    const local_2 = [...local_3.current];
    for (const local of local) {
      if (!local_2.includes(local)) {
        local_2.push(local);
      }
    }
    local_7be845b7(local_2.slice(0, local_f06debfc));
    local_2(local_2.slice(0, local_f06debfc));
    local_3.current = [];
  }, []);
  return {
    recentEmojis: local_4,
    addRecentEmoji: local_5,
    flushRecentEmojis: local_6,
  };
};
const local_00ddd7a4 = ({ emoji: arg, onClick: arg_2 }) =>
  imported_7("button", {
    className: local_23639ded.emojiButton,
    onClick: arg_2,
    children: imported_7("img", {
      src: local_414660d2(arg.unified),
      alt: arg.short_name,
      loading: "lazy",
    }),
  });
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
const local_ad2574f5 = ({ popup: arg, onSelect: arg_2, onClose: arg_3 }) => {
  const local = imported_5(null);
  const local_2 = local_ea93ad6a(arg.emoji);
  imported_2(() => {
    const local = (arg) => {
      if (local.current && !local.current.contains(arg.target)) {
        arg_3();
      }
    };
    document.addEventListener("mousedown", local);
    return () => document.removeEventListener("mousedown", local);
  }, [arg_3]);
  return imported_7("div", {
    ref: local,
    className: local_23639ded.skinTonePopup,
    style: {
      left: arg.x,
      top: arg.y,
    },
    children: local_2.map((arg) =>
      imported_7(
        "button",
        {
          className: local_23639ded.skinVariantButton,
          onClick: () => arg_2(arg, arg.emoji.short_name),
          children: imported_7("img", {
            src: local_414660d2(arg),
            alt: "",
            className: local_23639ded.skinVariantImage,
          }),
        },
        arg,
      ),
    ),
  });
};
const local_b6434ef4 = ({ emojis: arg, onEmojiClick: arg_2 }) =>
  imported_7("div", {
    className: local_23639ded.emojiGrid,
    children: arg.map((arg) =>
      imported_7(
        local_00ddd7a4,
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
  imported_7("div", {
    ref: arg_4,
    className: local_23639ded.categorySection,
    children: [
      imported_7("div", {
        className: local_23639ded.categoryTitle,
        children: arg,
      }),
      imported_7(local_b6434ef4, {
        emojis: arg_2,
        onEmojiClick: arg_3,
      }),
    ],
  });
const local_18921ecf = ({
  value: arg,
  onChange: arg_2,
  placeholder: arg_3 = "Search emojis...",
}) =>
  imported_7("div", {
    className: local_23639ded.searchFloating,
    children: imported_7("input", {
      type: "text",
      className: local_23639ded.searchInput,
      placeholder: arg_3,
      value: arg,
      onInput: (arg) => arg_2(arg.target.value),
    }),
  });
export const local_b5b0095e = ({
  onEmojiSelect: arg,
  onClose: arg_2,
  width: arg_3 = 280,
  height: arg_4 = 380,
  excludeCategories: arg_5 = [],
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
  } = local_d84aed9c();
  const {
    recentEmojis: local_13,
    addRecentEmoji: local_14,
    flushRecentEmojis: local_15,
  } = local_4b5b3465(local_10);
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
          arg.short_names.some((arg) => arg.toLowerCase().includes(local)),
      )
      .slice(0, 100);
  }, [local_3, local_10, arg_5]);
  const local_17 = imported_4(() => {
    if (local === "apple") {
      const local = [];
      if (local_13.length > 0) {
        local.push({
          id: "recent",
          name: "Recent",
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
            name: local.split(" & ")[0],
            emojis: local,
          });
        }
      }
      return local;
    }
    return [];
  }, [local, local_13, local_11, arg_5]);
  const local_18 = imported_6((arg, arg_2) => {
    if (local_ea93ad6a(arg).length > 1) {
      const local = arg_2.currentTarget;
      const local_2 = local_8.current?.getBoundingClientRect();
      const local_3 = local.getBoundingClientRect();
      if (local_2) {
        const local = local_3.left - local_2.left + local_3.width / 2;
        const local_2 = local_3.top - local_2.top - 60;
        local_6({
          emoji: arg,
          x: local,
          y: local_2,
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
        imageUrl: local_414660d2(arg),
      });
    },
    [arg, local_14],
  );
  const local_20 = () => {
    if (local_12) {
      return imported_7(imported_8, {});
    }
    if (local_3 && local_16) {
      if (local_16.length === 0) {
        return imported_7("div", {
          className: local_23639ded.noResults,
          children: "No emojis found",
        });
      }
      return imported_7(local_b6434ef4, {
        emojis: local_16,
        onEmojiClick: local_18,
      });
    }
    return imported_7(imported_9, {
      children: local_17.map((arg) =>
        imported_7(
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
  return imported_7("div", {
    className: local_23639ded.picker,
    style: {
      width: arg_3,
      height: arg_4,
    },
    ref: local_8,
    children: [
      local_5 &&
        imported_7(local_ad2574f5, {
          popup: local_5,
          onSelect: local_19,
          onClose: () => local_6(null),
        }),
      imported_7("div", {
        className: local_23639ded.content,
        ref: local_7,
        children: local_20(),
      }),
      imported_7(local_18921ecf, {
        value: local_3,
        onChange: local_4,
      }),
    ],
  });
};
export { local_b5b0095e as default };
