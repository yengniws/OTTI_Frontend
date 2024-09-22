// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import Search from '../../components/Search/Search';
// // import CommunityList from '../../components/Community/CommunityList/CommunityList';
// // import DropDown from '../../components/TopBar/DropDown';
// // import ActionButton from '../../components/common/ActionButton';
// // import BottomNavBar from '../../components/BottomBar/BottomNavBar';
// // import * as S from './Community.Style';

// // const Community = () => {
// //   const navigate = useNavigate(); // useNavigate 훅 사용

// //   // 글 작성 버튼 클릭 시 CommunityWrite 페이지로 이동
// //   const handleCreatePost = () => {
// //     navigate('/community-write'); // 변경된 경로로 이동
// //   };

// //   const ottOptions = [
// //     '넷플릭스',
// //     '티빙',
// //     '웨이브',
// //     '디즈니+',
// //     '쿠팡플레이',
// //     '왓챠',
// //   ];

// //   return (
// //     <div>
// //       <S.TitleWrapper>
// //         <DropDown options={ottOptions} />
// //       </S.TitleWrapper>
// //       <S.CommuniyContainer>
// //         <Search />
// //         <CommunityList />
// //         <ActionButton text="글 작성" onClick={handleCreatePost} />
// //         <S.BottomNavBarWrapper>
// //           <BottomNavBar />
// //         </S.BottomNavBarWrapper>
// //       </S.CommuniyContainer>
// //     </div>
// //   );
// // };

// // export default Community;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Search from '../../components/Search/Search';
// import CommunityList from '../../components/Community/CommunityList/CommunityList';
// import DropDown from '../../components/TopBar/DropDown';
// import ActionButton from '../../components/common/ActionButton';
// import BottomNavBar from '../../components/BottomBar/BottomNavBar';
// import * as S from './Community.Style';
// import axios from 'axios';

// const Community = () => {
//   const navigate = useNavigate();
//   const [selectedOtt, setSelectedOtt] = useState<string>('');
//   const [posts, setPosts] = useState<any[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [size, setSize] = useState<number>(10);

//   // 글 작성 버튼 클릭 시 CommunityWrite 페이지로 이동
//   const handleCreatePost = () => {
//     navigate('/community-write');
//   };

