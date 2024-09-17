import React from 'react';
import * as S from './PotDetail.Style';
import { useNavigate } from 'react-router-dom';
import { IoMdPerson } from 'react-icons/io';

const PotDetail: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const notices = [
    '매달 3000원씩 하나은행 0000000000으로 보내주세요!',
    '다음 결제는 10월 2일에 진행될 예정입니다.',
    '계좌번호 변경을 원하시면 관리자를 통해 문의해주세요.',
  ];

  return (
    <S.PotDetailContainer>
      <S.TitleWrapper>
        <S.TopBarContainer>
          <S.BackButton onClick={handleBack}>&lt;</S.BackButton>
          <S.Title>POT</S.Title>
          <IoMdPerson size={23} onClick={() => navigate('/PotMember')} />
        </S.TopBarContainer>
      </S.TitleWrapper>

      <S.Container>
        <S.ServiceInfo>
          <S.ServiceLogo
            src="https://path-to-netflix-logo.png"
            alt="넷플릭스"
          />
          <S.ServiceDetails>
            <S.ServiceName>넷플릭스</S.ServiceName>
            <S.ServiceInfoRow>
              <S.ServiceLabel>이름</S.ServiceLabel>
              <S.ServiceValue>넷플</S.ServiceValue>
            </S.ServiceInfoRow>
            <S.ServiceInfoRow>
              <S.ServiceLabel>요금제</S.ServiceLabel>
              <S.ServiceValue>프리미엄</S.ServiceValue>
            </S.ServiceInfoRow>
            <S.ServiceInfoRow>
              <S.ServiceLabel>가격</S.ServiceLabel>
              <S.ServiceValue>5000원</S.ServiceValue>
            </S.ServiceInfoRow>
            <S.ServiceInfoRow>
              <S.ServiceLabel>납부일</S.ServiceLabel>
              <S.ServiceValue>매월 2일</S.ServiceValue>
            </S.ServiceInfoRow>
            <S.ServiceInfoRow>
              <S.ServiceLabel>입금 계좌</S.ServiceLabel>
              <S.ServiceValue>하나 0000000</S.ServiceValue>
            </S.ServiceInfoRow>
          </S.ServiceDetails>
        </S.ServiceInfo>
      </S.Container>

      {notices.map((notice, index) => (
        <S.NoticeSection key={index}>
          <S.NoticeIcon>📌</S.NoticeIcon>
          <S.NoticeText>{notice}</S.NoticeText>
        </S.NoticeSection>
      ))}

      <S.ActionButtonWrapper>
        <S.AddButton>글 쓰기</S.AddButton>
      </S.ActionButtonWrapper>
    </S.PotDetailContainer>
  );
};

export default PotDetail;
