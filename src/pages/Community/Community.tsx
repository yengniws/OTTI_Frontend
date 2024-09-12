// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Search from '../../components/Search/Search';
// import CommunityList from '../../components/Community/CommunityList/CommunityList';
// import DropDown from '../../components/TopBar/DropDown';
// import ActionButton from '../../components/common/ActionButton';
// import BottomNavBar from '../../components/BottomBar/BottomNavBar';
// import * as S from './Community.Style';

// const Community = () => {
//   const navigate = useNavigate(); // useNavigate 훅 사용

//   // 글 작성 버튼 클릭 시 CommunityWrite 페이지로 이동
//   const handleCreatePost = () => {
//     navigate('/community-write'); // 변경된 경로로 이동
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
//       <S.TitleWrapper>
//         <DropDown options={ottOptions} />
//       </S.TitleWrapper>
//       <S.CommuniyContainer>
//         <Search />
//         <CommunityList />
//         <ActionButton text="글 작성" onClick={handleCreatePost} />
//         <S.BottomNavBarWrapper>
//           <BottomNavBar />
//         </S.BottomNavBarWrapper>
//       </S.CommuniyContainer>
//     </div>
//   );
// };

// export default Community;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../components/Search/Search';
import CommunityList from '../../components/Community/CommunityList/CommunityList';
import DropDown from '../../components/TopBar/DropDown';
import ActionButton from '../../components/common/ActionButton';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import * as S from './Community.Style';
import axios from 'axios';

const Community = () => {
  const navigate = useNavigate();
  const [selectedOtt, setSelectedOtt] = useState<string>('');
  const [posts, setPosts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);

  // 글 작성 버튼 클릭 시 CommunityWrite 페이지로 이동
  const handleCreatePost = () => {
    navigate('/community-write');
  };

  const ottOptions = [
    '넷플릭스',
    '티빙',
    '웨이브',
    '디즈니+',
    '쿠팡플레이',
    '왓챠',
  ];

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`/api/post/filtering/${selectedOtt}`, {
        params: { page: currentPage, size },
      });
      setPosts(response.data.contents); // API에서 받아온 게시글 데이터 설정
    } catch (error) {
      console.error('Failed to fetch posts', error);
    }
  };

  useEffect(() => {
    if (selectedOtt) {
      fetchPosts();
    }
  }, [selectedOtt, currentPage, size]);

  const handleOttChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOtt(event.target.value);
  };

  return (
    <div>
      <S.TitleWrapper>
        <DropDown options={ottOptions} onChange={handleOttChange} />
      </S.TitleWrapper>
      <S.CommuniyContainer>
        <Search />
        <CommunityList posts={posts} /> {/* posts 데이터를 전달 */}
        <ActionButton text="글 작성" onClick={handleCreatePost} />
        <S.BottomNavBarWrapper>
          <BottomNavBar />
        </S.BottomNavBarWrapper>
      </S.CommuniyContainer>
    </div>
  );
};

export default Community;
