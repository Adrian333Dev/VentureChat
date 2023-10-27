import { ListItemButton, ListItemText } from '@mui/material';

interface SidebarItemProps<T> {
	item: T;
	textKey: keyof T;
}

const SidebarItem = <T extends { id: string }>({
	item,
	textKey = 'name' as keyof T,
}: SidebarItemProps<T>) => {
	return (
		<ListItemButton key={item.id} dense>
			<ListItemText primary={item[textKey] as string} />
		</ListItemButton>
	);
};

export default SidebarItem;
