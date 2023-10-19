import { ReactNode, createContext, useMemo, useState } from 'react';
import {
	ThemeProvider as MuiThemeProvider,
	GlobalStyles,
	CssBaseline,
	useMediaQuery,
	createTheme,
	ThemeOptions,
} from '@mui/material';
import { mainTheme } from './presets';

export const ThemeContext = createContext({
	toggleColorMode: () => {},
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
		}),
		[]
	);

	const _theme = useMemo(
		() => createTheme(mainTheme[mode] as ThemeOptions),
		[mode]
	);

	return (
		<ThemeContext.Provider value={colorMode}>
			<MuiThemeProvider theme={_theme}>
				<GlobalStyles
					styles={{
						'*': {
							boxSizing: 'border-box',
						},
						'html, body': {
							overflowX: 'hidden',
							overflowY: 'auto',
						},
						'html, body, #root': {
							height: '100%',
							width: '100%',
						},
						img: {
							width: '100%',
							height: 'auto',
						},
						'.MuiAppBar-root': {
							backgroundImage: 'none',
						},
						// '::-webkit-scrollbar': {
						// 	width: '0.4rem',
						// },
						// '::-webkit-scrollbar-track': {
						// 	background: 'transparent',
						// },
					}}
				/>
				<CssBaseline enableColorScheme />
				{children}
			</MuiThemeProvider>
		</ThemeContext.Provider>
	);
}
