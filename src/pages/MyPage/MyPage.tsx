import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../libs/AxiosInstance'; // axiosInstance 불러오기
import * as S from './MyPage.Style';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';

interface UserProfile {
  profilePicture: string;
  nickname: string;
}

const Mypage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    profilePicture: '',
    nickname: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get(
          '/api/users/{userId}/profile', // baseURL이 이미 설정되어 있으므로 상대 경로만 사용
        );
        setProfile(response.data);
      } catch (error) {
        console.error('프로필 불러오기 오류:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <S.MypageContainer>
      <S.ProfileSection>
        <S.ProfilePicture src={profile.profilePicture} alt="Profile" />
        <S.Nickname>{profile.nickname}</S.Nickname>
        <S.EditButton onClick={() => navigateTo('/myPage/editProfile')}>
          프로필 수정
        </S.EditButton>
      </S.ProfileSection>
      <S.TopMenuList>
        <S.TopMenuItem onClick={() => navigateTo('/main')}>
          내가 쓴 글
        </S.TopMenuItem>
        <S.TopMenuItem onClick={() => navigateTo('/main')}>
          팟 신청 리스트
        </S.TopMenuItem>
      </S.TopMenuList>
      <S.Menu>
        <S.MenuItem onClick={() => navigateTo('/main')}>공지사항</S.MenuItem>
        <S.MenuItem onClick={() => navigateTo('/main')}>고객센터</S.MenuItem>
        <S.MenuItem onClick={() => navigateTo('/main')}>도움말</S.MenuItem>
      </S.Menu>
      <S.BottomNavBarWrapper>
        <BottomNavBar />
      </S.BottomNavBarWrapper>
    </S.MypageContainer>
  );
};

export default Mypage;
