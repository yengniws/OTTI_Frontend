// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { IoIosSearch } from 'react-icons/io';
// import * as S from './Search.Style';

// const Search: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   // 검색어 입력 시 상태 업데이트
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   // 검색 버튼 클릭 시 동작
//   const handleSearch = () => {
//     if (searchQuery.trim() !== '') {
//       navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`);
//     } else {
//       alert('검색어를 입력해주세요.');
//     }
//   };

//   return (
//     <>
//       <S.SearchCont>
//         <S.SearchInp
//           placeholder="원하시는 OTT를 입력해보세요."
//           value={searchQuery}
//           onChange={handleInputChange}
//         />
//         <S.SearchBtn onClick={handleSearch}>
//           <IoIosSearch size={25} color="#757575" />
//         </S.SearchBtn>
//       </S.SearchCont>

//       {error && <div>{error}</div>}
//     </>
//   );
// };

// export default Search;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import * as S from './Search.Style';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태 관리
  const [error, setError] = useState<string | null>(null); // 에러 상태 관리
  const navigate = useNavigate();

  // 검색어 입력 시 상태 업데이트
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); // 입력된 검색어를 상태에 반영
  };

  // 검색 버튼 클릭 시 동작
  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`); // 검색어가 있을 경우 검색 결과 페이지로 이동
    } else {
      toast.error('검색어를 입력해주세요.'); // 검색어가 없을 경우 에러 알림 표시
    }
  };

  return (
    <>
      <S.SearchCont>
        <S.SearchInp
          placeholder="원하시는 OTT를 입력해보세요."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <S.SearchBtn onClick={handleSearch}>
          {' '}
          <IoIosSearch size={25} color="#757575" />
        </S.SearchBtn>
      </S.SearchCont>

      {error && <div>{error}</div>}
    </>
  );
};

export default Search;
