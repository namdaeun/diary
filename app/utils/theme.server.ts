import { createCookieSessionStorage } from '@remix-run/node';
import { createThemeSessionResolver } from 'remix-themes';

const sessionSecret = process.env.SESSION_SECRET ?? 's3cret';

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__theme',
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secrets: [sessionSecret],
    secure: process.env.NODE_ENV === 'production',
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
