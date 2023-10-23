import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category } from '@shared/models';
import { BASE_URL } from '@config';

export const categoryAPI = createApi({
	reducerPath: 'categoryAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}/category`,
	}),
	tagTypes: ['Category'],
	endpoints: (builder) => ({
		getCategories: builder.query<Category[], void>({
			query: () => 'categories',
		}),
	}),
});
