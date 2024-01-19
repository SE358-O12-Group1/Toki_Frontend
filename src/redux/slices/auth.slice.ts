import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import AuthType, { initialAuth } from '@/types/AuthType';
import { setAuthDataToLS } from '@/utils/auth';

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuth,
    reducers: {
        signup: (state, action: PayloadAction<AuthType>) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            setAuthDataToLS(action.payload);
        },

        login: (state, action: PayloadAction<AuthType>) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            setAuthDataToLS(action.payload);
        },

        logout: (state) => {
            state.user = initialAuth.user;
            state.accessToken = initialAuth.accessToken;
            state.refreshToken = initialAuth.refreshToken;
        },

        updateUser: (state, action: PayloadAction<AuthType>) => {
            state.user = action.payload.user;
            setAuthDataToLS(action.payload);
        }
    }
});

export const { signup, login, logout, updateUser } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
