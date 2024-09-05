import styled from 'styled-components';

export const ListCont = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const ImgWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 16px;
`;

export const PlatformImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ListText = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #666;
`;

export const CommentCount = styled.div`
  font-size: 14px;
  color: #666;
`;