//   const ottOptions = [
//     '넷플릭스',
//     '티빙',
//     '웨이브',
//     '디즈니+',
//     '쿠팡플레이',
//     '왓챠',
//   ];

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get(`/api/post/filtering/${selectedOtt}`, {
//         params: { page: currentPage, size },
//       });
//       setPosts(response.data.contents); // API에서 받아온 게시글 데이터 설정
//     } catch (error) {
//       console.error('Failed to fetch posts', error);
//     }
//   };

//   useEffect(() => {
//     if (selectedOtt) {
//       fetchPosts();
//     }
//   }, [selectedOtt, currentPage, size]);

//   const handleOttChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedOtt(event.target.value);
//   };

//   return (
//     <div>
//       <S.TitleWrapper>
//         <DropDown options={ottOptions} onChange={handleOttChange} />
//       </S.TitleWrapper>
//       <S.CommuniyContainer>
//         <Search />
//         <CommunityList posts={posts} />
//         <ActionButton text="글 작성" onClick={handleCreatePost} />
//         <S.BottomNavBarWrapper>
//           <BottomNavBar />
//         </S.BottomNavBarWrapper>
//       </S.CommuniyContainer>
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
// import axios from 'axios';

// const Community = () => {
//   const navigate = useNavigate();
//   const [selectedOtt, setSelectedOtt] = useState<string>('');
//   const [posts, setPosts] = useState<any[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [size, setSize] = useState<number>(10);

//   const handleCreatePost = () => {
//     navigate('/community-write');
//   };

//   const ottOptions = [
//     '넷플릭스',
//     '티빙',
//     '웨이브',
//     '디즈니+',
//     '쿠팡플레이',
//     '왓챠',
//   ];

//   // API 호출 함수
//   const fetchPosts = async () => {
//     if (!selectedOtt) return; // OTT가 선택되지 않은 경우 API 호출 안 함
//     try {
//       const response = await axios.get(
//         `/api/post/filtering/${encodeURIComponent(selectedOtt)}`,
//         {
//           params: { page: currentPage, size },
//         },
//       );
//       setPosts(response.data.contents); // API에서 받아온 게시글 데이터 설정
//     } catch (error) {
//       console.error('Failed to fetch posts', error);
//     }
//   };

//   // OTT 이름, 페이지 번호 또는 사이즈가 변경될 때마다 데이터 가져오기
//   useEffect(() => {
//     fetchPosts();
//   }, [selectedOtt, currentPage, size]);

//   // OTT 선택 시 선택된 OTT 업데이트
//   const handleOttChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedOtt(event.target.value);
//     setCurrentPage(1); // 새로운 OTT 선택 시 페이지를 첫 페이지로 초기화
//   };

//   return (
//     <div>
//       <S.TitleWrapper>
//         <DropDown options={ottOptions} onChange={handleOttChange} />
//       </S.TitleWrapper>
//       <S.CommuniyContainer>
//         <Search />
//         <CommunityList posts={posts} /> {/* posts 데이터를 전달 */}
//         <ActionButton text="글 작성" onClick={handleCreatePost} />
//         <S.BottomNavBarWrapper>
//           <BottomNavBar />
//         </S.BottomNavBarWrapper>
//       </S.CommuniyContainer>
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
// import axios from 'axios';
// import { Post } from './types';

// const Community = () => {
//   const navigate = useNavigate();
//   const [selectedOtt, setSelectedOtt] = useState<string>('');
//   const [posts, setPosts] = useState<Post[]>([]); // Post 타입 사용
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [size, setSize] = useState<number>(10);

//   // 글 작성 버튼 클릭 시 CommunityWrite 페이지로 이동
//   const handleCreatePost = () => {
//     navigate('/community-write');
//   };

//   const ottOptions = [
//     '넷플릭스',
//     '티빙',
//     '웨이브',
//     '디즈니+',
//     '쿠팡플레이',
//     '왓챠',
//   ];

//   // API 호출 함수
//   const fetchPosts = async () => {
//     if (!selectedOtt) return; // OTT가 선택되지 않은 경우 API 호출 안 함
//     try {
//       const response = await axios.get(
//         `/api/post/filtering/${encodeURIComponent(selectedOtt)}`,
//         {
//           params: { page: currentPage, size },
//         },
//       );
//       setPosts(response.data.contents); // API에서 받아온 게시글 데이터 설정
//     } catch (error) {
//       console.error('Failed to fetch posts', error);
//     }
//   };

//   // OTT 이름, 페이지 번호 또는 사이즈가 변경될 때마다 데이터 가져오기
//   useEffect(() => {

//     fetchPosts();
//   }, [selectedOtt, currentPage, size]);

//   // OTT 선택 시 선택된 OTT 업데이트
//   const handleOttChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedOtt(event.target.value);
//     setCurrentPage(1); // 새로운 OTT 선택 시 페이지를 첫 페이지로 초기화
//   };

//   return (
//     <div>
//       <S.TitleWrapper>
//         <DropDown options={ottOptions} onChange={handleOttChange} />
//       </S.TitleWrapper>
//       <S.CommuniyContainer>
//         <Search />
//         <CommunityList posts={posts} /> {/* posts 데이터를 전달 */}
//         <ActionButton text="글 작성" onClick={handleCreatePost} />
//         <S.BottomNavBarWrapper>
//           <BottomNavBar />
//         </S.BottomNavBarWrapper>
//       </S.CommuniyContainer>
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
// import axios from 'axios';
// import { Post } from './types';

// const Community = () => {
//   const navigate = useNavigate();
//   const [ottOptions, setOttOptions] = useState<string[]>([]);
//   const [selectedOtt, setSelectedOtt] = useState<string>('');
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [size, setSize] = useState<number>(10);

//   // 글 작성 버튼 클릭 시 CommunityWrite 페이지로 이동
//   const handleCreatePost = () => {
//     navigate('/community-write');
//   };

//   // OTT 목록을 API로부터 가져오는 함수
//   const fetchOttOptions = async () => {
//     try {
//       const response = await axios.get<string[]>('/api/ott/names'); // OTT 이름 목록을 가져오는 API 호출
//       setOttOptions(response.data);
//     } catch (error) {
//       console.error('Failed to fetch OTT options', error);
//     }
//   };

//   // 게시글을 가져오는 API 호출 함수
//   const fetchPosts = async () => {
//     if (!selectedOtt) return; // OTT가 선택되지 않은 경우 API 호출 안 함
//     try {
//       const response = await axios.get(
//         `/api/post/filtering/${encodeURIComponent(selectedOtt)}`,
//         {
//           params: { page: currentPage, size },
//         },
//       );
//       setPosts(response.data.contents); // API에서 받아온 게시글 데이터 설정
//     } catch (error) {
//       console.error('Failed to fetch posts', error);
//     }
//   };

//   // 컴포넌트가 마운트될 때 OTT 목록을 가져옴
//   useEffect(() => {
//     fetchOttOptions();
//   }, []);

//   // OTT 이름, 페이지 번호 또는 사이즈가 변경될 때마다 데이터 가져오기
//   useEffect(() => {
//     fetchPosts();
//   }, [selectedOtt, currentPage, size]);

//   // OTT 선택 시 선택된 OTT 업데이트
//   const handleOttChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedOtt(event.target.value);
//     setCurrentPage(1); // 새로운 OTT 선택 시 페이지를 첫 페이지로 초기화
//   };

//   return (
//     <div>
//       <S.TitleWrapper>
//         <DropDown options={ottOptions} onChange={handleOttChange} />
//       </S.TitleWrapper>
//       <S.CommuniyContainer>
//         <Search />
//         <CommunityList posts={posts} />
//         <ActionButton text="글 작성" onClick={handleCreatePost} />
//         <S.BottomNavBarWrapper>
//           <BottomNavBar />
//         </S.BottomNavBarWrapper>
//       </S.CommuniyContainer>
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
// import axios from 'axios';

// // Post 타입 정의
// interface Post {
//   id: number;
//   title: string;
//   content: string;
//   viewCount: number;
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
//   const [ottOptions, setOttOptions] = useState<string[]>([]);
//   const [selectedOtt, setSelectedOtt] = useState<string>('');
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(0);
//   const [size, setSize] = useState<number>(10);

//   // 글 작성 버튼 클릭 시 CommunityWrite 페이지로 이동
//   const handleCreatePost = () => {
//     navigate('/community-write');
//   };

//   // OTT 목록을 API로부터 가져오는 함수
//   const fetchOttOptions = async () => {
//     try {
//       const response = await axios.get<string[]>('/api/ott/names');
//       setOttOptions(response.data);
//     } catch (error) {
//       console.error('Failed to fetch OTT options', error);
//     }
//   };

//   // 게시글을 가져오는 API 호출 함수 (페이지네이션 적용)
//   const fetchPosts = async () => {
//     try {
//       const url = selectedOtt
//         ? `/api/post/filtering/${encodeURIComponent(selectedOtt)}`
//         : `/api/post`;

//       const response = await axios.get<PaginatedPosts>(url, {
//         params: { page: currentPage, size },
//       });

//       const { contents, totalPages } = response.data;
//       setPosts(contents);
//       setTotalPages(totalPages);
//     } catch (error) {
//       console.error('Failed to fetch posts', error);
//     }
//   };

//   // 컴포넌트가 마운트될 때 OTT 목록을 가져옴
//   useEffect(() => {
//     fetchOttOptions();
//   }, []);

//   // OTT 이름, 페이지 번호 또는 사이즈가 변경될 때마다 데이터 가져오기
//   useEffect(() => {
//     fetchPosts();
//   }, [selectedOtt, currentPage, size]);

//   // OTT 선택 시 선택된 OTT 업데이트
//   const handleOttChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedOtt(event.target.value);
//     setCurrentPage(1); // 새로운 OTT 선택 시 페이지를 첫 페이지로 초기화
//   };

//   return (
//     <div>
//       <S.TitleWrapper>
//         <DropDown options={ottOptions} onChange={handleOttChange} />
//       </S.TitleWrapper>
//       <S.CommuniyContainer>
//         <Search />
//         <CommunityList posts={posts} /> {/* posts를 CommunityList로 전달 */}
//         <ActionButton text="글 작성" onClick={handleCreatePost} />
//         <S.BottomNavBarWrapper>
//           <BottomNavBar />
//         </S.BottomNavBarWrapper>
//       </S.CommuniyContainer>
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

// // Post 타입 정의
// interface Post {
//   id: number;
//   title: string;
//   content: string;
//   viewCount: number;
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
//   const [selectedOtt, setSelectedOtt] = useState<string>('');
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(0);
//   const [size, setSize] = useState<number>(10);

//   // 하드코딩된 OTT 옵션
//   const ottOptions = [
//     '넷플릭스',
//     '티빙',
//     '웨이브',
//     '디즈니+',
//     '쿠팡플레이',
//     '왓챠',
//   ];

//   // 글 작성 버튼 클릭 시 CommunityWrite 페이지로 이동
//   const handleCreatePost = () => {
//     navigate('/community-write');
//   };

//   // 게시글을 가져오는 API 호출 함수 (페이지네이션 적용)
//   const fetchPosts = async () => {
//     try {
//       const url = selectedOtt
//         ? `/post/filtering/${encodeURIComponent(selectedOtt)}`
//         : `/post`;

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

//   // OTT 이름, 페이지 번호 또는 사이즈가 변경될 때마다 데이터 가져오기
//   useEffect(() => {
//     fetchPosts();
//   }, [selectedOtt, currentPage, size]);

//   // OTT 선택 시 선택된 OTT 업데이트
//   const handleOttChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedOtt(event.target.value);
//     setCurrentPage(1); // 새로운 OTT 선택 시 페이지를 첫 페이지로 초기화
//   };

//   return (
//     <div>
//       <S.TitleWrapper>
//         <DropDown options={ottOptions} onChange={handleOttChange} />
//       </S.TitleWrapper>
//       <S.CommuniyContainer>
//         <Search />
//         <CommunityList posts={posts} /> {/* posts를 CommunityList로 전달 */}
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
import DropDown from '../../components/Topbar/DropDown';
import ActionButton from '../../components/common/ActionButton';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import * as S from './Community.Style';
import axiosInstance from '../../libs/AxiosInstance';

// Post 타입 정의
interface Post {
  id: number;
  title: string;
  content: string;
  viewCount: number;
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
      const url = ottName ? `/api/post/filtering/${ottName}` : `/api/post`;

      const response = await axiosInstance.get<PaginatedPosts>(url, {
        params: { page: currentPage, size },
      });

      const { contents, totalPages } = response.data;
      setPosts(contents);
      setTotalPages(totalPages);
    } catch (error) {
      console.error('Failed to fetch posts', error);
    }
  };

  // OTT 선택 시 선택된 OTT 업데이트 및 게시글 가져오기
  useEffect(() => {
    fetchPosts(selectedOtt); // OTT가 변경될 때마다 데이터를 가져옴
  }, [selectedOtt, currentPage, size]);

  return (
    <div>
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
    </div>
  );
};

export default Community;
