import React from 'react';
import ActionButton from '../ActionButton';

const JoinBtn: React.FC = () => {
  const handleClick = () => {
    // 참여하기 버튼 클릭 시 로직
    alert('참여 신청이 완료되었습니다.');
  };

  return <ActionButton text="참여하기" onClick={handleClick} />;
};

export default JoinBtn;
