import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from 'react-router-dom';
import { ForgotPasswordPage } from '../../pages/OnBoarding/ForgotPassword';
import { LoginPage } from '../../pages/OnBoarding/Login';
import { RegisterPage } from '../../pages/OnBoarding/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to="/login" replace={true} />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '/forgot-password',
		element: <ForgotPasswordPage />,
	},
]);

export function Router() {
	return <RouterProvider router={router} />;
}
