import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';

import { DashboardPage } from '../../pages/Dashboard';
import { ForgotPasswordPage } from '../../pages/OnBoarding/ForgotPassword';
import { LoginPage } from '../../pages/OnBoarding/Login';
import { RegisterPage } from '../../pages/OnBoarding/Register';
import { ProfilePage } from '../../pages/Profile';
import { RequireAuth } from './RequiredAuth';

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/login" replace={true} />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/forgot-password" element={<ForgotPasswordPage />} />
				<Route path="/" element={<RequireAuth />}>
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="/profile" element={<ProfilePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
