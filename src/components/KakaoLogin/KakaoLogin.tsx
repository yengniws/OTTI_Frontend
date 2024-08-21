import React from 'react';
import { Link } from 'react-router-dom';

const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;

const KakaoLogin: React.FC = () => {
  return (
    <Link to={kakaoURL}>
      <img
        src="../../assets/img/kakao-login-medium-wide.png"
        alt="Kakao 로그인"
      />
    </Link>
  );
};

export default KakaoLogin;
