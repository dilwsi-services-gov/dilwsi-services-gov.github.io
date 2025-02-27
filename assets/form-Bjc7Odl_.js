function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["assets/SafeHTML-C3YRFdZj.js", "assets/index-vR-ihBdk.js", "assets/index-K55t6-3L.css", "assets/react-markdown-DvBHW9UP.js"]
    }
    return indexes.map((i)=>__vite__mapDeps.viteFileDeps[i])
}
import {fJ as Da, fK as Si, fL as Ie, r as f, b as fn, fM as Oi, aT as mn, fN as Ri, ak as Ke, a1 as Le, aD as pn, al as Xt, fO as it, eg as ka, R as s, W as rr, cA as Qt, dT as bt, P as o, u as j, e as yn, G as U, y as gn, ab as ar, cK as Di, cL as ki, cs as wi, X as xi, Y as Yr, cu as or, co as Mi, cp as Li, ee as _e, fP as sr, cr as wa, cB as Ii, cC as Fi, ey as Ai, t as ir, e4 as re, g as ne, fQ as Pi, e9 as $e, ae as lt, fR as xa, o as ce, fS as Ni, fT as $i, fU as lr, af as Xe, ag as Ve, ah as je, eo as xt, ai as Ue, h as we, a as bn, c as cr, Q as Mt, w as Vi, fV as ji, fW as Ui, fF as Bi, bI as hn, bL as Yi, bm as Hi, bo as zi, bn as Gi, ea as ur, fX as qi, aa as Zt, fY as Wi, eR as Ki, fZ as Ma, f_ as Hr, B as Xi, f$ as Ji, g0 as Qi, g1 as Zi, g2 as el, g3 as tl, g4 as nl, f as En, g5 as rl, g6 as al, g7 as ol, cn as sl, a4 as La, a5 as Ia, a7 as pt, a8 as Fa, ct as Aa, aR as Pa, a6 as Na, a9 as yt, a3 as il, bH as zr, A as ll, bx as cl, bz as ul, bA as dl, by as fl, aL as dr, aM as en, aO as tn, aN as nn, aI as $a, aK as Va, g8 as ml, aJ as pl, d as yl, aH as gl, C as bl, z as hl, cv as El, g9 as Un, aG as vl, ga as _l, gb as Cl, gc as Pe, gd as Gr, ge as qr} from "./index-vR-ihBdk.js";
import {L as ja, D as Ua, P as Ba, a as Tl, R as Sl, C as Ol} from "./index-BrfQD5YL.js";
import {D as Ya} from "./DigigovLayout-B3Jk_JT9.js";
import {Q as Lt} from "./Quote-vWfcvcgH.js";
import {u as Rl} from "./useMetaResource-BxWWYxm5.js";
import {C as Ha} from "./index-DzcTPUgt.js";
import "./index-BwuyzifR.js";
import "./index-FWqgQIBr.js";
import "./index-FaXHiIVD.js";
import "./index-BKU8MIFT.js";
import {C as Dl, c as kl, D as wl, a as xl, S as Ml, h as Wr, b as Ll, v as Il} from "./lazy-BKQwBWXK.js";
import {a as Fl, P as Al} from "./Page-DeiFZGz7.js";
function Pl(e, t, n, r, a) {
    t = t || {};
    let i = t.value;
    if (e.type === "attachment" && i && i.length > 0 && (i = JSON.parse(i)),
    e.type === "entity_recipient" && i && i.length > 0 && (i = JSON.parse(i).name),
    e.type === "recipient" && i && i.length > 0)
        try {
            i = JSON.parse(i)
        } catch {
            i = {
                name: i
            }
        }
    return {
        ...t,
        value: i
    }
}
function za(e, t, n, r, a, i) {
    var g;
    i = i || (h=>h);
    const c = e.type === "computed"
      , l = e.external_immutable
      , u = a[e.key] || e
      , d = u ? u.origin : "user"
      , p = (g = e.editable) != null ? g : !c && (l ? u === void 0 || d === "user" : !0)
      , m = Pl(e, u)
      , b = ["label", "hint", "example", "hint_md"].reduce((h,v)=>({
        ...h,
        [v]: i(e[v])
    }), {})
      , E = {
        editable: p,
        value: m.value,
        origin: u && u.origin,
        immutable: !p && l,
        ...b
    };
    return {
        ...e,
        ...E
    }
}
function Nl(e) {
    return e.state
}
function Ga(e, t, n) {
    return (e.fields || []).reduce((r,a)=>({
        ...r,
        [a.key]: a
    }), {})
}
function $l(e, t, n, r, a) {
    const i = Ga(e);
    return ((t.elements || []).reduce((c,l)=>{
        const u = r(l);
        return u && (c = [...c || [], ...u]),
        c
    }
    , null) || []).map(c=>za(c, e, t, n, i, a))
}
function Vl(e) {
    return Da(e, Si)
}
function Bn(e, t, n, r) {
    const a = e == null ? void 0 : e[t];
    return typeof a == "string" ? a : (a == null ? void 0 : a[n]) || r
}
function Kr(e, t) {
    const n = Vl(e)
      , r = Bn(n, "captionLeft", t)
      , a = Bn(n, "title", t)
      , i = Bn(n, "serviceName", t);
    return {
        title: [r, a, i].filter(Boolean).join(" - "),
        serviceName: n.serviceName,
        serviceURL: n.serviceURL,
        serviceLogo: n.serviceLogo,
        serviceLogoURL: n.serviceLogoURL,
        footerTop: n.footerTop,
        footerLogo: n.footerLogo,
        footerLogoURL: n.footerLogoURL,
        footerLogoText: n.footerLogoText,
        footerContent: n.footerContent,
        termsURL: n.termsURL,
        termsTitle: n.termsTitle
    }
}
function jl(e, t) {
    const n = e.template.site || {}
      , r = Ie();
    if (e.step_info)
        return Kr(e.step_info, t);
    if (e.template.steps_spec)
        try {
            const a = e.template.steps_spec
              , i = a["steps-order"].split(" ")[0];
            let c = a.steps[i + ":" + r.name];
            return c || (c = a.steps[i]),
            Kr(c)
        } catch (a) {
            console.error(a)
        }
    return n
}
function qa(e) {
    if (!e.steps)
        throw new Error("Invalid template format (missing steps metadata).");
    return e.steps
}
function Wa(e) {
    return qa(e).reduce((n,r)=>({
        ...n,
        [r.key]: r
    }), {})
}
function Ka(e, t, n, r) {
    return Wa(e.template)[n] || {}
}
function fr(e, t, n, r, a) {
    const i = t.template
      , c = f.useMemo(()=>e || i.fields || null, [e, i.fields])
      , l = Ga(t);
    return f.useMemo(()=>c ? c.map(u=>za(u, t, n, r, l, a)) : null, [c, t, i, a, l])
}
function Ul(e, t, n) {
    return t ? t.elements || [] : []
}
function Xr(e, t, n) {
    return ["PAGE_TITLE", {
        title: e,
        captionLeft: t
    }]
}
function Bl(e, t) {
    var y;
    const n = []
      , r = e.consent_method === "otp"
      , a = [Xr({
        el: "${document.template.shortname}"
    }, {
        el: "${document.template.refname}"
    })];
    if (e.text) {
        const b = ["CARD", {
            elements: [["TEXT", {
                content: {
                    el: e.text
                }
            }]]
        }];
        a.push(b)
    }
    a.push(["ACTIONS_CONTAINER", {
        elements: [["DOCUMENT_STEP_ACTION", {
            step: "create"
        }]]
    }]);
    const i = {
        key: "template",
        states: ["new"],
        elements: a
    };
    n.push(i);
    const c = e.requireGSIS ? "/login?provider=gsis&template=" + e.refname : "/login?template=" + e.refname
      , l = ["firstname", "surname", "afm"];
    r && l.push("mobile_certified_display");
    const u = e.intro_step || ((y = e.steps_spec) == null ? void 0 : y["intro-step"]) || null
      , d = u && Oi("create", u, {
        fields: [],
        state: "new",
        template: e
    }, "creator");
    d && (d.states = ["new"]);
    const p = {
        key: "create",
        states: ["new"],
        requireUser: !0,
        requireMobileConsent: r,
        loginURL: c,
        elements: [Xr({
            el: "Επισκόπηση των στοιχείων σας"
        }, {
            el: "${document.template.shortname}"
        }), ["TEXT", {
            content: {
                el: "Επιβεβαιώστε ότι τα παρακάτω στοιχεία, με τα οποία έχετε συνδεθεί, είναι σωστά."
            }
        }], ["PERSONAL_DETAILS", {
            keys: l
        }], ["ACTIONS_CONTAINER", {
            elements: [[e.collectable ? "DOCUMENT_COLLECT_ACTION" : "DOCUMENT_CREATE_ACTION"]]
        }]]
    };
    let m;
    if (n.push(d ? d[0] : p),
    e.collectable) {
        const b = {
            ...m,
            key: "ui-form"
        };
        n.push(b)
    }
    return {
        ...e,
        i18nKey: "application",
        steps: n
    }
}
function Xa(e, t, n) {
    const r = "templates";
    e = e != null ? e : !1;
    const a = fn({
        resource: r,
        id: e,
        consume: e && t,
        suspense: n
    });
    a.data && a.data.steps_spec && a.data.steps_spec.collectable && (a.data.collectable = !0);
    const i = f.useMemo(()=>a.data && Bl(a.data), [a.data]);
    return {
        ...a,
        data: i
    }
}
function Yl(e, t, n, r, a, i) {
    const c = fr(e, t, n, r, a);
    return f.useMemo(()=>c.reduce((l,u)=>({
        ...l,
        [u.key]: i ? i(u, u.value, t) : u.value || u["default-value"]
    }), {}), [e, c])
}
function Hl(e) {
    var n, r, a, i, c, l, u, d, p, m, y, b, E, g, h;
    let t = (a = (r = (n = e.display) == null ? void 0 : n.default) == null ? void 0 : r.el) == null ? void 0 : a.component;
    return t || (t = (c = (i = e.display) == null ? void 0 : i.default) == null ? void 0 : c.component),
    t || (t = (d = (u = (l = e.display) == null ? void 0 : l.web) == null ? void 0 : u.el) == null ? void 0 : d.component),
    t || (t = (m = (p = e.display) == null ? void 0 : p.web) == null ? void 0 : m.component),
    t || (t = (E = (b = (y = e.display) == null ? void 0 : y.pdf) == null ? void 0 : b.el) == null ? void 0 : E.component),
    t || (t = (h = (g = e.display) == null ? void 0 : g.pdf) == null ? void 0 : h.component),
    t || null
}
function zl(e) {
    return e ? Ri[e] : null
}
const Gl = (e,t,n)=>{
    const r = [...e];
    return t.forEach((a,i)=>{
        typeof r[i] > "u" ? r[i] = n.cloneUnlessOtherwiseSpecified(a, n) : n.isMergeableObject(a) ? r[i] = mn(e[i], a, n) : e.indexOf(a) === -1 && r.push(a)
    }
    ),
    r
}
;
function Ja(e, t, n={}) {
    var u, d, p, m, y, b, E, g, h, v, S;
    const r = ((u = e == null ? void 0 : e.data) == null ? void 0 : u.document) || {}
      , a = ((d = e == null ? void 0 : e.data) == null ? void 0 : d["document-pdf"]) || null;
    let i = r.step;
    if (r.scope) {
        const O = "".concat(r.step, ":").concat(r.scope);
        (p = t == null ? void 0 : t.steps_spec) != null && p.steps[O] && (i = O)
    }
    const c = {
        id: parseInt(r["declaration-id"]),
        template: t,
        step_info: {},
        step_name: i,
        template_id: t == null ? void 0 : t.id,
        case_id: r.case_id,
        is_official: r.is_official,
        state: r.state,
        user_display_name: n.userDisplayName,
        index_by_fields: n.userDisplayName,
        reference_code: r["document-id"],
        entity_id: null,
        timestamp: r.timestamp,
        fields: []
    };
    c.step_info = {
        ...(m = t == null ? void 0 : t.steps_spec) == null ? void 0 : m.steps[i],
        fields: {}
    };
    const l = (y = t == null ? void 0 : t.steps_spec) == null ? void 0 : y.steps[i].fields;
    if (l)
        for (const O of Object.keys(l || {})) {
            const w = JSON.parse(JSON.stringify(l[O]))
              , x = Hl(w)
              , D = zl(x);
            let T = "template"
              , C = (b = w.value) != null ? b : D;
            (Object.prototype.hasOwnProperty.call(r.statements || {}, O) || Object.prototype.hasOwnProperty.call(r.attachments || {}, O)) && (C = (E = r.statements[O]) != null ? E : r.attachments[O],
            T = "document");
            const M = ((h = (g = r.displaying) == null ? void 0 : g.fields) == null ? void 0 : h[O]) || {};
            M.value && (T = "document",
            C = M.value),
            w.safe = (v = M.safe) != null ? v : w.safe,
            w.safe = (S = w.safe) != null ? S : T === "template",
            w.value = C,
            c.step_info.fields[O] = mn(w, M, {
                arrayMerge: Gl
            }),
            a && (c.step_info["document-pdf"] = a)
        }
    return c
}
function mr(e, t, n, r) {
    const a = e.template
      , i = f.useMemo(()=>a.fields, [a.fields]);
    return fr(i, e, t, n, r)
}
function Qa(e, t, n, r, a) {
    const i = Xa(e, !!e, a)
      , {name: c} = Ie()
      , l = Ke()
      , u = {
        document: {
            statements: t || {},
            attachments: {},
            template: {
                refname: e,
                "digest-sha256": ""
            }
        },
        interactive: n != null ? n : !0
    }
      , d = Le({
        resource: l,
        method: "POST",
        data: u,
        consume: r,
        suspense: a
    })
      , [p,m] = f.useState(null)
      , y = pn();
    d.data = f.useMemo(()=>{
        if (d.data && i.data && y)
            return Ja(d.data, i.data, y)
    }
    , [d.data, i.data, y, c]),
    f.useEffect(()=>{
        if (d.data) {
            const g = Xt(d.data, i.data, c);
            m(g),
            window.CREATED_DOCUMENT = d.data
        }
    }
    , [d.data]);
    function b(g) {
        m(Xt(g, i.data, c))
    }
    const E = Xt(d.data, i.data, c);
    return {
        ...d,
        document: p || E,
        mutate: b,
        fetch: d.fetch
    }
}
function rn(e) {
    const t = Nl(e)
      , n = qa(e.template);
    return f.useMemo(()=>n.filter(r=>!r.states || r.states.includes(t)).map(r=>r.key), [n, t])
}
function ql(e, t, n, r) {
    return f.useMemo(()=>$l(e, t, n, a=>a[0] === "FIELDSET" && a[1].fields.map(i=>i[1]).filter(i=>i.form), r), [t.elements, n, e, r])
}
function Za(e, t, n, r, a, i, c) {
    const l = mr(t);
    let[u,d] = f.useMemo(()=>{
        if (e === "confirm")
            return [n || {}, null];
        const D = n || {}
          , T = {}
          , C = []
          , M = l.reduce((F,P)=>({
            ...F,
            [P.key]: P
        }), {});
        Object.keys(D).forEach(F=>{
            const P = M[F] || {
                type: "string"
            }
              , J = D[F]
              , B = P.type;
            let Y = J;
            B === "attachment" && C.push({
                field_name: F,
                value: J
            }),
            J == null && (Y = ""),
            P.mode === "computed" && P.type === "string" && (Y = null),
            P.type === "rate" && (Y = Y && Y.toString()),
            P.type !== "attachment" && (M[F] === void 0 ? T[F] = Y : (T.fields || (T.fields = []),
            T.fields.push({
                field_name: F,
                value: Y
            })))
        }
        );
        let A = null;
        return C.length && (A = new FormData,
        C.forEach(F=>{
            F && F.value && F.value.file && A.append(F.field_name, F.value.file, F.value.fileName)
        }
        )),
        [n ? T : null, A || null]
    }
    , [n]);
    const [p,m] = f.useState(!1)
      , y = Ke("upload");
    let b = Ke(e);
    const E = Ke("action")
      , {name: g} = Ie();
    it(g) && ["resend_otp", "retrieve", "pdf", "share", "revoke", "send-document-link", "download-attachment", "dismiss"].includes(e) && (b = E,
    u = {
        action: e,
        object_id: "".concat(t.id),
        arguments: u || {}
    },
    e === "pdf" && (u.arguments.retrieval = "content-uri"),
    e === "download-attachment" && (u.arguments.attachment_retrieval = "content-uri"),
    e === "send-document-link" && (u.arguments.method = c.sendMethod));
    const h = Le({
        resource: y,
        id: "",
        method: "POST",
        data: d,
        query: r,
        consume: a,
        suppressErrors: i
    })
      , v = Le({
        resource: b,
        id: "",
        method: "POST",
        data: u,
        query: r,
        consume: a,
        suppressErrors: i
    })
      , S = ()=>{
        d ? h.fetch() : v.fetch(),
        m(!0)
    }
      , O = d ? "upload" : "update";
    f.useEffect(()=>{
        v.loaded && (h.loaded || !d) && (m(!1),
        x(!1))
    }
    , [v.loaded, h.loaded]);
    const [w,x] = f.useState(!1);
    if (f.useEffect(()=>{
        !w && p && h.loaded && !h.error && !v.loading ? (v.fetch(),
        x(!0)) : h.error && (m(!1),
        x(!1),
        h.reset())
    }
    , [w, p, v.loaded, h.loaded, h.error, v.loading]),
    d) {
        const D = h.loaded && (!!h.error || v.loaded)
          , T = v.error || h.error
          , C = v.data;
        return {
            ...v,
            curr: O,
            loaded: D,
            loading: p,
            error: T,
            data: C,
            fetch: S
        }
    } else
        return {
            ...v,
            curr: O,
            fetch: S
        }
}
function eo(e, t, n, r, ...a) {
    const i = Za(e, t, n, r, ...a);
    return {
        ...i,
        submit: i.fetch
    }
}
function pr(e) {
    return f.useMemo(()=>Object.keys(e.fields).map(t=>({
        key: t,
        ...e.fields[t],
        ...Da(e.fields[t])
    })), [e])
}
function Wl(e, {extendedResult: t=!1}={}) {
    if (e.length != 9)
        return t ? {
            valid: !1,
            error: "length"
        } : !1;
    if (!/^\d+$/.test(e))
        return t ? {
            valid: !1,
            error: "nan"
        } : !1;
    if (e === "0".repeat(9))
        return t ? {
            valid: !1,
            error: "zero"
        } : !1;
    const r = e.substring(0, 8).split("").reduce((c,l,u)=>c + (parseInt(l) << 8 - u), 0) % 11
      , a = parseInt(e[8])
      , i = r % 10 === a;
    return t ? i ? {
        valid: i
    } : {
        valid: i,
        error: "invalid"
    } : i
}
var ve = e=>e == null
  , Z = e=>Array.isArray(e);
const to = e=>typeof e == "object";
var ue = e=>!ve(e) && !Z(e) && to(e)
  , an = e=>ue(e) && e.nodeType === Node.ELEMENT_NODE;
const at = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit"
}
  , Jr = "value"
  , Yn = "undefined"
  , ot = {
    BLUR: "blur",
    CHANGE: "change",
    INPUT: "input"
}
  , no = "select"
  , Ne = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate"
}
  , Kl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
  , Xl = /^\w*$/
  , Jl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
  , Ql = /\\(\\)?/g;
function Zl({field: {ref: e}, handleChange: t, isRadioOrCheckbox: n}) {
    an(e) && t && (e.addEventListener(n ? ot.CHANGE : ot.INPUT, t),
    e.addEventListener(ot.BLUR, t))
}
var vn = e=>!Z(e) && (Xl.test(e) || !Kl.test(e))
  , ro = e=>{
    const t = [];
    return e.replace(Jl, (n,r,a,i)=>{
        t.push(a ? i.replace(Ql, "$1") : r || n)
    }
    ),
    t
}
;
function nt(e, t, n) {
    let r = -1;
    const a = vn(t) ? [t] : ro(t)
      , i = a.length
      , c = i - 1;
    for (; ++r < i; ) {
        const l = a[r];
        let u = n;
        if (r !== c) {
            const d = e[l];
            u = ue(d) || Z(d) ? d : isNaN(+a[r + 1]) ? {} : []
        }
        e[l] = u,
        e = e[l]
    }
    return e
}
var We = e=>Object.entries(e).reduce((t,[n,r])=>vn(n) ? Object.assign(Object.assign({}, t), {
    [n]: r
}) : (nt(t, n, r),
t), {})
  , le = e=>e === void 0
  , Q = (e,t,n)=>{
    const r = t.split(/[,[\].]+?/).filter(Boolean).reduce((a,i)=>ve(a) ? a : a[i], e);
    return le(r) || r === e ? le(e[t]) ? n : e[t] : r
}
  , ec = (e,t)=>{
    for (const n in e)
        if (Q(t, n)) {
            const r = e[n];
            if (r) {
                if (r.ref.focus) {
                    r.ref.focus();
                    break
                } else if (r.options) {
                    r.options[0].ref.focus();
                    break
                }
            }
        }
}
  , Qr = (e,t)=>{
    an(e) && e.removeEventListener && (e.removeEventListener(ot.INPUT, t),
    e.removeEventListener(ot.CHANGE, t),
    e.removeEventListener(ot.BLUR, t))
}
  , It = e=>e.type === "radio"
  , Ft = e=>e.type === "checkbox";
function on(e) {
    return e ? !(e instanceof HTMLElement) || e.nodeType === Node.DOCUMENT_NODE ? !1 : on(e.parentNode) : !0
}
var te = e=>ue(e) && !Object.keys(e).length;
function ao(e) {
    return Z(e) ? e : ro(e)
}
function tc(e, t) {
    const n = vn(t) ? [t] : ao(t)
      , r = t.length;
    let a = 0;
    for (; a < r; )
        e = le(e) ? a++ : e[n[a++]];
    return a == r ? e : void 0
}
function nc(e, t, n) {
    let r = -1
      , a = e.length;
    n = n > a ? a : n,
    n < 0 && (n += a),
    a = t > n ? 0 : n - t;
    const i = Array(a);
    for (; ++r < a; )
        i[r] = e[r + t];
    return i
}
function rc(e, t) {
    return t.length == 1 ? e : tc(e, nc(t, 0, -1))
}
function ac(e, t) {
    const n = vn(t) ? [t] : ao(t)
      , r = rc(e, n)
      , a = n[n.length - 1]
      , i = r == null || delete r[a];
    let c;
    for (let l = 0; l < n.slice(0, -1).length; l++) {
        let u = -1, d;
        const p = n.slice(0, -(l + 1))
          , m = p.length - 1;
        for (l > 0 && (c = e); ++u < p.length; ) {
            const y = p[u];
            d = d ? d[y] : e[y],
            m === u && (ue(d) && te(d) || Z(d) && !d.filter(b=>ue(b) && !te(b)).length) && (c ? delete c[y] : delete e[y]),
            c = d
        }
    }
    return i
}
function tt(e, t) {
    return t.forEach(n=>{
        ac(e, n)
    }
    ),
    e
}
const Zr = (e,t)=>e && e.ref === t;
function oc(e, t, n, r) {
    const {ref: a, ref: {name: i, type: c}, mutationWatcher: l} = n
      , u = e[i];
    if (!c) {
        delete e[i];
        return
    }
    if ((It(a) || Ft(a)) && u) {
        const {options: d} = u;
        Z(d) && d.length ? (d.filter(Boolean).forEach((p,m)=>{
            const {ref: y, mutationWatcher: b} = p;
            (y && on(y) && Zr(p, y) || r) && (Qr(y, t),
            b && b.disconnect(),
            tt(d, ["[".concat(m, "]")]))
        }
        ),
        d && !d.filter(Boolean).length && delete e[i]) : delete e[i]
    } else
        (on(a) && Zr(u, a) || r) && (Qr(a, t),
        l && l.disconnect(),
        delete e[i])
}
const ea = {
    isValid: !1,
    value: ""
};
var oo = e=>Z(e) ? e.reduce((t,n)=>n && n.ref.checked ? {
    isValid: !0,
    value: n.ref.value
} : t, ea) : ea
  , sc = e=>[...e].filter(({selected: t})=>t).map(({value: t})=>t)
  , so = e=>e.type === "file"
  , io = e=>e.type === "".concat(no, "-multiple")
  , lo = e=>e === "";
const ta = {
    value: !1,
    isValid: !1
}
  , na = {
    value: !0,
    isValid: !0
};
var co = e=>{
    if (Z(e)) {
        if (e.length > 1) {
            const a = e.filter(i=>i && i.ref.checked).map(({ref: {value: i}})=>i);
            return {
                value: a,
                isValid: !!a.length
            }
        }
        const {checked: t, value: n, attributes: r} = e[0].ref;
        return t ? r && !le(r.value) ? le(n) || lo(n) ? na : {
            value: n,
            isValid: !0
        } : na : ta
    }
    return ta
}
;
function Rt(e, t) {
    const {name: n, value: r} = t
      , a = e[n];
    return so(t) ? t.files : It(t) ? a ? oo(a.options).value : "" : io(t) ? sc(t.options) : Ft(t) ? a ? co(a.options).value : !1 : r
}
var ke = e=>typeof e == "string"
  , Ot = (e,t)=>{
    const n = {};
    for (const r in e)
        (le(t) || (ke(t) ? r.startsWith(t) : Z(t) ? t.find(a=>r.startsWith(a)) : t && t.nest)) && (n[r] = Rt(e, e[r].ref));
    return n
}
  , ic = (e={},t={})=>{
    const n = Object.keys(e)
      , r = Object.keys(t);
    return n.length === r.length && n.every(a=>t[a] && t[a] === e[a])
}
  , qn = (e,{type: t, types: n, message: r})=>ue(e) && e.type === t && e.message === r && ic(e.types, n);
function lc({errors: e, name: t, error: n, validFields: r, fieldsWithValidation: a}) {
    const i = te(n)
      , c = te(e)
      , l = Q(n, t)
      , u = Q(e, t);
    return i && r.has(t) || u && u.isManual ? !1 : c !== i || !c && !u || i && a.has(t) && !r.has(t) ? !0 : l && !qn(u, l)
}
var uo = e=>e instanceof RegExp
  , ft = e=>(n=>ue(n) && !uo(n))(e) ? e : {
    value: e,
    message: ""
}
  , fo = e=>typeof e == "function"
  , _n = e=>typeof e == "boolean"
  , Wn = e=>ke(e) || ue(e) && f.isValidElement(e);
function ra(e, t, n="validate") {
    if (Wn(e) || _n(e) && !e)
        return {
            type: n,
            message: Wn(e) ? e : "",
            ref: t
        }
}
var mo = (e,t,n,r,a)=>{
    if (t) {
        const i = n[e];
        return Object.assign(Object.assign({}, i), {
            types: Object.assign(Object.assign({}, i && i.types ? i.types : {}), {
                [r]: a || !0
            })
        })
    }
    return {}
}
  , Ht = async(e,t,{ref: n, ref: {type: r, value: a, name: i}, options: c, required: l, maxLength: u, minLength: d, min: p, max: m, pattern: y, validate: b})=>{
    var E;
    const g = e.current
      , h = {}
      , v = It(n)
      , S = Ft(n)
      , O = v || S
      , w = lo(a)
      , x = mo.bind(null, i, t, h)
      , D = (T,C,M,L=Ne.maxLength,A=Ne.minLength)=>{
        const F = T ? C : M;
        if (h[i] = Object.assign({
            type: T ? L : A,
            message: F,
            ref: n
        }, x(T ? L : A, F)),
        !t)
            return h
    }
    ;
    if (l && (!v && !S && (w || ve(a)) || _n(a) && !a || S && !co(c).isValid || v && !oo(c).isValid)) {
        const {value: T, message: C} = Wn(l) ? {
            value: !!l,
            message: l
        } : ft(l);
        if (T && (h[i] = Object.assign({
            type: Ne.required,
            message: C,
            ref: O ? (E = g[i].options) === null || E === void 0 ? void 0 : E[0].ref : n
        }, x(Ne.required, C)),
        !t))
            return h
    }
    if (!ve(p) || !ve(m)) {
        let T, C;
        const {value: M, message: L} = ft(m)
          , {value: A, message: F} = ft(p);
        if (r === "number" || !r && !isNaN(a)) {
            const P = n.valueAsNumber || parseFloat(a);
            ve(M) || (T = P > M),
            ve(A) || (C = P < A)
        } else {
            const P = n.valueAsDate || new Date(a);
            ke(M) && (T = P > new Date(M)),
            ke(A) && (C = P < new Date(A))
        }
        if ((T || C) && (D(!!T, L, F, Ne.max, Ne.min),
        !t))
            return h
    }
    if (ke(a) && !w && (u || d)) {
        const {value: T, message: C} = ft(u)
          , {value: M, message: L} = ft(d)
          , A = a.toString().length
          , F = !ve(T) && A > T
          , P = !ve(M) && A < M;
        if ((F || P) && (D(!!F, C, L),
        !t))
            return h
    }
    if (y && !w) {
        const {value: T, message: C} = ft(y);
        if (uo(T) && !T.test(a) && (h[i] = Object.assign({
            type: Ne.pattern,
            message: C,
            ref: n
        }, x(Ne.pattern, C)),
        !t))
            return h
    }
    if (b) {
        const T = Rt(g, n)
          , C = O && c ? c[0].ref : n;
        if (fo(b)) {
            const M = await b(T)
              , L = ra(M, C);
            if (L && (h[i] = Object.assign(Object.assign({}, L), x(Ne.validate, L.message)),
            !t))
                return h
        } else if (ue(b)) {
            let M = {};
            for (const [L,A] of Object.entries(b)) {
                if (!te(M) && !t)
                    break;
                const F = await A(T)
                  , P = ra(F, C, L);
                P && (M = Object.assign(Object.assign({}, P), x(L, P.message)),
                t && (h[i] = M))
            }
            if (!te(M) && (h[i] = Object.assign({
                ref: C
            }, M),
            !t))
                return h
        }
    }
    return h
}
;
const cc = (e,t)=>Z(e.inner) ? e.inner.reduce((n,{path: r, message: a, type: i})=>Object.assign(Object.assign({}, n), r ? n[r] && t ? {
    [r]: mo(r, t, n, i, a)
} : {
    [r]: n[r] || Object.assign({
        message: a,
        type: i
    }, t ? {
        types: {
            [i]: a || !0
        }
    } : {})
} : {}), {}) : {
    [e.path]: {
        message: e.message,
        type: e.type
    }
};
async function zt(e, t, n, r, a) {
    if (r)
        return r(n, a);
    try {
        return {
            values: await e.validate(n, {
                abortEarly: !1,
                context: a
            }),
            errors: {}
        }
    } catch (i) {
        return {
            values: {},
            errors: We(cc(i, t))
        }
    }
}
var yr = e=>ve(e) || !to(e);
const po = (e,t)=>{
    const n = (r,a,i)=>{
        const c = i ? "".concat(e, ".").concat(a) : "".concat(e, "[").concat(a, "]");
        return yr(r) ? c : po(c, r)
    }
    ;
    return Z(t) ? t.map((r,a)=>n(r, a)) : Object.entries(t).map(([r,a])=>n(a, r, !0))
}
;
var uc = (e,t)=>po(e, t).flat(1 / 0)
  , aa = (e,t,n,r,a)=>{
    let i;
    return n.add(t),
    te(e) ? i = void 0 : le(e[t]) ? (i = Q(We(e), t),
    le(i) || uc(t, i).forEach(c=>n.add(c))) : (i = e[t],
    n.add(t)),
    le(i) ? a ? r : Q(r, t) : i
}
  , yo = ({isOnChange: e, hasError: t, isBlurEvent: n, isOnSubmit: r, isReValidateOnSubmit: a, isOnBlur: i, isReValidateOnBlur: c, isSubmitted: l})=>e && n || r && a || r && !l || i && !n && !t || c && !n && t || a && l
  , dc = e=>e.substring(0, e.indexOf("["))
  , Hn = (e,t)=>{
    const n = We(Ot(e));
    return t ? Q(n, t, n) : n
}
;
function fc(e, t) {
    let n = !1;
    if (!Z(e) || !Z(t) || e.length !== t.length)
        return !0;
    for (let r = 0; r < e.length && !n; r++) {
        const a = e[r]
          , i = t[r];
        if (le(i) || Object.keys(a).length !== Object.keys(i).length) {
            n = !0;
            break
        }
        for (const c in a)
            if (a[c] !== i[c]) {
                n = !0;
                break
            }
    }
    return n
}
const mc = (e,t)=>RegExp("^".concat(t, "[\\d+]").replace(/\[/g, "\\[").replace(/\]/g, "\\]")).test(e);
var Dt = (e,t)=>[...e].some(n=>mc(t, n))
  , pc = e=>e.type === "".concat(no, "-one");
function yc(e, t) {
    const n = new MutationObserver(()=>{
        on(e) && (n.disconnect(),
        t())
    }
    );
    return n.observe(window.document, {
        childList: !0,
        subtree: !0
    }),
    n
}
var oa = e=>({
    isOnSubmit: !e || e === at.onSubmit,
    isOnBlur: e === at.onBlur,
    isOnChange: e === at.onChange
})
  , sa = e=>It(e) || Ft(e);
