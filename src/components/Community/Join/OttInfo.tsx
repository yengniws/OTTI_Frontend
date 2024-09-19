// import React from 'react';
// import * as S from './OttInfo.Style';

// interface OttInfoProps {
//   imageUrl: string;
//   ottname: string;
//   plan: string;
//   price: string;
//   paymentDate: string;
//   currentMembers: string;
// }

// const OttInfo = ({
//   imageUrl,
//   ottname,
//   plan,
//   price,
//   paymentDate,
//   currentMembers,
// }: OttInfoProps) => {
//   return (
//     <S.OttInfoWrap>
//       <S.Header>
//         <S.OttImage src={imageUrl} alt={`${ottname} 로고`} />
//         <S.OttName>{ottname}</S.OttName>
//       </S.Header>
//       <S.OttDetails>
//         <S.DetailRow>
//           <S.Label>요금제</S.Label>
//           <S.OttText>{plan}</S.OttText>
//         </S.DetailRow>
//         <S.DetailRow>
//           <S.Label>가격</S.Label>
//           <S.OttText>{price}</S.OttText>
//         </S.DetailRow>
//         <S.DetailRow>
//           <S.Label>납부일</S.Label>
//           <S.OttText>{paymentDate}</S.OttText>
//         </S.DetailRow>
//         <S.DetailRow>
//           <S.Label>현재 팟 인원</S.Label>
//           <S.OttText>{currentMembers}</S.OttText>
//         </S.DetailRow>
//       </S.OttDetails>
//     </S.OttInfoWrap>
//   );
// };

// export default OttInfo;

import React from 'react';
import * as S from './OttInfo.Style';

interface OttInfoProps {
  image: string; // ott.image
  name: string; // ott.name (OttName)
  ratePlan: string; // ott.ratePlan (Plan for Ott)
  price: number; // ott.price (Price)
  paymentDate: string; // outer ratePlan (PaymentDate)
  memberCount: number; // outer memberCount (CurrentMembers)
}

const OttInfo = ({
  image,
  name,
  ratePlan,
  price,
  paymentDate,
  memberCount,
}: OttInfoProps) => {
  return (
    <S.OttInfoWrap>
      <S.Header>
        <S.OttImage src={image} alt={`${name} 로고`} />
        <S.OttName>{name}</S.OttName>
      </S.Header>
      <S.OttDetails>
        <S.DetailRow>
          <S.Label>요금제</S.Label>
          <S.OttText>{ratePlan}</S.OttText>
        </S.DetailRow>
        <S.DetailRow>
          <S.Label>가격</S.Label>
          <S.OttText>{price}원</S.OttText>
        </S.DetailRow>
        <S.DetailRow>
          <S.Label>납부일</S.Label>
          <S.OttText>{paymentDate}</S.OttText>
        </S.DetailRow>
        <S.DetailRow>
          <S.Label>현재 팟 인원</S.Label>
          <S.OttText>{memberCount}명</S.OttText>
        </S.DetailRow>
      </S.OttDetails>
    </S.OttInfoWrap>
  );
};

export default OttInfo;
