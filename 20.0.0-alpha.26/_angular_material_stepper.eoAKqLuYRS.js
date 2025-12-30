import { k as C, l as S } from "@nf-internal/chunk-76BT6EPX";
import { b as p } from "@nf-internal/chunk-JWKF23VO";
import { a as x } from "@nf-internal/chunk-4UKDDKDA";
import { f as g } from "@nf-internal/chunk-M4QPD34T";
import { a as y } from "@nf-internal/chunk-4MZRILT7";
import { e as _ } from "@nf-internal/chunk-5KSFOI5Q";
import { b as m } from "@nf-internal/chunk-RXMLTE5A";
import "@nf-internal/chunk-VZR6KEPQ";
import { b as v, k as b } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import { TemplatePortal as k, CdkPortalOutlet as R, PortalModule as L } from "@angular/cdk/portal";
import { CdkStepLabel as O, CdkStepHeader as F, CdkStep as M, CdkStepper as z, CdkStepperNext as P, CdkStepperPrevious as A, CdkStepperModule as H } from "@angular/cdk/stepper";
import * as e from "@angular/core";
import { Optional as V, SkipSelf as Q, inject as l, ChangeDetectorRef as N, TemplateRef as D, ViewContainerRef as $, NgZone as B, Renderer2 as j, signal as q, QueryList as Z, EventEmitter as G, ElementRef as Y } from "@angular/core";
import { FocusMonitor as K } from "@angular/cdk/a11y";
import { NgTemplateOutlet as w } from "@angular/common";
import { _CdkPrivateStyleLoader as U, _VisuallyHiddenLoader as W } from "@angular/cdk/private";
import { Platform as J } from "@angular/cdk/platform";
import { switchMap as X, map as ee, startWith as T, takeUntil as h } from "rxjs/operators";
import "@angular/common/http";
import "@angular/platform-browser";
import "@angular/cdk/coercion";
import "@angular/cdk/layout";
import "@angular/cdk/bidi";
var te = (i, r, t) => ({ index: i, active: r, optional: t });
function ie(i, r) { if (i & 1 && e.\u0275\u0275elementContainer(0, 2), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("ngTemplateOutlet", t.iconOverrides[t.state])("ngTemplateOutletContext", e.\u0275\u0275pureFunction3(2, te, t.index, t.active, t.optional));
} }
function ae(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "span", 7), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t._getDefaultTextForState(t.state));
} }
function ne(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "span", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t._intl.completedLabel);
} }
function re(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "span", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t._intl.editableLabel);
} }
function oe(i, r) { if (i & 1 && (e.\u0275\u0275conditionalCreate(0, ne, 2, 1, "span", 8)(1, re, 2, 1, "span", 8), e.\u0275\u0275elementStart(2, "mat-icon", 7), e.\u0275\u0275text(3), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275conditional(t.state === "done" ? 0 : t.state === "edit" ? 1 : -1), e.\u0275\u0275advance(3), e.\u0275\u0275textInterpolate(t._getDefaultTextForState(t.state));
} }
function se(i, r) { if (i & 1 && e.\u0275\u0275conditionalCreate(0, ae, 2, 1, "span", 7)(1, oe, 4, 2), i & 2) {
    let t, a = e.\u0275\u0275nextContext();
    e.\u0275\u0275conditional((t = a.state) === "number" ? 0 : 1);
} }
function le(i, r) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 4), e.\u0275\u0275elementContainer(1, 9), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", r.template)); }
function pe(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "div", 4), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function ce(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "div", 5), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t._intl.optionalLabel);
} }
function de(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "div", 6), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.errorMessage);
} }
var E = ["*"];
function me(i, r) { }
function he(i, r) { if (i & 1 && (e.\u0275\u0275projection(0), e.\u0275\u0275template(1, me, 0, 0, "ng-template", 0)), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("cdkPortalOutlet", t._portal);
} }
var ue = ["animatedContainer"], I = i => ({ step: i });
function fe(i, r) { i & 1 && e.\u0275\u0275projection(0); }
function ve(i, r) { i & 1 && e.\u0275\u0275element(0, "div", 7); }
function be(i, r) { if (i & 1 && (e.\u0275\u0275elementContainer(0, 6), e.\u0275\u0275conditionalCreate(1, ve, 1, 0, "div", 7)), i & 2) {
    let t = r.$implicit, a = r.$index, n = r.$count;
    e.\u0275\u0275nextContext(2);
    let o = e.\u0275\u0275reference(4);
    e.\u0275\u0275property("ngTemplateOutlet", o)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(3, I, t)), e.\u0275\u0275advance(), e.\u0275\u0275conditional(a !== n - 1 ? 1 : -1);
} }
function _e(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "div", 8, 1), e.\u0275\u0275elementContainer(2, 9), e.\u0275\u0275elementEnd()), i & 2) {
    let t = r.$implicit, a = r.$index, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap("mat-horizontal-stepper-content-" + n._getAnimationDirection(a)), e.\u0275\u0275property("id", n._getStepContentId(a)), e.\u0275\u0275attribute("aria-labelledby", n._getStepLabelId(a))("inert", n.selectedIndex === a ? null : ""), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngTemplateOutlet", t.content);
} }
function ge(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "div", 2)(1, "div", 3), e.\u0275\u0275repeaterCreate(2, be, 2, 5, null, null, e.\u0275\u0275repeaterTrackByIdentity), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "div", 4), e.\u0275\u0275repeaterCreate(5, _e, 3, 6, "div", 5, e.\u0275\u0275repeaterTrackByIdentity), e.\u0275\u0275elementEnd()()), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(2), e.\u0275\u0275repeater(t.steps), e.\u0275\u0275advance(3), e.\u0275\u0275repeater(t.steps);
} }
function ye(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "div", 10), e.\u0275\u0275elementContainer(1, 6), e.\u0275\u0275elementStart(2, "div", 11, 1)(4, "div", 12)(5, "div", 13), e.\u0275\u0275elementContainer(6, 9), e.\u0275\u0275elementEnd()()()()), i & 2) {
    let t = r.$implicit, a = r.$index, n = r.$index, o = r.$count, s = e.\u0275\u0275nextContext(2), d = e.\u0275\u0275reference(4);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", d)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(10, I, t)), e.\u0275\u0275advance(), e.\u0275\u0275classProp("mat-stepper-vertical-line", n !== o - 1)("mat-vertical-content-container-active", s.selectedIndex === a), e.\u0275\u0275attribute("inert", s.selectedIndex === a ? null : ""), e.\u0275\u0275advance(2), e.\u0275\u0275property("id", s._getStepContentId(a)), e.\u0275\u0275attribute("aria-labelledby", s._getStepLabelId(a)), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngTemplateOutlet", t.content);
} }
function xe(i, r) { if (i & 1 && e.\u0275\u0275repeaterCreate(0, ye, 7, 12, "div", 10, e.\u0275\u0275repeaterTrackByIdentity), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275repeater(t.steps);
} }
function Ce(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "mat-step-header", 14), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).step; return e.\u0275\u0275resetView(n.select()); })("keydown", function (n) { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(o._onKeydown(n)); }), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = r.step, a = e.\u0275\u0275nextContext();
    e.\u0275\u0275classProp("mat-horizontal-stepper-header", a.orientation === "horizontal")("mat-vertical-stepper-header", a.orientation === "vertical"), e.\u0275\u0275property("tabIndex", a._getFocusIndex() === t.index() ? 0 : -1)("id", a._getStepLabelId(t.index()))("index", t.index())("state", t.indicatorType())("label", t.stepLabel || t.label)("selected", t.isSelected())("active", t.isNavigable())("optional", t.optional)("errorMessage", t.errorMessage)("iconOverrides", a._iconOverrides)("disableRipple", a.disableRipple || !t.isNavigable())("color", t.color || a.color), e.\u0275\u0275attribute("aria-posinset", t.index() + 1)("aria-setsize", a.steps.length)("aria-controls", a._getStepContentId(t.index()))("aria-selected", t.isSelected())("aria-label", t.ariaLabel || null)("aria-labelledby", !t.ariaLabel && t.ariaLabelledby ? t.ariaLabelledby : null)("aria-disabled", t.isNavigable() ? null : !0);
} }
var u = (() => { class i extends O {
    static \u0275fac = (() => { let t; return function (n) { return (t || (t = e.\u0275\u0275getInheritedFactory(i)))(n || i); }; })();
    static \u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["", "matStepLabel", ""]], features: [e.\u0275\u0275InheritDefinitionFeature] });
} return i; })(), c = (() => { class i {
    changes = new b;
    optionalLabel = "Optional";
    completedLabel = "Completed";
    editableLabel = "Editable";
    static \u0275fac = function (a) { return new (a || i); };
    static \u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" });
} return i; })();
function Se(i) { return i || new c; }
var Me = { provide: c, deps: [[new V, new Q, c]], useFactory: Se }, f = (() => {
    class i extends F {
        _intl = l(c);
        _focusMonitor = l(K);
        _intlSubscription;
        state;
        label;
        errorMessage;
        iconOverrides;
        index;
        selected;
        active;
        optional;
        disableRipple;
        color;
        constructor() { super(); let t = l(U); t.load(y), t.load(W); let a = l(N); this._intlSubscription = this._intl.changes.subscribe(() => a.markForCheck()); }
        ngAfterViewInit() { this._focusMonitor.monitor(this._elementRef, !0); }
        ngOnDestroy() { this._intlSubscription.unsubscribe(), this._focusMonitor.stopMonitoring(this._elementRef); }
        focus(t, a) { t ? this._focusMonitor.focusVia(this._elementRef, t, a) : this._elementRef.nativeElement.focus(a); }
        _stringLabel() { return this.label instanceof u ? null : this.label; }
        _templateLabel() { return this.label instanceof u ? this.label : null; }
        _getHostElement() { return this._elementRef.nativeElement; }
        _getDefaultTextForState(t) { return t == "number" ? `${this.index + 1}` : t == "edit" ? "create" : t == "error" ? "warning" : t; }
        _hasEmptyLabel() { return !this._stringLabel() && !this._templateLabel() && !this._hasOptionalLabel() && !this._hasErrorLabel(); }
        _hasOptionalLabel() { return this.optional && this.state !== "error"; }
        _hasErrorLabel() { return this.state === "error"; }
        static \u0275fac = function (a) { return new (a || i); };
        static \u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["mat-step-header"]], hostAttrs: ["role", "tab", 1, "mat-step-header"], hostVars: 4, hostBindings: function (a, n) { a & 2 && (e.\u0275\u0275classMap("mat-" + (n.color || "primary")), e.\u0275\u0275classProp("mat-step-header-empty-label", n._hasEmptyLabel())); }, inputs: { state: "state", label: "label", errorMessage: "errorMessage", iconOverrides: "iconOverrides", index: "index", selected: "selected", active: "active", optional: "optional", disableRipple: "disableRipple", color: "color" }, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 17, consts: [["matRipple", "", 1, "mat-step-header-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-step-label"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"], ["aria-hidden", "true"], [1, "cdk-visually-hidden"], [3, "ngTemplateOutlet"]], template: function (a, n) { if (a & 1 && (e.\u0275\u0275element(0, "div", 0), e.\u0275\u0275elementStart(1, "div")(2, "div", 1), e.\u0275\u0275conditionalCreate(3, ie, 1, 6, "ng-container", 2)(4, se, 2, 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(5, "div", 3), e.\u0275\u0275conditionalCreate(6, le, 2, 1, "div", 4)(7, pe, 2, 1, "div", 4), e.\u0275\u0275conditionalCreate(8, ce, 2, 1, "div", 5), e.\u0275\u0275conditionalCreate(9, de, 2, 1, "div", 6), e.\u0275\u0275elementEnd()), a & 2) {
                let o;
                e.\u0275\u0275property("matRippleTrigger", n._getHostElement())("matRippleDisabled", n.disableRipple), e.\u0275\u0275advance(), e.\u0275\u0275classMap(e.\u0275\u0275interpolate1("mat-step-icon-state-", n.state, " mat-step-icon")), e.\u0275\u0275classProp("mat-step-icon-selected", n.selected), e.\u0275\u0275advance(2), e.\u0275\u0275conditional(n.iconOverrides && n.iconOverrides[n.state] ? 3 : 4), e.\u0275\u0275advance(2), e.\u0275\u0275classProp("mat-step-label-active", n.active)("mat-step-label-selected", n.selected)("mat-step-label-error", n.state == "error"), e.\u0275\u0275advance(), e.\u0275\u0275conditional((o = n._templateLabel()) ? 6 : n._stringLabel() ? 7 : -1, o), e.\u0275\u0275advance(2), e.\u0275\u0275conditional(n._hasOptionalLabel() ? 8 : -1), e.\u0275\u0275advance(), e.\u0275\u0275conditional(n._hasErrorLabel() ? 9 : -1);
            } }, dependencies: [g, w, C], styles: [`.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium))}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium))}@media(hover: none){.mat-step-header:hover{background:none}}@media(forced-colors: active){.mat-step-header{outline:solid 1px}.mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.mat-step-header[aria-disabled=true]{outline-color:GrayText}.mat-step-header[aria-disabled=true] .mat-step-label,.mat-step-header[aria-disabled=true] .mat-step-icon,.mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));background-color:var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant))}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color, transparent);color:var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error))}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));font-size:var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size))}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight))}.mat-step-header-empty-label .mat-step-label{min-width:0}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary))}
`], encapsulation: 2, changeDetection: 0 });
    }
    return i;
})(), ze = (() => { class i {
    templateRef = l(D);
    name;
    constructor() { }
    static \u0275fac = function (a) { return new (a || i); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["ng-template", "matStepperIcon", ""]], inputs: { name: [0, "matStepperIcon", "name"] } });
} return i; })(), De = (() => { class i {
    _template = l(D);
    constructor() { }
    static \u0275fac = function (a) { return new (a || i); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["ng-template", "matStepContent", ""]] });
} return i; })(), we = (() => { class i extends M {
    _errorStateMatcher = l(p, { skipSelf: !0 });
    _viewContainerRef = l($);
    _isSelected = v.EMPTY;
    stepLabel = void 0;
    color;
    _lazyContent;
    _portal;
    ngAfterContentInit() { this._isSelected = this._stepper.steps.changes.pipe(X(() => this._stepper.selectionChange.pipe(ee(t => t.selectedStep === this), T(this._stepper.selected === this)))).subscribe(t => { t && this._lazyContent && !this._portal && (this._portal = new k(this._lazyContent._template, this._viewContainerRef)); }); }
    ngOnDestroy() { this._isSelected.unsubscribe(); }
    isErrorState(t, a) { let n = this._errorStateMatcher.isErrorState(t, a), o = !!(t && t.invalid && this.interacted); return n || o; }
    static \u0275fac = (() => { let t; return function (n) { return (t || (t = e.\u0275\u0275getInheritedFactory(i)))(n || i); }; })();
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["mat-step"]], contentQueries: function (a, n, o) { if (a & 1 && (e.\u0275\u0275contentQuery(o, u, 5), e.\u0275\u0275contentQuery(o, De, 5)), a & 2) {
            let s;
            e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (n.stepLabel = s.first), e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (n._lazyContent = s.first);
        } }, hostAttrs: ["hidden", ""], inputs: { color: "color" }, exportAs: ["matStep"], features: [e.\u0275\u0275ProvidersFeature([{ provide: p, useExisting: i }, { provide: M, useExisting: i }]), e.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: E, decls: 1, vars: 0, consts: [[3, "cdkPortalOutlet"]], template: function (a, n) { a & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275template(0, he, 2, 1, "ng-template")); }, dependencies: [R], encapsulation: 2, changeDetection: 0 });
} return i; })(), Te = (() => {
    class i extends z {
        _ngZone = l(B);
        _renderer = l(j);
        _animationsDisabled = _();
        _cleanupTransition;
        _isAnimating = q(!1);
        _stepHeader = void 0;
        _animatedContainers;
        _steps = void 0;
        steps = new Z;
        _icons;
        animationDone = new G;
        disableRipple;
        color;
        labelPosition = "end";
        headerPosition = "top";
        _iconOverrides = {};
        get animationDuration() { return this._animationDuration; }
        set animationDuration(t) { this._animationDuration = /^\d+$/.test(t) ? t + "ms" : t; }
        _animationDuration = "";
        _isServer = !l(J).isBrowser;
        constructor() { super(); let a = l(Y).nativeElement.nodeName.toLowerCase(); this.orientation = a === "mat-vertical-stepper" ? "vertical" : "horizontal"; }
        ngAfterContentInit() { super.ngAfterContentInit(), this._icons.forEach(({ name: t, templateRef: a }) => this._iconOverrides[t] = a), this.steps.changes.pipe(h(this._destroyed)).subscribe(() => this._stateChanged()), this.selectedIndexChange.pipe(h(this._destroyed)).subscribe(() => { let t = this._getAnimationDuration(); t === "0ms" || t === "0s" ? this._onAnimationDone() : this._isAnimating.set(!0); }), this._ngZone.runOutsideAngular(() => { this._animationsDisabled || setTimeout(() => { this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"), this._cleanupTransition = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._handleTransitionend); }, 200); }); }
        ngAfterViewInit() { if (super.ngAfterViewInit(), typeof queueMicrotask == "function") {
            let t = !1;
            this._animatedContainers.changes.pipe(T(null), h(this._destroyed)).subscribe(() => queueMicrotask(() => { t || (t = !0, this.animationDone.emit()), this._stateChanged(); }));
        } }
        ngOnDestroy() { super.ngOnDestroy(), this._cleanupTransition?.(); }
        _getAnimationDuration() { return this._animationsDisabled ? "0ms" : this.animationDuration ? this.animationDuration : this.orientation === "horizontal" ? "500ms" : "225ms"; }
        _handleTransitionend = t => { let a = t.target; if (!a)
            return; let n = this.orientation === "horizontal" && t.propertyName === "transform" && a.classList.contains("mat-horizontal-stepper-content-current"), o = this.orientation === "vertical" && t.propertyName === "grid-template-rows" && a.classList.contains("mat-vertical-content-container-active"); (n || o) && this._animatedContainers.find(d => d.nativeElement === a) && this._onAnimationDone(); };
        _onAnimationDone() { this._isAnimating.set(!1), this.animationDone.emit(); }
        static \u0275fac = function (a) { return new (a || i); };
        static \u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]], contentQueries: function (a, n, o) { if (a & 1 && (e.\u0275\u0275contentQuery(o, we, 5), e.\u0275\u0275contentQuery(o, ze, 5)), a & 2) {
                let s;
                e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (n._steps = s), e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (n._icons = s);
            } }, viewQuery: function (a, n) { if (a & 1 && (e.\u0275\u0275viewQuery(f, 5), e.\u0275\u0275viewQuery(ue, 5)), a & 2) {
                let o;
                e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (n._stepHeader = o), e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (n._animatedContainers = o);
            } }, hostAttrs: ["role", "tablist"], hostVars: 15, hostBindings: function (a, n) { a & 2 && (e.\u0275\u0275attribute("aria-orientation", n.orientation), e.\u0275\u0275styleProp("--mat-stepper-animation-duration", n._getAnimationDuration()), e.\u0275\u0275classProp("mat-stepper-horizontal", n.orientation === "horizontal")("mat-stepper-vertical", n.orientation === "vertical")("mat-stepper-label-position-end", n.orientation === "horizontal" && n.labelPosition == "end")("mat-stepper-label-position-bottom", n.orientation === "horizontal" && n.labelPosition == "bottom")("mat-stepper-header-position-bottom", n.headerPosition === "bottom")("mat-stepper-animating", n._isAnimating())); }, inputs: { disableRipple: "disableRipple", color: "color", labelPosition: "labelPosition", headerPosition: "headerPosition", animationDuration: "animationDuration" }, outputs: { animationDone: "animationDone" }, exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"], features: [e.\u0275\u0275ProvidersFeature([{ provide: z, useExisting: i }]), e.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: E, decls: 5, vars: 2, consts: [["stepTemplate", ""], ["animatedContainer", ""], [1, "mat-horizontal-stepper-wrapper"], [1, "mat-horizontal-stepper-header-container"], [1, "mat-horizontal-content-container"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id", "class"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "click", "keydown", "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color"]], template: function (a, n) { if (a & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275conditionalCreate(0, fe, 1, 0), e.\u0275\u0275conditionalCreate(1, ge, 7, 0, "div", 2)(2, xe, 2, 0), e.\u0275\u0275template(3, Ce, 1, 23, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor)), a & 2) {
                let o;
                e.\u0275\u0275conditional(n._isServer ? 0 : -1), e.\u0275\u0275advance(), e.\u0275\u0275conditional((o = n.orientation) === "horizontal" ? 1 : o === "vertical" ? 2 : -1);
            } }, dependencies: [w, f], styles: [`.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));background:var(--mat-stepper-container-color, var(--mat-sys-surface))}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height, 72px)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon{margin:0}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{visibility:hidden;overflow:hidden;outline:0;height:0}.mat-stepper-animations-enabled .mat-horizontal-stepper-content{transition:transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous{transform:translate3d(-100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next{transform:translate3d(100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{visibility:visible;transform:none;height:auto}.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{overflow:visible}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}@media(forced-colors: active){.mat-horizontal-content-container{outline:solid 1px}}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{display:grid;grid-template-rows:0fr;grid-template-columns:100%;margin-left:36px;border:0;position:relative}.mat-stepper-animations-enabled .mat-vertical-content-container{transition:grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1)}.mat-vertical-content-container.mat-vertical-content-container-active{grid-template-rows:1fr}.mat-step:last-child .mat-vertical-content-container{border:none}@media(forced-colors: active){.mat-vertical-content-container{outline:solid 1px}}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}@supports not (grid-template-rows: 0fr){.mat-vertical-content-container{height:0}.mat-vertical-content-container.mat-vertical-content-container-active{height:auto}}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color, var(--mat-sys-outline));top:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0;visibility:hidden}.mat-stepper-animations-enabled .mat-vertical-stepper-content{transition:visibility var(--mat-stepper-animation-duration, 0) linear}.mat-vertical-content-container-active>.mat-vertical-stepper-content{visibility:visible}.mat-vertical-content{padding:0 24px 24px 24px}
`], encapsulation: 2, changeDetection: 0 });
    }
    return i;
})(), st = (() => { class i extends P {
    static \u0275fac = (() => { let t; return function (n) { return (t || (t = e.\u0275\u0275getInheritedFactory(i)))(n || i); }; })();
    static \u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["button", "matStepperNext", ""]], hostAttrs: [1, "mat-stepper-next"], hostVars: 1, hostBindings: function (a, n) { a & 2 && e.\u0275\u0275domProperty("type", n.type); }, features: [e.\u0275\u0275InheritDefinitionFeature] });
} return i; })(), lt = (() => { class i extends A {
    static \u0275fac = (() => { let t; return function (n) { return (t || (t = e.\u0275\u0275getInheritedFactory(i)))(n || i); }; })();
    static \u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["button", "matStepperPrevious", ""]], hostAttrs: [1, "mat-stepper-previous"], hostVars: 1, hostBindings: function (a, n) { a & 2 && e.\u0275\u0275domProperty("type", n.type); }, features: [e.\u0275\u0275InheritDefinitionFeature] });
} return i; })(), pt = (() => { class i {
    static \u0275fac = function (a) { return new (a || i); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = e.\u0275\u0275defineInjector({ providers: [Me, p], imports: [m, L, H, S, x, Te, f, m] });
} return i; })(), ct = { horizontalStepTransition: { type: 7, name: "horizontalStepTransition", definitions: [{ type: 0, name: "previous", styles: { type: 6, styles: { transform: "translate3d(-100%, 0, 0)", visibility: "hidden" }, offset: null } }, { type: 0, name: "current", styles: { type: 6, styles: { transform: "none", visibility: "inherit" }, offset: null } }, { type: 0, name: "next", styles: { type: 6, styles: { transform: "translate3d(100%, 0, 0)", visibility: "hidden" }, offset: null } }, { type: 1, expr: "* => *", animation: { type: 3, steps: [{ type: 4, styles: null, timings: "{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)" }, { type: 11, selector: "@*", animation: { type: 9, options: null }, options: { optional: !0 } }], options: null }, options: { params: { animationDuration: "500ms" } } }], options: {} }, verticalStepTransition: { type: 7, name: "verticalStepTransition", definitions: [{ type: 0, name: "previous", styles: { type: 6, styles: { height: "0px", visibility: "hidden" }, offset: null } }, { type: 0, name: "next", styles: { type: 6, styles: { height: "0px", visibility: "hidden" }, offset: null } }, { type: 0, name: "current", styles: { type: 6, styles: { height: "*", visibility: "inherit" }, offset: null } }, { type: 1, expr: "* <=> current", animation: { type: 3, steps: [{ type: 4, styles: null, timings: "{{animationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)" }, { type: 11, selector: "@*", animation: { type: 9, options: null }, options: { optional: !0 } }], options: null }, options: { params: { animationDuration: "225ms" } } }], options: {} } };
export { Me as MAT_STEPPER_INTL_PROVIDER, Se as MAT_STEPPER_INTL_PROVIDER_FACTORY, we as MatStep, De as MatStepContent, f as MatStepHeader, u as MatStepLabel, Te as MatStepper, ze as MatStepperIcon, c as MatStepperIntl, pt as MatStepperModule, st as MatStepperNext, lt as MatStepperPrevious, ct as matStepperAnimations };
