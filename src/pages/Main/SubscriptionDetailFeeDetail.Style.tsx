import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 375px;
  height: 100vh;
`;

export const PageContainer = styled.div`
  padding: 0 16px;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 65vh;
  padding: 0 20px;
  background-color: #f5f5f5;
  border-radius: 30px;
`;

export const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 0.5px solid black;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 375px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const PieChartTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding-left: 20px;
  padding-top: 30px;
  padding-bottom: 10px;
  align-self: flex-start;
`;
