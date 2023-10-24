import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from '@shared/config';
import { PageLoader } from '@shared/ui';

const AppRouter: FC = () => (
	<Routes>
		{Object.values(routes).map(({ element, path }) => (
			<Route
				key={path}
				path={path}
				element={
					<Suspense fallback={<PageLoader />}>
						<div className='page-wrapper'>{element}</div>
					</Suspense>
				}
			/>
		))}
	</Routes>
);

export default AppRouter;
