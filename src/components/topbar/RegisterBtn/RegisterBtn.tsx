// import React from 'react';
// import * as S from './RegisterBtn.Style';

// interface RegisterBtnProps {
//   onClick: () => void;
// }

// const RegisterBtn: React.FC<RegisterBtnProps> = ({ onClick }) => {
//   return <S.RegisterBtn onClick={onClick}>등록</S.RegisterBtn>;
// };

// export default RegisterBtn;

// import React from 'react';
// import * as S from './RegisterBtn.Style';

// interface RegisterBtnProps {
//   onRegister: (access_token: string) => void;
// }

// const RegisterBtn: React.FC<RegisterBtnProps> = ({ onRegister }) => {
//   const handleClick = () => {
//     const access_token = 'YOUR_ACCESS_TOKEN_HERE'; // 실제 access_token을 가져와 사용
//     onRegister(access_token); // Register 버튼 클릭 시 handleRegister 호출
//   };

//   return <S.RegisterBtn onClick={handleClick}>등록</S.RegisterBtn>;
// };

// export default RegisterBtn;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../../libs/AxiosInstance';
// import * as S from './RegisterBtn.Style';

// const RegisterBtn: React.FC = () => {
//   const navigate = useNavigate();

//   const handleClick = async () => {
//     try {
//       // POST 요청을 /api/post로 보냄
//       await axiosInstance.post('/api/post', {
//         // 필요한 데이터 추가
//       });

//       // 성공적으로 등록된 후, community 페이지로 이동
//       navigate('/community');
//     } catch (error) {
//       console.error('등록 실패:', error);
//     }
//   };

//   return <S.RegisterBtn onClick={handleClick}>등록</S.RegisterBtn>;
// };

// export default RegisterBtn;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../../libs/AxiosInstance';
// import * as S from './RegisterBtn.Style';

// interface RegisterBtnProps {
//   getPostData: () => {
//     title: string;
//     content: string;
//     images: FormData;
//     potId: number | null;
//   } | null;
// }

// const RegisterBtn: React.FC<RegisterBtnProps> = ({ getPostData }) => {
//   const navigate = useNavigate();

//   const handleClick = async () => {
//     const postData = getPostData();
//     if (!postData) return;

//     try {
//       const { title, content, images, potId } = postData;

//       // Upload images first
//       const imageResponse = await axiosInstance.post(
//         '/api/post/image',
//         images,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         },
//       );

//       const imageUrls = imageResponse.data;

//       // Post data with image URLs
//       const dataToPost = {
//         title,
//         content,
//         images: imageUrls,
//         potId,
//       };

//       await axiosInstance.post('/api/post', dataToPost);

//       alert('게시글이 성공적으로 저장되었습니다.');
//       navigate('/community');
//     } catch (error) {
//       console.error('게시글 저장에 실패했습니다.', error);
//       alert('게시글 저장에 실패했습니다.');
//     }
//   };

//   return <S.RegisterBtn onClick={handleClick}>등록</S.RegisterBtn>;
// };

// export default RegisterBtn;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../../libs/AxiosInstance';
// import * as S from './RegisterBtn.Style';

// interface RegisterBtnProps {
//   getPostData: () => {
//     title: string;
//     content: string;
//     images: FormData | null;
//     potId: number;
//   } | null;
// }

// const RegisterBtn: React.FC<RegisterBtnProps> = ({ getPostData }) => {
//   const navigate = useNavigate();

//   const handleClick = async () => {
//     const postData = getPostData();
//     if (!postData) return;

//     const { title, content, images, potId } = postData;

//     try {
//       let imageUrls: number[] = [];

//       if (images) {
//         // Try uploading images
//         try {
//           const imageResponse = await axiosInstance.post(
//             '/api/post/image',
//             images,
//             {
//               headers: { 'Content-Type': 'multipart/form-data' },
//             },
//           );

//           imageUrls = imageResponse.data;
//         } catch (imageError) {
//           console.error('이미지 업로드 실패:', imageError);
//         }
//       }

//       // Try posting the data
//       await axiosInstance.post('/api/post', {
//         title,
//         content,
//         images: imageUrls,
//         potId,
//       });

//       alert('게시글이 성공적으로 저장되었습니다.');
//       navigate('/community');
//     } catch (error) {
//       console.error('게시글 저장에 실패했습니다.', error);
//       alert('게시글 저장에 실패했습니다.');
//     }
//   };

//   return <S.RegisterBtn onClick={handleClick}>등록</S.RegisterBtn>;
// };

// export default RegisterBtn;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../../libs/AxiosInstance';
// import * as S from './RegisterBtn.Style';

// interface RegisterBtnProps {
//   getPostData: () => Promise<{
//     title: string;
//     content: string;
//     images: number[]; // Use number array for image IDs
//     potId: number;
//   } | null>;
// }

// const RegisterBtn: React.FC<RegisterBtnProps> = ({ getPostData }) => {
//   const navigate = useNavigate();

//   const handleClick = async () => {
//     const postData = await getPostData();
//     if (!postData) return;

//     const { title, content, images, potId } = postData;

//     try {
//       await axiosInstance.post('/api/post', {
//         title,
//         content,
//         images, // Send image IDs
//         potId,
//       });

//       alert('게시글이 성공적으로 저장되었습니다.');
//       navigate('/community');
//     } catch (error) {
//       console.error('게시글 저장에 실패했습니다.', error);
//       alert('게시글 저장에 실패했습니다.');
//     }
//   };

//   return <S.RegisterBtn onClick={handleClick}>등록</S.RegisterBtn>;
// };

// export default RegisterBtn;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../libs/AxiosInstance';
import * as S from './RegisterBtn.Style';

interface RegisterBtnProps {
  getPostData: () => {
    title: string;
    content: string;
    images: FormData | null;
    potId: number;
  } | null;
}

const RegisterBtn: React.FC<RegisterBtnProps> = ({ getPostData }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    const postData = getPostData();
    if (!postData) return;

    const { title, content, images, potId } = postData;

    try {
      let imageUrls: number[] = [];

      if (images) {
        // Try uploading images
        try {
          const imageResponse = await axiosInstance.post(
            '/api/post/image',
            images,
            {
              headers: { 'Content-Type': 'multipart/form-data' },
            },
          );
          imageUrls = imageResponse.data;
        } catch (imageError) {
          console.error('이미지 업로드 실패:', imageError);
          alert('이미지 업로드에 실패했습니다. 다시 시도해주세요.');
          return;
        }
      }

      // Try posting the data
      try {
        await axiosInstance.post('/api/post', {
          title,
          content,
          images,
          potId,
        });
        alert('게시글이 성공적으로 저장되었습니다.');
        navigate('/community');
      } catch (postError) {
        console.error('게시글 저장에 실패했습니다.', postError);
        alert('게시글 저장에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      alert('예기치 않은 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return <S.RegisterBtn onClick={handleClick}>등록</S.RegisterBtn>;
};

export default RegisterBtn;
