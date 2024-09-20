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

import React, { useEffect, useState } from 'react';
import * as S from './MyPotList.Style';
import MyPageTopBar from '../../components/topbar/MyPageTopBar';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../libs/AxiosInstance';

const MyPotList = () => {
  const navigate = useNavigate();
  const [potListData, setPotListData] = useState([]);

  useEffect(() => {
    const fetchPotList = async () => {
      try {
        const response = await axiosInstance.get(
          '/api/pot/application/user/pots/approve/permission',
        );

        console.log('API 응답 데이터:', response.data);

        // 중복된 potId를 기준으로 데이터 필터링
        const uniqueData = response.data.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.potId === item.potId),
        );

        const data = uniqueData.map((item) => ({
          id: item.potId,
          name: item.potName,
          icon: '/path-to-netflix-icon.png', // 임시 아이콘
        }));

        setPotListData(data);
      } catch (error) {
        console.error('팟 불러오기 실패:', error);
      }
    };
    fetchPotList();
  }, []);

  return (
    <S.MyPotListContainer>
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
    </S.MyPotListContainer>
  );
};

export default MyPotList;
