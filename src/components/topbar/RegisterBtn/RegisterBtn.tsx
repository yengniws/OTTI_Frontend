import React from 'react';
import * as S from './RegisterBtn.Style';

interface RegisterBtnProps {
  onClick: () => void;
}

const RegisterBtn: React.FC<RegisterBtnProps> = ({ onClick }) => {
  return <S.RegisterBtn onClick={onClick}>등록</S.RegisterBtn>;
};

export default RegisterBtn;
