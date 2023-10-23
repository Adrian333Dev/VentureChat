import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@shared/models';

interface IAuthState {
	user: User | null;
	accessToken?: string;
}

const initialState: IAuthState = {
	user: null,
	accessToken: undefined,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (
			_,
			{ payload: { user, accessToken } }: PayloadAction<IAuthState>
		) => ({ user, accessToken }),
		logout: () => ({ user: null, accessToken: undefined }),
	},
});

export default authSlice.reducer;
export const { setCredentials, logout } = authSlice.actions;
export const selectCurrentUser = (state: { auth: IAuthState }) =>
	state.auth.user;
export const selectAccessToken = (state: { auth: IAuthState }) =>
	state.auth.accessToken;
