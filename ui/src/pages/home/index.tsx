import { FC } from 'react';

import { MainContent, MainContainer, Root } from './styles';
import { Drawers, Navbar } from '../templates';
import { Demo } from '@components';

const Home: FC = () => {
	return (
		<>
			<Root>
				<Drawers />
				<MainContainer>
					<Navbar />
					<MainContent>
						<Demo />
					</MainContent>
				</MainContainer>
			</Root>
		</>
	);
};

export default Home;
