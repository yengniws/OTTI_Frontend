import React from 'react';
import Search from '../../components/Search/Search';
import CommunityList from '../../components/CommunityList/CommunityList';
import BottomNavBar from '../../components/BottomBar/BottomNavBar';
import * as S from './Community.Style';

const Community = () => {
  return (
    <div>
    <S.Dropdown>
        <S.DropdownSelect>
          <option>모든 OTT</option>
          <option>넷플릭스</option>
          <option>티빙</option>
          <option>왓챠</option>
    </S.DropdownSelect>
    </S.Dropdown>
    <Search />
    <CommunityList />
    <S.BottomNavBarWrapper>
    <BottomNavBar />
    </S.BottomNavBarWrapper>
    </div>
  );
};

export default Community;
