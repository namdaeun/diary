import { r as i, j as t } from './jsx-runtime-56DGgGmo.js';
import { c as _ } from './createRuntimeFn-62c9670f.esm-Bv4SPzfY.js';
import {
  n as I,
  o as B,
  p as V,
  q as O,
  _ as R,
  L as f,
  l as P,
  M as $,
  t as Z,
  O as D,
  S as Y,
  v as z,
} from './components-DxV6QW-s.js'; /**
 * @remix-run/react v2.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const k = 'positions';
function G({ getKey: e, ...n }) {
  const { isSpaMode: r } = I(),
    s = B(),
    a = V();
  O({ getKey: e, storageKey: k });
  const o = i.useMemo(() => {
    if (!e) return null;
    const l = e(s, a);
    return l !== s.key ? l : null;
  }, []);
  if (r) return null;
  const c = ((l, h) => {
    if (!window.history.state || !window.history.state.key) {
      const m = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: m }, '');
    }
    try {
      const p = JSON.parse(sessionStorage.getItem(l) || '{}')[
        h || window.history.state.key
      ];
      typeof p == 'number' && window.scrollTo(0, p);
    } catch (m) {
      console.error(m), sessionStorage.removeItem(l);
    }
  }).toString();
  return i.createElement(
    'script',
    R({}, n, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: {
        __html: `(${c})(${JSON.stringify(k)}, ${JSON.stringify(o)})`,
      },
    }),
  );
}
function J(e, n, r) {
  const s = i.useRef(
    typeof window < 'u' && 'BroadcastChannel' in window
      ? new BroadcastChannel(`${e}-channel`)
      : null,
  );
  return (
    N(s, 'message', n),
    N(s, 'messageerror', r),
    i.useCallback((a) => {
      var o;
      (o = s == null ? void 0 : s.current) == null || o.postMessage(a);
    }, [])
  );
}
function N(e, n, r = () => {}) {
  i.useEffect(() => {
    const s = e.current;
    if (s) return s.addEventListener(n, r), () => s.removeEventListener(n, r);
  }, [n, r]);
}
function U(e) {
  const n = document.createElement('style');
  n.appendChild(
    document.createTextNode(`* {
       -webkit-transition: none !important;
       -moz-transition: none !important;
       -o-transition: none !important;
       -ms-transition: none !important;
       transition: none !important;
    }`),
  ),
    document.head.appendChild(n),
    e(),
    setTimeout(() => {
      window.getComputedStyle(n).transition, document.head.removeChild(n);
    }, 100);
}
function F({ disableTransitions: e = !1 } = {}) {
  return i.useCallback(
    (n) => {
      e
        ? U(() => {
            n();
          })
        : n();
    },
    [e],
  );
}
var M = ((e) => ((e.DARK = 'dark'), (e.LIGHT = 'light'), e))(M || {}),
  W = Object.values(M),
  S = i.createContext(void 0);
S.displayName = 'ThemeContext';
var j = '(prefers-color-scheme: light)',
  b = () => (window.matchMedia(j).matches ? 'light' : 'dark'),
  g = typeof window < 'u' ? window.matchMedia(j) : null;
function K({
  children: e,
  specifiedTheme: n,
  themeAction: r,
  disableTransitionOnThemeChange: s = !1,
}) {
  const a = F({ disableTransitions: s }),
    [o, c] = i.useState(() =>
      n ? (W.includes(n) ? n : null) : typeof window != 'object' ? null : b(),
    ),
    [l, h] = i.useState(n ? 'USER' : 'SYSTEM'),
    m = J('remix-themes', (d) => {
      a(() => {
        console.log('broadcastThemeChange', s),
          c(d.data.theme),
          h(d.data.definedBy);
      });
    });
  i.useEffect(() => {
    if (l === 'USER') return () => {};
    const d = (u) => {
      a(() => {
        c(u.matches ? 'light' : 'dark');
      });
    };
    return (
      g == null || g.addEventListener('change', d),
      () => (g == null ? void 0 : g.removeEventListener('change', d))
    );
  }, [a, l]);
  const p = i.useCallback(
      (d) => {
        const u = typeof d == 'function' ? d(o) : d;
        if (u === null) {
          const L = b();
          a(() => {
            c(L), h('SYSTEM'), m({ theme: L, definedBy: 'SYSTEM' });
          }),
            fetch(`${r}`, {
              method: 'POST',
              body: JSON.stringify({ theme: null }),
            });
        } else
          a(() => {
            c(u), h('USER');
          }),
            m({ theme: u, definedBy: 'USER' }),
            fetch(`${r}`, {
              method: 'POST',
              body: JSON.stringify({ theme: u }),
            });
      },
      [m, a, o, r],
    ),
    H = i.useMemo(() => [o, p, { definedBy: l }], [o, p, l]);
  return t.jsx(S.Provider, { value: H, children: e });
}
var q = String.raw`
(() => {
  const theme = window.matchMedia(${JSON.stringify(j)}).matches
    ? 'light'
    : 'dark';
  
  const cl = document.documentElement.classList;
  const dataAttr = document.documentElement.dataset.theme;

  if (dataAttr != null) {
    const themeAlreadyApplied = dataAttr === 'light' || dataAttr === 'dark';
    if (!themeAlreadyApplied) {
      document.documentElement.dataset.theme = theme;
    }
  } else {
    const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
    if (!themeAlreadyApplied) {
      cl.add(theme);
    }
  }
  
  const meta = document.querySelector('meta[name=color-scheme]');
  if (meta) {
    if (theme === 'dark') {
      meta.content = 'dark light';
    } else if (theme === 'light') {
      meta.content = 'light dark';
    }
  }
})();
`;
function Q({ ssrTheme: e, nonce: n }) {
  const [r] = C();
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx('meta', {
        name: 'color-scheme',
        content: r === 'light' ? 'light dark' : 'dark light',
      }),
      e
        ? null
        : t.jsx('script', {
            dangerouslySetInnerHTML: { __html: q },
            nonce: n,
            suppressHydrationWarning: !0,
          }),
    ],
  });
}
function C() {
  const e = i.useContext(S);
  if (e === void 0)
    throw new Error('useTheme must be used within a ThemeProvider');
  return e;
}
var X = '_1wtyjo6c',
  ee = '_1wtyjo6d';
function A(e) {
  var n,
    r,
    s = '';
  if (typeof e == 'string' || typeof e == 'number') s += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var a = e.length;
      for (n = 0; n < a; n++)
        e[n] && (r = A(e[n])) && (s && (s += ' '), (s += r));
    } else for (r in e) e[r] && (s && (s += ' '), (s += r));
  return s;
}
function te() {
  for (var e, n, r = 0, s = '', a = arguments.length; r < a; r++)
    (e = arguments[r]) && (n = A(e)) && (s && (s += ' '), (s += n));
  return s;
}
var ne = '_10np40d0',
  se = '_10np40d1',
  re = '_10np40d2',
  ae = '_10np40d3',
  ie = '_10np40d4',
  v = '_10np40d5',
  x = '_10np40d6',
  oe = '_10np40d7';
const w = {
    GITHUB: 'https://github.com/namdaeun',
    LINKEDIN: 'https://www.linkedin.com/in/skaekdms/',
    EMAIL: 'mailto:nde40345@gmail.com',
    BLOG: 'https://velog.io/@namdaeun/posts',
  },
  le = () => {
    const [e, n] = i.useState(!0),
      [r, s] = i.useState(0);
    return (
      i.useEffect(() => {
        const a = () => {
          const o = window.scrollY,
            c = window.innerHeight;
          o <= c || o < r ? n(!0) : n(!1), s(o);
        };
        return (
          window.addEventListener('scroll', a, { passive: !0 }),
          () => {
            window.removeEventListener('scroll', a);
          }
        );
      }, [r]),
      t.jsxs('footer', {
        className: `${ne} ${e ? se : re}`,
        children: [
          t.jsx('div', {
            className: ae,
            children: t.jsxs('ul', {
              className: ie,
              children: [
                t.jsx('li', {
                  className: v,
                  children: t.jsx(f, {
                    to: w.GITHUB,
                    className: x,
                    children: 'Github →',
                  }),
                }),
                t.jsx('li', {
                  className: v,
                  children: t.jsx(f, {
                    to: w.LINKEDIN,
                    className: x,
                    children: 'Linkedin →',
                  }),
                }),
                t.jsx('li', {
                  className: v,
                  children: t.jsx(f, {
                    to: w.BLOG,
                    className: x,
                    children: 'Velog →',
                  }),
                }),
              ],
            }),
          }),
          t.jsx('p', { className: oe, children: '2023-2025' }),
        ],
      })
    );
  },
  y = ['about', 'project', 'experience', 'review'];
var ce = 'ouodtu0',
  de = 'ouodtu1';
const T = ({ activeSection: e, style: n }) => {
    const s = (() => {
      switch (e) {
        case 'about':
          return { label: 'About', path: '/' };
        case 'project':
          return { label: 'Project', path: '#project' };
        case 'experience':
          return { label: 'Experience', path: '#experience' };
        case 'review':
          return { label: 'Peer Review', path: '#review' };
        default:
          return { label: 'Blog', path: '/blog' };
      }
    })();
    return t.jsx('nav', {
      className: ce,
      style: n,
      children: t.jsx(f, { to: s.path, className: de, children: s.label }),
    });
  },
  he =
    "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2012.25C5.54167%2012.25%204.30208%2011.7396%203.28125%2010.7188C2.26042%209.69792%201.75%208.45833%201.75%207C1.75%205.54167%202.26042%204.30208%203.28125%203.28125C4.30208%202.26042%205.54167%201.75%207%201.75C7.13611%201.75%207.26979%201.75486%207.40104%201.76458C7.53229%201.77431%207.66111%201.78889%207.7875%201.80833C7.38889%202.09028%207.07049%202.45729%206.83229%202.90938C6.5941%203.36146%206.475%203.85%206.475%204.375C6.475%205.25%206.78125%205.99375%207.39375%206.60625C8.00625%207.21875%208.75%207.525%209.625%207.525C10.1597%207.525%2010.6507%207.4059%2011.0979%207.16771C11.5451%206.92951%2011.9097%206.61111%2012.1917%206.2125C12.2111%206.33889%2012.2257%206.46771%2012.2354%206.59896C12.2451%206.73021%2012.25%206.86389%2012.25%207C12.25%208.45833%2011.7396%209.69792%2010.7188%2010.7188C9.69792%2011.7396%208.45833%2012.25%207%2012.25Z'%20fill='%233A3A3A'/%3e%3c/svg%3e",
  me =
    "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_74_238)'%3e%3cpath%20d='M6.99967%209.91671C6.19273%209.91671%205.50488%209.63233%204.93613%209.06358C4.36738%208.49483%204.08301%207.80699%204.08301%207.00004C4.08301%206.1931%204.36738%205.50525%204.93613%204.9365C5.50488%204.36775%206.19273%204.08337%206.99967%204.08337C7.80662%204.08337%208.49447%204.36775%209.06322%204.9365C9.63197%205.50525%209.91634%206.1931%209.91634%207.00004C9.91634%207.80699%209.63197%208.49483%209.06322%209.06358C8.49447%209.63233%207.80662%209.91671%206.99967%209.91671ZM2.91634%207.58337H0.583008V6.41671H2.91634V7.58337ZM13.4163%207.58337H11.083V6.41671H13.4163V7.58337ZM6.41634%202.91671V0.583374H7.58301V2.91671H6.41634ZM6.41634%2013.4167V11.0834H7.58301V13.4167H6.41634ZM3.73301%204.52087L2.26009%203.10629L3.09134%202.24587L4.49134%203.70421L3.73301%204.52087ZM10.908%2011.7542L9.49343%2010.2813L10.2663%209.47921L11.7393%2010.8938L10.908%2011.7542ZM9.47884%203.73337L10.8934%202.26046L11.7538%203.09171L10.2955%204.49171L9.47884%203.73337ZM2.24551%2010.9084L3.71842%209.49379L4.52051%2010.2667L3.10592%2011.7396L2.24551%2010.9084Z'%20fill='%234299F8'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_74_238'%3e%3crect%20width='14'%20height='14'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var ue = _({
    defaultClassName: '_107c8zu0',
    variantClassNames: { mode: { light: '_107c8zu1', dark: '_107c8zu2' } },
    defaultVariants: {},
    compoundVariants: [],
  }),
  pe = '_107c8zu3',
  fe = _({
    defaultClassName: '_107c8zu4',
    variantClassNames: { mode: { light: '_107c8zu5', dark: '_107c8zu6' } },
    defaultVariants: {},
    compoundVariants: [],
  });
const ge = ({ mode: e, onChange: n, ...r }) =>
  t.jsxs('div', {
    className: ue({ mode: e }),
    children: [
      t.jsx('input', {
        type: 'checkbox',
        role: 'switch',
        checked: e === 'light',
        onChange: n,
        'aria-label': 'switch',
        'aria-checked': 'true',
        className: pe,
        ...r,
      }),
      t.jsx('img', {
        src: e === 'light' ? me : he,
        alt: `${e} mode icon`,
        className: fe({ mode: e }),
      }),
    ],
  });
var ve = '_1m658ed0',
  E = '_1m658ed1',
  xe = '_1m658ed2';
const we = () => {
    const [e, n] = C(),
      [r, s] = i.useState('about'),
      a = () => {
        const c = { light: 'dark', dark: 'light' }[e] ?? 'light';
        n(c);
      };
    return (
      i.useEffect(() => {
        const o = () => {
          const c = window.scrollY + 100;
          for (let l = y.length - 1; l >= 0; l--) {
            const h = document.getElementById(y[l]);
            if (h && h.offsetTop <= c) {
              s(y[l]);
              break;
            }
          }
        };
        return (
          window.addEventListener('scroll', o),
          () => window.removeEventListener('scroll', o)
        );
      }, []),
      t.jsxs('header', {
        className: ve,
        children: [
          t.jsx(f, {
            to: '/',
            className: E,
            children: t.jsx('h1', { className: E, children: 'Daeun Nam' }),
          }),
          t.jsxs('div', {
            className: xe,
            children: [
              t.jsx(T, { activeSection: r }),
              t.jsx(T, { activeSection: 'blog' }),
            ],
          }),
          t.jsx(ge, { mode: e === 'light' ? 'light' : 'dark', onChange: a }),
        ],
      })
    );
  },
  Le = () => [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css',
    },
    { rel: 'icon', href: '/assets/icon/ic_favicon.svg', type: 'image/svg+xml' },
    {
      href: 'https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css',
      rel: 'stylesheet',
    },
  ];
function ye() {
  const [e] = C();
  return t.jsxs('html', {
    lang: 'ko',
    className: te(e === 'light' ? X : ee),
    suppressHydrationWarning: !0,
    children: [
      t.jsxs('head', {
        children: [
          t.jsx('meta', { charSet: 'utf-8' }),
          t.jsx('meta', {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          }),
          t.jsx($, {}),
          t.jsx(Q, { ssrTheme: !!e }),
          t.jsx(Z, {}),
        ],
      }),
      t.jsxs('body', {
        children: [
          t.jsxs('div', {
            style: {
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              paddingBottom: '200px',
            },
            children: [
              t.jsx(we, {}),
              t.jsx('main', { children: t.jsx(D, {}) }),
              t.jsx(le, {}),
            ],
          }),
          t.jsx(G, {}),
          t.jsx(Y, {}),
          t.jsx(z, {}),
        ],
      }),
    ],
  });
}
function ke() {
  const { theme: e } = P();
  return t.jsx(K, {
    specifiedTheme: e,
    themeAction: '/actions/set-theme',
    children: t.jsx(ye, {}),
  });
}
export { ke as default, Le as links };
