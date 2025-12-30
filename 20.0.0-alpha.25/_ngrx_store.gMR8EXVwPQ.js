import { b as W } from "@nf-internal/chunk-VZR6KEPQ";
import { f as F, k as Q, l as j } from "@nf-internal/chunk-STIBVO4O";
import { a as p, b as R } from "@nf-internal/chunk-FJYW2LMB";
import * as s from "@angular/core";
import { InjectionToken as u, Inject as pe, computed as _e, effect as Me, untracked as De, inject as l, Injector as ke, isDevMode as ye, makeEnvironmentProviders as he, provideEnvironmentInitializer as Re } from "@angular/core";
import { observeOn as Ue, withLatestFrom as Ne, scan as Pe, pluck as ze, map as $e, distinctUntilChanged as Ve } from "rxjs/operators";
import { toSignal as Ke } from "@angular/core/rxjs-interop";
var _ = {};
function qe(e, r) { if (_[e] = (_[e] || 0) + 1, typeof r == "function")
    return x(e, (...n) => R(p({}, r(...n)), { type: e })); switch (r ? r._as : "empty") {
    case "empty": return x(e, () => ({ type: e }));
    case "props": return x(e, n => R(p({}, n), { type: e }));
    default: throw new Error("Unexpected config.");
} }
function Le() { return { _as: "props", _p: void 0 }; }
function Ht(e) { }
function x(e, r) { return Object.defineProperty(r, "type", { value: e, writable: !1 }); }
function P(e) { return e.charAt(0).toUpperCase() + e.substring(1); }
function Be(e) { return e.charAt(0).toLowerCase() + e.substring(1); }
function Ge(e, r) { if (e == null)
    throw new Error(`${r} must be defined.`); }
function Yt(e) { let { source: r, events: t } = e; return Object.keys(t).reduce((n, o) => R(p({}, n), { [Ze(o)]: qe(He(r, o), t[o]) }), {}); }
function Qt() { return Le(); }
function Ze(e) { return e.trim().split(" ").map((r, t) => t === 0 ? Be(r) : P(r)).join(""); }
function He(e, r) { return `[${e}] ${r}`; }
var me = "@ngrx/store/init", m = (() => {
    class e extends j {
        constructor() { super({ type: me }); }
        next(t) {
            if (typeof t == "function")
                throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);
            if (typeof t > "u")
                throw new TypeError("Actions must be objects");
            if (typeof t.type > "u")
                throw new TypeError("Actions must have a type property");
            super.next(t);
        }
        complete() { }
        ngOnDestroy() { super.complete(); }
        static { this.\u0275fac = function (n) { return new (n || e); }; }
        static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
    }
    return e;
})(), Ye = [m], z = new u("@ngrx/store Internal Root Guard"), J = new u("@ngrx/store Internal Initial State"), $ = new u("@ngrx/store Initial State"), Ee = new u("@ngrx/store Reducer Factory"), X = new u("@ngrx/store Internal Reducer Factory Provider"), ve = new u("@ngrx/store Initial Reducers"), O = new u("@ngrx/store Internal Initial Reducers"), ee = new u("@ngrx/store Store Features"), te = new u("@ngrx/store Internal Store Reducers"), C = new u("@ngrx/store Internal Feature Reducers"), ne = new u("@ngrx/store Internal Feature Configs"), V = new u("@ngrx/store Internal Store Features"), re = new u("@ngrx/store Internal Feature Reducers Token"), K = new u("@ngrx/store Feature Reducers"), oe = new u("@ngrx/store User Provided Meta Reducers"), I = new u("@ngrx/store Meta Reducers"), ie = new u("@ngrx/store Internal Resolved Meta Reducers"), se = new u("@ngrx/store User Runtime Checks Config"), ce = new u("@ngrx/store Internal User Runtime Checks Config"), v = new u("@ngrx/store Internal Runtime Checks"), S = new u("@ngrx/store Check if Action types are unique"), M = new u("@ngrx/store Root Store Provider"), ue = new u("@ngrx/store Feature State Provider");
function q(e, r = {}) { let t = Object.keys(e), n = {}; for (let i = 0; i < t.length; i++) {
    let c = t[i];
    typeof e[c] == "function" && (n[c] = e[c]);
} let o = Object.keys(n); return function (c, d) { c = c === void 0 ? r : c; let f = !1, y = {}; for (let a = 0; a < o.length; a++) {
    let h = o[a], Ce = n[h], H = c[h], Y = Ce(H, d);
    y[h] = Y, f = f || Y !== H;
} return f ? y : c; }; }
function Qe(e, r) { return Object.keys(e).filter(t => t !== r).reduce((t, n) => Object.assign(t, { [n]: e[n] }), {}); }
function ge(...e) { return function (r) { if (e.length === 0)
    return r; let t = e[e.length - 1]; return e.slice(0, -1).reduceRight((o, i) => i(o), t(r)); }; }
