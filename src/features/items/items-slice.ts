import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Product, Operation } from 'src/homeworks/ts1/3_write';
import { LoadOperationsSuccessResponse, LoadProductsSuccessResponse } from 'src/features/items/items-consts';
import { API, API_BASE_URL, ApiError } from 'src/common/common-consts';
import { THUNK_STATUSES, ThunkStatus } from 'src/store/store-consts';
import { RootState } from 'src/store/store';

type ItemsState = {
  loadItemsStatus: ThunkStatus;
  products: Product[];
  operations: Operation[];
  error: string | null;
};

const initialState: ItemsState = {
  loadItemsStatus: THUNK_STATUSES.DEFAULT,
  products: [],
  operations: [],
  error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.loadItemsStatus = THUNK_STATUSES.PENDING;
      })
      .addCase(loadProducts.fulfilled, (state, { payload }) => {
        const { data } = payload;
        state.products = data;
        state.loadItemsStatus = THUNK_STATUSES.FULFILLED;
      })
      .addCase(loadProducts.rejected, (state) => {
        state.loadItemsStatus = THUNK_STATUSES.REJECTED;
      })
      .addCase(loadOperations.pending, (state) => {
        state.loadItemsStatus = THUNK_STATUSES.PENDING;
      })
      .addCase(loadOperations.fulfilled, (state, { payload }) => {
        const { data } = payload;
        state.operations = data;
        state.loadItemsStatus = THUNK_STATUSES.FULFILLED;
      })
      .addCase(loadOperations.rejected, (state) => {
        state.loadItemsStatus = THUNK_STATUSES.REJECTED;
      });
  },
});

export const { setProducts, setOperations, addProduct, updateProduct, addOperation, updateOperation } =
  itemsSlice.actions;
export default itemsSlice.reducer;

const selectItemsState = (state: RootState) => state.items;

export const selectloadItemsStatus = (state: RootState) => selectItemsState(state).loadItemsStatus;

export const loadProducts = createAsyncThunk<LoadProductsSuccessResponse, null, { rejectValue: ApiError[] }>(
  'items/loadProducts',
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE_URL}${API.PRODUCTS}`);
    const result = await response.json();

    if (result.errors) {
      return rejectWithValue(result.errors as ApiError[]);
    }
    return result;
  }
);

export const loadOperations = createAsyncThunk<LoadOperationsSuccessResponse, null, { rejectValue: ApiError[] }>(
  'items/loadOperations',
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE_URL}${API.OPERATIONS}`);
    const result = await response.json();

    if (result.errors) {
      return rejectWithValue(result.errors as ApiError[]);
    }
    return result;
  }
);
