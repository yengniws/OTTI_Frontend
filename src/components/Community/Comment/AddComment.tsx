import React, { useState } from 'react';
import * as S from './AddComment.Style';

interface AddCommentProps {
  postId: number;
  onAddComment: (comment: string) => void;
}

const AddComment: React.FC<AddCommentProps> = ({ postId, onAddComment }) => {
  const [content, setContent] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleAddComment = () => {
    if (content.trim()) {
      onAddComment(content);
      setContent('');
    }
  };

  return (
    <S.Container>
      <S.Input
        type="text"
        value={content}
        onChange={handleInputChange}
        placeholder="댓글 추가"
      />
      <S.AddBtn onClick={handleAddComment}>댓글 추가</S.AddBtn>
    </S.Container>
  );
};

export default AddComment;
