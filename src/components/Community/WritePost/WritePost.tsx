// import React, { useState } from 'react';
// import * as S from './WritePost.Style';

// const WritePost: React.FC = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   return (
//     <S.WritePost>
//       <S.TitleWrapper>
//         <S.Input
//           placeholder="제목을 입력하세요"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </S.TitleWrapper>
//       {/* <S.TextWrapper> */}
//       <S.TextArea
//         placeholder="내용을 입력하세요"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       />
//       {/* </S.TextWrapper> */}
//     </S.WritePost>
//   );
// };

// export default WritePost;

// import React, { useState } from 'react';
// import axios from 'axios';
// import * as S from './WritePost.Style';

// const WritePost: React.FC = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [images, setImages] = useState<File[]>([]); // 이미지 업로드를 위한 상태 추가
//   const [potId, setPotId] = useState<number | null>(null); // potId 상태 추가

//   // 게시글 데이터를 서버에 전송하기 위한 로직
//   const handleRegister = async (access_token: string) => {
//     if (!title || !content || potId === null) {
//       alert('모든 필드를 입력해 주세요.');
//       return;
//     }

//     // PostRequestDto에 맞는 데이터 생성
//     const postData = {
//       title,
//       content,
//       images: images.map((_, index) => index), // 이미지 배열을 Long 타입의 인덱스 리스트로 변환
//       potId,
//     };

//     try {
//       // 서버로 POST 요청
//       await axios.post('/api/post', postData, {
//         headers: {
//           Authorization: `Bearer ${access_token}`, // access_token을 헤더에 추가
//         },
//       });
//       alert('게시글이 성공적으로 저장되었습니다.');
//       // 성공 시 입력 필드 초기화
//       setTitle('');
//       setContent('');
//       setImages([]);
//       setPotId(null);
//     } catch (error) {
//       console.error('게시글 저장에 실패했습니다.', error);
//       alert('게시글 저장에 실패했습니다.');
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
//     </S.WritePost>
//   );
// };

// export default WritePost;

// import React, { forwardRef, useImperativeHandle, useState } from 'react';
// import * as S from './WritePost.Style';
// import { BsFillImageFill } from 'react-icons/bs';

// export interface WritePostHandle {
//   title: string;
//   content: string;
//   potId: number | null;
// }

// const WritePost = forwardRef<WritePostHandle>((_, ref) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [potId, setPotId] = useState<number | null>(null);

//   useImperativeHandle(ref, () => ({
//     title,
//     content,
//     potId,
//   }));

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
//         <BsFillImageFill size="30px" color="#c9c9c9" />
//       </S.ImageWrapper>
//     </S.WritePost>
//   );
// });

// export default WritePost;

import React, { forwardRef, useImperativeHandle, useState } from 'react';
import * as S from './WritePost.Style';
import { BsFillImageFill } from 'react-icons/bs';

export interface WritePostHandle {
  title: string;
  content: string;
  potId: number | null;
}

const WritePost = forwardRef<WritePostHandle>((_, ref) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [potId, setPotId] = useState<number | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => ({
    title,
    content,
    potId,
  }));

  const handleImageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setImages(Array.from(files)); // Update the state with selected images
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
      {/* Optional: Display selected images */}
      {images.length > 0 && (
        <S.ImagePreview>
          {images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`preview ${index}`}
              style={{ width: '100px', height: '100px', margin: '5px' }}
            />
          ))}
        </S.ImagePreview>
      )}
    </S.WritePost>
  );
});

export default WritePost;
