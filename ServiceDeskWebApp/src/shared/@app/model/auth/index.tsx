import { sample } from 'effector';
import { jwtDecode } from 'jwt-decode';

import { appDomain, initializeApp } from '../@init';
import { getTokensFromLsFx, writeTokensToLsFx } from './effects';
import { Tokens } from './types';

const setTokens = appDomain.createEvent<Partial<Tokens>>();

const $tokens = appDomain
  .createStore<Tokens | null>(null)
  .on(setTokens, (state, tokens) =>
    state
      ? { ...state, ...tokens }
      : {
          accessToken: tokens.accessToken ?? '',
          refreshToken: tokens.refreshToken ?? '',
        }
  )
  .on(getTokensFromLsFx.doneData, (_, tokens) => tokens);

const $userData = $tokens.map((token) =>
  token?.accessToken ? jwtDecode(token.accessToken) : null
);

sample({
  clock: initializeApp,
  target: getTokensFromLsFx,
});

sample({
  clock: $tokens,
  filter: $tokens.map(
    (tokens) => Boolean(tokens?.accessToken) && Boolean(tokens?.refreshToken)
  ),
  source: $tokens.map((tokens) => ({
    accessToken: tokens?.accessToken ?? '',
    refreshToken: tokens?.refreshToken ?? '',
  })),
  target: writeTokensToLsFx,
});

export { $userData, setTokens };
export type { Tokens };
