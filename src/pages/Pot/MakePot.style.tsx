import styled from 'styled-components';

export const AddOttWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 375px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 0.5px solid black;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  width: 85%;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
`;

export const OttName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0 15%;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0 10px;
  flex: 1;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TextMemo = styled.p`
  font-size: 14px;
  margin: 0 10px;
  flex: 1;
  text-align: left;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0;
  display: block;
  width: 40%;
  text-align: left;
`;

export const LabelMemo = styled.label`
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0;
  display: block;
  width: 85%;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  font-size: 14px;
  box-sizing: border-box;
  background-color: inherit;
  text-align: right;
  font-weight: bold;

  margin: 0 10px;
  flex: 1;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SelectOttName = styled.select`
  width: auto;
  height: 40px;
  padding: 10px;
  border: none;
  box-sizing: border-box;
  background-color: inherit;
  text-align: right;
  font-weight: bold;
  font-size: 20px;
  margin: 0 15%;

  &:focus {
    outline: none;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: auto;
  padding: 10px;
  border: none;
  font-size: 14px;
  box-sizing: border-box;
  background-color: inherit;
  text-align: right;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 40%;
  padding: 10px;
  margin: 10px 5px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(1) {
    background-color: #333;
    color: #fff;
    opacity: 0.9;
  }
  &:nth-child(2) {
    background-color: #f44336;
    color: #fff;
    opacity: 0.9;
  }
  &:hover {
    opacity: 1;
  }
`;

export const ButtonSave = styled(Button)`
  background-color: #333;
  color: #fff;
  opacity: 0.9;
  width: 90%;
  margin-left: 5%;

  &:hover {
    opacity: 1;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
`;

export const Divider = styled.hr`
  width: 85%;
  border: 0;
  border-top: 0.5px solid #000;
  margin: 10px 0;
`;

export const ButtonWrapper = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const DoneButton = styled.button`
  width: 90%;
  padding: 14px;
  margin: 16px 0;
  background-color: #222222;
  margin: 16px 0;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;
