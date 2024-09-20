import React from 'react';
import * as S from '../ActionButton.Style';

// ActionButton 컴포넌트의 프로퍼티 타입 정의
interface ActionButtonProps {
  text: string; // 버튼에 표시될 텍스트
  onClick: () => void; // 버튼 클릭 시 호출될 콜백 함수
}

// ActionButton 컴포넌트 정의
const ActionButton = ({ text, onClick }: ActionButtonProps) => {
  return (
    // 버튼 클릭 시 onClick 콜백 함수 호출
    <S.Button onClick={onClick}>{text}</S.Button>
  );
};

export default ActionButton;
