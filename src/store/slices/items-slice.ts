import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, Operation } from 'src/homeworks/ts1/3_write';

type ItemsState = {
  products: Product[];
  operations: Operation[];
}

const initialState: ItemsState = {
  products: [],
  operations: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setOperations: (state, action: PayloadAction<Operation[]>) => {
      state.operations = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    addOperation: (state, action: PayloadAction<Operation>) => {
      state.operations.push(action.payload);
    },
    updateOperation: (state, action: PayloadAction<Operation>) => {
      const index = state.operations.findIndex((o) => o.id === action.payload.id);
      if (index !== -1) {
        state.operations[index] = action.payload;
      }
    },
  },
});

export const { setProducts, setOperations, addProduct, updateProduct, addOperation, updateOperation } =
  itemsSlice.actions;
export default itemsSlice.reducer;

