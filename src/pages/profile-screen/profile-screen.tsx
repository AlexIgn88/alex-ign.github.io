import React, { FC, useRef } from 'react';
import ProfileForm from 'src/features/forms/profile-form/profile-form';
import { Formik } from 'formik';
import { FormikContext, initialValues } from 'src/features/forms/profile-form/profile-form-consts';
import { validate } from 'src/features/forms/profile-form/profile-form-utils';
import s from './profile-screen.module.scss';

const ProfileScreen: FC = () => {
  const formElementRef = useRef<HTMLFormElement>(null);
  const autoFocusElementRef = useRef(null);

  return (
    <main className={s.main}>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values, { resetForm }) => {
          console.log('Form submitted:', values);
          resetForm();
        }}
      >
        {(formik: FormikContext) => (
          <ProfileForm
            className={s.profileForm}
            formManager={formik}
            formElement={formElementRef}
            autoFocusElement={autoFocusElementRef}
          />
        )}
      </Formik>
    </main>
  );
};

export default ProfileScreen;
