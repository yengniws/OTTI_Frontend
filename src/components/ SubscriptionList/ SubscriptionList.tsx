// src/SubscriptionList.tsx
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../libs/AxiosInstance'; // 수정된 axios 인스턴스를 가져옴
import * as S from './SubscriptionList.Style';
import { IoAddCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface Ott {
  id: number;
  name: string;
  ratePlan: string;
  price: number;
  ott_image: string;
  createdDate: string;
  modifiedDate: string;
}

interface Subscription {
  subscription_id: number;
  name: string;
  payment: number;
  memo: string;
  payment_date: string;
  user_id: number;
  ott: Ott;
  createdDate: string;
  modifiedDate: string;
  d_day: string;
}

const SubscriptionBox: React.FC<{ subscription: Subscription }> = ({
  subscription,
}) => {
  return (
    <S.ListContentBox>
      <S.ListImageWrap>
        <S.ListImage
          src={subscription.ott.ott_image}
          alt={`${subscription.ott.name} logo`}
        />
      </S.ListImageWrap>
      <S.ListTxtBox>
        <S.ListTxtTitle>{subscription.name}</S.ListTxtTitle>
        <S.ListTxts>{subscription.ott.ratePlan} 요금제</S.ListTxts>
        <S.ListTxts>{subscription.payment}원</S.ListTxts>
      </S.ListTxtBox>
      <S.ListDDayContainer>
        <S.ListDDayTxt>D - {subscription.d_day}</S.ListDDayTxt>
      </S.ListDDayContainer>
    </S.ListContentBox>
  );
};

const SubscriptionList: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axiosInstance.get('/api/subscription');
        setSubscriptions(response.data);
      } catch (error) {
        console.error('구독 정보 불러오기 오류:', error);
      }
    };

    fetchSubscriptions();
  }, []);

  const handleAddOtt = () => {
    navigate('/'); // 이동 경로 추후 수정 필요
  };

  return (
    <>
      <S.ListContainer>
        <S.ListTitleWrap>
          <S.ListTitle>구독 중인 OTT</S.ListTitle>
          <IoAddCircle />
        </S.ListTitleWrap>

        {subscriptions.map((subscription) => (
          <SubscriptionBox
            key={subscription.subscription_id}
            subscription={subscription}
          />
        ))}
        <S.AddOttBtn onClick={handleAddOtt}>+ 구독 추가</S.AddOttBtn>
        {/* 이동하는 링크 추가하기 */}
      </S.ListContainer>
    </>
  );
};

export default SubscriptionList;
