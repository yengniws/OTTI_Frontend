import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 375px;
  height: 100vh;
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
