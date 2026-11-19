const local_0373ff9a = (
  arg,
  arg_2 = local_0373ff9a,
  arg_3 = arg_2.f || (arg_2.f = ["../entry.js", "../entry.css"]),
) => arg.map((arg) => arg_3[arg]);
import {
  symbol_143 as imported,
  symbol_139 as imported_2,
  symbol_027 as imported_3,
  symbol_144 as imported_4,
  symbol_145 as imported_5,
} from "../entry.js";
class clazz_42182037 {
  active = 0;
  pending = [];
  limit;
  constructor(arg = 2) {
    this.limit = arg;
  }
  async run(arg, arg_2) {
    if (arg_2?.aborted) {
      throw new DOMException("Upload cancelled", "AbortError");
    }
    await new Promise((arg, arg_2) => {
      const local = () => {
        arg_2?.removeEventListener("abort", local_2);
        this.active++;
        arg();
      };
      const local_2 = () => {
        this.pending = this.pending.filter((arg) => arg !== local);
        arg_2(new DOMException("Upload cancelled", "AbortError"));
      };
      if (this.active < this.limit) {
        local();
      } else {
        this.pending.push(local);
        arg_2?.addEventListener("abort", local_2, {
          once: true,
        });
      }
    });
    try {
      if (arg_2?.aborted) {
        throw new DOMException("Upload cancelled", "AbortError");
      }
      return await arg();
    } finally {
      this.active--;
      this.pending.shift()?.();
    }
  }
}
const local_a1e12a9e = new clazz_42182037();
let local_f06debfc = 0;
async function fn_3d88f25a(arg, arg_2, arg_3) {
  if (arg && typeof navigator !== "undefined" && navigator.locks) {
    const local = local_f06debfc++ % 2;
    return navigator.locks.request(
      `itd:upload:${arg}:part:${local}`,
      {
        mode: "exclusive",
        signal: arg_3,
      },
      async () => {
        if (arg_3?.aborted) {
          throw new DOMException("Upload cancelled", "AbortError");
        }
        return arg_2();
      },
    );
  }
  return local_a1e12a9e.run(arg_2, arg_3);
}
function fn_c2779278(arg, arg_2) {
  if (arg_2?.aborted) {
    return Promise.reject(new DOMException("Upload cancelled", "AbortError"));
  }
  return new Promise((arg, arg_2) => {
    const local = setTimeout(() => {
      arg_2?.removeEventListener("abort", local_2);
      arg();
    }, arg);
    const local_2 = () => {
      clearTimeout(local);
      arg_2?.removeEventListener("abort", local_2);
      arg_2(new DOMException("Upload cancelled", "AbortError"));
    };
    arg_2?.addEventListener("abort", local_2, {
      once: true,
    });
  });
}
async function fn_3ce48313(arg, arg_2) {
  const local = performance.now();
  let local_2 = 0;
  let local_3 = 0;
  while (true) {
    if (arg_2?.aborted) {
      throw new DOMException("Upload cancelled", "AbortError");
    }
    try {
      return await arg();
    } catch (error) {
      if (
        arg_2?.aborted ||
        (error instanceof Error && error.name === "AbortError")
      ) {
        throw error;
      }
      const local = error;
      if (local.status === 503 && local.code === "UPLOAD_BUSY") {
        if (performance.now() - local >= 120000 || ++local_3 > 30) {
          throw error;
        }
        await fn_c2779278(
          Math.min(1000 * 2 ** Math.min(local_3 - 1, 3), 5000),
          arg_2,
        );
        continue;
      }
      if (
        !(
          (typeof local.status === "number" &&
            local.status >= 500 &&
            local.status <= 599) ||
          ((local.status === undefined || local.status === 0) &&
            error instanceof TypeError)
        ) ||
        ++local_2 >= 3
      ) {
        throw error;
      }
      await fn_c2779278(500 * 3 ** (local_2 - 1), arg_2);
    }
  }
}
async function fn_e445020f(arg, arg_2, arg_3) {
  if (arg_2.toLowerCase() === "image/gif") {
    return false;
  }
  try {
    const local = await arg.slice(0, 6).text();
    if (local === "GIF87a" || local === "GIF89a") {
      return false;
    }
    return arg_3 === arg.size + (Math.floor(arg.size / (1024 * 1024)) + 1) * 16;
  } catch {
    return false;
  }
}
function fn_b67d4b40(...arg) {}
export const local_f105ae8a = 2 * 1024 * 1024 * 1024;
export const local_4cc8ec46 = 5 * 1024 * 1024;
export const local_f06debfc_2 = 2;
async function fn_afac2454(arg) {
  try {
    const local = await createImageBitmap(arg);
    const local_2 = {
      width: local.width,
      height: local.height,
    };
    local.close();
    return local_2;
  } catch {
    return null;
  }
}
async function fn_5e5096dc(arg, arg_2, arg_3, arg_4) {
  const local = Date.now();
  const local_2 = await imported_4(
    `${imported_5}/media/upload/${arg}/part/${arg_2}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: arg_3,
      signal: arg_4,
    },
  );
  fn_b67d4b40(`часть ${arg_2}: ${local_2.status}`, {
    bytes: arg_3.byteLength,
    ms: Date.now() - local,
  });
  if (!local_2.ok) {
    let local = `part ${arg_2} failed: ${local_2.status}`;
    let local_2;
    try {
      const local = await local_2.json();
      if (typeof local.error === "object") {
        local_2 = local.error?.code;
      }
      const local_2 =
        typeof local.error === "object" ? local.error?.message : local.error;
      if (local_2) {
        local = local_2;
      }
    } catch {}
    const local_3 = new Error(local);
    local_3.status = local_2.status;
    local_3.code = local_2;
    throw local_3;
  }
}
export async function fn_e3a6bef0(arg, arg_2) {
  const local = imported_3();
  const local_2 = arg_2.mime || "application/octet-stream";
  if (arg.size > local_f105ae8a) {
    throw new Error(`file too large: ${arg.size}`);
  }
  if (arg.size === 0) {
    throw new Error("empty file");
  }
  const local_3 = Math.max(1, Math.ceil(arg.size / local_4cc8ec46));
  const local_4 = Date.now();
  fn_b67d4b40("старт", {
    name: arg.name,
    bytes: arg.size,
    mime: local_2,
    totalParts: local_3,
  });
  const { uploadId: local_5 } = await fn_3ce48313(
    () =>
      imported.post(
        "/media/upload/init",
        {
          mime: local_2,
          size: arg.size,
          totalParts: local_3,
        },
        {
          signal: arg_2.signal,
          skipErrorToast: true,
        },
      ),
    arg_2.signal,
  );
  const local_6 =
    arg_2.width && arg_2.height
      ? {
          width: arg_2.width,
          height: arg_2.height,
        }
      : local_2.startsWith("image/")
        ? await fn_afac2454(arg)
        : null;
  let local_7 = 0;
  let local_8 = 0;
  let local_9 = null;
  const local_10 = async () => {
    for (
      let local = local_8++;
      local < local_3 && local_9 === null;
      local = local_8++
    ) {
      const local = local * local_4cc8ec46;
      const local_2 = Math.min(local + local_4cc8ec46, arg.size);
      const local_3 = await arg.slice(local, local_2).arrayBuffer();
      try {
        await fn_3d88f25a(
          local?.namespace.split(":")[0],
          () =>
            fn_3ce48313(
              () => fn_5e5096dc(local_5, local, local_3, arg_2.signal),
              arg_2.signal,
            ),
          arg_2.signal,
        );
      } catch (error) {
        local_9 = error;
        fn_b67d4b40(`ЧАСТЬ ${local} ПРОВАЛЕНА окончательно`, {
          status: error?.status ?? "(нет — транспорт)",
          reason: String(error?.message ?? error),
          uploadedBytes: local_7,
          ofBytes: arg.size,
        });
        throw error;
      }
      local_7 += local_3.byteLength;
      arg_2.onProgress?.(local_7, arg.size);
    }
  };
  const local_11 = (
    await Promise.allSettled(
      Array.from(
        {
          length: Math.min(local_f06debfc_2, local_3),
        },
        local_10,
      ),
    )
  ).find((arg) => arg.status === "rejected");
  if (local_11) {
    fn_b67d4b40("АПЛОАД ПРОВАЛЕН на этапе частей", {
      uploadId: local_5,
      uploadedBytes: local_7,
      ofBytes: arg.size,
      elapsedMs: Date.now() - local_4,
    });
    throw local_11.reason;
  }
  const local_12 = await fn_3ce48313(
    () =>
      imported.post(
        `/media/upload/${local_5}/finalize`,
        {
          ...(arg_2.filename != null
            ? {
                filename: arg_2.filename,
              }
            : {}),
          ...(local_6 ?? {}),
          ...(arg_2.durationMs !== undefined
            ? {
                durationMs: arg_2.durationMs,
              }
            : {}),
          ...(arg_2.waveform
            ? {
                waveform: arg_2.waveform,
              }
            : {}),
          ...(arg_2.thumbhash
            ? {
                thumbhash: arg_2.thumbhash,
              }
            : {}),
          ...(arg_2.thumb
            ? {
                thumb: arg_2.thumb,
              }
            : {}),
        },
        {
          signal: arg_2.signal,
          skipErrorToast: true,
        },
      ),
    arg_2.signal,
  );
  fn_b67d4b40("ГОТОВО", {
    fileId: local_12.fileId,
    elapsedMs: Date.now() - local_4,
  });
  imported_2(
    () => import("../entry.js").then((arg) => arg.dO),
    local_0373ff9a([0, 1]),
  )
    .then(async ({ seedFileBox: arg }) => {
      if (await fn_e445020f(arg, local_2, local_12.sizeCipher)) {
        arg(local_12.fileId, arg, local_2, local);
      }
    })
    .catch(() => {});
  return local_12;
}
