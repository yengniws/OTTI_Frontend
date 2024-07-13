import styled from 'styled-components';

export const Panel = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 80%;
  height: 100%;
  background-color: white;
  transition: right 0.3s ease-out;
  overflow-y: auto;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 20px 0;
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
