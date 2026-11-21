import {
  symbol_022 as imported,
  V as imported_2,
  symbol_024 as imported_3,
  symbol_025 as imported_4,
} from "../entry.js";
const local_f50950e4 = new imported_4(1, 300 * 1000);
const local_f50950e4_2 = new imported_4(1, 300 * 1000);
const local_c07ef0a9 = "data";
export const local_abafb970 = {
  async getTrendingHashtags(arg = 10) {
    const local = local_f50950e4.get(local_c07ef0a9);
    if (local) {
      return local;
    }
    const local_2 = await imported.get(
      `${imported_2.hashtags.trending}?limit=${arg}`,
    );
    let local_3;
    if (local_2.data?.hashtags) {
      local_3 = local_2.data.hashtags;
    } else if (Array.isArray(local_2.hashtags)) {
      local_3 = local_2.hashtags;
    } else if (Array.isArray(local_2.data)) {
      local_3 = local_2.data;
    } else {
      local_3 = [];
    }
    const local_4 = local_3.map((arg) => ({
      ...arg,
      count: arg.count ?? arg.postsCount ?? 0,
    }));
    local_f50950e4.set(local_c07ef0a9, local_4);
    return local_4;
  },
  async getPopularAvatars() {
    const local = local_f50950e4_2.get(local_c07ef0a9);
    if (local) {
      return local;
    }
    const local_2 = await imported.get(imported_2.users.topClans);
    const local_3 = (local_2.clans || local_2.data || []).map((arg) => ({
      ...arg,
      count: arg.count ?? arg.memberCount ?? 0,
    }));
    local_f50950e4_2.set(local_c07ef0a9, local_3);
    return local_3;
  },
  async globalSearch(arg, arg_2 = 5, arg_3 = 5) {
    const local = new URLSearchParams({
      q: arg,
      userLimit: String(arg_2),
      hashtagLimit: String(arg_3),
    });
    const local_2 = await imported.get(
      `${imported_2.search.global}?${local.toString()}`,
    );
    const local_3 = local_2.data ?? local_2;
    return {
      users: (local_3.users ?? []).map((arg) => ({
        ...arg,
        halloween: imported_3(arg.halloween),
      })),
      hashtags: (local_3.hashtags ?? []).map((arg) => ({
        ...arg,
        count: arg.count ?? arg.postsCount ?? 0,
      })),
    };
  },
};
