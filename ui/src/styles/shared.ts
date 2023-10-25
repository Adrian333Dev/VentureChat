import { Box, styled } from '@mui/material';

// export const SlidingBox = styled(Box, {
// 	shouldForwardProp: (prop: string) => ['slide', 'width'].indexOf(prop) === -1,
// })<SlidingBoxProps>(({ theme, slide, width }) => ({
// 	...(slide
// 		? {
// 				width: width,
// 				transition: transition(theme, 'width'),
// 		  }
// 		: {
// 				width: 0,
// 				transition: transition(theme, 'width'),
// 		  }),
// }));

interface SlidingXBoxProps {
	slide: boolean;
	width: number;
}

export const SlidingXBox = styled(Box, {
	shouldForwardProp: (prop: string) => ['slide', 'width'].indexOf(prop) === -1,
})<SlidingXBoxProps>(({ slide, width }) => ({
	transition: 'width 0.3s ease-in-out',
	...(slide ? { width } : { width: 0 }),
}));
