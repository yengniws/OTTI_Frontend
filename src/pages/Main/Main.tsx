import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './Main.Style';
import TotalSubscriptionFee from '../../components/totalfee/TotalSubscriptionFee';

interface Subscription {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
}

const Main = () => {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get('/api/subscription');
        setSubscriptions(response.data);
        calculateTotalAmount(response.data);
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      }
    };

    fetchSubscriptions();
  }, []);

  const calculateTotalAmount = (subs: Subscription[]) => {
    const total = subs.reduce((total, sub) => total + sub.amount, 0);
    setTotalAmount(total);
  };

  const handleTotalFeeClick = () => {
    navigate('/subscription-detail', { state: { totalAmount } });
  };

  const handleSubscriptionClick = async (subscriptionId: string) => {
    try {
      // GET방식 API 호출
      const response = await axios.get(`/api/subscription/${subscriptionId}`);
      // 구독 정보
      console.log('Subscription details:', response.data);
    } catch (error) {
      console.error('Error fetching subscription details:', error);
    }
  };

  return (
    <S.MainContainer>
      <S.Header>
        <div>OTTi</div>
      </S.Header>
      <S.PageContainer>
        <div onClick={handleTotalFeeClick}>
          <TotalSubscriptionFee totalAmount={totalAmount} />
        </div>
        {subscriptions.map((subscription) => (
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
