import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import {
  PreventFlashOnWrongTheme,
  type Theme,
  ThemeProvider,
  useTheme,
} from 'remix-themes';
import { themeSessionResolver } from '~/utils/theme.server';
import '~/styles/fonts/fonts.css';
import '~/styles/global.css';
import '~/styles/reset.css';
import clsx from 'clsx';
import Footer from '~/components/Footer/Footer';
import Header from '~/components/Header/Header';
import { darkTheme, lightTheme } from '~/styles/global.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css',
  },
  { rel: 'icon', href: '/assets/icon/ic_favicon.svg', type: 'image/svg+xml' },
  {
    href: 'https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css',
    rel: 'stylesheet',
  },
  {
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css',
  },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { getTheme } = await themeSessionResolver(request);
  return json({
    theme: getTheme(),
  });
};

function App() {
  const [theme] = useTheme();

  return (
    <html
      lang="ko"
      className={clsx(theme === 'light' ? lightTheme : darkTheme)}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <Links />
      </head>
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '200px',
          }}
        >
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        {/* <LiveReload /> */}
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const { theme } = useLoaderData<typeof loader>();

  return (
    <ThemeProvider
      specifiedTheme={theme as Theme | null}
      themeAction="/actions/set-theme"
    >
      <App />
    </ThemeProvider>
  );
}
