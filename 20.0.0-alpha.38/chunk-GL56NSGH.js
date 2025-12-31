import { b as o } from "@nf-internal/chunk-RXMLTE5A";
import * as t from "@angular/core";
import "@angular/core";
import { coerceBooleanProperty as n } from "@angular/cdk/coercion";
import "@angular/cdk/a11y";
import "@angular/cdk/bidi";
var h = (() => {
    class i {
        get vertical() { return this._vertical; }
        set vertical(e) { this._vertical = n(e); }
        _vertical = !1;
        get inset() { return this._inset; }
        set inset(e) { this._inset = n(e); }
        _inset = !1;
        static \u0275fac = function (r) { return new (r || i); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["mat-divider"]], hostAttrs: ["role", "separator", 1, "mat-divider"], hostVars: 7, hostBindings: function (r, a) { r & 2 && (t.\u0275\u0275attribute("aria-orientation", a.vertical ? "vertical" : "horizontal"), t.\u0275\u0275classProp("mat-divider-vertical", a.vertical)("mat-divider-horizontal", !a.vertical)("mat-divider-inset", a.inset)); }, inputs: { vertical: "vertical", inset: "inset" }, decls: 0, vars: 0, template: function (r, a) { }, styles: [`.mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color, var(--mat-sys-outline-variant));border-top-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color, var(--mat-sys-outline-variant));border-right-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}
`], encapsulation: 2, changeDetection: 0 });
    }
    return i;
})(), y = (() => { class i {
    static \u0275fac = function (r) { return new (r || i); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = t.\u0275\u0275defineInjector({ imports: [o, o] });
} return i; })();
export { h as a, y as b };
