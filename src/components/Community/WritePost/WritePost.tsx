import React, { forwardRef, useImperativeHandle, useState } from 'react';
import axiosInstance from '../../../libs/AxiosInstance';
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
        console.error('이미지 업로드 실패:', error);
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
