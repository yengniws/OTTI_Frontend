import React, { useState } from 'react';
import * as S from './CommentDetail.Style';
import CommunityPost from '../../../components/Community/CommunityPost/CommunityPost';
import AddComment from '../../../components/Community/Comment/AddComment';
import CommentList from '../../../components/Community/Comment/CommentList';
import JoinBtn from '../../../components/common/JoinBtn/JoinBtn';
import NewTopBar from '../../../components/TopBar/NewTopBar';

interface Comment {
  id: number;
  author: string;
  content: string;
}

const CommunityDetail: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  // 댓글 추가 함수
  const handleAddComment = (content: string) => {
    const newComment: Comment = {
      id: comments.length + 1,
      author: '닉네임',
      content,
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
            author="닉네임1"
            createdAt="3분 전"
            title="넷플릭스 1자리 구해요"
            content="프리미엄 요금제 1명 자리 남았습니다. "
          />

          <JoinBtn text="참여하기" />
        </S.CommunityPostWrapper>

        {/* 댓글 추가 기능 */}
        <AddComment onAddComment={handleAddComment} />

        {/* 댓글 리스트 */}
        <CommentList comments={comments} />
      </S.PageWrapper>
    </S.Container>
  );
};

export default CommunityDetail;
