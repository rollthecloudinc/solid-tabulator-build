import { B as S, E as A, F as Q, G as j, I as F, J as z, a as f, b as y, d as W, f as u, h as C, n as x, o as d, q as E, r as _, s as P, t as R, u as V, v as c, y as w } from "@nf-internal/chunk-STIBVO4O";
import { __extends as ir } from "tslib";
import { __read as er, __spreadArray as tr } from "tslib";
var rr = 1, I, O = {};
function U(e) { return e in O ? (delete O[e], !0) : !1; }
var q = { setImmediate: function (e) { var t = rr++; return O[t] = !0, I || (I = Promise.resolve()), I.then(function () { return U(t) && e(); }), t; }, clearImmediate: function (e) { U(e); } };
var or = q.setImmediate, nr = q.clearImmediate, v = { setImmediate: function () { for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t]; var r = v.delegate; return (r?.setImmediate || or).apply(void 0, tr([], er(e))); }, clearImmediate: function (e) { var t = v.delegate; return (t?.clearImmediate || nr)(e); }, delegate: void 0 };
var H = (function (e) { ir(t, e); function t(r, n) { var o = e.call(this, r, n) || this; return o.scheduler = r, o.work = n, o; } return t.prototype.requestAsyncId = function (r, n, o) { return o === void 0 && (o = 0), o !== null && o > 0 ? e.prototype.requestAsyncId.call(this, r, n, o) : (r.actions.push(this), r._scheduled || (r._scheduled = v.setImmediate(r.flush.bind(r, void 0)))); }, t.prototype.recycleAsyncId = function (r, n, o) { var i; if (o === void 0 && (o = 0), o != null ? o > 0 : this.delay > 0)
    return e.prototype.recycleAsyncId.call(this, r, n, o); var m = r.actions; n != null && ((i = m[m.length - 1]) === null || i === void 0 ? void 0 : i.id) !== n && (v.clearImmediate(n), r._scheduled = void 0); }, t; })(x);
import { __extends as mr } from "tslib";
var N = (function (e) { mr(t, e); function t() { return e !== null && e.apply(this, arguments) || this; } return t.prototype.flush = function (r) { this._active = !0; var n = this._scheduled; this._scheduled = void 0; var o = this.actions, i; r = r || o.shift(); do
    if (i = r.execute(r.state, r.delay))
        break;
while ((r = o[0]) && r.id === n && o.shift()); if (this._active = !1, i) {
    for (; (r = o[0]) && r.id === n && o.shift();)
        r.unsubscribe();
    throw i;
} }, t; })(d);
var fr = new N(H);
import { __extends as pr } from "tslib";
var B = (function (e) { pr(t, e); function t(r, n) { var o = e.call(this, r, n) || this; return o.scheduler = r, o.work = n, o; } return t.prototype.schedule = function (r, n) { return n === void 0 && (n = 0), n > 0 ? e.prototype.schedule.call(this, r, n) : (this.delay = n, this.state = r, this.scheduler.flush(this), this); }, t.prototype.execute = function (r, n) { return n > 0 || this.closed ? e.prototype.execute.call(this, r, n) : this._execute(r, n); }, t.prototype.requestAsyncId = function (r, n, o) { return o === void 0 && (o = 0), o != null && o > 0 || o == null && this.delay > 0 ? e.prototype.requestAsyncId.call(this, r, n, o) : (r.flush(this), 0); }, t; })(x);
import { __extends as ar } from "tslib";
var J = (function (e) { ar(t, e); function t() { return e !== null && e.apply(this, arguments) || this; } return t; })(d);
var ur = new J(B);
import { __extends as sr } from "tslib";
import { __read as K, __spreadArray as Y } from "tslib";
var h = { schedule: function (e) { var t = requestAnimationFrame, r = cancelAnimationFrame, n = h.delegate; n && (t = n.requestAnimationFrame, r = n.cancelAnimationFrame); var o = t(function (i) { r = void 0, e(i); }); return new y(function () { return r?.(o); }); }, requestAnimationFrame: function () { for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t]; var r = h.delegate; return (r?.requestAnimationFrame || requestAnimationFrame).apply(void 0, Y([], K(e))); }, cancelAnimationFrame: function () { for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t]; var r = h.delegate; return (r?.cancelAnimationFrame || cancelAnimationFrame).apply(void 0, Y([], K(e))); }, delegate: void 0 };
var D = (function (e) { sr(t, e); function t(r, n) { var o = e.call(this, r, n) || this; return o.scheduler = r, o.work = n, o; } return t.prototype.requestAsyncId = function (r, n, o) { return o === void 0 && (o = 0), o !== null && o > 0 ? e.prototype.requestAsyncId.call(this, r, n, o) : (r.actions.push(this), r._scheduled || (r._scheduled = h.requestAnimationFrame(function () { return r.flush(void 0); }))); }, t.prototype.recycleAsyncId = function (r, n, o) { var i; if (o === void 0 && (o = 0), o != null ? o > 0 : this.delay > 0)
    return e.prototype.recycleAsyncId.call(this, r, n, o); var m = r.actions; n != null && ((i = m[m.length - 1]) === null || i === void 0 ? void 0 : i.id) !== n && (h.cancelAnimationFrame(n), r._scheduled = void 0); }, t; })(x);
