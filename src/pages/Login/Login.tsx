import React from 'react';
import * as S from './Login.Style';
import KakaoLogin from '../../components/KakaoLogin/KakaoLogin';

const Login: React.FC = () => {
  return (
    <S.LoginContainer>
      <S.WelcomeText>반가워요!</S.WelcomeText>
      <S.LoginButtonContainer>
        <KakaoLogin />
      </S.LoginButtonContainer>
    </S.LoginContainer>
  );
};

export default Login;