function gc({mode: e=at.onSubmit, reValidateMode: t=at.onChange, validationSchema: n, validationResolver: r, validationContext: a, defaultValues: i={}, submitFocusError: c=!0, validateCriteriaMode: l}={}) {
    const u = f.useRef({})
      , d = f.useRef({})
      , p = f.useRef({})
      , m = f.useRef({})
      , y = f.useRef(new Set)
      , b = f.useRef(new Set)
      , E = f.useRef(new Set)
      , g = f.useRef(new Set)
      , h = f.useRef(!0)
      , v = f.useRef(i)
      , S = f.useRef({})
      , O = f.useRef(!1)
      , w = f.useRef(!1)
      , x = f.useRef(!1)
      , D = f.useRef(!1)
      , T = f.useRef(0)
      , C = f.useRef(!1)
      , M = f.useRef()
      , L = f.useRef({})
      , A = f.useRef(a)
      , F = f.useRef(new Set)
      , [,P] = f.useState()
      , {isOnBlur: J, isOnSubmit: B, isOnChange: Y} = f.useRef(oa(e)).current
      , G = l === "all"
      , de = typeof window === Yn
      , ee = !!(n || r)
      , ae = typeof document !== Yn && !de && !le(window.HTMLElement)
      , K = ae ? "Proxy"in window : typeof Proxy !== Yn
      , ie = f.useRef({
        dirty: !K,
        dirtyFields: !K,
        isSubmitted: B,
        submitCount: !K,
        touched: !K,
        isSubmitting: !K,
        isValid: !K
    })
      , {isOnBlur: xe, isOnSubmit: Qe} = f.useRef(oa(t)).current;
    A.current = a;
    const H = f.useCallback(()=>{
        O.current || P({})
    }
    , [])
      , be = f.useCallback((_,k,R=!1)=>{
        let I = R || lc({
            errors: d.current,
            error: k,
            name: _,
            validFields: g.current,
            fieldsWithValidation: E.current
        });
        if (te(k))
            (E.current.has(_) || ee) && (g.current.add(_),
            I = I || Q(d.current, _)),
            d.current = tt(d.current, [_]);
        else {
            const N = Q(d.current, _);
            g.current.delete(_),
            I = I || (N ? !qn(N, k[_]) : !0),
            nt(d.current, _, k[_])
        }
        if (I && !ve(R))
            return H(),
            !0
    }
    , [H, ee])
      , Te = f.useCallback((_,k)=>{
        const {ref: R, options: I} = _
          , N = ae && an(R) && ve(k) ? "" : k;
        It(R) && I ? I.forEach(({ref: $})=>$.checked = $.value === N) : so(R) ? ke(N) ? R.value = N : R.files = N : io(R) ? [...R.options].forEach($=>$.selected = N.includes($.value)) : Ft(R) && I ? I.length > 1 ? I.forEach(({ref: $})=>$.checked = N.includes($.value)) : I[0].ref.checked = !!N : R.value = N
    }
    , [ae])
      , Se = f.useCallback(_=>{
        if (!u.current[_] || !ie.current.dirty && !ie.current.dirtyFields)
            return !1;
        let k = S.current[_] !== Rt(u.current, u.current[_].ref);
        const R = Dt(F.current, _)
          , I = b.current.size;
        if (R) {
            const $ = dc(_);
            k = fc(Hn(u.current, $), Q(v.current, $))
        }
        const N = (R ? D.current : b.current.has(_)) !== k;
        return k ? b.current.add(_) : b.current.delete(_),
        D.current = R ? k : !!b.current.size,
        ie.current.dirty ? N : I !== b.current.size
    }
    , [])
      , Ye = f.useCallback((_,k,R)=>{
        const I = Z(k);
        for (const N in k) {
            const $ = "".concat(R || _).concat(I ? "[".concat(N, "]") : ".".concat(N))
              , W = u.current[$];
            ue(k[N]) && Ye(_, k[N], $),
            W && (Te(W, k[N]),
            Se($))
        }
    }
    , [Te, Se])
      , oe = f.useCallback((_,k)=>{
        const R = u.current[_];
        if (R) {
            Te(R, k);
            const I = Se(_);
            if (_n(I))
                return I
        } else
            yr(k) || Ye(_, k)
    }
    , [Se, Te, Ye])
      , fe = f.useCallback(async(_,k)=>{
        const R = u.current[_];
        if (R) {
            const I = await Ht(u, G, R);
            return be(_, I, k ? null : !1),
            te(I)
        }
        return !1
    }
    , [be, G])
      , vt = f.useCallback(async _=>{
        const {errors: k} = await zt(n, G, Hn(u.current), r, A.current)
          , R = h.current;
        if (h.current = te(k),
        Z(_))
            _.forEach(I=>{
                const N = Q(k, I);
                N ? nt(d.current, I, N) : tt(d.current, [I])
            }
            ),
            H();
        else {
            const I = Q(k, _);
            be(_, I ? {
                [_]: I
            } : {}, R !== h.current)
        }
        return te(d.current)
    }
    , [H, be, G, r, n])
      , _t = f.useCallback(async _=>{
        const k = _ || Object.keys(u.current);
        if (ee)
            return vt(k);
        if (Z(k)) {
            const R = await Promise.all(k.map(async I=>await fe(I, !0)));
            return H(),
            R.every(Boolean)
        }
        return await fe(k)
    }
    , [vt, fe, H, ee])
      , jt = _=>w.current || y.current.has(_) || y.current.has((_.match(/\w+/) || [])[0]);
    function Ut(_, k, R) {
        let I = !1;
        const N = Z(_);
        (N ? _ : [_]).forEach($=>{
            const W = ke($);
            I = oe(W ? $ : Object.keys($)[0], W ? k : Object.values($)[0]) || N ? !0 : jt($)
        }
        ),
        (I || N) && H(),
        (R || N && k) && _t(N ? void 0 : _)
    }
    M.current = M.current ? M.current : async({type: _, target: k})=>{
        const R = k ? k.name : ""
          , I = u.current
          , N = d.current
          , $ = I[R]
          , W = Q(N, R);
        let me;
        if (!$)
            return;
        const X = _ === ot.BLUR
          , ut = yo({
            hasError: !!W,
            isOnChange: Y,
            isBlurEvent: X,
            isOnSubmit: B,
            isReValidateOnSubmit: Qe,
            isOnBlur: J,
            isReValidateOnBlur: xe,
            isSubmitted: x.current
        })
          , dt = Se(R);
        let Ae = jt(R) || dt;
        if (X && !Q(p.current, R) && ie.current.touched && (nt(p.current, R, !0),
        Ae = !0),
        ut)
            return Ae && H();
        if (ee) {
            const {errors: Re} = await zt(n, G, Hn(I), r, A.current)
              , jn = h.current;
            h.current = te(Re),
            me = Q(Re, R) ? {
                [R]: Q(Re, R)
            } : {},
            jn !== h.current && (Ae = !0)
        } else
            me = await Ht(u, G, $);
        !be(R, me) && Ae && H()
    }
    ;
    const He = f.useCallback((_={})=>{
        const k = te(v.current) ? Ot(u.current) : v.current;
        zt(n, G, We(Object.assign(Object.assign({}, k), _)), r, A.current).then(({errors: R})=>{
            const I = h.current;
            h.current = te(R),
            I !== h.current && H()
        }
        )
    }
    , [H, G, r])
      , Ct = f.useCallback((_,k)=>{
        M.current && _ && oc(u.current, M.current, _, k)
    }
    , [])
      , Ze = f.useCallback((_,k)=>{
        if (!_ || _ && Dt(F.current, _.ref.name) && !k)
            return;
        Ct(_, k);
        const {name: R} = _.ref;
        d.current = tt(d.current, [R]),
        p.current = tt(p.current, [R]),
        S.current = tt(S.current, [R]),
        [b, E, g, y].forEach(I=>I.current.delete(R)),
        (ie.current.isValid || ie.current.touched) && (H(),
        ee && He())
    }
    , [H, ee, He, Ct]);
    function Bt(_) {
        _ ? tt(d.current, Z(_) ? _ : [_]) : d.current = {},
        H()
    }
    const Tt = ({name: _, type: k, types: R, message: I, shouldRender: N})=>{
        const $ = u.current[_];
        qn(Q(d.current, _), {
            type: k,
            message: I,
            types: R
        }) || (nt(d.current, _, {
            type: k,
            types: R,
            message: I,
            ref: $ ? $.ref : {},
            isManual: !0
        }),
        N && H())
    }
    ;
    function Yt(_, k="", R) {
        ke(_) ? Tt(Object.assign(Object.assign({
            name: _
        }, ue(k) ? {
            types: k,
            type: ""
        } : {
            type: k,
            message: R
        }), {
            shouldRender: !0
        })) : Z(_) && (_.forEach(I=>Tt(Object.assign({}, I))),
        H())
    }
    function q(_, k) {
        const R = y.current
          , I = le(k)
          , N = I ? v.current : k
          , $ = Ot(u.current, _);
        if (ke(_))
            return aa($, _, R, I ? Q(N, _) : k, !0);
        if (Z(_))
            return _.reduce((me,X)=>Object.assign(Object.assign({}, me), {
                [X]: aa($, X, R, N)
            }), {});
        w.current = !0;
        const W = !te($) && $ || N;
        return _ && _.nest ? We(W) : W
    }
    function Oe(_) {
        u.current && (Z(_) ? _ : [_]).forEach(k=>Ze(u.current[k], !0))
    }
    function he(_, k={}) {
        if (!_.name)
            return console.warn("Missing name @", _);
        const {name: R, type: I, value: N} = _
          , $ = Object.assign({
            ref: _
        }, k)
          , W = u.current
          , me = sa(_);
        let X = W[R], ut = !0, dt, Ae;
        if (me ? X && Z(X.options) && X.options.filter(Boolean).find(Re=>N === Re.ref.value && Re.ref === _) : X && _ === X.ref) {
            W[R] = Object.assign(Object.assign({}, X), k);
            return
        }
        if (I) {
            const Re = yc(_, ()=>Ze(X));
            X = me ? Object.assign({
                options: [...X && X.options || [], {
                    ref: _,
                    mutationWatcher: Re
                }],
                ref: {
                    type: I,
                    name: R
                }
            }, k) : Object.assign(Object.assign({}, $), {
                mutationWatcher: Re
            })
        } else
            X = $;
        W[R] = X,
        te(v.current) || (Ae = Q(v.current, R),
        ut = le(Ae),
        dt = Dt(F.current, R),
        !ut && !dt && Te(X, Ae)),
        ee && !dt && ie.current.isValid ? He() : te(k) || (E.current.add(R),
        !B && ie.current.isValid && Ht(u, G, X).then(Re=>{
            const jn = h.current;
            te(Re) ? g.current.add(R) : h.current = !1,
            jn !== h.current && H()
        }
        )),
        !S.current[R] && !(dt && ut) && (S.current[R] = ut ? Rt(W, X.ref) : Ae),
        I && Zl({
            field: me && X.options ? X.options[X.options.length - 1] : X,
            isRadioOrCheckbox: me || pc(_),
            handleChange: M.current
        })
    }
    function Ee(_, k) {
        if (!de) {
            if (ke(_)) {
                he({
                    name: _
                }, k);
                return
            }
            if (ue(_) && "name"in _) {
                he(_, k);
                return
            }
            return R=>R && he(R, _)
        }
    }
    const et = f.useCallback(_=>async k=>{
        k && (k.preventDefault(),
        k.persist());
        let R = {};
        const I = u.current;
        let N = Ot(I);
        ie.current.isSubmitting && (C.current = !0,
        H());
        try {
            if (ee) {
                const {errors: $, values: W} = await zt(n, G, We(N), r, A.current);
                d.current = $,
                R = $,
                N = W
            } else
                for (const $ of Object.values(I))
                    if ($) {
                        const {ref: {name: W}} = $
                          , me = await Ht(u, G, $);
                        me[W] ? (nt(R, W, me[W]),
                        g.current.delete(W)) : E.current.has(W) && g.current.add(W)
                    }
            te(R) ? (d.current = {},
            H(),
            await _(We(N), k)) : (d.current = R,
            c && ae && ec(I, R))
        } finally {
            x.current = !0,
            C.current = !1,
            T.current = T.current + 1,
            H()
        }
    }
    , [ae, H, ee, c, G, r, n])
      , vi = ({errors: _, dirty: k, isSubmitted: R, touched: I, isValid: N, submitCount: $, dirtyFields: W})=>{
        u.current = {},
        _ || (d.current = {}),
        I || (p.current = {}),
        N || (g.current = new Set,
        E.current = new Set,
        h.current = !0),
        k || (D.current = !1),
        W || (b.current = new Set),
        R || (x.current = !1),
        $ || (T.current = 0),
        S.current = {},
        m.current = {},
        y.current = new Set,
        w.current = !1
    }
      , _i = (_,k={})=>{
        if (ae) {
            for (const R of Object.values(u.current))
                if (R) {
                    const {ref: I, options: N} = R
                      , $ = sa(I) && Z(N) ? N[0].ref : I;
                    if (an($))
                        try {
                            $.closest("form").reset();
                            break
                        } catch {}
                }
        }
        _ && (v.current = _),
        Object.values(L.current).forEach(R=>fo(R) && R()),
        vi(k),
        H()
    }
    ;
    function Ci(_) {
        if (ke(_))
            return u.current[_] ? Rt(u.current, u.current[_].ref) : Q(v.current, _);
        const k = Ot(u.current)
          , R = te(k) ? v.current : k;
        return _ && _.nest ? We(R) : R
    }
    f.useEffect(()=>()=>{
        O.current = !0,
        u.current && Object.values(u.current).forEach(_=>Ze(_, !0))
    }
    , [Ze]),
    ee || (h.current = g.current.size >= E.current.size && te(d.current));
    const Ur = {
        dirty: D.current,
        dirtyFields: b.current,
        isSubmitted: x.current,
        submitCount: T.current,
        touched: p.current,
        isSubmitting: C.current,
        isValid: B ? x.current && te(d.current) : h.current
    }
      , Br = {
        triggerValidation: _t,
        setValue: f.useCallback(Ut, [H, oe, _t]),
        register: f.useCallback(Ee, [v.current, S.current]),
        unregister: f.useCallback(Oe, []),
        getValues: f.useCallback(Ci, []),
        formState: K ? new Proxy(Ur,{
            get: (_,k)=>{
                if (k in _)
                    return ie.current[k] = !0,
                    _[k]
            }
        }) : Ur
    }
      , Ti = Object.assign(Object.assign(Object.assign({
        removeFieldEventListener: Ct,
        reRender: H
    }, ee ? {
        validateSchemaIsValid: He
    } : {}), {
        mode: {
            isOnBlur: J,
            isOnSubmit: B,
            isOnChange: Y
        },
        reValidateMode: {
            isReValidateOnBlur: xe,
            isReValidateOnSubmit: Qe
        },
        errorsRef: d,
        touchedFieldsRef: p,
        fieldsRef: u,
        isWatchAllRef: w,
        watchFieldsRef: y,
        resetFieldArrayFunctionRef: L,
        fieldArrayDefaultValues: m,
        validFieldsRef: g,
        dirtyFieldsRef: b,
        fieldsWithValidationRef: E,
        fieldArrayNamesRef: F,
        isDirtyRef: D,
        readFormStateRef: ie,
        defaultValuesRef: v
    }), Br);
    return Object.assign({
        watch: q,
        control: Ti,
        handleSubmit: et,
        reset: f.useCallback(_i, []),
        clearError: f.useCallback(Bt, []),
        setError: f.useCallback(Yt, []),
        errors: d.current
    }, Br)
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function bc(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
    return n
}
const hc = f.createContext(null);
function Ec() {
    return f.useContext(hc)
}
var vc = (e,t)=>yr(e) || !ue(e.target) || ue(e.target) && !e.type ? e : t || le(e.target.value) ? e.target.checked : e.target.value;
const _c = e=>{
    var {name: t, rules: n, as: r, onBlur: a, onChange: i, onChangeName: c=at.onChange, onBlurName: l=at.onBlur, valueName: u, defaultValue: d, control: p, onFocus: m} = e
      , y = bc(e, ["name", "rules", "as", "onBlur", "onChange", "onChangeName", "onBlurName", "valueName", "defaultValue", "control", "onFocus"]);
    const b = Ec()
      , {defaultValuesRef: E, setValue: g, register: h, unregister: v, errorsRef: S, removeFieldEventListener: O, triggerValidation: w, mode: {isOnSubmit: x, isOnBlur: D, isOnChange: T}, reValidateMode: {isReValidateOnBlur: C, isReValidateOnSubmit: M}, formState: {isSubmitted: L}, touchedFieldsRef: A, readFormStateRef: F, reRender: P, fieldsRef: J, fieldArrayNamesRef: B} = p || b.control
      , [Y,G] = f.useState(le(d) ? Q(E.current, t) : d)
      , de = f.useRef(Y)
      , ee = _n(Y)
      , ae = D || C
      , K = f.useRef(n)
      , ie = f.useRef(m)
      , xe = !Dt(B.current, t);
    K.current = n;
    const Qe = ()=>!yo({
        hasError: !!Q(S.current, t),
        isOnBlur: D,
        isOnSubmit: x,
        isOnChange: T,
        isReValidateOnBlur: C,
        isReValidateOnSubmit: M,
        isSubmitted: L
    })
      , H = oe=>{
        const fe = vc(oe, ee);
        return G(fe),
        de.current = fe,
        fe
    }
      , be = oe=>(...fe)=>g(t, H(oe(fe)), Qe())
      , Te = oe=>{
        const fe = H(oe);
        g(t, fe, Qe())
    }
      , Se = f.useCallback(()=>{
        xe || O(J.current[t], !0),
        h(Object.defineProperty({
            name: t,
            focus: ie.current
        }, Jr, {
            set(oe) {
                G(oe),
                de.current = oe
            },
            get() {
                return de.current
            }
        }), K.current)
    }
    , [xe, J, K, t, ie, h, O]);
    f.useEffect(()=>()=>{
        !Dt(B.current, t) && v(t)
    }
    , [v, t, B]),
    f.useEffect(()=>{
        Se()
    }
    , [Se]),
    f.useEffect(()=>{
        J.current[t] || (Se(),
        xe && G(le(d) ? Q(E.current, t) : d))
    }
    );
    const Ye = Object.assign(Object.assign(Object.assign(Object.assign({
        name: t
    }, y), i ? {
        [c]: be(i)
    } : {
        [c]: Te
    }), {
        [l]: (...oe)=>{
            a && a(oe),
            F.current.touched && !Q(A.current, t) && (nt(A.current, t, !0),
            P()),
            ae && w(t)
        }
    }), {
        [u || (ee ? "checked" : Jr)]: Y
    });
    return f.isValidElement(r) ? f.cloneElement(r, Ye) : f.createElement(r, Ye)
}
  , Cc = [{
    find: "άἀἁἂἃἄἅἆἇὰάᾀᾁᾂᾃᾄᾅᾆᾇᾰᾱᾲᾳᾴᾶᾷ",
    replace: "α"
}, {
    find: "ΆἈἉἊἋἌἍἎἏᾈᾉᾊᾋᾌᾍᾎᾏᾸᾹᾺΆᾼ",
    replace: "Α"
}, {
    find: "έἐἑἒἓἔἕὲέ",
    replace: "ε"
}, {
    find: "ΈἘἙἚἛἜἝ",
    replace: "Ε"
}, {
    find: "ήἠἡἢἣἤἥἦἧῆὴῇ",
    replace: "η"
}, {
    find: "ΉἨἩἪἫἬἭἮἯ",
    replace: "Η"
}, {
    find: "ίἰἱἲἳἴἵὶῖ",
    replace: "ι"
}, {
    find: "ΊἶἷἸἹἺἻἼἽἾἿ",
    replace: "Ι"
}, {
    find: "όὀὁὂὃὄὅὸ",
    replace: "ο"
}, {
    find: "ΌὈὉὊὋὌὍ",
    replace: "Ο"
}, {
    find: "ύὐὑὒὓὔὕὖὗ",
    replace: "υ"
}, {
    find: "ΎὙὛὝὟ",
    replace: "Υ"
}, {
    find: "ώὠὡὢὣὤὥὦὧῶ",
    replace: "ω"
}, {
    find: "ΏὨὩὪὫὬὭὮὯ",
    replace: "Ω"
}];
var Tc = Cc;
const Sc = [{
    find: "tha",
    replace: "θα"
}, {
    find: "the",
    replace: "θε"
}, {
    find: "thi",
    replace: "θι"
}, {
    find: "thh",
    replace: "θη"
}, {
    find: "tho",
    replace: "θο"
}, {
    find: "(thy|thu)",
    replace: "θυ"
}, {
    find: "(thw|thv)",
    replace: "θω"
}, {
    find: "tH",
    replace: "τΗ"
}, {
    find: "TH",
    replace: "ΤΗ"
}, {
    find: "Th",
    replace: "Τη"
}, {
    find: "th",
    replace: "τη"
}, {
    find: "(cH|ch)",
    replace: "χ"
}, {
    find: "(CH|Ch)",
    replace: "Χ"
}, {
    find: "(PS|Ps)",
    replace: "Ψ"
}, {
    find: "(ps|pS)",
    replace: "ψ"
}, {
    find: "(Ks|KS)",
    replace: "Ξ"
}, {
    find: "(ks|kS)",
    replace: "ξ"
}, {
    find: "(VR)",
    replace: "ΒΡ"
}, {
    find: "(vr|vR)",
    replace: "βρ"
}, {
    find: "(Vr)",
    replace: "Βρ"
}, {
    find: "8a",
    replace: "θα"
}, {
    find: "8e",
    replace: "θε"
}, {
    find: "8h",
    replace: "θη"
}, {
    find: "8i",
    replace: "θι"
}, {
    find: "8o",
    replace: "θο"
}, {
    find: "8y",
    replace: "θυ"
}, {
    find: "8u",
    replace: "θυ"
}, {
    find: "(8v|8w)",
    replace: "θω"
}, {
    find: "8A",
    replace: "ΘΑ"
}, {
    find: "8E",
    replace: "ΘΕ"
}, {
    find: "8H",
    replace: "ΘΗ"
}, {
    find: "8I",
    replace: "ΘΙ"
}, {
    find: "8O",
    replace: "ΘΟ"
}, {
    find: "(8Y|8U)",
    replace: "ΘΥ"
}, {
    find: "8V",
    replace: "ΘΩ"
}, {
    find: "8W",
    replace: "ΘΩ"
}, {
    find: "9a",
    replace: "θα"
}, {
    find: "9e",
    replace: "θε"
}, {
    find: "9h",
    replace: "θη"
}, {
    find: "9i",
    replace: "θι"
}, {
    find: "9o",
    replace: "θο"
}, {
    find: "9y",
    replace: "θυ"
}, {
    find: "9u",
    replace: "θυ"
}, {
    find: "(9v|9w)",
    replace: "θω"
}, {
    find: "9A",
    replace: "ΘΑ"
}, {
    find: "9E",
    replace: "ΘΕ"
}, {
    find: "9H",
    replace: "ΘΗ"
}, {
    find: "9I",
    replace: "ΘΙ"
}, {
    find: "9O",
    replace: "ΘΟ"
}, {
    find: "(9Y|9U)",
    replace: "ΘΥ"
}, {
    find: "9V",
    replace: "ΘΩ"
}, {
    find: "9W",
    replace: "ΘΩ"
}, {
    find: "s[\\n]",
    replace: "ς\n"
}, {
    find: "s[\\!]",
    replace: "ς!"
}, {
    find: "s[\\.]",
    replace: "ς."
}, {
    find: "s[\\ ]",
    replace: "ς "
}, {
    find: "s[\\,]",
    replace: "ς,"
}, {
    find: "s[\\+]",
    replace: "ς+"
}, {
    find: "s[\\-]",
    replace: "ς-"
}, {
    find: "s[\\(]",
    replace: "ς("
}, {
    find: "s[\\)]",
    replace: "ς)"
}, {
    find: "s[\\[]",
    replace: "ς["
}, {
    find: "s[\\]]",
    replace: "ς]"
}, {
    find: "s[\\{]",
    replace: "ς{"
}, {
    find: "s[\\}]",
    replace: "ς}"
}, {
    find: "s[\\<]",
    replace: "ς<"
}, {
    find: "s[\\>]",
    replace: "ς>"
}, {
    find: "s[\\?]",
    replace: "ς;"
}, {
    find: "s[\\/]",
    replace: "ς/"
}, {
    find: "s[\\:]",
    replace: "ς:"
}, {
    find: "s[\\;]",
    replace: "ς;"
}, {
    find: 's[\\"]',
    replace: 'ς"'
}, {
    find: "s[\\']",
    replace: "ς'"
}, {
    find: "s[\\f]",
    replace: "ς\f"
}, {
    find: "s[\\r]",
    replace: "ς\r"
}, {
    find: "s[\\t]",
    replace: "ς	"
}, {
    find: "s[\\v]",
    replace: "ς\v"
}, {
    find: "rx",
    replace: "ρχ"
}, {
    find: "sx",
    replace: "σχ"
}, {
    find: "Sx",
    replace: "Σχ"
}, {
    find: "SX",
    replace: "ΣΧ"
}, {
    find: "ux",
    replace: "υχ"
}, {
    find: "Ux",
    replace: "Υχ"
}, {
    find: "UX",
    replace: "ΥΧ"
}, {
    find: "yx",
    replace: "υχ"
}, {
    find: "Yx",
    replace: "Υχ"
}, {
    find: "YX",
    replace: "ΥΧ"
}, {
    find: "3a",
    replace: "ξα"
}, {
    find: "3e",
    replace: "ξε"
}, {
    find: "3h",
    replace: "ξη"
}, {
    find: "3i",
    replace: "ξι"
}, {
    find: "3ο",
    replace: "ξο"
}, {
    find: "3u",
    replace: "ξυ"
}, {
    find: "3y",
    replace: "ξυ"
}, {
    find: "3v",
    replace: "ξω"
}, {
    find: "3w",
    replace: "ξω"
}, {
    find: "a3",
    replace: "αξ"
}, {
    find: "e3",
    replace: "εξ"
}, {
    find: "h3",
    replace: "ηξ"
}, {
    find: "i3",
    replace: "ιξ"
}, {
    find: "ο3",
    replace: "οξ"
}, {
    find: "u3",
    replace: "υξ"
}, {
    find: "y3",
    replace: "υξ"
}, {
    find: "v3",
    replace: "ωξ"
}, {
    find: "w3",
    replace: "ωξ"
}, {
    find: "3A",
    replace: "ξΑ"
}, {
    find: "3E",
    replace: "ξΕ"
}, {
    find: "3H",
    replace: "ξΗ"
}, {
    find: "3I",
    replace: "ξΙ"
}, {
    find: "3O",
    replace: "ξΟ"
}, {
    find: "3U",
    replace: "ξΥ"
}, {
    find: "3Y",
    replace: "ξΥ"
}, {
    find: "3V",
    replace: "ξΩ"
}, {
    find: "3W",
    replace: "ξΩ"
}, {
    find: "A3",
    replace: "Αξ"
}, {
    find: "E3",
    replace: "Εξ"
}, {
    find: "H3",
    replace: "Ηξ"
}, {
    find: "I3",
    replace: "Ιξ"
}, {
    find: "O3",
    replace: "Οξ"
}, {
    find: "U3",
    replace: "Υξ"
}, {
    find: "Y3",
    replace: "Υξ"
}, {
    find: "V3",
    replace: "Ωξ"
}, {
    find: "W3",
    replace: "Ωξ"
}, {
    find: "A",
    replace: "Α"
}, {
    find: "a",
    replace: "α"
}, {
    find: "B",
    replace: "Β"
}, {
    find: "b",
    replace: "β"
}, {
    find: "V",
    replace: "Β"
}, {
    find: "v",
    replace: "β"
}, {
    find: "c",
    replace: "ψ"
}, {
    find: "C",
    replace: "Ψ"
}, {
    find: "G",
    replace: "Γ"
}, {
    find: "g",
    replace: "γ"
}, {
    find: "D",
    replace: "Δ"
}, {
    find: "d",
    replace: "δ"
}, {
    find: "E",
    replace: "Ε"
}, {
    find: "e",
    replace: "ε"
}, {
    find: "Z",
    replace: "Ζ"
}, {
    find: "z",
    replace: "ζ"
}, {
    find: "H",
    replace: "Η"
}, {
    find: "h",
    replace: "η"
}, {
    find: "U",
    replace: "Θ"
}, {
    find: "u",
    replace: "υ"
}, {
    find: "I",
    replace: "Ι"
}, {
    find: "i",
    replace: "ι"
}, {
    find: "j",
    replace: "ξ"
}, {
    find: "J",
    replace: "Ξ"
}, {
    find: "K",
    replace: "Κ"
}, {
    find: "k",
    replace: "κ"
}, {
    find: "L",
    replace: "Λ"
}, {
    find: "l",
    replace: "λ"
}, {
    find: "M",
    replace: "Μ"
}, {
    find: "m",
    replace: "μ"
}, {
    find: "N",
    replace: "Ν"
}, {
    find: "n",
    replace: "ν"
}, {
    find: "X",
    replace: "Χ"
}, {
    find: "x",
    replace: "χ"
}, {
    find: "O",
    replace: "Ο"
}, {
    find: "o",
    replace: "ο"
}, {
    find: "P",
    replace: "Π"
}, {
    find: "p",
    replace: "π"
}, {
    find: "R",
    replace: "Ρ"
}, {
    find: "r",
    replace: "ρ"
}, {
    find: "S",
    replace: "Σ"
}, {
    find: "s",
    replace: "σ"
}, {
    find: "T",
    replace: "Τ"
}, {
    find: "t",
    replace: "τ"
}, {
    find: "Y",
    replace: "Υ"
}, {
    find: "y",
    replace: "υ"
}, {
    find: "F",
    replace: "Φ"
}, {
    find: "f",
    replace: "φ"
}, {
    find: "W",
    replace: "Ω"
}, {
    find: "w",
    replace: "ω"
}, {
    find: "\\?",
    replace: ";"
}];
var Oc = Sc;
const Rc = [{
    find: "ΓΧ",
    replace: "GX"
}, {
    find: "γχ",
    replace: "gx"
}, {
    find: "ΤΘ",
    replace: "T8"
}, {
    find: "τθ",
    replace: "t8"
}, {
    find: "(θη|Θη)",
    replace: "8h"
}, {
    find: "ΘΗ",
    replace: "8H"
}, {
    find: "αυ",
    replace: "au"
}, {
    find: "Αυ",
    replace: "Au"
}, {
    find: "ΑΥ",
    replace: "AY"
}, {
    find: "ευ",
    replace: "eu"
}, {
    find: "εύ",
    replace: "eu"
}, {
    find: "εϋ",
    replace: "ey"
}, {
    find: "εΰ",
    replace: "ey"
}, {
    find: "Ευ",
    replace: "Eu"
}, {
    find: "Εύ",
    replace: "Eu"
}, {
    find: "Εϋ",
    replace: "Ey"
}, {
    find: "Εΰ",
    replace: "Ey"
}, {
    find: "ΕΥ",
    replace: "EY"
}, {
    find: "ου",
    replace: "ou"
}, {
    find: "ού",
    replace: "ou"
}, {
    find: "οϋ",
    replace: "oy"
}, {
    find: "οΰ",
    replace: "oy"
}, {
    find: "Ου",
    replace: "Ou"
}, {
    find: "Ού",
    replace: "Ou"
}, {
    find: "Οϋ",
    replace: "Oy"
}, {
    find: "Οΰ",
    replace: "Oy"
}, {
    find: "ΟΥ",
    replace: "OY"
}, {
    find: "Α",
    replace: "A"
}, {
    find: "α",
    replace: "a"
}, {
    find: "ά",
    replace: "a"
}, {
    find: "Ά",
    replace: "A"
}, {
    find: "Β",
    replace: "B"
}, {
    find: "β",
    replace: "b"
}, {
    find: "Γ",
    replace: "G"
}, {
    find: "γ",
    replace: "g"
}, {
    find: "Δ",
    replace: "D"
}, {
    find: "δ",
    replace: "d"
}, {
    find: "Ε",
    replace: "E"
}, {
    find: "ε",
    replace: "e"
}, {
    find: "έ",
    replace: "e"
}, {
    find: "Έ",
    replace: "E"
}, {
    find: "Ζ",
    replace: "Z"
}, {
    find: "ζ",
    replace: "z"
}, {
    find: "Η",
    replace: "H"
}, {
    find: "η",
    replace: "h"
}, {
    find: "ή",
    replace: "h"
}, {
    find: "Ή",
    replace: "H"
}, {
    find: "Θ",
    replace: "TH"
}, {
    find: "θ",
    replace: "th"
}, {
    find: "Ι",
    replace: "I"
}, {
    find: "Ϊ",
    replace: "I"
}, {
    find: "ι",
    replace: "i"
}, {
    find: "ί",
    replace: "i"
}, {
    find: "ΐ",
    replace: "i"
}, {
    find: "ϊ",
    replace: "i"
}, {
    find: "Ί",
    replace: "I"
}, {
    find: "Κ",
    replace: "K"
}, {
    find: "κ",
    replace: "k"
}, {
    find: "Λ",
    replace: "L"
}, {
    find: "λ",
    replace: "l"
}, {
    find: "Μ",
    replace: "M"
}, {
    find: "μ",
    replace: "m"
}, {
    find: "Ν",
    replace: "N"
}, {
    find: "ν",
    replace: "n"
}, {
    find: "Ξ",
    replace: "KS"
}, {
    find: "ξ",
    replace: "ks"
}, {
    find: "Ο",
    replace: "O"
}, {
    find: "ο",
    replace: "o"
}, {
    find: "Ό",
    replace: "O"
}, {
    find: "ό",
    replace: "o"
}, {
    find: "Π",
    replace: "P"
}, {
    find: "π",
    replace: "p"
}, {
    find: "Ρ",
    replace: "R"
}, {
    find: "ρ",
    replace: "r"
}, {
    find: "Σ",
    replace: "S"
}, {
    find: "σ",
    replace: "s"
}, {
    find: "Τ",
    replace: "T"
}, {
    find: "τ",
    replace: "t"
}, {
    find: "Υ",
    replace: "Y"
}, {
    find: "Ύ",
    replace: "Y"
}, {
    find: "Ϋ",
    replace: "Y"
}, {
    find: "ΰ",
    replace: "y"
}, {
    find: "ύ",
    replace: "y"
}, {
    find: "ϋ",
    replace: "y"
}, {
    find: "υ",
    replace: "y"
}, {
    find: "Φ",
    replace: "F"
}, {
    find: "φ",
    replace: "f"
}, {
    find: "Χ",
    replace: "X"
}, {
    find: "χ",
    replace: "x"
}, {
    find: "Ψ",
    replace: "Ps"
}, {
    find: "ψ",
    replace: "ps"
}, {
    find: "Ω",
    replace: "w"
}, {
    find: "ω",
    replace: "w"
}, {
    find: "Ώ",
    replace: "w"
}, {
    find: "ώ",
    replace: "w"
}, {
    find: "ς",
    replace: "s"
}, {
    find: ";",
    replace: "?"
}];
var Dc = Rc;
const ze = "αεηιουω"
  , Ge = "βγδζθκλμνξπρςστφχψ"
  , kc = [{
    find: "ηυ",
    replace: "if"
}, {
    find: "(αυ)(?=[" + Ge + "])",
    replace: "af"
}, {
    find: "(αυ)(?=[" + ze + "])",
    replace: "av"
}, {
    find: "(ευ)(?=[" + Ge + "])",
    replace: "ef"
}, {
    find: "(ευ)(?=[" + ze + "])",
    replace: "ev"
}, {
    find: "ου",
    replace: "ou"
}, {
    find: "(Αυ)(?=[" + Ge + "])",
    replace: "Af"
}, {
    find: "(Αυ)(?=[" + ze + "])",
    replace: "Av"
}, {
    find: "(Ευ)(?=[" + Ge + "])",
    replace: "Ef"
}, {
    find: "(Ευ)(?=[" + ze + "])",
    replace: "Ev"
}, {
    find: "Ηυ",
    replace: "If"
}, {
    find: "Ου",
    replace: "Ou"
}, {
    find: "ηύ",
    replace: "íf"
}, {
    find: "(αύ)(?=[" + Ge + "])",
    replace: "áf"
}, {
    find: "(αύ)(?=[" + ze + "])",
    replace: "áv"
}, {
    find: "(εύ)(?=[" + Ge + "])",
    replace: "éf"
}, {
    find: "(εύ)(?=[" + ze + "])",
    replace: "éf"
}, {
    find: "ού",
    replace: "oú"
}, {
    find: "(Αύ)(?=[" + Ge + "])",
    replace: "Áf"
}, {
    find: "(Αύ)(?=[" + ze + "])",
    replace: "Áv"
}, {
    find: "(Εύ)(?=[" + Ge + "])",
    replace: "Éf"
}, {
    find: "(Εύ)(?=[" + ze + "])",
    replace: "Év"
}, {
    find: "Ηύ",
    replace: "Íf"
}, {
    find: "Ού",
    replace: "Oú"
}, {
    find: "αι",
    replace: "e"
}, {
    find: "ει",
    replace: "i"
}, {
    find: "οι",
    replace: "i"
}, {
    find: "αί",
    replace: "é"
}, {
    find: "εί",
    replace: "í"
}, {
    find: "οί",
    replace: "í"
}, {
    find: "Αι|ΑΙ",
    replace: "E"
}, {
    find: "Ει|ΕΙ",
    replace: "I"
}, {
    find: "Οι|ΟΙ",
    replace: "I"
}, {
    find: "Αί",
    replace: "É"
}, {
    find: "Εί",
    replace: "Í"
}, {
    find: "Οί",
    replace: "Í"
}, {
    find: "γε",
    replace: "ye"
}, {
    find: "γι",
    replace: "yi"
}, {
    find: "γυ",
    replace: "yi"
}, {
    find: "Γε",
    replace: "Ye"
}, {
    find: "Γι",
    replace: "Yi"
}, {
    find: "Γυ",
    replace: "Yi"
}, {
    find: "μπ",
    replace: "b"
}, {
    find: "ντ",
    replace: "d"
}, {
    find: "γκ",
    replace: "g"
}, {
    find: "Μπ|ΜΠ",
    replace: "B"
}, {
    find: "Ντ|ΝΤ",
    replace: "D"
}, {
    find: "Γκ|ΓΚ",
    replace: "G"
}, {
    find: "α",
    replace: "a"
}, {
    find: "β",
    replace: "v"
}, {
    find: "γ",
    replace: "g"
}, {
    find: "δ",
    replace: "d"
}, {
    find: "ε",
    replace: "e"
}, {
    find: "ζ",
    replace: "z"
}, {
    find: "η",
    replace: "i"
}, {
    find: "θ",
    replace: "th"
}, {
    find: "ι",
    replace: "i"
}, {
    find: "κ",
    replace: "k"
}, {
    find: "λ",
    replace: "l"
}, {
    find: "μ",
    replace: "m"
}, {
    find: "ν",
    replace: "n"
}, {
    find: "ξ",
    replace: "x"
}, {
    find: "ο",
    replace: "o"
}, {
    find: "π",
    replace: "p"
}, {
    find: "ρ",
    replace: "r"
}, {
    find: "ς",
    replace: "s"
}, {
    find: "σ",
    replace: "s"
}, {
    find: "τ",
    replace: "t"
}, {
    find: "υ",
    replace: "i"
}, {
    find: "φ",
    replace: "ph"
}, {
    find: "χ",
    replace: "kh"
}, {
    find: "ψ",
    replace: "ps"
}, {
    find: "ω",
    replace: "o"
}, {
    find: "ά",
    replace: "á"
}, {
    find: "έ",
    replace: "é"
}, {
    find: "ή",
    replace: "í"
}, {
    find: "ί",
    replace: "í"
}, {
    find: "ό",
    replace: "ó"
}, {
    find: "ύ",
    replace: "í"
}, {
    find: "ώ",
    replace: "ó"
}, {
    find: "ΰ",
    replace: "ï"
}, {
    find: "ΐ",
    replace: "ï"
}, {
    find: "ϊ",
    replace: "ï"
}, {
    find: "ϋ",
    replace: "ï"
}, {
    find: "Α",
    replace: "A"
}, {
    find: "Β",
    replace: "V"
}, {
    find: "Γ",
    replace: "G"
}, {
    find: "Δ",
    replace: "D"
}, {
    find: "Ε",
    replace: "E"
}, {
    find: "Ζ",
    replace: "Z"
}, {
    find: "Η",
    replace: "I"
}, {
    find: "Θ",
    replace: "Th"
}, {
    find: "Ι",
    replace: "I"
}, {
    find: "Κ",
    replace: "K"
}, {
    find: "Λ",
    replace: "L"
}, {
    find: "Μ",
    replace: "M"
}, {
    find: "Ν",
    replace: "N"
}, {
    find: "Ξ",
    replace: "X"
}, {
    find: "Ο",
    replace: "O"
}, {
    find: "Π",
    replace: "P"
}, {
    find: "Ρ",
    replace: "R"
}, {
    find: "Σ",
    replace: "S"
}, {
    find: "Τ",
    replace: "T"
}, {
    find: "Υ",
    replace: "I"
}, {
    find: "Φ",
    replace: "Ph"
}, {
    find: "Χ",
    replace: "Kh"
}, {
    find: "Ψ",
    replace: "Ps"
}, {
    find: "Ω",
    replace: "O"
}, {
    find: "Ά",
    replace: "Á"
}, {
    find: "Έ",
    replace: "É"
}, {
    find: "Ή",
    replace: "Í"
}, {
    find: "Ί",
    replace: "Í"
}, {
    find: "Ό",
    replace: "Ó"
}, {
    find: "Ύ",
    replace: "Í"
}, {
    find: "Ώ",
    replace: "Ó"
}, {
    find: "ΰ",
    replace: "Ï"
}, {
    find: "ΐ",
    replace: "Ï"
}, {
    find: "Ϊ",
    replace: "Ï"
}, {
    find: "Ϋ",
    replace: "Ï"
}];
var wc = kc;
const xc = [{
    find: "α",
    replace: "a"
}, {
    find: "β",
    replace: "v"
}, {
    find: "γ",
    replace: "g"
}, {
    find: "δ",
    replace: "d"
}, {
    find: "ε",
    replace: "e"
}, {
    find: "ζ",
    replace: "z"
}, {
    find: "η",
    replace: "ē"
}, {
    find: "θ",
    replace: "th"
}, {
    find: "ι",
    replace: "i"
}, {
    find: "κ",
    replace: "k"
}, {
    find: "λ",
    replace: "l"
}, {
    find: "μ",
    replace: "m"
}, {
    find: "ν",
    replace: "n"
}, {
    find: "ξ",
    replace: "x"
}, {
    find: "ο",
    replace: "o"
}, {
    find: "π",
    replace: "p"
}, {
    find: "ρ",
    replace: "r"
}, {
    find: "σ",
    replace: "s"
}, {
    find: "ς",
    replace: "s"
}, {
    find: "τ",
    replace: "t"
}, {
    find: "υ",
    replace: "u"
}, {
    find: "φ",
    replace: "ph"
}, {
    find: "χ",
    replace: "kh"
}, {
    find: "ψ",
    replace: "ps"
}, {
    find: "ω",
    replace: "ō"
}, {
    find: "ά",
    replace: "á"
}, {
    find: "έ",
    replace: "é"
}, {
    find: "ί",
    replace: "í"
}, {
    find: "ό",
    replace: "ó"
}, {
    find: "ύ",
    replace: "ú"
}, {
    find: "ή",
    replace: "ḗ"
}, {
    find: "ώ",
    replace: "ṓ"
}, {
    find: "ϊ",
    replace: "ï"
}, {
    find: "ϋ",
    replace: "ü"
}, {
    find: "ΰ",
    replace: "ǘ"
}, {
    find: "ΐ",
    replace: "ḯ"
}, {
    find: "Α",
    replace: "A"
}, {
    find: "Β",
    replace: "V"
}, {
    find: "Γ",
    replace: "G"
}, {
    find: "Δ",
    replace: "D"
}, {
    find: "Ε",
    replace: "E"
}, {
    find: "Ζ",
    replace: "Z"
}, {
    find: "Η",
    replace: "Ē"
}, {
    find: "Θ",
    replace: "Th"
}, {
    find: "Ι",
    replace: "I"
}, {
    find: "Κ",
    replace: "K"
}, {
    find: "Λ",
    replace: "L"
}, {
    find: "Μ",
    replace: "M"
}, {
    find: "Ν",
    replace: "N"
}, {
    find: "Ξ",
    replace: "X"
}, {
    find: "Ο",
    replace: "O"
}, {
    find: "Π",
    replace: "P"
}, {
    find: "Ρ",
    replace: "R"
}, {
    find: "Σ",
    replace: "S"
}, {
    find: "Τ",
    replace: "T"
}, {
    find: "Υ",
    replace: "U"
}, {
    find: "Φ",
    replace: "Ph"
}, {
    find: "Χ",
    replace: "Kh"
}, {
    find: "Ψ",
    replace: "Ps"
}, {
    find: "Ω",
    replace: "Ō"
}, {
    find: "Ά",
    replace: "Á"
}, {
    find: "Έ",
    replace: "É"
}, {
    find: "Ί",
    replace: "Í"
}, {
    find: "Ό",
    replace: "Ó"
}, {
    find: "Ύ",
    replace: "Ú"
}, {
    find: "Ή",
    replace: "Ḗ"
}, {
    find: "Ώ",
    replace: "Ṓ"
}, {
    find: "Ϊ",
    replace: "Ï"
}, {
    find: "Ϋ",
    replace: "Ü"
}, {
    find: ";",
    replace: "?"
}];
var Mc = xc;
const Lc = ["αλλ(α|ά)", "αν", "αντ(ι|ί)", "απ(ο|ό)", "αυτ(α|ά)", "αυτ(ε|έ)ς", "αυτ(η|ή)", "αυτ(ο|ό)", "αυτο(ι|ί)", "αυτ(ο|ό)ς", "αυτο(υ|ύ)ς", "αυτ(ω|ώ)ν", "αἱ", "αἳ", "αἵ", "αὐτός", "αὐτὸς", "αὖ", "γάρ", "γα", "γα^", "γε", "για", "γοῦν", "γὰρ", '"δ"', "δέ", "δή", "δαί", "δαίς", "δαὶ", "δαὶς", "δε", "δεν", '"δι"', "διά", "διὰ", "δὲ", "δὴ", "δ’", "ε(α|ά)ν", "ε(ι|ί)μαι", "ε(ι|ί)μαστε", "ε(ι|ί)ναι", "ε(ι|ί)σαι", "ε(ι|ί)στε", "εκε(ι|ί)να", "εκε(ι|ί)νες", "εκε(ι|ί)νη", "εκε(ι|ί)νο", "εκε(ι|ί)νοι", "εκε(ι|ί)νος", "εκε(ι|ί)νους", "εκε(ι|ί)νων", "εν(ω|ώ)", "επ", "επ(ι|ί)", "εἰ", "εἰμί", "εἰμὶ", "εἰς", "εἰς", "εἴ", "εἴμι", "εἴτε", "η", "θα", "(ι|ί)σως", "κ", "καί", "καίτοι", "καθ", "και", "κατ", "κατά", "κατα", "κατὰ", "καὶ", "κι", "κἀν", "κἂν", "μέν", "μή", "μήτε", "μα", "με", "μεθ", "μετ", "μετά", "μετα", "μετὰ", "μη", "μην", "μἐν", "μὲν", "μὴ", "μὴν", "να", "ο", "οι", "(ο|ό)μως", "(ο|ό)πως", "(ο|ό)σο", "(ο|ό)τι", "οἱ", "οἳ", "οἷς", "οὐ", "οὐδ", "οὐδέ", "οὐδείς", "οὐδεὶς", "οὐδὲ", "οὐδὲν", "οὐκ", "οὐχ", "οὐχὶ", "οὓς", "οὔτε", "οὕτω", "οὕτως", "οὕτως", "οὖν", "οὗ", "οὗτος", "οὗτος", "παρ", "παρά", "παρα", "παρὰ", "περί", "περὶ", "ποι(α|ά)", "ποι(ε|έ)ς", "ποι(ο|ό)", "ποιο(ι|ί)", "ποι(ο|ό)ς", "ποιο(υ|ύ)ς", "ποι(ω|ώ)ν", "π(ο|ό)τε", "που", "ποῦ", "προ", "προς", "πρός", "πρὸ", "πρὸς", "πως", "πως", "σε", "στη", "στην", "στο", "στον", "σός", "σύ", "σύν", "σὸς", "σὺ", "σὺν", "τά", "τήν", "τί", "τίς", "τίς", "τα", "ταῖς", "τε", "την", "της", "τι", "τινα", "τις", "τις", "το", "τοί", "τοι", "τοιοῦτος", "τοιοῦτος", "τον", "τοτε", "του", "τούς", "τοὺς", "τοῖς", "τοῦ", "των", "τό", "τόν", "τότε", "τὰ", "τὰς", "τὴν", "τὸ", "τὸν", "τῆς", "τῆς", "τῇ", "τῶν", "τῷ", "ως", '"ἀλλ"', "ἀλλά", "ἀλλὰ", "ἀλλ’", "ἀπ", "ἀπό", "ἀπὸ", "ἀφ", "ἂν", "ἃ", "ἄλλος", "ἄλλος", "ἄν", "ἄρα", "ἅμα", "ἐάν", "ἐγώ", "ἐγὼ", "ἐκ", "ἐμός", "ἐμὸς", "ἐν", "ἐξ", "ἐπί", "ἐπεὶ", "ἐπὶ", "ἐστι", "ἐφ", "ἐὰν", "ἑαυτοῦ", "ἔτι", "ἡ", "ἢ", "ἣ", "ἤ", "ἥ", "ἧς", "ἵνα", "ὁ", "ὃ", "ὃν", "ὃς", "ὅ", "ὅδε", "ὅθεν", "ὅπερ", "ὅς", "ὅς", "ὅστις", "ὅστις", "ὅτε", "ὅτι", "ὑμός", "ὑπ", "ὑπέρ", "ὑπό", "ὑπὲρ", "ὑπὸ", "ὡς", "ὡς", "ὥς", "ὥστε", "ὦ", "ᾧ"]
  , Ic = [{
    find: "(?:^|(?<=\\s))(" + Lc.join("|") + ")(?:(?=\\s)|$)",
    replace: ""
}];
var Fc = Ic;
const Ac = Tc
  , Pc = Oc
  , Nc = Dc
  , $c = wc
  , Vc = Mc
  , jc = Fc
  , Uc = {
    toGreek: function(e, t) {
        return mt(e, Pc, !0, t)
    },
    toGreeklish: function(e, t) {
        return mt(e, Nc, !0, t)
    },
    toPhoneticLatin: function(e, t) {
        return mt(e, $c, !0, t)
    },
    toTransliteratedLatin: function(e, t) {
        return mt(e, Vc, !0, t)
    },
    sanitizeDiacritics: function(e, t) {
        return mt(e, Ac, !1, t)
    },
    removeStopWords: function(e, t=!1) {
        const n = mt(e, jc, !0, "", "gi").trim();
        return t === !0 ? n.replace(/\s{2,}/g, " ") : n
    }
};
function mt(e, t, n, r, a="g") {
    let i, c;
    return n = n || !1,
    typeof e == "string" && e.length > 0 && t.forEach(function(l) {
        i = n ? l.find : "[" + l.find + "]",
        r && (i = "(?![" + r + "])" + i),
        c = new RegExp(i,a),
        e = e.replace(c, l.replace)
    }),
    e
}
var Bc = Uc;
const Yc = ka(Bc)
  , Hc = {
    string: "text",
    int: "number",
    text: "text",
    date: "date",
    attachment: "file",
    file: "file",
    rate: "number",
    normalized_string: "text",
    email: "email"
}
  , zc = ["aria-label", "aria-required"]
  , pe = s.forwardRef(function({id: t, type: n, label: r, helperText: a, fullWidth: i=!0, multiline: c, rows: l, className: u, params: d, errorObj: p, formFieldRef: m, fieldLabel: y, InputLabelProps: b, inputProps: E, dateField: g, value: h, ...v}, S) {
    h == null && (h = ""),
    c = c === !0 || n === "text";
    const O = Hc[n || "text"] || "text";
    f.useMemo(()=>O.startsWith("date") ? {
        shrink: !0
    } : {}, [O]),
    d = d || {};
    const w = f.useMemo(()=>{
        const C = {
            ...E || {}
        };
        return n === "rate" && (C.min = "0",
        C.max = "100",
        C.step = "0.01"),
        c && (C.rows = 8),
        n === "email" && (C.autoComplete = "on",
        C.type = "text"),
        zc.forEach(M=>{
            v[M] !== void 0 && (C[M] = v[M])
        }
        ),
        C
    }
    , [v, E]);
    function x(C) {
        if (n === "normalized_string" || d.enforceUppercase) {
            const M = Yc.sanitizeDiacritics(C.target.value).toUpperCase();
            C.target.value = M
        }
        v.onChange(C)
    }
    let D;
    v.name ? D = v.name : E && (D = E.name);
    let T = c ? Di : ki;
    return g && (T = wi),
    s.createElement(rr, null, g ? s.createElement(Qt, {
        ...b
    }, r) : s.createElement(s.Fragment, null, r != null && r.primary ? s.createElement(Qt, {
        size: "md"
    }, r.primary) : "", r != null && r.secondary ? s.createElement(bt, {
        id: "business-hint"
    }, r.secondary) : ""), s.createElement(T, {
        id: D,
        ref: S || m,
        name: v.name,
        type: O,
        value: h,
        ...v,
        onChange: x,
        ...w
    }))
});
pe.propTypes = {
    name: o.string,
    className: o.string,
    fullWidth: o.bool,
    helperText: o.any,
    id: o.number,
    label: o.string,
    multiline: o.bool,
    params: o.object,
    rows: o.number,
    type: o.string,
    inputProps: o.any,
    formFieldRef: o.any,
    onChange: o.func,
    dateField: o.bool
};
const Kn = s.forwardRef(function({value: t, onChange: n, formFieldRef: r, error: a, errorObj: i, fieldLabel: c, ...l}, u) {
    const {t: d} = j()
      , p = yn()
      , y = (l.params || {})["file-max-size"] || p.FILE_MAX_SIZE || -1;
    t = t || {
        fileName: null,
        file: null
    };
    const b = !!t.fileName || !!t.file_id
      , E = t.fileName || t.file_name || "file_upload.not_set"
      , [g,h] = f.useState(null)
      , v = a || g;
    function S(O, w) {
        h(null);
        const x = O.target.files
          , D = x.length ? x[0] : void 0;
        if (y && D && D.size && D.size > y) {
            const T = Math.round(y / 1048576) + "MB";
            h(d("error.file_too_large", {
                max_size: T
            }))
        } else
            n(D ? {
                fileName: D.name,
                file: D
            } : "")
    }
    return s.createElement(U, {
        paddingBottom: 4,
        paddingLeft: 4,
        container: !0,
        className: gn(l.className, "m-0 mt-1 border border-gray-300", !!v && "border-4 !border-error"),
        spacing: 2
    }, s.createElement("span", null, s.createElement(ar, {
        className: "text-error font-medium mt-2 mb-2"
    }, v)), E && s.createElement(U, {
        item: !0,
        xs: 12
    }, s.createElement("span", {
        className: "font-bold"
    }, d("label.file"), ": "), s.createElement("em", null, d(E))), s.createElement(U, {
        item: !0,
        xs: 12
    }, s.createElement("input", {
        ...l,
        ref: r,
        id: l.name,
        className: "placeholder-transparent hidden",
        type: "file",
        onChange: S
    }), s.createElement("label", {
        htmlFor: l.name,
        className: "ds-link"
    }, d(b ? "file_upload.replace" : "file_upload.upload")), s.createElement(s.Fragment, null, b && s.createElement("button", {
        className: "border-none bg-transparent text-error cursor-pointer underline ml-4",
        onClick: O=>(O.preventDefault(),
        n(""),
        r.current.value = "",
        !1)
    }, d("file_upload.reset")))))
});
Kn.propTypes = {
    formFieldRef: o.any,
    onChange: o.func,
    value: o.any,
    error: o.any,
    name: o.any,
    className: o.any,
    params: o.any
};
const At = s.forwardRef(function({formFieldRef: t, inputProps: n, options: r=[], error: a, errorObj: i, fieldLabel: c, ...l}, u) {
    const d = f.useMemo(()=>(r && r.length > 0 ? r[0].group : !1) ? r.reduce(([y,b],E)=>(E.group !== y && b.push({
        isGroup: !0,
        label: E.group
    }),
    b.push(E),
    [E.group, b]), [null, []])[1] : r, [l.required, r])
      , p = l.customlabel ? rr : f.Fragment;
    return s.createElement(p, null, l.customlabel && s.createElement(Qt, null, l.customlabel, l.locked && s.createElement(ja, {
        className: "relative top-1 text-tertiary"
    })), s.createElement(xi, {
        ref: u || t,
        ...l
    }, s.createElement(Yr, {
        value: ""
    }), d.map(m=>{
        var y;
        return s.createElement(Yr, {
            disabled: (y = m.disabled) != null ? y : !1,
            key: m.value,
            value: m.value
        }, m.label)
    }
    )))
});
At.propTypes = {
    formFieldRef: o.any,
    inputProps: o.shape({
        ref: o.any
    }),
    variant: o.any,
    required: o.any,
    group: o.any,
    options: o.any,
    disabled: o.any,
    customlabel: o.any,
    error: o.any,
    locked: o.bool
};
const go = s.forwardRef(function({formFieldRef: t, inputProps: n, options: r, ...a}, i) {
    const c = f.useMemo(()=>(r || []).map(l=>({
        ...l,
        value: l.label
    })));
    return s.createElement(At, {
        options: c,
        formFieldRef: t,
        ref: i,
        inputProps: n,
        ...a
    })
});
go.propTypes = {
    formFieldRef: o.any,
    inputProps: o.any,
    options: o.array
};
const bo = s.forwardRef(function({formFieldRef: t, ...n}, r) {
    const a = n.params["legacy-mode"] ? ", " : " "
      , i = f.useMemo(()=>{
        const u = n.options || [];
        return (n.options && n.options.length > 0 ? n.options[0].group : !1) ? u.reduce(([p,m],y)=>(y.group !== p && m.push({
            isGroup: !0,
            label: y.group
        }),
        m.push(y),
        [y.group, m]), [null, []])[1] : u
    }
    , [n.required, n.options])
      , c = f.useMemo(()=>n.value && n.value.length ? n.value.split(a).filter(u=>u.length).map(u=>u.trim()) : [], [n.value]);
    function l(u) {
        const d = u.target.value;
        u.target.checked ? c.includes(d) || n.onChange(c.concat([d]).join(a)) : c.includes(d) && n.onChange(c.filter(m=>m !== d).join(a))
    }
    return s.createElement(or, {
        error: n.error
    }, s.createElement(Mi, {
        onChange: l
    }, i.map(({value: u, label: d})=>s.createElement(Li, {
        key: u,
        name: n.name,
        checked: c.includes(u),
        value: u
    }, d))))
});
bo.propTypes = {
    formFieldRef: o.any,
    options: o.any,
    value: o.any,
    split: o.func,
    disabled: o.any,
    name: o.any,
    error: o.any,
    required: o.any,
    onChange: o.func,
    params: o.object
};
_e.extend(sr);
function Gc(e, t) {
    const [n,r,a] = f.useMemo(()=>{
        if (!e || e.length === "")
            return ["", "", ""];
        const [d,p,m] = e.split("/");
        return [m, p, d]
    }
    , [e]);
    function i(d, p, m) {
        const y = "".concat(m || "", "/").concat(p || "", "/").concat(d || "");
        t(!d && !p && !m ? "" : y)
    }
    function c(d, p) {
        const m = d.target.value;
        i(m, r, a)
    }
    function l(d, p) {
        let m = d.target.value;
        p && m && m.length === 1 && (m = "0" + m),
        i(n, m, a)
    }
    function u(d, p) {
        let m = d.target.value;
        p && m && m.length === 1 && (m = "0" + m),
        i(n, r, m)
    }
    return {
        day: a,
        month: r,
        year: n,
        setYear: c,
        setMonth: l,
        setDay: u
    }
}
const kt = s.forwardRef(({sm: e, len: t, label: n, ...r},a)=>s.createElement(pe, {
    InputLabelProps: {
        htmlFor: r.inputProps.name
    },
    label: n,
    ...r,
    dateField: !0,
    ref: a
}));
kt.propTypes = {
    label: o.any,
    len: o.any,
    sm: o.number,
    inputProps: o.any
};
kt.displayName = "DatePart";
const Gt = "DD/MM/YYYY"
  , qc = ["DD-MM-YYYY", "YYYY-MM-DD", "YYYY/MM/DD"]
  , ia = (e,t)=>{
    if (_e(t, Gt, !0).isValid())
        return t;
    if (t) {
        const r = _e(t, qc, !0);
        if (r.isValid())
            try {
                r.format(Gt),
                console.warn("DateField: field `".concat(e, "` has been formatted as normalized ").concat(Gt, ' format for "').concat(t, '" value'))
            } catch {
                throw new Error("DateField: field `".concat(e, '` contains invalid datetime format for "').concat(t, '" value \n\n, this should be in the ').concat(Gt, " format"))
            }
    } else
        return "";
    return ""
}
  , ho = s.forwardRef(function(t, n) {
    const {t: r} = j()
      , [a] = f.useState(t.value)
      , i = f.useMemo(()=>a === t.value ? ia(t.name, t.value) : t.value, [t.value, a])
      , c = Gc(i || ia(t.name, t.defaultValue), t.onChange)
      , l = f.useMemo(()=>{
        var p;
        const u = ((p = t == null ? void 0 : t.params) == null ? void 0 : p.labels) || {}
          , d = {};
        return d.day = u.day || r("label.day"),
        d.month = u.month || r("label.month"),
        d.year = u.year || r("label.year"),
        d
    }
    , [t.params, r]);
    return s.createElement(wa, null, s.createElement(kt, {
        label: l.day,
        onChange: c.setDay,
        onBlur: u=>c.setDay(u, !0),
        value: c.day,
        sm: 3,
        ref: t.formFieldRef,
        inputProps: {
            name: "".concat(t.name, "-day"),
            maxLength: 2
        },
        disabled: t.disabled
    }), s.createElement(kt, {
        label: l.month,
        onChange: c.setMonth,
        onBlur: u=>c.setMonth(u, !0),
        value: c.month,
        sm: 3,
        inputProps: {
            name: "".concat(t.name, "-month"),
            maxLength: 2
        },
        disabled: t.disabled
    }), s.createElement(kt, {
        label: l.year,
        onChange: c.setYear,
        value: c.year,
        sm: 6,
        inputProps: {
            name: "".concat(t.name, "-year"),
            maxLength: 4,
            width: 4
        },
        disabled: t.disabled
    }))
});
ho.propTypes = {
    value: o.any,
    len: o.any,
    sm: o.number,
    params: o.any,
    disabled: o.any,
    name: o.any,
    formFieldRef: o.any,
    onChange: o.func,
    defaultValue: o.any
};
_e.extend(sr);
function Wc(e, t) {
    const [n,r,a,i,c] = f.useMemo(()=>{
        if (!e || e.length === "")
            return ["", "", "", "", ""];
        const [b,E] = e.split(" ")
          , [g,h,v] = b.split("/")
          , [S,O] = E.split(":");
        return [v, h, g, S, O]
    }
    , [e]);
    function l(b, E, g, h, v) {
        const S = "".concat(g || "", "/").concat(E || "", "/").concat(b || "", " ").concat(h || "", ":").concat(v || "");
        t(!b && !E && !g && !h && !v ? null : S)
    }
    function u(b, E) {
        const g = b.target.value;
        l(g, r, a, i, c)
    }
    function d(b, E) {
        let g = b.target.value;
        E && g && g.length === 1 && (g = "0" + g),
        l(n, g, a, i, c)
    }
    function p(b, E) {
        let g = b.target.value;
        E && g && g.length === 1 && (g = "0" + g),
        l(n, r, g, i, c)
    }
    function m(b, E) {
        let g = b.target.value;
        E && g && g.length === 1 && (g = "0" + g),
        l(n, r, a, g, c)
    }
    function y(b, E) {
        let g = b.target.value;
        E && g && g.length === 1 && (g = "0" + g),
        l(n, r, a, i, g)
    }
    return {
        day: a,
        month: r,
        year: n,
        hour: i,
        minutes: c,
        setYear: u,
        setMonth: d,
        setDay: p,
        setHour: m,
        setMinutes: y
    }
}
const rt = s.forwardRef(({sm: e, len: t, label: n, ...r},a)=>s.createElement(pe, {
    dateField: !0,
    label: n,
    ...r,
    ref: a
}));
rt.propTypes = {
    label: o.any,
    len: o.any,
    sm: o.number
};
rt.displayName = "DateTimePart";
const qt = "DD/MM/YYYY HH:mm"
  , Kc = ["DD/MM/YYYY - HH:mm", "YYYY-MM-DD - HH:mm", "YYYY/MM/DD - HH:mm", "DD-MM-YYYY - HH:mm"]
  , la = (e,t)=>{
    if (_e(t, qt, !0).isValid())
        return t;
    if (t) {
        const r = _e(t, Kc, !0);
        if (r.isValid())
            try {
                r.format(qt),
                console.warn("DateTimeField: field `".concat(e, "` has been formatted as normalized ").concat(qt, ' format for "').concat(t, '" value'))
            } catch {
                throw new Error("DateTimeField: field `".concat(e, '` contains invalid datetime format for "').concat(t, '" value \n\n, this should be in the ').concat(qt, " format"))
            }
    } else
        return "";
    return ""
}
;
function Eo(e) {
    const {t} = j()
      , [n] = f.useState(e.value)
      , r = f.useMemo(()=>n === e.value ? la(e.name, e.value) : e.value, [e.value, n])
      , a = Wc(r || la(e.name, e.defaultValue), e.onChange);
    return s.createElement(wa, null, s.createElement(rt, {
        label: t("label.day"),
        onChange: a.setDay,
        onBlur: i=>a.setDay(i, !0),
        value: a.day,
        sm: 2,
        ref: e.formFieldRef,
        inputProps: {
            name: "".concat(e.name, "-day"),
            maxLength: 2
        },
        disabled: e.disabled
    }), s.createElement(rt, {
        label: t("label.month"),
        onChange: a.setMonth,
        onBlur: i=>a.setMonth(i, !0),
        value: a.month,
        sm: 2,
        inputProps: {
            name: "".concat(e.name, "-month"),
            maxLength: 2
        },
        disabled: e.disabled
    }), s.createElement(rt, {
        label: t("label.year"),
        onChange: a.setYear,
        value: a.year,
        sm: 4,
        inputProps: {
            name: "".concat(e.name, "-year"),
            maxLength: 4,
            width: 4
        },
        disabled: e.disabled
    }), s.createElement(rt, {
        label: "Ώρα",
        onChange: a.setHour,
        value: a.hour,
        sm: 2,
        inputProps: {
            name: "".concat(e.name, "-hour"),
            maxLength: 2
        },
        disabled: e.disabled
    }), s.createElement(rt, {
        label: "Λεπτά",
        onChange: a.setMinutes,
        value: a.minutes,
        sm: 2,
        inputProps: {
            name: "".concat(e.name, "-minutes"),
            maxLength: 2
        },
        disabled: e.disabled
    }))
}
Eo.propTypes = {
    value: o.any,
    len: o.any,
    sm: o.number,
    disabled: o.any,
    name: o.any,
    formFieldRef: o.any,
    onChange: o.func,
    defaultValue: o.any
};
const gr = s.forwardRef(({value: e="", options: t=[], ...n},r)=>{
    const {t: a} = j()
      , i = e
      , c = l=>{
        const u = t.find(d=>d.value === l.currentTarget.value) || {};
        n.onChange(l, u)
    }
    ;
    return s.createElement(Ii, {
        "aria-label": n.fieldLabel,
        name: n.name,
        ref: r
    }, t.map((l,u)=>s.createElement(Fi, {
        key: u,
        ...l,
        value: l.value,
        checked: l.value === i,
        disabled: l.disabled,
        onChange: c
    }, a(l.text.primary), l.text.secondary ? s.createElement(bt, {
        id: "ebanking-hint"
    }, a(l.text.secondary)) : "")))
}
);
gr.displayName = "RadioButtonsGroup";
gr.propTypes = {
    dense: o.bool,
    error: o.any,
    name: o.string,
    onChange: o.func,
    options: o.array.isRequired,
    value: o.string.isRequired,
    fieldLabel: o.string,
    disabled: o.bool
};
function vo({onChange: e, options: t=[], defaultValue: n, ...r}) {
    const a = t.map(l=>l.label)
      , i = f.useCallback(l=>{
        const u = t.find(d=>d.label === l);
        if (!u)
            return e(!1);
        e(u.value)
    }
    , [e, t]);
    function c(l, u) {
        u(l ? a.filter(function(d) {
            return d.toLowerCase().indexOf(l.toLowerCase()) !== -1
        }) : a)
    }
    return s.createElement(or, null, s.createElement(Ai, {
        source: c,
        width: "66.6%",
        autoselect: !0,
        defaultValue: n,
        onConfirm: i,
        id: "govgr"
    }))
}
vo.propTypes = {
    defaultValue: o.any,
    onChange: o.func,
    name: o.any,
    value: o.any,
    onBlur: o.func,
    freeSolo: o.any,
    label: o.any,
    options: o.any
};
const wt = {};
function Xc(e) {
    if (e.values && Object.keys(e.values).length)
        return e.elements.map(n=>({
            label: n,
            value: e.values[n]
        }));
    const t = e.elements || null;
    return t && t.map(n=>({
        label: n,
        value: n
    }))
}
function Jc(e, t, n, r, a, i, c, l, u) {
    return c = c && r === null,
    {
        endpoint: e,
        value: r || "",
        onChange: a,
        path: i,
        loading: c,
        key: l,
        placeholder: r || n,
        formFieldRef: u,
        customlabel: n,
        fieldindex: l,
        filtered: t
    }
}
function Qc(e, t) {
    const n = wt[e] || {};
    wt[e] = n,
    Object.keys(t).map(r=>{
        n[t[r]] = r
    }
    )
}
function Zc(e, t) {
    var r;
    const n = e.replace(/^\/api\//, "");
    return {
        loaded: !0,
        loading: !1,
        data: ((r = wt == null ? void 0 : wt[n]) == null ? void 0 : r[t]) || t
    }
}
function eu(e, t, n) {
    const r = f.useMemo(()=>{
        const u = {};
        return t && t.length && (u.path = t),
        u.index = n,
        u
    }
    )
      , a = fn({
        resource: e,
        query: r,
        consume: t !== null,
        suspense: !1,
        delay: 0,
        suppressErrors: !0
    })
      , [i,c] = f.useState(a.data || {});
    f.useEffect(()=>{
        t !== null ? a.data && a.loaded && !a.error ? c(a.data) : c({}) : c({})
    }
    , [a.data, a.loading, a.error]);
    const l = i.data || {};
    return l.values && Qc(e, l.values),
    [Xc(l), a]
}
function tu(e, t, n) {
    return n = n || 1 / 0,
    e.split("").reduce((r,a)=>a !== t || n <= r.length ? [...r.slice(0, -1), r.pop(-1) + a] : [...r, [""]], [""])
}
function nu(e, t, n, r, a, i="/") {
    const c = t ? t.split(i) : []
      , [l,u] = f.useState(n || t || "");
    f.useEffect(()=>{
        n && n.split(i) === y && u(n || "")
    }
    , [n]);
    const d = fn({
        resource: e,
        consume: !0,
        suspense: !1
    })
      , p = d.data || {}
      , m = p.meta || null
      , y = m && m.labels && m.labels.length + 1;
    function b(g, h) {
        const v = h.target && h.target.value ? h.target.value : h.target
          , S = l.split(i).slice(0, g + 1);
        S[g] = v,
        u(S.join(i)),
        S.length === y ? r(S[S.length - 1]) : r("")
    }
    const E = f.useMemo(()=>{
        if (!m)
            return [];
        const g = m.labels.concat([m.value_label])
          , h = tu(l, i, y);
        return g.map((v,S)=>{
            const O = h[S] !== void 0 ? h[S] : null
              , w = h[S - 1] !== void 0 ? h[S - 1] : null
              , x = w !== null && w.length ? h.slice(0, S).join(i) : S === 0 ? "" : null
              , D = S === h.length - 1 ? a : null
              , T = c[S];
            return Jc(e, T, v, O, C=>{
                b(S, C)
            }
            , x, d.loading, S, D)
        }
        )
    }
    , [m, l]);
    return {
        ...d,
        loading: m === null && d.loading,
        data: p,
        path: l,
        fields: E
    }
}
const _o = s.forwardRef((e,t)=>s.createElement(f.Suspense, {
    fallback: ir
}, s.createElement(So, {
    ...e,
    ref: t,
    tabIndex: "-1"
})));
_o.displayName = "HierarchicalSelectWrapper";
function Co(e) {
    const t = e.value
      , n = [{
        label: t,
        value: t
    }];
    return s.createElement(U, {
        item: !0,
        xs: 12,
        marginTop: 2
    }, s.createElement(At, {
        ...e,
        options: n,
        disabled: !0,
        locked: !0
    }))
}
Co.propTypes = {
    value: o.any
};
function To({loading: e, ...t}) {
    var E;
    const {t: n} = j()
      , [r,a] = eu(t.endpoint, t.path, t.fieldindex)
      , i = r || [{
        label: n("hierarchical_select.no_available_options"),
        value: ""
    }]
      , c = !!t.value
      , l = r ? r.map(g=>g.value) : [""]
      , u = r ? r.map(g=>g.label) : [""]
      , d = (E = t.disabled) != null ? E : r === null && !a.error
      , p = l.includes(t.value)
      , m = u.includes(t.value)
      , b = !!r && r.length > 0 && r.length === 1;
    return f.useEffect(()=>{
        c && !p && !m && r ? t.onChange({
            target: ""
        }) : c && m && !p ? t.onChange({
            target: "".concat(t.path, "/").concat(t.value)
        }) : (!c || !p) && b && r[0].value && t.onChange({
            target: r[0].value
        })
    }
    , [r, t.value]),
    s.createElement(U, {
        item: !0,
        xs: 12,
        marginTop: 2
    }, s.createElement(At, {
        ...t,
        options: i,
        disabled: d
    }))
}
To.propTypes = {
    endpoint: o.string,
    path: o.string,
    fieldindex: o.number,
    value: o.string,
    onChange: o.func,
    disabled: o.bool
};
const ru = ()=>s.createElement(ir, {
    marginTop: 10
})
  , So = s.forwardRef(function({formFieldRef: t, ...n}, r) {
    var d;
    const a = n.params.filter
      , c = (((d = n.params) == null ? void 0 : d.dataset) || n.options).replace(/^\/api\//, "")
      , l = nu(c, a, n.value, n.onChange, t)
      , u = l.fields;
    return l.loaded ? u.map(p=>p.filtered ? s.createElement(Co, {
        key: p.key,
        ...p,
        disabled: n.disabled
    }) : s.createElement(To, {
        key: p.key,
        ...p,
        disabled: n.disabled
    })) : s.createElement(ru, {
        count: n.params.initial_loading_levels || 3
    })
});
So.propTypes = {
    formFieldRef: o.any,
    params: o.any,
    options: o.any,
    value: o.any,
    onChange: o.any,
    filtered: o.any,
    key: o.any,
    tabindex: o.any
};
function Xn() {
    return Xn = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Xn.apply(this, arguments)
}
function au(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), a, i;
    for (i = 0; i < r.length; i++)
        a = r[i],
        !(t.indexOf(a) >= 0) && (n[a] = e[a]);
    return n
}
function Wt(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function ou(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    e.__proto__ = t
}
var Cn = function(e) {
    ou(t, e);
    function t() {
        var r;
        return r = e.call(this) || this,
        r.handleExpired = r.handleExpired.bind(Wt(r)),
        r.handleErrored = r.handleErrored.bind(Wt(r)),
        r.handleChange = r.handleChange.bind(Wt(r)),
        r.handleRecaptchaRef = r.handleRecaptchaRef.bind(Wt(r)),
        r
    }
    var n = t.prototype;
    return n.getValue = function() {
        return this.props.grecaptcha && this._widgetId !== void 0 ? this.props.grecaptcha.getResponse(this._widgetId) : null
    }
    ,
    n.getWidgetId = function() {
        return this.props.grecaptcha && this._widgetId !== void 0 ? this._widgetId : null
    }
    ,
    n.execute = function() {
        var a = this.props.grecaptcha;
        if (a && this._widgetId !== void 0)
            return a.execute(this._widgetId);
        this._executeRequested = !0
    }
    ,
    n.executeAsync = function() {
        var a = this;
        return new Promise(function(i, c) {
            a.executionResolve = i,
            a.executionReject = c,
            a.execute()
        }
        )
    }
    ,
    n.reset = function() {
        this.props.grecaptcha && this._widgetId !== void 0 && this.props.grecaptcha.reset(this._widgetId)
    }
    ,
    n.handleExpired = function() {
        this.props.onExpired ? this.props.onExpired() : this.handleChange(null)
    }
    ,
    n.handleErrored = function() {
        this.props.onErrored && this.props.onErrored(),
        this.executionReject && (this.executionReject(),
        delete this.executionResolve,
        delete this.executionReject)
    }
    ,
    n.handleChange = function(a) {
        this.props.onChange && this.props.onChange(a),
        this.executionResolve && (this.executionResolve(a),
        delete this.executionReject,
        delete this.executionResolve)
    }
    ,
    n.explicitRender = function() {
        if (this.props.grecaptcha && this.props.grecaptcha.render && this._widgetId === void 0) {
            var a = document.createElement("div");
            this._widgetId = this.props.grecaptcha.render(a, {
                sitekey: this.props.sitekey,
                callback: this.handleChange,
                theme: this.props.theme,
                type: this.props.type,
                tabindex: this.props.tabindex,
                "expired-callback": this.handleExpired,
                "error-callback": this.handleErrored,
                size: this.props.size,
                stoken: this.props.stoken,
                hl: this.props.hl,
                badge: this.props.badge
            }),
            this.captcha.appendChild(a)
        }
        this._executeRequested && this.props.grecaptcha && this._widgetId !== void 0 && (this._executeRequested = !1,
        this.execute())
    }
    ,
    n.componentDidMount = function() {
        this.explicitRender()
    }
    ,
    n.componentDidUpdate = function() {
        this.explicitRender()
    }
    ,
    n.componentWillUnmount = function() {
        this._widgetId !== void 0 && (this.delayOfCaptchaIframeRemoving(),
        this.reset())
    }
    ,
    n.delayOfCaptchaIframeRemoving = function() {
        var a = document.createElement("div");
        for (document.body.appendChild(a),
        a.style.display = "none"; this.captcha.firstChild; )
            a.appendChild(this.captcha.firstChild);
        setTimeout(function() {
            document.body.removeChild(a)
        }, 5e3)
    }
    ,
    n.handleRecaptchaRef = function(a) {
        this.captcha = a
    }
    ,
    n.render = function() {
        var a = this.props;
        a.sitekey,
        a.onChange,
        a.theme,
        a.type,
        a.tabindex,
        a.onExpired,
        a.onErrored,
        a.size,
        a.stoken,
        a.grecaptcha,
        a.badge,
        a.hl;
        var i = au(a, ["sitekey", "onChange", "theme", "type", "tabindex", "onExpired", "onErrored", "size", "stoken", "grecaptcha", "badge", "hl"]);
        return s.createElement("div", Xn({}, i, {
            ref: this.handleRecaptchaRef
        }))
    }
    ,
    t
}(s.Component);
Cn.displayName = "ReCAPTCHA";
Cn.propTypes = {
    sitekey: o.string.isRequired,
    onChange: o.func,
    grecaptcha: o.object,
    theme: o.oneOf(["dark", "light"]),
    type: o.oneOf(["image", "audio"]),
    tabindex: o.number,
    onExpired: o.func,
    onErrored: o.func,
    size: o.oneOf(["compact", "normal", "invisible"]),
    stoken: o.string,
    hl: o.string,
    badge: o.oneOf(["bottomright", "bottomleft", "inline"])
};
Cn.defaultProps = {
    onChange: function() {},
    theme: "light",
    type: "image",
    tabindex: 0,
    size: "normal",
    badge: "bottomright"
};
var Oo = {
    exports: {}
}
  , z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var se = typeof Symbol == "function" && Symbol.for
  , br = se ? Symbol.for("react.element") : 60103
  , hr = se ? Symbol.for("react.portal") : 60106
  , Tn = se ? Symbol.for("react.fragment") : 60107
  , Sn = se ? Symbol.for("react.strict_mode") : 60108
  , On = se ? Symbol.for("react.profiler") : 60114
  , Rn = se ? Symbol.for("react.provider") : 60109
  , Dn = se ? Symbol.for("react.context") : 60110
  , Er = se ? Symbol.for("react.async_mode") : 60111
  , kn = se ? Symbol.for("react.concurrent_mode") : 60111
  , wn = se ? Symbol.for("react.forward_ref") : 60112
  , xn = se ? Symbol.for("react.suspense") : 60113
  , su = se ? Symbol.for("react.suspense_list") : 60120
  , Mn = se ? Symbol.for("react.memo") : 60115
  , Ln = se ? Symbol.for("react.lazy") : 60116
  , iu = se ? Symbol.for("react.block") : 60121
  , lu = se ? Symbol.for("react.fundamental") : 60117
  , cu = se ? Symbol.for("react.responder") : 60118
  , uu = se ? Symbol.for("react.scope") : 60119;
function ge(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case br:
            switch (e = e.type,
            e) {
            case Er:
            case kn:
            case Tn:
            case On:
            case Sn:
            case xn:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case Dn:
                case wn:
                case Ln:
                case Mn:
                case Rn:
                    return e;
                default:
                    return t
                }
            }
        case hr:
            return t
        }
    }
}
function Ro(e) {
    return ge(e) === kn
}
z.AsyncMode = Er;
z.ConcurrentMode = kn;
z.ContextConsumer = Dn;
z.ContextProvider = Rn;
z.Element = br;
z.ForwardRef = wn;
z.Fragment = Tn;
z.Lazy = Ln;
z.Memo = Mn;
z.Portal = hr;
z.Profiler = On;
z.StrictMode = Sn;
z.Suspense = xn;
z.isAsyncMode = function(e) {
    return Ro(e) || ge(e) === Er
}
;
z.isConcurrentMode = Ro;
z.isContextConsumer = function(e) {
    return ge(e) === Dn
}
;
z.isContextProvider = function(e) {
    return ge(e) === Rn
}
;
z.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === br
}
;
z.isForwardRef = function(e) {
    return ge(e) === wn
}
;
z.isFragment = function(e) {
    return ge(e) === Tn
}
;
z.isLazy = function(e) {
    return ge(e) === Ln
}
;
z.isMemo = function(e) {
    return ge(e) === Mn
}
;
z.isPortal = function(e) {
    return ge(e) === hr
}
;
z.isProfiler = function(e) {
    return ge(e) === On
}
;
z.isStrictMode = function(e) {
    return ge(e) === Sn
}
;
z.isSuspense = function(e) {
    return ge(e) === xn
}
;
z.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Tn || e === kn || e === On || e === Sn || e === xn || e === su || typeof e == "object" && e !== null && (e.$$typeof === Ln || e.$$typeof === Mn || e.$$typeof === Rn || e.$$typeof === Dn || e.$$typeof === wn || e.$$typeof === lu || e.$$typeof === cu || e.$$typeof === uu || e.$$typeof === iu)
}
;
z.typeOf = ge;
Oo.exports = z;
var du = Oo.exports
  , vr = du
  , fu = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
}
  , mu = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
}
  , pu = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}
  , Do = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}
  , _r = {};