import { __extends as cr } from "tslib";
var G = (function (e) { cr(t, e); function t() { return e !== null && e.apply(this, arguments) || this; } return t.prototype.flush = function (r) { this._active = !0; var n = this._scheduled; this._scheduled = void 0; var o = this.actions, i; r = r || o.shift(); do
    if (i = r.execute(r.state, r.delay))
        break;
while ((r = o[0]) && r.id === n && o.shift()); if (this._active = !1, i) {
    for (; (r = o[0]) && r.id === n && o.shift();)
        r.unsubscribe();
    throw i;
} }, t; })(d);
var lr = new G(D);
function xr(e) { return !!e && (e instanceof u || f(e.lift) && f(e.subscribe)); }
function dr(e, t) { var r = typeof t == "object"; return new Promise(function (n, o) { var i = new W({ next: function (m) { n(m), i.unsubscribe(); }, error: o, complete: function () { r ? n(t.defaultValue) : o(new S); } }); e.subscribe(i); }); }
function T(e) { return new u(function (t) { c(e()).subscribe(t); }); }
function hr() { for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t]; var r = _(e), n = Q(e), o = n.args, i = n.keys, m = new u(function (p) { var a = o.length; if (!a) {
    p.complete();
    return;
} for (var s = new Array(a), l = a, L = a, Z = function (M) { var g = !1; c(o[M]).subscribe(C(p, function ($) { g || (g = !0, L--), s[M] = $; }, function () { return l--; }, void 0, function () { (!l || !g) && (L || p.next(i ? j(i, s) : s), p.complete()); })); }, b = 0; b < a; b++)
    Z(b); }); return r ? m.pipe(A(r)) : m; }
import { __read as vr } from "tslib";
var Ar = ["addListener", "removeListener"], br = ["addEventListener", "removeEventListener"], gr = ["on", "off"];
function k(e, t, r, n) { if (f(r) && (n = r, r = void 0), n)
    return k(e, t, r).pipe(A(n)); var o = vr(wr(e) ? br.map(function (p) { return function (a) { return e[p](t, a, r); }; }) : yr(e) ? Ar.map(X(e, t)) : Er(e) ? gr.map(X(e, t)) : [], 2), i = o[0], m = o[1]; if (!i && V(e))
    return F(function (p) { return k(p, t, r); })(c(e)); if (!i)
    throw new TypeError("Invalid event target"); return new u(function (p) { var a = function () { for (var s = [], l = 0; l < arguments.length; l++)
    s[l] = arguments[l]; return p.next(1 < s.length ? s : s[0]); }; return i(a), function () { return m(a); }; }); }
function X(e, t) { return function (r) { return function (n) { return e[r](t, n); }; }; }
function yr(e) { return f(e.addListener) && f(e.removeListener); }
function Er(e) { return f(e.on) && f(e.off); }
function wr(e) { return f(e.addEventListener) && f(e.removeEventListener); }
function Sr(e, t, r) { return T(function () { return e() ? t : r; }); }
function Fr() { for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t]; var r = P(e), n = R(e, 1 / 0), o = e; return o.length ? o.length === 1 ? c(o[0]) : z(n)(w(o, r)) : E; }
export { fr as a, ur as b, lr as c, xr as d, dr as e, T as f, hr as g, k as h, Sr as i, Fr as j };
