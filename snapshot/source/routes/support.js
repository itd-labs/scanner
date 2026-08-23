import { symbol_073 as imported, symbol_057 as imported_2 } from "../entry.js";
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
const local_87ee5215 = "c_legal";
const local_85b1b822 = "c_backButton";
const local_9d9cf508 = "c_title";
const local_c7caffa4 = "c_updated";
const local_af0b94fd = "c_section";
const local_288346ca = "c_sectionTitle";
const local_11889260 = "c_subsectionTitle";
const local_95ed4c70 = "c_text";
const local_e9ccbd22 = "c_list";
const local_354b4818 = "c_contact";
const local_92418e80 = {
  legal: local_87ee5215,
  backButton: local_85b1b822,
  title: local_9d9cf508,
  updated: local_c7caffa4,
  section: local_af0b94fd,
  sectionTitle: local_288346ca,
  subsectionTitle: local_11889260,
  text: local_95ed4c70,
  list: local_e9ccbd22,
  contact: local_354b4818,
};
export function fn_8287782b(arg) {
  const local = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      imported_2("../site/index.html");
    }
  };
  return imported("div", {
    className: local_92418e80.legal,
    children: [
      imported("button", {
        className: local_92418e80.backButton,
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
        className: local_92418e80.title,
        children: "Поддержка",
      }),
      imported("p", {
        className: local_92418e80.updated,
        children: "Приложение итд",
      }),
      imported("section", {
        className: local_92418e80.section,
        children: [
          imported("h2", {
            className: local_92418e80.sectionTitle,
            children: "Связаться с нами",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "Если у вас возникли вопросы по работе приложения, аккаунту, контенту или безопасности, свяжитесь с нами любым удобным способом:",
          }),
          imported("ul", {
            className: local_92418e80.list,
            children: [
              imported("li", {
                children: [
                  "E-mail: ",
                  imported("a", {
                    href: "mailto:support@itd.fun",
                    className: local_92418e80.contact,
                    children: "support@itd.fun",
                  }),
                ],
              }),
              imported("li", {
                children: [
                  "Сайт: ",
                  imported("a", {
                    href: "../site/index.html",
                    className: local_92418e80.contact,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "итд.com",
                  }),
                ],
              }),
            ],
          }),
          imported("p", {
            className: local_92418e80.text,
            children: "Ответы на обращения предоставляются в разумный срок.",
          }),
        ],
      }),
      imported("section", {
        className: local_92418e80.section,
        children: [
          imported("h2", {
            className: local_92418e80.sectionTitle,
            children: "Частые вопросы",
          }),
          imported("h3", {
            className: local_92418e80.subsectionTitle,
            children: "Как восстановить доступ к аккаунту?",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "Воспользуйтесь функцией «Забыли пароль?» на экране входа. На вашу электронную почту будет отправлена ссылка для сброса пароля.",
          }),
          imported("h3", {
            className: local_92418e80.subsectionTitle,
            children: "Как удалить аккаунт?",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "Вы можете удалить аккаунт в настройках профиля. После удаления все ваши данные будут удалены в течение 30 дней.",
          }),
          imported("h3", {
            className: local_92418e80.subsectionTitle,
            children: "Как пожаловаться на контент?",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "Нажмите на меню поста или комментария и выберите «Пожаловаться». Мы рассмотрим жалобу и примем меры в случае нарушения правил.",
          }),
          imported("h3", {
            className: local_92418e80.subsectionTitle,
            children: "Как изменить имя пользователя?",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "Перейдите в настройки профиля и измените имя пользователя в соответствующем поле.",
          }),
        ],
      }),
      imported("section", {
        className: local_92418e80.section,
        children: [
          imported("h2", {
            className: local_92418e80.sectionTitle,
            children: "Дополнительно",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "По вопросам конфиденциальности и правил использования ознакомьтесь с соответствующими документами:",
          }),
          imported("ul", {
            className: local_92418e80.list,
            children: [
              imported("li", {
                children: imported("a", {
                  href: "/privacy",
                  className: local_92418e80.contact,
                  onClick: (arg) => {
                    arg.preventDefault();
                    imported_2("/privacy");
                  },
                  children: "Политика конфиденциальности",
                }),
              }),
              imported("li", {
                children: imported("a", {
                  href: "/terms",
                  className: local_92418e80.contact,
                  onClick: (arg) => {
                    arg.preventDefault();
                    imported_2("/terms");
                  },
                  children: "Пользовательское соглашение",
                }),
              }),
              imported("li", {
                children: imported("a", {
                  href: "/cookies",
                  className: local_92418e80.contact,
                  onClick: (arg) => {
                    arg.preventDefault();
                    imported_2("/cookies");
                  },
                  children: "Политика использования cookies",
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { fn_8287782b as default };
