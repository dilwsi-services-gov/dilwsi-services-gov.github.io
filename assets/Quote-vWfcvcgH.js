import {P as e, R as r, g as n} from "./index-vR-ihBdk.js";
import {E as s} from "./index-Ck0o5Kpj.js";
const l = a=>r.createElement("div", null, r.createElement(s, {
    className: "float-left ds-ml-1",
    size: "lg"
}), r.createElement("div", {
    className: "ds-pl-8"
}, a.children));
l.propTypes = {
    children: e.any
};
const m = ({info: a=!1, warning: o=!1, children: t})=>o ? r.createElement(l, null, t) : r.createElement(n, {
    marginTop: 1,
    marginLeft: 1,
    marginBottom: 3,
    padding: 2,
    className: "text-gray-800 ".concat(a && "border-l-4 border-gray-500")
}, t);
m.propTypes = {
    children: e.node,
    error: e.bool,
    info: e.bool,
    label: e.string,
    warning: e.bool
};
export {m as Q};
