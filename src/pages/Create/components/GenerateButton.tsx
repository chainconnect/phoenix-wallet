import React from 'react';
import { HeroContainer } from '../../../components/styled';
import { useStepperContext } from '../../../utils/StepperProvider';
import { GenBtnWrapper, GenButtonContainer, GenerateButton as GenBtn, HeroTitle } from './styled';

export default function GenerateButton() {
  const { setActiveStep } = useStepperContext();
  return (
    <GenBtnWrapper>
      <HeroTitle>Get started by creating new wallet</HeroTitle>
      <GenButtonContainer>
        <GenBtn onClick={() => setActiveStep(2)}>Generate</GenBtn>
      </GenButtonContainer>
    </GenBtnWrapper>
  );
}
