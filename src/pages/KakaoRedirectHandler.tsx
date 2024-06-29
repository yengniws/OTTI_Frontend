//RedirectHandler.tsx

import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RedirectHandler: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code'); // 인가 코드 추출

    if (code) {
      axios
        .post('/api/auth/kakao', { code }) // 인가 코드를 본문에 담아 전송
        .then((response) => {
          const data = response.data;
          console.log(data);
          console.log(data.result.user_id);
          console.log(data.result.jwt); //토큰

          navigate('/'); // 로그인 성공 후 리다이렉트
        })
        .catch((error) => {
          console.error('로그인 실패', error);
        });
    } else {
      console.error('인가 코드를 찾을 수 없음');
    }
  }, [location, navigate]);

  return <div>로딩 중...</div>;
};

export default RedirectHandler;
