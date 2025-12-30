import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Profile = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

type ProfileState = {
  profile: Profile | null;
}

const initialState: ProfileState = {
  profile: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Profile | null>) => {
      state.profile = action.payload;
    },
    clearProfile: (state) => {
      state.profile = null;
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;

