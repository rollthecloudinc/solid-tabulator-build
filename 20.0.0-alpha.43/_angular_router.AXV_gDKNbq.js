import { d as dr, f as Qe } from "@nf-internal/chunk-VZR6KEPQ";
import { A as be, B as fr, H as We, L as pr, b as cr, e as lr, f as hr, j as Ot, k as H, l as N, q as V, y as w, z as h } from "@nf-internal/chunk-STIBVO4O";
import { a as d, b as P, h as ur } from "@nf-internal/chunk-FJYW2LMB";
import { DOCUMENT as Dn, Location as Qt } from "@angular/common";
import * as m from "@angular/core";
import { \u0275isPromise as Nn, \u0275RuntimeError as A, \u0275isNgModule as cs, isStandalone as ls, createEnvironmentInjector as Un, InjectionToken as oe, EventEmitter as Ke, input as Pn, inject as p, ViewContainerRef as _n, ChangeDetectorRef as xn, reflectComponentType as Ln, \u0275isInjectable as jn, runInInjectionContext as L, Compiler as kn, NgModuleFactory as $n, afterNextRender as zn, signal as Fn, EnvironmentInjector as Ir, DestroyRef as qn, untracked as Te, \u0275Console as Bn, \u0275PendingTasksInternal as Hn, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as Vn, \u0275formatRuntimeError as Gn } from "@angular/core";
import { map as R, switchMap as O, take as De, startWith as Wn, filter as he, mergeMap as x, first as se, concatMap as tt, tap as C, catchError as Ee, scan as Qn, defaultIfEmpty as Ar, last as Kn, takeLast as Tr, finalize as Pt, refCount as gr, takeUntil as vr } from "rxjs/operators";
import * as Er from "@angular/platform-browser";
var f = "primary", $e = Symbol("RouteTitle"), _t = class {
    params;
    constructor(n) { this.params = n || {}; }
    has(n) { return Object.prototype.hasOwnProperty.call(this.params, n); }
    get(n) { if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e[0] : e;
    } return null; }
    getAll(n) { if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e : [e];
    } return []; }
    get keys() { return Object.keys(this.params); }
};
function ie(t) { return new _t(t); }
function Or(t, n, e) { let r = e.path.split("/"); if (r.length > t.length || e.pathMatch === "full" && (n.hasChildren() || r.length < t.length))
    return null; let i = {}; for (let o = 0; o < r.length; o++) {
    let s = r[o], a = t[o];
    if (s[0] === ":")
        i[s.substring(1)] = a;
    else if (s !== a.path)
        return null;
} return { consumed: t.slice(0, r.length), posParams: i }; }
function Yn(t, n) { if (t.length !== n.length)
    return !1; for (let e = 0; e < t.length; ++e)
    if (!k(t[e], n[e]))
        return !1; return !0; }
function k(t, n) { let e = t ? xt(t) : void 0, r = n ? xt(n) : void 0; if (!e || !r || e.length != r.length)
    return !1; let i; for (let o = 0; o < e.length; o++)
    if (i = e[o], !Mr(t[i], n[i]))
        return !1; return !0; }
function xt(t) { return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)]; }
function Mr(t, n) { if (Array.isArray(t) && Array.isArray(n)) {
    if (t.length !== n.length)
        return !1;
    let e = [...t].sort(), r = [...n].sort();
    return e.every((i, o) => r[o] === i);
}
else
    return t === n; }
function Dr(t) { return t.length > 0 ? t[t.length - 1] : null; }
function G(t) { return dr(t) ? t : Nn(t) ? w(Promise.resolve(t)) : h(t); }
var Zn = { exact: Ur, subset: Pr }, Nr = { exact: Jn, subset: Xn, ignored: () => !0 };
function mr(t, n, e) { return Zn[e.paths](t.root, n.root, e.matrixParams) && Nr[e.queryParams](t.queryParams, n.queryParams) && !(e.fragment === "exact" && t.fragment !== n.fragment); }
function Jn(t, n) { return k(t, n); }
function Ur(t, n, e) { if (!re(t.segments, n.segments) || !Je(t.segments, n.segments, e) || t.numberOfChildren !== n.numberOfChildren)
    return !1; for (let r in n.children)
    if (!t.children[r] || !Ur(t.children[r], n.children[r], e))
        return !1; return !0; }
