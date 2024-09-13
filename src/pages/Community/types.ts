export interface Post {
  id: number;
  platform: string; // 플랫폼 이름 (예: 넷플릭스, 왓챠 등)
  title: string; // 게시물 제목
  content: string; // 게시물 내용 (desc에 해당)
  author: string; // 작성자 이름 (username에 해당)
  createdAt: string; // 작성 시간
  commentCount: number; // 댓글 수
  viewCount: number; // 조회수
}
