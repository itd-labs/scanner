// FileBox для веба: Service Worker, кэширующий файлы мессенджера кусками —
// ШИФРОВАННЫМИ (паритет с chatCache: сообщения шифруются, файлы тоже).
//
// Порт идеи iOS FileBox + VideoPartialStore: ключ кэша — вечный fileId, а не
// capability-ссылка (TTL ~15 мин, токен в query меняется при каждом
// перевыпуске — HTTP-кэш браузера из-за этого бесполезен). SW перехватывает
// GET'ы к /v1/chat-files/<fileId> с любого origin'а и отвечает сам:
//
//   • раскладка в Cache Storage (имя itd-filebox-v2), всё едино чанками:
//       /__filebox/<fileId>/<variant>/meta      — sealed JSON {total, mime}
//       /__filebox/<fileId>/<variant>/chunk/<n> — IV(12) ‖ AES-GCM(кусок CHUNK байт)
//     variant: 'main' | 'thumb-<size>' (у ?size=m свой capability и свой блоб).
//     total и границы чанков — размеры ОТКРЫТОГО текста; на диске тело чанка
//     на 28 байт длиннее (IV + GCM-тег).
//   • Шифрование — ключом chatCache (non-extractable AES-GCM-256 из IDB
//     itd-chatcache-key): логаут ротирует ключ → crypto-erase накрывает и
//     файлы; уцелевший шифротекст расшифровке не подлежит и трактуется как
//     cache-miss. AAD — путь записи (fileId/variant/n): чанк нельзя
//     переложить в чужую позицию. Нет ключа (не логинились) — SW работает
//     сквозняком, без кэша. Раскладку и крипто зеркалит lib/fileBox.ts
//     (страница читает бокс напрямую по fileId и seed'ит свои аплоады) —
//     менять синхронно.
//   • Range-запрос плеера: что есть — отдаём 206 из кэша; на первом промахе
//     открываем ОДИН сетевой Range с начала недостающего чанка и write-through
//     пишем куски в кэш, параллельно отдавая байты клиенту. Просмотренная
//     половина видео = закэшированная половина; повторный просмотр и seek в
//     просмотренное — с диска, без сети.
//   • Сетевой запрос всегда выровнен на границу чанка и добит до конца
//     последнего затронутого чанка — каждый скачанный байт ложится в кэш.
//   • Суффиксный Range (bytes=-N, шлёт Safari) download-service не умеет
//     (416) — конвертируем в абсолютный по известному total. SW тем самым
//     ещё и чинит этот кейс.
//   • Мету узнаём пробой `Range: bytes=0-0`: 206 → total из Content-Range;
//     200 (thumb-путь сервера Range игнорирует) → тело уже целиком у нас,
//     кладём в кэш сразу.
//   • Любой сбой ДО начала стриминга (нет CORS, сеть, 403 протухшего
//     токена) — прозрачный passthrough fetch(оригинальный запрос): хуже, чем
//     без SW, не бывает.
//
// LRU: SW батчит touch'и fileId в IndexedDB (itd-filebox/touch), чистку по
// лимиту делает страница (см. modules/messenger/lib/fileBoxMaintenance.ts).

const clientScopes = new Map()
self.addEventListener('message', (event) => {
  if (event.data?.type !== 'itd-filebox-scope' || !event.source?.id) return
  const old = clientScopes.get(event.source.id)
  if (old) old.active = false
  clientScopes.delete(event.source.id)
  const ns = event.data.namespace
  if (typeof ns === 'string' && ns.length <= 180 && /^[a-zA-Z0-9%:_-]+$/.test(ns)) {
    clientScopes.set(event.source.id, { namespace: ns, active: true })
  }
})
const CHUNK = 1024 * 1024

// Дебаг диска: логи «сколько файла лежит локально» при отдаче и по мере
// кэширования чанков. ВЫКЛЮЧЕН: countCachedChunks на каждую отдачу/чанк —
// это O(n²) cache.match по файлу (100-МиБ видео ≈ 10 000 match'ей).
const DEBUG_FILEBOX = false

function dbg(...args) {
  if (DEBUG_FILEBOX) console.log('[FileBox]', ...args)
}

