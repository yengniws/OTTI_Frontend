//하드코딩 값들 넣어놓음

export const ottOptions = [
  //이미지 링크는 소정이가 호스팅한 이미지 링크로 변경하기
  {
    name: '넷플릭스',
    imgURL:
      'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
    plans: ['광고형', '스탠다드', '프리미엄', '기타'],
  },
  {
    name: '티빙',
    imgURL:
      'https://play-lh.googleusercontent.com/eG3T5rqaV3ifl3MKV0fMi4V161wdhghpmqOMq-KYXOCN7Qy98yZhSsIj1gUBQ6YQqRg',
    plans: ['광고형', '베이직', '스탠다드', '프리미엄', '기타'],
  },
  {
    name: '웨이브',
    imgURL:
      'https://play-lh.googleusercontent.com/7cuI7bdCeZbmc9anRXqpmxZPH92t5NEEbhTnj5by6skhZK_dlUg9kx--gqtLf-8c2K12',
    plans: ['베이직', '스탠다드', '프리미엄', '기타'],
  },
  {
    name: '디즈니+',
    imgURL:
      'https://play-lh.googleusercontent.com/5wVn4qP4EIQV4BU2nzx2oDGeyDFU3Id2zlchCDNpqEGzyZssojerAql5ybq5RS59Ve0y',
    plans: ['스탠다드', '프리미엄', '기타'],
  },
  {
    name: '쿠팡플레이',
    imgURL:
      'https://play-lh.googleusercontent.com/b0eSS0LrM52IqHtp1xOkaW--Js1xDLmE3cejCOY3iQNTMIMSUZ6wGhW0izQfpM9m3bNu=w240-h480-rw',
    plans: ['쿠팡와우회원', '기타'],
  },
  {
    name: '왓챠',
    imgURL:
      'https://play-lh.googleusercontent.com/vAkKvTtE8kdb0MWWxOVaqYVf0_suB-WMnfCR1MslBsGjhI49dAfF1IxcnhtpL3PnjVY',
    plans: ['베이직', '프리미엄', '기타'],
  },
];

export const dateOptions = Array.from(
  { length: 31 },
  (_, i) => `매월 ${i + 1}일`,
);
