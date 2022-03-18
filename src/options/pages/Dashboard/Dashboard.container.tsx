import React from 'react';
import { DashboardWrapper } from './components/styled';
import DashboardView from './Dashboard.view';

export default function DashboardContainer() {
  return (
    <DashboardWrapper>
      <DashboardView />
    </DashboardWrapper>
  );
}
