import React from 'react';
import { FlexCol as CreateContainer } from '../../components/styled';
import CreateView from './Create.view';

export default function CreatePageContainer() {
  return (
    <CreateContainer>
      <CreateView />
    </CreateContainer>
  );
}
