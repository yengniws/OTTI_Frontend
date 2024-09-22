import styled from 'styled-components';

export const PotApplicationListContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  max-width: 375px; // 최대 너비 설정
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  max-width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 0.5px solid black;
`;

export const ApplicationsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 20px;
`;

export const ApplicationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  border-bottom: 0.5px solid #ccc;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfilePicture = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PotName = styled.div`
  font-size: 12px;
  margin-bottom: 2px;
`;

export const Nickname = styled.div`
  font-size: 16px;
  margin-bottom: 2px;
`;

export const Message = styled.div`
  font-size: 12px;
  color: #888888;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const AcceptButton = styled.button`
  padding: 4px 10px;
  background-color: #222222;
  color: white;
  font-size: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const RejectButton = styled.button`
  padding: 4px 10px;
  background-color: #222222;
  color: #f06d62;
  font-size: 12px;
  border: 1px solid #222222;
  border-radius: 4px;
  cursor: pointer;
`;
