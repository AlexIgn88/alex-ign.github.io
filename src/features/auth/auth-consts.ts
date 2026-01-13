import { UserProfile } from 'src/features/profile/profile-consts';

export type SignUpBody = {
  email: string;
  password: string;
  commandId?: string;
};

export type SignupSuccessResponse = {
  token: string;
  profile: UserProfile;
};

export type ApiError = {
  name: string;
  message: string;
  stack?: string;
  extensions?: {
    code?: string;
  };
};
