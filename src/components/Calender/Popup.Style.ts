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
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background-color: white;
  border-radius: 30px;
  padding: 20px;
  position: relative;
  width: 230px;
  height: 230px;
`;

export const Title = styled.div`
  padding-top: 11px;
  padding-left: 5px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  font-size: 1.1em;
  cursor: pointer;
`;

export const EventDate = styled.h3`
  margin: 0;
  padding-left: 10px;
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
`;

export const EventTit = styled.div`
  display: flex;
  padding-left: 5px;
  font-size: 16px;
  padding-top: 1.2px;
  text-align: center;
  align-items: center;
  font-weight: 500;
`;

export const EventTitWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-left: 16px;
`;

export const ColorDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

export const EventSubtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
