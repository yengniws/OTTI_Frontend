import React from 'react';
import * as S from './CommentList.Style';
import { timeAgo } from '../../../utils/timeAgo';

// 댓글 작성자의 정보
interface CommentUserInfo {
  userName: string;
  userprofilePhotoUrl: string;
}

// 댓글 데이터를 나타내는 인터페이스
interface Comment {
  id: number;
  text: string;
  createdDate: string;
  userInfo: CommentUserInfo;
}

// CommentList 컴포넌트의 props 인터페이스
interface CommentListProps {
  comments: Comment[]; // 여러 개의 댓글 데이터
}

// 기본 프로필 이미지 URL
const defaultProfileImage =
  'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/otti-image/otti.png';

// 댓글 목록을 렌더링
const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <S.ListContainer>
      {comments.map((comment) => (
        // 각 댓글 아이템을 고유한 id로 렌더링
        <S.CommentItem key={comment.id}>
          <S.ProfileWrapper>
            <S.ProfilePicture
              src={comment.userInfo.userprofilePhotoUrl || defaultProfileImage}
              alt="Profile"
            />
          </S.ProfileWrapper>
          <S.CommentWrapper>
            <S.Nickname>{comment.userInfo.userName}</S.Nickname>
            <S.Content>{comment.text}</S.Content>
            <S.CreatedAt>{timeAgo(comment.createdDate)}</S.CreatedAt>
          </S.CommentWrapper>
        </S.CommentItem>
      ))}
    </S.ListContainer>
  );
};

export default CommentList;
