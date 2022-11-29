import { Button, Grid, GridItem } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../../data/hooks/authentication/useLogout';

export function DashboardPage() {
	const navigate = useNavigate();
	const { mutateAsync, isLoading } = useLogout();

	return (
		<Grid placeItems="center" w="100vw" h="100vh">
			<GridItem>
				Dashboard
				<Button
					colorScheme="green"
					variant="solid"
					onClick={() => navigate('/profile')}
				>
					Profile
				</Button>
				<Button onClick={async () => await mutateAsync()} isLoading={isLoading}>
					Logout
				</Button>
			</GridItem>
		</Grid>
	);
}
