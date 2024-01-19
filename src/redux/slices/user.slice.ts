import { createSlice } from '@reduxjs/toolkit';

import UserType, { initialUser } from '@/types/UserType';

type userStateType = {
    profile: UserType;
};

const initialState: userStateType = {
    profile: initialUser
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload;
        },

        clearProfile: (state) => {
            state.profile = initialUser;
        }
    }
});

export const { setProfile, clearProfile } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
