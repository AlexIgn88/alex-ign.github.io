import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from 'react';
import { Formik, FormikContextType } from 'formik';
import ProductOperationForm from './ProductOperationForm';
import { ProductOperationFormValues, FormMode } from './types';
import { ThemeProvider } from '../../../app/theming/theme-provider';
import LanguageProvider from '../../../app/localization/language-provider';
import '../../../app/App.css';

const meta: Meta<typeof ProductOperationForm> = {
  title: 'Features/Forms/ProductOperationForm',
  component: ProductOperationForm,
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

const createProductInitialValues = (): ProductOperationFormValues => ({
  name: '',
  photo: '',
  desc: '',
  price: 0,
  oldPrice: undefined,
  categoryId: '',
  categoryName: '',
});

const createProductInitialValuesWithData = (product: {
  name: string;
  photo: string;
  desc?: string;
  price: number;
  oldPrice?: number;
  category: { id: string; name: string };
}): ProductOperationFormValues => ({
  name: product.name,
  photo: product.photo,
  desc: product.desc,
  price: product.price,
  oldPrice: product.oldPrice,
  categoryId: product.category.id,
  categoryName: product.category.name,
});

const createOperationInitialValues = (): ProductOperationFormValues => ({
  name: '',
  desc: '',
  amount: 0,
  type: 'Cost',
  categoryId: '',
  categoryName: '',
});

const createOperationInitialValuesWithData = (operation: {
  name: string;
  desc?: string;
  amount: number;
  type: 'Cost' | 'Profit';
  category: { id: string; name: string };
}): ProductOperationFormValues => ({
  name: operation.name,
  desc: operation.desc,
  amount: operation.amount,
  type: operation.type,
  categoryId: operation.category.id,
  categoryName: operation.category.name,
});

const createValidate = (mode: FormMode) => (values: ProductOperationFormValues): Partial<Record<string, string>> => {
  const errors: Partial<Record<string, string>> = {};
  const isProduct = mode === 'createProduct' || mode === 'editProduct';
  const isOperation = mode === 'createOperation' || mode === 'editOperation';

  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (isProduct) {
    if (!values.photo) {
      errors.photo = 'Photo is required';
    } else if (values.photo.trim().length < 2) {
      errors.photo = 'Photo must be at least 2 characters';
    }

    if (values.price === undefined || values.price === null) {
      errors.price = 'Price is required';
    } else if (values.price <= 0) {
      errors.price = 'Price must be greater than 0';
    }
  }

  if (isOperation) {
    if (values.amount === undefined || values.amount === null) {
      errors.amount = 'Amount is required';
    } else if (values.amount <= 0) {
      errors.amount = 'Amount must be greater than 0';
    }

    if (!values.type) {
      errors.type = 'Type is required';
    }
  }

  if (!values.categoryId) {
    errors.categoryId = 'Category ID is required';
  } else if (values.categoryId.trim().length < 2) {
    errors.categoryId = 'Category ID must be at least 2 characters';
  }

  if (!values.categoryName) {
    errors.categoryName = 'Category Name is required';
  } else if (values.categoryName.trim().length < 2) {
    errors.categoryName = 'Category Name must be at least 2 characters';
  }

  return errors;
};

const renderForm = (mode: FormMode, initialValues: ProductOperationFormValues) => {
  const formElementRef = useRef<HTMLFormElement>(null);
  const autoFocusElementRef = useRef(null);

  const getEmptyValues = (): ProductOperationFormValues => {
    const isProduct = mode === 'createProduct' || mode === 'editProduct';
    if (isProduct) {
      return createProductInitialValues();
    }
    return createOperationInitialValues();
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={createValidate(mode)}
      onSubmit={(values, { resetForm }) => {
        console.log('Form submitted:', values);
        resetForm({ values: getEmptyValues() });
      }}
    >
      {(formik: FormikContextType<ProductOperationFormValues>) => (
        <ProductOperationForm
          mode={mode}
          formManager={formik}
          formElement={formElementRef}
          autoFocusElement={autoFocusElementRef}
        />
      )}
    </Formik>
  );
};

export const CreateProduct: Story = {
  render: () => renderForm('createProduct', createProductInitialValues()),
};

export const EditProduct: Story = {
  render: () => {
    const sampleProduct = {
      name: 'Cheese',
      photo: '/images/products/cheese.png',
      desc: 'Delicious cheese',
      oldPrice: 100,
      price: 80,
      category: {
        id: '46',
        name: 'Cheeses & Fats',
      },
    };
    return renderForm('editProduct', createProductInitialValuesWithData(sampleProduct));
  },
};

export const CreateOperation: Story = {
  render: () => renderForm('createOperation', createOperationInitialValues()),
};

export const EditOperation: Story = {
  render: () => {
    const sampleOperation = {
      name: 'Profit',
      desc: 'Monthly profit',
      amount: 50000,
      category: {
        id: '42',
        name: 'finance',
      },
      type: 'Profit' as const,
    };
    return renderForm('editOperation', createOperationInitialValuesWithData(sampleOperation));
  },
};

export const Disabled: Story = {
  render: () => {
    const formElementRef = useRef<HTMLFormElement>(null);
    const autoFocusElementRef = useRef(null);

    return (
      <Formik
        initialValues={createProductInitialValues()}
        validate={createValidate('createProduct')}
        onSubmit={(values, { resetForm }) => {
          console.log('Form submitted:', values);
          resetForm({ values: createProductInitialValues() });
        }}
      >
        {(formik: FormikContextType<ProductOperationFormValues>) => (
          <ProductOperationForm
            mode="createProduct"
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

