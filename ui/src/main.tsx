import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material';
import { Provider } from 'react-redux';

import App from './App.tsx';
import './index.css';
import { setupStore } from '@store';
import { ThemeProvider } from './theme';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<ThemeProvider>
				<Provider store={store}>
					<App />
				</Provider>
			</ThemeProvider>
		</StyledEngineProvider>
	</React.StrictMode>
);
