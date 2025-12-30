import * as r from "@angular/core";
import { InjectionToken as l, inject as a, DOCUMENT as c, signal as u, EventEmitter as d } from "@angular/core";
var s = new l("cdk-dir-doc", { providedIn: "root", factory: g });
function g() { return a(c); }
var v = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function f(t) { let o = t?.toLowerCase() || ""; return o === "auto" && typeof navigator < "u" && navigator?.language ? v.test(navigator.language) ? "rtl" : "ltr" : o === "rtl" ? "rtl" : "ltr"; }
var D = (() => { class t {
    get value() { return this.valueSignal(); }
    valueSignal = u("ltr");
    change = new d;
    constructor() { let e = a(s, { optional: !0 }); if (e) {
        let n = e.body ? e.body.dir : null, i = e.documentElement ? e.documentElement.dir : null;
        this.valueSignal.set(f(n || i || "ltr"));
    } }
    ngOnDestroy() { this.change.complete(); }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = r.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
export { s as a, f as b, D as c };