const totalChunksOf = (meta) => Math.max(1, Math.ceil(meta.total / CHUNK))

async function countCachedChunks(cache, file, meta) {
  const total = totalChunksOf(meta)
  let cached = 0
  for (let i = 0; i < total; i++) {
    if (await cache.match(chunkKey(file, i))) cached++
  }
  return { cached, total }
}

self.addEventListener('install', () => { self.skipWaiting() })
self.addEventListener('activate', (event) => {
  event.waitUntil(Promise.all([
    self.clients.claim(),
    // v1 хранил байты открытыми — сносим целиком, файлы перекачаются по мере
    // просмотра уже в шифрованную раскладку.
    caches.delete('itd-filebox-v1'),
  ]))
})

// ── Ключ шифрования (общий с chatCache, см. chatCache/crypto.ts) ─────────────

const KEY_DB = 'itd-chatcache-key'
const KEY_STORE = 'keys'
const KEY_ID = 'db-key-v1'

function getKey(namespace) {
  return new Promise((resolve) => {
    let open
    try { open = indexedDB.open(`${KEY_DB}:${encodeURIComponent(namespace)}`, 1) } catch { resolve(null); return }
    open.onupgradeneeded = () => {
      try { open.result.createObjectStore(KEY_STORE) } catch {}
    }
    open.onerror = () => resolve(null)
    open.onsuccess = () => {
      const db = open.result
      try {
        const get = db.transaction(KEY_STORE, 'readonly').objectStore(KEY_STORE).get(KEY_ID)
        get.onsuccess = () => {
          db.close()
          resolve(get.result || null)
        }
        get.onerror = () => { db.close(); resolve(null) }
      } catch { db.close(); resolve(null) }
    }
  })
}

const te = new TextEncoder()

async function sealBytes(key, aad, bytes) {
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const ct = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv, additionalData: te.encode(aad) },
    key,
    bytes,
  )
  const out = new Uint8Array(12 + ct.byteLength)
  out.set(iv, 0)
  out.set(new Uint8Array(ct), 12)
  return out
}

async function openBytes(key, aad, buf) {
  try {
    const bytes = new Uint8Array(buf)
    const pt = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: bytes.slice(0, 12), additionalData: te.encode(aad) },
      key,
      bytes.slice(12),
    )
    return new Uint8Array(pt)
  } catch {
    // Чужой ключ (ротация на логауте) / порча — miss; ключ перечитаем.
    return null
  }
}

// ── Раскладка ключей ─────────────────────────────────────────────────────────

function parseChatFileUrl(url) {
  const m = url.pathname.match(/^\/v1\/chat-files\/([^/]+)$/)
  if (!m) return null
  const size = url.searchParams.get('size') || ''
  return { fileId: m[1], variant: size ? `thumb-${size}` : 'main' }
}

const metaKey = (f) => `/__filebox/${f.fileId}/${f.variant}/meta`
const chunkKey = (f, n) => `/__filebox/${f.fileId}/${f.variant}/chunk/${n}`
const chunkSize = (idx, total) => Math.min(CHUNK, total - idx * CHUNK)

// ── Fetch ────────────────────────────────────────────────────────────────────

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.method !== 'GET') return
  let url
  try { url = new URL(req.url) } catch { return }
  const file = parseChatFileUrl(url)
  if (!file) return
  const scope = clientScopes.get(event.clientId)
  if (!scope?.active) {
    // A browser may terminate/restart a worker without controllerchange. Ask
    // this exact page to rebind; this request remains network-only until then.
    event.waitUntil(Promise.resolve(self.clients?.get(event.clientId)).then((client) => {
      client?.postMessage({ type: 'itd-filebox-scope-request' })
    }).catch(() => {}))
    return
  }
  event.respondWith(serve(event, req, url, file, scope).catch((error) => {
    if (!scope.active) return Response.error()
    return fetch(req)
  }))
})

