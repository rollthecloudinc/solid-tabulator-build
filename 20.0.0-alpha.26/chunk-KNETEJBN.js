import { a as X, b as I, f as ee } from "@nf-internal/chunk-CTQVN4C2";
import { F as te, G as Le, H as Pe, I as Ae, J as ke, K as Ve, a as m, b, c as je, s as ne, w as Oe, y as Se } from "@nf-internal/chunk-CFUNUXQQ";
import { f as Re, l as be } from "@nf-internal/chunk-STIBVO4O";
import { a as V, b as $, h as K } from "@nf-internal/chunk-FJYW2LMB";
import { setActiveConsumer as T } from "@angular/core/primitives/signals";
import { isNotFound as Sn } from "@angular/core/primitives/di";
var oe = class {
    full;
    major;
    minor;
    patch;
    constructor(n) { this.full = n; let t = n.split("."); this.major = t[0], this.minor = t[1], this.patch = t.slice(2).join("."); }
}, sr = new oe("20.3.7");
var ur = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", f = class extends Error {
    code;
    constructor(n, t) { super(me(n, t)), this.code = n; }
};
function Ln(e) { return `NG0${Math.abs(e)}`; }
function me(e, n) { return `${Ln(e)}${n ? ": " + n : ""}`; }
var cr = globalThis;
function c(e) { for (let n in e)
    if (e[n] === c)
        return n; throw Error(""); }
function ar(e, n) { for (let t in n)
    n.hasOwnProperty(t) && !e.hasOwnProperty(t) && (e[t] = n[t]); }
function O(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(O).join(", ")}]`;
    if (e == null)
        return "" + e;
    let n = e.overriddenName || e.name;
    if (n)
        return `${n}`;
    let t = e.toString();
    if (t == null)
        return "" + t;
    let r = t.indexOf(`