function Xn(t, n) { return Object.keys(n).length <= Object.keys(t).length && Object.keys(n).every(e => Mr(t[e], n[e])); }
function Pr(t, n, e) { return _r(t, n, n.segments, e); }
function _r(t, n, e, r) { if (t.segments.length > e.length) {
    let i = t.segments.slice(0, e.length);
    return !(!re(i, e) || n.hasChildren() || !Je(i, e, r));
}
else if (t.segments.length === e.length) {
    if (!re(t.segments, e) || !Je(t.segments, e, r))
        return !1;
    for (let i in n.children)
        if (!t.children[i] || !Pr(t.children[i], n.children[i], r))
            return !1;
    return !0;
}
else {
    let i = e.slice(0, t.segments.length), o = e.slice(t.segments.length);
    return !re(t.segments, i) || !Je(t.segments, i, r) || !t.children[f] ? !1 : _r(t.children[f], n, o, r);
} }
function Je(t, n, e) { return n.every((r, i) => Nr[e](t[i].parameters, r.parameters)); }
var z = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(n = new v([], {}), e = {}, r = null) { this.root = n, this.queryParams = e, this.fragment = r; }
    get queryParamMap() { return this._queryParamMap ??= ie(this.queryParams), this._queryParamMap; }
    toString() { return ri.serialize(this); }
}, v = class {
    segments;
    children;
    parent = null;
    constructor(n, e) { this.segments = n, this.children = e, Object.values(e).forEach(r => r.parent = this); }
    hasChildren() { return this.numberOfChildren > 0; }
    get numberOfChildren() { return Object.keys(this.children).length; }
    toString() { return Xe(this); }
}, K = class {
    path;
    parameters;
    _parameterMap;
    constructor(n, e) { this.path = n, this.parameters = e; }
    get parameterMap() { return this._parameterMap ??= ie(this.parameters), this._parameterMap; }
    toString() { return Lr(this); }
};
function ei(t, n) { return re(t, n) && t.every((e, r) => k(e.parameters, n[r].parameters)); }
function re(t, n) { return t.length !== n.length ? !1 : t.every((e, r) => e.path === n[r].path); }
function ti(t, n) { let e = []; return Object.entries(t.children).forEach(([r, i]) => { r === f && (e = e.concat(n(i, r))); }), Object.entries(t.children).forEach(([r, i]) => { r !== f && (e = e.concat(n(i, r))); }), e; }
var X = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: () => new Y, providedIn: "root" });
} return t; })(), Y = class {
    parse(n) { let e = new jt(n); return new z(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment()); }
    serialize(n) { let e = `/${Ie(n.root, !0)}`, r = oi(n.queryParams), i = typeof n.fragment == "string" ? `#${ni(n.fragment)}` : ""; return `${e}${r}${i}`; }
}, ri = new Y;
function Xe(t) { return t.segments.map(n => Lr(n)).join("/"); }
function Ie(t, n) { if (!t.hasChildren())
    return Xe(t); if (n) {
    let e = t.children[f] ? Ie(t.children[f], !1) : "", r = [];
    return Object.entries(t.children).forEach(([i, o]) => { i !== f && r.push(`${i}:${Ie(o, !1)}`); }), r.length > 0 ? `${e}(${r.join("//")})` : e;
}
else {
    let e = ti(t, (r, i) => i === f ? [Ie(t.children[f], !1)] : [`${i}:${Ie(r, !1)}`]);
    return Object.keys(t.children).length === 1 && t.children[f] != null ? `${Xe(t)}/${e[0]}` : `${Xe(t)}/(${e.join("//")})`;
} }
function xr(t) { return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ","); }
function Ye(t) { return xr(t).replace(/%3B/gi, ";"); }
function ni(t) { return encodeURI(t); }
function Lt(t) { return xr(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&"); }
function et(t) { return decodeURIComponent(t); }
function Rr(t) { return et(t.replace(/\+/g, "%20")); }
function Lr(t) { return `${Lt(t.path)}${ii(t.parameters)}`; }
function ii(t) { return Object.entries(t).map(([n, e]) => `;${Lt(n)}=${Lt(e)}`).join(""); }
function oi(t) { let n = Object.entries(t).map(([e, r]) => Array.isArray(r) ? r.map(i => `${Ye(e)}=${Ye(i)}`).join("&") : `${Ye(e)}=${Ye(r)}`).filter(e => e); return n.length ? `?${n.join("&")}` : ""; }
var si = /^[^\/()?;#]+/;
function Mt(t) { let n = t.match(si); return n ? n[0] : ""; }
var ai = /^[^\/()?;=#]+/;
function ui(t) { let n = t.match(ai); return n ? n[0] : ""; }
var ci = /^[^=?&#]+/;
function li(t) { let n = t.match(ci); return n ? n[0] : ""; }
var hi = /^[^&#]+/;
function di(t) { let n = t.match(hi); return n ? n[0] : ""; }
var jt = class {
    url;
    remaining;
    constructor(n) { this.url = n, this.remaining = n; }
    parseRootSegment() { return this.consumeOptional("/"), this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new v([], {}) : new v([], this.parseChildren()); }
    parseQueryParams() { let n = {}; if (this.consumeOptional("?"))
        do
            this.parseQueryParam(n);
        while (this.consumeOptional("&")); return n; }
    parseFragment() { return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null; }
    parseChildren() { if (this.remaining === "")
        return {}; this.consumeOptional("/"); let n = []; for (this.peekStartsWith("(") || n.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");)
        this.capture("/"), n.push(this.parseSegment()); let e = {}; this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0)); let r = {}; return this.peekStartsWith("(") && (r = this.parseParens(!1)), (n.length > 0 || Object.keys(e).length > 0) && (r[f] = new v(n, e)), r; }
    parseSegment() { let n = Mt(this.remaining); if (n === "" && this.peekStartsWith(";"))
        throw new A(4009, !1); return this.capture(n), new K(et(n), this.parseMatrixParams()); }
    parseMatrixParams() { let n = {}; for (; this.consumeOptional(";");)
        this.parseParam(n); return n; }
    parseParam(n) { let e = ui(this.remaining); if (!e)
        return; this.capture(e); let r = ""; if (this.consumeOptional("=")) {
        let i = Mt(this.remaining);
        i && (r = i, this.capture(r));
    } n[et(e)] = et(r); }
    parseQueryParam(n) { let e = li(this.remaining); if (!e)
        return; this.capture(e); let r = ""; if (this.consumeOptional("=")) {
        let s = di(this.remaining);
        s && (r = s, this.capture(r));
    } let i = Rr(e), o = Rr(r); if (n.hasOwnProperty(i)) {
        let s = n[i];
        Array.isArray(s) || (s = [s], n[i] = s), s.push(o);
    }
    else
        n[i] = o; }
    parseParens(n) { let e = {}; for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
        let r = Mt(this.remaining), i = this.remaining[r.length];
        if (i !== "/" && i !== ")" && i !== ";")
            throw new A(4010, !1);
        let o;
        r.indexOf(":") > -1 ? (o = r.slice(0, r.indexOf(":")), this.capture(o), this.capture(":")) : n && (o = f);
        let s = this.parseChildren();
        e[o] = Object.keys(s).length === 1 && s[f] ? s[f] : new v([], s), this.consumeOptional("//");
    } return e; }
    peekStartsWith(n) { return this.remaining.startsWith(n); }
    consumeOptional(n) { return this.peekStartsWith(n) ? (this.remaining = this.remaining.substring(n.length), !0) : !1; }
    capture(n) { if (!this.consumeOptional(n))
        throw new A(4011, !1); }
};
function jr(t) { return t.segments.length > 0 ? new v([], { [f]: t }) : t; }
function kr(t) { let n = {}; for (let [r, i] of Object.entries(t.children)) {
    let o = kr(i);
    if (r === f && o.segments.length === 0 && o.hasChildren())
        for (let [s, a] of Object.entries(o.children))
            n[s] = a;
    else
        (o.segments.length > 0 || o.hasChildren()) && (n[r] = o);
} let e = new v(t.segments, n); return fi(e); }
function fi(t) { if (t.numberOfChildren === 1 && t.children[f]) {
    let n = t.children[f];
    return new v(t.segments.concat(n.segments), n.children);
} return t; }
function Z(t) { return t instanceof z; }
function $r(t, n, e = null, r = null) { let i = zr(t); return Fr(i, n, e, r); }
function zr(t) { let n; function e(o) { let s = {}; for (let u of o.children) {
    let c = e(u);
    s[u.outlet] = c;
} let a = new v(o.url, s); return o === t && (n = a), a; } let r = e(t.root), i = jr(r); return n ?? i; }
function Fr(t, n, e, r) { let i = t; for (; i.parent;)
    i = i.parent; if (n.length === 0)
    return Dt(i, i, i, e, r); let o = pi(n); if (o.toRoot())
    return Dt(i, i, new v([], {}), e, r); let s = gi(o, i, t), a = s.processChildren ? Oe(s.segmentGroup, s.index, o.commands) : Br(s.segmentGroup, s.index, o.commands); return Dt(i, s.segmentGroup, a, e, r); }
function rt(t) { return typeof t == "object" && t != null && !t.outlets && !t.segmentPath; }
function Ne(t) { return typeof t == "object" && t != null && t.outlets; }
function Dt(t, n, e, r, i) { let o = {}; r && Object.entries(r).forEach(([u, c]) => { o[u] = Array.isArray(c) ? c.map(g => `${g}`) : `${c}`; }); let s; t === n ? s = e : s = qr(t, n, e); let a = jr(kr(s)); return new z(a, o, i); }
function qr(t, n, e) { let r = {}; return Object.entries(t.children).forEach(([i, o]) => { o === n ? r[i] = e : r[i] = qr(o, n, e); }), new v(t.segments, r); }
var nt = class {
    isAbsolute;
    numberOfDoubleDots;
    commands;
    constructor(n, e, r) { if (this.isAbsolute = n, this.numberOfDoubleDots = e, this.commands = r, n && r.length > 0 && rt(r[0]))
        throw new A(4003, !1); let i = r.find(Ne); if (i && i !== Dr(r))
        throw new A(4004, !1); }
    toRoot() { return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"; }
};
function pi(t) { if (typeof t[0] == "string" && t.length === 1 && t[0] === "/")
    return new nt(!0, 0, t); let n = 0, e = !1, r = t.reduce((i, o, s) => { if (typeof o == "object" && o != null) {
    if (o.outlets) {
        let a = {};
        return Object.entries(o.outlets).forEach(([u, c]) => { a[u] = typeof c == "string" ? c.split("/") : c; }), [...i, { outlets: a }];
    }
    if (o.segmentPath)
        return [...i, o.segmentPath];
} return typeof o != "string" ? [...i, o] : s === 0 ? (o.split("/").forEach((a, u) => { u == 0 && a === "." || (u == 0 && a === "" ? e = !0 : a === ".." ? n++ : a != "" && i.push(a)); }), i) : [...i, o]; }, []); return new nt(e, n, r); }
var de = class {
    segmentGroup;
    processChildren;
    index;
    constructor(n, e, r) { this.segmentGroup = n, this.processChildren = e, this.index = r; }
};
function gi(t, n, e) { if (t.isAbsolute)
    return new de(n, !0, 0); if (!e)
    return new de(n, !1, NaN); if (e.parent === null)
    return new de(e, !0, 0); let r = rt(t.commands[0]) ? 0 : 1, i = e.segments.length - 1 + r; return vi(e, i, t.numberOfDoubleDots); }
function vi(t, n, e) { let r = t, i = n, o = e; for (; o > i;) {
    if (o -= i, r = r.parent, !r)
        throw new A(4005, !1);
    i = r.segments.length;
} return new de(r, !1, i - o); }
function mi(t) { return Ne(t[0]) ? t[0].outlets : { [f]: t }; }
function Br(t, n, e) { if (t ??= new v([], {}), t.segments.length === 0 && t.hasChildren())
    return Oe(t, n, e); let r = Ri(t, n, e), i = e.slice(r.commandIndex); if (r.match && r.pathIndex < t.segments.length) {
    let o = new v(t.segments.slice(0, r.pathIndex), {});
    return o.children[f] = new v(t.segments.slice(r.pathIndex), t.children), Oe(o, 0, i);
}
else
    return r.match && i.length === 0 ? new v(t.segments, {}) : r.match && !t.hasChildren() ? kt(t, n, e) : r.match ? Oe(t, 0, i) : kt(t, n, e); }
function Oe(t, n, e) { if (e.length === 0)
    return new v(t.segments, {}); {
    let r = mi(e), i = {};
    if (Object.keys(r).some(o => o !== f) && t.children[f] && t.numberOfChildren === 1 && t.children[f].segments.length === 0) {
        let o = Oe(t.children[f], n, e);
        return new v(t.segments, o.children);
    }
    return Object.entries(r).forEach(([o, s]) => { typeof s == "string" && (s = [s]), s !== null && (i[o] = Br(t.children[o], n, s)); }), Object.entries(t.children).forEach(([o, s]) => { r[o] === void 0 && (i[o] = s); }), new v(t.segments, i);
} }
function Ri(t, n, e) { let r = 0, i = n, o = { match: !1, pathIndex: 0, commandIndex: 0 }; for (; i < t.segments.length;) {
    if (r >= e.length)
        return o;
    let s = t.segments[i], a = e[r];
    if (Ne(a))
        break;
    let u = `${a}`, c = r < e.length - 1 ? e[r + 1] : null;
    if (i > 0 && u === void 0)
        break;
    if (u && c && typeof c == "object" && c.outlets === void 0) {
        if (!Sr(u, c, s))
            return o;
        r += 2;
    }
    else {
        if (!Sr(u, {}, s))
            return o;
        r++;
    }
    i++;
} return { match: !0, pathIndex: i, commandIndex: r }; }
function kt(t, n, e) { let r = t.segments.slice(0, n), i = 0; for (; i < e.length;) {
    let o = e[i];
    if (Ne(o)) {
        let u = yi(o.outlets);
        return new v(r, u);
    }
    if (i === 0 && rt(e[0])) {
        let u = t.segments[n];
        r.push(new K(u.path, yr(e[0]))), i++;
        continue;
    }
    let s = Ne(o) ? o.outlets[f] : `${o}`, a = i < e.length - 1 ? e[i + 1] : null;
    s && a && rt(a) ? (r.push(new K(s, yr(a))), i += 2) : (r.push(new K(s, {})), i++);
} return new v(r, {}); }
function yi(t) { let n = {}; return Object.entries(t).forEach(([e, r]) => { typeof r == "string" && (r = [r]), r !== null && (n[e] = kt(new v([], {}), 0, r)); }), n; }
function yr(t) { let n = {}; return Object.entries(t).forEach(([e, r]) => n[e] = `${r}`), n; }
function Sr(t, n, e) { return t == e.path && k(n, e.parameters); }
var fe = "imperative", y = (function (t) { return t[t.NavigationStart = 0] = "NavigationStart", t[t.NavigationEnd = 1] = "NavigationEnd", t[t.NavigationCancel = 2] = "NavigationCancel", t[t.NavigationError = 3] = "NavigationError", t[t.RoutesRecognized = 4] = "RoutesRecognized", t[t.ResolveStart = 5] = "ResolveStart", t[t.ResolveEnd = 6] = "ResolveEnd", t[t.GuardsCheckStart = 7] = "GuardsCheckStart", t[t.GuardsCheckEnd = 8] = "GuardsCheckEnd", t[t.RouteConfigLoadStart = 9] = "RouteConfigLoadStart", t[t.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd", t[t.ChildActivationStart = 11] = "ChildActivationStart", t[t.ChildActivationEnd = 12] = "ChildActivationEnd", t[t.ActivationStart = 13] = "ActivationStart", t[t.ActivationEnd = 14] = "ActivationEnd", t[t.Scroll = 15] = "Scroll", t[t.NavigationSkipped = 16] = "NavigationSkipped", t; })(y || {}), M = class {
    id;
    url;
    constructor(n, e) { this.id = n, this.url = e; }
}, J = class extends M {
    type = y.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(n, e, r = "imperative", i = null) { super(n, e), this.navigationTrigger = r, this.restoredState = i; }
    toString() { return `NavigationStart(id: ${this.id}, url: '${this.url}')`; }
}, D = class extends M {
    urlAfterRedirects;
    type = y.NavigationEnd;
    constructor(n, e, r) { super(n, e), this.urlAfterRedirects = r; }
    toString() { return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`; }
}, b = (function (t) { return t[t.Redirect = 0] = "Redirect", t[t.SupersededByNewNavigation = 1] = "SupersededByNewNavigation", t[t.NoDataFromResolver = 2] = "NoDataFromResolver", t[t.GuardRejected = 3] = "GuardRejected", t[t.Aborted = 4] = "Aborted", t; })(b || {}), ge = (function (t) { return t[t.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation", t[t.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy", t; })(ge || {}), $ = class extends M {
    reason;
    code;
    type = y.NavigationCancel;
    constructor(n, e, r, i) { super(n, e), this.reason = r, this.code = i; }
    toString() { return `NavigationCancel(id: ${this.id}, url: '${this.url}')`; }
}, F = class extends M {
    reason;
    code;
    type = y.NavigationSkipped;
    constructor(n, e, r, i) { super(n, e), this.reason = r, this.code = i; }
}, ve = class extends M {
    error;
    target;
    type = y.NavigationError;
    constructor(n, e, r, i) { super(n, e), this.error = r, this.target = i; }
    toString() { return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`; }
}, Ue = class extends M {
    urlAfterRedirects;
    state;
    type = y.RoutesRecognized;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, it = class extends M {
    urlAfterRedirects;
    state;
    type = y.GuardsCheckStart;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, ot = class extends M {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = y.GuardsCheckEnd;
    constructor(n, e, r, i, o) { super(n, e), this.urlAfterRedirects = r, this.state = i, this.shouldActivate = o; }
    toString() { return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`; }
}, st = class extends M {
    urlAfterRedirects;
    state;
    type = y.ResolveStart;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, at = class extends M {
    urlAfterRedirects;
    state;
    type = y.ResolveEnd;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, ut = class {
    route;
    type = y.RouteConfigLoadStart;
    constructor(n) { this.route = n; }
    toString() { return `RouteConfigLoadStart(path: ${this.route.path})`; }
}, ct = class {
    route;
    type = y.RouteConfigLoadEnd;
    constructor(n) { this.route = n; }
    toString() { return `RouteConfigLoadEnd(path: ${this.route.path})`; }
}, lt = class {
    snapshot;
    type = y.ChildActivationStart;
    constructor(n) { this.snapshot = n; }
    toString() { return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, ht = class {
    snapshot;
    type = y.ChildActivationEnd;
    constructor(n) { this.snapshot = n; }
    toString() { return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, dt = class {
    snapshot;
    type = y.ActivationStart;
    constructor(n) { this.snapshot = n; }
    toString() { return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, ft = class {
    snapshot;
    type = y.ActivationEnd;
    constructor(n) { this.snapshot = n; }
    toString() { return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, me = class {
    routerEvent;
    position;
    anchor;
    type = y.Scroll;
    constructor(n, e, r) { this.routerEvent = n, this.position = e, this.anchor = r; }
    toString() { let n = this.position ? `${this.position[0]}, ${this.position[1]}` : null; return `Scroll(anchor: '${this.anchor}', position: '${n}')`; }
}, Pe = class {
}, Re = class {
    url;
    navigationBehaviorOptions;
    constructor(n, e) { this.url = n, this.navigationBehaviorOptions = e; }
};
function Si(t) { return !(t instanceof Pe) && !(t instanceof Re); }
function Ci(t, n) { return t.providers && !t._injector && (t._injector = Un(t.providers, n, `Route: ${t.path}`)), t._injector ?? n; }
function _(t) { return t.outlet || f; }
function wi(t, n) { let e = t.filter(r => _(r) === n); return e.push(...t.filter(r => _(r) !== n)), e; }
function Ce(t) { if (!t)
    return null; if (t.routeConfig?._injector)
    return t.routeConfig._injector; for (let n = t.parent; n; n = n.parent) {
    let e = n.routeConfig;
    if (e?._loadedInjector)
        return e._loadedInjector;
    if (e?._injector)
        return e._injector;
} return null; }
var pt = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() { return Ce(this.route?.snapshot) ?? this.rootInjector; }
    constructor(n) { this.rootInjector = n, this.children = new ae(this.rootInjector); }
}, ae = (() => { class t {
    rootInjector;
    contexts = new Map;
    constructor(e) { this.rootInjector = e; }
    onChildOutletCreated(e, r) { let i = this.getOrCreateContext(e); i.outlet = r, this.contexts.set(e, i); }
    onChildOutletDestroyed(e) { let r = this.getContext(e); r && (r.outlet = null, r.attachRef = null); }
    onOutletDeactivated() { let e = this.contexts; return this.contexts = new Map, e; }
    onOutletReAttached(e) { this.contexts = e; }
    getOrCreateContext(e) { let r = this.getContext(e); return r || (r = new pt(this.rootInjector), this.contexts.set(e, r)), r; }
    getContext(e) { return this.contexts.get(e) || null; }
    static \u0275fac = function (r) { return new (r || t)(m.\u0275\u0275inject(m.EnvironmentInjector)); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), gt = class {
    _root;
    constructor(n) { this._root = n; }
    get root() { return this._root.value; }
    parent(n) { let e = this.pathFromRoot(n); return e.length > 1 ? e[e.length - 2] : null; }
    children(n) { let e = $t(n, this._root); return e ? e.children.map(r => r.value) : []; }
    firstChild(n) { let e = $t(n, this._root); return e && e.children.length > 0 ? e.children[0].value : null; }
    siblings(n) { let e = zt(n, this._root); return e.length < 2 ? [] : e[e.length - 2].children.map(i => i.value).filter(i => i !== n); }
    pathFromRoot(n) { return zt(n, this._root).map(e => e.value); }
};
function $t(t, n) { if (t === n.value)
    return n; for (let e of n.children) {
    let r = $t(t, e);
    if (r)
        return r;
} return null; }
function zt(t, n) { if (t === n.value)
    return [n]; for (let e of n.children) {
    let r = zt(t, e);
    if (r.length)
        return r.unshift(n), r;
} return []; }
var E = class {
    value;
    children;
    constructor(n, e) { this.value = n, this.children = e; }
    toString() { return `TreeNode(${this.value})`; }
};
function le(t) { let n = {}; return t && t.children.forEach(e => n[e.value.outlet] = e), n; }
var _e = class extends gt {
    snapshot;
    constructor(n, e) { super(n), this.snapshot = e, Kt(this, n); }
    toString() { return this.snapshot.toString(); }
};
function Hr(t) { let n = bi(t), e = new N([new K("", {})]), r = new N({}), i = new N({}), o = new N({}), s = new N(""), a = new q(e, r, o, s, i, f, t, n.root); return a.snapshot = n.root, new _e(new E(a, []), n); }
function bi(t) { let n = {}, e = {}, r = {}, o = new ne([], n, r, "", e, f, t, null, {}); return new xe("", new E(o, [])); }
var q = class {
    urlSubject;
    paramsSubject;
    queryParamsSubject;
    fragmentSubject;
    dataSubject;
    outlet;
    component;
    snapshot;
    _futureSnapshot;
    _routerState;
    _paramMap;
    _queryParamMap;
    title;
    url;
    params;
    queryParams;
    fragment;
    data;
    constructor(n, e, r, i, o, s, a, u) { this.urlSubject = n, this.paramsSubject = e, this.queryParamsSubject = r, this.fragmentSubject = i, this.dataSubject = o, this.outlet = s, this.component = a, this._futureSnapshot = u, this.title = this.dataSubject?.pipe(R(c => c[$e])) ?? h(void 0), this.url = n, this.params = e, this.queryParams = r, this.fragment = i, this.data = o; }
    get routeConfig() { return this._futureSnapshot.routeConfig; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= this.params.pipe(R(n => ie(n))), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= this.queryParams.pipe(R(n => ie(n))), this._queryParamMap; }
    toString() { return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`; }
};
function vt(t, n, e = "emptyOnly") { let r, { routeConfig: i } = t; return n !== null && (e === "always" || i?.path === "" || !n.component && !n.routeConfig?.loadComponent) ? r = { params: d(d({}, n.params), t.params), data: d(d({}, n.data), t.data), resolve: d(d(d(d({}, t.data), n.data), i?.data), t._resolvedData) } : r = { params: d({}, t.params), data: d({}, t.data), resolve: d(d({}, t.data), t._resolvedData ?? {}) }, i && Gr(i) && (r.resolve[$e] = i.title), r; }
var ne = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    get title() { return this.data?.[$e]; }
    constructor(n, e, r, i, o, s, a, u, c) { this.url = n, this.params = e, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = s, this.component = a, this.routeConfig = u, this._resolve = c; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= ie(this.params), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= ie(this.queryParams), this._queryParamMap; }
    toString() { let n = this.url.map(r => r.toString()).join("/"), e = this.routeConfig ? this.routeConfig.path : ""; return `Route(url:'${n}', path:'${e}')`; }
}, xe = class extends gt {
    url;
    constructor(n, e) { super(e), this.url = n, Kt(this, e); }
    toString() { return Vr(this._root); }
};
function Kt(t, n) { n.value._routerState = t, n.children.forEach(e => Kt(t, e)); }
function Vr(t) { let n = t.children.length > 0 ? ` { ${t.children.map(Vr).join(", ")} } ` : ""; return `${t.value}${n}`; }
function Nt(t) { if (t.snapshot) {
    let n = t.snapshot, e = t._futureSnapshot;
    t.snapshot = e, k(n.queryParams, e.queryParams) || t.queryParamsSubject.next(e.queryParams), n.fragment !== e.fragment && t.fragmentSubject.next(e.fragment), k(n.params, e.params) || t.paramsSubject.next(e.params), Yn(n.url, e.url) || t.urlSubject.next(e.url), k(n.data, e.data) || t.dataSubject.next(e.data);
}
else
    t.snapshot = t._futureSnapshot, t.dataSubject.next(t._futureSnapshot.data); }
function Ft(t, n) { let e = k(t.params, n.params) && ei(t.url, n.url), r = !t.parent != !n.parent; return e && !r && (!t.parent || Ft(t.parent, n.parent)); }
function Gr(t) { return typeof t.title == "string" || t.title === null; }
var Wr = new oe(""), Yt = (() => { class t {
    activated = null;
    get activatedComponentRef() { return this.activated; }
    _activatedRoute = null;
    name = f;
    activateEvents = new Ke;
    deactivateEvents = new Ke;
    attachEvents = new Ke;
    detachEvents = new Ke;
    routerOutletData = Pn(void 0);
    parentContexts = p(ae);
    location = p(_n);
    changeDetector = p(xn);
    inputBinder = p(ze, { optional: !0 });
    supportsBindingToComponentInputs = !0;
    ngOnChanges(e) { if (e.name) {
        let { firstChange: r, previousValue: i } = e.name;
        if (r)
            return;
        this.isTrackedInParentContexts(i) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)), this.initializeOutletWithName();
    } }
    ngOnDestroy() { this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name), this.inputBinder?.unsubscribeFromRouteData(this); }
    isTrackedInParentContexts(e) { return this.parentContexts.getContext(e)?.outlet === this; }
    ngOnInit() { this.initializeOutletWithName(); }
    initializeOutletWithName() { if (this.parentContexts.onChildOutletCreated(this.name, this), this.activated)
        return; let e = this.parentContexts.getContext(this.name); e?.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.injector)); }
    get isActivated() { return !!this.activated; }
    get component() { if (!this.activated)
        throw new A(4012, !1); return this.activated.instance; }
    get activatedRoute() { if (!this.activated)
        throw new A(4012, !1); return this._activatedRoute; }
    get activatedRouteData() { return this._activatedRoute ? this._activatedRoute.snapshot.data : {}; }
    detach() { if (!this.activated)
        throw new A(4012, !1); this.location.detach(); let e = this.activated; return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(e.instance), e; }
    attach(e, r) { this.activated = e, this._activatedRoute = r, this.location.insert(e.hostView), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.attachEvents.emit(e.instance); }
    deactivate() { if (this.activated) {
        let e = this.component;
        this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e);
    } }
    activateWith(e, r) { if (this.isActivated)
        throw new A(4013, !1); this._activatedRoute = e; let i = this.location, s = e.snapshot.component, a = this.parentContexts.getOrCreateContext(this.name).children, u = new qt(e, a, i.injector, this.routerOutletData); this.activated = i.createComponent(s, { index: i.length, injector: u, environmentInjector: r }), this.changeDetector.markForCheck(), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.activateEvents.emit(this.activated.instance); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275dir = m.\u0275\u0275defineDirective({ type: t, selectors: [["router-outlet"]], inputs: { name: "name", routerOutletData: [1, "routerOutletData"] }, outputs: { activateEvents: "activate", deactivateEvents: "deactivate", attachEvents: "attach", detachEvents: "detach" }, exportAs: ["outlet"], features: [m.\u0275\u0275NgOnChangesFeature] });
} return t; })(), qt = class {
    route;
    childContexts;
    parent;
    outletData;
    constructor(n, e, r, i) { this.route = n, this.childContexts = e, this.parent = r, this.outletData = i; }
    get(n, e) { return n === q ? this.route : n === ae ? this.childContexts : n === Wr ? this.outletData : this.parent.get(n, e); }
}, ze = new oe(""), Zt = (() => { class t {
    outletDataSubscriptions = new Map;
    bindActivatedRouteToOutletComponent(e) { this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e); }
    unsubscribeFromRouteData(e) { this.outletDataSubscriptions.get(e)?.unsubscribe(), this.outletDataSubscriptions.delete(e); }
    subscribeToRouteData(e) { let { activatedRoute: r } = e, i = We([r.queryParams, r.params, r.data]).pipe(O(([o, s, a], u) => (a = d(d(d({}, o), s), a), u === 0 ? h(a) : Promise.resolve(a)))).subscribe(o => { if (!e.isActivated || !e.activatedComponentRef || e.activatedRoute !== r || r.component === null) {
        this.unsubscribeFromRouteData(e);
        return;
    } let s = Ln(r.component); if (!s) {
        this.unsubscribeFromRouteData(e);
        return;
    } for (let { templateName: a } of s.inputs)
        e.activatedComponentRef.setInput(a, o[a]); }); this.outletDataSubscriptions.set(e, i); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), Jt = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275cmp = m.\u0275\u0275defineComponent({ type: t, selectors: [["ng-component"]], exportAs: ["emptyRouterOutlet"], decls: 1, vars: 0, template: function (r, i) { r & 1 && m.\u0275\u0275element(0, "router-outlet"); }, dependencies: [Yt], encapsulation: 2 });
} return t; })();
function Xt(t) { let n = t.children && t.children.map(Xt), e = n ? P(d({}, t), { children: n }) : d({}, t); return !e.component && !e.loadComponent && (n || e.loadChildren) && e.outlet && e.outlet !== f && (e.component = Jt), e; }
function Ii(t, n, e) { let r = Le(t, n._root, e ? e._root : void 0); return new _e(r, n); }
function Le(t, n, e) { if (e && t.shouldReuseRoute(n.value, e.value.snapshot)) {
    let r = e.value;
    r._futureSnapshot = n.value;
    let i = Ai(t, n, e);
    return new E(r, i);
}
else {
    if (t.shouldAttach(n.value)) {
        let o = t.retrieve(n.value);
        if (o !== null) {
            let s = o.route;
            return s.value._futureSnapshot = n.value, s.children = n.children.map(a => Le(t, a)), s;
        }
    }
    let r = Ti(n.value), i = n.children.map(o => Le(t, o));
    return new E(r, i);
} }
function Ai(t, n, e) { return n.children.map(r => { for (let i of e.children)
    if (t.shouldReuseRoute(r.value, i.value.snapshot))
        return Le(t, r, i); return Le(t, r); }); }
function Ti(t) { return new q(new N(t.url), new N(t.params), new N(t.queryParams), new N(t.fragment), new N(t.data), t.outlet, t.component, t); }
var ye = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(n, e) { this.redirectTo = n, this.navigationBehaviorOptions = e; }
}, Qr = "ngNavigationCancelingError";
function mt(t, n) { let { redirectTo: e, navigationBehaviorOptions: r } = Z(n) ? { redirectTo: n, navigationBehaviorOptions: void 0 } : n, i = Kr(!1, b.Redirect); return i.url = e, i.navigationBehaviorOptions = r, i; }
function Kr(t, n) { let e = new Error(`NavigationCancelingError: ${t || ""}`); return e[Qr] = !0, e.cancellationCode = n, e; }
function Ei(t) { return Yr(t) && Z(t.url); }
function Yr(t) { return !!t && t[Qr]; }
var Oi = (t, n, e, r) => R(i => (new Bt(n, i.targetRouterState, i.currentRouterState, e, r).activate(t), i)), Bt = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(n, e, r, i, o) { this.routeReuseStrategy = n, this.futureState = e, this.currState = r, this.forwardEvent = i, this.inputBindingEnabled = o; }
    activate(n) { let e = this.futureState._root, r = this.currState ? this.currState._root : null; this.deactivateChildRoutes(e, r, n), Nt(this.futureState.root), this.activateChildRoutes(e, r, n); }
    deactivateChildRoutes(n, e, r) { let i = le(e); n.children.forEach(o => { let s = o.value.outlet; this.deactivateRoutes(o, i[s], r), delete i[s]; }), Object.values(i).forEach(o => { this.deactivateRouteAndItsChildren(o, r); }); }
    deactivateRoutes(n, e, r) { let i = n.value, o = e ? e.value : null; if (i === o)
        if (i.component) {
            let s = r.getContext(i.outlet);
            s && this.deactivateChildRoutes(n, e, s.children);
        }
        else
            this.deactivateChildRoutes(n, e, r);
    else
        o && this.deactivateRouteAndItsChildren(e, r); }
    deactivateRouteAndItsChildren(n, e) { n.value.component && this.routeReuseStrategy.shouldDetach(n.value.snapshot) ? this.detachAndStoreRouteSubtree(n, e) : this.deactivateRouteAndOutlet(n, e); }
    detachAndStoreRouteSubtree(n, e) { let r = e.getContext(n.value.outlet), i = r && n.value.component ? r.children : e, o = le(n); for (let s of Object.values(o))
        this.deactivateRouteAndItsChildren(s, i); if (r && r.outlet) {
        let s = r.outlet.detach(), a = r.children.onOutletDeactivated();
        this.routeReuseStrategy.store(n.value.snapshot, { componentRef: s, route: n, contexts: a });
    } }
    deactivateRouteAndOutlet(n, e) { let r = e.getContext(n.value.outlet), i = r && n.value.component ? r.children : e, o = le(n); for (let s of Object.values(o))
        this.deactivateRouteAndItsChildren(s, i); r && (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()), r.attachRef = null, r.route = null); }
    activateChildRoutes(n, e, r) { let i = le(e); n.children.forEach(o => { this.activateRoutes(o, i[o.value.outlet], r), this.forwardEvent(new ft(o.value.snapshot)); }), n.children.length && this.forwardEvent(new ht(n.value.snapshot)); }
    activateRoutes(n, e, r) { let i = n.value, o = e ? e.value : null; if (Nt(i), i === o)
        if (i.component) {
            let s = r.getOrCreateContext(i.outlet);
            this.activateChildRoutes(n, e, s.children);
        }
        else
            this.activateChildRoutes(n, e, r);
    else if (i.component) {
        let s = r.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
            let a = this.routeReuseStrategy.retrieve(i.snapshot);
            this.routeReuseStrategy.store(i.snapshot, null), s.children.onOutletReAttached(a.contexts), s.attachRef = a.componentRef, s.route = a.route.value, s.outlet && s.outlet.attach(a.componentRef, a.route.value), Nt(a.route.value), this.activateChildRoutes(n, null, s.children);
        }
        else
            s.attachRef = null, s.route = i, s.outlet && s.outlet.activateWith(i, s.injector), this.activateChildRoutes(n, null, s.children);
    }
    else
        this.activateChildRoutes(n, null, r); }
}, Rt = class {
    path;
    route;
    constructor(n) { this.path = n, this.route = this.path[this.path.length - 1]; }
}, pe = class {
    component;
    route;
    constructor(n, e) { this.component = n, this.route = e; }
};
function Mi(t, n, e) { let r = t._root, i = n ? n._root : null; return Ae(r, i, e, [r.value]); }
function Di(t) { let n = t.routeConfig ? t.routeConfig.canActivateChild : null; return !n || n.length === 0 ? null : { node: t, guards: n }; }
function we(t, n) { let e = Symbol(), r = n.get(t, e); return r === e ? typeof t == "function" && !jn(t) ? t : n.get(t) : r; }
function Ae(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = le(n); return t.children.forEach(s => { Ni(s, o[s.value.outlet], e, r.concat([s.value]), i), delete o[s.value.outlet]; }), Object.entries(o).forEach(([s, a]) => Me(a, e.getContext(s), i)), i; }
function Ni(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = t.value, s = n ? n.value : null, a = e ? e.getContext(t.value.outlet) : null; if (s && o.routeConfig === s.routeConfig) {
    let u = Ui(s, o, o.routeConfig.runGuardsAndResolvers);
    u ? i.canActivateChecks.push(new Rt(r)) : (o.data = s.data, o._resolvedData = s._resolvedData), o.component ? Ae(t, n, a ? a.children : null, r, i) : Ae(t, n, e, r, i), u && a && a.outlet && a.outlet.isActivated && i.canDeactivateChecks.push(new pe(a.outlet.component, s));
}
else
    s && Me(n, a, i), i.canActivateChecks.push(new Rt(r)), o.component ? Ae(t, null, a ? a.children : null, r, i) : Ae(t, null, e, r, i); return i; }
