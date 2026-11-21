# ITD frontend snapshot

- Build fingerprint: `abf6a53018b66b10b84c602a61b783d6e88ed747b42ebf0cd3f1899681c89c7c`
- Resources: 198
- Downloaded bytes: 20648970
- Sentry releases: none

## Routes

Route tables are independent. Within each table, routes are evaluated in priority order and the first match wins.

- Removed: table `entry.js#1` #1 `/legal`
- Removed: table `entry.js#1` #2 `/legal/:slug/history`
- Removed: table `entry.js#1` #3 `/legal/:slug/versions/:version`
- Removed: table `entry.js#1` #4 `/legal/:slug`
- Removed: table `entry.js#1` #5 `/`
- Removed: table `entry.js#1` #6 `/chats/new/:draftUserId`
- Removed: table `entry.js#1` #7 `/chats/:chatId?`
- Removed: table `entry.js#1` #8 `/notifications`
- Removed: table `entry.js#1` #9 `/login`
- Removed: table `entry.js#1` #10 `/register`
- Removed: table `entry.js#1` #11 `/forgot-password`
- Removed: table `entry.js#1` #12 `/reset-password`
- Removed: table `entry.js#1` #13 `/verify-email`
- Removed: table `entry.js#1` #14 `/terms`
- Removed: table `entry.js#1` #15 `/privacy`
- Removed: table `entry.js#1` #16 `/cookies`
- Removed: table `entry.js#1` #17 `/onboarding`
- Removed: table `entry.js#1` #18 `/search`
- Removed: table `entry.js#1` #19 `/shop/:rest*` (rest is a zero-or-more segment splat)
- Removed: table `entry.js#1` #20 `/event/alice-ai/:rest*` (rest is a zero-or-more segment splat)
- Removed: table `entry.js#1` #21 `/event/halloween/:rest*` (rest is a zero-or-more segment splat)
- Removed: table `entry.js#1` #22 `/hashtag/:name`
- Removed: table `entry.js#1` #23 `/external`
- Removed: table `entry.js#1` #24 `/support`
- Removed: table `entry.js#1` #25 `/delete-account`
- Removed: table `entry.js#1` #26 `/child-safety`
- Removed: table `entry.js#1` #27 `/event`
- Removed: table `entry.js#1` #28 `/verification`
- Removed: table `entry.js#1` #29 `/subscription-terms`
- Removed: table `entry.js#1` #30 `/recurring-terms`
- Removed: table `entry.js#1` #31 `/:username/post/:postId`
- Removed: table `entry.js#1` #32 `/:slug` → `/@:slug` (slug starts with "@")
- Removed: table `entry.js#1` #33 `*` (matches when no earlier route matched)

## HTTP endpoints

- Added: `/v2/checkout`
- Added: `https://api.nbrb.by/exrates/rates/USD`

## WebSocket endpoints

No changes.

## Storage keys

No changes.

## User-visible strings

- Added: `Другие способы оплаты`
- Added: `Загружаем цену…`
- Added: `Загружаем цены…`
- Added: `К текущей оплате`
- Added: `каждый месяц.`
- Added: `Не удалось загрузить проверку.`
- Added: `Не удалось открыть оплату`
- Added: `Не удалось открыть bePaid. Попробуйте ещё раз или выберите другой способ.`
- Added: `Не удалось проверить предыдущую попытку.`
- Added: `Не удалось продолжить оплату. Проверьте её статус.`
- Added: `Оплата не начиналась. Можно вернуться к выбору.`
- Added: `Оплата через bePaid без автопродления.`
- Added: `Оплата через bePaid сейчас недоступна.`
- Added: `Перейти к оплате`
- Added: `Подключить автопродление за`
- Added: `Публичная оферта`
- Added: `Сменить способ оплаты`
- Added: `Сумма в долларах ориентировочная.`
- Added: `Текущий счёт ещё открыт. После его закрытия можно будет выбрать способ оплаты.`
- Added: `Условия платного доступа ИТД НУКСТА`
- Added: `BYN в месяц.`
- Removed: `₽ каждый месяц.`
- Removed: `Не удалось открыть оплату для других стран. Повторите проверку.`
- Removed: `Оплата для других стран пока недоступна.`
- Removed: `Проверяем текущий статус автопродления.`
- Removed: `Условия платного доступа НУКСТА`
