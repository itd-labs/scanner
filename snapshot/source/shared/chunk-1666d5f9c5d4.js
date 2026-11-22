import {
  symbol_295 as imported,
  symbol_084 as imported_2,
  symbol_012 as imported_3,
  symbol_222 as imported_4,
  symbol_002 as imported_5,
  symbol_282 as imported_6,
  symbol_139 as imported_7,
  symbol_041 as imported_8,
  symbol_042 as imported_9,
  symbol_072 as imported_10,
  symbol_062 as imported_11,
  symbol_083 as imported_12,
  symbol_046 as imported_13,
  symbol_045 as imported_14,
  symbol_140 as imported_15,
} from "../entry-2.js";
import {
  symbol_004 as imported_16,
  symbol_002 as imported_17,
  symbol_003 as imported_18,
  symbol_001 as imported_19,
} from "./use-purchase-dialog.js";
import { I as imported_20 } from "../components/icon-info.js";
const symbol_001 = ({ size: arg = 18 }) =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      imported("path", {
        fill: "currentColor",
        d: "M7.048 14.278c.022.184.052.368.09.55v.001a6.5 6.5 0 0 0 .466 1.403 4.044 4.044 0 0 1-1.442-.982.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328c.12.01.237.018.354.026Zm3.925 1.383c.052.062.108.12.166.179h-.001a3.253 3.253 0 0 1-.166-.179ZM9 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .088-.005.173-.006.254A6.5 6.5 0 0 0 7 13.443c-1.682-.111-3.11-.43-3.712-1.283-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm.32 10.333-.067.177c.02-.06.042-.119.065-.177l.075-.174a4.47 4.47 0 0 0-.074.174Zm4.998-2.759v.002c-.017-.003-.034-.008-.051-.01l.051.008Zm-.344-.05Z",
      }),
      imported("path", {
        fill: "currentColor",
        d: "M15.065 11.348c.324 0 .587.263.587.587v1.956a.587.587 0 0 0 1.174 0V13.5a3.327 3.327 0 1 0-1.33 2.66.587.587 0 0 1 .704.94 4.5 4.5 0 1 1 1.8-3.6v.391a1.76 1.76 0 0 1-3.05 1.2 2.152 2.152 0 1 1-.386-3.46.586.586 0 0 1 .501-.283ZM12.522 13.5a.978.978 0 1 0 1.956 0 .978.978 0 0 0-1.956 0Z",
      }),
    ],
  });
const local_645d4878 = ({ size: arg = 24 }) =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 24 24",
    fill: "none",
    children: imported("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M8.078 10.367c0-.01.006-.019.006-.029V5.636a3.46 3.46 0 0 0 1.257.526.749.749 0 1 0 .299-1.469c-1.135-.23-1.589-1.333-1.606-1.375a.75.75 0 0 0-1.45.269v4.3a2.873 2.873 0 0 0-1.418-.384 2.92 2.92 0 0 0-2.916 2.918 2.92 2.92 0 0 0 2.916 2.916 2.92 2.92 0 0 0 2.917-2.916c0-.019-.005-.035-.005-.054ZM21.75 6.503a.749.749 0 0 0-1.067-.68c-2.557 1.189-5.245 1.683-7.982 1.469a.752.752 0 0 0-.568.196.752.752 0 0 0-.24.55v7.697a2.866 2.866 0 0 0-1.402-.377 2.907 2.907 0 0 0-2.903 2.904 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903v-6.925c.183.007.368.023.552.023 2.151 0 4.26-.427 6.303-1.228V14.2a2.87 2.87 0 0 0-1.403-.377 2.906 2.906 0 0 0-2.903 2.903 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903V6.502Z",
      "clip-rule": "evenodd",
    }),
  });
