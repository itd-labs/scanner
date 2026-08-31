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
export const local_348b752a = [
  {
    u: "1F383",
    s: "jack_o_lantern",
  },
  {
    u: "1F384",
    s: "christmas_tree",
  },
  {
    u: "1F386",
    s: "fireworks",
  },
  {
    u: "1F387",
    s: "sparkler",
  },
  {
    u: "1F9E8",
    s: "firecracker",
  },
  {
    u: "2728",
    s: "sparkles",
  },
  {
    u: "1F388",
    s: "balloon",
  },
  {
    u: "1F389",
    s: "tada",
  },
  {
    u: "1F38A",
    s: "confetti_ball",
  },
  {
    u: "1F38B",
    s: "tanabata_tree",
  },
  {
    u: "1F38D",
    s: "bamboo",
  },
  {
    u: "1F38E",
    s: "dolls",
  },
  {
    u: "1F38F",
    s: "flags",
  },
  {
    u: "1F390",
    s: "wind_chime",
  },
  {
    u: "1F391",
    s: "rice_scene",
  },
  {
    u: "1F9E7",
    s: "red_envelope",
  },
  {
    u: "1F380",
    s: "ribbon",
  },
  {
    u: "1F381",
    s: "gift",
  },
  {
    u: "1F397-FE0F",
    s: "reminder_ribbon",
  },
  {
    u: "1F39F-FE0F",
    s: "admission_tickets",
  },
  {
    u: "1F3AB",
    s: "ticket",
  },
  {
    u: "1F396-FE0F",
    s: "medal",
  },
  {
    u: "1F3C6",
    s: "trophy",
  },
  {
    u: "1F3C5",
    s: "sports_medal",
  },
  {
    u: "1F947",
    s: "first_place_medal",
  },
  {
    u: "1F948",
    s: "second_place_medal",
  },
  {
    u: "1F949",
    s: "third_place_medal",
  },
  {
    u: "26BD",
    s: "soccer",
  },
  {
    u: "26BE",
    s: "baseball",
  },
  {
    u: "1F94E",
    s: "softball",
  },
  {
    u: "1F3C0",
    s: "basketball",
  },
  {
    u: "1F3D0",
    s: "volleyball",
  },
  {
    u: "1F3C8",
    s: "football",
  },
  {
    u: "1F3C9",
    s: "rugby_football",
  },
  {
    u: "1F3BE",
    s: "tennis",
  },
  {
    u: "1F94F",
    s: "flying_disc",
  },
  {
    u: "1F3B3",
    s: "bowling",
  },
  {
    u: "1F3CF",
    s: "cricket_bat_and_ball",
  },
  {
    u: "1F3D1",
    s: "field_hockey_stick_and_ball",
  },
  {
    u: "1F3D2",
    s: "ice_hockey_stick_and_puck",
  },
  {
    u: "1F94D",
    s: "lacrosse",
  },
  {
    u: "1F3D3",
    s: "table_tennis_paddle_and_ball",
  },
  {
    u: "1F3F8",
    s: "badminton_racquet_and_shuttlecock",
  },
  {
    u: "1F94A",
    s: "boxing_glove",
  },
  {
    u: "1F94B",
    s: "martial_arts_uniform",
  },
  {
    u: "1F945",
    s: "goal_net",
  },
  {
    u: "26F3",
    s: "golf",
  },
  {
    u: "26F8-FE0F",
    s: "ice_skate",
  },
  {
    u: "1F3A3",
    s: "fishing_pole_and_fish",
  },
  {
    u: "1F93F",
    s: "diving_mask",
  },
  {
    u: "1F3BD",
    s: "running_shirt_with_sash",
  },
  {
    u: "1F3BF",
    s: "ski",
  },
  {
    u: "1F6F7",
    s: "sled",
  },
  {
    u: "1F94C",
    s: "curling_stone",
  },
  {
    u: "1F3AF",
    s: "dart",
  },
  {
    u: "1FA80",
    s: "yo-yo",
  },
  {
    u: "1FA81",
    s: "kite",
  },
  {
    u: "1F52B",
    s: "gun",
  },
  {
    u: "1F3B1",
    s: "8ball",
  },
  {
    u: "1F52E",
    s: "crystal_ball",
  },
  {
    u: "1FA84",
    s: "magic_wand",
  },
  {
    u: "1F3AE",
    s: "video_game",
  },
  {
    u: "1F579-FE0F",
    s: "joystick",
  },
  {
    u: "1F3B0",
    s: "slot_machine",
  },
  {
    u: "1F3B2",
    s: "game_die",
  },
  {
    u: "1F9E9",
    s: "jigsaw",
  },
  {
    u: "1F9F8",
    s: "teddy_bear",
  },
  {
    u: "1FA85",
    s: "pinata",
  },
  {
    u: "1FAA9",
    s: "mirror_ball",
  },
  {
    u: "1FA86",
    s: "nesting_dolls",
  },
  {
    u: "2660-FE0F",
    s: "spades",
  },
  {
    u: "2665-FE0F",
    s: "hearts",
  },
  {
    u: "2666-FE0F",
    s: "diamonds",
  },
  {
    u: "2663-FE0F",
    s: "clubs",
  },
  {
    u: "265F-FE0F",
    s: "chess_pawn",
  },
  {
    u: "1F0CF",
    s: "black_joker",
  },
  {
    u: "1F004",
    s: "mahjong",
  },
  {
    u: "1F3B4",
    s: "flower_playing_cards",
  },
  {
    u: "1F3AD",
    s: "performing_arts",
  },
  {
    u: "1F5BC-FE0F",
    s: "frame_with_picture",
  },
  {
    u: "1F3A8",
    s: "art",
  },
  {
    u: "1F9F5",
    s: "thread",
  },
  {
    u: "1FAA1",
    s: "sewing_needle",
  },
  {
    u: "1F9F6",
    s: "yarn",
  },
  {
    u: "1FAA2",
    s: "knot",
  },
];
export const local_4dbbe0df = [
  {
    u: "1F453",
    s: "eyeglasses",
  },
  {
    u: "1F576-FE0F",
    s: "dark_sunglasses",
  },
  {
    u: "1F97D",
    s: "goggles",
  },
  {
    u: "1F97C",
    s: "lab_coat",
  },
  {
    u: "1F9BA",
    s: "safety_vest",
  },
  {
    u: "1F454",
    s: "necktie",
  },
  {
    u: "1F455",
    s: ["shirt", "tshirt"],
  },
  {
    u: "1F456",
    s: "jeans",
  },
  {
    u: "1F9E3",
    s: "scarf",
  },
  {
    u: "1F9E4",
    s: "gloves",
  },
  {
    u: "1F9E5",
    s: "coat",
  },
  {
    u: "1F9E6",
    s: "socks",
  },
  {
    u: "1F457",
    s: "dress",
  },
  {
    u: "1F458",
    s: "kimono",
  },
  {
    u: "1F97B",
    s: "sari",
  },
  {
    u: "1FA71",
    s: "one-piece_swimsuit",
  },
  {
    u: "1FA72",
    s: "briefs",
  },
  {
    u: "1FA73",
    s: "shorts",
  },
  {
    u: "1F459",
    s: "bikini",
  },
  {
    u: "1F45A",
    s: "womans_clothes",
  },
  {
    u: "1FAAD",
    s: "folding_hand_fan",
  },
  {
    u: "1F45B",
    s: "purse",
  },
  {
    u: "1F45C",
    s: "handbag",
  },
  {
    u: "1F45D",
    s: "pouch",
  },
  {
    u: "1F6CD-FE0F",
    s: "shopping_bags",
  },
  {
    u: "1F392",
    s: "school_satchel",
  },
  {
    u: "1FA74",
    s: "thong_sandal",
  },
  {
    u: "1F45E",
    s: ["mans_shoe", "shoe"],
  },
  {
    u: "1F45F",
    s: "athletic_shoe",
  },
  {
    u: "1F97E",
    s: "hiking_boot",
  },
  {
    u: "1F97F",
    s: "womans_flat_shoe",
  },
  {
    u: "1F460",
    s: "high_heel",
  },
  {
    u: "1F461",
    s: "sandal",
  },
  {
    u: "1FA70",
    s: "ballet_shoes",
  },
  {
    u: "1F462",
    s: "boot",
  },
  {
    u: "1FAAE",
    s: "hair_pick",
  },
  {
    u: "1F451",
    s: "crown",
  },
  {
    u: "1F452",
    s: "womans_hat",
  },
  {
    u: "1F3A9",
    s: "tophat",
  },
  {
    u: "1F393",
    s: "mortar_board",
  },
  {
    u: "1F9E2",
    s: "billed_cap",
  },
  {
    u: "1FA96",
    s: "military_helmet",
  },
  {
    u: "26D1-FE0F",
    s: "helmet_with_white_cross",
  },
  {
    u: "1F4FF",
    s: "prayer_beads",
  },
  {
    u: "1F484",
    s: "lipstick",
  },
  {
    u: "1F48D",
    s: "ring",
  },
  {
    u: "1F48E",
    s: "gem",
  },
  {
    u: "1F507",
    s: "mute",
  },
  {
    u: "1F508",
    s: "speaker",
  },
  {
    u: "1F509",
    s: "sound",
  },
  {
    u: "1F50A",
    s: "loud_sound",
  },
  {
    u: "1F4E2",
    s: "loudspeaker",
  },
  {
    u: "1F4E3",
    s: "mega",
  },
  {
    u: "1F4EF",
    s: "postal_horn",
  },
  {
    u: "1F514",
    s: "bell",
  },
  {
    u: "1F515",
    s: "no_bell",
  },
  {
    u: "1F3BC",
    s: "musical_score",
  },
  {
    u: "1F3B5",
    s: "musical_note",
  },
  {
    u: "1F3B6",
    s: "notes",
  },
  {
    u: "1F399-FE0F",
    s: "studio_microphone",
  },
  {
    u: "1F39A-FE0F",
    s: "level_slider",
  },
  {
    u: "1F39B-FE0F",
    s: "control_knobs",
  },
  {
    u: "1F3A4",
    s: "microphone",
  },
  {
    u: "1F3A7",
    s: "headphones",
  },
  {
    u: "1F4FB",
    s: "radio",
  },
  {
    u: "1F3B7",
    s: "saxophone",
  },
  {
    u: "1FA97",
    s: "accordion",
  },
  {
    u: "1F3B8",
    s: "guitar",
  },
  {
    u: "1F3B9",
    s: "musical_keyboard",
  },
  {
    u: "1F3BA",
    s: "trumpet",
  },
  {
    u: "1F3BB",
    s: "violin",
  },
  {
    u: "1FA95",
    s: "banjo",
  },
  {
    u: "1F941",
    s: "drum_with_drumsticks",
  },
  {
    u: "1FA98",
    s: "long_drum",
  },
  {
    u: "1FA87",
    s: "maracas",
  },
  {
    u: "1FA88",
    s: "flute",
  },
  {
    u: "1FA89",
    s: "harp",
  },
  {
    u: "1F4F1",
    s: "iphone",
  },
  {
    u: "1F4F2",
    s: "calling",
  },
  {
    u: "260E-FE0F",
    s: ["phone", "telephone"],
  },
  {
    u: "1F4DE",
    s: "telephone_receiver",
  },
  {
    u: "1F4DF",
    s: "pager",
  },
  {
    u: "1F4E0",
    s: "fax",
  },
  {
    u: "1F50B",
    s: "battery",
  },
  {
    u: "1FAAB",
    s: "low_battery",
  },
  {
    u: "1F50C",
    s: "electric_plug",
  },
  {
    u: "1F4BB",
    s: "computer",
  },
  {
    u: "1F5A5-FE0F",
    s: "desktop_computer",
  },
  {
    u: "1F5A8-FE0F",
    s: "printer",
  },
  {
    u: "2328-FE0F",
    s: "keyboard",
  },
  {
    u: "1F5B1-FE0F",
    s: "three_button_mouse",
  },
  {
    u: "1F5B2-FE0F",
    s: "trackball",
  },
  {
    u: "1F4BD",
    s: "minidisc",
  },
  {
    u: "1F4BE",
    s: "floppy_disk",
  },
  {
    u: "1F4BF",
    s: "cd",
  },
  {
    u: "1F4C0",
    s: "dvd",
  },
  {
    u: "1F9EE",
    s: "abacus",
  },
  {
    u: "1F3A5",
    s: "movie_camera",
  },
  {
    u: "1F39E-FE0F",
    s: "film_frames",
  },
  {
    u: "1F4FD-FE0F",
    s: "film_projector",
  },
  {
    u: "1F3AC",
    s: "clapper",
  },
  {
    u: "1F4FA",
    s: "tv",
  },
  {
    u: "1F4F7",
    s: "camera",
  },
  {
    u: "1F4F8",
    s: "camera_with_flash",
  },
  {
    u: "1F4F9",
    s: "video_camera",
  },
  {
    u: "1F4FC",
    s: "vhs",
  },
  {
    u: "1F50D",
    s: "mag",
  },
  {
    u: "1F50E",
    s: "mag_right",
  },
  {
    u: "1F56F-FE0F",
    s: "candle",
  },
  {
    u: "1F4A1",
    s: "bulb",
  },
  {
    u: "1F526",
    s: "flashlight",
  },
  {
    u: "1F3EE",
    s: ["izakaya_lantern", "lantern"],
  },
  {
    u: "1FA94",
    s: "diya_lamp",
  },
  {
    u: "1F4D4",
    s: "notebook_with_decorative_cover",
  },
  {
    u: "1F4D5",
    s: "closed_book",
  },
  {
    u: "1F4D6",
    s: ["book", "open_book"],
  },
  {
    u: "1F4D7",
    s: "green_book",
  },
  {
    u: "1F4D8",
    s: "blue_book",
  },
  {
    u: "1F4D9",
    s: "orange_book",
  },
  {
    u: "1F4DA",
    s: "books",
  },
  {
    u: "1F4D3",
    s: "notebook",
  },
  {
    u: "1F4D2",
    s: "ledger",
  },
  {
    u: "1F4C3",
    s: "page_with_curl",
  },
  {
    u: "1F4DC",
    s: "scroll",
  },
  {
    u: "1F4C4",
    s: "page_facing_up",
  },
  {
    u: "1F4F0",
    s: "newspaper",
  },
  {
    u: "1F5DE-FE0F",
    s: "rolled_up_newspaper",
  },
  {
    u: "1F4D1",
    s: "bookmark_tabs",
  },
  {
    u: "1F516",
    s: "bookmark",
  },
  {
    u: "1F3F7-FE0F",
    s: "label",
  },
  {
    u: "1F4B0",
    s: "moneybag",
  },
  {
    u: "1FA99",
    s: "coin",
  },
  {
    u: "1F4B4",
    s: "yen",
  },
  {
    u: "1F4B5",
    s: "dollar",
  },
  {
    u: "1F4B6",
    s: "euro",
  },
  {
    u: "1F4B7",
    s: "pound",
  },
  {
    u: "1F4B8",
    s: "money_with_wings",
  },
  {
    u: "1F4B3",
    s: "credit_card",
  },
  {
    u: "1F9FE",
    s: "receipt",
  },
  {
    u: "1F4B9",
    s: "chart",
  },
  {
    u: "2709-FE0F",
    s: ["email", "envelope"],
  },
  {
    u: "1F4E7",
    s: "e-mail",
  },
  {
    u: "1F4E8",
    s: "incoming_envelope",
  },
  {
    u: "1F4E9",
    s: "envelope_with_arrow",
  },
  {
    u: "1F4E4",
    s: "outbox_tray",
  },
  {
    u: "1F4E5",
    s: "inbox_tray",
  },
  {
    u: "1F4E6",
    s: "package",
  },
  {
    u: "1F4EB",
    s: "mailbox",
  },
  {
    u: "1F4EA",
    s: "mailbox_closed",
  },
  {
    u: "1F4EC",
    s: "mailbox_with_mail",
  },
  {
    u: "1F4ED",
    s: "mailbox_with_no_mail",
  },
  {
    u: "1F4EE",
    s: "postbox",
  },
  {
    u: "1F5F3-FE0F",
    s: "ballot_box_with_ballot",
  },
  {
    u: "270F-FE0F",
    s: "pencil2",
  },
  {
    u: "2712-FE0F",
    s: "black_nib",
  },
  {
    u: "1F58B-FE0F",
    s: "lower_left_fountain_pen",
  },
  {
    u: "1F58A-FE0F",
    s: "lower_left_ballpoint_pen",
  },
  {
    u: "1F58C-FE0F",
    s: "lower_left_paintbrush",
  },
  {
    u: "1F58D-FE0F",
    s: "lower_left_crayon",
  },
  {
    u: "1F4DD",
    s: ["memo", "pencil"],
  },
  {
    u: "1F4BC",
    s: "briefcase",
  },
  {
    u: "1F4C1",
    s: "file_folder",
  },
  {
    u: "1F4C2",
    s: "open_file_folder",
  },
  {
    u: "1F5C2-FE0F",
    s: "card_index_dividers",
  },
  {
    u: "1F4C5",
    s: "date",
  },
  {
    u: "1F4C6",
    s: "calendar",
  },
  {
    u: "1F5D2-FE0F",
    s: "spiral_note_pad",
  },
  {
    u: "1F5D3-FE0F",
    s: "spiral_calendar_pad",
  },
  {
    u: "1F4C7",
    s: "card_index",
  },
  {
    u: "1F4C8",
    s: "chart_with_upwards_trend",
  },
  {
    u: "1F4C9",
    s: "chart_with_downwards_trend",
  },
  {
    u: "1F4CA",
    s: "bar_chart",
  },
  {
    u: "1F4CB",
    s: "clipboard",
  },
  {
    u: "1F4CC",
    s: "pushpin",
  },
  {
    u: "1F4CD",
    s: "round_pushpin",
  },
  {
    u: "1F4CE",
    s: "paperclip",
  },
  {
    u: "1F587-FE0F",
    s: "linked_paperclips",
  },
  {
    u: "1F4CF",
    s: "straight_ruler",
  },
  {
    u: "1F4D0",
    s: "triangular_ruler",
  },
  {
    u: "2702-FE0F",
    s: "scissors",
  },
  {
    u: "1F5C3-FE0F",
    s: "card_file_box",
  },
  {
    u: "1F5C4-FE0F",
    s: "file_cabinet",
  },
  {
    u: "1F5D1-FE0F",
    s: "wastebasket",
  },
  {
    u: "1F512",
    s: "lock",
  },
  {
    u: "1F513",
    s: "unlock",
  },
  {
    u: "1F50F",
    s: "lock_with_ink_pen",
  },
  {
    u: "1F510",
    s: "closed_lock_with_key",
  },
  {
    u: "1F511",
    s: "key",
  },
  {
    u: "1F5DD-FE0F",
    s: "old_key",
  },
  {
    u: "1F528",
    s: "hammer",
  },
  {
    u: "1FA93",
    s: "axe",
  },
  {
    u: "26CF-FE0F",
    s: "pick",
  },
  {
    u: "2692-FE0F",
    s: "hammer_and_pick",
  },
  {
    u: "1F6E0-FE0F",
    s: "hammer_and_wrench",
  },
  {
    u: "1F5E1-FE0F",
    s: "dagger_knife",
  },
  {
    u: "2694-FE0F",
    s: "crossed_swords",
  },
  {
    u: "1F4A3",
    s: "bomb",
  },
  {
    u: "1FA83",
    s: "boomerang",
  },
  {
    u: "1F3F9",
    s: "bow_and_arrow",
  },
  {
    u: "1F6E1-FE0F",
    s: "shield",
  },
  {
    u: "1FA9A",
    s: "carpentry_saw",
  },
  {
    u: "1F527",
    s: "wrench",
  },
  {
    u: "1FA9B",
    s: "screwdriver",
  },
  {
    u: "1F529",
    s: "nut_and_bolt",
  },
  {
    u: "2699-FE0F",
    s: "gear",
  },
  {
    u: "1F5DC-FE0F",
    s: "compression",
  },
  {
    u: "2696-FE0F",
    s: "scales",
  },
  {
    u: "1F9AF",
    s: "probing_cane",
  },
  {
    u: "1F517",
    s: "link",
  },
  {
    u: "26D3-FE0F-200D-1F4A5",
    s: "broken_chain",
  },
  {
    u: "26D3-FE0F",
    s: "chains",
  },
  {
    u: "1FA9D",
    s: "hook",
  },
  {
    u: "1F9F0",
    s: "toolbox",
  },
  {
    u: "1F9F2",
    s: "magnet",
  },
  {
    u: "1FA9C",
    s: "ladder",
  },
  {
    u: "1FA8F",
    s: "shovel",
  },
  {
    u: "2697-FE0F",
    s: "alembic",
  },
  {
    u: "1F9EA",
    s: "test_tube",
  },
  {
    u: "1F9EB",
    s: "petri_dish",
  },
  {
    u: "1F9EC",
    s: "dna",
  },
  {
    u: "1F52C",
    s: "microscope",
  },
  {
    u: "1F52D",
    s: "telescope",
  },
  {
    u: "1F4E1",
    s: "satellite_antenna",
  },
  {
    u: "1F489",
    s: "syringe",
  },
  {
    u: "1FA78",
    s: "drop_of_blood",
  },
  {
    u: "1F48A",
    s: "pill",
  },
  {
    u: "1FA79",
    s: "adhesive_bandage",
  },
  {
    u: "1FA7C",
    s: "crutch",
  },
  {
    u: "1FA7A",
    s: "stethoscope",
  },
  {
    u: "1FA7B",
    s: "x-ray",
  },
  {
    u: "1F6AA",
    s: "door",
  },
  {
    u: "1F6D7",
    s: "elevator",
  },
  {
    u: "1FA9E",
    s: "mirror",
  },
  {
    u: "1FA9F",
    s: "window",
  },
  {
    u: "1F6CF-FE0F",
    s: "bed",
  },
  {
    u: "1F6CB-FE0F",
    s: "couch_and_lamp",
  },
  {
    u: "1FA91",
    s: "chair",
  },
  {
    u: "1F6BD",
    s: "toilet",
  },
  {
    u: "1FAA0",
    s: "plunger",
  },
  {
    u: "1F6BF",
    s: "shower",
  },
  {
    u: "1F6C1",
    s: "bathtub",
  },
  {
    u: "1FAA4",
    s: "mouse_trap",
  },
  {
    u: "1FA92",
    s: "razor",
  },
  {
    u: "1F9F4",
    s: "lotion_bottle",
  },
  {
    u: "1F9F7",
    s: "safety_pin",
  },
  {
    u: "1F9F9",
    s: "broom",
  },
  {
    u: "1F9FA",
    s: "basket",
  },
  {
    u: "1F9FB",
    s: "roll_of_paper",
  },
  {
    u: "1FAA3",
    s: "bucket",
  },
  {
    u: "1F9FC",
    s: "soap",
  },
  {
    u: "1FAE7",
    s: "bubbles",
  },
  {
    u: "1FAA5",
    s: "toothbrush",
  },
  {
    u: "1F9FD",
    s: "sponge",
  },
  {
    u: "1F9EF",
    s: "fire_extinguisher",
  },
  {
    u: "1F6D2",
    s: "shopping_trolley",
  },
  {
    u: "1F6AC",
    s: "smoking",
  },
  {
    u: "26B0-FE0F",
    s: "coffin",
  },
  {
    u: "1FAA6",
    s: "headstone",
  },
  {
    u: "26B1-FE0F",
    s: "funeral_urn",
  },
  {
    u: "1F9FF",
    s: "nazar_amulet",
  },
  {
    u: "1FAAC",
    s: "hamsa",
  },
  {
    u: "1F5FF",
    s: "moyai",
  },
  {
    u: "1FAA7",
    s: "placard",
  },
  {
    u: "1FAAA",
    s: "identification_card",
  },
];
export const local_0fd8eb79 = [
  {
    u: "1F3E7",
    s: "atm",
  },
  {
    u: "1F6AE",
    s: "put_litter_in_its_place",
  },
  {
    u: "1F6B0",
    s: "potable_water",
  },
  {
    u: "267F",
    s: "wheelchair",
  },
  {
    u: "1F6B9",
    s: "mens",
  },
  {
    u: "1F6BA",
    s: "womens",
  },
  {
    u: "1F6BB",
    s: "restroom",
  },
  {
    u: "1F6BC",
    s: "baby_symbol",
  },
  {
    u: "1F6BE",
    s: "wc",
  },
  {
    u: "1F6C2",
    s: "passport_control",
  },
  {
    u: "1F6C3",
    s: "customs",
  },
  {
    u: "1F6C4",
    s: "baggage_claim",
  },
  {
    u: "1F6C5",
    s: "left_luggage",
  },
  {
    u: "26A0-FE0F",
    s: "warning",
  },
  {
    u: "1F6B8",
    s: "children_crossing",
  },
  {
    u: "26D4",
    s: "no_entry",
  },
  {
    u: "1F6AB",
    s: "no_entry_sign",
  },
  {
    u: "1F6B3",
    s: "no_bicycles",
  },
  {
    u: "1F6AD",
    s: "no_smoking",
  },
  {
    u: "1F6AF",
    s: "do_not_litter",
  },
  {
    u: "1F6B1",
    s: "non-potable_water",
  },
  {
    u: "1F6B7",
    s: "no_pedestrians",
  },
  {
    u: "1F4F5",
    s: "no_mobile_phones",
  },
  {
    u: "1F51E",
    s: "underage",
  },
  {
    u: "2622-FE0F",
    s: "radioactive_sign",
  },
  {
    u: "2623-FE0F",
    s: "biohazard_sign",
  },
  {
    u: "2B06-FE0F",
    s: "arrow_up",
  },
  {
    u: "2197-FE0F",
    s: "arrow_upper_right",
  },
  {
    u: "27A1-FE0F",
    s: "arrow_right",
  },
  {
    u: "2198-FE0F",
    s: "arrow_lower_right",
  },
  {
    u: "2B07-FE0F",
    s: "arrow_down",
  },
  {
    u: "2199-FE0F",
    s: "arrow_lower_left",
  },
  {
    u: "2B05-FE0F",
    s: "arrow_left",
  },
  {
    u: "2196-FE0F",
    s: "arrow_upper_left",
  },
  {
    u: "2195-FE0F",
    s: "arrow_up_down",
  },
  {
    u: "2194-FE0F",
    s: "left_right_arrow",
  },
  {
    u: "21A9-FE0F",
    s: "leftwards_arrow_with_hook",
  },
  {
    u: "21AA-FE0F",
    s: "arrow_right_hook",
  },
  {
    u: "2934-FE0F",
    s: "arrow_heading_up",
  },
  {
    u: "2935-FE0F",
    s: "arrow_heading_down",
  },
  {
    u: "1F503",
    s: "arrows_clockwise",
  },
  {
    u: "1F504",
    s: "arrows_counterclockwise",
  },
  {
    u: "1F519",
    s: "back",
  },
  {
    u: "1F51A",
    s: "end",
  },
  {
    u: "1F51B",
    s: "on",
  },
  {
    u: "1F51C",
    s: "soon",
  },
  {
    u: "1F51D",
    s: "top",
  },
  {
    u: "1F6D0",
    s: "place_of_worship",
  },
  {
    u: "269B-FE0F",
    s: "atom_symbol",
  },
  {
    u: "1F549-FE0F",
    s: "om_symbol",
  },
  {
    u: "2721-FE0F",
    s: "star_of_david",
  },
  {
    u: "2638-FE0F",
    s: "wheel_of_dharma",
  },
  {
    u: "262F-FE0F",
    s: "yin_yang",
  },
  {
    u: "271D-FE0F",
    s: "latin_cross",
  },
  {
    u: "2626-FE0F",
    s: "orthodox_cross",
  },
  {
    u: "262A-FE0F",
    s: "star_and_crescent",
  },
  {
    u: "262E-FE0F",
    s: "peace_symbol",
  },
  {
    u: "1F54E",
    s: "menorah_with_nine_branches",
  },
  {
    u: "1F52F",
    s: "six_pointed_star",
  },
  {
    u: "1FAAF",
    s: "khanda",
  },
  {
    u: "2648",
    s: "aries",
  },
  {
    u: "2649",
    s: "taurus",
  },
  {
    u: "264A",
    s: "gemini",
  },
  {
    u: "264B",
    s: "cancer",
  },
  {
    u: "264C",
    s: "leo",
  },
  {
    u: "264D",
    s: "virgo",
  },
  {
    u: "264E",
    s: "libra",
  },
  {
    u: "264F",
    s: "scorpius",
  },
  {
    u: "2650",
    s: "sagittarius",
  },
  {
    u: "2651",
    s: "capricorn",
  },
  {
    u: "2652",
    s: "aquarius",
  },
  {
    u: "2653",
    s: "pisces",
  },
  {
    u: "26CE",
    s: "ophiuchus",
  },
  {
    u: "1F500",
    s: "twisted_rightwards_arrows",
  },
  {
    u: "1F501",
    s: "repeat",
  },
  {
    u: "1F502",
    s: "repeat_one",
  },
  {
    u: "25B6-FE0F",
    s: "arrow_forward",
  },
  {
    u: "23E9",
    s: "fast_forward",
  },
  {
    u: "23ED-FE0F",
    s: "black_right_pointing_double_triangle_with_vertical_bar",
  },
  {
    u: "23EF-FE0F",
    s: "black_right_pointing_triangle_with_double_vertical_bar",
  },
  {
    u: "25C0-FE0F",
    s: "arrow_backward",
  },
  {
    u: "23EA",
    s: "rewind",
  },
  {
    u: "23EE-FE0F",
    s: "black_left_pointing_double_triangle_with_vertical_bar",
  },
  {
    u: "1F53C",
    s: "arrow_up_small",
  },
  {
    u: "23EB",
    s: "arrow_double_up",
  },
  {
    u: "1F53D",
    s: "arrow_down_small",
  },
  {
    u: "23EC",
    s: "arrow_double_down",
  },
  {
    u: "23F8-FE0F",
    s: "double_vertical_bar",
  },
  {
    u: "23F9-FE0F",
    s: "black_square_for_stop",
  },
  {
    u: "23FA-FE0F",
    s: "black_circle_for_record",
  },
  {
    u: "23CF-FE0F",
    s: "eject",
  },
  {
    u: "1F3A6",
    s: "cinema",
  },
  {
    u: "1F505",
    s: "low_brightness",
  },
  {
    u: "1F506",
    s: "high_brightness",
  },
  {
    u: "1F4F6",
    s: "signal_strength",
  },
  {
    u: "1F6DC",
    s: "wireless",
  },
  {
    u: "1F4F3",
    s: "vibration_mode",
  },
  {
    u: "1F4F4",
    s: "mobile_phone_off",
  },
  {
    u: "26A7-FE0F",
    s: "transgender_symbol",
  },
  {
    u: "2716-FE0F",
    s: "heavy_multiplication_x",
  },
  {
    u: "2795",
    s: "heavy_plus_sign",
  },
  {
    u: "2796",
    s: "heavy_minus_sign",
  },
  {
    u: "2797",
    s: "heavy_division_sign",
  },
  {
    u: "1F7F0",
    s: "heavy_equals_sign",
  },
  {
    u: "267E-FE0F",
    s: "infinity",
  },
  {
    u: "203C-FE0F",
    s: "bangbang",
  },
  {
    u: "2049-FE0F",
    s: "interrobang",
  },
  {
    u: "2753",
    s: "question",
  },
  {
    u: "2754",
    s: "grey_question",
  },
  {
    u: "2755",
    s: "grey_exclamation",
  },
  {
    u: "2757",
    s: ["exclamation", "heavy_exclamation_mark"],
  },
  {
    u: "3030-FE0F",
    s: "wavy_dash",
  },
  {
    u: "1F4B1",
    s: "currency_exchange",
  },
  {
    u: "1F4B2",
    s: "heavy_dollar_sign",
  },
  {
    u: "267B-FE0F",
    s: "recycle",
  },
  {
    u: "269C-FE0F",
    s: "fleur_de_lis",
  },
  {
    u: "1F531",
    s: "trident",
  },
  {
    u: "1F4DB",
    s: "name_badge",
  },
  {
    u: "1F530",
    s: "beginner",
  },
  {
    u: "2B55",
    s: "o",
  },
  {
    u: "2705",
    s: "white_check_mark",
  },
  {
    u: "2611-FE0F",
    s: "ballot_box_with_check",
  },
  {
    u: "2714-FE0F",
    s: "heavy_check_mark",
  },
  {
    u: "274C",
    s: "x",
  },
  {
    u: "274E",
    s: "negative_squared_cross_mark",
  },
  {
    u: "27B0",
    s: "curly_loop",
  },
  {
    u: "27BF",
    s: "loop",
  },
  {
    u: "303D-FE0F",
    s: "part_alternation_mark",
  },
  {
    u: "2733-FE0F",
    s: "eight_spoked_asterisk",
  },
  {
    u: "2734-FE0F",
    s: "eight_pointed_black_star",
  },
  {
    u: "2747-FE0F",
    s: "sparkle",
  },
  {
    u: "00A9-FE0F",
    s: "copyright",
  },
  {
    u: "00AE-FE0F",
    s: "registered",
  },
  {
    u: "2122-FE0F",
    s: "tm",
  },
  {
    u: "1FADF",
    s: "splatter",
  },
  {
    u: "0023-FE0F-20E3",
    s: "hash",
  },
  {
    u: "002A-FE0F-20E3",
    s: "keycap_star",
  },
  {
    u: "0030-FE0F-20E3",
    s: "zero",
  },
  {
    u: "0031-FE0F-20E3",
    s: "one",
  },
  {
    u: "0032-FE0F-20E3",
    s: "two",
  },
  {
    u: "0033-FE0F-20E3",
    s: "three",
  },
  {
    u: "0034-FE0F-20E3",
    s: "four",
  },
  {
    u: "0035-FE0F-20E3",
    s: "five",
  },
  {
    u: "0036-FE0F-20E3",
    s: "six",
  },
  {
    u: "0037-FE0F-20E3",
    s: "seven",
  },
  {
    u: "0038-FE0F-20E3",
    s: "eight",
  },
  {
    u: "0039-FE0F-20E3",
    s: "nine",
  },
  {
    u: "1F51F",
    s: "keycap_ten",
  },
  {
    u: "1F520",
    s: "capital_abcd",
  },
  {
    u: "1F521",
    s: "abcd",
  },
  {
    u: "1F522",
    s: "1234",
  },
  {
    u: "1F523",
    s: "symbols",
  },
  {
    u: "1F524",
    s: "abc",
  },
  {
    u: "1F170-FE0F",
    s: "a",
  },
  {
    u: "1F18E",
    s: "ab",
  },
  {
    u: "1F171-FE0F",
    s: "b",
  },
  {
    u: "1F191",
    s: "cl",
  },
  {
    u: "1F192",
    s: "cool",
  },
  {
    u: "1F193",
    s: "free",
  },
  {
    u: "2139-FE0F",
    s: "information_source",
  },
  {
    u: "1F194",
    s: "id",
  },
  {
    u: "24C2-FE0F",
    s: "m",
  },
  {
    u: "1F195",
    s: "new",
  },
  {
    u: "1F196",
    s: "ng",
  },
  {
    u: "1F17E-FE0F",
    s: "o2",
  },
  {
    u: "1F197",
    s: "ok",
  },
  {
    u: "1F17F-FE0F",
    s: "parking",
  },
  {
    u: "1F198",
    s: "sos",
  },
  {
    u: "1F199",
    s: "up",
  },
  {
    u: "1F19A",
    s: "vs",
  },
  {
    u: "1F201",
    s: "koko",
  },
  {
    u: "1F202-FE0F",
    s: "sa",
  },
  {
    u: "1F237-FE0F",
    s: "u6708",
  },
  {
    u: "1F236",
    s: "u6709",
  },
  {
    u: "1F22F",
    s: "u6307",
  },
  {
    u: "1F250",
    s: "ideograph_advantage",
  },
  {
    u: "1F239",
    s: "u5272",
  },
  {
    u: "1F21A",
    s: "u7121",
  },
  {
    u: "1F232",
    s: "u7981",
  },
  {
    u: "1F251",
    s: "accept",
  },
  {
    u: "1F238",
    s: "u7533",
  },
  {
    u: "1F234",
    s: "u5408",
  },
  {
    u: "1F233",
    s: "u7a7a",
  },
  {
    u: "3297-FE0F",
    s: "congratulations",
  },
  {
    u: "3299-FE0F",
    s: "secret",
  },
  {
    u: "1F23A",
    s: "u55b6",
  },
  {
    u: "1F235",
    s: "u6e80",
  },
  {
    u: "1F534",
    s: "red_circle",
  },
  {
    u: "1F7E0",
    s: "large_orange_circle",
  },
  {
    u: "1F7E1",
    s: "large_yellow_circle",
  },
  {
    u: "1F7E2",
    s: "large_green_circle",
  },
  {
    u: "1F535",
    s: "large_blue_circle",
  },
  {
    u: "1F7E3",
    s: "large_purple_circle",
  },
  {
    u: "1F7E4",
    s: "large_brown_circle",
  },
  {
    u: "26AB",
    s: "black_circle",
  },
  {
    u: "26AA",
    s: "white_circle",
  },
  {
    u: "1F7E5",
    s: "large_red_square",
  },
  {
    u: "1F7E7",
    s: "large_orange_square",
  },
  {
    u: "1F7E8",
    s: "large_yellow_square",
  },
  {
    u: "1F7E9",
    s: "large_green_square",
  },
  {
    u: "1F7E6",
    s: "large_blue_square",
  },
  {
    u: "1F7EA",
    s: "large_purple_square",
  },
  {
    u: "1F7EB",
    s: "large_brown_square",
  },
  {
    u: "2B1B",
    s: "black_large_square",
  },
  {
    u: "2B1C",
    s: "white_large_square",
  },
  {
    u: "25FC-FE0F",
    s: "black_medium_square",
  },
  {
    u: "25FB-FE0F",
    s: "white_medium_square",
  },
  {
    u: "25FE",
    s: "black_medium_small_square",
  },
  {
    u: "25FD",
    s: "white_medium_small_square",
  },
  {
    u: "25AA-FE0F",
    s: "black_small_square",
  },
  {
    u: "25AB-FE0F",
    s: "white_small_square",
  },
  {
    u: "1F536",
    s: "large_orange_diamond",
  },
  {
    u: "1F537",
    s: "large_blue_diamond",
  },
  {
    u: "1F538",
    s: "small_orange_diamond",
  },
  {
    u: "1F539",
    s: "small_blue_diamond",
  },
  {
    u: "1F53A",
    s: "small_red_triangle",
  },
  {
    u: "1F53B",
    s: "small_red_triangle_down",
  },
  {
    u: "1F4A0",
    s: "diamond_shape_with_a_dot_inside",
  },
  {
    u: "1F518",
    s: "radio_button",
  },
  {
    u: "1F533",
    s: "white_square_button",
  },
  {
    u: "1F532",
    s: "black_square_button",
  },
];
export const local_64e89f9e = [
  {
    u: "1F3C1",
    s: "checkered_flag",
  },
  {
    u: "1F6A9",
    s: "triangular_flag_on_post",
  },
  {
    u: "1F38C",
    s: "crossed_flags",
  },
  {
    u: "1F3F4",
    s: "waving_black_flag",
  },
  {
    u: "1F3F3-FE0F",
    s: "waving_white_flag",
  },
  {
    u: "1F3F3-FE0F-200D-1F308",
    s: "rainbow-flag",
  },
  {
    u: "1F3F3-FE0F-200D-26A7-FE0F",
    s: "transgender_flag",
  },
  {
    u: "1F3F4-200D-2620-FE0F",
    s: "pirate_flag",
  },
  {
    u: "1F1E6-1F1E8",
    s: "flag-ac",
  },
  {
    u: "1F1E6-1F1E9",
    s: "flag-ad",
  },
  {
    u: "1F1E6-1F1EA",
    s: "flag-ae",
  },
  {
    u: "1F1E6-1F1EB",
    s: "flag-af",
  },
  {
    u: "1F1E6-1F1EC",
    s: "flag-ag",
  },
  {
    u: "1F1E6-1F1EE",
    s: "flag-ai",
  },
  {
    u: "1F1E6-1F1F1",
    s: "flag-al",
  },
  {
    u: "1F1E6-1F1F2",
    s: "flag-am",
  },
  {
    u: "1F1E6-1F1F4",
    s: "flag-ao",
  },
  {
    u: "1F1E6-1F1F6",
    s: "flag-aq",
  },
  {
    u: "1F1E6-1F1F7",
    s: "flag-ar",
  },
  {
    u: "1F1E6-1F1F8",
    s: "flag-as",
  },
  {
    u: "1F1E6-1F1F9",
    s: "flag-at",
  },
  {
    u: "1F1E6-1F1FA",
    s: "flag-au",
  },
  {
    u: "1F1E6-1F1FC",
    s: "flag-aw",
  },
  {
    u: "1F1E6-1F1FD",
    s: "flag-ax",
  },
  {
    u: "1F1E6-1F1FF",
    s: "flag-az",
  },
  {
    u: "1F1E7-1F1E6",
    s: "flag-ba",
  },
  {
    u: "1F1E7-1F1E7",
    s: "flag-bb",
  },
  {
    u: "1F1E7-1F1E9",
    s: "flag-bd",
  },
  {
    u: "1F1E7-1F1EA",
    s: "flag-be",
  },
  {
    u: "1F1E7-1F1EB",
    s: "flag-bf",
  },
  {
    u: "1F1E7-1F1EC",
    s: "flag-bg",
  },
  {
    u: "1F1E7-1F1ED",
    s: "flag-bh",
  },
  {
    u: "1F1E7-1F1EE",
    s: "flag-bi",
  },
  {
    u: "1F1E7-1F1EF",
    s: "flag-bj",
  },
  {
    u: "1F1E7-1F1F1",
    s: "flag-bl",
  },
  {
    u: "1F1E7-1F1F2",
    s: "flag-bm",
  },
  {
    u: "1F1E7-1F1F3",
    s: "flag-bn",
  },
  {
    u: "1F1E7-1F1F4",
    s: "flag-bo",
  },
  {
    u: "1F1E7-1F1F6",
    s: "flag-bq",
  },
  {
    u: "1F1E7-1F1F7",
    s: "flag-br",
  },
  {
    u: "1F1E7-1F1F8",
    s: "flag-bs",
  },
  {
    u: "1F1E7-1F1F9",
    s: "flag-bt",
  },
  {
    u: "1F1E7-1F1FB",
    s: "flag-bv",
  },
  {
    u: "1F1E7-1F1FC",
    s: "flag-bw",
  },
  {
    u: "1F1E7-1F1FE",
    s: "flag-by",
  },
  {
    u: "1F1E7-1F1FF",
    s: "flag-bz",
  },
  {
    u: "1F1E8-1F1E6",
    s: "flag-ca",
  },
  {
    u: "1F1E8-1F1E8",
    s: "flag-cc",
  },
  {
    u: "1F1E8-1F1E9",
    s: "flag-cd",
  },
  {
    u: "1F1E8-1F1EB",
    s: "flag-cf",
  },
  {
    u: "1F1E8-1F1EC",
    s: "flag-cg",
  },
  {
    u: "1F1E8-1F1ED",
    s: "flag-ch",
  },
  {
    u: "1F1E8-1F1EE",
    s: "flag-ci",
  },
  {
    u: "1F1E8-1F1F0",
    s: "flag-ck",
  },
  {
    u: "1F1E8-1F1F1",
    s: "flag-cl",
  },
  {
    u: "1F1E8-1F1F2",
    s: "flag-cm",
  },
  {
    u: "1F1E8-1F1F3",
    s: ["cn", "flag-cn"],
  },
  {
    u: "1F1E8-1F1F4",
    s: "flag-co",
  },
  {
    u: "1F1E8-1F1F5",
    s: "flag-cp",
  },
  {
    u: "1F1E8-1F1F6",
    s: "flag-sark",
  },
  {
    u: "1F1E8-1F1F7",
    s: "flag-cr",
  },
  {
    u: "1F1E8-1F1FA",
    s: "flag-cu",
  },
  {
    u: "1F1E8-1F1FB",
    s: "flag-cv",
  },
  {
    u: "1F1E8-1F1FC",
    s: "flag-cw",
  },
  {
    u: "1F1E8-1F1FD",
    s: "flag-cx",
  },
  {
    u: "1F1E8-1F1FE",
    s: "flag-cy",
  },
  {
    u: "1F1E8-1F1FF",
    s: "flag-cz",
  },
  {
    u: "1F1E9-1F1EA",
    s: ["de", "flag-de"],
  },
  {
    u: "1F1E9-1F1EC",
    s: "flag-dg",
  },
  {
    u: "1F1E9-1F1EF",
    s: "flag-dj",
  },
  {
    u: "1F1E9-1F1F0",
    s: "flag-dk",
  },
  {
    u: "1F1E9-1F1F2",
    s: "flag-dm",
  },
  {
    u: "1F1E9-1F1F4",
    s: "flag-do",
  },
  {
    u: "1F1E9-1F1FF",
    s: "flag-dz",
  },
  {
    u: "1F1EA-1F1E6",
    s: "flag-ea",
  },
  {
    u: "1F1EA-1F1E8",
    s: "flag-ec",
  },
  {
    u: "1F1EA-1F1EA",
    s: "flag-ee",
  },
  {
    u: "1F1EA-1F1EC",
    s: "flag-eg",
  },
  {
    u: "1F1EA-1F1ED",
    s: "flag-eh",
  },
  {
    u: "1F1EA-1F1F7",
    s: "flag-er",
  },
  {
    u: "1F1EA-1F1F8",
    s: ["es", "flag-es"],
  },
  {
    u: "1F1EA-1F1F9",
    s: "flag-et",
  },
  {
    u: "1F1EA-1F1FA",
    s: "flag-eu",
  },
  {
    u: "1F1EB-1F1EE",
    s: "flag-fi",
  },
  {
    u: "1F1EB-1F1EF",
    s: "flag-fj",
  },
  {
    u: "1F1EB-1F1F0",
    s: "flag-fk",
  },
  {
    u: "1F1EB-1F1F2",
    s: "flag-fm",
  },
  {
    u: "1F1EB-1F1F4",
    s: "flag-fo",
  },
  {
    u: "1F1EB-1F1F7",
    s: ["fr", "flag-fr"],
  },
  {
    u: "1F1EC-1F1E6",
    s: "flag-ga",
  },
  {
    u: "1F1EC-1F1E7",
    s: ["gb", "uk", "flag-gb"],
  },
  {
    u: "1F1EC-1F1E9",
    s: "flag-gd",
  },
  {
    u: "1F1EC-1F1EA",
    s: "flag-ge",
  },
  {
    u: "1F1EC-1F1EB",
    s: "flag-gf",
  },
  {
    u: "1F1EC-1F1EC",
    s: "flag-gg",
  },
  {
    u: "1F1EC-1F1ED",
    s: "flag-gh",
  },
  {
    u: "1F1EC-1F1EE",
    s: "flag-gi",
  },
  {
    u: "1F1EC-1F1F1",
    s: "flag-gl",
  },
  {
    u: "1F1EC-1F1F2",
    s: "flag-gm",
  },
  {
    u: "1F1EC-1F1F3",
    s: "flag-gn",
  },
  {
    u: "1F1EC-1F1F5",
    s: "flag-gp",
  },
  {
    u: "1F1EC-1F1F6",
    s: "flag-gq",
  },
  {
    u: "1F1EC-1F1F7",
    s: "flag-gr",
  },
  {
    u: "1F1EC-1F1F8",
    s: "flag-gs",
  },
  {
    u: "1F1EC-1F1F9",
    s: "flag-gt",
  },
  {
    u: "1F1EC-1F1FA",
    s: "flag-gu",
  },
  {
    u: "1F1EC-1F1FC",
    s: "flag-gw",
  },
  {
    u: "1F1EC-1F1FE",
    s: "flag-gy",
  },
  {
    u: "1F1ED-1F1F0",
    s: "flag-hk",
  },
  {
    u: "1F1ED-1F1F2",
    s: "flag-hm",
  },
  {
    u: "1F1ED-1F1F3",
    s: "flag-hn",
  },
  {
    u: "1F1ED-1F1F7",
    s: "flag-hr",
  },
  {
    u: "1F1ED-1F1F9",
    s: "flag-ht",
  },
  {
    u: "1F1ED-1F1FA",
    s: "flag-hu",
  },
  {
    u: "1F1EE-1F1E8",
    s: "flag-ic",
  },
  {
    u: "1F1EE-1F1E9",
    s: "flag-id",
  },
  {
    u: "1F1EE-1F1EA",
    s: "flag-ie",
  },
  {
    u: "1F1EE-1F1F1",
    s: "flag-il",
  },
  {
    u: "1F1EE-1F1F2",
    s: "flag-im",
  },
  {
    u: "1F1EE-1F1F3",
    s: "flag-in",
  },
  {
    u: "1F1EE-1F1F4",
    s: "flag-io",
  },
  {
    u: "1F1EE-1F1F6",
    s: "flag-iq",
  },
  {
    u: "1F1EE-1F1F7",
    s: "flag-ir",
  },
  {
    u: "1F1EE-1F1F8",
    s: "flag-is",
  },
  {
    u: "1F1EE-1F1F9",
    s: ["it", "flag-it"],
  },
  {
    u: "1F1EF-1F1EA",
    s: "flag-je",
  },
  {
    u: "1F1EF-1F1F2",
    s: "flag-jm",
  },
  {
    u: "1F1EF-1F1F4",
    s: "flag-jo",
  },
  {
    u: "1F1EF-1F1F5",
    s: ["jp", "flag-jp"],
  },
  {
    u: "1F1F0-1F1EA",
    s: "flag-ke",
  },
  {
    u: "1F1F0-1F1EC",
    s: "flag-kg",
  },
  {
    u: "1F1F0-1F1ED",
    s: "flag-kh",
  },
  {
    u: "1F1F0-1F1EE",
    s: "flag-ki",
  },
  {
    u: "1F1F0-1F1F2",
    s: "flag-km",
  },
  {
    u: "1F1F0-1F1F3",
    s: "flag-kn",
  },
  {
    u: "1F1F0-1F1F5",
    s: "flag-kp",
  },
  {
    u: "1F1F0-1F1F7",
    s: ["kr", "flag-kr"],
  },
  {
    u: "1F1F0-1F1FC",
    s: "flag-kw",
  },
  {
    u: "1F1F0-1F1FE",
    s: "flag-ky",
  },
  {
    u: "1F1F0-1F1FF",
    s: "flag-kz",
  },
  {
    u: "1F1F1-1F1E6",
    s: "flag-la",
  },
  {
    u: "1F1F1-1F1E7",
    s: "flag-lb",
  },
  {
    u: "1F1F1-1F1E8",
    s: "flag-lc",
  },
  {
    u: "1F1F1-1F1EE",
    s: "flag-li",
  },
  {
    u: "1F1F1-1F1F0",
    s: "flag-lk",
  },
  {
    u: "1F1F1-1F1F7",
    s: "flag-lr",
  },
  {
    u: "1F1F1-1F1F8",
    s: "flag-ls",
  },
  {
    u: "1F1F1-1F1F9",
    s: "flag-lt",
  },
  {
    u: "1F1F1-1F1FA",
    s: "flag-lu",
  },
  {
    u: "1F1F1-1F1FB",
    s: "flag-lv",
  },
  {
    u: "1F1F1-1F1FE",
    s: "flag-ly",
  },
  {
    u: "1F1F2-1F1E6",
    s: "flag-ma",
  },
  {
    u: "1F1F2-1F1E8",
    s: "flag-mc",
  },
  {
    u: "1F1F2-1F1E9",
    s: "flag-md",
  },
  {
    u: "1F1F2-1F1EA",
    s: "flag-me",
  },
  {
    u: "1F1F2-1F1EB",
    s: "flag-mf",
  },
  {
    u: "1F1F2-1F1EC",
    s: "flag-mg",
  },
  {
    u: "1F1F2-1F1ED",
    s: "flag-mh",
  },
  {
    u: "1F1F2-1F1F0",
    s: "flag-mk",
  },
  {
    u: "1F1F2-1F1F1",
    s: "flag-ml",
  },
  {
    u: "1F1F2-1F1F2",
    s: "flag-mm",
  },
  {
    u: "1F1F2-1F1F3",
    s: "flag-mn",
  },
  {
    u: "1F1F2-1F1F4",
    s: "flag-mo",
  },
  {
    u: "1F1F2-1F1F5",
    s: "flag-mp",
  },
  {
    u: "1F1F2-1F1F6",
    s: "flag-mq",
  },
  {
    u: "1F1F2-1F1F7",
    s: "flag-mr",
  },
  {
    u: "1F1F2-1F1F8",
    s: "flag-ms",
  },
  {
    u: "1F1F2-1F1F9",
    s: "flag-mt",
  },
  {
    u: "1F1F2-1F1FA",
    s: "flag-mu",
  },
  {
    u: "1F1F2-1F1FB",
    s: "flag-mv",
  },
  {
    u: "1F1F2-1F1FC",
    s: "flag-mw",
  },
  {
    u: "1F1F2-1F1FD",
    s: "flag-mx",
  },
  {
    u: "1F1F2-1F1FE",
    s: "flag-my",
  },
  {
    u: "1F1F2-1F1FF",
    s: "flag-mz",
  },
  {
    u: "1F1F3-1F1E6",
    s: "flag-na",
  },
  {
    u: "1F1F3-1F1E8",
    s: "flag-nc",
  },
  {
    u: "1F1F3-1F1EA",
    s: "flag-ne",
  },
  {
    u: "1F1F3-1F1EB",
    s: "flag-nf",
  },
  {
    u: "1F1F3-1F1EC",
    s: "flag-ng",
  },
  {
    u: "1F1F3-1F1EE",
    s: "flag-ni",
  },
  {
    u: "1F1F3-1F1F1",
    s: "flag-nl",
  },
  {
    u: "1F1F3-1F1F4",
    s: "flag-no",
  },
  {
    u: "1F1F3-1F1F5",
    s: "flag-np",
  },
  {
    u: "1F1F3-1F1F7",
    s: "flag-nr",
  },
  {
    u: "1F1F3-1F1FA",
    s: "flag-nu",
  },
  {
    u: "1F1F3-1F1FF",
    s: "flag-nz",
  },
  {
    u: "1F1F4-1F1F2",
    s: "flag-om",
  },
  {
    u: "1F1F5-1F1E6",
    s: "flag-pa",
  },
  {
    u: "1F1F5-1F1EA",
    s: "flag-pe",
  },
  {
    u: "1F1F5-1F1EB",
    s: "flag-pf",
  },
  {
    u: "1F1F5-1F1EC",
    s: "flag-pg",
  },
  {
    u: "1F1F5-1F1ED",
    s: "flag-ph",
  },
  {
    u: "1F1F5-1F1F0",
    s: "flag-pk",
  },
  {
    u: "1F1F5-1F1F1",
    s: "flag-pl",
  },
  {
    u: "1F1F5-1F1F2",
    s: "flag-pm",
  },
  {
    u: "1F1F5-1F1F3",
    s: "flag-pn",
  },
  {
    u: "1F1F5-1F1F7",
    s: "flag-pr",
  },
  {
    u: "1F1F5-1F1F8",
    s: "flag-ps",
  },
  {
    u: "1F1F5-1F1F9",
    s: "flag-pt",
  },
  {
    u: "1F1F5-1F1FC",
    s: "flag-pw",
  },
  {
    u: "1F1F5-1F1FE",
    s: "flag-py",
  },
  {
    u: "1F1F6-1F1E6",
    s: "flag-qa",
  },
  {
    u: "1F1F7-1F1EA",
    s: "flag-re",
  },
  {
    u: "1F1F7-1F1F4",
    s: "flag-ro",
  },
  {
    u: "1F1F7-1F1F8",
    s: "flag-rs",
  },
  {
    u: "1F1F7-1F1FA",
    s: ["ru", "flag-ru"],
  },
  {
    u: "1F1F7-1F1FC",
    s: "flag-rw",
  },
  {
    u: "1F1F8-1F1E6",
    s: "flag-sa",
  },
  {
    u: "1F1F8-1F1E7",
    s: "flag-sb",
  },
  {
    u: "1F1F8-1F1E8",
    s: "flag-sc",
  },
  {
    u: "1F1F8-1F1E9",
    s: "flag-sd",
  },
  {
    u: "1F1F8-1F1EA",
    s: "flag-se",
  },
  {
    u: "1F1F8-1F1EC",
    s: "flag-sg",
  },
  {
    u: "1F1F8-1F1ED",
    s: "flag-sh",
  },
  {
    u: "1F1F8-1F1EE",
    s: "flag-si",
  },
  {
    u: "1F1F8-1F1EF",
    s: "flag-sj",
  },
  {
    u: "1F1F8-1F1F0",
    s: "flag-sk",
  },
  {
    u: "1F1F8-1F1F1",
    s: "flag-sl",
  },
  {
    u: "1F1F8-1F1F2",
    s: "flag-sm",
  },
  {
    u: "1F1F8-1F1F3",
    s: "flag-sn",
  },
  {
    u: "1F1F8-1F1F4",
    s: "flag-so",
  },
  {
    u: "1F1F8-1F1F7",
    s: "flag-sr",
  },
  {
    u: "1F1F8-1F1F8",
    s: "flag-ss",
  },
  {
    u: "1F1F8-1F1F9",
    s: "flag-st",
  },
  {
    u: "1F1F8-1F1FB",
    s: "flag-sv",
  },
  {
    u: "1F1F8-1F1FD",
    s: "flag-sx",
  },
  {
    u: "1F1F8-1F1FE",
    s: "flag-sy",
  },
  {
    u: "1F1F8-1F1FF",
    s: "flag-sz",
  },
  {
    u: "1F1F9-1F1E6",
    s: "flag-ta",
  },
  {
    u: "1F1F9-1F1E8",
    s: "flag-tc",
  },
  {
    u: "1F1F9-1F1E9",
    s: "flag-td",
  },
  {
    u: "1F1F9-1F1EB",
    s: "flag-tf",
  },
  {
    u: "1F1F9-1F1EC",
    s: "flag-tg",
  },
  {
    u: "1F1F9-1F1ED",
    s: "flag-th",
  },
  {
    u: "1F1F9-1F1EF",
    s: "flag-tj",
  },
  {
    u: "1F1F9-1F1F0",
    s: "flag-tk",
  },
  {
    u: "1F1F9-1F1F1",
    s: "flag-tl",
  },
  {
    u: "1F1F9-1F1F2",
    s: "flag-tm",
  },
  {
    u: "1F1F9-1F1F3",
    s: "flag-tn",
  },
  {
    u: "1F1F9-1F1F4",
    s: "flag-to",
  },
  {
    u: "1F1F9-1F1F7",
    s: "flag-tr",
  },
  {
    u: "1F1F9-1F1F9",
    s: "flag-tt",
  },
  {
    u: "1F1F9-1F1FB",
    s: "flag-tv",
  },
  {
    u: "1F1F9-1F1FC",
    s: "flag-tw",
  },
  {
    u: "1F1F9-1F1FF",
    s: "flag-tz",
  },
  {
    u: "1F1FA-1F1E6",
    s: "flag-ua",
  },
  {
    u: "1F1FA-1F1EC",
    s: "flag-ug",
  },
  {
    u: "1F1FA-1F1F2",
    s: "flag-um",
  },
  {
    u: "1F1FA-1F1F3",
    s: "flag-un",
  },
  {
    u: "1F1FA-1F1F8",
    s: ["us", "flag-us"],
  },
  {
    u: "1F1FA-1F1FE",
    s: "flag-uy",
  },
  {
    u: "1F1FA-1F1FF",
    s: "flag-uz",
  },
  {
    u: "1F1FB-1F1E6",
    s: "flag-va",
  },
  {
    u: "1F1FB-1F1E8",
    s: "flag-vc",
  },
  {
    u: "1F1FB-1F1EA",
    s: "flag-ve",
  },
  {
    u: "1F1FB-1F1EC",
    s: "flag-vg",
  },
  {
    u: "1F1FB-1F1EE",
    s: "flag-vi",
  },
  {
    u: "1F1FB-1F1F3",
    s: "flag-vn",
  },
  {
    u: "1F1FB-1F1FA",
    s: "flag-vu",
  },
  {
    u: "1F1FC-1F1EB",
    s: "flag-wf",
  },
  {
    u: "1F1FC-1F1F8",
    s: "flag-ws",
  },
  {
    u: "1F1FD-1F1F0",
    s: "flag-xk",
  },
  {
    u: "1F1FE-1F1EA",
    s: "flag-ye",
  },
  {
    u: "1F1FE-1F1F9",
    s: "flag-yt",
  },
  {
    u: "1F1FF-1F1E6",
    s: "flag-za",
  },
  {
    u: "1F1FF-1F1F2",
    s: "flag-zm",
  },
  {
    u: "1F1FF-1F1FC",
    s: "flag-zw",
  },
  {
    u: "1F3F4-E0067-E0062-E0065-E006E-E0067-E007F",
    s: "flag-england",
  },
  {
    u: "1F3F4-E0067-E0062-E0073-E0063-E0074-E007F",
    s: "flag-scotland",
  },
  {
    u: "1F3F4-E0067-E0062-E0077-E006C-E0073-E007F",
    s: "flag-wales",
  },
];
const local_3189f019 = {
  "Smileys & Emotion": [
    {
      u: "1F600",
      s: "grinning",
    },
    {
      u: "1F603",
      s: "smiley",
    },
    {
      u: "1F604",
      s: "smile",
    },
    {
      u: "1F601",
      s: "grin",
    },
    {
      u: "1F606",
      s: ["laughing", "satisfied"],
    },
    {
      u: "1F605",
      s: "sweat_smile",
    },
    {
      u: "1F923",
      s: "rolling_on_the_floor_laughing",
    },
    {
      u: "1F602",
      s: "joy",
    },
    {
      u: "1F642",
      s: "slightly_smiling_face",
    },
    {
      u: "1F643",
      s: "upside_down_face",
    },
    {
      u: "1FAE0",
      s: "melting_face",
    },
    {
      u: "1F609",
      s: "wink",
    },
    {
      u: "1F60A",
      s: "blush",
    },
    {
      u: "1F607",
      s: "innocent",
    },
    {
      u: "1F970",
      s: "smiling_face_with_3_hearts",
    },
    {
      u: "1F60D",
      s: "heart_eyes",
    },
    {
      u: "1F929",
      s: ["star-struck", "grinning_face_with_star_eyes"],
    },
    {
      u: "1F618",
      s: "kissing_heart",
    },
    {
      u: "1F617",
      s: "kissing",
    },
    {
      u: "263A-FE0F",
      s: "relaxed",
    },
    {
      u: "1F61A",
      s: "kissing_closed_eyes",
    },
    {
      u: "1F619",
      s: "kissing_smiling_eyes",
    },
    {
      u: "1F972",
      s: "smiling_face_with_tear",
    },
    {
      u: "1F60B",
      s: "yum",
    },
    {
      u: "1F61B",
      s: "stuck_out_tongue",
    },
    {
      u: "1F61C",
      s: "stuck_out_tongue_winking_eye",
    },
    {
      u: "1F92A",
      s: ["zany_face", "grinning_face_with_one_large_and_one_small_eye"],
    },
    {
      u: "1F61D",
      s: "stuck_out_tongue_closed_eyes",
    },
    {
      u: "1F911",
      s: "money_mouth_face",
    },
    {
      u: "1F917",
      s: "hugging_face",
    },
    {
      u: "1F92D",
      s: [
        "face_with_hand_over_mouth",
        "smiling_face_with_smiling_eyes_and_hand_covering_mouth",
      ],
    },
    {
      u: "1FAE2",
      s: "face_with_open_eyes_and_hand_over_mouth",
    },
    {
      u: "1FAE3",
      s: "face_with_peeking_eye",
    },
    {
      u: "1F92B",
      s: ["shushing_face", "face_with_finger_covering_closed_lips"],
    },
    {
      u: "1F914",
      s: "thinking_face",
    },
    {
      u: "1FAE1",
      s: "saluting_face",
    },
    {
      u: "1F910",
      s: "zipper_mouth_face",
    },
    {
      u: "1F928",
      s: ["face_with_raised_eyebrow", "face_with_one_eyebrow_raised"],
    },
    {
      u: "1F610",
      s: "neutral_face",
    },
    {
      u: "1F611",
      s: "expressionless",
    },
    {
      u: "1F636",
      s: "no_mouth",
    },
    {
      u: "1FAE5",
      s: "dotted_line_face",
    },
    {
      u: "1F636-200D-1F32B-FE0F",
      s: "face_in_clouds",
    },
    {
      u: "1F60F",
      s: "smirk",
    },
    {
      u: "1F612",
      s: "unamused",
    },
    {
      u: "1F644",
      s: "face_with_rolling_eyes",
    },
    {
      u: "1F62C",
      s: "grimacing",
    },
    {
      u: "1F62E-200D-1F4A8",
      s: "face_exhaling",
    },
    {
      u: "1F925",
      s: "lying_face",
    },
    {
      u: "1FAE8",
      s: "shaking_face",
    },
    {
      u: "1F642-200D-2194-FE0F",
      s: "head_shaking_horizontally",
    },
    {
      u: "1F642-200D-2195-FE0F",
      s: "head_shaking_vertically",
    },
    {
      u: "1F60C",
      s: "relieved",
    },
    {
      u: "1F614",
      s: "pensive",
    },
    {
      u: "1F62A",
      s: "sleepy",
    },
    {
      u: "1F924",
      s: "drooling_face",
    },
    {
      u: "1F634",
      s: "sleeping",
    },
    {
      u: "1FAE9",
      s: "face_with_bags_under_eyes",
    },
    {
      u: "1F637",
      s: "mask",
    },
    {
      u: "1F912",
      s: "face_with_thermometer",
    },
    {
      u: "1F915",
      s: "face_with_head_bandage",
    },
    {
      u: "1F922",
      s: "nauseated_face",
    },
    {
      u: "1F92E",
      s: ["face_vomiting", "face_with_open_mouth_vomiting"],
    },
    {
      u: "1F927",
      s: "sneezing_face",
    },
    {
      u: "1F975",
      s: "hot_face",
    },
    {
      u: "1F976",
      s: "cold_face",
    },
    {
      u: "1F974",
      s: "woozy_face",
    },
    {
      u: "1F635",
      s: "dizzy_face",
    },
    {
      u: "1F635-200D-1F4AB",
      s: "face_with_spiral_eyes",
    },
    {
      u: "1F92F",
      s: ["exploding_head", "shocked_face_with_exploding_head"],
    },
    {
      u: "1F920",
      s: "face_with_cowboy_hat",
    },
    {
      u: "1F973",
      s: "partying_face",
    },
    {
      u: "1F978",
      s: "disguised_face",
    },
    {
      u: "1F60E",
      s: "sunglasses",
    },
    {
      u: "1F913",
      s: "nerd_face",
    },
    {
      u: "1F9D0",
      s: "face_with_monocle",
    },
    {
      u: "1F615",
      s: "confused",
    },
    {
      u: "1FAE4",
      s: "face_with_diagonal_mouth",
    },
    {
      u: "1F61F",
      s: "worried",
    },
    {
      u: "1F641",
      s: "slightly_frowning_face",
    },
    {
      u: "2639-FE0F",
      s: "white_frowning_face",
    },
    {
      u: "1F62E",
      s: "open_mouth",
    },
    {
      u: "1F62F",
      s: "hushed",
    },
    {
      u: "1F632",
      s: "astonished",
    },
    {
      u: "1F633",
      s: "flushed",
    },
    {
      u: "1F97A",
      s: "pleading_face",
    },
    {
      u: "1F979",
      s: "face_holding_back_tears",
    },
    {
      u: "1F626",
      s: "frowning",
    },
    {
      u: "1F627",
      s: "anguished",
    },
    {
      u: "1F628",
      s: "fearful",
    },
    {
      u: "1F630",
      s: "cold_sweat",
    },
    {
      u: "1F625",
      s: "disappointed_relieved",
    },
    {
      u: "1F622",
      s: "cry",
    },
    {
      u: "1F62D",
      s: "sob",
    },
    {
      u: "1F631",
      s: "scream",
    },
    {
      u: "1F616",
      s: "confounded",
    },
    {
      u: "1F623",
      s: "persevere",
    },
    {
      u: "1F61E",
      s: "disappointed",
    },
    {
      u: "1F613",
      s: "sweat",
    },
    {
      u: "1F629",
      s: "weary",
    },
    {
      u: "1F62B",
      s: "tired_face",
    },
    {
      u: "1F971",
      s: "yawning_face",
    },
    {
      u: "1F624",
      s: "triumph",
    },
    {
      u: "1F621",
      s: "rage",
    },
    {
      u: "1F620",
      s: "angry",
    },
    {
      u: "1F92C",
      s: [
        "face_with_symbols_on_mouth",
        "serious_face_with_symbols_covering_mouth",
      ],
    },
    {
      u: "1F608",
      s: "smiling_imp",
    },
    {
      u: "1F47F",
      s: "imp",
    },
    {
      u: "1F480",
      s: "skull",
    },
    {
      u: "2620-FE0F",
      s: "skull_and_crossbones",
    },
    {
      u: "1F4A9",
      s: ["hankey", "poop", "shit"],
    },
    {
      u: "1F921",
      s: "clown_face",
    },
    {
      u: "1F479",
      s: "japanese_ogre",
    },
    {
      u: "1F47A",
      s: "japanese_goblin",
    },
    {
      u: "1F47B",
      s: "ghost",
    },
    {
      u: "1F47D",
      s: "alien",
    },
    {
      u: "1F47E",
      s: "space_invader",
    },
    {
      u: "1F916",
      s: "robot_face",
    },
    {
      u: "1F63A",
      s: "smiley_cat",
    },
    {
      u: "1F638",
      s: "smile_cat",
    },
    {
      u: "1F639",
      s: "joy_cat",
    },
    {
      u: "1F63B",
      s: "heart_eyes_cat",
    },
    {
      u: "1F63C",
      s: "smirk_cat",
    },
    {
      u: "1F63D",
      s: "kissing_cat",
    },
    {
      u: "1F640",
      s: "scream_cat",
    },
    {
      u: "1F63F",
      s: "crying_cat_face",
    },
    {
      u: "1F63E",
      s: "pouting_cat",
    },
    {
      u: "1F648",
      s: "see_no_evil",
    },
    {
      u: "1F649",
      s: "hear_no_evil",
    },
    {
      u: "1F64A",
      s: "speak_no_evil",
    },
    {
      u: "1F48C",
      s: "love_letter",
    },
    {
      u: "1F498",
      s: "cupid",
    },
    {
      u: "1F49D",
      s: "gift_heart",
    },
    {
      u: "1F496",
      s: "sparkling_heart",
    },
    {
      u: "1F497",
      s: "heartpulse",
    },
    {
      u: "1F493",
      s: "heartbeat",
    },
    {
      u: "1F49E",
      s: "revolving_hearts",
    },
    {
      u: "1F495",
      s: "two_hearts",
    },
    {
      u: "1F49F",
      s: "heart_decoration",
    },
    {
      u: "2763-FE0F",
      s: "heavy_heart_exclamation_mark_ornament",
    },
    {
      u: "1F494",
      s: "broken_heart",
    },
    {
      u: "2764-FE0F-200D-1F525",
      s: "heart_on_fire",
    },
    {
      u: "2764-FE0F-200D-1FA79",
      s: "mending_heart",
    },
    {
      u: "2764-FE0F",
      s: "heart",
    },
    {
      u: "1FA77",
      s: "pink_heart",
    },
    {
      u: "1F9E1",
      s: "orange_heart",
    },
    {
      u: "1F49B",
      s: "yellow_heart",
    },
    {
      u: "1F49A",
      s: "green_heart",
    },
    {
      u: "1F499",
      s: "blue_heart",
    },
    {
      u: "1FA75",
      s: "light_blue_heart",
    },
    {
      u: "1F49C",
      s: "purple_heart",
    },
    {
      u: "1F90E",
      s: "brown_heart",
    },
    {
      u: "1F5A4",
      s: "black_heart",
    },
    {
      u: "1FA76",
      s: "grey_heart",
    },
    {
      u: "1F90D",
      s: "white_heart",
    },
    {
      u: "1F48B",
      s: "kiss",
    },
    {
      u: "1F4AF",
      s: "100",
    },
    {
      u: "1F4A2",
      s: "anger",
    },
    {
      u: "1F4A5",
      s: ["boom", "collision"],
    },
    {
      u: "1F4AB",
      s: "dizzy",
    },
    {
      u: "1F4A6",
      s: "sweat_drops",
    },
    {
      u: "1F4A8",
      s: "dash",
    },
    {
      u: "1F573-FE0F",
      s: "hole",
    },
    {
      u: "1F4AC",
      s: "speech_balloon",
    },
    {
      u: "1F441-FE0F-200D-1F5E8-FE0F",
      s: "eye-in-speech-bubble",
    },
    {
      u: "1F5E8-FE0F",
      s: "left_speech_bubble",
    },
    {
      u: "1F5EF-FE0F",
      s: "right_anger_bubble",
    },
    {
      u: "1F4AD",
      s: "thought_balloon",
    },
    {
      u: "1F4A4",
      s: "zzz",
    },
  ],
  "People & Body": JSON.parse(
    '[{"u":"1F44B","s":"wave","v":{"1F3FB":"1F44B-1F3FB","1F3FC":"1F44B-1F3FC","1F3FD":"1F44B-1F3FD","1F3FE":"1F44B-1F3FE","1F3FF":"1F44B-1F3FF"}},{"u":"1F91A","s":"raised_back_of_hand","v":{"1F3FB":"1F91A-1F3FB","1F3FC":"1F91A-1F3FC","1F3FD":"1F91A-1F3FD","1F3FE":"1F91A-1F3FE","1F3FF":"1F91A-1F3FF"}},{"u":"1F590-FE0F","s":"raised_hand_with_fingers_splayed","v":{"1F3FB":"1F590-1F3FB","1F3FC":"1F590-1F3FC","1F3FD":"1F590-1F3FD","1F3FE":"1F590-1F3FE","1F3FF":"1F590-1F3FF"}},{"u":"270B","s":["hand","raised_hand"],"v":{"1F3FB":"270B-1F3FB","1F3FC":"270B-1F3FC","1F3FD":"270B-1F3FD","1F3FE":"270B-1F3FE","1F3FF":"270B-1F3FF"}},{"u":"1F596","s":"spock-hand","v":{"1F3FB":"1F596-1F3FB","1F3FC":"1F596-1F3FC","1F3FD":"1F596-1F3FD","1F3FE":"1F596-1F3FE","1F3FF":"1F596-1F3FF"}},{"u":"1FAF1","s":"rightwards_hand","v":{"1F3FB":"1FAF1-1F3FB","1F3FC":"1FAF1-1F3FC","1F3FD":"1FAF1-1F3FD","1F3FE":"1FAF1-1F3FE","1F3FF":"1FAF1-1F3FF"}},{"u":"1FAF2","s":"leftwards_hand","v":{"1F3FB":"1FAF2-1F3FB","1F3FC":"1FAF2-1F3FC","1F3FD":"1FAF2-1F3FD","1F3FE":"1FAF2-1F3FE","1F3FF":"1FAF2-1F3FF"}},{"u":"1FAF3","s":"palm_down_hand","v":{"1F3FB":"1FAF3-1F3FB","1F3FC":"1FAF3-1F3FC","1F3FD":"1FAF3-1F3FD","1F3FE":"1FAF3-1F3FE","1F3FF":"1FAF3-1F3FF"}},{"u":"1FAF4","s":"palm_up_hand","v":{"1F3FB":"1FAF4-1F3FB","1F3FC":"1FAF4-1F3FC","1F3FD":"1FAF4-1F3FD","1F3FE":"1FAF4-1F3FE","1F3FF":"1FAF4-1F3FF"}},{"u":"1FAF7","s":"leftwards_pushing_hand","v":{"1F3FB":"1FAF7-1F3FB","1F3FC":"1FAF7-1F3FC","1F3FD":"1FAF7-1F3FD","1F3FE":"1FAF7-1F3FE","1F3FF":"1FAF7-1F3FF"}},{"u":"1FAF8","s":"rightwards_pushing_hand","v":{"1F3FB":"1FAF8-1F3FB","1F3FC":"1FAF8-1F3FC","1F3FD":"1FAF8-1F3FD","1F3FE":"1FAF8-1F3FE","1F3FF":"1FAF8-1F3FF"}},{"u":"1F44C","s":"ok_hand","v":{"1F3FB":"1F44C-1F3FB","1F3FC":"1F44C-1F3FC","1F3FD":"1F44C-1F3FD","1F3FE":"1F44C-1F3FE","1F3FF":"1F44C-1F3FF"}},{"u":"1F90C","s":"pinched_fingers","v":{"1F3FB":"1F90C-1F3FB","1F3FC":"1F90C-1F3FC","1F3FD":"1F90C-1F3FD","1F3FE":"1F90C-1F3FE","1F3FF":"1F90C-1F3FF"}},{"u":"1F90F","s":"pinching_hand","v":{"1F3FB":"1F90F-1F3FB","1F3FC":"1F90F-1F3FC","1F3FD":"1F90F-1F3FD","1F3FE":"1F90F-1F3FE","1F3FF":"1F90F-1F3FF"}},{"u":"270C-FE0F","s":"v","v":{"1F3FB":"270C-1F3FB","1F3FC":"270C-1F3FC","1F3FD":"270C-1F3FD","1F3FE":"270C-1F3FE","1F3FF":"270C-1F3FF"}},{"u":"1F91E","s":["crossed_fingers","hand_with_index_and_middle_fingers_crossed"],"v":{"1F3FB":"1F91E-1F3FB","1F3FC":"1F91E-1F3FC","1F3FD":"1F91E-1F3FD","1F3FE":"1F91E-1F3FE","1F3FF":"1F91E-1F3FF"}},{"u":"1FAF0","s":"hand_with_index_finger_and_thumb_crossed","v":{"1F3FB":"1FAF0-1F3FB","1F3FC":"1FAF0-1F3FC","1F3FD":"1FAF0-1F3FD","1F3FE":"1FAF0-1F3FE","1F3FF":"1FAF0-1F3FF"}},{"u":"1F91F","s":"i_love_you_hand_sign","v":{"1F3FB":"1F91F-1F3FB","1F3FC":"1F91F-1F3FC","1F3FD":"1F91F-1F3FD","1F3FE":"1F91F-1F3FE","1F3FF":"1F91F-1F3FF"}},{"u":"1F918","s":["the_horns","sign_of_the_horns"],"v":{"1F3FB":"1F918-1F3FB","1F3FC":"1F918-1F3FC","1F3FD":"1F918-1F3FD","1F3FE":"1F918-1F3FE","1F3FF":"1F918-1F3FF"}},{"u":"1F919","s":"call_me_hand","v":{"1F3FB":"1F919-1F3FB","1F3FC":"1F919-1F3FC","1F3FD":"1F919-1F3FD","1F3FE":"1F919-1F3FE","1F3FF":"1F919-1F3FF"}},{"u":"1F448","s":"point_left","v":{"1F3FB":"1F448-1F3FB","1F3FC":"1F448-1F3FC","1F3FD":"1F448-1F3FD","1F3FE":"1F448-1F3FE","1F3FF":"1F448-1F3FF"}},{"u":"1F449","s":"point_right","v":{"1F3FB":"1F449-1F3FB","1F3FC":"1F449-1F3FC","1F3FD":"1F449-1F3FD","1F3FE":"1F449-1F3FE","1F3FF":"1F449-1F3FF"}},{"u":"1F446","s":"point_up_2","v":{"1F3FB":"1F446-1F3FB","1F3FC":"1F446-1F3FC","1F3FD":"1F446-1F3FD","1F3FE":"1F446-1F3FE","1F3FF":"1F446-1F3FF"}},{"u":"1F595","s":["middle_finger","reversed_hand_with_middle_finger_extended"],"v":{"1F3FB":"1F595-1F3FB","1F3FC":"1F595-1F3FC","1F3FD":"1F595-1F3FD","1F3FE":"1F595-1F3FE","1F3FF":"1F595-1F3FF"}},{"u":"1F447","s":"point_down","v":{"1F3FB":"1F447-1F3FB","1F3FC":"1F447-1F3FC","1F3FD":"1F447-1F3FD","1F3FE":"1F447-1F3FE","1F3FF":"1F447-1F3FF"}},{"u":"261D-FE0F","s":"point_up","v":{"1F3FB":"261D-1F3FB","1F3FC":"261D-1F3FC","1F3FD":"261D-1F3FD","1F3FE":"261D-1F3FE","1F3FF":"261D-1F3FF"}},{"u":"1FAF5","s":"index_pointing_at_the_viewer","v":{"1F3FB":"1FAF5-1F3FB","1F3FC":"1FAF5-1F3FC","1F3FD":"1FAF5-1F3FD","1F3FE":"1FAF5-1F3FE","1F3FF":"1FAF5-1F3FF"}},{"u":"1F44D","s":["+1","thumbsup"],"v":{"1F3FB":"1F44D-1F3FB","1F3FC":"1F44D-1F3FC","1F3FD":"1F44D-1F3FD","1F3FE":"1F44D-1F3FE","1F3FF":"1F44D-1F3FF"}},{"u":"1F44E","s":["-1","thumbsdown"],"v":{"1F3FB":"1F44E-1F3FB","1F3FC":"1F44E-1F3FC","1F3FD":"1F44E-1F3FD","1F3FE":"1F44E-1F3FE","1F3FF":"1F44E-1F3FF"}},{"u":"270A","s":"fist","v":{"1F3FB":"270A-1F3FB","1F3FC":"270A-1F3FC","1F3FD":"270A-1F3FD","1F3FE":"270A-1F3FE","1F3FF":"270A-1F3FF"}},{"u":"1F44A","s":["facepunch","punch"],"v":{"1F3FB":"1F44A-1F3FB","1F3FC":"1F44A-1F3FC","1F3FD":"1F44A-1F3FD","1F3FE":"1F44A-1F3FE","1F3FF":"1F44A-1F3FF"}},{"u":"1F91B","s":"left-facing_fist","v":{"1F3FB":"1F91B-1F3FB","1F3FC":"1F91B-1F3FC","1F3FD":"1F91B-1F3FD","1F3FE":"1F91B-1F3FE","1F3FF":"1F91B-1F3FF"}},{"u":"1F91C","s":"right-facing_fist","v":{"1F3FB":"1F91C-1F3FB","1F3FC":"1F91C-1F3FC","1F3FD":"1F91C-1F3FD","1F3FE":"1F91C-1F3FE","1F3FF":"1F91C-1F3FF"}},{"u":"1F44F","s":"clap","v":{"1F3FB":"1F44F-1F3FB","1F3FC":"1F44F-1F3FC","1F3FD":"1F44F-1F3FD","1F3FE":"1F44F-1F3FE","1F3FF":"1F44F-1F3FF"}},{"u":"1F64C","s":"raised_hands","v":{"1F3FB":"1F64C-1F3FB","1F3FC":"1F64C-1F3FC","1F3FD":"1F64C-1F3FD","1F3FE":"1F64C-1F3FE","1F3FF":"1F64C-1F3FF"}},{"u":"1FAF6","s":"heart_hands","v":{"1F3FB":"1FAF6-1F3FB","1F3FC":"1FAF6-1F3FC","1F3FD":"1FAF6-1F3FD","1F3FE":"1FAF6-1F3FE","1F3FF":"1FAF6-1F3FF"}},{"u":"1F450","s":"open_hands","v":{"1F3FB":"1F450-1F3FB","1F3FC":"1F450-1F3FC","1F3FD":"1F450-1F3FD","1F3FE":"1F450-1F3FE","1F3FF":"1F450-1F3FF"}},{"u":"1F932","s":"palms_up_together","v":{"1F3FB":"1F932-1F3FB","1F3FC":"1F932-1F3FC","1F3FD":"1F932-1F3FD","1F3FE":"1F932-1F3FE","1F3FF":"1F932-1F3FF"}},{"u":"1F91D","s":"handshake","v":{"1F3FB":"1F91D-1F3FB","1F3FC":"1F91D-1F3FC","1F3FD":"1F91D-1F3FD","1F3FE":"1F91D-1F3FE","1F3FF":"1F91D-1F3FF","1F3FB-1F3FC":"1FAF1-1F3FB-200D-1FAF2-1F3FC","1F3FB-1F3FD":"1FAF1-1F3FB-200D-1FAF2-1F3FD","1F3FB-1F3FE":"1FAF1-1F3FB-200D-1FAF2-1F3FE","1F3FB-1F3FF":"1FAF1-1F3FB-200D-1FAF2-1F3FF","1F3FC-1F3FB":"1FAF1-1F3FC-200D-1FAF2-1F3FB","1F3FC-1F3FD":"1FAF1-1F3FC-200D-1FAF2-1F3FD","1F3FC-1F3FE":"1FAF1-1F3FC-200D-1FAF2-1F3FE","1F3FC-1F3FF":"1FAF1-1F3FC-200D-1FAF2-1F3FF","1F3FD-1F3FB":"1FAF1-1F3FD-200D-1FAF2-1F3FB","1F3FD-1F3FC":"1FAF1-1F3FD-200D-1FAF2-1F3FC","1F3FD-1F3FE":"1FAF1-1F3FD-200D-1FAF2-1F3FE","1F3FD-1F3FF":"1FAF1-1F3FD-200D-1FAF2-1F3FF","1F3FE-1F3FB":"1FAF1-1F3FE-200D-1FAF2-1F3FB","1F3FE-1F3FC":"1FAF1-1F3FE-200D-1FAF2-1F3FC","1F3FE-1F3FD":"1FAF1-1F3FE-200D-1FAF2-1F3FD","1F3FE-1F3FF":"1FAF1-1F3FE-200D-1FAF2-1F3FF","1F3FF-1F3FB":"1FAF1-1F3FF-200D-1FAF2-1F3FB","1F3FF-1F3FC":"1FAF1-1F3FF-200D-1FAF2-1F3FC","1F3FF-1F3FD":"1FAF1-1F3FF-200D-1FAF2-1F3FD","1F3FF-1F3FE":"1FAF1-1F3FF-200D-1FAF2-1F3FE"}},{"u":"1F64F","s":"pray","v":{"1F3FB":"1F64F-1F3FB","1F3FC":"1F64F-1F3FC","1F3FD":"1F64F-1F3FD","1F3FE":"1F64F-1F3FE","1F3FF":"1F64F-1F3FF"}},{"u":"270D-FE0F","s":"writing_hand","v":{"1F3FB":"270D-1F3FB","1F3FC":"270D-1F3FC","1F3FD":"270D-1F3FD","1F3FE":"270D-1F3FE","1F3FF":"270D-1F3FF"}},{"u":"1F485","s":"nail_care","v":{"1F3FB":"1F485-1F3FB","1F3FC":"1F485-1F3FC","1F3FD":"1F485-1F3FD","1F3FE":"1F485-1F3FE","1F3FF":"1F485-1F3FF"}},{"u":"1F933","s":"selfie","v":{"1F3FB":"1F933-1F3FB","1F3FC":"1F933-1F3FC","1F3FD":"1F933-1F3FD","1F3FE":"1F933-1F3FE","1F3FF":"1F933-1F3FF"}},{"u":"1F4AA","s":"muscle","v":{"1F3FB":"1F4AA-1F3FB","1F3FC":"1F4AA-1F3FC","1F3FD":"1F4AA-1F3FD","1F3FE":"1F4AA-1F3FE","1F3FF":"1F4AA-1F3FF"}},{"u":"1F9BE","s":"mechanical_arm"},{"u":"1F9BF","s":"mechanical_leg"},{"u":"1F9B5","s":"leg","v":{"1F3FB":"1F9B5-1F3FB","1F3FC":"1F9B5-1F3FC","1F3FD":"1F9B5-1F3FD","1F3FE":"1F9B5-1F3FE","1F3FF":"1F9B5-1F3FF"}},{"u":"1F9B6","s":"foot","v":{"1F3FB":"1F9B6-1F3FB","1F3FC":"1F9B6-1F3FC","1F3FD":"1F9B6-1F3FD","1F3FE":"1F9B6-1F3FE","1F3FF":"1F9B6-1F3FF"}},{"u":"1F442","s":"ear","v":{"1F3FB":"1F442-1F3FB","1F3FC":"1F442-1F3FC","1F3FD":"1F442-1F3FD","1F3FE":"1F442-1F3FE","1F3FF":"1F442-1F3FF"}},{"u":"1F9BB","s":"ear_with_hearing_aid","v":{"1F3FB":"1F9BB-1F3FB","1F3FC":"1F9BB-1F3FC","1F3FD":"1F9BB-1F3FD","1F3FE":"1F9BB-1F3FE","1F3FF":"1F9BB-1F3FF"}},{"u":"1F443","s":"nose","v":{"1F3FB":"1F443-1F3FB","1F3FC":"1F443-1F3FC","1F3FD":"1F443-1F3FD","1F3FE":"1F443-1F3FE","1F3FF":"1F443-1F3FF"}},{"u":"1F9E0","s":"brain"},{"u":"1FAC0","s":"anatomical_heart"},{"u":"1FAC1","s":"lungs"},{"u":"1F9B7","s":"tooth"},{"u":"1F9B4","s":"bone"},{"u":"1F440","s":"eyes"},{"u":"1F441-FE0F","s":"eye"},{"u":"1F445","s":"tongue"},{"u":"1F444","s":"lips"},{"u":"1FAE6","s":"biting_lip"},{"u":"1F476","s":"baby","v":{"1F3FB":"1F476-1F3FB","1F3FC":"1F476-1F3FC","1F3FD":"1F476-1F3FD","1F3FE":"1F476-1F3FE","1F3FF":"1F476-1F3FF"}},{"u":"1F9D2","s":"child","v":{"1F3FB":"1F9D2-1F3FB","1F3FC":"1F9D2-1F3FC","1F3FD":"1F9D2-1F3FD","1F3FE":"1F9D2-1F3FE","1F3FF":"1F9D2-1F3FF"}},{"u":"1F466","s":"boy","v":{"1F3FB":"1F466-1F3FB","1F3FC":"1F466-1F3FC","1F3FD":"1F466-1F3FD","1F3FE":"1F466-1F3FE","1F3FF":"1F466-1F3FF"}},{"u":"1F467","s":"girl","v":{"1F3FB":"1F467-1F3FB","1F3FC":"1F467-1F3FC","1F3FD":"1F467-1F3FD","1F3FE":"1F467-1F3FE","1F3FF":"1F467-1F3FF"}},{"u":"1F9D1","s":"adult","v":{"1F3FB":"1F9D1-1F3FB","1F3FC":"1F9D1-1F3FC","1F3FD":"1F9D1-1F3FD","1F3FE":"1F9D1-1F3FE","1F3FF":"1F9D1-1F3FF"}},{"u":"1F471","s":"person_with_blond_hair","v":{"1F3FB":"1F471-1F3FB","1F3FC":"1F471-1F3FC","1F3FD":"1F471-1F3FD","1F3FE":"1F471-1F3FE","1F3FF":"1F471-1F3FF"}},{"u":"1F468","s":"man","v":{"1F3FB":"1F468-1F3FB","1F3FC":"1F468-1F3FC","1F3FD":"1F468-1F3FD","1F3FE":"1F468-1F3FE","1F3FF":"1F468-1F3FF"}},{"u":"1F9D4","s":"bearded_person","v":{"1F3FB":"1F9D4-1F3FB","1F3FC":"1F9D4-1F3FC","1F3FD":"1F9D4-1F3FD","1F3FE":"1F9D4-1F3FE","1F3FF":"1F9D4-1F3FF"}},{"u":"1F9D4-200D-2642-FE0F","s":"man_with_beard","v":{"1F3FB":"1F9D4-1F3FB-200D-2642-FE0F","1F3FC":"1F9D4-1F3FC-200D-2642-FE0F","1F3FD":"1F9D4-1F3FD-200D-2642-FE0F","1F3FE":"1F9D4-1F3FE-200D-2642-FE0F","1F3FF":"1F9D4-1F3FF-200D-2642-FE0F"}},{"u":"1F9D4-200D-2640-FE0F","s":"woman_with_beard","v":{"1F3FB":"1F9D4-1F3FB-200D-2640-FE0F","1F3FC":"1F9D4-1F3FC-200D-2640-FE0F","1F3FD":"1F9D4-1F3FD-200D-2640-FE0F","1F3FE":"1F9D4-1F3FE-200D-2640-FE0F","1F3FF":"1F9D4-1F3FF-200D-2640-FE0F"}},{"u":"1F468-200D-1F9B0","s":"red_haired_man","v":{"1F3FB":"1F468-1F3FB-200D-1F9B0","1F3FC":"1F468-1F3FC-200D-1F9B0","1F3FD":"1F468-1F3FD-200D-1F9B0","1F3FE":"1F468-1F3FE-200D-1F9B0","1F3FF":"1F468-1F3FF-200D-1F9B0"}},{"u":"1F468-200D-1F9B1","s":"curly_haired_man","v":{"1F3FB":"1F468-1F3FB-200D-1F9B1","1F3FC":"1F468-1F3FC-200D-1F9B1","1F3FD":"1F468-1F3FD-200D-1F9B1","1F3FE":"1F468-1F3FE-200D-1F9B1","1F3FF":"1F468-1F3FF-200D-1F9B1"}},{"u":"1F468-200D-1F9B3","s":"white_haired_man","v":{"1F3FB":"1F468-1F3FB-200D-1F9B3","1F3FC":"1F468-1F3FC-200D-1F9B3","1F3FD":"1F468-1F3FD-200D-1F9B3","1F3FE":"1F468-1F3FE-200D-1F9B3","1F3FF":"1F468-1F3FF-200D-1F9B3"}},{"u":"1F468-200D-1F9B2","s":"bald_man","v":{"1F3FB":"1F468-1F3FB-200D-1F9B2","1F3FC":"1F468-1F3FC-200D-1F9B2","1F3FD":"1F468-1F3FD-200D-1F9B2","1F3FE":"1F468-1F3FE-200D-1F9B2","1F3FF":"1F468-1F3FF-200D-1F9B2"}},{"u":"1F469","s":"woman","v":{"1F3FB":"1F469-1F3FB","1F3FC":"1F469-1F3FC","1F3FD":"1F469-1F3FD","1F3FE":"1F469-1F3FE","1F3FF":"1F469-1F3FF"}},{"u":"1F469-200D-1F9B0","s":"red_haired_woman","v":{"1F3FB":"1F469-1F3FB-200D-1F9B0","1F3FC":"1F469-1F3FC-200D-1F9B0","1F3FD":"1F469-1F3FD-200D-1F9B0","1F3FE":"1F469-1F3FE-200D-1F9B0","1F3FF":"1F469-1F3FF-200D-1F9B0"}},{"u":"1F9D1-200D-1F9B0","s":"red_haired_person","v":{"1F3FB":"1F9D1-1F3FB-200D-1F9B0","1F3FC":"1F9D1-1F3FC-200D-1F9B0","1F3FD":"1F9D1-1F3FD-200D-1F9B0","1F3FE":"1F9D1-1F3FE-200D-1F9B0","1F3FF":"1F9D1-1F3FF-200D-1F9B0"}},{"u":"1F469-200D-1F9B1","s":"curly_haired_woman","v":{"1F3FB":"1F469-1F3FB-200D-1F9B1","1F3FC":"1F469-1F3FC-200D-1F9B1","1F3FD":"1F469-1F3FD-200D-1F9B1","1F3FE":"1F469-1F3FE-200D-1F9B1","1F3FF":"1F469-1F3FF-200D-1F9B1"}},{"u":"1F9D1-200D-1F9B1","s":"curly_haired_person","v":{"1F3FB":"1F9D1-1F3FB-200D-1F9B1","1F3FC":"1F9D1-1F3FC-200D-1F9B1","1F3FD":"1F9D1-1F3FD-200D-1F9B1","1F3FE":"1F9D1-1F3FE-200D-1F9B1","1F3FF":"1F9D1-1F3FF-200D-1F9B1"}},{"u":"1F469-200D-1F9B3","s":"white_haired_woman","v":{"1F3FB":"1F469-1F3FB-200D-1F9B3","1F3FC":"1F469-1F3FC-200D-1F9B3","1F3FD":"1F469-1F3FD-200D-1F9B3","1F3FE":"1F469-1F3FE-200D-1F9B3","1F3FF":"1F469-1F3FF-200D-1F9B3"}},{"u":"1F9D1-200D-1F9B3","s":"white_haired_person","v":{"1F3FB":"1F9D1-1F3FB-200D-1F9B3","1F3FC":"1F9D1-1F3FC-200D-1F9B3","1F3FD":"1F9D1-1F3FD-200D-1F9B3","1F3FE":"1F9D1-1F3FE-200D-1F9B3","1F3FF":"1F9D1-1F3FF-200D-1F9B3"}},{"u":"1F469-200D-1F9B2","s":"bald_woman","v":{"1F3FB":"1F469-1F3FB-200D-1F9B2","1F3FC":"1F469-1F3FC-200D-1F9B2","1F3FD":"1F469-1F3FD-200D-1F9B2","1F3FE":"1F469-1F3FE-200D-1F9B2","1F3FF":"1F469-1F3FF-200D-1F9B2"}},{"u":"1F9D1-200D-1F9B2","s":"bald_person","v":{"1F3FB":"1F9D1-1F3FB-200D-1F9B2","1F3FC":"1F9D1-1F3FC-200D-1F9B2","1F3FD":"1F9D1-1F3FD-200D-1F9B2","1F3FE":"1F9D1-1F3FE-200D-1F9B2","1F3FF":"1F9D1-1F3FF-200D-1F9B2"}},{"u":"1F471-200D-2640-FE0F","s":"blond-haired-woman","v":{"1F3FB":"1F471-1F3FB-200D-2640-FE0F","1F3FC":"1F471-1F3FC-200D-2640-FE0F","1F3FD":"1F471-1F3FD-200D-2640-FE0F","1F3FE":"1F471-1F3FE-200D-2640-FE0F","1F3FF":"1F471-1F3FF-200D-2640-FE0F"}},{"u":"1F471-200D-2642-FE0F","s":"blond-haired-man","v":{"1F3FB":"1F471-1F3FB-200D-2642-FE0F","1F3FC":"1F471-1F3FC-200D-2642-FE0F","1F3FD":"1F471-1F3FD-200D-2642-FE0F","1F3FE":"1F471-1F3FE-200D-2642-FE0F","1F3FF":"1F471-1F3FF-200D-2642-FE0F"}},{"u":"1F9D3","s":"older_adult","v":{"1F3FB":"1F9D3-1F3FB","1F3FC":"1F9D3-1F3FC","1F3FD":"1F9D3-1F3FD","1F3FE":"1F9D3-1F3FE","1F3FF":"1F9D3-1F3FF"}},{"u":"1F474","s":"older_man","v":{"1F3FB":"1F474-1F3FB","1F3FC":"1F474-1F3FC","1F3FD":"1F474-1F3FD","1F3FE":"1F474-1F3FE","1F3FF":"1F474-1F3FF"}},{"u":"1F475","s":"older_woman","v":{"1F3FB":"1F475-1F3FB","1F3FC":"1F475-1F3FC","1F3FD":"1F475-1F3FD","1F3FE":"1F475-1F3FE","1F3FF":"1F475-1F3FF"}},{"u":"1F64D","s":"person_frowning","v":{"1F3FB":"1F64D-1F3FB","1F3FC":"1F64D-1F3FC","1F3FD":"1F64D-1F3FD","1F3FE":"1F64D-1F3FE","1F3FF":"1F64D-1F3FF"}},{"u":"1F64D-200D-2642-FE0F","s":"man-frowning","v":{"1F3FB":"1F64D-1F3FB-200D-2642-FE0F","1F3FC":"1F64D-1F3FC-200D-2642-FE0F","1F3FD":"1F64D-1F3FD-200D-2642-FE0F","1F3FE":"1F64D-1F3FE-200D-2642-FE0F","1F3FF":"1F64D-1F3FF-200D-2642-FE0F"}},{"u":"1F64D-200D-2640-FE0F","s":"woman-frowning","v":{"1F3FB":"1F64D-1F3FB-200D-2640-FE0F","1F3FC":"1F64D-1F3FC-200D-2640-FE0F","1F3FD":"1F64D-1F3FD-200D-2640-FE0F","1F3FE":"1F64D-1F3FE-200D-2640-FE0F","1F3FF":"1F64D-1F3FF-200D-2640-FE0F"}},{"u":"1F64E","s":"person_with_pouting_face","v":{"1F3FB":"1F64E-1F3FB","1F3FC":"1F64E-1F3FC","1F3FD":"1F64E-1F3FD","1F3FE":"1F64E-1F3FE","1F3FF":"1F64E-1F3FF"}},{"u":"1F64E-200D-2642-FE0F","s":"man-pouting","v":{"1F3FB":"1F64E-1F3FB-200D-2642-FE0F","1F3FC":"1F64E-1F3FC-200D-2642-FE0F","1F3FD":"1F64E-1F3FD-200D-2642-FE0F","1F3FE":"1F64E-1F3FE-200D-2642-FE0F","1F3FF":"1F64E-1F3FF-200D-2642-FE0F"}},{"u":"1F64E-200D-2640-FE0F","s":"woman-pouting","v":{"1F3FB":"1F64E-1F3FB-200D-2640-FE0F","1F3FC":"1F64E-1F3FC-200D-2640-FE0F","1F3FD":"1F64E-1F3FD-200D-2640-FE0F","1F3FE":"1F64E-1F3FE-200D-2640-FE0F","1F3FF":"1F64E-1F3FF-200D-2640-FE0F"}},{"u":"1F645","s":"no_good","v":{"1F3FB":"1F645-1F3FB","1F3FC":"1F645-1F3FC","1F3FD":"1F645-1F3FD","1F3FE":"1F645-1F3FE","1F3FF":"1F645-1F3FF"}},{"u":"1F645-200D-2642-FE0F","s":"man-gesturing-no","v":{"1F3FB":"1F645-1F3FB-200D-2642-FE0F","1F3FC":"1F645-1F3FC-200D-2642-FE0F","1F3FD":"1F645-1F3FD-200D-2642-FE0F","1F3FE":"1F645-1F3FE-200D-2642-FE0F","1F3FF":"1F645-1F3FF-200D-2642-FE0F"}},{"u":"1F645-200D-2640-FE0F","s":"woman-gesturing-no","v":{"1F3FB":"1F645-1F3FB-200D-2640-FE0F","1F3FC":"1F645-1F3FC-200D-2640-FE0F","1F3FD":"1F645-1F3FD-200D-2640-FE0F","1F3FE":"1F645-1F3FE-200D-2640-FE0F","1F3FF":"1F645-1F3FF-200D-2640-FE0F"}},{"u":"1F646","s":"ok_woman","v":{"1F3FB":"1F646-1F3FB","1F3FC":"1F646-1F3FC","1F3FD":"1F646-1F3FD","1F3FE":"1F646-1F3FE","1F3FF":"1F646-1F3FF"}},{"u":"1F646-200D-2642-FE0F","s":"man-gesturing-ok","v":{"1F3FB":"1F646-1F3FB-200D-2642-FE0F","1F3FC":"1F646-1F3FC-200D-2642-FE0F","1F3FD":"1F646-1F3FD-200D-2642-FE0F","1F3FE":"1F646-1F3FE-200D-2642-FE0F","1F3FF":"1F646-1F3FF-200D-2642-FE0F"}},{"u":"1F646-200D-2640-FE0F","s":"woman-gesturing-ok","v":{"1F3FB":"1F646-1F3FB-200D-2640-FE0F","1F3FC":"1F646-1F3FC-200D-2640-FE0F","1F3FD":"1F646-1F3FD-200D-2640-FE0F","1F3FE":"1F646-1F3FE-200D-2640-FE0F","1F3FF":"1F646-1F3FF-200D-2640-FE0F"}},{"u":"1F481","s":"information_desk_person","v":{"1F3FB":"1F481-1F3FB","1F3FC":"1F481-1F3FC","1F3FD":"1F481-1F3FD","1F3FE":"1F481-1F3FE","1F3FF":"1F481-1F3FF"}},{"u":"1F481-200D-2642-FE0F","s":"man-tipping-hand","v":{"1F3FB":"1F481-1F3FB-200D-2642-FE0F","1F3FC":"1F481-1F3FC-200D-2642-FE0F","1F3FD":"1F481-1F3FD-200D-2642-FE0F","1F3FE":"1F481-1F3FE-200D-2642-FE0F","1F3FF":"1F481-1F3FF-200D-2642-FE0F"}},{"u":"1F481-200D-2640-FE0F","s":"woman-tipping-hand","v":{"1F3FB":"1F481-1F3FB-200D-2640-FE0F","1F3FC":"1F481-1F3FC-200D-2640-FE0F","1F3FD":"1F481-1F3FD-200D-2640-FE0F","1F3FE":"1F481-1F3FE-200D-2640-FE0F","1F3FF":"1F481-1F3FF-200D-2640-FE0F"}},{"u":"1F64B","s":"raising_hand","v":{"1F3FB":"1F64B-1F3FB","1F3FC":"1F64B-1F3FC","1F3FD":"1F64B-1F3FD","1F3FE":"1F64B-1F3FE","1F3FF":"1F64B-1F3FF"}},{"u":"1F64B-200D-2642-FE0F","s":"man-raising-hand","v":{"1F3FB":"1F64B-1F3FB-200D-2642-FE0F","1F3FC":"1F64B-1F3FC-200D-2642-FE0F","1F3FD":"1F64B-1F3FD-200D-2642-FE0F","1F3FE":"1F64B-1F3FE-200D-2642-FE0F","1F3FF":"1F64B-1F3FF-200D-2642-FE0F"}},{"u":"1F64B-200D-2640-FE0F","s":"woman-raising-hand","v":{"1F3FB":"1F64B-1F3FB-200D-2640-FE0F","1F3FC":"1F64B-1F3FC-200D-2640-FE0F","1F3FD":"1F64B-1F3FD-200D-2640-FE0F","1F3FE":"1F64B-1F3FE-200D-2640-FE0F","1F3FF":"1F64B-1F3FF-200D-2640-FE0F"}},{"u":"1F9CF","s":"deaf_person","v":{"1F3FB":"1F9CF-1F3FB","1F3FC":"1F9CF-1F3FC","1F3FD":"1F9CF-1F3FD","1F3FE":"1F9CF-1F3FE","1F3FF":"1F9CF-1F3FF"}},{"u":"1F9CF-200D-2642-FE0F","s":"deaf_man","v":{"1F3FB":"1F9CF-1F3FB-200D-2642-FE0F","1F3FC":"1F9CF-1F3FC-200D-2642-FE0F","1F3FD":"1F9CF-1F3FD-200D-2642-FE0F","1F3FE":"1F9CF-1F3FE-200D-2642-FE0F","1F3FF":"1F9CF-1F3FF-200D-2642-FE0F"}},{"u":"1F9CF-200D-2640-FE0F","s":"deaf_woman","v":{"1F3FB":"1F9CF-1F3FB-200D-2640-FE0F","1F3FC":"1F9CF-1F3FC-200D-2640-FE0F","1F3FD":"1F9CF-1F3FD-200D-2640-FE0F","1F3FE":"1F9CF-1F3FE-200D-2640-FE0F","1F3FF":"1F9CF-1F3FF-200D-2640-FE0F"}},{"u":"1F647","s":"bow","v":{"1F3FB":"1F647-1F3FB","1F3FC":"1F647-1F3FC","1F3FD":"1F647-1F3FD","1F3FE":"1F647-1F3FE","1F3FF":"1F647-1F3FF"}},{"u":"1F647-200D-2642-FE0F","s":"man-bowing","v":{"1F3FB":"1F647-1F3FB-200D-2642-FE0F","1F3FC":"1F647-1F3FC-200D-2642-FE0F","1F3FD":"1F647-1F3FD-200D-2642-FE0F","1F3FE":"1F647-1F3FE-200D-2642-FE0F","1F3FF":"1F647-1F3FF-200D-2642-FE0F"}},{"u":"1F647-200D-2640-FE0F","s":"woman-bowing","v":{"1F3FB":"1F647-1F3FB-200D-2640-FE0F","1F3FC":"1F647-1F3FC-200D-2640-FE0F","1F3FD":"1F647-1F3FD-200D-2640-FE0F","1F3FE":"1F647-1F3FE-200D-2640-FE0F","1F3FF":"1F647-1F3FF-200D-2640-FE0F"}},{"u":"1F926","s":"face_palm","v":{"1F3FB":"1F926-1F3FB","1F3FC":"1F926-1F3FC","1F3FD":"1F926-1F3FD","1F3FE":"1F926-1F3FE","1F3FF":"1F926-1F3FF"}},{"u":"1F926-200D-2642-FE0F","s":"man-facepalming","v":{"1F3FB":"1F926-1F3FB-200D-2642-FE0F","1F3FC":"1F926-1F3FC-200D-2642-FE0F","1F3FD":"1F926-1F3FD-200D-2642-FE0F","1F3FE":"1F926-1F3FE-200D-2642-FE0F","1F3FF":"1F926-1F3FF-200D-2642-FE0F"}},{"u":"1F926-200D-2640-FE0F","s":"woman-facepalming","v":{"1F3FB":"1F926-1F3FB-200D-2640-FE0F","1F3FC":"1F926-1F3FC-200D-2640-FE0F","1F3FD":"1F926-1F3FD-200D-2640-FE0F","1F3FE":"1F926-1F3FE-200D-2640-FE0F","1F3FF":"1F926-1F3FF-200D-2640-FE0F"}},{"u":"1F937","s":"shrug","v":{"1F3FB":"1F937-1F3FB","1F3FC":"1F937-1F3FC","1F3FD":"1F937-1F3FD","1F3FE":"1F937-1F3FE","1F3FF":"1F937-1F3FF"}},{"u":"1F937-200D-2642-FE0F","s":"man-shrugging","v":{"1F3FB":"1F937-1F3FB-200D-2642-FE0F","1F3FC":"1F937-1F3FC-200D-2642-FE0F","1F3FD":"1F937-1F3FD-200D-2642-FE0F","1F3FE":"1F937-1F3FE-200D-2642-FE0F","1F3FF":"1F937-1F3FF-200D-2642-FE0F"}},{"u":"1F937-200D-2640-FE0F","s":"woman-shrugging","v":{"1F3FB":"1F937-1F3FB-200D-2640-FE0F","1F3FC":"1F937-1F3FC-200D-2640-FE0F","1F3FD":"1F937-1F3FD-200D-2640-FE0F","1F3FE":"1F937-1F3FE-200D-2640-FE0F","1F3FF":"1F937-1F3FF-200D-2640-FE0F"}},{"u":"1F9D1-200D-2695-FE0F","s":"health_worker","v":{"1F3FB":"1F9D1-1F3FB-200D-2695-FE0F","1F3FC":"1F9D1-1F3FC-200D-2695-FE0F","1F3FD":"1F9D1-1F3FD-200D-2695-FE0F","1F3FE":"1F9D1-1F3FE-200D-2695-FE0F","1F3FF":"1F9D1-1F3FF-200D-2695-FE0F"}},{"u":"1F468-200D-2695-FE0F","s":"male-doctor","v":{"1F3FB":"1F468-1F3FB-200D-2695-FE0F","1F3FC":"1F468-1F3FC-200D-2695-FE0F","1F3FD":"1F468-1F3FD-200D-2695-FE0F","1F3FE":"1F468-1F3FE-200D-2695-FE0F","1F3FF":"1F468-1F3FF-200D-2695-FE0F"}},{"u":"1F469-200D-2695-FE0F","s":"female-doctor","v":{"1F3FB":"1F469-1F3FB-200D-2695-FE0F","1F3FC":"1F469-1F3FC-200D-2695-FE0F","1F3FD":"1F469-1F3FD-200D-2695-FE0F","1F3FE":"1F469-1F3FE-200D-2695-FE0F","1F3FF":"1F469-1F3FF-200D-2695-FE0F"}},{"u":"1F9D1-200D-1F393","s":"student","v":{"1F3FB":"1F9D1-1F3FB-200D-1F393","1F3FC":"1F9D1-1F3FC-200D-1F393","1F3FD":"1F9D1-1F3FD-200D-1F393","1F3FE":"1F9D1-1F3FE-200D-1F393","1F3FF":"1F9D1-1F3FF-200D-1F393"}},{"u":"1F468-200D-1F393","s":"male-student","v":{"1F3FB":"1F468-1F3FB-200D-1F393","1F3FC":"1F468-1F3FC-200D-1F393","1F3FD":"1F468-1F3FD-200D-1F393","1F3FE":"1F468-1F3FE-200D-1F393","1F3FF":"1F468-1F3FF-200D-1F393"}},{"u":"1F469-200D-1F393","s":"female-student","v":{"1F3FB":"1F469-1F3FB-200D-1F393","1F3FC":"1F469-1F3FC-200D-1F393","1F3FD":"1F469-1F3FD-200D-1F393","1F3FE":"1F469-1F3FE-200D-1F393","1F3FF":"1F469-1F3FF-200D-1F393"}},{"u":"1F9D1-200D-1F3EB","s":"teacher","v":{"1F3FB":"1F9D1-1F3FB-200D-1F3EB","1F3FC":"1F9D1-1F3FC-200D-1F3EB","1F3FD":"1F9D1-1F3FD-200D-1F3EB","1F3FE":"1F9D1-1F3FE-200D-1F3EB","1F3FF":"1F9D1-1F3FF-200D-1F3EB"}},{"u":"1F468-200D-1F3EB","s":"male-teacher","v":{"1F3FB":"1F468-1F3FB-200D-1F3EB","1F3FC":"1F468-1F3FC-200D-1F3EB","1F3FD":"1F468-1F3FD-200D-1F3EB","1F3FE":"1F468-1F3FE-200D-1F3EB","1F3FF":"1F468-1F3FF-200D-1F3EB"}},{"u":"1F469-200D-1F3EB","s":"female-teacher","v":{"1F3FB":"1F469-1F3FB-200D-1F3EB","1F3FC":"1F469-1F3FC-200D-1F3EB","1F3FD":"1F469-1F3FD-200D-1F3EB","1F3FE":"1F469-1F3FE-200D-1F3EB","1F3FF":"1F469-1F3FF-200D-1F3EB"}},{"u":"1F9D1-200D-2696-FE0F","s":"judge","v":{"1F3FB":"1F9D1-1F3FB-200D-2696-FE0F","1F3FC":"1F9D1-1F3FC-200D-2696-FE0F","1F3FD":"1F9D1-1F3FD-200D-2696-FE0F","1F3FE":"1F9D1-1F3FE-200D-2696-FE0F","1F3FF":"1F9D1-1F3FF-200D-2696-FE0F"}},{"u":"1F468-200D-2696-FE0F","s":"male-judge","v":{"1F3FB":"1F468-1F3FB-200D-2696-FE0F","1F3FC":"1F468-1F3FC-200D-2696-FE0F","1F3FD":"1F468-1F3FD-200D-2696-FE0F","1F3FE":"1F468-1F3FE-200D-2696-FE0F","1F3FF":"1F468-1F3FF-200D-2696-FE0F"}},{"u":"1F469-200D-2696-FE0F","s":"female-judge","v":{"1F3FB":"1F469-1F3FB-200D-2696-FE0F","1F3FC":"1F469-1F3FC-200D-2696-FE0F","1F3FD":"1F469-1F3FD-200D-2696-FE0F","1F3FE":"1F469-1F3FE-200D-2696-FE0F","1F3FF":"1F469-1F3FF-200D-2696-FE0F"}},{"u":"1F9D1-200D-1F33E","s":"farmer","v":{"1F3FB":"1F9D1-1F3FB-200D-1F33E","1F3FC":"1F9D1-1F3FC-200D-1F33E","1F3FD":"1F9D1-1F3FD-200D-1F33E","1F3FE":"1F9D1-1F3FE-200D-1F33E","1F3FF":"1F9D1-1F3FF-200D-1F33E"}},{"u":"1F468-200D-1F33E","s":"male-farmer","v":{"1F3FB":"1F468-1F3FB-200D-1F33E","1F3FC":"1F468-1F3FC-200D-1F33E","1F3FD":"1F468-1F3FD-200D-1F33E","1F3FE":"1F468-1F3FE-200D-1F33E","1F3FF":"1F468-1F3FF-200D-1F33E"}},{"u":"1F469-200D-1F33E","s":"female-farmer","v":{"1F3FB":"1F469-1F3FB-200D-1F33E","1F3FC":"1F469-1F3FC-200D-1F33E","1F3FD":"1F469-1F3FD-200D-1F33E","1F3FE":"1F469-1F3FE-200D-1F33E","1F3FF":"1F469-1F3FF-200D-1F33E"}},{"u":"1F9D1-200D-1F373","s":"cook","v":{"1F3FB":"1F9D1-1F3FB-200D-1F373","1F3FC":"1F9D1-1F3FC-200D-1F373","1F3FD":"1F9D1-1F3FD-200D-1F373","1F3FE":"1F9D1-1F3FE-200D-1F373","1F3FF":"1F9D1-1F3FF-200D-1F373"}},{"u":"1F468-200D-1F373","s":"male-cook","v":{"1F3FB":"1F468-1F3FB-200D-1F373","1F3FC":"1F468-1F3FC-200D-1F373","1F3FD":"1F468-1F3FD-200D-1F373","1F3FE":"1F468-1F3FE-200D-1F373","1F3FF":"1F468-1F3FF-200D-1F373"}},{"u":"1F469-200D-1F373","s":"female-cook","v":{"1F3FB":"1F469-1F3FB-200D-1F373","1F3FC":"1F469-1F3FC-200D-1F373","1F3FD":"1F469-1F3FD-200D-1F373","1F3FE":"1F469-1F3FE-200D-1F373","1F3FF":"1F469-1F3FF-200D-1F373"}},{"u":"1F9D1-200D-1F527","s":"mechanic","v":{"1F3FB":"1F9D1-1F3FB-200D-1F527","1F3FC":"1F9D1-1F3FC-200D-1F527","1F3FD":"1F9D1-1F3FD-200D-1F527","1F3FE":"1F9D1-1F3FE-200D-1F527","1F3FF":"1F9D1-1F3FF-200D-1F527"}},{"u":"1F468-200D-1F527","s":"male-mechanic","v":{"1F3FB":"1F468-1F3FB-200D-1F527","1F3FC":"1F468-1F3FC-200D-1F527","1F3FD":"1F468-1F3FD-200D-1F527","1F3FE":"1F468-1F3FE-200D-1F527","1F3FF":"1F468-1F3FF-200D-1F527"}},{"u":"1F469-200D-1F527","s":"female-mechanic","v":{"1F3FB":"1F469-1F3FB-200D-1F527","1F3FC":"1F469-1F3FC-200D-1F527","1F3FD":"1F469-1F3FD-200D-1F527","1F3FE":"1F469-1F3FE-200D-1F527","1F3FF":"1F469-1F3FF-200D-1F527"}},{"u":"1F9D1-200D-1F3ED","s":"factory_worker","v":{"1F3FB":"1F9D1-1F3FB-200D-1F3ED","1F3FC":"1F9D1-1F3FC-200D-1F3ED","1F3FD":"1F9D1-1F3FD-200D-1F3ED","1F3FE":"1F9D1-1F3FE-200D-1F3ED","1F3FF":"1F9D1-1F3FF-200D-1F3ED"}},{"u":"1F468-200D-1F3ED","s":"male-factory-worker","v":{"1F3FB":"1F468-1F3FB-200D-1F3ED","1F3FC":"1F468-1F3FC-200D-1F3ED","1F3FD":"1F468-1F3FD-200D-1F3ED","1F3FE":"1F468-1F3FE-200D-1F3ED","1F3FF":"1F468-1F3FF-200D-1F3ED"}},{"u":"1F469-200D-1F3ED","s":"female-factory-worker","v":{"1F3FB":"1F469-1F3FB-200D-1F3ED","1F3FC":"1F469-1F3FC-200D-1F3ED","1F3FD":"1F469-1F3FD-200D-1F3ED","1F3FE":"1F469-1F3FE-200D-1F3ED","1F3FF":"1F469-1F3FF-200D-1F3ED"}},{"u":"1F9D1-200D-1F4BC","s":"office_worker","v":{"1F3FB":"1F9D1-1F3FB-200D-1F4BC","1F3FC":"1F9D1-1F3FC-200D-1F4BC","1F3FD":"1F9D1-1F3FD-200D-1F4BC","1F3FE":"1F9D1-1F3FE-200D-1F4BC","1F3FF":"1F9D1-1F3FF-200D-1F4BC"}},{"u":"1F468-200D-1F4BC","s":"male-office-worker","v":{"1F3FB":"1F468-1F3FB-200D-1F4BC","1F3FC":"1F468-1F3FC-200D-1F4BC","1F3FD":"1F468-1F3FD-200D-1F4BC","1F3FE":"1F468-1F3FE-200D-1F4BC","1F3FF":"1F468-1F3FF-200D-1F4BC"}},{"u":"1F469-200D-1F4BC","s":"female-office-worker","v":{"1F3FB":"1F469-1F3FB-200D-1F4BC","1F3FC":"1F469-1F3FC-200D-1F4BC","1F3FD":"1F469-1F3FD-200D-1F4BC","1F3FE":"1F469-1F3FE-200D-1F4BC","1F3FF":"1F469-1F3FF-200D-1F4BC"}},{"u":"1F9D1-200D-1F52C","s":"scientist","v":{"1F3FB":"1F9D1-1F3FB-200D-1F52C","1F3FC":"1F9D1-1F3FC-200D-1F52C","1F3FD":"1F9D1-1F3FD-200D-1F52C","1F3FE":"1F9D1-1F3FE-200D-1F52C","1F3FF":"1F9D1-1F3FF-200D-1F52C"}},{"u":"1F468-200D-1F52C","s":"male-scientist","v":{"1F3FB":"1F468-1F3FB-200D-1F52C","1F3FC":"1F468-1F3FC-200D-1F52C","1F3FD":"1F468-1F3FD-200D-1F52C","1F3FE":"1F468-1F3FE-200D-1F52C","1F3FF":"1F468-1F3FF-200D-1F52C"}},{"u":"1F469-200D-1F52C","s":"female-scientist","v":{"1F3FB":"1F469-1F3FB-200D-1F52C","1F3FC":"1F469-1F3FC-200D-1F52C","1F3FD":"1F469-1F3FD-200D-1F52C","1F3FE":"1F469-1F3FE-200D-1F52C","1F3FF":"1F469-1F3FF-200D-1F52C"}},{"u":"1F9D1-200D-1F4BB","s":"technologist","v":{"1F3FB":"1F9D1-1F3FB-200D-1F4BB","1F3FC":"1F9D1-1F3FC-200D-1F4BB","1F3FD":"1F9D1-1F3FD-200D-1F4BB","1F3FE":"1F9D1-1F3FE-200D-1F4BB","1F3FF":"1F9D1-1F3FF-200D-1F4BB"}},{"u":"1F468-200D-1F4BB","s":"male-technologist","v":{"1F3FB":"1F468-1F3FB-200D-1F4BB","1F3FC":"1F468-1F3FC-200D-1F4BB","1F3FD":"1F468-1F3FD-200D-1F4BB","1F3FE":"1F468-1F3FE-200D-1F4BB","1F3FF":"1F468-1F3FF-200D-1F4BB"}},{"u":"1F469-200D-1F4BB","s":"female-technologist","v":{"1F3FB":"1F469-1F3FB-200D-1F4BB","1F3FC":"1F469-1F3FC-200D-1F4BB","1F3FD":"1F469-1F3FD-200D-1F4BB","1F3FE":"1F469-1F3FE-200D-1F4BB","1F3FF":"1F469-1F3FF-200D-1F4BB"}},{"u":"1F9D1-200D-1F3A4","s":"singer","v":{"1F3FB":"1F9D1-1F3FB-200D-1F3A4","1F3FC":"1F9D1-1F3FC-200D-1F3A4","1F3FD":"1F9D1-1F3FD-200D-1F3A4","1F3FE":"1F9D1-1F3FE-200D-1F3A4","1F3FF":"1F9D1-1F3FF-200D-1F3A4"}},{"u":"1F468-200D-1F3A4","s":"male-singer","v":{"1F3FB":"1F468-1F3FB-200D-1F3A4","1F3FC":"1F468-1F3FC-200D-1F3A4","1F3FD":"1F468-1F3FD-200D-1F3A4","1F3FE":"1F468-1F3FE-200D-1F3A4","1F3FF":"1F468-1F3FF-200D-1F3A4"}},{"u":"1F469-200D-1F3A4","s":"female-singer","v":{"1F3FB":"1F469-1F3FB-200D-1F3A4","1F3FC":"1F469-1F3FC-200D-1F3A4","1F3FD":"1F469-1F3FD-200D-1F3A4","1F3FE":"1F469-1F3FE-200D-1F3A4","1F3FF":"1F469-1F3FF-200D-1F3A4"}},{"u":"1F9D1-200D-1F3A8","s":"artist","v":{"1F3FB":"1F9D1-1F3FB-200D-1F3A8","1F3FC":"1F9D1-1F3FC-200D-1F3A8","1F3FD":"1F9D1-1F3FD-200D-1F3A8","1F3FE":"1F9D1-1F3FE-200D-1F3A8","1F3FF":"1F9D1-1F3FF-200D-1F3A8"}},{"u":"1F468-200D-1F3A8","s":"male-artist","v":{"1F3FB":"1F468-1F3FB-200D-1F3A8","1F3FC":"1F468-1F3FC-200D-1F3A8","1F3FD":"1F468-1F3FD-200D-1F3A8","1F3FE":"1F468-1F3FE-200D-1F3A8","1F3FF":"1F468-1F3FF-200D-1F3A8"}},{"u":"1F469-200D-1F3A8","s":"female-artist","v":{"1F3FB":"1F469-1F3FB-200D-1F3A8","1F3FC":"1F469-1F3FC-200D-1F3A8","1F3FD":"1F469-1F3FD-200D-1F3A8","1F3FE":"1F469-1F3FE-200D-1F3A8","1F3FF":"1F469-1F3FF-200D-1F3A8"}},{"u":"1F9D1-200D-2708-FE0F","s":"pilot","v":{"1F3FB":"1F9D1-1F3FB-200D-2708-FE0F","1F3FC":"1F9D1-1F3FC-200D-2708-FE0F","1F3FD":"1F9D1-1F3FD-200D-2708-FE0F","1F3FE":"1F9D1-1F3FE-200D-2708-FE0F","1F3FF":"1F9D1-1F3FF-200D-2708-FE0F"}},{"u":"1F468-200D-2708-FE0F","s":"male-pilot","v":{"1F3FB":"1F468-1F3FB-200D-2708-FE0F","1F3FC":"1F468-1F3FC-200D-2708-FE0F","1F3FD":"1F468-1F3FD-200D-2708-FE0F","1F3FE":"1F468-1F3FE-200D-2708-FE0F","1F3FF":"1F468-1F3FF-200D-2708-FE0F"}},{"u":"1F469-200D-2708-FE0F","s":"female-pilot","v":{"1F3FB":"1F469-1F3FB-200D-2708-FE0F","1F3FC":"1F469-1F3FC-200D-2708-FE0F","1F3FD":"1F469-1F3FD-200D-2708-FE0F","1F3FE":"1F469-1F3FE-200D-2708-FE0F","1F3FF":"1F469-1F3FF-200D-2708-FE0F"}},{"u":"1F9D1-200D-1F680","s":"astronaut","v":{"1F3FB":"1F9D1-1F3FB-200D-1F680","1F3FC":"1F9D1-1F3FC-200D-1F680","1F3FD":"1F9D1-1F3FD-200D-1F680","1F3FE":"1F9D1-1F3FE-200D-1F680","1F3FF":"1F9D1-1F3FF-200D-1F680"}},{"u":"1F468-200D-1F680","s":"male-astronaut","v":{"1F3FB":"1F468-1F3FB-200D-1F680","1F3FC":"1F468-1F3FC-200D-1F680","1F3FD":"1F468-1F3FD-200D-1F680","1F3FE":"1F468-1F3FE-200D-1F680","1F3FF":"1F468-1F3FF-200D-1F680"}},{"u":"1F469-200D-1F680","s":"female-astronaut","v":{"1F3FB":"1F469-1F3FB-200D-1F680","1F3FC":"1F469-1F3FC-200D-1F680","1F3FD":"1F469-1F3FD-200D-1F680","1F3FE":"1F469-1F3FE-200D-1F680","1F3FF":"1F469-1F3FF-200D-1F680"}},{"u":"1F9D1-200D-1F692","s":"firefighter","v":{"1F3FB":"1F9D1-1F3FB-200D-1F692","1F3FC":"1F9D1-1F3FC-200D-1F692","1F3FD":"1F9D1-1F3FD-200D-1F692","1F3FE":"1F9D1-1F3FE-200D-1F692","1F3FF":"1F9D1-1F3FF-200D-1F692"}},{"u":"1F468-200D-1F692","s":"male-firefighter","v":{"1F3FB":"1F468-1F3FB-200D-1F692","1F3FC":"1F468-1F3FC-200D-1F692","1F3FD":"1F468-1F3FD-200D-1F692","1F3FE":"1F468-1F3FE-200D-1F692","1F3FF":"1F468-1F3FF-200D-1F692"}},{"u":"1F469-200D-1F692","s":"female-firefighter","v":{"1F3FB":"1F469-1F3FB-200D-1F692","1F3FC":"1F469-1F3FC-200D-1F692","1F3FD":"1F469-1F3FD-200D-1F692","1F3FE":"1F469-1F3FE-200D-1F692","1F3FF":"1F469-1F3FF-200D-1F692"}},{"u":"1F46E","s":"cop","v":{"1F3FB":"1F46E-1F3FB","1F3FC":"1F46E-1F3FC","1F3FD":"1F46E-1F3FD","1F3FE":"1F46E-1F3FE","1F3FF":"1F46E-1F3FF"}},{"u":"1F46E-200D-2642-FE0F","s":"male-police-officer","v":{"1F3FB":"1F46E-1F3FB-200D-2642-FE0F","1F3FC":"1F46E-1F3FC-200D-2642-FE0F","1F3FD":"1F46E-1F3FD-200D-2642-FE0F","1F3FE":"1F46E-1F3FE-200D-2642-FE0F","1F3FF":"1F46E-1F3FF-200D-2642-FE0F"}},{"u":"1F46E-200D-2640-FE0F","s":"female-police-officer","v":{"1F3FB":"1F46E-1F3FB-200D-2640-FE0F","1F3FC":"1F46E-1F3FC-200D-2640-FE0F","1F3FD":"1F46E-1F3FD-200D-2640-FE0F","1F3FE":"1F46E-1F3FE-200D-2640-FE0F","1F3FF":"1F46E-1F3FF-200D-2640-FE0F"}},{"u":"1F575-FE0F","s":"sleuth_or_spy","v":{"1F3FB":"1F575-1F3FB","1F3FC":"1F575-1F3FC","1F3FD":"1F575-1F3FD","1F3FE":"1F575-1F3FE","1F3FF":"1F575-1F3FF"}},{"u":"1F575-FE0F-200D-2642-FE0F","s":"male-detective","v":{"1F3FB":"1F575-1F3FB-200D-2642-FE0F","1F3FC":"1F575-1F3FC-200D-2642-FE0F","1F3FD":"1F575-1F3FD-200D-2642-FE0F","1F3FE":"1F575-1F3FE-200D-2642-FE0F","1F3FF":"1F575-1F3FF-200D-2642-FE0F"}},{"u":"1F575-FE0F-200D-2640-FE0F","s":"female-detective","v":{"1F3FB":"1F575-1F3FB-200D-2640-FE0F","1F3FC":"1F575-1F3FC-200D-2640-FE0F","1F3FD":"1F575-1F3FD-200D-2640-FE0F","1F3FE":"1F575-1F3FE-200D-2640-FE0F","1F3FF":"1F575-1F3FF-200D-2640-FE0F"}},{"u":"1F482","s":"guardsman","v":{"1F3FB":"1F482-1F3FB","1F3FC":"1F482-1F3FC","1F3FD":"1F482-1F3FD","1F3FE":"1F482-1F3FE","1F3FF":"1F482-1F3FF"}},{"u":"1F482-200D-2642-FE0F","s":"male-guard","v":{"1F3FB":"1F482-1F3FB-200D-2642-FE0F","1F3FC":"1F482-1F3FC-200D-2642-FE0F","1F3FD":"1F482-1F3FD-200D-2642-FE0F","1F3FE":"1F482-1F3FE-200D-2642-FE0F","1F3FF":"1F482-1F3FF-200D-2642-FE0F"}},{"u":"1F482-200D-2640-FE0F","s":"female-guard","v":{"1F3FB":"1F482-1F3FB-200D-2640-FE0F","1F3FC":"1F482-1F3FC-200D-2640-FE0F","1F3FD":"1F482-1F3FD-200D-2640-FE0F","1F3FE":"1F482-1F3FE-200D-2640-FE0F","1F3FF":"1F482-1F3FF-200D-2640-FE0F"}},{"u":"1F977","s":"ninja","v":{"1F3FB":"1F977-1F3FB","1F3FC":"1F977-1F3FC","1F3FD":"1F977-1F3FD","1F3FE":"1F977-1F3FE","1F3FF":"1F977-1F3FF"}},{"u":"1F477","s":"construction_worker","v":{"1F3FB":"1F477-1F3FB","1F3FC":"1F477-1F3FC","1F3FD":"1F477-1F3FD","1F3FE":"1F477-1F3FE","1F3FF":"1F477-1F3FF"}},{"u":"1F477-200D-2642-FE0F","s":"male-construction-worker","v":{"1F3FB":"1F477-1F3FB-200D-2642-FE0F","1F3FC":"1F477-1F3FC-200D-2642-FE0F","1F3FD":"1F477-1F3FD-200D-2642-FE0F","1F3FE":"1F477-1F3FE-200D-2642-FE0F","1F3FF":"1F477-1F3FF-200D-2642-FE0F"}},{"u":"1F477-200D-2640-FE0F","s":"female-construction-worker","v":{"1F3FB":"1F477-1F3FB-200D-2640-FE0F","1F3FC":"1F477-1F3FC-200D-2640-FE0F","1F3FD":"1F477-1F3FD-200D-2640-FE0F","1F3FE":"1F477-1F3FE-200D-2640-FE0F","1F3FF":"1F477-1F3FF-200D-2640-FE0F"}},{"u":"1FAC5","s":"person_with_crown","v":{"1F3FB":"1FAC5-1F3FB","1F3FC":"1FAC5-1F3FC","1F3FD":"1FAC5-1F3FD","1F3FE":"1FAC5-1F3FE","1F3FF":"1FAC5-1F3FF"}},{"u":"1F934","s":"prince","v":{"1F3FB":"1F934-1F3FB","1F3FC":"1F934-1F3FC","1F3FD":"1F934-1F3FD","1F3FE":"1F934-1F3FE","1F3FF":"1F934-1F3FF"}},{"u":"1F478","s":"princess","v":{"1F3FB":"1F478-1F3FB","1F3FC":"1F478-1F3FC","1F3FD":"1F478-1F3FD","1F3FE":"1F478-1F3FE","1F3FF":"1F478-1F3FF"}},{"u":"1F473","s":"man_with_turban","v":{"1F3FB":"1F473-1F3FB","1F3FC":"1F473-1F3FC","1F3FD":"1F473-1F3FD","1F3FE":"1F473-1F3FE","1F3FF":"1F473-1F3FF"}},{"u":"1F473-200D-2642-FE0F","s":"man-wearing-turban","v":{"1F3FB":"1F473-1F3FB-200D-2642-FE0F","1F3FC":"1F473-1F3FC-200D-2642-FE0F","1F3FD":"1F473-1F3FD-200D-2642-FE0F","1F3FE":"1F473-1F3FE-200D-2642-FE0F","1F3FF":"1F473-1F3FF-200D-2642-FE0F"}},{"u":"1F473-200D-2640-FE0F","s":"woman-wearing-turban","v":{"1F3FB":"1F473-1F3FB-200D-2640-FE0F","1F3FC":"1F473-1F3FC-200D-2640-FE0F","1F3FD":"1F473-1F3FD-200D-2640-FE0F","1F3FE":"1F473-1F3FE-200D-2640-FE0F","1F3FF":"1F473-1F3FF-200D-2640-FE0F"}},{"u":"1F472","s":"man_with_gua_pi_mao","v":{"1F3FB":"1F472-1F3FB","1F3FC":"1F472-1F3FC","1F3FD":"1F472-1F3FD","1F3FE":"1F472-1F3FE","1F3FF":"1F472-1F3FF"}},{"u":"1F9D5","s":"person_with_headscarf","v":{"1F3FB":"1F9D5-1F3FB","1F3FC":"1F9D5-1F3FC","1F3FD":"1F9D5-1F3FD","1F3FE":"1F9D5-1F3FE","1F3FF":"1F9D5-1F3FF"}},{"u":"1F935","s":"person_in_tuxedo","v":{"1F3FB":"1F935-1F3FB","1F3FC":"1F935-1F3FC","1F3FD":"1F935-1F3FD","1F3FE":"1F935-1F3FE","1F3FF":"1F935-1F3FF"}},{"u":"1F935-200D-2642-FE0F","s":"man_in_tuxedo","v":{"1F3FB":"1F935-1F3FB-200D-2642-FE0F","1F3FC":"1F935-1F3FC-200D-2642-FE0F","1F3FD":"1F935-1F3FD-200D-2642-FE0F","1F3FE":"1F935-1F3FE-200D-2642-FE0F","1F3FF":"1F935-1F3FF-200D-2642-FE0F"}},{"u":"1F935-200D-2640-FE0F","s":"woman_in_tuxedo","v":{"1F3FB":"1F935-1F3FB-200D-2640-FE0F","1F3FC":"1F935-1F3FC-200D-2640-FE0F","1F3FD":"1F935-1F3FD-200D-2640-FE0F","1F3FE":"1F935-1F3FE-200D-2640-FE0F","1F3FF":"1F935-1F3FF-200D-2640-FE0F"}},{"u":"1F470","s":"bride_with_veil","v":{"1F3FB":"1F470-1F3FB","1F3FC":"1F470-1F3FC","1F3FD":"1F470-1F3FD","1F3FE":"1F470-1F3FE","1F3FF":"1F470-1F3FF"}},{"u":"1F470-200D-2642-FE0F","s":"man_with_veil","v":{"1F3FB":"1F470-1F3FB-200D-2642-FE0F","1F3FC":"1F470-1F3FC-200D-2642-FE0F","1F3FD":"1F470-1F3FD-200D-2642-FE0F","1F3FE":"1F470-1F3FE-200D-2642-FE0F","1F3FF":"1F470-1F3FF-200D-2642-FE0F"}},{"u":"1F470-200D-2640-FE0F","s":"woman_with_veil","v":{"1F3FB":"1F470-1F3FB-200D-2640-FE0F","1F3FC":"1F470-1F3FC-200D-2640-FE0F","1F3FD":"1F470-1F3FD-200D-2640-FE0F","1F3FE":"1F470-1F3FE-200D-2640-FE0F","1F3FF":"1F470-1F3FF-200D-2640-FE0F"}},{"u":"1F930","s":"pregnant_woman","v":{"1F3FB":"1F930-1F3FB","1F3FC":"1F930-1F3FC","1F3FD":"1F930-1F3FD","1F3FE":"1F930-1F3FE","1F3FF":"1F930-1F3FF"}},{"u":"1FAC3","s":"pregnant_man","v":{"1F3FB":"1FAC3-1F3FB","1F3FC":"1FAC3-1F3FC","1F3FD":"1FAC3-1F3FD","1F3FE":"1FAC3-1F3FE","1F3FF":"1FAC3-1F3FF"}},{"u":"1FAC4","s":"pregnant_person","v":{"1F3FB":"1FAC4-1F3FB","1F3FC":"1FAC4-1F3FC","1F3FD":"1FAC4-1F3FD","1F3FE":"1FAC4-1F3FE","1F3FF":"1FAC4-1F3FF"}},{"u":"1F931","s":"breast-feeding","v":{"1F3FB":"1F931-1F3FB","1F3FC":"1F931-1F3FC","1F3FD":"1F931-1F3FD","1F3FE":"1F931-1F3FE","1F3FF":"1F931-1F3FF"}},{"u":"1F469-200D-1F37C","s":"woman_feeding_baby","v":{"1F3FB":"1F469-1F3FB-200D-1F37C","1F3FC":"1F469-1F3FC-200D-1F37C","1F3FD":"1F469-1F3FD-200D-1F37C","1F3FE":"1F469-1F3FE-200D-1F37C","1F3FF":"1F469-1F3FF-200D-1F37C"}},{"u":"1F468-200D-1F37C","s":"man_feeding_baby","v":{"1F3FB":"1F468-1F3FB-200D-1F37C","1F3FC":"1F468-1F3FC-200D-1F37C","1F3FD":"1F468-1F3FD-200D-1F37C","1F3FE":"1F468-1F3FE-200D-1F37C","1F3FF":"1F468-1F3FF-200D-1F37C"}},{"u":"1F9D1-200D-1F37C","s":"person_feeding_baby","v":{"1F3FB":"1F9D1-1F3FB-200D-1F37C","1F3FC":"1F9D1-1F3FC-200D-1F37C","1F3FD":"1F9D1-1F3FD-200D-1F37C","1F3FE":"1F9D1-1F3FE-200D-1F37C","1F3FF":"1F9D1-1F3FF-200D-1F37C"}},{"u":"1F47C","s":"angel","v":{"1F3FB":"1F47C-1F3FB","1F3FC":"1F47C-1F3FC","1F3FD":"1F47C-1F3FD","1F3FE":"1F47C-1F3FE","1F3FF":"1F47C-1F3FF"}},{"u":"1F385","s":"santa","v":{"1F3FB":"1F385-1F3FB","1F3FC":"1F385-1F3FC","1F3FD":"1F385-1F3FD","1F3FE":"1F385-1F3FE","1F3FF":"1F385-1F3FF"}},{"u":"1F936","s":["mrs_claus","mother_christmas"],"v":{"1F3FB":"1F936-1F3FB","1F3FC":"1F936-1F3FC","1F3FD":"1F936-1F3FD","1F3FE":"1F936-1F3FE","1F3FF":"1F936-1F3FF"}},{"u":"1F9D1-200D-1F384","s":"mx_claus","v":{"1F3FB":"1F9D1-1F3FB-200D-1F384","1F3FC":"1F9D1-1F3FC-200D-1F384","1F3FD":"1F9D1-1F3FD-200D-1F384","1F3FE":"1F9D1-1F3FE-200D-1F384","1F3FF":"1F9D1-1F3FF-200D-1F384"}},{"u":"1F9B8","s":"superhero","v":{"1F3FB":"1F9B8-1F3FB","1F3FC":"1F9B8-1F3FC","1F3FD":"1F9B8-1F3FD","1F3FE":"1F9B8-1F3FE","1F3FF":"1F9B8-1F3FF"}},{"u":"1F9B8-200D-2642-FE0F","s":"male_superhero","v":{"1F3FB":"1F9B8-1F3FB-200D-2642-FE0F","1F3FC":"1F9B8-1F3FC-200D-2642-FE0F","1F3FD":"1F9B8-1F3FD-200D-2642-FE0F","1F3FE":"1F9B8-1F3FE-200D-2642-FE0F","1F3FF":"1F9B8-1F3FF-200D-2642-FE0F"}},{"u":"1F9B8-200D-2640-FE0F","s":"female_superhero","v":{"1F3FB":"1F9B8-1F3FB-200D-2640-FE0F","1F3FC":"1F9B8-1F3FC-200D-2640-FE0F","1F3FD":"1F9B8-1F3FD-200D-2640-FE0F","1F3FE":"1F9B8-1F3FE-200D-2640-FE0F","1F3FF":"1F9B8-1F3FF-200D-2640-FE0F"}},{"u":"1F9B9","s":"supervillain","v":{"1F3FB":"1F9B9-1F3FB","1F3FC":"1F9B9-1F3FC","1F3FD":"1F9B9-1F3FD","1F3FE":"1F9B9-1F3FE","1F3FF":"1F9B9-1F3FF"}},{"u":"1F9B9-200D-2642-FE0F","s":"male_supervillain","v":{"1F3FB":"1F9B9-1F3FB-200D-2642-FE0F","1F3FC":"1F9B9-1F3FC-200D-2642-FE0F","1F3FD":"1F9B9-1F3FD-200D-2642-FE0F","1F3FE":"1F9B9-1F3FE-200D-2642-FE0F","1F3FF":"1F9B9-1F3FF-200D-2642-FE0F"}},{"u":"1F9B9-200D-2640-FE0F","s":"female_supervillain","v":{"1F3FB":"1F9B9-1F3FB-200D-2640-FE0F","1F3FC":"1F9B9-1F3FC-200D-2640-FE0F","1F3FD":"1F9B9-1F3FD-200D-2640-FE0F","1F3FE":"1F9B9-1F3FE-200D-2640-FE0F","1F3FF":"1F9B9-1F3FF-200D-2640-FE0F"}},{"u":"1F9D9","s":"mage","v":{"1F3FB":"1F9D9-1F3FB","1F3FC":"1F9D9-1F3FC","1F3FD":"1F9D9-1F3FD","1F3FE":"1F9D9-1F3FE","1F3FF":"1F9D9-1F3FF"}},{"u":"1F9D9-200D-2642-FE0F","s":"male_mage","v":{"1F3FB":"1F9D9-1F3FB-200D-2642-FE0F","1F3FC":"1F9D9-1F3FC-200D-2642-FE0F","1F3FD":"1F9D9-1F3FD-200D-2642-FE0F","1F3FE":"1F9D9-1F3FE-200D-2642-FE0F","1F3FF":"1F9D9-1F3FF-200D-2642-FE0F"}},{"u":"1F9D9-200D-2640-FE0F","s":"female_mage","v":{"1F3FB":"1F9D9-1F3FB-200D-2640-FE0F","1F3FC":"1F9D9-1F3FC-200D-2640-FE0F","1F3FD":"1F9D9-1F3FD-200D-2640-FE0F","1F3FE":"1F9D9-1F3FE-200D-2640-FE0F","1F3FF":"1F9D9-1F3FF-200D-2640-FE0F"}},{"u":"1F9DA","s":"fairy","v":{"1F3FB":"1F9DA-1F3FB","1F3FC":"1F9DA-1F3FC","1F3FD":"1F9DA-1F3FD","1F3FE":"1F9DA-1F3FE","1F3FF":"1F9DA-1F3FF"}},{"u":"1F9DA-200D-2642-FE0F","s":"male_fairy","v":{"1F3FB":"1F9DA-1F3FB-200D-2642-FE0F","1F3FC":"1F9DA-1F3FC-200D-2642-FE0F","1F3FD":"1F9DA-1F3FD-200D-2642-FE0F","1F3FE":"1F9DA-1F3FE-200D-2642-FE0F","1F3FF":"1F9DA-1F3FF-200D-2642-FE0F"}},{"u":"1F9DA-200D-2640-FE0F","s":"female_fairy","v":{"1F3FB":"1F9DA-1F3FB-200D-2640-FE0F","1F3FC":"1F9DA-1F3FC-200D-2640-FE0F","1F3FD":"1F9DA-1F3FD-200D-2640-FE0F","1F3FE":"1F9DA-1F3FE-200D-2640-FE0F","1F3FF":"1F9DA-1F3FF-200D-2640-FE0F"}},{"u":"1F9DB","s":"vampire","v":{"1F3FB":"1F9DB-1F3FB","1F3FC":"1F9DB-1F3FC","1F3FD":"1F9DB-1F3FD","1F3FE":"1F9DB-1F3FE","1F3FF":"1F9DB-1F3FF"}},{"u":"1F9DB-200D-2642-FE0F","s":"male_vampire","v":{"1F3FB":"1F9DB-1F3FB-200D-2642-FE0F","1F3FC":"1F9DB-1F3FC-200D-2642-FE0F","1F3FD":"1F9DB-1F3FD-200D-2642-FE0F","1F3FE":"1F9DB-1F3FE-200D-2642-FE0F","1F3FF":"1F9DB-1F3FF-200D-2642-FE0F"}},{"u":"1F9DB-200D-2640-FE0F","s":"female_vampire","v":{"1F3FB":"1F9DB-1F3FB-200D-2640-FE0F","1F3FC":"1F9DB-1F3FC-200D-2640-FE0F","1F3FD":"1F9DB-1F3FD-200D-2640-FE0F","1F3FE":"1F9DB-1F3FE-200D-2640-FE0F","1F3FF":"1F9DB-1F3FF-200D-2640-FE0F"}},{"u":"1F9DC","s":"merperson","v":{"1F3FB":"1F9DC-1F3FB","1F3FC":"1F9DC-1F3FC","1F3FD":"1F9DC-1F3FD","1F3FE":"1F9DC-1F3FE","1F3FF":"1F9DC-1F3FF"}},{"u":"1F9DC-200D-2642-FE0F","s":"merman","v":{"1F3FB":"1F9DC-1F3FB-200D-2642-FE0F","1F3FC":"1F9DC-1F3FC-200D-2642-FE0F","1F3FD":"1F9DC-1F3FD-200D-2642-FE0F","1F3FE":"1F9DC-1F3FE-200D-2642-FE0F","1F3FF":"1F9DC-1F3FF-200D-2642-FE0F"}},{"u":"1F9DC-200D-2640-FE0F","s":"mermaid","v":{"1F3FB":"1F9DC-1F3FB-200D-2640-FE0F","1F3FC":"1F9DC-1F3FC-200D-2640-FE0F","1F3FD":"1F9DC-1F3FD-200D-2640-FE0F","1F3FE":"1F9DC-1F3FE-200D-2640-FE0F","1F3FF":"1F9DC-1F3FF-200D-2640-FE0F"}},{"u":"1F9DD","s":"elf","v":{"1F3FB":"1F9DD-1F3FB","1F3FC":"1F9DD-1F3FC","1F3FD":"1F9DD-1F3FD","1F3FE":"1F9DD-1F3FE","1F3FF":"1F9DD-1F3FF"}},{"u":"1F9DD-200D-2642-FE0F","s":"male_elf","v":{"1F3FB":"1F9DD-1F3FB-200D-2642-FE0F","1F3FC":"1F9DD-1F3FC-200D-2642-FE0F","1F3FD":"1F9DD-1F3FD-200D-2642-FE0F","1F3FE":"1F9DD-1F3FE-200D-2642-FE0F","1F3FF":"1F9DD-1F3FF-200D-2642-FE0F"}},{"u":"1F9DD-200D-2640-FE0F","s":"female_elf","v":{"1F3FB":"1F9DD-1F3FB-200D-2640-FE0F","1F3FC":"1F9DD-1F3FC-200D-2640-FE0F","1F3FD":"1F9DD-1F3FD-200D-2640-FE0F","1F3FE":"1F9DD-1F3FE-200D-2640-FE0F","1F3FF":"1F9DD-1F3FF-200D-2640-FE0F"}},{"u":"1F9DE","s":"genie"},{"u":"1F9DE-200D-2642-FE0F","s":"male_genie"},{"u":"1F9DE-200D-2640-FE0F","s":"female_genie"},{"u":"1F9DF","s":"zombie"},{"u":"1F9DF-200D-2642-FE0F","s":"male_zombie"},{"u":"1F9DF-200D-2640-FE0F","s":"female_zombie"},{"u":"1F9CC","s":"troll"},{"u":"1F486","s":"massage","v":{"1F3FB":"1F486-1F3FB","1F3FC":"1F486-1F3FC","1F3FD":"1F486-1F3FD","1F3FE":"1F486-1F3FE","1F3FF":"1F486-1F3FF"}},{"u":"1F486-200D-2642-FE0F","s":"man-getting-massage","v":{"1F3FB":"1F486-1F3FB-200D-2642-FE0F","1F3FC":"1F486-1F3FC-200D-2642-FE0F","1F3FD":"1F486-1F3FD-200D-2642-FE0F","1F3FE":"1F486-1F3FE-200D-2642-FE0F","1F3FF":"1F486-1F3FF-200D-2642-FE0F"}},{"u":"1F486-200D-2640-FE0F","s":"woman-getting-massage","v":{"1F3FB":"1F486-1F3FB-200D-2640-FE0F","1F3FC":"1F486-1F3FC-200D-2640-FE0F","1F3FD":"1F486-1F3FD-200D-2640-FE0F","1F3FE":"1F486-1F3FE-200D-2640-FE0F","1F3FF":"1F486-1F3FF-200D-2640-FE0F"}},{"u":"1F487","s":"haircut","v":{"1F3FB":"1F487-1F3FB","1F3FC":"1F487-1F3FC","1F3FD":"1F487-1F3FD","1F3FE":"1F487-1F3FE","1F3FF":"1F487-1F3FF"}},{"u":"1F487-200D-2642-FE0F","s":"man-getting-haircut","v":{"1F3FB":"1F487-1F3FB-200D-2642-FE0F","1F3FC":"1F487-1F3FC-200D-2642-FE0F","1F3FD":"1F487-1F3FD-200D-2642-FE0F","1F3FE":"1F487-1F3FE-200D-2642-FE0F","1F3FF":"1F487-1F3FF-200D-2642-FE0F"}},{"u":"1F487-200D-2640-FE0F","s":"woman-getting-haircut","v":{"1F3FB":"1F487-1F3FB-200D-2640-FE0F","1F3FC":"1F487-1F3FC-200D-2640-FE0F","1F3FD":"1F487-1F3FD-200D-2640-FE0F","1F3FE":"1F487-1F3FE-200D-2640-FE0F","1F3FF":"1F487-1F3FF-200D-2640-FE0F"}},{"u":"1F6B6","s":"walking","v":{"1F3FB":"1F6B6-1F3FB","1F3FC":"1F6B6-1F3FC","1F3FD":"1F6B6-1F3FD","1F3FE":"1F6B6-1F3FE","1F3FF":"1F6B6-1F3FF"}},{"u":"1F6B6-200D-2642-FE0F","s":"man-walking","v":{"1F3FB":"1F6B6-1F3FB-200D-2642-FE0F","1F3FC":"1F6B6-1F3FC-200D-2642-FE0F","1F3FD":"1F6B6-1F3FD-200D-2642-FE0F","1F3FE":"1F6B6-1F3FE-200D-2642-FE0F","1F3FF":"1F6B6-1F3FF-200D-2642-FE0F"}},{"u":"1F6B6-200D-2640-FE0F","s":"woman-walking","v":{"1F3FB":"1F6B6-1F3FB-200D-2640-FE0F","1F3FC":"1F6B6-1F3FC-200D-2640-FE0F","1F3FD":"1F6B6-1F3FD-200D-2640-FE0F","1F3FE":"1F6B6-1F3FE-200D-2640-FE0F","1F3FF":"1F6B6-1F3FF-200D-2640-FE0F"}},{"u":"1F6B6-200D-27A1-FE0F","s":"person_walking_facing_right","v":{"1F3FB":"1F6B6-1F3FB-200D-27A1-FE0F","1F3FC":"1F6B6-1F3FC-200D-27A1-FE0F","1F3FD":"1F6B6-1F3FD-200D-27A1-FE0F","1F3FE":"1F6B6-1F3FE-200D-27A1-FE0F","1F3FF":"1F6B6-1F3FF-200D-27A1-FE0F"}},{"u":"1F6B6-200D-2640-FE0F-200D-27A1-FE0F","s":"woman_walking_facing_right","v":{"1F3FB":"1F6B6-1F3FB-200D-2640-FE0F-200D-27A1-FE0F","1F3FC":"1F6B6-1F3FC-200D-2640-FE0F-200D-27A1-FE0F","1F3FD":"1F6B6-1F3FD-200D-2640-FE0F-200D-27A1-FE0F","1F3FE":"1F6B6-1F3FE-200D-2640-FE0F-200D-27A1-FE0F","1F3FF":"1F6B6-1F3FF-200D-2640-FE0F-200D-27A1-FE0F"}},{"u":"1F6B6-200D-2642-FE0F-200D-27A1-FE0F","s":"man_walking_facing_right","v":{"1F3FB":"1F6B6-1F3FB-200D-2642-FE0F-200D-27A1-FE0F","1F3FC":"1F6B6-1F3FC-200D-2642-FE0F-200D-27A1-FE0F","1F3FD":"1F6B6-1F3FD-200D-2642-FE0F-200D-27A1-FE0F","1F3FE":"1F6B6-1F3FE-200D-2642-FE0F-200D-27A1-FE0F","1F3FF":"1F6B6-1F3FF-200D-2642-FE0F-200D-27A1-FE0F"}},{"u":"1F9CD","s":"standing_person","v":{"1F3FB":"1F9CD-1F3FB","1F3FC":"1F9CD-1F3FC","1F3FD":"1F9CD-1F3FD","1F3FE":"1F9CD-1F3FE","1F3FF":"1F9CD-1F3FF"}},{"u":"1F9CD-200D-2642-FE0F","s":"man_standing","v":{"1F3FB":"1F9CD-1F3FB-200D-2642-FE0F","1F3FC":"1F9CD-1F3FC-200D-2642-FE0F","1F3FD":"1F9CD-1F3FD-200D-2642-FE0F","1F3FE":"1F9CD-1F3FE-200D-2642-FE0F","1F3FF":"1F9CD-1F3FF-200D-2642-FE0F"}},{"u":"1F9CD-200D-2640-FE0F","s":"woman_standing","v":{"1F3FB":"1F9CD-1F3FB-200D-2640-FE0F","1F3FC":"1F9CD-1F3FC-200D-2640-FE0F","1F3FD":"1F9CD-1F3FD-200D-2640-FE0F","1F3FE":"1F9CD-1F3FE-200D-2640-FE0F","1F3FF":"1F9CD-1F3FF-200D-2640-FE0F"}},{"u":"1F9CE","s":"kneeling_person","v":{"1F3FB":"1F9CE-1F3FB","1F3FC":"1F9CE-1F3FC","1F3FD":"1F9CE-1F3FD","1F3FE":"1F9CE-1F3FE","1F3FF":"1F9CE-1F3FF"}},{"u":"1F9CE-200D-2642-FE0F","s":"man_kneeling","v":{"1F3FB":"1F9CE-1F3FB-200D-2642-FE0F","1F3FC":"1F9CE-1F3FC-200D-2642-FE0F","1F3FD":"1F9CE-1F3FD-200D-2642-FE0F","1F3FE":"1F9CE-1F3FE-200D-2642-FE0F","1F3FF":"1F9CE-1F3FF-200D-2642-FE0F"}},{"u":"1F9CE-200D-2640-FE0F","s":"woman_kneeling","v":{"1F3FB":"1F9CE-1F3FB-200D-2640-FE0F","1F3FC":"1F9CE-1F3FC-200D-2640-FE0F","1F3FD":"1F9CE-1F3FD-200D-2640-FE0F","1F3FE":"1F9CE-1F3FE-200D-2640-FE0F","1F3FF":"1F9CE-1F3FF-200D-2640-FE0F"}},{"u":"1F9CE-200D-27A1-FE0F","s":"person_kneeling_facing_right","v":{"1F3FB":"1F9CE-1F3FB-200D-27A1-FE0F","1F3FC":"1F9CE-1F3FC-200D-27A1-FE0F","1F3FD":"1F9CE-1F3FD-200D-27A1-FE0F","1F3FE":"1F9CE-1F3FE-200D-27A1-FE0F","1F3FF":"1F9CE-1F3FF-200D-27A1-FE0F"}},{"u":"1F9CE-200D-2640-FE0F-200D-27A1-FE0F","s":"woman_kneeling_facing_right","v":{"1F3FB":"1F9CE-1F3FB-200D-2640-FE0F-200D-27A1-FE0F","1F3FC":"1F9CE-1F3FC-200D-2640-FE0F-200D-27A1-FE0F","1F3FD":"1F9CE-1F3FD-200D-2640-FE0F-200D-27A1-FE0F","1F3FE":"1F9CE-1F3FE-200D-2640-FE0F-200D-27A1-FE0F","1F3FF":"1F9CE-1F3FF-200D-2640-FE0F-200D-27A1-FE0F"}},{"u":"1F9CE-200D-2642-FE0F-200D-27A1-FE0F","s":"man_kneeling_facing_right","v":{"1F3FB":"1F9CE-1F3FB-200D-2642-FE0F-200D-27A1-FE0F","1F3FC":"1F9CE-1F3FC-200D-2642-FE0F-200D-27A1-FE0F","1F3FD":"1F9CE-1F3FD-200D-2642-FE0F-200D-27A1-FE0F","1F3FE":"1F9CE-1F3FE-200D-2642-FE0F-200D-27A1-FE0F","1F3FF":"1F9CE-1F3FF-200D-2642-FE0F-200D-27A1-FE0F"}},{"u":"1F9D1-200D-1F9AF","s":"person_with_probing_cane","v":{"1F3FB":"1F9D1-1F3FB-200D-1F9AF","1F3FC":"1F9D1-1F3FC-200D-1F9AF","1F3FD":"1F9D1-1F3FD-200D-1F9AF","1F3FE":"1F9D1-1F3FE-200D-1F9AF","1F3FF":"1F9D1-1F3FF-200D-1F9AF"}},{"u":"1F9D1-200D-1F9AF-200D-27A1-FE0F","s":"person_with_white_cane_facing_right","v":{"1F3FB":"1F9D1-1F3FB-200D-1F9AF-200D-27A1-FE0F","1F3FC":"1F9D1-1F3FC-200D-1F9AF-200D-27A1-FE0F","1F3FD":"1F9D1-1F3FD-200D-1F9AF-200D-27A1-FE0F","1F3FE":"1F9D1-1F3FE-200D-1F9AF-200D-27A1-FE0F","1F3FF":"1F9D1-1F3FF-200D-1F9AF-200D-27A1-FE0F"}},{"u":"1F468-200D-1F9AF","s":"man_with_probing_cane","v":{"1F3FB":"1F468-1F3FB-200D-1F9AF","1F3FC":"1F468-1F3FC-200D-1F9AF","1F3FD":"1F468-1F3FD-200D-1F9AF","1F3FE":"1F468-1F3FE-200D-1F9AF","1F3FF":"1F468-1F3FF-200D-1F9AF"}},{"u":"1F468-200D-1F9AF-200D-27A1-FE0F","s":"man_with_white_cane_facing_right","v":{"1F3FB":"1F468-1F3FB-200D-1F9AF-200D-27A1-FE0F","1F3FC":"1F468-1F3FC-200D-1F9AF-200D-27A1-FE0F","1F3FD":"1F468-1F3FD-200D-1F9AF-200D-27A1-FE0F","1F3FE":"1F468-1F3FE-200D-1F9AF-200D-27A1-FE0F","1F3FF":"1F468-1F3FF-200D-1F9AF-200D-27A1-FE0F"}},{"u":"1F469-200D-1F9AF","s":"woman_with_probing_cane","v":{"1F3FB":"1F469-1F3FB-200D-1F9AF","1F3FC":"1F469-1F3FC-200D-1F9AF","1F3FD":"1F469-1F3FD-200D-1F9AF","1F3FE":"1F469-1F3FE-200D-1F9AF","1F3FF":"1F469-1F3FF-200D-1F9AF"}},{"u":"1F469-200D-1F9AF-200D-27A1-FE0F","s":"woman_with_white_cane_facing_right","v":{"1F3FB":"1F469-1F3FB-200D-1F9AF-200D-27A1-FE0F","1F3FC":"1F469-1F3FC-200D-1F9AF-200D-27A1-FE0F","1F3FD":"1F469-1F3FD-200D-1F9AF-200D-27A1-FE0F","1F3FE":"1F469-1F3FE-200D-1F9AF-200D-27A1-FE0F","1F3FF":"1F469-1F3FF-200D-1F9AF-200D-27A1-FE0F"}},{"u":"1F9D1-200D-1F9BC","s":"person_in_motorized_wheelchair","v":{"1F3FB":"1F9D1-1F3FB-200D-1F9BC","1F3FC":"1F9D1-1F3FC-200D-1F9BC","1F3FD":"1F9D1-1F3FD-200D-1F9BC","1F3FE":"1F9D1-1F3FE-200D-1F9BC","1F3FF":"1F9D1-1F3FF-200D-1F9BC"}},{"u":"1F9D1-200D-1F9BC-200D-27A1-FE0F","s":"person_in_motorized_wheelchair_facing_right","v":{"1F3FB":"1F9D1-1F3FB-200D-1F9BC-200D-27A1-FE0F","1F3FC":"1F9D1-1F3FC-200D-1F9BC-200D-27A1-FE0F","1F3FD":"1F9D1-1F3FD-200D-1F9BC-200D-27A1-FE0F","1F3FE":"1F9D1-1F3FE-200D-1F9BC-200D-27A1-FE0F","1F3FF":"1F9D1-1F3FF-200D-1F9BC-200D-27A1-FE0F"}},{"u":"1F468-200D-1F9BC","s":"man_in_motorized_wheelchair","v":{"1F3FB":"1F468-1F3FB-200D-1F9BC","1F3FC":"1F468-1F3FC-200D-1F9BC","1F3FD":"1F468-1F3FD-200D-1F9BC","1F3FE":"1F468-1F3FE-200D-1F9BC","1F3FF":"1F468-1F3FF-200D-1F9BC"}},{"u":"1F468-200D-1F9BC-200D-27A1-FE0F","s":"man_in_motorized_wheelchair_facing_right","v":{"1F3FB":"1F468-1F3FB-200D-1F9BC-200D-27A1-FE0F","1F3FC":"1F468-1F3FC-200D-1F9BC-200D-27A1-FE0F","1F3FD":"1F468-1F3FD-200D-1F9BC-200D-27A1-FE0F","1F3FE":"1F468-1F3FE-200D-1F9BC-200D-27A1-FE0F","1F3FF":"1F468-1F3FF-200D-1F9BC-200D-27A1-FE0F"}},{"u":"1F469-200D-1F9BC","s":"woman_in_motorized_wheelchair","v":{"1F3FB":"1F469-1F3FB-200D-1F9BC","1F3FC":"1F469-1F3FC-200D-1F9BC","1F3FD":"1F469-1F3FD-200D-1F9BC","1F3FE":"1F469-1F3FE-200D-1F9BC","1F3FF":"1F469-1F3FF-200D-1F9BC"}},{"u":"1F469-200D-1F9BC-200D-27A1-FE0F","s":"woman_in_motorized_wheelchair_facing_right","v":{"1F3FB":"1F469-1F3FB-200D-1F9BC-200D-27A1-FE0F","1F3FC":"1F469-1F3FC-200D-1F9BC-200D-27A1-FE0F","1F3FD":"1F469-1F3FD-200D-1F9BC-200D-27A1-FE0F","1F3FE":"1F469-1F3FE-200D-1F9BC-200D-27A1-FE0F","1F3FF":"1F469-1F3FF-200D-1F9BC-200D-27A1-FE0F"}},{"u":"1F9D1-200D-1F9BD","s":"person_in_manual_wheelchair","v":{"1F3FB":"1F9D1-1F3FB-200D-1F9BD","1F3FC":"1F9D1-1F3FC-200D-1F9BD","1F3FD":"1F9D1-1F3FD-200D-1F9BD","1F3FE":"1F9D1-1F3FE-200D-1F9BD","1F3FF":"1F9D1-1F3FF-200D-1F9BD"}},{"u":"1F9D1-200D-1F9BD-200D-27A1-FE0F","s":"person_in_manual_wheelchair_facing_right","v":{"1F3FB":"1F9D1-1F3FB-200D-1F9BD-200D-27A1-FE0F","1F3FC":"1F9D1-1F3FC-200D-1F9BD-200D-27A1-FE0F","1F3FD":"1F9D1-1F3FD-200D-1F9BD-200D-27A1-FE0F","1F3FE":"1F9D1-1F3FE-200D-1F9BD-200D-27A1-FE0F","1F3FF":"1F9D1-1F3FF-200D-1F9BD-200D-27A1-FE0F"}},{"u":"1F468-200D-1F9BD","s":"man_in_manual_wheelchair","v":{"1F3FB":"1F468-1F3FB-200D-1F9BD","1F3FC":"1F468-1F3FC-200D-1F9BD","1F3FD":"1F468-1F3FD-200D-1F9BD","1F3FE":"1F468-1F3FE-200D-1F9BD","1F3FF":"1F468-1F3FF-200D-1F9BD"}},{"u":"1F468-200D-1F9BD-200D-27A1-FE0F","s":"man_in_manual_wheelchair_facing_right","v":{"1F3FB":"1F468-1F3FB-200D-1F9BD-200D-27A1-FE0F","1F3FC":"1F468-1F3FC-200D-1F9BD-200D-27A1-FE0F","1F3FD":"1F468-1F3FD-200D-1F9BD-200D-27A1-FE0F","1F3FE":"1F468-1F3FE-200D-1F9BD-200D-27A1-FE0F","1F3FF":"1F468-1F3FF-200D-1F9BD-200D-27A1-FE0F"}},{"u":"1F469-200D-1F9BD","s":"woman_in_manual_wheelchair","v":{"1F3FB":"1F469-1F3FB-200D-1F9BD","1F3FC":"1F469-1F3FC-200D-1F9BD","1F3FD":"1F469-1F3FD-200D-1F9BD","1F3FE":"1F469-1F3FE-200D-1F9BD","1F3FF":"1F469-1F3FF-200D-1F9BD"}},{"u":"1F469-200D-1F9BD-200D-27A1-FE0F","s":"woman_in_manual_wheelchair_facing_right","v":{"1F3FB":"1F469-1F3FB-200D-1F9BD-200D-27A1-FE0F","1F3FC":"1F469-1F3FC-200D-1F9BD-200D-27A1-FE0F","1F3FD":"1F469-1F3FD-200D-1F9BD-200D-27A1-FE0F","1F3FE":"1F469-1F3FE-200D-1F9BD-200D-27A1-FE0F","1F3FF":"1F469-1F3FF-200D-1F9BD-200D-27A1-FE0F"}},{"u":"1F3C3","s":["runner","running"],"v":{"1F3FB":"1F3C3-1F3FB","1F3FC":"1F3C3-1F3FC","1F3FD":"1F3C3-1F3FD","1F3FE":"1F3C3-1F3FE","1F3FF":"1F3C3-1F3FF"}},{"u":"1F3C3-200D-2642-FE0F","s":"man-running","v":{"1F3FB":"1F3C3-1F3FB-200D-2642-FE0F","1F3FC":"1F3C3-1F3FC-200D-2642-FE0F","1F3FD":"1F3C3-1F3FD-200D-2642-FE0F","1F3FE":"1F3C3-1F3FE-200D-2642-FE0F","1F3FF":"1F3C3-1F3FF-200D-2642-FE0F"}},{"u":"1F3C3-200D-2640-FE0F","s":"woman-running","v":{"1F3FB":"1F3C3-1F3FB-200D-2640-FE0F","1F3FC":"1F3C3-1F3FC-200D-2640-FE0F","1F3FD":"1F3C3-1F3FD-200D-2640-FE0F","1F3FE":"1F3C3-1F3FE-200D-2640-FE0F","1F3FF":"1F3C3-1F3FF-200D-2640-FE0F"}},{"u":"1F3C3-200D-27A1-FE0F","s":"person_running_facing_right","v":{"1F3FB":"1F3C3-1F3FB-200D-27A1-FE0F","1F3FC":"1F3C3-1F3FC-200D-27A1-FE0F","1F3FD":"1F3C3-1F3FD-200D-27A1-FE0F","1F3FE":"1F3C3-1F3FE-200D-27A1-FE0F","1F3FF":"1F3C3-1F3FF-200D-27A1-FE0F"}},{"u":"1F3C3-200D-2640-FE0F-200D-27A1-FE0F","s":"woman_running_facing_right","v":{"1F3FB":"1F3C3-1F3FB-200D-2640-FE0F-200D-27A1-FE0F","1F3FC":"1F3C3-1F3FC-200D-2640-FE0F-200D-27A1-FE0F","1F3FD":"1F3C3-1F3FD-200D-2640-FE0F-200D-27A1-FE0F","1F3FE":"1F3C3-1F3FE-200D-2640-FE0F-200D-27A1-FE0F","1F3FF":"1F3C3-1F3FF-200D-2640-FE0F-200D-27A1-FE0F"}},{"u":"1F3C3-200D-2642-FE0F-200D-27A1-FE0F","s":"man_running_facing_right","v":{"1F3FB":"1F3C3-1F3FB-200D-2642-FE0F-200D-27A1-FE0F","1F3FC":"1F3C3-1F3FC-200D-2642-FE0F-200D-27A1-FE0F","1F3FD":"1F3C3-1F3FD-200D-2642-FE0F-200D-27A1-FE0F","1F3FE":"1F3C3-1F3FE-200D-2642-FE0F-200D-27A1-FE0F","1F3FF":"1F3C3-1F3FF-200D-2642-FE0F-200D-27A1-FE0F"}},{"u":"1F483","s":"dancer","v":{"1F3FB":"1F483-1F3FB","1F3FC":"1F483-1F3FC","1F3FD":"1F483-1F3FD","1F3FE":"1F483-1F3FE","1F3FF":"1F483-1F3FF"}},{"u":"1F57A","s":"man_dancing","v":{"1F3FB":"1F57A-1F3FB","1F3FC":"1F57A-1F3FC","1F3FD":"1F57A-1F3FD","1F3FE":"1F57A-1F3FE","1F3FF":"1F57A-1F3FF"}},{"u":"1F574-FE0F","s":"man_in_business_suit_levitating","v":{"1F3FB":"1F574-1F3FB","1F3FC":"1F574-1F3FC","1F3FD":"1F574-1F3FD","1F3FE":"1F574-1F3FE","1F3FF":"1F574-1F3FF"}},{"u":"1F46F","s":"dancers"},{"u":"1F46F-200D-2642-FE0F","s":["men-with-bunny-ears-partying","man-with-bunny-ears-partying"]},{"u":"1F46F-200D-2640-FE0F","s":["women-with-bunny-ears-partying","woman-with-bunny-ears-partying"]},{"u":"1F9D6","s":"person_in_steamy_room","v":{"1F3FB":"1F9D6-1F3FB","1F3FC":"1F9D6-1F3FC","1F3FD":"1F9D6-1F3FD","1F3FE":"1F9D6-1F3FE","1F3FF":"1F9D6-1F3FF"}},{"u":"1F9D6-200D-2642-FE0F","s":"man_in_steamy_room","v":{"1F3FB":"1F9D6-1F3FB-200D-2642-FE0F","1F3FC":"1F9D6-1F3FC-200D-2642-FE0F","1F3FD":"1F9D6-1F3FD-200D-2642-FE0F","1F3FE":"1F9D6-1F3FE-200D-2642-FE0F","1F3FF":"1F9D6-1F3FF-200D-2642-FE0F"}},{"u":"1F9D6-200D-2640-FE0F","s":"woman_in_steamy_room","v":{"1F3FB":"1F9D6-1F3FB-200D-2640-FE0F","1F3FC":"1F9D6-1F3FC-200D-2640-FE0F","1F3FD":"1F9D6-1F3FD-200D-2640-FE0F","1F3FE":"1F9D6-1F3FE-200D-2640-FE0F","1F3FF":"1F9D6-1F3FF-200D-2640-FE0F"}},{"u":"1F9D7","s":"person_climbing","v":{"1F3FB":"1F9D7-1F3FB","1F3FC":"1F9D7-1F3FC","1F3FD":"1F9D7-1F3FD","1F3FE":"1F9D7-1F3FE","1F3FF":"1F9D7-1F3FF"}},{"u":"1F9D7-200D-2642-FE0F","s":"man_climbing","v":{"1F3FB":"1F9D7-1F3FB-200D-2642-FE0F","1F3FC":"1F9D7-1F3FC-200D-2642-FE0F","1F3FD":"1F9D7-1F3FD-200D-2642-FE0F","1F3FE":"1F9D7-1F3FE-200D-2642-FE0F","1F3FF":"1F9D7-1F3FF-200D-2642-FE0F"}},{"u":"1F9D7-200D-2640-FE0F","s":"woman_climbing","v":{"1F3FB":"1F9D7-1F3FB-200D-2640-FE0F","1F3FC":"1F9D7-1F3FC-200D-2640-FE0F","1F3FD":"1F9D7-1F3FD-200D-2640-FE0F","1F3FE":"1F9D7-1F3FE-200D-2640-FE0F","1F3FF":"1F9D7-1F3FF-200D-2640-FE0F"}},{"u":"1F93A","s":"fencer"},{"u":"1F3C7","s":"horse_racing","v":{"1F3FB":"1F3C7-1F3FB","1F3FC":"1F3C7-1F3FC","1F3FD":"1F3C7-1F3FD","1F3FE":"1F3C7-1F3FE","1F3FF":"1F3C7-1F3FF"}},{"u":"26F7-FE0F","s":"skier"},{"u":"1F3C2","s":"snowboarder","v":{"1F3FB":"1F3C2-1F3FB","1F3FC":"1F3C2-1F3FC","1F3FD":"1F3C2-1F3FD","1F3FE":"1F3C2-1F3FE","1F3FF":"1F3C2-1F3FF"}},{"u":"1F3CC-FE0F","s":"golfer","v":{"1F3FB":"1F3CC-1F3FB","1F3FC":"1F3CC-1F3FC","1F3FD":"1F3CC-1F3FD","1F3FE":"1F3CC-1F3FE","1F3FF":"1F3CC-1F3FF"}},{"u":"1F3CC-FE0F-200D-2642-FE0F","s":"man-golfing","v":{"1F3FB":"1F3CC-1F3FB-200D-2642-FE0F","1F3FC":"1F3CC-1F3FC-200D-2642-FE0F","1F3FD":"1F3CC-1F3FD-200D-2642-FE0F","1F3FE":"1F3CC-1F3FE-200D-2642-FE0F","1F3FF":"1F3CC-1F3FF-200D-2642-FE0F"}},{"u":"1F3CC-FE0F-200D-2640-FE0F","s":"woman-golfing","v":{"1F3FB":"1F3CC-1F3FB-200D-2640-FE0F","1F3FC":"1F3CC-1F3FC-200D-2640-FE0F","1F3FD":"1F3CC-1F3FD-200D-2640-FE0F","1F3FE":"1F3CC-1F3FE-200D-2640-FE0F","1F3FF":"1F3CC-1F3FF-200D-2640-FE0F"}},{"u":"1F3C4","s":"surfer","v":{"1F3FB":"1F3C4-1F3FB","1F3FC":"1F3C4-1F3FC","1F3FD":"1F3C4-1F3FD","1F3FE":"1F3C4-1F3FE","1F3FF":"1F3C4-1F3FF"}},{"u":"1F3C4-200D-2642-FE0F","s":"man-surfing","v":{"1F3FB":"1F3C4-1F3FB-200D-2642-FE0F","1F3FC":"1F3C4-1F3FC-200D-2642-FE0F","1F3FD":"1F3C4-1F3FD-200D-2642-FE0F","1F3FE":"1F3C4-1F3FE-200D-2642-FE0F","1F3FF":"1F3C4-1F3FF-200D-2642-FE0F"}},{"u":"1F3C4-200D-2640-FE0F","s":"woman-surfing","v":{"1F3FB":"1F3C4-1F3FB-200D-2640-FE0F","1F3FC":"1F3C4-1F3FC-200D-2640-FE0F","1F3FD":"1F3C4-1F3FD-200D-2640-FE0F","1F3FE":"1F3C4-1F3FE-200D-2640-FE0F","1F3FF":"1F3C4-1F3FF-200D-2640-FE0F"}},{"u":"1F6A3","s":"rowboat","v":{"1F3FB":"1F6A3-1F3FB","1F3FC":"1F6A3-1F3FC","1F3FD":"1F6A3-1F3FD","1F3FE":"1F6A3-1F3FE","1F3FF":"1F6A3-1F3FF"}},{"u":"1F6A3-200D-2642-FE0F","s":"man-rowing-boat","v":{"1F3FB":"1F6A3-1F3FB-200D-2642-FE0F","1F3FC":"1F6A3-1F3FC-200D-2642-FE0F","1F3FD":"1F6A3-1F3FD-200D-2642-FE0F","1F3FE":"1F6A3-1F3FE-200D-2642-FE0F","1F3FF":"1F6A3-1F3FF-200D-2642-FE0F"}},{"u":"1F6A3-200D-2640-FE0F","s":"woman-rowing-boat","v":{"1F3FB":"1F6A3-1F3FB-200D-2640-FE0F","1F3FC":"1F6A3-1F3FC-200D-2640-FE0F","1F3FD":"1F6A3-1F3FD-200D-2640-FE0F","1F3FE":"1F6A3-1F3FE-200D-2640-FE0F","1F3FF":"1F6A3-1F3FF-200D-2640-FE0F"}},{"u":"1F3CA","s":"swimmer","v":{"1F3FB":"1F3CA-1F3FB","1F3FC":"1F3CA-1F3FC","1F3FD":"1F3CA-1F3FD","1F3FE":"1F3CA-1F3FE","1F3FF":"1F3CA-1F3FF"}},{"u":"1F3CA-200D-2642-FE0F","s":"man-swimming","v":{"1F3FB":"1F3CA-1F3FB-200D-2642-FE0F","1F3FC":"1F3CA-1F3FC-200D-2642-FE0F","1F3FD":"1F3CA-1F3FD-200D-2642-FE0F","1F3FE":"1F3CA-1F3FE-200D-2642-FE0F","1F3FF":"1F3CA-1F3FF-200D-2642-FE0F"}},{"u":"1F3CA-200D-2640-FE0F","s":"woman-swimming","v":{"1F3FB":"1F3CA-1F3FB-200D-2640-FE0F","1F3FC":"1F3CA-1F3FC-200D-2640-FE0F","1F3FD":"1F3CA-1F3FD-200D-2640-FE0F","1F3FE":"1F3CA-1F3FE-200D-2640-FE0F","1F3FF":"1F3CA-1F3FF-200D-2640-FE0F"}},{"u":"26F9-FE0F","s":"person_with_ball","v":{"1F3FB":"26F9-1F3FB","1F3FC":"26F9-1F3FC","1F3FD":"26F9-1F3FD","1F3FE":"26F9-1F3FE","1F3FF":"26F9-1F3FF"}},{"u":"26F9-FE0F-200D-2642-FE0F","s":"man-bouncing-ball","v":{"1F3FB":"26F9-1F3FB-200D-2642-FE0F","1F3FC":"26F9-1F3FC-200D-2642-FE0F","1F3FD":"26F9-1F3FD-200D-2642-FE0F","1F3FE":"26F9-1F3FE-200D-2642-FE0F","1F3FF":"26F9-1F3FF-200D-2642-FE0F"}},{"u":"26F9-FE0F-200D-2640-FE0F","s":"woman-bouncing-ball","v":{"1F3FB":"26F9-1F3FB-200D-2640-FE0F","1F3FC":"26F9-1F3FC-200D-2640-FE0F","1F3FD":"26F9-1F3FD-200D-2640-FE0F","1F3FE":"26F9-1F3FE-200D-2640-FE0F","1F3FF":"26F9-1F3FF-200D-2640-FE0F"}},{"u":"1F3CB-FE0F","s":"weight_lifter","v":{"1F3FB":"1F3CB-1F3FB","1F3FC":"1F3CB-1F3FC","1F3FD":"1F3CB-1F3FD","1F3FE":"1F3CB-1F3FE","1F3FF":"1F3CB-1F3FF"}},{"u":"1F3CB-FE0F-200D-2642-FE0F","s":"man-lifting-weights","v":{"1F3FB":"1F3CB-1F3FB-200D-2642-FE0F","1F3FC":"1F3CB-1F3FC-200D-2642-FE0F","1F3FD":"1F3CB-1F3FD-200D-2642-FE0F","1F3FE":"1F3CB-1F3FE-200D-2642-FE0F","1F3FF":"1F3CB-1F3FF-200D-2642-FE0F"}},{"u":"1F3CB-FE0F-200D-2640-FE0F","s":"woman-lifting-weights","v":{"1F3FB":"1F3CB-1F3FB-200D-2640-FE0F","1F3FC":"1F3CB-1F3FC-200D-2640-FE0F","1F3FD":"1F3CB-1F3FD-200D-2640-FE0F","1F3FE":"1F3CB-1F3FE-200D-2640-FE0F","1F3FF":"1F3CB-1F3FF-200D-2640-FE0F"}},{"u":"1F6B4","s":"bicyclist","v":{"1F3FB":"1F6B4-1F3FB","1F3FC":"1F6B4-1F3FC","1F3FD":"1F6B4-1F3FD","1F3FE":"1F6B4-1F3FE","1F3FF":"1F6B4-1F3FF"}},{"u":"1F6B4-200D-2642-FE0F","s":"man-biking","v":{"1F3FB":"1F6B4-1F3FB-200D-2642-FE0F","1F3FC":"1F6B4-1F3FC-200D-2642-FE0F","1F3FD":"1F6B4-1F3FD-200D-2642-FE0F","1F3FE":"1F6B4-1F3FE-200D-2642-FE0F","1F3FF":"1F6B4-1F3FF-200D-2642-FE0F"}},{"u":"1F6B4-200D-2640-FE0F","s":"woman-biking","v":{"1F3FB":"1F6B4-1F3FB-200D-2640-FE0F","1F3FC":"1F6B4-1F3FC-200D-2640-FE0F","1F3FD":"1F6B4-1F3FD-200D-2640-FE0F","1F3FE":"1F6B4-1F3FE-200D-2640-FE0F","1F3FF":"1F6B4-1F3FF-200D-2640-FE0F"}},{"u":"1F6B5","s":"mountain_bicyclist","v":{"1F3FB":"1F6B5-1F3FB","1F3FC":"1F6B5-1F3FC","1F3FD":"1F6B5-1F3FD","1F3FE":"1F6B5-1F3FE","1F3FF":"1F6B5-1F3FF"}},{"u":"1F6B5-200D-2642-FE0F","s":"man-mountain-biking","v":{"1F3FB":"1F6B5-1F3FB-200D-2642-FE0F","1F3FC":"1F6B5-1F3FC-200D-2642-FE0F","1F3FD":"1F6B5-1F3FD-200D-2642-FE0F","1F3FE":"1F6B5-1F3FE-200D-2642-FE0F","1F3FF":"1F6B5-1F3FF-200D-2642-FE0F"}},{"u":"1F6B5-200D-2640-FE0F","s":"woman-mountain-biking","v":{"1F3FB":"1F6B5-1F3FB-200D-2640-FE0F","1F3FC":"1F6B5-1F3FC-200D-2640-FE0F","1F3FD":"1F6B5-1F3FD-200D-2640-FE0F","1F3FE":"1F6B5-1F3FE-200D-2640-FE0F","1F3FF":"1F6B5-1F3FF-200D-2640-FE0F"}},{"u":"1F938","s":"person_doing_cartwheel","v":{"1F3FB":"1F938-1F3FB","1F3FC":"1F938-1F3FC","1F3FD":"1F938-1F3FD","1F3FE":"1F938-1F3FE","1F3FF":"1F938-1F3FF"}},{"u":"1F938-200D-2642-FE0F","s":"man-cartwheeling","v":{"1F3FB":"1F938-1F3FB-200D-2642-FE0F","1F3FC":"1F938-1F3FC-200D-2642-FE0F","1F3FD":"1F938-1F3FD-200D-2642-FE0F","1F3FE":"1F938-1F3FE-200D-2642-FE0F","1F3FF":"1F938-1F3FF-200D-2642-FE0F"}},{"u":"1F938-200D-2640-FE0F","s":"woman-cartwheeling","v":{"1F3FB":"1F938-1F3FB-200D-2640-FE0F","1F3FC":"1F938-1F3FC-200D-2640-FE0F","1F3FD":"1F938-1F3FD-200D-2640-FE0F","1F3FE":"1F938-1F3FE-200D-2640-FE0F","1F3FF":"1F938-1F3FF-200D-2640-FE0F"}},{"u":"1F93C","s":"wrestlers"},{"u":"1F93C-200D-2642-FE0F","s":"man-wrestling"},{"u":"1F93C-200D-2640-FE0F","s":"woman-wrestling"},{"u":"1F93D","s":"water_polo","v":{"1F3FB":"1F93D-1F3FB","1F3FC":"1F93D-1F3FC","1F3FD":"1F93D-1F3FD","1F3FE":"1F93D-1F3FE","1F3FF":"1F93D-1F3FF"}},{"u":"1F93D-200D-2642-FE0F","s":"man-playing-water-polo","v":{"1F3FB":"1F93D-1F3FB-200D-2642-FE0F","1F3FC":"1F93D-1F3FC-200D-2642-FE0F","1F3FD":"1F93D-1F3FD-200D-2642-FE0F","1F3FE":"1F93D-1F3FE-200D-2642-FE0F","1F3FF":"1F93D-1F3FF-200D-2642-FE0F"}},{"u":"1F93D-200D-2640-FE0F","s":"woman-playing-water-polo","v":{"1F3FB":"1F93D-1F3FB-200D-2640-FE0F","1F3FC":"1F93D-1F3FC-200D-2640-FE0F","1F3FD":"1F93D-1F3FD-200D-2640-FE0F","1F3FE":"1F93D-1F3FE-200D-2640-FE0F","1F3FF":"1F93D-1F3FF-200D-2640-FE0F"}},{"u":"1F93E","s":"handball","v":{"1F3FB":"1F93E-1F3FB","1F3FC":"1F93E-1F3FC","1F3FD":"1F93E-1F3FD","1F3FE":"1F93E-1F3FE","1F3FF":"1F93E-1F3FF"}},{"u":"1F93E-200D-2642-FE0F","s":"man-playing-handball","v":{"1F3FB":"1F93E-1F3FB-200D-2642-FE0F","1F3FC":"1F93E-1F3FC-200D-2642-FE0F","1F3FD":"1F93E-1F3FD-200D-2642-FE0F","1F3FE":"1F93E-1F3FE-200D-2642-FE0F","1F3FF":"1F93E-1F3FF-200D-2642-FE0F"}},{"u":"1F93E-200D-2640-FE0F","s":"woman-playing-handball","v":{"1F3FB":"1F93E-1F3FB-200D-2640-FE0F","1F3FC":"1F93E-1F3FC-200D-2640-FE0F","1F3FD":"1F93E-1F3FD-200D-2640-FE0F","1F3FE":"1F93E-1F3FE-200D-2640-FE0F","1F3FF":"1F93E-1F3FF-200D-2640-FE0F"}},{"u":"1F939","s":"juggling","v":{"1F3FB":"1F939-1F3FB","1F3FC":"1F939-1F3FC","1F3FD":"1F939-1F3FD","1F3FE":"1F939-1F3FE","1F3FF":"1F939-1F3FF"}},{"u":"1F939-200D-2642-FE0F","s":"man-juggling","v":{"1F3FB":"1F939-1F3FB-200D-2642-FE0F","1F3FC":"1F939-1F3FC-200D-2642-FE0F","1F3FD":"1F939-1F3FD-200D-2642-FE0F","1F3FE":"1F939-1F3FE-200D-2642-FE0F","1F3FF":"1F939-1F3FF-200D-2642-FE0F"}},{"u":"1F939-200D-2640-FE0F","s":"woman-juggling","v":{"1F3FB":"1F939-1F3FB-200D-2640-FE0F","1F3FC":"1F939-1F3FC-200D-2640-FE0F","1F3FD":"1F939-1F3FD-200D-2640-FE0F","1F3FE":"1F939-1F3FE-200D-2640-FE0F","1F3FF":"1F939-1F3FF-200D-2640-FE0F"}},{"u":"1F9D8","s":"person_in_lotus_position","v":{"1F3FB":"1F9D8-1F3FB","1F3FC":"1F9D8-1F3FC","1F3FD":"1F9D8-1F3FD","1F3FE":"1F9D8-1F3FE","1F3FF":"1F9D8-1F3FF"}},{"u":"1F9D8-200D-2642-FE0F","s":"man_in_lotus_position","v":{"1F3FB":"1F9D8-1F3FB-200D-2642-FE0F","1F3FC":"1F9D8-1F3FC-200D-2642-FE0F","1F3FD":"1F9D8-1F3FD-200D-2642-FE0F","1F3FE":"1F9D8-1F3FE-200D-2642-FE0F","1F3FF":"1F9D8-1F3FF-200D-2642-FE0F"}},{"u":"1F9D8-200D-2640-FE0F","s":"woman_in_lotus_position","v":{"1F3FB":"1F9D8-1F3FB-200D-2640-FE0F","1F3FC":"1F9D8-1F3FC-200D-2640-FE0F","1F3FD":"1F9D8-1F3FD-200D-2640-FE0F","1F3FE":"1F9D8-1F3FE-200D-2640-FE0F","1F3FF":"1F9D8-1F3FF-200D-2640-FE0F"}},{"u":"1F6C0","s":"bath","v":{"1F3FB":"1F6C0-1F3FB","1F3FC":"1F6C0-1F3FC","1F3FD":"1F6C0-1F3FD","1F3FE":"1F6C0-1F3FE","1F3FF":"1F6C0-1F3FF"}},{"u":"1F6CC","s":"sleeping_accommodation","v":{"1F3FB":"1F6CC-1F3FB","1F3FC":"1F6CC-1F3FC","1F3FD":"1F6CC-1F3FD","1F3FE":"1F6CC-1F3FE","1F3FF":"1F6CC-1F3FF"}},{"u":"1F9D1-200D-1F91D-200D-1F9D1","s":"people_holding_hands","v":{"1F3FB-1F3FB":"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FB","1F3FB-1F3FC":"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FC","1F3FB-1F3FD":"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FD","1F3FB-1F3FE":"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FE","1F3FB-1F3FF":"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FF","1F3FC-1F3FB":"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FB","1F3FC-1F3FC":"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FC","1F3FC-1F3FD":"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FD","1F3FC-1F3FE":"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FE","1F3FC-1F3FF":"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FF","1F3FD-1F3FB":"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FB","1F3FD-1F3FC":"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FC","1F3FD-1F3FD":"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FD","1F3FD-1F3FE":"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FE","1F3FD-1F3FF":"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FF","1F3FE-1F3FB":"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FB","1F3FE-1F3FC":"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FC","1F3FE-1F3FD":"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FD","1F3FE-1F3FE":"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FE","1F3FE-1F3FF":"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FF","1F3FF-1F3FB":"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FB","1F3FF-1F3FC":"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FC","1F3FF-1F3FD":"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FD","1F3FF-1F3FE":"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FE","1F3FF-1F3FF":"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FF"}},{"u":"1F46D","s":["two_women_holding_hands","women_holding_hands"],"v":{"1F3FB":"1F46D-1F3FB","1F3FC":"1F46D-1F3FC","1F3FD":"1F46D-1F3FD","1F3FE":"1F46D-1F3FE","1F3FF":"1F46D-1F3FF","1F3FB-1F3FC":"1F469-1F3FB-200D-1F91D-200D-1F469-1F3FC","1F3FB-1F3FD":"1F469-1F3FB-200D-1F91D-200D-1F469-1F3FD","1F3FB-1F3FE":"1F469-1F3FB-200D-1F91D-200D-1F469-1F3FE","1F3FB-1F3FF":"1F469-1F3FB-200D-1F91D-200D-1F469-1F3FF","1F3FC-1F3FB":"1F469-1F3FC-200D-1F91D-200D-1F469-1F3FB","1F3FC-1F3FD":"1F469-1F3FC-200D-1F91D-200D-1F469-1F3FD","1F3FC-1F3FE":"1F469-1F3FC-200D-1F91D-200D-1F469-1F3FE","1F3FC-1F3FF":"1F469-1F3FC-200D-1F91D-200D-1F469-1F3FF","1F3FD-1F3FB":"1F469-1F3FD-200D-1F91D-200D-1F469-1F3FB","1F3FD-1F3FC":"1F469-1F3FD-200D-1F91D-200D-1F469-1F3FC","1F3FD-1F3FE":"1F469-1F3FD-200D-1F91D-200D-1F469-1F3FE","1F3FD-1F3FF":"1F469-1F3FD-200D-1F91D-200D-1F469-1F3FF","1F3FE-1F3FB":"1F469-1F3FE-200D-1F91D-200D-1F469-1F3FB","1F3FE-1F3FC":"1F469-1F3FE-200D-1F91D-200D-1F469-1F3FC","1F3FE-1F3FD":"1F469-1F3FE-200D-1F91D-200D-1F469-1F3FD","1F3FE-1F3FF":"1F469-1F3FE-200D-1F91D-200D-1F469-1F3FF","1F3FF-1F3FB":"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FB","1F3FF-1F3FC":"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FC","1F3FF-1F3FD":"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FD","1F3FF-1F3FE":"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FE"}},{"u":"1F46B","s":["man_and_woman_holding_hands","woman_and_man_holding_hands","couple"],"v":{"1F3FB":"1F46B-1F3FB","1F3FC":"1F46B-1F3FC","1F3FD":"1F46B-1F3FD","1F3FE":"1F46B-1F3FE","1F3FF":"1F46B-1F3FF","1F3FB-1F3FC":"1F469-1F3FB-200D-1F91D-200D-1F468-1F3FC","1F3FB-1F3FD":"1F469-1F3FB-200D-1F91D-200D-1F468-1F3FD","1F3FB-1F3FE":"1F469-1F3FB-200D-1F91D-200D-1F468-1F3FE","1F3FB-1F3FF":"1F469-1F3FB-200D-1F91D-200D-1F468-1F3FF","1F3FC-1F3FB":"1F469-1F3FC-200D-1F91D-200D-1F468-1F3FB","1F3FC-1F3FD":"1F469-1F3FC-200D-1F91D-200D-1F468-1F3FD","1F3FC-1F3FE":"1F469-1F3FC-200D-1F91D-200D-1F468-1F3FE","1F3FC-1F3FF":"1F469-1F3FC-200D-1F91D-200D-1F468-1F3FF","1F3FD-1F3FB":"1F469-1F3FD-200D-1F91D-200D-1F468-1F3FB","1F3FD-1F3FC":"1F469-1F3FD-200D-1F91D-200D-1F468-1F3FC","1F3FD-1F3FE":"1F469-1F3FD-200D-1F91D-200D-1F468-1F3FE","1F3FD-1F3FF":"1F469-1F3FD-200D-1F91D-200D-1F468-1F3FF","1F3FE-1F3FB":"1F469-1F3FE-200D-1F91D-200D-1F468-1F3FB","1F3FE-1F3FC":"1F469-1F3FE-200D-1F91D-200D-1F468-1F3FC","1F3FE-1F3FD":"1F469-1F3FE-200D-1F91D-200D-1F468-1F3FD","1F3FE-1F3FF":"1F469-1F3FE-200D-1F91D-200D-1F468-1F3FF","1F3FF-1F3FB":"1F469-1F3FF-200D-1F91D-200D-1F468-1F3FB","1F3FF-1F3FC":"1F469-1F3FF-200D-1F91D-200D-1F468-1F3FC","1F3FF-1F3FD":"1F469-1F3FF-200D-1F91D-200D-1F468-1F3FD","1F3FF-1F3FE":"1F469-1F3FF-200D-1F91D-200D-1F468-1F3FE"}},{"u":"1F46C","s":["two_men_holding_hands","men_holding_hands"],"v":{"1F3FB":"1F46C-1F3FB","1F3FC":"1F46C-1F3FC","1F3FD":"1F46C-1F3FD","1F3FE":"1F46C-1F3FE","1F3FF":"1F46C-1F3FF","1F3FB-1F3FC":"1F468-1F3FB-200D-1F91D-200D-1F468-1F3FC","1F3FB-1F3FD":"1F468-1F3FB-200D-1F91D-200D-1F468-1F3FD","1F3FB-1F3FE":"1F468-1F3FB-200D-1F91D-200D-1F468-1F3FE","1F3FB-1F3FF":"1F468-1F3FB-200D-1F91D-200D-1F468-1F3FF","1F3FC-1F3FB":"1F468-1F3FC-200D-1F91D-200D-1F468-1F3FB","1F3FC-1F3FD":"1F468-1F3FC-200D-1F91D-200D-1F468-1F3FD","1F3FC-1F3FE":"1F468-1F3FC-200D-1F91D-200D-1F468-1F3FE","1F3FC-1F3FF":"1F468-1F3FC-200D-1F91D-200D-1F468-1F3FF","1F3FD-1F3FB":"1F468-1F3FD-200D-1F91D-200D-1F468-1F3FB","1F3FD-1F3FC":"1F468-1F3FD-200D-1F91D-200D-1F468-1F3FC","1F3FD-1F3FE":"1F468-1F3FD-200D-1F91D-200D-1F468-1F3FE","1F3FD-1F3FF":"1F468-1F3FD-200D-1F91D-200D-1F468-1F3FF","1F3FE-1F3FB":"1F468-1F3FE-200D-1F91D-200D-1F468-1F3FB","1F3FE-1F3FC":"1F468-1F3FE-200D-1F91D-200D-1F468-1F3FC","1F3FE-1F3FD":"1F468-1F3FE-200D-1F91D-200D-1F468-1F3FD","1F3FE-1F3FF":"1F468-1F3FE-200D-1F91D-200D-1F468-1F3FF","1F3FF-1F3FB":"1F468-1F3FF-200D-1F91D-200D-1F468-1F3FB","1F3FF-1F3FC":"1F468-1F3FF-200D-1F91D-200D-1F468-1F3FC","1F3FF-1F3FD":"1F468-1F3FF-200D-1F91D-200D-1F468-1F3FD","1F3FF-1F3FE":"1F468-1F3FF-200D-1F91D-200D-1F468-1F3FE"}},{"u":"1F48F","s":"couplekiss","v":{"1F3FB":"1F48F-1F3FB","1F3FC":"1F48F-1F3FC","1F3FD":"1F48F-1F3FD","1F3FE":"1F48F-1F3FE","1F3FF":"1F48F-1F3FF","1F3FB-1F3FC":"1F9D1-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FC","1F3FB-1F3FD":"1F9D1-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FD","1F3FB-1F3FE":"1F9D1-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FE","1F3FB-1F3FF":"1F9D1-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FF","1F3FC-1F3FB":"1F9D1-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FB","1F3FC-1F3FD":"1F9D1-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FD","1F3FC-1F3FE":"1F9D1-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FE","1F3FC-1F3FF":"1F9D1-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FF","1F3FD-1F3FB":"1F9D1-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FB","1F3FD-1F3FC":"1F9D1-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FC","1F3FD-1F3FE":"1F9D1-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FE","1F3FD-1F3FF":"1F9D1-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FF","1F3FE-1F3FB":"1F9D1-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FB","1F3FE-1F3FC":"1F9D1-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FC","1F3FE-1F3FD":"1F9D1-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FD","1F3FE-1F3FF":"1F9D1-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FF","1F3FF-1F3FB":"1F9D1-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FB","1F3FF-1F3FC":"1F9D1-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FC","1F3FF-1F3FD":"1F9D1-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FD","1F3FF-1F3FE":"1F9D1-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F9D1-1F3FE"}},{"u":"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468","s":"woman-kiss-man","v":{"1F3FB-1F3FB":"1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB","1F3FB-1F3FC":"1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC","1F3FB-1F3FD":"1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD","1F3FB-1F3FE":"1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE","1F3FB-1F3FF":"1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF","1F3FC-1F3FB":"1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB","1F3FC-1F3FC":"1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC","1F3FC-1F3FD":"1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD","1F3FC-1F3FE":"1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE","1F3FC-1F3FF":"1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF","1F3FD-1F3FB":"1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB","1F3FD-1F3FC":"1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC","1F3FD-1F3FD":"1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD","1F3FD-1F3FE":"1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE","1F3FD-1F3FF":"1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF","1F3FE-1F3FB":"1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB","1F3FE-1F3FC":"1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC","1F3FE-1F3FD":"1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD","1F3FE-1F3FE":"1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE","1F3FE-1F3FF":"1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF","1F3FF-1F3FB":"1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB","1F3FF-1F3FC":"1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC","1F3FF-1F3FD":"1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD","1F3FF-1F3FE":"1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE","1F3FF-1F3FF":"1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF"}},{"u":"1F468-200D-2764-FE0F-200D-1F48B-200D-1F468","s":"man-kiss-man","v":{"1F3FB-1F3FB":"1F468-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB","1F3FB-1F3FC":"1F468-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC","1F3FB-1F3FD":"1F468-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD","1F3FB-1F3FE":"1F468-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE","1F3FB-1F3FF":"1F468-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF","1F3FC-1F3FB":"1F468-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB","1F3FC-1F3FC":"1F468-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC","1F3FC-1F3FD":"1F468-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD","1F3FC-1F3FE":"1F468-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE","1F3FC-1F3FF":"1F468-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF","1F3FD-1F3FB":"1F468-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB","1F3FD-1F3FC":"1F468-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC","1F3FD-1F3FD":"1F468-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD","1F3FD-1F3FE":"1F468-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE","1F3FD-1F3FF":"1F468-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF","1F3FE-1F3FB":"1F468-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB","1F3FE-1F3FC":"1F468-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC","1F3FE-1F3FD":"1F468-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD","1F3FE-1F3FE":"1F468-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE","1F3FE-1F3FF":"1F468-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF","1F3FF-1F3FB":"1F468-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FB","1F3FF-1F3FC":"1F468-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FC","1F3FF-1F3FD":"1F468-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FD","1F3FF-1F3FE":"1F468-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FE","1F3FF-1F3FF":"1F468-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F468-1F3FF"}},{"u":"1F469-200D-2764-FE0F-200D-1F48B-200D-1F469","s":"woman-kiss-woman","v":{"1F3FB-1F3FB":"1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FB","1F3FB-1F3FC":"1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FC","1F3FB-1F3FD":"1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FD","1F3FB-1F3FE":"1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FE","1F3FB-1F3FF":"1F469-1F3FB-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FF","1F3FC-1F3FB":"1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FB","1F3FC-1F3FC":"1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FC","1F3FC-1F3FD":"1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FD","1F3FC-1F3FE":"1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FE","1F3FC-1F3FF":"1F469-1F3FC-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FF","1F3FD-1F3FB":"1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FB","1F3FD-1F3FC":"1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FC","1F3FD-1F3FD":"1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FD","1F3FD-1F3FE":"1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FE","1F3FD-1F3FF":"1F469-1F3FD-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FF","1F3FE-1F3FB":"1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FB","1F3FE-1F3FC":"1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FC","1F3FE-1F3FD":"1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FD","1F3FE-1F3FE":"1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FE","1F3FE-1F3FF":"1F469-1F3FE-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FF","1F3FF-1F3FB":"1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FB","1F3FF-1F3FC":"1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FC","1F3FF-1F3FD":"1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FD","1F3FF-1F3FE":"1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FE","1F3FF-1F3FF":"1F469-1F3FF-200D-2764-FE0F-200D-1F48B-200D-1F469-1F3FF"}},{"u":"1F491","s":"couple_with_heart","v":{"1F3FB":"1F491-1F3FB","1F3FC":"1F491-1F3FC","1F3FD":"1F491-1F3FD","1F3FE":"1F491-1F3FE","1F3FF":"1F491-1F3FF","1F3FB-1F3FC":"1F9D1-1F3FB-200D-2764-FE0F-200D-1F9D1-1F3FC","1F3FB-1F3FD":"1F9D1-1F3FB-200D-2764-FE0F-200D-1F9D1-1F3FD","1F3FB-1F3FE":"1F9D1-1F3FB-200D-2764-FE0F-200D-1F9D1-1F3FE","1F3FB-1F3FF":"1F9D1-1F3FB-200D-2764-FE0F-200D-1F9D1-1F3FF","1F3FC-1F3FB":"1F9D1-1F3FC-200D-2764-FE0F-200D-1F9D1-1F3FB","1F3FC-1F3FD":"1F9D1-1F3FC-200D-2764-FE0F-200D-1F9D1-1F3FD","1F3FC-1F3FE":"1F9D1-1F3FC-200D-2764-FE0F-200D-1F9D1-1F3FE","1F3FC-1F3FF":"1F9D1-1F3FC-200D-2764-FE0F-200D-1F9D1-1F3FF","1F3FD-1F3FB":"1F9D1-1F3FD-200D-2764-FE0F-200D-1F9D1-1F3FB","1F3FD-1F3FC":"1F9D1-1F3FD-200D-2764-FE0F-200D-1F9D1-1F3FC","1F3FD-1F3FE":"1F9D1-1F3FD-200D-2764-FE0F-200D-1F9D1-1F3FE","1F3FD-1F3FF":"1F9D1-1F3FD-200D-2764-FE0F-200D-1F9D1-1F3FF","1F3FE-1F3FB":"1F9D1-1F3FE-200D-2764-FE0F-200D-1F9D1-1F3FB","1F3FE-1F3FC":"1F9D1-1F3FE-200D-2764-FE0F-200D-1F9D1-1F3FC","1F3FE-1F3FD":"1F9D1-1F3FE-200D-2764-FE0F-200D-1F9D1-1F3FD","1F3FE-1F3FF":"1F9D1-1F3FE-200D-2764-FE0F-200D-1F9D1-1F3FF","1F3FF-1F3FB":"1F9D1-1F3FF-200D-2764-FE0F-200D-1F9D1-1F3FB","1F3FF-1F3FC":"1F9D1-1F3FF-200D-2764-FE0F-200D-1F9D1-1F3FC","1F3FF-1F3FD":"1F9D1-1F3FF-200D-2764-FE0F-200D-1F9D1-1F3FD","1F3FF-1F3FE":"1F9D1-1F3FF-200D-2764-FE0F-200D-1F9D1-1F3FE"}},{"u":"1F469-200D-2764-FE0F-200D-1F468","s":"woman-heart-man","v":{"1F3FB-1F3FB":"1F469-1F3FB-200D-2764-FE0F-200D-1F468-1F3FB","1F3FB-1F3FC":"1F469-1F3FB-200D-2764-FE0F-200D-1F468-1F3FC","1F3FB-1F3FD":"1F469-1F3FB-200D-2764-FE0F-200D-1F468-1F3FD","1F3FB-1F3FE":"1F469-1F3FB-200D-2764-FE0F-200D-1F468-1F3FE","1F3FB-1F3FF":"1F469-1F3FB-200D-2764-FE0F-200D-1F468-1F3FF","1F3FC-1F3FB":"1F469-1F3FC-200D-2764-FE0F-200D-1F468-1F3FB","1F3FC-1F3FC":"1F469-1F3FC-200D-2764-FE0F-200D-1F468-1F3FC","1F3FC-1F3FD":"1F469-1F3FC-200D-2764-FE0F-200D-1F468-1F3FD","1F3FC-1F3FE":"1F469-1F3FC-200D-2764-FE0F-200D-1F468-1F3FE","1F3FC-1F3FF":"1F469-1F3FC-200D-2764-FE0F-200D-1F468-1F3FF","1F3FD-1F3FB":"1F469-1F3FD-200D-2764-FE0F-200D-1F468-1F3FB","1F3FD-1F3FC":"1F469-1F3FD-200D-2764-FE0F-200D-1F468-1F3FC","1F3FD-1F3FD":"1F469-1F3FD-200D-2764-FE0F-200D-1F468-1F3FD","1F3FD-1F3FE":"1F469-1F3FD-200D-2764-FE0F-200D-1F468-1F3FE","1F3FD-1F3FF":"1F469-1F3FD-200D-2764-FE0F-200D-1F468-1F3FF","1F3FE-1F3FB":"1F469-1F3FE-200D-2764-FE0F-200D-1F468-1F3FB","1F3FE-1F3FC":"1F469-1F3FE-200D-2764-FE0F-200D-1F468-1F3FC","1F3FE-1F3FD":"1F469-1F3FE-200D-2764-FE0F-200D-1F468-1F3FD","1F3FE-1F3FE":"1F469-1F3FE-200D-2764-FE0F-200D-1F468-1F3FE","1F3FE-1F3FF":"1F469-1F3FE-200D-2764-FE0F-200D-1F468-1F3FF","1F3FF-1F3FB":"1F469-1F3FF-200D-2764-FE0F-200D-1F468-1F3FB","1F3FF-1F3FC":"1F469-1F3FF-200D-2764-FE0F-200D-1F468-1F3FC","1F3FF-1F3FD":"1F469-1F3FF-200D-2764-FE0F-200D-1F468-1F3FD","1F3FF-1F3FE":"1F469-1F3FF-200D-2764-FE0F-200D-1F468-1F3FE","1F3FF-1F3FF":"1F469-1F3FF-200D-2764-FE0F-200D-1F468-1F3FF"}},{"u":"1F468-200D-2764-FE0F-200D-1F468","s":"man-heart-man","v":{"1F3FB-1F3FB":"1F468-1F3FB-200D-2764-FE0F-200D-1F468-1F3FB","1F3FB-1F3FC":"1F468-1F3FB-200D-2764-FE0F-200D-1F468-1F3FC","1F3FB-1F3FD":"1F468-1F3FB-200D-2764-FE0F-200D-1F468-1F3FD","1F3FB-1F3FE":"1F468-1F3FB-200D-2764-FE0F-200D-1F468-1F3FE","1F3FB-1F3FF":"1F468-1F3FB-200D-2764-FE0F-200D-1F468-1F3FF","1F3FC-1F3FB":"1F468-1F3FC-200D-2764-FE0F-200D-1F468-1F3FB","1F3FC-1F3FC":"1F468-1F3FC-200D-2764-FE0F-200D-1F468-1F3FC","1F3FC-1F3FD":"1F468-1F3FC-200D-2764-FE0F-200D-1F468-1F3FD","1F3FC-1F3FE":"1F468-1F3FC-200D-2764-FE0F-200D-1F468-1F3FE","1F3FC-1F3FF":"1F468-1F3FC-200D-2764-FE0F-200D-1F468-1F3FF","1F3FD-1F3FB":"1F468-1F3FD-200D-2764-FE0F-200D-1F468-1F3FB","1F3FD-1F3FC":"1F468-1F3FD-200D-2764-FE0F-200D-1F468-1F3FC","1F3FD-1F3FD":"1F468-1F3FD-200D-2764-FE0F-200D-1F468-1F3FD","1F3FD-1F3FE":"1F468-1F3FD-200D-2764-FE0F-200D-1F468-1F3FE","1F3FD-1F3FF":"1F468-1F3FD-200D-2764-FE0F-200D-1F468-1F3FF","1F3FE-1F3FB":"1F468-1F3FE-200D-2764-FE0F-200D-1F468-1F3FB","1F3FE-1F3FC":"1F468-1F3FE-200D-2764-FE0F-200D-1F468-1F3FC","1F3FE-1F3FD":"1F468-1F3FE-200D-2764-FE0F-200D-1F468-1F3FD","1F3FE-1F3FE":"1F468-1F3FE-200D-2764-FE0F-200D-1F468-1F3FE","1F3FE-1F3FF":"1F468-1F3FE-200D-2764-FE0F-200D-1F468-1F3FF","1F3FF-1F3FB":"1F468-1F3FF-200D-2764-FE0F-200D-1F468-1F3FB","1F3FF-1F3FC":"1F468-1F3FF-200D-2764-FE0F-200D-1F468-1F3FC","1F3FF-1F3FD":"1F468-1F3FF-200D-2764-FE0F-200D-1F468-1F3FD","1F3FF-1F3FE":"1F468-1F3FF-200D-2764-FE0F-200D-1F468-1F3FE","1F3FF-1F3FF":"1F468-1F3FF-200D-2764-FE0F-200D-1F468-1F3FF"}},{"u":"1F469-200D-2764-FE0F-200D-1F469","s":"woman-heart-woman","v":{"1F3FB-1F3FB":"1F469-1F3FB-200D-2764-FE0F-200D-1F469-1F3FB","1F3FB-1F3FC":"1F469-1F3FB-200D-2764-FE0F-200D-1F469-1F3FC","1F3FB-1F3FD":"1F469-1F3FB-200D-2764-FE0F-200D-1F469-1F3FD","1F3FB-1F3FE":"1F469-1F3FB-200D-2764-FE0F-200D-1F469-1F3FE","1F3FB-1F3FF":"1F469-1F3FB-200D-2764-FE0F-200D-1F469-1F3FF","1F3FC-1F3FB":"1F469-1F3FC-200D-2764-FE0F-200D-1F469-1F3FB","1F3FC-1F3FC":"1F469-1F3FC-200D-2764-FE0F-200D-1F469-1F3FC","1F3FC-1F3FD":"1F469-1F3FC-200D-2764-FE0F-200D-1F469-1F3FD","1F3FC-1F3FE":"1F469-1F3FC-200D-2764-FE0F-200D-1F469-1F3FE","1F3FC-1F3FF":"1F469-1F3FC-200D-2764-FE0F-200D-1F469-1F3FF","1F3FD-1F3FB":"1F469-1F3FD-200D-2764-FE0F-200D-1F469-1F3FB","1F3FD-1F3FC":"1F469-1F3FD-200D-2764-FE0F-200D-1F469-1F3FC","1F3FD-1F3FD":"1F469-1F3FD-200D-2764-FE0F-200D-1F469-1F3FD","1F3FD-1F3FE":"1F469-1F3FD-200D-2764-FE0F-200D-1F469-1F3FE","1F3FD-1F3FF":"1F469-1F3FD-200D-2764-FE0F-200D-1F469-1F3FF","1F3FE-1F3FB":"1F469-1F3FE-200D-2764-FE0F-200D-1F469-1F3FB","1F3FE-1F3FC":"1F469-1F3FE-200D-2764-FE0F-200D-1F469-1F3FC","1F3FE-1F3FD":"1F469-1F3FE-200D-2764-FE0F-200D-1F469-1F3FD","1F3FE-1F3FE":"1F469-1F3FE-200D-2764-FE0F-200D-1F469-1F3FE","1F3FE-1F3FF":"1F469-1F3FE-200D-2764-FE0F-200D-1F469-1F3FF","1F3FF-1F3FB":"1F469-1F3FF-200D-2764-FE0F-200D-1F469-1F3FB","1F3FF-1F3FC":"1F469-1F3FF-200D-2764-FE0F-200D-1F469-1F3FC","1F3FF-1F3FD":"1F469-1F3FF-200D-2764-FE0F-200D-1F469-1F3FD","1F3FF-1F3FE":"1F469-1F3FF-200D-2764-FE0F-200D-1F469-1F3FE","1F3FF-1F3FF":"1F469-1F3FF-200D-2764-FE0F-200D-1F469-1F3FF"}},{"u":"1F468-200D-1F469-200D-1F466","s":"man-woman-boy"},{"u":"1F468-200D-1F469-200D-1F467","s":"man-woman-girl"},{"u":"1F468-200D-1F469-200D-1F467-200D-1F466","s":"man-woman-girl-boy"},{"u":"1F468-200D-1F469-200D-1F466-200D-1F466","s":"man-woman-boy-boy"},{"u":"1F468-200D-1F469-200D-1F467-200D-1F467","s":"man-woman-girl-girl"},{"u":"1F468-200D-1F468-200D-1F466","s":"man-man-boy"},{"u":"1F468-200D-1F468-200D-1F467","s":"man-man-girl"},{"u":"1F468-200D-1F468-200D-1F467-200D-1F466","s":"man-man-girl-boy"},{"u":"1F468-200D-1F468-200D-1F466-200D-1F466","s":"man-man-boy-boy"},{"u":"1F468-200D-1F468-200D-1F467-200D-1F467","s":"man-man-girl-girl"},{"u":"1F469-200D-1F469-200D-1F466","s":"woman-woman-boy"},{"u":"1F469-200D-1F469-200D-1F467","s":"woman-woman-girl"},{"u":"1F469-200D-1F469-200D-1F467-200D-1F466","s":"woman-woman-girl-boy"},{"u":"1F469-200D-1F469-200D-1F466-200D-1F466","s":"woman-woman-boy-boy"},{"u":"1F469-200D-1F469-200D-1F467-200D-1F467","s":"woman-woman-girl-girl"},{"u":"1F468-200D-1F466","s":"man-boy"},{"u":"1F468-200D-1F466-200D-1F466","s":"man-boy-boy"},{"u":"1F468-200D-1F467","s":"man-girl"},{"u":"1F468-200D-1F467-200D-1F466","s":"man-girl-boy"},{"u":"1F468-200D-1F467-200D-1F467","s":"man-girl-girl"},{"u":"1F469-200D-1F466","s":"woman-boy"},{"u":"1F469-200D-1F466-200D-1F466","s":"woman-boy-boy"},{"u":"1F469-200D-1F467","s":"woman-girl"},{"u":"1F469-200D-1F467-200D-1F466","s":"woman-girl-boy"},{"u":"1F469-200D-1F467-200D-1F467","s":"woman-girl-girl"},{"u":"1F5E3-FE0F","s":"speaking_head_in_silhouette"},{"u":"1F464","s":"bust_in_silhouette"},{"u":"1F465","s":"busts_in_silhouette"},{"u":"1FAC2","s":"people_hugging"},{"u":"1F46A","s":"family"},{"u":"1F9D1-200D-1F9D1-200D-1F9D2","s":"family_adult_adult_child"},{"u":"1F9D1-200D-1F9D1-200D-1F9D2-200D-1F9D2","s":"family_adult_adult_child_child"},{"u":"1F9D1-200D-1F9D2","s":"family_adult_child"},{"u":"1F9D1-200D-1F9D2-200D-1F9D2","s":"family_adult_child_child"},{"u":"1F463","s":"footprints"},{"u":"1FAC6","s":"fingerprint"}]',
  ),
  "Animals & Nature": [
    {
      u: "1F435",
      s: "monkey_face",
    },
    {
      u: "1F412",
      s: "monkey",
    },
    {
      u: "1F98D",
      s: "gorilla",
    },
    {
      u: "1F9A7",
      s: "orangutan",
    },
    {
      u: "1F436",
      s: "dog",
    },
    {
      u: "1F415",
      s: "dog2",
    },
    {
      u: "1F9AE",
      s: "guide_dog",
    },
    {
      u: "1F415-200D-1F9BA",
      s: "service_dog",
    },
    {
      u: "1F429",
      s: "poodle",
    },
    {
      u: "1F43A",
      s: "wolf",
    },
    {
      u: "1F98A",
      s: "fox_face",
    },
    {
      u: "1F99D",
      s: "raccoon",
    },
    {
      u: "1F431",
      s: "cat",
    },
    {
      u: "1F408",
      s: "cat2",
    },
    {
      u: "1F408-200D-2B1B",
      s: "black_cat",
    },
    {
      u: "1F981",
      s: "lion_face",
    },
    {
      u: "1F42F",
      s: "tiger",
    },
    {
      u: "1F405",
      s: "tiger2",
    },
    {
      u: "1F406",
      s: "leopard",
    },
    {
      u: "1F434",
      s: "horse",
    },
    {
      u: "1FACE",
      s: "moose",
    },
    {
      u: "1FACF",
      s: "donkey",
    },
    {
      u: "1F40E",
      s: "racehorse",
    },
    {
      u: "1F984",
      s: "unicorn_face",
    },
    {
      u: "1F993",
      s: "zebra_face",
    },
    {
      u: "1F98C",
      s: "deer",
    },
    {
      u: "1F9AC",
      s: "bison",
    },
    {
      u: "1F42E",
      s: "cow",
    },
    {
      u: "1F402",
      s: "ox",
    },
    {
      u: "1F403",
      s: "water_buffalo",
    },
    {
      u: "1F404",
      s: "cow2",
    },
    {
      u: "1F437",
      s: "pig",
    },
    {
      u: "1F416",
      s: "pig2",
    },
    {
      u: "1F417",
      s: "boar",
    },
    {
      u: "1F43D",
      s: "pig_nose",
    },
    {
      u: "1F40F",
      s: "ram",
    },
    {
      u: "1F411",
      s: "sheep",
    },
    {
      u: "1F410",
      s: "goat",
    },
    {
      u: "1F42A",
      s: "dromedary_camel",
    },
    {
      u: "1F42B",
      s: "camel",
    },
    {
      u: "1F999",
      s: "llama",
    },
    {
      u: "1F992",
      s: "giraffe_face",
    },
    {
      u: "1F418",
      s: "elephant",
    },
    {
      u: "1F9A3",
      s: "mammoth",
    },
    {
      u: "1F98F",
      s: "rhinoceros",
    },
    {
      u: "1F99B",
      s: "hippopotamus",
    },
    {
      u: "1F42D",
      s: "mouse",
    },
    {
      u: "1F401",
      s: "mouse2",
    },
    {
      u: "1F400",
      s: "rat",
    },
    {
      u: "1F439",
      s: "hamster",
    },
    {
      u: "1F430",
      s: "rabbit",
    },
    {
      u: "1F407",
      s: "rabbit2",
    },
    {
      u: "1F43F-FE0F",
      s: "chipmunk",
    },
    {
      u: "1F9AB",
      s: "beaver",
    },
    {
      u: "1F994",
      s: "hedgehog",
    },
    {
      u: "1F987",
      s: "bat",
    },
    {
      u: "1F43B",
      s: "bear",
    },
    {
      u: "1F43B-200D-2744-FE0F",
      s: "polar_bear",
    },
    {
      u: "1F428",
      s: "koala",
    },
    {
      u: "1F43C",
      s: "panda_face",
    },
    {
      u: "1F9A5",
      s: "sloth",
    },
    {
      u: "1F9A6",
      s: "otter",
    },
    {
      u: "1F9A8",
      s: "skunk",
    },
    {
      u: "1F998",
      s: "kangaroo",
    },
    {
      u: "1F9A1",
      s: "badger",
    },
    {
      u: "1F43E",
      s: ["feet", "paw_prints"],
    },
    {
      u: "1F983",
      s: "turkey",
    },
    {
      u: "1F414",
      s: "chicken",
    },
    {
      u: "1F413",
      s: "rooster",
    },
    {
      u: "1F423",
      s: "hatching_chick",
    },
    {
      u: "1F424",
      s: "baby_chick",
    },
    {
      u: "1F425",
      s: "hatched_chick",
    },
    {
      u: "1F426",
      s: "bird",
    },
    {
      u: "1F427",
      s: "penguin",
    },
    {
      u: "1F54A-FE0F",
      s: "dove_of_peace",
    },
    {
      u: "1F985",
      s: "eagle",
    },
    {
      u: "1F986",
      s: "duck",
    },
    {
      u: "1F9A2",
      s: "swan",
    },
    {
      u: "1F989",
      s: "owl",
    },
    {
      u: "1F9A4",
      s: "dodo",
    },
    {
      u: "1FAB6",
      s: "feather",
    },
    {
      u: "1F9A9",
      s: "flamingo",
    },
    {
      u: "1F99A",
      s: "peacock",
    },
    {
      u: "1F99C",
      s: "parrot",
    },
    {
      u: "1FABD",
      s: "wing",
    },
    {
      u: "1F426-200D-2B1B",
      s: "black_bird",
    },
    {
      u: "1FABF",
      s: "goose",
    },
    {
      u: "1F426-200D-1F525",
      s: "phoenix",
    },
    {
      u: "1F438",
      s: "frog",
    },
    {
      u: "1F40A",
      s: "crocodile",
    },
    {
      u: "1F422",
      s: "turtle",
    },
    {
      u: "1F98E",
      s: "lizard",
    },
    {
      u: "1F40D",
      s: "snake",
    },
    {
      u: "1F432",
      s: "dragon_face",
    },
    {
      u: "1F409",
      s: "dragon",
    },
    {
      u: "1F995",
      s: "sauropod",
    },
    {
      u: "1F996",
      s: "t-rex",
    },
    {
      u: "1F433",
      s: "whale",
    },
    {
      u: "1F40B",
      s: "whale2",
    },
    {
      u: "1F42C",
      s: ["dolphin", "flipper"],
    },
    {
      u: "1F9AD",
      s: "seal",
    },
    {
      u: "1F41F",
      s: "fish",
    },
    {
      u: "1F420",
      s: "tropical_fish",
    },
    {
      u: "1F421",
      s: "blowfish",
    },
    {
      u: "1F988",
      s: "shark",
    },
    {
      u: "1F419",
      s: "octopus",
    },
    {
      u: "1F41A",
      s: "shell",
    },
    {
      u: "1FAB8",
      s: "coral",
    },
    {
      u: "1FABC",
      s: "jellyfish",
    },
    {
      u: "1F980",
      s: "crab",
    },
    {
      u: "1F99E",
      s: "lobster",
    },
    {
      u: "1F990",
      s: "shrimp",
    },
    {
      u: "1F991",
      s: "squid",
    },
    {
      u: "1F9AA",
      s: "oyster",
    },
    {
      u: "1F40C",
      s: "snail",
    },
    {
      u: "1F98B",
      s: "butterfly",
    },
    {
      u: "1F41B",
      s: "bug",
    },
    {
      u: "1F41C",
      s: "ant",
    },
    {
      u: "1F41D",
      s: ["bee", "honeybee"],
    },
    {
      u: "1FAB2",
      s: "beetle",
    },
    {
      u: "1F41E",
      s: ["ladybug", "lady_beetle"],
    },
    {
      u: "1F997",
      s: "cricket",
    },
    {
      u: "1FAB3",
      s: "cockroach",
    },
    {
      u: "1F577-FE0F",
      s: "spider",
    },
    {
      u: "1F578-FE0F",
      s: "spider_web",
    },
    {
      u: "1F982",
      s: "scorpion",
    },
    {
      u: "1F99F",
      s: "mosquito",
    },
    {
      u: "1FAB0",
      s: "fly",
    },
    {
      u: "1FAB1",
      s: "worm",
    },
    {
      u: "1F9A0",
      s: "microbe",
    },
    {
      u: "1F490",
      s: "bouquet",
    },
    {
      u: "1F338",
      s: "cherry_blossom",
    },
    {
      u: "1F4AE",
      s: "white_flower",
    },
    {
      u: "1FAB7",
      s: "lotus",
    },
    {
      u: "1F3F5-FE0F",
      s: "rosette",
    },
    {
      u: "1F339",
      s: "rose",
    },
    {
      u: "1F940",
      s: "wilted_flower",
    },
    {
      u: "1F33A",
      s: "hibiscus",
    },
    {
      u: "1F33B",
      s: "sunflower",
    },
    {
      u: "1F33C",
      s: "blossom",
    },
    {
      u: "1F337",
      s: "tulip",
    },
    {
      u: "1FABB",
      s: "hyacinth",
    },
    {
      u: "1F331",
      s: "seedling",
    },
    {
      u: "1FAB4",
      s: "potted_plant",
    },
    {
      u: "1F332",
      s: "evergreen_tree",
    },
    {
      u: "1F333",
      s: "deciduous_tree",
    },
    {
      u: "1F334",
      s: "palm_tree",
    },
    {
      u: "1F335",
      s: "cactus",
    },
    {
      u: "1F33E",
      s: "ear_of_rice",
    },
    {
      u: "1F33F",
      s: "herb",
    },
    {
      u: "2618-FE0F",
      s: "shamrock",
    },
    {
      u: "1F340",
      s: "four_leaf_clover",
    },
    {
      u: "1F341",
      s: "maple_leaf",
    },
    {
      u: "1F342",
      s: "fallen_leaf",
    },
    {
      u: "1F343",
      s: "leaves",
    },
    {
      u: "1FAB9",
      s: "empty_nest",
    },
    {
      u: "1FABA",
      s: "nest_with_eggs",
    },
    {
      u: "1F344",
      s: "mushroom",
    },
    {
      u: "1FABE",
      s: "leafless_tree",
    },
  ],
  "Food & Drink": [
    {
      u: "1F347",
      s: "grapes",
    },
    {
      u: "1F348",
      s: "melon",
    },
    {
      u: "1F349",
      s: "watermelon",
    },
    {
      u: "1F34A",
      s: "tangerine",
    },
    {
      u: "1F34B",
      s: "lemon",
    },
    {
      u: "1F34B-200D-1F7E9",
      s: "lime",
    },
    {
      u: "1F34C",
      s: "banana",
    },
    {
      u: "1F34D",
      s: "pineapple",
    },
    {
      u: "1F96D",
      s: "mango",
    },
    {
      u: "1F34E",
      s: "apple",
    },
    {
      u: "1F34F",
      s: "green_apple",
    },
    {
      u: "1F350",
      s: "pear",
    },
    {
      u: "1F351",
      s: "peach",
    },
    {
      u: "1F352",
      s: "cherries",
    },
    {
      u: "1F353",
      s: "strawberry",
    },
    {
      u: "1FAD0",
      s: "blueberries",
    },
    {
      u: "1F95D",
      s: "kiwifruit",
    },
    {
      u: "1F345",
      s: "tomato",
    },
    {
      u: "1FAD2",
      s: "olive",
    },
    {
      u: "1F965",
      s: "coconut",
    },
    {
      u: "1F951",
      s: "avocado",
    },
    {
      u: "1F346",
      s: "eggplant",
    },
    {
      u: "1F954",
      s: "potato",
    },
    {
      u: "1F955",
      s: "carrot",
    },
    {
      u: "1F33D",
      s: "corn",
    },
    {
      u: "1F336-FE0F",
      s: "hot_pepper",
    },
    {
      u: "1FAD1",
      s: "bell_pepper",
    },
    {
      u: "1F952",
      s: "cucumber",
    },
    {
      u: "1F96C",
      s: "leafy_green",
    },
    {
      u: "1F966",
      s: "broccoli",
    },
    {
      u: "1F9C4",
      s: "garlic",
    },
    {
      u: "1F9C5",
      s: "onion",
    },
    {
      u: "1F95C",
      s: "peanuts",
    },
    {
      u: "1FAD8",
      s: "beans",
    },
    {
      u: "1F330",
      s: "chestnut",
    },
    {
      u: "1FADA",
      s: "ginger_root",
    },
    {
      u: "1FADB",
      s: "pea_pod",
    },
    {
      u: "1F344-200D-1F7EB",
      s: "brown_mushroom",
    },
    {
      u: "1FADC",
      s: "root_vegetable",
    },
    {
      u: "1F35E",
      s: "bread",
    },
    {
      u: "1F950",
      s: "croissant",
    },
    {
      u: "1F956",
      s: "baguette_bread",
    },
    {
      u: "1FAD3",
      s: "flatbread",
    },
    {
      u: "1F968",
      s: "pretzel",
    },
    {
      u: "1F96F",
      s: "bagel",
    },
    {
      u: "1F95E",
      s: "pancakes",
    },
    {
      u: "1F9C7",
      s: "waffle",
    },
    {
      u: "1F9C0",
      s: "cheese_wedge",
    },
    {
      u: "1F356",
      s: "meat_on_bone",
    },
    {
      u: "1F357",
      s: "poultry_leg",
    },
    {
      u: "1F969",
      s: "cut_of_meat",
    },
    {
      u: "1F953",
      s: "bacon",
    },
    {
      u: "1F354",
      s: "hamburger",
    },
    {
      u: "1F35F",
      s: "fries",
    },
    {
      u: "1F355",
      s: "pizza",
    },
    {
      u: "1F32D",
      s: "hotdog",
    },
    {
      u: "1F96A",
      s: "sandwich",
    },
    {
      u: "1F32E",
      s: "taco",
    },
    {
      u: "1F32F",
      s: "burrito",
    },
    {
      u: "1FAD4",
      s: "tamale",
    },
    {
      u: "1F959",
      s: "stuffed_flatbread",
    },
    {
      u: "1F9C6",
      s: "falafel",
    },
    {
      u: "1F95A",
      s: "egg",
    },
    {
      u: "1F373",
      s: ["fried_egg", "cooking"],
    },
    {
      u: "1F958",
      s: "shallow_pan_of_food",
    },
    {
      u: "1F372",
      s: "stew",
    },
    {
      u: "1FAD5",
      s: "fondue",
    },
    {
      u: "1F963",
      s: "bowl_with_spoon",
    },
    {
      u: "1F957",
      s: "green_salad",
    },
    {
      u: "1F37F",
      s: "popcorn",
    },
    {
      u: "1F9C8",
      s: "butter",
    },
    {
      u: "1F9C2",
      s: "salt",
    },
    {
      u: "1F96B",
      s: "canned_food",
    },
    {
      u: "1F371",
      s: "bento",
    },
    {
      u: "1F358",
      s: "rice_cracker",
    },
    {
      u: "1F359",
      s: "rice_ball",
    },
    {
      u: "1F35A",
      s: "rice",
    },
    {
      u: "1F35B",
      s: "curry",
    },
    {
      u: "1F35C",
      s: "ramen",
    },
    {
      u: "1F35D",
      s: "spaghetti",
    },
    {
      u: "1F360",
      s: "sweet_potato",
    },
    {
      u: "1F362",
      s: "oden",
    },
    {
      u: "1F363",
      s: "sushi",
    },
    {
      u: "1F364",
      s: "fried_shrimp",
    },
    {
      u: "1F365",
      s: "fish_cake",
    },
    {
      u: "1F96E",
      s: "moon_cake",
    },
    {
      u: "1F361",
      s: "dango",
    },
    {
      u: "1F95F",
      s: "dumpling",
    },
    {
      u: "1F960",
      s: "fortune_cookie",
    },
    {
      u: "1F961",
      s: "takeout_box",
    },
    {
      u: "1F366",
      s: "icecream",
    },
    {
      u: "1F367",
      s: "shaved_ice",
    },
    {
      u: "1F368",
      s: "ice_cream",
    },
    {
      u: "1F369",
      s: "doughnut",
    },
    {
      u: "1F36A",
      s: "cookie",
    },
    {
      u: "1F382",
      s: "birthday",
    },
    {
      u: "1F370",
      s: "cake",
    },
    {
      u: "1F9C1",
      s: "cupcake",
    },
    {
      u: "1F967",
      s: "pie",
    },
    {
      u: "1F36B",
      s: "chocolate_bar",
    },
    {
      u: "1F36C",
      s: "candy",
    },
    {
      u: "1F36D",
      s: "lollipop",
    },
    {
      u: "1F36E",
      s: "custard",
    },
    {
      u: "1F36F",
      s: "honey_pot",
    },
    {
      u: "1F37C",
      s: "baby_bottle",
    },
    {
      u: "1F95B",
      s: "glass_of_milk",
    },
    {
      u: "2615",
      s: "coffee",
    },
    {
      u: "1FAD6",
      s: "teapot",
    },
    {
      u: "1F375",
      s: "tea",
    },
    {
      u: "1F376",
      s: "sake",
    },
    {
      u: "1F37E",
      s: "champagne",
    },
    {
      u: "1F377",
      s: "wine_glass",
    },
    {
      u: "1F378",
      s: "cocktail",
    },
    {
      u: "1F379",
      s: "tropical_drink",
    },
    {
      u: "1F37A",
      s: "beer",
    },
    {
      u: "1F37B",
      s: "beers",
    },
    {
      u: "1F942",
      s: "clinking_glasses",
    },
    {
      u: "1F943",
      s: "tumbler_glass",
    },
    {
      u: "1FAD7",
      s: "pouring_liquid",
    },
    {
      u: "1F964",
      s: "cup_with_straw",
    },
    {
      u: "1F9CB",
      s: "bubble_tea",
    },
    {
      u: "1F9C3",
      s: "beverage_box",
    },
    {
      u: "1F9C9",
      s: "mate_drink",
    },
    {
      u: "1F9CA",
      s: "ice_cube",
    },
    {
      u: "1F962",
      s: "chopsticks",
    },
    {
      u: "1F37D-FE0F",
      s: "knife_fork_plate",
    },
    {
      u: "1F374",
      s: "fork_and_knife",
    },
    {
      u: "1F944",
      s: "spoon",
    },
    {
      u: "1F52A",
      s: ["hocho", "knife"],
    },
    {
      u: "1FAD9",
      s: "jar",
    },
    {
      u: "1F3FA",
      s: "amphora",
    },
  ],
  "Travel & Places": [
    {
      u: "1F30D",
      s: "earth_africa",
    },
    {
      u: "1F30E",
      s: "earth_americas",
    },
    {
      u: "1F30F",
      s: "earth_asia",
    },
    {
      u: "1F310",
      s: "globe_with_meridians",
    },
    {
      u: "1F5FA-FE0F",
      s: "world_map",
    },
    {
      u: "1F5FE",
      s: "japan",
    },
    {
      u: "1F9ED",
      s: "compass",
    },
    {
      u: "1F3D4-FE0F",
      s: "snow_capped_mountain",
    },
    {
      u: "26F0-FE0F",
      s: "mountain",
    },
    {
      u: "1F30B",
      s: "volcano",
    },
    {
      u: "1F5FB",
      s: "mount_fuji",
    },
    {
      u: "1F3D5-FE0F",
      s: "camping",
    },
    {
      u: "1F3D6-FE0F",
      s: "beach_with_umbrella",
    },
    {
      u: "1F3DC-FE0F",
      s: "desert",
    },
    {
      u: "1F3DD-FE0F",
      s: "desert_island",
    },
    {
      u: "1F3DE-FE0F",
      s: "national_park",
    },
    {
      u: "1F3DF-FE0F",
      s: "stadium",
    },
    {
      u: "1F3DB-FE0F",
      s: "classical_building",
    },
    {
      u: "1F3D7-FE0F",
      s: "building_construction",
    },
    {
      u: "1F9F1",
      s: "bricks",
    },
    {
      u: "1FAA8",
      s: "rock",
    },
    {
      u: "1FAB5",
      s: "wood",
    },
    {
      u: "1F6D6",
      s: "hut",
    },
    {
      u: "1F3D8-FE0F",
      s: "house_buildings",
    },
    {
      u: "1F3DA-FE0F",
      s: "derelict_house_building",
    },
    {
      u: "1F3E0",
      s: "house",
    },
    {
      u: "1F3E1",
      s: "house_with_garden",
    },
    {
      u: "1F3E2",
      s: "office",
    },
    {
      u: "1F3E3",
      s: "post_office",
    },
    {
      u: "1F3E4",
      s: "european_post_office",
    },
    {
      u: "1F3E5",
      s: "hospital",
    },
    {
      u: "1F3E6",
      s: "bank",
    },
    {
      u: "1F3E8",
      s: "hotel",
    },
    {
      u: "1F3E9",
      s: "love_hotel",
    },
    {
      u: "1F3EA",
      s: "convenience_store",
    },
    {
      u: "1F3EB",
      s: "school",
    },
    {
      u: "1F3EC",
      s: "department_store",
    },
    {
      u: "1F3ED",
      s: "factory",
    },
    {
      u: "1F3EF",
      s: "japanese_castle",
    },
    {
      u: "1F3F0",
      s: "european_castle",
    },
    {
      u: "1F492",
      s: "wedding",
    },
    {
      u: "1F5FC",
      s: "tokyo_tower",
    },
    {
      u: "1F5FD",
      s: "statue_of_liberty",
    },
    {
      u: "26EA",
      s: "church",
    },
    {
      u: "1F54C",
      s: "mosque",
    },
    {
      u: "1F6D5",
      s: "hindu_temple",
    },
    {
      u: "1F54D",
      s: "synagogue",
    },
    {
      u: "26E9-FE0F",
      s: "shinto_shrine",
    },
    {
      u: "1F54B",
      s: "kaaba",
    },
    {
      u: "26F2",
      s: "fountain",
    },
    {
      u: "26FA",
      s: "tent",
    },
    {
      u: "1F301",
      s: "foggy",
    },
    {
      u: "1F303",
      s: "night_with_stars",
    },
    {
      u: "1F3D9-FE0F",
      s: "cityscape",
    },
    {
      u: "1F304",
      s: "sunrise_over_mountains",
    },
    {
      u: "1F305",
      s: "sunrise",
    },
    {
      u: "1F306",
      s: "city_sunset",
    },
    {
      u: "1F307",
      s: "city_sunrise",
    },
    {
      u: "1F309",
      s: "bridge_at_night",
    },
    {
      u: "2668-FE0F",
      s: "hotsprings",
    },
    {
      u: "1F3A0",
      s: "carousel_horse",
    },
    {
      u: "1F6DD",
      s: "playground_slide",
    },
    {
      u: "1F3A1",
      s: "ferris_wheel",
    },
    {
      u: "1F3A2",
      s: "roller_coaster",
    },
    {
      u: "1F488",
      s: "barber",
    },
    {
      u: "1F3AA",
      s: "circus_tent",
    },
    {
      u: "1F682",
      s: "steam_locomotive",
    },
    {
      u: "1F683",
      s: "railway_car",
    },
    {
      u: "1F684",
      s: "bullettrain_side",
    },
    {
      u: "1F685",
      s: "bullettrain_front",
    },
    {
      u: "1F686",
      s: "train2",
    },
    {
      u: "1F687",
      s: "metro",
    },
    {
      u: "1F688",
      s: "light_rail",
    },
    {
      u: "1F689",
      s: "station",
    },
    {
      u: "1F68A",
      s: "tram",
    },
    {
      u: "1F69D",
      s: "monorail",
    },
    {
      u: "1F69E",
      s: "mountain_railway",
    },
    {
      u: "1F68B",
      s: "train",
    },
    {
      u: "1F68C",
      s: "bus",
    },
    {
      u: "1F68D",
      s: "oncoming_bus",
    },
    {
      u: "1F68E",
      s: "trolleybus",
    },
    {
      u: "1F690",
      s: "minibus",
    },
    {
      u: "1F691",
      s: "ambulance",
    },
    {
      u: "1F692",
      s: "fire_engine",
    },
    {
      u: "1F693",
      s: "police_car",
    },
    {
      u: "1F694",
      s: "oncoming_police_car",
    },
    {
      u: "1F695",
      s: "taxi",
    },
    {
      u: "1F696",
      s: "oncoming_taxi",
    },
    {
      u: "1F697",
      s: ["car", "red_car"],
    },
    {
      u: "1F698",
      s: "oncoming_automobile",
    },
    {
      u: "1F699",
      s: "blue_car",
    },
    {
      u: "1F6FB",
      s: "pickup_truck",
    },
    {
      u: "1F69A",
      s: "truck",
    },
    {
      u: "1F69B",
      s: "articulated_lorry",
    },
    {
      u: "1F69C",
      s: "tractor",
    },
    {
      u: "1F3CE-FE0F",
      s: "racing_car",
    },
    {
      u: "1F3CD-FE0F",
      s: "racing_motorcycle",
    },
    {
      u: "1F6F5",
      s: "motor_scooter",
    },
    {
      u: "1F9BD",
      s: "manual_wheelchair",
    },
    {
      u: "1F9BC",
      s: "motorized_wheelchair",
    },
    {
      u: "1F6FA",
      s: "auto_rickshaw",
    },
    {
      u: "1F6B2",
      s: "bike",
    },
    {
      u: "1F6F4",
      s: "scooter",
    },
    {
      u: "1F6F9",
      s: "skateboard",
    },
    {
      u: "1F6FC",
      s: "roller_skate",
    },
    {
      u: "1F68F",
      s: "busstop",
    },
    {
      u: "1F6E3-FE0F",
      s: "motorway",
    },
    {
      u: "1F6E4-FE0F",
      s: "railway_track",
    },
    {
      u: "1F6E2-FE0F",
      s: "oil_drum",
    },
    {
      u: "26FD",
      s: "fuelpump",
    },
    {
      u: "1F6DE",
      s: "wheel",
    },
    {
      u: "1F6A8",
      s: "rotating_light",
    },
    {
      u: "1F6A5",
      s: "traffic_light",
    },
    {
      u: "1F6A6",
      s: "vertical_traffic_light",
    },
    {
      u: "1F6D1",
      s: "octagonal_sign",
    },
    {
      u: "1F6A7",
      s: "construction",
    },
    {
      u: "2693",
      s: "anchor",
    },
    {
      u: "1F6DF",
      s: "ring_buoy",
    },
    {
      u: "26F5",
      s: ["boat", "sailboat"],
    },
    {
      u: "1F6F6",
      s: "canoe",
    },
    {
      u: "1F6A4",
      s: "speedboat",
    },
    {
      u: "1F6F3-FE0F",
      s: "passenger_ship",
    },
    {
      u: "26F4-FE0F",
      s: "ferry",
    },
    {
      u: "1F6E5-FE0F",
      s: "motor_boat",
    },
    {
      u: "1F6A2",
      s: "ship",
    },
    {
      u: "2708-FE0F",
      s: "airplane",
    },
    {
      u: "1F6E9-FE0F",
      s: "small_airplane",
    },
    {
      u: "1F6EB",
      s: "airplane_departure",
    },
    {
      u: "1F6EC",
      s: "airplane_arriving",
    },
    {
      u: "1FA82",
      s: "parachute",
    },
    {
      u: "1F4BA",
      s: "seat",
    },
    {
      u: "1F681",
      s: "helicopter",
    },
    {
      u: "1F69F",
      s: "suspension_railway",
    },
    {
      u: "1F6A0",
      s: "mountain_cableway",
    },
    {
      u: "1F6A1",
      s: "aerial_tramway",
    },
    {
      u: "1F6F0-FE0F",
      s: "satellite",
    },
    {
      u: "1F680",
      s: "rocket",
    },
    {
      u: "1F6F8",
      s: "flying_saucer",
    },
    {
      u: "1F6CE-FE0F",
      s: "bellhop_bell",
    },
    {
      u: "1F9F3",
      s: "luggage",
    },
    {
      u: "231B",
      s: "hourglass",
    },
    {
      u: "23F3",
      s: "hourglass_flowing_sand",
    },
    {
      u: "231A",
      s: "watch",
    },
    {
      u: "23F0",
      s: "alarm_clock",
    },
    {
      u: "23F1-FE0F",
      s: "stopwatch",
    },
    {
      u: "23F2-FE0F",
      s: "timer_clock",
    },
    {
      u: "1F570-FE0F",
      s: "mantelpiece_clock",
    },
    {
      u: "1F55B",
      s: "clock12",
    },
    {
      u: "1F567",
      s: "clock1230",
    },
    {
      u: "1F550",
      s: "clock1",
    },
    {
      u: "1F55C",
      s: "clock130",
    },
    {
      u: "1F551",
      s: "clock2",
    },
    {
      u: "1F55D",
      s: "clock230",
    },
    {
      u: "1F552",
      s: "clock3",
    },
    {
      u: "1F55E",
      s: "clock330",
    },
    {
      u: "1F553",
      s: "clock4",
    },
    {
      u: "1F55F",
      s: "clock430",
    },
    {
      u: "1F554",
      s: "clock5",
    },
    {
      u: "1F560",
      s: "clock530",
    },
    {
      u: "1F555",
      s: "clock6",
    },
    {
      u: "1F561",
      s: "clock630",
    },
    {
      u: "1F556",
      s: "clock7",
    },
    {
      u: "1F562",
      s: "clock730",
    },
    {
      u: "1F557",
      s: "clock8",
    },
    {
      u: "1F563",
      s: "clock830",
    },
    {
      u: "1F558",
      s: "clock9",
    },
    {
      u: "1F564",
      s: "clock930",
    },
    {
      u: "1F559",
      s: "clock10",
    },
    {
      u: "1F565",
      s: "clock1030",
    },
    {
      u: "1F55A",
      s: "clock11",
    },
    {
      u: "1F566",
      s: "clock1130",
    },
    {
      u: "1F311",
      s: "new_moon",
    },
    {
      u: "1F312",
      s: "waxing_crescent_moon",
    },
    {
      u: "1F313",
      s: "first_quarter_moon",
    },
    {
      u: "1F314",
      s: ["moon", "waxing_gibbous_moon"],
    },
    {
      u: "1F315",
      s: "full_moon",
    },
    {
      u: "1F316",
      s: "waning_gibbous_moon",
    },
    {
      u: "1F317",
      s: "last_quarter_moon",
    },
    {
      u: "1F318",
      s: "waning_crescent_moon",
    },
    {
      u: "1F319",
      s: "crescent_moon",
    },
    {
      u: "1F31A",
      s: "new_moon_with_face",
    },
    {
      u: "1F31B",
      s: "first_quarter_moon_with_face",
    },
    {
      u: "1F31C",
      s: "last_quarter_moon_with_face",
    },
    {
      u: "1F321-FE0F",
      s: "thermometer",
    },
    {
      u: "2600-FE0F",
      s: "sunny",
    },
    {
      u: "1F31D",
      s: "full_moon_with_face",
    },
    {
      u: "1F31E",
      s: "sun_with_face",
    },
    {
      u: "1FA90",
      s: "ringed_planet",
    },
    {
      u: "2B50",
      s: "star",
    },
    {
      u: "1F31F",
      s: "star2",
    },
    {
      u: "1F320",
      s: "stars",
    },
    {
      u: "1F30C",
      s: "milky_way",
    },
    {
      u: "2601-FE0F",
      s: "cloud",
    },
    {
      u: "26C5",
      s: "partly_sunny",
    },
    {
      u: "26C8-FE0F",
      s: "thunder_cloud_and_rain",
    },
    {
      u: "1F324-FE0F",
      s: ["mostly_sunny", "sun_small_cloud"],
    },
    {
      u: "1F325-FE0F",
      s: ["barely_sunny", "sun_behind_cloud"],
    },
    {
      u: "1F326-FE0F",
      s: ["partly_sunny_rain", "sun_behind_rain_cloud"],
    },
    {
      u: "1F327-FE0F",
      s: "rain_cloud",
    },
    {
      u: "1F328-FE0F",
      s: "snow_cloud",
    },
    {
      u: "1F329-FE0F",
      s: ["lightning", "lightning_cloud"],
    },
    {
      u: "1F32A-FE0F",
      s: ["tornado", "tornado_cloud"],
    },
    {
      u: "1F32B-FE0F",
      s: "fog",
    },
    {
      u: "1F32C-FE0F",
      s: "wind_blowing_face",
    },
    {
      u: "1F300",
      s: "cyclone",
    },
    {
      u: "1F308",
      s: "rainbow",
    },
    {
      u: "1F302",
      s: "closed_umbrella",
    },
    {
      u: "2602-FE0F",
      s: "umbrella",
    },
    {
      u: "2614",
      s: "umbrella_with_rain_drops",
    },
    {
      u: "26F1-FE0F",
      s: "umbrella_on_ground",
    },
    {
      u: "26A1",
      s: "zap",
    },
    {
      u: "2744-FE0F",
      s: "snowflake",
    },
    {
      u: "2603-FE0F",
      s: "snowman",
    },
    {
      u: "26C4",
      s: "snowman_without_snow",
    },
    {
      u: "2604-FE0F",
      s: "comet",
    },
    {
      u: "1F525",
      s: "fire",
    },
    {
      u: "1F4A7",
      s: "droplet",
    },
    {
      u: "1F30A",
      s: "ocean",
    },
  ],
  Activities: local_348b752a,
  Objects: local_4dbbe0df,
  Symbols: local_0fd8eb79,
  Flags: local_64e89f9e,
};
export { local_3189f019 as default };
