// import React from 'react';
// import * as S from './MyPotList.Style';
// import MyPageTopBar from '../../components/topbar/MyPageTopBar';
// import BottomNavBar from '../../components/BottomBar/BottomNavBar';
// import { useNavigate } from 'react-router-dom';

// const MyPotList = () => {
//   const navigate = useNavigate();

//   // 더미 데이터 배열
//   const potListData = [
//     { id: 1, name: '넷플릭스', icon: '/path-to-netflix-icon.png' },
//     { id: 2, name: '티빙', icon: '/path-to-tving-icon.png' },
//   ];

//   return (
//     <S.MyPotListContainer>
//       <S.TitleWrapper>
//         <MyPageTopBar title="내 POT" />
//       </S.TitleWrapper>

//       <S.PotList>
//         {potListData.map((pot) => (
//           <S.PotItem key={pot.id}>
//             <S.IconWrapper>
//               <S.Icon src={pot.icon} alt={pot.name} />
//             </S.IconWrapper>
//             <S.PotName>{pot.name}</S.PotName>
//             <S.Arrow onClick={() => navigate('/PotDetail')}> &gt; </S.Arrow>
//             {/* <S.Arrow onClick={() => navigate('/PotDetail/:potId')}> &gt; </S.Arrow> */}
//           </S.PotItem>
//         ))}
//       </S.PotList>

//       <S.MakePotButton onClick={() => navigate('/MakePot')}>
//         팟 만들기
//       </S.MakePotButton>

//       <S.BottomNavBarWrapper>
//         <BottomNavBar />
//       </S.BottomNavBarWrapper>
//     </S.MyPotListContainer>
//   );
// };

// export default MyPotList;

// import React, { useEffect, useState } from 'react';
// import * as S from './MyPotList.Style';
// import MyPageTopBar from '../../components/topbar/MyPageTopBar';
// import BottomNavBar from '../../components/BottomBar/BottomNavBar';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../libs/AxiosInstance';

// const MyPotList = () => {
//   const navigate = useNavigate();
//   const [potListData, setPotListData] = useState([]);

//   useEffect(() => {
//     const fetchPotList = async () => {
//       try {
//         const response = await axiosInstance.get(
//           '/api/pot/application/user/pots/approve/permission',
//         );

//         console.log('API 응답 데이터:', response.data);

//         // 중복된 potId를 기준으로 데이터 필터링
//         const uniqueData = response.data.filter(
//           (item, index, self) =>
//             index === self.findIndex((t) => t.potId === item.potId),
//         );

//         const data = uniqueData.map((item) => ({
//           id: item.potId,
//           name: item.potName,
//           icon: '/path-to-netflix-icon.png', // 임시 아이콘
//         }));

//         setPotListData(data);
//       } catch (error) {
//         console.error('팟 불러오기 실패:', error);
//       }
//     };
//     fetchPotList();
//   }, []);

//   return (
//     <S.MyPotListContainer>
//       <S.TitleWrapper>
//         <MyPageTopBar title="내 POT" />
//       </S.TitleWrapper>

//       {potListData.length === 0 ? (
//         <h3>내 팟이 없습니다</h3>
//       ) : (
//         <S.PotList>
//           {potListData.map((pot) => (
//             <S.PotItem key={pot.id}>
//               <S.IconWrapper>
//                 <S.Icon src={pot.image} alt={pot.name} />
//               </S.IconWrapper>
//               <S.PotName>{pot.name}</S.PotName>
//               <S.Arrow onClick={() => navigate(`/PotDetail/${pot.id}`)}>
//                 {' '}
//                 &gt;{' '}
//               </S.Arrow>
//             </S.PotItem>
//           ))}
//         </S.PotList>
//       )}

//       <S.MakePotButton onClick={() => navigate('/MakePot')}>
//         팟 만들기
//       </S.MakePotButton>

//       <S.BottomNavBarWrapper>
//         <BottomNavBar />
//       </S.BottomNavBarWrapper>
//     </S.MyPotListContainer>
//   );
// };

// export default MyPotList;

import React, { useEffect, useState } from 'react';
import * as S from './MyPotList.Style';
import MyPageTopBar from '../../components/topbar/MyPageTopBar';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../libs/AxiosInstance';
import LoadingPage from '../../pages/Loading/LoadingPage'; // 로딩 페이지 임포트

const MyPotList = () => {
  const navigate = useNavigate();
  const [potListData, setPotListData] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const fetchPotList = async () => {
      try {
        const response = await axiosInstance.get(
          '/api/pot/application/user/pots/approve/permission',
        );

        console.log('API 응답 데이터:', response.data); // 전체 데이터를 확인

        const data = response.data.map((item) => ({
          id: item.potId,
          name: item.potName,
          icon: item.ott?.image,
        }));

        setPotListData(data); // 데이터 상태 업데이트
      } catch (error) {
        console.error('팟 불러오기 실패:', error);
      }
    };

    // API 호출과 최소 1.5초 대기 동시 처리
    const loadContent = async () => {
      const startTime = Date.now(); // 로딩 시작 시간 기록
      await fetchPotList(); // API 호출
      const elapsedTime = Date.now() - startTime; // API 호출에 걸린 시간 계산
      const delay = Math.max(0, 1500 - elapsedTime); // 2초가 안 지났다면 남은 시간만큼 기다리기

      setTimeout(() => setLoading(false), delay); // 최소 2초 후에 로딩 종료
    };

    loadContent();
  }, []);

  return (
    <S.MyPotListContainer>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <S.TitleWrapper>
            <MyPageTopBar title="내 POT" />
          </S.TitleWrapper>

          {potListData.length === 0 ? (
            <h3>내 팟이 없습니다</h3>
          ) : (
            <S.PotList>
              {potListData.map((pot) => (
                <S.PotItem key={pot.id}>
                  <S.IconWrapper>
                    <S.Icon src={pot.icon} alt={pot.name} />
                  </S.IconWrapper>
                  <S.PotName>{pot.name}</S.PotName>
                  <S.Arrow onClick={() => navigate(`/PotDetail/${pot.id}`)}>
                    {' '}
                    &gt;{' '}
                  </S.Arrow>
                </S.PotItem>
              ))}
            </S.PotList>
          )}

          <S.MakePotButton onClick={() => navigate('/MakePot')}>
            팟 만들기
          </S.MakePotButton>

          <S.BottomNavBarWrapper>
            <BottomNavBar />
          </S.BottomNavBarWrapper>
        </>
      )}
    </S.MyPotListContainer>
  );
};
export default MyPotList;
