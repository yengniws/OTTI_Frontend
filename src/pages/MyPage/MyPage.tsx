import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../libs/AxiosInstance';
import * as S from './MyPage.Style';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import MyPageTopBar from '../../components/TopBar/MyPageTopBar';
import LoadingPage from '../../pages/Loading/LoadingPage'; // 로딩 페이지 임포트

// 사용자 프로필 인터페이스
interface UserProfile {
  profilePhotoUrl: string;
  username: string;
}

// 기본 프로필 이미지 URL
const defaultuser_image =
  'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/otti-image/otti.png';

const Mypage: React.FC = () => {
  // 프로필 상태 초기화
  const [profile, setProfile] = useState<UserProfile>({
    profilePhotoUrl: defaultuser_image, // 기본 이미지 설정
    username: '', // 초기 사용자 이름 비워두기
  });
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // 사용자 프로필 정보를 API로 불러옴
        const response = await axiosInstance.get('/api/users/profile/user');
        const profilePhotoUrl =
          response.data.profilePhotoUrl || defaultuser_image; // 프로필 사진 URL이 없을 경우 기본 이미지로 설정
        setProfile({ ...response.data, profilePhotoUrl }); // 프로필 상태 업데이트
      } catch (error) {
        console.error('프로필 불러오기 오류:', error);
      }
    };

    // API 호출과 최소 2초 대기 처리
    const loadProfile = async () => {
      const startTime = Date.now(); // 로딩 시작 시간 기록
      await fetchUserProfile(); // API 호출
      const elapsedTime = Date.now() - startTime; // API 호출에 걸린 시간 계산
      const delay = Math.max(0, 1500 - elapsedTime); // 1.5초가 안 지났다면 남은 시간만큼 기다리기

      setTimeout(() => setLoading(false), delay); // 최소 1.5초 후에 로딩 종료
    };

    loadProfile(); // 프로필 로드 시작
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
        <S.ProfilePicture src={profile.profilePhotoUrl} alt="Profile" />
        <S.Nickname>{profile.username}</S.Nickname>
        <S.EditButton onClick={() => navigateTo('/myPage/editProfile')}>
          프로필 수정
        </S.EditButton>
      </S.ProfileSection>
      <S.TopMenuList>
        <S.TopMenuItem onClick={() => navigateTo('/MyPosts')}>
          내가 쓴 글
        </S.TopMenuItem>
        <S.TopMenuItem onClick={() => navigateTo('/PotApplicationList')}>
          팟 신청 리스트
        </S.TopMenuItem>
      </S.TopMenuList>
      <S.Menu>
        <S.MenuItem onClick={() => navigateTo('/main')}>공지사항</S.MenuItem>
        <S.MenuItem onClick={() => navigateTo('/main')}>고객센터</S.MenuItem>
        <S.MenuItem onClick={() => navigateTo('/main')}>도움말</S.MenuItem>
        <S.MenuItem onClick={() => navigateTo('/main')}>로그아웃</S.MenuItem>
        <S.MenuItem onClick={() => navigateTo('/main')}>계정 탈퇴</S.MenuItem>
      </S.Menu>
      <S.BottomNavBarWrapper>
        <BottomNavBar />
      </S.BottomNavBarWrapper>
    </S.MypageContainer>
  );
};

export default Mypage;
