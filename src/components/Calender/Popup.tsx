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
  id: number; // id를 추가
}

interface PopupProps {
  event: IEvent;
  onClose: () => void;
  id: number; // subscriptionId를 Props로 받음
}

interface Subscription {
  name: string;
}

const Popup = ({ event, onClose, id }: PopupProps) => {
  const [subscriptionName, setSubscriptionName] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubscription = async () => {
      console.log('Fetching subscription for ID:', id);
      try {
        const response = await axios.get<Subscription>(
          `/api/subscription/${id}`,
        );
        console.log('API Response:', response.data);
        setSubscriptionName(response.data.name);
      } catch (error) {
        console.error('Error fetching subscription:', error);
      }
    };

    fetchSubscription();
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
