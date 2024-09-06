// // import React from 'react';
// // import * as S from './Community.Style';
// // import { FaComment } from 'react-icons/fa';

// // interface CommunityItem {
// //   id: number;
// //   platform: string;
// //   title: string;
// //   desc: string;
// //   author: string;
// //   createdAt: string;
// //   commentCount: number;
// // }

// // const CommunityList: React.FC = () => {
// //   const data: CommunityItem[] = [
// //     {
// //       id: 1,
// //       platform: '넷플릭스',
// //       title: '넷플릭스 1자리 구해요',
// //       desc: '프리미엄 요금제 1명 자리 남...',
// //       author: '유저2',
// //       createdAt: '3분전',
// //       commentCount: 3,
// //     },
// //     // ... 다른 아이템들
// //   ];

// //   return (
// //     <S.ListCont>
// //       {data.map((item) => (
// //         <S.ListItem key={item.id}>
// //           <S.ImgWrapper>
// //             <S.PlatformImg
// //               src={`/assets/${item.platform.toLowerCase()}.png`}
// //               alt={item.platform}
// //             />
// //           </S.ImgWrapper>
// //           <S.ContentWrapper>
// //             <S.Title>{item.title}</S.Title>
// //             <S.Author>{item.author}</S.Author>
// //             <S.CreatedAt>{item.createdAt}</S.CreatedAt>
// //             <S.Description>{item.desc}</S.Description>
// //           </S.ContentWrapper>
// //           <S.CommentWrapper>
// //             <FaComment />
// //             <S.CommentCount>{item.commentCount}</S.CommentCount>
// //           </S.CommentWrapper>
// //         </S.ListItem>
// //       ))}
// //     </S.ListCont>
// //   );
// // };

// // export default CommunityList;

// // import React from 'react';
// // import * as S from './Community.Style';
// // import { FaRegComment } from 'react-icons/fa';

// // interface CommunityItem {
// //   id: number;
// //   platform: string;
// //   title: string;
// //   desc: string;
// //   author: string;
// //   createdAt: string;
// //   commentCount: number;
// // }

// // const CommunityList: React.FC = () => {
// //   const data: CommunityItem[] = [
// //     {
// //       id: 1,
// //       platform: '넷플릭스',
// //       title: '넷플릭스 1자리 구해요',
// //       desc: '프리미엄 요금제 1명 자리 남았습니다. 저희는 현재 3명이 함께 이용 중이며, 넷플릭스의 프리미엄 요금제를 공유하고 있습니다. 한 달에 4,500원의 비용으로 고화질 스트리밍을 즐기실 수 있습니다. 관심 있으신 분은 댓글이나 쪽지로 연락 주세요!',
// //       author: '닉네임1',
// //       createdAt: '3분전',
// //       commentCount: 3,
// //     },
// //     {
// //       id: 2,
// //       platform: '왓챠',
// //       title: '왓챠 1자리 구해요',
// //       desc: '프리미엄 요금제 1명 자리 남았습니다. 저희는 현재 3명이 함께 이용 중이며, 넷플릭스의 프리미엄 요금제를 공유하고 있습니다. 한 달에 4,500원의 비용으로 고화질 스트리밍을 즐기실 수 있습니다. 관심 있으신 분은 댓글이나 쪽지로 연락 주세요!',
// //       author: '닉네임2',
// //       createdAt: '5분전',
// //       commentCount: 4,
// //     },
// //   ];

// //   return (
// //     <S.ListCont>
// //       {data.map((item) => (
// //         <S.ListItem key={item.id}>
// //           <S.ImgWrapper>
// //             <S.PlatformImg
// //               src={`/assets/${item.platform.toLowerCase()}.png`}
// //               alt={item.platform}
// //             />
// //           </S.ImgWrapper>
// //           <S.ContentWrapper>
// //             <S.Title>{item.title}</S.Title>
// //             <S.MetaInfo>
// //               <S.Author>{item.author}</S.Author>
// //               <S.CreatedAt>{item.createdAt}</S.CreatedAt>
// //             </S.MetaInfo>
// //             <S.Description>{item.desc}</S.Description>
// //           </S.ContentWrapper>
// //           <S.CommentWrapper>
// //             <FaRegComment />
// //             <S.CommentCount>{item.commentCount}</S.CommentCount>
// //           </S.CommentWrapper>
// //         </S.ListItem>
// //       ))}
// //     </S.ListCont>
// //   );
// // };

// // export default CommunityList;

// import React from 'react';
// import * as S from './Community.Style';
// import { FaRegComment } from 'react-icons/fa';

// interface CommunityItem {
//   id: number;
//   platform: string;
//   title: string;
//   desc: string;
//   author: string;
//   createdAt: string;
//   commentCount: number;
// }

