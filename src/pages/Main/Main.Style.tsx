import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  box-sizing: border-box;
  margin-top: 10px;
  position: relative; //하단네브바 고정용 스타일
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

export const BottomNavBarWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 375px;
`;
