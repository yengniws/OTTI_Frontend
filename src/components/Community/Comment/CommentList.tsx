import React from 'react';
import * as S from './CommentList.Style';
import { timeAgo } from '../../../utils/timeAgo';
interface Comment {
  id: number;
  profilePhotoUrl: string;
  username: string;
  content: string;
  createdAt: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <S.ListContainer>
      {comments.map((comment) => (
        <S.CommentItem key={comment.id}>
          <S.ProfileWrapper>
            <S.ProfilePicture src={comment.profilePhotoUrl} alt="Profile" />
          </S.ProfileWrapper>
          <S.CommentWrapper>
            <S.Nickname>{comment.username}</S.Nickname>
            <S.Content>{comment.content}</S.Content>
            {/* <S.CreatedAt>{comment.createdAt}</S.CreatedAt> */}
            <S.CreatedAt>{timeAgo(comment.createdAt)}</S.CreatedAt>
          </S.CommentWrapper>
        </S.CommentItem>
      ))}
    </S.ListContainer>
  );
};

export default CommentList;
