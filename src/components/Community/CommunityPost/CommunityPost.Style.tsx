import styled from 'styled-components';

export const PostContainer = styled.div`
  background-color: #fff;
  border: none;
  // padding: 16px;
  // margin-bottom: 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Author = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #333;
  margin-bottom: 4px;
`;

export const CreatedAt = styled.div`
  font-size: 14px;
  color: #888;
`;

export const Body = styled.div`
  margin-top: 18px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #222;
  margin-bottom: 4px;
`;

export const Content = styled.p`
  font-size: 14px;
  color: #555;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  width: 30%;
  height: auto;
`;
