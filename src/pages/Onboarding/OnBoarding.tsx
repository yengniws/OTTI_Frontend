import React from 'react';
import * as S from './OnBoarding.Style';
import logo from '../../assets/img/OTTI.png';

const Onboarding: React.FC = () => {
  return (
    <S.OnboardingContainer>
      <S.Logo src={logo} alt="OTTi Logo" />
      <S.Title>OTTi</S.Title>
    </S.OnboardingContainer>
  );
};

export default Onboarding;
