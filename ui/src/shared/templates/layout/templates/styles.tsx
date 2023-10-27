import { List, styled } from '@mui/material';

export const StyledList = styled(List, {
	shouldForwardProp: (prop: string) => prop !== 'borderRight',
})<{ borderRight?: boolean }>(({ borderRight = false, theme }) => ({
	padding: 0,
	...(borderRight && {
		borderRight: `1px solid ${theme.palette.divider}`,
	}),
}));

export const DrawerContent = styled('div')(() => ({
	overflowY: 'auto',
	overflowX: 'hidden',
	height: '100%',
	'&::-webkit-scrollbar': {
		display: 'none',
	},
}));
