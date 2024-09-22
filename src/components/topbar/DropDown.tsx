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

  // OTT 옵션 목록
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
        <option value="">{defaultOption}</option>
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
