// import styled from 'styled-components';

// export const Wrapper = styled.div`
//   width: 375px;
// `;

// export const CommuniyContainer = styled.div`
//   // margin: 0 auto;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   max-width: 375px;
//   height: 100vh;
//   padding: 0 20px;
//   box-sizing: border-box;
//   margin-top: 10px;
//   overflow: hidden;
//   overflow-y: auto;
//   margin-bottom: 85px;
//   z-index: 50;
// `;

// export const TitleWrapper = styled.header`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   width: 100%;
//   max-width: 375px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #fff;
//   border-bottom: 0.5px solid black;
//   margin: 0 auto;
//   z-index: 100; // 컨텐츠보다 위에 표시되도록 z-index 조정
// `;

// export const PostContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
//   position: fixed;
// `;

// export const PaginationWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   margin-top: 16px;
// `;

// export const PaginationButton = styled.button`
//   padding: 8px 16px;
//   font-size: 14px;
//   color: #fff;
//   background-color: #007bff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0056b3;
//   }

//   &:disabled {
//     background-color: #d3d3d3;
//     cursor: not-allowed;
//   }
// `;

import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 375px;
  height: 100vh; // Wrapper의 높이를 전체 화면으로 설정
  display: flex;
  flex-direction: column;
`;

export const CommuniyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
  height: 100%; // Wrapper에 맞춰 100% 높이로 설정
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 10px;
  overflow: hidden;
  overflow-y: auto;
  margin-bottom: 85px;
  z-index: 50;
`;

export const TitleWrapper = styled.header`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 0.5px solid black;
  z-index: 100; // 컨텐츠보다 위에 표시되도록 z-index 조정
`;

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 60px; // TitleWrapper 아래에 여백을 추가
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`;
