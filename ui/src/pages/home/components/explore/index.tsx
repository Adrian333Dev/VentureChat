import { Sidebar } from '@shared/templates/layout';
import { FC } from 'react';

interface MockCategory {
	id: string;
	name: string;
}

const servers: MockCategory[] = Array.from({ length: 20 }, (_, i) => ({
	id: `${i + 1}`,
	name: `Server ${i + 1}`,
}));

const Explore: FC = () => {
	return <Sidebar items={servers} />;
};

export default Explore;
