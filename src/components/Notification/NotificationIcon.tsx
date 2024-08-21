import React from 'react';
import { IoNotifications } from 'react-icons/io5';
import * as S from './NotificationIcon.Style';

interface NotificationIconProps {
  unreadCount: number;
  onClick: () => void;
}

const NotificationIcon: React.FC<NotificationIconProps> = ({
  unreadCount,
  onClick,
}) => {
  return (
    <S.NotificationIconWrapper onClick={onClick}>
      <IoNotifications size={24} />
      {unreadCount > 0 && <S.UnreadBadge>{unreadCount}</S.UnreadBadge>}
    </S.NotificationIconWrapper>
  );
};

export default NotificationIcon;
