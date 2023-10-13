export { default as ThemeProvider } from './theme.provider';
export * from './theme.provider';

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

declare module '@mui/material/Drawer' {
	interface DrawerPropsColorOverrides {
		upvote: true;
		downvote: true;
	}
}
