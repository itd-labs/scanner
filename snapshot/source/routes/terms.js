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
export function fn_4d1b0ab8(arg) {
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
        children: "Пользовательское соглашение",
      }),
      imported("p", {
        className: local_50ed0b16.updated,
        children: "Последнее обновление: 3 апреля 2026",
      }),
      imported("section", {
        className: local_50ed0b16.section,
        children: [
          imported("h2", {
            className: local_50ed0b16.sectionTitle,
            children: "1. Общие положения",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children:
              "Добро пожаловать в итд! Используя сервис, вы подтверждаете, что ознакомились и соглашаетесь с условиями настоящего Пользовательского соглашения и Политики конфиденциальности.",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children:
              "итд — это социальная сеть для общения и обмена пользовательским контентом. Сервис предоставляется бесплатно. Дополнительно пользователь вправе оформить платную подписку на условиях, предусмотренных отдельным документом, размещенным на сайте сервиса.",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children: [
              "Оператор сервиса: Общество с ограниченной ответственностью «ИТД»",
              imported("br", {}),
              "ИНН: 9729415049",
              imported("br", {}),
              "ОГРН: 1267700029838",
              imported("br", {}),
              "Юридический адрес: 119361, г. Москва, вн.тер. г. Муниципальный Округ Очаково-Матвеевское, пер. 1-Й Очаковский, дом 10, помещение 7/3",
            ],
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children:
              "Настоящее Пользовательское соглашение является публичной офертой в соответствии с законодательством Российской Федерации.",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children:
              "1.7. Платная подписка является добровольной дополнительной опцией сервиса и не является обязательным условием использования сервиса.",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children:
              "1.8. Оформление платной подписки означает согласие пользователя с Условиями платной подписки, действующими на момент оформления.",
          }),
        ],
      }),
      imported("section", {
        className: local_50ed0b16.section,
        children: [
          imported("h2", {
            className: local_50ed0b16.sectionTitle,
            children: "2. Регистрация и аккаунт",
          }),
          imported("ul", {
            className: local_50ed0b16.list,
            children: [
              imported("li", {
                children:
                  "2.1. Для использования сервиса необходимо создать аккаунт.",
              }),
              imported("li", {
                children: "2.2. Пользователю должно быть не менее 13 лет.",
              }),
              imported("li", {
                children:
                  "2.3. Один пользователь может иметь только один аккаунт.",
              }),
              imported("li", {
                children:
                  "2.4. Пользователь гарантирует, что при регистрации указывает достоверные данные.",
              }),
              imported("li", {
                children:
                  "2.5. Пользователь самостоятельно отвечает за сохранность пароля и доступ к своему аккаунту.",
              }),
              imported("li", {
                children:
                  "2.6. Оператор не несёт ответственности за действия, совершённые с использованием аккаунта пользователя.",
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
            children: "3. Использование сервиса",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children: "Пользователь имеет право:",
          }),
          imported("ul", {
            className: local_50ed0b16.list,
            children: [
              imported("li", {
                children:
                  "публиковать свой контент (тексты, фото/изображения, видео);",
              }),
              imported("li", {
                children:
                  "оставлять комментарии, ставить лайки, делать репосты и взаимодействовать с другими пользователями;",
              }),
              imported("li", {
                children: "подписываться на других пользователей;",
              }),
              imported("li", {
                children: "жаловаться на нарушения;",
              }),
              imported("li", {
                children:
                  "использовать функционал сервиса в рамках установленных правил.",
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
            children: "4. Запрещённые действия",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children: "4.1. Пользователю запрещается:",
          }),
          imported("ul", {
            className: local_50ed0b16.list,
            children: [
              imported("li", {
                children:
                  "публиковать контент, нарушающий законодательство РФ;",
              }),
              imported("li", {
                children:
                  "размещать чужой контент без разрешения правообладателя;",
              }),
              imported("li", {
                children: "публиковать оскорбления, угрозы, травлю;",
              }),
              imported("li", {
                children: "распространять спам и рекламу;",
              }),
              imported("li", {
                children:
                  "публиковать экстремистские, порнографические или иные запрещённые материалы;",
              }),
              imported("li", {
                children:
                  "использовать сервис для автоматизированной активности (боты, скрипты);",
              }),
              imported("li", {
                children:
                  "пытаться получить несанкционированный доступ к сервису или аккаунтам.",
              }),
            ],
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children:
              "4.2. Запрещённые действия определяются настоящим соглашением, правилами сервиса и законодательством Российской Федерации.",
          }),
        ],
      }),
      imported("section", {
        className: local_50ed0b16.section,
        children: [
          imported("h2", {
            className: local_50ed0b16.sectionTitle,
            children: "5. Пользовательский контент",
          }),
          imported("ul", {
            className: local_50ed0b16.list,
            children: [
              imported("li", {
                children:
                  "5.1. Пользователь сохраняет все права на размещаемый им контент.",
              }),
              imported("li", {
                children:
                  "5.2. Размещая контент в сервисе итд, пользователь предоставляет оператору неисключительное, безвозмездное право на его использование исключительно в целях функционирования сервиса (отображение, распространение внутри платформы).",
              }),
              imported("li", {
                children:
                  "5.3. Пользователь осознаёт и соглашается с тем, что размещаемый им контент может быть доступен другим пользователям сервиса и в сети Интернет.",
              }),
              imported("li", {
                children:
                  "5.4. Пользователь самостоятельно несёт ответственность за содержание публикуемого контента.",
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
            children: "6. Модерация и меры воздействия",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children:
              "6.1. Оператор вправе удалять контент, нарушающий настоящее Пользовательское соглашение или законодательство Российской Федерации, в том числе без предварительного уведомления пользователя, если характер нарушения требует немедленного реагирования.",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children: "6.2. Оператор вправе:",
          }),
          imported("ul", {
            className: local_50ed0b16.list,
            children: [
              imported("li", {
                children:
                  "удалять контент, нарушающий настоящее соглашение или закон;",
              }),
              imported("li", {
                children: "ограничивать функционал аккаунта;",
              }),
              imported("li", {
                children: "временно блокировать аккаунт;",
              }),
              imported("li", {
                children:
                  "удалять аккаунт при систематических или грубых нарушениях.",
              }),
            ],
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children:
              "6.3. Оператор не является инициатором размещения пользовательского контента, но принимает разумные меры по его модерации.",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children:
              "6.4. Если доступ к аккаунту пользователя ограничен, приостановлен или прекращен в связи с нарушением настоящего Пользовательского соглашения, оператор вправе одновременно ограничить или прекратить предоставление преимуществ платной подписки. Вопрос о возврате денежных средств в таком случае решается в соответствии с Условиями платной подписки и законодательством Российской Федерации.",
          }),
        ],
      }),
      imported("section", {
        className: local_50ed0b16.section,
        children: [
          imported("h2", {
            className: local_50ed0b16.sectionTitle,
            children: "7. Персональные данные",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children:
              "7.1. Обработка персональных данных осуществляется в соответствии с Политикой конфиденциальности и законодательством РФ.",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children:
              "7.2. Правовым основанием обработки персональных данных является:",
          }),
          imported("ul", {
            className: local_50ed0b16.list,
            children: [
              imported("li", {
                children: "согласие пользователя;",
              }),
              imported("li", {
                children:
                  "необходимость исполнения настоящего Пользовательского соглашения.",
              }),
            ],
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children:
              "7.3. Подробный порядок обработки персональных данных определён Политикой конфиденциальности.",
          }),
        ],
      }),
      imported("section", {
        className: local_50ed0b16.section,
        children: [
          imported("h2", {
            className: local_50ed0b16.sectionTitle,
            children: "8. Ограничение ответственности",
          }),
          imported("ul", {
            className: local_50ed0b16.list,
            children: [
              imported("li", {
                children: "8.1. Сервис предоставляется «как есть».",
              }),
              imported("li", {
                children:
                  "8.2. Оператор не гарантирует бесперебойную и безошибочную работу сервиса.",
              }),
              imported("li", {
                children:
                  "8.3. Оператор не несёт ответственности за действия пользователей и последствия взаимодействия между ними.",
              }),
              imported("li", {
                children:
                  "8.4. Оператор не несёт ответственности за утрату контента, размещённого пользователем.",
              }),
              imported("li", {
                children:
                  "8.5. Оператор не несет ответственности за невозможность использования платной подписки, если такая невозможность вызвана действиями банка пользователя, платежного партнера, перебоями в работе сети Интернет, оборудования пользователя либо иными обстоятельствами, не зависящими от оператора.",
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
            children: "9. Платная подписка",
          }),
          imported("ul", {
            className: local_50ed0b16.list,
            children: [
              imported("li", {
                children:
                  "9.1. В сервисе итд пользователю может быть доступна платная подписка.",
              }),
              imported("li", {
                children:
                  "9.2. Платная подписка является дополнительной платной опцией, оформляемой пользователем добровольно в целях поддержки проекта.",
              }),
              imported("li", {
                children:
                  "9.3. В период действия подписки пользователю могут предоставляться дополнительные возможности аккаунта, в том числе особый цвет никнейма, значок рядом с никнеймом и ранний доступ к тестовым функциям сервиса, а также иные возможности согласно Условиями платной подписки.",
              }),
              imported("li", {
                children:
                  "9.4. Ранний доступ к тестовым функциям означает возможность использовать отдельные новые функции сервиса раньше остальных пользователей, в период их тестирования оператором.",
              }),
              imported("li", {
                children:
                  "9.5. Тестовые функции являются временными и экспериментальными. После завершения тестирования такие функции могут стать доступными всем пользователям сервиса, быть изменены, отключены либо не перейти в постоянный функционал сервиса.",
              }),
              imported("li", {
                children:
                  "9.6. Сам по себе перевод тестовой функции в общий бесплатный функционал сервиса не означает, что подписка была оказана ненадлежащим образом.",
              }),
              imported("li", {
                children:
                  "9.7. Подписка может оформляться на ежемесячный или годовой период. Конкретная стоимость, состав преимуществ, порядок оплаты, условия автопродления, отключения автопродления и возврата денежных средств определяются Условиями платной подписки, размещенными на сайте сервиса.",
              }),
              imported("li", {
                children:
                  "9.8. Если при оформлении подписки пользователю предложено автопродление, дальнейшее продление подписки осуществляется автоматически до момента отключения пользователем автопродления либо прекращения подписки по иным основаниям.",
              }),
              imported("li", {
                children:
                  "9.9. Пользователь вправе в любой момент отключить автопродление подписки способом, доступным в интерфейсе сервиса, либо иным способом, указанным в Условиях платной подписки.",
              }),
              imported("li", {
                children:
                  "9.10. После отказа пользователя от дальнейших автоматических списаний оператор не вправе осуществлять последующие автоматические списания с соответствующего платежного средства для целей продления подписки.",
              }),
              imported("li", {
                children:
                  "9.11. Оформляя подписку, пользователь подтверждает, что обладает правом совершать такие действия в соответствии с законодательством Российской Федерации. Если оформление подписки требует согласия законного представителя, пользователь обязан получить такое согласие самостоятельно.",
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
            children: "10. Изменения условий",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children:
              "Оператор вправе изменять настоящее соглашение. Актуальная версия всегда доступна на сайте. Продолжение использования сервиса после внесения изменений означает согласие с новой редакцией.",
          }),
        ],
      }),
      imported("section", {
        className: local_50ed0b16.section,
        children: [
          imported("h2", {
            className: local_50ed0b16.sectionTitle,
            children: "11. Контактная информация",
          }),
          imported("p", {
            className: local_50ed0b16.text,
            children: [
              "По всем вопросам, связанным с работой сервиса, можно обращаться по адресу: ",
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
export { fn_4d1b0ab8 as default };
