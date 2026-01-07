import { A as N, E as H, a as M, j as B, r as j, s as R, x } from "@nf-internal/chunk-TVIMJ2LS";
import "@nf-internal/chunk-PJPD4VSJ";
import { b as v, c as S, e as L, g as V, h as W, i as C, j as G, k as D } from "@nf-internal/chunk-NPG5RFMM";
import { f as T, i as w, k as F, t as E } from "@nf-internal/chunk-U77MKYXX";
import "@nf-internal/chunk-63CYGVH4";
import "@nf-internal/chunk-Z2PDAZME";
import "@nf-internal/chunk-QXX5WOHX";
import "@nf-internal/chunk-LYMFQPXM";
import "@nf-internal/chunk-K3GOACLW";
import "@nf-internal/chunk-A3W2APIK";
import "@nf-internal/chunk-OH3XPIE7";
import "@nf-internal/chunk-VP6KNDS4";
import { c as m } from "@nf-internal/chunk-OIQ2QPHM";
import "@nf-internal/chunk-7N7HFQKY";
import { a as k } from "@nf-internal/chunk-DQM2BKPX";
import { a as I } from "@nf-internal/chunk-G25BAKAM";
import "@nf-internal/chunk-OI5KCOOP";
import { c as y } from "@nf-internal/chunk-3C63DHR6";
import "@nf-internal/chunk-FSAIB72R";
import "@nf-internal/chunk-JYXTBF5A";
import "@nf-internal/chunk-2A7U62US";
import "@nf-internal/chunk-PP4WNYUO";
import { f as O } from "@nf-internal/chunk-VZR6KEPQ";
import { k as p } from "@nf-internal/chunk-STIBVO4O";
import { a as P } from "@nf-internal/chunk-SVIUGILY";
import { k as Q } from "@nf-internal/chunk-N26NRATF";
import { a as u } from "@nf-internal/chunk-FJYW2LMB";
import * as r from "@angular/core";
import { inject as c, ElementRef as z, NgZone as q, Renderer2 as Z, ChangeDetectorRef as U, Injector as f, DOCUMENT as Y, afterNextRender as $, InjectionToken as A, TemplateRef as K, signal as J, EventEmitter as X } from "@angular/core";
import { startWith as te, take as ie } from "rxjs/operators";
import "@angular/common";
function ee(n, a) { }
var h = class {
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
    positionStrategy;
    data = null;
    direction;
    ariaDescribedBy = null;
    ariaLabelledBy = null;
    ariaLabel = null;
    ariaModal = !1;
    autoFocus = "first-tabbable";
    restoreFocus = !0;
    scrollStrategy;
    closeOnNavigation = !0;
    closeOnDestroy = !0;
    closeOnOverlayDetachments = !0;
    disableAnimations = !1;
    providers;
    container;
    templateContext;
};
function Fe() { throw Error("Attempting to attach dialog content after content is already attached"); }
var oe = (() => {
    class n extends L {
        _elementRef = c(z);
        _focusTrapFactory = c(F);
        _config;
        _interactivityChecker = c(w);
        _ngZone = c(q);
        _focusMonitor = c(T);
        _renderer = c(Z);
        _changeDetectorRef = c(U);
        _injector = c(f);
        _platform = c(k);
        _document = c(Y);
        _portalOutlet;
        _focusTrapped = new p;
        _focusTrap = null;
        _elementFocusedBeforeDialogWasOpened = null;
        _closeInteractionType = null;
        _ariaLabelledByQueue = [];
        _isDestroyed = !1;
        constructor() { super(), this._config = c(h, { optional: !0 }) || new h, this._config.ariaLabelledBy && this._ariaLabelledByQueue.push(this._config.ariaLabelledBy); }
        _addAriaLabelledBy(e) { this._ariaLabelledByQueue.push(e), this._changeDetectorRef.markForCheck(); }
        _removeAriaLabelledBy(e) { let t = this._ariaLabelledByQueue.indexOf(e); t > -1 && (this._ariaLabelledByQueue.splice(t, 1), this._changeDetectorRef.markForCheck()); }
        _contentAttached() { this._initializeFocusTrap(), this._captureInitialFocus(); }
        _captureInitialFocus() { this._trapFocus(); }
        ngOnDestroy() { this._focusTrapped.complete(), this._isDestroyed = !0, this._restoreFocus(); }
        attachComponentPortal(e) { this._portalOutlet.hasAttached(); let t = this._portalOutlet.attachComponentPortal(e); return this._contentAttached(), t; }
        attachTemplatePortal(e) { this._portalOutlet.hasAttached(); let t = this._portalOutlet.attachTemplatePortal(e); return this._contentAttached(), t; }
        attachDomPortal = e => { this._portalOutlet.hasAttached(); let t = this._portalOutlet.attachDomPortal(e); return this._contentAttached(), t; };
        _recaptureFocus() { this._containsFocus() || this._trapFocus(); }
        _forceFocus(e, t) { this._interactivityChecker.isFocusable(e) || (e.tabIndex = -1, this._ngZone.runOutsideAngular(() => { let i = () => { o(), l(), e.removeAttribute("tabindex"); }, o = this._renderer.listen(e, "blur", i), l = this._renderer.listen(e, "mousedown", i); })), e.focus(t); }
        _focusByCssSelector(e, t) { let i = this._elementRef.nativeElement.querySelector(e); i && this._forceFocus(i, t); }
        _trapFocus(e) { this._isDestroyed || $(() => { let t = this._elementRef.nativeElement; switch (this._config.autoFocus) {
            case !1:
            case "dialog":
                this._containsFocus() || t.focus(e);
                break;
            case !0:
            case "first-tabbable":
                this._focusTrap?.focusInitialElement(e) || this._focusDialogContainer(e);
                break;
            case "first-heading":
                this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]', e);
                break;
            default:
                this._focusByCssSelector(this._config.autoFocus, e);
                break;
        } this._focusTrapped.next(); }, { injector: this._injector }); }
        _restoreFocus() { let e = this._config.restoreFocus, t = null; if (typeof e == "string" ? t = this._document.querySelector(e) : typeof e == "boolean" ? t = e ? this._elementFocusedBeforeDialogWasOpened : null : e && (t = e), this._config.restoreFocus && t && typeof t.focus == "function") {
            let i = m(), o = this._elementRef.nativeElement;
            (!i || i === this._document.body || i === o || o.contains(i)) && (this._focusMonitor ? (this._focusMonitor.focusVia(t, this._closeInteractionType), this._closeInteractionType = null) : t.focus());
        } this._focusTrap && this._focusTrap.destroy(); }
        _focusDialogContainer(e) { this._elementRef.nativeElement.focus?.(e); }
        _containsFocus() { let e = this._elementRef.nativeElement, t = m(); return e === t || e.contains(t); }
        _initializeFocusTrap() { this._platform.isBrowser && (this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement), this._document && (this._elementFocusedBeforeDialogWasOpened = m())); }
        static \u0275fac = function (t) { return new (t || n); };
        static \u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["cdk-dialog-container"]], viewQuery: function (t, i) { if (t & 1 && r.\u0275\u0275viewQuery(C, 7), t & 2) {
                let o;
                r.\u0275\u0275queryRefresh(o = r.\u0275\u0275loadQuery()) && (i._portalOutlet = o.first);
            } }, hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"], hostVars: 6, hostBindings: function (t, i) { t & 2 && r.\u0275\u0275attribute("id", i._config.id || null)("role", i._config.role)("aria-modal", i._config.ariaModal)("aria-labelledby", i._config.ariaLabel ? null : i._ariaLabelledByQueue[0])("aria-label", i._config.ariaLabel)("aria-describedby", i._config.ariaDescribedBy || null); }, features: [r.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function (t, i) { t & 1 && r.\u0275\u0275template(0, ee, 0, 0, "ng-template", 0); }, dependencies: [C], styles: [`.cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}
