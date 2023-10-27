import { Box, BoxProps, Toolbar, styled } from '@mui/material';
import { FC } from 'react';

export const LayoutContainer = styled('div')(() => ({
	width: '100%',
	height: '100vh',
	display: 'flex',
}));

export const Main = styled('div')(() => ({
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	position: 'relative',
}));

export const Content: FC<BoxProps> = ({ children, ...props }) => (
	<>
		<Toolbar variant='dense' />
		<Box paddingTop={1} height={'100%'} {...props}>
			{children}
		</Box>
	</>
);
