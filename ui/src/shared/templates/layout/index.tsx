import { FC, ReactNode, useEffect, useState } from 'react';

import { LayoutContainer } from './styles';
import { SlidingXBox } from '@styles';
import { useMediaQuery, useTheme } from '@mui/material';
import { Drawer } from '../styles';

interface LayoutProps {
	activeBar: FC;
	sideBar: FC;
	main: FC;
}

const Layout: FC<LayoutProps> = ({
	activeBar: ActiveBar,
	sideBar: Sidebar,
	main: Main,
}) => {
	const { breakpoints } = useTheme();
	const isDesktop = useMediaQuery(breakpoints.up('md'));

	const [isWideSideNavOpen, setIsWideSideNavOpen] = useState(isDesktop);
	const [isThinSideNavOpen, setIsThinSideNavOpen] = useState<boolean>(false);

	useEffect(() => {
		setIsWideSideNavOpen(isDesktop), setIsThinSideNavOpen(false);
	}, [isDesktop]);

	const getDesktopSidenavWidth = () => (isWideSideNavOpen ? 300 : 64);

	return (
		<LayoutContainer>
			<SlidingXBox
				slide={isDesktop && isWideSideNavOpen}
				width={getDesktopSidenavWidth()}
			>
				<Drawer
					open={isWideSideNavOpen}
					width={300}
					PaperProps={{ sx: { paddingLeft: `${64}px` } }}
				>
					<Sidebar />
				</Drawer>
				<Drawer open={isDesktop} width={64} variant='persistent'>
					<ActiveBar />
				</Drawer>
			</SlidingXBox>
		</LayoutContainer>
	);
};

export default Layout;
