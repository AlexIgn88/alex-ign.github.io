import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from 'react';
import { Formik, FormikContextType } from 'formik';
import { AuthForm } from './AuthForm';
import { AuthFormValues } from './types';
import { ThemeProvider } from '../../../app/theming/theme-provider';
import LanguageProvider from '../../../app/localization/language-provider';
import '../../../app/App.css';

const meta: Meta<typeof AuthForm> = {
  title: 'Features/Forms/AuthForm',
  component: AuthForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <LanguageProvider>
        <ThemeProvider>
          <div style={{ padding: '20px', maxWidth: '600px' }}>
            <Story />
          </div>
        </ThemeProvider>
      </LanguageProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

const initialValues: AuthFormValues = {
  email: '',
  password: '',
};

export const Default: Story = {
  render: () => {
    const formElementRef = useRef<HTMLFormElement>(null);
    const autoFocusElementRef = useRef(null);

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log('Form submitted:', values);
        }}
      >
        {(formik: FormikContextType<AuthFormValues>) => (
          <AuthForm
            formManager={formik}
            formElement={formElementRef}
            autoFocusElement={autoFocusElementRef}
          />
        )}
      </Formik>
    );
  },
};

export const WithInitialValues: Story = {
  render: () => {
    const formElementRef = useRef<HTMLFormElement>(null);
    const autoFocusElementRef = useRef(null);

    return (
      <Formik
        initialValues={{
          email: 'user@example.com',
          password: 'password123',
        }}
        onSubmit={(values) => {
          console.log('Form submitted:', values);
        }}
      >
        {(formik: FormikContextType<AuthFormValues>) => (
          <AuthForm
            formManager={formik}
            formElement={formElementRef}
            autoFocusElement={autoFocusElementRef}
          />
        )}
      </Formik>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const formElementRef = useRef<HTMLFormElement>(null);
    const autoFocusElementRef = useRef(null);

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log('Form submitted:', values);
        }}
      >
        {(formik: FormikContextType<AuthFormValues>) => (
          <AuthForm
            formManager={formik}
            formElement={formElementRef}
            autoFocusElement={autoFocusElementRef}
            disabled
          />
        )}
      </Formik>
    );
  },
};

