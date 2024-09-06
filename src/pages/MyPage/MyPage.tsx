// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../libs/AxiosInstance'; // axiosInstance 불러오기
// import * as S from './MyPage.Style';
// import BottomNavBar from '../../components/BottomBar/BottomNavBar';
// import MyPageTopBar from '../../components/topbar/MyPageTopBar';

// // /api/users/{userId}/profile 경로에 대한 json 값 스웨거에 없음! 세은이한테 받기
// interface UserProfile {
//   profilePhotoUrl: string;
//   username: string;
// }

// const defaultuser_image = 'https://i.ibb.co/xLv21hj/app-logo.png'; // 기본 이미지 URL

// const Mypage: React.FC = () => {
//   const [profile, setProfile] = useState<UserProfile>({
//     profilePhotoUrl: defaultuser_image, // 기본 이미지로 초기화
//     username: '',
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await axiosInstance.get('/api/users/profile/user');

//         const profilePhotoUrl =
//           response.data.profilePhotoUrl || defaultuser_image;

//         setProfile({ ...response.data, profilePhotoUrl });
//       } catch (error) {
//         console.error('프로필 불러오기 오류:', error);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const navigateTo = (path: string) => {
//     navigate(path);
//   };

//   return (
//     <S.MypageContainer>
//       <S.TitleWrapper>
//         <MyPageTopBar title="마이 페이지" />
//       </S.TitleWrapper>
//       <S.ProfileSection>
//         <S.ProfilePicture src={profile.profilePhotoUrl} alt="Profile" />
//         <S.Nickname>{profile.username}</S.Nickname>
//         <S.EditButton onClick={() => navigateTo('/myPage/editProfile')}>
//           프로필 수정
//         </S.EditButton>
//       </S.ProfileSection>
//       <S.TopMenuList>
//         <S.TopMenuItem onClick={() => navigateTo('/main')}>
//           내가 쓴 글
//         </S.TopMenuItem>
//         <S.TopMenuItem onClick={() => navigateTo('/main')}>
//           팟 신청 리스트
//         </S.TopMenuItem>
//       </S.TopMenuList>
//       <S.Menu>
//         <S.MenuItem onClick={() => navigateTo('/main')}>공지사항</S.MenuItem>
//         <S.MenuItem onClick={() => navigateTo('/main')}>고객센터</S.MenuItem>
//         <S.MenuItem onClick={() => navigateTo('/main')}>도움말</S.MenuItem>
//       </S.Menu>
//       <S.BottomNavBarWrapper>
//         <BottomNavBar />
//       </S.BottomNavBarWrapper>
//     </S.MypageContainer>
//   );
// };

// export default Mypage;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../libs/AxiosInstance';
import * as S from './MyPage.Style';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import MyPageTopBar from '../../components/TopBar/MyPageTopBar';

interface UserProfile {
  profilePhotoUrl: string;
  username: string;
}

const defaultuser_image =
  'https://otti-bucket-2024.s3.ap-northeast-2.amazonaws.com/otti-image/otti.png';

const Mypage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    profilePhotoUrl: defaultuser_image,
    username: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get('/api/users/profile/user');
        const profilePhotoUrl =
          response.data.profilePhotoUrl || defaultuser_image;
        setProfile({ ...response.data, profilePhotoUrl });
      } catch (error) {
        console.error('프로필 불러오기 오류:', error);
      }
    };

    fetchUserProfile();
  }, []);

  // const handleResetProfilePicture = async () => {
  //   try {
  //     // 클라이언트 측에서 기본 이미지로 상태 업데이트
  //     setProfile((prevProfile) => ({
  //       ...prevProfile,
  //       profilePhotoUrl: defaultuser_image,
  //     }));

  //     // 서버에 기본 이미지로 업데이트 요청
  //     await axiosInstance.put('/api/users/profile/update', {
  //       profilePhotoUrl: defaultuser_image,
  //       username: profile.username, // 나머지 데이터 유지
  //     });

  //     console.log('프로필 이미지가 기본 이미지로 변경되었습니다.');
  //   } catch (error) {
  //     console.error(
  //       '프로필 이미지를 기본 이미지로 변경하는 중 오류 발생:',
  //       error,
  //     );
  //   }
  // };

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
        {/* 프로필 이미지를 기본 이미지로 리셋하는 버튼 추가 */}
        {/* <div onClick={handleResetProfilePicture}>프로필 이미지 초기화</div> */}
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
