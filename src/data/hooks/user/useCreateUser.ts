import { useMutation } from '@tanstack/react-query';
import {
	createUser,
	ICreateUserParams,
} from '../../controllers/user.controller';

export function useCreateUser() {
	async function mutation(data: ICreateUserParams) {
		return createUser(data);
	}

	return useMutation(mutation);
}
