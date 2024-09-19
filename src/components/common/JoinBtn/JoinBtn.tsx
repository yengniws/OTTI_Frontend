// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import ActionButton from '../ActionButton';

// const JoinBtn: React.FC = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/joinpot');
//   };

//   return <ActionButton text="참여하기" onClick={handleClick} />;
// };

// export default JoinBtn;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../ActionButton';

interface JoinBtnProps {
  potId: number; // potId를 prop으로 받음
}

const JoinBtn: React.FC<JoinBtnProps> = ({ potId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // potId를 URL 파라미터로 전달
    navigate(`/joinpot/${potId}`);
  };

  return <ActionButton text="참여하기" onClick={handleClick} />;
};

export default JoinBtn;
