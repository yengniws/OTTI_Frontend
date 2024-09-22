import React from 'react';
import * as S from './BottomNavBar.Style';
import { IoHomeOutline } from 'react-icons/io5';
import { AiOutlineMessage } from 'react-icons/ai';
import { PiPottedPlant } from 'react-icons/pi';
import { GoPerson } from 'react-icons/go';

const BottomNavBar: React.FC = () => {
  return (
    <S.BottomNavBarContainer>
      <S.BottomList>
        <S.BottomItem>
          <S.NavLink to="/main">
            <S.BottomIcon>
              <IoHomeOutline size={33} />
            </S.BottomIcon>
            <S.BottomTxt>홈</S.BottomTxt>
          </S.NavLink>
        </S.BottomItem>
        <S.BottomItem>
          <S.NavLink to="/community">
            <S.BottomIcon>
              <AiOutlineMessage size={33} />
            </S.BottomIcon>
            <S.BottomTxt>커뮤니티</S.BottomTxt>
          </S.NavLink>
        </S.BottomItem>
        <S.BottomItem>
          <S.NavLink to="/MyPotList">
            <S.BottomIcon>
              <PiPottedPlant size={33} />
            </S.BottomIcon>
            <S.BottomTxt>내 팟</S.BottomTxt>
          </S.NavLink>
        </S.BottomItem>
        <S.BottomItem>
          <S.NavLink to="/myPage">
            <S.BottomIcon>
              <GoPerson size={33} />
            </S.BottomIcon>
            <S.BottomTxt>프로필</S.BottomTxt>
          </S.NavLink>
        </S.BottomItem>
      </S.BottomList>
    </S.BottomNavBarContainer>
  );
};

export default BottomNavBar;
