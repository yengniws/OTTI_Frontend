// import React, { forwardRef, useImperativeHandle, useState } from 'react';
// import axiosInstance from '../../../libs/AxiosInstance';
// import * as S from './WritePost.Style';
// import { BsFillImageFill } from 'react-icons/bs';

// export interface WritePostHandle {
//   title: string;
//   content: string;
//   images: number[]; // 이미지 ID 배열
// }

// const WritePost = forwardRef<WritePostHandle>((_, ref) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [images, setImages] = useState<File[]>([]);
//   const [imageIds, setImageIds] = useState<number[]>([]); // 이미지 ID 배열
//   const fileInputRef = React.useRef<HTMLInputElement | null>(null);

//   useImperativeHandle(ref, () => ({
//     title,
//     content,
//     images: imageIds, // 이미지 ID 배열을 외부에서 접근 가능하게 함
//   }));

//   const handleImageUpload = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleFileChange = async (
//     event: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     const files = event.target.files;
//     if (files) {
//       const fileArray = Array.from(files);
//       setImages(fileArray);

//       try {
//         const formData = new FormData();
//         fileArray.forEach((file) => formData.append('files', file));

//         const response = await axiosInstance.post('/api/post/image', formData, {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         });

//         const uploadedImageIds = Array.isArray(response.data.image)
//           ? response.data.image
//           : [response.data.image]; // 응답이 문자열일 경우 배열로 변환

//         setImageIds(uploadedImageIds); // 업로드된 이미지 ID를 저장
//       } catch (error) {
//         if (axiosInstance.isAxiosError(error)) {
//           console.error('Error message:', error.message);
//           if (error.response) {
//             console.error('Error data:', error.response.data);
//           }
//         } else {
//           console.error('Unexpected error:', error);
//         }
//       }
//     }
//   };

//   return (
//     <S.WritePost>
//       <S.TitleWrapper>
//         <S.Input
//           placeholder="제목을 입력하세요"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </S.TitleWrapper>
//       <S.TextArea
//         placeholder="내용을 입력하세요"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       />
//       <S.ImageWrapper>
//         <BsFillImageFill
//           size="30px"
//           color="#c9c9c9"
//           onClick={handleImageUpload}
//         />
//         <input
//           type="file"
//           ref={fileInputRef}
//           style={{ display: 'none' }}
//           multiple
//           onChange={handleFileChange}
//         />
//       </S.ImageWrapper>
//       {images.length > 0 && (
//         <S.ImagePreview>
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={URL.createObjectURL(image)}
//               alt={`preview ${index}`}
//               style={{ width: '100px', height: '150px', margin: '5px' }}
//             />
//           ))}
//         </S.ImagePreview>
//       )}
//     </S.WritePost>
//   );
// });

// export default WritePost;

// import React, { forwardRef, useImperativeHandle, useState } from 'react';
// import axiosInstance from '../../../libs/AxiosInstance';
// import * as S from './WritePost.Style';
// import { BsFillImageFill } from 'react-icons/bs';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // WritePostHandle 인터페이스 정의: 외부에서 접근 가능한 제목, 내용, 이미지 ID 배열 제공
// export interface WritePostHandle {
//   title: string;
//   content: string;
//   images: number[]; // 업로드된 이미지 ID 배열
// }

// // WritePost 컴포넌트: forwardRef를 통해 부모 컴포넌트와 상호작용 가능
// const WritePost = forwardRef<WritePostHandle>((_, ref) => {
//   const [title, setTitle] = useState(''); // 제목 상태 관리
//   const [content, setContent] = useState(''); // 내용 상태 관리
//   const [images, setImages] = useState<File[]>([]); // 선택한 이미지 파일들 관리
//   const [imageIds, setImageIds] = useState<number[]>([]); // 업로드된 이미지 ID 배열 관리
//   const fileInputRef = React.useRef<HTMLInputElement | null>(null); // 파일 선택 input 참조

//   // 부모 컴포넌트가 접근할 수 있는 title, content, imageIds 제공
//   useImperativeHandle(ref, () => ({
//     title,
//     content,
//     images: imageIds, // 이미지 ID 배열 외부로 전달
//   }));

//   // 이미지 업로드 핸들러: 클릭 시 파일 선택창 열림
//   const handleImageUpload = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click(); // 숨겨진 파일 input을 클릭하여 파일 선택
//     }
//   };

