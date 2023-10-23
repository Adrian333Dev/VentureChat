import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface User {
	id: string;
	name: string;
	email: string;
}

interface UserState {
	users: User[];
	isLoading: boolean;
	error: string;
}

const initialState: UserState = {
	users: [],
	isLoading: false,
	error: '',
};

const userSliceExample = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUsersStart(state) {
			state.isLoading = true;
		},
		getUsersSuccess(state, action: PayloadAction<User[]>) {
			state.users = action.payload;
			state.isLoading = false;
			state.error = '';
		},
		getUsersFailure(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export default userSliceExample.reducer;
