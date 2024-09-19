import React from 'react';
import * as S from './Popup.Style';
import moment from 'moment';

interface IEvent {
  start: Date;
  end: Date;
  title: string;
  color: string;
  id: number;
  ottName: string;
}

interface PopupProps {
  event: IEvent;
  onClose: () => void;
}

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
