import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Server } from '@shared/models';
import { API_URL } from '@core/config';
import { PaginationRes } from '@shared/interfaces';

export const serverAPI = createApi({
	reducerPath: 'serverAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${API_URL}/server`,
	}),
	tagTypes: ['Server'],
	endpoints: (builder) => ({
		getAll: builder.query<PaginationRes<Server>, void>({
			query: () => '',
			providesTags: ['Server'],
		}),
		getById: builder.query<Server, number>({
			query: (id) => `/${id}`,
			providesTags: ['Server'],
		}),
		create: builder.mutation<Server, Partial<Server>>({
			query: (body) => ({
				url: '',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Server'],
		}),
		update: builder.mutation<Server, Partial<Server>>({
			query: ({ id, ...body }) => ({
				url: `/${id}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['Server'],
		}),
		delete: builder.mutation<void, number>({
			query: (id) => ({
				url: `/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Server'],
		}),
	}),
});
