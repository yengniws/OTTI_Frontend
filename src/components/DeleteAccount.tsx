//예시 코드

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const DeleteAccount: React.FC = () => {
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    try {
      // 카카오 계정 삭제 엔드포인트 호출
      await axios.post(
        'https://kapi.kakao.com/v1/user/unlink',
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('kakaoAccessToken')}`,
          },
        },
      );
      localStorage.removeItem('kakaoAccessToken');
      toast.success('계정이 삭제되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('카카오 계정 삭제 중 오류 발생:', error);
      toast.error('계정 삭제 중 오류가 발생했습니다.');
    }
  };

  return <button onClick={handleDeleteAccount}>계정 탈퇴</button>;
};

export default DeleteAccount;
