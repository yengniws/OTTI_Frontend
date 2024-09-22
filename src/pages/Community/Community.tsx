// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Search from '../../components/Search/Search';
// import CommunityList from '../../components/Community/CommunityList/CommunityList';
// import DropDown from '../../components/TopBar/DropDown';
// import ActionButton from '../../components/common/ActionButton';
// import BottomNavBar from '../../components/BottomBar/BottomNavBar';
// import * as S from './Community.Style';
// import axiosInstance from '../../libs/AxiosInstance';

// interface Post {
//   id: number;
//   title: string;
//   content: string;
//   commentCount: number;
//   userName: string;
//   ottImage: string;
//   createdDate: string;
// }

// interface PaginatedPosts {
//   contents: Post[];
//   currentPage: number;
//   totalPages: number;
//   totalElements: number;
//   size: number;
// }

// const Community = () => {
//   const navigate = useNavigate();
//   const [selectedOtt, setSelectedOtt] = useState<string>(''); // 기본값은 모든 OTT
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(0);
//   const [size, setSize] = useState<number>(10);

//   // 글 작성 버튼 클릭 시 CommunityWrite 페이지로 이동
//   const handleCreatePost = () => {
//     navigate('/community-write');
//   };

//   // 게시글을 가져오는 API 호출 함수 (페이지네이션 적용)
//   const fetchPosts = async (ottName: string) => {
//     try {
//       const url = ottName
//         ? `/api/post/filtering/${encodeURIComponent(ottName)}`
//         : `/api/post`;

//       const response = await axiosInstance.get<PaginatedPosts>(url, {
//         params: { page: currentPage, size },
//       });

//       const { contents, totalPages } = response.data;
//       setPosts(contents);
//       setTotalPages(totalPages);
//     } catch (error) {
//       console.error('Failed to fetch posts', error);
//     }
//   };

//   // OTT 선택 시 선택된 OTT 업데이트 및 게시글 가져오기
//   useEffect(() => {
//     fetchPosts(selectedOtt); // OTT가 변경될 때마다 데이터를 가져옴
//   }, [selectedOtt, currentPage, size]);

//   return (
//     <div>
//       <S.Wrapper>
//         <S.TitleWrapper>
//           {/* DropDown에서 선택된 값을 Community로 전달 */}
//           <DropDown onOttChange={setSelectedOtt} />
//         </S.TitleWrapper>
//         <S.CommuniyContainer>
//           <Search />
//           <CommunityList posts={posts} /> {/* posts를 CommunityList로 전달 */}
//           <ActionButton text="글 작성" onClick={handleCreatePost} />
//           <S.BottomNavBarWrapper>
//             <BottomNavBar />
//           </S.BottomNavBarWrapper>
//         </S.CommuniyContainer>
//       </S.Wrapper>
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
import axiosInstance from '../../libs/AxiosInstance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Post {
  id: number;
  title: string;
  content: string;
  commentCount: number;
  userName: string;
  ottImage: string;
  createdDate: string;
}

interface PaginatedPosts {
  contents: Post[];
  currentPage: number;
  totalPages: number;
  totalElements: number;
  size: number;
}

const Community = () => {
  const navigate = useNavigate();
  const [selectedOtt, setSelectedOtt] = useState<string>(''); // 기본값은 모든 OTT
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [size, setSize] = useState<number>(10);

  // 글 작성 버튼 클릭 시 CommunityWrite 페이지로 이동
  const handleCreatePost = () => {
    navigate('/community-write');
  };

  // 게시글을 가져오는 API 호출 함수 (페이지네이션 적용)
  const fetchPosts = async (ottName: string) => {
    try {
      const url = ottName
        ? `/api/post/filtering/${encodeURIComponent(ottName)}`
        : `/api/post`;

      const response = await axiosInstance.get<PaginatedPosts>(url, {
        params: { page: currentPage, size },
      });

      const { contents, totalPages } = response.data;
      setPosts(contents);
      setTotalPages(totalPages);
    } catch (error) {
      console.error('Failed to fetch posts', error);
      toast.error('게시글을 가져오는 데 실패했습니다.'); // 에러 메시지 토스트
    }
  };

  // OTT 선택 시 선택된 OTT 업데이트 및 게시글 가져오기
  useEffect(() => {
    fetchPosts(selectedOtt); // OTT가 변경될 때마다 데이터를 가져옴
  }, [selectedOtt, currentPage, size]);

  return (
    <div>
      <S.Wrapper>
        <S.TitleWrapper>
          {/* DropDown에서 선택된 값을 Community로 전달 */}
          <DropDown onOttChange={setSelectedOtt} />
        </S.TitleWrapper>
        <S.CommuniyContainer>
          <Search />
          <CommunityList posts={posts} /> {/* posts를 CommunityList로 전달 */}
          <ActionButton text="글 작성" onClick={handleCreatePost} />
          <S.BottomNavBarWrapper>
            <BottomNavBar />
          </S.BottomNavBarWrapper>
        </S.CommuniyContainer>
      </S.Wrapper>
    </div>
  );
};

export default Community;
