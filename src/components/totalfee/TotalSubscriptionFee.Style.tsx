// import styled from 'styled-components';

// export const TotalFeeContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   // align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100px;
//   background-color: #f0f0f0;
//   border-radius: 8px;
// `;

// export const TotalFeeTitle = styled.div`
//   font-size: 18px;
//   font-weight: 400;
//   margin-bottom: 8px;
//   margin-left: 30px;
// `;

// export const TotalFeeAmount = styled.div`
//   margin-left: 80px;
//   font-size: 16px;
//   color: #333;
// `;
// TotalSubscriptionFee.Style.ts
import styled from 'styled-components';

// export const TotalFeeContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   height: 110px;
//   background-color: #f0f0f0;
//   border-radius: 8px;
//   padding: 20px;
//   box-sizing: border-box;
// `;
export const TotalFeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 118px;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`;

export const TotalFeeTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: -10px;
  margin-bottom: 10px;
  margin-left: 10px;
  align-self: flex-start;
`;

export const TotalFeeAmount = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #333;
`;
