import React from 'react';
import axiosInstance from '../../../libs/AxiosInstance';
import { useNavigate } from 'react-router-dom';
import * as S from './RegisterBtn.Style';
import { AxiosError } from 'axios'; // AxiosError를 axios 모듈에서 가져옵니다.
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface PostRequestDto {
  title: string;
  content?: string;
  images: number[];
  potId: number;
}

const RegisterBtn = ({
  getPostData,
}: {
  getPostData: () => {
    title: string;
    content: string;
    images: number[];
    potId: number;
  };
}) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    const postData: PostRequestDto = getPostData();

    if (!postData) return;

    console.log('Post Data:', postData); // 로그 추가

    try {
      const response = await axiosInstance.post('/api/post', postData);
      console.log('Response Status:', response.status); // 로그 추가
      console.log('Response Data:', response.data); // 로그 추가

      if (response.status === 201) {
        toast.success('게시글이 성공적으로 저장되었습니다.');
        navigate('/community');
      } else {
        toast.error('게시글 저장에 실패했습니다.');
      }
    } catch (error) {
      console.error('게시글 저장에 실패했습니다.', error);

      if (error instanceof AxiosError) {
        toast.error('게시글 저장에 실패했습니다.');
      } else {
        toast.error('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return <S.RegisterBtn onClick={handleClick}>등록</S.RegisterBtn>;
};

export default RegisterBtn;
