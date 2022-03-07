import React from 'react';
import { HeroContainer } from '../../../components/styled';
import { useStepperContext } from '../../../utils/StepperProvider';
import { useCreateModuleStore } from '../utils/store';
import { GenBtnWrapper, GenButtonContainer, GenerateButton as GenBtn, HeroTitle } from './styled';

export default function GenerateButton() {
  const { setActiveStep } = useStepperContext();
  const setMnemonic = useCreateModuleStore((state) => state.actions.setMnemonic);
  const generateClickHandler = () => {
    setMnemonic();
    setActiveStep(2);
  };
  return (
    <GenBtnWrapper>
      <HeroTitle>Get started by creating new wallet</HeroTitle>
      <GenButtonContainer>
        <GenBtn onClick={generateClickHandler}>Generate</GenBtn>
      </GenButtonContainer>
    </GenBtnWrapper>
  );
}
