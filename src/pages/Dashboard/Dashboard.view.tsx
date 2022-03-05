import React from 'react';
import AssetActions from './components/AssetActions';
import AssetBalance from './components/AssetBalance';
import { DashboardViewWrapper } from './components/styled';

export default function DashboardView() {
  return (
    <DashboardViewWrapper>
      <AssetBalance />
      <AssetActions />
    </DashboardViewWrapper>
  );
}
