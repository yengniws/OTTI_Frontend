import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`;

export const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const Author = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`;

export const Content = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin: 0;
`;
