import {
  symbol_071 as imported,
  symbol_021 as imported_2,
  a7 as imported_3,
  symbol_073 as imported_4,
  symbol_054 as imported_5,
  symbol_002 as imported_6,
  symbol_067 as imported_7,
  symbol_058 as imported_8,
} from "../entry.js";
import {
  symbol_003 as imported_9,
  symbol_001 as imported_10,
} from "./chunk-12b08122b95d.js";
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
      id: "1.1.4",
    };
    const local_2 = new local.Error().stack;
    if (local_2) {
      local._sentryDebugIds = local._sentryDebugIds || {};
      local._sentryDebugIds[local_2] = "<sentry-debug-id>";
      local._sentryDebugIdIdentifier = "sentry-dbid-<sentry-debug-id>";
    }
  } catch {}
})();
const local_6b16155b = ({ size: arg = 24 }) =>
  imported("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arg,
    height: arg,
    fill: "none",
    viewBox: "0 0 24 24",
    children: imported("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      d: "M15.6 8.4H20V4m0 4.4L17.3 6a8 8 0 1 0 2.5 7.7",
    }),
  });
const local_d968b24d = {
  L: 0,
  M: 1,
  Q: 2,
  H: 3,
};
const local_2d87fba0 = {
  0: 1,
  1: 0,
  2: 3,
  3: 2,
};
const local_e6f9a1ab = [
  [
    -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30,
    28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
    30, 30, 30,
  ],
  [
    -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26,
    26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
    28, 28, 28,
  ],
  [
    -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28,
    26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
    30, 30, 30,
  ],
  [
    -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28,
    26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
    30, 30, 30,
  ],
];
const local_e6f9a1ab_2 = [
  [
    -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10,
    12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25,
  ],
  [
    -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17,
    17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49,
  ],
  [
    -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23,
    23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68,
  ],
  [
    -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25,
    25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 57, 60, 63, 66, 70, 74, 77, 81,
    85,
  ],
];
const local_1fefa1f4 = (arg, arg_2) => {
  let local = 0;
  for (let local = 7; local >= 0; local--) {
    local = (local << 1) ^ ((local >>> 7) * 285);
    local ^= ((arg_2 >>> local) & 1) * arg;
  }
  return local & 255;
};
function fn_afc1d1a2(arg) {
  const local = new Uint8Array(arg);
  local[arg - 1] = 1;
  let local_2 = 1;
  for (let local = 0; local < arg; local++) {
    for (let local = 0; local < arg; local++) {
      local[local] = local_1fefa1f4(local[local], local_2);
      if (local + 1 < arg) {
        local[local] ^= local[local + 1];
      }
    }
    local_2 = local_1fefa1f4(local_2, 2);
  }
  return local;
}
function fn_2dd90943(arg, arg_2) {
  const local = new Uint8Array(arg_2.length);
  for (const local of arg) {
    const local = local ^ local[0];
    local.copyWithin(0, 1);
    local[local.length - 1] = 0;
    for (let local = 0; local < arg_2.length; local++) {
      local[local] ^= local_1fefa1f4(arg_2[local], local);
    }
  }
  return local;
}
function fn_7c4e3204(arg) {
  let local = (16 * arg + 128) * arg + 64;
  if (arg >= 2) {
    const local = Math.floor(arg / 7) + 2;
    local -= (25 * local - 10) * local - 55;
    if (arg >= 7) {
      local -= 36;
    }
  }
  return local;
}
const local_c7584cc6 = (arg, arg_2) =>
  Math.floor(fn_7c4e3204(arg) / 8) -
  local_e6f9a1ab[arg_2][arg] * local_e6f9a1ab_2[arg_2][arg];
