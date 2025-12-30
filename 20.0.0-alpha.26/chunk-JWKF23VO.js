import * as n from "@angular/core";
import "@angular/core";
var d = (() => { class e {
    isErrorState(t, i) { return !!(t && t.invalid && (t.dirty || i && i.submitted)); }
    static \u0275fac = function (i) { return new (i || e); };
    static \u0275prov = n.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), o = (() => { class e {
    isErrorState(t, i) { return !!(t && t.invalid && (t.touched || i && i.submitted)); }
    static \u0275fac = function (i) { return new (i || e); };
    static \u0275prov = n.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
export { d as a, o as b };
