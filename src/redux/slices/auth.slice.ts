import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import AuthType, { initialAuth } from '@/types/AuthType';

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuth,
    reducers: {
        login: (state, action: PayloadAction<AuthType>) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            localStorage.setItem(
                'auth_data',
                JSON.stringify({
                    user: action.payload.user,
                    accessToken: action.payload.accessToken,
                    refreshToken: action.payload.refreshToken
                })
            );
        }
    }
});

export const { login } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
