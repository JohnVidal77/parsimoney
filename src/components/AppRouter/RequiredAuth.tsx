import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../app/Firebase';
import { useEffect, useState } from 'react';
import { CircularProgress, Grid, GridItem } from '@chakra-ui/react';

export function RequireAuth() {
	const location = useLocation();

	const [authStatus, setAuthStatus] = useState<
		'logged' | 'pending' | 'unauthorized'
	>('pending');

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user == null) {
				setAuthStatus('unauthorized');
			} else if (user !== null) {
				setAuthStatus('logged');
			}
		});
	}, []);

	if (authStatus === 'pending') {
		return (
			<Grid w="100vw" h="100vh" placeItems="center">
				<GridItem>
					<CircularProgress isIndeterminate color="green.300" />
				</GridItem>
			</Grid>
		);
	}

	if (authStatus === 'unauthorized') {
		return <Navigate to="/" state={{ from: location }} replace />;
	}

	return <Outlet />;
}
