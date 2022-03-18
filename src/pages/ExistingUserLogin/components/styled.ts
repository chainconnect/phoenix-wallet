import styled from 'styled-components';
import { FlexCol, GenericButton } from '../../../components/styled';

export const ExistingUserLoginWrapper = styled(FlexCol)`
  flex: 1;
  padding: 32px 0;
`;
export const EULViewWrapper = styled.div`
  padding: 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const EULFormikWrapper = styled.div`
  /* margin-top: 32px; */
`;

export const EULInputField = styled.input`
  margin-top: 32px;
  width: 264px;
  height: 48px;
  border-radius: 8px;
  border: ${(p: { error: string }) => (p.error ? '1px solid red' : 'none')};
  outline: none;
  padding: 0 14px;
  font-size: 18px;
  background: ${(p: { error: string }) =>
    p.error ? 'hsla(348, 80%, 98%, 0.5)' : 'hsla(0, 0%, 100%, 0.4)'};
  &:focus {
    background-color: hsla(0, 0%, 100%, 0.8);
    &::placeholder {
      color: hsla(0, 0%, 0%, 0.8);
    }
  }
  &::placeholder {
    color: hsla(0, 0%, 100%, 0.4);
  }
`;
export const LoginBtn = styled(GenericButton)`
  margin-top: 24px;
  font-size: 18px;
  height: 48px;
  width: 128px;
`;