_r[vr.ForwardRef] = pu;
_r[vr.Memo] = Do;
function ca(e) {
    return vr.isMemo(e) ? Do : _r[e.$$typeof] || fu
}
var yu = Object.defineProperty
  , gu = Object.getOwnPropertyNames
  , ua = Object.getOwnPropertySymbols
  , bu = Object.getOwnPropertyDescriptor
  , hu = Object.getPrototypeOf
  , da = Object.prototype;
function ko(e, t, n) {
    if (typeof t != "string") {
        if (da) {
            var r = hu(t);
            r && r !== da && ko(e, r, n)
        }
        var a = gu(t);
        ua && (a = a.concat(ua(t)));
        for (var i = ca(e), c = ca(t), l = 0; l < a.length; ++l) {
            var u = a[l];
            if (!mu[u] && !(n && n[u]) && !(c && c[u]) && !(i && i[u])) {
                var d = bu(t, u);
                try {
                    yu(e, u, d)
                } catch {}
            }
        }
    }
    return e
}
var Eu = ko;
const vu = ka(Eu);
function Jn() {
    return Jn = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Jn.apply(this, arguments)
}
function _u(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), a, i;
    for (i = 0; i < r.length; i++)
        a = r[i],
        !(t.indexOf(a) >= 0) && (n[a] = e[a]);
    return n
}
function Cu(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    e.__proto__ = t
}
var De = {}
  , Tu = 0;
