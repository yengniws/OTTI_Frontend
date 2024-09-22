import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  margin: 0 auto;
`;

export const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 0.5px solid black;
`;

export const CommunityPostWrapper = styled.div`
  border-bottom: 1px solid #ddd;
`;

export const PageWrapper = styled.div`
  max-width: 375px;
  box-sizing: border-box;
  padding: 0px 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
