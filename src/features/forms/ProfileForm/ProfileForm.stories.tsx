import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from 'react';
import { Formik, FormikContextType } from 'formik';
import ProfileForm from './ProfileForm';
import { ProfileFormValues } from './types';
import { ThemeProvider } from '../../../app/theming/theme-provider';
import LanguageProvider from '../../../app/localization/language-provider';
import '../../../app/App.css';

const meta: Meta<typeof ProfileForm> = {
  title: 'Features/Forms/ProfileForm',
  component: ProfileForm,
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

const initialValues: ProfileFormValues = {
  name: '',
  about: '',
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
        {(formik: FormikContextType<ProfileFormValues>) => (
          <ProfileForm
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
          name: 'John Doe',
          about: 'Software developer with 5 years of experience',
        }}
        onSubmit={(values) => {
          console.log('Form submitted:', values);
        }}
      >
        {(formik: FormikContextType<ProfileFormValues>) => (
          <ProfileForm
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
        {(formik: FormikContextType<ProfileFormValues>) => (
          <ProfileForm
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

