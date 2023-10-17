import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
	id: number;
	title: string;
	body: string;
}

// export const postExampleAPI = createApi({
// 	reducerPath: 'postExampleAPI',
// 	baseQuery: fetchBaseQuery({
// 		baseUrl: 'https://jsonplaceholder.typicode.com/',
// 	}),
// 	endpoints: (builder) => ({
// 		getPosts: builder.query<Post[], void>({
// 			query: () => 'posts',
// 		}),
// 	}),
// });

interface PredicateParams {
	filter: string;
	operator: string;
	value: string;
}

interface GetPostsParams {
	skip?: number;
	take?: number;
	sortBy?: 'id' | 'title';
	sortDir?: 'asc' | 'desc';
	predicate?: PredicateParams[];
}

interface CreatePostParams {
	title: string;
	body: string;
	userId: number;
}

export const postExampleAPI = createApi({
	reducerPath: 'postExampleAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/',
	}),
	tagTypes: ['Post'],
	endpoints: (builder) => ({
		getPosts: builder.query<Post[], GetPostsParams>({
			query: ({
				skip = 0,
				take = 10,
				sortBy = 'id',
				sortDir = 'asc',
				predicate = [
					{
						filter: 'id',
						operator: 'gte',
						value: '1',
					},
				],
			}) => {
				const params = new URLSearchParams({
					_skip: skip.toString(),
					_limit: take.toString(),
					_sort: sortBy,
					_order: sortDir,
					...predicate.reduce(
						(acc, { filter, operator, value }) => ({
							...acc,
							[`q[${filter}][${operator}]`]: value,
						}),
						{}
					),
				});
				return `posts?${params.toString()}`;
			},
			providesTags: () => ['Post'],
		}),
		getPost: builder.query<Post, number>({
			query: (id) => `posts/${id}`,
			providesTags: (reslt, error, id) => [{ type: 'Post', id }],
		}),
		createPost: builder.mutation<Post, CreatePostParams>({
			query: (body) => ({
				url: 'posts',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Post'],
		}),
		updatePost: builder.mutation<Post, Post & { id: number }>({
			query: ({ id, ...body }) => ({
				url: `posts/${id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: (result, error, { id }) => [{ type: 'Post', id }],
		}),
		deletePost: builder.mutation<void, number>({
			query: (id) => ({
				url: `posts/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: (result, error, id) => [{ type: 'Post', id }],
		}),
	}),
});
