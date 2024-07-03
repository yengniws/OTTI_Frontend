import React from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from '../../components/topbar/TopBar';
import TotalSubscriptionFee from '../../components/totalfee/TotalSubscriptionFee';
import PieChart from '../../components/totalfee/PieChart';
import * as S from './SubscriptionDetail.Style';
import * as T from './Main.Style';

const SubscriptionDetail: React.FC = () => {
  const location = useLocation();
  const { totalAmount } = location.state as { totalAmount: number };

  return (
    <T.MainContainer>
      <T.Header>
        <TopBar title="이번 달 총 구독료" />
      </T.Header>
      <T.PageContainer>
        <TotalSubscriptionFee totalAmount={totalAmount} />
        <S.DetailContainer>
          <PieChart />
        </S.DetailContainer>
      </T.PageContainer>
    </T.MainContainer>
  );
};

export default SubscriptionDetail;
