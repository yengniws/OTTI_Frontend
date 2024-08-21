import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NotificationIcon from './NotificationIcon';
import * as S from './NotificationPanel.Style';

interface Notification {
  id: number;
  text: string;
  isRead: boolean;
}

const fetchAllNotifications = async (): Promise<Notification[]> => {
  try {
    const response = await axios.get('/api/notifications');
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};

const markNotificationAsRead = async (id: number): Promise<void> => {
  try {
    await axios.put(`/api/notifications/${id}/read`);
  } catch (error) {
    console.error('Error marking notification as read:', error);
    throw error;
  }
};

const NotificationPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const fetchedNotifications = await fetchAllNotifications();
        setNotifications(fetchedNotifications);
        setUnreadCount(
          fetchedNotifications.filter((notif) => !notif.isRead).length,
        );
      } catch (error) {
        console.error('Failed to fetch notifications', error);
      }
    };

    loadNotifications();
  }, []);

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
      setUnreadCount(0);
    } catch (error) {
      console.error('Failed to mark notifications as read', error);
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
