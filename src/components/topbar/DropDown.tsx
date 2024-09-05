import React from 'react';
import * as S from './DropDown.Style';

interface DropDownProps {
  options: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultOption?: string;
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  onChange,
  defaultOption = '모든 OTT',
}) => {
  return (
    <S.Dropdown>
      <S.DropdownSelect onChange={onChange}>
        <option value="">{defaultOption}</option>
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
//     <S.DropdownWrapper>
//       <S.DefaultText>{defaultOption}</S.DefaultText>
//       <S.DropdownSelect onChange={onChange}>
//         {options.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </S.DropdownSelect>
//     </S.DropdownWrapper>
//   );
// };

// export default DropDown;
