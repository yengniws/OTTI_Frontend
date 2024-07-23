// import React from 'react';
// import * as S from './NotificationPanel.Style';

// interface NotificationPanelProps {
//   isOpen: boolean;
//   notifications: Array<{ id: number; text: string; isRead: boolean }>;
//   onClose: () => void;
// }

// const NotificationPanel: React.FC<NotificationPanelProps> = ({
//   isOpen,
//   notifications,
//   onClose,
// }) => {
//   return (
//     <S.Panel isOpen={isOpen}>
//       <S.CloseBtn onClick={onClose}>X</S.CloseBtn>
//       <S.Title>알림</S.Title>
//       {notifications.map((notification) => (
//         <S.NotificationItem key={notification.id} isRead={notification.isRead}>
//           {notification.text}
//         </S.NotificationItem>
//       ))}
//     </S.Panel>
//   );
// };

// export default NotificationPanel;

// import React, { useState, useEffect } from 'react';
// import NotificationIcon from './NotificationIcon';
// import * as S from './NotificationPanel.Style';

// interface Notification {
//   id: number;
//   text: string;
//   isRead: boolean;
// }

// const NotificationPanel: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [notifications, setNotifications] = useState<Notification[]>([
//     { id: 1, text: '팟 가입 신청이 승인되었어요!', isRead: false },
//     { id: 2, text: '팟 신청이 들어왔어요!', isRead: false },
//     { id: 3, text: '팟 가입 신청이 승인되었어요!', isRead: false },
//   ]);

//   const unreadCount = notifications.filter((notif) => !notif.isRead).length;

//   const togglePanel = () => {
//     setIsOpen(!isOpen);
//     if (!isOpen) {
//       markAllAsRead();
//     }
//   };

//   const markAllAsRead = () => {
//     setNotifications(
//       notifications.map((notif) => ({ ...notif, isRead: true })),
//     );
//   };

//   return (
//     <>
//       <NotificationIcon unreadCount={unreadCount} onClick={togglePanel} />
//       {isOpen && (
//         <>
//           <S.Overlay onClick={togglePanel} />
//           <S.Panel>
//             <S.PanelHeader>
//               <S.Title>알림</S.Title>
//               <S.CloseBtn onClick={togglePanel}>x</S.CloseBtn>
//             </S.PanelHeader>
//             <S.NotificationList>
//               {notifications.map((notif) => (
//                 <S.NotificationItem key={notif.id}>
//                   {!notif.isRead && <S.UnreadDot />}
//                   {notif.text}
//                 </S.NotificationItem>
//               ))}
//             </S.NotificationList>
//           </S.Panel>
//         </>
//       )}
//     </>
//   );
// };

// export default NotificationPanel;

import React, { useState, useEffect } from 'react';
import NotificationIcon from './NotificationIcon';
import * as S from './NotificationPanel.Style';

interface Notification {
  id: number;
  text: string;
  isRead: boolean;
}

const NotificationPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, text: '팟 가입 신청이 승인되었어요!', isRead: false },
    { id: 2, text: '팟 신청이 들어왔어요!', isRead: false },
    { id: 3, text: '팟 가입 신청이 승인되었어요!', isRead: false },
  ]);

  const unreadCount = notifications.filter((notif) => !notif.isRead).length;

  const togglePanel = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      markAllAsRead();
    }
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notif) => ({ ...notif, isRead: true })),
    );
  };

  useEffect(() => {
    if (!isOpen) {
      markAllAsRead();
    }
  }, [isOpen]);

  return (
    <>
      <NotificationIcon unreadCount={unreadCount} onClick={togglePanel} />
      {isOpen && (
        <>
          <S.Overlay onClick={togglePanel} />
          <S.Panel isOpen={isOpen}>
            <S.PanelHeader>
              <S.Title>알림</S.Title>
              <S.CloseBtn onClick={togglePanel}>x</S.CloseBtn>
            </S.PanelHeader>
            <S.NotificationList>
              {notifications.map((notif) => (
                <S.NotificationItem key={notif.id} isRead={notif.isRead}>
                  {!notif.isRead && <S.UnreadDot />}
                  {notif.text}
                </S.NotificationItem>
              ))}
            </S.NotificationList>
          </S.Panel>
        </>
      )}
    </>
  );
};

export default NotificationPanel;
