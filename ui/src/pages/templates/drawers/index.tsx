import { FC, useEffect, useState, useCallback } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { SlidingXBox } from '@styles';
import Explore from './explore';
import ChannelList from './channel-list';
import { Drawer } from './styles';

const channelsDrawerWidth = 64;
const exploreDrawerWidth = 240;

const Drawers: FC = () => {
	const { breakpoints } = useTheme();
	const isMobile = useMediaQuery(breakpoints.down('sm'));
	const isTablet = useMediaQuery(breakpoints.between('sm', 'md'));
	const isDesktop = useMediaQuery(breakpoints.up('md'));

	const [isChannelsDrawerOpen, setIsChannelsDrawerOpen] =
		useState<boolean>(isDesktop);
	const [isExploreDrawerOpen, setIsExploreDrawerOpen] =
		useState<boolean>(isDesktop);
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] =
		useState<boolean>(false);

	useEffect(() => {
		if (isMobile) setIsChannelsDrawerOpen(false), setIsExploreDrawerOpen(false);
		else if (isTablet)
			setIsChannelsDrawerOpen(true), setIsExploreDrawerOpen(false);
		else if (isDesktop)
			setIsChannelsDrawerOpen(true), setIsExploreDrawerOpen(true);
		setIsMobileSidebarOpen(false);
	}, [isMobile, isTablet, isDesktop]);

	const getDrawerWidth = () =>
		isExploreDrawerOpen ? exploreDrawerWidth : channelsDrawerWidth;

	const toggleMobileSidebar = useCallback(() => {
		setIsMobileSidebarOpen((prev) => !prev);
	}, []);

	return (
		<>
			<SlidingXBox slide={isChannelsDrawerOpen} width={getDrawerWidth()}>
				<Drawer
					open={isExploreDrawerOpen}
					width={exploreDrawerWidth + channelsDrawerWidth}
					variant='persistent'
					PaperProps={{
						sx: {
							marginLeft: `${channelsDrawerWidth}px`,
						},
					}}
				>
					<Explore onClickClose={toggleMobileSidebar} />
				</Drawer>
				<Drawer
					open={isChannelsDrawerOpen}
					width={channelsDrawerWidth}
					variant='persistent'
				>
					<ChannelList />
				</Drawer>
			</SlidingXBox>
			{/* <Drawer
				open={isMobileSidebarOpen}
				width={exploreDrawerWidth}
				variant='temporary'
				onClose={toggleMobileSidebar}
			>
				<Box sx={{ display: 'flex' }}>
					<Box width={channelsDrawerWidth}>
						<ChannelList />
					</Box>
					<Box width={exploreDrawerWidth - channelsDrawerWidth}>
						<Explore onClickClose={toggleMobileSidebar} />
					</Box>
				</Box>
			</Drawer> */}
		</>
	);
};

export default Drawers;
