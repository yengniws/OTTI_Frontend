import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`;

export const CommentItem = styled.div`
  display: flex;
  flex-direction: vertical;
  padding: 12px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  margin-right: 12px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
`;

export const Nickname = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
  margin-top: 3px;
`;

export const CommentWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  min-width: 0;
  text-align: left;
`;

export const CreatedAt = styled.div`
  font-size: 12px;
  color: #757575;
  white-space: nowrap;
`;

export const Content = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin: 0;
`;
