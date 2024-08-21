import React from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from '../../components/Topbar/TopBar';
import TotalSubscriptionFee from '../../components/Totalfee/TotalSubscriptionFee';
import PieChart from '../../components/Totalfee/PieChart';
import * as S from './SubscriptionDetailFeeDetail.Style';
import * as T from './Main.Style';

interface LocationState {
  totalAmount: number;
}

const SubscriptionFeeDetail: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState | null;
  const totalAmount = state?.totalAmount ?? 0;

  return (
    <T.MainContainer>
      <S.TitleWrapper>
        <TopBar title="이번 달 총 구독료" />
      </S.TitleWrapper>
      <T.PageContainer>
        {/* <TotalSubscriptionFee initialTotalAmount={totalAmount} /> */}
        <S.PieChartTitle>한 눈에 보기</S.PieChartTitle>
        <S.DetailContainer>
          <PieChart />
        </S.DetailContainer>
      </T.PageContainer>
    </T.MainContainer>
  );
};

export default SubscriptionFeeDetail;
