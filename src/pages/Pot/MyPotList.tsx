import React from 'react';
import * as S from './MyPotList.Style';
import MyPageTopBar from '../../components/topbar/MyPageTopBar';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import ActionButton from '../../components/common/ActionButton';
import { useNavigate } from 'react-router-dom';

const MyPotList = () => {
  const navigate = useNavigate();

  return (
    <S.MyPotListContainer>
      <S.TitleWrapper>
        <MyPageTopBar title="내 POT" />
      </S.TitleWrapper>

      <S.PotList>
        <S.PotItem>
          <S.IconWrapper>
            <S.Icon src="/path-to-netflix-icon.png" alt="넷플릭스" />
          </S.IconWrapper>
          <S.PotName>넷플릭스</S.PotName>
          <S.Arrow> &gt; </S.Arrow>
        </S.PotItem>

        <S.PotItem>
          <S.IconWrapper>
            <S.Icon src="/path-to-tving-icon.png" alt="티빙" />
          </S.IconWrapper>
          <S.PotName>티빙</S.PotName>
          <S.Arrow> &gt; </S.Arrow>
        </S.PotItem>
      </S.PotList>

      <ActionButton text="팟 만들기" onClick={() => navigate('/main')} />

      <S.BottomNavBarWrapper>
        <BottomNavBar />
      </S.BottomNavBarWrapper>
    </S.MyPotListContainer>
  );
};

export default MyPotList;
