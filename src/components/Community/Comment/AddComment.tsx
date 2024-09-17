// import React, { useState } from 'react';
// import * as S from './AddComment.Style';

// interface AddCommentProps {
//   onAddComment: (comment: string) => void;
// }

// const AddComment: React.FC<AddCommentProps> = ({ onAddComment }) => {
//   const [comment, setComment] = useState('');

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setComment(e.target.value);
//   };

//   const handleAddComment = () => {
//     if (comment.trim()) {
//       onAddComment(comment);
//       setComment('');
//     }
//   };

//   return (
//     <S.Container>
//       <S.Input
//         type="text"
//         value={comment}
//         onChange={handleInputChange}
//         placeholder="댓글 추가"
//       />
//       <S.AddBtn onClick={handleAddComment}>댓글 추가</S.AddBtn>
//     </S.Container>
//   );
// };

// export default AddComment;

// import React, { useState } from 'react';
// import axiosInstance from '../../../libs/AxiosInstance'; // axiosInstance를 import합니다.
// import * as S from './AddComment.Style';

// interface AddCommentProps {
//   postId: number; // 게시글의 ID를 받아오기 위해 추가합니다.
//   onAddComment: (comment: string) => void;
// }

// const AddComment: React.FC<AddCommentProps> = ({ postId, onAddComment }) => {
//   const [comment, setComment] = useState('');

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setComment(e.target.value);
//   };

//   const handleAddComment = async () => {
//     if (comment.trim()) {
//       try {
//         // 댓글을 API로 전송합니다.
//         await axiosInstance.post('/api/post/comment', {
//           text: comment,
//           post: postId,
//         });

//         // 댓글 추가 후 부모 컴포넌트에 알립니다.
//         onAddComment(comment);
//         setComment('');
//       } catch (error) {
//         console.error('댓글 추가 실패:', error);
//       }
//     }
//   };

//   return (
//     <S.Container>
//       <S.Input
//         type="text"
//         value={comment}
//         onChange={handleInputChange}
//         placeholder="댓글 추가"
//       />
//       <S.AddBtn onClick={handleAddComment}>댓글 추가</S.AddBtn>
//     </S.Container>
//   );
// };

// export default AddComment;

// import React, { useState } from 'react';
// import axiosInstance from '../../../libs/AxiosInstance'; // axiosInstance를 import합니다.
// import * as S from './AddComment.Style';

// interface AddCommentProps {
//   postId: number; // 게시글의 ID를 받아오기 위해 추가합니다.
//   onAddComment: (comment: string) => void;
// }

// const AddComment: React.FC<AddCommentProps> = ({ postId, onAddComment }) => {
//   const [comment, setComment] = useState('');

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setComment(e.target.value);
//   };

//   const handleAddComment = async () => {
//     if (comment.trim()) {
//       try {
//         const response = await axiosInstance.post('/api/post/comment', {
//           text: comment,
//           post: postId,
//         });

//         // 댓글 추가 후 부모 컴포넌트에 알립니다.
//         onAddComment(comment);
//         setComment('');
//       } catch (error) {
//         console.error('댓글 추가 실패:', error);
//       }
//     }
//   };

//   return (
//     <S.Container>
//       <S.Input
//         type="text"
//         value={comment}
//         onChange={handleInputChange}
//         placeholder="댓글 추가"
//       />
//       <S.AddBtn onClick={handleAddComment}>댓글 추가</S.AddBtn>
//     </S.Container>
//   );
// };

// export default AddComment;

import React, { useState } from 'react';
import axiosInstance from '../../../libs/AxiosInstance'; // axiosInstance를 import합니다.
import * as S from './AddComment.Style';

interface AddCommentProps {
  postId: number; // 게시글의 ID를 받아오기 위해 추가합니다.
  onAddComment: (comment: string) => void;
}

const AddComment: React.FC<AddCommentProps> = ({ postId, onAddComment }) => {
  const [content, setContent] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleAddComment = async () => {
    if (content.trim()) {
      try {
        // 댓글을 API로 전송합니다.
        const response = await axiosInstance.post('/api/post/comment', {
          text: content,
          post: postId,
        });

        // 댓글 추가 후 부모 컴포넌트에 알립니다.
        onAddComment(content);
        setContent('');
      } catch (error) {
        console.error('댓글 추가 실패:', error);
      }
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
