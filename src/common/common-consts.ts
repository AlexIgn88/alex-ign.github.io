// export const API_BASE_URL = process.env.API_BASE_URL!;

const apiBaseUrl = process.env.API_BASE_URL;
if (!apiBaseUrl) {
  throw new Error('API_BASE_URL is not defined');
}
export const API_BASE_URL = apiBaseUrl;

export const TOKEN_STORAGE_KEY = 'auth_token';

export const API = { SIGNUP: '/signup' };
