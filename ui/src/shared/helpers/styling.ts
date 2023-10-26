import { Duration, Easing, Theme } from '@mui/material';

interface TransitionOptions {
	easing: keyof Easing;
	duration: keyof Duration;
}
export const muiTransition = (
	theme: Theme,
	prop: string = 'all',
	{ easing, duration }: TransitionOptions = {
		easing: 'easeInOut',
		duration: 'standard',
	}
) =>
	theme.transitions.create(prop, {
		easing: theme.transitions.easing[easing],
		duration: theme.transitions.duration[duration],
	});
