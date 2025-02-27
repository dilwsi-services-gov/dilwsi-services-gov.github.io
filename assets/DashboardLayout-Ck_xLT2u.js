import {R as e, r as i, u, a as d, l as b, eq as C, e7 as H, P as o, er as _, $ as U, bx as N, c as v, D as P, i as $, j, aa as S, aD as B, dh as G, di as I, bj as h, es as y, et as M, bk as W, aw as V, ax as q, ay as z, az as L, b6 as K, aR as J, bb as Q, bc as X, ba as Y, aA as Z, eu as ee, m as te, d as ne, aH as ae, ev as re, ew as le, dc as oe, H as se, ex as ie, G as ce, eo as w, dd as k, de as ue, df as de, dq as me, dr as Ee, h as be} from "./index-vR-ihBdk.js";
import {b as fe} from "./lazy-BKQwBWXK.js";
import {B as ye} from "./index-DOGRpZJX.js";
const g = e.createContext({});
function A(t, n, r) {
    return t ? (Object.keys(t).forEach(a=>{
        const l = t[a]
          , c = r
          , s = n ? "".concat(n, ".").concat(a) : a;
        if (!Array.isArray(l) && typeof l != "object") {
            if (typeof l == "string")
                try {
                    t[a] = new String(t[a]),
                    t[a].path = s
                } catch (E) {
                    console.log(E)
                }
            c[s] = l
        }
        typeof l == "object" && !Array.isArray(l) && A(l, s, r)
    }
    ),
    r) : "undefined"
}
function ge(t) {
    return A(t, "", {})
}
const he = e.memo(function({spec: n, builder: r, registry: a, debug: l, noContext: c}) {
    a.register({
        StepwiseView: he
    });
    const s = i.useMemo(()=>(l && n && ge(n),
    n ? r(n, a) : null), [n])
      , E = i.useMemo(()=>s ? fe(s, g, a) : ()=>e.createElement("div", null), [s]);
    return c ? e.createElement(E, null) : e.createElement(E, null)
});
function f(t) {
    return t.endsWith("/") ? t : t + "/"
}
function p(t, n, ...r) {
    return t = f(t),
    typeof n == "string" ? t.startsWith(f(n)) : t.startsWith(f(n(...r)))
}
function m(t, n, ...r) {
    return Array.isArray(n) ? n.some(a=>p(t, a, ...r)) : n ? p(t, n, ...r) : !1
}
function Le() {
    const {entity: t} = i.useContext(g)
      , {t: n} = u()
      , {pathname: r} = d()
      , a = "/dashboard/entities/show/".concat(t.id, "/templates");
    return e.createElement(b, {
        as: ({href: l, ...c})=>e.createElement(C, {
            to: l,
            ...c
        }),
        href: a,
        active: m(r, a)
    }, n("dashboard.sidebar.new_case"))
}
function ke(t) {
    const {entity: n} = i.useContext(g)
      , r = "/dashboard/entities/show/".concat(n.id, "/resource/").concat(t.dashboard)
      , {pathname: a} = d();
    return e.createElement(b, {
        as: H,
        href: r,
        active: m(a, r)
    }, t.label)
}
function D(t) {
    var r;
    const {pathname: n} = d();
    return e.createElement(b, {
        as: ({href: a, ...l})=>a != null && a.startsWith("http") ? e.createElement(_, {
            href: a,
            ...l,
            target: "_blank"
        }) : e.createElement(C, {
            to: a,
            ...l
        }),
        direction: "vertical",
        href: (r = t.url) != null ? r : "#",
        active: m(n, t.url),
        style: {
            display: "block"
        }
    }, t.label)
}
D.propTypes = {
    url: o.string,
    label: o.string
};
function pe(t) {
    const {pathname: n} = d()
      , r = t.href;
    return e.createElement(b, {
        as: ({href: a, ...l})=>e.createElement(U, {
            to: a,
            ...l
        }),
        href: r,
        active: m(n, r)
    }, t.label)
}
function Ce(t) {
    var a;
    const {pathname: n} = d()
      , r = (a = t.expanded) != null ? a : t.links.some(l=>m(n, l, t));
    return e.createElement(N, {
        open: r
    }, t.children)
}
const Ae = Object.freeze(Object.defineProperty({
    __proto__: null,
    EntityDashboardLink: ke,
    EntityNavGroup: Ce,
    EntityNewCaseButton: Le,
    NavInfoLink: D,
    NavLink: pe
}, Symbol.toStringTag, {
    value: "Module"
}));
function T({user: t, ...n}) {
    const {logout: r} = v()
      , {t: a} = u();
    return e.createElement(P, {
        align: "left"
    }, e.createElement($, {
        arrow: !0,
        variant: "link"
    }, a("dashboard.header.logged_user"), " ", t.userDisplayName), e.createElement(j, null, e.createElement(S, {
        color: "warning",
        onClick: ()=>{
            r(n.logoutURL || "/")
        }
    }, a("logout.exit"))))
}
T.propTypes = {
    classes: o.object,
    user: o.object,
    userDisplayName: o.string,
    logoutURL: o.any
};
function x(t) {
    const {t: n} = u()
      , {authenticated: r} = v()
      , a = B();
    return e.createElement(G, null, e.createElement(I, null, e.createElement(h, null, e.createElement(y, {
        lgUpHidden: !0
    }, e.createElement(S, {
        "aria-label": "open drawer",
        variant: "link",
        onClick: t.onSidebarToggle
    }, e.createElement(ye, null))), e.createElement(M, null), e.createElement(W, {
        href: "/dashboard"
    }, n("dashboard.header.title"))), e.createElement(h, null, r ? e.createElement(y, {
        xsHidden: !0,
        smHidden: !0
    }, e.createElement(T, {
        user: a,
        logoutURL: t.logoutURL
    })) : "")))
}
x.propTypes = {
    href: o.string,
    logoutURL: o.any,
    onSidebarToggle: o.any,
    sidebarOpen: o.any
};
function He() {
    const {t} = u();
    return e.createElement(V, null, e.createElement(q, null, e.createElement(z, null, e.createElement(L, null, e.createElement(K, null), e.createElement(J, null, "Περισσότερες επιλογές"), e.createElement(Q, null, e.createElement(X, null, e.createElement(Y, {
        href: "/terms"
    }, t("footer.termsTitle")))), e.createElement(Z, null)), e.createElement(L, null, e.createElement(ee, null)))))
}
function O(t) {
    return e.createElement(ue, {
        xs: 12,
        lg: 10
    }, e.createElement(i.Suspense, {
        fallback: e.createElement(w, null)
    }, t.children))
}
function R(t) {
    return e.createElement(e.Fragment, null, e.createElement(de, {
        xsHidden: !0,
        smHidden: !0,
        mdHidden: !0,
        xs: 12,
        lg: 2
    }, t.children), e.createElement(y, {
        lgUpHidden: !0,
        style: {
            order: 2
        }
    }, e.createElement(me, {
        onClose: t.onClose,
        open: t.sidebarOpen
    }, e.createElement(Ee, {
        onClick: t.onClose
    }, e.createElement(be, null, "Μενού")), t.children)))
}
function F(t) {
    te();
    const n = ne()
      , {t: r} = u();
    return e.createElement(ae, null, e.createElement(re, {
        t: r
    }, e.createElement(le, {
        component: H
    }, e.createElement(oe, null, e.createElement(se, null, e.createElement("title", null, "Θυρίδες")), n.DEVEL && e.createElement(ie, {
        tag: "TEST",
        text: "Βρίσκεστε σε δοκιμαστικό περιβάλλον"
    }), e.createElement(x, {
        href: "/dashboard",
        sidebarOpen: t.sidebarOpen,
        onSidebarToggle: t.onSidebarToggle,
        logoutURL: "/dashboard"
    }), e.createElement(i.Suspense, {
        fallback: e.createElement(ce, {
            container: !0
        }, e.createElement(w, null))
    }, t.sidebar ? e.createElement(k, null, e.createElement(R, {
        sidebarOpen: t.sidebarOpen,
        onClose: t.onClose
    }, t.sidebar), e.createElement(O, null, t.children)) : e.createElement(k, null, t.children)), e.createElement(He, {
        id: "footer"
    })))))
}
F.propTypes = {
    children: o.oneOfType([o.node, o.arrayOf(o.node)]),
    onClose: o.any,
    onSidebarToggle: o.any,
    sidebar: o.any,
    sidebarOpen: o.any
};
const De = Object.freeze(Object.defineProperty({
    __proto__: null,
    DashboardLayoutContentWrapper: O,
    DashboardLayoutSidebarWrapper: R,
    default: F
}, Symbol.toStringTag, {
    value: "Module"
}));
export {F as D, Ae as G, he as S, g as V, R as a, O as b, De as c};
