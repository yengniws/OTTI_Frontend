import React from 'react';
import * as S from './Main.Style';
import Calendar from '../../components/Calender/Calender';

const Main = () => {
  return (
    <S.MainContainer>
      <S.Header>
        <div>OTTi</div>
      </S.Header>
      <Calendar />
    </S.MainContainer>
  );
};

export default Main;
