import {a1 as P, r as m, b as A, G as V, aZ as O, t as v, P as R, o as x, u as E, R as o, ee as M, ef as C, aT as b, e as w, aH as q, aD as G} from "./index-vR-ihBdk.js";
import {t as H, e as U} from "./form-Bjc7Odl_.js";
import {C as W} from "./view-Ckts0b-z.js";
import {N as Y} from "./NoIndex-BrsjjOXf.js";
import {C as k, D as S, a as X, S as j, c as Q, h as Z, d as z, i as B, b as J} from "./lazy-BKQwBWXK.js";
import {D as K, a as $, b as ee, G as te} from "./DashboardLayout-Ck_xLT2u.js";
import {P as h} from "./Page-DeiFZGz7.js";
function I({ref: r, contextid: l}) {
    var f, y, u;
    const {loaded: e, data: t, error: c} = P({
        resource: "validation/document",
        method: "POST",
        data: {
            "document-id": r,
            document_pdf_retrieval: "content-uri",
            context: l
        },
        consume: !0
    })
      , s = m.useMemo(()=>({}), [])
      , n = ((f = t == null ? void 0 : t.data) == null ? void 0 : f.document) || s
      , p = (y = n == null ? void 0 : n.template) == null ? void 0 : y.refname
      , a = A({
        resource: "templates",
        id: ((u = n == null ? void 0 : n.template) == null ? void 0 : u.refname) || "",
        consume: !!p,
        suspense: !0
    })
      , i = H(t, a.data || {});
    return {
        loaded: e,
        declaration: n,
        data: t,
        transformedData: i,
        error: c
    }
}
const d = new k;
d.register({
    Title: S.Heading,
    Grid: V,
    FilterContainer: O
});
d.register(S);
d.register(X);
d.register(j);
d.register(Q);
d.register({
    Loader: v
});
d.register({
    DashboardLayout: K,
    DashboardLayoutSidebarWrapper: $,
    DashboardLayoutContentWrapper: ee
});
d.register(te);
function L(r) {
    return o.createElement(o.Fragment, null, r.text)
}
L.propTypes = {
    text: R.any
};
d.register({
    TextNode: L
});
const ae = d;
function oe(r, l) {
    var s, n;
    let e = b({}, r);
    const t = {
        "field-order": "ext_akyro ext_qrcode ext_status ext_download",
        "user-input-mode": "display",
        display: {
            default: {
                default: {
                    component: "values-list",
                    layout: {
                        md: 4,
                        grid: !1
                    }
                }
            }
        }
    }
      , c = {
        ext_akyro: {
            "user-input-mode": "display",
            display: {
                default: {
                    default: {
                        component: "paragraph"
                    },
                    el: {
                        "component-params": {
                            text: l ? "" : "ΑΚΥΡΟ"
                        }
                    },
                    en: {
                        "component-params": {
                            text: l ? "" : "INVALID"
                        }
                    },
                    fr: {
                        "component-params": {
                            text: l ? "" : "INVALIDE"
                        }
                    }
                }
            }
        },
        ext_qrcode: {
            "user-input-mode": "display",
            display: {
                default: {
                    default: {
                        component: "declaration-qr-code",
                        "component-params": {}
                    }
                }
            },
            value: (n = (s = r == null ? void 0 : r.fields) == null ? void 0 : s.qrcode) == null ? void 0 : n.value
        },
        ext_refcode: {
            "user-input-mode": "display",
            display: {
                default: {
                    default: {
                        component: "declaration-ref-code",
                        "component-params": {}
                    },
                    el: {
                        "component-params": {
                            title: "Κωδικός ηλεκτρονικής επισημείωσης"
                        }
                    },
                    en: {
                        "component-params": {
                            title: "e-Apostille code"
                        }
                    },
                    fr: {
                        "component-params": {
                            title: "Code de l’e-Apostille"
                        }
                    }
                }
            }
        },
        ext_status: {
            "user-input-mode": "display",
            display: {
                default: {
                    default: {
                        component: "declaration-status",
                        "component-params": {}
                    },
                    el: {
                        "component-params": {
                            title: "Κατάσταση"
                        }
                    },
                    en: {
                        "component-params": {
                            title: "Status"
                        }
                    },
                    fr: {
                        "component-params": {
                            title: "État"
                        }
                    }
                }
            }
        },
        ext_tpl: {
            "user-input-mode": "display",
            display: {
                default: {
                    default: {
                        component: "declaration-template-codename",
                        "component-params": {}
                    },
                    el: {
                        "component-params": {
                            title: "Πρότυπο e-Apostille"
                        }
                    },
                    en: {
                        "component-params": {
                            title: "Template e-Apostille"
                        }
                    },
                    fr: {
                        "component-params": {
                            title: "Type e-Apostille"
                        }
                    }
                }
            }
        },
        ext_date: {
            "user-input-mode": "display",
            display: {
                default: {
                    default: {
                        component: "declaration-issue-date",
                        "component-params": {}
                    },
                    el: {
                        "component-params": {
                            title: "Ημερομηνία έκδοσης επισημείωσης"
                        }
                    },
                    en: {
                        "component-params": {
                            title: "Date of e-Apostille"
                        }
                    },
                    fr: {
                        "component-params": {
                            title: "Date de l’e-Apostille"
                        }
                    }
                }
            }
        },
        ext_download: {
            "user-input-mode": "display",
            display: {
                default: {
                    default: {
                        component: "declaration-download-pdf",
                        "component-params": {}
                    },
                    el: {
                        "component-params": {
                            title: "Αποθηκεύστε στο αρχείο σας",
                            helptext: "Αποθηκεύστε το αρχείο PDF στη συσκευή σας.",
                            label: "Αποθήκευση"
                        }
                    },
                    en: {
                        "component-params": {
                            title: "Download the document",
                            helptext: "Save the pdf file on your device.",
                            label: "Download"
                        }
                    },
                    fr: {
                        "component-params": {
                            title: "Télécharger le document",
                            helptext: "Télécharger le document au format pdf sur votre appareil.",
                            label: "Télécharger"
                        }
                    }
                }
            }
        }
    };
    return e.fields = {
        ...e.fields,
        ...c
    },
    e.fieldsets = e.fieldsets ? e.fieldsets : {},
    e.fieldsets.extra = t,
    e["action-order"] = "",
    Object.entries(e.fieldsets).forEach(([p,a])=>{
        p !== "extra" && (a.display = a.display || {},
        a.display.default = a.display.default || {},
        a.display.default.default = a.display.default.default || {},
        a["user-input-mode"] = a["user-input-mode"] || "display",
        a.display.default.default = {
            layout: {
                md: 8
            }
        })
    }
    ),
    e["fieldset-order"] && e["fieldset-order"].indexOf(" extra") === -1 && (e["fieldset-order"] += " extra"),
    e = b({
        display: {
            default: {
                default: {
                    layout: {
                        grid: !0
                    }
                }
            }
        }
    }, e),
    e
}
function ne(r) {
    var g, D, _, T;
    const {ref: l, contextid: e} = x()
      , {declaration: t, transformedData: c, error: s} = I({
        ref: l,
        contextid: e
    })
      , {data: {data: {info: n}}} = A({
        resource: "validation/contexts",
        id: e
    })
      , p = E().i18n.language
      , a = m.useMemo(()=>(t.step_info = oe(c.step_info, c.is_official),
    {
        declaration: Z(t, "web", p),
        context: z(n, "web", p)
    }), [n, p, t])
      , i = m.useMemo(()=>B(a.declaration.step_info, a.context), [a.declaration, a.context])
      , f = m.useMemo(()=>i ? J(i, h, ae) : ()=>o.createElement("div", null), [i])
      , y = M(t.timestamp).format("DD/MM/YYYY HH:mm:ss")
      , u = ((D = (g = t.step_info) == null ? void 0 : g.display) == null ? void 0 : D["state-labels"]) || {}
      , F = (_ = u && u[t.state] && "." + u[t.state]) != null ? _ : t.state + "_verbose"
      , {t: N} = E();
    return m.useEffect(()=>{
        if (s && s.error.code !== 404)
            throw s
    }
    , [s]),
    s || !t ? o.createElement(C, null) : o.createElement(m.Suspense, {
        fallback: "loading"
    }, o.createElement(h.Provider, {
        value: {
            declaration: t,
            declaration_status_label: N(F),
            declaration_issue_date: y,
            template_codename: (T = t == null ? void 0 : t.template) == null ? void 0 : T.refname
        }
    }, o.createElement(f, null)))
}
function re(r) {
    const l = w()
      , {ref: e, contextid: t=l.VALIDATION_DEFAULT_CONTEXT} = x()
      , c = G()
      , {loaded: s, declaration: n, data: p, transformedData: a, error: i} = I({
        ref: e,
        contextid: t
    });
    return m.useEffect(()=>{
        if (i && i.error.code !== 404)
            throw i
    }
    , [i]),
    s ? i || !n ? o.createElement(C, null) : o.createElement(o.Fragment, null, o.createElement(Y, null), o.createElement(U.Provider, {
        value: {
            document: p
        }
    }, o.createElement(W, {
        declaration: a,
        user: c,
        scope: "validator"
    }))) : o.createElement(v, null)
}
function fe() {
    const r = w()
      , {contextid: l=r.VALIDATION_DEFAULT_CONTEXT} = x()
      , e = l === r.VALIDATION_DEFAULT_CONTEXT;
    return o.createElement(q, null, e ? o.createElement(re, null) : o.createElement(ne, null))
}
export {fe as S};
