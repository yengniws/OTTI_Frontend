import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
`;

export const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px;
  margin-top: 50px;
`;

export const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 0.5px solid black;
`;

export const ProfilePictureSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
`;

export const ProfilePicture = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 50%;
`;

export const EditIcon = styled.label`
  position: absolute;
  bottom: -3px;
  right: -2px;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;

export const ProfileInput = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

export const InputLabel = styled.label`
  font-size: 15px;
  flex: 1;
`;

export const Input = styled.input`
  flex: 2;
  padding: 10px;
  font-size: 15px;
  border: none;
  outline: none;
  border-radius: 5px;
  text-align: right;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-top: 20px;
`;

export const MenuItem = styled.div`
  font-size: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  position: relative;

  &::after {
    content: '>';
    position: absolute;
    right: 10px;
  }
`;

export const SaveButton = styled.button`
  width: 85%;
  padding: 15px;
  margin-top: 30%;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 15px;
`;

export const ResetButton = styled.button`
  padding: 5px 10px;
  border: 0.5px solid #000;
  background-color: transparent;
  border-radius: 15px;
  cursor: pointer;
  font-size: 10px;
  height: 25px;
  margin-bottom: 50px;
`;
