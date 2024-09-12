import styled from 'styled-components';

export const CommuniyContainer = styled.div`
  position: relative;
  flex-direction: column;
  width: 375px;
  max-width: 375px;
  height: 100vh;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 10px;
  overflow: hidden;
  overflow-y: auto;
  z-index: 50;
  margin: 0 auto;
`;

export const TitleWrapper = styled.header`
  width: 100%;
  max-width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 0.5px solid black;
  margin: 0 auto;
`;

export const BottomNavBarWrapper = styled.div`
  position: fixed; // 화면에 고정
  bottom: 0; // 화면의 세로상 최하단에 위치
  left: 50%; // 가로상 중앙에 위치
  transform: translateX(-50%); // 정확히 중앙 정렬
  width: 100%;
  max-width: 375px;
  z-index: 99;
  padding: 0;
  overflow: hidden;
`;

// import styled from 'styled-components';

// export const CommuniyContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   max-width: 375px;
//   height: 100vh;
// `;

// export const TitleWrapper = styled.header`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   border-bottom: 0.5px solid black;
// `;
