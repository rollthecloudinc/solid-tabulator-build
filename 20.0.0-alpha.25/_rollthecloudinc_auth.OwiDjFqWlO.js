import { a as A } from "@nf-internal/chunk-VJMH5IEE";
import { a as p, b as f, h as y } from "@nf-internal/chunk-FJYW2LMB";
import * as k from "@ngrx/store";
import { createFeatureSelector as w, createSelector as D, select as m, StoreModule as C } from "@ngrx/store";
import * as e from "@angular/core";
import { PLATFORM_ID as $ } from "@angular/core";
import { map as M, tap as E } from "rxjs/operators";
import { CommonModule as L } from "@angular/common";
import * as h from "@angular/router";
import * as S from "@ngrx/data";
var n = (function (t) { return t.Login = "[Auth] Login", t.Logout = "[Auth] Logout", t.CompleteAuthentication = "[Auth] CompleteAuthentication", t.SetUser = "[Auth] SetUser", t; })(n || {}), s = class {
    constructor() { this.type = n.Login; }
}, c = class {
    constructor() { this.type = n.Logout; }
}, a = class {
    constructor() { this.type = n.CompleteAuthentication; }
}, u = class {
    constructor(r) { this.payload = r, this.type = n.SetUser; }
}, R = { Login: s, Logout: c, CompleteAuthentication: a, SetUser: u }, G = Object.freeze({ __proto__: null, get AuthActionTypes() { return n; }, CompleteAuthentication: a, Login: s, Logout: c, SetUser: u, fromAuthActions: R }), g = "auth", U = { user: void 0, cookies: new Map };
function F(t = U, r) { switch (r.type) {
    case n.SetUser: {
        t = f(p({}, t), { user: r.payload });
        break;
    }
    case n.Logout: {
        t = f(p({}, t), { user: void 0 });
        break;
    }
} return t; }
var J = Object.freeze({ __proto__: null, AUTH_FEATURE_KEY: g, initialState: U, reducer: F }), N = w(g), O = D(N, t => t.user), d = { getUser: O }, V = Object.freeze({ __proto__: null, authQuery: d }), v = (() => { class t {
    constructor(o) { this.store = o, this.getUser$ = this.store.pipe(m(d.getUser)), this.token$ = this.store.pipe(m(d.getUser), M(i => i ? `${i.token_type} ${i.access_token}` : void 0)), this.idToken$ = this.store.pipe(m(d.getUser), M(i => i ? `${i.token_type} ${i.id_token}` : void 0)); }
    login() { this.store.dispatch(new s); }
    logout() { this.store.dispatch(new c); }
    setUser(o) { this.store.dispatch(new u(o)); }
    completeAuthentication() { this.store.dispatch(new a); }
    static { this.\u0275fac = function (i) { return new (i || t)(e.\u0275\u0275inject(k.Store)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })(), T = { PublicUserProfile: { entityName: "PublicUserProfile" } }, W = (() => { class t {
    constructor(o, i, l, I) { this.authFacade = o, this.router = i, this.route = l, this.platformId = I; }
    ngOnInit() { return y(this, null, function* () { this.authFacade.completeAuthentication(), this.router.navigate(["/pages/create-panel-page"], { queryParams: { cacheBuster: A() } }); }); }
    static { this.\u0275fac = function (i) { return new (i || t)(e.\u0275\u0275directiveInject(v), e.\u0275\u0275directiveInject(h.Router), e.\u0275\u0275directiveInject(h.ActivatedRoute), e.\u0275\u0275directiveInject($)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: t, selectors: [["classifieds-ui-auth-callback"]], standalone: !1, decls: 2, vars: 0, template: function (i, l) { i & 1 && (e.\u0275\u0275elementStart(0, "p"), e.\u0275\u0275text(1, "auth-callback works!"), e.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return t; })(), X = (() => { class t {
    constructor(o) { o.registerMetadataMap(T); }
    static forRoot() { return { ngModule: t, providers: [v] }; }
    static { this.\u0275fac = function (i) { return new (i || t)(e.\u0275\u0275inject(S.EntityDefinitionService)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [L, C.forFeature(g, F)] }); }
} return t; })(), Z = (() => { class t {
    constructor(o, i) { this.authFacade = o, this.router = i; }
    intercept(o, i) { return i.handle(o).pipe(E({ error: l => { l.status; } })); }
    static { this.\u0275fac = function (i) { return new (i || t)(e.\u0275\u0275inject(v), e.\u0275\u0275inject(h.Router)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); }
} return t; })(), _ = class {
    constructor(r) { r && (this.sub = r.sub); }
}, j = class {
    constructor(r) { r && (this.id = r.id, this.userName = r.userName); }
}, b = class {
    constructor(r) { r && (this.name = r.name, this.value = r.value); }
};
export { n as AuthActionTypes, G as AuthActions, W as AuthCallbackComponent, v as AuthFacade, J as AuthFeature, X as AuthModule, V as AuthSelectors, a as CompleteAuthentication, b as Cookie, s as Login, c as Logout, Z as LogoutInterceptor, j as PublicUserProfile, u as SetUser, _ as UserInfo, R as fromAuthActions };
