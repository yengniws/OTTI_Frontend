import styled from 'styled-components';

export const Panel = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0px;
  right: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  width: 75%;
  height: 100%;
  background-color: white;
  transition: right 0.3s ease-out;
  z-index: 999;
  overflow-y: auto;
  border-radius: 20px 0px 0px 0px;
  background-shadow: rgb(0, 0, 0.3);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 51px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.1em;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
  margin-top: 50px;
  padding: 0 20px;
`;

export const NotificationItem = styled.div<{ isRead: boolean }>`
  padding: 10px 20px;
  border-bottom: 1px solid #eee;
  ${(props) =>
    !props.isRead &&
    `
    font-weight: bold;
    &::before {
      content: '•';
      color: red;
      margin-right: 5px;
    }
  `}
`;
