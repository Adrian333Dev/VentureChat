export { default as ThemeProvider } from './theme.provider';
export * from './theme.provider';

import { Palette, PaletteColor } from '@mui/material/styles';
import { CustomPalette } from './enums';
import { blueTheme, defaultTheme, greenTheme, redTheme } from './presets';
import { DeepPartial } from '../utility/types';

declare module '@mui/material/styles' {
	interface Palette {
		upvote?: PaletteColor;
		downvote?: PaletteColor;
		containerPrimary?: PaletteColor;
		containerSecondary?: PaletteColor;
	}
	interface PaletteOptions {
		upvote?: PaletteColor;
		downvote?: PaletteColor;
		containerPrimary?: PaletteColor;
		containerSecondary?: PaletteColor;
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		upvote: true;
		downvote: true;
	}
}

declare module '@mui/material/CircularProgress' {
	interface CircularProgressPropsColorOverrides {
		upvote: true;
		downvote: true;
	}
}

export interface AppTheme {
	dark: { palette: DeepPartial<Palette> };
	light: { palette: DeepPartial<Palette> };
}

export const color = {
	[CustomPalette.ONE]: defaultTheme,
	[CustomPalette.TWO]: greenTheme,
	[CustomPalette.THREE]: blueTheme,
	[CustomPalette.FOUR]: redTheme,
};
