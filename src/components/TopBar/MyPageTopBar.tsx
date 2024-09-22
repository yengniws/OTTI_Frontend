import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MyPageTopBar.Style';
interface TopBarProps {
  title: string;
}

const TopBar: React.FC<TopBarProps> = ({ title }) => {
  return (
    <S.TopBarContainer>
      <S.Title>{title}</S.Title>
    </S.TopBarContainer>
  );
};

export default TopBar;
