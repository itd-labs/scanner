import {
  symbol_222 as imported,
  symbol_275 as imported_2,
  symbol_049 as imported_3,
  symbol_041 as imported_4,
  symbol_288 as imported_5,
  symbol_083 as imported_6,
} from "../entry.js";
const local_49250f21 = "c_modal";
const local_dc758942 = "c_changelog";
const local_c8e0e11a = "c_entry";
const local_dfc44b32 = "c_entryHeader";
const local_cae8948c = "c_version";
const local_ceae4223 = "c_date";
const local_599609a3 = "c_changes";
const local_5840a3b4 = "c_change";
const local_61d6994d = "c_singleChange";
const local_0d476f39 = "c_releaseCopy";
const local_02ce1672 = "c_note";
const local_7aaa5b57 = "c_loading";
const local_2345161f = "c_divider";
const local_97a18d5a = {
  modal: local_49250f21,
  changelog: local_dc758942,
  entry: local_c8e0e11a,
  entryHeader: local_dfc44b32,
  version: local_cae8948c,
  date: local_ceae4223,
  changes: local_599609a3,
  change: local_5840a3b4,
  singleChange: local_61d6994d,
  releaseCopy: local_0d476f39,
  note: local_02ce1672,
  loading: local_7aaa5b57,
  divider: local_2345161f,
};
export function fn_2d2987f1({ isOpen: arg, onClose: arg_2 }) {
  const [local, local_2] = imported([]);
  const [local_3, local_4] = imported(true);
  imported_2(() => {
    if (!arg) {
      return;
    }
    let local = false;
    imported_3
      .getChangelog()
      .then((arg) => {
        if (!local) {
          local_2(arg);
          local_4(false);
        }
      })
      .catch(() => {
        if (!local) {
          local_4(false);
        }
      });
    return () => {
      local = true;
    };
  }, [arg]);
  if (arg) {
    return imported_4(
      imported_5(imported_6, {
        onClose: arg_2,
        title: "Что нового",
        size: "default",
        className: local_97a18d5a.modal,
        children: imported_5("div", {
          className: local_97a18d5a.changelog,
          children: local_3
            ? imported_5("div", {
                className: local_97a18d5a.loading,
                children: "Загрузка...",
              })
            : local.map((arg, arg_2) =>
                imported_5(
                  "div",
                  {
                    className: local_97a18d5a.entry,
                    children: [
                      imported_5("div", {
                        className: local_97a18d5a.entryHeader,
                        children: [
                          imported_5("span", {
                            className: local_97a18d5a.version,
                            children: ["v", arg.version],
                          }),
                          imported_5("span", {
                            className: local_97a18d5a.date,
                            children: arg.date,
                          }),
                        ],
                      }),
                      arg.version === "1.3.0"
                        ? imported_5("div", {
                            className: local_97a18d5a.releaseCopy,
                            children: arg.changes.map((arg, arg_2) =>
                              imported_5(
                                "p",
                                {
                                  className: local_97a18d5a.singleChange,
                                  children: arg,
                                },
                                arg_2,
                              ),
                            ),
                          })
                        : arg.changes.length === 1 &&
                            !arg.changes[0].startsWith("•")
                          ? imported_5("p", {
                              className: local_97a18d5a.singleChange,
                              children: arg.changes[0],
                            })
                          : imported_5("ul", {
                              className: local_97a18d5a.changes,
                              children: arg.changes.map((arg, arg_2) =>
                                imported_5(
                                  "li",
                                  {
                                    className: local_97a18d5a.change,
                                    children: arg,
                                  },
                                  arg_2,
                                ),
                              ),
                            }),
                      arg.note &&
                        imported_5("p", {
                          className: local_97a18d5a.note,
                          children: arg.note,
                        }),
                      arg_2 < local.length - 1 &&
                        imported_5("div", {
                          className: local_97a18d5a.divider,
                        }),
                    ],
                  },
                  arg.version,
                ),
              ),
        }),
      }),
      document.body,
    );
  }
  return null;
}
export { fn_2d2987f1 as default };
