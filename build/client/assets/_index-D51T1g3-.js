import { r as w, j as T } from './jsx-runtime-56DGgGmo.js';
import './createRuntimeFn-62c9670f.esm-Bv4SPzfY.js';
import { T as Wr } from './Tag-D0BAx3Kx.js'; /* empty css                             */
const ti = w.createContext({});
function ie(t) {
  const e = w.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
const He = typeof window < 'u',
  Ge = He ? w.useLayoutEffect : w.useEffect,
  Xe = w.createContext(null);
function Ye(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function qe(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const q = (t, e, n) => (n > e ? e : n < t ? t : n);
const xt = () => {};
const Z = {},
  ei = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function ni(t) {
  return typeof t == 'object' && t !== null;
}
const si = (t) => /^0[^.\s]+$/u.test(t);
function Ze(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const N = (t) => t,
  Ur = (t, e) => (n) => e(t(n)),
  Nt = (...t) => t.reduce(Ur),
  Tt = (t, e, n) => {
    const s = e - t;
    return s === 0 ? 1 : (n - t) / s;
  };
class Je {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Ye(this.subscriptions, e), () => qe(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const G = (t) => t * 1e3,
  X = (t) => t / 1e3;
function Qe(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const ii = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  $r = 1e-7,
  Kr = 12;
function _r(t, e, n, s, i) {
  let o,
    r,
    a = 0;
  do (r = e + (n - e) / 2), (o = ii(r, s, i) - t), o > 0 ? (n = r) : (e = r);
  while (Math.abs(o) > $r && ++a < Kr);
  return r;
}
function Wt(t, e, n, s) {
  if (t === e && n === s) return N;
  const i = (o) => _r(o, 0, 1, t, n);
  return (o) => (o === 0 || o === 1 ? o : ii(i(o), e, s));
}
const ri = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
  oi = (t) => (e) => 1 - t(1 - e),
  ai = Wt(0.33, 1.53, 0.69, 0.99),
  tn = oi(ai),
  li = ri(tn),
  ci = (t) =>
    (t *= 2) < 1 ? 0.5 * tn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  en = (t) => 1 - Math.sin(Math.acos(t)),
  ui = oi(en),
  hi = ri(en),
  zr = Wt(0.42, 0, 1, 1),
  Hr = Wt(0, 0, 0.58, 1),
  fi = Wt(0.42, 0, 0.58, 1),
  Gr = (t) => Array.isArray(t) && typeof t[0] != 'number',
  di = (t) => Array.isArray(t) && typeof t[0] == 'number',
  Ln = {
    linear: N,
    easeIn: zr,
    easeInOut: fi,
    easeOut: Hr,
    circIn: en,
    circInOut: hi,
    circOut: ui,
    backIn: tn,
    backInOut: li,
    backOut: ai,
    anticipate: ci,
  },
  Xr = (t) => typeof t == 'string',
  kn = (t) => {
    if (di(t)) {
      xt(t.length === 4);
      const [e, n, s, i] = t;
      return Wt(e, n, s, i);
    } else if (Xr(t)) return xt(Ln[t] !== void 0), Ln[t];
    return t;
  },
  Kt = [
    'setup',
    'read',
    'resolveKeyframes',
    'preUpdate',
    'update',
    'preRender',
    'render',
    'postRender',
  ],
  jn = { value: null, addProjectionMetrics: null };
function Yr(t, e) {
  let n = new Set(),
    s = new Set(),
    i = !1,
    o = !1;
  const r = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function c(h) {
    r.has(h) && (u.schedule(h), t()), l++, h(a);
  }
  const u = {
    schedule: (h, f = !1, d = !1) => {
      const g = d && i ? n : s;
      return f && r.add(h), g.has(h) || g.add(h), h;
    },
    cancel: (h) => {
      s.delete(h), r.delete(h);
    },
    process: (h) => {
      if (((a = h), i)) {
        o = !0;
        return;
      }
      (i = !0),
        ([n, s] = [s, n]),
        n.forEach(c),
        e && jn.value && jn.value.frameloop[e].push(l),
        (l = 0),
        n.clear(),
        (i = !1),
        o && ((o = !1), u.process(h));
    },
  };
  return u;
}
const qr = 40;
function mi(t, e) {
  let n = !1,
    s = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    r = Kt.reduce((y, A) => ((y[A] = Yr(o, e ? A : void 0)), y), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: c,
      preUpdate: u,
      update: h,
      preRender: f,
      render: d,
      postRender: m,
    } = r,
    g = () => {
      const y = Z.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        Z.useManualTiming ||
          (i.delta = s ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, qr), 1)),
        (i.timestamp = y),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        c.process(i),
        u.process(i),
        h.process(i),
        f.process(i),
        d.process(i),
        m.process(i),
        (i.isProcessing = !1),
        n && e && ((s = !1), t(g));
    },
    v = () => {
      (n = !0), (s = !0), i.isProcessing || t(g);
    };
  return {
    schedule: Kt.reduce((y, A) => {
      const S = r[A];
      return (y[A] = (C, L = !1, b = !1) => (n || v(), S.schedule(C, L, b))), y;
    }, {}),
    cancel: (y) => {
      for (let A = 0; A < Kt.length; A++) r[Kt[A]].cancel(y);
    },
    state: i,
    steps: r,
  };
}
const {
  schedule: V,
  cancel: H,
  state: k,
  steps: le,
} = mi(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : N, !0);
let Gt;
function Zr() {
  Gt = void 0;
}
const O = {
    now: () => (
      Gt === void 0 &&
        O.set(
          k.isProcessing || Z.useManualTiming ? k.timestamp : performance.now(),
        ),
      Gt
    ),
    set: (t) => {
      (Gt = t), queueMicrotask(Zr);
    },
  },
  pi = (t) => (e) => typeof e == 'string' && e.startsWith(t),
  nn = pi('--'),
  Jr = pi('var(--'),
  sn = (t) => (Jr(t) ? Qr.test(t.split('/*')[0].trim()) : !1),
  Qr =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Pt = {
    test: (t) => typeof t == 'number',
    parse: Number.parseFloat,
    transform: (t) => t,
  },
  jt = { ...Pt, transform: (t) => q(0, 1, t) },
  _t = { ...Pt, default: 1 },
  Mt = (t) => Math.round(t * 1e5) / 1e5,
  rn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function to(t) {
  return t == null;
}
const eo =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  on = (t, e) => (n) =>
    !!(
      (typeof n == 'string' && eo.test(n) && n.startsWith(t)) ||
      (e && !to(n) && Object.prototype.hasOwnProperty.call(n, e))
    ),
  gi = (t, e, n) => (s) => {
    if (typeof s != 'string') return s;
    const [i, o, r, a] = s.match(rn);
    return {
      [t]: Number.parseFloat(i),
      [e]: Number.parseFloat(o),
      [n]: Number.parseFloat(r),
      alpha: a !== void 0 ? Number.parseFloat(a) : 1,
    };
  },
  no = (t) => q(0, 255, t),
  ce = { ...Pt, transform: (t) => Math.round(no(t)) },
  rt = {
    test: on('rgb', 'red'),
    parse: gi('red', 'green', 'blue'),
    transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) =>
      'rgba(' +
      ce.transform(t) +
      ', ' +
      ce.transform(e) +
      ', ' +
      ce.transform(n) +
      ', ' +
      Mt(jt.transform(s)) +
      ')',
  };
function so(t) {
  let e = '',
    n = '',
    s = '',
    i = '';
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (s += s),
        (i += i)),
    {
      red: Number.parseInt(e, 16),
      green: Number.parseInt(n, 16),
      blue: Number.parseInt(s, 16),
      alpha: i ? Number.parseInt(i, 16) / 255 : 1,
    }
  );
}
const be = { test: on('#'), parse: so, transform: rt.transform },
  Ut = (t) => ({
    test: (e) =>
      typeof e == 'string' && e.endsWith(t) && e.split(' ').length === 1,
    parse: Number.parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  J = Ut('deg'),
  Y = Ut('%'),
  P = Ut('px'),
  io = Ut('vh'),
  ro = Ut('vw'),
  In = {
    ...Y,
    parse: (t) => Y.parse(t) / 100,
    transform: (t) => Y.transform(t * 100),
  },
  ft = {
    test: on('hsl', 'hue'),
    parse: gi('hue', 'saturation', 'lightness'),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
      'hsla(' +
      Math.round(t) +
      ', ' +
      Y.transform(Mt(e)) +
      ', ' +
      Y.transform(Mt(n)) +
      ', ' +
      Mt(jt.transform(s)) +
      ')',
  },
  R = {
    test: (t) => rt.test(t) || be.test(t) || ft.test(t),
    parse: (t) =>
      rt.test(t) ? rt.parse(t) : ft.test(t) ? ft.parse(t) : be.parse(t),
    transform: (t) =>
      typeof t == 'string'
        ? t
        : t.hasOwnProperty('red')
          ? rt.transform(t)
          : ft.transform(t),
    getAnimatableNone: (t) => {
      const e = R.parse(t);
      return (e.alpha = 0), R.transform(e);
    },
  },
  oo =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ao(t) {
  var e, n;
  return (
    isNaN(t) &&
    typeof t == 'string' &&
    (((e = t.match(rn)) == null ? void 0 : e.length) || 0) +
      (((n = t.match(oo)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const yi = 'number',
  vi = 'color',
  lo = 'var',
  co = 'var(',
  Fn = '${}',
  uo =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function It(t) {
  const e = t.toString(),
    n = [],
    s = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = e
    .replace(
      uo,
      (l) => (
        R.test(l)
          ? (s.color.push(o), i.push(vi), n.push(R.parse(l)))
          : l.startsWith(co)
            ? (s.var.push(o), i.push(lo), n.push(l))
            : (s.number.push(o), i.push(yi), n.push(Number.parseFloat(l))),
        ++o,
        Fn
      ),
    )
    .split(Fn);
  return { values: n, split: a, indexes: s, types: i };
}
function xi(t) {
  return It(t).values;
}
function Ti(t) {
  const { split: e, types: n } = It(t),
    s = e.length;
  return (i) => {
    let o = '';
    for (let r = 0; r < s; r++)
      if (((o += e[r]), i[r] !== void 0)) {
        const a = n[r];
        a === yi
          ? (o += Mt(i[r]))
          : a === vi
            ? (o += R.transform(i[r]))
            : (o += i[r]);
      }
    return o;
  };
}
const ho = (t) =>
  typeof t == 'number' ? 0 : R.test(t) ? R.getAnimatableNone(t) : t;
function fo(t) {
  const e = xi(t);
  return Ti(t)(e.map(ho));
}
const tt = {
  test: ao,
  parse: xi,
  createTransformer: Ti,
  getAnimatableNone: fo,
};
function ue(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + (e - t) * 6 * n
      : n < 1 / 2
        ? e
        : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t
  );
}
function mo({ hue: t, saturation: e, lightness: n, alpha: s }) {
  (t /= 360), (e /= 100), (n /= 100);
  let i = 0,
    o = 0,
    r = 0;
  if (e) {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
      l = 2 * n - a;
    (i = ue(l, a, t + 1 / 3)), (o = ue(l, a, t)), (r = ue(l, a, t - 1 / 3));
  } else i = o = r = n;
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s,
  };
}
function Qt(t, e) {
  return (n) => (n > 0 ? e : t);
}
const M = (t, e, n) => t + (e - t) * n,
  he = (t, e, n) => {
    const s = t * t,
      i = n * (e * e - s) + s;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  po = [be, rt, ft],
  go = (t) => po.find((e) => e.test(t));
function Bn(t) {
  const e = go(t);
  if (!e) return !1;
  let n = e.parse(t);
  return e === ft && (n = mo(n)), n;
}
const On = (t, e) => {
    const n = Bn(t),
      s = Bn(e);
    if (!n || !s) return Qt(t, e);
    const i = { ...n };
    return (o) => (
      (i.red = he(n.red, s.red, o)),
      (i.green = he(n.green, s.green, o)),
      (i.blue = he(n.blue, s.blue, o)),
      (i.alpha = M(n.alpha, s.alpha, o)),
      rt.transform(i)
    );
  },
  Ae = new Set(['none', 'hidden']);
function yo(t, e) {
  return Ae.has(t) ? (n) => (n <= 0 ? t : e) : (n) => (n >= 1 ? e : t);
}
function vo(t, e) {
  return (n) => M(t, e, n);
}
function an(t) {
  return typeof t == 'number'
    ? vo
    : typeof t == 'string'
      ? sn(t)
        ? Qt
        : R.test(t)
          ? On
          : wo
      : Array.isArray(t)
        ? wi
        : typeof t == 'object'
          ? R.test(t)
            ? On
            : xo
          : Qt;
}
function wi(t, e) {
  const n = [...t],
    s = n.length,
    i = t.map((o, r) => an(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++) n[r] = i[r](o);
    return n;
  };
}
function xo(t, e) {
  const n = { ...t, ...e },
    s = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (s[i] = an(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s) n[o] = s[o](i);
    return n;
  };
}
function To(t, e) {
  const n = [],
    s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const o = e.types[i],
      r = t.indexes[o][s[o]],
      a = t.values[r] ?? 0;
    (n[i] = a), s[o]++;
  }
  return n;
}
const wo = (t, e) => {
  const n = tt.createTransformer(e),
    s = It(t),
    i = It(e);
  return s.indexes.var.length === i.indexes.var.length &&
    s.indexes.color.length === i.indexes.color.length &&
    s.indexes.number.length >= i.indexes.number.length
    ? (Ae.has(t) && !i.values.length) || (Ae.has(e) && !s.values.length)
      ? yo(t, e)
      : Nt(wi(To(s, i), i.values), n)
    : Qt(t, e);
};
function Pi(t, e, n) {
  return typeof t == 'number' && typeof e == 'number' && typeof n == 'number'
    ? M(t, e, n)
    : an(t)(t, e);
}
const Po = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: (n = !0) => V.update(e, n),
      stop: () => H(e),
      now: () => (k.isProcessing ? k.timestamp : O.now()),
    };
  },
  Si = (t, e, n = 10) => {
    let s = '';
    const i = Math.max(Math.round(e / n), 2);
    for (let o = 0; o < i; o++)
      s += Math.round(t(o / (i - 1)) * 1e4) / 1e4 + ', ';
    return `linear(${s.substring(0, s.length - 2)})`;
  },
  te = 2e4;
function ln(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  while (!s.done && e < te) (e += n), (s = t.next(e));
  return e >= te ? 1 / 0 : e;
}
function So(t, e = 100, n) {
  const s = n({ ...t, keyframes: [0, e] }),
    i = Math.min(ln(s), te);
  return {
    type: 'keyframes',
    ease: (o) => s.next(i * o).value / e,
    duration: X(i),
  };
}
const bo = 5;
function bi(t, e, n) {
  const s = Math.max(e - bo, 0);
  return Qe(n - t(s), e - s);
}
const D = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  fe = 0.001;
function Ao({
  duration: t = D.duration,
  bounce: e = D.bounce,
  velocity: n = D.velocity,
  mass: s = D.mass,
}) {
  let i,
    o,
    r = 1 - e;
  (r = q(D.minDamping, D.maxDamping, r)),
    (t = q(D.minDuration, D.maxDuration, X(t))),
    r < 1
      ? ((i = (c) => {
          const u = c * r,
            h = u * t,
            f = u - n,
            d = Ve(c, r),
            m = Math.exp(-h);
          return fe - (f / d) * m;
        }),
        (o = (c) => {
          const h = c * r * t,
            f = h * n + n,
            d = Math.pow(r, 2) * Math.pow(c, 2) * t,
            m = Math.exp(-h),
            g = Ve(Math.pow(c, 2), r);
          return ((-i(c) + fe > 0 ? -1 : 1) * ((f - d) * m)) / g;
        }))
      : ((i = (c) => {
          const u = Math.exp(-c * t),
            h = (c - n) * t + 1;
          return -fe + u * h;
        }),
        (o = (c) => {
          const u = Math.exp(-c * t),
            h = (n - c) * (t * t);
          return u * h;
        }));
  const a = 5 / t,
    l = Co(i, o, a);
  if (((t = G(t)), isNaN(l)))
    return { stiffness: D.stiffness, damping: D.damping, duration: t };
  {
    const c = Math.pow(l, 2) * s;
    return { stiffness: c, damping: r * 2 * Math.sqrt(s * c), duration: t };
  }
}
const Vo = 12;
function Co(t, e, n) {
  let s = n;
  for (let i = 1; i < Vo; i++) s = s - t(s) / e(s);
  return s;
}
function Ve(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Mo = ['duration', 'bounce'],
  Do = ['stiffness', 'damping', 'mass'];
function Nn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Eo(t) {
  let e = {
    velocity: D.velocity,
    stiffness: D.stiffness,
    damping: D.damping,
    mass: D.mass,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!Nn(t, Do) && Nn(t, Mo))
    if (t.visualDuration) {
      const n = t.visualDuration,
        s = (2 * Math.PI) / (n * 1.2),
        i = s * s,
        o = 2 * q(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = { ...e, mass: D.mass, stiffness: i, damping: o };
    } else {
      const n = Ao(t);
      (e = { ...e, ...n, mass: D.mass }), (e.isResolvedFromDuration = !0);
    }
  return e;
}
function ee(t = D.visualDuration, e = D.bounce) {
  const n =
    typeof t != 'object'
      ? { visualDuration: t, keyframes: [0, 1], bounce: e }
      : t;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0],
    r = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: l,
      damping: c,
      mass: u,
      duration: h,
      velocity: f,
      isResolvedFromDuration: d,
    } = Eo({ ...n, velocity: -X(n.velocity || 0) }),
    m = f || 0,
    g = c / (2 * Math.sqrt(l * u)),
    v = r - o,
    p = X(Math.sqrt(l / u)),
    x = Math.abs(v) < 5;
  s || (s = x ? D.restSpeed.granular : D.restSpeed.default),
    i || (i = x ? D.restDelta.granular : D.restDelta.default);
  let y;
  if (g < 1) {
    const S = Ve(p, g);
    y = (C) => {
      const L = Math.exp(-g * p * C);
      return (
        r - L * (((m + g * p * v) / S) * Math.sin(S * C) + v * Math.cos(S * C))
      );
    };
  } else if (g === 1) y = (S) => r - Math.exp(-p * S) * (v + (m + p * v) * S);
  else {
    const S = p * Math.sqrt(g * g - 1);
    y = (C) => {
      const L = Math.exp(-g * p * C),
        b = Math.min(S * C, 300);
      return (
        r - (L * ((m + g * p * v) * Math.sinh(b) + S * v * Math.cosh(b))) / S
      );
    };
  }
  const A = {
    calculatedDuration: (d && h) || null,
    next: (S) => {
      const C = y(S);
      if (d) a.done = S >= h;
      else {
        let L = S === 0 ? m : 0;
        g < 1 && (L = S === 0 ? G(m) : bi(y, S, C));
        const b = Math.abs(L) <= s,
          B = Math.abs(r - C) <= i;
        a.done = b && B;
      }
      return (a.value = a.done ? r : C), a;
    },
    toString: () => {
      const S = Math.min(ln(A), te),
        C = Si((L) => A.next(S * L).value, S, 30);
      return S + 'ms ' + C;
    },
    toTransition: () => {},
  };
  return A;
}
ee.applyToOptions = (t) => {
  const e = So(t, 100, ee);
  return (
    (t.ease = e.ease), (t.duration = G(e.duration)), (t.type = 'keyframes'), t
  );
};
function Ce({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: s = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: r,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const h = t[0],
    f = { done: !1, value: h },
    d = (b) => (a !== void 0 && b < a) || (l !== void 0 && b > l),
    m = (b) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - b) < Math.abs(l - b)
          ? a
          : l;
  let g = n * e;
  const v = h + g,
    p = r === void 0 ? v : r(v);
  p !== v && (g = p - h);
  const x = (b) => -g * Math.exp(-b / s),
    y = (b) => p + x(b),
    A = (b) => {
      const B = x(b),
        W = y(b);
      (f.done = Math.abs(B) <= c), (f.value = f.done ? p : W);
    };
  let S, C;
  const L = (b) => {
    d(f.value) &&
      ((S = b),
      (C = ee({
        keyframes: [f.value, m(f.value)],
        velocity: bi(y, b, f.value),
        damping: i,
        stiffness: o,
        restDelta: c,
        restSpeed: u,
      })));
  };
  return (
    L(0),
    {
      calculatedDuration: null,
      next: (b) => {
        let B = !1;
        return (
          !C && S === void 0 && ((B = !0), A(b), L(b)),
          S !== void 0 && b >= S ? C.next(b - S) : (!B && A(b), f)
        );
      },
    }
  );
}
function Ro(t, e, n) {
  const s = [],
    i = n || Z.mix || Pi,
    o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || N : e;
      a = Nt(l, a);
    }
    s.push(a);
  }
  return s;
}
function cn(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if ((xt(o === e.length), o === 1)) return () => e[0];
  if (o === 2 && e[0] === e[1]) return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const a = Ro(e, s, i),
    l = a.length,
    c = (u) => {
      if (r && u < t[0]) return e[0];
      let h = 0;
      if (l > 1) for (; h < t.length - 2 && !(u < t[h + 1]); h++);
      const f = Tt(t[h], t[h + 1], u);
      return a[h](f);
    };
  return n ? (u) => c(q(t[0], t[o - 1], u)) : c;
}
function Lo(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = Tt(0, e, s);
    t.push(M(n, 1, i));
  }
}
function Ai(t) {
  const e = [0];
  return Lo(e, t.length - 1), e;
}
function ko(t, e) {
  return t.map((n) => n * e);
}
function jo(t, e) {
  return t.map(() => e || fi).splice(0, t.length - 1);
}
function Dt({
  duration: t = 300,
  keyframes: e,
  times: n,
  ease: s = 'easeInOut',
}) {
  const i = Gr(s) ? s.map(kn) : kn(s),
    o = { done: !1, value: e[0] },
    r = ko(n && n.length === e.length ? n : Ai(e), t),
    a = cn(r, e, { ease: Array.isArray(i) ? i : jo(e, i) });
  return {
    calculatedDuration: t,
    next: (l) => ((o.value = a(l)), (o.done = l >= t), o),
  };
}
const Io = (t) => t !== null;
function un(t, { repeat: e, repeatType: n = 'loop' }, s, i = 1) {
  const o = t.filter(Io),
    a = i < 0 || (e && n !== 'loop' && e % 2 === 1) ? 0 : o.length - 1;
  return !a || s === void 0 ? o[a] : s;
}
const Fo = { decay: Ce, inertia: Ce, tween: Dt, keyframes: Dt, spring: ee };
function Vi(t) {
  typeof t.type == 'string' && (t.type = Fo[t.type]);
}
class hn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const Bo = (t) => t / 100;
class fn extends hn {
  constructor(e) {
    super(),
      (this.state = 'idle'),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var s, i;
        const { motionValue: n } = this.options;
        n && n.updatedAt !== O.now() && this.tick(O.now()),
          (this.isStopped = !0),
          this.state !== 'idle' &&
            (this.teardown(),
            (i = (s = this.options).onStop) == null || i.call(s));
      }),
      (this.options = e),
      this.initAnimation(),
      this.play(),
      e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    Vi(e);
    const {
      type: n = Dt,
      repeat: s = 0,
      repeatDelay: i = 0,
      repeatType: o,
      velocity: r = 0,
    } = e;
    let { keyframes: a } = e;
    const l = n || Dt;
    l !== Dt &&
      typeof a[0] != 'number' &&
      ((this.mixKeyframes = Nt(Bo, Pi(a[0], a[1]))), (a = [0, 100]));
    const c = l({ ...e, keyframes: a });
    o === 'mirror' &&
      (this.mirroredGenerator = l({
        ...e,
        keyframes: [...a].reverse(),
        velocity: -r,
      })),
      c.calculatedDuration === null && (c.calculatedDuration = ln(c));
    const { calculatedDuration: u } = c;
    (this.calculatedDuration = u),
      (this.resolvedDuration = u + i),
      (this.totalDuration = this.resolvedDuration * (s + 1) - i),
      (this.generator = c);
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(e, n = !1) {
    const {
      generator: s,
      totalDuration: i,
      mixKeyframes: o,
      mirroredGenerator: r,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return s.next(0);
    const {
      delay: c = 0,
      keyframes: u,
      repeat: h,
      repeatType: f,
      repeatDelay: d,
      type: m,
      onUpdate: g,
      finalKeyframe: v,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, e))
      : this.speed < 0 &&
        (this.startTime = Math.min(e - i / this.speed, this.startTime)),
      n ? (this.currentTime = e) : this.updateTime(e);
    const p = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
      x = this.playbackSpeed >= 0 ? p < 0 : p > i;
    (this.currentTime = Math.max(p, 0)),
      this.state === 'finished' &&
        this.holdTime === null &&
        (this.currentTime = i);
    let y = this.currentTime,
      A = s;
    if (h) {
      const b = Math.min(this.currentTime, i) / a;
      let B = Math.floor(b),
        W = b % 1;
      !W && b >= 1 && (W = 1),
        W === 1 && B--,
        (B = Math.min(B, h + 1)),
        !!(B % 2) &&
          (f === 'reverse'
            ? ((W = 1 - W), d && (W -= d / a))
            : f === 'mirror' && (A = r)),
        (y = q(0, 1, W) * a);
    }
    const S = x ? { done: !1, value: u[0] } : A.next(y);
    o && (S.value = o(S.value));
    let { done: C } = S;
    !x &&
      l !== null &&
      (C =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const L =
      this.holdTime === null &&
      (this.state === 'finished' || (this.state === 'running' && C));
    return (
      L && m !== Ce && (S.value = un(u, this.options, v, this.speed)),
      g && g(S.value),
      L && this.finish(),
      S
    );
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return X(this.calculatedDuration);
  }
  get time() {
    return X(this.currentTime);
  }
  set time(e) {
    var n;
    (e = G(e)),
      (this.currentTime = e),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = e)
        : this.driver &&
          (this.startTime = this.driver.now() - e / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(O.now());
    const n = this.playbackSpeed !== e;
    (this.playbackSpeed = e), n && (this.time = X(this.currentTime));
  }
  play() {
    var i, o;
    if (this.isStopped) return;
    const { driver: e = Po, startTime: n } = this.options;
    this.driver || (this.driver = e((r) => this.tick(r))),
      (o = (i = this.options).onPlay) == null || o.call(i);
    const s = this.driver.now();
    this.state === 'finished'
      ? (this.updateFinished(), (this.startTime = s))
      : this.holdTime !== null
        ? (this.startTime = s - this.holdTime)
        : this.startTime || (this.startTime = n ?? s),
      this.state === 'finished' &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start();
  }
  pause() {
    (this.state = 'paused'),
      this.updateTime(O.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== 'running' && this.play(),
      (this.state = 'finished'),
      (this.holdTime = null);
  }
  finish() {
    var e, n;
    this.notifyFinished(),
      this.teardown(),
      (this.state = 'finished'),
      (n = (e = this.options).onComplete) == null || n.call(e);
  }
  cancel() {
    var e, n;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (e = this.options).onCancel) == null || n.call(e);
  }
  teardown() {
    (this.state = 'idle'),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(e) {
    return (this.startTime = 0), this.tick(e, !0);
  }
  attachTimeline(e) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = 'keyframes'),
        (this.options.ease = 'linear'),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      e.observe(this)
    );
  }
}
function Oo(t) {
  for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
}
const ot = (t) => (t * 180) / Math.PI,
  Me = (t) => {
    const e = ot(Math.atan2(t[1], t[0]));
    return De(e);
  },
  No = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: Me,
    rotateZ: Me,
    skewX: (t) => ot(Math.atan(t[1])),
    skewY: (t) => ot(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
  },
  De = (t) => ((t = t % 360), t < 0 && (t += 360), t),
  Wn = Me,
  Un = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  $n = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  Wo = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Un,
    scaleY: $n,
    scale: (t) => (Un(t) + $n(t)) / 2,
    rotateX: (t) => De(ot(Math.atan2(t[6], t[5]))),
    rotateY: (t) => De(ot(Math.atan2(-t[2], t[0]))),
    rotateZ: Wn,
    rotate: Wn,
    skewX: (t) => ot(Math.atan(t[4])),
    skewY: (t) => ot(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
  };