async function serve(event, req, url, file, scope) {
  const assertActive = () => { if (!scope.active) throw new Error('Session revoked') }
  assertActive()
  // Нет ключа (не логинились / ключ ротирован и новый ещё не сгенерён
  // страницей) — работаем сквозняком, без кэша.
  const key = await getKey(scope.namespace)
  assertActive()
  if (!key) return fetch(req)
  const rawCache = await caches.open(`itd-filebox:${scope.namespace}`)
  const cache = {}
  for (const method of ['match', 'put', 'delete']) cache[method] = async (...args) => {
    assertActive()
    const value = await rawCache[method](...args)
    assertActive()
    return value
  }
  touch(file.fileId)

  let meta = await readMeta(cache, file, key)
  if (!meta) meta = await establishMeta(cache, file, url, key, !!req.headers.get('range'), req.signal)
  if (meta.total === 0) return new Response(null, { status: 200, headers: { 'content-type': meta.mime } })

  const r = parseRangeHeader(req.headers.get('range'))
  if (r && r.invalid) return fetch(req) // multi-range и прочая экзотика — мимо кэша

  let start, end
  const partial = r !== null
  if (!r) { start = 0; end = meta.total - 1 }
  else if (r.suffix !== undefined) { start = Math.max(0, meta.total - r.suffix); end = meta.total - 1 }
  else { start = r.start; end = r.end === null ? meta.total - 1 : Math.min(r.end, meta.total - 1) }

  if (start >= meta.total || start > end) {
    return new Response(null, { status: 416, headers: { 'content-range': `bytes */${meta.total}` } })
  }

  const headers = {
    'content-type': meta.mime,
    'accept-ranges': 'bytes',
    'cache-control': 'private, no-store',
    'content-length': String(end - start + 1),
  }
  if (partial) headers['content-range'] = `bytes ${start}-${end}/${meta.total}`
  if (DEBUG_FILEBOX) {
    const { cached, total } = await countCachedChunks(cache, file, meta)
    dbg(`${file.fileId}/${file.variant}: отдача ${partial ? `Range ${start}-${end}` : 'целиком'} из ${(meta.total / 1048576).toFixed(1)}MiB; локально ${cached}/${total} чанков (${Math.round((cached / total) * 100)}%)${cached < total ? ' — остальное докачаю сетью' : ' — сеть не нужна'}`)
  }
  return new Response(buildStream(event, cache, file, meta, start, end, url.href, key, assertActive), {
    status: partial ? 206 : 200,
    headers,
  })
}

// ── Мета (total + mime) ──────────────────────────────────────────────────────

async function readMeta(cache, file, key) {
  const resp = await cache.match(metaKey(file))
  if (!resp) return null
  const pt = await openBytes(key, metaKey(file), await resp.arrayBuffer())
  if (!pt) return null
  try { return JSON.parse(new TextDecoder().decode(pt)) } catch { return null }
}

async function writeMeta(cache, file, meta, key) {
  const sealed = await sealBytes(key, metaKey(file), te.encode(JSON.stringify(meta)))
  await cache.put(metaKey(file), new Response(sealed, { headers: { 'x-bytes': '0' } }))
}

