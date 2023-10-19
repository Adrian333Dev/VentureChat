import {
	PaletteOptions,
	ThemeOptions,
	createTheme,
	responsiveFontSizes,
} from '@mui/material';
import { cyan } from '@mui/material/colors';
import { tailwindTeal, tailwindRose, chakraGray } from '../palettes';
import { DeepPartial } from '@utils/types';

declare module '@mui/material/styles' {
	interface Palette {
		appTitle?: {
			bg: string;
		};
	}
}

const darkPalette = {
	mode: 'dark',
	primary: tailwindRose,
	secondary: tailwindTeal,
	background: {
		default: chakraGray[900],
		paper: chakraGray[800],
	},
	appTitle: {
		bg: `-webkit-linear-gradient(280deg, ${tailwindTeal[500]} 0%, ${tailwindRose[500]} 100%)`,
	},
};

const lightPalette = {
	mode: 'light',
	primary: tailwindRose,
	secondary: tailwindTeal,
	background: {
		default: chakraGray[200],
		paper: chakraGray[300],
	},
	appTitle: {
		bg: `-webkit-linear-gradient(280deg, ${cyan[700]} 0%, ${tailwindRose[700]} 100%)`,
	},
};

const fillTheme = (palette: DeepPartial<PaletteOptions>) =>
	responsiveFontSizes(
		createTheme({
			palette,
		} as ThemeOptions)
	);

export const mainTheme = {
	dark: fillTheme(darkPalette as PaletteOptions),
	light: fillTheme(lightPalette as PaletteOptions),
};
