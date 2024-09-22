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

// import React, { useState } from 'react';
// import * as S from './CommunityDetail.Style';
// import CommunityPost from '../../../components/Community/CommunityPost/CommunityPost';
// import AddComment from '../../../components/Community/Comment/AddComment';
// import CommentList from '../../../components/Community/Comment/CommentList';
// import JoinBtn from '../../../components/common/JoinBtn/JoinBtn';
// import NewTopBar from '../../../components/TopBar/NewTopBar';

// interface Comment {
//   id: number;
//   username: string;
//   content: string;
//   createdAt: string;
//   profilePhotoUrl: string;
// }

// const CommunityDetail: React.FC = () => {
//   const [comments, setComments] = useState<Comment[]>([]);

//   // 댓글 추가 함수
//   const handleAddComment = (content: string) => {
//     const newComment: Comment = {
//       id: comments.length + 1,
//       username: '닉네임',
//       content,
//       createdAt: new Date().toISOString(),
//       profilePhotoUrl: 'defaultProfilePhotoUrl',
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

//           <JoinBtn />
//         </S.CommunityPostWrapper>

//         <AddComment onAddComment={handleAddComment} />
//         <CommentList comments={comments} />
//       </S.PageWrapper>
//     </S.Container>
//   );
// };

// export default CommunityDetail;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../libs/AxiosInstance';
import * as S from './CommunityDetail.Style';
import CommunityPost from '../../../components/Community/CommunityPost/CommunityPost';
import AddComment from '../../../components/Community/Comment/AddComment';
import CommentList from '../../../components/Community/Comment/CommentList';
import JoinBtn from '../../../components/common/JoinBtn/JoinBtn';
import NewTopBar from '../../../components/Topbar/NewTopBar';

interface Comment {
  id: number;
  username: string;
  content: string;
  createdAt: string;
  profilePhotoUrl: string;
}

interface Post {
  id: number;
  username: string;
  createdAt: string;
  title: string;
  content: string;
}

const CommunityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // URL에서 postId를 받아옴
  const [post, setPost] = useState<Post | null>(null); // 게시글 데이터를 저장할 상태
  const [comments, setComments] = useState<Comment[]>([]); // 댓글 데이터를 저장할 상태
  const postId = Number(id); // 문자열 postId를 숫자로 변환

  // 게시글 데이터를 API에서 가져오는 함수
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosInstance.get(`/api/post/${postId}`);
        setPost(response.data); // API 응답 데이터를 post 상태에 저장
      } catch (error) {
        console.error('Failed to fetch post', error);
      }
    };

    if (postId) {
      fetchPost(); // postId가 있을 때만 데이터를 가져옴
    }
  }, [postId]);

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

  // 데이터를 불러오는 중일 때 로딩 상태 표시
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <S.Container>
      <S.TitleWrapper>
        <NewTopBar title="커뮤니티" />
      </S.TitleWrapper>
      <S.PageWrapper>
        <S.CommunityPostWrapper>
          {/* 불러온 post 데이터를 CommunityPost에 전달 */}
          <CommunityPost
            postId={postId}
            username={post.username}
            createdAt={post.createdAt}
            title={post.title}
            content={post.content}
          />
          <JoinBtn />
        </S.CommunityPostWrapper>

        <AddComment onAddComment={handleAddComment} />
        <CommentList comments={comments} />
      </S.PageWrapper>
    </S.Container>
  );
};

export default CommunityDetail;
