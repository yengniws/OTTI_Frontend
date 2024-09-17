import React from 'react';
import * as S from './ActionButton.Style';

interface ActionButtonProps {
  text: string;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onClick }) => {
  return <S.Button onClick={onClick}>{text}</S.Button>;
};

export default ActionButton;