function Su(e, t) {
    return t = t || {},
    function(r) {
        var a = r.displayName || r.name || "Component"
          , i = function(l) {
            Cu(u, l);
            function u(p, m) {
                var y;
                return y = l.call(this, p, m) || this,
                y.state = {},
                y.__scriptURL = "",
                y
            }
            var d = u.prototype;
            return d.asyncScriptLoaderGetScriptLoaderID = function() {
                return this.__scriptLoaderID || (this.__scriptLoaderID = "async-script-loader-" + Tu++),
                this.__scriptLoaderID
            }
            ,
            d.setupScriptURL = function() {
                return this.__scriptURL = typeof e == "function" ? e() : e,
                this.__scriptURL
            }
            ,
            d.asyncScriptLoaderHandleLoad = function(m) {
                var y = this;
                this.setState(m, function() {
                    return y.props.asyncScriptOnLoad && y.props.asyncScriptOnLoad(y.state)
                })
            }
            ,
            d.asyncScriptLoaderTriggerOnScriptLoaded = function() {
                var m = De[this.__scriptURL];
                if (!m || !m.loaded)
                    throw new Error("Script is not loaded.");
                for (var y in m.observers)
                    m.observers[y](m);
                delete window[t.callbackName]
            }
            ,
            d.componentDidMount = function() {
                var m = this
                  , y = this.setupScriptURL()
                  , b = this.asyncScriptLoaderGetScriptLoaderID()
                  , E = t
                  , g = E.globalName
                  , h = E.callbackName
                  , v = E.scriptId;
                if (g && typeof window[g] < "u" && (De[y] = {
                    loaded: !0,
                    observers: {}
                }),
                De[y]) {
                    var S = De[y];
                    if (S && (S.loaded || S.errored)) {
                        this.asyncScriptLoaderHandleLoad(S);
                        return
                    }
                    S.observers[b] = function(T) {
                        return m.asyncScriptLoaderHandleLoad(T)
                    }
                    ;
                    return
                }
                var O = {};
                O[b] = function(T) {
                    return m.asyncScriptLoaderHandleLoad(T)
                }
                ,
                De[y] = {
                    loaded: !1,
                    observers: O
                };
                var w = document.createElement("script");
                w.src = y,
                w.async = !0;
                for (var x in t.attributes)
                    w.setAttribute(x, t.attributes[x]);
                v && (w.id = v);
                var D = function(C) {
                    if (De[y]) {
                        var M = De[y]
                          , L = M.observers;
                        for (var A in L)
                            C(L[A]) && delete L[A]
                    }
                };
                h && typeof window < "u" && (window[h] = function() {
                    return m.asyncScriptLoaderTriggerOnScriptLoaded()
                }
                ),
                w.onload = function() {
                    var T = De[y];
                    T && (T.loaded = !0,
                    D(function(C) {
                        return h ? !1 : (C(T),
                        !0)
                    }))
                }
                ,
                w.onerror = function() {
                    var T = De[y];
                    T && (T.errored = !0,
                    D(function(C) {
                        return C(T),
                        !0
                    }))
                }
                ,
                document.body.appendChild(w)
            }
            ,
            d.componentWillUnmount = function() {
                var m = this.__scriptURL;
                if (t.removeOnUnmount === !0)
                    for (var y = document.getElementsByTagName("script"), b = 0; b < y.length; b += 1)
                        y[b].src.indexOf(m) > -1 && y[b].parentNode && y[b].parentNode.removeChild(y[b]);
                var E = De[m];
                E && (delete E.observers[this.asyncScriptLoaderGetScriptLoaderID()],
                t.removeOnUnmount === !0 && delete De[m])
            }
            ,
            d.render = function() {
                var m = t.globalName
                  , y = this.props;
                y.asyncScriptOnLoad;
                var b = y.forwardedRef
                  , E = _u(y, ["asyncScriptOnLoad", "forwardedRef"]);
                return m && typeof window < "u" && (E[m] = typeof window[m] < "u" ? window[m] : void 0),
                E.ref = b,
                f.createElement(r, E)
            }
            ,
            u
        }(f.Component)
          , c = f.forwardRef(function(l, u) {
            return f.createElement(i, Jn({}, l, {
                forwardedRef: u
            }))
        });
        return c.displayName = "AsyncScriptLoader(" + a + ")",
        c.propTypes = {
            asyncScriptOnLoad: o.func
        },
        vu(c, r)
    }
}
var wo = "onloadcallback"
  , Ou = "grecaptcha";
