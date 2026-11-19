const local_a1e12a9e = new Map();
self.addEventListener("message", (arg) => {
  if (arg.data?.type !== "itd-filebox-scope" || !arg.source?.id) {
    return;
  }
  const local = local_a1e12a9e.get(arg.source.id);
  if (local) {
    local.active = false;
  }
  local_a1e12a9e.delete(arg.source.id);
  const local_2 = arg.data.namespace;
  if (
    typeof local_2 === "string" &&
    local_2.length <= 180 &&
    /^[a-zA-Z0-9%:_-]+$/.test(local_2)
  ) {
    local_a1e12a9e.set(arg.source.id, {
      namespace: local_2,
      active: true,
    });
  }
});
const local_aad0de78 = 1024 * 1024;
const local_9b12006c = false;
function fn_a4eb1be0(...arg) {
  if (local_9b12006c) {
    console.log("[FileBox]", ...arg);
  }
}
const local_c69fe39c = (arg) =>
  Math.max(1, Math.ceil(arg.total / local_aad0de78));
async function fn_8298aa3a(arg, arg_2, arg_3) {
  const local = local_c69fe39c(arg_3);
  let local_2 = 0;
  for (let local = 0; local < local; local++) {
    if (await arg.match(local_4442882e(arg_2, local))) {
      local_2++;
    }
  }
  return {
    cached: local_2,
    total: local,
  };
}
self.addEventListener("install", () => {
  self.skipWaiting();
});
self.addEventListener("activate", (arg) => {
  arg.waitUntil(
    Promise.all([self.clients.claim(), caches.delete("itd-filebox-v1")]),
  );
});
const local_196a63bf = "itd-chatcache-key";
const local_7fdf18be = "keys";
const local_caff07a2 = "db-key-v1";
function fn_4991c2cd(arg) {
  return new Promise((arg) => {
    let local;
    try {
      local = indexedDB.open(`${local_196a63bf}:${encodeURIComponent(arg)}`, 1);
    } catch {
      arg(null);
      return;
    }
    local.onupgradeneeded = () => {
      try {
        local.result.createObjectStore(local_7fdf18be);
      } catch {}
    };
    local.onerror = () => arg(null);
    local.onsuccess = () => {
      const local = local.result;
      try {
        const local = local
          .transaction(local_7fdf18be, "readonly")
          .objectStore(local_7fdf18be)
          .get(local_caff07a2);
        local.onsuccess = () => {
          local.close();
          arg(local.result || null);
        };
        local.onerror = () => {
          local.close();
          arg(null);
        };
      } catch {
        local.close();
        arg(null);
      }
    };
  });
}
const local_a1e12a9e_2 = new TextEncoder();
async function fn_ed313a5d(arg, arg_2, arg_3) {
  const local = crypto.getRandomValues(new Uint8Array(12));
  const local_2 = await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: local,
      additionalData: local_a1e12a9e_2.encode(arg_2),
    },
    arg,
    arg_3,
  );
  const local_3 = new Uint8Array(12 + local_2.byteLength);
  local_3.set(local, 0);
  local_3.set(new Uint8Array(local_2), 12);
  return local_3;
}
async function fn_1994fb3c(arg, arg_2, arg_3) {
  try {
    const local = new Uint8Array(arg_3);
    const local_2 = await crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: local.slice(0, 12),
        additionalData: local_a1e12a9e_2.encode(arg_2),
      },
      arg,
      local.slice(12),
    );
    return new Uint8Array(local_2);
  } catch {
    return null;
  }
}
function fn_251280b2(arg) {
  const local = arg.pathname.match(/^\/v1\/chat-files\/([^/]+)$/);
  if (!local) {
    return null;
  }
  const local_2 = arg.searchParams.get("size") || "";
  return {
    fileId: local[1],
    variant: local_2 ? `thumb-${local_2}` : "main",
  };
}
const local_5142e311 = (arg) => `/__filebox/${arg.fileId}/${arg.variant}/meta`;
const local_4442882e = (arg, arg_2) =>
  `/__filebox/${arg.fileId}/${arg.variant}/chunk/${arg_2}`;
const local_5bfa8d5b = (arg, arg_2) =>
  Math.min(local_aad0de78, arg_2 - arg * local_aad0de78);
