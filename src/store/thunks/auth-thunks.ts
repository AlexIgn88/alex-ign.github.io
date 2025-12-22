import { AppDispatch } from '../store';
import { setToken, setInitialized } from '../slices/auth-slice';
import { setProfile, clearProfile } from '../slices/profile-slice';
import { TOKEN_STORAGE_KEY, createFakeProfile } from 'src/common/common-consts';

export const loadTokenFromStorage = () => (dispatch: AppDispatch) => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token) {
    dispatch(setToken(token));
    dispatch(setProfile(createFakeProfile(token)));
  }
  dispatch(setInitialized(true));
};

export const saveTokenToStorage = (token: string) => (dispatch: AppDispatch) => {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
  dispatch(setToken(token));
  dispatch(setProfile(createFakeProfile(token)));
};

export const removeTokenFromStorage = () => (dispatch: AppDispatch) => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  dispatch(setToken(null));
  dispatch(clearProfile());
};

export const fakeLogin = (email: string, password: string) => (dispatch: AppDispatch) => {
  const token = `fake_token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  dispatch(saveTokenToStorage(token));
};

export const logout = () => (dispatch: AppDispatch) => {
  dispatch(removeTokenFromStorage());
};

