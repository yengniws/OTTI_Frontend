import React from 'react';
import * as S from './OttInfo.Style';

interface OttInfoProps {
  imageUrl: string;
  name: string;
  plan: string;
  price: string;
  paymentDate: string;
  currentMembers: string;
}

const OttInfo = ({
  imageUrl,
  name,
  plan,
  price,
  paymentDate,
  currentMembers,
}: OttInfoProps) => {
  return (
    <S.OttInfoWrap>
      <S.OttImage src={imageUrl} alt={`${name} 로고`} />
      <S.OttDetails>
        <S.OttText>요금제: {plan}</S.OttText>
        <S.OttText>가격: {price}</S.OttText>
        <S.OttText>납부일: {paymentDate}</S.OttText>
        <S.OttText>현재 팟 인원: {currentMembers}</S.OttText>
      </S.OttDetails>
    </S.OttInfoWrap>
  );
};

export default OttInfo;
