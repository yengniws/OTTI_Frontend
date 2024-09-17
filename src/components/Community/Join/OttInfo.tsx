import React from 'react';
import * as S from './OttInfo.Style';

interface OttInfoProps {
  imageUrl: string;
  ottname: string;
  plan: string;
  price: string;
  paymentDate: string;
  currentMembers: string;
}

const OttInfo = ({
  imageUrl,
  ottname,
  plan,
  price,
  paymentDate,
  currentMembers,
}: OttInfoProps) => {
  return (
    <S.OttInfoWrap>
      <S.Header>
        <S.OttImage src={imageUrl} alt={`${ottname} 로고`} />
        <S.OttName>{ottname}</S.OttName>
      </S.Header>
      <S.OttDetails>
        <S.DetailRow>
          <S.Label>요금제</S.Label>
          <S.OttText>{plan}</S.OttText>
        </S.DetailRow>
        <S.DetailRow>
          <S.Label>가격</S.Label>
          <S.OttText>{price}</S.OttText>
        </S.DetailRow>
        <S.DetailRow>
          <S.Label>납부일</S.Label>
          <S.OttText>{paymentDate}</S.OttText>
        </S.DetailRow>
        <S.DetailRow>
          <S.Label>현재 팟 인원</S.Label>
          <S.OttText>{currentMembers}</S.OttText>
        </S.DetailRow>
      </S.OttDetails>
    </S.OttInfoWrap>
  );
};

export default OttInfo;
