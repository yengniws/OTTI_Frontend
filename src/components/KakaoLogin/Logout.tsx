//예시 코드

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // 카카오 로그아웃 엔드포인트 호출
      await axios.post(
        'https://kapi.kakao.com/v1/user/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('kakaoAccessToken')}`,
          },
        },
      );
      localStorage.removeItem('kakaoAccessToken');
      toast.success('로그아웃 되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('카카오 로그아웃 중 오류 발생:', error);
      toast.error('로그아웃 중 오류가 발생했습니다.');
    }
  };

  return <button onClick={handleLogout}>로그아웃</button>;
};

export default Logout;
