import {
  symbol_288 as imported,
  symbol_020 as imported_2,
  symbol_074 as imported_3,
  symbol_222 as imported_4,
  symbol_002 as imported_5,
  symbol_275 as imported_6,
  symbol_139 as imported_7,
  symbol_149 as imported_8,
  symbol_150 as imported_9,
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
const local_d37d23af = "c_textButton";
const local_7aaa5b57 = "c_loading";
const local_ebdc2467 = "c_expiry";
const local_a84efeaf = "c_srOnly";
const local_12b6508a = {
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
const local_9b12006c = false;
function symbol_001(arg) {
  const { step: local, kind: local_2, quote: local_3 } = arg;
  const local_4 = local === "creating" || local === "resolving";
  const local_5 = arg.canEditTerms && arg.canStartNewAttempt && !local_4;
  const local_6 =
    local_3 &&
    arg.offers.some(
      (arg) =>
        arg.months === local_3.months &&
        arg.initialAmountMinor === local_3.initialAmountMinor &&
        arg.quoteVersion === local_3.quoteVersion,
    );
  const local_7 =
    local === "terms" &&
    local_5 &&
    local_3 &&
    local_3.months === arg.months &&
    local_3.currency === "RUB" &&
    local_8ba4b2fe(local_3.initialAmountMinor) &&
    local_6;
  const local_8 =
    local_2 === "self" && arg.canOfferAutoRenewal && !arg.agreement.enabled;
  const local_9 =
    local === "routes"
      ? "Способ оплаты"
      : local === "terms"
        ? "Срок подписки"
        : null;
  const local_10 = `${symbol_003.subscribeBtn} ${local_12b6508a.primary}`;
  const local_11 =
    local_3 && local_8ba4b2fe(local_3.initialAmountMinor)
      ? imported("div", {
          className: local_12b6508a.summary,
          children: [
            local_2 === "gift" &&
              arg.recipientName &&
              imported("div", {
                className: local_12b6508a.recipient,
                children: ["Подарок для ", arg.recipientName],
              }),
            imported("div", {
              children: [
                "НУКСТА · ",
                local_c9179fb5(local_3.months),
                " · ",
                imported("strong", {
                  children: local_7f58ca46(local_3.initialAmountMinor),
                }),
              ],
            }),
          ],
        })
      : null;
  return imported("section", {
    className: local_12b6508a.panel,
    "data-purchase-step": local,
    "aria-busy": local_4 || arg.internationalBusy,
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
        if (local && (local === "routes" || local === "terms")) {
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
        className: local_12b6508a.stage,
        children: [
          local_9 &&
            imported("h3", {
              className: local_12b6508a.heading,
              tabIndex: -1,
              "data-purchase-heading": true,
              children: local_9,
            }),
          local === "overview" &&
            imported("button", {
              type: "button",
              className: local_10,
              disabled: !local_5,
              onClick: () => {
                if (local_5) {
                  arg.onBegin();
                }
              },
              children: local_2 === "gift" ? "Подарить" : "Купить",
            }),
          local === "routes" &&
            imported(imported_2, {
              children: [
                imported("button", {
                  type: "button",
                  className: local_10,
                  disabled: !local_5 || arg.internationalBusy,
                  onClick: () => {
                    if (local_5 && !arg.internationalBusy) {
                      arg.onRubles();
                    }
                  },
                  children: "Оплатить в рублях",
                }),
                local_9b12006c,
                arg.internationalUnavailable &&
                  imported("div", {
                    className: local_12b6508a.message,
                    role: "alert",
                    children: [
                      arg.internationalUnavailable,
                      arg.onInternationalPreview &&
                        imported("button", {
                          type: "button",
                          className: local_12b6508a.textButton,
                          onClick: arg.onInternationalPreview,
                          children: "Информация об оплате",
                        }),
                    ],
                  }),
              ],
            }),
          local === "terms" &&
            imported(imported_2, {
              children: [
                imported("fieldset", {
                  className: local_12b6508a.terms,
                  disabled: !local_5,
                  children: [
                    imported("legend", {
                      className: local_12b6508a.srOnly,
                      children: "Выберите срок подписки",
                    }),
                    arg.offers.map((arg) =>
                      imported(
                        "label",
                        {
                          className: `${local_12b6508a.term} ${arg.months === arg.months ? local_12b6508a.selected : ""}`,
                          children: [
                            imported("input", {
                              type: "radio",
                              name: `nuksta-${local_2}-months`,
                              value: arg.months,
                              checked: arg.months === arg.months,
                              onChange: () => {
                                if (local_5) {
                                  arg.onMonthsChange(arg.months);
                                }
                              },
                            }),
                            imported("span", {
                              children: local_c9179fb5(arg.months),
                            }),
                            imported("span", {
                              className: local_12b6508a.amount,
                              children: local_7f58ca46(arg.initialAmountMinor),
                            }),
                          ],
                        },
                        arg.months,
                      ),
                    ),
                  ],
                }),
                local_11,
                arg.methodSelector,
                local_2 === "gift"
                  ? imported("p", {
                      className: local_12b6508a.notice,
                      children:
                        "Это разовый подарок. Автопродление не подключается",
                    })
                  : arg.agreement.enabled
                    ? imported("p", {
                        className: local_12b6508a.notice,
                        children:
                          arg.agreement.summary || "Автопродление подключено",
                      })
                    : local_8
                      ? imported("label", {
                          className: local_12b6508a.consent,
                          children: [
                            imported("input", {
                              type: "checkbox",
                              checked: arg.newAutoConsent,
                              disabled: !local_5,
                              onChange: (arg) => {
                                if (local_5) {
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
                          className: local_12b6508a.notice,
                          children: "Новое автопродление не подключается",
                        }),
                local_2 === "self" &&
                  local_8 &&
                  arg.newAutoConsent &&
                  local_3 &&
                  imported("p", {
                    className: local_12b6508a.notice,
                    children: [
                      "Далее — ",
                      local_7f58ca46(local_3.renewalAmountMinor),
                      " каждый месяц после окончания оплаченного срока. Напомним за 3 дня до окончания.",
                    ],
                  }),
                imported("p", {
                  className: local_12b6508a.notice,
                  children: imported("a", {
                    href: "/subscription-terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Условия платного доступа НУКСТА",
                  }),
                }),
                imported("button", {
                  type: "button",
                  className: local_10,
                  disabled: !local_7,
                  onClick: () => {
                    if (local_7) {
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
              className: local_12b6508a.loading,
              role: "status",
              children: [
                imported(imported_3, {
                  size: "xs",
                }),
                "Проверяем предыдущую оплату…",
              ],
            }),
          local === "creating" &&
            imported(imported_2, {
              children: [
                local_11,
                imported("p", {
                  className: local_12b6508a.loading,
                  role: "status",
                  children: [
                    imported(imported_3, {
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
            imported(imported_2, {
              children: [
                local_11,
                arg.providerLabel &&
                  imported("p", {
                    className: local_12b6508a.notice,
                    children: ["Оплата через ", arg.providerLabel],
                  }),
                arg.pendingSummary &&
                  imported("p", {
                    className: local_12b6508a.notice,
                    children: arg.pendingSummary,
                  }),
                imported("p", {
                  className: local_12b6508a.notice,
                  role: "status",
                  children: "Ожидаем подтверждение оплаты",
                }),
                arg.canResume === true &&
                  imported("button", {
                    type: "button",
                    className: local_10,
                    onClick: arg.onResume,
                    children: "Продолжить оплату",
                  }),
                imported("button", {
                  type: "button",
                  className: local_12b6508a.secondary,
                  onClick: arg.onCheckStatus,
                  children: "Проверить статус",
                }),
                arg.canReselect &&
                  imported("button", {
                    type: "button",
                    className: local_12b6508a.reselect,
                    onClick: arg.onReselect,
                    children: "Вернуться к выбору",
                  }),
                imported("p", {
                  className: local_12b6508a.notice,
                  children:
                    "Закрытие окна не отменяет платёж. Повторно оплачивать не нужно.",
                }),
              ],
            }),
          local === "reviewRequired" &&
            imported(imported_2, {
              children: [
                local_11,
                imported("p", {
                  className: local_12b6508a.message,
                  role: "alert",
                  children:
                    "Статус оплаты нужно проверить в поддержке. Повторно оплачивать не нужно.",
                }),
              ],
            }),
          local === "active" &&
            imported("p", {
              className: local_12b6508a.notice,
              role: "status",
              children: [
                "Подписка активна",
                arg.actualExpiryLabel &&
                  imported("span", {
                    className: local_12b6508a.expiry,
                    children: ["Действует до ", arg.actualExpiryLabel],
                  }),
              ],
            }),
          arg.error &&
            imported("div", {
              className: local_12b6508a.message,
              role: "alert",
              children: [
                arg.error,
                (local === "resolving" || local === "terms") &&
                  imported("button", {
                    type: "button",
                    className: local_12b6508a.textButton,
                    onClick: arg.onRetryRead,
                    children: "Повторить проверку",
                  }),
              ],
            }),
          (local === "routes" || local === "terms") &&
            imported("button", {
              type: "button",
              className: local_12b6508a.back,
              disabled: arg.internationalBusy || !local_5,
              onClick: () => {
                if (local_5 && !arg.internationalBusy) {
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
const local_b3e5145e = (arg, arg_2) => `itd:gift-attempt:${arg}:${arg_2}`;
function fn_a4652e59(arg, arg_2) {
  const local = local_b3e5145e(arg, arg_2);
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
  const local = local_b3e5145e(arg, arg_2);
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
const local_71fa640d = (arg) => ({
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
  agreementFresh: false,
});
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
  const [local_2, local_3] = imported_4(local_71fa640d(local));
  const local_4 = local_2.scope === local ? local_2 : local_71fa640d(local);
  const local_5 = imported_5(arg);
  local_5.current = arg;
  const local_6 = imported_5(true);
  const local_7 = imported_5(false);
  const local_8 = imported_5(0);
  const local_9 = imported_5(0);
  const local_10 = imported_5(false);
  const local_11 = imported_5(local_4);
  local_11.current = local_4;
  const local_12 = imported_5(null);
  const local_13 = imported_5(0);
  const local_14 = (arg) => {
    local_11.current = {
      ...local_11.current,
      ...arg,
    };
    local_3(local_11.current);
  };
  const local_15 = () => {
    local_13.current++;
    if (local_12.current !== null) {
      clearInterval(local_12.current);
    }
    local_12.current = null;
  };
  const local_16 = () => {
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
  const local_17 = () =>
    imported_9(local_5.current.kind, local_5.current.recipientId);
  const local_18 = () => {
    const local = local_5.current;
    if (!local.ownerId) {
      throw new Error("Требуется авторизация");
    }
    if (local.kind === "gift") {
      return fn_a4652e59(local.ownerId, local.recipientId);
    }
    return fn_da45f5b9(local.ownerId);
  };
  const local_19 = () => {
    const local = local_5.current;
    local.ownerId &&
      (local.kind === "gift"
        ? fn_f59e472a(local.ownerId, local.recipientId)
        : fn_451f0732(local.ownerId));
  };
  const local_20 = () => {
    local_15();
    local_19();
    local_7.current = true;
    local_5.current.onSucceeded();
  };
  const local_21 = () => {
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
  const local_22 = (arg) => {
    local_14({
      attempt: arg,
      error: null,
    });
    if (arg.paid && arg.status === "succeeded") {
      local_20();
      return;
    }
    if (arg.status === "failed" || arg.status === "review_required") {
      local_15();
      local_14({
        step: "reviewRequired",
      });
      return;
    }
    if (arg.status === "canceled") {
      local_15();
      fn(true);
      return;
    }
    local_14({
      step: "pending",
    });
  };
  const local_23 = (arg) => {
    local_15();
    const local = local_13.current;
    const local_2 = local_16();
    const local_3 = local_17();
    const local_4 = Date.now() + 8 * 60000;
    const local_5 = local_18();
    const local_6 =
      local_11.current.attempt?.quote ?? local_11.current.state?.quote;
    let local_7 = false;
    const local_8 = async () => {
      if (!(!local_2() || local !== local_13.current)) {
        if (Date.now() >= local_4) {
          local_15();
          local_14({
            error:
              "Подтверждение задерживается. Проверьте статус позже; повторно платить не нужно.",
          });
          return;
        }
        if (!local_7) {
          local_7 = true;
          try {
            const local =
              local_3.kind === "gift"
                ? await imported_7.getGiftCheckout(arg, local_3.recipientUserId)
                : await imported_7.getCheckoutPayment(
                    arg,
                    local_11.current.state?.agreement,
                  );
            if (!local_2() || local !== local_13.current) {
              return;
            }
            if (!local_882224b7(local_6, local.quote)) {
              local_15();
              local_14({
                step: "reviewRequired",
                error:
                  "Условия предыдущей оплаты изменились. Повторно платить не нужно.",
              });
              return;
            }
            local_22(local);
            if (
              !local_2() ||
              local !== local_13.current ||
              local_11.current.step !== "pending"
            ) {
              return;
            }
            local_14({
              agreementFresh: false,
            });
            const local_2 = await imported_7.getCheckoutState(local_3, local_5);
            if (!local_2() || local !== local_13.current) {
              return;
            }
            if (local_2.state === "succeeded") {
              local_20();
              return;
            }
            if (
              ["pending", "processing"].includes(local_2.state) &&
              local_2.attemptId === arg &&
              local_882224b7(local_6, local_2.quote)
            ) {
              local_14({
                state: local_2,
                agreementFresh: true,
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
              local_15();
              local_19();
              local_14({
                state: local_2,
                agreementFresh: true,
                attempt: null,
                step: "terms",
              });
            } else {
              local_15();
              local_14({
                state: local_2,
                agreementFresh: true,
                step: "reviewRequired",
              });
            }
          } catch {
            if (local_2() && local === local_13.current) {
              local_14({
                error: local_f485d0a6,
              });
            }
          } finally {
            local_7 = false;
          }
        }
      }
    };
    local_12.current = setInterval(() => {
      local_8();
    }, 2000);
    local_8();
  };
  async function fn(arg = false, arg_2 = null) {
    if (
      !local_5.current.open ||
      !local_5.current.eligible ||
      !local_5.current.ownerId ||
      local_7.current ||
      local_10.current
    ) {
      return;
    }
    const local = local_16();
    const local_2 = ++local_9.current;
    const local_3 = local_17();
    local_14({
      step: "resolving",
      error: null,
    });
    try {
      const local = await imported_7.getCheckoutState(local_3, local_18());
      if (!local() || local_2 !== local_9.current) {
        return;
      }
      const local_2 = local_11.current.months;
      const local_3 = local.offers.some((arg) => arg.months === local_2)
        ? local_2
        : (local.offers[0]?.months ?? local_2);
      local_14({
        state: local,
        months: local_3,
        attempt: null,
        error: arg_2,
        agreementFresh: true,
      });
      if (local.state === "succeeded") {
        local_20();
        return;
      }
      if (local.state === "pending" || local.state === "processing") {
        local_14({
          step: "pending",
        });
        local_23(local.attemptId);
        return;
      }
      if (
        local.state === "review_required" ||
        !local.canEditTerms ||
        !local.canStartNewAttempt
      ) {
        local_14({
          step: "reviewRequired",
        });
        return;
      }
      if (arg || local.state === "canceled" || local.state === "failed") {
        local_19();
      }
      local_14({
        step: arg ? "terms" : "overview",
      });
    } catch {
      if (local() && local_2 === local_9.current) {
        local_14({
          step: "resolving",
          error: local_f485d0a6,
        });
      }
    }
  }
  imported_6(() => {
    local_6.current = true;
    local_7.current = false;
    local_8.current++;
    local_9.current++;
    local_10.current = false;
    local_15();
    local_14(local_71fa640d(local));
    if (arg.open && arg.eligible && arg.ownerId) {
      fn();
    }
    return () => {
      local_8.current++;
      local_9.current++;
      local_7.current = true;
      local_15();
    };
  }, [
    arg.open,
    arg.eligible,
    arg.ownerId,
    arg.recipientId,
    arg.kind,
    arg.scopeKey,
  ]);
  imported_6(
    () => () => {
      local_6.current = false;
      local_7.current = true;
      local_15();
    },
    [],
  );
  const local_24 = () => {
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
  const local_25 = (arg, arg_2 = null) => {
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
  const local_26 = async () => {
    if (!local_21() || local_11.current.step !== "terms") {
      return;
    }
    const local = local_16();
    const local_2 = local_17();
    const local_3 = local_11.current.state;
    let local_4;
    try {
      local_4 = imported_8(
        local_3,
        local_2,
        local_18(),
        local_11.current.months,
        local_11.current.auto,
        local_5.current.methodId,
      );
    } catch {
      local_14({
        error: "Условия изменились. Повторите проверку оплаты.",
      });
      return;
    }
    local_10.current = true;
    local_9.current++;
    local_15();
    const local_5 = local_4.methodId ? null : local_24();
    local_14({
      step: "creating",
      error: null,
    });
    try {
      const local =
        local_2.kind === "gift"
          ? await imported_7.createGiftCheckout(local_4)
          : await imported_7.payCheckout(local_4, local_3.agreement);
      if (!local()) {
        local_5?.close();
        return;
      }
      local_10.current = false;
      local_22(local);
      if (
        local.paid ||
        ["canceled", "failed", "review_required"].includes(local.status)
      ) {
        local_5?.close();
      } else {
        if (local.confirmationUrl) {
          local_25(local.confirmationUrl, local_5);
        } else {
          local_5?.close();
        }
        local_23(local.id);
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
  const local_27 = async () => {
    const local = local_11.current.state;
    const local_2 = local_11.current.attempt?.id ?? local?.attemptId;
    if (
      local_10.current ||
      local_11.current.step !== "pending" ||
      !local?.canReleaseAttempt ||
      !local_2
    ) {
      return;
    }
    const local_3 = local_16();
    const local_4 = local_17();
    local_10.current = true;
    local_9.current++;
    local_15();
    local_14({
      step: "resolving",
      error: null,
    });
    try {
      const local = await imported_7.releaseCheckout(local_4, local_2);
      if (!local_3()) {
        return;
      }
      if (local.released) {
        local_19();
        local_14({
          attempt: null,
        });
      }
      local_10.current = false;
      await fn();
      const local_2 = local_11.current;
      if (local_3() && local_2.step === "overview") {
        local_14({
          step: "routes",
        });
      }
    } catch {
      if (local_3()) {
        local_19();
        local_10.current = false;
        await fn(false, "Не удалось обновить выбор. Проверьте статус оплаты.");
      }
    } finally {
      if (local_3()) {
        local_10.current = false;
      }
    }
  };
  const local_28 = async () => {
    if (!local_21() || local_11.current.step !== "routes") {
      return;
    }
    const local = local_16();
    const local_2 = local_17();
    const local_3 = local_24();
    let local_4 = false;
    local_10.current = true;
    local_9.current++;
    local_14({
      internationalBusy: true,
      error: null,
      unavailable: null,
    });
    try {
      const local = await imported_7.internationalCheckout(local_2, local_18());
      if (!local()) {
        local_3?.close();
        return;
      }
      if (local.mode === "informational") {
        local_3?.close();
        local_14({
          unavailable: "Оплата для других стран пока недоступна.",
          preview: local.handoffUrl,
        });
      } else {
        const local = document.createElement("form");
        const local_2 = document.createElement("input");
        if (local_3) {
          local_3.name = `itd-checkout-${crypto.randomUUID()}`;
        }
        local.method = "POST";
        local.action = local.handoff.url;
        local.target = local_3?.name || "_self";
        local_2.type = "hidden";
        local_2.name = "handoffTicket";
        local_2.value = local.handoff.fields.handoffTicket;
        local.appendChild(local_2);
        document.body.appendChild(local);
        try {
          local.submit();
        } finally {
          local_2.value = "";
          local.remove();
        }
        local_4 = true;
        local_14({
          step: "resolving",
        });
      }
    } catch {
      local_3?.close();
      if (local()) {
        local_4 = true;
        local_14({
          step: "resolving",
          unavailable:
            "Не удалось открыть оплату для других стран. Повторите проверку.",
        });
      }
    } finally {
      if (local()) {
        local_10.current = false;
        local_14({
          internationalBusy: false,
        });
        if (local_4) {
          fn();
        }
      }
    }
  };
  const local_29 = local_4.attempt?.quote ?? local_4.state?.quote ?? null;
  const local_30 = ["pending", "reviewRequired"].includes(local_4.step)
    ? local_29
    : (local_4.state?.offers.find((arg) => arg.months === local_4.months) ??
      null);
  const local_31 = local_4.state?.agreement;
  const local_32 = local_d7512db8(local_31?.nextChargeAt);
  const local_33 = local_31?.enabled
    ? `Автопродление подключено: ${new Intl.NumberFormat("ru-RU").format(local_31.renewalAmountMinor / 100)} ${local_31.renewalCurrency === "RUB" ? "₽" : "BYN"} каждый месяц${local_32 ? `, следующее списание ${local_32}` : " после окончания оплаченного срока"}. Напомним за 3 дня.`
    : null;
  return {
    panel: {
      kind: arg.kind,
      step: local_4.step,
      months: local_4.months,
      newAutoConsent: local_4.auto,
      canEditTerms: !!local_4.state?.canEditTerms,
      canStartNewAttempt: !!local_4.state?.canStartNewAttempt,
      canOfferAutoRenewal: !!local_31?.canOffer,
      agreement: {
        enabled: !!local_31?.enabled,
        requiresNewConsent: !!local_31?.requiresNewConsent,
        summary: local_33,
      },
      offers: local_4.state?.offers ?? [],
      quote: local_30,
      recipientName: arg.recipientName,
      error: local_4.error,
      internationalBusy: local_4.internationalBusy,
      internationalUnavailable: local_4.unavailable,
      canResume: !!(
        local_4.attempt?.confirmationUrl ?? local_4.state?.confirmationUrl
      ),
      actualExpiryLabel: local_d7512db8(local_4.state?.actualExpiresAt),
      canReselect:
        local_4.step === "pending" && local_4.state?.canReleaseAttempt === true,
      onReselect: local_27,
      providerLabel: local_29
        ? local_29.provider === "yookassa"
          ? "ЮKassa"
          : "bePaid"
        : null,
      pendingSummary: local_29
        ? arg.kind === "gift"
          ? "Разовый подарок, без автопродления."
          : `${local_29.autoRenewal ? `В этой оплате выбрано автопродление: ${new Intl.NumberFormat("ru-RU").format(local_29.renewalAmountMinor / 100)} ₽ каждый месяц.` : "В этой оплате автопродление не выбрано."} ${local_4.agreementFresh ? `Сейчас автопродление ${local_31?.enabled ? "включено" : "выключено"}.` : "Проверяем текущий статус автопродления."}`
        : null,
      onBegin: () => {
        if (local_21()) {
          local_14({
            step: "routes",
          });
        }
      },
      onRubles: () => {
        if (local_21()) {
          local_14({
            step: "terms",
            unavailable: null,
          });
        }
      },
      onBack: () => {
        if (local_21()) {
          local_14({
            step: local_4.step === "terms" ? "routes" : "overview",
            error: null,
          });
        }
      },
      onMonthsChange: (arg) => {
        if (
          local_21() &&
          local_11.current.step === "terms" &&
          local_11.current.state?.offers.some((arg) => arg.months === arg)
        ) {
          local_14({
            months: arg,
          });
        }
      },
      onNewAutoConsentChange: (arg) => {
        if (local_21() && !local_31?.enabled && local_31?.canOffer) {
          local_14({
            auto: arg,
          });
        }
      },
      onPay: local_26,
      onInternational: local_28,
      onResume: () => {
        if (local_11.current.step !== "pending") {
          return;
        }
        const local =
          local_11.current.attempt?.confirmationUrl ??
          local_11.current.state?.confirmationUrl;
        if (local) {
          local_25(local, local_24());
        }
      },
      onCheckStatus: () => {
        if (!local_10.current) {
          local_15();
          fn();
        }
      },
      onRetryRead: () => {
        fn();
      },
      ...(local_4.preview
        ? {
            onInternationalPreview: () => local_25(local_4.preview, local_24()),
          }
        : {}),
    },
    dismiss() {
      local_7.current = true;
      local_8.current++;
      local_9.current++;
      local_15();
      local_5.current.onClose();
    },
  };
}
function symbol_002(arg, arg_2) {
  const local = imported_5(null);
  imported_6(() => {
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
