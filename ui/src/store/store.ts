import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducerExample } from './reducers';
import { postExampleAPI } from '@services';

const rootReducer = combineReducers({
	userReducerExample,
	[postExampleAPI.reducerPath]: postExampleAPI.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postExampleAPI.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
