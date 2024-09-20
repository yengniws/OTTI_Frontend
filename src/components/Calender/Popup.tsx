import React from 'react';
import * as S from './Popup.Style';
import moment from 'moment';

// 이벤트 데이터 구조 정의
interface IEvent {
  start: Date;
  end: Date;
  title: string;
  color: string;
  id: number;
  ottName: string;
}

// Popup 컴포넌트의 프로퍼티 타입 정의
interface PopupProps {
  event: IEvent; // 표시할 이벤트 데이터
  onClose: () => void; // 팝업창 닫기
}

// Popup 컴포넌트 정의
const Popup = ({ event, onClose }: PopupProps) => {
  return (
    <S.PopupCont>
      <S.PopupContent>
        <S.Title>
          <S.CloseBtn onClick={onClose}>X</S.CloseBtn>
          <S.EventDate>{moment(event.start).format('M/D')}</S.EventDate>
        </S.Title>
        <S.EventTitWrapper>
          <S.ColorDot style={{ backgroundColor: event.color }} />
          <S.EventTit>{`${event.ottName} 결제일`}</S.EventTit>
        </S.EventTitWrapper>
      </S.PopupContent>
    </S.PopupCont>
  );
};

export default Popup;
