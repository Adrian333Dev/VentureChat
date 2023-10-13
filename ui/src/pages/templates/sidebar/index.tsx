import {
	AppBar,
	Box,
	Drawer,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import { FC } from 'react';
import { StyledList, StyledServerDrawer, StyledChannelDrawer } from './styles';
import { flexCenter } from '@constants/common-styles';

interface SidebarProps {
	isDesktop: boolean;
	isOpen: boolean;
	drawerWidth: number;
}

const mockServers = Array.from({ length: 20 }, (_, i) => ({
	id: i,
	name: `Server ${i}`,
	icon: 'https://picsum.photos/200',
}));
const mockChannels = Array.from({ length: 20 }, (_, i) => ({
	id: i,
	name: `Channel ${i}`,
}));

const serverDrawer = (
	<StyledServerDrawer width={60}>
		<StyledList borderRight>
			{mockServers.map((server) => (
				<ListItemButton key={server.id} sx={flexCenter}>
					<ListItemIcon
						sx={{
							...flexCenter,
							'& img': {
								width: 40,
								height: 40,
								borderRadius: '50%',
							},
						}}
					>
						<img src={server.icon} alt={server.name} />
					</ListItemIcon>
				</ListItemButton>
			))}
		</StyledList>
	</StyledServerDrawer>
);

const channelDrawer = (
	<StyledChannelDrawer width={240}>
		<StyledList>
			{mockChannels.map((channel) => (
				<ListItemButton key={channel.id}>
					<ListItemText primary={channel.name} />
				</ListItemButton>
			))}
		</StyledList>
	</StyledChannelDrawer>
);

const Sidebar: FC<SidebarProps> = ({ isOpen, drawerWidth }) => {
	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
			}}
			open={isOpen}
			variant={'persistent'}
			PaperProps={{
				sx: {
					width: drawerWidth,
					display: 'flex',
					overflow: 'hidden',
				},
			}}
		>
			<Box sx={{ display: 'flex', height: '100%' }}>
				{serverDrawer}
				<Box sx={{ width: 240, position: 'relative', height: '100%' }}>
					<AppBar
						position='absolute'
						variant='outlined'
						elevation={0}
						sx={{ borderInline: 'none', top: 0 }}
					>
						<Toolbar variant='dense'>
							<Typography>Channel Name</Typography>
						</Toolbar>
					</AppBar>
					<Toolbar variant='dense' sx={{ display: 'hidden' }} />
					{channelDrawer}
				</Box>
			</Box>
		</Drawer>
	);
};

export default Sidebar;
