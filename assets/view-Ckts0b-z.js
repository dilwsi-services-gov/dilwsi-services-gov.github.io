import {al as p, R as c, P as e} from "./index-vR-ihBdk.js";
import {c as s} from "./form-Bjc7Odl_.js";
function r({declaration: t, scope: a, ...m}) {
    const o = p(t, t && t.template, a)
      , n = a === "template" ? "template" : o.step_name;
    return c.createElement(s, {
        advance: m.advance,
        document: o,
        step: n
    })
}
r.propTypes = {
    declaration: e.shape({
        template: e.object
    }),
    scope: e.string,
    advance: e.any
};
export {r as C};
