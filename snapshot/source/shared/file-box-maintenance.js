import {
  symbol_026 as imported,
  symbol_027 as imported_2,
  symbol_030 as imported_3,
} from "../entry.js";
const local_5f143b30 = "itd-filebox-v2";
const local_4cc8ec46 = 500 * 1024 * 1024;
const local_4cc8ec46_2 = 720 * 3600 * 1000;
export async function fn_ff17e2b2(
  arg = local_4cc8ec46,
  arg_2 = local_4cc8ec46_2,
) {
  try {
    if (typeof caches === "undefined") {
      return;
    }
    const local = imported();
    if (!imported_2(local)) {
      return;
    }
    const local_2 = await caches.open(imported_3(local));
    const local_3 = await local_2.keys();
    const local_4 = new Map();
    for (const local of local_3) {
      const local = new URL(local.url).pathname.match(
        /^\/__filebox\/([^/]+)\//,
      );
      if (!local) {
        continue;
      }
      const local_2 = local_4.get(local[1]) ?? {
        keys: [],
        bytes: 0,
      };
      local_2.keys.push(local);
      const local_3 = await local_2.match(local);
      local_2.bytes += Number(local_3?.headers.get("x-bytes") ?? 0);
      local_4.set(local[1], local_2);
    }
    if (local_4.size === 0) {
      return;
    }
    const local_5 = await fn_810301a6();
    const local_6 = Date.now();
    const local_7 = async (arg) => {
      for (const local of local_4.get(arg).keys) {
        await local_2.delete(local);
      }
      fn_5a266212(arg);
    };
    for (const local of [...local_4.keys()]) {
      const local = local_5.get(local);
      if (local === undefined) {
        fn_52e8bd7f(local, local_6);
        continue;
      }
      if (local_6 - local > arg_2) {
        await local_7(local);
        local_4.delete(local);
      }
    }
    let local_8 = 0;
    for (const local of local_4.values()) {
      local_8 += local.bytes;
    }
    if (local_8 <= arg) {
      return;
    }
    const local_9 = [...local_4.keys()].sort(
      (arg, arg_2) =>
        (local_5.get(arg) ?? local_6) - (local_5.get(arg_2) ?? local_6),
    );
    for (const local of local_9) {
      if (local_8 <= arg) {
        break;
      }
      local_8 -= local_4.get(local).bytes;
      await local_7(local);
    }
  } catch {}
}
export async function fn_7fce17c4() {
  try {
    await caches.delete(local_5f143b30);
  } catch {}
  await new Promise((arg) => {
    try {
      const local = indexedDB.deleteDatabase("itd-filebox");
      local.onsuccess = () => arg();
      local.onerror = () => arg();
      local.onblocked = () => arg();
    } catch {
      arg();
    }
  });
}
function fn_0d5c29b3() {
  return new Promise((arg, arg_2) => {
    const local = indexedDB.open("itd-filebox", 1);
    local.onupgradeneeded = () => {
      local.result.createObjectStore("touch");
    };
    local.onsuccess = () => arg(local.result);
    local.onerror = () => arg_2(local.error);
  });
}
async function fn_810301a6() {
  const local = new Map();
  try {
    const local = await fn_0d5c29b3();
    await new Promise((arg) => {
      const local = local
        .transaction("touch", "readonly")
        .objectStore("touch")
        .openCursor();
      local.onsuccess = () => {
        const local = local.result;
        if (!local) {
          arg();
          return;
        }
        local.set(String(local.key), Number(local.value) || 0);
        local.continue();
      };
      local.onerror = () => arg();
    });
    local.close();
  } catch {}
  return local;
}
function fn_52e8bd7f(arg, arg_2) {
  fn_0d5c29b3()
    .then((arg) => {
      try {
        const local = arg.transaction("touch", "readwrite");
        local.objectStore("touch").put(arg_2, arg);
        local.oncomplete = () => arg.close();
        local.onerror = () => arg.close();
      } catch {
        arg.close();
      }
    })
    .catch(() => {});
}
function fn_5a266212(arg) {
  fn_0d5c29b3()
    .then((arg) => {
      try {
        const local = arg.transaction("touch", "readwrite");
        local.objectStore("touch").delete(arg);
        local.oncomplete = () => arg.close();
        local.onerror = () => arg.close();
      } catch {
        arg.close();
      }
    })
    .catch(() => {});
}
export async function fn_fdc371bd() {
  if (typeof caches === "undefined") {
    return [];
  }
  try {
    const local = await caches.open(local_5f143b30);
    const local_2 = await local.keys();
    const local_3 = new Map();
    for (const local of local_2) {
      const local = new URL(local.url).pathname.match(
        /^\/__filebox\/([^/]+)\/([^/]+)\/(meta|chunk\/\d+)$/,
      );
      if (!local) {
        continue;
      }
      const local_2 = local_3.get(local[1]) ?? {
        bytes: 0,
        mime: "",
      };
      const local_3 = await local.match(local);
      if (local[3] === "meta") {
        if (!local_2.mime || local[2] === "main") {
          try {
            const local = await local_3?.clone().json();
            local_2.mime = local?.mime ?? local_2.mime;
          } catch {}
        }
      } else {
        local_2.bytes += Number(local_3?.headers.get("x-bytes") ?? 0);
      }
      local_3.set(local[1], local_2);
    }
    return [...local_3.entries()].map(([arg, arg_2]) => ({
      fileId: arg,
      ...arg_2,
    }));
  } catch {
    return [];
  }
}
export async function fn_347c1bc6(arg) {
  if (!(typeof caches === "undefined" || arg.length === 0)) {
    try {
      const local = new Set(arg);
      const local_2 = await caches.open(local_5f143b30);
      const local_3 = await local_2.keys();
      for (const local of local_3) {
        const local = new URL(local.url).pathname.match(
          /^\/__filebox\/([^/]+)\//,
        );
        if (local && local.has(local[1])) {
          await local_2.delete(local);
        }
      }
      for (const local of arg) {
        fn_5a266212(local);
      }
    } catch {}
  }
}
