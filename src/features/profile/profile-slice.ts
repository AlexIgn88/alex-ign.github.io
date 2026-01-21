import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Profile } from 'src/features/profile/profile-consts';

type ProfileState = {
  profile: Profile | null;
};

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
