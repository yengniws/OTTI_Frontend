import React, { useState } from 'react';
import * as S from './AddComment.Style';

interface AddCommentProps {
  postId: number; // 댓글이 달릴 게시물의 ID
  onAddComment: (comment: string) => void; // 댓글 추가 시 호출, 댓글 내용 전달
}

const AddComment: React.FC<AddCommentProps> = ({ postId, onAddComment }) => {
  const [content, setContent] = useState(''); // 댓글 입력 내용 관리

  // 입력 필드가 변경될 때 호출, 입력한 값으로 content 상태 업데이트
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value); // 입력값
  };

  // 댓글 추가 버튼 클릭 시 호출
  const handleAddComment = () => {
    if (content.trim()) {
      onAddComment(content); // 입력된 댓글 내용을 상위 컴포넌트로 전달
      setContent(''); // 댓글 입력 필드 초기화
    }
  };

  return (
    <S.Container>
      <S.Input
        type="text"
        value={content} // 상태에 따른 입력 필드 값 설정
        onChange={handleInputChange} // 입력 변화 감지
        placeholder="댓글을 작성해보세요." // 입력 필드 기본 메시지
      />
      {/* 댓글 추가 버튼 */}
      <S.AddBtn onClick={handleAddComment}>댓글 추가</S.AddBtn>
    </S.Container>
  );
};

export default AddComment;
