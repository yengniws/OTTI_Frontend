import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 375px;
`;
export const SearchContainer = styled.div`
  // margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 10px;
  overflow: hidden;
  overflow-y: auto;
  margin-bottom: 85px;
  z-index: 50;
`;

export const TitleWrapper = styled.header`
  width: 100%;
  max-width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 0.5px solid black;
  margin: 0 auto;
`;
