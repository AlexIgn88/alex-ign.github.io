import React, { FC, useRef } from 'react';
import logo from 'src/app/logo.svg';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import AuthForm from 'src/features/forms/auth-form/auth-form';
import { AuthFormValues } from 'src/features/forms/auth-form/types';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { fakeLogin } from 'src/store/thunks/auth-thunks';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from 'src/app/routes';
import s from './home-screen.module.scss';

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

const HomeScreen: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.auth.token);
  const profile = useAppSelector((state) => state.profile.profile);
  const formElementRef = useRef<HTMLFormElement>(null);
  const autoFocusElementRef = useRef(null);

  if (token && profile) {
    return (
      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <p className={s.welcomeText}>{t('screens.home.welcomeText', { name: profile.name, role: profile.role })}</p>
          <p>{t('screens.home.intro')}</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <img src={logo} className="App-logo" alt="logo" />
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
              <AuthForm
                formManager={formik}
                formElement={formElementRef}
                autoFocusElement={autoFocusElementRef}
              />
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;
