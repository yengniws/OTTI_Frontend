// import styled from 'styled-components';

// // 페이지네이션 컨테이너
// export const PaginationWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 20px 0;
// `;

// export const PageButton = styled.button<{ disabled: boolean }>`
//   background: none;
//   border: none;
//   color: #333;
//   font-size: 1.2rem;
//   margin: 0 10px;
//   cursor: pointer;

//   ${({ disabled }) =>
//     disabled &&
//     `
//     cursor: not-allowed;
//     opacity: 0.5;
//   `}
// `;

// export const PageNumber = styled.button<{ isActive: boolean }>`
//   background: none;
//   border: none;
//   font-size: 1rem;
//   margin: 0 5px;
//   cursor: pointer;

//   ${({ isActive }) =>
//     isActive
//       ? `
//       font-weight: bold;
//       color: #000;
//     `
//       : `
//       color: #ddd;
//     `}
// `;

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
//   width: 100%;
//   max-width: 375px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #fff;
//   border-bottom: 0.5px solid black;
//   margin: 0 auto;
// `;

// export const BottomNavBarWrapper = styled.div`
//   position: fixed; // 화면에 고정
//   bottom: 0; // 화면의 세로상 최하단에 위치
//   left: 50%; // 가로상 중앙에 위치
//   transform: translateX(-50%); // 정확히 중앙 정렬
//   width: 100%;
//   max-width: 375px;
//   z-index: 99;
//   padding: 0;
//   overflow: hidden;
// `;

import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const CommuniyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button<{ disabled?: boolean }>`
  padding: 10px;
  border: none;
  background-color: #333;
  color: white;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background-color: #000;
  }
`;

export const PageNumber = styled.button<{ isActive: boolean }>`
  padding: 10px;
  margin: 0 5px;
  border: none;
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? '#000' : '#ddd')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

export const BottomNavBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
`;
