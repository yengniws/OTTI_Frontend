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
  padding-left: 20px;
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
  padding-left: 20px;
  height: 370px;
  font-size: 14px;
  border: none;
  resize: none;
  outline: none;

  &:focus {
    border-color: #888;
  }
`;

export const ImageWrapper = styled.div`
  border-top: 1px solid #ddd;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
`;

export const ImagePreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  img {
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
  }
`;
