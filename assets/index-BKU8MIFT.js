import {R as e} from "./index-vR-ihBdk.js";
import {I as n} from "./index-FaXHiIVD.js";
const s = e.forwardRef(function({lang: c, src: o, variants: a=["dark", "light"], className: f, children: p, ...m}, r) {
    return e.createElement(e.Fragment, null, a.map(t=>{
        const g = o == null ? void 0 : o.replace(/(\.[^\.]+)$/, "--".concat(t, "$1"));
        return e.createElement(n, {
            key: t,
            ref: r,
            variant: t,
            src: g,
            ...m
        })
    }
    ))
});
export {s as I};
