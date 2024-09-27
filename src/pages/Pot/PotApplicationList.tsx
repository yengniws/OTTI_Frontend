import React, { useEffect, useState } from 'react';
import * as S from './PotApplicationList.Style'; // 스타일 파일 경로
import NewTopBar from '../../components/TopBar/NewTopBar.tsx';
import axiosInstance from '../../libs/AxiosInstance.tsx';

// 신청서 인터페이스
interface Application {
  id: number;
  potId: number; // potId 추가
  potName: string;
  potDescription: string;
  requester: {
    id: number; // requester id
    username: string;
    profilePhotoUrl: string;
    joinrequestDescription: string;
  };
  approved: boolean; // 승인 여부
}

const PotApplicationList: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]); // 신청서 상태 초기화

  useEffect(() => {
    // 신청서 데이터를 가져오는 비동기 함수
    const fetchApplications = async () => {
      try {
        const response = await axiosInstance.get(
          '/api/pot/application/joinrequest/pots/permission',
        );
        setApplications(response.data); // 응답 데이터 저장
      } catch (error) {
        console.error('팟 신청 데이터를 가져오는 데 실패했습니다:', error);
      }
    };

    fetchApplications(); // 신청서 데이터 가져오기 호출
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 호출

  // 신청 수락 핸들러
  const handleAccept = async (potId: number, requesterId: number) => {
    try {
      // 승인 API 호출
      await axiosInstance.post(
        `/api/pot/application/approve?potId=${potId}&requesterId=${requesterId}`,
      );
      setApplications((prev) =>
        prev.filter((app) => app.requester.id !== requesterId),
      ); // requesterId로 필터링, 승인된 신청자는 상태에서 제거
    } catch (error) {
      console.error(
        `팟 ID ${potId}의 신청자 ID ${requesterId} 신청 수락에 실패했습니다:`,
        error,
      );
    }
  };

  // 신청 거절 핸들러
  const handleReject = async (potId: number, requesterId: number) => {
    try {
      // 거절 API 호출
      await axiosInstance.post(
        `/api/pot/application/reject?potId=${potId}&requesterId=${requesterId}`,
      );
      setApplications((prev) =>
        prev.filter((app) => app.requester.id !== requesterId),
      ); // requesterId로 필터링, 거절된 신청자는 상태에서 제거
    } catch (error) {
      console.error(
        `팟 ID ${potId}의 신청자 ID ${requesterId} 신청 거절에 실패했습니다:`,
        error,
      );
    }
  };

  return (
    <S.PotApplicationListContainer>
      <S.TitleWrapper>
        <NewTopBar title="팟 신청 리스트" />
      </S.TitleWrapper>

      <S.ApplicationsList>
        {applications.length === 0 ? ( // 신청이 없을 경우 메시지 표시
          <h3>신청이 없습니다</h3>
        ) : (
          applications
            .filter((app) => !app.approved) // 수락되지 않은 사람만 필터링
            .map((app) => (
              <S.ApplicationItem key={app.id}>
                <S.ProfileSection>
                  <S.ProfilePicture
                    src={app.requester.profilePhotoUrl}
                    alt="프로필"
                  />
                  <S.TextSection>
                    <S.Nickname>{app.requester.username}</S.Nickname>
                    <S.PotName>{app.potName}</S.PotName>
                    <S.Message>
                      {app.requester.joinrequestDescription}
                    </S.Message>
                  </S.TextSection>
                </S.ProfileSection>
                <S.ButtonsWrapper>
                  <S.AcceptButton
                    onClick={() => handleAccept(app.potId, app.requester.id)} // 수락 버튼 클릭 시 수락 처리
                  >
                    수락
                  </S.AcceptButton>
                  <S.RejectButton
                    onClick={() => handleReject(app.potId, app.requester.id)} // 거절 버튼 클릭 시 거절 처리
                  >
                    거절
                  </S.RejectButton>
                </S.ButtonsWrapper>
              </S.ApplicationItem>
            ))
        )}
      </S.ApplicationsList>
    </S.PotApplicationListContainer>
  );
};

export default PotApplicationList;
