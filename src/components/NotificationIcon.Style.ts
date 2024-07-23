import styled from 'styled-components';

export const NotificationIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 20px;
`;

export const UnreadBadge = styled.span`
  position: absolute;
  top: 28px;
  right: -2px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 2px;
  font-size: 11px;
  min-width: 17px;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