function Se(e, r) { return Array.isArray(r) && r.length > 0 && (e = ge.apply(null, [...r, e])), (t, n) => { let o = e(t); return (i, c) => (i = i === void 0 ? n : i, o(i, c)); }; }
function We(e) { let r = Array.isArray(e) && e.length > 0 ? ge(...e) : t => t; return (t, n) => (t = r(t), (o, i) => (o = o === void 0 ? n : o, t(o, i))); }
var E = class extends F {
}, b = class extends m {
}, Je = "@ngrx/store/update-reducers", g = (() => { class e extends j {
    get currentReducers() { return this.reducers; }
    constructor(t, n, o, i) { super(i(o, n)), this.dispatcher = t, this.initialState = n, this.reducers = o, this.reducerFactory = i; }
    addFeature(t) { this.addFeatures([t]); }
    addFeatures(t) { let n = t.reduce((o, { reducers: i, reducerFactory: c, metaReducers: d, initialState: f, key: y }) => { let a = typeof i == "function" ? We(d)(i, f) : Se(c, d)(i, f); return o[y] = a, o; }, {}); this.addReducers(n); }
    removeFeature(t) { this.removeFeatures([t]); }
    removeFeatures(t) { this.removeReducers(t.map(n => n.key)); }
    addReducer(t, n) { this.addReducers({ [t]: n }); }
    addReducers(t) { this.reducers = p(p({}, this.reducers), t), this.updateReducers(Object.keys(t)); }
    removeReducer(t) { this.removeReducers([t]); }
    removeReducers(t) { t.forEach(n => { this.reducers = Qe(this.reducers, n); }), this.updateReducers(t); }
    updateReducers(t) { this.next(this.reducerFactory(this.reducers, this.initialState)), this.dispatcher.next({ type: Je, features: t }); }
    ngOnDestroy() { this.complete(); }
    static { this.\u0275fac = function (n) { return new (n || e)(s.\u0275\u0275inject(b), s.\u0275\u0275inject($), s.\u0275\u0275inject(ve), s.\u0275\u0275inject(Ee)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
} return e; })(), Xe = [g, { provide: E, useExisting: g }, { provide: b, useExisting: m }], T = (() => { class e extends Q {
    ngOnDestroy() { this.complete(); }
    static { this.\u0275fac = (() => { let t; return function (o) { return (t || (t = s.\u0275\u0275getInheritedFactory(e)))(o || e); }; })(); }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
} return e; })(), et = [T], A = class extends F {
}, ae = (() => { class e extends j {
    static { this.INIT = me; }
    constructor(t, n, o, i) { super(i); let d = t.pipe(Ue(W)).pipe(Ne(n)), f = { state: i }, y = d.pipe(Pe(tt, f)); this.stateSubscription = y.subscribe(({ state: a, action: h }) => { this.next(a), o.next(h); }), this.state = Ke(this, { manualCleanup: !0, requireSync: !0 }); }
    ngOnDestroy() { this.stateSubscription.unsubscribe(), this.complete(); }
    static { this.\u0275fac = function (n) { return new (n || e)(s.\u0275\u0275inject(m), s.\u0275\u0275inject(E), s.\u0275\u0275inject(T), s.\u0275\u0275inject($)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
} return e; })();
function tt(e = { state: void 0 }, [r, t]) { let { state: n } = e; return { state: t(n, r), action: r }; }
var nt = [ae, { provide: A, useExisting: ae }], w = (() => { class e extends F {
    constructor(t, n, o, i) { super(), this.actionsObserver = n, this.reducerManager = o, this.injector = i, this.source = t, this.state = t.state; }
    select(t, ...n) { return ot.call(null, t, ...n)(this); }
    selectSignal(t, n) { return _e(() => t(this.state()), n); }
    lift(t) { let n = new e(this, this.actionsObserver, this.reducerManager); return n.operator = t, n; }
    dispatch(t, n) { if (typeof t == "function")
        return this.processDispatchFn(t, n); this.actionsObserver.next(t); }
    next(t) { this.actionsObserver.next(t); }
    error(t) { this.actionsObserver.error(t); }
    complete() { this.actionsObserver.complete(); }
    addReducer(t, n) { this.reducerManager.addReducer(t, n); }
    removeReducer(t) { this.reducerManager.removeReducer(t); }
    processDispatchFn(t, n) { Ge(this.injector, "Store Injector"); let o = n?.injector ?? it() ?? this.injector; return Me(() => { let i = t(); De(() => this.dispatch(i)); }, { injector: o }); }
    static { this.\u0275fac = function (n) { return new (n || e)(s.\u0275\u0275inject(A), s.\u0275\u0275inject(m), s.\u0275\u0275inject(g), s.\u0275\u0275inject(s.Injector)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
} return e; })(), rt = [w];
function ot(e, r, ...t) { return function (o) { let i; if (typeof e == "string") {
    let c = [r, ...t].filter(Boolean);
    i = o.pipe(ze(e, ...c));
}
else if (typeof e == "function")
    i = o.pipe($e(c => e(c, r)));
else
    throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`); return i.pipe(Ve()); }; }
function it() { try {
    return l(ke);
}
catch {
    return;
} }
var L = "https://ngrx.io/guide/store/configuration/runtime-checks";
function de(e) { return e === void 0; }
function fe(e) { return e === null; }
function Fe(e) { return Array.isArray(e); }
function st(e) { return typeof e == "string"; }
function ct(e) { return typeof e == "boolean"; }
function ut(e) { return typeof e == "number"; }
function je(e) { return typeof e == "object" && e !== null; }
function at(e) { return je(e) && !Fe(e); }
function Ie(e) { if (!at(e))
    return !1; let r = Object.getPrototypeOf(e); return r === Object.prototype || r === null; }
function D(e) { return typeof e == "function"; }
function dt(e) { return D(e) && e.hasOwnProperty("\u0275cmp"); }
function ft(e, r) { return Object.prototype.hasOwnProperty.call(e, r); }
var be = !1;
function Wt(e) { be = e; }
function lt() { return be; }
function k(e, r) { return e === r; }
function pt(e, r, t) { for (let n = 0; n < e.length; n++)
    if (!t(e[n], r[n]))
        return !0; return !1; }
function Jt(e, r) { return B(e, k, r); }
function B(e, r = k, t = k) { let n = null, o = null, i; function c() { n = null, o = null; } function d(a = void 0) { i = { result: a }; } function f() { i = void 0; } function y() { if (i !== void 0)
    return i.result; if (!n)
    return o = e.apply(null, arguments), n = arguments, o; if (!pt(arguments, n, r))
    return o; let a = e.apply(null, arguments); return n = arguments, t(o, a) ? o : (o = a, a); } return { memoized: y, reset: c, setResult: d, clearResult: f }; }
function Ae(...e) { return ht(B)(...e); }
function yt(e, r, t, n) { if (t === void 0) {
    let i = r.map(c => c(e));
    return n.memoized.apply(null, i);
} let o = r.map(i => i(e, t)); return n.memoized.apply(null, [...o, t]); }
function ht(e, r = { stateFn: yt }) { return function (...t) { let n = t; if (Array.isArray(n[0])) {
    let [a, ...h] = n;
    n = [...a, ...h];
}
else
    n.length === 1 && mt(n[0]) && (n = Et(n[0])); let o = n.slice(0, n.length - 1), i = n[n.length - 1], c = o.filter(a => a.release && typeof a.release == "function"), d = e(function (...a) { return i.apply(null, a); }), f = B(function (a, h) { return r.stateFn.apply(null, [a, o, h, d]); }); function y() { f.reset(), d.reset(), c.forEach(a => a.release()); } return Object.assign(f.memoized, { release: y, projector: d.memoized, setResult: f.setResult, clearResult: f.clearResult }); }; }
function Rt(e) { return Ae(r => { let t = r[e]; return !lt() && ye() && !(e in r) && console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`), t; }, r => r); }
function mt(e) { return !!e && typeof e == "object" && Object.values(e).every(r => typeof r == "function"); }
function Et(e) { let r = Object.values(e), t = Object.keys(e), n = (...o) => t.reduce((i, c, d) => R(p({}, i), { [c]: o[d] }), {}); return [...r, n]; }
function Xt(e) { let { name: r, reducer: t, extraSelectors: n } = e, o = Rt(r), i = vt(o, t), c = p({ [`select${P(r)}State`]: o }, i), d = n ? n(c) : {}; return p(p({ name: r, reducer: t }, c), d); }
function vt(e, r) { let t = gt(r); return (Ie(t) ? Object.keys(t) : []).reduce((o, i) => R(p({}, o), { [`select${P(i)}`]: Ae(e, c => c?.[i]) }), {}); }
function gt(e) { return e(void 0, { type: "@ngrx/feature/init" }); }
function St(e) { return e instanceof u ? l(e) : e; }
function Ft(e, r) { return r.map((t, n) => { if (e[n] instanceof u) {
    let o = l(e[n]);
    return { key: t.key, reducerFactory: o.reducerFactory ? o.reducerFactory : q, metaReducers: o.metaReducers ? o.metaReducers : [], initialState: o.initialState };
} return t; }); }
function jt(e) { return e.map(r => r instanceof u ? l(r) : r); }
function G(e) { return typeof e == "function" ? e() : e; }
function It(e, r) { return e.concat(r); }
function bt() { if (l(w, { optional: !0, skipSelf: !0 }))
    throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead."); return "guarded"; }
function At(e, r) { return function (t, n) { let o = r.action(n) ? U(n) : n, i = e(t, o); return r.state() ? U(i) : i; }; }
function U(e) { Object.freeze(e); let r = D(e); return Object.getOwnPropertyNames(e).forEach(t => { if (!t.startsWith("\u0275") && ft(e, t) && (!r || t !== "caller" && t !== "callee" && t !== "arguments")) {
    let n = e[t];
    (je(n) || D(n)) && !Object.isFrozen(n) && U(n);
} }), e; }
function Tt(e, r) { return function (t, n) { if (r.action(n)) {
    let i = N(n);
    le(i, "action");
} let o = e(t, n); if (r.state()) {
    let i = N(o);
    le(i, "state");
} return o; }; }
function N(e, r = []) { return (de(e) || fe(e)) && r.length === 0 ? { path: ["root"], value: e } : Object.keys(e).reduce((n, o) => { if (n)
    return n; let i = e[o]; return dt(i) ? n : de(i) || fe(i) || ut(i) || ct(i) || st(i) || Fe(i) ? !1 : Ie(i) ? N(i, [...r, o]) : { path: [...r, o], value: i }; }, !1); }
function le(e, r) { if (e === !1)
    return; let t = e.path.join("."), n = new Error(`Detected unserializable ${r} at "${t}". ${L}#strict${r}serializability`); throw n.value = e.value, n.unserializablePath = t, n; }
function wt(e, r) { return function (t, n) { if (r.action(n) && !s.NgZone.isInAngularZone())
    throw new Error(`Action '${n.type}' running outside NgZone. ${L}#strictactionwithinngzone`); return e(t, n); }; }
function xt(e) { return ye() ? p({ strictStateSerializability: !1, strictActionSerializability: !1, strictStateImmutability: !0, strictActionImmutability: !0, strictActionWithinNgZone: !1, strictActionTypeUniqueness: !1 }, e) : { strictStateSerializability: !1, strictActionSerializability: !1, strictStateImmutability: !1, strictActionImmutability: !1, strictActionWithinNgZone: !1, strictActionTypeUniqueness: !1 }; }
function Ot({ strictActionSerializability: e, strictStateSerializability: r }) { return t => e || r ? Tt(t, { action: n => e && !Z(n), state: () => r }) : t; }
function Ct({ strictActionImmutability: e, strictStateImmutability: r }) { return t => e || r ? At(t, { action: n => e && !Z(n), state: () => r }) : t; }
function Z(e) { return e.type.startsWith("@ngrx"); }
function _t({ strictActionWithinNgZone: e }) { return r => e ? wt(r, { action: t => e && !Z(t) }) : r; }
function Mt(e) { return [{ provide: ce, useValue: e }, { provide: se, useFactory: Dt, deps: [ce] }, { provide: v, deps: [se], useFactory: xt }, { provide: I, multi: !0, deps: [v], useFactory: Ct }, { provide: I, multi: !0, deps: [v], useFactory: Ot }, { provide: I, multi: !0, deps: [v], useFactory: _t }]; }
function Te() { return [{ provide: S, multi: !0, deps: [v], useFactory: kt }]; }
function Dt(e) { return e; }
function kt(e) { if (!e.strictActionTypeUniqueness)
    return; let r = Object.entries(_).filter(([, t]) => t > 1).map(([t]) => t); if (r.length)
    throw new Error(`Action types are registered more than once, ${r.map(t => `"${t}"`).join(", ")}. ${L}#strictactiontypeuniqueness`); }
function en(e, r, t = {}) { return he([...xe(e, r, t), zt]); }
function we(e = {}, r = {}) { return [{ provide: z, useFactory: bt }, { provide: J, useValue: r.initialState }, { provide: $, useFactory: G, deps: [J] }, { provide: O, useValue: e }, { provide: te, useExisting: e instanceof u ? e : O }, { provide: ve, deps: [O, [new pe(te)]], useFactory: St }, { provide: oe, useValue: r.metaReducers ? r.metaReducers : [] }, { provide: ie, deps: [I, oe], useFactory: It }, { provide: X, useValue: r.reducerFactory ? r.reducerFactory : q }, { provide: Ee, deps: [X, ie], useFactory: Se }, Ye, Xe, et, nt, rt, Mt(r.runtimeChecks), Te()]; }
function Ut() { l(m), l(E), l(T), l(w), l(z, { optional: !0 }), l(S, { optional: !0 }); }
var Nt = [{ provide: M, useFactory: Ut }, Re(() => l(M))];
function tn(e, r) { return he([...we(e, r), Nt]); }
function Pt() { l(M); let e = l(V), r = l(K), t = l(g); l(S, { optional: !0 }); let n = e.map((o, i) => { let d = r.shift()[i]; return R(p({}, o), { reducers: d, initialState: G(o.initialState) }); }); t.addFeatures(n); }
var zt = [{ provide: ue, useFactory: Pt }, Re(() => l(ue))];
function xe(e, r, t = {}) { return [{ provide: ne, multi: !0, useValue: e instanceof Object ? {} : t }, { provide: ee, multi: !0, useValue: { key: e instanceof Object ? e.name : e, reducerFactory: !(t instanceof u) && t.reducerFactory ? t.reducerFactory : q, metaReducers: !(t instanceof u) && t.metaReducers ? t.metaReducers : [], initialState: !(t instanceof u) && t.initialState ? t.initialState : void 0 } }, { provide: V, deps: [ne, ee], useFactory: Ft }, { provide: C, multi: !0, useValue: e instanceof Object ? e.reducer : r }, { provide: re, multi: !0, useExisting: r instanceof u ? r : C }, { provide: K, multi: !0, deps: [C, [new pe(re)]], useFactory: jt }, Te()]; }
var Oe = (() => { class e {
    constructor(t, n, o, i, c, d) { }
    static { this.\u0275fac = function (n) { return new (n || e)(s.\u0275\u0275inject(m), s.\u0275\u0275inject(E), s.\u0275\u0275inject(T), s.\u0275\u0275inject(w), s.\u0275\u0275inject(z, 8), s.\u0275\u0275inject(S, 8)); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: e }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({}); }
} return e; })(), $t = (() => { class e {
    constructor(t, n, o, i, c) { this.features = t, this.featureReducers = n, this.reducerManager = o; let d = t.map((f, y) => { let h = n.shift()[y]; return R(p({}, f), { reducers: h, initialState: G(f.initialState) }); }); o.addFeatures(d); }
    ngOnDestroy() { this.reducerManager.removeFeatures(this.features); }
    static { this.\u0275fac = function (n) { return new (n || e)(s.\u0275\u0275inject(V), s.\u0275\u0275inject(K), s.\u0275\u0275inject(g), s.\u0275\u0275inject(Oe), s.\u0275\u0275inject(S, 8)); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: e }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({}); }
} return e; })(), nn = (() => { class e {
    static forRoot(t, n) { return { ngModule: Oe, providers: [...we(t, n)] }; }
    static forFeature(t, n, o = {}) { return { ngModule: $t, providers: [...xe(t, n, o)] }; }
    static { this.\u0275fac = function (n) { return new (n || e); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: e }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({}); }
} return e; })();
function rn(...e) { let r = e.pop(), t = e.map(n => n.type); return { reducer: r, types: t }; }
function on(e, ...r) { let t = new Map; for (let n of r)
    for (let o of n.types) {
        let i = t.get(o);
        if (i) {
            let c = (d, f) => n.reducer(i(d, f), f);
            t.set(o, c);
        }
        else
            t.set(o, n.reducer);
    } return function (n = e, o) { let i = t.get(o.type); return i ? i(n, o) : n; }; }
export { v as ACTIVE_RUNTIME_CHECKS, m as ActionsSubject, K as FEATURE_REDUCERS, ue as FEATURE_STATE_PROVIDER, me as INIT, ve as INITIAL_REDUCERS, $ as INITIAL_STATE, I as META_REDUCERS, Ee as REDUCER_FACTORY, M as ROOT_STORE_PROVIDER, g as ReducerManager, b as ReducerManagerDispatcher, E as ReducerObservable, ee as STORE_FEATURES, T as ScannedActionsSubject, ae as State, A as StateObservable, w as Store, $t as StoreFeatureModule, nn as StoreModule, Oe as StoreRootModule, Je as UPDATE, oe as USER_PROVIDED_META_REDUCERS, se as USER_RUNTIME_CHECKS, q as combineReducers, ge as compose, qe as createAction, Yt as createActionGroup, Xt as createFeature, Rt as createFeatureSelector, on as createReducer, Se as createReducerFactory, Ae as createSelector, ht as createSelectorFactory, B as defaultMemoize, yt as defaultStateFn, Qt as emptyProps, lt as isNgrxMockEnvironment, rn as on, Le as props, en as provideState, tn as provideStore, tt as reduceState, Jt as resultMemoize, ot as select, Wt as setNgrxMockEnvironment, Ht as union };
