import { ActiveBar } from '@shared/templates/layout/templates';
import { FC } from 'react';

interface MockServer {
	id: string;
	name: string;
	icon: string;
}

const servers: MockServer[] = Array.from({ length: 20 }, (_, i) => ({
	id: `${i + 1}`,
	name: `Server ${i + 1}`,
	icon: 'https://picsum.photos/200',
	category: `Category ${i + 1}`,
}));

const PopularServers: FC = () => {
	return <ActiveBar items={servers} />;
};

export default PopularServers;
