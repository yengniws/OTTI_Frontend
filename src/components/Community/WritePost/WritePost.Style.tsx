import styled from 'styled-components';

export const WritePost = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 5px 0px;
`;

export const Input = styled.input`
  padding: 12px;
  margin: 5px 0px;
  font-size: 16px;
  border: none;
  outline: none;

  &:focus {
    border-color: #888;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px;
  height: 150px;
  font-size: 14px;
  border: none;
  resize: none;
  outline: none;

  &:focus {
    border-color: #888;
  }
`;
