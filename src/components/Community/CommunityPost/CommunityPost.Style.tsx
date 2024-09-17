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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Author = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const CreatedAt = styled.div`
  font-size: 12px;
  color: #888;
`;

export const Body = styled.div`
  margin-top: 8px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #222;
  margin-bottom: 8px;
`;

export const Content = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  margin: 20px;
`;

export const PostImage = styled.div`
  width: 85px;
  height: auto;
  display: block;
`;