function Ui(t, n, e) { if (typeof e == "function")
    return e(t, n); switch (e) {
    case "pathParamsChange": return !re(t.url, n.url);
    case "pathParamsOrQueryParamsChange": return !re(t.url, n.url) || !k(t.queryParams, n.queryParams);
    case "always": return !0;
    case "paramsOrQueryParamsChange": return !Ft(t, n) || !k(t.queryParams, n.queryParams);
    case "paramsChange":
    default: return !Ft(t, n);
} }
function Me(t, n, e) { let r = le(t), i = t.value; Object.entries(r).forEach(([o, s]) => { i.component ? n ? Me(s, n.children.getContext(o), e) : Me(s, null, e) : Me(s, n, e); }), i.component ? n && n.outlet && n.outlet.isActivated ? e.canDeactivateChecks.push(new pe(n.outlet.component, i)) : e.canDeactivateChecks.push(new pe(null, i)) : e.canDeactivateChecks.push(new pe(null, i)); }
function Fe(t) { return typeof t == "function"; }
function Pi(t) { return typeof t == "boolean"; }
function _i(t) { return t && Fe(t.canLoad); }
function xi(t) { return t && Fe(t.canActivate); }
function Li(t) { return t && Fe(t.canActivateChild); }
function ji(t) { return t && Fe(t.canDeactivate); }
function ki(t) { return t && Fe(t.canMatch); }
function Zr(t) { return t instanceof fr || t?.name === "EmptyError"; }
var Ze = Symbol("INITIAL_VALUE");
function Se() { return O(t => We(t.map(n => n.pipe(De(1), Wn(Ze)))).pipe(R(n => { for (let e of n)
    if (e !== !0) {
        if (e === Ze)
            return Ze;
        if (e === !1 || $i(e))
            return e;
    } return !0; }), he(n => n !== Ze), De(1))); }
