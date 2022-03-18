import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { networklist } from '../utils/constants';
import { SelectedNetwork, useGlobalStore } from '../utils/store';
import {
  NetworkSelectButton,
  NetworkSelectDropdownItem,
  NetworkSelectDropdownWrapper,
  NetworkSelectWrapper,
} from './styled';

export default function NetworkSelect() {
  const [selectedNetwork, setSelectedNetwork] = useGlobalStore((state) => [
    state.appState.selectedNetwork,
    state.actions.setSelectedNetwork,
  ]);
  const [isVisible, setIsVisible] = React.useState(false);
  const handleNetworkChange = (network: SelectedNetwork) => {
    setSelectedNetwork(network);
    setIsVisible(!isVisible);
  };
  return (
    <NetworkSelectWrapper>
      <AnimateSharedLayout>
        <NetworkSelectButton
          initial={{ width: '100%' }}
          as={motion.button}
          layout
          onClick={() => setIsVisible(!isVisible)}
        >
          {selectedNetwork}
          <RiArrowDropDownLine size={25} />
        </NetworkSelectButton>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <AnimatePresence>
          {isVisible && (
            <NetworkSelectDropdownWrapper
              layout
              initial={{ opacity: 0, width: '100%' }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              as={motion.div}
            >
              {networklist.map((network) => (
                <NetworkSelectDropdownItem
                  onClick={(_) => handleNetworkChange(network as unknown as SelectedNetwork)}
                >
                  {network}
                </NetworkSelectDropdownItem>
              ))}
            </NetworkSelectDropdownWrapper>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </NetworkSelectWrapper>
  );
}
