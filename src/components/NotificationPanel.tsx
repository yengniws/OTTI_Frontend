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
//     setNotifications((prevNotifications) =>
//       prevNotifications.map((notif) => ({ ...notif, isRead: true })),
//     );
//   };

//   return (
//     <>
//       <NotificationIcon unreadCount={unreadCount} onClick={togglePanel} />
//       {isOpen && (
//         <>
//           <S.Overlay onClick={togglePanel} />
//           <S.Panel isOpen={isOpen}>
//             <S.PanelHeader>
//               <S.Title>알림</S.Title>
//               <S.CloseBtn onClick={togglePanel}>x</S.CloseBtn>
//             </S.PanelHeader>
//             <S.NotificationList>
//               {notifications.map((notif) => (
//                 <S.NotificationItem key={notif.id} isRead={notif.isRead}>
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
import {
  fetchAllNotifications,
  markNotificationAsRead,
} from '../api/notifications';

interface Notification {
  id: number;
  type: string;
  message: string;
  isRead: boolean;
}

const NotificationPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const notifications = await fetchAllNotifications();
        if (Array.isArray(notifications)) {
          setNotifications(notifications);
        } else {
          console.error('Invalid notifications data', notifications);
        }
      } catch (error) {
        console.error('Failed to fetch notifications', error);
      }
    };

    loadNotifications();
  }, []);

  const unreadCount = notifications.filter((notif) => !notif.isRead).length;

  const togglePanel = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      markAllAsRead();
    }
  };

  const markAllAsRead = async () => {
    try {
      await Promise.all(
        notifications.map((notif) => {
          if (!notif.isRead) {
            return markNotificationAsRead(notif.id);
          }
          return Promise.resolve();
        }),
      );
      setNotifications((prevNotifications) =>
        prevNotifications.map((notif) => ({ ...notif, isRead: true })),
      );
    } catch (error) {
      console.error('Failed to mark notifications as read', error);
    }
  };

  const getNotificationText = (type: string): string => {
    switch (type) {
      case 'application_received':
        return '팟 신청이 들어왔습니다!';
      case 'application_approved':
        return '팟 신청이 승인되었습니다!';
      case 'application_rejected':
        return '팟 신청이 거부되었습니다!';
      default:
        return '알림이 도착했습니다!';
    }
  };

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
                  {getNotificationText(notif.type)}
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
