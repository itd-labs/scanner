import {
  symbol_295 as imported,
  symbol_149 as imported_2,
  symbol_020 as imported_3,
  symbol_074 as imported_4,
  symbol_222 as imported_5,
  symbol_002 as imported_6,
  symbol_282 as imported_7,
  symbol_150 as imported_8,
  symbol_139 as imported_9,
  bt as imported_10,
  symbol_151 as imported_11,
  symbol_152 as imported_12,
  symbol_153 as imported_13,
  symbol_154 as imported_14,
  symbol_155 as imported_15,
  symbol_156 as imported_16,
} from "../entry.js";
const local_49250f21 = "c_modal";
const local_24243f59 = "c_sub";
const local_11f064fe = "c_top";
const local_807be581 = "c_bottom";
const local_9d9cf508 = "c_title";
const local_af0b94fd = "c_section";
const local_fc53e62e = "c_profileSection";
const local_fe9ec23f = "c_label";
const local_7d352a9c = "c_labelRow";
const local_3ed0446e = "c_dim";
const local_ab7982d5 = "c_row";
const local_3abd7bdb = "c_icon";
const local_ff65460c = "c_iconGradient";
const local_8d0c49b2 = "c_name";
const local_95abeb0d = "c_nameGradient";
const local_8a9e924c = "c_namePinBadge";
const local_e0d76fa2 = "c_promoImage";
const local_3793ee2e = "c_features";
const local_63f2eee2 = "c_featureContent";
const local_677736f6 = "c_featureTitle";
const local_0e1d4667 = "c_gradientText";
const local_4a6a8c8f = "c_soon";
const local_9ec691ea = "c_infoBtn";
const local_a0cefcb4 = "c_footer";
const local_f6c5ef46 = "c_methodSelectRow";
const local_735ec38e = "c_methodSelectLabel";
const local_a29deef3 = "c_methodSelect";
const local_0a79b3ee = "c_subscribeBtn";
const symbol_003 = {
  modal: local_49250f21,
  sub: local_24243f59,
  top: local_11f064fe,
  bottom: local_807be581,
  title: local_9d9cf508,
  section: local_af0b94fd,
  profileSection: local_fc53e62e,
  label: local_fe9ec23f,
  labelRow: local_7d352a9c,
  dim: local_3ed0446e,
  row: local_ab7982d5,
  icon: local_3abd7bdb,
  iconGradient: local_ff65460c,
  name: local_8d0c49b2,
  nameGradient: local_95abeb0d,
  namePinBadge: local_8a9e924c,
  promoImage: local_e0d76fa2,
  features: local_3793ee2e,
  featureContent: local_63f2eee2,
  featureTitle: local_677736f6,
  gradientText: local_0e1d4667,
  soon: local_4a6a8c8f,
  infoBtn: local_9ec691ea,
  footer: local_a0cefcb4,
  methodSelectRow: local_f6c5ef46,
  methodSelectLabel: local_735ec38e,
  methodSelect: local_a29deef3,
  subscribeBtn: local_0a79b3ee,
};
const local_f7bfcf88 = "c_panel";
const local_96021100 = "c_stage";
const local_82984f3d = "c_heading";
const local_f7881c4d = "c_back";
const local_fcc2eb6c = "c_primary";
const local_a394e6fb = "c_secondary";
const local_e0db2f13 = "c_reselect";
const local_57643cbe = "c_terms";
const local_05a5edbc = "c_term";
const local_1fba91de = "c_consent";
const local_4811d0dc = "c_selected";
const local_c1f1f19d = "c_amount";
const local_109522b2 = "c_summary";
const local_840f111f = "c_recipient";
const local_d236b101 = "c_notice";
const local_806ef98a = "c_message";
const local_87ee5215 = "c_legal";
const local_d37d23af = "c_textButton";
const local_7aaa5b57 = "c_loading";
const local_ebdc2467 = "c_expiry";
const local_a84efeaf = "c_srOnly";
const local_b083d537 = {
  panel: local_f7bfcf88,
  stage: local_96021100,
  heading: local_82984f3d,
  back: local_f7881c4d,
  primary: local_fcc2eb6c,
  secondary: local_a394e6fb,
  reselect: local_e0db2f13,
  terms: local_57643cbe,
  term: local_05a5edbc,
  consent: local_1fba91de,
  selected: local_4811d0dc,
  amount: local_c1f1f19d,
  summary: local_109522b2,
  recipient: local_840f111f,
  notice: local_d236b101,
  message: local_806ef98a,
  legal: local_87ee5215,
  textButton: local_d37d23af,
  loading: local_7aaa5b57,
  expiry: local_ebdc2467,
  srOnly: local_a84efeaf,
};
const local_7f58ca46 = (arg) =>
  `${new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 2,
  })
    .format(arg / 100)
    .replace(/[\u00a0\u202f]/g, "./use-purchase-dialog.js")} ₽`;
const local_c9179fb5 = (arg) =>
  `${arg} ${arg === 1 ? "месяц" : arg === 3 ? "месяца" : "месяцев"}`;
