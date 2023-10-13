import { FC, KeyboardEvent, MouseEvent } from 'react';
import { Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, MenuButton, StyledTitle } from './styles';
import { Link } from 'react-router-dom';

const title = (
	<Link to='/' style={{ textDecoration: 'none' }}>
		<StyledTitle variant='h6' noWrap>
			Venture Chat
		</StyledTitle>
	</Link>
);

interface NavbarProps {
	isSidebarOpen: boolean;
	isDesktop: boolean;
	drawerWidth: number;
	handleMenuClick: (value?: boolean) => (e: KeyboardEvent | MouseEvent) => void;
}

const Navbar: FC<NavbarProps> = ({
	isSidebarOpen,
	isDesktop,
	drawerWidth,
	handleMenuClick,
}) => {
	return (
		<>
			<AppBar
				position='fixed'
				open={isSidebarOpen}
				drawerWidth={drawerWidth}
				variant='outlined'
				elevation={0}
				sx={{ borderLeft: 'none' }}
			>
				<Toolbar variant='dense'>
					<MenuButton
						color='inherit'
						isDesktop={isDesktop}
						isSidebarOpen={isSidebarOpen}
						onClick={handleMenuClick()}
					>
						<MenuIcon />
					</MenuButton>
					{title}
				</Toolbar>
			</AppBar>
			<Toolbar sx={{ display: 'hidden' }} />
		</>
	);
};

export default Navbar;
