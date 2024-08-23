import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 10px;
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
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const PieChartTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding-left: 20px;
  padding-top: 30px;
  padding-bottom: 10px;
  align-self: flex-start;
`;
