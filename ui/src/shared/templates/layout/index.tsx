import { ElementType, FC, useEffect, useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

import { SlidingXBox } from '@styles';
import {
	LayoutContainer,
	Drawer,
	MainContainer,
	ContentContainer,
} from './styles';
import {
	Navbar,
	ActiveBar,
	Sidebar,
	ActiveBarItem,
	SidebarItem,
	SidebarList,
} from './templates';

interface LayoutProps {
	activeBar: ElementType;
	sideBar: ElementType;
	main: ElementType;
}

const Layout: FC<LayoutProps> = ({
	activeBar: ActiveBar,
	sideBar: Sidebar,
	main: Main,
}) => {
	const { breakpoints } = useTheme();
	const isDesktop = useMediaQuery(breakpoints.up('md'));

	const [isLGSidebarOpen, setIsLGSidebarOpen] = useState(isDesktop);
	const [isSMSidebarOpen, setIsSMSidebarOpen] = useState(false);

	useEffect(() => {
		setIsLGSidebarOpen(isDesktop), setIsSMSidebarOpen(false);
	}, [isDesktop]);

	const getDesktopSidenavWidth = () => (isLGSidebarOpen ? 300 : 64);

	return (
		<LayoutContainer>
			{/* Desktop Sidebar Wrapper */}
			<SlidingXBox
				slide={isDesktop && isLGSidebarOpen}
				width={getDesktopSidenavWidth()}
			>
				{/* Sidebar */}
				<Drawer
					open={isLGSidebarOpen}
					width={300}
					PaperProps={{ sx: { paddingLeft: `${64}px` } }}
				>
					<Sidebar />
				</Drawer>
				{/* Active Bar */}
				<Drawer open={isDesktop} width={64}>
					<ActiveBar />
				</Drawer>
			</SlidingXBox>
			{/* Mobile Sidebar */}
			<Drawer
				open={!isDesktop && isSMSidebarOpen}
				width={'100%'}
				onClose={() => setIsSMSidebarOpen(false)}
				variant='temporary'
			>
				<Box>
					<ActiveBar />
					<Sidebar />
				</Box>
			</Drawer>
			{/* Main Section */}
			<MainContainer>
				<Navbar handleMenuClick={() => setIsSMSidebarOpen(true)} />
				{/* Main Content */}
				<ContentContainer>
					<Main />
				</ContentContainer>
			</MainContainer>
		</LayoutContainer>
	);
};

export default Layout;

export { Navbar, ActiveBar, Sidebar, ActiveBarItem, SidebarItem, SidebarList };
