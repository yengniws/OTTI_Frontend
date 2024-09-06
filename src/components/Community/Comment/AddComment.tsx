import React, { useState } from 'react';
import * as S from './AddComment.Style';

interface AddCommentProps {
  onAddComment: (comment: string) => void;
}

const AddComment: React.FC<AddCommentProps> = ({ onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim()) {
      onAddComment(comment);
      setComment('');
    }
  };

  return (
    <S.Container>
      <S.Input
        type="text"
        value={comment}
        onChange={handleInputChange}
        placeholder="댓글을 입력하세요..."
      />
      <S.Button onClick={handleAddComment}>댓글 추가</S.Button>
    </S.Container>
  );
};

export default AddComment;
