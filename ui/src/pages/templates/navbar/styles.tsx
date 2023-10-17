import {
	styled,
	AppBar as MuiAppBar,
	AppBarProps as MuiAppBarProps,
	IconButton,
	Typography,
} from '@mui/material';

export const AppBar = styled((props: MuiAppBarProps) => (
	<MuiAppBar position='absolute' variant='outlined' elevation={0} {...props} />
))(() => ({
	left: 0,
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
	marginRight: theme.spacing(2),
	[theme.breakpoints.up('md')]: { display: 'none' },
}));

export const StyledTitle = styled(Typography)(({ theme: { palette } }) => ({
	flexGrow: 1,
	fontFamily: 'Audiowide',
	background: palette.appTitle?.bg || palette.primary.main,
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
}));
