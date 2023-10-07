import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { StyledEngineProvider } from '@mui/material';

import './index.css';
import { ThemeProvider } from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</StyledEngineProvider>
	</React.StrictMode>
);
