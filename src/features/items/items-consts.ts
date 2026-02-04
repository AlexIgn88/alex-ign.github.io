import { Operation, Product } from 'src/homeworks/ts1/3_write';

export type LoadItemsSuccessResponse<T> = {
  data: T[];
  pagination: {
    pageSize: number;
    pageNumber: number;
    total: number;
  };
  sorting: {
    type: 'ASC' | 'DESC';
    field: 'id' | 'createdAt' | 'updatedAt' | 'name';
  };
};

export type LoadProductsSuccessResponse = LoadItemsSuccessResponse<Product>;

export type LoadOperationsSuccessResponse = LoadItemsSuccessResponse<Operation>;
