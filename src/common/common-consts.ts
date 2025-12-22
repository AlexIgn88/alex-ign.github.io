import { Profile } from 'src/store/slices/profile-slice';

export const TOKEN_STORAGE_KEY = 'auth_token';

export const createFakeProfile = (token: string): Profile => {
  const isAdmin = token.includes('admin') || token.length % 2 === 0;
  return {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: isAdmin ? 'admin' : 'user',
  };
};