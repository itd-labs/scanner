const local_605932fe = (
  arg,
  arg_2 = local_605932fe,
  arg_3 = arg_2.f ||
    (arg_2.f = [
      "./emoji-picker.js",
      "../entry.js",
      "../entry.css",
      "./emoji-picker.css",
    ]),
) => arg.map((arg) => arg_3[arg]);
import {
  symbol_073 as imported,
  symbol_056 as imported_2,
  symbol_002 as imported_3,
  symbol_075 as imported_4,
  symbol_069 as imported_5,
  symbol_001 as imported_6,
  symbol_003 as imported_7,
  symbol_062 as imported_8,
  symbol_078 as imported_9,
  symbol_063 as imported_10,
  symbol_067 as imported_11,
  symbol_057 as imported_12,
  symbol_076 as imported_13,
  symbol_040 as imported_14,
  symbol_037 as imported_15,
  symbol_064 as imported_16,
} from "../entry.js";
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
const local_fb418fb7 = "c_stepper";
const local_2d2dc45b = "c_track";
const local_c6284533 = "c_progress";
const local_cd89e6b9 = "c_step";
const local_6ab69625 = "c_active";
const local_fcd1eed3 = {
  stepper: local_fb418fb7,
  track: local_2d2dc45b,
  progress: local_c6284533,
  step: local_cd89e6b9,
  active: local_6ab69625,
};
function fn_753e19e1({
  steps: arg,
  currentStep: arg_2,
  onStepClick: arg_3,
  className: arg_4,
}) {
  const local = ((arg_2 - 1) / (arg - 1)) * 100;
  return imported("div", {
    className: `${local_fcd1eed3.stepper} ${arg_4 || ""}`,
    children: [
      imported("div", {
        className: local_fcd1eed3.track,
        children: imported("div", {
          className: local_fcd1eed3.progress,
          style: {
            width: `${local}%`,
          },
        }),
      }),
      Array.from(
        {
          length: arg,
        },
        (arg, arg_2) => arg_2 + 1,
      ).map((arg) =>
        imported(
          "button",
          {
            type: "button",
            className: `${local_fcd1eed3.step} ${arg_2 >= arg ? local_fcd1eed3.active : ""}`,
            onClick: () => arg_3?.(arg),
            children: arg,
          },
          arg,
        ),
      ),
    ],
  });
}
const local_ef251bc6 = "c_page";
const local_adb43aea = "c_container";
const local_f1c23efb = "c_header";
const local_9d9cf508 = "c_title";
const local_8c84ac4c = "c_subtitle";
const local_fb418fb7_2 = "c_stepper";
const local_7ab56d01 = "c_form";
const local_cd23a337 = "c_error";
const local_4dc32079 = "c_inputGroup";
const local_fe9ec23f = "c_label";
const local_ca66b2a4 = "c_hint";
const local_301b9a53 = "c_input";
const local_053694e9 = "c_inputError";
const local_889abf52 = "c_fieldError";
const local_d473c6f8 = "c_avatarSection";
const local_d08a3ce8 = "c_avatarPicker";
const local_5d627137 = "c_avatar";
const local_1345f20f = "c_avatarEmpty";
const local_1837c831 = "c_avatarHint";
const local_4f01dac7 = "c_emojiPickerPortal";
const local_8b15c25b = "c_emojiPickerBackdrop";
const local_7149ec44 = "c_submitButton";
const local_1edc2ace = {
  page: local_ef251bc6,
  container: local_adb43aea,
  header: local_f1c23efb,
  title: local_9d9cf508,
  subtitle: local_8c84ac4c,
  stepper: local_fb418fb7_2,
  form: local_7ab56d01,
  error: local_cd23a337,
  inputGroup: local_4dc32079,
  label: local_fe9ec23f,
  hint: local_ca66b2a4,
  input: local_301b9a53,
  inputError: local_053694e9,
  fieldError: local_889abf52,
  avatarSection: local_d473c6f8,
  avatarPicker: local_d08a3ce8,
  avatar: local_5d627137,
  avatarEmpty: local_1345f20f,
  avatarHint: local_1837c831,
  emojiPickerPortal: local_4f01dac7,
  emojiPickerBackdrop: local_8b15c25b,
  submitButton: local_7149ec44,
};
const local_968eaf70 = imported_9(() =>
  imported_16(
    () => import("./emoji-picker.js"),
    local_605932fe([0, 1, 2, 3]),
  ).then((arg) => ({
    default: arg.EmojiPicker,
  })),
);
export const local_41026ddf = (arg) => {
  const [local, local_2] = imported_2(1);
  const [local_3, local_4] = imported_2("");
  const [local_5, local_6] = imported_2("");
  const [local_7, local_8] = imported_2(null);
  const [local_9, local_10] = imported_2(null);
  const [local_11, local_12] = imported_2(null);
  const [local_13, local_14] = imported_2(null);
  const [local_15, local_16] = imported_2(false);
  const [local_17, local_18] = imported_2(false);
  const [local_19, local_20] = imported_2(false);
  const [local_21, local_22] = imported_2(null);
  const local_23 = imported_3(null);
  const { createProfile: local_24 } = imported_4();
  const local_25 = (arg) => {
    if (arg) {
      if (arg.length < 3) {
        return "Минимум 3 символа";
      }
      if (arg.length > 50) {
        return "Максимум 50 символов";
      }
      if (/^[a-zA-Z0-9_]+$/.test(arg)) {
        if (/^[0-9_]/.test(arg)) {
          return "Не может начинаться с цифры или _";
        }
        if (/_$/.test(arg)) {
          return "Не может заканчиваться на _";
        }
        if (/__/.test(arg)) {
          return "Не может содержать два _ подряд";
        }
        return null;
      }
      return "Только латиница, цифры и _";
    }
    return "Введите username";
  };
  const local_26 = async (arg) => {
    arg.preventDefault();
    local_10(null);
    local_12(null);
    local_14(null);
    const local = local_3.trim();
    const local_2 = local_5.trim();
    if (!local) {
      local_12("Введите имя");
      return;
    }
    if (local.length < 2) {
      local_12("Имя должно быть не менее 2 символов");
      return;
    }
    const local_3 = local_25(local_2);
    if (local_3) {
      local_14(local_3);
      return;
    }
    local_18(true);
    try {
      if (!(await imported_11.checkUsername(local_2))) {
        local_14("Этот username уже занят");
        return;
      }
      local_2(2);
    } catch (error) {
      console.error("Failed to check username:", error);
      local_2(2);
    } finally {
      local_18(false);
    }
  };
  const local_27 = async (arg) => {
    arg.preventDefault();
    if (local_7) {
      local_10(null);
      local_16(true);
      try {
        await local_24({
          displayName: local_3.trim(),
          username: local_5.trim(),
          avatar: local_7,
        });
        imported_12("../site/index.html");
      } catch (error) {
        console.error("Profile creation error:", error);
        if (imported_13(error)) {
          switch (error.code) {
            case imported_15.PROFILE_USERNAME_TAKEN:
            case imported_15.PROFILE_USERNAME_RESERVED:
              local_2(1);
              local_14(imported_14(error.code, error.message));
              break;
            default:
              local_10(
                imported_14(
                  error.code,
                  error.message || "Ошибка создания профиля",
                ),
              );
          }
        } else {
          local_10("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        local_16(false);
      }
    }
  };
  const local_28 = () => {
    local_2(1);
    local_10(null);
  };
  const local_29 = (arg) => {
    if (arg === 1) {
      local_2(1);
      local_10(null);
    } else if (arg === 2 && local === 1) {
      const local = local_3.trim();
      const local_2 = local_5.trim();
      if (!local || local.length < 2 || local_25(local_2) || local_13) {
        return;
      }
      local_2(2);
    }
  };
  const local_30 = imported_5((arg) => {
    local_8(arg.emoji);
    local_20(false);
  }, []);
  const local_31 = imported_5(() => {
    if (!local_23.current) {
      return;
    }
    const local = local_23.current.getBoundingClientRect();
    const local_2 = 280;
    const local_3 = 380;
    const local_4 = window.innerWidth - local.right;
    const local_5 = local.left;
    const local_6 = window.innerHeight - local.bottom;
    let local_7;
    let local_8;
    let local_9;
    let local_10;
    if (local_6 >= local_3 + 8) {
      local_7 = local.bottom + 8;
      local_9 = "top";
    } else {
      local_7 = local.top - local_3 - 8;
      local_9 = "bottom";
    }
    if (local_5 > local_4) {
      local_8 = local.right - local_2;
      local_10 = "right";
    } else {
      local_8 = local.left;
      local_10 = "left";
    }
    local_22({
      top: local_7,
      left: local_8,
      transformOrigin: `${local_9} ${local_10}`,
    });
    local_20(true);
  }, []);
  return imported(imported_10, {
    children: [
      imported("div", {
        className: local_1edc2ace.page,
        children: imported("div", {
          className: local_1edc2ace.container,
          children: [
            imported("div", {
              className: local_1edc2ace.header,
              children: [
                imported("h1", {
                  className: local_1edc2ace.title,
                  children: "Настройка профиля",
                }),
                imported("p", {
                  className: local_1edc2ace.subtitle,
                  children: "Пожалуйста, укажите данные профиля",
                }),
              ],
            }),
            imported(fn_753e19e1, {
              steps: 2,
              currentStep: local,
              onStepClick: local_29,
              className: local_1edc2ace.stepper,
            }),
            local_9 &&
              imported("div", {
                className: local_1edc2ace.error,
                children: local_9,
              }),
            local === 1 &&
              imported("form", {
                className: local_1edc2ace.form,
                onSubmit: local_26,
                children: [
                  imported("div", {
                    className: local_1edc2ace.inputGroup,
                    children: [
                      imported("label", {
                        className: local_1edc2ace.label,
                        children: "Имя",
                      }),
                      imported("p", {
                        className: local_1edc2ace.hint,
                        children: "Как тебя будут видеть другие пользователи",
                      }),
                      imported("input", {
                        type: "text",
                        className: `${local_1edc2ace.input} ${local_11 ? local_1edc2ace.inputError : ""}`,
                        value: local_3,
                        onInput: (arg) => {
                          local_4(arg.target.value);
                          local_12(null);
                        },
                        placeholder: "Иван Иванов",
                        maxLength: 50,
                      }),
                      local_11 &&
                        imported("span", {
                          className: local_1edc2ace.fieldError,
                          children: local_11,
                        }),
                    ],
                  }),
                  imported("div", {
                    className: local_1edc2ace.inputGroup,
                    children: [
                      imported("label", {
                        className: local_1edc2ace.label,
                        children: "Username",
                      }),
                      imported("p", {
                        className: local_1edc2ace.hint,
                        children:
                          'Уникальный никнейм для твоего профиля (латиница, цифры, и "_")',
                      }),
                      imported("input", {
                        type: "text",
                        className: `${local_1edc2ace.input} ${local_13 ? local_1edc2ace.inputError : ""}`,
                        value: local_5,
                        onInput: (arg) => {
                          local_6(arg.target.value.toLowerCase());
                          local_14(null);
                        },
                        placeholder: "ivanov1998",
                        maxLength: 50,
                      }),
                      local_13 &&
                        imported("span", {
                          className: local_1edc2ace.fieldError,
                          children: local_13,
                        }),
                    ],
                  }),
                  imported(imported_7, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: local_1edc2ace.submitButton,
                    disabled: local_17,
                    children: local_17 ? "Проверка..." : "Продолжить",
                  }),
                ],
              }),
            local === 2 &&
              imported("form", {
                className: local_1edc2ace.form,
                onSubmit: local_27,
                children: [
                  imported("div", {
                    className: local_1edc2ace.avatarSection,
                    children: [
                      imported("label", {
                        className: local_1edc2ace.label,
                        children: "Эмоджи-клан",
                      }),
                      imported("p", {
                        className: local_1edc2ace.hint,
                        children:
                          "Поменять его позже - нельзя. Выбрав эмоджи, ты вступаешь в клан с теми же, у кого такой же!",
                      }),
                      imported("div", {
                        className: local_1edc2ace.avatarPicker,
                        children: [
                          imported("div", {
                            ref: local_23,
                            className: `${local_1edc2ace.avatar} ${local_7 ? "" : local_1edc2ace.avatarEmpty}`,
                            onClick: local_31,
                            children: local_7 || "?",
                          }),
                          imported("span", {
                            className: local_1edc2ace.avatarHint,
                            children: local_7
                              ? "Нажми чтобы изменить"
                              : "Нажми чтобы выбрать",
                          }),
                        ],
                      }),
                    ],
                  }),
                  imported(imported_7, {
                    type: "button",
                    variant: "secondary",
                    size: "lg",
                    fullWidth: true,
                    onClick: local_28,
                    disabled: local_15,
                    children: "Назад",
                  }),
                  imported(imported_7, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: local_1edc2ace.submitButton,
                    disabled: local_15 || !local_7,
                    children: "Завершить",
                  }),
                ],
              }),
          ],
        }),
      }),
      local_19 &&
        local_21 &&
        imported_6(
          imported("div", {
            className: local_1edc2ace.emojiPickerPortal,
            style: {
              position: "fixed",
              top: local_21.top,
              left: local_21.left,
              zIndex: 1000,
              transformOrigin: local_21.transformOrigin,
            },
            children: [
              imported("div", {
                className: local_1edc2ace.emojiPickerBackdrop,
                onClick: () => local_20(false),
              }),
              imported(imported_8, {
                fallback: null,
                children: imported(local_968eaf70, {
                  onEmojiSelect: local_30,
                  onClose: () => local_20(false),
                  excludeCategories: ["Flags"],
                }),
              }),
            ],
          }),
          document.body,
        ),
    ],
  });
};
export { local_41026ddf as default };
