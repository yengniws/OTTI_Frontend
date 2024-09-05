import styled from 'styled-components';

export const WritePost = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

export const Input = styled.input`
  padding: 12px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #888;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px;
  height: 150px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  outline: none;

  &:focus {
    border-color: #888;
  }
`;
