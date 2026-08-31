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
export function fn_a5118fe0(arg) {
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
        children: "Политика конфиденциальности",
      }),
      imported("p", {
        className: local_92418e80.updated,
        children: "Последнее обновление: 3 апреля 2026",
      }),
      imported("section", {
        className: local_92418e80.section,
        children: [
          imported("h2", {
            className: local_92418e80.sectionTitle,
            children: "1. Общие положения",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сервиса итд.",
          }),
          imported("p", {
            className: local_92418e80.text,
            children: [
              "Оператором персональных данных является:",
              imported("br", {}),
              "Общество с ограниченной ответственностью «ИТД»",
              imported("br", {}),
              "ИНН: 9729415049",
              imported("br", {}),
              "ОГРН: 1267700029838",
              imported("br", {}),
              "Юридический адрес: 119361, г. Москва, вн.тер. г. Муниципальный Округ Очаково-Матвеевское, пер. 1-Й Очаковский, дом 10, помещение 7/3",
            ],
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "Используя сервис итд, пользователь подтверждает согласие с настоящей Политикой конфиденциальности.",
          }),
        ],
      }),
      imported("section", {
        className: local_92418e80.section,
        children: [
          imported("h2", {
            className: local_92418e80.sectionTitle,
            children: "2. Правовые основания обработки персональных данных",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "Обработка персональных данных осуществляется на основании:",
          }),
          imported("ul", {
            className: local_92418e80.list,
            children: [
              imported("li", {
                children:
                  "согласия субъекта персональных данных (ст. 6 ч.1 п.1 152-ФЗ);",
              }),
              imported("li", {
                children:
                  "необходимости исполнения Пользовательского соглашения, стороной которого является пользователь (ст. 6 ч.1 п.5 152-ФЗ).",
              }),
            ],
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "Обработка персональных данных, связанных с оформлением и сопровождением платной подписки, осуществляется также в целях исполнения договора, стороной которого является пользователь, и исполнения обязанностей оператора, связанных с приемом платежей, учетом расчетов, возвратом денежных средств и рассмотрением обращений пользователей.",
          }),
        ],
      }),
      imported("section", {
        className: local_92418e80.section,
        children: [
          imported("h2", {
            className: local_92418e80.sectionTitle,
            children: "3. Какие персональные данные мы обрабатываем",
          }),
          imported("h3", {
            className: local_92418e80.subsectionTitle,
            children: "3.1. Данные, предоставляемые пользователем",
          }),
          imported("ul", {
            className: local_92418e80.list,
            children: [
              imported("li", {
                children: "адрес электронной почты;",
              }),
              imported("li", {
                children: "пароль (в зашифрованном виде);",
              }),
              imported("li", {
                children: "имя пользователя и информация профиля;",
              }),
              imported("li", {
                children:
                  "контент, публикуемый пользователем (посты, комментарии, изображения);",
              }),
              imported("li", {
                children: "голосовые сообщения, размещаемые в комментариях.",
              }),
            ],
          }),
          imported("h3", {
            className: local_92418e80.subsectionTitle,
            children: "3.2. Данные, собираемые автоматически",
          }),
          imported("ul", {
            className: local_92418e80.list,
            children: [
              imported("li", {
                children:
                  "IP-адрес — для безопасности и предотвращения злоупотреблений",
              }),
              imported("li", {
                children: "Cookies — для авторизации и запоминания настроек",
              }),
              imported("li", {
                children:
                  "Данные устройства — тип браузера, ОС (для корректного отображения)",
              }),
              imported("li", {
                children:
                  "Действия в сервисе — лайки, просмотры, подписки (для работы ленты)",
              }),
            ],
          }),
          imported("h3", {
            className: local_92418e80.subsectionTitle,
            children:
              "3.3. Данные, связанные с оформлением и использованием платной подписки",
          }),
          imported("ul", {
            className: local_92418e80.list,
            children: [
              imported("li", {
                children: "вид подписки;",
              }),
              imported("li", {
                children: "статус подписки;",
              }),
              imported("li", {
                children: "дата оформления подписки;",
              }),
              imported("li", {
                children: "дата очередного списания;",
              }),
              imported("li", {
                children: "сведения о включении и отключении автопродления;",
              }),
              imported("li", {
                children: "сумма и статус платежа;",
              }),
              imported("li", {
                children: "идентификатор платежа;",
              }),
              imported("li", {
                children:
                  "сведения о возврате денежных средств, если такой возврат осуществляется;",
              }),
              imported("li", {
                children:
                  "маскированные данные платежного средства и иные сведения, которые оператор получает от платежного партнера в связи с оплатой подписки.",
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
            children: "4. Цели обработки персональных данных",
          }),
          imported("p", {
            className: local_92418e80.text,
            children: "Персональные данные обрабатываются в следующих целях:",
          }),
          imported("ul", {
            className: local_92418e80.list,
            children: [
              imported("li", {
                children: "регистрация и авторизация пользователей;",
              }),
              imported("li", {
                children: "обеспечение функционирования сервиса;",
              }),
              imported("li", {
                children: "отображение пользовательского контента;",
              }),
              imported("li", {
                children: "защита сервиса от злоупотреблений и нарушений;",
              }),
              imported("li", {
                children: "улучшение качества работы сервиса;",
              }),
              imported("li", {
                children:
                  "оформление, сопровождение и прекращение платной подписки;",
              }),
              imported("li", {
                children: "прием и обработка платежей за подписку;",
              }),
              imported("li", {
                children: "автоматическое продление подписки;",
              }),
              imported("li", {
                children: "обработка возвратов денежных средств;",
              }),
              imported("li", {
                children:
                  "направление кассовых чеков и исполнение обязанностей, предусмотренных законодательством Российской Федерации;",
              }),
              imported("li", {
                children:
                  "рассмотрение обращений пользователей по вопросам оплаты и подписки.",
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
            children: "5. Публичность пользовательского контента",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "5.1. Пользователь осознаёт и соглашается с тем, что контент, размещаемый им в сервисе итд, может быть доступен другим пользователям сервиса и в сети Интернет в рамках функционала платформы.",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "5.2. Пользователь самостоятельно определяет объём персональных данных, размещаемых им в публичном доступе.",
          }),
        ],
      }),
      imported("section", {
        className: local_92418e80.section,
        children: [
          imported("h2", {
            className: local_92418e80.sectionTitle,
            children: "6. Передача персональных данных третьим лицам",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "6.1. Оператор вправе передавать персональные данные третьим лицам в случаях, предусмотренных законодательством Российской Федерации, а также в случаях, когда такая передача необходима для функционирования сервиса, исполнения Пользовательского соглашения, оформления и сопровождения платной подписки.",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "6.2. Для целей приема и обработки платежей, автопродления подписки, возврата денежных средств и учета расчетов оператор вправе передавать необходимые сведения платежному партнеру.",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "6.3. Для целей формирования и направления кассовых чеков, а также исполнения требований законодательства Российской Федерации оператор вправе передавать необходимые сведения оператору фискальных данных, сервису фискализации и иным лицам, участвующим в проведении расчетов, в объеме, необходимом для достижения указанных целей.",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "6.4. Оператор вправе передавать персональные данные подрядчикам, обеспечивающим техническое сопровождение сервиса, направление уведомлений, хранение данных и обработку обращений пользователей, при условии соблюдения такими лицами требований к конфиденциальности и защите данных.",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "6.5. Персональные данные не продаются и не передаются рекламодателям, за исключением случаев, прямо предусмотренных законодательством Российской Федерации.",
          }),
        ],
      }),
      imported("section", {
        className: local_92418e80.section,
        children: [
          imported("h2", {
            className: local_92418e80.sectionTitle,
            children: "7. Хранение персональных данных",
          }),
          imported("ul", {
            className: local_92418e80.list,
            children: [
              imported("li", {
                children:
                  "7.1. Персональные данные пользователей хранятся на серверах, расположенных на территории Российской Федерации.",
              }),
              imported("li", {
                children:
                  "7.2. Персональные данные хранятся в течение срока существования аккаунта пользователя.",
              }),
              imported("li", {
                children:
                  "7.3. После удаления аккаунта персональные данные удаляются или обезличиваются в течение 30 календарных дней, если иное не требуется законодательством РФ.",
              }),
              imported("li", {
                children:
                  "7.4. Сведения, связанные с оформлением, оплатой, автопродлением, отключением и прекращением подписки, а также данные, необходимые для бухгалтерского, налогового учета и рассмотрения претензий пользователей, могут храниться в течение срока, необходимого для исполнения обязанностей оператора и соблюдения требований законодательства Российской Федерации.",
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
            children: "8. Защита персональных данных",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа, утраты, изменения или распространения, включая:",
          }),
          imported("ul", {
            className: local_92418e80.list,
            children: [
              imported("li", {
                children: "использование шифрования для защиты паролей;",
              }),
              imported("li", {
                children: "ограничение доступа к персональным данным;",
              }),
              imported("li", {
                children: "контроль доступа к информационным системам.",
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
            children: "9. Права пользователя",
          }),
          imported("p", {
            className: local_92418e80.text,
            children: "Пользователь имеет право:",
          }),
          imported("ul", {
            className: local_92418e80.list,
            children: [
              imported("li", {
                children: "получать информацию о своих персональных данных;",
              }),
              imported("li", {
                children: "изменять или дополнять персональные данные;",
              }),
              imported("li", {
                children: "удалить аккаунт и персональные данные;",
              }),
              imported("li", {
                children: "запросить копию обрабатываемых персональных данных.",
              }),
            ],
          }),
          imported("p", {
            className: local_92418e80.text,
            children: [
              "Для реализации своих прав пользователь может обратиться по адресу: ",
              imported("a", {
                href: "mailto:privacy@itd.fun",
                className: local_92418e80.contact,
                children: "privacy@itd.fun",
              }),
            ],
          }),
          imported("p", {
            className: local_92418e80.text,
            children: [
              "Для реализации прав, связанных с обработкой данных о подписке и платежах, пользователь может также обратиться по вопросам оформления подписки, автопродления, возврата денежных средств и обработки связанных с этим данных по адресу: ",
              imported("a", {
                href: "mailto:billing@itd.fun",
                className: local_92418e80.contact,
                children: "billing@itd.fun",
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
            children: "10. Дети",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "Сервис итд не предназначен для использования лицами младше 13 лет. Если оператору станет известно, что персональные данные были получены от лица младше 13 лет, аккаунт будет удалён.",
          }),
        ],
      }),
      imported("section", {
        className: local_92418e80.section,
        children: [
          imported("h2", {
            className: local_92418e80.sectionTitle,
            children: "11. Изменение политики",
          }),
          imported("p", {
            className: local_92418e80.text,
            children:
              "Оператор вправе вносить изменения в настоящую Политику конфиденциальности. Актуальная версия всегда доступна на сайте. Продолжение использования сервиса означает согласие пользователя с обновлённой редакцией.",
          }),
        ],
      }),
      imported("section", {
        className: local_92418e80.section,
        children: [
          imported("h2", {
            className: local_92418e80.sectionTitle,
            children: "12. Контактная информация",
          }),
          imported("p", {
            className: local_92418e80.text,
            children: [
              "По всем вопросам, связанным с обработкой персональных данных, можно обращаться по адресу: ",
              imported("a", {
                href: "mailto:privacy@itd.fun",
                className: local_92418e80.contact,
                children: "privacy@itd.fun",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { fn_a5118fe0 as default };
