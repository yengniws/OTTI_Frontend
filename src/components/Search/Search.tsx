import React from 'react';
import * as S from './Search.Style';

const Search = () => {
  return (
    <S.SearchCont>
      <S.Dropdown>
        <S.DropdownSelect>
          <option>모든 OTT</option>
          <option>넷플릭스</option>
          <option>티빙</option>
          <option>왓챠</option>
        </S.DropdownSelect>
      </S.Dropdown>
      <S.SearchInp placeholder="검색어를 입력하세요. (or 입력하는 OTT를 입력해보세요)" />
    </S.SearchCont>
  );
};

export default Search;
