import {
  symbol_064 as imported,
  symbol_068 as imported_2,
  symbol_081 as imported_3,
  symbol_020 as imported_4,
  symbol_065 as imported_5,
} from "../entry.js";
import { I as imported_6 } from "../components/icon-chevron-left.js";
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
const local_8934f982 = {
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
  return imported_3("button", {
    className: local_474661d1.back,
    onClick: () => {
      if (window.history.length > 1) {
        return window.history.back();
      }
      return imported_5(arg);
    },
    children: [
      imported_3(imported_6, {
        size: 20,
      }),
      "Назад",
    ],
  });
}
function fn_d9b37b1a({ error: arg, retry: arg_2 }) {
  return imported_3("div", {
    className: local_474661d1.state,
    children: [
      arg ?? "Загрузка...",
      arg_2 &&
        imported_3("div", {
          children: imported_3("button", {
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
      imported_3("a", {
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
      return imported_3("h3", {
        children: arg.text,
      });
    }
    return imported_3("h2", {
      children: arg.text,
    });
  }
  if (arg.type === "list") {
    return imported_3("ul", {
      children: arg.items.map((arg, arg_2) =>
        imported_3(
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
    return imported_3("div", {
      className: local_474661d1.lines,
      children: arg.items.map((arg, arg_2) =>
        imported_3(
          "span",
          {
            children: fn_8200ac39(arg),
          },
          arg_2,
        ),
      ),
    });
  }
  return imported_3("p", {
    children: fn_8200ac39(arg.text),
  });
}
export function fn_7ff7e238({ path: arg }) {
  const [local, local_2] = imported(null);
  const [local_3, local_4] = imported("");
  const [local_5, local_6] = imported(0);
  imported_2(() => {
    let local = true;
    local_8934f982
      .list()
      .then((arg) => {
        if (local) {
          local_4("");
          local_2(arg);
        }
      })
      .catch((arg) => {
        if (local) {
          local_4(arg.message);
        }
      });
    return () => {
      local = false;
      local_4("");
      local_2(null);
    };
  }, [local_5]);
  return imported_3("main", {
    className: local_474661d1.page,
    "data-route": arg,
    children: [
      imported_3(fn_64d9bb62, {
        fallback: "../site/index.html",
      }),
      imported_3("h1", {
        className: local_474661d1.title,
        children: "Правовые документы",
      }),
      imported_3("p", {
        className: local_474661d1.lead,
        children:
          "Здесь собраны действующие документы сервиса и предыдущие редакции.",
      }),
      local_3
        ? imported_3(fn_d9b37b1a, {
            error: local_3,
            retry: () => local_6((arg) => arg + 1),
          })
        : local
          ? imported_3("ul", {
              className: local_474661d1.list,
              children: local.map((arg) =>
                imported_3(
                  "li",
                  {
                    children: imported_3("a", {
                      className: local_474661d1.row,
                      href: `/legal/${arg.slug}`,
                      children: [
                        imported_3("span", {
                          className: local_474661d1.rowMain,
                          children: [
                            imported_3("span", {
                              className: local_474661d1.rowTitle,
                              children: arg.title,
                            }),
                            imported_3("span", {
                              className: local_474661d1.summary,
                              children: arg.summary,
                            }),
                          ],
                        }),
                        imported_3("span", {
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
          : imported_3(fn_d9b37b1a, {}),
    ],
  });
}
export function fn_0ebca6b4({ slug: arg = "", version: arg_2 }) {
  const [local, local_2] = imported(null);
  const [local_3, local_4] = imported(null);
  const [local_5, local_6] = imported("");
  const [local_7, local_8] = imported(0);
  imported_2(() => {
    let local = true;
    const local_2 = arg_2
      ? local_8934f982.version(arg, arg_2)
      : local_8934f982.current(arg);
    Promise.all([local_2, local_8934f982.versions(arg)])
      .then(([arg, arg_2]) => {
        if (local) {
          local_6("");
          local_2(arg);
          local_4(arg_2.find((arg) => arg.current) ?? null);
        }
      })
      .catch((arg) => {
        if (local) {
          local_6(arg.message);
        }
      });
    return () => {
      local = false;
      local_6("");
      local_2(null);
      local_4(null);
    };
  }, [arg, arg_2, local_7]);
  const local_9 = !!(local && local_3 && local.version !== local_3.version);
  return imported_3("main", {
    className: local_474661d1.page,
    children: [
      imported_3(fn_64d9bb62, {}),
      local_5
        ? imported_3(fn_d9b37b1a, {
            error: local_5,
            retry: () => local_8((arg) => arg + 1),
          })
        : local
          ? imported_3(imported_4, {
              children: [
                imported_3("h1", {
                  className: local_474661d1.title,
                  children: local.title,
                }),
                imported_3("p", {
                  className: local_474661d1.date,
                  children: [
                    "Редакция от ",
                    fn_0a37aa60(local.documentDate ?? local.effectiveAt),
                    " · версия ",
                    local.version,
                  ],
                }),
                local_9 &&
                  imported_3("div", {
                    className: local_474661d1.notice,
                    children: [
                      "Вы открыли предыдущую редакцию документа. ",
                      imported_3("a", {
                        href: `/legal/${arg}`,
                        children: "Перейти к действующей редакции",
                      }),
                      ".",
                    ],
                  }),
                local.publishedAt &&
                  imported_3("p", {
                    className: local_474661d1.date,
                    children: [
                      "Опубликовано ",
                      fn_0a37aa60(local.publishedAt.slice(0, 10)),
                    ],
                  }),
                imported_3("div", {
                  className: local_474661d1.actions,
                  children: imported_3("a", {
                    className: local_474661d1.action,
                    href: `/legal/${arg}/history`,
                    children: "История документа",
                  }),
                }),
                imported_3("article", {
                  className: local_474661d1.body,
                  children: local.blocks.map((arg, arg_2) =>
                    imported_3(
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
          : imported_3(fn_d9b37b1a, {}),
    ],
  });
}
export function fn_3dc2cf77({ slug: arg = "" }) {
  const [local, local_2] = imported(null);
  const [local_3, local_4] = imported("");
  const [local_5, local_6] = imported(0);
  imported_2(() => {
    let local = true;
    local_8934f982
      .versions(arg)
      .then((arg) => {
        if (local) {
          local_4("");
          local_2(arg);
        }
      })
      .catch((arg) => {
        if (local) {
          local_4(arg.message);
        }
      });
    return () => {
      local = false;
      local_4("");
      local_2(null);
    };
  }, [arg, local_5]);
  const local_7 = local?.[0]?.title ?? "История документа";
  return imported_3("main", {
    className: local_474661d1.page,
    children: [
      imported_3(fn_64d9bb62, {
        fallback: `/legal/${arg}`,
      }),
      imported_3("h1", {
        className: local_474661d1.title,
        children: local_7,
      }),
      imported_3("p", {
        className: local_474661d1.lead,
        children: "История редакций документа",
      }),
      local_3
        ? imported_3(fn_d9b37b1a, {
            error: local_3,
            retry: () => local_6((arg) => arg + 1),
          })
        : local
          ? imported_3("ul", {
              className: local_474661d1.list,
              children: local.map((arg) =>
                imported_3(
                  "li",
                  {
                    children: imported_3("a", {
                      className: local_474661d1.row,
                      href: arg.current
                        ? `/legal/${arg}`
                        : `/legal/${arg}/versions/${arg.version}`,
                      children: [
                        imported_3("span", {
                          className: local_474661d1.rowTitle,
                          children: arg.current
                            ? "Действующая редакция"
                            : `Редакция ${arg.version}`,
                        }),
                        imported_3("span", {
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
          : imported_3(fn_d9b37b1a, {}),
    ],
  });
}
