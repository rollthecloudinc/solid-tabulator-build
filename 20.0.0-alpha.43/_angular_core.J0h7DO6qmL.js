import { a as hT } from "@nf-internal/chunk-OK5CLTU6";
import { $ as Me, $a as wo, $b as M, $c as _c, A as Qr, Aa as z, Ab as ce, Ac as re, B as Zr, Ba as se, Bb as ec, Bc as Ct, C as Ua, Ca as ae, Cb as ii, Cc as we, D as gt, Da as ne, Db as np, Dc as Ec, E as kt, Ea as Pt, Eb as Ao, Ec as Ic, F as N, Fa as F, Fb as si, Fc as Dc, G as Ie, Ga as O, Gb as ai, Gc as Cc, H as Uf, Ha as Ze, Hb as ci, Hc as ko, I as $a, Ia as T, Ib as tc, Ic as xe, J as xt, Ja as yt, Jb as Ht, Jc as tT, K as $f, Ka as Mo, Kb as op, Kc as hp, L as Re, La as No, Lb as rp, Lc as Ce, M as Yr, Ma as Z, Mb as ip, Mc as nT, N as D, Na as Ye, Nb as sp, Nc as hn, O as Ga, Oa as un, Ob as ap, Oc as hi, P as cn, Pa as He, Pb as nc, Pc as Tt, Q as Kr, Qa as dn, Qb as li, Qc as Tc, R as Gf, Ra as Ya, Rb as Ro, Rc as oT, S as Oe, Sa as Ka, Sb as oc, Sc as gp, T as qa, Ta as ri, Tb as rc, Tc as rT, U as Io, Ua as _o, Ub as cp, Uc as Mc, V as Do, Va as _e, Vb as ic, Vc as mp, W as Wa, Wa as Lt, Wb as sc, Wc as Nc, X as qf, Xa as Ke, Xb as g, Xc as iT, Y as Co, Ya as E, Yb as _, Yc as gi, Z as Jr, Za as De, Zb as ac, Zc as Je, _ as Xr, _a as ke, _b as cc, _c as gn, a as $C, aa as L, ab as Ft, ac as lp, ad as mi, b as GC, ba as mt, bb as V, bc as pn, bd as Mt, c as Gr, ca as KC, cb as K, cc as Be, cd as wc, d as w, da as ln, db as J, dc as lc, dd as xo, e as Hf, ea as ei, eb as Ja, ec as uc, ed as Sc, f as Ee, fa as q, fb as me, fc as dc, fd as bc, g as Ha, ga as Ne, gb as fn, gc as fc, gd as sT, h as Vf, ha as je, hb as ve, hc as pc, hd as aT, i as sn, ia as To, ib as Ve, ic as de, id as cT, j as qr, ja as Qe, jb as Xa, jc as Ue, jd as lT, k as qC, ka as JC, kb as Zf, kc as hc, kd as uT, l as Va, la as XC, lb as Et, lc as fe, ld as dT, m as G, ma as za, mb as Yf, mc as $e, md as fT, n as Wr, na as ti, nb as Kf, nc as up, nd as pT, o as Bf, oa as Wf, ob as k, oc as gc, p as B, pa as zf, pb as So, pc as dp, q as WC, qa as ni, qb as jt, qc as fp, r as Eo, ra as vt, rb as oe, rc as mc, s as zC, sa as Qa, sb as Jf, sc as ui, t as QC, ta as Qf, tb as It, tc as di, u as zr, ua as oi, ub as Dt, uc as Oo, v as Ba, va as Za, vb as bo, vc, w as S, wa as eT, wb as ue, wc as fi, x as ZC, xa as H, xb as Xf, xc as yc, y as YC, ya as v, yb as ep, yc as pi, z as an, za as b, zb as tp, zc as pp } from "@nf-internal/chunk-KNETEJBN";
import { b as UC } from "@nf-internal/chunk-CTQVN4C2";
import { B as Fa, E as ja, a as ht, b as R, c as Lf, f as La, g as Br, n as vo, p as Ur, r as $r, s as yo, w as Ff, x as jf } from "@nf-internal/chunk-CFUNUXQQ";
import "@nf-internal/chunk-VZR6KEPQ";
import { b as Hr, k as Vr } from "@nf-internal/chunk-STIBVO4O";
import { a as W, b as Fe, h as mo } from "@nf-internal/chunk-FJYW2LMB";
import { setActiveConsumer as vp } from "@angular/core/primitives/signals";
import { map as gT } from "rxjs/operators";
var mn = { JSACTION: "jsaction" };
function qe(e) { return { toString: e }.toString(); }
var En = "__annotations__", In = "__parameters__", Dn = "__prop__metadata__";
function fr(e, t, n, o, r) { return qe(() => { let i = ru(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(En) ? u[En] : Object.defineProperty(u, En, { value: [] })[En]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function ru(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function Qn(e, t, n) { return qe(() => { let o = ru(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(In) ? c[In] : Object.defineProperty(c, In, { value: [] })[In]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function it(e, t, n, o) { return qe(() => { let r = ru(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(Dn) ? d[Dn] : Object.defineProperty(d, Dn, { value: {} })[Dn]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var bh = cn(Qn("Inject", e => ({ token: e })), -1), Ah = cn(Qn("Optional"), 8), Rh = cn(Qn("Self"), 2), Oh = cn(Qn("SkipSelf"), 4), kh = cn(Qn("Host"), 1);
function ee(e) { let t = Ee.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var yp = { \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: Eo, \u0275\u0275inject: Re, \u0275\u0275invalidFactoryDep: Yr, resolveForwardRef: G }, xh = Function;
function Lo(e) { return typeof e == "function"; }
var mT = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, vT = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, yT = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, ET = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function IT(e) { return mT.test(e) || ET.test(e) || vT.test(e) && !yT.test(e); }
var Fi = class {
    _reflect;
    constructor(t) { this._reflect = t || Ee.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = Do(n.length) : o = Do(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (IT(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && Ac(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(In) && t[In], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : Do(t.length); }
    parameters(t) { if (!Lo(t))
        return []; let n = vi(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? Ac(t.decorators) : t.hasOwnProperty(En) ? t[En] : null; }
    annotations(t) { if (!Lo(t))
        return []; let n = vi(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = Ac(o[i]); }), r;
    } return t.hasOwnProperty(Dn) ? t[Dn] : null; }
    propMetadata(t) { if (!Lo(t))
        return {}; let n = vi(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return Lo(t) ? this._ownPropMetadata(t, vi(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof xh && n in t.prototype; }
};
function Ac(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function vi(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
var ji = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
};
function Ph(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var Lh = (() => { let e = () => Fh; return e.ngInherit = !0, e; })();
function Fh(e) { return e.type.prototype.ngOnChanges && (e.setInput = CT), DT; }
function DT() { let e = Hh(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === Me)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function CT(e, t, n, o, r) { let i = this.declaredInputs[o], s = Hh(e) || TT(e, { previous: Me, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new ji(l && l.currentValue, n, c === Me), Ph(e, t, r, n); }
var jh = "__ngSimpleChanges__";
function Hh(e) { return e[jh] || null; }
function TT(e, t) { return e[jh] = t; }
var Ep = [];
var x = function (e, t = null, n) { for (let o = 0; o < Ep.length; o++) {
    let r = Ep[o];
    r(e, t, n);
} };
function MT(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = Fh(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function Vh(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function wi(e, t, n) { Bh(e, t, 3, n); }
function Si(e, t, n, o) { (e[b] & 3) === n && Bh(e, t, n, o); }
function Rc(e, t) { let n = e[b]; (n & 3) === t && (n &= 16383, n += 1, e[b] = n); }
function Bh(e, t, n, o) { let r = o !== void 0 ? e[un] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[un] += 65536), (a < i || i == -1) && (NT(e, n, t, c), e[un] = (e[un] & 4294901760) + c + 2), c++; }
function Ip(e, t) { x(4, e, t); let n = R(null); try {
    t.call(e);
}
finally {
    R(n), x(5, e, t);
} }
function NT(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[b] >> 14 < e[un] >> 16 && (e[b] & 3) === t && (e[b] += 16384, Ip(a, i)) : Ip(a, i); }
var _n = -1, qt = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, o, r) { this.factory = t, this.name = r, this.canSeeViewProviders = n, this.injectImpl = o; }
};
function hs(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function Uh(e) { return !!(e.type & 128); }
function _T(e) { return (e.flags & 8) !== 0; }
function wT(e) { return (e.flags & 16) !== 0; }
function ST(e, t, n) { let o = 0; for (; o < n.length;) {
    let r = n[o];
    if (typeof r == "number") {
        if (r !== 0)
            break;
        o++;
        let i = n[o++], s = n[o++], a = n[o++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = r, s = n[++o];
        bT(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function $h(e) { return e === 3 || e === 4 || e === 6; }
function bT(e) { return e.charCodeAt(0) === 64; }
function xn(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? Dp(e, n, r, null, t[++o]) : Dp(e, n, r, null, null));
        }
    } return e; }
function Dp(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        r !== null && (e[i + 1] = r);
        return;
    }
    i++, r !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r); }
function Gh(e) { return e !== _n; }
function Hi(e) { return e & 32767; }
function AT(e) { return e >> 16; }
function Vi(e, t) { let n = AT(e), o = t; for (; n > 0;)
    o = o[No], n--; return o; }
var nl = !0;
function Bi(e) { let t = nl; return nl = e, t; }
var RT = 256, qh = RT - 1, Wh = 5, OT = 0, Ge = {};
function kT(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(kt) && (o = n[kt]), o == null && (o = n[kt] = OT++); let r = o & qh, i = 1 << r; t.data[e + (r >> Wh)] |= i; }
function Ui(e, t) { let n = zh(e, t); if (n !== -1)
    return n; let o = t[v]; o.firstCreatePass && (e.injectorIndex = t.length, Oc(o.data, e), Oc(t, null), Oc(o.blueprint, null)); let r = iu(e, t), i = e.injectorIndex; if (Gh(r)) {
    let s = Hi(r), a = Vi(r, t), c = a[v].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function Oc(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function zh(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function iu(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = Xh(r), o === null)
        return _n;
    if (n++, r = r[No], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return _n; }
function ol(e, t, n) { kT(e, t, n); }
function xT(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if ($h(i))
            break;
        if (i === 0)
            r = r + 2;
        else if (typeof i == "number")
            for (r++; r < o && typeof n[r] == "string";)
                r++;
        else {
            if (i === t)
                return n[r + 1];
            r = r + 2;
        }
    }
} return null; }
function Qh(e, t, n) { if (n & 8 || e !== void 0)
    return e; $a(t, "NodeInjector"); }
function Zh(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[O], i = xt(void 0);
    try {
        return r ? r.get(t, o, n & 8) : $f(t, o, n & 8);
    }
    finally {
        xt(i);
    }
} return Qh(o, t, n); }
function Yh(e, t, n, o = 0, r) { if (e !== null) {
    if (t[b] & 2048 && !(o & 2)) {
        let s = jT(e, t, n, o, Ge);
        if (s !== Ge)
            return s;
    }
    let i = Kh(e, t, n, o, Ge);
    if (i !== Ge)
        return i;
} return Zh(t, n, o, r); }
function Kh(e, t, n, o, r) { let i = LT(n); if (typeof i == "function") {
    if (!vc(t, e, o))
        return o & 1 ? Qh(r, n, o) : Zh(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            $a(n);
        else
            return s;
    }
    finally {
        yc();
    }
}
else if (typeof i == "number") {
    let s = null, a = zh(e, t), c = _n, l = o & 1 ? t[Z][ae] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? iu(e, t) : t[a + 8], c === _n || !Tp(o, !1) ? a = -1 : (s = t[v], a = Hi(c), t = Vi(c, t))); a !== -1;) {
        let u = t[v];
        if (Cp(i, a, u.data)) {
            let d = PT(a, t, n, s, o, l);
            if (d !== Ge)
                return d;
        }
        c = t[a + 8], c !== _n && Tp(o, t[v].data[a + 8] === l) && Cp(i, a, t) ? (s = u, a = Hi(c), t = Vi(c, t)) : a = -1;
    }
} return r; }
function PT(e, t, n, o, r, i) { let s = t[v], a = s.data[e + 8], c = o == null ? me(a) && nl : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = bi(a, s, n, c, l); return u !== null ? Yo(t, s, u, a, r) : Ge; }
function bi(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && ve(p) && p.type === n)
        return c;
} return null; }
function Yo(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof qt) {
    let a = i;
    if (a.resolving) {
        let p = Ie(s[n]);
        throw Uf(p);
    }
    let c = Bi(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? xt(a.injectImpl) : null, f = vc(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && MT(n, s[n], t);
    }
    finally {
        d !== null && xt(d), Bi(c), a.resolving = !1, yc();
    }
} return i; }
function LT(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(kt) ? e[kt] : void 0; return typeof t == "number" ? t >= 0 ? t & qh : FT : t; }
function Cp(e, t, n) { let o = 1 << e; return !!(n[t + (e >> Wh)] & o); }
function Tp(e, t) { return !(e & 2) && !(e & 1 && t); }
var _t = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return Yh(this._tNode, this._lView, t, Ga(o), n); }
};
function FT() { return new _t(M(), g()); }
function Jh(e) { return qe(() => { let t = e.prototype.constructor, n = t[gt] || rl(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[gt] || rl(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function rl(e) { return Wr(e) ? () => { let t = rl(G(e)); return t && t(); } : Kr(e); }
function jT(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[b] & 2048 && !Ve(s);) {
    let a = Kh(i, s, n, o | 2, Ge);
    if (a !== Ge)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[Ya];
        if (l) {
            let u = l.get(n, Ge, o);
            if (u !== Ge)
                return u;
        }
        c = Xh(s), s = s[No];
    }
    i = c;
} return r; }
function Xh(e) { let t = e[v], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[ae] : null; }
function gs(e) { return xT(M(), e); }
var eg = Qn("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => gs(e) })), Mp = null;
function su() { return Mp = Mp || new Fi; }
function ms(e) { return tg(su().parameters(e)); }
function tg(e) { return e.map(t => HT(t)); }
function HT(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof Ah || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof Oh || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof Rh || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof kh || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof bh)
            t.token = o.token;
        else if (o instanceof eg) {
            if (o.attributeName === void 0)
                throw new w(204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function VT(e, t) { let n = null, o = null; e.hasOwnProperty(zr) || Object.defineProperty(e, zr, { get: () => (n === null && (n = ee({ usage: 0, kind: "injectable", type: e }).compileInjectable(yp, `ng:///${e.name}/\u0275prov.js`, GT(e, t))), n) }), e.hasOwnProperty(gt) || Object.defineProperty(e, gt, { get: () => { if (o === null) {
        let r = ee({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(yp, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: ms(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var BT = Ha({ provide: String, useValue: Ha });
function Np(e) { return e.useClass !== void 0; }
function UT(e) { return BT in e; }
function _p(e) { return e.useFactory !== void 0; }
function $T(e) { return e.useExisting !== void 0; }
function GT(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (Np(n) || _p(n)) && n.deps !== void 0 && (o.deps = tg(n.deps)), Np(n) ? o.useClass = n.useClass : UT(n) ? o.useValue = n.useValue : _p(n) ? o.useFactory = n.useFactory : $T(n) && (o.useExisting = n.useExisting), o; }
var qT = fr("Injectable", void 0, void 0, void 0, (e, t) => VT(e, t));
function WT() { return Zn(M(), g()); }
function Zn(e, t) { return new pr(oe(e, t)); }
var pr = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = WT;
} return e; })();
function ng(e) { return e instanceof pr ? e.nativeElement : e; }
function zT() { return this._results[Symbol.iterator](); }
var $i = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new Vr; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let o = Oe(t); (this._changesDetected = !Gf(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = zT;
}, Yn = "ngSkipHydration", QT = "ngskiphydration";
function au(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === QT)
        return !0;
} return !1; }
function og(e) { return e.hasAttribute(Yn); }
function Ko(e) { return (e.flags & 128) === 128; }
function Kn(e) { if (Ko(e))
    return !0; let t = e.parent; for (; t;) {
    if (Ko(e) || au(t))
        return !0;
    t = t.parent;
} return !1; }
function rg(e) { return Ko(e) || au(e) || Kn(e); }
var vs = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e; })(vs || {}), ys = new Map, ZT = 0;
function YT() { return ZT++; }
function KT(e) { ys.set(e[dn], e); }
function ig(e) { return ys.get(e) || null; }
function il(e) { ys.delete(e[dn]); }
function JT() { return ys; }
var Gi = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return ig(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function ye(e) { let t = Ai(e); if (t) {
    if (K(t)) {
        let n = t, o, r, i;
        if (ag(e)) {
            if (o = tM(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (XT(e)) {
            if (o = nM(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = cg(o, n);
        }
        else if (o = Sp(n, e), o == -1)
            return null;
        let s = k(n[o]), a = Ai(s), c = a && !Array.isArray(a) ? a : wp(n, o, s);
        if (r && c.component === void 0 && (c.component = r, Se(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                Se(i[l], c);
        }
        Se(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = Ai(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = Sp(i, n);
            if (s >= 0) {
                let a = k(i[s]), c = wp(i, s, a);
                Se(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function wp(e, t, n) { return new Gi(e[dn], t, n); }
var sl = "__ngContext__";
function Se(e, t) { K(t) ? (e[sl] = t[dn], KT(t)) : e[sl] = t; }
function Ai(e) { let t = e[sl]; return typeof t == "number" ? ig(t) : t || null; }
function sg(e) { let t = Ai(e); return t ? K(t) ? t : t.lView : null; }
function ag(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function XT(e) { return e && e.constructor && e.constructor.\u0275dir; }
function Sp(e, t) { let n = e[v]; for (let o = E; o < n.bindingStartIndex; o++)
    if (k(e[o]) === t)
        return o; return -1; }
function eM(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function tM(e, t) { let n = e[v].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (ue(r, e)[F] === t)
            return r;
    }
else if (ue(E, e)[F] === t)
    return E; return -1; }
function nM(e, t) { let n = e[v].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = eM(n);
} return -1; }
function cg(e, t) { let n = t[v].data[e]; if (n.directiveStart === 0)
    return L; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    ag(i) || o.push(i);
} return o; }
function oM(e, t) { let n = t[v].data[e]; return me(n) ? t[n.directiveStart + n.componentOffset] : null; }
function rM(e, t) { let n = e[v].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function lg(e) { return dg(e[yt]); }
function ug(e) { return dg(e[se]); }
function dg(e) { for (; e !== null && !J(e);)
    e = e[se]; return e; }
function bp(e) { let t = ye(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = oM(t.nodeIndex, n);
} return t.component; }
function iM(e) { gM(e); let t = ye(e), n = t ? t.lView : null; return n === null ? null : n[F]; }
function sM(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[v].type === 2 && (o = Ht(n));)
    n = o; return Ve(n) ? null : n[F]; }
function aM(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return Ce.NULL; let o = n[v].data[t.nodeIndex]; return new _t(o, n); }
function cM(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[v], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    hM(l) && (l = l.type), i.push(l);
} return i; }
function lM(e) { if (e instanceof Text)
    return []; let t = ye(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[v], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = cg(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var fg = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(fg || {}), pg = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(pg || {}), hg = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(hg || {});
function uM(e) { let t = ye(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = rM(n, t.nodeIndex);
} return t.localRefs || {}; }
function dM(e) { return ye(e).native; }
function fM(e) { let t = ye(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[v], r = n[Pt], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = k(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", m = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: m, type: h });
        }
    } return s.sort(pM), s; }
function pM(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function hM(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function gM(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var al;
function mM(e) { al = e; }
function st() { if (al !== void 0)
    return al; if (typeof document < "u")
    return document; throw new w(210, !1); }
var at = new S("", { providedIn: "root", factory: () => vM }), vM = "ng", cu = new S(""), yM = new S("", { providedIn: "platform", factory: () => "unknown" }), EM = new S(""), IM = new S(""), DM = new S("", { providedIn: "root", factory: () => st().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), gg = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, CM = new S("", { providedIn: "root", factory: () => gg });
function TM(e) { return e; }
function MM() { let e = new Xt; return (typeof ngServerMode > "u" || !ngServerMode) && (e.store = mg(st(), D(at))), e; }
var Xt = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: MM });
    store = {};
    onSerializeCallbacks = {};
    get(n, o) { return this.store[n] !== void 0 ? this.store[n] : o; }
    set(n, o) { this.store[n] = o; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, o) { this.onSerializeCallbacks[n] = o; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (o) {
                console.warn("Exception in onSerialize callback: ", o);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C"); }
} return e; })();
function mg(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var lu = "h", uu = "b", vg = "f", yg = "n", hr = "e", Es = "t", Jn = "c", gr = "x", nt = "r", Is = "i", mr = "n", Xn = "d", Ds = "l", Cs = "di", vr = "s", du = "p", Ts = "t", en = new S(""), Eg = !1, fu = new S("", { providedIn: "root", factory: () => Eg }), pu = new S(""), Ms = new S(""), hu = !1, gu = new S(""), yr = new S("", { providedIn: "root", factory: () => new Map }), NM = new S("");
var qi = { passive: !0, capture: !0 }, kc = new WeakMap, xc = new WeakMap, Cn = new WeakMap, Wi = ["click", "keydown"], zi = ["mouseenter", "mouseover", "focusin"], vn = null, Pc = 0, Jo = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function Ig(e, t) { let n = xc.get(e); if (!n) {
    n = new Jo, xc.set(e, n);
    for (let o of Wi)
        e.addEventListener(o, n.listener, qi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    xc.delete(e);
    for (let i of Wi)
        e.removeEventListener(i, r, qi);
} }; }
function Dg(e, t) { let n = kc.get(e); if (!n) {
    n = new Jo, kc.set(e, n);
    for (let o of zi)
        e.addEventListener(o, n.listener, qi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of zi)
        e.removeEventListener(i, r, qi);
    kc.delete(e);
} }; }
function _M() { return new IntersectionObserver(e => { for (let t of e)
    t.isIntersecting && Cn.has(t.target) && Cn.get(t.target).listener(); }); }
function wM(e, t, n) { let o = Cn.get(e); return vn = vn || n(), o || (o = new Jo, vn.observe(e), Cn.set(e, o), Pc++), o.callbacks.add(t), () => { Cn.has(e) && (o.callbacks.delete(t), o.callbacks.size === 0 && (vn?.unobserve(e), Cn.delete(e), Pc--), Pc === 0 && (vn?.disconnect(), vn = null)); }; }
var eo = "ngb";
function mu(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(mn.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(mn.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(eo, i); }
var Cg = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, vu = (e, t) => { let n = e, o = n.getAttribute(eo) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function SM(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(yu);
} }
var yu = e => { e.removeAttribute(mn.JSACTION), e.removeAttribute(eo), e.__jsaction_fns = void 0; }, Eu = new S("", { providedIn: "root", factory: () => ({}) });
function Iu(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let o of n)
        o(e); }
var cl = new Map;
function Tg(e, t) { return cl.set(e, t), () => cl.delete(e); }
var Ap = !1, Mg = (e, t, n, o) => { };
function bM(e, t, n, o) { Mg(e, t, n, o); }
function Ng() { Ap || (Mg = (e, t, n, o) => { let r = e[O].get(at); cl.get(r)?.(t, n, o); }, Ap = !0); }
var ct = new S(""), _g = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = D(yr);
    contract = D(Eu);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { SM(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = B({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function to(e) { return (e.flags & 32) === 32; }
var wg = "__nghData__", Ns = wg, Sg = "__nghDeferData__", _s = Sg;
function AM(e) { return e === wg || e === Sg; }
var wn = "ngh", bg = "nghm", Ag = () => null;
function RM(e, t, n = !1) { let o = e.getAttribute(wn); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(Xt, null, { optional: !0 });
    u !== null && (c = u.get(Ns, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, ws(l, 0, e.nextSibling)), a ? e.setAttribute(wn, a) : e.removeAttribute(wn), l; }
function Rg() { Ag = RM; }
function Og(e, t, n = !1) { return Ag(e, t, n); }
function Du(e) { let t = e._lView; return t[v].type === 2 ? null : (Ve(t) && (t = t[E]), t); }
function OM(e) { return e.textContent?.replace(/\s/gm, ""); }
function kM(e) { let t = st(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = OM(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var kg = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(kg || {}), xM = "__ngDebugHydrationInfo__";
function PM(e) { return e[xM] ?? null; }
function ws(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function ll(e, t) { return e.segmentHeads?.[t] ?? null; }
function Er(e) { return e.get(gu, !1, { optional: !0 }); }
var LM = !1;
function FM() { LM = !1; }
function xg(e, t) { let n = e.data, o = n[hr]?.[t] ?? null; return o === null && n[Jn]?.[t] && (o = Cu(e, t)), o; }
function jM(e, t) { return e.data[hr]?.[t] !== void 0; }
function Pg(e, t) { return e.data[Jn]?.[t] ?? null; }
function Cu(e, t) { let n = Pg(e, t) ?? [], o = 0; for (let r of n)
    o += r[nt] * (r[gr] ?? 1); return o; }
function Lg(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[Xn];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function Ss(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[Xn];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!Lg(e)?.has(t); }
function bs(e, t) { let n = e[ne]; return n !== null && !Ro() && !to(t) && !Ss(n, t.index - E); }
function Tu(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function Fg(e) { let t = []; return e !== null && (e.has(4) && t.push(...zi), e.has(3) && t.push(...Wi)), t; }
function HM(e, t) { let n = t.get(ct), r = t.get(Xt).get(_s, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][du];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function VM(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [zi.join(":;"), Wi.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function jg(e, t) { let n = VM(e), o = t.get(yr); for (let r of n)
    vu(r, o); }
var Hg = () => ({});
function BM(e) { let t = e.get(Xt, null, { optional: !0 }); return t !== null ? t.get(_s, {}) : {}; }
function Vg() { Hg = BM; }
function UM(e) { return Hg(e); }
function $M(e) { return typeof e == "object" && e.trigger === 5; }
function GM(e) { return e[Ts]?.find(n => $M(n))?.delay ?? null; }
function Lc(e, t) { return e[Ts]?.includes(t) ?? !1; }
function qM(e) { return { data: e, hydrate: { idle: Lc(e, 0), immediate: Lc(e, 1), timer: GM(e), viewport: Lc(e, 2) } }; }
function Bg(e) { let t = UM(e), n = new Map; for (let o in t)
    n.set(o, qM(t[o])); return n; }
function Fc(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === bg; }
function Rp(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function Ug(e) { for (let o of e.body.childNodes)
    if (Fc(o))
        return; let t = Rp(e.body.previousSibling); if (Fc(t))
    return; let n = Rp(e.head.lastChild); if (!Fc(n))
    throw new w(-507, !1); }
function $g(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = R(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                Oo(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        R(o);
    }
} }
function ul(e, t, n) { Oo(0); let o = R(null); try {
    t(e, n);
}
finally {
    R(o);
} }
function Mu(e, t, n) { if (Ja(t)) {
    let o = R(null);
    try {
        let r = t.directiveStart, i = t.directiveEnd;
        for (let s = r; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        R(o);
    }
} }
var ot = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e; })(ot || {}), yi;
function Gg() { if (yi === void 0 && (yi = null, Ee.trustedTypes))
    try {
        yi = Ee.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return yi; }
function no(e) { return Gg()?.createHTML(e) || e; }
function WM(e) { return Gg()?.createScriptURL(e) || e; }
var Ei;
function Nu() { if (Ei === void 0 && (Ei = null, Ee.trustedTypes))
    try {
        Ei = Ee.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return Ei; }
function Op(e) { return Nu()?.createHTML(e) || e; }
function kp(e) { return Nu()?.createScript(e) || e; }
function xp(e) { return Nu()?.createScriptURL(e) || e; }
var rt = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Gr})`; }
}, dl = class extends rt {
    getTypeName() { return "HTML"; }
}, fl = class extends rt {
    getTypeName() { return "Style"; }
}, pl = class extends rt {
    getTypeName() { return "Script"; }
}, hl = class extends rt {
    getTypeName() { return "URL"; }
}, gl = class extends rt {
    getTypeName() { return "ResourceURL"; }
};
function lt(e) { return e instanceof rt ? e.changingThisBreaksApplicationSecurity : e; }
function oo(e, t) { let n = qg(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Gr})`);
} return n === t; }
function qg(e) { return e instanceof rt && e.getTypeName() || null; }
function zM(e) { return new dl(e); }
function QM(e) { return new fl(e); }
function ZM(e) { return new pl(e); }
function YM(e) { return new hl(e); }
function KM(e) { return new gl(e); }
function Wg(e) { let t = new vl(e); return JM() ? new ml(t) : t; }
var ml = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(no(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, vl = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = no(t), n; }
};
function JM() { try {
    return !!new window.DOMParser().parseFromString(no(""), "text/html");
}
catch {
    return !1;
} }
var XM = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function As(e) { return e = String(e), e.match(XM) ? e : "unsafe:" + e; }
function ut(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function Ir(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var zg = ut("area,br,col,hr,img,wbr"), Qg = ut("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), Zg = ut("rp,rt"), eN = Ir(Zg, Qg), tN = Ir(Qg, ut("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), nN = Ir(Zg, ut("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), yl = Ir(zg, tN, nN, eN), _u = ut("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), oN = ut("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), rN = ut("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), Yg = Ir(_u, oN, rN), iN = ut("script,style,template"), El = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = cN(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = aN(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = Pp(t).toLowerCase(); if (!yl.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !iN.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!Yg.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        _u[a] && (c = As(c)), this.buf.push(" ", s, '="', Lp(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = Pp(t).toLowerCase(); yl.hasOwnProperty(n) && !zg.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(Lp(t)); }
};
function sN(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function aN(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw Kg(t); return t; }
function cN(e) { let t = e.firstChild; if (t && sN(e, t))
    throw Kg(t); return t; }
function Pp(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function Kg(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var lN = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, uN = /([^\#-~ |!])/g;
function Lp(e) { return e.replace(/&/g, "&amp;").replace(lN, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(uN, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var Ii;
function Jg(e, t) { let n = null; try {
    Ii = Ii || Wg(e);
    let o = t ? String(t) : "";
    n = Ii.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = Ii.getInertBodyElement(o);
    } while (o !== i);
    let a = new El().sanitizeChildren(Il(n) || n);
    return no(a);
}
finally {
    if (n) {
        let o = Il(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function Il(e) { return "content" in e && dN(e) ? e.content : null; }
function dN(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var tn = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(tn || {});
function Xg(e) { let t = Dr(); return t ? Op(t.sanitize(tn.HTML, e) || "") : oo(e, "HTML") ? Op(lt(e)) : Jg(st(), N(e)); }
function em(e) { let t = Dr(); return t ? t.sanitize(tn.STYLE, e) || "" : oo(e, "Style") ? lt(e) : N(e); }
function wu(e) { let t = Dr(); return t ? t.sanitize(tn.URL, e) || "" : oo(e, "URL") ? lt(e) : As(N(e)); }
function Su(e) { let t = Dr(); if (t)
    return xp(t.sanitize(tn.RESOURCE_URL, e) || ""); if (oo(e, "ResourceURL"))
    return xp(lt(e)); throw new w(904, !1); }
function tm(e) { let t = Dr(); if (t)
    return kp(t.sanitize(tn.SCRIPT, e) || ""); if (oo(e, "Script"))
    return kp(lt(e)); throw new w(905, !1); }
function nm(e) { return no(e[0]); }
function om(e) { return WM(e[0]); }
function fN(e, t) { return t === "src" && (e === "embed" || e === "frame" || e === "iframe" || e === "media" || e === "script") || t === "href" && (e === "base" || e === "link") ? Su : wu; }
function rm(e, t, n) { return fN(t, n)(e); }
function Dr() { let e = g(); return e && e[Ze].sanitizer; }
var pN = /^>|^->|<!--|-->|--!>|<!-$/g, hN = /(<|>)/g, gN = "\u200B$1\u200B";
function mN(e) { return e.replace(pN, t => t.replace(hN, gN)); }
function vN() { return Qe([]); }
var yN = { name: "custom-elements" }, EN = { name: "no-errors-schema" }, im = !1;
function IN(e) { im = e; }
function DN() { return im; }
var sm = !1;
function CN(e) { sm = e; }
function TN() { return sm; }
function am(e) { return e.ownerDocument.defaultView; }
function cm(e) { return e.ownerDocument; }
function bu(e) { return e.ownerDocument.body; }
var MN = "\uFFFD";
function Tn(e) { return e instanceof Function ? e() : e; }
function NN(e, t, n) { let o = e.length; for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1)
        return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
        let i = t.length;
        if (r + i === o || e.charCodeAt(r + i) <= 32)
            return r;
    }
    n = r + 1;
} }
var lm = "ng-template";
function _N(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && NN(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (Au(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function Au(e) { return e.type === 4 && e.value !== lm; }
function wN(e, t, n) { let o = e.type === 4 && !n ? lm : e.value; return t === o; }
function SN(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? RN(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !Pe(o) && !Pe(c))
            return !1;
        if (s && Pe(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !wN(e, c, n) || c === "" && t.length === 1) {
                if (Pe(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !_N(e, r, c, n)) {
                if (Pe(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = bN(c, r, Au(e), n);
            if (u === -1) {
                if (Pe(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (Pe(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return Pe(o) || s; }
function Pe(e) { return (e & 1) === 0; }
function bN(e, t, n, o) { if (t === null)
    return -1; let r = 0; if (o || !n) {
    let i = !1;
    for (; r < t.length;) {
        let s = t[r];
        if (s === e)
            return r;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++r];
            for (; typeof a == "string";)
                a = t[++r];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                r += 4;
                continue;
            }
        }
        r += i ? 1 : 2;
    }
    return -1;
}
else
    return ON(t, e); }
function um(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (SN(e, t[o], n))
        return !0; return !1; }
function AN(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function RN(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if ($h(n))
        return t;
} return e.length; }
function ON(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function kN(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function Fp(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function xN(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !Pe(s) && (t += Fp(i, r), r = ""), o = s, i = i || !Pe(o);
    n++;
} return r !== "" && (t += Fp(i, r)), t; }
function PN(e) { return e.map(xN).join(","); }
function LN(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!Pe(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var P = {};
function Ru(e, t) { return e.createText(t); }
function dm(e, t, n) { e.setValue(t, n); }
function Ou(e, t) { return e.createComment(mN(t)); }
function Rs(e, t, n) { return e.createElement(t, n); }
function Wt(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function fm(e, t, n) { e.appendChild(t, n); }
function jp(e, t, n, o, r) { o !== null ? Wt(e, t, n, o, r) : fm(e, t, n); }
function Cr(e, t, n, o) { e.removeChild(null, t, n, o); }
function pm(e) { e.textContent = ""; }
function FN(e, t, n) { e.setAttribute(t, "style", n); }
function jN(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function hm(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && ST(e, t, o), r !== null && jN(e, t, r), i !== null && FN(e, t, i); }
function ku(e, t, n, o, r, i, s, a, c, l, u) { let d = E + o, f = d + r, p = HN(d, f), h = typeof l == "function" ? l() : l; return p[v] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function HN(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : P); return n; }
function gm(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = ku(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function Os(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[H] = r, d[b] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[b] & 2048) && (d[b] |= 2048), ec(d), d[z] = d[No] = e, d[F] = n, d[Ze] = s || e && e[Ze], d[T] = a || e && e[T], d[O] = c || e && e[O] || null, d[ae] = i, d[dn] = YT(), d[ne] = u, d[Ya] = l, d[Z] = t.type == 2 ? e[Z] : d, d; }
function VN(e, t, n) { let o = oe(t, e), r = gm(n), i = e[Ze].rendererFactory, s = Pu(e, Os(e, r, null, xu(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function xu(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function Tr(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function Pu(e, t) { return e[yt] ? e[Mo][se] = t : e[yt] = t, e[Mo] = t, t; }
function mm(e = 1) { vm(_(), g(), re() + e, !1); }
function vm(e, t, n, o) { if (!o)
    if ((t[b] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && wi(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && Si(t, i, 0, n);
    } Ct(n); }
var ks = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(ks || {});
function Xo(e, t, n, o) { let r = R(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & ks.SignalBased) !== 0 && (c = t[i][ht]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : Ph(t, c, i, o);
}
finally {
    R(r);
} }
var Qi = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(Qi || {}), Dl;
function Lu(e, t) { return Dl(e, t); }
function BN(e) { Dl === void 0 && (Dl = e()); }
function Zi(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function Sn(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function UN(e) { let t = Sn(e, "transition-property"), n = Sn(e, "transition-duration"), o = Sn(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = Zi(o[i]) + Zi(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function $N(e) { let t = Sn(e, "animation-name"), n = Sn(e, "animation-delay"), o = Sn(e, "animation-duration"), r = { animationName: "", propertyName: void 0, duration: 0 }; for (let i = 0; i < t.length; i++) {
    let s = Zi(n[i]) + Zi(o[i]);
    s > r.duration && (r.animationName = t[i], r.duration = s);
} return r; }
function ym(e, t) { return e !== void 0 && e.duration > t.duration; }
function Em(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function GN(e, t) { let n = getComputedStyle(e), o = $N(n), r = UN(n), i = o.duration > r.duration ? o : r; ym(t.get(e), i) || Em(i) && t.set(e, i); }
function Im(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? GN(e, t) : qN(e, t, o); }
function qN(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming(), s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c, l;
    r.animationName ? l = r.animationName : c = r.transitionProperty, a >= o.duration && (o = { animationName: l, propertyName: c, duration: a });
} ym(t.get(e), o) || Em(o) && t.set(e, o); }
var Pn = new Set, xs = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(xs || {}), ro = new S(""), Hp = new Set;
function Y(e) { Hp.has(e) || (Hp.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var Dm = !1, Cl = class extends Vr {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) { super(), this.__isAsync = t, Za() && (this.destroyRef = D(hn, { optional: !0 }) ?? void 0, this.pendingTasks = D(Mt, { optional: !0 }) ?? void 0); }
    emit(t) { let n = R(null); try {
        super.next(t);
    }
    finally {
        R(n);
    } }
    subscribe(t, n, o) { let r = t, i = n || (() => null), s = o; if (t && typeof t == "object") {
        let c = t;
        r = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c);
    } this.__isAsync && (i = this.wrapInTimeout(i), r && (r = this.wrapInTimeout(r)), s && (s = this.wrapInTimeout(s))); let a = super.subscribe({ next: r, error: i, complete: s }); return t instanceof Hr && t.add(a), a; }
    wrapInTimeout(t) { return n => { let o = this.pendingTasks?.add(); setTimeout(() => { try {
        t(n);
    }
    finally {
        o !== void 0 && this.pendingTasks?.remove(o);
    } }); }; }
}, et = Cl;
function Cm(e) { let t, n; function o() { e = xo; try {
    n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
}
catch { } } return t = setTimeout(() => { e(), o(); }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => { e(), o(); })), () => o(); }
function Vp(e) { return queueMicrotask(() => e()), () => { e = xo; }; }
var Fu = "isAngularZone", Yi = Fu + "_ID", WN = 0, j = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new et(!1);
    onMicrotaskEmpty = new et(!1);
    onStable = new et(!1);
    onError = new et(!1);
    constructor(t) { let { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: o = !1, shouldCoalesceRunChangeDetection: r = !1, scheduleInRootZone: i = Dm } = t; if (typeof Zone > "u")
        throw new w(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !r && o, s.shouldCoalesceRunChangeDetection = r, s.callbackScheduled = !1, s.scheduleInRootZone = i, ZN(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(Fu) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new w(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new w(909, !1); }
    run(t, n, o) { return this._inner.run(t, n, o); }
    runTask(t, n, o, r) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + r, t, zN, xo, xo); try {
        return i.runTask(s, n, o);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(t, n, o) { return this._inner.runGuarded(t, n, o); }
    runOutsideAngular(t) { return this._outer.run(t); }
}, zN = {};
function ju(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function QN(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function t() { Cm(() => { e.callbackScheduled = !1, Tl(e), e.isCheckStableRunning = !0, ju(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { t(); }) : e._outer.run(() => { t(); }), Tl(e); }
function ZN(e) { let t = () => { QN(e); }, n = WN++; e._inner = e._inner.fork({ name: "angular", properties: { [Fu]: !0, [Yi]: n, [Yi + n]: !0 }, onInvokeTask: (o, r, i, s, a, c) => { if (YN(c))
        return o.invokeTask(i, s, a, c); try {
        return Bp(e), o.invokeTask(i, s, a, c);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), Up(e);
    } }, onInvoke: (o, r, i, s, a, c, l) => { try {
        return Bp(e), o.invoke(i, s, a, c, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !KN(c) && t(), Up(e);
    } }, onHasTask: (o, r, i, s) => { o.hasTask(i, s), r === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, Tl(e), ju(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (o, r, i, s) => (o.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function Tl(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function Bp(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function Up(e) { e._nesting--, ju(e); }
var Ln = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new et;
    onMicrotaskEmpty = new et;
    onStable = new et;
    onError = new et;
    run(t, n, o) { return t.apply(n, o); }
    runGuarded(t, n, o) { return t.apply(n, o); }
    runOutsideAngular(t) { return t(); }
    runTask(t, n, o, r) { return t.apply(n, o); }
};
function YN(e) { return Tm(e, "__ignore_ng_zone__"); }
function KN(e) { return Tm(e, "__scheduler_tick__"); }
function Tm(e, t) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0; }
function Mm(e = "zone.js", t) { return e === "noop" ? new Ln : e === "zone.js" ? new j(t) : e; }
var Ps = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Hu = [0, 1, 2, 3], Vu = (() => { class e {
    ngZone = D(j);
    scheduler = D(Je);
    errorHandler = D(hi, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { D(ro, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && x(16), this.executing = !0; for (let o of Hu)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && x(17); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[Lt] ??= []).push(n), ai(o), o[b] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(xs.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), er = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, o, r, i, s = null) { this.impl = t, this.hooks = n, this.view = o, this.once = r, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[Lt]; t && (this.view[Lt] = t.filter(n => n !== this)); }
};
function Nm(e, t) { let n = t?.injector ?? D(Ce); return typeof ngServerMode < "u" && ngServerMode ? Ls : (Y("NgAfterRender"), _m(e, n, t, !1)); }
function Bu(e, t) { let n = t?.injector ?? D(Ce); return typeof ngServerMode < "u" && ngServerMode ? Ls : (Y("NgAfterNextRender"), _m(e, n, t, !0)); }
function JN(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function _m(e, t, n, o) { let r = t.get(Ps); r.impl ??= t.get(Vu); let i = t.get(ro, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(hn) : null, a = t.get(gi, null, { optional: !0 }), c = new er(r.impl, JN(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var Ls = { destroy() { } }, Uu = new S("", { providedIn: "root", factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null }) });
function wm(e, t) { let n = e.get(Uu); if (Array.isArray(t))
    for (let o of t)
        n.queue.add(o);
else
    n.queue.add(t); n.scheduler && n.scheduler(e); }
function XN(e) { let t = e.get(Uu); t.isScheduled || (Bu(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: e }), t.isScheduled = !0); }
function Fs(e) { let t = e.get(Uu); t.scheduler = XN, t.scheduler(e); }
function $u(e, t) { for (let [n, o] of t)
    wm(e, o.animateFns); }
function $p(e, t, n, o) { let r = e?.[Ke]?.enter; t !== null && r && r.has(n.index) && $u(o, r); }
function Mn(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    J(r) ? c = r : K(r) && (l = !0, r = r[H]);
    let u = k(r);
    e === 0 && o !== null ? ($p(a, o, i, n), s == null ? fm(t, o, u) : Wt(t, o, u, s || null, !0)) : e === 1 && o !== null ? ($p(a, o, i, n), Wt(t, o, u, s || null, !0)) : e === 2 ? Gp(a, i, n, d => { Cr(t, u, l, d); }) : e === 3 && Gp(a, i, n, () => { t.destroyNode(u); }), c != null && s_(t, e, n, c, i, o, s);
} }
function Sm(e, t) { bm(e, t), t[H] = null, t[ae] = null; }
function e_(e, t, n, o, r, i) { o[H] = r, o[ae] = t, js(e, o, n, 1, r, i); }
function bm(e, t) { t[Ze].changeDetectionScheduler?.notify(9), js(e, t, t[T], 2, null, null); }
function t_(e) { let t = e[yt]; if (!t)
    return jc(e[v], e); for (; t;) {
    let n = null;
    if (K(t))
        n = t[yt];
    else {
        let o = t[V];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[se] && t !== e;)
            K(t) && jc(t[v], t), t = t[z];
        t === null && (t = e), K(t) && jc(t[v], t), n = t && t[se];
    }
    t = n;
} }
function Gu(e, t) { let n = e[Ft], o = n.indexOf(t); n.splice(o, 1); }
function Mr(e, t) { if (Et(t))
    return; let n = t[T]; n.destroyNode && js(e, t, n, 3, null, null), t_(t); }
function jc(e, t) { if (Et(t))
    return; let n = R(null); try {
    t[b] &= -129, t[b] |= 256, t[_e] && yo(t[_e]), r_(e, t), o_(e, t), t[v].type === 1 && t[T].destroy();
    let o = t[Ye];
    if (o !== null && J(t[z])) {
        o !== t[z] && Gu(o, t);
        let r = t[He];
        r !== null && r.detachView(e);
    }
    il(t);
}
finally {
    R(n);
} }
function Gp(e, t, n, o) { let r = e?.[Ke]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); if (r.skipLeaveAnimations)
    return r.skipLeaveAnimations = !1, o(!1); e && Pn.add(e), wm(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s)
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
    r.running = Promise.allSettled(a), n_(e, o);
}
else
    e && Pn.delete(e), o(!1); }); }
function n_(e, t) { let n = e[Ke]?.running; if (n) {
    n.then(() => { e[Ke].running = void 0, Pn.delete(e), t(!0); });
    return;
} t(!1); }
function o_(e, t) { let n = e.cleanup, o = t[Pt]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[Pt] = null); let r = t[Ka]; if (r !== null) {
    t[Ka] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[_o]; if (i !== null) {
    t[_o] = null;
    for (let s of i)
        s.destroy();
} }
function r_(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof qt)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    x(4, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        x(5, a, c);
                    }
                }
            else {
                x(4, r, i);
                try {
                    i.call(r);
                }
                finally {
                    x(5, r, i);
                }
            }
        }
    } }
function qu(e, t, n) { return Am(e, t.parent, n); }
function Am(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[H]; if (me(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === ot.None || r === ot.Emulated)
        return null;
} return oe(o, n); }
function Rm(e, t, n) { return km(e, t, n); }
function Om(e, t, n) { return e.type & 40 ? oe(e, n) : null; }
var km = Om, Ml;
function xm(e, t) { km = e, Ml = t; }
function Wu(e, t, n, o) { let r = qu(e, o, t), i = t[T], s = o.parent || t[ae], a = Rm(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            jp(i, r, n[c], a, !1);
    else
        jp(i, r, n, a, !1); Ml !== void 0 && Ml(i, o, t, n, r); }
function $t(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return oe(t, e);
    if (n & 4)
        return Ki(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return $t(e, o);
        {
            let r = e[t.index];
            return J(r) ? Ki(-1, r) : k(r);
        }
    }
    else {
        if (n & 128)
            return $t(e, t.next);
        if (n & 32)
            return Lu(t, e)() || k(e[t.index]);
        {
            let o = Pm(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = Ht(e[Z]);
                return $t(r, o);
            }
            else
                return $t(e, t.next);
        }
    }
} return null; }
function Pm(e, t) { if (t !== null) {
    let o = e[Z][ae], r = t.projection;
    return o.projection[r];
} return null; }
function Ki(e, t) { let n = V + e + 1; if (n < t.length) {
    let o = t[n], r = o[v].firstChild;
    if (r !== null)
        return $t(o, r);
} return t[ke]; }
function zu(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[O];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && Se(k(c), o), n.flags |= 2), !to(n))
        if (l & 8)
            zu(e, t, n.child, o, r, i, !1), Mn(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = Lu(n, o), d;
            for (; d = u();)
                Mn(t, e, a, r, d, n, i, o);
            Mn(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? Lm(e, t, o, n, r, i) : Mn(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function js(e, t, n, o, r, i) { zu(n, o, e.firstChild, t, r, i, !1); }
function i_(e, t, n) { let o = t[T], r = qu(e, n, t), i = n.parent || t[ae], s = Rm(i, n, t); Lm(o, 0, t, n, r, s); }
function Lm(e, t, n, o, r, i) { let s = n[Z], c = s[ae].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        Mn(t, e, n[O], r, u, o, i, n);
    }
else {
    let l = c, u = s[z];
    Ko(o) && (l.flags |= 128), zu(e, t, l, u, r, i, !0);
} }
function s_(e, t, n, o, r, i, s) { let a = o[ke], c = k(o); a !== c && Mn(t, e, n, i, a, r, s); for (let l = V; l < o.length; l++) {
    let u = o[l];
    js(u[v], u, e, t, i, a);
} }
function a_(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : Qi.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= Qi.Important), e.setStyle(n, o, r, i));
} }
function Fm(e, t, n, o, r) { let i = re(), s = o & 2; try {
    Ct(-1), s && t.length > E && vm(e, t, E, !1), x(s ? 2 : 0, r, n), n(o, r);
}
finally {
    Ct(i), x(s ? 3 : 1, r, n);
} }
function Hs(e, t, n) { f_(e, t, n), (n.flags & 64) === 64 && p_(e, t, n); }
function io(e, t, n = oe) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function c_(e, t, n, o) { let i = o.get(fu, Eg) || n === ot.ShadowDom, s = e.selectRootElement(t, i); return l_(s), s; }
function l_(e) { jm(e); }
var jm = () => null;
function u_(e) { og(e) ? pm(e) : kM(e); }
function Hm() { jm = u_; }
function d_(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function Qu(e, t, n, o, r, i) { let s = t[v]; if ($s(e, s, t, n, o)) {
    me(e) && Vm(t, e.index);
    return;
} e.type & 3 && (n = d_(n)), Zu(e, t, n, o, r, i); }
function Zu(e, t, n, o, r, i) { if (e.type & 3) {
    let s = oe(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function Vm(e, t) { let n = ue(t, e); n[b] & 16 || (n[b] |= 64); }
function f_(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; me(n) && VN(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || Ui(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = Yo(t, e, s, n);
    if (Se(c, t), i !== null && m_(t, s - o, c, a, n, i), ve(a)) {
        let l = ue(n.index, t);
        l[F] = Yo(t, e, s, n);
    }
} }
function p_(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = fp(); try {
    Ct(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        mc(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && h_(c, l);
    }
}
finally {
    Ct(-1), mc(s);
} }
function h_(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function Yu(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        um(t, i.selectors, !1) && (o ??= [], ve(i) ? o.unshift(i) : o.push(i));
    } return o; }
function g_(e, t, n, o, r, i) { let s = oe(e, t); Vs(t[T], s, i, e.value, n, o, r); }
function Vs(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? N(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function m_(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        Xo(o, n, c, l);
    } }
function Bs(e, t, n, o, r) { let i = E + n, s = t[v], a = r(s, t, e, o, n); t[i] = a, Be(e, !0); let c = e.type === 2; return c ? (hm(t[T], a, e), (sp() === 0 || fn(e)) && Se(a, t), ap()) : Se(a, t), ko() && (!c || !to(e)) && Wu(s, t, a, e), e; }
function Us(e) { let t = e; return lc() ? uc() : (t = t.parent, Be(t, !1)), t; }
function Bm(e, t, n) { return (e === null || ve(e)) && (n = So(n[t.index])), n[T]; }
function Ku(e, t) { let n = e[O]; if (!n)
    return; let o; try {
    o = n.get(Tt, null);
}
catch {
    o = null;
} o?.(t); }
function $s(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        Xo(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        Xo(u, l, o, r), a = !0;
    } return a; }
function v_(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], m = d[f + 1];
            Xo(h, n[p], m, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (Xo(o, n[s], r, i), l = !0), l; }
function y_(e, t) { let n = ue(t, e), o = n[v]; E_(o, n); let r = n[H]; r !== null && n[ne] === null && (n[ne] = Og(r, n[O])), x(18), Gs(o, n, n[F]), x(19, n[F]); }
function E_(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function Gs(e, t, n) { fi(t); try {
    let o = e.viewQuery;
    o !== null && ul(1, o, n);
    let r = e.template;
    r !== null && Fm(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[He]?.finishViewCreation(e), e.staticContentQueries && $g(e, t), e.staticViewQueries && ul(2, e.viewQuery, n);
    let i = e.components;
    i !== null && I_(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[b] &= -5, pi();
} }
function I_(e, t) { for (let n = 0; n < t.length; n++)
    y_(e, t[n]); }
function so(e, t, n, o) { let r = R(null); try {
    let i = t.tView, a = e[b] & 4096 ? 4096 : 16, c = Os(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[Ye] = l;
    let u = e[He];
    return u !== null && (c[He] = u.createEmbeddedView(i)), Gs(i, c, n), c;
}
finally {
    R(r);
} }
function zt(e, t) { return !t || t.firstChild === null || Ko(e); }
function Fn(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(k(i)), J(i) && qs(i, o);
    let s = n.type;
    if (s & 8)
        Fn(e, t, n.child, o);
    else if (s & 32) {
        let a = Lu(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = Pm(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = Ht(t[Z]);
            Fn(c[v], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function qs(e, t) { for (let n = V; n < e.length; n++) {
    let o = e[n], r = o[v].firstChild;
    r !== null && Fn(o[v], o, r, t);
} e[ke] !== e[H] && t.push(e[ke]); }
function Um(e) { if (e[Lt] !== null) {
    for (let t of e[Lt])
        t.impl.addSequence(t);
    e[Lt].length = 0;
} }
var $m = [];
function D_(e) { return e[_e] ?? C_(e); }
function C_(e) { let t = $m.pop() ?? Object.create(M_); return t.lView = e, t; }
function T_(e) { e.lView[_e] !== e && (e.lView = null, $m.push(e)); }
var M_ = Fe(W({}, La), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { ai(e.lView); }, consumerOnSignalRead() { this.lView[_e] = this; } });
function N_(e) { let t = e[_e] ?? Object.create(__); return t.lView = e, t; }
var __ = Fe(W({}, La), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = Ht(e.lView); for (; t && !Gm(t[v]);)
        t = Ht(t); t && ii(t); }, consumerOnSignalRead() { this.lView[_e] = this; } });
function Gm(e) { return e.type !== 2; }
function qm(e) { if (e[_o] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[_o])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[b] & 8192);
} }
var w_ = 100;
function Wm(e, t = 0) { let o = e[Ze].rendererFactory, r = !1; r || o.begin?.(); try {
    S_(e, t);
}
finally {
    r || o.end?.();
} }
function S_(e, t) { let n = fc(); try {
    pc(!0), Nl(e, t);
    let o = 0;
    for (; Ao(e);) {
        if (o === w_)
            throw new w(103, !1);
        o++, Nl(e, 1);
    }
}
finally {
    pc(n);
} }
function zm(e, t, n, o) { if (Et(t))
    return; let r = t[b], i = !1, s = !1; fi(t); let a = !0, c = null, l = null; i || (Gm(e) ? (l = D_(t), c = vo(l)) : Lf() === null ? (a = !1, l = N_(t), c = vo(l)) : t[_e] && (yo(t[_e]), t[_e] = null)); try {
    ec(t), hc(e.bindingStartIndex), n !== null && Fm(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && wi(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && Si(t, p, 0, null), Rc(t, 0);
        }
    if (s || b_(t), qm(t), Qm(t, 0), e.contentQueries !== null && $g(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && wi(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && Si(t, p, 1), Rc(t, 1);
        }
    R_(e, t);
    let d = e.components;
    d !== null && Ym(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && ul(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && wi(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && Si(t, p, 2), Rc(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[ri]) {
        for (let p of t[ri])
            p();
        t[ri] = null;
    }
    i || (Um(t), t[b] &= -73);
}
catch (u) {
    throw i || ai(t), u;
}
finally {
    l !== null && (Ur(l, c), a && T_(l)), pi();
} }
function Qm(e, t) { for (let n = lg(e); n !== null; n = ug(n))
    for (let o = V; o < n.length; o++) {
        let r = n[o];
        Zm(r, t);
    } }
function b_(e) { for (let t = lg(e); t !== null; t = ug(t)) {
    if (!(t[b] & 2))
        continue;
    let n = t[Ft];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        ii(r);
    }
} }
function A_(e, t, n) { x(18); let o = ue(t, e); Zm(o, n), x(19, o[F]); }
function Zm(e, t) { ep(e) && Nl(e, t); }
function Nl(e, t) { let o = e[v], r = e[b], i = e[_e], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && $r(i)), s ||= !1, i && (i.dirty = !1), e[b] &= -9217, s)
    zm(o, e, o.template, e[F]);
else if (r & 8192) {
    let a = R(null);
    try {
        qm(e), Qm(e, 1);
        let c = o.components;
        c !== null && Ym(e, c, 1), Um(e);
    }
    finally {
        R(a);
    }
} }
function Ym(e, t, n) { for (let o = 0; o < t.length; o++)
    A_(e, t[o], n); }
function R_(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                Ct(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                dp(s, i);
                let c = t[i];
                x(24, c), a(2, c), x(25, c);
            }
        }
    }
    finally {
        Ct(-1);
    } }
function Nr(e, t) { let n = fc() ? 64 : 1088; for (e[Ze].changeDetectionScheduler?.notify(t); e;) {
    e[b] |= n;
    let o = Ht(e);
    if (Ve(e) && !o)
        return e;
    e = o;
} return null; }
function Km(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function Jm(e, t) { let n = V + t; if (n < e.length)
    return e[n]; }
function ao(e, t, n, o = !0) { let r = t[v]; if (O_(r, t, e, n), o) {
    let s = Ki(n, e), a = t[T], c = a.parentNode(e[ke]);
    c !== null && e_(r, e[ae], a, t, c, s);
} let i = t[ne]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function Ju(e, t) { let n = tr(e, t); return n !== void 0 && Mr(n[v], n), n; }
function tr(e, t) { if (e.length <= V)
    return; let n = V + t, o = e[n]; if (o) {
    let r = o[Ye];
    r !== null && r !== e && Gu(r, o), t > 0 && (e[n - 1][se] = o[se]);
    let i = Io(e, V + t);
    Sm(o[v], o);
    let s = i[He];
    s !== null && s.detachView(i[v]), o[z] = null, o[se] = null, o[b] &= -129;
} return o; }
function O_(e, t, n, o) { let r = V + o, i = n.length; o > 0 && (n[r - 1][se] = t), o < i - V ? (t[se] = n[r], qa(n, V + o, t)) : (n.push(t), t[se] = null), t[z] = n; let s = t[Ye]; s !== null && n !== s && Xm(s, t); let a = t[He]; a !== null && a.insertView(e), si(t), t[b] |= 128; }
function Xm(e, t) { let n = e[Ft], o = t[z]; if (K(o))
    e[b] |= 2;
else {
    let r = o[z][Z];
    t[Z] !== r && (e[b] |= 2);
} n === null ? e[Ft] = [t] : n.push(t); }
var St = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[v]; return Fn(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[F]; }
    set context(t) { this._lView[F] = t; }
    get destroyed() { return Et(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[z];
        if (J(t)) {
            let n = t[wo], o = n ? n.indexOf(this) : -1;
            o > -1 && (tr(t, o), Io(n, o));
        }
        this._attachedToViewContainer = !1;
    } Mr(this._lView[v], this._lView); }
    onDestroy(t) { ci(this._lView, t); }
    markForCheck() { Nr(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[b] &= -129; }
    reattach() { si(this._lView), this._lView[b] |= 128; }
    detectChanges() { this._lView[b] |= 1024, Wm(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new w(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = Ve(this._lView), n = this._lView[Ye]; n !== null && !t && Gu(n, this._lView), bm(this._lView[v], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new w(902, !1); this._appRef = t; let n = Ve(this._lView), o = this._lView[Ye]; o !== null && !n && Xm(o, this._lView), si(this._lView); }
};
function k_(e) { return Ao(e._lView) || !!(e._lView[b] & 64); }
function x_(e) { ii(e._lView); }
var nr = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = P_;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = so(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new St(i); }
} return e; })();
function P_() { return Ws(M(), g()); }
function Ws(e, t) { return e.type & 4 ? new nr(t, e, Zn(e, t)) : null; }
var _l = "<-- AT THIS LOCATION";
function L_(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function F_(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${B_(e, t, !1)}

`, r = $_();
    throw new w(-502, n + o + r);
}
function ev(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${U_(e)}

`, o = t + n + G_();
    return new w(-503, o);
}
function j_(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${Ji(r)}"`);
    } return t.join(" "); }
var H_ = new Set(["ngh", "ng-version", "ng-server-context"]);
function V_(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    H_.has(o.name) || t.push(`${o.name}="${Ji(o.value)}"`);
} return t.join(" "); }
function Hc(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = j_(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${L_(e.type)})`;
} }
function Ri(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = V_(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? Ji(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${Ji(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function B_(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + Hc(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + Hc(t) + `
`, r += `  <!-- container -->  ${_l}
`) : r += "  " + Hc(t) + `  ${_l}
`, r += `  \u2026
`;
    let i = t.type ? qu(e[v], t, e) : null;
    return i && (r = Ri(i, `
` + r)), r;
}
function U_(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + Ri(o.previousSibling) + `
`), n += "  " + Ri(o) + `  ${_l}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = Ri(o.parentNode, `
` + n)), n;
}
function $_(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function G_() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function q_(e) { return e.replace(/\s+/gm, ""); }
function Ji(e, t = 50) { return e ? (e = q_(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function tv(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? Om(e, t, n) : k(n[r]); }
function nv(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            Wt(e, s, l, a, !1);
        }
} }
function nn(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = Xu(e, t, n, o, r), up() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = pn();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return Be(i, !0), i; }
function Xu(e, t, n, o, r) { let i = lp(), s = lc(), a = s ? i : i && i.parent, c = e.data[t] = z_(e, a, n, t, o, r); return W_(e, c, i, s), c; }
function W_(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function z_(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return Ro() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function ov(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        rv(o) || Q_(o, t) && Z_(o) === null && Y_(o, t.index);
    } }
function rv(e) { return !(e.type & 64); }
function Q_(e, t) { return rv(t) || e.index > t.index; }
function Z_(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function Y_(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (xm(tv, nv), e.insertBeforeIndex = t); }
function jo(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function K_(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function J_(e, t) { let n = e.insertBeforeIndex; n === null ? (xm(tv, nv), n = e.insertBeforeIndex = [null, t]) : (Bf(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function X_(e, t, n) { let o = Xu(e, n, 64, null, null); return ov(t, o), o; }
function zs(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function ew(e) { return e >>> 17; }
function tw(e) { return (e & 131070) >>> 1; }
function nw(e, t, n) { return e | t << 17 | n << 1; }
function iv(e) { return e === -1; }
function ed(e, t, n) { e.index = 0; let o = zs(t, n); o !== null ? e.removes = t.remove[o] : e.removes = L; }
function Xi(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[v].data[n];
        return ed(e, o, e.lView), Xi(e);
    }
}
else
    return e.stack.length === 0 ? null : (e.removes = e.stack.pop(), e.index = e.stack.pop(), Xi(e)); }
function ow() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return ed(e, n.value, o), Xi.bind(null, e); } return t; }
function rw(e, t) { let n = { stack: [], index: -1, lView: t }; return ed(n, e, t), Xi.bind(null, n); }
var iw = new RegExp(`^(\\d+)*(${uu}|${lu})*(.*)`);
function sw(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function aw(e) { let t = e.match(iw), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function cw(e) { return !e.prev && e.parent?.type === 8; }
function Vc(e) { return e.index - E; }
function co(e, t) { return !(e.type & 144) && !!t[e.index] && sv(k(t[e.index])); }
function sv(e) { return !!e && !e.isConnected; }
function av(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function lw(e, t, n) { let r = e.data[mr]?.[n]; return r ? cv(r, t) : null; }
function _r(e, t, n, o) { let r = Vc(o), i = av(e, r); if (i === void 0) {
    let s = e.data[mr];
    if (s?.[r])
        i = cv(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (cw(o)) {
            let l = Vc(o.parent);
            i = ll(e, l);
        }
        else {
            let l = oe(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = Vc(c), d = ll(e, u);
                if (c.type === 2 && d) {
                    let p = Cu(e, u) + 1;
                    i = Qs(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function Qs(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function uw(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case vg:
                n = n.firstChild;
                break;
            case yg:
                n = n.nextSibling;
                break;
        }
} return n; }
function cv(e, t) { let [n, ...o] = aw(e), r; if (n === lu)
    r = t[Z][H];
else if (n === uu)
    r = bu(t[Z][H]);
else {
    let i = Number(n);
    r = k(t[i + E]);
} return uw(r, o); }
function wl(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return dw(e, t); {
    let n = t.parentElement, o = wl(e, n), r = wl(n.firstChild, t);
    return !o || !r ? null : [...o, vg, ...r];
} }
function dw(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(yg); return o == null ? null : n; }
function qp(e, t, n) { let o = wl(e, t); return o === null ? null : sw(n, o); }
function lv(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (co(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = lu, i = t[Z][H]) : (r = o.index, i = k(t[r]), s = N(r - E)); let a = k(t[e.index]); if (e.type & 44) {
    let l = $t(t, e);
    l && (a = l);
} let c = qp(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = qp(l, a, uu), c === null)
        throw F_(t, e);
} return c; }
function uv(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: fw }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function fw(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var dv = !1, fv = () => { };
function td(e) { dv = e; }
function Zs() { return dv; }
function pw(e, t, n, o) { fv(e, t, n, o); }
function pv() { fv = yw; }
function hv(e) { return e = e ?? D(Ce), e.get(pu, !1); }
function gv(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = hw(e), t.i18nChildren.set(e, n)), n; }
function hw(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
    case 1:
    case 2: {
        for (let r of o.children)
            n(r);
        break;
    }
    case 3: {
        for (let r of o.cases)
            for (let i of r)
                n(i);
        break;
    }
} } for (let o = E; o < e.bindingStartIndex; o++) {
    let r = e.data[o];
    if (!(!r || !r.ast))
        for (let i of r.ast)
            n(i);
} return t.size === 0 ? null : t; }
function mv(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[v], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && rg(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return Sl(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function Sl(e, t, n, o) { let r = null; for (let i of o) {
    let s = mw(e, t, n, i);
    s && (gw(r, s) && t.disjointNodes.add(i.index - E), r = s);
} return r; }
function gw(e, t) { return e && e.nextSibling !== t; }
function mw(e, t, n, o) { let r = k(e[o.index]); if (!r || sv(r))
    return t.disconnectedNodes.add(o.index - E), null; let i = r; switch (o.kind) {
    case 0: {
        Tu(n, i);
        break;
    }
    case 1:
    case 2: {
        Sl(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), Sl(e, t, n, o.cases[a]);
        }
        break;
    }
} return vw(e, o); }
function vw(e, t) { let o = e[v].data[t.index]; return hs(o) ? $t(e, o) : t.kind === 3 ? rw(o, e)() ?? k(e[t.index]) : k(e[t.index]) ?? null; }
function Vt(e, t) { e.currentNode = t; }
function Po(e, t, n) { let o = n.index - E, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function Bc(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function Uc(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function yw(e, t, n, o) { let r = e[ne]; if (!r || !Zs() || n && (rg(n) || Ss(r, n.index - E)))
    return; let i = e[v], s = i.data[t]; function a() { if (iv(o)) {
    let p = _r(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = Lg(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[Ds]?.[t - E] ?? [], f = r.dehydratedIcuData ??= new Map; yn({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function yn(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = lw(e.hydrationInfo, e.lView, r.index - E);
        i && (o = Uc(t, i)), yn(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - E))
        return;
    switch (n.kind) {
        case 0: {
            let o = Po(e, t, n);
            Vt(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            yn(e, Uc(t, t.currentNode?.firstChild ?? null), n.children);
            let o = Po(e, t, n);
            Vt(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - E, { hydrationInfo: r } = e, i = xg(r, o);
            switch (n.type) {
                case 0: {
                    let s = Po(e, t, n);
                    if (jM(r, o)) {
                        yn(e, t, n.children);
                        let a = Bc(t, 1);
                        Vt(t, a);
                    }
                    else if (yn(e, Uc(t, t.currentNode?.firstChild ?? null), n.children), Vt(t, s?.nextSibling ?? null), i !== null) {
                        let a = Bc(t, i + 1);
                        Vt(t, a);
                    }
                    break;
                }
                case 1: {
                    Po(e, t, n);
                    let s = Bc(t, i + 1);
                    Vt(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                yn(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = Po(e, t, n);
            Vt(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var vv = () => { };
function Ew(e, t, n) { vv(e, t, n); }
function yv() { vv = Iw; }
function Iw(e, t, n) { let o = e[ne]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function Dw(e) { let t = e[ne]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[T];
        for (let i of o.values())
            Cw(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function Cw(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - E);
    r && Cr(e, r, !1);
} }
function Ys(e) { let t = e[De] ?? [], o = e[z][T], r = []; for (let i of t)
    i.data[Cs] !== void 0 ? r.push(i) : Ev(i, o); e[De] = r; }
function Tw(e) { let { lContainer: t } = e, n = t[De]; if (n === null)
    return; let r = t[z][T]; for (let i of n)
    Ev(i, r); }
function Ev(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[nt];
    for (; n < r;) {
        let i = o.nextSibling;
        Cr(t, o, !1), o = i, n++;
    }
} }
function Ks(e) { Ys(e); let t = e[H]; K(t) && es(t); for (let n = V; n < e.length; n++)
    es(e[n]); }
function es(e) { Dw(e); let t = e[v]; for (let n = E; n < t.bindingStartIndex; n++)
    if (J(e[n])) {
        let o = e[n];
        Ks(o);
    }
    else
        K(e[n]) && es(e[n]); }
function nd(e) { let t = e._views; for (let n of t) {
    let o = Du(n);
    o !== null && o[H] !== null && (K(o) ? es(o) : Ks(o));
} }
function Mw(e, t, n, o) { e !== null && (n.cleanup(t), Ks(e.lContainer), nd(o)); }
function Nw(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[gr] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[nt] > 0 && (i.firstChild = e, e = Qs(o[nt], e)), n.push(i);
    } return [e, n]; }
var Iv = () => null, Dv = () => null;
function Cv() { Iv = _w, Dv = ww; }
function _w(e, t) { return Mv(e, t) ? e[De].shift() : (Ys(e), null); }
function or(e, t) { return Iv(e, t); }
function ww(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = or(e, t.tView.ssrId); return n[v].firstUpdatePass && o === null && Sw(n, t), o; }
function Tv(e, t, n) { return Dv(e, t, n); }
function Sw(e, t) { let n = t; for (; n;) {
    if (Wp(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (Wp(e, n))
        return;
    n = n.next;
} }
function Mv(e, t) { let n = e[De]; return !t || n === null || n.length === 0 ? !1 : n[0].data[Is] === t; }
function Wp(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return J(o) && Mv(o, n) ? (Ys(o), !0) : !1; }
var Nv = class {
}, Js = class {
}, bl = class {
    resolveComponentFactory(t) { throw new w(917, !1); }
}, wr = class {
    static NULL = new bl;
}, rr = class {
}, bw = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => Aw();
} return e; })();
function Aw() { let e = g(), t = M(), n = ue(t.index, e); return (K(n) ? n : e)[T]; }
var _v = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function od(e) { return e.ngModule !== void 0; }
function Bt(e) { return !!ln(e); }
function Di(e) { return !!je(e); }
function zp(e) { return !!Ne(e); }
function Ho(e) { return !!q(e); }
function Rw(e) { return q(e) ? "component" : Ne(e) ? "directive" : je(e) ? "pipe" : "type"; }
function Ow(e, t) { if (Wr(e) && (e = G(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Ie(t)}", to return a standalone entity or NgModule but got "${Ie(e) || e}".`); if (ln(e) == null) {
    let n = q(e) || Ne(e) || je(e);
    if (n != null) {
        if (!n.standalone)
            throw new Error(`The "${Ie(e)}" ${Rw(e)}, imported from "${Ie(t)}", is not standalone. Did you forget to add the standalone: true flag?`);
    }
    else
        throw od(e) ? new Error(`A module with providers was imported from "${Ie(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Ie(e)}" type, imported from "${Ie(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var Al = class {
    ownerNgModule = new Map;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new Map;
    standaloneComponentsScopeCache = new Map;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = ln(t);
            if (n?.declarations)
                for (let o of Tn(n.declarations))
                    Ho(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = q(t); if (o === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (o.standalone) {
        let r = this.getStandaloneComponentScope(t, n);
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let r = this.getNgModuleScope(this.ownerNgModule.get(t));
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!Bt(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = ei(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of Tn(n.imports))
        if (Bt(r)) {
            let i = this.getNgModuleScope(r);
            Nt(i.exported.directives, o.compilation.directives), Nt(i.exported.pipes, o.compilation.pipes);
        }
        else if (To(r))
            if (zp(r) || Ho(r))
                o.compilation.directives.add(r);
            else if (Di(r))
                o.compilation.pipes.add(r);
            else
                throw new w(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of Tn(n.declarations)) {
            if (Bt(r) || To(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            Di(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of Tn(n.exports))
        if (Bt(r)) {
            let i = this.getNgModuleScope(r);
            Nt(i.exported.directives, o.exported.directives), Nt(i.exported.pipes, o.exported.pipes), Nt(i.exported.directives, o.compilation.directives), Nt(i.exported.pipes, o.compilation.pipes);
        }
        else
            Di(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Oe(n ?? [])) {
        let i = G(r);
        try {
            Ow(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (Bt(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            Nt(s.exported.directives, o.compilation.directives), Nt(s.exported.pipes, o.compilation.pipes);
        }
        else if (Di(i))
            o.compilation.pipes.add(i);
        else if (zp(i) || Ho(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = q(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function Nt(e, t) { for (let n of e)
    t.add(n); }
var jn = new Al, Oi = {}, bn = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, Oi, o); return r !== Oi || n === Oi ? r : this.parentInjector.get(t, n, o); }
};
function ts(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = qr(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = qr(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function lo(e, t = 0) { let n = g(); if (n === null)
    return Re(e, t); let o = M(); return Yh(o, n, G(e), t); }
function wv() { let e = "invalid"; throw new Error(e); }
function Sv(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    Pw(e, t, n, a, i, c, l);
} i !== null && o !== null && kw(n, o, i); }
function kw(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new w(-301, !1);
    o.push(t[r], i);
} }
function xw(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function Pw(e, t, n, o, r, i, s) { let a = o.length, c = !1; for (let f = 0; f < a; f++) {
    let p = o[f];
    !c && ve(p) && (c = !0, xw(e, n, f)), ol(Ui(n, t), e, p.type);
} Bw(n, e.data.length, a); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = Tr(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = xn(n.mergedAttrs, p.hostAttrs), Fw(e, n, t, d, p), Vw(d, p, r), s !== null && s.has(p)) {
        let [m, y] = s.get(p);
        n.directiveToIndex.set(p.type, [d, m + n.directiveStart, y + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} Lw(e, n, i); }
function Lw(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        Qp(0, t, r, o), Qp(1, t, r, o), Yp(t, o, !1);
    else {
        let i = n.get(r);
        Zp(0, t, i, o), Zp(1, t, i, o), Yp(t, o, !0);
    }
} }
function Qp(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), bv(t, i);
    } }
function Zp(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), bv(t, s);
    } }
function bv(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function Yp(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || Au(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < o.length;) {
    let c = o[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && r.hasOwnProperty(c)) {
        let l = r[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, o[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], o[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function Fw(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = Kr(r.type, !0)), s = new qt(i, ve(r), lo, null); e.blueprint[o] = s, n[o] = s, jw(e, t, o, Tr(e, n, r.hostVars, P), r); }
function jw(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    Hw(s) != a && s.push(a), s.push(n, o, i);
} }
function Hw(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function Vw(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    ve(t) && (n[""] = e);
} }
function Bw(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function rd(e, t, n, o, r, i, s, a) { let c = t[v], l = c.consts, u = ce(l, s), d = nn(c, e, n, o, u); return i && Sv(c, t, d, ce(l, a), r), d.mergedAttrs = xn(d.mergedAttrs, d.attrs), d.attrs !== null && ts(d, d.attrs, !1), d.mergedAttrs !== null && ts(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function id(e, t) { Vh(e, t), Ja(t) && e.queries.elementEnd(t); }
function Av(e, t, n, o, r, i) { let s = t.consts, a = ce(s, r), c = nn(t, e, n, o, a); if (c.mergedAttrs = xn(c.mergedAttrs, c.attrs), i != null) {
    let l = ce(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && ts(c, c.attrs, !1), c.mergedAttrs !== null && ts(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function ir(e) { return Xs(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function Uw(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function Rv(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function Xs(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function Ov(e, t) { let n = ir(e), o = ir(t); return n && o ? Uw(e, t, Ov) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function We(e, t, n) { return e[t] = n; }
function Sr(e, t) { return e[t]; }
function $(e, t, n) { if (n === P)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function Qt(e, t, n, o) { let r = $(e, t, n); return $(e, t + 1, o) || r; }
function ea(e, t, n, o, r) { let i = Qt(e, t, n, o); return $(e, t + 2, r) || i; }
function be(e, t, n, o, r, i) { let s = Qt(e, t, n, o); return Qt(e, t + 2, r, i) || s; }
function Vo(e, t, n) { return function o(r) { let i = me(e) ? ue(e.index, t) : t; Nr(i, 5); let s = t[F], a = Kp(t, s, n, r), c = o.__ngNextListenerFn__; for (; c;)
    a = Kp(t, s, c, r) && a, c = c.__ngNextListenerFn__; return a; }; }
function Kp(e, t, n, o) { let r = vp(null); try {
    return x(6, t, n), n(o) !== !1;
}
catch (i) {
    return Ku(e, i), !1;
}
finally {
    x(7, t, n), vp(r);
} }
function kv(e, t, n, o, r, i, s, a) { let c = fn(e), l = !1, u = null; if (!o && c && (u = Gw(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = oe(e, n), f = o ? o(d) : d;
    bM(n, f, i, a);
    let p = r.listen(f, i, a);
    if (!$w(i)) {
        let h = o ? m => o(k(m[e.index])) : e.index;
        xv(h, t, n, i, a, p, !1);
    }
} return l; }
function $w(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function Gw(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[Pt], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function xv(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? rp(t) : null, c = op(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function qw(e, t, n, o, r) { let i = Vo(e, t, n), s = Ww(e, t, o, r, i); }
function Ww(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, ns(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, ns(e, t, i, o, o, r)), c; }
function ns(e, t, n, o, r, i) { let s = t[n], a = t[v], l = a.data[n].outputs[o], d = s[l].subscribe(i); xv(e.index, a, t, r, i, d, !0); }
var wt = Symbol("BINDING"), zw = { kind: "input", requiredVars: 1 }, Qw = { kind: "output", requiredVars: 0 };
function Zw(e, t, n) { let o = g(), r = fe(); if ($(o, r, n)) {
    let i = o[v], s = we(), a = ue(s.index, o);
    Nr(a, 1);
    let c = i.directiveRegistry[e], l = v_(s, i, o, c, t, n);
} }
function Pv(e, t) { let n = { [wt]: zw, update: () => Zw(n.targetIdx, e, t()) }; return n; }
function Lv(e, t) { let n = { [wt]: Qw, create: () => { let o = g(), r = M(), s = o[v].directiveRegistry[n.targetIdx]; qw(r, o, t, s, e); } }; return n; }
function Yw(e, t) { let n = Pv(e, t), o = Lv(e + "Change", i => t.set(i)); return { [wt]: { kind: "twoWay", requiredVars: n[wt].requiredVars + o[wt].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
var os = class extends wr {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = q(t); return new bt(n, this.ngModule); }
};
function Kw(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & ks.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function Jw(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function Xw(e, t, n) { let o = t instanceof vt ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new bn(n, o) : n; }
function eS(e) { let t = e.get(rr, null); if (t === null)
    throw new w(407, !1); let n = e.get(_v, null), o = e.get(Je, null); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1 }; }
function tS(e, t) { let n = Fv(e); return Rs(t, n, n === "svg" ? Yf : n === "math" ? Kf : null); }
function Fv(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var bt = class extends Js {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= Kw(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= Jw(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = PN(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { x(22); let a = R(null); try {
        let c = this.componentDef, l = nS(o, c, s, i), u = Xw(c, r || this.ngModule, t), d = eS(u), f = d.rendererFactory.createRenderer(null, c), p = o ? c_(f, o, c.encapsulation, u) : tS(c, f), h = s?.some(Jp) || i?.some(I => typeof I != "function" && I.bindings.some(Jp)), m = Os(null, l, null, 512 | xu(c), null, null, d, f, u, null, Og(p, u, !0));
        m[E] = p, fi(m);
        let y = null;
        try {
            let I = rd(E, m, 2, "#host", () => l.directiveRegistry, !0, 0);
            hm(f, p, I), Se(p, m), Hs(l, m, I), Mu(l, I, m), id(l, I), n !== void 0 && rS(I, this.ngContentSelectors, n), y = ue(I.index, m), m[F] = y[F], Gs(l, m, null);
        }
        catch (I) {
            throw y !== null && il(y), il(m), I;
        }
        finally {
            x(23), pi();
        }
        return new rs(this.componentType, m, !!h);
    }
    finally {
        R(a);
    } }
};
function nS(e, t, n, o) { let r = e ? ["ng-version", "20.3.7"] : LN(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[wt].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[wt].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = Ne(d);
        c.push(f);
    } return ku(0, null, oS(i, s), 1, a, c, null, null, null, [r], null); }
function oS(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function Jp(e) { let t = e[wt].kind; return t === "input" || t === "twoWay"; }
var rs = class extends Nv {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = It(n[v], E), this.location = Zn(this._tNode, n), this.instance = ue(this._tNode.index, n)[F], this.hostView = this.changeDetectorRef = new St(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = $s(o, r[v], r, t, n); this.previousInputValues.set(t, n); let s = ue(o.index, r); Nr(s, 1); }
    get injector() { return new _t(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function rS(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var ta = (() => { class e {
    static __NG_ELEMENT_ID__ = iS;
} return e; })();
function iS() { let e = M(); return Hv(e, g()); }
var sS = ta, jv = class extends sS {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return Zn(this._hostTNode, this._hostLView); }
    get injector() { return new _t(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = iu(this._hostTNode, this._hostLView); if (Gh(t)) {
        let n = Vi(t, this._hostLView), o = Hi(t), r = n[v].data[o + 8];
        return new _t(r, n);
    }
    else
        return new _t(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = Xp(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - V; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = or(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, zt(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !Lo(t), l; if (c)
        l = n;
    else {
        let y = n || {};
        l = y.index, o = y.injector, r = y.projectableNodes, i = y.environmentInjector || y.ngModuleRef, s = y.directives, a = y.bindings;
    } let u = c ? t : new bt(q(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let I = (c ? d : this.parentInjector).get(vt, null);
        I && (i = I);
    } let f = q(u.componentType ?? {}), p = or(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, m = u.create(d, r, h, i, s, a); return this.insertImpl(m.hostView, l, zt(this._hostTNode, p)), m; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (tp(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[z], l = new jv(c, c[ae], c[z]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return ao(s, r, i, o), t.attachToViewContainerRef(), qa($c(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = Xp(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = tr(this._lContainer, n); o && (Io($c(this._lContainer), n), Mr(o[v], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = tr(this._lContainer, n); return o && Io($c(this._lContainer), n) != null ? new St(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function Xp(e) { return e[wo]; }
function $c(e) { return e[wo] || (e[wo] = []); }
function Hv(e, t) { let n, o = t[e.index]; return J(o) ? n = o : (n = Km(o, t, null, e), t[e.index] = n, Pu(t, n)), Vv(n, t, e, o), new jv(n, e, t); }
function aS(e, t) { let n = e[T], o = n.createComment(""), r = oe(t, e), i = n.parentNode(r); return Wt(n, i, o, n.nextSibling(r), !1), o; }
var Vv = Uv, sd = () => !1;
function Bv(e, t, n) { return sd(e, t, n); }
function Uv(e, t, n, o) { if (e[ke])
    return; let r; n.type & 8 ? r = k(o) : r = aS(t, n), e[ke] = r; }
function cS(e, t, n) { if (e[ke] && e[De])
    return !0; let o = n[ne], r = t.index - E; if (!o || Kn(t) || Ss(o, r))
    return !1; let s = ll(o, r), a = o.data[Jn]?.[r], [c, l] = Nw(s, a); return e[ke] = c, e[De] = l, !0; }
function lS(e, t, n, o) { sd(e, n, t) || Uv(e, t, n, o); }
function $v() { Vv = lS, sd = cS; }
var Rl = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, Ol = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length, r = [];
        for (let i = 0; i < o; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            r.push(a.clone());
        }
        return new e(r);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        cd(t, n).matches !== null && this.queries[n].setDirty(); }
}, is = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = hS(t) : this.predicate = t; }
}, kl = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0, i = this.getByIndex(o).embeddedTView(t, r);
        i && (i.indexInDeclarationView = o, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, xl = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n;)
            o = o.parent;
        return n === (o !== null ? o.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let o = this.metadata.predicate; if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
            let i = o[r];
            this.matchTNodeWithReadOption(t, n, uS(n, i)), this.matchTNodeWithReadOption(t, n, bi(n, t, i, !1, !1));
        }
    else
        o === nr ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, bi(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === pr || r === ta || r === nr && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = bi(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function uS(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function dS(e, t) { return e.type & 11 ? Zn(e, t) : e.type & 4 ? Ws(e, t) : null; }
function fS(e, t, n, o) { return n === -1 ? dS(t, e) : n === -2 ? pS(e, t, o) : Yo(e, e[v], n, t); }
function pS(e, t, n) { if (n === pr)
    return Zn(t, e); if (n === nr)
    return Ws(t, e); if (n === ta)
    return Hv(t, e); }
function Gv(e, t, n, o) { let r = t[He].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(fS(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function Pl(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = Gv(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = V; d < u.length; d++) {
                let f = u[d];
                f[Ye] === f[z] && Pl(f[v], f, l, o);
            }
            if (u[Ft] !== null) {
                let d = u[Ft];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    Pl(p[v], p, l, o);
                }
            }
        }
    }
} return o; }
function ad(e, t) { return e[He].queries[t].queryList; }
function qv(e, t, n) { let o = new $i((n & 4) === 4); return ip(e, t, o, o.destroy), (t[He] ??= new Ol).queries.push(new Rl(o)) - 1; }
function Wv(e, t, n) { let o = _(); return o.firstCreatePass && (Qv(o, new is(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), qv(o, g(), t); }
function zv(e, t, n, o) { let r = _(); if (r.firstCreatePass) {
    let i = M();
    Qv(r, new is(t, n, o), i.index), gS(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return qv(r, g(), n); }
function hS(e) { return e.split(",").map(t => t.trim()); }
function Qv(e, t, n) { e.queries === null && (e.queries = new kl), e.queries.track(new xl(t, n)); }
function gS(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function cd(e, t) { return e.queries.getByIndex(t); }
function Zv(e, t) { let n = e[v], o = cd(n, t); return o.crossesNgTemplate ? Pl(n, e, t, []) : Gv(n, e, o, t); }
function ld(e, t, n) { let o, r = Ff(() => { o._dirtyCounter(); let i = mS(o, e); if (t && i === void 0)
    throw new w(-951, !1); return i; }); return o = r[ht], o._dirtyCounter = Mc(0), o._flatValue = void 0, r; }
function ud(e) { return ld(!0, !1, e); }
function dd(e) { return ld(!0, !0, e); }
function fd(e) { return ld(!1, !1, e); }
function Yv(e, t) { let n = e[ht]; n._lView = g(), n._queryIndex = t, n._queryList = ad(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function mS(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[b] & 4)
    return t ? void 0 : L; let r = ad(n, o), i = Zv(n, o); return r.reset(i, ng), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
function Kv(e) { let t = [], n = new Map; function o(r) { let i = n.get(r); if (!i) {
    let s = e(r);
    n.set(r, i = s.then(a => IS(r, a)));
} return i; } return Hn.forEach((r, i) => { let s = []; r.templateUrl && s.push(o(r.templateUrl).then(l => { r.template = l; })); let a = typeof r.styles == "string" ? [r.styles] : r.styles || []; if (r.styles = a, r.styleUrl && r.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); if (r.styleUrls?.length) {
    let l = r.styles.length, u = r.styleUrls;
    r.styleUrls.forEach((d, f) => { a.push(""), s.push(o(d).then(p => { a[l + f] = p, u.splice(u.indexOf(d), 1), u.length == 0 && (r.styleUrls = void 0); })); });
}
else
    r.styleUrl && s.push(o(r.styleUrl).then(l => { a.push(l), r.styleUrl = void 0; })); let c = Promise.all(s).then(() => DS(i)); t.push(c); }), Xv(), Promise.all(t).then(() => { }); }
var Hn = new Map, sr = new Set;
function vS(e, t) { Jv(t) && (Hn.set(e, t), sr.add(e)); }
function yS(e) { return sr.has(e); }
function Jv(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls && e.styleUrls.length || e.styleUrl); }
function Xv() { let e = Hn; return Hn = new Map, e; }
function ES(e) { sr.clear(), e.forEach((t, n) => sr.add(n)), Hn = e; }
function ey() { return Hn.size === 0; }
function IS(e, t) { return typeof t == "string" ? t : t.status !== void 0 && t.status !== 200 ? Promise.reject(new w(918, !1)) : t.text(); }
function DS(e) { sr.delete(e); }
var Ll = new Map, ty = !0;
function CS(e, t, n) { if (t && t !== n && ty)
    throw new Error(`Duplicate module registered for ${e} - ${sn(t)} vs ${sn(t.name)}`); }
function pd(e, t) { let n = Ll.get(t) || null; CS(t, n, e), Ll.set(t, e); }
function hd(e) { return Ll.get(e); }
function TS(e) { ty = !e; }
function ny(e, t, n) { let o = g(), r = we(), i = oe(r, o); if (r.type === 2 && t.toLowerCase() === "iframe") {
    let s = i;
    s.src = "", s.srcdoc = no(""), Cr(o[T], s);
    let a = !1;
    throw new w(-910, a);
} return e; }
var Vn = class {
}, oy = class {
};
function ry(e, t) { return new Bn(e, t ?? null, []); }
var MS = ry, Bn = class extends Vn {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new os(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = ln(t); this._bootstrapComponents = Tn(i.bootstrap), this._r3Injector = hp(t, n, [{ provide: Vn, useValue: this }, { provide: wr, useValue: this.componentFactoryResolver }, ...o], sn(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, Un = class extends oy {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new Bn(this.moduleType, t, []); }
};
function iy(e, t, n) { return new Bn(e, t, n, !1); }
var ar = class extends Vn {
    injector;
    componentFactoryResolver = new os(this);
    instance = null;
    constructor(t) { super(); let n = new Qa([...t.providers, { provide: Vn, useValue: this }, { provide: wr, useValue: this.componentFactoryResolver }], t.parent || ni(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function gd(e, t, n = null) { return new ar({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var NS = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = za(!1, n.type), r = o.length > 0 ? gd([o], this._injector, `Standalone[${n.type.name}]`) : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e(Re(vt)) });
} return e; })();
function sy(e) { return qe(() => { let t = uy(e), n = Fe(W({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === vs.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(NS).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || ot.Emulated, styles: e.styles || L, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && Y("NgStandalone"), dy(n); let o = e.dependencies; return n.directiveDefs = ss(o, ay), n.pipeDefs = ss(o, je), n.id = bS(n), n; }); }
function ay(e) { return q(e) || Ne(e); }
function md(e) { return qe(() => ({ type: e.type, bootstrap: e.bootstrap || L, declarations: e.declarations || L, imports: e.imports || L, exports: e.exports || L, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function _S(e, t) { if (e == null)
    return Me; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = ks.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function wS(e) { if (e == null)
    return Me; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function cy(e) { return qe(() => { let t = uy(e); return dy(t), t; }); }
function ly(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function uy(e) { let t = {}; return { type: e.type, providersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || Me, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || L, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, inputs: _S(e.inputs, t), outputs: wS(e.outputs), debugInfo: null }; }
function dy(e) { e.features?.forEach(t => t(e)); }
function ss(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var SS = new Map;
function bS(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function fy(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function vd(e) { let t = fy(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (ve(e))
        r = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new w(903, !1);
        r = t.\u0275dir;
    }
    if (r) {
        if (n) {
            o.push(r);
            let s = e;
            s.inputs = Gc(e.inputs), s.declaredInputs = Gc(e.declaredInputs), s.outputs = Gc(e.outputs);
            let a = r.hostBindings;
            a && xS(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && OS(e, c), l && kS(e, l), AS(e, r), Vf(e.outputs, r.outputs), ve(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === vd && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} RS(o); }
function AS(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function RS(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = xn(r.hostAttrs, n = xn(n, r.hostAttrs));
} }
function Gc(e) { return e === Me ? {} : e === L ? [] : e; }
function OS(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function kS(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function xS(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
var PS = ["providersResolver"], LS = ["template", "decls", "consts", "vars", "onPush", "ngContentSelectors", "styles", "encapsulation", "schemas"];
function py(e) { let t = fy(e.type), n; ve(e) ? n = t.\u0275cmp : n = t.\u0275dir; let o = e; for (let r of PS)
    o[r] = n[r]; if (ve(n))
    for (let r of LS)
        o[r] = n[r]; }
function hy(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = FS, n.hostDirectives = o ? e.map(Fl) : [e]) : o ? n.hostDirectives.unshift(...e.map(Fl)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function FS(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, gy(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && ve(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function gy(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                eh(Fl(i), t, n);
        }
        else
            eh(o, t, n); }
function eh(e, t, n) { let o = Ne(e.directive); jS(o.declaredInputs, e.inputs), gy(o, t, n), n.set(o, e), t.push(o); }
function Fl(e) { return typeof e == "function" ? { directive: G(e), inputs: Me, outputs: Me } : { directive: G(e.directive), inputs: th(e.inputs), outputs: th(e.outputs) }; }
function th(e) { if (e === void 0 || e.length === 0)
    return Me; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function jS(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function my(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = xn(e.mergedAttrs, e.attrs);
    let u = e.tView = ku(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), Be(e, !1); let c = vy(n, t, e, o); ko() && Wu(n, t, c, e), Se(c, t); let l = Km(c, t, c, e); t[o + E] = l, Pu(t, l), Bv(l, e, t); }
function HS(e, t, n, o, r, i, s, a, c, l, u) { let d = n + E, f; return t.firstCreatePass ? (f = nn(t, d, 4, s || null, a || null), li() && Sv(t, e, f, ce(t.consts, l), Yu), Vh(t, f)) : f = t.data[d], my(f, e, t, n, o, r, i, c), fn(f) && Hs(t, e, f), l != null && io(e, f, u), f; }
function Zt(e, t, n, o, r, i, s, a, c, l, u) { let d = n + E, f; if (t.firstCreatePass) {
    if (f = nn(t, d, 4, s || null, a || null), l != null) {
        let p = ce(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return my(f, e, t, n, o, r, i, c), l != null && io(e, f, u), f; }
function yd(e, t, n, o, r, i, s, a) { let c = g(), l = _(), u = ce(l.consts, i); return HS(c, l, e, t, n, o, r, u, void 0, s, a), yd; }
function Ed(e, t, n, o, r, i, s, a) { let c = g(), l = _(), u = ce(l.consts, i); return Zt(c, l, e, t, n, o, r, u, void 0, s, a), Ed; }
var vy = yy;
function yy(e, t, n, o) { return xe(!0), t[T].createComment(""); }
function VS(e, t, n, o) { let r = !bs(t, n); xe(r); let i = t[ne]?.data[Es]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return yy(e, t); let s = t[ne], a = _r(s, e, t, n); ws(s, o, a); let c = Cu(s, o); return Qs(c, a); }
function Ey() { vy = VS; }
var X = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(X || {}), nh = 0, BS = 1, U = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })(U || {}), cr = (function (e) { return e[e.Initial = -1] = "Initial", e; })(cr || {}), An = 0, dt = 1, Fo = 2, Ci = 3, US = 4, $S = 5, na = 6, GS = 7, Rn = 8, qS = 9, Id = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(Id || {});
function br(e, t, n) { let o = Dy(e); t[o] === null && (t[o] = []), t[o].push(n); }
function ki(e, t) { let n = Dy(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function Iy(e) { ki(1, e), ki(0, e), ki(2, e); }
function Dy(e) { let t = US; return e === 1 ? t = $S : e === 2 && (t = qS), t; }
function Ar(e) { return e + 1; }
function he(e, t) { let n = e[v], o = Ar(t.index); return e[o]; }
function WS(e, t, n) { let o = e[v], r = Ar(t); e[r] = n; }
function ie(e, t) { let n = Ar(t.index); return e.data[n]; }
function zS(e, t, n) { let o = Ar(t); e.data[o] = n; }
function QS(e, t, n) { let o = t[v], r = ie(o, n); switch (e) {
    case U.Complete: return r.primaryTmplIndex;
    case U.Loading: return r.loadingTmplIndex;
    case U.Error: return r.errorTmplIndex;
    case U.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function jl(e, t) { return t === U.Placeholder ? e.placeholderBlockConfig?.[nh] ?? null : t === U.Loading ? e.loadingBlockConfig?.[nh] ?? null : null; }
function Cy(e) { return e.loadingBlockConfig?.[BS] ?? null; }
function oh(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function ZS(e, t) { let n = t.primaryTmplIndex + E; return It(e, n); }
function Ty(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function My(e, t) { let n = null, o = Ar(t.index); return E < o && o < e.bindingStartIndex && (n = ie(e, t)), !!n && Ty(n); }
function Dd(e, t, n) { let o = n.get(j); return wM(e, () => o.run(t), () => o.runOutsideAngular(() => _M())); }
function YS(e, t, n) { return n == null ? e : n >= 0 ? np(n, e) : e[t.index][V] ?? null; }
function KS(e, t) { return jt(E + t, e); }
function uo(e, t, n, o, r, i, s) { let a = e[O], c = a.get(j), l; function u() { if (Et(e)) {
    l.destroy();
    return;
} let d = he(e, t), f = d[dt]; if (f !== cr.Initial && f !== U.Placeholder) {
    l.destroy();
    return;
} let p = YS(e, t, o); if (!p || (l.destroy(), Et(p)))
    return; let h = KS(p, n), m = r(h, () => { c.run(() => { e !== p && tc(p, m), i(); }); }, a); e !== p && ci(p, m), br(s, d, m); } l = Nm({ read: u }, { injector: a }); }
function oa(e, t) { let n = t.get(eb), o = () => n.remove(e); return n.add(e), o; }
var JS = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, XS = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, eb = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = D(j);
    requestIdleCallbackFn = JS().bind(globalThis);
    cancelIdleCallbackFn = XS().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: o, deferred: r } = this; o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let o of this.current)
        o(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let o of this.deferred)
            this.current.add(o);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function ra(e) { return (t, n) => Ny(e, t, n); }
function Ny(e, t, n) { let o = n.get(_y), r = n.get(j), i = () => o.remove(t); return o.add(e, t, r), i; }
var _y = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, o, r) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, o), this.scheduleTimer(r); }
    remove(n) { let { current: o, deferred: r } = this; this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout(); }
    addToQueue(n, o, r) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > o) {
            i = s;
            break;
        } qf(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && Wa(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && Wa(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(o), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), tb = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? gd(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), nb = new S("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), wy = new S("");
function qc(e, t, n) { return e.get(tb).getOrCreateInjector(t, e, n, ""); }
function ob(e, t, n) { if (e instanceof bn) {
    let r = e.injector, i = e.parentInjector, s = qc(i, t, n);
    return new bn(r, s);
} let o = e.get(vt); if (o !== e) {
    let r = qc(o, t, n);
    return new bn(e, r);
} return qc(e, t, n); }
function tt(e, t, n, o = !1) { let r = n[z], i = r[v]; if (Et(r))
    return; let s = he(r, t), a = s[dt], c = s[GS]; if (!(c !== null && e < c) && ih(a, e) && ih(s[An] ?? -1, e)) {
    let l = ie(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (Cy(l) !== null || jl(l, U.Loading) !== null || jl(l, U.Placeholder)) ? Hl : Sy;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        Ku(r, f);
    }
} }
function rb(e, t) { let n = e[De]?.findIndex(r => r.data[vr] === t[dt]) ?? -1; return { dehydratedView: n > -1 ? e[De][n] : null, dehydratedViewIx: n }; }
function Sy(e, t, n, o, r) { x(20); let i = QS(e, r, o); if (i !== null) {
    t[dt] = e;
    let s = r[v], a = i + E, c = It(s, a), l = 0;
    Ju(n, l);
    let u;
    if (e === U.Complete) {
        let h = ie(s, o), m = h.providers;
        m && m.length > 0 && (u = ob(r[O], h, m));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = rb(n, t), p = so(r, c, null, { injector: u, dehydratedView: d });
    if (ao(n, p, l, zt(c, d)), Nr(p, 2), f > -1 && n[De]?.splice(f, 1), (e === U.Complete || e === U.Error) && Array.isArray(t[Rn])) {
        for (let h of t[Rn])
            h();
        t[Rn] = null;
    }
} x(21); }
function ib(e, t, n, o, r) { let i = Date.now(), s = r[v], a = ie(s, o); if (t[Fo] === null || t[Fo] <= i) {
    t[Fo] = null;
    let c = Cy(a), l = t[Ci] !== null;
    if (e === U.Loading && c !== null && !l) {
        t[An] = e;
        let u = rh(c, t, o, n, r);
        t[Ci] = u;
    }
    else {
        e > U.Loading && l && (t[Ci](), t[Ci] = null, t[An] = null), Sy(e, t, n, o, r);
        let u = jl(a, e);
        u !== null && (t[Fo] = i + u, rh(u, t, o, n, r));
    }
}
else
    t[An] = e; }
function rh(e, t, n, o, r) { return Ny(e, () => { let s = t[An]; t[Fo] = null, t[An] = null, s !== null && tt(s, n, o); }, r[O]); }
function ih(e, t) { return e < t; }
function fo(e, t) { let n = e[t.index]; tt(U.Placeholder, t, n); }
function sh(e, t, n) { e.loadingPromise.then(() => { e.loadingState === X.COMPLETE ? tt(U.Complete, t, n) : e.loadingState === X.FAILED && tt(U.Error, t, n); }); }
var Hl = null;
function by(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = ce(r, n)), o != null && (t.loadingBlockConfig = ce(r, o)), Hl === null && (Hl = ib); }
var xi = "__ngAsyncComponentMetadataFn__";
function sb(e) { return e[xi] ?? null; }
function Ay(e, t, n) { let o = e; return o[xi] = () => Promise.all(t()).then(r => (n(...r), o[xi] = null, r)), o[xi]; }
function Cd(e, t, n, o) { return qe(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = W(W({}, r.propDecorators), o) : r.propDecorators = o); }); }
var ab = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Pi(e, t) { let n = e[v]; for (let o = E; o < n.bindingStartIndex; o++)
    if (J(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = ie(n, s);
            if (Ty(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        K(r[H]) && Pi(r[H], t);
        for (let s = V; s < r.length; s++)
            Pi(r[s], t);
    }
    else
        K(e[o]) && Pi(e[o], t); }
function cb() { return Y("Chrome DevTools profiling"), () => { }; }
function lb(e) { let t = st(), n = e.get(at), o = mg(t, n), r = {}; for (let [i, s] of Object.entries(o))
    AM(i) || (r[i] = s); return r; }
var ah = "ng";
function ub(e, t) { db(e, t); }
function db(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = Ee;
    n[ah] ??= {}, n[ah][e] = t;
} }
var Ry = new S(""), Oy = new S(""), fb = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, Za() && (this._destroyRef = D(hn, { optional: !0 }) ?? void 0), Td || (xy(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { j.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, o, r) { let i = -1; o && o > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, o)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r }); }
    whenStable(n, o, r) { if (r && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, o, r), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, o, r) { return []; }
    static \u0275fac = function (o) { return new (o || e)(Re(j), Re(ky), Re(Oy)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac });
} return e; })(), ky = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return Td?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function xy(e) { Td = e; }
var Td;
function Md(e) { return !!e && typeof e.then == "function"; }
function Py(e) { return !!e && typeof e.subscribe == "function"; }
var Nd = new S("");
function pb(e) { return Qe([{ provide: Nd, multi: !0, useValue: e }]); }
var _d = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = D(Nd, { optional: !0 }) ?? [];
    injector = D(Ce);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = oi(this.injector, r);
        if (Md(i))
            n.push(i);
        else if (Py(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), Rr = new S("");
function wd() { jf(() => { let e = ""; throw new w(600, e); }); }
function Ly(e) { return e.isBoundToModule; }
var Vl = class {
    name;
    token;
    constructor(t, n) { this.name = t, this.token = n; }
}, hb = 10;
function Sd(e, t) { return Array.isArray(t) ? t.reduce(Sd, e) : W(W({}, e), t); }
var Le = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = D(Tt);
    afterRenderManager = D(Ps);
    zonelessEnabled = D(gn);
    rootEffectScheduler = D(Sc);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new Vr;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = D(Mt);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(gT(n => !n)); }
    constructor() { D(ro, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = D(vt);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = Ce.NULL) { return this._injector.get(j).run(() => { x(10); let s = n instanceof Js; if (!this._injector.get(_d).done) {
        let h = "";
        throw new w(405, h);
    } let c; s ? c = n : c = this._injector.get(wr).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = Ly(c) ? void 0 : this._injector.get(Vn), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(Ry, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), Bo(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), x(11, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { x(12), this.tracingSnapshot !== null ? this.tracingSnapshot.run(xs.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw new w(101, !1); let n = R(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, R(n), this.afterTick.next(), x(13);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(rr, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < hb;)
        x(14), this.synchronizeOnce(), x(15); }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !Ao(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            Wm(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => Ao(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; Bo(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(Rr, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => Bo(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new w(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Bo(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function bd() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function Fy(e) { let t = g(), n = M(); if (fo(t, n), !Vy(0, t))
    return; let o = t[O], r = he(t, n), i = e(() => ge(0, t, n), o); br(0, r, i); }
function jy(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = g(), n = t[O], o = M(), r = t[v], i = ie(r, o); if (i.loadingState === X.NOT_STARTED) {
    let s = he(t, o), c = e(() => Or(i, t, o), n);
    br(1, s, c);
} }
function Hy(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[O], r = he(t, n), i = r[na], s = e(() => ft(o, i), o); br(2, r, s); }
function Or(e, t, n) { ia(e, t, n); }
function ia(e, t, n) { let o = t[O], r = t[v]; if (e.loadingState !== X.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = he(t, n), s = ZS(r, e); e.loadingState = X.IN_PROGRESS, ki(1, i); let a = e.dependencyResolverFn, c = o.get(wc).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = [], f = []; for (let p of l)
    if (p.status === "fulfilled") {
        let h = p.value, m = q(h) || Ne(h);
        if (m)
            d.push(m);
        else {
            let y = je(h);
            y && f.push(y);
        }
    }
    else {
        u = !0;
        break;
    } if (u) {
    if (e.loadingState = X.FAILED, e.errorTmplIndex === null) {
        let h = new w(-750, !1);
        Ku(t, h);
    }
}
else {
    e.loadingState = X.COMPLETE;
    let p = s.tView;
    if (d.length > 0) {
        p.directiveRegistry = oh(p.directiveRegistry, d);
        let h = d.map(y => y.type), m = za(!1, ...h);
        e.providers = m;
    }
    f.length > 0 && (p.pipeRegistry = oh(p.pipeRegistry, f));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = X.COMPLETE, c(); }), e.loadingPromise); }
function Vy(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[O].get(wy, null, { optional: !0 })?.behavior === Id.Manual); }
function ge(e, t, n) { let o = t[v], r = t[n.index]; if (!Vy(e, t))
    return; let i = he(t, n), s = ie(o, n); switch (Iy(i), s.loadingState) {
    case X.NOT_STARTED:
        tt(U.Loading, n, r), ia(s, t, n), s.loadingState === X.IN_PROGRESS && sh(s, n, r);
        break;
    case X.IN_PROGRESS:
        tt(U.Loading, n, r), sh(s, n, r);
        break;
    case X.COMPLETE:
        tt(U.Complete, n, r);
        break;
    case X.FAILED:
        tt(U.Error, n, r);
        break;
    default:
} }
function ft(e, t, n) { return mo(this, null, function* () { let o = e.get(ct); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = HM(t, e); if (s.length === 0)
    return; i !== null && s.shift(), vb(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield ch(e, s, n) : o.awaitParentBlock(a, () => mo(null, null, function* () { return yield ch(e, s, n); })); }); }
function ch(e, t, n) { return mo(this, null, function* () { let o = e.get(ct), r = o.hydrating, i = e.get(Mt), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield Eb(u), yield yb(e), gb(u)) {
            Tw(u), lh(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        mb(c, t, o), lh(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), Mw(o.get(a), t, o, e.get(Le)); }); }
function gb(e) { return he(e.lView, e.tNode)[dt] === U.Error; }
function mb(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && Ks(r.lContainer); }
function lh(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function vb(e, t) { for (let n of t)
    e.hydrating.set(n, bd()); }
function yb(e) { return new Promise(t => Bu(t, { injector: e })); }
function Eb(e) { return mo(this, null, function* () { let { tNode: t, lView: n } = e, o = he(n, t); return new Promise(r => { Ib(o, r), ge(2, n, t); }); }); }
function Ib(e, t) { Array.isArray(e[Rn]) || (e[Rn] = []), e[Rn].push(t); }
function Q(e, t, n) { return e === 0 ? uh(t, n) : e === 2 ? !uh(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function Db(e) { return e != null && (e & 1) === 1; }
function uh(e, t) { let n = e[O], o = ie(e[v], t), r = Er(n), i = Db(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = he(e, t)[na] !== null; return !(i && a && r); }
function At(e, t) { let n = ie(e, t); return n.hydrateTriggers ??= new Map; }
function By(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[nt], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && i.push(p);
        }
    }
} Cb(e, o), Nb(e, s), Tb(e, i), Mb(e, r); }
function Cb(e, t) { for (let n of t) {
    let o = e.get(ct), i = oa(() => ft(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function Tb(e, t) { if (t.length > 0) {
    let n = e.get(ct);
    for (let o of t) {
        let r = Dd(o.el, () => ft(e, o.blockName), e);
        n.addCleanupFn(o.blockName, r);
    }
} }
function Mb(e, t) { for (let n of t) {
    let o = e.get(ct), r = () => ft(e, n.blockName), s = ra(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function Nb(e, t) { for (let n of t)
    ft(e, n.blockName); }
function Uy(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = _(), f = e + E, p = Zt(u, d, e, null, 0, 0), h = u[O], m = Er(h); if (d.firstCreatePass) {
    Y("NgDefer");
    let ze = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: X.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, ze, a, s), zS(d, f, ze);
} let y = u[f]; Bv(y, p, u); let I = null, A = null; if (y[De]?.length > 0) {
    let ze = y[De][0].data;
    A = ze[Cs] ?? null, I = ze[vr];
} let le = [null, cr.Initial, null, null, null, null, A, I, null, null]; WS(u, f, le); let Ae = null; A !== null && m && (Ae = h.get(ct), Ae.add(A, { lView: u, tNode: p, lContainer: y })); let Te = () => { Iy(le), A !== null && Ae?.cleanup([A]); }; br(0, le, () => tc(u, Te)), ci(u, Te); }
function $y(e) { let t = g(), n = we(); if (!Q(0, t, n))
    return; let o = fe(); if ($(t, o, e)) {
    let r = R(null);
    try {
        let i = !!e, a = he(t, n)[dt];
        i === !1 && a === cr.Initial ? fo(t, n) : i === !0 && (a === cr.Initial || a === U.Placeholder) && ge(0, t, n);
    }
    finally {
        R(r);
    }
} }
function Gy(e) { let t = g(), n = we(); if (!Q(1, t, n))
    return; let o = fe(); if ($(t, o, e)) {
    let r = R(null);
    try {
        let i = !!e, s = t[v], a = ie(s, n);
        i === !0 && a.loadingState === X.NOT_STARTED && Or(a, t, n);
    }
    finally {
        R(r);
    }
} }
function qy(e) { let t = g(), n = we(); if (!Q(2, t, n))
    return; let o = fe(), r = _(); if (At(r, n).set(6, null), $(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        ge(2, t, n);
    else {
        let s = t[O], a = R(null);
        try {
            if (!!e === !0) {
                let u = he(t, n)[na];
                ft(s, u);
            }
        }
        finally {
            R(a);
        }
    } }
function Wy() { let e = g(), t = M(); if (!Q(2, e, t))
    return; At(_(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && ge(2, e, t); }
function zy() { let e = g(), t = M(); Q(0, e, t) && Fy(oa); }
function Qy() { let e = g(), t = M(); Q(1, e, t) && jy(oa); }
function Zy() { let e = g(), t = M(); if (!Q(2, e, t))
    return; At(_(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? ge(2, e, t) : Hy(oa, e, t); }
function Yy() { let e = g(), t = M(); if (!Q(0, e, t))
    return; ie(e[v], t).loadingTmplIndex === null && fo(e, t), ge(0, e, t); }
function Ky() { let e = g(), t = M(); if (!Q(1, e, t))
    return; let n = e[v], o = ie(n, t); o.loadingState === X.NOT_STARTED && ia(o, e, t); }
function Jy() { let e = g(), t = M(); if (!Q(2, e, t))
    return; if (At(_(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    ge(2, e, t);
else {
    let o = e[O], i = he(e, t)[na];
    ft(o, i);
} }
function Xy(e) { let t = g(), n = M(); Q(0, t, n) && Fy(ra(e)); }
function eE(e) { let t = g(), n = M(); Q(1, t, n) && jy(ra(e)); }
function tE(e) { let t = g(), n = M(); if (!Q(2, t, n))
    return; At(_(), n).set(5, { delay: e }), typeof ngServerMode < "u" && ngServerMode ? ge(2, t, n) : Hy(ra(e), t, n); }
function nE(e, t) { let n = g(), o = M(); Q(0, n, o) && (fo(n, o), typeof ngServerMode < "u" && ngServerMode || uo(n, o, e, t, Dg, () => ge(0, n, o), 0)); }
function oE(e, t) { let n = g(), o = M(); if (!Q(1, n, o))
    return; let r = n[v], i = ie(r, o); i.loadingState === X.NOT_STARTED && uo(n, o, e, t, Dg, () => Or(i, n, o), 1); }
function rE() { let e = g(), t = M(); if (!Q(2, e, t))
    return; At(_(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && ge(2, e, t); }
function iE(e, t) { let n = g(), o = M(); Q(0, n, o) && (fo(n, o), typeof ngServerMode < "u" && ngServerMode || uo(n, o, e, t, Ig, () => ge(0, n, o), 0)); }
function sE(e, t) { let n = g(), o = M(); if (!Q(1, n, o))
    return; let r = n[v], i = ie(r, o); i.loadingState === X.NOT_STARTED && uo(n, o, e, t, Ig, () => Or(i, n, o), 1); }
function aE() { let e = g(), t = M(); if (!Q(2, e, t))
    return; At(_(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && ge(2, e, t); }
function cE(e, t) { let n = g(), o = M(); Q(0, n, o) && (fo(n, o), typeof ngServerMode < "u" && ngServerMode || uo(n, o, e, t, Dd, () => ge(0, n, o), 0)); }
function lE(e, t) { let n = g(), o = M(); if (!Q(1, n, o))
    return; let r = n[v], i = ie(r, o); i.loadingState === X.NOT_STARTED && uo(n, o, e, t, Dd, () => Or(i, n, o), 1); }
function uE() { let e = g(), t = M(); if (!Q(2, e, t))
    return; At(_(), t).set(2, null), typeof ngServerMode < "u" && ngServerMode && ge(2, e, t); }
function Ad(e, t) { let n = g(), o = fe(); if ($(n, o, t)) {
    let r = _(), i = we();
    if ($s(i, r, n, e, t))
        me(i) && Vm(n, i.index);
    else {
        let a = oe(i, n);
        Vs(n[T], a, null, i.value, e, t, null);
    }
} return Ad; }
function Rd(e, t, n, o) { let r = g(), i = fe(); if ($(r, i, t)) {
    let s = _(), a = we();
    g_(a, r, e, t, n, o);
} return Rd; }
var dE = new S("", { providedIn: "root", factory: () => !1 }), fE = new S("", { providedIn: "root", factory: () => _b }), _b = 4e3, wb = !1, on = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function sa(e) { return e[O].get(dE, wb); }
function Sb(e, t, n) { let o = $n.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    $n.set(e, { classList: t, cleanupFns: n }); }
function Od(e) { let t = $n.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    $n.delete(e);
} Gt.delete(e); }
var bb = () => { }, $n = new WeakMap, Gt = new WeakMap, On = new WeakMap;
function Bl(e, t) { let n = On.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && On.delete(e); }
function aa(e, t) { let n = On.get(e)?.shift(), o = t[Ye]; if (o) {
    let i = Ki(e.index, o)?.previousSibling;
    n && i && n === i && n.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }));
} }
function pE(e, t) { On.has(e) ? On.get(e)?.push(t) : On.set(e, [t]); }
function as(e) { let t = e[Ke] ??= {}; return t.enter ??= new Map; }
function Yt(e) { let t = e[Ke] ??= {}; return t.leave ??= new Map; }
function hE(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function Ab(e, t) { if (!on)
    return; let n = $n.get(e); if (n && n.classList.length > 0 && Rb(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); Od(e); }
function Rb(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function gE(e, t) { let n = Gt.get(t); return n === void 0 ? !0 : t === e.target && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && e.propertyName === n.propertyName); }
function ca(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function Ul(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function $l(e, t) { let n = Yt(e).get(t.index); n && (n.resolvers = void 0); }
function Ti(e, t, n, o, r) { Bl(t, n), Ul(o, r), $l(e, t); }
function Uo(e) { if (Y("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !on)
    return Uo; let t = g(); if (sa(t))
    return Uo; let n = M(); return aa(n, t), ca(as(t), n, () => Ob(t, n, e)), Fs(t[O]), $u(t[O], as(t)), Uo; }
function Ob(e, t, n) { let o = oe(t, e), r = e[T], i = e[O].get(j), s = hE(n), a = [], c = u => { if (u.target !== o)
    return; let d = u instanceof AnimationEvent ? "animationend" : "transitionend"; i.runOutsideAngular(() => { r.listen(o, d, l); }); }, l = u => { u.target === o && kb(u, o, r); }; if (s && s.length > 0) {
    i.runOutsideAngular(() => { a.push(r.listen(o, "animationstart", c)), a.push(r.listen(o, "transitionstart", c)); }), Sb(o, s, a);
    for (let u of s)
        r.addClass(o, u);
    i.runOutsideAngular(() => { requestAnimationFrame(() => { if (Im(o, Gt, on), !Gt.has(o)) {
        for (let u of s)
            r.removeClass(o, u);
        Od(o);
    } }); });
} }
function kb(e, t, n) { let o = $n.get(t); if (!(e.target !== t || !o) && gE(e, t)) {
    e.stopImmediatePropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    Od(t);
} }
function $o(e) { if (Y("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !on)
    return $o; let t = g(); if (sa(t))
    return $o; let n = M(); return aa(n, t), ca(as(t), n, () => xb(t, n, e)), Fs(t[O]), $u(t[O], as(t)), $o; }
function xb(e, t, n) { let o = oe(t, e); n.call(e[F], { target: o, animationComplete: bb }); }
function Go(e) { if (Y("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !on)
    return Go; let t = g(); if (sa(t))
    return Go; let o = M(); return aa(o, t), ca(Yt(t), o, () => Pb(t, o, e)), Fs(t[O]), Go; }
function Pb(e, t, n) { let { promise: o, resolve: r } = bd(), i = oe(t, e), s = e[T], a = e[O].get(j); Pn.add(e), (Yt(e).get(t.index).resolvers ??= []).push(r); let c = hE(n); return c && c.length > 0 ? Lb(i, t, e, c, s, a) : r(), { promise: o, resolve: r }; }
function Lb(e, t, n, o, r, i) { Ab(e, r); let s = [], a = Yt(n).get(t.index)?.resolvers, c = l => { if (l.target === e && (l instanceof CustomEvent || gE(l, e))) {
    if (l.stopImmediatePropagation(), Gt.delete(e), Bl(t, e), Array.isArray(t.projection))
        for (let u of o)
            r.removeClass(e, u);
    Ul(a, s), $l(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", c)), s.push(r.listen(e, "transitionend", c)); }), pE(t, e); for (let l of o)
    r.addClass(e, l); i.runOutsideAngular(() => { requestAnimationFrame(() => { Im(e, Gt, on), Gt.has(e) || (Bl(t, e), Ul(a, s), $l(n, t)); }); }); }
function cs(e) { if (Y("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !on)
    return cs; let t = g(), n = M(); return aa(n, t), Pn.add(t), ca(Yt(t), n, () => Fb(t, n, e)), Fs(t[O]), cs; }
function Fb(e, t, n) { let { promise: o, resolve: r } = bd(), i = oe(t, e), s = [], a = e[T], c = sa(e), l = e[O].get(j), u = e[O].get(fE); (Yt(e).get(t.index).resolvers ??= []).push(r); let d = Yt(e).get(t.index)?.resolvers; if (c)
    Ti(e, t, i, d, s);
else {
    let f = setTimeout(() => Ti(e, t, i, d, s), u), p = { target: i, animationComplete: () => { Ti(e, t, i, d, s), clearTimeout(f); } };
    pE(t, i), l.runOutsideAngular(() => { s.push(a.listen(i, "animationend", () => { Ti(e, t, i, d, s), clearTimeout(f); }, { once: !0 })); }), n.call(e[F], p);
} return { promise: o, resolve: r }; }
function mE() { return g()[Z][F]; }
var Gl = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let o = Math.min(t, n), r = Math.max(t, n), i = this.detach(r); if (r - o > 1) {
        let s = this.detach(o);
        this.attach(o, i), this.attach(r, s);
    }
    else
        this.attach(o, i); }
    move(t, n) { this.attach(n, this.detach(t, !0)); }
};
function Wc(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function jb(e, t, n) { let o, r, i = 0, s = e.length - 1, a = void 0; if (Array.isArray(t)) {
    let c = t.length - 1;
    for (; i <= s && i <= c;) {
        let l = e.at(i), u = t[i], d = Wc(i, l, i, u, n);
        if (d !== 0) {
            d < 0 && e.updateValue(i, u), i++;
            continue;
        }
        let f = e.at(s), p = t[c], h = Wc(s, f, c, p, n);
        if (h !== 0) {
            h < 0 && e.updateValue(s, p), s--, c--;
            continue;
        }
        let m = n(i, l), y = n(s, f), I = n(i, u);
        if (Object.is(I, y)) {
            let A = n(c, p);
            Object.is(A, m) ? (e.swap(i, s), e.updateValue(s, p), c--, s--) : e.move(s, i), e.updateValue(i, u), i++;
            continue;
        }
        if (o ??= new ls, r ??= fh(e, i, s, n), ql(e, o, i, I))
            e.updateValue(i, u), i++, s++;
        else if (r.has(I))
            o.set(m, e.detach(i)), s--;
        else {
            let A = e.create(i, t[i]);
            e.attach(i, A), i++, s++;
        }
    }
    for (; i <= c;)
        dh(e, o, n, i, t[i]), i++;
}
else if (t != null) {
    let c = t[Symbol.iterator](), l = c.next();
    for (; !l.done && i <= s;) {
        let u = e.at(i), d = l.value, f = Wc(i, u, i, d, n);
        if (f !== 0)
            f < 0 && e.updateValue(i, d), i++, l = c.next();
        else {
            o ??= new ls, r ??= fh(e, i, s, n);
            let p = n(i, d);
            if (ql(e, o, i, p))
                e.updateValue(i, d), i++, s++, l = c.next();
            else if (!r.has(p))
                e.attach(i, e.create(i, d)), i++, s++, l = c.next();
            else {
                let h = n(i, u);
                o.set(h, e.detach(i)), s--;
            }
        }
    }
    for (; !l.done;)
        dh(e, o, n, e.length, l.value), l = c.next();
} for (; i <= s;)
    e.destroy(e.detach(s--)); o?.forEach(c => { e.destroy(c); }); }
function ql(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function dh(e, t, n, o, r) { if (ql(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function fh(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var ls = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let o = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let r = this._vMap;
        for (; r.has(o);)
            o = r.get(o);
        r.set(o, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, o] of this.kvMap)
        if (t(o, n), this._vMap !== void 0) {
            let r = this._vMap;
            for (; r.has(o);)
                o = r.get(o), t(o, n);
        } }
};
function vE(e, t, n, o, r, i, s, a) { Y("NgControlFlow"); let c = g(), l = _(), u = ce(l.consts, i); return Zt(c, l, e, t, n, o, r, u, 256, s, a), la; }
function la(e, t, n, o, r, i, s, a) { Y("NgControlFlow"); let c = g(), l = _(), u = ce(l.consts, i); return Zt(c, l, e, t, n, o, r, u, 512, s, a), la; }
function yE(e, t) { Y("NgControlFlow"); let n = g(), o = fe(), r = n[o] !== P ? n[o] : -1, i = r !== -1 ? us(n, E + r) : void 0, s = 0; if ($(n, o, e)) {
    let a = R(null);
    try {
        if (i !== void 0 && Ju(i, s), e !== -1) {
            let c = E + e, l = us(n, c), u = Zl(n[v], c), d = Tv(l, u, n), f = so(n, u, t, { dehydratedView: d });
            ao(l, f, s, zt(u, d));
        }
    }
    finally {
        R(a);
    }
}
else if (i !== void 0) {
    let a = Jm(i, s);
    a !== void 0 && (a[F] = t);
} }
var Wl = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - V; }
};
function EE(e) { return e; }
function IE(e, t) { return t; }
var zl = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function DE(e, t, n, o, r, i, s, a, c, l, u, d, f) { Y("NgControlFlow"); let p = g(), h = _(), m = c !== void 0, y = g(), I = a ? s.bind(y[Z][F]) : s, A = new zl(m, I); y[E + e] = A, Zt(p, h, e + 1, t, n, o, r, ce(h.consts, i), 256), m && Zt(p, h, e + 2, c, l, u, d, ce(h.consts, f), 512); }
var Ql = class extends Gl {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - V; }
    at(t) { return this.getLView(t)[F].$implicit; }
    attach(t, n) { let o = n[ne]; this.needsIndexUpdate ||= t !== this.length, ao(this.lContainer, n, t, zt(this.templateTNode, o)); }
    detach(t, n) { return this.needsIndexUpdate ||= t !== this.length - 1, n && Hb(this.lContainer, t), Vb(this.lContainer, t); }
    create(t, n) { let o = or(this.lContainer, this.templateTNode.tView.ssrId), r = so(this.hostLView, this.templateTNode, new Wl(this.lContainer, n, t), { dehydratedView: o }); return this.operationsCounter?.recordCreate(), r; }
    destroy(t) { Mr(t[v], t), this.operationsCounter?.recordDestroy(); }
    updateValue(t, n) { this.getLView(t)[F].$implicit = n; }
    reset() { this.needsIndexUpdate = !1, this.operationsCounter?.reset(); }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[F].$index = t; }
    getLView(t) { return Bb(this.lContainer, t); }
};
function CE(e) { let t = R(null), n = re(); try {
    let o = g(), r = o[v], i = o[n], s = n + 1, a = us(o, s);
    if (i.liveCollection === void 0) {
        let l = Zl(r, s);
        i.liveCollection = new Ql(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (jb(c, e, i.trackByFn), c.updateIndexes(), i.hasEmptyBlock) {
        let l = fe(), u = c.length === 0;
        if ($(o, l, u)) {
            let d = n + 2, f = us(o, d);
            if (u) {
                let p = Zl(r, d), h = Tv(f, p, o), m = so(o, p, void 0, { dehydratedView: h });
                ao(f, m, 0, zt(p, h));
            }
            else
                r.firstUpdatePass && Ys(f), Ju(f, 0);
        }
    }
}
finally {
    R(t);
} }
function us(e, t) { return e[t]; }
function Hb(e, t) { if (e.length <= V)
    return; let n = V + t, o = e[n]; o && o[Ke] && (o[Ke].skipLeaveAnimations = !0); }
function Vb(e, t) { return tr(e, t); }
function Bb(e, t) { return Jm(e, t); }
function Zl(e, t) { return It(e, t); }
function kd(e, t, n) { let o = g(), r = fe(); if ($(o, r, t)) {
    let i = _(), s = we();
    Qu(s, o, e, t, o[T], n);
} return kd; }
function Yl(e, t, n, o, r) { $s(t, e, n, r ? "class" : "style", o); }
function ua(e, t, n, o) { let r = g(), i = r[v], s = e + E, a = i.firstCreatePass ? rd(s, r, 2, t, Yu, li(), n, o) : i.data[s]; if (Bs(a, r, e, t, Ld), fn(a)) {
    let c = r[v];
    Hs(c, r, a), Mu(c, a, r);
} return o != null && io(r, a), ua; }
function da() { let e = _(), t = M(), n = Us(t); return e.firstCreatePass && id(e, n), oc(n) && sc(), nc(), n.classesWithoutHost != null && _T(n) && Yl(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && wT(n) && Yl(e, n, g(), n.stylesWithoutHost, !1), da; }
function xd(e, t, n, o) { return ua(e, t, n, o), da(), xd; }
function fa(e, t, n, o) { let r = g(), i = r[v], s = e + E, a = i.firstCreatePass ? Av(s, i, 2, t, n, o) : i.data[s]; return Bs(a, r, e, t, Ld), o != null && io(r, a), fa; }
function pa() { let e = M(), t = Us(e); return oc(t) && sc(), nc(), pa; }
function Pd(e, t, n, o) { return fa(e, t, n, o), pa(), Pd; }
var Ld = (e, t, n, o, r) => (xe(!0), Rs(t[T], o, Cc()));
function Ub(e, t, n, o, r) { let i = !bs(t, n); if (xe(i), i)
    return Rs(t[T], o, Cc()); let s = t[ne], a = _r(s, e, t, n); return Pg(s, r) && ws(s, r, a.nextSibling), s && (au(n) || og(a)) && me(n) && (cp(n), pm(a)), a; }
function TE() { Ld = Ub; }
function ha(e, t, n) { let o = g(), r = o[v], i = e + E, s = r.firstCreatePass ? rd(i, o, 8, "ng-container", Yu, li(), t, n) : r.data[i]; if (Bs(s, o, e, "ng-container", Vd), fn(s)) {
    let a = o[v];
    Hs(a, o, s), Mu(a, s, o);
} return n != null && io(o, s), ha; }
function kr() { let e = _(), t = M(), n = Us(t); return e.firstCreatePass && id(e, n), kr; }
function Fd(e, t, n) { return ha(e, t, n), kr(), Fd; }
function ga(e, t, n) { let o = g(), r = o[v], i = e + E, s = r.firstCreatePass ? Av(i, r, 8, "ng-container", t, n) : r.data[i]; return Bs(s, o, e, "ng-container", Vd), n != null && io(o, s), ga; }
function jd() { let e = M(), t = Us(e); return kr; }
function Hd(e, t, n) { return ga(e, t, n), jd(), Hd; }
var Vd = (e, t, n, o, r) => (xe(!0), Ou(t[T], ""));
function $b(e, t, n, o, r) { let i, s = !bs(t, n); if (xe(s), s)
    return Ou(t[T], ""); let a = t[ne], c = _r(a, e, t, n), l = xg(a, r); return ws(a, r, c), i = Qs(l, c), i; }
function ME() { Vd = $b; }
function NE() { return g(); }
function Bd(e, t, n) { let o = g(), r = fe(); if ($(o, r, t)) {
    let i = _(), s = we();
    Zu(s, o, e, t, o[T], n);
} return Bd; }
function Ud(e, t, n) { let o = g(), r = fe(); if ($(o, r, t)) {
    let i = _(), s = we(), a = ui(i.data), c = Bm(a, s, o);
    Zu(s, o, e, t, c, n);
} return Ud; }
var Mi = void 0;
function Gb(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var qb = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Mi, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Mi, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", Mi, "{1} 'at' {0}", Mi], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", Gb], kn = {};
function Wb(e, t, n) { typeof t != "string" && (n = t, t = e[Gn.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), kn[t] = e, n && (kn[t][Gn.ExtraData] = n); }
function $d(e) { let t = Zb(e), n = ph(t); if (n)
    return n; let o = t.split("-")[0]; if (n = ph(o), n)
    return n; if (o === "en")
    return qb; throw new w(701, !1); }
function zb(e) { return $d(e)[Gn.CurrencyCode] || null; }
function _E(e) { return $d(e)[Gn.PluralCase]; }
function ph(e) { return e in kn || (kn[e] = Ee.ng && Ee.ng.common && Ee.ng.common.locales && Ee.ng.common.locales[e]), kn[e]; }
function Qb() { kn = {}; }
var Gn = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(Gn || {});
function Zb(e) { return e.toLowerCase().replace(/_/g, "-"); }
var Yb = ["zero", "one", "two", "few", "many"];
function Kb(e, t) { let n = _E(t)(parseInt(e, 10)), o = Yb[n]; return o !== void 0 ? o : "other"; }
var xr = "en-US", Jb = "USD", wE = { marker: "element" }, SE = { marker: "ICU" }, Xe = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(Xe || {}), bE = xr;
function AE(e) { typeof e == "string" && (bE = e.toLowerCase().replace(/_/g, "-")); }
function Xb() { return bE; }
var lr = 0, qo = 0;
function eA(e) { e && (lr = lr | 1 << Math.min(qo, 31)), qo++; }
function tA(e, t, n) { if (qo > 0) {
    let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = Ue() - qo - 1;
    xE(e, t, r, i, lr);
} lr = 0, qo = 0; }
function RE(e, t, n) { let o = e[T]; switch (n) {
    case Node.COMMENT_NODE: return Ou(o, t);
    case Node.TEXT_NODE: return Ru(o, t);
    case Node.ELEMENT_NODE: return Rs(o, t, null);
} }
var Wo = (e, t, n, o) => (xe(!0), RE(e, n, o));
function nA(e, t, n, o) { let r = e[ne], i = t - E, s = !Zs() || !r || Ro() || Ss(r, i); return xe(s), s ? RE(e, n, o) : av(r, i); }
function OE() { Wo = nA; }
function oA(e, t, n, o) { let r = e[T]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & Xe.COMMENT) === Xe.COMMENT, l = (s & Xe.APPEND_EAGERLY) === Xe.APPEND_EAGERLY, u = s >>> Xe.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = Wo(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = ko()), l && n !== null && f && Wt(r, n, d, o, !1);
} }
function kE(e, t, n, o) { let r = n[T], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = Wo(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = ew(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = k(n[l])), d !== null) {
                    let m = tw(c), y = n[m];
                    Wt(r, d, y, u, !1);
                    let I = jo(e, m);
                    if (I !== null && typeof I == "object") {
                        let A = zs(I, n);
                        A !== null && kE(e, I.create[A], n, n[I.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                Vs(r, jt(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case SE:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = Wo(n, u, l, Node.COMMENT_NODE);
                    Se(p, n);
                }
                break;
            case wE:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = Wo(n, f, d, Node.ELEMENT_NODE);
                    Se(p, n);
                }
                break;
            default:
        }
} }
function xE(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += N(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            typeof h == "string" ? Vs(t[T], t[d], null, h, f, c, p) : Qu(h, t, f, c, t[T], p);
                            break;
                        case 0:
                            let m = t[d];
                            m !== null && dm(t[T], m, c);
                            break;
                        case 2:
                            rA(e, jo(e, d), t, c);
                            break;
                        case 3:
                            hh(e, jo(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = jo(e, l);
            t[u.currentCaseLViewIndex] < 0 && hh(e, u, o, t);
        }
    }
    i += a;
} }
function hh(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = lr;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), xE(e, o, t.update[r], n, i);
} }
function rA(e, t, n, o) { let r = iA(t, o); if (zs(t, n) !== r && (PE(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && kE(e, t.create[r], n, s), Ew(n, t.anchorIdx, r);
} }
function PE(e, t, n) { let o = zs(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = jt(s, n);
            a !== null && Cr(n[T], a);
        }
        else
            PE(e, jo(e, ~s), n);
    }
} }
function iA(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = Kb(t, Xb());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var ds = /�(\d+):?\d*�/gi, sA = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, aA = /�(\d+)�/, LE = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, zo = "\uFFFD", cA = /�\/?\*(\d+:\d+)�/gi, lA = /�(\/?[#*]\d+):?\d*�/gi, uA = /\uE500/g;
function dA(e) { return e.replace(uA, " "); }
function fA(e, t, n, o, r, i) { let s = pn(), a = [], c = [], l = [[]], u = [[]]; r = mA(r, i); let d = dA(r).split(lA); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = Kl(p);
        for (let m = 0; m < h.length; m++) {
            let y = h[m];
            if ((m & 1) === 0) {
                let I = y;
                I !== "" && pA(u[0], e, s, l[0], a, c, n, I);
            }
            else {
                let I = y;
                if (typeof I != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let le = FE(e, s, l[0], n, a, "", !0).index;
                HE(u[0], e, n, c, t, I, le);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, m = p.charCodeAt(h ? 1 : 0), y = E + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), Be(pn(), !1);
        else {
            let I = X_(e, l[0], y);
            l.unshift([]), Be(I, !0);
            let A = { kind: 2, index: y, children: [], type: m === 35 ? 0 : 1 };
            u[0].push(A), u.unshift(A.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function FE(e, t, n, o, r, i, s) { let a = Tr(e, o, 1, null), c = a << Xe.SHIFT, l = pn(); t === l && (l = null), l === null && (c |= Xe.APPEND_EAGERLY), s && (c |= Xe.COMMENT, BN(ow)), r.push(c, i === null ? "" : i); let u = Xu(e, a, s ? 32 : 1, i === null ? "" : i, null); ov(n, u); let d = u.index; return Be(u, !1), l !== null && t !== l && J_(l, d), u; }
function pA(e, t, n, o, r, i, s, a) { let c = a.match(ds), u = FE(t, n, o, s, r, c ? null : a, !1).index; c && Qo(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function hA(e, t, n) { let r = M().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (sA.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            Qo(i, c, r, a, gA(i), null);
        }
    }
    e.data[t] = i;
} }
function Qo(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(ds), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | jE(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function gA(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function jE(e) { return 1 << Math.min(e, 31); }
function gh(e) { let t, n = "", o = 0, r = !1, i; for (; (t = cA.exec(e)) !== null;)
    r ? t[0] === `${zo}/*${i}${zo}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function mA(e, t) { if (iv(t))
    return gh(e); {
    let n = e.indexOf(`:${t}${zo}`) + 2 + t.toString().length, o = e.search(new RegExp(`${zo}\\/\\*\\d+:${t}${zo}`));
    return gh(e.substring(n, o));
} }
function HE(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: Tr(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; IA(o, i, s), K_(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let m = 0; m < f.length; m++) {
        let y = f[m];
        if (typeof y != "string") {
            let I = p.push(y) - 1;
            f[m] = `<!--\uFFFD${I}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = yA(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && DA(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function vA(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(LE, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = Kl(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = Kl(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function Kl(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            LE.test(c) ? o.push(vA(c)) : o.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return o.push(s), o; }
function yA(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = Wg(st()).getInertBodyElement(a), h = Il(p) || p; return h ? VE(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function VE(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = Tr(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let m = p, y = m.tagName.toLowerCase();
            if (yl.hasOwnProperty(y)) {
                zc(i, wE, y, l, h), t.data[h] = y;
                let Ae = m.attributes;
                for (let ze = 0; ze < Ae.length; ze++) {
                    let Ot = Ae.item(ze), Pf = Ot.name.toLowerCase();
                    !!Ot.value.match(ds) ? Yg.hasOwnProperty(Pf) && (_u[Pf] ? Qo(a, Ot.value, h, Ot.name, 0, As) : Qo(a, Ot.value, h, Ot.name, 0, null)) : CA(i, h, Ot);
                }
                let Te = { kind: 1, index: h, children: [] };
                e.push(Te), f = VE(Te.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, mh(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let I = p.textContent || "", A = I.match(ds);
            zc(i, null, A ? "" : I, l, h), mh(s, h, d), A && (f = Qo(a, I, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let le = aA.exec(p.textContent || "");
            if (le) {
                let Ae = parseInt(le[1], 10), Te = u[Ae];
                zc(i, SE, "", l, h), HE(e, t, o, r, l, Te, h), EA(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function mh(e, t, n) { n === 0 && e.push(t); }
function EA(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function IA(e, t, n) { e.push(jE(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function DA(e, t, n) { e.push(t, 1, n << 2 | 3); }
function zc(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, nw(0, o, r)); }
function CA(e, t, n) { e.push(t << 1 | 1, n.name, n.value); }
var vh = 0, TA = /\[(�.+?�?)\]/, MA = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, NA = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, _A = /{([A-Z0-9_]+)}/g, wA = /�I18N_EXP_(ICU(_\d+)?)�/g, SA = /\/\*/, bA = /\d+\:(\d+)/;
function AA(e, t = {}) { let n = e; if (TA.test(e)) {
    let o = {}, r = [vh];
    n = n.replace(MA, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(m => { let y = m.match(bA), I = y ? parseInt(y[1], 10) : vh, A = SA.test(m); l.push([I, A, m]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let m = 0; m < l.length; m++)
        if (l[m][0] === u) {
            d = m;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(NA, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(_A, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(wA, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function Gd(e, t, n = -1) { let o = _(), r = g(), i = E + e, s = ce(o.consts, t), a = pn(); if (o.firstCreatePass && fA(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[Z];
    f[b] |= 32;
}
else
    r[b] |= 32; let c = o.data[i], l = a === r[ae] ? null : a, u = Am(o, l, r), d = a && a.type & 8 ? r[a.index] : null; pw(r, i, a, n), oA(r, c.create, u, d), gc(!0); }
function qd() { gc(!1); }
function BE(e, t, n) { Gd(e, t, n), qd(); }
function UE(e, t) { let n = _(), o = ce(n.consts, t); hA(n, e + E, o); }
function Wd(e) { let t = g(); return eA($(t, fe(), e)), Wd; }
function $E(e) { tA(_(), g(), e + E); }
function GE(e, t = {}) { return AA(e, t); }
function zd(e, t, n) { let o = g(), r = _(), i = M(); return Yd(r, o, o[T], i, e, t, n), zd; }
function Qd(e, t) { let n = M(), o = g(), r = _(), i = ui(r.data), s = Bm(i, n, o); return Yd(r, o, s, n, e, t), Qd; }
function Zd(e, t, n) { let o = g(), r = _(), i = M(); return (i.type & 3 || n) && kv(i, r, o, n, o[T], e, t, Vo(i, o, t)), Zd; }
function Yd(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= Vo(o, t, i), kv(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= Vo(o, t, i), ns(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= Vo(o, t, i), ns(o, t, d, r, r, c);
} }
function qE(e = 1) { return pp(e); }
function RA(e, t) { let n = null, o = AN(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? um(e, i, !0) : kN(o, i))
        return r;
} return n; }
function WE(e) { let t = g()[Z][ae]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = Do(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? RA(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function zE(e, t = 0, n, o, r, i) { let s = g(), a = _(), c = o ? e + 1 : null; c !== null && Zt(s, a, c, o, r, i, null, n); let l = nn(a, E + e, 16, null, n || null); l.projection === null && (l.projection = t), uc(); let d = !s[ne] || Ro(); s[Z][ae].projection[l.projection] === null && c !== null ? OA(s, a, c) : d && !to(l) && i_(a, s, l); }
function OA(e, t, n) { let o = E + n, r = t.data[o], i = e[o], s = or(i, r.tView.ssrId), a = so(e, r, void 0, { dehydratedView: s }); ao(i, a, 0, zt(r, s)); }
function QE(e, t, n, o) { zv(e, t, n, o); }
function ZE(e, t, n) { Wv(e, t, n); }
function YE(e) { let t = g(), n = _(), o = di(); Oo(o + 1); let r = cd(n, o); if (e.dirty && Xf(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = Zv(t, o);
        e.reset(i, ng), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function KE() { return ad(g(), di()); }
function JE(e, t, n, o, r) { Yv(t, zv(e, n, o, r)); }
function XE(e, t, n, o) { Yv(e, Wv(t, n, o)); }
function eI(e = 1) { Oo(di() + e); }
function tI(e) { let t = dc(); return Dt(t, E + e); }
function Ni(e, t) { return e << 17 | t << 2; }
function Kt(e) { return e >> 17 & 32767; }
function kA(e) { return (e & 2) == 2; }
function xA(e, t) { return e & 131071 | t << 17; }
function Jl(e) { return e | 2; }
function qn(e) { return (e & 131068) >> 2; }
function Qc(e, t) { return e & -131069 | t << 2; }
function PA(e) { return (e & 1) === 1; }
function Xl(e) { return e | 1; }
function LA(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = Kt(s), c = qn(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || Xr(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = Kt(e[a + 1]);
        e[o + 1] = Ni(f, a), f !== 0 && (e[f + 1] = Qc(e[f + 1], o)), e[a + 1] = xA(e[a + 1], o);
    }
    else
        e[o + 1] = Ni(a, 0), a !== 0 && (e[a + 1] = Qc(e[a + 1], o)), a = o;
else
    e[o + 1] = Ni(c, 0), a === 0 ? a = o : e[c + 1] = Qc(e[c + 1], o), c = o; l && (e[o + 1] = Jl(e[o + 1])), yh(e, u, o, !0), yh(e, u, o, !1), FA(t, u, e, o, i), s = Ni(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function FA(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && Xr(i, t) >= 0 && (n[o + 1] = Xl(n[o + 1])); }
function yh(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? Kt(r) : qn(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    jA(c, t) && (a = !0, e[s + 1] = o ? Xl(l) : Jl(l)), s = o ? Kt(l) : qn(l);
} a && (e[n + 1] = o ? Jl(r) : Xl(r)); }
function jA(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? Xr(e, t) >= 0 : !1; }
var te = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function nI(e) { return e.substring(te.key, te.keyEnd); }
function HA(e) { return e.substring(te.value, te.valueEnd); }
function VA(e) { return iI(e), oI(e, Wn(e, 0, te.textEnd)); }
function oI(e, t) { let n = te.textEnd; return n === t ? -1 : (t = te.keyEnd = UA(e, te.key = t, n), Wn(e, t, n)); }
function BA(e) { return iI(e), rI(e, Wn(e, 0, te.textEnd)); }
function rI(e, t) { let n = te.textEnd, o = te.key = Wn(e, t, n); return n === o ? -1 : (o = te.keyEnd = $A(e, o, n), o = Eh(e, o, n, 58), o = te.value = Wn(e, o, n), o = te.valueEnd = GA(e, o, n), Eh(e, o, n, 59)); }
function iI(e) { te.key = 0, te.keyEnd = 0, te.value = 0, te.valueEnd = 0, te.textEnd = e.length; }
function Wn(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function UA(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function $A(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function Eh(e, t, n, o) { return t = Wn(e, t, n), t < n && t++, t; }
function GA(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = Ih(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = Ih(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function Ih(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function Kd(e, t, n) { return cI(e, t, n, !1), Kd; }
function Jd(e, t) { return cI(e, t, null, !0), Jd; }
function sI(e) { lI(fI, qA, e, !1); }
function qA(e, t) { for (let n = BA(t); n >= 0; n = rI(t, n))
    fI(e, nI(t), HA(t)); }
function aI(e) { lI(JA, WA, e, !0); }
function WA(e, t) { for (let n = VA(t); n >= 0; n = oI(t, n))
    Co(e, nI(t), !0); }
function cI(e, t, n, o) { let r = g(), i = _(), s = $e(2); if (i.firstUpdatePass && dI(i, e, s, o), t !== P && $(r, s, t)) {
    let a = i.data[re()];
    pI(i, a, r, r[T], e, r[s + 1] = eR(t, n), o, s);
} }
function lI(e, t, n, o) { let r = _(), i = $e(2); r.firstUpdatePass && dI(r, null, i, o); let s = g(); if (n !== P && $(s, i, n)) {
    let a = r.data[re()];
    if (hI(a, o) && !uI(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = qr(c, n || "")), Yl(r, a, s, n, o);
    }
    else
        XA(r, a, s, s[T], s[i + 1], s[i + 1] = KA(e, t, n), o, i);
} }
function uI(e, t) { return t >= e.expandoStartIndex; }
function dI(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[re()], s = uI(e, n);
    hI(i, o) && t === null && !s && (t = !1), t = zA(r, i, t, o), LA(r, i, t, n, s, o);
} }
function zA(e, t, n, o) { let r = ui(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = Zc(null, e, t, n, o), n = ur(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = Zc(r, e, t, n, o), i === null) {
            let c = QA(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = Zc(null, e, t, c[1], o), c = ur(c, t.attrs, o), ZA(e, t, o, c));
        }
        else
            i = YA(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function QA(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (qn(o) !== 0)
    return e[Kt(o)]; }
function ZA(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[Kt(r)] = o; }
function YA(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = ur(o, s, n);
} return ur(o, t.attrs, n); }
function Zc(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = ur(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function ur(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), Co(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function KA(e, t, n) { if (n == null || n === "")
    return L; let o = [], r = lt(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function fI(e, t, n) { Co(e, t, lt(n)); }
function JA(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && Co(e, o, n); }
function XA(e, t, n, o, r, i, s, a) { r === P && (r = L); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, m;
    u === d ? (c += 2, l += 2, f !== p && (h = d, m = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, m = p), h !== null && pI(e, t, n, o, h, m, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function pI(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = PA(l) ? Dh(c, t, n, r, qn(l), s) : void 0; if (!fs(u)) {
    fs(i) || kA(l) && (i = Dh(c, null, n, r, a, s));
    let d = jt(re(), n);
    a_(o, s, d, r, i);
} }
function Dh(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === P && (f = d ? L : void 0);
    let p = d ? Jr(f, o) : u === o ? f : void 0;
    if (l && !fs(p) && (p = Jr(c, o)), fs(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? Kt(h) : qn(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = Jr(c, o));
} return a; }
function fs(e) { return e !== void 0; }
function eR(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = sn(lt(e)))), e; }
function hI(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function gI(e, t = "") { let n = g(), o = _(), r = e + E, i = o.firstCreatePass ? nn(o, r, 1, t, null) : o.data[r], s = mI(o, n, i, t, e); n[r] = s, ko() && Wu(o, n, s, i), Be(i, !1); }
var mI = (e, t, n, o, r) => (xe(!0), Ru(t[T], o));
function tR(e, t, n, o, r) { let i = !bs(t, n); if (xe(i), i)
    return Ru(t[T], o); let s = t[ne]; return _r(s, e, t, n); }
function vI() { mI = tR; }
function yI(e, t) { let n = !1, o = Ue(); for (let i = 1; i < t.length; i += 2)
    n = $(e, o++, t[i]) || n; if (hc(o), !n)
    return P; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += N(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function EI(e, t, n, o = "") { return $(e, fe(), n) ? t + N(n) + o : P; }
function II(e, t, n, o, r, i = "") { let s = Ue(), a = Qt(e, s, n, r); return $e(2), a ? t + N(n) + o + N(r) + i : P; }
function DI(e, t, n, o, r, i, s, a = "") { let c = Ue(), l = ea(e, c, n, r, s); return $e(3), l ? t + N(n) + o + N(r) + i + N(s) + a : P; }
function CI(e, t, n, o, r, i, s, a, c, l = "") { let u = Ue(), d = be(e, u, n, r, s, c); return $e(4), d ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l : P; }
function TI(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = Ue(), p = be(e, f, n, r, s, c); return p = $(e, f + 4, u) || p, $e(5), p ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d : P; }
function MI(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = Ue(), m = be(e, h, n, r, s, c); return m = Qt(e, h + 4, u, f) || m, $e(6), m ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d + N(f) + p : P; }
function NI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m = "") { let y = Ue(), I = be(e, y, n, r, s, c); return I = ea(e, y + 4, u, f, h) || I, $e(7), I ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d + N(f) + p + N(h) + m : P; }
function _I(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, y, I = "") { let A = Ue(), le = be(e, A, n, r, s, c); return le = be(e, A + 4, u, f, h, y) || le, $e(8), le ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d + N(f) + p + N(h) + m + N(y) + I : P; }
function Xd(e) { return ma("", e), Xd; }
function ma(e, t, n) { let o = g(), r = EI(o, e, t, n); return r !== P && pt(o, re(), r), ma; }
function ef(e, t, n, o, r) { let i = g(), s = II(i, e, t, n, o, r); return s !== P && pt(i, re(), s), ef; }
function tf(e, t, n, o, r, i, s) { let a = g(), c = DI(a, e, t, n, o, r, i, s); return c !== P && pt(a, re(), c), tf; }
function nf(e, t, n, o, r, i, s, a, c) { let l = g(), u = CI(l, e, t, n, o, r, i, s, a, c); return u !== P && pt(l, re(), u), nf; }
function of(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = TI(d, e, t, n, o, r, i, s, a, c, l, u); return f !== P && pt(d, re(), f), of; }
function rf(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = MI(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== P && pt(p, re(), h), rf; }
function sf(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let m = g(), y = NI(m, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return y !== P && pt(m, re(), y), sf; }
function af(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, y) { let I = g(), A = _I(I, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, y); return A !== P && pt(I, re(), A), af; }
function cf(e) { let t = g(), n = yI(t, e); return n !== P && pt(t, re(), n), cf; }
function pt(e, t, n) { let o = jt(t, e); dm(e[T], o, n); }
function lf(e, t, n) { Nc(t) && (t = t()); let o = g(), r = fe(); if ($(o, r, t)) {
    let i = _(), s = we();
    Qu(s, o, e, t, o[T], n);
} return lf; }
function wI(e, t) { let n = Nc(e); return n && e.set(t), n; }
function uf(e, t) { let n = g(), o = _(), r = M(); return Yd(o, n, n[T], r, e, t), uf; }
var SI = {};
function df(e) { let t = _(), n = g(), o = e + E, r = nn(t, o, 128, null, null); return Be(r, !1), bo(t, n, o, SI), df; }
function bI(e) { Y("NgLet"); let t = _(), n = g(), o = re(); return bo(t, n, o, e), e; }
function AI(e) { let t = dc(), n = Dt(t, E + e); if (n === SI)
    throw new w(314, !1); return n; }
function RI(e, t) { let n = _(), o = g(), r = o[T], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = It(n, s + E), d = jt(s + E, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function OI(e) { return $(g(), fe(), e) ? N(e) : P; }
function kI(e, t, n = "") { return EI(g(), e, t, n); }
function xI(e, t, n, o, r = "") { return II(g(), e, t, n, o, r); }
function PI(e, t, n, o, r, i, s = "") { return DI(g(), e, t, n, o, r, i, s); }
function LI(e, t, n, o, r, i, s, a, c = "") { return CI(g(), e, t, n, o, r, i, s, a, c); }
function FI(e, t, n, o, r, i, s, a, c, l, u = "") { return TI(g(), e, t, n, o, r, i, s, a, c, l, u); }
function jI(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return MI(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function HI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return NI(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function VI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, y = "") { return _I(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, y); }
function BI(e) { return yI(g(), e); }
function nR(e, t, n) { let o = _(); if (o.firstCreatePass) {
    let r = ve(e);
    eu(n, o.data, o.blueprint, r, !0), eu(t, o.data, o.blueprint, r, !1);
} }
function eu(e, t, n, o, r) { if (e = G(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        eu(e[i], t, n, o, r);
else {
    let i = _(), s = g(), a = M(), c = ti(e) ? e : G(e.provide), l = Qf(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (ti(e) || !e.multi) {
        let p = new qt(l, r, lo, null), h = Kc(c, t, r ? u : u + f, d);
        h === -1 ? (ol(Ui(a, s), i, c), Yc(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = Kc(c, t, u + f, d), h = Kc(c, t, u, u + f), m = p >= 0 && n[p], y = h >= 0 && n[h];
        if (r && !y || !r && !m) {
            ol(Ui(a, s), i, c);
            let I = iR(r ? rR : oR, n.length, r, o, l, e);
            !r && y && (n[h].providerFactory = I), Yc(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(I), s.push(I);
        }
        else {
            let I = UI(n[r ? h : p], l, !r && o);
            Yc(i, e, p > -1 ? p : h, I);
        }
        !r && o && y && n[h].componentProviders++;
    }
} }
function Yc(e, t, n, o) { let r = ti(t), i = Wf(t); if (r || i) {
    let c = (i ? G(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
        }
        else
            l.push(n, c);
    }
} }
function UI(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function Kc(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function oR(e, t, n, o, r) { return tu(this.multi, []); }
function rR(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = Yo(o, o[v], this.providerFactory.index, r);
    s = c.slice(0, a), tu(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], tu(i, s); return s; }
function tu(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function iR(e, t, n, o, r, i) { let s = new qt(e, n, lo, null); return s.multi = [], s.index = t, s.componentProviders = 0, UI(s, r, o && !n), s; }
function $I(e, t = []) { return n => { n.providersResolver = (o, r) => nR(o, r ? r(e) : e, t); }; }
function GI(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function qI(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = ss(t, ay), o.pipeDefs = ss(n, je); }
function WI(e, t) { return qe(() => { let n = ei(e); n.declarations = _i(t.declarations || L), n.imports = _i(t.imports || L), n.exports = _i(t.exports || L), t.bootstrap && (n.bootstrap = _i(t.bootstrap)), jn.registerNgModule(e, t); }); }
function _i(e) { if (typeof e == "function")
    return e; let t = Oe(e); return t.some(Wr) ? () => t.map(G).map(Ch) : t.map(Ch); }
function Ch(e) { return od(e) ? e.ngModule : e; }
function zI(e, t, n) { let o = de() + e, r = g(); return r[o] === P ? We(r, o, n ? t.call(n) : t()) : Sr(r, o); }
function QI(e, t, n, o) { return oD(g(), de(), e, t, n, o); }
function ZI(e, t, n, o, r) { return rD(g(), de(), e, t, n, o, r); }
function YI(e, t, n, o, r, i) { return iD(g(), de(), e, t, n, o, r, i); }
function KI(e, t, n, o, r, i, s) { return sD(g(), de(), e, t, n, o, r, i, s); }
function JI(e, t, n, o, r, i, s, a) { let c = de() + e, l = g(), u = be(l, c, n, o, r, i); return $(l, c + 4, s) || u ? We(l, c + 5, a ? t.call(a, n, o, r, i, s) : t(n, o, r, i, s)) : Sr(l, c + 5); }
function XI(e, t, n, o, r, i, s, a, c) { let l = de() + e, u = g(), d = be(u, l, n, o, r, i); return Qt(u, l + 4, s, a) || d ? We(u, l + 6, c ? t.call(c, n, o, r, i, s, a) : t(n, o, r, i, s, a)) : Sr(u, l + 6); }
function eD(e, t, n, o, r, i, s, a, c, l) { let u = de() + e, d = g(), f = be(d, u, n, o, r, i); return ea(d, u + 4, s, a, c) || f ? We(d, u + 7, l ? t.call(l, n, o, r, i, s, a, c) : t(n, o, r, i, s, a, c)) : Sr(d, u + 7); }
function tD(e, t, n, o, r, i, s, a, c, l, u) { let d = de() + e, f = g(), p = be(f, d, n, o, r, i); return be(f, d + 4, s, a, c, l) || p ? We(f, d + 8, u ? t.call(u, n, o, r, i, s, a, c, l) : t(n, o, r, i, s, a, c, l)) : Sr(f, d + 8); }
function nD(e, t, n, o) { return aD(g(), de(), e, t, n, o); }
function Pr(e, t) { let n = e[t]; return n === P ? void 0 : n; }
function oD(e, t, n, o, r, i) { let s = t + n; return $(e, s, r) ? We(e, s + 1, i ? o.call(i, r) : o(r)) : Pr(e, s + 1); }
function rD(e, t, n, o, r, i, s) { let a = t + n; return Qt(e, a, r, i) ? We(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : Pr(e, a + 2); }
function iD(e, t, n, o, r, i, s, a) { let c = t + n; return ea(e, c, r, i, s) ? We(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : Pr(e, c + 3); }
function sD(e, t, n, o, r, i, s, a, c) { let l = t + n; return be(e, l, r, i, s, a) ? We(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : Pr(e, l + 4); }
function aD(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    $(e, s++, r[c]) && (a = !0); return a ? We(e, s, o.apply(i, r)) : Pr(e, s); }
function cD(e, t) { let n = _(), o, r = e + E; n.firstCreatePass ? (o = sR(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = Kr(o.type, !0)), s, a = xt(lo); try {
    let c = Bi(!1), l = i();
    return Bi(c), bo(n, g(), r, l), l;
}
finally {
    xt(a);
} }
function sR(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function lD(e, t, n) { let o = e + E, r = g(), i = Dt(r, o); return Lr(r, o) ? oD(r, de(), t, i.transform, n, i) : i.transform(n); }
function uD(e, t, n, o) { let r = e + E, i = g(), s = Dt(i, r); return Lr(i, r) ? rD(i, de(), t, s.transform, n, o, s) : s.transform(n, o); }
function dD(e, t, n, o, r) { let i = e + E, s = g(), a = Dt(s, i); return Lr(s, i) ? iD(s, de(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function fD(e, t, n, o, r, i) { let s = e + E, a = g(), c = Dt(a, s); return Lr(a, s) ? sD(a, de(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function pD(e, t, n) { let o = e + E, r = g(), i = Dt(r, o); return Lr(r, o) ? aD(r, de(), t, i.transform, n, i) : i.transform.apply(i, n); }
function Lr(e, t) { return e[v].data[t].pure; }
function hD(e, t) { return Ws(e, t); }
function gD(e, t) { return () => { try {
    return jn.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function mD(e, t) { let n = q(e); n !== null && (n.debugInfo = t); }
function vD(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function yD(e, t, n, o, r = null, i = null) { let s = q(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = aR(s, q(e)); if (e[an] = a, c.tView) {
    let l = JT().values();
    for (let u of l)
        Ve(u) && u[z] === null && Li(r, i, a, c, u);
} }
function aR(e, t) { let n = W({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function Li(e, t, n, o, r) { let i = r[v]; if (i === o.tView) {
    lR(e, t, n, o, r);
    return;
} for (let s = E; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (J(a)) {
        K(a[H]) && Li(e, t, n, o, a[H]);
        for (let c = V; c < a.length; c++)
            Li(e, t, n, o, a[c]);
    }
    else
        K(a) && Li(e, t, n, o, a);
} }
function cR(e, t) { e.componentReplaced?.(t.id); }
function lR(e, t, n, o, r) { let i = r[F], s = r[H], a = r[z], c = r[ae], l = r[O].get(j, null), u = () => { if (o.encapsulation === ot.ShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = gm(n), f = Os(a, d, i, xu(n), s, c, null, null, null, null, null); uR(a, r, f, c.index), Mr(r[v], r); let p = r[Ze].rendererFactory; cR(p, o), f[T] = p.createRenderer(s, n), Sm(r[v], r), dR(c), Gs(d, f, i), zm(d, f, d.template, i); }; l === null ? Th(e, t, u) : l.run(() => Th(e, t, u)); }
function Th(e, t, n) {
    try {
        n();
    }
    catch (o) {
        let r = o;
        if (t !== null && r.message) {
            let i = r.message + (r.stack ? `
` + r.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw o;
    }
}
function uR(e, t, n, o) { for (let r = E; r < e[v].bindingStartIndex; r++) {
    let i = e[r];
    if ((K(i) || J(i)) && i[se] === t) {
        i[se] = n;
        break;
    }
} e[yt] === t && (e[yt] = n), e[Mo] === t && (e[Mo] = n), n[se] = t[se], t[se] = null, e[o] = n; }
function dR(e) { if (e.projection !== null) {
    for (let t of e.projection)
        hs(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var pe = { \u0275\u0275animateEnter: Uo, \u0275\u0275animateEnterListener: $o, \u0275\u0275animateLeave: Go, \u0275\u0275animateLeaveListener: cs, \u0275\u0275attribute: Rd, \u0275\u0275defineComponent: sy, \u0275\u0275defineDirective: cy, \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: Eo, \u0275\u0275defineNgModule: md, \u0275\u0275definePipe: ly, \u0275\u0275directiveInject: lo, \u0275\u0275getInheritedFactory: Jh, \u0275\u0275inject: Re, \u0275\u0275injectAttribute: gs, \u0275\u0275invalidFactory: wv, \u0275\u0275invalidFactoryDep: Yr, \u0275\u0275templateRefExtractor: hD, \u0275\u0275resetView: cc, \u0275\u0275HostDirectivesFeature: hy, \u0275\u0275NgOnChangesFeature: Lh, \u0275\u0275ProvidersFeature: $I, \u0275\u0275CopyDefinitionFeature: py, \u0275\u0275InheritDefinitionFeature: vd, \u0275\u0275ExternalStylesFeature: GI, \u0275\u0275nextContext: qE, \u0275\u0275namespaceHTML: Dc, \u0275\u0275namespaceMathML: Ic, \u0275\u0275namespaceSVG: Ec, \u0275\u0275enableBindings: rc, \u0275\u0275disableBindings: ic, \u0275\u0275elementStart: ua, \u0275\u0275elementEnd: da, \u0275\u0275element: xd, \u0275\u0275elementContainerStart: ha, \u0275\u0275elementContainerEnd: kr, \u0275\u0275domElement: Pd, \u0275\u0275domElementStart: fa, \u0275\u0275domElementEnd: pa, \u0275\u0275domElementContainer: Hd, \u0275\u0275domElementContainerStart: ga, \u0275\u0275domElementContainerEnd: jd, \u0275\u0275domTemplate: Ed, \u0275\u0275domListener: Zd, \u0275\u0275elementContainer: Fd, \u0275\u0275pureFunction0: zI, \u0275\u0275pureFunction1: QI, \u0275\u0275pureFunction2: ZI, \u0275\u0275pureFunction3: YI, \u0275\u0275pureFunction4: KI, \u0275\u0275pureFunction5: JI, \u0275\u0275pureFunction6: XI, \u0275\u0275pureFunction7: eD, \u0275\u0275pureFunction8: tD, \u0275\u0275pureFunctionV: nD, \u0275\u0275getCurrentView: NE, \u0275\u0275restoreView: ac, \u0275\u0275listener: zd, \u0275\u0275projection: zE, \u0275\u0275syntheticHostProperty: Ud, \u0275\u0275syntheticHostListener: Qd, \u0275\u0275pipeBind1: lD, \u0275\u0275pipeBind2: uD, \u0275\u0275pipeBind3: dD, \u0275\u0275pipeBind4: fD, \u0275\u0275pipeBindV: pD, \u0275\u0275projectionDef: WE, \u0275\u0275domProperty: Bd, \u0275\u0275ariaProperty: Ad, \u0275\u0275property: kd, \u0275\u0275pipe: cD, \u0275\u0275queryRefresh: YE, \u0275\u0275queryAdvance: eI, \u0275\u0275viewQuery: ZE, \u0275\u0275viewQuerySignal: XE, \u0275\u0275loadQuery: KE, \u0275\u0275contentQuery: QE, \u0275\u0275contentQuerySignal: JE, \u0275\u0275reference: tI, \u0275\u0275classMap: aI, \u0275\u0275styleMap: sI, \u0275\u0275styleProp: Kd, \u0275\u0275classProp: Jd, \u0275\u0275advance: mm, \u0275\u0275template: yd, \u0275\u0275conditional: yE, \u0275\u0275conditionalCreate: vE, \u0275\u0275conditionalBranchCreate: la, \u0275\u0275defer: Uy, \u0275\u0275deferWhen: $y, \u0275\u0275deferOnIdle: zy, \u0275\u0275deferOnImmediate: Yy, \u0275\u0275deferOnTimer: Xy, \u0275\u0275deferOnHover: nE, \u0275\u0275deferOnInteraction: iE, \u0275\u0275deferOnViewport: cE, \u0275\u0275deferPrefetchWhen: Gy, \u0275\u0275deferPrefetchOnIdle: Qy, \u0275\u0275deferPrefetchOnImmediate: Ky, \u0275\u0275deferPrefetchOnTimer: eE, \u0275\u0275deferPrefetchOnHover: oE, \u0275\u0275deferPrefetchOnInteraction: sE, \u0275\u0275deferPrefetchOnViewport: lE, \u0275\u0275deferHydrateWhen: qy, \u0275\u0275deferHydrateNever: Wy, \u0275\u0275deferHydrateOnIdle: Zy, \u0275\u0275deferHydrateOnImmediate: Jy, \u0275\u0275deferHydrateOnTimer: tE, \u0275\u0275deferHydrateOnHover: rE, \u0275\u0275deferHydrateOnInteraction: aE, \u0275\u0275deferHydrateOnViewport: uE, \u0275\u0275deferEnableTimerScheduling: by, \u0275\u0275repeater: CE, \u0275\u0275repeaterCreate: DE, \u0275\u0275repeaterTrackByIndex: EE, \u0275\u0275repeaterTrackByIdentity: IE, \u0275\u0275componentInstance: mE, \u0275\u0275text: gI, \u0275\u0275textInterpolate: Xd, \u0275\u0275textInterpolate1: ma, \u0275\u0275textInterpolate2: ef, \u0275\u0275textInterpolate3: tf, \u0275\u0275textInterpolate4: nf, \u0275\u0275textInterpolate5: of, \u0275\u0275textInterpolate6: rf, \u0275\u0275textInterpolate7: sf, \u0275\u0275textInterpolate8: af, \u0275\u0275textInterpolateV: cf, \u0275\u0275i18n: BE, \u0275\u0275i18nAttributes: UE, \u0275\u0275i18nExp: Wd, \u0275\u0275i18nStart: Gd, \u0275\u0275i18nEnd: qd, \u0275\u0275i18nApply: $E, \u0275\u0275i18nPostprocess: GE, \u0275\u0275resolveWindow: am, \u0275\u0275resolveDocument: cm, \u0275\u0275resolveBody: bu, \u0275\u0275setComponentScope: qI, \u0275\u0275setNgModuleScope: WI, \u0275\u0275registerNgModuleType: pd, \u0275\u0275getComponentDepsFactory: gD, \u0275setClassDebugInfo: mD, \u0275\u0275declareLet: df, \u0275\u0275storeLet: bI, \u0275\u0275readContextLet: AI, \u0275\u0275attachSourceLocations: RI, \u0275\u0275interpolate: OI, \u0275\u0275interpolate1: kI, \u0275\u0275interpolate2: xI, \u0275\u0275interpolate3: PI, \u0275\u0275interpolate4: LI, \u0275\u0275interpolate5: FI, \u0275\u0275interpolate6: jI, \u0275\u0275interpolate7: HI, \u0275\u0275interpolate8: VI, \u0275\u0275interpolateV: BI, \u0275\u0275sanitizeHtml: Xg, \u0275\u0275sanitizeStyle: em, \u0275\u0275sanitizeResourceUrl: Su, \u0275\u0275sanitizeScript: tm, \u0275\u0275sanitizeUrl: wu, \u0275\u0275sanitizeUrlOrResourceUrl: rm, \u0275\u0275trustConstantHtml: nm, \u0275\u0275trustConstantResourceUrl: om, \u0275\u0275validateIframeAttribute: ny, forwardRef: Va, resolveForwardRef: G, \u0275\u0275twoWayProperty: lf, \u0275\u0275twoWayBindingSet: wI, \u0275\u0275twoWayListener: uf, \u0275\u0275replaceMetadata: yD, \u0275\u0275getReplaceMetadataURL: vD }, Nn = null;
function ED(e) { Nn !== null && (e.defaultEncapsulation !== Nn.defaultEncapsulation || e.preserveWhitespaces !== Nn.preserveWhitespaces) || (Nn = e); }
function fR() { return Nn; }
function pR() { Nn = null; }
var Zo = [];
function hR(e, t) { Zo.push({ moduleType: e, ngModule: t }); }
var Jc = !1;
function ID() { if (!Jc) {
    Jc = !0;
    try {
        for (let e = Zo.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = Zo[e];
            n.declarations && n.declarations.every(DD) && (Zo.splice(e, 1), ER(t, n));
        }
    }
    finally {
        Jc = !1;
    }
} }
function DD(e) { return Array.isArray(e) ? e.every(DD) : !!G(e); }
function CD(e, t = {}) { TD(e, t), t.id !== void 0 && pd(e, t.id), hR(e, t); }
function TD(e, t, n = !1) { let o = Oe(t.declarations || L), r = null; Object.defineProperty(e, Ua, { configurable: !0, get: () => (r === null && (r = ee({ usage: 0, kind: "NgModule", type: e }).compileNgModule(pe, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Oe(t.bootstrap || L).map(G), declarations: o.map(G), imports: Oe(t.imports || L).map(G).map(Mh), exports: Oe(t.exports || L).map(G).map(Mh), schemas: t.schemas ? Oe(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, gt, { get: () => { if (i === null) {
        let a = ee({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(pe, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: ms(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, Ba, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || L, imports: [(t.imports || L).map(G), (t.exports || L).map(G)] };
        s = ee({ usage: 0, kind: "NgModule", type: e }).compileInjector(pe, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function gR(e, t) { let n = `Unexpected "${Ie(e)}" found in the "declarations" array of the`, o = `"${Ie(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var mR = new WeakMap, vR = new WeakMap;
function yR() { mR = new WeakMap, vR = new WeakMap, Zo.length = 0, SS.clear(); }
function ER(e, t) { let n = Oe(t.declarations || L), o = pf(e); n.forEach(r => { if (r = G(r), r.hasOwnProperty(an)) {
    let s = q(r);
    ff(s, o);
}
else
    !r.hasOwnProperty(Qr) && !r.hasOwnProperty(Zr) && (r.ngSelectorScope = e); }); }
function ff(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(an) ? q(n) : Ne(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => je(n)), e.schemas = t.schemas, e.tView = null; }
function pf(e) { if (Bt(e)) {
    let t = jn.getNgModuleScope(e), n = ei(e);
    return W({ schemas: n.schemas || null }, t);
}
else if (To(e)) {
    if ((q(e) || Ne(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (je(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function Mh(e) { return od(e) ? e.ngModule : e; }
var Xc = 0;
function MD(e, t) {
    let n = null;
    vS(e, t), _D(e, t), Object.defineProperty(e, an, { get: () => {
            if (n === null) {
                let o = ee({ usage: 0, kind: "component", type: e });
                if (Jv(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = fR(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = ot.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = wD(e, t), l = Fe(W({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || L, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, interpolation: t.interpolation, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                Xc++;
                try {
                    if (l.usesInheritance && SD(e), n = o.compileComponent(pe, a, l), l.isStandalone) {
                        let u = Oe(t.imports || L), { directiveDefs: d, pipeDefs: f } = IR(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(G);
                    }
                }
                finally {
                    Xc--;
                }
                if (Xc === 0 && ID(), DR(e)) {
                    let u = pf(e.ngSelectorScope);
                    ff(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Ie(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function IR(e, t) { return { directiveDefs: () => Ho(e) ? [...jn.getStandaloneComponentScope(e, t).compilation.directives].map(i => q(i) || Ne(i)).filter(i => i !== null) : [], pipeDefs: () => Ho(e) ? [...jn.getStandaloneComponentScope(e, t).compilation.pipes].map(i => je(i)).filter(i => i !== null) : [] }; }
function DR(e) { return e.ngSelectorScope !== void 0; }
function hf(e, t) { let n = null; _D(e, t || {}), Object.defineProperty(e, Qr, { get: () => { if (n === null) {
        let o = ND(e, t || {});
        n = ee({ usage: 0, kind: "directive", type: e }).compileDirective(pe, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function ND(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = ee({ usage: 0, kind: "directive", type: e }), i = wD(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && SD(e), { metadata: i, sourceMapUrl: o }; }
function _D(e, t) { let n = null; Object.defineProperty(e, gt, { get: () => { if (n === null) {
        let o = ND(e, t), r = ee({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(pe, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: ms(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function CR(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function wD(e, t) { let n = su(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || Me, propMetadata: o, inputs: t.inputs || L, outputs: t.outputs || L, queries: Nh(e, o, bD), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, typeSourceSpan: null, usesInheritance: !CR(e), exportAs: NR(t.exportAs), providers: t.providers || null, viewQueries: Nh(e, o, AD), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function SD(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Ne(n) && !q(n) && wR(n) && hf(n, null), n = Object.getPrototypeOf(n); }
function TR(e) { return typeof e == "string" ? OD(e) : G(e); }
function MR(e, t) { return { propertyName: e, predicate: TR(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function Nh(e, t, n) { let o = []; for (let r in t)
    if (t.hasOwnProperty(r)) {
        let i = t[r];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${r}" of "${Ie(e)}" since the query selector wasn't defined.`);
            if (i.some(RD))
                throw new Error("Cannot combine @Input decorators with query decorators");
            o.push(MR(r, s));
        } });
    } return o; }
function NR(e) { return e === void 0 ? null : OD(e); }
function bD(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function AD(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function RD(e) { return e.ngMetadataName === "Input"; }
function OD(e) { return e.split(",").map(t => t.trim()); }
var _R = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function wR(e) { let t = su(); if (_R.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (RD(s) || bD(s) || AD(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function kD(e, t) { let n = null, o = null; Object.defineProperty(e, gt, { get: () => { if (o === null) {
        let r = _h(e, t), i = ee({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(pe, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: ms(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, Zr, { get: () => { if (n === null) {
        let r = _h(e, t);
        n = ee({ usage: 0, kind: "pipe", type: r.type }).compilePipe(pe, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function _h(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var xD = fr("Directive", (e = {}) => e, void 0, void 0, (e, t) => hf(e, t)), SR = fr("Component", (e = {}) => W({ changeDetection: vs.Default }, e), xD, void 0, (e, t) => MD(e, t)), bR = fr("Pipe", e => W({ pure: !0 }, e), void 0, void 0, (e, t) => kD(e, t)), AR = it("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), RR = it("Output", e => ({ alias: e })), OR = it("HostBinding", e => ({ hostPropertyName: e })), kR = it("HostListener", (e, t) => ({ eventName: e, args: t })), xR = fr("NgModule", e => e, void 0, void 0, (e, t) => CD(e, t)), ps = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, PR = (() => { class e {
    compileModuleSync(n) { return new Un(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = ln(n), i = Tn(r.declarations).reduce((s, a) => { let c = q(a); return c && s.push(new bt(c)), s; }, []); return new ps(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), PD = new S(""), nu = class {
}, LR = (() => { class e {
    zone = D(j);
    changeDetectionScheduler = D(Je);
    applicationRef = D(Le);
    applicationErrorHandler = D(Tt);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), LD = new S("", { factory: () => !1 });
function va({ ngZoneFactory: e, ignoreChangesOutsideZone: t, scheduleInRootZone: n }) { return e ??= () => new j(Fe(W({}, ya()), { scheduleInRootZone: n })), [{ provide: j, useFactory: e }, { provide: mt, multi: !0, useFactory: () => { let o = D(LR, { optional: !0 }); return () => o.initialize(); } }, { provide: mt, multi: !0, useFactory: () => { let o = D(jR); return () => { o.initialize(); }; } }, t === !0 ? { provide: _c, useValue: !0 } : [], { provide: mi, useValue: n ?? Dm }, { provide: Tt, useFactory: () => { let o = D(j), r = D(vt), i; return s => { o.runOutsideAngular(() => { r.destroyed && !i ? setTimeout(() => { throw s; }) : (i ??= r.get(hi), i.handleError(s)); }); }; } }]; }
function FR(e) { let t = e?.ignoreChangesOutsideZone, n = e?.scheduleInRootZone, o = va({ ngZoneFactory: () => { let r = ya(e); return r.scheduleInRootZone = n, r.shouldCoalesceEventChangeDetection && Y("NgZone_CoalesceEvent"), new j(r); }, ignoreChangesOutsideZone: t, scheduleInRootZone: n }); return Qe([{ provide: LD, useValue: !0 }, { provide: gn, useValue: !1 }, o]); }
function ya(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var jR = (() => { class e {
    subscription = new Hr;
    initialized = !1;
    zone = D(j);
    pendingTasks = D(Mt);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { j.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { j.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var Ea = (() => { class e {
    applicationErrorHandler = D(Tt);
    appRef = D(Le);
    taskService = D(Mt);
    ngZone = D(j);
    zonelessEnabled = D(gn);
    tracing = D(ro, { optional: !0 });
    disableScheduling = D(_c, { optional: !0 }) ?? !1;
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new Hr;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Yi) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (D(mi, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { this.runningTick || this.cleanup(); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })), this.disableScheduling ||= !this.zonelessEnabled && (this.ngZone instanceof Ln || !this.zoneIsDefined); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; let o = !1; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2, o = !0;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16, o = !0;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2, o = !0;
            break;
        }
        case 11: {
            o = !0;
            break;
        }
        case 9:
        case 8:
        case 7:
        case 10:
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick(o))
        return; let r = this.useMicrotaskScheduler ? Vp : Cm; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => r(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => r(() => this.tick())); }
    shouldScheduleTick(n) { return !(this.disableScheduling && !n || this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(Yi + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (o) {
        this.taskService.remove(n), this.applicationErrorHandler(o);
    }
    finally {
        this.cleanup();
    } this.useMicrotaskScheduler = !0, Vp(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function HR() { return Y("NgZoneless"), Qe([{ provide: Je, useExisting: Ea }, { provide: j, useClass: Ln }, { provide: gn, useValue: !0 }, { provide: mi, useValue: !1 }, []]); }
function VR() { return typeof $localize < "u" && $localize.locale || xr; }
var gf = new S("", { providedIn: "root", factory: () => D(gf, { optional: !0, skipSelf: !0 }) || VR() }), BR = new S("", { providedIn: "root", factory: () => Jb }), UR = new S(""), $R = new S(""), FD = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(FD || {}), ou = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function GR(e) { return e.map(t => t.nativeElement); }
var dr = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new Jt(t) : null; }
    get injector() { return aM(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (bp(t) || sM(t)); }
    get context() { return bp(this.nativeNode) || iM(this.nativeNode); }
    get listeners() { return fM(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return uM(this.nativeNode); }
    get providerTokens() { return cM(this.nativeNode); }
}, Jt = class extends dr {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = ye(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[v].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = ye(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[v].data, r = o[t.nodeIndex], i = {}; return qR(this.nativeElement, i), zR(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = ye(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[v].data[o.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, o = this.nativeElement.className; return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let o = 0; o < t.length; o++) {
        let r = t[o];
        n.push(zn(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(zn(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return wh(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return wh(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function qR(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                WR(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function WR(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function wh(e, t, n, o) { let r = ye(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[v].data[r.nodeIndex];
    Ut(s, i, t, n, o, e.nativeNode);
}
else
    mf(e.nativeNode, t, n, o); }
function Ut(e, t, n, o, r, i) { let s = Jf(e, t); if (e.type & 11) {
    if (el(s, n, o, r, i), me(e)) {
        let c = ue(e.index, t);
        c && c[v].firstChild && Ut(c[v].firstChild, c, n, o, r, i);
    }
    else
        e.child && Ut(e.child, t, n, o, r, i), s && mf(s, n, o, r);
    let a = t[e.index];
    J(a) && Sh(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    el(a[ke], n, o, r, i), Sh(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[Z], l = a[ae].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            el(u, n, o, r, i);
    else if (l) {
        let u = a[z], d = u[v].data[l.index];
        Ut(d, u, n, o, r, i);
    }
}
else
    e.child && Ut(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && Ut(a, t, n, o, r, i);
} }
function Sh(e, t, n, o, r) { for (let i = V; i < e.length; i++) {
    let s = e[i], a = s[v].firstChild;
    a && Ut(a, s, t, n, o, r);
} }
function el(e, t, n, o, r) { if (r !== e) {
    let i = zn(e);
    if (!i)
        return;
    (o && i instanceof Jt && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function mf(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = zn(a);
    c && ((o && c instanceof Jt && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), mf(a, t, n, o));
} }
function zR(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(MN), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += N(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var tl = "__ng_debug__";
function zn(e) { return e instanceof Node ? (e.hasOwnProperty(tl) || (e[tl] = e.nodeType == Node.ELEMENT_NODE ? new Jt(e) : new dr(e)), e[tl]) : null; }
var Df = { JSACTION: "__jsaction", OWNER: "__owner" }, BD = {};
function QR(e) { return e[Df.JSACTION]; }
function jD(e, t) { e[Df.JSACTION] = t; }
function ZR(e) { return BD[e]; }
function YR(e, t) { BD[e] = t; }
var C = { AUXCLICK: "auxclick", CHANGE: "change", CLICK: "click", CLICKMOD: "clickmod", CLICKONLY: "clickonly", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEUP: "mouseup", MOUSEDOWN: "mousedown", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", MOUSEMOVE: "mousemove", POINTERUP: "pointerup", POINTERDOWN: "pointerdown", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", POINTERMOVE: "pointermove", POINTERCANCEL: "pointercancel", GOTPOINTERCAPTURE: "gotpointercapture", LOSTPOINTERCAPTURE: "lostpointercapture", ERROR: "error", LOAD: "load", UNLOAD: "unload", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", INPUT: "input", SCROLL: "scroll", TOGGLE: "toggle", CUSTOM: "_custom" }, KR = [C.MOUSEENTER, C.MOUSELEAVE, "pointerenter", "pointerleave"], JR = [C.CLICK, C.DBLCLICK, C.FOCUSIN, C.FOCUSOUT, C.KEYDOWN, C.KEYUP, C.KEYPRESS, C.MOUSEOVER, C.MOUSEOUT, C.SUBMIT, C.TOUCHSTART, C.TOUCHEND, C.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], UD = [C.FOCUS, C.BLUR, C.ERROR, C.LOAD, C.TOGGLE], Na = e => UD.indexOf(e) >= 0, XR = JR.concat(UD), $D = e => XR.indexOf(e) >= 0;
function eO(e) { return e === C.MOUSEENTER ? C.MOUSEOVER : e === C.MOUSELEAVE ? C.MOUSEOUT : e === C.POINTERENTER ? C.POINTEROVER : e === C.POINTERLEAVE ? C.POINTEROUT : e; }
function tO(e, t, n, o) { let r = !1; Na(t) && (r = !0); let i = typeof o == "boolean" ? { capture: r, passive: o } : r; return e.addEventListener(t, n, i), { eventType: t, handler: n, capture: r, passive: o }; }
function nO(e, t) { if (e.removeEventListener) {
    let n = typeof t.passive == "boolean" ? { capture: t.capture } : t.capture;
    e.removeEventListener(t.eventType, t.handler, n);
}
else
    e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler); }
function oO(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1; }
var HD = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function rO(e) { return e.which === 2 || e.which == null && e.button === 4; }
function iO(e) { return HD && e.metaKey || !HD && e.ctrlKey || rO(e) || e.shiftKey; }
function sO(e, t, n) { let o = e.relatedTarget; return (e.type === C.MOUSEOVER && t === C.MOUSEENTER || e.type === C.MOUSEOUT && t === C.MOUSELEAVE || e.type === C.POINTEROVER && t === C.POINTERENTER || e.type === C.POINTEROUT && t === C.POINTERLEAVE) && (!o || o !== n && !n.contains(o)); }
function aO(e, t) { let n = {}; for (let o in e) {
    if (o === "srcElement" || o === "target")
        continue;
    let r = o, i = e[r];
    typeof i != "function" && (n[r] = i);
} return e.type === C.MOUSEOVER ? n.type = C.MOUSEENTER : e.type === C.MOUSEOUT ? n.type = C.MOUSELEAVE : e.type === C.POINTEROVER ? n.type = C.POINTERENTER : n.type = C.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n._originalEvent = e, n; }
var cO = typeof navigator < "u" && /iPhone|iPad|iPod/.test(navigator.userAgent), Ta = class {
    element;
    handlerInfos = [];
    constructor(t) { this.element = t; }
    addEventListener(t, n, o) { cO && (this.element.style.cursor = "pointer"), this.handlerInfos.push(tO(this.element, t, n(this.element), o)); }
    cleanUp() { for (let t = 0; t < this.handlerInfos.length; t++)
        nO(this.element, this.handlerInfos[t]); this.handlerInfos = []; }
}, lO = { NAMESPACE_ACTION_SEPARATOR: ".", EVENT_ACTION_SEPARATOR: ":" };
function Rt(e) { return e.eventType; }
function Cf(e, t) { e.eventType = t; }
function Da(e) { return e.event; }
function GD(e, t) { e.event = t; }
function qD(e) { return e.targetElement; }
function WD(e, t) { e.targetElement = t; }
function zD(e) { return e.eic; }
function uO(e, t) { e.eic = t; }
function dO(e) { return e.timeStamp; }
function fO(e, t) { e.timeStamp = t; }
function Ca(e) { return e.eia; }
function QD(e, t, n) { e.eia = [t, n]; }
function vf(e) { e.eia = void 0; }
function Ia(e) { return e[1]; }
function pO(e) { return e.eirp; }
function ZD(e, t) { e.eirp = t; }
function YD(e) { return e.eir; }
function KD(e, t) { e.eir = t; }
function JD(e) { return { eventType: e.eventType, event: e.event, targetElement: e.targetElement, eic: e.eic, eia: e.eia, timeStamp: e.timeStamp, eirp: e.eirp, eiack: e.eiack, eir: e.eir }; }
function hO(e, t, n, o, r, i, s, a) { return { eventType: e, event: t, targetElement: n, eic: o, timeStamp: r, eia: i, eirp: s, eiack: a }; }
var yf = class e {
    eventInfo;
    constructor(t) { this.eventInfo = t; }
    getEventType() { return Rt(this.eventInfo); }
    setEventType(t) { Cf(this.eventInfo, t); }
    getEvent() { return Da(this.eventInfo); }
    setEvent(t) { GD(this.eventInfo, t); }
    getTargetElement() { return qD(this.eventInfo); }
    setTargetElement(t) { WD(this.eventInfo, t); }
    getContainer() { return zD(this.eventInfo); }
    setContainer(t) { uO(this.eventInfo, t); }
    getTimestamp() { return dO(this.eventInfo); }
    setTimestamp(t) { fO(this.eventInfo, t); }
    getAction() { let t = Ca(this.eventInfo); if (t)
        return { name: t[0], element: t[1] }; }
    setAction(t) { if (!t) {
        vf(this.eventInfo);
        return;
    } QD(this.eventInfo, t.name, t.element); }
    getIsReplay() { return pO(this.eventInfo); }
    setIsReplay(t) { ZD(this.eventInfo, t); }
    getResolved() { return YD(this.eventInfo); }
    setResolved(t) { KD(this.eventInfo, t); }
    clone() { return new e(JD(this.eventInfo)); }
}, gO = {}, mO = /\s*;\s*/, vO = C.CLICK, Ef = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: t = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = t, this.clickModSupport = n; }
    resolveEventType(t) { this.clickModSupport && Rt(t) === C.CLICK && iO(Da(t)) ? Cf(t, C.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t); }
    resolveAction(t) { YD(t) || (this.populateAction(t, qD(t)), KD(t, !0)); }
    resolveParentAction(t) { let n = Ca(t), o = n && Ia(n); vf(t); let r = o && this.getParentNode(o); r && this.populateAction(t, r); }
    populateAction(t, n) { let o = n; for (; o && o !== zD(t) && (o.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(o, t), !Ca(t));)
        o = this.getParentNode(o); let r = Ca(t); if (r && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (Rt(t) === C.MOUSEENTER || Rt(t) === C.MOUSELEAVE || Rt(t) === C.POINTERENTER || Rt(t) === C.POINTERLEAVE)))
        if (sO(Da(t), Rt(t), Ia(r))) {
            let i = aO(Da(t), Ia(r));
            GD(t, i), WD(t, Ia(r));
        }
        else
            vf(t); }
    getParentNode(t) { let n = t[Df.OWNER]; if (n)
        return n; let o = t.parentNode; return o?.nodeName === "#document-fragment" ? o?.host ?? null : o; }
    populateActionOnElement(t, n) { let o = this.parseActions(t), r = o[Rt(n)]; r !== void 0 && QD(n, r, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, o); }
    parseActions(t) { let n = QR(t); if (!n) {
        let o = t.getAttribute(mn.JSACTION);
        if (!o)
            n = gO, jD(t, n);
        else {
            if (n = ZR(o), !n) {
                n = {};
                let r = o.split(mO);
                for (let i = 0; i < r.length; i++) {
                    let s = r[i];
                    if (!s)
                        continue;
                    let a = s.indexOf(lO.EVENT_ACTION_SEPARATOR), c = a !== -1, l = c ? s.substr(0, a).trim() : vO, u = c ? s.substr(a + 1).trim() : s;
                    n[l] = u;
                }
                YR(o, n);
            }
            jD(t, n);
        }
    } return n; }
    addA11yClickSupport(t, n, o) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = o; }
}, XD = (function (e) { return e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", e; })(XD || {}), If = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(t, { actionResolver: n, eventReplayer: o } = {}) { this.dispatchDelegate = t, this.actionResolver = n, this.eventReplayer = o; }
    dispatch(t) { let n = new yf(t); this.actionResolver?.resolveEventType(t), this.actionResolver?.resolveAction(t); let o = n.getAction(); if (o && yO(o.element, n) && oO(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(t) { this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function yO(e, t) { return e.tagName === "A" && (t.getEventType() === C.CLICK || t.getEventType() === C.CLICKMOD); }
var eC = Symbol.for("propagationStopped"), Tf = { REPLAY: 101 };
var EO = "`preventDefault` called during event replay.";
var IO = "`composedPath` called during event replay.", Ma = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(t, n = !0) { this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new Ef({ clickModSupport: n }), this.dispatcher = new If(o => { this.dispatchToDelegate(o); }, { actionResolver: this.actionResolver }); }
    dispatch(t) { this.dispatcher.dispatch(t); }
    dispatchToDelegate(t) { for (t.getIsReplay() && TO(t), DO(t); t.getAction();) {
        if (MO(t), Na(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), CO(t)))
            return;
        this.actionResolver.resolveParentAction(t.eventInfo);
    } }
};
function DO(e) { let t = e.getEvent(), n = e.getEvent().stopPropagation.bind(t), o = () => { t[eC] = !0, n(); }; rn(t, "stopPropagation", o), rn(t, "stopImmediatePropagation", o); }
function CO(e) { return !!e.getEvent()[eC]; }
function TO(e) { let t = e.getEvent(), n = e.getTargetElement(), o = t.preventDefault.bind(t); rn(t, "target", n), rn(t, "eventPhase", Tf.REPLAY), rn(t, "preventDefault", () => { throw o(), new Error(EO + ""); }), rn(t, "composedPath", () => { throw new Error(IO + ""); }); }
function MO(e) { let t = e.getEvent(), n = e.getAction()?.element; n && rn(t, "currentTarget", n, { configurable: !0 }); }
function rn(e, t, n, { configurable: o = !1 } = {}) { Object.defineProperty(e, t, { value: n, configurable: o }); }
function tC(e, t) { e.ecrd(n => { t.dispatch(n); }, XD.I_AM_THE_JSACTION_FRAMEWORK); }
function NO(e) { return e?.q ?? []; }
function _O(e) { e && (VD(e.c, e.et, e.h), VD(e.c, e.etc, e.h, !0)); }
function VD(e, t, n, o) { for (let r = 0; r < t.length; r++)
    e.removeEventListener(t[r], n, o); }
var wO = !1, nC = (() => { class e {
    static MOUSE_SPECIAL_SUPPORT = wO;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, o, r) { let i = hO(n, o, o.target, r, Date.now()); this.handleEventInfo(i); }
    handleEventInfo(n) { if (!this.dispatcher) {
        ZD(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, o, r) { if (n in this.eventHandlers || !this.containerManager || !e.MOUSE_SPECIAL_SUPPORT && KR.indexOf(n) >= 0)
        return; let i = (a, c, l) => { this.handleEvent(a, c, l); }; this.eventHandlers[n] = i; let s = eO(o || n); if (s !== n) {
        let a = this.browserEventTypeToExtraEventTypes[s] || [];
        a.push(n), this.browserEventTypeToExtraEventTypes[s] = a;
    } this.containerManager.addEventListener(s, a => c => { i(n, c, a); }, r); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), _O(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let o = 0; o < n.length; o++) {
        let r = n[o], i = this.getEventTypesForBrowserEventType(r.eventType);
        for (let s = 0; s < i.length; s++) {
            let a = JD(r);
            Cf(a, i[s]), this.handleEventInfo(a);
        }
    } }
    getEventTypesForBrowserEventType(n) { let o = []; return this.eventHandlers[n] && o.push(n), this.browserEventTypeToExtraEventTypes[n] && o.push(...this.browserEventTypeToExtraEventTypes[n]), o; }
    handler(n) { return this.eventHandlers[n]; }
    cleanUp() { this.containerManager?.cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = []; }
    registerDispatcher(n, o) { this.ecrd(n, o); }
    ecrd(n, o) { if (this.dispatcher = n, this.queuedEventInfos?.length) {
        for (let r = 0; r < this.queuedEventInfos.length; r++)
            this.handleEventInfo(this.queuedEventInfos[r]);
        this.queuedEventInfos = null;
    } }
} return e; })();
function oC(e, t = window) { return NO(t._ejsas?.[e]); }
function Mf(e, t = window) { t._ejsas && (t._ejsas[e] = void 0); }
import "@angular/core/primitives/signals";
import "@angular/core/primitives/di";
import "rxjs/operators";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var ka = Symbol("InputSignalNode#UNSET"), TC = Fe(W({}, ja), { transformFn: void 0, applyValueToInputSignal(e, t) { Fa(e, t); } }), rP = Symbol();
function MC(e, t) { let n = Object.create(TC); n.value = e, n.transformFn = t?.transform; function o() { if (Br(n), n.value === ka) {
    let r = null;
    throw new w(-950, r);
} return n.value; } return o[ht] = n, o; }
var po = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })(po || {});
var rC = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => gs(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, SO = new S("");
SO.__NG_ELEMENT_ID__ = e => { let t = M(); if (t === null)
    throw new w(204, !1); if (t.type & 2)
    return t.value; if (e & 8)
    return null; throw new w(204, !1); };
function iP(e) { return new bc; }
function iC(e, t) { return MC(e, t); }
function bO(e) { return MC(ka, e); }
var sP = (iC.required = bO, iC);
function sC(e, t) { return ud(t); }
function AO(e, t) { return dd(t); }
var aP = (sC.required = AO, sC);
function cP(e, t) { return fd(t); }
function aC(e, t) { return ud(t); }
function RO(e, t) { return dd(t); }
var lP = (aC.required = RO, aC);
function uP(e, t) { return fd(t); }
function NC(e, t) { let n = Object.create(TC), o = new bc; n.value = e; function r() { return Br(n), cC(n.value), n.value; } return r[ht] = n, r.asReadonly = mp.bind(r), r.set = i => { n.equal(n.value, i) || (Fa(n, i), o.emit(i)); }, r.update = i => { cC(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function cC(e) { if (e === ka)
    throw new w(952, !1); }
function lC(e, t) { return NC(e, t); }
function OO(e) { return NC(ka, e); }
var dP = (lC.required = OO, lC), _C = !0, go = class {
}, fP = it("ContentChildren", (e, t = {}) => W({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: _C }, t), go), pP = it("ContentChild", (e, t = {}) => W({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), go), hP = it("ViewChildren", (e, t = {}) => W({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: _C }, t), go), gP = it("ViewChild", (e, t) => W({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), go);
function kO(e, t, n) { let o = new Un(n); return Promise.resolve(o); }
function uC(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var Sa = new S(""), xO = new S("");
function Fr(e) { return !e.moduleRef; }
function wC(e) { let t = Fr(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(j); return n.run(() => { Fr(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(Tt), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), Fr(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(Sa);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(Sa);
    s.add(i), e.moduleRef.onDestroy(() => { Bo(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return LO(o, n, () => { let i = t.get(Mt), s = i.add(), a = t.get(_d); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(gf, xr); if (AE(c || xr), !t.get(xO, !0))
    return Fr(e) ? t.get(Le) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (Fr(e)) {
    let u = t.get(Le);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return SC?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => void i.remove(s)); }); }); }
var SC;
function dC() { SC = PO; }
function PO(e, t) { let n = e.injector.get(Le); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new w(-403, !1); t.push(e); }
function LO(e, t, n) { try {
    let o = n();
    return Md(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var bC = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = o?.scheduleInRootZone, i = () => Mm(o?.ngZone, Fe(W({}, ya({ eventCoalescing: o?.ngZoneEventCoalescing, runCoalescing: o?.ngZoneRunCoalescing })), { scheduleInRootZone: r })), s = o?.ignoreChangesOutsideZone, a = [va({ ngZoneFactory: i, ignoreChangesOutsideZone: s }), { provide: Je, useExisting: Ea }, Tc], c = iy(n.moduleType, this.injector, a); return dC(), wC({ moduleRef: c, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = Sd({}, o); return dC(), kO(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new w(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(Sa, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(Re(Ce)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), ho = null;
function FO(e) { if (xa())
    throw new w(400, !1); wd(), ho = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(bC); return RC(e), t; }
function jO(e, t, n = []) { let o = `Platform: ${t}`, r = new S(o); return (i = []) => { let s = xa(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? FO(AC(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : HO(r); }; }
function AC(e = [], t) { return Ce.create({ name: t, providers: [{ provide: zf, useValue: "platform" }, { provide: Sa, useValue: new Set([() => ho = null]) }, ...e] }); }
function HO(e) { let t = xa(); if (!t)
    throw new w(-401, !1); return t; }
function xa() { return typeof ngServerMode < "u" && ngServerMode ? null : ho?.get(bC) ?? null; }
function mP() { xa()?.destroy(); }
function VO(e = []) { if (ho)
    return ho; let t = AC(e); return (typeof ngServerMode > "u" || !ngServerMode) && (ho = t), wd(), RC(t), t; }
function vP(e) { return Qe([{ provide: cu, useValue: e, multi: !0 }]); }
function RC(e) { let t = e.get(cu, null); oi(e, () => { t?.forEach(n => n()); }); }
function yP(e) { return Qe([]); }
function EP() { return !1; }
function IP() { }
function DP(e) { let t = hd(e); if (!t)
    throw OC(e); return new Un(t); }
function CP(e) { let t = hd(e); if (!t)
    throw OC(e); return t; }
function OC(e) { return new Error(`No module with ID ${e} loaded`); }
var BO = (() => { class e {
    static __NG_ELEMENT_ID__ = UO;
} return e; })();
function UO(e) { return $O(M(), g(), (e & 16) === 16); }
function $O(e, t, n) { if (me(e) && !n) {
    let o = ue(e.index, t);
    return new St(o, o);
}
else if (e.type & 175) {
    let o = t[Z];
    return new St(o, t);
} return null; }
var wf = class extends BO {
}, fC = class extends wf {
}, ba = class {
    constructor() { }
    supports(t) { return ir(t); }
    create(t) { return new Sf(t); }
}, GO = (e, t) => t, Sf = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || GO; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < pC(o, r, i) ? n : o, a = pC(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !ir(t))
        throw new w(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, Rv(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new bf(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Aa), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new Aa), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, bf = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, Af = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, Aa = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new Af, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function pC(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var Ra = class {
    constructor() { }
    supports(t) { return t instanceof Map || Xs(t); }
    create() { return new Rf; }
}, Rf = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    _removalsTail = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || Xs(t)))
        throw new w(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (o, r) => { if (n && n.key === r)
        this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(r, o);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let o = n; o !== null; o = o._nextRemoved)
            o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let o = t._prev;
        return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev, s = r._next;
        return i && (i._next = s), s && (s._prev = i), r._next = null, r._prev = null, r;
    } let o = new Of(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o)); }
}, Of = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function hC() { return new kC([new ba]); }
var kC = (() => { class e {
    factories;
    static \u0275prov = B({ token: e, providedIn: "root", factory: hC });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = D(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || hC()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new w(901, !1); }
} return e; })();
function gC() { return new xC([new Ra]); }
var xC = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: gC });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = D(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || gC()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new w(901, !1); }
} return e; })(), qO = [new Ra], WO = [new ba], TP = new kC(WO), MP = new xC(qO), NP = jO(null, "core", []), _P = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(Re(Le)); };
    static \u0275mod = md({ type: e });
    static \u0275inj = Eo({});
} return e; })();
function wP(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (x(8), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new w(-401, !1); try {
    let i = r?.injector ?? VO(o), s = [va({}), { provide: Je, useExisting: Ea }, Tc, ...n || []], a = new ar({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return wC({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    x(9);
} }
var _a = new WeakSet, mC = "", wa = [];
function vC(e) { return e.get(Ms, hu); }
function zO() { let e = [{ provide: Ms, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = D(at);
            t = !!window._ejsas?.[n];
        } return t && Y("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: mt, useValue: () => { let t = D(Le), { injector: n } = t; if (!_a.has(t)) {
        let o = D(yr);
        if (vC(n)) {
            Ng();
            let r = n.get(at), i = Tg(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (Cg(s, a, c), vu(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: Rr, useFactory: () => { let t = D(Le), { injector: n } = t; return () => { if (!vC(n) || _a.has(t))
        return; _a.add(t); let o = n.get(at); t.onDestroy(() => { _a.delete(t), typeof ngServerMode < "u" && !ngServerMode && Mf(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(Eu); QO(r, n); let i = n.get(yr); i.get(mC)?.forEach(yu), i.delete(mC); let s = r.instance; Er(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var QO = (e, t) => { let n = t.get(at), o = window._ejsas[n], r = e.instance = new nC(new Ta(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = oC(n); r.replayEarlyEventInfos(i), Mf(n); let s = new Ma(a => { YO(t, a, a.currentTarget); }); tC(r, s); };
function ZO(e, t, n) { let o = new Map, r = t[Pt], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!$D(l))
        continue;
    Na(l) ? n.capture.add(l) : n.regular.add(l);
    let u = k(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function YO(e, t, n) { let o = (n && n.getAttribute(eo)) ?? ""; /d\d+/.test(o) ? KO(o, e, t, n) : t.eventPhase === Tf.REPLAY && Iu(t, n); }
function KO(e, t, n, o) { wa.push({ event: n, currentTarget: o }), ft(t, e, JO); }
function JO(e) { let t = [...wa], n = new Set(e); wa = []; for (let { event: o, currentTarget: r } of t) {
    let i = r.getAttribute(eo);
    n.has(i) ? Iu(o, r) : wa.push({ event: o, currentTarget: r });
} }
var kf = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, XO = 0;
function PC(e) { return e.ssrId || (e.ssrId = `t${XO++}`), e.ssrId; }
function LC(e, t, n) { let o = []; return Fn(e, t, n, o), o.length; }
function ek(e) { let t = []; return qs(e, t), t.length; }
function FC(e, t, n) { let o = e[H]; return o && !o.hasAttribute(Yn) ? Oa(o, e, null, t) : null; }
function jC(e, t, n) { let o = So(e[H]), r = FC(o, t); if (r === null)
    return; let i = k(o[H]), s = e[z], a = Oa(i, s, null, t), c = o[T], l = `${r}|${a}`; c.setAttribute(i, wn, l); }
function SP(e, t) { let n = e.injector, o = hv(n), r = Er(n), i = new kf, s = new Map, a = e._views, c = n.get(Ms, hu), l = { regular: new Set, capture: new Set }, u = new Map, d = e.injector.get(at); for (let h of a) {
    let m = Du(h);
    if (m !== null) {
        let y = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, appId: d, deferBlocks: u };
        J(m) ? jC(m, y) : FC(m, y), ik(s, t);
    }
} let f = i.getAll(), p = n.get(Xt); if (p.set(Ns, f), u.size > 0) {
    let h = {};
    for (let [m, y] of u.entries())
        h[m] = y;
    p.set(_s, h);
} return l; }
function tk(e, t, n, o, r) { let i = [], s = ""; for (let a = V; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (Ve(c) && (c = c[E], J(c))) {
        u = ek(c) + 1, jC(c, r);
        let p = So(c[H]);
        d = { [Is]: p[v].ssrId, [nt]: u };
    }
    if (!d) {
        let p = c[v];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = PC(p), u = LC(p, c, p.firstChild)), d = { [Is]: l, [nt]: u };
        let h = !1;
        if (My(n[v], t)) {
            let m = he(n, t), y = ie(n[v], t);
            if (r.isIncrementalHydrationEnabled && y.hydrateTriggers !== null) {
                let I = `d${r.deferBlocks.size}`;
                y.hydrateTriggers.has(7) && (h = !0);
                let A = [];
                qs(e, A);
                let le = { [nt]: A.length, [vr]: m[dt] }, Ae = nk(y.hydrateTriggers);
                Ae.length > 0 && (le[Ts] = Ae), o !== null && (le[du] = o), r.deferBlocks.set(I, le);
                let Te = k(e);
                Te !== void 0 ? Te.nodeType === Node.COMMENT_NODE && yC(Te, I) : yC(Te, I), h || ak(y, A, I, r), o = I, d[Cs] = I;
            }
            d[vr] = m[dt];
        }
        h || Object.assign(d, HC(e[a], o, r));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[gr] ??= 1, p[gr]++;
    }
    else
        s = f, i.push(d);
} return i; }
function nk(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : n.push({ trigger: o, delay: r.delay })); return n; }
function jr(e, t, n, o) { let r = t.index - E; e[mr] ??= {}, e[mr][r] ??= lv(t, n, o); }
function Nf(e, t) { let n = typeof t == "number" ? t : t.index - E; e[Xn] ??= [], e[Xn].includes(n) || e[Xn].push(n); }
function HC(e, t = null, n) { let o = {}, r = e[v], i = gv(r, n), s = n.shouldReplayEvents ? ZO(r, e, n.eventTypesToReplay) : null; for (let a = E; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - E, u = mv(e, a, n);
    if (u) {
        o[Ds] ??= {}, o[Ds][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            Nf(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + E];
            jr(o, f, e, i);
        }
        continue;
    }
    if (hs(c) && !to(c)) {
        if (J(e[a]) && c.tView && (o[Es] ??= {}, o[Es][l] = PC(c.tView)), co(c, e) && sk(c)) {
            Nf(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !Xa(d) && !Kn(d) && (co(d, e) ? Nf(o, d) : jr(o, d, e, i));
                    else
                        throw ev(k(e[a]));
        }
        if (ok(o, c, e, i), J(e[a])) {
            let d = e[a][H];
            if (Array.isArray(d)) {
                let f = k(d);
                f.hasAttribute(Yn) || Oa(f, d, t, n);
            }
            o[Jn] ??= {}, o[Jn][l] = tk(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !Uh(c)) {
            let d = k(e[a][H]);
            d.hasAttribute(Yn) || Oa(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[hr] ??= {}, o[hr][l] = LC(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !Kn(d) && jr(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = k(e[a]);
            Tu(n, d);
        }
        if (s && c.type & 2) {
            let d = k(e[a]);
            s.has(d) && mu(d, s.get(d), t);
        }
    }
} return o; }
function ok(e, t, n, o) { Xa(t) || (t.projectionNext && t.projectionNext !== t.next && !Kn(t.projectionNext) && jr(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && co(t.parent, n) && !co(t, n) && jr(e, t, n, o)); }
function rk(e) { let t = e[F]; return t?.constructor ? q(t.constructor)?.encapsulation === ot.ShadowDom : !1; }
function Oa(e, t, n, o) { let r = t[T]; if (Zf(t) && !Zs() || rk(t))
    return r.setAttribute(e, Yn, ""), null; {
    let i = HC(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, wn, s.toString()), s;
} }
function yC(e, t) { e.textContent = `ngh=${t}`; }
function ik(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function sk(e) { let t = e; for (; t != null;) {
    if (me(t))
        return !0;
    t = t.parent;
} return !1; }
function ak(e, t, n, o) { let r = Fg(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        mu(s, r, n);
} }
var EC = !1, IC = !1, DC = !1;
function ck() { EC || (EC = !0, Rg(), TE(), vI(), ME(), Ey(), $v(), Cv(), Hm()); }
function lk() { IC || (IC = !0, OE(), pv(), yv()); }
function uk() { DC || (DC = !0, Vg()); }
function dk(e) { return e.whenStable(); }
var bP = "ngcm";
function AP() { let e = [{ provide: en, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!D(Xt, { optional: !0 })?.get(Ns, null)), t && Y("NgHydration"), t; } }, { provide: mt, useValue: () => { td(!1), !(typeof ngServerMode < "u" && ngServerMode) && D(en) && (Ug(st()), ck()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: fu, useFactory: () => D(en) }, { provide: Rr, useFactory: () => { if (D(en)) {
        let t = D(Le);
        return () => { dk(t).then(() => { t.destroyed || nd(t); }); };
    } return () => { }; }, multi: !0 }), Qe(e); }
function RP() { return [{ provide: pu, useFactory: () => D(en) }, { provide: mt, useValue: () => { D(en) && (lk(), td(!0), Y("NgI18nHydration")); }, multi: !0 }]; }
function OP() { let e = [zO(), { provide: gu, useValue: !0 }, { provide: ct, useClass: _g }, { provide: mt, useValue: () => { uk(), Y("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Rr, useFactory: () => { let t = D(Ce), n = st(); return () => { let o = Bg(t), r = uv(n, n.body); By(t, o, r), jg(n, t); }; }, multi: !0 }), e; }
function kP(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function xP(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var fk = "\u{1F170}\uFE0F", Pa = !1;
function PP(e) { if (!Pa)
    return; let { startLabel: t } = VC(e); performance.mark(t); }
function LP(e) { if (!Pa)
    return; let { startLabel: t, labelName: n, endLabel: o } = VC(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function VC(e) { let t = `${fk}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var CC = !1;
function FP() { if (!CC && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    CC = !0, console.warn("Performance API is not supported on this platform");
    return;
} Pa = !0; }
function jP() { Pa = !1; }
function HP(e) { let t = e; for (; t;) {
    let n = sg(t);
    if (n !== null)
        for (let o = E; o < n.length; o++) {
            let r = n[o];
            if (!K(r) && !J(r) || r[H] !== t)
                continue;
            let i = n[v], s = It(i, o);
            if (me(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = a.debugInfo?.className || a.type.name;
                if (c)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function VP(e) { }
function BP(e) { return ee({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(pe, `ng:///${e.type.name}/\u0275fac.js`, e); }
function UP(e) { Cd(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function $P(e) { Ay(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); Cd(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function GP(e) { return ee({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(pe, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function qP(e) { return ee({ usage: 1, kind: pk(e.target), type: e.type }).compileFactoryDeclaration(pe, `ng:///${e.type.name}/\u0275fac.js`, e); }
function pk(e) { switch (e) {
    case po.Directive: return "directive";
    case po.Component: return "component";
    case po.Injectable: return "injectable";
    case po.Pipe: return "pipe";
    case po.NgModule: return "NgModule";
} }
function WP(e) { return ee({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(pe, `ng:///${e.type.name}/\u0275prov.js`, e); }
function zP(e) { return ee({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(pe, `ng:///${e.type.name}/\u0275inj.js`, e); }
function QP(e) { return ee({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(pe, `ng:///${e.type.name}/\u0275mod.js`, e); }
function ZP(e) { return ee({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(pe, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var _f = Symbol("NOT_SET"), BC = new Set, hk = Fe(W({}, ja), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: _f, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== _f && !$r(this))
        return this.signal; try {
        for (let r of this.cleanup ?? BC)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = vo(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        Ur(this, n);
    } return (this.value === _f || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), xf = class extends er {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get(hn), s), this.scheduler = r; for (let a of Hu) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(hk);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (Br(l), l.value), l.signal[ht] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? BC)
                    n();
            }
            finally {
                yo(t);
            } }
};
function YP(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return Ls; let n = t?.injector ?? D(Ce), o = n.get(Je), r = n.get(Ps), i = n.get(ro, null, { optional: !0 }); r.impl ??= n.get(Vu); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(gi, null, { optional: !0 }), c = new xf(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function KP(e, t) { let n = q(e), o = t.elementInjector || ni(); return new bt(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function JP(e) { let t = q(e); if (!t)
    return null; let n = new bt(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function XP(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var eL = new S("", { providedIn: "platform", factory: () => null }), tL = new S("", { providedIn: "platform", factory: () => null }), nL = new S("", { providedIn: "platform", factory: () => null });
export { IM as ANIMATION_MODULE_TYPE, Rr as APP_BOOTSTRAP_LISTENER, at as APP_ID, Nd as APP_INITIALIZER, _d as ApplicationInitStatus, _P as ApplicationModule, Le as ApplicationRef, eg as Attribute, PD as COMPILER_OPTIONS, DM as CSP_NONCE, yN as CUSTOM_ELEMENTS_SCHEMA, vs as ChangeDetectionStrategy, BO as ChangeDetectorRef, PR as Compiler, nu as CompilerFactory, SR as Component, Js as ComponentFactory, wr as ComponentFactoryResolver, Nv as ComponentRef, pP as ContentChild, fP as ContentChildren, BR as DEFAULT_CURRENCY_CODE, nT as DOCUMENT, Jt as DebugElement, ou as DebugEventListener, dr as DebugNode, Sf as DefaultIterableDiffer, hn as DestroyRef, xD as Directive, mt as ENVIRONMENT_INITIALIZER, pr as ElementRef, fC as EmbeddedViewRef, vt as EnvironmentInjector, hi as ErrorHandler, et as EventEmitter, SO as HOST_TAG_NAME, kh as Host, rC as HostAttributeToken, OR as HostBinding, kR as HostListener, KC as INJECTOR, bh as Inject, qT as Injectable, S as InjectionToken, Ce as Injector, AR as Input, kC as IterableDiffers, xC as KeyValueDiffers, gf as LOCALE_ID, fE as MAX_ANIMATION_TIMEOUT, FD as MissingTranslationStrategy, ps as ModuleWithComponentFactories, EN as NO_ERRORS_SCHEMA, xR as NgModule, oy as NgModuleFactory, Vn as NgModuleRef, Vl as NgProbeToken, j as NgZone, Ah as Optional, RR as Output, bc as OutputEmitterRef, EM as PACKAGE_ROOT_URL, yM as PLATFORM_ID, cu as PLATFORM_INITIALIZER, wc as PendingTasks, bR as Pipe, bC as PlatformRef, go as Query, $i as QueryList, eL as REQUEST, nL as REQUEST_CONTEXT, tL as RESPONSE_INIT, bw as Renderer2, rr as RendererFactory2, Qi as RendererStyleFlags2, _v as Sanitizer, tn as SecurityContext, Rh as Self, ji as SimpleChange, Oh as SkipSelf, UR as TRANSLATIONS, $R as TRANSLATIONS_FORMAT, nr as TemplateRef, fb as Testability, ky as TestabilityRegistry, Xt as TransferState, xh as Type, GC as VERSION, $C as Version, gP as ViewChild, hP as ViewChildren, ta as ViewContainerRef, ot as ViewEncapsulation, wf as ViewRef, Nm as afterEveryRender, Bu as afterNextRender, YP as afterRenderEffect, GR as asNativeElements, eT as assertInInjectionContext, iT as assertNotInReactiveContext, HO as assertPlatform, kP as booleanAttribute, cT as computed, lP as contentChild, uP as contentChildren, KP as createComponent, gd as createEnvironmentInjector, ry as createNgModule, MS as createNgModuleRef, FO as createPlatform, jO as createPlatformFactory, WC as defineInjectable, mP as destroyPlatform, lT as effect, IP as enableProdMode, cb as enableProfiling, Va as forwardRef, zn as getDebugNode, DP as getModuleFactory, CP as getNgModuleById, xa as getPlatform, XC as importProvidersFrom, D as inject, sP as input, Pv as inputBinding, EP as isDevMode, gp as isSignal, To as isStandalone, uT as linkedSignal, Qe as makeEnvironmentProviders, TM as makeStateKey, XP as mergeApplicationConfig, dP as model, xP as numberAttribute, iP as output, Lv as outputBinding, NP as platformCore, pb as provideAppInitializer, oT as provideBrowserGlobalErrorListeners, yP as provideCheckNoChangesConfig, JC as provideEnvironmentInitializer, vN as provideNgReflectAttributes, vP as providePlatformInitializer, FR as provideZoneChangeDetection, HR as provideZonelessChangeDetection, JP as reflectComponentType, G as resolveForwardRef, dT as resource, oi as runInInjectionContext, xy as setTestabilityGetter, Mc as signal, Yw as twoWayBinding, aT as untracked, aP as viewChild, cP as viewChildren, dE as \u0275ANIMATIONS_DISABLED, pg as \u0275AcxChangeDetectionStrategy, hg as \u0275AcxViewEncapsulation, Ps as \u0275AfterRenderManager, bP as \u0275CLIENT_RENDER_MODE_FLAG, V as \u0275CONTAINER_HEADER_OFFSET, Je as \u0275ChangeDetectionScheduler, Ea as \u0275ChangeDetectionSchedulerImpl, Js as \u0275ComponentFactory, ab as \u0275Console, xr as \u0275DEFAULT_LOCALE_ID, wy as \u0275DEFER_BLOCK_CONFIG, nb as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, ct as \u0275DEHYDRATED_BLOCK_REGISTRY, Id as \u0275DeferBlockBehavior, U as \u0275DeferBlockState, xO as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, Sc as \u0275EffectScheduler, fg as \u0275Framework, kg as \u0275HydrationStatus, CM as \u0275IMAGE_CONFIG, gg as \u0275IMAGE_CONFIG_DEFAULTS, zf as \u0275INJECTOR_SCOPE, rP as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, Tt as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, NM as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, en as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, gu as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, yr as \u0275JSACTION_BLOCK_ELEMENT_MAP, Eu as \u0275JSACTION_EVENT_CONTRACT, Gi as \u0275LContext, Gn as \u0275LocaleDataIndex, an as \u0275NG_COMP_DEF, Qr as \u0275NG_DIR_DEF, kt as \u0275NG_ELEMENT_ID, Ba as \u0275NG_INJ_DEF, Ua as \u0275NG_MOD_DEF, Zr as \u0275NG_PIPE_DEF, zr as \u0275NG_PROV_DEF, Oi as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, P as \u0275NO_CHANGE, Un as \u0275NgModuleFactory, Ln as \u0275NoopNgZone, fk as \u0275PERFORMANCE_MARK_PREFIX, LD as \u0275PROVIDED_NG_ZONE, Mt as \u0275PendingTasksInternal, Qa as \u0275R3Injector, Fi as \u0275ReflectionCapabilities, bt as \u0275Render3ComponentFactory, rs as \u0275Render3ComponentRef, Bn as \u0275Render3NgModuleRef, fT as \u0275ResourceImpl, w as \u0275RuntimeError, ht as \u0275SIGNAL, bg as \u0275SSR_CONTENT_INTEGRITY_MARKER, Ry as \u0275TESTABILITY, Oy as \u0275TESTABILITY_GETTER, _y as \u0275TimerScheduler, xs as \u0275TracingAction, ro as \u0275TracingService, St as \u0275ViewRef, Gr as \u0275XSS_SECURITY_URL, gn as \u0275ZONELESS_ENABLED, Jg as \u0275_sanitizeHtml, As as \u0275_sanitizeUrl, Pn as \u0275allLeavingAnimations, oo as \u0275allowSanitizationBypassAndThrow, SP as \u0275annotateForHydration, VP as \u0275assertType, zM as \u0275bypassSanitizationTrustHtml, KM as \u0275bypassSanitizationTrustResourceUrl, ZM as \u0275bypassSanitizationTrustScript, QM as \u0275bypassSanitizationTrustStyle, YM as \u0275bypassSanitizationTrustUrl, Xv as \u0275clearResolutionOfComponentResourcesQueue, MD as \u0275compileComponent, hf as \u0275compileDirective, CD as \u0275compileNgModule, TD as \u0275compileNgModuleDefs, kO as \u0275compileNgModuleFactory, kD as \u0275compilePipe, Ga as \u0275convertToBitFlags, tT as \u0275createInjector, VO as \u0275createOrReusePlatformInjector, TP as \u0275defaultIterableDiffers, MP as \u0275defaultKeyValueDiffers, jn as \u0275depsTracker, Ov as \u0275devModeEqual, jP as \u0275disableProfiling, FP as \u0275enableProfiling, pT as \u0275encapsulateResourceError, $d as \u0275findLocaleData, ID as \u0275flushModuleScopingQueueAsMuchAsPossible, Hf as \u0275formatRuntimeError, gR as \u0275generateStandaloneInDeclarationsError, sb as \u0275getAsyncClassMetadataFn, HP as \u0275getClosestComponentName, q as \u0275getComponentDef, zn as \u0275getDebugNode, Pi as \u0275getDeferBlocks, lM as \u0275getDirectives, st as \u0275getDocument, dM as \u0275getHostElement, zC as \u0275getInjectableDef, ye as \u0275getLContext, zb as \u0275getLocaleCurrencyCode, _E as \u0275getLocalePluralCase, sT as \u0275getOutputDestroyRef, qg as \u0275getSanitizationBypassType, lb as \u0275getTransferState, DN as \u0275getUnknownElementStrictMode, TN as \u0275getUnknownPropertyStrictMode, Ee as \u0275global, Fv as \u0275inferTagNameFromDefinition, UO as \u0275injectChangeDetectorRef, wP as \u0275internalCreateApplication, va as \u0275internalProvideZoneChangeDetection, Ly as \u0275isBoundToModule, yS as \u0275isComponentDefPendingResolution, YC as \u0275isEnvironmentProviders, QC as \u0275isInjectable, Bt as \u0275isNgModule, Md as \u0275isPromise, Py as \u0275isSubscribable, k_ as \u0275isViewDirty, x_ as \u0275markForRefresh, qe as \u0275noSideEffects, ff as \u0275patchComponentDefWithScope, Y as \u0275performanceMarkFeature, ub as \u0275publishExternalGlobalUtil, PM as \u0275readHydrationInfo, Wb as \u0275registerLocaleData, tt as \u0275renderDeferBlockState, yR as \u0275resetCompiledComponents, FM as \u0275resetIncrementalHydrationEnabledWarnedForTests, pR as \u0275resetJitOptions, Kv as \u0275resolveComponentResources, ES as \u0275restoreComponentResolutionQueue, TS as \u0275setAllowDuplicateNgModuleIdsForTest, hT as \u0275setAlternateWeakRefImpl, mD as \u0275setClassDebugInfo, Cd as \u0275setClassMetadata, Ay as \u0275setClassMetadataAsync, UC as \u0275setCurrentInjector, mM as \u0275setDocument, ZC as \u0275setInjectorProfilerContext, AE as \u0275setLocaleId, IN as \u0275setUnknownElementStrictMode, CN as \u0275setUnknownPropertyStrictMode, PP as \u0275startMeasuring, LP as \u0275stopMeasuring, bo as \u0275store, sn as \u0275stringify, pf as \u0275transitiveScopesFor, ia as \u0275triggerResourceLoading, qC as \u0275truncateMiddle, Qb as \u0275unregisterLocaleData, lt as \u0275unwrapSafeValue, rT as \u0275unwrapWritableSignal, AP as \u0275withDomHydration, zO as \u0275withEventReplay, RP as \u0275withI18nSupport, OP as \u0275withIncrementalHydration, py as \u0275\u0275CopyDefinitionFeature, GI as \u0275\u0275ExternalStylesFeature, po as \u0275\u0275FactoryTarget, hy as \u0275\u0275HostDirectivesFeature, vd as \u0275\u0275InheritDefinitionFeature, Lh as \u0275\u0275NgOnChangesFeature, $I as \u0275\u0275ProvidersFeature, mm as \u0275\u0275advance, Uo as \u0275\u0275animateEnter, $o as \u0275\u0275animateEnterListener, Go as \u0275\u0275animateLeave, cs as \u0275\u0275animateLeaveListener, Ad as \u0275\u0275ariaProperty, RI as \u0275\u0275attachSourceLocations, Rd as \u0275\u0275attribute, aI as \u0275\u0275classMap, Jd as \u0275\u0275classProp, mE as \u0275\u0275componentInstance, yE as \u0275\u0275conditional, la as \u0275\u0275conditionalBranchCreate, vE as \u0275\u0275conditionalCreate, QE as \u0275\u0275contentQuery, JE as \u0275\u0275contentQuerySignal, df as \u0275\u0275declareLet, Uy as \u0275\u0275defer, by as \u0275\u0275deferEnableTimerScheduling, Wy as \u0275\u0275deferHydrateNever, rE as \u0275\u0275deferHydrateOnHover, Zy as \u0275\u0275deferHydrateOnIdle, Jy as \u0275\u0275deferHydrateOnImmediate, aE as \u0275\u0275deferHydrateOnInteraction, tE as \u0275\u0275deferHydrateOnTimer, uE as \u0275\u0275deferHydrateOnViewport, qy as \u0275\u0275deferHydrateWhen, nE as \u0275\u0275deferOnHover, zy as \u0275\u0275deferOnIdle, Yy as \u0275\u0275deferOnImmediate, iE as \u0275\u0275deferOnInteraction, Xy as \u0275\u0275deferOnTimer, cE as \u0275\u0275deferOnViewport, oE as \u0275\u0275deferPrefetchOnHover, Qy as \u0275\u0275deferPrefetchOnIdle, Ky as \u0275\u0275deferPrefetchOnImmediate, sE as \u0275\u0275deferPrefetchOnInteraction, eE as \u0275\u0275deferPrefetchOnTimer, lE as \u0275\u0275deferPrefetchOnViewport, Gy as \u0275\u0275deferPrefetchWhen, $y as \u0275\u0275deferWhen, sy as \u0275\u0275defineComponent, cy as \u0275\u0275defineDirective, B as \u0275\u0275defineInjectable, Eo as \u0275\u0275defineInjector, md as \u0275\u0275defineNgModule, ly as \u0275\u0275definePipe, lo as \u0275\u0275directiveInject, ic as \u0275\u0275disableBindings, Pd as \u0275\u0275domElement, Hd as \u0275\u0275domElementContainer, jd as \u0275\u0275domElementContainerEnd, ga as \u0275\u0275domElementContainerStart, pa as \u0275\u0275domElementEnd, fa as \u0275\u0275domElementStart, Zd as \u0275\u0275domListener, Bd as \u0275\u0275domProperty, Ed as \u0275\u0275domTemplate, xd as \u0275\u0275element, Fd as \u0275\u0275elementContainer, kr as \u0275\u0275elementContainerEnd, ha as \u0275\u0275elementContainerStart, da as \u0275\u0275elementEnd, ua as \u0275\u0275elementStart, rc as \u0275\u0275enableBindings, gD as \u0275\u0275getComponentDepsFactory, NE as \u0275\u0275getCurrentView, Jh as \u0275\u0275getInheritedFactory, vD as \u0275\u0275getReplaceMetadataURL, BE as \u0275\u0275i18n, $E as \u0275\u0275i18nApply, UE as \u0275\u0275i18nAttributes, qd as \u0275\u0275i18nEnd, Wd as \u0275\u0275i18nExp, GE as \u0275\u0275i18nPostprocess, Gd as \u0275\u0275i18nStart, Re as \u0275\u0275inject, gs as \u0275\u0275injectAttribute, OI as \u0275\u0275interpolate, kI as \u0275\u0275interpolate1, xI as \u0275\u0275interpolate2, PI as \u0275\u0275interpolate3, LI as \u0275\u0275interpolate4, FI as \u0275\u0275interpolate5, jI as \u0275\u0275interpolate6, HI as \u0275\u0275interpolate7, VI as \u0275\u0275interpolate8, BI as \u0275\u0275interpolateV, wv as \u0275\u0275invalidFactory, Yr as \u0275\u0275invalidFactoryDep, zd as \u0275\u0275listener, KE as \u0275\u0275loadQuery, Dc as \u0275\u0275namespaceHTML, Ic as \u0275\u0275namespaceMathML, Ec as \u0275\u0275namespaceSVG, qE as \u0275\u0275nextContext, UP as \u0275\u0275ngDeclareClassMetadata, $P as \u0275\u0275ngDeclareClassMetadataAsync, GP as \u0275\u0275ngDeclareComponent, BP as \u0275\u0275ngDeclareDirective, qP as \u0275\u0275ngDeclareFactory, WP as \u0275\u0275ngDeclareInjectable, zP as \u0275\u0275ngDeclareInjector, QP as \u0275\u0275ngDeclareNgModule, ZP as \u0275\u0275ngDeclarePipe, cD as \u0275\u0275pipe, lD as \u0275\u0275pipeBind1, uD as \u0275\u0275pipeBind2, dD as \u0275\u0275pipeBind3, fD as \u0275\u0275pipeBind4, pD as \u0275\u0275pipeBindV, zE as \u0275\u0275projection, WE as \u0275\u0275projectionDef, kd as \u0275\u0275property, zI as \u0275\u0275pureFunction0, QI as \u0275\u0275pureFunction1, ZI as \u0275\u0275pureFunction2, YI as \u0275\u0275pureFunction3, KI as \u0275\u0275pureFunction4, JI as \u0275\u0275pureFunction5, XI as \u0275\u0275pureFunction6, eD as \u0275\u0275pureFunction7, tD as \u0275\u0275pureFunction8, nD as \u0275\u0275pureFunctionV, eI as \u0275\u0275queryAdvance, YE as \u0275\u0275queryRefresh, AI as \u0275\u0275readContextLet, tI as \u0275\u0275reference, pd as \u0275\u0275registerNgModuleType, CE as \u0275\u0275repeater, DE as \u0275\u0275repeaterCreate, IE as \u0275\u0275repeaterTrackByIdentity, EE as \u0275\u0275repeaterTrackByIndex, yD as \u0275\u0275replaceMetadata, cc as \u0275\u0275resetView, bu as \u0275\u0275resolveBody, cm as \u0275\u0275resolveDocument, am as \u0275\u0275resolveWindow, ac as \u0275\u0275restoreView, Xg as \u0275\u0275sanitizeHtml, Su as \u0275\u0275sanitizeResourceUrl, tm as \u0275\u0275sanitizeScript, em as \u0275\u0275sanitizeStyle, wu as \u0275\u0275sanitizeUrl, rm as \u0275\u0275sanitizeUrlOrResourceUrl, qI as \u0275\u0275setComponentScope, WI as \u0275\u0275setNgModuleScope, bI as \u0275\u0275storeLet, sI as \u0275\u0275styleMap, Kd as \u0275\u0275styleProp, Qd as \u0275\u0275syntheticHostListener, Ud as \u0275\u0275syntheticHostProperty, yd as \u0275\u0275template, hD as \u0275\u0275templateRefExtractor, gI as \u0275\u0275text, Xd as \u0275\u0275textInterpolate, ma as \u0275\u0275textInterpolate1, ef as \u0275\u0275textInterpolate2, tf as \u0275\u0275textInterpolate3, nf as \u0275\u0275textInterpolate4, of as \u0275\u0275textInterpolate5, rf as \u0275\u0275textInterpolate6, sf as \u0275\u0275textInterpolate7, af as \u0275\u0275textInterpolate8, cf as \u0275\u0275textInterpolateV, nm as \u0275\u0275trustConstantHtml, om as \u0275\u0275trustConstantResourceUrl, wI as \u0275\u0275twoWayBindingSet, uf as \u0275\u0275twoWayListener, lf as \u0275\u0275twoWayProperty, ny as \u0275\u0275validateIframeAttribute, ZE as \u0275\u0275viewQuery, XE as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/attribute.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/primitives/event-dispatch.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v20.3.7
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)

@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/core.mjs:
@angular/core/fesm2022/core.mjs:
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
