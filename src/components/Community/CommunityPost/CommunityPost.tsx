import React, { useEffect, useState } from 'react';
import * as S from './CommunityPost.Style';
import axiosInstance from '../../../libs/AxiosInstance';

interface CommunityPostProps {
  postId: number; // postId를 받아옴
}

interface PostImage {
  id: number;
  imageUrl: string;
}

interface UserInfo {
  userName: string;
  userprofilePhotoUrl: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  images: PostImage[];
  comments: any[]; // 댓글 타입은 추후 정의 가능
  userInfo: UserInfo;
  createdDate: string;
}

const CommunityPost: React.FC<CommunityPostProps> = ({ postId }) => {
  const [post, setPost] = useState<Post | null>(null);

  // API 호출을 통해 postId에 해당하는 게시글 데이터를 가져옴
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosInstance.get(`/api/post/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Failed to fetch post data', error);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  // 데이터가 로드되지 않은 경우 로딩 상태 표시
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <S.PostContainer>
      <S.Header>
        <S.ProfileImg
          src={
            post.userInfo.userprofilePhotoUrl || '/images/default-profile.png'
          }
          alt="프로필 이미지"
        />
        <S.AuthorInfo>
          <S.Author>{post.userInfo.userName}</S.Author>
          <S.CreatedAt>{post.createdDate}</S.CreatedAt>
        </S.AuthorInfo>
      </S.Header>
      <S.Body>
        <S.Title>{post.title}</S.Title>
        <S.Content>{post.content}</S.Content>
        {/* 이미지가 있을 경우에만 렌더링 */}
        {post.images.length > 0 && (
          <S.ImagesWrapper>
            {post.images.map((image) => (
              <img
                key={image.id}
                src={image.imageUrl}
                alt={`Post image ${image.id}`}
                style={{ width: '100%', height: 'auto' }}
              />
            ))}
          </S.ImagesWrapper>
        )}
      </S.Body>
    </S.PostContainer>
  );
};

export default CommunityPost;
