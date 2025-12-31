import { e as j, f as y } from "@nf-internal/chunk-M4QPD34T";
import { a as D } from "@nf-internal/chunk-4MZRILT7";
import { e as v } from "@nf-internal/chunk-5KSFOI5Q";
import { b as R } from "@nf-internal/chunk-RXMLTE5A";
import { j as T } from "@nf-internal/chunk-VZR6KEPQ";
import { M as W, b as h, f as N, k as g, l as O, q as Q, z } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import { FocusKeyManager as ht, _IdGenerator as F, CdkMonitorFocus as pt, FocusMonitor as _t } from "@angular/cdk/a11y";
import { Directionality as Z } from "@angular/cdk/bidi";
import { hasModifierKey as ut, SPACE as P, ENTER as K } from "@angular/cdk/keycodes";
import { SharedResizeObserver as ft } from "@angular/cdk/observers/private";
import { Platform as Y } from "@angular/cdk/platform";
import { ViewportRuler as gt, CdkScrollable as vt } from "@angular/cdk/scrolling";
import * as t from "@angular/core";
import { InjectionToken as _, inject as s, TemplateRef as B, ViewContainerRef as yt, booleanAttribute as c, ElementRef as u, ChangeDetectorRef as H, NgZone as w, Injector as X, Renderer2 as U, EventEmitter as m, afterNextRender as L, numberAttribute as C, QueryList as kt, signal as E, computed as Tt, HostAttributeToken as Ct } from "@angular/core";
import { debounceTime as xt, takeUntil as p, startWith as k, switchMap as wt, skip as It, filter as Dt } from "rxjs/operators";
import { CdkPortal as Rt, TemplatePortal as Mt, CdkPortalOutlet as J } from "@angular/cdk/portal";
import { _CdkPrivateStyleLoader as tt } from "@angular/cdk/private";
import { CdkObserveContent as et } from "@angular/cdk/observers";
import "@angular/cdk/layout";
import "@angular/cdk/coercion";
var f = ["*"];
function Pt(r, d) { r & 1 && t.\u0275\u0275projection(0); }
var at = ["tabListContainer"], it = ["tabList"], nt = ["tabListInner"], rt = ["nextPaginator"], ot = ["previousPaginator"], Bt = ["content"];
function Lt(r, d) { }
var Et = ["tabBodyWrapper"], St = ["tabHeader"];
function At(r, d) { }
function Ft(r, d) { if (r & 1 && t.\u0275\u0275template(0, At, 0, 0, "ng-template", 12), r & 2) {
    let e = t.\u0275\u0275nextContext().$implicit;
    t.\u0275\u0275property("cdkPortalOutlet", e.templateLabel);
} }
function Ht(r, d) { if (r & 1 && t.\u0275\u0275text(0), r & 2) {
    let e = t.\u0275\u0275nextContext().$implicit;
    t.\u0275\u0275textInterpolate(e.textLabel);
} }
function Vt(r, d) { if (r & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "div", 7, 2), t.\u0275\u0275listener("click", function () { let i = t.\u0275\u0275restoreView(e), n = i.$implicit, o = i.$index, l = t.\u0275\u0275nextContext(), b = t.\u0275\u0275reference(1); return t.\u0275\u0275resetView(l._handleClick(n, b, o)); })("cdkFocusChange", function (i) { let n = t.\u0275\u0275restoreView(e).$index, o = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(o._tabFocusChanged(i, n)); }), t.\u0275\u0275element(2, "span", 8)(3, "div", 9), t.\u0275\u0275elementStart(4, "span", 10)(5, "span", 11), t.\u0275\u0275conditionalCreate(6, Ft, 1, 1, null, 12)(7, Ht, 1, 1), t.\u0275\u0275elementEnd()()();
} if (r & 2) {
    let e = d.$implicit, a = d.$index, i = t.\u0275\u0275reference(1), n = t.\u0275\u0275nextContext();
    t.\u0275\u0275classMap(e.labelClass), t.\u0275\u0275classProp("mdc-tab--active", n.selectedIndex === a), t.\u0275\u0275property("id", n._getTabLabelId(e, a))("disabled", e.disabled)("fitInkBarToContent", n.fitInkBarToContent), t.\u0275\u0275attribute("tabIndex", n._getTabIndex(a))("aria-posinset", a + 1)("aria-setsize", n._tabs.length)("aria-controls", n._getTabContentId(a))("aria-selected", n.selectedIndex === a)("aria-label", e.ariaLabel || null)("aria-labelledby", !e.ariaLabel && e.ariaLabelledby ? e.ariaLabelledby : null), t.\u0275\u0275advance(3), t.\u0275\u0275property("matRippleTrigger", i)("matRippleDisabled", e.disabled || n.disableRipple), t.\u0275\u0275advance(3), t.\u0275\u0275conditional(e.templateLabel ? 6 : 7);
} }
function Nt(r, d) { r & 1 && t.\u0275\u0275projection(0); }
function Ot(r, d) { if (r & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "mat-tab-body", 13), t.\u0275\u0275listener("_onCentered", function () { t.\u0275\u0275restoreView(e); let i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i._removeTabBodyWrapperHeight()); })("_onCentering", function (i) { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n._setTabBodyWrapperHeight(i)); })("_beforeCentering", function (i) { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n._bodyCentered(i)); }), t.\u0275\u0275elementEnd();
} if (r & 2) {
    let e = d.$implicit, a = d.$index, i = t.\u0275\u0275nextContext();
    t.\u0275\u0275classMap(e.bodyClass), t.\u0275\u0275property("id", i._getTabContentId(a))("content", e.content)("position", e.position)("animationDuration", i.animationDuration)("preserveContent", i.preserveContent), t.\u0275\u0275attribute("tabindex", i.contentTabIndex != null && i.selectedIndex === a ? i.contentTabIndex : null)("aria-labelledby", i._getTabLabelId(e, a))("aria-hidden", i.selectedIndex !== a);
} }
var Qt = ["mat-tab-nav-bar", ""], zt = ["mat-tab-link", ""], Wt = new _("MatTabContent"), jt = (() => { class r {
    template = s(B);
    constructor() { }
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: r, selectors: [["", "matTabContent", ""]], features: [t.\u0275\u0275ProvidersFeature([{ provide: Wt, useExisting: r }])] });
} return r; })(), Gt = new _("MatTabLabel"), st = new _("MAT_TAB"), $t = (() => { class r extends Rt {
    _closestTab = s(st, { optional: !0 });
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = t.\u0275\u0275getInheritedFactory(r)))(i || r); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: r, selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]], features: [t.\u0275\u0275ProvidersFeature([{ provide: Gt, useExisting: r }]), t.\u0275\u0275InheritDefinitionFeature] });
} return r; })(), lt = new _("MAT_TAB_GROUP"), qt = (() => { class r {
    _viewContainerRef = s(yt);
    _closestTabGroup = s(lt, { optional: !0 });
    disabled = !1;
    get templateLabel() { return this._templateLabel; }
    set templateLabel(e) { this._setTemplateLabelInput(e); }
    _templateLabel;
    _explicitContent = void 0;
    _implicitContent;
    textLabel = "";
    ariaLabel;
    ariaLabelledby;
    labelClass;
    bodyClass;
    id = null;
    _contentPortal = null;
    get content() { return this._contentPortal; }
    _stateChanges = new g;
    position = null;
    origin = null;
    isActive = !1;
    constructor() { s(tt).load(D); }
    ngOnChanges(e) { (e.hasOwnProperty("textLabel") || e.hasOwnProperty("disabled")) && this._stateChanges.next(); }
    ngOnDestroy() { this._stateChanges.complete(); }
    ngOnInit() { this._contentPortal = new Mt(this._explicitContent || this._implicitContent, this._viewContainerRef); }
    _setTemplateLabelInput(e) { e && e._closestTab === this && (this._templateLabel = e); }
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: r, selectors: [["mat-tab"]], contentQueries: function (a, i, n) { if (a & 1 && (t.\u0275\u0275contentQuery(n, $t, 5), t.\u0275\u0275contentQuery(n, jt, 7, B)), a & 2) {
            let o;
            t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (i.templateLabel = o.first), t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (i._explicitContent = o.first);
        } }, viewQuery: function (a, i) { if (a & 1 && t.\u0275\u0275viewQuery(B, 7), a & 2) {
            let n;
            t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (i._implicitContent = n.first);
        } }, hostAttrs: ["hidden", ""], hostVars: 1, hostBindings: function (a, i) { a & 2 && t.\u0275\u0275attribute("id", null); }, inputs: { disabled: [2, "disabled", "disabled", c], textLabel: [0, "label", "textLabel"], ariaLabel: [0, "aria-label", "ariaLabel"], ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"], labelClass: "labelClass", bodyClass: "bodyClass", id: "id" }, exportAs: ["matTab"], features: [t.\u0275\u0275ProvidersFeature([{ provide: st, useExisting: r }]), t.\u0275\u0275NgOnChangesFeature], ngContentSelectors: f, decls: 1, vars: 0, template: function (a, i) { a & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275domTemplate(0, Pt, 1, 0, "ng-template")); }, encapsulation: 2 });
} return r; })(), M = "mdc-tab-indicator--active", G = "mdc-tab-indicator--no-transition", x = class {
    _items;
    _currentItem;
    constructor(d) { this._items = d; }
    hide() { this._items.forEach(d => d.deactivateInkBar()), this._currentItem = void 0; }
    alignToElement(d) { let e = this._items.find(i => i.elementRef.nativeElement === d), a = this._currentItem; if (e !== a && (a?.deactivateInkBar(), e)) {
        let i = a?.elementRef.nativeElement.getBoundingClientRect?.();
        e.activateInkBar(i), this._currentItem = e;
    } }
}, dt = (() => { class r {
    _elementRef = s(u);
    _inkBarElement;
    _inkBarContentElement;
    _fitToContent = !1;
    get fitInkBarToContent() { return this._fitToContent; }
    set fitInkBarToContent(e) { this._fitToContent !== e && (this._fitToContent = e, this._inkBarElement && this._appendInkBarElement()); }
    activateInkBar(e) { let a = this._elementRef.nativeElement; if (!e || !a.getBoundingClientRect || !this._inkBarContentElement) {
        a.classList.add(M);
        return;
    } let i = a.getBoundingClientRect(), n = e.width / i.width, o = e.left - i.left; a.classList.add(G), this._inkBarContentElement.style.setProperty("transform", `translateX(${o}px) scaleX(${n})`), a.getBoundingClientRect(), a.classList.remove(G), a.classList.add(M), this._inkBarContentElement.style.setProperty("transform", ""); }
    deactivateInkBar() { this._elementRef.nativeElement.classList.remove(M); }
    ngOnInit() { this._createInkBarElement(); }
    ngOnDestroy() { this._inkBarElement?.remove(), this._inkBarElement = this._inkBarContentElement = null; }
    _createInkBarElement() { let e = this._elementRef.nativeElement.ownerDocument || document, a = this._inkBarElement = e.createElement("span"), i = this._inkBarContentElement = e.createElement("span"); a.className = "mdc-tab-indicator", i.className = "mdc-tab-indicator__content mdc-tab-indicator__content--underline", a.appendChild(this._inkBarContentElement), this._appendInkBarElement(); }
    _appendInkBarElement() { this._inkBarElement; let e = this._fitToContent ? this._elementRef.nativeElement.querySelector(".mdc-tab__content") : this._elementRef.nativeElement; e.appendChild(this._inkBarElement); }
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: r, inputs: { fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", c] } });
} return r; })();
function Zt() { return d => ({ left: d ? (d.offsetLeft || 0) + "px" : "0", width: d ? (d.offsetWidth || 0) + "px" : "0" }); }
var Pe = new _("MatInkBarPositioner", { providedIn: "root", factory: Zt }), ct = (() => { class r extends dt {
    elementRef = s(u);
    disabled = !1;
    focus() { this.elementRef.nativeElement.focus(); }
    getOffsetLeft() { return this.elementRef.nativeElement.offsetLeft; }
    getOffsetWidth() { return this.elementRef.nativeElement.offsetWidth; }
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = t.\u0275\u0275getInheritedFactory(r)))(i || r); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: r, selectors: [["", "matTabLabelWrapper", ""]], hostVars: 3, hostBindings: function (a, i) { a & 2 && (t.\u0275\u0275attribute("aria-disabled", !!i.disabled), t.\u0275\u0275classProp("mat-mdc-tab-disabled", i.disabled)); }, inputs: { disabled: [2, "disabled", "disabled", c] }, features: [t.\u0275\u0275InheritDefinitionFeature] });
} return r; })(), $ = { passive: !0 }, Kt = 650, Yt = 100, mt = (() => { class r {
    _elementRef = s(u);
    _changeDetectorRef = s(H);
    _viewportRuler = s(gt);
    _dir = s(Z, { optional: !0 });
    _ngZone = s(w);
    _platform = s(Y);
    _sharedResizeObserver = s(ft);
    _injector = s(X);
    _renderer = s(U);
    _animationsDisabled = v();
    _eventCleanups;
    _scrollDistance = 0;
    _selectedIndexChanged = !1;
    _destroyed = new g;
    _showPaginationControls = !1;
    _disableScrollAfter = !0;
    _disableScrollBefore = !0;
    _tabLabelCount;
    _scrollDistanceChanged;
    _keyManager;
    _currentTextContent;
    _stopScrolling = new g;
    disablePagination = !1;
    get selectedIndex() { return this._selectedIndex; }
    set selectedIndex(e) { let a = isNaN(e) ? 0 : e; this._selectedIndex != a && (this._selectedIndexChanged = !0, this._selectedIndex = a, this._keyManager && this._keyManager.updateActiveItem(a)); }
    _selectedIndex = 0;
    selectFocusedIndex = new m;
    indexFocused = new m;
    constructor() { this._eventCleanups = this._ngZone.runOutsideAngular(() => [this._renderer.listen(this._elementRef.nativeElement, "mouseleave", () => this._stopInterval())]); }
    ngAfterViewInit() { this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement, "touchstart", () => this._handlePaginatorPress("before"), $), this._renderer.listen(this._nextPaginator.nativeElement, "touchstart", () => this._handlePaginatorPress("after"), $)); }
    ngAfterContentInit() { let e = this._dir ? this._dir.change : z("ltr"), a = this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(xt(32), p(this._destroyed)), i = this._viewportRuler.change(150).pipe(p(this._destroyed)), n = () => { this.updatePagination(), this._alignInkBarToSelectedTab(); }; this._keyManager = new ht(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(() => !1), this._keyManager.updateActiveItem(Math.max(this._selectedIndex, 0)), L(n, { injector: this._injector }), T(e, i, a, this._items.changes, this._itemsResized()).pipe(p(this._destroyed)).subscribe(() => { this._ngZone.run(() => { Promise.resolve().then(() => { this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), this._scrollDistance)), n(); }); }), this._keyManager?.withHorizontalOrientation(this._getLayoutDirection()); }), this._keyManager.change.subscribe(o => { this.indexFocused.emit(o), this._setTabFocus(o); }); }
    _itemsResized() { return typeof ResizeObserver != "function" ? Q : this._items.changes.pipe(k(this._items), wt(e => new N(a => this._ngZone.runOutsideAngular(() => { let i = new ResizeObserver(n => a.next(n)); return e.forEach(n => i.observe(n.elementRef.nativeElement)), () => { i.disconnect(); }; }))), It(1), Dt(e => e.some(a => a.contentRect.width > 0 && a.contentRect.height > 0))); }
    ngAfterContentChecked() { this._tabLabelCount != this._items.length && (this.updatePagination(), this._tabLabelCount = this._items.length, this._changeDetectorRef.markForCheck()), this._selectedIndexChanged && (this._scrollToLabel(this._selectedIndex), this._checkScrollingControls(), this._alignInkBarToSelectedTab(), this._selectedIndexChanged = !1, this._changeDetectorRef.markForCheck()), this._scrollDistanceChanged && (this._updateTabScrollPosition(), this._scrollDistanceChanged = !1, this._changeDetectorRef.markForCheck()); }
    ngOnDestroy() { this._eventCleanups.forEach(e => e()), this._keyManager?.destroy(), this._destroyed.next(), this._destroyed.complete(), this._stopScrolling.complete(); }
    _handleKeydown(e) { if (!ut(e))
        switch (e.keyCode) {
            case K:
            case P:
                if (this.focusIndex !== this.selectedIndex) {
                    let a = this._items.get(this.focusIndex);
                    a && !a.disabled && (this.selectFocusedIndex.emit(this.focusIndex), this._itemSelected(e));
                }
                break;
            default: this._keyManager?.onKeydown(e);
        } }
    _onContentChanges() { let e = this._elementRef.nativeElement.textContent; e !== this._currentTextContent && (this._currentTextContent = e || "", this._ngZone.run(() => { this.updatePagination(), this._alignInkBarToSelectedTab(), this._changeDetectorRef.markForCheck(); })); }
    updatePagination() { this._checkPaginationEnabled(), this._checkScrollingControls(), this._updateTabScrollPosition(); }
    get focusIndex() { return this._keyManager ? this._keyManager.activeItemIndex : 0; }
    set focusIndex(e) { !this._isValidIndex(e) || this.focusIndex === e || !this._keyManager || this._keyManager.setActiveItem(e); }
    _isValidIndex(e) { return this._items ? !!this._items.toArray()[e] : !0; }
    _setTabFocus(e) { if (this._showPaginationControls && this._scrollToLabel(e), this._items && this._items.length) {
        this._items.toArray()[e].focus();
        let a = this._tabListContainer.nativeElement;
        this._getLayoutDirection() == "ltr" ? a.scrollLeft = 0 : a.scrollLeft = a.scrollWidth - a.offsetWidth;
    } }
    _getLayoutDirection() { return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr"; }
    _updateTabScrollPosition() { if (this.disablePagination)
        return; let e = this.scrollDistance, a = this._getLayoutDirection() === "ltr" ? -e : e; this._tabList.nativeElement.style.transform = `translateX(${Math.round(a)}px)`, (this._platform.TRIDENT || this._platform.EDGE) && (this._tabListContainer.nativeElement.scrollLeft = 0); }
    get scrollDistance() { return this._scrollDistance; }
    set scrollDistance(e) { this._scrollTo(e); }
    _scrollHeader(e) { let a = this._tabListContainer.nativeElement.offsetWidth, i = (e == "before" ? -1 : 1) * a / 3; return this._scrollTo(this._scrollDistance + i); }
    _handlePaginatorClick(e) { this._stopInterval(), this._scrollHeader(e); }
    _scrollToLabel(e) { if (this.disablePagination)
        return; let a = this._items ? this._items.toArray()[e] : null; if (!a)
        return; let i = this._tabListContainer.nativeElement.offsetWidth, { offsetLeft: n, offsetWidth: o } = a.elementRef.nativeElement, l, b; this._getLayoutDirection() == "ltr" ? (l = n, b = l + o) : (b = this._tabListInner.nativeElement.offsetWidth - n, l = b - o); let I = this.scrollDistance, V = this.scrollDistance + i; l < I ? this.scrollDistance -= I - l : b > V && (this.scrollDistance += Math.min(b - V, l - I)); }
    _checkPaginationEnabled() { if (this.disablePagination)
        this._showPaginationControls = !1;
    else {
        let e = this._tabListInner.nativeElement.scrollWidth, a = this._elementRef.nativeElement.offsetWidth, i = e - a >= 5;
        i || (this.scrollDistance = 0), i !== this._showPaginationControls && (this._showPaginationControls = i, this._changeDetectorRef.markForCheck());
    } }
    _checkScrollingControls() { this.disablePagination ? this._disableScrollAfter = this._disableScrollBefore = !0 : (this._disableScrollBefore = this.scrollDistance == 0, this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance(), this._changeDetectorRef.markForCheck()); }
    _getMaxScrollDistance() { let e = this._tabListInner.nativeElement.scrollWidth, a = this._tabListContainer.nativeElement.offsetWidth; return e - a || 0; }
    _alignInkBarToSelectedTab() { let e = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null, a = e ? e.elementRef.nativeElement : null; a ? this._inkBar.alignToElement(a) : this._inkBar.hide(); }
    _stopInterval() { this._stopScrolling.next(); }
    _handlePaginatorPress(e, a) { a && a.button != null && a.button !== 0 || (this._stopInterval(), W(Kt, Yt).pipe(p(T(this._stopScrolling, this._destroyed))).subscribe(() => { let { maxScrollDistance: i, distance: n } = this._scrollHeader(e); (n === 0 || n >= i) && this._stopInterval(); })); }
    _scrollTo(e) { if (this.disablePagination)
        return { maxScrollDistance: 0, distance: 0 }; let a = this._getMaxScrollDistance(); return this._scrollDistance = Math.max(0, Math.min(a, e)), this._scrollDistanceChanged = !0, this._checkScrollingControls(), { maxScrollDistance: a, distance: this._scrollDistance }; }
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: r, inputs: { disablePagination: [2, "disablePagination", "disablePagination", c], selectedIndex: [2, "selectedIndex", "selectedIndex", C] }, outputs: { selectFocusedIndex: "selectFocusedIndex", indexFocused: "indexFocused" } });
} return r; })(), Xt = (() => {
    class r extends mt {
        _items;
        _tabListContainer;
        _tabList;
        _tabListInner;
        _nextPaginator;
        _previousPaginator;
        _inkBar;
        ariaLabel;
        ariaLabelledby;
        disableRipple = !1;
        ngAfterContentInit() { this._inkBar = new x(this._items), super.ngAfterContentInit(); }
        _itemSelected(e) { e.preventDefault(); }
        static \u0275fac = (() => { let e; return function (i) { return (e || (e = t.\u0275\u0275getInheritedFactory(r)))(i || r); }; })();
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: r, selectors: [["mat-tab-header"]], contentQueries: function (a, i, n) { if (a & 1 && t.\u0275\u0275contentQuery(n, ct, 4), a & 2) {
                let o;
                t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (i._items = o);
            } }, viewQuery: function (a, i) { if (a & 1 && (t.\u0275\u0275viewQuery(at, 7), t.\u0275\u0275viewQuery(it, 7), t.\u0275\u0275viewQuery(nt, 7), t.\u0275\u0275viewQuery(rt, 5), t.\u0275\u0275viewQuery(ot, 5)), a & 2) {
                let n;
                t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (i._tabListContainer = n.first), t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (i._tabList = n.first), t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (i._tabListInner = n.first), t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (i._nextPaginator = n.first), t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (i._previousPaginator = n.first);
            } }, hostAttrs: [1, "mat-mdc-tab-header"], hostVars: 4, hostBindings: function (a, i) { a & 2 && t.\u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled", i._showPaginationControls)("mat-mdc-tab-header-rtl", i._getLayoutDirection() == "rtl"); }, inputs: { ariaLabel: [0, "aria-label", "ariaLabel"], ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"], disableRipple: [2, "disableRipple", "disableRipple", c] }, features: [t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: f, decls: 13, vars: 10, consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-label-container", 3, "keydown"], ["role", "tablist", 1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-labels"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]], template: function (a, i) { if (a & 1) {
                let n = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275projectionDef(), t.\u0275\u0275elementStart(0, "div", 5, 0), t.\u0275\u0275listener("click", function () { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._handlePaginatorClick("before")); })("mousedown", function (l) { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._handlePaginatorPress("before", l)); })("touchend", function () { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._stopInterval()); }), t.\u0275\u0275element(2, "div", 6), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(3, "div", 7, 1), t.\u0275\u0275listener("keydown", function (l) { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._handleKeydown(l)); }), t.\u0275\u0275elementStart(5, "div", 8, 2), t.\u0275\u0275listener("cdkObserveContent", function () { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._onContentChanges()); }), t.\u0275\u0275elementStart(7, "div", 9, 3), t.\u0275\u0275projection(9), t.\u0275\u0275elementEnd()()(), t.\u0275\u0275elementStart(10, "div", 10, 4), t.\u0275\u0275listener("mousedown", function (l) { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._handlePaginatorPress("after", l)); })("click", function () { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._handlePaginatorClick("after")); })("touchend", function () { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._stopInterval()); }), t.\u0275\u0275element(12, "div", 6), t.\u0275\u0275elementEnd();
            } a & 2 && (t.\u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", i._disableScrollBefore), t.\u0275\u0275property("matRippleDisabled", i._disableScrollBefore || i.disableRipple), t.\u0275\u0275advance(3), t.\u0275\u0275classProp("_mat-animation-noopable", i._animationsDisabled), t.\u0275\u0275advance(2), t.\u0275\u0275attribute("aria-label", i.ariaLabel || null)("aria-labelledby", i.ariaLabelledby || null), t.\u0275\u0275advance(5), t.\u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", i._disableScrollAfter), t.\u0275\u0275property("matRippleDisabled", i._disableScrollAfter || i.disableRipple)); }, dependencies: [y, et], styles: [`.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-divider-height, 1px);border-bottom-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-divider-height, 1px);border-top-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mat-tab-container-height, 48px)}.mat-mdc-tab::before{margin:5px}@media(forced-colors: active){.mat-mdc-tab[aria-disabled=true]{color:GrayText}}
`], encapsulation: 2 });
    }
    return r;
})(), bt = new _("MAT_TABS_CONFIG"), q = (() => { class r extends J {
    _host = s(S);
    _ngZone = s(w);
    _centeringSub = h.EMPTY;
    _leavingSub = h.EMPTY;
    constructor() { super(); }
    ngOnInit() { super.ngOnInit(), this._centeringSub = this._host._beforeCentering.pipe(k(this._host._isCenterPosition())).subscribe(e => { this._host._content && e && !this.hasAttached() && this._ngZone.run(() => { Promise.resolve().then(), this.attach(this._host._content); }); }), this._leavingSub = this._host._afterLeavingCenter.subscribe(() => { this._host.preserveContent || this._ngZone.run(() => this.detach()); }); }
    ngOnDestroy() { super.ngOnDestroy(), this._centeringSub.unsubscribe(), this._leavingSub.unsubscribe(); }
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: r, selectors: [["", "matTabBodyHost", ""]], features: [t.\u0275\u0275InheritDefinitionFeature] });
} return r; })(), S = (() => {
    class r {
        _elementRef = s(u);
        _dir = s(Z, { optional: !0 });
        _ngZone = s(w);
        _injector = s(X);
        _renderer = s(U);
        _diAnimationsDisabled = v();
        _eventCleanups;
        _initialized;
        _fallbackTimer;
        _positionIndex;
        _dirChangeSubscription = h.EMPTY;
        _position;
        _previousPosition;
        _onCentering = new m;
        _beforeCentering = new m;
        _afterLeavingCenter = new m;
        _onCentered = new m(!0);
        _portalHost;
        _contentElement;
        _content;
        animationDuration = "500ms";
        preserveContent = !1;
        set position(e) { this._positionIndex = e, this._computePositionAnimationState(); }
        constructor() { if (this._dir) {
            let e = s(H);
            this._dirChangeSubscription = this._dir.change.subscribe(a => { this._computePositionAnimationState(a), e.markForCheck(); });
        } }
        ngOnInit() { this._bindTransitionEvents(), this._position === "center" && (this._setActiveClass(!0), L(() => this._onCentering.emit(this._elementRef.nativeElement.clientHeight), { injector: this._injector })), this._initialized = !0; }
        ngOnDestroy() { clearTimeout(this._fallbackTimer), this._eventCleanups?.forEach(e => e()), this._dirChangeSubscription.unsubscribe(); }
        _bindTransitionEvents() { this._ngZone.runOutsideAngular(() => { let e = this._elementRef.nativeElement, a = i => { i.target === this._contentElement?.nativeElement && (this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"), i.type === "transitionend" && this._transitionDone()); }; this._eventCleanups = [this._renderer.listen(e, "transitionstart", i => { i.target === this._contentElement?.nativeElement && (this._elementRef.nativeElement.classList.add("mat-tab-body-animating"), this._transitionStarted()); }), this._renderer.listen(e, "transitionend", a), this._renderer.listen(e, "transitioncancel", a)]; }); }
        _transitionStarted() { clearTimeout(this._fallbackTimer); let e = this._position === "center"; this._beforeCentering.emit(e), e && this._onCentering.emit(this._elementRef.nativeElement.clientHeight); }
        _transitionDone() { this._position === "center" ? this._onCentered.emit() : this._previousPosition === "center" && this._afterLeavingCenter.emit(); }
        _setActiveClass(e) { this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active", e); }
        _getLayoutDirection() { return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr"; }
        _isCenterPosition() { return this._positionIndex === 0; }
        _computePositionAnimationState(e = this._getLayoutDirection()) { this._previousPosition = this._position, this._positionIndex < 0 ? this._position = e == "ltr" ? "left" : "right" : this._positionIndex > 0 ? this._position = e == "ltr" ? "right" : "left" : this._position = "center", this._animationsDisabled() ? this._simulateTransitionEvents() : this._initialized && (this._position === "center" || this._previousPosition === "center") && (clearTimeout(this._fallbackTimer), this._fallbackTimer = this._ngZone.runOutsideAngular(() => setTimeout(() => this._simulateTransitionEvents(), 100))); }
        _simulateTransitionEvents() { this._transitionStarted(), L(() => this._transitionDone(), { injector: this._injector }); }
        _animationsDisabled() { return this._diAnimationsDisabled || this.animationDuration === "0ms" || this.animationDuration === "0s"; }
        static \u0275fac = function (a) { return new (a || r); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: r, selectors: [["mat-tab-body"]], viewQuery: function (a, i) { if (a & 1 && (t.\u0275\u0275viewQuery(q, 5), t.\u0275\u0275viewQuery(Bt, 5)), a & 2) {
                let n;
                t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (i._portalHost = n.first), t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (i._contentElement = n.first);
            } }, hostAttrs: [1, "mat-mdc-tab-body"], hostVars: 1, hostBindings: function (a, i) { a & 2 && t.\u0275\u0275attribute("inert", i._position === "center" ? null : ""); }, inputs: { _content: [0, "content", "_content"], animationDuration: "animationDuration", preserveContent: "preserveContent", position: "position" }, outputs: { _onCentering: "_onCentering", _beforeCentering: "_beforeCentering", _onCentered: "_onCentered" }, decls: 3, vars: 6, consts: [["content", ""], ["cdkScrollable", "", 1, "mat-mdc-tab-body-content"], ["matTabBodyHost", ""]], template: function (a, i) { a & 1 && (t.\u0275\u0275elementStart(0, "div", 1, 0), t.\u0275\u0275template(2, Lt, 0, 0, "ng-template", 2), t.\u0275\u0275elementEnd()), a & 2 && t.\u0275\u0275classProp("mat-tab-body-content-left", i._position === "left")("mat-tab-body-content-right", i._position === "right")("mat-tab-body-content-can-animate", i._position === "center" || i._previousPosition === "center"); }, dependencies: [q, vt], styles: [`.mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto;transform:none;visibility:hidden}.mat-tab-body-animating>.mat-mdc-tab-body-content,.mat-mdc-tab-body-active>.mat-mdc-tab-body-content{visibility:visible}.mat-tab-body-animating>.mat-mdc-tab-body-content{min-height:1px}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-tab-body-content-can-animate{transition:transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate{transition:none}.mat-tab-body-content-left{transform:translate3d(-100%, 0, 0)}.mat-tab-body-content-right{transform:translate3d(100%, 0, 0)}
`], encapsulation: 2 });
    }
    return r;
})(), Be = (() => {
    class r {
        _elementRef = s(u);
        _changeDetectorRef = s(H);
        _ngZone = s(w);
        _tabsSubscription = h.EMPTY;
        _tabLabelSubscription = h.EMPTY;
        _tabBodySubscription = h.EMPTY;
        _diAnimationsDisabled = v();
        _allTabs;
        _tabBodies;
        _tabBodyWrapper;
        _tabHeader;
        _tabs = new kt;
        _indexToSelect = 0;
        _lastFocusedTabIndex = null;
        _tabBodyWrapperHeight = 0;
        color;
        get fitInkBarToContent() { return this._fitInkBarToContent; }
        set fitInkBarToContent(e) { this._fitInkBarToContent = e, this._changeDetectorRef.markForCheck(); }
        _fitInkBarToContent = !1;
        stretchTabs = !0;
        alignTabs = null;
        dynamicHeight = !1;
        get selectedIndex() { return this._selectedIndex; }
        set selectedIndex(e) { this._indexToSelect = isNaN(e) ? null : e; }
        _selectedIndex = null;
        headerPosition = "above";
        get animationDuration() { return this._animationDuration; }
        set animationDuration(e) { let a = e + ""; this._animationDuration = /^\d+$/.test(a) ? e + "ms" : a; }
        _animationDuration;
        get contentTabIndex() { return this._contentTabIndex; }
        set contentTabIndex(e) { this._contentTabIndex = isNaN(e) ? null : e; }
        _contentTabIndex;
        disablePagination = !1;
        disableRipple = !1;
        preserveContent = !1;
        get backgroundColor() { return this._backgroundColor; }
        set backgroundColor(e) { let a = this._elementRef.nativeElement.classList; a.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`), e && a.add("mat-tabs-with-background", `mat-background-${e}`), this._backgroundColor = e; }
        _backgroundColor;
        ariaLabel;
        ariaLabelledby;
        selectedIndexChange = new m;
        focusChange = new m;
        animationDone = new m;
        selectedTabChange = new m(!0);
        _groupId;
        _isServer = !s(Y).isBrowser;
        constructor() { let e = s(bt, { optional: !0 }); this._groupId = s(F).getId("mat-tab-group-"), this.animationDuration = e && e.animationDuration ? e.animationDuration : "500ms", this.disablePagination = e && e.disablePagination != null ? e.disablePagination : !1, this.dynamicHeight = e && e.dynamicHeight != null ? e.dynamicHeight : !1, e?.contentTabIndex != null && (this.contentTabIndex = e.contentTabIndex), this.preserveContent = !!e?.preserveContent, this.fitInkBarToContent = e && e.fitInkBarToContent != null ? e.fitInkBarToContent : !1, this.stretchTabs = e && e.stretchTabs != null ? e.stretchTabs : !0, this.alignTabs = e && e.alignTabs != null ? e.alignTabs : null; }
        ngAfterContentChecked() { let e = this._indexToSelect = this._clampTabIndex(this._indexToSelect); if (this._selectedIndex != e) {
            let a = this._selectedIndex == null;
            if (!a) {
                this.selectedTabChange.emit(this._createChangeEvent(e));
                let i = this._tabBodyWrapper.nativeElement;
                i.style.minHeight = i.clientHeight + "px";
            }
            Promise.resolve().then(() => { this._tabs.forEach((i, n) => i.isActive = n === e), a || (this.selectedIndexChange.emit(e), this._tabBodyWrapper.nativeElement.style.minHeight = ""); });
        } this._tabs.forEach((a, i) => { a.position = i - e, this._selectedIndex != null && a.position == 0 && !a.origin && (a.origin = e - this._selectedIndex); }), this._selectedIndex !== e && (this._selectedIndex = e, this._lastFocusedTabIndex = null, this._changeDetectorRef.markForCheck()); }
        ngAfterContentInit() { this._subscribeToAllTabChanges(), this._subscribeToTabLabels(), this._tabsSubscription = this._tabs.changes.subscribe(() => { let e = this._clampTabIndex(this._indexToSelect); if (e === this._selectedIndex) {
            let a = this._tabs.toArray(), i;
            for (let n = 0; n < a.length; n++)
                if (a[n].isActive) {
                    this._indexToSelect = this._selectedIndex = n, this._lastFocusedTabIndex = null, i = a[n];
                    break;
                }
            !i && a[e] && Promise.resolve().then(() => { a[e].isActive = !0, this.selectedTabChange.emit(this._createChangeEvent(e)); });
        } this._changeDetectorRef.markForCheck(); }); }
        ngAfterViewInit() { this._tabBodySubscription = this._tabBodies.changes.subscribe(() => this._bodyCentered(!0)); }
        _subscribeToAllTabChanges() { this._allTabs.changes.pipe(k(this._allTabs)).subscribe(e => { this._tabs.reset(e.filter(a => a._closestTabGroup === this || !a._closestTabGroup)), this._tabs.notifyOnChanges(); }); }
        ngOnDestroy() { this._tabs.destroy(), this._tabsSubscription.unsubscribe(), this._tabLabelSubscription.unsubscribe(), this._tabBodySubscription.unsubscribe(); }
        realignInkBar() { this._tabHeader && this._tabHeader._alignInkBarToSelectedTab(); }
        updatePagination() { this._tabHeader && this._tabHeader.updatePagination(); }
        focusTab(e) { let a = this._tabHeader; a && (a.focusIndex = e); }
        _focusChanged(e) { this._lastFocusedTabIndex = e, this.focusChange.emit(this._createChangeEvent(e)); }
        _createChangeEvent(e) { let a = new A; return a.index = e, this._tabs && this._tabs.length && (a.tab = this._tabs.toArray()[e]), a; }
        _subscribeToTabLabels() { this._tabLabelSubscription && this._tabLabelSubscription.unsubscribe(), this._tabLabelSubscription = T(...this._tabs.map(e => e._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck()); }
        _clampTabIndex(e) { return Math.min(this._tabs.length - 1, Math.max(e || 0, 0)); }
        _getTabLabelId(e, a) { return e.id || `${this._groupId}-label-${a}`; }
        _getTabContentId(e) { return `${this._groupId}-content-${e}`; }
        _setTabBodyWrapperHeight(e) { if (!this.dynamicHeight || !this._tabBodyWrapperHeight) {
            this._tabBodyWrapperHeight = e;
            return;
        } let a = this._tabBodyWrapper.nativeElement; a.style.height = this._tabBodyWrapperHeight + "px", this._tabBodyWrapper.nativeElement.offsetHeight && (a.style.height = e + "px"); }
        _removeTabBodyWrapperHeight() { let e = this._tabBodyWrapper.nativeElement; this._tabBodyWrapperHeight = e.clientHeight, e.style.height = "", this._ngZone.run(() => this.animationDone.emit()); }
        _handleClick(e, a, i) { a.focusIndex = i, e.disabled || (this.selectedIndex = i); }
        _getTabIndex(e) { let a = this._lastFocusedTabIndex ?? this.selectedIndex; return e === a ? 0 : -1; }
        _tabFocusChanged(e, a) { e && e !== "mouse" && e !== "touch" && (this._tabHeader.focusIndex = a); }
        _bodyCentered(e) { e && this._tabBodies?.forEach((a, i) => a._setActiveClass(i === this._selectedIndex)); }
        _animationsDisabled() { return this._diAnimationsDisabled || this.animationDuration === "0" || this.animationDuration === "0ms"; }
        static \u0275fac = function (a) { return new (a || r); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: r, selectors: [["mat-tab-group"]], contentQueries: function (a, i, n) { if (a & 1 && t.\u0275\u0275contentQuery(n, qt, 5), a & 2) {
                let o;
                t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (i._allTabs = o);
            } }, viewQuery: function (a, i) { if (a & 1 && (t.\u0275\u0275viewQuery(Et, 5), t.\u0275\u0275viewQuery(St, 5), t.\u0275\u0275viewQuery(S, 5)), a & 2) {
                let n;
                t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (i._tabBodyWrapper = n.first), t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (i._tabHeader = n.first), t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (i._tabBodies = n);
            } }, hostAttrs: [1, "mat-mdc-tab-group"], hostVars: 11, hostBindings: function (a, i) { a & 2 && (t.\u0275\u0275attribute("mat-align-tabs", i.alignTabs), t.\u0275\u0275classMap("mat-" + (i.color || "primary")), t.\u0275\u0275styleProp("--mat-tab-animation-duration", i.animationDuration), t.\u0275\u0275classProp("mat-mdc-tab-group-dynamic-height", i.dynamicHeight)("mat-mdc-tab-group-inverted-header", i.headerPosition === "below")("mat-mdc-tab-group-stretch-tabs", i.stretchTabs)); }, inputs: { color: "color", fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", c], stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", c], alignTabs: [0, "mat-align-tabs", "alignTabs"], dynamicHeight: [2, "dynamicHeight", "dynamicHeight", c], selectedIndex: [2, "selectedIndex", "selectedIndex", C], headerPosition: "headerPosition", animationDuration: "animationDuration", contentTabIndex: [2, "contentTabIndex", "contentTabIndex", C], disablePagination: [2, "disablePagination", "disablePagination", c], disableRipple: [2, "disableRipple", "disableRipple", c], preserveContent: [2, "preserveContent", "preserveContent", c], backgroundColor: "backgroundColor", ariaLabel: [0, "aria-label", "ariaLabel"], ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"] }, outputs: { selectedIndexChange: "selectedIndexChange", focusChange: "focusChange", animationDone: "animationDone", selectedTabChange: "selectedTabChange" }, exportAs: ["matTabGroup"], features: [t.\u0275\u0275ProvidersFeature([{ provide: lt, useExisting: r }])], ngContentSelectors: f, decls: 9, vars: 8, consts: [["tabHeader", ""], ["tabBodyWrapper", ""], ["tabNode", ""], [3, "indexFocused", "selectFocusedIndex", "selectedIndex", "disableRipple", "disablePagination", "aria-label", "aria-labelledby"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-focus-indicator", 3, "id", "mdc-tab--active", "class", "disabled", "fitInkBarToContent"], [1, "mat-mdc-tab-body-wrapper"], ["role", "tabpanel", 3, "id", "class", "content", "position", "animationDuration", "preserveContent"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-focus-indicator", 3, "click", "cdkFocusChange", "id", "disabled", "fitInkBarToContent"], [1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "_onCentered", "_onCentering", "_beforeCentering", "id", "content", "position", "animationDuration", "preserveContent"]], template: function (a, i) { if (a & 1) {
                let n = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275projectionDef(), t.\u0275\u0275elementStart(0, "mat-tab-header", 3, 0), t.\u0275\u0275listener("indexFocused", function (l) { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._focusChanged(l)); })("selectFocusedIndex", function (l) { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i.selectedIndex = l); }), t.\u0275\u0275repeaterCreate(2, Vt, 8, 17, "div", 4, t.\u0275\u0275repeaterTrackByIdentity), t.\u0275\u0275elementEnd(), t.\u0275\u0275conditionalCreate(4, Nt, 1, 0), t.\u0275\u0275elementStart(5, "div", 5, 1), t.\u0275\u0275repeaterCreate(7, Ot, 1, 10, "mat-tab-body", 6, t.\u0275\u0275repeaterTrackByIdentity), t.\u0275\u0275elementEnd();
            } a & 2 && (t.\u0275\u0275property("selectedIndex", i.selectedIndex || 0)("disableRipple", i.disableRipple)("disablePagination", i.disablePagination), t.\u0275\u0275ariaProperty("aria-label", i.ariaLabel)("aria-labelledby", i.ariaLabelledby), t.\u0275\u0275advance(2), t.\u0275\u0275repeater(i._tabs), t.\u0275\u0275advance(2), t.\u0275\u0275conditional(i._isServer ? 4 : -1), t.\u0275\u0275advance(), t.\u0275\u0275classProp("_mat-animation-noopable", i._animationsDisabled()), t.\u0275\u0275advance(2), t.\u0275\u0275repeater(i._tabs)); }, dependencies: [Xt, ct, pt, y, J, S], styles: [`.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1;touch-action:manipulation}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mat-tab-container-height, 48px);font-family:var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-tab-active-indicator-height, 2px);border-radius:var(--mat-tab-active-indicator-shape, 0)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant))}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}
`], encapsulation: 2 });
    }
    return r;
})(), A = class {
    index;
    tab;
}, Ut = (() => {
    class r extends mt {
        _focusedItem = E(null);
        get fitInkBarToContent() { return this._fitInkBarToContent.value; }
        set fitInkBarToContent(e) { this._fitInkBarToContent.next(e), this._changeDetectorRef.markForCheck(); }
        _fitInkBarToContent = new O(!1);
        stretchTabs = !0;
        get animationDuration() { return this._animationDuration; }
        set animationDuration(e) { let a = e + ""; this._animationDuration = /^\d+$/.test(a) ? e + "ms" : a; }
        _animationDuration;
        _items;
        get backgroundColor() { return this._backgroundColor; }
        set backgroundColor(e) { let a = this._elementRef.nativeElement.classList; a.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`), e && a.add("mat-tabs-with-background", `mat-background-${e}`), this._backgroundColor = e; }
        _backgroundColor;
        get disableRipple() { return this._disableRipple(); }
        set disableRipple(e) { this._disableRipple.set(e); }
        _disableRipple = E(!1);
        color = "primary";
        tabPanel;
        _tabListContainer;
        _tabList;
        _tabListInner;
        _nextPaginator;
        _previousPaginator;
        _inkBar;
        constructor() { let e = s(bt, { optional: !0 }); super(), this.disablePagination = e && e.disablePagination != null ? e.disablePagination : !1, this.fitInkBarToContent = e && e.fitInkBarToContent != null ? e.fitInkBarToContent : !1, this.stretchTabs = e && e.stretchTabs != null ? e.stretchTabs : !0; }
        _itemSelected() { }
        ngAfterContentInit() { this._inkBar = new x(this._items), this._items.changes.pipe(k(null), p(this._destroyed)).subscribe(() => this.updateActiveLink()), super.ngAfterContentInit(), this._keyManager.change.pipe(k(null), p(this._destroyed)).subscribe(() => this._focusedItem.set(this._keyManager?.activeItem || null)); }
        ngAfterViewInit() { this.tabPanel, super.ngAfterViewInit(); }
        updateActiveLink() { if (!this._items)
            return; let e = this._items.toArray(); for (let a = 0; a < e.length; a++)
            if (e[a].active) {
                this.selectedIndex = a, this.tabPanel && (this.tabPanel._activeTabId = e[a].id), this._focusedItem.set(e[a]), this._changeDetectorRef.markForCheck();
                return;
            } this.selectedIndex = -1; }
        _getRole() { return this.tabPanel ? "tablist" : this._elementRef.nativeElement.getAttribute("role"); }
        _hasFocus(e) { return this._keyManager?.activeItem === e; }
        static \u0275fac = function (a) { return new (a || r); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: r, selectors: [["", "mat-tab-nav-bar", ""]], contentQueries: function (a, i, n) { if (a & 1 && t.\u0275\u0275contentQuery(n, Jt, 5), a & 2) {
                let o;
                t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (i._items = o);
            } }, viewQuery: function (a, i) { if (a & 1 && (t.\u0275\u0275viewQuery(at, 7), t.\u0275\u0275viewQuery(it, 7), t.\u0275\u0275viewQuery(nt, 7), t.\u0275\u0275viewQuery(rt, 5), t.\u0275\u0275viewQuery(ot, 5)), a & 2) {
                let n;
                t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (i._tabListContainer = n.first), t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (i._tabList = n.first), t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (i._tabListInner = n.first), t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (i._nextPaginator = n.first), t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (i._previousPaginator = n.first);
            } }, hostAttrs: [1, "mat-mdc-tab-nav-bar", "mat-mdc-tab-header"], hostVars: 17, hostBindings: function (a, i) { a & 2 && (t.\u0275\u0275attribute("role", i._getRole()), t.\u0275\u0275styleProp("--mat-tab-animation-duration", i.animationDuration), t.\u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled", i._showPaginationControls)("mat-mdc-tab-header-rtl", i._getLayoutDirection() == "rtl")("mat-mdc-tab-nav-bar-stretch-tabs", i.stretchTabs)("mat-primary", i.color !== "warn" && i.color !== "accent")("mat-accent", i.color === "accent")("mat-warn", i.color === "warn")("_mat-animation-noopable", i._animationsDisabled)); }, inputs: { fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", c], stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", c], animationDuration: "animationDuration", backgroundColor: "backgroundColor", disableRipple: [2, "disableRipple", "disableRipple", c], color: "color", tabPanel: "tabPanel" }, exportAs: ["matTabNavBar", "matTabNav"], features: [t.\u0275\u0275InheritDefinitionFeature], attrs: Qt, ngContentSelectors: f, decls: 13, vars: 6, consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-link-container", 3, "keydown"], [1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-links"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]], template: function (a, i) { if (a & 1) {
                let n = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275projectionDef(), t.\u0275\u0275elementStart(0, "div", 5, 0), t.\u0275\u0275listener("click", function () { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._handlePaginatorClick("before")); })("mousedown", function (l) { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._handlePaginatorPress("before", l)); })("touchend", function () { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._stopInterval()); }), t.\u0275\u0275element(2, "div", 6), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(3, "div", 7, 1), t.\u0275\u0275listener("keydown", function (l) { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._handleKeydown(l)); }), t.\u0275\u0275elementStart(5, "div", 8, 2), t.\u0275\u0275listener("cdkObserveContent", function () { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._onContentChanges()); }), t.\u0275\u0275elementStart(7, "div", 9, 3), t.\u0275\u0275projection(9), t.\u0275\u0275elementEnd()()(), t.\u0275\u0275elementStart(10, "div", 10, 4), t.\u0275\u0275listener("mousedown", function (l) { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._handlePaginatorPress("after", l)); })("click", function () { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._handlePaginatorClick("after")); })("touchend", function () { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(i._stopInterval()); }), t.\u0275\u0275element(12, "div", 6), t.\u0275\u0275elementEnd();
            } a & 2 && (t.\u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", i._disableScrollBefore), t.\u0275\u0275property("matRippleDisabled", i._disableScrollBefore || i.disableRipple), t.\u0275\u0275advance(10), t.\u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", i._disableScrollAfter), t.\u0275\u0275property("matRippleDisabled", i._disableScrollAfter || i.disableRipple)); }, dependencies: [y, et], styles: [`.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1;touch-action:manipulation}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mat-tab-container-height, 48px)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-divider-height, 1px);border-bottom-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-foreground-color)}
`], encapsulation: 2 });
    }
    return r;
})(), Jt = (() => {
    class r extends dt {
        _tabNavBar = s(Ut);
        elementRef = s(u);
        _focusMonitor = s(_t);
        _destroyed = new g;
        _isActive = !1;
        _tabIndex = Tt(() => this._tabNavBar._focusedItem() === this ? this.tabIndex : -1);
        get active() { return this._isActive; }
        set active(e) { e !== this._isActive && (this._isActive = e, this._tabNavBar.updateActiveLink()); }
        disabled = !1;
        get disableRipple() { return this._disableRipple(); }
        set disableRipple(e) { this._disableRipple.set(e); }
        _disableRipple = E(!1);
        tabIndex = 0;
        rippleConfig;
        get rippleDisabled() { return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled; }
        id = s(F).getId("mat-tab-link-");
        constructor() { super(), s(tt).load(D); let e = s(j, { optional: !0 }), a = s(new Ct("tabindex"), { optional: !0 }); this.rippleConfig = e || {}, this.tabIndex = a == null ? 0 : parseInt(a) || 0, v() && (this.rippleConfig.animation = { enterDuration: 0, exitDuration: 0 }), this._tabNavBar._fitInkBarToContent.pipe(p(this._destroyed)).subscribe(i => { this.fitInkBarToContent = i; }); }
        focus() { this.elementRef.nativeElement.focus(); }
        ngAfterViewInit() { this._focusMonitor.monitor(this.elementRef); }
        ngOnDestroy() { this._destroyed.next(), this._destroyed.complete(), super.ngOnDestroy(), this._focusMonitor.stopMonitoring(this.elementRef); }
        _handleFocus() { this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this); }
        _handleKeydown(e) { (e.keyCode === P || e.keyCode === K) && (this.disabled ? e.preventDefault() : this._tabNavBar.tabPanel && (e.keyCode === P && e.preventDefault(), this.elementRef.nativeElement.click())); }
        _getAriaControls() { return this._tabNavBar.tabPanel ? this._tabNavBar.tabPanel?.id : this.elementRef.nativeElement.getAttribute("aria-controls"); }
        _getAriaSelected() { return this._tabNavBar.tabPanel ? this.active ? "true" : "false" : this.elementRef.nativeElement.getAttribute("aria-selected"); }
        _getAriaCurrent() { return this.active && !this._tabNavBar.tabPanel ? "page" : null; }
        _getRole() { return this._tabNavBar.tabPanel ? "tab" : this.elementRef.nativeElement.getAttribute("role"); }
        static \u0275fac = function (a) { return new (a || r); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: r, selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]], hostAttrs: [1, "mdc-tab", "mat-mdc-tab-link", "mat-focus-indicator"], hostVars: 11, hostBindings: function (a, i) { a & 1 && t.\u0275\u0275listener("focus", function () { return i._handleFocus(); })("keydown", function (o) { return i._handleKeydown(o); }), a & 2 && (t.\u0275\u0275attribute("aria-controls", i._getAriaControls())("aria-current", i._getAriaCurrent())("aria-disabled", i.disabled)("aria-selected", i._getAriaSelected())("id", i.id)("tabIndex", i._tabIndex())("role", i._getRole()), t.\u0275\u0275classProp("mat-mdc-tab-disabled", i.disabled)("mdc-tab--active", i.active)); }, inputs: { active: [2, "active", "active", c], disabled: [2, "disabled", "disabled", c], disableRipple: [2, "disableRipple", "disableRipple", c], tabIndex: [2, "tabIndex", "tabIndex", e => e == null ? 0 : C(e)], id: "id" }, exportAs: ["matTabLink"], features: [t.\u0275\u0275InheritDefinitionFeature], attrs: zt, ngContentSelectors: f, decls: 5, vars: 2, consts: [[1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"]], template: function (a, i) { a & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275element(0, "span", 0)(1, "div", 1), t.\u0275\u0275elementStart(2, "span", 2)(3, "span", 3), t.\u0275\u0275projection(4), t.\u0275\u0275elementEnd()()), a & 2 && (t.\u0275\u0275advance(), t.\u0275\u0275property("matRippleTrigger", i.elementRef.nativeElement)("matRippleDisabled", i.rippleDisabled)); }, dependencies: [y], styles: [`.mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mat-tab-container-height, 48px);font-family:var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-tab-active-indicator-height, 2px);border-radius:var(--mat-tab-active-indicator-shape, 0)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant))}.mat-mdc-tab-link .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}
`], encapsulation: 2, changeDetection: 0 });
    }
    return r;
})(), Le = (() => { class r {
    id = s(F).getId("mat-tab-nav-panel-");
    _activeTabId;
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: r, selectors: [["mat-tab-nav-panel"]], hostAttrs: ["role", "tabpanel", 1, "mat-mdc-tab-nav-panel"], hostVars: 2, hostBindings: function (a, i) { a & 2 && t.\u0275\u0275attribute("aria-labelledby", i._activeTabId)("id", i.id); }, inputs: { id: "id" }, exportAs: ["matTabNavPanel"], ngContentSelectors: f, decls: 1, vars: 0, template: function (a, i) { a & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
} return r; })(), Ee = (() => { class r {
    static \u0275fac = function (a) { return new (a || r); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = t.\u0275\u0275defineInjector({ imports: [R, R] });
} return r; })(), Se = { translateTab: { type: 7, name: "translateTab", definitions: [{ type: 0, name: "center, void, left-origin-center, right-origin-center", styles: { type: 6, styles: { transform: "none", visibility: "visible" }, offset: null } }, { type: 0, name: "left", styles: { type: 6, styles: { transform: "translate3d(-100%, 0, 0)", minHeight: "1px", visibility: "hidden" }, offset: null } }, { type: 0, name: "right", styles: { type: 6, styles: { transform: "translate3d(100%, 0, 0)", minHeight: "1px", visibility: "hidden" }, offset: null } }, { type: 1, expr: "* => left, * => right, left => center, right => center", animation: { type: 4, styles: null, timings: "{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)" }, options: null }, { type: 1, expr: "void => left-origin-center", animation: [{ type: 6, styles: { transform: "translate3d(-100%, 0, 0)", visibility: "hidden" }, offset: null }, { type: 4, styles: null, timings: "{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)" }], options: null }, { type: 1, expr: "void => right-origin-center", animation: [{ type: 6, styles: { transform: "translate3d(100%, 0, 0)", visibility: "hidden" }, offset: null }, { type: 4, styles: null, timings: "{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)" }], options: null }], options: {} } };
export { st as MAT_TAB, bt as MAT_TABS_CONFIG, Wt as MAT_TAB_CONTENT, lt as MAT_TAB_GROUP, Gt as MAT_TAB_LABEL, x as MatInkBar, mt as MatPaginatedTabHeader, qt as MatTab, S as MatTabBody, q as MatTabBodyPortal, A as MatTabChangeEvent, jt as MatTabContent, Be as MatTabGroup, Xt as MatTabHeader, $t as MatTabLabel, ct as MatTabLabelWrapper, Jt as MatTabLink, Ut as MatTabNav, Le as MatTabNavPanel, Ee as MatTabsModule, Pe as _MAT_INK_BAR_POSITIONER, Zt as _MAT_INK_BAR_POSITIONER_FACTORY, Se as matTabsAnimations };
