import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category } from '@shared/models';
import { API_URL } from '@core/config';

export const categoryAPI = createApi({
	reducerPath: 'categoryAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${API_URL}/category`,
	}),
	tagTypes: ['Category'],
	endpoints: (builder) => ({
		getAll: builder.query<Category[], void>({
			query: () => '',
			providesTags: ['Category'],
		}),
		getById: builder.query<Category, number>({
			query: (id) => `/${id}`,
			providesTags: ['Category'],
		}),
		create: builder.mutation<Category, Partial<Category>>({
			query: (body) => ({
				url: '',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Category'],
		}),
		update: builder.mutation<Category, Partial<Category>>({
			query: ({ id, ...body }) => ({
				url: `/${id}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['Category'],
		}),
		delete: builder.mutation<void, number>({
			query: (id) => ({
				url: `/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Category'],
		}),
	}),
});
