import { FC } from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(<Route></Route>));

const App: FC = () => {
	return <RouterProvider router={router} />;
};

export default App;
