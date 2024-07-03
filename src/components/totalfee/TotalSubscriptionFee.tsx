import React from 'react';
import * as S from './TotalSubscriptionFee.Style';

interface TotalSubscriptionFeeProps {
  totalAmount: number;
}

const TotalSubscriptionFee: React.FC<TotalSubscriptionFeeProps> = ({
  totalAmount,
}) => {
  return (
    <S.TotalFeeContainer>
      <S.TotalFeeTitle>이번달 총 구독료</S.TotalFeeTitle>
      <S.TotalFeeAmount>{totalAmount}원</S.TotalFeeAmount>
    </S.TotalFeeContainer>
  );
};

export default TotalSubscriptionFee;
