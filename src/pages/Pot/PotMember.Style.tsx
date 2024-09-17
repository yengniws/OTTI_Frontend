import styled from 'styled-components';

export const PotMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  margin: 0 auto;
`;

export const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 0.5px solid black;
`;

export const PotMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 25px;
`;

export const MemberItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 0;
  border-bottom: 0.5px solid #ddd;
`;

export const MemberImg = styled.img`
  width: 70px;
  height: 70px;
  background-color: #f2f2f2;
  border-radius: 50%;
  margin-right: 16px;
`;

export const MemberNickname = styled.span`
  flex: 1;
  font-size: 16px;
`;

export const LeaderBadge = styled.span`
  padding: 6px 12px;
  border: 0.5px solid #000;
  border-radius: 15px;
  font-size: 12px;
  color: #000;
`;

// 모달 관련 스타일 추가
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  width: 230px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 50px;
`;

export const ModalText = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ModalButton = styled.button<{ color: string }>`
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  background-color: ${({ color }) => color};
  color: white;
  cursor: pointer;
  width: 40%;
  font-size: 14px;
`;
