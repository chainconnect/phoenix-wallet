import React from 'react';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { Formik, Field, FormikProps } from 'formik';
import * as bs58 from 'bs58';
import { Keypair } from '@solana/web3.js';
import { EULFormikWrapper, EULInputField, LoginBtn } from './styled';
import FormError from '../../../components/FormError';
import { StyledFormikForm } from '../../../components/styled';
import { useGlobalStore, useVaultStore } from '../../../utils/store';

interface IFormikLogin {
  password: string;
}
const PasswordValidationSchema = yup.object().shape({
  password: yup.string().required('Password is required'),
});
export default function Login() {
  const key = useVaultStore((state) => state.key);
  const setAccount = useGlobalStore((state) => state.actions.setAccount);
  const history = useHistory();
  const handleSubmit = (value: IFormikLogin) => {
    if (key) {
      const privateBuffer = bs58.decode(key);
      const newAccount = Keypair.fromSecretKey(privateBuffer);
      setAccount(newAccount);
      history.push('/dashboard');
    }
  };
  return (
    <EULFormikWrapper>
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
                  <EULInputField placeholder="password" error={meta.error} type="text" {...field} />
                )}
              </Field>
              <LoginBtn type="submit">Login</LoginBtn>
            </StyledFormikForm>
          </>
        )}
      </Formik>
    </EULFormikWrapper>
  );
}
