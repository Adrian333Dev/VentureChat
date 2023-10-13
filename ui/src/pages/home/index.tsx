import { FC, KeyboardEvent, MouseEvent, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';

import { Navbar, Sidebar } from '../templates';
import { Main as MainDemo } from '@components';
import { Main } from './styles';

const serversDrawerWidth = 60;
const channelsDrawerWidth = 240;
const drawerWidth = serversDrawerWidth + channelsDrawerWidth;

const Home: FC = () => {
	const isDesktop = useMediaQuery('(min-width: 800px)');
	const [isSidebarOpen, setIsSidebarOpen] = useState(isDesktop);

	useEffect(() => {
		if (isDesktop) setIsSidebarOpen(true);
		else setIsSidebarOpen(false);
	}, [isDesktop]);

	const handleSidebarToggle =
		(value = !isSidebarOpen) =>
		(e: KeyboardEvent | MouseEvent) => {
			if (
				e &&
				e.type === 'keydown' &&
				((e as KeyboardEvent).key === 'Tab' ||
					(e as KeyboardEvent).key === 'Shift')
			)
				return;
			setIsSidebarOpen(value);
		};

	return (
		<>
			<Navbar
				handleMenuClick={handleSidebarToggle}
				isSidebarOpen={isSidebarOpen}
				drawerWidth={drawerWidth}
				isDesktop={isDesktop}
			/>
			<Sidebar
				isDesktop={isDesktop}
				isOpen={isSidebarOpen}
				drawerWidth={drawerWidth}
			/>
			<Main
				isDesktop={isDesktop}
				isSidebarOpen={isSidebarOpen}
				drawerWidth={drawerWidth}
			>
				<MainDemo />
			</Main>
		</>
	);
};

export default Home;
