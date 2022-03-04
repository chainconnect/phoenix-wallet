import React from 'react';
import { HeroContainer } from '../../components/styled';
import NewUserOptions from './components/NewUserOptions';
import { HeroTitle } from './components/styled';

export default function HomeView() {
  return (
    <>
      <HeroContainer>
        <HeroTitle>Phoenix Wallet</HeroTitle>
      </HeroContainer>
      <NewUserOptions />
    </>
  );
}
