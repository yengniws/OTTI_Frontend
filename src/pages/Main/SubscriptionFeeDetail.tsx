import React from 'react';
import { useLocation } from 'react-router-dom';
import NewTopBar from '../../components/TopBar/NewTopBar';
import TotalSubscriptionFee from '../../components/TotalFee/TotalSubscriptionFee';
import PieChart from '../../components/TotalFee/PieChart';
import * as S from './SubscriptionDetailFeeDetail.Style';

interface LocationState {
  totalAmount: number;
}

const SubscriptionFeeDetail: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState | null;
  const totalAmount = state?.totalAmount ?? 0;

  return (
    <S.MainContainer>
      <S.TitleWrapper>
        <NewTopBar title="이번 달 총 구독료" />
      </S.TitleWrapper>
      <S.Container>
        <TotalSubscriptionFee initialTotalAmount={totalAmount} />
        <S.PieChartTitle>한 눈에 보기</S.PieChartTitle>
        <S.DetailContainer>
          <PieChart />
        </S.DetailContainer>
      </S.Container>
    </S.MainContainer>
  );
};

export default SubscriptionFeeDetail;
