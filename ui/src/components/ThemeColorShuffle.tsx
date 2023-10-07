import { useContext } from 'react';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ToggleButton from '@mui/material/ToggleButton';
import { ThemeContext } from '../theme';

const ThemeModeSwitch = () => {
	const colorMode = useContext(ThemeContext);
	return (
		<ToggleButton
			value={'check'}
			style={{ borderRadius: '50px', border: 'none' }}
			onChange={colorMode.shuffleColorTheme}
		>
			change theme
			<ColorLensIcon color={'secondary'} />
		</ToggleButton>
	);
};

export default ThemeModeSwitch;
