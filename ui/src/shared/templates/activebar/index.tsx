import { DrawerContent } from '../styles';
import { ActiveBarItem } from '..';

interface SidenavBodyProps<T extends { id: string }> {
	items: T[];
	itemComponent: typeof ActiveBarItem;
	[key: string]: unknown;
}

const ActiveBar = <T extends { id: string }>({
	items,
	...props
}: SidenavBodyProps<T>) => {
	return (
		<DrawerContent>
		</DrawerContent>
	);
};

export default ActiveBar;
