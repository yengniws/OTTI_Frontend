import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as S from './Main.Style';
import Calender from '../../components/Calender/CustomCalender';
import CustomCalendar from '../../components/Calender/CustomCalender';
const Main = () => {
  return (
    <S.MainContainer>
      <S.Header>
        <div>OTTi</div>
      </S.Header>
      {/* <Calender /> */}
      <CustomCalendar />
    </S.MainContainer>
  );
};

export default Main;
