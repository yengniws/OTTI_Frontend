// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import * as S from './Main.Style';
// import TotalSubscriptionFee from '../../components/TotalFee/TotalSubscriptionFee';
// import NotificationPanel from '../../components/Notification/NotificationPanel';
// import BottomNavBar from '../../components/BottomBar/BottomNavBar';
// import SubscriptionList from '../../components/SubscriptionList/SubscriptionList';
// import Calendar from '../../components/Calender/Calender';

// interface Subscription {
//   id: string;
//   name: string;
//   amount: number;
//   dueDate: string;
// }

// const Main: React.FC = () => {
//   const navigate = useNavigate();
//   const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

//   useEffect(() => {
//     const fetchSubscriptions = async () => {
//       try {
//         const response = await axios.get('/api/subscription/user');
//         const data = response.data;

//         if (Array.isArray(data)) {
//           setSubscriptions(data);
//         } else if (typeof data === 'object' && data !== null) {
//           setSubscriptions(Object.values(data));
//         } else {
//           console.error('Unexpected data structure:', data);
//           setSubscriptions([]);
//         }
//       } catch (error) {
//         console.error('Error fetching subscriptions:', error);
//         setSubscriptions([]);
//       }
//     };

//     fetchSubscriptions();
//   }, []);

//   const handleTotalFeeClick = () => {
//     navigate('/subscription-detail');
//   };

//   const handleSubscriptionClick = async (subscriptionId: string) => {
//     try {
//       const response = await axios.get(`/api/subscription/${subscriptionId}`);
//       console.log('Subscription details:', response.data);
//     } catch (error) {
//       console.error('Error fetching subscription details:', error);
//     }
//   };

//   return (
//     <>
//       <S.MainContainer>
//         <S.Header>
//           <S.Logo>OTTi</S.Logo>
//           {/* <NotificationPanel /> */}
//         </S.Header>
//         <div onClick={handleTotalFeeClick}>
//           <TotalSubscriptionFee />
//         </div>

//         <S.PageContainer>
//           {subscriptions.map((subscription) => (
//             <div
//               key={subscription.id}
//               onClick={() => handleSubscriptionClick(subscription.id)}
//             >
//               {subscription.name}: {subscription.amount}원
//             </div>
//           ))}
//         </S.PageContainer>

//         <Calendar />
//         <SubscriptionList />
//         <S.BottomNavBarWrapper>
//           <BottomNavBar />
//         </S.BottomNavBarWrapper>
//       </S.MainContainer>
//     </>
//   );
// };

// export default Main;

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
        {' '}
        {/* 메인 컨테이너 스타일 컴포넌트 */}
        <S.Header>
          {' '}
          {/* 헤더 섹션 */}
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