`], encapsulation: 2 });
    }
    return n;
})(), _ = class {
    overlayRef;
    config;
    componentInstance;
    componentRef;
    containerInstance;
    disableClose;
    closed = new p;
    backdropClick;
    keydownEvents;
    outsidePointerEvents;
    id;
    _detachSubscription;
    constructor(a, e) { this.overlayRef = a, this.config = e, this.disableClose = e.disableClose, this.backdropClick = a.backdropClick(), this.keydownEvents = a.keydownEvents(), this.outsidePointerEvents = a.outsidePointerEvents(), this.id = e.id, this.keydownEvents.subscribe(t => { t.keyCode === 27 && !this.disableClose && !P(t) && (t.preventDefault(), this.close(void 0, { focusOrigin: "keyboard" })); }), this.backdropClick.subscribe(() => { !this.disableClose && this._canClose() ? this.close(void 0, { focusOrigin: "mouse" }) : this.containerInstance._recaptureFocus?.(); }), this._detachSubscription = a.detachments().subscribe(() => { e.closeOnOverlayDetachments !== !1 && this.close(); }); }
    close(a, e) { if (this._canClose(a)) {
        let t = this.closed;
        this.containerInstance._closeInteractionType = e?.focusOrigin || "program", this._detachSubscription.unsubscribe(), this.overlayRef.dispose(), t.next(a), t.complete(), this.componentInstance = this.containerInstance = null;
    } }
    updatePosition() { return this.overlayRef.updatePosition(), this; }
    updateSize(a = "", e = "") { return this.overlayRef.updateSize({ width: a, height: e }), this; }
    addPanelClass(a) { return this.overlayRef.addPanelClass(a), this; }
    removePanelClass(a) { return this.overlayRef.removePanelClass(a), this; }
    _canClose(a) { let e = this.config; return !!this.containerInstance && (!e.closePredicate || e.closePredicate(a, e, this.componentInstance)); }
}, ne = new A("DialogScrollStrategy", { providedIn: "root", factory: () => { let n = c(f); return () => M(n); } }), se = new A("DialogData"), ae = new A("DefaultDialogConfig");
function re(n) { let a = J(n), e = new X; return { valueSignal: a, get value() { return a(); }, change: e, ngOnDestroy() { e.complete(); } }; }
var le = (() => { class n {
    _injector = c(f);
    _defaultOptions = c(ae, { optional: !0 });
    _parentDialog = c(n, { optional: !0, skipSelf: !0 });
    _overlayContainer = c(j);
    _idGenerator = c(I);
    _openDialogsAtThisLevel = [];
    _afterAllClosedAtThisLevel = new p;
    _afterOpenedAtThisLevel = new p;
    _ariaHiddenElements = new Map;
    _scrollStrategy = c(ne);
    get openDialogs() { return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel; }
    get afterOpened() { return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel; }
    afterAllClosed = O(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(te(void 0)));
    constructor() { }
    open(e, t) { let i = this._defaultOptions || new h; t = u(u({}, i), t), t.id = t.id || this._idGenerator.getId("cdk-dialog-"), t.id && this.getDialogById(t.id); let o = this._getOverlayConfig(t), l = N(this._injector, o), s = new _(l, t), d = this._attachContainer(l, s, t); if (s.containerInstance = d, !this.openDialogs.length) {
        let g = this._overlayContainer.getContainerElement();
        d._focusTrapped ? d._focusTrapped.pipe(ie(1)).subscribe(() => { this._hideNonDialogContentFromAssistiveTechnology(g); }) : this._hideNonDialogContentFromAssistiveTechnology(g);
    } return this._attachDialogContent(e, s, d, t), this.openDialogs.push(s), s.closed.subscribe(() => this._removeOpenDialog(s, !0)), this.afterOpened.next(s), s; }
    closeAll() { b(this.openDialogs, e => e.close()); }
    getDialogById(e) { return this.openDialogs.find(t => t.id === e); }
    ngOnDestroy() { b(this._openDialogsAtThisLevel, e => { e.config.closeOnDestroy === !1 && this._removeOpenDialog(e, !1); }), b(this._openDialogsAtThisLevel, e => e.close()), this._afterAllClosedAtThisLevel.complete(), this._afterOpenedAtThisLevel.complete(), this._openDialogsAtThisLevel = []; }
    _getOverlayConfig(e) { let t = new B({ positionStrategy: e.positionStrategy || x().centerHorizontally().centerVertically(), scrollStrategy: e.scrollStrategy || this._scrollStrategy(), panelClass: e.panelClass, hasBackdrop: e.hasBackdrop, direction: e.direction, minWidth: e.minWidth, minHeight: e.minHeight, maxWidth: e.maxWidth, maxHeight: e.maxHeight, width: e.width, height: e.height, disposeOnNavigation: e.closeOnNavigation, disableAnimations: e.disableAnimations }); return e.backdropClass && (t.backdropClass = e.backdropClass), t; }
    _attachContainer(e, t, i) { let o = i.injector || i.viewContainerRef?.injector, l = [{ provide: h, useValue: i }, { provide: _, useValue: t }, { provide: R, useValue: e }], s; i.container ? typeof i.container == "function" ? s = i.container : (s = i.container.type, l.push(...i.container.providers(i))) : s = oe; let d = new v(s, i.viewContainerRef, f.create({ parent: o || this._injector, providers: l })); return e.attach(d).instance; }
    _attachDialogContent(e, t, i, o) { if (e instanceof K) {
        let l = this._createInjector(o, t, i, void 0), s = { $implicit: o.data, dialogRef: t };
        o.templateContext && (s = u(u({}, s), typeof o.templateContext == "function" ? o.templateContext() : o.templateContext)), i.attachTemplatePortal(new S(e, null, s, l));
    }
    else {
        let l = this._createInjector(o, t, i, this._injector), s = i.attachComponentPortal(new v(e, o.viewContainerRef, l));
        t.componentRef = s, t.componentInstance = s.instance;
    } }
    _createInjector(e, t, i, o) { let l = e.injector || e.viewContainerRef?.injector, s = [{ provide: se, useValue: e.data }, { provide: _, useValue: t }]; return e.providers && (typeof e.providers == "function" ? s.push(...e.providers(t, e, i)) : s.push(...e.providers)), e.direction && (!l || !l.get(y, null, { optional: !0 })) && s.push({ provide: y, useValue: re(e.direction) }), f.create({ parent: l || o, providers: s }); }
    _removeOpenDialog(e, t) { let i = this.openDialogs.indexOf(e); i > -1 && (this.openDialogs.splice(i, 1), this.openDialogs.length || (this._ariaHiddenElements.forEach((o, l) => { o ? l.setAttribute("aria-hidden", o) : l.removeAttribute("aria-hidden"); }), this._ariaHiddenElements.clear(), t && this._getAfterAllClosed().next())); }
    _hideNonDialogContentFromAssistiveTechnology(e) { if (e.parentElement) {
        let t = e.parentElement.children;
        for (let i = t.length - 1; i > -1; i--) {
            let o = t[i];
            o !== e && o.nodeName !== "SCRIPT" && o.nodeName !== "STYLE" && !o.hasAttribute("aria-live") && (this._ariaHiddenElements.set(o, o.getAttribute("aria-hidden")), o.setAttribute("aria-hidden", "true"));
        }
    } }
    _getAfterAllClosed() { let e = this._parentDialog; return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
function b(n, a) { let e = n.length; for (; e--;)
    a(n[e]); }
var Ee = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = r.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = r.\u0275\u0275defineInjector({ providers: [le], imports: [H, D, E, D] });
} return n; })();
export { oe as CdkDialogContainer, ae as DEFAULT_DIALOG_CONFIG, se as DIALOG_DATA, ne as DIALOG_SCROLL_STRATEGY, le as Dialog, h as DialogConfig, Ee as DialogModule, _ as DialogRef, Fe as throwDialogContentAlreadyAttachedError, V as \u0275\u0275CdkPortal, C as \u0275\u0275CdkPortalOutlet, G as \u0275\u0275PortalHostDirective, W as \u0275\u0275TemplatePortalDirective };
