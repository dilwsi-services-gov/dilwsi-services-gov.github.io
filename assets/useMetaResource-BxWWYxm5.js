import {J as i, K as m} from "./index-vR-ihBdk.js";
function d({resource: e, id: a, query: o, options: s, ...n}) {
    const [u,r] = i({
        name: e,
        id: a,
        query: o,
        options: s
    })
      , {data: t, ...c} = m({
        url: u,
        options: r,
        ...n
    });
    return {
        meta: t && t.meta,
        data: t && t.data,
        ...c
    }
}
export {d as u};
