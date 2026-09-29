# ITD frontend snapshot

- Build fingerprint: `a12fd83799f000a6a0f8deb253b9e4f72e7e17b5d9f005cb56b5cf0a404e5c3e`
- Resources: 153
- Downloaded bytes: 5392723
- Sentry releases: `1.1.2`

## Routes

Route tables are independent. Within each table, routes are evaluated in priority order and the first match wins.

- Added: table `entry.js#1` #14 `/event/alice-ai/:rest*` (rest is a zero-or-more segment splat)
- Changed `/hashtag/:name`: priority 14 → 15
- Changed `/external`: priority 15 → 16
- Changed `/support`: priority 16 → 17
- Changed `/delete-account`: priority 17 → 18
- Changed `/child-safety`: priority 18 → 19
- Changed `/event`: priority 19 → 20
- Changed `/verification`: priority 20 → 21
- Changed `/subscription-terms`: priority 21 → 22
- Changed `/recurring-terms`: priority 22 → 23
- Changed `/:username/post/:postId`: priority 23 → 24
- Changed `/:slug`: priority 24 → 25
- Changed `*`: priority 25 → 26

## HTTP endpoints

- Added: `/correctors/cancel`
- Added: `/correctors/inventory`
- Added: `/correctors/report`
- Added: `/files/avatar`
- Added: `/post-notebooks/inventory`
- Added: `/profile-avatar/`
- Added: `/red-pens/cancel`
- Added: `/red-pens/inventory`
- Added: `/red-pens/report`
- Added: `/v1/aliceai/balance`
- Added: `/v1/aliceai/inventory`
- Added: `/v1/aliceai/nicknames`
- Added: `/v1/aliceai/nicknames/active`
- Added: `/v1/aliceai/profiles/`
- Added: `/v1/aliceai/shop`
- Added: `/v1/aliceai/waste-paper/posts/`
- Added: `/v1/event/status`
- Removed: `/captcha/provider`
- Removed: `/qr/claim`
- Removed: `/qr/start`
- Removed: `/qr/stream`

## WebSocket endpoints

No changes.

## Storage keys

No changes.

## User-visible strings

