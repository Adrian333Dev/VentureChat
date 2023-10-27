import { FC } from 'react';
import { StyledList } from '../styles';

interface SidebarListProps<T> {
	items: T[];
	itemComponent: FC<{ item: T }>;
	borderRight?: boolean;
	[key: string]: unknown;
}

const SidebarList = <T extends { id: string }>({
	items,
	itemComponent: ItemComponent,
	borderRight = false,
	...props
}: SidebarListProps<T>) => {
	return (
		<StyledList borderRight={borderRight}>
			{items.map((item) => (
				<ItemComponent key={item.id} item={item} {...props} />
			))}
		</StyledList>
	);
};

export default SidebarList;
