import { Form } from 'formik';
import styled from 'styled-components';
import { FlexCol } from '../../../components/styled';

export const HeroTitle = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  text-transform: capitalize;
`;
export const CreateContainer = styled(FlexCol)`
  flex: 1;
  padding: 32px 0;
`;
export const GenerateContainer = styled.div`
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

export const GenerateButton = styled.button`
  background: hsla(0, 0%, 100%, 0.2);
  backdrop-filter: blur(7.3px);
  -webkit-backdrop-filter: blur(7.3px);
  border: 2px solid hsla(0, 0%, 100%, 0.1);
  color: #fff;
  padding: 8px 16px;
  font-weight: 100;
  font-style: normal;
  font-size: 22px;
  letter-spacing: 1px;
  border-radius: 6px;
  width: 256px;
  height: 64px;
  cursor: pointer;
  transition: background-color 0.15s ease;
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.4);
  }
`;
export const MnemonicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const GenBtnWrapper = styled(MnemonicWrapper)``;
export const GenButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
`;

export const CopyMnemonicContainer = styled(GenButtonContainer)`
  flex-direction: column;
  justify-content: center;
`;
export const MnemonicText = styled.span`
  background-color: hsla(0, 0%, 100%, 0.2);
  border: 2px solid hsla(0, 0%, 100%, 0.1);
  font-size: 18px;
  padding: 12px 16px;
  border-radius: 6px;
`;
export const CopyButton = styled(GenerateButton)`
  margin-top: 24px;
  font-size: 18px;
  height: 48px;
  width: 128px;
`;
export const SetPasswordWrapper = styled(MnemonicWrapper)``;

export const SetPwInputField = styled.input`
  width: 264px;
  height: 48px;
  border-radius: 8px;
  border: ${(p: { error: string }) => (p.error ? '1px solid red' : 'none')};
  outline: none;
  padding: 0 14px;
  font-size: 18px;
  margin-top: 24px;
  background: ${(p: { error: string }) =>
    p.error ? 'hsla(348, 80%, 98%, 0.5)' : 'hsla(0, 0%, 100%, 0.8)'};
`;
export const SetPwFinishBtn = styled(GenerateButton)`
  margin-top: 24px;
  font-size: 18px;
  height: 48px;
  width: 128px;
`;
export const StyledFormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormError = styled.span`
  margin-top: 24px;
  color: whitesmoke;
  background-color: hsla(348, 80%, 38%, 0.4);
  border: 2px solid hsla(0, 0%, 100%, 0.1);
  padding: 6px 12px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
  }
  /* border-radius: 8px; */
`;