- Added: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="28" viewBox="0 0 120 28" preserveAspectRatio="none"><path d="`
- Added: `600 14px EventCaveat`
- Added: `600 22px EventCaveat`
- Added: `Аватарка`
- Added: `Аватарка удалена`
- Added: `Аура аккаунта`
- Added: `Аура аккаунта:`
- Added: `Без кликухи`
- Added: `Будет использован один ластик. Наклейка исчезнет после третьего стирания.`
- Added: `В ваш профиль подкинули подушку-пердушку!`
- Added: `в клетку`
- Added: `В клетку`
- Added: `в линейку`
- Added: `В линейку`
- Added: `В профиле снова появится ваш эмодзи. Потраченное право установки не вернётся.`
- Added: `В рюкзаке пока нет подходящих предметов.`
- Added: `В рюкзаке:`
- Added: `В этот профиль подкинули подушку-пердушку!`
- Added: `Введите другое слово`
- Added: `Введите одно слово без пробелов`
- Added: `Вернуться назад`
- Added: `Взносы сейчас на паузе. Мелки не списаны`
- Added: `Водный шарик`
- Added: `все`
- Added: `Вы уже закрасили этот фрагмент`
- Added: `Вы уже исправили`
- Added: `Выберите место для предмета`
- Added: `Выберите место для предмета.`
- Added: `Выберите наклейку для стирания`
- Added: `Выберите наклейку и подтвердите стирание`
- Added: `Выберите от 1 до 10 символов без учёта пробелов`
- Added: `Выберите, на чью правку пожаловаться.`
- Added: `Выбор клетки или линейки`
- Added: `Выбрать наклейку для стирания`
- Added: `Выделите весь закрашенный фрагмент`
- Added: `Выделите всё исправленное слово`
- Added: `Выделите одно слово без пробелов`
- Added: `Выделите слово целиком`
- Added: `Гости увидят полотно вместо профиля`
- Added: `Дежурный`
- Added: `Действия с корректором`
- Added: `Действия с правкой`
- Added: `До 10 символов за одно применение`
- Added: `Жалоба отправлена`
- Added: `Загрузка настроек…`
- Added: `Загрузка…`
- Added: `Задёрнуть шторы`
- Added: `Закрасить · 1 корректор`
- Added: `Закрасить текст`
- Added: `закрыт шторами`
- Added: `запустил школьный звонок!`
- Added: `Золотом после имени в профиле`
- Added: `Ивент «Алиса AI»`
- Added: `Ивент завершён`
- Added: `Ивент уже завершён. Пост сохранён в черновике и не был опубликован.`
- Added: `из 100,`
- Added: `Использовать на этом профиле`
- Added: `Исправить`
- Added: `Исправления временно недоступны`
- Added: `Исправлено красной ручкой`
- Added: `Исправлено:`
- Added: `Как работает сбор на шторы`
- Added: `Кинуть шарик`
- Added: `Кликуха`
- Added: `Кликуха выбрана`
- Added: `Кликуха снята`
- Added: `Когда вся сумма собрана, владелец профиля сможет открывать и закрывать шторы в настройках ивента.`
- Added: `Корректор`
- Added: `Корректором можно замазать часть текста в чужом посте. Точные ограничения и цену увидишь в карточке, когда товар вернётся в магазин.`
- Added: `Красная ручка`
- Added: `Красной ручкой можно исправить слова в чужом посте. Точные ограничения и цену увидишь в карточке, когда товар вернётся в магазин.`
- Added: `Купить`
- Added: `Купить в магазине`
- Added: `мелков`
- Added: `мелков — не хватает`
- Added: `Мерцает`
- Added: `Место броска шарика`
- Added: `Место для подушки`
- Added: `Можно помочь`
- Added: `Можно скинуться`
- Added: `Можно удалить свои правки или пожаловаться на чужие.`
- Added: `На шторы нужно 100 мелков. Их можно собрать самому или вместе с друзьями — в своём профиле или у друга.`
- Added: `На этом посте вы уже использовали 3 корректора`
- Added: `На этом профиле пока нет наклеек.`
- Added: `На этом профиле уже есть подушка. Попробуйте после окончания суток.`
- Added: `Наклейка`
- Added: `Наклейка потёрта`
- Added: `Наклейка размещена`
- Added: `Наклейка стёрта`
- Added: `Наклейки размещаются на баннере. Шарики можно кинуть в шапку или пост чужого профиля — след остаётся на 48 часов.`
- Added: `Не больше`
- Added: `Не получилось сдать пост. Попробуй ещё раз`
- Added: `Не удалось безопасно повторить публикацию. Обновите страницу и попробуйте снова.`
- Added: `Не удалось загрузить наклейки профиля.`
- Added: `Не удалось загрузить настройки ивента.`
- Added: `Не удалось загрузить рюкзак.`
- Added: `Не удалось изменить положение штор`
- Added: `Не удалось найти место в профиле для предмета.`
- Added: `Не удалось опубликовать пост. Попробуйте ещё раз.`
- Added: `Не удалось открыть шторы. Попробуйте ещё раз.`
- Removed: `" shape-rendering="geometricPrecision"><rect width="`
- Removed: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0`
- Removed: `Аккаунт заблокирован`
- Removed: `Входим…`
- Removed: `Готовим код`
- Removed: `Загрузка проверки`
- Removed: `или QR-код`
- Removed: `Код ещё не отсканирован`
- Removed: `Код запрошен в другой вкладке`
- Removed: `Код устарел`
- Removed: `Не удалось показать код`
- Removed: `Обновить код`
- Removed: `Отсканируйте код в приложении ИТД`
- Removed: `По этому коду уже вошли`
- Removed: `Подтвердите вход на телефоне`
- Removed: `Проверка`
- Removed: `Проверка не пройдена, попробуйте ещё раз`
- Removed: `Пройдите проверку`
- Removed: `Пройти проверку`
- Removed: `Слишком много попыток, подождите немного`
- Removed: `Строка не помещается в QR`
- Removed: `QR-код для входа`
- Additional changes omitted from this summary.
