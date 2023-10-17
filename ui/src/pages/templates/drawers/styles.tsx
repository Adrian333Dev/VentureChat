import {
	Box,
	List,
	styled,
	Drawer as MuiDrawer,
	DrawerProps as MuiDrawerProps,
} from '@mui/material';
import { flexCenter } from '@constants/common-styles';

export const DrawerContent = styled(Box)(() => ({
	overflowY: 'auto',
	overflowX: 'hidden',
	height: '100%',
	'&::-webkit-scrollbar': {
		display: 'none',
	},
}));

export const StyledList = styled(List, {
	shouldForwardProp: (prop: string) => prop !== 'borderRight',
})<{ borderRight?: boolean }>(({ borderRight = false, theme }) => ({
	padding: 0,
	...(borderRight && {
		borderRight: `1px solid ${theme.palette.divider}`,
	}),
}));

export const ChannelItem = styled('div')(({ theme }) => ({
	...flexCenter,
	padding: theme.spacing(0.8),
	paddingLeft: theme.spacing(1.25),
	position: 'relative',
}));

export const ChannelPointer = styled('div')(({ theme }) => ({
	position: 'absolute',
	top: '50%',
	left: 0,
	transform: 'translateY(-50%)',
	width: theme.spacing(0.5),
	height: '10px',
	borderRadius: '0 5px 5px 0',
	backgroundColor: theme.palette.primary.main,
	transition: 'all 0.2s ease-in-out',
}));

export const ChannelIcon = styled('img')(() => ({
	borderRadius: '50%',
	cursor: 'pointer',
	transition: 'all 0.2s ease-in-out',
	'&:hover': {
		borderRadius: '25%',
	},
	'&:hover + div': {
		height: '20px',
	},
}));

interface DrawerProps extends MuiDrawerProps {
	width: number;
}

export const Drawer = styled(({ width, ...props }: DrawerProps) => (
	<MuiDrawer
		sx={{
			flexShrink: 0,
		}}
		PaperProps={{
			sx: {
				width,
				boxSizing: 'border-box',
			},
		}}
		{...props}
	/>
))(() => ({}));
