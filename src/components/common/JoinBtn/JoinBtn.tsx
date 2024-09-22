import React from 'react';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../ActionButton';

// JoinBtn 컴포넌트의 프로퍼티 타입을 정의
interface JoinBtnProps {
  potId: number; // potId를 prop으로 받음
}

// JoinBtn 컴포넌트
const JoinBtn: React.FC<JoinBtnProps> = ({ potId }) => {
  // React Router의 useNavigate 훅을 사용하여 페이지 이동 기능을 제공
  const navigate = useNavigate();

  // 버튼 클릭 시 호출되는 함수
  const handleClick = () => {
    // potId를 URL 파라미터로 전달하여 /joinpot/{potId} 경로로 이동
    navigate(`/joinpot/${potId}`);
  };

  return (
    // ActionButton 컴포넌트를 사용하여 "참여하기" 버튼을 렌더링
    <ActionButton text="참여하기" onClick={handleClick} />
  );
};

export default JoinBtn;
