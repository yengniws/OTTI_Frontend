import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../libs/AxiosInstance';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCamera } from 'react-icons/fa';
import * as S from './EditProfile.Style';
import NewTopBar from '../../components/TopBar/NewTopBar';

// 사용자 프로필 인터페이스
interface UserProfile {
  profilePhotoUrl: string;
  username: string;
}

// 기본 프로필 이미지 URL
const defaultuser_image =
  'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/otti-image/otti.png';

const EditProfile: React.FC = () => {
  // 프로필 상태 초기화
  const [profile, setProfile] = useState<UserProfile>({
    profilePhotoUrl: defaultuser_image, // 기본 이미지 설정
    username: '', // 초기 사용자 이름 비워두기
  });

  const [profileImageFile, setProfileImageFile] = useState<File | null>(null); // 이미지 파일 상태 추가
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // 사용자 프로필 정보를 API로부터 불러옴
        const response = await axiosInstance.get('/api/users/profile/user');
        const fetchedProfile = response.data;

        // 프로필 사진 URL이 없을 경우 기본 이미지로 설정
        if (!fetchedProfile.profilePhotoUrl) {
          fetchedProfile.profilePhotoUrl = defaultuser_image;
        }

        setProfile(fetchedProfile); // 상태 업데이트
      } catch (error) {
        console.error('프로필 불러오는 중 오류 발생:', error);
      }
    };

    fetchUserProfile(); // 컴포넌트 마운트 시 프로필 정보 불러오기
  }, []);

  // 입력 값 변화 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value })); // 입력된 값으로 상태 업데이트
  };

  // 이미지 파일 변화 핸들러
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]; // 선택된 파일
      setProfileImageFile(file); // 파일 상태로 저장

      // 미리보기를 위해 FileReader 사용
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePhotoUrl: reader.result as string, // 미리보기용 이미지 업데이트
        }));
      };
      reader.readAsDataURL(file); // 이미지 미리보기, 파일을 Data URL로 읽어옴
    }
  };

  // 이미지 초기화 핸들러
  const handleResetImage = () => {
    setProfileImageFile(null); // 파일 상태 초기화
    setProfile((prevProfile) => ({
      ...prevProfile,
      profilePhotoUrl: defaultuser_image, // 기본 이미지로 리셋
    }));
  };

  // 저장 핸들러
  const handleSave = async () => {
    const formData = new FormData();

    // 텍스트 데이터 추가
    formData.append('username', profile.username); // 사용자 이름 추가

    // 이미지 파일이 있을 경우에만 FormData에 추가
    if (profileImageFile) {
      formData.append('image', profileImageFile); // 선택된 이미지 파일 추가
    }

    try {
      // 프로필 정보를 API로 업데이트
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
