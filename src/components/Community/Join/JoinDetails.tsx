import React from 'react';
import * as S from './JoinDetails.Style';

interface JoinDetailsProps {
  username: string;
  joinContent: string;
}

const JoinDetails = ({ username, joinContent }: JoinDetailsProps) => {
  return (
    <S.JoinDetailsWrap>
      <S.InputWrapper>
        <S.Label>이름</S.Label>
        <S.Input value={username} readOnly />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>가입 내용</S.Label>
        <S.TextArea value={joinContent} placeholder="내용을 입력하세요." />
      </S.InputWrapper>
    </S.JoinDetailsWrap>
  );
};

export default JoinDetails;
