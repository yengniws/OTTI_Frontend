import React, { useState } from 'react';
import * as S from './JoinDetails.Style';

interface JoinDetailsProps {
  username: string;
  joinContent: string;
  onJoinContentChange: (newContent: string) => void;
}

// 가입자 정보 입력받기
const JoinDetails = ({
  username,
  joinContent,
  onJoinContentChange,
}: JoinDetailsProps) => {
  // 텍스트 영역의 값이 변경될 때 호출되는 함수
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onJoinContentChange(event.target.value); // 변경된 값을 부모 컴포넌트에 전달
  };

  return (
    <S.JoinDetailsWrap>
      <S.NameWrap>
        <S.Label>이름</S.Label>
        <S.Input value={username} readOnly />
      </S.NameWrap>
      <S.InputWrapper>
        <S.Label>가입 내용</S.Label>
        <S.TextArea
          value={joinContent}
          onChange={handleChange}
          placeholder="내용을 입력하세요."
        />
      </S.InputWrapper>
    </S.JoinDetailsWrap>
  );
};

export default JoinDetails;
