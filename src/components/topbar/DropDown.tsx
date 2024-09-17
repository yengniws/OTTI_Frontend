// import React from 'react';
// import * as S from './DropDown.Style';

// interface DropDownProps {
//   options: string[];
//   onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
//   defaultOption?: string;
// }

// const DropDown: React.FC<DropDownProps> = ({
//   options,
//   onChange,
//   defaultOption = '모든 OTT',
// }) => {
//   return (
//     <S.Dropdown>
//       <S.DropdownSelect onChange={onChange}>
//         <option value="">{defaultOption}</option>
//         {options.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </S.DropdownSelect>
//     </S.Dropdown>
//   );
// };

// export default DropDown;

// import React from 'react';
// import * as S from './DropDown.Style';

// interface DropDownProps {
//   options: string[];
//   onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
//   defaultOption?: string;
// }

// const DropDown: React.FC<DropDownProps> = ({
//   options,
//   onChange,
//   defaultOption = '모든 OTT',
// }) => {
//   return (
//     <S.Dropdown>
//       <S.DropdownSelect onChange={onChange}>
//         <option value="">{defaultOption}</option>
//         {options.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </S.DropdownSelect>
//     </S.Dropdown>
//   );
// };

// export default DropDown;

// import React from 'react';
// import * as S from './DropDown.Style';

// interface DropDownProps {
//   options: string[];
//   onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
//   defaultOption?: string;
//   ottOption?: string; // 추가된 부분
// }

// const DropDown: React.FC<DropDownProps> = ({
//   options,
//   onChange,
//   defaultOption = '모든 OTT',
//   ottOption = '', // 기본값 설정
// }) => {
//   return (
//     <S.Dropdown>
//       <S.DropdownSelect onChange={onChange}>
//         <option value="">{defaultOption}</option>
//         {ottOption && <option value={ottOption}>{ottOption}</option>}{' '}
//         {/* 추가된 부분 */}
//         {options.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </S.DropdownSelect>
//     </S.Dropdown>
//   );
// };

// export default DropDown;

// import React from 'react';
// import * as S from './DropDown.Style';

// interface DropDownProps {
//   options: string[];
//   onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
//   defaultOption?: string;
//   ottOption?: string;
// }

// const DropDown: React.FC<DropDownProps> = ({
//   options = [],
//   onChange,
//   defaultOption = '모든 OTT',
//   ottOption = '',
// }) => {
//   return (
//     <S.Dropdown>
//       <S.DropdownSelect onChange={onChange}>
//         <option value="">{defaultOption}</option>
//         {ottOption && <option value={ottOption}>{ottOption}</option>}
//         {Array.isArray(options) && // options가 배열인지 확인
//           options.map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//       </S.DropdownSelect>
//     </S.Dropdown>
//   );
// };

// export default DropDown;

// import React from 'react';
// import * as S from './DropDown.Style';

// interface DropDownProps {
//   options: string[]; // OTT 목록
//   onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
//   defaultOption?: string;
// }

// const DropDown: React.FC<DropDownProps> = ({
//   options = [], // 기본 값은 빈 배열
//   onChange,
//   defaultOption = '모든 OTT',
// }) => {
//   return (
//     <S.Dropdown>
//       <S.DropdownSelect onChange={onChange}>
//         {/* 기본 옵션 표시 */}
//         <option value="">{defaultOption}</option>
//         {/* OTT 옵션 표시 */}
//         {Array.isArray(options) &&
//           options.map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//       </S.DropdownSelect>
//     </S.Dropdown>
//   );
// };

// export default DropDown;

import React, { useState } from 'react';
import * as S from './DropDown.Style';

interface DropDownProps {
  onOttChange: (ott: string) => void; // OTT 변경 시 호출될 함수
  defaultOption?: string;
}

const DropDown: React.FC<DropDownProps> = ({
  onOttChange,
  defaultOption = '모든 OTT',
}) => {
  const [selectedOtt, setSelectedOtt] = useState<string>(''); // DropDown에서 관리하는 OTT 상태

  // 하드코딩된 OTT 옵션 목록
  const ottOptions = [
    '넷플릭스',
    '티빙',
    '웨이브',
    '디즈니+',
    '쿠팡플레이',
    '왓챠',
  ];

  // 선택한 OTT 값을 상위로 전달하는 함수
  const handleOttChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOtt(selectedValue); // 로컬 상태 업데이트
    onOttChange(selectedValue === '모든 OTT' ? '' : selectedValue); // 선택된 값을 상위 컴포넌트로 전달
  };

  return (
    <S.Dropdown>
      <S.DropdownSelect onChange={handleOttChange} value={selectedOtt}>
        {/* 기본 옵션 표시 */}
        <option value="">{defaultOption}</option>
        {/* OTT 옵션 표시 */}
        {ottOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </S.DropdownSelect>
    </S.Dropdown>
  );
};

export default DropDown;
