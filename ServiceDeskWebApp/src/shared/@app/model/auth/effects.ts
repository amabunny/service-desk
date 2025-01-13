import { appDomain } from '../@init';
import { Tokens } from './types';

export const writeTokensToLsFx = appDomain.createEffect({
  handler: (params: Tokens) => {
    localStorage.setItem('accessToken', params.accessToken);
    localStorage.setItem('refreshToken', params.refreshToken);
  },
});

export const getTokensFromLsFx = appDomain.createEffect({
  handler: () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      return { accessToken, refreshToken };
    }

    return null;
  },
});
