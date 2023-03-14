import { AuthState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApiSlice } from './authApiSlice';

const initialState: AuthState = {
    user: null,
    token: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateAuthToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addMatcher(authApiSlice.endpoints.signIn.matchFulfilled, (state, { payload }) => {
            state.token = payload.token;
            state.user = payload.user;
        });
        builder.addMatcher(authApiSlice.endpoints.logOut.matchFulfilled, (state, { payload }) => {
            state.token = payload.token;
            state.user = payload.user;
        });
        builder.addMatcher(authApiSlice.endpoints.checkAuth.matchFulfilled, (state, { payload }) => {
            state.token = payload.token;
            state.user = payload.user;
        });
    }
});

export const { updateAuthToken } = authSlice.actions;

export default authSlice.reducer;
