import React from 'react';
import { HeroContainer } from '../../../components/styled';
import { useStepperContext } from '../../../utils/StepperProvider';
import {
  CopyButton,
  CopyMnemonicContainer,
  HeroTitle,
  MnemonicText,
  MnemonicWrapper,
} from './styled';

export default function CopyMnemonic() {
  const { setActiveStep } = useStepperContext();
  const handleCopyClick = () => {
    //
    setActiveStep(3);
  };
  return (
    <MnemonicWrapper>
      <HeroTitle>Copy the below Mnemonic somewhere safe</HeroTitle>
      <CopyMnemonicContainer>
        <MnemonicText>
          follow profit pride mail giraffe sell blind hole clown neither uncle solve table extra
          mule
        </MnemonicText>
        <CopyButton onClick={handleCopyClick}>Copy</CopyButton>
      </CopyMnemonicContainer>
    </MnemonicWrapper>
  );
}
