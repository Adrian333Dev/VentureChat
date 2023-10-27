import { FC } from 'react';
import { Box } from '@mui/material';

import { Layout } from '@shared/templates';
import { Explore, PopularServers } from './components';

const Home: FC = () => {
	return (
		<Layout
			activeBar={() => <PopularServers />}
			sideBar={() => <Explore />}
			main={() => <Box>Main</Box>}
		/>
	);
};

export default Home;
