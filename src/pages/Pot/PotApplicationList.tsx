import React from 'react';
import * as S from './PotApplicationList.Style'; // 스타일 파일 경로
import NewTopBar from '../../components/topbar/NewTopBar.tsx';

const PotApplicationList: React.FC = () => {
  //더미데이터
  const applications = [
    { id: 1, nickname: '닉네임1', message: '신청 합니다!' },
    { id: 2, nickname: '닉네임2', message: '신청 합니다!' },
    { id: 3, nickname: '닉네임3', message: '신청 합니다!' },
  ];

  return (
    <S.PotApplicationListContainer>
      {/* 상단바 */}
      <S.TitleWrapper>
        <NewTopBar title="팟 신청 리스트" />
      </S.TitleWrapper>

      {/* 신청 리스트 */}
      <S.ApplicationsList>
        {applications.map((app) => (
          <S.ApplicationItem key={app.id}>
            <S.ProfileSection>
              <S.ProfilePicture
                src="https://i.ibb.co/xLv21hj/app-logo.png"
                alt="프로필"
              />
              <S.TextSection>
                <S.Nickname>{app.nickname}</S.Nickname>
                <S.Message>{app.message}</S.Message>
              </S.TextSection>
            </S.ProfileSection>
            <S.ButtonsWrapper>
              <S.AcceptButton>수락</S.AcceptButton>
              <S.RejectButton>거절</S.RejectButton>
            </S.ButtonsWrapper>
          </S.ApplicationItem>
        ))}
      </S.ApplicationsList>
    </S.PotApplicationListContainer>
  );
};

export default PotApplicationList;
