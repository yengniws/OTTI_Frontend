import React from 'react';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../ActionButton';

interface SendBtnProps {
  onClick: () => void;
}

const SendBtn: React.FC<SendBtnProps> = ({ onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick();
    navigate('/community');
  };

  return <ActionButton text="가입 신청" onClick={handleClick} />;
};

export default SendBtn;
