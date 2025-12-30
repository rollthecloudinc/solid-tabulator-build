import { a as T, b as E, c as j, d as k, e as R, f as F, g as L, h as y } from "@nf-internal/chunk-AMBW4EIP";
import "@nf-internal/chunk-HOKO2ONL";
import "@nf-internal/chunk-ARUHDGKS";
import { g as D } from "@nf-internal/chunk-N3CMLH74";
import "@nf-internal/chunk-4UKDDKDA";
import "@nf-internal/chunk-M4QPD34T";
import "@nf-internal/chunk-4MZRILT7";
import { e as g } from "@nf-internal/chunk-5KSFOI5Q";
import { b as v } from "@nf-internal/chunk-RXMLTE5A";
import { f as M, j as d } from "@nf-internal/chunk-VZR6KEPQ";
import { b as u, f as m, k as _, z as f } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import * as o from "@angular/core";
import { InjectionToken as W, inject as l, ChangeDetectorRef as N, ElementRef as w, EventEmitter as h, booleanAttribute as c, TemplateRef as U, forwardRef as z, Injector as C, EnvironmentInjector as X, ViewContainerRef as Z, NgZone as J, Renderer2 as $, afterNextRender as ee } from "@angular/core";
import { ViewportRuler as te, CdkScrollableModule as ie } from "@angular/cdk/scrolling";
import { createRepositionScrollStrategy as H, createOverlayRef as oe, OverlayConfig as ne, createFlexibleConnectedPositionStrategy as ae, OverlayModule as se } from "@angular/cdk/overlay";
import { _IdGenerator as le, ActiveDescendantKeyManager as re, removeAriaReferencedId as b, addAriaReferencedId as I } from "@angular/cdk/a11y";
import { Platform as ce, _getFocusedElementPierceShadowDom as pe, _getEventTarget as ue } from "@angular/cdk/platform";
import { Directionality as de } from "@angular/cdk/bidi";
import { hasModifierKey as O, ESCAPE as V, ENTER as he, TAB as me, UP_ARROW as x, DOWN_ARROW as _e } from "@angular/cdk/keycodes";
import { BreakpointObserver as fe, Breakpoints as ge } from "@angular/cdk/layout";
import { TemplatePortal as ve } from "@angular/cdk/portal";
import { coerceArray as ye } from "@angular/cdk/coercion";
import { NG_VALUE_ACCESSOR as be } from "@angular/forms";
import { filter as B, map as Oe, startWith as Ae, switchMap as A, tap as Se, delay as we, take as Ce } from "rxjs/operators";
import "@angular/cdk/private";
import "@angular/common";
import "@angular/cdk/observers/private";
var q = ["panel"], G = ["*"];
function Q(s, p) { if (s & 1 && (o.\u0275\u0275domElementStart(0, "div", 1, 0), o.\u0275\u0275projection(2), o.\u0275\u0275domElementEnd()), s & 2) {
    let e = p.id, t = o.\u0275\u0275nextContext();
    o.\u0275\u0275classMap(t._classList), o.\u0275\u0275classProp("mat-mdc-autocomplete-visible", t.showPanel)("mat-mdc-autocomplete-hidden", !t.showPanel)("mat-autocomplete-panel-animations-enabled", !t._animationsDisabled)("mat-primary", t._color === "primary")("mat-accent", t._color === "accent")("mat-warn", t._color === "warn"), o.\u0275\u0275domProperty("id", t.id), o.\u0275\u0275attribute("aria-label", t.ariaLabel || null)("aria-labelledby", t._getPanelAriaLabelledby(e));
} }
var S = class {
    source;
    option;
    constructor(p, e) { this.source = p, this.option = e; }
}, K = new W("mat-autocomplete-default-options", { providedIn: "root", factory: Pe });
function Pe() { return { autoActiveFirstOption: !1, autoSelectActiveOption: !1, hideSingleSelectionIndicator: !1, requireSelection: !1, hasBackdrop: !1 }; }
var lt = (() => {
    class s {
        _changeDetectorRef = l(N);
        _elementRef = l(w);
        _defaults = l(K);
        _animationsDisabled = g();
        _activeOptionChanges = u.EMPTY;
        _keyManager;
        showPanel = !1;
        get isOpen() { return this._isOpen && this.showPanel; }
        _isOpen = !1;
        _latestOpeningTrigger;
        _setColor(e) { this._color = e, this._changeDetectorRef.markForCheck(); }
        _color;
        template;
        panel;
        options;
        optionGroups;
        ariaLabel;
        ariaLabelledby;
        displayWith = null;
        autoActiveFirstOption;
        autoSelectActiveOption;
        requireSelection;
        panelWidth;
        disableRipple;
        optionSelected = new h;
        opened = new h;
        closed = new h;
        optionActivated = new h;
        set classList(e) { this._classList = e, this._elementRef.nativeElement.className = ""; }
        _classList;
        get hideSingleSelectionIndicator() { return this._hideSingleSelectionIndicator; }
        set hideSingleSelectionIndicator(e) { this._hideSingleSelectionIndicator = e, this._syncParentProperties(); }
        _hideSingleSelectionIndicator;
        _syncParentProperties() { if (this.options)
            for (let e of this.options)
                e._changeDetectorRef.markForCheck(); }
        id = l(le).getId("mat-autocomplete-");
        inertGroups;
        constructor() { let e = l(ce); this.inertGroups = e?.SAFARI || !1, this.autoActiveFirstOption = !!this._defaults.autoActiveFirstOption, this.autoSelectActiveOption = !!this._defaults.autoSelectActiveOption, this.requireSelection = !!this._defaults.requireSelection, this._hideSingleSelectionIndicator = this._defaults.hideSingleSelectionIndicator ?? !1; }
        ngAfterContentInit() { this._keyManager = new re(this.options).withWrap().skipPredicate(this._skipPredicate), this._activeOptionChanges = this._keyManager.change.subscribe(e => { this.isOpen && this.optionActivated.emit({ source: this, option: this.options.toArray()[e] || null }); }), this._setVisibility(); }
        ngOnDestroy() { this._keyManager?.destroy(), this._activeOptionChanges.unsubscribe(); }
        _setScrollTop(e) { this.panel && (this.panel.nativeElement.scrollTop = e); }
        _getScrollTop() { return this.panel ? this.panel.nativeElement.scrollTop : 0; }
        _setVisibility() { this.showPanel = !!this.options?.length, this._changeDetectorRef.markForCheck(); }
        _emitSelectEvent(e) { let t = new S(this, e); this.optionSelected.emit(t); }
        _getPanelAriaLabelledby(e) { if (this.ariaLabel)
            return null; let t = e ? e + " " : ""; return this.ariaLabelledby ? t + this.ariaLabelledby : e; }
        _skipPredicate() { return !1; }
        static \u0275fac = function (t) { return new (t || s); };
        static \u0275cmp = o.\u0275\u0275defineComponent({ type: s, selectors: [["mat-autocomplete"]], contentQueries: function (t, i, n) { if (t & 1 && (o.\u0275\u0275contentQuery(n, R, 5), o.\u0275\u0275contentQuery(n, E, 5)), t & 2) {
                let a;
                o.\u0275\u0275queryRefresh(a = o.\u0275\u0275loadQuery()) && (i.options = a), o.\u0275\u0275queryRefresh(a = o.\u0275\u0275loadQuery()) && (i.optionGroups = a);
            } }, viewQuery: function (t, i) { if (t & 1 && (o.\u0275\u0275viewQuery(U, 7), o.\u0275\u0275viewQuery(q, 5)), t & 2) {
                let n;
                o.\u0275\u0275queryRefresh(n = o.\u0275\u0275loadQuery()) && (i.template = n.first), o.\u0275\u0275queryRefresh(n = o.\u0275\u0275loadQuery()) && (i.panel = n.first);
            } }, hostAttrs: [1, "mat-mdc-autocomplete"], inputs: { ariaLabel: [0, "aria-label", "ariaLabel"], ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"], displayWith: "displayWith", autoActiveFirstOption: [2, "autoActiveFirstOption", "autoActiveFirstOption", c], autoSelectActiveOption: [2, "autoSelectActiveOption", "autoSelectActiveOption", c], requireSelection: [2, "requireSelection", "requireSelection", c], panelWidth: "panelWidth", disableRipple: [2, "disableRipple", "disableRipple", c], classList: [0, "class", "classList"], hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", c] }, outputs: { optionSelected: "optionSelected", opened: "opened", closed: "closed", optionActivated: "optionActivated" }, exportAs: ["matAutocomplete"], features: [o.\u0275\u0275ProvidersFeature([{ provide: T, useExisting: s }])], ngContentSelectors: G, decls: 1, vars: 0, consts: [["panel", ""], ["role", "listbox", 1, "mat-mdc-autocomplete-panel", "mdc-menu-surface", "mdc-menu-surface--open", 3, "id"]], template: function (t, i) { t & 1 && (o.\u0275\u0275projectionDef(), o.\u0275\u0275domTemplate(0, Q, 3, 17, "ng-template")); }, styles: [`div.mat-mdc-autocomplete-panel{width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:relative;border-radius:var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));background-color:var(--mat-autocomplete-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-autocomplete-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden;pointer-events:none}@keyframes _mat-autocomplete-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}.mat-autocomplete-panel-animations-enabled{animation:_mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1)}mat-autocomplete{display:none}
`], encapsulation: 2, changeDetection: 0 });
    }
    return s;
})(), rt = (() => { class s {
    elementRef = l(w);
    constructor() { }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: s, selectors: [["", "matAutocompleteOrigin", ""]], exportAs: ["matAutocompleteOrigin"] });
} return s; })(), Me = { provide: be, useExisting: z(() => ke), multi: !0 };
function ct() { return Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook."); }
var Y = new W("mat-autocomplete-scroll-strategy", { providedIn: "root", factory: () => { let s = l(C); return () => H(s); } });
function Te(s) { let p = l(C); return () => H(p); }
var Ee = { provide: Y, deps: [], useFactory: Te }, ke = (() => { class s {
    _environmentInjector = l(X);
    _element = l(w);
    _injector = l(C);
    _viewContainerRef = l(Z);
    _zone = l(J);
    _changeDetectorRef = l(N);
    _dir = l(de, { optional: !0 });
    _formField = l(D, { optional: !0, host: !0 });
    _viewportRuler = l(te);
    _scrollStrategy = l(Y);
    _renderer = l($);
    _animationsDisabled = g();
    _defaults = l(K, { optional: !0 });
    _overlayRef;
    _portal;
    _componentDestroyed = !1;
    _initialized = new _;
    _keydownSubscription;
    _outsideClickSubscription;
    _cleanupWindowBlur;
    _previousValue;
    _valueOnAttach;
    _valueOnLastKeydown;
    _positionStrategy;
    _manuallyFloatingLabel = !1;
    _closingActionsSubscription;
    _viewportSubscription = u.EMPTY;
    _breakpointObserver = l(fe);
    _handsetLandscapeSubscription = u.EMPTY;
    _canOpenOnNextFocus = !0;
    _valueBeforeAutoSelection;
    _pendingAutoselectedOption;
    _closeKeyEventStream = new _;
    _overlayPanelClass = ye(this._defaults?.overlayPanelClass || []);
    _windowBlurHandler = () => { this._canOpenOnNextFocus = this.panelOpen || !this._hasFocus(); };
    _onChange = () => { };
    _onTouched = () => { };
    autocomplete;
    position = "auto";
    connectedTo;
    autocompleteAttribute = "off";
    autocompleteDisabled;
    constructor() { }
    _aboveClass = "mat-mdc-autocomplete-panel-above";
    ngAfterViewInit() { this._initialized.next(), this._initialized.complete(), this._cleanupWindowBlur = this._renderer.listen("window", "blur", this._windowBlurHandler); }
    ngOnChanges(e) { e.position && this._positionStrategy && (this._setStrategyPositions(this._positionStrategy), this.panelOpen && this._overlayRef.updatePosition()); }
    ngOnDestroy() { this._cleanupWindowBlur?.(), this._handsetLandscapeSubscription.unsubscribe(), this._viewportSubscription.unsubscribe(), this._componentDestroyed = !0, this._destroyPanel(), this._closeKeyEventStream.complete(), this._clearFromModal(); }
    get panelOpen() { return this._overlayAttached && this.autocomplete.showPanel; }
    _overlayAttached = !1;
    openPanel() { this._openPanelInternal(); }
    closePanel() { this._resetLabel(), this._overlayAttached && (this.panelOpen && this._zone.run(() => { this.autocomplete.closed.emit(); }), this.autocomplete._latestOpeningTrigger === this && (this.autocomplete._isOpen = !1, this.autocomplete._latestOpeningTrigger = null), this._overlayAttached = !1, this._pendingAutoselectedOption = null, this._overlayRef && this._overlayRef.hasAttached() && (this._overlayRef.detach(), this._closingActionsSubscription.unsubscribe()), this._updatePanelState(), this._componentDestroyed || this._changeDetectorRef.detectChanges(), this._trackedModal && b(this._trackedModal, "aria-owns", this.autocomplete.id)); }
    updatePosition() { this._overlayAttached && this._overlayRef.updatePosition(); }
    get panelClosingActions() { return d(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(B(() => this._overlayAttached)), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(B(() => this._overlayAttached)) : f()).pipe(Oe(e => e instanceof k ? e : null)); }
    optionSelections = M(() => { let e = this.autocomplete ? this.autocomplete.options : null; return e ? e.changes.pipe(Ae(e), A(() => d(...e.map(t => t.onSelectionChange)))) : this._initialized.pipe(A(() => this.optionSelections)); });
    get activeOption() { return this.autocomplete && this.autocomplete._keyManager ? this.autocomplete._keyManager.activeItem : null; }
    _getOutsideClickStream() { return new m(e => { let t = n => { let a = ue(n), r = this._formField ? this._formField.getConnectedOverlayOrigin().nativeElement : null, P = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null; this._overlayAttached && a !== this._element.nativeElement && !this._hasFocus() && (!r || !r.contains(a)) && (!P || !P.contains(a)) && this._overlayRef && !this._overlayRef.overlayElement.contains(a) && e.next(n); }, i = [this._renderer.listen("document", "click", t), this._renderer.listen("document", "auxclick", t), this._renderer.listen("document", "touchend", t)]; return () => { i.forEach(n => n()); }; }); }
    writeValue(e) { Promise.resolve(null).then(() => this._assignOptionValue(e)); }
    registerOnChange(e) { this._onChange = e; }
    registerOnTouched(e) { this._onTouched = e; }
    setDisabledState(e) { this._element.nativeElement.disabled = e; }
    _handleKeydown(e) { let t = e, i = t.keyCode, n = O(t); if (i === V && !n && t.preventDefault(), this._valueOnLastKeydown = this._element.nativeElement.value, this.activeOption && i === he && this.panelOpen && !n)
        this.activeOption._selectViaInteraction(), this._resetActiveItem(), t.preventDefault();
    else if (this.autocomplete) {
        let a = this.autocomplete._keyManager.activeItem, r = i === x || i === _e;
        i === me || r && !n && this.panelOpen ? this.autocomplete._keyManager.onKeydown(t) : r && this._canOpen() && this._openPanelInternal(this._valueOnLastKeydown), (r || this.autocomplete._keyManager.activeItem !== a) && (this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0), this.autocomplete.autoSelectActiveOption && this.activeOption && (this._pendingAutoselectedOption || (this._valueBeforeAutoSelection = this._valueOnLastKeydown), this._pendingAutoselectedOption = this.activeOption, this._assignOptionValue(this.activeOption.value)));
    } }
    _handleInput(e) { let t = e.target, i = t.value; if (t.type === "number" && (i = i == "" ? null : parseFloat(i)), this._previousValue !== i) {
        if (this._previousValue = i, this._pendingAutoselectedOption = null, (!this.autocomplete || !this.autocomplete.requireSelection) && this._onChange(i), !i)
            this._clearPreviousSelectedOption(null, !1);
        else if (this.panelOpen && !this.autocomplete.requireSelection) {
            let n = this.autocomplete.options?.find(a => a.selected);
            if (n) {
                let a = this._getDisplayValue(n.value);
                i !== a && n.deselect(!1);
            }
        }
        if (this._canOpen() && this._hasFocus()) {
            let n = this._valueOnLastKeydown ?? this._element.nativeElement.value;
            this._valueOnLastKeydown = null, this._openPanelInternal(n);
        }
    } }
    _handleFocus() { this._canOpenOnNextFocus ? this._canOpen() && (this._previousValue = this._element.nativeElement.value, this._attachOverlay(this._previousValue), this._floatLabel(!0)) : this._canOpenOnNextFocus = !0; }
    _handleClick() { this._canOpen() && !this.panelOpen && this._openPanelInternal(); }
    _hasFocus() { return pe() === this._element.nativeElement; }
    _floatLabel(e = !1) { this._formField && this._formField.floatLabel === "auto" && (e ? this._formField._animateAndLockLabel() : this._formField.floatLabel = "always", this._manuallyFloatingLabel = !0); }
    _resetLabel() { this._manuallyFloatingLabel && (this._formField && (this._formField.floatLabel = "auto"), this._manuallyFloatingLabel = !1); }
    _subscribeToClosingActions() { let e = new m(i => { ee(() => { i.next(); }, { injector: this._environmentInjector }); }), t = this.autocomplete.options?.changes.pipe(Se(() => this._positionStrategy.reapplyLastPosition()), we(0)) ?? f(); return d(e, t).pipe(A(() => this._zone.run(() => { let i = this.panelOpen; return this._resetActiveItem(), this._updatePanelState(), this._changeDetectorRef.detectChanges(), this.panelOpen && this._overlayRef.updatePosition(), i !== this.panelOpen && (this.panelOpen ? this._emitOpened() : this.autocomplete.closed.emit()), this.panelClosingActions; })), Ce(1)).subscribe(i => this._setValueAndClose(i)); }
    _emitOpened() { this.autocomplete.opened.emit(); }
    _destroyPanel() { this._overlayRef && (this.closePanel(), this._overlayRef.dispose(), this._overlayRef = null); }
    _getDisplayValue(e) { let t = this.autocomplete; return t && t.displayWith ? t.displayWith(e) : e; }
    _assignOptionValue(e) { let t = this._getDisplayValue(e); e == null && this._clearPreviousSelectedOption(null, !1), this._updateNativeInputValue(t ?? ""); }
    _updateNativeInputValue(e) { this._formField ? this._formField._control.value = e : this._element.nativeElement.value = e, this._previousValue = e; }
    _setValueAndClose(e) { let t = this.autocomplete, i = e ? e.source : this._pendingAutoselectedOption; i ? (this._clearPreviousSelectedOption(i), this._assignOptionValue(i.value), this._onChange(i.value), t._emitSelectEvent(i), this._element.nativeElement.focus()) : t.requireSelection && this._element.nativeElement.value !== this._valueOnAttach && (this._clearPreviousSelectedOption(null), this._assignOptionValue(null), this._onChange(null)), this.closePanel(); }
    _clearPreviousSelectedOption(e, t) { this.autocomplete?.options?.forEach(i => { i !== e && i.selected && i.deselect(t); }); }
    _openPanelInternal(e = this._element.nativeElement.value) { if (this._attachOverlay(e), this._floatLabel(), this._trackedModal) {
        let t = this.autocomplete.id;
        I(this._trackedModal, "aria-owns", t);
    } }
    _attachOverlay(e) { this.autocomplete; let t = this._overlayRef; t ? (this._positionStrategy.setOrigin(this._getConnectedElement()), t.updateSize({ width: this._getPanelWidth() })) : (this._portal = new ve(this.autocomplete.template, this._viewContainerRef, { id: this._formField?.getLabelId() }), t = oe(this._injector, this._getOverlayConfig()), this._overlayRef = t, this._viewportSubscription = this._viewportRuler.change().subscribe(() => { this.panelOpen && t && t.updateSize({ width: this._getPanelWidth() }); }), this._handsetLandscapeSubscription = this._breakpointObserver.observe(ge.HandsetLandscape).subscribe(n => { n.matches ? this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8) : this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0); })), t && !t.hasAttached() && (t.attach(this._portal), this._valueOnAttach = e, this._valueOnLastKeydown = null, this._closingActionsSubscription = this._subscribeToClosingActions()); let i = this.panelOpen; this.autocomplete._isOpen = this._overlayAttached = !0, this.autocomplete._latestOpeningTrigger = this, this.autocomplete._setColor(this._formField?.color), this._updatePanelState(), this._applyModalPanelOwnership(), this.panelOpen && i !== this.panelOpen && this._emitOpened(); }
    _handlePanelKeydown = e => { (e.keyCode === V && !O(e) || e.keyCode === x && O(e, "altKey")) && (this._pendingAutoselectedOption && (this._updateNativeInputValue(this._valueBeforeAutoSelection ?? ""), this._pendingAutoselectedOption = null), this._closeKeyEventStream.next(), this._resetActiveItem(), e.stopPropagation(), e.preventDefault()); };
    _updatePanelState() { if (this.autocomplete._setVisibility(), this.panelOpen) {
        let e = this._overlayRef;
        this._keydownSubscription || (this._keydownSubscription = e.keydownEvents().subscribe(this._handlePanelKeydown)), this._outsideClickSubscription || (this._outsideClickSubscription = e.outsidePointerEvents().subscribe());
    }
    else
        this._keydownSubscription?.unsubscribe(), this._outsideClickSubscription?.unsubscribe(), this._keydownSubscription = this._outsideClickSubscription = null; }
    _getOverlayConfig() { return new ne({ positionStrategy: this._getOverlayPosition(), scrollStrategy: this._scrollStrategy(), width: this._getPanelWidth(), direction: this._dir ?? void 0, hasBackdrop: this._defaults?.hasBackdrop, backdropClass: this._defaults?.backdropClass || "cdk-overlay-transparent-backdrop", panelClass: this._overlayPanelClass, disableAnimations: this._animationsDisabled }); }
    _getOverlayPosition() { let e = ae(this._injector, this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1); return this._setStrategyPositions(e), this._positionStrategy = e, e; }
    _setStrategyPositions(e) { let t = [{ originX: "start", originY: "bottom", overlayX: "start", overlayY: "top" }, { originX: "end", originY: "bottom", overlayX: "end", overlayY: "top" }], i = this._aboveClass, n = [{ originX: "start", originY: "top", overlayX: "start", overlayY: "bottom", panelClass: i }, { originX: "end", originY: "top", overlayX: "end", overlayY: "bottom", panelClass: i }], a; this.position === "above" ? a = n : this.position === "below" ? a = t : a = [...t, ...n], e.withPositions(a); }
    _getConnectedElement() { return this.connectedTo ? this.connectedTo.elementRef : this._formField ? this._formField.getConnectedOverlayOrigin() : this._element; }
    _getPanelWidth() { return this.autocomplete.panelWidth || this._getHostWidth(); }
    _getHostWidth() { return this._getConnectedElement().nativeElement.getBoundingClientRect().width; }
    _resetActiveItem() { let e = this.autocomplete; if (e.autoActiveFirstOption) {
        let t = -1;
        for (let i = 0; i < e.options.length; i++)
            if (!e.options.get(i).disabled) {
                t = i;
                break;
            }
        e._keyManager.setActiveItem(t);
    }
    else
        e._keyManager.setActiveItem(-1); }
    _canOpen() { let e = this._element.nativeElement; return !e.readOnly && !e.disabled && !this.autocompleteDisabled; }
    _scrollToOption(e) { let t = this.autocomplete, i = F(e, t.options, t.optionGroups); if (e === 0 && i === 1)
        t._setScrollTop(0);
    else if (t.panel) {
        let n = t.options.toArray()[e];
        if (n) {
            let a = n._getHostElement(), r = L(a.offsetTop, a.offsetHeight, t._getScrollTop(), t.panel.nativeElement.offsetHeight);
            t._setScrollTop(r);
        }
    } }
    _trackedModal = null;
    _applyModalPanelOwnership() { let e = this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]'); if (!e)
        return; let t = this.autocomplete.id; this._trackedModal && b(this._trackedModal, "aria-owns", t), I(e, "aria-owns", t), this._trackedModal = e; }
    _clearFromModal() { if (this._trackedModal) {
        let e = this.autocomplete.id;
        b(this._trackedModal, "aria-owns", e), this._trackedModal = null;
    } }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: s, selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]], hostAttrs: [1, "mat-mdc-autocomplete-trigger"], hostVars: 7, hostBindings: function (t, i) { t & 1 && o.\u0275\u0275listener("focusin", function () { return i._handleFocus(); })("blur", function () { return i._onTouched(); })("input", function (a) { return i._handleInput(a); })("keydown", function (a) { return i._handleKeydown(a); })("click", function () { return i._handleClick(); }), t & 2 && o.\u0275\u0275attribute("autocomplete", i.autocompleteAttribute)("role", i.autocompleteDisabled ? null : "combobox")("aria-autocomplete", i.autocompleteDisabled ? null : "list")("aria-activedescendant", i.panelOpen && i.activeOption ? i.activeOption.id : null)("aria-expanded", i.autocompleteDisabled ? null : i.panelOpen.toString())("aria-controls", i.autocompleteDisabled || !i.panelOpen || i.autocomplete == null ? null : i.autocomplete.id)("aria-haspopup", i.autocompleteDisabled ? null : "listbox"); }, inputs: { autocomplete: [0, "matAutocomplete", "autocomplete"], position: [0, "matAutocompletePosition", "position"], connectedTo: [0, "matAutocompleteConnectedTo", "connectedTo"], autocompleteAttribute: [0, "autocomplete", "autocompleteAttribute"], autocompleteDisabled: [2, "matAutocompleteDisabled", "autocompleteDisabled", c] }, exportAs: ["matAutocompleteTrigger"], features: [o.\u0275\u0275ProvidersFeature([Me]), o.\u0275\u0275NgOnChangesFeature] });
} return s; })(), pt = (() => { class s {
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275mod = o.\u0275\u0275defineNgModule({ type: s });
    static \u0275inj = o.\u0275\u0275defineInjector({ providers: [Ee], imports: [se, y, v, ie, y, v] });
} return s; })();
export { K as MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, Pe as MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, Y as MAT_AUTOCOMPLETE_SCROLL_STRATEGY, Te as MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, Ee as MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, Me as MAT_AUTOCOMPLETE_VALUE_ACCESSOR, lt as MatAutocomplete, pt as MatAutocompleteModule, rt as MatAutocompleteOrigin, S as MatAutocompleteSelectedEvent, ke as MatAutocompleteTrigger, j as MatOptgroup, R as MatOption, ct as getMatAutocompleteMissingPanelError };
