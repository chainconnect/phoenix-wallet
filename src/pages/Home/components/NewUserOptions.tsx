import React from 'react';
import { AiOutlinePlus, AiOutlineImport } from 'react-icons/ai';
import { NewUserOptionsWrapper, UserOptionCard, UserOptionTitle } from './styled';

export default function NewUserOptions() {
  return (
    <NewUserOptionsWrapper>
      <UserOptionCard>
        <AiOutlinePlus size={80} />
        <UserOptionTitle>Create</UserOptionTitle>
      </UserOptionCard>
      <UserOptionCard>
        <AiOutlineImport size={80} />
        <UserOptionTitle>Import</UserOptionTitle>
      </UserOptionCard>
    </NewUserOptionsWrapper>
  );
}
