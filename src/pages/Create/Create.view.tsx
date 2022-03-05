import React from 'react';
import { useStepperContext } from '../../utils/StepperProvider';
import { GenerateContainer } from './components/styled';
import { createStepMapper } from './utils/componentMapper';

export default function CreateView() {
  const { activeStep } = useStepperContext();
  const Component = createStepMapper[activeStep - 1];
  return (
    <>
      <GenerateContainer>
        <Component />
      </GenerateContainer>
    </>
  );
}
