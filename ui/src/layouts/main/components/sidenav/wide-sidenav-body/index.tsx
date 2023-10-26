import {
	Button,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import { DrawerContent, StyledList } from '../styles';
import { SidenavBodyProps } from '../types';
import { flexCenter } from '@shared/constants/styles';

interface WideSideNavBodyProps<T> extends Omit<SidenavBodyProps<T>, 'icon'> {
	onClickClose: () => void;
}

const WideSideNavBody = <T extends object>({
	items,
	id,
	name,
	onClickClose,
}: WideSideNavBodyProps<T>) => {
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
			<StyledList>
				{items.map((item) => (
					<ListItemButton key={item[id] as string} sx={flexCenter}>
						<ListItemText primary={item[name] as string} />
					</ListItemButton>
				))}
			</StyledList>
		</DrawerContent>
	);
};

export default WideSideNavBody;
