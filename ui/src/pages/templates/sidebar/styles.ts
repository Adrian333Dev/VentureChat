import { Box, List, styled } from '@mui/material';

export const InnerSidebar = styled(Box, {
	shouldForwardProp: (prop: string) => prop !== 'width',
})<{ width: number }>(({ width }) => ({
	width: width,
	overflowY: 'auto',
	overflowX: 'hidden',
	height: '100%',
}));

export const StyledServerDrawer = styled(InnerSidebar)({
	'&::-webkit-scrollbar': {
		display: 'none',
	},
});

export const StyledChannelDrawer = styled(InnerSidebar)({
	'&::-webkit-scrollbar': {
		display: 'none',
	},
});

export const StyledList = styled(List, {
	shouldForwardProp: (prop: string) => prop !== 'borderRight',
})<{ borderRight?: boolean }>(({ borderRight = false, theme }) => ({
	padding: 0,
	...(borderRight && {
		borderRight: `1px solid ${theme.palette.divider}`,
	}),
}));


// const DrawerHeader = styled('div')(({ theme }) => ({
// 	display: 'flex',
// 	alignItems: 'center',
// 	padding: theme.spacing(0, 1),
// 	// necessary for content to be below app bar
// 	...theme.mixins.toolbar,
// 	justifyContent: 'flex-end',
// }));