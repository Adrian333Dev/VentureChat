import {
	Box,
	BoxProps,
	Toolbar,
	styled,
	Drawer as MuiDrawer,
	DrawerProps as MuiDrawerProps,
} from '@mui/material';
import { FC } from 'react';

export const LayoutContainer = styled('div')(() => ({
	width: '100%',
	height: '100vh',
	display: 'flex',
}));

export const MainContainer = styled('div')(() => ({
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	position: 'relative',
}));

export const ContentContainer: FC<BoxProps> = ({ children, ...props }) => (
	<>
		<Toolbar variant='dense' />
		<Box paddingTop={1} height={'100%'} {...props}>
			{children}
		</Box>
	</>
);

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