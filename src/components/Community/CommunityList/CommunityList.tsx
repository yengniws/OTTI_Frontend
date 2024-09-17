// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import * as S from './Community.Style';
// import { FaRegComment } from 'react-icons/fa';
// import { PiEyesFill } from 'react-icons/pi';

// interface CommunityItem {
//   id: number;
//   platform: string;
//   title: string;
//   desc: string;
//   username: string;
//   createdAt: string;
//   commentCount: number;
//   viewCount: number;
// }

// const CommunityList: React.FC = () => {
//   const navigate = useNavigate();

//   const data: CommunityItem[] = [
//     {
//       id: 1,
//       platform: '넷플릭스',
//       title: '넷플릭스 1자리 구해요',
//       desc: '프리미엄 요금제 1명 자리 남았습니다. 저희는 현재 3명이 함께 이용 중이며, 넷플릭스의 프리미엄 요금제를 공유하고 있습니다. 한 달에 4,500원의 비용으로 고화질 스트리밍을 즐기실 수 있습니다. 관심 있으신 분은 댓글이나 쪽지로 연락 주세요!',
//       username: '닉네임1',
//       createdAt: '3분전',
//       commentCount: 3,
//       viewCount: 33,
//     },
//     {
//       id: 2,
//       platform: '왓챠',
//       title: '왓챠 1자리 구해요',
//       desc: '프리미엄 요금제 1명 자리 남았습니다. 저희는 현재 3명이 함께 이용 중이며, 왓챠의 프리미엄 요금제를 공유하고 있습니다. 한 달에 4,500원의 비용으로 고화질 스트리밍을 즐기실 수 있습니다. 관심 있으신 분은 댓글이나 쪽지로 연락 주세요!',
//       username: '닉네임2',
//       createdAt: '5분전',
//       commentCount: 4,
//       viewCount: 52,
//     },
//   ];

//   const handleItemClick = (id: number) => {
//     navigate(`/detail/${id}`);
//   };

//   return (
//     <S.ListContainer>
//       {data.map((item) => (
//         <S.ListItemWrapper
//           key={item.id}
//           onClick={() => handleItemClick(item.id)}
//         >
//           <S.ListItem>
//             <S.FlexWrap>
//               <S.ImgWrapper>
//                 <S.PlatformImg
//                   src={`/images/${item.platform}.png`}
//                   alt={item.platform}
//                 />
//               </S.ImgWrapper>
//               <S.ContentWrapper>
//                 <S.Title>{item.title}</S.Title>
//                 <S.MetaInfo>
//                   <S.Author>{item.username}</S.Author>
//                   <S.CreatedAt>{item.createdAt}</S.CreatedAt>
//                 </S.MetaInfo>
//                 <S.Description>{item.desc}</S.Description>
//               </S.ContentWrapper>
//             </S.FlexWrap>
//             <S.CommentWrapper>
//               <S.CountWrapper>
//                 <FaRegComment size={13} color="#757575" />
//                 <S.CommentCount>{item.commentCount}</S.CommentCount>
//               </S.CountWrapper>
//               <S.CountWrapper>
//                 <PiEyesFill size={13} color="#757575" />
//                 <S.ViewCount>{item.viewCount}</S.ViewCount>
//               </S.CountWrapper>
//             </S.CommentWrapper>
//           </S.ListItem>
//         </S.ListItemWrapper>
//       ))}
//     </S.ListContainer>
//   );
// };

// export default CommunityList;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import * as S from './Community.Style';
// import { FaRegComment } from 'react-icons/fa';
// import { PiEyesFill } from 'react-icons/pi';
// import { Post } from '../../../pages/Community/types'; // Post 타입 사용

// interface CommunityListProps {
//   posts?: Post[]; // posts를 optional로 설정
// }

// const CommunityList: React.FC<CommunityListProps> = ({ posts = [] }) => {
//   // 기본값을 빈 배열로 설정
//   const navigate = useNavigate();

//   const handleItemClick = (id: number) => {
//     navigate(`/detail/${id}`);
//   };

//   return (
//     <S.ListContainer>
//       {posts.map((post) => (
//         <S.ListItemWrapper
//           key={post.id}
//           onClick={() => handleItemClick(post.id)}
//         >
//           <S.ListItem>
//             <S.FlexWrap>
//               <S.ImgWrapper>
//                 <S.PlatformImg
//                   src={`/images/${post.platform}.png`}
//                   alt={post.platform}
//                 />
//               </S.ImgWrapper>
//               <S.ContentWrapper>
//                 <S.Title>{post.title}</S.Title>
//                 <S.MetaInfo>
//                   <S.Author>{post.author}</S.Author>
//                   <S.CreatedAt>
//                     {new Date(post.createdAt).toLocaleTimeString()}
//                   </S.CreatedAt>
//                 </S.MetaInfo>
//                 <S.Description>{post.content}</S.Description>
//               </S.ContentWrapper>
//             </S.FlexWrap>
//             <S.CommentWrapper>
//               <S.CountWrapper>
//                 <FaRegComment size={13} color="#757575" />
//                 <S.CommentCount>{post.commentCount}</S.CommentCount>
//               </S.CountWrapper>
//               <S.CountWrapper>
//                 <PiEyesFill size={13} color="#757575" />
//                 <S.ViewCount>{post.viewCount}</S.ViewCount>
//               </S.CountWrapper>
//             </S.CommentWrapper>
//           </S.ListItem>
//         </S.ListItemWrapper>
//       ))}
//     </S.ListContainer>
//   );
// };

// export default CommunityList;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Community.Style';
import { FaRegComment } from 'react-icons/fa';
import { PiEyesFill } from 'react-icons/pi';

// Post 타입 정의
export interface Post {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  commentCount: number;
  userName: string;
  ottImage: string;
  createdDate: string;
}

interface CommunityListProps {
  posts: Post[]; // Post 배열을 props로 받음
}

const CommunityList: React.FC<CommunityListProps> = ({ posts = [] }) => {
  const navigate = useNavigate();

  // 게시글 클릭 시 상세 페이지로 이동
  const handleItemClick = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <S.ListContainer>
      {posts.map((post) => (
        <S.ListItemWrapper
          key={post.id}
          onClick={() => handleItemClick(post.id)}
        >
          <S.ListItem>
            <S.FlexWrap>
              <S.ImgWrapper>
                <S.PlatformImg src={post.ottImage} alt="ott-image" />
              </S.ImgWrapper>
              <S.ContentWrapper>
                <S.Title>{post.title}</S.Title>
                <S.MetaInfo>
                  <S.Author>{post.userName}</S.Author>
                  <S.CreatedAt>
                    {new Date(post.createdDate).toLocaleTimeString()}
                  </S.CreatedAt>
                </S.MetaInfo>
                <S.Description>{post.content}</S.Description>
              </S.ContentWrapper>
            </S.FlexWrap>
            <S.CommentWrapper>
              <S.CountWrapper>
                <FaRegComment size={13} color="#757575" />
                <S.CommentCount>{post.commentCount}</S.CommentCount>
              </S.CountWrapper>
              <S.CountWrapper>
                <PiEyesFill size={13} color="#757575" />
                <S.ViewCount>{post.viewCount}</S.ViewCount>
              </S.CountWrapper>
            </S.CommentWrapper>
          </S.ListItem>
        </S.ListItemWrapper>
      ))}
    </S.ListContainer>
  );
};

export default CommunityList;
