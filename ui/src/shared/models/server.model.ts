import { Category, User } from '.';

export interface Server {
	id: string;
	name: string;
	slug: string;
	description: string;
	icon: string;
	banner: string;
	owner: User;
	category: Category;
	members: User[];
}
