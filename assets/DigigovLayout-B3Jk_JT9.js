import {a as T, R as t, L as w, s as x, C as B, M as N, r as n, t as o, G as s, v as k, w as D, x as C, y as P, z as S, P as e} from "./index-vR-ihBdk.js";
function U(r) {
    const {hasBackButton: i, title: l, captionRight: c, captionLeft: m, main: g, side: p, printOnlyContent: F, noTop: d, topPadding: a, isLoggedIn: u, name: L, container: E, windowTitle: b, serviceName: v, serviceURL: h, serviceLogo: f, serviceLogoURL: R} = r
      , y = T().pathname === "/terms";
    return t.createElement(w, null, t.createElement(x, {
        isLoggedIn: u,
        name: L,
        title: v,
        windowTitle: b,
        serviceLogo: f,
        serviceLogoURL: R,
        serviceURL: h
    }), E || t.createElement(t.Fragment, null, t.createElement(B, {
        role: "main"
    }, t.createElement(N, {
        marginBottom: 8
    }, t.createElement(n.Suspense, {
        fallback: t.createElement(o, null)
    }, t.createElement(s, {
        container: !0,
        spacing: 4
    }, t.createElement(s, {
        item: !0,
        xs: 12
    }, y && t.createElement(k, {
        languages: [{
            code: "el",
            label: "Ελληνικά"
        }, {
            code: "en",
            label: "English"
        }, {
            code: "fr",
            label: "Français"
        }]
    }), !d && t.createElement(D, {
        size: "xl",
        className: a && "pt-8",
        hasBackButton: i,
        title: l,
        captionRight: c,
        captionLeft: m
    }))), t.createElement(n.Suspense, {
        fallback: t.createElement(o, null)
    }, g))), t.createElement(C, null, t.createElement("div", {
        className: P(a && "pt-8")
    }, p))), t.createElement(S, {
        id: "footer"
    })))
}
U.propTypes = {
    hasBackButton: e.bool,
    backButtonDisabled: e.bool,
    title: e.string,
    captionRight: e.string,
    captionLeft: e.string,
    main: e.node,
    side: e.node,
    container: e.node,
    printOnlyContent: e.bool,
    noTop: e.bool,
    topPadding: e.bool,
    isLoggedIn: e.bool,
    name: e.bool,
    serviceName: e.string,
    serviceURL: e.string,
    serviceLogo: e.string,
    serviceLogoURL: e.string,
    windowTitle: e.string
};
export {U as D};
