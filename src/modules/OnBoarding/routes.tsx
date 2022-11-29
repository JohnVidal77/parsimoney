import { RouteObject } from 'react-router-dom';

import { ForgotPasswordPage } from './pages/ForgotPassword';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';

const OnBoardingModuleRoutes: RouteObject[] = [
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/create-account',
		element: <RegisterPage />,
	},
	{
		path: '/forgot-password',
		element: <ForgotPasswordPage />,
	},
];

export default OnBoardingModuleRoutes;
