import {
  symbol_002 as imported,
  symbol_077 as imported_2,
  symbol_073 as imported_3,
  symbol_055 as imported_4,
} from "../entry.js";
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
      id: "1.1.2",
    };
    const local_2 = new local.Error().stack;
    if (local_2) {
      local._sentryDebugIds = local._sentryDebugIds || {};
      local._sentryDebugIds[local_2] = "<sentry-debug-id>";
      local._sentryDebugIdIdentifier = "sentry-dbid-<sentry-debug-id>";
    }
  } catch {}
})();
const local_3eb06192 = (arg) => ({
  id: arg.id,
  username: arg.username,
  displayName: arg.displayName,
  avatar: arg.avatar,
  isVerified: arg.verified,
  hasNuksta: arg.hasNuksta,
  pin: arg.pin,
});
const local_f971cd80 = (arg) => ({
  id: arg.id,
  author: local_3eb06192(arg.author),
  wallOwnerId: arg.author.id,
  text: arg.content,
  spans: arg.spans ?? [],
  attachments: arg.attachments ?? [],
  reactions: {
    total: arg.likesCount,
    myReaction: null,
  },
  stats: {
    views: arg.viewsCount,
    comments: arg.commentsCount,
    reposts: arg.repostsCount,
  },
  reposted: false,
  originalPost: arg.originalPost ? local_f971cd80(arg.originalPost) : null,
  dominantEmoji: null,
  createdAt: arg.createdAt,
  editedAt: arg.editedAt ?? null,
});
const local_b5dc48f1 = {
  id: "5ee59a22-ae5a-49f9-9090-5a72e6285fad",
  username: "nowkie",
  displayName: "Илья Новки",
  avatar: "🦎",
  verified: true,
  hasNuksta: true,
  pin: {
    slug: "subscription_nuksta",
    name: "ИТД НУКСТА",
    description: "Поддержал ИТД",
    url: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
  },
};
const local_13847ae6 = [
  {
    id: "c5391c81-9769-4c56-bf85-66e37c2d888f",
    author: local_b5dc48f1,
    content: "",
    createdAt: "2026-01-27T23:02:18.629Z",
    editedAt: "2026-02-12T13:18:13.929Z",
    likesCount: 39341,
    commentsCount: 3146,
    repostsCount: 493,
    viewsCount: 374113,
    originalPost: {
      id: "1a4bba2d-6e31-468d-9cda-335054ff2d73",
      author: {
        id: "d5b91f55-6d22-447e-bcda-3dc6c8fd0080",
        username: "hungry_wolf",
        displayName: "hungry wolf",
        avatar: "🐺",
        verified: false,
        hasNuksta: false,
        pin: {
          slug: "epepuy_202605_64",
          name: "64 балла за написание Единственного Первого Экзамена по Ютубу",
          description: "ЕПЭПЮ 2026 (Май, 2026г)",
          url: "https://cdn.xn--d1ah4a.com/public/pins/epepuy/2026-05/64.webp",
        },
      },
      content:
        "это должно стать самым популярным постом #nowkie #exile #самыйпопулярныйпоствитд",
      spans: [
        {
          type: "hashtag",
          tag: "nowkie",
          offset: 41,
          length: 7,
        },
        {
          type: "hashtag",
          tag: "exile",
          offset: 49,
          length: 6,
        },
        {
          type: "hashtag",
          tag: "самыйпопулярныйпоствитд",
          offset: 56,
          length: 24,
        },
      ],
      createdAt: "2026-01-27T22:03:23.279Z",
      attachments: [
        {
          id: "c63a2cf7-3c6d-46d4-bfde-634067603e73",
          type: "image",
          url: "https://cdn.xn--d1ah4a.com/images/df6687e5-2365-4ce2-85c7-59ff246e37ad.jpg",
          width: 1024,
          height: 1024,
        },
      ],
      likesCount: 8940,
      commentsCount: 184,
      repostsCount: 168,
      viewsCount: 83035,
    },
  },
  {
    id: "b0b1784a-5223-4159-9d5b-e27bda651dd6",
    author: local_b5dc48f1,
    content: "ребята на 3 лайка розыгрыш итд",
    createdAt: "2026-05-10T14:38:28.052Z",
    likesCount: 24635,
    commentsCount: 537,
    repostsCount: 45,
    viewsCount: 182760,
  },
  {
    id: "3c5fa335-c0db-4767-a251-c8128f288174",
    author: {
      id: "f8c36f53-0479-47c6-80f2-da00b206bc31",
      username: "ktsuper113",
      displayName: "Ктсупер [113]",
      avatar: "🙃",
      verified: false,
      hasNuksta: true,
      pin: {
        slug: "epepuy_202605_52",
        name: "52 балла за написание Единственного Первого Экзамена по Ютубу",
        description: "ЕПЭПЮ 2026 (Май, 2026г)",
        url: "https://cdn.xn--d1ah4a.com/public/pins/epepuy/2026-05/52.webp",
      },
    },
    content: "С*ка если я выложу фото с помидором вы это тоже лайкните?",
    createdAt: "2026-05-10T14:38:47.449Z",
    attachments: [
      {
        id: "367c3b0c-8eaa-4002-80ae-469b80b75c26",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/e059ffe2-9dec-4f76-aaf4-e5ffd14c359b.jpg",
        width: 1320,
        height: 1700,
      },
    ],
    likesCount: 22058,
    commentsCount: 463,
    repostsCount: 61,
    viewsCount: 164592,
  },
  {
    id: "dd5d2275-6207-4393-a0d2-b55bbd6cd281",
    author: {
      id: "842d33f4-cdc7-4d8d-a73d-f3ef7443d5f8",
      username: "vigovno",
      displayName: "Вы говно",
      avatar: "💩",
      verified: false,
      hasNuksta: false,
      pin: null,
    },
    content: "подшарила",
    createdAt: "2026-05-10T15:10:32.746Z",
    attachments: [
      {
        id: "c58fcaa5-ed53-4c13-8960-679a22434575",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/01807086-8dc7-4f56-83fd-261b555c8ef6.jpg",
        width: 1032,
        height: 597,
      },
    ],
    likesCount: 21859,
    commentsCount: 267,
    repostsCount: 236,
    viewsCount: 160639,
  },
  {
    id: "0d2957ca-6626-482e-95c7-efa82390ce97",
    author: {
      id: "11f8da29-38eb-422b-9053-b28c4c18a6af",
      username: "radami",
      displayName: "рыжая radami",
      avatar: "🃏",
      verified: false,
      hasNuksta: false,
      pin: null,
    },
    content: "а если я сфоткаюсь с чайником блять вы это тоже лайкните?",
    createdAt: "2026-05-10T17:57:33.529Z",
    attachments: [
      {
        id: "c30f46bb-5cec-44f0-8d49-eefb5e4ef604",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/a1d570b0-59a2-40f8-8cf4-e136a80605d0.jpg",
        width: 1920,
        height: 1920,
      },
    ],
    likesCount: 21244,
    commentsCount: 716,
    repostsCount: 81,
    viewsCount: 146295,
  },
  {
    id: "8933e010-2817-4ba2-ba49-754bd6a089ef",
    author: local_b5dc48f1,
    content: "анимешники ку!!",
    createdAt: "2026-05-10T12:40:11.031Z",
    attachments: [
      {
        id: "1ac66b92-8b2c-4264-9ed6-d503e5ca4026",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/85f80834-ffdf-4177-9336-7ae8067c915c.jpeg",
        width: 4032,
        height: 3024,
      },
    ],
    likesCount: 19268,
    commentsCount: 724,
    repostsCount: 57,
    viewsCount: 188440,
  },
  {
    id: "0bbe017f-e695-4662-8616-22d963d5d48d",
    author: local_b5dc48f1,
    content: "❤ — погладить",
    createdAt: "2026-05-12T10:19:12.224Z",
    attachments: [
      {
        id: "04267aaf-2e49-483a-9334-a288c4853b4b",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/7788f770-e255-4c23-8403-f7c42a1a7f13.jpg",
        width: 1320,
        height: 886,
      },
    ],
    likesCount: 18821,
    commentsCount: 386,
    repostsCount: 93,
    viewsCount: 92783,
  },
  {
    id: "688e4918-2751-4bee-946a-bba2480ff450",
    author: {
      id: "74151445-4780-42b4-a97c-913190253e16",
      username: "japonka",
      displayName: "японка вич",
      avatar: "💀",
      verified: true,
      hasNuksta: false,
      pin: null,
    },
    content: "выебываюсь",
    createdAt: "2026-05-10T12:22:01.796Z",
    attachments: [
      {
        id: "380825c7-79fa-4971-a2f7-351e4ddc50c4",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/ad49c54d-43f9-4f25-a740-9f54459a1c4e.jpg",
        width: 1920,
        height: 1920,
      },
    ],
    likesCount: 18502,
    commentsCount: 912,
    repostsCount: 49,
    viewsCount: 186225,
  },
  {
    id: "5e12419d-f7b8-457e-accb-ece8d43af409",
    author: {
      id: "4ff8845c-3b54-4e15-96df-a4be86dac8ae",
      username: "kw1stoff",
      displayName: "Квист",
      avatar: "👑",
      verified: false,
      hasNuksta: false,
      pin: null,
    },
    content: "ладно вот вам смешинка",
    createdAt: "2026-05-10T12:58:04.137Z",
    attachments: [
      {
        id: "37706dc7-2b05-46f0-9436-74be00ec2b8e",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/dabf9100-ef57-4fa1-a1cf-14d4dd6c300c.jpg",
        width: 1170,
        height: 1081,
      },
    ],
    likesCount: 17726,
    commentsCount: 262,
    repostsCount: 155,
    viewsCount: 171396,
  },
  {
    id: "f483b8e2-67fb-4ec6-a8cb-25e2fd0b9416",
    author: {
      id: "5d4f69c0-439a-4b9a-b3cb-16667c138fd5",
      username: "AMR777",
      displayName: "Семён_лобанов",
      avatar: "🧑‍💻",
      verified: false,
      hasNuksta: false,
      pin: null,
    },
    content: "подпишусь взаимно",
    createdAt: "2026-05-10T13:57:23.888Z",
    editedAt: "2026-05-12T09:12:52.471Z",
    attachments: [
      {
        id: "bab5e8b6-c825-4e3f-b588-2ec0ad1c0bab",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/745418a7-3f9a-4ddd-a25b-3e15c506184b.jpg",
        width: 1408,
        height: 768,
      },
    ],
    likesCount: 17702,
    commentsCount: 332,
    repostsCount: 171,
    viewsCount: 151604,
  },
  {
    id: "d9bd6a69-ae52-44f2-99ae-208c020fe206",
    author: local_b5dc48f1,
    content: "всем ку итд",
    createdAt: "2026-03-14T05:22:23.582Z",
    attachments: [
      {
        id: "ef70e30a-cecf-423a-94d9-0d3f917b4186",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/5caa63dc-2b9b-4668-8598-c6f8499710df.jpg",
        width: 1440,
        height: 1920,
      },
    ],
    likesCount: 16764,
    commentsCount: 456,
    repostsCount: 54,
    viewsCount: 112399,
  },
  {
    id: "202a01c2-a5aa-4535-9293-8f3ae35f232c",
    author: {
      id: "358cb179-7109-451a-b254-616be14e2023",
      username: "dkincc2",
      displayName: "КАШ ИН ДАН",
      avatar: "🍅",
      verified: true,
      hasNuksta: false,
      pin: null,
    },
    content: "СЛАВА ТНДР!",
    createdAt: "2026-03-19T18:17:31.330Z",
    attachments: [
      {
        id: "76781b30-bc38-4900-9998-d632a63bbf9a",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/06e5e63b-f4c4-45df-91a1-3daf30206fc4.jpg",
        width: 1280,
        height: 853,
      },
    ],
    likesCount: 16336,
    commentsCount: 321,
    repostsCount: 869,
    viewsCount: 157202,
  },
  {
    id: "a46bf2c7-48f1-4c9a-b67f-e47a92377786",
    author: local_b5dc48f1,
    content: `@drakeoffc69 привет добро пожаловать в итд!!! это я сео итд!!! торжественно привествую!! ребята розыгрыш пароля от аккаунта дениса, условия: лайк!!! 

итоги через 3 месяца`,
    spans: [
      {
        type: "mention",
        id: "drakeoffc69",
        offset: 0,
        length: 12,
      },
    ],
    createdAt: "2026-03-18T14:37:11.388Z",
    attachments: [
      {
        id: "0082be2d-5f6f-4919-8b2b-ef28a5cc5075",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/8262f97f-137d-4969-9d10-c0b31649ae08.jpg",
        width: 1440,
        height: 1920,
      },
    ],
    likesCount: 16168,
    commentsCount: 211,
    repostsCount: 59,
    viewsCount: 112352,
  },
  {
    id: "5d7b735d-a0ef-4595-a6a6-c8098f45d7d2",
    author: {
      id: "278b5dfb-5eb3-4e0b-ad67-893c983b3ade",
      username: "amon_raqq",
      displayName: "Тëма",
      avatar: "🦎",
      verified: false,
      hasNuksta: false,
      pin: {
        slug: "pixelbattle_202603_5",
        name: "Участие в Пиксель Баттле",
        description: "Пиксель Баттл (Март, 2026г)",
        url: "https://cdn.xn--d1ah4a.com/public/pins/pixelbattle/2026-03/5.webp",
      },
    },
    content:
      "ИЛЬЯ НОУКИ, МЫ ПРОСИМ ТЕБЯ ДОБАВИТЬ ЛИЧНЫЕ ЧАТЫ И КРУЖКИ! ДАВАЙТЕ РАЗОРВËМ ЭТОТ ПОСТ АКТИВОМ, ЧТОБЫ НАШИ ПРОСЬБЫ БЫЛИ УСЛЫШАНЫ!!",
    createdAt: "2026-03-14T14:19:54.836Z",
    attachments: [
      {
        id: "21755afa-c49f-43c4-9bf3-91cff9f42cfd",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/15615bbd-5a6d-48bf-a62d-d4b05e7e0690.jpg",
        width: 1920,
        height: 1276,
      },
    ],
    likesCount: 15836,
    commentsCount: 271,
    repostsCount: 1066,
    viewsCount: 70387,
  },
  {
    id: "a9dec883-8878-492c-8b78-38dff6967da6",
    author: {
      id: "7464b355-42b8-45f4-a7ff-250890a56d6b",
      username: "Templar",
      displayName: "Templar",
      avatar: "🏂",
      verified: false,
      hasNuksta: false,
      pin: null,
    },
    content: "Сделайте этот пост самым популярным",
    createdAt: "2026-01-26T15:07:54.190Z",
    editedAt: "2026-02-12T13:18:13.929Z",
    attachments: [
      {
        id: "241bff62-b889-45a7-88db-5fc86b9a7774",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/02d164b4-d1a9-42c4-aeb7-4e9edc448545.jpg",
        width: 800,
        height: 500,
      },
    ],
    likesCount: 15497,
    commentsCount: 714,
    repostsCount: 602,
    viewsCount: 76289,
  },
  {
    id: "577d3a50-97cf-4a41-bd4d-6991d9fd06bd",
    author: {
      id: "696d0730-f998-479a-b404-798f0a6bff43",
      username: "andr3i",
      displayName: "андрей",
      avatar: "🪽",
      verified: false,
      hasNuksta: false,
      pin: null,
    },
    content: "",
    createdAt: "2026-03-13T09:27:45.245Z",
    attachments: [
      {
        id: "dd14c524-756a-43b8-9e4d-bca9130097d4",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/4c9c468d-09e6-4e9f-81f9-8b31dd75fe30.jpg",
        width: 1179,
        height: 1108,
      },
    ],
    likesCount: 14998,
    commentsCount: 135,
    repostsCount: 398,
    viewsCount: 95027,
  },
  {
    id: "58e8f04c-1c4f-4d61-b663-7230ce5947d8",
    author: local_b5dc48f1,
    content: "АХХАХ ВТФ ПАЦАНЫ И ДЕВЧАТА МЫ В ТОПЕ ЭПСТОРА АХАХАХХАХАХАХАХАХ",
    createdAt: "2026-03-13T20:23:57.036Z",
    attachments: [
      {
        id: "941d6075-e463-4473-a4fe-20e904cdd406",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/7eb8bd8a-0cf6-42fa-812c-51826f3424c8.jpg",
        width: 1320,
        height: 493,
      },
    ],
    likesCount: 14086,
    commentsCount: 245,
    repostsCount: 54,
    viewsCount: 130306,
  },
  {
    id: "43f6e0e0-c18b-4785-821e-d5ffa2fe74e2",
    author: local_b5dc48f1,
    content: `ребят! отвечаю на вопрос про личные переписки:

я много раз отвечал, но может кто-то пропустил — КОНЕЧНО ДОБАВИМ!! нужно чуть времени, мы уже начали эти процессы и скоро можно будет переписываться в итд 👍🏻`,
    createdAt: "2026-03-14T11:45:11.386Z",
    attachments: [
      {
        id: "720a11b5-a4dd-4c66-8f7a-5b9cd569676e",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/129170a9-c567-46da-a2ce-e89a475452d0.jpg",
        width: 1041,
        height: 626,
      },
    ],
    likesCount: 13630,
    commentsCount: 541,
    repostsCount: 202,
    viewsCount: 108440,
  },
  {
    id: "6806598f-c701-491e-9bf5-5ad189680c02",
    author: {
      id: "358cb179-7109-451a-b254-616be14e2023",
      username: "dkincc2",
      displayName: "КАШ ИН ДАН",
      avatar: "🍅",
      verified: true,
      hasNuksta: false,
      pin: null,
    },
    content: `Я ВЕРХОВНЫЙ ГЛАВНОКОМАНДУЮЩИЙ ТОМАТНОЙ НАРОДНОЙ ДЕМОКРАТИЧЕСКОЙ РЕСПУБЛИКИ ЗАЯВЛЯЮ ЧТО ЛЕВЫЙ НИЖНИЙ УГОЛ - ЭТО ИСТОРИЧЕСКИ НАШИ ЗЕМЛИ! МЫ ЗАБИРАЕМ ТО ЧТО ПО ПРАВУ ПРИНАДЛЕЖИТ НАМ! 
КТО БУДЕТ ПРОТИВ БУДЕТ УНИЧТОЖЕН НА МЕСТЕ!!!!!!!`,
    createdAt: "2026-03-19T16:17:12.800Z",
    editedAt: "2026-03-19T21:58:13.683Z",
    likesCount: 13278,
    commentsCount: 446,
    repostsCount: 395,
    viewsCount: 155110,
  },
  {
    id: "40d6f96a-9353-4edb-8712-ba2e60eaceca",
    author: local_b5dc48f1,
    content: "первый пост итд",
    createdAt: "2025-12-16T17:52:15.803Z",
    editedAt: "2026-02-12T13:18:13.929Z",
    attachments: [
      {
        id: "4f4326c6-37bd-4c2a-b274-d161f6784351",
        type: "image",
        url: "https://cdn.xn--d1ah4a.com/images/6f6ef5fb-97d1-4edc-80cf-d821c86efcd9.jpeg",
        width: 4032,
        height: 3024,
      },
    ],
    likesCount: 12989,
    commentsCount: 1204,
    repostsCount: 866,
    viewsCount: 53299,
  },
];
const local_6d272ac7 = local_13847ae6.map(local_f971cd80);
const local_57ccc57d = "c_layout";
const local_0314abcb = "c_showcase";
const local_1d618df6 = "c_column";
const local_9e71a017 = "c_columnTrack";
const local_17348647 = "c_columnStack";
const local_ccf379c9 = "c_pane";
const local_edc0448f = {
  layout: local_57ccc57d,
  showcase: local_0314abcb,
  column: local_1d618df6,
  columnTrack: local_9e71a017,
  columnStack: local_17348647,
  pane: local_ccf379c9,
};
const local_15213d5c = [14, 11];
const local_f06debfc = 2.5;
const local_f06debfc_2 = 3000;
const local_f06debfc_3 = 1.1;
function fn_2b23affe({ posts: arg, trackRef: arg_2 }) {
  return imported_3("div", {
    className: local_edc0448f.column,
    children: imported_3("div", {
      className: local_edc0448f.columnTrack,
      ref: arg_2,
      children: [0, 1].map((arg) =>
        imported_3(
          "div",
          {
            className: local_edc0448f.columnStack,
            children: arg.map((arg, arg_2) =>
              imported_3(
                imported_4,
                {
                  post: arg,
                  source: "feed_global",
                  showcase: true,
                },
                `${arg}-${arg_2}-${arg.id}`,
              ),
            ),
          },
          arg,
        ),
      ),
    }),
  });
}
export const local_21a4f168 = ({ children: arg }) => {
  const local = local_6d272ac7.filter((arg, arg_2) => arg_2 % 2 === 0);
  const local_2 = local_6d272ac7.filter((arg, arg_2) => arg_2 % 2 === 1);
  const local_3 = imported(null);
  const local_4 = imported(null);
  const local_5 = imported(null);
  imported_2(() => {
    const local = local_3.current;
    const local_2 = [local_4.current, local_5.current];
    if (
      !local ||
      !local_2[0] ||
      !local_2[1] ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const local_3 = [0, 0];
    const local_4 = [0, 0];
    let local_5 = performance.now();
    let local_6 = 0;
    const local_7 = (arg) => {
      const local = Math.min((arg - local_5) / 1000, 0.05);
      local_5 = arg;
      for (let local = 0; local < 2; local++) {
        local_3[local] *= Math.exp(-local / local_f06debfc_3);
        if (Math.abs(local_3[local]) < 0.05) {
          local_3[local] = 0;
        }
      }
      for (let local = 0; local < 2; local++) {
        const local = local_2[local];
        const local_2 = local.scrollHeight / 2;
        if (local_2 <= 0) {
          continue;
        }
        const local_3 =
          local === 0
            ? local_15213d5c[0] + local_3[0]
            : local_15213d5c[1] - local_3[1];
        local_4[local] =
          (((local_4[local] + local_3 * local) % local_2) + local_2) % local_2;
        const local_4 =
          local === 0 ? local_4[local] - local_2 : -local_4[local];
        local.style.transform = `translate3d(0, ${local_4.toFixed(2)}px, 0)`;
      }
      local_6 = requestAnimationFrame(local_7);
    };
    const local_8 = (arg) => {
      const local = local.getBoundingClientRect();
      if (local.width === 0 || arg.clientX > local.right) {
        return;
      }
      const local_2 = local_2[0].getBoundingClientRect();
      const local_3 = arg.clientX <= local_2.right ? 0 : 1;
      local_3[local_3] = Math.max(
        -local_f06debfc_2,
        Math.min(
          local_f06debfc_2,
          local_3[local_3] - arg.deltaY * local_f06debfc,
        ),
      );
    };
    window.addEventListener("wheel", local_8, {
      passive: true,
    });
    local_6 = requestAnimationFrame(local_7);
    return () => {
      cancelAnimationFrame(local_6);
      window.removeEventListener("wheel", local_8);
    };
  }, []);
  return imported_3("div", {
    className: local_edc0448f.layout,
    children: [
      imported_3("div", {
        className: local_edc0448f.showcase,
        "aria-hidden": "true",
        ref: local_3,
        children: [
          imported_3(fn_2b23affe, {
            posts: local,
            trackRef: local_4,
          }),
          imported_3(fn_2b23affe, {
            posts: local_2,
            trackRef: local_5,
          }),
        ],
      }),
      imported_3("div", {
        className: local_edc0448f.pane,
        children: arg,
      }),
    ],
  });
};
export { local_21a4f168 as default };