const local_8ba4b2fe = (arg) => Number.isSafeInteger(arg) && arg > 0;
function symbol_001(arg) {
  const { step: local, kind: local_2, quote: local_3 } = arg;
  const local_4 = !!arg.onReturnToPending;
  const local_5 =
    arg.stageBePaidAvailable === true ||
    (local_4 && arg.providerLabel === "bePaid");
  const local_6 = local === "creating" || local === "resolving";
  const local_7 =
    arg.canEditTerms && arg.canStartNewAttempt && !local_6 && !local_4;
  const local_8 =
    local_3 &&
    arg.offers.some(
      (arg) =>
        arg.months === local_3.months &&
        arg.initialAmountMinor === local_3.initialAmountMinor &&
        arg.quoteVersion === local_3.quoteVersion,
    );
  const local_9 =
    local === "terms" &&
    local_7 &&
    local_3 &&
    local_3.months === arg.months &&
    local_3.currency === "RUB" &&
    local_8ba4b2fe(local_3.initialAmountMinor) &&
    local_8;
  const local_10 =
    local_2 === "self" && arg.canOfferAutoRenewal && !arg.agreement.enabled;
  const local_11 =
    local === "routes"
      ? "Способ оплаты"
      : local === "terms" || local === "internationalTerms"
        ? "Срок подписки"
        : null;
  const local_12 = arg.stageBePaidOffers?.find(
    (arg) => arg.months === arg.selectedStageMonths,
  );
  const local_13 = arg.usdRate;
  const local_14 = (arg, arg_2) => {
    if (arg.usdRatePending) {
      return "Загружаем цену…";
    }
    return imported_2(arg, local_13, arg_2);
  };
  const local_15 = `${symbol_003.subscribeBtn} ${local_b083d537.primary}`;
  const local_16 =
    local_3 && local_8ba4b2fe(local_3.initialAmountMinor)
      ? imported("div", {
          className: local_b083d537.summary,
          children: [
            local_2 === "gift" &&
              arg.recipientName &&
              imported("div", {
                className: local_b083d537.recipient,
                children: ["Подарок для ", arg.recipientName],
              }),
            imported("div", {
              children: [
                "НУКСТА · ",
                local_c9179fb5(local_3.months),
                " · ",
                imported("strong", {
                  children:
                    local_3.currency === "BYN"
                      ? local_14(local_3.initialAmountMinor)
                      : local_7f58ca46(local_3.initialAmountMinor),
                }),
              ],
            }),
          ],
        })
      : null;
  return imported("section", {
    className: local_b083d537.panel,
    "data-purchase-step": local,
    "aria-busy": local_6 || arg.internationalBusy,
    tabIndex: -1,
    ref: (arg) => {
      if (!arg) {
        return;
      }
      const local = arg.dataset.focusedStep;
      arg.dataset.focusedStep = local;
      if (
        !local ||
        local === local ||
        (local === "resolving" && local === "overview")
      ) {
        return;
      }
      const local_2 =
        arg.querySelector("[data-purchase-heading]") ??
        arg.querySelector("button:not(:disabled)") ??
        arg;
      local_2.focus({
        preventScroll: true,
      });
      requestAnimationFrame(() => {
        if (!arg.isConnected || arg.dataset.focusedStep !== local) {
          return;
        }
        const local = arg.closest("[data-purchase-scroll]");
        if (
          local &&
          (local === "routes" ||
            local === "terms" ||
            local === "internationalTerms")
        ) {
          local.scrollTo({
            top: local.scrollHeight,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          });
        } else {
          local_2.scrollIntoView({
            block: "nearest",
          });
        }
      });
    },
    children: imported(
      "div",
      {
        className: local_b083d537.stage,
        children: [
          local_11 &&
            imported("h3", {
              className: local_b083d537.heading,
              tabIndex: -1,
              "data-purchase-heading": true,
              children: local_11,
            }),
          local === "overview" &&
            imported("button", {
              type: "button",
              className: local_15,
              disabled: !local_7,
              onClick: () => {
                if (local_7) {
                  arg.onBegin();
                }
              },
              children: local_2 === "gift" ? "Подарить" : "Купить",
            }),
          local === "routes" &&
            imported(imported_3, {
              children: [
                imported("button", {
                  type: "button",
                  className: local_15,
                  disabled: !local_7 || arg.internationalBusy,
                  onClick: () => {
                    if (local_7 && !arg.internationalBusy) {
                      arg.onRubles();
                    }
                  },
                  children: "Оплатить в рублях",
                }),
                local_5 &&
                  imported("button", {
                    type: "button",
                    className: local_b083d537.secondary,
                    disabled: !local_5 || !local_7 || arg.internationalBusy,
                    onClick: () => {
                      if (local_5 && local_7 && !arg.internationalBusy) {
                        arg.onInternational();
                      }
                    },
                    children: arg.internationalBusy
                      ? imported("span", {
                          className: local_b083d537.loading,
                          children: [
                            imported(imported_4, {
                              size: "xs",
                            }),
                            " Открываем оплату…",
                          ],
                        })
                      : "Другие способы оплаты",
                  }),
                local_4 &&
                  imported(imported_3, {
                    children: [
                      imported("p", {
                        className: local_b083d537.notice,
                        children:
                          "Текущий счёт ещё открыт. После его закрытия можно будет выбрать способ оплаты.",
                      }),
                      imported("button", {
                        type: "button",
                        className: local_b083d537.secondary,
                        onClick: arg.onCheckStatus,
                        children: "Проверить статус",
                      }),
                      imported("button", {
                        type: "button",
                        className: local_b083d537.secondary,
                        onClick: arg.onReturnToPending,
                        children: "К текущей оплате",
                      }),
                    ],
                  }),
                arg.internationalUnavailable &&
                  imported("div", {
                    className: local_b083d537.message,
                    role: "alert",
                    children: [
                      arg.internationalUnavailable,
                      arg.onInternationalPreview &&
                        imported("button", {
                          type: "button",
                          className: local_b083d537.textButton,
                          onClick: arg.onInternationalPreview,
                          children: "Информация об оплате",
                        }),
                    ],
                  }),
              ],
            }),
          local === "internationalTerms" &&
            imported(imported_3, {
              children: [
                arg.usdRatePending
                  ? imported("p", {
                      className: local_b083d537.loading,
                      role: "status",
                      children: [
                        imported(imported_4, {
                          size: "xs",
                        }),
                        "Загружаем цены…",
                      ],
                    })
                  : imported("fieldset", {
                      className: local_b083d537.terms,
                      disabled: !local_7 || arg.internationalBusy,
                      children: [
                        imported("legend", {
                          className: local_b083d537.srOnly,
                          children: "Выберите срок подписки",
                        }),
                        arg.stageBePaidOffers?.map((arg) =>
                          imported(
                            "label",
                            {
                              className: `${local_b083d537.term} ${arg.selectedStageMonths === arg.months ? local_b083d537.selected : ""}`,
                              children: [
                                imported("input", {
                                  type: "radio",
                                  name: `nuksta-${local_2}-bepaid-months`,
                                  checked:
                                    arg.selectedStageMonths === arg.months,
                                  onChange: () =>
                                    arg.onStageMonthsChange?.(arg.months),
                                }),
                                imported("span", {
                                  children: local_c9179fb5(arg.months),
                                }),
                                imported("span", {
                                  className: local_b083d537.amount,
                                  children: local_14(
                                    arg.amountMinor,
                                    arg.usdAmountMinor,
                                  ),
                                }),
                              ],
                            },
                            arg.months,
                          ),
                        ),
                      ],
                    }),
                local_2 === "self" &&
                arg.internationalRenewal &&
                !arg.usdRatePending
                  ? imported("label", {
                      className: local_b083d537.consent,
                      children: [
                        imported("input", {
                          type: "checkbox",
                          checked: arg.internationalAuto === true,
                          disabled: !local_7 || arg.internationalBusy,
                          onChange: (arg) =>
                            arg.onInternationalAutoChange?.(
                              arg.currentTarget.checked,
                            ),
                        }),
                        imported("span", {
                          children: [
                            "Подключить автопродление за ",
                            new Intl.NumberFormat("ru-RU", {
                              minimumFractionDigits: 2,
                            }).format(
                              arg.internationalRenewal.amountMinor / 100,
                            ),
                            " BYN в месяц.",
                            "./use-purchase-dialog.js",
                            imported("a", {
                              href: "https://xn--d1ah4a.xn--90ais/legal/recurring/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: "Условия автопродления",
                            }),
                          ],
                        }),
                      ],
                    })
                  : imported("p", {
                      className: local_b083d537.notice,
                      children: "Оплата через bePaid без автопродления.",
                    }),
                local_13 &&
                  imported("p", {
                    className: local_b083d537.notice,
                    children: "Сумма в долларах ориентировочная.",
                  }),
                imported("p", {
                  className: local_b083d537.legal,
                  children: imported("a", {
                    href: "https://xn--d1ah4a.xn--90ais/legal/offer/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Публичная оферта",
                  }),
                }),
                imported("button", {
                  type: "button",
                  className: local_15,
                  disabled:
                    !local_12 ||
                    !local_7 ||
                    arg.internationalBusy ||
                    arg.usdRatePending,
                  onClick: arg.onStagePay,
                  children: arg.internationalBusy
                    ? imported("span", {
                        className: local_b083d537.loading,
                        children: [
                          imported(imported_4, {
                            size: "xs",
                          }),
                          " Открываем оплату…",
                        ],
                      })
                    : "Перейти к оплате",
                }),
              ],
            }),
          local === "terms" &&
            imported(imported_3, {
              children: [
                imported("fieldset", {
                  className: local_b083d537.terms,
                  disabled: !local_7,
                  children: [
                    imported("legend", {
                      className: local_b083d537.srOnly,
                      children: "Выберите срок подписки",
                    }),
                    arg.offers.map((arg) =>
                      imported(
                        "label",
                        {
                          className: `${local_b083d537.term} ${arg.months === arg.months ? local_b083d537.selected : ""}`,
                          children: [
                            imported("input", {
                              type: "radio",
                              name: `nuksta-${local_2}-months`,
                              value: arg.months,
                              checked: arg.months === arg.months,
                              onChange: () => {
                                if (local_7) {
                                  arg.onMonthsChange(arg.months);
                                }
                              },
                            }),
                            imported("span", {
                              children: local_c9179fb5(arg.months),
                            }),
                            imported("span", {
                              className: local_b083d537.amount,
                              children: local_7f58ca46(arg.initialAmountMinor),
                            }),
                          ],
                        },
                        arg.months,
                      ),
                    ),
                  ],
                }),
                local_16,
                arg.methodSelector,
                local_2 === "gift"
                  ? imported("p", {
                      className: local_b083d537.notice,
                      children:
                        "Это разовый подарок. Автопродление не подключается",
                    })
                  : arg.agreement.enabled
                    ? imported("p", {
                        className: local_b083d537.notice,
                        children:
                          arg.agreement.summary || "Автопродление подключено",
                      })
                    : local_10
                      ? imported("label", {
                          className: local_b083d537.consent,
                          children: [
                            imported("input", {
                              type: "checkbox",
                              checked: arg.newAutoConsent,
                              disabled: !local_7,
                              onChange: (arg) => {
                                if (local_7) {
                                  arg.onNewAutoConsentChange(
                                    arg.currentTarget.checked,
                                  );
                                }
                              },
                            }),
                            imported("span", {
                              children: [
                                arg.agreement.requiresNewConsent
                                  ? "Подключить"
                                  : "Включить",
                                " автопродление. ",
                                imported("a", {
                                  href: "/recurring-terms",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: "Условия автопродления",
                                }),
                              ],
                            }),
                          ],
                        })
                      : imported("p", {
                          className: local_b083d537.notice,
                          children: "Новое автопродление не подключается",
                        }),
                local_2 === "self" &&
                  local_10 &&
                  arg.newAutoConsent &&
                  local_3 &&
                  imported("p", {
                    className: local_b083d537.notice,
                    children: [
                      "Далее — ",
                      local_7f58ca46(local_3.renewalAmountMinor),
                      " каждый месяц после окончания оплаченного срока. Напомним за 3 дня до окончания.",
                    ],
                  }),
                imported("p", {
                  className: local_b083d537.legal,
                  children: imported("a", {
                    href: "/subscription-terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Условия платного доступа ИТД НУКСТА",
                  }),
                }),
                imported("button", {
                  type: "button",
                  className: local_15,
                  disabled: !local_9,
                  onClick: () => {
                    if (local_9) {
                      arg.onPay();
                    }
                  },
                  children: local_3
                    ? `${local_2 === "gift" ? "Подарить за" : "Оплатить"} ${local_7f58ca46(local_3.initialAmountMinor)}`
                    : "Загружаем условия…",
                }),
              ],
            }),
          local === "resolving" &&
            imported("p", {
              className: local_b083d537.loading,
              role: "status",
              children: [
                imported(imported_4, {
                  size: "xs",
                }),
                "Проверяем предыдущую оплату…",
              ],
            }),
          local === "creating" &&
            imported(imported_3, {
              children: [
                local_16,
                imported("p", {
                  className: local_b083d537.loading,
                  role: "status",
                  children: [
                    imported(imported_4, {
                      size: "xs",
                    }),
                    local_2 === "gift"
                      ? "Оформляем подарок…"
                      : "Открываем оплату…",
                  ],
                }),
              ],
            }),
          local === "pending" &&
            imported(imported_3, {
              children: [
                local_16,
                arg.providerLabel &&
                  imported("p", {
                    className: local_b083d537.notice,
                    children: ["Оплата через ", arg.providerLabel],
                  }),
                arg.pendingSummary &&
                  imported("p", {
                    className: local_b083d537.notice,
                    children: arg.pendingSummary,
                  }),
                imported("p", {
                  className: local_b083d537.notice,
                  role: "status",
                  children: "Ожидаем подтверждение оплаты",
                }),
                arg.canResume === true &&
                  imported("button", {
                    type: "button",
                    className: local_15,
                    disabled: arg.internationalBusy,
                    onClick: arg.onResume,
                    children: "Продолжить оплату",
                  }),
                imported("button", {
                  type: "button",
                  className: local_b083d537.secondary,
                  onClick: arg.onCheckStatus,
                  children: "Проверить статус",
                }),
                arg.canReselect &&
                  imported("button", {
                    type: "button",
                    className: local_b083d537.reselect,
                    onClick: arg.onReselect,
                    children: "Вернуться к выбору",
                  }),
                arg.canSwitchStagePayment &&
                  imported("button", {
                    type: "button",
                    className: local_b083d537.reselect,
                    onClick: arg.onSwitchStagePayment,
                    children: "Сменить способ оплаты",
                  }),
                imported("p", {
                  className: local_b083d537.notice,
                  children:
                    "Закрытие окна не отменяет платёж. Повторно оплачивать не нужно.",
                }),
              ],
            }),
          local === "reviewRequired" &&
            imported(imported_3, {
              children: [
                local_16,
                arg.canRestartStageBePaid
                  ? imported(imported_3, {
                      children: [
                        imported("p", {
                          className: local_b083d537.notice,
                          role: "status",
                          children:
                            "Оплата не начиналась. Можно вернуться к выбору.",
                        }),
                        imported("button", {
                          type: "button",
                          className: local_15,
                          onClick: arg.onRestartStageBePaid,
                          children: "Начать заново",
                        }),
                      ],
                    })
                  : imported("p", {
                      className: local_b083d537.message,
                      role: "alert",
                      children:
                        "Статус оплаты нужно проверить в поддержке. Повторно оплачивать не нужно.",
                    }),
              ],
            }),
          local === "active" &&
            imported("p", {
              className: local_b083d537.notice,
              role: "status",
              children: [
                "Подписка активна",
                arg.actualExpiryLabel &&
                  imported("span", {
                    className: local_b083d537.expiry,
                    children: ["Действует до ", arg.actualExpiryLabel],
                  }),
              ],
            }),
          arg.error &&
            imported("div", {
              className: local_b083d537.message,
              role: "alert",
              children: [
                arg.error,
                (local === "resolving" || local === "terms") &&
                  imported("button", {
                    type: "button",
                    className: local_b083d537.textButton,
                    onClick: arg.onRetryRead,
                    children: "Повторить проверку",
                  }),
              ],
            }),
          !local_4 &&
            (local === "routes" ||
              local === "terms" ||
              local === "internationalTerms") &&
            imported("button", {
              type: "button",
              className: local_b083d537.back,
              disabled: arg.internationalBusy || !local_7,
              onClick: () => {
                if (local_7 && !arg.internationalBusy) {
                  arg.onBack();
                }
              },
              children: "Назад",
            }),
        ],
      },
      local,
    ),
  });
}
const local_a1e12a9e = new Map();
const local_1054c37d = (arg, arg_2) => `itd:gift-attempt:${arg}:${arg_2}`;
function fn_a4652e59(arg, arg_2) {
  const local = local_1054c37d(arg, arg_2);
  let local_2 = local_a1e12a9e.get(local);
  try {
    local_2 = sessionStorage.getItem(local) ?? local_2;
  } catch {}
  if (!local_2 || !/^[0-9a-f-]{36}$/i.test(local_2)) {
    local_2 = crypto.randomUUID();
  }
  local_a1e12a9e.set(local, local_2);
  try {
    sessionStorage.setItem(local, local_2);
  } catch {}
  return local_2;
}
function fn_f59e472a(arg, arg_2) {
  const local = local_1054c37d(arg, arg_2);
  local_a1e12a9e.delete(local);
  try {
    sessionStorage.removeItem(local);
  } catch {}
}
const local_a1e12a9e_2 = new Map();
function fn_da45f5b9(arg) {
  const local = `itd:self-attempt:${arg}`;
  let local_2 = local_a1e12a9e_2.get(arg);
  try {
    local_2 = sessionStorage.getItem(local) ?? local_2;
  } catch {}
  if (!local_2 || !/^[0-9a-f-]{36}$/i.test(local_2)) {
    local_2 = crypto.randomUUID();
  }
  local_a1e12a9e_2.set(arg, local_2);
  try {
    sessionStorage.setItem(local, local_2);
  } catch {}
  return local_2;
}
function fn_451f0732(arg) {
  local_a1e12a9e_2.delete(arg);
  try {
    sessionStorage.removeItem(`itd:self-attempt:${arg}`);
  } catch {}
}
const local_a4011b04 = (arg) => {
  const local = imported_12();
  return {
    scope: arg,
    step: "resolving",
    months: 1,
    auto: false,
    state: null,
    attempt: null,
    error: null,
    internationalBusy: false,
    unavailable: null,
    preview: null,
    usdRate: local,
    usdRatePending: !local,
    stageBePaidAvailable: false,
    stageBePaidOffers: [],
    internationalAuto: false,
    selectedStageMonths: null,
    stageSwitchRequested: false,
  };
};
const local_92fb4f6d = [
  "months",
  "initialAmountMinor",
  "currency",
  "quoteVersion",
  "renewalMonths",
  "renewalAmountMinor",
  "renewalCurrency",
  "autoRenewal",
  "consentVersion",
  "provider",
  "fingerprint",
  "recipientUserId",
];
const local_882224b7 = (arg, arg_2) =>
  !!arg && !!arg_2 && local_92fb4f6d.every((arg) => arg[arg] === arg_2[arg]);
