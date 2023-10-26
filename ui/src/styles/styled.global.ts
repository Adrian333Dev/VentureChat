import { Box, styled } from '@mui/material';
import { muiTransition } from '@shared/helpers/styling';

interface SlidingXBoxProps {
	slide: boolean;
	width: number;
}


export const SlidingXBox = styled(Box, {
	shouldForwardProp: (prop: string) => ['slide', 'width'].indexOf(prop) === -1,
})<SlidingXBoxProps>(({ slide, width, theme }) => ({
	transition: muiTransition(theme, 'width'),
	...(slide ? { width } : { width: 0 }),
}));
