import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './Main.Style';
import TotalSubscriptionFee from '../../components/TotalFee/TotalSubscriptionFee';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import SubscriptionList from '../../components/SubscriptionList/SubscriptionList';
import Calendar from '../../components/Calender/Calender';

// 구독 정보
import React, { useState, useEffect } from 'react'; // React 및 React 훅 가져오기
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useNavigate 훅 가져오기
import axios from 'axios'; // HTTP 요청을 위한 axios 라이브러리 가져오기
import * as S from './Main.Style'; // 스타일 컴포넌트 가져오기
import TotalSubscriptionFee from '../../components/TotalFee/TotalSubscriptionFee'; // 총 구독 요금을 표시하는 컴포넌트
import NotificationPanel from '../../components/Notification/NotificationPanel'; // 알림 패널 컴포넌트
import BottomNavBar from '../../components/BottomBar/BottomNavBar'; // 하단 내비게이션 바 컴포넌트
import SubscriptionList from '../../components/SubscriptionList/SubscriptionList'; // 구독 목록 컴포넌트
import Calendar from '../../components/Calender/Calender'; // 달력 컴포넌트

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
