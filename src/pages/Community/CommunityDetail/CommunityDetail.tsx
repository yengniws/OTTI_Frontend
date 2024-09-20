// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axiosInstance from '../../../libs/AxiosInstance';
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

// interface Post {
//   id: number;
//   username: string;
//   createdAt: string;
//   title: string;
//   content: string;
//   potId: number; // potId 추가 -> 해당하는 팟에 대한 정보 가져오기
//   comments: Comment[];
// }

// const defaultProfileImage =
//   'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/otti-image/otti.png';

// const CommunityDetail: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const [post, setPost] = useState<Post | null>(null);
//   const [comments, setComments] = useState<Comment[]>([]);
//   const postId = Number(id);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await axiosInstance.get(`/api/post/${postId}`);
//         setPost(response.data);
//         setComments(response.data.comments || []);
//       } catch (error) {
//         console.error('Failed to fetch post', error);
//       }
//     };

//     if (postId) {
//       fetchPost();
//     }
//   }, [postId]);

//   const handleAddComment = async (content: string) => {
//     try {
//       const response = await axiosInstance.post('/api/post/comment', {
//         text: content,
//         post: postId,
//       });

//       const newComment = {
//         id: response.data.id,
//         username: response.data.userName.userName,
//         content: response.data.text,
//         createdAt: response.data.createdDate,
//         profilePhotoUrl:
//           response.data.userName.userprofilePhotoUrl || defaultProfileImage,
//       };

//       setComments([...comments, newComment]);
//     } catch (error) {
//       console.error('Failed to add comment', error);
//     }
//   };

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <S.Container>
//       <S.TitleWrapper>
//         <NewTopBar title="커뮤니티" />
//       </S.TitleWrapper>
//       <S.PageWrapper>
//         <S.CommunityPostWrapper>
//           <CommunityPost
//             postId={postId}
//             // userName={post.username}
//             // createdAt={post.createdAt}
//             // title={post.title}
//             // content={post.content}
//           />
//           <JoinBtn potId={post.potId} />
//         </S.CommunityPostWrapper>
//         <AddComment postId={postId} onAddComment={handleAddComment} />
//         {/* <CommentList comments={comments} /> */}
//         <CommentList comments={comments} />
//       </S.PageWrapper>
//     </S.Container>
//   );
// };

// export default CommunityDetail;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axiosInstance from '../../../libs/AxiosInstance';
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

// interface Post {
//   id: number;
//   username: string;
//   createdAt: string;
//   title: string;
//   content: string;
//   potId: number;
//   comments: Comment[];
//   viewCount: number;
// }

// const defaultProfileImage =
//   'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/otti-image/otti.png';

// const CommunityDetail = () => {
//   const { id } = useParams<{ id: string }>();
//   const [post, setPost] = useState<Post | null>(null);
//   const [comments, setComments] = useState<Comment[]>([]);
//   const postId = Number(id);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         // 게시글 데이터 가져오기
//         const response = await axiosInstance.get(`/api/post/${postId}`);
//         setPost(response.data);
//         setComments(response.data.comments || []);

//         // 조회수 증가 요청 - 컴포넌트가 처음 로드될 때 한 번만 호출되도록
//         await axiosInstance.post(`/api/post/${postId}/view`);
//       } catch (error) {
//         console.error('Failed to fetch post', error);
//         console.error('Failed to fetch post', error.response?.data || error.message);
//       }
//     };

//     if (postId) {
//       fetchPost();
//     }
//   }, [postId]); // postId가 변경될 때만 호출

//   const handleAddComment = async (content: string) => {
//     try {
//       const response = await axiosInstance.post('/api/post/comment', {
//         text: content,
//         post: postId,
//       });

//       const newComment = {
//         id: response.data.id,
//         username: response.data.userName.userName,
//         content: response.data.text,
//         createdAt: response.data.createdDate,
//         profilePhotoUrl:
//           response.data.userName.userprofilePhotoUrl || defaultProfileImage,
//       };

//       setComments([...comments, newComment]);
//     } catch (error) {
//       console.error('Failed to add comment', error);
//     }
//   };

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <S.Container>
//       <S.TitleWrapper>
//         <NewTopBar title="커뮤니티" />
//       </S.TitleWrapper>
//       <S.PageWrapper>
//         <S.CommunityPostWrapper>
//           <CommunityPost
//             postId={postId}
//             userName={post.username}
//             createdAt={post.createdAt}
//             title={post.title}
//             content={post.content}
//             viewCount={post.viewCount}  {/* 조회수 표시 */}
//           />
//           {/* post의 potId를 JoinBtn에 전달 */}
//           <JoinBtn potId={post.potId} />
//         </S.CommunityPostWrapper>
//         <AddComment postId={postId} onAddComment={handleAddComment} />
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
import NewTopBar from '../../../components/TopBar/NewTopBar';

interface CommentUserInfo {
  userName: string;
  userprofilePhotoUrl: string;
}

interface Comment {
  id: number;
  text: string;
  userName: CommentUserInfo;
  createdDate: string;
}

interface Post {
  id: number;
  username: string;
  createdAt: string;
  title: string;
  content: string;
  potId: number;
  comments: Comment[];
}

const defaultProfileImage =
  'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/otti-image/otti.png';

const CommunityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const postId = Number(id);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosInstance.get(`/api/post/${postId}`);
        setPost(response.data);
        setComments(response.data.comments || []);
      } catch (error) {
        console.error('Failed to fetch post', error);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  const handleAddComment = async (content: string) => {
    try {
      const response = await axiosInstance.post('/api/post/comment', {
        text: content,
        post: postId,
      });

      const newComment = {
        id: response.data.id,
        text: response.data.text,
        userName: {
          userName: response.data.userName.userName,
          userprofilePhotoUrl:
            response.data.userName.userprofilePhotoUrl || defaultProfileImage,
        },
        createdDate: response.data.createdDate,
      };

      setComments([...comments, newComment]);
    } catch (error) {
      console.error('Failed to add comment', error);
    }
  };

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
          <CommunityPost postId={postId} />
          <JoinBtn potId={post.potId} />
        </S.CommunityPostWrapper>
        <AddComment postId={postId} onAddComment={handleAddComment} />
        <CommentList comments={comments} />
      </S.PageWrapper>
    </S.Container>
  );
};

export default CommunityDetail;
