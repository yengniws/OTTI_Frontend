import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MyPage.Style';

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
        const response = await fetch('http://localhost:3001/profile');
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('프로필 불러오는 중 오류 발생:', error);
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
        <S.MenuItem onClick={() => navigateTo('/main')}>고객 센터</S.MenuItem>
        <S.MenuItem onClick={() => navigateTo('/main')}>도움말</S.MenuItem>
      </S.Menu>
    </S.MypageContainer>
  );
};

export default Mypage;
