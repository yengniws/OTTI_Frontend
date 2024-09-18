// import React, { useEffect, useState } from 'react';
// import * as S from './MyPosts.Style';
// import axiosInstance from '../../../libs/AxiosInstance';
// import MyPostsList, {
//   Post,
// } from '../../../components/Community/MyPostsList/MyPostsList';
// import NewTopBar from '../../../components/TopBar/NewTopBar';

// const MyPosts: React.FC = () => {
//   const [posts, setPosts] = useState<Post[]>([]);

//   useEffect(() => {
//     // Fetch user's posts
//     const fetchPosts = async () => {
//       try {
//         const response = await axiosInstance.get(
//           '/api/post/user?page=1&size=10',
//         );
//         setPosts(response.data.content); // Assuming the data is in the 'content' key
//       } catch (error) {
//         console.error('Failed to fetch posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <S.PageContainer>
//       <NewTopBar title="내가 쓴 글" />
//       <MyPostsList posts={posts} />
//     </S.PageContainer>
//   );
// };

// export default MyPosts;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import MyPostsList from '../../../components/Community/MyPostsList/MyPostsList';
// import * as S from './MyPosts.Style';
// import axiosInstance from '../../../libs/AxiosInstance';
// import NewTopBar from '../../../components/TopBar/NewTopBar';

// interface Post {
//   id: number;
//   title: string;
//   content: string;
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

// const MyPosts = () => {
//   const navigate = useNavigate();
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(0);
//   const [size] = useState<number>(10); // Set the size per page to 10

//   // Fetch posts by user
//   const fetchMyPosts = async (page: number) => {
//     try {
//       const response = await axiosInstance.get<PaginatedPosts>(
//         `/api/post/user`,
//         {
//           params: {
//             page,
//             size,
//           },
//         },
//       );

//       const { contents, currentPage, totalPages } = response.data;
//       setPosts(contents);
//       setCurrentPage(currentPage);
//       setTotalPages(totalPages);
//     } catch (error) {
//       console.error('Failed to fetch posts', error);
//       // Handle error, possibly show a message to the user
//     }
//   };

//   // Fetch posts on component mount and when currentPage changes
//   useEffect(() => {
//     fetchMyPosts(currentPage);
//   }, [currentPage]);

//   return (
//     <div>
//       <S.Wrapper>
//         <S.TitleWrapper>
//           <NewTopBar title="내가 쓴 글" />
//         </S.TitleWrapper>
//         <S.PostContainer>
//           <MyPostsList posts={posts} />
//         </S.PostContainer>
//         {/* Pagination controls */}
//         <S.PaginationWrapper>
//           {currentPage > 1 && (
//             <S.PaginationButton onClick={() => setCurrentPage(currentPage - 1)}>
//               Previous
//             </S.PaginationButton>
//           )}
//           {currentPage < totalPages && (
//             <S.PaginationButton onClick={() => setCurrentPage(currentPage + 1)}>
//               Next
//             </S.PaginationButton>
//           )}
//         </S.PaginationWrapper>
//       </S.Wrapper>
//     </div>
//   );
// };

// export default MyPosts;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import MyPostsList from '../../../components/Community/MyPostsList/MyPostsList';
// import NewTopBar from '../../../components/TopBar/NewTopBar';
// import * as S from './MyPosts.Style';
// import axiosInstance from '../../../libs/AxiosInstance';

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

// const MyPosts = () => {
//   const navigate = useNavigate();
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(0);
//   const [size, setSize] = useState<number>(10);

//   // API 요청을 통해 내가 쓴 글 가져오기
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axiosInstance.get(
//           `/api/post/user?page=${currentPage}&size=${size}`,
//         );
//         const data: PaginatedPosts = response.data;
//         setPosts(data.contents);
//         setTotalPages(data.totalPages);
//       } catch (error) {
//         console.error('Error fetching posts', error);
//       }
//     };

//     fetchPosts();
//   }, [currentPage, size]);

//   return (
//     <S.Wrapper>
//       <S.TitleWrapper>
//         <NewTopBar title="내가 쓴 글" />
//       </S.TitleWrapper>
//       <S.PostContainer>
//         {/* 데이터가 있을 때만 MyPostsList 렌더링 */}
//         {posts.length > 0 ? (
//           <MyPostsList posts={posts} />
//         ) : (
//           <p>작성한 글이 없습니다.</p>
//         )}
//       </S.PostContainer>
//     </S.Wrapper>
//   );
// };

// export default MyPosts;

// MyPosts.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyPostsList from '../../../components/Community/MyPostsList/MyPostsList';
import NewTopBar from '../../../components/TopBar/NewTopBar';
import * as S from './MyPosts.Style';
import axiosInstance from '../../../libs/AxiosInstance';

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

const MyPosts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [size, setSize] = useState<number>(10);

  // API 요청을 통해 내가 쓴 글 가져오기
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/post/user?page=${currentPage}&size=${size}`,
        );
        const data: PaginatedPosts = response.data;
        setPosts(data.contents);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching posts', error);
      }
    };

    fetchPosts();
  }, [currentPage, size]);

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <NewTopBar title="내가 쓴 글" />
      </S.TitleWrapper>
      <S.CommuniyContainer>
        <S.PostContainer>
          {/* 데이터가 있을 때만 MyPostsList 렌더링 */}
          {posts.length > 0 ? (
            <MyPostsList posts={posts} />
          ) : (
            <p>작성한 글이 없습니다.</p>
          )}
        </S.PostContainer>
      </S.CommuniyContainer>
    </S.Wrapper>
  );
};

export default MyPosts;
