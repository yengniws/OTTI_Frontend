import React from 'react';
import kakaoLoginImage from '../../assets/img/kakao-login-medium-wide.png'; // 이미지 파일을 import

const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;

const KakaoLogin: React.FC = () => {
  return (
    <a href={kakaoURL}>
      <img src={kakaoLoginImage} alt="Kakao 로그인" />
    </a>
  );
};

export default KakaoLogin;
