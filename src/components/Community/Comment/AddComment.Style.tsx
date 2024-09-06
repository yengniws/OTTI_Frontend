import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: #f4f4f4;
`;

export const AddBtn = styled.button`
  padding: 8px 16px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  // transition: background-color 0.3s;

  // &:hover {
  //   background-color: #ddd;
  // }
`;