function Ru() {
    return typeof window < "u" && window.recaptchaOptions || {}
}
function Du() {
    var e = Ru()
      , t = e.useRecaptchaNet ? "recaptcha.net" : "www.google.com";
    return "https://" + t + "/recaptcha/api.js?onload=" + wo + "&render=explicit"
}
const ku = Su(Du, {
    callbackName: wo,
    globalName: Ou
})(Cn)
  , Cr = s.forwardRef(({onChange: e},t)=>{
    const r = yn().RECAPTCHA_KEY;
    return s.createElement(ku, {
        sitekey: r,
        onChange: e,
        ref: t
    })
}
);
Cr.propTypes = {
    onChange: o.func
};
Cr.displayName = "CaptchaField";
function xo({value: e, onChange: t, ...n}) {
    const r = (i,...c)=>{
        const l = i.target.value;
        t(l, ...c)
    }
      , a = e && e.name ? e.name : e;
    return s.createElement(pe, {
        onChange: r,
        value: a,
        ...n
    })
}
xo.propTypes = {
    onChange: o.func,
    value: o.shape({
        name: o.any
    })
};
const wu = ({text: e, type: t="noBackground", display: n="inline"})=>{
    let r;
    switch (t) {
    case "warning":
        {
            r = "gold";
            break
        }
    case "dark":
        {
            r = "#dedfe1";
            break
        }
    default:
        r = void 0
    }
    return s.createElement("span", {
        className: "font-medium pl-2 pr-2 mb-1 bg-gray-400 border-b border-gray-500",
        style: {
            backgroundColor: r,
            display: n
        }
    }, e)
}
  , Mo = ({url: e})=>{
    const {t} = j()
      , n = t("label.download_file");
    return s.createElement(re, {
        href: e,
        target: "_blank",
        rel: "noopener noreferrer"
    }, s.createElement(Ua, {
        size: "md"
    }), n)
}
;
Mo.propTypes = {
    url: o.string.isRequired
};
const Tr = (e,t)=>{
    const [n,r] = f.useState(!1)
      , {reset: a, fetch: i, error: c, loading: l, data: u} = Le({
        resource: e,
        method: "POST"
    });
    return f.useEffect(()=>{
        i()
    }
    , []),
    f.useEffect(()=>{
        u && u.download_url && n && n && (r(!1),
        window.open(u.download_url),
        a(),
        i())
    }
    , [n, u]),
    {
        download: ()=>{
            l || i(),
            n || r(!0)
        }
        ,
        update: i,
        error: c,
        loading: l,
        url: u && u.download_url
    }
}
  , Lo = ({url: e, authorized: t=!1})=>{
    const {t: n} = j()
      , r = n("label.download_file")
      , a = e && e.replace(/^\/|\/$/g, "");
    t = t != null ? t : !0;
    const {loading: i, error: c, url: l, update: u} = Tr(a);
    return f.useEffect(()=>{
        c && window.console.error(c)
    }
    , [c]),
    s.createElement(re, {
        disabled: i,
        href: l,
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: u
    }, s.createElement(Ua, {
        size: "md"
    }), r)
}
;
Lo.propTypes = {
    url: o.string.isRequired,
    authorized: o.bool
};
function xu(e) {
    const {name: t} = Ie();
    return it(t) ? s.createElement(Mo, {
        ...e
    }) : s.createElement(Lo, {
        ...e
    })
}
const Io = f.createContext({
    document: null,
    template: null,
    step: null,
    user: null,
    form: null,
    submit: null,
    fields: null,
    t: null
});
function Fo(e) {
    const {t} = V();
    return s.createElement(ne, null, t(e.content))
}
Fo.propTypes = {
    content: o.any
};
function Pt() {
    return f.useContext(Ao)
}
const Ao = f.createContext(null);
function Mu(e, t, n, r, a) {
    return Object.keys(e || {}).filter(c=>{
        const l = a[c];
        return l ? l.editable : !0
    }
    ).reduce((c,l)=>{
        const u = a[l];
        let d = e[l];
        return (u == null ? void 0 : u.type) === "entity_recipient" && typeof d == "string" && (d = {
            name: d
        }),
        {
            ...c,
            [l]: d
        }
    }
    , {})
}
function V() {
    return f.useContext(Io)
}
function Lu(e) {
    const t = V();
    return f.useMemo(()=>{
        var a;
        if (!e)
            return null;
        const n = {}
          , r = e ? ((a = e.error) == null ? void 0 : a.data) || {} : {};
        return r.invalid_fields && r.invalid_fields.forEach(i=>{
            var d, p;
            const c = Pi(i.invalid_field, t.form.fields)
              , l = ".form.api_validation.".concat(t.template.refname, ".").concat(i.invalid_field);
            let u = t.t("." + i.error_info || ".form.validation");
            if (!i.error_info)
                if (t.t("." + l) === l) {
                    const m = c.label ? c.label : (d = c == null ? void 0 : c.params) != null && d["aria-label"] ? "." + ((p = c == null ? void 0 : c.params) == null ? void 0 : p["aria-label"]) : (c == null ? void 0 : c["aria-label"]) || void 0
                      , y = t.t(m);
                    u = 'Η τιμή του πεδίου "'.concat(y, '" δεν είναι έγκυρη.'),
                    m === void 0 && (u = null)
                } else
                    u = t.t(l);
            u && (n[i.invalid_field] = {
                message: u
            })
        }
        ),
        n
    }
    , [e])
}
function Iu(e) {
    const {i18n: {language: t}} = j();
    return e.map(n=>(n["user-message"] && (n.meta = n.meta || {},
    n.meta["original-message"] = n.message,
    n.message = n["user-message"][t] || n["user-message"].el || n["user-message"]),
    n))
}
const Fu = f.lazy(()=>$e(()=>import("./SafeHTML-C3YRFdZj.js"), __vite__mapDeps([0, 1, 2])));
function Be(e) {
    const t = lt()
      , n = xa()
      , r = Pt()
      , a = e ? e.errors || [] : []
      , i = Iu(a)
      , c = Lu(e)
      , {t: l} = j();
    f.useEffect(()=>{
        if (n(),
        e && !i.length) {
            const u = ".generic.error" + (e.status ? "." + e.status : "");
            t(l(u), "error")
        }
        if (i.forEach(u=>{
            u.message !== "wrong_update_fields" && t(l(u.message), "error")
        }
        ),
        c && !i.length && t(l("Unexpected_error"), "error"),
        c && Object.keys(c).length > 0) {
            const u = {};
            for (const d of Object.keys(c)) {
                const p = s.createElement(Fu, {
                    content: c[d].message
                });
                u[d] = {
                    message: p
                }
            }
            r && r.setCustomErrors(u)
        }
    }
    , [c, i.length, r == null ? void 0 : r.setCustomErrors])
}
let Po = 0;
Po++;
function Au(e, t, n) {
    const r = e.reduce((a,i)=>{
        const c = i == null ? void 0 : i.invalid_field;
        if (t[c]) {
            const l = i == null ? void 0 : i.error_info
              , u = Object.keys(typeof l == "string" ? {
                1: l
            } : l)
              , d = {
                [t[c]]: {
                    meta: {
                        nested: u.reduce((p,m)=>({
                            ...p,
                            [m]: [{
                                invalid_field: c,
                                error_info: typeof l == "string" ? l : l[m]
                            }]
                        }), {})
                    }
                }
            };
            return mn(a, d)
        } else
            return {
                ...a,
                [c]: i
            }
    }
    , {});
    return Object.keys(r).reduce((a,i)=>[...a, {
        invalid_field: i,
        ...r[i]
    }], [])
}
function Pu(e) {
    return e.reduce((t,n)=>{
        var i;
        const r = (n == null ? void 0 : n.type) === "listOf"
          , a = {};
        return r && (((i = n == null ? void 0 : n.params) == null ? void 0 : i.fields) || []).forEach(c=>{
            a[c.key] = n.key
        }
        ),
        {
            ...a,
            ...t
        }
    }
    , {})
}
function Nu(e, t) {
    const [n,r] = f.useState(e);
    return f.useEffect(()=>{
        var a, i;
        if (!e || !t)
            r(e);
        else {
            const c = Pu(Object.values(t));
            if ((i = (a = e == null ? void 0 : e.error) == null ? void 0 : a.data) != null && i.invalid_fields) {
                const l = Au(e.error.data.invalid_fields, c);
                e.error.data.invalid_fields = l
            }
            r(e)
        }
    }
    , [e, t]),
    n
}
function $u(e, t) {
    return f.useMemo(()=>{
        var r, a;
        return (((a = (r = e == null ? void 0 : e.error) == null ? void 0 : r.data) == null ? void 0 : a.invalid_fields) || []).reduce((i,c)=>{
            var l;
            return {
                ...i,
                [c.invalid_field]: {
                    message: c.error_info || ((l = e == null ? void 0 : e.error) == null ? void 0 : l.message) || "",
                    ...c
                }
            }
        }
        , {})
    }
    , [e, t])
}
function No({form: e, errors: t, children: n, native: r, method: a, action: i}) {
    const [c,l] = f.useState(null)
      , [u,d] = f.useState(null)
      , {form: {fieldsMap: p}, document: m, step: y, user: b, t: E} = V()
      , g = mr(m, y, b, E)
      , h = f.useMemo(()=>g ? g.reduce((F,P)=>(P.type === "recipient" && P.value && P.value.name && (P.value = P.value.name),
    {
        ...F,
        [P.key]: P.value
    }), {}) : null, [g])
      , v = f.useRef()
      , [S,O] = f.useState(null)
      , w = Nu(S, p)
      , x = $u(w, p);
    Be(w);
    const [D,T] = f.useState({})
      , C = f.useMemo(()=>({
        ...t || {},
        ...D || {},
        ...x || {}
    }), [t, x, D])
      , M = f.useCallback(F=>{
        F = Mu(F, m, b, y, p),
        l(F),
        d(!0),
        O(null)
    }
    , [l, d, m, b, y, p])
      , L = "form-".concat(Po)
      , A = f.useMemo(()=>({
        data: c,
        setData: l,
        submitted: u,
        setSubmitted: d,
        formRef: v,
        onSubmit: M,
        customErrors: D,
        setCustomErrors: T,
        apiErrors: S,
        setAPIErrors: O,
        id: L
    }), [v, c, l, u, d, D, T, S, O]);
    return s.createElement(Ao.Provider, {
        value: A
    }, s.createElement(ct, {
        errors: C,
        fields: e.fields,
        onSubmit: M,
        initial: h,
        formRef: v,
        id: L,
        native: r,
        method: a,
        action: i
    }, n))
}
No.propTypes = {
    children: o.any,
    errors: o.any,
    form: o.shape({
        fields: o.any
    }),
    native: o.bool,
    method: o.string,
    action: o.string
};
const Vu = f.lazy(()=>$e(()=>import("./SafeHTML-C3YRFdZj.js"), __vite__mapDeps([0, 1, 2])));
function Jt({"default-value": e, value: t, i18n: n, safe: r, layout: a={}}) {
    const {t: i} = V();
    r = r != null ? r : !0;
    let c = t || e;
    return n && (c = i(c)),
    s.createElement(U, {
        item: !0,
        xs: a.xs || 12,
        sm: a.sm || 12,
        md: a.md || void 0
    }, s.createElement(ne, null, r ? s.createElement(Vu, {
        style: {
            whiteSpace: "normal"
        },
        content: c
    }) : c))
}
Jt.propTypes = {
    "default-value": o.string,
    value: o.any,
    i18n: o.bool,
    safe: o.bool
};
function Fe({Icon: e, label: t, ...n}) {
    const r = !e;
    return s.createElement(re, {
        ...n
    }, !r && s.createElement(e, null), t)
}
Fe.propTypes = {
    Icon: o.any,
    color: o.string,
    label: o.any
};
function Je({label: e, className: t, title: n, ...r}) {
    const {t: a} = V();
    return s.createElement(Fe, {
        label: a(e) || a(".button.continue"),
        title: a(n),
        ...r
    })
}
Je.propTypes = {
    className: o.any,
    label: o.any,
    title: o.any
};
const Nt = f.createContext({
    processing: !1
});
function In({...e}) {
    var y;
    const {document: t, advance: n} = V()
      , r = Pt()
      , [a,i] = f.useState(null)
      , c = (y = e == null ? void 0 : e["component-params"]) == null ? void 0 : y.interactive
      , l = Qa(t.template.refname, r.data, c);
    f.useEffect(()=>{
        r.data && i(r.data)
    }
    , [r.data, r.submitted]),
    f.useEffect(()=>{
        r.submitted && a !== null && (l.fetch(),
        i(null))
    }
    , [r.submitted, a]);
    const {setClaimError: u} = f.useContext(Nt)
      , d = pn()
      , {refname: p} = ce()
      , m = f.useMemo(()=>window.localStorage.getItem("auto-create-document"), []);
    return f.useEffect(()=>{
        !l.error && l.loaded && l.data && n(l.data)
    }
    , [l.loaded, l.error, l.data]),
    Be(l.error),
    f.useEffect(()=>{
        l.error && l.error.error.message === "missing_required_claims" ? u(l.error.error.data.missing[0]) : u(null)
    }
    , [l.error]),
    f.useEffect(()=>{
        d != null && d.anonymous_login && (m === p && l.fetch(),
        l.loaded && window.localStorage.removeItem("auto-create-document"))
    }
    , [l, d == null ? void 0 : d.anonymous_login, m, p]),
    s.createElement(U, {
        container: !0
    }, s.createElement(U, {
        item: !0,
        xs: 12
    }, s.createElement(Je, {
        disabled: l.loading,
        type: "submit",
        ...e
    })))
}
In.propTypes = {
    "component-params": {
        interactive: o.any
    }
};
const ju = f.createContext({
    document: null
});
o.any,
o.any;
const Uu = ()=>s.useContext(ju);
function $o(e) {
    var E, g, h;
    const {document: t, t: n} = V()
      , [r,a] = f.useState(null)
      , i = Ke("action")
      , {fetch: c, data: l} = Le({
        resource: i,
        id: "",
        method: "POST",
        data: {
            action: "pdf",
            object_id: "".concat(t.id),
            arguments: {
                retrieval: "content-uri"
            }
        },
        consume: !1
    })
      , u = yn()
      , {contextid: d} = ce()
      , {document: p} = Uu();
    f.useEffect(()=>{
        !p && d !== u.VALIDATION_DEFAULT_CONTEXT && c()
    }
    , [p, d]),
    f.useEffect(()=>{
        var v;
        (v = p == null ? void 0 : p.data) != null && v["document-pdf"] ? a(p.data["document-pdf"]["content-uri"]) : l && a(l["content-uri"])
    }
    , [l == null ? void 0 : l["content-uri"], (E = p == null ? void 0 : p.data) == null ? void 0 : E["document-pdf"]]);
    const m = e.icon ? ()=>s.createElement(Ba, {
        size: "md"
    }) : null
      , y = (g = e.color) != null ? g : e.primary ? "primary" : "secondary"
      , b = (h = e.variant) != null ? h : "button";
    return s.createElement(Fe, {
        color: y,
        href: r,
        variant: b,
        marginRight: 2,
        component: "a",
        target: "_blank",
        rel: "noopener noreferrer",
        label: n(e.label),
        "aria-label": n(e.helptext),
        Icon: m
    })
}
$o.propTypes = {
    color: o.any,
    icon: o.any,
    label: o.any,
    primary: o.any,
    variant: o.any,
    helptext: o.any
};
function Vo(e) {
    var m, y;
    const {document: t, t: n, scope: r, params: a} = V()
      , i = Ni()
      , c = e.icon ? ()=>s.createElement(Ba, {
        size: "md"
    }) : null
      , l = (m = e.color) != null ? m : e.primary ? "primary" : "secondary"
      , u = (y = e.variant) != null ? y : "button"
      , {url: d, update: p} = Tr(i);
    return s.createElement(Fe, {
        color: l,
        variant: u,
        marginRight: 2,
        component: "a",
        href: d,
        target: "_blank",
        rel: "noopener noreferrer",
        label: n(e.label),
        "aria-label": n(e.helptext),
        onClick: p,
        Icon: c
    })
}
Vo.propTypes = {
    color: o.any,
    icon: o.any,
    label: o.any,
    primary: o.any,
    variant: o.string
};
function jo(e) {
    const {name: t} = Ie();
    return it(t) ? s.createElement($o, {
        ...e,
        scope: t
    }) : s.createElement(Vo, {
        ...e
    })
}
const Uo = e=>{
    const {t} = j()
      , n = [{
        name: "firstname",
        key: "firstname",
        label: t("declaration_actions.share.firstname"),
        type: "string",
        required: !0
    }, {
        name: "surname",
        key: "surname",
        label: t("declaration_actions.share.surname"),
        type: "string",
        required: !0
    }, {
        name: "afm",
        key: "afm",
        label: t("declaration_actions.share.afm"),
        type: "afm",
        required: !0
    }];
    return s.createElement(ct, {
        fields: n,
        onSubmit: e.onSubmit
    }, e.children)
}
;
Uo.propTypes = {
    children: o.any,
    onSubmit: o.any
};
const Bo = e=>{
    const {t} = j()
      , n = ce();
    return lr.createPortal(s.createElement(s.Fragment, null, s.createElement(Xe, {
        open: e.open,
        onClose: ()=>e.setOpen(!1)
    }, s.createElement(Ve, null, e.title), s.createElement(Uo, {
        entity: n.entityId,
        onSubmit: e.onSubmit
    }, s.createElement(je, null, s.createElement("p", null, t("declaration_actions.share.help_text")), s.createElement(ne, null, s.createElement(Me, {
        name: "firstname"
    }), s.createElement(Me, {
        name: "surname"
    }), s.createElement(Me, {
        name: "afm"
    }))), e.processing && s.createElement(xt, {
        style: {
            margin: "5px 0"
        }
    }), s.createElement(Ue, null, s.createElement(re, {
        type: "submit",
        disabled: e.processing
    }, t(e.submit || "declaration_actions.share.confirm_submit")), s.createElement(re, {
        marginRight: 2,
        disabled: e.processing,
        onClick: ()=>e.setOpen(!1),
        color: "secondary"
    }, t(e.abort || "declaration_actions.share.confirm_abort")))))), document.querySelector("#modal-container"))
}
;
Bo.propTypes = {
    abort: o.string,
    onSubmit: o.any,
    open: o.any,
    processing: o.any,
    setOpen: o.func,
    submit: o.string,
    title: o.any
};
const Bu = e=>{
    const [t,n] = f.useState(!1);
    function r() {
        n(!0)
    }
    return {
        Confirm: Bo,
        props: {
            ...e,
            open: t,
            setOpen: n
        },
        confirm: r
    }
}
;
function Yo({primary: e, ...t}) {
    var g, h;
    const {t: n} = j()
      , r = lt()
      , [a,i] = f.useState(null);
    console.log(a);
    const {fetch: c, error: l, loading: u, loaded: d} = $i(a && {
        person: a
    });
    f.useEffect(()=>{
        a && c()
    }
    , [a]),
    Be(l);
    const {props: p, confirm: m, Confirm: y} = Bu({
        title: n("declaration_actions.share.confirm_title"),
        content: n("declaration_actions.share.confirm_content"),
        onSubmit: v=>{
            i(v)
        }
    });
    f.useEffect(()=>{
        d && (p.setOpen(!1),
        l || r(n("declaration_actions.share.success"), "success"))
    }
    , [d]);
    const b = (g = t.color) != null ? g : e ? "primary" : "secondary"
      , E = (h = t.variant) != null ? h : "button";
    return s.createElement(s.Fragment, null, s.createElement(y, {
        processing: u,
        ...p
    }), s.createElement(Fe, {
        color: b,
        variant: E,
        marginRight: 2,
        label: n("declaration_actions.share.button_label"),
        disabled: t.disabled,
        onClick: ()=>{
            window.setTimeout(()=>{
                m()
            }
            , 1)
        }
    }))
}
Yo.propTypes = {
    primary: o.any,
    disabled: o.bool,
    variant: o.string,
    color: o.string
};
const Ho = e=>{
    const {t} = j();
    return s.createElement(Lt, {
        warning: !0
    }, s.createElement(we, {
        size: "md"
    }, t("info.missing_claim.title")), s.createElement(ne, null, t("info.missing_claim.warning")), s.createElement(ne, null, t("info.missing_claim.text")), s.createElement(ne, null, s.createElement("em", null, e.claims)))
}
;
Ho.propTypes = {
    claims: o.any
};
const Yu = ()=>{
    const {t: e} = j()
      , t = bn()
      , {logout: n} = cr();
    function r(a) {
        window.localStorage.setItem("dilosi-login-next", t.pathname + t.search),
        n("/api/login", !0, !1)
    }
    return s.createElement(Lt, {
        warning: !0
    }, s.createElement(we, {
        size: "sm"
    }, e("info.no-mobile.title")), s.createElement(ne, null, e("mobile_claim_error.warning")), s.createElement(ne, null, e("mobile_claim_error.text")), s.createElement(re, {
        onClick: r
    }, e("mobile_claim_error.link")))
}
  , Hu = ()=>{
    const {t: e} = j()
      , t = bn()
      , {logout: n} = cr();
    function r() {
        n(),
        window.localStorage.setItem("dilosi-login-next", t.pathname + t.search),
        window.location = "/api/gsis_login"
    }
    return s.createElement(Lt, {
        warning: !0
    }, s.createElement(we, {
        size: "sm"
    }, e("info.no-gsis-login.title")), s.createElement(ne, null, e("gsis_login_claim_error.text")), s.createElement(re, {
        onClick: r
    }, e("gsis_login_claim_error.link")))
}
  , zo = ({document: e})=>{
    const {t} = j()
      , n = bn()
      , {logout: r} = cr();
    function a() {
        r(),
        window.localStorage.setItem("dilosi-login-next", n.pathname + n.search),
        window.location = "/" + e.template.login_endpoint
    }
    return s.createElement(Lt, {
        warning: !0
    }, s.createElement(we, {
        size: "sm"
    }, t("info.anonymous.title")), s.createElement(ne, null, t("info.anonymous.claim_error_text")), s.createElement(re, {
        onClick: a
    }, t("info.anonymous.claim_error_link")))
}
;
zo.propTypes = {
    document: o.shape({
        template: o.shape({
            login_endpoint: o.any
        })
    })
};
o.func.isRequired,
o.string,
o.string,
o.string;
function Go({left: e, right: t}) {
    return s.createElement(U, {
        container: !0,
        spacing: 6
    }, s.createElement(U, {
        item: !0,
        md: 8,
        xs: 12
    }, s.createElement(Ce, {
        elements: e
    })), s.createElement(U, {
        item: !0,
        md: 4,
        xs: 12
    }, s.createElement(Ce, {
        elements: t
    })))
}
Go.propTypes = {
    left: o.any,
    right: o.any
};
function qo({fields: e, ...t}) {
    return s.createElement(Mt, {
        as: "div",
        marginBottom: 6
    }, s.createElement(U, {
        container: !0,
        spacing: 4
    }, s.createElement(Ce, {
        elements: e
    })))
}
qo.propTypes = {
    fields: o.any,
    spacing: o.number
};
const zu = ["aria-label", "aria-required"];
function Wo({field: e}) {
    const {focusFuncs: {setFocus: t, unsetFocus: n}} = V()
      , r = f.useCallback(()=>{
        t(e.key)
    }
    )
      , a = f.useCallback(()=>{
        n(e.key)
    }
    )
      , i = f.useMemo(()=>{
        const c = (e == null ? void 0 : e["component-params"]) || {}
          , l = {};
        return zu.forEach(u=>{
            c[u] !== void 0 && (l[u] = c[u])
        }
        ),
        e != null && e.required && c["aria-required"] === void 0 && (l["aria-required"] = "true"),
        l
    }
    , [e == null ? void 0 : e["component-params"]]);
    return s.createElement(Me, {
        onFocus: r,
        onBlur: a,
        name: e.key,
        key: e.key,
        ...i
    })
}
Wo.propTypes = {
    field: o.shape({
        key: o.any
    })
};
function Ko({component: e, ...t}) {
    const n = gt[e]
      , r = t["component-params"] || {};
    if (!n)
        throw new Error("Cannot resolve component for display component named " + e);
    return s.createElement(n, {
        ...t,
        ...r
    })
}
Ko.propTypes = {
    component: o.any,
    "component-params": o.any
};
function Xo(e) {
    return s.createElement(U, {
        container: !0,
        spacing: e.spacing || 2
    }, e.fields.map(t=>s.createElement(Me, {
        key: t.key,
        name: t.key
    })))
}
Xo.propTypes = {
    fields: o.array,
    spacing: o.number
};
function Jo(e) {
    const {t} = V()
      , n = f.useMemo(()=>({
        ...e,
        title: t(e.title),
        captionLeft: t(e.captionLeft),
        captionRight: t(e.captionRight)
    }), [e]);
    return s.createElement(Vi, {
        ...n
    })
}
Jo.propTypes = {
    captionLeft: o.any,
    captionRight: o.any,
    title: o.any
};
function Qo({content: e, ...t}) {
    const {t: n} = V();
    return s.createElement(Lt, {
        ...t
    }, n(e))
}
Qo.propTypes = {
    content: o.any
};
const Gu = f.lazy(()=>$e(()=>import("./SafeHTML-C3YRFdZj.js"), __vite__mapDeps([0, 1, 2])));
function Zo({title: e, ...t}) {
    const {t: n} = V();
    return s.createElement(we, {
        ...t
    }, s.createElement(Gu, {
        Tag: "span",
        className: "",
        content: n(e)
    }))
}
Zo.propTypes = {
    title: o.any
};
function qu(e, t, n, r, a, i) {
    const c = e.type
      , l = it(r)
      , u = ji(r, a, "attachments/" + e.key + "/token", l, i, c === "attachment");
    return !l && c === "attachment" ? t ? {
        ...t,
        url: u
    } : null : c === "entity_recipient" || c === "recipient" ? t && (t.name || t) : e["default-value"] && !t ? e["default-value"] : e.value
}
function es({fields: e, params: t}) {
    t = t || {};
    const {document: n, step: r, user: a, t: i} = V()
      , c = f.useMemo(()=>e.filter(([g])=>g === "FIELD").reduce((g,[h,v])=>({
        ...g,
        [v.key]: v
    }), {}), [e])
      , l = f.useMemo(()=>e.map(([g,{field: h, ...v}])=>v), [e])
      , u = fr(l, n, r, a, i)
      , d = f.useMemo(()=>u.filter(g=>t.omit_empty_values ? Ui(g.value) : !0).map(g=>{
        const h = c[g.key];
        if (h) {
            const v = gt[g.component];
            g.jsComponent = function() {
                return s.createElement(v, {
                    ...g
                })
            }
            ,
            g.value = h.value
        }
        return g
    }
    ), [u, t.omit_empty_values])
      , {gateId: p} = Bi()
      , {name: m, options: y} = Ie()
      , b = f.useCallback((g,h,v)=>qu(g, h, v, m, y, p), [m, y, p])
      , E = Yl(l, n, r, a, i, b);
    return d.length ? s.createElement(Et, {
        fields: d,
        values: E
    }) : []
}
es.propTypes = {
    fields: o.array,
    params: o.object
};
function ts({elements: e}) {
    return s.createElement(hn, {
        variant: "border",
        borderColor: "light"
    }, s.createElement(Yi, null, s.createElement(Ce, {
        elements: e
    })))
}
ts.propTypes = {
    elements: o.any
};
function ns({elements: e}) {
    return s.createElement(Mt, {
        paddingTop: 4,
        paddingRight: 4,
        paddingBottom: 2,
        paddingLeft: 4,
        marginBottom: 4,
        className: "border border-black"
    }, s.createElement(Ce, {
        elements: e
    }))
}
ns.propTypes = {
    elements: o.any
};
function rs({title: e, subtitle: t}) {
    const {document: n, t: r} = V();
    return s.createElement(Hi, {
        className: "break-words",
        marginBottom: 4
    }, e && s.createElement(zi, {
        size: "xl"
    }, r(e)), s.createElement(Gi, null, t && r(t), s.createElement("br", null), s.createElement("strong", null, n.reference_code)))
}
rs.propTypes = {
    subtitle: o.any,
    title: o.any
};
function as({step: e, ...t}) {
    const {document: n, advance: r, step: a} = V()
      , i = Qa(n.template.refname)
      , c = Ka(n, e, !1);
    function l() {
        r(n, a, c)
    }
    return s.createElement(Je, {
        disabled: i.loading,
        type: "button",
        onClick: l,
        ...t
    })
}
as.propTypes = {
    step: o.any
};
function os({keys: e}) {
    const {t} = V()
      , n = ur(!0, !0)
      , [r,a] = qi(n, e)
      , i = a.map(c=>({
        key: c,
        label: t(".label." + c),
        type: "string"
    }));
    return s.createElement(s.Fragment, null, s.createElement(Et, {
        fields: i,
        values: r
    }))
}
os.propTypes = {
    keys: o.any
};
function ss({open: e, processing: t, title: n, message: r, confirmLabel: a, cancelLabel: i, onConfirm: c, onCancel: l}) {
    const {t: u} = V();
    return s.createElement(Xe, {
        open: e,
        onClose: ()=>l()
    }, s.createElement(Ve, null, u(n)), r && s.createElement(je, null, s.createElement(ne, null, u(r))), s.createElement(Ue, null, s.createElement(re, {
        disabled: t,
        onClick: c
    }, u(a)), s.createElement(re, {
        disabled: t,
        onClick: l,
        color: "secondary"
    }, u(i))))
}
ss.propTypes = {
    cancelLabel: o.any,
    confirmLabel: o.any,
    message: o.any,
    onCancel: o.func,
    onConfirm: o.any,
    open: o.any,
    processing: o.any,
    title: o.any
};
function sn({label: e, url: t, self: n, icon: r, primary: a, ...i}) {
    var m, y;
    const {t: c} = V()
      , l = {
        rel: n ? "" : "noopener noreferrer",
        target: n ? "_self" : "_blank",
        onClick: i.onClick
    }
      , u = r ? ()=>s.createElement(Tl, {
        size: "md"
    }) : null
      , d = (m = i.color) != null ? m : a ? "primary" : "secondary"
      , p = (y = i.variant) != null ? y : "button";
    return s.createElement(Fe, {
        href: t,
        component: "a",
        label: c(e),
        Icon: u,
        ...l,
        variant: p,
        color: d
    })
}
sn.propTypes = {
    icon: o.any,
    label: o.any,
    primary: o.any,
    self: o.any,
    url: o.any,
    variant: o.any,
    color: o.any,
    onClick: o.func
};
function is(e) {
    const [t,n] = f.useState(!1)
      , {onConfirm: r, processing: a} = e;
    f.useEffect(()=>{
        e.forceClose && n(!1)
    }
    , [e.forceClose]);
    const i = l=>(n(!0),
    l.stopPropagation(),
    l.preventDefault(),
    !1)
      , c = {
        open: t,
        onConfirm: r,
        onCancel: ()=>n(!1),
        title: e.label,
        message: e.confirm_message,
        confirmLabel: e.confirm_confirm_label,
        cancelLabel: e.confirm_cancel_label,
        processing: a
    };
    return s.createElement(s.Fragment, null, s.createElement(ss, {
        ...c
    }), s.createElement(sn, {
        ...e,
        onClick: i
    }))
}
is.propTypes = {
    confirm_cancel_label: o.any,
    confirm_confirm_label: o.any,
    confirm_message: o.any,
    label: o.any,
    onConfirm: o.any,
    processing: o.any,
    forceClose: o.bool
};
function ls(e) {
    const {document: t} = V()
      , n = Za("dismiss", t)
      , r = lt()
      , {t: a} = j();
    function i() {
        n.fetch()
    }
    return f.useEffect(()=>{
        var c;
        n.loaded && !n.error && (window.location = e.url),
        n.error && r(((c = n.error.error) == null ? void 0 : c.message) || a("declaration_actions.dismiss.error"), "error")
    }
    , [n.loaded, n.error]),
    s.createElement(is, {
        onConfirm: i,
        processing: n.loading,
        color: "warning",
        forceClose: n.loaded && n.error,
        ...e
    })
}
ls.propTypes = {
    url: o.any
};
function cs(e) {
    return s.createElement(ls, {
        ...e
    })
}
cs.propTypes = {
    url: o.any
};
function us(e) {
    const {document: t} = V()
      , n = Le({
        resource: "my-declarations/".concat(t.id, "/backstep"),
        method: "POST"
    })
      , r = lt();
    function a() {
        n.fetch()
    }
    return f.useEffect(()=>{
        n.loaded && !n.error && window.location.reload(),
        n.error && r(n.error, "error")
    }
    , [n.loaded, n.error]),
    s.createElement(Je, {
        label: e.label,
        onClick: a,
        color: "secondary"
    })
}
us.propTypes = {
    url: o.any
};
const Wu = ({children: e, onEscape: t, ...n})=>{
    const r = f.useRef()
      , a = f.useRef()
      , i = f.useCallback(()=>{
        r.current.focus()
    }
    , []);
    return Wi("Escape", t),
    f.useEffect(()=>{
        const c = a.current;
        return i(),
        c.addEventListener("focus", i),
        ()=>{
            c.removeEventListener("focus", i)
        }
    }
    , []),
    s.createElement(Ki, {
        open,
        role: "dialog",
        "aria-hidden": "false",
        "aria-modal": "true",
        ...n
    }, s.createElement("span", {
        tabIndex: -1,
        ref: r,
        "aria-hidden": "true"
    }), open && e, s.createElement("span", {
        tabIndex: 0,
        ref: a,
        "aria-hidden": "true"
    }))
}
;
function Sr(e) {
    const t = e.t
      , {state: n, closeDialog: r} = e;
    return s.createElement(s.Fragment, null, s.createElement(Wu, {
        open: n,
        role: "dialog",
        "aria-labelledby": "form-dialog-title"
    }, e.confirm_title && s.createElement(Ve, {
        id: "form-dialog-title"
    }, t(e.confirm_title)), e.confirm_message && s.createElement(je, null, s.createElement(ne, null, t(e.confirm_message))), s.createElement(Ue, null, s.createElement(Zt, {
        onClick: e.submit,
        color: "primary",
        type: e.type,
        form: e.formId
    }, t(e.confirm_confirm_label)), s.createElement(Zt, {
        onClick: a=>{
            a.preventDefault(),
            r()
        }
        ,
        color: "secondary"
    }, t(e.confirm_cancel_label)))))
}
Sr.propTypes = {
    closeDialog: o.any,
    confirm_cancel_label: o.any,
    confirm_confirm_label: o.any,
    confirm_message: o.any,
    confirm_title: o.any,
    formId: o.any,
    state: o.any,
    submit: o.any,
    t: o.func,
    type: o.any
};
function qe({action: e, success: t, advanceStep: n, primary: r, warning: a, color: i, variant: c, icon: l, confirm_cancel_label: u, confirm_confirm_label: d, confirm_message: p, confirm_title: m, disabled: y, label: b, sendMethod: E, ...g}) {
    const {document: h, t: v, advance: S} = V()
      , O = {
        sendMethod: E
    }
      , {submit: w, loading: x, loaded: D, error: T, data: C} = eo(e, h, null, null, null, !0, O)
      , [M,L] = f.useState(!1)
      , A = f.useCallback(()=>L(!1), [])
      , F = f.useCallback(()=>L(!0), [])
      , [P,J] = f.useState(!1)
      , [B,Y] = f.useState(null);
    f.useEffect(()=>{
        Y(C)
    }
    , [C]),
    Be(T);
    const G = lt()
      , {processing: de, setProcessing: ee} = f.useContext(Nt);
    f.useEffect(()=>{
        ee(x)
    }
    , [x]);
    const ae = x || (y ? !!de : !1);
    return f.useEffect(()=>{
        !x && !P && D && !T && (n ? B && (S(B),
        p && A(),
        J(!0)) : (T || G(v(t), "success"),
        p && A(),
        J(!0)))
    }
    , [D, C, S, t, B, P, T]),
    i = i != null ? i : a ? "warning" : i,
    i = i != null ? i : r ? "primary" : "secondary",
    c = c != null ? c : "button",
    s.createElement(s.Fragment, null, p && s.createElement(Sr, {
        confirm_cancel_label: u,
        confirm_confirm_label: d,
        confirm_message: p,
        confirm_title: m,
        t: v,
        state: M,
        closeDialog: A,
        submit: w
    }), s.createElement(Je, {
        disabled: ae,
        type: "button",
        onClick: K=>{
            J(!1),
            Y(null),
            p ? F(K) : w(K)
        }
        ,
        color: i,
        label: b,
        ...g
    }))
}
qe.propTypes = {
    action: o.any,
    advanceStep: o.any,
    color: o.any,
    confirm_cancel_label: o.any,
    confirm_confirm_label: o.any,
    confirm_message: o.func,
    confirm_title: o.any,
    disabled: o.any,
    icon: o.any,
    label: o.any,
    primary: o.any,
    success: o.any,
    variant: o.string,
    warning: o.any,
    sendMethod: o.string
};
function ds({action: e, ...t}) {
    const {advance: n, document: r, step: a, fields: i} = V()
      , c = Pt()
      , l = ["issue", "update"].includes(e)
      , u = e === "issue"
      , [d,p] = f.useState(!1)
      , [m,y] = f.useState(null)
      , b = Object.values(c.data || {}).some(L=>(L == null ? void 0 : L.fileName) && (L == null ? void 0 : L.file))
      , E = i.filter(L=>L.specComponent === "attachment").map(L=>L.key)
      , g = Ke()
      , h = r.id ? r.id : null
      , {fetch: v, loaded: S, loading: O, error: w, data: x} = Le({
        resource: g,
        id: h,
        method: "POST",
        data: m
    });
    Be(w),
    f.useEffect(()=>{
        d && m && (v(),
        p(!1))
    }
    , [d, m]),
    f.useEffect(()=>{
        m && !O && (v(),
        y(null))
    }
    , [m, O]),
    f.useEffect(()=>{
        S && x && (window.CREATED_DOCUMENT = x,
        n(x))
    }
    , [S, x]),
    f.useEffect(()=>{
        if (c.submitted && l)
            if (c.setSubmitted(!1),
            u) {
                const A = {
                    document: {
                        statements: Object.keys(c.data || {}).filter(F=>!E.includes(F)).reduce((F,P)=>({
                            ...F,
                            [P]: c.data[P]
                        }), {}),
                        attachments: {},
                        template: {
                            refname: r.template.refname,
                            "digest-sha256": ""
                        }
                    },
                    interactive: !1
                };
                if (b) {
                    const F = Ma(c.data, A);
                    y(F)
                } else
                    y(A)
            } else {
                const [L,A] = Hr(r, a);
                n(L, a, A)
            }
    }
    , [c.submitted, c.setSubmitted]);
    const {processing: D, setProcessing: T} = f.useContext(Nt);
    f.useEffect(()=>{
        T(O)
    }
    , [O, T]);
    const C = O || (t.disabled ? !!D : !1);
    function M() {
        if (l)
            return !0;
        {
            const [L,A] = Hr(r, a);
            n(L, a, A)
        }
    }
    return s.createElement(U, {
        container: !0
    }, s.createElement(U, {
        item: !0,
        xs: 12
    }, s.createElement(Je, {
        disabled: C,
        type: l ? "submit" : "button",
        onClick: M,
        ...t
    })))
}
ds.propTypes = {
    action: o.any,
    disabled: o.any
};
function ln({action: e, ...t}) {
    return s.createElement(ds, {
        ...t,
        action: e
    })
}
ln.propTypes = {
    action: o.any
};
function fs(e, t, n) {
    const r = !!e;
    n = n || [];
    const [a,i] = f.useState({
        enabled: r,
        retry: !1,
        limit: (e == null ? void 0 : e.retry_limit) || 10,
        delay: (e == null ? void 0 : e.retry_delay) || 2e3,
        count: 0,
        result: null,
        running: !0,
        completed: !r
    })
      , c = f.useCallback(()=>{
        i({
            enabled: r,
            retry: !1,
            limit: (e == null ? void 0 : e.retry_limit) || 10,
            delay: (e == null ? void 0 : e.retry_delay) || 2e3,
            count: 0,
            running: !0,
            completed: !r
        })
    }
    , [a, i, r, e])
      , l = f.useCallback(()=>{
        if (a.count >= a.limit)
            i({
                ...a,
                retry: !1,
                running: !1,
                limited: !0,
                completed: !0
            });
        else {
            const u = a.count + 1;
            i({
                ...a,
                retry: !0,
                running: !0,
                limited: !1,
                completed: !1,
                count: u
            })
        }
    }
    , [a, i]);
    return f.useEffect(()=>{
        t(...n) && !a.limited ? (i({
            ...a,
            retry: !1,
            running: !0
        }),
        window.setTimeout(()=>{
            l()
        }
        , a.delay)) : a.running && i({
            ...a,
            retry: !1,
            running: !1,
            completed: !0,
            limited: !1
        })
    }
    , [...n]),
    {
        ...a,
        reset: c
    }
}
function Ku(e, t) {
    const n = !!e
      , r = f.useMemo(()=>({
        method: "POST"
    }), [])
      , a = f.useMemo(()=>{
        const p = (e == null ? void 0 : e.id_field) || "poll_id";
        return (t || []).reduce((m,y)=>y.key === p ? y.value : m, void 0)
    }
    , [e, t])
      , i = e == null ? void 0 : e.endpoint
      , l = Rl({
        resource: i,
        id: a,
        options: r,
        consume: !!a && !!e && i,
        suspense: !1
    })
      , u = f.useCallback((p,m)=>p && p.status === "pending", [])
      , d = fs(e == null ? void 0 : e.retry, u, [l.data, l.error]);
    return f.useEffect(()=>{
        d.retry && !l.loading && window.setTimeout(()=>{
            l.fetch()
        }
        , 10)
    }
    , [d.retry]),
    f.useMemo(()=>{
        let p, m = !n;
        if (d.completed) {
            const y = l.data;
            y ? y.status !== "pending" && (m = !0) : l.error ? p = l.error : d.limited && (p = new Error("retry_limit_exceeded"),
            p.errors = [{
                message: ".poll.retry_limit_exceeded"
            }])
        }
        return {
            error: p,
            success: m,
            processing: !d.completed
        }
    }
    , [d.completed, l.data, l.error, n])
}
function Xu(e, t) {
    var r, a;
    return !!(((r = t == null ? void 0 : t.error) == null ? void 0 : r.code) === 400 && ((a = t == null ? void 0 : t.data) != null ? a : {}).retry)
}
function ms({label: e, action: t, raw: n, complete: r, type: a, scope: i, confirm_cancel_label: c, confirm_confirm_label: l, confirm_message: u, confirm_title: d, ...p}) {
    var Ze, Bt, Tt, Yt;
    const {document: m, advance: y, t: b, fields: E} = V()
      , {inboxId: g} = ce()
      , [h,v] = f.useState(!1)
      , S = f.useCallback(()=>v(!1), [])
      , O = f.useCallback(()=>v(!0), [])
      , w = f.useMemo(()=>{
        var q, Oe;
        return Object.keys((Oe = (q = m == null ? void 0 : m.step_info) == null ? void 0 : q.fields) != null ? Oe : {}).map(he=>{
            var Ee;
            return {
                key: he,
                ...(Ee = m == null ? void 0 : m.step_info) == null ? void 0 : Ee.fields[he]
            }
        }
        )
    }
    , [(Ze = m == null ? void 0 : m.step_info) == null ? void 0 : Ze.fields])
      , x = p.autocall
      , D = p.poll
      , T = Ku(D, w)
      , C = Pt();
    a = a != null ? a : "submit",
    r = r != null ? r : !0;
    const [M,L] = f.useState(!1)
      , A = Object.values(C.data || {}).some(q=>(q == null ? void 0 : q.fileName) && (q == null ? void 0 : q.file))
      , F = E.filter(q=>q.specComponent === "attachment").map(q=>q.key)
      , [P,J] = f.useState()
      , B = Ke()
      , {fetch: Y, loading: G, loaded: de, error: ee, data: ae} = Le({
        resource: B,
        id: "",
        method: "POST",
        data: P,
        consume: !1,
        suspense: void 0,
        suppressErrors: !0
    })
      , K = fs(p.retry, Xu, [m, ee])
      , ie = ()=>{
        J(null),
        L(!0)
    }
      , xe = pn()
      , {name: Qe} = Ie();
    f.useEffect(()=>{
        if (M) {
            const q = Object.keys(C.data || {}).filter(Ee=>!F.includes(Ee)).reduce((Ee,et)=>({
                ...Ee,
                [et]: typeof C.data[et] == "string" ? C.data[et] : C.data[et] === null ? "" : JSON.stringify(C.data[et])
            }), {});
            let Oe = null;
            ["entity-reply"].includes(Qe) && (Oe = [{
                type: "entry",
                ref: g.toString()
            }]);
            const he = {
                document: {
                    statements: q,
                    attachments: {},
                    template: {
                        refname: m.template.refname,
                        "digest-sha256": ""
                    },
                    "declaration-id": m.id.toString()
                },
                ...Oe && {
                    targets: Oe
                },
                interactive: !0
            };
            if (A) {
                const Ee = Ma(C.data, he);
                J(Ee)
            } else
                J(he)
        }
    }
    , [M, C.data]),
    f.useEffect(()=>{
        M && P && (Y(),
        C.setCustomErrors({}),
        L(!1))
    }
    , [M, P]);
    const {submit: H, loading: be, error: Te} = eo(t || "update", m, P, {}, n != null ? n : !1, !1)
      , [Se,Ye] = f.useState(null);
    f.useEffect(()=>{
        K.completed && Te && Ye(Te)
    }
    , [Te, K.completed]),
    f.useEffect(()=>{
        x && K.retry && !G && !be && window.setTimeout(()=>{
            H(),
            C.setCustomErrors({})
        }
        , K.delay)
    }
    , [K.retry, x]),
    f.useEffect(()=>{
        var he;
        const q = C == null ? void 0 : C.onSubmit
          , Oe = (he = C == null ? void 0 : C.formRef) == null ? void 0 : he.current;
        if (x && q && Oe && T.success) {
            const Ee = Oe.getValues();
            q(Ee)
        }
    }
    , [T.success]);
    const oe = f.useMemo(()=>{
        var q;
        if ((q = ae == null ? void 0 : ae.data) != null && q.document && m.template && xe)
            return Ja(ae, m.template, xe)
    }
    , [(Bt = ae == null ? void 0 : ae.data) == null ? void 0 : Bt.document, m.template, xe]);
    f.useEffect(()=>{
        C.submitted && a === "submit" && T.success && (ie(),
        C.setSubmitted(!1),
        C.setCustomErrors({}))
    }
    , [C.submitted, C.setSubmitted, T.success]),
    f.useEffect(()=>{
        de && C.setAPIErrors(ee || T.error || Se)
    }
    , [de]);
    const {processing: fe, setProcessing: vt} = f.useContext(Nt);
    f.useEffect(()=>{
        vt(G || be || !K.completed || T.processing)
    }
    , [G, be, K.completed, T.processing, vt]);
    const _t = G || be || (p.disabled ? !!fe : !1);
    f.useEffect(()=>{
        a === "submit" ? (C.setData(null),
        oe && y(oe)) : oe && p.url && (window.location.href = p.url)
    }
    , [oe]);
    function jt(q) {
        u ? (q.preventDefault(),
        O(q)) : Ut()
    }
    function Ut(q) {
        if (u && S(),
        a === "submit")
            return !0;
        ie()
    }
    let He = (Tt = p.color) != null ? Tt : p.primary ? "primary" : "secondary";
    He = p.warning === !0 ? "warning" : He;
    const Ct = (Yt = p.variant) != null ? Yt : "button";
    return s.createElement(s.Fragment, null, u && s.createElement(Sr, {
        confirm_cancel_label: c,
        confirm_confirm_label: l,
        confirm_message: u,
        confirm_title: d,
        t: b,
        state: h,
        closeDialog: S,
        submit: Ut,
        type: a,
        formId: C.id
    }), s.createElement(Je, {
        label: e,
        disabled: _t,
        type: a,
        onClick: jt,
        color: He,
        variant: Ct
    }))
}
ms.propTypes = {
    action: o.string,
    autocall: o.bool,
    color: o.string,
    complete: o.bool,
    confirm_cancel_label: o.any,
    confirm_confirm_label: o.any,
    confirm_message: o.any,
    confirm_title: o.any,
    disabled: o.bool,
    label: o.any,
    poll: o.object,
    primary: o.bool,
    raw: o.bool,
    retry: o.object,
    scope: o.string,
    type: o.string,
    url: o.string,
    variant: o.string,
    warning: o.bool
};
function Qn(e) {
    return s.createElement(ms, {
        ...e
    })
}
function ps({elements: e}) {
    const [t,n] = f.useState(!1)
      , [r,a] = f.useState(null)
      , i = f.useMemo(()=>({
        processing: t,
        setProcessing: n,
        claimError: r,
        setClaimError: a
    }), [t])
      , c = ba[r] || ba.generic
      , {step: l, document: u} = V();
    return s.createElement(Xi, null, s.createElement(Nt.Provider, {
        value: i
    }, r ? s.createElement(c, {
        step: l,
        document: u,
        claims: r
    }) : s.createElement(Ce, {
        elements: e
    })), t && s.createElement(ir, null))
}
ps.propTypes = {
    elements: o.any
};
function ys({elements: e, primary: t}) {
    return s.createElement(Ce, {
        elements: e
    })
}
ys.propTypes = {
    elements: o.any,
    primary: o.any
};
function gs({data: e, level: t, size: n}) {
    const {document: r} = V();
    return s.createElement(Ji, {
        declaration: r,
        data: e,
        level: t,
        size: n
    })
}
gs.propTypes = {
    declaration: o.object,
    data: o.string,
    level: o.string,
    size: o.number
};
function Or({title: e, content: t, elements: n, children: r, size: a, xs: i}) {
    const {t: c} = V();
    return s.createElement(U, {
        xs: i != null ? i : !0,
        marginBottom: 8
    }, e && s.createElement(we, {
        size: a || "sm",
        marginBottom: 1
    }, c(e)), t && s.createElement(ne, {
        marginBottom: n ? 1 : 4
    }, c(t)), n && s.createElement(ne, null, s.createElement(Ce, {
        elements: n
    })), r)
}
Or.propTypes = {
    children: o.any,
    content: o.any,
    elements: o.any,
    size: o.string,
    title: o.any,
    xs: o.bool
};
function Ju({labels: e}) {
    var a;
    const {document: t, t: n} = V()
      , r = (a = e && e[t.state] && "." + e[t.state]) != null ? a : "." + t.state + "_verbose";
    return n(r)
}
function Qu({children: e, autocall: t}) {
    return t ? s.createElement("div", {
        className: "hidden"
    }, e) : s.createElement(s.Fragment, null, e)
}
function bs({component: e, ...t}) {
    const {t: n} = V()
      , [r,a] = Id[e] || [null, {}]
      , {title: i, helptext: c} = t
      , {name: l} = Ie();
    if (!r)
        throw new Error("Cannot resolve component for action named " + e);
    const d = {
        ...(typeof a == "function" ? a(l) : a) || {},
        ...t
    }
      , p = n(i)
      , m = n(c);
    return s.createElement(Qu, {
        autocall: t.autocall
    }, p || m ? s.createElement(Or, {
        title: i,
        content: c,
        size: "sm"
    }, s.createElement(r, {
        ...d
    })) : s.createElement(r, {
        ...d
    }))
}
bs.propTypes = {
    component: o.any,
    title: o.any,
    helptext: o.any,
    autocall: o.bool,
    retry: o.object
};
function hs({fields: e, text: t, fill: n, setFocusFuncs: r}) {
    const [a,i] = f.useState([])
      , c = f.useCallback(function(d) {
        i([d])
    }, [])
      , l = f.useCallback(function(d) {
        const p = a.filter(m=>m !== d);
        i(p)
    }, []);
    return f.useEffect(()=>{
        n || r({
            setFocus: c,
            unsetFocus: l
        })
    }
    , []),
    s.createElement(U, {
        item: !0,
        xs: 12
    }, s.createElement("div", {
        className: "bg-gray-200 px-4 py-6 w-full border-l-8 border-gray-500"
    }, s.createElement(Vt, {
        text: t,
        fields: e,
        fill: n,
        focused: a,
        newline: " "
    })))
}
hs.propTypes = {
    fields: o.any,
    fill: o.any,
    setFocusFuncs: o.func,
    text: o.any
};
function Es({"default-value": e, value: t, ...n}) {
    const r = t || e
      , a = n["component-params"]
      , i = a && a.fill
      , {t: c, setFocusFuncs: l, ...u} = V()
      , d = pr(u.document.step_info);
    return s.createElement(hs, {
        fields: d,
        text: r,
        fill: i,
        setFocusFuncs: l
    })
}
Es.propTypes = {
    "default-value": o.any,
    "component-params": o.any,
    value: o.any
};
function Zu(e, t) {
    const n = (e || "").split(",").map(r=>r.trim());
    return Object.keys(t).reduce((r,a)=>[...r, [t[a], n.includes(a)]], [])
}
function vs(e, t) {
    return (e || "").split(",").map(r=>r.trim()).map(r=>t[r])
}
function ed(e) {
    const t = e["component-params"] || {};
    if (t["legacy-mode"])
        return Object.values(e.choices).reduce((n,r)=>({
            ...n,
            [r]: r
        }), {});
    if (!t.legacyMode)
        return e.choices;
    if (e.options)
        return e.options.reduce((n,r)=>({
            ...n,
            [r.value]: r.label
        }), {})
}
function _s({options: e, value: t}) {
    const n = V()
      , r = vs(t, e);
    return r ? r.join(", ") : n.t("many_value_not_set")
}
_s.propTypes = {
    options: o.any,
    value: o.any
};
function Cs({options: e, value: t}) {
    const n = V()
      , r = vs(t, e);
    return r && r.length > 0 ? s.createElement(U, {
        container: !0,
        direction: "column"
    }, r.map(a=>s.createElement(U, {
        key: a
    }, a))) : n.t("many_value_not_set")
}
Cs.propTypes = {
    options: o.any,
    value: o.any
};
function Ts({options: e, value: t}) {
    const n = V()
      , r = Zu(t, e);
    return r && r.length > 0 ? s.createElement(U, {
        container: !0,
        direction: "column"
    }, r.map(([a,i])=>s.createElement(U, {
        key: a
    }, a, ": ", i ? s.createElement("em", null, "ΝΑΙ") : "ΟΧΙ"))) : n.t("many_value_not_set")
}
Ts.propTypes = {
    options: o.any,
    value: o.any
};
const td = {
    comma_separated: _s,
    one_per_line: Cs,
    labeled: Ts
}
  , Fn = s.forwardRef(({value: e, ...t},n)=>{
    const r = t.field["component-params"] || {}
      , a = ed(t.field)
      , i = r.showcase || "comma_separated";
    e = r["legacy-mode"] ? e : e ? e.split(" ").join(", ") : "";
    const c = td[i];
    return s.createElement(c, {
        value: e,
        options: a,
        ref: n
    })
}
);
Fn.displayName = "SelectManyDisplay";
Fn.propTypes = {
    value: o.any,
    field: o.shape({
        "component-params": o.object
    })
};
const Ss = e=>{
    const t = e.inboxItem.inbox_status
      , n = t ? {
        status: t
    } : {}
      , {t: r} = j()
      , i = yn().INBOX_STATES || ["A", "B", "C"]
      , c = f.useMemo(()=>{
        const l = i ? i.map(d=>({
            label: r("inbox.states." + d),
            value: d
        })) : [{
            label: "...",
            value: ""
        }];
        return [{
            name: "status",
            key: "status",
            label: r("declaration_actions.setstatus.status_label"),
            type: "select",
            hint: r("declaration_actions.setstatus.status_help"),
            required: !0,
            options: l
        }]
    }
    , [i]);
    return s.createElement(ct, {
        fields: c,
        onSubmit: e.onSubmit,
        initial: n
    }, e.children)
}
;
Ss.propTypes = {
    children: o.any,
    inboxItem: o.shape({
        inbox_status: o.any
    }),
    onSubmit: o.func
};
const Os = e=>{
    const {t} = j()
      , n = ce();
    return lr.createPortal(s.createElement(s.Fragment, null, s.createElement(Xe, {
        open: e.open,
        onClose: ()=>e.setOpen(!1)
    }, s.createElement(Ve, null, e.title), s.createElement(Ss, {
        inboxItem: e.inboxItem,
        entity: n.entityId,
        onSubmit: e.onSubmit
    }, s.createElement(je, null, s.createElement(ne, null, s.createElement(Me, {
        name: "status"
    }))), e.processing && s.createElement(xt, {
        style: {
            margin: "5px 0"
        }
    }), s.createElement(Ue, null, s.createElement(re, {
        type: "submit",
        disabled: e.processing
    }, t(e.submit || "declaration_actions.setstatus.confirm_submit")), s.createElement(re, {
        marginRight: 2,
        disabled: e.processing,
        onClick: ()=>e.setOpen(!1),
        color: "secondary"
    }, t(e.abort || "declaration_actions.setstatus.confirm_abort")))))), document.getElementById("modal-container"))
}
;
Os.propTypes = {
    abort: o.string,
    inboxItem: o.object,
    onSubmit: o.any,
    open: o.any,
    processing: o.any,
    setOpen: o.func,
    submit: o.string,
    title: o.string
};
const nd = e=>{
    const [t,n] = f.useState(!1);
    function r() {
        n(!0)
    }
    return {
        Confirm: Os,
        props: {
            ...e,
            open: t,
            setOpen: n
        },
        confirm: r
    }
}
;
function Rs({inboxItem: e, ...t}) {
    const n = ce()
      , {t: r} = j()
      , [a,i] = f.useState(null)
      , c = Qi(n.entityId, e, a);
    Be(c.error);
    const {props: l, confirm: u, Confirm: d} = nd({
        title: r("declaration_actions.setstatus.confirm_title"),
        content: r("declaration_actions.setstatus.confirm_content"),
        onSubmit: m=>{
            i(m.status),
            c.fetch()
        }
    })
      , p = e.inbox_status;
    return f.useEffect(()=>{
        c.loaded && (l.setOpen(!1),
        t.refresh())
    }
    , [c.loaded]),
    s.createElement(s.Fragment, null, s.createElement(d, {
        processing: c.loading,
        inboxItem: e,
        ...l
    }), p ? s.createElement(s.Fragment, null, r("inbox.states." + p)) : s.createElement(s.Fragment, null, r("declaration_actions.setstatus.no_status")), s.createElement("a", {
        href: "#",
        icon: Ha,
        onClick: ()=>{
            window.setTimeout(()=>{
                u()
            }
            , 1)
        }
    }, r("declaration_actions.setstatus.button_label")))
}
Rs.propTypes = {
    inboxItem: o.shape({
        inbox_status: o.any
    }),
    refresh: o.any
};
const Ds = e=>{
    const t = e.inboxItem.assignee
      , n = t ? {
        user: t
    } : {}
      , {data: r, error: a} = tl(e.entity, null, !0, !1);
    Be(a);
    const {t: i} = j()
      , c = f.useMemo(()=>{
        const l = r ? r.map(d=>({
            label: d.user_display_name,
            value: d.id
        })) : [{
            label: "...",
            value: ""
        }];
        return [{
            name: "user",
            key: "user",
            label: i("declaration_actions.assign.user_label"),
            type: "select",
            hint: i("declaration_actions.assign.user_help"),
            required: !0,
            options: l
        }]
    }
    , [r]);
    return s.createElement(ct, {
        fields: c,
        onSubmit: e.onSubmit,
        initial: n
    }, e.children)
}
;
Ds.propTypes = {
    children: o.any,
    entity: o.object,
    inboxItem: o.shape({
        assignee: o.any
    }),
    onSubmit: o.func
};
const ks = e=>{
    const {t} = j()
      , n = ce();
    return s.createElement(s.Fragment, null, s.createElement(Xe, {
        open: e.open,
        onClose: ()=>e.setOpen(!1)
    }, s.createElement(Ve, null, e.title), s.createElement(Ds, {
        inboxItem: e.inboxItem,
        entity: n.entityId,
        onSubmit: e.onSubmit
    }, s.createElement(je, null, s.createElement(ne, null, s.createElement(Me, {
        name: "user"
    }))), e.processing && s.createElement(xt, {
        style: {
            margin: "5px 0"
        }
    }), s.createElement(Ue, null, s.createElement(re, {
        type: "submit",
        disabled: e.processing
    }, t(e.submit || "declaration_actions.assign.confirm_submit")), s.createElement(re, {
        marginBottom: 4,
        disabled: e.processing,
        onClick: ()=>e.setOpen(!1),
        color: "secondary"
    }, t(e.abort || "declaration_actions.assign.confirm_abort"))))))
}
;
ks.propTypes = {
    abort: o.string,
    inboxItem: o.object,
    onSubmit: o.func,
    open: o.bool,
    processing: o.any,
    setOpen: o.func,
    submit: o.string,
    title: o.string
};
const rd = e=>{
    const [t,n] = f.useState(!1);
    function r() {
        n(!0)
    }
    return {
        Confirm: ks,
        props: {
            ...e,
            open: t,
            setOpen: n
        },
        confirm: r
    }
}
;
function ws({inboxItem: e, ...t}) {
    const n = ce()
      , {data: r} = Zi(n.entityId, e.assignee, !!e.assignee, !0)
      , {t: a} = j()
      , [i,c] = f.useState(null)
      , {fetch: l, error: u, loading: d, loaded: p} = el(n.entityId, e, i);
    Be(u);
    const {props: m, confirm: y, Confirm: b} = rd({
        title: a("declaration_actions.assign.confirm_title"),
        content: a("declaration_actions.assign.confirm_content"),
        onSubmit: E=>{
            c(E.user),
            l()
        }
    });
    return f.useEffect(()=>{
        p && (m.setOpen(!1),
        t.refresh())
    }
    , [p]),
    s.createElement(U, {
        item: !0,
        ...t
    }, s.createElement(b, {
        processing: d,
        inboxItem: e,
        initial: r,
        ...m
    }), e.assignee_display_name ? s.createElement(s.Fragment, null, e.assignee_display_name) : s.createElement(s.Fragment, null, a("declaration_actions.assign.no_assignee")), s.createElement("a", {
        href: "#",
        icon: Ha,
        onClick: ()=>{
            window.setTimeout(()=>{
                y()
            }
            , 1)
        }
    }, a("declaration_actions.assign.button_label")))
}
ws.propTypes = {
    inboxItem: o.shape({
        assignee: o.any,
        assignee_display_name: o.string
    }),
    refresh: o.any
};
var An = {}
  , ad = function() {
    var e = document.getSelection();
    if (!e.rangeCount)
        return function() {}
        ;
    for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
        n.push(e.getRangeAt(r));
    switch (t.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
        t.blur();
        break;
    default:
        t = null;
        break
    }
    return e.removeAllRanges(),
    function() {
        e.type === "Caret" && e.removeAllRanges(),
        e.rangeCount || n.forEach(function(a) {
            e.addRange(a)
        }),
        t && t.focus()
    }
}
  , od = ad
  , fa = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
}
  , sd = "Copy to clipboard: #{key}, Enter";
