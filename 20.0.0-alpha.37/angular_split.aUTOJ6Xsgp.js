import "@nf-internal/chunk-VZR6KEPQ";
import { f as S, k as b } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import * as s from "@angular/core";
import { InjectionToken as D, Injector as M, EventEmitter as m } from "@angular/core";
import * as f from "@angular/common";
import { CommonModule as w } from "@angular/common";
import { debounceTime as k } from "rxjs/operators";
var R = ["gutterEls"], O = ["*"], T = (i, l, e, t, n, r) => ({ areaBefore: i, areaAfter: l, gutterNum: e, first: t, last: n, isDragged: r });
function G(i, l) { i & 1 && s.\u0275\u0275elementContainer(0); }
function I(i, l) { if (i & 1 && (s.\u0275\u0275elementContainerStart(0), s.\u0275\u0275template(1, G, 1, 0, "ng-container", 7), s.\u0275\u0275elementContainerEnd()), i & 2) {
    let e = l.$implicit, t = s.\u0275\u0275nextContext(3), n = t.$implicit, r = t.index, a = t.first, o = s.\u0275\u0275nextContext();
    s.\u0275\u0275advance(), s.\u0275\u0275property("ngTemplateOutlet", o.customGutter.template)("ngTemplateOutletContext", s.\u0275\u0275pureFunction6(3, T, n, o.displayedAreas[r + 1], r + 1, a, r === o.displayedAreas.length - 2, o.draggedGutterNum === r + 1))("ngTemplateOutletInjector", e);
} }
function j(i, l) { if (i & 1 && (s.\u0275\u0275elementContainerStart(0), s.\u0275\u0275template(1, I, 2, 10, "ng-container", 6), s.\u0275\u0275elementContainerEnd()), i & 2) {
    let e = s.\u0275\u0275nextContext(2).index;
    s.\u0275\u0275advance(), s.\u0275\u0275property("asSplitGutterDynamicInjector", e + 1);
} }
function F(i, l) { i & 1 && s.\u0275\u0275element(0, "div", 8); }
function B(i, l) { if (i & 1) {
    let e = s.\u0275\u0275getCurrentView();
    s.\u0275\u0275elementStart(0, "div", 4, 0), s.\u0275\u0275listener("keydown", function (n) { s.\u0275\u0275restoreView(e); let r = s.\u0275\u0275nextContext().index, a = s.\u0275\u0275nextContext(); return s.\u0275\u0275resetView(a.startKeyboardDrag(n, r * 2 + 1, r + 1)); })("mousedown", function (n) { s.\u0275\u0275restoreView(e); let r = s.\u0275\u0275nextContext().index, a = s.\u0275\u0275nextContext(); return s.\u0275\u0275resetView(a.startMouseDrag(n, r * 2 + 1, r + 1)); })("touchstart", function (n) { s.\u0275\u0275restoreView(e); let r = s.\u0275\u0275nextContext().index, a = s.\u0275\u0275nextContext(); return s.\u0275\u0275resetView(a.startMouseDrag(n, r * 2 + 1, r + 1)); })("mouseup", function (n) { s.\u0275\u0275restoreView(e); let r = s.\u0275\u0275nextContext().index, a = s.\u0275\u0275nextContext(); return s.\u0275\u0275resetView(a.clickGutter(n, r + 1)); })("touchend", function (n) { s.\u0275\u0275restoreView(e); let r = s.\u0275\u0275nextContext().index, a = s.\u0275\u0275nextContext(); return s.\u0275\u0275resetView(a.clickGutter(n, r + 1)); }), s.\u0275\u0275template(2, j, 2, 1, "ng-container", 5)(3, F, 1, 0, "ng-template", null, 1, s.\u0275\u0275templateRefExtractor), s.\u0275\u0275elementEnd();
} if (i & 2) {
    let e = s.\u0275\u0275reference(4), t = s.\u0275\u0275nextContext(), n = t.$implicit, r = t.index, a = s.\u0275\u0275nextContext();
    s.\u0275\u0275styleProp("flex-basis", a.gutterSize, "px")("order", r * 2 + 1), s.\u0275\u0275classProp("as-dragged", a.draggedGutterNum === r + 1), s.\u0275\u0275attribute("aria-label", a.gutterAriaLabel)("aria-orientation", a.direction)("aria-valuemin", n.minSize)("aria-valuemax", n.maxSize)("aria-valuenow", n.size === "*" ? null : n.size)("aria-valuetext", a.getAriaAreaSizeText(n.size)), s.\u0275\u0275advance(2), s.\u0275\u0275property("ngIf", a.customGutter == null ? null : a.customGutter.template)("ngIfElse", e);
} }
function N(i, l) { if (i & 1 && s.\u0275\u0275template(0, B, 5, 14, "div", 3), i & 2) {
    let e = l.last;
    s.\u0275\u0275property("ngIf", e === !1);
} }
function p(i) { if (i.changedTouches !== void 0 && i.changedTouches.length > 0)
    return { x: i.changedTouches[0].clientX, y: i.changedTouches[0].clientY }; if (i.clientX !== void 0 && i.clientY !== void 0)
    return { x: i.clientX, y: i.clientY }; if (i.currentTarget !== void 0) {
    let l = i.currentTarget;
    return { x: l.offsetLeft, y: l.offsetTop };
} return null; }
function v(i, l, e) { return Math.abs(i.x - l.x) <= e && Math.abs(i.y - l.y) <= e; }
function L(i, l) { if (l === "horizontal")
    switch (i.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "PageUp":
        case "PageDown": break;
        default: return null;
    } if (l === "vertical")
    switch (i.key) {
        case "ArrowUp":
        case "ArrowDown":
        case "PageUp":
        case "PageDown": break;
        default: return null;
    } let e = i.currentTarget, t = i.key === "PageUp" || i.key === "PageDown" ? 500 : 50, n = e.offsetLeft, r = e.offsetTop; switch (i.key) {
    case "ArrowLeft":
        n -= t;
        break;
    case "ArrowRight":
        n += t;
        break;
    case "ArrowUp":
        r -= t;
        break;
    case "ArrowDown":
        r += t;
        break;
    case "PageUp":
        l === "vertical" ? r -= t : n += t;
        break;
    case "PageDown":
        l === "vertical" ? r += t : n -= t;
        break;
    default: return null;
} return { x: n, y: r }; }
function C(i, l) { let e = i.nativeElement.getBoundingClientRect(); return l === "horizontal" ? e.width : e.height; }
function g(i) { return typeof i == "boolean" ? i : i !== "false"; }
function c(i, l) { return i == null ? l : (i = Number(i), !isNaN(i) && i >= 0 ? i : l); }
function y(i, l) { if (i === "percent") {
    let e = l.reduce((n, r) => r !== "*" ? n + r : n, 0), t = l.filter(n => n === "*");
    return t.length > 1 ? !1 : (t.length === 1 || e > 99.9) && e < 100.1;
} if (i === "pixel")
    return l.filter(e => e === "*").length === 1; }
