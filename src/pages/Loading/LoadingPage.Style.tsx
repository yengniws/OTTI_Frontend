import styled, { keyframes } from 'styled-components';

export const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
`;

// 전체 페이지 컨테이너
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  background-color: #222222;
  /* opacity: 0.75; */
  margin: 0 auto;
`;

// 로고 컨테이너
export const LogoContainer = styled.div`
  position: relative;
`;

// OTTi 로고 이미지 스타일
export const OttiLogo = styled.img`
  width: 170px; // 로고의 크기
`;

// 아이콘 이미지 스타일
export const IconLogo = styled.img`
  position: absolute;
  top: -20px; // OTTi 이미지에 맞춰 아이콘을 배치
  right: -10px;
  width: 25px; // 아이콘 크기
  animation: ${bounce} 0.5s 0.2s cubic-bezier(0, 0, 0.18, 0.99) infinite
    alternate;
`;
