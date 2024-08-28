// import React from 'react';
// import * as S from './Popup.Style';
// import moment from 'moment';

// interface IEvent {
//   start: Date;
//   end: Date;
//   title: string;
//   color: string;
// }

// interface PopupProps {
//   event: IEvent;
//   onClose: () => void;
// }

// const Popup = ({ event, onClose }: PopupProps) => {
//   return (
//     <S.PopupCont>
//       <S.PopupContent>
//         <S.CloseBtn onClick={onClose}>X</S.CloseBtn>
//         <S.EventDate>{moment(event.start).format('M/D')}</S.EventDate>
//         <S.EventTitWrapper>
//           <S.ColorDot style={{ backgroundColor: event.color }} />
//           <S.EventTit>{event.title}</S.EventTit>
//           <S.EventSubtitle>결제일</S.EventSubtitle>
//         </S.EventTitWrapper>
//       </S.PopupContent>
//     </S.PopupCont>
//   );
// };

// export default Popup;

// import React, { useEffect, useState } from 'react';
// import * as S from './Popup.Style';
// import moment from 'moment';
// import axios from 'axios';

// interface IEvent {
//   start: Date;
//   end: Date;
//   title: string;
//   color: string;
// }

// interface PopupProps {
//   event: IEvent;
//   onClose: () => void;
//   id: number; // subscriptionId를 Props로 받음
// }

// interface Subscription {
//   name: string;
// }

// const Popup = ({ event, onClose, id }: PopupProps) => {
//   const [subscription, setSubscription] = useState<Subscription | null>(null);

//   useEffect(() => {
//     const fetchSubscription = async () => {
//       console.log('Fetching subscription for ID:', id);
//       try {
//         const response = await axios.get<Subscription>(
//           `/api/subscription/${id}`,
//         );
//         console.log('API Response:', response.data);
//         setSubscription(response.data);
//       } catch (error) {
//         console.error('Error fetching subscription:', error);
//       }
//     };

//     fetchSubscription();
//   }, [id]);

//   return (
//     <S.PopupCont>
//       <S.PopupContent>
//         <S.CloseBtn onClick={onClose}>X</S.CloseBtn>
//         <S.EventDate>{moment(event.start).format('M/D')}</S.EventDate>
//         <S.EventTitWrapper>
//           <S.ColorDot style={{ backgroundColor: event.color }} />
//           <S.EventTit>
//             {subscription ? `${subscription.name} 결제일` : 'Loading...'}
//           </S.EventTit>
//         </S.EventTitWrapper>
//       </S.PopupContent>
//     </S.PopupCont>
//   );
// };

// export default Popup;

import React, { useEffect, useState } from 'react';
import * as S from './Popup.Style';
import moment from 'moment';
import axios from 'axios';

interface IEvent {
  start: Date;
  end: Date;
  title: string;
  color: string;
}

interface PopupProps {
  event: IEvent;
  onClose: () => void;
  id: number; // subscriptionId를 Props로 받음
}

interface Subscription {
  id: number; // 구독 ID 추가
  name: string;
}

const Popup = ({ event, onClose, id }: PopupProps) => {
  const [subscriptionName, setSubscriptionName] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      console.log('Fetching subscriptions for user');
      try {
        const response = await axios.get<{ data: Subscription[] }>(
          '/api/subscription/user',
          {
            // 필요시 헤더 설정
            headers: {
              'Content-Type': 'application/json',
              // 'Authorization': `Bearer ${your_token}` // 인증이 필요하다면 추가
            },
          },
        );

        // 응답의 데이터 확인
        console.log('Full API Response:', response);

        const subscriptions = response.data.data; // 데이터 접근 부분

        if (!subscriptions) {
          console.error('No subscription data found.');
          return;
        }

        const subscription = subscriptions.find((sub) => sub.id === id);

        if (subscription) {
          console.log('Fetched subscription name:', subscription.name);
          setSubscriptionName(subscription.name);
        } else {
          console.warn('No subscription found for the given ID.');
          setSubscriptionName(null);
        }
      } catch (error) {
        console.error('Error fetching subscription:', error);
      }
    };

    fetchSubscriptions();
  }, [id]);

  return (
    <S.PopupCont>
      <S.PopupContent>
        <S.CloseBtn onClick={onClose}>X</S.CloseBtn>
        <S.EventDate>{moment(event.start).format('M/D')}</S.EventDate>
        <S.EventTitWrapper>
          <S.ColorDot style={{ backgroundColor: event.color }} />
          <S.EventTit>
            {subscriptionName ? `${subscriptionName} 결제일` : 'Loading...'}
          </S.EventTit>
        </S.EventTitWrapper>
      </S.PopupContent>
    </S.PopupCont>
  );
};

export default Popup;
