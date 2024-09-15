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

import React from 'react';
import * as S from './DropDown.Style';

interface DropDownProps {
  options: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultOption?: string;
  ottOption?: string; // 추가된 부분
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  onChange,
  defaultOption = '모든 OTT',
  ottOption = '', // 기본값 설정
}) => {
  return (
    <S.Dropdown>
      <S.DropdownSelect onChange={onChange}>
        <option value="">{defaultOption}</option>
        {ottOption && <option value={ottOption}>{ottOption}</option>}{' '}
        {/* 추가된 부분 */}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </S.DropdownSelect>
    </S.Dropdown>
  );
};

export default DropDown;
