import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  box-sizing: border-box;
  margin-top: 10px;
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 24px;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
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
