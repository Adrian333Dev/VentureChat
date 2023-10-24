import { FC } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

export const PageLoader: FC = () => (
	<Backdrop
		sx={{
			backgroundColor: ({ palette }) => palette.background.default,
			color: ({ palette }) => palette.text.primary,
		}}
		open={true}
	>
		<CircularProgress color='inherit' />
	</Backdrop>
);
