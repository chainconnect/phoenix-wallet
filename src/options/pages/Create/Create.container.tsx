import React from 'react';
import StepperProvider from '../../utils/StepperProvider';
import { CreateContainer } from './components/styled';
import CreateView from './Create.view';

export default function CreatePageContainer() {
  return (
    <CreateContainer>
      <StepperProvider>
        <CreateView />
      </StepperProvider>
    </CreateContainer>
  );
}
