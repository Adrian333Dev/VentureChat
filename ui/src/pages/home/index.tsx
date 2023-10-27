import { FC } from 'react';
import { Main } from '@layouts';
import { Box } from '@mui/material';

interface MockCategory {
	id: string;
	name: string;
}

const categories: MockCategory[] = Array.from({ length: 20 }, (_, i) => ({
	id: `${i + 1}`,
	name: `Category ${i}`,
}));

const Home: FC = () => {
	return (
		<Main>
			<Box>
				<h1>Home</h1>
			</Box>
		</Main>
	);
};

export default Home;
