//하드코딩 값들 넣어놓음

export const ottOptions = [
  {
    name: '넷플릭스',
    imgURL: 'https://i.ibb.co/hdrL7nM/Netflix.png',
    plans: ['광고형', '스탠다드', '프리미엄', '기타'],
  },
  {
    name: '티빙',
    imgURL: 'https://i.ibb.co/xJYNbMZ/tving.png',
    plans: ['광고형', '베이직', '스탠다드', '프리미엄', '기타'],
  },
  {
    name: '웨이브',
    imgURL: 'https://i.ibb.co/5YnVYMd/Wavve.png',
    plans: ['베이직', '스탠다드', '프리미엄', '기타'],
  },
  {
    name: '디즈니+',
    imgURL: 'https://i.ibb.co/wKm4GMF/Disney-plus.png',
    plans: ['스탠다드', '프리미엄', '기타'],
  },
  {
    name: '쿠팡플레이',
    imgURL: 'https://i.ibb.co/Y3N6qcb/Coupang-play.png',
    plans: ['쿠팡와우회원', '기타'],
  },
  {
    name: '왓챠',
    imgURL: 'https://i.ibb.co/4MQ02LS/Watcha.png',
    plans: ['베이직', '프리미엄', '기타'],
  },
];

export const dateOptions = Array.from({ length: 31 }, (_, i) => `${i + 1}`);
