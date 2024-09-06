// import React, { useState } from 'react';
// import * as S from './CommentDetail.Style';
// import CommunityPost from '../../../components/Community/CommunityPost/CommunityPost';
// import AddComment from '../../../components/Community/Comment/AddComment';
// import CommentList from '../../../components/Community/Comment/CommentList';
// import JoinBtn from '../../../components/common/JoinBtn/JoinBtn';
// import NewTopBar from '../../../components/TopBar/NewTopBar';

// interface Comment {
//   id: number;
//   username: string;
//   content: string;
//   // createdAt: string;
// }

// const CommunityDetail: React.FC = () => {
//   const [comments, setComments] = useState<Comment[]>([]);

//   // 댓글 추가 함수
//   const handleAddComment = (content: string) => {
//     const newComment: Comment = {
//       id: comments.length + 1,
//       username: '닉네임',
//       content,
//     };
//     setComments([...comments, newComment]);
//   };

//   return (
//     <S.Container>
//       <S.TitleWrapper>
//         <NewTopBar title="커뮤니티" />
//       </S.TitleWrapper>
//       <S.PageWrapper>
//         <S.CommunityPostWrapper>
//           <CommunityPost
//             username="닉네임1"
//             createdAt="3분 전"
//             title="넷플릭스 1자리 구해요"
//             content="프리미엄 요금제 1명 자리 남았습니다. "
//           />

//           <JoinBtn text="참여하기" />
//         </S.CommunityPostWrapper>

//         <AddComment onAddComment={handleAddComment} />

//         <CommentList comments={comments} />
//       </S.PageWrapper>
//     </S.Container>
//   );
// };

// export default CommunityDetail;

import React, { useState } from 'react';
import * as S from './CommunityDetail.Style';
import CommunityPost from '../../../components/Community/CommunityPost/CommunityPost';
import AddComment from '../../../components/Community/Comment/AddComment';
import CommentList from '../../../components/Community/Comment/CommentList';
import JoinBtn from '../../../components/common/JoinBtn/JoinBtn';
import NewTopBar from '../../../components/TopBar/NewTopBar';

interface Comment {
  id: number;
  username: string;
  content: string;
  createdAt: string;
  profilePhotoUrl: string; // Added this property
}

const CommunityDetail: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  // 댓글 추가 함수
  const handleAddComment = (content: string) => {
    const newComment: Comment = {
      id: comments.length + 1,
      username: '닉네임',
      content,
      createdAt: new Date().toISOString(),
      profilePhotoUrl: 'defaultProfilePhotoUrl',
    };
    setComments([...comments, newComment]);
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <NewTopBar title="커뮤니티" />
      </S.TitleWrapper>
      <S.PageWrapper>
        <S.CommunityPostWrapper>
          <CommunityPost
            username="닉네임1"
            createdAt="3분 전"
            title="넷플릭스 1자리 구해요"
            content="프리미엄 요금제 1명 자리 남았습니다. "
          />

          <JoinBtn text="참여하기" />
        </S.CommunityPostWrapper>

        <AddComment onAddComment={handleAddComment} />

        <CommentList comments={comments} />
      </S.PageWrapper>
    </S.Container>
  );
};

export default CommunityDetail;