function fn_34dfa0e1(arg) {
  if (arg === 1) {
    return [];
  }
  const local = Math.floor(arg / 7) + 2;
  const local_2 =
    arg === 32 ? 26 : Math.ceil((arg * 4 + 4) / (local * 2 - 2)) * 2;
  const local_3 = [6];
  for (let local = arg * 4 + 10; local_3.length < local; local -= local_2) {
    local_3.splice(1, 0, local);
  }
  return local_3;
}
function fn_3f59f3ad(arg, arg_2) {
  let local = 0;
  for (let local = 0; local < arg_2; local++) {
    let local = 1;
    for (let local = 1; local < arg_2; local++) {
      if (arg[local][local] === arg[local][local - 1]) {
        local++;
        if (local === 5) {
          local += 3;
        } else {
          local > 5 && local++;
        }
      } else {
        local = 1;
      }
    }
  }
  for (let local = 0; local < arg_2; local++) {
    let local = 1;
    for (let local = 1; local < arg_2; local++) {
      if (arg[local][local] === arg[local - 1][local]) {
        local++;
        if (local === 5) {
          local += 3;
        } else {
          local > 5 && local++;
        }
      } else {
        local = 1;
      }
    }
  }
  for (let local = 0; local < arg_2 - 1; local++) {
    for (let local = 0; local < arg_2 - 1; local++) {
      const local = arg[local][local];
      if (
        local === arg[local][local + 1] &&
        local === arg[local + 1][local] &&
        local === arg[local + 1][local + 1]
      ) {
        local += 3;
      }
    }
  }
  const local_2 = [true, false, true, true, true, false, true];
  const local_3 = (arg, arg_2, arg_3) => {
    for (let local = 0; local < 7; local++) {
      if (arg(arg_2 + local) !== local_2[local]) {
        return false;
      }
    }
    const local =
      arg_2 - 4 >= 0 && [1, 2, 3, 4].every((arg) => !arg(arg_2 - arg));
    const local_2 =
      arg_2 + 10 < arg_3 && [7, 8, 9, 10].every((arg) => !arg(arg_2 + arg));
    return local || local_2;
  };
  for (let local = 0; local < arg_2; local++) {
    for (let local = 0; local + 7 <= arg_2; local++) {
      if (local_3((arg) => arg[local][arg], local, arg_2)) {
        local += 40;
      }
    }
  }
  for (let local = 0; local < arg_2; local++) {
    for (let local = 0; local + 7 <= arg_2; local++) {
      if (local_3((arg) => arg[arg][local], local, arg_2)) {
        local += 40;
      }
    }
  }
  let local_4 = 0;
  for (const local of arg) {
    for (const local of local) {
      local && local_4++;
    }
  }
  local +=
    Math.max(
      0,
      Math.ceil(Math.abs(local_4 * 20 - arg_2 * arg_2 * 10) / (arg_2 * arg_2)) -
        1,
    ) * 10;
  return local;
}
function fn_bd5b5a01(arg, arg_2 = "M") {
  const local = local_d968b24d[arg_2];
  const local_2 = Array.from(new TextEncoder().encode(arg));
  let local_3 = 1;
  for (
    ;
    local_3 <= 40 &&
    !(
      4 + (local_3 <= 9 ? 8 : 16) + local_2.length * 8 <=
      local_c7584cc6(local_3, local) * 8
    );
    local_3++
  );
  if (local_3 > 40) {
    throw new Error("Строка не помещается в QR");
  }
  const local_4 = [];
  const local_5 = (arg, arg_2) => {
    for (let local = arg_2 - 1; local >= 0; local--) {
      local_4.push((arg >>> local) & 1);
    }
  };
  local_5(4, 4);
  local_5(local_2.length, local_3 <= 9 ? 8 : 16);
  for (const local of local_2) {
    local_5(local, 8);
  }
  const local_6 = local_c7584cc6(local_3, local) * 8;
  local_5(0, Math.min(4, local_6 - local_4.length));
  local_5(0, (8 - (local_4.length % 8)) % 8);
  const local_7 = new Uint8Array(local_6 / 8);
  for (let local = 0; local < local_4.length; local++) {
    local_7[local >>> 3] |= local_4[local] << (7 - (local & 7));
  }
  for (
    let local = local_4.length / 8, local_2 = 236;
    local < local_7.length;
    local++, local_2 ^= 253
  ) {
    local_7[local] = local_2;
  }
  const local_8 = local_e6f9a1ab_2[local][local_3];
  const local_9 = local_e6f9a1ab[local][local_3];
  const local_10 = Math.floor(fn_7c4e3204(local_3) / 8);
  const local_11 = Math.floor(local_10 / local_8);
  const local_12 = local_8 - (local_10 % local_8);
  const local_13 = fn_afc1d1a2(local_9);
  const local_14 = [];
  for (let local = 0, local_2 = 0; local < local_8; local++) {
    const local = local_11 - local_9 + (local < local_12 ? 0 : 1);
    const local_2 = local_7.slice(local_2, local_2 + local);
    local_2 += local;
    local_14.push({
      dat: local_2,
      ecc: fn_2dd90943(local_2, local_13),
    });
  }
  const local_15 = [];
  for (let local = 0; local < local_11 - local_9 + 1; local++) {
    for (const local of local_14) {
      if (local < local.dat.length) {
        local_15.push(local.dat[local]);
      }
    }
  }
  for (let local = 0; local < local_9; local++) {
    for (const local of local_14) {
      local_15.push(local.ecc[local]);
    }
  }
  const local_16 = local_3 * 4 + 17;
  const local_17 = Array.from(
    {
      length: local_16,
    },
    () => new Array(local_16).fill(false),
  );
  const local_18 = Array.from(
    {
      length: local_16,
    },
    () => new Array(local_16).fill(false),
  );
  const local_19 = (arg, arg_2, arg_3) => {
    local_17[arg_2][arg] = arg_3;
    local_18[arg_2][arg] = true;
  };
  for (const [local, local_2] of [
    [3, 3],
    [local_16 - 4, 3],
    [3, local_16 - 4],
  ]) {
    for (let local = -4; local <= 4; local++) {
      for (let local = -4; local <= 4; local++) {
        const local = Math.max(Math.abs(local), Math.abs(local));
        const local_2 = local + local;
        const local_3 = local_2 + local;
        if (
          local_2 >= 0 &&
          local_2 < local_16 &&
          local_3 >= 0 &&
          local_3 < local_16
        ) {
          local_19(local_2, local_3, local !== 2 && local !== 4);
        }
      }
    }
  }
  for (let local = 0; local < local_16; local++) {
    if (!local_18[6][local]) {
      local_19(local, 6, local % 2 === 0);
    }
    if (!local_18[local][6]) {
      local_19(6, local, local % 2 === 0);
    }
  }
  const local_20 = fn_34dfa0e1(local_3);
  for (let local = 0; local < local_20.length; local++) {
    for (let local = 0; local < local_20.length; local++) {
      if (!(
        (local === 0 && local === 0) ||
        (local === 0 && local === local_20.length - 1) ||
        (local === local_20.length - 1 && local === 0)
      )) {
        for (let local = -2; local <= 2; local++) {
          for (let local = -2; local <= 2; local++) {
            local_19(
              local_20[local] + local,
              local_20[local] + local,
              Math.max(Math.abs(local), Math.abs(local)) !== 1,
            );
          }
        }
      }
    }
  }
  for (let local = 0; local <= 5; local++) {
    local_19(8, local, false);
  }
  local_19(8, 7, false);
  local_19(8, 8, false);
  local_19(7, 8, false);
  for (let local = 9; local < 15; local++) {
    local_19(14 - local, 8, false);
  }
  for (let local = 0; local < 8; local++) {
    local_19(local_16 - 1 - local, 8, false);
  }
  for (let local = 8; local < 15; local++) {
    local_19(8, local_16 - 15 + local, false);
  }
  local_19(8, local_16 - 8, true);
  if (local_3 >= 7) {
    let local = local_3;
    for (let local = 0; local < 12; local++) {
      local = (local << 1) ^ ((local >>> 11) * 7973);
    }
    const local_2 = (local_3 << 12) | local;
    for (let local = 0; local < 18; local++) {
      const local = ((local_2 >>> local) & 1) !== 0;
      const local_2 = local_16 - 11 + (local % 3);
      const local_3 = Math.floor(local / 3);
      local_19(local_2, local_3, local);
      local_19(local_3, local_2, local);
    }
  }
  let local_21 = 0;
  for (let local = local_16 - 1; local >= 1; local -= 2) {
    if (local === 6) {
      local = 5;
    }
    for (let local = 0; local < local_16; local++) {
      for (let local = 0; local < 2; local++) {
        const local = local - local;
        const local_2 = ((local + 1) & 2) === 0 ? local_16 - 1 - local : local;
        if (!local_18[local_2][local] && local_21 < local_15.length * 8) {
          local_17[local_2][local] =
            ((local_15[local_21 >>> 3] >>> (7 - (local_21 & 7))) & 1) !== 0;
          local_21++;
        }
      }
    }
  }
  const local_22 = [
    (arg, arg_2) => (arg + arg_2) % 2 === 0,
    (arg, arg_2) => arg_2 % 2 === 0,
    (arg) => arg % 3 === 0,
    (arg, arg_2) => (arg + arg_2) % 3 === 0,
    (arg, arg_2) => (Math.floor(arg_2 / 2) + Math.floor(arg / 3)) % 2 === 0,
    (arg, arg_2) => ((arg * arg_2) % 2) + ((arg * arg_2) % 3) === 0,
    (arg, arg_2) => (((arg * arg_2) % 2) + ((arg * arg_2) % 3)) % 2 === 0,
    (arg, arg_2) => (((arg + arg_2) % 2) + ((arg * arg_2) % 3)) % 2 === 0,
  ];
  const local_23 = (arg) => {
    for (let local = 0; local < local_16; local++) {
      for (let local = 0; local < local_16; local++) {
        if (!local_18[local][local] && local_22[arg](local, local)) {
          local_17[local][local] = !local_17[local][local];
        }
      }
    }
  };
  const local_24 = (arg) => {
    const local = (local_2d87fba0[local] << 3) | arg;
    let local_2 = local;
    for (let local = 0; local < 10; local++) {
      local_2 = (local_2 << 1) ^ ((local_2 >>> 9) * 1335);
    }
    const local_3 = ((local << 10) | local_2) ^ 21522;
    for (let local = 0; local <= 5; local++) {
      local_17[local][8] = ((local_3 >>> local) & 1) !== 0;
    }
    local_17[7][8] = ((local_3 >>> 6) & 1) !== 0;
    local_17[8][8] = ((local_3 >>> 7) & 1) !== 0;
    local_17[8][7] = ((local_3 >>> 8) & 1) !== 0;
    for (let local = 9; local < 15; local++) {
      local_17[8][14 - local] = ((local_3 >>> local) & 1) !== 0;
    }
    for (let local = 0; local < 8; local++) {
      local_17[8][local_16 - 1 - local] = ((local_3 >>> local) & 1) !== 0;
    }
    for (let local = 8; local < 15; local++) {
      local_17[local_16 - 15 + local][8] = ((local_3 >>> local) & 1) !== 0;
    }
    local_17[local_16 - 8][8] = true;
  };
  let local_25 = 0;
  let local_26 = Infinity;
  for (let local = 0; local < 8; local++) {
    local_23(local);
    local_24(local);
    const local = fn_3f59f3ad(local_17, local_16);
    if (local < local_26) {
      local_26 = local;
      local_25 = local;
    }
    local_23(local);
  }
  local_23(local_25);
  local_24(local_25);
  return {
    modules: local_17,
    size: local_16,
    version: local_3,
    mask: local_25,
    ecl: arg_2,
  };
}
const local_bc55c5b0 = (arg) => Number(arg.toFixed(3));
function fn_b1a246c8(arg, arg_2 = {}) {
  const { size: local, modules: local_2 } = arg;
  const local_3 = arg_2.quiet ?? 3;
  const local_4 = arg_2.radius ?? 0.5;
  const local_5 = arg_2.dark ?? "#000000";
  const local_6 = arg_2.light ?? "#ffffff";
  const local_7 = local + local_3 * 2;
  const local_8 = (arg, arg_2) =>
    (arg < 7 && arg_2 < 7) ||
    (arg >= local - 7 && arg_2 < 7) ||
    (arg < 7 && arg_2 >= local - 7);
  const local_9 = (arg, arg_2) =>
    arg >= 0 &&
    arg_2 >= 0 &&
    arg < local &&
    arg_2 < local &&
    local_2[arg_2][arg] &&
    !local_8(arg, arg_2);
  let local_10 = "";
  for (let local = 0; local < local; local++) {
    for (let local = 0; local < local; local++) {
      if (!local_9(local, local)) {
        continue;
      }
      const local = local_9(local, local - 1);
      const local_2 = local_9(local, local + 1);
      const local_3 = local_9(local - 1, local);
      const local_4 = local_9(local + 1, local);
      const local_5 = !local && !local_3 ? local_4 : 0;
      const local_6 = !local && !local_4 ? local_4 : 0;
      const local_7 = !local_2 && !local_4 ? local_4 : 0;
      const local_8 = !local_2 && !local_3 ? local_4 : 0;
      const local_9 = local + local_3;
      const local_10 = local + local_3;
      let local_11 = `M${local_bc55c5b0(local_9 + local_5)},${local_bc55c5b0(local_10)}H${local_bc55c5b0(local_9 + 1 - local_6)}`;
      if (local_6) {
        local_11 += `A${local_bc55c5b0(local_6)},${local_bc55c5b0(local_6)} 0 0 1 ${local_bc55c5b0(local_9 + 1)},${local_bc55c5b0(local_10 + local_6)}`;
      }
      local_11 += `V${local_bc55c5b0(local_10 + 1 - local_7)}`;
      if (local_7) {
        local_11 += `A${local_bc55c5b0(local_7)},${local_bc55c5b0(local_7)} 0 0 1 ${local_bc55c5b0(local_9 + 1 - local_7)},${local_bc55c5b0(local_10 + 1)}`;
      }
      local_11 += `H${local_bc55c5b0(local_9 + local_8)}`;
      if (local_8) {
        local_11 += `A${local_bc55c5b0(local_8)},${local_bc55c5b0(local_8)} 0 0 1 ${local_bc55c5b0(local_9)},${local_bc55c5b0(local_10 + 1 - local_8)}`;
      }
      local_11 += `V${local_bc55c5b0(local_10 + local_5)}`;
      if (local_5) {
        local_11 += `A${local_bc55c5b0(local_5)},${local_bc55c5b0(local_5)} 0 0 1 ${local_bc55c5b0(local_9 + local_5)},${local_bc55c5b0(local_10)}`;
      }
      local_10 += `${local_11}Z`;
    }
  }
  const local_11 = (arg, arg_2, arg_3, arg_4, arg_5) => {
    const local = Math.min(arg_5, arg_3 / 2, arg_4 / 2);
    return `M${local_bc55c5b0(arg + local)},${local_bc55c5b0(arg_2)}H${local_bc55c5b0(arg + arg_3 - local)}A${local_bc55c5b0(local)},${local_bc55c5b0(local)} 0 0 1 ${local_bc55c5b0(arg + arg_3)},${local_bc55c5b0(arg_2 + local)}V${local_bc55c5b0(arg_2 + arg_4 - local)}A${local_bc55c5b0(local)},${local_bc55c5b0(local)} 0 0 1 ${local_bc55c5b0(arg + arg_3 - local)},${local_bc55c5b0(arg_2 + arg_4)}H${local_bc55c5b0(arg + local)}A${local_bc55c5b0(local)},${local_bc55c5b0(local)} 0 0 1 ${local_bc55c5b0(arg)},${local_bc55c5b0(arg_2 + arg_4 - local)}V${local_bc55c5b0(arg_2 + local)}A${local_bc55c5b0(local)},${local_bc55c5b0(local)} 0 0 1 ${local_bc55c5b0(arg + local)},${local_bc55c5b0(arg_2)}Z`;
  };
  let local_12 = "";
  for (const [local, local_2] of [
    [0, 0],
    [local - 7, 0],
    [0, local - 7],
  ]) {
    const local = local + local_3;
    const local_2 = local_2 + local_3;
    const local_3 = Math.max(0.35, (local_4 / 0.5) * 2);
    const local_4 = Math.max(0.2, (local_4 / 0.5) * 1.25);
    const local_5 = Math.max(0.25, (local_4 / 0.5) * 1.5);
    local_12 += `<path d="${local_11(local, local_2, 7, 7, local_3)}${local_11(local + 1, local_2 + 1, 5, 5, local_4)}" fill-rule="evenodd"/>`;
    local_12 += `<path d="${local_11(local + 2, local_2 + 2, 3, 3, local_5)}"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${local_7} ${local_7}" shape-rendering="geometricPrecision"><rect width="${local_7}" height="${local_7}" fill="${local_6}"/><g fill="${local_5}">${local_12}<path d="${local_10}"/></g></svg>`;
}
const local_f06debfc = 160;
function fn_b07908df({
  value: arg,
  size: arg_2 = 240,
  ecl: arg_3 = "M",
  className: arg_4,
  dimmed: arg_5 = false,
}) {
  const local = Math.max(arg_2, local_f06debfc);
  const local_2 = imported_2(() => {
    try {
      return fn_b1a246c8(fn_bd5b5a01(arg, arg_3), {
        quiet: 4,
      });
    } catch {
      return null;
    }
  }, [arg, arg_3]);
  if (local_2) {
    return imported("div", {
      className: arg_4,
      style: {
        width: local,
        height: local,
        opacity: arg_5 ? 0.25 : undefined,
      },
      role: "img",
      "aria-label": "QR-код для входа",
      dangerouslySetInnerHTML: {
        __html: local_2,
      },
    });
  }
  return null;
}
const local_3bad1201 = "/api/v1/auth";
class clazz_5e431053 extends Error {
  status;
  api;
  constructor(arg, arg_2) {
    super(arg_2.message || arg_2.code);
    this.name = "QrError";
    this.status = arg;
    this.api = arg_2;
  }
}
async function fn_67f7f666(arg) {
  let local = {
    code: "UNKNOWN",
  };
  try {
    const local = await arg.json();
    if (local?.error) {
      local = local.error;
    }
  } catch {}
  throw new clazz_5e431053(arg.status, local);
}
async function fn_ffdcee94(arg) {
  const local = await fetch(`${local_3bad1201}${imported_3.auth.qrStart}`, {
    method: "POST",
    credentials: "include",
    signal: arg,
  });
  if (local.ok) {
    return await local.json();
  }
  return fn_67f7f666(local);
}
async function fn_3b0223d6(arg, arg_2, arg_3, arg_4) {
  const local = await fetch(`${local_3bad1201}${imported_3.auth.qrClaim}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      qrId: arg,
      claimToken: arg_2,
      ...(arg_3 ? imported_9(arg_3.token, arg_3.field) : {}),
    }),
    credentials: "include",
    signal: arg_4,
  });
  if (local.ok) {
    return await local.json();
  }
  return fn_67f7f666(local);
}
async function fn_77fac4dd(arg, arg_2, arg_3, arg_4) {
  const local = await fetch(`${local_3bad1201}${imported_3.auth.qrStream}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      qrId: arg,
      claimToken: arg_2,
    }),
    credentials: "include",
    signal: arg_4,
  });
  if (!local.ok) {
    return fn_67f7f666(local);
  }
  if (!local.body) {
    throw new clazz_5e431053(0, {
      code: "NO_STREAM_BODY",
    });
  }
  const local_2 = local.body.getReader();
  const local_3 = new TextDecoder();
  let local_4 = "";
  try {
    while (true) {
      const { done: local, value: local_2 } = await local_2.read();
      if (local) {
        break;
      }
      local_4 += local_3.decode(local_2, {
        stream: true,
      });
      let local_3;
      while (
        (local_3 = local_4.indexOf(`

`)) >= 0
      ) {
        const local = local_4.slice(0, local_3);
        local_4 = local_4.slice(local_3 + 2);
        const local_2 = local
          .split(
            `
`,
          )
          .find((arg) => arg.startsWith("data:"));
        if (local_2) {
          try {
            arg_3(JSON.parse(local_2.slice(5).trim()));
          } catch {}
        }
      }
    }
  } finally {
    local_2.cancel().catch(() => {});
  }
}
const local_f06debfc_2 = 3000;
const local_f06debfc_3 = 2000;
const local_f06debfc_4 = 2;
const local_f06debfc_5 = 60000;
const local_6717f24f = [
  "mousemove",
  "keydown",
  "touchstart",
  "wheel",
  "scroll",
];
function fn_2acb5394() {
  return null;
}
const local_a3698b84 = {
  QR_EXPIRED: "Код устарел",
  QR_TOKEN_MISMATCH: "Код запрошен в другой вкладке",
  QR_ALREADY_USED: "По этому коду уже вошли",
  USER_INACTIVE: "Аккаунт заблокирован",
  TOO_MANY_REQUESTS: "Слишком много попыток, подождите немного",
  QR_NOT_SCANNED: "Код ещё не отсканирован",
  TURNSTILE_VERIFICATION_FAILED: "Проверка не пройдена, попробуйте ещё раз",
  INTEGRITY_CHECK_FAILED: "Проверка не пройдена, попробуйте ещё раз",
};
const local_2fe0890c = (arg) => {
  if (arg instanceof clazz_5e431053) {
    return local_a3698b84[arg.api.code] ?? "Не удалось показать код";
  }
  return "Не удалось показать код";
};
const local_fae108f5 = (arg) =>
  arg instanceof clazz_5e431053 &&
  (arg.api.code === "QR_EXPIRED" || arg.api.code === "QR_ALREADY_USED");
