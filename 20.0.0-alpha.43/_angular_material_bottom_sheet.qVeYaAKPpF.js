import { e as p } from "@nf-internal/chunk-5KSFOI5Q";
import { b } from "@nf-internal/chunk-RXMLTE5A";
import { j as v } from "@nf-internal/chunk-VZR6KEPQ";
import { k as g } from "@nf-internal/chunk-STIBVO4O";
import { a as c, b as _ } from "@nf-internal/chunk-FJYW2LMB";
import { CdkDialogContainer as C, Dialog as B, DialogModule as w } from "@angular/cdk/dialog";
import { CdkPortalOutlet as M, PortalModule as D } from "@angular/cdk/portal";
import * as n from "@angular/core";
import { EventEmitter as T, inject as l, InjectionToken as x, Injector as A } from "@angular/core";
import { BreakpointObserver as R, Breakpoints as r } from "@angular/cdk/layout";
import { createBlockScrollStrategy as E, createGlobalPositionStrategy as O } from "@angular/cdk/overlay";
import { ESCAPE as I, hasModifierKey as F } from "@angular/cdk/keycodes";
import { filter as h, take as f } from "rxjs/operators";
import "@angular/cdk/a11y";
import "@angular/cdk/bidi";
function L(i, m) { }
var y = "_mat-bottom-sheet-enter", S = "_mat-bottom-sheet-exit", H = (() => {
    class i extends C {
        _breakpointSubscription;
        _animationsDisabled = p();
        _animationState = "void";
        _animationStateChanged = new T;
        _destroyed;
        constructor() { super(); let e = l(R); this._breakpointSubscription = e.observe([r.Medium, r.Large, r.XLarge]).subscribe(() => { let o = this._elementRef.nativeElement.classList; o.toggle("mat-bottom-sheet-container-medium", e.isMatched(r.Medium)), o.toggle("mat-bottom-sheet-container-large", e.isMatched(r.Large)), o.toggle("mat-bottom-sheet-container-xlarge", e.isMatched(r.XLarge)); }); }
        enter() { this._destroyed || (this._animationState = "visible", this._changeDetectorRef.markForCheck(), this._changeDetectorRef.detectChanges(), this._animationsDisabled && this._simulateAnimation(y)); }
        exit() { this._destroyed || (this._elementRef.nativeElement.setAttribute("mat-exit", ""), this._animationState = "hidden", this._changeDetectorRef.markForCheck(), this._animationsDisabled && this._simulateAnimation(S)); }
        ngOnDestroy() { super.ngOnDestroy(), this._breakpointSubscription.unsubscribe(), this._destroyed = !0; }
        _simulateAnimation(e) { this._ngZone.run(() => { this._handleAnimationEvent(!0, e), setTimeout(() => this._handleAnimationEvent(!1, e)); }); }
        _trapFocus() { super._trapFocus({ preventScroll: !0 }); }
        _handleAnimationEvent(e, o) { let t = o === y; (t || o === S) && this._animationStateChanged.emit({ toState: t ? "visible" : "hidden", phase: e ? "start" : "done" }); }
        static \u0275fac = function (o) { return new (o || i); };
        static \u0275cmp = n.\u0275\u0275defineComponent({ type: i, selectors: [["mat-bottom-sheet-container"]], hostAttrs: ["tabindex", "-1", 1, "mat-bottom-sheet-container"], hostVars: 9, hostBindings: function (o, t) { o & 1 && n.\u0275\u0275listener("animationstart", function (s) { return t._handleAnimationEvent(!0, s.animationName); })("animationend", function (s) { return t._handleAnimationEvent(!1, s.animationName); })("animationcancel", function (s) { return t._handleAnimationEvent(!1, s.animationName); }), o & 2 && (n.\u0275\u0275attribute("role", t._config.role)("aria-modal", t._config.ariaModal)("aria-label", t._config.ariaLabel), n.\u0275\u0275classProp("mat-bottom-sheet-container-animations-enabled", !t._animationsDisabled)("mat-bottom-sheet-container-enter", t._animationState === "visible")("mat-bottom-sheet-container-exit", t._animationState === "hidden")); }, features: [n.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function (o, t) { o & 1 && n.\u0275\u0275template(0, L, 0, 0, "ng-template", 0); }, dependencies: [M], styles: [`@keyframes _mat-bottom-sheet-enter{from{transform:translateY(100%)}to{transform:none}}@keyframes _mat-bottom-sheet-exit{from{transform:none}to{transform:translateY(100%)}}.mat-bottom-sheet-container{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto;position:relative;background:var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));color:var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));font-family:var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));line-height:var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));font-weight:var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking))}@media(forced-colors: active){.mat-bottom-sheet-container{outline:1px solid}}.mat-bottom-sheet-container-animations-enabled{transform:translateY(100%)}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter{animation:_mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit{animation:_mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:var(--mat-bottom-sheet-container-shape, 28px);border-top-right-radius:var(--mat-bottom-sheet-container-shape, 28px)}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}
`], encapsulation: 2 });
    }
    return i;
})(), j = new x("MatBottomSheetData"), u = class {
    viewContainerRef;
    panelClass;
    direction;
    data = null;
    hasBackdrop = !0;
    backdropClass;
    disableClose = !1;
    ariaLabel = null;
    ariaModal = !1;
    closeOnNavigation = !0;
    autoFocus = "first-tabbable";
    restoreFocus = !0;
    scrollStrategy;
    height = "";
    minHeight;
    maxHeight;
}, d = class {
    _ref;
    get instance() { return this._ref.componentInstance; }
    get componentRef() { return this._ref.componentRef; }
    containerInstance;
    disableClose;
    _afterOpened = new g;
    _result;
    _closeFallbackTimeout;
    constructor(m, e, o) { this._ref = m, this.containerInstance = o, this.disableClose = e.disableClose, o._animationStateChanged.pipe(h(t => t.phase === "done" && t.toState === "visible"), f(1)).subscribe(() => { this._afterOpened.next(), this._afterOpened.complete(); }), o._animationStateChanged.pipe(h(t => t.phase === "done" && t.toState === "hidden"), f(1)).subscribe(() => { clearTimeout(this._closeFallbackTimeout), this._ref.close(this._result); }), m.overlayRef.detachments().subscribe(() => { this._ref.close(this._result); }), v(this.backdropClick(), this.keydownEvents().pipe(h(t => t.keyCode === I))).subscribe(t => { !this.disableClose && (t.type !== "keydown" || !F(t)) && (t.preventDefault(), this.dismiss()); }); }
    dismiss(m) { this.containerInstance && (this.containerInstance._animationStateChanged.pipe(h(e => e.phase === "start"), f(1)).subscribe(() => { this._closeFallbackTimeout = setTimeout(() => this._ref.close(this._result), 500), this._ref.overlayRef.detachBackdrop(); }), this._result = m, this.containerInstance.exit(), this.containerInstance = null); }
    afterDismissed() { return this._ref.closed; }
    afterOpened() { return this._afterOpened; }
    backdropClick() { return this._ref.backdropClick; }
    keydownEvents() { return this._ref.keydownEvents; }
}, N = new x("mat-bottom-sheet-default-options"), z = (() => { class i {
    _injector = l(A);
    _parentBottomSheet = l(i, { optional: !0, skipSelf: !0 });
    _animationsDisabled = p();
    _defaultOptions = l(N, { optional: !0 });
    _bottomSheetRefAtThisLevel = null;
    _dialog = l(B);
    get _openedBottomSheetRef() { let e = this._parentBottomSheet; return e ? e._openedBottomSheetRef : this._bottomSheetRefAtThisLevel; }
    set _openedBottomSheetRef(e) { this._parentBottomSheet ? this._parentBottomSheet._openedBottomSheetRef = e : this._bottomSheetRefAtThisLevel = e; }
    constructor() { }
    open(e, o) { let t = c(c({}, this._defaultOptions || new u), o), a; return this._dialog.open(e, _(c({}, t), { disableClose: !0, closeOnOverlayDetachments: !1, maxWidth: "100%", container: H, scrollStrategy: t.scrollStrategy || E(this._injector), positionStrategy: O(this._injector).centerHorizontally().bottom("0"), disableAnimations: this._animationsDisabled, templateContext: () => ({ bottomSheetRef: a }), providers: (s, P, k) => (a = new d(s, t, k), [{ provide: d, useValue: a }, { provide: j, useValue: t.data }]) })), a.afterDismissed().subscribe(() => { this._openedBottomSheetRef === a && (this._openedBottomSheetRef = null); }), this._openedBottomSheetRef ? (this._openedBottomSheetRef.afterDismissed().subscribe(() => a.containerInstance?.enter()), this._openedBottomSheetRef.dismiss()) : a.containerInstance.enter(), this._openedBottomSheetRef = a, a; }
    dismiss(e) { this._openedBottomSheetRef && this._openedBottomSheetRef.dismiss(e); }
    ngOnDestroy() { this._bottomSheetRefAtThisLevel && this._bottomSheetRefAtThisLevel.dismiss(); }
    static \u0275fac = function (o) { return new (o || i); };
    static \u0275prov = n.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" });
} return i; })(), at = (() => { class i {
    static \u0275fac = function (o) { return new (o || i); };
    static \u0275mod = n.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = n.\u0275\u0275defineInjector({ providers: [z], imports: [w, b, D, b] });
} return i; })(), st = { bottomSheetState: { type: 7, name: "state", definitions: [{ type: 0, name: "void, hidden", styles: { type: 6, styles: { transform: "translateY(100%)" }, offset: null } }, { type: 0, name: "visible", styles: { type: 6, styles: { transform: "translateY(0%)" }, offset: null } }, { type: 1, expr: "visible => void, visible => hidden", animation: { type: 3, steps: [{ type: 4, styles: null, timings: "375ms cubic-bezier(0.4, 0, 1, 1)" }, { type: 11, selector: "@*", animation: { type: 9, options: null }, options: { optional: !0 } }], options: null }, options: null }, { type: 1, expr: "void => visible", animation: { type: 3, steps: [{ type: 4, styles: null, timings: "195ms cubic-bezier(0, 0, 0.2, 1)" }, { type: 11, selector: "@*", animation: { type: 9, options: null }, options: { optional: !0 } }], options: null }, options: null }], options: {} } };
export { j as MAT_BOTTOM_SHEET_DATA, N as MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, z as MatBottomSheet, u as MatBottomSheetConfig, H as MatBottomSheetContainer, at as MatBottomSheetModule, d as MatBottomSheetRef, st as matBottomSheetAnimations };
