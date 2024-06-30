import styled from 'styled-components';

// ★컨테이너
export const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 375px; // 최대 너비 설정
  height: 100vh;
  margin: 0 auto;
  background-color: #333;
  color: #fff;
  box-sizing: border-box;
`;

// 로고 이미지
export const Logo = styled.img`
  width: 72px;
  margin-bottom: 20px;
`;

// 타이틀
export const Title = styled.h1`
  font-size: 2rem; // 크기를 줄임
  font-weight: 300; // 폰트 굵기를 줄임
  margin: 0;
  letter-spacing: 1px; // 글자 간격을 약간 늘림
`;
