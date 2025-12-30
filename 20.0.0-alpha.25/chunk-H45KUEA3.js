import { b as a } from "@nf-internal/chunk-RXMLTE5A";
import * as n from "@angular/core";
import "@angular/core";
import { startWith as r } from "rxjs/operators";
var m = (() => { class t {
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "mat-line", ""], ["", "matLine", ""]], hostAttrs: [1, "mat-line"] });
} return t; })();
function M(t, o, e = "mat") { t.changes.pipe(r(t)).subscribe(({ length: i }) => { s(o, `${e}-2-line`, !1), s(o, `${e}-3-line`, !1), s(o, `${e}-multi-line`, !1), i === 2 || i === 3 ? s(o, `${e}-${i}-line`, !0) : i > 3 && s(o, `${e}-multi-line`, !0); }); }
function s(t, o, e) { t.nativeElement.classList.toggle(o, e); }
var v = (() => { class t {
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275mod = n.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = n.\u0275\u0275defineInjector({ imports: [a, a] });
} return t; })();
export { m as a, M as b, v as c };
