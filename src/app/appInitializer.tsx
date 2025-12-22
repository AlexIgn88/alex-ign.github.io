import React, { useEffect, ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loadTokenFromStorage } from '../store/thunks/auth-thunks';
import { setProducts, setOperations } from '../store/slices/items-slice';
import { products, operations } from '../common/items-list/items-list-utils';

type Props = {
  children: ReactNode;
};

const AppInitializer: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector((state) => state.auth.isInitialized);
  const productsInitialized = useAppSelector((state) => state.items.products.length > 0);

  useEffect(() => {
    dispatch(loadTokenFromStorage());
  }, [dispatch]);

  useEffect(() => {
    if (!productsInitialized) {
      dispatch(setProducts(products));
      dispatch(setOperations(operations));
    }
  }, [dispatch, productsInitialized]);

  return <>{children}</>;
};

export default AppInitializer;

