import {
	styled,
	AppBar as MuiAppBar,
	AppBarProps as MuiAppBarProps,
	IconButton,
	IconButtonProps as MuiIconButtonProps,
	Typography,
} from '@mui/material';

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
	drawerWidth?: number;
}

export const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop: string) =>
		['open', 'drawerWidth'].indexOf(prop) === -1,
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

interface MenuButtonProps extends MuiIconButtonProps {
	isDesktop: boolean;
	isSidebarOpen: boolean;
}

export const MenuButton = styled(IconButton, {
	shouldForwardProp: (prop: string) =>
		['isDesktop', 'isSidebarOpen'].indexOf(prop) === -1,
})<MenuButtonProps>(({ theme, isDesktop }) => ({
	marginRight: theme.spacing(2),
	...(isDesktop && {
		display: 'none',
	}),
	// ...(isSidebarOpen && {
	// 	display: 'none',
	// }),
}));

export const StyledTitle = styled(Typography)(({ theme: { palette } }) => ({
	flexGrow: 1,
	fontFamily: 'Audiowide',
	background: palette.appTitle?.bg || palette.primary.main,
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
}));
