import { FC } from 'react';
import { Button } from '@/components/ui';
import { ThemeProvider } from '@/theme';

const App: FC = () => {
	return (
		<ThemeProvider defaultTheme='system' storageKey='color-theme'>
			<h1 className='mb-2 mt-0 text-5xl font-medium leading-tight text-primary'>
				App Component
			</h1>
			<Button>Button</Button>
		</ThemeProvider>
	);
};

export default App;
