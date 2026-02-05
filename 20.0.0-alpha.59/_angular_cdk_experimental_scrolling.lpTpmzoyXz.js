import "@nf-internal/chunk-KQGCPFC3";
import { f as p } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import { coerceNumberProperty as R } from "@angular/cdk/coercion";
import { VIRTUAL_SCROLL_STRATEGY as z } from "@angular/cdk/scrolling";
import * as f from "@angular/core";
import { forwardRef as O } from "@angular/core";
var _ = class {
    _totalWeight = 0;
    _averageItemSize;
    _defaultItemSize;
    constructor(e = 50) { this._defaultItemSize = e, this._averageItemSize = e; }
    getAverageItemSize() { return this._averageItemSize; }
    addSample(e, r) { let t = this._totalWeight + e.end - e.start; if (t) {
        let n = (r + this._averageItemSize * this._totalWeight) / t;
        n && (this._averageItemSize = n, this._totalWeight = t);
    } }
    reset() { this._averageItemSize = this._defaultItemSize, this._totalWeight = 0; }
}, g = class {
    scrolledIndexChange = new p(() => { });
    _viewport = null;
    _minBufferPx;
    _maxBufferPx;
    _averager;
    _lastScrollOffset;
    _lastRenderedContentSize;
    _lastRenderedContentOffset;
    _removalFailures = 0;
    constructor(e, r, t = new _) { this._minBufferPx = e, this._maxBufferPx = r, this._averager = t; }
    attach(e) { this._averager.reset(), this._viewport = e, this._renderContentForCurrentOffset(); }
    detach() { this._viewport = null; }
    onContentScrolled() { this._viewport && this._updateRenderedContentAfterScroll(); }
    onDataLengthChanged() { this._viewport && (this._renderContentForCurrentOffset(), this._checkRenderedContentSize()); }
    onContentRendered() { this._viewport && this._checkRenderedContentSize(); }
    onRenderedOffsetChanged() { this._viewport && this._checkRenderedContentOffset(); }
    scrollToIndex() { }
    updateBufferSize(e, r) { if (r < e)
        throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx"); this._minBufferPx = e, this._maxBufferPx = r; }
    _updateRenderedContentAfterScroll() { let e = this._viewport, r = e.measureScrollOffset(), t = r - this._lastScrollOffset, n = Math.abs(t), i = e.getRenderedRange(), o = 0; if (t < 0) {
        let d = i.start * this._averager.getAverageItemSize() - this._lastRenderedContentOffset;
        o = Math.round(d * Math.max(0, Math.min(1, n / (r + n)))), t = t - o, n = Math.abs(t);
    } let m = this._lastScrollOffset - this._lastRenderedContentOffset, v = this._lastRenderedContentOffset + this._lastRenderedContentSize - (this._lastScrollOffset + e.getViewportSize()), S = n + this._minBufferPx - (t < 0 ? m : v); if (S > 0)
        if (n >= e.getViewportSize())
            this._renderContentForCurrentOffset();
        else {
            let c = Math.max(0, Math.ceil((S - this._minBufferPx + this._maxBufferPx) / this._averager.getAverageItemSize())), d = (t < 0 ? v : m) - this._minBufferPx + n, C = Math.floor(d / this._averager.getAverageItemSize() / (this._removalFailures + 1)), x = Math.min(i.end - i.start, Math.max(0, C)), a = this._expandRange(i, t < 0 ? c : 0, t > 0 ? c : 0);
            t < 0 ? a.end = Math.max(a.start + 1, a.end - x) : a.start = Math.min(a.end - 1, a.start + x);
            let l, u;
            if (t < 0) {
                let h = e.measureRangeSize({ start: a.end, end: i.end });
                h <= d ? (l = this._lastRenderedContentOffset + this._lastRenderedContentSize - h, this._removalFailures = 0) : (a.end = i.end, l = this._lastRenderedContentOffset + this._lastRenderedContentSize, this._removalFailures++), u = "to-end";
            }
            else {
                let h = e.measureRangeSize({ start: i.start, end: a.start });
                h <= d ? (l = this._lastRenderedContentOffset + h, this._removalFailures = 0) : (a.start = i.start, l = this._lastRenderedContentOffset, this._removalFailures++), u = "to-start";
            }
            e.setRenderedRange(a), e.setRenderedContentOffset(l + o, u);
        }
    else
        o && e.setRenderedContentOffset(this._lastRenderedContentOffset + o); this._lastScrollOffset = r; }
    _checkRenderedContentSize() { let e = this._viewport; this._lastRenderedContentSize = e.measureRenderedContentSize(), this._averager.addSample(e.getRenderedRange(), this._lastRenderedContentSize), this._updateTotalContentSize(this._lastRenderedContentSize); }
    _checkRenderedContentOffset() { let e = this._viewport; this._lastRenderedContentOffset = e.getOffsetToRenderedContentStart(); }
    _renderContentForCurrentOffset() { let e = this._viewport, r = e.measureScrollOffset(); this._lastScrollOffset = r, this._removalFailures = 0; let t = this._averager.getAverageItemSize(), n = Math.min(e.getDataLength() - 1, Math.floor(r / t)), i = Math.ceil(this._maxBufferPx / t), o = this._expandRange(this._getVisibleRangeForIndex(n), i, i); e.setRenderedRange(o), e.setRenderedContentOffset(t * o.start); }
    _getVisibleRangeForIndex(e) { let r = this._viewport, t = { start: e, end: e + Math.ceil(r.getViewportSize() / this._averager.getAverageItemSize()) }, n = t.end - r.getDataLength(); return n > 0 && (t.start = Math.max(0, t.start - n)), t; }
    _expandRange(e, r, t) { let n = this._viewport, i = Math.max(0, e.start - r), o = Math.min(n.getDataLength(), e.end + t); return { start: i, end: o }; }
    _updateTotalContentSize(e) { let r = this._viewport, t = r.getRenderedRange(), n = e + (r.getDataLength() - (t.end - t.start)) * this._averager.getAverageItemSize(); r.setTotalContentSize(n); }
};
function w(s) { return s._scrollStrategy; }
var b = (() => { class s {
    get minBufferPx() { return this._minBufferPx; }
    set minBufferPx(r) { this._minBufferPx = R(r); }
    _minBufferPx = 100;
    get maxBufferPx() { return this._maxBufferPx; }
    set maxBufferPx(r) { this._maxBufferPx = R(r); }
    _maxBufferPx = 200;
    _scrollStrategy = new g(this.minBufferPx, this.maxBufferPx);
    ngOnChanges() { this._scrollStrategy.updateBufferSize(this.minBufferPx, this.maxBufferPx); }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275dir = f.\u0275\u0275defineDirective({ type: s, selectors: [["cdk-virtual-scroll-viewport", "autosize", ""]], inputs: { minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, features: [f.\u0275\u0275ProvidersFeature([{ provide: z, useFactory: w, deps: [O(() => s)] }]), f.\u0275\u0275NgOnChangesFeature] });
} return s; })(), T = (() => { class s {
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275mod = f.\u0275\u0275defineNgModule({ type: s });
    static \u0275inj = f.\u0275\u0275defineInjector({});
} return s; })();
export { g as AutoSizeVirtualScrollStrategy, b as CdkAutoSizeVirtualScroll, _ as ItemSizeAverager, T as ScrollingModule, w as _autoSizeVirtualScrollStrategyFactory };
