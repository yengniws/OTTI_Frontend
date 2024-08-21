import React from 'react';
import * as S from './OnBoarding.Style';
import logo from '../../assets/img/OTTI.png';
import KakaoLogin from '../../components/KakaoLogin';

const Onboarding: React.FC = () => {
  return (
    <S.OnboardingContainer>
      <S.Logo src={logo} alt="OTTi Logo" />
      <S.Title>OTTi</S.Title>
      <KakaoLogin />
    </S.OnboardingContainer>
  );
};

export default Onboarding;
