import styled from 'styled-components';

export const PotDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
`;

export const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 0.5px solid black;
`;

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 36px;
  padding-bottom: 20px;
  padding-left: 20px;
  width: 100%;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding-right: 8px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding-bottom: 2px;
  width: 79%;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 375px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0; // 마진을 줄였습니다.
`;

export const ServiceInfo = styled.div`
  display: flex;
  align-items: flex-start; // 상단에 정렬되도록 수정
`;

export const ServiceLogo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const ServiceDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 12px;
`;

export const ServiceInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ServiceLabel = styled.span`
  font-size: 14px;
  color: #666;
`;

export const ServiceValue = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const NoticeSection = styled.div`
  width: 90%;
  max-width: 375px;
  box-sizing: border-box;
  display: flex;
  align-items: center; // 텍스트와 아이콘이 수평으로 정렬
  margin-bottom: 12px;
`;

export const NoticeIcon = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

export const NoticeText = styled.p`
  font-size: 14px;
  color: #333;
  margin: 0;
`;

export const ActionButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 375px;
  z-index: 99;
`;

export const AddButton = styled.button`
  width: 90%;
  padding: 14px;
  background-color: #222;
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
