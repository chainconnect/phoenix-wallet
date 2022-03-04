import React from 'react';
import { HeroContainer } from '../../components/styled';
import { GenerateContainer, HeroTitle } from './components/styled';

export default function CreateView() {
  return (
    <>
      <HeroContainer>
        <HeroTitle>Create new wallet</HeroTitle>
      </HeroContainer>
      <GenerateContainer>test</GenerateContainer>
    </>
  );
}
