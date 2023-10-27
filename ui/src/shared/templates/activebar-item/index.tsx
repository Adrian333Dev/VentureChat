import { Tooltip } from '@mui/material';
import { Item, ItemIcon, ItemPointer } from './styles';

interface ActiveBarItemProps<T> {
	item: T;
	name: keyof T;
	icon: keyof T;
}

const ActiveBarItem = <T extends { id: string }>({
	item,
	name,
	icon,
}: ActiveBarItemProps<T>) => {
	return (
		<Item key={item.id}>
			<Tooltip title={item[name] as string} arrow placement='right'>
				<ItemIcon
					src={
						item[icon] ? (item[icon] as string) : 'https://picsum.photos/200'
					}
					alt={item[name] as string}
				/>
			</Tooltip>
			<ItemPointer />
		</Item>
	);
};

export default ActiveBarItem;
