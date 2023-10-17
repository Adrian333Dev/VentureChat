import { FC } from 'react';
import {
	Button,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';

import { DrawerContent, StyledList } from './styles';
import { flexCenter } from '@constants/common-styles';

const mockCategories = Array.from({ length: 20 }, (_, i) => ({
	id: i,
	name: `Category ${i}`,
}));

interface ExploreProps {
	onClickClose: () => void;
}

const Explore: FC<ExploreProps> = ({ onClickClose }) => {
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
				{mockCategories.map((category) => (
					<ListItemButton key={category.id} sx={flexCenter}>
						<ListItemText primary={category.name} />
					</ListItemButton>
				))}
			</StyledList>
		</DrawerContent>
	);
};

export default Explore;