function A(i) { return i.size === "*" ? null : i.component.lockSize === !0 ? i.size : i.component.minSize === null ? null : i.component.minSize; }
function x(i) { return i.size === "*" ? null : i.component.lockSize === !0 ? i.size : i.component.maxSize === null ? null : i.component.maxSize < i.size ? i.size : i.component.maxSize; }
function h(i, l, e, t) { return l.reduce((n, r) => { let a = V(i, r, n.remain, t); return n.list.push(a), n.remain = a.pixelRemain, n; }, { remain: e, list: [] }); }
function V(i, l, e, t) { if (e === 0)
    return { areaSnapshot: l, pixelAbsorb: 0, percentAfterAbsorption: l.sizePercentAtStart, pixelRemain: 0 }; if (l.sizePixelAtStart === 0 && e < 0)
    return { areaSnapshot: l, pixelAbsorb: 0, percentAfterAbsorption: 0, pixelRemain: e }; if (i === "percent")
    return U(l, e, t); if (i === "pixel")
    return Q(l, e); }
function U(i, l, e) { let n = (i.sizePixelAtStart + l) / e * 100; if (l > 0) {
    if (i.area.maxSize !== null && n > i.area.maxSize) {
        let r = i.area.maxSize / 100 * e;
        return { areaSnapshot: i, pixelAbsorb: r, percentAfterAbsorption: i.area.maxSize, pixelRemain: i.sizePixelAtStart + l - r };
    }
    return { areaSnapshot: i, pixelAbsorb: l, percentAfterAbsorption: n > 100 ? 100 : n, pixelRemain: 0 };
}
else if (l < 0) {
    if (i.area.minSize !== null && n < i.area.minSize) {
        let r = i.area.minSize / 100 * e;
        return { areaSnapshot: i, pixelAbsorb: r, percentAfterAbsorption: i.area.minSize, pixelRemain: i.sizePixelAtStart + l - r };
    }
    else if (n < 0)
        return { areaSnapshot: i, pixelAbsorb: -i.sizePixelAtStart, percentAfterAbsorption: 0, pixelRemain: l + i.sizePixelAtStart };
    return { areaSnapshot: i, pixelAbsorb: l, percentAfterAbsorption: n, pixelRemain: 0 };
} }
function Q(i, l) { let e = i.sizePixelAtStart + l; if (l > 0)
    return i.area.maxSize !== null && e > i.area.maxSize ? { areaSnapshot: i, pixelAbsorb: i.area.maxSize - i.sizePixelAtStart, percentAfterAbsorption: -1, pixelRemain: e - i.area.maxSize } : { areaSnapshot: i, pixelAbsorb: l, percentAfterAbsorption: -1, pixelRemain: 0 }; if (l < 0)
    return i.area.minSize !== null && e < i.area.minSize ? { areaSnapshot: i, pixelAbsorb: i.area.minSize + l - e, percentAfterAbsorption: -1, pixelRemain: e - i.area.minSize } : e < 0 ? { areaSnapshot: i, pixelAbsorb: -i.sizePixelAtStart, percentAfterAbsorption: -1, pixelRemain: l + i.sizePixelAtStart } : { areaSnapshot: i, pixelAbsorb: l, percentAfterAbsorption: -1, pixelRemain: 0 }; }
