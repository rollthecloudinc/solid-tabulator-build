import { d as o } from "@nf-internal/chunk-5KSFOI5Q";
import { b as c } from "@nf-internal/chunk-RXMLTE5A";
import "@nf-internal/chunk-FJYW2LMB";
import * as e from "@angular/core";
import { InjectionToken as l, inject as m, ElementRef as p, numberAttribute as s } from "@angular/core";
import { NgTemplateOutlet as g } from "@angular/common";
import "@angular/cdk/layout";
import "@angular/cdk/a11y";
import "@angular/cdk/bidi";
var _ = ["determinateSpinner"];
function u(a, k) { if (a & 1 && (e.\u0275\u0275namespaceSVG(), e.\u0275\u0275elementStart(0, "svg", 11), e.\u0275\u0275element(1, "circle", 12), e.\u0275\u0275elementEnd()), a & 2) {
    let r = e.\u0275\u0275nextContext();
    e.\u0275\u0275attribute("viewBox", r._viewBox()), e.\u0275\u0275advance(), e.\u0275\u0275styleProp("stroke-dasharray", r._strokeCircumference(), "px")("stroke-dashoffset", r._strokeCircumference() / 2, "px")("stroke-width", r._circleStrokeWidth(), "%"), e.\u0275\u0275attribute("r", r._circleRadius());
} }
var h = new l("mat-progress-spinner-default-options", { providedIn: "root", factory: f });
function f() { return { diameter: d }; }
var d = 100, v = 10, y = (() => {
    class a {
        _elementRef = m(p);
        _noopAnimations;
        get color() { return this._color || this._defaultColor; }
        set color(r) { this._color = r; }
        _color;
        _defaultColor = "primary";
        _determinateCircle;
        constructor() { let r = m(h), t = o(), i = this._elementRef.nativeElement; this._noopAnimations = t === "di-disabled" && !!r && !r._forceAnimations, this.mode = i.nodeName.toLowerCase() === "mat-spinner" ? "indeterminate" : "determinate", !this._noopAnimations && t === "reduced-motion" && i.classList.add("mat-progress-spinner-reduced-motion"), r && (r.color && (this.color = this._defaultColor = r.color), r.diameter && (this.diameter = r.diameter), r.strokeWidth && (this.strokeWidth = r.strokeWidth)); }
        mode;
        get value() { return this.mode === "determinate" ? this._value : 0; }
        set value(r) { this._value = Math.max(0, Math.min(100, r || 0)); }
        _value = 0;
        get diameter() { return this._diameter; }
        set diameter(r) { this._diameter = r || 0; }
        _diameter = d;
        get strokeWidth() { return this._strokeWidth ?? this.diameter / 10; }
        set strokeWidth(r) { this._strokeWidth = r || 0; }
        _strokeWidth;
        _circleRadius() { return (this.diameter - v) / 2; }
        _viewBox() { let r = this._circleRadius() * 2 + this.strokeWidth; return `0 0 ${r} ${r}`; }
        _strokeCircumference() { return 2 * Math.PI * this._circleRadius(); }
        _strokeDashOffset() { return this.mode === "determinate" ? this._strokeCircumference() * (100 - this._value) / 100 : null; }
        _circleStrokeWidth() { return this.strokeWidth / this.diameter * 100; }
        static \u0275fac = function (t) { return new (t || a); };
        static \u0275cmp = e.\u0275\u0275defineComponent({ type: a, selectors: [["mat-progress-spinner"], ["mat-spinner"]], viewQuery: function (t, i) { if (t & 1 && e.\u0275\u0275viewQuery(_, 5), t & 2) {
                let n;
                e.\u0275\u0275queryRefresh(n = e.\u0275\u0275loadQuery()) && (i._determinateCircle = n.first);
            } }, hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-mdc-progress-spinner", "mdc-circular-progress"], hostVars: 18, hostBindings: function (t, i) { t & 2 && (e.\u0275\u0275attribute("aria-valuemin", 0)("aria-valuemax", 100)("aria-valuenow", i.mode === "determinate" ? i.value : null)("mode", i.mode), e.\u0275\u0275classMap("mat-" + i.color), e.\u0275\u0275styleProp("width", i.diameter, "px")("height", i.diameter, "px")("--mat-progress-spinner-size", i.diameter + "px")("--mat-progress-spinner-active-indicator-width", i.diameter + "px"), e.\u0275\u0275classProp("_mat-animation-noopable", i._noopAnimations)("mdc-circular-progress--indeterminate", i.mode === "indeterminate")); }, inputs: { color: "color", mode: "mode", value: [2, "value", "value", s], diameter: [2, "diameter", "diameter", s], strokeWidth: [2, "strokeWidth", "strokeWidth", s] }, exportAs: ["matProgressSpinner"], decls: 14, vars: 11, consts: [["circle", ""], ["determinateSpinner", ""], ["aria-hidden", "true", 1, "mdc-circular-progress__determinate-container"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__determinate-circle-graphic"], ["cx", "50%", "cy", "50%", 1, "mdc-circular-progress__determinate-circle"], ["aria-hidden", "true", 1, "mdc-circular-progress__indeterminate-container"], [1, "mdc-circular-progress__spinner-layer"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-left"], [3, "ngTemplateOutlet"], [1, "mdc-circular-progress__gap-patch"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-right"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__indeterminate-circle-graphic"], ["cx", "50%", "cy", "50%"]], template: function (t, i) { if (t & 1 && (e.\u0275\u0275template(0, u, 2, 8, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementStart(2, "div", 2, 1), e.\u0275\u0275namespaceSVG(), e.\u0275\u0275elementStart(4, "svg", 3), e.\u0275\u0275element(5, "circle", 4), e.\u0275\u0275elementEnd()(), e.\u0275\u0275namespaceHTML(), e.\u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7), e.\u0275\u0275elementContainer(9, 8), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(10, "div", 9), e.\u0275\u0275elementContainer(11, 8), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(12, "div", 10), e.\u0275\u0275elementContainer(13, 8), e.\u0275\u0275elementEnd()()()), t & 2) {
                let n = e.\u0275\u0275reference(1);
                e.\u0275\u0275advance(4), e.\u0275\u0275attribute("viewBox", i._viewBox()), e.\u0275\u0275advance(), e.\u0275\u0275styleProp("stroke-dasharray", i._strokeCircumference(), "px")("stroke-dashoffset", i._strokeDashOffset(), "px")("stroke-width", i._circleStrokeWidth(), "%"), e.\u0275\u0275attribute("r", i._circleRadius()), e.\u0275\u0275advance(4), e.\u0275\u0275property("ngTemplateOutlet", n), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngTemplateOutlet", n), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngTemplateOutlet", n);
            } }, dependencies: [g], styles: [`.mat-mdc-progress-spinner{--mat-progress-spinner-animation-multiplier: 1;display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mat-progress-spinner-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mat-progress-spinner-reduced-motion{--mat-progress-spinner-animation-multiplier: 1.25}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate calc(1568.2352941176ms*var(--mat-progress-spinner-animation-multiplier)) linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate calc(5332ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}
`], encapsulation: 2, changeDetection: 0 });
    }
    return a;
})(), D = y, I = (() => { class a {
    static \u0275fac = function (t) { return new (t || a); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: a });
    static \u0275inj = e.\u0275\u0275defineInjector({ imports: [c] });
} return a; })();
export { h as MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, f as MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, y as MatProgressSpinner, I as MatProgressSpinnerModule, D as MatSpinner };
