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
  width: 200px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
`;

export const EventDate = styled.h3`
  margin: 0;
  text-align: center;
`;

export const EventTit = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 1.2em;
  text-align: center;
`;
