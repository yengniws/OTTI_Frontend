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
  const [imageIds, setImageIds] = useState<number[]>([]);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  // 콘솔로 images 상태를 추적
  console.log('현재 이미지 IDs:', imageIds);

  useImperativeHandle(ref, () => {
    console.log('imperativeHandle - images:', imageIds);
    return {
      title,
      content,
      images: imageIds, // 이미지 ID 배열을 외부에서 접근 가능하게 함
    };
  });

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
        fileArray.forEach((file) => formData.append('image', file)); // 이미지 파일 형식으로 보내주기

        // 이미지 업로드 요청
        const response = await axiosInstance.post('/api/post/image', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }, // 헤더 설정
        });
        console.log('Image upload response:', response.data);

        // const uploadedImageIds = Array.isArray(response.data.id)
        //   ? response.data.id
        //   : Number(response.data.id);
        const uploadedImageIds = response.data.id;
        console.log('업로드된 이미지 IDs:', uploadedImageIds);

        setImageIds(uploadedImageIds); // 이미지 ID 배열 업데이트
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('에러메시지:', error.message);
          if (error.response) {
            console.error('에러 데이터:', error.response.data);
          }
        } else {
          console.error('예상 못 한 에러:', error);
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
          accept="image/*"
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