function $i(t) { return Z(t) || t instanceof ye; }
function zi(t, n) { return x(e => { let { targetSnapshot: r, currentSnapshot: i, guards: { canActivateChecks: o, canDeactivateChecks: s } } = e; return s.length === 0 && o.length === 0 ? h(P(d({}, e), { guardsResult: !0 })) : Fi(s, r, i, t).pipe(x(a => a && Pi(a) ? qi(r, o, t, n) : h(a)), R(a => P(d({}, e), { guardsResult: a }))); }); }
function Fi(t, n, e, r) { return w(t).pipe(x(i => Wi(i.component, i.route, e, n, r)), se(i => i !== !0, !0)); }
function qi(t, n, e, r) { return w(n).pipe(tt(i => pr(Hi(i.route.parent, r), Bi(i.route, r), Gi(t, i.path, e), Vi(t, i.route, e))), se(i => i !== !0, !0)); }
function Bi(t, n) { return t !== null && n && n(new dt(t)), h(!0); }
function Hi(t, n) { return t !== null && n && n(new lt(t)), h(!0); }
function Vi(t, n, e) { let r = n.routeConfig ? n.routeConfig.canActivate : null; if (!r || r.length === 0)
    return h(!0); let i = r.map(o => Qe(() => { let s = Ce(n) ?? e, a = we(o, s), u = xi(a) ? a.canActivate(n, t) : L(s, () => a(n, t)); return G(u).pipe(se()); })); return h(i).pipe(Se()); }
function Gi(t, n, e) { let r = n[n.length - 1], o = n.slice(0, n.length - 1).reverse().map(s => Di(s)).filter(s => s !== null).map(s => Qe(() => { let a = s.guards.map(u => { let c = Ce(s.node) ?? e, g = we(u, c), S = Li(g) ? g.canActivateChild(r, t) : L(c, () => g(r, t)); return G(S).pipe(se()); }); return h(a).pipe(Se()); })); return h(o).pipe(Se()); }
function Wi(t, n, e, r, i) { let o = n && n.routeConfig ? n.routeConfig.canDeactivate : null; if (!o || o.length === 0)
    return h(!0); let s = o.map(a => { let u = Ce(n) ?? i, c = we(a, u), g = ji(c) ? c.canDeactivate(t, n, e, r) : L(u, () => c(t, n, e, r)); return G(g).pipe(se()); }); return h(s).pipe(Se()); }
function Qi(t, n, e, r) { let i = n.canLoad; if (i === void 0 || i.length === 0)
    return h(!0); let o = i.map(s => { let a = we(s, t), u = _i(a) ? a.canLoad(n, e) : L(t, () => a(n, e)); return G(u); }); return h(o).pipe(Se(), Jr(r)); }
function Jr(t) { return lr(C(n => { if (typeof n != "boolean")
    throw mt(t, n); }), R(n => n === !0)); }
function Ki(t, n, e, r) { let i = n.canMatch; if (!i || i.length === 0)
    return h(!0); let o = i.map(s => { let a = we(s, t), u = ki(a) ? a.canMatch(n, e) : L(t, () => a(n, e)); return G(u); }); return h(o).pipe(Se(), Jr(r)); }
var je = class {
    segmentGroup;
    constructor(n) { this.segmentGroup = n || null; }
}, ke = class extends Error {
    urlTree;
    constructor(n) { super(), this.urlTree = n; }
};
function ce(t) { return be(new je(t)); }
function Yi(t) { return be(new A(4e3, !1)); }
function Zi(t) { return be(Kr(!1, b.GuardRejected)); }
var Ht = class {
    urlSerializer;
    urlTree;
    constructor(n, e) { this.urlSerializer = n, this.urlTree = e; }
    lineralizeSegments(n, e) { let r = [], i = e.root; for (;;) {
        if (r = r.concat(i.segments), i.numberOfChildren === 0)
            return h(r);
        if (i.numberOfChildren > 1 || !i.children[f])
            return Yi(`${n.redirectTo}`);
        i = i.children[f];
    } }
    applyRedirectCommands(n, e, r, i, o) { return Ji(e, i, o).pipe(R(s => { if (s instanceof z)
        throw new ke(s); let a = this.applyRedirectCreateUrlTree(s, this.urlSerializer.parse(s), n, r); if (s[0] === "/")
        throw new ke(a); return a; })); }
    applyRedirectCreateUrlTree(n, e, r, i) { let o = this.createSegmentGroup(n, e.root, r, i); return new z(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment); }
    createQueryParams(n, e) { let r = {}; return Object.entries(n).forEach(([i, o]) => { if (typeof o == "string" && o[0] === ":") {
        let a = o.substring(1);
        r[i] = e[a];
    }
    else
        r[i] = o; }), r; }
    createSegmentGroup(n, e, r, i) { let o = this.createSegments(n, e.segments, r, i), s = {}; return Object.entries(e.children).forEach(([a, u]) => { s[a] = this.createSegmentGroup(n, u, r, i); }), new v(o, s); }
    createSegments(n, e, r, i) { return e.map(o => o.path[0] === ":" ? this.findPosParam(n, o, i) : this.findOrReturn(o, r)); }
    findPosParam(n, e, r) { let i = r[e.path.substring(1)]; if (!i)
        throw new A(4001, !1); return i; }
    findOrReturn(n, e) { let r = 0; for (let i of e) {
        if (i.path === n.path)
            return e.splice(r), i;
        r++;
    } return n; }
};
function Ji(t, n, e) { if (typeof t == "string")
    return h(t); let r = t, { queryParams: i, fragment: o, routeConfig: s, url: a, outlet: u, params: c, data: g, title: S } = n; return G(L(e, () => r({ params: c, data: g, queryParams: i, fragment: o, routeConfig: s, url: a, outlet: u, title: S }))); }
var Vt = { matched: !1, consumedSegments: [], remainingSegments: [], parameters: {}, positionalParamSegments: {} };
function Xi(t, n, e, r, i) { let o = Xr(t, n, e); return o.matched ? (r = Ci(n, r), Ki(r, n, e, i).pipe(R(s => s === !0 ? o : d({}, Vt)))) : h(o); }
function Xr(t, n, e) { if (n.path === "**")
    return eo(e); if (n.path === "")
    return n.pathMatch === "full" && (t.hasChildren() || e.length > 0) ? d({}, Vt) : { matched: !0, consumedSegments: [], remainingSegments: e, parameters: {}, positionalParamSegments: {} }; let i = (n.matcher || Or)(e, t, n); if (!i)
    return d({}, Vt); let o = {}; Object.entries(i.posParams ?? {}).forEach(([a, u]) => { o[a] = u.path; }); let s = i.consumed.length > 0 ? d(d({}, o), i.consumed[i.consumed.length - 1].parameters) : o; return { matched: !0, consumedSegments: i.consumed, remainingSegments: e.slice(i.consumed.length), parameters: s, positionalParamSegments: i.posParams ?? {} }; }
function eo(t) { return { matched: !0, parameters: t.length > 0 ? Dr(t).parameters : {}, consumedSegments: t, remainingSegments: [], positionalParamSegments: {} }; }
function Cr(t, n, e, r) { return e.length > 0 && no(t, e, r) ? { segmentGroup: new v(n, ro(r, new v(e, t.children))), slicedSegments: [] } : e.length === 0 && io(t, e, r) ? { segmentGroup: new v(t.segments, to(t, e, r, t.children)), slicedSegments: e } : { segmentGroup: new v(t.segments, t.children), slicedSegments: e }; }
function to(t, n, e, r) { let i = {}; for (let o of e)
    if (St(t, n, o) && !r[_(o)]) {
        let s = new v([], {});
        i[_(o)] = s;
    } return d(d({}, r), i); }
function ro(t, n) { let e = {}; e[f] = n; for (let r of t)
    if (r.path === "" && _(r) !== f) {
        let i = new v([], {});
        e[_(r)] = i;
    } return e; }
