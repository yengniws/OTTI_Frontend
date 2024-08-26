import React, { useEffect, useState } from 'react';
import axiosInstance from '../../libs/AxiosInstance';
import * as S from './SubscriptionList.Style';
import { IoAddCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

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
  id: number; // subscription_id
  name: string;
  payment: number;
  memo: string;
  paymentDate: number;
  userId: number;
  ott: Ott;
  createdDate: string;
  modifiedDate: string;
}

interface DDayResponse {
  dday: number;
}

const SubscriptionBox: React.FC<{ subscription: Subscription }> = ({
  subscription,
}) => {
  const navigate = useNavigate();
  const [dday, setDday] = useState<number | null>(null);

  useEffect(() => {
    const fetchDday = async () => {
      try {
        const response = await axiosInstance.get<DDayResponse>(
          `/api/subscription/d-day/${subscription.id}`,
        );
        setDday(response.data.dday);
      } catch (error) {
        console.error('D-Day 정보를 불러오기 중 에러:', error);
      }
    };

    fetchDday();
  }, [subscription.id]);

  const handleClick = () => {
    navigate(`/main/subscriptionDetail/${subscription.id}`);
  };

  return (
    <S.ListContentBox onClick={handleClick}>
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
        <S.ListDDayTxt>
          {dday !== null ? (dday === 0 ? 'D-Day' : `D - ${dday}`) : 'null'}
        </S.ListDDayTxt>
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
        const response = await axiosInstance.get('/api/subscription/user');
        setSubscriptions(response.data);
        //console.log(response.data);
      } catch (error) {
        console.error('구독 정보 불러오기 오류:', error);
      }
    };

    fetchSubscriptions();
  }, []);

  const handleAddOtt = () => {
    navigate('/main/addOttSubscription');
  };

  return (
    <>
      <S.ListContainer>
        <S.ListTitleWrap>
          <S.ListTitle>구독 중인 OTT</S.ListTitle>
          <IoAddCircle size={20} onClick={handleAddOtt} />
        </S.ListTitleWrap>

        {subscriptions.map((subscription) => (
          <SubscriptionBox key={subscription.id} subscription={subscription} />
        ))}
        <S.ButtonWrap>
          <S.AddOttBtn onClick={handleAddOtt}>+ 구독 추가</S.AddOttBtn>
        </S.ButtonWrap>
      </S.ListContainer>
    </>
  );
};

export default SubscriptionList;
