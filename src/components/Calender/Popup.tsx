import React from 'react';
import * as S from './Popup.Style';
import moment from 'moment';

interface IEvent {
  start: Date;
  end: Date;
  title: string;
  color: string;
}

interface PopupProps {
  event: IEvent;
  onClose: () => void;
}

const Popup = ({ event, onClose }: PopupProps) => {
  return (
    <S.PopupCont>
      <S.PopupContent>
        <S.CloseBtn onClick={onClose}>X</S.CloseBtn>
        <S.EventDate>{moment(event.start).format('M/D')}</S.EventDate>
        <S.EventTitWrapper>
          <S.ColorDot style={{ backgroundColor: event.color }} />
          <S.EventTit>{event.title}</S.EventTit>
          <S.EventSubtitle>결제일</S.EventSubtitle>
        </S.EventTitWrapper>
      </S.PopupContent>
    </S.PopupCont>
  );
};

export default Popup;

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
//   day: Date;
//   events: IEvent[];
//   onClose: () => void;
// }

// const Popup = ({ day, events, onClose }: PopupProps) => {
//   return (
//     <S.PopupCont>
//       <S.PopupContent>
//         <S.CloseBtn onClick={onClose}>X</S.CloseBtn>
//         <S.EventDate>{moment(day).format('M/D')}</S.EventDate>
//         {events.map((event, index) => (
//           <div key={index}>
//             <S.EventTitWrapper>
//               <S.ColorDot style={{ backgroundColor: event.color }} />
//               <S.EventTit>{event.title}</S.EventTit>
//               <S.EventSubtitle>결제일</S.EventSubtitle>
//             </S.EventTitWrapper>
//           </div>
//         ))}
//       </S.PopupContent>
//     </S.PopupCont>
//   );
// };

// export default Popup;
