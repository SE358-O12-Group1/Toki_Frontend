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
        }
    }
});

export const { signup, login } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
