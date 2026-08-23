import {
  symbol_056 as imported,
  symbol_002 as imported_2,
  symbol_077 as imported_3,
  symbol_069 as imported_4,
  symbol_073 as imported_5,
  symbol_063 as imported_6,
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
const local_cb182eba = "c_poll";
const local_f58ba0b9 = "c_disabled";
const local_f1c23efb = "c_header";
const local_9d9cf508 = "c_title";
const local_7ac5fcd0 = "c_meta";
const local_631e0668 = "c_voteCount";
const local_a30124fc = "c_options";
const local_f2ac596c = "c_option";
const local_de8bdc0e = "c_votingOption";
const local_e8d24324 = "c_preselected";
const local_add4c0f5 = "c_optionContent";
const local_27832a96 = "c_voted";
const local_f7856ed7 = "c_optionProgressWrapper";
const local_36181dbf = "c_optionProgress";
const local_ee5b7814 = "c_optionContentInverted";
const local_2466917f = "c_optionText";
const local_27811182 = "c_optionPercent";
const local_700f2413 = "c_optionProgressSimple";
const local_555fad26 = "c_checkmark";
const local_f3718aa0 = "c_checkbox";
const local_52654b72 = "c_checkboxChecked";
const local_1312446e = "c_submitBtn";
const local_a0cefcb4 = "c_footer";
const local_8492d214 = "c_revoteBtn";
const local_5d55bc8c = {
  poll: local_cb182eba,
  disabled: local_f58ba0b9,
  header: local_f1c23efb,
  title: local_9d9cf508,
  meta: local_7ac5fcd0,
  voteCount: local_631e0668,
  options: local_a30124fc,
  option: local_f2ac596c,
  votingOption: local_de8bdc0e,
  preselected: local_e8d24324,
  optionContent: local_add4c0f5,
  voted: local_27832a96,
  optionProgressWrapper: local_f7856ed7,
  optionProgress: local_36181dbf,
  optionContentInverted: local_ee5b7814,
  optionText: local_2466917f,
  optionPercent: local_27811182,
  optionProgressSimple: local_700f2413,
  checkmark: local_555fad26,
  checkbox: local_f3718aa0,
  checkboxChecked: local_52654b72,
  submitBtn: local_1312446e,
  footer: local_a0cefcb4,
  revoteBtn: local_8492d214,
};
export function fn_9f85c378({
  title: arg,
  options: arg_2,
  totalVotes: arg_3,
  voted: arg_4 = false,
  selectedOptionId: arg_5 = null,
  selectedOptionIds: arg_6 = [],
  multipleChoice: arg_7 = false,
  onVote: arg_8,
  onVoteMultiple: arg_9,
  className: arg_10,
  disabled: arg_11 = false,
}) {
  const [local, local_2] = imported(arg_4);
  const [local_3, local_4] = imported(() => {
    if (arg_6.length > 0) {
      return new Set(arg_6);
    }
    if (arg_5) {
      return new Set([arg_5]);
    }
    return new Set();
  });
  const [local_5, local_6] = imported(arg_3);
  const [local_7, local_8] = imported(arg_2);
  const [local_9, local_10] = imported(arg_4);
  const [local_11, local_12] = imported(false);
  const [local_13, local_14] = imported(new Map());
  const local_15 = imported_2(new Map());
  const local_16 = arg_2.map((arg) => `${arg.id}:${arg.votes}`).join(",");
  imported_3(() => {
    local_8(arg_2);
    local_6(arg_3);
    local_2(arg_4);
    if (arg_6.length > 0) {
      local_4(new Set(arg_6));
    } else {
      local_4(arg_5 ? new Set([arg_5]) : new Set());
    }
    if (arg_4 && !local_11) {
      local_10(true);
    }
  }, [local_16, arg_3, arg_4, arg_5, arg_6.join(",")]);
  imported_3(() => {
    if (arg_4 && local_15.current.size > 0) {
      const local = new Map();
      local_15.current.forEach((arg, arg_2) => {
        local.set(arg_2, arg.offsetWidth);
      });
      local_14(local);
    }
  }, [arg_4]);
  const local_17 = local && !local_11;
  const local_18 = imported_4(
    (arg) => {
      if (arg_11 || local_17) {
        return;
      }
      if (arg_7) {
        local_4((arg) => {
          const local = new Set(arg);
          if (local.has(arg)) {
            local.delete(arg);
          } else {
            local.add(arg);
          }
          return local;
        });
        return;
      }
      const local = local_3.size > 0 ? Array.from(local_3)[0] : null;
      local_8((arg) =>
        arg.map((arg) => {
          if (arg.id === arg) {
            return {
              ...arg,
              votes: arg.votes + 1,
            };
          }
          if (arg.id === local) {
            return {
              ...arg,
              votes: Math.max(0, arg.votes - 1),
            };
          }
          return arg;
        }),
      );
      if (!local) {
        local_6((arg) => arg + 1);
      }
      local_4(new Set([arg]));
      local_2(true);
      local_12(false);
      const local_2 = arg_8?.(arg);
      if (local_2 && typeof local_2.then === "function") {
        local_2.then((arg) => {
          if (arg) {
            local_20(arg);
          }
        });
      }
      local_21();
    },
    [arg_11, local_17, arg_7, local_3, local, arg_8],
  );
  const local_19 = imported_4(() => {
    if (local_3.size === 0) {
      return;
    }
    const local = Array.from(local_3);
    local_8((arg) =>
      arg.map((arg) => {
        if (local.includes(arg.id)) {
          return {
            ...arg,
            votes: arg.votes + 1,
          };
        }
        return arg;
      }),
    );
    if (!local) {
      local_6((arg) => arg + 1);
    }
    local_2(true);
    local_12(false);
    const local_2 = arg_9?.(local);
    if (local_2 && typeof local_2.then === "function") {
      local_2.then((arg) => {
        if (arg) {
          local_20(arg);
        }
      });
    }
    local_21();
  }, [local_3, local, arg_9]);
  const local_20 = (arg) => {
    const local = (arg.options ?? []).map((arg) => ({
      id: arg.id,
      text: arg.text,
      votes: arg.votesCount ?? arg.voteCount ?? arg.votes ?? 0,
    }));
    local_8(local);
    local_6(arg.totalVotes ?? 0);
    if (arg.votedOptionIds && arg.votedOptionIds.length > 0) {
      local_4(new Set(arg.votedOptionIds));
    }
  };
  const local_21 = () => {
    requestAnimationFrame(() => {
      const local = new Map();
      local_15.current.forEach((arg, arg_2) => {
        local.set(arg_2, arg.offsetWidth);
      });
      local_14(local);
      requestAnimationFrame(() => {
        local_10(true);
      });
    });
  };
  const local_22 = () => {
    local_12(true);
    local_10(false);
  };
  const local_23 = () => {
    local_12(false);
    local_10(true);
  };
  const local_24 = (arg) => {
    if (local_5 === 0) {
      return 0;
    }
    return Math.round((arg / local_5) * 100);
  };
  const local_25 = (arg) => {
    if (arg === 1) {
      return "1 голос";
    }
    if (arg >= 2 && arg <= 4) {
      return `${arg} голоса`;
    }
    return `${arg} голосов`;
  };
  const local_26 = (arg) => {
    arg.stopPropagation();
  };
  return imported_5("div", {
    className: `${local_5d55bc8c.poll} ${arg_11 ? local_5d55bc8c.disabled : ""} ${arg_10 || ""}`,
    onClick: local_26,
    children: [
      imported_5("div", {
        className: local_5d55bc8c.header,
        children: [
          imported_5("span", {
            className: local_5d55bc8c.title,
            children: arg,
          }),
          local &&
            imported_5("div", {
              className: local_5d55bc8c.meta,
              children: imported_5("span", {
                className: local_5d55bc8c.voteCount,
                children: local_25(local_5),
              }),
            }),
        ],
      }),
      imported_5("div", {
        className: local_5d55bc8c.options,
        children: local_7.map((arg) => {
          const local = local_24(arg.votes);
          const local_2 = local_3.has(arg.id);
          const local_3 = local_9 ? `${local}%` : "0%";
          const local_4 =
            local_13.get(arg.id) ||
            local_15.current.get(arg.id)?.offsetWidth ||
            0;
          if (local_17) {
            return imported_5(
              "div",
              {
                ref: (arg) => {
                  if (arg) {
                    local_15.current.set(arg.id, arg);
                  }
                },
                className: `${local_5d55bc8c.option} ${local_5d55bc8c.voted} ${local_2 ? local_5d55bc8c.selected : ""}`,
                children: [
                  imported_5("div", {
                    className: local_5d55bc8c.optionContent,
                    children: [
                      imported_5("span", {
                        className: local_5d55bc8c.optionText,
                        children: [
                          local_2 &&
                            imported_5("span", {
                              className: local_5d55bc8c.checkmark,
                              children: "✓ ",
                            }),
                          arg.text,
                        ],
                      }),
                      imported_5("span", {
                        className: local_5d55bc8c.optionPercent,
                        children: [local, "%"],
                      }),
                    ],
                  }),
                  local_2 &&
                    imported_5("div", {
                      className: local_5d55bc8c.optionProgressWrapper,
                      style: {
                        width: local_3,
                      },
                      children: [
                        imported_5("div", {
                          className: local_5d55bc8c.optionProgress,
                        }),
                        imported_5("div", {
                          className: local_5d55bc8c.optionContentInverted,
                          style: {
                            width: `${local_4}px`,
                          },
                          children: [
                            imported_5("span", {
                              className: local_5d55bc8c.optionText,
                              children: [
                                imported_5("span", {
                                  className: local_5d55bc8c.checkmark,
                                  children: "✓ ",
                                }),
                                arg.text,
                              ],
                            }),
                            imported_5("span", {
                              className: local_5d55bc8c.optionPercent,
                              children: [local, "%"],
                            }),
                          ],
                        }),
                      ],
                    }),
                  !local_2 &&
                    imported_5("div", {
                      className: local_5d55bc8c.optionProgressSimple,
                      style: {
                        width: local_3,
                      },
                    }),
                ],
              },
              arg.id,
            );
          }
          return imported_5(
            "div",
            {
              ref: (arg) => {
                if (arg) {
                  local_15.current.set(arg.id, arg);
                }
              },
              className: `${local_5d55bc8c.option} ${local_5d55bc8c.votingOption} ${local_2 ? local_5d55bc8c.preselected : ""}`,
              onClick: () => local_18(arg.id),
              children: imported_5("div", {
                className: local_5d55bc8c.optionContent,
                children: [
                  arg_7 &&
                    imported_5("span", {
                      className: `${local_5d55bc8c.checkbox} ${local_2 ? local_5d55bc8c.checkboxChecked : ""}`,
                      children: local_2 && "✓",
                    }),
                  imported_5("span", {
                    className: local_5d55bc8c.optionText,
                    children: arg.text,
                  }),
                ],
              }),
            },
            arg.id,
          );
        }),
      }),
      arg_7 &&
        !local &&
        local_3.size > 0 &&
        !local_11 &&
        imported_5("button", {
          className: local_5d55bc8c.submitBtn,
          onClick: local_19,
          type: "button",
          children: "Проголосовать",
        }),
      local &&
        imported_5("div", {
          className: local_5d55bc8c.footer,
          children: local_11
            ? imported_5(imported_6, {
                children: [
                  arg_7 &&
                    local_3.size > 0 &&
                    imported_5("button", {
                      className: local_5d55bc8c.submitBtn,
                      onClick: local_19,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  imported_5("button", {
                    className: local_5d55bc8c.revoteBtn,
                    onClick: local_23,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : imported_5("button", {
                className: local_5d55bc8c.revoteBtn,
                onClick: local_22,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}
export { fn_9f85c378 as default };
