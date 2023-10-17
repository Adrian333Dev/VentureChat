import { FC } from 'react';
import { DrawerContent, StyledList } from './styles';
import Drawer from './drawer';
import {
	Button,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import { flexCenter } from '@constants/common-styles';

const mockCategories = Array.from({ length: 20 }, (_, i) => ({
	id: i,
	name: `Category ${i}`,
}));

interface ExploreDrawerProps {
	open: boolean;
	width: number;
	channelsDrawerWidth: number;
}

const ExploreDrawer: FC<ExploreDrawerProps> = ({
	open,
	width,
	channelsDrawerWidth,
}) => {
	return (
		<Drawer
			open={open}
			width={width + channelsDrawerWidth}
			variant='persistent'
		>
			<DrawerContent
				sx={{
					marginLeft: `${channelsDrawerWidth}px`,
				}}
			>
				<Toolbar>
					<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
						Explore
					</Typography>
					<Button sx={{ ml: 'auto' }}>Close</Button>
				</Toolbar>
				<StyledList>
					{mockCategories.map((category) => (
						<ListItemButton key={category.id} sx={flexCenter}>
							<ListItemText primary={category.name} />
						</ListItemButton>
					))}
				</StyledList>
			</DrawerContent>
		</Drawer>
	);
};

export default ExploreDrawer;
