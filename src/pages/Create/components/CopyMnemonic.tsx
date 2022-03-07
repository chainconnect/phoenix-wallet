import React from 'react';
import { HeroContainer } from '../../../components/styled';
import { useStepperContext } from '../../../utils/StepperProvider';
import { useCreateModuleStore } from '../utils/store';
import {
  CopyButton,
  CopyMnemonicContainer,
  HeroTitle,
  MnemonicText,
  MnemonicWrapper,
} from './styled';

export default function CopyMnemonic() {
  const { setActiveStep } = useStepperContext();
  const mnemonic = useCreateModuleStore((state) => state.appState.mnemonic);
  const handleCopyClick = () => {
    //
    if (navigator.clipboard && mnemonic) {
      navigator.clipboard.writeText(mnemonic).then(
        () => {
          setActiveStep(3);
        },
        (err) => {
          console.log('Failed to copy the text to clipboard.', err);
        },
      );
    }
    setActiveStep(3);
  };
  return (
    <MnemonicWrapper>
      <HeroTitle>Copy the below Mnemonic somewhere safe</HeroTitle>
      <CopyMnemonicContainer>
        <MnemonicText>{mnemonic}</MnemonicText>
        <CopyButton onClick={handleCopyClick}>Copy</CopyButton>
      </CopyMnemonicContainer>
    </MnemonicWrapper>
  );
}
