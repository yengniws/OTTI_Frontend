import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../libs/AxiosInstance'; // 생성한 axios 인스턴스를 임포트
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCamera } from 'react-icons/fa';
import * as S from './EditProfile.Style';

interface UserProfile {
  user_image: string;
  userId: string;
  nickname: string;
}

const defaultuser_image = 'https://i.ibb.co/xLv21hj/app-logo.png';

const EditProfile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    user_image: defaultuser_image,
    userId: '',
    nickname: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get('/api/users/{userId}/profile');
        const fetchedProfile = response.data;
        if (!fetchedProfile.user_image) {
          fetchedProfile.user_image = defaultuser_image;
        }
        setProfile(fetchedProfile);
      } catch (error) {
        console.error('프로필 불러오는 중 오류 발생:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setProfile((prevProfile) => ({
            ...prevProfile,
            user_image: reader.result as string,
          }));
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    try {
      await axiosInstance.put('/api/users/{userId}/profile/update', profile);
      toast.success('프로필이 저장되었습니다.');
      setTimeout(() => {
        navigate('/myPage');
      }, 1500);
    } catch (error) {
      console.error('프로필 저장 중 오류 발생:', error);
    }
  };

  return (
    <S.EditProfileContainer>
      <ToastContainer />
      <S.ProfilePictureSection>
        <S.ProfilePicture src={profile.user_image} alt="Profile" />
        <S.EditIcon>
          <FaCamera size={15} color="#aaa" />
          <S.FileInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </S.EditIcon>
      </S.ProfilePictureSection>
      <S.ProfileInput>
        <S.InputLabel>닉네임</S.InputLabel>
        <S.Input
          type="text"
          name="nickname"
          value={profile.nickname}
          onChange={handleInputChange}
        />
      </S.ProfileInput>
      <S.ProfileInput>
        <S.InputLabel>카카오 아이디</S.InputLabel>
        <S.Input
          type="text"
          name="userId"
          value={profile.userId}
          onChange={handleInputChange}
          disabled
        />
      </S.ProfileInput>

      <S.SaveButton onClick={handleSave}>저장하기</S.SaveButton>
    </S.EditProfileContainer>
  );
};

export default EditProfile;
