export const API_BASE_URL = 'https://19429ba06ff2.vps.myjino.ru/api';

export const API = {
  SIGNUP: '/signup',
  SIGNIN: '/signin',
  PROFILE: '/profile',
  PRODUCTS: '/products',
  OPERATIONS: '/operations',
} as const;

export const LOCAL_STORAGE_KEYS = { TOKEN_STORAGE_KEY: 'auth_token' } as const;

export type ApiError = {
  name: string;
  message: string;
  stack?: string;
  extensions?: {
    code?: string;
  };
};

export const PAGE_SIZE = 10;