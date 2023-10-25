import { styled } from '@mui/material';

export const Root = styled('div')(() => ({
	width: '100%',
	height: '100vh',
	display: 'flex',
}));

export const Main = styled('div')(() => ({
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
}));

export const Content = styled('div')(() => ({}));