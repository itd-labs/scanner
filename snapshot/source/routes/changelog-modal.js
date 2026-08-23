import {
  symbol_056 as imported,
  symbol_077 as imported_2,
  az as imported_3,
  symbol_001 as imported_4,
  symbol_073 as imported_5,
  symbol_014 as imported_6,
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
const local_dc758942 = "c_changelog";
const local_c8e0e11a = "c_entry";
const local_dfc44b32 = "c_entryHeader";
const local_cae8948c = "c_version";
const local_ceae4223 = "c_date";
const local_599609a3 = "c_changes";
const local_5840a3b4 = "c_change";
const local_61d6994d = "c_singleChange";
const local_02ce1672 = "c_note";
const local_7aaa5b57 = "c_loading";
const local_2345161f = "c_divider";
const local_23639ded = {
  changelog: local_dc758942,
  entry: local_c8e0e11a,
  entryHeader: local_dfc44b32,
  version: local_cae8948c,
  date: local_ceae4223,
  changes: local_599609a3,
  change: local_5840a3b4,
  singleChange: local_61d6994d,
  note: local_02ce1672,
  loading: local_7aaa5b57,
  divider: local_2345161f,
};
export function fn_086ae354({ isOpen: arg, onClose: arg_2 }) {
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
        children: imported_5("div", {
          className: local_23639ded.changelog,
          children: local_3
            ? imported_5("div", {
                className: local_23639ded.loading,
                children: "Загрузка...",
              })
            : local.map((arg, arg_2) =>
                imported_5(
                  "div",
                  {
                    className: local_23639ded.entry,
                    children: [
                      imported_5("div", {
                        className: local_23639ded.entryHeader,
                        children: [
                          imported_5("span", {
                            className: local_23639ded.version,
                            children: ["v", arg.version],
                          }),
                          imported_5("span", {
                            className: local_23639ded.date,
                            children: arg.date,
                          }),
                        ],
                      }),
                      arg.changes.length === 1 &&
                      !arg.changes[0].startsWith("•")
                        ? imported_5("p", {
                            className: local_23639ded.singleChange,
                            children: arg.changes[0],
                          })
                        : imported_5("ul", {
                            className: local_23639ded.changes,
                            children: arg.changes.map((arg, arg_2) =>
                              imported_5(
                                "li",
                                {
                                  className: local_23639ded.change,
                                  children: arg,
                                },
                                arg_2,
                              ),
                            ),
                          }),
                      arg.note &&
                        imported_5("p", {
                          className: local_23639ded.note,
                          children: arg.note,
                        }),
                      arg_2 < local.length - 1 &&
                        imported_5("div", {
                          className: local_23639ded.divider,
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
export { fn_086ae354 as default };
