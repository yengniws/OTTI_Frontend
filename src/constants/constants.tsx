//하드코딩 값들 넣어놓음

export const ottOptions = [
  {
    name: '넷플릭스',
    imgURL:
      'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/ott/netflix.png',
    plans: ['광고형', '스탠다드', '프리미엄', '기타'],
  },
  {
    name: '티빙',
    imgURL:
      'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/ott/tving.png',
    plans: ['광고형', '베이직', '스탠다드', '프리미엄', '기타'],
  },
  {
    name: '웨이브',
    imgURL:
      'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/ott/wavve.png',
    plans: ['베이직', '스탠다드', '프리미엄', '기타'],
  },
  {
    name: '디즈니+',
    imgURL:
      'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/ott/disney-plus.png',
    plans: ['스탠다드', '프리미엄', '기타'],
  },
  {
    name: '쿠팡플레이',
    imgURL:
      'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/ott/coupang-play.png',
    plans: ['쿠팡와우회원', '기타'],
  },
  {
    name: '왓챠',
    imgURL:
      'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/ott/watcha.png',
    plans: ['베이직', '프리미엄', '기타'],
  },
];

export const dateOptions = Array.from({ length: 31 }, (_, i) => `${i + 1}`);
