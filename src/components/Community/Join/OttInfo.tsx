import React from 'react';
import * as S from './OttInfo.Style';

interface OttInfoProps {
  image: string;
  name: string;
  ratePlan: string;
  price: number;
  paymentDate: string;
  memberCount: number;
}

const OttInfo = ({
  image,
  name,
  ratePlan,
  price,
  paymentDate,
  memberCount,
}: OttInfoProps) => {
  return (
    <S.OttInfoWrap>
      <S.Header>
        <S.OttImage src={image} alt={`${name} 로고`} />
        <S.OttName>{name}</S.OttName>
      </S.Header>
      <S.OttDetails>
        <S.DetailRow>
          <S.Label>요금제</S.Label>
          <S.OttText>{ratePlan}</S.OttText>
        </S.DetailRow>
        <S.DetailRow>
          <S.Label>가격</S.Label>
          <S.OttText>{price}원</S.OttText>
        </S.DetailRow>
        <S.DetailRow>
          <S.Label>납부일</S.Label>
          <S.OttText>{paymentDate}</S.OttText>
        </S.DetailRow>
        <S.DetailRow>
          <S.Label>현재 팟 인원</S.Label>
          <S.OttText>{memberCount}명</S.OttText>
        </S.DetailRow>
      </S.OttDetails>
    </S.OttInfoWrap>
  );
};

export default OttInfo;
