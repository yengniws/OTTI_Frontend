import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewTopBar from '../../../components/TopBar/NewTopBar';
import OttInfo from '../../../components/Community/Join/OttInfo';
import JoinDetails from '../../../components/Community/Join/JoinDetails';
import SendBtn from '../../../components/common/JoinBtn/SendBtn';
import * as S from './JoinPot.Style';

const JoinPot = () => {
  return (
    <S.JoinPotWrap>
      <NewTopBar title="가입하기" />
      <OttInfo
        imageUrl="/path/to/netflix-logo.png"
        name="넷플릭스"
        plan="프리미엄"
        price="5000원"
        paymentDate="매월 2일"
        currentMembers="3명"
      />
      <JoinDetails username="김이박" joinContent="" />
      <SendBtn />
    </S.JoinPotWrap>
  );
};

export default JoinPot;
