import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../libs/AxiosInstance';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCamera } from 'react-icons/fa';
import * as S from './EditProfile.Style';
import NewTopBar from '../../components/topbar/NewTopBar';

interface UserProfile {
  profilePhotoUrl: string;
  username: string;
}

const defaultuser_image =
  'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/otti-image/otti.png';

const EditProfile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    profilePhotoUrl: defaultuser_image,
    username: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get('/api/users/profile/user');
        const fetchedProfile = response.data;

        // profilePhotoUrl 값이 없으면 defaultuser_image를 사용
        if (!fetchedProfile.profilePhotoUrl) {
          fetchedProfile.profilePhotoUrl = defaultuser_image;
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
            profilePhotoUrl: reader.result as string,
          }));
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    try {
      await axiosInstance.put('/api/users/profile/update', profile);
      toast.success('프로필이 저장되었습니다.');
      setTimeout(() => {
        navigate('/myPage');
      }, 1500);
    } catch (error) {
      console.error('프로필 저장 중 오류 발생:', error);
      toast.error('프로필 수정에 실패했어요.');
    }
  };

  return (
    <S.ProfileWrapper>
      <S.TitleWrapper>
        <NewTopBar title="프로필 수정" />
      </S.TitleWrapper>
      <S.EditProfileContainer>
        <ToastContainer />
        <S.ProfilePictureSection>
          <S.ProfilePicture src={profile.profilePhotoUrl} alt="Profile" />
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
            name="username"
            value={profile.username}
            onChange={handleInputChange}
          />
        </S.ProfileInput>
        {/* <S.ProfileInput> */}
        {/* <S.InputLabel>카카오 아이디</S.InputLabel> */}
        {/* 카카오 아이디 불러오는 json 값 스웨거에 없음 */}
        {/* <S.Input
            type="text"
            name="userId"
            onChange={handleInputChange}
            disabled
          /> */}
        {/* </S.ProfileInput> */}

        <S.SaveButton onClick={handleSave}>저장하기</S.SaveButton>
      </S.EditProfileContainer>
    </S.ProfileWrapper>
  );
};

export default EditProfile;
