import { FC, ReactNode } from 'react';
import {
	Drawer as MuiDrawer,
	DrawerProps as MuiDrawerProps,
} from '@mui/material';

export interface DrawerProps extends MuiDrawerProps {
	open: boolean;
	width: number;
	overlap?: number;
	variant: 'permanent' | 'persistent' | 'temporary';
	children: ReactNode | ReactNode[];
}

const Drawer: FC<DrawerProps> = ({
	children,
	open,
	width,
	overlap = 0,
	variant,
	...props
}) => {
	return (
		<MuiDrawer
			sx={{
				zIndex: (theme) => theme.zIndex.drawer + overlap,
				flexShrink: 0,
			}}
			PaperProps={{
				sx: {
					width,
					boxSizing: 'border-box',
				},
			}}
			open={open}
			variant={variant}
			{...props}
		>
			{children}
		</MuiDrawer>
	);
};

export default Drawer;
