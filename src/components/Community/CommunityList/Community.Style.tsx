import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the container */
  padding: 0;
  margin: 0 auto;
  max-width: 600px;
  list-style: none;
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
`;

export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin-bottom: 16px;
`;

export const FlexWrap = styled.div`
  display: flex;
  margin-right: 50px;
`;

export const ListItem = styled.li`
  display: column;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 12px;
  padding-top: 18px;
  padding-left: 17px;
  padding-right: 17px;
  padding-bottom: 10px;
  // box-shadow: 2px 2px 4px 0px rgba(0.4, 0.4, 0.4, 0.1);
  box-shadow: 0px 0px 3px 2px #ddd;
  border: 1px solid #ddd;
  width: 100%;
`;

export const ImgWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 12px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlatformImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  min-width: 0;
  text-align: left;
`;

export const Title = styled.h3`
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const Author = styled.span`
  font-size: 12px;
  color: #757575;
  margin-right: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Prevents text from wrapping */
`;

export const CreatedAt = styled.span`
  font-size: 12px;
  color: #757575;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Keeps the timestamp on one line */
`;

export const Description = styled.p`
  margin: 0;
  font-size: 14px;
  color: #545454;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CommentWrapper = styled.div`
  display: flex;
  // align-items: center;
  margin-left: 218px;
  padding-top: 5px;
  flex-shrink: 0;
`;

export const CountWrapper = styled.div`
  margin-right: 10px;
  // align-items: center;
`;

export const CommentCount = styled.span`
  margin-left: 4px;
  font-size: 14px;
  color: #757575;
`;

export const ViewCount = styled.span`
  margin-left: 4px;
  font-size: 14px;
  color: #757575;
`;
