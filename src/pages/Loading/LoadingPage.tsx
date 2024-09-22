import React from 'react';
import ottiLogo from '../../assets/img/OTTi_loading.png'; // "OTTi" 로고 이미지
import iconLogo from '../../assets/img/OTTI.png'; // 아이콘 이미지
import * as S from './LoadingPage.Style';

const LoadingPage: React.FC = () => {
  return (
    <S.LoadingContainer>
      <S.LogoContainer>
        <S.OttiLogo src={ottiLogo} alt="OTTi Logo" />
        <S.IconLogo src={iconLogo} alt="Icon" />
      </S.LogoContainer>
    </S.LoadingContainer>
  );
};

export default LoadingPage;
