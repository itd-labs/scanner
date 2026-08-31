import {
  symbol_035 as imported,
  symbol_036 as imported_2,
  symbol_058 as imported_3,
  symbol_071 as imported_4,
  symbol_020 as imported_5,
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
const local_21cd4833 = "c_event";
const local_3abd7bdb = "c_icon";
const local_9d9cf508 = "c_title";
const local_5df6efc6 = "c_description";
const local_960709d8 = {
  event: local_21cd4833,
  icon: local_3abd7bdb,
  title: local_9d9cf508,
  description: local_5df6efc6,
};
export const local_674685e1 = (arg) => {
  const local = imported();
  const local_2 = imported_2((arg) => arg.fetchPortal);
  imported_3(() => {
    local_2();
  }, [local_2]);
  if (local.active && local.url) {
    window.open(local.url, "_blank", "noopener,noreferrer");
  }
  return imported_4("div", {
    className: local_960709d8.event,
    children:
      local.active && local.url
        ? imported_4(imported_5, {
            children: [
              imported_4("span", {
                className: local_960709d8.icon,
                children: "✨",
              }),
              imported_4("h1", {
                className: local_960709d8.title,
                children: "Ивент активен!",
              }),
              imported_4("p", {
                className: local_960709d8.description,
                children: [
                  "Ссылка должна была открыться в новой вкладке.",
                  "./event.js",
                  imported_4("a", {
                    href: local.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Открыть вручную",
                  }),
                ],
              }),
            ],
          })
        : imported_4(imported_5, {
            children: [
              imported_4("span", {
                className: local_960709d8.icon,
                children: "✨",
              }),
              imported_4("h1", {
                className: local_960709d8.title,
                children: "Нет активного ивента",
              }),
              imported_4("p", {
                className: local_960709d8.description,
                children:
                  "Сейчас нет активных ивентов. Следите за обновлениями!",
              }),
            ],
          }),
  });
};
