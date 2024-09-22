import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
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

export const SearchResults = styled.div`
  // margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  padding: 0 10px;
  box-sizing: border-box;
  margin-top: 10px;
  overflow: hidden;
  overflow-y: auto;
  z-index: 50;
`;
