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
