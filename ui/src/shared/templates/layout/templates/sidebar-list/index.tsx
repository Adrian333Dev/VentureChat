import { ElementType } from 'react';
import { StyledList } from '../styles';

interface SidebarListProps<T> {
	items: T[];
	itemComponent: ElementType;
	[key: string]: unknown;
}

const SidebarList = <T extends { id: string }>({
	items,
	itemComponent: ItemComponent,
	...props
}: SidebarListProps<T>) => {
	return (
		<StyledList>
			{items.map((item) => (
				<ItemComponent item={item} {...props} />
			))}
		</StyledList>
	);
};

export default SidebarList;