function Ee(t) {
  return t.includes('scale') ? 1 : 0;
}
function Re(t, e) {
  if (!t || t === 'none') return Ee(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, i;
  if (n) (s = Wo), (i = n);
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (s = No), (i = a);
  }
  if (!i) return Ee(e);
  const o = s[e],
    r = i[1].split(',').map($o);
  return typeof o == 'function' ? o(r) : r[o];
}
const Uo = (t, e) => {
  const { transform: n = 'none' } = getComputedStyle(t);
  return Re(n, e);
};
function $o(t) {
  return Number.parseFloat(t.trim());
}
const St = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  bt = new Set(St),
  Kn = (t) => t === Pt || t === P,
  Ko = new Set(['x', 'y', 'z']),
  _o = St.filter((t) => !Ko.has(t));
function zo(t) {
  const e = [];
  return (
    _o.forEach((n) => {
      const s = t.getValue(n);
      s !== void 0 &&
        (e.push([n, s.get()]), s.set(n.startsWith('scale') ? 1 : 0));
    }),
    e
  );
}
const at = {
  width: ({ x: t }, { paddingLeft: e = '0', paddingRight: n = '0' }) =>
    t.max - t.min - Number.parseFloat(e) - Number.parseFloat(n),
  height: ({ y: t }, { paddingTop: e = '0', paddingBottom: n = '0' }) =>
    t.max - t.min - Number.parseFloat(e) - Number.parseFloat(n),
  top: (t, { top: e }) => Number.parseFloat(e),
  left: (t, { left: e }) => Number.parseFloat(e),
  bottom: ({ y: t }, { top: e }) => Number.parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => Number.parseFloat(e) + (t.max - t.min),
  x: (t, { transform: e }) => Re(e, 'x'),
  y: (t, { transform: e }) => Re(e, 'y'),
};
at.translateX = at.x;
at.translateY = at.y;
const lt = new Set();
let Le = !1,
  ke = !1,
  je = !1;
function Ci() {
  if (ke) {
    const t = Array.from(lt).filter((s) => s.needsMeasurement),
      e = new Set(t.map((s) => s.element)),
      n = new Map();
    e.forEach((s) => {
      const i = zo(s);
      i.length && (n.set(s, i), s.render());
    }),
      t.forEach((s) => s.measureInitialState()),
      e.forEach((s) => {
        s.render();
        const i = n.get(s);
        i &&
          i.forEach(([o, r]) => {
            var a;
            (a = s.getValue(o)) == null || a.set(r);
          });
      }),
      t.forEach((s) => s.measureEndState()),
      t.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      });
  }
  (ke = !1), (Le = !1), lt.forEach((t) => t.complete(je)), lt.clear();
}
function Mi() {
  lt.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (ke = !0);
  });
}
function Ho() {
  (je = !0), Mi(), Ci(), (je = !1);
}
class dn {
  constructor(e, n, s, i, o, r = !1) {
    (this.state = 'pending'),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = n),
      (this.name = s),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = r);
  }
  scheduleResolve() {
    (this.state = 'scheduled'),
      this.isAsync
        ? (lt.add(this), Le || ((Le = !0), V.read(Mi), V.resolveKeyframes(Ci)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: n,
      element: s,
      motionValue: i,
    } = this;
    if (e[0] === null) {
      const o = i == null ? void 0 : i.get(),
        r = e[e.length - 1];
      if (o !== void 0) e[0] = o;
      else if (s && n) {
        const a = s.readValue(n, r);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = r), i && o === void 0 && i.set(e[0]);
    }
    Oo(e);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(e = !1) {
    (this.state = 'complete'),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
      lt.delete(this);
  }
  cancel() {
    this.state === 'scheduled' && (lt.delete(this), (this.state = 'pending'));
  }
  resume() {
    this.state === 'pending' && this.scheduleResolve();
  }
}
const Go = (t) => t.startsWith('--');
function Xo(t, e, n) {
  Go(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
}
const Di = Ze(() => window.ScrollTimeline !== void 0),
  Yo = {};
function qo(t, e) {
  const n = Ze(t);
  return () => Yo[e] ?? n();
}
const Ei = qo(() => {
    try {
      document
        .createElement('div')
        .animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
    } catch {
      return !1;
    }
    return !0;
  }, 'linearEasing'),
  Ct = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
  _n = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: Ct([0, 0.65, 0.55, 1]),
    circOut: Ct([0.55, 0, 1, 0.45]),
    backIn: Ct([0.31, 0.01, 0.66, -0.59]),
    backOut: Ct([0.33, 1.53, 0.69, 0.99]),
  };
function Ri(t, e) {
  if (t)
    return typeof t == 'function'
      ? Ei()
        ? Si(t, e)
        : 'ease-out'
      : di(t)
        ? Ct(t)
        : Array.isArray(t)
          ? t.map((n) => Ri(n, e) || _n.easeOut)
          : _n[t];
}
function Zo(
  t,
  e,
  n,
  {
    delay: s = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: r = 'loop',
    ease: a = 'easeOut',
    times: l,
  } = {},
  c = void 0,
) {
  const u = { [e]: n };
  l && (u.offset = l);
  const h = Ri(a, i);
  Array.isArray(h) && (u.easing = h);
  const f = {
    delay: s,
    duration: i,
    easing: Array.isArray(h) ? 'linear' : h,
    fill: 'both',
    iterations: o + 1,
    direction: r === 'reverse' ? 'alternate' : 'normal',
  };
  return c && (f.pseudoElement = c), t.animate(u, f);
}
function Li(t) {
  return typeof t == 'function' && 'applyToOptions' in t;
}
function Jo({ type: t, ...e }) {
  return Li(t) && Ei()
    ? t.applyToOptions(e)
    : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = 'easeOut'), e);
}
class Qo extends hn {
  constructor(e) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !e))
      return;
    const {
      element: n,
      name: s,
      keyframes: i,
      pseudoElement: o,
      allowFlatten: r = !1,
      finalKeyframe: a,
      onComplete: l,
    } = e;
    (this.isPseudoElement = !!o),
      (this.allowFlatten = r),
      (this.options = e),
      xt(typeof e.type != 'string');
    const c = Jo(e);
    (this.animation = Zo(n, s, i, c, o)),
      c.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !o)) {
          const u = un(i, this.options, a, this.speed);
          this.updateMotionValue ? this.updateMotionValue(u) : Xo(n, s, u),
            this.animation.cancel();
        }
        l == null || l(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === 'finished' && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var e, n;
    (n = (e = this.animation).finish) == null || n.call(e);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: e } = this;
    e === 'idle' ||
      e === 'finished' ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var e, n;
    this.isPseudoElement ||
      (n = (e = this.animation).commitStyles) == null ||
      n.call(e);
  }
  get duration() {
    var n, s;
    const e =
      ((s =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : s.call(n).duration) || 0;
    return X(Number(e));
  }
  get time() {
    return X(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    (this.finishedTime = null), (this.animation.currentTime = G(e));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e);
  }
  get state() {
    return this.finishedTime !== null ? 'finished' : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  attachTimeline({ timeline: e, observe: n }) {
    var s;
    return (
      this.allowFlatten &&
        ((s = this.animation.effect) == null ||
          s.updateTiming({ easing: 'linear' })),
      (this.animation.onfinish = null),
      e && Di() ? ((this.animation.timeline = e), N) : n(this)
    );
  }
}
const ki = { anticipate: ci, backInOut: li, circInOut: hi };
function ta(t) {
  return t in ki;
}
function ea(t) {
  typeof t.ease == 'string' && ta(t.ease) && (t.ease = ki[t.ease]);
}
const zn = 10;
class na extends Qo {
  constructor(e) {
    ea(e),
      Vi(e),
      super(e),
      e.startTime && (this.startTime = e.startTime),
      (this.options = e);
  }
  updateMotionValue(e) {
    const {
      motionValue: n,
      onUpdate: s,
      onComplete: i,
      element: o,
      ...r
    } = this.options;
    if (!n) return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new fn({ ...r, autoplay: !1 }),
      l = G(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - zn).value, a.sample(l).value, zn), a.stop();
  }
}
const Hn = (t, e) =>
  e === 'zIndex'
    ? !1
    : !!(
        typeof t == 'number' ||
        Array.isArray(t) ||
        (typeof t == 'string' &&
          (tt.test(t) || t === '0') &&
          !t.startsWith('url('))
      );
