import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import AppRouter from './components/AppRouter';
const AppRouter = React.lazy(
	async () => await import('./components/AppRouter'),
);

const queryClient = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Suspense fallback={<h1>Loading...</h1>}>
				<AppRouter />
			</Suspense>
		</QueryClientProvider>
	);
}
