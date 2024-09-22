import React from 'react';
import * as S from './PotSelect.Style';

interface PotSelectProps {
  options: { id: number; potName: string }[]; // 팟 옵션 배열 (id와 potName을 포함)
  selected: string; // 현재 선택된 팟 이름
  onSelect: (value: string) => void; // 선택된 팟을 부모 컴포넌트에 전달하는 함수
}

// PotSelect 컴포넌트: 팟을 선택할 수 있는 드롭다운 -> 부모로부터 받기
const PotSelect: React.FC<PotSelectProps> = ({
  options,
  selected,
  onSelect,
}) => {
  return (
    <S.PotSelect>
      <S.Select value={selected} onChange={(e) => onSelect(e.target.value)}>
        <option value="">팟 선택</option>
        {/* 옵션 리스트를 맵핑하여 렌더링 */}
        {options.map((option) => (
          <option key={option.id} value={option.potName}>
            {option.potName}
          </option>
        ))}
      </S.Select>
    </S.PotSelect>
  );
};

export default PotSelect;
