import { ActiveBarItem, SidebarList } from '..';
import { SidebarBodyProps } from '../../types';
import { DrawerContent } from '../styles';


const ActiveBar = <T extends { id: string }>({
	items,
	...props
}: SidebarBodyProps<T>) => {
	return (
		<DrawerContent>
			<SidebarList items={items} itemComponent={ActiveBarItem<T>} {...props} />
		</DrawerContent>
	);
};

export default ActiveBar;
