import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './app/Router';

const queryClient = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	);
}
