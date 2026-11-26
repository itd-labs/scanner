import {
  symbol_012 as imported,
  symbol_002 as imported_2,
  symbol_282 as imported_3,
  symbol_041 as imported_4,
  symbol_295 as imported_5,
  symbol_042 as imported_6,
  symbol_072 as imported_7,
  symbol_043 as imported_8,
  symbol_083 as imported_9,
  symbol_044 as imported_10,
  symbol_045 as imported_11,
  symbol_046 as imported_12,
} from "../entry-2.js";
import {
  symbol_004 as imported_13,
  symbol_002 as imported_14,
  symbol_003 as imported_15,
  symbol_001 as imported_16,
} from "./use-purchase-dialog-ab7fa67f9129.js";
const local_2870cde3 = "c_cancelBtn";
const local_e3cffaad = {
  cancelBtn: local_2870cde3,
};
export function fn_7f59304a({
  isOpen: arg,
  onClose: arg_2,
  recipient: arg_3,
  onSucceeded: arg_4,
  preferCurrentPayment: arg_5,
}) {
  const local = imported((arg) => arg.status);
  const local_2 = imported((arg) => arg.profile?.id);
  const local_3 = imported_2(false);
  const local_4 = imported_2(true);
  const local_5 = imported_2(0);
  const local_6 = `${arg}:${local}:${local_2}:${arg_3.id}`;
  const local_7 = imported_2(local_6);
  local_7.current = local_6;
  const local_8 = () => {
    const local = imported_12.captureRequest();
    const local_2 = local_5.current;
    return () =>
      local_4.current &&
      !local_3.current &&
      local_7.current === local_6 &&
      local_5.current === local_2 &&
      local() &&
      imported.getState().status === "authenticated" &&
      imported.getState().profile?.id === local_2;
  };
  const local_9 = () => {
    local_5.current++;
    local_3.current = true;
    arg_2();
  };
  imported_3(() => {
    local_5.current++;
    local_3.current = !arg;
  }, [arg, local_2, arg_3.id, local]);
  imported_3(() => {
    local_4.current = true;
    return () => {
      local_4.current = false;
    };
  }, []);
  const local_10 = imported_13({
    preferCurrentPayment: arg_5,
    open: arg,
    eligible: local === "authenticated",
    ownerId: local_2 ?? null,
    kind: "gift",
    recipientId: arg_3.id,
    recipientName: arg_3.name,
    recipientUsername: arg_3.username,
    scopeKey: local_6,
    captureCurrent: local_8,
    onClose: local_9,
    onSucceeded: () => {
      imported_10();
      imported_11.success("Подписка для пользователя оформлена");
      arg_4?.();
      local_9();
    },
  });
  const local_11 = imported_14(arg, `Подарить ИТД НУКСТА — ${arg_3.name}`);
  if (arg) {
    return imported_4(
      imported_5(imported_9, {
        onClose: local_10.dismiss,
        showHeader: false,
        frameless: true,
        className: imported_15.modal,
        children: [
          imported_5(imported_6, {}),
          imported_5("div", {
            className: imported_15.sub,
            ref: local_11,
            "data-purchase-scroll": true,
            children: [
              imported_5("div", {
                className: imported_15.top,
                children: [
                  imported_5("div", {
                    className: imported_15.title,
                    children: "Подарить ИТД НУКСТА",
                  }),
                  imported_5("div", {
                    className: `${imported_15.section} ${imported_15.profileSection}`,
                    children: [
                      imported_5("div", {
                        className: imported_15.label,
                        children: "Подписка в подарок",
                      }),
                      imported_5("div", {
                        className: imported_15.row,
                        children: [
                          imported_5(imported_7, {
                            src: arg_3.avatar || null,
                            size: "sm",
                          }),
                          imported_5("div", {
                            children: [
                              imported_5("div", {
                                className: imported_15.name,
                                children: [
                                  imported_5("span", {
                                    className: imported_15.nameGradient,
                                    children: arg_3.name,
                                  }),
                                  imported_5("img", {
                                    src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                    alt: "НУКСТА",
                                    width: 24,
                                    height: 24,
                                    className: imported_15.namePinBadge,
                                  }),
                                ],
                              }),
                              arg_3.username
                                ? imported_5("div", {
                                    className: imported_15.dim,
                                    children: ["@", arg_3.username],
                                  })
                                : imported_5("div", {
                                    className: imported_15.dim,
                                    children: "получатель подарка",
                                  }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              imported_5("img", {
                src: "../assets/purchase-20261118.webp",
                alt: "",
                width: 960,
                height: 683,
                decoding: "async",
                className: imported_15.promoImage,
              }),
              imported_5("div", {
                className: imported_15.bottom,
                children: [
                  imported_5("div", {
                    className: imported_15.section,
                    children: [
                      imported_5("div", {
                        className: imported_15.labelRow,
                        children: imported_5("span", {
                          className: imported_15.label,
                          children: "Что получит пользователь",
                        }),
                      }),
                      imported_5("div", {
                        className: imported_15.features,
                        children: [
                          imported_5("div", {
                            className: imported_15.row,
                            children: [
                              imported_5("span", {
                                className: imported_15.icon,
                                children: imported_5(imported_8, {
                                  size: 20,
                                }),
                              }),
                              imported_5("div", {
                                className: imported_15.featureTitle,
                                children: "Доступ к отправке личных сообщений",
                              }),
                            ],
                          }),
                          imported_5("div", {
                            className: imported_15.row,
                            children: [
                              imported_5("span", {
                                className: imported_15.icon,
                                children: imported_5("div", {
                                  className: imported_15.iconGradient,
                                }),
                              }),
                              imported_5("div", {
                                className: `${imported_15.featureTitle} ${imported_15.gradientText}`,
                                children: "Уникальный цвет ника",
                              }),
                            ],
                          }),
                          imported_5("div", {
                            className: imported_15.row,
                            children: [
                              imported_5("span", {
                                className: imported_15.icon,
                                children: imported_5("img", {
                                  src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                  alt: "Пин поддерживателя",
                                  width: 20,
                                  height: 20,
                                }),
                              }),
                              imported_5("div", {
                                className: imported_15.featureTitle,
                                children: "Пин поддерживателя",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  imported_5("div", {
                    className: imported_15.footer,
                    children: [
                      imported_5(imported_16, {
                        ...local_10.panel,
                      }),
                      imported_5("button", {
                        type: "button",
                        className: local_e3cffaad.cancelBtn,
                        onClick: local_10.dismiss,
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
