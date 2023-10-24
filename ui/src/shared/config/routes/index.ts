import { RouteProps } from 'react-router-dom';

enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	NOT_FOUND = 'not_found',
}

const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.NOT_FOUND]: '*',
};

export const routes: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: 'Main Page',
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: 'About Page',
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: 'Not Found Page',
	},
};
