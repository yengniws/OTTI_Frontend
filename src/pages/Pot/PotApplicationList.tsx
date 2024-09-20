// import React from 'react';
// import * as S from './PotApplicationList.Style'; // 스타일 파일 경로
// import NewTopBar from '../../components/topbar/NewTopBar.tsx';

// const PotApplicationList: React.FC = () => {
//   //더미데이터
//   const applications = [
//     { id: 1, potName: '넷플', nickname: '닉네임1', message: '신청 합니다!' },
//     { id: 2, potName: '티빙잉', nickname: '닉네임2', message: '신청 합니다!' },
//     { id: 3, potName: '디플', nickname: '닉네임3', message: '신청 합니다!' },
//   ];

//   return (
//     <S.PotApplicationListContainer>
//       <S.TitleWrapper>
//         <NewTopBar title="팟 신청 리스트" />
//       </S.TitleWrapper>

//       <S.ApplicationsList>
//         {applications.map((app) => (
//           <S.ApplicationItem key={app.id}>
//             <S.ProfileSection>
//               <S.ProfilePicture
//                 src="https://i.ibb.co/xLv21hj/app-logo.png"
//                 alt="프로필"
//               />
//               <S.TextSection>
//                 <S.Nickname>{app.nickname}</S.Nickname>
//                 <S.PotName>{app.potName}</S.PotName>
//                 <S.Message>{app.message}</S.Message>
//               </S.TextSection>
//             </S.ProfileSection>
//             <S.ButtonsWrapper>
//               <S.AcceptButton>수락</S.AcceptButton>
//               <S.RejectButton>거절</S.RejectButton>
//             </S.ButtonsWrapper>
//           </S.ApplicationItem>
//         ))}
//       </S.ApplicationsList>
//     </S.PotApplicationListContainer>
//   );
// };

// export default PotApplicationList;

import React, { useEffect, useState } from 'react';
import * as S from './PotApplicationList.Style'; // 스타일 파일 경로
import NewTopBar from '../../components/topbar/NewTopBar.tsx';
import axiosInstance from '../../libs/AxiosInstance.tsx';

interface Application {
  id: number;
  potId: number; // potId 추가
  potName: string;
  potDescription: string;
  requester: {
    username: string;
    profilePhotoUrl: string;
    joinrequestDescription: string;
  };
  approved: boolean;
}

const PotApplicationList: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axiosInstance.get(
          '/api/pot/application/joinrequest/pots/permission',
        );
        setApplications(response.data);
        console.log('데이터를 성공적으로 가져왔습니다:', response.data);
      } catch (error) {
        console.error('팟 신청 데이터를 가져오는 데 실패했습니다:', error);
      }
    };

    fetchApplications();
  }, []);

  // 수락
  const handleAccept = async (potId: number) => {
    try {
      await axiosInstance.post(`/api/pot/application/approve?potId=${potId}`);
      setApplications((prev) => prev.filter((app) => app.potId !== potId)); // potId로 필터링
      console.log(`팟 ID ${potId} 신청을 수락했습니다.`);
    } catch (error) {
      console.error(`팟 ID ${potId} 신청 수락에 실패했습니다:`, error);
    }
  };

  // 거절
  const handleReject = async (potId: number) => {
    try {
      await axiosInstance.post(`/api/pot/application/reject?potId=${potId}`);
      setApplications((prev) => prev.filter((app) => app.potId !== potId)); // potId로 필터링
      console.log(`팟 ID ${potId} 신청을 거절했습니다.`);
    } catch (error) {
      console.error(`팟 ID ${potId} 신청 거절에 실패했습니다:`, error);
    }
  };

  return (
    <S.PotApplicationListContainer>
      <S.TitleWrapper>
        <NewTopBar title="팟 신청 리스트" />
      </S.TitleWrapper>

      <S.ApplicationsList>
        {applications.length === 0 ? (
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
                  <S.AcceptButton onClick={() => handleAccept(app.potId)}>
                    {' '}
                    {/* potId 사용 */}
                    수락
                  </S.AcceptButton>
                  <S.RejectButton onClick={() => handleReject(app.potId)}>
                    {' '}
                    {/* potId 사용 */}
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
