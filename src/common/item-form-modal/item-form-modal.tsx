import React, { FC, useEffect, useRef, useMemo } from 'react';
import ModalWindow from 'src/common/modal-window/modal-window';
import ProductOperationForm from 'src/features/forms/product-operation-form/product-operation-form';
import { Formik } from 'formik';
import { createValidate, getEmptyValues } from 'src/features/forms/product-operation-form/product-operation-form-utils';
import {
  AdminActionType,
  FormikContext,
} from 'src/features/forms/product-operation-form/product-operation-form-consts';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { addProduct, updateProduct, addOperation, updateOperation } from 'src/store/slices/items-slice';
import { Product, Operation, createRandomProduct, createRandomOperation } from 'src/homeworks/ts1/3_write';
import { useLocation } from 'react-router-dom';

type Props = {
  mode: AdminActionType;
  itemId?: string;
  onClose: () => void;
};

const ItemFormModal: FC<Props> = ({ mode, itemId, onClose }) => {
  const formElementRef = useRef<HTMLFormElement>(null);
  const autoFocusElementRef = useRef(null);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isProducts = location.pathname.includes('/products');
  const products = useAppSelector((state) => state.items.products);
  const operations = useAppSelector((state) => state.items.operations);

  const existingItem = useMemo(() => {
    if (!itemId) return null;
    if (isProducts) {
      return products.find((p) => p.id === itemId);
    }
    return operations.find((o) => o.id === itemId);
  }, [itemId, isProducts, products, operations]);

  const initialValues = useMemo(() => {
    if (existingItem) {
      if (isProducts) {
        const product = existingItem as Product;
        return {
          name: product.name,
          photo: product.photo,
          desc: product.desc || '',
          price: product.price,
          oldPrice: product.oldPrice,
          categoryId: product.category.id,
          categoryName: product.category.name,
        };
      } else {
        const operation = existingItem as Operation;
        return {
          name: operation.name,
          desc: operation.desc || '',
          amount: operation.amount,
          type: operation.type,
          categoryId: operation.category.id,
          categoryName: operation.category.name,
        };
      }
    }
    return getEmptyValues(mode);
  }, [existingItem, mode, isProducts]);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'initial';
    };
  }, []);

  const handleSubmit = (values: any) => {
    const createdAt = existingItem ? existingItem.createdAt : new Date().toISOString();
    
    if (isProducts) {
      const product: Product = {
        id: existingItem?.id || Date.now().toString(),
        name: values.name,
        photo: values.photo || '',
        desc: values.desc,
        price: values.price || 0,
        oldPrice: values.oldPrice,
        createdAt,
        category: {
          id: values.categoryId,
          name: values.categoryName,
        },
      };

      if (existingItem) {
        dispatch(updateProduct(product));
      } else {
        dispatch(addProduct(product));
      }
    } else {
      const operation: Operation = {
        id: existingItem?.id || Date.now().toString(),
        name: values.name,
        desc: values.desc,
        amount: values.amount || 0,
        type: values.type || 'Cost',
        createdAt,
        category: {
          id: values.categoryId,
          name: values.categoryName,
        },
      } as Operation;

      if (existingItem) {
        dispatch(updateOperation(operation));
      } else {
        dispatch(addOperation(operation));
      }
    }

    onClose();
  };

  return (
    <div>
      <ModalWindow visible={true} setVisible={onClose}>
        <Formik
          initialValues={initialValues}
          validate={createValidate(mode)}
          onSubmit={handleSubmit}
          enableReinitialize
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
