// import React from 'react';
// import * as S from './JoinDetails.Style';

// interface JoinDetailsProps {
//   username: string;
//   joinContent: string;
// }

// const JoinDetails = ({ username, joinContent }: JoinDetailsProps) => {
//   return (
//     <S.JoinDetailsWrap>
//       <S.NameWrap>
//         <S.Label>이름</S.Label>
//         <S.Input value={username} readOnly />
//       </S.NameWrap>
//       <S.InputWrapper>
//         <S.Label>가입 내용</S.Label>
//         <S.TextArea value={joinContent} placeholder="내용을 입력하세요." />
//       </S.InputWrapper>
//     </S.JoinDetailsWrap>
//   );
// };

// export default JoinDetails;

import React, { useState } from 'react';
import * as S from './JoinDetails.Style';

interface JoinDetailsProps {
  username: string;
  joinContent: string;
  onJoinContentChange: (newContent: string) => void;
}

const JoinDetails = ({
  username,
  joinContent,
  onJoinContentChange,
}: JoinDetailsProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onJoinContentChange(event.target.value);
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
