import React from 'react';
import useWallet from '../../hooks/useWallet';
import { useGlobalStore } from '../../utils/store';
import { DashboardWrapper } from './components/styled';
import DashboardView from './Dashboard.view';
import { DashboardContext } from './utils/context';
import { refreshBalance } from './utils/dashboardHelper';

export default function DashboardContainer() {
  const { balance } = useWallet();
  return (
    <DashboardWrapper>
      <DashboardContext.Provider value={{ balance }}>
        <DashboardView />
      </DashboardContext.Provider>
    </DashboardWrapper>
  );
}
