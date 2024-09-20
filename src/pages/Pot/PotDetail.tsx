// import React from 'react';
// import * as S from './PotDetail.Style';
// import { useNavigate } from 'react-router-dom';
// import { IoMdPerson } from 'react-icons/io';

// const PotDetail: React.FC = () => {
//   const navigate = useNavigate();

//   const handleBack = () => {
//     navigate(-1);
//   };

//   return (
//     <S.PotDetailWrapper>
//       <S.TitleWrapper>
//         <S.TopBarContainer>
//           <S.BackButton onClick={handleBack}>&lt;</S.BackButton>
//           <S.Title>POT</S.Title>
//           <IoMdPerson size={23} onClick={() => navigate('/PotMember')} />
//         </S.TopBarContainer>
//       </S.TitleWrapper>

//       <S.Container>
//         <S.Header>
//           <S.Image src="https://path-to-netflix-logo.png" alt="넷플릭스" />
//           <S.OttName>넷플릭스</S.OttName>
//         </S.Header>

//         <S.Section>
//           <S.Label>이름</S.Label>
//           <S.Text>넷플</S.Text>
//         </S.Section>
//         <S.Divider />

//         <S.Section>
//           <S.Label>요금제</S.Label>
//           <S.Text>프리미엄</S.Text>
//         </S.Section>
//         <S.Divider />

//         <S.Section>
//           <S.Label>구독료</S.Label>
//           <S.Text>5000원</S.Text>
//         </S.Section>
//         <S.Divider />

//         <S.Section>
//           <S.Label>아이디</S.Label>
//           <S.Text>jdklskj</S.Text>
//         </S.Section>
//         <S.Divider />

//         <S.Section>
//           <S.Label>비밀번호</S.Label>
//           <S.Text>cjklkjl</S.Text>
//         </S.Section>
//         <S.Divider />

//         <S.Section>
//           <S.Label>정기결제일</S.Label>
//           <S.Text>매월 2일</S.Text>
//         </S.Section>
//         <S.Divider />

//         <S.Section>
//           <S.Label>입금 계좌</S.Label>
//           <S.Text>하나은행 00000000000000</S.Text>
//         </S.Section>
//         <S.Divider />
//       </S.Container>
//     </S.PotDetailWrapper>
//   );
// };

// export default PotDetail;

import React, { useEffect, useState } from 'react';
import * as S from './PotDetail.Style';
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdPerson } from 'react-icons/io';
import axiosInstance from '../../libs/AxiosInstance';
import LoadingPage from '../Loading/LoadingPage';

const PotDetail: React.FC = () => {
  const { potId } = useParams();
  const navigate = useNavigate();
  const [potDetail, setPotDetail] = useState<any>(null);

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchPotDetail = async () => {
      try {
        const response = await axiosInstance.get(`/api/pot/create/${potId}`);
        setPotDetail(response.data);
      } catch (error) {
        console.error('팟 상세정보 불러오기 에러:', error);
      }
    };

    if (potId) {
      fetchPotDetail();
    }
  }, [potId]);

  if (!potDetail) {
    return <LoadingPage />;
  }

  const handleMemberClick = () => {
    navigate(`/PotMember/${potId}`); // potId를 포함한 멤버 페이지로 이동
  };

  return (
    <S.PotDetailWrapper>
      <S.TitleWrapper>
        <S.TopBarContainer>
          <S.BackButton onClick={handleBack}>&lt;</S.BackButton>
          <S.Title>POT</S.Title>
          <IoMdPerson size={23} onClick={handleMemberClick} />
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
          <S.Text>{potDetail.ratePlan}</S.Text>
        </S.Section>
        <S.Divider />

        <S.Section>
          <S.Label>구독료</S.Label>
          <S.Text>{potDetail.ott?.price}원</S.Text>
        </S.Section>
        <S.Divider />

        <S.Section>
          <S.Label>입금 계좌</S.Label>
          <S.Text>
            {potDetail.depositAccount
              ? potDetail.depositAccount
              : '계좌 정보 없음'}
          </S.Text>{' '}
          {/* null 처리 */}
        </S.Section>
        <S.Divider />
      </S.Container>
    </S.PotDetailWrapper>
  );
};

export default PotDetail;