`);
    return r >= 0 ? t.slice(0, r) : t;
}
function dr(e, n) { return e ? n ? `${e} ${n}` : e : n || ""; }
function lr(e, n = 100) { if (!e || n < 1 || e.length <= n)
    return e; if (n == 1)
    return e.substring(0, 1) + "..."; let t = Math.round(n / 2); return e.substring(0, t) + "..." + e.substring(e.length - t); }
var Pn = c({ __forward_ref__: c });
function Ye(e) { return e.__forward_ref__ = Ye, e.toString = function () { return O(this()); }, e; }
function v(e) { return An(e) ? e() : e; }
function An(e) { return typeof e == "function" && e.hasOwnProperty(Pn) && e.__forward_ref__ === Ye; }
function fr(e, n, t) { e != n && Je(t, e, n, "=="); }
function Je(e, n, t, r) { throw new Error(`ASSERTION ERROR: ${e}` + (r == null ? "" : ` [Expected=> ${t} ${r} ${n} <=Actual]`)); }
function _(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
var hr = _;
function pr(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function z(e) { return kn(e, Ze); }
function gr(e) { return z(e) !== null; }
function kn(e, n) { return e.hasOwnProperty(n) && e[n] || null; }
function Vn(e) { let n = e?.[Ze] ?? null; return n || null; }
function $e(e) { return e && e.hasOwnProperty(qe) ? e[qe] : null; }
var Ze = c({ \u0275prov: c }), qe = c({ \u0275inj: c }), g = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(n, t) { this._desc = n, this.\u0275prov = void 0, typeof t == "number" ? this.__NG_ELEMENT_ID__ = t : t !== void 0 && (this.\u0275prov = _({ token: this, providedIn: t.providedIn || "root", factory: t.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, He;
function mr(e) { Je("setInjectorProfilerContext should never be called in production mode"); let n = He; return He = e, n; }
function Qe(e) { return e && !!e.\u0275providers; }
var $n = c({ \u0275cmp: c }), qn = c({ \u0275dir: c }), Hn = c({ \u0275pipe: c }), Gn = c({ \u0275mod: c }), Ge = c({ \u0275fac: c }), vr = c({ __NG_ELEMENT_ID__: c }), Be = c({ __NG_ENV_ID__: c });
function Bn(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function yr(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : Bn(e); }
var Ke = c({ ngErrorCode: c }), Un = c({ ngErrorMessage: c }), Wn = c({ ngTokenPath: c });
function zn(e, n) { return Xe("", -200, n); }
function Yn(e, n) { throw new f(-201, !1); }
function Xe(e, n, t) { let r = new f(n, e); return r[Ke] = n, r[Un] = e, t && (r[Wn] = t), r; }
function Jn(e) { return e[Ke]; }
var ie;
function en() { return ie; }
function E(e) { let n = ie; return ie = e, n; }
function Zn(e, n, t) { let r = z(e); if (r && r.providedIn == "root")
    return r.value === void 0 ? r.value = r.factory() : r.value; if (t & 8)
    return null; if (n !== void 0)
    return n; Yn(e, "Injector"); }
var Qn = {}, w = Qn, se = "__NG_DI_FLAG__", ue = class {
    injector;
    constructor(n) { this.injector = n; }
    retrieve(n, t) { let r = H(t) || 0; try {
        return this.injector.get(n, r & 8 ? null : w, r);
    }
    catch (o) {
        if (ee(o))
            return o;
        throw o;
    } }
};
function Kn(e, n = 0) { let t = X(); if (t === void 0)
    throw new f(-203, !1); if (t === null)
    return Zn(e, void 0, n); {
    let r = Xn(n), o = t.retrieve(e, r);
    if (ee(o)) {
        if (r.optional)
            return null;
        throw o;
    }
    return o;
} }
function C(e, n = 0) { return (en() || Kn)(v(e), n); }
function Ir(e) { throw new f(202, !1); }
function h(e, n) { return C(e, H(n)); }
function H(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function Xn(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function ce(e) { let n = []; for (let t = 0; t < e.length; t++) {
    let r = v(e[t]);
    if (Array.isArray(r)) {
        if (r.length === 0)
            throw new f(900, !1);
        let o, i = 0;
        for (let u = 0; u < r.length; u++) {
            let a = r[u], l = et(a);
            typeof l == "number" ? l === -1 ? o = a.token : i |= l : o = a;
        }
        n.push(C(o, i));
    }
    else
        n.push(C(r));
} return n; }
function Er(e, n) { return e[se] = n, e.prototype[se] = n, e; }
function et(e) { return e[se]; }
function G(e, n) { let t = e.hasOwnProperty(Ge); return t ? e[Ge] : null; }
function Dr(e, n, t) { if (e.length !== n.length)
    return !1; for (let r = 0; r < e.length; r++) {
    let o = e[r], i = n[r];
    if (t && (o = t(o), i = t(i)), i !== o)
        return !1;
} return !0; }
function wr(e) { return e.flat(Number.POSITIVE_INFINITY); }
function ve(e, n) { e.forEach(t => Array.isArray(t) ? ve(t, n) : n(t)); }
function Tr(e, n, t) { n >= e.length ? e.push(t) : e.splice(n, 0, t); }
function Nr(e, n) { return n >= e.length - 1 ? e.pop() : e.splice(n, 1)[0]; }
function xr(e, n) { let t = []; for (let r = 0; r < e; r++)
    t.push(n); return t; }
function Cr(e, n, t) { let r = e.length - t; for (; n < r;)
    e[n] = e[n + t], n++; for (; t--;)
    e.pop(); }
function nt(e, n, t, r) { let o = e.length; if (o == n)
    e.push(t, r);
else if (o === 1)
    e.push(r, e[0]), e[0] = t;
else {
    for (o--, e.push(e[o - 1], e[o]); o > n;) {
        let i = o - 2;
        e[o] = e[i], o--;
    }
    e[n] = t, e[n + 1] = r;
} }
function Mr(e, n, t) { let r = nn(e, n); return r >= 0 ? e[r | 1] = t : (r = ~r, nt(e, r, n, t)), r; }
function _r(e, n) { let t = nn(e, n); if (t >= 0)
    return e[t | 1]; }
function nn(e, n) { return tt(e, n, 1); }
function tt(e, n, t) { let r = 0, o = e.length >> t; for (; o !== r;) {
    let i = r + (o - r >> 1), u = e[i << t];
    if (n === u)
        return i << t;
    u > n ? o = i : r = i + 1;
} return ~(o << t); }
var Fr = {}, B = [], Y = new g(""), tn = new g("", -1), rn = new g(""), U = class {
    get(n, t = w) { if (t === w) {
        let o = Xe("", -201);
        throw o.name = "\u0275NotFound", o;
    } return t; }
};
function rt(e) { return e[Gn] || null; }
function Rr(e) { let n = rt(e); if (!n)
    throw new f(915, !1); return n; }
function on(e) { return e[$n] || null; }
function ot(e) { return e[qn] || null; }
function it(e) { return e[Hn] || null; }
function br(e) { let n = on(e) || ot(e) || it(e); return n !== null && n.standalone; }
function sn(e) { return { \u0275providers: e }; }
function st(e) { return sn([{ provide: Y, multi: !0, useValue: e }]); }
function ut(...e) { return { \u0275providers: ct(!0, e), \u0275fromNgModule: !0 }; }
function ct(e, ...n) { let t = [], r = new Set, o, i = u => { t.push(u); }; return ve(n, u => { let a = u; ae(a, i, [], r) && (o ||= [], o.push(a)); }), o !== void 0 && un(o, i), t; }
function un(e, n) { for (let t = 0; t < e.length; t++) {
    let { ngModule: r, providers: o } = e[t];
    ye(o, i => { n(i, r); });
} }
function ae(e, n, t, r) { if (e = v(e), !e)
    return !1; let o = null, i = $e(e), u = !i && on(e); if (!i && !u) {
    let l = e.ngModule;
    if (i = $e(l), i)
        o = l;
    else
        return !1;
}
else {
    if (u && !u.standalone)
        return !1;
    o = e;
} let a = r.has(o); if (u) {
    if (a)
        return !1;
    if (r.add(o), u.dependencies) {
        let l = typeof u.dependencies == "function" ? u.dependencies() : u.dependencies;
        for (let d of l)
            ae(d, n, t, r);
    }
}
else if (i) {
    if (i.imports != null && !a) {
        r.add(o);
        let d;
        try {
            ve(i.imports, D => { ae(D, n, t, r) && (d ||= [], d.push(D)); });
        }
        finally { }
        d !== void 0 && un(d, n);
    }
    if (!a) {
        let d = G(o) || (() => new o);
        n({ provide: o, useFactory: d, deps: B }, o), n({ provide: rn, useValue: o, multi: !0 }, o), n({ provide: Y, useValue: () => C(o), multi: !0 }, o);
    }
    let l = i.providers;
    if (l != null && !a) {
        let d = e;
        ye(l, D => { n(D, d); });
    }
}
else
    return !1; return o !== e && e.providers !== void 0; }
function ye(e, n) { for (let t of e)
    Qe(t) && (t = t.\u0275providers), Array.isArray(t) ? ye(t, n) : n(t); }
var at = c({ provide: String, useValue: c });
function cn(e) { return e !== null && typeof e == "object" && at in e; }
function dt(e) { return !!(e && e.useExisting); }
function lt(e) { return !!(e && e.useFactory); }
function de(e) { return typeof e == "function"; }
function jr(e) { return !!e.useClass; }
var ft = new g(""), q = {}, Ue = {}, re;
function an() { return re === void 0 && (re = new U), re; }
var S = class {
}, W = class extends S {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(n, t, r, o) { super(), this.parent = t, this.source = r, this.scopes = o, fe(n, u => this.processProvider(u)), this.records.set(tn, N(void 0, this)), o.has("environment") && this.records.set(S, N(void 0, this)); let i = this.records.get(ft); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(rn, B, { self: !0 })); }
    retrieve(n, t) { let r = H(t) || 0; try {
        return this.get(n, w, r);
    }
    catch (o) {
        if (Sn(o))
            return o;
        throw o;
    } }
    destroy() { j(this), this._destroyed = !0; let n = T(null); try {
        for (let r of this._ngOnDestroyHooks)
            r.ngOnDestroy();
        let t = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of t)
            r();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), T(n);
    } }
    onDestroy(n) { return j(this), this._onDestroyHooks.push(n), () => this.removeOnDestroy(n); }
    runInContext(n) { j(this); let t = I(this), r = E(void 0), o; try {
        return n();
    }
    finally {
        I(t), E(r);
    } }
    get(n, t = w, r) { if (j(this), n.hasOwnProperty(Be))
        return n[Be](this); let o = H(r), i, u = I(this), a = E(void 0); try {
        if (!(o & 4)) {
            let d = this.records.get(n);
            if (d === void 0) {
                let D = yt(n) && z(n);
                D && this.injectableDefInScope(D) ? d = N(le(n), q) : d = null, this.records.set(n, d);
            }
            if (d != null)
                return this.hydrate(n, d, o);
        }
        let l = o & 2 ? an() : this.parent;
        return t = o & 8 && t === w ? null : t, l.get(n, t);
    }
    catch (l) {
        let d = Jn(l);
        throw d === -200 || d === -201 ? new f(d, null) : l;
    }
    finally {
        E(a), I(u);
    } }
    resolveInjectorInitializers() { let n = T(null), t = I(this), r = E(void 0), o; try {
        let i = this.get(Y, B, { self: !0 });
        for (let u of i)
            u();
    }
    finally {
        I(t), E(r), T(n);
    } }
    toString() { let n = [], t = this.records; for (let r of t.keys())
        n.push(O(r)); return `R3Injector[${n.join(", ")}]`; }
    processProvider(n) { n = v(n); let t = de(n) ? n : v(n && n.provide), r = pt(n); if (!de(n) && n.multi === !0) {
        let o = this.records.get(t);
        o || (o = N(void 0, q, !0), o.factory = () => ce(o.multi), this.records.set(t, o)), t = n, o.multi.push(n);
    } this.records.set(t, r); }
    hydrate(n, t, r) { let o = T(null); try {
        if (t.value === Ue)
            throw zn(O(n));
        return t.value === q && (t.value = Ue, t.value = t.factory(void 0, r)), typeof t.value == "object" && t.value && vt(t.value) && this._ngOnDestroyHooks.add(t.value), t.value;
    }
    finally {
        T(o);
    } }
    injectableDefInScope(n) { if (!n.providedIn)
        return !1; let t = v(n.providedIn); return typeof t == "string" ? t === "any" || this.scopes.has(t) : this.injectorDefTypes.has(t); }
    removeOnDestroy(n) { let t = this._onDestroyHooks.indexOf(n); t !== -1 && this._onDestroyHooks.splice(t, 1); }
};
function le(e) { let n = z(e), t = n !== null ? n.factory : G(e); if (t !== null)
    return t; if (e instanceof g)
    throw new f(204, !1); if (e instanceof Function)
    return ht(e); throw new f(204, !1); }
function ht(e) { if (e.length > 0)
    throw new f(204, !1); let t = Vn(e); return t !== null ? () => t.factory(e) : () => new e; }
function pt(e) { if (cn(e))
    return N(void 0, e.useValue); {
    let n = gt(e);
    return N(n, q);
} }
function gt(e, n, t) { let r; if (de(e)) {
    let o = v(e);
    return G(o) || le(o);
}
else if (cn(e))
    r = () => v(e.useValue);
else if (lt(e))
    r = () => e.useFactory(...ce(e.deps || []));
else if (dt(e))
    r = (o, i) => C(v(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let o = v(e && (e.useClass || e.provide));
    if (mt(e))
        r = () => new o(...ce(e.deps));
    else
        return G(o) || le(o);
} return r; }
function j(e) { if (e.destroyed)
    throw new f(205, !1); }
function N(e, n, t = !1) { return { factory: e, value: n, multi: t ? [] : void 0 }; }
function mt(e) { return !!e.deps; }
function vt(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function yt(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function fe(e, n) { for (let t of e)
    Array.isArray(t) ? fe(t, n) : t && Qe(t) ? fe(t.\u0275providers, n) : n(t); }
function Or(e, n) { let t; e instanceof W ? (j(e), t = e) : t = new ue(e); let r, o = I(t), i = E(void 0); try {
    return n();
}
finally {
    I(o), E(i);
} }
function It() { return en() !== void 0 || X() != null; }
function Sr(e) { if (!It())
    throw new f(-203, !1); }
var Ie = 0, dn = 1, p = 2, he = 3, Lr = 4, Et = 5, Pr = 6, Dt = 7, ln = 8, Ar = 9, fn = 10, kr = 11, Vr = 12, $r = 13, hn = 14, qr = 15, Hr = 16, wt = 17, Gr = 18, Br = 19, Ur = 20, x = 21, Wr = 22, J = 23, Tt = 24, zr = 25, Yr = 26, Jr = 27, Ee = 1, Zr = 6, Qr = 7, Kr = 8, Xr = 9, eo = 10;
function Nt(e) { return Array.isArray(e) && typeof e[Ee] == "object"; }
function pn(e) { return Array.isArray(e) && e[Ee] === !0; }
function no(e) { return (e.flags & 4) !== 0; }
function to(e) { return e.componentOffset > -1; }
function ro(e) { return (e.flags & 1) === 1; }
function oo(e) { return !!e.template; }
function io(e) { return (e[p] & 512) !== 0; }
function so(e) { return (e.type & 16) === 16; }
function uo(e) { return (e[p] & 32) === 32; }
function gn(e) { return (e[p] & 256) === 256; }
var xt = "svg", Ct = "math";
function De(e) { for (; Array.isArray(e);)
    e = e[Ie]; return e; }
function co(e) { for (; Array.isArray(e);) {
    if (typeof e[Ee] == "object")
        return e;
    e = e[Ie];
} return null; }
function ao(e, n) { return De(n[e]); }
function lo(e, n) { return De(n[e.index]); }
function fo(e, n) { let t = e === null ? -1 : e.index; return t !== -1 ? De(n[t]) : null; }
function Mt(e, n) { return e.data[n]; }
function ho(e, n) { return e[n]; }
function po(e, n, t, r) { t >= e.data.length && (e.data[t] = null, e.blueprint[t] = null), n[t] = r; }
function go(e, n) { let t = n[e]; return Nt(t) ? t : t[Ie]; }
function mo(e) { return (e[p] & 4) === 4; }
function mn(e) { return (e[p] & 128) === 128; }
function vo(e) { return pn(e[he]); }
function yo(e, n) { return n == null ? null : e[n]; }
function Io(e) { e[wt] = 0; }
function Eo(e) { e[p] & 1024 || (e[p] |= 1024, mn(e) && Z(e)); }
function _t(e, n) { for (; e > 0;)
    n = n[hn], e--; return n; }
function Ft(e) { return !!(e[p] & 9216 || e[Tt]?.dirty); }
function Do(e) { e[fn].changeDetectionScheduler?.notify(8), e[p] & 64 && (e[p] |= 1024), Ft(e) && Z(e); }
function Z(e) { e[fn].changeDetectionScheduler?.notify(0); let n = We(e); for (; n !== null && !(n[p] & 8192 || (n[p] |= 8192, !mn(n)));)
    n = We(n); }
function Rt(e, n) { if (gn(e))
    throw new f(911, !1); e[x] === null && (e[x] = []), e[x].push(n); }
function bt(e, n) { if (e[x] === null)
    return; let t = e[x].indexOf(n); t !== -1 && e[x].splice(t, 1); }
function We(e) { let n = e[he]; return pn(n) ? n[he] : n; }
function jt(e) { return e[Dt] ??= []; }
function Ot(e) { return e.cleanup ??= []; }
function wo(e, n, t, r) { let o = jt(n); o.push(t), e.firstCreatePass && Ot(e).push(r, o.length - 1); }
var s = { lFrame: In(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var pe = !1;
function To() { return s.lFrame.elementDepthCount; }
function No() { s.lFrame.elementDepthCount++; }
function xo() { s.lFrame.elementDepthCount--; }
function Co() { return s.bindingsEnabled; }
function Mo() { return s.skipHydrationRootTNode !== null; }
function _o(e) { return s.skipHydrationRootTNode === e; }
function Fo() { s.bindingsEnabled = !0; }
function Ro(e) { s.skipHydrationRootTNode = e; }
function bo() { s.bindingsEnabled = !1; }
function jo() { s.skipHydrationRootTNode = null; }
function vn() { return s.lFrame.lView; }
function Oo() { return s.lFrame.tView; }
function So(e) { return s.lFrame.contextLView = e, e[ln]; }
function Lo(e) { return s.lFrame.contextLView = null, e; }
function St() { let e = Lt(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function Lt() { return s.lFrame.currentTNode; }
function Po() { let e = s.lFrame, n = e.currentTNode; return e.isParent ? n : n.parent; }
function Ao(e, n) { let t = s.lFrame; t.currentTNode = e, t.isParent = n; }
function ko() { return s.lFrame.isParent; }
function Vo() { s.lFrame.isParent = !1; }
function $o() { return s.lFrame.contextLView; }
function qo() { return pe; }
function we(e) { let n = pe; return pe = e, n; }
function Ho() { let e = s.lFrame, n = e.bindingRootIndex; return n === -1 && (n = e.bindingRootIndex = e.tView.bindingStartIndex), n; }
function Go() { return s.lFrame.bindingIndex; }
function Bo(e) { return s.lFrame.bindingIndex = e; }
function Uo() { return s.lFrame.bindingIndex++; }
function Wo(e) { let n = s.lFrame, t = n.bindingIndex; return n.bindingIndex = n.bindingIndex + e, t; }
function zo() { return s.lFrame.inI18n; }
function Yo(e) { s.lFrame.inI18n = e; }
function Jo(e, n) { let t = s.lFrame; t.bindingIndex = t.bindingRootIndex = e, Pt(n); }
function Zo() { return s.lFrame.currentDirectiveIndex; }
function Pt(e) { s.lFrame.currentDirectiveIndex = e; }
function Qo(e) { let n = s.lFrame.currentDirectiveIndex; return n === -1 ? null : e[n]; }
function Ko() { return s.lFrame.currentQueryIndex; }
function Xo(e) { s.lFrame.currentQueryIndex = e; }
function At(e) { let n = e[dn]; return n.type === 2 ? n.declTNode : n.type === 1 ? e[Et] : null; }
function ei(e, n, t) { if (t & 4) {
    let o = n, i = e;
    for (; o = o.parent, o === null && !(t & 1);)
        if (o = At(i), o === null || (i = i[hn], o.type & 10))
            break;
    if (o === null)
        return !1;
    n = o, e = i;
} let r = s.lFrame = yn(); return r.currentTNode = n, r.lView = e, !0; }
function ni(e) { let n = yn(), t = e[dn]; s.lFrame = n, n.currentTNode = t.firstChild, n.lView = e, n.tView = t, n.contextLView = e, n.bindingIndex = t.bindingStartIndex, n.inI18n = !1; }
function yn() { let e = s.lFrame, n = e === null ? null : e.child; return n === null ? In(e) : n; }
function In(e) { let n = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = n), n; }
function En() { let e = s.lFrame; return s.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var ti = En;
function ri() { let e = En(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function oi(e) { return (s.lFrame.contextLView = _t(e, s.lFrame.contextLView))[ln]; }
function ii() { return s.lFrame.selectedIndex; }
function si(e) { s.lFrame.selectedIndex = e; }
function ui() { let e = s.lFrame; return Mt(e.tView, e.selectedIndex); }
function ci() { s.lFrame.currentNamespace = xt; }
function ai() { s.lFrame.currentNamespace = Ct; }
function di() { kt(); }
function kt() { s.lFrame.currentNamespace = null; }
function li() { return s.lFrame.currentNamespace; }
var Dn = !0;
function fi() { return Dn; }
function hi(e) { Dn = e; }
function ze(e, n = null, t = null, r) { let o = Vt(e, n, t, r); return o.resolveInjectorInitializers(), o; }
function Vt(e, n = null, t = null, r, o = new Set) { let i = [t || B, ut(e)]; return r = r || (typeof e == "object" ? void 0 : O(e)), new W(i, n || an(), r || null, o); }
var L = class e {
    static THROW_IF_NOT_FOUND = w;
    static NULL = new U;
    static create(n, t) { if (Array.isArray(n))
        return ze({ name: "" }, t, n, ""); {
        let r = n.name ?? "";
        return ze({ name: r }, n.parent, n.providers, r);
    } }
    static \u0275prov = _({ token: e, providedIn: "any", factory: () => C(tn) });
    static __NG_ELEMENT_ID__ = -1;
}, $t = new g(""), F = (() => { class e {
    static __NG_ELEMENT_ID__ = qt;
    static __NG_ENV_ID__ = t => t;
} return e; })(), P = class extends F {
    _lView;
    constructor(n) { super(), this._lView = n; }
    get destroyed() { return gn(this._lView); }
    onDestroy(n) { let t = this._lView; return Rt(t, n), () => bt(t, n); }
};
function qt() { return new P(vn()); }
var M = class {
    _console = console;
    handleError(n) { this._console.error("ERROR", n); }
}, wn = new g("", { providedIn: "root", factory: () => { let e = h(S), n; return t => { e.destroyed && !n ? setTimeout(() => { throw t; }) : (n ??= e.get(M), n.handleError(t)); }; } }), pi = { provide: Y, useValue: () => void h(M), multi: !0 }, Ht = new g("", { providedIn: "root", factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = h($t).defaultView; if (!e)
        return; let n = h(wn), t = i => { n(i.reason), i.preventDefault(); }, r = i => { i.error ? n(i.error) : n(new Error(i.message, { cause: i })), i.preventDefault(); }, o = () => { e.addEventListener("unhandledrejection", t), e.addEventListener("error", r); }; typeof Zone < "u" ? Zone.root.run(o) : o(), h(F).onDestroy(() => { e.removeEventListener("error", r), e.removeEventListener("unhandledrejection", t); }); } });
function gi() { return sn([st(() => void h(Ht))]); }
function Gt(e) { return typeof e == "function" && e[m] !== void 0; }
function mi(e) { return null; }
function k(e, n) { let [t, r, o] = Se(e, n?.equal), i = t, u = i[m]; return i.set = r, i.update = o, i.asReadonly = Q.bind(i), i; }
function Q() { let e = this[m]; if (e.readonlyFn === void 0) {
    let n = () => this();
    n[m] = e, e.readonlyFn = n;
} return e.readonlyFn; }
function vi(e) { return Gt(e) && typeof e.set == "function"; }
function yi(e, n) { if (je() !== null)
    throw new f(-602, !1); }
var Te = (() => { class e {
    view;
    node;
    constructor(t, r) { this.view = t, this.node = r; }
    static __NG_ELEMENT_ID__ = Bt;
} return e; })();
function Bt() { return new Te(vn(), St()); }
var A = class {
}, Ii = new g("", { providedIn: "root", factory: () => !1 });
var Ei = new g(""), Di = new g(""), Ut = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new be(!1);
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new Re(t => { t.next(!1), t.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let t = this.taskId++; return this.pendingTasks.add(t), t; }
    has(t) { return this.pendingTasks.has(t); }
    remove(t) { this.pendingTasks.delete(t), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = _({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Tn = (() => { class e {
    internalPendingTasks = h(Ut);
    scheduler = h(A);
    errorHandler = h(wn);
    add() { let t = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(t) && (this.scheduler.notify(11), this.internalPendingTasks.remove(t)); }; }
    run(t) { let r = this.add(); t().catch(this.errorHandler).finally(r); }
    static \u0275prov = _({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function Nn(...e) { }
var xn = (() => { class e {
    static \u0275prov = _({ token: e, providedIn: "root", factory: () => new ge });
} return e; })(), ge = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(n) { this.enqueue(n), this.schedule(n); }
    schedule(n) { n.dirty && this.dirtyEffectCount++; }
    remove(n) { let t = n.zone, r = this.queues.get(t); r.has(n) && (r.delete(n), n.dirty && this.dirtyEffectCount--); }
    enqueue(n) { let t = n.zone; this.queues.has(t) || this.queues.set(t, new Set); let r = this.queues.get(t); r.has(n) || r.add(n); }
    flush() { for (; this.dirtyEffectCount > 0;) {
        let n = !1;
        for (let [t, r] of this.queues)
            t === null ? n ||= this.flushQueue(r) : n ||= t.run(() => this.flushQueue(r));
        n || (this.dirtyEffectCount = 0);
    } }
    flushQueue(n) { let t = !1; for (let r of n)
        r.dirty && (this.dirtyEffectCount--, t = !0, r.run()); return t; }
};
var Cn = class {
    destroyed = !1;
    listeners = null;
    errorHandler = h(M, { optional: !0 });
    destroyRef = h(F);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(n) { if (this.destroyed)
        throw new f(953, !1); return (this.listeners ??= []).push(n), { unsubscribe: () => { let t = this.listeners?.indexOf(n); t !== void 0 && t !== -1 && this.listeners?.splice(t, 1); } }; }
    emit(n) { if (this.destroyed) {
        console.warn(me(953, !1));
        return;
    } if (this.listeners === null)
        return; let t = b(null); try {
        for (let r of this.listeners)
            try {
                r(n);
            }
            catch (o) {
                this.errorHandler?.handleError(o);
            }
    }
    finally {
        b(t);
    } }
};
function bi(e) { return e.destroyRef; }
function y(e) { return Ae(e); }
function R(e, n) { return Oe(e, n?.equal); }
var Ne = class {
    [m];
    constructor(n) { this[m] = n; }
    destroy() { this[m].destroy(); }
};
function Wt(e, n) { let t = n?.injector ?? h(L), r = n?.manualCleanup !== !0 ? t.get(F) : null, o, i = t.get(Te, null, { optional: !0 }), u = t.get(A); return i !== null ? (o = Jt(i.view, u, e), r instanceof P && r._lView === i.view && (r = null)) : o = Zt(e, t.get(xn), u), o.injector = t, r !== null && (o.onDestroyFn = r.onDestroy(() => o.destroy())), new Ne(o); }
var Rn = $(V({}, ke), { cleanupFns: void 0, zone: null, onDestroyFn: Nn, run() { let e = we(!1); try {
        Ve(this);
    }
    finally {
        we(e);
    } }, cleanup() { if (!this.cleanupFns?.length)
        return; let e = b(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], b(e);
    } } }), zt = $(V({}, Rn), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { ne(this), this.onDestroyFn(), this.cleanup(), this.scheduler.remove(this); } }), Yt = $(V({}, Rn), { consumerMarkedDirty() { this.view[p] |= 8192, Z(this.view), this.notifier.notify(13); }, destroy() { ne(this), this.onDestroyFn(), this.cleanup(), this.view[J]?.delete(this); } });
function Jt(e, n, t) { let r = Object.create(Yt); return r.view = e, r.zone = typeof Zone < "u" ? Zone.current : null, r.notifier = n, r.fn = bn(r, t), e[J] ??= new Set, e[J].add(r), r.consumerMarkedDirty(r), r; }
function Zt(e, n, t) { let r = Object.create(zt); return r.fn = bn(r, e), r.scheduler = n, r.notifier = t, r.zone = typeof Zone < "u" ? Zone.current : null, r.scheduler.add(r), r.notifier.notify(12), r; }
function bn(e, n) { return () => { n(t => (e.cleanupFns ??= []).push(t)); }; }
var Qt = e => e;
function Mn(e, n) { if (typeof e == "function") {
    let t = te(e, Qt, n?.equal);
    return _n(t, n?.debugName);
}
else {
    let t = te(e.source, e.computation, e.equal);
    return _n(t, e.debugName);
} }
function _n(e, n) { let t = e[m], r = e; return r.set = o => Le(t, o), r.update = o => Pe(t, o), r.asReadonly = Q.bind(e), r; }
var jn = !0;
function ji(e) { let n = e.request, t = e.params ?? n ?? (() => null); return new Ce(t, Xt(e), e.defaultValue, e.equal ? Kt(e.equal) : void 0, e.injector ?? h(L), jn); }
var xe = class {
    value;
    constructor(n) { this.value = n, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = Q; }
    isError = R(() => this.status() === "error");
    update(n) { this.set(n(y(this.value))); }
    isLoading = R(() => this.status() === "loading" || this.status() === "reloading");
    isValueDefined = R(() => this.isError() ? !1 : this.value() !== void 0);
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, Ce = class extends xe {
    loaderFn;
    equal;
    pendingTasks;
    state;
    extRequest;
    effectRef;
    pendingController;
    resolvePendingTask = void 0;
    destroyed = !1;
    unregisterOnDestroy;
    constructor(n, t, r, o, i, u = jn) { super(R(() => { let a = this.state().stream?.(); if (!a || this.state().status === "loading" && this.error())
        return r; if (!Me(a)) {
        if (u)
            throw new _e(this.error());
        return r;
    } return a.value; }, { equal: o })), this.loaderFn = t, this.equal = o, this.extRequest = Mn({ source: n, computation: a => ({ request: a, reload: 0 }) }), this.state = Mn({ source: this.extRequest, computation: (a, l) => { let d = a.request === void 0 ? "idle" : "loading"; return l ? { extRequest: a, status: d, previousStatus: Fn(l.value), stream: l.value.extRequest.request === a.request ? l.value.stream : void 0 } : { extRequest: a, status: d, previousStatus: "idle", stream: void 0 }; } }), this.effectRef = Wt(this.loadEffect.bind(this), { injector: i, manualCleanup: !0 }), this.pendingTasks = i.get(Tn), this.unregisterOnDestroy = i.get(F).onDestroy(() => this.destroy()); }
    status = R(() => Fn(this.state()));
    error = R(() => { let n = this.state().stream?.(); return n && !Me(n) ? n.error : void 0; });
    set(n) { if (this.destroyed)
        return; let t = y(this.error), r = y(this.state); if (!t) {
        let o = y(this.value);
        if (r.status === "local" && (this.equal ? this.equal(o, n) : o === n))
            return;
    } this.state.set({ extRequest: r.extRequest, status: "local", previousStatus: "local", stream: k({ value: n }) }), this.abortInProgressLoad(); }
    reload() { let { status: n } = y(this.state); return n === "idle" || n === "loading" ? !1 : (this.extRequest.update(({ request: t, reload: r }) => ({ request: t, reload: r + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return K(this, null, function* () { let n = this.extRequest(), { status: t, previousStatus: r } = y(this.state); if (n.request === void 0)
        return; if (t !== "loading")
        return; this.abortInProgressLoad(); let o = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let u = yield y(() => this.loaderFn({ params: n.request, request: n.request, abortSignal: i, previous: { status: r } }));
        if (i.aborted || y(this.extRequest) !== n)
            return;
        this.state.set({ extRequest: n, status: "resolved", previousStatus: "resolved", stream: u });
    }
    catch (u) {
        if (i.aborted || y(this.extRequest) !== n)
            return;
        this.state.set({ extRequest: n, status: "resolved", previousStatus: "error", stream: k({ error: On(u) }) });
    }
    finally {
        o?.(), o = void 0;
    } }); }
    abortInProgressLoad() { y(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function Kt(e) { return (n, t) => n === void 0 || t === void 0 ? n === t : e(n, t); }
function Xt(e) { return er(e) ? e.stream : n => K(null, null, function* () { try {
    return k({ value: yield e.loader(n) });
}
catch (t) {
    return k({ error: On(t) });
} }); }
function er(e) { return !!e.stream; }
function Fn(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return Me(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function Me(e) { return e.error === void 0; }
function On(e) { return e instanceof Error ? e : new Fe(e); }
var _e = class extends Error {
    constructor(n) { super(n.message, { cause: n }); }
}, Fe = class extends Error {
    constructor(n) { super(String(n), { cause: n }); }
};
export { oe as a, sr as b, ur as c, f as d, me as e, cr as f, c as g, ar as h, O as i, dr as j, lr as k, Ye as l, v as m, An as n, fr as o, _ as p, hr as q, pr as r, z as s, gr as t, Ze as u, qe as v, g as w, mr as x, Qe as y, $n as z, qn as A, Hn as B, Gn as C, Ge as D, vr as E, Bn as F, yr as G, zn as H, Yn as I, E as J, Zn as K, C as L, Ir as M, h as N, H as O, Er as P, G as Q, Dr as R, wr as S, Tr as T, Nr as U, xr as V, Cr as W, nt as X, Mr as Y, _r as Z, nn as _, Fr as $, B as aa, Y as ba, tn as ca, rt as da, Rr as ea, on as fa, ot as ga, it as ha, br as ia, sn as ja, st as ka, ut as la, ct as ma, de as na, jr as oa, ft as pa, an as qa, S as ra, W as sa, gt as ta, Or as ua, It as va, Sr as wa, Ie as xa, dn as ya, p as za, he as Aa, Lr as Ba, Et as Ca, Pr as Da, Dt as Ea, ln as Fa, Ar as Ga, fn as Ha, kr as Ia, Vr as Ja, $r as Ka, hn as La, qr as Ma, Hr as Na, wt as Oa, Gr as Pa, Br as Qa, Ur as Ra, x as Sa, Wr as Ta, J as Ua, Tt as Va, zr as Wa, Yr as Xa, Jr as Ya, Zr as Za, Qr as _a, Kr as $a, Xr as ab, eo as bb, Nt as cb, pn as db, no as eb, to as fb, ro as gb, oo as hb, io as ib, so as jb, uo as kb, gn as lb, xt as mb, Ct as nb, De as ob, co as pb, ao as qb, lo as rb, fo as sb, Mt as tb, ho as ub, po as vb, go as wb, mo as xb, mn as yb, vo as zb, yo as Ab, Io as Bb, Eo as Cb, _t as Db, Ft as Eb, Do as Fb, Z as Gb, Rt as Hb, bt as Ib, We as Jb, jt as Kb, Ot as Lb, wo as Mb, To as Nb, No as Ob, xo as Pb, Co as Qb, Mo as Rb, _o as Sb, Fo as Tb, Ro as Ub, bo as Vb, jo as Wb, vn as Xb, Oo as Yb, So as Zb, Lo as _b, St as $b, Lt as ac, Po as bc, Ao as cc, ko as dc, Vo as ec, $o as fc, qo as gc, we as hc, Ho as ic, Go as jc, Bo as kc, Uo as lc, Wo as mc, zo as nc, Yo as oc, Jo as pc, Zo as qc, Pt as rc, Qo as sc, Ko as tc, Xo as uc, ei as vc, ni as wc, ti as xc, ri as yc, oi as zc, ii as Ac, si as Bc, ui as Cc, ci as Dc, ai as Ec, di as Fc, li as Gc, fi as Hc, hi as Ic, ze as Jc, Vt as Kc, L as Lc, $t as Mc, F as Nc, M as Oc, wn as Pc, pi as Qc, gi as Rc, Gt as Sc, mi as Tc, k as Uc, Q as Vc, vi as Wc, yi as Xc, Te as Yc, A as Zc, Ii as _c, Ei as $c, Di as ad, Ut as bd, Tn as cd, Nn as dd, xn as ed, Cn as fd, bi as gd, y as hd, R as id, Wt as jd, Mn as kd, ji as ld, Ce as md, On as nd };
/*! Bundled license information:

@angular/core/fesm2022/root_effect_scheduler.mjs:
@angular/core/fesm2022/resource.mjs:
  (**
   * @license Angular v20.3.7
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
