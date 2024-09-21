// import React from 'react';
// import * as S from './CommentList.Style';
// import { timeAgo } from '../../../utils/timeAgo';

// interface CommentUserInfo {
//   userName: string;
//   userprofilePhotoUrl?: string;
// }

// interface Comment {
//   id: number;
//   text: string;
//   userName: CommentUserInfo;
//   createdDate: string;
// }

// interface CommentListProps {
//   comments: Comment[];
// }

// const defaultProfileImage =
//   'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/otti-image/otti.png';

// const CommentList: React.FC<CommentListProps> = ({ comments }) => {
//   return (
//     <S.ListContainer>
//       {comments.map((comment) => (
//         <S.CommentItem key={comment.id}>
//           <S.ProfileWrapper>
//             <S.ProfilePicture
//               src={comment.userName.userprofilePhotoUrl || defaultProfileImage}
//               alt="Profile"
//             />
//           </S.ProfileWrapper>
//           <S.CommentWrapper>
//             <S.Nickname>{comment.userName.userName}</S.Nickname>
//             <S.Content>{comment.text}</S.Content>
//             <S.CreatedAt>{timeAgo(comment.createdDate)}</S.CreatedAt>
//           </S.CommentWrapper>
//         </S.CommentItem>
//       ))}
//     </S.ListContainer>
//   );
// };

// export default CommentList;

import React from 'react';
import * as S from './CommentList.Style';
import { timeAgo } from '../../../utils/timeAgo';

interface CommentUserInfo {
  userName: string;
  userprofilePhotoUrl?: string; // Make it optional in case it's not available
}

interface Comment {
  id: number;
  text: string;
  userName: CommentUserInfo;
  createdDate: string;
}

interface CommentListProps {
  comments: Comment[];
}

const defaultProfileImage =
  'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/otti-image/otti.png';

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <S.ListContainer>
      {comments.map((comment) => (
        <S.CommentItem key={comment.id}>
          <S.ProfileWrapper>
            <S.ProfilePicture
              src={comment.userName.userprofilePhotoUrl || defaultProfileImage}
              alt="Profile"
            />
          </S.ProfileWrapper>
          <S.CommentWrapper>
            <S.Nickname>{comment.userName.userName}</S.Nickname>
            <S.Content>{comment.text}</S.Content>
            <S.CreatedAt>{timeAgo(comment.createdDate)}</S.CreatedAt>
          </S.CommentWrapper>
        </S.CommentItem>
      ))}
    </S.ListContainer>
  );
};

export default CommentList;
