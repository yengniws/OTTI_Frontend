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
  id: string; // 구독 ID
  name: string; // 구독 이름
  amount: number; // 구독 금액
  dueDate: string; // 결제일
}

// 메인 컴포넌트 정의
const Main: React.FC = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅 호출
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]); // 구독 데이터를 관리하는 상태 변수

  // 총 구독 요금 컴포넌트 클릭 시 실행될 함수 정의
  const handleTotalFeeClick = () => {
    navigate('/subscription-detail'); // 'subscription-detail' 페이지로 이동
  };

  // 메인 컴포넌트의 렌더링 부분
  return (
    <>
      <S.MainContainer>
        <S.Header>
          <S.Logo>OTTi</S.Logo> {/* 로고 표시 */}
          {/* <NotificationPanel /> 알림 패널 (주석처리) */}
        </S.Header>
        <div onClick={handleTotalFeeClick}>
          {' '}
          {/* 총 구독 요금 컴포넌트 클릭 시 이동 */}
          <TotalSubscriptionFee /> {/* 총 구독 요금을 표시하는 컴포넌트 */}
        </div>
        <S.PageContainer>
          {' '}
          {/* 페이지 컨테이너 스타일 컴포넌트 */}
          {/* 구독 목록을 순회하며 각 구독 항목을 표시 */}
          {subscriptions.map((subscription) => (
            <div key={subscription.id}>
              {subscription.name}: {subscription.amount}원{' '}
              {/* 구독 이름과 금액 표시 */}
            </div>
          ))}
        </S.PageContainer>
        <Calendar /> {/* 달력 컴포넌트 렌더링 */}
        <SubscriptionList /> {/* 구독 목록 컴포넌트 렌더링 */}
        <S.BottomNavBarWrapper>
          {' '}
          {/* 하단 내비게이션 바 래퍼 */}
          <BottomNavBar /> {/* 하단 내비게이션 바 컴포넌트 */}
        </S.BottomNavBarWrapper>
      </S.MainContainer>
    </>
  );
};

export default Main; // 메인 컴포넌트 내보내기
