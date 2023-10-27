import { Button, Toolbar, Typography } from '@mui/material';

import { SidebarItem, SidebarList } from '..';
import { SidebarBodyProps } from '../../types';
import { DrawerContent } from '../styles';

const Sidebar = <T extends { id: string }>({
	items,
	...props
}: SidebarBodyProps<T>) => {

	const onClickClose = () => console.log('Close');

	return (
		<DrawerContent>
			<Toolbar>
				<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
					Explore
				</Typography>
				<Button sx={{ ml: 'auto' }} onClick={onClickClose}>
					Close
				</Button>
			</Toolbar>
			<SidebarList items={items} itemComponent={SidebarItem<T>} {...props} />
		</DrawerContent>
	);
};

export default Sidebar;
