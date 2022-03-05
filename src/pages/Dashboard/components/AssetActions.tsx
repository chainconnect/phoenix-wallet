import React from 'react';
import { AssetActionBtn, AssetActionsWrapper } from './styled';

export default function AssetActions() {
  return (
    <AssetActionsWrapper>
      <AssetActionBtn>Transfer</AssetActionBtn>
      <AssetActionBtn disabled>Earn</AssetActionBtn>
    </AssetActionsWrapper>
  );
}
