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
        placeholder="댓글 추가"
      />
      <S.AddBtn onClick={handleAddComment}>댓글 추가</S.AddBtn>
    </S.Container>
  );
};

export default AddComment;

// import React, { useState } from 'react';
// import * as S from './AddComment.Style';

// interface AddCommentProps {
//   onAddComment: (comment: string, createdAt: string) => void;
// }

// const AddComment: React.FC<AddCommentProps> = ({ onAddComment }) => {
//   const [comment, setComment] = useState('');

//   // Input에 대한 onChange 핸들러
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setComment(e.target.value);
//   };

//   // 댓글 추가 버튼 클릭 시 호출되는 함수
//   const handleAddComment = () => {
//     if (comment.trim()) {
//       const now = new Date().toLocaleString(); // 현재 시각을 가져옵니다.
//       onAddComment(comment, now); // 댓글과 생성 시각을 전달합니다.
//       setComment('');
//     }
//   };

//   return (
//     <S.Container>
//       <S.Input
//         type="text"
//         value={comment}
//         onChange={handleInputChange} // 핸들러 타입 맞춤
//         placeholder="댓글 추가"
//       />
//       <S.AddBtn onClick={handleAddComment}>댓글 추가</S.AddBtn>
//     </S.Container>
//   );
// };

// export default AddComment;