function no(t, n, e) { return e.some(r => St(t, n, r) && _(r) !== f); }
function io(t, n, e) { return e.some(r => St(t, n, r)); }
function St(t, n, e) { return (t.hasChildren() || n.length > 0) && e.pathMatch === "full" ? !1 : e.path === ""; }
function oo(t, n, e) { return n.length === 0 && !t.children[e]; }
var Gt = class {
};
function so(t, n, e, r, i, o, s = "emptyOnly") { return new Wt(t, n, e, r, i, s, o).recognize(); }
var ao = 31, Wt = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(n, e, r, i, o, s, a) { this.injector = n, this.configLoader = e, this.rootComponentType = r, this.config = i, this.urlTree = o, this.paramsInheritanceStrategy = s, this.urlSerializer = a, this.applyRedirects = new Ht(this.urlSerializer, this.urlTree); }
    noMatchError(n) { return new A(4002, `'${n.segmentGroup}'`); }
    recognize() { let n = Cr(this.urlTree.root, [], [], this.config).segmentGroup; return this.match(n).pipe(R(({ children: e, rootSnapshot: r }) => { let i = new E(r, e), o = new xe("", i), s = $r(r, [], this.urlTree.queryParams, this.urlTree.fragment); return s.queryParams = this.urlTree.queryParams, o.url = this.urlSerializer.serialize(s), { state: o, tree: s }; })); }
    match(n) { let e = new ne([], Object.freeze({}), Object.freeze(d({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), f, this.rootComponentType, null, {}); return this.processSegmentGroup(this.injector, this.config, n, f, e).pipe(R(r => ({ children: r, rootSnapshot: e })), Ee(r => { if (r instanceof ke)
        return this.urlTree = r.urlTree, this.match(r.urlTree.root); throw r instanceof je ? this.noMatchError(r) : r; })); }
    processSegmentGroup(n, e, r, i, o) { return r.segments.length === 0 && r.hasChildren() ? this.processChildren(n, e, r, o) : this.processSegment(n, e, r, r.segments, i, !0, o).pipe(R(s => s instanceof E ? [s] : [])); }
    processChildren(n, e, r, i) { let o = []; for (let s of Object.keys(r.children))
        s === "primary" ? o.unshift(s) : o.push(s); return w(o).pipe(tt(s => { let a = r.children[s], u = wi(e, s); return this.processSegmentGroup(n, u, a, s, i); }), Qn((s, a) => (s.push(...a), s)), Ar(null), Kn(), x(s => { if (s === null)
        return ce(r); let a = en(s); return uo(a), h(a); })); }
    processSegment(n, e, r, i, o, s, a) { return w(e).pipe(tt(u => this.processSegmentAgainstRoute(u._injector ?? n, e, u, r, i, o, s, a).pipe(Ee(c => { if (c instanceof je)
        return h(null); throw c; }))), se(u => !!u), Ee(u => { if (Zr(u))
        return oo(r, i, o) ? h(new Gt) : ce(r); throw u; })); }
    processSegmentAgainstRoute(n, e, r, i, o, s, a, u) { return _(r) !== s && (s === f || !St(i, o, r)) ? ce(i) : r.redirectTo === void 0 ? this.matchSegmentAgainstRoute(n, i, r, o, s, u) : this.allowRedirects && a ? this.expandSegmentAgainstRouteUsingRedirect(n, i, e, r, o, s, u) : ce(i); }
    expandSegmentAgainstRouteUsingRedirect(n, e, r, i, o, s, a) { let { matched: u, parameters: c, consumedSegments: g, positionalParamSegments: S, remainingSegments: U } = Xr(e, i, o); if (!u)
        return ce(e); typeof i.redirectTo == "string" && i.redirectTo[0] === "/" && (this.absoluteRedirectCount++, this.absoluteRedirectCount > ao && (this.allowRedirects = !1)); let Q = new ne(o, c, Object.freeze(d({}, this.urlTree.queryParams)), this.urlTree.fragment, wr(i), _(i), i.component ?? i._loadedComponent ?? null, i, br(i)), T = vt(Q, a, this.paramsInheritanceStrategy); return Q.params = Object.freeze(T.params), Q.data = Object.freeze(T.data), this.applyRedirects.applyRedirectCommands(g, i.redirectTo, S, Q, n).pipe(O(te => this.applyRedirects.lineralizeSegments(i, te)), x(te => this.processSegment(n, r, e, te.concat(U), s, !1, a))); }
    matchSegmentAgainstRoute(n, e, r, i, o, s) { let a = Xi(e, r, i, n, this.urlSerializer); return r.path === "**" && (e.children = {}), a.pipe(O(u => u.matched ? (n = r._injector ?? n, this.getChildConfig(n, r, i).pipe(O(({ routes: c }) => { let g = r._loadedInjector ?? n, { parameters: S, consumedSegments: U, remainingSegments: Q } = u, T = new ne(U, S, Object.freeze(d({}, this.urlTree.queryParams)), this.urlTree.fragment, wr(r), _(r), r.component ?? r._loadedComponent ?? null, r, br(r)), ue = vt(T, s, this.paramsInheritanceStrategy); T.params = Object.freeze(ue.params), T.data = Object.freeze(ue.data); let { segmentGroup: te, slicedSegments: Et } = Cr(e, U, Q, c); if (Et.length === 0 && te.hasChildren())
        return this.processChildren(g, c, te, T).pipe(R(Ge => new E(T, Ge))); if (c.length === 0 && Et.length === 0)
        return h(new E(T, [])); let Mn = _(r) === o; return this.processSegment(g, c, te, Et, Mn ? f : o, !0, T).pipe(R(Ge => new E(T, Ge instanceof E ? [Ge] : []))); }))) : ce(e))); }
    getChildConfig(n, e, r) { return e.children ? h({ routes: e.children, injector: n }) : e.loadChildren ? e._loadedRoutes !== void 0 ? h({ routes: e._loadedRoutes, injector: e._loadedInjector }) : Qi(n, e, r, this.urlSerializer).pipe(x(i => i ? this.configLoader.loadChildren(n, e).pipe(C(o => { e._loadedRoutes = o.routes, e._loadedInjector = o.injector; })) : Zi(e))) : h({ routes: [], injector: n }); }
};
function uo(t) { t.sort((n, e) => n.value.outlet === f ? -1 : e.value.outlet === f ? 1 : n.value.outlet.localeCompare(e.value.outlet)); }
function co(t) { let n = t.value.routeConfig; return n && n.path === ""; }
function en(t) { let n = [], e = new Set; for (let r of t) {
    if (!co(r)) {
        n.push(r);
        continue;
    }
    let i = n.find(o => r.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...r.children), e.add(i)) : n.push(r);
} for (let r of e) {
    let i = en(r.children);
    n.push(new E(r.value, i));
} return n.filter(r => !e.has(r)); }
function wr(t) { return t.data || {}; }
function br(t) { return t.resolve || {}; }
function lo(t, n, e, r, i, o) { return x(s => so(t, n, e, r, s.extractedUrl, i, o).pipe(R(({ state: a, tree: u }) => P(d({}, s), { targetSnapshot: a, urlAfterRedirects: u })))); }
function ho(t, n) { return x(e => { let { targetSnapshot: r, guards: { canActivateChecks: i } } = e; if (!i.length)
    return h(e); let o = new Set(i.map(u => u.route)), s = new Set; for (let u of o)
    if (!s.has(u))
        for (let c of tn(u))
            s.add(c); let a = 0; return w(s).pipe(tt(u => o.has(u) ? fo(u, r, t, n) : (u.data = vt(u, u.parent, t).resolve, h(void 0))), C(() => a++), Tr(1), x(u => a === s.size ? h(e) : V)); }); }
function tn(t) { let n = t.children.map(e => tn(e)).flat(); return [t, ...n]; }
function fo(t, n, e, r) { let i = t.routeConfig, o = t._resolve; return i?.title !== void 0 && !Gr(i) && (o[$e] = i.title), Qe(() => (t.data = vt(t, t.parent, e).resolve, po(o, t, n, r).pipe(R(s => (t._resolvedData = s, t.data = d(d({}, t.data), s), null))))); }
function po(t, n, e, r) { let i = xt(t); if (i.length === 0)
    return h({}); let o = {}; return w(i).pipe(x(s => go(t[s], n, e, r).pipe(se(), C(a => { if (a instanceof ye)
    throw mt(new Y, a); o[s] = a; }))), Tr(1), R(() => o), Ee(s => Zr(s) ? V : be(s))); }
