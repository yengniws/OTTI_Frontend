// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Search from '../../components/Search/Search';
// import CommunityList from '../../components/Community/CommunityList/CommunityList';
// import DropDown from '../../components/TopBar/DropDown';
// import ActionButton from '../../components/common/ActionButton';
// import BottomNavBar from '../../components/BottomBar/BottomNavBar';
// import * as S from './Community.Style';
// import axiosInstance from '../../libs/AxiosInstance';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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
//       toast.error('게시글을 가져오는 데 실패했습니다.'); // 에러 메시지 토스트
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

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Search from '../../components/Search/Search';
// import CommunityList from '../../components/Community/CommunityList/CommunityList';
// import DropDown from '../../components/TopBar/DropDown';
// import ActionButton from '../../components/common/ActionButton';
// import BottomNavBar from '../../components/BottomBar/BottomNavBar';
// import * as S from './Community.Style';
// import axiosInstance from '../../libs/AxiosInstance';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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
//         headers: {
//           currentPage: (currentPage - 1).toString(),
//           size: size.toString(),
//         },
//       });

//       const { contents, totalPages } = response.data;
//       setPosts(contents);
//       setTotalPages(totalPages);
//     } catch (error) {
//       console.error('Failed to fetch posts', error);
//       toast.error('게시글을 가져오는 데 실패했습니다.'); // 에러 메시지 토스트
//     }
//   };

//   // OTT 선택 시 선택된 OTT 업데이트 및 게시글 가져오기
//   useEffect(() => {
//     fetchPosts(selectedOtt); // OTT가 변경될 때마다 데이터를 가져옴
//   }, [selectedOtt, currentPage, size]);

//   // 페이지네이션을 위한 핸들러
//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const renderPagination = () => {
//     const pages = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pages.push(
//         <S.PageNumber
//           key={i}
//           onClick={() => setCurrentPage(i)}
//           isCurrent={i === currentPage}
//         >
//           {i}
//         </S.PageNumber>,
//       );
//     }
//     return (
//       <S.PaginationWrapper>
//         <S.PaginationButton onClick={handlePreviousPage}>
//           {'<'}
//         </S.PaginationButton>
//         {pages}
//         <S.PaginationButton onClick={handleNextPage}>{'>'}</S.PaginationButton>
//       </S.PaginationWrapper>
//     );
//   };

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
//           {renderPagination()} {/* 페이지네이션 렌더링 */}
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
  const [currentPage, setCurrentPage] = useState<number>(1); // 처음엔 1페이지부터 시작
  const [totalPages, setTotalPages] = useState<number>(0);
  const [size, setSize] = useState<number>(10);

  // 글 작성 버튼 클릭 시 CommunityWrite 페이지로 이동
  const handleCreatePost = () => {
    navigate('/community-write');
  };

  // 페이지 이동 버튼 클릭 시 호출
  const handlePageChange = (newPage: number) => {
    console.log(`페이지 변경 요청: ${newPage}`); // 새로운 페이지 값 출력
    setCurrentPage(newPage);
  };

  // 게시글을 가져오는 API 호출 함수 (페이지네이션 적용)
  const fetchPosts = async (ottName: string) => {
    try {
      console.log(`현재 페이지: ${currentPage}`); // currentPage 상태 확인
      const url = ottName
        ? `/api/post/filtering/${encodeURIComponent(ottName)}`
        : `/api/post`;

      const response = await axiosInstance.get<PaginatedPosts>(url, {
        headers: {
          currentPage: (currentPage - 1).toString(), // 페이지 번호를 1 감소시켜 전송
          size: size.toString(),
        },
      });

      const { contents, totalPages } = response.data;
      console.log('응답 받은 게시글:', contents); // 받아온 게시글 로그
      console.log('총 페이지 수:', totalPages); // 전체 페이지 수 로그
      setPosts(contents);
      setTotalPages(totalPages);
    } catch (error) {
      console.error('Failed to fetch posts', error);
      toast.error('게시글을 가져오는 데 실패했습니다.');
    }
  };

  // OTT 선택 시 선택된 OTT 업데이트 및 게시글 가져오기
  useEffect(() => {
    console.log(
      '게시글을 가져오는 중... OTT:',
      selectedOtt,
      '페이지:',
      currentPage,
    );
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
          <div>
            {/* 페이지네이션 버튼 */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, idx) => (
              <button
                key={idx + 1}
                onClick={() => handlePageChange(idx + 1)}
                style={{
                  fontWeight: currentPage === idx + 1 ? 'bold' : 'normal',
                  color: currentPage === idx + 1 ? '#000' : '#ddd',
                }}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
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
