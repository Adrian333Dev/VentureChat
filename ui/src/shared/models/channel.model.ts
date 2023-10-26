import { Server } from '.';

export interface Channel {
	id: string;
	name: string;
	slug: string;
	description: string;
	topic: string;
	server: Server;
}
