import { a as E, b as T } from "@nf-internal/chunk-FJYW2LMB";
import * as b from "@ngrx/store";
import { createAction as f, props as d, isNgrxMockEnvironment as H, select as V, ACTIVE_RUNTIME_CHECKS as Q, createFeatureSelector as B, createSelector as c } from "@ngrx/store";
import * as o from "@angular/core";
import { InjectionToken as j, isDevMode as $, makeEnvironmentProviders as J, provideEnvironmentInitializer as W, inject as X } from "@angular/core";
import * as q from "@angular/router";
import { NavigationStart as O, RoutesRecognized as z, NavigationCancel as Y, NavigationError as U, NavigationEnd as Z } from "@angular/router";
import { withLatestFrom as M } from "rxjs/operators";
var w = "@ngrx/router-store/request", ht = f(w, d()), v = "@ngrx/router-store/navigation", ft = f(v, d()), C = "@ngrx/router-store/cancel", dt = f(C, d()), S = "@ngrx/router-store/error", pt = f(S, d()), D = "@ngrx/router-store/navigated", gt = f(D, d());
function Rt(t, e) { let i = e; switch (i.type) {
    case v:
    case S:
    case C: return { state: i.payload.routerState, navigationId: i.payload.event.id };
    default: return t;
} }
var p = class {
    serialize(e) { return { root: this.serializeRoute(e.root), url: e.url }; }
    serializeRoute(e) { let i = e.children.map(s => this.serializeRoute(s)); return { params: e.params, data: e.data, url: e.url, outlet: e.outlet, title: e.title, routeConfig: e.routeConfig ? { path: e.routeConfig.path, pathMatch: e.routeConfig.pathMatch, redirectTo: e.routeConfig.redirectTo, outlet: e.routeConfig.outlet, title: typeof e.routeConfig.title == "string" ? e.routeConfig.title : void 0 } : null, queryParams: e.queryParams, fragment: e.fragment, firstChild: i[0], children: i }; }
}, N = (function (t) { return t[t.PreActivation = 1] = "PreActivation", t[t.PostActivation = 2] = "PostActivation", t; })(N || {}), _ = "router", P = new j("@ngrx/router-store Internal Configuration"), L = new j("@ngrx/router-store Configuration"), A = (function (t) { return t[t.Full = 0] = "Full", t[t.Minimal = 1] = "Minimal", t; })(A || {});
function tt(t) { return E({ stateKey: _, serializer: p, navigationActionTiming: N.PreActivation }, t); }
var g = class {
    serialize(e) { return { root: this.serializeRoute(e.root), url: e.url }; }
    serializeRoute(e) { let i = e.children.map(s => this.serializeRoute(s)); return { params: e.params, paramMap: e.paramMap, data: e.data, url: e.url, outlet: e.outlet, title: e.title, routeConfig: e.routeConfig ? { component: e.routeConfig.component, path: e.routeConfig.path, pathMatch: e.routeConfig.pathMatch, redirectTo: e.routeConfig.redirectTo, outlet: e.routeConfig.outlet, title: e.routeConfig.title } : null, queryParams: e.queryParams, queryParamMap: e.queryParamMap, fragment: e.fragment, component: e.routeConfig ? e.routeConfig.component : void 0, root: void 0, parent: void 0, firstChild: i[0], pathFromRoot: void 0, children: i }; }
}, R = class {
}, l = (function (t) { return t[t.NONE = 1] = "NONE", t[t.ROUTER = 2] = "ROUTER", t[t.STORE = 3] = "STORE", t; })(l || {}), I = (() => { class t {
    constructor(i, s, n, u, m, h) { this.store = i, this.router = s, this.serializer = n, this.errorHandler = u, this.config = m, this.activeRuntimeChecks = h, this.lastEvent = null, this.routerState = null, this.trigger = l.NONE, this.stateKey = this.config.stateKey, !H() && $() && (h?.strictActionSerializability || h?.strictStateSerializability) && this.serializer instanceof g && console.warn("@ngrx/router-store: The serializability runtime checks cannot be enabled with the FullRouterStateSerializer. The FullRouterStateSerializer has an unserializable router state and actions that are not serializable. To use the serializability runtime checks either use the MinimalRouterStateSerializer or implement a custom router state serializer."), this.setUpStoreStateListener(), this.setUpRouterEventsListener(); }
    setUpStoreStateListener() { this.store.pipe(V(this.stateKey), M(this.store)).subscribe(([i, s]) => { this.navigateIfNeeded(i, s); }); }
    navigateIfNeeded(i, s) { if (!i || !i.state || this.trigger === l.ROUTER || this.lastEvent instanceof O)
        return; let n = i.state.url; et(this.router.url, n) || (this.storeState = s, this.trigger = l.STORE, this.router.navigateByUrl(n).catch(u => { this.errorHandler.handleError(u); })); }
    setUpRouterEventsListener() { let i = this.config.navigationActionTiming === N.PostActivation, s; this.router.events.pipe(M(this.store)).subscribe(([n, u]) => { this.lastEvent = n, n instanceof O ? (this.routerState = this.serializer.serialize(this.router.routerState.snapshot), this.trigger !== l.STORE && (this.storeState = u, this.dispatchRouterRequest(n))) : n instanceof z ? (s = n, !i && this.trigger !== l.STORE && this.dispatchRouterNavigation(n)) : n instanceof Y ? (this.dispatchRouterCancel(n), this.reset()) : n instanceof U ? (this.dispatchRouterError(n), this.reset()) : n instanceof Z && (this.trigger !== l.STORE && (i && this.dispatchRouterNavigation(s), this.dispatchRouterNavigated(n)), this.reset()); }); }
    dispatchRouterRequest(i) { this.dispatchRouterAction(w, { event: i }); }
    dispatchRouterNavigation(i) { let s = this.serializer.serialize(i.state); this.dispatchRouterAction(v, { routerState: s, event: new z(i.id, i.url, i.urlAfterRedirects, s) }); }
    dispatchRouterCancel(i) { this.dispatchRouterAction(C, { storeState: this.storeState, event: i }); }
    dispatchRouterError(i) { this.dispatchRouterAction(S, { storeState: this.storeState, event: new U(i.id, i.url, `${i}`) }); }
    dispatchRouterNavigated(i) { let s = this.serializer.serialize(this.router.routerState.snapshot); this.dispatchRouterAction(D, { event: i, routerState: s }); }
    dispatchRouterAction(i, s) { this.trigger = l.ROUTER; try {
        this.store.dispatch({ type: i, payload: T(E({ routerState: this.routerState }, s), { event: this.config.routerState === A.Full ? s.event : { id: s.event.id, url: s.event.url, urlAfterRedirects: s.event.urlAfterRedirects } }) });
    }
    finally {
        this.trigger = l.NONE;
    } }
    reset() { this.trigger = l.NONE, this.storeState = null, this.routerState = null; }
    static { this.\u0275fac = function (s) { return new (s || t)(o.\u0275\u0275inject(b.Store), o.\u0275\u0275inject(q.Router), o.\u0275\u0275inject(R), o.\u0275\u0275inject(o.ErrorHandler), o.\u0275\u0275inject(L), o.\u0275\u0275inject(Q)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); }
} return t; })();
function et(t, e) { return F(t) === F(e); }
function F(t) { return t?.length > 0 && t[t.length - 1] === "/" ? t.substring(0, t.length - 1) : t; }
function it(t = {}) { return J([{ provide: P, useValue: t }, { provide: L, useFactory: tt, deps: [P] }, { provide: R, useClass: t.serializer ? t.serializer : t.routerState === A.Full ? g : p }, W(() => X(I)), I]); }
var mt = (() => { class t {
    static forRoot(i = {}) { return { ngModule: t, providers: [it(i)] }; }
    static { this.\u0275fac = function (s) { return new (s || t); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({}); }
} return t; })();
function rt() { return B(_); }
function Et(t = rt()) { let e = c(t, r => r && r.state), i = c(e, r => r && r.root), s = c(i, r => { if (!r)
    return; let a = r; for (; a.firstChild;)
    a = a.firstChild; return a; }), n = c(i, r => r && r.fragment), u = c(i, r => r && r.queryParams), m = r => c(u, a => a && a[r]), h = c(s, r => r && r.params), x = r => c(h, a => a && a[r]), y = c(s, r => r && r.data), k = r => c(y, a => a && a[r]), K = c(e, r => r && r.url), G = c(s, r => { if (r?.routeConfig)
    return typeof r.routeConfig.title == "string" ? r.routeConfig.title : r.title; }); return { selectCurrentRoute: s, selectFragment: n, selectQueryParams: u, selectQueryParam: m, selectRouteParams: h, selectRouteParam: x, selectRouteData: y, selectRouteDataParam: k, selectUrl: K, selectTitle: G }; }
export { _ as DEFAULT_ROUTER_FEATURENAME, g as FullRouterStateSerializer, p as MinimalRouterStateSerializer, N as NavigationActionTiming, C as ROUTER_CANCEL, L as ROUTER_CONFIG, S as ROUTER_ERROR, D as ROUTER_NAVIGATED, v as ROUTER_NAVIGATION, w as ROUTER_REQUEST, A as RouterState, R as RouterStateSerializer, mt as StoreRouterConnectingModule, rt as createRouterSelector, Et as getRouterSelectors, it as provideRouterStore, dt as routerCancelAction, pt as routerErrorAction, gt as routerNavigatedAction, ft as routerNavigationAction, Rt as routerReducer, ht as routerRequestAction };
