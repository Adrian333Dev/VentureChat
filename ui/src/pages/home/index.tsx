import { FC } from 'react';
import { Box } from '@mui/material';

import { DrawerHeader, Main } from './styles';
import { Drawers, Navbar } from '../templates';
import { Demo } from '@components';

const Home: FC = () => {
	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '100vh',
					display: 'flex',
				}}
			>
				<Drawers />
				<Box
					sx={{
						flex: 1,
						height: '100%',
						position: 'relative',
					}}
				>
					<Navbar />
					<Main>
						<DrawerHeader />
						<Demo />
					</Main>
				</Box>
			</Box>
		</>
	);
};

export default Home;