function fn_093db101(arg) {
  const local = imported_4((arg) => arg.adoptSession);
  const [local_2, local_3] = imported_5("idle");
  const [local_4, local_5] = imported_5(null);
  const [local_6, local_7] = imported_5(0);
  const [local_8, local_9] = imported_5(null);
  const [local_10, local_11] = imported_5(false);
  const local_12 = imported_6(0);
  const local_13 = imported_6(null);
  const local_14 = imported_6(null);
  const local_15 = imported_6(null);
  const local_16 = imported_6(false);
  const local_17 = imported_6(false);
  const local_18 = imported_6(false);
  const local_19 = imported_6(false);
  const local_20 = imported_6(false);
  const local_21 = imported_6(null);
  const local_22 = imported_6(0);
  const local_23 = imported_6(Date.now());
  const local_24 = imported_6(null);
  const local_25 = imported_7(() => local_18.current && !local_19.current, []);
  const local_26 = imported_7(() => {
    if (local_14.current) {
      clearTimeout(local_14.current);
      local_14.current = null;
    }
    if (local_15.current) {
      clearInterval(local_15.current);
      local_15.current = null;
    }
  }, []);
  const local_27 = imported_7(() => {
    local_26();
    local_13.current?.abort();
    local_13.current = null;
  }, [local_26]);
  const local_28 = imported_7((arg) => {
    if (local_15.current) {
      clearInterval(local_15.current);
    }
    const local = fn_2acb5394();
    local_7(local === null ? arg : Math.min(arg, local));
    local_15.current = setInterval(() => {
      local_7((arg) => {
        if (arg > 0) {
          return arg - 1;
        }
        return 0;
      });
    }, 1000);
  }, []);
  const local_29 = imported_7(
    (arg) => {
      if (arg !== local_12.current) {
        return;
      }
      const local = local_24.current;
      if (!local) {
        return;
      }
      const local_2 = async (arg) => {
        if (local_16.current || arg !== local_12.current) {
          return false;
        }
        local_16.current = true;
        local_3("authorizing");
        try {
          const local = await fn_3b0223d6(local.qrId, local.claimToken, arg);
          if (arg !== local_12.current) {
            return false;
          }
          if (local.status === "authorized") {
            return (local_27(), await local(local.accessToken), false);
          }
          return (
            (local_16.current = false),
            local.status === "captcha_required"
              ? ((local_20.current = true), local_3("captcha"), true)
              : (arg && (local_19.current = true),
                local_3(local.status === "scanned" ? "scanned" : "waiting"),
                true)
          );
        } catch (error) {
          if (arg !== local_12.current) {
            return false;
          }
          return (
            (local_16.current = false),
            local_fae108f5(error)
              ? (local_3("expired"), local_26(), false)
              : arg
                ? (local_9(local_2fe0890c(error)), local_3("captcha"), true)
                : (local_9(local_2fe0890c(error)), local_3("error"), false)
          );
        }
      };
      local_21.current = (arg) => {
        if (local_14.current) {
          clearTimeout(local_14.current);
          local_14.current = null;
        }
        local_2(arg).then((arg) => {
          if (arg && arg === local_12.current) {
            local_4();
          }
        });
      };
      const local_3 = async () => {
        if (!(arg !== local_12.current || local_16.current)) {
          try {
            const local = await fn_3b0223d6(local.qrId, local.claimToken);
            if (arg !== local_12.current) {
              return;
            }
            if (local.status === "authorized") {
              local_27();
              await local(local.accessToken);
              return;
            }
            if (local.status === "scanned") {
              local_17.current = true;
              local_3("scanned");
            }
            if (local.status === "captcha_required") {
              local_17.current = true;
              local_20.current = true;
              local_3("captcha");
            }
            if (local.status === "rejected") {
              local_3("rejected");
              local_26();
              return;
            }
            if (typeof local.expiresIn === "number") {
              local_28(local.expiresIn);
            }
          } catch (error) {
            if (arg !== local_12.current) {
              return;
            }
            if (local_fae108f5(error)) {
              local_3("expired");
              local_26();
              return;
            }
          }
          if (arg === local_12.current) {
            local_14.current = setTimeout(local_3, local_f06debfc_3);
          }
        }
      };
      const local_4 = () => {
        if (local_14.current) {
          clearTimeout(local_14.current);
        }
        local_14.current = setTimeout(local_3, local_f06debfc_3);
      };
      const local_5 = new AbortController();
      local_13.current = local_5;
      let local_6 = false;
      const local_7 = setTimeout(() => {
        if (!(local_6 || arg !== local_12.current)) {
          local_5.abort();
          local_4();
        }
      }, local_f06debfc_2);
      fn_77fac4dd(
        local.qrId,
        local.claimToken,
        (arg) => {
          local_6 = true;
          clearTimeout(local_7);
          arg === local_12.current &&
            (typeof arg.expiresIn === "number" &&
              arg.status !== "approved" &&
              local_28(arg.expiresIn),
            arg.status === "scanned"
              ? ((local_17.current = true), local_3("scanned"))
              : arg.status === "pending"
                ? local_3("waiting")
                : arg.status === "rejected"
                  ? (local_3("rejected"), local_27())
                  : arg.status === "approved" &&
                    ((local_20.current = true),
                    local_25() ? (local_3("captcha"), local_4()) : local_2()));
        },
        local_5.signal,
      )
        .then(() => {
          clearTimeout(local_7);
          if (arg === local_12.current && !local_16.current) {
            local_4();
          }
        })
        .catch((arg) => {
          clearTimeout(local_7);
          if (!(arg !== local_12.current || local_5.signal.aborted)) {
            if (local_fae108f5(arg)) {
              local_3("expired");
              local_26();
              return;
            }
            local_4();
          }
        });
    },
    [local, local_25, local_28, local_26, local_27],
  );
  const local_30 = imported_7(async () => {
    local_27();
    const local = ++local_12.current;
    local_16.current = false;
    local_17.current = false;
    local_18.current = false;
    local_19.current = false;
    local_20.current = false;
    local_21.current = null;
    local_24.current = null;
    local_3("loading");
    local_9(null);
    local_11(false);
    local_5(null);
    try {
      const local = await fn_ffdcee94();
      if (local !== local_12.current) {
        return;
      }
      local_24.current = {
        qrId: local.qrId,
        claimToken: local.claimToken,
      };
      local_18.current = local.captchaRequired;
      local_5(local.payload);
      local_3("waiting");
      local_28(local.expiresIn);
      local_29(local);
    } catch (error) {
      if (local !== local_12.current) {
        return;
      }
      local_9(local_2fe0890c(error));
      local_3("error");
      local_11(true);
    }
  }, [local_29, local_28, local_27]);
  const local_31 = imported_7((arg, arg_2) => {
    local_21.current?.({
      token: arg,
      field: arg_2,
    });
  }, []);
  const local_32 = imported_7(() => {
    local_22.current = 0;
    local_30();
  }, [local_30]);
  imported_8(() => {
    if (local_6 !== 0 || local_2 !== "waiting" || local_17.current) {
      return;
    }
    const local = fn_2acb5394();
    const local_2 = local === null ? local_f06debfc_5 : local * 1000 * 3;
    const local_3 = Date.now() - local_23.current > local_2;
    if (
      (typeof document !== "undefined" && document.hidden) ||
      local_3 ||
      local_22.current >= local_f06debfc_4
    ) {
      local_3("expired");
      local_11(true);
      local_26();
      return;
    }
    local_22.current += 1;
    local_30();
  }, [local_6, local_2, local_30, local_26]);
  imported_8(() => {
    if (!arg) {
      return;
    }
    const local = () => {
      local_23.current = Date.now();
    };
    for (const local of local_6717f24f) {
      window.addEventListener(local, local, {
        passive: true,
      });
    }
    return () => {
      for (const local of local_6717f24f) {
        window.removeEventListener(local, local);
      }
    };
  }, [arg]);
  imported_8(() => {
    if (local_2 === "expired" || local_2 === "rejected") {
      local_11(true);
    }
  }, [local_2]);
  imported_8(() => {
    if (!arg) {
      local_12.current += 1;
      local_27();
      local_3("idle");
      local_5(null);
      return;
    }
    local_30();
    return () => {
      local_12.current += 1;
      local_27();
    };
  }, [arg, local_30, local_27]);
  return {
    phase: local_2,
    payload: local_4,
    secondsLeft: local_6,
    error: local_8,
    needsManualRefresh: local_10,
    refresh: local_32,
    submitCaptcha: local_31,
  };
}
const local_f7bfcf88 = "c_panel";
const local_a5365002 = "c_codeBox";
const local_e834c3c0 = "c_code";
const local_3434b8f0 = "c_placeholder";
const local_672a1b2c = "c_overlay";
const local_f6e05cc5 = "c_refreshButton";
const local_39cc7174 = "c_resumeButton";
const local_ee7a6f6b = "c_spinner";
const local_ca66b2a4 = "c_hint";
const local_c279be5b = "c_hintActive";
const local_92418e80 = {
  panel: local_f7bfcf88,
  codeBox: local_a5365002,
  code: local_e834c3c0,
  placeholder: local_3434b8f0,
  overlay: local_672a1b2c,
  refreshButton: local_f6e05cc5,
  resumeButton: local_39cc7174,
  spinner: local_ee7a6f6b,
  hint: local_ca66b2a4,
  hintActive: local_c279be5b,
};
export function fn_a32f7904({ enabled: arg, caption: arg_2 = "" }) {
  const {
    phase: local,
    payload: local_2,
    error: local_3,
    needsManualRefresh: local_4,
    refresh: local_5,
    submitCaptcha: local_6,
  } = fn_093db101(arg);
  const [local_7, local_8] = imported_5(false);
  imported_8(() => {
    if (local !== "captcha") {
      local_8(false);
    }
  }, [local]);
  const local_9 =
    local === "captcha"
      ? (local_3 ?? "Пройдите проверку")
      : local === "scanned"
        ? "Подтвердите вход на телефоне"
        : local === "authorizing"
          ? "Входим…"
          : "";
  return imported("div", {
    className: local_92418e80.panel,
    children: [
      imported("div", {
        className: local_92418e80.codeBox,
        children: [
          local_2
            ? imported(fn_b07908df, {
                value: local_2,
                size: 200,
                className: local_92418e80.code,
              })
            : imported("div", {
                className: local_92418e80.placeholder,
                "aria-hidden": "true",
              }),
          local === "loading" &&
            imported("div", {
              className: local_92418e80.spinner,
              "aria-label": "Готовим код",
            }),
          local_4 &&
            imported("div", {
              className: local_92418e80.overlay,
              children: imported("button", {
                type: "button",
                className: local_92418e80.refreshButton,
                onClick: local_5,
                "aria-label": "Обновить код",
                title: "Обновить код",
                children: imported(local_6b16155b, {
                  size: 22,
                }),
              }),
            }),
          local === "captcha" &&
            local_7 &&
            !local_4 &&
            imported("div", {
              className: local_92418e80.overlay,
              children: imported("button", {
                type: "button",
                className: local_92418e80.resumeButton,
                onClick: () => local_8(false),
                children: "Пройти проверку",
              }),
            }),
        ],
      }),
      imported("p", {
        className: `${local_92418e80.hint} ${local_9 ? local_92418e80.hintActive : ""}`,
        "aria-live": "polite",
        children: local_9 || arg_2,
      }),
      imported(imported_10, {
        isOpen: local === "captcha" && !local_7,
        onClose: () => local_8(true),
        onVerify: local_6,
        action: "qr_login",
      }),
    ],
  });
}