// const CommunityList: React.FC = () => {
//   const data: CommunityItem[] = [
//     {
//       id: 1,
//       platform: '넷플릭스',
//       title: '넷플릭스 1자리 구해요',
//       desc: '프리미엄 요금제 1명 자리 남았습니다. 저희는 현재 3명이 함께 이용 중이며, 넷플릭스의 프리미엄 요금제를 공유하고 있습니다. 한 달에 4,500원의 비용으로 고화질 스트리밍을 즐기실 수 있습니다. 관심 있으신 분은 댓글이나 쪽지로 연락 주세요!',
//       author: '닉네임1',
//       createdAt: '3분전',
//       commentCount: 3,
//     },
//     {
//       id: 2,
//       platform: '왓챠',
//       title: '왓챠 1자리 구해요',
//       desc: '프리미엄 요금제 1명 자리 남았습니다. 저희는 현재 3명이 함께 이용 중이며, 왓챠의 프리미엄 요금제를 공유하고 있습니다. 한 달에 4,500원의 비용으로 고화질 스트리밍을 즐기실 수 있습니다. 관심 있으신 분은 댓글이나 쪽지로 연락 주세요!',
//       author: '닉네임2',
//       createdAt: '5분전',
//       commentCount: 4,
//     },
//   ];

//   return (
//     <S.ListContainer>
//       {data.map((item) => (
//         <S.ListItemWrapper key={item.id}>
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
//                   <S.Author>{item.author}</S.Author>
//                   <S.CreatedAt>{item.createdAt}</S.CreatedAt>
//                 </S.MetaInfo>
//                 <S.Description>{item.desc}</S.Description>
//               </S.ContentWrapper>
//             </S.FlexWrap>
//             <S.CommentWrapper>
//               <FaRegComment />
//               <S.CommentCount>{item.commentCount}</S.CommentCount>
//             </S.CommentWrapper>
//           </S.ListItem>
//         </S.ListItemWrapper>
//       ))}
//     </S.ListContainer>
//   );
// };

// export default CommunityList;

// CommunityList.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Community.Style';
import { FaRegComment } from 'react-icons/fa';

interface CommunityItem {
  id: number;
  platform: string;
  title: string;
  desc: string;
  username: string;
  createdAt: string;
  commentCount: number;
}

const CommunityList: React.FC = () => {
  const navigate = useNavigate();

  const data: CommunityItem[] = [
    {
      id: 1,
      platform: '넷플릭스',
      title: '넷플릭스 1자리 구해요',
      desc: '프리미엄 요금제 1명 자리 남았습니다. 저희는 현재 3명이 함께 이용 중이며, 넷플릭스의 프리미엄 요금제를 공유하고 있습니다. 한 달에 4,500원의 비용으로 고화질 스트리밍을 즐기실 수 있습니다. 관심 있으신 분은 댓글이나 쪽지로 연락 주세요!',
      username: '닉네임1',
      createdAt: '3분전',
      commentCount: 3,
    },
    {
      id: 2,
      platform: '왓챠',
      title: '왓챠 1자리 구해요',
      desc: '프리미엄 요금제 1명 자리 남았습니다. 저희는 현재 3명이 함께 이용 중이며, 왓챠의 프리미엄 요금제를 공유하고 있습니다. 한 달에 4,500원의 비용으로 고화질 스트리밍을 즐기실 수 있습니다. 관심 있으신 분은 댓글이나 쪽지로 연락 주세요!',
      username: '닉네임2',
      createdAt: '5분전',
      commentCount: 4,
    },
  ];

  const handleItemClick = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <S.ListContainer>
      {data.map((item) => (
        <S.ListItemWrapper
          key={item.id}
          onClick={() => handleItemClick(item.id)}
        >
          <S.ListItem>
            <S.FlexWrap>
              <S.ImgWrapper>
                <S.PlatformImg
                  src={`/images/${item.platform}.png`}
                  alt={item.platform}
                />
              </S.ImgWrapper>
              <S.ContentWrapper>
                <S.Title>{item.title}</S.Title>
                <S.MetaInfo>
                  <S.Author>{item.username}</S.Author>
                  <S.CreatedAt>{item.createdAt}</S.CreatedAt>
                </S.MetaInfo>
                <S.Description>{item.desc}</S.Description>
              </S.ContentWrapper>
            </S.FlexWrap>
            <S.CommentWrapper>
              <FaRegComment />
              <S.CommentCount>{item.commentCount}</S.CommentCount>
            </S.CommentWrapper>
          </S.ListItem>
        </S.ListItemWrapper>
      ))}
    </S.ListContainer>
  );
};

export default CommunityList;
