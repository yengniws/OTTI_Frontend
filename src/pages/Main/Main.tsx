import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as S from './Main.Style';
import SubscriptionList from '../../components/ SubscriptionList/ SubscriptionList';

const Main = () => {
  return (
    <S.MainContainer>
      <S.Header>
        <div>OTTi</div>
      </S.Header>
      <SubscriptionList />
    </S.MainContainer>
  );
};

export default Main;
