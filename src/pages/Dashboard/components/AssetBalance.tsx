import React from 'react';
import { useDashboardContext } from '../utils/context';
import { AssetBalanceWrapper, BalanceText, AssetSymbol } from './styled';

export default function AssetBalance() {
  const { balance } = useDashboardContext();
  return (
    <AssetBalanceWrapper>
      <BalanceText>
        {balance}
        <AssetSymbol>SOL</AssetSymbol>
      </BalanceText>
    </AssetBalanceWrapper>
  );
}
