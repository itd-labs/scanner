import { symbol_071 as imported, symbol_055 as imported_2 } from "../entry.js";
import { I as imported_3 } from "../components/icon-chevron-left.js";
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
const local_87ee5215 = "c_legal";
const local_85b1b822 = "c_backButton";
const local_9d9cf508 = "c_title";
const local_c7caffa4 = "c_updated";
const local_af0b94fd = "c_section";
const local_288346ca = "c_sectionTitle";
const local_95ed4c70 = "c_text";
const local_e9ccbd22 = "c_list";
const local_354b4818 = "c_contact";
const local_50ed0b16 = {
  legal: local_87ee5215,
  backButton: local_85b1b822,
  title: local_9d9cf508,
  updated: local_c7caffa4,
  section: local_af0b94fd,
  sectionTitle: local_288346ca,
  text: local_95ed4c70,
  list: local_e9ccbd22,
  contact: local_354b4818,
};
export function fn_bb5407f0(arg) {
  const local = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      imported_2("../site/index.html");
    }
  };
  return imported("div", {
    className: local_50ed0b16.legal,
    children: [
      imported("button", {
        className: local_50ed0b16.backButton,
        onClick: local,
        children: [
          imported(imported_3, {
            size: 20,
          }),
          imported("span", {
            children: "Назад",
          }),
        ],
      }),
      imported("h1", {
        className: local_50ed0b16.title,
        children: "Политика cookies",
      }),
      imported("p", {
        className: local_50ed0b16.updated,
        children: "Последнее обновление: 5 февраля 2025",
      }),
      imported("section", {
        className: local_50ed0b16.section,
        children: [
          imported("h2", {
            className: local_50ed0b16.sectionTitle,
            children: "Какие cookies мы используем",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children:
              "Мы используем только технические cookies, необходимые для работы сайта — чтобы вы оставались авторизованы. Без них вход в аккаунт невозможен.",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children: "Мы не используем рекламные или аналитические cookies.",
          }),
        ],
      }),
      imported("section", {
        className: local_50ed0b16.section,
        children: [
          imported("h2", {
            className: local_50ed0b16.sectionTitle,
            children: "Как управлять cookies",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children:
              "Вы можете удалить или заблокировать cookies в настройках браузера:",
          }),
          imported("ul", {
            className: local_50ed0b16.list,
            children: [
              imported("li", {
                children:
                  "Chrome: Настройки → Конфиденциальность и безопасность → Файлы cookie",
              }),
              imported("li", {
                children:
                  "Firefox: Настройки → Приватность и Защита → Куки и данные сайтов",
              }),
              imported("li", {
                children:
                  "Safari: Настройки → Конфиденциальность → Управление данными веб-сайтов",
              }),
            ],
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children:
              "Если заблокируете все cookies — не сможете войти в аккаунт. Просто предупреждаем.",
          }),
        ],
      }),
      imported("section", {
        className: local_50ed0b16.section,
        children: [
          imported("h2", {
            className: local_50ed0b16.sectionTitle,
            children: "Что мы НЕ делаем",
          }),
          imported("ul", {
            className: local_50ed0b16.list,
            children: [
              imported("li", {
                children: "Не используем рекламные cookies",
              }),
              imported("li", {
                children: "Не отслеживаем вас на других сайтах",
              }),
              imported("li", {
                children: "Не передаём данные cookies третьим лицам",
              }),
              imported("li", {
                children: "Не используем cookies для профилирования",
              }),
            ],
          }),
        ],
      }),
      imported("section", {
        className: local_50ed0b16.section,
        children: [
          imported("h2", {
            className: local_50ed0b16.sectionTitle,
            children: "Вопросы",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children: [
              "Что-то непонятно? Пишите на ",
              imported("a", {
                href: "mailto:support@itd.fun",
                className: local_50ed0b16.contact,
                children: "support@itd.fun",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { fn_bb5407f0 as default };
