import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../libs/AxiosInstance';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCamera } from 'react-icons/fa';
import * as S from './EditProfile.Style';
import NewTopBar from '../../components/Topbar/NewTopBar';

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

  const [profileImageFile, setProfileImageFile] = useState<File | null>(null); // 이미지 파일 상태 추가
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get('/api/users/profile/user');
        const fetchedProfile = response.data;

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
      const file = e.target.files[0];
      setProfileImageFile(file); // 파일 상태로 저장

      // 미리보기를 위해 FileReader 사용
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePhotoUrl: reader.result as string, // 미리보기용 이미지 업데이트
        }));
      };
      reader.readAsDataURL(file); // 이미지 미리보기
    }
  };

  const handleResetImage = () => {
    setProfileImageFile(null); // 파일 상태를 초기화
    setProfile((prevProfile) => ({
      ...prevProfile,
      profilePhotoUrl: defaultuser_image,
    }));
  };

  const handleSave = async () => {
    const formData = new FormData();

    // 텍스트 데이터 추가
    formData.append('username', profile.username);

    // 이미지 파일이 있을 경우에만 FormData에 추가
    if (profileImageFile) {
      formData.append('image', profileImageFile); // 실제 파일을 추가
    }

    try {
      await axiosInstance.put('/api/users/profile/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // FormData 사용 시 Content-Type 헤더 설정
        },
      });

      toast.success('프로필이 저장되었습니다.');
      setTimeout(() => {
        navigate('/myPage');
      }, 500);
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

        <S.SaveButton onClick={handleSave}>저장하기</S.SaveButton>
      </S.EditProfileContainer>
    </S.ProfileWrapper>
  );
};

export default EditProfile;
