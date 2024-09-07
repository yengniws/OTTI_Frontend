// import React from 'react';
// import ActionButton from '../ActionButton';

// const JoinBtn: React.FC = () => {
//   const handleClick = () => {
//     alert('참여 신청이 완료되었습니다.');
//   };

//   return <ActionButton text="참여하기" onClick={handleClick} />;
// };

// export default JoinBtn;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../ActionButton';

const JoinBtn: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/joinpot');
  };

  return <ActionButton text="참여하기" onClick={handleClick} />;
};

export default JoinBtn;
