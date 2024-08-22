import styled from 'styled-components';

export const MypageContainer = styled.div`
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
export const TitleWrapper = styled.header`
  width: 100%;
  max-width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 0.5px solid black;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 80%;
  height: 15%;
  border-bottom: 0.5px solid #ccc;
`;

export const ProfilePicture = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 50%;
`;

export const Nickname = styled.div`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
  text-align: left;
  /* border: 1px solid black; */
`;

export const EditButton = styled.button`
  padding: 5px 10px;
  border: 0.5px solid #000;
  background-color: transparent;
  border-radius: 15px;
  cursor: pointer;
  width: 75px;
  height: 29px;
  font-size: 10px;
`;

export const TopMenuList = styled.div`
  margin: 20px 0;
  display: flex;
  width: 80%;
  justify-content: space-around;
`;

export const TopMenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 72px;
  padding: 5px;
  background-color: #222222;
  color: white;
  font-size: 12px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const MenuItem = styled.div`
  padding: 10px;
  border: none;

  text-align: left;
  margin-top: 20px;
  cursor: pointer;
  position: relative;
  border-bottom: 0.5px solid #ccc;

  &::after {
    content: '>';
    position: absolute;
    left: 90%;
  }
`;

export const BottomNavBarWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-width: 375px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000; // z-index를 높게 설정하여 최상단에 위치하도록 함
  padding: 0; // MainContainer의 padding 영향을 받지 않도록 설정
`;
