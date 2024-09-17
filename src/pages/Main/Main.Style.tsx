import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 10px;
  overflow: hidden;
  overflow-y: auto;
  margin-bottom: 85px;
  z-index: 50;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 10px 16px;
  background-color: #fff;
  margin-bottom: 16px;
  font-weight: 600;
`;

export const Balance = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const NotificationIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const UnreadBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px 8px;
  font-size: 12px;
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

export const PageContainer = styled.div`
  padding: 0 16px;
`;
