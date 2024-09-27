import React, { useEffect, useState } from 'react';
import * as S from './MyPotList.Style';
import MyPageTopBar from '../../components/TopBar/MyPageTopBar';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../libs/AxiosInstance';
import LoadingPage from '../../pages/Loading/LoadingPage'; // 로딩 페이지 임포트

const MyPotList = () => {
  const navigate = useNavigate();
  const [potListData, setPotListData] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    // 팟 리스트를 불러오는 비동기 함수
    const fetchPotList = async () => {
      try {
        const response = await axiosInstance.get(
          '/api/pot/application/user/pots/approve/permission',
        );

        // API 응답 데이터에서 필요한 정보만 추출하여 새로운 배열 생성
        const data = response.data.map((item) => ({
          id: item.potId,
          name: item.potName,
          icon: item.ott?.image,
        }));

        setPotListData(data); // 팟 리스트 상태 업데이트
      } catch (error) {
        console.error('팟 불러오기 실패:', error);
      }
    };

    // API 호출과 최소 1.5초 대기 동시 처리
    const loadContent = async () => {
      const startTime = Date.now(); // 로딩 시작 시간 기록
      await fetchPotList(); // 팟 리스트 API 호출
      const elapsedTime = Date.now() - startTime; // API 호출에 걸린 시간 계산
      const delay = Math.max(0, 1500 - elapsedTime); // 1.5초가 안 지났다면 남은 시간만큼 기다리기

      // 대기 시간 후 로딩 상태를 false로 설정
      setTimeout(() => setLoading(false), delay); // 최소 1.5초 후에 로딩 종료
    };

    loadContent(); // 콘텐츠 로드 함수 실행
  }, []);

  return (
    <S.MyPotListContainer>
      {loading ? ( // 로딩 중이면 로딩 페이지 표시
        <LoadingPage />
      ) : (
        <>
          <S.TitleWrapper>
            <MyPageTopBar title="내 POT" />
          </S.TitleWrapper>

          {potListData.length === 0 ? (
            // 팟 리스트 데이터가 없을 경우 메시지 표시
            <h3>내 팟이 없습니다</h3>
          ) : (
            <S.PotList>
              {potListData.map((pot) => (
                // 팟 리스트의 각 항목을 표시
                <S.PotItem key={pot.id}>
                  <S.IconWrapper>
                    <S.Icon src={pot.icon} alt={pot.name} />
                  </S.IconWrapper>
                  <S.PotName>{pot.name}</S.PotName>
                  <S.Arrow onClick={() => navigate(`/PotDetail/${pot.id}`)}>
                    {' '}
                    &gt; {/* 팟 상세 페이지로 이동하는 화살표 */}
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
