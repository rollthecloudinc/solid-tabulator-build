import { a as b } from "@nf-internal/chunk-HOKO2ONL";
import { a as u } from "@nf-internal/chunk-ARUHDGKS";
import { a as f } from "@nf-internal/chunk-4UKDDKDA";
import { f as p } from "@nf-internal/chunk-M4QPD34T";
import { a as h } from "@nf-internal/chunk-4MZRILT7";
import { b as g } from "@nf-internal/chunk-RXMLTE5A";
import { k as d } from "@nf-internal/chunk-STIBVO4O";
import { _IdGenerator as _ } from "@angular/cdk/a11y";
import { ENTER as w, SPACE as M, hasModifierKey as R } from "@angular/cdk/keycodes";
import * as t from "@angular/core";
import { InjectionToken as v, inject as l, booleanAttribute as y, ElementRef as S, ChangeDetectorRef as O, signal as D, EventEmitter as E, isSignal as I } from "@angular/core";
import { _CdkPrivateStyleLoader as V, _VisuallyHiddenLoader as T } from "@angular/cdk/private";
var A = ["*", [["mat-option"], ["ng-container"]]], P = ["*", "mat-option, ng-container"], j = ["text"], N = [[["mat-icon"]], "*"], z = ["mat-icon", "*"];
function F(o, n) { if (o & 1 && t.\u0275\u0275element(0, "mat-pseudo-checkbox", 1), o & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("disabled", e.disabled)("state", e.selected ? "checked" : "unchecked");
} }
function H(o, n) { if (o & 1 && t.\u0275\u0275element(0, "mat-pseudo-checkbox", 3), o & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("disabled", e.disabled);
} }
function B(o, n) { if (o & 1 && (t.\u0275\u0275elementStart(0, "span", 4), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), o & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate1("(", e.group.label, ")");
} }
var x = new v("MAT_OPTION_PARENT_COMPONENT"), k = new v("MatOptgroup"), it = (() => {
    class o {
        label;
        disabled = !1;
        _labelId = l(_).getId("mat-optgroup-label-");
        _inert;
        constructor() { let e = l(x, { optional: !0 }); this._inert = e?.inertGroups ?? !1; }
        static \u0275fac = function (a) { return new (a || o); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: o, selectors: [["mat-optgroup"]], hostAttrs: [1, "mat-mdc-optgroup"], hostVars: 3, hostBindings: function (a, i) { a & 2 && t.\u0275\u0275attribute("role", i._inert ? null : "group")("aria-disabled", i._inert ? null : i.disabled.toString())("aria-labelledby", i._inert ? null : i._labelId); }, inputs: { label: "label", disabled: [2, "disabled", "disabled", y] }, exportAs: ["matOptgroup"], features: [t.\u0275\u0275ProvidersFeature([{ provide: k, useExisting: o }])], ngContentSelectors: P, decls: 5, vars: 4, consts: [["role", "presentation", 1, "mat-mdc-optgroup-label", 3, "id"], [1, "mdc-list-item__primary-text"]], template: function (a, i) { a & 1 && (t.\u0275\u0275projectionDef(A), t.\u0275\u0275domElementStart(0, "span", 0)(1, "span", 1), t.\u0275\u0275text(2), t.\u0275\u0275projection(3), t.\u0275\u0275domElementEnd()(), t.\u0275\u0275projection(4, 1)), a & 2 && (t.\u0275\u0275classProp("mdc-list-item--disabled", i.disabled), t.\u0275\u0275domProperty("id", i._labelId), t.\u0275\u0275advance(2), t.\u0275\u0275textInterpolate1("", i.label, " ")); }, styles: [`.mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal;color:inherit}
`], encapsulation: 2, changeDetection: 0 });
    }
    return o;
})(), m = class {
    source;
    isUserInput;
    constructor(n, e = !1) { this.source = n, this.isUserInput = e; }
}, C = (() => {
    class o {
        _element = l(S);
        _changeDetectorRef = l(O);
        _parent = l(x, { optional: !0 });
        group = l(k, { optional: !0 });
        _signalDisableRipple = !1;
        _selected = !1;
        _active = !1;
        _mostRecentViewValue = "";
        get multiple() { return this._parent && this._parent.multiple; }
        get selected() { return this._selected; }
        value;
        id = l(_).getId("mat-option-");
        get disabled() { return this.group && this.group.disabled || this._disabled(); }
        set disabled(e) { this._disabled.set(e); }
        _disabled = D(!1);
        get disableRipple() { return this._signalDisableRipple ? this._parent.disableRipple() : !!this._parent?.disableRipple; }
        get hideSingleSelectionIndicator() { return !!(this._parent && this._parent.hideSingleSelectionIndicator); }
        onSelectionChange = new E;
        _text;
        _stateChanges = new d;
        constructor() { let e = l(V); e.load(h), e.load(T), this._signalDisableRipple = !!this._parent && I(this._parent.disableRipple); }
        get active() { return this._active; }
        get viewValue() { return (this._text?.nativeElement.textContent || "").trim(); }
        select(e = !0) { this._selected || (this._selected = !0, this._changeDetectorRef.markForCheck(), e && this._emitSelectionChangeEvent()); }
        deselect(e = !0) { this._selected && (this._selected = !1, this._changeDetectorRef.markForCheck(), e && this._emitSelectionChangeEvent()); }
        focus(e, a) { let i = this._getHostElement(); typeof i.focus == "function" && i.focus(a); }
        setActiveStyles() { this._active || (this._active = !0, this._changeDetectorRef.markForCheck()); }
        setInactiveStyles() { this._active && (this._active = !1, this._changeDetectorRef.markForCheck()); }
        getLabel() { return this.viewValue; }
        _handleKeydown(e) { (e.keyCode === w || e.keyCode === M) && !R(e) && (this._selectViaInteraction(), e.preventDefault()); }
        _selectViaInteraction() { this.disabled || (this._selected = this.multiple ? !this._selected : !0, this._changeDetectorRef.markForCheck(), this._emitSelectionChangeEvent(!0)); }
        _getTabIndex() { return this.disabled ? "-1" : "0"; }
        _getHostElement() { return this._element.nativeElement; }
        ngAfterViewChecked() { if (this._selected) {
            let e = this.viewValue;
            e !== this._mostRecentViewValue && (this._mostRecentViewValue && this._stateChanges.next(), this._mostRecentViewValue = e);
        } }
        ngOnDestroy() { this._stateChanges.complete(); }
        _emitSelectionChangeEvent(e = !1) { this.onSelectionChange.emit(new m(this, e)); }
        static \u0275fac = function (a) { return new (a || o); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: o, selectors: [["mat-option"]], viewQuery: function (a, i) { if (a & 1 && t.\u0275\u0275viewQuery(j, 7), a & 2) {
                let r;
                t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (i._text = r.first);
            } }, hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"], hostVars: 11, hostBindings: function (a, i) { a & 1 && t.\u0275\u0275listener("click", function () { return i._selectViaInteraction(); })("keydown", function (s) { return i._handleKeydown(s); }), a & 2 && (t.\u0275\u0275domProperty("id", i.id), t.\u0275\u0275attribute("aria-selected", i.selected)("aria-disabled", i.disabled.toString()), t.\u0275\u0275classProp("mdc-list-item--selected", i.selected)("mat-mdc-option-multiple", i.multiple)("mat-mdc-option-active", i.active)("mdc-list-item--disabled", i.disabled)); }, inputs: { value: "value", id: "id", disabled: [2, "disabled", "disabled", y] }, outputs: { onSelectionChange: "onSelectionChange" }, exportAs: ["matOption"], ngContentSelectors: z, decls: 8, vars: 5, consts: [["text", ""], ["aria-hidden", "true", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled", "state"], [1, "mdc-list-item__primary-text"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "cdk-visually-hidden"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-mdc-option-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"]], template: function (a, i) { a & 1 && (t.\u0275\u0275projectionDef(N), t.\u0275\u0275conditionalCreate(0, F, 1, 2, "mat-pseudo-checkbox", 1), t.\u0275\u0275projection(1), t.\u0275\u0275elementStart(2, "span", 2, 0), t.\u0275\u0275projection(4, 1), t.\u0275\u0275elementEnd(), t.\u0275\u0275conditionalCreate(5, H, 1, 1, "mat-pseudo-checkbox", 3), t.\u0275\u0275conditionalCreate(6, B, 2, 1, "span", 4), t.\u0275\u0275element(7, "div", 5)), a & 2 && (t.\u0275\u0275conditional(i.multiple ? 0 : -1), t.\u0275\u0275advance(5), t.\u0275\u0275conditional(!i.multiple && i.selected && !i.hideSingleSelectionIndicator ? 5 : -1), t.\u0275\u0275advance(), t.\u0275\u0275conditional(i.group && i.group._inert ? 6 : -1), t.\u0275\u0275advance(), t.\u0275\u0275property("matRippleTrigger", i._getHostElement())("matRippleDisabled", i.disabled || i.disableRipple)); }, dependencies: [u, p], styles: [`.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:""}
`], encapsulation: 2, changeDetection: 0 });
    }
    return o;
})();
function ot(o, n, e) { if (e.length) {
    let a = n.toArray(), i = e.toArray(), r = 0;
    for (let s = 0; s < o + 1; s++)
        a[s].group && a[s].group === i[r] && r++;
    return r;
} return 0; }
function at(o, n, e, a) { return o < e ? o : o + n > e + a ? Math.max(0, o - a + n) : e; }
import * as c from "@angular/core";
import "@angular/core";
var ut = (() => { class o {
    static \u0275fac = function (a) { return new (a || o); };
    static \u0275mod = c.\u0275\u0275defineNgModule({ type: o });
    static \u0275inj = c.\u0275\u0275defineInjector({ imports: [f, g, b, C] });
} return o; })();
export { x as a, k as b, it as c, m as d, C as e, ot as f, at as g, ut as h };