const local_4c6f99c7 = ({ size: arg = 20 }) =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    viewBox: "0 0 20 20",
    fill: "none",
    children: imported("path", {
      fill: "currentColor",
      d: "M9.905 2.501c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.39-1.69 4.06-4.113 4.06H4.113c-2.422 0-4.113-1.67-4.113-4.06V6.56c0-2.391 1.691-4.06 4.113-4.06zm8.053 2.379c.439-.223.954-.2 1.373.064.419.263.669.72.669 1.22v7.675a1.43 1.43 0 0 1-1.412 1.436c-.215 0-.43-.05-.631-.153l-1.481-.748a1.62 1.62 0 0 1-.888-1.457V7.085c0-.621.34-1.18.888-1.456z",
    }),
  });
function fn_2c1b28aa({ text: arg }) {
  return imported(imported_15, {
    text: arg,
    multiline: true,
    children: imported("span", {
      className: imported_18.infoBtn,
      children: imported(imported_20, {
        size: 14,
      }),
    }),
  });
}
const local_ae1f867d = "new";
function fn_eacf6596(arg) {
  if (arg.type === "bank_card") {
    return `${arg.cardBrand || "Карта"} •••• ${arg.cardLast4 || ""}`.trim();
  }
  if (arg.type === "sbp") {
    return "СБП";
  }
  return arg.type;
}
function symbol_002({
  isOpen: arg,
  onClose: arg_2,
  preferCurrentPayment: arg_3,
}) {
  const local = imported_2();
  const local_2 = imported_3((arg) => arg.status);
  const [local_3, local_4] = imported_4(false);
  const [local_5, local_6] = imported_4(false);
  const [local_7, local_8] = imported_4(0);
  const local_9 = `${arg}:${local_2}:${local?.id}:${local?.subscription?.isActive}`;
  const local_10 = imported_5(local_9);
  local_10.current = local_9;
  const local_11 = imported_5(true);
  const local_12 = imported_5(0);
  const local_13 = () => {
    const local = imported_13.captureRequest();
    const local_2 = local_12.current;
    return () =>
      local_11.current &&
      local_10.current === local_9 &&
      local() &&
      local_12.current === local_2 &&
      imported_3.getState().status === "authenticated" &&
      imported_3.getState().profile?.id === local?.id;
  };
  const local_14 = () => {
    local_12.current++;
    local_10.current = "";
    arg_2();
  };
  imported_6(() => {
    local_11.current = true;
    return () => {
      local_11.current = false;
    };
  }, []);
  const [local_15, local_16] = imported_4([]);
  const [local_17, local_18] = imported_4(local_ae1f867d);
  const [local_19, local_20] = imported_4(null);
  imported_6(() => {
    local_12.current++;
    local_16([]);
    local_18(local_ae1f867d);
    local_20(null);
    local_4(false);
    local_6(false);
    if (!arg || local_2 !== "authenticated" || !local?.id) {
      return;
    }
    let local = true;
    const local_2 = local_13();
    const local_3 = () => local && local_2();
    imported_7
      .getStatus()
      .then((arg) => {
        if (local_3()) {
          local_20({
            active: arg.active,
            profileActive: local?.subscription?.isActive,
            expiresAt: arg.expiresAt,
          });
          local_4(true);
          if (arg.recurringEnabled) {
            imported_7
              .getMethods()
              .then((arg) => {
                if (!local_3()) {
                  return;
                }
                local_16(arg);
                const local = arg.find((arg) => arg.isDefault) || arg[0];
                local_18(local ? local.id : local_ae1f867d);
              })
              .catch(() => {
                if (local_3()) {
                  local_16([]);
                }
              });
          }
        }
      })
      .catch(() => {
        if (local_3()) {
          local_6(true);
        }
      });
    return () => {
      local = false;
    };
  }, [arg, local_2, local?.id, local?.subscription?.isActive, local_7]);
  const local_21 =
    (local_19?.profileActive === local?.subscription?.isActive
      ? local_19?.active
      : null) ??
    local?.subscription?.isActive ??
    false;
  const local_22 = imported_16({
    preferCurrentPayment: arg_3,
    open: arg,
    eligible: local_3 && !local_21 && local_2 === "authenticated",
    ownerId: local?.id ?? null,
    kind: "self",
    recipientId: null,
    recipientName: null,
    scopeKey: local_9,
    methodId: local_17 !== local_ae1f867d ? local_17 : undefined,
    captureCurrent: local_13,
    onClose: local_14,
    onSucceeded: () => {
      imported_14.success("Подписка оформлена!");
      local_14();
      imported_3
        .getState()
        .fetchProfile()
        .catch(() => {});
    },
  });
  const local_23 = imported_17(arg, "ИТД НУКСТА");
  if (arg) {
    return imported_8(
      imported(imported_12, {
        onClose: local_22.dismiss,
        showHeader: false,
        frameless: true,
        className: imported_18.modal,
        children: [
          imported(imported_9, {}),
          imported("div", {
            className: imported_18.sub,
            ref: local_23,
            "data-purchase-scroll": true,
            children: [
              imported("div", {
                className: imported_18.top,
                children: [
                  imported("div", {
                    className: imported_18.title,
                    children: "ИТД НУКСТА",
                  }),
                  imported("div", {
                    className: `${imported_18.section} ${imported_18.profileSection}`,
                    children: [
                      imported("div", {
                        className: imported_18.label,
                        children: "Ваш профиль с ИТД НУКСТА",
                      }),
                      imported("div", {
                        className: imported_18.row,
                        children: [
                          imported(imported_10, {
                            src: local?.avatar || null,
                            baseAvatar: local?.baseAvatar,
                            size: "sm",
                          }),
                          imported("div", {
                            children: [
                              imported("div", {
                                className: imported_18.name,
                                children: [
                                  imported("span", {
                                    className: imported_18.nameGradient,
                                    children: local?.displayName,
                                  }),
                                  imported("img", {
                                    src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                    alt: "НУКСТА",
                                    width: 24,
                                    height: 24,
                                    className: imported_18.namePinBadge,
                                  }),
                                ],
                              }),
                              imported("div", {
                                className: imported_18.dim,
                                children: "только что",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              imported("img", {
                src: "../assets/purchase-20261118.webp",
                alt: "",
                width: 960,
                height: 683,
                decoding: "async",
                className: imported_18.promoImage,
              }),
              imported("div", {
                className: imported_18.bottom,
                children: [
                  imported("div", {
                    className: imported_18.section,
                    children: [
                      imported("div", {
                        className: imported_18.labelRow,
                        children: [
                          imported("span", {
                            className: imported_18.label,
                            children: "Прикольные украшалки",
                          }),
                          imported(fn_2c1b28aa, {
                            text: "итд — полностью независимый проект, который мы делаем сами, без инвесторов и крупных компаний. подписка НУКСТА — это способ поддержать нас, если вам хочется. это совсем не обязательно, мы рады каждому и так! ❤️",
                          }),
                        ],
                      }),
                      imported("div", {
                        className: imported_18.features,
                        children: [
                          imported("div", {
                            className: imported_18.row,
                            children: [
                              imported("span", {
                                className: imported_18.icon,
                                children: imported("div", {
                                  className: imported_18.iconGradient,
                                }),
                              }),
                              imported("div", {
                                children: imported("div", {
                                  className: `${imported_18.featureTitle} ${imported_18.gradientText}`,
                                  children: "Уникальный цвет ника",
                                }),
                              }),
                            ],
                          }),
                          imported("div", {
                            className: imported_18.row,
                            children: [
                              imported("span", {
                                className: imported_18.icon,
                                children: imported("img", {
                                  src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                  alt: "Пин",
                                  width: 20,
                                  height: 20,
                                }),
                              }),
                              imported("div", {
                                children: imported("div", {
                                  className: imported_18.featureTitle,
                                  children: "Пин поддерживателя",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  imported("div", {
                    className: imported_18.section,
                    children: [
                      imported("div", {
                        className: imported_18.labelRow,
                        children: [
                          imported("span", {
                            className: imported_18.label,
                            children: "Сможете с нами тестить новые штуки",
                          }),
                          imported(fn_2c1b28aa, {
                            text: "мы постоянно добавляем в итд новые штуки и обычно тестим их внутри команды перед релизом. с подпиской НУКСТА вы сможете попробовать их первыми вместе с нами! а когда всё протестим — фишки станут доступны всем пользователям итд",
                          }),
                        ],
                      }),
                      imported("div", {
                        className: imported_18.features,
                        children: [
                          imported("div", {
                            className: imported_18.row,
                            children: [
                              imported("span", {
                                className: imported_18.icon,
                                children: imported(local_4c6f99c7, {
                                  size: 20,
                                }),
                              }),
                              imported("div", {
                                className: imported_18.featureContent,
                                children: imported("div", {
                                  className: imported_18.featureTitle,
                                  children: "Загрузка видео",
                                }),
                              }),
                            ],
                          }),
                          imported("div", {
                            className: imported_18.row,
                            children: [
                              imported("span", {
                                className: imported_18.icon,
                                children: imported(imported_11, {
                                  size: 20,
                                }),
                              }),
                              imported("div", {
                                className: imported_18.featureContent,
                                children: imported("div", {
                                  className: imported_18.featureTitle,
                                  children: "Сообщения",
                                }),
                              }),
                            ],
                          }),
                          imported("div", {
                            className: imported_18.row,
                            children: [
                              imported("span", {
                                className: imported_18.icon,
                                children: imported(local_645d4878, {
                                  size: 20,
                                }),
                              }),
                              imported("div", {
                                className: imported_18.featureContent,
                                children: imported("div", {
                                  className: imported_18.featureTitle,
                                  children: [
                                    "Музыка ",
                                    imported("span", {
                                      className: imported_18.soon,
                                      children: "soon",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  imported("div", {
                    className: imported_18.footer,
                    children: [
                      imported(imported_19, {
                        ...local_22.panel,
                        onRetryRead: () => {
                          if (local_5) {
                            local_8((arg) => arg + 1);
                          } else {
                            local_22.panel.onRetryRead();
                          }
                        },
                        step: local_21 ? "active" : local_22.panel.step,
                        actualExpiryLabel:
                          local_21 && local_19?.expiresAt
                            ? new Date(local_19.expiresAt).toLocaleDateString(
                                "ru-RU",
                              )
                            : local_22.panel.actualExpiryLabel,
                        error: local_5
                          ? "Не удалось загрузить условия подписки. Откройте окно ещё раз"
                          : local_22.panel.error,
                        methodSelector:
                          local_15.length > 0
                            ? imported("label", {
                                className: imported_18.methodSelectRow,
                                children: [
                                  imported("span", {
                                    className: imported_18.methodSelectLabel,
                                    children: "Способ оплаты",
                                  }),
                                  imported("select", {
                                    className: imported_18.methodSelect,
                                    value: local_17,
                                    disabled: !local_22.panel.canEditTerms,
                                    onChange: (arg) =>
                                      local_18(arg.currentTarget.value),
                                    children: [
                                      local_15.map((arg) =>
                                        imported(
                                          "option",
                                          {
                                            value: arg.id,
                                            children: fn_eacf6596(arg),
                                          },
                                          arg.id,
                                        ),
                                      ),
                                      imported("option", {
                                        value: local_ae1f867d,
                                        children: "Новый способ оплаты",
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : undefined,
                      }),
                      imported("button", {
                        type: "button",
                        className: imported_18.closeBtn,
                        onClick: local_22.dismiss,
                        children: "Закрыть",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      document.body,
    );
  }
  return null;
}
export { symbol_001, symbol_002 };
