import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { setToken } from 'src/features/auth/auth-slice';
import { clearProfile, loadProfile } from 'src/features/profile/profile-slice';
import { LOCAL_STORAGE_KEYS } from 'src/common/common-consts';

export const storageSyncMiddleware: Middleware = (store: MiddlewareAPI) => {
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', (e: StorageEvent) => {
      if (e.key === LOCAL_STORAGE_KEYS.TOKEN_STORAGE_KEY) {
        if (e.newValue) {
          store.dispatch(setToken(e.newValue));
          store.dispatch(loadProfile({ token: e.newValue }) as any);
        } else {
          store.dispatch(setToken(null));
          store.dispatch(clearProfile());
        }
      }
    });
  }

  return (next) => (action) => {
    return next(action);
  };
};
