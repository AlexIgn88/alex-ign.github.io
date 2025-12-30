import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth-slice';
import profileReducer from './slices/profile-slice';
import cartReducer from './slices/cart-slice';
import itemsReducer from './slices/items-slice';
import { storageSyncMiddleware } from './middleware/storage-sync';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    cart: cartReducer,
    items: itemsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storageSyncMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

