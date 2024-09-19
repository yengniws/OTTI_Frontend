import styled from 'styled-components';

export const SearchCont = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const SearchInp = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
`;

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 8px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const SearchResults = styled.div`
  margin-bottom: 30px;
  border-bottom: 1px solid #ddd;
`;
