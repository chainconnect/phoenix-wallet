import React from 'react';
import { FlexCol as HomePageContainer } from '../../components/styled';
import HomeView from './Home.view';

export default function HomeContainer() {
  return (
    <HomePageContainer>
      <HomeView />
    </HomePageContainer>
  );
}
