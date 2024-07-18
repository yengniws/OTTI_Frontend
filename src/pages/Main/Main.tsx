// import React, { useState } from 'react';
// import * as S from './Main.Style';
// import TotalSubscriptionFee from '../../components/totalfee/TotalSubscriptionFee';

// const Main: React.FC = () => {
//   const [subscriptions, setSubscriptions] = useState([
//     { name: 'Netflix', amount: 9500, dueDate: '2024-07-01' },
//     { name: 'Disney+', amount: 7900, dueDate: '2024-07-10' },
//     { name: 'Wavve', amount: 10900, dueDate: '2024-07-20' },
//   ]);

//   const totalAmount = subscriptions.reduce(
//     (total: number, sub) => total + sub.amount,
//     0,
//   );

//   return (
//     <S.MainContainer>
//       <S.Header>
//         <div>OTTi</div>
//       </S.Header>
//       <S.PageContainer>
//         <TotalSubscriptionFee totalAmount={totalAmount} />
//       </S.PageContainer>
//     </S.MainContainer>
//   );
// };

// export default Main;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import * as S from './Main.Style';
// import TotalSubscriptionFee from '../../components/totalfee/TotalSubscriptionFee';

// const Main: React.FC = () => {
//   const navigate = useNavigate();
//   const [subscriptions, setSubscriptions] = useState([
//     { name: 'Netflix', amount: 9500, dueDate: '2024-07-01' },
//     { name: 'Disney+', amount: 7900, dueDate: '2024-07-10' },
//     { name: 'Wavve', amount: 10900, dueDate: '2024-07-20' },
//   ]);

//   const totalAmount = subscriptions.reduce(
//     (total, sub) => total + sub.amount,
//     0,
//   );

//   const handleTotalFeeClick = () => {
//     navigate('/subscription-detail', { state: { totalAmount } });
//   };

//   return (
//     <S.MainContainer>
//       <S.Header>
//         <div>OTTi</div>
//       </S.Header>
//       <S.PageContainer>
//         <div onClick={handleTotalFeeClick}>
//           <TotalSubscriptionFee totalAmount={totalAmount} />
//         </div>
//       </S.PageContainer>
//     </S.MainContainer>
//   );
// };

// export default Main;

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
        <div>OTTi</div>
      </S.Header>
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
