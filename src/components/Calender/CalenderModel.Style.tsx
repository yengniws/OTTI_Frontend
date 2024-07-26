import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
`;

export const ModalHeader = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
`;

export const ModalBody = styled.div``;

export const EventItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const EventIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff4081;
  margin-right: 10px;
`;

export const EventText = styled.span``;
