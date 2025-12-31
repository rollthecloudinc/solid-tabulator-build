import { a as _ } from "@nf-internal/chunk-DQM2BKPX";
import { a as u } from "@nf-internal/chunk-FSAIB72R";
import { H as f, L as b, f as h, k as l } from "@nf-internal/chunk-STIBVO4O";
import * as p from "@angular/core";
import { inject as m, CSP_NONCE as g, NgZone as j } from "@angular/core";
import { take as S, skip as k, debounceTime as I, map as v, startWith as L, takeUntil as O } from "rxjs/operators";
var y = new Set, a, Q = (() => { class e {
    _platform = m(_);
    _nonce = m(g, { optional: !0 });
    _matchMedia;
    constructor() { this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : E; }
    matchMedia(t) { return (this._platform.WEBKIT || this._platform.BLINK) && D(t, this._nonce), this._matchMedia(t); }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = p.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function D(e, i) { if (!y.has(e))
    try {
        a || (a = document.createElement("style"), i && a.setAttribute("nonce", i), a.setAttribute("type", "text/css"), document.head.appendChild(a)), a.sheet && (a.sheet.insertRule(`@media ${e} {body{ }}`, 0), y.add(e));
    }
    catch (t) {
        console.error(t);
    } }
function E(e) { return { matches: e === "all" || e === "", media: e, addListener: () => { }, removeListener: () => { } }; }
var F = (() => { class e {
    _mediaMatcher = m(Q);
    _zone = m(j);
    _queries = new Map;
    _destroySubject = new l;
    constructor() { }
    ngOnDestroy() { this._destroySubject.next(), this._destroySubject.complete(); }
    isMatched(t) { return M(u(t)).some(c => this._registerQuery(c).mql.matches); }
    observe(t) { let c = M(u(t)).map(s => this._registerQuery(s).observable), o = f(c); return o = b(o.pipe(S(1)), o.pipe(k(1), I(0))), o.pipe(v(s => { let n = { matches: !1, breakpoints: {} }; return s.forEach(({ matches: d, query: w }) => { n.matches = n.matches || d, n.breakpoints[w] = d; }), n; })); }
    _registerQuery(t) { if (this._queries.has(t))
        return this._queries.get(t); let r = this._mediaMatcher.matchMedia(t), o = { observable: new h(s => { let n = d => this._zone.run(() => s.next(d)); return r.addListener(n), () => { r.removeListener(n); }; }).pipe(L(r), v(({ matches: s }) => ({ query: t, matches: s })), O(this._destroySubject)), mql: r }; return this._queries.set(t, o), o; }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = p.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function M(e) { return e.map(i => i.split(",")).reduce((i, t) => i.concat(t)).map(i => i.trim()); }
export { Q as a, F as b };