function sa(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let n = 0; n < t.length; n++) if (t[n] !== e) return !0;
}
function ia(t, e, n, s) {
  const i = t[0];
  if (i === null) return !1;
  if (e === 'display' || e === 'visibility') return !0;
  const o = t[t.length - 1],
    r = Hn(i, e),
    a = Hn(o, e);
  return !r || !a ? !1 : sa(t) || ((n === 'spring' || Li(n)) && s);
}
function Ie(t) {
  (t.duration = 0), t.type;
}
const ra = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  oa = Ze(() => Object.hasOwnProperty.call(Element.prototype, 'animate'));
function aa(t) {
  var u;
  const {
    motionValue: e,
    name: n,
    repeatDelay: s,
    repeatType: i,
    damping: o,
    type: r,
  } = t;
  if (
    !(
      ((u = e == null ? void 0 : e.owner) == null
        ? void 0
        : u.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: l, transformTemplate: c } = e.owner.getProps();
  return (
    oa() &&
    n &&
    ra.has(n) &&
    (n !== 'transform' || !c) &&
    !l &&
    !s &&
    i !== 'mirror' &&
    o !== 0 &&
    r !== 'inertia'
  );
}
const la = 40;
class ca extends hn {
  constructor({
    autoplay: e = !0,
    delay: n = 0,
    type: s = 'keyframes',
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: r = 'loop',
    keyframes: a,
    name: l,
    motionValue: c,
    element: u,
    ...h
  }) {
    var m;
    super(),
      (this.stop = () => {
        var g, v;
        this._animation &&
          (this._animation.stop(),
          (g = this.stopTimeline) == null || g.call(this)),
          (v = this.keyframeResolver) == null || v.cancel();
      }),
      (this.createdAt = O.now());
    const f = {
        autoplay: e,
        delay: n,
        type: s,
        repeat: i,
        repeatDelay: o,
        repeatType: r,
        name: l,
        motionValue: c,
        element: u,
        ...h,
      },
      d = (u == null ? void 0 : u.KeyframeResolver) || dn;
    (this.keyframeResolver = new d(
      a,
      (g, v, p) => this.onKeyframesResolved(g, v, f, !p),
      l,
      c,
      u,
    )),
      (m = this.keyframeResolver) == null || m.scheduleResolve();
  }
  onKeyframesResolved(e, n, s, i) {
    this.keyframeResolver = void 0;
    const {
      name: o,
      type: r,
      velocity: a,
      delay: l,
      isHandoff: c,
      onUpdate: u,
    } = s;
    (this.resolvedAt = O.now()),
      ia(e, o, r, a) ||
        ((Z.instantAnimations || !l) && (u == null || u(un(e, s, n))),
        (e[0] = e[e.length - 1]),
        Ie(s),
        (s.repeat = 0));
    const f = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > la
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...s,
        keyframes: e,
      },
      d =
        !c && aa(f)
          ? new na({ ...f, element: f.motionValue.owner.current })
          : new fn(f);
    d.finished.then(() => this.notifyFinished()).catch(N),
      this.pendingTimeline &&
        ((this.stopTimeline = d.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = d);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {});
  }
  get animation() {
    var e;
    return (
      this._animation ||
        ((e = this.keyframeResolver) == null || e.resume(), Ho()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(e))
        : (this.pendingTimeline = e),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var e;
    this._animation && this.animation.cancel(),
      (e = this.keyframeResolver) == null || e.cancel();
  }
}
const ua = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function ha(t) {
  const e = ua.exec(t);
  if (!e) return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
function ji(t, e, n = 1) {
  const [s, i] = ha(t);
  if (!s) return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return ei(r) ? Number.parseFloat(r) : r;
  }
  return sn(i) ? ji(i, e, n + 1) : i;
}
function mn(t, e) {
  return (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
}
const Ii = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    ...St,
  ]),
  fa = { test: (t) => t === 'auto', parse: (t) => t },
  Fi = (t) => (e) => e.test(t),
  Bi = [Pt, P, Y, J, ro, io, fa],
  Gn = (t) => Bi.find(Fi(t));
function da(t) {
  return typeof t == 'number'
    ? t === 0
    : t !== null
      ? t === 'none' || t === '0' || si(t)
      : !0;
}
const ma = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function pa(t) {
  const [e, n] = t.slice(0, -1).split('(');
  if (e === 'drop-shadow') return t;
  const [s] = n.match(rn) || [];
  if (!s) return t;
  const i = n.replace(s, '');
  let o = ma.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + '(' + o + i + ')';
}
const ga = /\b([a-z-]*)\(.*?\)/gu,
  Fe = {
    ...tt,
    getAnimatableNone: (t) => {
      const e = t.match(ga);
      return e ? e.map(pa).join(' ') : t;
    },
  },
  Xn = { ...Pt, transform: Math.round },
  ya = {
    rotate: J,
    rotateX: J,
    rotateY: J,
    rotateZ: J,
    scale: _t,
    scaleX: _t,
    scaleY: _t,
    scaleZ: _t,
    skew: J,
    skewX: J,
    skewY: J,
    distance: P,
    translateX: P,
    translateY: P,
    translateZ: P,
    x: P,
    y: P,
    z: P,
    perspective: P,
    transformPerspective: P,
    opacity: jt,
    originX: In,
    originY: In,
    originZ: P,
  },
  pn = {
    borderWidth: P,
    borderTopWidth: P,
    borderRightWidth: P,
    borderBottomWidth: P,
    borderLeftWidth: P,
    borderRadius: P,
    radius: P,
    borderTopLeftRadius: P,
    borderTopRightRadius: P,
    borderBottomRightRadius: P,
    borderBottomLeftRadius: P,
    width: P,
    maxWidth: P,
    height: P,
    maxHeight: P,
    top: P,
    right: P,
    bottom: P,
    left: P,
    padding: P,
    paddingTop: P,
    paddingRight: P,
    paddingBottom: P,
    paddingLeft: P,
    margin: P,
    marginTop: P,
    marginRight: P,
    marginBottom: P,
    marginLeft: P,
    backgroundPositionX: P,
    backgroundPositionY: P,
    ...ya,
    zIndex: Xn,
    fillOpacity: jt,
    strokeOpacity: jt,
    numOctaves: Xn,
  },
  va = {
    ...pn,
    color: R,
    backgroundColor: R,
    outlineColor: R,
    fill: R,
    stroke: R,
    borderColor: R,
    borderTopColor: R,
    borderRightColor: R,
    borderBottomColor: R,
    borderLeftColor: R,
    filter: Fe,
    WebkitFilter: Fe,
  },
  Oi = (t) => va[t];
function Ni(t, e) {
  let n = Oi(t);
  return (
    n !== Fe && (n = tt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
  );
}
const xa = new Set(['auto', 'none', '0']);
function Ta(t, e, n) {
  let s = 0,
    i;
  while (s < t.length && !i) {
    const o = t[s];
    typeof o == 'string' && !xa.has(o) && It(o).values.length && (i = t[s]),
      s++;
  }
  if (i && n) for (const o of e) t[o] = Ni(n, i);
}
class wa extends dn {
  constructor(e, n, s, i, o) {
    super(e, n, s, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let c = e[l];
      if (typeof c == 'string' && ((c = c.trim()), sn(c))) {
        const u = ji(c, n.current);
        u !== void 0 && (e[l] = u),
          l === e.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !Ii.has(s) || e.length !== 2)) return;
    const [i, o] = e,
      r = Gn(i),
      a = Gn(o);
    if (r !== a)
      if (Kn(r) && Kn(a))
        for (let l = 0; l < e.length; l++) {
          const c = e[l];
          typeof c == 'string' && (e[l] = Number.parseFloat(c));
        }
      else at[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this,
      s = [];
    for (let i = 0; i < e.length; i++) (e[i] === null || da(e[i])) && s.push(i);
    s.length && Ta(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current) return;
    s === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = at[s](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: e, name: n, unresolvedKeyframes: s } = this;
    if (!e || !e.current) return;
    const i = e.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1,
      r = s[o];
    (s[o] = at[n](e.measureViewportBox(), window.getComputedStyle(e.current))),
      r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, c]) => {
          e.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
function Wi(t, e, n) {
  if (t instanceof EventTarget) return [t];
  if (typeof t == 'string') {
    const i = document.querySelectorAll(t);
    return i ? Array.from(i) : [];
  }
  return Array.from(t);
}
const Ui = (t, e) => (e && typeof t == 'number' ? e.transform(t) : t);
function $i(t) {
  return ni(t) && 'offsetHeight' in t;
}
const Yn = 30,
  Pa = (t) => !isNaN(Number.parseFloat(t)),
  Et = { current: void 0 };
class Sa {
  constructor(e, n = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s) => {
        var o;
        const i = O.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev &&
            ((o = this.events.change) == null || o.notify(this.current),
            this.dependents))
        )
          for (const r of this.dependents) r.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(e),
      (this.owner = n.owner);
  }
  setCurrent(e) {
    (this.current = e),
      (this.updatedAt = O.now()),
      this.canTrackVelocity === null &&
        e !== void 0 &&
        (this.canTrackVelocity = Pa(this.current));
  }
  setPrevFrameValue(e = this.current) {
    (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(e) {
    return this.on('change', e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new Je());
    const s = this.events[e].add(n);
    return e === 'change'
      ? () => {
          s(),
            V.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    (this.passiveEffect = e), (this.stopPassiveEffect = n);
  }
  set(e) {
    this.passiveEffect
      ? this.passiveEffect(e, this.updateAndNotify)
      : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, s) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = e),
      (this.prevUpdatedAt = this.updatedAt - s);
  }
  jump(e, n = !0) {
    this.updateAndNotify(e),
      (this.prev = e),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var e;
    (e = this.events.change) == null || e.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  get() {
    return Et.current && Et.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const e = O.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      e - this.updatedAt > Yn
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Yn);
    return Qe(
      Number.parseFloat(this.current) - Number.parseFloat(this.prevFrameValue),
      n,
    );
  }
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var e, n;
    (e = this.dependents) == null || e.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function z(t, e) {
  return new Sa(t, e);
}
const { schedule: gn, cancel: tf } = mi(queueMicrotask, !1),
  _ = { x: !1, y: !1 };
function Ki() {
  return _.x || _.y;
}
function ba(t) {
  return t === 'x' || t === 'y'
    ? _[t]
      ? null
      : ((_[t] = !0),
        () => {
          _[t] = !1;
        })
    : _.x || _.y
      ? null
      : ((_.x = _.y = !0),
        () => {
          _.x = _.y = !1;
        });
}
function _i(t, e) {
  const n = Wi(t),
    s = new AbortController(),
    i = { passive: !0, ...e, signal: s.signal };
  return [n, i, () => s.abort()];
}
function qn(t) {
  return !(t.pointerType === 'touch' || Ki());
}
function Aa(t, e, n = {}) {
  const [s, i, o] = _i(t, n),
    r = (a) => {
      if (!qn(a)) return;
      const { target: l } = a,
        c = e(l, a);
      if (typeof c != 'function' || !l) return;
      const u = (h) => {
        qn(h) && (c(h), l.removeEventListener('pointerleave', u));
      };
      l.addEventListener('pointerleave', u, i);
    };
  return (
    s.forEach((a) => {
      a.addEventListener('pointerenter', r, i);
    }),
    o
  );
}
const zi = (t, e) => (e ? (t === e ? !0 : zi(t, e.parentElement)) : !1),
  yn = (t) =>
    t.pointerType === 'mouse'
      ? typeof t.button != 'number' || t.button <= 0
      : t.isPrimary !== !1,
  Va = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']);
function Ca(t) {
  return Va.has(t.tagName) || t.tabIndex !== -1;
}
const Xt = new WeakSet();
function Zn(t) {
  return (e) => {
    e.key === 'Enter' && t(e);
  };
}
function de(t, e) {
  t.dispatchEvent(
    new PointerEvent('pointer' + e, { isPrimary: !0, bubbles: !0 }),
  );
}
const Ma = (t, e) => {
  const n = t.currentTarget;
  if (!n) return;
  const s = Zn(() => {
    if (Xt.has(n)) return;
    de(n, 'down');
    const i = Zn(() => {
        de(n, 'up');
      }),
      o = () => de(n, 'cancel');
    n.addEventListener('keyup', i, e), n.addEventListener('blur', o, e);
  });
  n.addEventListener('keydown', s, e),
    n.addEventListener('blur', () => n.removeEventListener('keydown', s), e);
};
function Jn(t) {
  return yn(t) && !Ki();
}
function Da(t, e, n = {}) {
  const [s, i, o] = _i(t, n),
    r = (a) => {
      const l = a.currentTarget;
      if (!Jn(a)) return;
      Xt.add(l);
      const c = e(l, a),
        u = (d, m) => {
          window.removeEventListener('pointerup', h),
            window.removeEventListener('pointercancel', f),
            Xt.has(l) && Xt.delete(l),
            Jn(d) && typeof c == 'function' && c(d, { success: m });
        },
        h = (d) => {
          u(
            d,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              zi(l, d.target),
          );
        },
        f = (d) => {
          u(d, !1);
        };
      window.addEventListener('pointerup', h, i),
        window.addEventListener('pointercancel', f, i);
    };
  return (
    s.forEach((a) => {
      (n.useGlobalTarget ? window : a).addEventListener('pointerdown', r, i),
        $i(a) &&
          (a.addEventListener('focus', (c) => Ma(c, i)),
          !Ca(a) && !a.hasAttribute('tabindex') && (a.tabIndex = 0));
    }),
    o
  );
}
function vn(t) {
  return ni(t) && 'ownerSVGElement' in t;
}
const Yt = new WeakMap();
let Q;
const Hi = (t, e, n) => (s, i) =>
    i && i[0]
      ? i[0][t + 'Size']
      : vn(s) && 'getBBox' in s
        ? s.getBBox()[e]
        : s[n],
  Ea = Hi('inline', 'width', 'offsetWidth'),
  Ra = Hi('block', 'height', 'offsetHeight');
function La({ target: t, borderBoxSize: e }) {
  var n;
  (n = Yt.get(t)) == null ||
    n.forEach((s) => {
      s(t, {
        get width() {
          return Ea(t, e);
        },
        get height() {
          return Ra(t, e);
        },
      });
    });
}
function ka(t) {
  t.forEach(La);
}
function ja() {
  typeof ResizeObserver > 'u' || (Q = new ResizeObserver(ka));
}
function Ia(t, e) {
  Q || ja();
  const n = Wi(t);
  return (
    n.forEach((s) => {
      let i = Yt.get(s);
      i || ((i = new Set()), Yt.set(s, i)), i.add(e), Q == null || Q.observe(s);
    }),
    () => {
      n.forEach((s) => {
        const i = Yt.get(s);
        i == null || i.delete(e),
          (i != null && i.size) || Q == null || Q.unobserve(s);
      });
    }
  );
}
const qt = new Set();
let dt;
function Fa() {
  (dt = () => {
    const t = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    qt.forEach((e) => e(t));
  }),
    window.addEventListener('resize', dt);
}
function Ba(t) {
  return (
    qt.add(t),
    dt || Fa(),
    () => {
      qt.delete(t),
        !qt.size &&
          typeof dt == 'function' &&
          (window.removeEventListener('resize', dt), (dt = void 0));
    }
  );
}
function Oa(t, e) {
  return typeof t == 'function' ? Ba(t) : Ia(t, e);
}
function Gi(t, e) {
  let n;
  const s = () => {
    const { currentTime: i } = e,
      r = (i === null ? 0 : i.value) / 100;
    n !== r && t(r), (n = r);
  };
  return V.preUpdate(s, !0), () => H(s);
}
function Na(t) {
  return vn(t) && t.tagName === 'svg';
}
function Wa(...t) {
  const e = !Array.isArray(t[0]),
    n = e ? 0 : -1,
    s = t[0 + n],
    i = t[1 + n],
    o = t[2 + n],
    r = t[3 + n],
    a = cn(i, o, r);
  return e ? a(s) : a;
}
const I = (t) => !!(t && t.getVelocity),
  Ua = [...Bi, R, tt],
  $a = (t) => Ua.find(Fi(t)),
  xn = w.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: 'never',
  });
function Ka(t = !0) {
  const e = w.useContext(Xe);
  if (e === null) return [!0, null];
  const { isPresent: n, onExitComplete: s, register: i } = e,
    o = w.useId();
  w.useEffect(() => {
    if (t) return i(o);
  }, [t]);
  const r = w.useCallback(() => t && s && s(o), [o, s, t]);
  return !n && s ? [!1, r] : [!0];
}
const Xi = w.createContext({ strict: !1 }),
  Qn = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  wt = {};
for (const t in Qn) wt[t] = { isEnabled: (e) => Qn[t].some((n) => !!e[n]) };
function _a(t) {
  for (const e in t) wt[e] = { ...wt[e], ...t[e] };
}
const za = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport',
]);
function ne(t) {
  return (
    t.startsWith('while') ||
    (t.startsWith('drag') && t !== 'draggable') ||
    t.startsWith('layout') ||
    t.startsWith('onTap') ||
    t.startsWith('onPan') ||
    t.startsWith('onLayout') ||
    za.has(t)
  );
}
let Yi = (t) => !ne(t);
function Ha(t) {
  typeof t == 'function' && (Yi = (e) => (e.startsWith('on') ? !ne(e) : t(e)));
}
try {
  Ha(require('@emotion/is-prop-valid').default);
} catch {}
function Ga(t, e, n) {
  const s = {};
  for (const i in t)
    (i === 'values' && typeof t.values == 'object') ||
      ((Yi(i) ||
        (n === !0 && ne(i)) ||
        (!e && !ne(i)) ||
        (t.draggable && i.startsWith('onDrag'))) &&
        (s[i] = t[i]));
  return s;
}
const re = w.createContext({});
function oe(t) {
  return t !== null && typeof t == 'object' && typeof t.start == 'function';
}
function Ft(t) {
  return typeof t == 'string' || Array.isArray(t);
}
const Tn = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit',
  ],
  wn = ['initial', ...Tn];
