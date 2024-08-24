import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './Main.Style';
import TotalSubscriptionFee from '../../components/totalfee/TotalSubscriptionFee';
import NotificationPanel from '../../components/Notification/NotificationPanel';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import SubscriptionList from '../../components/SubscriptionList/SubscriptionList';
import Calendar from '../../components/Calender/Calender';

interface Subscription {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
}

const Main: React.FC = () => {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get('/api/subscription');
        const data = response.data;

        if (Array.isArray(data)) {
          setSubscriptions(data);
        } else if (typeof data === 'object' && data !== null) {
          setSubscriptions(Object.values(data));
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
    } catch (error) {
      console.error('Error fetching subscription details:', error);
    }
  };

  return (
    <>
      <S.MainContainer>
        <S.Header>
          <S.Logo>OTTi</S.Logo>
          <NotificationPanel />
        </S.Header>
        <div onClick={handleTotalFeeClick}>
          <TotalSubscriptionFee />
        </div>

        <S.PageContainer>
          {subscriptions.map((subscription) => (
            <div
              key={subscription.id}
              onClick={() => handleSubscriptionClick(subscription.id)}
            >
              {subscription.name}: {subscription.amount}원
            </div>
          ))}
        </S.PageContainer>

        <Calendar />
        <SubscriptionList />
        <S.BottomNavBarWrapper>
          <BottomNavBar />
        </S.BottomNavBarWrapper>
      </S.MainContainer>
    </>
  );
};

export default Main;
