// Main.tsx
import React, { useState } from 'react';
import * as S from './Main.Style';
import NotificationIcon from '../../components/NotificationIcon';
import NotificationPanel from '../../components/NotificationPanel';

interface Notification {
  id: number;
  text: string;
  isRead: boolean;
}

const Main = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
    if (!isNotificationOpen) {
      markAllAsRead();
    }
  };

  const addNotification = (text: string) => {
    const newNotification: Notification = {
      id: Date.now(),
      text,
      isRead: false,
    };
    setNotifications([...notifications, newNotification]);
    setUnreadCount(unreadCount + 1);
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notif) => ({ ...notif, isRead: true })),
    );
    setUnreadCount(0);
  };

  return (
    <S.MainContainer>
      <S.Header>
        <S.Logo>OTTi</S.Logo>
        <NotificationIcon
          unreadCount={unreadCount}
          onClick={toggleNotification}
        />
      </S.Header>
      <NotificationPanel
        isOpen={isNotificationOpen}
        notifications={notifications}
        onClose={() => setIsNotificationOpen(false)}
      />
    </S.MainContainer>
  );
};

export default Main;