function ae(t) {
  return oe(t.animate) || wn.some((e) => Ft(t[e]));
}
function qi(t) {
  return !!(ae(t) || t.variants);
}
function Xa(t, e) {
  if (ae(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || Ft(n) ? n : void 0,
      animate: Ft(s) ? s : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Ya(t) {
  const { initial: e, animate: n } = Xa(t, w.useContext(re));
  return w.useMemo(() => ({ initial: e, animate: n }), [ts(e), ts(n)]);
}
function ts(t) {
  return Array.isArray(t) ? t.join(' ') : t;
}
const Bt = {};
function qa(t) {
  for (const e in t) (Bt[e] = t[e]), nn(e) && (Bt[e].isCSSVariable = !0);
}
function Zi(t, { layout: e, layoutId: n }) {
  return (
    bt.has(t) ||
    t.startsWith('origin') ||
    ((e || n !== void 0) && (!!Bt[t] || t === 'opacity'))
  );
}
const Za = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  Ja = St.length;
function Qa(t, e, n) {
  let s = '',
    i = !0;
  for (let o = 0; o < Ja; o++) {
    const r = St[o],
      a = t[r];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == 'number'
        ? (l = a === (r.startsWith('scale') ? 1 : 0))
        : (l = Number.parseFloat(a) === 0),
      !l || n)
    ) {
      const c = Ui(a, pn[r]);
      if (!l) {
        i = !1;
        const u = Za[r] || r;
        s += `${u}(${c}) `;
      }
      n && (e[r] = c);
    }
  }
  return (s = s.trim()), n ? (s = n(e, i ? '' : s)) : i && (s = 'none'), s;
}
function Pn(t, e, n) {
  const { style: s, vars: i, transformOrigin: o } = t;
  let r = !1,
    a = !1;
  for (const l in e) {
    const c = e[l];
    if (bt.has(l)) {
      r = !0;
      continue;
    } else if (nn(l)) {
      i[l] = c;
      continue;
    } else {
      const u = Ui(c, pn[l]);
      l.startsWith('origin') ? ((a = !0), (o[l] = u)) : (s[l] = u);
    }
  }
  if (
    (e.transform ||
      (r || n
        ? (s.transform = Qa(e, t.transform, n))
        : s.transform && (s.transform = 'none')),
    a)
  ) {
    const { originX: l = '50%', originY: c = '50%', originZ: u = 0 } = o;
    s.transformOrigin = `${l} ${c} ${u}`;
  }
}
const Sn = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Ji(t, e, n) {
  for (const s in e) !I(e[s]) && !Zi(s, n) && (t[s] = e[s]);
}
function tl({ transformTemplate: t }, e) {
  return w.useMemo(() => {
    const n = Sn();
    return Pn(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function el(t, e) {
  const n = t.style || {},
    s = {};
  return Ji(s, n, t), Object.assign(s, tl(t, e)), s;
}
function nl(t, e) {
  const n = {},
    s = el(t, e);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((n.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = 'none'),
      (s.touchAction =
        t.drag === !0 ? 'none' : `pan-${t.drag === 'x' ? 'y' : 'x'}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (n.tabIndex = 0),
    (n.style = s),
    n
  );
}
const sl = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  il = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function rl(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? sl : il;
  t[o.offset] = P.transform(-s);
  const r = P.transform(e),
    a = P.transform(n);
  t[o.array] = `${r} ${a}`;
}
function Qi(
  t,
  {
    attrX: e,
    attrY: n,
    attrScale: s,
    pathLength: i,
    pathSpacing: o = 1,
    pathOffset: r = 0,
    ...a
  },
  l,
  c,
  u,
) {
  if ((Pn(t, a, c), l)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  const { attrs: h, style: f } = t;
  h.transform && ((f.transform = h.transform), delete h.transform),
    (f.transform || h.transformOrigin) &&
      ((f.transformOrigin = h.transformOrigin ?? '50% 50%'),
      delete h.transformOrigin),
    f.transform &&
      ((f.transformBox = (u == null ? void 0 : u.transformBox) ?? 'fill-box'),
      delete h.transformBox),
    e !== void 0 && (h.x = e),
    n !== void 0 && (h.y = n),
    s !== void 0 && (h.scale = s),
    i !== void 0 && rl(h, i, o, r, !1);
}
const tr = () => ({ ...Sn(), attrs: {} }),
  er = (t) => typeof t == 'string' && t.toLowerCase() === 'svg';
function ol(t, e, n, s) {
  const i = w.useMemo(() => {
    const o = tr();
    return (
      Qi(o, e, er(s), t.transformTemplate, t.style),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [e]);
  if (t.style) {
    const o = {};
    Ji(o, t.style, t), (i.style = { ...o, ...i.style });
  }
  return i;
}
const al = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function bn(t) {
  return typeof t != 'string' || t.includes('-')
    ? !1
    : !!(al.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function ll(t, e, n, { latestValues: s }, i, o = !1) {
  const a = (bn(t) ? ol : nl)(e, s, i, t),
    l = Ga(e, typeof t == 'string', o),
    c = t !== w.Fragment ? { ...l, ...a, ref: n } : {},
    { children: u } = e,
    h = w.useMemo(() => (I(u) ? u.get() : u), [u]);
  return w.createElement(t, { ...c, children: h });
}
function es(t) {
  const e = [{}, {}];
  return (
    t == null ||
      t.values.forEach((n, s) => {
        (e[0][s] = n.get()), (e[1][s] = n.getVelocity());
      }),
    e
  );
}
function An(t, e, n, s) {
  if (typeof e == 'function') {
    const [i, o] = es(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if (
    (typeof e == 'string' && (e = t.variants && t.variants[e]),
    typeof e == 'function')
  ) {
    const [i, o] = es(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
function Zt(t) {
  return I(t) ? t.get() : t;
}
function cl({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, s, i) {
  return { latestValues: ul(n, s, i, t), renderState: e() };
}
function ul(t, e, n, s) {
  const i = {},
    o = s(t, {});
  for (const f in o) i[f] = Zt(o[f]);
  let { initial: r, animate: a } = t;
  const l = ae(t),
    c = qi(t);
  e &&
    c &&
    !l &&
    t.inherit !== !1 &&
    (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || r === !1;
  const h = u ? a : r;
  if (h && typeof h != 'boolean' && !oe(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let d = 0; d < f.length; d++) {
      const m = An(t, f[d]);
      if (m) {
        const { transitionEnd: g, transition: v, ...p } = m;
        for (const x in p) {
          let y = p[x];
          if (Array.isArray(y)) {
            const A = u ? y.length - 1 : 0;
            y = y[A];
          }
          y !== null && (i[x] = y);
        }
        for (const x in g) i[x] = g[x];
      }
    }
  }
  return i;
}
const nr = (t) => (e, n) => {
  const s = w.useContext(re),
    i = w.useContext(Xe),
    o = () => cl(t, e, s, i);
  return n ? o() : ie(o);
};
function Vn(t, e, n) {
  var o;
  const { style: s } = t,
    i = {};
  for (const r in s)
    (I(s[r]) ||
      (e.style && I(e.style[r])) ||
      Zi(r, t) ||
      ((o = n == null ? void 0 : n.getValue(r)) == null
        ? void 0
        : o.liveStyle) !== void 0) &&
      (i[r] = s[r]);
  return i;
}
const hl = nr({ scrapeMotionValuesFromProps: Vn, createRenderState: Sn });
function sr(t, e, n) {
  const s = Vn(t, e, n);
  for (const i in t)
    if (I(t[i]) || I(e[i])) {
      const o =
        St.indexOf(i) !== -1
          ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      s[o] = t[i];
    }
  return s;
}
const fl = nr({ scrapeMotionValuesFromProps: sr, createRenderState: tr }),
  dl = Symbol.for('motionComponentSymbol');
function mt(t) {
  return (
    t &&
    typeof t == 'object' &&
    Object.prototype.hasOwnProperty.call(t, 'current')
  );
}
function ml(t, e, n) {
  return w.useCallback(
    (s) => {
      s && t.onMount && t.onMount(s),
        e && (s ? e.mount(s) : e.unmount()),
        n && (typeof n == 'function' ? n(s) : mt(n) && (n.current = s));
    },
    [e],
  );
}
const Cn = (t) => t.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  pl = 'framerAppearId',
  ir = 'data-' + Cn(pl),
  rr = w.createContext({});
function gl(t, e, n, s, i) {
  var g, v;
  const { visualElement: o } = w.useContext(re),
    r = w.useContext(Xi),
    a = w.useContext(Xe),
    l = w.useContext(xn).reducedMotion,
    c = w.useRef(null);
  (s = s || r.renderer),
    !c.current &&
      s &&
      (c.current = s(t, {
        visualState: e,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const u = c.current,
    h = w.useContext(rr);
  u &&
    !u.projection &&
    i &&
    (u.type === 'html' || u.type === 'svg') &&
    yl(c.current, n, i, h);
  const f = w.useRef(!1);
  w.useInsertionEffect(() => {
    u && f.current && u.update(n, a);
  });
  const d = n[ir],
    m = w.useRef(
      !!d &&
        !((g = window.MotionHandoffIsComplete) != null && g.call(window, d)) &&
        ((v = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : v.call(window, d)),
    );
  return (
    Ge(() => {
      u &&
        ((f.current = !0),
        (window.MotionIsMounted = !0),
        u.updateFeatures(),
        u.scheduleRenderMicrotask(),
        m.current && u.animationState && u.animationState.animateChanges());
    }),
    w.useEffect(() => {
      u &&
        (!m.current && u.animationState && u.animationState.animateChanges(),
        m.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) == null ||
              p.call(window, d);
          }),
          (m.current = !1)),
        (u.enteringChildren = void 0));
    }),
    u
  );
}
function yl(t, e, n, s) {
  const {
    layoutId: i,
    layout: o,
    drag: r,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
    layoutCrossfade: u,
  } = e;
  (t.projection = new n(
    t.latestValues,
    e['data-framer-portal-id'] ? void 0 : or(t.parent),
  )),
    t.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!r || (a && mt(a)),
      visualElement: t,
      animationType: typeof o == 'string' ? o : 'both',
      initialPromotionConfig: s,
      crossfade: u,
      layoutScroll: l,
      layoutRoot: c,
    });
}
function or(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : or(t.parent);
}
function me(t, { forwardMotionProps: e = !1 } = {}, n, s) {
  n && _a(n);
  const i = bn(t) ? fl : hl;
  function o(a, l) {
    let c;
    const u = { ...w.useContext(xn), ...a, layoutId: vl(a) },
      { isStatic: h } = u,
      f = Ya(a),
      d = i(a, h);
    if (!h && He) {
      xl();
      const m = Tl(u);
      (c = m.MeasureLayout),
        (f.visualElement = gl(t, d, u, s, m.ProjectionNode));
    }
    return T.jsxs(re.Provider, {
      value: f,
      children: [
        c && f.visualElement
          ? T.jsx(c, { visualElement: f.visualElement, ...u })
          : null,
        ll(t, a, ml(d, f.visualElement, l), d, h, e),
      ],
    });
  }
  o.displayName = `motion.${typeof t == 'string' ? t : `create(${t.displayName ?? t.name ?? ''})`}`;
  const r = w.forwardRef(o);
  return (r[dl] = t), r;
}
function vl({ layoutId: t }) {
  const e = w.useContext(ti).id;
  return e && t !== void 0 ? e + '-' + t : t;
}
function xl(t, e) {
  w.useContext(Xi).strict;
}
function Tl(t) {
  const { drag: e, layout: n } = wt;
  if (!e && !n) return {};
  const s = { ...e, ...n };
  return {
    MeasureLayout:
      (e != null && e.isEnabled(t)) || (n != null && n.isEnabled(t))
        ? s.MeasureLayout
        : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
function wl(t, e) {
  if (typeof Proxy > 'u') return me;
  const n = new Map(),
    s = (o, r) => me(o, r, t, e),
    i = (o, r) => s(o, r);
  return new Proxy(i, {
    get: (o, r) =>
      r === 'create'
        ? s
        : (n.has(r) || n.set(r, me(r, void 0, t, e)), n.get(r)),
  });
}
function ar({ top: t, left: e, right: n, bottom: s }) {
  return { x: { min: e, max: n }, y: { min: t, max: s } };
}
function Pl({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Sl(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    s = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: s.y, right: s.x };
}
function pe(t) {
  return t === void 0 || t === 1;
}
function Be({ scale: t, scaleX: e, scaleY: n }) {
  return !pe(t) || !pe(e) || !pe(n);
}
function it(t) {
  return (
    Be(t) ||
    lr(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function lr(t) {
  return ns(t.x) || ns(t.y);
}
function ns(t) {
  return t && t !== '0%';
}
function se(t, e, n) {
  const s = t - n,
    i = e * s;
  return n + i;
}
function ss(t, e, n, s, i) {
  return i !== void 0 && (t = se(t, i, s)), se(t, n, s) + e;
}
function Oe(t, e = 0, n = 1, s, i) {
  (t.min = ss(t.min, e, n, s, i)), (t.max = ss(t.max, e, n, s, i));
}
function cr(t, { x: e, y: n }) {
  Oe(t.x, e.translate, e.scale, e.originPoint),
    Oe(t.y, n.translate, n.scale, n.originPoint);
}
const is = 0.999999999999,
  rs = 1.0000000000001;
function bl(t, e, n, s = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (r = o.projectionDelta);
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === 'contents') ||
      (s &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        gt(t, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      r && ((e.x *= r.x.scale), (e.y *= r.y.scale), cr(t, r)),
      s && it(o.latestValues) && gt(t, o.latestValues));
  }
  e.x < rs && e.x > is && (e.x = 1), e.y < rs && e.y > is && (e.y = 1);
}
function pt(t, e) {
  (t.min = t.min + e), (t.max = t.max + e);
}
function os(t, e, n, s, i = 0.5) {
  const o = M(t.min, t.max, i);
  Oe(t, e, n, o, s);
}
function gt(t, e) {
  os(t.x, e.x, e.scaleX, e.scale, e.originX),
    os(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function ur(t, e) {
  return ar(Sl(t.getBoundingClientRect(), e));
}
function Al(t, e, n) {
  const s = ur(t, n),
    { scroll: i } = e;
  return i && (pt(s.x, i.offset.x), pt(s.y, i.offset.y)), s;
}
const as = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  yt = () => ({ x: as(), y: as() }),
  ls = () => ({ min: 0, max: 0 }),
  E = () => ({ x: ls(), y: ls() }),
  Ne = { current: null },
  hr = { current: !1 };
function Vl() {
  if (((hr.current = !0), !!He))
    if (window.matchMedia) {
      const t = window.matchMedia('(prefers-reduced-motion)'),
        e = () => (Ne.current = t.matches);
      t.addEventListener('change', e), e();
    } else Ne.current = !1;
}
const Cl = new WeakMap();
function Ml(t, e, n) {
  for (const s in e) {
    const i = e[s],
      o = n[s];
    if (I(i)) t.addValue(s, i);
    else if (I(o)) t.addValue(s, z(i, { owner: t }));
    else if (o !== i)
      if (t.hasValue(s)) {
        const r = t.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = t.getStaticValue(s);
        t.addValue(s, z(r !== void 0 ? r : i, { owner: t }));
      }
  }
  for (const s in n) e[s] === void 0 && t.removeValue(s);
  return e;
}
const cs = [
  'AnimationStart',
  'AnimationComplete',
  'Update',
  'BeforeLayoutMeasure',
  'LayoutMeasure',
  'LayoutAnimationStart',
  'LayoutAnimationComplete',
];
class Dl {
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: s,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: r,
    },
    a = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = dn),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const f = O.now();
        this.renderScheduledAt < f &&
          ((this.renderScheduledAt = f), V.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: c } = r;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = s),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = ae(n)),
      (this.isVariantNode = qi(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current));
    const { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const f in h) {
      const d = h[f];
      l[f] !== void 0 && I(d) && d.set(l[f]);
    }
  }
  mount(e) {
    var n;
    (this.current = e),
      Cl.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, i) => this.bindToMotionValue(i, s)),
      hr.current || Vl(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
            ? !0
            : Ne.current),
      (n = this.parent) == null || n.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var e;
    this.projection && this.projection.unmount(),
      H(this.notifyUpdate),
      H(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (e = this.parent) == null || e.removeChild(this);
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const s = this.features[n];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e),
      this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const s = bt.has(e);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on('change', (r) => {
      (this.latestValues[e] = r),
        this.props.onUpdate && V.preRender(this.notifyUpdate),
        s && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, e, n)),
      this.valueSubscriptions.set(e, () => {
        i(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = 'animation';
    for (e in wt) {
      const n = wt[e];
      if (!n) continue;
      const { isEnabled: s, Feature: i } = n;
      if (
        (!this.features[e] &&
          i &&
          s(this.props) &&
          (this.features[e] = new i(this)),
        this.features[e])
      ) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : E();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let s = 0; s < cs.length; s++) {
      const i = cs[s];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = 'on' + i,
        r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    (this.prevMotionValues = Ml(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(e),
        () => n.variantChildren.delete(e)
      );
  }
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s &&
      (s && this.removeValue(e),
      this.bindToMotionValue(e, n),
      this.values.set(e, n),
      (this.latestValues[e] = n.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let s = this.values.get(e);
    return (
      s === void 0 &&
        n !== void 0 &&
        ((s = z(n === null ? void 0 : n, { owner: this })),
        this.addValue(e, s)),
      s
    );
  }
  readValue(e, n) {
    let s =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (this.getBaseTargetFromProps(this.props, e) ??
          this.readValueFromInstance(this.current, e, this.options));
    return (
      s != null &&
        (typeof s == 'string' && (ei(s) || si(s))
          ? (s = Number.parseFloat(s))
          : !$a(s) && tt.test(n) && (s = Ni(e, n)),
        this.setBaseTarget(e, I(s) ? s.get() : s)),
      I(s) ? s.get() : s
    );
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    var o;
    const { initial: n } = this.props;
    let s;
    if (typeof n == 'string' || typeof n == 'object') {
      const r = An(
        this.props,
        n,
        (o = this.presenceContext) == null ? void 0 : o.custom,
      );
      r && (s = r[e]);
    }
    if (n && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !I(i)
      ? i
      : this.initialValues[e] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new Je()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    gn.render(this.render);
  }
}
class fr extends Dl {
  constructor() {
    super(...arguments), (this.KeyframeResolver = wa);
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    I(e) &&
      (this.childSubscription = e.on('change', (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function dr(t, { style: e, vars: n }, s, i) {
  const o = t.style;
  let r;
  for (r in e) o[r] = e[r];
  i == null || i.applyProjectionStyles(o, s);
  for (r in n) o.setProperty(r, n[r]);
}
function El(t) {
  return window.getComputedStyle(t);
}
class Rl extends fr {
  constructor() {
    super(...arguments), (this.type = 'html'), (this.renderInstance = dr);
  }
  readValueFromInstance(e, n) {
    var s;
    if (bt.has(n))
      return (s = this.projection) != null && s.isProjecting ? Ee(n) : Uo(e, n);
    {
      const i = El(e),
        o = (nn(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof o == 'string' ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return ur(e, n);
  }
  build(e, n, s) {
    Pn(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Vn(e, n, s);
  }
}
const mr = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
]);
function Ll(t, e, n, s) {
  dr(t, e, void 0, s);
  for (const i in e.attrs) t.setAttribute(mr.has(i) ? i : Cn(i), e.attrs[i]);
}
class kl extends fr {
  constructor() {
    super(...arguments),
      (this.type = 'svg'),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = E);
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (bt.has(n)) {
      const s = Oi(n);
      return (s && s.default) || 0;
    }
    return (n = mr.has(n) ? n : Cn(n)), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return sr(e, n, s);
  }
  build(e, n, s) {
    Qi(e, n, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(e, n, s, i) {
    Ll(e, n, s, i);
  }
  mount(e) {
    (this.isSVGTag = er(e.tagName)), super.mount(e);
  }
}
const jl = (t, e) =>
  bn(t) ? new kl(e) : new Rl(e, { allowProjection: t !== w.Fragment });
function vt(t, e, n) {
  const s = t.getProps();
  return An(s, e, n !== void 0 ? n : s.custom, t);
}
const We = (t) => Array.isArray(t);
function Il(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, z(n));
}
function Fl(t) {
  return We(t) ? t[t.length - 1] || 0 : t;
}
function Bl(t, e) {
  const n = vt(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = Fl(o[r]);
    Il(t, r, a);
  }
}
function Ol(t) {
  return !!(I(t) && t.add);
}
function Ue(t, e) {
  const n = t.getValue('willChange');
  if (Ol(n)) return n.add(e);
  if (!n && Z.WillChange) {
    const s = new Z.WillChange('auto');
    t.addValue('willChange', s), s.add(e);
  }
}
function pr(t) {
  return t.props[ir];
}
const Nl = (t) => t !== null;
function Wl(t, { repeat: e, repeatType: n = 'loop' }, s) {
  const i = t.filter(Nl),
    o = e && n !== 'loop' && e % 2 === 1 ? 0 : i.length - 1;
  return !o || s === void 0 ? i[o] : s;
}
const Ul = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  $l = (t) => ({
    type: 'spring',
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Kl = { type: 'keyframes', duration: 0.8 },
  _l = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  zl = (t, { keyframes: e }) =>
    e.length > 2
      ? Kl
      : bt.has(t)
        ? t.startsWith('scale')
          ? $l(e[1])
          : Ul
        : _l;
function Hl({
  when: t,
  delay: e,
  delayChildren: n,
  staggerChildren: s,
  staggerDirection: i,
  repeat: o,
  repeatType: r,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
const Mn =
  (t, e, n, s = {}, i, o) =>
  (r) => {
    const a = mn(s, t) || {},
      l = a.delay || s.delay || 0;
    let { elapsed: c = 0 } = s;
    c = c - G(l);
    const u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: 'easeOut',
      velocity: e.getVelocity(),
      ...a,
      delay: -c,
      onUpdate: (f) => {
        e.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        r(), a.onComplete && a.onComplete();
      },
      name: t,
      motionValue: e,
      element: o ? void 0 : i,
    };
    Hl(a) || Object.assign(u, zl(t, u)),
      u.duration && (u.duration = G(u.duration)),
      u.repeatDelay && (u.repeatDelay = G(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from);
    let h = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        (Ie(u), u.delay === 0 && (h = !0)),
      (Z.instantAnimations || Z.skipAnimations) &&
        ((h = !0), Ie(u), (u.delay = 0)),
      (u.allowFlatten = !a.type && !a.ease),
      h && !o && e.get() !== void 0)
    ) {
      const f = Wl(u.keyframes, a);
      if (f !== void 0) {
        V.update(() => {
          u.onUpdate(f), u.onComplete();
        });
        return;
      }
    }
    return a.isSync ? new fn(u) : new ca(u);
  };
function Gl({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return (e[n] = !1), s;
}
function gr(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let { transition: o = t.getDefaultTransition(), transitionEnd: r, ...a } = e;
  s && (o = s);
  const l = [],
    c = i && t.animationState && t.animationState.getState()[i];
  for (const u in a) {
    const h = t.getValue(u, t.latestValues[u] ?? null),
      f = a[u];
    if (f === void 0 || (c && Gl(c, u))) continue;
    const d = { delay: n, ...mn(o || {}, u) },
      m = h.get();
    if (
      m !== void 0 &&
      !h.isAnimating &&
      !Array.isArray(f) &&
      f === m &&
      !d.velocity
    )
      continue;
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const p = pr(t);
      if (p) {
        const x = window.MotionHandoffAnimation(p, u, V);
        x !== null && ((d.startTime = x), (g = !0));
      }
    }
    Ue(t, u),
      h.start(
        Mn(u, h, f, t.shouldReduceMotion && Ii.has(u) ? { type: !1 } : d, t, g),
      );
    const v = h.animation;
    v && l.push(v);
  }
  return (
    r &&
      Promise.all(l).then(() => {
        V.update(() => {
          r && Bl(t, r);
        });
      }),
    l
  );
}
function yr(t, e, n, s = 0, i = 1) {
  const o = Array.from(t)
      .sort((c, u) => c.sortNodePosition(u))
      .indexOf(e),
    r = t.size,
    a = (r - 1) * s;
  return typeof n == 'function' ? n(o, r) : i === 1 ? o * s : a - o * s;
}
function $e(t, e, n = {}) {
  var l;
  const s = vt(
    t,
    e,
    n.type === 'exit'
      ? (l = t.presenceContext) == null
        ? void 0
        : l.custom
      : void 0,
  );
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(gr(t, s, n)) : () => Promise.resolve(),
    r =
      t.variantChildren && t.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: h,
              staggerDirection: f,
            } = i;
            return Xl(t, e, c, u, h, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [c, u] = a === 'beforeChildren' ? [o, r] : [r, o];
    return c().then(() => u());
  } else return Promise.all([o(), r(n.delay)]);
}
function Xl(t, e, n = 0, s = 0, i = 0, o = 1, r) {
  const a = [];
  for (const l of t.variantChildren)
    l.notify('AnimationStart', e),
      a.push(
        $e(l, e, {
          ...r,
          delay:
            n +
            (typeof s == 'function' ? 0 : s) +
            yr(t.variantChildren, l, s, i, o),
        }).then(() => l.notify('AnimationComplete', e)),
      );
  return Promise.all(a);
}
function Yl(t, e, n = {}) {
  t.notify('AnimationStart', e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => $e(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == 'string') s = $e(t, e, n);
  else {
    const i = typeof e == 'function' ? vt(t, e, n.custom) : e;
    s = Promise.all(gr(t, i, n));
  }
  return s.then(() => {
    t.notify('AnimationComplete', e);
  });
}
function vr(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let s = 0; s < n; s++) if (e[s] !== t[s]) return !1;
  return !0;
}
const ql = wn.length;
function xr(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? xr(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < ql; n++) {
    const s = wn[n],
      i = t.props[s];
    (Ft(i) || i === !1) && (e[s] = i);
  }
  return e;
}
const Zl = [...Tn].reverse(),
  Jl = Tn.length;
function Ql(t) {
  return (e) =>
    Promise.all(e.map(({ animation: n, options: s }) => Yl(t, n, s)));
}
function tc(t) {
  let e = Ql(t),
    n = us(),
    s = !0;
  const i = (l) => (c, u) => {
    var f;
    const h = vt(
      t,
      u,
      l === 'exit'
        ? (f = t.presenceContext) == null
          ? void 0
          : f.custom
        : void 0,
    );
    if (h) {
      const { transition: d, transitionEnd: m, ...g } = h;
      c = { ...c, ...g, ...m };
    }
    return c;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: c } = t,
      u = xr(t.parent) || {},
      h = [],
      f = new Set();
    let d = {},
      m = 1 / 0;
    for (let v = 0; v < Jl; v++) {
      const p = Zl[v],
        x = n[p],
        y = c[p] !== void 0 ? c[p] : u[p],
        A = Ft(y),
        S = p === l ? x.isActive : null;
      S === !1 && (m = v);
      let C = y === u[p] && y !== c[p] && A;
      if (
        (C && s && t.manuallyAnimateOnMount && (C = !1),
        (x.protectedKeys = { ...d }),
        (!x.isActive && S === null) ||
          (!y && !x.prevProp) ||
          oe(y) ||
          typeof y == 'boolean')
      )
        continue;
      const L = ec(x.prevProp, y);
      let b = L || (p === l && x.isActive && !C && A) || (v > m && A),
        B = !1;
      const W = Array.isArray(y) ? y : [y];
      let ut = W.reduce(i(p), {});
      S === !1 && (ut = {});
      const { prevResolvedValues: Dn = {} } = x,
        Or = { ...Dn, ...ut },
        En = (j) => {
          (b = !0),
            f.has(j) && ((B = !0), f.delete(j)),
            (x.needsAnimating[j] = !0);
          const U = t.getValue(j);
          U && (U.liveStyle = !1);
        };
      for (const j in Or) {
        const U = ut[j],
          nt = Dn[j];
        if (d.hasOwnProperty(j)) continue;
        let ht = !1;
        We(U) && We(nt) ? (ht = !vr(U, nt)) : (ht = U !== nt),
          ht
            ? U != null
              ? En(j)
              : f.add(j)
            : U !== void 0 && f.has(j)
              ? En(j)
              : (x.protectedKeys[j] = !0);
      }
      (x.prevProp = y),
        (x.prevResolvedValues = ut),
        x.isActive && (d = { ...d, ...ut }),
        s && t.blockInitialAnimation && (b = !1);
      const Rn = C && L;
      b &&
        (!Rn || B) &&
        h.push(
          ...W.map((j) => {
            const U = { type: p };
            if (
              typeof j == 'string' &&
              s &&
              !Rn &&
              t.manuallyAnimateOnMount &&
              t.parent
            ) {
              const { parent: nt } = t,
                ht = vt(nt, j);
              if (nt.enteringChildren && ht) {
                const { delayChildren: Nr } = ht.transition || {};
                U.delay = yr(nt.enteringChildren, t, Nr);
              }
            }
            return { animation: j, options: U };
          }),
        );
    }
    if (f.size) {
      const v = {};
      if (typeof c.initial != 'boolean') {
        const p = vt(t, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        p && p.transition && (v.transition = p.transition);
      }
      f.forEach((p) => {
        const x = t.getBaseTarget(p),
          y = t.getValue(p);
        y && (y.liveStyle = !0), (v[p] = x ?? null);
      }),
        h.push({ animation: v });
    }
    let g = !!h.length;
    return (
      s &&
        (c.initial === !1 || c.initial === c.animate) &&
        !t.manuallyAnimateOnMount &&
        (g = !1),
      (s = !1),
      g ? e(h) : Promise.resolve()
    );
  }
  function a(l, c) {
    var h;
    if (n[l].isActive === c) return Promise.resolve();
    (h = t.variantChildren) == null ||
      h.forEach((f) => {
        var d;
        return (d = f.animationState) == null ? void 0 : d.setActive(l, c);
      }),
      (n[l].isActive = c);
    const u = r(l);
    for (const f in n) n[f].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = us()), (s = !0);
    },
  };
}
function ec(t, e) {
  return typeof e == 'string' ? e !== t : Array.isArray(e) ? !vr(e, t) : !1;
}
function st(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function us() {
  return {
    animate: st(!0),
    whileInView: st(),
    whileHover: st(),
    whileTap: st(),
    whileDrag: st(),
    whileFocus: st(),
    exit: st(),
  };
}
class et {
  constructor(e) {
    (this.isMounted = !1), (this.node = e);
  }
  update() {}
}
class nc extends et {
  constructor(e) {
    super(e), e.animationState || (e.animationState = tc(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    oe(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(),
      (e = this.unmountControls) == null || e.call(this);
  }
}
let sc = 0;
class ic extends et {
  constructor() {
    super(...arguments), (this.id = sc++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s) return;
    const i = this.node.animationState.setActive('exit', !e);
    n &&
      !e &&
      i.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {}
}
const rc = { animation: { Feature: nc }, exit: { Feature: ic } };
function Ot(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
function $t(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const oc = (t) => (e) => yn(e) && t(e, $t(e));
function Rt(t, e, n, s) {
  return Ot(t, e, oc(n), s);
}
const Tr = 1e-4,
  ac = 1 - Tr,
  lc = 1 + Tr,
  wr = 0.01,
  cc = 0 - wr,
  uc = 0 + wr;
function F(t) {
  return t.max - t.min;
}
function hc(t, e, n) {
  return Math.abs(t - e) <= n;
}
function hs(t, e, n, s = 0.5) {
  (t.origin = s),
    (t.originPoint = M(e.min, e.max, t.origin)),
    (t.scale = F(n) / F(e)),
    (t.translate = M(n.min, n.max, t.origin) - t.originPoint),
    ((t.scale >= ac && t.scale <= lc) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= cc && t.translate <= uc) || isNaN(t.translate)) &&
      (t.translate = 0);
}
function Lt(t, e, n, s) {
  hs(t.x, e.x, n.x, s ? s.originX : void 0),
    hs(t.y, e.y, n.y, s ? s.originY : void 0);
}
function fs(t, e, n) {
  (t.min = n.min + e.min), (t.max = t.min + F(e));
}
function fc(t, e, n) {
  fs(t.x, e.x, n.x), fs(t.y, e.y, n.y);
}
function ds(t, e, n) {
  (t.min = e.min - n.min), (t.max = t.min + F(e));
}
function kt(t, e, n) {
  ds(t.x, e.x, n.x), ds(t.y, e.y, n.y);
}
function K(t) {
  return [t('x'), t('y')];
}
const Pr = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  ms = (t, e) => Math.abs(t - e);
function dc(t, e) {
  const n = ms(t.x, e.x),
    s = ms(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class Sr {
  constructor(
    e,
    n,
    {
      transformPagePoint: s,
      contextWindow: i = window,
      dragSnapToOrigin: o = !1,
      distanceThreshold: r = 3,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = ye(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          m = dc(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!d && !m) return;
        const { point: g } = f,
          { timestamp: v } = k;
        this.history.push({ ...g, timestamp: v });
        const { onStart: p, onMove: x } = this.handlers;
        d ||
          (p && p(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          x && x(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = ge(d, this.transformPagePoint)),
          V.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: m, onSessionEnd: g, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const p = ye(
          f.type === 'pointercancel'
            ? this.lastMoveEventInfo
            : ge(d, this.transformPagePoint),
          this.history,
        );
        this.startEvent && m && m(f, p), g && g(f, p);
      }),
      !yn(e))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = s),
      (this.distanceThreshold = r),
      (this.contextWindow = i || window);
    const a = $t(e),
      l = ge(a, this.transformPagePoint),
      { point: c } = l,
      { timestamp: u } = k;
    this.history = [{ ...c, timestamp: u }];
    const { onSessionStart: h } = n;
    h && h(e, ye(l, this.history)),
      (this.removeListeners = Nt(
        Rt(this.contextWindow, 'pointermove', this.handlePointerMove),
        Rt(this.contextWindow, 'pointerup', this.handlePointerUp),
        Rt(this.contextWindow, 'pointercancel', this.handlePointerUp),
      ));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), H(this.updatePoint);
  }
}
function ge(t, e) {
  return e ? { point: e(t.point) } : t;
}
function ps(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function ye({ point: t }, e) {
  return {
    point: t,
    delta: ps(t, br(e)),
    offset: ps(t, mc(e)),
    velocity: pc(e, 0.1),
  };
}
function mc(t) {
  return t[0];
}
function br(t) {
  return t[t.length - 1];
}
function pc(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    s = null;
  const i = br(t);
  while (n >= 0 && ((s = t[n]), !(i.timestamp - s.timestamp > G(e)))) n--;
  if (!s) return { x: 0, y: 0 };
  const o = X(i.timestamp - s.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const r = { x: (i.x - s.x) / o, y: (i.y - s.y) / o };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function gc(t, { min: e, max: n }, s) {
  return (
    e !== void 0 && t < e
      ? (t = s ? M(e, t, s.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = s ? M(n, t, s.max) : Math.min(t, n)),
    t
  );
}
function gs(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function yc(t, { top: e, left: n, bottom: s, right: i }) {
  return { x: gs(t.x, n, i), y: gs(t.y, e, s) };
}
function ys(t, e) {
  let n = e.min - t.min,
    s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function vc(t, e) {
  return { x: ys(t.x, e.x), y: ys(t.y, e.y) };
}
function xc(t, e) {
  let n = 0.5;
  const s = F(t),
    i = F(e);
  return (
    i > s
      ? (n = Tt(e.min, e.max - s, t.min))
      : s > i && (n = Tt(t.min, t.max - i, e.min)),
    q(0, 1, n)
  );
}
function Tc(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const Ke = 0.35;
function wc(t = Ke) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = Ke),
    { x: vs(t, 'left', 'right'), y: vs(t, 'top', 'bottom') }
  );
}
function vs(t, e, n) {
  return { min: xs(t, e), max: xs(t, n) };
}
function xs(t, e) {
  return typeof t == 'number' ? t : t[e] || 0;
}
const Pc = new WeakMap();
class Sc {
  constructor(e) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = E()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = e);
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: s } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const o = (h) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor($t(h).point);
      },
      r = (h, f) => {
        const { drag: d, dragPropagation: m, onDragStart: g } = this.getProps();
        if (
          d &&
          !m &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = ba(d)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = h),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          K((p) => {
            let x = this.getAxisMotionValue(p).get() || 0;
            if (Y.test(x)) {
              const { projection: y } = this.visualElement;
              if (y && y.layout) {
                const A = y.layout.layoutBox[p];
                A && (x = F(A) * (Number.parseFloat(x) / 100));
              }
            }
            this.originPoint[p] = x;
          }),
          g && V.postRender(() => g(h, f)),
          Ue(this.visualElement, 'transform');
        const { animationState: v } = this.visualElement;
        v && v.setActive('whileDrag', !0);
      },
      a = (h, f) => {
        (this.latestPointerEvent = h), (this.latestPanInfo = f);
        const {
          dragPropagation: d,
          dragDirectionLock: m,
          onDirectionLock: g,
          onDrag: v,
        } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: p } = f;
        if (m && this.currentDirection === null) {
          (this.currentDirection = bc(p)),
            this.currentDirection !== null && g && g(this.currentDirection);
          return;
        }
        this.updateAxis('x', f.point, p),
          this.updateAxis('y', f.point, p),
          this.visualElement.render(),
          v && v(h, f);
      },
      l = (h, f) => {
        (this.latestPointerEvent = h),
          (this.latestPanInfo = f),
          this.stop(h, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      c = () =>
        K((h) => {
          var f;
          return (
            this.getAnimationState(h) === 'paused' &&
            ((f = this.getAxisMotionValue(h).animation) == null
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Sr(
      e,
      {
        onSessionStart: o,
        onStart: r,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: c,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        distanceThreshold: s,
        contextWindow: Pr(this.visualElement),
      },
    );
  }
  stop(e, n) {
    const s = e || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      o = this.isDragging;
    if ((this.cancel(), !o || !i || !s)) return;
    const { velocity: r } = i;
    this.startAnimation(r);
    const { onDragEnd: a } = this.getProps();
    a && V.postRender(() => a(s, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive('whileDrag', !1);
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !zt(e, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    this.constraints &&
      this.constraints[e] &&
      (r = gc(r, this.constraints[e], this.elastic[e])),
      o.set(r);
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: e, dragElastic: n } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (o = this.visualElement.projection) == null
            ? void 0
            : o.layout,
      i = this.constraints;
    e && mt(e)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : e && s
        ? (this.constraints = yc(s.layoutBox, e))
        : (this.constraints = !1),
      (this.elastic = wc(n)),
      i !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        K((r) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(r) &&
            (this.constraints[r] = Tc(s.layoutBox[r], this.constraints[r]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !mt(e)) return !1;
    const s = e.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = Al(s, i.root, this.visualElement.getTransformPagePoint());
    let r = vc(i.layout.layoutBox, o);
    if (n) {
      const a = n(Pl(r));
      (this.hasMutatedConstraints = !!a), a && (r = ar(a));
    }
    return r;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: s,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: r,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = K((u) => {
        if (!zt(u, n, this.currentDirection)) return;
        let h = (l && l[u]) || {};
        r && (h = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          d = i ? 40 : 1e7,
          m = {
            type: 'inertia',
            velocity: s ? e[u] : 0,
            bounceStiffness: f,
            bounceDamping: d,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...h,
          };
        return this.startAxisValueAnimation(u, m);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return (
      Ue(this.visualElement, e), s.start(Mn(e, s, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    K((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    K((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) == null
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) == null
      ? void 0
      : n.state;
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`,
      s = this.visualElement.getProps(),
      i = s[n];
    return (
      i ||
      this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    K((n) => {
      const { drag: s } = this.getProps();
      if (!zt(n, s, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - M(r, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!mt(n) || !s || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    K((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[r] = xc({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, '') : 'none'),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      K((r) => {
        if (!zt(r, e, null)) return;
        const a = this.getAxisMotionValue(r),
          { min: l, max: c } = this.constraints[r];
        a.set(M(l, c, i[r]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Pc.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = Rt(e, 'pointerdown', (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      s = () => {
        const { dragConstraints: l } = this.getProps();
        mt(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener('measure', s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      V.read(s);
    const r = Ot(window, 'resize', () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        'didUpdate',
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (K((u) => {
              const h = this.getAxisMotionValue(u);
              h &&
                ((this.originPoint[u] += l[u].translate),
                h.set(h.get() + l[u].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: s = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: r = Ke,
        dragMomentum: a = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a,
    };
  }
}
function zt(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function bc(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? (n = 'y') : Math.abs(t.x) > e && (n = 'x'), n;
}
class Ac extends et {
  constructor(e) {
    super(e),
      (this.removeGroupControls = N),
      (this.removeListeners = N),
      (this.controls = new Sc(e));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || N);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ts = (t) => (e, n) => {
  t && V.postRender(() => t(e, n));
};
class Vc extends et {
  constructor() {
    super(...arguments), (this.removePointerDownListener = N);
  }
  onPointerDown(e) {
    this.session = new Sr(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Pr(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: s,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Ts(e),
      onStart: Ts(n),
      onMove: s,
      onEnd: (o, r) => {
        delete this.session, i && V.postRender(() => i(o, r));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Rt(this.node.current, 'pointerdown', (e) =>
      this.onPointerDown(e),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Jt = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function ws(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const At = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == 'string')
        if (P.test(t)) t = Number.parseFloat(t);
        else return t;
      const n = ws(t, e.target.x),
        s = ws(t, e.target.y);
      return `${n}% ${s}%`;
    },
  },
  Cc = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const s = t,
        i = tt.parse(t);
      if (i.length > 5) return s;
      const o = tt.createTransformer(t),
        r = typeof i[0] != 'number' ? 1 : 0,
        a = n.x.scale * e.x,
        l = n.y.scale * e.y;
      (i[0 + r] /= a), (i[1 + r] /= l);
      const c = M(a, l, 0.5);
      return (
        typeof i[2 + r] == 'number' && (i[2 + r] /= c),
        typeof i[3 + r] == 'number' && (i[3 + r] /= c),
        o(i)
      );
    },
  };
let ve = !1;
class Mc extends w.Component {
  componentDidMount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: s,
        layoutId: i,
      } = this.props,
      { projection: o } = e;
    qa(Dc),
      o &&
        (n.group && n.group.add(o),
        s && s.register && i && s.register(o),
        ve && o.root.didUpdate(),
        o.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Jt.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(e) {
    const {
        layoutDependency: n,
        visualElement: s,
        drag: i,
        isPresent: o,
      } = this.props,
      { projection: r } = s;
    return (
      r &&
        ((r.isPresent = o),
        (ve = !0),
        i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o
          ? r.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== o &&
          (o
            ? r.promote()
            : r.relegate() ||
              V.postRender(() => {
                const a = r.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e &&
      (e.root.didUpdate(),
      gn.postRender(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: s,
      } = this.props,
      { projection: i } = e;
    (ve = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Ar(t) {
  const [e, n] = Ka(),
    s = w.useContext(ti);
  return T.jsx(Mc, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: w.useContext(rr),
    isPresent: e,
    safeToRemove: n,
  });
}
const Dc = {
  borderRadius: {
    ...At,
    applyTo: [
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
    ],
  },
  borderTopLeftRadius: At,
  borderTopRightRadius: At,
  borderBottomLeftRadius: At,
  borderBottomRightRadius: At,
  boxShadow: Cc,
};
function Ec(t, e, n) {
  const s = I(t) ? t : z(t);
  return s.start(Mn('', s, e, n)), s.animation;
}
const Rc = (t, e) => t.depth - e.depth;
class Lc {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(e) {
    Ye(this.children, e), (this.isDirty = !0);
  }
  remove(e) {
    qe(this.children, e), (this.isDirty = !0);
  }
  forEach(e) {
    this.isDirty && this.children.sort(Rc),
      (this.isDirty = !1),
      this.children.forEach(e);
  }
}
function kc(t, e) {
  const n = O.now(),
    s = ({ timestamp: i }) => {
      const o = i - n;
      o >= e && (H(s), t(o - e));
    };
  return V.setup(s, !0), () => H(s);
}
const Vr = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  jc = Vr.length,
  Ps = (t) => (typeof t == 'string' ? Number.parseFloat(t) : t),
  Ss = (t) => typeof t == 'number' || P.test(t);
function Ic(t, e, n, s, i, o) {
  i
    ? ((t.opacity = M(0, n.opacity ?? 1, Fc(s))),
      (t.opacityExit = M(e.opacity ?? 1, 0, Bc(s))))
    : o && (t.opacity = M(e.opacity ?? 1, n.opacity ?? 1, s));
  for (let r = 0; r < jc; r++) {
    const a = `border${Vr[r]}Radius`;
    let l = bs(e, a),
      c = bs(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || Ss(l) === Ss(c)
        ? ((t[a] = Math.max(M(Ps(l), Ps(c), s), 0)),
          (Y.test(c) || Y.test(l)) && (t[a] += '%'))
        : (t[a] = c);
  }
  (e.rotate || n.rotate) && (t.rotate = M(e.rotate || 0, n.rotate || 0, s));
}
function bs(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Fc = Cr(0, 0.5, ui),
  Bc = Cr(0.5, 0.95, N);
function Cr(t, e, n) {
  return (s) => (s < t ? 0 : s > e ? 1 : n(Tt(t, e, s)));
}
function As(t, e) {
  (t.min = e.min), (t.max = e.max);
}
function $(t, e) {
  As(t.x, e.x), As(t.y, e.y);
}
function Vs(t, e) {
  (t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin);
}
function Cs(t, e, n, s, i) {
  return (
    (t -= e), (t = se(t, 1 / n, s)), i !== void 0 && (t = se(t, 1 / i, s)), t
  );
}
function Oc(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (
    (Y.test(e) &&
      ((e = Number.parseFloat(e)), (e = M(r.min, r.max, e / 100) - r.min)),
    typeof e != 'number')
  )
    return;
  let a = M(o.min, o.max, s);
  t === o && (a -= e),
    (t.min = Cs(t.min, e, n, a, i)),
    (t.max = Cs(t.max, e, n, a, i));
}
function Ms(t, e, [n, s, i], o, r) {
  Oc(t, e[n], e[s], e[i], e.scale, o, r);
}
const Nc = ['x', 'scaleX', 'originX'],
  Wc = ['y', 'scaleY', 'originY'];
function Ds(t, e, n, s) {
  Ms(t.x, e, Nc, n ? n.x : void 0, s ? s.x : void 0),
    Ms(t.y, e, Wc, n ? n.y : void 0, s ? s.y : void 0);
}
function Es(t) {
  return t.translate === 0 && t.scale === 1;
}
function Mr(t) {
  return Es(t.x) && Es(t.y);
}
function Rs(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Uc(t, e) {
  return Rs(t.x, e.x) && Rs(t.y, e.y);
}
function Ls(t, e) {
  return (
    Math.round(t.min) === Math.round(e.min) &&
    Math.round(t.max) === Math.round(e.max)
  );
}
function Dr(t, e) {
  return Ls(t.x, e.x) && Ls(t.y, e.y);
}
function ks(t) {
  return F(t.x) / F(t.y);
}
function js(t, e) {
  return (
    t.translate === e.translate &&
    t.scale === e.scale &&
    t.originPoint === e.originPoint
  );
}
class $c {
  constructor() {
    this.members = [];
  }
  add(e) {
    Ye(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (qe(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0) return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
      s.instance && s.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = s),
        n && (e.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((e.snapshot = s.snapshot),
          (e.snapshot.latestValues = s.animationValues || s.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      n.onExitComplete && n.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Kc(t, e, n) {
  let s = '';
  const i = t.x.translate / e.x,
    o = t.y.translate / e.y,
    r = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: u,
      rotateX: h,
      rotateY: f,
      skewX: d,
      skewY: m,
    } = n;
    c && (s = `perspective(${c}px) ${s}`),
      u && (s += `rotate(${u}deg) `),
      h && (s += `rotateX(${h}deg) `),
      f && (s += `rotateY(${f}deg) `),
      d && (s += `skewX(${d}deg) `),
      m && (s += `skewY(${m}deg) `);
  }
  const a = t.x.scale * e.x,
    l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || 'none';
}
const xe = ['', 'X', 'Y', 'Z'],
  _c = 1e3;
let zc = 0;
function Te(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && ((n[t] = i[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
}
function Er(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const n = pr(e);
  if (window.MotionHasOptimisedAnimation(n, 'transform')) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, 'transform', V, !(i || o));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && Er(s);
}
function Rr({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: s,
  resetTransform: i,
}) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      (this.id = zc++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(Xc),
            this.nodes.forEach(Jc),
            this.nodes.forEach(Qc),
            this.nodes.forEach(Yc);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = r),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Lc());
    }
    addEventListener(r, a) {
      return (
        this.eventHandlers.has(r) || this.eventHandlers.set(r, new Je()),
        this.eventHandlers.get(r).add(a)
      );
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    mount(r) {
      if (this.instance) return;
      (this.isSVG = vn(r) && !Na(r)), (this.instance = r);
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(r),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        t)
      ) {
        let u,
          h = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        V.read(() => {
          h = window.innerWidth;
        }),
          t(r, () => {
            const d = window.innerWidth;
            d !== h &&
              ((h = d),
              (this.root.updateBlockedByResize = !0),
              u && u(),
              (u = kc(f, 250)),
              Jt.hasAnimatedSinceResize &&
                ((Jt.hasAnimatedSinceResize = !1), this.nodes.forEach(Bs)));
          });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || l) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: u,
              hasLayoutChanged: h,
              hasRelativeLayoutChanged: f,
              layout: d,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const m =
                  this.options.transition || c.getDefaultTransition() || iu,
                { onLayoutAnimationStart: g, onLayoutAnimationComplete: v } =
                  c.getProps(),
                p = !this.targetLayout || !Dr(this.targetLayout, d),
                x = !h && f;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                x ||
                (h && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const y = { ...mn(m, 'layout'), onPlay: g, onComplete: v };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((y.delay = 0), (y.type = !1)),
                  this.startAnimation(y),
                  this.setAnimationOrigin(u, x);
              } else
                h || Bs(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = d;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        H(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(tu),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Er(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        (h.shouldResetTransform = !0),
          h.updateScroll('snapshot'),
          h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        r && this.notifyListeners('willUpdate');
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Is);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Fs);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Zc),
            this.nodes.forEach(Hc),
            this.nodes.forEach(Gc))
          : this.nodes.forEach(Fs),
        this.clearAllSnapshots();
      const a = O.now();
      (k.delta = q(0, 1e3 / 60, a - k.timestamp)),
        (k.timestamp = a),
        (k.isProcessing = !0),
        le.update.process(k),
        le.preRender.process(k),
        le.render.process(k),
        (k.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), gn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(qc), this.sharedNodes.forEach(eu);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        V.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      V.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !F(this.snapshot.measuredBox.x) &&
          !F(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const r = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = E()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          r ? r.layoutBox : void 0,
        );
    }
    updateScroll(r = 'measure') {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === r &&
          (a = !1),
        a && this.instance)
      ) {
        const l = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const r =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Mr(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, '') : void 0,
        u = c !== this.prevTransformTemplateValue;
      r &&
        this.instance &&
        (a || it(this.latestValues) || u) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        r && (l = this.removeTransform(l)),
        ru(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var c;
      const { visualElement: r } = this.options;
      if (!r) return E();
      const a = r.measureViewportBox();
      if (
        !(
          ((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(ou)
        )
      ) {
        const { scroll: u } = this.root;
        u && (pt(a.x, u.offset.x), pt(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      var l;
      const a = E();
      if (($(a, r), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c],
          { scroll: h, options: f } = u;
        u !== this.root &&
          h &&
          f.layoutScroll &&
          (h.wasRoot && $(a, r), pt(a.x, h.offset.x), pt(a.y, h.offset.y));
      }
      return a;
    }
    applyTransform(r, a = !1) {
      const l = E();
      $(l, r);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          gt(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          it(u.latestValues) && gt(l, u.latestValues);
      }
      return it(this.latestValues) && gt(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = E();
      $(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !it(c.latestValues)) continue;
        Be(c.latestValues) && c.updateSnapshot();
        const u = E(),
          h = c.measurePageBox();
        $(u, h),
          Ds(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return it(this.latestValues) && Ds(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      (this.targetDelta = r),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== k.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var f;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          r ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((f = this.parent) != null && f.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: u, layoutId: h } = this.options;
      if (!(!this.layout || !(u || h))) {
        if (
          ((this.resolvedRelativeTargetAt = k.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1
            ? ((this.relativeParent = d),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = E()),
              (this.relativeTargetOrigin = E()),
              kt(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                d.layout.layoutBox,
              ),
              $(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = E()), (this.targetWithTransforms = E())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              fc(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : $(this.target, this.layout.layoutBox),
                cr(this.target, this.targetDelta))
              : $(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const d = this.getClosestProjectingParent();
          d &&
          !!d.resumingFrom == !!this.resumingFrom &&
          !d.options.layoutScroll &&
          d.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = d),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = E()),
              (this.relativeTargetOrigin = E()),
              kt(this.relativeTargetOrigin, this.target, d.target),
              $(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Be(this.parent.latestValues) ||
          lr(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var m;
      const r = this.getLead(),
        a = !!this.resumingFrom || this !== r;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((m = this.parent) != null && m.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === k.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: c, layoutId: u } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || u))
      )
        return;
      $(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        f = this.treeScale.y;
      bl(this.layoutCorrected, this.treeScale, this.path, a),
        r.layout &&
          !r.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((r.target = r.layout.layoutBox), (r.targetWithTransforms = E()));
      const { target: d } = r;
      if (!d) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Vs(this.prevProjectionDelta.x, this.projectionDelta.x),
          Vs(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Lt(this.projectionDelta, this.layoutCorrected, d, this.latestValues),
        (this.treeScale.x !== h ||
          this.treeScale.y !== f ||
          !js(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !js(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', d));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), r)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = yt()),
        (this.projectionDelta = yt()),
        (this.projectionDeltaWithTransform = yt());
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        h = yt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = E(),
        d = l ? l.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        g = d !== m,
        v = this.getStack(),
        p = !v || v.members.length <= 1,
        x = !!(g && !p && this.options.crossfade === !0 && !this.path.some(su));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (A) => {
        const S = A / 1e3;
        Os(h.x, r.x, S),
          Os(h.y, r.y, S),
          this.setTargetDelta(h),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (kt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            nu(this.relativeTarget, this.relativeTargetOrigin, f, S),
            y && Uc(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = E()),
            $(y, this.relativeTarget)),
          g &&
            ((this.animationValues = u), Ic(u, c, this.latestValues, S, x, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      var a, l, c;
      this.notifyListeners('animationStart'),
        (a = this.currentAnimation) == null || a.stop(),
        (c = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || c.stop(),
        this.pendingAnimation &&
          (H(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = V.update(() => {
          (Jt.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = z(0)),
            (this.currentAnimation = Ec(this.motionValue, [0, 1e3], {
              ...r,
              velocity: 0,
              isSync: !0,
              onUpdate: (u) => {
                this.mixTargetDelta(u), r.onUpdate && r.onUpdate(u);
              },
              onStop: () => {},
              onComplete: () => {
                r.onComplete && r.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const r = this.getStack();
      r && r.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete');
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(_c),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: u,
      } = r;
      if (!(!a || !l || !c)) {
        if (
          this !== r &&
          this.layout &&
          c &&
          Lr(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || E();
          const h = F(this.layout.layoutBox.x);
          (l.x.min = r.target.x.min), (l.x.max = l.x.min + h);
          const f = F(this.layout.layoutBox.y);
          (l.y.min = r.target.y.min), (l.y.max = l.y.min + f);
        }
        $(a, l),
          gt(a, u),
          Lt(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new $c()),
        this.sharedNodes.get(r).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: r } = this.options;
      return r
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: r } = this.options;
      return r ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r) return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l),
        r && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r) return;
      let a = !1;
      const { latestValues: l } = r;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && Te('z', r, c, this.animationValues);
      for (let u = 0; u < xe.length; u++)
        Te(`rotate${xe[u]}`, r, c, this.animationValues),
          Te(`skew${xe[u]}`, r, c, this.animationValues);
      r.render();
      for (const u in c)
        r.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]);
      r.scheduleRender();
    }
    applyProjectionStyles(r, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        r.visibility = 'hidden';
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (r.visibility = ''),
          (r.opacity = ''),
          (r.pointerEvents = Zt(a == null ? void 0 : a.pointerEvents) || ''),
          (r.transform = l ? l(this.latestValues, '') : 'none');
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        this.options.layoutId &&
          ((r.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (r.pointerEvents = Zt(a == null ? void 0 : a.pointerEvents) || '')),
          this.hasProjected &&
            !it(this.latestValues) &&
            ((r.transform = l ? l({}, '') : 'none'), (this.hasProjected = !1));
        return;
      }
      r.visibility = '';
      const u = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let h = Kc(this.projectionDeltaWithTransform, this.treeScale, u);
      l && (h = l(u, h)), (r.transform = h);
      const { x: f, y: d } = this.projectionDelta;
      (r.transformOrigin = `${f.origin * 100}% ${d.origin * 100}% 0`),
        c.animationValues
          ? (r.opacity =
              c === this
                ? (u.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : u.opacityExit)
          : (r.opacity =
              c === this
                ? u.opacity !== void 0
                  ? u.opacity
                  : ''
                : u.opacityExit !== void 0
                  ? u.opacityExit
                  : 0);
      for (const m in Bt) {
        if (u[m] === void 0) continue;
        const { correct: g, applyTo: v, isCSSVariable: p } = Bt[m],
          x = h === 'none' ? u[m] : g(u[m], c);
        if (v) {
          const y = v.length;
          for (let A = 0; A < y; A++) r[v[A]] = x;
        } else
          p ? (this.options.visualElement.renderState.vars[m] = x) : (r[m] = x);
      }
      this.options.layoutId &&
        (r.pointerEvents =
          c === this ? Zt(a == null ? void 0 : a.pointerEvents) || '' : 'none');
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(Is),
        this.root.sharedNodes.clear();
    }
  };
}
function Hc(t) {
  t.updateLayout();
}
function Gc(t) {
  var n;
  const e = ((n = t.resumeFrom) == null ? void 0 : n.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners('didUpdate')) {
    const { layoutBox: s, measuredBox: i } = t.layout,
      { animationType: o } = t.options,
      r = e.source !== t.layout.source;
    o === 'size'
      ? K((h) => {
          const f = r ? e.measuredBox[h] : e.layoutBox[h],
            d = F(f);
          (f.min = s[h].min), (f.max = f.min + d);
        })
      : Lr(o, e.layoutBox, s) &&
        K((h) => {
          const f = r ? e.measuredBox[h] : e.layoutBox[h],
            d = F(s[h]);
          (f.max = f.min + d),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[h].max = t.relativeTarget[h].min + d));
        });
    const a = yt();
    Lt(a, s, e.layoutBox);
    const l = yt();
    r ? Lt(l, t.applyTransform(i, !0), e.measuredBox) : Lt(l, s, e.layoutBox);
    const c = !Mr(a);
    let u = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: f, layout: d } = h;
        if (f && d) {
          const m = E();
          kt(m, e.layoutBox, f.layoutBox);
          const g = E();
          kt(g, s, d.layoutBox),
            Dr(m, g) || (u = !0),
            h.options.layoutRoot &&
              ((t.relativeTarget = g),
              (t.relativeTargetOrigin = m),
              (t.relativeParent = h));
        }
      }
    }
    t.notifyListeners('didUpdate', {
      layout: s,
      snapshot: e,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: u,
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function Xc(t) {
  t.parent &&
    (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty ||
      (t.isSharedProjectionDirty = !!(
        t.isProjectionDirty ||
        t.parent.isProjectionDirty ||
        t.parent.isSharedProjectionDirty
      )),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Yc(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function qc(t) {
  t.clearSnapshot();
}
function Is(t) {
  t.clearMeasurements();
}
function Fs(t) {
  t.isLayoutDirty = !1;
}
function Zc(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify('BeforeLayoutMeasure'),
    t.resetTransform();
}
function Bs(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function Jc(t) {
  t.resolveTargetDelta();
}
function Qc(t) {
  t.calcProjection();
}
function tu(t) {
  t.resetSkewAndRotation();
}
function eu(t) {
  t.removeLeadSnapshot();
}
function Os(t, e, n) {
  (t.translate = M(e.translate, 0, n)),
    (t.scale = M(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint);
}
function Ns(t, e, n, s) {
  (t.min = M(e.min, n.min, s)), (t.max = M(e.max, n.max, s));
}
function nu(t, e, n, s) {
  Ns(t.x, e.x, n.x, s), Ns(t.y, e.y, n.y, s);
}
function su(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const iu = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ws = (t) =>
    typeof navigator < 'u' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  Us = Ws('applewebkit/') && !Ws('chrome/') ? Math.round : N;
function $s(t) {
  (t.min = Us(t.min)), (t.max = Us(t.max));
}
function ru(t) {
  $s(t.x), $s(t.y);
}
function Lr(t, e, n) {
  return (
    t === 'position' || (t === 'preserve-aspect' && !hc(ks(e), ks(n), 0.2))
  );
}
function ou(t) {
  var e;
  return t !== t.root && ((e = t.scroll) == null ? void 0 : e.wasRoot);
}
const au = Rr({
    attachResizeListener: (t, e) => Ot(t, 'resize', e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  we = { current: void 0 },
  kr = Rr({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!we.current) {
        const t = new au({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (we.current = t);
      }
      return we.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : 'none';
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === 'fixed',
  }),
  lu = {
    pan: { Feature: Vc },
    drag: { Feature: Ac, ProjectionNode: kr, MeasureLayout: Ar },
  };
function Ks(t, e, n) {
  const { props: s } = t;
  t.animationState &&
    s.whileHover &&
    t.animationState.setActive('whileHover', n === 'Start');
  const i = 'onHover' + n,
    o = s[i];
  o && V.postRender(() => o(e, $t(e)));
}
class cu extends et {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = Aa(
        e,
        (n, s) => (Ks(this.node, s, 'Start'), (i) => Ks(this.node, i, 'End')),
      ));
  }
  unmount() {}
}
class uu extends et {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(':focus-visible');
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Nt(
      Ot(this.node.current, 'focus', () => this.onFocus()),
      Ot(this.node.current, 'blur', () => this.onBlur()),
    );
  }
  unmount() {}
}
function _s(t, e, n) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState &&
    s.whileTap &&
    t.animationState.setActive('whileTap', n === 'Start');
  const i = 'onTap' + (n === 'End' ? '' : n),
    o = s[i];
  o && V.postRender(() => o(e, $t(e)));
}
class hu extends et {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = Da(
        e,
        (n, s) => (
          _s(this.node, s, 'Start'),
          (i, { success: o }) => _s(this.node, i, o ? 'End' : 'Cancel')
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const _e = new WeakMap(),
  Pe = new WeakMap(),
  fu = (t) => {
    const e = _e.get(t.target);
    e && e(t);
  },
  du = (t) => {
    t.forEach(fu);
  };
function mu({ root: t, ...e }) {
  const n = t || document;
  Pe.has(n) || Pe.set(n, {});
  const s = Pe.get(n),
    i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(du, { root: t, ...e })), s[i];
}
function pu(t, e, n) {
  const s = mu(e);
  return (
    _e.set(t, n),
    s.observe(t),
    () => {
      _e.delete(t), s.unobserve(t);
    }
  );
}
const gu = { some: 0, all: 1 };
class yu extends et {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: s, amount: i = 'some', once: o } = e,
      r = {
        root: n ? n.current : void 0,
        rootMargin: s,
        threshold: typeof i == 'number' ? i : gu[i],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), o && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', c);
        const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(),
          f = c ? u : h;
        f && f(l);
      };
    return pu(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: e, prevProps: n } = this.node;
    ['amount', 'margin', 'root'].some(vu(e, n)) && this.startObserver();
  }
  unmount() {}
}
function vu({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const xu = {
    inView: { Feature: yu },
    tap: { Feature: hu },
    focus: { Feature: uu },
    hover: { Feature: cu },
  },
  Tu = { layout: { ProjectionNode: kr, MeasureLayout: Ar } },
  wu = { ...rc, ...xu, ...lu, ...Tu },
  ct = wl(wu, jl),
  Pu = 50,
  zs = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  Su = () => ({ time: 0, x: zs(), y: zs() }),
  bu = {
    x: { length: 'Width', position: 'Left' },
    y: { length: 'Height', position: 'Top' },
  };
function Hs(t, e, n, s) {
  const i = n[e],
    { length: o, position: r } = bu[e],
    a = i.current,
    l = n.time;
  (i.current = t[`scroll${r}`]),
    (i.scrollLength = t[`scroll${o}`] - t[`client${o}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = Tt(0, i.scrollLength, i.current));
  const c = s - l;
  i.velocity = c > Pu ? 0 : Qe(i.current - a, c);
}
function Au(t, e, n) {
  Hs(t, 'x', e, n), Hs(t, 'y', e, n), (e.time = n);
}
function Vu(t, e) {
  const n = { x: 0, y: 0 };
  let s = t;
  while (s && s !== e)
    if ($i(s))
      (n.x += s.offsetLeft), (n.y += s.offsetTop), (s = s.offsetParent);
    else if (s.tagName === 'svg') {
      const i = s.getBoundingClientRect();
      s = s.parentElement;
      const o = s.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (s instanceof SVGGraphicsElement) {
      const { x: i, y: o } = s.getBBox();
      (n.x += i), (n.y += o);
      let r = null,
        a = s.parentNode;
      while (!r) a.tagName === 'svg' && (r = a), (a = s.parentNode);
      s = r;
    } else break;
  return n;
}
const ze = { start: 0, center: 0.5, end: 1 };
function Gs(t, e, n = 0) {
  let s = 0;
  if ((t in ze && (t = ze[t]), typeof t == 'string')) {
    const i = Number.parseFloat(t);
    t.endsWith('px')
      ? (s = i)
      : t.endsWith('%')
        ? (t = i / 100)
        : t.endsWith('vw')
          ? (s = (i / 100) * document.documentElement.clientWidth)
          : t.endsWith('vh')
            ? (s = (i / 100) * document.documentElement.clientHeight)
            : (t = i);
  }
  return typeof t == 'number' && (s = e * t), n + s;
}
const Cu = [0, 0];
function Mu(t, e, n, s) {
  let i = Array.isArray(t) ? t : Cu,
    o = 0,
    r = 0;
  return (
    typeof t == 'number'
      ? (i = [t, t])
      : typeof t == 'string' &&
        ((t = t.trim()),
        t.includes(' ') ? (i = t.split(' ')) : (i = [t, ze[t] ? t : '0'])),
    (o = Gs(i[0], n, s)),
    (r = Gs(i[1], e)),
    o - r
  );
}
const Du = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Eu = { x: 0, y: 0 };
function Ru(t) {
  return 'getBBox' in t && t.tagName !== 'svg'
    ? t.getBBox()
    : { width: t.clientWidth, height: t.clientHeight };
}
function Lu(t, e, n) {
  const { offset: s = Du.All } = n,
    { target: i = t, axis: o = 'y' } = n,
    r = o === 'y' ? 'height' : 'width',
    a = i !== t ? Vu(i, t) : Eu,
    l = i === t ? { width: t.scrollWidth, height: t.scrollHeight } : Ru(i),
    c = { width: t.clientWidth, height: t.clientHeight };
  e[o].offset.length = 0;
  let u = !e[o].interpolate;
  const h = s.length;
  for (let f = 0; f < h; f++) {
    const d = Mu(s[f], c[r], l[r], a[o]);
    !u && d !== e[o].interpolatorOffsets[f] && (u = !0), (e[o].offset[f] = d);
  }
  u &&
    ((e[o].interpolate = cn(e[o].offset, Ai(s), { clamp: !1 })),
    (e[o].interpolatorOffsets = [...e[o].offset])),
    (e[o].progress = q(0, 1, e[o].interpolate(e[o].current)));
}
function ku(t, e = t, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), e !== t)) {
    let s = e;
    while (s && s !== t)
      (n.x.targetOffset += s.offsetLeft),
        (n.y.targetOffset += s.offsetTop),
        (s = s.offsetParent);
  }
  (n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth),
    (n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight),
    (n.x.containerLength = t.clientWidth),
    (n.y.containerLength = t.clientHeight);
}
function ju(t, e, n, s = {}) {
  return {
    measure: (i) => {
      ku(t, s.target, n), Au(t, n, i), (s.offset || s.target) && Lu(t, n, s);
    },
    notify: () => e(n),
  };
}
const Vt = new WeakMap(),
  Xs = new WeakMap(),
  Se = new WeakMap(),
  Ys = (t) => (t === document.scrollingElement ? window : t);
function jr(t, { container: e = document.scrollingElement, ...n } = {}) {
  if (!e) return N;
  let s = Se.get(e);
  s || ((s = new Set()), Se.set(e, s));
  const i = Su(),
    o = ju(e, t, i, n);
  if ((s.add(o), !Vt.has(e))) {
    const a = () => {
        for (const h of s) h.measure(k.timestamp);
        V.preUpdate(l);
      },
      l = () => {
        for (const h of s) h.notify();
      },
      c = () => V.read(a);
    Vt.set(e, c);
    const u = Ys(e);
    window.addEventListener('resize', c, { passive: !0 }),
      e !== document.documentElement && Xs.set(e, Oa(e, c)),
      u.addEventListener('scroll', c, { passive: !0 }),
      c();
  }
  const r = Vt.get(e);
  return (
    V.read(r, !1, !0),
    () => {
      var c;
      H(r);
      const a = Se.get(e);
      if (!a || (a.delete(o), a.size)) return;
      const l = Vt.get(e);
      Vt.delete(e),
        l &&
          (Ys(e).removeEventListener('scroll', l),
          (c = Xs.get(e)) == null || c(),
          window.removeEventListener('resize', l));
    }
  );
}
const qs = new Map();
function Iu(t) {
  const e = { value: 0 },
    n = jr((s) => {
      e.value = s[t.axis].progress * 100;
    }, t);
  return { currentTime: e, cancel: n };
}
function Ir({ source: t, container: e, ...n }) {
  const { axis: s } = n;
  t && (e = t);
  const i = qs.get(e) ?? new Map();
  qs.set(e, i);
  const o = n.target ?? 'self',
    r = i.get(o) ?? {},
    a = s + (n.offset ?? []).join(',');
  return (
    r[a] ||
      (r[a] =
        !n.target && Di()
          ? new ScrollTimeline({ source: e, axis: s })
          : Iu({ container: e, ...n })),
    r[a]
  );
}
function Fu(t, e) {
  const n = Ir(e);
  return t.attachTimeline({
    timeline: e.target ? void 0 : n,
    observe: (s) => (
      s.pause(),
      Gi((i) => {
        s.time = s.duration * i;
      }, n)
    ),
  });
}
function Bu(t) {
  return t.length === 2;
}
function Ou(t, e) {
  return Bu(t)
    ? jr((n) => {
        t(n[e.axis].progress, n);
      }, e)
    : Gi(t, Ir(e));
}
function Nu(
  t,
  { axis: e = 'y', container: n = document.scrollingElement, ...s } = {},
) {
  if (!n) return N;
  const i = { axis: e, container: n, ...s };
  return typeof t == 'function' ? Ou(t, i) : Fu(t, i);
}
const Wu = () => ({
    scrollX: z(0),
    scrollY: z(0),
    scrollXProgress: z(0),
    scrollYProgress: z(0),
  }),
  Ht = (t) => (t ? !t.current : !1);
function Uu({ container: t, target: e, ...n } = {}) {
  const s = ie(Wu),
    i = w.useRef(null),
    o = w.useRef(!1),
    r = w.useCallback(
      () => (
        (i.current = Nu(
          (a, { x: l, y: c }) => {
            s.scrollX.set(l.current),
              s.scrollXProgress.set(l.progress),
              s.scrollY.set(c.current),
              s.scrollYProgress.set(c.progress);
          },
          {
            ...n,
            container: (t == null ? void 0 : t.current) || void 0,
            target: (e == null ? void 0 : e.current) || void 0,
          },
        )),
        () => {
          var a;
          (a = i.current) == null || a.call(i);
        }
      ),
      [t, e, JSON.stringify(n.offset)],
    );
  return (
    Ge(() => {
      if (((o.current = !1), Ht(t) || Ht(e))) {
        o.current = !0;
        return;
      } else return r();
    }, [r]),
    w.useEffect(() => {
      if (o.current) return xt(!Ht(t)), xt(!Ht(e)), r();
    }, [r]),
    s
  );
}
function $u(t) {
  const e = ie(() => z(t)),
    { isStatic: n } = w.useContext(xn);
  if (n) {
    const [, s] = w.useState(t);
    w.useEffect(() => e.on('change', s), []);
  }
  return e;
}
function Fr(t, e) {
  const n = $u(e()),
    s = () => n.set(e());
  return (
    s(),
    Ge(() => {
      const i = () => V.preRender(s, !1, !0),
        o = t.map((r) => r.on('change', i));
      return () => {
        o.forEach((r) => r()), H(s);
      };
    }),
    n
  );
}
function Ku(t) {
  (Et.current = []), t();
  const e = Fr(Et.current, t);
  return (Et.current = void 0), e;
}
function Zs(t, e, n, s) {
  if (typeof t == 'function') return Ku(t);
  const i = typeof e == 'function' ? e : Wa(e, n, s);
  return Array.isArray(t) ? Js(t, i) : Js([t], ([o]) => i(o));
}
function Js(t, e) {
  const n = ie(() => []);
  return Fr(t, () => {
    n.length = 0;
    const s = t.length;
    for (let i = 0; i < s; i++) n[i] = t[i].get();
    return e(n);
  });
}
const _u = '/assets/img_cemware-Dr7VxAbO.png',
  zu = '/assets/img_dosopt-CBi3Zgxa.png',
  Hu = '/assets/img_makers-DpC9v-yS.png',
  Gu = '/assets/img_nowsopt-BqWQ6SA3.png',
  Xu = [
    {
      id: 1,
      logoUrl: _u,
      company: 'CEMWARE',
      position: 'Frontend Developer',
      description: ['콘텐츠 팀 소속', '사내 API 기반 디지털 콘텐츠 개발'],
      startDate: '2025.03',
      endDate: '2025.06',
    },
    {
      id: 2,
      logoUrl: Gu,
      company: 'SOPT 34기',
      position: 'NOW SOPT 34th Web Part',
      description: [
        '34기 APPJAM 우수상 수상',
        '합동세미나 리드 역할을 맡아 컨벤션 준비 및 전반적 개발 과정 총괄',
        'React 스터디장을 맡아 3개월 간 스터디 진행',
        '4가지 파트(기획, 디자인, 서버, 웹)로 이뤄진 협업 경험',
      ],
      startDate: '2024.03',
      endDate: '2024.07',
    },
    {
      id: 3,
      logoUrl: zu,
      company: 'SOPT 33기',
      position: 'DO SOPT 33rd Web Part',
      description: [
        '34기 APPJAM 우수상 수상',
        '4가지 파트(기획, 디자인, 서버, 웹)로 이뤄진 협업 경험',
      ],
      startDate: '2023.09',
      endDate: '2024.01',
    },
    {
      id: 4,
      logoUrl: Hu,
      company: 'makers 36기',
      position: 'Admin Team Frontend Developer',
      description: [
        'SOPT의 공홈과, 내부 어드민 시스템, 리크루팅 지원서 유지 및 보수',
        '2주 단위의 애자일 스프린트를 통한 프로젝트 진행',
      ],
      startDate: '2025.03',
      endDate: '2025.06',
    },
  ],
  Br = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 },
    },
  },
  Yu = { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  qu = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };
var Zu = 'uq6tme0',
  Ju = 'uq6tme1',
  Qu = 'uq6tme2',
  th = 'uq6tme3',
  eh = 'uq6tme4',
  nh = 'uq6tme5',
  sh = 'uq6tme6',
  ih = 'uq6tme7';
const rh = ({ experience: t }) => {
  const {
    logoUrl: e,
    company: n,
    position: s,
    description: i,
    startDate: o,
    endDate: r,
  } = t;
  return T.jsxs(
    ct.article,
    {
      className: Zu,
      variants: qu,
      whileHover: { scale: 1.02 },
      children: [
        T.jsx('img', { src: e, alt: n, className: Ju }),
        T.jsxs('div', {
          className: Qu,
          children: [
            T.jsxs('div', {
              className: th,
              children: [
                T.jsx('h1', { className: eh, children: s }),
                T.jsxs('p', { className: ih, children: [o, ' - ', r] }),
              ],
            }),
            T.jsx('ul', {
              className: nh,
              children: i.map((a) =>
                T.jsx('li', { className: sh, children: a }, a),
              ),
            }),
          ],
        }),
      ],
    },
    t.id,
  );
};
var oh = '_1s4mzhv0',
  ah = '_1s4mzhv1',
  lh = '_1s4mzhv4';
const ch = () =>
  T.jsx(ct.section, {
    className: oh,
    id: 'experience',
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: !0, amount: 0.3 },
    variants: Br,
    children: T.jsx('div', {
      className: ah,
      children: T.jsx(ct.div, {
        className: lh,
        variants: Yu,
        children: Xu.map((t) => T.jsx(rh, { experience: t }, t.id)),
      }),
    }),
  });
var uh = '_8339tn0',
  hh = '_8339tn1',
  fh = '_8339tn2',
  dh = '_8339tn3',
  mh = '_8339tn4',
  ph = '_8339tn5';
const gh = () =>
    T.jsx('section', {
      className: uh,
      id: 'about',
      children: T.jsxs('div', {
        className: hh,
        children: [
          T.jsx('h1', { className: fh, children: '안녕하세요' }),
          T.jsxs('h1', {
            className: dh,
            children: [
              '프론트엔드 개발자 ',
              T.jsx('span', { className: mh, children: '남다은' }),
              '입니다.',
            ],
          }),
          T.jsx('p', {
            className: ph,
            children: `
            집중할 땐 깊이 몰입하고, 맡은 일은 끝까지 책임집니다.
            사용자 경험과 개발자 경험을 모두 고려하며, 주어진 목표를 성과로 연결하는 과정을 즐깁니다.
        `,
          }),
        ],
      }),
    }),
  yh = '/assets/img_coaster-DgsjIxIk.png',
  vh = '/assets/img_mile-COyruDnZ.png',
  xh = '/assets/img_tiki-Bvju4hZF.png',
  Th = [
    {
      id: 1,
      name: 'Tiki',
      period: '2024.07 - 2025.03',
      description: 'Web FE 개발 담당',
      skills: [
        'React',
        'TypeScript',
        'Emotion CSS',
        'Zustand',
        'MSW',
        'Storybook',
        'Figma',
        'Git',
      ],
      imageUrl: xh,
      githubUrl: 'https://github.com/Team-Tiki/tiki-client',
    },
    {
      id: 2,
      name: 'Mile',
      period: '2024.01 - 2024.07',
      description: 'Web FE 개발 담당',
      skills: ['React', 'TypeScript', 'Styled-components', 'Figma', 'Git'],
      imageUrl: vh,
      githubUrl: 'https://github.com/Mile-Writings/Mile-Client',
    },
    {
      id: 3,
      name: 'Coaster',
      period: '2024.12 - 2025.03',
      description: 'Web FE 개발 담당',
      skills: ['React', 'TypeScript', 'Emotion CSS', 'ky', 'Figma', 'Git'],
      imageUrl: yh,
      githubUrl: 'https://github.com/Coastee/COASTER-Client',
    },
  ];
var wh = 'ei519s0',
  Ph = 'ei519s1',
  Sh = 'ei519s2',
  bh = 'ei519s3',
  Ah = 'ei519s4',
  Vh = 'ei519s5',
  Ch = 'ei519s6',
  Mh = 'ei519s7',
  Dh = 'ei519s8',
  Qs = 'ei519s9';
const Eh = ({ project: t }) => {
    const { name: e, period: n, description: s, skills: i, githubUrl: o } = t;
    return T.jsxs('div', {
      className: `${bh}`,
      children: [
        T.jsxs('div', {
          className: Sh,
          children: [
            T.jsx('h1', { className: Vh, children: e }),
            T.jsx('p', { className: Ch, children: n }),
            T.jsx('a', {
              href: o,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: Qs,
              children: T.jsx('i', { className: `ri-github-fill ${Qs}` }),
            }),
          ],
        }),
        T.jsx('span', { className: Mh, children: s }),
        T.jsx('div', {
          className: Dh,
          children: i.map((r) => T.jsx(Wr, { size: 'sm', children: r }, r)),
        }),
      ],
    });
  },
  Rh = ({ project: t }) => {
    const { name: e, imageUrl: n, githubUrl: s } = t,
      i = w.useRef(null),
      { scrollYProgress: o } = Uu({
        target: i,
        offset: ['start end', 'end start'],
      }),
      r = Zs(o, [0, 0.3, 1], [300, 0, 0]),
      a = Zs(o, [0, 0.3, 0.7, 1], [0, 1, 1, 1]);
    return T.jsxs(ct.section, {
      ref: i,
      className: wh,
      style: { x: r, opacity: a },
      onClick: () => {
        window.open(s, '_blank');
      },
      children: [
        T.jsx('div', {
          className: `${Ph}`,
          children: T.jsx('img', { src: n, alt: e, className: Ah }),
        }),
        T.jsx(Eh, { project: t }),
      ],
    });
  };
var Lh = '_1283u370',
  kh = '_1283u373';
const jh = () =>
    T.jsx(ct.section, {
      className: Lh,
      id: 'project',
      initial: 'hidden',
      whileInView: 'visible',
      variants: Br,
      children: T.jsx('div', {
        className: kh,
        children: Th.map((t) => T.jsx(Rh, { project: t }, t.id)),
      }),
    }),
  Ih = [
    {
      id: 1,
      name: '김가온',
      info: 'Tiki 디자이너',
      description: `기술적인 제약 사항이나 구현 가능성에 대해 쉽게 설명해주어 디자이너로서 방향성을 잡기 수월했어용 !!
그리고 커뮤니케이션을 신속하게 해주어 디자인을 빨리 반영할 수 있었어요 !`,
    },
    {
      id: 2,
      name: '임찬기',
      info: 'makers 어드민팀 서버 개발자',
      description: `이슈 발생 시 문제 상황을 명확히 공유하고, API 관련 문제에 대해서는 상세한 스펙과 오류 내용을 체계적으로 정리해주어 백엔드 개발자로서 다은님과의 협업이 매우 원활하게 느껴졌습니다.
또한 트러블 슈팅 속도가 빨라 사용자에게 미치는 영향을 최소화하며 안정적으로 서비스 운영을 할 수 있었습니다.`,
    },
    {
      id: 3,
      name: '백승범',
      info: 'CEMWARE 웹 프론트엔드 개발자',
      description: `남다은님은 또 함께 일하고 싶은 개발자입니다. 
긍정적이며 사람을 편하게 대해줍니다. 그리고 자신의 생각을 잘 표현할 줄 알며 기술적 고민도 마다하지 않고 적극적으로 함께 생각하며 해결하려 노력합니다.`,
    },
    {
      id: 4,
      name: '김규홍',
      info: 'Tiki 웹 프론트엔드 개발자',
      description: `다은이는 항상 맡은 테스크에 대해서 책임감 있게 기한내에 모두 완료해내고요. 도입하고 싶은 기술이 있을때 선택의 근거를 자세하게 팀원들에게 설명해 팀원들의 기술에 대해 이해할 수 있게 해줘요.
코드리뷰를 할때는 스타일, 컨벤션 하나하나까지 꼼꼼하게 확인해줘서 팀원들이 놓친 부분들을 잘 캐치할 수 있게 해줘요.`,
    },
    {
      id: 5,
      name: '정보운',
      info: 'Tiki 웹 프론트엔드 개발자',
      description:
        '사람들이 힘들어 속도가 나지않을때는 본인이 직접 나서서 여러운 테스크들도 가져가서 응차응차해내고 힘들텐데도 우리한테 힘든내색없이 잘 해내는 책임감이 엄청난 다은언니였습니다. 하는 대로 금방금방 팀원들과 상황공유를 잘하고 다른 팀원(나)의 못하는 실력을 이해하고 본인이 더 도와줄건 없는지 항상 보살펴주는 이타심과 리더쉽을 가지고 있습니다!',
    },
    {
      id: 6,
      name: '노하은',
      info: 'makers 어드민팀 디자이너 노하은',
      description: `다은이는 사용자가 더 나은 경험을 할 수 있도록 고민하고 디자이너와 적극적인 소통과 하는 개발자입니다.
능력도 우수하여 디자이너가 높은 만족도를 가지고 있습니다.`,
    },
    {
      id: 7,
      name: '최영철',
      info: 'makers 어드민팀 서버 개발자',
      description: `다은님은 진짜 야무지고 책임감 있는 FE 개발자였어요 ㅎㅎ.
항상 빠르게 응답해주고, 이슈도 척척 해결해서 너무 든든했어요!`,
    },
  ];
var Fh = '_2sxdbr0',
  Bh = '_2sxdbr2',
  Oh = '_2sxdbr3',
  Nh = '_2sxdbr4',
  Wh = '_2sxdbr5';
const Uh = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  $h = ({ review: t }) => {
    const { name: e, info: n, description: s } = t;
    return T.jsxs(
      ct.div,
      {
        className: Fh,
        variants: Uh,
        children: [
          T.jsx('p', { className: Bh, children: s }),
          T.jsxs('div', {
            className: Oh,
            children: [
              T.jsx('h1', { className: Nh, children: e }),
              T.jsx('span', { className: Wh, children: n }),
            ],
          }),
        ],
      },
      e,
    );
  };
var Kh = 'tzm5md0',
  _h = 'tzm5md1';
const zh = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  },
  Hh = () =>
    T.jsx('section', {
      className: Kh,
      id: 'review',
      children: T.jsx(ct.div, {
        className: _h,
        variants: zh,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: !0, amount: 0.2 },
        children: Ih.map((t) => T.jsx($h, { review: t }, t.id)),
      }),
    });
var Gh = '_1feux400';
const nf = () => [
    { title: 'diary' },
    { name: 'description', content: '다이어리' },
  ],
  Xh = () =>
    T.jsxs('div', {
      className: Gh,
      children: [T.jsx(gh, {}), T.jsx(jh, {}), T.jsx(ch, {}), T.jsx(Hh, {})],
    }),
  sf = Xh;
export { sf as default, nf as meta };
