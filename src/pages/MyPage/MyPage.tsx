import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../libs/AxiosInstance'; // axiosInstance 불러오기
import * as S from './MyPage.Style';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import MyPageTopBar from '../../components/topbar/MyPageTopBar';

// /api/users/{userId}/profile 경로에 대한 json 값 스웨거에 없음! 세은이한테 받기
interface UserProfile {
  profilePicture: string;
  nickname: string;
}

const defaultuser_image = 'https://i.ibb.co/xLv21hj/app-logo.png'; // 기본 이미지 URL

const Mypage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    profilePicture: defaultuser_image, // 기본 이미지로 초기화
    nickname: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get('/api/users/{userId}/profile');

        const profilePicture =
          response.data.profilePicture || defaultuser_image;

        setProfile({ ...response.data, profilePicture });
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
      <S.TitleWrapper>
        <MyPageTopBar title="마이 페이지" />
      </S.TitleWrapper>
      <S.ProfileSection>
        <S.ProfilePicture src={profile.profilePicture} alt="Profile" />
        <S.Nickname>박예은{profile.nickname}</S.Nickname>
        {/* 확인을 위한 하드 코딩 값, 추후 삭제 */}
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
