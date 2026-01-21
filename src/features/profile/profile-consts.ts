//TODO моковый профиль
export type Profile = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
};

export type UserProfile = {
  _id: string;
  signUpDate: string;
  email: string;
  password: string;
  __v: number;
};

export const createFakeProfile = (
  token: string,
  profileData: { email: string; password: string } = { email: 'john.doe@example.com', password: '111' }
): Profile => {
  const isAdmin = token.includes('admin') || token.length % 2 === 0;
  const { email, password } = profileData;

  return {
    id: '1',
    name: 'John Doe',
    email: email,
    password: password,
    role: isAdmin ? 'admin' : 'user',
  };
};
