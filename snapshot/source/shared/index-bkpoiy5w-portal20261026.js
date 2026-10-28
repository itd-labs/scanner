import {
  symbol_077 as imported,
  symbol_095 as imported_2,
  symbol_094 as imported_3,
  symbol_003 as imported_4,
  symbol_014 as imported_5,
} from "../entry.js";
const local_4d84dbb6 = "c_content";
const local_9d9cf508 = "c_title";
const local_8c84ac4c = "c_subtitle";
const local_8c4f8b4b = "c_actions";
const local_960709d8 = {
  content: local_4d84dbb6,
  title: local_9d9cf508,
  subtitle: local_8c84ac4c,
  actions: local_8c4f8b4b,
};
function symbol_001({
  title: arg,
  message: arg_2,
  confirmText: arg_3 = "Подтвердить",
  cancelText: arg_4 = "Отмена",
  danger: arg_5 = false,
  onConfirm: arg_6,
  onClose: arg_7,
}) {
  const [local, local_2] = imported(false);
  const local_3 = async () => {
    if (!local) {
      local_2(true);
      try {
        await arg_6();
        arg_7();
      } catch {
        local_2(false);
      }
    }
  };
  return imported_2(
    imported_3(imported_5, {
      onClose: arg_7,
      showHeader: false,
      children: imported_3("div", {
        className: local_960709d8.content,
        children: [
          imported_3("h2", {
            className: local_960709d8.title,
            children: arg,
          }),
          imported_3("p", {
            className: local_960709d8.subtitle,
            children: arg_2,
          }),
          imported_3("div", {
            className: local_960709d8.actions,
            children: [
              imported_3(imported_4, {
                variant: "secondary",
                onClick: (arg) => {
                  arg.stopPropagation();
                  arg_7();
                },
                children: arg_4,
              }),
              imported_3(imported_4, {
                variant: arg_5 ? "danger" : "primary",
                onClick: (arg) => {
                  arg.stopPropagation();
                  local_3();
                },
                disabled: local,
                loading: local,
                children: arg_3,
              }),
            ],
          }),
        ],
      }),
    }),
    document.body,
  );
}
export { symbol_001 };
