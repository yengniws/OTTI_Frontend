import React, { useState } from 'react';
import NewTopBar from '../../../components/TopBar/NewTopBar';
import PotSelect from '../../../components/Community/PotSelect/PotSelect';
import WritePost from '../../../components/Community/WritePost/WritePost';
import * as S from './CommunityWrite.Style';
import RegisterBtn from '../../../components/TopBar/RegisterBtn/RegisterBtn';

const CommunityWrite: React.FC = () => {
  const [selectedPot, setSelectedPot] = useState('');
  const ottOptions = [
    '넷플릭스',
    '티빙',
    '웨이브',
    '디즈니+',
    '쿠팡플레이',
    '왓챠',
  ];

  const handleRegister = () => {
    // 등록 버튼을 눌렀을 때 CommunityList로 이동하는 로직
    // 여기에 게시글 데이터를 서버에 전송하는 로직 추가 필요
    window.location.href = '/community';
  };

  return (
    <S.CommunityWrite>
      <S.TopBar>
        <NewTopBar title="글쓰기" />
        <RegisterBtn onClick={handleRegister} />
      </S.TopBar>
      <PotSelect
        options={ottOptions}
        selected={selectedPot}
        onSelect={setSelectedPot}
      />
      <WritePost />
    </S.CommunityWrite>
  );
};

export default CommunityWrite;
