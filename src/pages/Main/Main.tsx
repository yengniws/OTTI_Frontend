import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as S from './Main.Style';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';

const Main = () => {
  return (
    <S.MainContainer>
      <S.Header>
        <div>OTTi</div>
      </S.Header>
      <S.BottomNavBarWrapper>
        <BottomNavBar />
      </S.BottomNavBarWrapper>
    </S.MainContainer>
  );
};

export default Main;