//   // 파일 선택 시 파일 처리 및 서버로 이미지 업로드 요청
//   const handleFileChange = async (
//     event: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     const files = event.target.files; // 선택된 파일들 가져옴
//     if (files) {
//       const fileArray = Array.from(files); // 파일들을 배열로 변환
//       setImages(fileArray); // 선택된 파일들 상태로 저장

//       try {
//         const formData = new FormData();
//         fileArray.forEach((file) => formData.append('files', file)); // 파일을 FormData에 추가

//         // 서버로 이미지 업로드 요청
//         const response = await axiosInstance.post('/api/post/image', formData, {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         });

//         // 응답으로부터 업로드된 이미지 ID 배열 가져옴
//         const uploadedImageIds = Array.isArray(response.data.image)
//           ? response.data.image
//           : [response.data.image]; // 단일 이미지일 경우 배열로 변환

//         setImageIds(uploadedImageIds); // 업로드된 이미지 ID 배열 상태로 저장
//       } catch (error) {
//         toast.error('이미지 업로드에 실패했습니다.'); // 에러 발생 시 알림 표시
//         console.error('이미지 업로드 실패:', error); // 에러 로그 출력
//       }
//     }
//   };

//   return (
//     <S.WritePost>
//       <S.TitleWrapper>
//         <S.Input
//           placeholder="제목을 입력하세요"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </S.TitleWrapper>

//       <S.TextArea
//         placeholder="내용을 입력하세요"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       />

//       <S.ImageWrapper>
//         <BsFillImageFill
//           size="30px"
//           color="#c9c9c9"
//           onClick={handleImageUpload} // 아이콘 클릭 시 파일 업로드 창 열기
//         />
//         <input
//           type="file"
//           ref={fileInputRef} // 파일 선택 input
//           style={{ display: 'none' }} // 숨겨진 상태
//           multiple // 여러 파일 선택 가능
//           onChange={handleFileChange} // 파일 선택 시 이벤트 처리
//         />
//       </S.ImageWrapper>

//       {images.length > 0 && (
//         <S.ImagePreview>
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={URL.createObjectURL(image)} // 선택된 이미지를 미리보기로 표시
//               alt={`preview ${index}`}
//               style={{ width: '100px', height: '150px', margin: '5px' }}
//             />
//           ))}
//         </S.ImagePreview>
//       )}
//     </S.WritePost>
//   );
// });

// export default WritePost;

import React, { forwardRef, useImperativeHandle, useState } from 'react';
import axiosInstance from '../../../libs/AxiosInstance';
import axios from 'axios'; // Import axios to access isAxiosError
import * as S from './WritePost.Style';
import { BsFillImageFill } from 'react-icons/bs';

export interface WritePostHandle {
  title: string;
  content: string;
  images: number[]; // 이미지 ID 배열
}

const WritePost = forwardRef<WritePostHandle>((_, ref) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [imageIds, setImageIds] = useState<number[]>([]); // 이미지 ID 배열
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => ({
    title,
    content,
    images: imageIds, // 이미지 ID 배열을 외부에서 접근 가능하게 함
  }));

  const handleImageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setImages(fileArray);

      try {
        const formData = new FormData();
        fileArray.forEach((file) => formData.append('files', file));

        const response = await axiosInstance.post('/api/post/image', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        const uploadedImageIds = Array.isArray(response.data.image)
          ? response.data.image
          : [response.data.image]; // 응답이 문자열일 경우 배열로 변환

        setImageIds(uploadedImageIds); // 업로드된 이미지 ID를 저장
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // Use axios for error checking
          console.error('Error message:', error.message);
          if (error.response) {
            console.error('Error data:', error.response.data);
          }
        } else {
          console.error('Unexpected error:', error);
        }
      }
    }
  };

  return (
    <S.WritePost>
      <S.TitleWrapper>
        <S.Input
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </S.TitleWrapper>
      <S.TextArea
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <S.ImageWrapper>
        <BsFillImageFill
          size="30px"
          color="#c9c9c9"
          onClick={handleImageUpload}
        />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          multiple
          onChange={handleFileChange}
        />
      </S.ImageWrapper>
      {images.length > 0 && (
        <S.ImagePreview>
          {images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`preview ${index}`}
              style={{ width: '100px', height: '150px', margin: '5px' }}
            />
          ))}
        </S.ImagePreview>
      )}
    </S.WritePost>
  );
});

export default WritePost;