async function establishMeta(cache, file, url, key, wantsRange, clientSignal) {
  // Клиент без Range (картинки) качает файл целиком — проба bytes=0-0 дала
  // бы второй последовательный RTT. Один полный GET: тело сразу по чанкам.
  // Range-клиенты (видео-плеер) — прежняя проба за total. Сигнал клиента
  // пробрасываем upstream: страница отменила интерес (закрыт вьюер) —
  // обрываем и НАШ сетевой запрос, а не докачиваем весь файл впустую.
  const probe = await fetch(url.href, {
    mode: 'cors',
    ...(wantsRange ? { headers: { Range: 'bytes=0-0' } } : {}),
    ...(clientSignal ? { signal: clientSignal } : {}),
  })
  // SPA-фолбэк/страница ошибки вместо файла (например, относительный url
  // ушёл в dev-сервер) — не кэшируем HTML под видом байтов файла.
  const probeCt = probe.headers.get('content-type') || ''
  if (probeCt.includes('text/html')) throw new Error('html instead of file')
  if (probe.status === 206) {
    const total = Number((probe.headers.get('content-range') || '').split('/').pop())
    try { probe.body && probe.body.cancel() } catch {}
    if (!Number.isFinite(total) || total < 0) throw new Error('bad content-range')
    const meta = { total, mime: probe.headers.get('content-type') || 'application/octet-stream' }
    await writeMeta(cache, file, meta, key)
    return meta
  }
  if (probe.status === 200) {
    // Сервер отдал файл целиком (thumb-путь Range не поддерживает) —
    // раскладываем тело по чанкам (шифрованным) прямо сейчас, дальше всё
    // пойдёт из кэша.
    const blob = await probe.blob()
    const meta = { total: blob.size, mime: probe.headers.get('content-type') || 'application/octet-stream' }
    for (let i = 0; i * CHUNK < blob.size; i++) {
      const part = new Uint8Array(await blob.slice(i * CHUNK, Math.min((i + 1) * CHUNK, blob.size)).arrayBuffer())
      const sealed = await sealBytes(key, chunkKey(file, i), part)
      await cache.put(chunkKey(file, i), new Response(sealed, { headers: { 'x-bytes': String(sealed.byteLength) } }))
    }
    await writeMeta(cache, file, meta, key)
    return meta
  }
  throw new Error('probe status ' + probe.status)
}

// ── Range ────────────────────────────────────────────────────────────────────

// null → заголовка нет (полный файл); {invalid} → отдать сети как есть;
// {suffix: N} → последние N байт; {start, end|null} → обычный диапазон.
function parseRangeHeader(h) {
  if (!h) return null
  const m = /^bytes=(\d*)-(\d*)$/.exec(h.trim())
  if (!m || (!m[1] && !m[2])) return { invalid: true }
  if (!m[1]) return { suffix: Number(m[2]) }
  return { start: Number(m[1]), end: m[2] ? Number(m[2]) : null }
}

// ── Стрим: кэш-чанки + сетевой добор с write-through ─────────────────────────

