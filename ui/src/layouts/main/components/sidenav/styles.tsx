import {
	List,
	Drawer as MuiDrawer,
	DrawerProps as MuiDrawerProps,
	styled,
} from '@mui/material';

interface DrawerProps extends MuiDrawerProps {
	width: number | string;
}

export const Drawer = styled(
	({
		width = '100%',
		open = true,
		variant = 'persistent',
		...props
	}: DrawerProps) => (
		<MuiDrawer
			sx={{ flexShrink: 0, '& .MuiDrawer-paper': { width } }}
			variant={variant}
			open={open}
			{...props}
		/>
	)
)(() => ({}));

export const DrawerContent = styled('div')(() => ({
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


