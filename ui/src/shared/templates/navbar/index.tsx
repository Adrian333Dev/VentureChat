import { FC } from 'react';
import { Toolbar } from '@mui/material';
import { AppBar, MenuButton } from './styles';

interface NavbarProps {
	handleMenuClick: () => void;
}

const Navbar: FC<NavbarProps> = ({ handleMenuClick }) => {
	return (
		<AppBar>
			<Toolbar variant='dense'>
				<MenuButton onClick={handleMenuClick} />
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
