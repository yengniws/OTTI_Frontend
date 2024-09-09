// import styled from 'styled-components';
// import { c } from 'vite/dist/node/types.d-aGj9QkWt';

// export const JoinDetailsWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 30px;
// `;

// export const InputWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const NameWrap = styled.div`
//   justify-content: space-between;
// `;

// export const Label = styled.label`
//   font-size: 14px;
//   color: #666;
//   margin-bottom: 5px;
// `;

// export const Input = styled.input`
//   padding: 10px;
//   border: none;
//   font-size: 14px;
//   color: #333;
// `;

// export const TextArea = styled.textarea`
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   font-size: 14px;
//   color: #333;
//   resize: none;
//   height: 30px;
// `;

import styled from 'styled-components';

export const JoinDetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
  border: 1px solid #333;
  border-radius: 30px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #333;
`;

export const Label = styled.label`
  font-size: 14px;
  //   color: #666;
  color: #333;
  margin-bottom: 5px;
  flex: 1;
`;

export const Input = styled.input`
  //   padding: 10px;
  border: none;
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  text-align: right;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: none;
  //   border-radius: 5px;
  font-size: 14px;
  color: #666;
  resize: none;
  height: 30px;
  background-color: #f4f4f4;
`;
