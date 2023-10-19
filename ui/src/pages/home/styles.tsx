import { Container, ContainerProps, styled, Toolbar } from '@mui/material';
import { ReactNode } from 'react';

export const Root = styled('div')(() => ({
	width: '100%',
	height: '100vh',
	display: 'flex',
}));

export const MainContainer = styled('div')(() => ({
	flex: 1,
	height: '100%',
	position: 'relative',
}));

interface MainContentProps extends ContainerProps {
	children: ReactNode | ReactNode[];
}

export const MainContent = styled(
	({ children, ...props }: MainContentProps) => (
		<Container {...props} component='main'>
			<Toolbar variant='dense' />
			{children}
		</Container>
	)
)(({ theme }) => ({
	paddingTop: theme.spacing(2),
	[theme.breakpoints.down('sm')]: {
		paddingLeft: theme.spacing(1.4),
		paddingRight: theme.spacing(1.4),
	},
}));
