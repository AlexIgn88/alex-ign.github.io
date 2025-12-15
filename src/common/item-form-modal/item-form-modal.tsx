import React, { FC, useEffect, useRef } from 'react';
import ModalWindow from 'src/common/modal-window/modal-window';
import ProductOperationForm from 'src/features/forms/product-operation-form/product-operation-form';
import { Formik } from 'formik';
import { createValidate, getEmptyValues } from 'src/features/forms/product-operation-form/product-operation-form-utils';
import {
  AdminActionType,
  FormikContext,
} from 'src/features/forms/product-operation-form/product-operation-form-consts';

type Props = {
  mode: AdminActionType;
  itemId?: string;
  onClose: () => void;
};

const ItemFormModal: FC<Props> = ({ mode, itemId, onClose }) => {
  const formElementRef = useRef<HTMLFormElement>(null);
  const autoFocusElementRef = useRef(null);

  //TODO itemId в дальнейшем использую для получения для получения нужного item из redux store

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'initial';
    };
  }, []);

  return (
    <div>
      <ModalWindow visible={true} setVisible={onClose}>
        <Formik
          initialValues={getEmptyValues(mode)}
          validate={createValidate(mode)}
          onSubmit={(values, { resetForm }) => {
            console.log('Form submitted:', values);
            resetForm({ values: getEmptyValues(mode) });
          }}
        >
          {(formik: FormikContext) => (
            <ProductOperationForm
              mode={mode}
              formManager={formik}
              formElement={formElementRef}
              autoFocusElement={autoFocusElementRef}
            />
          )}
        </Formik>
      </ModalWindow>
    </div>
  );
};

export default ItemFormModal;
