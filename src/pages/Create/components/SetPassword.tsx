import React from 'react';
import * as yup from 'yup';
import { Formik, Field, FormikProps } from 'formik';
import { VscError } from 'react-icons/vsc';
import { useHistory } from 'react-router-dom';
import {
  FormError,
  HeroTitle,
  SetPasswordWrapper,
  SetPwFinishBtn,
  SetPwInputField,
  StyledFormikForm,
} from './styled';

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
  const handleSubmit = (value: IFormikSetPassword) => {
    history.push('/');
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
            {props.errors.password && (
              <FormError>
                <VscError />
                {props.errors.password}
              </FormError>
            )}
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
