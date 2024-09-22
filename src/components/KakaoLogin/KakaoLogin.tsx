import React from 'react';
import kakaoLoginImage from '../../assets/img/kakao-login-medium-wide.png';

const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;

const KakaoLogin: React.FC = () => {
  return (
    <a href={kakaoURL}>
      <img src={kakaoLoginImage} alt="Kakao 로그인" />
    </a>
  );
};

export default KakaoLogin;

// 1. 로그인 버튼을 누른다.(KakaoLogin.tsx) (클릭하면 kakaoAuthUrl로 가게 설정)
// 2. KakaoAuthUrl에서 로그인 처리가 되고, RedirectUri로 자동으로 넘어간다.(카카오 서버)
// 3. RedirectUri에서 인가코드를 추출한다(프론트). (RedirectHandler.tsx)
// 4. 이 인가코드를 api에 파싱해서 백엔드로 넘겨준다(post 방식, 본문에 담아 전송).(RedirectHandler.tsx)
// 5. 백엔드에서는 이 인가코드를 받아서 jwt 토큰을 프론트로 넘겨준다.
// 6. 로그인에 성공하면 지정한 경로로 이동한다. (실패 시 /oauth 경로에서 멈춤)
