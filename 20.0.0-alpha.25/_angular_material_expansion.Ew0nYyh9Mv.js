import { a as u } from "@nf-internal/chunk-4MZRILT7";
import { e as x } from "@nf-internal/chunk-5KSFOI5Q";
import { b as f } from "@nf-internal/chunk-RXMLTE5A";
import { j as h } from "@nf-internal/chunk-VZR6KEPQ";
import { b as c, k as m, q as g } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import * as e from "@angular/core";
import { InjectionToken as l, inject as o, TemplateRef as P, ViewContainerRef as C, DOCUMENT as T, NgZone as A, ElementRef as b, Renderer2 as D, EventEmitter as y, booleanAttribute as _, ChangeDetectorRef as H, HostAttributeToken as k, numberAttribute as I, QueryList as S } from "@angular/core";
import { CdkAccordionItem as O, CdkAccordion as N, CdkAccordionModule as F } from "@angular/cdk/accordion";
import { TemplatePortal as z, CdkPortalOutlet as R, PortalModule as Q } from "@angular/cdk/portal";
import { _IdGenerator as j, FocusMonitor as L, FocusKeyManager as V } from "@angular/cdk/a11y";
import { startWith as v, filter as d, take as B } from "rxjs/operators";
import { ENTER as W, hasModifierKey as Z, SPACE as q } from "@angular/cdk/keycodes";
import { UniqueSelectionDispatcher as K } from "@angular/cdk/collections";
import { _CdkPrivateStyleLoader as X } from "@angular/cdk/private";
import "@angular/cdk/layout";
import "@angular/cdk/bidi";
var U = ["body"], G = ["bodyWrapper"], Y = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]], J = ["mat-expansion-panel-header", "*", "mat-action-row"];
function $(a, M) { }
var ee = [[["mat-panel-title"]], [["mat-panel-description"]], "*"], te = ["mat-panel-title", "mat-panel-description", "*"];
function ne(a, M) { a & 1 && (e.\u0275\u0275domElementStart(0, "span", 1), e.\u0275\u0275namespaceSVG(), e.\u0275\u0275domElementStart(1, "svg", 2), e.\u0275\u0275domElement(2, "path", 3), e.\u0275\u0275domElementEnd()()); }
var p = new l("MAT_ACCORDION"), w = new l("MAT_EXPANSION_PANEL"), ae = (() => { class a {
    _template = o(P);
    _expansionPanel = o(w, { optional: !0 });
    constructor() { }
    static \u0275fac = function (n) { return new (n || a); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: a, selectors: [["ng-template", "matExpansionPanelContent", ""]] });
} return a; })(), E = new l("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"), ie = (() => {
    class a extends O {
        _viewContainerRef = o(C);
        _animationsDisabled = x();
        _document = o(T);
        _ngZone = o(A);
        _elementRef = o(b);
        _renderer = o(D);
        _cleanupTransitionEnd;
        get hideToggle() { return this._hideToggle || this.accordion && this.accordion.hideToggle; }
        set hideToggle(t) { this._hideToggle = t; }
        _hideToggle = !1;
        get togglePosition() { return this._togglePosition || this.accordion && this.accordion.togglePosition; }
        set togglePosition(t) { this._togglePosition = t; }
        _togglePosition;
        afterExpand = new y;
        afterCollapse = new y;
        _inputChanges = new m;
        accordion = o(p, { optional: !0, skipSelf: !0 });
        _lazyContent;
        _body;
        _bodyWrapper;
        _portal;
        _headerId = o(j).getId("mat-expansion-panel-header-");
        constructor() { super(); let t = o(E, { optional: !0 }); this._expansionDispatcher = o(K), t && (this.hideToggle = t.hideToggle); }
        _hasSpacing() { return this.accordion ? this.expanded && this.accordion.displayMode === "default" : !1; }
        _getExpandedState() { return this.expanded ? "expanded" : "collapsed"; }
        toggle() { this.expanded = !this.expanded; }
        close() { this.expanded = !1; }
        open() { this.expanded = !0; }
        ngAfterContentInit() { this._lazyContent && this._lazyContent._expansionPanel === this && this.opened.pipe(v(null), d(() => this.expanded && !this._portal), B(1)).subscribe(() => { this._portal = new z(this._lazyContent._template, this._viewContainerRef); }), this._setupAnimationEvents(); }
        ngOnChanges(t) { this._inputChanges.next(t); }
        ngOnDestroy() { super.ngOnDestroy(), this._cleanupTransitionEnd?.(), this._inputChanges.complete(); }
        _containsFocus() { if (this._body) {
            let t = this._document.activeElement, n = this._body.nativeElement;
            return t === n || n.contains(t);
        } return !1; }
        _transitionEndListener = ({ target: t, propertyName: n }) => { t === this._bodyWrapper?.nativeElement && n === "grid-template-rows" && this._ngZone.run(() => { this.expanded ? this.afterExpand.emit() : this.afterCollapse.emit(); }); };
        _setupAnimationEvents() { this._ngZone.runOutsideAngular(() => { this._animationsDisabled ? (this.opened.subscribe(() => this._ngZone.run(() => this.afterExpand.emit())), this.closed.subscribe(() => this._ngZone.run(() => this.afterCollapse.emit()))) : setTimeout(() => { let t = this._elementRef.nativeElement; this._cleanupTransitionEnd = this._renderer.listen(t, "transitionend", this._transitionEndListener), t.classList.add("mat-expansion-panel-animations-enabled"); }, 200); }); }
        static \u0275fac = function (n) { return new (n || a); };
        static \u0275cmp = e.\u0275\u0275defineComponent({ type: a, selectors: [["mat-expansion-panel"]], contentQueries: function (n, i, s) { if (n & 1 && e.\u0275\u0275contentQuery(s, ae, 5), n & 2) {
                let r;
                e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (i._lazyContent = r.first);
            } }, viewQuery: function (n, i) { if (n & 1 && (e.\u0275\u0275viewQuery(U, 5), e.\u0275\u0275viewQuery(G, 5)), n & 2) {
                let s;
                e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (i._body = s.first), e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (i._bodyWrapper = s.first);
            } }, hostAttrs: [1, "mat-expansion-panel"], hostVars: 4, hostBindings: function (n, i) { n & 2 && e.\u0275\u0275classProp("mat-expanded", i.expanded)("mat-expansion-panel-spacing", i._hasSpacing()); }, inputs: { hideToggle: [2, "hideToggle", "hideToggle", _], togglePosition: "togglePosition" }, outputs: { afterExpand: "afterExpand", afterCollapse: "afterCollapse" }, exportAs: ["matExpansionPanel"], features: [e.\u0275\u0275ProvidersFeature([{ provide: p, useValue: void 0 }, { provide: w, useExisting: a }]), e.\u0275\u0275InheritDefinitionFeature, e.\u0275\u0275NgOnChangesFeature], ngContentSelectors: J, decls: 9, vars: 4, consts: [["bodyWrapper", ""], ["body", ""], [1, "mat-expansion-panel-content-wrapper"], ["role", "region", 1, "mat-expansion-panel-content", 3, "id"], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]], template: function (n, i) { n & 1 && (e.\u0275\u0275projectionDef(Y), e.\u0275\u0275projection(0), e.\u0275\u0275elementStart(1, "div", 2, 0)(3, "div", 3, 1)(5, "div", 4), e.\u0275\u0275projection(6, 1), e.\u0275\u0275template(7, $, 0, 0, "ng-template", 5), e.\u0275\u0275elementEnd(), e.\u0275\u0275projection(8, 2), e.\u0275\u0275elementEnd()()), n & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275attribute("inert", i.expanded ? null : ""), e.\u0275\u0275advance(2), e.\u0275\u0275property("id", i.id), e.\u0275\u0275attribute("aria-labelledby", i._headerId), e.\u0275\u0275advance(4), e.\u0275\u0275property("cdkPortalOutlet", i._portal)); }, dependencies: [R], styles: [`.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}
`], encapsulation: 2, changeDetection: 0 });
    }
    return a;
})(), He = (() => { class a {
    static \u0275fac = function (n) { return new (n || a); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: a, selectors: [["mat-action-row"]], hostAttrs: [1, "mat-action-row"] });
} return a; })(), oe = (() => {
    class a {
        panel = o(ie, { host: !0 });
        _element = o(b);
        _focusMonitor = o(L);
        _changeDetectorRef = o(H);
        _parentChangeSubscription = c.EMPTY;
        constructor() { o(X).load(u); let t = this.panel, n = o(E, { optional: !0 }), i = o(new k("tabindex"), { optional: !0 }), s = t.accordion ? t.accordion._stateChanges.pipe(d(r => !!(r.hideToggle || r.togglePosition))) : g; this.tabIndex = parseInt(i || "") || 0, this._parentChangeSubscription = h(t.opened, t.closed, s, t._inputChanges.pipe(d(r => !!(r.hideToggle || r.disabled || r.togglePosition)))).subscribe(() => this._changeDetectorRef.markForCheck()), t.closed.pipe(d(() => t._containsFocus())).subscribe(() => this._focusMonitor.focusVia(this._element, "program")), n && (this.expandedHeight = n.expandedHeight, this.collapsedHeight = n.collapsedHeight); }
        expandedHeight;
        collapsedHeight;
        tabIndex = 0;
        get disabled() { return this.panel.disabled; }
        _toggle() { this.disabled || this.panel.toggle(); }
        _isExpanded() { return this.panel.expanded; }
        _getExpandedState() { return this.panel._getExpandedState(); }
        _getPanelId() { return this.panel.id; }
        _getTogglePosition() { return this.panel.togglePosition; }
        _showToggle() { return !this.panel.hideToggle && !this.panel.disabled; }
        _getHeaderHeight() { let t = this._isExpanded(); return t && this.expandedHeight ? this.expandedHeight : !t && this.collapsedHeight ? this.collapsedHeight : null; }
        _keydown(t) { switch (t.keyCode) {
            case q:
            case W:
                Z(t) || (t.preventDefault(), this._toggle());
                break;
            default:
                this.panel.accordion && this.panel.accordion._handleHeaderKeydown(t);
                return;
        } }
        focus(t, n) { t ? this._focusMonitor.focusVia(this._element, t, n) : this._element.nativeElement.focus(n); }
        ngAfterViewInit() { this._focusMonitor.monitor(this._element).subscribe(t => { t && this.panel.accordion && this.panel.accordion._handleHeaderFocus(this); }); }
        ngOnDestroy() { this._parentChangeSubscription.unsubscribe(), this._focusMonitor.stopMonitoring(this._element); }
        static \u0275fac = function (n) { return new (n || a); };
        static \u0275cmp = e.\u0275\u0275defineComponent({ type: a, selectors: [["mat-expansion-panel-header"]], hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"], hostVars: 13, hostBindings: function (n, i) { n & 1 && e.\u0275\u0275listener("click", function () { return i._toggle(); })("keydown", function (r) { return i._keydown(r); }), n & 2 && (e.\u0275\u0275attribute("id", i.panel._headerId)("tabindex", i.disabled ? -1 : i.tabIndex)("aria-controls", i._getPanelId())("aria-expanded", i._isExpanded())("aria-disabled", i.panel.disabled), e.\u0275\u0275styleProp("height", i._getHeaderHeight()), e.\u0275\u0275classProp("mat-expanded", i._isExpanded())("mat-expansion-toggle-indicator-after", i._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", i._getTogglePosition() === "before")); }, inputs: { expandedHeight: "expandedHeight", collapsedHeight: "collapsedHeight", tabIndex: [2, "tabIndex", "tabIndex", t => t == null ? 0 : I(t)] }, ngContentSelectors: te, decls: 5, vars: 3, consts: [[1, "mat-content"], [1, "mat-expansion-indicator"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -960 960 960", "aria-hidden", "true", "focusable", "false"], ["d", "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]], template: function (n, i) { n & 1 && (e.\u0275\u0275projectionDef(ee), e.\u0275\u0275domElementStart(0, "span", 0), e.\u0275\u0275projection(1), e.\u0275\u0275projection(2, 1), e.\u0275\u0275projection(3, 2), e.\u0275\u0275domElementEnd(), e.\u0275\u0275conditionalCreate(4, ne, 3, 0, "span", 1)), n & 2 && (e.\u0275\u0275classProp("mat-content-hide-toggle", !i._showToggle()), e.\u0275\u0275advance(4), e.\u0275\u0275conditional(i._showToggle() ? 4 : -1)); }, styles: [`.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}
`], encapsulation: 2, changeDetection: 0 });
    }
    return a;
})(), ke = (() => { class a {
    static \u0275fac = function (n) { return new (n || a); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: a, selectors: [["mat-panel-description"]], hostAttrs: [1, "mat-expansion-panel-header-description"] });
} return a; })(), Ie = (() => { class a {
    static \u0275fac = function (n) { return new (n || a); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: a, selectors: [["mat-panel-title"]], hostAttrs: [1, "mat-expansion-panel-header-title"] });
} return a; })(), Se = (() => { class a extends N {
    _keyManager;
    _ownHeaders = new S;
    _headers;
    hideToggle = !1;
    displayMode = "default";
    togglePosition = "after";
    ngAfterContentInit() { this._headers.changes.pipe(v(this._headers)).subscribe(t => { this._ownHeaders.reset(t.filter(n => n.panel.accordion === this)), this._ownHeaders.notifyOnChanges(); }), this._keyManager = new V(this._ownHeaders).withWrap().withHomeAndEnd(); }
    _handleHeaderKeydown(t) { this._keyManager.onKeydown(t); }
    _handleHeaderFocus(t) { this._keyManager.updateActiveItem(t); }
    ngOnDestroy() { super.ngOnDestroy(), this._keyManager?.destroy(), this._ownHeaders.destroy(); }
    static \u0275fac = (() => { let t; return function (i) { return (t || (t = e.\u0275\u0275getInheritedFactory(a)))(i || a); }; })();
    static \u0275dir = e.\u0275\u0275defineDirective({ type: a, selectors: [["mat-accordion"]], contentQueries: function (n, i, s) { if (n & 1 && e.\u0275\u0275contentQuery(s, oe, 5), n & 2) {
            let r;
            e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (i._headers = r);
        } }, hostAttrs: [1, "mat-accordion"], hostVars: 2, hostBindings: function (n, i) { n & 2 && e.\u0275\u0275classProp("mat-accordion-multi", i.multi); }, inputs: { hideToggle: [2, "hideToggle", "hideToggle", _], displayMode: "displayMode", togglePosition: "togglePosition" }, exportAs: ["matAccordion"], features: [e.\u0275\u0275ProvidersFeature([{ provide: p, useExisting: a }]), e.\u0275\u0275InheritDefinitionFeature] });
} return a; })(), Oe = (() => { class a {
    static \u0275fac = function (n) { return new (n || a); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: a });
    static \u0275inj = e.\u0275\u0275defineInjector({ imports: [f, F, Q] });
} return a; })(), Ne = "225ms cubic-bezier(0.4,0.0,0.2,1)", Fe = { indicatorRotate: { type: 7, name: "indicatorRotate", definitions: [{ type: 0, name: "collapsed, void", styles: { type: 6, styles: { transform: "rotate(0deg)" }, offset: null } }, { type: 0, name: "expanded", styles: { type: 6, styles: { transform: "rotate(180deg)" }, offset: null } }, { type: 1, expr: "expanded <=> collapsed, void => collapsed", animation: { type: 4, styles: null, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }], options: {} }, bodyExpansion: { type: 7, name: "bodyExpansion", definitions: [{ type: 0, name: "collapsed, void", styles: { type: 6, styles: { height: "0px", visibility: "hidden" }, offset: null } }, { type: 0, name: "expanded", styles: { type: 6, styles: { height: "*", visibility: "" }, offset: null } }, { type: 1, expr: "expanded <=> collapsed, void => collapsed", animation: { type: 4, styles: null, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }], options: {} } };
export { Ne as EXPANSION_PANEL_ANIMATION_TIMING, p as MAT_ACCORDION, w as MAT_EXPANSION_PANEL, E as MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, Se as MatAccordion, Oe as MatExpansionModule, ie as MatExpansionPanel, He as MatExpansionPanelActionRow, ae as MatExpansionPanelContent, ke as MatExpansionPanelDescription, oe as MatExpansionPanelHeader, Ie as MatExpansionPanelTitle, Fe as matExpansionAnimations };
