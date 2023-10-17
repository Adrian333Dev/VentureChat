import { FC } from 'react';

import {
	ChannelIcon,
	ChannelItem,
	ChannelPointer,
	DrawerContent,
	StyledList,
} from './styles';
import { Tooltip } from '@mui/material';

const mockChannels = Array.from({ length: 20 }, (_, i) => ({
	id: i,
	name: `Channel ${i}`,
	icon: 'https://picsum.photos/200',
}));

const ChannelList: FC = () => {
	return (
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
	);
};

export default ChannelList;
