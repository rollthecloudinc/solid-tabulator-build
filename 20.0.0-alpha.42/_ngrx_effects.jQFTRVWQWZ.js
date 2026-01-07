import { j as g } from "@nf-internal/chunk-VZR6KEPQ";
import { f as _, k as C } from "@nf-internal/chunk-STIBVO4O";
import { a as l } from "@nf-internal/chunk-FJYW2LMB";
import { ignoreElements as B, materialize as z, map as v, catchError as K, filter as F, groupBy as b, mergeMap as D, exhaustMap as Y, dematerialize as J, take as L } from "rxjs/operators";
import * as o from "@angular/core";
import { InjectionToken as d, inject as u, makeEnvironmentProviders as X, provideEnvironmentInitializer as q } from "@angular/core";
import * as a from "@ngrx/store";
import { ScannedActionsSubject as Q, createAction as W, ROOT_STORE_PROVIDER as Z, FEATURE_STATE_PROVIDER as tt, Store as et } from "@ngrx/store";
var nt = { dispatch: !0, functional: !1, useEffectsErrorHandler: !0 }, p = "__@ngrx/effects_create__";
function At(t, r = {}) { let e = r.functional ? t : t(), n = l(l({}, nt), r); return Object.defineProperty(e, p, { value: n }), e; }
function rt(t) { return Object.getOwnPropertyNames(t).filter(n => t[n] && t[n].hasOwnProperty(p) ? t[n][p].hasOwnProperty("dispatch") : !1).map(n => { let s = t[n][p]; return l({ propertyName: n }, s); }); }
function xt(t) { return x(t).reduce((r, { propertyName: e, dispatch: n, useEffectsErrorHandler: s }) => (r[e] = { dispatch: n, useEffectsErrorHandler: s }, r), {}); }
function x(t) { return rt(t); }
function P(t) { return Object.getPrototypeOf(t); }
function ot(t) { return !!t.constructor && t.constructor.name !== "Object" && t.constructor.name !== "Function"; }
function M(t) { return typeof t == "function"; }
function y(t) { return t.filter(M); }
function st(t) { return t instanceof d || M(t); }
function it(t, r, e) { let n = P(t), i = !!n && n.constructor.name !== "Object" ? n.constructor.name : null, c = x(t).map(({ propertyName: f, dispatch: O, useEffectsErrorHandler: h }) => { let j = typeof t[f] == "function" ? t[f]() : t[f], T = h ? e(j, r) : j; return O === !1 ? T.pipe(B()) : T.pipe(z()).pipe(v(V => ({ effect: t[f], notification: V, propertyName: f, sourceName: i, sourceInstance: t }))); }); return g(...c); }
var ft = 10;
function $(t, r, e = ft) { return t.pipe(K(n => (r && r.handleError(n), e <= 1 ? t : $(t, r, e - 1)))); }
var Pt = (() => { class t extends _ {
    constructor(e) { super(), e && (this.source = e); }
    lift(e) { let n = new t; return n.source = this, n.operator = e, n; }
    static { this.\u0275fac = function (n) { return new (n || t)(o.\u0275\u0275inject(Q)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })();
function $t(...t) { return F(r => t.some(e => typeof e == "string" ? e === r.type : e.type === r.type)); }
var N = new d("@ngrx/effects Internal Root Guard"), E = new d("@ngrx/effects User Provided Effects"), S = new d("@ngrx/effects Internal Root Effects"), U = new d("@ngrx/effects Internal Root Effects Instances"), w = new d("@ngrx/effects Internal Feature Effects"), G = new d("@ngrx/effects Internal Feature Effects Instance Groups"), ct = new d("@ngrx/effects Effects Error Handler", { providedIn: "root", factory: () => $ }), H = "@ngrx/effects/init", ut = W(H);
function at(t, r) { if (t.notification.kind === "N") {
    let e = t.notification.value;
    !dt(e) && r.handleError(new Error(`Effect ${lt(t)} dispatched an invalid action: ${Et(e)}`));
} }
function dt(t) { return typeof t != "function" && t && t.type && typeof t.type == "string"; }
function lt({ propertyName: t, sourceInstance: r, sourceName: e }) { let n = typeof r[t] == "function"; return !!e ? `"${e}.${String(t)}${n ? "()" : ""}"` : `"${String(t)}()"`; }
function Et(t) { try {
    return JSON.stringify(t);
}
catch {
    return t;
} }
var pt = "ngrxOnIdentifyEffects";
function ht(t) { return R(t, pt); }
var gt = "ngrxOnRunEffects";
function vt(t) { return R(t, gt); }
var Ft = "ngrxOnInitEffects";
function yt(t) { return R(t, Ft); }
function R(t, r) { return t && r in t && typeof t[r] == "function"; }
var m = (() => { class t extends C {
    constructor(e, n) { super(), this.errorHandler = e, this.effectsErrorHandler = n; }
    addEffects(e) { this.next(e); }
    toActions() { return this.pipe(b(e => ot(e) ? P(e) : e), D(e => e.pipe(b(St))), D(e => { let n = e.pipe(Y(i => Mt(this.errorHandler, this.effectsErrorHandler)(i)), v(i => (at(i, this.errorHandler), i.notification)), F(i => i.kind === "N" && i.value != null), J()), s = e.pipe(L(1), F(yt), v(i => i.ngrxOnInitEffects())); return g(n, s); })); }
    static { this.\u0275fac = function (n) { return new (n || t)(o.\u0275\u0275inject(o.ErrorHandler), o.\u0275\u0275inject(ct)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })();
function St(t) { return ht(t) ? t.ngrxOnIdentifyEffects() : ""; }
function Mt(t, r) { return e => { let n = it(e, t, r); return vt(e) ? e.ngrxOnRunEffects(n) : n; }; }
var I = (() => { class t {
    get isStarted() { return !!this.effectsSubscription; }
    constructor(e, n) { this.effectSources = e, this.store = n, this.effectsSubscription = null; }
    start() { this.effectsSubscription || (this.effectsSubscription = this.effectSources.toActions().subscribe(this.store)); }
    ngOnDestroy() { this.effectsSubscription && (this.effectsSubscription.unsubscribe(), this.effectsSubscription = null); }
    static { this.\u0275fac = function (n) { return new (n || t)(o.\u0275\u0275inject(m), o.\u0275\u0275inject(a.Store)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })(), k = (() => { class t {
    constructor(e, n, s, i, c, f, O) { this.sources = e, n.start(); for (let h of i)
        e.addEffects(h); s.dispatch({ type: H }); }
    addEffects(e) { this.sources.addEffects(e); }
    static { this.\u0275fac = function (n) { return new (n || t)(o.\u0275\u0275inject(m), o.\u0275\u0275inject(I), o.\u0275\u0275inject(a.Store), o.\u0275\u0275inject(U), o.\u0275\u0275inject(a.StoreRootModule, 8), o.\u0275\u0275inject(a.StoreFeatureModule, 8), o.\u0275\u0275inject(N, 8)); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({}); }
} return t; })(), Rt = (() => { class t {
    constructor(e, n, s, i) { let c = n.flat(); for (let f of c)
        e.addEffects(f); }
    static { this.\u0275fac = function (n) { return new (n || t)(o.\u0275\u0275inject(k), o.\u0275\u0275inject(G), o.\u0275\u0275inject(a.StoreRootModule, 8), o.\u0275\u0275inject(a.StoreFeatureModule, 8)); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({}); }
} return t; })(), Nt = (() => { class t {
    static forFeature(...e) { let n = e.flat(), s = y(n); return { ngModule: Rt, providers: [s, { provide: w, multi: !0, useValue: n }, { provide: E, multi: !0, useValue: [] }, { provide: G, multi: !0, useFactory: A, deps: [w, E] }] }; }
    static forRoot(...e) { let n = e.flat(), s = y(n); return { ngModule: k, providers: [s, { provide: S, useValue: [n] }, { provide: N, useFactory: mt }, { provide: E, multi: !0, useValue: [] }, { provide: U, useFactory: A, deps: [S, E] }] }; }
    static { this.\u0275fac = function (n) { return new (n || t); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({}); }
} return t; })();
function A(t, r) { let e = []; for (let n of t)
    e.push(...n); for (let n of r)
    e.push(...n); return e.map(n => st(n) ? u(n) : n); }
function mt() { let t = u(I, { optional: !0, skipSelf: !0 }), r = u(S, { self: !0 }); if (!(r.length === 1 && r[0].length === 0) && t)
    throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead."); return "guarded"; }
function Ut(...t) { let r = t.flat(), e = y(r); return X([e, q(() => { u(Z), u(tt, { optional: !0 }); let n = u(I), s = u(m), i = !n.isStarted; i && n.start(); for (let c of r) {
        let f = M(c) ? u(c) : c;
        s.addEffects(f);
    } i && u(et).dispatch(ut()); })]); }
export { Pt as Actions, ct as EFFECTS_ERROR_HANDLER, m as EffectSources, Rt as EffectsFeatureModule, Nt as EffectsModule, k as EffectsRootModule, I as EffectsRunner, H as ROOT_EFFECTS_INIT, E as USER_PROVIDED_EFFECTS, At as createEffect, $ as defaultEffectsErrorHandler, xt as getEffectsMetadata, it as mergeEffects, $t as ofType, Ut as provideEffects, ut as rootEffectsInit };
