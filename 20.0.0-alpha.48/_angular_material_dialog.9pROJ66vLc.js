import { e as f } from "@nf-internal/chunk-5KSFOI5Q";
import { b as _ } from "@nf-internal/chunk-RXMLTE5A";
import { f as x, j as T } from "@nf-internal/chunk-KQGCPFC3";
import { k as d } from "@nf-internal/chunk-STIBVO4O";
import { a as g, b as A } from "@nf-internal/chunk-FJYW2LMB";
import { CdkDialogContainer as V, Dialog as H, DialogConfig as q, DialogModule as U } from "@angular/cdk/dialog";
import { createBlockScrollStrategy as W, createGlobalPositionStrategy as Y, OverlayModule as $ } from "@angular/cdk/overlay";
import { CdkPortalOutlet as K, PortalModule as Q } from "@angular/cdk/portal";
import * as o from "@angular/core";
import { EventEmitter as X, InjectionToken as D, inject as s, Injector as k, ElementRef as L } from "@angular/core";
import { coerceNumberProperty as O } from "@angular/cdk/coercion";
import { filter as h, take as y, startWith as Z } from "rxjs/operators";
import { ESCAPE as J, hasModifierKey as tt } from "@angular/cdk/keycodes";
import { _IdGenerator as R } from "@angular/cdk/a11y";
import * as E from "@angular/cdk/scrolling";
import "@angular/cdk/scrolling";
function et(t, n) { }
var m = class {
    viewContainerRef;
    injector;
    id;
    role = "dialog";
    panelClass = "";
    hasBackdrop = !0;
    backdropClass = "";
    disableClose = !1;
    closePredicate;
    width = "";
    height = "";
    minWidth;
    minHeight;
    maxWidth;
    maxHeight;
    position;
    data = null;
    direction;
    ariaDescribedBy = null;
    ariaLabelledBy = null;
    ariaLabel = null;
    ariaModal = !1;
    autoFocus = "first-tabbable";
    restoreFocus = !0;
    delayFocusTrap = !0;
    scrollStrategy;
    closeOnNavigation = !0;
    enterAnimationDuration;
    exitAnimationDuration;
}, b = "mdc-dialog--open", w = "mdc-dialog--opening", I = "mdc-dialog--closing", it = 150, at = 75, F = (() => {
    class t extends V {
        _animationStateChanged = new X;
        _animationsEnabled = !f();
        _actionSectionCount = 0;
        _hostElement = this._elementRef.nativeElement;
        _enterAnimationDuration = this._animationsEnabled ? M(this._config.enterAnimationDuration) ?? it : 0;
        _exitAnimationDuration = this._animationsEnabled ? M(this._config.exitAnimationDuration) ?? at : 0;
        _animationTimer = null;
        _contentAttached() { super._contentAttached(), this._startOpenAnimation(); }
        _startOpenAnimation() { this._animationStateChanged.emit({ state: "opening", totalTime: this._enterAnimationDuration }), this._animationsEnabled ? (this._hostElement.style.setProperty(S, `${this._enterAnimationDuration}ms`), this._requestAnimationFrame(() => this._hostElement.classList.add(w, b)), this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen)) : (this._hostElement.classList.add(b), Promise.resolve().then(() => this._finishDialogOpen())); }
        _startExitAnimation() { this._animationStateChanged.emit({ state: "closing", totalTime: this._exitAnimationDuration }), this._hostElement.classList.remove(b), this._animationsEnabled ? (this._hostElement.style.setProperty(S, `${this._exitAnimationDuration}ms`), this._requestAnimationFrame(() => this._hostElement.classList.add(I)), this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose)) : Promise.resolve().then(() => this._finishDialogClose()); }
        _updateActionSectionCount(e) { this._actionSectionCount += e, this._changeDetectorRef.markForCheck(); }
        _finishDialogOpen = () => { this._clearAnimationClasses(), this._openAnimationDone(this._enterAnimationDuration); };
        _finishDialogClose = () => { this._clearAnimationClasses(), this._animationStateChanged.emit({ state: "closed", totalTime: this._exitAnimationDuration }); };
        _clearAnimationClasses() { this._hostElement.classList.remove(w, I); }
        _waitForAnimationToComplete(e, i) { this._animationTimer !== null && clearTimeout(this._animationTimer), this._animationTimer = setTimeout(i, e); }
        _requestAnimationFrame(e) { this._ngZone.runOutsideAngular(() => { typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e(); }); }
        _captureInitialFocus() { this._config.delayFocusTrap || this._trapFocus(); }
        _openAnimationDone(e) { this._config.delayFocusTrap && this._trapFocus(), this._animationStateChanged.next({ state: "opened", totalTime: e }); }
        ngOnDestroy() { super.ngOnDestroy(), this._animationTimer !== null && clearTimeout(this._animationTimer); }
        attachComponentPortal(e) { let i = super.attachComponentPortal(e); return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"), i; }
        static \u0275fac = (() => { let e; return function (a) { return (e || (e = o.\u0275\u0275getInheritedFactory(t)))(a || t); }; })();
        static \u0275cmp = o.\u0275\u0275defineComponent({ type: t, selectors: [["mat-dialog-container"]], hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"], hostVars: 10, hostBindings: function (i, a) { i & 2 && (o.\u0275\u0275domProperty("id", a._config.id), o.\u0275\u0275attribute("aria-modal", a._config.ariaModal)("role", a._config.role)("aria-labelledby", a._config.ariaLabel ? null : a._ariaLabelledByQueue[0])("aria-label", a._config.ariaLabel)("aria-describedby", a._config.ariaDescribedBy || null), o.\u0275\u0275classProp("_mat-animation-noopable", !a._animationsEnabled)("mat-mdc-dialog-container-with-actions", a._actionSectionCount > 0)); }, features: [o.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 0, consts: [[1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]], template: function (i, a) { i & 1 && (o.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1), o.\u0275\u0275template(2, et, 0, 0, "ng-template", 2), o.\u0275\u0275elementEnd()()); }, dependencies: [K], styles: [`.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mat-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;box-sizing:border-box;min-height:52px;margin:0;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}
`], encapsulation: 2 });
    }
    return t;
})(), S = "--mat-dialog-transition-duration";
function M(t) { return t == null ? null : typeof t == "number" ? t : t.endsWith("ms") ? O(t.substring(0, t.length - 2)) : t.endsWith("s") ? O(t.substring(0, t.length - 1)) * 1e3 : t === "0" ? 0 : null; }
var c = (function (t) { return t[t.OPEN = 0] = "OPEN", t[t.CLOSING = 1] = "CLOSING", t[t.CLOSED = 2] = "CLOSED", t; })(c || {}), l = class {
    _ref;
    _config;
    _containerInstance;
    componentInstance;
    componentRef;
    disableClose;
    id;
    _afterOpened = new d;
    _beforeClosed = new d;
    _result;
    _closeFallbackTimeout;
    _state = c.OPEN;
    _closeInteractionType;
    constructor(n, e, i) { this._ref = n, this._config = e, this._containerInstance = i, this.disableClose = e.disableClose, this.id = n.id, n.addPanelClass("mat-mdc-dialog-panel"), i._animationStateChanged.pipe(h(a => a.state === "opened"), y(1)).subscribe(() => { this._afterOpened.next(), this._afterOpened.complete(); }), i._animationStateChanged.pipe(h(a => a.state === "closed"), y(1)).subscribe(() => { clearTimeout(this._closeFallbackTimeout), this._finishDialogClose(); }), n.overlayRef.detachments().subscribe(() => { this._beforeClosed.next(this._result), this._beforeClosed.complete(), this._finishDialogClose(); }), T(this.backdropClick(), this.keydownEvents().pipe(h(a => a.keyCode === J && !this.disableClose && !tt(a)))).subscribe(a => { this.disableClose || (a.preventDefault(), v(this, a.type === "keydown" ? "keyboard" : "mouse")); }); }
    close(n) { let e = this._config.closePredicate; e && !e(n, this._config, this.componentInstance) || (this._result = n, this._containerInstance._animationStateChanged.pipe(h(i => i.state === "closing"), y(1)).subscribe(i => { this._beforeClosed.next(n), this._beforeClosed.complete(), this._ref.overlayRef.detachBackdrop(), this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), i.totalTime + 100); }), this._state = c.CLOSING, this._containerInstance._startExitAnimation()); }
    afterOpened() { return this._afterOpened; }
    afterClosed() { return this._ref.closed; }
    beforeClosed() { return this._beforeClosed; }
    backdropClick() { return this._ref.backdropClick; }
    keydownEvents() { return this._ref.keydownEvents; }
    updatePosition(n) { let e = this._ref.config.positionStrategy; return n && (n.left || n.right) ? n.left ? e.left(n.left) : e.right(n.right) : e.centerHorizontally(), n && (n.top || n.bottom) ? n.top ? e.top(n.top) : e.bottom(n.bottom) : e.centerVertically(), this._ref.updatePosition(), this; }
    updateSize(n = "", e = "") { return this._ref.updateSize(n, e), this; }
    addPanelClass(n) { return this._ref.addPanelClass(n), this; }
    removePanelClass(n) { return this._ref.removePanelClass(n), this; }
    getState() { return this._state; }
    _finishDialogClose() { this._state = c.CLOSED, this._ref.close(this._result, { focusOrigin: this._closeInteractionType }), this.componentInstance = null; }
};
function v(t, n, e) { return t._closeInteractionType = n, t.close(e); }
var P = new D("MatMdcDialogData"), N = new D("mat-mdc-dialog-default-options"), B = new D("mat-mdc-dialog-scroll-strategy", { providedIn: "root", factory: () => { let t = s(k); return () => W(t); } }), p = (() => { class t {
    _defaultOptions = s(N, { optional: !0 });
    _scrollStrategy = s(B);
    _parentDialog = s(t, { optional: !0, skipSelf: !0 });
    _idGenerator = s(R);
    _injector = s(k);
    _dialog = s(H);
    _animationsDisabled = f();
    _openDialogsAtThisLevel = [];
    _afterAllClosedAtThisLevel = new d;
    _afterOpenedAtThisLevel = new d;
    dialogConfigClass = m;
    _dialogRefConstructor;
    _dialogContainerType;
    _dialogDataToken;
    get openDialogs() { return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel; }
    get afterOpened() { return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel; }
    _getAfterAllClosed() { let e = this._parentDialog; return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel; }
    afterAllClosed = x(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(Z(void 0)));
    constructor() { this._dialogRefConstructor = l, this._dialogContainerType = F, this._dialogDataToken = P; }
    open(e, i) { let a; i = g(g({}, this._defaultOptions || new m), i), i.id = i.id || this._idGenerator.getId("mat-mdc-dialog-"), i.scrollStrategy = i.scrollStrategy || this._scrollStrategy(); let u = this._dialog.open(e, A(g({}, i), { positionStrategy: Y(this._injector).centerHorizontally().centerVertically(), disableClose: !0, closePredicate: void 0, closeOnDestroy: !1, closeOnOverlayDetachments: !1, disableAnimations: this._animationsDisabled || i.enterAnimationDuration?.toLocaleString() === "0" || i.exitAnimationDuration?.toString() === "0", container: { type: this._dialogContainerType, providers: () => [{ provide: this.dialogConfigClass, useValue: i }, { provide: q, useValue: i }] }, templateContext: () => ({ dialogRef: a }), providers: (r, G, C) => (a = new this._dialogRefConstructor(r, i, C), a.updatePosition(i?.position), [{ provide: this._dialogContainerType, useValue: C }, { provide: this._dialogDataToken, useValue: G.data }, { provide: this._dialogRefConstructor, useValue: a }]) })); return a.componentRef = u.componentRef, a.componentInstance = u.componentInstance, this.openDialogs.push(a), this.afterOpened.next(a), a.afterClosed().subscribe(() => { let r = this.openDialogs.indexOf(a); r > -1 && (this.openDialogs.splice(r, 1), this.openDialogs.length || this._getAfterAllClosed().next()); }), a; }
    closeAll() { this._closeDialogs(this.openDialogs); }
    getDialogById(e) { return this.openDialogs.find(i => i.id === e); }
    ngOnDestroy() { this._closeDialogs(this._openDialogsAtThisLevel), this._afterAllClosedAtThisLevel.complete(), this._afterOpenedAtThisLevel.complete(); }
    _closeDialogs(e) { let i = e.length; for (; i--;)
        e[i].close(); }
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), ot = (() => { class t {
    dialogRef = s(l, { optional: !0 });
    _elementRef = s(L);
    _dialog = s(p);
    ariaLabel;
    type = "button";
    dialogResult;
    _matDialogClose;
    constructor() { }
    ngOnInit() { this.dialogRef || (this.dialogRef = j(this._elementRef, this._dialog.openDialogs)); }
    ngOnChanges(e) { let i = e._matDialogClose || e._matDialogCloseResult; i && (this.dialogResult = i.currentValue); }
    _onButtonClick(e) { v(this.dialogRef, e.screenX === 0 && e.screenY === 0 ? "keyboard" : "mouse", this.dialogResult); }
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: t, selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]], hostVars: 2, hostBindings: function (i, a) { i & 1 && o.\u0275\u0275listener("click", function (r) { return a._onButtonClick(r); }), i & 2 && o.\u0275\u0275attribute("aria-label", a.ariaLabel || null)("type", a.type); }, inputs: { ariaLabel: [0, "aria-label", "ariaLabel"], type: "type", dialogResult: [0, "mat-dialog-close", "dialogResult"], _matDialogClose: [0, "matDialogClose", "_matDialogClose"] }, exportAs: ["matDialogClose"], features: [o.\u0275\u0275NgOnChangesFeature] });
} return t; })(), z = (() => { class t {
    _dialogRef = s(l, { optional: !0 });
    _elementRef = s(L);
    _dialog = s(p);
    constructor() { }
    ngOnInit() { this._dialogRef || (this._dialogRef = j(this._elementRef, this._dialog.openDialogs)), this._dialogRef && Promise.resolve().then(() => { this._onAdd(); }); }
    ngOnDestroy() { this._dialogRef?._containerInstance && Promise.resolve().then(() => { this._onRemove(); }); }
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: t });
} return t; })(), nt = (() => { class t extends z {
    id = s(R).getId("mat-mdc-dialog-title-");
    _onAdd() { this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id); }
    _onRemove() { this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id); }
    static \u0275fac = (() => { let e; return function (a) { return (e || (e = o.\u0275\u0275getInheritedFactory(t)))(a || t); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: t, selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]], hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"], hostVars: 1, hostBindings: function (i, a) { i & 2 && o.\u0275\u0275domProperty("id", a.id); }, inputs: { id: "id" }, exportAs: ["matDialogTitle"], features: [o.\u0275\u0275InheritDefinitionFeature] });
} return t; })(), st = (() => { class t {
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: t, selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]], hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"], features: [o.\u0275\u0275HostDirectivesFeature([E.CdkScrollable])] });
} return t; })(), rt = (() => { class t extends z {
    align;
    _onAdd() { this._dialogRef._containerInstance?._updateActionSectionCount?.(1); }
    _onRemove() { this._dialogRef._containerInstance?._updateActionSectionCount?.(-1); }
    static \u0275fac = (() => { let e; return function (a) { return (e || (e = o.\u0275\u0275getInheritedFactory(t)))(a || t); }; })();
    static \u0275dir = o.\u0275\u0275defineDirective({ type: t, selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]], hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"], hostVars: 6, hostBindings: function (i, a) { i & 2 && o.\u0275\u0275classProp("mat-mdc-dialog-actions-align-start", a.align === "start")("mat-mdc-dialog-actions-align-center", a.align === "center")("mat-mdc-dialog-actions-align-end", a.align === "end"); }, inputs: { align: "align" }, features: [o.\u0275\u0275InheritDefinitionFeature] });
} return t; })();
function j(t, n) { let e = t.nativeElement.parentElement; for (; e && !e.classList.contains("mat-mdc-dialog-container");)
    e = e.parentElement; return e ? n.find(i => i.id === e.id) : null; }
var lt = (() => { class t {
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275mod = o.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = o.\u0275\u0275defineInjector({ providers: [p], imports: [U, $, Q, _, _] });
} return t; })();
import "@angular/cdk/dialog";
import "@angular/cdk/overlay";
import "@angular/cdk/portal";
import "@angular/core";
import "@angular/cdk/coercion";
import "@angular/cdk/layout";
import "rxjs/operators";
import "@angular/cdk/keycodes";
import "@angular/cdk/a11y";
import "@angular/cdk/scrolling";
import "@angular/cdk/bidi";
var Vt = { params: { enterAnimationDuration: "150ms", exitAnimationDuration: "75ms" } }, Ht = { dialogContainer: { type: 7, name: "dialogContainer", definitions: [{ type: 0, name: "void, exit", styles: { type: 6, styles: { opacity: 0, transform: "scale(0.7)" }, offset: null } }, { type: 0, name: "enter", styles: { type: 6, styles: { transform: "none" }, offset: null } }, { type: 1, expr: "* => enter", animation: { type: 3, steps: [{ type: 4, styles: { type: 6, styles: { transform: "none", opacity: 1 }, offset: null }, timings: "{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)" }, { type: 11, selector: "@*", animation: { type: 9, options: null }, options: { optional: !0 } }], options: null }, options: { params: { enterAnimationDuration: "150ms", exitAnimationDuration: "75ms" } } }, { type: 1, expr: "* => void, * => exit", animation: { type: 3, steps: [{ type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: "{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)" }, { type: 11, selector: "@*", animation: { type: 9, options: null }, options: { optional: !0 } }], options: null }, options: { params: { enterAnimationDuration: "150ms", exitAnimationDuration: "75ms" } } }], options: {} } };
export { P as MAT_DIALOG_DATA, N as MAT_DIALOG_DEFAULT_OPTIONS, B as MAT_DIALOG_SCROLL_STRATEGY, p as MatDialog, rt as MatDialogActions, ot as MatDialogClose, m as MatDialogConfig, F as MatDialogContainer, st as MatDialogContent, lt as MatDialogModule, l as MatDialogRef, c as MatDialogState, nt as MatDialogTitle, v as _closeDialogVia, Vt as _defaultParams, Ht as matDialogAnimations };
