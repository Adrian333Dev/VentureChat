import { Transitions, styled } from '@mui/material';

const getTransitions = (
	transitions: Transitions,
	type: 'margin' | 'transform'
) =>
	transitions.create(type, {
		easing: transitions.easing.sharp,
		duration: transitions.duration.enteringScreen,
	});

interface MainProps {
	isSidebarOpen: boolean;
	isDesktop: boolean;
	drawerWidth: number;
}

export const Main = styled('main', {
	shouldForwardProp: (prop: string) =>
		['isSidebarOpen', 'isDesktop', 'drawerWidth'].indexOf(prop) === -1,
})<MainProps>(({ theme, isSidebarOpen, isDesktop, drawerWidth }) => ({
	flexGrow: 1,
	padding: theme.spacing(1),
	...(isDesktop && {
		marginLeft: `${drawerWidth}px`,
		transition: getTransitions(theme.transitions, 'margin'),
	}),
	...(!isDesktop && {
		...(!isSidebarOpen && {
			transform: `translateX(0)`,
			transition: getTransitions(theme.transitions, 'transform'),
		}),
		...(isSidebarOpen && {
			transform: `translateX(${drawerWidth}px)`,
			transition: getTransitions(theme.transitions, 'transform'),
		}),
	}),
}));
