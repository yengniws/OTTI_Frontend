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
        <S.EventTit style={{ color: event.color }}>{event.title}</S.EventTit>
      </S.PopupContent>
    </S.PopupCont>
  );
};

export default Popup;
