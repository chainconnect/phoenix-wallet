import React from 'react';
import { AssetBalanceWrapper, BalanceText, AssetSymbol } from './styled';

export default function AssetBalance() {
  return (
    <AssetBalanceWrapper>
      <BalanceText>
        0.01
        <AssetSymbol>SOL</AssetSymbol>
      </BalanceText>
    </AssetBalanceWrapper>
  );
}
