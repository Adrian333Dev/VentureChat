import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Providers } from '@core/providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Providers>
			<App />
		</Providers>
	</StrictMode>
);
