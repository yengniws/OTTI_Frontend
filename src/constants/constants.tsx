//하드코딩 값들 넣어놓음

export const ottOptions = [
  {
    name: '넷플릭스',
    imgURL: '../assets/img/ottLogo/netflix.png',
    plans: ['광고형', '스탠다드', '프리미엄', '기타'],
  },
  {
    name: '티빙',
    imgURL: '../assets/img/ottLogo/tving.png',
    plans: ['광고형', '베이직', '스탠다드', '프리미엄', '기타'],
  },
  {
    name: '웨이브',
    imgURL: '../assets/img/ottLogo/wavve.png',
    plans: ['베이직', '스탠다드', '프리미엄', '기타'],
  },
  {
    name: '디즈니+',
    imgURL: '../assets/img/ottLogo/disney.png',
    plans: ['스탠다드', '프리미엄', '기타'],
  },
  {
    name: '쿠팡플레이',
    imgURL: '../assets/img/ottLogo/coupang.png',
    plans: ['쿠팡와우회원', '기타'],
  },
  {
    name: '왓챠',
    imgURL: '../assets/img/ottLogo/watcha.png',
    plans: ['베이직', '프리미엄', '기타'],
  },
];

export const dateOptions = Array.from(
  { length: 31 },
  (_, i) => `매월 ${i + 1}일`,
);
