import {
  symbol_087 as imported,
  symbol_081 as imported_2,
  symbol_001 as imported_3,
  symbol_009 as imported_4,
  symbol_094 as imported_5,
} from "../entry.js";
const local_ef251bc6 = "c_page";
const local_f1c23efb = "c_header";
const local_08951a22 = "c_status";
const local_84b00f5b = {
  page: local_ef251bc6,
  header: local_f1c23efb,
  status: local_08951a22,
};
export function fn_27e6cded({ path: arg }) {
  const { event: local, loaded: local_2, error: local_3 } = imported();
  const local_4 = local_2 && local?.visible === true;
  imported_2(() => {
    if (local_4) {
      imported_3(imported_4.route, true);
    }
  }, [local_4]);
  if (local_4) {
    return null;
  }
  return imported_5("section", {
    className: local_84b00f5b.page,
    "data-route": arg,
    "aria-labelledby": "event-heading",
    children: [
      imported_5("header", {
        className: local_84b00f5b.header,
        children: imported_5("h1", {
          id: "event-heading",
          children: "Ивент",
        }),
      }),
      imported_5("p", {
        className: local_84b00f5b.status,
        role: "status",
        children: local_3
          ? "Не удалось загрузить ивент. Повторим при восстановлении связи."
          : local_2
            ? "Сейчас нет активного ивента."
            : "Загружаем ивент…",
      }),
    ],
  });
}
