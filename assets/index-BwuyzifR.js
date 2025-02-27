import {R as d, O as o, y as c} from "./index-vR-ihBdk.js";
const f = d.forwardRef(function({color: e="default", className: t, children: a, ...s}, r) {
    return d.createElement(o, {
        as: "code",
        ref: r,
        className: c(t, {
            "ds-code": !0,
            "ds-code--attr": e === "attribute",
            "ds-code--string": e === "string",
            "ds-code--keyword": e === "keyword",
            "ds-code--name": e === "name"
        }),
        ...s
    }, a)
});
export {f as C};
