import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  background-color: #222;
  color: #fff;
  box-sizing: border-box;
`;

export const WelcomeText = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 9rem;
  margin-top: 8rem;
`;

export const LoginButtonContainer = styled.div`
  width: 80%;
  max-width: 300px;
  display: flex;
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
`;
