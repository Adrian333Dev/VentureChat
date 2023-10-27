import { Tooltip } from '@mui/material';

import { DrawerContent, StyledList } from '../styles';
import { TListItem, TListItemIcon, TListItemPointer } from './styles';
import { SidenavBodyProps } from '../types';

const ThinSideNavBody = <T extends object>({
	items,
	id,
	name,
	icon,
}: SidenavBodyProps<T>) => {
	return (
		<DrawerContent>
			<StyledList borderRight>
				{items.map((item) => (
					<TListItem key={item[id] as string}>
						<Tooltip title={item[name] as string} arrow placement='right'>
							<TListItemIcon
								src={
									item[icon]
										? (item[icon] as string)
										: 'https://picsum.photos/200'
								}
								alt={item[name] as string}
							/>
						</Tooltip>
						<TListItemPointer />
					</TListItem>
				))}
			</StyledList>
		</DrawerContent>
	);
};

export default ThinSideNavBody;
