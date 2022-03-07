import React from 'react';
import { FlexCol as HomePageContainer } from '../../components/styled';
import useWallet from '../../hooks/useWallet';
import HomeView from './Home.view';

export default function HomeContainer() {
  return (
    <HomePageContainer>
      <HomeView />
    </HomePageContainer>
  );
}
