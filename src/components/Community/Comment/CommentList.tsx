import React from 'react';
import * as S from './CommentList.Style';

interface Comment {
  id: number;
  author: string;
  content: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <S.ListContainer>
      {comments.map((comment) => (
        <S.CommentItem key={comment.id}>
          <S.Author>{comment.author}</S.Author>
          <S.Content>{comment.content}</S.Content>
        </S.CommentItem>
      ))}
    </S.ListContainer>
  );
};

export default CommentList;