function buildStream(event, cache, file, meta, start, end, netHref, key, assertActive) {
  // Сетевой добор добиваем до конца последнего затронутого чанка: лишних
  // максимум CHUNK-1 байт, зато хвостовой чанк ложится в кэш целым.
  const netEnd = Math.min((Math.floor(end / CHUNK) + 1) * CHUNK - 1, meta.total - 1)
  let pos = start   // следующий байт, который ждёт клиент
  let net = null    // { reader, at } — открытый сетевой стрим (at = позиция в файле)
  let acc = null    // { idx, bufs, size } — аккумулятор текущего чанка для кэша

  const persistIfComplete = async () => {
    if (!acc || acc.size < chunkSize(acc.idx, meta.total)) return
    // Чанк собран целиком (открытые байты) — шифруем и кладём на диск.
    const plain = new Uint8Array(acc.size)
    let o = 0
    for (const b of acc.bufs) { plain.set(b, o); o += b.length }
    const idx = acc.idx
    const sealed = await sealBytes(key, chunkKey(file, idx), plain)
    await cache.put(chunkKey(file, idx), new Response(sealed, { headers: { 'x-bytes': String(sealed.byteLength) } }))
    if (DEBUG_FILEBOX) {
      const { cached, total } = await countCachedChunks(cache, file, meta)
      dbg(`${file.fileId}/${file.variant}: чанк ${idx + 1}/${total} → диск; локально ${cached}/${total} (${Math.round((cached / total) * 100)}%)`)
    }
    acc = null
  }

  // Сетевые байты в аккумулятор чанков. Сетевой запрос всегда начат с границы
  // чанка при пустом acc — выравнивание держится само.
  const feed = async (bytes, atPos) => {
    let off = 0
    while (off < bytes.length) {
      const idx = Math.floor((atPos + off) / CHUNK)
      if (!acc) acc = { idx, bufs: [], size: 0 }
      const take = Math.min(chunkSize(acc.idx, meta.total) - acc.size, bytes.length - off)
      acc.bufs.push(bytes.subarray(off, off + take))
      acc.size += take
      off += take
      await persistIfComplete()
    }
  }

  // Клиенту всё отдано, а хвост последнего чанка ещё в сети — дочитываем его
  // в кэш после close(). Ограничено CHUNK байтами, waitUntil держит SW живым.
  const drain = async (n) => {
    try {
      while (true) {
        const { done, value } = await n.reader.read()
        if (done) break
        await feed(value, n.at)
        n.at += value.length
      }
    } catch {}
  }

  return new ReadableStream({
    async pull(controller) {
      try {
        assertActive()
        while (true) {
          if (pos > end) {
            controller.close()
            if (net) { const n = net; net = null; event.waitUntil(drain(n)) }
            return
          }

          if (net) {
            const { done, value } = await net.reader.read()
            if (done) {
              net = null
              // Сеть кончилась раньше обещанного — обрыв; плеер переретраит.
              controller.error(new Error('upstream truncated'))
              return
            }
            const atPos = net.at
            net.at += value.length
            await feed(value, atPos)
            // Клиенту — пересечение пришедшего куска с [pos..end].
            const from = Math.max(pos, atPos)
            const to = Math.min(end + 1, net.at)
            if (to > from) {
              assertActive()
              controller.enqueue(value.subarray(from - atPos, to - atPos))
              pos = to
              return // отдали данные — следующий шаг по следующему pull
            }
            continue // выравнивающий пропуск головы чанка
          }

          const idx = Math.floor(pos / CHUNK)
          const cached = await cache.match(chunkKey(file, idx))
          if (cached) {
            const buf = await openBytes(key, chunkKey(file, idx), await cached.arrayBuffer())
            const offIn = pos - idx * CHUNK
            const takeEnd = buf ? Math.min(buf.length, offIn + (end - pos + 1)) : 0
            if (!buf || takeEnd <= offIn) {
              // Не расшифровался (ротация ключа) / битый / короткий —
              // выбрасываем и идём в сеть.
              await cache.delete(chunkKey(file, idx))
              continue
            }
            assertActive()
            controller.enqueue(buf.subarray(offIn, takeEnd))
            pos += takeEnd - offIn
            if (pos > end) controller.close()
            return
          }

          // Промах — один сетевой Range с начала недостающего чанка до netEnd.
          const alignedStart = idx * CHUNK
          dbg(`${file.fileId}/${file.variant}: чанка ${idx + 1} нет локально — сеть Range ${alignedStart}-${netEnd}`)
          const resp = await fetch(netHref, {
            headers: { Range: `bytes=${alignedStart}-${netEnd}` },
            mode: 'cors',
          })
          if (resp.status !== 206 && resp.status !== 200) throw new Error('upstream ' + resp.status)
          net = { reader: resp.body.getReader(), at: resp.status === 200 ? 0 : alignedStart }
          acc = null
        }
      } catch (err) {
        if (net) { try { net.reader.cancel() } catch {} ; net = null }
        controller.error(err)
      }
    },
    cancel() {
      // Плеер остановился/сикнул — глушим сетевой стрим, скачанные чанки уже в кэше.
      if (net) { try { net.reader.cancel() } catch {} ; net = null }
    },
  })
}

// ── LRU touch (батч в IndexedDB, как FileBox.touch с таймером ~10с) ──────────

const pendingTouches = new Map()
let touchTimer = null

function touch(fileId) {
  pendingTouches.set(fileId, Date.now())
  if (touchTimer) return
  touchTimer = setTimeout(flushTouches, 10_000)
}

function flushTouches() {
  touchTimer = null
  const entries = [...pendingTouches]
  pendingTouches.clear()
  const open = indexedDB.open('itd-filebox', 1)
  open.onupgradeneeded = () => { open.result.createObjectStore('touch') }
  open.onsuccess = () => {
    const db = open.result
    try {
      const tx = db.transaction('touch', 'readwrite')
      const store = tx.objectStore('touch')
      for (const [fileId, ts] of entries) store.put(ts, fileId)
      tx.oncomplete = () => db.close()
      tx.onerror = () => db.close()
    } catch { db.close() }
  }
}

// Retire the removed public-shell experiment; encrypted attachments stay intact.
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 for(const name of await caches.keys())if(name.startsWith('itd-public-shell-'))await caches.delete(name);
})()));
