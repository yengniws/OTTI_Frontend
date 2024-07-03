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
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Main.Style';
import TotalSubscriptionFee from '../../components/totalfee/TotalSubscriptionFee';

const Main: React.FC = () => {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState([
    { name: 'Netflix', amount: 9500, dueDate: '2024-07-01' },
    { name: 'Disney+', amount: 7900, dueDate: '2024-07-10' },
    { name: 'Wavve', amount: 10900, dueDate: '2024-07-20' },
  ]);

  const totalAmount = subscriptions.reduce(
    (total, sub) => total + sub.amount,
    0,
  );

  const handleTotalFeeClick = () => {
    navigate('/subscription-detail', { state: { totalAmount } });
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
      </S.PageContainer>
    </S.MainContainer>
  );
};

export default Main;
