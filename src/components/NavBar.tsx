import React from 'react';
import NetworkSelect from './NetworkSelect';
import { LogoWrapper, NavBarWrapper } from './styled';

export default function NavBar() {
  return (
    <NavBarWrapper>
      <LogoWrapper>LOGO</LogoWrapper>
      <NetworkSelect />
    </NavBarWrapper>
  );
}
