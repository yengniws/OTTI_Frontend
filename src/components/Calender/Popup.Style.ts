import styled from 'styled-components';

export const PopupCont = styled.div`
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

export const PopupContent = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  width: 250px;
  height: 250px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.1em;
  cursor: pointer;
`;

export const EventDate = styled.h3`
  margin: 0;
  padding-left: 10px;
  padding-top: 2px;
  font-weight: 500;
`;

export const EventTit = styled.div`
  display: flex;
  padding-left: 5px;
  font-size: 0.9em;
  text-align: center;
  align-items: center;
  font-weight: 500;
`;

export const EventTitWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-left: 11px;
`;

export const ColorDot = styled.span`
  width: 11px;
  height: 11px;
  border-radius: 50%;
`;

export const EventSubtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
