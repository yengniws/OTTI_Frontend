import React from 'react';
import * as S from './CommunityPost.Style';

interface CommunityPostProps {
  username: string;
  createdAt: string;
  title: string;
  content: string;
}

const CommunityPost: React.FC<CommunityPostProps> = ({
  username,
  createdAt,
  title,
  content,
}) => {
  return (
    <S.PostContainer>
      <S.Header>
        <S.ProfileImg src="/images/default-profile.png" alt="프로필 이미지" />
        <S.AuthorInfo>
          <S.Author>{username}</S.Author>
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
