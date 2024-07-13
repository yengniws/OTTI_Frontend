// NotificationPanel.tsx
import React from 'react';
import * as S from './NotificationPanel.Style';

interface NotificationPanelProps {
  isOpen: boolean;
  notifications: Array<{ id: number; text: string; isRead: boolean }>;
  onClose: () => void;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({
  isOpen,
  notifications,
  onClose,
}) => {
  return (
    <S.Panel isOpen={isOpen}>
      <S.CloseBtn onClick={onClose}>X</S.CloseBtn>
      <S.Title>알림</S.Title>
      {notifications.map((notification) => (
        <S.NotificationItem key={notification.id} isRead={notification.isRead}>
          {notification.text}
        </S.NotificationItem>
      ))}
    </S.Panel>
  );
};

export default NotificationPanel;
