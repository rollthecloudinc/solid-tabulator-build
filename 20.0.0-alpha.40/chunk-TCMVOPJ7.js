import { a as E } from "@nf-internal/chunk-O3EUDLYG";
import { a as A } from "@nf-internal/chunk-D2J64VUP";
import { b as T } from "@nf-internal/chunk-JWKF23VO";
import { a as w, b as M, e as S, f as k, g as x, h as g } from "@nf-internal/chunk-AMBW4EIP";
import { f as D, g as I } from "@nf-internal/chunk-N3CMLH74";
import { e as O } from "@nf-internal/chunk-5KSFOI5Q";
import { b as _ } from "@nf-internal/chunk-RXMLTE5A";
import { f as C, j as u } from "@nf-internal/chunk-VZR6KEPQ";
import { k as m } from "@nf-internal/chunk-STIBVO4O";
import { createRepositionScrollStrategy as H, CdkConnectedOverlay as R, CdkOverlayOrigin as F, OverlayModule as X } from "@angular/cdk/overlay";
import * as t from "@angular/core";
import { InjectionToken as b, inject as s, Injector as Q, ChangeDetectorRef as U, ElementRef as $, Renderer2 as J, signal as Z, EventEmitter as f, HostAttributeToken as ee, booleanAttribute as h, numberAttribute as V } from "@angular/core";
import { ViewportRuler as te, CdkScrollableModule as ie } from "@angular/cdk/scrolling";
import { _IdGenerator as ae, LiveAnnouncer as re, removeAriaReferencedId as L, addAriaReferencedId as ne, ActiveDescendantKeyManager as le } from "@angular/cdk/a11y";
import { Directionality as se } from "@angular/cdk/bidi";
import { SelectionModel as oe } from "@angular/cdk/collections";
import { hasModifierKey as y, ENTER as P, SPACE as W, A as ce, ESCAPE as de, DOWN_ARROW as B, UP_ARROW as K, LEFT_ARROW as he, RIGHT_ARROW as pe } from "@angular/cdk/keycodes";
import { NgControl as me, Validators as ue, NgForm as _e, FormGroupDirective as ge } from "@angular/forms";
import { startWith as N, switchMap as G, filter as z, map as q, takeUntil as p, take as fe } from "rxjs/operators";
import { NgClass as ye } from "@angular/common";
var ve = ["trigger"], be = ["panel"], Ce = [[["mat-select-trigger"]], "*"], Oe = ["mat-select-trigger", "*"];
function we(r, c) { if (r & 1 && (t.\u0275\u0275elementStart(0, "span", 4), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), r & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.placeholder);
} }
function Me(r, c) { r & 1 && t.\u0275\u0275projection(0); }
function Se(r, c) { if (r & 1 && (t.\u0275\u0275elementStart(0, "span", 11), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), r & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.triggerValue);
} }
function ke(r, c) { if (r & 1 && (t.\u0275\u0275elementStart(0, "span", 5), t.\u0275\u0275conditionalCreate(1, Me, 1, 0)(2, Se, 2, 1, "span", 11), t.\u0275\u0275elementEnd()), r & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275conditional(e.customTrigger ? 1 : 2);
} }
function xe(r, c) { if (r & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "div", 12, 1), t.\u0275\u0275listener("keydown", function (a) { t.\u0275\u0275restoreView(e); let n = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(n._handleKeydown(a)); }), t.\u0275\u0275projection(2, 1), t.\u0275\u0275elementEnd();
} if (r & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275classMap(t.\u0275\u0275interpolate1("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ", e._getPanelTheme())), t.\u0275\u0275classProp("mat-select-panel-animations-enabled", !e._animationsDisabled), t.\u0275\u0275property("ngClass", e.panelClass), t.\u0275\u0275attribute("id", e.id + "-panel")("aria-multiselectable", e.multiple)("aria-label", e.ariaLabel || null)("aria-labelledby", e._getPanelAriaLabelledby());
} }
var Y = new b("mat-select-scroll-strategy", { providedIn: "root", factory: () => { let r = s(Q); return () => H(r); } });
function De(r) { let c = s(Q); return () => H(c); }
var Ie = new b("MAT_SELECT_CONFIG"), Te = { provide: Y, deps: [], useFactory: De }, j = new b("MatSelectTrigger"), v = class {
    source;
    value;
    constructor(c, e) { this.source = c, this.value = e; }
}, lt = (() => {
    class r {
        _viewportRuler = s(te);
        _changeDetectorRef = s(U);
        _elementRef = s($);
        _dir = s(se, { optional: !0 });
        _idGenerator = s(ae);
        _renderer = s(J);
        _parentFormField = s(I, { optional: !0 });
        ngControl = s(me, { self: !0, optional: !0 });
        _liveAnnouncer = s(re);
        _defaultOptions = s(Ie, { optional: !0 });
        _animationsDisabled = O();
        _initialized = new m;
        _cleanupDetach;
        options;
        optionGroups;
        customTrigger;
        _positions = [{ originX: "start", originY: "bottom", overlayX: "start", overlayY: "top" }, { originX: "end", originY: "bottom", overlayX: "end", overlayY: "top" }, { originX: "start", originY: "top", overlayX: "start", overlayY: "bottom", panelClass: "mat-mdc-select-panel-above" }, { originX: "end", originY: "top", overlayX: "end", overlayY: "bottom", panelClass: "mat-mdc-select-panel-above" }];
        _scrollOptionIntoView(e) { let i = this.options.toArray()[e]; if (i) {
            let a = this.panel.nativeElement, n = k(e, this.options, this.optionGroups), l = i._getHostElement();
            e === 0 && n === 1 ? a.scrollTop = 0 : a.scrollTop = x(l.offsetTop, l.offsetHeight, a.scrollTop, a.offsetHeight);
        } }
        _positioningSettled() { this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0); }
        _getChangeEvent(e) { return new v(this, e); }
        _scrollStrategyFactory = s(Y);
        _panelOpen = !1;
        _compareWith = (e, i) => e === i;
        _uid = this._idGenerator.getId("mat-select-");
        _triggerAriaLabelledBy = null;
        _previousControl;
        _destroy = new m;
        _errorStateTracker;
        stateChanges = new m;
        disableAutomaticLabeling = !0;
        userAriaDescribedBy;
        _selectionModel;
        _keyManager;
        _preferredOverlayOrigin;
        _overlayWidth;
        _onChange = () => { };
        _onTouched = () => { };
        _valueId = this._idGenerator.getId("mat-select-value-");
        _scrollStrategy;
        _overlayPanelClass = this._defaultOptions?.overlayPanelClass || "";
        get focused() { return this._focused || this._panelOpen; }
        _focused = !1;
        controlType = "mat-select";
        trigger;
        panel;
        _overlayDir;
        panelClass;
        disabled = !1;
        get disableRipple() { return this._disableRipple(); }
        set disableRipple(e) { this._disableRipple.set(e); }
        _disableRipple = Z(!1);
        tabIndex = 0;
        get hideSingleSelectionIndicator() { return this._hideSingleSelectionIndicator; }
        set hideSingleSelectionIndicator(e) { this._hideSingleSelectionIndicator = e, this._syncParentProperties(); }
        _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? !1;
        get placeholder() { return this._placeholder; }
        set placeholder(e) { this._placeholder = e, this.stateChanges.next(); }
        _placeholder;
        get required() { return this._required ?? this.ngControl?.control?.hasValidator(ue.required) ?? !1; }
        set required(e) { this._required = e, this.stateChanges.next(); }
        _required;
        get multiple() { return this._multiple; }
        set multiple(e) { this._selectionModel, this._multiple = e; }
        _multiple = !1;
        disableOptionCentering = this._defaultOptions?.disableOptionCentering ?? !1;
        get compareWith() { return this._compareWith; }
        set compareWith(e) { this._compareWith = e, this._selectionModel && this._initializeSelection(); }
        get value() { return this._value; }
        set value(e) { this._assignValue(e) && this._onChange(e); }
        _value;
        ariaLabel = "";
        ariaLabelledby;
        get errorStateMatcher() { return this._errorStateTracker.matcher; }
        set errorStateMatcher(e) { this._errorStateTracker.matcher = e; }
        typeaheadDebounceInterval;
        sortComparator;
        get id() { return this._id; }
        set id(e) { this._id = e || this._uid, this.stateChanges.next(); }
        _id;
        get errorState() { return this._errorStateTracker.errorState; }
        set errorState(e) { this._errorStateTracker.errorState = e; }
        panelWidth = this._defaultOptions && typeof this._defaultOptions.panelWidth < "u" ? this._defaultOptions.panelWidth : "auto";
        canSelectNullableOptions = this._defaultOptions?.canSelectNullableOptions ?? !1;
        optionSelectionChanges = C(() => { let e = this.options; return e ? e.changes.pipe(N(e), G(() => u(...e.map(i => i.onSelectionChange)))) : this._initialized.pipe(G(() => this.optionSelectionChanges)); });
        openedChange = new f;
        _openedStream = this.openedChange.pipe(z(e => e), q(() => { }));
        _closedStream = this.openedChange.pipe(z(e => !e), q(() => { }));
        selectionChange = new f;
        valueChange = new f;
        constructor() { let e = s(T), i = s(_e, { optional: !0 }), a = s(ge, { optional: !0 }), n = s(new ee("tabindex"), { optional: !0 }); this.ngControl && (this.ngControl.valueAccessor = this), this._defaultOptions?.typeaheadDebounceInterval != null && (this.typeaheadDebounceInterval = this._defaultOptions.typeaheadDebounceInterval), this._errorStateTracker = new A(e, this.ngControl, a, i, this.stateChanges), this._scrollStrategy = this._scrollStrategyFactory(), this.tabIndex = n == null ? 0 : parseInt(n) || 0, this.id = this.id; }
        ngOnInit() { this._selectionModel = new oe(this.multiple), this.stateChanges.next(), this._viewportRuler.change().pipe(p(this._destroy)).subscribe(() => { this.panelOpen && (this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin), this._changeDetectorRef.detectChanges()); }); }
        ngAfterContentInit() { this._initialized.next(), this._initialized.complete(), this._initKeyManager(), this._selectionModel.changed.pipe(p(this._destroy)).subscribe(e => { e.added.forEach(i => i.select()), e.removed.forEach(i => i.deselect()); }), this.options.changes.pipe(N(null), p(this._destroy)).subscribe(() => { this._resetOptions(), this._initializeSelection(); }); }
        ngDoCheck() { let e = this._getTriggerAriaLabelledby(), i = this.ngControl; if (e !== this._triggerAriaLabelledBy) {
            let a = this._elementRef.nativeElement;
            this._triggerAriaLabelledBy = e, e ? a.setAttribute("aria-labelledby", e) : a.removeAttribute("aria-labelledby");
        } i && (this._previousControl !== i.control && (this._previousControl !== void 0 && i.disabled !== null && i.disabled !== this.disabled && (this.disabled = i.disabled), this._previousControl = i.control), this.updateErrorState()); }
        ngOnChanges(e) { (e.disabled || e.userAriaDescribedBy) && this.stateChanges.next(), e.typeaheadDebounceInterval && this._keyManager && this._keyManager.withTypeAhead(this.typeaheadDebounceInterval); }
        ngOnDestroy() { this._cleanupDetach?.(), this._keyManager?.destroy(), this._destroy.next(), this._destroy.complete(), this.stateChanges.complete(), this._clearFromModal(); }
        toggle() { this.panelOpen ? this.close() : this.open(); }
        open() { this._canOpen() && (this._parentFormField && (this._preferredOverlayOrigin = this._parentFormField.getConnectedOverlayOrigin()), this._cleanupDetach?.(), this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin), this._applyModalPanelOwnership(), this._panelOpen = !0, this._overlayDir.positionChange.pipe(fe(1)).subscribe(() => { this._changeDetectorRef.detectChanges(), this._positioningSettled(); }), this._overlayDir.attachOverlay(), this._keyManager.withHorizontalOrientation(null), this._highlightCorrectOption(), this._changeDetectorRef.markForCheck(), this.stateChanges.next(), Promise.resolve().then(() => this.openedChange.emit(!0))); }
        _trackedModal = null;
        _applyModalPanelOwnership() { let e = this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]'); if (!e)
            return; let i = `${this.id}-panel`; this._trackedModal && L(this._trackedModal, "aria-owns", i), ne(e, "aria-owns", i), this._trackedModal = e; }
        _clearFromModal() { if (!this._trackedModal)
            return; let e = `${this.id}-panel`; L(this._trackedModal, "aria-owns", e), this._trackedModal = null; }
        close() { this._panelOpen && (this._panelOpen = !1, this._exitAndDetach(), this._keyManager.withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr"), this._changeDetectorRef.markForCheck(), this._onTouched(), this.stateChanges.next(), Promise.resolve().then(() => this.openedChange.emit(!1))); }
        _exitAndDetach() { if (this._animationsDisabled || !this.panel) {
            this._detachOverlay();
            return;
        } this._cleanupDetach?.(), this._cleanupDetach = () => { i(), clearTimeout(a), this._cleanupDetach = void 0; }; let e = this.panel.nativeElement, i = this._renderer.listen(e, "animationend", n => { n.animationName === "_mat-select-exit" && (this._cleanupDetach?.(), this._detachOverlay()); }), a = setTimeout(() => { this._cleanupDetach?.(), this._detachOverlay(); }, 200); e.classList.add("mat-select-panel-exit"); }
        _detachOverlay() { this._overlayDir.detachOverlay(), this._changeDetectorRef.markForCheck(); }
        writeValue(e) { this._assignValue(e); }
        registerOnChange(e) { this._onChange = e; }
        registerOnTouched(e) { this._onTouched = e; }
        setDisabledState(e) { this.disabled = e, this._changeDetectorRef.markForCheck(), this.stateChanges.next(); }
        get panelOpen() { return this._panelOpen; }
        get selected() { return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0]; }
        get triggerValue() { if (this.empty)
            return ""; if (this._multiple) {
            let e = this._selectionModel.selected.map(i => i.viewValue);
            return this._isRtl() && e.reverse(), e.join(", ");
        } return this._selectionModel.selected[0].viewValue; }
        updateErrorState() { this._errorStateTracker.updateErrorState(); }
        _isRtl() { return this._dir ? this._dir.value === "rtl" : !1; }
        _handleKeydown(e) { this.disabled || (this.panelOpen ? this._handleOpenKeydown(e) : this._handleClosedKeydown(e)); }
        _handleClosedKeydown(e) { let i = e.keyCode, a = i === B || i === K || i === he || i === pe, n = i === P || i === W, l = this._keyManager; if (!l.isTyping() && n && !y(e) || (this.multiple || e.altKey) && a)
            e.preventDefault(), this.open();
        else if (!this.multiple) {
            let d = this.selected;
            l.onKeydown(e);
            let o = this.selected;
            o && d !== o && this._liveAnnouncer.announce(o.viewValue, 1e4);
        } }
        _handleOpenKeydown(e) { let i = this._keyManager, a = e.keyCode, n = a === B || a === K, l = i.isTyping(); if (n && e.altKey)
            e.preventDefault(), this.close();
        else if (!l && (a === P || a === W) && i.activeItem && !y(e))
            e.preventDefault(), i.activeItem._selectViaInteraction();
        else if (!l && this._multiple && a === ce && e.ctrlKey) {
            e.preventDefault();
            let d = this.options.some(o => !o.disabled && !o.selected);
            this.options.forEach(o => { o.disabled || (d ? o.select() : o.deselect()); });
        }
        else {
            let d = i.activeItemIndex;
            i.onKeydown(e), this._multiple && n && e.shiftKey && i.activeItem && i.activeItemIndex !== d && i.activeItem._selectViaInteraction();
        } }
        _handleOverlayKeydown(e) { e.keyCode === de && !y(e) && (e.preventDefault(), this.close()); }
        _onFocus() { this.disabled || (this._focused = !0, this.stateChanges.next()); }
        _onBlur() { this._focused = !1, this._keyManager?.cancelTypeahead(), !this.disabled && !this.panelOpen && (this._onTouched(), this._changeDetectorRef.markForCheck(), this.stateChanges.next()); }
        _getPanelTheme() { return this._parentFormField ? `mat-${this._parentFormField.color}` : ""; }
        get empty() { return !this._selectionModel || this._selectionModel.isEmpty(); }
        _initializeSelection() { Promise.resolve().then(() => { this.ngControl && (this._value = this.ngControl.value), this._setSelectionByValue(this._value), this.stateChanges.next(); }); }
        _setSelectionByValue(e) { if (this.options.forEach(i => i.setInactiveStyles()), this._selectionModel.clear(), this.multiple && e)
            Array.isArray(e), e.forEach(i => this._selectOptionByValue(i)), this._sortValues();
        else {
            let i = this._selectOptionByValue(e);
            i ? this._keyManager.updateActiveItem(i) : this.panelOpen || this._keyManager.updateActiveItem(-1);
        } this._changeDetectorRef.markForCheck(); }
        _selectOptionByValue(e) { let i = this.options.find(a => { if (this._selectionModel.isSelected(a))
            return !1; try {
            return (a.value != null || this.canSelectNullableOptions) && this._compareWith(a.value, e);
        }
        catch {
            return !1;
        } }); return i && this._selectionModel.select(i), i; }
        _assignValue(e) { return e !== this._value || this._multiple && Array.isArray(e) ? (this.options && this._setSelectionByValue(e), this._value = e, !0) : !1; }
        _skipPredicate = e => this.panelOpen ? !1 : e.disabled;
        _getOverlayWidth(e) { return this.panelWidth === "auto" ? (e instanceof F ? e.elementRef : e || this._elementRef).nativeElement.getBoundingClientRect().width : this.panelWidth === null ? "" : this.panelWidth; }
        _syncParentProperties() { if (this.options)
            for (let e of this.options)
                e._changeDetectorRef.markForCheck(); }
        _initKeyManager() { this._keyManager = new le(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate), this._keyManager.tabOut.subscribe(() => { this.panelOpen && (!this.multiple && this._keyManager.activeItem && this._keyManager.activeItem._selectViaInteraction(), this.focus(), this.close()); }), this._keyManager.change.subscribe(() => { this._panelOpen && this.panel ? this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0) : !this._panelOpen && !this.multiple && this._keyManager.activeItem && this._keyManager.activeItem._selectViaInteraction(); }); }
        _resetOptions() { let e = u(this.options.changes, this._destroy); this.optionSelectionChanges.pipe(p(e)).subscribe(i => { this._onSelect(i.source, i.isUserInput), i.isUserInput && !this.multiple && this._panelOpen && (this.close(), this.focus()); }), u(...this.options.map(i => i._stateChanges)).pipe(p(e)).subscribe(() => { this._changeDetectorRef.detectChanges(), this.stateChanges.next(); }); }
        _onSelect(e, i) { let a = this._selectionModel.isSelected(e); !this.canSelectNullableOptions && e.value == null && !this._multiple ? (e.deselect(), this._selectionModel.clear(), this.value != null && this._propagateChanges(e.value)) : (a !== e.selected && (e.selected ? this._selectionModel.select(e) : this._selectionModel.deselect(e)), i && this._keyManager.setActiveItem(e), this.multiple && (this._sortValues(), i && this.focus())), a !== this._selectionModel.isSelected(e) && this._propagateChanges(), this.stateChanges.next(); }
        _sortValues() { if (this.multiple) {
            let e = this.options.toArray();
            this._selectionModel.sort((i, a) => this.sortComparator ? this.sortComparator(i, a, e) : e.indexOf(i) - e.indexOf(a)), this.stateChanges.next();
        } }
        _propagateChanges(e) { let i; this.multiple ? i = this.selected.map(a => a.value) : i = this.selected ? this.selected.value : e, this._value = i, this.valueChange.emit(i), this._onChange(i), this.selectionChange.emit(this._getChangeEvent(i)), this._changeDetectorRef.markForCheck(); }
        _highlightCorrectOption() { if (this._keyManager)
            if (this.empty) {
                let e = -1;
                for (let i = 0; i < this.options.length; i++)
                    if (!this.options.get(i).disabled) {
                        e = i;
                        break;
                    }
                this._keyManager.setActiveItem(e);
            }
            else
                this._keyManager.setActiveItem(this._selectionModel.selected[0]); }
        _canOpen() { return !this._panelOpen && !this.disabled && this.options?.length > 0 && !!this._overlayDir; }
        focus(e) { this._elementRef.nativeElement.focus(e); }
        _getPanelAriaLabelledby() { if (this.ariaLabel)
            return null; let e = this._parentFormField?.getLabelId() || null, i = e ? e + " " : ""; return this.ariaLabelledby ? i + this.ariaLabelledby : e; }
        _getAriaActiveDescendant() { return this.panelOpen && this._keyManager && this._keyManager.activeItem ? this._keyManager.activeItem.id : null; }
        _getTriggerAriaLabelledby() { if (this.ariaLabel)
            return null; let e = this._parentFormField?.getLabelId() || ""; return this.ariaLabelledby && (e += " " + this.ariaLabelledby), e || (e = this._valueId), e; }
        get describedByIds() { return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ") || []; }
        setDescribedByIds(e) { e.length ? this._elementRef.nativeElement.setAttribute("aria-describedby", e.join(" ")) : this._elementRef.nativeElement.removeAttribute("aria-describedby"); }
        onContainerClick() { this.focus(), this.open(); }
        get shouldLabelFloat() { return this.panelOpen || !this.empty || this.focused && !!this.placeholder; }
        static \u0275fac = function (i) { return new (i || r); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: r, selectors: [["mat-select"]], contentQueries: function (i, a, n) { if (i & 1 && (t.\u0275\u0275contentQuery(n, j, 5), t.\u0275\u0275contentQuery(n, S, 5), t.\u0275\u0275contentQuery(n, M, 5)), i & 2) {
                let l;
                t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (a.customTrigger = l.first), t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (a.options = l), t.\u0275\u0275queryRefresh(l = t.\u0275\u0275loadQuery()) && (a.optionGroups = l);
            } }, viewQuery: function (i, a) { if (i & 1 && (t.\u0275\u0275viewQuery(ve, 5), t.\u0275\u0275viewQuery(be, 5), t.\u0275\u0275viewQuery(R, 5)), i & 2) {
                let n;
                t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (a.trigger = n.first), t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (a.panel = n.first), t.\u0275\u0275queryRefresh(n = t.\u0275\u0275loadQuery()) && (a._overlayDir = n.first);
            } }, hostAttrs: ["role", "combobox", "aria-haspopup", "listbox", 1, "mat-mdc-select"], hostVars: 21, hostBindings: function (i, a) { i & 1 && t.\u0275\u0275listener("keydown", function (l) { return a._handleKeydown(l); })("focus", function () { return a._onFocus(); })("blur", function () { return a._onBlur(); }), i & 2 && (t.\u0275\u0275attribute("id", a.id)("tabindex", a.disabled ? -1 : a.tabIndex)("aria-controls", a.panelOpen ? a.id + "-panel" : null)("aria-expanded", a.panelOpen)("aria-label", a.ariaLabel || null)("aria-required", a.required.toString())("aria-disabled", a.disabled.toString())("aria-invalid", a.errorState)("aria-activedescendant", a._getAriaActiveDescendant()), t.\u0275\u0275classProp("mat-mdc-select-disabled", a.disabled)("mat-mdc-select-invalid", a.errorState)("mat-mdc-select-required", a.required)("mat-mdc-select-empty", a.empty)("mat-mdc-select-multiple", a.multiple)("mat-select-open", a.panelOpen)); }, inputs: { userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"], panelClass: "panelClass", disabled: [2, "disabled", "disabled", h], disableRipple: [2, "disableRipple", "disableRipple", h], tabIndex: [2, "tabIndex", "tabIndex", e => e == null ? 0 : V(e)], hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", h], placeholder: "placeholder", required: [2, "required", "required", h], multiple: [2, "multiple", "multiple", h], disableOptionCentering: [2, "disableOptionCentering", "disableOptionCentering", h], compareWith: "compareWith", value: "value", ariaLabel: [0, "aria-label", "ariaLabel"], ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"], errorStateMatcher: "errorStateMatcher", typeaheadDebounceInterval: [2, "typeaheadDebounceInterval", "typeaheadDebounceInterval", V], sortComparator: "sortComparator", id: "id", panelWidth: "panelWidth", canSelectNullableOptions: [2, "canSelectNullableOptions", "canSelectNullableOptions", h] }, outputs: { openedChange: "openedChange", _openedStream: "opened", _closedStream: "closed", selectionChange: "selectionChange", valueChange: "valueChange" }, exportAs: ["matSelect"], features: [t.\u0275\u0275ProvidersFeature([{ provide: D, useExisting: r }, { provide: w, useExisting: r }]), t.\u0275\u0275NgOnChangesFeature], ngContentSelectors: Oe, decls: 11, vars: 9, consts: [["fallbackOverlayOrigin", "cdkOverlayOrigin", "trigger", ""], ["panel", ""], ["cdk-overlay-origin", "", 1, "mat-mdc-select-trigger", 3, "click"], [1, "mat-mdc-select-value"], [1, "mat-mdc-select-placeholder", "mat-mdc-select-min-line"], [1, "mat-mdc-select-value-text"], [1, "mat-mdc-select-arrow-wrapper"], [1, "mat-mdc-select-arrow"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "focusable", "false", "aria-hidden", "true"], ["d", "M7 10l5 5 5-5z"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "detach", "backdropClick", "overlayKeydown", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayWidth", "cdkConnectedOverlayFlexibleDimensions"], [1, "mat-mdc-select-min-line"], ["role", "listbox", "tabindex", "-1", 3, "keydown", "ngClass"]], template: function (i, a) { if (i & 1) {
                let n = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275projectionDef(Ce), t.\u0275\u0275elementStart(0, "div", 2, 0), t.\u0275\u0275listener("click", function () { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(a.open()); }), t.\u0275\u0275elementStart(3, "div", 3), t.\u0275\u0275conditionalCreate(4, we, 2, 1, "span", 4)(5, ke, 3, 1, "span", 5), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(6, "div", 6)(7, "div", 7), t.\u0275\u0275namespaceSVG(), t.\u0275\u0275elementStart(8, "svg", 8), t.\u0275\u0275element(9, "path", 9), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275template(10, xe, 3, 10, "ng-template", 10), t.\u0275\u0275listener("detach", function () { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(a.close()); })("backdropClick", function () { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(a.close()); })("overlayKeydown", function (d) { return t.\u0275\u0275restoreView(n), t.\u0275\u0275resetView(a._handleOverlayKeydown(d)); });
            } if (i & 2) {
                let n = t.\u0275\u0275reference(1);
                t.\u0275\u0275advance(3), t.\u0275\u0275attribute("id", a._valueId), t.\u0275\u0275advance(), t.\u0275\u0275conditional(a.empty ? 4 : 5), t.\u0275\u0275advance(6), t.\u0275\u0275property("cdkConnectedOverlayDisableClose", !0)("cdkConnectedOverlayPanelClass", a._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", a._scrollStrategy)("cdkConnectedOverlayOrigin", a._preferredOverlayOrigin || n)("cdkConnectedOverlayPositions", a._positions)("cdkConnectedOverlayWidth", a._overlayWidth)("cdkConnectedOverlayFlexibleDimensions", !0);
            } }, dependencies: [F, R, ye], styles: [`@keyframes _mat-select-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-select-exit{from{opacity:1}to{opacity:0}}.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));font-family:var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking))}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-disabled .mat-mdc-select-placeholder{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color, var(--mat-sys-error))}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-select-open .mat-mdc-select-arrow{transform:rotate(180deg)}.mat-form-field-animations-enabled .mat-mdc-select-arrow{transition:transform 80ms linear}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media(forced-colors: active){.mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .mat-mdc-select-arrow svg{fill:GrayText}}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:relative;background-color:var(--mat-select-panel-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-select-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-select-panel-animations-enabled{animation:_mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-select-panel-animations-enabled.mat-select-panel-exit{animation:_mat-select-exit 100ms linear}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder,._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform, translateY(-8px))}
`], encapsulation: 2, changeDetection: 0 });
    }
    return r;
})(), st = (() => { class r {
    static \u0275fac = function (i) { return new (i || r); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: r, selectors: [["mat-select-trigger"]], features: [t.\u0275\u0275ProvidersFeature([{ provide: j, useExisting: r }])] });
} return r; })(), ot = (() => { class r {
    static \u0275fac = function (i) { return new (i || r); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = t.\u0275\u0275defineInjector({ providers: [Te], imports: [X, g, _, ie, E, g, _] });
} return r; })();
export { Y as a, De as b, Ie as c, Te as d, j as e, v as f, lt as g, st as h, ot as i };
