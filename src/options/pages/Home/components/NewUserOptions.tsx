import React from 'react';
import { AiOutlinePlus, AiOutlineImport } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { NewUserOptionsWrapper, UserOptionCard, UserOptionTitle } from './styled';

export default function NewUserOptions() {
  const history = useHistory();
  const handleOptionNavigation = (option: string) => {
    switch (option) {
      case 'create':
        history.push('/create');
        break;
      case 'import':
        history.push('/import');
        break;
      default:
        break;
    }
  };
  return (
    <NewUserOptionsWrapper>
      <UserOptionCard onClick={() => handleOptionNavigation('create')}>
        <AiOutlinePlus size={80} />
        <UserOptionTitle>Create</UserOptionTitle>
      </UserOptionCard>
      <UserOptionCard onClick={() => handleOptionNavigation('import')}>
        <AiOutlineImport size={80} />
        <UserOptionTitle>Import</UserOptionTitle>
      </UserOptionCard>
    </NewUserOptionsWrapper>
  );
}
