import styled from 'styled-components';

export const ListContainer = styled.div`
  position: relative;
  padding-top: 20px;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const ListTitleWrap = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
`;

export const ListTitle = styled.div`
  font-size: 17px;
  padding-right: 5px;
  font-weight: 600;
`;

export const ListContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f4f4f4;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 17px;
  margin: 10px auto;
`;

export const ListImageWrap = styled.div`
  /* width: 45px;
  height: 45px; */
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const ListImage = styled.img`
  width: 45px;
  height: auto;
  border-radius: 50px;
`;

export const ListTxtBox = styled.div`
  flex: 1;
  margin-left: 10px;
  font: 11px;
`;

export const ListTxtTitle = styled.div`
  font-size: 17px;
  font-weight: bold;
  padding-bottom: 3px;
`;

export const ListTxts = styled.div`
  font-size: 10px;
`;

export const ListDDayContainer = styled.div`
  background-color: #d9d9d9;
  padding: 10px;
  border-radius: 50px;
  width: 45px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ListDDayTxt = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const ButtonWrap = styled.div`
  padding-bottom: 1px; //이게 없으면 버튼 하단으로 여백이 안 생김,,,
`;

export const AddOttBtn = styled.button`
  display: block;
  width: 130px;
  padding: 15px;
  background-color: #000000;
  color: #ffffff;
  font-size: 18px;
  font-weight: bolder;
  text-align: center;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin: 20px auto;
`;
