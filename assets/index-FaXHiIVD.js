import {R as e, Q as r, y as t} from "./index-vR-ihBdk.js";
const i = e.forwardRef(function({lang: n, src: a, variant: o, className: s, children: c, ...g}, m) {
    return e.createElement(e.Fragment, null, e.createElement(r, {
        as: "img",
        src: a,
        ref: m,
        printHidden: !0,
        className: t(s, {
            "ds-image-logo": o === void 0,
            ["ds-image-logo-".concat(o)]: o !== void 0
        }),
        ...g
    }))
});
export {i as I};
