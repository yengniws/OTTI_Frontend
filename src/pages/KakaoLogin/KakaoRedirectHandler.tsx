//인가 코드 프론트에서 추출하는 로직
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../libs/AxiosInstance';
import LoadingPage from '../Loading/LoadingPage';

const RedirectHandler: React.FC = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code'); // 인가 코드 추출

  useEffect(() => {
    if (code) {
      // console.log(code);
      // Step 1: 인가 코드를 이용해 백엔드에서 카카오 액세스 토큰 요청 (GET 방식)
      axiosInstance

        .get('/api/oauth/kakao', { params: { code } }) //인가 코드 보내기
        .then((response) => {
          const kakaoToken = response.data.accessToken; // 백엔드에서 받은 카카오 토큰
          // console.log('카카오 토큰:', kakaoToken);
          // console.log(response.data);

          // Step 2: 카카오 액세스 토큰을 이용해 백엔드에서 JWT 토큰을 요청 (Post)
          return axiosInstance.post('/api/oauth/login', { kakaoToken });
        })
        .then((response) => {
          const data = response.data;

          // 서버로부터 받은 액세스 토큰을 로컬 스토리지에 저장
          localStorage.setItem('access_token', data.access_token); // 백엔드 서버 액세스 토큰
          // console.log(response.data);
          // localStorage.setItem('refresh_token', data.refreshToken);
          // console.log('성공');
          // console.log(response.data);
          navigate('/main'); // 로그인 성공 후 홈 페이지로 리다이렉트
        })
        .catch((error) => {
          console.error('로그인 실패', error);
        });
    } else {
      console.error('인가 코드를 찾을 수 없음');
    }
  }, [code, navigate]);

  return <LoadingPage />;
};

export default RedirectHandler;

//인가 코드 없는 로직
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../libs/AxiosInstance';

// const KakaoRedirectHandler: React.FC = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Step 1: 백엔드로 카카오 토큰을 요청
//     axiosInstance
//       .get('/api/oauth/kakao')
//       .then((response) => {
//         const kakaoToken = response.data.accessToken; // 백엔드에서 받은 카카오 토큰
//         console.log('카카오 토큰:', kakaoToken);
//         console.log(response.data);

//         // Step 2: 카카오 액세스 토큰을 이용해 백엔드에서 JWT 토큰을 요청 (POST)
//         return axiosInstance.post('/api/oauth/login', { kakaoToken });
//       })
//       .then((response) => {
//         const data = response.data;

//         // 서버로부터 받은 액세스 토큰을 로컬 스토리지에 저장
//         localStorage.setItem('access_token', data.accessToken); // 백엔드 서버 액세스 토큰
//         // localStorage.setItem('refresh_token', data.refreshToken);
//         // console.log('성공');
//         navigate('/'); // 로그인 성공 후 홈 페이지로 리다이렉트
//       })
//       .catch((error) => {
//         console.error('로그인 실패', error);
//       });
//   }, [navigate]);

//   return <div>로그인 중입니다...</div>;
// };

// export default KakaoRedirectHandler;
