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
  flex: 1;
  padding: 16px;
`;

export const PotItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const PotName = styled.div`
  flex: 1;
  margin-left: 16px;
  font-size: 16px;
`;

export const Arrow = styled.div`
  font-size: 18px;
  color: #888;
`;

export const CreatePotButton = styled.button`
  width: calc(100% - 32px);
  padding: 16px;
  margin: 16px;
  background-color: black;
  color: white;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const BottomNavBarWrapper = styled.div`
  width: 100%;
`;
