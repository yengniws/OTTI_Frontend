import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './Main.Style';
import TotalSubscriptionFee from '../../components/totalfee/TotalSubscriptionFee';
import NotificationPanel from '../../components/NotificationPanel';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import SubscriptionList from '../../components/ SubscriptionList/ SubscriptionList';

interface Subscription {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
}

const Main = () => {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get('/api/subscription');
        // API 응답 구조 확인 및 데이터 처리
        const data = response.data;
        if (Array.isArray(data)) {
          setSubscriptions(data);
        } else if (typeof data === 'object' && data !== null) {
          // 객체 형태로 온 경우 배열로 변환
          setSubscriptions(Object.values(data)); //Object.values(): ES2017(ES8)에서 도입된 기능
          //Object.values() 메서드를 인식하지 못해서 발생 -> tsconfig.json lib 추가
        } else {
          console.error('Unexpected data structure:', data);
          setSubscriptions([]);
        }
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
        setSubscriptions([]);
      }
    };

    fetchSubscriptions();
  }, []);

  const handleTotalFeeClick = () => {
    navigate('/subscription-detail');
  };

  const handleSubscriptionClick = async (subscriptionId: string) => {
    try {
      const response = await axios.get(`/api/subscription/${subscriptionId}`);
      console.log('Subscription details:', response.data);
      // 여기서 상세 정보를 표시하거나 다른 페이지로 이동할 수 있습니다.
    } catch (error) {
      console.error('Error fetching subscription details:', error);
    }
  };

  return (
    <S.MainContainer>
      <S.Header>
        <S.Logo>OTTi</S.Logo>
        <NotificationPanel />
      </S.Header>
      <S.BottomNavBarWrapper>
        <BottomNavBar />
      </S.BottomNavBarWrapper>
      <SubscriptionList />
      <S.PageContainer>
        <div onClick={handleTotalFeeClick}>
          <TotalSubscriptionFee />
        </div>
        {Array.isArray(subscriptions) &&
          subscriptions.map((subscription) => (
            <div
              key={subscription.id}
              onClick={() => handleSubscriptionClick(subscription.id)}
            >
              {subscription.name}: {subscription.amount}원
            </div>
          ))}
      </S.PageContainer>
    </S.MainContainer>
  );
};

export default Main;
