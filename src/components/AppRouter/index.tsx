import {
	Navigate,
	BrowserRouter,
	RouteObject,
	useRoutes,
} from 'react-router-dom';

import OnBoardingModuleRoutes from '../../modules/OnBoarding/routes';

export function Routes() {
	const routes: RouteObject[] = [
		{
			path: '/',
			element: <Navigate to="/login" replace={true} />,
		},
		...OnBoardingModuleRoutes,
	];

	const element = useRoutes(routes);

	return <>{element}</>;
}

function AppRouter() {
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
}

export default AppRouter;
