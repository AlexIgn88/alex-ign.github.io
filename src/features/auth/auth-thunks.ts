import { AppDispatch } from 'src/store/store';
import { setToken, setInitialized, removeToken } from 'src/features/auth/auth-slice';
import { setProfile, clearProfile } from 'src/features/profile/profile-slice';
import { TOKEN_STORAGE_KEY } from 'src/common/common-consts';
import { createFakeProfile } from 'src/features/profile/profile-consts';

export const loadTokenFromStorage = () => (dispatch: AppDispatch) => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token) {
    dispatch(setToken(token));

    //TODO
    dispatch(setProfile(createFakeProfile(token)));
  }
  dispatch(setInitialized(true));
};

export const saveTokenToStorage = (token: string) => (dispatch: AppDispatch) => {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
  dispatch(setToken(token));
};

export const removeTokenFromStorage = () => (dispatch: AppDispatch) => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  dispatch(removeToken());
};

//TODO
export const fakeLogin = (email: string, password: string) => (dispatch: AppDispatch) => {
  const token = `fake_token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  dispatch(saveTokenToStorage(token));
  dispatch(setProfile(createFakeProfile(token, { email, password })));
};

export const logout = () => (dispatch: AppDispatch) => {
  dispatch(removeTokenFromStorage());
  dispatch(clearProfile());
};
