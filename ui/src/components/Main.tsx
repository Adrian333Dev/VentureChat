import {
	Box,
	Card,
	CardContent,
	Checkbox,
	CircularProgress,
	Slider,
	Switch,
	TextField,
	Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DarkModeSwitch from './DarkModeSwitch';
import ThemeColorShuffle from './ThemeColorShuffle';

export const Main = () => {
	return (
		<Card>
			<CardContent>
				<Stack direction='column' spacing={5}>
					<Stack direction='row' spacing={5}>
						<DarkModeSwitch />
						<ThemeColorShuffle />
					</Stack>
					<Stack direction='row' spacing={5}>
						<Button variant={'contained'} color={'primary'}>
							Primary Button
						</Button>
						<Button variant={'contained'} color={'secondary'}>
							Secondary Button
						</Button>
						<Button variant={'contained'}>Custom Button</Button>
					</Stack>
					<Stack direction='row' spacing={5}>
						<TextField value={'Un styled text field'} color={'primary'} />
						<TextField
							value={'styled text field'}
							multiline
							size='small'
							rows={4}
						/>
					</Stack>
					<Stack alignItems={'center'} direction='row' spacing={5}>
						<Switch defaultChecked />
						<Checkbox color={'primary'} defaultChecked />
						<Checkbox color={'error'} defaultChecked />
						<Checkbox color={'secondary'} defaultChecked />
						<Slider />
					</Stack>
					<Stack alignItems={'center'} direction='row' spacing={5}>
						<Box
							sx={{
								padding: 1,
							}}
						>
							<Typography>Use Theme</Typography>
						</Box>
						<CircularProgress />
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
};
