import React from 'react';
import { HeroTitle } from '../../components/styled';
import Login from './components/Login';
import { EULViewWrapper } from './components/styled';

export default function ExistingUserLoginView() {
  return (
    <EULViewWrapper>
      <HeroTitle>Welcome back</HeroTitle>
      <Login />
    </EULViewWrapper>
  );
}
