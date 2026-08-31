import {
  symbol_071 as imported,
  symbol_021 as imported_2,
  symbol_055 as imported_3,
} from "../entry.js";
import { I as imported_4 } from "../components/icon-chevron-left.js";
import { I as imported_5 } from "../components/icon-info.js";
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
const local_c32857d0 = ({ size: arg = 48 }) =>
  imported("svg", {
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      imported("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      }),
      imported("polyline", {
        points: "15 3 21 3 21 9",
      }),
      imported("line", {
        x1: "10",
        y1: "14",
        x2: "21",
        y2: "3",
      }),
    ],
  });
const local_ef251bc6 = "c_page";
const local_85b1b822 = "c_backButton";
const local_165b4cbe = "c_iconWrapper";
const local_9d9cf508 = "c_title";
const local_5df6efc6 = "c_description";
const local_47daf0f7 = "c_urlSection";
const local_288346ca = "c_sectionTitle";
const local_add289c9 = "c_urlBox";
const local_837c2621 = "c_domain";
const local_eeb40172 = "c_fullUrl";
const local_c107bac1 = "c_warningSection";
const local_91e122ba = "c_warningList";
const local_8c4f8b4b = "c_actions";
const local_64d27f85 = "c_primaryButton";
const local_d91dfa29 = "c_secondaryButton";
const local_e1f3b173 = {
  page: local_ef251bc6,
  backButton: local_85b1b822,
  iconWrapper: local_165b4cbe,
  title: local_9d9cf508,
  description: local_5df6efc6,
  urlSection: local_47daf0f7,
  sectionTitle: local_288346ca,
  urlBox: local_add289c9,
  domain: local_837c2621,
  fullUrl: local_eeb40172,
  warningSection: local_c107bac1,
  warningList: local_91e122ba,
  actions: local_8c4f8b4b,
  primaryButton: local_64d27f85,
  secondaryButton: local_d91dfa29,
};
export function fn_acbc897f({ url: arg }) {
  const local = imported_2(() => {
    try {
      const local =
        new URLSearchParams(window.location.search).get("url") || arg;
      if (!local) {
        return null;
      }
      const local_2 = atob(local);
      const local_3 = Uint8Array.from(local_2, (arg) => arg.charCodeAt(0));
      return new TextDecoder().decode(local_3);
    } catch {
      return null;
    }
  }, [arg]);
  const { domain: local_2, fullUrl: local_3 } = imported_2(() => {
    if (!local) {
      return {
        domain: null,
        fullUrl: null,
      };
    }
    try {
      const local = new URL(local);
      if (
        local.protocol !== "http:" &&
        local.protocol !== "./external-link.js"
      ) {
        return {
          domain: null,
          fullUrl: null,
        };
      }
      return {
        domain: local.hostname,
        fullUrl: local,
      };
    } catch {
      return {
        domain: null,
        fullUrl: null,
      };
    }
  }, [local]);
  const local_4 = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      imported_3("../site/index.html");
    }
  };
  const local_5 = () => {
    if (local) {
      window.location.href = local;
    }
  };
  if (!local || !local_2) {
    return imported("div", {
      className: local_e1f3b173.page,
      children: [
        imported("button", {
          className: local_e1f3b173.backButton,
          onClick: local_4,
          children: [
            imported(imported_4, {
              size: 20,
            }),
            imported("span", {
              children: "Назад",
            }),
          ],
        }),
        imported("div", {
          className: local_e1f3b173.iconWrapper,
          children: imported(imported_5, {
            size: 48,
          }),
        }),
        imported("h1", {
          className: local_e1f3b173.title,
          children: "Неверная ссылка",
        }),
        imported("p", {
          className: local_e1f3b173.description,
          children:
            "Не удалось определить адрес для перехода. Возможно, ссылка была повреждена или устарела.",
        }),
        imported("button", {
          className: local_e1f3b173.primaryButton,
          onClick: () => imported_3("../site/index.html"),
          children: "На главную",
        }),
      ],
    });
  }
  return imported("div", {
    className: local_e1f3b173.page,
    children: [
      imported("button", {
        className: local_e1f3b173.backButton,
        onClick: local_4,
        children: [
          imported(imported_4, {
            size: 20,
          }),
          imported("span", {
            children: "Назад",
          }),
        ],
      }),
      imported("div", {
        className: local_e1f3b173.iconWrapper,
        children: imported(local_c32857d0, {
          size: 48,
        }),
      }),
      imported("h1", {
        className: local_e1f3b173.title,
        children: "Переход на внешний сайт",
      }),
      imported("p", {
        className: local_e1f3b173.description,
        children:
          "Вы покидаете ИТД и переходите на внешний ресурс. Мы не можем гарантировать безопасность и содержимое этого сайта. Убедитесь, что доверяете этому ресурсу.",
      }),
      imported("div", {
        className: local_e1f3b173.urlSection,
        children: [
          imported("h2", {
            className: local_e1f3b173.sectionTitle,
            children: "Адрес назначения",
          }),
          imported("div", {
            className: local_e1f3b173.urlBox,
            children: [
              imported("span", {
                className: local_e1f3b173.domain,
                children: local_2,
              }),
              imported("span", {
                className: local_e1f3b173.fullUrl,
                children: local_3,
              }),
            ],
          }),
        ],
      }),
      imported("div", {
        className: local_e1f3b173.warningSection,
        children: [
          imported("h2", {
            className: local_e1f3b173.sectionTitle,
            children: "Обратите внимание",
          }),
          imported("ul", {
            className: local_e1f3b173.warningList,
            children: [
              imported("li", {
                children:
                  "ИТД не несёт ответственности за содержимое внешних сайтов",
              }),
              imported("li", {
                children: "Не вводите личные данные на подозрительных ресурсах",
              }),
              imported("li", {
                children: "Проверяйте адрес сайта перед вводом паролей",
              }),
            ],
          }),
        ],
      }),
      imported("div", {
        className: local_e1f3b173.actions,
        children: [
          imported("button", {
            className: local_e1f3b173.primaryButton,
            onClick: local_5,
            children: ["Перейти на ", local_2],
          }),
          imported("button", {
            className: local_e1f3b173.secondaryButton,
            onClick: local_4,
            children: "Остаться на ИТД",
          }),
        ],
      }),
    ],
  });
}
export { fn_acbc897f as default };
