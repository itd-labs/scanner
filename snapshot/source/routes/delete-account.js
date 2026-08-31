import {
  symbol_073 as imported,
  symbol_054 as imported_2,
  symbol_071 as imported_3,
  symbol_003 as imported_4,
  symbol_055 as imported_5,
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
const local_8c4f8b4b = "c_actions";
const local_c2e91772 = "c_confirmBlock";
const local_e81f5214 = "c_confirmText";
const local_0c0a7c96 = "c_confirmActions";
const local_cd23a337 = "c_error";
const local_d71cd58f = {
  legal: local_87ee5215,
  backButton: local_85b1b822,
  title: local_9d9cf508,
  updated: local_c7caffa4,
  section: local_af0b94fd,
  sectionTitle: local_288346ca,
  text: local_95ed4c70,
  list: local_e9ccbd22,
  contact: local_354b4818,
  actions: local_8c4f8b4b,
  confirmBlock: local_c2e91772,
  confirmText: local_e81f5214,
  confirmActions: local_0c0a7c96,
  error: local_cd23a337,
};
export function fn_d877082e(arg) {
  const local = imported((arg) => arg.deleteAccount);
  const [local_2, local_3] = imported_2("info");
  const [local_4, local_5] = imported_2(null);
  const local_6 = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      imported_5("../site/index.html");
    }
  };
  const local_7 = async () => {
    local_3("deleting");
    local_5(null);
    try {
      await local();
    } catch {
      local_5("Не удалось удалить аккаунт. Попробуйте позже.");
      local_3("confirm");
    }
  };
  return imported_3("div", {
    className: local_d71cd58f.legal,
    children: [
      imported_3("button", {
        className: local_d71cd58f.backButton,
        onClick: local_6,
        children: [
          imported_3(imported_6, {
            size: 20,
          }),
          imported_3("span", {
            children: "Назад",
          }),
        ],
      }),
      imported_3("h1", {
        className: local_d71cd58f.title,
        children: "Удаление аккаунта",
      }),
      imported_3("p", {
        className: local_d71cd58f.updated,
        children: "Приложение ИТД",
      }),
      imported_3("section", {
        className: local_d71cd58f.section,
        children: [
          imported_3("h2", {
            className: local_d71cd58f.sectionTitle,
            children: "Какие данные будут удалены",
          }),
          imported_3("ul", {
            className: local_d71cd58f.list,
            children: [
              imported_3("li", {
                children: "Профиль (имя, аватар, описание)",
              }),
              imported_3("li", {
                children: "Публикации и комментарии",
              }),
              imported_3("li", {
                children: "Подписки и подписчики",
              }),
              imported_3("li", {
                children: "Уведомления",
              }),
              imported_3("li", {
                children: "Загруженные файлы и медиа",
              }),
            ],
          }),
        ],
      }),
      imported_3("section", {
        className: local_d71cd58f.section,
        children: [
          imported_3("h2", {
            className: local_d71cd58f.sectionTitle,
            children: "Что может сохраняться",
          }),
          imported_3("p", {
            className: local_d71cd58f.text,
            children:
              "Некоторые данные могут быть сохранены в анонимизированном виде в соответствии с требованиями законодательства, безопасности или для предотвращения нарушений.",
          }),
        ],
      }),
      imported_3("section", {
        className: local_d71cd58f.section,
        children: [
          imported_3("h2", {
            className: local_d71cd58f.sectionTitle,
            children: "Восстановление",
          }),
          imported_3("p", {
            className: local_d71cd58f.text,
            children:
              "После удаления у вас будет 30 дней на восстановление аккаунта. Для этого просто войдите в приложение в течение этого периода. По истечении 30 дней аккаунт и данные будут удалены безвозвратно.",
          }),
        ],
      }),
      imported_3("section", {
        className: local_d71cd58f.section,
        children: [
          imported_3("h2", {
            className: local_d71cd58f.sectionTitle,
            children: "Связаться с нами",
          }),
          imported_3("p", {
            className: local_d71cd58f.text,
            children: [
              "Если у вас возникли вопросы, свяжитесь с нами:",
              "./delete-account.js",
              imported_3("a", {
                href: "mailto:support@itd.fun",
                className: local_d71cd58f.contact,
                children: "support@itd.fun",
              }),
            ],
          }),
        ],
      }),
      local_2 === "info" &&
        imported_3("div", {
          className: local_d71cd58f.actions,
          children: imported_3(imported_4, {
            variant: "danger",
            onClick: () => local_3("confirm"),
            children: "Удалить аккаунт",
          }),
        }),
      local_2 === "confirm" &&
        imported_3("div", {
          className: local_d71cd58f.confirmBlock,
          children: [
            imported_3("p", {
              className: local_d71cd58f.confirmText,
              children:
                "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
            }),
            local_4 &&
              imported_3("p", {
                className: local_d71cd58f.error,
                children: local_4,
              }),
            imported_3("div", {
              className: local_d71cd58f.confirmActions,
              children: [
                imported_3(imported_4, {
                  variant: "secondary",
                  onClick: () => local_3("info"),
                  children: "Отмена",
                }),
                imported_3(imported_4, {
                  variant: "danger",
                  onClick: local_7,
                  children: "Удалить аккаунт",
                }),
              ],
            }),
          ],
        }),
      local_2 === "deleting" &&
        imported_3("div", {
          className: local_d71cd58f.actions,
          children: imported_3(imported_4, {
            variant: "danger",
            disabled: true,
            loading: true,
            children: "Удаление...",
          }),
        }),
    ],
  });
}
export { fn_d877082e as default };
