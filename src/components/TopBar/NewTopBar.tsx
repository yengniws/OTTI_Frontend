import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './NewTopBar.Style';
interface TopBarProps {
  title: string;
}

const TopBar: React.FC<TopBarProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <S.TopBarContainer>
      <S.BackButton onClick={handleBack}>&lt;</S.BackButton>
      <S.Title>{title}</S.Title>
    </S.TopBarContainer>
  );
};

export default TopBar;
