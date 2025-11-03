import { j as a } from './jsx-runtime-56DGgGmo.js';
import { T as i } from './Tag-D0BAx3Kx.js';
import './createRuntimeFn-62c9670f.esm-Bv4SPzfY.js'; /* empty css                            */
import { l as r } from './components-DxV6QW-s.js';
var l = 'nikokj0',
  m = 'nikokj1',
  n = 'nikokj2',
  c = 'nikokj3',
  o = 'nikokj4';
const d = ({ title: s, date: e, tagName: t }) =>
    a.jsxs('article', {
      className: l,
      children: [
        a.jsx('img', {
          src: '/images/thumbnail.png',
          className: m,
          alt: '아티클 썸네일',
        }),
        a.jsxs('div', {
          className: n,
          children: [
            a.jsx('h1', { className: c, children: s }),
            a.jsx(i, { size: 'sm', children: t }),
          ],
        }),
        a.jsx('span', { className: o, children: e.getDate() }),
      ],
    }),
  j = d;
var x = 'o049mm0',
  h = 'o049mm1',
  v = 'o049mm2',
  N = 'o049mm3',
  g = 'o049mm4';
function S() {
  const { articles: s } = r();
  return a.jsxs('div', {
    className: x,
    children: [
      a.jsx('h1', { className: h, children: 'Blog' }),
      a.jsx('div', {
        className: v,
        children: a.jsx('ul', {
          className: N,
          children: s.map((e) =>
            a.jsx(
              'li',
              {
                className: g,
                children: a.jsx(
                  j,
                  {
                    title: e.title,
                    date: new Date(e.date),
                    tagName: e.tagName,
                  },
                  e.id,
                ),
              },
              e.id,
            ),
          ),
        }),
      }),
    ],
  });
}
export { S as default };
