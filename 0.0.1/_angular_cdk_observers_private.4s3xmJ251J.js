import "@nf-internal/chunk-KQGCPFC3";
import { f as b, k as n } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import * as c from "@angular/core";
import { inject as d, NgZone as l } from "@angular/core";
import { filter as a, shareReplay as u, takeUntil as v } from "rxjs/operators";
var i = class {
    _box;
    _destroyed = new n;
    _resizeSubject = new n;
    _resizeObserver;
    _elementObservables = new Map;
    constructor(r) { this._box = r, typeof ResizeObserver < "u" && (this._resizeObserver = new ResizeObserver(e => this._resizeSubject.next(e))); }
    observe(r) { return this._elementObservables.has(r) || this._elementObservables.set(r, new b(e => { let s = this._resizeSubject.subscribe(e); return this._resizeObserver?.observe(r, { box: this._box }), () => { this._resizeObserver?.unobserve(r), s.unsubscribe(), this._elementObservables.delete(r); }; }).pipe(a(e => e.some(s => s.target === r)), u({ bufferSize: 1, refCount: !0 }), v(this._destroyed))), this._elementObservables.get(r); }
    destroy() { this._destroyed.next(), this._destroyed.complete(), this._resizeSubject.complete(), this._elementObservables.clear(); }
}, y = (() => { class t {
    _cleanupErrorListener;
    _observers = new Map;
    _ngZone = d(l);
    constructor() { typeof ResizeObserver < "u"; }
    ngOnDestroy() { for (let [, e] of this._observers)
        e.destroy(); this._observers.clear(), this._cleanupErrorListener?.(); }
    observe(e, s) { let o = s?.box || "content-box"; return this._observers.has(o) || this._observers.set(o, new i(o)), this._observers.get(o).observe(e); }
    static \u0275fac = function (s) { return new (s || t); };
    static \u0275prov = c.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
export { y as SharedResizeObserver };
