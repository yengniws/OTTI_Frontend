// import React from 'react';
// import * as S from './TotalSubscriptionFee.Style';

// interface TotalSubscriptionFeeProps {
//   totalAmount: number;
// }

// const TotalSubscriptionFee: React.FC<TotalSubscriptionFeeProps> = ({
//   totalAmount,
// }) => {
//   return (
//     <S.TotalFeeContainer>
//       <S.TotalFeeTitle>이번달 총 구독료</S.TotalFeeTitle>
//       <S.TotalFeeAmount>{totalAmount}원</S.TotalFeeAmount>
//     </S.TotalFeeContainer>
//   );
// };

// export default TotalSubscriptionFee;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import * as S from './TotalSubscriptionFee.Style';

// const TotalSubscriptionFee = () => {
//   const [totalAmount, setTotalAmount] = useState<number>(0);

//   useEffect(() => {
//     const fetchTotalAmount = async () => {
//       try {
//         const response = await axios.get('/api/subscription/total'); //총 구독료 api 수정해야함
//         setTotalAmount(response.data.totalAmount);
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

import React, { useState, useEffect } from 'react';
import * as S from './TotalSubscriptionFee.Style';
import { getTotalAmount } from '../../api/subscriptionApi';

const TotalSubscriptionFee = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const amount = await getTotalAmount();
        setTotalAmount(amount);
      } catch (error) {
        console.error('N/A:', error);
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
