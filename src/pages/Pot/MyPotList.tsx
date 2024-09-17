import React from 'react';
import * as S from './MyPotList.Style';
import MyPageTopBar from '../../components/topbar/MyPageTopBar';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import ActionButton from '../../components/common/ActionButton';
import { useNavigate } from 'react-router-dom';

const MyPotList = () => {
  const navigate = useNavigate();

  // 더미 데이터 배열
  const potListData = [
    { id: 1, name: '넷플릭스', icon: '/path-to-netflix-icon.png' },
    { id: 2, name: '티빙', icon: '/path-to-tving-icon.png' },
  ];

  return (
    <S.MyPotListContainer>
      <S.TitleWrapper>
        <MyPageTopBar title="내 POT" />
      </S.TitleWrapper>

      <S.PotList>
        {potListData.map((pot) => (
          <S.PotItem key={pot.id}>
            <S.IconWrapper>
              <S.Icon src={pot.icon} alt={pot.name} />
            </S.IconWrapper>
            <S.PotName>{pot.name}</S.PotName>
            <S.Arrow> &gt; </S.Arrow>
          </S.PotItem>
        ))}
      </S.PotList>

      <ActionButton text="팟 만들기" onClick={() => navigate('/MakePot')} />

      <S.BottomNavBarWrapper>
        <BottomNavBar />
      </S.BottomNavBarWrapper>
    </S.MyPotListContainer>
  );
};

export default MyPotList;
