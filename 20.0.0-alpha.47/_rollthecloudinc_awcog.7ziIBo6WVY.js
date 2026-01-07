import "@nf-internal/chunk-FJYW2LMB";
import * as o from "@angular/core";
import { InjectionToken as l } from "@angular/core";
import * as d from "@ngrx/effects";
import { createEffect as c, ofType as y, EffectsModule as u } from "@ngrx/effects";
import * as m from "@ngrx/data";
import { EntityOp as a, ofEntityType as h, ofEntityOp as g } from "@ngrx/data";
import { map as A, tap as f } from "rxjs/operators";
import { AuthActions as E } from "@rollthecloudinc/auth";
import I from "js-cookie";
var v = (() => { class t {
    constructor(n, e) { this.actions$ = n, this.entityActionFactory = e, this.setUser = c(() => this.actions$.pipe(y(E.AuthActionTypes.SetUser), A(() => this.entityActionFactory.create("Cookie", a.QUERY_ALL)))), this.loadCookies$ = c(() => this.actions$.pipe(h("Cookie"), g([a.QUERY_ALL_SUCCESS]), f(r => console.log(r.payload.data)), f(r => { r.payload.data.forEach(s => I.set(s.name, s.value, { expires: new Date(new Date().getTime() + 1 * 3600 * 1e3) })); })), { dispatch: !1 }); }
    static { this.\u0275fac = function (e) { return new (e || t)(o.\u0275\u0275inject(d.Actions), o.\u0275\u0275inject(m.EntityActionFactory)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); }
} return t; })(), S = (() => { class t {
    static { this.\u0275fac = function (e) { return new (e || t); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({ imports: [u.forFeature([v])] }); }
} return t; })(), p = class {
    constructor(i) { i && (this.identityPoolId = i.identityPoolId, this.region = i.region, this.userPoolId = i.userPoolId); }
}, U = new l("CognitoSettings");
export { S as AwcogModule, U as COGNITO_SETTINGS, p as CognitoSettings };
