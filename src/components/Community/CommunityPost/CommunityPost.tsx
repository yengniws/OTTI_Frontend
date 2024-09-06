import React from 'react';
import * as S from './CommunityPost.Style';

interface CommunityPostProps {
  author: string;
  createdAt: string;
  title: string;
  content: string;
}

const CommunityPost: React.FC<CommunityPostProps> = ({
  author,
  createdAt,
  title,
  content,
}) => {
  return (
    <S.PostContainer>
      <S.Header>
        <S.ProfileImg src="/images/default-profile.png" alt="프로필 이미지" />
        <S.AuthorInfo>
          <S.Author>{author}</S.Author>
          <S.CreatedAt>{createdAt}</S.CreatedAt>
        </S.AuthorInfo>
      </S.Header>
      <S.Body>
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
      </S.Body>
    </S.PostContainer>
  );
};

export default CommunityPost;
