// import React from 'react';
// import * as S from './RegisterBtn.Style';

// interface RegisterBtnProps {
//   onClick: () => void;
// }

// const RegisterBtn: React.FC<RegisterBtnProps> = ({ onClick }) => {
//   return <S.RegisterBtn onClick={onClick}>등록</S.RegisterBtn>;
// };

// export default RegisterBtn;

import React from 'react';
import * as S from './RegisterBtn.Style';

interface RegisterBtnProps {
  onRegister: (access_token: string) => void;
}

const RegisterBtn: React.FC<RegisterBtnProps> = ({ onRegister }) => {
  const handleClick = () => {
    const access_token = 'YOUR_ACCESS_TOKEN_HERE'; // 실제 access_token을 가져와 사용
    onRegister(access_token); // Register 버튼 클릭 시 handleRegister 호출
  };

  return <S.RegisterBtn onClick={handleClick}>등록</S.RegisterBtn>;
};

export default RegisterBtn;
