// import Search from '../../components/Search/Search';
// import CommunityList from '../../components/Community/CommunityList/CommunityList';
// import DropDown from '../../components/TopBar/DropDown';
// import ActionButton from '../../components/common/ActionButton';
// import BottomNavBar from '../../components/BottomBar/BottomNavBar';
// import * as S from './Community.Style';

// const Community = () => {
//   const handleCreatePost = () => {
//     window.location.href = '/community-write';
//   };

//   const ottOptions = [
//     '넷플릭스',
//     '티빙',
//     '웨이브',
//     '디즈니+',
//     '쿠팡플레이',
//     '왓챠',
//   ];

//   return (
//     <div>
//       <DropDown options={ottOptions} />
//       <Search />
//       <CommunityList />
//       <ActionButton text="글 작성" onClick={handleCreatePost} />
//       <S.BottomNavBarWrapper>
//         <BottomNavBar />
//       </S.BottomNavBarWrapper>
//     </div>
//   );
// };

// export default Community;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../components/Search/Search';
import CommunityList from '../../components/Community/CommunityList/CommunityList';
import DropDown from '../../components/TopBar/DropDown';
import ActionButton from '../../components/common/ActionButton';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import * as S from './Community.Style';

const Community = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 글 작성 버튼 클릭 시 CommunityWrite 페이지로 이동
  const handleCreatePost = () => {
    navigate('/community-write'); // 변경된 경로로 이동
  };

  const ottOptions = [
    '넷플릭스',
    '티빙',
    '웨이브',
    '디즈니+',
    '쿠팡플레이',
    '왓챠',
  ];

  return (
    <div>
      <S.CommuniyContainer>
        {/* <S.TitleWrapper> */}
        <DropDown options={ottOptions} />
        {/* </S.TitleWrapper> */}
        <Search />
        <CommunityList />
        <ActionButton text="글 작성" onClick={handleCreatePost} />
        <S.BottomNavBarWrapper>
          <BottomNavBar />
        </S.BottomNavBarWrapper>
      </S.CommuniyContainer>
    </div>
  );
};

export default Community;
