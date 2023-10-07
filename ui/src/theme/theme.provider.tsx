import { ReactNode, createContext, useMemo, useState } from 'react';
import {
	ThemeProvider as MuiThemeProvider,
	GlobalStyles,
	CssBaseline,
	useMediaQuery,
	createTheme,
	ThemeOptions,
} from '@mui/material';
import { CustomPalette } from './enums';
import { color as ThemeColors } from '.';

export const ThemeContext = createContext({
	toggleColorMode: () => {},
	shuffleColorTheme: () => {},
});

type ThemeProviderProps = {
	children: ReactNode | ReactNode[];
};

type ColorMode = 'light' | 'dark';

export default function ThemeProvider({ children }: ThemeProviderProps) {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const [mode, setMode] = useState<ColorMode>(
		prefersDarkMode ? 'dark' : 'light'
	);

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
			shuffleColorTheme: () =>
				setTheme((prevTheme) => ((prevTheme + 1) % 4) as CustomPalette),
		}),
		[]
	);

	const [theme, setTheme] = useState<CustomPalette>(CustomPalette.ONE);

	const _theme = useMemo(
		() => createTheme(ThemeColors[theme][mode] as ThemeOptions),
		[mode, theme]
	);

	return (
		<ThemeContext.Provider value={colorMode}>
			<MuiThemeProvider theme={_theme}>
				<GlobalStyles
					styles={{
						'html, body': {
							overflowX: 'hidden',
							overflowY: 'auto',
						},
						'html, body, #root': {
							height: '100%',
							width: '100%',
						},
						'::-webkit-scrollbar': {
							width: '0.4rem',
						},
						'::-webkit-scrollbar-track': {
							background: '#f1f1f1',
						},
						'::-webkit-scrollbar-thumb': {
							background: '#888',
						},
						'::-webkit-scrollbar-thumb:hover': {
							background: '#555',
						},
					}}
				/>
				<CssBaseline enableColorScheme />
				{children}
			</MuiThemeProvider>
		</ThemeContext.Provider>
	);
}
