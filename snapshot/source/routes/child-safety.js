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
export function fn_2a0afbf5(arg) {
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
        children: "Стандарты безопасности детей",
      }),
      imported("p", {
        className: local_92418e80.updated,
        children: "Последнее обновление: 8 марта 2026",
      }),
      imported("section", {
        className: local_92418e80.section,
        children: [
          imported("h2", {
            className: local_92418e80.sectionTitle,
            children: "Наша позиция",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "ИТД придерживается политики абсолютной нетерпимости к сексуальному насилию над детьми и их эксплуатации (CSAE). Мы запрещаем любой контент, который изображает, поощряет или способствует сексуальной эксплуатации или насилию в отношении несовершеннолетних, включая, но не ограничиваясь:",
          }),
          imported("ul", {
            className: local_92418e80.list,
            children: [
              imported("li", {
                children:
                  "Материалы сексуального насилия над детьми (CSAM) в любой форме",
              }),
              imported("li", {
                children: "Сексуализацию несовершеннолетних",
              }),
              imported("li", {
                children:
                  "Груминг — установление доверительного контакта с несовершеннолетними в целях эксплуатации",
              }),
              imported("li", {
                children:
                  "Секс-торговлю и торговлю людьми с участием несовершеннолетних",
              }),
              imported("li", {
                children:
                  "Любые призывы, инструкции или рекомендации, связанные с эксплуатацией детей",
              }),
            ],
          }),
        ],
      }),
      imported("section", {
        className: local_92418e80.section,
        children: [
          imported("h2", {
            className: local_92418e80.sectionTitle,
            children: "Меры по обеспечению безопасности",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "Мы применяем следующие меры для защиты несовершеннолетних на платформе:",
          }),
          imported("ul", {
            className: local_92418e80.list,
            children: [
              imported("li", {
                children:
                  "Модерация контента — публикации и комментарии проверяются на наличие запрещённого контента",
              }),
              imported("li", {
                children:
                  "Система жалоб — любой пользователь может пожаловаться на контент или аккаунт, нарушающий правила безопасности детей",
              }),
              imported("li", {
                children:
                  "Блокировка аккаунтов — аккаунты, нарушающие данные стандарты, немедленно блокируются без возможности восстановления",
              }),
              imported("li", {
                children:
                  "Сотрудничество с правоохранительными органами — мы передаём информацию о выявленных нарушениях в соответствующие органы в соответствии с действующим законодательством",
              }),
            ],
          }),
        ],
      }),
      imported("section", {
        className: local_92418e80.section,
        children: [
          imported("h2", {
            className: local_92418e80.sectionTitle,
            children: "Как сообщить о нарушении",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "Если вы обнаружили контент, связанный с сексуальной эксплуатацией или насилием над детьми, немедленно сообщите об этом:",
          }),
          imported("h3", {
            className: local_92418e80.subsectionTitle,
            children: "В приложении",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "Нажмите на меню публикации или профиля и выберите «Пожаловаться». Выберите категорию, связанную с безопасностью детей. Жалобы данной категории рассматриваются в приоритетном порядке.",
          }),
          imported("h3", {
            className: local_92418e80.subsectionTitle,
            children: "По электронной почте",
          }),
          imported("p", {
            className: local_92418e80.text,
            children: [
              "Отправьте сообщение на адрес ",
              imported("a", {
                href: "mailto:abuse@itd.fun",
                className: local_92418e80.contact,
                children: "abuse@itd.fun",
              }),
              " с темой «Безопасность детей». Укажите ссылку на контент или имя пользователя, а также описание нарушения.",
            ],
          }),
        ],
      }),
      imported("section", {
        className: local_92418e80.section,
        children: [
          imported("h2", {
            className: local_92418e80.sectionTitle,
            children: "Обязательства перед законодательством",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "Приложение ИТД соответствует действующему законодательству Российской Федерации и международным стандартам в отношении безопасности детей. Мы обязуемся:",
          }),
          imported("ul", {
            className: local_92418e80.list,
            children: [
              imported("li", {
                children:
                  "Удалять любой незаконный контент, связанный с эксплуатацией несовершеннолетних, незамедлительно после обнаружения",
              }),
              imported("li", {
                children:
                  "Сообщать о выявленных нарушениях в региональные и национальные правоохранительные органы",
              }),
              imported("li", {
                children:
                  "Сохранять необходимые данные для содействия расследованиям в соответствии с требованиями закона",
              }),
              imported("li", {
                children:
                  "Регулярно пересматривать и обновлять наши стандарты безопасности",
              }),
            ],
          }),
        ],
      }),
      imported("section", {
        className: local_92418e80.section,
        children: [
          imported("h2", {
            className: local_92418e80.sectionTitle,
            children: "Контактная информация",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "По вопросам, связанным с безопасностью детей на платформе ИТД:",
          }),
          imported("ul", {
            className: local_92418e80.list,
            children: [
              imported("li", {
                children: [
                  "E-mail: ",
                  imported("a", {
                    href: "mailto:abuse@itd.fun",
                    className: local_92418e80.contact,
                    children: "abuse@itd.fun",
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
        ],
      }),
      imported("section", {
        className: local_92418e80.section,
        children: [
          imported("h2", {
            className: local_92418e80.sectionTitle,
            children: "Дополнительно",
          }),
          imported("ul", {
            className: local_92418e80.list,
            children: [
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
                  href: "/support",
                  className: local_92418e80.contact,
                  onClick: (arg) => {
                    arg.preventDefault();
                    imported_2("/support");
                  },
                  children: "Поддержка",
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { fn_2a0afbf5 as default };
