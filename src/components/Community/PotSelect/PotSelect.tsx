// import React from 'react';
// import * as S from './PotSelect.Style';

// interface PotSelectProps {
//   options: string[];
//   selected: string;
//   onSelect: (value: string) => void;
// }

// const PotSelect: React.FC<PotSelectProps> = ({
//   options,
//   selected,
//   onSelect,
// }) => {
//   return (
//     <S.PotSelect>
//       <S.Select value={selected} onChange={(e) => onSelect(e.target.value)}>
//         <option value="">팟 선택</option>
//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </S.Select>
//     </S.PotSelect>
//   );
// };

// export default PotSelect;

import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../libs/AxiosInstance';
import * as S from './PotSelect.Style';

interface PotSelectProps {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

const PotSelect: React.FC<PotSelectProps> = ({
  options,
  selected,
  onSelect,
}) => {
  const [potOptions, setPotOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPotOptions = async () => {
      try {
        const response = await axiosInstance.get(
          'api/pot/application/user/pots/permission',
        );
        if (Array.isArray(response.data)) {
          const options = response.data.map(
            (pot: { name: string }) => pot.name,
          );
          setPotOptions(options);
        } else {
          setPotOptions([]);
        }
      } catch (error) {
        setError('POT options을 가져오는 데 실패했습니다.');
        console.error('POT options 가져오기 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPotOptions();
  }, []);

  if (loading) return <p>Loading...</p>; // Loading state
  if (error) return <p>{error}</p>; // Error state

  return (
    <S.PotSelect>
      <S.Select value={selected} onChange={(e) => onSelect(e.target.value)}>
        <option value="">팟 선택</option>
        {potOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </S.Select>
    </S.PotSelect>
  );
};

export default PotSelect;
