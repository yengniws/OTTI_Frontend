import React, { useState } from 'react';
import * as S from './CommentDetail.Style';
import CommunityPost from '../../../components/Community/CommunityPost/CommunityPost';
import AddComment from '../../../components/Community/Comment/AddComment';
import CommentList from '../../../components/Community/Comment/CommentList';
import JoinBtn from '../../../components/common/JoinBtn/JoinBtn';
import TopBar from '../../../components/TopBar/NewTopBar';

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
        <TopBar title="커뮤니티" />
      </S.TitleWrapper>
      <S.CommunityPostWrapper>
        <CommunityPost
          author="닉네임1"
          createdAt="3분 전"
          title="넷플릭스 1자리 구해요"
          content="프리미엄 요금제 1명 자리 남았습니다. 저희는 현재 3명이 함께 이용 중이며, 넷플릭스의 프리미엄 요금제를 공유하고 있습니다. 한 달에 4,500원의 비용으로 고화질 스트리밍을 즐기실 수 있습니다. 관심 있으신 분은 댓글이나 쪽지로 연락 주세요!"
        />

        <JoinBtn text="참여하기" />
      </S.CommunityPostWrapper>

      {/* 댓글 추가 기능 */}
      <AddComment onAddComment={handleAddComment} />

      {/* 댓글 리스트 */}
      <CommentList comments={comments} />
    </S.Container>
  );
};

export default CommunityDetail;
