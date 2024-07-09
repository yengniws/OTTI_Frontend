import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 375px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;
  display: block;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 45%;
  padding: 10px;
  margin: 10px 5px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  &:nth-child(1) {
    background-color: #333;
    color: #fff;
  }
  &:nth-child(2) {
    background-color: #f44336;
    color: #fff;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
