import { Provider as StoreProvider } from 'react-redux';

import { store } from '@core/store';
import ThemeProvider from './theme.provider';

export const Providers = ({ children }: { children: React.ReactNode }) => (
	<ThemeProvider>
		<StoreProvider store={store}>{children}</StoreProvider>
	</ThemeProvider>
);
