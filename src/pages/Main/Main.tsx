import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './Main.Style';
import TotalSubscriptionFee from '../../components/Totalfee/TotalSubscriptionFee';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import SubscriptionList from '../../components/SubscriptionList/SubscriptionList';
import Calendar from '../../components/Calender/Calender';
import mainLogo from '../../assets/img/OTTi_Main_logo.png';

// 구독 정보 인터페이스 정의
interface Subscription {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
}

const Main: React.FC = () => {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  const handleTotalFeeClick = () => {
    navigate('/subscription-detail');
  };

  return (
    <>
      <S.MainContainer>
        <S.Header>
          <S.Logo>OTTi</S.Logo>
        </S.Header>
        <div onClick={handleTotalFeeClick}>
          {' '}
          <TotalSubscriptionFee />
        </div>
        <S.PageContainer>
          {' '}
          {subscriptions.map((subscription) => (
            <div key={subscription.id}>
              {subscription.name}: {subscription.amount}원{' '}
            </div>
          ))}
        </S.PageContainer>
        <Calendar />
        <SubscriptionList />
        <S.BottomNavBarWrapper>
          {' '}
          <BottomNavBar />
        </S.BottomNavBarWrapper>
      </S.MainContainer>
    </>
  );
};

export default Main;
