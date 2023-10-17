import { FC } from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';

import { Home } from '@pages';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path='/' element={<Home />} />
		</Route>
	)
);

const App: FC = () => {

	return <RouterProvider router={router} />;
};

export default App;
