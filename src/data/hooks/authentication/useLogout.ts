import { useMutation } from '@tanstack/react-query';
import { logout } from '../../controllers/authentication.controller';

export function useLogout() {
  async function mutation() {
    logout();
    // eslint-disable-next-line no-restricted-globals
    // location.reload();
  }

  return useMutation(mutation);
}
