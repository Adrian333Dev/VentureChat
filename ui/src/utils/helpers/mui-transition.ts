import { Theme } from '@mui/material';

export const transition = (
	theme: Theme,
	type: 'margin' | 'transform' | 'width' | 'all' = 'all',
	options?: { duration?: number; easing?: string }
): string => {
	const {
		duration = theme.transitions.duration.enteringScreen,
		easing = theme.transitions.easing.sharp,
	} = options || {};
	return theme.transitions.create(type, {
		easing,
		duration,
	});
};
