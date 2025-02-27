import {u as c, F as u, a as g, r as h} from "./index-vR-ihBdk.js";
function o({children: i, languageCodes: e, defaultLangCode: n}) {
    const {i18n: a} = c()
      , {changeLanguage: t} = u()
      , r = new URLSearchParams(g().search).get("lang");
    return h.useEffect(()=>{
        let s = r;
        e.length === 0 ? (t(null, !0),
        s = n) : e.length === 1 ? r !== null && !e.includes(r) && (t(n, !0),
        s = n) : e.includes(r) || (t(n, !0),
        s = n),
        s !== a.language && a.changeLanguage(s)
    }
    , [r, e, n]),
    i
}
export {o as I};
