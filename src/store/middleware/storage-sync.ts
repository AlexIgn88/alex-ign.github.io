import type { Middleware } from '@reduxjs/toolkit';
import { setToken } from 'src/features/auth/auth-slice';
import { setProfile, clearProfile } from 'src/features/profile/profile-slice';
import { TOKEN_STORAGE_KEY } from 'src/common/common-consts';
import { createFakeProfile } from 'src/features/profile/profile-consts';

// Middleware для синхронизации токена между вкладками
export const storageSyncMiddleware: Middleware = (store) => {
  // Слушаем события storage для синхронизации между вкладками
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', (e: StorageEvent) => {
      if (e.key === TOKEN_STORAGE_KEY) {
        if (e.newValue) {
          store.dispatch(setToken(e.newValue));
          store.dispatch(setProfile(createFakeProfile(e.newValue)));
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
