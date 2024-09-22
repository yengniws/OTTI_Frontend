import styled from 'styled-components';

export const PotDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  margin: 0 auto;
`;

export const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 0.5px solid black;
`;

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 36px;
  padding-bottom: 20px;
  padding-left: 20px;
  width: 100%;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding-right: 8px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding-bottom: 2px;
  width: 79%;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 375px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  width: 85%;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
`;

export const OttName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0 15%;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0 10px;
  flex: 1;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0;
  display: block;
  width: 24%;
  text-align: left;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
`;

export const Divider = styled.hr`
  width: 85%;
  border: 0;
  border-top: 0.5px solid #000;
  margin: 10px 0;
`;