function id(e) {
    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return e.replace(/#{\s*key\s*}/g, t)
}
function ld(e, t) {
    var n, r, a, i, c, l, u = !1;
    t || (t = {}),
    n = t.debug || !1;
    try {
        a = od(),
        i = document.createRange(),
        c = document.getSelection(),
        l = document.createElement("span"),
        l.textContent = e,
        l.ariaHidden = "true",
        l.style.all = "unset",
        l.style.position = "fixed",
        l.style.top = 0,
        l.style.clip = "rect(0, 0, 0, 0)",
        l.style.whiteSpace = "pre",
        l.style.webkitUserSelect = "text",
        l.style.MozUserSelect = "text",
        l.style.msUserSelect = "text",
        l.style.userSelect = "text",
        l.addEventListener("copy", function(p) {
            if (p.stopPropagation(),
            t.format)
                if (p.preventDefault(),
                typeof p.clipboardData > "u") {
                    n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                    var m = fa[t.format] || fa.default;
                    window.clipboardData.setData(m, e)
                } else
                    p.clipboardData.clearData(),
                    p.clipboardData.setData(t.format, e);
            t.onCopy && (p.preventDefault(),
            t.onCopy(p.clipboardData))
        }),
        document.body.appendChild(l),
        i.selectNodeContents(l),
        c.addRange(i);
        var d = document.execCommand("copy");
        if (!d)
            throw new Error("copy command was unsuccessful");
        u = !0
    } catch (p) {
        n && console.error("unable to copy using execCommand: ", p),
        n && console.warn("trying IE specific stuff");
        try {
            window.clipboardData.setData(t.format || "text", e),
            t.onCopy && t.onCopy(window.clipboardData),
            u = !0
        } catch (m) {
            n && console.error("unable to copy using clipboardData: ", m),
            n && console.error("falling back to prompt"),
            r = id("message"in t ? t.message : sd),
            window.prompt(r, e)
        }
    } finally {
        c && (typeof c.removeRange == "function" ? c.removeRange(i) : c.removeAllRanges()),
        l && document.body.removeChild(l),
        a()
    }
    return u
}
var cd = ld;
function Zn(e) {
    "@babel/helpers - typeof";
    return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Zn(e)
}
Object.defineProperty(An, "__esModule", {
    value: !0
});
An.CopyToClipboard = void 0;
var Kt = xs(f)
  , ud = xs(cd)
  , dd = ["text", "onCopy", "options", "children"];
function xs(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function ma(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function pa(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ma(Object(n), !0).forEach(function(r) {
            Rr(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ma(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function fd(e, t) {
    if (e == null)
        return {};
    var n = md(e, t), r, a;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++)
            r = i[a],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function md(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), a, i;
    for (i = 0; i < r.length; i++)
        a = r[i],
        !(t.indexOf(a) >= 0) && (n[a] = e[a]);
    return n
}
function pd(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function yd(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
}
function gd(e, t, n) {
    return t && yd(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function bd(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && er(e, t)
}
function er(e, t) {
    return er = Object.setPrototypeOf || function(r, a) {
        return r.__proto__ = a,
        r
    }
    ,
    er(e, t)
}
function hd(e) {
    var t = vd();
    return function() {
        var r = cn(e), a;
        if (t) {
            var i = cn(this).constructor;
            a = Reflect.construct(r, arguments, i)
        } else
            a = r.apply(this, arguments);
        return Ed(this, a)
    }
}
function Ed(e, t) {
    if (t && (Zn(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return Ms(e)
}
function Ms(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function vd() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function")
        return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
        !0
    } catch {
        return !1
    }
}
function cn(e) {
    return cn = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }
    ,
    cn(e)
}
function Rr(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
var Ls = function(e) {
    bd(n, e);
    var t = hd(n);
    function n() {
        var r;
        pd(this, n);
        for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++)
            i[c] = arguments[c];
        return r = t.call.apply(t, [this].concat(i)),
        Rr(Ms(r), "onClick", function(l) {
            var u = r.props
              , d = u.text
              , p = u.onCopy
              , m = u.children
              , y = u.options
              , b = Kt.default.Children.only(m)
              , E = (0,
            ud.default)(d, y);
            p && p(d, E),
            b && b.props && typeof b.props.onClick == "function" && b.props.onClick(l)
        }),
        r
    }
    return gd(n, [{
        key: "render",
        value: function() {
            var a = this.props;
            a.text,
            a.onCopy,
            a.options;
            var i = a.children
              , c = fd(a, dd)
              , l = Kt.default.Children.only(i);
            return Kt.default.cloneElement(l, pa(pa({}, c), {}, {
                onClick: this.onClick
            }))
        }
    }]),
    n
}(Kt.default.PureComponent);
An.CopyToClipboard = Ls;
Rr(Ls, "defaultProps", {
    onCopy: void 0,
    options: void 0
});
var _d = An
  , tr = _d.CopyToClipboard;
tr.CopyToClipboard = tr;
var Cd = tr;
function Td(e) {
    const {t} = j()
      , n = e
      , r = lt()
      , [a,i] = f.useState(!1);
    return f.useEffect(()=>{
        a && (r(t("copy_url.success"), "success"),
        i(!1))
    }
    , [a]),
    s.createElement(Cd.CopyToClipboard, {
        text: n.value,
        onCopy: ()=>i(!0)
    }, s.createElement("span", {
        className: "ds-link"
    }, t("copy_url.button")))
}
function Is(e) {
    const {t} = j()
      , {declaration: n} = e
      , r = n.inbox
      , {reload: a} = V()
      , i = nl(n)
      , c = e.declaration.reference_code
      , l = window.location.origin
      , u = f.useMemo(()=>[{
        key: "template",
        label: t("declaration_entity_table.template")
    }, {
        key: "date",
        label: t("declaration_entity_table.date")
    }, {
        key: "refcode",
        label: t("declaration_entity_table.refCode"),
        jsComponent: function({value: m}) {
            return s.createElement(s.Fragment, null, s.createElement("span", {
                style: {
                    marginRight: 16
                }
            }, m), s.createElement("a", {
                style: {
                    marginRight: 16
                },
                rel: "noopener noreferrer",
                target: "_blank",
                href: "/show/".concat(m)
            }, "Προβολή"), s.createElement(Td, {
                value: "".concat(l, "/show/").concat(m)
            }))
        }
    }, {
        key: "status",
        label: t("declaration_entity_table.status"),
        jsComponent: function({value: {inbox: m, refresh: y}}) {
            return s.createElement(Rs, {
                inboxItem: m,
                refresh: y
            })
        }
    }, {
        key: "assignee",
        label: t("declaration_entity_table.assignee"),
        jsComponent: function({value: {inbox: m, refresh: y}}) {
            return s.createElement(ws, {
                inboxItem: m,
                refresh: y
            })
        }
    }], [])
      , d = f.useMemo(()=>({
        refcode: c,
        status: {
            inbox: r,
            refresh: a
        },
        template: n.template.shortname,
        assignee: {
            inbox: r,
            refresh: a
        },
        url: i,
        date: _e(n.timestamp).format("DD/MM/YYYY HH:mm:ss")
    }));
    return s.createElement("div", {
        className: "ds-mb-6"
    }, s.createElement(Et, {
        fields: u,
        values: d
    }))
}
Is.propTypes = {
    declaration: o.shape({
        inbox: o.any,
        reference_code: o.any,
        template: o.shape({
            shortname: o.any
        }),
        timestamp: o.any
    })
};
const Fs = e=>{
    const {t} = j();
    return s.createElement(s.Fragment, null, s.createElement(Xe, {
        open: e.open,
        onClose: ()=>e.setOpen(!1)
    }, s.createElement(Ve, null, e.title), s.createElement(je, null, s.createElement(ne, null, e.content)), e.processing && s.createElement(xt, {
        style: {
            margin: "5px 0"
        }
    }), s.createElement(Ue, null, s.createElement(re, {
        disabled: e.processing,
        onClick: ()=>e.onConfirm(()=>{
            e.setOpen(!1)
        }
        ),
        color: "primary"
    }, t(e.submit || "reply.confirm_submit")), s.createElement(re, {
        disabled: e.processing,
        onClick: ()=>e.setOpen(!1),
        color: "secondary"
    }, t(e.abort || "reply.confirm_abort")))))
}
;
Fs.propTypes = {
    abort: o.string,
    content: o.any,
    onConfirm: o.func,
    open: o.any,
    processing: o.any,
    setOpen: o.func,
    submit: o.string,
    title: o.any
};
const Sd = e=>{
    const [t,n] = f.useState(!1)
      , r = f.useCallback(i=>s.createElement(Fs, {
        ...e,
        ...i,
        open: t,
        setOpen: n
    }));
    function a() {
        n(!0)
    }
    return {
        Confirm: r,
        props: {
            params: e,
            open: t,
            setOpen: n
        },
        confirm: a
    }
}
;
function As({inbox: e, ...t}) {
    const {t: n} = j()
      , r = bn()
      , a = ce()
      , i = r.pathname + "/reply/"
      , c = En()
      , [l,u] = f.useState(null)
      , [d,p] = f.useState(null)
      , {data: m, loading: y} = rl(l, !!l)
      , b = Object.values(t["component-params"]["reply-templates"])
      , E = b && b.length > 0
      , g = D=>{
        u(d)
    }
      , {confirm: h, Confirm: v} = Sd({
        title: t.confirm_title ? t.confirm_title.el : n("reply.confirm_title"),
        content: n("reply.confirm_content"),
        onConfirm: g
    })
      , S = "entity/" + a.entityId + "/inbox/" + a.inboxId + "/reply"
      , O = al(S, m);
    f.useEffect(()=>{
        m && l && window.setTimeout(()=>{
            O.create()
        }
        , 5)
    }
    , [m]),
    f.useEffect(()=>{
        O.declaration && c(i + m.refname + "/" + O.declaration.id)
    }
    , [O.declaration]);
    const w = O.loading || y
      , x = t.label.el;
    return E && s.createElement(s.Fragment, null, s.createElement(v, {
        processing: w
    }), b.map(D=>s.createElement(Fe, {
        key: D,
        Icon: Sl,
        onClick: ()=>{
            p(D),
            window.setTimeout(()=>{
                h()
            }
            , 1)
        }
        ,
        label: x,
        ..."".concat(b.length > 1 ? " (".concat(D, ")") : "")
    })))
}
As.propTypes = {
    inbox: o.any,
    "component-params": o.shape({
        "reply-templates": o.any
    })
};
function Ps(e) {
    var d, p;
    const {document: t, t: n} = V()
      , r = "my-declarations/" + t.id + "/pdf/token"
      , {loading: a, url: i, update: c} = Tr(r)
      , l = (d = e.color) != null ? d : e.primary ? "primary" : "secondary"
      , u = (p = e.variant) != null ? p : "button";
    return s.createElement(Fe, {
        color: l,
        variant: u,
        marginRight: 2,
        href: i,
        target: "_blank",
        rel: "noopener noreferrer",
        disabled: a,
        component: "a",
        label: n(e.label),
        onClick: c
    })
}
Ps.propTypes = {
    color: o.any,
    label: o.any,
    primary: o.any,
    variant: o.string
};
function ya(e, t) {
    return f.useMemo(()=>e.step_info.fields[t].value || e.step_info.fields[t]["default-value"], [t])
}
const Ns = e=>{
    const {t} = j()
      , n = [{
        name: "message",
        key: "message",
        label: t("declaration_actions.contact.message_label"),
        type: "string",
        hint: t("declaration_actions.contact.message_help"),
        required: !0
    }];
    return s.createElement(ct, {
        fields: n,
        onSubmit: e.onSubmit
    }, e.children)
}
;
Ns.propTypes = {
    children: o.any,
    onSubmit: o.any
};
const $s = e=>{
    const {t} = j()
      , n = ce()
      , r = [{
        key: "email",
        label: t("declaration_actions.contact.email_label")
    }, {
        key: "phone",
        label: t("declaration_actions.contact.sms_label")
    }];
    return s.createElement(s.Fragment, null, s.createElement(Xe, {
        open: e.open,
        onClose: ()=>e.setOpen(!1)
    }, s.createElement(Ve, null, e.title), s.createElement(Ns, {
        inboxItem: e.inboxItem,
        entity: n.entityId,
        onSubmit: e.onSubmit
    }, s.createElement(je, null, s.createElement("p", null, t("declaration_actions.contact.help_text")), s.createElement(Et, {
        fields: r,
        values: e.contactProps,
        marginBottom: 4
    }), s.createElement(ne, null, s.createElement(Me, {
        name: "message"
    }))), e.processing && s.createElement(xt, {
        style: {
            margin: "5px 0"
        }
    }), s.createElement(Ue, null, s.createElement(re, {
        type: "submit",
        disabled: e.processing
    }, t(e.submit || "declaration_actions.contact.confirm_submit")), s.createElement(re, {
        marginRight: 2,
        disabled: e.processing,
        onClick: ()=>e.setOpen(!1),
        color: "secondary"
    }, t(e.abort || "declaration_actions.assign.confirm_abort"))))))
}
;
$s.propTypes = {
    abort: o.string,
    contactProps: o.any,
    inboxItem: o.any,
    onSubmit: o.any,
    open: o.any,
    processing: o.any,
    setOpen: o.func,
    submit: o.string,
    title: o.any
};
const Od = e=>{
    const [t,n] = f.useState(!1);
    function r() {
        n(!0)
    }
    return {
        Confirm: $s,
        props: {
            ...e,
            open: t,
            setOpen: n
        },
        confirm: r
    }
}
;
function Vs({inbox: e, declaration: t, ...n}) {
    const r = n["component-params"]
      , a = ya(t, r["contact-email-field"])
      , i = ya(t, r["contact-phone-field"])
      , c = {
        email: a,
        phone: i
    }
      , {entityId: l} = ce()
      , {t: u} = j()
      , [d,p] = f.useState(null)
      , {fetch: m, error: y, loading: b, loaded: E} = ol(l, e.id, d);
    Be(y);
    const {props: g, confirm: h, Confirm: v} = Od({
        title: u("declaration_actions.contact.confirm_title"),
        content: u("declaration_actions.contact.confirm_content"),
        onSubmit: S=>{
            p(S.message),
            m()
        }
    });
    return f.useEffect(()=>{
        E && g.setOpen(!1)
    }
    , [E]),
    s.createElement(s.Fragment, null, s.createElement(v, {
        processing: b,
        inboxItem: e,
        contactProps: c,
        ...g
    }), s.createElement(Fe, {
        Icon: ()=>s.createElement(Ol, {
            size: "md"
        }),
        color: "secondary",
        marginRight: 2,
        label: u("declaration_actions.contact.button_label"),
        disabled: n.disabled,
        onClick: ()=>{
            window.setTimeout(()=>{
                h()
            }
            , 1)
        }
    }))
}
Vs.propTypes = {
    declaration: o.any,
    inbox: o.shape({
        id: o.any
    }),
    "component-params": o.shape({
        "contact-email-field": o.string,
        "contact-phone-field": o.string
    }),
    disabled: o.bool
};
const Rd = f.lazy(()=>$e(()=>import("./SafeHTML-C3YRFdZj.js"), __vite__mapDeps([0, 1, 2])))
  , js = ({className: e, layout: t={}, ...n})=>{
    var l;
    const r = (l = n == null ? void 0 : n["component-params"]) == null ? void 0 : l.mode
      , a = r === "info"
      , i = r === "error"
      , c = n.safe ? s.createElement(Rd, {
        className: "",
        content: n.value
    }) : n.value;
    return s.createElement(U, {
        item: !0,
        xs: t.xs || 12,
        sm: t.sm || 12,
        md: t.md || void 0,
        className: gn(e, "quoteblock", "my-4 mx-0", a && "border-l-8 border-gray-400", i && "border-2 border-error border-t-8 w-full text-xl")
    }, r !== "warning" ? s.createElement(s.Fragment, null, s.createElement("div", {
        className: "pl-4"
    }, s.createElement(ar, null, c))) : s.createElement(sl, null, c))
}
;
js.propTypes = {
    className: o.any,
    safe: o.any,
    value: o.any,
    "component-params": o.any
};
function Us(e) {
    var i, c;
    const {t} = V()
      , n = (i = e.color) != null ? i : e.primary ? "primary" : "secondary"
      , r = (c = e.variant) != null ? c : "button";
    function a() {
        const l = window.document.body;
        [...l.classList].forEach(d=>{
            d.startsWith("print-") && l.classList.remove(d)
        }
        ),
        l.classList.add("print-section-container"),
        l.classList.add("print-section-".concat(e.section || "default", "-container")),
        window.print()
    }
    return s.createElement(Fe, {
        color: n,
        variant: r,
        marginRight: 2,
        component: "button",
        label: t(e.label),
        onClick: a
    })
}
Us.propTypes = {
    color: o.any,
    label: o.any,
    primary: o.any,
    variant: o.string,
    section: o.string
};
function Bs(e) {
    return f.useEffect(()=>{
        var r;
        const t = (r = e.replace) != null ? r : !0;
        navigator.userAgent.match(/Android/i) ? window.location = e.url : t ? window.location.replace(e.url) : window.location.href = e.url
    }
    , []),
    []
}
Bs.propTypes = {
    url: o.string
};
function Dd() {
    const {document: e} = V();
    return _e(e.timestamp).format("DD/MM/YYYY HH:mm:ss")
}
function Ys({value: e, params: t}) {
    const {dataset: n} = t
      , r = Zc(n, e);
    return (r == null ? void 0 : r.data) || e
}
Ys.propTypes = {
    value: o.any,
    field: o.any
};
function Hs() {
    const {t: e} = j()
      , {document: t} = V();
    return s.createElement(Mt, {
        hidden: !0,
        printVisible: "block",
        className: "text-right w-full flex-col -mt-4"
    }, s.createElement("span", {
        className: "date"
    }, _e(t.timestamp).format("DD/MM/YYYY")), s.createElement("span", {
        className: "block mt-2"
    }, e("declaration_print_style.name")), s.createElement("span", {
        className: "block mt-16 text-gray-500 text-sm"
    }, e("declaration_print_style.signature")))
}
Hs.propTypes = {};
function zs({elements: e, title: t, section: n}) {
    var c;
    const {document: r} = V()
      , a = "print-section-".concat(n)
      , i = f.useMemo(()=>"\n      @media screen {\n        .print-section {\n          display: none;\n        }\n      }\n      @media print {\n        .".concat(a, " {\n          display: none;\n        }\n        .print-section-container.").concat(a, "-container .").concat(a, ' {\n          display: block !important;\n        }\n        .print-refcode {\n          display: none;\n        }\n        .print-template-title {\n          display: none;\n        }\n\n        @page \n        {\n            size: auto;\n            margin: 0mm;\n        }\n\n        .MuiGovGRApp-root {\n          -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n        }\n\n        .MuiGovGRApp-root header {\n          display: none;\n        }\n\n        .MuiGovGRApp-root .step-web-display {\n          display: none;\n        }\n\n        .MuiGovGRApp-root .columnSet * {\n          color-adjust: exact;\n          -webkit-print-color-adjust: exact;\n        }\n\n        .MuiGovGRApp-root .successBox {\n          display: none !important; \n        }\n\n        .MuiGovGRApp-root .columnSet {\n          display: flex !important;\n          background-image: url("/logo_gov_gr_pos.png");\n          background-repeat: no-repeat;\n          background-position-y: 2rem;\n          background-position-x: 1rem; \n          background-size: 10rem;\n          flex-basis: 100%;\n          max-width: 100%;\n          color-adjust: exact;\n          -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n          margin: 0;\n        }\n\n        .MuiGovGRApp-root .mainCol * {\n          font-size: 0.7rem;\n        }\n\n        .MuiGovGRApp-root .sideCol {\n          display: none;\n        }\n\n        .MuiGovGRApp-root .mainCol {\n          display: block !important;\n          padding-top: 13rem;\n          background-image: url("/coat_of_arms_of_greece.png");\n          background-repeat: no-repeat;\n          background-position-y: 2rem;\n          background-position-x: center; \n          background-size: 80px 80px;\n          flex-basis: 100%;\n          max-width: 100%;\n          -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n        }\n\n        .MuiGovGRApp-root .mainCol > button,\n        .MuiGovGRApp-root .mainCol > button + div,\n        .MuiGovGRApp-root .mainCol > button + div + h1,\n        .MuiGovGRApp-root .mainCol > div + div > h6,\n        .MuiGovGRApp-root .mainCol > div + div + h1 {\n          display: none !important;\n        }\n\n        .MuiGovGRApp-root .mainCol h3 {\n          margin: 0rem;\n        }\n\n        .print-section-container.').concat(a, "-container .").concat(a, " .print-refcode {\n          display: block !important;\n          position: absolute;\n          right: 4rem;\n          top: 1rem;\n        }\n        \n        .print-section-container.").concat(a, "-container .").concat(a, " .print-template-title {\n          display: inline-block !important;\n          position: absolute;\n          top: 8rem;\n          left: 0;\n          right: 0;\n          text-align: center;\n          font-size: 1.4rem !important;\n        }\n\n        .values-list .divider {\n          display: none !important;\n        }\n\n        .values-list .dilosi-list-item  {\n          border: 1px solid #444;\n          margin-bottom: -1px;\n        }\n\n        .values-list .list-label {\n          max-width: 35%;\n          padding: 0.2rem;\n          border-right: 1px solid #444;\n          flex-basis: 35%;\n        }\n\n        .values-list .list-value {\n          padding: 0.2rem;\n          flex-basis: 50%;\n        }\n      }\n    "), [n, a]);
    return s.createElement(s.Fragment, null, s.createElement("style", {
        dangerouslySetInnerHTML: {
            __html: i
        }
    }), s.createElement(U, {
        container: !0,
        spacing: 4,
        className: gn("hidden", a, "print-section")
    }, s.createElement("span", {
        className: "print-refcode"
    }, r.reference_code), s.createElement("h2", {
        className: "print-template-title"
    }, t || ((c = r.template) == null ? void 0 : c.shortname)), s.createElement(Ce, {
        elements: e
    })))
}
zs.propTypes = {
    elements: o.any,
    section: o.any,
    title: o.string
};
const Pn = ()=>{
    const e = V()
      , {t} = j();
    return e ? e.t : t
}
  , $t = ({children: e, ...t})=>s.createElement(re, {
    type: "button",
    variant: "link",
    ...t
}, e);
$t.propTypes = {
    children: o.any,
    className: o.string
};
const Nn = ({children: e})=>s.createElement(wr, null, s.createElement(kr, {
    padding: 0,
    sm: 12,
    className: "text-gray-600"
}, e));
Nn.propTypes = {
    children: o.any
};
const st = ({action: e, children: t, ...n})=>s.createElement($t, {
    className: "text-link hover:text-link-hover disabled:cursor-not-allowed disabled:text-gray-600",
    onClick: e,
    marginRight: 2,
    ...n
}, t);
st.propTypes = {
    children: o.any,
    action: o.any
};
const Dr = ({children: e})=>s.createElement(U, {
    item: !0,
    xs: 12,
    sm: 6,
    className: "text-right"
}, e);
Dr.propTypes = {
    children: o.any
};
const kr = ({children: e, ...t})=>s.createElement(U, {
    item: !0,
    sm: 6,
    xs: 12,
    ...t
}, e);
kr.propTypes = {
    children: o.any
};
const wr = ({children: e, className: t, ...n})=>s.createElement(U, {
    md: 12,
    container: !0,
    className: "item p-2 pl-3r",
    ...n
}, e);
wr.propTypes = {
    children: o.any,
    className: o.string
};
const xr = s.forwardRef(({children: e, ...t},n)=>s.createElement(U, {
    md: 12,
    ...t,
    ref: n
}, e));
xr.displayName = "List";
xr.propTypes = {
    children: o.any,
    tabIndex: o.any
};
const Gs = ({item: e, fields: t})=>{
    const n = t[0];
    return s.createElement(Mr, {
        className: "mb-0",
        value: e,
        field: n
    })
}
;
Gs.propTypes = {
    fields: o.any,
    item: o.any
};
const Mr = ({value: e, field: t})=>{
    const n = gt[t.type] || gt.string;
    return s.createElement(n, {
        value: e,
        field: t,
        params: t["component-params"],
        safe: !1
    })
}
;
Mr.propTypes = {
    value: o.any,
    field: o.any,
    type: o.any
};
const qs = ({item: e, solo: t, fields: n})=>t ? s.createElement(Gs, {
    item: e,
    fields: n
}) : n.map(r=>{
    const a = gt[r.type] || gt.string;
    return s.createElement(a, {
        value: e[r.key],
        key: r.key,
        safe: !1
    })
}
);
qs.propTypes = {
    item: o.any,
    solo: o.bool,
    fields: o.array
};
const Ws = ({item: e, remove: t, edit: n, labels: r, fields: a, solo: i, readonly: c, errors: l})=>{
    const u = Pn()
      , d = f.useMemo(()=>((a || []).reduce((m,y)=>({
        ...m,
        [y.key]: y
    }), {}),
    (l || []).map(m=>({
        message: m.error_info
    }))), [l, a])
      , p = f.useMemo(()=>a.map(m=>{
        let y = null;
        const b = u(m.label)
          , E = (l || []).reduce((g,h)=>({
            ...g,
            [h.invalid_field]: h.error_info
        }), {});
        return E && E[m.key] && (y = "ds-error-message"),
        {
            ...m,
            label: b,
            className: y
        }
    }
    ), [u, a, l]);
    return s.createElement(hn, {
        variant: "border",
        padding: "2",
        borderColor: "light"
    }, d.length ? s.createElement("div", null, d.map((m,y)=>s.createElement(Aa, {
        key: y,
        id: m.message
    }, s.createElement(Pa, null, "Λάθος:"), s.createElement(Pd, {
        content: m.message.key ? u(m.message.key, m.message.context) : u(m.message)
    })))) : [], s.createElement(Et, {
        border: !0,
        className: "mb-0",
        fields: p,
        values: e
    }), !c && s.createElement("div", {
        className: "bg-gray-200 border border-t border-b border-gray-400 p-2 pl-3"
    }, n && s.createElement(st, {
        onClick: n
    }, r.editItem), t && s.createElement(st, {
        onClick: t
    }, r.removeItem)))
}
;
Ws.propTypes = {
    item: o.any,
    remove: o.any,
    edit: o.any,
    labels: o.any,
    fields: o.any,
    solo: o.any,
    readonly: o.any,
    errors: o.any
};
const Ks = ({item: e, remove: t, edit: n, labels: r, fields: a, solo: i, readonly: c})=>s.createElement(Na, null, a.filter(l=>l.key).map(l=>s.createElement(yt, {
    key: l.key
}, s.createElement(Mr, {
    value: e[l.key],
    field: l
}))), !c && s.createElement(yt, null, s.createElement(Dr, null, n && s.createElement(st, {
    color: "primary",
    onClick: n
}, r.editItem), t && s.createElement(st, {
    color: "error",
    onClick: t
}, r.removeItem))));
Ks.propTypes = {
    item: o.any,
    remove: o.any,
    edit: o.any,
    labels: o.any,
    fields: o.any,
    solo: o.any,
    readonly: o.any
};
const Xs = ({item: e, remove: t, edit: n, labels: r, fields: a, solo: i, readonly: c})=>s.createElement(wr, null, s.createElement(kr, null, s.createElement(qs, {
    item: e,
    fields: a,
    solo: i
})), !c && s.createElement(Dr, null, n ? s.createElement(st, {
    onClick: n
}, r.editItem) : [], t ? s.createElement(st, {
    color: "error",
    onClick: t
}, r.removeItem) : []));
Xs.propTypes = {
    item: o.any,
    remove: o.any,
    edit: o.any,
    labels: o.any,
    fields: o.any,
    solo: o.any,
    readonly: o.any
};
const $n = ({initial: e, fields: t, onSubmit: n, onCancel: r, open: a, labels: i})=>{
    const c = e != null ? e : !1
      , l = f.useMemo(()=>{
        if (c)
            return e;
        const y = {};
        return t.forEach(b=>{
            b["default-value"] !== void 0 ? y[b.key] = b["default-value"] : y[b.key] = ""
        }
        ),
        y
    }
    , [c, t])
      , u = Pn()
      , d = ["label", "hint", "example", "hint_md"]
      , p = f.useMemo(()=>t.map(y=>d.reduce((b,E)=>({
        ...b,
        [E]: u(y[E])
    }), y)), [t, u])
      , m = f.useMemo(()=>"modal-form-".concat(Math.floor(Math.random() * 100)), []);
    return lr.createPortal(s.createElement(Xe, {
        open: a,
        fullWidth: !0,
        maxWidth: "md"
    }, s.createElement(Ve, null, c ? i.editTitle : i.addTitle), s.createElement(je, null, s.createElement(ct, {
        id: m,
        fields: p,
        initial: l,
        onSubmit: n
    }, t.map((y,b)=>{
        const E = b === 0;
        return s.createElement(Me, {
            key: y.key,
            name: y.key,
            shouldFocus: E
        })
    }
    ))), s.createElement(Ue, null, s.createElement(re, {
        type: "submit",
        form: m
    }, c ? i.submitEdit : i.submitAdd), s.createElement(re, {
        type: "button",
        onClick: r,
        color: "secondary"
    }, i.cancel))), document.getElementById("modal-container"))
}
;
$n.propTypes = {
    initial: o.any,
    fields: o.any,
    onSubmit: o.any,
    onCancel: o.any,
    open: o.any,
    labels: o.any
};
const Lr = e=>s.createElement("div", {
    className: "px-3 py-2 bg-gray-200 border-t border-b border-gray-400"
}, e.children)
  , Ir = s.forwardRef(({items: e, fields: t, add: n, remove: r, edit: a, cancel: i, onAdd: c, onRemove: l, onEdit: u, canAdd: d, canEdit: p, canRemove: m, editingIndex: y, editing: b, isEmpty: E, initial: g, labels: h, solo: v, readonly: S, errors: O},w)=>{
    const x = y >= 0;
    return s.createElement("div", {
        ref: w,
        tabIndex: "-1"
    }, E ? s.createElement(Nn, {
        add: n
    }, h.empty) : s.createElement("div", null, e.map((D,T)=>s.createElement(Ws, {
        labels: h,
        item: D,
        key: T,
        index: T,
        remove: m && (()=>r(T)),
        edit: p && (()=>a(T)),
        fields: t,
        solo: v,
        readonly: S,
        errors: O && O[T]
    }))), !S && s.createElement(s.Fragment, null, s.createElement(Lr, null, s.createElement($t, {
        disabled: !d,
        onClick: n
    }, h.addItem)), s.createElement($n, {
        labels: h,
        fields: t,
        open: b,
        initial: g,
        onSubmit: x ? u : c,
        onCancel: i
    })))
}
);
Ir.displayName = "ListOfCardField";
Ir.propTypes = {
    items: o.any,
    fields: o.any,
    add: o.any,
    remove: o.any,
    edit: o.any,
    cancel: o.any,
    onAdd: o.any,
    onRemove: o.any,
    onEdit: o.any,
    canAdd: o.any,
    canEdit: o.any,
    canRemove: o.any,
    editingIndex: o.any,
    editing: o.any,
    isEmpty: o.any,
    initial: o.any,
    labels: o.any,
    solo: o.any,
    readonly: o.any,
    errors: o.any
};
const Fr = s.forwardRef(({items: e, fields: t, add: n, remove: r, edit: a, cancel: i, onAdd: c, onEdit: l, canAdd: u, canEdit: d, canRemove: p, editingIndex: m, editing: y, isEmpty: b, initial: E, labels: g, solo: h, readonly: v},S)=>{
    const O = Pn()
      , w = m >= 0;
    return s.createElement(s.Fragment, null, s.createElement(La, {
        margin: 0,
        width: "100%",
        ref: S,
        tabIndex: "-1"
    }, !b && s.createElement(Ia, null, t.filter(x=>x.key).map(x=>s.createElement(pt, {
        key: x.key
    }, O(x.label))), v ? s.createElement(s.Fragment, null) : s.createElement(pt, null)), b ? s.createElement(Nn, {
        add: n
    }, g.empty) : s.createElement(Fa, null, e.map((x,D)=>s.createElement(Ks, {
        labels: g,
        item: x,
        key: D,
        index: D,
        remove: p && (()=>r(D)),
        edit: d && (()=>a(D)),
        fields: t,
        solo: h,
        readonly: v
    })))), !v && s.createElement(s.Fragment, null, s.createElement(Lr, null, s.createElement($t, {
        disabled: !u,
        onClick: n,
        className: "add-item"
    }, g.addItem)), s.createElement($n, {
        labels: g,
        fields: t,
        open: y,
        initial: E,
        onSubmit: w ? l : c,
        onCancel: i
    })))
}
);
Fr.displayName = "ListOfTableField";
Fr.propTypes = {
    items: o.any,
    fields: o.any,
    add: o.any,
    remove: o.any,
    edit: o.any,
    cancel: o.any,
    onAdd: o.any,
    onRemove: o.any,
    onEdit: o.any,
    canAdd: o.any,
    canEdit: o.any,
    canRemove: o.any,
    editingIndex: o.any,
    editing: o.any,
    isEmpty: o.any,
    initial: o.any,
    labels: o.any,
    solo: o.any,
    readonly: o.any
};
const Ar = s.forwardRef(({items: e, fields: t, add: n, remove: r, edit: a, cancel: i, onAdd: c, onRemove: l, onEdit: u, canAdd: d, canEdit: p, editing: m, isEmpty: y, initial: b, labels: E, solo: g},h)=>s.createElement(s.Fragment, null, s.createElement(xr, {
    ref: h,
    tabIndex: "-1"
}, y ? s.createElement(Nn, {
    add: n
}, E.empty) : e.map((v,S)=>s.createElement(Xs, {
    labels: E,
    item: v,
    key: S,
    index: S,
    remove: r && (()=>r(S)),
    edit: a && (()=>a(S)),
    fields: t,
    solo: g
}))), s.createElement(Lr, null, s.createElement($t, {
    disabled: !d,
    onClick: n,
    className: "add-item"
}, E.addItem)), s.createElement($n, {
    labels: E,
    fields: t,
    open: m,
    initial: b,
    onSubmit: c,
    onCancel: i
})));
Ar.displayName = "ListOfField";
Ar.propTypes = {
    initial: o.any,
    items: o.any,
    fields: o.any,
    add: o.any,
    remove: o.any,
    edit: o.any,
    cancel: o.any,
    onAdd: o.any,
    onRemove: o.any,
    onEdit: o.any,
    canAdd: o.any,
    canEdit: o.any,
    canRemove: o.any,
    editingIndex: o.any,
    editing: o.any,
    isEmpty: o.any,
    labels: o.any,
    solo: o.any,
    readonly: o.any
};
function Js({value: e, defaultValue: t, fields: n, min: r, max: a, disabled: i, fixed: c, required: l, onChange: u, solo: d, errors: p}) {
    e = e || t || "[]";
    try {
        e = JSON.parse(e)
    } catch {
        e = []
    }
    const m = e.length
      , [y,b] = f.useState(!1)
      , [E,g] = f.useState(null)
      , [h,v] = f.useState(null);
    r = (r != null ? r : l) ? 1 : 0;
    const S = m < a && !i && !c
      , O = !i
      , w = !i && !c
      , {setAPIErrors: x} = Pt()
      , D = B=>{
        let Y = B;
        d && (Y = Object.keys(B).reduce((de,ee,ae)=>{
            const K = B[ee];
            return de + (ae > 0 ? " " + K : K)
        }
        , ""));
        const G = [...e];
        parseInt(h) >= 0 ? G[h] = Y : G.push(Y),
        L(G),
        b(!1)
    }
      , T = B=>{
        D(B)
    }
    ;
    function C(B, Y) {
        return Y > -1 && B.splice(Y, 1),
        B
    }
    const M = B=>{
        L(C(e, B)),
        b(!1),
        g(null),
        v(null)
    }
      , L = B=>{
        x(null),
        u(JSON.stringify(B || null))
    }
    ;
    return {
        min: r,
        max: a,
        value: e,
        add: ()=>{
            b(!0),
            g(null),
            v(null)
        }
        ,
        edit: B=>{
            b(!0),
            v(B);
            let Y = e[B];
            d && (Y = {
                [n[0].key]: e[B]
            }),
            g(Y)
        }
        ,
        remove: B=>{
            M(B)
        }
        ,
        cancel: ()=>{
            b(!1),
            v(null),
            g(null)
        }
        ,
        isEmpty: e.length === 0,
        editing: y,
        editingItem: E,
        editingIndex: h,
        initial: E,
        fields: n,
        canAdd: S,
        canRemove: w,
        canEdit: O,
        onAdd: D,
        onEdit: T,
        solo: d,
        errors: p
    }
}
Js.propTypes = {
    value: o.any,
    defaultValue: o.any,
    fields: o.any,
    min: o.any,
    max: o.any,
    disabled: o.any,
    fixed: o.any,
    required: o.any,
    onChange: o.any,
    solo: o.any,
    errors: o.any
};
const Pr = s.forwardRef(({value: e, params: t},n)=>s.createElement(Mt, {
    as: "div",
    marginBottom: 12
}, s.createElement(Vn, {
    value: e,
    params: t,
    readonly: !0
})));
Pr.displayName = "ListOfFieldDisplayWrapper";
Pr.propTypes = {
    spacing: o.any,
    value: o.any,
    params: o.any
};
const Vn = s.forwardRef(({value: e, params: t, required: n, disabled: r, onChange: a, defaultValue: i, errorObj: c},l)=>{
    var E, g;
    const u = Js({
        value: e,
        fields: t.fields,
        errors: (E = c == null ? void 0 : c.meta) == null ? void 0 : E.nested,
        min: n ? 1 : 0,
        max: t.multiplicity,
        fixed: t.fixed,
        disabled: r,
        onChange: a,
        solo: (g = t == null ? void 0 : t.solo) != null ? g : !0,
        defaultValue: i
    })
      , d = Pn()
      , p = f.useMemo(()=>mn({
        addTitle: d(".listof.label.addTitle"),
        editTitle: d(".listof.label.editTitle"),
        edit: d(".listof.label.edit"),
        remove: d(".listof.label.remove"),
        empty: d(".listof.label.empty"),
        emptyAdd: d(".listof.label.emptyAdd"),
        submitAdd: d(".listof.label.submitAdd"),
        submitEdit: d(".listof.label.submitEdit"),
        cancel: d(".listof.label.cancel"),
        editItem: d(".listof.label.editItem"),
        removeItem: d(".listof.label.removeItem"),
        addItem: d(".listof.label.addItem")
    }, (t == null ? void 0 : t.multiplicityLabels) || {}), [t == null ? void 0 : t.multiplicityLabels])
      , m = t.multiplicity && t.readonly
      , y = (u.fields || []).length > 1 || m
      , b = f.useMemo(()=>{
        const h = t.layout || "table";
        return y ? h === "card" ? Ir : Fr : Ar
    }
    , [y]);
    return s.createElement(b, {
        fields: u.fields,
        items: u.value,
        itemsDisplay: u.itemsDisplay,
        add: u.add,
        remove: u.remove,
        edit: u.edit,
        cancel: u.cancel,
        onAdd: u.onAdd,
        onRemove: u.onRemove,
        onEdit: u.onEdit,
        editingIndex: u.editingIndex,
        canAdd: u.canAdd,
        canRemove: u.canRemove,
        canEdit: u.canEdit,
        isEmpty: u.isEmpty,
        editing: u.editing,
        initial: u.initial,
        labels: p,
        solo: u.solo,
        errors: u.errors,
        readonly: t.readonly,
        ref: l
    })
}
);
Vn.displayName = "ListOfFieldWrapper";
Vn.propTypes = {
    spacing: o.any,
    value: o.any,
    params: o.any,
    required: o.any,
    disabled: o.any,
    onChange: o.any,
    defaultValue: o.any,
    errorObj: o.any
};
const ga = {
    description: 70,
    value: 50,
    extra_field: 30
};
function Qs(e) {
    const t = f.useMemo(()=>{
        try {
            return JSON.parse(e == null ? void 0 : e.value)
        } catch {
            return []
        }
    }
    , [])
      , n = f.useMemo(()=>(t.forEach(r=>{
        let a = 0
          , i = !1;
        r.results.forEach((c,l)=>{
            c.internalAnchors = [],
            c.doctorsNotes = [],
            c.indicators.forEach((u,d)=>{
                if (u.anchors = {},
                u.description === "ΠΑΡΑΤΗΡΗΣΕΙΣ" || i)
                    u.isDoctorsNote = !0,
                    i = !0,
                    c.doctorsNotes.push(u);
                else
                    for (const p in u) {
                        const m = u[p];
                        m && m.length > ga[p] && (a++,
                        c.internalAnchors.push({
                            text: m,
                            link: "#".concat(l, "-ind-").concat(p, "-").concat(d),
                            id: "".concat(l, "-anc-").concat(p, "-").concat(d),
                            label: a
                        }),
                        u[p] = m.substring(0, ga[p] - 20).concat("..."),
                        u.anchors[p] = {
                            link: "#".concat(l, "-anc-").concat(p, "-").concat(d),
                            id: "".concat(l, "-ind-").concat(p, "-").concat(d),
                            label: a
                        })
                    }
                return u
            }
            )
        }
        )
    }
    ),
    console.log("result after", t),
    t), [t]);
    return s.createElement(U, null, n.map(r=>s.createElement(s.Fragment, null, s.createElement(we, {
        size: "md"
    }, r.title), r.results.map((a,i)=>{
        var c;
        return s.createElement(hn, {
            key: i,
            mb: 6
        }, s.createElement(we, {
            size: "sm"
        }, a.title), s.createElement(il, null, s.createElement(La, {
            "aria-label": a.title
        }, s.createElement(Ia, null, s.createElement(pt, null, "Περιγραφή"), s.createElement(pt, null, "Αποτέλεσμα"), s.createElement(pt, null, "Φυσιολογικές Τιμές"), s.createElement(pt, null)), s.createElement(Fa, null, a.indicators.map(l=>{
            var u, d, p, m, y, b;
            return s.createElement(s.Fragment, null, s.createElement(Na, {
                key: a.name,
                sx: {
                    "&:last-child td, &:last-child th": {
                        border: "0 none"
                    }
                }
            }, !l.isDoctorsNote && s.createElement(s.Fragment, null, s.createElement(yt, {
                component: "th",
                scope: "row"
            }, s.createElement("span", null, l.description_bold || l.value_bold ? s.createElement("strong", null, l.description) : l.description, ((d = (u = l.anchors) == null ? void 0 : u.description) == null ? void 0 : d.link) && s.createElement("sup", null, s.createElement("a", {
                href: l.anchors.description.link,
                id: l.anchors.description.id
            }, "[", l.anchors.description.label, "]")))), s.createElement(yt, {
                dataType: l.value_alignment === "right" ? "numeric" : "text"
            }, l.value_bold ? s.createElement("strong", null, l.value) : l.value, " ", l.value_bold ? s.createElement("strong", null, l.unit) : l.unit, ((m = (p = l.anchors) == null ? void 0 : p.value) == null ? void 0 : m.link) && s.createElement("sup", null, s.createElement("a", {
                href: l.anchors.value.link,
                id: l.anchors.value.id
            }, "[", l.anchors.value.label, "]"))), s.createElement(yt, null, l.ref_unit), s.createElement(yt, null, l.extra_field, ((b = (y = l.anchors) == null ? void 0 : y.extra_field) == null ? void 0 : b.link) && s.createElement("sup", null, s.createElement("a", {
                href: l.anchors.extra_field.link,
                id: l.anchors.extra_field.id
            }, "[", l.anchors.extra_field.label, "]"))))))
        }
        )))), a.indicators.map(l=>s.createElement(s.Fragment, null, l.isDoctorsNote && s.createElement(zr, null, l.description && s.createElement("strong", null, l.description), l.value_bold ? s.createElement("strong", null, l.value) : l.value))), (c = a.internalAnchors) == null ? void 0 : c.map(l=>s.createElement(zr, {
            key: l
        }, s.createElement("sup", null, s.createElement("a", {
            href: l.link,
            id: l.id
        }, "[", l.label, "]")), " ", l.text)))
    }
    ))))
}
function Zs({...e}) {
    const t = lt()
      , {t: n} = j()
      , {refname: r} = ce()
      , a = pn()
      , i = f.useContext(jr);
    e.endpoint = "/api/anon_login/";
    function c(l) {
        var d;
        ((d = i.getValues()) == null ? void 0 : d.captcha) ? (window.localStorage.setItem("dilosi-login-next", "/templates/" + r + "/create"),
        window.localStorage.setItem("auto-create-document", r)) : (l.preventDefault(),
        t(n("captcha.required"), "error"))
    }
    return a != null && a.anonymous_login && window.localStorage.getItem("auto-create-document") ? s.createElement(In, {
        ...e
    }) : s.createElement(Je, {
        onClick: c,
        type: "submit",
        ...e
    })
}
function kd({displayValues: e, category: t}) {
    return t.data.length === 0 ? s.createElement(bt, null, "Δεν υπάρχουν στοιχεία.") : e ? s.createElement(dr, {
        noLastBorder: !0
    }, t.data.map((n,r)=>s.createElement(en, {
        key: r
    }, s.createElement(tn, {
        className: "sm:w-5/12 md:w-4/12"
    }, n.label), s.createElement(nn, null, n.value)))) : s.createElement($a, {
        listStyle: "bullet"
    }, t.data.map((n,r)=>s.createElement(Va, {
        key: r
    }, n.label)))
}
function wd({props: e}) {
    return s.createElement(s.Fragment, null, s.createElement(we, {
        size: "lg"
    }, "Διαβίβαση προς"), s.createElement(hn, {
        borderColor: "light",
        mb: 0
    }, s.createElement(dr, {
        noLastBorder: !0,
        mb: 0
    }, s.createElement(en, null, s.createElement(tn, null, e.recipientLabel), s.createElement(nn, null, e.recipient)), s.createElement(en, null, s.createElement(tn, null, e.transactionLabel), s.createElement(nn, null, e.transaction)))))
}
function xd(e) {
    return s.createElement(s.Fragment, null, s.createElement(we, {
        size: "lg"
    }, e.dataLabel), s.createElement(ll, {
        mb: 12,
        summaryColor: "secondary",
        horizontalBorders: "bottom",
        dense: !0
    }, e == null ? void 0 : e.data.map((t,n)=>s.createElement(cl, {
        key: n,
        open: !0
    }, s.createElement(ul, null, s.createElement(dl, {
        "aria-controls": "content".concat(n)
    }, t.label), s.createElement(bt, null, t.data.length, "", " στοιχεία")), s.createElement(fl, {
        id: "content".concat(n),
        mb: 8
    }, s.createElement(kd, {
        displayValues: e.displayValues,
        category: t
    }))))), s.createElement(wd, {
        props: e
    }))
}
function Md(e, t) {
    var n, r, a, i;
    return {
        recipient: (r = (n = e["data-recipient"].display.find(c=>c["display-key"] === t)) == null ? void 0 : n.label) != null ? r : "",
        transaction: (i = (a = e["transaction-description"].display.find(c=>c["display-key"] === t)) == null ? void 0 : a.label) != null ? i : "",
        data: e["transaction-data"].category.map(c=>{
            var l, u;
            return {
                label: (u = (l = c.display.find(d=>d["display-key"] === t)) == null ? void 0 : l.label) != null ? u : "",
                data: c.record ? c.record.map(d=>{
                    var p, m, y, b;
                    return {
                        label: (m = (p = d.display.find(E=>E["display-key"] === t)) == null ? void 0 : p.label) != null ? m : "",
                        value: (b = (y = d.display.find(E=>E["display-key"] === t)) == null ? void 0 : y.value) != null ? b : ""
                    }
                }
                ) : []
            }
        }
        )
    }
}
function Ld(e) {
    const t = f.useMemo(()=>{
        try {
            if (e.value)
                return JSON.parse(e.value);
            throw new Error("Value is required")
        } catch {
            throw new Error("Invalid JSON value")
        }
    }
    , [e.value])
      , n = f.useMemo(()=>Md(t, "el"), [t])
      , r = e["component-params"]["display-values"]
      , a = e["component-params"]["transaction-label"] || "consent-data.transaction-label"
      , i = e["component-params"]["recipient-label"] || "consent-data.transaction-label"
      , c = e["component-params"]["data-label"] || "consent-data.data-label";
    return s.createElement(xd, {
        displayValues: r,
        transactionLabel: a,
        recipientLabel: i,
        dataLabel: c,
        ...n
    })
}
const gt = {
    string: Jt,
    text: Jt,
    "dynamically-filled-text": Es,
    "fillable-string": ui,
    afm: Jt,
    attachment: $r,
    quote: js,
    selectMany: Fn,
    hierarchical_select: Ys,
    image: Nr,
    "lab-results": Qs,
    qrcode: ml,
    "consent-content": Ld
}
  , ba = {
    mobile_certified_login: Yu,
    gsis_login: Hu,
    anonymous_login: zo,
    generic: Ho
}
  , Id = {
    "document-dismiss": [cs, {
        action: "dismiss"
    }],
    "document-update": [Qn, {
        action: "update"
    }],
    "document-backstep": [us],
    "document-create": [In],
    "document-anon-create": [Zs],
    "document-collect": [ln, {
        action: "update"
    }],
    "document-issue-collected": [ln, {
        action: "issue"
    }],
    "document-temporary-save": [sn, {}],
    "document-submit": [qe, {
        label: ".application.preview.submit",
        action: "confirm",
        advanceStep: !0
    }],
    "document-confirm": [Qn, {
        label: ".application.preview.submit",
        action: "confirm",
        advanceStep: !0
    }],
    "document-resend-otp": [qe, {
        label: ".application.preview.submit",
        action: "resend_otp",
        advanceStep: !1,
        success: ".success.code.resend"
    }],
    "document-request": [qe, {
        label: ".application.preview.submit",
        action: "request",
        advanceStep: !0
    }],
    "document-download-pdf": [jo, {}],
    "web-print": [Us, {}],
    "document-share": [Yo, {}],
    "document-email": [qe, function(e) {
        return ha("email", e)
    }
    ],
    "document-sms": [qe, function(e) {
        return ha("sms", e)
    }
    ],
    "document-revoke": [qe, {
        label: ".application.preview.submit",
        action: "revoke",
        advanceStep: !0
    }],
    "entity-send-message": [Vs, {}],
    "entity-reply": [As, {}],
    "entity-print-pdf": [Ps, {}],
    link: [sn, {}]
};
function ha(e, t) {
    return it(t) ? {
        action: "send-document-link",
        success: ".".concat(e, ".success"),
        sendMethod: e
    } : {
        action: e,
        success: ".".concat(e, ".success")
    }
}
const Fd = {
    PAGE_TITLE: {
        hasBackButton: !0,
        backButtonDisabled: !1,
        size: "xl"
    }
}
  , Ad = {
    PAGE_TITLE: Jo,
    TEXT: Fo,
    FORM_FIELDS: Xo,
    FIELDSET: qo,
    FORM_FIELD: Wo,
    FIELD: Ko,
    QUOTE: Qo,
    CARD: ts,
    BOX: ns,
    GRID: U,
    TITLE: Zo,
    VALUES_LIST: es,
    TABULAR_LIST: Pr,
    HIDDEN: ()=>null,
    DIVIDER: pl,
    SUCCESS: rs,
    COLUMNS: Go,
    CONTAINER: ti,
    ACTIONS_CONTAINER: ps,
    ACTION_SET: ys,
    FORM_SUBMIT: Qn,
    DOCUMENT_ACTION: qe,
    DOCUMENT_PDF_ACTION: jo,
    DOCUMENT_CREATE_ACTION: In,
    DOCUMENT_CREATE_WITH_CAPTCHA_LOGIN: Zs,
    DOCUMENT_COLLECT_ACTION: ln,
    DOCUMENT_QRCODE: gs,
    DOCUMENT_STEP_ACTION: as,
    TEXT_SECTION: Or,
    PERSONAL_DETAILS: os,
    STEP_ACTION: bs,
    DOCUMENT_STATE: Ju,
    ENTITY_DECLARATION_OVERVIEW: Is,
    DOCUMENT_DATE: Dd,
    REDIRECT: Bs,
    DECLARATION_SIGNATURE: Hs,
    STEP_PRINT_DISPLAY: zs
};
function ei({name: e, params: t}) {
    const n = Ad[e]
      , r = f.useMemo(()=>{
        const a = t || {};
        return {
            ...Fd[e] || {},
            ...a
        }
    }
    , [t]);
    if (!n)
        throw new Error("Cannot resolve component for element with name " + e);
    return s.createElement(n, {
        ...r
    })
}
ei.propTypes = {
    name: o.any,
    params: o.object
};
f.createContext({});
function Ce({elements: e}) {
    const t = yl();
    return f.useMemo(()=>e.map(([a,i],c)=>(i = i || {},
    [a, {
        key: c,
        ...i
    }]))).map(([a,i])=>t.REFCODE_ENABLED === !1 && a === "DOCUMENT_QRCODE" ? null : s.createElement(ei, {
        name: a,
        params: i,
        key: i.key
    }))
}
Ce.propTypes = {
    elements: o.array
};
function ti({elements: e, className: t}) {
    return s.createElement(U, {
        container: !0,
        spacing: 2,
        className: t
    }, s.createElement(Ce, {
        elements: e
    }))
}
ti.propTypes = {
    elements: o.any,
    className: o.string
};
function ni({errors: e, children: t, native: n, method: r, action: a}) {
    const c = V().form;
    return c ? s.createElement(No, {
        form: c,
        errors: e,
        native: n,
        method: r,
        action: a
    }, t) : t
}
ni.propTypes = {
    children: o.any,
    errors: o.any,
    native: o.bool,
    method: o.string,
    action: o.string
};
const Pd = f.lazy(()=>$e(()=>import("./SafeHTML-C3YRFdZj.js"), __vite__mapDeps([0, 1, 2])));
function ri(e) {
    return s.createElement(s.Fragment, null, e.children)
}
ri.propTypes = {
    children: o.any
};
/*! (C) 2017-2018 Andrea Giammarchi - MIT Style License */
function ye(e, t, n) {
    33554432 < ye.$ && (ye._ = {},
    ye.$ = 0);
    var r = typeof e == "function", a = r ? t : e, i = r ? n : t, c = ye._, l = c.hasOwnProperty(a), u = l ? c[a] : c[a] = ye.parse(a), d = u.chunks, p = u.values, m;
    if (l || (ye.$ += a.length),
    r)
        a = "function" + (Math.random() * 1e5 | 0),
        m = [a, "with(this)return " + a + "([" + d + "]" + (p.length ? "," + p.join(",") : "") + ")"];
    else {
        m = d.slice(0, 1);
        for (var y = 1, b = d.length; y < b; y++)
            m.push(p[y - 1], d[y]);
        m = ["with(this)return " + m.join("+")]
    }
    return Function.apply(null, m).apply(i, r ? [e] : [])
}
ye._ = {};
ye.$ = 0;
ye.asMethod = function(e, t) {
    return typeof e == "function" ? ye(e, this, t) : ye(this, e)
}
;
ye.parse = function(e) {
    for (var t = JSON.stringify, n = 0, r = 0, a = 0, i = 0, c = e.length, l = i < c ? [] : ['""'], u = []; i < c; )
        if (n = e.indexOf("${", i),
        -1 < n) {
            for (l.push(t(e.slice(i, n))),
            n += 2,
            r = n,
            a = 1; r < c; ) {
                switch (e.charAt(r++)) {
                case "}":
                    --a;
                    break;
                case "{":
                    ++a;
                    break
                }
                if (a < 1) {
                    u.push("(" + e.slice(n, r - 1) + ")");
                    break
                }
            }
            i = r
        } else
            l.push(t(e.slice(i))),
            i = c;
    return l.length === u.length && l.push('""'),
    {
        chunks: l,
        values: u
    }
}
;
function ai({document: e, user: t, step: n, onAdvance: r, onReload: a, children: i}) {
    const c = e.template
      , l = (c.i18nKey || c.refname).toLowerCase() + "." + n.key
      , {t: u, i18n: d} = j()
      , p = mr(e, n, t)
      , m = f.useCallback((h,v={})=>{
        if (h && typeof h != "string")
            return h[d.language] ? ye(h[d.language], {
                document: e,
                user: t,
                fields: p
            }) : null;
        if (h && h.startsWith("."))
            return u(h.slice(1), {
                document: e,
                user: t,
                template: c,
                ...v
            });
        if (h) {
            const w = u(h);
            if (w !== h)
                return w
        } else
            return;
        const S = l + "." + h
          , O = h && u(l + "." + h, {
            fields: p,
            document: e,
            user: t,
            template: c,
            ...v
        });
        return S === O ? h : O
    }
    , [d.language, l, e, c])
      , y = ql(e, n, t, m);
    f.useEffect(()=>{
        n.skipIfNotEditable && n.form && !y.reduce((h,v)=>h || v.editable, !1) && r(e)
    }
    , [y, n.skipIfNotEditable]),
    ur(!1, !n.requireUser, n.loginURL || "/login?template=" + e.template.refname);
    const [b,E] = f.useState({
        setFocus: ()=>{}
        ,
        unsetFocus: ()=>{}
    })
      , g = f.useMemo(()=>{
        const h = y.reduce((v,S)=>({
            ...v,
            [S.key]: S
        }), {});
        return {
            document: e,
            template: c,
            step: n,
            user: t,
            form: {
                fields: y,
                fieldsMap: h
            },
            fields: p,
            advance: r,
            t: m,
            setFocusFuncs: E,
            focusFuncs: b,
            reload: a
        }
    }
    , [e, c, n, t, y, p, r, m, b]);
    return s.createElement(Io.Provider, {
        value: g
    }, s.createElement(gl, {
        reference_code: e.reference_code,
        id: e.id
    }, i))
}
ai.propTypes = {
    children: o.any,
    document: o.shape({
        id: o.any,
        reference_code: o.any,
        template: o.shape({
            i18nKey: o.any,
            refname: o.any
        })
    }),
    onAdvance: o.func,
    onReload: o.any,
    step: o.shape({
        form: o.any,
        key: o.any,
        loginURL: o.any,
        requireMobile: o.any,
        requireMobileConsent: o.any,
        requireUser: o.any,
        skipIfNotEditable: o.any
    }),
    user: o.any
};
function oi({document: e, user: t, stepName: n, validate: r, onAdvance: a, onReload: i}) {
    const c = rn(e)
      , [l,u] = f.useState(!1)
      , [d,p] = f.useState(e)
      , m = rn(d)
      , y = e && e.template
      , b = Wa(y);
    function E(O) {
        p(Xt(O, y)),
        u(!0)
    }
    f.useEffect(()=>{
        if (l && d) {
            const O = m.indexOf(g.key)
              , w = O === -1 ? m[0] : m[O + 1] || m[0];
            if (!w && r)
                throw new Error("Invalid document step resolved");
            a && a(d, g, b[w]),
            u(!1)
        }
    }
    , [l, d, m]),
    f.useEffect(()=>{
        c.includes(n) || u(!0)
    }
    , [n, c]);
    const g = Ka(e, t, n)
      , h = Ul(e, g)
      , v = g.layout || 8
      , S = g.noContainer ? ri : bl;
    return s.createElement(ai, {
        document: e,
        user: t,
        step: g,
        onAdvance: E,
        onReload: i
    }, s.createElement(S, {
        grid: !1,
        withrole: "main"
    }, s.createElement(U, {
        container: !0
    }, s.createElement(U, {
        item: !0,
        md: v,
        xs: 12
    }, s.createElement(ni, {
        ...g.formProps || {}
    }, s.createElement(Ce, {
        elements: h
    }))))))
}
oi.propTypes = {
    document: o.shape({
        template: o.any
    }),
    onAdvance: o.func,
    stepName: o.any,
    user: o.any,
    validate: o.bool,
    onReload: o.func
};
function si({Layout: e, footer: t, user: n, document: r, step: a, advance: i}) {
    var d;
    const {i18n: c} = j()
      , l = jl(r, c.language)
      , u = (t != null ? t : !0) && ((d = (a != null ? a : {
        footer: !0
    }).footer) != null ? d : !0);
    return e = e || Ya,
    s.createElement(s.Fragment, null, s.createElement(e, {
        noTop: !0,
        isLoggedIn: !!n,
        windowTitle: l.title,
        serviceName: l.serviceName,
        serviceLogo: l.serviceLogo,
        serviceURL: l.serviceURL,
        serviceLogoURL: l.serviceLogoURL,
        container: r && s.createElement(s.Fragment, null, s.createElement(oi, {
            stepName: a,
            document: r,
            user: n,
            onAdvance: i
        }), u && s.createElement(hl, {
            id: "footeraki",
            site: l,
            dashboard: !l
        }))
    }))
}
si.propTypes = {
    Layout: o.any,
    advance: o.any,
    document: o.any,
    footer: o.bool,
    step: o.any,
    user: o.any
};
const ht = new Dl;
ht.register(kl);
ht.register(wl);
ht.register(xl);
ht.register(Ml);
ht.register({
    Fieldset: El
});
const Nd = ()=>{
    const e = En()
      , {id: t, step: n} = ce();
    ur();
    const [r,a] = f.useState()
      , {name: i} = Ie();
    let c = "my-declarations";
    const l = Ke();
    it(i) && (c = l);
    const {data: u} = fn({
        resource: c,
        id: t,
        consume: !0,
        suspense: !1
    })
      , [d,p] = f.useState()
      , [m,y] = f.useState()
      , [b,E] = f.useState(null);
    f.useEffect(()=>{
        if (r) {
            const D = Object.keys(r.step_info.fields).filter(T=>r.step_info.fields[T].display.component === "attachment");
            D.length && E(D)
        }
    }
    , [r]);
    const {fetch: g, loaded: h, loading: v} = Le({
        resource: c,
        id: "".concat(t, "/upload"),
        data: m
    });
    f.useEffect(()=>{
        b && m && !h && !v ? g() : d && (b && m && h ? O() : m || O())
    }
    , [d, b, m, h, v]);
    const {data: S, fetch: O, loading: w} = Le({
        resource: c,
        id: "".concat(t, "/update"),
        data: d
    });
    f.useEffect(()=>{
        if (S) {
            e("/issue/".concat(t, "/").concat(S.step_name));
            const D = Wr(S, "web", "el");
            a(D);
            return
        }
        if (u) {
            if (n !== u.step_name)
                e("/issue/".concat(u.id, "/").concat(u.step_name));
            else if (!r) {
                const D = Wr(u, "web", "el");
                a(D)
            }
        }
    }
    , [S, u, n]);
    const x = f.useCallback(D=>{
        if (b && Object.keys(D).some(C=>b.includes(C))) {
            const C = new FormData;
            b.forEach(M=>{
                D[M] && C.set(M, D[0])
            }
            ),
            y(C)
        }
        p({
            fields: Object.keys(D).filter(T=>b ? !b.includes(T) : !0).map(T=>{
                var A, F, P, J;
                let C = D[T];
                const M = r.step_info.fields[T];
                if (["display", "noinput"].includes(M["user-input-mode"]))
                    return {};
                const L = r.step_info.fields[T].display.component;
                return Un[L] && ((F = (A = Un[L]) == null ? void 0 : A.value) != null && F.formToApi) && (C = (J = (P = Un[L]) == null ? void 0 : P.value) == null ? void 0 : J.formToApi(M, D[T])),
                {
                    field_name: T,
                    value: C
                }
            }
            ).filter(({value: T})=>T)
        })
    }
    , [r]);
    return f.useMemo(()=>({
        updateData: x,
        declaration: r,
        updateDeclaration: {
            fetch: O,
            loading: w
        }
    }), [x, r, w])
}
  , $d = (e,t)=>f.useMemo(()=>e ? Ll(e, Al, t) : ()=>s.createElement("div", null), [e]);
function Vd() {
    const {declaration: e, updateDeclaration: t, updateData: n} = Nd();
    return s.createElement(ii, {
        declaration: e,
        updateDeclaration: t,
        updateData: n
    })
}
function ii({declaration: e, updateDeclaration: t, updateData: n, builder: r}) {
    const a = r || Il
      , i = f.useMemo(()=>e ? a(e) : null, [e])
      , c = $d(i, ht);
    return s.createElement(f.Suspense, null, s.createElement(Fl, {
        updateDeclaration: t,
        updateData: n
    }, s.createElement(c, null)))
}
ii.propTypes = {
    declaration: o.any,
    updateDeclaration: o.any,
    updateData: o.any,
    builder: o.any
};
const jd = ["YPDILa"];
function li({buildURL: e, useDocument: t, user: n, step: r, Layout: a, useParams: i, showFooter: c, scope: l, redirectIfTemplateDisabled: u}) {
    a = a || Ya,
    i = i || ce;
    const {id: d, step: p} = i()
      , m = r || p
      , y = En()
      , [b,E] = f.useState(!0)
      , {document: g, mutate: h, templateEnabled: v, templateRefname: S} = t(d, l, !0, b);
    f.useEffect(()=>{
        u && S && !v && y("/templates/".concat(S, "/"), !0)
    }
    , [v, S, u]);
    const O = rn(g);
    f.useEffect(()=>{
        O.length || x(g, m, null)
    }
    , [O.length]);
    const w = xa();
    function x(D, T, C) {
        T && h(D);
        const [M,L] = e(D, T, C);
        w(),
        y(M, {
            replace: L
        })
    }
    return f.useEffect(()=>{
        g && E(!1)
    }
    , [g]),
    g && jd.includes(g.template.refname) && d ? s.createElement(Vd, null) : s.createElement(ci, {
        document: g,
        step: m,
        mutate: h,
        buildURL: e,
        navigate: y,
        setSuspense: E,
        user: n,
        Layout: a,
        showFooter: c
    })
}
ci.propTypes = {
    document: o.any,
    step: o.any,
    mutate: o.any,
    buildURL: o.any,
    navigate: o.any,
    setSuspense: o.any,
    user: o.any,
    Layout: o.any,
    showFooter: o.any
};
li.propTypes = {
    Layout: o.any,
    buildURL: o.func,
    scope: o.any,
    showFooter: o.any,
    step: o.any,
    useDocument: o.func,
    useParams: o.func,
    user: o.any,
    redirectIfTemplateDisabled: o.bool
};
function ci({document: e, step: t, mutate: n, buildURL: r, navigate: a, setSuspense: i, user: c, Layout: l, showFooter: u}) {
    const d = rn(e);
    f.useEffect(()=>{
        d.length || p(e, t, null)
    }
    , [d.length]);
    function p(m, y, b) {
        y && n(m);
        const [E,g] = r(m, y, b);
        a(E, {
            replace: g
        })
    }
    return f.useEffect(()=>{
        e && i(!1)
    }
    , [e]),
    s.createElement(si, {
        document: e,
        user: c,
        step: t,
        advance: p,
        Layout: l,
        footer: u
    })
}
function Ud({buildURL: e, user: t, ...n}) {
    const {refname: r} = ce()
      , {data: a} = Xa(r)
      , i = En()
      , [c,l] = f.useState(()=>{
        var p;
        const d = {
            id: null,
            state: "new",
            template: a,
            collectable: a.collectable,
            step_info: (p = a.intro_step) != null ? p : null,
            step_name: "create",
            fields: []
        };
        return a.intro_step ? vl(d, a, d, "creator") : d
    }
    );
    f.useEffect(()=>{
        c.collectable && n.step !== "ui-form" && i("/templates/" + r + "/ui-form/create")
    }
    , [c.collectable]);
    const u = f.useCallback(()=>({
        document: c,
        loading: !1,
        loaded: !0,
        mutate: l,
        fetch: ()=>{}
    }), [c]);
    return s.createElement(li, {
        buildURL: e,
        useDocument: u,
        user: t,
        scope: "template",
        ...n
    })
}
Ud.propTypes = {
    buildURL: o.any,
    user: o.any,
    step: o.any
};
function ui({"default-value": e, value: t}) {
    const n = V()
      , r = pr(n.document.step_info)
      , a = t || e;
    return s.createElement(U, {
        item: !0,
        xs: 12
    }, s.createElement(ne, null, s.createElement(Vt, {
        text: a,
        fields: r,
        fill: !0,
        nohighlight: !0,
        newline: " "
    })))
}
ui.propTypes = {
    "default-value": o.any,
    "component-params": o.any,
    value: o.any
};
function di({"default-value": e, value: t}) {
    const n = V()
      , r = pr(n.document.step_info)
      , a = t || e;
    return s.createElement(Mt, {
        className: "whitespace-break-spaces break-words"
    }, s.createElement(Vt, {
        text: a,
        fields: r,
        fill: !0,
        nohighlight: !0,
        newline: " "
    }))
}
di.propTypes = {
    "default-value": o.any,
    "component-params": o.any,
    value: o.any
};
const fi = f.lazy(()=>$e(()=>import("./SafeHTML-C3YRFdZj.js"), __vite__mapDeps([0, 1, 2])));
o.string,
o.object,
o.bool,
o.object,
o.object,
o.node;
function mi({field: e, className: t}) {
    var c;
    const n = e.listHint
      , {document: r} = V()
      , a = f.useMemo(()=>{
        var u;
        const l = ((u = r == null ? void 0 : r.step_info) == null ? void 0 : u.fields) || {};
        return Object.keys(l).reduce((d,p)=>[...d, {
            key: p,
            ...l[p]
        }], [])
    }
    , [(c = r == null ? void 0 : r.step_info) == null ? void 0 : c.fields])
      , i = f.useMemo(()=>{
        const l = e.label || "";
        return (e["component-params"] || {})["format-title"] ? s.createElement(Vt, {
            text: l,
            fill: !0,
            fields: a,
            nohighlight: !0
        }) : s.createElement(fi, {
            content: l
        })
    }
    , [e["component-params"], e.label]);
    return s.createElement(tn, {
        className: gn(t, e.className, "w-1/2")
    }, i, n ? s.createElement("span", null, " *") : [])
}
mi.propTypes = {
    className: o.string,
    field: o.shape({
        label: o.any,
        listHint: o.any,
        className: o.any,
        "component-params": o.any
    })
};
function Ea({field: e, value: t}) {
    return t && (t.name || t)
}
const Bd = {
    "/": "jpeg",
    i: "png",
    R: "gif",
    U: "webp"
};
function Nr({field: e, value: t}) {
    var i;
    const n = f.useMemo(()=>e.params || {}, [e.params])
      , {t: r} = j()
      , a = f.useMemo(()=>t && typeof t == "string" && t.length > 0 ? JSON.parse(t) : t, [t]);
    if (a && a["content-encoding"] === "base64" && a.content) {
        const c = Bd[a.content.charAt(0)] || "jpeg";
        return a && a.content ? s.createElement("div", null, s.createElement("img", {
            alt: n.alt || r("key_value_list.default_alt_text", {
                label: e.label
            }),
            src: "data:image/".concat(c, ";base64,").concat(a.content),
            ...n || {}
        })) : (i = a && a.filename) != null ? i : null
    } else
        return a && a["content-uri"] ? s.createElement("div", null, s.createElement("img", {
            alt: n.alt || r("key_value_list.default_alt_text", {
                label: e.label
            }),
            src: a["content-uri"],
            ...n || {}
        })) : "Image encoding other than base64 is not implemented"
}
Nr.propTypes = {
    field: o.any,
    value: o.any
};
function $r({field: e, value: t, ...n}) {
    var c;
    const {t: r} = j()
      , {name: a} = Ie()
      , i = f.useMemo(()=>it(a) ? t ? {
        url: t["content-uri"],
        file_name: t.filename
    } : {} : t && typeof t == "string" && t.length > 0 ? JSON.parse(t) : t, [t]);
    return i && i.url ? s.createElement(U, {
        item: !0,
        xs: 12,
        sm: 12
    }, s.createElement(ne, {
        marginBottom: 4
    }, s.createElement("b", null, r("label.file"), ": "), s.createElement("em", null, i.file_name)), s.createElement(xu, {
        url: i.url
    })) : (c = i && i.file_name) != null ? c : null
}
$r.propTypes = {
    field: o.any,
    value: o.shape({
        filename: o.any,
        file_name: o.any,
        length: o.number,
        url: o.any,
        "content-uri": o.any
    })
};
function pi({field: e, value: t}) {
    return t != null ? t : null
}
pi.propTypes = {
    field: o.any,
    value: o.any
};
function Vr({field: e, value: t}) {
    const r = (e["component-params"] || {}).format === "plaintext";
    t = t != null ? t : "";
    const a = t.split("\n").map((i,c)=>s.createElement(f.Fragment, {
        key: c
    }, i, s.createElement("br", null)));
    return e.safe ? a != null ? a : null : r ? t && s.createElement(ar, {
        as: "pre",
        className: "font-sans m-0 -mt-1 whitespace-pre-line"
    }, a) : a != null ? a : null
}
Vr.propTypes = {
    field: o.shape({
        safe: o.any,
        "component-params": o.any
    }),
    value: o.any
};
Vr.display = "block";
function va({field: e, value: t}) {
    if (e.choices) {
        const a = e["component-params"]
          , i = a && a["legacy-mode"];
        if (!i && typeof e.choices[t] == "string")
            return e.choices[t];
        if (i)
            return t
    }
    return e.options.reduce((a,i)=>i.value === t ? i.label || i.text && i.text.primary : a || "", t)
}
const Yd = e=>!(e || "").replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/gi, "").replace(/(<([^>]+)>)/gi, "").trim();
function un({field: e, value: t}) {
    const n = e.jsComponent || dn[e.type] || dn.string;
    return e.jsComponent && Yd(t) ? s.createElement(fi, {
        style: {
            whiteSpace: "normal"
        },
        Tag: "div",
        mb: 4,
        content: t
    }) : s.createElement(n, {
        field: e,
        value: t
    })
}
un.propTypes = {
    field: o.shape({
        jsComponent: o.any,
        type: o.any
    }),
    value: o.any
};
function yi({value: e, field: t}) {
    var l, u, d;
    try {
        e = e ? JSON.parse(e) : []
    } catch {
        e = []
    }
    const r = e.length === 0
      , {t: a} = j()
      , i = ((l = t["component-params"]) == null ? void 0 : l.fields[0]) || t
      , c = ((d = (u = t["component-params"]) == null ? void 0 : u.multiplicityLabels) == null ? void 0 : d.emptyValueDisplay) || "listof.label.emptyValueDisplay";
    return r ? s.createElement(ne, null, a(c)) : s.createElement($a, {
        marginTop: 0
    }, e.map((p,m)=>s.createElement(Va, {
        key: m
    }, s.createElement(un, {
        value: p,
        field: i
    }))))
}
yi.propTypes = {
    value: o.any,
    field: o.any
};
const dn = {
    string: pi,
    recipient: Ea,
    entity_recipient: Ea,
    select: va,
    buttonsGroup: va,
    attachment: $r,
    text: Vr,
    fillable_string: di,
    selectMany: Fn,
    listOf: yi,
    image: Nr,
    "lab-results": Qs
};
function Et({fields: e, values: t, ...n}) {
    return s.createElement(dr, {
        ...n
    }, e.filter(r=>!!r.key).map((r,a)=>s.createElement(en, {
        key: r.key,
        "data-testid": "user"
    }, r.label ? s.createElement(s.Fragment, null, s.createElement(mi, {
        field: r,
        className: "list-label"
    }), s.createElement(nn, {
        className: "w-1/2",
        xs: 12,
        sm: 6
    }, s.createElement(un, {
        field: r,
        value: t[r.key]
    }))) : s.createElement(s.Fragment, null, s.createElement(U, {
        item: !0,
        xs: 12,
        sm: 12
    }, s.createElement(un, {
        field: r,
        value: t[r.key]
    }))))))
}
Et.propTypes = {
    className: o.any,
    fields: o.array,
    values: o.any
};
const Hd = f.lazy(()=>$e(()=>import("./SafeHTML-C3YRFdZj.js"), __vite__mapDeps([0, 1, 2])));
function zd(e) {
    const t = [];
    let n = "";
    const r = e.split("");
    return r.forEach((a,i)=>{
        a === "\n" ? (t.push({
            type: "text",
            value: n
        }),
        t.push({
            value: "\n",
            type: "new_line"
        }),
        n = "") : a === "}" ? (t.push({
            type: "var",
            value: n
        }),
        n = "") : a === "{" ? (t.push({
            type: "text",
            value: n
        }),
        n = "") : i === r.length - 1 ? (t.push({
            type: "text",
            value: n + a
        }),
        n = "") : n += a
    }
    ),
    t
}
function Vt({text: e, fields: t, focused: n=[], fill: r, nohighlight: a, newline: i=s.createElement("br", null)}) {
    const c = zd(e).map((l,u)=>{
        let d = l.value;
        const p = l.value
          , m = t ? t.find(g=>l.value === g.key) : null;
        let y = "inline";
        if (l.type === "new_line")
            return i;
        if (l.type === "text")
            return s.createElement(Hd, {
                content: d,
                key: l + u
            });
        if (r && m)
            if (d = m.value,
            d) {
                const g = _l[m.component];
                if (g && dn[g] && m.value) {
                    const h = dn[g];
                    h.display && (y = h.display),
                    d = s.createElement(h, {
                        field: m,
                        value: m.value
                    })
                }
            } else
                return ".................";
        else
            m && (d = m.template_hint || m.title || m.label || m.hint || d);
        if (a)
            return d;
        const E = n.includes(p) ? "warning" : "light";
        return s.createElement(wu, {
            key: p + u,
            text: d,
            type: E,
            display: y
        })
    }
    );
    return s.createElement(s.Fragment, null, [c])
}
function _a(e) {
    return e = e.replace(/Ά|Α|ά/g, "α").replace(/Έ|Ε|έ/g, "ε").replace(/Ή|Η|ή/g, "η").replace(/Ί|Ϊ|Ι|ί|ΐ|ϊ/g, "ι").replace(/Ό|Ο|ό/g, "ο").replace(/Ύ|Ϋ|Υ|ύ|ΰ|ϋ/g, "υ").replace(/Ώ|Ω|ώ/g, "ω").replace(/Σ|ς/g, "σ"),
    e
}
function Gd(e, t) {
    if (!t)
        return !0;
    const n = _a(t.normalize("NFC").replace(/[\u0300-\u036f]/g, "").toLowerCase())
      , r = Object.keys(e).map(a=>e[a] ? e[a].toString().toLowerCase() : "").join("");
    return _a(r.normalize("NFC").replace(/[\u0300-\u036f]/g, "")).includes(n)
}
function wf(e, t=null) {
    return f.useMemo(()=>e.filter(n=>Gd(n, t)), [e, t])
}
function qd({value: e, onChange: t, ...n}) {
    return f.useEffect(()=>{
        var i;
        const a = (i = new URLSearchParams(window.location.search).get(n.params["param-name"])) != null ? i : "";
        t(a || void 0)
    }
    , []),
    s.createElement("input", {
        type: "hidden",
        value: e,
        name: n.name
    })
}
_e.extend(sr);
const Wd = f.lazy(()=>$e(()=>import("./react-markdown-DvBHW9UP.js").then(e=>e.r), __vite__mapDeps([3, 1, 2])))
  , Ca = f.lazy(()=>$e(()=>import("./SafeHTML-C3YRFdZj.js"), __vite__mapDeps([0, 1, 2])))
  , zn = {
    text: pe,
    string: pe,
    number: pe,
    rate: pe,
    iban: pe,
    amka: pe,
    phone: pe,
    landline_phone: pe,
    postal_code: pe,
    attachment: Kn,
    file: Kn,
    buttonsGroup: gr,
    autocomplete: vo,
    select: At,
    "aid-select": go,
    selectMany: bo,
    date: ho,
    dateTime: Eo,
    hierarchical_select: _o,
    hidden: ()=>null,
    recipient: xo,
    listOf: Vn,
    captcha: Cr,
    "url-param": qd
}
  , Kd = ["DD/MM/YYYY"]
  , Xd = ["DD/MM/YYYY HH:mm"]
  , Ta = {}
  , Sa = {}
  , St = e=>Ta[e] ? Ta[e] : _e(e, Kd, !0)
  , Jd = e=>Sa[e] ? Sa[e] : _e(e, Xd, !0);
function Qd(e) {
    return (e > 9 ? 1 : 0) + e % 10
}
const Zd = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  , ef = /^[12345678][0-9]{4}$/;
function tf(e) {
    e = String(e);
    const t = e.length - 1;
    let n = 0;
    e.substr(0, t).split("").reverse().forEach(function(a, i) {
        const c = (i + 1) % 2 + 1;
        n += Qd(parseInt(a, 10) * c)
    });
    const r = n % 10;
    return r === 0 ? e.substr(t) === "0" : e.substr(t) === 10 - r + ""
}
const nf = {
    GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]], 0, 0, 0, 0, 0, 0, [["2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}", [10]], ["68[57-9]\\d{7}|(?:69|94)\\d{8}", [10]], ["800\\d{7,9}"], ["90[19]\\d{7}", [10]], ["70\\d{8}", [10]], 0, ["5005000\\d{3}", [10]], 0, 0, ["8(?:0[16]|12|[27]5|50)\\d{7}", [10]]]]
};
function rf(e) {
    const t = Object.keys(e)
      , n = {};
    for (const r of t)
        n[r] = {
            fixedLine: {
                possibleLengths: {
                    _national: e[r][3].map(String)
                },
                nationalNumberPattern: e[r][11][0][0]
            },
            mobile: {
                nationalNumberPattern: e[r][11][1][0]
            },
            tollFree: {
                nationalNumberPattern: e[r][11][2][0]
            },
            premiumRate: {
                nationalNumberPattern: e[r][11][3][0]
            },
            sharedCost: {
                nationalNumberPattern: e[r][11][9][0]
            },
            personalNumber: {
                nationalNumberPattern: e[r][11][4][0]
            },
            uan: {
                nationalNumberPattern: e[r][11][6][0]
            },
            id: r,
            countryCode: e[r][0],
            internationalPrefix: e[r][1]
        };
    return n
}
const af = rf(nf);
function of(e, t) {
    const n = e.replace(/\D/g, "").replace(/\s/g, "").replace(/^\+/, "").replace(new RegExp("^" + t.internationalPrefix,""), "").replace(new RegExp("^" + t.countryCode,""), "")
      , r = {
        landline: t.fixedLine,
        mobile: t.mobile,
        "toll-free": t.tollFree,
        "premium-rate": t.premiumRate
    };
    for (const [a,i] of Object.entries(r)) {
        const c = new RegExp("^(" + i.nationalNumberPattern.replace(/\s/g, "") + ")$","");
        if (n.match(c))
            return a
    }
    return "unknown"
}
function gi(e, t) {
    const n = af[t.toUpperCase()];
    if (!n)
        throw new Error("Country ".concat(t, " is not supported"));
    return of(e, n)
}
function sf(e, t, n=["mobile", "landline"]) {
    return t.some(r=>{
        const a = gi(e, r);
        return !!(a && n.includes(a))
    }
    )
}
function lf(e, t, n) {
    return gi(e, t) === n
}
function Oa(e, t=["gr"], n) {
    return !t || t.length === 0 ? !0 : sf(e, t, n ? [n] : void 0)
}
function cf(e) {
    return lf(e, "gr", "mobile")
}
function uf(e, t) {
    return t ? t.length === 1 && t[0].toUpperCase() === "GR" ? ef.test(e) : !0 : !1
}
const Gn = {
    string: ()=>Pe(),
    text: ()=>Pe(),
    file: ()=>Gr(),
    attachment: ()=>Gr().transform(e=>{
        if (!(e === "" || e === null))
            return e
    }
    ),
    amka: ()=>Pe().test({
        name: "amka",
        message: "amka_info_not_found",
        test: function(e) {
            return e ? !/^[0-9]{11}$/.test(e) || e === "00000000000" ? !1 : tf(e) : !0
        }
    }),
    phone: e=>Pe().test({
        name: "phone",
        message: "form.validation.phone",
        test: function(t) {
            if (!t)
                return !0;
            const n = e["component-params"]
              , r = n && n.countries_allowed || ["gr"];
            return Oa(t, r)
        }
    }),
    landline_phone: e=>Pe().test({
        name: "landline",
        message: "form.validation.landline",
        test: function(t) {
            if (!t)
                return !0;
            const n = e["component-params"]
              , r = n && n.countries_allowed || ["gr"];
            return Oa(t, r, "landline")
        }
    }),
    postal_code: e=>Pe().test({
        name: "postal_code",
        message: "form.validation.postal_code",
        test: function(t) {
            if (!t)
                return !0;
            const n = e["component-params"]
              , r = n && n.countries_allowed || ["gr"];
            return uf(t, r)
        }
    }),
    dateTime: e=>Pe().nullable(!0).test("dateTime", "form.validation.dateTime.invalid", function(t) {
        return t ? (t = Jd(t),
        t.isValid()) : !0
    }),
    date: e=>{
        let t = Pe().nullable(!0).test("date", "form.validation.date.invalid", function(r) {
            return r ? (r = St(r),
            r.isValid()) : !0
        });
        const n = e["component-params"] || {};
        if (n.max) {
            let r;
            if (n.max === "now") {
                const i = new Date;
                r = new Date(i)
            } else
                r = St(n.max).toDate();
            const a = new Date(r);
            a.setDate(r.getDate() + 1),
            t = t.test({
                name: "earlier-than",
                message: {
                    key: "form.validation.date.earlier_than",
                    context: {
                        maxDate: a.toLocaleDateString("el")
                    }
                },
                test: function(i) {
                    return i ? (i = St(i),
                    +i.toDate() <= +r) : !0
                }
            })
        }
        if (n.min) {
            let r;
            if (n.min === "now") {
                const i = new Date;
                r = new Date(i)
            } else
                r = St(n.min).toDate();
            const a = new Date(r);
            a.setDate(r.getDate() - 1),
            t = t.test({
                name: "later-than",
                message: {
                    key: "form.validation.date.later_than",
                    context: {
                        minDate: a.toLocaleDateString("el")
                    }
                },
                test: function(i) {
                    return i ? (i = St(i),
                    +i.toDate() >= +r) : !0
                }
            })
        }
        return t
    }
    ,
    rate: e=>{
        const t = qr().transform((r,a)=>a === "" ? null : r).integer("form.validation.rate").min(0, "form.validation.rate").max(100, "form.validation.rate")
          , n = e["component-params"];
        if (n && n.dependencies) {
            const r = n["dependencies-error-message"] || "form.validation.rate_sum";
            return t.test("max_sum", r, function(a) {
                return a ? n.dependencies.reduce((i,c)=>{
                    const l = this.parent[c] || 0;
                    return i + l
                }
                , 0) <= 100 : !0
            })
        }
        return t
    }
    ,
    int: ()=>qr().typeError("form.validation.number").positive("form.validation.number"),
    email: ()=>Pe().matches(Zd, {
        message: "form.validation.email",
        excludeEmptyString: !0
    })
}
  , df = e=>{
    const t = e["component-params"] || {}
      , n = t.multiplicity
      , r = e.required === !0 || t.required === !0 ? 1 : 0;
    return {
        name: "list-of-len-validator",
        message: {
            key: "form.validation.listof.min_max",
            context: {
                min: r,
                max: n
            }
        },
        test: a=>{
            try {
                a = JSON.parse(a)
            } catch {
                a = []
            }
            const i = a ? a.length : 0;
            return i >= r && i <= n
        }
    }
}
  , ff = e=>{
    let t = "";
    return e["component-params"] && e["component-params"].country && (t = e["component-params"].country),
    {
        name: "iban-validator",
        message: "form.validation.iban".concat(t ? "_".concat(t) : ""),
        test: n=>{
            if (!n || n.length === 0)
                return !0;
            if (n = n.replace(/\s/g, "").replace(/-/g, ""),
            isNaN(n[0])) {
                if (n = n.toUpperCase(),
                t && !n.startsWith(t.toUpperCase()) || n.length !== 27)
                    return !1
            } else if (n.length !== 25)
                return !1;
            return !0
        }
    }
}
  , mf = {
    name: "afm-validator",
    message: "form.validation.afm",
    test: e=>e ? Wl(e) : !0
}
  , pf = {
    name: "mobile-phone-validator",
    message: "form.validation.mobile_phone",
    test: e=>e ? cf(e) : !0
}
  , Ra = {
    afm: [mf],
    iban: [ff],
    mobile_phone: [pf],
    listOf: [df]
};
function yf(e, t) {
    return f.useMemo(()=>{
        const n = {};
        e.forEach(a=>{
            if (a.editable === !1)
                return;
            let i = Gn[a.fieldType] || Gn[a.type] || Gn.string;
            i = i(a),
            a.required && (i = i.required("form.validation.required")),
            i = i.nullable();
            let c = Ra[a.fieldType] || Ra[a.type] || [];
            a.validators && (c = c.concat(a.validators)),
            c.forEach(l=>{
                typeof l == "function" && (l = l(a)),
                i = i.test(l)
            }
            ),
            n[a.key] = i
        }
        );
        let r = Cl().shape(n);
        return (t || []).forEach(a=>{
            r = r.test(a)
        }
        ),
        r
    }
    , [e])
}
function bi({title: e, label: t, cancel: n, children: r}) {
    const [a,i] = f.useState(!1);
    function c(l) {
        l.preventDefault(),
        i(!1)
    }
    return s.createElement(s.Fragment, null, s.createElement(Zt, {
        variant: "link",
        type: "button",
        onClick: l=>{
            l.preventDefault(),
            i(!0)
        }
    }, t), s.createElement(Xe, {
        open: a,
        "aria-labelledby": "form-dialog-title"
    }, s.createElement(Ve, {
        id: "form-dialog-title"
    }, e), s.createElement(je, null, s.createElement("pre", null, r)), s.createElement(Ue, null, s.createElement(Zt, {
        variant: "link",
        onClick: c
    }, n))))
}
bi.propTypes = {
    children: o.any,
    label: o.any,
    title: o.any,
    cancel: o.any
};
const nr = ({source: e, children: t, nowrap: n, ...r})=>{
    t = e || t;
    const a = s.createElement(Wd, {
        ...r
    }, t);
    return n ? a : s.createElement("div", null, a)
}
;
nr.propTypes = {
    children: o.any,
    nowrap: o.any,
    source: o.any
};
function gf() {
    const {t: e} = j();
    return s.createElement(bt, {
        size: "sm",
        className: "!-mb-2"
    }, s.createElement(ja, {
        className: "-mt-1 mr-1"
    }), e("tooltip.field_immutable"))
}
function hi({field: e, value: t, register: n, setValue: r, error: a, gridProps: i, children: c, component: l, control: u, shouldFocus: d, onFocus: p, ...m}) {
    const y = f.useRef()
      , b = f.useMemo(()=>{
        const C = l || e.component || zn[e.fieldType] || zn[e.type] || zn.string;
        return function(L) {
            return s.createElement(C, {
                ...L,
                onFocus: p,
                ref: y
            })
        }
    }
    , [l, e.component, e.type, e.fieldType, p, y])
      , {document: E} = V()
      , g = f.useMemo(()=>{
        var M;
        const C = ((M = E == null ? void 0 : E.step_info) == null ? void 0 : M.fields) || {};
        return Object.keys(C).reduce((L,A)=>[...L, {
            key: A,
            ...C[A]
        }], [])
    }
    )
      , h = f.useMemo(()=>e.layout || {}, [e.layout])
      , {t: v} = j()
      , S = f.useMemo(()=>({
        required: !!e.required
    }), [e.required])
      , O = f.useMemo(()=>{
        if (!e.hint_md && !e.hint && !e.example)
            return;
        let C = "";
        return typeof e.helptext == "string" && (C = v(e.helptext)),
        C = e.hint_md ? s.createElement(nr, {
            source: e.hint_md
        }) : e.hint,
        e.example ? s.createElement(s.Fragment, null, C, C ? " " : "", s.createElement(bi, {
            label: v("hint.example"),
            title: v("hint.example"),
            cancel: v("hint.example_cancel")
        }, s.createElement(nr, {
            source: e.example
        }))) : C
    }
    , [e.hint, e.hint_md, e.example])
      , w = f.useMemo(()=>e._fieldProps || {}, [e._fieldProps]);
    f.useEffect(()=>{
        d && y.current && y.current.focus()
    }
    , [d, a, y]);
    const x = f.useMemo(()=>{
        const C = v(e.label);
        return (e["component-params"] || {})["format-title"] ? s.createElement(Vt, {
            text: C,
            fill: !0,
            fields: g,
            nohighlight: !0
        }) : s.createElement(Ca, {
            content: C
        })
    }
    , [e.label])
      , D = x && x.length
      , T = e.required && D ? " *" : "";
    return s.createElement(or, {
        marginBottom: 2,
        xs: h.xs || 12,
        sm: h.sm || 12,
        md: h.md || void 0,
        error: a,
        ...i || {}
    }, s.createElement(rr, {
        marginBottom: 2,
        htmlFor: e.key
    }, s.createElement(Qt, {
        size: "sm"
    }, x, T), O && s.createElement(bt, null, O), a && s.createElement(Aa, {
        id: "".concat(e.key, "-error")
    }, s.createElement(Pa, null, "Λάθος:"), s.createElement(Ca, {
        content: a.message.key ? v(a.message.key, a.message.context) : v(a.message)
    })), s.createElement(_c, {
        as: b,
        control: u,
        type: e.fieldType || e.type,
        name: e.key,
        params: e.params,
        error: !!a,
        errorObj: a,
        defaultValue: t,
        rules: S,
        disabled: e.editable === !1,
        options: e.options,
        placeholder: e.placeholder,
        autoComplete: e.autocomplete,
        formFieldRef: y,
        fieldLabel: e.label,
        ...m,
        ...w
    }), e.immutable && s.createElement(gf, null)))
}
hi.propTypes = {
    children: o.oneOfType([o.node, o.arrayOf(o.node)]),
    component: o.node,
    control: o.any,
    error: o.object,
    errors: o.object,
    field: o.shape({
        _fieldProps: o.object,
        autocomplete: o.any,
        component: o.any,
        editable: o.bool,
        example: o.any,
        fieldType: o.string,
        helptext: o.string,
        hint: o.string,
        hint_md: o.any,
        immutable: o.bool,
        key: o.string,
        label: o.string,
        layout: o.object,
        name: o.string,
        options: o.any,
        params: o.any,
        placeholder: o.any,
        required: o.bool,
        type: o.any,
        "component-params": o.any
    }),
    gridProps: o.object,
    onFocus: o.any,
    register: o.func,
    setValue: o.func,
    shouldFocus: o.any,
    value: o.any
};
function Ei({onSubmit: e, children: t, id: n, method: r, action: a}) {
    return s.createElement("form", {
        onSubmit: e,
        id: n,
        method: r,
        action: a,
        name: n,
        "aria-label": n
    }, s.createElement(U, {
        container: !0
    }, s.createElement(U, {
        item: !0,
        xs: 12
    }, t)))
}
Ei.propTypes = {
    onSubmit: o.func,
    children: o.oneOfType([o.arrayOf(o.node), o.node]),
    id: o.string,
    native: o.bool,
    method: o.string,
    action: o.string
};
const jr = f.createContext(null);
function ct({fields: e=[], authorizedFields: t=[], initial: n={}, onSubmit: r, formRef: a, children: i, validators: c, errors: l, id: u, native: d, method: p, action: m}) {
    const y = f.useMemo(()=>e.concat(t || []), [e, t])
      , b = yf(y, c)
      , E = gc({
        validationSchema: b
    })
      , g = f.useMemo(()=>{
        const O = {};
        return e.forEach((w,x)=>{
            w.index = x,
            O[w.key] = w
        }
        ),
        t.forEach((w,x)=>{
            w.index = e.length + x,
            O[w.key] = w
        }
        ),
        O
    }
    , [e, E.errors]);
    a && (a.current = E),
    n = n || {};
    const h = f.useMemo(()=>l || {}, [l])
      , v = {
        fields: e,
        onSubmit: r,
        fieldsMap: g,
        initial: n,
        fieldErrors: h,
        ...E
    }
      , S = f.useCallback((O,w)=>{
        w && w.preventDefault(),
        w && w.stopPropagation();
        const x = T=>typeof T == "string" && T.length === 0
          , D = {};
        return Object.keys(O).forEach(T=>{
            var L;
            if (x(O[T]) && n[T] === void 0)
                return;
            const C = (A,F,P)=>{
                P[A] = F[A]
            }
            ;
            (((L = g == null ? void 0 : g[T]) == null ? void 0 : L.serialize) || C)(T, O, D)
        }
        ),
        r(D),
        !1
    }
    , [r]);
    return s.createElement(jr.Provider, {
        value: v
    }, s.createElement(Ei, {
        onSubmit: O=>{
            if (d)
                return !0;
            O.stopPropagation(),
            O.preventDefault(),
            E.handleSubmit(S)(O)
        }
        ,
        id: u,
        native: d,
        method: p,
        action: m
    }, i))
}
ct.propTypes = {
    id: o.string,
    authorizedFields: o.array,
    children: o.oneOfType([o.node, o.arrayOf(o.node)]),
    errors: o.object,
    fields: o.array,
    formRef: o.shape({
        current: o.any
    }),
    initial: o.object,
    name: o.string,
    onSubmit: o.func,
    validators: o.any,
    native: o.bool,
    method: o.string,
    action: o.string
};
function Me({name: e, children: t, error: n, ...r}) {
    const {fields: a, fieldsMap: i, initial: c, register: l, errors: u, fieldErrors: d, setValue: p, control: m} = f.useContext(jr)
      , y = f.useMemo(()=>i[e], [i, e])
      , b = f.useMemo(()=>y != null && y.normalize ? y.normalize(e, c) : c == null ? void 0 : c[e], [y, c])
      , E = f.useMemo(()=>{
        var v;
        const g = {
            ...n,
            ...u,
            ...d
        }
          , h = a.filter(S=>Object.keys(g).includes(S.key)).map(S=>S.index).reduce((S,O)=>Math.min(S, O), (v = a == null ? void 0 : a.length) != null ? v : -1);
        return g && h === y.index
    }
    , [n, u, y, a, d]);
    if (!y && !t)
        throw Error("Field ".concat(e, " cannot be found in "), i);
    return !y && t ? t(l, u, p) : y.hidden ? null : s.createElement(s.Fragment, null, y.group_name && s.createElement(s.Fragment, null, s.createElement(U, {
        item: !0,
        md: "12"
    }, s.createElement(we, {
        size: "md",
        style: {
            marginTop: "2rem",
            marginBottom: "0.5rem",
            borderBottom: "1px solid #aaa"
        }
    }, y.group_name))), s.createElement(hi, {
        error: n || u[y.key] || d[y.key],
        field: y,
        value: b,
        setValue: p,
        register: l,
        control: m,
        shouldFocus: E,
        ...r
    }, t))
}
Me.propTypes = {
    name: o.string,
    error: o.object,
    children: o.oneOfType([o.arrayOf(o.node), o.node])
};
export {Fe as B, li as D, ct as F, nr as M, Ud as T, wf as a, Xa as b, si as c, Me as d, ju as e, Vt as f, Ja as t, Be as u};
