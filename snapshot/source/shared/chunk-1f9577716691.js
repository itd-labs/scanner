import {
  symbol_071 as imported,
  symbol_054 as imported_2,
  symbol_002 as imported_3,
  symbol_058 as imported_4,
  symbol_065 as imported_5,
  a5 as imported_6,
  symbol_014 as imported_7,
  symbol_003 as imported_8,
  symbol_048 as imported_9,
  symbol_068 as imported_10,
} from "../entry.js";
import { I as imported_11 } from "../components/icon-check-circle.js";
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
const local_3aecdb4a = ({ size: arg = 48 }) =>
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
      imported("polygon", {
        points: "23 7 16 12 23 17 23 7",
      }),
      imported("rect", {
        x: "1",
        y: "5",
        width: "15",
        height: "14",
        rx: "2",
        ry: "2",
      }),
    ],
  });
const local_02d2738a = ({ size: arg = 48 }) =>
  imported("svg", {
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      imported("circle", {
        cx: "12",
        cy: "12",
        r: "10",
      }),
      imported("polyline", {
        points: "12 6 12 12 16 14",
      }),
    ],
  });
const local_f3718aa0 = "c_checkbox";
const local_f58ba0b9 = "c_disabled";
const local_301b9a53 = "c_input";
const local_555fad26 = "c_checkmark";
const local_fe9ec23f = "c_label";
const local_a85abe71 = {
  checkbox: local_f3718aa0,
  disabled: local_f58ba0b9,
  input: local_301b9a53,
  checkmark: local_555fad26,
  label: local_fe9ec23f,
};
function fn_c6f2a1ce({
  checked: arg,
  onChange: arg_2,
  label: arg_3,
  disabled: arg_4 = false,
  className: arg_5 = "",
}) {
  const local = (arg) => {
    arg_2(arg.target.checked);
  };
  return imported("label", {
    className: `${local_a85abe71.checkbox} ${arg_4 ? local_a85abe71.disabled : ""} ${arg_5}`,
    children: [
      imported("input", {
        type: "checkbox",
        checked: arg,
        onChange: local,
        disabled: arg_4,
        className: local_a85abe71.input,
      }),
      imported("span", {
        className: local_a85abe71.checkmark,
      }),
      arg_3 &&
        imported("span", {
          className: local_a85abe71.label,
          children: arg_3,
        }),
    ],
  });
}
const local_49250f21 = "c_modal";
const local_4d84dbb6 = "c_content";
const local_29c96261 = "c_statusIcon";
const local_9d9cf508 = "c_title";
const local_5df6efc6 = "c_description";
const local_97d0556d = "c_rejectionNotice";
const local_0b7d32e9 = "c_rejectionTitle";
const local_34a1d34d = "c_rejectionReason";
const local_2fedaa4d = "c_fileInput";
const local_da055f3b = "c_dropzone";
const local_c3e08f24 = "c_dropzoneIcon";
const local_3f555595 = "c_dropzoneText";
const local_f48a103b = "c_dropzoneHint";
const local_9c18575c = "c_preview";
const local_44ac62a9 = "c_video";
const local_a107e92c = "c_removeButton";
const local_cd23a337 = "c_error";
const local_7d33a597 = "c_progressBar";
const local_9954e574 = "c_progressFill";
const local_8c4f8b4b = "c_actions";
const local_143ad0dd = {
  modal: local_49250f21,
  content: local_4d84dbb6,
  statusIcon: local_29c96261,
  title: local_9d9cf508,
  description: local_5df6efc6,
  rejectionNotice: local_97d0556d,
  rejectionTitle: local_0b7d32e9,
  rejectionReason: local_34a1d34d,
  fileInput: local_2fedaa4d,
  dropzone: local_da055f3b,
  dropzoneIcon: local_c3e08f24,
  dropzoneText: local_3f555595,
  dropzoneHint: local_f48a103b,
  preview: local_9c18575c,
  video: local_44ac62a9,
  removeButton: local_a107e92c,
  error: local_cd23a337,
  progressBar: local_7d33a597,
  progressFill: local_9954e574,
  actions: local_8c4f8b4b,
};
const local_4cc8ec46 = 50 * 1024 * 1024;
const local_865f321e = ["video/mp4", "video/webm", "video/quicktime"];
export function fn_4ee55bd3({ onClose: arg }) {
  const [local, local_2] = imported_2("loading");
  const [local_3, local_4] = imported_2(null);
  const [local_5, local_6] = imported_2(null);
  const [local_7, local_8] = imported_2(false);
  const [local_9, local_10] = imported_2(false);
  const [local_11, local_12] = imported_2(null);
  const [local_13, local_14] = imported_2(0);
  const local_15 = imported_3(null);
  imported_4(() => {
    (async () => {
      try {
        const local = await imported_5.getVerificationStatus();
        local_2(local);
      } catch (error) {
        console.error("Failed to load verification status:", error);
        local_2(null);
      }
    })();
  }, []);
  imported_4(
    () => () => {
      if (local_5) {
        URL.revokeObjectURL(local_5);
      }
    },
    [local_5],
  );
  const local_16 = (arg) => {
    const local = arg.target.files?.[0];
    if (local) {
      local_12(null);
      if (!local_865f321e.includes(local.type)) {
        local_12("Поддерживаются только форматы MP4, WebM и MOV");
        return;
      }
      if (local.size > local_4cc8ec46) {
        local_12("Размер видео не должен превышать 50 МБ");
        return;
      }
      if (local_5) {
        URL.revokeObjectURL(local_5);
      }
      local_4(local);
      local_6(URL.createObjectURL(local));
    }
  };
  const local_17 = () => {
    local_15.current?.click();
  };
  const local_18 = () => {
    if (local_5) {
      URL.revokeObjectURL(local_5);
    }
    local_4(null);
    local_6(null);
    if (local_15.current) {
      local_15.current.value = "";
    }
  };
  const local_19 = async () => {
    if (!(!local_3 || !local_7)) {
      local_10(true);
      local_12(null);
      local_14(0);
      try {
        local_14(30);
        const local = await imported_10.uploadMedia(local_3);
        local_14(70);
        await imported_5.submitVerificationRequest(local.url);
        local_14(100);
        const local_2 = await imported_5.getVerificationStatus();
        local_2(local_2);
      } catch (error) {
        console.error("Failed to submit verification request:", error);
        local_12("Не удалось отправить заявку. Попробуйте позже.");
      } finally {
        local_10(false);
      }
    }
  };
  if (local === "loading") {
    return imported(imported_7, {
      onClose: arg,
      showHeader: false,
      className: local_143ad0dd.modal,
      children: imported("div", {
        className: local_143ad0dd.content,
        children: imported(imported_6, {}),
      }),
    });
  }
  if (
    local &&
    typeof local === "object" &&
    (local.status === "pending" || local.status === "approved")
  ) {
    return imported(imported_7, {
      onClose: arg,
      showHeader: false,
      className: local_143ad0dd.modal,
      children: imported("div", {
        className: local_143ad0dd.content,
        children: [
          imported("div", {
            className: local_143ad0dd.statusIcon,
            children:
              local.status === "approved"
                ? imported(imported_11, {
                    size: 48,
                  })
                : imported(local_02d2738a, {
                    size: 48,
                  }),
          }),
          imported("h2", {
            className: local_143ad0dd.title,
            children:
              local.status === "approved"
                ? "Вы верифицированы!"
                : "Заявка на рассмотрении",
          }),
          imported("p", {
            className: local_143ad0dd.description,
            children:
              local.status === "approved"
                ? "Поздравляем! Ваш аккаунт верифицирован."
                : "Ваша заявка на верификацию находится на рассмотрении. Мы уведомим вас о результате.",
          }),
          imported("div", {
            className: local_143ad0dd.actions,
            children: imported(imported_8, {
              variant: "primary",
              onClick: () => arg(),
              children: "Понятно",
            }),
          }),
        ],
      }),
    });
  }
  return imported(imported_7, {
    onClose: arg,
    showHeader: false,
    className: local_143ad0dd.modal,
    children: imported("div", {
      className: local_143ad0dd.content,
      children: [
        imported("h2", {
          className: local_143ad0dd.title,
          children: "Верификация",
        }),
        imported("p", {
          className: local_143ad0dd.description,
          children:
            "Запишите видео, в котором объясните, почему вам нужна галочка и без неё никак.",
        }),
        local?.status === "rejected" &&
          imported("div", {
            className: local_143ad0dd.rejectionNotice,
            children: [
              imported("span", {
                className: local_143ad0dd.rejectionTitle,
                children: "Предыдущая заявка отклонена",
              }),
              local.reason &&
                imported("span", {
                  className: local_143ad0dd.rejectionReason,
                  children: local.reason,
                }),
            ],
          }),
        imported("input", {
          ref: local_15,
          type: "file",
          accept: "video/mp4,video/webm,video/quicktime,.mp4,.webm,.mov",
          onChange: local_16,
          className: local_143ad0dd.fileInput,
        }),
        local_3
          ? imported("div", {
              className: local_143ad0dd.preview,
              children: [
                imported("video", {
                  src: local_5,
                  controls: true,
                  className: local_143ad0dd.video,
                }),
                imported("button", {
                  className: local_143ad0dd.removeButton,
                  onClick: local_18,
                  type: "button",
                  children: imported(imported_9, {
                    size: 20,
                  }),
                }),
              ],
            })
          : imported("div", {
              className: local_143ad0dd.dropzone,
              onClick: local_17,
              children: [
                imported("div", {
                  className: local_143ad0dd.dropzoneIcon,
                  children: imported(local_3aecdb4a, {
                    size: 48,
                  }),
                }),
                imported("span", {
                  className: local_143ad0dd.dropzoneText,
                  children: "Нажмите, чтобы выбрать видео",
                }),
                imported("span", {
                  className: local_143ad0dd.dropzoneHint,
                  children: "MP4, WebM или MOV, до 50 МБ",
                }),
              ],
            }),
        local_11 &&
          imported("div", {
            className: local_143ad0dd.error,
            children: local_11,
          }),
        local_9 &&
          imported("div", {
            className: local_143ad0dd.progressBar,
            children: imported("div", {
              className: local_143ad0dd.progressFill,
              style: {
                width: `${local_13}%`,
              },
            }),
          }),
        imported(fn_c6f2a1ce, {
          checked: local_7,
          onChange: local_8,
          disabled: local_9,
          label:
            "Я соглашаюсь с тем, что моё видео может быть использовано в контенте Nowkie",
        }),
        imported("div", {
          className: local_143ad0dd.actions,
          children: [
            imported(imported_8, {
              variant: "secondary",
              onClick: () => arg(),
              disabled: local_9,
              children: "Отмена",
            }),
            imported(imported_8, {
              variant: "primary",
              onClick: local_19,
              disabled: !local_3 || !local_7 || local_9,
              children: local_9 ? "Отправка..." : "Отправить заявку",
            }),
          ],
        }),
      ],
    }),
  });
}
export { fn_4ee55bd3 as default };
