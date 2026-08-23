import { symbol_073 as imported, symbol_057 as imported_2 } from "../entry.js";
import { symbol_001 as imported_3 } from "../shared/subscription-terms-module.js";
import { I as imported_4 } from "../components/icon-chevron-left.js";
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
export function fn_c8dece42(arg) {
  const local = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      imported_2("../site/index.html");
    }
  };
  return imported("div", {
    className: imported_3.legal,
    children: [
      imported("button", {
        className: imported_3.backButton,
        onClick: local,
        children: [
          imported(imported_4, {
            size: 20,
          }),
          imported("span", {
            children: "Назад",
          }),
        ],
      }),
      imported("h1", {
        className: imported_3.title,
        children: "Условия платного доступа ИТД НУКСТА",
      }),
      imported("p", {
        className: imported_3.updated,
        children: "Последнее обновление: 3 июля 2026",
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "1. Общие положения",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "1.1. Настоящие Условия определяют порядок оформления, оплаты и действия платного доступа ИТД НУКСТА в сервисе итд.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "1.2. Сервис итд предоставляет пользователям основной функционал социальной сети на бесплатной основе. Дополнительно пользователь может приобрести платный доступ ИТД НУКСТА на условиях, предусмотренных настоящим документом.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "1.3. Платный доступ ИТД НУКСТА является добровольной дополнительной опцией и приобретается пользователем в целях поддержки проекта. В период действия платного доступа пользователю предоставляются дополнительные возможности аккаунта, указанные в разделе 3 настоящих Условий.",
          }),
          imported("p", {
            className: imported_3.text,
            children: [
              "1.4. Оператором сервиса является:",
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
            className: imported_3.text,
            children:
              "1.5. Настоящие Условия являются неотъемлемой частью Пользовательского соглашения сервиса итд.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "1.6. Совершая оплату, пользователь подтверждает, что ознакомился и согласен с настоящими Условиями, Пользовательским соглашением и Политикой конфиденциальности.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "2. Термины",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "2.1. ИТД НУКСТА — дополнительная платная опция сервиса итд, приобретаемая на определённый срок (1 месяц) и предоставляющая пользователю дополнительные возможности аккаунта.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "2.2. Платежный партнер — лицо, обеспечивающее прием и обработку платежей. Прием платежей осуществляется с использованием сервиса ЮKassa (ООО НКО «ЮМани»).",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "2.3. Оплаченный период — срок действия платного доступа, за который пользователем внесена плата.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "3. Что получает пользователь по подписке",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "3.1. В период действия подписки пользователю могут предоставляться следующие дополнительные возможности:",
          }),
          imported("ul", {
            className: imported_3.list,
            children: [
              imported("li", {
                children: "особый цвет никнейма;",
              }),
              imported("li", {
                children: "особый значок рядом с никнеймом;",
              }),
              imported("li", {
                children: "ранний доступ к тестовым функциям сервиса.",
              }),
            ],
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "3.2. Ранний доступ к тестовым функциям означает, что пользователь с активной подпиской может получить доступ к отдельным новым функциям сервиса раньше остальных пользователей, в период их тестирования оператором.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "3.3. Тестовые функции являются временными и экспериментальными. После завершения тестирования такие функции могут:",
          }),
          imported("ul", {
            className: imported_3.list,
            children: [
              imported("li", {
                children:
                  "стать доступными всем пользователям сервиса, в том числе без подписки;",
              }),
              imported("li", {
                children: "быть изменены;",
              }),
              imported("li", {
                children: "быть отключены;",
              }),
              imported("li", {
                children: "не перейти в постоянный функционал сервиса.",
              }),
            ],
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "3.4. Сам по себе последующий перевод тестовой функции в общий бесплатный функционал сервиса не означает, что подписка была оказана ненадлежащим образом и не является основанием для возврата денежных средств.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "3.5. Подписка не предоставляет пользователю исключительных прав на какие-либо функции сервиса и не означает обязанность оператора постоянно поддерживать один и тот же состав тестовых функций в течение всего срока существования сервиса.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "3.6. Отсутствие в отдельные периоды новых тестовых функций не означает неоказание подписки, если иные преимущества подписки продолжают предоставляться, а подписка в целом сохраняет характер дополнительной опции сервиса итд.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "4. Порядок оплаты",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "4.1. Платный доступ ИТД НУКСТА приобретается на срок 1 месяц. Стоимость составляет 199 рублей.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "4.2. Оплата осуществляется в безналичной форме через платежного партнера. Если пользователь не подключил автопродление, каждая оплата является разовой — повторные списания не производятся. Если пользователь подключил автопродление (дал согласие на автоматические списания), продление подписки и списание платы производятся автоматически на условиях, определенных Условиями автоматических списаний, размещенными на сайте сервиса.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "4.3. Оператор не хранит данные банковской карты пользователя. Обработка и хранение платежных данных, в том числе для целей автоматических списаний, осуществляются платежным партнером.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "4.4. Платный доступ считается активированным с момента успешного проведения оплаты и действует в течение 1 месяца с момента активации.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "4.5. По истечении оплаченного периода: при отключенном автопродлении платный доступ прекращается, и для продления пользователь может совершить новую оплату; при включенном автопродлении подписка продлевается автоматически в порядке, предусмотренном Условиями автоматических списаний.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "4.6. Пользователь вправе в любой момент отключить автопродление в настройках аккаунта, в разделе «Оплата». После отключения автопродления дальнейшие автоматические списания не производятся; доступ сохраняется до конца оплаченного периода.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "5. Возврат денежных средств",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "5.1. Денежные средства за оплаченный период, как правило, не возвращаются, поскольку доступ предоставляется с момента оплаты.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "5.2. Неиспользование платного доступа или отдельных его возможностей не является основанием для возврата.",
          }),
          imported("p", {
            className: imported_3.text,
            children: "5.3. Возврат возможен в следующих случаях:",
          }),
          imported("ul", {
            className: imported_3.list,
            children: [
              imported("li", {
                children: "ошибочное или двойное списание;",
              }),
              imported("li", {
                children:
                  "невозможность предоставить платный доступ по вине оператора;",
              }),
              imported("li", {
                children:
                  "иные случаи, предусмотренные законодательством Российской Федерации.",
              }),
            ],
          }),
          imported("p", {
            className: imported_3.text,
            children: [
              "5.4. Для рассмотрения вопроса о возврате пользователь направляет обращение по адресу: ",
              imported("a", {
                href: "mailto:billing@itd.fun",
                className: imported_3.contact,
                children: "billing@itd.fun",
              }),
              ", с указанием данных аккаунта, даты и суммы платежа.",
            ],
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "5.5. Оператор рассматривает обращение в разумный срок и при наличии оснований осуществляет возврат тем же способом, которым была произведена оплата.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "6. Изменение стоимости и состава преимуществ",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "6.1. Оператор вправе изменять стоимость, состав преимуществ, а также порядок предоставления платного доступа.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "6.2. Изменения применяются к будущим периодам и не распространяются на уже оплаченный период.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "6.3. Изменение состава тестовых функций допускается оператором в любое время и не считается ненадлежащим исполнением.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "7. Нарушение правил сервиса",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "7.1. Платный доступ действует только в рамках аккаунта пользователя и не может быть передан другому лицу.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "7.2. При нарушении Пользовательского соглашения оператор вправе ограничить или прекратить предоставление платного доступа.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "7.3. Ограничение доступа по основаниям, связанным с нарушением правил, не является основанием для возврата денежных средств.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "8. Возраст и дееспособность",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "8.1. Оформляя подписку, пользователь подтверждает, что обладает правом совершать такие действия в соответствии с законодательством Российской Федерации.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "8.2. Если пользователь не достиг возраста полной дееспособности, оформление подписки допускается только при наличии необходимого согласия законного представителя, если такое согласие требуется по закону.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "8.3. Ответственность за соблюдение требований законодательства в части возраста и дееспособности несет пользователь и, при необходимости, его законный представитель.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "9. Ограничение ответственности",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "9.1. Оператор не гарантирует, что подписка будет полностью соответствовать субъективным ожиданиям пользователя.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "9.2. Оператор не несет ответственности за невозможность использования подписки, если такая невозможность вызвана действиями третьих лиц, перебоями в работе сети Интернет, оборудования пользователя, платежной инфраструктуры либо иными обстоятельствами, не зависящими от оператора.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "9.3. Оператор не несет ответственности за временную недоступность отдельных тестовых функций, если в остальной части подписка предоставляется пользователю и оператор принимает разумные меры для поддержания работоспособности сервиса.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "10. Обработка персональных данных",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "10.1. Для оформления, оплаты, продления, сопровождения и прекращения подписки оператор вправе обрабатывать сведения, связанные с подпиской и платежами пользователя, в объеме, необходимом для исполнения договора, ведения учета, направления уведомлений, рассмотрения обращений и соблюдения требований законодательства.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "10.2. Обработка персональных данных осуществляется в соответствии с Политикой конфиденциальности сервиса итд.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "10.3. Для целей приема оплаты и сопровождения подписки оператор вправе передавать необходимые сведения платежному партнеру и иным лицам, участвующим в проведении платежа, в объеме, необходимом для достижения указанных целей.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "11. Изменение условий",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "11.1. Оператор вправе вносить изменения в настоящие Условия подписки.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "11.2. Актуальная редакция Условий подписки размещается на сайте сервиса итд.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "11.3. Продолжение использования платного доступа после изменения условий означает согласие пользователя с новой редакцией.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "12. Контактная информация",
          }),
          imported("p", {
            className: imported_3.text,
            children: [
              "12.1. По всем вопросам, связанным с оплатой и возвратом денежных средств, пользователь может обратиться по адресу: ",
              imported("a", {
                href: "mailto:billing@itd.fun",
                className: imported_3.contact,
                children: "billing@itd.fun",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { fn_c8dece42 as default };
