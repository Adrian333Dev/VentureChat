import { FC } from 'react';

import {
	ChannelIcon,
	ChannelItem,
	ChannelPointer,
	DrawerContent,
	StyledList,
} from './styles';
import Drawer from './drawer';
import { Tooltip } from '@mui/material';

const mockChannels = Array.from({ length: 20 }, (_, i) => ({
	id: i,
	name: `Channel ${i}`,
	icon: 'https://picsum.photos/200',
}));

interface ChannelDrawerProps {
	width: number;
	open: boolean;
}

const ChannelDrawer: FC<ChannelDrawerProps> = ({ width = 60, open }) => {
	return (
		<Drawer open={open} width={width} variant='persistent' overlap={1000}>
			<DrawerContent>
				<StyledList borderRight>
					{mockChannels.map((channel) => (
						<ChannelItem key={channel.id}>
							<Tooltip title={channel.name} arrow placement='right'>
								<ChannelIcon src={channel.icon} alt={channel.name} />
							</Tooltip>
							<ChannelPointer />
						</ChannelItem>
					))}
				</StyledList>
			</DrawerContent>
		</Drawer>
	);
};

export default ChannelDrawer;
