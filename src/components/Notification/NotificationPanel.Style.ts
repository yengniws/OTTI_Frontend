// import styled from 'styled-components';

// export const Panel = styled.div<{ isOpen: boolean }>`
//   position: absolute;
//   top: 0px;
//   right: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
//   width: 75%;
//   height: 100%;
//   background-color: white;
//   transition: right 0.3s ease-out;
//   z-index: 999;
//   overflow-y: auto;
//   border-radius: 20px 0px 0px 0px;
//   background-shadow: rgb(0, 0, 0.3);
// `;

// export const CloseBtn = styled.button`
//   position: absolute;
//   top: 51px;
//   right: 20px;
//   background: none;
//   border: none;
//   font-size: 1.1em;
//   cursor: pointer;
// `;

// export const Title = styled.h2`
//   font-size: 18px;
//   font-weight: 600;
//   margin-left: 30px;
//   margin-top: 50px;
//   padding: 0 20px;
// `;

// export const NotificationItem = styled.div<{ isRead: boolean }>`
//   padding: 10px 20px;
//   border-bottom: 1px solid #eee;
//   ${(props) =>
//     !props.isRead &&
//     `
//     font-weight: bold;
//     &::before {
//       content: '•';
//       color: red;
//       margin-right: 5px;
//     }
//   `}
// `;

// import styled from 'styled-components';

// export const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 100;
// `;

// export const Panel = styled.div<{ isOpen: boolean }>`
//   position: absolute;
//   top: 0px;
//   right: 0px;
//   width: 75%;
//   height: 100%;
//   background-color: white;
//   transition: right 0.3s ease-out;
//   z-index: 999;
//   overflow-y: auto;
//   border-radius: 20px 0px 0px 0px;
//   box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
// `;

// export const PanelHeader = styled.div`
//   font-size: 18px;
//   font-weight: 600;
//   margin-left: 30px;
//   margin-top: 50px;
//   padding: 0 20px;
// `;

// export const Title = styled.h2`
//   margin: 0px;
// `;

// export const CloseBtn = styled.button`
//   position: absolute;
//   top: 51px;
//   right: 20px;
//   background: none;
//   border: none;
//   font-size: 1.1em;
//   cursor: pointer;
// `;

// export const NotificationList = styled.ul`
//   list-style-type: none;
//   padding: 0;
// `;

// export const NotificationItem = styled.li`
//   padding: 10px 20px;
//   border-bottom: 1px solid #eee;
//   ${(props) =>
//     !props.isRead &&
//     `
//     font-weight: bold;
//     &::before {
//       content: '•';
//       color: red;
//       margin-right: 5px;
//     }
//   `}
// `;

// export const UnreadDot = styled.span`
//   position: absolute;
//   left: -15px;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 8px;
//   height: 8px;
//   background-color: red;
//   border-radius: 50%;
// `;

import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const Panel = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 85%;
  height: 100%;
  background-color: white;
  transition: right 0.3s ease-out;
  z-index: 999;
  overflow-y: auto;
  border-radius: 20px 0px 0px 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.1em;
  padding: 30px 10px 0px 15px;
`;

export const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.3em;
  cursor: pointer;
  padding-top: 25px;
`;

export const NotificationList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const NotificationItem = styled.li<{ isRead: boolean }>`
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  position: relative;
  margin: 0px 20px;
  font-size: 14px;

  // &::before {
  //   &::before {
  //     content: ${(props) => (!props.isRead ? "'•'" : "''")};
  //     color: red;
  //     margin-right: 10px;
  //     position: absolute;
  //     left: 10px;
  //     top: 50%;
  //     transform: translateY(-50%);
  //   }
`;

export const UnreadDot = styled.span`
  position: relative;
  left: 10px;
  top: 100%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50%;
`;
