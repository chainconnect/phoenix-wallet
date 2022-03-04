import React from 'react';
import { NetworkSelectButton, NetworkSelectWrapper } from './styled';

export default function NetworkSelect() {
  const [selectedNetwork, setSelectedNetwork] = React.useState('mainnet');
  return (
    <NetworkSelectWrapper>
      <NetworkSelectButton>{selectedNetwork}</NetworkSelectButton>
    </NetworkSelectWrapper>
  );
}