function go(t, n, e, r) { let i = Ce(n) ?? r, o = we(t, i), s = o.resolve ? o.resolve(n, e) : L(i, () => o(n, e)); return G(s); }
function Ut(t) { return O(n => { let e = t(n); return e ? w(e).pipe(R(() => n)) : h(n); }); }
var er = (() => { class t {
    buildTitle(e) { let r, i = e.root; for (; i !== void 0;)
        r = this.getResolvedTitleForRoute(i) ?? r, i = i.children.find(o => o.outlet === f); return r; }
    getResolvedTitleForRoute(e) { return e.data[$e]; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: () => p(rn), providedIn: "root" });
} return t; })(), rn = (() => { class t extends er {
    title;
    constructor(e) { super(), this.title = e; }
    updateTitle(e) { let r = this.buildTitle(e); r !== void 0 && this.title.setTitle(r); }
    static \u0275fac = function (r) { return new (r || t)(m.\u0275\u0275inject(Er.Title)); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), W = new oe("", { providedIn: "root", factory: () => ({}) }), ee = new oe(""), Ct = (() => { class t {
    componentLoaders = new WeakMap;
    childrenLoaders = new WeakMap;
    onLoadStartListener;
    onLoadEndListener;
    compiler = p(kn);
    loadComponent(e, r) { if (this.componentLoaders.get(r))
        return this.componentLoaders.get(r); if (r._loadedComponent)
        return h(r._loadedComponent); this.onLoadStartListener && this.onLoadStartListener(r); let i = G(L(e, () => r.loadComponent())).pipe(R(on), O(sn), C(s => { this.onLoadEndListener && this.onLoadEndListener(r), r._loadedComponent = s; }), Pt(() => { this.componentLoaders.delete(r); })), o = new Ot(i, () => new H).pipe(gr()); return this.componentLoaders.set(r, o), o; }
    loadChildren(e, r) { if (this.childrenLoaders.get(r))
        return this.childrenLoaders.get(r); if (r._loadedRoutes)
        return h({ routes: r._loadedRoutes, injector: r._loadedInjector }); this.onLoadStartListener && this.onLoadStartListener(r); let o = nn(r, this.compiler, e, this.onLoadEndListener).pipe(Pt(() => { this.childrenLoaders.delete(r); })), s = new Ot(o, () => new H).pipe(gr()); return this.childrenLoaders.set(r, s), s; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function nn(t, n, e, r) { return G(L(e, () => t.loadChildren())).pipe(R(on), O(sn), x(i => i instanceof $n || Array.isArray(i) ? h(i) : w(n.compileModuleAsync(i))), R(i => { r && r(t); let o, s, a = !1; return Array.isArray(i) ? (s = i, a = !0) : (o = i.create(e).injector, s = o.get(ee, [], { optional: !0, self: !0 }).flat()), { routes: s.map(Xt), injector: o }; })); }
function vo(t) { return t && typeof t == "object" && "default" in t; }
function on(t) { return vo(t) ? t.default : t; }
function sn(t) { return h(t); }
var wt = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: () => p(mo), providedIn: "root" });
} return t; })(), mo = (() => { class t {
    shouldProcessUrl(e) { return !0; }
    extract(e) { return e; }
    merge(e, r) { return e; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), tr = new oe(""), rr = new oe("");
function an(t, n, e) { let r = t.get(rr), i = t.get(Dn); if (!i.startViewTransition || r.skipNextTransition)
    return r.skipNextTransition = !1, new Promise(c => setTimeout(c)); let o, s = new Promise(c => { o = c; }), a = i.startViewTransition(() => (o(), Ro(t))); a.ready.catch(c => { }); let { onViewTransitionCreated: u } = r; return u && L(t, () => u({ transition: a, from: n, to: e })), s; }
function Ro(t) { return new Promise(n => { zn({ read: () => setTimeout(n) }, { injector: t }); }); }
var bt = new oe(""), qe = (() => { class t {
    currentNavigation = Fn(null, { equal: () => !1 });
    currentTransition = null;
    lastSuccessfulNavigation = null;
    events = new H;
    transitionAbortWithErrorSubject = new H;
    configLoader = p(Ct);
    environmentInjector = p(Ir);
    destroyRef = p(qn);
    urlSerializer = p(X);
    rootContexts = p(ae);
    location = p(Qt);
    inputBindingEnabled = p(ze, { optional: !0 }) !== null;
    titleStrategy = p(er);
    options = p(W, { optional: !0 }) || {};
    paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
    urlHandlingStrategy = p(wt);
    createViewTransition = p(tr, { optional: !0 });
    navigationErrorHandler = p(bt, { optional: !0 });
    navigationId = 0;
    get hasRequestedNavigation() { return this.navigationId !== 0; }
    transitions;
    afterPreactivation = () => h(void 0);
    rootComponentType = null;
    destroyed = !1;
    constructor() { let e = i => this.events.next(new ut(i)), r = i => this.events.next(new ct(i)); this.configLoader.onLoadEndListener = r, this.configLoader.onLoadStartListener = e, this.destroyRef.onDestroy(() => { this.destroyed = !0; }); }
    complete() { this.transitions?.complete(); }
    handleNavigationRequest(e) { let r = ++this.navigationId; Te(() => { this.transitions?.next(P(d({}, e), { extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl), targetSnapshot: null, targetRouterState: null, guards: { canActivateChecks: [], canDeactivateChecks: [] }, guardsResult: null, abortController: new AbortController, id: r })); }); }
    setupNavigations(e) { return this.transitions = new N(null), this.transitions.pipe(he(r => r !== null), O(r => { let i = !1; return h(r).pipe(O(o => { if (this.navigationId > r.id)
        return this.cancelNavigationTransition(r, "", b.SupersededByNewNavigation), V; this.currentTransition = r, this.currentNavigation.set({ id: o.id, initialUrl: o.rawUrl, extractedUrl: o.extractedUrl, targetBrowserUrl: typeof o.extras.browserUrl == "string" ? this.urlSerializer.parse(o.extras.browserUrl) : o.extras.browserUrl, trigger: o.source, extras: o.extras, previousNavigation: this.lastSuccessfulNavigation ? P(d({}, this.lastSuccessfulNavigation), { previousNavigation: null }) : null, abort: () => o.abortController.abort() }); let s = !e.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl(), a = o.extras.onSameUrlNavigation ?? e.onSameUrlNavigation; if (!s && a !== "reload")
        return this.events.next(new F(o.id, this.urlSerializer.serialize(o.rawUrl), "", ge.IgnoredSameUrlNavigation)), o.resolve(!1), V; if (this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))
        return h(o).pipe(O(u => (this.events.next(new J(u.id, this.urlSerializer.serialize(u.extractedUrl), u.source, u.restoredState)), u.id !== this.navigationId ? V : Promise.resolve(u))), lo(this.environmentInjector, this.configLoader, this.rootComponentType, e.config, this.urlSerializer, this.paramsInheritanceStrategy), C(u => { r.targetSnapshot = u.targetSnapshot, r.urlAfterRedirects = u.urlAfterRedirects, this.currentNavigation.update(g => (g.finalUrl = u.urlAfterRedirects, g)); let c = new Ue(u.id, this.urlSerializer.serialize(u.extractedUrl), this.urlSerializer.serialize(u.urlAfterRedirects), u.targetSnapshot); this.events.next(c); })); if (s && this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)) {
        let { id: u, extractedUrl: c, source: g, restoredState: S, extras: U } = o, Q = new J(u, this.urlSerializer.serialize(c), g, S);
        this.events.next(Q);
        let T = Hr(this.rootComponentType).snapshot;
        return this.currentTransition = r = P(d({}, o), { targetSnapshot: T, urlAfterRedirects: c, extras: P(d({}, U), { skipLocationChange: !1, replaceUrl: !1 }) }), this.currentNavigation.update(ue => (ue.finalUrl = c, ue)), h(r);
    }
    else
        return this.events.next(new F(o.id, this.urlSerializer.serialize(o.extractedUrl), "", ge.IgnoredByUrlHandlingStrategy)), o.resolve(!1), V; }), C(o => { let s = new it(o.id, this.urlSerializer.serialize(o.extractedUrl), this.urlSerializer.serialize(o.urlAfterRedirects), o.targetSnapshot); this.events.next(s); }), R(o => (this.currentTransition = r = P(d({}, o), { guards: Mi(o.targetSnapshot, o.currentSnapshot, this.rootContexts) }), r)), zi(this.environmentInjector, o => this.events.next(o)), C(o => { if (r.guardsResult = o.guardsResult, o.guardsResult && typeof o.guardsResult != "boolean")
        throw mt(this.urlSerializer, o.guardsResult); let s = new ot(o.id, this.urlSerializer.serialize(o.extractedUrl), this.urlSerializer.serialize(o.urlAfterRedirects), o.targetSnapshot, !!o.guardsResult); this.events.next(s); }), he(o => o.guardsResult ? !0 : (this.cancelNavigationTransition(o, "", b.GuardRejected), !1)), Ut(o => { if (o.guards.canActivateChecks.length !== 0)
        return h(o).pipe(C(s => { let a = new st(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects), s.targetSnapshot); this.events.next(a); }), O(s => { let a = !1; return h(s).pipe(ho(this.paramsInheritanceStrategy, this.environmentInjector), C({ next: () => a = !0, complete: () => { a || this.cancelNavigationTransition(s, "", b.NoDataFromResolver); } })); }), C(s => { let a = new at(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects), s.targetSnapshot); this.events.next(a); })); }), Ut(o => { let s = a => { let u = []; if (a.routeConfig?.loadComponent) {
        let c = Ce(a) ?? this.environmentInjector;
        u.push(this.configLoader.loadComponent(c, a.routeConfig).pipe(C(g => { a.component = g; }), R(() => { })));
    } for (let c of a.children)
        u.push(...s(c)); return u; }; return We(s(o.targetSnapshot.root)).pipe(Ar(null), De(1)); }), Ut(() => this.afterPreactivation()), O(() => { let { currentSnapshot: o, targetSnapshot: s } = r, a = this.createViewTransition?.(this.environmentInjector, o.root, s.root); return a ? w(a).pipe(R(() => r)) : h(r); }), R(o => { let s = Ii(e.routeReuseStrategy, o.targetSnapshot, o.currentRouterState); return this.currentTransition = r = P(d({}, o), { targetRouterState: s }), this.currentNavigation.update(a => (a.targetRouterState = s, a)), r; }), C(() => { this.events.next(new Pe); }), Oi(this.rootContexts, e.routeReuseStrategy, o => this.events.next(o), this.inputBindingEnabled), De(1), vr(new hr(o => { let s = r.abortController.signal, a = () => o.next(); return s.addEventListener("abort", a), () => s.removeEventListener("abort", a); }).pipe(he(() => !i && !r.targetRouterState), C(() => { this.cancelNavigationTransition(r, r.abortController.signal.reason + "", b.Aborted); }))), C({ next: o => { i = !0, this.lastSuccessfulNavigation = Te(this.currentNavigation), this.events.next(new D(o.id, this.urlSerializer.serialize(o.extractedUrl), this.urlSerializer.serialize(o.urlAfterRedirects))), this.titleStrategy?.updateTitle(o.targetRouterState.snapshot), o.resolve(!0); }, complete: () => { i = !0; } }), vr(this.transitionAbortWithErrorSubject.pipe(C(o => { throw o; }))), Pt(() => { i || this.cancelNavigationTransition(r, "", b.SupersededByNewNavigation), this.currentTransition?.id === r.id && (this.currentNavigation.set(null), this.currentTransition = null); }), Ee(o => { if (this.destroyed)
        return r.resolve(!1), V; if (i = !0, Yr(o))
        this.events.next(new $(r.id, this.urlSerializer.serialize(r.extractedUrl), o.message, o.cancellationCode)), Ei(o) ? this.events.next(new Re(o.url, o.navigationBehaviorOptions)) : r.resolve(!1);
    else {
        let s = new ve(r.id, this.urlSerializer.serialize(r.extractedUrl), o, r.targetSnapshot ?? void 0);
        try {
            let a = L(this.environmentInjector, () => this.navigationErrorHandler?.(s));
            if (a instanceof ye) {
                let { message: u, cancellationCode: c } = mt(this.urlSerializer, a);
                this.events.next(new $(r.id, this.urlSerializer.serialize(r.extractedUrl), u, c)), this.events.next(new Re(a.redirectTo, a.navigationBehaviorOptions));
            }
            else
                throw this.events.next(s), o;
        }
        catch (a) {
            this.options.resolveNavigationPromiseOnError ? r.resolve(!1) : r.reject(a);
        }
    } return V; })); })); }
    cancelNavigationTransition(e, r, i) { let o = new $(e.id, this.urlSerializer.serialize(e.extractedUrl), r, i); this.events.next(o), e.resolve(!1); }
    isUpdatingInternalState() { return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString(); }
    isUpdatedBrowserUrl() { let e = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))), r = Te(this.currentNavigation), i = r?.targetBrowserUrl ?? r?.extractedUrl; return e.toString() !== i?.toString() && !r?.extras.skipLocationChange; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function yo(t) { return t !== fe; }
var un = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: () => p(So), providedIn: "root" });
} return t; })(), yt = class {
    shouldDetach(n) { return !1; }
    store(n, e) { }
    shouldAttach(n) { return !1; }
    retrieve(n) { return null; }
    shouldReuseRoute(n, e) { return n.routeConfig === e.routeConfig; }
}, So = (() => { class t extends yt {
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = m.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), cn = (() => { class t {
    urlSerializer = p(X);
    options = p(W, { optional: !0 }) || {};
    canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
    location = p(Qt);
    urlHandlingStrategy = p(wt);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    currentUrlTree = new z;
    getCurrentUrlTree() { return this.currentUrlTree; }
    rawUrlTree = this.currentUrlTree;
    getRawUrlTree() { return this.rawUrlTree; }
    createBrowserPath({ finalUrl: e, initialUrl: r, targetBrowserUrl: i }) { let o = e !== void 0 ? this.urlHandlingStrategy.merge(e, r) : r, s = i ?? o; return s instanceof z ? this.urlSerializer.serialize(s) : s; }
    commitTransition({ targetRouterState: e, finalUrl: r, initialUrl: i }) { r && e ? (this.currentUrlTree = r, this.rawUrlTree = this.urlHandlingStrategy.merge(r, i), this.routerState = e) : this.rawUrlTree = i; }
    routerState = Hr(null);
    getRouterState() { return this.routerState; }
    stateMemento = this.createStateMemento();
    updateStateMemento() { this.stateMemento = this.createStateMemento(); }
    createStateMemento() { return { rawUrlTree: this.rawUrlTree, currentUrlTree: this.currentUrlTree, routerState: this.routerState }; }
    resetInternalState({ finalUrl: e }) { this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e ?? this.rawUrlTree); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: () => p(Co), providedIn: "root" });
} return t; })(), Co = (() => { class t extends cn {
    currentPageId = 0;
    lastSuccessfulId = -1;
    restoredState() { return this.location.getState(); }
    get browserPageId() { return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState()?.\u0275routerPageId ?? this.currentPageId; }
    registerNonRouterCurrentEntryChangeListener(e) { return this.location.subscribe(r => { r.type === "popstate" && setTimeout(() => { e(r.url, r.state, "popstate"); }); }); }
    handleRouterEvent(e, r) { e instanceof J ? this.updateStateMemento() : e instanceof F ? this.commitTransition(r) : e instanceof Ue ? this.urlUpdateStrategy === "eager" && (r.extras.skipLocationChange || this.setBrowserUrl(this.createBrowserPath(r), r)) : e instanceof Pe ? (this.commitTransition(r), this.urlUpdateStrategy === "deferred" && !r.extras.skipLocationChange && this.setBrowserUrl(this.createBrowserPath(r), r)) : e instanceof $ && e.code !== b.SupersededByNewNavigation && e.code !== b.Redirect ? this.restoreHistory(r) : e instanceof ve ? this.restoreHistory(r, !0) : e instanceof D && (this.lastSuccessfulId = e.id, this.currentPageId = this.browserPageId); }
    setBrowserUrl(e, { extras: r, id: i }) { let { replaceUrl: o, state: s } = r; if (this.location.isCurrentPathEqualTo(e) || o) {
        let a = this.browserPageId, u = d(d({}, s), this.generateNgRouterState(i, a));
        this.location.replaceState(e, "", u);
    }
    else {
        let a = d(d({}, s), this.generateNgRouterState(i, this.browserPageId + 1));
        this.location.go(e, "", a);
    } }
    restoreHistory(e, r = !1) { if (this.canceledNavigationResolution === "computed") {
        let i = this.browserPageId, o = this.currentPageId - i;
        o !== 0 ? this.location.historyGo(o) : this.getCurrentUrlTree() === e.finalUrl && o === 0 && (this.resetInternalState(e), this.resetUrlToCurrentUrlTree());
    }
    else
        this.canceledNavigationResolution === "replace" && (r && this.resetInternalState(e), this.resetUrlToCurrentUrlTree()); }
    resetUrlToCurrentUrlTree() { this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)); }
    generateNgRouterState(e, r) { return this.canceledNavigationResolution === "computed" ? { navigationId: e, \u0275routerPageId: r } : { navigationId: e }; }
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = m.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function It(t, n) { t.events.pipe(he(e => e instanceof D || e instanceof $ || e instanceof ve || e instanceof F), R(e => e instanceof D || e instanceof F ? 0 : (e instanceof $ ? e.code === b.Redirect || e.code === b.SupersededByNewNavigation : !1) ? 2 : 1), he(e => e !== 2), De(1)).subscribe(() => { n(); }); }
var wo = { paths: "exact", fragment: "ignored", matrixParams: "ignored", queryParams: "exact" }, bo = { paths: "subset", fragment: "ignored", matrixParams: "ignored", queryParams: "subset" }, j = (() => { class t {
    get currentUrlTree() { return this.stateManager.getCurrentUrlTree(); }
    get rawUrlTree() { return this.stateManager.getRawUrlTree(); }
    disposed = !1;
    nonRouterCurrentEntryChangeSubscription;
    console = p(Bn);
    stateManager = p(cn);
    options = p(W, { optional: !0 }) || {};
    pendingTasks = p(Hn);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    navigationTransitions = p(qe);
    urlSerializer = p(X);
    location = p(Qt);
    urlHandlingStrategy = p(wt);
    injector = p(Ir);
    _events = new H;
    get events() { return this._events; }
    get routerState() { return this.stateManager.getRouterState(); }
    navigated = !1;
    routeReuseStrategy = p(un);
    onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
    config = p(ee, { optional: !0 })?.flat() ?? [];
    componentInputBindingEnabled = !!p(ze, { optional: !0 });
    currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
    constructor() { this.resetConfig(this.config), this.navigationTransitions.setupNavigations(this).subscribe({ error: e => { this.console.warn(e); } }), this.subscribeToNavigationEvents(); }
    eventsSubscription = new cr;
    subscribeToNavigationEvents() { let e = this.navigationTransitions.events.subscribe(r => { try {
        let i = this.navigationTransitions.currentTransition, o = Te(this.navigationTransitions.currentNavigation);
        if (i !== null && o !== null) {
            if (this.stateManager.handleRouterEvent(r, o), r instanceof $ && r.code !== b.Redirect && r.code !== b.SupersededByNewNavigation)
                this.navigated = !0;
            else if (r instanceof D)
                this.navigated = !0;
            else if (r instanceof Re) {
                let s = r.navigationBehaviorOptions, a = this.urlHandlingStrategy.merge(r.url, i.currentRawUrl), u = d({ browserUrl: i.extras.browserUrl, info: i.extras.info, skipLocationChange: i.extras.skipLocationChange, replaceUrl: i.extras.replaceUrl || this.urlUpdateStrategy === "eager" || yo(i.source) }, s);
                this.scheduleNavigation(a, fe, null, u, { resolve: i.resolve, reject: i.reject, promise: i.promise });
            }
        }
        Si(r) && this._events.next(r);
    }
    catch (i) {
        this.navigationTransitions.transitionAbortWithErrorSubject.next(i);
    } }); this.eventsSubscription.add(e); }
    resetRootComponentType(e) { this.routerState.root.component = e, this.navigationTransitions.rootComponentType = e; }
    initialNavigation() { this.setUpLocationChangeListener(), this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), fe, this.stateManager.restoredState()); }
    setUpLocationChangeListener() { this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((e, r, i) => { this.navigateToSyncWithBrowser(e, i, r); }); }
    navigateToSyncWithBrowser(e, r, i) { let o = { replaceUrl: !0 }, s = i?.navigationId ? i : null; if (i) {
        let u = d({}, i);
        delete u.navigationId, delete u.\u0275routerPageId, Object.keys(u).length !== 0 && (o.state = u);
    } let a = this.parseUrl(e); this.scheduleNavigation(a, r, s, o).catch(u => { this.disposed || this.injector.get(Vn)(u); }); }
    get url() { return this.serializeUrl(this.currentUrlTree); }
    getCurrentNavigation() { return Te(this.navigationTransitions.currentNavigation); }
    get lastSuccessfulNavigation() { return this.navigationTransitions.lastSuccessfulNavigation; }
    resetConfig(e) { this.config = e.map(Xt), this.navigated = !1; }
    ngOnDestroy() { this.dispose(); }
    dispose() { this._events.unsubscribe(), this.navigationTransitions.complete(), this.nonRouterCurrentEntryChangeSubscription && (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(), this.nonRouterCurrentEntryChangeSubscription = void 0), this.disposed = !0, this.eventsSubscription.unsubscribe(); }
    createUrlTree(e, r = {}) { let { relativeTo: i, queryParams: o, fragment: s, queryParamsHandling: a, preserveFragment: u } = r, c = u ? this.currentUrlTree.fragment : s, g = null; switch (a ?? this.options.defaultQueryParamsHandling) {
        case "merge":
            g = d(d({}, this.currentUrlTree.queryParams), o);
            break;
        case "preserve":
            g = this.currentUrlTree.queryParams;
            break;
        default: g = o || null;
    } g !== null && (g = this.removeEmptyProps(g)); let S; try {
        let U = i ? i.snapshot : this.routerState.snapshot.root;
        S = zr(U);
    }
    catch {
        (typeof e[0] != "string" || e[0][0] !== "/") && (e = []), S = this.currentUrlTree.root;
    } return Fr(S, e, g, c ?? null); }
    navigateByUrl(e, r = { skipLocationChange: !1 }) { let i = Z(e) ? e : this.parseUrl(e), o = this.urlHandlingStrategy.merge(i, this.rawUrlTree); return this.scheduleNavigation(o, fe, null, r); }
    navigate(e, r = { skipLocationChange: !1 }) { return Io(e), this.navigateByUrl(this.createUrlTree(e, r), r); }
    serializeUrl(e) { return this.urlSerializer.serialize(e); }
    parseUrl(e) { try {
        return this.urlSerializer.parse(e);
    }
    catch {
        return this.console.warn(Gn(4018, !1)), this.urlSerializer.parse("/");
    } }
    isActive(e, r) { let i; if (r === !0 ? i = d({}, wo) : r === !1 ? i = d({}, bo) : i = r, Z(e))
        return mr(this.currentUrlTree, e, i); let o = this.parseUrl(e); return mr(this.currentUrlTree, o, i); }
    removeEmptyProps(e) { return Object.entries(e).reduce((r, [i, o]) => (o != null && (r[i] = o), r), {}); }
    scheduleNavigation(e, r, i, o, s) { if (this.disposed)
        return Promise.resolve(!1); let a, u, c; s ? (a = s.resolve, u = s.reject, c = s.promise) : c = new Promise((S, U) => { a = S, u = U; }); let g = this.pendingTasks.add(); return It(this, () => { queueMicrotask(() => this.pendingTasks.remove(g)); }), this.navigationTransitions.handleNavigationRequest({ source: r, restoredState: i, currentUrlTree: this.currentUrlTree, currentRawUrl: this.currentUrlTree, rawUrl: e, extras: o, resolve: a, reject: u, promise: c, currentSnapshot: this.routerState.snapshot, currentRouterState: this.routerState }), c.catch(S => Promise.reject(S)); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Io(t) { for (let n = 0; n < t.length; n++)
    if (t[n] == null)
        throw new A(4008, !1); }
import * as ln from "@angular/common";
import { LOCATION_INITIALIZED as Ao, ViewportScroller as hn, LocationStrategy as or, HashLocationStrategy as dn, Location as To, PathLocationStrategy as Eo } from "@angular/common";
import * as l from "@angular/core";
import { signal as Oo, untracked as Mo, inject as I, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as Do, HostAttributeToken as No, \u0275RuntimeError as ws, booleanAttribute as nr, EventEmitter as Uo, createEnvironmentInjector as Po, InjectionToken as He, makeEnvironmentProviders as _o, APP_BOOTSTRAP_LISTENER as fn, Injector as pn, ApplicationRef as xo, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as Lo, provideAppInitializer as gn, \u0275performanceMarkFeature as jo, ENVIRONMENT_INITIALIZER as Ps, NgZone as vn } from "@angular/core";
import { mergeAll as At, catchError as ko, filter as $o, concatMap as zo, mergeMap as Fo } from "rxjs/operators";
var Tt = (() => { class t {
    router;
    route;
    tabIndexAttribute;
    renderer;
    el;
    locationStrategy;
    reactiveHref = Oo(null);
    get href() { return Mo(this.reactiveHref); }
    set href(e) { this.reactiveHref.set(e); }
    target;
    queryParams;
    fragment;
    queryParamsHandling;
    state;
    info;
    relativeTo;
    isAnchorElement;
    subscription;
    onChanges = new H;
    applicationErrorHandler = I(Do);
    options = I(W, { optional: !0 });
    constructor(e, r, i, o, s, a) { this.router = e, this.route = r, this.tabIndexAttribute = i, this.renderer = o, this.el = s, this.locationStrategy = a, this.reactiveHref.set(I(new No("href"), { optional: !0 })); let u = s.nativeElement.tagName?.toLowerCase(); this.isAnchorElement = u === "a" || u === "area" || !!(typeof customElements == "object" && customElements.get(u)?.observedAttributes?.includes?.("href")), this.isAnchorElement ? this.setTabIndexIfNotOnNativeEl("0") : this.subscribeToNavigationEventsIfNecessary(); }
    subscribeToNavigationEventsIfNecessary() { if (this.subscription !== void 0 || !this.isAnchorElement)
        return; let e = this.preserveFragment, r = i => i === "merge" || i === "preserve"; e ||= r(this.queryParamsHandling), e ||= !this.queryParamsHandling && !r(this.options?.defaultQueryParamsHandling), e && (this.subscription = this.router.events.subscribe(i => { i instanceof D && this.updateHref(); })); }
    preserveFragment = !1;
    skipLocationChange = !1;
    replaceUrl = !1;
    setTabIndexIfNotOnNativeEl(e) { this.tabIndexAttribute != null || this.isAnchorElement || this.applyAttributeValue("tabindex", e); }
    ngOnChanges(e) { this.isAnchorElement && (this.updateHref(), this.subscribeToNavigationEventsIfNecessary()), this.onChanges.next(this); }
    routerLinkInput = null;
    set routerLink(e) { e == null ? (this.routerLinkInput = null, this.setTabIndexIfNotOnNativeEl(null)) : (Z(e) ? this.routerLinkInput = e : this.routerLinkInput = Array.isArray(e) ? e : [e], this.setTabIndexIfNotOnNativeEl("0")); }
    onClick(e, r, i, o, s) { let a = this.urlTree; if (a === null || this.isAnchorElement && (e !== 0 || r || i || o || s || typeof this.target == "string" && this.target != "_self"))
        return !0; let u = { skipLocationChange: this.skipLocationChange, replaceUrl: this.replaceUrl, state: this.state, info: this.info }; return this.router.navigateByUrl(a, u)?.catch(c => { this.applicationErrorHandler(c); }), !this.isAnchorElement; }
    ngOnDestroy() { this.subscription?.unsubscribe(); }
    updateHref() { let e = this.urlTree; this.reactiveHref.set(e !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)) ?? "" : null); }
    applyAttributeValue(e, r) { let i = this.renderer, o = this.el.nativeElement; r !== null ? i.setAttribute(o, e, r) : i.removeAttribute(o, e); }
    get urlTree() { return this.routerLinkInput === null ? null : Z(this.routerLinkInput) ? this.routerLinkInput : this.router.createUrlTree(this.routerLinkInput, { relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route, queryParams: this.queryParams, fragment: this.fragment, queryParamsHandling: this.queryParamsHandling, preserveFragment: this.preserveFragment }); }
    static \u0275fac = function (r) { return new (r || t)(l.\u0275\u0275directiveInject(j), l.\u0275\u0275directiveInject(q), l.\u0275\u0275injectAttribute("tabindex"), l.\u0275\u0275directiveInject(l.Renderer2), l.\u0275\u0275directiveInject(l.ElementRef), l.\u0275\u0275directiveInject(ln.LocationStrategy)); };
    static \u0275dir = l.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLink", ""]], hostVars: 2, hostBindings: function (r, i) { r & 1 && l.\u0275\u0275listener("click", function (s) { return i.onClick(s.button, s.ctrlKey, s.shiftKey, s.altKey, s.metaKey); }), r & 2 && l.\u0275\u0275attribute("href", i.reactiveHref(), l.\u0275\u0275sanitizeUrlOrResourceUrl)("target", i.target); }, inputs: { target: "target", queryParams: "queryParams", fragment: "fragment", queryParamsHandling: "queryParamsHandling", state: "state", info: "info", relativeTo: "relativeTo", preserveFragment: [2, "preserveFragment", "preserveFragment", nr], skipLocationChange: [2, "skipLocationChange", "skipLocationChange", nr], replaceUrl: [2, "replaceUrl", "replaceUrl", nr], routerLink: "routerLink" }, features: [l.\u0275\u0275NgOnChangesFeature] });
} return t; })(), qo = (() => { class t {
    router;
    element;
    renderer;
    cdr;
    link;
    links;
    classes = [];
    routerEventsSubscription;
    linkInputChangesSubscription;
    _isActive = !1;
    get isActive() { return this._isActive; }
    routerLinkActiveOptions = { exact: !1 };
    ariaCurrentWhenActive;
    isActiveChange = new Uo;
    constructor(e, r, i, o, s) { this.router = e, this.element = r, this.renderer = i, this.cdr = o, this.link = s, this.routerEventsSubscription = e.events.subscribe(a => { a instanceof D && this.update(); }); }
    ngAfterContentInit() { h(this.links.changes, h(null)).pipe(At()).subscribe(e => { this.update(), this.subscribeToEachLinkOnChanges(); }); }
    subscribeToEachLinkOnChanges() { this.linkInputChangesSubscription?.unsubscribe(); let e = [...this.links.toArray(), this.link].filter(r => !!r).map(r => r.onChanges); this.linkInputChangesSubscription = w(e).pipe(At()).subscribe(r => { this._isActive !== this.isLinkActive(this.router)(r) && this.update(); }); }
    set routerLinkActive(e) { let r = Array.isArray(e) ? e : e.split(" "); this.classes = r.filter(i => !!i); }
    ngOnChanges(e) { this.update(); }
    ngOnDestroy() { this.routerEventsSubscription.unsubscribe(), this.linkInputChangesSubscription?.unsubscribe(); }
    update() { !this.links || !this.router.navigated || queueMicrotask(() => { let e = this.hasActiveLinks(); this.classes.forEach(r => { e ? this.renderer.addClass(this.element.nativeElement, r) : this.renderer.removeClass(this.element.nativeElement, r); }), e && this.ariaCurrentWhenActive !== void 0 ? this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString()) : this.renderer.removeAttribute(this.element.nativeElement, "aria-current"), this._isActive !== e && (this._isActive = e, this.cdr.markForCheck(), this.isActiveChange.emit(e)); }); }
    isLinkActive(e) { let r = Bo(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact || !1; return i => { let o = i.urlTree; return o ? e.isActive(o, r) : !1; }; }
    hasActiveLinks() { let e = this.isLinkActive(this.router); return this.link && e(this.link) || this.links.some(e); }
    static \u0275fac = function (r) { return new (r || t)(l.\u0275\u0275directiveInject(j), l.\u0275\u0275directiveInject(l.ElementRef), l.\u0275\u0275directiveInject(l.Renderer2), l.\u0275\u0275directiveInject(l.ChangeDetectorRef), l.\u0275\u0275directiveInject(Tt, 8)); };
    static \u0275dir = l.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLinkActive", ""]], contentQueries: function (r, i, o) { if (r & 1 && l.\u0275\u0275contentQuery(o, Tt, 5), r & 2) {
            let s;
            l.\u0275\u0275queryRefresh(s = l.\u0275\u0275loadQuery()) && (i.links = s);
        } }, inputs: { routerLinkActiveOptions: "routerLinkActiveOptions", ariaCurrentWhenActive: "ariaCurrentWhenActive", routerLinkActive: "routerLinkActive" }, outputs: { isActiveChange: "isActiveChange" }, exportAs: ["routerLinkActive"], features: [l.\u0275\u0275NgOnChangesFeature] });
} return t; })();
function Bo(t) { return !!t.paths; }
var Be = class {
}, Ho = (() => { class t {
    preload(e, r) { return r().pipe(ko(() => h(null))); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Vo = (() => { class t {
    preload(e, r) { return h(null); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), mn = (() => { class t {
    router;
    injector;
    preloadingStrategy;
    loader;
    subscription;
    constructor(e, r, i, o) { this.router = e, this.injector = r, this.preloadingStrategy = i, this.loader = o; }
    setUpPreloading() { this.subscription = this.router.events.pipe($o(e => e instanceof D), zo(() => this.preload())).subscribe(() => { }); }
    preload() { return this.processRoutes(this.injector, this.router.config); }
    ngOnDestroy() { this.subscription && this.subscription.unsubscribe(); }
    processRoutes(e, r) { let i = []; for (let o of r) {
        o.providers && !o._injector && (o._injector = Po(o.providers, e, `Route: ${o.path}`));
        let s = o._injector ?? e, a = o._loadedInjector ?? s;
        (o.loadChildren && !o._loadedRoutes && o.canLoad === void 0 || o.loadComponent && !o._loadedComponent) && i.push(this.preloadConfig(s, o)), (o.children || o._loadedRoutes) && i.push(this.processRoutes(a, o.children ?? o._loadedRoutes));
    } return w(i).pipe(At()); }
    preloadConfig(e, r) { return this.preloadingStrategy.preload(r, () => { let i; r.loadChildren && r.canLoad === void 0 ? i = this.loader.loadChildren(e, r) : i = h(null); let o = i.pipe(Fo(s => s === null ? h(void 0) : (r._loadedRoutes = s.routes, r._loadedInjector = s.injector, this.processRoutes(s.injector ?? e, s.routes)))); if (r.loadComponent && !r._loadedComponent) {
        let s = this.loader.loadComponent(e, r);
        return w([o, s]).pipe(At());
    }
    else
        return o; }); }
    static \u0275fac = function (r) { return new (r || t)(l.\u0275\u0275inject(j), l.\u0275\u0275inject(l.EnvironmentInjector), l.\u0275\u0275inject(Be), l.\u0275\u0275inject(Ct)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), sr = new He(""), Rn = (() => { class t {
    urlSerializer;
    transitions;
    viewportScroller;
    zone;
    options;
    routerEventsSubscription;
    scrollEventsSubscription;
    lastId = 0;
    lastSource = fe;
    restoredId = 0;
    store = {};
    constructor(e, r, i, o, s = {}) { this.urlSerializer = e, this.transitions = r, this.viewportScroller = i, this.zone = o, this.options = s, s.scrollPositionRestoration ||= "disabled", s.anchorScrolling ||= "disabled"; }
    init() { this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents(); }
    createScrollEvents() { return this.transitions.events.subscribe(e => { e instanceof J ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = e.navigationTrigger, this.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof D ? (this.lastId = e.id, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment)) : e instanceof F && e.code === ge.IgnoredSameUrlNavigation && (this.lastSource = void 0, this.restoredId = 0, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment)); }); }
    consumeScrollEvents() { return this.transitions.events.subscribe(e => { if (!(e instanceof me))
        return; let r = { behavior: "instant" }; e.position ? this.options.scrollPositionRestoration === "top" ? this.viewportScroller.scrollToPosition([0, 0], r) : this.options.scrollPositionRestoration === "enabled" && this.viewportScroller.scrollToPosition(e.position, r) : e.anchor && this.options.anchorScrolling === "enabled" ? this.viewportScroller.scrollToAnchor(e.anchor) : this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.scrollToPosition([0, 0]); }); }
    scheduleScrollEvent(e, r) { this.zone.runOutsideAngular(() => ur(this, null, function* () { yield new Promise(i => { setTimeout(i), typeof requestAnimationFrame < "u" && requestAnimationFrame(i); }), this.zone.run(() => { this.transitions.events.next(new me(e, this.lastSource === "popstate" ? this.store[this.restoredId] : null, r)); }); })); }
    ngOnDestroy() { this.routerEventsSubscription?.unsubscribe(), this.scrollEventsSubscription?.unsubscribe(); }
    static \u0275fac = function (r) { l.\u0275\u0275invalidFactory(); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })();
function Go(t, ...n) { return _o([{ provide: ee, multi: !0, useValue: t }, [], { provide: q, useFactory: yn, deps: [j] }, { provide: fn, multi: !0, useFactory: Sn }, n.map(e => e.\u0275providers)]); }
function yn(t) { return t.routerState.root; }
function B(t, n) { return { \u0275kind: t, \u0275providers: n }; }
function Wo(t) { return [{ provide: ee, multi: !0, useValue: t }, []]; }
function Qo(t = {}) { return B(4, [{ provide: sr, useFactory: () => { let e = I(hn), r = I(vn), i = I(qe), o = I(X); return new Rn(o, i, e, r, t); } }]); }
function Sn() { let t = I(pn); return n => { let e = t.get(xo); if (n !== e.components[0])
    return; let r = t.get(j), i = t.get(Cn); t.get(ar) === 1 && r.initialNavigation(), t.get(In, null, { optional: !0 })?.setUpPreloading(), t.get(sr, null, { optional: !0 })?.init(), r.resetRootComponentType(e.componentTypes[0]), i.closed || (i.next(), i.complete(), i.unsubscribe()); }; }
var Cn = new He("", { factory: () => new H }), ar = new He("", { providedIn: "root", factory: () => 1 });
function wn() { let t = [{ provide: Lo, useValue: !0 }, { provide: ar, useValue: 0 }, gn(() => { let n = I(pn); return n.get(Ao, Promise.resolve()).then(() => new Promise(r => { let i = n.get(j), o = n.get(Cn); It(i, () => { r(!0); }), n.get(qe).afterPreactivation = () => (r(!0), o.closed ? h(void 0) : o), i.initialNavigation(); })); })]; return B(2, t); }
function bn() { let t = [gn(() => { I(j).setUpLocationChangeListener(); }), { provide: ar, useValue: 2 }]; return B(3, t); }
function Ko() { let t = []; return t = [], B(1, t); }
var In = new He("");
function An(t) { return B(0, [{ provide: In, useExisting: mn }, { provide: Be, useExisting: t }]); }
function Yo(t) { return B(5, [{ provide: W, useValue: t }]); }
function Zo() { return B(6, [{ provide: or, useClass: dn }]); }
function Jo(t) { return B(7, [{ provide: bt, useValue: t }]); }
function Tn() { return B(8, [Zt, { provide: ze, useExisting: Zt }]); }
function En(t) { jo("NgRouterViewTransitions"); let n = [{ provide: tr, useValue: an }, { provide: rr, useValue: d({ skipNextTransition: !!t?.skipInitialTransition }, t) }]; return B(9, n); }
var On = [To, { provide: X, useClass: Y }, j, ae, { provide: q, useFactory: yn, deps: [j] }, Ct, []], Xo = (() => { class t {
    constructor() { }
    static forRoot(e, r) { return { ngModule: t, providers: [On, [], { provide: ee, multi: !0, useValue: e }, [], r?.errorHandler ? { provide: bt, useValue: r.errorHandler } : [], { provide: W, useValue: r || {} }, r?.useHash ? ts() : rs(), es(), r?.preloadingStrategy ? An(r.preloadingStrategy).\u0275providers : [], r?.initialNavigation ? ns(r) : [], r?.bindToComponentInputs ? Tn().\u0275providers : [], r?.enableViewTransitions ? En().\u0275providers : [], is()] }; }
    static forChild(e) { return { ngModule: t, providers: [{ provide: ee, multi: !0, useValue: e }] }; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275mod = l.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = l.\u0275\u0275defineInjector({});
} return t; })();
function es() { return { provide: sr, useFactory: () => { let t = I(hn), n = I(vn), e = I(W), r = I(qe), i = I(X); return e.scrollOffset && t.setOffset(e.scrollOffset), new Rn(i, r, t, n, e); } }; }
function ts() { return { provide: or, useClass: dn }; }
function rs() { return { provide: or, useClass: Eo }; }
function ns(t) { return [t.initialNavigation === "disabled" ? bn().\u0275providers : [], t.initialNavigation === "enabledBlocking" ? wn().\u0275providers : []]; }
var ir = new He("");
function is() { return [{ provide: ir, useFactory: Sn }, { provide: fn, multi: !0, useExisting: ir }]; }
import { inject as Ve, Version as os } from "@angular/core";
import "@angular/common";
import "rxjs/operators";
import "@angular/platform-browser";
function Gs(t) { return t.map(n => (...e) => Ve(n).canMatch(...e)); }
function Ws(t) { return t.map(n => (...e) => Ve(n).canActivate(...e)); }
function Qs(t) { return t.map(n => (...e) => Ve(n).canActivateChild(...e)); }
function Ks(t) { return t.map(n => (...e) => Ve(n).canDeactivate(...e)); }
function Ys(t) { return (...n) => Ve(t).resolve(...n); }
var Zs = new os("20.3.7");
export { q as ActivatedRoute, ne as ActivatedRouteSnapshot, ft as ActivationEnd, dt as ActivationStart, yt as BaseRouteReuseStrategy, ht as ChildActivationEnd, lt as ChildActivationStart, ae as ChildrenOutletContexts, rn as DefaultTitleStrategy, Y as DefaultUrlSerializer, y as EventType, ot as GuardsCheckEnd, it as GuardsCheckStart, $ as NavigationCancel, b as NavigationCancellationCode, D as NavigationEnd, ve as NavigationError, F as NavigationSkipped, ge as NavigationSkippedCode, J as NavigationStart, Vo as NoPreloading, pt as OutletContext, f as PRIMARY_OUTLET, Ho as PreloadAllModules, Be as PreloadingStrategy, W as ROUTER_CONFIGURATION, ir as ROUTER_INITIALIZER, Wr as ROUTER_OUTLET_DATA, ee as ROUTES, ye as RedirectCommand, at as ResolveEnd, st as ResolveStart, ct as RouteConfigLoadEnd, ut as RouteConfigLoadStart, un as RouteReuseStrategy, j as Router, M as RouterEvent, Tt as RouterLink, qo as RouterLinkActive, Tt as RouterLinkWithHref, Xo as RouterModule, Yt as RouterOutlet, mn as RouterPreloader, _e as RouterState, xe as RouterStateSnapshot, Ue as RoutesRecognized, me as Scroll, er as TitleStrategy, wt as UrlHandlingStrategy, K as UrlSegment, v as UrlSegmentGroup, X as UrlSerializer, z as UrlTree, Zs as VERSION, ie as convertToParamMap, $r as createUrlTreeFromSnapshot, Or as defaultUrlMatcher, Ws as mapToCanActivate, Qs as mapToCanActivateChild, Ks as mapToCanDeactivate, Gs as mapToCanMatch, Ys as mapToResolve, Go as provideRouter, Wo as provideRoutes, Tn as withComponentInputBinding, Ko as withDebugTracing, bn as withDisabledInitialNavigation, wn as withEnabledBlockingInitialNavigation, Zo as withHashLocation, Qo as withInMemoryScrolling, Jo as withNavigationErrorHandler, An as withPreloading, Yo as withRouterConfig, En as withViewTransitions, Jt as \u0275EmptyOutletComponent, On as \u0275ROUTER_PROVIDERS, It as \u0275afterNextNavigation, nn as \u0275loadChildren };
/*! Bundled license information:

@angular/router/fesm2022/router2.mjs:
@angular/router/fesm2022/router_module.mjs:
@angular/router/fesm2022/router.mjs:
  (**
   * @license Angular v20.3.7
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
