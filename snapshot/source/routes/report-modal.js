import {
  a6 as imported,
  a7 as imported_2,
  symbol_056 as imported_3,
  symbol_073 as imported_4,
  symbol_003 as imported_5,
  symbol_014 as imported_6,
  symbol_076 as imported_7,
} from "../entry.js";
import { I as imported_8 } from "../components/icon-check-circle.js";
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
const local_d1ae2605 = {
  TARGET_NOT_FOUND: "REPORT_TARGET_NOT_FOUND",
  CANNOT_REPORT_OWN_CONTENT: "REPORT_CANNOT_REPORT_OWN_CONTENT",
  ALREADY_REPORTED: "REPORT_ALREADY_REPORTED",
  DESCRIPTION_TOO_LONG: "REPORT_DESCRIPTION_TOO_LONG",
};
const local_085f83db = {
  async createReport(arg) {
    const local = await imported.post(imported_2.reports.create, arg);
    return local?.data ?? local;
  },
};
const local_c65e23de = "c_modalReport";
const local_4d84dbb6 = "c_content";
const local_2df0bca8 = "c_successIcon";
const local_9d9cf508 = "c_title";
const local_8c84ac4c = "c_subtitle";
const local_a30124fc = "c_options";
const local_06982448 = "c_chip";
const local_ac8d62be = "c_radio";
const local_a62c266a = "c_chipActive";
const local_1fdad88e = "c_radioDot";
const local_cb45079b = "c_detailsSection";
const local_ea607732 = "c_textarea";
const local_cd23a337 = "c_error";
const local_8c4f8b4b = "c_actions";
const local_d71cd58f = {
  modalReport: local_c65e23de,
  content: local_4d84dbb6,
  successIcon: local_2df0bca8,
  title: local_9d9cf508,
  subtitle: local_8c84ac4c,
  options: local_a30124fc,
  chip: local_06982448,
  radio: local_ac8d62be,
  chipActive: local_a62c266a,
  radioDot: local_1fdad88e,
  detailsSection: local_cb45079b,
  textarea: local_ea607732,
  error: local_cd23a337,
  actions: local_8c4f8b4b,
};
const local_4e80675c = {
  spam: "spam",
  violence: "violence",
  hate: "harassment",
  adult: "nudity",
  misinfo: "misinformation",
  other: "other",
};
const local_ecb71779 = [
  {
    id: "spam",
    label: "Спам или нежелательный контент",
  },
  {
    id: "violence",
    label: "Насилие или опасные действия",
  },
  {
    id: "hate",
    label: "Ненависть или травля",
  },
  {
    id: "adult",
    label: "Контент для взрослых (18+)",
  },
  {
    id: "misinfo",
    label: "Дезинформация или обман",
  },
  {
    id: "other",
    label: "Другое",
  },
];
export function fn_b2801762({
  targetType: arg,
  targetId: arg_2,
  onClose: arg_3,
  onSubmit: arg_4,
}) {
  const [local, local_2] = imported_3(null);
  const [local_3, local_4] = imported_3("");
  const [local_5, local_6] = imported_3(false);
  const [local_7, local_8] = imported_3(null);
  const [local_9, local_10] = imported_3(false);
  const local_11 = async () => {
    if (local) {
      local_6(true);
      local_8(null);
      try {
        if (arg_4) {
          await arg_4(local, local_3);
        } else {
          await local_085f83db.createReport({
            targetType: arg,
            targetId: arg_2,
            reason: local_4e80675c[local],
            description: local_3 || undefined,
          });
        }
        local_10(true);
      } catch (error) {
        console.error("Failed to submit report:", error);
        if (imported_7(error)) {
          switch (error.code) {
            case local_d1ae2605.CANNOT_REPORT_OWN_CONTENT:
              local_8("Вы не можете пожаловаться на свой контент");
              break;
            case local_d1ae2605.ALREADY_REPORTED:
              local_8("Вы уже отправляли жалобу на этот контент");
              break;
            case local_d1ae2605.TARGET_NOT_FOUND:
              local_8("Контент не найден");
              break;
            case local_d1ae2605.DESCRIPTION_TOO_LONG:
              local_8("Описание слишком длинное (макс. 1000 символов)");
              break;
            default:
              local_8("Произошла ошибка при отправке жалобы");
          }
        } else {
          local_8("Произошла ошибка при отправке жалобы");
        }
      } finally {
        local_6(false);
      }
    }
  };
  if (local_9) {
    return imported_4(imported_6, {
      onClose: arg_3,
      showHeader: false,
      frameless: false,
      className: local_d71cd58f.modalReport,
      children: imported_4("div", {
        className: local_d71cd58f.content,
        children: [
          imported_4("div", {
            className: local_d71cd58f.successIcon,
            children: imported_4(imported_8, {
              size: 48,
            }),
          }),
          imported_4("h2", {
            className: local_d71cd58f.title,
            children: "Спасибо за жалобу!",
          }),
          imported_4("p", {
            className: local_d71cd58f.subtitle,
            children:
              "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
          }),
          imported_4("div", {
            className: local_d71cd58f.actions,
            children: imported_4(imported_5, {
              variant: "primary",
              onClick: (arg) => {
                arg.stopPropagation();
                arg_3();
              },
              children: "Понятно",
            }),
          }),
        ],
      }),
    });
  }
  return imported_4(imported_6, {
    onClose: arg_3,
    showHeader: false,
    frameless: false,
    className: local_d71cd58f.modalReport,
    children: imported_4("div", {
      className: local_d71cd58f.content,
      children: [
        imported_4("h2", {
          className: local_d71cd58f.title,
          children: "Пожаловаться",
        }),
        imported_4("p", {
          className: local_d71cd58f.subtitle,
          children: "Выберите причину жалобы",
        }),
        imported_4("div", {
          className: local_d71cd58f.options,
          children: local_ecb71779.map((arg) =>
            imported_4(
              "button",
              {
                type: "button",
                className: `${local_d71cd58f.chip} ${local === arg.id ? local_d71cd58f.chipActive : ""}`,
                onClick: () => local_2(arg.id),
                children: [
                  imported_4("span", {
                    className: local_d71cd58f.radio,
                    children:
                      local === arg.id &&
                      imported_4("span", {
                        className: local_d71cd58f.radioDot,
                      }),
                  }),
                  arg.label,
                ],
              },
              arg.id,
            ),
          ),
        }),
        imported_4("div", {
          className: local_d71cd58f.detailsSection,
          children: imported_4("textarea", {
            className: local_d71cd58f.textarea,
            placeholder: "Опишите подробнее (необязательно)...",
            value: local_3,
            onInput: (arg) => local_4(arg.target.value),
            rows: 3,
            maxLength: 1000,
          }),
        }),
        local_7 &&
          imported_4("div", {
            className: local_d71cd58f.error,
            children: local_7,
          }),
        imported_4("div", {
          className: local_d71cd58f.actions,
          children: [
            imported_4(imported_5, {
              variant: "secondary",
              onClick: (arg) => {
                arg.stopPropagation();
                arg_3();
              },
              disabled: local_5,
              children: "Отмена",
            }),
            imported_4(imported_5, {
              variant: "primary",
              onClick: (arg) => {
                arg.stopPropagation();
                local_11();
              },
              disabled: !local || local_5,
              children: local_5 ? "Отправка..." : "Отправить",
            }),
          ],
        }),
      ],
    }),
  });
}
export { fn_b2801762 as default };
