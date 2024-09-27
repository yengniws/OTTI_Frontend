import React, { useEffect, useState } from 'react';
import axiosInstance from '../../libs/AxiosInstance';
import * as S from './SubscriptionList.Style';
import { IoAddCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

// OTT 정보 타입
interface Ott {
  id: number;
  name: string;
  ratePlan: string;
  price: number;
  image: string;
  createdDate: string;
  modifiedDate: string;
}

// 구독 정보 타입
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

// D-Day 응답 타입
interface DDayResponse {
  dday: number;
}

// 개별 구독 박스 컴포넌트
const SubscriptionBox: React.FC<{ subscription: Subscription }> = ({
  subscription,
}) => {
  const navigate = useNavigate();
  const [dday, setDday] = useState<number | null>(null);

  // 구독 ID에 따른 D-Day 정보를 가져옴
  useEffect(() => {
    const fetchDday = async () => {
      try {
        // D-Day API 호출
        const response = await axiosInstance.get<DDayResponse>(
          `/api/subscription/d-day/${subscription.id}`,
        );
        setDday(response.data.dday); // D-Day 값을 상태로 설정함
      } catch (error) {
        console.error('D-Day 정보를 불러오기 중 에러:', error);
      }
    };

    fetchDday();
  }, [subscription.id]); // 구독 ID가 변경될 때마다 다시 호출됨

  // 특정 구독 박스 클릭 시 해당하는 아이디의 상세 페이지로 이동
  const handleClick = () => {
    navigate(`/main/subscriptionDetail/${subscription.id}`);
  };

  // 구독 정보와 D-Day를 보여주는 UI
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
          {/* day가 0인 경우 D-Day 반환, 0이 아닌 경우 D - ${dday} 반환, null인
          경우 null 반환 */}
        </S.ListDDayTxt>
      </S.ListDDayContainer>
    </S.ListContentBox>
  );
};

// 구독 리스트 컴포넌트
const SubscriptionList: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]); // 구독 리스트 상태 관리
  const navigate = useNavigate();

  // 컴포넌트 마운트 시 구독 정보를 API에서 가져오는 로직
  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axiosInstance.get('/api/subscription/user'); // 구독 리스트 API 호출
        setSubscriptions(response.data); // 가져온 데이터를 상태로 저장
      } catch (error) {
        console.error('구독 정보 불러오기 오류:', error);
      }
    };

    fetchSubscriptions();
  }, []);

  // 구독 추가 버튼 클릭 시 OTT 추가 페이지로 이동
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
