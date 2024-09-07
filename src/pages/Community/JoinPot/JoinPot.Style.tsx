import styled from 'styled-components';

export const JoinPotWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;
