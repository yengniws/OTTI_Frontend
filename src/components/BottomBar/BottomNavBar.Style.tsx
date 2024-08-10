import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const BottomNavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
  box-sizing: border-box;
  height: 85px;
  background-color: #f4f4f4;
`;
export const BottomList = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;
export const BottomItem = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  color: inherit;
`;

export const BottomIcon = styled.div`
  display: flex;
  justify-content: center;
`;

export const BottomTxt = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
`;
