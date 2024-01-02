interface Option1 {
  label: string;
  dollCategoryId: string;
  text_key: string;
}

interface Option2 {
  label: string;
  dollItemsId: string;
  text_key: string;
  doll_url: string;
  isGirl: boolean;
  group: string;
}

// 人偶分類
export const dollCategory: Option1[] = [
  {
    label: "身體",
    dollCategoryId: "1",
    text_key: "S_LOGIN",
  },
  {
    label: "頭髮",
    dollCategoryId: "2",
    text_key: "S_LOGIN",
  },
  {
    label: "帽子",
    dollCategoryId: "3",
    text_key: "S_LOGIN",
  },
  {
    label: "身體",
    dollCategoryId: "4",
    text_key: "S_LOGIN",
  },
  {
    label: "頭髮",
    dollCategoryId: "5",
    text_key: "S_LOGIN",
  },
  {
    label: "帽子",
    dollCategoryId: "6",
    text_key: "S_LOGIN",
  },
  {
    label: "身體",
    dollCategoryId: "7",
    text_key: "S_LOGIN",
  },
  {
    label: "頭髮",
    dollCategoryId: "8",
    text_key: "S_LOGIN",
  },
  {
    label: "帽子",
    dollCategoryId: "9",
    text_key: "S_LOGIN",
  },
  {
    label: "身體",
    dollCategoryId: "10",
    text_key: "S_LOGIN",
  },
  {
    label: "頭髮",
    dollCategoryId: "11",
    text_key: "S_LOGIN",
  }
];

// 人偶項目
export const dollItems: Option2[] = [
  {
    label: "男",
    dollItemsId: "001-1",
    text_key: "S_LOGIN",
    doll_url: "bodyM",
    isGirl: false,
    group: "1",
  },
  {
    label: "女",
    dollItemsId: "001-2",
    text_key: "S_LOGIN",
    doll_url: "bodyF",
    isGirl: false,
    group: "1",
  },
  {
    label: "女髮型1",
    dollItemsId: "002-1",
    text_key: "S_LOGIN",
    doll_url: "hair01",
    isGirl: true,
    group: "2",
  },
  {
    label: "女髮型2",
    dollItemsId: "002-2",
    text_key: "S_LOGIN",
    doll_url: "hair02",
    isGirl: true,
    group: "2",
  },
  {
    label: "女髮型3",
    dollItemsId: "002-3",
    text_key: "S_LOGIN",
    doll_url: "hair03",
    isGirl: true,
    group: "2",
  },
  {
    label: "男髮型1",
    dollItemsId: "002-4",
    text_key: "S_LOGIN",
    doll_url: "hair04",
    isGirl: false,
    group: "2",
  },
  {
    label: "男髮型2",
    dollItemsId: "002-5",
    text_key: "S_LOGIN",
    doll_url: "hair05",
    isGirl: false,
    group: "2",
  },
  {
    label: "男髮型3",
    dollItemsId: "002-6",
    text_key: "S_LOGIN",
    doll_url: "hair06",
    isGirl: false,
    group: "2",
  },
  {
    label: "耳罩",
    dollItemsId: "003-1",
    text_key: "S_LOGIN",
    doll_url: "hat01",
    isGirl: false,
    group: "3",
  },
  {
    label: "黑貓貓帽",
    dollItemsId: "003-2",
    text_key: "S_LOGIN",
    doll_url: "hat02",
    isGirl: false,
    group: "3",
  },
];
