import React from 'react';
import * as S from './Community.Style';

const CommunityList = () => {
  const data = [
    { id: 1, platform: '넷플릭스', title: '넷플릭스 1자리 구해요', desc: '프리미엄 요금제 1명 자리 남...' },
    { id: 2, platform: '티빙', title: '티빙 1자리 구해요', desc: '프리미엄 요금제 1명 자리 남...' },
    { id: 3, platform: '왓챠', title: '왓챠 1자리 구해요', desc: '프리미엄 요금제 1명 자리 남...' },
  ];

  return (
    <S.ListCont>
      {data.map((item) => (
        <S.ListItem key={item.id}>
          <S.ImgWrapper>
            <S.PlatformImg src={`/assets/${item.platform.toLowerCase()}.png`} alt={item.platform} />
          </S.ImgWrapper>
          <S.ListText>
            <S.Title>{item.title}</S.Title>
            <S.Description>{item.desc}</S.Description>
          </S.ListText>
          <S.CommentCount> 댓글 수 </S.CommentCount>
        </S.ListItem>
      ))}
    </S.ListCont>
  );
};

export default CommunityList;
