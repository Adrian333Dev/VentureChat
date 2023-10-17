import { FC } from 'react';
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
	handleMenuClick?: (value?: boolean) => void;
}

const Navbar: FC<NavbarProps> = () => {
	return (
		<>
			<AppBar>
				<Toolbar variant='dense'>
					<MenuButton color='inherit'>
						<MenuIcon />
					</MenuButton>
					{title}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
