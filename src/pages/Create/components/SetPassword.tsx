import React from 'react';
import * as yup from 'yup';
import { Formik, Field, FormikProps } from 'formik';
import { useHistory } from 'react-router-dom';
import { HeroTitle, SetPasswordWrapper, SetPwFinishBtn, SetPwInputField } from './styled';
import FormError from '../../../components/FormError';
import { StyledFormikForm } from '../../../components/styled';
import { useCreateModuleStore } from '../utils/store';
import { useGlobalStore, useVaultStore } from '../../../utils/store';
import { getAccountAndPrivateKeyFromMnemonic } from '../../../utils/walletHelpers';

interface IFormikSetPassword {
  password: string;
}
const PasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-“!@#%&\/,><\’:;|_~`])\S{8,99}$/,
      'Password requirement not satisfied',
    ),
});
export default function SetPassword() {
  const history = useHistory();
  const mnemonic = useCreateModuleStore((state) => state.appState.mnemonic);
  const setAccount = useGlobalStore((state) => state.actions.setAccount);
  const setKeyToVault = useVaultStore((state) => state.setKey);

  const handleSubmit = (value: IFormikSetPassword) => {
    const { newAccount, privateBase58 } = getAccountAndPrivateKeyFromMnemonic(mnemonic);
    setAccount(newAccount);
    setKeyToVault(privateBase58);
    history.push('/dashboard');
  };
  return (
    <SetPasswordWrapper>
      <HeroTitle>Set password to protect your account</HeroTitle>
      <Formik
        validationSchema={PasswordValidationSchema}
        onSubmit={handleSubmit}
        initialValues={{ password: '' }}
      >
        {(props: FormikProps<any>) => (
          <>
            {props.errors.password && <FormError text={props.errors.password as string} />}
            <StyledFormikForm>
              <Field name="password">
                {({ field, form: { touched, errors }, meta }: any) => (
                  <SetPwInputField error={meta.error} type="text" {...field} />
                )}
              </Field>
              <SetPwFinishBtn type="submit">Finish</SetPwFinishBtn>
            </StyledFormikForm>
          </>
        )}
      </Formik>
    </SetPasswordWrapper>
  );
}
