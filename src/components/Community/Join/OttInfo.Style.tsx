import styled from 'styled-components';

export const OttInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  //   width: 90%;
  //   padding: 20px;
  padding-top: 35px;
  padding-left: 35px;
  padding-right: 35px;
  padding-bottom: 35px;
  border-radius: 30px;
`;

export const OttImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const OttName = styled.p`
  font-size: 20px;
  margin: 0;
  width: 35%;
  //   padding-right: 25px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
  display: block;
`;

export const OttDetails = styled.div`
  display: flex;
  flex-direction: column;
  //   width: 85%;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid black;
  padding: 10px 0px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const OttText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #333;
`;
