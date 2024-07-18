import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as S from './Main.Style';
import Calender from '../../components/Calender/Calender';
const Main = () => {
  return (
    <S.MainContainer>
      <S.Header>
        <div>OTTi</div>
      </S.Header>
      <Calender />
    </S.MainContainer>
  );
};

export default Main;
