import {
	IconButton,
	IconButtonProps,
	styled,
	AppBar as MuiAppBar,
	AppBarProps as MuiAppBarProps,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const MenuButton = styled((props: IconButtonProps) => (
	<IconButton {...props}>
		<MenuIcon />
	</IconButton>
))(({ theme }) => ({
	marginRight: theme.spacing(2),
	[theme.breakpoints.up('md')]: { display: 'none' },
}));

export const AppBar = styled((props: MuiAppBarProps) => (
	<MuiAppBar position='absolute' variant='outlined' elevation={0} {...props} />
))(({ theme }) => ({
	left: 0,
	[theme.breakpoints.up('md')]: {
		borderLeft: 'none',
	},
}));