function E(i, l) { l.areaSnapshot.area.size !== "*" && (i === "percent" ? l.areaSnapshot.area.size = l.percentAfterAbsorption : i === "pixel" && (l.areaSnapshot.area.size = l.areaSnapshot.sizePixelAtStart + l.pixelAbsorb)); }
var Z = new D("angular-split-global-config"), _ = (() => { class i {
    constructor(e) { this.template = e, this.gutterToHandleElementMap = new Map, this.gutterToExcludeDragElementMap = new Map; }
    canStartDragging(e, t) { return this.gutterToExcludeDragElementMap.has(t) && this.gutterToExcludeDragElementMap.get(t).some(r => r.nativeElement.contains(e)) ? !1 : this.gutterToHandleElementMap.has(t) ? this.gutterToHandleElementMap.get(t).some(n => n.nativeElement.contains(e)) : !0; }
    addToMap(e, t, n) { e.has(t) ? e.get(t).push(n) : e.set(t, [n]); }
    removedFromMap(e, t, n) { let r = e.get(t); r.splice(r.indexOf(n), 1), r.length === 0 && e.delete(t); }
    static ngTemplateContextGuard(e, t) { return !0; }
    static { this.\u0275fac = function (t) { return new (t || i)(s.\u0275\u0275directiveInject(s.TemplateRef)); }; }
    static { this.\u0275dir = s.\u0275\u0275defineDirective({ type: i, selectors: [["", "asSplitGutter", ""]], standalone: !1 }); }
} return i; })(), z = new D("Gutter num"), $ = (() => { class i {
    set gutterNum(e) { this.vcr.clear(); let t = M.create({ providers: [{ provide: z, useValue: e }], parent: this.vcr.injector }); this.vcr.createEmbeddedView(this.templateRef, { $implicit: t }); }
    constructor(e, t) { this.vcr = e, this.templateRef = t; }
    static ngTemplateContextGuard(e, t) { return !0; }
    static { this.\u0275fac = function (t) { return new (t || i)(s.\u0275\u0275directiveInject(s.ViewContainerRef), s.\u0275\u0275directiveInject(s.TemplateRef)); }; }
    static { this.\u0275dir = s.\u0275\u0275defineDirective({ type: i, selectors: [["", "asSplitGutterDynamicInjector", ""]], inputs: { gutterNum: [0, "asSplitGutterDynamicInjector", "gutterNum"] }, standalone: !1 }); }
} return i; })(), Y = (() => { class i {
    set direction(e) { this._direction = e === "vertical" ? "vertical" : "horizontal", this.renderer.addClass(this.elRef.nativeElement, `as-${this._direction}`), this.renderer.removeClass(this.elRef.nativeElement, `as-${this._direction === "vertical" ? "horizontal" : "vertical"}`), this.build(!1, !1); }
    get direction() { return this._direction; }
    set unit(e) { this._unit = e === "pixel" ? "pixel" : "percent", this.renderer.addClass(this.elRef.nativeElement, `as-${this._unit}`), this.renderer.removeClass(this.elRef.nativeElement, `as-${this._unit === "pixel" ? "percent" : "pixel"}`), this.build(!1, !0); }
    get unit() { return this._unit; }
    set gutterSize(e) { this._gutterSize = c(e, 11), this.build(!1, !1); }
    get gutterSize() { return this._gutterSize; }
    set gutterStep(e) { this._gutterStep = c(e, 1); }
    get gutterStep() { return this._gutterStep; }
    set restrictMove(e) { this._restrictMove = g(e); }
    get restrictMove() { return this._restrictMove; }
    set useTransition(e) { this._useTransition = g(e), this._useTransition ? this.renderer.addClass(this.elRef.nativeElement, "as-transition") : this.renderer.removeClass(this.elRef.nativeElement, "as-transition"); }
    get useTransition() { return this._useTransition; }
    set disabled(e) { this._disabled = g(e), this._disabled ? this.renderer.addClass(this.elRef.nativeElement, "as-disabled") : this.renderer.removeClass(this.elRef.nativeElement, "as-disabled"); }
    get disabled() { return this._disabled; }
    set dir(e) { this._dir = e === "rtl" ? "rtl" : "ltr", this.renderer.setAttribute(this.elRef.nativeElement, "dir", this._dir); }
    get dir() { return this._dir; }
    set gutterDblClickDuration(e) { this._gutterDblClickDuration = c(e, 0); }
    get gutterDblClickDuration() { return this._gutterDblClickDuration; }
    get transitionEnd() { return new S(e => this.transitionEndSubscriber = e).pipe(k(20)); }
    constructor(e, t, n, r, a) { this.ngZone = e, this.elRef = t, this.cdRef = n, this.renderer = r, this.gutterClickDeltaPx = 2, this._config = { direction: "horizontal", unit: "percent", gutterSize: 11, gutterStep: 1, restrictMove: !1, useTransition: !1, disabled: !1, dir: "ltr", gutterDblClickDuration: 0 }, this.dragStart = new m(!1), this.dragEnd = new m(!1), this.gutterClick = new m(!1), this.gutterDblClick = new m(!1), this.dragProgressSubject = new b, this.dragProgress$ = this.dragProgressSubject.asObservable(), this.isDragging = !1, this.isWaitingClear = !1, this.isWaitingInitialMove = !1, this.dragListeners = [], this.snapshot = null, this.startPoint = null, this.endPoint = null, this.displayedAreas = [], this.hiddenAreas = [], this._clickTimeout = null, this.draggedGutterNum = void 0, this.direction = this._direction, this._config = a ? Object.assign(this._config, a) : this._config, Object.keys(this._config).forEach(o => { this[o] = this._config[o]; }); }
    ngAfterViewInit() { this.ngZone.runOutsideAngular(() => { setTimeout(() => this.renderer.addClass(this.elRef.nativeElement, "as-init")); }); }
    getNbGutters() { return this.displayedAreas.length === 0 ? 0 : this.displayedAreas.length - 1; }
    addArea(e) { let t = { component: e, order: 0, size: 0, minSize: null, maxSize: null, sizeBeforeCollapse: null, gutterBeforeCollapse: 0 }; e.visible === !0 ? (this.displayedAreas.push(t), this.build(!0, !0)) : this.hiddenAreas.push(t); }
    removeArea(e) { if (this.displayedAreas.some(t => t.component === e)) {
        let t = this.displayedAreas.find(n => n.component === e);
        this.displayedAreas.splice(this.displayedAreas.indexOf(t), 1), this.build(!0, !0);
    }
    else if (this.hiddenAreas.some(t => t.component === e)) {
        let t = this.hiddenAreas.find(n => n.component === e);
        this.hiddenAreas.splice(this.hiddenAreas.indexOf(t), 1);
    } }
    updateArea(e, t, n) { e.visible === !0 && this.build(t, n); }
    showArea(e) { let t = this.hiddenAreas.find(r => r.component === e); if (t === void 0)
        return; let n = this.hiddenAreas.splice(this.hiddenAreas.indexOf(t), 1); this.displayedAreas.push(...n), this.build(!0, !0); }
    hideArea(e) { let t = this.displayedAreas.find(r => r.component === e); if (t === void 0)
        return; let n = this.displayedAreas.splice(this.displayedAreas.indexOf(t), 1); n.forEach(r => { r.order = 0, r.size = 0; }), this.hiddenAreas.push(...n), this.build(!0, !0); }
    getVisibleAreaSizes() { return this.displayedAreas.map(e => e.size); }
    setVisibleAreaSizes(e) { if (e.length !== this.displayedAreas.length)
        return !1; let t = e.map(r => c(r, "*")); return y(this.unit, t) === !1 ? !1 : (this.displayedAreas.forEach((r, a) => r.component.size = t[a]), this.build(!1, !0), !0); }
    build(e, t) { if (this.stopDragging(), e === !0 && (this.displayedAreas.every(n => n.component.order !== null) && this.displayedAreas.sort((n, r) => n.component.order - r.component.order), this.displayedAreas.forEach((n, r) => { n.order = r * 2, n.component.setStyleOrder(n.order); })), t === !0) {
        let n = y(this.unit, this.displayedAreas.map(r => r.component.size));
        switch (this.unit) {
            case "percent": {
                let r = 100 / this.displayedAreas.length;
                this.displayedAreas.forEach(a => { a.size = n ? a.component.size : r, a.minSize = A(a), a.maxSize = x(a); });
                break;
            }
            case "pixel": {
                if (n)
                    this.displayedAreas.forEach(r => { r.size = r.component.size, r.minSize = A(r), r.maxSize = x(r); });
                else {
                    let r = this.displayedAreas.filter(a => a.component.size === "*");
                    if (r.length === 0 && this.displayedAreas.length > 0)
                        this.displayedAreas.forEach((a, o) => { a.size = o === 0 ? "*" : a.component.size, a.minSize = o === 0 ? a.component.minSize : A(a), a.maxSize = o === 0 ? null : x(a); });
                    else if (r.length > 1) {
                        let a = !1;
                        this.displayedAreas.forEach(o => { o.component.size === "*" ? a === !1 ? (o.size = "*", o.minSize = null, o.maxSize = null, a = !0) : (o.size = 100, o.minSize = null, o.maxSize = null) : (o.size = o.component.size, o.minSize = A(o), o.maxSize = x(o)); });
                    }
                }
                break;
            }
        }
    } this.refreshStyleSizes(), this.cdRef.markForCheck(); }
    refreshStyleSizes() { if (this.unit === "percent")
        if (this.displayedAreas.length === 1)
            this.displayedAreas[0].component.setStyleFlex(0, 0, "100%", !1, !1);
        else {
            let e = this.getNbGutters() * this.gutterSize;
            this.displayedAreas.forEach(t => { t.size === "*" ? this.displayedAreas.length === 1 ? t.component.setStyleFlex(1, 1, "100%", !1, !1) : t.component.setStyleFlex(1, 1, "auto", !1, !1) : t.component.setStyleFlex(0, 0, `calc( ${t.size}% - ${t.size / 100 * e}px )`, t.minSize !== null && t.minSize === t.size, t.maxSize !== null && t.maxSize === t.size); });
        }
    else
        this.unit === "pixel" && this.displayedAreas.forEach(e => { e.size === "*" ? this.displayedAreas.length === 1 ? e.component.setStyleFlex(1, 1, "100%", !1, !1) : e.component.setStyleFlex(1, 1, "auto", !1, !1) : this.displayedAreas.length === 1 ? e.component.setStyleFlex(0, 0, "100%", !1, !1) : e.component.setStyleFlex(0, 0, `${e.size}px`, e.minSize !== null && e.minSize === e.size, e.maxSize !== null && e.maxSize === e.size); }); }
    clickGutter(e, t) { let n = p(e); this.startPoint && v(this.startPoint, n, this.gutterClickDeltaPx) && (!this.isDragging || this.isWaitingInitialMove) && (this._clickTimeout !== null ? (window.clearTimeout(this._clickTimeout), this._clickTimeout = null, this.notify("dblclick", t), this.stopDragging()) : this._clickTimeout = window.setTimeout(() => { this._clickTimeout = null, this.notify("click", t), this.stopDragging(); }, this.gutterDblClickDuration)); }
    startKeyboardDrag(e, t, n) { if (this.disabled === !0 || this.isWaitingClear === !0)
        return; let r = L(e, this.direction); r !== null && (this.endPoint = r, this.startPoint = p(e), e.preventDefault(), e.stopPropagation(), this.setupForDragEvent(t, n), this.startDragging(), this.drag(), this.stopDragging()); }
    startMouseDrag(e, t, n) { this.customGutter && !this.customGutter.canStartDragging(e.target, n) || (e.preventDefault(), e.stopPropagation(), this.startPoint = p(e), !(this.startPoint === null || this.disabled === !0 || this.isWaitingClear === !0) && (this.setupForDragEvent(t, n), this.dragListeners.push(this.renderer.listen("document", "mouseup", this.stopDragging.bind(this))), this.dragListeners.push(this.renderer.listen("document", "touchend", this.stopDragging.bind(this))), this.dragListeners.push(this.renderer.listen("document", "touchcancel", this.stopDragging.bind(this))), this.ngZone.runOutsideAngular(() => { this.dragListeners.push(this.renderer.listen("document", "mousemove", this.mouseDragEvent.bind(this))), this.dragListeners.push(this.renderer.listen("document", "touchmove", this.mouseDragEvent.bind(this))); }), this.startDragging())); }
    setupForDragEvent(e, t) { if (this.snapshot = { gutterNum: t, lastSteppedOffset: 0, allAreasSizePixel: C(this.elRef, this.direction) - this.getNbGutters() * this.gutterSize, allInvolvedAreasSizePercent: 100, areasBeforeGutter: [], areasAfterGutter: [] }, this.displayedAreas.forEach(n => { let r = { area: n, sizePixelAtStart: C(n.component.elRef, this.direction), sizePercentAtStart: this.unit === "percent" ? n.size : -1 }; n.order < e ? this.restrictMove === !0 ? this.snapshot.areasBeforeGutter = [r] : this.snapshot.areasBeforeGutter.unshift(r) : n.order > e && (this.restrictMove === !0 ? this.snapshot.areasAfterGutter.length === 0 && (this.snapshot.areasAfterGutter = [r]) : this.snapshot.areasAfterGutter.push(r)); }), this.restrictMove && this.unit === "percent") {
        let n = this.snapshot.areasBeforeGutter[0], r = this.snapshot.areasAfterGutter[0];
        if (n.area.size === "*" || r.area.size === "*") {
            let a = this.displayedAreas.reduce((o, u) => n.area !== u && r.area !== u ? o + u.size : o, 0);
            this.snapshot.allInvolvedAreasSizePercent = 100 - a;
        }
        else
            this.snapshot.allInvolvedAreasSizePercent = [...this.snapshot.areasBeforeGutter, ...this.snapshot.areasAfterGutter].reduce((a, o) => a + o.sizePercentAtStart, 0);
    } this.snapshot.areasBeforeGutter.length === 0 || this.snapshot.areasAfterGutter.length; }
    startDragging() { this.displayedAreas.forEach(e => e.component.lockEvents()), this.isDragging = !0, this.isWaitingInitialMove = !0; }
    mouseDragEvent(e) { e.preventDefault(), e.stopPropagation(); let t = p(e); this._clickTimeout !== null && !v(this.startPoint, t, this.gutterClickDeltaPx) && (window.clearTimeout(this._clickTimeout), this._clickTimeout = null), this.isDragging !== !1 && (this.endPoint = p(e), this.endPoint !== null && this.drag()); }
    drag() { if (this.isWaitingInitialMove)
        if (this.startPoint.x !== this.endPoint.x || this.startPoint.y !== this.endPoint.y)
            this.ngZone.run(() => { this.isWaitingInitialMove = !1, this.renderer.addClass(this.elRef.nativeElement, "as-dragging"), this.draggedGutterNum = this.snapshot.gutterNum, this.cdRef.markForCheck(), this.notify("start", this.snapshot.gutterNum); });
        else
            return; let e = this.direction === "horizontal" ? this.startPoint.x - this.endPoint.x : this.startPoint.y - this.endPoint.y; this.dir === "rtl" && this.direction === "horizontal" && (e = -e); let t = Math.round(e / this.gutterStep) * this.gutterStep; if (t === this.snapshot.lastSteppedOffset)
        return; this.snapshot.lastSteppedOffset = t; let n = h(this.unit, this.snapshot.areasBeforeGutter, -t, this.snapshot.allAreasSizePixel), r = h(this.unit, this.snapshot.areasAfterGutter, t, this.snapshot.allAreasSizePixel); if (n.remain !== 0 && r.remain !== 0 ? Math.abs(n.remain) === Math.abs(r.remain) || (Math.abs(n.remain) > Math.abs(r.remain) ? r = h(this.unit, this.snapshot.areasAfterGutter, t + n.remain, this.snapshot.allAreasSizePixel) : n = h(this.unit, this.snapshot.areasBeforeGutter, -(t - r.remain), this.snapshot.allAreasSizePixel)) : n.remain !== 0 ? r = h(this.unit, this.snapshot.areasAfterGutter, t + n.remain, this.snapshot.allAreasSizePixel) : r.remain !== 0 && (n = h(this.unit, this.snapshot.areasBeforeGutter, -(t - r.remain), this.snapshot.allAreasSizePixel)), this.unit === "percent") {
        let a = [...n.list, ...r.list], u = a.find(d => d.percentAfterAbsorption === "*") ?? a.find(d => d.percentAfterAbsorption !== 0 && d.percentAfterAbsorption !== d.areaSnapshot.area.minSize && d.percentAfterAbsorption !== d.areaSnapshot.area.maxSize);
        u && (u.percentAfterAbsorption = this.snapshot.allInvolvedAreasSizePercent - a.filter(d => d !== u).reduce((d, P) => d + P.percentAfterAbsorption, 0));
    } n.list.forEach(a => E(this.unit, a)), r.list.forEach(a => E(this.unit, a)), this.refreshStyleSizes(), this.notify("progress", this.snapshot.gutterNum); }
    stopDragging(e) { if (e && (e.preventDefault(), e.stopPropagation()), this.isDragging !== !1) {
        for (this.displayedAreas.forEach(t => t.component.unlockEvents()); this.dragListeners.length > 0;) {
            let t = this.dragListeners.pop();
            t && t();
        }
        this.isDragging = !1, this.isWaitingInitialMove === !1 && this.notify("end", this.snapshot.gutterNum), this.renderer.removeClass(this.elRef.nativeElement, "as-dragging"), this.draggedGutterNum = void 0, this.cdRef.markForCheck(), this.snapshot = null, this.isWaitingClear = !0, this.ngZone.runOutsideAngular(() => { setTimeout(() => { this.startPoint = null, this.endPoint = null, this.isWaitingClear = !1; }); });
    } }
    notify(e, t) { let n = this.getVisibleAreaSizes(); e === "start" ? this.dragStart.emit({ gutterNum: t, sizes: n }) : e === "end" ? this.dragEnd.emit({ gutterNum: t, sizes: n }) : e === "click" ? this.gutterClick.emit({ gutterNum: t, sizes: n }) : e === "dblclick" ? this.gutterDblClick.emit({ gutterNum: t, sizes: n }) : e === "transitionEnd" ? this.transitionEndSubscriber && this.ngZone.run(() => this.transitionEndSubscriber.next(n)) : e === "progress" && this.dragProgressSubject.next({ gutterNum: t, sizes: n }); }
    ngOnDestroy() { this.stopDragging(); }
    collapseArea(e, t, n) { let r = this.displayedAreas.find(u => u.component === e); if (r === void 0)
        return; let a = n === "right" ? 1 : -1; r.sizeBeforeCollapse || (r.sizeBeforeCollapse = r.size, r.gutterBeforeCollapse = a), r.size = t; let o = this.gutterEls.find(u => u.nativeElement.style.order === `${r.order + a}`); o && this.renderer.addClass(o.nativeElement, "as-split-gutter-collapsed"), this.updateArea(e, !1, !1); }
    expandArea(e) { let t = this.displayedAreas.find(r => r.component === e); if (t === void 0 || !t.sizeBeforeCollapse)
        return; t.size = t.sizeBeforeCollapse, t.sizeBeforeCollapse = null; let n = this.gutterEls.find(r => r.nativeElement.style.order === `${t.order + t.gutterBeforeCollapse}`); n && this.renderer.removeClass(n.nativeElement, "as-split-gutter-collapsed"), this.updateArea(e, !1, !1); }
    getAriaAreaSizeText(e) { return e === "*" ? null : e.toFixed(0) + " " + this.unit; }
    static { this.\u0275fac = function (t) { return new (t || i)(s.\u0275\u0275directiveInject(s.NgZone), s.\u0275\u0275directiveInject(s.ElementRef), s.\u0275\u0275directiveInject(s.ChangeDetectorRef), s.\u0275\u0275directiveInject(s.Renderer2), s.\u0275\u0275directiveInject(Z, 8)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: i, selectors: [["as-split"]], contentQueries: function (t, n, r) { if (t & 1 && s.\u0275\u0275contentQuery(r, _, 5), t & 2) {
            let a;
            s.\u0275\u0275queryRefresh(a = s.\u0275\u0275loadQuery()) && (n.customGutter = a.first);
        } }, viewQuery: function (t, n) { if (t & 1 && s.\u0275\u0275viewQuery(R, 5), t & 2) {
            let r;
            s.\u0275\u0275queryRefresh(r = s.\u0275\u0275loadQuery()) && (n.gutterEls = r);
        } }, inputs: { direction: "direction", unit: "unit", gutterSize: "gutterSize", gutterStep: "gutterStep", restrictMove: "restrictMove", useTransition: "useTransition", disabled: "disabled", dir: "dir", gutterDblClickDuration: "gutterDblClickDuration", gutterClickDeltaPx: "gutterClickDeltaPx", gutterAriaLabel: "gutterAriaLabel" }, outputs: { transitionEnd: "transitionEnd", dragStart: "dragStart", dragEnd: "dragEnd", gutterClick: "gutterClick", gutterDblClick: "gutterDblClick" }, exportAs: ["asSplit"], standalone: !1, ngContentSelectors: O, decls: 2, vars: 1, consts: [["gutterEls", ""], ["defaultGutterTpl", ""], ["ngFor", "", 3, "ngForOf"], ["role", "separator", "tabindex", "0", "class", "as-split-gutter", 3, "as-dragged", "flex-basis", "order", "keydown", "mousedown", "touchstart", "mouseup", "touchend", 4, "ngIf"], ["role", "separator", "tabindex", "0", 1, "as-split-gutter", 3, "keydown", "mousedown", "touchstart", "mouseup", "touchend"], [4, "ngIf", "ngIfElse"], [4, "asSplitGutterDynamicInjector"], [4, "ngTemplateOutlet", "ngTemplateOutletContext", "ngTemplateOutletInjector"], [1, "as-split-gutter-icon"]], template: function (t, n) { t & 1 && (s.\u0275\u0275projectionDef(), s.\u0275\u0275projection(0), s.\u0275\u0275template(1, N, 1, 1, "ng-template", 2)), t & 2 && (s.\u0275\u0275advance(), s.\u0275\u0275property("ngForOf", n.displayedAreas)); }, dependencies: [f.NgForOf, f.NgIf, f.NgTemplateOutlet, $], styles: ["[_nghost-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;overflow:hidden;width:100%;height:100%}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{border:none;flex-grow:0;flex-shrink:0;background-color:#eee;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%] > .as-split-gutter.as-split-gutter-collapsed[_ngcontent-%COMP%]{flex-basis:1px!important;pointer-events:none}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{width:100%;height:100%;background-position:center center;background-repeat:no-repeat}[_nghost-%COMP%]    >.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:auto}[_nghost-%COMP%]    >.as-split-area.as-hidden{flex:0 1 0px!important;overflow-x:hidden;overflow-y:hidden}[_nghost-%COMP%]    >.as-split-area .iframe-fix{position:absolute;top:0;left:0;width:100%;height:100%}.as-horizontal[_nghost-%COMP%]{flex-direction:row}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:row;cursor:col-resize;height:100%}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}.as-horizontal[_nghost-%COMP%]    >.as-split-area{height:100%}.as-vertical[_nghost-%COMP%]{flex-direction:column}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:column;cursor:row-resize;width:100%}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC)}.as-vertical[_nghost-%COMP%]    >.as-split-area{width:100%}.as-vertical[_nghost-%COMP%]    >.as-split-area.as-hidden{max-width:0}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:default}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}.as-transition.as-init[_nghost-%COMP%]:not(.as-dragging) > .as-split-gutter[_ngcontent-%COMP%], .as-transition.as-init[_nghost-%COMP%]:not(.as-dragging)    >.as-split-area{transition:flex-basis .3s}"], changeDetection: 0 }); }
} return i; })(), ue = (() => { class i {
    set order(e) { this._order = c(e, null), this.split.updateArea(this, !0, !1); }
    get order() { return this._order; }
    set size(e) { this._size = c(e, "*"), this.split.updateArea(this, !1, !0); }
    get size() { return this._size; }
    set minSize(e) { this._minSize = c(e, null), this.split.updateArea(this, !1, !0); }
    get minSize() { return this._minSize; }
    set maxSize(e) { this._maxSize = c(e, null), this.split.updateArea(this, !1, !0); }
    get maxSize() { return this._maxSize; }
    set lockSize(e) { this._lockSize = g(e), this.split.updateArea(this, !1, !0); }
    get lockSize() { return this._lockSize; }
    set visible(e) { this._visible = g(e), this._visible ? (this.split.showArea(this), this.renderer.removeClass(this.elRef.nativeElement, "as-hidden")) : (this.split.hideArea(this), this.renderer.addClass(this.elRef.nativeElement, "as-hidden")); }
    get visible() { return this._visible; }
    constructor(e, t, n, r) { this.ngZone = e, this.renderer = t, this.split = n, this.elRef = r, this._order = null, this._size = "*", this._minSize = null, this._maxSize = null, this._lockSize = !1, this._visible = !0, this.lockListeners = [], this.renderer.addClass(this.elRef.nativeElement, "as-split-area"); }
    ngOnInit() { this.split.addArea(this), this.ngZone.runOutsideAngular(() => { this.transitionListener = this.renderer.listen(this.elRef.nativeElement, "transitionend", t => { t.propertyName === "flex-basis" && this.split.notify("transitionEnd", -1); }); }); let e = this.renderer.createElement("div"); this.renderer.addClass(e, "iframe-fix"), this.dragStartSubscription = this.split.dragStart.subscribe(() => { this.renderer.setStyle(this.elRef.nativeElement, "position", "relative"), this.renderer.appendChild(this.elRef.nativeElement, e); }), this.dragEndSubscription = this.split.dragEnd.subscribe(() => { this.renderer.removeStyle(this.elRef.nativeElement, "position"), this.renderer.removeChild(this.elRef.nativeElement, e); }); }
    setStyleOrder(e) { this.renderer.setStyle(this.elRef.nativeElement, "order", e); }
    setStyleFlex(e, t, n, r, a) { this.renderer.setStyle(this.elRef.nativeElement, "flex-grow", e), this.renderer.setStyle(this.elRef.nativeElement, "flex-shrink", t), this.renderer.setStyle(this.elRef.nativeElement, "flex-basis", n), r === !0 ? this.renderer.addClass(this.elRef.nativeElement, "as-min") : this.renderer.removeClass(this.elRef.nativeElement, "as-min"), a === !0 ? this.renderer.addClass(this.elRef.nativeElement, "as-max") : this.renderer.removeClass(this.elRef.nativeElement, "as-max"); }
    lockEvents() { this.ngZone.runOutsideAngular(() => { this.lockListeners.push(this.renderer.listen(this.elRef.nativeElement, "selectstart", () => !1)), this.lockListeners.push(this.renderer.listen(this.elRef.nativeElement, "dragstart", () => !1)); }); }
    unlockEvents() { for (; this.lockListeners.length > 0;) {
        let e = this.lockListeners.pop();
        e && e();
    } }
    ngOnDestroy() { this.unlockEvents(), this.transitionListener && this.transitionListener(), this.dragStartSubscription?.unsubscribe(), this.dragEndSubscription?.unsubscribe(), this.split.removeArea(this); }
    collapse(e = 0, t = "right") { this.split.collapseArea(this, e, t); }
    expand() { this.split.expandArea(this); }
    static { this.\u0275fac = function (t) { return new (t || i)(s.\u0275\u0275directiveInject(s.NgZone), s.\u0275\u0275directiveInject(s.Renderer2), s.\u0275\u0275directiveInject(Y), s.\u0275\u0275directiveInject(s.ElementRef)); }; }
    static { this.\u0275dir = s.\u0275\u0275defineDirective({ type: i, selectors: [["as-split-area"], ["", "as-split-area", ""]], inputs: { order: "order", size: "size", minSize: "minSize", maxSize: "maxSize", lockSize: "lockSize", visible: "visible" }, exportAs: ["asSplitArea"], standalone: !1 }); }
} return i; })(), de = (() => { class i {
    constructor(e, t, n) { this.gutterNum = e, this.elementRef = t, this.gutterDir = n; }
    ngOnInit() { this.gutterDir.addToMap(this.gutterDir.gutterToHandleElementMap, this.gutterNum, this.elementRef); }
    ngOnDestroy() { this.gutterDir.removedFromMap(this.gutterDir.gutterToHandleElementMap, this.gutterNum, this.elementRef); }
    static { this.\u0275fac = function (t) { return new (t || i)(s.\u0275\u0275directiveInject(z), s.\u0275\u0275directiveInject(s.ElementRef), s.\u0275\u0275directiveInject(_)); }; }
    static { this.\u0275dir = s.\u0275\u0275defineDirective({ type: i, selectors: [["", "asSplitGutterDragHandle", ""]], standalone: !1 }); }
} return i; })(), ce = (() => { class i {
    constructor(e, t, n) { this.gutterNum = e, this.elementRef = t, this.gutterDir = n; }
    ngOnInit() { this.gutterDir.addToMap(this.gutterDir.gutterToExcludeDragElementMap, this.gutterNum, this.elementRef); }
    ngOnDestroy() { this.gutterDir.removedFromMap(this.gutterDir.gutterToExcludeDragElementMap, this.gutterNum, this.elementRef); }
    static { this.\u0275fac = function (t) { return new (t || i)(s.\u0275\u0275directiveInject(z), s.\u0275\u0275directiveInject(s.ElementRef), s.\u0275\u0275directiveInject(_)); }; }
    static { this.\u0275dir = s.\u0275\u0275defineDirective({ type: i, selectors: [["", "asSplitGutterExcludeFromDrag", ""]], standalone: !1 }); }
} return i; })(), he = (() => { class i {
    static { this.\u0275fac = function (t) { return new (t || i); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({ imports: [w] }); }
} return i; })();
export { Z as ANGULAR_SPLIT_DEFAULT_OPTIONS, he as AngularSplitModule, ue as SplitAreaDirective, Y as SplitComponent, _ as SplitGutterDirective, de as SplitGutterDragHandleDirective, ce as SplitGutterExcludeFromDragDirective };
