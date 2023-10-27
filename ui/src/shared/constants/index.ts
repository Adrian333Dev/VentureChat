import { PaginationRes } from '@shared/interfaces';

export const emptyPagingRes = <T>(): PaginationRes<T> => ({
	count: 0,
	previous: null,
	next: null,
	results: [],
});