import React, { FC, useRef } from 'react';
import s from 'src/pages/home-screen/home-screen.module.scss';
import { Formik } from 'formik';
import { fakeLogin } from 'src/features/auth/auth-thunks';
import { APP_ROUTES } from 'src/app/routes';
import AuthForm from 'src/features/forms/auth-form/auth-form';
import { AuthFormValues } from 'src/features/forms/auth-form/types';
// import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'src/store/hooks';
import { useNavigate } from 'react-router-dom';

const validate = (values: AuthFormValues): Partial<Record<keyof AuthFormValues, string>> => {
  const errors: Partial<Record<keyof AuthFormValues, string>> = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  return errors;
};

const initialValues: AuthFormValues = {
  email: '',
  password: '',
};

const LoginScreen: FC = () => {
  // const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formElementRef = useRef<HTMLFormElement>(null);
  const autoFocusElementRef = useRef(null);

  return (
    <main>
      <div className={s.welcomeText}>
        <div className={s.welcomeTextContainer}>
          <h2>Login</h2>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={(values) => {
              dispatch(fakeLogin(values.email, values.password));
              navigate(APP_ROUTES.PROFILE);
            }}
          >
            {(formik) => (
              <AuthForm formManager={formik} formElement={formElementRef} autoFocusElement={autoFocusElementRef} />
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default LoginScreen;
