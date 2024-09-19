import React from 'react';
import * as S from './PotSelect.Style';

interface PotSelectProps {
  options: { id: number; potName: string }[];
  selected: string;
  onSelect: (value: string) => void;
}

const PotSelect: React.FC<PotSelectProps> = ({
  options,
  selected,
  onSelect,
}) => {
  return (
    <S.PotSelect>
      <S.Select value={selected} onChange={(e) => onSelect(e.target.value)}>
        <option value="">팟 선택</option>
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
