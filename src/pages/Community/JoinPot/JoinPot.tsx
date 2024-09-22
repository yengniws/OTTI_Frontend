// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import NewTopBar from '../../../components/TopBar/NewTopBar';
// import OttInfo from '../../../components/Community/Join/OttInfo';
// import JoinDetails from '../../../components/Community/Join/JoinDetails';
// import SendBtn from '../../../components/common/JoinBtn/SendBtn';
// import * as S from './JoinPot.Style';

// const JoinPot = () => {
//   return (
//     <S.JoinPotWrap>
//       <S.TitleWrapper>
//         <NewTopBar title="가입하기" />
//       </S.TitleWrapper>
//       <S.PageContainer>
//         <S.OttWrapper>
//           <OttInfo
//             imageUrl="/path/to/netflix-logo.png"
//             ottname="넷플릭스"
//             plan="프리미엄"
//             price="5000원"
//             paymentDate="매월 2일"
//             currentMembers="3명"
//           />
//         </S.OttWrapper>
//         <S.JoinWrapper>
//           <S.Title>신청 내용</S.Title>
//           <JoinDetails username="김이박" joinContent="" />
//         </S.JoinWrapper>
//         <SendBtn />
//       </S.PageContainer>
//     </S.JoinPotWrap>
//   );
// };

// export default JoinPot;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewTopBar from '../../../components/Topbar/NewTopBar';
import OttInfo from '../../../components/Community/Join/OttInfo';
import JoinDetails from '../../../components/Community/Join/JoinDetails';
import SendBtn from '../../../components/common/JoinBtn/SendBtn';
import * as S from './JoinPot.Style';

const JoinPot = () => {
  const [joinContent, setJoinContent] = useState(''); // 상태 초기화
  const navigate = useNavigate();

  const handleJoinContentChange = (newContent: string) => {
    setJoinContent(newContent); // 상태 업데이트
  };

  const handleSendClick = () => {
    console.log('신청 내용:', joinContent);
    navigate('/community');
  };

  return (
    <S.JoinPotWrap>
      <S.TitleWrapper>
        <NewTopBar title="가입하기" />
      </S.TitleWrapper>
      <S.PageContainer>
        <S.OttWrapper>
          <OttInfo
            imageUrl="/path/to/netflix-logo.png"
            ottname="넷플릭스"
            plan="프리미엄"
            price="5000원"
            paymentDate="매월 2일"
            currentMembers="3명"
          />
        </S.OttWrapper>
        <S.JoinWrapper>
          <S.Title>신청 내용</S.Title>
          <JoinDetails
            username="김이박"
            joinContent={joinContent}
            onJoinContentChange={handleJoinContentChange}
          />
        </S.JoinWrapper>
        <SendBtn onClick={handleSendClick} />
      </S.PageContainer>
    </S.JoinPotWrap>
  );
};

export default JoinPot;