const local_d7512db8 = (arg) => {
  if (arg) {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(arg));
  }
  return null;
};
const local_f485d0a6 =
  "Не удалось проверить оплату. Повторите проверку; повторно платить не нужно.";
const local_6f5f57fb = {
  recipient_not_found: "Получатель не найден",
  recipient_already_subscribed: "У пользователя уже есть подписка",
  cannot_gift_yourself: "Нельзя подарить подписку себе",
  gift_payment_unavailable: "Не удалось создать платёж. Попробуйте позже",
  gift_payment_review_required:
    "Статус предыдущего платежа нужно проверить в поддержке. Повторно оплачивать не нужно",
  gift_recipient_conflict:
    "Этот платёж создан для другого получателя. Откройте окно подарка ещё раз",
  quote_changed:
    "Условия оплаты изменились. Проверьте их перед новой попыткой.",
};
const local_b60cae7c = (arg) => {
  if (
    arg &&
    typeof arg === "object" &&
    "code" in arg &&
    typeof arg.code === "string"
  ) {
    return local_6f5f57fb[arg.code] ?? null;
  }
  return null;
};
function symbol_004(arg) {
  const local = `${arg.open}:${arg.eligible}:${arg.ownerId}:${arg.kind}:${arg.recipientId}:${arg.scopeKey}`;
  const [local_2, local_3] = imported_5(() => local_a4011b04(local));
  const local_4 = local_2.scope === local ? local_2 : local_a4011b04(local);
  const local_5 = imported_6(arg);
  local_5.current = arg;
  const local_6 = imported_6(true);
  const local_7 = imported_6(false);
  const local_8 = imported_6(0);
  const local_9 = imported_6(0);
  const local_10 = imported_6(false);
  const local_11 = imported_6(local_4);
  local_11.current = local_4;
  const local_12 = imported_6(null);
  const local_13 = imported_6(0);
  const local_14 = imported_6(null);
  const local_15 = (arg) => {
    local_11.current = {
      ...local_11.current,
      ...arg,
    };
    local_3(local_11.current);
  };
  const local_16 = () => {
    local_13.current++;
    if (local_12.current !== null) {
      clearInterval(local_12.current);
    }
    local_12.current = null;
    local_14.current?.cleanup();
    local_14.current = null;
  };
  const local_17 = () => {
    const local = local_5.current;
    const local_2 = local_8.current;
    const local_3 = local.captureCurrent();
    return () =>
      local_6.current &&
      !local_7.current &&
      local_5.current.open &&
      local_5.current.eligible &&
      local_8.current === local_2 &&
      local_5.current.scopeKey === local.scopeKey &&
      local_5.current.ownerId === local.ownerId &&
      local_5.current.recipientId === local.recipientId &&
      local_5.current.kind === local.kind &&
      local_3();
  };
  const local_18 = () =>
    imported_13(local_5.current.kind, local_5.current.recipientId);
  const local_19 = () => {
    const local = local_5.current;
    if (!local.ownerId) {
      throw new Error("Требуется авторизация");
    }
    if (local.kind === "gift") {
      return fn_a4652e59(local.ownerId, local.recipientId);
    }
    return fn_da45f5b9(local.ownerId);
  };
  const local_20 = () => {
    const local = local_5.current;
    local.ownerId &&
      (local.kind === "gift"
        ? fn_f59e472a(local.ownerId, local.recipientId)
        : fn_451f0732(local.ownerId));
  };
  const local_21 = () => {
    local_16();
    local_20();
    local_7.current = true;
    local_5.current.onSucceeded();
  };
  const local_22 = (arg) =>
    arg?.provider === "bepaid" &&
    typeof window !== "undefined" &&
    imported_8(window.location.origin);
  const local_23 = (arg) => {
    const {
      ownerId: local,
      kind: local_2,
      recipientId: local_3,
      recipientName: local_4,
      recipientUsername: local_5,
    } = local_5.current;
    imported_16(
      arg,
      local
        ? local_2 === "self"
          ? {
              ownerId: local,
              kind: local_2,
            }
          : local_3 && local_4 !== null
            ? {
                ownerId: local,
                kind: local_2,
                recipient: {
                  id: local_3,
                  name: local_4,
                  username: local_5,
                },
              }
            : null
        : null,
    );
  };
  const local_24 = (arg) =>
    !!arg &&
    typeof window !== "undefined" &&
    imported_8(window.location.origin);
  const local_25 = async () => {
    const local = local_17();
    local_20();
    local_15({
      stageSwitchRequested: false,
    });
    await fn();
    if (local() && local_11.current.step === "overview") {
      local_15({
        step: "routes",
      });
    }
  };
  const local_26 = () => {
    const local = local_11.current.state;
    return (
      !local_10.current &&
      !local_7.current &&
      local_5.current.open &&
      local_5.current.eligible &&
      !!local?.canEditTerms &&
      !!local.canStartNewAttempt &&
      ![
        "pending",
        "creating",
        "resolving",
        "reviewRequired",
        "active",
      ].includes(local_11.current.step)
    );
  };
  const local_27 = (arg) => {
    local_15({
      attempt: arg,
      error: null,
    });
    if (arg.paid && arg.status === "succeeded") {
      local_21();
      return;
    }
    if (arg.status === "failed" || arg.status === "review_required") {
      local_16();
      local_15({
        step: "reviewRequired",
      });
      return;
    }
    if (arg.status === "canceled") {
      local_16();
      if (local_24(arg.quote)) {
        local_25();
      } else {
        fn(true);
      }
      return;
    }
    local_15({
      step: "pending",
    });
  };
  const local_28 = (arg) => {
    local_16();
    const local = local_13.current;
    const local_2 = local_17();
    const local_3 = local_18();
    const local_4 = Date.now() + 8 * 60000;
    const local_5 = local_19();
    const local_6 =
      local_11.current.attempt?.quote ?? local_11.current.state?.quote;
    const local_7 = local_6?.provider === "yookassa" && local_24(local_6);
    let local_8 = false;
    let local_9 = -Infinity;
    const local_10 = async (arg = false) => {
      if (!local_2() || local !== local_13.current) {
        return;
      }
      const local = Date.now();
      if (local >= local_4) {
        if (!local_7) {
          local_16();
          local_15({
            error:
              "Подтверждение задерживается. Проверьте статус позже; повторно платить не нужно.",
          });
          return;
        }
        if (!arg && local - local_9 < 30000) {
          return;
        }
      }
      if (
        !(local_7 && typeof document !== "undefined" && document.hidden) &&
        !local_8
      ) {
        local_8 = true;
        local_9 = local;
        try {
          const local =
            local_3.kind === "gift"
              ? await imported_9.getGiftCheckout(arg, local_3.recipientUserId)
              : await imported_9.getCheckoutPayment(
                  arg,
                  local_11.current.state?.agreement,
                );
          if (!local_2() || local !== local_13.current) {
            return;
          }
          if (!local_882224b7(local_6, local.quote)) {
            local_16();
            local_15({
              step: "reviewRequired",
              error:
                "Условия предыдущей оплаты изменились. Повторно платить не нужно.",
            });
            return;
          }
          local_27(local);
          if (
            !local_2() ||
            local !== local_13.current ||
            local_11.current.step !== "pending"
          ) {
            return;
          }
          const local_2 = await imported_9.getCheckoutState(local_3, local_5);
          if (!local_2() || local !== local_13.current) {
            return;
          }
          if (local_2.state === "succeeded") {
            local_21();
            return;
          }
          if (
            ["pending", "processing"].includes(local_2.state) &&
            local_2.attemptId === arg &&
            local_882224b7(local_6, local_2.quote)
          ) {
            local_15({
              state: local_2,
              attempt: {
                ...local,
                confirmationUrl: local_2.confirmationUrl,
              },
              error: null,
            });
          } else if (
            local_2.state === "canceled" &&
            local_2.canEditTerms &&
            local_2.canStartNewAttempt
          ) {
            local_16();
            local_20();
            local_15({
              state: local_2,
              attempt: null,
              stageSwitchRequested: false,
              step: local_24(local_6) ? "routes" : "terms",
            });
          } else {
            local_16();
            local_15({
              state: local_2,
              step: "reviewRequired",
            });
          }
        } catch {
          if (local_2() && local === local_13.current) {
            local_15({
              error: local_f485d0a6,
            });
          }
        } finally {
          local_8 = false;
        }
      }
    };
    if (local_7) {
      const local = () => {
        local_10(true);
      };
      window.addEventListener?.("focus", local);
      if (typeof document !== "undefined") {
        document.addEventListener("visibilitychange", local);
      }
      local_14.current = {
        refresh: local,
        cleanup: () => {
          window.removeEventListener?.("focus", local);
          if (typeof document !== "undefined") {
            document.removeEventListener("visibilitychange", local);
          }
        },
      };
    }
    local_12.current = setInterval(() => {
      local_10();
    }, 2000);
    local_10();
  };
  async function fn(arg = false, arg_2 = null, arg_3 = false) {
    if (
      !local_5.current.open ||
      !local_5.current.eligible ||
      !local_5.current.ownerId ||
      local_7.current ||
      local_10.current
    ) {
      return;
    }
    const local = local_17();
    const local_2 = ++local_9.current;
    const local_3 = local_18();
    local_15({
      step: "resolving",
      error: null,
    });
    try {
      const local = await imported_9.getCheckoutState(local_3, local_19());
      if (!local() || local_2 !== local_9.current) {
        return;
      }
      const local_2 = local_11.current.months;
      const local_3 = local.offers.some((arg) => arg.months === local_2)
        ? local_2
        : (local.offers[0]?.months ?? local_2);
      local_15({
        state: local,
        months: local_3,
        attempt: null,
        error: arg_2,
      });
      if (local.state === "succeeded") {
        local_21();
        return;
      }
      if (local.state === "pending" || local.state === "processing") {
        local_15({
          step: "pending",
          stageSwitchRequested:
            arg_3 &&
            (local_22(local.quote) ||
              (typeof window !== "undefined" &&
                window.location.origin === "https://stage.xn--d1ah4a.com")),
        });
        local_28(local.attemptId);
        return;
      }
      if (
        local.state === "review_required" ||
        !local.canEditTerms ||
        !local.canStartNewAttempt
      ) {
        local_15({
          step: "reviewRequired",
        });
        return;
      }
      if (arg || local.state === "canceled" || local.state === "failed") {
        local_20();
      }
      const local_4 =
        arg_3 && local.state === "canceled" && local_24(local.quote);
      local_15({
        step: local_4 ? "routes" : arg ? "terms" : "overview",
      });
    } catch {
      if (local() && local_2 === local_9.current) {
        local_15({
          step: "resolving",
          error: local_f485d0a6,
        });
      }
    }
  }
  imported_7(() => {
    local_6.current = true;
    local_7.current = false;
    local_8.current++;
    local_9.current++;
    local_10.current = false;
    local_16();
    local_15(local_a4011b04(local));
    if (arg.open && arg.eligible && arg.ownerId) {
      fn(false, null, !arg.preferCurrentPayment);
    }
    return () => {
      local_8.current++;
      local_9.current++;
      local_7.current = true;
      local_16();
    };
  }, [
    arg.open,
    arg.eligible,
    arg.ownerId,
    arg.recipientId,
    arg.kind,
    arg.scopeKey,
    arg.preferCurrentPayment,
  ]);
  imported_7(
    () => () => {
      local_6.current = false;
      local_7.current = true;
      local_16();
    },
    [],
  );
  imported_7(() => {
    if (
      !arg.open ||
      !arg.eligible ||
      !arg.ownerId ||
      typeof window === "undefined" ||
      !imported_8(window.location.origin)
    ) {
      return;
    }
    let local = false;
    let local_2;
    const local_3 = arg.captureCurrent();
    const local_4 = async () => {
      try {
        const {
          offers: local,
          usdRate: local_2,
          renewal: local_3,
        } = await imported_9.getStageBePaidOffers(arg.kind);
        if (local || local_7.current || !local_3()) {
          return;
        }
        const local_4 = local_11.current.selectedStageMonths;
        const local_5 = local_11.current.internationalRenewal;
        const local_6 =
          !!local_3 &&
          local_3.amountMinor === local_5?.amountMinor &&
          local_3.consentVersion === local_5?.consentVersion;
        local_15({
          stageBePaidAvailable: local.length > 0,
          stageBePaidOffers: local,
          usdRate: local_2,
          usdRatePending: false,
          internationalRenewal: local_3,
          internationalAuto: local_6 && local_11.current.internationalAuto,
          selectedStageMonths: local.some((arg) => arg.months === local_4)
            ? local_4
            : (local[0]?.months ?? null),
        });
        const local_7 = local_2
          ? Math.max(100, Date.parse(local_2.validUntil) - Date.now() + 50)
          : imported_10;
        local_2 = setTimeout(() => {
          local_4();
        }, local_7);
      } catch {
        if (!local && !local_7.current && local_3()) {
          local_15({
            usdRatePending: false,
          });
          local_2 = setTimeout(() => {
            local_4();
          }, imported_10);
        }
      }
    };
    local_4();
    return () => {
      local = true;
      clearTimeout(local_2);
    };
  }, [local]);
  imported_7(() => {
    if (
      !arg.open ||
      typeof window === "undefined" ||
      typeof window.addEventListener !== "function" ||
      !imported_8(window.location.origin)
    ) {
      return;
    }
    const local = (arg) => {
      if (!(!arg.persisted || !local_5.current.open || local_7.current)) {
        imported_11();
        local_8.current++;
        local_9.current++;
        local_16();
        local_10.current = false;
        local_15({
          internationalBusy: false,
        });
        fn(false, null, true);
      }
    };
    window.addEventListener("pageshow", local);
    return () => window.removeEventListener("pageshow", local);
  }, [local]);
  const local_29 = () => {
    try {
      const local = window.open("", "_blank");
      if (local) {
        local.opener = null;
      }
      return local;
    } catch {
      return null;
    }
  };
  const local_30 = (arg, arg_2 = null) => {
    if (arg_2 && !arg_2.closed) {
      try {
        arg_2.location.href = arg;
        return;
      } catch {
        arg_2.close();
      }
    }
    window.location.href = arg;
  };
  const local_31 = async () => {
    if (!local_26() || local_11.current.step !== "terms") {
      return;
    }
    const local = local_17();
    const local_2 = local_18();
    const local_3 = local_11.current.state;
    let local_4;
    try {
      local_4 = imported_14(
        local_3,
        local_2,
        local_19(),
        local_11.current.months,
        local_11.current.auto,
        local_5.current.methodId,
      );
    } catch {
      local_15({
        error: "Условия изменились. Повторите проверку оплаты.",
      });
      return;
    }
    local_10.current = true;
    local_9.current++;
    local_16();
    const local_5 = local_4.methodId ? null : local_29();
    local_15({
      step: "creating",
      error: null,
    });
    try {
      const local =
        local_2.kind === "gift"
          ? await imported_9.createGiftCheckout(local_4)
          : await imported_9.payCheckout(local_4, local_3.agreement);
      if (!local()) {
        local_5?.close();
        return;
      }
      local_10.current = false;
      local_27(local);
      if (
        local.paid ||
        ["canceled", "failed", "review_required"].includes(local.status)
      ) {
        local_5?.close();
      } else {
        if (local.confirmationUrl) {
          local_30(local.confirmationUrl, local_5);
        } else {
          local_5?.close();
        }
        local_28(local.id);
      }
    } catch (error) {
      local_5?.close();
      if (local()) {
        local_10.current = false;
        await fn(false, local_b60cae7c(error));
      }
    } finally {
      if (local()) {
        local_10.current = false;
      }
    }
  };
  const local_32 = async () => {
    const local = local_11.current.state;
    const local_2 = local_11.current.attempt?.id ?? local?.attemptId;
    if (
      local_10.current ||
      local_11.current.step !== "pending" ||
      !local?.canReleaseAttempt ||
      !local_2 ||
      local_24(local_11.current.attempt?.quote ?? local.quote)
    ) {
      return;
    }
    const local_3 = local_17();
    const local_4 = local_18();
    local_10.current = true;
    local_9.current++;
    local_16();
    local_15({
      step: "resolving",
      error: null,
    });
    try {
      const local = await imported_9.releaseCheckout(local_4, local_2);
      if (!local_3()) {
        return;
      }
      if (local.released) {
        local_20();
        local_15({
          attempt: null,
        });
      }
      local_10.current = false;
      await fn();
      const local_2 = local_11.current;
      if (local_3() && local_2.step === "overview") {
        local_15({
          step: "routes",
        });
      }
    } catch {
      if (local_3()) {
        local_20();
        local_10.current = false;
        await fn(false, "Не удалось обновить выбор. Проверьте статус оплаты.");
      }
    } finally {
      if (local_3()) {
        local_10.current = false;
      }
    }
  };
  const local_33 = () => {
    if (!(
      !local_26() ||
      local_11.current.step !== "routes" ||
      !local_11.current.stageBePaidAvailable ||
      typeof window === "undefined" ||
      !imported_8(window.location.origin)
    )) {
      local_15({
        step: "internationalTerms",
        unavailable: null,
        error: null,
      });
    }
  };
  const local_34 = async () => {
    if (
      !local_26() ||
      local_11.current.step !== "internationalTerms" ||
      !local_11.current.stageBePaidAvailable ||
      local_11.current.usdRatePending ||
      typeof window === "undefined" ||
      !imported_8(window.location.origin)
    ) {
      return;
    }
    const local = local_11.current.stageBePaidOffers.find(
      (arg) => arg.months === local_11.current.selectedStageMonths,
    );
    if (!local) {
      return;
    }
    const local_2 = local_11.current.internationalAuto
      ? local_11.current.internationalRenewal
      : undefined;
    const local_3 = local_17();
    const local_4 = local_18();
    let local_5 = false;
    let local_6 = false;
    local_10.current = true;
    local_9.current++;
    local_15({
      internationalBusy: true,
      error: null,
      unavailable: null,
    });
    try {
      const local = await imported_9.internationalCheckout(
        local_4,
        crypto.randomUUID(),
      );
      if (!local_3()) {
        return;
      }
      if (local.mode === "informational") {
        local_15({
          step: "routes",
          stageBePaidAvailable: false,
          unavailable: "Оплата через bePaid сейчас недоступна.",
        });
      } else {
        const local = await fetch(new URL("./pay", local.handoff.url), {
          method: "POST",
          credentials: "same-origin",
          redirect: "error",
          cache: "no-store",
          headers: {
            Accept: "application/json",
          },
          signal: AbortSignal.timeout(25000),
          body: new URLSearchParams({
            handoffTicket: local.handoff.fields.handoffTicket,
            months: String(local.months),
            amountMinor: String(local.amountMinor),
            ...(local_2
              ? {
                  consentVersion: local_2.consentVersion,
                  renewalAmountMinor: String(local_2.amountMinor),
                }
              : {}),
            theme: window.matchMedia?.("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light",
          }),
        });
        if (!local_3()) {
          return;
        }
        if (!local.ok) {
          throw new Error("Не удалось открыть оплату");
        }
        const local_2 = await local.json();
        if (!local_3()) {
          return;
        }
        const local_3 = imported_15(local_2?.checkoutUrl);
        if (!local_3) {
          throw new Error("Не удалось открыть оплату");
        }
        local_23(local_3);
        local_5 = true;
        local_15({
          step: "resolving",
        });
      }
    } catch {
      if (local_3()) {
        local_5 = true;
        local_6 = true;
        local_15({
          step: "resolving",
        });
      }
    } finally {
      if (local_3()) {
        local_10.current = false;
        local_15({
          internationalBusy: false,
        });
        if (local_5) {
          fn().then(() => {
            if (local_6 && local_3() && local_11.current.step === "overview") {
              local_15({
                step: "routes",
                unavailable:
                  "Не удалось открыть bePaid. Попробуйте ещё раз или выберите другой способ.",
              });
            }
          });
        }
      }
    }
  };
  const local_35 = local_4.attempt?.quote ?? local_4.state?.quote ?? null;
  const local_36 =
    local_4.step === "reviewRequired" &&
    local_4.state?.reasonCode === "stage_bepaid_handoff_unpaid" &&
    !!local_4.state.attemptId &&
    typeof window !== "undefined" &&
    imported_8(window.location.origin);
  const local_37 = async () => {
    const local = local_11.current.state;
    if (
      local_10.current ||
      !local_36 ||
      local?.reasonCode !== "stage_bepaid_handoff_unpaid" ||
      !local.attemptId
    ) {
      return;
    }
    const local_2 = local_17();
    const local_3 = local_18();
    local_10.current = true;
    local_9.current++;
    local_15({
      step: "resolving",
      error: null,
    });
    try {
      const local = await imported_9.releaseStageBePaidHandoff(
        local_3,
        local.attemptId,
      );
      if (!local_2()) {
        return;
      }
      if (local) {
        local_20();
      }
      local_10.current = false;
      await fn();
      if (local && local_2() && local_11.current.step === "overview") {
        local_15({
          step: "routes",
        });
      }
    } catch {
      if (local_2()) {
        local_10.current = false;
        await fn(false, "Не удалось проверить предыдущую попытку.");
      }
    } finally {
      if (local_2()) {
        local_10.current = false;
      }
    }
  };
  const local_38 = ["pending", "reviewRequired"].includes(local_4.step)
    ? local_35
    : (local_4.state?.offers.find((arg) => arg.months === local_4.months) ??
      null);
  const local_39 = local_4.state?.agreement;
  const local_40 = local_d7512db8(local_39?.nextChargeAt);
  const local_41 = local_4.usdRate;
  const local_42 = (arg, arg_2) => {
    if (arg_2 === "BYN") {
      return imported_2(arg, local_41);
    }
    return `${new Intl.NumberFormat("ru-RU").format(arg / 100)} ₽`;
  };
  const local_43 = local_39?.enabled
    ? `Автопродление подключено: ${local_42(local_39.renewalAmountMinor, local_39.renewalCurrency)} каждый месяц${local_40 ? `, следующее списание ${local_40}` : " после окончания оплаченного срока"}. Напомним за 3 дня.`
    : null;
  const local_44 = local_4.step === "pending" && local_4.stageSwitchRequested;
  return {
    panel: {
      kind: arg.kind,
      step: local_44 ? "routes" : local_4.step,
      months: local_4.months,
      newAutoConsent: local_4.auto,
      canEditTerms: !!local_4.state?.canEditTerms,
      canStartNewAttempt: !!local_4.state?.canStartNewAttempt,
      canOfferAutoRenewal: !!local_39?.canOffer,
      agreement: {
        enabled: !!local_39?.enabled,
        requiresNewConsent: !!local_39?.requiresNewConsent,
        summary: local_43,
      },
      offers: local_4.state?.offers ?? [],
      quote: local_38,
      recipientName: arg.recipientName,
      error: local_4.error,
      internationalBusy: local_4.internationalBusy,
      internationalUnavailable: local_4.unavailable,
      stageBePaidAvailable: local_4.stageBePaidAvailable,
      usdRate: local_41,
      usdRatePending: local_4.usdRatePending,
      internationalRenewal: local_4.internationalRenewal,
      internationalAuto: local_4.internationalAuto,
      onInternationalAutoChange: (arg) => {
        if (
          local_26() &&
          local_11.current.step === "internationalTerms" &&
          local_11.current.internationalRenewal
        ) {
          local_15({
            internationalAuto: arg,
          });
        }
      },
      stageBePaidOffers: local_4.stageBePaidOffers,
      selectedStageMonths: local_4.selectedStageMonths,
      onStageMonthsChange: (arg) => {
        if (
          local_26() &&
          local_11.current.step === "internationalTerms" &&
          local_11.current.stageBePaidOffers.some((arg) => arg.months === arg)
        ) {
          local_15({
            selectedStageMonths: arg,
          });
        }
      },
      onStagePay: local_34,
      canRestartStageBePaid: local_36,
      onRestartStageBePaid: local_37,
      canResume: !!(
        local_4.attempt?.confirmationUrl ?? local_4.state?.confirmationUrl
      ),
      actualExpiryLabel: local_d7512db8(local_4.state?.actualExpiresAt),
      canReselect:
        local_4.step === "pending" &&
        local_4.state?.canReleaseAttempt === true &&
        !local_24(local_35),
      onReselect: local_32,
      canSwitchStagePayment: local_4.step === "pending" && local_24(local_35),
      onSwitchStagePayment: () => {
        const local = local_11.current;
        if (!(
          local_10.current ||
          local.step !== "pending" ||
          local.stageSwitchRequested ||
          !local_24(local.attempt?.quote ?? local.state?.quote)
        )) {
          local_15({
            stageSwitchRequested: true,
            error: null,
          });
          local_14.current?.refresh();
        }
      },
      onReturnToPending: local_44
        ? () =>
            local_15({
              stageSwitchRequested: false,
            })
        : undefined,
      providerLabel: local_35
        ? local_35.provider === "yookassa"
          ? "ЮKassa"
          : "bePaid"
        : null,
      pendingSummary: local_35
        ? arg.kind === "gift"
          ? "Разовый подарок, без автопродления."
          : `${local_35.autoRenewal ? `В этой оплате выбрано автопродление: ${local_42(local_35.renewalAmountMinor, local_35.renewalCurrency)} каждый месяц.` : "В этой оплате автопродление не выбрано."}${local_39 ? ` Сейчас автопродление ${local_39.enabled ? "включено" : "выключено"}.` : ""}`
        : null,
      onBegin: () => {
        if (local_26()) {
          local_15({
            step: "routes",
          });
        }
      },
      onRubles: () => {
        if (local_26()) {
          local_15({
            step: "terms",
            unavailable: null,
          });
        }
      },
      onBack: () => {
        if (local_26()) {
          local_15({
            step:
              local_4.step === "terms" || local_4.step === "internationalTerms"
                ? "routes"
                : "overview",
            error: null,
          });
        }
      },
      onMonthsChange: (arg) => {
        if (
          local_26() &&
          local_11.current.step === "terms" &&
          local_11.current.state?.offers.some((arg) => arg.months === arg)
        ) {
          local_15({
            months: arg,
          });
        }
      },
      onNewAutoConsentChange: (arg) => {
        if (local_26() && !local_39?.enabled && local_39?.canOffer) {
          local_15({
            auto: arg,
          });
        }
      },
      onPay: local_31,
      onInternational: local_33,
      onResume: async () => {
        const local = local_11.current;
        const local_2 =
          local.attempt?.confirmationUrl ?? local.state?.confirmationUrl;
        if (local.step !== "pending" || !local_2 || local_10.current) {
          return;
        }
        if (!local_22(local.attempt?.quote ?? local.state?.quote)) {
          local_30(local_2, local_29());
          return;
        }
        const local_3 = local.attempt?.id ?? local.state?.attemptId;
        if (!local_3) {
          return;
        }
        const local_4 = local_17();
        local_10.current = true;
        local_15({
          internationalBusy: true,
          error: null,
        });
        try {
          const local = await imported_9.resumeStageBePaid(local_3);
          if (!local_4()) {
            return;
          }
          if (local) {
            local_23(local);
          } else {
            local_28(local_3);
          }
        } catch {
          if (local_4()) {
            local_15({
              error: "Не удалось продолжить оплату. Проверьте её статус.",
            });
          }
        } finally {
          if (local_4()) {
            local_10.current = false;
            local_15({
              internationalBusy: false,
            });
          }
        }
      },
      onCheckStatus: () => {
        if (local_10.current) {
          return;
        }
        if (local_14.current) {
          local_14.current.refresh();
          return;
        }
        const local = local_11.current;
        const local_2 = local.attempt?.id ?? local.state?.attemptId;
        if (
          local.step === "pending" &&
          local_2 &&
          local_24(local.attempt?.quote ?? local.state?.quote)
        ) {
          local_28(local_2);
        } else {
          local_16();
          fn();
        }
      },
      onRetryRead: () => {
        fn();
      },
      ...(local_4.preview
        ? {
            onInternationalPreview: () => local_30(local_4.preview, local_29()),
          }
        : {}),
    },
    dismiss() {
      local_7.current = true;
      local_8.current++;
      local_9.current++;
      local_16();
      local_5.current.onClose();
    },
  };
}
function symbol_002(arg, arg_2) {
  const local = imported_6(null);
  imported_7(() => {
    const local = local.current?.parentElement?.parentElement;
    const local_2 = local?.parentElement;
    if (!arg || !local || !local_2) {
      return;
    }
    const local_3 = document.activeElement;
    const local_4 = [
      "role",
      "aria-modal",
      "aria-label",
      "data-purchase-dialog",
    ];
    const local_5 = local_4.map((arg) => local.getAttribute(arg));
    const local_6 = local_2.getAttribute("data-purchase-overlay");
    local.setAttribute("role", "dialog");
    local.setAttribute("aria-modal", "true");
    local.setAttribute("aria-label", arg_2);
    local.setAttribute("data-purchase-dialog", "");
    local_2.setAttribute("data-purchase-overlay", "");
    const local_7 = () =>
      Array.from(
        local.querySelectorAll(
          'button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), [tabindex="0"]',
        ),
      ).filter((arg) => arg.getClientRects().length > 0);
    const local_8 = local_7()[0];
    const local_9 = local_8?.getAttribute("aria-label");
    if (
      local_8?.tagName === "BUTTON" &&
      !local_8.textContent?.trim() &&
      !local_9
    ) {
      local_8.setAttribute("aria-label", "Закрыть");
    }
    const local_10 = (arg) => {
      if (arg.key !== "Tab") {
        return;
      }
      const local = local_7();
      const local_2 = local[0];
      const local_3 = local.at(-1);
      !local_2 ||
        !local_3 ||
        (arg.shiftKey &&
        (document.activeElement === local_2 ||
          !local.contains(document.activeElement))
          ? (arg.preventDefault(), local_3.focus())
          : !arg.shiftKey &&
            (document.activeElement === local_3 ||
              !local.contains(document.activeElement)) &&
            (arg.preventDefault(), local_2.focus()));
    };
    local.addEventListener("keydown", local_10);
    local.contains(document.activeElement) ||
      local_8?.focus({
        preventScroll: true,
      });
    return () => {
      local.removeEventListener("keydown", local_10);
      local_4.forEach((arg, arg_2) => {
        if (local_5[arg_2] === null) {
          return local.removeAttribute(arg);
        }
        return local.setAttribute(arg, local_5[arg_2]);
      });
      if (local_6 === null) {
        local_2.removeAttribute("data-purchase-overlay");
      } else {
        local_2.setAttribute("data-purchase-overlay", local_6);
      }
      if (local_8 && local_9 === null) {
        local_8.removeAttribute("aria-label");
      }
      if (local_3?.isConnected) {
        local_3.focus({
          preventScroll: true,
        });
      }
    };
  }, [arg, arg_2]);
  return local;
}
export { symbol_001, symbol_002, symbol_003, symbol_004 };
