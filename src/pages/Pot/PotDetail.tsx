import React, { useEffect, useState } from 'react';
import * as S from './PotDetail.Style';
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdPerson } from 'react-icons/io';
import axiosInstance from '../../libs/AxiosInstance';
import LoadingPage from '../Loading/LoadingPage';

const PotDetail: React.FC = () => {
  const { potId } = useParams(); // URL 파라미터에서 potId 추출
  const navigate = useNavigate();
  const [potDetail, setPotDetail] = useState<any>(null); // 팟 상세 정보 상태 초기화

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // 팟 상세 정보를 불러오는 비동기 함수
    const fetchPotDetail = async () => {
      try {
        const response = await axiosInstance.get(`/api/pot/create/${potId}`);
        setPotDetail(response.data); // 응답 데이터로 상태 업데이트
      } catch (error) {
        console.error('팟 상세정보 불러오기 에러:', error);
      }
    };

    // potId가 존재할 경우에만 상세 정보 불러오기
    if (potId) {
      fetchPotDetail(); // 팟 상세 정보 불러오기 함수 호출
    }
  }, [potId]); // potId가 변경될 때마다 실행

  if (!potDetail) {
    return <LoadingPage />; // 팟 상세 정보가 없으면 로딩 페이지 표시
  }

  const handleMemberClick = () => {
    navigate(`/PotMember/${potId}`); // 멤버 페이지로 이동하는 함수
  };

  return (
    <S.PotDetailWrapper>
      <S.TitleWrapper>
        <S.TopBarContainer>
          <S.BackButton onClick={handleBack}>&lt;</S.BackButton>{' '}
          {/* 뒤로가기 버튼 */}
          <S.Title>POT</S.Title>
          <IoMdPerson size={23} onClick={handleMemberClick} />{' '}
          {/* 멤버 페이지로 이동 */}
        </S.TopBarContainer>
      </S.TitleWrapper>

      <S.Container>
        <S.Header>
          <S.Image src={potDetail.ott?.image} alt={potDetail.ott?.name} />
          <S.OttName>{potDetail.ott?.name}</S.OttName>
        </S.Header>

        <S.Section>
          <S.Label>팟 이름</S.Label>
          <S.Text>{potDetail.potName}</S.Text>
        </S.Section>
        <S.Divider />

        <S.Section>
          <S.Label>요금제</S.Label>
          <S.Text>{potDetail.ott?.ratePlan}</S.Text>
        </S.Section>
        <S.Divider />

        <S.Section>
          <S.Label>구독료</S.Label>
          <S.Text>{potDetail.ott?.price}원</S.Text>
        </S.Section>
        <S.Divider />
        <S.Section>
          <S.Label>정기결제일</S.Label>
          <S.Text>{potDetail.ratePlan}일</S.Text>
        </S.Section>
        <S.Divider />
        <S.Section>
          <S.Label>입금 계좌</S.Label>
          <S.Text>
            {potDetail.depositAccount
              ? potDetail.depositAccount
              : '계좌 정보 없음'}{' '}
            {/* 계좌 정보가 없을 경우 '계좌 정보 없음' 표시 */}
          </S.Text>{' '}
        </S.Section>
        <S.Divider />
      </S.Container>
    </S.PotDetailWrapper>
  );
};

export default PotDetail;
