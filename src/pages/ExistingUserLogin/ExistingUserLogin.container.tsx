import React from 'react';
import { ExistingUserLoginWrapper } from './components/styled';
import ExistingUserLoginView from './ExistingUserLogin.view';

export default function ExistingUserLoginContainer() {
  return (
    <ExistingUserLoginWrapper>
      <ExistingUserLoginView />
    </ExistingUserLoginWrapper>
  );
}
