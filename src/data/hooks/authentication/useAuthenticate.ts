import { useMutation } from '@tanstack/react-query';
import {
	authenticate,
	IAuthenticateParams,
} from '../../controllers/authentication.controller';

export function useAuthenticate() {
	async function mutation(data: IAuthenticateParams): Promise<void> {
		return authenticate(data);
	}

	return useMutation(mutation);
}
