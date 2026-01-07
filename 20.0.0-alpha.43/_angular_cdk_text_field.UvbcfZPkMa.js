import { a as f } from "@nf-internal/chunk-7N7HFQKY";
import { a as h } from "@nf-internal/chunk-DQM2BKPX";
import { a as u, c as m } from "@nf-internal/chunk-JYXTBF5A";
import "@nf-internal/chunk-VZR6KEPQ";
import { k as c, q as _ } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import * as s from "@angular/core";
import { inject as o, NgZone as g, RendererFactory2 as v, ElementRef as p, EventEmitter as H, Renderer2 as y, DOCUMENT as E, booleanAttribute as k } from "@angular/core";
import { auditTime as R } from "rxjs/operators";
import "@angular/common";
var x = (() => {
    class i {
        static \u0275fac = function (t) { return new (t || i); };
        static \u0275cmp = s.\u0275\u0275defineComponent({ type: i, selectors: [["ng-component"]], hostAttrs: ["cdk-text-field-style-loader", ""], decls: 0, vars: 0, template: function (t, n) { }, styles: [`textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}
`], encapsulation: 2, changeDetection: 0 });
    }
    return i;
})(), M = { passive: !0 }, b = (() => { class i {
    _platform = o(h);
    _ngZone = o(g);
    _renderer = o(v).createRenderer(null, null);
    _styleLoader = o(f);
    _monitoredElements = new Map;
    constructor() { }
    monitor(e) { if (!this._platform.isBrowser)
        return _; this._styleLoader.load(x); let t = m(e), n = this._monitoredElements.get(t); if (n)
        return n.subject; let r = new c, a = "cdk-text-field-autofilled", d = l => { l.animationName === "cdk-text-field-autofill-start" && !t.classList.contains(a) ? (t.classList.add(a), this._ngZone.run(() => r.next({ target: l.target, isAutofilled: !0 }))) : l.animationName === "cdk-text-field-autofill-end" && t.classList.contains(a) && (t.classList.remove(a), this._ngZone.run(() => r.next({ target: l.target, isAutofilled: !1 }))); }, w = this._ngZone.runOutsideAngular(() => (t.classList.add("cdk-text-field-autofill-monitored"), this._renderer.listen(t, "animationstart", d, M))); return this._monitoredElements.set(t, { subject: r, unlisten: w }), r; }
    stopMonitoring(e) { let t = m(e), n = this._monitoredElements.get(t); n && (n.unlisten(), n.subject.complete(), t.classList.remove("cdk-text-field-autofill-monitored"), t.classList.remove("cdk-text-field-autofilled"), this._monitoredElements.delete(t)); }
    ngOnDestroy() { this._monitoredElements.forEach((e, t) => this.stopMonitoring(t)); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = s.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" });
} return i; })(), Z = (() => { class i {
    _elementRef = o(p);
    _autofillMonitor = o(b);
    cdkAutofill = new H;
    constructor() { }
    ngOnInit() { this._autofillMonitor.monitor(this._elementRef).subscribe(e => this.cdkAutofill.emit(e)); }
    ngOnDestroy() { this._autofillMonitor.stopMonitoring(this._elementRef); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdkAutofill", ""]], outputs: { cdkAutofill: "cdkAutofill" } });
} return i; })(), $ = (() => { class i {
    _elementRef = o(p);
    _platform = o(h);
    _ngZone = o(g);
    _renderer = o(y);
    _resizeEvents = new c;
    _previousValue;
    _initialHeight;
    _destroyed = new c;
    _listenerCleanups;
    _minRows;
    _maxRows;
    _enabled = !0;
    _previousMinRows = -1;
    _textareaElement;
    get minRows() { return this._minRows; }
    set minRows(e) { this._minRows = u(e), this._setMinHeight(); }
    get maxRows() { return this._maxRows; }
    set maxRows(e) { this._maxRows = u(e), this._setMaxHeight(); }
    get enabled() { return this._enabled; }
    set enabled(e) { this._enabled !== e && ((this._enabled = e) ? this.resizeToFitContent(!0) : this.reset()); }
    get placeholder() { return this._textareaElement.placeholder; }
    set placeholder(e) { this._cachedPlaceholderHeight = void 0, e ? this._textareaElement.setAttribute("placeholder", e) : this._textareaElement.removeAttribute("placeholder"), this._cacheTextareaPlaceholderHeight(); }
    _cachedLineHeight;
    _cachedPlaceholderHeight;
    _document = o(E);
    _hasFocus;
    _isViewInited = !1;
    constructor() { o(f).load(x), this._textareaElement = this._elementRef.nativeElement; }
    _setMinHeight() { let e = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null; e && (this._textareaElement.style.minHeight = e); }
    _setMaxHeight() { let e = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null; e && (this._textareaElement.style.maxHeight = e); }
    ngAfterViewInit() { this._platform.isBrowser && (this._initialHeight = this._textareaElement.style.height, this.resizeToFitContent(), this._ngZone.runOutsideAngular(() => { this._listenerCleanups = [this._renderer.listen("window", "resize", () => this._resizeEvents.next()), this._renderer.listen(this._textareaElement, "focus", this._handleFocusEvent), this._renderer.listen(this._textareaElement, "blur", this._handleFocusEvent)], this._resizeEvents.pipe(R(16)).subscribe(() => { this._cachedLineHeight = this._cachedPlaceholderHeight = void 0, this.resizeToFitContent(!0); }); }), this._isViewInited = !0, this.resizeToFitContent(!0)); }
    ngOnDestroy() { this._listenerCleanups?.forEach(e => e()), this._resizeEvents.complete(), this._destroyed.next(), this._destroyed.complete(); }
    _cacheTextareaLineHeight() { if (this._cachedLineHeight)
        return; let e = this._textareaElement.cloneNode(!1), t = e.style; e.rows = 1, t.position = "absolute", t.visibility = "hidden", t.border = "none", t.padding = "0", t.height = "", t.minHeight = "", t.maxHeight = "", t.top = t.bottom = t.left = t.right = "auto", t.overflow = "hidden", this._textareaElement.parentNode.appendChild(e), this._cachedLineHeight = e.clientHeight, e.remove(), this._setMinHeight(), this._setMaxHeight(); }
    _measureScrollHeight() { let e = this._textareaElement, t = e.style.marginBottom || "", n = this._platform.FIREFOX, r = n && this._hasFocus, a = n ? "cdk-textarea-autosize-measuring-firefox" : "cdk-textarea-autosize-measuring"; r && (e.style.marginBottom = `${e.clientHeight}px`), e.classList.add(a); let d = e.scrollHeight - 4; return e.classList.remove(a), r && (e.style.marginBottom = t), d; }
    _cacheTextareaPlaceholderHeight() { if (!this._isViewInited || this._cachedPlaceholderHeight != null)
        return; if (!this.placeholder) {
        this._cachedPlaceholderHeight = 0;
        return;
    } let e = this._textareaElement.value; this._textareaElement.value = this._textareaElement.placeholder, this._cachedPlaceholderHeight = this._measureScrollHeight(), this._textareaElement.value = e; }
    _handleFocusEvent = e => { this._hasFocus = e.type === "focus"; };
    ngDoCheck() { this._platform.isBrowser && this.resizeToFitContent(); }
    resizeToFitContent(e = !1) { if (!this._enabled || (this._cacheTextareaLineHeight(), this._cacheTextareaPlaceholderHeight(), !this._cachedLineHeight))
        return; let t = this._elementRef.nativeElement, n = t.value; if (!e && this._minRows === this._previousMinRows && n === this._previousValue)
        return; let r = this._measureScrollHeight(), a = Math.max(r, this._cachedPlaceholderHeight || 0); t.style.height = `${a}px`, this._ngZone.runOutsideAngular(() => { typeof requestAnimationFrame < "u" ? requestAnimationFrame(() => this._scrollToCaretPosition(t)) : setTimeout(() => this._scrollToCaretPosition(t)); }), this._previousValue = n, this._previousMinRows = this._minRows; }
    reset() { this._initialHeight !== void 0 && (this._textareaElement.style.height = this._initialHeight); }
    _noopInputHandler() { }
    _scrollToCaretPosition(e) { let { selectionStart: t, selectionEnd: n } = e; !this._destroyed.isStopped && this._hasFocus && e.setSelectionRange(t, n); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: i, selectors: [["textarea", "cdkTextareaAutosize", ""]], hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"], hostBindings: function (t, n) { t & 1 && s.\u0275\u0275listener("input", function () { return n._noopInputHandler(); }); }, inputs: { minRows: [0, "cdkAutosizeMinRows", "minRows"], maxRows: [0, "cdkAutosizeMaxRows", "maxRows"], enabled: [2, "cdkTextareaAutosize", "enabled", k], placeholder: "placeholder" }, exportAs: ["cdkTextareaAutosize"] });
} return i; })(), q = (() => { class i {
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275mod = s.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = s.\u0275\u0275defineInjector({});
} return i; })();
export { b as AutofillMonitor, Z as CdkAutofill, $ as CdkTextareaAutosize, q as TextFieldModule };