self.addEventListener("fetch", (arg) => {
  const local = arg.request;
  if (local.method !== "GET") {
    return;
  }
  let local_2;
  try {
    local_2 = new URL(local.url);
  } catch {
    return;
  }
  const local_3 = fn_251280b2(local_2);
  if (!local_3) {
    return;
  }
  const local_4 = local_a1e12a9e.get(arg.clientId);
  if (!local_4?.active) {
    arg.waitUntil(
      Promise.resolve(self.clients?.get(arg.clientId))
        .then((arg) => {
          arg?.postMessage({
            type: "itd-filebox-scope-request",
          });
        })
        .catch(() => {}),
    );
    return;
  }
  arg.respondWith(
    fn_cc00fbda(arg, local, local_2, local_3, local_4).catch((arg) => {
      if (!local_4.active) {
        return Response.error();
      }
      return fetch(local);
    }),
  );
});
async function fn_cc00fbda(arg, arg_2, arg_3, arg_4, arg_5) {
  const local = () => {
    if (!arg_5.active) {
      throw new Error("Session revoked");
    }
  };
  local();
  const local_2 = await fn_4991c2cd(arg_5.namespace);
  local();
  if (!local_2) {
    return fetch(arg_2);
  }
  const local_3 = await caches.open(`itd-filebox:${arg_5.namespace}`);
  const local_4 = {};
  for (const local of ["match", "put", "delete"]) {
    local_4[local] = async (...arg) => {
      local();
      const local = await local_3[local](...arg);
      local();
      return local;
    };
  }
  fn_fa9a0d02(arg_4.fileId);
  let local_5 = await fn_7ee6089b(local_4, arg_4, local_2);
  if (!local_5) {
    local_5 = await fn_40f55800(
      local_4,
      arg_4,
      arg_3,
      local_2,
      !!arg_2.headers.get("range"),
      arg_2.signal,
    );
  }
  if (local_5.total === 0) {
    return new Response(null, {
      status: 200,
      headers: {
        "content-type": local_5.mime,
      },
    });
  }
  const local_6 = fn_3ff4cb7f(arg_2.headers.get("range"));
  if (local_6 && local_6.invalid) {
    return fetch(arg_2);
  }
  let local_7;
  let local_8;
  const local_9 = local_6 !== null;
  if (!local_6) {
    local_7 = 0;
    local_8 = local_5.total - 1;
  } else if (local_6.suffix !== undefined) {
    local_7 = Math.max(0, local_5.total - local_6.suffix);
    local_8 = local_5.total - 1;
  } else {
    local_7 = local_6.start;
    local_8 =
      local_6.end === null
        ? local_5.total - 1
        : Math.min(local_6.end, local_5.total - 1);
  }
  if (local_7 >= local_5.total || local_7 > local_8) {
    return new Response(null, {
      status: 416,
      headers: {
        "content-range": `bytes */${local_5.total}`,
      },
    });
  }
  const local_10 = {
    "content-type": local_5.mime,
    "accept-ranges": "bytes",
    "cache-control": "private, no-store",
    "content-length": String(local_8 - local_7 + 1),
  };
  if (local_9) {
    local_10["content-range"] = `bytes ${local_7}-${local_8}/${local_5.total}`;
  }
  if (local_9b12006c) {
    const { cached: local, total: local_2 } = await fn_8298aa3a(
      local_4,
      arg_4,
      local_5,
    );
    fn_a4eb1be0(
      `${arg_4.fileId}/${arg_4.variant}: отдача ${local_9 ? `Range ${local_7}-${local_8}` : "целиком"} из ${(local_5.total / 1048576).toFixed(1)}MiB; локально ${local}/${local_2} чанков (${Math.round((local / local_2) * 100)}%)${local < local_2 ? " — остальное докачаю сетью" : " — сеть не нужна"}`,
    );
  }
  return new Response(
    fn_63208fef(
      arg,
      local_4,
      arg_4,
      local_5,
      local_7,
      local_8,
      arg_3.href,
      local_2,
      local,
    ),
    {
      status: local_9 ? 206 : 200,
      headers: local_10,
    },
  );
}
async function fn_7ee6089b(arg, arg_2, arg_3) {
  const local = await arg.match(local_5142e311(arg_2));
  if (!local) {
    return null;
  }
  const local_2 = await fn_1994fb3c(
    arg_3,
    local_5142e311(arg_2),
    await local.arrayBuffer(),
  );
  if (!local_2) {
    return null;
  }
  try {
    return JSON.parse(new TextDecoder().decode(local_2));
  } catch {
    return null;
  }
}
async function fn_c354a7a7(arg, arg_2, arg_3, arg_4) {
  const local = await fn_ed313a5d(
    arg_4,
    local_5142e311(arg_2),
    local_a1e12a9e_2.encode(JSON.stringify(arg_3)),
  );
  await arg.put(
    local_5142e311(arg_2),
    new Response(local, {
      headers: {
        "x-bytes": "0",
      },
    }),
  );
}
async function fn_40f55800(arg, arg_2, arg_3, arg_4, arg_5, arg_6) {
  const local = await fetch(arg_3.href, {
    mode: "cors",
    ...(arg_5
      ? {
          headers: {
            Range: "bytes=0-0",
          },
        }
      : {}),
    ...(arg_6
      ? {
          signal: arg_6,
        }
      : {}),
  });
  const local_2 = local.headers.get("content-type") || "";
  if (local_2.includes("text/html")) {
    throw new Error("html instead of file");
  }
  if (local.status === 206) {
    const local = Number(
      (local.headers.get("content-range") || "")
        .split("../site/index.html")
        .pop(),
    );
    try {
      if (local.body) {
        local.body.cancel();
      }
    } catch {}
    if (!Number.isFinite(local) || local < 0) {
      throw new Error("bad content-range");
    }
    const local_2 = {
      total: local,
      mime: local.headers.get("content-type") || "application/octet-stream",
    };
    await fn_c354a7a7(arg, arg_2, local_2, arg_4);
    return local_2;
  }
  if (local.status === 200) {
    const local = await local.blob();
    const local_2 = {
      total: local.size,
      mime: local.headers.get("content-type") || "application/octet-stream",
    };
    for (let local = 0; local * local_aad0de78 < local.size; local++) {
      const local = new Uint8Array(
        await local
          .slice(
            local * local_aad0de78,
            Math.min((local + 1) * local_aad0de78, local.size),
          )
          .arrayBuffer(),
      );
      const local_2 = await fn_ed313a5d(
        arg_4,
        local_4442882e(arg_2, local),
        local,
      );
      await arg.put(
        local_4442882e(arg_2, local),
        new Response(local_2, {
          headers: {
            "x-bytes": String(local_2.byteLength),
          },
        }),
      );
    }
    await fn_c354a7a7(arg, arg_2, local_2, arg_4);
    return local_2;
  }
  throw new Error(`probe status ${local.status}`);
}
function fn_3ff4cb7f(arg) {
  if (!arg) {
    return null;
  }
  const local = /^bytes=(\d*)-(\d*)$/.exec(arg.trim());
  if (!local || (!local[1] && !local[2])) {
    return {
      invalid: true,
    };
  }
  if (!local[1]) {
    return {
      suffix: Number(local[2]),
    };
  }
  return {
    start: Number(local[1]),
    end: local[2] ? Number(local[2]) : null,
  };
}
function fn_63208fef(
  arg,
  arg_2,
  arg_3,
  arg_4,
  arg_5,
  arg_6,
  arg_7,
  arg_8,
  arg_9,
) {
  const local = Math.min(
    (Math.floor(arg_6 / local_aad0de78) + 1) * local_aad0de78 - 1,
    arg_4.total - 1,
  );
  let local_2 = arg_5;
  let local_3 = null;
  let local_4 = null;
  const local_5 = async () => {
    if (!local_4 || local_4.size < local_5bfa8d5b(local_4.idx, arg_4.total)) {
      return;
    }
    const local = new Uint8Array(local_4.size);
    let local_2 = 0;
    for (const local of local_4.bufs) {
      local.set(local, local_2);
      local_2 += local.length;
    }
    const local_3 = local_4.idx;
    const local_4 = await fn_ed313a5d(
      arg_8,
      local_4442882e(arg_3, local_3),
      local,
    );
    await arg_2.put(
      local_4442882e(arg_3, local_3),
      new Response(local_4, {
        headers: {
          "x-bytes": String(local_4.byteLength),
        },
      }),
    );
    if (local_9b12006c) {
      const { cached: local, total: local_2 } = await fn_8298aa3a(
        arg_2,
        arg_3,
        arg_4,
      );
      fn_a4eb1be0(
        `${arg_3.fileId}/${arg_3.variant}: чанк ${local_3 + 1}/${local_2} → диск; локально ${local}/${local_2} (${Math.round((local / local_2) * 100)}%)`,
      );
    }
    local_4 = null;
  };
  const local_6 = async (arg, arg_2) => {
    let local = 0;
    while (local < arg.length) {
      const local = Math.floor((arg_2 + local) / local_aad0de78);
      if (!local_4) {
        local_4 = {
          idx: local,
          bufs: [],
          size: 0,
        };
      }
      const local_2 = Math.min(
        local_5bfa8d5b(local_4.idx, arg_4.total) - local_4.size,
        arg.length - local,
      );
      local_4.bufs.push(arg.subarray(local, local + local_2));
      local_4.size += local_2;
      local += local_2;
      await local_5();
    }
  };
  const local_7 = async (arg) => {
    try {
      while (true) {
        const { done: local, value: local_2 } = await arg.reader.read();
        if (local) {
          break;
        }
        await local_6(local_2, arg.at);
        arg.at += local_2.length;
      }
    } catch {}
  };
  return new ReadableStream({
    async pull(arg) {
      try {
        arg_9();
        while (true) {
          if (local_2 > arg_6) {
            arg.close();
            if (local_3) {
              const local = local_3;
              local_3 = null;
              arg.waitUntil(local_7(local));
            }
            return;
          }
          if (local_3) {
            const { done: local, value: local_2 } = await local_3.reader.read();
            if (local) {
              local_3 = null;
              arg.error(new Error("upstream truncated"));
              return;
            }
            const local_3 = local_3.at;
            local_3.at += local_2.length;
            await local_6(local_2, local_3);
            const local_4 = Math.max(local_2, local_3);
            const local_5 = Math.min(arg_6 + 1, local_3.at);
            if (local_5 > local_4) {
              arg_9();
              arg.enqueue(
                local_2.subarray(local_4 - local_3, local_5 - local_3),
              );
              local_2 = local_5;
              return;
            }
            continue;
          }
          const local = Math.floor(local_2 / local_aad0de78);
          const local_2 = await arg_2.match(local_4442882e(arg_3, local));
          if (local_2) {
            const local = await fn_1994fb3c(
              arg_8,
              local_4442882e(arg_3, local),
              await local_2.arrayBuffer(),
            );
            const local_2 = local_2 - local * local_aad0de78;
            const local_3 = local
              ? Math.min(local.length, local_2 + (arg_6 - local_2 + 1))
              : 0;
            if (!local || local_3 <= local_2) {
              await arg_2.delete(local_4442882e(arg_3, local));
              continue;
            }
            arg_9();
            arg.enqueue(local.subarray(local_2, local_3));
            local_2 += local_3 - local_2;
            if (local_2 > arg_6) {
              arg.close();
            }
            return;
          }
          const local_3 = local * local_aad0de78;
          fn_a4eb1be0(
            `${arg_3.fileId}/${arg_3.variant}: чанка ${local + 1} нет локально — сеть Range ${local_3}-${local}`,
          );
          const local_4 = await fetch(arg_7, {
            headers: {
              Range: `bytes=${local_3}-${local}`,
            },
            mode: "cors",
          });
          if (local_4.status !== 206 && local_4.status !== 200) {
            throw new Error(`upstream ${local_4.status}`);
          }
          local_3 = {
            reader: local_4.body.getReader(),
            at: local_4.status === 200 ? 0 : local_3,
          };
          local_4 = null;
        }
      } catch (error) {
        if (local_3) {
          try {
            local_3.reader.cancel();
          } catch {}
          local_3 = null;
        }
        arg.error(error);
      }
    },
    cancel() {
      if (local_3) {
        try {
          local_3.reader.cancel();
        } catch {}
        local_3 = null;
      }
    },
  });
}
const local_a1e12a9e_3 = new Map();
let local_0a9fda83 = null;
function fn_fa9a0d02(arg) {
  local_a1e12a9e_3.set(arg, Date.now());
  if (local_0a9fda83) {
    return;
  }
  local_0a9fda83 = setTimeout(fn_441aa1e2, 10000);
}
function fn_441aa1e2() {
  local_0a9fda83 = null;
  const local = [...local_a1e12a9e_3];
  local_a1e12a9e_3.clear();
  const local_2 = indexedDB.open("itd-filebox", 1);
  local_2.onupgradeneeded = () => {
    local_2.result.createObjectStore("touch");
  };
  local_2.onsuccess = () => {
    const local = local_2.result;
    try {
      const local = local.transaction("touch", "readwrite");
      const local_2 = local.objectStore("touch");
      for (const [local, local_2] of local) {
        local_2.put(local_2, local);
      }
      local.oncomplete = () => local.close();
      local.onerror = () => local.close();
    } catch {
      local.close();
    }
  };
}
self.addEventListener("activate", (arg) =>
  arg.waitUntil(
    (async () => {
      for (const local of await caches.keys()) {
        if (local.startsWith("itd-public-shell-")) {
          await caches.delete(local);
        }
      }
    })(),
  ),
);
