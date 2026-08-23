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
export function fn_e085b95d(arg) {
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
        children: "Условия автоматических списаний (автопродление)",
      }),
      imported("p", {
        className: imported_3.updated,
        children: "Последнее обновление: 6 июля 2026",
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
              "1.1. Настоящие Условия регулируют порядок автоматического продления подписки ИТД НУКСТА и списания денежных средств с сохранённых способов оплаты пользователя (автоплатежи, рекуррентные платежи) в сервисе итд.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "1.2. Настоящие Условия применяются только к пользователям, которые при оформлении оплаты дали согласие на автоматические списания. Они являются дополнением к Условиям платного доступа ИТД НУКСТА и Пользовательскому соглашению.",
          }),
          imported("p", {
            className: imported_3.text,
            children: [
              "1.3. Оператором сервиса является:",
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
              "1.4. Приём платежей и сохранение способа оплаты осуществляется платёжным партнёром — ЮKassa (ООО НКО «ЮМани»).",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "2. Согласие на автоматические списания",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "2.1. Согласие на автоматические списания даётся пользователем явным действием при оформлении оплаты — нажатием кнопки оплаты, рядом с которой раскрыты сумма, периодичность списаний и ссылка на настоящие Условия, либо проставлением соответствующей отметки. Без такого согласия автоматические списания не производятся, а оплата является разовой.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "2.2. Совершая указанное действие, пользователь подтверждает, что ознакомлен с суммой, периодичностью списаний и порядком их отключения, и разрешает оператору и платёжному партнёру сохранить его способ оплаты для последующих автоматических списаний.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "3. Сумма и периодичность",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "3.1. Стоимость одного периода подписки составляет 199 рублей за 1 (один) месяц.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "3.2. При включённом автопродлении плата за каждый следующий период списывается автоматически с любого из сохранённых пользователем способов оплаты (в первую очередь — с основного) в дату окончания оплаченного периода или в разумный срок после неё, без дополнительного подтверждения со стороны пользователя.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "3.3. Изменение стоимости применяется к автопродлению только после уведомления пользователя не позднее чем за 7 дней до очередного списания. До даты списания пользователь вправе отключить автопродление.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "4. Хранение способа оплаты",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "4.1. Оператор не получает и не хранит полные данные банковской карты. Сохранение способа оплаты для автоматических списаний осуществляет платёжный партнёр; оператору доступны только маскированные данные (последние цифры номера карты) и технический идентификатор способа оплаты.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "5. Отключение автопродления и отзыв согласия",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "5.1. Пользователь вправе в любой момент отключить автопродление и отвязать сохранённый способ оплаты в настройках аккаунта, в разделе «Оплата», без обращения в поддержку.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "5.2. Отключение автопродления не прекращает текущий оплаченный период — доступ сохраняется до его окончания, дальнейшие списания не производятся.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "5.3. После получения оператором отказа пользователя от автоматических списаний оператор не вправе осуществлять последующие автоматические списания с соответствующего платёжного средства. Возобновление автопродления возможно только при новом явном согласии пользователя.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "6. Неуспешные списания",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "6.1. Если очередное автоматическое списание не удалось (недостаточно средств, истёк срок действия карты и т.п.), оператор вправе повторять попытки списания, в том числе с других сохранённых пользователем способов оплаты, в разумный срок после окончания оплаченного периода. На время повторных попыток доступ к подписке может сохраняться.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "6.2. Если ни одна попытка списания не удалась, подписка прекращается. Задолженность у пользователя не образуется.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "7. Уведомления",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "7.1. Оператор вправе направлять пользователю уведомления о предстоящих и совершённых списаниях, а также о неудачных попытках списания, по адресу электронной почты, указанному при оформлении оплаты.",
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "8. Возврат денежных средств",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "8.1. Денежные средства, списанные после получения оператором отказа пользователя от автоматических списаний, возвращаются пользователю в полном объёме.",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "8.2. В остальных случаях возврат осуществляется в порядке, предусмотренном Условиями платного доступа ИТД НУКСТА.",
          }),
          imported("p", {
            className: imported_3.text,
            children: [
              "8.3. По вопросам возврата пользователь может обратиться по адресу: ",
              imported("a", {
                href: "mailto:billing@itd.fun",
                className: imported_3.contact,
                children: "billing@itd.fun",
              }),
            ],
          }),
        ],
      }),
      imported("section", {
        className: imported_3.section,
        children: [
          imported("h2", {
            className: imported_3.sectionTitle,
            children: "9. Изменение условий",
          }),
          imported("p", {
            className: imported_3.text,
            children:
              "9.1. Оператор вправе вносить изменения в настоящие Условия. Актуальная редакция размещается на сайте сервиса итд.",
          }),
        ],
      }),
    ],
  });
}
export { fn_e085b95d as default };
