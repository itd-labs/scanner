import {
  symbol_076 as imported,
  symbol_002 as imported_2,
  symbol_080 as imported_3,
  symbol_093 as imported_4,
  symbol_020 as imported_5,
  symbol_001 as imported_6,
} from "../entry.js";
import { I as imported_7 } from "../components/icon-chevron-left.js";
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
async function fn_2883989d(arg) {
  const local = await fetch(arg, {
    credentials: "include",
    cache: "no-store",
  });
  if (!local.ok) {
    throw new Error(
      local.status === 404
        ? "Документ не найден"
        : "Не удалось загрузить документ",
    );
  }
  return local.json();
}
const local_4aa5e69b = {
  async list() {
    return (await fn_2883989d("/api/legal-documents?scope=social")).documents;
  },
  async current(arg) {
    return (
      await fn_2883989d(
        `/api/legal-documents/social/${encodeURIComponent(arg)}`,
      )
    ).document;
  },
  async versions(arg) {
    return (
      await fn_2883989d(
        `/api/legal-documents/social/${encodeURIComponent(arg)}/versions`,
      )
    ).versions;
  },
  async version(arg, arg_2) {
    return (
      await fn_2883989d(
        `/api/legal-documents/social/${encodeURIComponent(arg)}/versions/${encodeURIComponent(arg_2)}`,
      )
    ).document;
  },
};
function fn_0a37aa60(arg) {
  const local = new Date(`${arg}T00:00:00Z`);
  if (Number.isNaN(local.getTime())) {
    return arg;
  }
  return local.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
const local_ef251bc6 = "c_page";
const local_f7881c4d = "c_back";
const local_9d9cf508 = "c_title";
const local_c9b678b1 = "c_lead";
const local_ceae4223 = "c_date";
const local_109522b2 = "c_summary";
const local_d236b101 = "c_notice";
const local_e9ccbd22 = "c_list";
const local_ab7982d5 = "c_row";
const local_059dedc1 = "c_rowMain";
const local_0337ef24 = "c_rowTitle";
const local_afa00517 = "c_rowDate";
const local_8c4f8b4b = "c_actions";
const local_406cc78f = "c_action";
const local_e148243e = "c_body";
const local_ea4d43e0 = "c_lines";
const local_3f0627c8 = "c_state";
const local_c876bc81 = "c_retry";
const local_474661d1 = {
  page: local_ef251bc6,
  back: local_f7881c4d,
  title: local_9d9cf508,
  lead: local_c9b678b1,
  date: local_ceae4223,
  summary: local_109522b2,
  notice: local_d236b101,
  list: local_e9ccbd22,
  row: local_ab7982d5,
  rowMain: local_059dedc1,
  rowTitle: local_0337ef24,
  rowDate: local_afa00517,
  actions: local_8c4f8b4b,
  action: local_406cc78f,
  body: local_e148243e,
  lines: local_ea4d43e0,
  state: local_3f0627c8,
  retry: local_c876bc81,
};
function fn_64d9bb62({ fallback: arg = "/legal" }) {
  return imported_4("button", {
    className: local_474661d1.back,
    onClick: () => {
      if (window.history.length > 1) {
        return window.history.back();
      }
      return imported_6(arg);
    },
    children: [
      imported_4(imported_7, {
        size: 20,
      }),
      "Назад",
    ],
  });
}
function fn_d9b37b1a({ error: arg, retry: arg_2 }) {
  return imported_4("div", {
    className: local_474661d1.state,
    children: [
      arg ?? "Загрузка...",
      arg_2 &&
        imported_4("div", {
          children: imported_4("button", {
            className: local_474661d1.retry,
            onClick: arg_2,
            children: "Попробовать снова",
          }),
        }),
    ],
  });
}
function fn_e36fc23d(arg) {
  if (
    !arg.includes("../site/index.html") &&
    /^(https?:\/\/|mailto:|\/(?!\/))/i.test(arg)
  ) {
    return arg;
  }
  return "#";
}
function fn_8200ac39(arg) {
  const local = [];
  const local_2 = /\[([^\]]+)]\(([^)]+)\)/g;
  let local_3 = 0;
  for (const local of arg.matchAll(local_2)) {
    const local = local.index ?? 0;
    if (local > local_3) {
      local.push(arg.slice(local_3, local));
    }
    const local_2 = fn_e36fc23d(local[2]);
    local.push(
      imported_4("a", {
        href: local_2,
        target: local_2.startsWith("http") ? "_blank" : undefined,
        rel: local_2.startsWith("http") ? "noopener noreferrer" : undefined,
        children: local[1],
      }),
    );
    local_3 = local + local[0].length;
  }
  if (local_3 < arg.length) {
    local.push(arg.slice(local_3));
  }
  return local;
}
function fn_c052847e({ block: arg }) {
  if (arg.type === "heading") {
    if (arg.level === 3) {
      return imported_4("h3", {
        children: arg.text,
      });
    }
    return imported_4("h2", {
      children: arg.text,
    });
  }
  if (arg.type === "list") {
    return imported_4("ul", {
      children: arg.items.map((arg, arg_2) =>
        imported_4(
          "li",
          {
            children: fn_8200ac39(arg),
          },
          arg_2,
        ),
      ),
    });
  }
  if (arg.type === "lines") {
    return imported_4("div", {
      className: local_474661d1.lines,
      children: arg.items.map((arg, arg_2) =>
        imported_4(
          "span",
          {
            children: fn_8200ac39(arg),
          },
          arg_2,
        ),
      ),
    });
  }
  return imported_4("p", {
    children: fn_8200ac39(arg.text),
  });
}
export function fn_88dd55f3({ path: arg }) {
  const [local, local_2] = imported(null);
  const [local_3, local_4] = imported("");
  const local_5 = imported_2(0);
  const local_6 = () => {
    const local = ++local_5.current;
    local_4("");
    local_4aa5e69b
      .list()
      .then((arg) => {
        if (local === local_5.current) {
          local_2(arg);
        }
      })
      .catch((arg) => {
        if (local === local_5.current) {
          local_4(arg.message);
        }
      });
  };
  imported_3(() => {
    local_6();
    return () => {
      local_5.current++;
    };
  }, []);
  return imported_4("main", {
    className: local_474661d1.page,
    "data-route": arg,
    children: [
      imported_4(fn_64d9bb62, {
        fallback: "../site/index.html",
      }),
      imported_4("h1", {
        className: local_474661d1.title,
        children: "Правовые документы",
      }),
      imported_4("p", {
        className: local_474661d1.lead,
        children:
          "Здесь собраны действующие документы сервиса и предыдущие редакции.",
      }),
      local_3
        ? imported_4(fn_d9b37b1a, {
            error: local_3,
            retry: local_6,
          })
        : local
          ? imported_4("ul", {
              className: local_474661d1.list,
              children: local.map((arg) =>
                imported_4(
                  "li",
                  {
                    children: imported_4("a", {
                      className: local_474661d1.row,
                      href: `/legal/${arg.slug}`,
                      children: [
                        imported_4("span", {
                          className: local_474661d1.rowMain,
                          children: [
                            imported_4("span", {
                              className: local_474661d1.rowTitle,
                              children: arg.title,
                            }),
                            imported_4("span", {
                              className: local_474661d1.summary,
                              children: arg.summary,
                            }),
                          ],
                        }),
                        imported_4("span", {
                          className: local_474661d1.rowDate,
                          children: [
                            "Редакция от ",
                            fn_0a37aa60(arg.documentDate ?? arg.effectiveAt),
                          ],
                        }),
                      ],
                    }),
                  },
                  arg.slug,
                ),
              ),
            })
          : imported_4(fn_d9b37b1a, {}),
    ],
  });
}
export function fn_eacab2e3({ slug: arg = "", version: arg_2 }) {
  const [local, local_2] = imported(null);
  const [local_3, local_4] = imported(null);
  const [local_5, local_6] = imported("");
  const local_7 = imported_2(0);
  const local_8 = () => {
    const local = ++local_7.current;
    local_6("");
    local_2(null);
    local_4(null);
    const local_2 = arg_2
      ? local_4aa5e69b.version(arg, arg_2)
      : local_4aa5e69b.current(arg);
    Promise.all([local_2, local_4aa5e69b.versions(arg)])
      .then(([arg, arg_2]) => {
        if (local === local_7.current) {
          local_2(arg);
          local_4(arg_2.find((arg) => arg.current) ?? null);
        }
      })
      .catch((arg) => {
        if (local === local_7.current) {
          local_6(arg.message);
        }
      });
  };
  imported_3(() => {
    local_8();
    return () => {
      local_7.current++;
    };
  }, [arg, arg_2]);
  const local_9 = !!(local && local_3 && local.version !== local_3.version);
  return imported_4("main", {
    className: local_474661d1.page,
    children: [
      imported_4(fn_64d9bb62, {}),
      local_5
        ? imported_4(fn_d9b37b1a, {
            error: local_5,
            retry: local_8,
          })
        : local
          ? imported_4(imported_5, {
              children: [
                imported_4("h1", {
                  className: local_474661d1.title,
                  children: local.title,
                }),
                imported_4("p", {
                  className: local_474661d1.date,
                  children: [
                    "Редакция от ",
                    fn_0a37aa60(local.documentDate ?? local.effectiveAt),
                    " · версия ",
                    local.version,
                  ],
                }),
                local_9 &&
                  imported_4("div", {
                    className: local_474661d1.notice,
                    children: [
                      "Вы открыли предыдущую редакцию документа. ",
                      imported_4("a", {
                        href: `/legal/${arg}`,
                        children: "Перейти к действующей редакции",
                      }),
                      ".",
                    ],
                  }),
                local.publishedAt &&
                  imported_4("p", {
                    className: local_474661d1.date,
                    children: [
                      "Опубликовано ",
                      fn_0a37aa60(local.publishedAt.slice(0, 10)),
                    ],
                  }),
                imported_4("div", {
                  className: local_474661d1.actions,
                  children: imported_4("a", {
                    className: local_474661d1.action,
                    href: `/legal/${arg}/history`,
                    children: "История документа",
                  }),
                }),
                imported_4("article", {
                  className: local_474661d1.body,
                  children: local.blocks.map((arg, arg_2) =>
                    imported_4(
                      fn_c052847e,
                      {
                        block: arg,
                      },
                      arg_2,
                    ),
                  ),
                }),
              ],
            })
          : imported_4(fn_d9b37b1a, {}),
    ],
  });
}
export function fn_934fd06e({ slug: arg = "" }) {
  const [local, local_2] = imported(null);
  const [local_3, local_4] = imported("");
  const local_5 = imported_2(0);
  const local_6 = () => {
    const local = ++local_5.current;
    local_4("");
    local_2(null);
    local_4aa5e69b
      .versions(arg)
      .then((arg) => {
        if (local === local_5.current) {
          local_2(arg);
        }
      })
      .catch((arg) => {
        if (local === local_5.current) {
          local_4(arg.message);
        }
      });
  };
  imported_3(() => {
    local_6();
    return () => {
      local_5.current++;
    };
  }, [arg]);
  const local_7 = local?.[0]?.title ?? "История документа";
  return imported_4("main", {
    className: local_474661d1.page,
    children: [
      imported_4(fn_64d9bb62, {
        fallback: `/legal/${arg}`,
      }),
      imported_4("h1", {
        className: local_474661d1.title,
        children: local_7,
      }),
      imported_4("p", {
        className: local_474661d1.lead,
        children: "История редакций документа",
      }),
      local_3
        ? imported_4(fn_d9b37b1a, {
            error: local_3,
            retry: local_6,
          })
        : local
          ? imported_4("ul", {
              className: local_474661d1.list,
              children: local.map((arg) =>
                imported_4(
                  "li",
                  {
                    children: imported_4("a", {
                      className: local_474661d1.row,
                      href: arg.current
                        ? `/legal/${arg}`
                        : `/legal/${arg}/versions/${arg.version}`,
                      children: [
                        imported_4("span", {
                          className: local_474661d1.rowTitle,
                          children: arg.current
                            ? "Действующая редакция"
                            : `Редакция ${arg.version}`,
                        }),
                        imported_4("span", {
                          className: local_474661d1.rowDate,
                          children: fn_0a37aa60(
                            arg.documentDate ?? arg.effectiveAt,
                          ),
                        }),
                      ],
                    }),
                  },
                  arg.version,
                ),
              ),
            })
          : imported_4(fn_d9b37b1a, {}),
    ],
  });
}
