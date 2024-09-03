import styled from 'styled-components';


export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownSelect = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const BottomNavBarWrapper = styled.div`
  position: fixed; // 화면에 고정
  bottom: 0; // 화면의 세로상 최하단에 위치
  left: 50%; // 가로상 중앙에 위치
  transform: translateX(-50%); // 정확히 중앙 정렬
  width: 100%;
  max-width: 375px;
  z-index: 99;
  padding: 0;
  overflow: hidden;
`;