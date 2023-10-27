import { styled } from '@mui/material';
import { flexCenter } from '@shared/constants/styles';

export const Item = styled('div')(({ theme }) => ({
	...flexCenter,
	padding: theme.spacing(0.8),
	paddingLeft: theme.spacing(1.25),
	position: 'relative',
}));

export const ItemPointer = styled('div')(({ theme }) => ({
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

export const ItemIcon = styled('img')(() => ({
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
