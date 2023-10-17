import { FC } from 'react';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ToggleButton from '@mui/material/ToggleButton';

const ThemeSwitcher: FC = () => {
	// const colorMode = useContext(ThemeContext);
	return (
		<ToggleButton
			value={'check'}
			style={{ borderRadius: '50px', border: 'none' }}
			onChange={() => console.log('change theme')}
		>
			change theme
			<ColorLensIcon color={'secondary'} />
		</ToggleButton>
	);
};

export default ThemeSwitcher;
