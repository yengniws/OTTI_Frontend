import styled from 'styled-components';

export const MyPotListContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  max-width: 375px; // 최대 너비 설정
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  max-width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 0.5px solid black;
`;

export const PotList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 80%;
  height: 60%;
  overflow-y: auto; // 스크롤 가능하도록 설정
`;

export const PotItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 20%;
`;

export const PotName = styled.div`
  flex: 1;
  margin-left: 20px;
  font-size: 20px;
`;

export const Arrow = styled.div`
  font-size: 18px;
`;

export const BottomNavBarWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-width: 375px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000; // z-index를 높게 설정하여 최상단에 위치하도록 함
  padding: 0;
`;

export const MakePotButton = styled.button`
  width: 90%;
  padding: 14px;
  margin: 16px 0;
  background-color: #222222;
  margin: 16px 0;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;
