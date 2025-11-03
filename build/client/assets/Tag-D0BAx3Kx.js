import { j as s } from './jsx-runtime-56DGgGmo.js';
import { c as t } from './createRuntimeFn-62c9670f.esm-Bv4SPzfY.js';
var d = t({
    defaultClassName: '_17dcind0',
    variantClassNames: { size: { sm: '_17dcind1', lg: '_17dcind2' } },
    defaultVariants: {},
    compoundVariants: [],
  }),
  e = t({
    defaultClassName: '_17dcind3',
    variantClassNames: { size: { sm: '_17dcind4', lg: '_17dcind5' } },
    defaultVariants: {},
    compoundVariants: [],
  });
const l = ({ size: a = 'lg', children: n }) =>
  s.jsx('div', {
    className: d({ size: a }),
    children: s.jsx('span', { className: e({ size: a }), children: n }),
  });
export { l as T };
