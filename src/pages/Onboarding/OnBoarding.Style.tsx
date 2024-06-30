import styled from 'styled-components';

// ★컨테이너
export const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #333;
  color: #fff;
`;

// 로고 이미지
export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

// 타이틀
export const Title = styled.h1`
  font-family: 'Huballi', sans-serif;
  font-size: 2rem;
  margin: 0;
`;
