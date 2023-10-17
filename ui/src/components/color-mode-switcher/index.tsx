import { FC, useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ToggleButton } from '@mui/material';

import { ThemeContext } from '@theme/theme.provider';

const ColorModeSwitcher: FC = () => {
	const theme = useTheme();
	const colorMode = useContext(ThemeContext);
	return (
		<ToggleButton
			style={{ borderRadius: '50px', border: 'none' }}
			value='check'
			onChange={colorMode.toggleColorMode}
		>
			change mode
			{theme.palette.mode === 'dark' && <LightModeIcon color={'secondary'} />}
			{theme.palette.mode === 'light' && <DarkModeIcon color={'secondary'} />}
		</ToggleButton>
	);
};

export default ColorModeSwitcher;
