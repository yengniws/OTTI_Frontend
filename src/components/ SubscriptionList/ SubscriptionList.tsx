// src/SubscriptionList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './ SubscriptionList.Style';
import { IoAddCircle } from 'react-icons/io5';
import { Navigate, useNavigate } from 'react-router-dom';

interface Ott {
  id: number;
  name: string;
  ratePlan: string;
  price: number;
  image: string;
  createdDate: string;
  modifiedDate: string;
}

interface Subscription {
  id: number;
  name: string;
  payment: number;
  memo: string;
  paymentDate: string;
  userId: number;
  ott: Ott;
  createdDate: string;
  modifiedDate: string;
}

const SubscriptionBox: React.FC<{ subscription: Subscription }> = ({
  subscription,
}) => {
  return (
    <S.ListContentBox>
      <S.ListImageWrap>
        <S.ListImage
          src={subscription.ott.image}
          alt={`${subscription.ott.name} logo`}
        />
      </S.ListImageWrap>
      <S.ListTxtBox>
        <S.ListTxtTitle>{subscription.name}</S.ListTxtTitle>
        <S.ListTxts>{subscription.ott.ratePlan} 요금제</S.ListTxts>
        <S.ListTxts>{subscription.payment}원</S.ListTxts>
      </S.ListTxtBox>
      <S.ListDDayContainer>
        <S.ListDDayTxt>D - 1</S.ListDDayTxt>
      </S.ListDDayContainer>
      {/*디데이 계산 어케함 아놔 */}
    </S.ListContentBox>
  );
};
const SubscriptionList: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get('http://localhost:3001/subscriptions'); // 백엔드 API 엔드포인트로 수정, 일단은 가상 json 파일로 대체하여 테스트
        setSubscriptions(response.data);
      } catch (error) {
        console.error('구독 정보 불러오기 오류:', error);
      }
    };

    fetchSubscriptions();
  }, []);

  const handleAddOtt = () => {
    navigate('/'); //이동 경로 추후 수정 필요
  };

  return (
    <>
      <S.ListContainer>
        <S.ListTitleWrap>
          <S.ListTitle>구독 중인 OTT</S.ListTitle>
          <IoAddCircle />
        </S.ListTitleWrap>

        {subscriptions.map((subscription) => (
          <SubscriptionBox key={subscription.id} subscription={subscription} />
        ))}
        <S.AddOttBtn onClick={handleAddOtt}>+ 구독 추가</S.AddOttBtn>
        {/* 이동하는 링크 추가하기 */}
      </S.ListContainer>
    </>
  );
};

export default SubscriptionList;
