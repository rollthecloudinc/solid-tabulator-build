import { a as Q } from "@nf-internal/chunk-3FGMCB2V";
import { g as b } from "@nf-internal/chunk-KQGCPFC3";
import { z as c } from "@nf-internal/chunk-STIBVO4O";
import { a as h, b as x, f as C } from "@nf-internal/chunk-FJYW2LMB";
import * as d from "@angular/core";
import "@angular/core";
import * as S from "@rollthecloudinc/dparam";
import { ParamPlugin as v, DparamModule as R } from "@rollthecloudinc/dparam";
var P = C(Q(), 1);
import { getRouterSelectors as _ } from "@ngrx/router-store";
import * as O from "@ngrx/store";
import { select as V } from "@ngrx/store";
import { map as g, switchMap as k, defaultIfEmpty as F, tap as I } from "rxjs/operators";
var J = () => new v({ id: "page", title: "Page", usedContexts: () => c(["_page"]), condition: ({ param: t, metadata: n }) => t.flags.findIndex(e => e.enabled && e.name === "page") > -1 && n.has("page"), evalParam: ({ param: t, metadata: n }) => c(`${n.get("page")}`) }), U = () => new v({ id: "searchstring", title: "Searchstring", condition: ({ param: t, metadata: n }) => t.flags.findIndex(e => e.enabled) > -1 && n.has("searchString"), evalParam: ({ param: t, metadata: n }) => c(`${n.get("searchString")}`) }), z = () => new v({ id: "route", title: "Route", usedContexts: () => c(["_route"]), evalParam: ({ param: t, metadata: n }) => { let e = n.get("_route"); return c(e.params[t.mapping.value]); } }), B = () => new v({ id: "querystring", title: "Querystring", usedContexts: () => c(["_page"]), evalParam: ({ param: t, metadata: n }) => { let e = n.get("_route"); return c(e.queryParams[t.mapping.value]); } }), G = () => new v({ id: "standardpagination", title: "Standard Pagination", usedContexts: () => c(["_page"]), condition: ({ param: t, metadata: n }) => t.flags.findIndex(e => e.enabled && e.name === "offset") > -1 && n.has("limit") && n.has("page"), evalParam: ({ param: t, metadata: n }) => c(`${+n.get("limit") * (+n.get("page") - 1)}`) }), q = (() => { class t {
    constructor(e) { [J(), U(), z(), B(), G()].forEach(i => e.register(i)); }
    static { this.\u0275fac = function (i) { return new (i || t)(d.\u0275\u0275inject(S.ParamPluginManager)); }; }
    static { this.\u0275mod = d.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = d.\u0275\u0275defineInjector({ imports: [R] }); }
} return t; })(), ee = (() => { class t {
    constructor(e, i, s) { this.routerStore = e, this.paramPluginManager = i, this.paramEvaluatorService = s; }
    getUrl(e, i, s) { let { selectCurrentRoute: l } = _(); return this.routerStore.pipe(V(l), g(f => [f, e, e ? e.indexOf("?") : -1]), g(([f, o, u]) => [f, u > -1 ? o.substring(0, u) : o, u > -1 ? o.substring(u + 1) : ""]), k(([f, o, u]) => { let m = P.default.parse(u), E = o ? o.split("/") : [], w = new Map([...s, ["_route", f]]), D = this.paramNames(e), j = i.reduce((r, a, p) => new Map([...r, [D[p], a]]), new Map), N = E.reduce((r, a, p) => a.indexOf(":") === 0 ? [...r, this.paramEvaluatorService.paramValue(j.get(a), w)] : [...r, c(E[p])], []), M = []; for (let r in m)
        Array.isArray(m[r]) ? m[r].forEach(a => M.push(this.paramEvaluatorService.paramValue(j.get(a), w).pipe(g(p => [r, p, !0])))) : typeof m[r] == "string" && m[r].indexOf(":") > -1 ? M.push(this.paramEvaluatorService.paramValue(j.get(m[r]), w).pipe(g(a => [r, a, !1]))) : M.push(c([r, m[r], Array.isArray(m[r])])); return b([b(N).pipe(g(r => r.filter(a => a != null && a !== "" && a !== "undefined").map((a, p) => p === 0 && a.indexOf("http") === 0 ? `${a}/` : a).join("/")), F(o)), b(M).pipe(I(r => console.log(r)), g(r => r.reduce((a, [p, y, $]) => { if (y == null || y === "" || y === "undefined") {
            let A = h({}, a);
            return delete A[p], A;
        }
        else
            return $ ? x(h({}, a), { [p]: [...a[p] !== void 0 ? a[p] : [], y] }) : x(h({}, a), { [p]: y }); }, this.rebuildQueryString(m))), I(r => console.log(r)), g(r => P.default.stringify(r, { arrayFormat: "repeat", indices: !1 })), F(u))]).pipe(g(r => r.join("?"))); })); }
    paramNames(e) { let i = e ? e.indexOf("?") : -1, s = (i > -1 ? e.substring(0, i) : e || "").split("/").reduce((o, u, m) => u.indexOf(":") === 0 ? x(h({}, o), { [u.substr(1)]: u }) : o, {}), l = h(h({}, s), P.default.parse(e ? e.substring(e.indexOf("?") + 1) : "")), f = []; for (let o in l)
        Array.isArray(l[o]) ? l[o].forEach(u => f.push(u)) : l[o].indexOf(":") === 0 && f.push(l[o]); return f; }
    rebuildQueryString(e) { let i = {}; for (let s in e)
        Array.isArray(e[s]) ? i[s] = [] : s[e] !== void 0 && s[e] !== null && s[e] !== "" && s[e] !== "undefined" && (i[s] = s[e]); return P.default.parse(i); }
    static { this.\u0275fac = function (i) { return new (i || t)(d.\u0275\u0275inject(O.Store), d.\u0275\u0275inject(S.ParamPluginManager), d.\u0275\u0275inject(S.ParamEvaluatorService)); }; }
    static { this.\u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })();
export { q as DurlModule, ee as UrlGeneratorService };
