import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MyPostsList.Style';

// Post 타입 정의
export interface Post {
  id: number;
  title: string;
  content: string;
  userName: string;
  ottImage: string;
  createdDate: string;
}

interface MyPostsListProps {
  posts: Post[]; // Post 배열을 props로 받음
}

const MyPostsList: React.FC<MyPostsListProps> = ({ posts = [] }) => {
  const navigate = useNavigate();

  // 게시글 클릭 시 상세 페이지로 이동
  const handleItemClick = (id: number) => {
    navigate(`/detail/${id}`);
  };

  // 시간과 분만 표시하는 옵션 설정
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // 24시간 형식 사용
  };

  return (
    <S.ListContainer>
      {posts.map((post) => (
        <S.ListItemWrapper
          key={post.id}
          onClick={() => handleItemClick(post.id)}
        >
          <S.ListItem>
            <S.FlexWrap>
              <S.ImgWrapper>
                <S.PlatformImg src={post.ottImage} alt="ott-image" />
              </S.ImgWrapper>
              <S.ContentWrapper>
                <S.Title>{post.title}</S.Title>
                <S.MetaInfo>
                  <S.Author>{post.userName}</S.Author>
                  <S.CreatedAt>
                    {new Date(post.createdDate).toLocaleTimeString(
                      'en-US',
                      timeOptions,
                    )}
                  </S.CreatedAt>
                </S.MetaInfo>
                <S.Description>{post.content}</S.Description>
              </S.ContentWrapper>
            </S.FlexWrap>
          </S.ListItem>
        </S.ListItemWrapper>
      ))}
    </S.ListContainer>
  );
};

export default MyPostsList;
