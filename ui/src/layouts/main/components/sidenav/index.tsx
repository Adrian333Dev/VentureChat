import { FC, useEffect, useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

import { SlidingXBox } from '@styles';
import { Drawer } from './styles';
import ThinSideNavBody from './thin-sidenav-body';
import WideSideNavBody from './wide-sidenav-body';

interface SideNavProps {
	isThinSideNavOpen: boolean;
	handleThinSideNavChange: (isOpen: boolean) => void;
}

interface MockServer {
	id: string;
	name: string;
	icon: string;
}

const servers: MockServer[] = Array.from({ length: 20 }, (_, i) => ({
	id: `${i + 1}`,
	name: `Server ${i}`,
	icon: 'https://picsum.photos/200',
}));

interface MockCategory {
	id: string;
	name: string;
}

const categories: MockCategory[] = Array.from({ length: 20 }, (_, i) => ({
	id: `${i + 1}`,
	name: `Category ${i}`,
}));

const SideNav: FC<SideNavProps> = ({
	isThinSideNavOpen,
	handleThinSideNavChange,
}) => {
	const { breakpoints } = useTheme();
	const isDesktop = useMediaQuery(breakpoints.up('md'));
	const [isWideSideNavOpen, setIsWideSideNavOpen] = useState(isDesktop);

	useEffect(() => {
		setIsWideSideNavOpen(isDesktop), handleThinSideNavChange(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isDesktop]);

	const getDesktopSidenavWidth = () => (isWideSideNavOpen ? 300 : 64);

	return (
		<>
			<SlidingXBox
				slide={isDesktop && isWideSideNavOpen}
				width={getDesktopSidenavWidth()}
			>
				<Drawer
					open={isWideSideNavOpen}
					width={300}
					PaperProps={{ sx: { paddingLeft: `${64}px` } }}
				>
					<WideSideNavBody<MockCategory>
						items={categories}
						id='id'
						name='name'
						onClickClose={() => setIsWideSideNavOpen(false)}
					></WideSideNavBody>
				</Drawer>
				<Drawer open={isDesktop} width={64} variant='persistent'>
					<ThinSideNavBody<MockServer>
						items={servers}
						id='id'
						name='name'
						icon='icon'
					/>
				</Drawer>
			</SlidingXBox>
			<Drawer
				open={!isDesktop && isThinSideNavOpen}
				width={'100%'}
				onClose={() => handleThinSideNavChange(false)}
			>
				<Box sx={{ display: 'flex' }}></Box>
			</Drawer>
		</>
	);
};

export default SideNav;
