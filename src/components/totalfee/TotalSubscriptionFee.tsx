// api 활용 - 1: 총 구독료 api 활용
// import React, { useState, useEffect } from 'react';
// import * as S from './TotalSubscriptionFee.Style';
// import { getTotalAmount } from '../../api/subscriptionApi';

// const TotalSubscriptionFee = () => {
//   const [totalAmount, setTotalAmount] = useState<number>(0);

//   useEffect(() => {
//     const fetchTotalAmount = async () => {
//       try {
//         const amount = await getTotalAmount();
//         setTotalAmount(amount);
//       } catch (error) {
//         console.error('N/A:', error);
//       }
//     };

//     fetchTotalAmount();
//   }, []);

//   return (
//     <S.TotalFeeContainer>
//       <S.TotalFeeTitle>이번달 총 구독료</S.TotalFeeTitle>
//       <S.TotalFeeAmount>{totalAmount}원</S.TotalFeeAmount>
//     </S.TotalFeeContainer>
//   );
// };

// export default TotalSubscriptionFee;

// api 활용 - 2: 구독료 정보 끌어와서 더하기
// import React, { useState, useEffect } from 'react';
// import * as S from './TotalSubscriptionFee.Style';
// import { getUserSubscription } from '../../api/subscriptionApi';

// const TotalSubscriptionFee = () => {
//   const [totalAmount, setTotalAmount] = useState<number>(0);

//   useEffect(() => {
//     const fetchTotalAmount = async () => {
//       try {
//         const userId = localStorage.getItem('userId');
//         if (userId) {
//           const subscriptions = await getUserSubscription(Number(userId));
//           // 구독료 총 합산 계산
//           const total = subscriptions.reduce(
//             (acc: number, subscription: any) => acc + subscription.payment,
//             0,
//           );
//           setTotalAmount(total);
//         }
//       } catch (error) {
//         console.error('Error fetching total amount:', error);
//       }
//     };

//     fetchTotalAmount();
//   }, []);

//   return (
//     <S.TotalFeeContainer>
//       <S.TotalFeeTitle>이번달 총 구독료</S.TotalFeeTitle>
//       <S.TotalFeeAmount>{totalAmount}원</S.TotalFeeAmount>
//     </S.TotalFeeContainer>
//   );
// };

// export default TotalSubscriptionFee;

import React, { useState, useEffect } from 'react';
import * as S from './TotalSubscriptionFee.Style';
import { getUserSubscription } from '../../api/subscriptionApi';

interface Subscription {
  payment: number;
}

const TotalSubscriptionFee: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (userId) {
          const subscriptions: Subscription[] = await getUserSubscription(
            Number(userId),
          );
          const total = subscriptions.reduce(
            (acc, subscription) => acc + subscription.payment,
            0,
          );
          setTotalAmount(total);
        }
      } catch (error) {
        console.error('Error fetching total amount:', error);
      }
    };

    fetchTotalAmount();
  }, []);

  return (
    <S.TotalFeeContainer>
      <S.TotalFeeTitle>이번달 총 구독료</S.TotalFeeTitle>
      <S.TotalFeeAmount>{totalAmount}원</S.TotalFeeAmount>
    </S.TotalFeeContainer>
  );
};

export default TotalSubscriptionFee;
