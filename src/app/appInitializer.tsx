import React, { useEffect, ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loadTokenFromStorage } from '../features/auth/auth-thunks';
import { loadProducts, loadOperations } from '../features/items/items-slice';
// import { products, operations } from 'src/features/items/items-list/items-list-utils';

type Props = {
  children: ReactNode;
};

const AppInitializer: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const productsInitialized = useAppSelector((state) => state.items.products.length > 0);

  useEffect(() => {
    dispatch(loadTokenFromStorage());
  }, [dispatch]);

  useEffect(() => {
    if (!productsInitialized) {
      // dispatch(setProducts(products));
      // dispatch(setOperations(operations));
      dispatch(loadProducts());
      dispatch(loadOperations());
    }
  }, [dispatch, productsInitialized]);

  return <>{children}</>;
};

export default AppInitializer;
