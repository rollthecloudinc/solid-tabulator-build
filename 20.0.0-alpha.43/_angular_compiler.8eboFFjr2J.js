import { a as S, b as ue } from "@nf-internal/chunk-FJYW2LMB";
var tu = new RegExp(`(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=(["']?)([^\\]"']*)\\5)?\\])|(\\))|(\\s*,\\s*)`, "g"), Jn = class n {
    element = null;
    classNames = [];
    attrs = [];
    notSelectors = [];
    static parse(e) { let t = [], s = (l, c) => { c.notSelectors.length > 0 && !c.element && c.classNames.length == 0 && c.attrs.length == 0 && (c.element = "*"), l.push(c); }, r = new n, i, a = r, o = !1; for (tu.lastIndex = 0; i = tu.exec(e);) {
        if (i[1]) {
            if (o)
                throw new Error("Nesting :not in a selector is not allowed");
            o = !0, a = new n, r.notSelectors.push(a);
        }
        let l = i[2];
        if (l) {
            let h = i[3];
            h === "#" ? a.addAttribute("id", l.slice(1)) : h === "." ? a.addClassName(l.slice(1)) : a.setElement(l);
        }
        let c = i[4];
        if (c && a.addAttribute(a.unescapeAttribute(c), i[6]), i[7] && (o = !1, a = r), i[8]) {
            if (o)
                throw new Error("Multiple selectors in :not are not supported");
            s(t, r), r = a = new n;
        }
    } return s(t, r), t; }
    unescapeAttribute(e) { let t = "", s = !1; for (let r = 0; r < e.length; r++) {
        let i = e.charAt(r);
        if (i === "\\") {
            s = !0;
            continue;
        }
        if (i === "$" && !s)
            throw new Error(`Error in attribute selector "${e}". Unescaped "$" is not supported. Please escape with "\\$".`);
        s = !1, t += i;
    } return t; }
    escapeAttribute(e) { return e.replace(/\\/g, "\\\\").replace(/\$/g, "\\$"); }
    isElementSelector() { return this.hasElementSelector() && this.classNames.length == 0 && this.attrs.length == 0 && this.notSelectors.length === 0; }
    hasElementSelector() { return !!this.element; }
    setElement(e = null) { this.element = e; }
    getAttrs() { let e = []; return this.classNames.length > 0 && e.push("class", this.classNames.join(" ")), e.concat(this.attrs); }
    addAttribute(e, t = "") { this.attrs.push(e, t && t.toLowerCase() || ""); }
    addClassName(e) { this.classNames.push(e.toLowerCase()); }
    toString() { let e = this.element || ""; if (this.classNames && this.classNames.forEach(t => e += `.${t}`), this.attrs)
        for (let t = 0; t < this.attrs.length; t += 2) {
            let s = this.escapeAttribute(this.attrs[t]), r = this.attrs[t + 1];
            e += `[${s}${r ? "=" + r : ""}]`;
        } return this.notSelectors.forEach(t => e += `:not(${t})`), e; }
}, yr = class n {
    static createNotMatcher(e) { let t = new n; return t.addSelectables(e, null), t; }
    _elementMap = new Map;
    _elementPartialMap = new Map;
    _classMap = new Map;
    _classPartialMap = new Map;
    _attrValueMap = new Map;
    _attrValuePartialMap = new Map;
    _listContexts = [];
    addSelectables(e, t) { let s = null; e.length > 1 && (s = new Ro(e), this._listContexts.push(s)); for (let r = 0; r < e.length; r++)
        this._addSelectable(e[r], t, s); }
    _addSelectable(e, t, s) { let r = this, i = e.element, a = e.classNames, o = e.attrs, l = new Fo(e, t, s); if (i && (o.length === 0 && a.length === 0 ? this._addTerminal(r._elementMap, i, l) : r = this._addPartial(r._elementPartialMap, i)), a)
        for (let c = 0; c < a.length; c++) {
            let h = o.length === 0 && c === a.length - 1, p = a[c];
            h ? this._addTerminal(r._classMap, p, l) : r = this._addPartial(r._classPartialMap, p);
        } if (o)
        for (let c = 0; c < o.length; c += 2) {
            let h = c === o.length - 2, p = o[c], g = o[c + 1];
            if (h) {
                let v = r._attrValueMap, E = v.get(p);
                E || (E = new Map, v.set(p, E)), this._addTerminal(E, g, l);
            }
            else {
                let v = r._attrValuePartialMap, E = v.get(p);
                E || (E = new Map, v.set(p, E)), r = this._addPartial(E, g);
            }
        } }
    _addTerminal(e, t, s) { let r = e.get(t); r || (r = [], e.set(t, r)), r.push(s); }
    _addPartial(e, t) { let s = e.get(t); return s || (s = new n, e.set(t, s)), s; }
    match(e, t) { let s = !1, r = e.element, i = e.classNames, a = e.attrs; for (let o = 0; o < this._listContexts.length; o++)
        this._listContexts[o].alreadyMatched = !1; if (s = this._matchTerminal(this._elementMap, r, e, t) || s, s = this._matchPartial(this._elementPartialMap, r, e, t) || s, i)
        for (let o = 0; o < i.length; o++) {
            let l = i[o];
            s = this._matchTerminal(this._classMap, l, e, t) || s, s = this._matchPartial(this._classPartialMap, l, e, t) || s;
        } if (a)
        for (let o = 0; o < a.length; o += 2) {
            let l = a[o], c = a[o + 1], h = this._attrValueMap.get(l);
            c && (s = this._matchTerminal(h, "", e, t) || s), s = this._matchTerminal(h, c, e, t) || s;
            let p = this._attrValuePartialMap.get(l);
            c && (s = this._matchPartial(p, "", e, t) || s), s = this._matchPartial(p, c, e, t) || s;
        } return s; }
    _matchTerminal(e, t, s, r) { if (!e || typeof t != "string")
        return !1; let i = e.get(t) || [], a = e.get("*"); if (a && (i = i.concat(a)), i.length === 0)
        return !1; let o, l = !1; for (let c = 0; c < i.length; c++)
        o = i[c], l = o.finalize(s, r) || l; return l; }
    _matchPartial(e, t, s, r) { if (!e || typeof t != "string")
        return !1; let i = e.get(t); return i ? i.match(s, r) : !1; }
}, Ro = class {
    selectors;
    alreadyMatched = !1;
    constructor(e) { this.selectors = e; }
}, Fo = class {
    selector;
    cbContext;
    listContext;
    notSelectors;
    constructor(e, t, s) { this.selector = e, this.cbContext = t, this.listContext = s, this.notSelectors = e.notSelectors; }
    finalize(e, t) { let s = !0; return this.notSelectors.length > 0 && (!this.listContext || !this.listContext.alreadyMatched) && (s = !yr.createNotMatcher(this.notSelectors).match(e, null)), s && t && (!this.listContext || !this.listContext.alreadyMatched) && (this.listContext && (this.listContext.alreadyMatched = !0), t(this.selector, this.cbContext)), s; }
}, zi = class {
    registry;
    constructor(e) { this.registry = e; }
    match(e) { return this.registry.has(e) ? this.registry.get(e) : []; }
}, md = !0, xt = (function (n) { return n[n.Emulated = 0] = "Emulated", n[n.None = 2] = "None", n[n.ShadowDom = 3] = "ShadowDom", n; })(xt || {}), Ei = (function (n) { return n[n.OnPush = 0] = "OnPush", n[n.Default = 1] = "Default", n; })(Ei || {}), Ss = (function (n) { return n[n.None = 0] = "None", n[n.SignalBased = 1] = "SignalBased", n[n.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", n; })(Ss || {}), $o = { name: "custom-elements" }, Oo = { name: "no-errors-schema" }, gd = Function, ne = (function (n) { return n[n.NONE = 0] = "NONE", n[n.HTML = 1] = "HTML", n[n.STYLE = 2] = "STYLE", n[n.SCRIPT = 3] = "SCRIPT", n[n.URL = 4] = "URL", n[n.RESOURCE_URL = 5] = "RESOURCE_URL", n; })(ne || {}), Ns = (function (n) { return n[n.Error = 0] = "Error", n[n.Warning = 1] = "Warning", n[n.Ignore = 2] = "Ignore", n; })(Ns || {});
function vd(n) { let e = n.classNames && n.classNames.length ? [8, ...n.classNames] : []; return [n.element && n.element !== "*" ? n.element : "", ...n.attrs, ...e]; }
function wd(n) { let e = n.classNames && n.classNames.length ? [8, ...n.classNames] : []; return n.element ? [5, n.element, ...n.attrs, ...e] : n.attrs.length ? [3, ...n.attrs, ...e] : n.classNames && n.classNames.length ? [9, ...n.classNames] : []; }
function Ed(n) { let e = vd(n), t = n.notSelectors && n.notSelectors.length ? n.notSelectors.map(s => wd(s)) : []; return e.concat(...t); }
function so(n) { return n ? Jn.parse(n).map(Ed) : []; }
var TA = Object.freeze({ __proto__: null, CUSTOM_ELEMENTS_SCHEMA: $o, get ChangeDetectionStrategy() { return Ei; }, get InputFlags() { return Ss; }, get MissingTranslationStrategy() { return Ns; }, NO_ERRORS_SCHEMA: Oo, get SecurityContext() { return ne; }, Type: gd, get ViewEncapsulation() { return xt; }, emitDistinctChangesOnlyDefaultValue: md, parseSelectorToR3Selector: so }), Bt = (function (n) { return n[n.Directive = 0] = "Directive", n[n.Component = 1] = "Component", n[n.Injectable = 2] = "Injectable", n[n.Pipe = 3] = "Pipe", n[n.NgModule = 4] = "NgModule", n; })(Bt || {});
var Gi;
function np(n) { return n.id || sp(n); }
function sp(n) { return yd(xd(n.nodes).join("") + `[${n.meaning}]`); }
function Tc(n) { return n.id || rp(n); }
function rp(n) { let e = new Vo, t = n.nodes.map(s => s.visit(e, null)); return ip(t.join(""), n.meaning); }
var Xi = class {
    visitText(e, t) { return e.value; }
    visitContainer(e, t) { return `[${e.children.map(s => s.visit(this)).join(", ")}]`; }
    visitIcu(e, t) { let s = Object.keys(e.cases).map(r => `${r} {${e.cases[r].visit(this)}}`); return `{${e.expression}, ${e.type}, ${s.join(", ")}}`; }
    visitTagPlaceholder(e, t) { return e.isVoid ? `<ph tag name="${e.startName}"/>` : `<ph tag name="${e.startName}">${e.children.map(s => s.visit(this)).join(", ")}</ph name="${e.closeName}">`; }
    visitPlaceholder(e, t) { return e.value ? `<ph name="${e.name}">${e.value}</ph>` : `<ph name="${e.name}"/>`; }
    visitIcuPlaceholder(e, t) { return `<ph icu name="${e.name}">${e.value.visit(this)}</ph>`; }
    visitBlockPlaceholder(e, t) { return `<ph block name="${e.startName}">${e.children.map(s => s.visit(this)).join(", ")}</ph name="${e.closeName}">`; }
}, Sd = new Xi;
function xd(n) { return n.map(e => e.visit(Sd, null)); }
var Vo = class extends Xi {
    visitIcu(e) { let t = Object.keys(e.cases).map(s => `${s} {${e.cases[s].visit(this)}}`); return `{${e.type}, ${t.join(", ")}}`; }
};
function yd(n) { Gi ??= new TextEncoder; let e = [...Gi.encode(n)], t = _d(e, bc.Big), s = e.length * 8, r = new Uint32Array(80), i = 1732584193, a = 4023233417, o = 2562383102, l = 271733878, c = 3285377520; t[s >> 5] |= 128 << 24 - s % 32, t[(s + 64 >> 9 << 4) + 15] = s; for (let h = 0; h < t.length; h += 16) {
    let p = i, g = a, v = o, E = l, C = c;
    for (let b = 0; b < 80; b++) {
        b < 16 ? r[b] = t[h + b] : r[b] = mo(r[b - 3] ^ r[b - 8] ^ r[b - 14] ^ r[b - 16], 1);
        let A = Cd(b, a, o, l), F = A[0], ee = A[1], V = [mo(i, 5), F, c, ee, r[b]].reduce(ps);
        c = l, l = o, o = mo(a, 30), a = i, i = V;
    }
    i = ps(i, p), a = ps(a, g), o = ps(o, v), l = ps(l, E), c = ps(c, C);
} return ir(i) + ir(a) + ir(o) + ir(l) + ir(c); }
function ir(n) { return (n >>> 0).toString(16).padStart(8, "0"); }
function Cd(n, e, t, s) { return n < 20 ? [e & t | ~e & s, 1518500249] : n < 40 ? [e ^ t ^ s, 1859775393] : n < 60 ? [e & t | e & s | t & s, 2400959708] : [e ^ t ^ s, 3395469782]; }
function nu(n) { Gi ??= new TextEncoder; let e = Gi.encode(n), t = new DataView(e.buffer, e.byteOffset, e.byteLength), s = su(t, e.length, 0), r = su(t, e.length, 102072); return s == 0 && (r == 0 || r == 1) && (s = s ^ 319790063, r = r ^ -1801410264), BigInt.asUintN(32, BigInt(s)) << BigInt(32) | BigInt.asUintN(32, BigInt(r)); }
function ip(n, e = "") { let t = nu(n); return e && (t = BigInt.asUintN(64, t << BigInt(1)) | t >> BigInt(63) & BigInt(1), t += nu(e)), BigInt.asUintN(63, t).toString(); }
function su(n, e, t) { let s = 2654435769, r = 2654435769, i = 0, a = e - 12; for (; i <= a; i += 12) {
    s += n.getUint32(i, !0), r += n.getUint32(i + 4, !0), t += n.getUint32(i + 8, !0);
    let l = ru(s, r, t);
    s = l[0], r = l[1], t = l[2];
} let o = e - i; return t += e, o >= 4 ? (s += n.getUint32(i, !0), i += 4, o >= 8 ? (r += n.getUint32(i, !0), i += 4, o >= 9 && (t += n.getUint8(i++) << 8), o >= 10 && (t += n.getUint8(i++) << 16), o === 11 && (t += n.getUint8(i++) << 24)) : (o >= 5 && (r += n.getUint8(i++)), o >= 6 && (r += n.getUint8(i++) << 8), o === 7 && (r += n.getUint8(i++) << 16))) : (o >= 1 && (s += n.getUint8(i++)), o >= 2 && (s += n.getUint8(i++) << 8), o === 3 && (s += n.getUint8(i++) << 16)), ru(s, r, t)[2]; }
function ru(n, e, t) { return n -= e, n -= t, n ^= t >>> 13, e -= t, e -= n, e ^= n << 8, t -= n, t -= e, t ^= e >>> 13, n -= e, n -= t, n ^= t >>> 12, e -= t, e -= n, e ^= n << 16, t -= n, t -= e, t ^= e >>> 5, n -= e, n -= t, n ^= t >>> 3, e -= t, e -= n, e ^= n << 10, t -= n, t -= e, t ^= e >>> 15, [n, e, t]; }
var bc = (function (n) { return n[n.Little = 0] = "Little", n[n.Big = 1] = "Big", n; })(bc || {});
function ps(n, e) { return Ad(n, e)[1]; }
function Ad(n, e) { let t = (n & 65535) + (e & 65535), s = (n >>> 16) + (e >>> 16) + (t >>> 16); return [s >>> 16, s << 16 | t & 65535]; }
function mo(n, e) { return n << e | n >>> 32 - e; }
function _d(n, e) { let t = n.length + 3 >>> 2, s = []; for (let r = 0; r < t; r++)
    s[r] = kd(n, r * 4, e); return s; }
function iu(n, e) { return e >= n.length ? 0 : n[e]; }
function kd(n, e, t) { let s = 0; if (t === bc.Big)
    for (let r = 0; r < 4; r++)
        s += iu(n, e + r) << 24 - 8 * r;
else
    for (let r = 0; r < 4; r++)
        s += iu(n, e + r) << 8 * r; return s; }
var Ic = (function (n) { return n[n.None = 0] = "None", n[n.Const = 1] = "Const", n; })(Ic || {}), Sn = class {
    modifiers;
    constructor(e = Ic.None) { this.modifiers = e; }
    hasModifier(e) { return (this.modifiers & e) !== 0; }
}, jt = (function (n) { return n[n.Dynamic = 0] = "Dynamic", n[n.Bool = 1] = "Bool", n[n.String = 2] = "String", n[n.Int = 3] = "Int", n[n.Number = 4] = "Number", n[n.Function = 5] = "Function", n[n.Inferred = 6] = "Inferred", n[n.None = 7] = "None", n; })(jt || {}), _t = class extends Sn {
    name;
    constructor(e, t) { super(t), this.name = e; }
    visitType(e, t) { return e.visitBuiltinType(this, t); }
}, Je = class extends Sn {
    value;
    typeParams;
    constructor(e, t, s = null) { super(t), this.value = e, this.typeParams = s; }
    visitType(e, t) { return e.visitExpressionType(this, t); }
}, qo = class extends Sn {
    of;
    constructor(e, t) { super(t), this.of = e; }
    visitType(e, t) { return e.visitArrayType(this, t); }
}, Uo = class extends Sn {
    valueType;
    constructor(e, t) { super(t), this.valueType = e || null; }
    visitType(e, t) { return e.visitMapType(this, t); }
}, Yi = class extends Sn {
    type;
    constructor(e, t) { super(t), this.type = e; }
    visitType(e, t) { return e.visitTransplantedType(this, t); }
}, He = new _t(jt.Dynamic), qe = new _t(jt.Inferred), ap = new _t(jt.Bool), Td = new _t(jt.Int), ro = new _t(jt.Number), io = new _t(jt.String), bd = new _t(jt.Function), kt = new _t(jt.None), Ds = (function (n) { return n[n.Minus = 0] = "Minus", n[n.Plus = 1] = "Plus", n; })(Ds || {}), x = (function (n) { return n[n.Equals = 0] = "Equals", n[n.NotEquals = 1] = "NotEquals", n[n.Assign = 2] = "Assign", n[n.Identical = 3] = "Identical", n[n.NotIdentical = 4] = "NotIdentical", n[n.Minus = 5] = "Minus", n[n.Plus = 6] = "Plus", n[n.Divide = 7] = "Divide", n[n.Multiply = 8] = "Multiply", n[n.Modulo = 9] = "Modulo", n[n.And = 10] = "And", n[n.Or = 11] = "Or", n[n.BitwiseOr = 12] = "BitwiseOr", n[n.BitwiseAnd = 13] = "BitwiseAnd", n[n.Lower = 14] = "Lower", n[n.LowerEquals = 15] = "LowerEquals", n[n.Bigger = 16] = "Bigger", n[n.BiggerEquals = 17] = "BiggerEquals", n[n.NullishCoalesce = 18] = "NullishCoalesce", n[n.Exponentiation = 19] = "Exponentiation", n[n.In = 20] = "In", n[n.AdditionAssignment = 21] = "AdditionAssignment", n[n.SubtractionAssignment = 22] = "SubtractionAssignment", n[n.MultiplicationAssignment = 23] = "MultiplicationAssignment", n[n.DivisionAssignment = 24] = "DivisionAssignment", n[n.RemainderAssignment = 25] = "RemainderAssignment", n[n.ExponentiationAssignment = 26] = "ExponentiationAssignment", n[n.AndAssignment = 27] = "AndAssignment", n[n.OrAssignment = 28] = "OrAssignment", n[n.NullishCoalesceAssignment = 29] = "NullishCoalesceAssignment", n; })(x || {});
function op(n, e) { return n == null || e == null ? n == e : n.isEquivalent(e); }
function lp(n, e, t) { let s = n.length; if (s !== e.length)
    return !1; for (let r = 0; r < s; r++)
    if (!t(n[r], e[r]))
        return !1; return !0; }
function Re(n, e) { return lp(n, e, (t, s) => t.isEquivalent(s)); }
var Y = class {
    type;
    sourceSpan;
    constructor(e, t) { this.type = e || null, this.sourceSpan = t || null; }
    prop(e, t) { return new We(this, e, null, t); }
    key(e, t, s) { return new Ft(this, e, t, s); }
    callFn(e, t, s) { return new Fe(this, e, null, t, s); }
    instantiate(e, t, s) { return new Ls(this, e, t, s); }
    conditional(e, t = null, s) { return new Tt(this, e, t, null, s); }
    equals(e, t) { return new W(x.Equals, this, e, null, t); }
    notEquals(e, t) { return new W(x.NotEquals, this, e, null, t); }
    identical(e, t) { return new W(x.Identical, this, e, null, t); }
    notIdentical(e, t) { return new W(x.NotIdentical, this, e, null, t); }
    minus(e, t) { return new W(x.Minus, this, e, null, t); }
    plus(e, t) { return new W(x.Plus, this, e, null, t); }
    divide(e, t) { return new W(x.Divide, this, e, null, t); }
    multiply(e, t) { return new W(x.Multiply, this, e, null, t); }
    modulo(e, t) { return new W(x.Modulo, this, e, null, t); }
    power(e, t) { return new W(x.Exponentiation, this, e, null, t); }
    and(e, t) { return new W(x.And, this, e, null, t); }
    bitwiseOr(e, t) { return new W(x.BitwiseOr, this, e, null, t); }
    bitwiseAnd(e, t) { return new W(x.BitwiseAnd, this, e, null, t); }
    or(e, t) { return new W(x.Or, this, e, null, t); }
    lower(e, t) { return new W(x.Lower, this, e, null, t); }
    lowerEquals(e, t) { return new W(x.LowerEquals, this, e, null, t); }
    bigger(e, t) { return new W(x.Bigger, this, e, null, t); }
    biggerEquals(e, t) { return new W(x.BiggerEquals, this, e, null, t); }
    isBlank(e) { return this.equals(cp, e); }
    nullishCoalesce(e, t) { return new W(x.NullishCoalesce, this, e, null, t); }
    toStmt() { return new nt(this, null); }
}, tt = class n extends Y {
    name;
    constructor(e, t, s) { super(t, s), this.name = e; }
    isEquivalent(e) { return e instanceof n && this.name === e.name; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitReadVarExpr(this, t); }
    clone() { return new n(this.name, this.type, this.sourceSpan); }
    set(e) { return new W(x.Assign, this, e, null, this.sourceSpan); }
}, Kn = class n extends Y {
    expr;
    constructor(e, t, s) { super(t, s), this.expr = e; }
    visitExpression(e, t) { return e.visitTypeofExpr(this, t); }
    isEquivalent(e) { return e instanceof n && e.expr.isEquivalent(this.expr); }
    isConstant() { return this.expr.isConstant(); }
    clone() { return new n(this.expr.clone()); }
}, Cr = class n extends Y {
    expr;
    constructor(e, t, s) { super(t, s), this.expr = e; }
    visitExpression(e, t) { return e.visitVoidExpr(this, t); }
    isEquivalent(e) { return e instanceof n && e.expr.isEquivalent(this.expr); }
    isConstant() { return this.expr.isConstant(); }
    clone() { return new n(this.expr.clone()); }
}, H = class n extends Y {
    node;
    constructor(e, t, s) { super(t, s), this.node = e; }
    isEquivalent(e) { return e instanceof n && this.node === e.node; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitWrappedNodeExpr(this, t); }
    clone() { return new n(this.node, this.type, this.sourceSpan); }
}, Fe = class n extends Y {
    fn;
    args;
    pure;
    constructor(e, t, s, r, i = !1) { super(s, r), this.fn = e, this.args = t, this.pure = i; }
    get receiver() { return this.fn; }
    isEquivalent(e) { return e instanceof n && this.fn.isEquivalent(e.fn) && Re(this.args, e.args) && this.pure === e.pure; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitInvokeFunctionExpr(this, t); }
    clone() { return new n(this.fn.clone(), this.args.map(e => e.clone()), this.type, this.sourceSpan, this.pure); }
}, Ps = class n extends Y {
    tag;
    template;
    constructor(e, t, s, r) { super(s, r), this.tag = e, this.template = t; }
    isEquivalent(e) { return e instanceof n && this.tag.isEquivalent(e.tag) && this.template.isEquivalent(e.template); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitTaggedTemplateLiteralExpr(this, t); }
    clone() { return new n(this.tag.clone(), this.template.clone(), this.type, this.sourceSpan); }
}, Ls = class n extends Y {
    classExpr;
    args;
    constructor(e, t, s, r) { super(s, r), this.classExpr = e, this.args = t; }
    isEquivalent(e) { return e instanceof n && this.classExpr.isEquivalent(e.classExpr) && Re(this.args, e.args); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitInstantiateExpr(this, t); }
    clone() { return new n(this.classExpr.clone(), this.args.map(e => e.clone()), this.type, this.sourceSpan); }
}, Ee = class n extends Y {
    value;
    constructor(e, t, s) { super(t, s), this.value = e; }
    isEquivalent(e) { return e instanceof n && this.value === e.value; }
    isConstant() { return !0; }
    visitExpression(e, t) { return e.visitLiteralExpr(this, t); }
    clone() { return new n(this.value, this.type, this.sourceSpan); }
}, Bs = class n extends Y {
    elements;
    expressions;
    constructor(e, t, s) { super(null, s), this.elements = e, this.expressions = t; }
    isEquivalent(e) { return e instanceof n && lp(this.elements, e.elements, (t, s) => t.text === s.text) && Re(this.expressions, e.expressions); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitTemplateLiteralExpr(this, t); }
    clone() { return new n(this.elements.map(e => e.clone()), this.expressions.map(e => e.clone())); }
}, Ar = class n extends Y {
    text;
    rawText;
    constructor(e, t, s) { super(io, t), this.text = e, this.rawText = s ?? Ho(Oi(e)); }
    visitExpression(e, t) { return e.visitTemplateLiteralElementExpr(this, t); }
    isEquivalent(e) { return e instanceof n && e.text === this.text && e.rawText === this.rawText; }
    isConstant() { return !0; }
    clone() { return new n(this.text, this.sourceSpan, this.rawText); }
}, gn = class {
    text;
    sourceSpan;
    constructor(e, t) { this.text = e, this.sourceSpan = t; }
}, zn = class {
    text;
    sourceSpan;
    associatedMessage;
    constructor(e, t, s) { this.text = e, this.sourceSpan = t, this.associatedMessage = s; }
}, Id = "|", au = "@@", Nd = "\u241F", _r = class n extends Y {
    metaBlock;
    messageParts;
    placeHolderNames;
    expressions;
    constructor(e, t, s, r, i) { super(io, i), this.metaBlock = e, this.messageParts = t, this.placeHolderNames = s, this.expressions = r; }
    isEquivalent(e) { return !1; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitLocalizedString(this, t); }
    clone() { return new n(this.metaBlock, this.messageParts, this.placeHolderNames, this.expressions.map(e => e.clone()), this.sourceSpan); }
    serializeI18nHead() { let e = this.metaBlock.description || ""; return this.metaBlock.meaning && (e = `${this.metaBlock.meaning}${Id}${e}`), this.metaBlock.customId && (e = `${e}${au}${this.metaBlock.customId}`), this.metaBlock.legacyIds && this.metaBlock.legacyIds.forEach(t => { e = `${e}${Nd}${t}`; }), ou(e, this.messageParts[0].text, this.getMessagePartSourceSpan(0)); }
    getMessagePartSourceSpan(e) { return this.messageParts[e]?.sourceSpan ?? this.sourceSpan; }
    getPlaceholderSourceSpan(e) { return this.placeHolderNames[e]?.sourceSpan ?? this.expressions[e]?.sourceSpan ?? this.sourceSpan; }
    serializeI18nTemplatePart(e) { let t = this.placeHolderNames[e - 1], s = this.messageParts[e], r = t.text; return t.associatedMessage?.legacyIds.length === 0 && (r += `${au}${ip(t.associatedMessage.messageString, t.associatedMessage.meaning)}`), ou(r, s.text, this.getMessagePartSourceSpan(e)); }
}, Oi = n => n.replace(/\\/g, "\\\\"), Dd = n => n.replace(/^:/, "\\:"), Pd = n => n.replace(/:/g, "\\:"), Ho = n => n.replace(/`/g, "\\`").replace(/\${/g, "$\\{");
function ou(n, e, t) { return n === "" ? { cooked: e, raw: Ho(Dd(Oi(e))), range: t } : { cooked: `:${n}:${e}`, raw: Ho(`:${Pd(Oi(n))}:${Oi(e)}`), range: t }; }
var tn = class n extends Y {
    value;
    typeParams;
    constructor(e, t, s = null, r) { super(t, r), this.value = e, this.typeParams = s; }
    isEquivalent(e) { return e instanceof n && this.value.name === e.value.name && this.value.moduleName === e.value.moduleName; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitExternalExpr(this, t); }
    clone() { return new n(this.value, this.type, this.typeParams, this.sourceSpan); }
}, Wo = class {
    moduleName;
    name;
    constructor(e, t) { this.moduleName = e, this.name = t; }
}, Tt = class n extends Y {
    condition;
    falseCase;
    trueCase;
    constructor(e, t, s = null, r, i) { super(r || t.type, i), this.condition = e, this.falseCase = s, this.trueCase = t; }
    isEquivalent(e) { return e instanceof n && this.condition.isEquivalent(e.condition) && this.trueCase.isEquivalent(e.trueCase) && op(this.falseCase, e.falseCase); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitConditionalExpr(this, t); }
    clone() { return new n(this.condition.clone(), this.trueCase.clone(), this.falseCase?.clone(), this.type, this.sourceSpan); }
}, es = class n extends Y {
    url;
    urlComment;
    constructor(e, t, s) { super(null, t), this.url = e, this.urlComment = s; }
    isEquivalent(e) { return e instanceof n && this.url === e.url && this.urlComment === e.urlComment; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitDynamicImportExpr(this, t); }
    clone() { return new n(typeof this.url == "string" ? this.url : this.url.clone(), this.sourceSpan, this.urlComment); }
}, Ms = class n extends Y {
    condition;
    constructor(e, t) { super(ap, t), this.condition = e; }
    isEquivalent(e) { return e instanceof n && this.condition.isEquivalent(e.condition); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitNotExpr(this, t); }
    clone() { return new n(this.condition.clone(), this.sourceSpan); }
}, J = class n {
    name;
    type;
    constructor(e, t = null) { this.name = e, this.type = t; }
    isEquivalent(e) { return this.name === e.name; }
    clone() { return new n(this.name, this.type); }
}, Zt = class n extends Y {
    params;
    statements;
    name;
    constructor(e, t, s, r, i) { super(s, r), this.params = e, this.statements = t, this.name = i; }
    isEquivalent(e) { return (e instanceof n || e instanceof An) && Re(this.params, e.params) && Re(this.statements, e.statements); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitFunctionExpr(this, t); }
    toDeclStmt(e, t) { return new An(e, this.params, this.statements, this.type, t, this.sourceSpan); }
    clone() { return new n(this.params.map(e => e.clone()), this.statements, this.type, this.sourceSpan, this.name); }
}, xn = class n extends Y {
    params;
    body;
    constructor(e, t, s, r) { super(s, r), this.params = e, this.body = t; }
    isEquivalent(e) { return !(e instanceof n) || !Re(this.params, e.params) ? !1 : this.body instanceof Y && e.body instanceof Y ? this.body.isEquivalent(e.body) : Array.isArray(this.body) && Array.isArray(e.body) ? Re(this.body, e.body) : !1; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitArrowFunctionExpr(this, t); }
    clone() { return new n(this.params.map(e => e.clone()), Array.isArray(this.body) ? this.body : this.body.clone(), this.type, this.sourceSpan); }
    toDeclStmt(e, t) { return new ce(e, this, qe, t, this.sourceSpan); }
}, nn = class n extends Y {
    operator;
    expr;
    parens;
    constructor(e, t, s, r, i = !0) { super(s || ro, r), this.operator = e, this.expr = t, this.parens = i; }
    isEquivalent(e) { return e instanceof n && this.operator === e.operator && this.expr.isEquivalent(e.expr); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitUnaryOperatorExpr(this, t); }
    clone() { return new n(this.operator, this.expr.clone(), this.type, this.sourceSpan, this.parens); }
}, ft = class n extends Y {
    expr;
    constructor(e, t, s) { super(t, s), this.expr = e; }
    visitExpression(e, t) { return e.visitParenthesizedExpr(this, t); }
    isEquivalent(e) { return e instanceof n && e.expr.isEquivalent(this.expr); }
    isConstant() { return this.expr.isConstant(); }
    clone() { return new n(this.expr.clone()); }
}, W = class n extends Y {
    operator;
    rhs;
    lhs;
    constructor(e, t, s, r, i) { super(r || t.type, i), this.operator = e, this.rhs = s, this.lhs = t; }
    isEquivalent(e) { return e instanceof n && this.operator === e.operator && this.lhs.isEquivalent(e.lhs) && this.rhs.isEquivalent(e.rhs); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitBinaryOperatorExpr(this, t); }
    clone() { return new n(this.operator, this.lhs.clone(), this.rhs.clone(), this.type, this.sourceSpan); }
    isAssignment() { let e = this.operator; return e === x.Assign || e === x.AdditionAssignment || e === x.SubtractionAssignment || e === x.MultiplicationAssignment || e === x.DivisionAssignment || e === x.RemainderAssignment || e === x.ExponentiationAssignment || e === x.AndAssignment || e === x.OrAssignment || e === x.NullishCoalesceAssignment; }
}, We = class n extends Y {
    receiver;
    name;
    constructor(e, t, s, r) { super(s, r), this.receiver = e, this.name = t; }
    get index() { return this.name; }
    isEquivalent(e) { return e instanceof n && this.receiver.isEquivalent(e.receiver) && this.name === e.name; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitReadPropExpr(this, t); }
    set(e) { return new W(x.Assign, this.receiver.prop(this.name), e, null, this.sourceSpan); }
    clone() { return new n(this.receiver.clone(), this.name, this.type, this.sourceSpan); }
}, Ft = class n extends Y {
    receiver;
    index;
    constructor(e, t, s, r) { super(s, r), this.receiver = e, this.index = t; }
    isEquivalent(e) { return e instanceof n && this.receiver.isEquivalent(e.receiver) && this.index.isEquivalent(e.index); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitReadKeyExpr(this, t); }
    set(e) { return new W(x.Assign, this.receiver.key(this.index), e, null, this.sourceSpan); }
    clone() { return new n(this.receiver.clone(), this.index.clone(), this.type, this.sourceSpan); }
}, dt = class n extends Y {
    entries;
    constructor(e, t, s) { super(t, s), this.entries = e; }
    isConstant() { return this.entries.every(e => e.isConstant()); }
    isEquivalent(e) { return e instanceof n && Re(this.entries, e.entries); }
    visitExpression(e, t) { return e.visitLiteralArrayExpr(this, t); }
    clone() { return new n(this.entries.map(e => e.clone()), this.type, this.sourceSpan); }
}, ts = class n {
    key;
    value;
    quoted;
    constructor(e, t, s) { this.key = e, this.value = t, this.quoted = s; }
    isEquivalent(e) { return this.key === e.key && this.value.isEquivalent(e.value); }
    clone() { return new n(this.key, this.value.clone(), this.quoted); }
}, bt = class n extends Y {
    entries;
    valueType = null;
    constructor(e, t, s) { super(t, s), this.entries = e, t && (this.valueType = t.valueType); }
    isEquivalent(e) { return e instanceof n && Re(this.entries, e.entries); }
    isConstant() { return this.entries.every(e => e.value.isConstant()); }
    visitExpression(e, t) { return e.visitLiteralMapExpr(this, t); }
    clone() { let e = this.entries.map(t => t.clone()); return new n(e, this.type, this.sourceSpan); }
}, jo = class n extends Y {
    parts;
    constructor(e, t) { super(e[e.length - 1].type, t), this.parts = e; }
    isEquivalent(e) { return e instanceof n && Re(this.parts, e.parts); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitCommaExpr(this, t); }
    clone() { return new n(this.parts.map(e => e.clone())); }
}, yn = new Ee(null, null, null), cp = new Ee(null, qe, null), le = (function (n) { return n[n.None = 0] = "None", n[n.Final = 1] = "Final", n[n.Private = 2] = "Private", n[n.Exported = 4] = "Exported", n[n.Static = 8] = "Static", n; })(le || {}), kr = class {
    text;
    multiline;
    trailingNewline;
    constructor(e, t, s) { this.text = e, this.multiline = t, this.trailingNewline = s; }
    toString() { return this.multiline ? ` ${this.text} ` : this.text; }
}, Tr = class extends kr {
    tags;
    constructor(e) { super("", !0, !0), this.tags = e; }
    toString() { return Od(this.tags); }
}, Cn = class {
    modifiers;
    sourceSpan;
    leadingComments;
    constructor(e = le.None, t = null, s) { this.modifiers = e, this.sourceSpan = t, this.leadingComments = s; }
    hasModifier(e) { return (this.modifiers & e) !== 0; }
    addLeadingComment(e) { this.leadingComments = this.leadingComments ?? [], this.leadingComments.push(e); }
}, ce = class n extends Cn {
    name;
    value;
    type;
    constructor(e, t, s, r, i, a) { super(r, i, a), this.name = e, this.value = t, this.type = s || t && t.type || null; }
    isEquivalent(e) { return e instanceof n && this.name === e.name && (this.value ? !!e.value && this.value.isEquivalent(e.value) : !e.value); }
    visitStatement(e, t) { return e.visitDeclareVarStmt(this, t); }
}, An = class n extends Cn {
    name;
    params;
    statements;
    type;
    constructor(e, t, s, r, i, a, o) { super(i, a, o), this.name = e, this.params = t, this.statements = s, this.type = r || null; }
    isEquivalent(e) { return e instanceof n && Re(this.params, e.params) && Re(this.statements, e.statements); }
    visitStatement(e, t) { return e.visitDeclareFunctionStmt(this, t); }
}, nt = class n extends Cn {
    expr;
    constructor(e, t, s) { super(le.None, t, s), this.expr = e; }
    isEquivalent(e) { return e instanceof n && this.expr.isEquivalent(e.expr); }
    visitStatement(e, t) { return e.visitExpressionStmt(this, t); }
}, xe = class n extends Cn {
    value;
    constructor(e, t = null, s) { super(le.None, t, s), this.value = e; }
    isEquivalent(e) { return e instanceof n && this.value.isEquivalent(e.value); }
    visitStatement(e, t) { return e.visitReturnStmt(this, t); }
}, br = class n extends Cn {
    condition;
    trueCase;
    falseCase;
    constructor(e, t, s = [], r, i) { super(le.None, r, i), this.condition = e, this.trueCase = t, this.falseCase = s; }
    isEquivalent(e) { return e instanceof n && this.condition.isEquivalent(e.condition) && Re(this.trueCase, e.trueCase) && Re(this.falseCase, e.falseCase); }
    visitStatement(e, t) { return e.visitIfStmt(this, t); }
}, Ld = class {
    visitType(e, t) { return e; }
    visitExpression(e, t) { return e.type && e.type.visitType(this, t), e; }
    visitBuiltinType(e, t) { return this.visitType(e, t); }
    visitExpressionType(e, t) { return e.value.visitExpression(this, t), e.typeParams !== null && e.typeParams.forEach(s => this.visitType(s, t)), this.visitType(e, t); }
    visitArrayType(e, t) { return this.visitType(e, t); }
    visitMapType(e, t) { return this.visitType(e, t); }
    visitTransplantedType(e, t) { return e; }
    visitWrappedNodeExpr(e, t) { return e; }
    visitReadVarExpr(e, t) { return this.visitExpression(e, t); }
    visitDynamicImportExpr(e, t) { return this.visitExpression(e, t); }
    visitInvokeFunctionExpr(e, t) { return e.fn.visitExpression(this, t), this.visitAllExpressions(e.args, t), this.visitExpression(e, t); }
    visitTaggedTemplateLiteralExpr(e, t) { return e.tag.visitExpression(this, t), e.template.visitExpression(this, t), this.visitExpression(e, t); }
    visitInstantiateExpr(e, t) { return e.classExpr.visitExpression(this, t), this.visitAllExpressions(e.args, t), this.visitExpression(e, t); }
    visitLiteralExpr(e, t) { return this.visitExpression(e, t); }
    visitLocalizedString(e, t) { return this.visitExpression(e, t); }
    visitExternalExpr(e, t) { return e.typeParams && e.typeParams.forEach(s => s.visitType(this, t)), this.visitExpression(e, t); }
    visitConditionalExpr(e, t) { return e.condition.visitExpression(this, t), e.trueCase.visitExpression(this, t), e.falseCase.visitExpression(this, t), this.visitExpression(e, t); }
    visitNotExpr(e, t) { return e.condition.visitExpression(this, t), this.visitExpression(e, t); }
    visitFunctionExpr(e, t) { return this.visitAllStatements(e.statements, t), this.visitExpression(e, t); }
    visitArrowFunctionExpr(e, t) { return Array.isArray(e.body) ? this.visitAllStatements(e.body, t) : e.body.visitExpression(this, t), this.visitExpression(e, t); }
    visitUnaryOperatorExpr(e, t) { return e.expr.visitExpression(this, t), this.visitExpression(e, t); }
    visitTypeofExpr(e, t) { return e.expr.visitExpression(this, t), this.visitExpression(e, t); }
    visitVoidExpr(e, t) { return e.expr.visitExpression(this, t), this.visitExpression(e, t); }
    visitBinaryOperatorExpr(e, t) { return e.lhs.visitExpression(this, t), e.rhs.visitExpression(this, t), this.visitExpression(e, t); }
    visitReadPropExpr(e, t) { return e.receiver.visitExpression(this, t), this.visitExpression(e, t); }
    visitReadKeyExpr(e, t) { return e.receiver.visitExpression(this, t), e.index.visitExpression(this, t), this.visitExpression(e, t); }
    visitLiteralArrayExpr(e, t) { return this.visitAllExpressions(e.entries, t), this.visitExpression(e, t); }
    visitLiteralMapExpr(e, t) { return e.entries.forEach(s => s.value.visitExpression(this, t)), this.visitExpression(e, t); }
    visitCommaExpr(e, t) { return this.visitAllExpressions(e.parts, t), this.visitExpression(e, t); }
    visitTemplateLiteralExpr(e, t) { return this.visitAllExpressions(e.elements, t), this.visitAllExpressions(e.expressions, t), this.visitExpression(e, t); }
    visitTemplateLiteralElementExpr(e, t) { return this.visitExpression(e, t); }
    visitParenthesizedExpr(e, t) { return e.expr.visitExpression(this, t), this.visitExpression(e, t); }
    visitAllExpressions(e, t) { e.forEach(s => s.visitExpression(this, t)); }
    visitDeclareVarStmt(e, t) { return e.value && e.value.visitExpression(this, t), e.type && e.type.visitType(this, t), e; }
    visitDeclareFunctionStmt(e, t) { return this.visitAllStatements(e.statements, t), e.type && e.type.visitType(this, t), e; }
    visitExpressionStmt(e, t) { return e.expr.visitExpression(this, t), e; }
    visitReturnStmt(e, t) { return e.value.visitExpression(this, t), e; }
    visitIfStmt(e, t) { return e.condition.visitExpression(this, t), this.visitAllStatements(e.trueCase, t), this.visitAllStatements(e.falseCase, t), e; }
    visitAllStatements(e, t) { e.forEach(s => s.visitStatement(this, t)); }
};
function Bd(n, e = !1, t = !0) { return new kr(n, e, t); }
function up(n = []) { return new Tr(n); }
function D(n, e, t) { return new tt(n, e, t); }
function y(n, e = null, t) { return new tn(n, null, e, t); }
function Md(n, e, t) { return n != null ? we(y(n, e, null), t) : null; }
function we(n, e, t) { return new Je(n, e, t); }
function Rd(n, e) { return new Yi(n, e); }
function Js(n) { return new Kn(n); }
function R(n, e, t) { return new dt(n, e, t); }
function he(n, e = null) { return new bt(n.map(t => new ts(t.key, t.value, t.quoted)), e, null); }
function Fd(n, e, t, s) { return new nn(n, e, t, s); }
function hp(n, e) { return new Ms(n, e); }
function sn(n, e, t, s, r) { return new Zt(n, e, t, s, r); }
function ie(n, e, t, s) { return new xn(n, e, t, s); }
function Si(n, e, t, s, r) { return new br(n, e, t, s, r); }
function pp(n, e, t, s) { return new Ps(n, e, t, s); }
function d(n, e, t) { return new Ee(n, e, t); }
function fp(n, e, t, s, r) { return new _r(n, e, t, s, r); }
function $d(n) { return n instanceof Ee && n.value === null; }
function lu(n) { let e = ""; if (n.tagName && (e += ` @${n.tagName}`), n.text) {
    if (n.text.match(/\/\*|\*\//))
        throw new Error('JSDoc text cannot contain "/*" and "*/"');
    e += " " + n.text.replace(/@/g, "\\@");
} return e; }
function Od(n) {
    if (n.length === 0)
        return "";
    if (n.length === 1 && n[0].tagName && !n[0].text)
        return `*${lu(n[0])} `;
    let e = `*
`;
    for (let t of n)
        e += " *", e += lu(t).replace(/\n/g, `
 * `), e += `
`;
    return e += " ", e;
}
var IA = Object.freeze({ __proto__: null, ArrayType: qo, ArrowFunctionExpr: xn, BOOL_TYPE: ap, get BinaryOperator() { return x; }, BinaryOperatorExpr: W, BuiltinType: _t, get BuiltinTypeName() { return jt; }, CommaExpr: jo, ConditionalExpr: Tt, DYNAMIC_TYPE: He, DeclareFunctionStmt: An, DeclareVarStmt: ce, DynamicImportExpr: es, Expression: Y, ExpressionStatement: nt, ExpressionType: Je, ExternalExpr: tn, ExternalReference: Wo, FUNCTION_TYPE: bd, FnParam: J, FunctionExpr: Zt, INFERRED_TYPE: qe, INT_TYPE: Td, IfStmt: br, InstantiateExpr: Ls, InvokeFunctionExpr: Fe, JSDocComment: Tr, LeadingComment: kr, LiteralArrayExpr: dt, LiteralExpr: Ee, LiteralMapEntry: ts, LiteralMapExpr: bt, LiteralPiece: gn, LocalizedString: _r, MapType: Uo, NONE_TYPE: kt, NULL_EXPR: yn, NUMBER_TYPE: ro, NotExpr: Ms, ParenthesizedExpr: ft, PlaceholderPiece: zn, ReadKeyExpr: Ft, ReadPropExpr: We, ReadVarExpr: tt, RecursiveAstVisitor: Ld, ReturnStatement: xe, STRING_TYPE: io, Statement: Cn, get StmtModifier() { return le; }, TYPED_NULL_EXPR: cp, TaggedTemplateLiteralExpr: Ps, TemplateLiteralElementExpr: Ar, TemplateLiteralExpr: Bs, TransplantedType: Yi, Type: Sn, get TypeModifier() { return Ic; }, TypeofExpr: Kn, get UnaryOperator() { return Ds; }, UnaryOperatorExpr: nn, VoidExpr: Cr, WrappedNodeExpr: H, areAllEquivalent: Re, arrowFn: ie, expressionType: we, fn: sn, ifStmt: Si, importExpr: y, importType: Md, isNull: $d, jsDocComment: up, leadingComment: Bd, literal: d, literalArr: R, literalMap: he, localizedString: fp, not: hp, nullSafeIsEquivalent: op, taggedTemplate: pp, transplantedType: Rd, typeofExpr: Js, unary: Fd, variable: D }), Vd = "_c", cu = D("<unknown>"), qd = {}, Ud = 50, Qi = class n extends Y {
    resolved;
    original;
    shared = !1;
    constructor(e) { super(e.type), this.resolved = e, this.original = e; }
    visitExpression(e, t) { return t === qd ? this.original.visitExpression(e, t) : this.resolved.visitExpression(e, t); }
    isEquivalent(e) { return e instanceof n && this.resolved.isEquivalent(e.resolved); }
    isConstant() { return !0; }
    clone() { throw new Error("Not supported."); }
    fixup(e) { this.resolved = e, this.shared = !0; }
}, Zi = class {
    isClosureCompilerEnabled;
    statements = [];
    literals = new Map;
    literalFactories = new Map;
    sharedConstants = new Map;
    _claimedNames = new Map;
    nextNameIndex = 0;
    constructor(e = !1) { this.isClosureCompilerEnabled = e; }
    getConstLiteral(e, t) { if (e instanceof Ee && !uu(e) || e instanceof Qi)
        return e; let s = ks.INSTANCE.keyOf(e), r = this.literals.get(s), i = !1; if (r || (r = new Qi(e), this.literals.set(s, r), i = !0), !i && !r.shared || i && t) {
        let a = this.freshName(), o, l;
        this.isClosureCompilerEnabled && uu(e) ? (o = new Zt([], [new xe(e)]), l = D(a).callFn([])) : (o = e, l = D(a)), this.statements.push(new ce(a, o, qe, le.Final)), r.fixup(l);
    } return r; }
    getSharedConstant(e, t) { let s = e.keyOf(t); if (!this.sharedConstants.has(s)) {
        let r = this.freshName();
        this.sharedConstants.set(s, D(r)), this.statements.push(e.toSharedConstantDeclaration(r, t));
    } return this.sharedConstants.get(s); }
    getLiteralFactory(e) { if (e instanceof dt) {
        let t = e.entries.map(r => r.isConstant() ? r : cu), s = ks.INSTANCE.keyOf(R(t));
        return this._getLiteralFactory(s, e.entries, r => R(r));
    }
    else {
        let t = he(e.entries.map(r => ({ key: r.key, value: r.value.isConstant() ? r.value : cu, quoted: r.quoted }))), s = ks.INSTANCE.keyOf(t);
        return this._getLiteralFactory(s, e.entries.map(r => r.value), r => he(r.map((i, a) => ({ key: e.entries[a].key, value: i, quoted: e.entries[a].quoted }))));
    } }
    getSharedFunctionReference(e, t, s = !0) { let r = e instanceof xn; for (let a of this.statements)
        if (r && a instanceof ce && a.value?.isEquivalent(e) || !r && a instanceof An && e instanceof Zt && e.isEquivalent(a))
            return D(a.name); let i = s ? this.uniqueName(t) : t; return this.statements.push(e instanceof Zt ? e.toDeclStmt(i, le.Final) : new ce(i, e, qe, le.Final, e.sourceSpan)), D(i); }
    _getLiteralFactory(e, t, s) { let r = this.literalFactories.get(e), i = t.filter(a => !a.isConstant()); if (!r) {
        let a = t.map((h, p) => h.isConstant() ? this.getConstLiteral(h, !0) : D(`a${p}`)), o = a.filter(Hd).map(h => new J(h.name, He)), l = ie(o, s(a), qe), c = this.freshName();
        this.statements.push(new ce(c, l, qe, le.Final)), r = D(c), this.literalFactories.set(e, r);
    } return { literalFactory: r, literalFactoryArguments: i }; }
    uniqueName(e, t = !0) { let s = this._claimedNames.get(e) ?? 0, r = s === 0 && !t ? `${e}` : `${e}${s}`; return this._claimedNames.set(e, s + 1), r; }
    freshName() { return this.uniqueName(Vd); }
}, ks = class n {
    static INSTANCE = new n;
    keyOf(e) { if (e instanceof Ee && typeof e.value == "string")
        return `"${e.value}"`; if (e instanceof Ee)
        return String(e.value); if (e instanceof dt) {
        let t = [];
        for (let s of e.entries)
            t.push(this.keyOf(s));
        return `[${t.join(",")}]`;
    }
    else if (e instanceof bt) {
        let t = [];
        for (let s of e.entries) {
            let r = s.key;
            s.quoted && (r = `"${r}"`), t.push(r + ":" + this.keyOf(s.value));
        }
        return `{${t.join(",")}}`;
    }
    else {
        if (e instanceof tn)
            return `import("${e.value.moduleName}", ${e.value.name})`;
        if (e instanceof tt)
            return `read(${e.name})`;
        if (e instanceof Kn)
            return `typeof(${this.keyOf(e.expr)})`;
        throw new Error(`${this.constructor.name} does not handle expressions of type ${e.constructor.name}`);
    } }
};
function Hd(n) { return n instanceof tt; }
function uu(n) { return n instanceof Ee && typeof n.value == "string" && n.value.length >= Ud; }
var m = "@angular/core", f = (() => { class n {
    static NEW_METHOD = "factory";
    static TRANSFORM_METHOD = "transform";
    static PATCH_DEPS = "patchedDeps";
    static core = { name: null, moduleName: m };
    static namespaceHTML = { name: "\u0275\u0275namespaceHTML", moduleName: m };
    static namespaceMathML = { name: "\u0275\u0275namespaceMathML", moduleName: m };
    static namespaceSVG = { name: "\u0275\u0275namespaceSVG", moduleName: m };
    static element = { name: "\u0275\u0275element", moduleName: m };
    static elementStart = { name: "\u0275\u0275elementStart", moduleName: m };
    static elementEnd = { name: "\u0275\u0275elementEnd", moduleName: m };
    static domElement = { name: "\u0275\u0275domElement", moduleName: m };
    static domElementStart = { name: "\u0275\u0275domElementStart", moduleName: m };
    static domElementEnd = { name: "\u0275\u0275domElementEnd", moduleName: m };
    static domElementContainer = { name: "\u0275\u0275domElementContainer", moduleName: m };
    static domElementContainerStart = { name: "\u0275\u0275domElementContainerStart", moduleName: m };
    static domElementContainerEnd = { name: "\u0275\u0275domElementContainerEnd", moduleName: m };
    static domTemplate = { name: "\u0275\u0275domTemplate", moduleName: m };
    static domListener = { name: "\u0275\u0275domListener", moduleName: m };
    static advance = { name: "\u0275\u0275advance", moduleName: m };
    static syntheticHostProperty = { name: "\u0275\u0275syntheticHostProperty", moduleName: m };
    static syntheticHostListener = { name: "\u0275\u0275syntheticHostListener", moduleName: m };
    static attribute = { name: "\u0275\u0275attribute", moduleName: m };
    static classProp = { name: "\u0275\u0275classProp", moduleName: m };
    static elementContainerStart = { name: "\u0275\u0275elementContainerStart", moduleName: m };
    static elementContainerEnd = { name: "\u0275\u0275elementContainerEnd", moduleName: m };
    static elementContainer = { name: "\u0275\u0275elementContainer", moduleName: m };
    static styleMap = { name: "\u0275\u0275styleMap", moduleName: m };
    static classMap = { name: "\u0275\u0275classMap", moduleName: m };
    static styleProp = { name: "\u0275\u0275styleProp", moduleName: m };
    static interpolate = { name: "\u0275\u0275interpolate", moduleName: m };
    static interpolate1 = { name: "\u0275\u0275interpolate1", moduleName: m };
    static interpolate2 = { name: "\u0275\u0275interpolate2", moduleName: m };
    static interpolate3 = { name: "\u0275\u0275interpolate3", moduleName: m };
    static interpolate4 = { name: "\u0275\u0275interpolate4", moduleName: m };
    static interpolate5 = { name: "\u0275\u0275interpolate5", moduleName: m };
    static interpolate6 = { name: "\u0275\u0275interpolate6", moduleName: m };
    static interpolate7 = { name: "\u0275\u0275interpolate7", moduleName: m };
    static interpolate8 = { name: "\u0275\u0275interpolate8", moduleName: m };
    static interpolateV = { name: "\u0275\u0275interpolateV", moduleName: m };
    static nextContext = { name: "\u0275\u0275nextContext", moduleName: m };
    static resetView = { name: "\u0275\u0275resetView", moduleName: m };
    static templateCreate = { name: "\u0275\u0275template", moduleName: m };
    static defer = { name: "\u0275\u0275defer", moduleName: m };
    static deferWhen = { name: "\u0275\u0275deferWhen", moduleName: m };
    static deferOnIdle = { name: "\u0275\u0275deferOnIdle", moduleName: m };
    static deferOnImmediate = { name: "\u0275\u0275deferOnImmediate", moduleName: m };
    static deferOnTimer = { name: "\u0275\u0275deferOnTimer", moduleName: m };
    static deferOnHover = { name: "\u0275\u0275deferOnHover", moduleName: m };
    static deferOnInteraction = { name: "\u0275\u0275deferOnInteraction", moduleName: m };
    static deferOnViewport = { name: "\u0275\u0275deferOnViewport", moduleName: m };
    static deferPrefetchWhen = { name: "\u0275\u0275deferPrefetchWhen", moduleName: m };
    static deferPrefetchOnIdle = { name: "\u0275\u0275deferPrefetchOnIdle", moduleName: m };
    static deferPrefetchOnImmediate = { name: "\u0275\u0275deferPrefetchOnImmediate", moduleName: m };
    static deferPrefetchOnTimer = { name: "\u0275\u0275deferPrefetchOnTimer", moduleName: m };
    static deferPrefetchOnHover = { name: "\u0275\u0275deferPrefetchOnHover", moduleName: m };
    static deferPrefetchOnInteraction = { name: "\u0275\u0275deferPrefetchOnInteraction", moduleName: m };
    static deferPrefetchOnViewport = { name: "\u0275\u0275deferPrefetchOnViewport", moduleName: m };
    static deferHydrateWhen = { name: "\u0275\u0275deferHydrateWhen", moduleName: m };
    static deferHydrateNever = { name: "\u0275\u0275deferHydrateNever", moduleName: m };
    static deferHydrateOnIdle = { name: "\u0275\u0275deferHydrateOnIdle", moduleName: m };
    static deferHydrateOnImmediate = { name: "\u0275\u0275deferHydrateOnImmediate", moduleName: m };
    static deferHydrateOnTimer = { name: "\u0275\u0275deferHydrateOnTimer", moduleName: m };
    static deferHydrateOnHover = { name: "\u0275\u0275deferHydrateOnHover", moduleName: m };
    static deferHydrateOnInteraction = { name: "\u0275\u0275deferHydrateOnInteraction", moduleName: m };
    static deferHydrateOnViewport = { name: "\u0275\u0275deferHydrateOnViewport", moduleName: m };
    static deferEnableTimerScheduling = { name: "\u0275\u0275deferEnableTimerScheduling", moduleName: m };
    static conditionalCreate = { name: "\u0275\u0275conditionalCreate", moduleName: m };
    static conditionalBranchCreate = { name: "\u0275\u0275conditionalBranchCreate", moduleName: m };
    static conditional = { name: "\u0275\u0275conditional", moduleName: m };
    static repeater = { name: "\u0275\u0275repeater", moduleName: m };
    static repeaterCreate = { name: "\u0275\u0275repeaterCreate", moduleName: m };
    static repeaterTrackByIndex = { name: "\u0275\u0275repeaterTrackByIndex", moduleName: m };
    static repeaterTrackByIdentity = { name: "\u0275\u0275repeaterTrackByIdentity", moduleName: m };
    static componentInstance = { name: "\u0275\u0275componentInstance", moduleName: m };
    static text = { name: "\u0275\u0275text", moduleName: m };
    static enableBindings = { name: "\u0275\u0275enableBindings", moduleName: m };
    static disableBindings = { name: "\u0275\u0275disableBindings", moduleName: m };
    static getCurrentView = { name: "\u0275\u0275getCurrentView", moduleName: m };
    static textInterpolate = { name: "\u0275\u0275textInterpolate", moduleName: m };
    static textInterpolate1 = { name: "\u0275\u0275textInterpolate1", moduleName: m };
    static textInterpolate2 = { name: "\u0275\u0275textInterpolate2", moduleName: m };
    static textInterpolate3 = { name: "\u0275\u0275textInterpolate3", moduleName: m };
    static textInterpolate4 = { name: "\u0275\u0275textInterpolate4", moduleName: m };
    static textInterpolate5 = { name: "\u0275\u0275textInterpolate5", moduleName: m };
    static textInterpolate6 = { name: "\u0275\u0275textInterpolate6", moduleName: m };
    static textInterpolate7 = { name: "\u0275\u0275textInterpolate7", moduleName: m };
    static textInterpolate8 = { name: "\u0275\u0275textInterpolate8", moduleName: m };
    static textInterpolateV = { name: "\u0275\u0275textInterpolateV", moduleName: m };
    static restoreView = { name: "\u0275\u0275restoreView", moduleName: m };
    static pureFunction0 = { name: "\u0275\u0275pureFunction0", moduleName: m };
    static pureFunction1 = { name: "\u0275\u0275pureFunction1", moduleName: m };
    static pureFunction2 = { name: "\u0275\u0275pureFunction2", moduleName: m };
    static pureFunction3 = { name: "\u0275\u0275pureFunction3", moduleName: m };
    static pureFunction4 = { name: "\u0275\u0275pureFunction4", moduleName: m };
    static pureFunction5 = { name: "\u0275\u0275pureFunction5", moduleName: m };
    static pureFunction6 = { name: "\u0275\u0275pureFunction6", moduleName: m };
    static pureFunction7 = { name: "\u0275\u0275pureFunction7", moduleName: m };
    static pureFunction8 = { name: "\u0275\u0275pureFunction8", moduleName: m };
    static pureFunctionV = { name: "\u0275\u0275pureFunctionV", moduleName: m };
    static pipeBind1 = { name: "\u0275\u0275pipeBind1", moduleName: m };
    static pipeBind2 = { name: "\u0275\u0275pipeBind2", moduleName: m };
    static pipeBind3 = { name: "\u0275\u0275pipeBind3", moduleName: m };
    static pipeBind4 = { name: "\u0275\u0275pipeBind4", moduleName: m };
    static pipeBindV = { name: "\u0275\u0275pipeBindV", moduleName: m };
    static domProperty = { name: "\u0275\u0275domProperty", moduleName: m };
    static ariaProperty = { name: "\u0275\u0275ariaProperty", moduleName: m };
    static property = { name: "\u0275\u0275property", moduleName: m };
    static animationEnterListener = { name: "\u0275\u0275animateEnterListener", moduleName: m };
    static animationLeaveListener = { name: "\u0275\u0275animateLeaveListener", moduleName: m };
    static animationEnter = { name: "\u0275\u0275animateEnter", moduleName: m };
    static animationLeave = { name: "\u0275\u0275animateLeave", moduleName: m };
    static i18n = { name: "\u0275\u0275i18n", moduleName: m };
    static i18nAttributes = { name: "\u0275\u0275i18nAttributes", moduleName: m };
    static i18nExp = { name: "\u0275\u0275i18nExp", moduleName: m };
    static i18nStart = { name: "\u0275\u0275i18nStart", moduleName: m };
    static i18nEnd = { name: "\u0275\u0275i18nEnd", moduleName: m };
    static i18nApply = { name: "\u0275\u0275i18nApply", moduleName: m };
    static i18nPostprocess = { name: "\u0275\u0275i18nPostprocess", moduleName: m };
    static pipe = { name: "\u0275\u0275pipe", moduleName: m };
    static projection = { name: "\u0275\u0275projection", moduleName: m };
    static projectionDef = { name: "\u0275\u0275projectionDef", moduleName: m };
    static reference = { name: "\u0275\u0275reference", moduleName: m };
    static inject = { name: "\u0275\u0275inject", moduleName: m };
    static injectAttribute = { name: "\u0275\u0275injectAttribute", moduleName: m };
    static directiveInject = { name: "\u0275\u0275directiveInject", moduleName: m };
    static invalidFactory = { name: "\u0275\u0275invalidFactory", moduleName: m };
    static invalidFactoryDep = { name: "\u0275\u0275invalidFactoryDep", moduleName: m };
    static templateRefExtractor = { name: "\u0275\u0275templateRefExtractor", moduleName: m };
    static forwardRef = { name: "forwardRef", moduleName: m };
    static resolveForwardRef = { name: "resolveForwardRef", moduleName: m };
    static replaceMetadata = { name: "\u0275\u0275replaceMetadata", moduleName: m };
    static getReplaceMetadataURL = { name: "\u0275\u0275getReplaceMetadataURL", moduleName: m };
    static \u0275\u0275defineInjectable = { name: "\u0275\u0275defineInjectable", moduleName: m };
    static declareInjectable = { name: "\u0275\u0275ngDeclareInjectable", moduleName: m };
    static InjectableDeclaration = { name: "\u0275\u0275InjectableDeclaration", moduleName: m };
    static resolveWindow = { name: "\u0275\u0275resolveWindow", moduleName: m };
    static resolveDocument = { name: "\u0275\u0275resolveDocument", moduleName: m };
    static resolveBody = { name: "\u0275\u0275resolveBody", moduleName: m };
    static getComponentDepsFactory = { name: "\u0275\u0275getComponentDepsFactory", moduleName: m };
    static defineComponent = { name: "\u0275\u0275defineComponent", moduleName: m };
    static declareComponent = { name: "\u0275\u0275ngDeclareComponent", moduleName: m };
    static setComponentScope = { name: "\u0275\u0275setComponentScope", moduleName: m };
    static ChangeDetectionStrategy = { name: "ChangeDetectionStrategy", moduleName: m };
    static ViewEncapsulation = { name: "ViewEncapsulation", moduleName: m };
    static ComponentDeclaration = { name: "\u0275\u0275ComponentDeclaration", moduleName: m };
    static FactoryDeclaration = { name: "\u0275\u0275FactoryDeclaration", moduleName: m };
    static declareFactory = { name: "\u0275\u0275ngDeclareFactory", moduleName: m };
    static FactoryTarget = { name: "\u0275\u0275FactoryTarget", moduleName: m };
    static defineDirective = { name: "\u0275\u0275defineDirective", moduleName: m };
    static declareDirective = { name: "\u0275\u0275ngDeclareDirective", moduleName: m };
    static DirectiveDeclaration = { name: "\u0275\u0275DirectiveDeclaration", moduleName: m };
    static InjectorDef = { name: "\u0275\u0275InjectorDef", moduleName: m };
    static InjectorDeclaration = { name: "\u0275\u0275InjectorDeclaration", moduleName: m };
    static defineInjector = { name: "\u0275\u0275defineInjector", moduleName: m };
    static declareInjector = { name: "\u0275\u0275ngDeclareInjector", moduleName: m };
    static NgModuleDeclaration = { name: "\u0275\u0275NgModuleDeclaration", moduleName: m };
    static ModuleWithProviders = { name: "ModuleWithProviders", moduleName: m };
    static defineNgModule = { name: "\u0275\u0275defineNgModule", moduleName: m };
    static declareNgModule = { name: "\u0275\u0275ngDeclareNgModule", moduleName: m };
    static setNgModuleScope = { name: "\u0275\u0275setNgModuleScope", moduleName: m };
    static registerNgModuleType = { name: "\u0275\u0275registerNgModuleType", moduleName: m };
    static PipeDeclaration = { name: "\u0275\u0275PipeDeclaration", moduleName: m };
    static definePipe = { name: "\u0275\u0275definePipe", moduleName: m };
    static declarePipe = { name: "\u0275\u0275ngDeclarePipe", moduleName: m };
    static declareClassMetadata = { name: "\u0275\u0275ngDeclareClassMetadata", moduleName: m };
    static declareClassMetadataAsync = { name: "\u0275\u0275ngDeclareClassMetadataAsync", moduleName: m };
    static setClassMetadata = { name: "\u0275setClassMetadata", moduleName: m };
    static setClassMetadataAsync = { name: "\u0275setClassMetadataAsync", moduleName: m };
    static setClassDebugInfo = { name: "\u0275setClassDebugInfo", moduleName: m };
    static queryRefresh = { name: "\u0275\u0275queryRefresh", moduleName: m };
    static viewQuery = { name: "\u0275\u0275viewQuery", moduleName: m };
    static loadQuery = { name: "\u0275\u0275loadQuery", moduleName: m };
    static contentQuery = { name: "\u0275\u0275contentQuery", moduleName: m };
    static viewQuerySignal = { name: "\u0275\u0275viewQuerySignal", moduleName: m };
    static contentQuerySignal = { name: "\u0275\u0275contentQuerySignal", moduleName: m };
    static queryAdvance = { name: "\u0275\u0275queryAdvance", moduleName: m };
    static twoWayProperty = { name: "\u0275\u0275twoWayProperty", moduleName: m };
    static twoWayBindingSet = { name: "\u0275\u0275twoWayBindingSet", moduleName: m };
    static twoWayListener = { name: "\u0275\u0275twoWayListener", moduleName: m };
    static declareLet = { name: "\u0275\u0275declareLet", moduleName: m };
    static storeLet = { name: "\u0275\u0275storeLet", moduleName: m };
    static readContextLet = { name: "\u0275\u0275readContextLet", moduleName: m };
    static attachSourceLocations = { name: "\u0275\u0275attachSourceLocations", moduleName: m };
    static NgOnChangesFeature = { name: "\u0275\u0275NgOnChangesFeature", moduleName: m };
    static InheritDefinitionFeature = { name: "\u0275\u0275InheritDefinitionFeature", moduleName: m };
    static CopyDefinitionFeature = { name: "\u0275\u0275CopyDefinitionFeature", moduleName: m };
    static ProvidersFeature = { name: "\u0275\u0275ProvidersFeature", moduleName: m };
    static HostDirectivesFeature = { name: "\u0275\u0275HostDirectivesFeature", moduleName: m };
    static ExternalStylesFeature = { name: "\u0275\u0275ExternalStylesFeature", moduleName: m };
    static listener = { name: "\u0275\u0275listener", moduleName: m };
    static getInheritedFactory = { name: "\u0275\u0275getInheritedFactory", moduleName: m };
    static sanitizeHtml = { name: "\u0275\u0275sanitizeHtml", moduleName: m };
    static sanitizeStyle = { name: "\u0275\u0275sanitizeStyle", moduleName: m };
    static sanitizeResourceUrl = { name: "\u0275\u0275sanitizeResourceUrl", moduleName: m };
    static sanitizeScript = { name: "\u0275\u0275sanitizeScript", moduleName: m };
    static sanitizeUrl = { name: "\u0275\u0275sanitizeUrl", moduleName: m };
    static sanitizeUrlOrResourceUrl = { name: "\u0275\u0275sanitizeUrlOrResourceUrl", moduleName: m };
    static trustConstantHtml = { name: "\u0275\u0275trustConstantHtml", moduleName: m };
    static trustConstantResourceUrl = { name: "\u0275\u0275trustConstantResourceUrl", moduleName: m };
    static validateIframeAttribute = { name: "\u0275\u0275validateIframeAttribute", moduleName: m };
    static inputDecorator = { name: "Input", moduleName: m };
    static outputDecorator = { name: "Output", moduleName: m };
    static viewChildDecorator = { name: "ViewChild", moduleName: m };
    static viewChildrenDecorator = { name: "ViewChildren", moduleName: m };
    static contentChildDecorator = { name: "ContentChild", moduleName: m };
    static contentChildrenDecorator = { name: "ContentChildren", moduleName: m };
    static InputSignalBrandWriteType = { name: "\u0275INPUT_SIGNAL_BRAND_WRITE_TYPE", moduleName: m };
    static UnwrapDirectiveSignalInputs = { name: "\u0275UnwrapDirectiveSignalInputs", moduleName: m };
    static unwrapWritableSignal = { name: "\u0275unwrapWritableSignal", moduleName: m };
    static assertType = { name: "\u0275assertType", moduleName: m };
} return n; })(), Wd = /-+([a-z0-9])/g;
function jd(n) { return n.replace(Wd, (...e) => e[1].toUpperCase()); }
function zd(n, e) { return dp(n, ":", e); }
function Gd(n, e) { return dp(n, ".", e); }
function dp(n, e, t) { let s = n.indexOf(e); return s == -1 ? t : [n.slice(0, s).trim(), n.slice(s + 1).trim()]; }
function Xd(n) { return n === void 0 ? null : n; }
function NA(n) { return n.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"); }
function Yd(n) { let e = []; for (let t = 0; t < n.length; t++) {
    let s = n.charCodeAt(t);
    if (s >= 55296 && s <= 56319 && n.length > t + 1) {
        let r = n.charCodeAt(t + 1);
        r >= 56320 && r <= 57343 && (t++, s = (s - 55296 << 10) + r - 56320 + 65536);
    }
    s <= 127 ? e.push(s) : s <= 2047 ? e.push(s >> 6 & 31 | 192, s & 63 | 128) : s <= 65535 ? e.push(s >> 12 | 224, s >> 6 & 63 | 128, s & 63 | 128) : s <= 2097151 && e.push(s >> 18 & 7 | 240, s >> 12 & 63 | 128, s >> 6 & 63 | 128, s & 63 | 128);
} return e; }
function mp(n) {
    if (typeof n == "string")
        return n;
    if (Array.isArray(n))
        return `[${n.map(mp).join(", ")}]`;
    if (n == null)
        return "" + n;
    let e = n.overriddenName || n.name;
    if (e)
        return `${e}`;
    if (!n.toString)
        return "object";
    let t = n.toString();
    if (t == null)
        return "" + t;
    let s = t.indexOf(`
`);
    return s >= 0 ? t.slice(0, s) : t;
}
var zo = class {
    full;
    major;
    minor;
    patch;
    constructor(e) { this.full = e; let t = e.split("."); this.major = t[0], this.minor = t[1], this.patch = t.slice(2).join("."); }
}, Vi = globalThis, Qd = /^([1-9]|1[0-8])\./;
function gp(n) { return n.startsWith("0.") ? !0 : !Qd.test(n); }
var Zd = 3, Jd = "# sourceMappingURL=data:application/json;base64,", Go = class {
    file;
    sourcesContent = new Map;
    lines = [];
    lastCol0 = 0;
    hasMappings = !1;
    constructor(e = null) { this.file = e; }
    addSource(e, t = null) { return this.sourcesContent.has(e) || this.sourcesContent.set(e, t), this; }
    addLine() { return this.lines.push([]), this.lastCol0 = 0, this; }
    addMapping(e, t, s, r) { if (!this.currentLine)
        throw new Error("A line must be added before mappings can be added"); if (t != null && !this.sourcesContent.has(t))
        throw new Error(`Unknown source file "${t}"`); if (e == null)
        throw new Error("The column in the generated code must be provided"); if (e < this.lastCol0)
        throw new Error("Mapping should be added in output order"); if (t && (s == null || r == null))
        throw new Error("The source location must be provided when a source url is provided"); return this.hasMappings = !0, this.lastCol0 = e, this.currentLine.push({ col0: e, sourceUrl: t, sourceLine0: s, sourceCol0: r }), this; }
    get currentLine() { return this.lines.slice(-1)[0]; }
    toJSON() { if (!this.hasMappings)
        return null; let e = new Map, t = [], s = []; Array.from(this.sourcesContent.keys()).forEach((c, h) => { e.set(c, h), t.push(c), s.push(this.sourcesContent.get(c) || null); }); let r = "", i = 0, a = 0, o = 0, l = 0; return this.lines.forEach(c => { i = 0, r += c.map(h => { let p = Ai(h.col0 - i); return i = h.col0, h.sourceUrl != null && (p += Ai(e.get(h.sourceUrl) - a), a = e.get(h.sourceUrl), p += Ai(h.sourceLine0 - o), o = h.sourceLine0, p += Ai(h.sourceCol0 - l), l = h.sourceCol0), p; }).join(","), r += ";"; }), r = r.slice(0, -1), { file: this.file || "", version: Zd, sourceRoot: "", sources: t, sourcesContent: s, mappings: r }; }
    toJsComment() { return this.hasMappings ? "//" + Jd + Kd(JSON.stringify(this, null, 0)) : ""; }
};
function Kd(n) { let e = "", t = Yd(n); for (let s = 0; s < t.length;) {
    let r = t[s++], i = s < t.length ? t[s++] : null, a = s < t.length ? t[s++] : null;
    e += hr(r >> 2), e += hr((r & 3) << 4 | (i === null ? 0 : i >> 4)), e += i === null ? "=" : hr((i & 15) << 2 | (a === null ? 0 : a >> 6)), e += i === null || a === null ? "=" : hr(a & 63);
} return e; }
function Ai(n) { n = n < 0 ? (-n << 1) + 1 : n << 1; let e = ""; do {
    let t = n & 31;
    n = n >> 5, n > 0 && (t = t | 32), e += hr(t);
} while (n > 0); return e; }
var em = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function hr(n) { if (n < 0 || n >= 64)
    throw new Error("Can only encode value in the range [0, 63]"); return em[n]; }
var tm = /'|\\|\n|\r|\$/g, nm = /^[$A-Z_][0-9A-Z_$]*$/i, Xo = "  ", Ji = class {
    indent;
    partsLength = 0;
    parts = [];
    srcSpans = [];
    constructor(e) { this.indent = e; }
}, sm = new Map([[x.And, "&&"], [x.Bigger, ">"], [x.BiggerEquals, ">="], [x.BitwiseOr, "|"], [x.BitwiseAnd, "&"], [x.Divide, "/"], [x.Assign, "="], [x.Equals, "=="], [x.Identical, "==="], [x.Lower, "<"], [x.LowerEquals, "<="], [x.Minus, "-"], [x.Modulo, "%"], [x.Exponentiation, "**"], [x.Multiply, "*"], [x.NotEquals, "!="], [x.NotIdentical, "!=="], [x.NullishCoalesce, "??"], [x.Or, "||"], [x.Plus, "+"], [x.In, "in"], [x.AdditionAssignment, "+="], [x.SubtractionAssignment, "-="], [x.MultiplicationAssignment, "*="], [x.DivisionAssignment, "/="], [x.RemainderAssignment, "%="], [x.ExponentiationAssignment, "**="], [x.AndAssignment, "&&="], [x.OrAssignment, "||="], [x.NullishCoalesceAssignment, "??="]]), Yo = class n {
    _indent;
    static createRoot() { return new n(0); }
    _lines;
    constructor(e) { this._indent = e, this._lines = [new Ji(e)]; }
    get _currentLine() { return this._lines[this._lines.length - 1]; }
    println(e, t = "") { this.print(e || null, t, !0); }
    lineIsEmpty() { return this._currentLine.parts.length === 0; }
    lineLength() { return this._currentLine.indent * Xo.length + this._currentLine.partsLength; }
    print(e, t, s = !1) { t.length > 0 && (this._currentLine.parts.push(t), this._currentLine.partsLength += t.length, this._currentLine.srcSpans.push(e && e.sourceSpan || null)), s && this._lines.push(new Ji(this._indent)); }
    removeEmptyLastLine() { this.lineIsEmpty() && this._lines.pop(); }
    incIndent() { this._indent++, this.lineIsEmpty() && (this._currentLine.indent = this._indent); }
    decIndent() { this._indent--, this.lineIsEmpty() && (this._currentLine.indent = this._indent); }
    toSource() {
        return this.sourceLines.map(e => e.parts.length > 0 ? hu(e.indent) + e.parts.join("") : "").join(`
`);
    }
    toSourceMapGenerator(e, t = 0) { let s = new Go(e), r = !1, i = () => { r || (s.addSource(e, " ").addMapping(0, e, 0, 0), r = !0); }; for (let a = 0; a < t; a++)
        s.addLine(), i(); return this.sourceLines.forEach((a, o) => { s.addLine(); let l = a.srcSpans, c = a.parts, h = a.indent * Xo.length, p = 0; for (; p < l.length && !l[p];)
        h += c[p].length, p++; for (p < l.length && o === 0 && h === 0 ? r = !0 : i(); p < l.length;) {
        let g = l[p], v = g.start.file, E = g.start.line, C = g.start.col;
        for (s.addSource(v.url, v.content).addMapping(h, v.url, E, C), h += c[p].length, p++; p < l.length && (g === l[p] || !l[p]);)
            h += c[p].length, p++;
    } }), s; }
    spanOf(e, t) { let s = this._lines[e]; if (s) {
        let r = t - hu(s.indent).length;
        for (let i = 0; i < s.parts.length; i++) {
            let a = s.parts[i];
            if (a.length > r)
                return s.srcSpans[i];
            r -= a.length;
        }
    } return null; }
    get sourceLines() { return this._lines.length && this._lines[this._lines.length - 1].parts.length === 0 ? this._lines.slice(0, -1) : this._lines; }
}, Qo = class {
    _escapeDollarInStrings;
    lastIfCondition = null;
    constructor(e) { this._escapeDollarInStrings = e; }
    printLeadingComments(e, t) {
        if (e.leadingComments !== void 0)
            for (let s of e.leadingComments)
                s instanceof Tr ? t.print(e, `/*${s.toString()}*/`, s.trailingNewline) : s.multiline ? t.print(e, `/* ${s.text} */`, s.trailingNewline) : s.text.split(`
`).forEach(r => { t.println(e, `// ${r}`); });
    }
    visitExpressionStmt(e, t) { return this.printLeadingComments(e, t), e.expr.visitExpression(this, t), t.println(e, ";"), null; }
    visitReturnStmt(e, t) { return this.printLeadingComments(e, t), t.print(e, "return "), e.value.visitExpression(this, t), t.println(e, ";"), null; }
    visitIfStmt(e, t) { this.printLeadingComments(e, t), t.print(e, "if ("), this.lastIfCondition = e.condition, e.condition.visitExpression(this, t), this.lastIfCondition = null, t.print(e, ") {"); let s = e.falseCase != null && e.falseCase.length > 0; return e.trueCase.length <= 1 && !s ? (t.print(e, " "), this.visitAllStatements(e.trueCase, t), t.removeEmptyLastLine(), t.print(e, " ")) : (t.println(), t.incIndent(), this.visitAllStatements(e.trueCase, t), t.decIndent(), s && (t.println(e, "} else {"), t.incIndent(), this.visitAllStatements(e.falseCase, t), t.decIndent())), t.println(e, "}"), null; }
    visitInvokeFunctionExpr(e, t) { let s = e.fn instanceof xn; return s && t.print(e.fn, "("), e.fn.visitExpression(this, t), s && t.print(e.fn, ")"), t.print(e, "("), this.visitAllExpressions(e.args, t, ","), t.print(e, ")"), null; }
    visitTaggedTemplateLiteralExpr(e, t) { return e.tag.visitExpression(this, t), e.template.visitExpression(this, t), null; }
    visitTemplateLiteralExpr(e, t) { t.print(e, "`"); for (let s = 0; s < e.elements.length; s++) {
        e.elements[s].visitExpression(this, t);
        let r = s < e.expressions.length ? e.expressions[s] : null;
        r !== null && (t.print(r, "${"), r.visitExpression(this, t), t.print(r, "}"));
    } t.print(e, "`"); }
    visitTemplateLiteralElementExpr(e, t) { t.print(e, e.rawText); }
    visitWrappedNodeExpr(e, t) { throw new Error("Abstract emitter cannot visit WrappedNodeExpr."); }
    visitTypeofExpr(e, t) { t.print(e, "typeof "), e.expr.visitExpression(this, t); }
    visitVoidExpr(e, t) { t.print(e, "void "), e.expr.visitExpression(this, t); }
    visitReadVarExpr(e, t) { return t.print(e, e.name), null; }
    visitInstantiateExpr(e, t) { return t.print(e, "new "), e.classExpr.visitExpression(this, t), t.print(e, "("), this.visitAllExpressions(e.args, t, ","), t.print(e, ")"), null; }
    visitLiteralExpr(e, t) { let s = e.value; return typeof s == "string" ? t.print(e, qn(s, this._escapeDollarInStrings)) : t.print(e, `${s}`), null; }
    visitLocalizedString(e, t) { let s = e.serializeI18nHead(); t.print(e, "$localize `" + s.raw); for (let r = 1; r < e.messageParts.length; r++)
        t.print(e, "${"), e.expressions[r - 1].visitExpression(this, t), t.print(e, `}${e.serializeI18nTemplatePart(r).raw}`); return t.print(e, "`"), null; }
    visitConditionalExpr(e, t) { return t.print(e, "("), e.condition.visitExpression(this, t), t.print(e, "? "), e.trueCase.visitExpression(this, t), t.print(e, ": "), e.falseCase.visitExpression(this, t), t.print(e, ")"), null; }
    visitDynamicImportExpr(e, t) { t.print(e, `import(${e.url})`); }
    visitNotExpr(e, t) { return t.print(e, "!"), e.condition.visitExpression(this, t), null; }
    visitUnaryOperatorExpr(e, t) { let s; switch (e.operator) {
        case Ds.Plus:
            s = "+";
            break;
        case Ds.Minus:
            s = "-";
            break;
        default: throw new Error(`Unknown operator ${e.operator}`);
    } let r = e !== this.lastIfCondition; return r && t.print(e, "("), t.print(e, s), e.expr.visitExpression(this, t), r && t.print(e, ")"), null; }
    visitBinaryOperatorExpr(e, t) { let s = sm.get(e.operator); if (!s)
        throw new Error(`Unknown operator ${e.operator}`); let r = e !== this.lastIfCondition; return r && t.print(e, "("), e.lhs.visitExpression(this, t), t.print(e, ` ${s} `), e.rhs.visitExpression(this, t), r && t.print(e, ")"), null; }
    visitReadPropExpr(e, t) { return e.receiver.visitExpression(this, t), t.print(e, "."), t.print(e, e.name), null; }
    visitReadKeyExpr(e, t) { return e.receiver.visitExpression(this, t), t.print(e, "["), e.index.visitExpression(this, t), t.print(e, "]"), null; }
    visitLiteralArrayExpr(e, t) { return t.print(e, "["), this.visitAllExpressions(e.entries, t, ","), t.print(e, "]"), null; }
    visitLiteralMapExpr(e, t) { return t.print(e, "{"), this.visitAllObjects(s => { t.print(e, `${qn(s.key, this._escapeDollarInStrings, s.quoted)}:`), s.value.visitExpression(this, t); }, e.entries, t, ","), t.print(e, "}"), null; }
    visitCommaExpr(e, t) { return t.print(e, "("), this.visitAllExpressions(e.parts, t, ","), t.print(e, ")"), null; }
    visitParenthesizedExpr(e, t) { e.expr.visitExpression(this, t); }
    visitAllExpressions(e, t, s) { this.visitAllObjects(r => r.visitExpression(this, t), e, t, s); }
    visitAllObjects(e, t, s, r) { let i = !1; for (let a = 0; a < t.length; a++)
        a > 0 && (s.lineLength() > 80 ? (s.print(null, r, !0), i || (s.incIndent(), s.incIndent(), i = !0)) : s.print(null, r, !1)), e(t[a]); i && (s.decIndent(), s.decIndent()); }
    visitAllStatements(e, t) { e.forEach(s => s.visitStatement(this, t)); }
};
function qn(n, e, t = !0) {
    if (n == null)
        return null;
    let s = n.replace(tm, (...i) => i[0] == "$" ? e ? "\\$" : "$" : i[0] == `
` ? "\\n" : i[0] == "\r" ? "\\r" : `\\${i[0]}`);
    return t || !nm.test(s) ? `'${s}'` : s;
}
function hu(n) { let e = ""; for (let t = 0; t < n; t++)
    e += Xo; return e; }
function ao(n, e) { if (e === 0)
    return we(n); let t = []; for (let s = 0; s < e; s++)
    t.push(He); return we(n, void 0, t); }
function rm(n, e) { let t = qn(e, !1, !1); return t !== e ? `${n}[${t}]` : `${n}.${e}`; }
function im(n) { return vp("ngJitMode", n); }
function Ir(n) { return vp("ngDevMode", n); }
function vp(n, e) { let t = new tn({ name: n, moduleName: null }), s = new W(x.Identical, new Kn(t), d("undefined")), r = new W(x.Or, s, t, void 0, void 0); return new W(x.And, r, e); }
function ge(n) { let e = new H(n); return { value: e, type: e }; }
function Ct(n, e) { let t = R(n.map(s => s.value)); return e ? ie([], t) : t; }
function Nc(n, e) { return { expression: n, forwardRef: e }; }
function xs({ expression: n, forwardRef: e }) { switch (e) {
    case 0:
    case 1: return n;
    case 2: return Dc(n);
} }
function Dc(n) { return y(f.forwardRef).callFn([ie([], n)]); }
var Ki = (function (n) { return n[n.Class = 0] = "Class", n[n.Function = 1] = "Function", n; })(Ki || {});
function $n(n) { let e = D("__ngFactoryType__"), t = null, s = fu(n) ? e : new W(x.Or, e, n.type.value), r = null; n.deps !== null ? n.deps !== "invalid" && (r = new Ls(s, pu(n.deps, n.target))) : (t = D(`\u0275${n.name}_BaseFactory`), r = t.callFn([s])); let i = [], a = null; function o(c) { let h = D("__ngConditionalFactory__"); i.push(new ce(h.name, yn, qe)); let p = r !== null ? h.set(r).toStmt() : y(f.invalidFactory).callFn([]).toStmt(); return i.push(Si(e, [p], [h.set(c).toStmt()])), h; } if (fu(n)) {
    let c = pu(n.delegateDeps, n.target), h = new (n.delegateType === Ki.Class ? Ls : Fe)(n.delegate, c);
    a = o(h);
}
else
    cm(n) ? a = o(n.expression) : a = r; if (a === null)
    i.push(y(f.invalidFactory).callFn([]).toStmt());
else if (t !== null) {
    let c = y(f.getInheritedFactory).callFn([n.type.value]), h = new W(x.Or, t, t.set(c));
    i.push(new xe(h.callFn([s])));
}
else
    i.push(new xe(a)); let l = sn([new J(e.name, He)], i, qe, void 0, `${n.name}_Factory`); return t !== null && (l = ie([], [new ce(t.name), new xe(l)]).callFn([], void 0, !0)), { expression: l, statements: [], type: wp(n) }; }
function wp(n) { let e = n.deps !== null && n.deps !== "invalid" ? om(n.deps) : kt; return we(y(f.FactoryDeclaration, [ao(n.type.type, n.typeArgumentCount), e])); }
function pu(n, e) { return n.map((t, s) => am(t, e, s)); }
function am(n, e, t) { if (n.token === null)
    return y(f.invalidFactoryDep).callFn([d(t)]); if (n.attributeNameType === null) {
    let s = 0 | (n.self ? 2 : 0) | (n.skipSelf ? 4 : 0) | (n.host ? 1 : 0) | (n.optional ? 8 : 0) | (e === Bt.Pipe ? 16 : 0), r = s !== 0 || n.optional ? d(s) : null, i = [n.token];
    r && i.push(r);
    let a = um(e);
    return y(a).callFn(i);
}
else
    return y(f.injectAttribute).callFn([n.token]); }
function om(n) { let e = !1, t = n.map(s => { let r = lm(s); return r !== null ? (e = !0, r) : d(null); }); return e ? we(R(t)) : kt; }
function lm(n) { let e = []; return n.attributeNameType !== null && e.push({ key: "attribute", value: n.attributeNameType, quoted: !1 }), n.optional && e.push({ key: "optional", value: d(!0), quoted: !1 }), n.host && e.push({ key: "host", value: d(!0), quoted: !1 }), n.self && e.push({ key: "self", value: d(!0), quoted: !1 }), n.skipSelf && e.push({ key: "skipSelf", value: d(!0), quoted: !1 }), e.length > 0 ? he(e) : null; }
function fu(n) { return n.delegateType !== void 0; }
function cm(n) { return n.expression !== void 0; }
function um(n) { switch (n) {
    case Bt.Component:
    case Bt.Directive:
    case Bt.Pipe: return f.directiveInject;
    case Bt.NgModule:
    case Bt.Injectable:
    default: return f.inject;
} }
var ns = class {
    start;
    end;
    constructor(e, t) { this.start = e, this.end = t; }
    toAbsolute(e) { return new Ze(e + this.start, e + this.end); }
}, se = class {
    span;
    sourceSpan;
    constructor(e, t) { this.span = e, this.sourceSpan = t; }
    toString() { return "AST"; }
}, Nr = class extends se {
    nameSpan;
    constructor(e, t, s) { super(e, t), this.nameSpan = s; }
}, $e = class extends se {
    visit(e, t = null) { }
}, $t = class extends se {
    visit(e, t = null) { return e.visitImplicitReceiver(this, t); }
}, ss = class extends $t {
    visit(e, t = null) { return e.visitThisReceiver?.(this, t); }
}, Rs = class extends se {
    expressions;
    constructor(e, t, s) { super(e, t), this.expressions = s; }
    visit(e, t = null) { return e.visitChain(this, t); }
}, ea = class extends se {
    condition;
    trueExp;
    falseExp;
    constructor(e, t, s, r, i) { super(e, t), this.condition = s, this.trueExp = r, this.falseExp = i; }
    visit(e, t = null) { return e.visitConditional(this, t); }
}, Jt = class extends Nr {
    receiver;
    name;
    constructor(e, t, s, r, i) { super(e, t, s), this.receiver = r, this.name = i; }
    visit(e, t = null) { return e.visitPropertyRead(this, t); }
}, Dr = class extends Nr {
    receiver;
    name;
    constructor(e, t, s, r, i) { super(e, t, s), this.receiver = r, this.name = i; }
    visit(e, t = null) { return e.visitSafePropertyRead(this, t); }
}, rs = class extends se {
    receiver;
    key;
    constructor(e, t, s, r) { super(e, t), this.receiver = s, this.key = r; }
    visit(e, t = null) { return e.visitKeyedRead(this, t); }
}, Pr = class extends se {
    receiver;
    key;
    constructor(e, t, s, r) { super(e, t), this.receiver = s, this.key = r; }
    visit(e, t = null) { return e.visitSafeKeyedRead(this, t); }
}, qi = (function (n) { return n[n.ReferencedByName = 0] = "ReferencedByName", n[n.ReferencedDirectly = 1] = "ReferencedDirectly", n; })(qi || {}), ta = class extends Nr {
    exp;
    name;
    args;
    type;
    constructor(e, t, s, r, i, a, o) { super(e, t, o), this.exp = s, this.name = r, this.args = i, this.type = a; }
    visit(e, t = null) { return e.visitPipe(this, t); }
}, Ge = class extends se {
    value;
    constructor(e, t, s) { super(e, t), this.value = s; }
    visit(e, t = null) { return e.visitLiteralPrimitive(this, t); }
}, na = class extends se {
    expressions;
    constructor(e, t, s) { super(e, t), this.expressions = s; }
    visit(e, t = null) { return e.visitLiteralArray(this, t); }
}, sa = class extends se {
    keys;
    values;
    constructor(e, t, s, r) { super(e, t), this.keys = s, this.values = r; }
    visit(e, t = null) { return e.visitLiteralMap(this, t); }
}, xi = class extends se {
    strings;
    expressions;
    constructor(e, t, s, r) { super(e, t), this.strings = s, this.expressions = r; }
    visit(e, t = null) { return e.visitInterpolation(this, t); }
}, Ne = class extends se {
    operation;
    left;
    right;
    constructor(e, t, s, r, i) { super(e, t), this.operation = s, this.left = r, this.right = i; }
    visit(e, t = null) { return e.visitBinary(this, t); }
    static isAssignmentOperation(e) { return e === "=" || e === "+=" || e === "-=" || e === "*=" || e === "/=" || e === "%=" || e === "**=" || e === "&&=" || e === "||=" || e === "??="; }
}, Ts = class n extends Ne {
    operator;
    expr;
    left = null;
    right = null;
    operation = null;
    static createMinus(e, t, s) { return new n(e, t, "-", s, "-", new Ge(e, t, 0), s); }
    static createPlus(e, t, s) { return new n(e, t, "+", s, "-", s, new Ge(e, t, 0)); }
    constructor(e, t, s, r, i, a, o) { super(e, t, i, a, o), this.operator = s, this.expr = r; }
    visit(e, t = null) { return e.visitUnary !== void 0 ? e.visitUnary(this, t) : e.visitBinary(this, t); }
}, Lr = class extends se {
    expression;
    constructor(e, t, s) { super(e, t), this.expression = s; }
    visit(e, t = null) { return e.visitPrefixNot(this, t); }
}, Br = class extends se {
    expression;
    constructor(e, t, s) { super(e, t), this.expression = s; }
    visit(e, t = null) { return e.visitTypeofExpression(this, t); }
}, Mr = class extends se {
    expression;
    constructor(e, t, s) { super(e, t), this.expression = s; }
    visit(e, t = null) { return e.visitVoidExpression(this, t); }
}, Rr = class extends se {
    expression;
    constructor(e, t, s) { super(e, t), this.expression = s; }
    visit(e, t = null) { return e.visitNonNullAssert(this, t); }
}, Fs = class extends se {
    receiver;
    args;
    argumentSpan;
    constructor(e, t, s, r, i) { super(e, t), this.receiver = s, this.args = r, this.argumentSpan = i; }
    visit(e, t = null) { return e.visitCall(this, t); }
}, ra = class extends se {
    receiver;
    args;
    argumentSpan;
    constructor(e, t, s, r, i) { super(e, t), this.receiver = s, this.args = r, this.argumentSpan = i; }
    visit(e, t = null) { return e.visitSafeCall(this, t); }
}, Fr = class extends se {
    tag;
    template;
    constructor(e, t, s, r) { super(e, t), this.tag = s, this.template = r; }
    visit(e, t) { return e.visitTaggedTemplateLiteral(this, t); }
}, $r = class extends se {
    elements;
    expressions;
    constructor(e, t, s, r) { super(e, t), this.elements = s, this.expressions = r; }
    visit(e, t) { return e.visitTemplateLiteral(this, t); }
}, ia = class extends se {
    text;
    constructor(e, t, s) { super(e, t), this.text = s; }
    visit(e, t) { return e.visitTemplateLiteralElement(this, t); }
}, Or = class extends se {
    expression;
    constructor(e, t, s) { super(e, t), this.expression = s; }
    visit(e, t) { return e.visitParenthesizedExpression(this, t); }
}, Ze = class {
    start;
    end;
    constructor(e, t) { this.start = e, this.end = t; }
}, Xe = class extends se {
    ast;
    source;
    location;
    errors;
    constructor(e, t, s, r, i) { super(new ns(0, t === null ? 0 : t.length), new Ze(r, t === null ? r : r + t.length)), this.ast = e, this.source = t, this.location = s, this.errors = i; }
    visit(e, t = null) { return e.visitASTWithSource ? e.visitASTWithSource(this, t) : this.ast.visit(e, t); }
    toString() { return `${this.source} in ${this.location}`; }
}, Vr = class {
    sourceSpan;
    key;
    value;
    constructor(e, t, s) { this.sourceSpan = e, this.key = t, this.value = s; }
}, Zo = class {
    sourceSpan;
    key;
    value;
    constructor(e, t, s) { this.sourceSpan = e, this.key = t, this.value = s; }
}, qr = class {
    visit(e, t) { e.visit(this, t); }
    visitUnary(e, t) { this.visit(e.expr, t); }
    visitBinary(e, t) { this.visit(e.left, t), this.visit(e.right, t); }
    visitChain(e, t) { this.visitAll(e.expressions, t); }
    visitConditional(e, t) { this.visit(e.condition, t), this.visit(e.trueExp, t), this.visit(e.falseExp, t); }
    visitPipe(e, t) { this.visit(e.exp, t), this.visitAll(e.args, t); }
    visitImplicitReceiver(e, t) { }
    visitThisReceiver(e, t) { }
    visitInterpolation(e, t) { this.visitAll(e.expressions, t); }
    visitKeyedRead(e, t) { this.visit(e.receiver, t), this.visit(e.key, t); }
    visitLiteralArray(e, t) { this.visitAll(e.expressions, t); }
    visitLiteralMap(e, t) { this.visitAll(e.values, t); }
    visitLiteralPrimitive(e, t) { }
    visitPrefixNot(e, t) { this.visit(e.expression, t); }
    visitTypeofExpression(e, t) { this.visit(e.expression, t); }
    visitVoidExpression(e, t) { this.visit(e.expression, t); }
    visitNonNullAssert(e, t) { this.visit(e.expression, t); }
    visitPropertyRead(e, t) { this.visit(e.receiver, t); }
    visitSafePropertyRead(e, t) { this.visit(e.receiver, t); }
    visitSafeKeyedRead(e, t) { this.visit(e.receiver, t), this.visit(e.key, t); }
    visitCall(e, t) { this.visit(e.receiver, t), this.visitAll(e.args, t); }
    visitSafeCall(e, t) { this.visit(e.receiver, t), this.visitAll(e.args, t); }
    visitTemplateLiteral(e, t) { for (let s = 0; s < e.elements.length; s++) {
        this.visit(e.elements[s], t);
        let r = s < e.expressions.length ? e.expressions[s] : null;
        r !== null && this.visit(r, t);
    } }
    visitTemplateLiteralElement(e, t) { }
    visitTaggedTemplateLiteral(e, t) { this.visit(e.tag, t), this.visit(e.template, t); }
    visitParenthesizedExpression(e, t) { this.visit(e.expression, t); }
    visitAll(e, t) { for (let s of e)
        this.visit(s, t); }
}, ys = class {
    name;
    expression;
    type;
    sourceSpan;
    keySpan;
    valueSpan;
    isLiteral;
    isLegacyAnimation;
    isAnimation;
    constructor(e, t, s, r, i, a) { this.name = e, this.expression = t, this.type = s, this.sourceSpan = r, this.keySpan = i, this.valueSpan = a, this.isLiteral = this.type === Lt.LITERAL_ATTR, this.isLegacyAnimation = this.type === Lt.LEGACY_ANIMATION, this.isAnimation = this.type === Lt.ANIMATION; }
}, Lt = (function (n) { return n[n.DEFAULT = 0] = "DEFAULT", n[n.LITERAL_ATTR = 1] = "LITERAL_ATTR", n[n.LEGACY_ANIMATION = 2] = "LEGACY_ANIMATION", n[n.TWO_WAY = 3] = "TWO_WAY", n[n.ANIMATION = 4] = "ANIMATION", n; })(Lt || {}), Be = (function (n) { return n[n.Regular = 0] = "Regular", n[n.LegacyAnimation = 1] = "LegacyAnimation", n[n.TwoWay = 2] = "TwoWay", n[n.Animation = 3] = "Animation", n; })(Be || {}), aa = class {
    name;
    targetOrPhase;
    type;
    handler;
    sourceSpan;
    handlerSpan;
    keySpan;
    constructor(e, t, s, r, i, a, o) { this.name = e, this.targetOrPhase = t, this.type = s, this.handler = r, this.sourceSpan = i, this.handlerSpan = a, this.keySpan = o; }
}, Jo = class {
    name;
    value;
    sourceSpan;
    keySpan;
    valueSpan;
    constructor(e, t, s, r, i) { this.name = e, this.value = t, this.sourceSpan = s, this.keySpan = r, this.valueSpan = i; }
}, G = (function (n) { return n[n.Property = 0] = "Property", n[n.Attribute = 1] = "Attribute", n[n.Class = 2] = "Class", n[n.Style = 3] = "Style", n[n.LegacyAnimation = 4] = "LegacyAnimation", n[n.TwoWay = 5] = "TwoWay", n[n.Animation = 6] = "Animation", n; })(G || {}), oa = class {
    name;
    type;
    securityContext;
    value;
    unit;
    sourceSpan;
    keySpan;
    valueSpan;
    constructor(e, t, s, r, i, a, o, l) { this.name = e, this.type = t, this.securityContext = s, this.value = r, this.unit = i, this.sourceSpan = a, this.keySpan = o, this.valueSpan = l; }
}, Mt = (function (n) { return n[n.RAW_TEXT = 0] = "RAW_TEXT", n[n.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", n[n.PARSABLE_DATA = 2] = "PARSABLE_DATA", n; })(Mt || {});
function It(n, e = !0) { if (n[0] != ":")
    return [null, n]; let t = n.indexOf(":", 1); if (t === -1) {
    if (e)
        throw new Error(`Unsupported format "${n}" expecting ":namespace:name"`);
    return [null, n];
} return [n.slice(1, t), n.slice(t + 1)]; }
function du(n) { return It(n)[1] === "ng-container"; }
function Ko(n) { return It(n)[1] === "ng-content"; }
function hm(n) { return It(n)[1] === "ng-template"; }
function el(n) { return n === null ? null : It(n)[0]; }
function Ui(n, e) { return n ? `:${n}:${e}` : e; }
var oo = class {
    value;
    sourceSpan;
    constructor(e, t) { this.value = e, this.sourceSpan = t; }
    visit(e) { throw new Error("visit() not implemented for Comment"); }
}, Un = class {
    value;
    sourceSpan;
    constructor(e, t) { this.value = e, this.sourceSpan = t; }
    visit(e) { return e.visitText(this); }
}, $s = class {
    value;
    sourceSpan;
    i18n;
    constructor(e, t, s) { this.value = e, this.sourceSpan = t, this.i18n = s; }
    visit(e) { return e.visitBoundText(this); }
}, Os = class {
    name;
    value;
    sourceSpan;
    keySpan;
    valueSpan;
    i18n;
    constructor(e, t, s, r, i, a) { this.name = e, this.value = t, this.sourceSpan = s, this.keySpan = r, this.valueSpan = i, this.i18n = a; }
    visit(e) { return e.visitTextAttribute(this); }
}, tl = class n {
    name;
    type;
    securityContext;
    value;
    unit;
    sourceSpan;
    keySpan;
    valueSpan;
    i18n;
    constructor(e, t, s, r, i, a, o, l, c) { this.name = e, this.type = t, this.securityContext = s, this.value = r, this.unit = i, this.sourceSpan = a, this.keySpan = o, this.valueSpan = l, this.i18n = c; }
    static fromBoundElementProperty(e, t) { if (e.keySpan === void 0)
        throw new Error(`Unexpected state: keySpan must be defined for bound attributes but was not for ${e.name}: ${e.sourceSpan}`); return new n(e.name, e.type, e.securityContext, e.value, e.unit, e.sourceSpan, e.keySpan, e.valueSpan, t); }
    visit(e) { return e.visitBoundAttribute(this); }
}, nl = class n {
    name;
    type;
    handler;
    target;
    phase;
    sourceSpan;
    handlerSpan;
    keySpan;
    constructor(e, t, s, r, i, a, o, l) { this.name = e, this.type = t, this.handler = s, this.target = r, this.phase = i, this.sourceSpan = a, this.handlerSpan = o, this.keySpan = l; }
    static fromParsedEvent(e) { let t = e.type === Be.Regular ? e.targetOrPhase : null, s = e.type === Be.LegacyAnimation ? e.targetOrPhase : null; if (e.keySpan === void 0)
        throw new Error(`Unexpected state: keySpan must be defined for bound event but was not for ${e.name}: ${e.sourceSpan}`); return new n(e.name, e.type, e.handler, t, s, e.sourceSpan, e.handlerSpan, e.keySpan); }
    visit(e) { return e.visitBoundEvent(this); }
}, Ot = class {
    name;
    attributes;
    inputs;
    outputs;
    directives;
    children;
    references;
    isSelfClosing;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    isVoid;
    i18n;
    constructor(e, t, s, r, i, a, o, l, c, h, p, g, v) { this.name = e, this.attributes = t, this.inputs = s, this.outputs = r, this.directives = i, this.children = a, this.references = o, this.isSelfClosing = l, this.sourceSpan = c, this.startSourceSpan = h, this.endSourceSpan = p, this.isVoid = g, this.i18n = v; }
    visit(e) { return e.visitElement(this); }
}, Vt = class {
    nameSpan;
    sourceSpan;
    prefetchSpan;
    whenOrOnSourceSpan;
    hydrateSpan;
    constructor(e, t, s, r, i) { this.nameSpan = e, this.sourceSpan = t, this.prefetchSpan = s, this.whenOrOnSourceSpan = r, this.hydrateSpan = i; }
    visit(e) { return e.visitDeferredTrigger(this); }
}, la = class extends Vt {
    value;
    constructor(e, t, s, r, i) { super(null, t, s, r, i), this.value = e; }
}, sl = class extends Vt {
}, rl = class extends Vt {
}, il = class extends Vt {
}, ca = class extends Vt {
    reference;
    constructor(e, t, s, r, i, a) { super(t, s, r, i, a), this.reference = e; }
}, al = class extends Vt {
    delay;
    constructor(e, t, s, r, i, a) { super(t, s, r, i, a), this.delay = e; }
}, ua = class extends Vt {
    reference;
    constructor(e, t, s, r, i, a) { super(t, s, r, i, a), this.reference = e; }
}, ha = class extends Vt {
    reference;
    constructor(e, t, s, r, i, a) { super(t, s, r, i, a), this.reference = e; }
}, mt = class {
    nameSpan;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r) { this.nameSpan = e, this.sourceSpan = t, this.startSourceSpan = s, this.endSourceSpan = r; }
}, Ur = class extends mt {
    children;
    minimumTime;
    i18n;
    constructor(e, t, s, r, i, a, o) { super(s, r, i, a), this.children = e, this.minimumTime = t, this.i18n = o; }
    visit(e) { return e.visitDeferredBlockPlaceholder(this); }
}, Hr = class extends mt {
    children;
    afterTime;
    minimumTime;
    i18n;
    constructor(e, t, s, r, i, a, o, l) { super(r, i, a, o), this.children = e, this.afterTime = t, this.minimumTime = s, this.i18n = l; }
    visit(e) { return e.visitDeferredBlockLoading(this); }
}, Wr = class extends mt {
    children;
    i18n;
    constructor(e, t, s, r, i, a) { super(t, s, r, i), this.children = e, this.i18n = a; }
    visit(e) { return e.visitDeferredBlockError(this); }
}, is = class extends mt {
    children;
    placeholder;
    loading;
    error;
    mainBlockSpan;
    i18n;
    triggers;
    prefetchTriggers;
    hydrateTriggers;
    definedTriggers;
    definedPrefetchTriggers;
    definedHydrateTriggers;
    constructor(e, t, s, r, i, a, o, l, c, h, p, g, v) { super(l, c, p, g), this.children = e, this.placeholder = i, this.loading = a, this.error = o, this.mainBlockSpan = h, this.i18n = v, this.triggers = t, this.prefetchTriggers = s, this.hydrateTriggers = r, this.definedTriggers = Object.keys(t), this.definedPrefetchTriggers = Object.keys(s), this.definedHydrateTriggers = Object.keys(r); }
    visit(e) { return e.visitDeferredBlock(this); }
    visitAll(e) { this.visitTriggers(this.definedHydrateTriggers, this.hydrateTriggers, e), this.visitTriggers(this.definedTriggers, this.triggers, e), this.visitTriggers(this.definedPrefetchTriggers, this.prefetchTriggers, e), z(e, this.children); let t = [this.placeholder, this.loading, this.error].filter(s => s !== null); z(e, t); }
    visitTriggers(e, t, s) { z(s, e.map(r => t[r])); }
}, pa = class extends mt {
    expression;
    cases;
    unknownBlocks;
    constructor(e, t, s, r, i, a, o) { super(o, r, i, a), this.expression = e, this.cases = t, this.unknownBlocks = s; }
    visit(e) { return e.visitSwitchBlock(this); }
}, jr = class extends mt {
    expression;
    children;
    i18n;
    constructor(e, t, s, r, i, a, o) { super(a, s, r, i), this.expression = e, this.children = t, this.i18n = o; }
    visit(e) { return e.visitSwitchBlockCase(this); }
}, Vs = class extends mt {
    item;
    expression;
    trackBy;
    trackKeywordSpan;
    contextVariables;
    children;
    empty;
    mainBlockSpan;
    i18n;
    constructor(e, t, s, r, i, a, o, l, c, h, p, g, v) { super(g, l, h, p), this.item = e, this.expression = t, this.trackBy = s, this.trackKeywordSpan = r, this.contextVariables = i, this.children = a, this.empty = o, this.mainBlockSpan = c, this.i18n = v; }
    visit(e) { return e.visitForLoopBlock(this); }
}, zr = class extends mt {
    children;
    i18n;
    constructor(e, t, s, r, i, a) { super(i, t, s, r), this.children = e, this.i18n = a; }
    visit(e) { return e.visitForLoopBlockEmpty(this); }
}, fa = class extends mt {
    branches;
    constructor(e, t, s, r, i) { super(i, t, s, r), this.branches = e; }
    visit(e) { return e.visitIfBlock(this); }
}, Gn = class extends mt {
    expression;
    children;
    expressionAlias;
    i18n;
    constructor(e, t, s, r, i, a, o, l) { super(o, r, i, a), this.expression = e, this.children = t, this.expressionAlias = s, this.i18n = l; }
    visit(e) { return e.visitIfBlockBranch(this); }
}, da = class {
    name;
    sourceSpan;
    nameSpan;
    constructor(e, t, s) { this.name = e, this.sourceSpan = t, this.nameSpan = s; }
    visit(e) { return e.visitUnknownBlock(this); }
}, Pc = class {
    name;
    value;
    sourceSpan;
    nameSpan;
    valueSpan;
    constructor(e, t, s, r, i) { this.name = e, this.value = t, this.sourceSpan = s, this.nameSpan = r, this.valueSpan = i; }
    visit(e) { return e.visitLetDeclaration(this); }
}, vr = class {
    componentName;
    tagName;
    fullName;
    attributes;
    inputs;
    outputs;
    directives;
    children;
    references;
    isSelfClosing;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    i18n;
    constructor(e, t, s, r, i, a, o, l, c, h, p, g, v, E) { this.componentName = e, this.tagName = t, this.fullName = s, this.attributes = r, this.inputs = i, this.outputs = a, this.directives = o, this.children = l, this.references = c, this.isSelfClosing = h, this.sourceSpan = p, this.startSourceSpan = g, this.endSourceSpan = v, this.i18n = E; }
    visit(e) { return e.visitComponent(this); }
}, Ep = class {
    name;
    attributes;
    inputs;
    outputs;
    references;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    i18n;
    constructor(e, t, s, r, i, a, o, l, c) { this.name = e, this.attributes = t, this.inputs = s, this.outputs = r, this.references = i, this.sourceSpan = a, this.startSourceSpan = o, this.endSourceSpan = l, this.i18n = c; }
    visit(e) { return e.visitDirective(this); }
}, Ke = class {
    tagName;
    attributes;
    inputs;
    outputs;
    directives;
    templateAttrs;
    children;
    references;
    variables;
    isSelfClosing;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    i18n;
    constructor(e, t, s, r, i, a, o, l, c, h, p, g, v, E) { this.tagName = e, this.attributes = t, this.inputs = s, this.outputs = r, this.directives = i, this.templateAttrs = a, this.children = o, this.references = l, this.variables = c, this.isSelfClosing = h, this.sourceSpan = p, this.startSourceSpan = g, this.endSourceSpan = v, this.i18n = E; }
    visit(e) { return e.visitTemplate(this); }
}, qs = class {
    selector;
    attributes;
    children;
    isSelfClosing;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    i18n;
    name = "ng-content";
    constructor(e, t, s, r, i, a, o, l) { this.selector = e, this.attributes = t, this.children = s, this.isSelfClosing = r, this.sourceSpan = i, this.startSourceSpan = a, this.endSourceSpan = o, this.i18n = l; }
    visit(e) { return e.visitContent(this); }
}, _n = class {
    name;
    value;
    sourceSpan;
    keySpan;
    valueSpan;
    constructor(e, t, s, r, i) { this.name = e, this.value = t, this.sourceSpan = s, this.keySpan = r, this.valueSpan = i; }
    visit(e) { return e.visitVariable(this); }
}, Gr = class {
    name;
    value;
    sourceSpan;
    keySpan;
    valueSpan;
    constructor(e, t, s, r, i) { this.name = e, this.value = t, this.sourceSpan = s, this.keySpan = r, this.valueSpan = i; }
    visit(e) { return e.visitReference(this); }
}, Sp = class {
    vars;
    placeholders;
    sourceSpan;
    i18n;
    constructor(e, t, s, r) { this.vars = e, this.placeholders = t, this.sourceSpan = s, this.i18n = r; }
    visit(e) { return e.visitIcu(this); }
}, Xr = class {
    tagNames;
    bindings;
    listeners;
    sourceSpan;
    constructor(e, t, s, r) { if (this.tagNames = e, this.bindings = t, this.listeners = s, this.sourceSpan = r, e.length === 0)
        throw new Error("HostElement must have at least one tag name."); }
    visit() { throw new Error("HostElement cannot be visited"); }
}, pm = class {
    visitElement(e) { z(this, e.attributes), z(this, e.inputs), z(this, e.outputs), z(this, e.directives), z(this, e.children), z(this, e.references); }
    visitTemplate(e) { z(this, e.attributes), z(this, e.inputs), z(this, e.outputs), z(this, e.directives), z(this, e.children), z(this, e.references), z(this, e.variables); }
    visitDeferredBlock(e) { e.visitAll(this); }
    visitDeferredBlockPlaceholder(e) { z(this, e.children); }
    visitDeferredBlockError(e) { z(this, e.children); }
    visitDeferredBlockLoading(e) { z(this, e.children); }
    visitSwitchBlock(e) { z(this, e.cases); }
    visitSwitchBlockCase(e) { z(this, e.children); }
    visitForLoopBlock(e) { let t = [e.item, ...e.contextVariables, ...e.children]; e.empty && t.push(e.empty), z(this, t); }
    visitForLoopBlockEmpty(e) { z(this, e.children); }
    visitIfBlock(e) { z(this, e.branches); }
    visitIfBlockBranch(e) { let t = e.children; e.expressionAlias && t.push(e.expressionAlias), z(this, t); }
    visitContent(e) { z(this, e.children); }
    visitComponent(e) { z(this, e.attributes), z(this, e.inputs), z(this, e.outputs), z(this, e.directives), z(this, e.children), z(this, e.references); }
    visitDirective(e) { z(this, e.attributes), z(this, e.inputs), z(this, e.outputs), z(this, e.references); }
    visitVariable(e) { }
    visitReference(e) { }
    visitTextAttribute(e) { }
    visitBoundAttribute(e) { }
    visitBoundEvent(e) { }
    visitText(e) { }
    visitBoundText(e) { }
    visitIcu(e) { }
    visitDeferredTrigger(e) { }
    visitUnknownBlock(e) { }
    visitLetDeclaration(e) { }
};
function z(n, e) { let t = []; if (n.visit)
    for (let s of e)
        n.visit(s);
else
    for (let s of e) {
        let r = s.visit(n);
        r && t.push(r);
    } return t; }
var Ie = class {
    nodes;
    placeholders;
    placeholderToMessage;
    meaning;
    description;
    customId;
    sources;
    id;
    legacyIds = [];
    messageString;
    constructor(e, t, s, r, i, a) { this.nodes = e, this.placeholders = t, this.placeholderToMessage = s, this.meaning = r, this.description = i, this.customId = a, this.id = this.customId, this.messageString = fm(this.nodes), e.length ? this.sources = [{ filePath: e[0].sourceSpan.start.file.url, startLine: e[0].sourceSpan.start.line + 1, startCol: e[0].sourceSpan.start.col + 1, endLine: e[e.length - 1].sourceSpan.end.line + 1, endCol: e[0].sourceSpan.start.col + 1 }] : this.sources = []; }
}, Rt = class {
    value;
    sourceSpan;
    constructor(e, t) { this.value = e, this.sourceSpan = t; }
    visit(e, t) { return e.visitText(this, t); }
}, et = class {
    children;
    sourceSpan;
    constructor(e, t) { this.children = e, this.sourceSpan = t; }
    visit(e, t) { return e.visitContainer(this, t); }
}, kn = class {
    expression;
    type;
    cases;
    sourceSpan;
    expressionPlaceholder;
    constructor(e, t, s, r, i) { this.expression = e, this.type = t, this.cases = s, this.sourceSpan = r, this.expressionPlaceholder = i; }
    visit(e, t) { return e.visitIcu(this, t); }
}, qt = class {
    tag;
    attrs;
    startName;
    closeName;
    children;
    isVoid;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r, i, a, o, l, c) { this.tag = e, this.attrs = t, this.startName = s, this.closeName = r, this.children = i, this.isVoid = a, this.sourceSpan = o, this.startSourceSpan = l, this.endSourceSpan = c; }
    visit(e, t) { return e.visitTagPlaceholder(this, t); }
}, pt = class {
    value;
    name;
    sourceSpan;
    constructor(e, t, s) { this.value = e, this.name = t, this.sourceSpan = s; }
    visit(e, t) { return e.visitPlaceholder(this, t); }
}, Tn = class {
    value;
    name;
    sourceSpan;
    previousMessage;
    constructor(e, t, s) { this.value = e, this.name = t, this.sourceSpan = s; }
    visit(e, t) { return e.visitIcuPlaceholder(this, t); }
}, Ut = class {
    name;
    parameters;
    startName;
    closeName;
    children;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r, i, a, o, l) { this.name = e, this.parameters = t, this.startName = s, this.closeName = r, this.children = i, this.sourceSpan = a, this.startSourceSpan = o, this.endSourceSpan = l; }
    visit(e, t) { return e.visitBlockPlaceholder(this, t); }
}, ol = class {
    visitText(e, t) { return new Rt(e.value, e.sourceSpan); }
    visitContainer(e, t) { let s = e.children.map(r => r.visit(this, t)); return new et(s, e.sourceSpan); }
    visitIcu(e, t) { let s = {}; return Object.keys(e.cases).forEach(i => s[i] = e.cases[i].visit(this, t)), new kn(e.expression, e.type, s, e.sourceSpan, e.expressionPlaceholder); }
    visitTagPlaceholder(e, t) { let s = e.children.map(r => r.visit(this, t)); return new qt(e.tag, e.attrs, e.startName, e.closeName, s, e.isVoid, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); }
    visitPlaceholder(e, t) { return new pt(e.value, e.name, e.sourceSpan); }
    visitIcuPlaceholder(e, t) { return new Tn(e.value, e.name, e.sourceSpan); }
    visitBlockPlaceholder(e, t) { let s = e.children.map(r => r.visit(this, t)); return new Ut(e.name, e.parameters, e.startName, e.closeName, s, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); }
}, ll = class {
    visitText(e, t) { }
    visitContainer(e, t) { e.children.forEach(s => s.visit(this)); }
    visitIcu(e, t) { Object.keys(e.cases).forEach(s => { e.cases[s].visit(this); }); }
    visitTagPlaceholder(e, t) { e.children.forEach(s => s.visit(this)); }
    visitPlaceholder(e, t) { }
    visitIcuPlaceholder(e, t) { }
    visitBlockPlaceholder(e, t) { e.children.forEach(s => s.visit(this)); }
};
function fm(n) { let e = new cl; return n.map(s => s.visit(e)).join(""); }
var cl = class {
    visitText(e) { return e.value; }
    visitContainer(e) { return e.children.map(t => t.visit(this)).join(""); }
    visitIcu(e) { let t = Object.keys(e.cases).map(s => `${s} {${e.cases[s].visit(this)}}`); return `{${e.expressionPlaceholder}, ${e.type}, ${t.join(" ")}}`; }
    visitTagPlaceholder(e) { let t = e.children.map(s => s.visit(this)).join(""); return `{$${e.startName}}${t}{$${e.closeName}}`; }
    visitPlaceholder(e) { return `{$${e.name}}`; }
    visitIcuPlaceholder(e) { return `{$${e.name}}`; }
    visitBlockPlaceholder(e) { let t = e.children.map(s => s.visit(this)).join(""); return `{$${e.startName}}${t}{$${e.closeName}}`; }
}, Us = class {
    createNameMapper(e) { return null; }
}, ma = class extends ll {
    mapName;
    internalToPublic = {};
    publicToNextId = {};
    publicToInternal = {};
    constructor(e, t) { super(), this.mapName = t, e.nodes.forEach(s => s.visit(this)); }
    toPublicName(e) { return this.internalToPublic.hasOwnProperty(e) ? this.internalToPublic[e] : null; }
    toInternalName(e) { return this.publicToInternal.hasOwnProperty(e) ? this.publicToInternal[e] : null; }
    visitText(e, t) { return null; }
    visitTagPlaceholder(e, t) { this.visitPlaceholderName(e.startName), super.visitTagPlaceholder(e, t), this.visitPlaceholderName(e.closeName); }
    visitPlaceholder(e, t) { this.visitPlaceholderName(e.name); }
    visitBlockPlaceholder(e, t) { this.visitPlaceholderName(e.startName), super.visitBlockPlaceholder(e, t), this.visitPlaceholderName(e.closeName); }
    visitIcuPlaceholder(e, t) { this.visitPlaceholderName(e.name); }
    visitPlaceholderName(e) { if (!e || this.internalToPublic.hasOwnProperty(e))
        return; let t = this.mapName(e); if (this.publicToInternal.hasOwnProperty(t)) {
        let s = this.publicToNextId[t];
        this.publicToNextId[t] = s + 1, t = `${t}_${s}`;
    }
    else
        this.publicToNextId[t] = 1; this.internalToPublic[e] = t, this.publicToInternal[t] = e; }
}, dm = class {
    visitTag(e) { let t = this._serializeAttributes(e.attrs); if (e.children.length == 0)
        return `<${e.name}${t}/>`; let s = e.children.map(r => r.visit(this)); return `<${e.name}${t}>${s.join("")}</${e.name}>`; }
    visitText(e) { return e.value; }
    visitDeclaration(e) { return `<?xml${this._serializeAttributes(e.attrs)} ?>`; }
    _serializeAttributes(e) { let t = Object.keys(e).map(s => `${s}="${e[s]}"`).join(" "); return t.length > 0 ? " " + t : ""; }
    visitDoctype(e) {
        return `<!DOCTYPE ${e.rootTag} [
${e.dtd}
]>`;
    }
}, mm = new dm;
function Lc(n) { return n.map(e => e.visit(mm)).join(""); }
var Yr = class {
    attrs = {};
    constructor(e) { Object.keys(e).forEach(t => { this.attrs[t] = lo(e[t]); }); }
    visit(e) { return e.visitDeclaration(this); }
}, ul = class {
    rootTag;
    dtd;
    constructor(e, t) { this.rootTag = e, this.dtd = t; }
    visit(e) { return e.visitDoctype(this); }
}, M = class {
    name;
    children;
    attrs = {};
    constructor(e, t = {}, s = []) { this.name = e, this.children = s, Object.keys(t).forEach(r => { this.attrs[r] = lo(t[r]); }); }
    visit(e) { return e.visitTag(this); }
}, Q = class {
    value;
    constructor(e) { this.value = lo(e); }
    visit(e) { return e.visitText(this); }
}, j = class extends Q {
    constructor(e = 0) {
        super(`
${new Array(e + 1).join(" ")}`);
    }
}, gm = [[/&/g, "&amp;"], [/"/g, "&quot;"], [/'/g, "&apos;"], [/</g, "&lt;"], [/>/g, "&gt;"]];
function lo(n) { return gm.reduce((e, t) => e.replace(t[0], t[1]), n); }
var vm = "angular", mu = "messagebundle", wm = "msg", Rn = "ph", Fn = "ex", Em = "source", Sm = `<!ELEMENT messagebundle (msg)*>
<!ATTLIST messagebundle class CDATA #IMPLIED>

<!ELEMENT msg (#PCDATA|ph|source)*>
<!ATTLIST msg id CDATA #IMPLIED>
<!ATTLIST msg seq CDATA #IMPLIED>
<!ATTLIST msg name CDATA #IMPLIED>
<!ATTLIST msg desc CDATA #IMPLIED>
<!ATTLIST msg meaning CDATA #IMPLIED>
<!ATTLIST msg obsolete (obsolete) #IMPLIED>
<!ATTLIST msg xml:space (default|preserve) "default">
<!ATTLIST msg is_hidden CDATA #IMPLIED>

<!ELEMENT source (#PCDATA)>

<!ELEMENT ph (#PCDATA|ex)*>
<!ATTLIST ph name CDATA #REQUIRED>

<!ELEMENT ex (#PCDATA)>`, hl = class extends Us {
    write(e, t) { let s = new pl, r = new xm, i = new M(mu); return i.attrs.handler = vm, e.forEach(a => { let o = { id: a.id }; a.description && (o.desc = a.description), a.meaning && (o.meaning = a.meaning); let l = []; a.sources.forEach(c => { l.push(new M(Em, {}, [new Q(`${c.filePath}:${c.startLine}${c.endLine !== c.startLine ? "," + c.endLine : ""}`)])); }), i.children.push(new j(2), new M(wm, o, [...l, ...r.serialize(a.nodes)])); }), i.children.push(new j), Lc([new Yr({ version: "1.0", encoding: "UTF-8" }), new j, new ul(mu, Sm), new j, s.addDefaultExamples(i), new j]); }
    load(e, t) { throw new Error("Unsupported"); }
    digest(e) { return xp(e); }
    createNameMapper(e) { return new ma(e, Bc); }
}, xm = class {
    visitText(e, t) { return [new Q(e.value)]; }
    visitContainer(e, t) { let s = []; return e.children.forEach(r => s.push(...r.visit(this))), s; }
    visitIcu(e, t) { let s = [new Q(`{${e.expressionPlaceholder}, ${e.type}, `)]; return Object.keys(e.cases).forEach(r => { s.push(new Q(`${r} {`), ...e.cases[r].visit(this), new Q("} ")); }), s.push(new Q("}")), s; }
    visitTagPlaceholder(e, t) { let s = new Q(`<${e.tag}>`), r = new M(Fn, {}, [s]), i = new M(Rn, { name: e.startName }, [r, s]); if (e.isVoid)
        return [i]; let a = new Q(`</${e.tag}>`), o = new M(Fn, {}, [a]), l = new M(Rn, { name: e.closeName }, [o, a]); return [i, ...this.serialize(e.children), l]; }
    visitPlaceholder(e, t) { let s = new Q(`{{${e.value}}}`), r = new M(Fn, {}, [s]); return [new M(Rn, { name: e.name }, [r, s])]; }
    visitBlockPlaceholder(e, t) { let s = new Q(`@${e.name}`), r = new M(Fn, {}, [s]), i = new M(Rn, { name: e.startName }, [r, s]), a = new Q("}"), o = new M(Fn, {}, [a]), l = new M(Rn, { name: e.closeName }, [o, a]); return [i, ...this.serialize(e.children), l]; }
    visitIcuPlaceholder(e, t) { let s = e.value.expression, r = e.value.type, i = Object.keys(e.value.cases).map(l => l + " {...}").join(" "), a = new Q(`{${s}, ${r}, ${i}}`), o = new M(Fn, {}, [a]); return [new M(Rn, { name: e.name }, [o, a])]; }
    serialize(e) { return [].concat(...e.map(t => t.visit(this))); }
};
function xp(n) { return Tc(n); }
var pl = class {
    addDefaultExamples(e) { return e.visit(this), e; }
    visitTag(e) { if (e.name === Rn) {
        if (!e.children || e.children.length == 0) {
            let t = new Q(e.attrs.name || "...");
            e.children = [new M(Fn, {}, [t])];
        }
    }
    else
        e.children && e.children.forEach(t => t.visit(this)); }
    visitText(e) { }
    visitDeclaration(e) { }
    visitDoctype(e) { }
};
function Bc(n) { return n.toUpperCase().replace(/[^A-Z0-9_]/g, "_"); }
var yp = "i18n", fl = "i18n-", ym = "VAR_";
function Cp(n) { return n === yp || n.startsWith(fl); }
function Cm(n) { return n.attrs.some(e => Cp(e.name)); }
function Ap(n) { return n.nodes[0]; }
function Mc(n = {}, e) { let t = {}; return n && Object.keys(n).length && Object.keys(n).forEach(s => t[yi(s, e)] = n[s]), t; }
function yi(n, e = !0) { let t = Bc(n); if (!e)
    return t; let s = t.split("_"); if (s.length === 1)
    return n.toLowerCase(); let r; /^\d+$/.test(s[s.length - 1]) && (r = s.pop()); let i = s.shift().toLowerCase(); return s.length && (i += s.map(a => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()).join("")), r ? `${i}_${r}` : i; }
var Rc = /[-.]/, Fc = "_t", Qr = "ctx", $c = "rf";
function _p(n, e) { let t = null; return () => (t || (n(new ce(Fc, void 0, He)), t = D(e)), t); }
function Me(n) { return Array.isArray(n) ? R(n.map(Me)) : d(n, qe); }
function dl(n, e) { let t = Object.getOwnPropertyNames(n); return t.length === 0 ? null : he(t.map(s => { let r = n[s], i, a, o, l; if (typeof r == "string")
    i = s, o = s, a = r, l = Me(a);
else {
    o = s, i = r.classPropertyName, a = r.bindingPropertyName;
    let c = a !== i, h = r.transformFunction !== null, p = Ss.None;
    if (r.isSignal && (p |= Ss.SignalBased), h && (p |= Ss.HasDecoratorInputTransform), e && (c || h || p !== Ss.None)) {
        let g = [d(p), Me(a)];
        (c || h) && (g.push(Me(i)), h && g.push(r.transformFunction)), l = R(g);
    }
    else
        l = Me(a);
} return { key: o, quoted: Rc.test(o), value: l }; })); }
var ae = class {
    values = [];
    set(e, t) { if (t) {
        let s = this.values.find(r => r.key === e);
        s ? s.value = t : this.values.push({ key: e, value: t, quoted: !1 });
    } }
    toLiteralMap() { return he(this.values); }
};
function Am(n) { let e = n instanceof Ot ? n.name : "ng-template", t = _m(n), s = new Jn, r = It(e)[1]; return s.setElement(r), Object.getOwnPropertyNames(t).forEach(i => { let a = It(i)[1], o = t[i]; s.addAttribute(a, o), i.toLowerCase() === "class" && o.trim().split(/\s+/).forEach(c => s.addClassName(c)); }), s; }
function _m(n) { let e = {}; return n instanceof Ke && n.tagName !== "ng-template" ? n.templateAttrs.forEach(t => e[t.name] = "") : (n.attributes.forEach(t => { Cp(t.name) || (e[t.name] = t.value); }), n.inputs.forEach(t => { (t.type === G.Property || t.type === G.TwoWay) && (e[t.name] = ""); }), n.outputs.forEach(t => { e[t.name] = ""; })), e; }
function gu(n, e) { let t = null, s = { name: n.name, type: n.type, typeArgumentCount: n.typeArgumentCount, deps: [], target: Bt.Injectable }; if (n.useClass !== void 0) {
    let o = n.useClass.expression.isEquivalent(n.type.value), l;
    n.deps !== void 0 && (l = n.deps), l !== void 0 ? t = $n(ue(S({}, s), { delegate: n.useClass.expression, delegateDeps: l, delegateType: Ki.Class })) : o ? t = $n(s) : t = { statements: [], expression: vu(n.type.value, n.useClass.expression, e) };
}
else
    n.useFactory !== void 0 ? n.deps !== void 0 ? t = $n(ue(S({}, s), { delegate: n.useFactory, delegateDeps: n.deps || [], delegateType: Ki.Function })) : t = { statements: [], expression: ie([], n.useFactory.callFn([])) } : n.useValue !== void 0 ? t = $n(ue(S({}, s), { expression: n.useValue.expression })) : n.useExisting !== void 0 ? t = $n(ue(S({}, s), { expression: y(f.inject).callFn([n.useExisting.expression]) })) : t = { statements: [], expression: vu(n.type.value, n.type.value, e) }; let r = n.type.value, i = new ae; return i.set("token", r), i.set("factory", t.expression), n.providedIn.expression.value !== null && i.set("providedIn", xs(n.providedIn)), { expression: y(f.\u0275\u0275defineInjectable).callFn([i.toLiteralMap()], void 0, !0), type: kp(n), statements: t.statements }; }
function kp(n) { return new Je(y(f.InjectableDeclaration, [ao(n.type.type, n.typeArgumentCount)])); }
function vu(n, e, t) { if (n.node === e.node)
    return e.prop("\u0275fac"); if (!t)
    return wu(e); let s = y(f.resolveForwardRef).callFn([e]); return wu(s); }
function wu(n) { let e = new J("__ngFactoryType__", He); return ie([e], n.prop("\u0275fac").callFn([D(e.name)])); }
var km = [/@/, /^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
function Tm(n, e) { if (e != null && !(Array.isArray(e) && e.length == 2))
    throw new Error(`Expected '${n}' to be an array, [start, end].`); if (e != null) {
    let t = e[0], s = e[1];
    km.forEach(r => { if (r.test(t) || r.test(s))
        throw new Error(`['${t}', '${s}'] contains unusable interpolation symbol.`); });
} }
var ga = class n {
    start;
    end;
    static fromArray(e) { return e ? (Tm("interpolation", e), new n(e[0], e[1])) : ot; }
    constructor(e, t) { this.start = e, this.end = t; }
}, ot = new ga("{{", "}}"), Tp = new Set(["switch"]), _e = 0, bm = 8, Oc = 9, Xn = 10, bp = 11, Ip = 12, Vc = 13, Np = 32, ml = 33, Zr = 34, Dp = 35, co = 36, Im = 37, va = 38, Jr = 39, At = 40, Pe = 41, Eu = 42, Pp = 43, ht = 44, wa = 45, pr = 46, Et = 47, Gt = 58, Ye = 59, bs = 60, Te = 61, it = 62, Su = 63, qc = 48, Nm = 55, Lp = 57, Pn = 65, Dm = 69, Pm = 70, Lm = 88, Ks = 90, vn = 91, Is = 92, Hn = 93, Bm = 94, Ln = 95, as = 97, Mm = 98, Rm = 101, Uc = 102, Bp = 110, Mp = 114, Rp = 116, Fp = 117, $p = 118, Op = 120, Ci = 122, yt = 123, xu = 124, Le = 125, Vp = 160, fs = 64, gl = 96;
function Kr(n) { return n >= Oc && n <= Np || n == Vp; }
function St(n) { return qc <= n && n <= Lp; }
function Hs(n) { return n >= as && n <= Ci || n >= Pn && n <= Ks; }
function Fm(n) { return n >= as && n <= Uc || n >= Pn && n <= Pm || St(n); }
function Ea(n) { return n === Xn || n === Vc; }
function yu(n) { return qc <= n && n <= Nm; }
function wr(n) { return n === Jr || n === Zr || n === gl; }
var os = class n {
    file;
    offset;
    line;
    col;
    constructor(e, t, s, r) { this.file = e, this.offset = t, this.line = s, this.col = r; }
    toString() { return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url; }
    moveBy(e) { let t = this.file.content, s = t.length, r = this.offset, i = this.line, a = this.col; for (; r > 0 && e < 0;)
        if (r--, e++, t.charCodeAt(r) == Xn) {
            i--;
            let l = t.substring(0, r - 1).lastIndexOf(String.fromCharCode(Xn));
            a = l > 0 ? r - l : r;
        }
        else
            a--; for (; r < s && e > 0;) {
        let o = t.charCodeAt(r);
        r++, e--, o == Xn ? (i++, a = 0) : a++;
    } return new n(this.file, r, i, a); }
    getContext(e, t) {
        let s = this.file.content, r = this.offset;
        if (r != null) {
            r > s.length - 1 && (r = s.length - 1);
            let i = r, a = 0, o = 0;
            for (; a < e && r > 0 && (r--, a++, !(s[r] == `
` && ++o == t));)
                ;
            for (a = 0, o = 0; a < e && i < s.length - 1 && (i++, a++, !(s[i] == `
` && ++o == t));)
                ;
            return { before: s.substring(r, this.offset), after: s.substring(this.offset, i + 1) };
        }
        return null;
    }
}, ei = class {
    content;
    url;
    constructor(e, t) { this.content = e, this.url = t; }
}, L = class {
    start;
    end;
    fullStart;
    details;
    constructor(e, t, s = e, r = null) { this.start = e, this.end = t, this.fullStart = s, this.details = r; }
    toString() { return this.start.file.content.substring(this.start.offset, this.end.offset); }
}, mn = (function (n) { return n[n.WARNING = 0] = "WARNING", n[n.ERROR = 1] = "ERROR", n; })(mn || {}), N = class extends Error {
    span;
    msg;
    level;
    relatedError;
    constructor(e, t, s = mn.ERROR, r) { super(t), this.span = e, this.msg = t, this.level = s, this.relatedError = r, Object.setPrototypeOf(this, new.target.prototype); }
    contextualMessage() { let e = this.span.start.getContext(100, 3); return e ? `${this.msg} ("${e.before}[${mn[this.level]} ->]${e.after}")` : this.msg; }
    toString() { let e = this.span.details ? `, ${this.span.details}` : ""; return `${this.contextualMessage()}: ${this.span.start}${e}`; }
};
function $m(n, e, t) { let s = `in ${n} ${e} in ${t}`, r = new ei("", s); return new L(new os(r, -1, -1, -1), new os(r, -1, -1, -1)); }
var Om = 0;
function Vm(n) { if (!n || !n.reference)
    return null; let e = n.reference; if (e.__anonymousType)
    return e.__anonymousType; if (e.__forward_ref__)
    return "__forward_ref__"; let t = mp(e); return t.indexOf("(") >= 0 ? (t = `anonymous_${Om++}`, e.__anonymousType = t) : t = On(t), t; }
function On(n) { return n.replace(/\W/g, "_"); }
var Cu = '(this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e})', vl = class extends Qo {
    constructor() { super(!1); }
    visitWrappedNodeExpr(e, t) { throw new Error("Cannot emit a WrappedNodeExpr in Javascript."); }
    visitDeclareVarStmt(e, t) { return t.print(e, `var ${e.name}`), e.value && (t.print(e, " = "), e.value.visitExpression(this, t)), t.println(e, ";"), null; }
    visitTaggedTemplateLiteralExpr(e, t) { let s = e.template.elements; return e.tag.visitExpression(this, t), t.print(e, `(${Cu}(`), t.print(e, `[${s.map(r => qn(r.text, !1)).join(", ")}], `), t.print(e, `[${s.map(r => qn(r.rawText, !1)).join(", ")}])`), e.template.expressions.forEach(r => { t.print(e, ", "), r.visitExpression(this, t); }), t.print(e, ")"), null; }
    visitTemplateLiteralExpr(e, t) { t.print(e, "`"); for (let s = 0; s < e.elements.length; s++) {
        e.elements[s].visitExpression(this, t);
        let r = s < e.expressions.length ? e.expressions[s] : null;
        r !== null && (t.print(r, "${"), r.visitExpression(this, t), t.print(r, "}"));
    } t.print(e, "`"); }
    visitTemplateLiteralElementExpr(e, t) { return t.print(e, e.rawText), null; }
    visitFunctionExpr(e, t) { return t.print(e, `function${e.name ? " " + e.name : ""}(`), this._visitParams(e.params, t), t.println(e, ") {"), t.incIndent(), this.visitAllStatements(e.statements, t), t.decIndent(), t.print(e, "}"), null; }
    visitArrowFunctionExpr(e, t) { if (t.print(e, "("), this._visitParams(e.params, t), t.print(e, ") =>"), Array.isArray(e.body))
        t.println(e, "{"), t.incIndent(), this.visitAllStatements(e.body, t), t.decIndent(), t.print(e, "}");
    else {
        let s = e.body instanceof bt;
        s && t.print(e, "("), e.body.visitExpression(this, t), s && t.print(e, ")");
    } return null; }
    visitDeclareFunctionStmt(e, t) { return t.print(e, `function ${e.name}(`), this._visitParams(e.params, t), t.println(e, ") {"), t.incIndent(), this.visitAllStatements(e.statements, t), t.decIndent(), t.println(e, "}"), null; }
    visitLocalizedString(e, t) { t.print(e, `$localize(${Cu}(`); let s = [e.serializeI18nHead()]; for (let r = 1; r < e.messageParts.length; r++)
        s.push(e.serializeI18nTemplatePart(r)); return t.print(e, `[${s.map(r => qn(r.cooked, !1)).join(", ")}], `), t.print(e, `[${s.map(r => qn(r.raw, !1)).join(", ")}])`), e.expressions.forEach(r => { t.print(e, ", "), r.visitExpression(this, t); }), t.print(e, ")"), null; }
    _visitParams(e, t) { this.visitAllObjects(s => t.print(null, s.name), e, t, ","); }
}, _i;
function qm() { if (_i === void 0) {
    let n = Vi.trustedTypes;
    if (_i = null, n)
        try {
            _i = n.createPolicy("angular#unsafe-jit", { createScript: e => e });
        }
        catch { }
} return _i; }
function Um(n) { return qm()?.createScript(n) || n; }
function Au(...n) {
    if (!Vi.trustedTypes)
        return new Function(...n);
    let e = n.slice(0, -1).join(","), t = n[n.length - 1], s = `(function anonymous(${e}
) { ${t}
})`, r = Vi.eval(Um(s));
    return r.bind === void 0 ? new Function(...n) : (r.toString = () => s, r.bind(Vi));
}
var wl = class {
    evaluateStatements(e, t, s, r) { let i = new El(s), a = Yo.createRoot(); return t.length > 0 && !Hm(t[0]) && (t = [d("use strict").toStmt(), ...t]), i.visitAllStatements(t, a), i.createReturnStmt(a), this.evaluateCode(e, a, i.getArgs(), r); }
    evaluateCode(e, t, s, r) {
        let i = `"use strict";${t.toSource()}
//# sourceURL=${e}`, a = [], o = [];
        for (let c in s)
            o.push(s[c]), a.push(c);
        if (r) {
            let c = Au(...a.concat("return null;")).toString(), h = c.slice(0, c.indexOf("return null;")).split(`
`).length - 1;
            i += `
${t.toSourceMapGenerator(e, h).toJsComment()}`;
        }
        let l = Au(...a.concat(i));
        return this.executeFunction(l, o);
    }
    executeFunction(e, t) { return e(...t); }
}, El = class extends vl {
    refResolver;
    _evalArgNames = [];
    _evalArgValues = [];
    _evalExportedVars = [];
    constructor(e) { super(), this.refResolver = e; }
    createReturnStmt(e) { new xe(new bt(this._evalExportedVars.map(s => new ts(s, D(s), !1)))).visitStatement(this, e); }
    getArgs() { let e = {}; for (let t = 0; t < this._evalArgNames.length; t++)
        e[this._evalArgNames[t]] = this._evalArgValues[t]; return e; }
    visitExternalExpr(e, t) { return this._emitReferenceToExternal(e, this.refResolver.resolveExternalReference(e.value), t), null; }
    visitWrappedNodeExpr(e, t) { return this._emitReferenceToExternal(e, e.node, t), null; }
    visitDeclareVarStmt(e, t) { return e.hasModifier(le.Exported) && this._evalExportedVars.push(e.name), super.visitDeclareVarStmt(e, t); }
    visitDeclareFunctionStmt(e, t) { return e.hasModifier(le.Exported) && this._evalExportedVars.push(e.name), super.visitDeclareFunctionStmt(e, t); }
    _emitReferenceToExternal(e, t, s) { let r = this._evalArgValues.indexOf(t); if (r === -1) {
        r = this._evalArgValues.length, this._evalArgValues.push(t);
        let i = Vm({ reference: t }) || "val";
        this._evalArgNames.push(`jit_${i}_${r}`);
    } s.print(e, this._evalArgNames[r]); }
};
function Hm(n) { return n.isEquivalent(d("use strict").toStmt()); }
function _u(n) { let e = new ae; n.providers !== null && e.set("providers", n.providers), n.imports.length > 0 && e.set("imports", R(n.imports)); let t = y(f.defineInjector).callFn([e.toLiteralMap()], void 0, !0), s = qp(n); return { expression: t, type: s, statements: [] }; }
function qp(n) { return new Je(y(f.InjectorDeclaration, [new Je(n.type.type)])); }
var Sl = class {
    context;
    constructor(e) { this.context = e; }
    resolveExternalReference(e) { if (e.moduleName !== "@angular/core")
        throw new Error(`Cannot resolve external reference to ${e.moduleName}, only references to @angular/core are supported.`); if (!this.context.hasOwnProperty(e.name))
        throw new Error(`No value provided for @angular/core symbol '${e.name}'.`); return this.context[e.name]; }
}, Sa = (function (n) { return n[n.Inline = 0] = "Inline", n[n.SideEffect = 1] = "SideEffect", n[n.Omit = 2] = "Omit", n; })(Sa || {}), Yt = (function (n) { return n[n.Global = 0] = "Global", n[n.Local = 1] = "Local", n; })(Yt || {});
function Wm(n) { let e = [], t = new ae; if (t.set("type", n.type.value), n.kind === Yt.Global && n.bootstrap.length > 0 && t.set("bootstrap", Ct(n.bootstrap, n.containsForwardDecls)), n.selectorScopeMode === Sa.Inline)
    n.declarations.length > 0 && t.set("declarations", Ct(n.declarations, n.containsForwardDecls)), n.imports.length > 0 && t.set("imports", Ct(n.imports, n.containsForwardDecls)), n.exports.length > 0 && t.set("exports", Ct(n.exports, n.containsForwardDecls));
else if (n.selectorScopeMode === Sa.SideEffect) {
    let i = zm(n);
    i !== null && e.push(i);
} n.schemas !== null && n.schemas.length > 0 && t.set("schemas", R(n.schemas.map(i => i.value))), n.id !== null && (t.set("id", n.id), e.push(y(f.registerNgModuleType).callFn([n.type.value, n.id]).toStmt())); let s = y(f.defineNgModule).callFn([t.toLiteralMap()], void 0, !0), r = Up(n); return { expression: s, type: r, statements: e }; }
function jm(n) { let e = new ae; return e.set("type", new H(n.type)), n.bootstrap !== void 0 && e.set("bootstrap", new H(n.bootstrap)), n.declarations !== void 0 && e.set("declarations", new H(n.declarations)), n.imports !== void 0 && e.set("imports", new H(n.imports)), n.exports !== void 0 && e.set("exports", new H(n.exports)), n.schemas !== void 0 && e.set("schemas", new H(n.schemas)), n.id !== void 0 && e.set("id", new H(n.id)), y(f.defineNgModule).callFn([e.toLiteralMap()]); }
function Up(n) { if (n.kind === Yt.Local)
    return new Je(n.type.value); let { type: e, declarations: t, exports: s, imports: r, includeImportTypes: i, publicDeclarationTypes: a } = n; return new Je(y(f.NgModuleDeclaration, [new Je(e.type), a === null ? go(t) : Gm(a), i ? go(r) : kt, go(s)])); }
function zm(n) { let e = new ae; if (n.kind === Yt.Global ? n.declarations.length > 0 && e.set("declarations", Ct(n.declarations, n.containsForwardDecls)) : n.declarationsExpression && e.set("declarations", n.declarationsExpression), n.kind === Yt.Global ? n.imports.length > 0 && e.set("imports", Ct(n.imports, n.containsForwardDecls)) : n.importsExpression && e.set("imports", n.importsExpression), n.kind === Yt.Global ? n.exports.length > 0 && e.set("exports", Ct(n.exports, n.containsForwardDecls)) : n.exportsExpression && e.set("exports", n.exportsExpression), n.kind === Yt.Local && n.bootstrapExpression && e.set("bootstrap", n.bootstrapExpression), Object.keys(e.values).length === 0)
    return null; let t = new Fe(y(f.setNgModuleScope), [n.type.value, e.toLiteralMap()]), s = im(t), r = new Zt([], [s.toStmt()]); return new Fe(r, []).toStmt(); }
function go(n) { let e = n.map(t => Js(t.type)); return n.length > 0 ? we(R(e)) : kt; }
function Gm(n) { let e = n.map(t => Js(t)); return n.length > 0 ? we(R(e)) : kt; }
function ku(n) { let e = []; e.push({ key: "name", value: d(n.pipeName ?? n.name), quoted: !1 }), e.push({ key: "type", value: n.type.value, quoted: !1 }), e.push({ key: "pure", value: d(n.pure), quoted: !1 }), n.isStandalone === !1 && e.push({ key: "standalone", value: d(!1), quoted: !1 }); let t = y(f.definePipe).callFn([he(e)], void 0, !0), s = Hp(n); return { expression: t, type: s, statements: [] }; }
function Hp(n) { return new Je(y(f.PipeDeclaration, [ao(n.type.type, n.typeArgumentCount), new Je(new Ee(n.pipeName)), new Je(new Ee(n.isStandalone))])); }
var Kt = (function (n) { return n[n.Directive = 0] = "Directive", n[n.Pipe = 1] = "Pipe", n[n.NgModule = 2] = "NgModule", n; })(Kt || {}), Xm = new Set(["inherit", "initial", "revert", "unset", "alternate", "alternate-reverse", "normal", "reverse", "backwards", "both", "forwards", "none", "paused", "running", "ease", "ease-in", "ease-in-out", "ease-out", "linear", "step-start", "step-end", "end", "jump-both", "jump-end", "jump-none", "jump-start", "start"]), Ym = ["@media", "@supports", "@document", "@layer", "@container", "@scope", "@starting-style"], xa = class {
    shimCssText(e, t, s = "") {
        let r = [];
        e = e.replace(lg, o => {
            if (o.match(cg))
                r.push(o);
            else {
                let l = o.match(og);
                r.push((l?.join("") ?? "") + `
`);
            }
            return Hc;
        }), e = this._insertDirectives(e);
        let i = this._scopeCssText(e, t, s), a = 0;
        return i.replace(ug, () => r[a++]);
    }
    _insertDirectives(e) { return e = this._insertPolyfillDirectivesInCssText(e), this._insertPolyfillRulesInCssText(e); }
    _scopeKeyframesRelatedCss(e, t) { let s = new Set, r = ki(e, i => this._scopeLocalKeyframeDeclarations(i, t, s)); return ki(r, i => this._scopeAnimationRule(i, t, s)); }
    _scopeLocalKeyframeDeclarations(e, t, s) { return ue(S({}, e), { selector: e.selector.replace(/(^@(?:-webkit-)?keyframes(?:\s+))(['"]?)(.+)\2(\s*)$/, (r, i, a, o, l) => (s.add(Iu(o, a)), `${i}${a}${t}_${o}${a}${l}`)) }); }
    _scopeAnimationKeyframe(e, t, s) { return e.replace(/^(\s*)(['"]?)(.+?)\2(\s*)$/, (r, i, a, o, l) => (o = `${s.has(Iu(o, a)) ? t + "_" : ""}${o}`, `${i}${a}${o}${a}${l}`)); }
    _animationDeclarationKeyframesRe = /(^|\s+|,)(?:(?:(['"])((?:\\\\|\\\2|(?!\2).)+)\2)|(-?[A-Za-z][\w\-]*))(?=[,\s]|$)/g;
    _scopeAnimationRule(e, t, s) { let r = e.content.replace(/((?:^|\s+|;)(?:-webkit-)?animation\s*:\s*),*([^;]+)/g, (i, a, o) => a + o.replace(this._animationDeclarationKeyframesRe, (l, c, h = "", p, g) => p ? `${c}${this._scopeAnimationKeyframe(`${h}${p}${h}`, t, s)}` : Xm.has(g) ? l : `${c}${this._scopeAnimationKeyframe(g, t, s)}`)); return r = r.replace(/((?:^|\s+|;)(?:-webkit-)?animation-name(?:\s*):(?:\s*))([^;]+)/g, (i, a, o) => `${a}${o.split(",").map(l => this._scopeAnimationKeyframe(l, t, s)).join(",")}`), ue(S({}, e), { content: r }); }
    _insertPolyfillDirectivesInCssText(e) { return e.replace(Zm, function (...t) { return t[2] + "{"; }); }
    _insertPolyfillRulesInCssText(e) { return e.replace(Jm, (...t) => { let s = t[0].replace(t[1], "").replace(t[2], ""); return t[4] + s; }); }
    _scopeCssText(e, t, s) {
        let r = this._extractUnscopedRulesFromCssText(e);
        return e = this._insertPolyfillHostInCssText(e), e = this._convertColonHost(e), e = this._convertColonHostContext(e), e = this._convertShadowDOMSelectors(e), t && (e = this._scopeKeyframesRelatedCss(e, t), e = this._scopeSelectors(e, t, s)), e = e + `
` + r, e.trim();
    }
    _extractUnscopedRulesFromCssText(e) {
        let t = "", s;
        for (Tu.lastIndex = 0; (s = Tu.exec(e)) !== null;) {
            let r = s[0].replace(s[2], "").replace(s[1], s[4]);
            t += r + `

`;
        }
        return t;
    }
    _convertColonHost(e) { return e.replace(Km, (t, s, r) => { if (s) {
        let i = [], a = s.split(",").map(o => o.trim());
        for (let o of a) {
            if (!o)
                break;
            let l = pn + o.replace(ya, "") + r;
            i.push(l);
        }
        return i.join(",");
    }
    else
        return pn + r; }); }
    _convertColonHostContext(e) { let t = e.length, s = 0, r = 0, i = ""; for (let a = 0; a < t; a++) {
        let o = e[a];
        if (o === "," && s === 0) {
            i += this._convertColonHostContextInSelectorPart(e.slice(r, a)) + ",", r = a + 1;
            continue;
        }
        if (a === t - 1) {
            i += this._convertColonHostContextInSelectorPart(e.slice(r));
            break;
        }
        o === "(" ? s++ : o === ")" && s--;
    } return i; }
    _convertColonHostContextInSelectorPart(e) { return e.replace(eg, (t, s) => { let r = [[]], i; for (; i = tg.exec(t);) {
        let a = (i[1] ?? "").trim().split(",").map(l => l.trim()).filter(l => l !== ""), o = r.length;
        xg(r, a.length);
        for (let l = 0; l < a.length; l++)
            for (let c = 0; c < o; c++)
                r[c + l * o].push(a[l]);
        t = i[2];
    } return r.map(a => Sg(a, t, s)).join(", "); }); }
    _convertShadowDOMSelectors(e) { return sg.reduce((t, s) => t.replace(s, " "), e); }
    _scopeSelectors(e, t, s) { return ki(e, r => { let i = r.selector, a = r.content; return r.selector[0] !== "@" ? i = this._scopeSelector({ selector: i, scopeSelector: t, hostSelector: s, isParentSelector: !0 }) : Ym.some(o => r.selector.startsWith(o)) ? a = this._scopeSelectors(r.content, t, s) : (r.selector.startsWith("@font-face") || r.selector.startsWith("@page")) && (a = this._stripScopingSelectors(r.content)), new ti(i, a); }); }
    _stripScopingSelectors(e) { return ki(e, t => { let s = t.selector.replace(bu, " ").replace(vo, " "); return new ti(s, t.content); }); }
    _safeSelector;
    _shouldScopeIndicator;
    _scopeSelector({ selector: e, scopeSelector: t, hostSelector: s, isParentSelector: r = !1 }) { let i = / ?,(?!(?:[^)(]*(?:\([^)(]*(?:\([^)(]*(?:\([^)(]*\)[^)(]*)*\)[^)(]*)*\)[^)(]*)*\))) ?/; return e.split(i).map(a => a.split(bu)).map(a => { let [o, ...l] = a; return [(h => this._selectorNeedsScoping(h, t) ? this._applySelectorScope({ selector: h, scopeSelector: t, hostSelector: s, isParentSelector: r }) : h)(o), ...l].join(" "); }).join(", "); }
    _selectorNeedsScoping(e, t) { return !this._makeScopeMatcher(t).test(e); }
    _makeScopeMatcher(e) { let t = /\[/g, s = /\]/g; return e = e.replace(t, "\\[").replace(s, "\\]"), new RegExp("^(" + e + ")" + rg, "m"); }
    _applySimpleSelectorScope(e, t, s) { if (Cs.lastIndex = 0, Cs.test(e)) {
        let r = `[${s}]`, i = e;
        for (; i.match(vo);)
            i = i.replace(vo, (a, o) => o.replace(/([^:\)]*)(:*)(.*)/, (l, c, h, p) => c + r + h + p));
        return i.replace(Cs, r);
    } return t + " " + e; }
    _applySelectorScope({ selector: e, scopeSelector: t, hostSelector: s, isParentSelector: r }) { let i = /\[is=([^\]]*)\]/g; t = t.replace(i, (C, ...b) => b[0]); let a = `[${t}]`, o = C => { let b = C.trim(); if (!b)
        return C; if (C.includes(pn)) {
        if (b = this._applySimpleSelectorScope(C, t, s), !C.match(ng)) {
            let [A, F, ee, V] = b.match(/([^:]*)(:*)([\s\S]*)/);
            b = F + a + ee + V;
        }
    }
    else {
        let A = C.replace(Cs, "");
        if (A.length > 0) {
            let F = A.match(/([^:]*)(:*)([\s\S]*)/);
            F && (b = F[1] + a + F[2] + F[3]);
        }
    } return b; }, l = C => { let b = "", A = [], F; for (; (F = ar.exec(C)) !== null;) {
        let ee = 1, V = ar.lastIndex;
        for (; V < C.length;) {
            let de = C[V];
            if (V++, de === "(") {
                ee++;
                continue;
            }
            if (de === ")") {
                if (ee--, ee === 0)
                    break;
                continue;
            }
        }
        A.push(`${F[0]}${C.slice(ar.lastIndex, V)}`), ar.lastIndex = V;
    } return A.join("") === C ? b = A.map(ee => { let [V] = ee.match(ar) ?? [], de = ee.slice(V?.length, -1); de.includes(pn) && (this._shouldScopeIndicator = !0); let rr = this._scopeSelector({ selector: de, scopeSelector: t, hostSelector: s }); return `${V}${rr})`; }).join("") : (this._shouldScopeIndicator = this._shouldScopeIndicator || C.includes(pn), b = this._shouldScopeIndicator ? o(C) : C), b; }; r && (this._safeSelector = new xl(e), e = this._safeSelector.content()); let c = "", h = 0, p, g = /( |>|\+|~(?!=))(?!([^)(]*(?:\([^)(]*(?:\([^)(]*(?:\([^)(]*\)[^)(]*)*\)[^)(]*)*\)[^)(]*)*\)))\s*/g, v = e.includes(pn); for ((r || this._shouldScopeIndicator) && (this._shouldScopeIndicator = !v); (p = g.exec(e)) !== null;) {
        let C = p[1], b = e.slice(h, p.index);
        if (b.match(/__esc-ph-(\d+)__/) && e[p.index + 1]?.match(/[a-fA-F\d]/))
            continue;
        let A = l(b);
        c += `${A} ${C} `, h = g.lastIndex;
    } let E = e.substring(h); return c += l(E), this._safeSelector.restore(c); }
    _insertPolyfillHostInCssText(e) { return e.replace(ag, Wp).replace(ig, ya); }
}, xl = class {
    placeholders = [];
    index = 0;
    _content;
    constructor(e) { e = this._escapeRegexMatches(e, /(\[[^\]]*\])/g), e = e.replace(/(\\.)/g, (t, s) => { let r = `__esc-ph-${this.index}__`; return this.placeholders.push(s), this.index++, r; }), this._content = e.replace(/(:nth-[-\w]+)(\([^)]+\))/g, (t, s, r) => { let i = `__ph-${this.index}__`; return this.placeholders.push(r), this.index++, s + i; }); }
    restore(e) { return e.replace(/__(?:ph|esc-ph)-(\d+)__/g, (t, s) => this.placeholders[+s]); }
    content() { return this._content; }
    _escapeRegexMatches(e, t) { return e.replace(t, (s, r) => { let i = `__ph-${this.index}__`; return this.placeholders.push(r), this.index++, i; }); }
}, Qm = "(:(where|is)\\()?", ar = /:(where|is)\(/gi, Zm = /polyfill-next-selector[^}]*content:[\s]*?(['"])(.*?)\1[;\s]*}([^{]*?){/gim, Jm = /(polyfill-rule)[^}]*(content:[\s]*(['"])(.*?)\3)[;\s]*[^}]*}/gim, Tu = /(polyfill-unscoped-rule)[^}]*(content:[\s]*(['"])(.*?)\3)[;\s]*[^}]*}/gim, ya = "-shadowcsshost", Wp = "-shadowcsscontext", jp = "(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))", Km = new RegExp(ya + jp + "?([^,{]*)", "gim"), zp = Wp + jp + "?([^{]*)", eg = new RegExp(`${Qm}(${zp})`, "gim"), tg = new RegExp(zp, "im"), pn = ya + "-no-combinator", ng = new RegExp(`${pn}(?![^(]*\\))`, "g"), vo = /-shadowcsshost-no-combinator([^\s,]*)/, sg = [/::shadow/g, /::content/g, /\/shadow-deep\//g, /\/shadow\//g], bu = /(?:>>>)|(?:\/deep\/)|(?:::ng-deep)/g, rg = "([>\\s~+[.,{:][\\s\\S]*)?$", Cs = /-shadowcsshost/gim, ig = /:host/gim, ag = /:host-context/gim, og = /\r?\n/g, lg = /\/\*[\s\S]*?\*\//g, cg = /\/\*\s*#\s*source(Mapping)?URL=/g, Hc = "%COMMENT%", ug = new RegExp(Hc, "g"), wo = "%BLOCK%", hg = new RegExp(`(\\s*(?:${Hc}\\s*)*)([^;\\{\\}]+?)(\\s*)((?:{%BLOCK%}?\\s*;?)|(?:\\s*;))`, "g"), pg = new Map([["{", "}"]]), Gp = "%COMMA_IN_PLACEHOLDER%", Xp = "%SEMI_IN_PLACEHOLDER%", Yp = "%COLON_IN_PLACEHOLDER%", fg = new RegExp(Gp, "g"), dg = new RegExp(Xp, "g"), mg = new RegExp(Yp, "g"), ti = class {
    selector;
    content;
    constructor(e, t) { this.selector = e, this.content = t; }
};
function ki(n, e) { let t = wg(n), s = gg(t, pg, wo), r = 0, i = s.escapedString.replace(hg, (...a) => { let o = a[2], l = "", c = a[4], h = ""; c && c.startsWith("{" + wo) && (l = s.blocks[r++], c = c.substring(wo.length + 1), h = "{"); let p = e(new ti(o, l)); return `${a[1]}${p.selector}${a[3]}${h}${p.content}${c}`; }); return Eg(i); }
var yl = class {
    escapedString;
    blocks;
    constructor(e, t) { this.escapedString = e, this.blocks = t; }
};
function gg(n, e, t) { let s = [], r = [], i = 0, a = 0, o = -1, l, c; for (let h = 0; h < n.length; h++) {
    let p = n[h];
    p === "\\" ? h++ : p === c ? (i--, i === 0 && (r.push(n.substring(o, h)), s.push(t), a = h, o = -1, l = c = void 0)) : p === l ? i++ : i === 0 && e.has(p) && (l = p, c = e.get(p), i = 1, o = h + 1, s.push(n.substring(a, o)));
} return o !== -1 ? (r.push(n.substring(o)), s.push(t)) : s.push(n.substring(a)), new yl(s.join(""), r); }
var vg = { ";": Xp, ",": Gp, ":": Yp };
function wg(n) { let e = n, t = null; for (let s = 0; s < e.length; s++) {
    let r = e[s];
    if (r === "\\")
        s++;
    else if (t !== null)
        if (r === t)
            t = null;
        else {
            let i = vg[r];
            i && (e = `${e.substr(0, s)}${i}${e.substr(s + 1)}`, s += i.length - 1);
        }
    else
        (r === "'" || r === '"') && (t = r);
} return e; }
function Eg(n) { let e = n.replace(fg, ","); return e = e.replace(dg, ";"), e = e.replace(mg, ":"), e; }
function Iu(n, e) { return e ? n.replace(/((?:^|[^\\])(?:\\\\)*)\\(?=['"])/g, "$1") : n; }
function Sg(n, e, t = "") { let s = pn; Cs.lastIndex = 0; let r = Cs.test(e); if (n.length === 0)
    return s + e; let i = [n.pop() || ""]; for (; n.length > 0;) {
    let a = i.length, o = n.pop();
    for (let l = 0; l < a; l++) {
        let c = i[l];
        i[a * 2 + l] = c + " " + o, i[a + l] = o + " " + c, i[l] = o + c;
    }
} return i.map(a => r ? `${t}${a}${e}` : `${t}${a}${s}${e}, ${t}${a} ${s}${e}`).join(","); }
function xg(n, e) { let t = n.length; for (let s = 1; s < e; s++)
    for (let r = 0; r < t; r++)
        n[r + s * t] = n[r].slice(0); }
var u = (function (n) { return n[n.ListEnd = 0] = "ListEnd", n[n.Statement = 1] = "Statement", n[n.Variable = 2] = "Variable", n[n.ElementStart = 3] = "ElementStart", n[n.Element = 4] = "Element", n[n.Template = 5] = "Template", n[n.ElementEnd = 6] = "ElementEnd", n[n.ContainerStart = 7] = "ContainerStart", n[n.Container = 8] = "Container", n[n.ContainerEnd = 9] = "ContainerEnd", n[n.DisableBindings = 10] = "DisableBindings", n[n.ConditionalCreate = 11] = "ConditionalCreate", n[n.ConditionalBranchCreate = 12] = "ConditionalBranchCreate", n[n.Conditional = 13] = "Conditional", n[n.EnableBindings = 14] = "EnableBindings", n[n.Text = 15] = "Text", n[n.Listener = 16] = "Listener", n[n.InterpolateText = 17] = "InterpolateText", n[n.Binding = 18] = "Binding", n[n.Property = 19] = "Property", n[n.StyleProp = 20] = "StyleProp", n[n.ClassProp = 21] = "ClassProp", n[n.StyleMap = 22] = "StyleMap", n[n.ClassMap = 23] = "ClassMap", n[n.Advance = 24] = "Advance", n[n.Pipe = 25] = "Pipe", n[n.Attribute = 26] = "Attribute", n[n.ExtractedAttribute = 27] = "ExtractedAttribute", n[n.Defer = 28] = "Defer", n[n.DeferOn = 29] = "DeferOn", n[n.DeferWhen = 30] = "DeferWhen", n[n.I18nMessage = 31] = "I18nMessage", n[n.DomProperty = 32] = "DomProperty", n[n.Namespace = 33] = "Namespace", n[n.ProjectionDef = 34] = "ProjectionDef", n[n.Projection = 35] = "Projection", n[n.RepeaterCreate = 36] = "RepeaterCreate", n[n.Repeater = 37] = "Repeater", n[n.TwoWayProperty = 38] = "TwoWayProperty", n[n.TwoWayListener = 39] = "TwoWayListener", n[n.DeclareLet = 40] = "DeclareLet", n[n.StoreLet = 41] = "StoreLet", n[n.I18nStart = 42] = "I18nStart", n[n.I18n = 43] = "I18n", n[n.I18nEnd = 44] = "I18nEnd", n[n.I18nExpression = 45] = "I18nExpression", n[n.I18nApply = 46] = "I18nApply", n[n.IcuStart = 47] = "IcuStart", n[n.IcuEnd = 48] = "IcuEnd", n[n.IcuPlaceholder = 49] = "IcuPlaceholder", n[n.I18nContext = 50] = "I18nContext", n[n.I18nAttributes = 51] = "I18nAttributes", n[n.SourceLocation = 52] = "SourceLocation", n[n.Animation = 53] = "Animation", n[n.AnimationString = 54] = "AnimationString", n[n.AnimationBinding = 55] = "AnimationBinding", n[n.AnimationListener = 56] = "AnimationListener", n; })(u || {}), I = (function (n) { return n[n.LexicalRead = 0] = "LexicalRead", n[n.Context = 1] = "Context", n[n.TrackContext = 2] = "TrackContext", n[n.ReadVariable = 3] = "ReadVariable", n[n.NextContext = 4] = "NextContext", n[n.Reference = 5] = "Reference", n[n.StoreLet = 6] = "StoreLet", n[n.ContextLetReference = 7] = "ContextLetReference", n[n.GetCurrentView = 8] = "GetCurrentView", n[n.RestoreView = 9] = "RestoreView", n[n.ResetView = 10] = "ResetView", n[n.PureFunctionExpr = 11] = "PureFunctionExpr", n[n.PureFunctionParameterExpr = 12] = "PureFunctionParameterExpr", n[n.PipeBinding = 13] = "PipeBinding", n[n.PipeBindingVariadic = 14] = "PipeBindingVariadic", n[n.SafePropertyRead = 15] = "SafePropertyRead", n[n.SafeKeyedRead = 16] = "SafeKeyedRead", n[n.SafeInvokeFunction = 17] = "SafeInvokeFunction", n[n.SafeTernaryExpr = 18] = "SafeTernaryExpr", n[n.EmptyExpr = 19] = "EmptyExpr", n[n.AssignTemporaryExpr = 20] = "AssignTemporaryExpr", n[n.ReadTemporaryExpr = 21] = "ReadTemporaryExpr", n[n.SlotLiteralExpr = 22] = "SlotLiteralExpr", n[n.ConditionalCase = 23] = "ConditionalCase", n[n.ConstCollected = 24] = "ConstCollected", n[n.TwoWayBindingSet = 25] = "TwoWayBindingSet", n; })(I || {}), lt = (function (n) { return n[n.None = 0] = "None", n[n.AlwaysInline = 1] = "AlwaysInline", n; })(lt || {}), Se = (function (n) { return n[n.Context = 0] = "Context", n[n.Identifier = 1] = "Identifier", n[n.SavedView = 2] = "SavedView", n[n.Alias = 3] = "Alias", n; })(Se || {}), st = (function (n) { return n[n.Normal = 0] = "Normal", n[n.TemplateDefinitionBuilder = 1] = "TemplateDefinitionBuilder", n; })(st || {}), T = (function (n) { return n[n.Attribute = 0] = "Attribute", n[n.ClassName = 1] = "ClassName", n[n.StyleProperty = 2] = "StyleProperty", n[n.Property = 3] = "Property", n[n.Template = 4] = "Template", n[n.I18n = 5] = "I18n", n[n.LegacyAnimation = 6] = "LegacyAnimation", n[n.TwoWayProperty = 7] = "TwoWayProperty", n[n.Animation = 8] = "Animation", n; })(T || {}), ni = (function (n) { return n[n.Creation = 0] = "Creation", n[n.Postproccessing = 1] = "Postproccessing", n; })(ni || {}), er = (function (n) { return n[n.I18nText = 0] = "I18nText", n[n.I18nAttribute = 1] = "I18nAttribute", n; })(er || {}), te = (function (n) { return n[n.None = 0] = "None", n[n.ElementTag = 1] = "ElementTag", n[n.TemplateTag = 2] = "TemplateTag", n[n.OpenTag = 4] = "OpenTag", n[n.CloseTag = 8] = "CloseTag", n[n.ExpressionIndex = 16] = "ExpressionIndex", n; })(te || {}), be = (function (n) { return n[n.HTML = 0] = "HTML", n[n.SVG = 1] = "SVG", n[n.Math = 2] = "Math", n; })(be || {}), Z = (function (n) { return n[n.Idle = 0] = "Idle", n[n.Immediate = 1] = "Immediate", n[n.Timer = 2] = "Timer", n[n.Hover = 3] = "Hover", n[n.Interaction = 4] = "Interaction", n[n.Viewport = 5] = "Viewport", n[n.Never = 6] = "Never", n; })(Z || {}), Wn = (function (n) { return n[n.RootI18n = 0] = "RootI18n", n[n.Icu = 1] = "Icu", n[n.Attr = 2] = "Attr", n; })(Wn || {}), Ue = (function (n) { return n[n.NgTemplate = 0] = "NgTemplate", n[n.Structural = 1] = "Structural", n[n.Block = 2] = "Block", n; })(Ue || {}), Qp = Symbol("ConsumesSlot"), Wc = Symbol("DependsOnSlotContext"), tr = Symbol("ConsumesVars"), uo = Symbol("UsesVarOffset"), vt = { [Qp]: !0, numSlotsUsed: 1 }, rt = { [Wc]: !0 }, je = { [tr]: !0 };
function nr(n) { return n[Qp] === !0; }
function si(n) { return n[Wc] === !0; }
function Eo(n) { return n[tr] === !0; }
function Nu(n) { return n[uo] === !0; }
function gt(n) { return S({ kind: u.Statement, statement: n }, B); }
function dn(n, e, t, s) { return S({ kind: u.Variable, xref: n, variable: e, initializer: t, flags: s }, B); }
var B = { debugListId: null, prev: null, next: null };
function yg(n, e, t) { return S(S(S({ kind: u.InterpolateText, target: n, interpolation: e, sourceSpan: t }, rt), je), B); }
var oe = class {
    strings;
    expressions;
    i18nPlaceholders;
    constructor(e, t, s) { if (this.strings = e, this.expressions = t, this.i18nPlaceholders = s, s.length !== 0 && s.length !== t.length)
        throw new Error(`Expected ${t.length} placeholders to match interpolation expression count, but got ${s.length}`); }
};
function ls(n, e, t, s, r, i, a, o, l, c, h) { return S({ kind: u.Binding, bindingKind: e, target: n, name: t, expression: s, unit: r, securityContext: i, isTextAttribute: a, isStructuralTemplateAttribute: o, templateKind: l, i18nContext: null, i18nMessage: c, sourceSpan: h }, B); }
function Cg(n, e, t, s, r, i, a, o, l, c) { return S(S(S({ kind: u.Property, target: n, name: e, expression: t, bindingKind: s, securityContext: r, sanitizer: null, isStructuralTemplateAttribute: i, templateKind: a, i18nContext: o, i18nMessage: l, sourceSpan: c }, rt), je), B); }
function Ag(n, e, t, s, r, i, a, o, l) { return S(S(S({ kind: u.TwoWayProperty, target: n, name: e, expression: t, securityContext: s, sanitizer: null, isStructuralTemplateAttribute: r, templateKind: i, i18nContext: a, i18nMessage: o, sourceSpan: l }, rt), je), B); }
function _g(n, e, t, s, r) { return S(S(S({ kind: u.StyleProp, target: n, name: e, expression: t, unit: s, sourceSpan: r }, rt), je), B); }
function kg(n, e, t, s) { return S(S(S({ kind: u.ClassProp, target: n, name: e, expression: t, sourceSpan: s }, rt), je), B); }
function Tg(n, e, t) { return S(S(S({ kind: u.StyleMap, target: n, expression: e, sourceSpan: t }, rt), je), B); }
function bg(n, e, t) { return S(S(S({ kind: u.ClassMap, target: n, expression: e, sourceSpan: t }, rt), je), B); }
function Du(n, e, t, s, r, i, a, o, l, c) { return S(S(S({ kind: u.Attribute, target: n, namespace: e, name: t, expression: s, securityContext: r, sanitizer: null, isTextAttribute: i, isStructuralTemplateAttribute: a, templateKind: o, i18nContext: null, i18nMessage: l, sourceSpan: c }, rt), je), B); }
function Ig(n, e) { return S({ kind: u.Advance, delta: n, sourceSpan: e }, B); }
function Zp(n, e, t, s) { return S(S(S({ kind: u.Conditional, target: n, test: e, conditions: t, processed: null, sourceSpan: s, contextValue: null }, B), rt), je); }
function Ng(n, e, t, s) { return S(S({ kind: u.Repeater, target: n, targetSlot: e, collection: t, sourceSpan: s }, B), rt); }
function Pu(n, e, t, s, r, i, a) { return S({ kind: u.AnimationBinding, name: n, target: e, animationKind: t, expression: s, i18nMessage: null, securityContext: r, sanitizer: null, sourceSpan: i, animationBindingKind: a }, B); }
function Dg(n, e, t, s) { return S(S(S({ kind: u.DeferWhen, target: n, expr: e, modifier: t, sourceSpan: s }, B), rt), je); }
function Jp(n, e, t, s, r, i, a, o, l, c, h) { return S(S(S({ kind: u.I18nExpression, context: n, target: e, i18nOwner: t, handle: s, expression: r, icuPlaceholder: i, i18nPlaceholder: a, resolutionTime: o, usage: l, name: c, sourceSpan: h }, B), je), rt); }
function Pg(n, e, t) { return S({ kind: u.I18nApply, owner: n, handle: e, sourceSpan: t }, B); }
function Lg(n, e, t, s) { return S(S(S({ kind: u.StoreLet, target: n, declaredName: e, value: t, sourceSpan: s }, rt), je), B); }
function Ht(n) { return n instanceof K; }
var K = class extends Y {
    constructor(e = null) { super(null, e); }
}, Ae = class n extends K {
    name;
    kind = I.LexicalRead;
    constructor(e) { super(), this.name = e; }
    visitExpression(e, t) { }
    isEquivalent(e) { return this.name === e.name; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n(this.name); }
}, Ca = class n extends K {
    target;
    targetSlot;
    offset;
    kind = I.Reference;
    constructor(e, t, s) { super(), this.target = e, this.targetSlot = t, this.offset = s; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.target === this.target; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n(this.target, this.targetSlot, this.offset); }
}, ri = class n extends K {
    target;
    value;
    sourceSpan;
    kind = I.StoreLet;
    [tr] = !0;
    [Wc] = !0;
    constructor(e, t, s) { super(), this.target = e, this.value = t, this.sourceSpan = s; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.target === this.target && e.value.isEquivalent(this.value); }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.value = k(this.value, e, t); }
    clone() { return new n(this.target, this.value, this.sourceSpan); }
}, ii = class n extends K {
    target;
    targetSlot;
    kind = I.ContextLetReference;
    constructor(e, t) { super(), this.target = e, this.targetSlot = t; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.target === this.target; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n(this.target, this.targetSlot); }
}, bn = class n extends K {
    view;
    kind = I.Context;
    constructor(e) { super(), this.view = e; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.view === this.view; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n(this.view); }
}, Cl = class n extends K {
    view;
    kind = I.TrackContext;
    constructor(e) { super(), this.view = e; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.view === this.view; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n(this.view); }
}, Aa = class n extends K {
    kind = I.NextContext;
    steps = 1;
    constructor() { super(); }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.steps === this.steps; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { let e = new n; return e.steps = this.steps, e; }
}, Al = class n extends K {
    kind = I.GetCurrentView;
    constructor() { super(); }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n; }
}, _a = class n extends K {
    view;
    kind = I.RestoreView;
    constructor(e) { super(), this.view = e; }
    visitExpression(e, t) { typeof this.view != "number" && this.view.visitExpression(e, t); }
    isEquivalent(e) { return !(e instanceof n) || typeof e.view != typeof this.view ? !1 : typeof this.view == "number" ? this.view === e.view : this.view.isEquivalent(e.view); }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { typeof this.view != "number" && (this.view = k(this.view, e, t)); }
    clone() { return new n(this.view instanceof Y ? this.view.clone() : this.view); }
}, _l = class n extends K {
    expr;
    kind = I.ResetView;
    constructor(e) { super(), this.expr = e; }
    visitExpression(e, t) { this.expr.visitExpression(e, t); }
    isEquivalent(e) { return e instanceof n && this.expr.isEquivalent(e.expr); }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.expr = k(this.expr, e, t); }
    clone() { return new n(this.expr.clone()); }
}, ka = class n extends K {
    target;
    value;
    kind = I.TwoWayBindingSet;
    constructor(e, t) { super(), this.target = e, this.value = t; }
    visitExpression(e, t) { this.target.visitExpression(e, t), this.value.visitExpression(e, t); }
    isEquivalent(e) { return this.target.isEquivalent(e.target) && this.value.isEquivalent(e.value); }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.target = k(this.target, e, t), this.value = k(this.value, e, t); }
    clone() { return new n(this.target, this.value); }
}, en = class n extends K {
    xref;
    kind = I.ReadVariable;
    name = null;
    constructor(e) { super(), this.xref = e; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.xref === this.xref; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { let e = new n(this.xref); return e.name = this.name, e; }
}, cs = class n extends K {
    kind = I.PureFunctionExpr;
    [tr] = !0;
    [uo] = !0;
    varOffset = null;
    body;
    args;
    fn = null;
    constructor(e, t) { super(), this.body = e, this.args = t; }
    visitExpression(e, t) { this.body?.visitExpression(e, t); for (let s of this.args)
        s.visitExpression(e, t); }
    isEquivalent(e) { return !(e instanceof n) || e.args.length !== this.args.length ? !1 : e.body !== null && this.body !== null && e.body.isEquivalent(this.body) && e.args.every((t, s) => t.isEquivalent(this.args[s])); }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.body !== null ? this.body = k(this.body, e, t | X.InChildOperation) : this.fn !== null && (this.fn = k(this.fn, e, t)); for (let s = 0; s < this.args.length; s++)
        this.args[s] = k(this.args[s], e, t); }
    clone() { let e = new n(this.body?.clone() ?? null, this.args.map(t => t.clone())); return e.fn = this.fn?.clone() ?? null, e.varOffset = this.varOffset, e; }
}, Ws = class n extends K {
    index;
    kind = I.PureFunctionParameterExpr;
    constructor(e) { super(), this.index = e; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.index === this.index; }
    isConstant() { return !0; }
    transformInternalExpressions() { }
    clone() { return new n(this.index); }
}, us = class n extends K {
    target;
    targetSlot;
    name;
    args;
    kind = I.PipeBinding;
    [tr] = !0;
    [uo] = !0;
    varOffset = null;
    constructor(e, t, s, r) { super(), this.target = e, this.targetSlot = t, this.name = s, this.args = r; }
    visitExpression(e, t) { for (let s of this.args)
        s.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { for (let s = 0; s < this.args.length; s++)
        this.args[s] = k(this.args[s], e, t); }
    clone() { let e = new n(this.target, this.targetSlot, this.name, this.args.map(t => t.clone())); return e.varOffset = this.varOffset, e; }
}, ai = class n extends K {
    target;
    targetSlot;
    name;
    args;
    numArgs;
    kind = I.PipeBindingVariadic;
    [tr] = !0;
    [uo] = !0;
    varOffset = null;
    constructor(e, t, s, r, i) { super(), this.target = e, this.targetSlot = t, this.name = s, this.args = r, this.numArgs = i; }
    visitExpression(e, t) { this.args.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.args = k(this.args, e, t); }
    clone() { let e = new n(this.target, this.targetSlot, this.name, this.args.clone(), this.numArgs); return e.varOffset = this.varOffset, e; }
}, js = class n extends K {
    receiver;
    name;
    kind = I.SafePropertyRead;
    constructor(e, t) { super(), this.receiver = e, this.name = t; }
    get index() { return this.name; }
    visitExpression(e, t) { this.receiver.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.receiver = k(this.receiver, e, t); }
    clone() { return new n(this.receiver.clone(), this.name); }
}, zs = class n extends K {
    receiver;
    index;
    kind = I.SafeKeyedRead;
    constructor(e, t, s) { super(s), this.receiver = e, this.index = t; }
    visitExpression(e, t) { this.receiver.visitExpression(e, t), this.index.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.receiver = k(this.receiver, e, t), this.index = k(this.index, e, t); }
    clone() { return new n(this.receiver.clone(), this.index.clone(), this.sourceSpan); }
}, hs = class n extends K {
    receiver;
    args;
    kind = I.SafeInvokeFunction;
    constructor(e, t) { super(), this.receiver = e, this.args = t; }
    visitExpression(e, t) { this.receiver.visitExpression(e, t); for (let s of this.args)
        s.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.receiver = k(this.receiver, e, t); for (let s = 0; s < this.args.length; s++)
        this.args[s] = k(this.args[s], e, t); }
    clone() { return new n(this.receiver.clone(), this.args.map(e => e.clone())); }
}, Gs = class n extends K {
    guard;
    expr;
    kind = I.SafeTernaryExpr;
    constructor(e, t) { super(), this.guard = e, this.expr = t; }
    visitExpression(e, t) { this.guard.visitExpression(e, t), this.expr.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.guard = k(this.guard, e, t), this.expr = k(this.expr, e, t); }
    clone() { return new n(this.guard.clone(), this.expr.clone()); }
}, oi = class n extends K {
    kind = I.EmptyExpr;
    visitExpression(e, t) { }
    isEquivalent(e) { return e instanceof n; }
    isConstant() { return !0; }
    clone() { return new n; }
    transformInternalExpressions() { }
}, Wt = class n extends K {
    expr;
    xref;
    kind = I.AssignTemporaryExpr;
    name = null;
    constructor(e, t) { super(), this.expr = e, this.xref = t; }
    visitExpression(e, t) { this.expr.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.expr = k(this.expr, e, t); }
    clone() { let e = new n(this.expr.clone(), this.xref); return e.name = this.name, e; }
}, In = class n extends K {
    xref;
    kind = I.ReadTemporaryExpr;
    name = null;
    constructor(e) { super(), this.xref = e; }
    visitExpression(e, t) { }
    isEquivalent() { return this.xref === this.xref; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { }
    clone() { let e = new n(this.xref); return e.name = this.name, e; }
}, Ta = class n extends K {
    slot;
    kind = I.SlotLiteralExpr;
    constructor(e) { super(), this.slot = e; }
    visitExpression(e, t) { }
    isEquivalent(e) { return e instanceof n && e.slot === this.slot; }
    isConstant() { return !0; }
    clone() { return new n(this.slot); }
    transformInternalExpressions() { }
}, ba = class n extends K {
    expr;
    target;
    targetSlot;
    alias;
    kind = I.ConditionalCase;
    constructor(e, t, s, r = null) { super(), this.expr = e, this.target = t, this.targetSlot = s, this.alias = r; }
    visitExpression(e, t) { this.expr !== null && this.expr.visitExpression(e, t); }
    isEquivalent(e) { return e instanceof n && e.expr === this.expr; }
    isConstant() { return !0; }
    clone() { return new n(this.expr, this.target, this.targetSlot); }
    transformInternalExpressions(e, t) { this.expr !== null && (this.expr = k(this.expr, e, t)); }
}, li = class n extends K {
    expr;
    kind = I.ConstCollected;
    constructor(e) { super(), this.expr = e; }
    transformInternalExpressions(e, t) { this.expr = e(this.expr, t); }
    visitExpression(e, t) { this.expr.visitExpression(e, t); }
    isEquivalent(e) { return e instanceof n ? this.expr.isEquivalent(e.expr) : !1; }
    isConstant() { return this.expr.isConstant(); }
    clone() { return new n(this.expr); }
};
function ye(n, e) { fe(n, (t, s) => (e(t, s), t), X.None); }
var X = (function (n) { return n[n.None = 0] = "None", n[n.InChildOperation = 1] = "InChildOperation", n; })(X || {});
function So(n, e, t) { for (let s = 0; s < n.expressions.length; s++)
    n.expressions[s] = k(n.expressions[s], e, t); }
function fe(n, e, t) { switch (n.kind) {
    case u.StyleProp:
    case u.StyleMap:
    case u.ClassProp:
    case u.ClassMap:
    case u.AnimationString:
    case u.AnimationBinding:
    case u.Binding:
        n.expression instanceof oe ? So(n.expression, e, t) : n.expression = k(n.expression, e, t);
        break;
    case u.Property:
    case u.DomProperty:
    case u.Attribute:
        n.expression instanceof oe ? So(n.expression, e, t) : n.expression = k(n.expression, e, t), n.sanitizer = n.sanitizer && k(n.sanitizer, e, t);
        break;
    case u.TwoWayProperty:
        n.expression = k(n.expression, e, t), n.sanitizer = n.sanitizer && k(n.sanitizer, e, t);
        break;
    case u.I18nExpression:
        n.expression = k(n.expression, e, t);
        break;
    case u.InterpolateText:
        So(n.interpolation, e, t);
        break;
    case u.Statement:
        Ia(n.statement, e, t);
        break;
    case u.Variable:
        n.initializer = k(n.initializer, e, t);
        break;
    case u.Conditional:
        for (let s of n.conditions)
            s.expr !== null && (s.expr = k(s.expr, e, t));
        n.processed !== null && (n.processed = k(n.processed, e, t)), n.contextValue !== null && (n.contextValue = k(n.contextValue, e, t));
        break;
    case u.Animation:
    case u.AnimationListener:
    case u.Listener:
    case u.TwoWayListener:
        for (let s of n.handlerOps)
            fe(s, e, t | X.InChildOperation);
        break;
    case u.ExtractedAttribute:
        n.expression = n.expression && k(n.expression, e, t), n.trustedValueFn = n.trustedValueFn && k(n.trustedValueFn, e, t);
        break;
    case u.RepeaterCreate:
        if (n.trackByOps === null)
            n.track = k(n.track, e, t);
        else
            for (let s of n.trackByOps)
                fe(s, e, t | X.InChildOperation);
        n.trackByFn !== null && (n.trackByFn = k(n.trackByFn, e, t));
        break;
    case u.Repeater:
        n.collection = k(n.collection, e, t);
        break;
    case u.Defer:
        n.loadingConfig !== null && (n.loadingConfig = k(n.loadingConfig, e, t)), n.placeholderConfig !== null && (n.placeholderConfig = k(n.placeholderConfig, e, t)), n.resolverFn !== null && (n.resolverFn = k(n.resolverFn, e, t));
        break;
    case u.I18nMessage:
        for (let [s, r] of n.params)
            n.params.set(s, k(r, e, t));
        for (let [s, r] of n.postprocessingParams)
            n.postprocessingParams.set(s, k(r, e, t));
        break;
    case u.DeferWhen:
        n.expr = k(n.expr, e, t);
        break;
    case u.StoreLet:
        n.value = k(n.value, e, t);
        break;
    case u.Advance:
    case u.Container:
    case u.ContainerEnd:
    case u.ContainerStart:
    case u.DeferOn:
    case u.DisableBindings:
    case u.Element:
    case u.ElementEnd:
    case u.ElementStart:
    case u.EnableBindings:
    case u.I18n:
    case u.I18nApply:
    case u.I18nContext:
    case u.I18nEnd:
    case u.I18nStart:
    case u.IcuEnd:
    case u.IcuStart:
    case u.Namespace:
    case u.Pipe:
    case u.Projection:
    case u.ProjectionDef:
    case u.Template:
    case u.Text:
    case u.I18nAttributes:
    case u.IcuPlaceholder:
    case u.DeclareLet:
    case u.SourceLocation:
    case u.ConditionalCreate:
    case u.ConditionalBranchCreate: break;
    default: throw new Error(`AssertionError: transformExpressionsInOp doesn't handle ${u[n.kind]}`);
} }
function k(n, e, t) { if (n instanceof K)
    n.transformInternalExpressions(e, t);
else if (n instanceof W)
    n.lhs = k(n.lhs, e, t), n.rhs = k(n.rhs, e, t);
else if (n instanceof nn)
    n.expr = k(n.expr, e, t);
else if (n instanceof We)
    n.receiver = k(n.receiver, e, t);
else if (n instanceof Ft)
    n.receiver = k(n.receiver, e, t), n.index = k(n.index, e, t);
else if (n instanceof Fe) {
    n.fn = k(n.fn, e, t);
    for (let s = 0; s < n.args.length; s++)
        n.args[s] = k(n.args[s], e, t);
}
else if (n instanceof dt)
    for (let s = 0; s < n.entries.length; s++)
        n.entries[s] = k(n.entries[s], e, t);
else if (n instanceof bt)
    for (let s = 0; s < n.entries.length; s++)
        n.entries[s].value = k(n.entries[s].value, e, t);
else if (n instanceof Tt)
    n.condition = k(n.condition, e, t), n.trueCase = k(n.trueCase, e, t), n.falseCase !== null && (n.falseCase = k(n.falseCase, e, t));
else if (n instanceof Kn)
    n.expr = k(n.expr, e, t);
else if (n instanceof Cr)
    n.expr = k(n.expr, e, t);
else if (n instanceof _r)
    for (let s = 0; s < n.expressions.length; s++)
        n.expressions[s] = k(n.expressions[s], e, t);
else if (n instanceof Ms)
    n.condition = k(n.condition, e, t);
else if (n instanceof Ps)
    n.tag = k(n.tag, e, t), n.template.expressions = n.template.expressions.map(s => k(s, e, t));
else if (n instanceof xn)
    if (Array.isArray(n.body))
        for (let s = 0; s < n.body.length; s++)
            Ia(n.body[s], e, t);
    else
        n.body = k(n.body, e, t);
else if (!(n instanceof H)) {
    if (n instanceof Bs)
        for (let s = 0; s < n.expressions.length; s++)
            n.expressions[s] = k(n.expressions[s], e, t);
    else if (n instanceof ft)
        n.expr = k(n.expr, e, t);
    else if (!(n instanceof tt || n instanceof tn || n instanceof Ee))
        throw new Error(`Unhandled expression kind: ${n.constructor.name}`);
} return e(n, t); }
function Ia(n, e, t) { if (n instanceof nt)
    n.expr = k(n.expr, e, t);
else if (n instanceof xe)
    n.value = k(n.value, e, t);
else if (n instanceof ce)
    n.value !== void 0 && (n.value = k(n.value, e, t));
else if (n instanceof br) {
    n.condition = k(n.condition, e, t);
    for (let s of n.trueCase)
        Ia(s, e, t);
    for (let s of n.falseCase)
        Ia(s, e, t);
}
else
    throw new Error(`Unhandled statement kind: ${n.constructor.name}`); }
function Kp(n) { return n instanceof Ee && typeof n.value == "string"; }
var w = (() => { class n {
    static nextListId = 0;
    debugListId = n.nextListId++;
    head = { kind: u.ListEnd, next: null, prev: null, debugListId: this.debugListId };
    tail = { kind: u.ListEnd, next: null, prev: null, debugListId: this.debugListId };
    constructor() { this.head.next = this.tail, this.tail.prev = this.head; }
    push(t) { if (Array.isArray(t)) {
        for (let r of t)
            this.push(r);
        return;
    } n.assertIsNotEnd(t), n.assertIsUnowned(t), t.debugListId = this.debugListId; let s = this.tail.prev; t.prev = s, s.next = t, t.next = this.tail, this.tail.prev = t; }
    prepend(t) { if (t.length === 0)
        return; for (let i of t)
        n.assertIsNotEnd(i), n.assertIsUnowned(i), i.debugListId = this.debugListId; let s = this.head.next, r = this.head; for (let i of t)
        r.next = i, i.prev = r, r = i; r.next = s, s.prev = r; }
    *[Symbol.iterator]() { let t = this.head.next; for (; t !== this.tail;) {
        n.assertIsOwned(t, this.debugListId);
        let s = t.next;
        yield t, t = s;
    } }
    *reversed() { let t = this.tail.prev; for (; t !== this.head;) {
        n.assertIsOwned(t, this.debugListId);
        let s = t.prev;
        yield t, t = s;
    } }
    static replace(t, s) { n.assertIsNotEnd(t), n.assertIsNotEnd(s), n.assertIsOwned(t), n.assertIsUnowned(s), s.debugListId = t.debugListId, t.prev !== null && (t.prev.next = s, s.prev = t.prev), t.next !== null && (t.next.prev = s, s.next = t.next), t.debugListId = null, t.prev = null, t.next = null; }
    static replaceWithMany(t, s) { if (s.length === 0) {
        n.remove(t);
        return;
    } n.assertIsNotEnd(t), n.assertIsOwned(t); let r = t.debugListId; t.debugListId = null; for (let h of s)
        n.assertIsNotEnd(h), n.assertIsUnowned(h); let { prev: i, next: a } = t; t.prev = null, t.next = null; let o = i; for (let h of s)
        n.assertIsUnowned(h), h.debugListId = r, o.next = h, h.prev = o, h.next = null, o = h; let l = s[0], c = o; i !== null && (i.next = l, l.prev = i), a !== null && (a.prev = c, c.next = a); }
    static remove(t) { n.assertIsNotEnd(t), n.assertIsOwned(t), t.prev.next = t.next, t.next.prev = t.prev, t.debugListId = null, t.prev = null, t.next = null; }
    static insertBefore(t, s) { if (Array.isArray(t)) {
        for (let r of t)
            n.insertBefore(r, s);
        return;
    } if (n.assertIsOwned(s), s.prev === null)
        throw new Error("AssertionError: illegal operation on list start"); n.assertIsNotEnd(t), n.assertIsUnowned(t), t.debugListId = s.debugListId, t.prev = null, s.prev.next = t, t.prev = s.prev, t.next = s, s.prev = t; }
    static insertAfter(t, s) { if (n.assertIsOwned(s), s.next === null)
        throw new Error("AssertionError: illegal operation on list end"); n.assertIsNotEnd(t), n.assertIsUnowned(t), t.debugListId = s.debugListId, s.next.prev = t, t.next = s.next, t.prev = s, s.next = t; }
    static assertIsUnowned(t) { if (t.debugListId !== null)
        throw new Error(`AssertionError: illegal operation on owned node: ${u[t.kind]}`); }
    static assertIsOwned(t, s) { if (t.debugListId === null)
        throw new Error(`AssertionError: illegal operation on unowned node: ${u[t.kind]}`); if (s !== void 0 && t.debugListId !== s)
        throw new Error(`AssertionError: node belongs to the wrong list (expected ${s}, actual ${t.debugListId})`); }
    static assertIsNotEnd(t) { if (t.kind === u.ListEnd)
        throw new Error("AssertionError: illegal operation on list head or tail"); }
} return n; })(), ke = class {
    slot = null;
}, Bg = new Set([u.Element, u.ElementStart, u.Container, u.ContainerStart, u.Template, u.RepeaterCreate, u.ConditionalCreate, u.ConditionalBranchCreate]);
function rn(n) { return Bg.has(n.kind); }
function Mg(n, e, t, s, r, i) { return S(S({ kind: u.ElementStart, xref: e, tag: n, handle: new ke, attributes: null, localRefs: [], nonBindable: !1, namespace: t, i18nPlaceholder: s, startSourceSpan: r, wholeSourceSpan: i }, vt), B); }
function ef(n, e, t, s, r, i, a, o) { return S(S({ kind: u.Template, xref: n, templateKind: e, attributes: null, tag: t, handle: new ke, functionNameSuffix: s, decls: null, vars: null, localRefs: [], nonBindable: !1, namespace: r, i18nPlaceholder: i, startSourceSpan: a, wholeSourceSpan: o }, vt), B); }
function tf(n, e, t, s, r, i, a, o) { return S(S({ kind: u.ConditionalCreate, xref: n, templateKind: e, attributes: null, tag: t, handle: new ke, functionNameSuffix: s, decls: null, vars: null, localRefs: [], nonBindable: !1, namespace: r, i18nPlaceholder: i, startSourceSpan: a, wholeSourceSpan: o }, vt), B); }
function nf(n, e, t, s, r, i, a, o) { return S(S({ kind: u.ConditionalBranchCreate, xref: n, templateKind: e, attributes: null, tag: t, handle: new ke, functionNameSuffix: s, decls: null, vars: null, localRefs: [], nonBindable: !1, namespace: r, i18nPlaceholder: i, startSourceSpan: a, wholeSourceSpan: o }, vt), B); }
function Rg(n, e, t, s, r, i, a, o, l, c) { return ue(S(S(S({ kind: u.RepeaterCreate, attributes: null, xref: n, handle: new ke, emptyView: e, track: s, trackByFn: null, trackByOps: null, tag: t, emptyTag: i, emptyAttributes: null, functionNameSuffix: "For", namespace: be.HTML, nonBindable: !1, localRefs: [], decls: null, vars: null, varNames: r, usesComponentInstance: !1, i18nPlaceholder: a, emptyI18nPlaceholder: o, startSourceSpan: l, wholeSourceSpan: c }, vt), B), je), { numSlotsUsed: e === null ? 2 : 3 }); }
function Fg(n, e) { return S({ kind: u.ElementEnd, xref: n, sourceSpan: e }, B); }
function $g(n) { return S({ kind: u.DisableBindings, xref: n }, B); }
function Og(n) { return S({ kind: u.EnableBindings, xref: n }, B); }
function sf(n, e, t, s) { return S(S({ kind: u.Text, xref: n, handle: new ke, initialValue: e, icuPlaceholder: t, sourceSpan: s }, vt), B); }
function Vg(n, e, t, s, r, i) { return S({ kind: u.AnimationString, name: n, target: e, animationKind: t, expression: s, i18nMessage: null, securityContext: r, sanitizer: null, sourceSpan: i }, B); }
function qg(n, e, t, s, r, i) { let a = new w; return a.push(s), S({ kind: u.Animation, name: n, target: e, animationKind: t, handlerOps: a, handlerFnName: null, i18nMessage: null, securityContext: r, sanitizer: null, sourceSpan: i }, B); }
function jc(n, e, t, s, r, i, a, o, l) { let c = new w; return c.push(r), S({ kind: u.Listener, target: n, targetSlot: e, tag: s, hostListener: o, name: t, handlerOps: c, handlerFnName: null, consumesDollarEvent: !1, isLegacyAnimationListener: i !== null, legacyAnimationPhase: i, eventTarget: a, sourceSpan: l }, B); }
function rf(n, e, t, s, r, i, a, o, l) { let c = new w; return c.push(r), S({ kind: u.AnimationListener, target: n, targetSlot: e, tag: s, hostListener: o, name: t, animationKind: i, handlerOps: c, handlerFnName: null, consumesDollarEvent: !1, eventTarget: a, sourceSpan: l }, B); }
function af(n, e, t, s, r, i) { let a = new w; return a.push(r), S({ kind: u.TwoWayListener, target: n, targetSlot: e, tag: s, name: t, handlerOps: a, handlerFnName: null, sourceSpan: i }, B); }
function of(n, e, t) { return S(S({ kind: u.Pipe, xref: n, handle: e, name: t }, B), vt); }
function Ug(n) { return S({ kind: u.Namespace, active: n }, B); }
function Hg(n) { return S({ kind: u.ProjectionDef, def: n }, B); }
function Wg(n, e, t, s, r) { return ue(S(S({ kind: u.Projection, xref: n, handle: new ke, selector: e, i18nPlaceholder: t, fallbackView: s, projectionSlotIndex: 0, attributes: null, localRefs: [], sourceSpan: r }, B), vt), { numSlotsUsed: s === null ? 1 : 2 }); }
function ct(n, e, t, s, r, i, a, o) { return S({ kind: u.ExtractedAttribute, target: n, bindingKind: e, namespace: t, name: s, expression: r, i18nContext: i, i18nMessage: a, securityContext: o, trustedValueFn: null }, B); }
function jg(n, e, t, s, r, i) { return ue(S(S({ kind: u.Defer, xref: n, handle: new ke, mainView: e, mainSlot: t, loadingView: null, loadingSlot: null, loadingConfig: null, loadingMinimumTime: null, loadingAfterTime: null, placeholderView: null, placeholderSlot: null, placeholderConfig: null, placeholderMinimumTime: null, errorView: null, errorSlot: null, ownResolverFn: s, resolverFn: r, flags: null, sourceSpan: i }, B), vt), { numSlotsUsed: 2 }); }
function hn(n, e, t, s) { return S({ kind: u.DeferOn, defer: n, trigger: e, modifier: t, sourceSpan: s }, B); }
function zg(n, e, t) { return S(S({ kind: u.DeclareLet, xref: n, declaredName: e, sourceSpan: t, handle: new ke }, vt), B); }
function Gg(n, e, t, s, r, i, a, o) { return S({ kind: u.I18nMessage, xref: n, i18nContext: e, i18nBlock: t, message: s, messagePlaceholder: r, params: i, postprocessingParams: a, needsPostprocessing: o, subMessages: [] }, B); }
function ho(n, e, t, s) { return S(S({ kind: u.I18nStart, xref: n, handle: new ke, root: t ?? n, message: e, messageIndex: null, subTemplateIndex: null, context: null, sourceSpan: s }, B), vt); }
function po(n, e) { return S({ kind: u.I18nEnd, xref: n, sourceSpan: e }, B); }
function Xg(n, e, t, s) { return S({ kind: u.IcuStart, xref: n, message: e, messagePlaceholder: t, context: null, sourceSpan: s }, B); }
function Yg(n) { return S({ kind: u.IcuEnd, xref: n }, B); }
function Qg(n, e, t) { return S({ kind: u.IcuPlaceholder, xref: n, name: e, strings: t, expressionPlaceholders: [] }, B); }
function xo(n, e, t, s, r) { if (t === null && n !== Wn.Attr)
    throw new Error("AssertionError: i18nBlock must be provided for non-attribute contexts."); return S({ kind: u.I18nContext, contextKind: n, xref: e, i18nBlock: t, message: s, sourceSpan: r, params: new Map, postprocessingParams: new Map }, B); }
function lf(n, e, t) { return S(S({ kind: u.I18nAttributes, xref: n, handle: e, target: t, i18nAttributesConfig: null }, B), vt); }
function Zg(n, e) { return S({ kind: u.SourceLocation, templatePath: n, locations: e }, B); }
function Jg(n, e, t, s, r, i) { return S(S({ kind: u.DomProperty, name: n, expression: e, bindingKind: t, i18nContext: s, securityContext: r, sanitizer: null, sourceSpan: i }, je), B); }
var cf = "CTX_REF_MARKER", _ = (function (n) { return n[n.Tmpl = 0] = "Tmpl", n[n.Host = 1] = "Host", n[n.Both = 2] = "Both", n; })(_ || {}), Oe = (function (n) { return n[n.Full = 0] = "Full", n[n.DomOnly = 1] = "DomOnly", n; })(Oe || {}), Na = class {
    componentName;
    pool;
    compatibility;
    mode;
    constructor(e, t, s, r) { this.componentName = e, this.pool = t, this.compatibility = s, this.mode = r; }
    kind = _.Both;
    allocateXrefId() { return this.nextXrefId++; }
    nextXrefId = 0;
}, ci = class extends Na {
    relativeContextFilePath;
    i18nUseExternalIds;
    deferMeta;
    allDeferrableDepsFn;
    relativeTemplatePath;
    enableDebugLocations;
    constructor(e, t, s, r, i, a, o, l, c, h) { super(e, t, s, r), this.relativeContextFilePath = i, this.i18nUseExternalIds = a, this.deferMeta = o, this.allDeferrableDepsFn = l, this.relativeTemplatePath = c, this.enableDebugLocations = h, this.root = new ut(this, this.allocateXrefId(), null), this.views.set(this.root.xref, this.root); }
    kind = _.Tmpl;
    fnSuffix = "Template";
    root;
    views = new Map;
    contentSelectors = null;
    allocateView(e) { let t = new ut(this, this.allocateXrefId(), e); return this.views.set(t.xref, t), t; }
    get units() { return this.views.values(); }
    addConst(e, t) { for (let r = 0; r < this.consts.length; r++)
        if (this.consts[r].isEquivalent(e))
            return r; let s = this.consts.length; return this.consts.push(e), t && this.constsInitializers.push(...t), s; }
    consts = [];
    constsInitializers = [];
}, Da = class {
    xref;
    constructor(e) { this.xref = e; }
    create = new w;
    update = new w;
    fnName = null;
    vars = null;
    *ops() { for (let e of this.create)
        if (yield e, e.kind === u.Listener || e.kind === u.Animation || e.kind === u.AnimationListener || e.kind === u.TwoWayListener)
            for (let t of e.handlerOps)
                yield t;
        else if (e.kind === u.RepeaterCreate && e.trackByOps !== null)
            for (let t of e.trackByOps)
                yield t; for (let e of this.update)
        yield e; }
}, ut = class extends Da {
    job;
    parent;
    constructor(e, t, s) { super(t), this.job = e, this.parent = s; }
    contextVariables = new Map;
    aliases = new Set;
    decls = null;
}, Pa = class extends Na {
    constructor(e, t, s, r) { super(e, t, s, r), this.root = new kl(this); }
    kind = _.Host;
    fnSuffix = "HostBindings";
    root;
    get units() { return [this.root]; }
}, kl = class extends Da {
    job;
    constructor(e) { super(0), this.job = e; }
    attributes = null;
};
function Kg(n) { for (let e of n.units)
    for (let t of e.ops())
        fe(t, ev, X.None); }
function ev(n) { if (n instanceof Fe && n.fn instanceof Ae && n.fn.name === "$any") {
    if (n.args.length !== 1)
        throw new Error("The $any builtin function expects exactly one argument.");
    return n.args[0];
} return n; }
function tv(n) { let e = new Map; for (let t of n.units)
    for (let s of t.create)
        s.kind === u.I18nContext && e.set(s.xref, s); for (let t of n.units)
    for (let s of t.update)
        s.kind === u.I18nExpression && nv(e, s) && w.insertAfter(Pg(s.i18nOwner, s.handle, null), s); }
function nv(n, e) { if (e.next?.kind !== u.I18nExpression)
    return !0; let t = n.get(e.context), s = n.get(e.next.context); if (t === void 0)
    throw new Error("AssertionError: expected an I18nContextOp to exist for the I18nExpressionOp's context"); if (s === void 0)
    throw new Error("AssertionError: expected an I18nContextOp to exist for the next I18nExpressionOp's context"); return t.i18nBlock !== null ? t.i18nBlock !== s.i18nBlock : e.i18nOwner !== e.next.i18nOwner; }
function sv(n) { for (let e of n.units) {
    let t = e.update.head, s = [], r = null;
    for (let i of e.create) {
        if (i.kind === u.I18nStart)
            r = { blockXref: i.xref, lastSlotConsumer: i.xref };
        else if (i.kind === u.I18nEnd) {
            for (let a of s)
                a.target = r.lastSlotConsumer, w.insertBefore(a, t);
            s.length = 0, r = null;
        }
        if (nr(i))
            for (r !== null && (r.lastSlotConsumer = i.xref); t.next !== null;) {
                if (r !== null && t.kind === u.I18nExpression && t.usage === er.I18nText && t.i18nOwner === r.blockXref) {
                    let o = t;
                    t = t.next, w.remove(o), s.push(o);
                    continue;
                }
                let a = !1;
                if (si(t) && t.target !== i.xref ? a = !0 : (t.kind === u.Statement || t.kind === u.Variable) && ye(t, o => { !a && si(o) && o.target !== i.xref && (a = !0); }), a)
                    break;
                t = t.next;
            }
    }
} }
function rv(n) { if (!(!n.enableDebugLocations || n.relativeTemplatePath === null))
    for (let e of n.units) {
        let t = [];
        for (let s of e.create)
            if (s.kind === u.ElementStart || s.kind === u.Element) {
                let r = s.startSourceSpan.start;
                t.push({ targetSlot: s.handle, offset: r.offset, line: r.line, column: r.col });
            }
        t.length > 0 && e.create.push(Zg(n.relativeTemplatePath, t));
    } }
function zc(n) { let e = new Map; for (let t of n.create)
    nr(t) && (e.set(t.xref, t), t.kind === u.RepeaterCreate && t.emptyView !== null && e.set(t.emptyView, t)); return e; }
function iv(n) { for (let e of n.units) {
    let t = zc(e);
    for (let s of e.ops())
        switch (s.kind) {
            case u.Attribute:
                av(e, s, t);
                break;
            case u.Property:
                if (s.bindingKind !== T.LegacyAnimation && s.bindingKind !== T.Animation) {
                    let r;
                    s.i18nMessage !== null && s.templateKind === null ? r = T.I18n : s.isStructuralTemplateAttribute ? r = T.Template : r = T.Property, w.insertBefore(ct(s.target, r, null, s.name, null, null, null, s.securityContext), Es(t, s.target));
                }
                break;
            case u.TwoWayProperty:
                w.insertBefore(ct(s.target, T.TwoWayProperty, null, s.name, null, null, null, s.securityContext), Es(t, s.target));
                break;
            case u.StyleProp:
            case u.ClassProp:
                e.job.compatibility === st.TemplateDefinitionBuilder && s.expression instanceof oi && w.insertBefore(ct(s.target, T.Property, null, s.name, null, null, null, ne.STYLE), Es(t, s.target));
                break;
            case u.Listener:
                if (!s.isLegacyAnimationListener) {
                    let r = ct(s.target, T.Property, null, s.name, null, null, null, ne.NONE);
                    if (n.kind === _.Host) {
                        if (n.compatibility)
                            break;
                        e.create.push(r);
                    }
                    else
                        w.insertBefore(r, Es(t, s.target));
                }
                break;
            case u.TwoWayListener:
                if (n.kind !== _.Host) {
                    let r = ct(s.target, T.Property, null, s.name, null, null, null, ne.NONE);
                    w.insertBefore(r, Es(t, s.target));
                }
                break;
        }
} }
function Es(n, e) { let t = n.get(e); if (t === void 0)
    throw new Error("All attributes should have an element-like target."); return t; }
function av(n, e, t) { if (e.expression instanceof oe)
    return; let s = e.isTextAttribute || e.expression.isConstant(); if (n.job.compatibility === st.TemplateDefinitionBuilder && (s &&= e.isTextAttribute), s) {
    let r = ct(e.target, e.isStructuralTemplateAttribute ? T.Template : T.Attribute, e.namespace, e.name, e.expression, e.i18nContext, e.i18nMessage, e.securityContext);
    if (n.job.kind === _.Host)
        n.create.push(r);
    else {
        let i = Es(t, e.target);
        w.insertBefore(r, i);
    }
    w.remove(e);
} }
var Lu = "aria-";
function uf(n) { return n.startsWith(Lu) && n.length > Lu.length; }
function ov(n, e) { let t = n.get(e); if (t === void 0)
    throw new Error("All attributes should have an element-like target."); return t; }
function lv(n) { let e = new Map; for (let t of n.units)
    for (let s of t.create)
        rn(s) && e.set(s.xref, s); for (let t of n.units)
    for (let s of t.ops())
        if (s.kind === u.Binding)
            switch (s.bindingKind) {
                case T.Attribute:
                    if (s.name === "ngNonBindable") {
                        w.remove(s);
                        let r = ov(e, s.target);
                        r.nonBindable = !0;
                    }
                    else if (s.name.startsWith("animate."))
                        w.replace(s, Pu(s.name, s.target, s.name === "animate.enter" ? "enter" : "leave", s.expression, s.securityContext, s.sourceSpan, 0));
                    else {
                        let [r, i] = It(s.name);
                        w.replace(s, Du(s.target, r, i, s.expression, s.securityContext, s.isTextAttribute, s.isStructuralTemplateAttribute, s.templateKind, s.i18nMessage, s.sourceSpan));
                    }
                    break;
                case T.Animation:
                    w.replace(s, Pu(s.name, s.target, s.name === "animate.enter" ? "enter" : "leave", s.expression, s.securityContext, s.sourceSpan, 1));
                    break;
                case T.Property:
                case T.LegacyAnimation:
                    n.mode === Oe.DomOnly && uf(s.name) ? w.replace(s, Du(s.target, null, s.name, s.expression, s.securityContext, !1, s.isStructuralTemplateAttribute, s.templateKind, s.i18nMessage, s.sourceSpan)) : n.kind === _.Host ? w.replace(s, Jg(s.name, s.expression, s.bindingKind, s.i18nContext, s.securityContext, s.sourceSpan)) : w.replace(s, Cg(s.target, s.name, s.expression, s.bindingKind, s.securityContext, s.isStructuralTemplateAttribute, s.templateKind, s.i18nContext, s.i18nMessage, s.sourceSpan));
                    break;
                case T.TwoWayProperty:
                    if (!(s.expression instanceof Y))
                        throw new Error(`Expected value of two-way property binding "${s.name}" to be an expression`);
                    w.replace(s, Ag(s.target, s.name, s.expression, s.securityContext, s.isStructuralTemplateAttribute, s.templateKind, s.i18nContext, s.i18nMessage, s.sourceSpan));
                    break;
                case T.I18n:
                case T.ClassName:
                case T.StyleProperty: throw new Error(`Unhandled binding of kind ${T[s.bindingKind]}`);
            } }
var Bu = new Map([[f.ariaProperty, f.ariaProperty], [f.attribute, f.attribute], [f.classProp, f.classProp], [f.element, f.element], [f.elementContainer, f.elementContainer], [f.elementContainerEnd, f.elementContainerEnd], [f.elementContainerStart, f.elementContainerStart], [f.elementEnd, f.elementEnd], [f.elementStart, f.elementStart], [f.domProperty, f.domProperty], [f.i18nExp, f.i18nExp], [f.listener, f.listener], [f.listener, f.listener], [f.property, f.property], [f.styleProp, f.styleProp], [f.syntheticHostListener, f.syntheticHostListener], [f.syntheticHostProperty, f.syntheticHostProperty], [f.templateCreate, f.templateCreate], [f.twoWayProperty, f.twoWayProperty], [f.twoWayListener, f.twoWayListener], [f.declareLet, f.declareLet], [f.conditionalCreate, f.conditionalBranchCreate], [f.conditionalBranchCreate, f.conditionalBranchCreate], [f.domElement, f.domElement], [f.domElementStart, f.domElementStart], [f.domElementEnd, f.domElementEnd], [f.domElementContainer, f.domElementContainer], [f.domElementContainerStart, f.domElementContainerStart], [f.domElementContainerEnd, f.domElementContainerEnd], [f.domListener, f.domListener], [f.domTemplate, f.domTemplate], [f.animationEnter, f.animationEnter], [f.animationLeave, f.animationLeave], [f.animationEnterListener, f.animationEnterListener], [f.animationLeaveListener, f.animationLeaveListener]]), cv = 256;
function uv(n) { for (let e of n.units)
    Mu(e.create), Mu(e.update); }
function Mu(n) { let e = null; for (let t of n) {
    if (t.kind !== u.Statement || !(t.statement instanceof nt)) {
        e = null;
        continue;
    }
    if (!(t.statement.expr instanceof Fe) || !(t.statement.expr.fn instanceof tn)) {
        e = null;
        continue;
    }
    let s = t.statement.expr.fn.value;
    if (!Bu.has(s)) {
        e = null;
        continue;
    }
    if (e !== null && Bu.get(e.instruction) === s && e.length < cv) {
        let r = e.expression.callFn(t.statement.expr.args, t.statement.expr.sourceSpan, t.statement.expr.pure);
        e.expression = r, e.op.statement = r.toStmt(), e.length++, w.remove(t);
    }
    else
        e = { op: t, instruction: s, expression: t.statement.expr, length: 1 };
} }
function hv(n) { for (let e of n.units)
    for (let t of e.update)
        (t.kind === u.Attribute || t.kind === u.StyleProp || t.kind == u.StyleMap || t.kind === u.ClassMap) && t.expression instanceof oe && t.expression.strings.length === 2 && t.expression.strings.every(r => r === "") && (t.expression = t.expression.expressions[0]); }
function pv(n) { for (let e of n.units)
    for (let t of e.ops()) {
        if (t.kind !== u.Conditional)
            continue;
        let s, r = t.conditions.findIndex(o => o.expr === null);
        if (r >= 0) {
            let o = t.conditions.splice(r, 1)[0].targetSlot;
            s = new Ta(o);
        }
        else
            s = d(-1);
        let i = t.test == null ? null : new Wt(t.test, n.allocateXrefId()), a = null;
        for (let o = t.conditions.length - 1; o >= 0; o--) {
            let l = t.conditions[o];
            if (l.expr !== null) {
                if (i !== null) {
                    let c = o === 0 ? i : new In(i.xref);
                    l.expr = new W(x.Identical, c, l.expr);
                }
                else
                    l.alias !== null && (a ??= n.allocateXrefId(), l.expr = new Wt(l.expr, a), t.contextValue = new In(a));
                s = new Tt(l.expr, new Ta(l.targetSlot), s);
            }
        }
        t.processed = s, t.conditions = [];
    } }
var fv = new Map([["&&", x.And], [">", x.Bigger], [">=", x.BiggerEquals], ["|", x.BitwiseOr], ["&", x.BitwiseAnd], ["/", x.Divide], ["=", x.Assign], ["==", x.Equals], ["===", x.Identical], ["<", x.Lower], ["<=", x.LowerEquals], ["-", x.Minus], ["%", x.Modulo], ["**", x.Exponentiation], ["*", x.Multiply], ["!=", x.NotEquals], ["!==", x.NotIdentical], ["??", x.NullishCoalesce], ["||", x.Or], ["+", x.Plus], ["in", x.In], ["+=", x.AdditionAssignment], ["-=", x.SubtractionAssignment], ["*=", x.MultiplicationAssignment], ["/=", x.DivisionAssignment], ["%=", x.RemainderAssignment], ["**=", x.ExponentiationAssignment], ["&&=", x.AndAssignment], ["||=", x.OrAssignment], ["??=", x.NullishCoalesceAssignment]]);
function hf(n) { let e = new Map([["svg", be.SVG], ["math", be.Math]]); return n === null ? be.HTML : e.get(n) ?? be.HTML; }
function dv(n) { let e = new Map([["svg", be.SVG], ["math", be.Math]]); for (let [t, s] of e.entries())
    if (s === n)
        return t; return null; }
function mv(n, e) { return e === be.HTML ? n : `:${dv(e)}:${n}`; }
function Xs(n) { return Array.isArray(n) ? R(n.map(Xs)) : d(n); }
function gv(n) { let e = new Map; for (let t of n.units)
    for (let s of t.create)
        if (s.kind === u.ExtractedAttribute) {
            let r = e.get(s.target) || new Tl(n.compatibility);
            e.set(s.target, r), r.add(s.bindingKind, s.name, s.expression, s.namespace, s.trustedValueFn), w.remove(s);
        } if (n instanceof ci)
    for (let t of n.units)
        for (let s of t.create)
            if (s.kind == u.Projection) {
                let r = e.get(s.xref);
                if (r !== void 0) {
                    let i = bl(r);
                    i.entries.length > 0 && (s.attributes = i);
                }
            }
            else
                rn(s) && (s.attributes = Ru(n, e, s.xref), s.kind === u.RepeaterCreate && s.emptyView !== null && (s.emptyAttributes = Ru(n, e, s.emptyView)));
else if (n instanceof Pa)
    for (let [t, s] of e.entries()) {
        if (t !== n.root.xref)
            throw new Error("An attribute would be const collected into the host binding's template function, but is not associated with the root xref.");
        let r = bl(s);
        r.entries.length > 0 && (n.root.attributes = r);
    } }
function Ru(n, e, t) { let s = e.get(t); if (s !== void 0) {
    let r = bl(s);
    if (r.entries.length > 0)
        return n.addConst(r);
} return null; }
var ds = Object.freeze([]), Tl = class {
    compatibility;
    known = new Map;
    byKind = new Map;
    propertyBindings = null;
    projectAs = null;
    get attributes() { return this.byKind.get(T.Attribute) ?? ds; }
    get classes() { return this.byKind.get(T.ClassName) ?? ds; }
    get styles() { return this.byKind.get(T.StyleProperty) ?? ds; }
    get bindings() { return this.propertyBindings ?? ds; }
    get template() { return this.byKind.get(T.Template) ?? ds; }
    get i18n() { return this.byKind.get(T.I18n) ?? ds; }
    constructor(e) { this.compatibility = e; }
    isKnown(e, t) { let s = this.known.get(e) ?? new Set; return this.known.set(e, s), s.has(t) ? !0 : (s.add(t), !1); }
    add(e, t, s, r, i) { if (!(this.compatibility === st.TemplateDefinitionBuilder && (e === T.Attribute || e === T.ClassName || e === T.StyleProperty)) && this.isKnown(e, t))
        return; if (t === "ngProjectAs") {
        if (s === null || !(s instanceof Ee) || s.value == null || typeof s.value?.toString() != "string")
            throw Error("ngProjectAs must have a string literal value");
        this.projectAs = s.value.toString();
    } let o = this.arrayFor(e); if (o.push(...vv(r, t)), e === T.Attribute || e === T.StyleProperty) {
        if (s === null)
            throw Error("Attribute, i18n attribute, & style element attributes must have a value");
        if (i !== null) {
            if (!Kp(s))
                throw Error("AssertionError: extracted attribute value should be string literal");
            o.push(pp(i, new Bs([new Ar(s.value)], []), void 0, s.sourceSpan));
        }
        else
            o.push(s);
    } }
    arrayFor(e) { return e === T.Property || e === T.TwoWayProperty ? (this.propertyBindings ??= [], this.propertyBindings) : (this.byKind.has(e) || this.byKind.set(e, []), this.byKind.get(e)); }
};
function vv(n, e) { let t = d(e); return n ? [d(0), d(n), t] : [t]; }
function bl({ attributes: n, bindings: e, classes: t, i18n: s, projectAs: r, styles: i, template: a }) { let o = [...n]; if (r !== null) {
    let l = so(r)[0];
    o.push(d(5), Xs(l));
} return t.length > 0 && o.push(d(1), ...t), i.length > 0 && o.push(d(2), ...i), e.length > 0 && o.push(d(3), ...e), a.length > 0 && o.push(d(4), ...a), s.length > 0 && o.push(d(6), ...s), R(o); }
function wv(n, e) { let t = n.get(e); if (t === void 0)
    throw new Error("All attributes should have an element-like target."); return t; }
function Ev(n) { let e = new Map; for (let t of n.units)
    for (let s of t.create)
        rn(s) && e.set(s.xref, s); for (let t of n.units)
    for (let s of t.ops())
        if (s.kind === u.AnimationBinding) {
            let r = Sv(s);
            n.kind === _.Host ? t.create.push(r) : w.insertAfter(r, wv(e, s.target)), w.remove(s);
        } }
function Sv(n) { if (n.animationBindingKind === 0)
    return Vg(n.name, n.target, n.name === "animate.enter" ? "enter" : "leave", n.expression, n.securityContext, n.sourceSpan); {
    let e = n.expression;
    return qg(n.name, n.target, n.name === "animate.enter" ? "enter" : "leave", [gt(new xe(e, e.sourceSpan))], n.securityContext, n.sourceSpan);
} }
function xv(n) { let e = new Map; for (let t of n.units) {
    for (let s of t.create)
        s.kind === u.I18nAttributes && e.set(s.target, s);
    for (let s of t.update)
        switch (s.kind) {
            case u.Property:
            case u.Attribute:
                if (s.i18nContext === null || !(s.expression instanceof oe))
                    continue;
                let r = e.get(s.target);
                if (r === void 0)
                    throw new Error("AssertionError: An i18n attribute binding instruction requires the owning element to have an I18nAttributes create instruction");
                if (r.target !== s.target)
                    throw new Error("AssertionError: Expected i18nAttributes target element to match binding target element");
                let i = [];
                for (let a = 0; a < s.expression.expressions.length; a++) {
                    let o = s.expression.expressions[a];
                    if (s.expression.i18nPlaceholders.length !== s.expression.expressions.length)
                        throw new Error(`AssertionError: An i18n attribute binding instruction requires the same number of expressions and placeholders, but found ${s.expression.i18nPlaceholders.length} placeholders and ${s.expression.expressions.length} expressions`);
                    i.push(Jp(s.i18nContext, r.target, r.xref, r.handle, o, null, s.expression.i18nPlaceholders[a], ni.Creation, er.I18nAttribute, s.name, s.sourceSpan));
                }
                w.replaceWithMany(s, i);
                break;
        }
} }
function yv(n) { let e = new Map; for (let r of n.units)
    for (let i of r.ops())
        switch (i.kind) {
            case u.Binding:
            case u.Property:
            case u.Attribute:
            case u.ExtractedAttribute:
                if (i.i18nMessage === null)
                    continue;
                if (!e.has(i.i18nMessage)) {
                    let a = xo(Wn.Attr, n.allocateXrefId(), null, i.i18nMessage, null);
                    r.create.push(a), e.set(i.i18nMessage, a.xref);
                }
                i.i18nContext = e.get(i.i18nMessage);
                break;
        } let t = new Map; for (let r of n.units)
    for (let i of r.create)
        switch (i.kind) {
            case u.I18nStart:
                if (i.xref === i.root) {
                    let a = xo(Wn.RootI18n, n.allocateXrefId(), i.xref, i.message, null);
                    r.create.push(a), i.context = a.xref, t.set(i.xref, a);
                }
                break;
        } for (let r of n.units)
    for (let i of r.create)
        if (i.kind === u.I18nStart && i.xref !== i.root) {
            let a = t.get(i.root);
            if (a === void 0)
                throw Error("AssertionError: Root i18n block i18n context should have been created.");
            i.context = a.xref, t.set(i.xref, a);
        } let s = null; for (let r of n.units)
    for (let i of r.create)
        switch (i.kind) {
            case u.I18nStart:
                s = i;
                break;
            case u.I18nEnd:
                s = null;
                break;
            case u.IcuStart:
                if (s === null)
                    throw Error("AssertionError: Unexpected ICU outside of an i18n block.");
                if (i.message.id !== s.message.id) {
                    let a = xo(Wn.Icu, n.allocateXrefId(), s.root, i.message, null);
                    r.create.push(a), i.context = a.xref;
                }
                else
                    i.context = s.context, t.get(s.xref).contextKind = Wn.Icu;
                break;
        } }
function Cv(n) { let e = new Map; for (let t of n.units)
    for (let s of t.update.reversed())
        if (s.kind === u.Binding && s.isTextAttribute) {
            let r = e.get(s.target) || new Set;
            r.has(s.name) && n.compatibility === st.TemplateDefinitionBuilder && (s.name === "style" || s.name === "class") && w.remove(s), r.add(s.name), e.set(s.target, r);
        } }
function Av(n) { for (let e of n.units)
    for (let t of e.create)
        t.kind === u.Defer && (t.placeholderMinimumTime !== null && (t.placeholderConfig = new li(Xs([t.placeholderMinimumTime]))), (t.loadingMinimumTime !== null || t.loadingAfterTime !== null) && (t.loadingConfig = new li(Xs([t.loadingMinimumTime, t.loadingAfterTime])))); }
function _v(n) { let e = new Map; function t(r) { if (e.has(r.xref))
    return e.get(r.xref); let i = new kv; for (let a of r.create)
    if (!(!rn(a) || a.localRefs === null)) {
        if (!Array.isArray(a.localRefs))
            throw new Error("LocalRefs were already processed, but were needed to resolve defer targets.");
        for (let o of a.localRefs)
            o.target === "" && i.targets.set(o.name, { xref: a.xref, slot: a.handle });
    } return e.set(r.xref, i), i; } function s(r, i, a) { switch (i.trigger.kind) {
    case Z.Idle:
    case Z.Never:
    case Z.Immediate:
    case Z.Timer: return;
    case Z.Hover:
    case Z.Interaction:
    case Z.Viewport:
        if (i.trigger.targetName === null) {
            if (a === null)
                throw new Error("defer on trigger with no target name must have a placeholder block");
            let c = n.views.get(a);
            if (c == null)
                throw new Error("AssertionError: could not find placeholder view for defer on trigger");
            for (let h of c.create)
                if (nr(h) && (rn(h) || h.kind === u.Projection)) {
                    i.trigger.targetXref = h.xref, i.trigger.targetView = a, i.trigger.targetSlotViewSteps = -1, i.trigger.targetSlot = h.handle;
                    return;
                }
            return;
        }
        let o = a !== null ? n.views.get(a) : r, l = a !== null ? -1 : 0;
        for (; o !== null;) {
            let c = t(o);
            if (c.targets.has(i.trigger.targetName)) {
                let { xref: h, slot: p } = c.targets.get(i.trigger.targetName);
                i.trigger.targetXref = h, i.trigger.targetView = o.xref, i.trigger.targetSlotViewSteps = l, i.trigger.targetSlot = p;
                return;
            }
            o = o.parent !== null ? n.views.get(o.parent) : null, l++;
        }
        break;
    default: throw new Error(`Trigger kind ${i.trigger.kind} not handled`);
} } for (let r of n.units) {
    let i = new Map;
    for (let a of r.create)
        switch (a.kind) {
            case u.Defer:
                i.set(a.xref, a);
                break;
            case u.DeferOn:
                let o = i.get(a.defer);
                s(r, a, a.modifier === "hydrate" ? o.mainView : o.placeholderView);
                break;
        }
} }
var kv = class {
    targets = new Map;
}, Tv = new Map([[u.ElementEnd, [u.ElementStart, u.Element]], [u.ContainerEnd, [u.ContainerStart, u.Container]], [u.I18nEnd, [u.I18nStart, u.I18n]]]), bv = new Set([u.Pipe]);
function Iv(n) { for (let e of n.units)
    for (let t of e.create) {
        let s = Tv.get(t.kind);
        if (s === void 0)
            continue;
        let [r, i] = s, a = t.prev;
        for (; a !== null && bv.has(a.kind);)
            a = a.prev;
        a !== null && a.kind === r && (a.kind = i, w.remove(t));
    } }
function Nv(n) { for (let e of n.units)
    for (let t of e.ops())
        fe(t, s => Rv(s, { job: n }), X.None), fe(t, Fv, X.None); }
function ze(n) { return n instanceof nn ? ze(n.expr) : n instanceof W ? ze(n.lhs) || ze(n.rhs) : n instanceof Tt ? n.falseCase && ze(n.falseCase) ? !0 : ze(n.condition) || ze(n.trueCase) : n instanceof Ms ? ze(n.condition) : n instanceof Wt ? ze(n.expr) : n instanceof We ? ze(n.receiver) : n instanceof Ft ? ze(n.receiver) || ze(n.index) : n instanceof ft ? ze(n.expr) : n instanceof Fe || n instanceof dt || n instanceof bt || n instanceof hs || n instanceof us; }
function Dv(n) { let e = new Set; return k(n, t => (t instanceof Wt && e.add(t.xref), t), X.None), e; }
function Pv(n, e, t) { return k(n, s => { if (s instanceof Wt && e.has(s.xref)) {
    let r = new In(s.xref);
    return t.job.compatibility === st.TemplateDefinitionBuilder ? new Wt(r, r.xref) : r;
} return s; }, X.None), n; }
function ms(n, e, t) { let s; if (ze(n)) {
    let r = t.job.allocateXrefId();
    s = [new Wt(n, r), new In(r)];
}
else
    s = [n, n.clone()], Pv(s[1], Dv(s[0]), t); return new Gs(s[0], e(s[1])); }
function Lv(n) { return n instanceof js || n instanceof zs || n instanceof hs; }
function Bv(n) { return n instanceof We || n instanceof Ft || n instanceof Fe; }
function pf(n) { return Lv(n) || Bv(n); }
function Mv(n) { if (pf(n) && n.receiver instanceof Gs) {
    let e = n.receiver;
    for (; e.expr instanceof Gs;)
        e = e.expr;
    return e;
} return null; }
function Rv(n, e) { if (!pf(n))
    return n; let t = Mv(n); if (t) {
    if (n instanceof Fe)
        return t.expr = t.expr.callFn(n.args), n.receiver;
    if (n instanceof We)
        return t.expr = t.expr.prop(n.name), n.receiver;
    if (n instanceof Ft)
        return t.expr = t.expr.key(n.index), n.receiver;
    if (n instanceof hs)
        return t.expr = ms(t.expr, s => s.callFn(n.args), e), n.receiver;
    if (n instanceof js)
        return t.expr = ms(t.expr, s => s.prop(n.name), e), n.receiver;
    if (n instanceof zs)
        return t.expr = ms(t.expr, s => s.key(n.index), e), n.receiver;
}
else {
    if (n instanceof hs)
        return ms(n.receiver, s => s.callFn(n.args), e);
    if (n instanceof js)
        return ms(n.receiver, s => s.prop(n.name), e);
    if (n instanceof zs)
        return ms(n.receiver, s => s.key(n.index), e);
} return n; }
function Fv(n) { return n instanceof Gs ? new ft(new Tt(new W(x.Equals, n.guard, yn), yn, n.expr)) : n; }
var Fu = "\uFFFD", $v = "#", Ov = "*", Vv = "/", qv = ":", Uv = "[", Hv = "]", Wv = "|";
function jv(n) { let e = new Map, t = new Map, s = new Map; for (let i of n.units)
    for (let a of i.create)
        switch (a.kind) {
            case u.I18nContext:
                let o = zv(n, a);
                i.create.push(o), e.set(a.xref, o), s.set(a.xref, a);
                break;
            case u.I18nStart:
                t.set(a.xref, a);
                break;
        } let r = null; for (let i of n.units)
    for (let a of i.create)
        switch (a.kind) {
            case u.IcuStart:
                r = a, w.remove(a);
                let o = s.get(a.context);
                if (o.contextKind !== Wn.Icu)
                    continue;
                let l = t.get(o.i18nBlock);
                if (l.context === o.xref)
                    continue;
                let c = t.get(l.root), h = e.get(c.context);
                if (h === void 0)
                    throw Error("AssertionError: ICU sub-message should belong to a root message.");
                let p = e.get(o.xref);
                p.messagePlaceholder = a.messagePlaceholder, h.subMessages.push(p.xref);
                break;
            case u.IcuEnd:
                r = null, w.remove(a);
                break;
            case u.IcuPlaceholder:
                if (r === null || r.context == null)
                    throw Error("AssertionError: Unexpected ICU placeholder outside of i18n context");
                e.get(r.context).postprocessingParams.set(a.name, d(Gv(a))), w.remove(a);
                break;
        } }
function zv(n, e, t) { let s = $u(e.params), r = $u(e.postprocessingParams), i = [...e.params.values()].some(a => a.length > 1); return Gg(n.allocateXrefId(), e.xref, e.i18nBlock, e.message, null, s, r, i); }
function Gv(n) { if (n.strings.length !== n.expressionPlaceholders.length + 1)
    throw Error(`AssertionError: Invalid ICU placeholder with ${n.strings.length} strings and ${n.expressionPlaceholders.length} expressions`); let e = n.expressionPlaceholders.map(As); return n.strings.flatMap((t, s) => [t, e[s] || ""]).join(""); }
function $u(n) { let e = new Map; for (let [t, s] of n) {
    let r = Xv(s);
    r !== null && e.set(t, d(r));
} return e; }
function Xv(n) { if (n.length === 0)
    return null; let e = n.map(t => As(t)); return e.length === 1 ? e[0] : `${Uv}${e.join(Wv)}${Hv}`; }
function As(n) { if (n.flags & te.ElementTag && n.flags & te.TemplateTag) {
    if (typeof n.value != "object")
        throw Error("AssertionError: Expected i18n param value to have an element and template slot");
    let r = As(ue(S({}, n), { value: n.value.element, flags: n.flags & ~te.TemplateTag })), i = As(ue(S({}, n), { value: n.value.template, flags: n.flags & ~te.ElementTag }));
    return n.flags & te.OpenTag && n.flags & te.CloseTag ? `${i}${r}${i}` : n.flags & te.CloseTag ? `${r}${i}` : `${i}${r}`;
} if (n.flags & te.OpenTag && n.flags & te.CloseTag)
    return `${As(ue(S({}, n), { flags: n.flags & ~te.CloseTag }))}${As(ue(S({}, n), { flags: n.flags & ~te.OpenTag }))}`; if (n.flags === te.None)
    return `${n.value}`; let e = "", t = ""; n.flags & te.ElementTag ? e = $v : n.flags & te.TemplateTag && (e = Ov), e !== "" && (t = n.flags & te.CloseTag ? Vv : ""); let s = n.subTemplateIndex === null ? "" : `${qv}${n.subTemplateIndex}`; return `${Fu}${t}${e}${n.value}${s}${Fu}`; }
function Yv(n) { for (let e of n.units) {
    let t = new Map;
    for (let r of e.create) {
        if (nr(r)) {
            if (r.handle.slot === null)
                throw new Error("AssertionError: expected slots to have been allocated before generating advance() calls");
        }
        else
            continue;
        t.set(r.xref, r.handle.slot);
    }
    let s = 0;
    for (let r of e.update) {
        let i = null;
        if (si(r) ? i = r : ye(r, o => { i === null && si(o) && (i = o); }), i === null)
            continue;
        if (!t.has(i.target))
            throw new Error(`AssertionError: reference to unknown slot for target ${i.target}`);
        let a = t.get(i.target);
        if (s !== a) {
            let o = a - s;
            if (o < 0)
                throw new Error("AssertionError: slot counter should never need to move backwards");
            w.insertBefore(Ig(o, i.sourceSpan), r), s = a;
        }
    }
} }
function Qv(n) { for (let e of n.units)
    for (let t of e.update) {
        if (t.kind !== u.StoreLet)
            continue;
        let s = { kind: Se.Identifier, name: null, identifier: t.declaredName, local: !0 };
        w.replace(t, dn(n.allocateXrefId(), s, new ri(t.target, t.value, t.sourceSpan), lt.None));
    } }
function Zv(n) { let e = n.compatibility === st.TemplateDefinitionBuilder, t = [], s = 0; for (let r of n.units)
    for (let i of r.create)
        i.kind === u.Projection && (t.push(i.selector), i.projectionSlotIndex = s++); if (t.length > 0) {
    let r = null;
    if (t.length > 1 || t[0] !== "*") {
        let i = t.map(a => a === "*" ? a : so(a));
        r = n.pool.getConstLiteral(Xs(i), e);
    }
    n.contentSelectors = n.pool.getConstLiteral(Xs(t), e), n.root.create.prepend([Hg(r)]);
} }
function Jv(n) { fr(n.root, null); }
function fr(n, e) { let t = Kv(n, e); for (let s of n.create)
    switch (s.kind) {
        case u.ConditionalCreate:
        case u.ConditionalBranchCreate:
        case u.Template:
            fr(n.job.views.get(s.xref), t);
            break;
        case u.Projection:
            s.fallbackView !== null && fr(n.job.views.get(s.fallbackView), t);
            break;
        case u.RepeaterCreate:
            fr(n.job.views.get(s.xref), t), s.emptyView && fr(n.job.views.get(s.emptyView), t), s.trackByOps !== null && s.trackByOps.prepend(Hi(n, t, !1));
            break;
        case u.Animation:
        case u.AnimationListener:
        case u.Listener:
        case u.TwoWayListener:
            s.handlerOps.prepend(Hi(n, t, !0));
            break;
    } n.update.prepend(Hi(n, t, !1)); }
function Kv(n, e) { let t = { view: n.xref, viewContextVariable: { kind: Se.Context, name: null, view: n.xref }, contextVariables: new Map, aliases: n.aliases, references: [], letDeclarations: [], parent: e }; for (let s of n.contextVariables.keys())
    t.contextVariables.set(s, { kind: Se.Identifier, name: null, identifier: s, local: !1 }); for (let s of n.create)
    switch (s.kind) {
        case u.ElementStart:
        case u.ConditionalCreate:
        case u.ConditionalBranchCreate:
        case u.Template:
            if (!Array.isArray(s.localRefs))
                throw new Error("AssertionError: expected localRefs to be an array");
            for (let r = 0; r < s.localRefs.length; r++)
                t.references.push({ name: s.localRefs[r].name, targetId: s.xref, targetSlot: s.handle, offset: r, variable: { kind: Se.Identifier, name: null, identifier: s.localRefs[r].name, local: !1 } });
            break;
        case u.DeclareLet:
            t.letDeclarations.push({ targetId: s.xref, targetSlot: s.handle, variable: { kind: Se.Identifier, name: null, identifier: s.declaredName, local: !1 } });
            break;
    } return t; }
function Hi(n, e, t) { let s = []; e.view !== n.xref && s.push(dn(n.job.allocateXrefId(), e.viewContextVariable, new Aa, lt.None)); let r = n.job.views.get(e.view); for (let [i, a] of r.contextVariables) {
    let o = new bn(e.view), l = a === cf ? o : new We(o, a);
    s.push(dn(n.job.allocateXrefId(), e.contextVariables.get(i), l, lt.None));
} for (let i of r.aliases)
    s.push(dn(n.job.allocateXrefId(), i, i.expression.clone(), lt.AlwaysInline)); for (let i of e.references)
    s.push(dn(n.job.allocateXrefId(), i.variable, new Ca(i.targetId, i.targetSlot, i.offset), lt.None)); if (e.view !== n.xref || t)
    for (let i of e.letDeclarations)
        s.push(dn(n.job.allocateXrefId(), i.variable, new ii(i.targetId, i.targetSlot), lt.None)); return e.parent !== null && s.push(...Hi(n, e.parent, !1)), s; }
function ew(n) { for (let e of n.units)
    for (let t of e.ops())
        fe(t, s => s instanceof li ? d(n.addConst(s.expr)) : s, X.None); }
var Ou = "style.", Vu = "class.", tw = "style!", qu = "class!", Uu = "!important";
function nw(n) { for (let e of n.root.update)
    if (e.kind === u.Binding && e.bindingKind === T.Property)
        if (e.name.endsWith(Uu) && (e.name = e.name.substring(0, e.name.length - Uu.length)), e.name.startsWith(Ou)) {
            e.bindingKind = T.StyleProperty, e.name = e.name.substring(Ou.length), sw(e.name) || (e.name = rw(e.name));
            let { property: t, suffix: s } = yo(e.name);
            e.name = t, e.unit = s;
        }
        else
            e.name.startsWith(tw) ? (e.bindingKind = T.StyleProperty, e.name = "style") : e.name.startsWith(Vu) ? (e.bindingKind = T.ClassName, e.name = yo(e.name.substring(Vu.length)).property) : e.name.startsWith(qu) && (e.bindingKind = T.ClassName, e.name = yo(e.name.substring(qu.length)).property); }
function sw(n) { return n.startsWith("--"); }
function rw(n) { return n.replace(/[a-z][A-Z]/g, e => e.charAt(0) + "-" + e.charAt(1)).toLowerCase(); }
function yo(n) { let e = n.indexOf("!important"); e !== -1 && (n = e > 0 ? n.substring(0, e) : ""); let t = null, s = n, r = n.lastIndexOf("."); return r > 0 && (t = n.slice(r + 1), s = n.substring(0, r)), { property: s, suffix: t }; }
function La(n, e = !1) { return he(Object.keys(n).map(t => ({ key: t, quoted: e, value: n[t] }))); }
var Il = class {
    visitText(e) { return e.value; }
    visitContainer(e) { return e.children.map(t => t.visit(this)).join(""); }
    visitIcu(e) { let t = Object.keys(e.cases).map(r => `${r} {${e.cases[r].visit(this)}}`); return `{${e.expressionPlaceholder}, ${e.type}, ${t.join(" ")}}`; }
    visitTagPlaceholder(e) { return e.isVoid ? this.formatPh(e.startName) : `${this.formatPh(e.startName)}${e.children.map(t => t.visit(this)).join("")}${this.formatPh(e.closeName)}`; }
    visitPlaceholder(e) { return this.formatPh(e.name); }
    visitBlockPlaceholder(e) { return `${this.formatPh(e.startName)}${e.children.map(t => t.visit(this)).join("")}${this.formatPh(e.closeName)}`; }
    visitIcuPlaceholder(e, t) { return this.formatPh(e.name); }
    formatPh(e) { return `{${yi(e, !1)}}`; }
}, iw = new Il;
function ff(n) { return n.visit(iw); }
var an = class {
    sourceSpan;
    i18n;
    constructor(e, t) { this.sourceSpan = e, this.i18n = t; }
}, on = class extends an {
    value;
    tokens;
    constructor(e, t, s, r) { super(t, r), this.value = e, this.tokens = s; }
    visit(e, t) { return e.visitText(this, t); }
}, wn = class extends an {
    switchValue;
    type;
    cases;
    switchValueSourceSpan;
    constructor(e, t, s, r, i, a) { super(r, a), this.switchValue = e, this.type = t, this.cases = s, this.switchValueSourceSpan = i; }
    visit(e, t) { return e.visitExpansion(this, t); }
}, ui = class {
    value;
    expression;
    sourceSpan;
    valueSourceSpan;
    expSourceSpan;
    constructor(e, t, s, r, i) { this.value = e, this.expression = t, this.sourceSpan = s, this.valueSourceSpan = r, this.expSourceSpan = i; }
    visit(e, t) { return e.visitExpansionCase(this, t); }
}, En = class extends an {
    name;
    value;
    keySpan;
    valueSpan;
    valueTokens;
    constructor(e, t, s, r, i, a, o) { super(s, o), this.name = e, this.value = t, this.keySpan = r, this.valueSpan = i, this.valueTokens = a; }
    visit(e, t) { return e.visitAttribute(this, t); }
}, De = class extends an {
    name;
    attrs;
    directives;
    children;
    isSelfClosing;
    startSourceSpan;
    endSourceSpan;
    isVoid;
    constructor(e, t, s, r, i, a, o, l = null, c, h) { super(a, h), this.name = e, this.attrs = t, this.directives = s, this.children = r, this.isSelfClosing = i, this.startSourceSpan = o, this.endSourceSpan = l, this.isVoid = c; }
    visit(e, t) { return e.visitElement(this, t); }
}, Nn = class {
    value;
    sourceSpan;
    constructor(e, t) { this.value = e, this.sourceSpan = t; }
    visit(e, t) { return e.visitComment(this, t); }
}, at = class extends an {
    name;
    parameters;
    children;
    nameSpan;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r, i, a, o = null, l) { super(r, l), this.name = e, this.parameters = t, this.children = s, this.nameSpan = i, this.startSourceSpan = a, this.endSourceSpan = o; }
    visit(e, t) { return e.visitBlock(this, t); }
}, Ce = class extends an {
    componentName;
    tagName;
    fullName;
    attrs;
    directives;
    children;
    isSelfClosing;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r, i, a, o, l, c, h = null, p) { super(l, p), this.componentName = e, this.tagName = t, this.fullName = s, this.attrs = r, this.directives = i, this.children = a, this.isSelfClosing = o, this.startSourceSpan = c, this.endSourceSpan = h; }
    visit(e, t) { return e.visitComponent(this, t); }
}, Ba = class {
    name;
    attrs;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r, i = null) { this.name = e, this.attrs = t, this.sourceSpan = s, this.startSourceSpan = r, this.endSourceSpan = i; }
    visit(e, t) { return e.visitDirective(this, t); }
}, Ma = class {
    expression;
    sourceSpan;
    constructor(e, t) { this.expression = e, this.sourceSpan = t; }
    visit(e, t) { return e.visitBlockParameter(this, t); }
}, Ra = class {
    name;
    value;
    sourceSpan;
    nameSpan;
    valueSpan;
    constructor(e, t, s, r, i) { this.name = e, this.value = t, this.sourceSpan = s, this.nameSpan = r, this.valueSpan = i; }
    visit(e, t) { return e.visitLetDeclaration(this, t); }
};
function P(n, e, t = null) { let s = [], r = n.visit ? i => n.visit(i, t) || i.visit(n, t) : i => i.visit(n, t); return e.forEach(i => { let a = r(i); a && s.push(a); }), s; }
var Hu = class {
    constructor() { }
    visitElement(e, t) { this.visitChildren(t, s => { s(e.attrs), s(e.directives), s(e.children); }); }
    visitAttribute(e, t) { }
    visitText(e, t) { }
    visitComment(e, t) { }
    visitExpansion(e, t) { return this.visitChildren(t, s => { s(e.cases); }); }
    visitExpansionCase(e, t) { }
    visitBlock(e, t) { this.visitChildren(t, s => { s(e.parameters), s(e.children); }); }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { this.visitChildren(t, s => { s(e.attrs), s(e.children); }); }
    visitDirective(e, t) { this.visitChildren(t, s => { s(e.attrs); }); }
    visitChildren(e, t) { let s = [], r = this; function i(a) { a && s.push(P(r, a, e)); } return t(i), Array.prototype.concat.apply([], s); }
}, hi = { AElig: "\xC6", AMP: "&", amp: "&", Aacute: "\xC1", Abreve: "\u0102", Acirc: "\xC2", Acy: "\u0410", Afr: "\u{1D504}", Agrave: "\xC0", Alpha: "\u0391", Amacr: "\u0100", And: "\u2A53", Aogon: "\u0104", Aopf: "\u{1D538}", ApplyFunction: "\u2061", af: "\u2061", Aring: "\xC5", angst: "\xC5", Ascr: "\u{1D49C}", Assign: "\u2254", colone: "\u2254", coloneq: "\u2254", Atilde: "\xC3", Auml: "\xC4", Backslash: "\u2216", setminus: "\u2216", setmn: "\u2216", smallsetminus: "\u2216", ssetmn: "\u2216", Barv: "\u2AE7", Barwed: "\u2306", doublebarwedge: "\u2306", Bcy: "\u0411", Because: "\u2235", becaus: "\u2235", because: "\u2235", Bernoullis: "\u212C", Bscr: "\u212C", bernou: "\u212C", Beta: "\u0392", Bfr: "\u{1D505}", Bopf: "\u{1D539}", Breve: "\u02D8", breve: "\u02D8", Bumpeq: "\u224E", HumpDownHump: "\u224E", bump: "\u224E", CHcy: "\u0427", COPY: "\xA9", copy: "\xA9", Cacute: "\u0106", Cap: "\u22D2", CapitalDifferentialD: "\u2145", DD: "\u2145", Cayleys: "\u212D", Cfr: "\u212D", Ccaron: "\u010C", Ccedil: "\xC7", Ccirc: "\u0108", Cconint: "\u2230", Cdot: "\u010A", Cedilla: "\xB8", cedil: "\xB8", CenterDot: "\xB7", centerdot: "\xB7", middot: "\xB7", Chi: "\u03A7", CircleDot: "\u2299", odot: "\u2299", CircleMinus: "\u2296", ominus: "\u2296", CirclePlus: "\u2295", oplus: "\u2295", CircleTimes: "\u2297", otimes: "\u2297", ClockwiseContourIntegral: "\u2232", cwconint: "\u2232", CloseCurlyDoubleQuote: "\u201D", rdquo: "\u201D", rdquor: "\u201D", CloseCurlyQuote: "\u2019", rsquo: "\u2019", rsquor: "\u2019", Colon: "\u2237", Proportion: "\u2237", Colone: "\u2A74", Congruent: "\u2261", equiv: "\u2261", Conint: "\u222F", DoubleContourIntegral: "\u222F", ContourIntegral: "\u222E", conint: "\u222E", oint: "\u222E", Copf: "\u2102", complexes: "\u2102", Coproduct: "\u2210", coprod: "\u2210", CounterClockwiseContourIntegral: "\u2233", awconint: "\u2233", Cross: "\u2A2F", Cscr: "\u{1D49E}", Cup: "\u22D3", CupCap: "\u224D", asympeq: "\u224D", DDotrahd: "\u2911", DJcy: "\u0402", DScy: "\u0405", DZcy: "\u040F", Dagger: "\u2021", ddagger: "\u2021", Darr: "\u21A1", Dashv: "\u2AE4", DoubleLeftTee: "\u2AE4", Dcaron: "\u010E", Dcy: "\u0414", Del: "\u2207", nabla: "\u2207", Delta: "\u0394", Dfr: "\u{1D507}", DiacriticalAcute: "\xB4", acute: "\xB4", DiacriticalDot: "\u02D9", dot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", dblac: "\u02DD", DiacriticalGrave: "`", grave: "`", DiacriticalTilde: "\u02DC", tilde: "\u02DC", Diamond: "\u22C4", diam: "\u22C4", diamond: "\u22C4", DifferentialD: "\u2146", dd: "\u2146", Dopf: "\u{1D53B}", Dot: "\xA8", DoubleDot: "\xA8", die: "\xA8", uml: "\xA8", DotDot: "\u20DC", DotEqual: "\u2250", doteq: "\u2250", esdot: "\u2250", DoubleDownArrow: "\u21D3", Downarrow: "\u21D3", dArr: "\u21D3", DoubleLeftArrow: "\u21D0", Leftarrow: "\u21D0", lArr: "\u21D0", DoubleLeftRightArrow: "\u21D4", Leftrightarrow: "\u21D4", hArr: "\u21D4", iff: "\u21D4", DoubleLongLeftArrow: "\u27F8", Longleftarrow: "\u27F8", xlArr: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", Longleftrightarrow: "\u27FA", xhArr: "\u27FA", DoubleLongRightArrow: "\u27F9", Longrightarrow: "\u27F9", xrArr: "\u27F9", DoubleRightArrow: "\u21D2", Implies: "\u21D2", Rightarrow: "\u21D2", rArr: "\u21D2", DoubleRightTee: "\u22A8", vDash: "\u22A8", DoubleUpArrow: "\u21D1", Uparrow: "\u21D1", uArr: "\u21D1", DoubleUpDownArrow: "\u21D5", Updownarrow: "\u21D5", vArr: "\u21D5", DoubleVerticalBar: "\u2225", par: "\u2225", parallel: "\u2225", shortparallel: "\u2225", spar: "\u2225", DownArrow: "\u2193", ShortDownArrow: "\u2193", darr: "\u2193", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", duarr: "\u21F5", DownBreve: "\u0311", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", leftharpoondown: "\u21BD", lhard: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", rhard: "\u21C1", rightharpoondown: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", top: "\u22A4", DownTeeArrow: "\u21A7", mapstodown: "\u21A7", Dscr: "\u{1D49F}", Dstrok: "\u0110", ENG: "\u014A", ETH: "\xD0", Eacute: "\xC9", Ecaron: "\u011A", Ecirc: "\xCA", Ecy: "\u042D", Edot: "\u0116", Efr: "\u{1D508}", Egrave: "\xC8", Element: "\u2208", in: "\u2208", isin: "\u2208", isinv: "\u2208", Emacr: "\u0112", EmptySmallSquare: "\u25FB", EmptyVerySmallSquare: "\u25AB", Eogon: "\u0118", Eopf: "\u{1D53C}", Epsilon: "\u0395", Equal: "\u2A75", EqualTilde: "\u2242", eqsim: "\u2242", esim: "\u2242", Equilibrium: "\u21CC", rightleftharpoons: "\u21CC", rlhar: "\u21CC", Escr: "\u2130", expectation: "\u2130", Esim: "\u2A73", Eta: "\u0397", Euml: "\xCB", Exists: "\u2203", exist: "\u2203", ExponentialE: "\u2147", ee: "\u2147", exponentiale: "\u2147", Fcy: "\u0424", Ffr: "\u{1D509}", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", blacksquare: "\u25AA", squarf: "\u25AA", squf: "\u25AA", Fopf: "\u{1D53D}", ForAll: "\u2200", forall: "\u2200", Fouriertrf: "\u2131", Fscr: "\u2131", GJcy: "\u0403", GT: ">", gt: ">", Gamma: "\u0393", Gammad: "\u03DC", Gbreve: "\u011E", Gcedil: "\u0122", Gcirc: "\u011C", Gcy: "\u0413", Gdot: "\u0120", Gfr: "\u{1D50A}", Gg: "\u22D9", ggg: "\u22D9", Gopf: "\u{1D53E}", GreaterEqual: "\u2265", ge: "\u2265", geq: "\u2265", GreaterEqualLess: "\u22DB", gel: "\u22DB", gtreqless: "\u22DB", GreaterFullEqual: "\u2267", gE: "\u2267", geqq: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", gl: "\u2277", gtrless: "\u2277", GreaterSlantEqual: "\u2A7E", geqslant: "\u2A7E", ges: "\u2A7E", GreaterTilde: "\u2273", gsim: "\u2273", gtrsim: "\u2273", Gscr: "\u{1D4A2}", Gt: "\u226B", NestedGreaterGreater: "\u226B", gg: "\u226B", HARDcy: "\u042A", Hacek: "\u02C7", caron: "\u02C7", Hat: "^", Hcirc: "\u0124", Hfr: "\u210C", Poincareplane: "\u210C", HilbertSpace: "\u210B", Hscr: "\u210B", hamilt: "\u210B", Hopf: "\u210D", quaternions: "\u210D", HorizontalLine: "\u2500", boxh: "\u2500", Hstrok: "\u0126", HumpEqual: "\u224F", bumpe: "\u224F", bumpeq: "\u224F", IEcy: "\u0415", IJlig: "\u0132", IOcy: "\u0401", Iacute: "\xCD", Icirc: "\xCE", Icy: "\u0418", Idot: "\u0130", Ifr: "\u2111", Im: "\u2111", image: "\u2111", imagpart: "\u2111", Igrave: "\xCC", Imacr: "\u012A", ImaginaryI: "\u2148", ii: "\u2148", Int: "\u222C", Integral: "\u222B", int: "\u222B", Intersection: "\u22C2", bigcap: "\u22C2", xcap: "\u22C2", InvisibleComma: "\u2063", ic: "\u2063", InvisibleTimes: "\u2062", it: "\u2062", Iogon: "\u012E", Iopf: "\u{1D540}", Iota: "\u0399", Iscr: "\u2110", imagline: "\u2110", Itilde: "\u0128", Iukcy: "\u0406", Iuml: "\xCF", Jcirc: "\u0134", Jcy: "\u0419", Jfr: "\u{1D50D}", Jopf: "\u{1D541}", Jscr: "\u{1D4A5}", Jsercy: "\u0408", Jukcy: "\u0404", KHcy: "\u0425", KJcy: "\u040C", Kappa: "\u039A", Kcedil: "\u0136", Kcy: "\u041A", Kfr: "\u{1D50E}", Kopf: "\u{1D542}", Kscr: "\u{1D4A6}", LJcy: "\u0409", LT: "<", lt: "<", Lacute: "\u0139", Lambda: "\u039B", Lang: "\u27EA", Laplacetrf: "\u2112", Lscr: "\u2112", lagran: "\u2112", Larr: "\u219E", twoheadleftarrow: "\u219E", Lcaron: "\u013D", Lcedil: "\u013B", Lcy: "\u041B", LeftAngleBracket: "\u27E8", lang: "\u27E8", langle: "\u27E8", LeftArrow: "\u2190", ShortLeftArrow: "\u2190", larr: "\u2190", leftarrow: "\u2190", slarr: "\u2190", LeftArrowBar: "\u21E4", larrb: "\u21E4", LeftArrowRightArrow: "\u21C6", leftrightarrows: "\u21C6", lrarr: "\u21C6", LeftCeiling: "\u2308", lceil: "\u2308", LeftDoubleBracket: "\u27E6", lobrk: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", dharl: "\u21C3", downharpoonleft: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", lfloor: "\u230A", LeftRightArrow: "\u2194", harr: "\u2194", leftrightarrow: "\u2194", LeftRightVector: "\u294E", LeftTee: "\u22A3", dashv: "\u22A3", LeftTeeArrow: "\u21A4", mapstoleft: "\u21A4", LeftTeeVector: "\u295A", LeftTriangle: "\u22B2", vartriangleleft: "\u22B2", vltri: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", ltrie: "\u22B4", trianglelefteq: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", uharl: "\u21BF", upharpoonleft: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", leftharpoonup: "\u21BC", lharu: "\u21BC", LeftVectorBar: "\u2952", LessEqualGreater: "\u22DA", leg: "\u22DA", lesseqgtr: "\u22DA", LessFullEqual: "\u2266", lE: "\u2266", leqq: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", lg: "\u2276", LessLess: "\u2AA1", LessSlantEqual: "\u2A7D", leqslant: "\u2A7D", les: "\u2A7D", LessTilde: "\u2272", lesssim: "\u2272", lsim: "\u2272", Lfr: "\u{1D50F}", Ll: "\u22D8", Lleftarrow: "\u21DA", lAarr: "\u21DA", Lmidot: "\u013F", LongLeftArrow: "\u27F5", longleftarrow: "\u27F5", xlarr: "\u27F5", LongLeftRightArrow: "\u27F7", longleftrightarrow: "\u27F7", xharr: "\u27F7", LongRightArrow: "\u27F6", longrightarrow: "\u27F6", xrarr: "\u27F6", Lopf: "\u{1D543}", LowerLeftArrow: "\u2199", swarr: "\u2199", swarrow: "\u2199", LowerRightArrow: "\u2198", searr: "\u2198", searrow: "\u2198", Lsh: "\u21B0", lsh: "\u21B0", Lstrok: "\u0141", Lt: "\u226A", NestedLessLess: "\u226A", ll: "\u226A", Map: "\u2905", Mcy: "\u041C", MediumSpace: "\u205F", Mellintrf: "\u2133", Mscr: "\u2133", phmmat: "\u2133", Mfr: "\u{1D510}", MinusPlus: "\u2213", mnplus: "\u2213", mp: "\u2213", Mopf: "\u{1D544}", Mu: "\u039C", NJcy: "\u040A", Nacute: "\u0143", Ncaron: "\u0147", Ncedil: "\u0145", Ncy: "\u041D", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", ZeroWidthSpace: "\u200B", NewLine: `
`, Nfr: "\u{1D511}", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nbsp: "\xA0", Nopf: "\u2115", naturals: "\u2115", Not: "\u2AEC", NotCongruent: "\u2262", nequiv: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", npar: "\u2226", nparallel: "\u2226", nshortparallel: "\u2226", nspar: "\u2226", NotElement: "\u2209", notin: "\u2209", notinva: "\u2209", NotEqual: "\u2260", ne: "\u2260", NotEqualTilde: "\u2242\u0338", nesim: "\u2242\u0338", NotExists: "\u2204", nexist: "\u2204", nexists: "\u2204", NotGreater: "\u226F", ngt: "\u226F", ngtr: "\u226F", NotGreaterEqual: "\u2271", nge: "\u2271", ngeq: "\u2271", NotGreaterFullEqual: "\u2267\u0338", ngE: "\u2267\u0338", ngeqq: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", nGtv: "\u226B\u0338", NotGreaterLess: "\u2279", ntgl: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", NotGreaterTilde: "\u2275", ngsim: "\u2275", NotHumpDownHump: "\u224E\u0338", nbump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", nbumpe: "\u224F\u0338", NotLeftTriangle: "\u22EA", nltri: "\u22EA", ntriangleleft: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", nltrie: "\u22EC", ntrianglelefteq: "\u22EC", NotLess: "\u226E", nless: "\u226E", nlt: "\u226E", NotLessEqual: "\u2270", nle: "\u2270", nleq: "\u2270", NotLessGreater: "\u2278", ntlg: "\u2278", NotLessLess: "\u226A\u0338", nLtv: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", NotLessTilde: "\u2274", nlsim: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", NotPrecedes: "\u2280", npr: "\u2280", nprec: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", npre: "\u2AAF\u0338", npreceq: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", nprcue: "\u22E0", NotReverseElement: "\u220C", notni: "\u220C", notniva: "\u220C", NotRightTriangle: "\u22EB", nrtri: "\u22EB", ntriangleright: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", nrtrie: "\u22ED", ntrianglerighteq: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", nsqsube: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", nsqsupe: "\u22E3", NotSubset: "\u2282\u20D2", nsubset: "\u2282\u20D2", vnsub: "\u2282\u20D2", NotSubsetEqual: "\u2288", nsube: "\u2288", nsubseteq: "\u2288", NotSucceeds: "\u2281", nsc: "\u2281", nsucc: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", nsce: "\u2AB0\u0338", nsucceq: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", nsccue: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", nsupset: "\u2283\u20D2", vnsup: "\u2283\u20D2", NotSupersetEqual: "\u2289", nsupe: "\u2289", nsupseteq: "\u2289", NotTilde: "\u2241", nsim: "\u2241", NotTildeEqual: "\u2244", nsime: "\u2244", nsimeq: "\u2244", NotTildeFullEqual: "\u2247", ncong: "\u2247", NotTildeTilde: "\u2249", nap: "\u2249", napprox: "\u2249", NotVerticalBar: "\u2224", nmid: "\u2224", nshortmid: "\u2224", nsmid: "\u2224", Nscr: "\u{1D4A9}", Ntilde: "\xD1", Nu: "\u039D", OElig: "\u0152", Oacute: "\xD3", Ocirc: "\xD4", Ocy: "\u041E", Odblac: "\u0150", Ofr: "\u{1D512}", Ograve: "\xD2", Omacr: "\u014C", Omega: "\u03A9", ohm: "\u03A9", Omicron: "\u039F", Oopf: "\u{1D546}", OpenCurlyDoubleQuote: "\u201C", ldquo: "\u201C", OpenCurlyQuote: "\u2018", lsquo: "\u2018", Or: "\u2A54", Oscr: "\u{1D4AA}", Oslash: "\xD8", Otilde: "\xD5", Otimes: "\u2A37", Ouml: "\xD6", OverBar: "\u203E", oline: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", tbrk: "\u23B4", OverParenthesis: "\u23DC", PartialD: "\u2202", part: "\u2202", Pcy: "\u041F", Pfr: "\u{1D513}", Phi: "\u03A6", Pi: "\u03A0", PlusMinus: "\xB1", plusmn: "\xB1", pm: "\xB1", Popf: "\u2119", primes: "\u2119", Pr: "\u2ABB", Precedes: "\u227A", pr: "\u227A", prec: "\u227A", PrecedesEqual: "\u2AAF", pre: "\u2AAF", preceq: "\u2AAF", PrecedesSlantEqual: "\u227C", prcue: "\u227C", preccurlyeq: "\u227C", PrecedesTilde: "\u227E", precsim: "\u227E", prsim: "\u227E", Prime: "\u2033", Product: "\u220F", prod: "\u220F", Proportional: "\u221D", prop: "\u221D", propto: "\u221D", varpropto: "\u221D", vprop: "\u221D", Pscr: "\u{1D4AB}", Psi: "\u03A8", QUOT: '"', quot: '"', Qfr: "\u{1D514}", Qopf: "\u211A", rationals: "\u211A", Qscr: "\u{1D4AC}", RBarr: "\u2910", drbkarow: "\u2910", REG: "\xAE", circledR: "\xAE", reg: "\xAE", Racute: "\u0154", Rang: "\u27EB", Rarr: "\u21A0", twoheadrightarrow: "\u21A0", Rarrtl: "\u2916", Rcaron: "\u0158", Rcedil: "\u0156", Rcy: "\u0420", Re: "\u211C", Rfr: "\u211C", real: "\u211C", realpart: "\u211C", ReverseElement: "\u220B", SuchThat: "\u220B", ni: "\u220B", niv: "\u220B", ReverseEquilibrium: "\u21CB", leftrightharpoons: "\u21CB", lrhar: "\u21CB", ReverseUpEquilibrium: "\u296F", duhar: "\u296F", Rho: "\u03A1", RightAngleBracket: "\u27E9", rang: "\u27E9", rangle: "\u27E9", RightArrow: "\u2192", ShortRightArrow: "\u2192", rarr: "\u2192", rightarrow: "\u2192", srarr: "\u2192", RightArrowBar: "\u21E5", rarrb: "\u21E5", RightArrowLeftArrow: "\u21C4", rightleftarrows: "\u21C4", rlarr: "\u21C4", RightCeiling: "\u2309", rceil: "\u2309", RightDoubleBracket: "\u27E7", robrk: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", dharr: "\u21C2", downharpoonright: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rfloor: "\u230B", RightTee: "\u22A2", vdash: "\u22A2", RightTeeArrow: "\u21A6", map: "\u21A6", mapsto: "\u21A6", RightTeeVector: "\u295B", RightTriangle: "\u22B3", vartriangleright: "\u22B3", vrtri: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", rtrie: "\u22B5", trianglerighteq: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", uharr: "\u21BE", upharpoonright: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", rharu: "\u21C0", rightharpoonup: "\u21C0", RightVectorBar: "\u2953", Ropf: "\u211D", reals: "\u211D", RoundImplies: "\u2970", Rrightarrow: "\u21DB", rAarr: "\u21DB", Rscr: "\u211B", realine: "\u211B", Rsh: "\u21B1", rsh: "\u21B1", RuleDelayed: "\u29F4", SHCHcy: "\u0429", SHcy: "\u0428", SOFTcy: "\u042C", Sacute: "\u015A", Sc: "\u2ABC", Scaron: "\u0160", Scedil: "\u015E", Scirc: "\u015C", Scy: "\u0421", Sfr: "\u{1D516}", ShortUpArrow: "\u2191", UpArrow: "\u2191", uarr: "\u2191", uparrow: "\u2191", Sigma: "\u03A3", SmallCircle: "\u2218", compfn: "\u2218", Sopf: "\u{1D54A}", Sqrt: "\u221A", radic: "\u221A", Square: "\u25A1", squ: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", sqcap: "\u2293", SquareSubset: "\u228F", sqsub: "\u228F", sqsubset: "\u228F", SquareSubsetEqual: "\u2291", sqsube: "\u2291", sqsubseteq: "\u2291", SquareSuperset: "\u2290", sqsup: "\u2290", sqsupset: "\u2290", SquareSupersetEqual: "\u2292", sqsupe: "\u2292", sqsupseteq: "\u2292", SquareUnion: "\u2294", sqcup: "\u2294", Sscr: "\u{1D4AE}", Star: "\u22C6", sstarf: "\u22C6", Sub: "\u22D0", Subset: "\u22D0", SubsetEqual: "\u2286", sube: "\u2286", subseteq: "\u2286", Succeeds: "\u227B", sc: "\u227B", succ: "\u227B", SucceedsEqual: "\u2AB0", sce: "\u2AB0", succeq: "\u2AB0", SucceedsSlantEqual: "\u227D", sccue: "\u227D", succcurlyeq: "\u227D", SucceedsTilde: "\u227F", scsim: "\u227F", succsim: "\u227F", Sum: "\u2211", sum: "\u2211", Sup: "\u22D1", Supset: "\u22D1", Superset: "\u2283", sup: "\u2283", supset: "\u2283", SupersetEqual: "\u2287", supe: "\u2287", supseteq: "\u2287", THORN: "\xDE", TRADE: "\u2122", trade: "\u2122", TSHcy: "\u040B", TScy: "\u0426", Tab: "	", Tau: "\u03A4", Tcaron: "\u0164", Tcedil: "\u0162", Tcy: "\u0422", Tfr: "\u{1D517}", Therefore: "\u2234", there4: "\u2234", therefore: "\u2234", Theta: "\u0398", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", Tilde: "\u223C", sim: "\u223C", thicksim: "\u223C", thksim: "\u223C", TildeEqual: "\u2243", sime: "\u2243", simeq: "\u2243", TildeFullEqual: "\u2245", cong: "\u2245", TildeTilde: "\u2248", ap: "\u2248", approx: "\u2248", asymp: "\u2248", thickapprox: "\u2248", thkap: "\u2248", Topf: "\u{1D54B}", TripleDot: "\u20DB", tdot: "\u20DB", Tscr: "\u{1D4AF}", Tstrok: "\u0166", Uacute: "\xDA", Uarr: "\u219F", Uarrocir: "\u2949", Ubrcy: "\u040E", Ubreve: "\u016C", Ucirc: "\xDB", Ucy: "\u0423", Udblac: "\u0170", Ufr: "\u{1D518}", Ugrave: "\xD9", Umacr: "\u016A", UnderBar: "_", lowbar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", bbrk: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", bigcup: "\u22C3", xcup: "\u22C3", UnionPlus: "\u228E", uplus: "\u228E", Uogon: "\u0172", Uopf: "\u{1D54C}", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", udarr: "\u21C5", UpDownArrow: "\u2195", updownarrow: "\u2195", varr: "\u2195", UpEquilibrium: "\u296E", udhar: "\u296E", UpTee: "\u22A5", bot: "\u22A5", bottom: "\u22A5", perp: "\u22A5", UpTeeArrow: "\u21A5", mapstoup: "\u21A5", UpperLeftArrow: "\u2196", nwarr: "\u2196", nwarrow: "\u2196", UpperRightArrow: "\u2197", nearr: "\u2197", nearrow: "\u2197", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", Uring: "\u016E", Uscr: "\u{1D4B0}", Utilde: "\u0168", Uuml: "\xDC", VDash: "\u22AB", Vbar: "\u2AEB", Vcy: "\u0412", Vdash: "\u22A9", Vdashl: "\u2AE6", Vee: "\u22C1", bigvee: "\u22C1", xvee: "\u22C1", Verbar: "\u2016", Vert: "\u2016", VerticalBar: "\u2223", mid: "\u2223", shortmid: "\u2223", smid: "\u2223", VerticalLine: "|", verbar: "|", vert: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", wr: "\u2240", wreath: "\u2240", VeryThinSpace: "\u200A", hairsp: "\u200A", Vfr: "\u{1D519}", Vopf: "\u{1D54D}", Vscr: "\u{1D4B1}", Vvdash: "\u22AA", Wcirc: "\u0174", Wedge: "\u22C0", bigwedge: "\u22C0", xwedge: "\u22C0", Wfr: "\u{1D51A}", Wopf: "\u{1D54E}", Wscr: "\u{1D4B2}", Xfr: "\u{1D51B}", Xi: "\u039E", Xopf: "\u{1D54F}", Xscr: "\u{1D4B3}", YAcy: "\u042F", YIcy: "\u0407", YUcy: "\u042E", Yacute: "\xDD", Ycirc: "\u0176", Ycy: "\u042B", Yfr: "\u{1D51C}", Yopf: "\u{1D550}", Yscr: "\u{1D4B4}", Yuml: "\u0178", ZHcy: "\u0416", Zacute: "\u0179", Zcaron: "\u017D", Zcy: "\u0417", Zdot: "\u017B", Zeta: "\u0396", Zfr: "\u2128", zeetrf: "\u2128", Zopf: "\u2124", integers: "\u2124", Zscr: "\u{1D4B5}", aacute: "\xE1", abreve: "\u0103", ac: "\u223E", mstpos: "\u223E", acE: "\u223E\u0333", acd: "\u223F", acirc: "\xE2", acy: "\u0430", aelig: "\xE6", afr: "\u{1D51E}", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", alpha: "\u03B1", amacr: "\u0101", amalg: "\u2A3F", and: "\u2227", wedge: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", angle: "\u2220", ange: "\u29A4", angmsd: "\u2221", measuredangle: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angzarr: "\u237C", aogon: "\u0105", aopf: "\u{1D552}", apE: "\u2A70", apacir: "\u2A6F", ape: "\u224A", approxeq: "\u224A", apid: "\u224B", apos: "'", aring: "\xE5", ascr: "\u{1D4B6}", ast: "*", midast: "*", atilde: "\xE3", auml: "\xE4", awint: "\u2A11", bNot: "\u2AED", backcong: "\u224C", bcong: "\u224C", backepsilon: "\u03F6", bepsi: "\u03F6", backprime: "\u2035", bprime: "\u2035", backsim: "\u223D", bsim: "\u223D", backsimeq: "\u22CD", bsime: "\u22CD", barvee: "\u22BD", barwed: "\u2305", barwedge: "\u2305", bbrktbrk: "\u23B6", bcy: "\u0431", bdquo: "\u201E", ldquor: "\u201E", bemptyv: "\u29B0", beta: "\u03B2", beth: "\u2136", between: "\u226C", twixt: "\u226C", bfr: "\u{1D51F}", bigcirc: "\u25EF", xcirc: "\u25EF", bigodot: "\u2A00", xodot: "\u2A00", bigoplus: "\u2A01", xoplus: "\u2A01", bigotimes: "\u2A02", xotime: "\u2A02", bigsqcup: "\u2A06", xsqcup: "\u2A06", bigstar: "\u2605", starf: "\u2605", bigtriangledown: "\u25BD", xdtri: "\u25BD", bigtriangleup: "\u25B3", xutri: "\u25B3", biguplus: "\u2A04", xuplus: "\u2A04", bkarow: "\u290D", rbarr: "\u290D", blacklozenge: "\u29EB", lozf: "\u29EB", blacktriangle: "\u25B4", utrif: "\u25B4", blacktriangledown: "\u25BE", dtrif: "\u25BE", blacktriangleleft: "\u25C2", ltrif: "\u25C2", blacktriangleright: "\u25B8", rtrif: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bnot: "\u2310", bopf: "\u{1D553}", bowtie: "\u22C8", boxDL: "\u2557", boxDR: "\u2554", boxDl: "\u2556", boxDr: "\u2553", boxH: "\u2550", boxHD: "\u2566", boxHU: "\u2569", boxHd: "\u2564", boxHu: "\u2567", boxUL: "\u255D", boxUR: "\u255A", boxUl: "\u255C", boxUr: "\u2559", boxV: "\u2551", boxVH: "\u256C", boxVL: "\u2563", boxVR: "\u2560", boxVh: "\u256B", boxVl: "\u2562", boxVr: "\u255F", boxbox: "\u29C9", boxdL: "\u2555", boxdR: "\u2552", boxdl: "\u2510", boxdr: "\u250C", boxhD: "\u2565", boxhU: "\u2568", boxhd: "\u252C", boxhu: "\u2534", boxminus: "\u229F", minusb: "\u229F", boxplus: "\u229E", plusb: "\u229E", boxtimes: "\u22A0", timesb: "\u22A0", boxuL: "\u255B", boxuR: "\u2558", boxul: "\u2518", boxur: "\u2514", boxv: "\u2502", boxvH: "\u256A", boxvL: "\u2561", boxvR: "\u255E", boxvh: "\u253C", boxvl: "\u2524", boxvr: "\u251C", brvbar: "\xA6", bscr: "\u{1D4B7}", bsemi: "\u204F", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bumpE: "\u2AAE", cacute: "\u0107", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", caps: "\u2229\uFE00", caret: "\u2041", ccaps: "\u2A4D", ccaron: "\u010D", ccedil: "\xE7", ccirc: "\u0109", ccups: "\u2A4C", ccupssm: "\u2A50", cdot: "\u010B", cemptyv: "\u29B2", cent: "\xA2", cfr: "\u{1D520}", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", chi: "\u03C7", cir: "\u25CB", cirE: "\u29C3", circ: "\u02C6", circeq: "\u2257", cire: "\u2257", circlearrowleft: "\u21BA", olarr: "\u21BA", circlearrowright: "\u21BB", orarr: "\u21BB", circledS: "\u24C8", oS: "\u24C8", circledast: "\u229B", oast: "\u229B", circledcirc: "\u229A", ocir: "\u229A", circleddash: "\u229D", odash: "\u229D", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", clubs: "\u2663", clubsuit: "\u2663", colon: ":", comma: ",", commat: "@", comp: "\u2201", complement: "\u2201", congdot: "\u2A6D", copf: "\u{1D554}", copysr: "\u2117", crarr: "\u21B5", cross: "\u2717", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", curlyeqprec: "\u22DE", cuesc: "\u22DF", curlyeqsucc: "\u22DF", cularr: "\u21B6", curvearrowleft: "\u21B6", cularrp: "\u293D", cup: "\u222A", cupbrcap: "\u2A48", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curvearrowright: "\u21B7", curarrm: "\u293C", curlyvee: "\u22CE", cuvee: "\u22CE", curlywedge: "\u22CF", cuwed: "\u22CF", curren: "\xA4", cwint: "\u2231", cylcty: "\u232D", dHar: "\u2965", dagger: "\u2020", daleth: "\u2138", dash: "\u2010", hyphen: "\u2010", dbkarow: "\u290F", rBarr: "\u290F", dcaron: "\u010F", dcy: "\u0434", ddarr: "\u21CA", downdownarrows: "\u21CA", ddotseq: "\u2A77", eDDot: "\u2A77", deg: "\xB0", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", dfr: "\u{1D521}", diamondsuit: "\u2666", diams: "\u2666", digamma: "\u03DD", gammad: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", djcy: "\u0452", dlcorn: "\u231E", llcorner: "\u231E", dlcrop: "\u230D", dollar: "$", dopf: "\u{1D555}", doteqdot: "\u2251", eDot: "\u2251", dotminus: "\u2238", minusd: "\u2238", dotplus: "\u2214", plusdo: "\u2214", dotsquare: "\u22A1", sdotb: "\u22A1", drcorn: "\u231F", lrcorner: "\u231F", drcrop: "\u230C", dscr: "\u{1D4B9}", dscy: "\u0455", dsol: "\u29F6", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", triangledown: "\u25BF", dwangle: "\u29A6", dzcy: "\u045F", dzigrarr: "\u27FF", eacute: "\xE9", easter: "\u2A6E", ecaron: "\u011B", ecir: "\u2256", eqcirc: "\u2256", ecirc: "\xEA", ecolon: "\u2255", eqcolon: "\u2255", ecy: "\u044D", edot: "\u0117", efDot: "\u2252", fallingdotseq: "\u2252", efr: "\u{1D522}", eg: "\u2A9A", egrave: "\xE8", egs: "\u2A96", eqslantgtr: "\u2A96", egsdot: "\u2A98", el: "\u2A99", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", eqslantless: "\u2A95", elsdot: "\u2A97", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", emptyv: "\u2205", varnothing: "\u2205", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", eng: "\u014B", ensp: "\u2002", eogon: "\u0119", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", epsilon: "\u03B5", epsiv: "\u03F5", straightepsilon: "\u03F5", varepsilon: "\u03F5", equals: "=", equest: "\u225F", questeq: "\u225F", equivDD: "\u2A78", eqvparsl: "\u29E5", erDot: "\u2253", risingdotseq: "\u2253", erarr: "\u2971", escr: "\u212F", eta: "\u03B7", eth: "\xF0", euml: "\xEB", euro: "\u20AC", excl: "!", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", ffr: "\u{1D523}", filig: "\uFB01", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", fopf: "\u{1D557}", fork: "\u22D4", pitchfork: "\u22D4", forkv: "\u2AD9", fpartint: "\u2A0D", frac12: "\xBD", half: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", sfrown: "\u2322", fscr: "\u{1D4BB}", gEl: "\u2A8C", gtreqqless: "\u2A8C", gacute: "\u01F5", gamma: "\u03B3", gap: "\u2A86", gtrapprox: "\u2A86", gbreve: "\u011F", gcirc: "\u011D", gcy: "\u0433", gdot: "\u0121", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", gfr: "\u{1D524}", gimel: "\u2137", gjcy: "\u0453", glE: "\u2A92", gla: "\u2AA5", glj: "\u2AA4", gnE: "\u2269", gneqq: "\u2269", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gneq: "\u2A88", gnsim: "\u22E7", gopf: "\u{1D558}", gscr: "\u210A", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtrdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrarr: "\u2978", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", hardcy: "\u044A", harrcir: "\u2948", harrw: "\u21AD", leftrightsquigarrow: "\u21AD", hbar: "\u210F", hslash: "\u210F", planck: "\u210F", plankv: "\u210F", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", mldr: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", hksearow: "\u2925", searhk: "\u2925", hkswarow: "\u2926", swarhk: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", larrhk: "\u21A9", hookrightarrow: "\u21AA", rarrhk: "\u21AA", hopf: "\u{1D559}", horbar: "\u2015", hscr: "\u{1D4BD}", hstrok: "\u0127", hybull: "\u2043", iacute: "\xED", icirc: "\xEE", icy: "\u0438", iecy: "\u0435", iexcl: "\xA1", ifr: "\u{1D526}", igrave: "\xEC", iiiint: "\u2A0C", qint: "\u2A0C", iiint: "\u222D", tint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", ijlig: "\u0133", imacr: "\u012B", imath: "\u0131", inodot: "\u0131", imof: "\u22B7", imped: "\u01B5", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", intcal: "\u22BA", intercal: "\u22BA", intlarhk: "\u2A17", intprod: "\u2A3C", iprod: "\u2A3C", iocy: "\u0451", iogon: "\u012F", iopf: "\u{1D55A}", iota: "\u03B9", iquest: "\xBF", iscr: "\u{1D4BE}", isinE: "\u22F9", isindot: "\u22F5", isins: "\u22F4", isinsv: "\u22F3", itilde: "\u0129", iukcy: "\u0456", iuml: "\xEF", jcirc: "\u0135", jcy: "\u0439", jfr: "\u{1D527}", jmath: "\u0237", jopf: "\u{1D55B}", jscr: "\u{1D4BF}", jsercy: "\u0458", jukcy: "\u0454", kappa: "\u03BA", kappav: "\u03F0", varkappa: "\u03F0", kcedil: "\u0137", kcy: "\u043A", kfr: "\u{1D528}", kgreen: "\u0138", khcy: "\u0445", kjcy: "\u045C", kopf: "\u{1D55C}", kscr: "\u{1D4C0}", lAtail: "\u291B", lBarr: "\u290E", lEg: "\u2A8B", lesseqqgtr: "\u2A8B", lHar: "\u2962", lacute: "\u013A", laemptyv: "\u29B4", lambda: "\u03BB", langd: "\u2991", lap: "\u2A85", lessapprox: "\u2A85", laquo: "\xAB", larrbfs: "\u291F", larrfs: "\u291D", larrlp: "\u21AB", looparrowleft: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", leftarrowtail: "\u21A2", lat: "\u2AAB", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lcub: "{", lbrack: "[", lsqb: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", lcaron: "\u013E", lcedil: "\u013C", lcy: "\u043B", ldca: "\u2936", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", leq: "\u2264", leftleftarrows: "\u21C7", llarr: "\u21C7", leftthreetimes: "\u22CB", lthree: "\u22CB", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessdot: "\u22D6", ltdot: "\u22D6", lfisht: "\u297C", lfr: "\u{1D529}", lgE: "\u2A91", lharul: "\u296A", lhblk: "\u2584", ljcy: "\u0459", llhard: "\u296B", lltri: "\u25FA", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnE: "\u2268", lneqq: "\u2268", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lneq: "\u2A87", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", longmapsto: "\u27FC", xmap: "\u27FC", looparrowright: "\u21AC", rarrlp: "\u21AC", lopar: "\u2985", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", loz: "\u25CA", lozenge: "\u25CA", lpar: "(", lparlt: "\u2993", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", lsime: "\u2A8D", lsimg: "\u2A8F", lsquor: "\u201A", sbquo: "\u201A", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltrPar: "\u2996", ltri: "\u25C3", triangleleft: "\u25C3", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", mDDot: "\u223A", macr: "\xAF", strns: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", marker: "\u25AE", mcomma: "\u2A29", mcy: "\u043C", mdash: "\u2014", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midcir: "\u2AF0", minus: "\u2212", minusdu: "\u2A2A", mlcp: "\u2ADB", models: "\u22A7", mopf: "\u{1D55E}", mscr: "\u{1D4C2}", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nGg: "\u22D9\u0338", nGt: "\u226B\u20D2", nLeftarrow: "\u21CD", nlArr: "\u21CD", nLeftrightarrow: "\u21CE", nhArr: "\u21CE", nLl: "\u22D8\u0338", nLt: "\u226A\u20D2", nRightarrow: "\u21CF", nrArr: "\u21CF", nVDash: "\u22AF", nVdash: "\u22AE", nacute: "\u0144", nang: "\u2220\u20D2", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", natur: "\u266E", natural: "\u266E", ncap: "\u2A43", ncaron: "\u0148", ncedil: "\u0146", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", ncy: "\u043D", ndash: "\u2013", neArr: "\u21D7", nearhk: "\u2924", nedot: "\u2250\u0338", nesear: "\u2928", toea: "\u2928", nfr: "\u{1D52B}", nharr: "\u21AE", nleftrightarrow: "\u21AE", nhpar: "\u2AF2", nis: "\u22FC", nisd: "\u22FA", njcy: "\u045A", nlE: "\u2266\u0338", nleqq: "\u2266\u0338", nlarr: "\u219A", nleftarrow: "\u219A", nldr: "\u2025", nopf: "\u{1D55F}", not: "\xAC", notinE: "\u22F9\u0338", notindot: "\u22F5\u0338", notinvb: "\u22F7", notinvc: "\u22F6", notnivb: "\u22FE", notnivc: "\u22FD", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", nrarr: "\u219B", nrightarrow: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nscr: "\u{1D4C3}", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsubseteqq: "\u2AC5\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupseteqq: "\u2AC6\u0338", ntilde: "\xF1", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvDash: "\u22AD", nvHarr: "\u2904", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwArr: "\u21D6", nwarhk: "\u2923", nwnear: "\u2927", oacute: "\xF3", ocirc: "\xF4", ocy: "\u043E", odblac: "\u0151", odiv: "\u2A38", odsold: "\u29BC", oelig: "\u0153", ofcir: "\u29BF", ofr: "\u{1D52C}", ogon: "\u02DB", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", olcir: "\u29BE", olcross: "\u29BB", olt: "\u29C0", omacr: "\u014D", omega: "\u03C9", omicron: "\u03BF", omid: "\u29B6", oopf: "\u{1D560}", opar: "\u29B7", operp: "\u29B9", or: "\u2228", vee: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", oscr: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oslash: "\xF8", osol: "\u2298", otilde: "\xF5", otimesas: "\u2A36", ouml: "\xF6", ovbar: "\u233D", para: "\xB6", parsim: "\u2AF3", parsl: "\u2AFD", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", pertenk: "\u2031", pfr: "\u{1D52D}", phi: "\u03C6", phiv: "\u03D5", straightphi: "\u03D5", varphi: "\u03D5", phone: "\u260E", pi: "\u03C0", piv: "\u03D6", varpi: "\u03D6", planckh: "\u210E", plus: "+", plusacir: "\u2A23", pluscir: "\u2A22", plusdu: "\u2A25", pluse: "\u2A72", plussim: "\u2A26", plustwo: "\u2A27", pointint: "\u2A15", popf: "\u{1D561}", pound: "\xA3", prE: "\u2AB3", prap: "\u2AB7", precapprox: "\u2AB7", precnapprox: "\u2AB9", prnap: "\u2AB9", precneqq: "\u2AB5", prnE: "\u2AB5", precnsim: "\u22E8", prnsim: "\u22E8", prime: "\u2032", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prurel: "\u22B0", pscr: "\u{1D4C5}", psi: "\u03C8", puncsp: "\u2008", qfr: "\u{1D52E}", qopf: "\u{1D562}", qprime: "\u2057", qscr: "\u{1D4C6}", quatint: "\u2A16", quest: "?", rAtail: "\u291C", rHar: "\u2964", race: "\u223D\u0331", racute: "\u0155", raemptyv: "\u29B3", rangd: "\u2992", range: "\u29A5", raquo: "\xBB", rarrap: "\u2975", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrpl: "\u2945", rarrsim: "\u2974", rarrtl: "\u21A3", rightarrowtail: "\u21A3", rarrw: "\u219D", rightsquigarrow: "\u219D", ratail: "\u291A", ratio: "\u2236", rbbrk: "\u2773", rbrace: "}", rcub: "}", rbrack: "]", rsqb: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", rcaron: "\u0159", rcedil: "\u0157", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdsh: "\u21B3", rect: "\u25AD", rfisht: "\u297D", rfr: "\u{1D52F}", rharul: "\u296C", rho: "\u03C1", rhov: "\u03F1", varrho: "\u03F1", rightrightarrows: "\u21C9", rrarr: "\u21C9", rightthreetimes: "\u22CC", rthree: "\u22CC", ring: "\u02DA", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", ropar: "\u2986", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rsaquo: "\u203A", rscr: "\u{1D4C7}", rtimes: "\u22CA", rtri: "\u25B9", triangleright: "\u25B9", rtriltri: "\u29CE", ruluhar: "\u2968", rx: "\u211E", sacute: "\u015B", scE: "\u2AB4", scap: "\u2AB8", succapprox: "\u2AB8", scaron: "\u0161", scedil: "\u015F", scirc: "\u015D", scnE: "\u2AB6", succneqq: "\u2AB6", scnap: "\u2ABA", succnapprox: "\u2ABA", scnsim: "\u22E9", succnsim: "\u22E9", scpolint: "\u2A13", scy: "\u0441", sdot: "\u22C5", sdote: "\u2A66", seArr: "\u21D8", sect: "\xA7", semi: ";", seswar: "\u2929", tosa: "\u2929", sext: "\u2736", sfr: "\u{1D530}", sharp: "\u266F", shchcy: "\u0449", shcy: "\u0448", shy: "\xAD", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", varsigma: "\u03C2", simdot: "\u2A6A", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", smashp: "\u2A33", smeparsl: "\u29E4", smile: "\u2323", ssmile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", sqcaps: "\u2293\uFE00", sqcups: "\u2294\uFE00", sscr: "\u{1D4C8}", star: "\u2606", sub: "\u2282", subset: "\u2282", subE: "\u2AC5", subseteqq: "\u2AC5", subdot: "\u2ABD", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subsetneqq: "\u2ACB", subne: "\u228A", subsetneq: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supE: "\u2AC6", supseteqq: "\u2AC6", supdot: "\u2ABE", supdsub: "\u2AD8", supedot: "\u2AC4", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supsetneqq: "\u2ACC", supne: "\u228B", supsetneq: "\u228B", supplus: "\u2AC0", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swArr: "\u21D9", swnwar: "\u292A", szlig: "\xDF", target: "\u2316", tau: "\u03C4", tcaron: "\u0165", tcedil: "\u0163", tcy: "\u0442", telrec: "\u2315", tfr: "\u{1D531}", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", vartheta: "\u03D1", thorn: "\xFE", times: "\xD7", timesbar: "\u2A31", timesd: "\u2A30", topbot: "\u2336", topcir: "\u2AF1", topf: "\u{1D565}", topfork: "\u2ADA", tprime: "\u2034", triangle: "\u25B5", utri: "\u25B5", triangleq: "\u225C", trie: "\u225C", tridot: "\u25EC", triminus: "\u2A3A", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", tscr: "\u{1D4C9}", tscy: "\u0446", tshcy: "\u045B", tstrok: "\u0167", uHar: "\u2963", uacute: "\xFA", ubrcy: "\u045E", ubreve: "\u016D", ucirc: "\xFB", ucy: "\u0443", udblac: "\u0171", ufisht: "\u297E", ufr: "\u{1D532}", ugrave: "\xF9", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", umacr: "\u016B", uogon: "\u0173", uopf: "\u{1D566}", upsi: "\u03C5", upsilon: "\u03C5", upuparrows: "\u21C8", uuarr: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", uring: "\u016F", urtri: "\u25F9", uscr: "\u{1D4CA}", utdot: "\u22F0", utilde: "\u0169", uuml: "\xFC", uwangle: "\u29A7", vBar: "\u2AE8", vBarv: "\u2AE9", vangrt: "\u299C", varsubsetneq: "\u228A\uFE00", vsubne: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", vsubnE: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", vsupne: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vsupnE: "\u2ACC\uFE00", vcy: "\u0432", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", vfr: "\u{1D533}", vopf: "\u{1D567}", vscr: "\u{1D4CB}", vzigzag: "\u299A", wcirc: "\u0175", wedbar: "\u2A5F", wedgeq: "\u2259", weierp: "\u2118", wp: "\u2118", wfr: "\u{1D534}", wopf: "\u{1D568}", wscr: "\u{1D4CC}", xfr: "\u{1D535}", xi: "\u03BE", xnis: "\u22FB", xopf: "\u{1D569}", xscr: "\u{1D4CD}", yacute: "\xFD", yacy: "\u044F", ycirc: "\u0177", ycy: "\u044B", yen: "\xA5", yfr: "\u{1D536}", yicy: "\u0457", yopf: "\u{1D56A}", yscr: "\u{1D4CE}", yucy: "\u044E", yuml: "\xFF", zacute: "\u017A", zcaron: "\u017E", zcy: "\u0437", zdot: "\u017C", zeta: "\u03B6", zfr: "\u{1D537}", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" }, df = "\uE500";
hi.ngsp = df;
var Nl = class {
    tokens;
    errors;
    nonNormalizedIcuExpressions;
    constructor(e, t, s) { this.tokens = e, this.errors = t, this.nonNormalizedIcuExpressions = s; }
};
function aw(n, e, t, s = {}) { let r = new Pl(new ei(n, e), t, s); return r.tokenize(), new Nl(gw(r.tokens), r.errors, r.nonNormalizedIcuExpressions); }
var ow = /\r\n?/g;
function gs(n) { return `Unexpected character "${n === _e ? "EOF" : String.fromCharCode(n)}"`; }
function Wu(n) { return `Unknown entity "${n}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`; }
function lw(n, e) { return `Unable to parse entity "${e}" - ${n} character reference entities must end with ";"`; }
var Dl = (function (n) { return n.HEX = "hexadecimal", n.DEC = "decimal", n; })(Dl || {}), cw = ["@if", "@else", "@for", "@switch", "@case", "@default", "@empty", "@defer", "@placeholder", "@loading", "@error"], Pl = class {
    _getTagDefinition;
    _cursor;
    _tokenizeIcu;
    _interpolationConfig;
    _leadingTriviaCodePoints;
    _currentTokenStart = null;
    _currentTokenType = null;
    _expansionCaseStack = [];
    _openDirectiveCount = 0;
    _inInterpolation = !1;
    _preserveLineEndings;
    _i18nNormalizeLineEndingsInICUs;
    _tokenizeBlocks;
    _tokenizeLet;
    _selectorlessEnabled;
    tokens = [];
    errors = [];
    nonNormalizedIcuExpressions = [];
    constructor(e, t, s) { this._getTagDefinition = t, this._tokenizeIcu = s.tokenizeExpansionForms || !1, this._interpolationConfig = s.interpolationConfig || ot, this._leadingTriviaCodePoints = s.leadingTriviaChars && s.leadingTriviaChars.map(i => i.codePointAt(0) || 0); let r = s.range || { endPos: e.content.length, startPos: 0, startLine: 0, startCol: 0 }; this._cursor = s.escapedString ? new Ll(e, r) : new Fa(e, r), this._preserveLineEndings = s.preserveLineEndings || !1, this._i18nNormalizeLineEndingsInICUs = s.i18nNormalizeLineEndingsInICUs || !1, this._tokenizeBlocks = s.tokenizeBlocks ?? !0, this._tokenizeLet = s.tokenizeLet ?? !0, this._selectorlessEnabled = s.selectorlessEnabled ?? !1; try {
        this._cursor.init();
    }
    catch (i) {
        this.handleError(i);
    } }
    _processCarriageReturns(e) {
        return this._preserveLineEndings ? e : e.replace(ow, `
`);
    }
    tokenize() { for (; this._cursor.peek() !== _e;) {
        let e = this._cursor.clone();
        try {
            this._attemptCharCode(bs) ? this._attemptCharCode(ml) ? this._attemptCharCode(vn) ? this._consumeCdata(e) : this._attemptCharCode(wa) ? this._consumeComment(e) : this._consumeDocType(e) : this._attemptCharCode(Et) ? this._consumeTagClose(e) : this._consumeTagOpen(e) : this._tokenizeLet && this._cursor.peek() === fs && !this._inInterpolation && this._isLetStart() ? this._consumeLetDeclaration(e) : this._tokenizeBlocks && this._isBlockStart() ? this._consumeBlockStart(e) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(Le) ? this._consumeBlockEnd(e) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(5, 8, () => this._isTextEnd(), () => this._isTagStart());
        }
        catch (t) {
            this.handleError(t);
        }
    } this._beginToken(41), this._endToken([]); }
    _getBlockName() { let e = !1, t = this._cursor.clone(); return this._attemptCharCodeUntilFn(s => Kr(s) ? !e : mw(s) ? (e = !0, !1) : !0), this._cursor.getChars(t).trim(); }
    _consumeBlockStart(e) { this._requireCharCode(fs), this._beginToken(24, e); let t = this._endToken([this._getBlockName()]); if (this._cursor.peek() === At)
        if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(re), this._attemptCharCode(Pe))
            this._attemptCharCodeUntilFn(re);
        else {
            t.type = 28;
            return;
        } this._attemptCharCode(yt) ? (this._beginToken(25), this._endToken([])) : t.type = 28; }
    _consumeBlockEnd(e) { this._beginToken(26, e), this._endToken([]); }
    _consumeBlockParameters() { for (this._attemptCharCodeUntilFn(zu); this._cursor.peek() !== Pe && this._cursor.peek() !== _e;) {
        this._beginToken(27);
        let e = this._cursor.clone(), t = null, s = 0;
        for (; this._cursor.peek() !== Ye && this._cursor.peek() !== _e || t !== null;) {
            let r = this._cursor.peek();
            if (r === Is)
                this._cursor.advance();
            else if (r === t)
                t = null;
            else if (t === null && wr(r))
                t = r;
            else if (r === At && t === null)
                s++;
            else if (r === Pe && t === null) {
                if (s === 0)
                    break;
                s > 0 && s--;
            }
            this._cursor.advance();
        }
        this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(zu);
    } }
    _consumeLetDeclaration(e) { if (this._requireStr("@let"), this._beginToken(29, e), Kr(this._cursor.peek()))
        this._attemptCharCodeUntilFn(re);
    else {
        let r = this._endToken([this._cursor.getChars(e)]);
        r.type = 32;
        return;
    } let t = this._endToken([this._getLetDeclarationName()]); if (this._attemptCharCodeUntilFn(re), !this._attemptCharCode(Te)) {
        t.type = 32;
        return;
    } this._attemptCharCodeUntilFn(r => re(r) && !Ea(r)), this._consumeLetDeclarationValue(), this._cursor.peek() === Ye ? (this._beginToken(31), this._endToken([]), this._cursor.advance()) : (t.type = 32, t.sourceSpan = this._cursor.getSpan(e)); }
    _getLetDeclarationName() { let e = this._cursor.clone(), t = !1; return this._attemptCharCodeUntilFn(s => Hs(s) || s === co || s === Ln || t && St(s) ? (t = !0, !1) : !0), this._cursor.getChars(e).trim(); }
    _consumeLetDeclarationValue() { let e = this._cursor.clone(); for (this._beginToken(30, e); this._cursor.peek() !== _e;) {
        let t = this._cursor.peek();
        if (t === Ye)
            break;
        wr(t) && (this._cursor.advance(), this._attemptCharCodeUntilFn(s => s === Is ? (this._cursor.advance(), !1) : s === t)), this._cursor.advance();
    } this._endToken([this._cursor.getChars(e)]); }
    _tokenizeExpansionForm() { if (this.isExpansionFormStart())
        return this._consumeExpansionFormStart(), !0; if (fw(this._cursor.peek()) && this._isInExpansionForm())
        return this._consumeExpansionCaseStart(), !0; if (this._cursor.peek() === Le) {
        if (this._isInExpansionCase())
            return this._consumeExpansionCaseEnd(), !0;
        if (this._isInExpansionForm())
            return this._consumeExpansionFormEnd(), !0;
    } return !1; }
    _beginToken(e, t = this._cursor.clone()) { this._currentTokenStart = t, this._currentTokenType = e; }
    _endToken(e, t) { if (this._currentTokenStart === null)
        throw new N(this._cursor.getSpan(t), "Programming error - attempted to end a token when there was no start to the token"); if (this._currentTokenType === null)
        throw new N(this._cursor.getSpan(this._currentTokenStart), "Programming error - attempted to end a token which has no token type"); let s = { type: this._currentTokenType, parts: e, sourceSpan: (t ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) }; return this.tokens.push(s), this._currentTokenStart = null, this._currentTokenType = null, s; }
    _createError(e, t) { this._isInExpansionForm() && (e += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`); let s = new N(t, e); return this._currentTokenStart = null, this._currentTokenType = null, s; }
    handleError(e) { if (e instanceof pi && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof N)
        this.errors.push(e);
    else
        throw e; }
    _attemptCharCode(e) { return this._cursor.peek() === e ? (this._cursor.advance(), !0) : !1; }
    _attemptCharCodeCaseInsensitive(e) { return dw(this._cursor.peek(), e) ? (this._cursor.advance(), !0) : !1; }
    _requireCharCode(e) { let t = this._cursor.clone(); if (!this._attemptCharCode(e))
        throw this._createError(gs(this._cursor.peek()), this._cursor.getSpan(t)); }
    _attemptStr(e) { let t = e.length; if (this._cursor.charsLeft() < t)
        return !1; let s = this._cursor.clone(); for (let r = 0; r < t; r++)
        if (!this._attemptCharCode(e.charCodeAt(r)))
            return this._cursor = s, !1; return !0; }
    _attemptStrCaseInsensitive(e) { for (let t = 0; t < e.length; t++)
        if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t)))
            return !1; return !0; }
    _requireStr(e) { let t = this._cursor.clone(); if (!this._attemptStr(e))
        throw this._createError(gs(this._cursor.peek()), this._cursor.getSpan(t)); }
    _attemptCharCodeUntilFn(e) { for (; !e(this._cursor.peek());)
        this._cursor.advance(); }
    _requireCharCodeUntilFn(e, t) { let s = this._cursor.clone(); if (this._attemptCharCodeUntilFn(e), this._cursor.diff(s) < t)
        throw this._createError(gs(this._cursor.peek()), this._cursor.getSpan(s)); }
    _attemptUntilChar(e) { for (; this._cursor.peek() !== e;)
        this._cursor.advance(); }
    _readChar() { let e = String.fromCodePoint(this._cursor.peek()); return this._cursor.advance(), e; }
    _peekStr(e) { let t = e.length; if (this._cursor.charsLeft() < t)
        return !1; let s = this._cursor.clone(); for (let r = 0; r < t; r++) {
        if (s.peek() !== e.charCodeAt(r))
            return !1;
        s.advance();
    } return !0; }
    _isBlockStart() { return this._cursor.peek() === fs && cw.some(e => this._peekStr(e)); }
    _isLetStart() { return this._cursor.peek() === fs && this._peekStr("@let"); }
    _consumeEntity(e) { this._beginToken(9); let t = this._cursor.clone(); if (this._cursor.advance(), this._attemptCharCode(Dp)) {
        let s = this._attemptCharCode(Op) || this._attemptCharCode(Lm), r = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(hw), this._cursor.peek() != Ye) {
            this._cursor.advance();
            let a = s ? Dl.HEX : Dl.DEC;
            throw this._createError(lw(a, this._cursor.getChars(t)), this._cursor.getSpan());
        }
        let i = this._cursor.getChars(r);
        this._cursor.advance();
        try {
            let a = parseInt(i, s ? 16 : 10);
            this._endToken([String.fromCodePoint(a), this._cursor.getChars(t)]);
        }
        catch {
            throw this._createError(Wu(this._cursor.getChars(t)), this._cursor.getSpan());
        }
    }
    else {
        let s = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(pw), this._cursor.peek() != Ye)
            this._beginToken(e, t), this._cursor = s, this._endToken(["&"]);
        else {
            let r = this._cursor.getChars(s);
            this._cursor.advance();
            let i = hi.hasOwnProperty(r) && hi[r];
            if (!i)
                throw this._createError(Wu(r), this._cursor.getSpan(t));
            this._endToken([i, `&${r};`]);
        }
    } }
    _consumeRawText(e, t) { this._beginToken(e ? 6 : 7); let s = []; for (;;) {
        let r = this._cursor.clone(), i = t();
        if (this._cursor = r, i)
            break;
        e && this._cursor.peek() === va ? (this._endToken([this._processCarriageReturns(s.join(""))]), s.length = 0, this._consumeEntity(6), this._beginToken(6)) : s.push(this._readChar());
    } this._endToken([this._processCarriageReturns(s.join(""))]); }
    _consumeComment(e) { this._beginToken(10, e), this._requireCharCode(wa), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("-->")), this._beginToken(11), this._requireStr("-->"), this._endToken([]); }
    _consumeCdata(e) { this._beginToken(12, e), this._requireStr("CDATA["), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("]]>")), this._beginToken(13), this._requireStr("]]>"), this._endToken([]); }
    _consumeDocType(e) { this._beginToken(18, e); let t = this._cursor.clone(); this._attemptUntilChar(it); let s = this._cursor.getChars(t); this._cursor.advance(), this._endToken([s]); }
    _consumePrefixAndName(e) { let t = this._cursor.clone(), s = ""; for (; this._cursor.peek() !== Gt && !uw(this._cursor.peek());)
        this._cursor.advance(); let r; this._cursor.peek() === Gt ? (s = this._cursor.getChars(t), this._cursor.advance(), r = this._cursor.clone()) : r = t, this._requireCharCodeUntilFn(e, s === "" ? 0 : 1); let i = this._cursor.getChars(r); return [s, i]; }
    _consumeTagOpen(e) { let t, s, r, i; try {
        if (this._selectorlessEnabled && Ti(this._cursor.peek()))
            i = this._consumeComponentOpenStart(e), [r, s, t] = i.parts, s && (r += `:${s}`), t && (r += `:${t}`), this._attemptCharCodeUntilFn(re);
        else {
            if (!Hs(this._cursor.peek()))
                throw this._createError(gs(this._cursor.peek()), this._cursor.getSpan(e));
            i = this._consumeTagOpenStart(e), s = i.parts[0], t = r = i.parts[1], this._attemptCharCodeUntilFn(re);
        }
        for (; !Xu(this._cursor.peek());)
            if (this._selectorlessEnabled && this._cursor.peek() === fs) {
                let o = this._cursor.clone(), l = o.clone();
                l.advance(), Ti(l.peek()) && this._consumeDirective(o, l);
            }
            else
                this._consumeAttribute();
        i.type === 33 ? this._consumeComponentOpenEnd() : this._consumeTagOpenEnd();
    }
    catch (o) {
        if (o instanceof N) {
            i ? i.type = i.type === 33 ? 37 : 4 : (this._beginToken(5, e), this._endToken(["<"]));
            return;
        }
        throw o;
    } let a = this._getTagDefinition(t).getContentType(s); a === Mt.RAW_TEXT ? this._consumeRawTextWithTagClose(i, r, !1) : a === Mt.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(i, r, !0); }
    _consumeRawTextWithTagClose(e, t, s) { this._consumeRawText(s, () => !this._attemptCharCode(bs) || !this._attemptCharCode(Et) || (this._attemptCharCodeUntilFn(re), !this._attemptStrCaseInsensitive(t)) ? !1 : (this._attemptCharCodeUntilFn(re), this._attemptCharCode(it))), this._beginToken(e.type === 33 ? 36 : 3), this._requireCharCodeUntilFn(r => r === it, 3), this._cursor.advance(), this._endToken(e.parts); }
    _consumeTagOpenStart(e) { this._beginToken(0, e); let t = this._consumePrefixAndName(Mn); return this._endToken(t); }
    _consumeComponentOpenStart(e) { this._beginToken(33, e); let t = this._consumeComponentName(); return this._endToken(t); }
    _consumeComponentName() { let e = this._cursor.clone(); for (; Gu(this._cursor.peek());)
        this._cursor.advance(); let t = this._cursor.getChars(e), s = "", r = ""; return this._cursor.peek() === Gt && (this._cursor.advance(), [s, r] = this._consumePrefixAndName(Mn)), [t, s, r]; }
    _consumeAttribute() { this._consumeAttributeName(), this._attemptCharCodeUntilFn(re), this._attemptCharCode(Te) && (this._attemptCharCodeUntilFn(re), this._consumeAttributeValue()), this._attemptCharCodeUntilFn(re); }
    _consumeAttributeName() { let e = this._cursor.peek(); if (e === Jr || e === Zr)
        throw this._createError(gs(e), this._cursor.getSpan()); this._beginToken(14); let t; if (this._openDirectiveCount > 0) {
        let r = 0;
        t = i => { if (this._openDirectiveCount > 0) {
            if (i === At)
                r++;
            else if (i === Pe) {
                if (r === 0)
                    return !0;
                r--;
            }
        } return Mn(i); };
    }
    else if (e === vn) {
        let r = 0;
        t = i => (i === vn ? r++ : i === Hn && r--, r <= 0 ? Mn(i) : Ea(i));
    }
    else
        t = Mn; let s = this._consumePrefixAndName(t); this._endToken(s); }
    _consumeAttributeValue() { if (this._cursor.peek() === Jr || this._cursor.peek() === Zr) {
        let e = this._cursor.peek();
        this._consumeQuote(e);
        let t = () => this._cursor.peek() === e;
        this._consumeWithInterpolation(16, 17, t, t), this._consumeQuote(e);
    }
    else {
        let e = () => Mn(this._cursor.peek());
        this._consumeWithInterpolation(16, 17, e, e);
    } }
    _consumeQuote(e) { this._beginToken(15), this._requireCharCode(e), this._endToken([String.fromCodePoint(e)]); }
    _consumeTagOpenEnd() { let e = this._attemptCharCode(Et) ? 2 : 1; this._beginToken(e), this._requireCharCode(it), this._endToken([]); }
    _consumeComponentOpenEnd() { let e = this._attemptCharCode(Et) ? 35 : 34; this._beginToken(e), this._requireCharCode(it), this._endToken([]); }
    _consumeTagClose(e) { if (this._selectorlessEnabled) {
        let s = e.clone();
        for (; s.peek() !== it && !Ti(s.peek());)
            s.advance();
        if (Ti(s.peek())) {
            this._beginToken(36, e);
            let r = this._consumeComponentName();
            this._attemptCharCodeUntilFn(re), this._requireCharCode(it), this._endToken(r);
            return;
        }
    } this._beginToken(3, e), this._attemptCharCodeUntilFn(re); let t = this._consumePrefixAndName(Mn); this._attemptCharCodeUntilFn(re), this._requireCharCode(it), this._endToken(t); }
    _consumeExpansionFormStart() { this._beginToken(19), this._requireCharCode(yt), this._endToken([]), this._expansionCaseStack.push(19), this._beginToken(7); let e = this._readUntil(ht), t = this._processCarriageReturns(e); if (this._i18nNormalizeLineEndingsInICUs)
        this._endToken([t]);
    else {
        let r = this._endToken([e]);
        t !== e && this.nonNormalizedIcuExpressions.push(r);
    } this._requireCharCode(ht), this._attemptCharCodeUntilFn(re), this._beginToken(7); let s = this._readUntil(ht); this._endToken([s]), this._requireCharCode(ht), this._attemptCharCodeUntilFn(re); }
    _consumeExpansionCaseStart() { this._beginToken(20); let e = this._readUntil(yt).trim(); this._endToken([e]), this._attemptCharCodeUntilFn(re), this._beginToken(21), this._requireCharCode(yt), this._endToken([]), this._attemptCharCodeUntilFn(re), this._expansionCaseStack.push(21); }
    _consumeExpansionCaseEnd() { this._beginToken(22), this._requireCharCode(Le), this._endToken([]), this._attemptCharCodeUntilFn(re), this._expansionCaseStack.pop(); }
    _consumeExpansionFormEnd() { this._beginToken(23), this._requireCharCode(Le), this._endToken([]), this._expansionCaseStack.pop(); }
    _consumeWithInterpolation(e, t, s, r) { this._beginToken(e); let i = []; for (; !s();) {
        let a = this._cursor.clone();
        this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (this._endToken([this._processCarriageReturns(i.join(""))], a), i.length = 0, this._consumeInterpolation(t, a, r), this._beginToken(e)) : this._cursor.peek() === va ? (this._endToken([this._processCarriageReturns(i.join(""))]), i.length = 0, this._consumeEntity(e), this._beginToken(e)) : i.push(this._readChar());
    } this._inInterpolation = !1, this._endToken([this._processCarriageReturns(i.join(""))]); }
    _consumeInterpolation(e, t, s) { let r = []; this._beginToken(e, t), r.push(this._interpolationConfig.start); let i = this._cursor.clone(), a = null, o = !1; for (; this._cursor.peek() !== _e && (s === null || !s());) {
        let l = this._cursor.clone();
        if (this._isTagStart()) {
            this._cursor = l, r.push(this._getProcessedChars(i, l)), this._endToken(r);
            return;
        }
        if (a === null)
            if (this._attemptStr(this._interpolationConfig.end)) {
                r.push(this._getProcessedChars(i, l)), r.push(this._interpolationConfig.end), this._endToken(r);
                return;
            }
            else
                this._attemptStr("//") && (o = !0);
        let c = this._cursor.peek();
        this._cursor.advance(), c === Is ? this._cursor.advance() : c === a ? a = null : !o && a === null && wr(c) && (a = c);
    } r.push(this._getProcessedChars(i, this._cursor)), this._endToken(r); }
    _consumeDirective(e, t) { for (this._requireCharCode(fs), this._cursor.advance(); Gu(this._cursor.peek());)
        this._cursor.advance(); this._beginToken(38, e); let s = this._cursor.getChars(t); if (this._endToken([s]), this._attemptCharCodeUntilFn(re), this._cursor.peek() === At) {
        for (this._openDirectiveCount++, this._beginToken(39), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(re); !Xu(this._cursor.peek()) && this._cursor.peek() !== Pe;)
            this._consumeAttribute();
        if (this._attemptCharCodeUntilFn(re), this._openDirectiveCount--, this._cursor.peek() !== Pe) {
            if (this._cursor.peek() === it || this._cursor.peek() === Et)
                return;
            throw this._createError(gs(this._cursor.peek()), this._cursor.getSpan(e));
        }
        this._beginToken(40), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(re);
    } }
    _getProcessedChars(e, t) { return this._processCarriageReturns(t.getChars(e)); }
    _isTextEnd() { return !!(this._isTagStart() || this._cursor.peek() === _e || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === Le && this._isInExpansionCase()) || this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || this._isLetStart() || this._cursor.peek() === Le)); }
    _isTagStart() { if (this._cursor.peek() === bs) {
        let e = this._cursor.clone();
        e.advance();
        let t = e.peek();
        if (as <= t && t <= Ci || Pn <= t && t <= Ks || t === Et || t === ml)
            return !0;
    } return !1; }
    _readUntil(e) { let t = this._cursor.clone(); return this._attemptUntilChar(e), this._cursor.getChars(t); }
    _isInExpansion() { return this._isInExpansionCase() || this._isInExpansionForm(); }
    _isInExpansionCase() { return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 21; }
    _isInExpansionForm() { return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 19; }
    isExpansionFormStart() { if (this._cursor.peek() !== yt)
        return !1; if (this._interpolationConfig) {
        let e = this._cursor.clone(), t = this._attemptStr(this._interpolationConfig.start);
        return this._cursor = e, !t;
    } return !0; }
};
function re(n) { return !Kr(n) || n === _e; }
function Mn(n) { return Kr(n) || n === it || n === bs || n === Et || n === Jr || n === Zr || n === Te || n === _e; }
function uw(n) { return (n < as || Ci < n) && (n < Pn || Ks < n) && (n < qc || n > Lp); }
function hw(n) { return n === Ye || n === _e || !Fm(n); }
function pw(n) { return n === Ye || n === _e || !Hs(n); }
function fw(n) { return n !== Le; }
function dw(n, e) { return ju(n) === ju(e); }
function ju(n) { return n >= as && n <= Ci ? n - as + Pn : n; }
function mw(n) { return Hs(n) || St(n) || n === Ln; }
function zu(n) { return n !== Ye && re(n); }
function Ti(n) { return n === Ln || n >= Pn && n <= Ks; }
function Gu(n) { return Hs(n) || St(n) || n === Ln; }
function Xu(n) { return n === Et || n === it || n === bs || n === _e; }
function gw(n) { let e = [], t; for (let s = 0; s < n.length; s++) {
    let r = n[s];
    t && t.type === 5 && r.type === 5 || t && t.type === 16 && r.type === 16 ? (t.parts[0] += r.parts[0], t.sourceSpan.end = r.sourceSpan.end) : (t = r, e.push(t));
} return e; }
var Fa = class n {
    state;
    file;
    input;
    end;
    constructor(e, t) { if (e instanceof n) {
        this.file = e.file, this.input = e.input, this.end = e.end;
        let s = e.state;
        this.state = { peek: s.peek, offset: s.offset, line: s.line, column: s.column };
    }
    else {
        if (!t)
            throw new Error("Programming error: the range argument must be provided with a file argument.");
        this.file = e, this.input = e.content, this.end = t.endPos, this.state = { peek: -1, offset: t.startPos, line: t.startLine, column: t.startCol };
    } }
    clone() { return new n(this); }
    peek() { return this.state.peek; }
    charsLeft() { return this.end - this.state.offset; }
    diff(e) { return this.state.offset - e.state.offset; }
    advance() { this.advanceState(this.state); }
    init() { this.updatePeek(this.state); }
    getSpan(e, t) { e = e || this; let s = e; if (t)
        for (; this.diff(e) > 0 && t.indexOf(e.peek()) !== -1;)
            s === e && (e = e.clone()), e.advance(); let r = this.locationFromCursor(e), i = this.locationFromCursor(this), a = s !== e ? this.locationFromCursor(s) : r; return new L(r, i, a); }
    getChars(e) { return this.input.substring(e.state.offset, this.state.offset); }
    charAt(e) { return this.input.charCodeAt(e); }
    advanceState(e) { if (e.offset >= this.end)
        throw this.state = e, new pi('Unexpected character "EOF"', this); let t = this.charAt(e.offset); t === Xn ? (e.line++, e.column = 0) : Ea(t) || e.column++, e.offset++, this.updatePeek(e); }
    updatePeek(e) { e.peek = e.offset >= this.end ? _e : this.charAt(e.offset); }
    locationFromCursor(e) { return new os(e.file, e.state.offset, e.state.line, e.state.column); }
}, Ll = class n extends Fa {
    internalState;
    constructor(e, t) { e instanceof n ? (super(e), this.internalState = S({}, e.internalState)) : (super(e, t), this.internalState = this.state); }
    advance() { this.state = this.internalState, super.advance(), this.processEscapeSequence(); }
    init() { super.init(), this.processEscapeSequence(); }
    clone() { return new n(this); }
    getChars(e) { let t = e.clone(), s = ""; for (; t.internalState.offset < this.internalState.offset;)
        s += String.fromCodePoint(t.peek()), t.advance(); return s; }
    processEscapeSequence() { let e = () => this.internalState.peek; if (e() === Is)
        if (this.internalState = S({}, this.state), this.advanceState(this.internalState), e() === Bp)
            this.state.peek = Xn;
        else if (e() === Mp)
            this.state.peek = Vc;
        else if (e() === $p)
            this.state.peek = bp;
        else if (e() === Rp)
            this.state.peek = Oc;
        else if (e() === Mm)
            this.state.peek = bm;
        else if (e() === Uc)
            this.state.peek = Ip;
        else if (e() === Fp)
            if (this.advanceState(this.internalState), e() === yt) {
                this.advanceState(this.internalState);
                let t = this.clone(), s = 0;
                for (; e() !== Le;)
                    this.advanceState(this.internalState), s++;
                this.state.peek = this.decodeHexDigits(t, s);
            }
            else {
                let t = this.clone();
                this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(t, 4);
            }
        else if (e() === Op) {
            this.advanceState(this.internalState);
            let t = this.clone();
            this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(t, 2);
        }
        else if (yu(e())) {
            let t = "", s = 0, r = this.clone();
            for (; yu(e()) && s < 3;)
                r = this.clone(), t += String.fromCodePoint(e()), this.advanceState(this.internalState), s++;
            this.state.peek = parseInt(t, 8), this.internalState = r.internalState;
        }
        else
            Ea(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek; }
    decodeHexDigits(e, t) { let s = this.input.slice(e.internalState.offset, e.internalState.offset + t), r = parseInt(s, 16); if (isNaN(r))
        throw e.state = e.internalState, new pi("Invalid hexadecimal escape sequence", e); return r; }
}, pi = class extends Error {
    msg;
    cursor;
    constructor(e, t) { super(e), this.msg = e, this.cursor = t, Object.setPrototypeOf(this, new.target.prototype); }
}, pe = class n extends N {
    elementName;
    static create(e, t, s) { return new n(e, t, s); }
    constructor(e, t, s) { super(t, s), this.elementName = e; }
}, Ys = class {
    rootNodes;
    errors;
    constructor(e, t) { this.rootNodes = e, this.errors = t; }
}, mf = class {
    getTagDefinition;
    constructor(e) { this.getTagDefinition = e; }
    parse(e, t, s) { let r = aw(e, t, this.getTagDefinition, s), i = new Bl(r.tokens, this.getTagDefinition); return i.build(), new Ys(i.rootNodes, [...r.errors, ...i.errors]); }
}, Bl = class n {
    tokens;
    tagDefinitionResolver;
    _index = -1;
    _peek;
    _containerStack = [];
    rootNodes = [];
    errors = [];
    constructor(e, t) { this.tokens = e, this.tagDefinitionResolver = t, this._advance(); }
    build() { for (; this._peek.type !== 41;)
        this._peek.type === 0 || this._peek.type === 4 ? this._consumeElementStartTag(this._advance()) : this._peek.type === 3 ? this._consumeElementEndTag(this._advance()) : this._peek.type === 12 ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === 10 ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === 5 || this._peek.type === 7 || this._peek.type === 6 ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === 19 ? this._consumeExpansion(this._advance()) : this._peek.type === 24 ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === 26 ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === 28 ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === 29 ? (this._closeVoidElement(), this._consumeLet(this._advance())) : this._peek.type === 32 ? (this._closeVoidElement(), this._consumeIncompleteLet(this._advance())) : this._peek.type === 33 || this._peek.type === 37 ? this._consumeComponentStartTag(this._advance()) : this._peek.type === 36 ? this._consumeComponentEndTag(this._advance()) : this._advance(); for (let e of this._containerStack)
        e instanceof at && this.errors.push(pe.create(e.name, e.sourceSpan, `Unclosed block "${e.name}"`)); }
    _advance() { let e = this._peek; return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], e; }
    _advanceIf(e) { return this._peek.type === e ? this._advance() : null; }
    _consumeCdata(e) { this._consumeText(this._advance()), this._advanceIf(13); }
    _consumeComment(e) { let t = this._advanceIf(7), s = this._advanceIf(11), r = t != null ? t.parts[0].trim() : null, i = s == null ? e.sourceSpan : new L(e.sourceSpan.start, s.sourceSpan.end, e.sourceSpan.fullStart); this._addToParent(new Nn(r, i)); }
    _consumeExpansion(e) { let t = this._advance(), s = this._advance(), r = []; for (; this._peek.type === 20;) {
        let a = this._parseExpansionCase();
        if (!a)
            return;
        r.push(a);
    } if (this._peek.type !== 23) {
        this.errors.push(pe.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
        return;
    } let i = new L(e.sourceSpan.start, this._peek.sourceSpan.end, e.sourceSpan.fullStart); this._addToParent(new wn(t.parts[0], s.parts[0], r, i, t.sourceSpan)), this._advance(); }
    _parseExpansionCase() { let e = this._advance(); if (this._peek.type !== 21)
        return this.errors.push(pe.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null; let t = this._advance(), s = this._collectExpansionExpTokens(t); if (!s)
        return null; let r = this._advance(); s.push({ type: 41, parts: [], sourceSpan: r.sourceSpan }); let i = new n(s, this.tagDefinitionResolver); if (i.build(), i.errors.length > 0)
        return this.errors = this.errors.concat(i.errors), null; let a = new L(e.sourceSpan.start, r.sourceSpan.end, e.sourceSpan.fullStart), o = new L(t.sourceSpan.start, r.sourceSpan.end, t.sourceSpan.fullStart); return new ui(e.parts[0], i.rootNodes, a, e.sourceSpan, o); }
    _collectExpansionExpTokens(e) { let t = [], s = [21]; for (;;) {
        if ((this._peek.type === 19 || this._peek.type === 21) && s.push(this._peek.type), this._peek.type === 22)
            if (Yu(s, 21)) {
                if (s.pop(), s.length === 0)
                    return t;
            }
            else
                return this.errors.push(pe.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        if (this._peek.type === 23)
            if (Yu(s, 19))
                s.pop();
            else
                return this.errors.push(pe.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        if (this._peek.type === 41)
            return this.errors.push(pe.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        t.push(this._advance());
    } }
    _consumeText(e) {
        let t = [e], s = e.sourceSpan, r = e.parts[0];
        if (r.length > 0 && r[0] === `
`) {
            let i = this._getContainer();
            i != null && i.children.length === 0 && this._getTagDefinition(i)?.ignoreFirstLf && (r = r.substring(1), t[0] = { type: e.type, sourceSpan: e.sourceSpan, parts: [r] });
        }
        for (; this._peek.type === 8 || this._peek.type === 5 || this._peek.type === 9;)
            e = this._advance(), t.push(e), e.type === 8 ? r += e.parts.join("").replace(/&([^;]+);/g, Qu) : e.type === 9 ? r += e.parts[0] : r += e.parts.join("");
        if (r.length > 0) {
            let i = e.sourceSpan;
            this._addToParent(new on(r, new L(s.start, i.end, s.fullStart, s.details), t));
        }
    }
    _closeVoidElement() { let e = this._getContainer(); e !== null && this._getTagDefinition(e)?.isVoid && this._containerStack.pop(); }
    _consumeElementStartTag(e) { let t = [], s = []; this._consumeAttributesAndDirectives(t, s); let r = this._getElementFullName(e, this._getClosestElementLikeParent()), i = this._getTagDefinition(r), a = !1; this._peek.type === 2 ? (this._advance(), a = !0, i?.canSelfClose || el(r) !== null || i?.isVoid || this.errors.push(pe.create(r, e.sourceSpan, `Only void, custom and foreign elements can be self closed "${e.parts[1]}"`))) : this._peek.type === 1 && (this._advance(), a = !1); let o = this._peek.sourceSpan.fullStart, l = new L(e.sourceSpan.start, o, e.sourceSpan.fullStart), c = new L(e.sourceSpan.start, o, e.sourceSpan.fullStart), h = new De(r, t, s, [], a, l, c, void 0, i?.isVoid ?? !1), p = this._getContainer(), g = p !== null && !!this._getTagDefinition(p)?.isClosedByChild(h.name); this._pushContainer(h, g), a ? this._popContainer(r, De, l) : e.type === 4 && (this._popContainer(r, De, null), this.errors.push(pe.create(r, l, `Opening tag "${r}" not terminated.`))); }
    _consumeComponentStartTag(e) { let t = e.parts[0], s = [], r = []; this._consumeAttributesAndDirectives(s, r); let i = this._getClosestElementLikeParent(), a = this._getComponentTagName(e, i), o = this._getComponentFullName(e, i), l = this._peek.type === 35; this._advance(); let c = this._peek.sourceSpan.fullStart, h = new L(e.sourceSpan.start, c, e.sourceSpan.fullStart), p = new L(e.sourceSpan.start, c, e.sourceSpan.fullStart), g = new Ce(t, a, o, s, r, [], l, h, p, void 0), v = this._getContainer(), E = v !== null && g.tagName !== null && !!this._getTagDefinition(v)?.isClosedByChild(g.tagName); this._pushContainer(g, E), l ? this._popContainer(o, Ce, h) : e.type === 37 && (this._popContainer(o, Ce, null), this.errors.push(pe.create(o, h, `Opening tag "${o}" not terminated.`))); }
    _consumeAttributesAndDirectives(e, t) { for (; this._peek.type === 14 || this._peek.type === 38;)
        this._peek.type === 38 ? t.push(this._consumeDirective(this._peek)) : e.push(this._consumeAttr(this._advance())); }
    _consumeComponentEndTag(e) { let t = this._getComponentFullName(e, this._getClosestElementLikeParent()); if (!this._popContainer(t, Ce, e.sourceSpan)) {
        let s = this._containerStack[this._containerStack.length - 1], r;
        s instanceof Ce && s.componentName === e.parts[0] ? r = `, did you mean "${s.fullName}"?` : r = ". It may happen when the tag has already been closed by another tag.";
        let i = `Unexpected closing tag "${t}"${r}`;
        this.errors.push(pe.create(t, e.sourceSpan, i));
    } }
    _getTagDefinition(e) { return typeof e == "string" ? this.tagDefinitionResolver(e) : e instanceof De ? this.tagDefinitionResolver(e.name) : e instanceof Ce && e.tagName !== null ? this.tagDefinitionResolver(e.tagName) : null; }
    _pushContainer(e, t) { t && this._containerStack.pop(), this._addToParent(e), this._containerStack.push(e); }
    _consumeElementEndTag(e) { let t = this._getElementFullName(e, this._getClosestElementLikeParent()); if (this._getTagDefinition(t)?.isVoid)
        this.errors.push(pe.create(t, e.sourceSpan, `Void elements do not have end tags "${e.parts[1]}"`));
    else if (!this._popContainer(t, De, e.sourceSpan)) {
        let s = `Unexpected closing tag "${t}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
        this.errors.push(pe.create(t, e.sourceSpan, s));
    } }
    _popContainer(e, t, s) { let r = !1; for (let i = this._containerStack.length - 1; i >= 0; i--) {
        let a = this._containerStack[i];
        if (((a instanceof Ce ? a.fullName : a.name) === e || e === null) && a instanceof t)
            return a.endSourceSpan = s, a.sourceSpan.end = s !== null ? s.end : a.sourceSpan.end, this._containerStack.splice(i, this._containerStack.length - i), !r;
        (a instanceof at || !this._getTagDefinition(a)?.closedByParent) && (r = !0);
    } return !1; }
    _consumeAttr(e) { let t = Ui(e.parts[0], e.parts[1]), s = e.sourceSpan.end; this._peek.type === 15 && this._advance(); let r = "", i = [], a, o; if (this._peek.type === 16)
        for (a = this._peek.sourceSpan, o = this._peek.sourceSpan.end; this._peek.type === 16 || this._peek.type === 17 || this._peek.type === 9;) {
            let h = this._advance();
            i.push(h), h.type === 17 ? r += h.parts.join("").replace(/&([^;]+);/g, Qu) : h.type === 9 ? r += h.parts[0] : r += h.parts.join(""), o = s = h.sourceSpan.end;
        } this._peek.type === 15 && (s = this._advance().sourceSpan.end); let c = a && o && new L(a.start, o, a.fullStart); return new En(t, r, new L(e.sourceSpan.start, s, e.sourceSpan.fullStart), e.sourceSpan, c, i.length > 0 ? i : void 0, void 0); }
    _consumeDirective(e) { let t = [], s = e.sourceSpan.end, r = null; if (this._advance(), this._peek.type === 39) {
        for (s = this._peek.sourceSpan.end, this._advance(); this._peek.type === 14;)
            t.push(this._consumeAttr(this._advance()));
        this._peek.type === 40 ? (r = this._peek.sourceSpan, this._advance()) : this.errors.push(pe.create(null, e.sourceSpan, "Unterminated directive definition"));
    } let i = new L(e.sourceSpan.start, s, e.sourceSpan.fullStart), a = new L(i.start, r === null ? e.sourceSpan.end : r.end, i.fullStart); return new Ba(e.parts[0], t, a, i, r); }
    _consumeBlockOpen(e) { let t = []; for (; this._peek.type === 27;) {
        let o = this._advance();
        t.push(new Ma(o.parts[0], o.sourceSpan));
    } this._peek.type === 25 && this._advance(); let s = this._peek.sourceSpan.fullStart, r = new L(e.sourceSpan.start, s, e.sourceSpan.fullStart), i = new L(e.sourceSpan.start, s, e.sourceSpan.fullStart), a = new at(e.parts[0], t, [], r, e.sourceSpan, i); this._pushContainer(a, !1); }
    _consumeBlockClose(e) { this._popContainer(null, at, e.sourceSpan) || this.errors.push(pe.create(null, e.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.')); }
    _consumeIncompleteBlock(e) { let t = []; for (; this._peek.type === 27;) {
        let o = this._advance();
        t.push(new Ma(o.parts[0], o.sourceSpan));
    } let s = this._peek.sourceSpan.fullStart, r = new L(e.sourceSpan.start, s, e.sourceSpan.fullStart), i = new L(e.sourceSpan.start, s, e.sourceSpan.fullStart), a = new at(e.parts[0], t, [], r, e.sourceSpan, i); this._pushContainer(a, !1), this._popContainer(null, at, null), this.errors.push(pe.create(e.parts[0], r, `Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`)); }
    _consumeLet(e) { let t = e.parts[0], s, r; if (this._peek.type !== 30) {
        this.errors.push(pe.create(e.parts[0], e.sourceSpan, `Invalid @let declaration "${t}". Declaration must have a value.`));
        return;
    }
    else
        s = this._advance(); if (this._peek.type !== 31) {
        this.errors.push(pe.create(e.parts[0], e.sourceSpan, `Unterminated @let declaration "${t}". Declaration must be terminated with a semicolon.`));
        return;
    }
    else
        r = this._advance(); let i = r.sourceSpan.fullStart, a = new L(e.sourceSpan.start, i, e.sourceSpan.fullStart), o = e.sourceSpan.toString().lastIndexOf(t), l = e.sourceSpan.start.moveBy(o), c = new L(l, e.sourceSpan.end), h = new Ra(t, s.parts[0], a, c, s.sourceSpan); this._addToParent(h); }
    _consumeIncompleteLet(e) { let t = e.parts[0] ?? "", s = t ? ` "${t}"` : ""; if (t.length > 0) {
        let r = e.sourceSpan.toString().lastIndexOf(t), i = e.sourceSpan.start.moveBy(r), a = new L(i, e.sourceSpan.end), o = new L(e.sourceSpan.start, e.sourceSpan.start.moveBy(0)), l = new Ra(t, "", e.sourceSpan, a, o);
        this._addToParent(l);
    } this.errors.push(pe.create(e.parts[0], e.sourceSpan, `Incomplete @let declaration${s}. @let declarations must be written as \`@let <name> = <value>;\``)); }
    _getContainer() { return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null; }
    _getClosestElementLikeParent() { for (let e = this._containerStack.length - 1; e > -1; e--) {
        let t = this._containerStack[e];
        if (t instanceof De || t instanceof Ce)
            return t;
    } return null; }
    _addToParent(e) { let t = this._getContainer(); t === null ? this.rootNodes.push(e) : t.children.push(e); }
    _getElementFullName(e, t) { let s = this._getPrefix(e, t); return Ui(s, e.parts[1]); }
    _getComponentFullName(e, t) { let s = e.parts[0], r = this._getComponentTagName(e, t); return r === null ? s : r.startsWith(":") ? s + r : `${s}:${r}`; }
    _getComponentTagName(e, t) { let s = this._getPrefix(e, t), r = e.parts[2]; return !s && !r ? null : !s && r ? r : Ui(s, r || "ng-component"); }
    _getPrefix(e, t) { let s, r; if (e.type === 33 || e.type === 37 || e.type === 36 ? (s = e.parts[1], r = e.parts[2]) : (s = e.parts[0], r = e.parts[1]), s = s || this._getTagDefinition(r)?.implicitNamespacePrefix || "", !s && t) {
        let i = t instanceof De ? t.name : t.tagName;
        if (i !== null) {
            let a = It(i)[1], o = this._getTagDefinition(a);
            o !== null && !o.preventNamespaceInheritance && (s = el(i));
        }
    } return s; }
};
function Yu(n, e) { return n.length > 0 && n[n.length - 1] === e; }
function Qu(n, e) { return hi[e] !== void 0 ? hi[e] || n : /^#x[a-f0-9]+$/i.test(e) ? String.fromCodePoint(parseInt(e.slice(2), 16)) : /^#\d+$/.test(e) ? String.fromCodePoint(parseInt(e.slice(1), 10)) : n; }
var gf = "ngPreserveWhitespaces", Zu = new Set(["pre", "template", "textarea", "script", "style"]), vf = ` \f
\r	\v\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`, vw = new RegExp(`[^${vf}]`), ww = new RegExp(`[${vf}]{2,}`, "g");
function Ju(n) { return n.some(e => e.name === gf); }
function wf(n) { return n.replace(new RegExp(df, "g"), " "); }
var fi = class {
    preserveSignificantWhitespace;
    originalNodeMap;
    requireContext;
    icuExpansionDepth = 0;
    constructor(e, t, s = !0) { this.preserveSignificantWhitespace = e, this.originalNodeMap = t, this.requireContext = s; }
    visitElement(e, t) { if (Zu.has(e.name) || Ju(e.attrs)) {
        let r = new De(e.name, wt(this, e.attrs), wt(this, e.directives), e.children, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.isVoid, e.i18n);
        return this.originalNodeMap?.set(r, e), r;
    } let s = new De(e.name, e.attrs, e.directives, wt(this, e.children), e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.isVoid, e.i18n); return this.originalNodeMap?.set(s, e), s; }
    visitAttribute(e, t) { return e.name !== gf ? e : null; }
    visitText(e, t) { let s = e.value.match(vw), r = t && (t.prev instanceof wn || t.next instanceof wn); if (this.icuExpansionDepth > 0 && this.preserveSignificantWhitespace)
        return e; if (s || r) {
        let a = e.tokens.map(h => h.type === 5 ? yw(h) : h);
        if (!this.preserveSignificantWhitespace && a.length > 0) {
            let h = a[0];
            a.splice(0, 1, Ew(h, t));
            let p = a[a.length - 1];
            a.splice(a.length - 1, 1, Sw(p, t));
        }
        let o = Sf(e.value), l = this.preserveSignificantWhitespace ? o : xw(o, t), c = new on(l, e.sourceSpan, a, e.i18n);
        return this.originalNodeMap?.set(c, e), c;
    } return null; }
    visitComment(e, t) { return e; }
    visitExpansion(e, t) { this.icuExpansionDepth++; let s; try {
        s = new wn(e.switchValue, e.type, wt(this, e.cases), e.sourceSpan, e.switchValueSourceSpan, e.i18n);
    }
    finally {
        this.icuExpansionDepth--;
    } return this.originalNodeMap?.set(s, e), s; }
    visitExpansionCase(e, t) { let s = new ui(e.value, wt(this, e.expression), e.sourceSpan, e.valueSourceSpan, e.expSourceSpan); return this.originalNodeMap?.set(s, e), s; }
    visitBlock(e, t) { let s = new at(e.name, e.parameters, wt(this, e.children), e.sourceSpan, e.nameSpan, e.startSourceSpan, e.endSourceSpan); return this.originalNodeMap?.set(s, e), s; }
    visitBlockParameter(e, t) { return e; }
    visitLetDeclaration(e, t) { return e; }
    visitComponent(e, t) { if (e.tagName && Zu.has(e.tagName) || Ju(e.attrs)) {
        let r = new Ce(e.componentName, e.tagName, e.fullName, wt(this, e.attrs), wt(this, e.directives), e.children, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n);
        return this.originalNodeMap?.set(r, e), r;
    } let s = new Ce(e.componentName, e.tagName, e.fullName, e.attrs, e.directives, wt(this, e.children), e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n); return this.originalNodeMap?.set(s, e), s; }
    visitDirective(e, t) { return e; }
    visit(e, t) { if (this.requireContext && !t)
        throw new Error("WhitespaceVisitor requires context. Visit via `visitAllWithSiblings` to get this context."); return !1; }
};
function Ew(n, e) { return n.type !== 5 || !!e?.prev ? n : Ef(n, s => s.trimStart()); }
function Sw(n, e) { return n.type !== 5 || !!e?.next ? n : Ef(n, s => s.trimEnd()); }
function xw(n, e) { let t = !e?.prev, s = !e?.next, r = t ? n.trimStart() : n; return s ? r.trimEnd() : r; }
function yw({ type: n, parts: e, sourceSpan: t }) { return { type: n, parts: [Sf(e[0])], sourceSpan: t }; }
function Ef({ type: n, parts: e, sourceSpan: t }, s) { return { type: n, parts: [s(e[0])], sourceSpan: t }; }
function Sf(n) { return wf(n).replace(ww, " "); }
function wt(n, e) { let t = []; return e.forEach((s, r) => { let i = { prev: e[r - 1], next: e[r + 1] }, a = s.visit(n, i); a && t.push(a); }), t; }
var O = (function (n) { return n[n.Character = 0] = "Character", n[n.Identifier = 1] = "Identifier", n[n.PrivateIdentifier = 2] = "PrivateIdentifier", n[n.Keyword = 3] = "Keyword", n[n.String = 4] = "String", n[n.Operator = 5] = "Operator", n[n.Number = 6] = "Number", n[n.Error = 7] = "Error", n; })(O || {}), Yn = (function (n) { return n[n.Plain = 0] = "Plain", n[n.TemplateLiteralPart = 1] = "TemplateLiteralPart", n[n.TemplateLiteralEnd = 2] = "TemplateLiteralEnd", n; })(Yn || {}), Cw = ["var", "let", "as", "null", "undefined", "true", "false", "if", "else", "this", "typeof", "void", "in"], di = class {
    tokenize(e) { return new Ml(e).scan(); }
}, Nt = class {
    index;
    end;
    type;
    numValue;
    strValue;
    constructor(e, t, s, r, i) { this.index = e, this.end = t, this.type = s, this.numValue = r, this.strValue = i; }
    isCharacter(e) { return this.type === O.Character && this.numValue === e; }
    isNumber() { return this.type === O.Number; }
    isString() { return this.type === O.String; }
    isOperator(e) { return this.type === O.Operator && this.strValue === e; }
    isIdentifier() { return this.type === O.Identifier; }
    isPrivateIdentifier() { return this.type === O.PrivateIdentifier; }
    isKeyword() { return this.type === O.Keyword; }
    isKeywordLet() { return this.type === O.Keyword && this.strValue === "let"; }
    isKeywordAs() { return this.type === O.Keyword && this.strValue === "as"; }
    isKeywordNull() { return this.type === O.Keyword && this.strValue === "null"; }
    isKeywordUndefined() { return this.type === O.Keyword && this.strValue === "undefined"; }
    isKeywordTrue() { return this.type === O.Keyword && this.strValue === "true"; }
    isKeywordFalse() { return this.type === O.Keyword && this.strValue === "false"; }
    isKeywordThis() { return this.type === O.Keyword && this.strValue === "this"; }
    isKeywordTypeof() { return this.type === O.Keyword && this.strValue === "typeof"; }
    isKeywordVoid() { return this.type === O.Keyword && this.strValue === "void"; }
    isKeywordIn() { return this.type === O.Keyword && this.strValue === "in"; }
    isError() { return this.type === O.Error; }
    toNumber() { return this.type === O.Number ? this.numValue : -1; }
    isTemplateLiteralPart() { return this.isString() && this.kind === Yn.TemplateLiteralPart; }
    isTemplateLiteralEnd() { return this.isString() && this.kind === Yn.TemplateLiteralEnd; }
    isTemplateLiteralInterpolationStart() { return this.isOperator("${"); }
    toString() { switch (this.type) {
        case O.Character:
        case O.Identifier:
        case O.Keyword:
        case O.Operator:
        case O.PrivateIdentifier:
        case O.String:
        case O.Error: return this.strValue;
        case O.Number: return this.numValue.toString();
        default: return null;
    } }
}, Er = class extends Nt {
    kind;
    constructor(e, t, s, r) { super(e, t, O.String, 0, s), this.kind = r; }
};
function or(n, e, t) { return new Nt(n, e, O.Character, t, String.fromCharCode(t)); }
function Aw(n, e, t) { return new Nt(n, e, O.Identifier, 0, t); }
function _w(n, e, t) { return new Nt(n, e, O.PrivateIdentifier, 0, t); }
function kw(n, e, t) { return new Nt(n, e, O.Keyword, 0, t); }
function lr(n, e, t) { return new Nt(n, e, O.Operator, 0, t); }
function Tw(n, e, t) { return new Nt(n, e, O.Number, t, ""); }
function bw(n, e, t) { return new Nt(n, e, O.Error, 0, t); }
var bi = new Nt(-1, -1, O.Character, 0, ""), Ml = class {
    input;
    tokens = [];
    length;
    peek = 0;
    index = -1;
    braceStack = [];
    constructor(e) { this.input = e, this.length = e.length, this.advance(); }
    scan() { let e = this.scanToken(); for (; e !== null;)
        this.tokens.push(e), e = this.scanToken(); return this.tokens; }
    advance() { this.peek = ++this.index >= this.length ? _e : this.input.charCodeAt(this.index); }
    scanToken() { let e = this.input, t = this.length, s = this.peek, r = this.index; for (; s <= Np;)
        if (++r >= t) {
            s = _e;
            break;
        }
        else
            s = e.charCodeAt(r); if (this.peek = s, this.index = r, r >= t)
        return null; if (Ku(s))
        return this.scanIdentifier(); if (St(s))
        return this.scanNumber(r); let i = r; switch (s) {
        case pr: return this.advance(), St(this.peek) ? this.scanNumber(i) : or(i, this.index, pr);
        case At:
        case Pe:
        case vn:
        case Hn:
        case ht:
        case Gt:
        case Ye: return this.scanCharacter(i, s);
        case yt: return this.scanOpenBrace(i, s);
        case Le: return this.scanCloseBrace(i, s);
        case Jr:
        case Zr: return this.scanString();
        case gl: return this.advance(), this.scanTemplateLiteralPart(i);
        case Dp: return this.scanPrivateIdentifier();
        case Pp: return this.scanComplexOperator(i, "+", Te, "=");
        case wa: return this.scanComplexOperator(i, "-", Te, "=");
        case Et: return this.scanComplexOperator(i, "/", Te, "=");
        case Im: return this.scanComplexOperator(i, "%", Te, "=");
        case Bm: return this.scanOperator(i, "^");
        case Eu: return this.scanStar(i);
        case Su: return this.scanQuestion(i);
        case bs:
        case it: return this.scanComplexOperator(i, String.fromCharCode(s), Te, "=");
        case ml:
        case Te: return this.scanComplexOperator(i, String.fromCharCode(s), Te, "=", Te, "=");
        case va: return this.scanComplexOperator(i, "&", va, "&", Te, "=");
        case xu: return this.scanComplexOperator(i, "|", xu, "|", Te, "=");
        case Vp:
            for (; Kr(this.peek);)
                this.advance();
            return this.scanToken();
    } return this.advance(), this.error(`Unexpected character [${String.fromCharCode(s)}]`, 0); }
    scanCharacter(e, t) { return this.advance(), or(e, this.index, t); }
    scanOperator(e, t) { return this.advance(), lr(e, this.index, t); }
    scanOpenBrace(e, t) { return this.braceStack.push("expression"), this.advance(), or(e, this.index, t); }
    scanCloseBrace(e, t) { return this.advance(), this.braceStack.pop() === "interpolation" ? (this.tokens.push(or(e, this.index, Le)), this.scanTemplateLiteralPart(this.index)) : or(e, this.index, t); }
    scanComplexOperator(e, t, s, r, i, a) { this.advance(); let o = t; return this.peek == s && (this.advance(), o += r), i != null && this.peek == i && (this.advance(), o += a), lr(e, this.index, o); }
    scanIdentifier() { let e = this.index; for (this.advance(); eh(this.peek);)
        this.advance(); let t = this.input.substring(e, this.index); return Cw.indexOf(t) > -1 ? kw(e, this.index, t) : Aw(e, this.index, t); }
    scanPrivateIdentifier() { let e = this.index; if (this.advance(), !Ku(this.peek))
        return this.error("Invalid character [#]", -1); for (; eh(this.peek);)
        this.advance(); let t = this.input.substring(e, this.index); return _w(e, this.index, t); }
    scanNumber(e) { let t = this.index === e, s = !1; for (this.advance();;) {
        if (!St(this.peek))
            if (this.peek === Ln) {
                if (!St(this.input.charCodeAt(this.index - 1)) || !St(this.input.charCodeAt(this.index + 1)))
                    return this.error("Invalid numeric separator", 0);
                s = !0;
            }
            else if (this.peek === pr)
                t = !1;
            else if (Iw(this.peek)) {
                if (this.advance(), Nw(this.peek) && this.advance(), !St(this.peek))
                    return this.error("Invalid exponent", -1);
                t = !1;
            }
            else
                break;
        this.advance();
    } let r = this.input.substring(e, this.index); s && (r = r.replace(/_/g, "")); let i = t ? Pw(r) : parseFloat(r); return Tw(e, this.index, i); }
    scanString() { let e = this.index, t = this.peek; this.advance(); let s = "", r = this.index, i = this.input; for (; this.peek != t;)
        if (this.peek == Is) {
            let o = this.scanStringBackslash(s, r);
            if (typeof o != "string")
                return o;
            s = o, r = this.index;
        }
        else {
            if (this.peek == _e)
                return this.error("Unterminated quote", 0);
            this.advance();
        } let a = i.substring(r, this.index); return this.advance(), new Er(e, this.index, s + a, Yn.Plain); }
    scanQuestion(e) { this.advance(); let t = "?"; return this.peek === Su ? (t += "?", this.advance(), this.peek === Te && (t += "=", this.advance())) : this.peek === pr && (t += ".", this.advance()), lr(e, this.index, t); }
    scanTemplateLiteralPart(e) { let t = "", s = this.index; for (; this.peek !== gl;)
        if (this.peek === Is) {
            let i = this.scanStringBackslash(t, s);
            if (typeof i != "string")
                return i;
            t = i, s = this.index;
        }
        else if (this.peek === co) {
            let i = this.index;
            if (this.advance(), this.peek === yt)
                return this.braceStack.push("interpolation"), this.tokens.push(new Er(e, i, t + this.input.substring(s, i), Yn.TemplateLiteralPart)), this.advance(), lr(i, this.index, this.input.substring(i, this.index));
        }
        else {
            if (this.peek === _e)
                return this.error("Unterminated template literal", 0);
            this.advance();
        } let r = this.input.substring(s, this.index); return this.advance(), new Er(e, this.index, t + r, Yn.TemplateLiteralEnd); }
    error(e, t) { let s = this.index + t; return bw(s, this.index, `Lexer Error: ${e} at column ${s} in expression [${this.input}]`); }
    scanStringBackslash(e, t) { e += this.input.substring(t, this.index); let s; if (this.advance(), this.peek === Fp) {
        let r = this.input.substring(this.index + 1, this.index + 5);
        if (/^[0-9a-f]+$/i.test(r))
            s = parseInt(r, 16);
        else
            return this.error(`Invalid unicode escape [\\u${r}]`, 0);
        for (let i = 0; i < 5; i++)
            this.advance();
    }
    else
        s = Dw(this.peek), this.advance(); return e += String.fromCharCode(s), e; }
    scanStar(e) { this.advance(); let t = "*"; return this.peek === Eu ? (t += "*", this.advance(), this.peek === Te && (t += "=", this.advance())) : this.peek === Te && (t += "=", this.advance()), lr(e, this.index, t); }
};
function Ku(n) { return as <= n && n <= Ci || Pn <= n && n <= Ks || n == Ln || n == co; }
function eh(n) { return Hs(n) || St(n) || n == Ln || n == co; }
function Iw(n) { return n == Rm || n == Dm; }
function Nw(n) { return n == wa || n == Pp; }
function Dw(n) { switch (n) {
    case Bp: return Xn;
    case Uc: return Ip;
    case Mp: return Vc;
    case Rp: return Oc;
    case $p: return bp;
    default: return n;
} }
function Pw(n) { let e = parseInt(n); if (isNaN(e))
    throw new Error("Invalid integer literal when parsing " + n); return e; }
var Rl = class {
    strings;
    expressions;
    offsets;
    constructor(e, t, s) { this.strings = e, this.expressions = t, this.offsets = s; }
}, Fl = class {
    templateBindings;
    warnings;
    errors;
    constructor(e, t, s) { this.templateBindings = e, this.warnings = t, this.errors = s; }
};
function fn(n) { return n.start.toString() || "(unknown)"; }
var $a = class {
    _lexer;
    _supportsDirectPipeReferences;
    constructor(e, t = !1) { this._lexer = e, this._supportsDirectPipeReferences = t; }
    parseAction(e, t, s, r = ot) { let i = []; this._checkNoInterpolation(i, e, t, r); let { stripped: a } = this._stripComments(e), o = this._lexer.tokenize(a), l = new Vn(e, t, s, o, 1, i, 0, this._supportsDirectPipeReferences).parseChain(); return new Xe(l, e, fn(t), s, i); }
    parseBinding(e, t, s, r = ot) { let i = [], a = this._parseBindingAst(e, t, s, r, i); return new Xe(a, e, fn(t), s, i); }
    checkSimpleExpression(e) { let t = new $l; return e.visit(t), t.errors; }
    parseSimpleBinding(e, t, s, r = ot) { let i = [], a = this._parseBindingAst(e, t, s, r, i), o = this.checkSimpleExpression(a); return o.length > 0 && i.push(_s(`Host binding expression cannot contain ${o.join(" ")}`, e, "", t)), new Xe(a, e, fn(t), s, i); }
    _parseBindingAst(e, t, s, r, i) { this._checkNoInterpolation(i, e, t, r); let { stripped: a } = this._stripComments(e), o = this._lexer.tokenize(a); return new Vn(e, t, s, o, 0, i, 0, this._supportsDirectPipeReferences).parseChain(); }
    parseTemplateBindings(e, t, s, r, i) { let a = this._lexer.tokenize(t), o = []; return new Vn(t, s, i, a, 0, o, 0, this._supportsDirectPipeReferences).parseTemplateBindings({ source: e, span: new Ze(r, r + e.length) }); }
    parseInterpolation(e, t, s, r, i = ot) { let a = [], { strings: o, expressions: l, offsets: c } = this.splitInterpolation(e, t, a, r, i); if (l.length === 0)
        return null; let h = []; for (let p = 0; p < l.length; ++p) {
        let g = r?.[p * 2 + 1]?.sourceSpan, v = l[p].text, { stripped: E, hasComments: C } = this._stripComments(v), b = this._lexer.tokenize(E);
        if (C && E.trim().length === 0 && b.length === 0) {
            a.push(_s("Interpolation expression cannot only contain a comment", e, `at column ${l[p].start} in`, t));
            continue;
        }
        let A = new Vn(g ? v : e, g || t, s, b, 0, a, c[p], this._supportsDirectPipeReferences).parseChain();
        h.push(A);
    } return this.createInterpolationAst(o.map(p => p.text), h, e, fn(t), s, a); }
    parseInterpolationExpression(e, t, s) { let { stripped: r } = this._stripComments(e), i = this._lexer.tokenize(r), a = [], o = new Vn(e, t, s, i, 0, a, 0, this._supportsDirectPipeReferences).parseChain(), l = ["", ""]; return this.createInterpolationAst(l, [o], e, fn(t), s, a); }
    createInterpolationAst(e, t, s, r, i, a) { let o = new ns(0, s.length), l = new xi(o, o.toAbsolute(i), e, t); return new Xe(l, s, r, i, a); }
    splitInterpolation(e, t, s, r, i = ot) { let a = [], o = [], l = [], c = r ? Lw(r) : null, h = 0, p = !1, g = !1, { start: v, end: E } = i; for (; h < e.length;)
        if (p) {
            let C = h, b = C + v.length, A = this._getInterpolationEndIndex(e, E, b);
            if (A === -1) {
                p = !1, g = !0;
                break;
            }
            let F = A + E.length, ee = e.substring(b, A);
            ee.trim().length === 0 && s.push(_s("Blank expressions are not allowed in interpolated strings", e, `at column ${h} in`, t)), o.push({ text: ee, start: C, end: F });
            let de = (c?.get(C) ?? C) + v.length;
            l.push(de), h = F, p = !1;
        }
        else {
            let C = h;
            h = e.indexOf(v, h), h === -1 && (h = e.length);
            let b = e.substring(C, h);
            a.push({ text: b, start: C, end: h }), p = !0;
        } if (!p)
        if (g) {
            let C = a[a.length - 1];
            C.text += e.substring(h), C.end = e.length;
        }
        else
            a.push({ text: e.substring(h), start: h, end: e.length }); return new Rl(a, o, l); }
    wrapLiteralPrimitive(e, t, s) { let r = new ns(0, e == null ? 0 : e.length); return new Xe(new Ge(r, r.toAbsolute(s), e), e, typeof t == "string" ? t : fn(t), s, []); }
    _stripComments(e) { let t = this._commentStart(e); return t != null ? { stripped: e.substring(0, t), hasComments: !0 } : { stripped: e, hasComments: !1 }; }
    _commentStart(e) { let t = null; for (let s = 0; s < e.length - 1; s++) {
        let r = e.charCodeAt(s), i = e.charCodeAt(s + 1);
        if (r === Et && i == Et && t == null)
            return s;
        t === r ? t = null : t == null && wr(r) && (t = r);
    } return null; }
    _checkNoInterpolation(e, t, s, { start: r, end: i }) { let a = -1, o = -1; for (let l of this._forEachUnquotedChar(t, 0))
        if (a === -1)
            t.startsWith(r) && (a = l);
        else if (o = this._getInterpolationEndIndex(t, i, l), o > -1)
            break; a > -1 && o > -1 && e.push(_s(`Got interpolation (${r}${i}) where expression was expected`, t, `at column ${a} in`, s)); }
    _getInterpolationEndIndex(e, t, s) { for (let r of this._forEachUnquotedChar(e, s)) {
        if (e.startsWith(t, r))
            return r;
        if (e.startsWith("//", r))
            return e.indexOf(t, r);
    } return -1; }
    *_forEachUnquotedChar(e, t) { let s = null, r = 0; for (let i = t; i < e.length; i++) {
        let a = e[i];
        wr(e.charCodeAt(i)) && (s === null || s === a) && r % 2 === 0 ? s = s === null ? a : null : s === null && (yield i), r = a === "\\" ? r + 1 : 0;
    } }
}, dr = (function (n) { return n[n.None = 0] = "None", n[n.Writable = 1] = "Writable", n; })(dr || {}), Vn = class {
    input;
    parseSourceSpan;
    absoluteOffset;
    tokens;
    parseFlags;
    errors;
    offset;
    supportsDirectPipeReferences;
    rparensExpected = 0;
    rbracketsExpected = 0;
    rbracesExpected = 0;
    context = dr.None;
    sourceSpanCache = new Map;
    index = 0;
    constructor(e, t, s, r, i, a, o, l) { this.input = e, this.parseSourceSpan = t, this.absoluteOffset = s, this.tokens = r, this.parseFlags = i, this.errors = a, this.offset = o, this.supportsDirectPipeReferences = l; }
    peek(e) { let t = this.index + e; return t < this.tokens.length ? this.tokens[t] : bi; }
    get next() { return this.peek(0); }
    get atEOF() { return this.index >= this.tokens.length; }
    get inputIndex() { return this.atEOF ? this.currentEndIndex : this.next.index + this.offset; }
    get currentEndIndex() { return this.index > 0 ? this.peek(-1).end + this.offset : this.tokens.length === 0 ? this.input.length + this.offset : this.next.index + this.offset; }
    get currentAbsoluteOffset() { return this.absoluteOffset + this.inputIndex; }
    span(e, t) { let s = this.currentEndIndex; if (t !== void 0 && t > this.currentEndIndex && (s = t), e > s) {
        let r = s;
        s = e, e = r;
    } return new ns(e, s); }
    sourceSpan(e, t) { let s = `${e}@${this.inputIndex}:${t}`; return this.sourceSpanCache.has(s) || this.sourceSpanCache.set(s, this.span(e, t).toAbsolute(this.absoluteOffset)), this.sourceSpanCache.get(s); }
    advance() { this.index++; }
    withContext(e, t) { this.context |= e; let s = t(); return this.context ^= e, s; }
    consumeOptionalCharacter(e) { return this.next.isCharacter(e) ? (this.advance(), !0) : !1; }
    peekKeywordLet() { return this.next.isKeywordLet(); }
    peekKeywordAs() { return this.next.isKeywordAs(); }
    expectCharacter(e) { this.consumeOptionalCharacter(e) || this.error(`Missing expected ${String.fromCharCode(e)}`); }
    consumeOptionalOperator(e) { return this.next.isOperator(e) ? (this.advance(), !0) : !1; }
    isAssignmentOperator(e) { return e.type === O.Operator && Ne.isAssignmentOperation(e.strValue); }
    expectOperator(e) { this.consumeOptionalOperator(e) || this.error(`Missing expected operator ${e}`); }
    prettyPrintToken(e) { return e === bi ? "end of input" : `token ${e}`; }
    expectIdentifierOrKeyword() { let e = this.next; return !e.isIdentifier() && !e.isKeyword() ? (e.isPrivateIdentifier() ? this._reportErrorForPrivateIdentifier(e, "expected identifier or keyword") : this.error(`Unexpected ${this.prettyPrintToken(e)}, expected identifier or keyword`), null) : (this.advance(), e.toString()); }
    expectIdentifierOrKeywordOrString() { let e = this.next; return !e.isIdentifier() && !e.isKeyword() && !e.isString() ? (e.isPrivateIdentifier() ? this._reportErrorForPrivateIdentifier(e, "expected identifier, keyword or string") : this.error(`Unexpected ${this.prettyPrintToken(e)}, expected identifier, keyword, or string`), "") : (this.advance(), e.toString()); }
    parseChain() { let e = [], t = this.inputIndex; for (; this.index < this.tokens.length;) {
        let s = this.parsePipe();
        if (e.push(s), this.consumeOptionalCharacter(Ye))
            for (this.parseFlags & 1 || this.error("Binding expression cannot contain chained expression"); this.consumeOptionalCharacter(Ye);)
                ;
        else if (this.index < this.tokens.length) {
            let r = this.index;
            if (this.error(`Unexpected token '${this.next}'`), this.index === r)
                break;
        }
    } if (e.length === 0) {
        let s = this.offset, r = this.offset + this.input.length;
        return new $e(this.span(s, r), this.sourceSpan(s, r));
    } return e.length == 1 ? e[0] : new Rs(this.span(t), this.sourceSpan(t), e); }
    parsePipe() { let e = this.inputIndex, t = this.parseExpression(); if (this.consumeOptionalOperator("|")) {
        this.parseFlags & 1 && this.error("Cannot have a pipe in an action expression");
        do {
            let s = this.inputIndex, r = this.expectIdentifierOrKeyword(), i, a;
            r !== null ? i = this.sourceSpan(s) : (r = "", a = this.next.index !== -1 ? this.next.index : this.input.length + this.offset, i = new ns(a, a).toAbsolute(this.absoluteOffset));
            let o = [];
            for (; this.consumeOptionalCharacter(Gt);)
                o.push(this.parseExpression());
            let l;
            if (this.supportsDirectPipeReferences) {
                let c = r.charCodeAt(0);
                l = c === Ln || c >= Pn && c <= Ks ? qi.ReferencedDirectly : qi.ReferencedByName;
            }
            else
                l = qi.ReferencedByName;
            t = new ta(this.span(e), this.sourceSpan(e, a), t, r, o, l, i);
        } while (this.consumeOptionalOperator("|"));
    } return t; }
    parseExpression() { return this.parseConditional(); }
    parseConditional() { let e = this.inputIndex, t = this.parseLogicalOr(); if (this.consumeOptionalOperator("?")) {
        let s = this.parsePipe(), r;
        if (this.consumeOptionalCharacter(Gt))
            r = this.parsePipe();
        else {
            let i = this.inputIndex, a = this.input.substring(e, i);
            this.error(`Conditional expression ${a} requires all 3 expressions`), r = new $e(this.span(e), this.sourceSpan(e));
        }
        return new ea(this.span(e), this.sourceSpan(e), t, s, r);
    }
    else
        return t; }
    parseLogicalOr() { let e = this.inputIndex, t = this.parseLogicalAnd(); for (; this.consumeOptionalOperator("||");) {
        let s = this.parseLogicalAnd();
        t = new Ne(this.span(e), this.sourceSpan(e), "||", t, s);
    } return t; }
    parseLogicalAnd() { let e = this.inputIndex, t = this.parseNullishCoalescing(); for (; this.consumeOptionalOperator("&&");) {
        let s = this.parseNullishCoalescing();
        t = new Ne(this.span(e), this.sourceSpan(e), "&&", t, s);
    } return t; }
    parseNullishCoalescing() { let e = this.inputIndex, t = this.parseEquality(); for (; this.consumeOptionalOperator("??");) {
        let s = this.parseEquality();
        t = new Ne(this.span(e), this.sourceSpan(e), "??", t, s);
    } return t; }
    parseEquality() { let e = this.inputIndex, t = this.parseRelational(); for (; this.next.type == O.Operator;) {
        let s = this.next.strValue;
        switch (s) {
            case "==":
            case "===":
            case "!=":
            case "!==":
                this.advance();
                let r = this.parseRelational();
                t = new Ne(this.span(e), this.sourceSpan(e), s, t, r);
                continue;
        }
        break;
    } return t; }
    parseRelational() { let e = this.inputIndex, t = this.parseAdditive(); for (; this.next.type == O.Operator || this.next.isKeywordIn;) {
        let s = this.next.strValue;
        switch (s) {
            case "<":
            case ">":
            case "<=":
            case ">=":
            case "in":
                this.advance();
                let r = this.parseAdditive();
                t = new Ne(this.span(e), this.sourceSpan(e), s, t, r);
                continue;
        }
        break;
    } return t; }
    parseAdditive() { let e = this.inputIndex, t = this.parseMultiplicative(); for (; this.next.type == O.Operator;) {
        let s = this.next.strValue;
        switch (s) {
            case "+":
            case "-":
                this.advance();
                let r = this.parseMultiplicative();
                t = new Ne(this.span(e), this.sourceSpan(e), s, t, r);
                continue;
        }
        break;
    } return t; }
    parseMultiplicative() { let e = this.inputIndex, t = this.parseExponentiation(); for (; this.next.type == O.Operator;) {
        let s = this.next.strValue;
        switch (s) {
            case "*":
            case "%":
            case "/":
                this.advance();
                let r = this.parseExponentiation();
                t = new Ne(this.span(e), this.sourceSpan(e), s, t, r);
                continue;
        }
        break;
    } return t; }
    parseExponentiation() { let e = this.inputIndex, t = this.parsePrefix(); for (; this.next.type == O.Operator && this.next.strValue === "**";) {
        (t instanceof Ts || t instanceof Lr || t instanceof Br || t instanceof Mr) && this.error("Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence"), this.advance();
        let s = this.parseExponentiation();
        t = new Ne(this.span(e), this.sourceSpan(e), "**", t, s);
    } return t; }
    parsePrefix() { if (this.next.type == O.Operator) {
        let e = this.inputIndex, t = this.next.strValue, s;
        switch (t) {
            case "+": return this.advance(), s = this.parsePrefix(), Ts.createPlus(this.span(e), this.sourceSpan(e), s);
            case "-": return this.advance(), s = this.parsePrefix(), Ts.createMinus(this.span(e), this.sourceSpan(e), s);
            case "!": return this.advance(), s = this.parsePrefix(), new Lr(this.span(e), this.sourceSpan(e), s);
        }
    }
    else if (this.next.isKeywordTypeof()) {
        this.advance();
        let e = this.inputIndex, t = this.parsePrefix();
        return new Br(this.span(e), this.sourceSpan(e), t);
    }
    else if (this.next.isKeywordVoid()) {
        this.advance();
        let e = this.inputIndex, t = this.parsePrefix();
        return new Mr(this.span(e), this.sourceSpan(e), t);
    } return this.parseCallChain(); }
    parseCallChain() { let e = this.inputIndex, t = this.parsePrimary(); for (;;)
        if (this.consumeOptionalCharacter(pr))
            t = this.parseAccessMember(t, e, !1);
        else if (this.consumeOptionalOperator("?."))
            this.consumeOptionalCharacter(At) ? t = this.parseCall(t, e, !0) : t = this.consumeOptionalCharacter(vn) ? this.parseKeyedReadOrWrite(t, e, !0) : this.parseAccessMember(t, e, !0);
        else if (this.consumeOptionalCharacter(vn))
            t = this.parseKeyedReadOrWrite(t, e, !1);
        else if (this.consumeOptionalCharacter(At))
            t = this.parseCall(t, e, !1);
        else if (this.consumeOptionalOperator("!"))
            t = new Rr(this.span(e), this.sourceSpan(e), t);
        else if (this.next.isTemplateLiteralEnd())
            t = this.parseNoInterpolationTaggedTemplateLiteral(t, e);
        else if (this.next.isTemplateLiteralPart())
            t = this.parseTaggedTemplateLiteral(t, e);
        else
            return t; }
    parsePrimary() { let e = this.inputIndex; if (this.consumeOptionalCharacter(At)) {
        this.rparensExpected++;
        let t = this.parsePipe();
        return this.consumeOptionalCharacter(Pe) || (this.error("Missing closing parentheses"), this.consumeOptionalCharacter(Pe)), this.rparensExpected--, new Or(this.span(e), this.sourceSpan(e), t);
    }
    else {
        if (this.next.isKeywordNull())
            return this.advance(), new Ge(this.span(e), this.sourceSpan(e), null);
        if (this.next.isKeywordUndefined())
            return this.advance(), new Ge(this.span(e), this.sourceSpan(e), void 0);
        if (this.next.isKeywordTrue())
            return this.advance(), new Ge(this.span(e), this.sourceSpan(e), !0);
        if (this.next.isKeywordFalse())
            return this.advance(), new Ge(this.span(e), this.sourceSpan(e), !1);
        if (this.next.isKeywordIn())
            return this.advance(), new Ge(this.span(e), this.sourceSpan(e), "in");
        if (this.next.isKeywordThis())
            return this.advance(), new ss(this.span(e), this.sourceSpan(e));
        if (this.consumeOptionalCharacter(vn)) {
            this.rbracketsExpected++;
            let t = this.parseExpressionList(Hn);
            return this.rbracketsExpected--, this.expectCharacter(Hn), new na(this.span(e), this.sourceSpan(e), t);
        }
        else {
            if (this.next.isCharacter(yt))
                return this.parseLiteralMap();
            if (this.next.isIdentifier())
                return this.parseAccessMember(new $t(this.span(e), this.sourceSpan(e)), e, !1);
            if (this.next.isNumber()) {
                let t = this.next.toNumber();
                return this.advance(), new Ge(this.span(e), this.sourceSpan(e), t);
            }
            else {
                if (this.next.isTemplateLiteralEnd())
                    return this.parseNoInterpolationTemplateLiteral();
                if (this.next.isTemplateLiteralPart())
                    return this.parseTemplateLiteral();
                if (this.next.isString() && this.next.kind === Yn.Plain) {
                    let t = this.next.toString();
                    return this.advance(), new Ge(this.span(e), this.sourceSpan(e), t);
                }
                else
                    return this.next.isPrivateIdentifier() ? (this._reportErrorForPrivateIdentifier(this.next, null), new $e(this.span(e), this.sourceSpan(e))) : this.index >= this.tokens.length ? (this.error(`Unexpected end of expression: ${this.input}`), new $e(this.span(e), this.sourceSpan(e))) : (this.error(`Unexpected token ${this.next}`), new $e(this.span(e), this.sourceSpan(e)));
            }
        }
    } }
    parseExpressionList(e) { let t = []; do
        if (!this.next.isCharacter(e))
            t.push(this.parsePipe());
        else
            break;
    while (this.consumeOptionalCharacter(ht)); return t; }
    parseLiteralMap() { let e = [], t = [], s = this.inputIndex; if (this.expectCharacter(yt), !this.consumeOptionalCharacter(Le)) {
        this.rbracesExpected++;
        do {
            let r = this.inputIndex, i = this.next.isString(), a = this.expectIdentifierOrKeywordOrString(), o = { key: a, quoted: i };
            if (e.push(o), i)
                this.expectCharacter(Gt), t.push(this.parsePipe());
            else if (this.consumeOptionalCharacter(Gt))
                t.push(this.parsePipe());
            else {
                o.isShorthandInitialized = !0;
                let l = this.span(r), c = this.sourceSpan(r);
                t.push(new Jt(l, c, c, new $t(l, c), a));
            }
        } while (this.consumeOptionalCharacter(ht) && !this.next.isCharacter(Le));
        this.rbracesExpected--, this.expectCharacter(Le);
    } return new sa(this.span(s), this.sourceSpan(s), e, t); }
    parseAccessMember(e, t, s) { let r = this.inputIndex, i = this.withContext(dr.Writable, () => { let o = this.expectIdentifierOrKeyword() ?? ""; return o.length === 0 && this.error("Expected identifier for property access", e.span.end), o; }), a = this.sourceSpan(r); if (s)
        return this.isAssignmentOperator(this.next) ? (this.advance(), this.error("The '?.' operator cannot be used in the assignment"), new $e(this.span(t), this.sourceSpan(t))) : new Dr(this.span(t), this.sourceSpan(t), a, e, i); if (this.isAssignmentOperator(this.next)) {
        let o = this.next.strValue;
        if (!(this.parseFlags & 1))
            return this.advance(), this.error("Bindings cannot contain assignments"), new $e(this.span(t), this.sourceSpan(t));
        let l = new Jt(this.span(t), this.sourceSpan(t), a, e, i);
        this.advance();
        let c = this.parseConditional();
        return new Ne(this.span(t), this.sourceSpan(t), o, l, c);
    }
    else
        return new Jt(this.span(t), this.sourceSpan(t), a, e, i); }
    parseCall(e, t, s) { let r = this.inputIndex; this.rparensExpected++; let i = this.parseCallArguments(), a = this.span(r, this.inputIndex).toAbsolute(this.absoluteOffset); this.expectCharacter(Pe), this.rparensExpected--; let o = this.span(t), l = this.sourceSpan(t); return s ? new ra(o, l, e, i, a) : new Fs(o, l, e, i, a); }
    parseCallArguments() { if (this.next.isCharacter(Pe))
        return []; let e = []; do
        e.push(this.parsePipe());
    while (this.consumeOptionalCharacter(ht)); return e; }
    expectTemplateBindingKey() { let e = "", t = !1, s = this.currentAbsoluteOffset; do
        e += this.expectIdentifierOrKeywordOrString(), t = this.consumeOptionalOperator("-"), t && (e += "-");
    while (t); return { source: e, span: new Ze(s, s + e.length) }; }
    parseTemplateBindings(e) { let t = []; for (t.push(...this.parseDirectiveKeywordBindings(e)); this.index < this.tokens.length;) {
        let s = this.parseLetBinding();
        if (s)
            t.push(s);
        else {
            let r = this.expectTemplateBindingKey(), i = this.parseAsBinding(r);
            i ? t.push(i) : (r.source = e.source + r.source.charAt(0).toUpperCase() + r.source.substring(1), t.push(...this.parseDirectiveKeywordBindings(r)));
        }
        this.consumeStatementTerminator();
    } return new Fl(t, [], this.errors); }
    parseKeyedReadOrWrite(e, t, s) { return this.withContext(dr.Writable, () => { this.rbracketsExpected++; let r = this.parsePipe(); if (r instanceof $e && this.error("Key access cannot be empty"), this.rbracketsExpected--, this.expectCharacter(Hn), this.isAssignmentOperator(this.next)) {
        let i = this.next.strValue;
        if (s)
            this.advance(), this.error("The '?.' operator cannot be used in the assignment");
        else {
            let a = new rs(this.span(t), this.sourceSpan(t), e, r);
            this.advance();
            let o = this.parseConditional();
            return new Ne(this.span(t), this.sourceSpan(t), i, a, o);
        }
    }
    else
        return s ? new Pr(this.span(t), this.sourceSpan(t), e, r) : new rs(this.span(t), this.sourceSpan(t), e, r); return new $e(this.span(t), this.sourceSpan(t)); }); }
    parseDirectiveKeywordBindings(e) { let t = []; this.consumeOptionalCharacter(Gt); let s = this.getDirectiveBoundTarget(), r = this.currentAbsoluteOffset, i = this.parseAsBinding(e); i || (this.consumeStatementTerminator(), r = this.currentAbsoluteOffset); let a = new Ze(e.span.start, r); return t.push(new Zo(a, e, s)), i && t.push(i), t; }
    getDirectiveBoundTarget() { if (this.next === bi || this.peekKeywordAs() || this.peekKeywordLet())
        return null; let e = this.parsePipe(), { start: t, end: s } = e.span, r = this.input.substring(t, s); return new Xe(e, r, fn(this.parseSourceSpan), this.absoluteOffset + t, this.errors); }
    parseAsBinding(e) { if (!this.peekKeywordAs())
        return null; this.advance(); let t = this.expectTemplateBindingKey(); this.consumeStatementTerminator(); let s = new Ze(e.span.start, this.currentAbsoluteOffset); return new Vr(s, t, e); }
    parseLetBinding() { if (!this.peekKeywordLet())
        return null; let e = this.currentAbsoluteOffset; this.advance(); let t = this.expectTemplateBindingKey(), s = null; this.consumeOptionalOperator("=") && (s = this.expectTemplateBindingKey()), this.consumeStatementTerminator(); let r = new Ze(e, this.currentAbsoluteOffset); return new Vr(r, t, s); }
    parseNoInterpolationTaggedTemplateLiteral(e, t) { let s = this.parseNoInterpolationTemplateLiteral(); return new Fr(this.span(t), this.sourceSpan(t), e, s); }
    parseNoInterpolationTemplateLiteral() { let e = this.next.strValue, t = this.inputIndex; this.advance(); let s = this.span(t), r = this.sourceSpan(t); return new $r(s, r, [new ia(s, r, e)], []); }
    parseTaggedTemplateLiteral(e, t) { let s = this.parseTemplateLiteral(); return new Fr(this.span(t), this.sourceSpan(t), e, s); }
    parseTemplateLiteral() { let e = [], t = [], s = this.inputIndex; for (; this.next !== bi;) {
        let r = this.next;
        if (r.isTemplateLiteralPart() || r.isTemplateLiteralEnd()) {
            let i = this.inputIndex;
            if (this.advance(), e.push(new ia(this.span(i), this.sourceSpan(i), r.strValue)), r.isTemplateLiteralEnd())
                break;
        }
        else if (r.isTemplateLiteralInterpolationStart()) {
            this.advance(), this.rbracesExpected++;
            let i = this.parsePipe();
            i instanceof $e ? this.error("Template literal interpolation cannot be empty") : t.push(i), this.rbracesExpected--;
        }
        else
            this.advance();
    } return new $r(this.span(s), this.sourceSpan(s), e, t); }
    consumeStatementTerminator() { this.consumeOptionalCharacter(Ye) || this.consumeOptionalCharacter(ht); }
    error(e, t = this.index) { this.errors.push(_s(e, this.input, this.getErrorLocationText(t), this.parseSourceSpan)), this.skip(); }
    getErrorLocationText(e) { return e < this.tokens.length ? `at column ${this.tokens[e].index + 1} in` : "at the end of the expression"; }
    _reportErrorForPrivateIdentifier(e, t) { let s = `Private identifiers are not supported. Unexpected private identifier: ${e}`; t !== null && (s += `, ${t}`), this.error(s); }
    skip() { let e = this.next; for (; this.index < this.tokens.length && !e.isCharacter(Ye) && !e.isOperator("|") && (this.rparensExpected <= 0 || !e.isCharacter(Pe)) && (this.rbracesExpected <= 0 || !e.isCharacter(Le)) && (this.rbracketsExpected <= 0 || !e.isCharacter(Hn)) && (!(this.context & dr.Writable) || !this.isAssignmentOperator(e));)
        this.next.isError() && this.errors.push(_s(this.next.toString(), this.input, this.getErrorLocationText(this.next.index), this.parseSourceSpan)), this.advance(), e = this.next; }
};
function _s(n, e, t, s) { t.length > 0 && (t = ` ${t} `); let r = fn(s), i = `Parser Error: ${n}${t}[${e}] in ${r}`; return new N(s, i); }
var $l = class extends qr {
    errors = [];
    visitPipe() { this.errors.push("pipes"); }
};
function Lw(n) { let e = new Map, t = 0, s = 0, r = 0; for (; r < n.length;) {
    let i = n[r];
    if (i.type === 9) {
        let [a, o] = i.parts;
        t += o.length, s += a.length;
    }
    else {
        let a = i.parts.reduce((o, l) => o + l.length, 0);
        s += a, t += a;
    }
    e.set(s, t), r++;
} return e; }
function Bw(n) { return n.visit(new Ol); }
var Ol = class {
    visitUnary(e, t) { return `${e.operator}${e.expr.visit(this, t)}`; }
    visitBinary(e, t) { return `${e.left.visit(this, t)} ${e.operation} ${e.right.visit(this, t)}`; }
    visitChain(e, t) { return e.expressions.map(s => s.visit(this, t)).join("; "); }
    visitConditional(e, t) { return `${e.condition.visit(this, t)} ? ${e.trueExp.visit(this, t)} : ${e.falseExp.visit(this, t)}`; }
    visitThisReceiver() { return "this"; }
    visitImplicitReceiver() { return ""; }
    visitInterpolation(e, t) { return Rw(e.strings, e.expressions.map(s => s.visit(this, t))).join(""); }
    visitKeyedRead(e, t) { return `${e.receiver.visit(this, t)}[${e.key.visit(this, t)}]`; }
    visitLiteralArray(e, t) { return `[${e.expressions.map(s => s.visit(this, t)).join(", ")}]`; }
    visitLiteralMap(e, t) { return `{${Mw(e.keys.map(s => s.quoted ? `'${s.key}'` : s.key), e.values.map(s => s.visit(this, t))).map(([s, r]) => `${s}: ${r}`).join(", ")}}`; }
    visitLiteralPrimitive(e) { if (e.value === null)
        return "null"; switch (typeof e.value) {
        case "number":
        case "boolean": return e.value.toString();
        case "undefined": return "undefined";
        case "string": return `'${e.value.replace(/'/g, "\\'")}'`;
        default: throw new Error(`Unsupported primitive type: ${e.value}`);
    } }
    visitPipe(e, t) { return `${e.exp.visit(this, t)} | ${e.name}`; }
    visitPrefixNot(e, t) { return `!${e.expression.visit(this, t)}`; }
    visitNonNullAssert(e, t) { return `${e.expression.visit(this, t)}!`; }
    visitPropertyRead(e, t) { return e.receiver instanceof $t ? e.name : `${e.receiver.visit(this, t)}.${e.name}`; }
    visitSafePropertyRead(e, t) { return `${e.receiver.visit(this, t)}?.${e.name}`; }
    visitSafeKeyedRead(e, t) { return `${e.receiver.visit(this, t)}?.[${e.key.visit(this, t)}]`; }
    visitCall(e, t) { return `${e.receiver.visit(this, t)}(${e.args.map(s => s.visit(this, t)).join(", ")})`; }
    visitSafeCall(e, t) { return `${e.receiver.visit(this, t)}?.(${e.args.map(s => s.visit(this, t)).join(", ")})`; }
    visitTypeofExpression(e, t) { return `typeof ${e.expression.visit(this, t)}`; }
    visitVoidExpression(e, t) { return `void ${e.expression.visit(this, t)}`; }
    visitASTWithSource(e, t) { return e.ast.visit(this, t); }
    visitTemplateLiteral(e, t) { let s = ""; for (let r = 0; r < e.elements.length; r++) {
        s += e.elements[r].visit(this, t);
        let i = r < e.expressions.length ? e.expressions[r] : null;
        i !== null && (s += "${" + i.visit(this, t) + "}");
    } return "`" + s + "`"; }
    visitTemplateLiteralElement(e, t) { return e.text; }
    visitTaggedTemplateLiteral(e, t) { return e.tag.visit(this, t) + e.template.visit(this, t); }
    visitParenthesizedExpression(e, t) { return "(" + e.expression.visit(this, t) + ")"; }
};
function Mw(n, e) { if (n.length !== e.length)
    throw new Error("Array lengths must match"); return n.map((t, s) => [t, e[s]]); }
function Rw(n, e) { let t = []; for (let s = 0; s < Math.max(n.length, e.length); s++)
    s < n.length && t.push(n[s]), s < e.length && t.push(e[s]); return t; }
var Wi;
function th() { return Wi || (Wi = {}, Ii(ne.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), Ii(ne.STYLE, ["*|style"]), Ii(ne.URL, ["*|formAction", "area|href", "area|ping", "audio|src", "a|href", "a|ping", "blockquote|cite", "body|background", "del|cite", "form|action", "img|src", "input|src", "ins|cite", "q|cite", "source|src", "track|src", "video|poster", "video|src"]), Ii(ne.RESOURCE_URL, ["applet|code", "applet|codebase", "base|href", "embed|src", "frame|src", "head|profile", "html|manifest", "iframe|src", "link|href", "media|src", "object|codebase", "object|data", "script|src"])), Wi; }
function Ii(n, e) { for (let t of e)
    Wi[t.toLowerCase()] = n; }
var Fw = new Set(["sandbox", "allow", "allowfullscreen", "referrerpolicy", "csp", "fetchpriority"]);
function $w(n) { return Fw.has(n.toLowerCase()); }
var Vl = class {
}, Ow = "boolean", Vw = "number", qw = "string", Uw = "object", Hw = ["[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaInvalid,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored", "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,search,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume", ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":svg:graphics^:svg:|", ":svg:animation^:svg:|*begin,*end,*repeat", ":svg:geometry^:svg:|", ":svg:componentTransferFunction^:svg:|", ":svg:gradient^:svg:|", ":svg:textContent^:svg:graphics|", ":svg:textPositioning^:svg:textContent|", "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username", "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username", "audio^media|", "br^[HTMLElement]|clear", "base^[HTMLElement]|href,target", "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink", "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value", "canvas^[HTMLElement]|#height,#width", "content^[HTMLElement]|select", "dl^[HTMLElement]|!compact", "data^[HTMLElement]|value", "datalist^[HTMLElement]|", "details^[HTMLElement]|!open", "dialog^[HTMLElement]|!open,returnValue", "dir^[HTMLElement]|!compact", "div^[HTMLElement]|align", "embed^[HTMLElement]|align,height,name,src,type,width", "fieldset^[HTMLElement]|!disabled,name", "font^[HTMLElement]|color,face,size", "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target", "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src", "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows", "hr^[HTMLElement]|align,color,!noShade,size,width", "head^[HTMLElement]|", "h1,h2,h3,h4,h5,h6^[HTMLElement]|align", "html^[HTMLElement]|version", "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width", "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width", "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width", "li^[HTMLElement]|type,#value", "label^[HTMLElement]|htmlFor", "legend^[HTMLElement]|align", "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type", "map^[HTMLElement]|name", "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width", "menu^[HTMLElement]|!compact", "meta^[HTMLElement]|content,httpEquiv,media,name,scheme", "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value", "ins,del^[HTMLElement]|cite,dateTime", "ol^[HTMLElement]|!compact,!reversed,#start,type", "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width", "optgroup^[HTMLElement]|!disabled,label", "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value", "output^[HTMLElement]|defaultValue,%htmlFor,name,value", "p^[HTMLElement]|align", "param^[HTMLElement]|name,type,value,valueType", "picture^[HTMLElement]|", "pre^[HTMLElement]|#width", "progress^[HTMLElement]|#max,#value", "q,blockquote,cite^[HTMLElement]|", "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type", "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value", "selectedcontent^[HTMLElement]|", "slot^[HTMLElement]|name", "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width", "span^[HTMLElement]|", "style^[HTMLElement]|!disabled,media,type", "search^[HTMLELement]|", "caption^[HTMLElement]|align", "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width", "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width", "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width", "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign", "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign", "template^[HTMLElement]|", "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap", "time^[HTMLElement]|dateTime", "title^[HTMLElement]|text", "track^[HTMLElement]|!default,kind,label,src,srclang", "ul^[HTMLElement]|!compact,type", "unknown^[HTMLElement]|", "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width", ":svg:a^:svg:graphics|", ":svg:animate^:svg:animation|", ":svg:animateMotion^:svg:animation|", ":svg:animateTransform^:svg:animation|", ":svg:circle^:svg:geometry|", ":svg:clipPath^:svg:graphics|", ":svg:defs^:svg:graphics|", ":svg:desc^:svg:|", ":svg:discard^:svg:|", ":svg:ellipse^:svg:geometry|", ":svg:feBlend^:svg:|", ":svg:feColorMatrix^:svg:|", ":svg:feComponentTransfer^:svg:|", ":svg:feComposite^:svg:|", ":svg:feConvolveMatrix^:svg:|", ":svg:feDiffuseLighting^:svg:|", ":svg:feDisplacementMap^:svg:|", ":svg:feDistantLight^:svg:|", ":svg:feDropShadow^:svg:|", ":svg:feFlood^:svg:|", ":svg:feFuncA^:svg:componentTransferFunction|", ":svg:feFuncB^:svg:componentTransferFunction|", ":svg:feFuncG^:svg:componentTransferFunction|", ":svg:feFuncR^:svg:componentTransferFunction|", ":svg:feGaussianBlur^:svg:|", ":svg:feImage^:svg:|", ":svg:feMerge^:svg:|", ":svg:feMergeNode^:svg:|", ":svg:feMorphology^:svg:|", ":svg:feOffset^:svg:|", ":svg:fePointLight^:svg:|", ":svg:feSpecularLighting^:svg:|", ":svg:feSpotLight^:svg:|", ":svg:feTile^:svg:|", ":svg:feTurbulence^:svg:|", ":svg:filter^:svg:|", ":svg:foreignObject^:svg:graphics|", ":svg:g^:svg:graphics|", ":svg:image^:svg:graphics|decoding", ":svg:line^:svg:geometry|", ":svg:linearGradient^:svg:gradient|", ":svg:mpath^:svg:|", ":svg:marker^:svg:|", ":svg:mask^:svg:|", ":svg:metadata^:svg:|", ":svg:path^:svg:geometry|", ":svg:pattern^:svg:|", ":svg:polygon^:svg:geometry|", ":svg:polyline^:svg:geometry|", ":svg:radialGradient^:svg:gradient|", ":svg:rect^:svg:geometry|", ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan", ":svg:script^:svg:|type", ":svg:set^:svg:animation|", ":svg:stop^:svg:|", ":svg:style^:svg:|!disabled,media,title,type", ":svg:switch^:svg:graphics|", ":svg:symbol^:svg:|", ":svg:tspan^:svg:textPositioning|", ":svg:text^:svg:textPositioning|", ":svg:textPath^:svg:textContent|", ":svg:title^:svg:|", ":svg:use^:svg:graphics|", ":svg:view^:svg:|#zoomAndPan", "data^[HTMLElement]|value", "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name", "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default", "summary^[HTMLElement]|", "time^[HTMLElement]|dateTime", ":svg:cursor^:svg:|", ":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":math:math^:math:|", ":math:maction^:math:|", ":math:menclose^:math:|", ":math:merror^:math:|", ":math:mfenced^:math:|", ":math:mfrac^:math:|", ":math:mi^:math:|", ":math:mmultiscripts^:math:|", ":math:mn^:math:|", ":math:mo^:math:|", ":math:mover^:math:|", ":math:mpadded^:math:|", ":math:mphantom^:math:|", ":math:mroot^:math:|", ":math:mrow^:math:|", ":math:ms^:math:|", ":math:mspace^:math:|", ":math:msqrt^:math:|", ":math:mstyle^:math:|", ":math:msub^:math:|", ":math:msubsup^:math:|", ":math:msup^:math:|", ":math:mtable^:math:|", ":math:mtd^:math:|", ":math:mtext^:math:|", ":math:mtr^:math:|", ":math:munder^:math:|", ":math:munderover^:math:|", ":math:semantics^:math:|"], xf = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex", "aria-atomic": "ariaAtomic", "aria-autocomplete": "ariaAutoComplete", "aria-busy": "ariaBusy", "aria-checked": "ariaChecked", "aria-colcount": "ariaColCount", "aria-colindex": "ariaColIndex", "aria-colspan": "ariaColSpan", "aria-current": "ariaCurrent", "aria-disabled": "ariaDisabled", "aria-expanded": "ariaExpanded", "aria-haspopup": "ariaHasPopup", "aria-hidden": "ariaHidden", "aria-invalid": "ariaInvalid", "aria-keyshortcuts": "ariaKeyShortcuts", "aria-label": "ariaLabel", "aria-level": "ariaLevel", "aria-live": "ariaLive", "aria-modal": "ariaModal", "aria-multiline": "ariaMultiLine", "aria-multiselectable": "ariaMultiSelectable", "aria-orientation": "ariaOrientation", "aria-placeholder": "ariaPlaceholder", "aria-posinset": "ariaPosInSet", "aria-pressed": "ariaPressed", "aria-readonly": "ariaReadOnly", "aria-required": "ariaRequired", "aria-roledescription": "ariaRoleDescription", "aria-rowcount": "ariaRowCount", "aria-rowindex": "ariaRowIndex", "aria-rowspan": "ariaRowSpan", "aria-selected": "ariaSelected", "aria-setsize": "ariaSetSize", "aria-sort": "ariaSort", "aria-valuemax": "ariaValueMax", "aria-valuemin": "ariaValueMin", "aria-valuenow": "ariaValueNow", "aria-valuetext": "ariaValueText" })), Ww = Array.from(xf).reduce((n, [e, t]) => (n.set(e, t), n), new Map), Qs = class extends Vl {
    _schema = new Map;
    _eventSchema = new Map;
    constructor() { super(), Hw.forEach(e => { let t = new Map, s = new Set, [r, i] = e.split("|"), a = i.split(","), [o, l] = r.split("^"); o.split(",").forEach(h => { this._schema.set(h.toLowerCase(), t), this._eventSchema.set(h.toLowerCase(), s); }); let c = l && this._schema.get(l.toLowerCase()); if (c) {
        for (let [h, p] of c)
            t.set(h, p);
        for (let h of this._eventSchema.get(l.toLowerCase()))
            s.add(h);
    } a.forEach(h => { if (h.length > 0)
        switch (h[0]) {
            case "*":
                s.add(h.substring(1));
                break;
            case "!":
                t.set(h.substring(1), Ow);
                break;
            case "#":
                t.set(h.substring(1), Vw);
                break;
            case "%":
                t.set(h.substring(1), Uw);
                break;
            default: t.set(h, qw);
        } }); }); }
    hasProperty(e, t, s) { if (s.some(i => i.name === Oo.name))
        return !0; if (e.indexOf("-") > -1) {
        if (du(e) || Ko(e))
            return !1;
        if (s.some(i => i.name === $o.name))
            return !0;
    } return (this._schema.get(e.toLowerCase()) || this._schema.get("unknown")).has(t); }
    hasElement(e, t) { return t.some(s => s.name === Oo.name) || e.indexOf("-") > -1 && (du(e) || Ko(e) || t.some(s => s.name === $o.name)) ? !0 : this._schema.has(e.toLowerCase()); }
    securityContext(e, t, s) { s && (t = this.getMappedPropName(t)), e = e.toLowerCase(), t = t.toLowerCase(); let r = th()[e + "|" + t]; return r || (r = th()["*|" + t], r || ne.NONE); }
    getMappedPropName(e) { return xf.get(e) ?? e; }
    getDefaultComponentElementName() { return "ng-component"; }
    validateProperty(e) {
        return e.toLowerCase().startsWith("on") ? { error: !0, msg: `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.` } : { error: !1 };
    }
    validateAttribute(e) { return e.toLowerCase().startsWith("on") ? { error: !0, msg: `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...` } : { error: !1 }; }
    allKnownElementNames() { return Array.from(this._schema.keys()); }
    allKnownAttributesOfElement(e) { let t = this._schema.get(e.toLowerCase()) || this._schema.get("unknown"); return Array.from(t.keys()).map(s => Ww.get(s) ?? s); }
    allKnownEventsOfElement(e) { return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []); }
    normalizeAnimationStyleProperty(e) { return jd(e); }
    normalizeAnimationStyleValue(e, t, s) { let r = "", i = s.toString().trim(), a = null; if (jw(e) && s !== 0 && s !== "0")
        if (typeof s == "number")
            r = "px";
        else {
            let o = s.match(/^[+-]?[\d\.]+([a-z]*)$/);
            o && o[1].length == 0 && (a = `Please provide a CSS unit value for ${t}:${s}`);
        } return { error: a, value: i + r }; }
};
function jw(n) { switch (n) {
    case "width":
    case "height":
    case "minWidth":
    case "minHeight":
    case "maxWidth":
    case "maxHeight":
    case "left":
    case "top":
    case "bottom":
    case "right":
    case "fontSize":
    case "outlineWidth":
    case "outlineOffset":
    case "paddingTop":
    case "paddingLeft":
    case "paddingBottom":
    case "paddingRight":
    case "marginTop":
    case "marginLeft":
    case "marginBottom":
    case "marginRight":
    case "borderRadius":
    case "borderWidth":
    case "borderTopWidth":
    case "borderLeftWidth":
    case "borderRightWidth":
    case "borderBottomWidth":
    case "textIndent": return !0;
    default: return !1;
} }
var q = class {
    closedByChildren = {};
    contentType;
    closedByParent = !1;
    implicitNamespacePrefix;
    isVoid;
    ignoreFirstLf;
    canSelfClose;
    preventNamespaceInheritance;
    constructor({ closedByChildren: e, implicitNamespacePrefix: t, contentType: s = Mt.PARSABLE_DATA, closedByParent: r = !1, isVoid: i = !1, ignoreFirstLf: a = !1, preventNamespaceInheritance: o = !1, canSelfClose: l = !1 } = {}) { e && e.length > 0 && e.forEach(c => this.closedByChildren[c] = !0), this.isVoid = i, this.closedByParent = r || i, this.implicitNamespacePrefix = t || null, this.contentType = s, this.ignoreFirstLf = a, this.preventNamespaceInheritance = o, this.canSelfClose = l ?? i; }
    isClosedByChild(e) { return this.isVoid || e.toLowerCase() in this.closedByChildren; }
    getContentType(e) { return typeof this.contentType == "object" ? (e === void 0 ? void 0 : this.contentType[e]) ?? this.contentType.default : this.contentType; }
}, nh, vs;
function ql(n) { return vs || (nh = new q({ canSelfClose: !0 }), vs = Object.assign(Object.create(null), { base: new q({ isVoid: !0 }), meta: new q({ isVoid: !0 }), area: new q({ isVoid: !0 }), embed: new q({ isVoid: !0 }), link: new q({ isVoid: !0 }), img: new q({ isVoid: !0 }), input: new q({ isVoid: !0 }), param: new q({ isVoid: !0 }), hr: new q({ isVoid: !0 }), br: new q({ isVoid: !0 }), source: new q({ isVoid: !0 }), track: new q({ isVoid: !0 }), wbr: new q({ isVoid: !0 }), p: new q({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: !0 }), thead: new q({ closedByChildren: ["tbody", "tfoot"] }), tbody: new q({ closedByChildren: ["tbody", "tfoot"], closedByParent: !0 }), tfoot: new q({ closedByChildren: ["tbody"], closedByParent: !0 }), tr: new q({ closedByChildren: ["tr"], closedByParent: !0 }), td: new q({ closedByChildren: ["td", "th"], closedByParent: !0 }), th: new q({ closedByChildren: ["td", "th"], closedByParent: !0 }), col: new q({ isVoid: !0 }), svg: new q({ implicitNamespacePrefix: "svg" }), foreignObject: new q({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: !0 }), math: new q({ implicitNamespacePrefix: "math" }), li: new q({ closedByChildren: ["li"], closedByParent: !0 }), dt: new q({ closedByChildren: ["dt", "dd"] }), dd: new q({ closedByChildren: ["dt", "dd"], closedByParent: !0 }), rb: new q({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), rt: new q({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), rtc: new q({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: !0 }), rp: new q({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), optgroup: new q({ closedByChildren: ["optgroup"], closedByParent: !0 }), option: new q({ closedByChildren: ["option", "optgroup"], closedByParent: !0 }), pre: new q({ ignoreFirstLf: !0 }), listing: new q({ ignoreFirstLf: !0 }), style: new q({ contentType: Mt.RAW_TEXT }), script: new q({ contentType: Mt.RAW_TEXT }), title: new q({ contentType: { default: Mt.ESCAPABLE_RAW_TEXT, svg: Mt.PARSABLE_DATA } }), textarea: new q({ contentType: Mt.ESCAPABLE_RAW_TEXT, ignoreFirstLf: !0 }) }), new Qs().allKnownElementNames().forEach(e => { !vs[e] && el(e) === null && (vs[e] = new q({ canSelfClose: !1 })); })), vs[n] ?? vs[n.toLowerCase()] ?? nh; }
var sh = { A: "LINK", B: "BOLD_TEXT", BR: "LINE_BREAK", EM: "EMPHASISED_TEXT", H1: "HEADING_LEVEL1", H2: "HEADING_LEVEL2", H3: "HEADING_LEVEL3", H4: "HEADING_LEVEL4", H5: "HEADING_LEVEL5", H6: "HEADING_LEVEL6", HR: "HORIZONTAL_RULE", I: "ITALIC_TEXT", LI: "LIST_ITEM", LINK: "MEDIA_LINK", OL: "ORDERED_LIST", P: "PARAGRAPH", Q: "QUOTATION", S: "STRIKETHROUGH_TEXT", SMALL: "SMALL_TEXT", SUB: "SUBSTRIPT", SUP: "SUPERSCRIPT", TBODY: "TABLE_BODY", TD: "TABLE_CELL", TFOOT: "TABLE_FOOTER", TH: "TABLE_HEADER_CELL", THEAD: "TABLE_HEADER", TR: "TABLE_ROW", TT: "MONOSPACED_TEXT", U: "UNDERLINED_TEXT", UL: "UNORDERED_LIST" }, Ul = class {
    _placeHolderNameCounts = {};
    _signatureToName = {};
    getStartTagPlaceholderName(e, t, s) { let r = this._hashTag(e, t, s); if (this._signatureToName[r])
        return this._signatureToName[r]; let i = e.toUpperCase(), a = sh[i] || `TAG_${i}`, o = this._generateUniqueName(s ? a : `START_${a}`); return this._signatureToName[r] = o, o; }
    getCloseTagPlaceholderName(e) { let t = this._hashClosingTag(e); if (this._signatureToName[t])
        return this._signatureToName[t]; let s = e.toUpperCase(), r = sh[s] || `TAG_${s}`, i = this._generateUniqueName(`CLOSE_${r}`); return this._signatureToName[t] = i, i; }
    getPlaceholderName(e, t) { let s = e.toUpperCase(), r = `PH: ${s}=${t}`; if (this._signatureToName[r])
        return this._signatureToName[r]; let i = this._generateUniqueName(s); return this._signatureToName[r] = i, i; }
    getUniquePlaceholder(e) { return this._generateUniqueName(e.toUpperCase()); }
    getStartBlockPlaceholderName(e, t) { let s = this._hashBlock(e, t); if (this._signatureToName[s])
        return this._signatureToName[s]; let r = this._generateUniqueName(`START_BLOCK_${this._toSnakeCase(e)}`); return this._signatureToName[s] = r, r; }
    getCloseBlockPlaceholderName(e) { let t = this._hashClosingBlock(e); if (this._signatureToName[t])
        return this._signatureToName[t]; let s = this._generateUniqueName(`CLOSE_BLOCK_${this._toSnakeCase(e)}`); return this._signatureToName[t] = s, s; }
    _hashTag(e, t, s) { let r = `<${e}`, i = Object.keys(t).sort().map(o => ` ${o}=${t[o]}`).join(""), a = s ? "/>" : `></${e}>`; return r + i + a; }
    _hashClosingTag(e) { return this._hashTag(`/${e}`, {}, !1); }
    _hashBlock(e, t) { let s = t.length === 0 ? "" : ` (${t.sort().join("; ")})`; return `@${e}${s} {}`; }
    _hashClosingBlock(e) { return this._hashBlock(`close_${e}`, []); }
    _toSnakeCase(e) { return e.toUpperCase().replace(/[^A-Z0-9]/g, "_"); }
    _generateUniqueName(e) { if (!this._placeHolderNameCounts.hasOwnProperty(e))
        return this._placeHolderNameCounts[e] = 1, e; let s = this._placeHolderNameCounts[e]; return this._placeHolderNameCounts[e] = s + 1, `${e}_${s}`; }
}, zw = new $a(new di);
function yf(n, e, t, s) { let r = new Hl(zw, n, e, t, s); return (i, a, o, l, c) => r.toI18nMessage(i, a, o, l, c); }
function Gw(n, e) { return e; }
var Hl = class {
    _expressionParser;
    _interpolationConfig;
    _containerBlocks;
    _retainEmptyTokens;
    _preserveExpressionWhitespace;
    constructor(e, t, s, r, i) { this._expressionParser = e, this._interpolationConfig = t, this._containerBlocks = s, this._retainEmptyTokens = r, this._preserveExpressionWhitespace = i; }
    toI18nMessage(e, t = "", s = "", r = "", i) { let a = { isIcu: e.length == 1 && e[0] instanceof wn, icuDepth: 0, placeholderRegistry: new Ul, placeholderToContent: {}, placeholderToMessage: {}, visitNodeFn: i || Gw }, o = P(this, e, a); return new Ie(o, a.placeholderToContent, a.placeholderToMessage, t, s, r); }
    visitElement(e, t) { return this._visitElementLike(e, t); }
    visitComponent(e, t) { return this._visitElementLike(e, t); }
    visitDirective(e, t) { throw new Error("Unreachable code"); }
    visitAttribute(e, t) { let s = e.valueTokens === void 0 || e.valueTokens.length === 1 ? new Rt(e.value, e.valueSpan || e.sourceSpan) : this._visitTextWithInterpolation(e.valueTokens, e.valueSpan || e.sourceSpan, t, e.i18n); return t.visitNodeFn(e, s); }
    visitText(e, t) { let s = e.tokens.length === 1 ? new Rt(e.value, e.sourceSpan) : this._visitTextWithInterpolation(e.tokens, e.sourceSpan, t, e.i18n); return t.visitNodeFn(e, s); }
    visitComment(e, t) { return null; }
    visitExpansion(e, t) { t.icuDepth++; let s = {}, r = new kn(e.switchValue, e.type, s, e.sourceSpan); if (e.cases.forEach(o => { s[o.value] = new et(o.expression.map(l => l.visit(this, t)), o.expSourceSpan); }), t.icuDepth--, t.isIcu || t.icuDepth > 0) {
        let o = t.placeholderRegistry.getUniquePlaceholder(`VAR_${e.type}`);
        return r.expressionPlaceholder = o, t.placeholderToContent[o] = { text: e.switchValue, sourceSpan: e.switchValueSourceSpan }, t.visitNodeFn(e, r);
    } let i = t.placeholderRegistry.getPlaceholderName("ICU", e.sourceSpan.toString()); t.placeholderToMessage[i] = this.toI18nMessage([e], "", "", "", void 0); let a = new Tn(r, i, e.sourceSpan); return t.visitNodeFn(e, a); }
    visitExpansionCase(e, t) { throw new Error("Unreachable code"); }
    visitBlock(e, t) { let s = P(this, e.children, t); if (this._containerBlocks.has(e.name))
        return new et(s, e.sourceSpan); let r = e.parameters.map(l => l.expression), i = t.placeholderRegistry.getStartBlockPlaceholderName(e.name, r), a = t.placeholderRegistry.getCloseBlockPlaceholderName(e.name); t.placeholderToContent[i] = { text: e.startSourceSpan.toString(), sourceSpan: e.startSourceSpan }, t.placeholderToContent[a] = { text: e.endSourceSpan ? e.endSourceSpan.toString() : "}", sourceSpan: e.endSourceSpan ?? e.sourceSpan }; let o = new Ut(e.name, r, i, a, s, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); return t.visitNodeFn(e, o); }
    visitBlockParameter(e, t) { throw new Error("Unreachable code"); }
    visitLetDeclaration(e, t) { return null; }
    _visitElementLike(e, t) { let s = P(this, e.children, t), r = {}, i = p => { r[p.name] = p.value; }, a, o; e instanceof De ? (a = e.name, o = ql(e.name).isVoid) : (a = e.fullName, o = e.tagName ? ql(e.tagName).isVoid : !1), e.attrs.forEach(i), e.directives.forEach(p => p.attrs.forEach(i)); let l = t.placeholderRegistry.getStartTagPlaceholderName(a, r, o); t.placeholderToContent[l] = { text: e.startSourceSpan.toString(), sourceSpan: e.startSourceSpan }; let c = ""; o || (c = t.placeholderRegistry.getCloseTagPlaceholderName(a), t.placeholderToContent[c] = { text: `</${a}>`, sourceSpan: e.endSourceSpan ?? e.sourceSpan }); let h = new qt(a, r, l, c, s, o, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); return t.visitNodeFn(e, h); }
    _visitTextWithInterpolation(e, t, s, r) { let i = [], a = !1; for (let o of e)
        switch (o.type) {
            case 8:
            case 17:
                a = !0;
                let [l, c, h] = o.parts, p = Jw(c) || "INTERPOLATION", g = s.placeholderRegistry.getPlaceholderName(p, c);
                if (this._preserveExpressionWhitespace)
                    s.placeholderToContent[g] = { text: o.parts.join(""), sourceSpan: o.sourceSpan }, i.push(new pt(c, g, o.sourceSpan));
                else {
                    let v = this.normalizeExpression(o);
                    s.placeholderToContent[g] = { text: `${l}${v}${h}`, sourceSpan: o.sourceSpan }, i.push(new pt(v, g, o.sourceSpan));
                }
                break;
            default:
                if (o.parts[0].length > 0 || this._retainEmptyTokens) {
                    let v = i[i.length - 1];
                    v instanceof Rt ? (v.value += o.parts[0], v.sourceSpan = new L(v.sourceSpan.start, o.sourceSpan.end, v.sourceSpan.fullStart, v.sourceSpan.details)) : i.push(new Rt(o.parts[0], o.sourceSpan));
                }
                else
                    this._retainEmptyTokens && i.push(new Rt(o.parts[0], o.sourceSpan));
                break;
        } return a ? (Xw(i, r), new et(i, t)) : i[0]; }
    normalizeExpression(e) { let t = e.parts[1], s = this._expressionParser.parseBinding(t, e.sourceSpan, e.sourceSpan.start.offset, this._interpolationConfig); return Bw(s); }
};
function Xw(n, e) { if (e instanceof Ie && (Yw(e), e = e.nodes[0]), e instanceof et) {
    Qw(e.children, n);
    for (let t = 0; t < n.length; t++)
        n[t].sourceSpan = e.children[t].sourceSpan;
} }
function Yw(n) { let e = n.nodes; if (e.length !== 1 || !(e[0] instanceof et))
    throw new Error("Unexpected previous i18n message - expected it to consist of only a single `Container` node."); }
function Qw(n, e) {
    if (n.length !== e.length)
        throw new Error(`
The number of i18n message children changed between first and second pass.

First pass (${n.length} tokens):
${n.map(t => `"${t.sourceSpan.toString()}"`).join(`
`)}

Second pass (${e.length} tokens):
${e.map(t => `"${t.sourceSpan.toString()}"`).join(`
`)}
    `.trim());
    if (n.some((t, s) => e[s].constructor !== t.constructor))
        throw new Error("The types of the i18n message children changed between first and second pass.");
}
var Zw = /\/\/[\s\S]*i18n[\s\S]*\([\s\S]*ph[\s\S]*=[\s\S]*("|')([\s\S]*?)\1[\s\S]*\)/g;
function Jw(n) { return n.split(Zw)[2]; }
var rh = new Set(["iframe|srcdoc", "*|innerhtml", "*|outerhtml", "embed|src", "object|codebase", "object|data"]);
function ih(n, e) { return n = n.toLowerCase(), e = e.toLowerCase(), rh.has(n + "|" + e) || rh.has("*|" + e); }
var Kw = n => (e, t) => { let s = n.get(e) ?? e; return s instanceof an && (t instanceof Tn && s.i18n instanceof Ie && (t.previousMessage = s.i18n), s.i18n = t), t; }, Oa = class {
    interpolationConfig;
    keepI18nAttrs;
    enableI18nLegacyMessageIdFormat;
    containerBlocks;
    preserveSignificantWhitespace;
    retainEmptyTokens;
    hasI18nMeta = !1;
    _errors = [];
    constructor(e = ot, t = !1, s = !1, r = Tp, i = !0, a = !i) { this.interpolationConfig = e, this.keepI18nAttrs = t, this.enableI18nLegacyMessageIdFormat = s, this.containerBlocks = r, this.preserveSignificantWhitespace = i, this.retainEmptyTokens = a; }
    _generateI18nMessage(e, t = "", s) { let { meaning: r, description: i, customId: a } = this._parseMetadata(t), l = yf(this.interpolationConfig, this.containerBlocks, this.retainEmptyTokens, this.preserveSignificantWhitespace)(e, r, i, a, s); return this._setMessageId(l, t), this._setLegacyIds(l, t), l; }
    visitAllWithErrors(e) { let t = e.map(s => s.visit(this, null)); return new Ys(t, this._errors); }
    visitElement(e) { return this._visitElementLike(e), e; }
    visitComponent(e, t) { return this._visitElementLike(e), e; }
    visitExpansion(e, t) { let s, r = e.i18n; if (this.hasI18nMeta = !0, r instanceof Tn) {
        let i = r.name;
        s = this._generateI18nMessage([e], r);
        let a = Ap(s);
        a.name = i, t !== null && (t.placeholderToMessage[i] = s);
    }
    else
        s = this._generateI18nMessage([e], t || r); return e.i18n = s, e; }
    visitText(e) { return e; }
    visitAttribute(e) { return e; }
    visitComment(e) { return e; }
    visitExpansionCase(e) { return e; }
    visitBlock(e, t) { return P(this, e.children, t), e; }
    visitBlockParameter(e, t) { return e; }
    visitLetDeclaration(e, t) { return e; }
    visitDirective(e, t) { return e; }
    _visitElementLike(e) { let t; if (Cm(e)) {
        this.hasI18nMeta = !0;
        let s = [], r = {};
        for (let i of e.attrs)
            if (i.name === yp) {
                let a = e.i18n || i.value, o = new Map, l = this.preserveSignificantWhitespace ? e.children : wt(new fi(!1, o), e.children);
                t = this._generateI18nMessage(l, a, Kw(o)), t.nodes.length === 0 && (t = void 0), e.i18n = t;
            }
            else if (i.name.startsWith(fl)) {
                let a = i.name.slice(fl.length), o;
                e instanceof Ce ? o = e.tagName === null ? !1 : ih(e.tagName, a) : o = ih(e.name, a), o ? this._reportError(i, `Translating attribute '${a}' is disallowed for security reasons.`) : r[a] = i.value;
            }
            else
                s.push(i);
        if (Object.keys(r).length)
            for (let i of s) {
                let a = r[i.name];
                a !== void 0 && i.value && (i.i18n = this._generateI18nMessage([i], i.i18n || a));
            }
        this.keepI18nAttrs || (e.attrs = s);
    } P(this, e.children, t); }
    _parseMetadata(e) { return typeof e == "string" ? nE(e) : e instanceof Ie ? e : {}; }
    _setMessageId(e, t) { e.id || (e.id = t instanceof Ie && t.id || Tc(e)); }
    _setLegacyIds(e, t) { if (this.enableI18nLegacyMessageIdFormat)
        e.legacyIds = [sp(e), rp(e)];
    else if (typeof t != "string") {
        let s = t instanceof Ie ? t : t instanceof Tn ? t.previousMessage : void 0;
        e.legacyIds = s ? s.legacyIds : [];
    } }
    _reportError(e, t) { this._errors.push(new N(e.sourceSpan, t)); }
}, eE = "|", tE = "@@";
function nE(n = "") { let e, t, s; if (n = n.trim(), n) {
    let r = n.indexOf(tE), i = n.indexOf(eE), a;
    [a, e] = r > -1 ? [n.slice(0, r), n.slice(r + 2)] : [n, ""], [t, s] = i > -1 ? [a.slice(0, i), a.slice(i + 1)] : ["", a];
} return { customId: e, meaning: t, description: s }; }
function sE(n) { let e = []; return n.description ? e.push({ tagName: "desc", text: n.description }) : e.push({ tagName: "suppress", text: "{msgDescriptions}" }), n.meaning && e.push({ tagName: "meaning", text: n.meaning }), up(e); }
var rE = "goog.getMsg";
function iE(n, e, t, s) { let r = oE(e), i = [d(r)]; Object.keys(s).length && (i.push(La(Mc(s, !0), !0)), i.push(La({ original_code: he(Object.keys(s).map(l => ({ key: yi(l), quoted: !0, value: e.placeholders[l] ? d(e.placeholders[l].sourceSpan.toString()) : d(e.placeholderToMessage[l].nodes.map(c => c.sourceSpan.toString()).join("")) }))) }))); let a = new ce(t.name, D(rE).callFn(i), qe, le.Final); a.addLeadingComment(sE(e)); let o = new nt(n.set(t)); return [a, o]; }
var Wl = class {
    formatPh(e) { return `{$${yi(e)}}`; }
    visitText(e) { return e.value; }
    visitContainer(e) { return e.children.map(t => t.visit(this)).join(""); }
    visitIcu(e) { return ff(e); }
    visitTagPlaceholder(e) { return e.isVoid ? this.formatPh(e.startName) : `${this.formatPh(e.startName)}${e.children.map(t => t.visit(this)).join("")}${this.formatPh(e.closeName)}`; }
    visitPlaceholder(e) { return this.formatPh(e.name); }
    visitBlockPlaceholder(e) { return `${this.formatPh(e.startName)}${e.children.map(t => t.visit(this)).join("")}${this.formatPh(e.closeName)}`; }
    visitIcuPlaceholder(e, t) { return this.formatPh(e.name); }
}, aE = new Wl;
function oE(n) { return n.nodes.map(e => e.visit(aE, null)).join(""); }
function lE(n, e, t) { let { messageParts: s, placeHolders: r } = cE(e), i = uE(e), a = r.map(c => t[c.text]), o = fp(e, s, r, a, i), l = n.set(o); return [new nt(l)]; }
var jl = class {
    placeholderToMessage;
    pieces;
    constructor(e, t) { this.placeholderToMessage = e, this.pieces = t; }
    visitText(e) { if (this.pieces[this.pieces.length - 1] instanceof gn)
        this.pieces[this.pieces.length - 1].text += e.value;
    else {
        let t = new L(e.sourceSpan.fullStart, e.sourceSpan.end, e.sourceSpan.fullStart, e.sourceSpan.details);
        this.pieces.push(new gn(e.value, t));
    } }
    visitContainer(e) { e.children.forEach(t => t.visit(this)); }
    visitIcu(e) { this.pieces.push(new gn(ff(e), e.sourceSpan)); }
    visitTagPlaceholder(e) { this.pieces.push(this.createPlaceholderPiece(e.startName, e.startSourceSpan ?? e.sourceSpan)), e.isVoid || (e.children.forEach(t => t.visit(this)), this.pieces.push(this.createPlaceholderPiece(e.closeName, e.endSourceSpan ?? e.sourceSpan))); }
    visitPlaceholder(e) { this.pieces.push(this.createPlaceholderPiece(e.name, e.sourceSpan)); }
    visitBlockPlaceholder(e) { this.pieces.push(this.createPlaceholderPiece(e.startName, e.startSourceSpan ?? e.sourceSpan)), e.children.forEach(t => t.visit(this)), this.pieces.push(this.createPlaceholderPiece(e.closeName, e.endSourceSpan ?? e.sourceSpan)); }
    visitIcuPlaceholder(e) { this.pieces.push(this.createPlaceholderPiece(e.name, e.sourceSpan, this.placeholderToMessage[e.name])); }
    createPlaceholderPiece(e, t, s) { return new zn(yi(e, !1), t, s); }
};
function cE(n) { let e = [], t = new jl(n.placeholderToMessage, e); return n.nodes.forEach(s => s.visit(t)), hE(e); }
function uE(n) { let e = n.nodes[0], t = n.nodes[n.nodes.length - 1]; return new L(e.sourceSpan.fullStart, t.sourceSpan.end, e.sourceSpan.fullStart, e.sourceSpan.details); }
function hE(n) { let e = [], t = []; n[0] instanceof zn && e.push(Co(n[0].sourceSpan.start)); for (let s = 0; s < n.length; s++) {
    let r = n[s];
    r instanceof gn ? e.push(r) : (t.push(r), n[s - 1] instanceof zn && e.push(Co(n[s - 1].sourceSpan.end)));
} return n[n.length - 1] instanceof zn && e.push(Co(n[n.length - 1].sourceSpan.end)), { messageParts: e, placeHolders: t }; }
function Co(n) { return new gn("", new L(n, n)); }
var ah = "ngI18nClosureMode", pE = "i18n_", fE = "I18N_EXP_", oh = "\uFFFD", dE = "MSG_";
function lh(n) { return `${dE}${n}`.toUpperCase(); }
function mE(n) { return new ce(n.name, void 0, qe, void 0, n.sourceSpan); }
function gE(n) { let e = n.relativeContextFilePath.replace(/[^A-Za-z0-9]/g, "_").toUpperCase() + "_", t = new Map, s = new Map, r = new Map, i = new Map; for (let l of n.units)
    for (let c of l.ops())
        if (c.kind === u.ExtractedAttribute && c.i18nContext !== null) {
            let h = t.get(c.i18nContext) ?? [];
            h.push(c), t.set(c.i18nContext, h);
        }
        else if (c.kind === u.I18nAttributes)
            s.set(c.target, c);
        else if (c.kind === u.I18nExpression && c.usage === er.I18nAttribute) {
            let h = r.get(c.target) ?? [];
            h.push(c), r.set(c.target, h);
        }
        else
            c.kind === u.I18nMessage && i.set(c.xref, c); let a = new Map, o = new Map; for (let l of n.units)
    for (let c of l.create)
        if (c.kind === u.I18nMessage) {
            if (c.messagePlaceholder === null) {
                let { mainVar: h, statements: p } = Cf(n, e, i, c);
                if (c.i18nBlock !== null) {
                    let g = n.addConst(h, p);
                    o.set(c.i18nBlock, g);
                }
                else {
                    n.constsInitializers.push(...p), a.set(c.i18nContext, h);
                    let g = t.get(c.i18nContext);
                    if (g !== void 0)
                        for (let v of g)
                            v.expression = h.clone();
                }
            }
            w.remove(c);
        } for (let l of n.units)
    for (let c of l.create)
        if (rn(c)) {
            let h = s.get(c.xref);
            if (h === void 0)
                continue;
            let p = r.get(c.xref);
            if (p === void 0)
                throw new Error("AssertionError: Could not find any i18n expressions associated with an I18nAttributes instruction");
            let g = new Set;
            p = p.filter(E => { let C = g.has(E.name); return g.add(E.name), !C; });
            let v = p.flatMap(E => { let C = a.get(E.context); if (C === void 0)
                throw new Error("AssertionError: Could not find i18n expression's value"); return [d(E.name), C]; });
            h.i18nAttributesConfig = n.addConst(new dt(v));
        } for (let l of n.units)
    for (let c of l.create)
        if (c.kind === u.I18nStart) {
            let h = o.get(c.root);
            if (h === void 0)
                throw new Error("AssertionError: Could not find corresponding i18n block index for an i18n message op; was an i18n message incorrectly assumed to correspond to an attribute?");
            c.messageIndex = h;
        } }
function Cf(n, e, t, s) { let r = [], i = new Map; for (let c of s.subMessages) {
    let h = t.get(c), { mainVar: p, statements: g } = Cf(n, e, t, h);
    r.push(...g);
    let v = i.get(h.messagePlaceholder) ?? [];
    v.push(p), i.set(h.messagePlaceholder, v);
} vE(s, i), s.params = new Map([...s.params.entries()].sort()); let a = D(n.pool.uniqueName(pE)), o = SE(n.pool, s.message.id, e, n.i18nUseExternalIds), l; if (s.needsPostprocessing || s.postprocessingParams.size > 0) {
    let c = Object.fromEntries([...s.postprocessingParams.entries()].sort()), h = Mc(c, !1), p = [];
    s.postprocessingParams.size > 0 && p.push(La(h, !0)), l = g => y(f.i18nPostprocess).callFn([g, ...p]);
} return r.push(...wE(s.message, a, o, s.params, l)), { mainVar: a, statements: r }; }
function vE(n, e) { for (let [t, s] of e)
    s.length === 1 ? n.params.set(t, s[0]) : (n.params.set(t, d(`${oh}${fE}${t}${oh}`)), n.postprocessingParams.set(t, R(s))); }
function wE(n, e, t, s, r) { let i = Object.fromEntries(s), a = [mE(e), Si(EE(), iE(e, n, t, i), lE(e, n, Mc(i, !1)))]; return r && a.push(new nt(e.set(r(e)))), a; }
function EE() { return Js(D(ah)).notIdentical(d("undefined", io)).and(D(ah)); }
function SE(n, e, t, s) { let r, i = t; if (s) {
    let a = lh("EXTERNAL_"), o = n.uniqueName(i);
    r = `${a}${On(e)}$$${o}`;
}
else {
    let a = lh(i);
    r = n.uniqueName(a);
} return D(r); }
function xE(n) { for (let e of n.units) {
    let t = null, s = null, r = new Map, i = new Map, a = new Map;
    for (let o of e.create)
        switch (o.kind) {
            case u.I18nStart:
                if (o.context === null)
                    throw Error("I18n op should have its context set.");
                t = o;
                break;
            case u.I18nEnd:
                t = null;
                break;
            case u.IcuStart:
                if (o.context === null)
                    throw Error("Icu op should have its context set.");
                s = o;
                break;
            case u.IcuEnd:
                s = null;
                break;
            case u.Text:
                if (t !== null)
                    if (r.set(o.xref, t), i.set(o.xref, s), o.icuPlaceholder !== null) {
                        let l = Qg(n.allocateXrefId(), o.icuPlaceholder, [o.initialValue]);
                        w.replace(o, l), a.set(o.xref, l);
                    }
                    else
                        w.remove(o);
                break;
        }
    for (let o of e.update)
        switch (o.kind) {
            case u.InterpolateText:
                if (!r.has(o.target))
                    continue;
                let l = r.get(o.target), c = i.get(o.target), h = a.get(o.target), p = c ? c.context : l.context, g = c ? ni.Postproccessing : ni.Creation, v = [];
                for (let E = 0; E < o.interpolation.expressions.length; E++) {
                    let C = o.interpolation.expressions[E];
                    v.push(Jp(p, l.xref, l.xref, l.handle, C, h?.xref ?? null, o.interpolation.i18nPlaceholders[E] ?? null, g, er.I18nText, "", C.sourceSpan ?? o.sourceSpan));
                }
                w.replaceWithMany(o, v), h !== void 0 && (h.strings = o.interpolation.strings);
                break;
        }
} }
function yE(n) { for (let e of n.units)
    for (let t of e.create)
        switch (t.kind) {
            case u.ElementStart:
            case u.ConditionalCreate:
            case u.ConditionalBranchCreate:
            case u.Template:
                if (!Array.isArray(t.localRefs))
                    throw new Error("AssertionError: expected localRefs to be an array still");
                if (t.numSlotsUsed += t.localRefs.length, t.localRefs.length > 0) {
                    let s = CE(t.localRefs);
                    t.localRefs = n.addConst(s);
                }
                else
                    t.localRefs = null;
                break;
        } }
function CE(n) { let e = []; for (let t of n)
    e.push(d(t.name), d(t.target)); return R(e); }
function AE(n) { for (let e of n.units) {
    let t = be.HTML;
    for (let s of e.create)
        s.kind === u.ElementStart && s.namespace !== t && (w.insertBefore(Ug(s.namespace), s), t = s.namespace);
} }
function _E(n) { let e = [], t = 0, s = 0, r = 0, i = 0, a = 0, o = null; for (; t < n.length;)
    switch (n.charCodeAt(t++)) {
        case 40:
            s++;
            break;
        case 41:
            s--;
            break;
        case 39:
            r === 0 ? r = 39 : r === 39 && n.charCodeAt(t - 1) !== 92 && (r = 0);
            break;
        case 34:
            r === 0 ? r = 34 : r === 34 && n.charCodeAt(t - 1) !== 92 && (r = 0);
            break;
        case 58:
            !o && s === 0 && r === 0 && (o = Af(n.substring(a, t - 1).trim()), i = t);
            break;
        case 59:
            if (o && i > 0 && s === 0 && r === 0) {
                let c = n.substring(i, t - 1).trim();
                e.push(o, c), a = t, i = 0, o = null;
            }
            break;
    } if (o && i) {
    let l = n.slice(i).trim();
    e.push(o, l);
} return e; }
function Af(n) { return n.replace(/[a-z][A-Z]/g, e => e.charAt(0) + "-" + e.charAt(1)).toLowerCase(); }
function kE(n) { let e = new Map; for (let t of n.units)
    for (let s of t.create)
        rn(s) && e.set(s.xref, s); for (let t of n.units)
    for (let s of t.create)
        if (s.kind === u.ExtractedAttribute && s.bindingKind === T.Attribute && Kp(s.expression)) {
            let r = e.get(s.target);
            if (r !== void 0 && (r.kind === u.Template || r.kind === u.ConditionalCreate || r.kind === u.ConditionalBranchCreate) && r.templateKind === Ue.Structural)
                continue;
            if (s.name === "style") {
                let i = _E(s.expression.value);
                for (let a = 0; a < i.length - 1; a += 2)
                    w.insertBefore(ct(s.target, T.StyleProperty, null, i[a], d(i[a + 1]), null, null, ne.STYLE), s);
                w.remove(s);
            }
            else if (s.name === "class") {
                let i = s.expression.value.trim().split(/\s+/g);
                for (let a of i)
                    w.insertBefore(ct(s.target, T.ClassName, null, a, null, null, null, ne.NONE), s);
                w.remove(s);
            }
        } }
function TE(n) { mr(n.root, n.componentName, { index: 0 }, n.compatibility === st.TemplateDefinitionBuilder); }
function mr(n, e, t, s) { n.fnName === null && (n.fnName = n.job.pool.uniqueName(On(`${e}_${n.job.fnSuffix}`), !1)); let r = new Map; for (let i of n.ops())
    switch (i.kind) {
        case u.Property:
        case u.DomProperty:
            i.bindingKind === T.LegacyAnimation && (i.name = "@" + i.name);
            break;
        case u.Animation:
            if (i.handlerFnName === null) {
                let h = i.name.replace(".", "");
                i.handlerFnName = `${n.fnName}_${h}_cb`, i.handlerFnName = On(i.handlerFnName);
            }
            break;
        case u.AnimationListener:
            if (i.handlerFnName !== null)
                break;
            if (!i.hostListener && i.targetSlot.slot === null)
                throw new Error("Expected a slot to be assigned");
            let a = i.name.replace(".", "");
            i.hostListener ? i.handlerFnName = `${e}_${a}_HostBindingHandler` : i.handlerFnName = `${n.fnName}_${i.tag.replace("-", "_")}_${a}_${i.targetSlot.slot}_listener`, i.handlerFnName = On(i.handlerFnName);
            break;
        case u.Listener:
            if (i.handlerFnName !== null)
                break;
            if (!i.hostListener && i.targetSlot.slot === null)
                throw new Error("Expected a slot to be assigned");
            let o = "";
            i.isLegacyAnimationListener && (i.name = `@${i.name}.${i.legacyAnimationPhase}`, o = "animation"), i.hostListener ? i.handlerFnName = `${e}_${o}${i.name}_HostBindingHandler` : i.handlerFnName = `${n.fnName}_${i.tag.replace("-", "_")}_${o}${i.name}_${i.targetSlot.slot}_listener`, i.handlerFnName = On(i.handlerFnName);
            break;
        case u.TwoWayListener:
            if (i.handlerFnName !== null)
                break;
            if (i.targetSlot.slot === null)
                throw new Error("Expected a slot to be assigned");
            i.handlerFnName = On(`${n.fnName}_${i.tag.replace("-", "_")}_${i.name}_${i.targetSlot.slot}_listener`);
            break;
        case u.Variable:
            r.set(i.xref, bE(n, i.variable, t));
            break;
        case u.RepeaterCreate:
            if (!(n instanceof ut))
                throw new Error("AssertionError: must be compiling a component");
            if (i.handle.slot === null)
                throw new Error("Expected slot to be assigned");
            if (i.emptyView !== null) {
                let h = n.job.views.get(i.emptyView);
                mr(h, `${e}_${i.functionNameSuffix}Empty_${i.handle.slot + 2}`, t, s);
            }
            mr(n.job.views.get(i.xref), `${e}_${i.functionNameSuffix}_${i.handle.slot + 1}`, t, s);
            break;
        case u.Projection:
            if (!(n instanceof ut))
                throw new Error("AssertionError: must be compiling a component");
            if (i.handle.slot === null)
                throw new Error("Expected slot to be assigned");
            if (i.fallbackView !== null) {
                let h = n.job.views.get(i.fallbackView);
                mr(h, `${e}_ProjectionFallback_${i.handle.slot}`, t, s);
            }
            break;
        case u.ConditionalCreate:
        case u.ConditionalBranchCreate:
        case u.Template:
            if (!(n instanceof ut))
                throw new Error("AssertionError: must be compiling a component");
            let l = n.job.views.get(i.xref);
            if (i.handle.slot === null)
                throw new Error("Expected slot to be assigned");
            let c = i.functionNameSuffix.length === 0 ? "" : `_${i.functionNameSuffix}`;
            mr(l, `${e}${c}_${i.handle.slot}`, t, s);
            break;
        case u.StyleProp:
            i.name = IE(i.name), s && (i.name = ch(i.name));
            break;
        case u.ClassProp:
            s && (i.name = ch(i.name));
            break;
    } for (let i of n.ops())
    ye(i, a => { if (!(!(a instanceof en) || a.name !== null)) {
        if (!r.has(a.xref))
            throw new Error(`Variable ${a.xref} not yet named`);
        a.name = r.get(a.xref);
    } }); }
function bE(n, e, t) { if (e.name === null)
    switch (e.kind) {
        case Se.Context:
            e.name = `ctx_r${t.index++}`;
            break;
        case Se.Identifier:
            if (n.job.compatibility === st.TemplateDefinitionBuilder) {
                let s = e.identifier === "ctx" ? "i" : "";
                e.name = `${e.identifier}_${s}r${++t.index}`;
            }
            else
                e.name = `${e.identifier}_i${t.index++}`;
            break;
        default:
            e.name = `_r${++t.index}`;
            break;
    } return e.name; }
function IE(n) { return n.startsWith("--") ? n : Af(n); }
function ch(n) { let e = n.indexOf("!important"); return e > -1 ? n.substring(0, e) : n; }
function NE(n) { for (let e of n.units) {
    for (let t of e.create)
        (t.kind === u.Listener || t.kind === u.Animation || t.kind === u.AnimationListener || t.kind === u.TwoWayListener) && uh(t.handlerOps);
    uh(e.update);
} }
function uh(n) { for (let e of n) {
    if (e.kind !== u.Statement || !(e.statement instanceof nt) || !(e.statement.expr instanceof Aa))
        continue;
    let t = e.statement.expr.steps, s = !0;
    for (let r = e.next; r.kind !== u.ListEnd && s; r = r.next)
        ye(r, (i, a) => { if (!Ht(i))
            return i; if (s && !(a & X.InChildOperation))
            switch (i.kind) {
                case I.NextContext:
                    i.steps += t, w.remove(e), s = !1;
                    break;
                case I.GetCurrentView:
                case I.Reference:
                case I.ContextLetReference:
                    s = !1;
                    break;
            } });
} }
var DE = "ng-container";
function PE(n) { for (let e of n.units) {
    let t = new Set;
    for (let s of e.create)
        s.kind === u.ElementStart && s.tag === DE && (s.kind = u.ContainerStart, t.add(s.xref)), s.kind === u.ElementEnd && t.has(s.xref) && (s.kind = u.ContainerEnd);
} }
function LE(n, e) { let t = n.get(e); if (t === void 0)
    throw new Error("All attributes should have an element-like target."); return t; }
function BE(n) { let e = new Map; for (let t of n.units)
    for (let s of t.create)
        rn(s) && e.set(s.xref, s); for (let t of n.units)
    for (let s of t.create)
        (s.kind === u.ElementStart || s.kind === u.ContainerStart) && s.nonBindable && w.insertAfter($g(s.xref), s), (s.kind === u.ElementEnd || s.kind === u.ContainerEnd) && LE(e, s.xref).nonBindable && w.insertBefore(Og(s.xref), s); }
function Xt(n) { return e => e.kind === n; }
function Sr(n, e) { return t => t.kind === n && e === t.expression instanceof oe; }
function ME(n) { return n.kind === u.Listener && !(n.hostListener && n.isLegacyAnimationListener) || n.kind === u.TwoWayListener || n.kind === u.Animation || n.kind === u.AnimationListener; }
function RE(n) { return (n.kind === u.Property || n.kind === u.TwoWayProperty) && !(n.expression instanceof oe); }
var FE = [{ test: n => n.kind === u.Listener && n.hostListener && n.isLegacyAnimationListener }, { test: ME }], $E = [{ test: Xt(u.StyleMap), transform: Va }, { test: Xt(u.ClassMap), transform: Va }, { test: Xt(u.StyleProp) }, { test: Xt(u.ClassProp) }, { test: Sr(u.Attribute, !0) }, { test: Sr(u.Property, !0) }, { test: RE }, { test: Sr(u.Attribute, !1) }], OE = [{ test: Sr(u.DomProperty, !0) }, { test: Sr(u.DomProperty, !1) }, { test: Xt(u.Attribute) }, { test: Xt(u.StyleMap), transform: Va }, { test: Xt(u.ClassMap), transform: Va }, { test: Xt(u.StyleProp) }, { test: Xt(u.ClassProp) }], hh = new Set([u.Listener, u.TwoWayListener, u.AnimationListener, u.StyleMap, u.ClassMap, u.StyleProp, u.ClassProp, u.Property, u.TwoWayProperty, u.DomProperty, u.Attribute, u.Animation]);
function VE(n) { for (let e of n.units) {
    ph(e.create, FE);
    let t = e.job.kind === _.Host ? OE : $E;
    ph(e.update, t);
} }
function ph(n, e) { let t = [], s = null; for (let r of n) {
    let i = si(r) ? r.target : null;
    (!hh.has(r.kind) || i !== s && s !== null && i !== null) && (w.insertBefore(fh(t, e), r), t = [], s = null), hh.has(r.kind) && (t.push(r), w.remove(r), s = i ?? s);
} n.push(fh(t, e)); }
function fh(n, e) { let t = Array.from(e, () => new Array); for (let s of n) {
    let r = e.findIndex(i => i.test(s));
    t[r].push(s);
} return t.flatMap((s, r) => { let i = e[r].transform; return i ? i(s) : s; }); }
function Va(n) { return n.slice(n.length - 1); }
function qE(n) { for (let e of n.units) {
    let t = zc(e);
    for (let s of e.ops())
        switch (s.kind) {
            case u.Binding:
                let r = HE(t, s.target);
                UE(s.name) && r.kind === u.Projection && w.remove(s);
                break;
        }
} }
function UE(n) { return n.toLowerCase() === "select"; }
function HE(n, e) { let t = n.get(e); if (t === void 0)
    throw new Error("All attributes should have an slottable target."); return t; }
function WE(n) { for (let e of n.units)
    jE(e); }
function jE(n) { for (let e of n.update)
    ye(e, (t, s) => { if (Ht(t) && t.kind === I.PipeBinding) {
        if (s & X.InChildOperation)
            throw new Error("AssertionError: pipe bindings should not appear in child expressions");
        if (n.job.compatibility) {
            if (e.target == null)
                throw new Error("AssertionError: expected slot handle to be assigned for pipe creation");
            zE(n, e.target, t);
        }
        else
            n.create.push(of(t.target, t.targetSlot, t.name));
    } }); }
function zE(n, e, t) { for (let s = n.create.head.next; s.kind !== u.ListEnd; s = s.next) {
    if (!nr(s) || s.xref !== e)
        continue;
    for (; s.next.kind === u.Pipe;)
        s = s.next;
    let r = of(t.target, t.targetSlot, t.name);
    w.insertBefore(r, s.next);
    return;
} throw new Error(`AssertionError: unable to find insertion point for pipe ${t.name}`); }
function GE(n) { for (let e of n.units)
    for (let t of e.update)
        fe(t, s => !(s instanceof us) || s.args.length <= 4 ? s : new ai(s.target, s.targetSlot, s.name, R(s.args), s.args.length), X.None); }
function XE(n) { _f(n.root, 0); }
function _f(n, e) { let t = null; for (let s of n.create)
    switch (s.kind) {
        case u.I18nStart:
            s.subTemplateIndex = e === 0 ? null : e, t = s;
            break;
        case u.I18nEnd:
            t.subTemplateIndex === null && (e = 0), t = null;
            break;
        case u.ConditionalCreate:
        case u.ConditionalBranchCreate:
        case u.Template:
            e = Ni(n.job.views.get(s.xref), t, s.i18nPlaceholder, e);
            break;
        case u.RepeaterCreate:
            let r = n.job.views.get(s.xref);
            e = Ni(r, t, s.i18nPlaceholder, e), s.emptyView !== null && (e = Ni(n.job.views.get(s.emptyView), t, s.emptyI18nPlaceholder, e));
            break;
        case u.Projection:
            s.fallbackView !== null && (e = Ni(n.job.views.get(s.fallbackView), t, s.fallbackViewI18nPlaceholder, e));
            break;
    } return e; }
function Ni(n, e, t, s) { if (t !== void 0) {
    if (e === null)
        throw Error("Expected template with i18n placeholder to be in an i18n block.");
    s++, YE(n, e);
} return _f(n, s); }
function YE(n, e) { if (n.create.head.next?.kind !== u.I18nStart) {
    let t = n.job.allocateXrefId();
    w.insertAfter(ho(t, e.message, e.root, null), n.create.head), w.insertBefore(po(t, null), n.create.tail);
} }
function QE(n) { for (let e of n.units)
    for (let t of e.ops())
        ye(t, s => { if (!(s instanceof cs) || s.body === null)
            return; let r = new zl(s.args.length); s.fn = n.pool.getSharedConstant(r, s.body), s.body = null; }); }
var zl = class extends ks {
    numArgs;
    constructor(e) { super(), this.numArgs = e; }
    keyOf(e) { return e instanceof Ws ? `param(${e.index})` : super.keyOf(e); }
    toSharedConstantDeclaration(e, t) { let s = []; for (let i = 0; i < this.numArgs; i++)
        s.push(new J("a" + i)); let r = k(t, i => i instanceof Ws ? D("a" + i.index) : i, X.None); return new ce(e, new xn(s, r), void 0, le.Final); }
};
function ZE(n) { for (let e of n.units)
    for (let t of e.update)
        fe(t, (s, r) => r & X.InChildOperation ? s : s instanceof dt ? JE(s) : s instanceof bt ? KE(s) : s, X.None); }
function JE(n) { let e = [], t = []; for (let s of n.entries)
    if (s.isConstant())
        e.push(s);
    else {
        let r = t.length;
        t.push(s), e.push(new Ws(r));
    } return new cs(R(e), t); }
function KE(n) { let e = [], t = []; for (let s of n.entries)
    if (s.value.isConstant())
        e.push(s);
    else {
        let r = t.length;
        t.push(s.value), e.push(new ts(s.key, new Ws(r), s.quoted));
    } return new cs(he(e), t); }
function eS(n, e, t, s, r) { return Bn(f.element, n, e, t, s, r); }
function tS(n, e, t, s, r) { return Bn(f.elementStart, n, e, t, s, r); }
function Bn(n, e, t, s, r, i) { let a = [d(e)]; return t !== null && a.push(d(t)), r !== null ? a.push(d(s), d(r)) : s !== null && a.push(d(s)), $(n, a, i); }
function kf(n, e, t, s, r, i, a, o, l) { let c = [d(e), t, d(s), d(r), d(i), d(a)]; for (o !== null && (c.push(d(o)), c.push(y(f.templateRefExtractor))); c[c.length - 1].isEquivalent(yn);)
    c.pop(); return $(n, c, l); }
function Gc(n, e, t, s, r) { let i = [d(e)]; return t instanceof oe ? i.push(sr(t, r)) : i.push(t), s !== null && i.push(s), $(n, i, r); }
function nS(n) { return $(f.elementEnd, [], n); }
function sS(n, e, t, s) { return Bn(f.elementContainerStart, n, null, e, t, s); }
function rS(n, e, t, s) { return Bn(f.elementContainer, n, null, e, t, s); }
function iS() { return $(f.elementContainerEnd, [], null); }
function aS(n, e, t, s, r, i, a, o) { return kf(f.templateCreate, n, e, t, s, r, i, a, o); }
function oS() { return $(f.disableBindings, [], null); }
function lS() { return $(f.enableBindings, [], null); }
function cS(n, e, t, s, r) { let i = [d(n), e]; return t !== null && i.push(y(t)), $(s ? f.syntheticHostListener : f.listener, i, r); }
function dh(n, e) { return y(f.twoWayBindingSet).callFn([n, e]); }
function uS(n, e, t) { return $(f.twoWayListener, [d(n), e], t); }
function hS(n, e) { return $(f.pipe, [d(n), d(e)], null); }
function pS() { return $(f.namespaceHTML, [], null); }
function fS() { return $(f.namespaceSVG, [], null); }
function dS() { return $(f.namespaceMathML, [], null); }
function mS(n, e) { return $(f.advance, n > 1 ? [d(n)] : [], e); }
function gS(n) { return y(f.reference).callFn([d(n)]); }
function vS(n) { return y(f.nextContext).callFn(n === 1 ? [] : [d(n)]); }
function wS() { return y(f.getCurrentView).callFn([]); }
function ES(n) { return y(f.restoreView).callFn([n]); }
function SS(n) { return y(f.resetView).callFn([n]); }
function xS(n, e, t) { let s = [d(n, null)]; return e !== "" && s.push(d(e)), $(f.text, s, t); }
function yS(n, e, t, s, r, i, a, o, l, c, h) { let p = [d(n), d(e), t ?? d(null), d(s), d(r), d(i), a ?? d(null), o ?? d(null), l ? y(f.deferEnableTimerScheduling) : d(null), d(h)], g; for (; (g = p[p.length - 1]) !== null && g instanceof Ee && g.value === null;)
    p.pop(); return $(f.defer, p, c); }
var CS = new Map([[Z.Idle, { none: f.deferOnIdle, prefetch: f.deferPrefetchOnIdle, hydrate: f.deferHydrateOnIdle }], [Z.Immediate, { none: f.deferOnImmediate, prefetch: f.deferPrefetchOnImmediate, hydrate: f.deferHydrateOnImmediate }], [Z.Timer, { none: f.deferOnTimer, prefetch: f.deferPrefetchOnTimer, hydrate: f.deferHydrateOnTimer }], [Z.Hover, { none: f.deferOnHover, prefetch: f.deferPrefetchOnHover, hydrate: f.deferHydrateOnHover }], [Z.Interaction, { none: f.deferOnInteraction, prefetch: f.deferPrefetchOnInteraction, hydrate: f.deferHydrateOnInteraction }], [Z.Viewport, { none: f.deferOnViewport, prefetch: f.deferPrefetchOnViewport, hydrate: f.deferHydrateOnViewport }], [Z.Never, { none: f.deferHydrateNever, prefetch: f.deferHydrateNever, hydrate: f.deferHydrateNever }]]);
function AS(n, e, t, s) { let r = CS.get(n)?.[t]; if (r === void 0)
    throw new Error(`Unable to determine instruction for trigger ${n}`); return $(r, e.map(i => d(i)), s); }
function _S(n) { return $(f.projectionDef, n ? [n] : [], null); }
function kS(n, e, t, s, r, i, a) { let o = [d(n)]; return (e !== 0 || t !== null || s !== null) && (o.push(d(e)), t !== null && o.push(t), s !== null && (t === null && o.push(d(null)), o.push(D(s), d(r), d(i)))), $(f.projection, o, a); }
function TS(n, e, t, s) { let r = [d(n), d(e)]; return t !== null && r.push(d(t)), $(f.i18nStart, r, s); }
function bS(n, e, t, s, r, i, a, o) { let l = [d(n), e, d(t), d(s), d(r), d(i)]; for (a !== null && (l.push(d(a)), l.push(y(f.templateRefExtractor))); l[l.length - 1].isEquivalent(yn);)
    l.pop(); return $(f.conditionalCreate, l, o); }
function IS(n, e, t, s, r, i, a, o) { let l = [d(n), e, d(t), d(s), d(r), d(i)]; for (a !== null && (l.push(d(a)), l.push(y(f.templateRefExtractor))); l[l.length - 1].isEquivalent(yn);)
    l.pop(); return $(f.conditionalBranchCreate, l, o); }
function NS(n, e, t, s, r, i, a, o, l, c, h, p, g, v) { let E = [d(n), D(e), d(t), d(s), d(r), d(i), a]; return (o || l !== null) && (E.push(d(o)), l !== null && (E.push(D(l), d(c), d(h)), (p !== null || g !== null) && E.push(d(p)), g !== null && E.push(d(g)))), $(f.repeaterCreate, E, v); }
function DS(n, e) { return $(f.repeater, [n], e); }
function PS(n, e, t) { return n === "prefetch" ? $(f.deferPrefetchWhen, [e], t) : n === "hydrate" ? $(f.deferHydrateWhen, [e], t) : $(f.deferWhen, [e], t); }
function LS(n, e) { return $(f.declareLet, [d(n)], e); }
function BS(n, e) { return y(f.storeLet).callFn([n], e); }
function MS(n) { return y(f.readContextLet).callFn([d(n)]); }
function RS(n, e, t, s) { let r = [d(n), d(e)]; return t && r.push(d(t)), $(f.i18n, r, s); }
function FS(n) { return $(f.i18nEnd, [], n); }
function $S(n, e) { let t = [d(n), d(e)]; return $(f.i18nAttributes, t, null); }
function OS(n, e, t) { return Gc(f.ariaProperty, n, e, null, t); }
function VS(n, e, t, s) { return Gc(f.property, n, e, t, s); }
function qS(n, e, t, s) { let r = [d(n), e]; return t !== null && r.push(t), $(f.twoWayProperty, r, s); }
function US(n, e, t, s, r) { let i = [d(n)]; return e instanceof oe ? i.push(sr(e, r)) : i.push(e), (t !== null || s !== null) && i.push(t ?? d(null)), s !== null && i.push(d(s)), $(f.attribute, i, null); }
function HS(n, e, t, s) { let r = [d(n)]; return e instanceof oe ? r.push(sr(e, s)) : r.push(e), t !== null && r.push(d(t)), $(f.styleProp, r, s); }
function WS(n, e, t) { return $(f.classProp, [d(n), e], t); }
function jS(n, e) { let t = n instanceof oe ? sr(n, e) : n; return $(f.styleMap, [t], e); }
function zS(n, e) { let t = n instanceof oe ? sr(n, e) : n; return $(f.classMap, [t], e); }
function GS(n, e, t, s, r) { return Bn(f.domElement, n, e, t, s, r); }
function XS(n, e, t, s, r) { return Bn(f.domElementStart, n, e, t, s, r); }
function YS(n) { return $(f.domElementEnd, [], n); }
function QS(n, e, t, s) { return Bn(f.domElementContainerStart, n, null, e, t, s); }
function ZS(n, e, t, s) { return Bn(f.domElementContainer, n, null, e, t, s); }
function JS() { return $(f.domElementContainerEnd, [], null); }
function KS(n, e, t, s) { let r = [d(n), e]; return t !== null && r.push(y(t)), $(f.domListener, r, s); }
function e2(n, e, t, s, r, i, a, o) { return kf(f.domTemplate, n, e, t, s, r, i, a, o); }
var mh = [f.pipeBind1, f.pipeBind2, f.pipeBind3, f.pipeBind4];
function t2(n, e, t) { if (t.length < 1 || t.length > mh.length)
    throw new Error("pipeBind() argument count out of bounds"); let s = mh[t.length - 1]; return y(s).callFn([d(n), d(e), ...t]); }
function n2(n, e, t) { return y(f.pipeBindV).callFn([d(n), d(e), t]); }
function s2(n, e, t) { let s = Tf(n, e); return v2(d2, [], s, [], t); }
function r2(n, e) { return $(f.i18nExp, [n], e); }
function i2(n, e) { return $(f.i18nApply, [d(n)], e); }
function a2(n, e, t, s) { return Gc(f.domProperty, n, e, t, s); }
function o2(n, e, t, s) { let r = [e]; t !== null && r.push(t); let i = n === "enter" ? f.animationEnter : f.animationLeave; return $(i, r, s); }
function l2(n, e, t, s) { let i = [e instanceof oe ? sr(e, s) : e]; t !== null && i.push(t); let a = n === "enter" ? f.animationEnter : f.animationLeave; return $(a, i, s); }
function c2(n, e, t, s) { let r = [e], i = n === "enter" ? f.animationEnterListener : f.animationLeaveListener; return $(i, r, s); }
function u2(n, e, t) { return $(f.syntheticHostProperty, [d(n), e], t); }
function h2(n, e, t) { return Xc(g2, [d(n), e], t, [], null); }
function p2(n, e) { return $(f.attachSourceLocations, [d(n), e], null); }
function Tf(n, e) { if (n.length < 1 || e.length !== n.length - 1)
    throw new Error("AssertionError: expected specific shape of args for strings/expressions in interpolation"); let t = []; if (e.length === 1 && n[0] === "" && n[1] === "")
    t.push(e[0]);
else {
    let s;
    for (s = 0; s < e.length; s++)
        t.push(d(n[s]), e[s]);
    t.push(d(n[s]));
} return t; }
function sr(n, e) { let t = Tf(n.strings, n.expressions); return Xc(m2, [], t, [], e); }
function $(n, e, t) { let s = y(n).callFn(e, t); return gt(new nt(s, t)); }
function f2(n, e, t) { let s = [n]; return e !== null && s.push(e), $(f.conditional, s, t); }
var d2 = { constant: [f.textInterpolate, f.textInterpolate1, f.textInterpolate2, f.textInterpolate3, f.textInterpolate4, f.textInterpolate5, f.textInterpolate6, f.textInterpolate7, f.textInterpolate8], variable: f.textInterpolateV, mapping: n => { if (n % 2 === 0)
        throw new Error("Expected odd number of arguments"); return (n - 1) / 2; } }, m2 = { constant: [f.interpolate, f.interpolate1, f.interpolate2, f.interpolate3, f.interpolate4, f.interpolate5, f.interpolate6, f.interpolate7, f.interpolate8], variable: f.interpolateV, mapping: n => { if (n % 2 === 0)
        throw new Error("Expected odd number of arguments"); return (n - 1) / 2; } }, g2 = { constant: [f.pureFunction0, f.pureFunction1, f.pureFunction2, f.pureFunction3, f.pureFunction4, f.pureFunction5, f.pureFunction6, f.pureFunction7, f.pureFunction8], variable: f.pureFunctionV, mapping: n => n };
function Xc(n, e, t, s, r) { let i = n.mapping(t.length), a = t.at(-1); if (s.length === 0 && t.length > 1 && a instanceof Ee && a.value === "" && t.pop(), i < n.constant.length)
    return y(n.constant[i]).callFn([...e, ...t, ...s], r); if (n.variable !== null)
    return y(n.variable).callFn([...e, R(t), ...s], r); throw new Error("AssertionError: unable to call variadic function"); }
function v2(n, e, t, s, r) { return gt(Xc(n, e, t, s, r).toStmt()); }
var w2 = new Map([["window", f.resolveWindow], ["document", f.resolveDocument], ["body", f.resolveBody]]), E2 = new Map([["class", "className"], ["for", "htmlFor"], ["formaction", "formAction"], ["innerHtml", "innerHTML"], ["readonly", "readOnly"], ["tabindex", "tabIndex"]]);
function S2(n) { for (let e of n.units)
    x2(e, e.create), Yc(e, e.update); }
function x2(n, e) { for (let t of e)
    switch (fe(t, bf, X.None), t.kind) {
        case u.Text:
            w.replace(t, xS(t.handle.slot, t.initialValue, t.sourceSpan));
            break;
        case u.ElementStart:
            w.replace(t, n.job.mode === Oe.DomOnly ? XS(t.handle.slot, t.tag, t.attributes, t.localRefs, t.startSourceSpan) : tS(t.handle.slot, t.tag, t.attributes, t.localRefs, t.startSourceSpan));
            break;
        case u.Element:
            w.replace(t, n.job.mode === Oe.DomOnly ? GS(t.handle.slot, t.tag, t.attributes, t.localRefs, t.wholeSourceSpan) : eS(t.handle.slot, t.tag, t.attributes, t.localRefs, t.wholeSourceSpan));
            break;
        case u.ElementEnd:
            w.replace(t, n.job.mode === Oe.DomOnly ? YS(t.sourceSpan) : nS(t.sourceSpan));
            break;
        case u.ContainerStart:
            w.replace(t, n.job.mode === Oe.DomOnly ? QS(t.handle.slot, t.attributes, t.localRefs, t.startSourceSpan) : sS(t.handle.slot, t.attributes, t.localRefs, t.startSourceSpan));
            break;
        case u.Container:
            w.replace(t, n.job.mode === Oe.DomOnly ? ZS(t.handle.slot, t.attributes, t.localRefs, t.wholeSourceSpan) : rS(t.handle.slot, t.attributes, t.localRefs, t.wholeSourceSpan));
            break;
        case u.ContainerEnd:
            w.replace(t, n.job.mode === Oe.DomOnly ? JS() : iS());
            break;
        case u.I18nStart:
            w.replace(t, TS(t.handle.slot, t.messageIndex, t.subTemplateIndex, t.sourceSpan));
            break;
        case u.I18nEnd:
            w.replace(t, FS(t.sourceSpan));
            break;
        case u.I18n:
            w.replace(t, RS(t.handle.slot, t.messageIndex, t.subTemplateIndex, t.sourceSpan));
            break;
        case u.I18nAttributes:
            if (t.i18nAttributesConfig === null)
                throw new Error("AssertionError: i18nAttributesConfig was not set");
            w.replace(t, $S(t.handle.slot, t.i18nAttributesConfig));
            break;
        case u.Template:
            if (!(n instanceof ut))
                throw new Error("AssertionError: must be compiling a component");
            if (Array.isArray(t.localRefs))
                throw new Error("AssertionError: local refs array should have been extracted into a constant");
            let s = n.job.views.get(t.xref);
            w.replace(t, t.templateKind === Ue.Block || n.job.mode === Oe.DomOnly ? e2(t.handle.slot, D(s.fnName), s.decls, s.vars, t.tag, t.attributes, t.localRefs, t.startSourceSpan) : aS(t.handle.slot, D(s.fnName), s.decls, s.vars, t.tag, t.attributes, t.localRefs, t.startSourceSpan));
            break;
        case u.DisableBindings:
            w.replace(t, oS());
            break;
        case u.EnableBindings:
            w.replace(t, lS());
            break;
        case u.Pipe:
            w.replace(t, hS(t.handle.slot, t.name));
            break;
        case u.DeclareLet:
            w.replace(t, LS(t.handle.slot, t.sourceSpan));
            break;
        case u.AnimationString:
            w.replace(t, l2(t.animationKind, t.expression, t.sanitizer, t.sourceSpan));
            break;
        case u.Animation:
            let r = Di(n, t.handlerFnName, t.handlerOps, !1);
            w.replace(t, o2(t.animationKind, r, t.sanitizer, t.sourceSpan));
            break;
        case u.AnimationListener:
            let i = Di(n, t.handlerFnName, t.handlerOps, t.consumesDollarEvent);
            w.replace(t, c2(t.animationKind, i, null, t.sourceSpan));
            break;
        case u.Listener:
            let a = Di(n, t.handlerFnName, t.handlerOps, t.consumesDollarEvent), o = t.eventTarget ? w2.get(t.eventTarget) : null;
            if (o === void 0)
                throw new Error(`Unexpected global target '${t.eventTarget}' defined for '${t.name}' event. Supported list of global targets: window,document,body.`);
            w.replace(t, n.job.mode === Oe.DomOnly && !t.hostListener && !t.isLegacyAnimationListener ? KS(t.name, a, o, t.sourceSpan) : cS(t.name, a, o, t.hostListener && t.isLegacyAnimationListener, t.sourceSpan));
            break;
        case u.TwoWayListener:
            w.replace(t, uS(t.name, Di(n, t.handlerFnName, t.handlerOps, !0), t.sourceSpan));
            break;
        case u.Variable:
            if (t.variable.name === null)
                throw new Error(`AssertionError: unnamed variable ${t.xref}`);
            w.replace(t, gt(new ce(t.variable.name, t.initializer, void 0, le.Final)));
            break;
        case u.Namespace:
            switch (t.active) {
                case be.HTML:
                    w.replace(t, pS());
                    break;
                case be.SVG:
                    w.replace(t, fS());
                    break;
                case be.Math:
                    w.replace(t, dS());
                    break;
            }
            break;
        case u.Defer:
            let l = !!t.loadingMinimumTime || !!t.loadingAfterTime || !!t.placeholderMinimumTime;
            w.replace(t, yS(t.handle.slot, t.mainSlot.slot, t.resolverFn, t.loadingSlot?.slot ?? null, t.placeholderSlot?.slot ?? null, t.errorSlot?.slot ?? null, t.loadingConfig, t.placeholderConfig, l, t.sourceSpan, t.flags));
            break;
        case u.DeferOn:
            let c = [];
            switch (t.trigger.kind) {
                case Z.Never:
                case Z.Idle:
                case Z.Immediate: break;
                case Z.Timer:
                    c = [t.trigger.delay];
                    break;
                case Z.Interaction:
                case Z.Hover:
                case Z.Viewport:
                    t.modifier === "hydrate" ? c = [] : (c = [t.trigger.targetSlot?.slot ?? null], t.trigger.targetSlotViewSteps !== 0 && c.push(t.trigger.targetSlotViewSteps));
                    break;
                default: throw new Error(`AssertionError: Unsupported reification of defer trigger kind ${t.trigger.kind}`);
            }
            w.replace(t, AS(t.trigger.kind, c, t.modifier, t.sourceSpan));
            break;
        case u.ProjectionDef:
            w.replace(t, _S(t.def));
            break;
        case u.Projection:
            if (t.handle.slot === null)
                throw new Error("No slot was assigned for project instruction");
            let h = null, p = null, g = null;
            if (t.fallbackView !== null) {
                if (!(n instanceof ut))
                    throw new Error("AssertionError: must be compiling a component");
                let V = n.job.views.get(t.fallbackView);
                if (V === void 0)
                    throw new Error("AssertionError: projection had fallback view xref, but fallback view was not found");
                if (V.fnName === null || V.decls === null || V.vars === null)
                    throw new Error("AssertionError: expected projection fallback view to have been named and counted");
                h = V.fnName, p = V.decls, g = V.vars;
            }
            w.replace(t, kS(t.handle.slot, t.projectionSlotIndex, t.attributes, h, p, g, t.sourceSpan));
            break;
        case u.ConditionalCreate:
            if (!(n instanceof ut))
                throw new Error("AssertionError: must be compiling a component");
            if (Array.isArray(t.localRefs))
                throw new Error("AssertionError: local refs array should have been extracted into a constant");
            let v = n.job.views.get(t.xref);
            w.replace(t, bS(t.handle.slot, D(v.fnName), v.decls, v.vars, t.tag, t.attributes, t.localRefs, t.startSourceSpan));
            break;
        case u.ConditionalBranchCreate:
            if (!(n instanceof ut))
                throw new Error("AssertionError: must be compiling a component");
            if (Array.isArray(t.localRefs))
                throw new Error("AssertionError: local refs array should have been extracted into a constant");
            let E = n.job.views.get(t.xref);
            w.replace(t, IS(t.handle.slot, D(E.fnName), E.decls, E.vars, t.tag, t.attributes, t.localRefs, t.startSourceSpan));
            break;
        case u.RepeaterCreate:
            if (t.handle.slot === null)
                throw new Error("No slot was assigned for repeater instruction");
            if (!(n instanceof ut))
                throw new Error("AssertionError: must be compiling a component");
            let C = n.job.views.get(t.xref);
            if (C.fnName === null)
                throw new Error("AssertionError: expected repeater primary view to have been named");
            let b = null, A = null, F = null;
            if (t.emptyView !== null) {
                let V = n.job.views.get(t.emptyView);
                if (V === void 0)
                    throw new Error("AssertionError: repeater had empty view xref, but empty view was not found");
                if (V.fnName === null || V.decls === null || V.vars === null)
                    throw new Error("AssertionError: expected repeater empty view to have been named and counted");
                b = V.fnName, A = V.decls, F = V.vars;
            }
            w.replace(t, NS(t.handle.slot, C.fnName, t.decls, t.vars, t.tag, t.attributes, C2(n, t), t.usesComponentInstance, b, A, F, t.emptyTag, t.emptyAttributes, t.wholeSourceSpan));
            break;
        case u.SourceLocation:
            let ee = R(t.locations.map(({ targetSlot: V, offset: de, line: rr, column: dd }) => { if (V.slot === null)
                throw new Error("No slot was assigned for source location"); return R([d(V.slot), d(de), d(rr), d(dd)]); }));
            w.replace(t, p2(t.templatePath, ee));
            break;
        case u.Statement: break;
        default: throw new Error(`AssertionError: Unsupported reification of create op ${u[t.kind]}`);
    } }
function Yc(n, e) { for (let t of e)
    switch (fe(t, bf, X.None), t.kind) {
        case u.Advance:
            w.replace(t, mS(t.delta, t.sourceSpan));
            break;
        case u.Property:
            w.replace(t, n.job.mode === Oe.DomOnly && t.bindingKind !== T.LegacyAnimation && t.bindingKind !== T.Animation ? gh(t) : y2(t));
            break;
        case u.TwoWayProperty:
            w.replace(t, qS(t.name, t.expression, t.sanitizer, t.sourceSpan));
            break;
        case u.StyleProp:
            w.replace(t, HS(t.name, t.expression, t.unit, t.sourceSpan));
            break;
        case u.ClassProp:
            w.replace(t, WS(t.name, t.expression, t.sourceSpan));
            break;
        case u.StyleMap:
            w.replace(t, jS(t.expression, t.sourceSpan));
            break;
        case u.ClassMap:
            w.replace(t, zS(t.expression, t.sourceSpan));
            break;
        case u.I18nExpression:
            w.replace(t, r2(t.expression, t.sourceSpan));
            break;
        case u.I18nApply:
            w.replace(t, i2(t.handle.slot, t.sourceSpan));
            break;
        case u.InterpolateText:
            w.replace(t, s2(t.interpolation.strings, t.interpolation.expressions, t.sourceSpan));
            break;
        case u.Attribute:
            w.replace(t, US(t.name, t.expression, t.sanitizer, t.namespace, t.sourceSpan));
            break;
        case u.DomProperty:
            if (t.expression instanceof oe)
                throw new Error("not yet handled");
            t.bindingKind === T.LegacyAnimation || t.bindingKind === T.Animation ? w.replace(t, u2(t.name, t.expression, t.sourceSpan)) : w.replace(t, gh(t));
            break;
        case u.Variable:
            if (t.variable.name === null)
                throw new Error(`AssertionError: unnamed variable ${t.xref}`);
            w.replace(t, gt(new ce(t.variable.name, t.initializer, void 0, le.Final)));
            break;
        case u.Conditional:
            if (t.processed === null)
                throw new Error("Conditional test was not set.");
            w.replace(t, f2(t.processed, t.contextValue, t.sourceSpan));
            break;
        case u.Repeater:
            w.replace(t, DS(t.collection, t.sourceSpan));
            break;
        case u.DeferWhen:
            w.replace(t, PS(t.modifier, t.expr, t.sourceSpan));
            break;
        case u.StoreLet: throw new Error(`AssertionError: unexpected storeLet ${t.declaredName}`);
        case u.Statement: break;
        default: throw new Error(`AssertionError: Unsupported reification of update op ${u[t.kind]}`);
    } }
function gh(n) { return a2(E2.get(n.name) ?? n.name, n.expression, n.sanitizer, n.sourceSpan); }
function y2(n) { return uf(n.name) ? OS(n.name, n.expression, n.sourceSpan) : VS(n.name, n.expression, n.sanitizer, n.sourceSpan); }
function bf(n) { if (!Ht(n))
    return n; switch (n.kind) {
    case I.NextContext: return vS(n.steps);
    case I.Reference: return gS(n.targetSlot.slot + 1 + n.offset);
    case I.LexicalRead: throw new Error(`AssertionError: unresolved LexicalRead of ${n.name}`);
    case I.TwoWayBindingSet: throw new Error("AssertionError: unresolved TwoWayBindingSet");
    case I.RestoreView:
        if (typeof n.view == "number")
            throw new Error("AssertionError: unresolved RestoreView");
        return ES(n.view);
    case I.ResetView: return SS(n.expr);
    case I.GetCurrentView: return wS();
    case I.ReadVariable:
        if (n.name === null)
            throw new Error(`Read of unnamed variable ${n.xref}`);
        return D(n.name);
    case I.ReadTemporaryExpr:
        if (n.name === null)
            throw new Error(`Read of unnamed temporary ${n.xref}`);
        return D(n.name);
    case I.AssignTemporaryExpr:
        if (n.name === null)
            throw new Error(`Assign of unnamed temporary ${n.xref}`);
        return D(n.name).set(n.expr);
    case I.PureFunctionExpr:
        if (n.fn === null)
            throw new Error("AssertionError: expected PureFunctions to have been extracted");
        return h2(n.varOffset, n.fn, n.args);
    case I.PureFunctionParameterExpr: throw new Error("AssertionError: expected PureFunctionParameterExpr to have been extracted");
    case I.PipeBinding: return t2(n.targetSlot.slot, n.varOffset, n.args);
    case I.PipeBindingVariadic: return n2(n.targetSlot.slot, n.varOffset, n.args);
    case I.SlotLiteralExpr: return d(n.slot.slot);
    case I.ContextLetReference: return MS(n.targetSlot.slot);
    case I.StoreLet: return BS(n.value, n.sourceSpan);
    case I.TrackContext: return D("this");
    default: throw new Error(`AssertionError: Unsupported reification of ir.Expression kind: ${I[n.kind]}`);
} }
function Di(n, e, t, s) { Yc(n, t); let r = []; for (let a of t) {
    if (a.kind !== u.Statement)
        throw new Error(`AssertionError: expected reified statements, but found op ${u[a.kind]}`);
    r.push(a.statement);
} let i = []; return s && i.push(new J("$event")), sn(i, r, void 0, void 0, e); }
function C2(n, e) { if (e.trackByFn !== null)
    return e.trackByFn; let t = [new J("$index"), new J("$item")], s; if (e.trackByOps === null)
    s = e.usesComponentInstance ? sn(t, [new xe(e.track)]) : ie(t, e.track);
else {
    Yc(n, e.trackByOps);
    let r = [];
    for (let i of e.trackByOps) {
        if (i.kind !== u.Statement)
            throw new Error(`AssertionError: expected reified statements, but found op ${u[i.kind]}`);
        r.push(i.statement);
    }
    s = e.usesComponentInstance || r.length !== 1 || !(r[0] instanceof xe) ? sn(t, r) : ie(t, r[0].value);
} return e.trackByFn = n.job.pool.getSharedFunctionReference(s, "_forTrack"), e.trackByFn; }
function A2(n) { for (let e of n.units)
    for (let t of e.update)
        switch (t.kind) {
            case u.Attribute:
            case u.Binding:
            case u.ClassProp:
            case u.ClassMap:
            case u.Property:
            case u.StyleProp:
            case u.StyleMap:
                t.expression instanceof oi && w.remove(t);
                break;
        } }
function _2(n) { for (let e of n.units)
    for (let t of e.create)
        switch (t.kind) {
            case u.I18nContext:
                w.remove(t);
                break;
            case u.I18nStart:
                t.context = null;
                break;
        } }
function k2(n) { for (let e of n.units)
    for (let t of e.update) {
        if (t.kind !== u.Variable || t.variable.kind !== Se.Identifier || !(t.initializer instanceof ri))
            continue;
        let s = t.variable.identifier, r = t;
        for (; r && r.kind !== u.ListEnd;)
            fe(r, i => i instanceof Ae && i.name === s ? d(void 0) : i, X.None), r = r.prev;
    } }
function T2(n) { for (let e of n.units) {
    let t = new Set;
    for (let s of e.update)
        switch (s.kind) {
            case u.I18nExpression: t.add(s.i18nOwner);
        }
    for (let s of e.create)
        switch (s.kind) {
            case u.I18nAttributes:
                if (t.has(s.xref))
                    continue;
                w.remove(s);
        }
} }
function b2(n) { for (let e of n.units)
    qa(e, e.create), qa(e, e.update); }
function qa(n, e) { let t = new Map; t.set(n.xref, D("ctx")); for (let s of e)
    switch (s.kind) {
        case u.Variable:
            switch (s.variable.kind) {
                case Se.Context:
                    t.set(s.variable.view, new en(s.xref));
                    break;
            }
            break;
        case u.Animation:
        case u.AnimationListener:
        case u.Listener:
        case u.TwoWayListener:
            qa(n, s.handlerOps);
            break;
        case u.RepeaterCreate:
            s.trackByOps !== null && qa(n, s.trackByOps);
            break;
    } n === n.job.root && t.set(n.xref, D("ctx")); for (let s of e)
    fe(s, r => { if (r instanceof bn) {
        if (!t.has(r.view))
            throw new Error(`No context found for reference to view ${r.view} from view ${n.xref}`);
        return t.get(r.view);
    }
    else
        return r; }, X.None); }
function I2(n) { for (let e of n.units)
    for (let t of e.create)
        if (t.kind === u.Defer) {
            if (t.resolverFn !== null)
                continue;
            if (t.ownResolverFn !== null) {
                if (t.handle.slot === null)
                    throw new Error("AssertionError: slot must be assigned before extracting defer deps functions");
                let s = e.fnName?.replace("_Template", "");
                t.resolverFn = n.pool.getSharedFunctionReference(t.ownResolverFn, `${s}_Defer_${t.handle.slot}_DepsFn`, !1);
            }
        } }
function N2(n) { for (let e of n.units)
    vh(e.create), vh(e.update); }
function vh(n) { for (let e of n)
    (e.kind === u.Listener || e.kind === u.TwoWayListener || e.kind === u.AnimationListener) && fe(e, t => t instanceof Ae && t.name === "$event" ? ((e.kind === u.Listener || e.kind === u.AnimationListener) && (e.consumesDollarEvent = !0), new tt(t.name)) : t, X.InChildOperation); }
function D2(n) { let e = new Map, t = new Map; for (let s of n.units)
    for (let r of s.create)
        switch (r.kind) {
            case u.I18nContext:
                e.set(r.xref, r);
                break;
            case u.ElementStart:
                t.set(r.xref, r);
                break;
        } Dt(n, n.root, e, t); }
function Dt(n, e, t, s, r) { let i = null, a = new Map; for (let o of e.create)
    switch (o.kind) {
        case u.I18nStart:
            if (!o.context)
                throw Error("Could not find i18n context for i18n op");
            i = { i18nBlock: o, i18nContext: t.get(o.context) };
            break;
        case u.I18nEnd:
            i = null;
            break;
        case u.ElementStart:
            if (o.i18nPlaceholder !== void 0) {
                if (i === null)
                    throw Error("i18n tag placeholder should only occur inside an i18n block");
                wh(o, i.i18nContext, i.i18nBlock, r), r && o.i18nPlaceholder.closeName && a.set(o.xref, r), r = void 0;
            }
            break;
        case u.ElementEnd:
            let l = s.get(o.xref);
            if (l && l.i18nPlaceholder !== void 0) {
                if (i === null)
                    throw Error("AssertionError: i18n tag placeholder should only occur inside an i18n block");
                Eh(l, i.i18nContext, i.i18nBlock, a.get(o.xref)), a.delete(o.xref);
            }
            break;
        case u.Projection:
            if (o.i18nPlaceholder !== void 0) {
                if (i === null)
                    throw Error("i18n tag placeholder should only occur inside an i18n block");
                wh(o, i.i18nContext, i.i18nBlock, r), Eh(o, i.i18nContext, i.i18nBlock, r), r = void 0;
            }
            if (o.fallbackView !== null) {
                let g = n.views.get(o.fallbackView);
                if (o.fallbackViewI18nPlaceholder === void 0)
                    Dt(n, g, t, s);
                else {
                    if (i === null)
                        throw Error("i18n tag placeholder should only occur inside an i18n block");
                    Pi(n, g, o.handle.slot, o.fallbackViewI18nPlaceholder, i.i18nContext, i.i18nBlock, r), Dt(n, g, t, s), Li(n, g, o.handle.slot, o.fallbackViewI18nPlaceholder, i.i18nContext, i.i18nBlock, r), r = void 0;
                }
            }
            break;
        case u.ConditionalCreate:
        case u.ConditionalBranchCreate:
        case u.Template:
            let c = n.views.get(o.xref);
            if (o.i18nPlaceholder === void 0)
                Dt(n, c, t, s);
            else {
                if (i === null)
                    throw Error("i18n tag placeholder should only occur inside an i18n block");
                o.templateKind === Ue.Structural ? Dt(n, c, t, s, o) : (Pi(n, c, o.handle.slot, o.i18nPlaceholder, i.i18nContext, i.i18nBlock, r), Dt(n, c, t, s), Li(n, c, o.handle.slot, o.i18nPlaceholder, i.i18nContext, i.i18nBlock, r), r = void 0);
            }
            break;
        case u.RepeaterCreate:
            if (r !== void 0)
                throw Error("AssertionError: Unexpected structural directive associated with @for block");
            let h = o.handle.slot + 1, p = n.views.get(o.xref);
            if (o.i18nPlaceholder === void 0)
                Dt(n, p, t, s);
            else {
                if (i === null)
                    throw Error("i18n tag placeholder should only occur inside an i18n block");
                Pi(n, p, h, o.i18nPlaceholder, i.i18nContext, i.i18nBlock, r), Dt(n, p, t, s), Li(n, p, h, o.i18nPlaceholder, i.i18nContext, i.i18nBlock, r), r = void 0;
            }
            if (o.emptyView !== null) {
                let g = o.handle.slot + 2, v = n.views.get(o.emptyView);
                if (o.emptyI18nPlaceholder === void 0)
                    Dt(n, v, t, s);
                else {
                    if (i === null)
                        throw Error("i18n tag placeholder should only occur inside an i18n block");
                    Pi(n, v, g, o.emptyI18nPlaceholder, i.i18nContext, i.i18nBlock, r), Dt(n, v, t, s), Li(n, v, g, o.emptyI18nPlaceholder, i.i18nContext, i.i18nBlock, r), r = void 0;
                }
            }
            break;
    } }
function wh(n, e, t, s) { let { startName: r, closeName: i } = n.i18nPlaceholder, a = te.ElementTag | te.OpenTag, o = n.handle.slot; s !== void 0 && (a |= te.TemplateTag, o = { element: o, template: s.handle.slot }), i || (a |= te.CloseTag), Zs(e.params, r, o, t.subTemplateIndex, a); }
function Eh(n, e, t, s) { let { closeName: r } = n.i18nPlaceholder; if (r) {
    let i = te.ElementTag | te.CloseTag, a = n.handle.slot;
    s !== void 0 && (i |= te.TemplateTag, a = { element: a, template: s.handle.slot }), Zs(e.params, r, a, t.subTemplateIndex, i);
} }
function Pi(n, e, t, s, r, i, a) { let { startName: o, closeName: l } = s, c = te.TemplateTag | te.OpenTag; l || (c |= te.CloseTag), a !== void 0 && Zs(r.params, o, a.handle.slot, i.subTemplateIndex, c), Zs(r.params, o, t, If(n, i, e), c); }
function Li(n, e, t, s, r, i, a) { let { closeName: o } = s, l = te.TemplateTag | te.CloseTag; o && (Zs(r.params, o, t, If(n, i, e), l), a !== void 0 && Zs(r.params, o, a.handle.slot, i.subTemplateIndex, l)); }
function If(n, e, t) { for (let s of t.create)
    if (s.kind === u.I18nStart)
        return s.subTemplateIndex; return e.subTemplateIndex; }
function Zs(n, e, t, s, r) { let i = n.get(e) ?? []; i.push({ value: t, subTemplateIndex: s, flags: r }), n.set(e, i); }
function P2(n) { let e = new Map, t = new Map, s = new Map; for (let a of n.units)
    for (let o of a.create)
        switch (o.kind) {
            case u.I18nStart:
                e.set(o.xref, o.subTemplateIndex);
                break;
            case u.I18nContext:
                t.set(o.xref, o);
                break;
            case u.IcuPlaceholder:
                s.set(o.xref, o);
                break;
        } let r = new Map, i = a => a.usage === er.I18nText ? a.i18nOwner : a.context; for (let a of n.units)
    for (let o of a.update)
        if (o.kind === u.I18nExpression) {
            let l = r.get(i(o)) || 0, c = e.get(o.i18nOwner) ?? null, h = { value: l, subTemplateIndex: c, flags: te.ExpressionIndex };
            L2(o, h, t, s), r.set(i(o), l + 1);
        } }
function L2(n, e, t, s) { if (n.i18nPlaceholder !== null) {
    let r = t.get(n.context), i = n.resolutionTime === ni.Creation ? r.params : r.postprocessingParams, a = i.get(n.i18nPlaceholder) || [];
    a.push(e), i.set(n.i18nPlaceholder, a);
} n.icuPlaceholder !== null && s.get(n.icuPlaceholder)?.expressionPlaceholders.push(e); }
function B2(n) { for (let e of n.units)
    Ua(e, e.create, null), Ua(e, e.update, null); }
function Ua(n, e, t) { let s = new Map, r = new Map; for (let i of e)
    switch (i.kind) {
        case u.Variable:
            switch (i.variable.kind) {
                case Se.Identifier:
                    if (i.variable.local) {
                        if (r.has(i.variable.identifier))
                            continue;
                        r.set(i.variable.identifier, i.xref);
                    }
                    else if (s.has(i.variable.identifier))
                        continue;
                    s.set(i.variable.identifier, i.xref);
                    break;
                case Se.Alias:
                    if (s.has(i.variable.identifier))
                        continue;
                    s.set(i.variable.identifier, i.xref);
                    break;
                case Se.SavedView:
                    t = { view: i.variable.view, variable: i.xref };
                    break;
            }
            break;
        case u.Animation:
        case u.AnimationListener:
        case u.Listener:
        case u.TwoWayListener:
            Ua(n, i.handlerOps, t);
            break;
        case u.RepeaterCreate:
            i.trackByOps !== null && Ua(n, i.trackByOps, t);
            break;
    } for (let i of e)
    i.kind == u.Listener || i.kind === u.TwoWayListener || i.kind === u.Animation || i.kind === u.AnimationListener || fe(i, a => { if (a instanceof Ae)
        return r.has(a.name) ? new en(r.get(a.name)) : s.has(a.name) ? new en(s.get(a.name)) : new We(new bn(n.job.root.xref), a.name); if (a instanceof _a && typeof a.view == "number") {
        if (t === null || t.view !== a.view)
            throw new Error(`AssertionError: no saved view ${a.view} from view ${n.xref}`);
        return a.view = new en(t.variable), a;
    }
    else
        return a; }, X.None); for (let i of e)
    ye(i, a => { if (a instanceof Ae)
        throw new Error(`AssertionError: no lexical reads should remain, but found read of ${a.name}`); }); }
var M2 = new Map([[ne.HTML, f.sanitizeHtml], [ne.RESOURCE_URL, f.sanitizeResourceUrl], [ne.SCRIPT, f.sanitizeScript], [ne.STYLE, f.sanitizeStyle], [ne.URL, f.sanitizeUrl]]), R2 = new Map([[ne.HTML, f.trustConstantHtml], [ne.RESOURCE_URL, f.trustConstantResourceUrl]]);
function F2(n) { for (let e of n.units) {
    let t = zc(e);
    if (n.kind !== _.Host) {
        for (let s of e.create)
            if (s.kind === u.ExtractedAttribute) {
                let r = R2.get(Sh(s.securityContext)) ?? null;
                s.trustedValueFn = r !== null ? y(r) : null;
            }
    }
    for (let s of e.update)
        switch (s.kind) {
            case u.Property:
            case u.Attribute:
            case u.DomProperty:
                let r = null;
                if (Array.isArray(s.securityContext) && s.securityContext.length === 2 && s.securityContext.indexOf(ne.URL) > -1 && s.securityContext.indexOf(ne.RESOURCE_URL) > -1 ? r = f.sanitizeUrlOrResourceUrl : r = M2.get(Sh(s.securityContext)) ?? null, s.sanitizer = r !== null ? y(r) : null, s.sanitizer === null) {
                    let i = !1;
                    if (n.kind === _.Host || s.kind === u.DomProperty)
                        i = !0;
                    else {
                        let a = t.get(s.target);
                        if (a === void 0 || !rn(a))
                            throw Error("Property should have an element-like owner");
                        i = $2(a);
                    }
                    i && $w(s.name) && (s.sanitizer = y(f.validateIframeAttribute));
                }
                break;
        }
} }
function $2(n) { return n.kind === u.ElementStart && n.tag?.toLowerCase() === "iframe"; }
function Sh(n) { if (Array.isArray(n)) {
    if (n.length > 1)
        throw Error("AssertionError: Ambiguous security context");
    return n[0] || ne.NONE;
} return n; }
function O2(n) { for (let e of n.units) {
    e.create.prepend([dn(e.job.allocateXrefId(), { kind: Se.SavedView, name: null, view: e.xref }, new Al, lt.None)]);
    for (let t of e.create) {
        if (t.kind !== u.Listener && t.kind !== u.TwoWayListener && t.kind !== u.Animation && t.kind !== u.AnimationListener)
            continue;
        let s = e !== n.root;
        if (!s)
            for (let r of t.handlerOps)
                ye(r, i => { (i instanceof Ca || i instanceof ii) && (s = !0); });
        s && V2(e, t);
    }
} }
function V2(n, e) { e.handlerOps.prepend([dn(n.job.allocateXrefId(), { kind: Se.Context, name: null, view: n.xref }, new _a(n.xref), lt.None)]); for (let t of e.handlerOps)
    t.kind === u.Statement && t.statement instanceof xe && (t.statement.value = new _l(t.statement.value)); }
function q2(n) { let e = new Map; for (let t of n.units) {
    let s = 0;
    for (let r of t.create)
        nr(r) && (r.handle.slot = s, e.set(r.xref, r.handle.slot), s += r.numSlotsUsed);
    t.decls = s;
} for (let t of n.units)
    for (let s of t.ops())
        if (s.kind === u.Template || s.kind === u.ConditionalCreate || s.kind === u.ConditionalBranchCreate || s.kind === u.RepeaterCreate) {
            let r = n.views.get(s.xref);
            s.decls = r.decls;
        } }
function U2(n) { let e = new Set, t = new Map; for (let s of n.units)
    for (let r of s.ops())
        r.kind === u.DeclareLet && t.set(r.xref, r), ye(r, i => { i instanceof ii && e.add(i.target); }); for (let s of n.units)
    for (let r of s.update)
        fe(r, i => i instanceof ri && !e.has(i.target) ? (H2(i) || w.remove(t.get(i.target)), i.value) : i, X.None); }
function H2(n) { let e = !1; return k(n, t => ((t instanceof us || t instanceof ai) && (e = !0), t), X.None), e; }
function W2(n) { let e = new Set; for (let t of n.units)
    for (let s of t.ops())
        ye(s, r => { if (r instanceof W)
            switch (r.operator) {
                case x.Exponentiation:
                    j2(r, e);
                    break;
                case x.NullishCoalesce:
                    z2(r, e);
                    break;
                case x.And:
                case x.Or: G2(r, e);
            } }); for (let t of n.units)
    for (let s of t.ops())
        fe(s, r => r instanceof ft ? e.has(r) ? r : r.expr : r, X.None); }
function j2(n, e) { n.lhs instanceof ft && n.lhs.expr instanceof nn && e.add(n.lhs); }
function z2(n, e) { n.lhs instanceof ft && (xh(n.lhs.expr) || n.lhs.expr instanceof Tt) && e.add(n.lhs), n.rhs instanceof ft && (xh(n.rhs.expr) || n.rhs.expr instanceof Tt) && e.add(n.rhs); }
function G2(n, e) { n.lhs instanceof ft && n.lhs.expr instanceof W && n.lhs.expr.operator === x.NullishCoalesce && e.add(n.lhs); }
function xh(n) { return n instanceof W && (n.operator === x.And || n.operator === x.Or); }
function X2(n) { for (let e of n.units)
    for (let t of e.update)
        if (t.kind === u.Binding)
            switch (t.bindingKind) {
                case T.ClassName:
                    if (t.expression instanceof oe)
                        throw new Error("Unexpected interpolation in ClassName binding");
                    w.replace(t, kg(t.target, t.name, t.expression, t.sourceSpan));
                    break;
                case T.StyleProperty:
                    w.replace(t, _g(t.target, t.name, t.expression, t.unit, t.sourceSpan));
                    break;
                case T.Property:
                case T.Template:
                    t.name === "style" ? w.replace(t, Tg(t.target, t.expression, t.sourceSpan)) : t.name === "class" && w.replace(t, bg(t.target, t.expression, t.sourceSpan));
                    break;
            } }
function Y2(n) { for (let e of n.units)
    e.create.prepend(Ha(e.create)), e.update.prepend(Ha(e.update)); }
function Ha(n) { let e = 0, t = []; for (let s of n) {
    let r = new Map;
    ye(s, (c, h) => { h & X.InChildOperation || c instanceof In && r.set(c.xref, c); });
    let i = 0, a = new Set, o = new Set, l = new Map;
    ye(s, (c, h) => { h & X.InChildOperation || (c instanceof Wt ? (a.has(c.xref) || (a.add(c.xref), l.set(c.xref, `tmp_${e}_${i++}`)), yh(l, c)) : c instanceof In && (r.get(c.xref) === c && (o.add(c.xref), i--), yh(l, c))); }), t.push(...Array.from(new Set(l.values())).map(c => gt(new ce(c)))), e++, s.kind === u.Listener || s.kind === u.Animation || s.kind === u.AnimationListener || s.kind === u.TwoWayListener ? s.handlerOps.prepend(Ha(s.handlerOps)) : s.kind === u.RepeaterCreate && s.trackByOps !== null && s.trackByOps.prepend(Ha(s.trackByOps));
} return t; }
function yh(n, e) { let t = n.get(e.xref); if (t === void 0)
    throw new Error(`Found xref with unassigned name: ${e.xref}`); e.name = t; }
function Q2(n) { for (let e of n.units)
    for (let t of e.create)
        if (t.kind === u.RepeaterCreate)
            if (t.track instanceof tt && t.track.name === "$index")
                t.trackByFn = y(f.repeaterTrackByIndex);
            else if (t.track instanceof tt && t.track.name === "$item")
                t.trackByFn = y(f.repeaterTrackByIdentity);
            else if (Z2(n.root.xref, t.track))
                t.usesComponentInstance = !0, t.track.receiver.receiver.view === e.xref ? t.trackByFn = t.track.receiver : (t.trackByFn = y(f.componentInstance).callFn([]).prop(t.track.receiver.name), t.track = t.trackByFn);
            else {
                t.track = k(t.track, r => { if (r instanceof us || r instanceof ai)
                    throw new Error("Illegal State: Pipes are not allowed in this context"); return r instanceof bn ? (t.usesComponentInstance = !0, new Cl(r.view)) : r; }, X.None);
                let s = new w;
                s.push(gt(new xe(t.track, t.track.sourceSpan))), t.trackByOps = s;
            } }
function Z2(n, e) { if (!(e instanceof Fe) || e.args.length === 0 || e.args.length > 2 || !(e.receiver instanceof We && e.receiver.receiver instanceof bn) || e.receiver.receiver.view !== n)
    return !1; let [t, s] = e.args; return !(t instanceof tt) || t.name !== "$index" ? !1 : e.args.length === 1 ? !0 : !(!(s instanceof tt) || s.name !== "$item"); }
function J2(n) { for (let e of n.units)
    for (let t of e.create)
        t.kind === u.RepeaterCreate && (t.track = k(t.track, s => { if (s instanceof Ae) {
            if (t.varNames.$index.has(s.name))
                return D("$index");
            if (s.name === t.varNames.$implicit)
                return D("$item");
        } return s; }, X.None)); }
function K2(n) { for (let e of n.units)
    for (let t of e.create)
        t.kind === u.TwoWayListener && fe(t, s => { if (!(s instanceof ka))
            return s; let { target: r, value: i } = s; if (r instanceof We || r instanceof Ft)
            return dh(r, i).or(r.set(i)); if (r instanceof en)
            return dh(r, i); throw new Error("Unsupported expression in two-way action binding."); }, X.InChildOperation); }
function ex(n) { for (let e of n.units) {
    let t = 0;
    for (let s of e.ops())
        Eo(s) && (t += tx(s));
    for (let s of e.ops())
        ye(s, r => { Ht(r) && (n.compatibility === st.TemplateDefinitionBuilder && r instanceof cs || (Nu(r) && (r.varOffset = t), Eo(r) && (t += Ch(r)))); });
    if (n.compatibility === st.TemplateDefinitionBuilder)
        for (let s of e.ops())
            ye(s, r => { !Ht(r) || !(r instanceof cs) || (Nu(r) && (r.varOffset = t), Eo(r) && (t += Ch(r))); });
    e.vars = t;
} if (n instanceof ci)
    for (let e of n.units)
        for (let t of e.create) {
            if (t.kind !== u.Template && t.kind !== u.RepeaterCreate && t.kind !== u.ConditionalCreate && t.kind !== u.ConditionalBranchCreate)
                continue;
            let s = n.views.get(t.xref);
            t.vars = s.vars;
        } }
function tx(n) { let e; switch (n.kind) {
    case u.Attribute: return e = 1, n.expression instanceof oe && !nx(n.expression) && (e += n.expression.expressions.length), e;
    case u.Property:
    case u.DomProperty: return e = 1, n.expression instanceof oe && (e += n.expression.expressions.length), e;
    case u.TwoWayProperty: return 1;
    case u.StyleProp:
    case u.ClassProp:
    case u.StyleMap:
    case u.ClassMap: return e = 2, n.expression instanceof oe && (e += n.expression.expressions.length), e;
    case u.InterpolateText: return n.interpolation.expressions.length;
    case u.I18nExpression:
    case u.Conditional:
    case u.DeferWhen:
    case u.StoreLet: return 1;
    case u.RepeaterCreate: return n.emptyView ? 1 : 0;
    default: throw new Error(`Unhandled op: ${u[n.kind]}`);
} }
function Ch(n) { switch (n.kind) {
    case I.PureFunctionExpr: return 1 + n.args.length;
    case I.PipeBinding: return 1 + n.args.length;
    case I.PipeBindingVariadic: return 1 + n.numArgs;
    case I.StoreLet: return 1;
    default: throw new Error(`AssertionError: unhandled ConsumesVarsTrait expression ${n.constructor.name}`);
} }
function nx(n) { return !(n.expressions.length !== 1 || n.strings.length !== 2 || n.strings[0] !== "" || n.strings[1] !== ""); }
function sx(n) { for (let e of n.units) {
    Bi(e.create), Bi(e.update);
    for (let t of e.create)
        t.kind === u.Listener || t.kind === u.Animation || t.kind === u.AnimationListener || t.kind === u.TwoWayListener ? Bi(t.handlerOps) : t.kind === u.RepeaterCreate && t.trackByOps !== null && Bi(t.trackByOps);
    Mi(e.create, n.compatibility), Mi(e.update, n.compatibility);
    for (let t of e.create)
        t.kind === u.Listener || t.kind === u.Animation || t.kind === u.AnimationListener || t.kind === u.TwoWayListener ? Mi(t.handlerOps, n.compatibility) : t.kind === u.RepeaterCreate && t.trackByOps !== null && Mi(t.trackByOps, n.compatibility);
} }
var ve = (function (n) { return n[n.None = 0] = "None", n[n.ViewContextRead = 1] = "ViewContextRead", n[n.ViewContextWrite = 2] = "ViewContextWrite", n[n.SideEffectful = 4] = "SideEffectful", n; })(ve || {});
function Bi(n) { let e = new Map; for (let t of n)
    t.kind === u.Variable && t.flags & lt.AlwaysInline && (ye(t, s => { if (Ht(s) && Qc(s) !== ve.None)
        throw new Error("AssertionError: A context-sensitive variable was marked AlwaysInline"); }), e.set(t.xref, t)), fe(t, s => s instanceof en && e.has(s.xref) ? e.get(s.xref).initializer.clone() : s, X.None); for (let t of e.values())
    w.remove(t); }
function Mi(n, e) { let t = new Map, s = new Map, r = new Set, i = new Map; for (let c of n) {
    if (c.kind === u.Variable) {
        if (t.has(c.xref) || s.has(c.xref))
            throw new Error(`Should not see two declarations of the same variable: ${c.xref}`);
        t.set(c.xref, c), s.set(c.xref, 0);
    }
    i.set(c, rx(c)), ix(c, s, r);
} let a = !1; for (let c of n.reversed()) {
    let h = i.get(c);
    if (c.kind === u.Variable && s.get(c.xref) === 0) {
        if (a && h.fences & ve.ViewContextWrite || h.fences & ve.SideEffectful) {
            let p = gt(c.initializer.toStmt());
            i.set(p, h), w.replace(c, p);
        }
        else
            ax(c, s), w.remove(c);
        i.delete(c), t.delete(c.xref), s.delete(c.xref);
        continue;
    }
    h.fences & ve.ViewContextRead && (a = !0);
} let o = []; for (let [c, h] of s) {
    let g = !!(t.get(c).flags & lt.AlwaysInline);
    h !== 1 || g || r.has(c) || o.push(c);
} let l; for (; l = o.pop();) {
    let c = t.get(l), h = i.get(c);
    if (!!(c.flags & lt.AlwaysInline))
        throw new Error("AssertionError: Found an 'AlwaysInline' variable after the always inlining pass.");
    for (let g = c.next; g.kind !== u.ListEnd; g = g.next) {
        let v = i.get(g);
        if (v.variablesUsed.has(l)) {
            if (e === st.TemplateDefinitionBuilder && !lx(c, g))
                break;
            if (ox(l, c.initializer, g, h.fences)) {
                v.variablesUsed.delete(l);
                for (let E of h.variablesUsed)
                    v.variablesUsed.add(E);
                v.fences |= h.fences, t.delete(l), s.delete(l), i.delete(c), w.remove(c);
            }
            break;
        }
        if (!Nf(v.fences, h.fences))
            break;
    }
} }
function Qc(n) { switch (n.kind) {
    case I.NextContext: return ve.ViewContextRead | ve.ViewContextWrite;
    case I.RestoreView: return ve.ViewContextRead | ve.ViewContextWrite | ve.SideEffectful;
    case I.StoreLet: return ve.SideEffectful;
    case I.Reference:
    case I.ContextLetReference: return ve.ViewContextRead;
    default: return ve.None;
} }
function rx(n) { let e = ve.None, t = new Set; return ye(n, s => { if (Ht(s))
    switch (s.kind) {
        case I.ReadVariable:
            t.add(s.xref);
            break;
        default: e |= Qc(s);
    } }), { fences: e, variablesUsed: t }; }
function ix(n, e, t) { ye(n, (s, r) => { if (!Ht(s) || s.kind !== I.ReadVariable)
    return; let i = e.get(s.xref); i !== void 0 && (e.set(s.xref, i + 1), r & X.InChildOperation && t.add(s.xref)); }); }
function ax(n, e) { ye(n, t => { if (!Ht(t) || t.kind !== I.ReadVariable)
    return; let s = e.get(t.xref); if (s !== void 0) {
    if (s === 0)
        throw new Error(`Inaccurate variable count: ${t.xref} - found another read but count is already 0`);
    e.set(t.xref, s - 1);
} }); }
function Nf(n, e) { if (n & ve.ViewContextWrite) {
    if (e & ve.ViewContextRead)
        return !1;
}
else if (n & ve.ViewContextRead && e & ve.ViewContextWrite)
    return !1; return !0; }
function ox(n, e, t, s) { let r = !1, i = !0; return fe(t, (a, o) => { if (!Ht(a) || r || !i)
    return a; if (o & X.InChildOperation && s & ve.ViewContextRead)
    return a; switch (a.kind) {
    case I.ReadVariable:
        if (a.xref === n)
            return r = !0, e;
        break;
    default:
        let l = Qc(a);
        i = i && Nf(l, s);
        break;
} return a; }, X.None), r; }
function lx(n, e) { switch (n.variable.kind) {
    case Se.Identifier: return n.initializer instanceof tt && n.initializer.name === "ctx";
    case Se.Context: return e.kind === u.Variable;
    default: return !0;
} }
function cx(n) { for (let e of n.units) {
    let t = null, s = null;
    for (let r of e.create)
        switch (r.kind) {
            case u.I18nStart:
                t = r;
                break;
            case u.I18nEnd:
                t = null;
                break;
            case u.IcuStart:
                t === null && (s = n.allocateXrefId(), w.insertBefore(ho(s, r.message, void 0, null), r));
                break;
            case u.IcuEnd:
                s !== null && (w.insertAfter(po(s, null), r), s = null);
                break;
        }
} }
var ux = [{ kind: _.Tmpl, fn: qE }, { kind: _.Host, fn: nw }, { kind: _.Tmpl, fn: AE }, { kind: _.Tmpl, fn: XE }, { kind: _.Tmpl, fn: cx }, { kind: _.Both, fn: Cv }, { kind: _.Both, fn: X2 }, { kind: _.Both, fn: lv }, { kind: _.Both, fn: Ev }, { kind: _.Both, fn: iv }, { kind: _.Tmpl, fn: yv }, { kind: _.Both, fn: kE }, { kind: _.Tmpl, fn: A2 }, { kind: _.Both, fn: hv }, { kind: _.Both, fn: VE }, { kind: _.Tmpl, fn: pv }, { kind: _.Tmpl, fn: WE }, { kind: _.Tmpl, fn: Av }, { kind: _.Tmpl, fn: GE }, { kind: _.Both, fn: ZE }, { kind: _.Tmpl, fn: Zv }, { kind: _.Tmpl, fn: Qv }, { kind: _.Tmpl, fn: Jv }, { kind: _.Tmpl, fn: O2 }, { kind: _.Both, fn: Kg }, { kind: _.Both, fn: N2 }, { kind: _.Tmpl, fn: J2 }, { kind: _.Tmpl, fn: k2 }, { kind: _.Both, fn: B2 }, { kind: _.Tmpl, fn: _v }, { kind: _.Tmpl, fn: K2 }, { kind: _.Tmpl, fn: Q2 }, { kind: _.Both, fn: b2 }, { kind: _.Both, fn: F2 }, { kind: _.Tmpl, fn: yE }, { kind: _.Both, fn: Nv }, { kind: _.Both, fn: W2 }, { kind: _.Both, fn: Y2 }, { kind: _.Both, fn: sx }, { kind: _.Both, fn: U2 }, { kind: _.Tmpl, fn: xE }, { kind: _.Tmpl, fn: xv }, { kind: _.Tmpl, fn: T2 }, { kind: _.Tmpl, fn: sv }, { kind: _.Tmpl, fn: tv }, { kind: _.Tmpl, fn: q2 }, { kind: _.Tmpl, fn: D2 }, { kind: _.Tmpl, fn: P2 }, { kind: _.Tmpl, fn: jv }, { kind: _.Tmpl, fn: gE }, { kind: _.Tmpl, fn: ew }, { kind: _.Both, fn: gv }, { kind: _.Tmpl, fn: _2 }, { kind: _.Both, fn: ex }, { kind: _.Tmpl, fn: Yv }, { kind: _.Both, fn: TE }, { kind: _.Tmpl, fn: I2 }, { kind: _.Tmpl, fn: NE }, { kind: _.Tmpl, fn: PE }, { kind: _.Tmpl, fn: Iv }, { kind: _.Tmpl, fn: rv }, { kind: _.Tmpl, fn: BE }, { kind: _.Both, fn: QE }, { kind: _.Both, fn: S2 }, { kind: _.Both, fn: uv }];
function Df(n, e) { for (let t of ux)
    (t.kind === e || t.kind === _.Both) && t.fn(n); }
function hx(n, e) { let t = Lf(n.root); return Pf(n.root, e), t; }
function Pf(n, e) { for (let t of n.job.units) {
    if (t.parent !== n.xref)
        continue;
    Pf(t, e);
    let s = Lf(t);
    e.statements.push(s.toDeclStmt(s.name));
} }
function Lf(n) { if (n.fnName === null)
    throw new Error(`AssertionError: view ${n.xref} is unnamed`); let e = []; for (let i of n.create) {
    if (i.kind !== u.Statement)
        throw new Error(`AssertionError: expected all create ops to have been compiled, but got ${u[i.kind]}`);
    e.push(i.statement);
} let t = []; for (let i of n.update) {
    if (i.kind !== u.Statement)
        throw new Error(`AssertionError: expected all update ops to have been compiled, but got ${u[i.kind]}`);
    t.push(i.statement);
} let s = Wa(1, e), r = Wa(2, t); return sn([new J("rf"), new J("ctx")], [...s, ...r], void 0, void 0, n.fnName); }
function Wa(n, e) { return e.length === 0 ? [] : [Si(new W(x.BitwiseAnd, D("rf"), d(n)), e)]; }
function px(n) { if (n.root.fnName === null)
    throw new Error("AssertionError: host binding function is unnamed"); let e = []; for (let i of n.root.create) {
    if (i.kind !== u.Statement)
        throw new Error(`AssertionError: expected all create ops to have been compiled, but got ${u[i.kind]}`);
    e.push(i.statement);
} let t = []; for (let i of n.root.update) {
    if (i.kind !== u.Statement)
        throw new Error(`AssertionError: expected all update ops to have been compiled, but got ${u[i.kind]}`);
    t.push(i.statement);
} if (e.length === 0 && t.length === 0)
    return null; let s = Wa(1, e), r = Wa(2, t); return sn([new J("rf"), new J("ctx")], [...s, ...r], void 0, void 0, n.root.fnName); }
var Bf = st.TemplateDefinitionBuilder, Qn = new Qs, Zn = "ng-template", fx = "animate.";
function ji(n) { return n instanceof Ie; }
function dx(n) { return ji(n) && n.nodes.length === 1 && n.nodes[0] instanceof kn; }
function mx(n, e, t, s, r, i, a, o, l, c) { let h = new ci(n, t, Bf, s, r, i, a, o, l, c); return ln(h.root, e), h; }
function gx(n, e, t) { let s = new Pa(n.componentName, t, Bf, Oe.DomOnly); for (let r of n.properties ?? []) {
    let i = T.Property;
    r.name.startsWith("attr.") && (r.name = r.name.substring(5), i = T.Attribute), r.isLegacyAnimation && (i = T.LegacyAnimation), r.isAnimation && (i = T.Animation);
    let a = e.calcPossibleSecurityContexts(n.componentSelector, r.name, i === T.Attribute).filter(o => o !== ne.NONE);
    vx(s, r, i, a);
} for (let [r, i] of Object.entries(n.attributes) ?? []) {
    let a = e.calcPossibleSecurityContexts(n.componentSelector, r, !0).filter(o => o !== ne.NONE);
    wx(s, r, i, a);
} for (let r of n.events ?? [])
    Ex(s, r); return s; }
function vx(n, e, t, s) { let r, i = e.expression.ast; i instanceof xi ? r = new oe(i.strings, i.expressions.map(a => U(a, n, e.sourceSpan)), []) : r = U(i, n, e.sourceSpan), n.root.update.push(ls(n.root.xref, t, e.name, r, null, s, !1, !1, null, null, e.sourceSpan)); }
function wx(n, e, t, s) { let r = ls(n.root.xref, T.Attribute, e, t, null, s, !0, !1, null, null, t.sourceSpan); n.root.update.push(r); }
function Ex(n, e) { let t; if (e.type === Be.Animation)
    t = rf(n.root.xref, new ke, e.name, null, mi(n.root, e.handler, e.handlerSpan), e.name.endsWith("enter") ? "enter" : "leave", e.targetOrPhase, !0, e.sourceSpan);
else {
    let [s, r] = e.type !== Be.LegacyAnimation ? [null, e.targetOrPhase] : [e.targetOrPhase, null];
    t = jc(n.root.xref, new ke, e.name, null, mi(n.root, e.handler, e.handlerSpan), s, r, !0, e.sourceSpan);
} n.root.create.push(t); }
function ln(n, e) { for (let t of e)
    if (t instanceof Ot)
        Sx(n, t);
    else if (t instanceof Ke)
        xx(n, t);
    else if (t instanceof qs)
        yx(n, t);
    else if (t instanceof Un)
        Mf(n, t, null);
    else if (t instanceof $s)
        Rf(n, t, null);
    else if (t instanceof fa)
        Cx(n, t);
    else if (t instanceof pa)
        Ax(n, t);
    else if (t instanceof is)
        _x(n, t);
    else if (t instanceof Sp)
        Tx(n, t);
    else if (t instanceof Vs)
        bx(n, t);
    else if (t instanceof Pc)
        Nx(n, t);
    else if (!(t instanceof vr))
        throw new Error(`Unsupported template node: ${t.constructor.name}`); }
function Sx(n, e) { if (e.i18n !== void 0 && !(e.i18n instanceof Ie || e.i18n instanceof qt))
    throw Error(`Unhandled i18n metadata type for element: ${e.i18n.constructor.name}`); let t = n.job.allocateXrefId(), [s, r] = It(e.name), i = Mg(r, t, hf(s), e.i18n instanceof qt ? e.i18n : void 0, e.startSourceSpan, e.sourceSpan); n.create.push(i), Px(n, i, e), Of(i, e); let a = null; e.i18n instanceof Ie && (a = n.job.allocateXrefId(), n.create.push(ho(a, e.i18n, void 0, e.startSourceSpan))), ln(n, e.children); let o = Fg(t, e.endSourceSpan ?? e.startSourceSpan); n.create.push(o), a !== null && w.insertBefore(po(a, e.endSourceSpan ?? e.startSourceSpan), o); }
function xx(n, e) { if (e.i18n !== void 0 && !(e.i18n instanceof Ie || e.i18n instanceof qt))
    throw Error(`Unhandled i18n metadata type for template: ${e.i18n.constructor.name}`); let t = n.job.allocateView(n.xref), s = e.tagName, r = ""; e.tagName && ([r, s] = It(e.tagName)); let i = e.i18n instanceof qt ? e.i18n : void 0, a = hf(r), o = s === null ? "" : mv(s, a), l = Dx(e) ? Ue.NgTemplate : Ue.Structural, c = ef(t.xref, l, s, o, a, i, e.startSourceSpan, e.sourceSpan); n.create.push(c), Lx(n, c, e, l), Of(c, e), ln(t, e.children); for (let { name: h, value: p } of e.variables)
    t.contextVariables.set(h, p !== "" ? p : "$implicit"); if (l === Ue.NgTemplate && e.i18n instanceof Ie) {
    let h = n.job.allocateXrefId();
    w.insertAfter(ho(h, e.i18n, void 0, e.startSourceSpan), t.create.head), w.insertBefore(po(h, e.endSourceSpan ?? e.startSourceSpan), t.create.tail);
} }
function yx(n, e) { if (e.i18n !== void 0 && !(e.i18n instanceof qt))
    throw Error(`Unhandled i18n metadata type for element: ${e.i18n.constructor.name}`); let t = null; e.children.some(i => !(i instanceof oo) && (!(i instanceof Un) || i.value.trim().length > 0)) && (t = n.job.allocateView(n.xref), ln(t, e.children)); let s = n.job.allocateXrefId(), r = Wg(s, e.selector, e.i18n, t?.xref ?? null, e.sourceSpan); for (let i of e.attributes) {
    let a = Qn.securityContext(e.name, i.name, !0);
    n.update.push(ls(r.xref, T.Attribute, i.name, d(i.value), null, a, !0, !1, null, Qt(i.i18n), i.sourceSpan));
} n.create.push(r); }
function Mf(n, e, t) { n.create.push(sf(n.job.allocateXrefId(), e.value, t, e.sourceSpan)); }
function Rf(n, e, t) { let s = e.value; if (s instanceof Xe && (s = s.ast), !(s instanceof xi))
    throw new Error(`AssertionError: expected Interpolation for BoundText node, got ${s.constructor.name}`); if (e.i18n !== void 0 && !(e.i18n instanceof et))
    throw Error(`Unhandled i18n metadata type for text interpolation: ${e.i18n?.constructor.name}`); let r = e.i18n instanceof et ? e.i18n.children.filter(o => o instanceof pt).map(o => o.name) : []; if (r.length > 0 && r.length !== s.expressions.length)
    throw Error(`Unexpected number of i18n placeholders (${s.expressions.length}) for BoundText with ${s.expressions.length} expressions`); let i = n.job.allocateXrefId(); n.create.push(sf(i, "", t, e.sourceSpan)); let a = n.job.compatibility ? null : e.sourceSpan; n.update.push(yg(i, new oe(s.strings, s.expressions.map(o => U(o, n.job, a)), r), e.sourceSpan)); }
function Cx(n, e) { let t = null, s = []; for (let r = 0; r < e.branches.length; r++) {
    let i = e.branches[r], a = n.job.allocateView(n.xref), o = ja(n, a.xref, i);
    i.expressionAlias !== null && a.contextVariables.set(i.expressionAlias.name, cf);
    let l;
    if (i.i18n !== void 0) {
        if (!(i.i18n instanceof Ut))
            throw Error(`Unhandled i18n metadata type for if block: ${i.i18n?.constructor.name}`);
        l = i.i18n;
    }
    let h = (r === 0 ? tf : nf)(a.xref, Ue.Block, o, "Conditional", be.HTML, l, i.startSourceSpan, i.sourceSpan);
    n.create.push(h), t === null && (t = a.xref);
    let p = i.expression ? U(i.expression, n.job, null) : null, g = new ba(p, h.xref, h.handle, i.expressionAlias);
    s.push(g), ln(a, i.children);
} n.update.push(Zp(t, null, s, e.sourceSpan)); }
function Ax(n, e) { if (e.cases.length === 0)
    return; let t = null, s = []; for (let r = 0; r < e.cases.length; r++) {
    let i = e.cases[r], a = n.job.allocateView(n.xref), o = ja(n, a.xref, i), l;
    if (i.i18n !== void 0) {
        if (!(i.i18n instanceof Ut))
            throw Error(`Unhandled i18n metadata type for switch block: ${i.i18n?.constructor.name}`);
        l = i.i18n;
    }
    let h = (r === 0 ? tf : nf)(a.xref, Ue.Block, o, "Case", be.HTML, l, i.startSourceSpan, i.sourceSpan);
    n.create.push(h), t === null && (t = a.xref);
    let p = i.expression ? U(i.expression, n.job, e.startSourceSpan) : null, g = new ba(p, h.xref, h.handle);
    s.push(g), ln(a, i.children);
} n.update.push(Zp(t, U(e.expression, n.job, null), s, e.sourceSpan)); }
function Ri(n, e, t, s, r) { if (t !== void 0 && !(t instanceof Ut))
    throw Error("Unhandled i18n metadata type for defer block"); if (s === void 0)
    return null; let i = n.job.allocateView(n.xref); ln(i, s); let a = ef(i.xref, Ue.Block, null, `Defer${e}`, be.HTML, t, r, r); return n.create.push(a), a; }
function _x(n, e) { let t = null; if (n.job.deferMeta.mode === 0) {
    if (!n.job.deferMeta.blocks.has(e))
        throw new Error("AssertionError: unable to find a dependency function for this deferred block");
    t = n.job.deferMeta.blocks.get(e) ?? null;
} let s = Ri(n, "", e.i18n, e.children, e.sourceSpan), r = Ri(n, "Loading", e.loading?.i18n, e.loading?.children, e.loading?.sourceSpan), i = Ri(n, "Placeholder", e.placeholder?.i18n, e.placeholder?.children, e.placeholder?.sourceSpan), a = Ri(n, "Error", e.error?.i18n, e.error?.children, e.error?.sourceSpan), o = n.job.allocateXrefId(), l = jg(o, s.xref, s.handle, t, n.job.allDeferrableDepsFn, e.sourceSpan); l.placeholderView = i?.xref ?? null, l.placeholderSlot = i?.handle ?? null, l.loadingSlot = r?.handle ?? null, l.errorSlot = a?.handle ?? null, l.placeholderMinimumTime = e.placeholder?.minimumTime ?? null, l.loadingMinimumTime = e.loading?.minimumTime ?? null, l.loadingAfterTime = e.loading?.afterTime ?? null, l.flags = kx(e), n.create.push(l); let c = [], h = []; Ao("hydrate", e.hydrateTriggers, c, h, n, o), Ao("none", e.triggers, c, h, n, o), Ao("prefetch", e.prefetchTriggers, c, h, n, o), c.some(g => g.modifier === "none") || h.some(g => g.modifier === "none") || c.push(hn(o, { kind: Z.Idle }, "none", null)), n.create.push(c), n.update.push(h); }
function kx(n) { return Object.keys(n.hydrateTriggers).length > 0 ? 1 : null; }
function Ao(n, e, t, s, r, i) { if (e.idle !== void 0) {
    let a = hn(i, { kind: Z.Idle }, n, e.idle.sourceSpan);
    t.push(a);
} if (e.immediate !== void 0) {
    let a = hn(i, { kind: Z.Immediate }, n, e.immediate.sourceSpan);
    t.push(a);
} if (e.timer !== void 0) {
    let a = hn(i, { kind: Z.Timer, delay: e.timer.delay }, n, e.timer.sourceSpan);
    t.push(a);
} if (e.hover !== void 0) {
    let a = hn(i, { kind: Z.Hover, targetName: e.hover.reference, targetXref: null, targetSlot: null, targetView: null, targetSlotViewSteps: null }, n, e.hover.sourceSpan);
    t.push(a);
} if (e.interaction !== void 0) {
    let a = hn(i, { kind: Z.Interaction, targetName: e.interaction.reference, targetXref: null, targetSlot: null, targetView: null, targetSlotViewSteps: null }, n, e.interaction.sourceSpan);
    t.push(a);
} if (e.viewport !== void 0) {
    let a = hn(i, { kind: Z.Viewport, targetName: e.viewport.reference, targetXref: null, targetSlot: null, targetView: null, targetSlotViewSteps: null }, n, e.viewport.sourceSpan);
    t.push(a);
} if (e.never !== void 0) {
    let a = hn(i, { kind: Z.Never }, n, e.never.sourceSpan);
    t.push(a);
} if (e.when !== void 0) {
    if (e.when.value instanceof xi)
        throw new Error("Unexpected interpolation in defer block when trigger");
    let a = Dg(i, U(e.when.value, r.job, e.when.sourceSpan), n, e.when.sourceSpan);
    s.push(a);
} }
function Tx(n, e) { if (e.i18n instanceof Ie && dx(e.i18n)) {
    let t = n.job.allocateXrefId();
    n.create.push(Xg(t, e.i18n, Ap(e.i18n).name, null));
    for (let [s, r] of Object.entries(S(S({}, e.vars), e.placeholders)))
        r instanceof $s ? Rf(n, r, s) : Mf(n, r, s);
    n.create.push(Yg(t));
}
else
    throw Error(`Unhandled i18n metadata type for ICU: ${e.i18n?.constructor.name}`); }
function bx(n, e) { let t = n.job.allocateView(n.xref), s = `\u0275$index_${t.xref}`, r = `\u0275$count_${t.xref}`, i = new Set; t.contextVariables.set(e.item.name, e.item.value); for (let A of e.contextVariables)
    A.value === "$index" && i.add(A.name), A.name === "$index" ? t.contextVariables.set("$index", A.value).set(s, A.value) : A.name === "$count" ? t.contextVariables.set("$count", A.value).set(r, A.value) : t.aliases.add({ kind: Se.Alias, name: null, identifier: A.name, expression: Ix(A, s, r) }); let a = me(e.trackBy.span, e.sourceSpan), o = U(e.trackBy, n.job, a); ln(t, e.children); let l = null, c = null; e.empty !== null && (l = n.job.allocateView(n.xref), ln(l, e.empty.children), c = ja(n, l.xref, e.empty)); let h = { $index: i, $implicit: e.item.name }; if (e.i18n !== void 0 && !(e.i18n instanceof Ut))
    throw Error("AssertionError: Unhandled i18n metadata type or @for"); if (e.empty?.i18n !== void 0 && !(e.empty.i18n instanceof Ut))
    throw Error("AssertionError: Unhandled i18n metadata type or @empty"); let p = e.i18n, g = e.empty?.i18n, v = ja(n, t.xref, e), E = Rg(t.xref, l?.xref ?? null, v, o, h, c, p, g, e.startSourceSpan, e.sourceSpan); n.create.push(E); let C = U(e.expression, n.job, me(e.expression.span, e.sourceSpan)), b = Ng(E.xref, E.handle, C, e.sourceSpan); n.update.push(b); }
function Ix(n, e, t) { switch (n.value) {
    case "$index": return new Ae(e);
    case "$count": return new Ae(t);
    case "$first": return new Ae(e).identical(d(0));
    case "$last": return new Ae(e).identical(new Ae(t).minus(d(1)));
    case "$even": return new Ae(e).modulo(d(2)).identical(d(0));
    case "$odd": return new Ae(e).modulo(d(2)).notIdentical(d(0));
    default: throw new Error(`AssertionError: unknown @for loop variable ${n.value}`);
} }
function Nx(n, e) { let t = n.job.allocateXrefId(); n.create.push(zg(t, e.name, e.sourceSpan)), n.update.push(Lg(t, e.name, U(e.value, n.job, e.valueSpan), e.sourceSpan)); }
function U(n, e, t) { if (n instanceof Xe)
    return U(n.ast, e, t); if (n instanceof Jt)
    return n.receiver instanceof $t && !(n.receiver instanceof ss) ? new Ae(n.name) : new We(U(n.receiver, e, t), n.name, null, me(n.span, t)); if (n instanceof Fs) {
    if (n.receiver instanceof $t)
        throw new Error("Unexpected ImplicitReceiver");
    return new Fe(U(n.receiver, e, t), n.args.map(s => U(s, e, t)), void 0, me(n.span, t));
}
else {
    if (n instanceof Ge)
        return d(n.value, void 0, me(n.span, t));
    if (n instanceof Ts)
        switch (n.operator) {
            case "+": return new nn(Ds.Plus, U(n.expr, e, t), void 0, me(n.span, t));
            case "-": return new nn(Ds.Minus, U(n.expr, e, t), void 0, me(n.span, t));
            default: throw new Error(`AssertionError: unknown unary operator ${n.operator}`);
        }
    else if (n instanceof Ne) {
        let s = fv.get(n.operation);
        if (s === void 0)
            throw new Error(`AssertionError: unknown binary operator ${n.operation}`);
        return new W(s, U(n.left, e, t), U(n.right, e, t), void 0, me(n.span, t));
    }
    else {
        if (n instanceof ss)
            return new bn(e.root.xref);
        if (n instanceof rs)
            return new Ft(U(n.receiver, e, t), U(n.key, e, t), void 0, me(n.span, t));
        if (n instanceof Rs)
            throw new Error("AssertionError: Chain in unknown context");
        if (n instanceof sa) {
            let s = n.keys.map((r, i) => { let a = n.values[i]; return new ts(r.key, U(a, e, t), r.quoted); });
            return new bt(s, void 0, me(n.span, t));
        }
        else {
            if (n instanceof na)
                return new dt(n.expressions.map(s => U(s, e, t)));
            if (n instanceof ea)
                return new Tt(U(n.condition, e, t), U(n.trueExp, e, t), U(n.falseExp, e, t), void 0, me(n.span, t));
            if (n instanceof Rr)
                return U(n.expression, e, t);
            if (n instanceof ta)
                return new us(e.allocateXrefId(), new ke, n.name, [U(n.exp, e, t), ...n.args.map(s => U(s, e, t))]);
            if (n instanceof Pr)
                return new zs(U(n.receiver, e, t), U(n.key, e, t), me(n.span, t));
            if (n instanceof Dr)
                return new js(U(n.receiver, e, t), n.name);
            if (n instanceof ra)
                return new hs(U(n.receiver, e, t), n.args.map(s => U(s, e, t)));
            if (n instanceof $e)
                return new oi(me(n.span, t));
            if (n instanceof Lr)
                return hp(U(n.expression, e, t), me(n.span, t));
            if (n instanceof Br)
                return Js(U(n.expression, e, t));
            if (n instanceof Mr)
                return new Cr(U(n.expression, e, t), void 0, me(n.span, t));
            if (n instanceof $r)
                return Ah(n, e, t);
            if (n instanceof Fr)
                return new Ps(U(n.tag, e, t), Ah(n.template, e, t), void 0, me(n.span, t));
            if (n instanceof Or)
                return new ft(U(n.expression, e, t), void 0, me(n.span, t));
            throw new Error(`Unhandled expression type "${n.constructor.name}" in file "${t?.start.file.url}"`);
        }
    }
} }
function Ah(n, e, t) { return new Bs(n.elements.map(s => new Ar(s.text, me(s.span, t))), n.expressions.map(s => U(s, e, t)), me(n.span, t)); }
function Gl(n, e, t, s) { let r; return e instanceof xi ? r = new oe(e.strings, e.expressions.map(i => U(i, n, null)), Object.keys(Qt(t)?.placeholders ?? {})) : e instanceof se ? r = U(e, n, null) : r = d(e), r; }
var Ff = new Map([[G.Property, T.Property], [G.TwoWay, T.TwoWayProperty], [G.Attribute, T.Attribute], [G.Class, T.ClassName], [G.Style, T.StyleProperty], [G.LegacyAnimation, T.LegacyAnimation], [G.Animation, T.Animation]]);
function Dx(n) { return It(n.tagName ?? "")[1] === Zn; }
function Qt(n) { if (n == null)
    return null; if (!(n instanceof Ie))
    throw Error(`Expected i18n meta to be a Message, but got: ${n.constructor.name}`); return n; }
function Px(n, e, t) { let s = new Array, r = new Set; for (let i of t.attributes) {
    let a = Qn.securityContext(t.name, i.name, !0);
    s.push(ls(e.xref, T.Attribute, i.name, Gl(n.job, i.value, i.i18n), null, a, !0, !1, null, Qt(i.i18n), i.sourceSpan)), i.i18n && r.add(i.name);
} for (let i of t.inputs)
    r.has(i.name) && console.error(`On component ${n.job.componentName}, the binding ${i.name} is both an i18n attribute and a property. You may want to remove the property binding. This will become a compilation error in future versions of Angular.`), s.push(ls(e.xref, Ff.get(i.type), i.name, Gl(n.job, gi(i.value), i.i18n), i.unit, i.securityContext, !1, !1, null, Qt(i.i18n) ?? null, i.sourceSpan)); n.create.push(s.filter(i => i?.kind === u.ExtractedAttribute)), n.update.push(s.filter(i => i?.kind === u.Binding)); for (let i of t.outputs) {
    if (i.type === Be.LegacyAnimation && i.phase === null)
        throw Error("Animation listener should have a phase");
    i.type === Be.TwoWay ? n.create.push(af(e.xref, e.handle, i.name, e.tag, $f(n, i.handler, i.handlerSpan), i.sourceSpan)) : i.type === Be.Animation ? n.create.push(rf(e.xref, e.handle, i.name, e.tag, mi(n, i.handler, i.handlerSpan), i.name.endsWith("enter") ? "enter" : "leave", i.target, !1, i.sourceSpan)) : n.create.push(jc(e.xref, e.handle, i.name, e.tag, mi(n, i.handler, i.handlerSpan), i.phase, i.target, !1, i.sourceSpan));
} s.some(i => i?.i18nMessage) !== null && n.create.push(lf(n.job.allocateXrefId(), new ke, e.xref)); }
function Lx(n, e, t, s) { let r = new Array; for (let i of t.templateAttrs)
    if (i instanceof Os) {
        let a = Qn.securityContext(Zn, i.name, !0);
        r.push(Fi(n, e.xref, G.Attribute, i.name, i.value, null, a, !0, s, Qt(i.i18n), i.sourceSpan));
    }
    else
        r.push(Fi(n, e.xref, i.type, i.name, gi(i.value), i.unit, i.securityContext, !0, s, Qt(i.i18n), i.sourceSpan)); for (let i of t.attributes) {
    let a = Qn.securityContext(Zn, i.name, !0);
    r.push(Fi(n, e.xref, G.Attribute, i.name, i.value, null, a, !1, s, Qt(i.i18n), i.sourceSpan));
} for (let i of t.inputs)
    r.push(Fi(n, e.xref, i.type, i.name, gi(i.value), i.unit, i.securityContext, !1, s, Qt(i.i18n), i.sourceSpan)); n.create.push(r.filter(i => i?.kind === u.ExtractedAttribute)), n.update.push(r.filter(i => i?.kind === u.Binding)); for (let i of t.outputs) {
    if (i.type === Be.LegacyAnimation && i.phase === null)
        throw Error("Animation listener should have a phase");
    if (s === Ue.NgTemplate && (i.type === Be.TwoWay ? n.create.push(af(e.xref, e.handle, i.name, e.tag, $f(n, i.handler, i.handlerSpan), i.sourceSpan)) : n.create.push(jc(e.xref, e.handle, i.name, e.tag, mi(n, i.handler, i.handlerSpan), i.phase, i.target, !1, i.sourceSpan))), s === Ue.Structural && i.type !== Be.LegacyAnimation) {
        let a = Qn.securityContext(Zn, i.name, !1);
        n.create.push(ct(e.xref, T.Property, null, i.name, null, null, null, a));
    }
} r.some(i => i?.i18nMessage) !== null && n.create.push(lf(n.job.allocateXrefId(), new ke, e.xref)); }
function Fi(n, e, t, s, r, i, a, o, l, c, h) { let p = typeof r == "string"; if (l === Ue.Structural) {
    if (!o)
        switch (t) {
            case G.Property:
            case G.Class:
            case G.Style: return ct(e, T.Property, null, s, null, null, c, a);
            case G.TwoWay: return ct(e, T.TwoWayProperty, null, s, null, null, c, a);
        }
    if (!p && (t === G.Attribute || t === G.LegacyAnimation || t === G.Animation))
        return null;
} let g = Ff.get(t); return l === Ue.NgTemplate && (t === G.Class || t === G.Style || t === G.Attribute && !p) && (g = T.Property), ls(e, g, s, Gl(n.job, r, c), i, a, p, o, l, c, h); }
function mi(n, e, t) { e = gi(e); let s = new Array, r = e instanceof Rs ? e.expressions : [e]; if (r.length === 0)
    throw new Error("Expected listener to have non-empty expression list."); let i = r.map(o => U(o, n.job, t)), a = i.pop(); return s.push(...i.map(o => gt(new nt(o, o.sourceSpan)))), s.push(gt(new xe(a, a.sourceSpan))), s; }
function $f(n, e, t) { e = gi(e); let s = new Array; if (e instanceof Rs)
    if (e.expressions.length === 1)
        e = e.expressions[0];
    else
        throw new Error("Expected two-way listener to have a single expression."); let r = U(e, n.job, t), i = new Ae("$event"), a = new ka(r, i); return s.push(gt(new nt(a))), s.push(gt(new xe(i))), s; }
function gi(n) { return n instanceof Xe ? n.ast : n; }
function Of(n, e) { Bx(n.localRefs); for (let { name: t, value: s } of e.references)
    n.localRefs.push({ name: t, target: s }); }
function Bx(n) { if (!Array.isArray(n))
    throw new Error("AssertionError: expected an array"); }
function me(n, e) { if (e === null)
    return null; let t = e.start.moveBy(n.start), s = e.start.moveBy(n.end), r = e.fullStart.moveBy(n.start); return new L(t, s, r); }
function ja(n, e, t) { let s = null; for (let r of t.children)
    if (!(r instanceof oo || r instanceof Pc)) {
        if (s !== null)
            return null;
        if (r instanceof Ot || r instanceof Ke && r.tagName !== null)
            s = r;
        else
            return null;
    } if (s !== null) {
    for (let i of s.attributes)
        if (!i.name.startsWith(fx)) {
            let a = Qn.securityContext(Zn, i.name, !0);
            n.update.push(ls(e, T.Attribute, i.name, d(i.value), null, a, !0, !1, null, Qt(i.i18n), i.sourceSpan));
        }
    for (let i of s.inputs)
        if (i.type !== G.LegacyAnimation && i.type !== G.Animation && i.type !== G.Attribute) {
            let a = Qn.securityContext(Zn, i.name, !0);
            n.create.push(ct(e, T.Property, null, i.name, null, null, null, a));
        }
    let r = s instanceof Ot ? s.name : s.tagName;
    return r === Zn ? null : r;
} return null; }
var Vf = !1;
function GA(n) { Vf = n; }
function Mx() { return Vf; }
function za(n, e) { return Si(D($c).bitwiseAnd(d(n), null), e); }
function Rx(n) { return (n.descendants ? 1 : 0) | (n.static ? 2 : 0) | (n.emitDistinctChangesOnly ? 4 : 0); }
function Fx(n, e) { if (Array.isArray(n.predicate)) {
    let t = [];
    return n.predicate.forEach(s => { let r = s.split(",").map(i => d(i.trim())); t.push(...r); }), e.getConstLiteral(R(t), !0);
}
else
    switch (n.predicate.forwardRef) {
        case 0:
        case 2: return n.predicate.expression;
        case 1: return y(f.resolveForwardRef).callFn([n.predicate.expression]);
    } }
function qf(n, e, t, s) { let r = []; s !== void 0 && r.push(...s), n.isSignal && r.push(new We(D(Qr), n.propertyName)), r.push(Fx(n, e), d(Rx(n))), n.read && r.push(n.read); let i = n.isSignal ? t.signalBased : t.nonSignal; return y(i).callFn(r); }
var Zc = Symbol("queryAdvancePlaceholder");
function Uf(n) { let e = [], t = 0, s = () => { t > 0 && (e.unshift(y(f.queryAdvance).callFn(t === 1 ? [] : [d(t)]).toStmt()), t = 0); }; for (let r = n.length - 1; r >= 0; r--) {
    let i = n[r];
    i === Zc ? t++ : (s(), e.unshift(i));
} return s(), e; }
function $x(n, e, t) { let s = [], r = [], i = _p(o => r.push(o), Fc); n.forEach(o => { let l = qf(o, e, { signalBased: f.viewQuerySignal, nonSignal: f.viewQuery }); if (s.push(l.toStmt()), o.isSignal) {
    r.push(Zc);
    return;
} let c = i(), h = y(f.loadQuery).callFn([]), p = y(f.queryRefresh).callFn([c.set(h)]), g = D(Qr).prop(o.propertyName).set(o.first ? c.prop("first") : c); r.push(p.and(g).toStmt()); }); let a = t ? `${t}_Query` : null; return sn([new J($c, ro), new J(Qr, null)], [za(1, s), za(2, Uf(r))], qe, null, a); }
function Ox(n, e, t) { let s = [], r = [], i = _p(o => r.push(o), Fc); for (let o of n) {
    if (s.push(qf(o, e, { nonSignal: f.contentQuery, signalBased: f.contentQuerySignal }, [D("dirIndex")]).toStmt()), o.isSignal) {
        r.push(Zc);
        continue;
    }
    let l = i(), c = y(f.loadQuery).callFn([]), h = y(f.queryRefresh).callFn([l.set(c)]), p = D(Qr).prop(o.propertyName).set(o.first ? l.prop("first") : l);
    r.push(h.and(p).toStmt());
} let a = t ? `${t}_ContentQueries` : null; return sn([new J($c, ro), new J(Qr, null), new J("dirIndex", null)], [za(1, s), za(2, Uf(r))], qe, null, a); }
var Ga = class extends mf {
    constructor() { super(ql); }
    parse(e, t, s) { return super.parse(e, t, s); }
}, $i = ".", Vx = "attr", _o = "animate", qx = "class", Ux = "style", Hx = "*", ko = "animate-", Xl = class {
    _exprParser;
    _interpolationConfig;
    _schemaRegistry;
    errors;
    constructor(e, t, s, r) { this._exprParser = e, this._interpolationConfig = t, this._schemaRegistry = s, this.errors = r; }
    get interpolationConfig() { return this._interpolationConfig; }
    createBoundHostProperties(e, t) { let s = []; for (let r of Object.keys(e)) {
        let i = e[r];
        typeof i == "string" ? this.parsePropertyBinding(r, i, !0, !1, t, t.start.offset, void 0, [], s, t) : this._reportError(`Value of the host property binding "${r}" needs to be a string representing an expression but got "${i}" (${typeof i})`, t);
    } return s; }
    createDirectiveHostEventAsts(e, t) { let s = []; for (let r of Object.keys(e)) {
        let i = e[r];
        typeof i == "string" ? this.parseEvent(r, i, !1, t, t, [], s, t) : this._reportError(`Value of the host listener "${r}" needs to be a string representing an expression but got "${i}" (${typeof i})`, t);
    } return s; }
    parseInterpolation(e, t, s) { let r = t.fullStart.offset; try {
        let i = this._exprParser.parseInterpolation(e, t, r, s, this._interpolationConfig);
        return i && this.errors.push(...i.errors), i;
    }
    catch (i) {
        return this._reportError(`${i}`, t), this._exprParser.wrapLiteralPrimitive("ERROR", t, r);
    } }
    parseInterpolationExpression(e, t) { let s = t.start.offset; try {
        let r = this._exprParser.parseInterpolationExpression(e, t, s);
        return r && this.errors.push(...r.errors), r;
    }
    catch (r) {
        return this._reportError(`${r}`, t), this._exprParser.wrapLiteralPrimitive("ERROR", t, s);
    } }
    parseInlineTemplateBinding(e, t, s, r, i, a, o, l) { let c = s.start.offset + Hx.length, h = this._parseTemplateBindings(e, t, s, c, r); for (let p of h) {
        let g = cn(s, p.sourceSpan), v = p.key.source, E = cn(s, p.key.span);
        if (p instanceof Vr) {
            let C = p.value ? p.value.source : "$implicit", b = p.value ? cn(s, p.value.span) : void 0;
            o.push(new Jo(v, C, g, E, b));
        }
        else if (p.value) {
            let C = l ? g : s, b = cn(s, p.value.ast.sourceSpan);
            this._parsePropertyAst(v, p.value, !1, C, E, b, i, a);
        }
        else
            i.push([v, ""]), this.parseLiteralAttr(v, null, E, r, void 0, i, a, E);
    } }
    _parseTemplateBindings(e, t, s, r, i) { try {
        let a = this._exprParser.parseTemplateBindings(e, t, s, r, i);
        return a.errors.forEach(o => this.errors.push(o)), a.warnings.forEach(o => { this._reportError(o, s, mn.WARNING); }), a.templateBindings;
    }
    catch (a) {
        return this._reportError(`${a}`, s), [];
    } }
    parseLiteralAttr(e, t, s, r, i, a, o, l) { To(e) ? (e = e.substring(1), l !== void 0 && (l = cn(l, new Ze(l.start.offset + 1, l.end.offset))), t && this._reportError('Assigning animation triggers via @prop="exp" attributes with an expression is invalid. Use property bindings (e.g. [@prop]="exp") or use an attribute without a value (e.g. @prop) instead.', s, mn.ERROR), this._parseLegacyAnimation(e, t, s, r, l, i, a, o)) : o.push(new ys(e, this._exprParser.wrapLiteralPrimitive(t, "", r), Lt.LITERAL_ATTR, s, l, i)); }
    parsePropertyBinding(e, t, s, r, i, a, o, l, c, h) { e.length === 0 && this._reportError("Property name is missing in binding", i); let p = !1; e.startsWith(ko) ? (p = !0, e = e.substring(ko.length), h !== void 0 && (h = cn(h, new Ze(h.start.offset + ko.length, h.end.offset)))) : To(e) && (p = !0, e = e.substring(1), h !== void 0 && (h = cn(h, new Ze(h.start.offset + 1, h.end.offset)))), p ? this._parseLegacyAnimation(e, t, i, a, h, o, l, c) : e.startsWith(`${_o}${$i}`) ? this._parseAnimation(e, this.parseBinding(t, s, o || i, a), i, h, o, l, c) : this._parsePropertyAst(e, this.parseBinding(t, s, o || i, a), r, i, h, o, l, c); }
    parsePropertyInterpolation(e, t, s, r, i, a, o, l) { let c = this.parseInterpolation(t, r || s, l); return c ? (this._parsePropertyAst(e, c, !1, s, o, r, i, a), !0) : !1; }
    _parsePropertyAst(e, t, s, r, i, a, o, l) { o.push([e, t.source]), l.push(new ys(e, t, s ? Lt.TWO_WAY : Lt.DEFAULT, r, i, a)); }
    _parseAnimation(e, t, s, r, i, a, o) { a.push([e, t.source]), o.push(new ys(e, t, Lt.ANIMATION, s, r, i)); }
    _parseLegacyAnimation(e, t, s, r, i, a, o, l) { e.length === 0 && this._reportError("Animation trigger is missing", s); let c = this.parseBinding(t || "undefined", !1, a || s, r); o.push([e, c.source]), l.push(new ys(e, c, Lt.LEGACY_ANIMATION, s, i, a)); }
    parseBinding(e, t, s, r) { try {
        let i = t ? this._exprParser.parseSimpleBinding(e, s, r, this._interpolationConfig) : this._exprParser.parseBinding(e, s, r, this._interpolationConfig);
        return i && this.errors.push(...i.errors), i;
    }
    catch (i) {
        return this._reportError(`${i}`, s), this._exprParser.wrapLiteralPrimitive("ERROR", s, r);
    } }
    createBoundElementProperty(e, t, s = !1, r = !0) { if (t.isLegacyAnimation)
        return new oa(t.name, G.LegacyAnimation, ne.NONE, t.expression, null, t.sourceSpan, t.keySpan, t.valueSpan); let i = null, a, o = null, l = t.name.split($i), c; if (l.length > 1)
        if (l[0] == Vx) {
            o = l.slice(1).join($i), s || this._validatePropertyOrAttributeName(o, t.sourceSpan, !0), c = bo(this._schemaRegistry, e, o, !0);
            let h = o.indexOf(":");
            if (h > -1) {
                let p = o.substring(0, h), g = o.substring(h + 1);
                o = Ui(p, g);
            }
            a = G.Attribute;
        }
        else
            l[0] == qx ? (o = l[1], a = G.Class, c = [ne.NONE]) : l[0] == Ux ? (i = l.length > 2 ? l[2] : null, o = l[1], a = G.Style, c = [ne.STYLE]) : l[0] == _o && (o = t.name, a = G.Animation, c = [ne.NONE]); if (o === null) {
        let h = this._schemaRegistry.getMappedPropName(t.name);
        o = r ? h : t.name, c = bo(this._schemaRegistry, e, h, !1), a = t.type === Lt.TWO_WAY ? G.TwoWay : G.Property, s || this._validatePropertyOrAttributeName(h, t.sourceSpan, !1);
    } return new oa(o, a, c[0], t.expression, i, t.sourceSpan, t.keySpan, t.valueSpan); }
    parseEvent(e, t, s, r, i, a, o, l) { e.length === 0 && this._reportError("Event name is missing in binding", r), To(e) ? (e = e.slice(1), l !== void 0 && (l = cn(l, new Ze(l.start.offset + 1, l.end.offset))), this._parseLegacyAnimationEvent(e, t, r, i, o, l)) : this._parseRegularEvent(e, t, s, r, i, a, o, l); }
    calcPossibleSecurityContexts(e, t, s) { let r = this._schemaRegistry.getMappedPropName(t); return bo(this._schemaRegistry, e, r, s); }
    parseEventListenerName(e) { let [t, s] = zd(e, [null, e]); return { eventName: s, target: t }; }
    parseLegacyAnimationEventName(e) { let t = Gd(e, [e, null]); return { eventName: t[0], phase: t[1] === null ? null : t[1].toLowerCase() }; }
    _parseLegacyAnimationEvent(e, t, s, r, i, a) { let { eventName: o, phase: l } = this.parseLegacyAnimationEventName(e), c = this._parseAction(t, r); i.push(new aa(o, l, Be.LegacyAnimation, c, s, r, a)), o.length === 0 && this._reportError("Animation event name is missing in binding", s), l ? l !== "start" && l !== "done" && this._reportError(`The provided animation output phase value "${l}" for "@${o}" is not supported (use start or done)`, s) : this._reportError(`The animation trigger output event (@${o}) is missing its phase value name (start or done are currently supported)`, s); }
    _parseRegularEvent(e, t, s, r, i, a, o, l) { let { eventName: c, target: h } = this.parseEventListenerName(e), p = this.errors.length, g = this._parseAction(t, i), v = this.errors.length === p; a.push([e, g.source]), s && v && !this._isAllowedAssignmentEvent(g) && this._reportError("Unsupported expression in a two-way binding", r); let E = Be.Regular; s && (E = Be.TwoWay), e.startsWith(`${_o}${$i}`) && (E = Be.Animation), o.push(new aa(c, h, E, g, r, i, l)); }
    _parseAction(e, t) { let s = t && t.start ? t.start.offset : 0; try {
        let r = this._exprParser.parseAction(e, t, s, this._interpolationConfig);
        return r && this.errors.push(...r.errors), !r || r.ast instanceof $e ? (this._reportError("Empty expressions are not allowed", t), this._exprParser.wrapLiteralPrimitive("ERROR", t, s)) : r;
    }
    catch (r) {
        return this._reportError(`${r}`, t), this._exprParser.wrapLiteralPrimitive("ERROR", t, s);
    } }
    _reportError(e, t, s = mn.ERROR) { this.errors.push(new N(t, e, s)); }
    _validatePropertyOrAttributeName(e, t, s) { let r = s ? this._schemaRegistry.validateAttribute(e) : this._schemaRegistry.validateProperty(e); r.error && this._reportError(r.msg, t, mn.ERROR); }
    _isAllowedAssignmentEvent(e) { return e instanceof Xe ? this._isAllowedAssignmentEvent(e.ast) : e instanceof Rr ? this._isAllowedAssignmentEvent(e.expression) : e instanceof Fs && e.args.length === 1 && e.receiver instanceof Jt && e.receiver.name === "$any" && e.receiver.receiver instanceof $t && !(e.receiver.receiver instanceof ss) ? this._isAllowedAssignmentEvent(e.args[0]) : (e instanceof Jt || e instanceof rs) && !Yl(e); }
};
function Yl(n) { return n instanceof Dr || n instanceof Pr ? !0 : n instanceof Or ? Yl(n.expression) : n instanceof Jt || n instanceof rs || n instanceof Fs ? Yl(n.receiver) : !1; }
function To(n) { return n[0] == "@"; }
function bo(n, e, t, s) { let r, i = a => n.securityContext(a, t, s); return e === null ? r = n.allKnownElementNames().map(i) : (r = [], Jn.parse(e).forEach(a => { let o = a.element ? [a.element] : n.allKnownElementNames(), l = new Set(a.notSelectors.filter(h => h.isElementSelector()).map(h => h.element)), c = o.filter(h => !l.has(h)); r.push(...c.map(i)); })), r.length === 0 ? [ne.NONE] : Array.from(new Set(r)).sort(); }
function cn(n, e) { let t = e.start - n.start.offset, s = e.end - n.end.offset; return new L(n.start.moveBy(t), n.end.moveBy(s), n.fullStart.moveBy(t), n.details); }
function Wx(n) { if (n == null || n.length === 0 || n[0] == "/")
    return !1; let e = n.match(jx); return e === null || e[1] == "package" || e[1] == "asset"; }
var jx = /^([^:/?#]+):/, zx = "select", Gx = "link", Xx = "rel", Yx = "href", Qx = "stylesheet", Zx = "style", Jx = "script", Kx = "ngNonBindable", ey = "ngProjectAs";
function Hf(n) { let e = null, t = null, s = null, r = !1, i = ""; n.attrs.forEach(l => { let c = l.name.toLowerCase(); c == zx ? e = l.value : c == Yx ? t = l.value : c == Xx ? s = l.value : l.name == Kx ? r = !0 : l.name == ey && l.value.length > 0 && (i = l.value); }), e = ty(e); let a = n.name.toLowerCase(), o = Qe.OTHER; return Ko(a) ? o = Qe.NG_CONTENT : a == Zx ? o = Qe.STYLE : a == Jx ? o = Qe.SCRIPT : a == Gx && s == Qx && (o = Qe.STYLESHEET), new Ql(o, e, t, r, i); }
var Qe = (function (n) { return n[n.NG_CONTENT = 0] = "NG_CONTENT", n[n.STYLE = 1] = "STYLE", n[n.STYLESHEET = 2] = "STYLESHEET", n[n.SCRIPT = 3] = "SCRIPT", n[n.OTHER = 4] = "OTHER", n; })(Qe || {}), Ql = class {
    type;
    selectAttr;
    hrefAttr;
    nonBindable;
    projectAs;
    constructor(e, t, s, r, i) { this.type = e, this.selectAttr = t, this.hrefAttr = s, this.nonBindable = r, this.projectAs = i; }
};
function ty(n) { return n === null || n.length === 0 ? "*" : n; }
var ny = /^\s*([0-9A-Za-z_$]*)\s+of\s+([\S\s]*)/, sy = /^track\s+([\S\s]*)/, ry = /^(as\s+)(.*)/, fo = /^else[^\S\r\n]+if/, iy = /^let\s+([\S\s]*)/, ay = /^[$A-Z_][0-9A-Z_$]*$/i, _h = /(\s*)(\S+)(\s*)/, xr = new Set(["$index", "$first", "$last", "$even", "$odd", "$count"]);
function kh(n) { return n === "empty"; }
function Th(n) { return n === "else" || fo.test(n); }
function oy(n, e, t, s) { let r = fy(e), i = [], a = bh(n, r, s); a !== null && i.push(new Gn(a.expression, P(t, n.children, n.children), a.expressionAlias, n.sourceSpan, n.startSourceSpan, n.endSourceSpan, n.nameSpan, n.i18n)); for (let p of e)
    if (fo.test(p.name)) {
        let g = bh(p, r, s);
        if (g !== null) {
            let v = P(t, p.children, p.children);
            i.push(new Gn(g.expression, v, g.expressionAlias, p.sourceSpan, p.startSourceSpan, p.endSourceSpan, p.nameSpan, p.i18n));
        }
    }
    else if (p.name === "else") {
        let g = P(t, p.children, p.children);
        i.push(new Gn(null, g, null, p.sourceSpan, p.startSourceSpan, p.endSourceSpan, p.nameSpan, p.i18n));
    } let o = i.length > 0 ? i[0].startSourceSpan : n.startSourceSpan, l = i.length > 0 ? i[i.length - 1].endSourceSpan : n.endSourceSpan, c = n.sourceSpan, h = i[i.length - 1]; return h !== void 0 && (c = new L(o.start, h.sourceSpan.end)), { node: new fa(i, c, n.startSourceSpan, l, n.nameSpan), errors: r }; }
function ly(n, e, t, s) { let r = [], i = uy(n, r, s), a = null, o = null; for (let l of e)
    l.name === "empty" ? o !== null ? r.push(new N(l.sourceSpan, "@for loop can only have one @empty block")) : l.parameters.length > 0 ? r.push(new N(l.sourceSpan, "@empty block cannot have parameters")) : o = new zr(P(t, l.children, l.children), l.sourceSpan, l.startSourceSpan, l.endSourceSpan, l.nameSpan, l.i18n) : r.push(new N(l.sourceSpan, `Unrecognized @for loop block "${l.name}"`)); if (i !== null)
    if (i.trackBy === null)
        r.push(new N(n.startSourceSpan, '@for loop must have a "track" expression'));
    else {
        let l = o?.endSourceSpan ?? n.endSourceSpan, c = new L(n.sourceSpan.start, l?.end ?? n.sourceSpan.end);
        hy(i.trackBy.expression, i.trackBy.keywordSpan, r), a = new Vs(i.itemName, i.expression, i.trackBy.expression, i.trackBy.keywordSpan, i.context, P(t, n.children, n.children), o, c, n.sourceSpan, n.startSourceSpan, l, n.nameSpan, n.i18n);
    } return { node: a, errors: r }; }
function cy(n, e, t) { let s = dy(n), r = n.parameters.length > 0 ? vi(n.parameters[0], t) : t.parseBinding("", !1, n.sourceSpan, 0), i = [], a = [], o = null; for (let l of n.children) {
    if (!(l instanceof at))
        continue;
    if ((l.name !== "case" || l.parameters.length === 0) && l.name !== "default") {
        a.push(new da(l.name, l.sourceSpan, l.nameSpan));
        continue;
    }
    let c = l.name === "case" ? vi(l.parameters[0], t) : null, h = new jr(c, P(e, l.children, l.children), l.sourceSpan, l.startSourceSpan, l.endSourceSpan, l.nameSpan, l.i18n);
    c === null ? o = h : i.push(h);
} return o !== null && i.push(o), { node: new pa(r, i, a, n.sourceSpan, n.startSourceSpan, n.endSourceSpan, n.nameSpan), errors: s }; }
function uy(n, e, t) { if (n.parameters.length === 0)
    return e.push(new N(n.startSourceSpan, "@for loop does not have an expression")), null; let [s, ...r] = n.parameters, i = my(s, e)?.match(ny); if (!i || i[2].trim().length === 0)
    return e.push(new N(s.sourceSpan, 'Cannot parse expression. @for loop expression must match the pattern "<identifier> of <expression>"')), null; let [, a, o] = i; xr.has(a) && e.push(new N(s.sourceSpan, `@for loop item name cannot be one of ${Array.from(xr).join(", ")}.`)); let l = s.expression.split(" ")[0], c = new L(s.sourceSpan.start, s.sourceSpan.start.moveBy(l.length)), h = { itemName: new _n(a, "$implicit", c, c), trackBy: null, expression: vi(s, t, o), context: Array.from(xr, p => { let g = new L(n.startSourceSpan.end, n.startSourceSpan.end); return new _n(p, p, g, g); }) }; for (let p of r) {
    let g = p.expression.match(iy);
    if (g !== null) {
        let E = new L(p.sourceSpan.start.moveBy(g[0].length - g[1].length), p.sourceSpan.end);
        py(p.sourceSpan, g[1], E, a, h.context, e);
        continue;
    }
    let v = p.expression.match(sy);
    if (v !== null) {
        if (h.trackBy !== null)
            e.push(new N(p.sourceSpan, '@for loop can only have one "track" expression'));
        else {
            let E = vi(p, t, v[1]);
            E.ast instanceof $e && e.push(new N(n.startSourceSpan, '@for loop must have a "track" expression'));
            let C = new L(p.sourceSpan.start, p.sourceSpan.start.moveBy(5));
            h.trackBy = { expression: E, keywordSpan: C };
        }
        continue;
    }
    e.push(new N(p.sourceSpan, `Unrecognized @for loop parameter "${p.expression}"`));
} return h; }
function hy(n, e, t) { let s = new Zl; n.ast.visit(s), s.hasPipe && t.push(new N(e, "Cannot use pipes in track expressions")); }
function py(n, e, t, s, r, i) { let a = e.split(","), o = t.start; for (let l of a) {
    let c = l.split("="), h = c.length === 2 ? c[0].trim() : "", p = c.length === 2 ? c[1].trim() : "";
    if (h.length === 0 || p.length === 0)
        i.push(new N(n, 'Invalid @for loop "let" parameter. Parameter should match the pattern "<name> = <variable name>"'));
    else if (!xr.has(p))
        i.push(new N(n, `Unknown "let" parameter variable "${p}". The allowed variables are: ${Array.from(xr).join(", ")}`));
    else if (h === s)
        i.push(new N(n, `Invalid @for loop "let" parameter. Variable cannot be called "${s}"`));
    else if (r.some(g => g.name === h))
        i.push(new N(n, `Duplicate "let" parameter variable "${p}"`));
    else {
        let [, g, v] = c[0].match(_h) ?? [], E = g !== void 0 && c.length === 2 ? new L(o.moveBy(g.length), o.moveBy(g.length + v.length)) : t, C;
        if (c.length === 2) {
            let [, A, F] = c[1].match(_h) ?? [];
            C = A !== void 0 ? new L(o.moveBy(c[0].length + 1 + A.length), o.moveBy(c[0].length + 1 + A.length + F.length)) : void 0;
        }
        let b = new L(E.start, C?.end ?? E.end);
        r.push(new _n(h, p, b, E, C));
    }
    o = o.moveBy(l.length + 1);
} }
function fy(n) { let e = [], t = !1; for (let s = 0; s < n.length; s++) {
    let r = n[s];
    r.name === "else" ? (t ? e.push(new N(r.startSourceSpan, "Conditional can only have one @else block")) : n.length > 1 && s < n.length - 1 ? e.push(new N(r.startSourceSpan, "@else block must be last inside the conditional")) : r.parameters.length > 0 && e.push(new N(r.startSourceSpan, "@else block cannot have parameters")), t = !0) : fo.test(r.name) || e.push(new N(r.startSourceSpan, `Unrecognized conditional block @${r.name}`));
} return e; }
function dy(n) { let e = [], t = !1; if (n.parameters.length !== 1)
    return e.push(new N(n.startSourceSpan, "@switch block must have exactly one parameter")), e; for (let s of n.children)
    if (!(s instanceof Nn || s instanceof on && s.value.trim().length === 0)) {
        if (!(s instanceof at) || s.name !== "case" && s.name !== "default") {
            e.push(new N(s.sourceSpan, "@switch block can only contain @case and @default blocks"));
            continue;
        }
        s.name === "default" ? (t ? e.push(new N(s.startSourceSpan, "@switch block can only have one @default block")) : s.parameters.length > 0 && e.push(new N(s.startSourceSpan, "@default block cannot have parameters")), t = !0) : s.name === "case" && s.parameters.length !== 1 && e.push(new N(s.startSourceSpan, "@case block must have exactly one parameter"));
    } return e; }
function vi(n, e, t) { let s, r; return typeof t == "string" ? (s = Math.max(0, n.expression.lastIndexOf(t)), r = s + t.length) : (s = 0, r = n.expression.length), e.parseBinding(n.expression.slice(s, r), !1, n.sourceSpan, n.sourceSpan.start.offset + s); }
function bh(n, e, t) { if (n.parameters.length === 0)
    return e.push(new N(n.startSourceSpan, "Conditional block does not have an expression")), null; let s = vi(n.parameters[0], t), r = null; for (let i = 1; i < n.parameters.length; i++) {
    let a = n.parameters[i], o = a.expression.match(ry);
    if (o === null)
        e.push(new N(a.sourceSpan, `Unrecognized conditional parameter "${a.expression}"`));
    else if (n.name !== "if" && !fo.test(n.name))
        e.push(new N(a.sourceSpan, '"as" expression is only allowed on `@if` and `@else if` blocks'));
    else if (r !== null)
        e.push(new N(a.sourceSpan, 'Conditional can only have one "as" expression'));
    else {
        let l = o[2].trim();
        if (ay.test(l)) {
            let c = a.sourceSpan.start.moveBy(o[1].length), h = new L(c, c.moveBy(l.length));
            r = new _n(l, l, h, h);
        }
        else
            e.push(new N(a.sourceSpan, '"as" expression must be a valid JavaScript identifier'));
    }
} return { expression: s, expressionAlias: r }; }
function my(n, e) { let t = n.expression, s = /^\s$/, r = 0, i = 0, a = t.length - 1; for (let o = 0; o < t.length; o++) {
    let l = t[o];
    if (l === "(")
        i = o + 1, r++;
    else {
        if (s.test(l))
            continue;
        break;
    }
} if (r === 0)
    return t; for (let o = t.length - 1; o > -1; o--) {
    let l = t[o];
    if (l === ")") {
        if (a = o, r--, r === 0)
            break;
    }
    else {
        if (s.test(l))
            continue;
        break;
    }
} return r !== 0 ? (e.push(new N(n.sourceSpan, "Unclosed parentheses in expression")), null) : t.slice(i, a); }
var Zl = class extends qr {
    hasPipe = !1;
    visitPipe() { this.hasPipe = !0; }
}, gy = /^\d+\.?\d*(ms|s)?$/, vy = /^\s$/, Ih = new Map([[yt, Le], [vn, Hn], [At, Pe]]), Ve = (function (n) { return n.IDLE = "idle", n.TIMER = "timer", n.INTERACTION = "interaction", n.IMMEDIATE = "immediate", n.HOVER = "hover", n.VIEWPORT = "viewport", n.NEVER = "never", n; })(Ve || {});
function wy({ expression: n, sourceSpan: e }, t, s) { let r = n.indexOf("never"), i = new L(e.start.moveBy(r), e.start.moveBy(r + 5)), a = Jc(n, e), o = Kc(n, e); r === -1 ? s.push(new N(e, 'Could not find "never" keyword in expression')) : eu("never", t, s, new sl(i, e, a, null, o)); }
function Io({ expression: n, sourceSpan: e }, t, s, r) { let i = n.indexOf("when"), a = new L(e.start.moveBy(i), e.start.moveBy(i + 4)), o = Jc(n, e), l = Kc(n, e); if (i === -1)
    r.push(new N(e, 'Could not find "when" keyword in expression'));
else {
    let c = wi(n, i + 1), h = t.parseBinding(n.slice(c), !1, e, e.start.offset + c);
    eu("when", s, r, new la(h, e, o, a, l));
} }
function No({ expression: n, sourceSpan: e }, t, s, r) { let i = n.indexOf("on"), a = new L(e.start.moveBy(i), e.start.moveBy(i + 2)), o = Jc(n, e), l = Kc(n, e); if (i === -1)
    s.push(new N(e, 'Could not find "on" keyword in expression'));
else {
    let c = wi(n, i + 1);
    new Jl(n, c, e, t, s, n.startsWith("hydrate") ? ky : _y, r, o, a, l).parse();
} }
function Jc(n, e) { return n.startsWith("prefetch") ? new L(e.start, e.start.moveBy(8)) : null; }
function Kc(n, e) { return n.startsWith("hydrate") ? new L(e.start, e.start.moveBy(7)) : null; }
var Jl = class {
    expression;
    start;
    span;
    triggers;
    errors;
    validator;
    placeholder;
    prefetchSpan;
    onSourceSpan;
    hydrateSpan;
    index = 0;
    tokens;
    constructor(e, t, s, r, i, a, o, l, c, h) { this.expression = e, this.start = t, this.span = s, this.triggers = r, this.errors = i, this.validator = a, this.placeholder = o, this.prefetchSpan = l, this.onSourceSpan = c, this.hydrateSpan = h, this.tokens = new di().tokenize(e.slice(t)); }
    parse() { for (; this.tokens.length > 0 && this.index < this.tokens.length;) {
        let e = this.token();
        if (!e.isIdentifier()) {
            this.unexpectedToken(e);
            break;
        }
        if (this.isFollowedByOrLast(ht))
            this.consumeTrigger(e, []), this.advance();
        else if (this.isFollowedByOrLast(At)) {
            this.advance();
            let t = this.errors.length, s = this.consumeParameters();
            if (this.errors.length !== t)
                break;
            this.consumeTrigger(e, s), this.advance();
        }
        else
            this.index < this.tokens.length - 1 && this.unexpectedToken(this.tokens[this.index + 1]);
        this.advance();
    } }
    advance() { this.index++; }
    isFollowedByOrLast(e) { return this.index === this.tokens.length - 1 ? !0 : this.tokens[this.index + 1].isCharacter(e); }
    token() { return this.tokens[Math.min(this.index, this.tokens.length - 1)]; }
    consumeTrigger(e, t) { let s = this.span.start.moveBy(this.start + e.index - this.tokens[0].index), r = new L(s, s.moveBy(e.strValue.length)), i = s.moveBy(this.token().end - e.index), a = e.index === 0, o = a ? this.onSourceSpan : null, l = a ? this.prefetchSpan : null, c = a ? this.hydrateSpan : null, h = new L(a ? this.span.start : s, i); try {
        switch (e.toString()) {
            case Ve.IDLE:
                this.trackTrigger("idle", Ey(t, r, h, l, o, c));
                break;
            case Ve.TIMER:
                this.trackTrigger("timer", Sy(t, r, h, this.prefetchSpan, this.onSourceSpan, this.hydrateSpan));
                break;
            case Ve.INTERACTION:
                this.trackTrigger("interaction", Cy(t, r, h, this.prefetchSpan, this.onSourceSpan, this.hydrateSpan, this.validator));
                break;
            case Ve.IMMEDIATE:
                this.trackTrigger("immediate", xy(t, r, h, this.prefetchSpan, this.onSourceSpan, this.hydrateSpan));
                break;
            case Ve.HOVER:
                this.trackTrigger("hover", yy(t, r, h, this.prefetchSpan, this.onSourceSpan, this.hydrateSpan, this.placeholder, this.validator));
                break;
            case Ve.VIEWPORT:
                this.trackTrigger("viewport", Ay(t, r, h, this.prefetchSpan, this.onSourceSpan, this.hydrateSpan, this.validator));
                break;
            default: throw new Error(`Unrecognized trigger type "${e}"`);
        }
    }
    catch (p) {
        this.error(e, p.message);
    } }
    consumeParameters() { let e = []; if (!this.token().isCharacter(At))
        return this.unexpectedToken(this.token()), e; this.advance(); let t = [], s = ""; for (; this.index < this.tokens.length;) {
        let r = this.token();
        if (r.isCharacter(Pe) && t.length === 0) {
            s.length && e.push(s);
            break;
        }
        if (r.type === O.Character && Ih.has(r.numValue) && t.push(Ih.get(r.numValue)), t.length > 0 && r.isCharacter(t[t.length - 1]) && t.pop(), t.length === 0 && r.isCharacter(ht) && s.length > 0) {
            e.push(s), s = "", this.advance();
            continue;
        }
        s += this.tokenText(), this.advance();
    } return (!this.token().isCharacter(Pe) || t.length > 0) && this.error(this.token(), "Unexpected end of expression"), this.index < this.tokens.length - 1 && !this.tokens[this.index + 1].isCharacter(ht) && this.unexpectedToken(this.tokens[this.index + 1]), e; }
    tokenText() { return this.expression.slice(this.start + this.token().index, this.start + this.token().end); }
    trackTrigger(e, t) { eu(e, this.triggers, this.errors, t); }
    error(e, t) { let s = this.span.start.moveBy(this.start + e.index), r = s.moveBy(e.end - e.index); this.errors.push(new N(new L(s, r), t)); }
    unexpectedToken(e) { this.error(e, `Unexpected token "${e}"`); }
};
function eu(n, e, t, s) { e[n] ? t.push(new N(s.sourceSpan, `Duplicate "${n}" trigger is not allowed`)) : e[n] = s; }
function Ey(n, e, t, s, r, i) { if (n.length > 0)
    throw new Error(`"${Ve.IDLE}" trigger cannot have parameters`); return new rl(e, t, s, r, i); }
function Sy(n, e, t, s, r, i) { if (n.length !== 1)
    throw new Error(`"${Ve.TIMER}" trigger must have exactly one parameter`); let a = Xa(n[0]); if (a === null)
    throw new Error(`Could not parse time value of trigger "${Ve.TIMER}"`); return new al(a, e, t, s, r, i); }
function xy(n, e, t, s, r, i) { if (n.length > 0)
    throw new Error(`"${Ve.IMMEDIATE}" trigger cannot have parameters`); return new il(e, t, s, r, i); }
function yy(n, e, t, s, r, i, a, o) { return o(Ve.HOVER, n), new ca(n[0] ?? null, e, t, s, r, i); }
function Cy(n, e, t, s, r, i, a) { return a(Ve.INTERACTION, n), new ua(n[0] ?? null, e, t, s, r, i); }
function Ay(n, e, t, s, r, i, a) { return a(Ve.VIEWPORT, n), new ha(n[0] ?? null, e, t, s, r, i); }
function _y(n, e) { if (e.length > 1)
    throw new Error(`"${n}" trigger can only have zero or one parameters`); }
function ky(n, e) { if (e.length > 0)
    throw new Error(`Hydration trigger "${n}" cannot have parameters`); }
function wi(n, e = 0) { let t = !1; for (let s = e; s < n.length; s++)
    if (vy.test(n[s]))
        t = !0;
    else if (t)
        return s; return -1; }
function Xa(n) { let e = n.match(gy); if (!e)
    return null; let [t, s] = e; return parseFloat(t) * (s === "s" ? 1e3 : 1); }
var Ty = /^prefetch\s+when\s/, by = /^prefetch\s+on\s/, Iy = /^hydrate\s+when\s/, Ny = /^hydrate\s+on\s/, Dy = /^hydrate\s+never(\s*)$/, Wf = /^minimum\s/, Py = /^after\s/, Ly = /^when\s/, By = /^on\s/;
function Kl(n) { return n === "placeholder" || n === "loading" || n === "error"; }
function My(n, e, t, s) { let r = [], { placeholder: i, loading: a, error: o } = Ry(e, r, t), { triggers: l, prefetchTriggers: c, hydrateTriggers: h } = Vy(n, s, r, i), p = n.endSourceSpan, g = n.sourceSpan.end; if (e.length > 0) {
    let C = e[e.length - 1];
    p = C.endSourceSpan, g = C.sourceSpan.end;
} let v = new L(n.sourceSpan.start, g); return { node: new is(P(t, n.children, n.children), l, c, h, i, a, o, n.nameSpan, v, n.sourceSpan, n.startSourceSpan, p, n.i18n), errors: r }; }
function Ry(n, e, t) { let s = null, r = null, i = null; for (let a of n)
    try {
        if (!Kl(a.name)) {
            e.push(new N(a.startSourceSpan, `Unrecognized block "@${a.name}"`));
            break;
        }
        switch (a.name) {
            case "placeholder":
                s !== null ? e.push(new N(a.startSourceSpan, "@defer block can only have one @placeholder block")) : s = Fy(a, t);
                break;
            case "loading":
                r !== null ? e.push(new N(a.startSourceSpan, "@defer block can only have one @loading block")) : r = $y(a, t);
                break;
            case "error":
                i !== null ? e.push(new N(a.startSourceSpan, "@defer block can only have one @error block")) : i = Oy(a, t);
                break;
        }
    }
    catch (o) {
        e.push(new N(a.startSourceSpan, o.message));
    } return { placeholder: s, loading: r, error: i }; }
function Fy(n, e) { let t = null; for (let s of n.parameters)
    if (Wf.test(s.expression)) {
        if (t != null)
            throw new Error('@placeholder block can only have one "minimum" parameter');
        let r = Xa(s.expression.slice(wi(s.expression)));
        if (r === null)
            throw new Error('Could not parse time value of parameter "minimum"');
        t = r;
    }
    else
        throw new Error(`Unrecognized parameter in @placeholder block: "${s.expression}"`); return new Ur(P(e, n.children, n.children), t, n.nameSpan, n.sourceSpan, n.startSourceSpan, n.endSourceSpan, n.i18n); }
function $y(n, e) { let t = null, s = null; for (let r of n.parameters)
    if (Py.test(r.expression)) {
        if (t != null)
            throw new Error('@loading block can only have one "after" parameter');
        let i = Xa(r.expression.slice(wi(r.expression)));
        if (i === null)
            throw new Error('Could not parse time value of parameter "after"');
        t = i;
    }
    else if (Wf.test(r.expression)) {
        if (s != null)
            throw new Error('@loading block can only have one "minimum" parameter');
        let i = Xa(r.expression.slice(wi(r.expression)));
        if (i === null)
            throw new Error('Could not parse time value of parameter "minimum"');
        s = i;
    }
    else
        throw new Error(`Unrecognized parameter in @loading block: "${r.expression}"`); return new Hr(P(e, n.children, n.children), t, s, n.nameSpan, n.sourceSpan, n.startSourceSpan, n.endSourceSpan, n.i18n); }
function Oy(n, e) { if (n.parameters.length > 0)
    throw new Error("@error block cannot have parameters"); return new Wr(P(e, n.children, n.children), n.nameSpan, n.sourceSpan, n.startSourceSpan, n.endSourceSpan, n.i18n); }
function Vy(n, e, t, s) { let r = {}, i = {}, a = {}; for (let o of n.parameters)
    Ly.test(o.expression) ? Io(o, e, r, t) : By.test(o.expression) ? No(o, r, t, s) : Ty.test(o.expression) ? Io(o, e, i, t) : by.test(o.expression) ? No(o, i, t, s) : Iy.test(o.expression) ? Io(o, e, a, t) : Ny.test(o.expression) ? No(o, a, t, s) : Dy.test(o.expression) ? wy(o, a, t) : t.push(new N(o.sourceSpan, "Unrecognized trigger")); return a.never && Object.keys(a).length > 1 && t.push(new N(n.startSourceSpan, "Cannot specify additional `hydrate` triggers if `hydrate never` is present")), { triggers: r, prefetchTriggers: i, hydrateTriggers: a }; }
var qy = /^(?:(bind-)|(let-)|(ref-|#)|(on-)|(bindon-)|(@))(.*)$/, Nh = 1, Dh = 2, Ph = 3, Lh = 4, Bh = 5, Uy = 6, cr = 7, un = { BANANA_BOX: { start: "[(", end: ")]" }, PROPERTY: { start: "[", end: "]" }, EVENT: { start: "(", end: ")" } }, Do = "*", Hy = new Set(["link", "style", "script", "ng-template", "ng-container", "ng-content"]), Wy = new Set(["ngProjectAs", "ngNonBindable"]);
function jy(n, e, t) { let s = new ec(e, t), r = P(s, n, n), i = e.errors.concat(s.errors), a = { nodes: r, errors: i, styleUrls: s.styleUrls, styles: s.styles, ngContentSelectors: s.ngContentSelectors }; return t.collectCommentNodes && (a.commentNodes = s.commentNodes), a; }
var ec = class {
    bindingParser;
    options;
    errors = [];
    styles = [];
    styleUrls = [];
    ngContentSelectors = [];
    commentNodes = [];
    inI18nBlock = !1;
    processedNodes = new Set;
    constructor(e, t) { this.bindingParser = e, this.options = t; }
    visitElement(e) { let t = ji(e.i18n); t && (this.inI18nBlock && this.reportError("Cannot mark an element as translatable inside of a translatable section. Please remove the nested i18n marker.", e.sourceSpan), this.inI18nBlock = !0); let s = Hf(e); if (s.type === Qe.SCRIPT)
        return null; if (s.type === Qe.STYLE) {
        let A = zy(e);
        return A !== null && this.styles.push(A), null;
    }
    else if (s.type === Qe.STYLESHEET && Wx(s.hrefAttr))
        return this.styleUrls.push(s.hrefAttr), null; let r = hm(e.name), { attributes: i, boundEvents: a, references: o, variables: l, templateVariables: c, elementHasInlineTemplate: h, parsedProperties: p, templateParsedProperties: g, i18nAttrsMeta: v } = this.prepareAttributes(e.attrs, r), E = this.extractDirectives(e), C; s.nonBindable ? C = P(Mh, e.children).flat(1 / 0) : C = P(this, e.children, e.children); let b; if (s.type === Qe.NG_CONTENT) {
        let A = s.selectAttr, F = e.attrs.map(ee => this.visitAttribute(ee));
        b = new qs(A, F, C, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n), this.ngContentSelectors.push(A);
    }
    else if (r) {
        let A = this.categorizePropertyAttributes(e.name, p, v);
        b = new Ke(e.name, i, A.bound, a, E, [], C, o, l, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n);
    }
    else {
        let A = this.categorizePropertyAttributes(e.name, p, v);
        if (e.name === "ng-container")
            for (let F of A.bound)
                F.type === G.Attribute && this.reportError("Attribute bindings are not supported on ng-container. Use property bindings instead.", F.sourceSpan);
        b = new Ot(e.name, i, A.bound, a, E, C, o, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.isVoid, e.i18n);
    } return h && (b = this.wrapInTemplate(b, g, c, v, r, t)), t && (this.inI18nBlock = !1), b; }
    visitAttribute(e) { return new Os(e.name, e.value, e.sourceSpan, e.keySpan, e.valueSpan, e.i18n); }
    visitText(e) { return this.processedNodes.has(e) ? null : this._visitTextWithInterpolation(e.value, e.sourceSpan, e.tokens, e.i18n); }
    visitExpansion(e) { if (!e.i18n)
        return null; if (!ji(e.i18n))
        throw new Error(`Invalid type "${e.i18n.constructor}" for "i18n" property of ${e.sourceSpan.toString()}. Expected a "Message"`); let t = e.i18n, s = {}, r = {}; return Object.keys(t.placeholders).forEach(i => { let a = t.placeholders[i]; if (i.startsWith(ym)) {
        let o = i.trim(), l = this.bindingParser.parseInterpolationExpression(a.text, a.sourceSpan);
        s[o] = new $s(l, a.sourceSpan);
    }
    else
        r[i] = this._visitTextWithInterpolation(a.text, a.sourceSpan, null); }), new Sp(s, r, e.sourceSpan, t); }
    visitExpansionCase(e) { return null; }
    visitComment(e) { return this.options.collectCommentNodes && this.commentNodes.push(new oo(e.value || "", e.sourceSpan)), null; }
    visitLetDeclaration(e, t) { let s = this.bindingParser.parseBinding(e.value, !1, e.valueSpan, e.valueSpan.start.offset); return s.errors.length === 0 && s.ast instanceof $e && this.reportError("@let declaration value cannot be empty", e.valueSpan), new Pc(e.name, s, e.sourceSpan, e.nameSpan, e.valueSpan); }
    visitComponent(e) { let t = ji(e.i18n); if (t && (this.inI18nBlock && this.reportError("Cannot mark a component as translatable inside of a translatable section. Please remove the nested i18n marker.", e.sourceSpan), this.inI18nBlock = !0), e.tagName !== null && Hy.has(e.tagName))
        return this.reportError(`Tag name "${e.tagName}" cannot be used as a component tag`, e.startSourceSpan), null; let { attributes: s, boundEvents: r, references: i, templateVariables: a, elementHasInlineTemplate: o, parsedProperties: l, templateParsedProperties: c, i18nAttrsMeta: h } = this.prepareAttributes(e.attrs, !1); this.validateSelectorlessReferences(i); let p = this.extractDirectives(e), g; e.attrs.find(C => C.name === "ngNonBindable") ? g = P(Mh, e.children).flat(1 / 0) : g = P(this, e.children, e.children); let v = this.categorizePropertyAttributes(e.tagName, l, h), E = new vr(e.componentName, e.tagName, e.fullName, s, v.bound, r, p, g, i, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n); return o && (E = this.wrapInTemplate(E, c, a, h, !1, t)), t && (this.inI18nBlock = !1), E; }
    visitDirective() { return null; }
    visitBlockParameter() { return null; }
    visitBlock(e, t) { let s = Array.isArray(t) ? t.indexOf(e) : -1; if (s === -1)
        throw new Error("Visitor invoked incorrectly. Expecting visitBlock to be invoked siblings array as its context"); if (this.processedNodes.has(e))
        return null; let r = null; switch (e.name) {
        case "defer":
            r = My(e, this.findConnectedBlocks(s, t, Kl), this, this.bindingParser);
            break;
        case "switch":
            r = cy(e, this, this.bindingParser);
            break;
        case "for":
            r = ly(e, this.findConnectedBlocks(s, t, kh), this, this.bindingParser);
            break;
        case "if":
            r = oy(e, this.findConnectedBlocks(s, t, Th), this, this.bindingParser);
            break;
        default:
            let i;
            Kl(e.name) ? (i = `@${e.name} block can only be used after an @defer block.`, this.processedNodes.add(e)) : kh(e.name) ? (i = `@${e.name} block can only be used after an @for block.`, this.processedNodes.add(e)) : Th(e.name) ? (i = `@${e.name} block can only be used after an @if or @else if block.`, this.processedNodes.add(e)) : i = `Unrecognized block @${e.name}.`, r = { node: new da(e.name, e.sourceSpan, e.nameSpan), errors: [new N(e.sourceSpan, i)] };
            break;
    } return this.errors.push(...r.errors), r.node; }
    findConnectedBlocks(e, t, s) { let r = []; for (let i = e + 1; i < t.length; i++) {
        let a = t[i];
        if (!(a instanceof Nn)) {
            if (a instanceof on && a.value.trim().length === 0) {
                this.processedNodes.add(a);
                continue;
            }
            if (!(a instanceof at) || !s(a.name))
                break;
            r.push(a), this.processedNodes.add(a);
        }
    } return r; }
    categorizePropertyAttributes(e, t, s) { let r = [], i = []; return t.forEach(a => { let o = s[a.name]; if (a.isLiteral)
        i.push(new Os(a.name, a.expression.source || "", a.sourceSpan, a.keySpan, a.valueSpan, o));
    else {
        let l = this.bindingParser.createBoundElementProperty(e, a, !0, !1);
        r.push(tl.fromBoundElementProperty(l, o));
    } }), { bound: r, literal: i }; }
    prepareAttributes(e, t) { let s = [], r = [], i = [], a = [], o = [], l = {}, c = [], h = [], p = !1; for (let g of e) {
        let v = !1, E = Rh(g.name), C = !1;
        if (g.i18n && (l[g.name] = g.i18n), E.startsWith(Do)) {
            p && this.reportError("Can't have multiple template bindings on one element. Use only one attribute prefixed with *", g.sourceSpan), C = !0, p = !0;
            let b = g.value, A = E.substring(Do.length), F = [], ee = g.valueSpan ? g.valueSpan.fullStart.offset : g.sourceSpan.fullStart.offset + g.name.length;
            this.bindingParser.parseInlineTemplateBinding(A, b, g.sourceSpan, ee, [], c, F, !0), h.push(...F.map(V => new _n(V.name, V.value, V.sourceSpan, V.keySpan, V.valueSpan)));
        }
        else
            v = this.parseAttribute(t, g, [], s, r, i, a);
        !v && !C && o.push(this.visitAttribute(g));
    } return { attributes: o, boundEvents: r, references: a, variables: i, templateVariables: h, elementHasInlineTemplate: p, parsedProperties: s, templateParsedProperties: c, i18nAttrsMeta: l }; }
    parseAttribute(e, t, s, r, i, a, o) { let l = Rh(t.name), c = t.value, h = t.sourceSpan, p = t.valueSpan ? t.valueSpan.fullStart.offset : h.fullStart.offset; function g(A, F, ee) { let V = t.name.length - l.length, de = A.start.moveBy(F.length + V), rr = de.moveBy(ee.length); return new L(de, rr, de, ee); } let v = l.match(qy); if (v) {
        if (v[Nh] != null) {
            let A = v[cr], F = g(h, v[Nh], A);
            this.bindingParser.parsePropertyBinding(A, c, !1, !1, h, p, t.valueSpan, s, r, F);
        }
        else if (v[Dh])
            if (e) {
                let A = v[cr], F = g(h, v[Dh], A);
                this.parseVariable(A, c, h, F, t.valueSpan, a);
            }
            else
                this.reportError('"let-" is only supported on ng-template elements.', h);
        else if (v[Ph]) {
            let A = v[cr], F = g(h, v[Ph], A);
            this.parseReference(A, c, h, F, t.valueSpan, o);
        }
        else if (v[Lh]) {
            let A = [], F = v[cr], ee = g(h, v[Lh], F);
            this.bindingParser.parseEvent(F, c, !1, h, t.valueSpan || h, s, A, ee), Po(A, i);
        }
        else if (v[Bh]) {
            let A = v[cr], F = g(h, v[Bh], A);
            this.bindingParser.parsePropertyBinding(A, c, !1, !0, h, p, t.valueSpan, s, r, F), this.parseAssignmentEvent(A, c, h, t.valueSpan, s, i, F, p);
        }
        else if (v[Uy]) {
            let A = g(h, "", l);
            this.bindingParser.parseLiteralAttr(l, c, h, p, t.valueSpan, s, r, A);
        }
        return !0;
    } let E = null; if (l.startsWith(un.BANANA_BOX.start) ? E = un.BANANA_BOX : l.startsWith(un.PROPERTY.start) ? E = un.PROPERTY : l.startsWith(un.EVENT.start) && (E = un.EVENT), E !== null && l.endsWith(E.end) && l.length > E.start.length + E.end.length) {
        let A = l.substring(E.start.length, l.length - E.end.length), F = g(h, E.start, A);
        if (E.start === un.BANANA_BOX.start)
            this.bindingParser.parsePropertyBinding(A, c, !1, !0, h, p, t.valueSpan, s, r, F), this.parseAssignmentEvent(A, c, h, t.valueSpan, s, i, F, p);
        else if (E.start === un.PROPERTY.start)
            this.bindingParser.parsePropertyBinding(A, c, !1, !1, h, p, t.valueSpan, s, r, F);
        else {
            let ee = [];
            this.bindingParser.parseEvent(A, c, !1, h, t.valueSpan || h, s, ee, F), Po(ee, i);
        }
        return !0;
    } let C = g(h, "", l); return this.bindingParser.parsePropertyInterpolation(l, c, h, t.valueSpan, s, r, C, t.valueTokens ?? null); }
    extractDirectives(e) { let t = e instanceof Ce ? e.tagName : e.name, s = [], r = new Set; for (let i of e.directives) {
        let a = !1;
        for (let v of i.attrs)
            v.name.startsWith(Do) ? (a = !0, this.reportError(`Shorthand template syntax "${v.name}" is not supported inside a directive context`, v.sourceSpan)) : Wy.has(v.name) && (a = !0, this.reportError(`Attribute "${v.name}" is not supported in a directive context`, v.sourceSpan));
        if (!a && r.has(i.name) && (a = !0, this.reportError(`Cannot apply directive "${i.name}" multiple times on the same element`, i.sourceSpan)), a)
            continue;
        let { attributes: o, parsedProperties: l, boundEvents: c, references: h, i18nAttrsMeta: p } = this.prepareAttributes(i.attrs, !1);
        this.validateSelectorlessReferences(h);
        let { bound: g } = this.categorizePropertyAttributes(t, l, p);
        for (let v of g)
            v.type !== G.Property && v.type !== G.TwoWay && (a = !0, this.reportError("Binding is not supported in a directive context", v.sourceSpan));
        a || (r.add(i.name), s.push(new Ep(i.name, o, g, c, h, i.sourceSpan, i.startSourceSpan, i.endSourceSpan, void 0)));
    } return s; }
    filterAnimationAttributes(e) { return e.filter(t => !t.name.startsWith("animate.")); }
    filterAnimationInputs(e) { return e.filter(t => t.type !== G.Animation); }
    wrapInTemplate(e, t, s, r, i, a) { let o = this.categorizePropertyAttributes("ng-template", t, r), l = []; o.literal.forEach(g => l.push(g)), o.bound.forEach(g => l.push(g)); let c = { attributes: [], inputs: [], outputs: [] }; (e instanceof Ot || e instanceof vr) && (c.attributes.push(...this.filterAnimationAttributes(e.attributes)), c.inputs.push(...this.filterAnimationInputs(e.inputs)), c.outputs.push(...e.outputs)); let h = i && a ? void 0 : e.i18n, p; return e instanceof vr ? p = e.tagName : e instanceof Ke ? p = null : p = e.name, new Ke(p, c.attributes, c.inputs, c.outputs, [], l, [e], [], s, !1, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, h); }
    _visitTextWithInterpolation(e, t, s, r) { let i = wf(e), a = this.bindingParser.parseInterpolation(i, t, s); return a ? new $s(a, t, r) : new Un(i, t); }
    parseVariable(e, t, s, r, i, a) { e.indexOf("-") > -1 ? this.reportError('"-" is not allowed in variable names', s) : e.length === 0 && this.reportError("Variable does not have a name", s), a.push(new _n(e, t, s, r, i)); }
    parseReference(e, t, s, r, i, a) { e.indexOf("-") > -1 ? this.reportError('"-" is not allowed in reference names', s) : e.length === 0 ? this.reportError("Reference does not have a name", s) : a.some(o => o.name === e) && this.reportError(`Reference "#${e}" is defined more than once`, s), a.push(new Gr(e, t, s, r, i)); }
    parseAssignmentEvent(e, t, s, r, i, a, o, l) { let c = []; this.bindingParser.parseEvent(`${e}Change`, t, !0, s, r || s, i, c, o), Po(c, a); }
    validateSelectorlessReferences(e) { if (e.length === 0)
        return; let t = new Set; for (let s of e)
        s.value.length > 0 ? this.reportError("Cannot specify a value for a local reference in this context", s.valueSpan || s.sourceSpan) : t.has(s.name) ? this.reportError("Duplicate reference names are not allowed", s.sourceSpan) : t.add(s.name); }
    reportError(e, t, s = mn.ERROR) { this.errors.push(new N(t, e, s)); }
}, tc = class {
    visitElement(e) { let t = Hf(e); if (t.type === Qe.SCRIPT || t.type === Qe.STYLE || t.type === Qe.STYLESHEET)
        return null; let s = P(this, e.children, null); return new Ot(e.name, P(this, e.attrs), [], [], [], s, [], e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.isVoid); }
    visitComment(e) { return null; }
    visitAttribute(e) { return new Os(e.name, e.value, e.sourceSpan, e.keySpan, e.valueSpan, e.i18n); }
    visitText(e) { return new Un(e.value, e.sourceSpan); }
    visitExpansion(e) { return null; }
    visitExpansionCase(e) { return null; }
    visitBlock(e, t) { let s = [new Un(e.startSourceSpan.toString(), e.startSourceSpan), ...P(this, e.children)]; return e.endSourceSpan !== null && s.push(new Un(e.endSourceSpan.toString(), e.endSourceSpan)), s; }
    visitBlockParameter(e, t) { return null; }
    visitLetDeclaration(e, t) { return new Un(`@let ${e.name} = ${e.value};`, e.sourceSpan); }
    visitComponent(e, t) { let s = P(this, e.children, null); return new Ot(e.fullName, P(this, e.attrs), [], [], [], s, [], e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, !1); }
    visitDirective(e, t) { return null; }
}, Mh = new tc;
function Rh(n) { return /^data-/i.test(n) ? n.substring(5) : n; }
function Po(n, e) { e.push(...n.map(t => nl.fromParsedEvent(t))); }
function zy(n) { return n.children.length !== 1 || !(n.children[0] instanceof on) ? null : n.children[0].value; }
var Gy = [" ", `
`, "\r", "	"];
function jf(n, e, t = {}) { let { interpolationConfig: s, preserveWhitespaces: r, enableI18nLegacyMessageIdFormat: i } = t, a = t.enableSelectorless ?? !1, o = Ya(s, a), c = new Ga().parse(n, e, ue(S({ leadingTriviaChars: Gy }, t), { tokenizeExpansionForms: !0, tokenizeBlocks: t.enableBlockSyntax ?? !0, tokenizeLet: t.enableLetSyntax ?? !0, selectorlessEnabled: a })); if (!t.alwaysAttemptHtmlToR3AstConversion && c.errors && c.errors.length > 0) {
    let de = { interpolationConfig: s, preserveWhitespaces: r, errors: c.errors, nodes: [], styleUrls: [], styles: [], ngContentSelectors: [] };
    return t.collectCommentNodes && (de.commentNodes = []), de;
} let h = c.rootNodes, p = !(t.preserveSignificantWhitespace ?? !0), g = new Oa(s, !r, i, void 0, t.preserveSignificantWhitespace, p), v = g.visitAllWithErrors(h); if (!t.alwaysAttemptHtmlToR3AstConversion && v.errors && v.errors.length > 0) {
    let de = { interpolationConfig: s, preserveWhitespaces: r, errors: v.errors, nodes: [], styleUrls: [], styles: [], ngContentSelectors: [] };
    return t.collectCommentNodes && (de.commentNodes = []), de;
} h = v.rootNodes, r || (h = P(new fi(!0, void 0, !1), h), g.hasI18nMeta && (h = P(new Oa(s, !1, void 0, void 0, !0, p), h))); let { nodes: E, errors: C, styleUrls: b, styles: A, ngContentSelectors: F, commentNodes: ee } = jy(h, o, { collectCommentNodes: !!t.collectCommentNodes }); C.push(...c.errors, ...v.errors); let V = { interpolationConfig: s, preserveWhitespaces: r, errors: C.length > 0 ? C : null, nodes: E, styleUrls: b, styles: A, ngContentSelectors: F }; return t.collectCommentNodes && (V.commentNodes = ee), V; }
var Xy = new Qs;
function Ya(n = ot, e = !1) { return new Xl(new $a(new di, e), n, Xy, []); }
var Qa = "%COMP%", nc = `_nghost-${Qa}`, sc = `_ngcontent-${Qa}`;
function zf(n, e, t) { let s = new ae, r = so(n.selector); return s.set("type", n.type.value), r.length > 0 && s.set("selectors", Me(r)), n.queries.length > 0 && s.set("contentQueries", Ox(n.queries, e, n.name)), n.viewQueries.length && s.set("viewQuery", $x(n.viewQueries, e, n.name)), s.set("hostBindings", eC(n.host, n.typeSourceSpan, t, e, n.selector || "", n.name, s)), s.set("inputs", dl(n.inputs, !0)), s.set("outputs", dl(n.outputs)), n.exportAs !== null && s.set("exportAs", R(n.exportAs.map(i => d(i)))), n.isStandalone === !1 && s.set("standalone", d(!1)), n.isSignal && s.set("signals", d(!0)), s; }
function Gf(n, e) { let t = [], s = e.providers, r = e.viewProviders; if (s || r) {
    let i = [s || new dt([])];
    r && i.push(r), t.push(y(f.ProvidersFeature).callFn(i));
} if (e.hostDirectives?.length && t.push(y(f.HostDirectivesFeature).callFn([iC(e.hostDirectives)])), e.usesInheritance && t.push(y(f.InheritDefinitionFeature)), e.fullInheritance && t.push(y(f.CopyDefinitionFeature)), e.lifecycle.usesOnChanges && t.push(y(f.NgOnChangesFeature)), "externalStyles" in e && e.externalStyles?.length) {
    let i = e.externalStyles.map(a => d(a));
    t.push(y(f.ExternalStylesFeature).callFn([R(i)]));
} t.length && n.set("features", R(t)); }
function Yy(n, e, t) { let s = zf(n, e, t); Gf(s, n); let r = y(f.defineDirective).callFn([s.toLiteralMap()], void 0, !0), i = Qf(n); return { expression: r, type: i, statements: [] }; }
function Qy(n, e, t) { let s = zf(n, e, t); Gf(s, n); let r = n.selector && Jn.parse(n.selector), i = r && r[0]; if (i) {
    let E = i.getAttrs();
    E.length && s.set("attrs", e.getConstLiteral(R(E.map(C => C != null ? d(C) : d(void 0))), !0));
} let a = n.name, o = null; if (n.defer.mode === 1 && n.defer.dependenciesFn !== null) {
    let E = `${a}_DeferFn`;
    e.statements.push(new ce(E, n.defer.dependenciesFn, void 0, le.Final)), o = D(E);
} let l = n.isStandalone && !n.hasDirectiveDependencies ? Oe.DomOnly : Oe.Full, c = mx(n.name, n.template.nodes, e, l, n.relativeContextFilePath, n.i18nUseExternalIds, n.defer, o, n.relativeTemplatePath, Mx()); Df(c, _.Tmpl); let h = hx(c, e); if (c.contentSelectors !== null && s.set("ngContentSelectors", c.contentSelectors), s.set("decls", d(c.root.decls)), s.set("vars", d(c.root.vars)), c.consts.length > 0 && (c.constsInitializers.length > 0 ? s.set("consts", ie([], [...c.constsInitializers, new xe(R(c.consts))])) : s.set("consts", R(c.consts))), s.set("template", h), n.declarationListEmitMode !== 3 && n.declarations.length > 0)
    s.set("dependencies", Zy(R(n.declarations.map(E => E.type)), n.declarationListEmitMode));
else if (n.declarationListEmitMode === 3) {
    let E = [n.type.value];
    n.rawImports && E.push(n.rawImports), s.set("dependencies", y(f.getComponentDepsFactory).callFn(E));
} n.encapsulation === null && (n.encapsulation = xt.Emulated); let p = !!n.externalStyles?.length; if (n.styles && n.styles.length) {
    let C = (n.encapsulation == xt.Emulated ? rC(n.styles, sc, nc) : n.styles).reduce((b, A) => (A.trim().length > 0 && b.push(e.getConstLiteral(d(A))), b), []);
    C.length > 0 && (p = !0, s.set("styles", R(C)));
} !p && n.encapsulation === xt.Emulated && (n.encapsulation = xt.None), n.encapsulation !== xt.Emulated && s.set("encapsulation", d(n.encapsulation)), n.animations !== null && s.set("data", he([{ key: "animation", value: n.animations, quoted: !1 }])), n.changeDetection !== null && (typeof n.changeDetection == "number" && n.changeDetection !== Ei.Default ? s.set("changeDetection", d(n.changeDetection)) : typeof n.changeDetection == "object" && s.set("changeDetection", n.changeDetection)); let g = y(f.defineComponent).callFn([s.toLiteralMap()], void 0, !0), v = Xf(n); return { expression: g, type: v, statements: [] }; }
function Xf(n) { let e = Yf(n); return e.push(ic(n.template.ngContentSelectors)), e.push(we(d(n.isStandalone))), e.push(Zf(n)), n.isSignal && e.push(we(d(n.isSignal))), we(y(f.ComponentDeclaration, e)); }
function Zy(n, e) { switch (e) {
    case 0: return n;
    case 1: return ie([], n);
    case 2:
        let t = n.prop("map").callFn([y(f.resolveForwardRef)]);
        return ie([], t);
    case 3: throw new Error("Unsupported with an array of pre-resolved dependencies");
} }
function Jy(n) { return we(d(n)); }
function rc(n) { let e = Object.keys(n).map(t => { let s = Array.isArray(n[t]) ? n[t][0] : n[t]; return { key: t, value: d(s), quoted: !0 }; }); return he(e); }
function ic(n) { return n.length > 0 ? we(R(n.map(e => d(e)))) : kt; }
function Yf(n) { let e = n.selector !== null ? n.selector.replace(/\n/g, "") : null; return [ao(n.type.type, n.typeArgumentCount), e !== null ? Jy(e) : kt, n.exportAs !== null ? ic(n.exportAs) : kt, we(Ky(n)), we(rc(n.outputs)), ic(n.queries.map(t => t.propertyName))]; }
function Ky(n) { return he(Object.keys(n.inputs).map(e => { let t = n.inputs[e], s = [{ key: "alias", value: d(t.bindingPropertyName), quoted: !0 }, { key: "required", value: d(t.required), quoted: !0 }]; return t.isSignal && s.push({ key: "isSignal", value: d(t.isSignal), quoted: !0 }), { key: e, value: he(s), quoted: !0 }; })); }
function Qf(n) { let e = Yf(n); return e.push(kt), e.push(we(d(n.isStandalone))), e.push(Zf(n)), n.isSignal && e.push(we(d(n.isSignal))), we(y(f.DirectiveDeclaration, e)); }
function eC(n, e, t, s, r, i, a) { let o = t.createBoundHostProperties(n.properties, e), l = t.createDirectiveHostEventAsts(n.listeners, e); n.specialAttributes.styleAttr && (n.attributes.style = d(n.specialAttributes.styleAttr)), n.specialAttributes.classAttr && (n.attributes.class = d(n.specialAttributes.classAttr)); let c = gx({ componentName: i, componentSelector: r, properties: o, events: l, attributes: n.attributes }, t, s); Df(c, _.Host), a.set("hostAttrs", c.root.attributes); let h = c.root.vars; return h !== null && h > 0 && a.set("hostVars", d(h)), px(c); }
var tC = /^(?:\[([^\]]+)\])|(?:\(([^\)]+)\))$/;
function nC(n) { let e = {}, t = {}, s = {}, r = {}; for (let i of Object.keys(n)) {
    let a = n[i], o = i.match(tC);
    if (o === null)
        switch (i) {
            case "class":
                if (typeof a != "string")
                    throw new Error("Class binding must be string");
                r.classAttr = a;
                break;
            case "style":
                if (typeof a != "string")
                    throw new Error("Style binding must be string");
                r.styleAttr = a;
                break;
            default: typeof a == "string" ? e[i] = d(a) : e[i] = a;
        }
    else if (o[1] != null) {
        if (typeof a != "string")
            throw new Error("Property binding must be string");
        s[o[1]] = a;
    }
    else if (o[2] != null) {
        if (typeof a != "string")
            throw new Error("Event binding must be string");
        t[o[2]] = a;
    }
} return { attributes: e, listeners: t, properties: s, specialAttributes: r }; }
function sC(n, e) { let t = Ya(); return t.createDirectiveHostEventAsts(n.listeners, e), t.createBoundHostProperties(n.properties, e), t.errors; }
function rC(n, e, t) { let s = new xa; return n.map(r => s.shimCssText(r, e, t)); }
function XA(n, e) { let t = new xa, s = e ? sc.replace(Qa, e) : sc, r = e ? nc.replace(Qa, e) : nc; return t.shimCssText(n, s, r); }
function Zf(n) { return n.hostDirectives?.length ? we(R(n.hostDirectives.map(e => he([{ key: "directive", value: Js(e.directive.type), quoted: !1 }, { key: "inputs", value: rc(e.inputs || {}), quoted: !1 }, { key: "outputs", value: rc(e.outputs || {}), quoted: !1 }])))) : kt; }
function iC(n) { let e = [], t = !1; for (let s of n) {
    if (!s.inputs && !s.outputs)
        e.push(s.directive.type);
    else {
        let r = [{ key: "directive", value: s.directive.type, quoted: !1 }];
        if (s.inputs) {
            let i = Za(s.inputs);
            i && r.push({ key: "inputs", value: i, quoted: !1 });
        }
        if (s.outputs) {
            let i = Za(s.outputs);
            i && r.push({ key: "outputs", value: i, quoted: !1 });
        }
        e.push(he(r));
    }
    s.isForwardReference && (t = !0);
} return t ? new Zt([], [new xe(R(e))]) : R(e); }
function Za(n) { let e = []; for (let t in n)
    n.hasOwnProperty(t) && e.push(d(t), d(n[t])); return e.length > 0 ? R(e) : null; }
function YA(n) { let e = []; if (n.mode === 0)
    for (let t of n.dependencies)
        if (t.isDeferrable) {
            let s = ie([new J("m", He)], D("m").prop(t.isDefaultImport ? "default" : t.symbolName)), r = new es(t.importPath).prop("then").callFn([s]);
            e.push(r);
        }
        else
            e.push(t.typeReference);
else
    for (let { symbolName: t, importPath: s, isDefaultImport: r } of n.dependencies) {
        let i = ie([new J("m", He)], D("m").prop(r ? "default" : t)), a = new es(s).prop("then").callFn([i]);
        e.push(a);
    } return ie([], R(e)); }
var ac = class extends qr {
    visit(e) { e instanceof Xe ? this.visit(e.ast) : e.visit(this); }
    visitElement(e) { this.visitAllTemplateNodes(e.attributes), this.visitAllTemplateNodes(e.inputs), this.visitAllTemplateNodes(e.outputs), this.visitAllTemplateNodes(e.directives), this.visitAllTemplateNodes(e.references), this.visitAllTemplateNodes(e.children); }
    visitTemplate(e) { this.visitAllTemplateNodes(e.attributes), this.visitAllTemplateNodes(e.inputs), this.visitAllTemplateNodes(e.outputs), this.visitAllTemplateNodes(e.directives), this.visitAllTemplateNodes(e.templateAttrs), this.visitAllTemplateNodes(e.variables), this.visitAllTemplateNodes(e.references), this.visitAllTemplateNodes(e.children); }
    visitContent(e) { this.visitAllTemplateNodes(e.children); }
    visitBoundAttribute(e) { this.visit(e.value); }
    visitBoundEvent(e) { this.visit(e.handler); }
    visitBoundText(e) { this.visit(e.value); }
    visitIcu(e) { Object.keys(e.vars).forEach(t => this.visit(e.vars[t])), Object.keys(e.placeholders).forEach(t => this.visit(e.placeholders[t])); }
    visitDeferredBlock(e) { e.visitAll(this); }
    visitDeferredTrigger(e) { e instanceof la && this.visit(e.value); }
    visitDeferredBlockPlaceholder(e) { this.visitAllTemplateNodes(e.children); }
    visitDeferredBlockError(e) { this.visitAllTemplateNodes(e.children); }
    visitDeferredBlockLoading(e) { this.visitAllTemplateNodes(e.children); }
    visitSwitchBlock(e) { this.visit(e.expression), this.visitAllTemplateNodes(e.cases); }
    visitSwitchBlockCase(e) { e.expression && this.visit(e.expression), this.visitAllTemplateNodes(e.children); }
    visitForLoopBlock(e) { e.item.visit(this), this.visitAllTemplateNodes(e.contextVariables), this.visit(e.expression), this.visitAllTemplateNodes(e.children), e.empty?.visit(this); }
    visitForLoopBlockEmpty(e) { this.visitAllTemplateNodes(e.children); }
    visitIfBlock(e) { this.visitAllTemplateNodes(e.branches); }
    visitIfBlockBranch(e) { e.expression && this.visit(e.expression), e.expressionAlias?.visit(this), this.visitAllTemplateNodes(e.children); }
    visitLetDeclaration(e) { this.visit(e.value); }
    visitComponent(e) { this.visitAllTemplateNodes(e.attributes), this.visitAllTemplateNodes(e.inputs), this.visitAllTemplateNodes(e.outputs), this.visitAllTemplateNodes(e.directives), this.visitAllTemplateNodes(e.references), this.visitAllTemplateNodes(e.children); }
    visitDirective(e) { this.visitAllTemplateNodes(e.attributes), this.visitAllTemplateNodes(e.inputs), this.visitAllTemplateNodes(e.outputs), this.visitAllTemplateNodes(e.references); }
    visitVariable(e) { }
    visitReference(e) { }
    visitTextAttribute(e) { }
    visitText(e) { }
    visitUnknownBlock(e) { }
    visitAllTemplateNodes(e) { for (let t of e)
        this.visit(t); }
};
function Fh(n, e) { let t = new Set(e); return n.filter(s => !t.has(s)); }
function QA(n, e) { let t = new yr; for (let c of e) {
    let h = { selector: c, exportAs: null, inputs: { hasBindingPropertyName() { return !1; } }, outputs: { hasBindingPropertyName() { return !1; } } };
    t.addSelectables(Jn.parse(c), [h]);
} let s = jf(n, ""), i = new Ja(t).bind({ template: s.nodes }), a = i.getEagerlyUsedDirectives().map(c => c.selector), o = i.getUsedDirectives().map(c => c.selector), l = i.getEagerlyUsedPipes(); return { directives: { regular: a, deferCandidates: Fh(o, a) }, pipes: { regular: l, deferCandidates: Fh(i.getUsedPipes(), l) } }; }
var Ja = class {
    directiveMatcher;
    constructor(e) { this.directiveMatcher = e; }
    bind(e) { if (!e.template && !e.host)
        throw new Error("Empty bound targets are not supported"); let t = new Map, s = [], r = new Set, i = new Map, a = new Map, o = new Map, l = new Map, c = new Map, h = new Map, p = new Set, g = new Set, v = []; if (e.template) {
        let E = Ka.apply(e.template);
        aC(E, o), oc.apply(e.template, this.directiveMatcher, t, s, r, i, a), eo.applyWithScope(e.template, E, l, c, h, p, g, v);
    } return e.host && (t.set(e.host.node, e.host.directives), eo.applyWithScope(e.host.node, Ka.apply(e.host.node), l, c, h, p, g, v)), new lc(e, t, s, r, i, a, l, c, h, o, p, g, v); }
}, Ka = class n {
    parentScope;
    rootNode;
    namedEntities = new Map;
    elementLikeInScope = new Set;
    childScopes = new Map;
    isDeferred;
    constructor(e, t) { this.parentScope = e, this.rootNode = t, this.isDeferred = e !== null && e.isDeferred ? !0 : t instanceof is; }
    static newRootScope() { return new n(null, null); }
    static apply(e) { let t = n.newRootScope(); return t.ingest(e), t; }
    ingest(e) { e instanceof Ke ? (e.variables.forEach(t => this.visitVariable(t)), e.children.forEach(t => t.visit(this))) : e instanceof Gn ? (e.expressionAlias !== null && this.visitVariable(e.expressionAlias), e.children.forEach(t => t.visit(this))) : e instanceof Vs ? (this.visitVariable(e.item), e.contextVariables.forEach(t => this.visitVariable(t)), e.children.forEach(t => t.visit(this))) : e instanceof jr || e instanceof zr || e instanceof is || e instanceof Wr || e instanceof Ur || e instanceof Hr || e instanceof qs ? e.children.forEach(t => t.visit(this)) : e instanceof Xr || e.forEach(t => t.visit(this)); }
    visitElement(e) { this.visitElementLike(e); }
    visitTemplate(e) { e.directives.forEach(t => t.visit(this)), e.references.forEach(t => this.visitReference(t)), this.ingestScopedNode(e); }
    visitVariable(e) { this.maybeDeclare(e); }
    visitReference(e) { this.maybeDeclare(e); }
    visitDeferredBlock(e) { this.ingestScopedNode(e), e.placeholder?.visit(this), e.loading?.visit(this), e.error?.visit(this); }
    visitDeferredBlockPlaceholder(e) { this.ingestScopedNode(e); }
    visitDeferredBlockError(e) { this.ingestScopedNode(e); }
    visitDeferredBlockLoading(e) { this.ingestScopedNode(e); }
    visitSwitchBlock(e) { e.cases.forEach(t => t.visit(this)); }
    visitSwitchBlockCase(e) { this.ingestScopedNode(e); }
    visitForLoopBlock(e) { this.ingestScopedNode(e), e.empty?.visit(this); }
    visitForLoopBlockEmpty(e) { this.ingestScopedNode(e); }
    visitIfBlock(e) { e.branches.forEach(t => t.visit(this)); }
    visitIfBlockBranch(e) { this.ingestScopedNode(e); }
    visitContent(e) { this.ingestScopedNode(e); }
    visitLetDeclaration(e) { this.maybeDeclare(e); }
    visitComponent(e) { this.visitElementLike(e); }
    visitDirective(e) { e.references.forEach(t => this.visitReference(t)); }
    visitBoundAttribute(e) { }
    visitBoundEvent(e) { }
    visitBoundText(e) { }
    visitText(e) { }
    visitTextAttribute(e) { }
    visitIcu(e) { }
    visitDeferredTrigger(e) { }
    visitUnknownBlock(e) { }
    visitElementLike(e) { e.directives.forEach(t => t.visit(this)), e.references.forEach(t => this.visitReference(t)), e.children.forEach(t => t.visit(this)), this.elementLikeInScope.add(e); }
    maybeDeclare(e) { this.namedEntities.has(e.name) || this.namedEntities.set(e.name, e); }
    lookup(e) { return this.namedEntities.has(e) ? this.namedEntities.get(e) : this.parentScope !== null ? this.parentScope.lookup(e) : null; }
    getChildScope(e) { let t = this.childScopes.get(e); if (t === void 0)
        throw new Error(`Assertion error: child scope for ${e} not found`); return t; }
    ingestScopedNode(e) { let t = new n(this, e); t.ingest(e), this.childScopes.set(e, t); }
}, oc = class n {
    directiveMatcher;
    directives;
    eagerDirectives;
    missingDirectives;
    bindings;
    references;
    isInDeferBlock = !1;
    constructor(e, t, s, r, i, a) { this.directiveMatcher = e, this.directives = t, this.eagerDirectives = s, this.missingDirectives = r, this.bindings = i, this.references = a; }
    static apply(e, t, s, r, i, a, o) { new n(t, s, r, i, a, o).ingest(e); }
    ingest(e) { e.forEach(t => t.visit(this)); }
    visitElement(e) { this.visitElementOrTemplate(e); }
    visitTemplate(e) { this.visitElementOrTemplate(e); }
    visitDeferredBlock(e) { let t = this.isInDeferBlock; this.isInDeferBlock = !0, e.children.forEach(s => s.visit(this)), this.isInDeferBlock = t, e.placeholder?.visit(this), e.loading?.visit(this), e.error?.visit(this); }
    visitDeferredBlockPlaceholder(e) { e.children.forEach(t => t.visit(this)); }
    visitDeferredBlockError(e) { e.children.forEach(t => t.visit(this)); }
    visitDeferredBlockLoading(e) { e.children.forEach(t => t.visit(this)); }
    visitSwitchBlock(e) { e.cases.forEach(t => t.visit(this)); }
    visitSwitchBlockCase(e) { e.children.forEach(t => t.visit(this)); }
    visitForLoopBlock(e) { e.item.visit(this), e.contextVariables.forEach(t => t.visit(this)), e.children.forEach(t => t.visit(this)), e.empty?.visit(this); }
    visitForLoopBlockEmpty(e) { e.children.forEach(t => t.visit(this)); }
    visitIfBlock(e) { e.branches.forEach(t => t.visit(this)); }
    visitIfBlockBranch(e) { e.expressionAlias?.visit(this), e.children.forEach(t => t.visit(this)); }
    visitContent(e) { e.children.forEach(t => t.visit(this)); }
    visitComponent(e) { if (this.directiveMatcher instanceof zi) {
        let t = this.directiveMatcher.match(e.componentName);
        t.length > 0 ? this.trackSelectorlessMatchesAndDirectives(e, t) : this.missingDirectives.add(e.componentName);
    } e.directives.forEach(t => t.visit(this)), e.children.forEach(t => t.visit(this)); }
    visitDirective(e) { if (this.directiveMatcher instanceof zi) {
        let t = this.directiveMatcher.match(e.name);
        t.length > 0 ? this.trackSelectorlessMatchesAndDirectives(e, t) : this.missingDirectives.add(e.name);
    } }
    visitElementOrTemplate(e) { if (this.directiveMatcher instanceof yr) {
        let t = [], s = Am(e);
        this.directiveMatcher.match(s, (r, i) => t.push(...i)), this.trackSelectorBasedBindingsAndDirectives(e, t);
    }
    else
        e.references.forEach(t => { t.value.trim() === "" && this.references.set(t, e); }); e.directives.forEach(t => t.visit(this)), e.children.forEach(t => t.visit(this)); }
    trackMatchedDirectives(e, t) { t.length > 0 && (this.directives.set(e, t), this.isInDeferBlock || this.eagerDirectives.push(...t)); }
    trackSelectorlessMatchesAndDirectives(e, t) { if (t.length === 0)
        return; this.trackMatchedDirectives(e, t); let s = (r, i, a) => { r[a].hasBindingPropertyName(i.name) && this.bindings.set(i, r); }; for (let r of t)
        e.inputs.forEach(i => s(r, i, "inputs")), e.attributes.forEach(i => s(r, i, "inputs")), e.outputs.forEach(i => s(r, i, "outputs")); e.references.forEach(r => this.references.set(r, { directive: t[0], node: e })); }
    trackSelectorBasedBindingsAndDirectives(e, t) { this.trackMatchedDirectives(e, t), e.references.forEach(r => { let i = null; if (r.value.trim() === "")
        i = t.find(a => a.isComponent) || null;
    else if (i = t.find(a => a.exportAs !== null && a.exportAs.some(o => o === r.value)) || null, i === null)
        return; i !== null ? this.references.set(r, { directive: i, node: e }) : this.references.set(r, e); }); let s = (r, i) => { let a = t.find(l => l[i].hasBindingPropertyName(r.name)), o = a !== void 0 ? a : e; this.bindings.set(r, o); }; e.inputs.forEach(r => s(r, "inputs")), e.attributes.forEach(r => s(r, "inputs")), e instanceof Ke && e.templateAttrs.forEach(r => s(r, "inputs")), e.outputs.forEach(r => s(r, "outputs")); }
    visitVariable(e) { }
    visitReference(e) { }
    visitTextAttribute(e) { }
    visitBoundAttribute(e) { }
    visitBoundEvent(e) { }
    visitBoundAttributeOrEvent(e) { }
    visitText(e) { }
    visitBoundText(e) { }
    visitIcu(e) { }
    visitDeferredTrigger(e) { }
    visitUnknownBlock(e) { }
    visitLetDeclaration(e) { }
}, eo = class n extends ac {
    bindings;
    symbols;
    usedPipes;
    eagerPipes;
    deferBlocks;
    nestingLevel;
    scope;
    rootNode;
    level;
    visitNode = e => e.visit(this);
    constructor(e, t, s, r, i, a, o, l, c) { super(), this.bindings = e, this.symbols = t, this.usedPipes = s, this.eagerPipes = r, this.deferBlocks = i, this.nestingLevel = a, this.scope = o, this.rootNode = l, this.level = c; }
    static applyWithScope(e, t, s, r, i, a, o, l) { let c = e instanceof Ke ? e : null; new n(s, r, a, o, l, i, t, c, 0).ingest(e); }
    ingest(e) { if (e instanceof Ke)
        e.variables.forEach(this.visitNode), e.children.forEach(this.visitNode), this.nestingLevel.set(e, this.level);
    else if (e instanceof Gn)
        e.expressionAlias !== null && this.visitNode(e.expressionAlias), e.children.forEach(this.visitNode), this.nestingLevel.set(e, this.level);
    else if (e instanceof Vs)
        this.visitNode(e.item), e.contextVariables.forEach(t => this.visitNode(t)), e.trackBy.visit(this), e.children.forEach(this.visitNode), this.nestingLevel.set(e, this.level);
    else if (e instanceof is) {
        if (this.scope.rootNode !== e)
            throw new Error(`Assertion error: resolved incorrect scope for deferred block ${e}`);
        this.deferBlocks.push([e, this.scope]), e.children.forEach(t => t.visit(this)), this.nestingLevel.set(e, this.level);
    }
    else
        e instanceof jr || e instanceof zr || e instanceof Wr || e instanceof Ur || e instanceof Hr || e instanceof qs ? (e.children.forEach(t => t.visit(this)), this.nestingLevel.set(e, this.level)) : e instanceof Xr ? this.nestingLevel.set(e, 0) : e.forEach(this.visitNode); }
    visitTemplate(e) { e.inputs.forEach(this.visitNode), e.outputs.forEach(this.visitNode), e.directives.forEach(this.visitNode), e.templateAttrs.forEach(this.visitNode), e.references.forEach(this.visitNode), this.ingestScopedNode(e); }
    visitVariable(e) { this.rootNode !== null && this.symbols.set(e, this.rootNode); }
    visitReference(e) { this.rootNode !== null && this.symbols.set(e, this.rootNode); }
    visitDeferredBlock(e) { this.ingestScopedNode(e), e.triggers.when?.value.visit(this), e.prefetchTriggers.when?.value.visit(this), e.hydrateTriggers.when?.value.visit(this), e.hydrateTriggers.never?.visit(this), e.placeholder && this.visitNode(e.placeholder), e.loading && this.visitNode(e.loading), e.error && this.visitNode(e.error); }
    visitDeferredBlockPlaceholder(e) { this.ingestScopedNode(e); }
    visitDeferredBlockError(e) { this.ingestScopedNode(e); }
    visitDeferredBlockLoading(e) { this.ingestScopedNode(e); }
    visitSwitchBlockCase(e) { e.expression?.visit(this), this.ingestScopedNode(e); }
    visitForLoopBlock(e) { e.expression.visit(this), this.ingestScopedNode(e), e.empty?.visit(this); }
    visitForLoopBlockEmpty(e) { this.ingestScopedNode(e); }
    visitIfBlockBranch(e) { e.expression?.visit(this), this.ingestScopedNode(e); }
    visitContent(e) { this.ingestScopedNode(e); }
    visitLetDeclaration(e) { super.visitLetDeclaration(e), this.rootNode !== null && this.symbols.set(e, this.rootNode); }
    visitPipe(e, t) { return this.usedPipes.add(e.name), this.scope.isDeferred || this.eagerPipes.add(e.name), super.visitPipe(e, t); }
    visitPropertyRead(e, t) { return this.maybeMap(e, e.name), super.visitPropertyRead(e, t); }
    visitSafePropertyRead(e, t) { return this.maybeMap(e, e.name), super.visitSafePropertyRead(e, t); }
    ingestScopedNode(e) { let t = this.scope.getChildScope(e); new n(this.bindings, this.symbols, this.usedPipes, this.eagerPipes, this.deferBlocks, this.nestingLevel, t, e, this.level + 1).ingest(e); }
    maybeMap(e, t) { if (!(e.receiver instanceof $t) || e.receiver instanceof ss)
        return; let s = this.scope.lookup(t); s !== null && this.bindings.set(e, s); }
}, lc = class {
    target;
    directives;
    eagerDirectives;
    missingDirectives;
    bindings;
    references;
    exprTargets;
    symbols;
    nestingLevel;
    scopedNodeEntities;
    usedPipes;
    eagerPipes;
    deferredBlocks;
    deferredScopes;
    constructor(e, t, s, r, i, a, o, l, c, h, p, g, v) { this.target = e, this.directives = t, this.eagerDirectives = s, this.missingDirectives = r, this.bindings = i, this.references = a, this.exprTargets = o, this.symbols = l, this.nestingLevel = c, this.scopedNodeEntities = h, this.usedPipes = p, this.eagerPipes = g, this.deferredBlocks = v.map(E => E[0]), this.deferredScopes = new Map(v); }
    getEntitiesInScope(e) { return this.scopedNodeEntities.get(e) ?? new Set; }
    getDirectivesOfNode(e) { return this.directives.get(e) || null; }
    getReferenceTarget(e) { return this.references.get(e) || null; }
    getConsumerOfBinding(e) { return this.bindings.get(e) || null; }
    getExpressionTarget(e) { return this.exprTargets.get(e) || null; }
    getDefinitionNodeOfSymbol(e) { return this.symbols.get(e) || null; }
    getNestingLevel(e) { return this.nestingLevel.get(e) || 0; }
    getUsedDirectives() { let e = new Set; return this.directives.forEach(t => t.forEach(s => e.add(s))), Array.from(e.values()); }
    getEagerlyUsedDirectives() { let e = new Set(this.eagerDirectives); return Array.from(e.values()); }
    getUsedPipes() { return Array.from(this.usedPipes); }
    getEagerlyUsedPipes() { return Array.from(this.eagerPipes); }
    getDeferBlocks() { return this.deferredBlocks; }
    getDeferredTriggerTarget(e, t) { if (!(t instanceof ua) && !(t instanceof ha) && !(t instanceof ca))
        return null; let s = t.reference; if (s === null) {
        let i = null;
        if (e.placeholder !== null) {
            for (let a of e.placeholder.children)
                if (!(a instanceof oo)) {
                    if (i !== null)
                        return null;
                    a instanceof Ot && (i = a);
                }
        }
        return i;
    } let r = this.findEntityInScope(e, s); if (r instanceof Gr && this.getDefinitionNodeOfSymbol(r) !== e) {
        let i = this.getReferenceTarget(r);
        if (i !== null)
            return this.referenceTargetToElement(i);
    } if (e.placeholder !== null) {
        let i = this.findEntityInScope(e.placeholder, s), a = i instanceof Gr ? this.getReferenceTarget(i) : null;
        if (a !== null)
            return this.referenceTargetToElement(a);
    } return null; }
    isDeferred(e) { for (let t of this.deferredBlocks) {
        if (!this.deferredScopes.has(t))
            continue;
        let s = [this.deferredScopes.get(t)];
        for (; s.length > 0;) {
            let r = s.pop();
            if (r.elementLikeInScope.has(e))
                return !0;
            s.push(...r.childScopes.values());
        }
    } return !1; }
    referencedDirectiveExists(e) { return !this.missingDirectives.has(e); }
    findEntityInScope(e, t) { let s = this.getEntitiesInScope(e); for (let r of s)
        if (r.name === t)
            return r; return null; }
    referenceTargetToElement(e) { return e instanceof Ot ? e : e instanceof Ke || e.node instanceof vr || e.node instanceof Ep || e.node instanceof Xr ? null : this.referenceTargetToElement(e.node); }
};
function aC(n, e) { let t = new Map; function s(i) { if (t.has(i.rootNode))
    return t.get(i.rootNode); let a = i.namedEntities, o; return i.parentScope !== null ? o = new Map([...s(i.parentScope), ...a]) : o = new Map(a), t.set(i.rootNode, o), o; } let r = [n]; for (; r.length > 0;) {
    let i = r.pop();
    for (let a of i.childScopes.values())
        r.push(a);
    s(i);
} for (let [i, a] of t)
    e.set(i, new Set(a.values())); }
var cc = class {
}, uc = class {
    jitEvaluator;
    FactoryTarget = Bt;
    ResourceLoader = cc;
    elementSchemaRegistry = new Qs;
    constructor(e = new wl) { this.jitEvaluator = e; }
    compilePipe(e, t, s) { let r = { name: s.name, type: ge(s.type), typeArgumentCount: 0, deps: null, pipeName: s.pipeName, pure: s.pure, isStandalone: s.isStandalone }, i = ku(r); return this.jitExpression(i.expression, e, t, []); }
    compilePipeDeclaration(e, t, s) { let r = CC(s), i = ku(r); return this.jitExpression(i.expression, e, t, []); }
    compileInjectable(e, t, s) { let { expression: r, statements: i } = gu({ name: s.name, type: ge(s.type), typeArgumentCount: s.typeArgumentCount, providedIn: Hh(s.providedIn), useClass: ws(s, "useClass"), useFactory: Uh(s, "useFactory"), useValue: ws(s, "useValue"), useExisting: ws(s, "useExisting"), deps: s.deps?.map(td) }, !0); return this.jitExpression(r, e, t, i); }
    compileInjectableDeclaration(e, t, s) { let { expression: r, statements: i } = gu({ name: s.type.name, type: ge(s.type), typeArgumentCount: 0, providedIn: Hh(s.providedIn), useClass: ws(s, "useClass"), useFactory: Uh(s, "useFactory"), useValue: ws(s, "useValue"), useExisting: ws(s, "useExisting"), deps: s.deps?.map(Wh) }, !0); return this.jitExpression(r, e, t, i); }
    compileInjector(e, t, s) { let r = { name: s.name, type: ge(s.type), providers: s.providers && s.providers.length > 0 ? new H(s.providers) : null, imports: s.imports.map(a => new H(a)) }, i = _u(r); return this.jitExpression(i.expression, e, t, []); }
    compileInjectorDeclaration(e, t, s) { let r = AC(s), i = _u(r); return this.jitExpression(i.expression, e, t, []); }
    compileNgModule(e, t, s) { let r = { kind: Yt.Global, type: ge(s.type), bootstrap: s.bootstrap.map(ge), declarations: s.declarations.map(ge), publicDeclarationTypes: null, imports: s.imports.map(ge), includeImportTypes: !0, exports: s.exports.map(ge), selectorScopeMode: Sa.Inline, containsForwardDecls: !1, schemas: s.schemas ? s.schemas.map(ge) : null, id: s.id ? new H(s.id) : null }, i = Wm(r); return this.jitExpression(i.expression, e, t, []); }
    compileNgModuleDeclaration(e, t, s) { let r = jm(s); return this.jitExpression(r, e, t, []); }
    compileDirective(e, t, s) { let r = Vh(s); return this.compileDirectiveFromMeta(e, t, r); }
    compileDirectiveDeclaration(e, t, s) { let r = this.createParseSourceSpan("Directive", s.type.name, t), i = Kf(s, r); return this.compileDirectiveFromMeta(e, t, i); }
    compileDirectiveFromMeta(e, t, s) { let r = new Zi, i = Ya(), a = Yy(s, r, i); return this.jitExpression(a.expression, e, t, r.statements); }
    compileComponent(e, t, s) { let { template: r, interpolation: i, defer: a } = ed(s.template, s.name, t, s.preserveWhitespaces, s.interpolation, void 0), o = ue(S(S({}, s), Vh(s)), { selector: s.selector || this.elementSchemaRegistry.getDefaultComponentElementName(), template: r, declarations: s.declarations.map(uC), declarationListEmitMode: 0, defer: a, styles: [...s.styles, ...r.styles], encapsulation: s.encapsulation, interpolation: i, changeDetection: s.changeDetection ?? null, animations: s.animations != null ? new H(s.animations) : null, viewProviders: s.viewProviders != null ? new H(s.viewProviders) : null, relativeContextFilePath: "", i18nUseExternalIds: !0, relativeTemplatePath: null }), l = `ng:///${s.name}.js`; return this.compileComponentFromMeta(e, l, o); }
    compileComponentDeclaration(e, t, s) { let r = this.createParseSourceSpan("Component", s.type.name, t), i = cC(s, r, t); return this.compileComponentFromMeta(e, t, i); }
    compileComponentFromMeta(e, t, s) { let r = new Zi, i = Ya(s.interpolation), a = Qy(s, r, i); return this.jitExpression(a.expression, e, t, r.statements); }
    compileFactory(e, t, s) { let r = $n({ name: s.name, type: ge(s.type), typeArgumentCount: s.typeArgumentCount, deps: fC(s.deps), target: s.target }); return this.jitExpression(r.expression, e, t, r.statements); }
    compileFactoryDeclaration(e, t, s) { let r = $n({ name: s.type.name, type: ge(s.type), typeArgumentCount: 0, deps: Array.isArray(s.deps) ? s.deps.map(Wh) : s.deps, target: s.target }); return this.jitExpression(r.expression, e, t, r.statements); }
    createParseSourceSpan(e, t, s) { return $m(e, t, s); }
    jitExpression(e, t, s, r) { let i = [...r, new ce("$def", e, void 0, le.Exported)]; return this.jitEvaluator.evaluateStatements(s, i, new Sl(t), !0).$def; }
};
function $h(n) { return ue(S({}, n), { isSignal: n.isSignal, predicate: Jf(n.predicate), read: n.read ? new H(n.read) : null, static: n.static, emitDistinctChangesOnly: n.emitDistinctChangesOnly }); }
function Oh(n) { return { propertyName: n.propertyName, first: n.first ?? !1, predicate: Jf(n.predicate), descendants: n.descendants ?? !1, read: n.read ? new H(n.read) : null, static: n.static ?? !1, emitDistinctChangesOnly: n.emitDistinctChangesOnly ?? !0, isSignal: !!n.isSignal }; }
function Jf(n) { return Array.isArray(n) ? n : Nc(new H(n), 1); }
function Vh(n) { let e = yC(n.inputs || []), t = Bo(n.outputs || []), s = n.propMetadata, r = {}, i = {}; for (let o in s)
    s.hasOwnProperty(o) && s[o].forEach(l => { wC(l) ? r[o] = { bindingPropertyName: l.alias || o, classPropertyName: o, required: l.required || !1, isSignal: !!l.isSignal, transformFunction: l.transform != null ? new H(l.transform) : null } : EC(l) && (i[o] = l.alias || o); }); let a = n.hostDirectives?.length ? n.hostDirectives.map(o => typeof o == "function" ? { directive: ge(o), inputs: null, outputs: null, isForwardReference: !1 } : { directive: ge(o.directive), isForwardReference: !1, inputs: o.inputs ? Bo(o.inputs) : null, outputs: o.outputs ? Bo(o.outputs) : null }) : null; return ue(S({}, n), { typeArgumentCount: 0, typeSourceSpan: n.typeSourceSpan, type: ge(n.type), deps: null, host: S({}, mC(n.propMetadata, n.typeSourceSpan, n.host)), inputs: S(S({}, e), r), outputs: S(S({}, t), i), queries: n.queries.map($h), providers: n.providers != null ? new H(n.providers) : null, viewQueries: n.viewQueries.map($h), fullInheritance: !1, hostDirectives: a }); }
function Kf(n, e) { let t = n.hostDirectives?.length ? n.hostDirectives.map(s => ({ directive: ge(s.directive), isForwardReference: !1, inputs: s.inputs ? qh(s.inputs) : null, outputs: s.outputs ? qh(s.outputs) : null })) : null; return { name: n.type.name, type: ge(n.type), typeSourceSpan: e, selector: n.selector ?? null, inputs: n.inputs ? SC(n.inputs) : {}, outputs: n.outputs ?? {}, host: oC(n.host), queries: (n.queries ?? []).map(Oh), viewQueries: (n.viewQueries ?? []).map(Oh), providers: n.providers !== void 0 ? new H(n.providers) : null, exportAs: n.exportAs ?? null, usesInheritance: n.usesInheritance ?? !1, lifecycle: { usesOnChanges: n.usesOnChanges ?? !1 }, deps: null, typeArgumentCount: 0, fullInheritance: !1, isStandalone: n.isStandalone ?? gp(n.version), isSignal: n.isSignal ?? !1, hostDirectives: t }; }
function oC(n = {}) { return { attributes: lC(n.attributes ?? {}), listeners: n.listeners ?? {}, properties: n.properties ?? {}, specialAttributes: { classAttr: n.classAttribute, styleAttr: n.styleAttribute } }; }
function qh(n) { let e = null; for (let t = 1; t < n.length; t += 2)
    e = e || {}, e[n[t - 1]] = n[t]; return e; }
function lC(n) { let e = {}; for (let t of Object.keys(n))
    e[t] = new H(n[t]); return e; }
function cC(n, e, t) { let { template: s, interpolation: r, defer: i } = ed(n.template, n.type.name, t, n.preserveWhitespaces ?? !1, n.interpolation, n.deferBlockDependencies), a = []; if (n.dependencies)
    for (let l of n.dependencies)
        switch (l.kind) {
            case "directive":
            case "component":
                a.push(Lo(l));
                break;
            case "pipe":
                a.push(pC(l));
                break;
        }
else
    (n.components || n.directives || n.pipes) && (n.components && a.push(...n.components.map(l => Lo(l, !0))), n.directives && a.push(...n.directives.map(l => Lo(l))), n.pipes && a.push(...hC(n.pipes))); let o = a.some(({ kind: l }) => l === Kt.Directive || l === Kt.NgModule); return ue(S({}, Kf(n, e)), { template: s, styles: n.styles ?? [], declarations: a, viewProviders: n.viewProviders !== void 0 ? new H(n.viewProviders) : null, animations: n.animations !== void 0 ? new H(n.animations) : null, defer: i, changeDetection: n.changeDetection ?? Ei.Default, encapsulation: n.encapsulation ?? xt.Emulated, interpolation: r, declarationListEmitMode: 2, relativeContextFilePath: "", i18nUseExternalIds: !0, relativeTemplatePath: null, hasDirectiveDependencies: o }); }
function uC(n) { return ue(S({}, n), { type: new H(n.type) }); }
function Lo(n, e = null) { return { kind: Kt.Directive, isComponent: e || n.kind === "component", selector: n.selector, type: new H(n.type), inputs: n.inputs ?? [], outputs: n.outputs ?? [], exportAs: n.exportAs ?? null }; }
function hC(n) { return n ? Object.keys(n).map(e => ({ kind: Kt.Pipe, name: e, type: new H(n[e]) })) : []; }
function pC(n) { return { kind: Kt.Pipe, name: n.name, type: new H(n.type) }; }
function ed(n, e, t, s, r, i) { let a = r ? ga.fromArray(r) : ot, o = jf(n, t, { preserveWhitespaces: s, interpolationConfig: a }); if (o.errors !== null) {
    let h = o.errors.map(p => p.toString()).join(", ");
    throw new Error(`Errors during JIT compilation of template for ${e}: ${h}`);
} let c = new Ja(null).bind({ template: o.nodes }); return { template: o, interpolation: a, defer: dC(c, i) }; }
function ws(n, e) { if (n.hasOwnProperty(e))
    return Nc(new H(n[e]), 0); }
function Uh(n, e) { if (n.hasOwnProperty(e))
    return new H(n[e]); }
function Hh(n) { let e = typeof n == "function" ? new H(n) : new Ee(n ?? null); return Nc(e, 0); }
function fC(n) { return n == null ? null : n.map(td); }
function td(n) { let e = n.attribute != null, t = n.token === null ? null : new H(n.token), s = e ? new H(n.attribute) : t; return nd(s, e, n.host, n.optional, n.self, n.skipSelf); }
function Wh(n) { let e = n.attribute ?? !1, t = n.token === null ? null : new H(n.token); return nd(t, e, n.host ?? !1, n.optional ?? !1, n.self ?? !1, n.skipSelf ?? !1); }
function nd(n, e, t, s, r, i) { let a = e ? d("unknown") : null; return { token: n, attributeNameType: a, host: t, optional: s, self: r, skipSelf: i }; }
function dC(n, e) { let t = n.getDeferBlocks(), s = new Map; for (let r = 0; r < t.length; r++) {
    let i = e?.[r];
    s.set(t[r], i ? new H(i) : null);
} return { mode: 0, blocks: s }; }
function mC(n, e, t) {
    let s = nC(t || {}), r = sC(s, e);
    if (r.length)
        throw new Error(r.map(i => i.msg).join(`
`));
    for (let i in n)
        n.hasOwnProperty(i) && n[i].forEach(a => { gC(a) ? s.properties[a.hostPropertyName || i] = rm("this", i) : vC(a) && (s.listeners[a.eventName || i] = `${i}(${(a.args || []).join(",")})`); });
    return s;
}
function gC(n) { return n.ngMetadataName === "HostBinding"; }
function vC(n) { return n.ngMetadataName === "HostListener"; }
function wC(n) { return n.ngMetadataName === "Input"; }
function EC(n) { return n.ngMetadataName === "Output"; }
function SC(n) { return Object.keys(n).reduce((e, t) => { let s = n[t]; return typeof s == "string" || Array.isArray(s) ? e[t] = xC(s) : e[t] = { bindingPropertyName: s.publicName, classPropertyName: t, transformFunction: s.transformFunction !== null ? new H(s.transformFunction) : null, required: s.isRequired, isSignal: s.isSignal }, e; }, {}); }
function xC(n) { return typeof n == "string" ? { bindingPropertyName: n, classPropertyName: n, transformFunction: null, required: !1, isSignal: !1 } : { bindingPropertyName: n[0], classPropertyName: n[1], transformFunction: n[2] ? new H(n[2]) : null, required: !1, isSignal: !1 }; }
function yC(n) { return n.reduce((e, t) => { if (typeof t == "string") {
    let [s, r] = sd(t);
    e[r] = { bindingPropertyName: s, classPropertyName: r, required: !1, isSignal: !1, transformFunction: null };
}
else
    e[t.name] = { bindingPropertyName: t.alias || t.name, classPropertyName: t.name, required: t.required || !1, isSignal: !1, transformFunction: t.transform != null ? new H(t.transform) : null }; return e; }, {}); }
function Bo(n) { return n.reduce((e, t) => { let [s, r] = sd(t); return e[r] = s, e; }, {}); }
function sd(n) { let [e, t] = n.split(":", 2).map(s => s.trim()); return [t ?? e, e]; }
function CC(n) { return { name: n.type.name, type: ge(n.type), typeArgumentCount: 0, pipeName: n.name, deps: null, pure: n.pure ?? !0, isStandalone: n.isStandalone ?? gp(n.version) }; }
function AC(n) { return { name: n.type.name, type: ge(n.type), providers: n.providers !== void 0 && n.providers.length > 0 ? new H(n.providers) : null, imports: n.imports !== void 0 ? n.imports.map(e => new H(e)) : [] }; }
function ZA(n) { let e = n.ng || (n.ng = {}); e.\u0275compilerFacade = new uc; }
var jh = class {
    defaultEncapsulation;
    preserveWhitespaces;
    strictInjectionParameters;
    constructor({ defaultEncapsulation: e = xt.Emulated, preserveWhitespaces: t, strictInjectionParameters: s } = {}) { this.defaultEncapsulation = e, this.preserveWhitespaces = _C(Xd(t)), this.strictInjectionParameters = s === !0; }
};
function _C(n, e = !1) { return n === null ? e : n; }
var rd = "i18n", ur = "i18n-", kC = /^i18n:?/, TC = "|", bC = "@@", zh = !1;
function IC(n, e, t, s, r) { return new to(t, s, r).extract(n, e); }
function NC(n, e, t, s, r) { return new to(s, r).merge(n, e, t); }
var hc = class {
    messages;
    errors;
    constructor(e, t) { this.messages = e, this.errors = t; }
}, Pt = (function (n) { return n[n.Extract = 0] = "Extract", n[n.Merge = 1] = "Merge", n; })(Pt || {}), to = class {
    _implicitTags;
    _implicitAttrs;
    _preserveSignificantWhitespace;
    _depth;
    _inI18nNode;
    _inImplicitNode;
    _inI18nBlock;
    _blockMeaningAndDesc;
    _blockChildren;
    _blockStartDepth;
    _inIcu;
    _msgCountAtSectionStart;
    _errors;
    _mode;
    _messages;
    _translations;
    _createI18nMessage;
    constructor(e, t, s = !0) { this._implicitTags = e, this._implicitAttrs = t, this._preserveSignificantWhitespace = s; }
    extract(e, t) { return this._init(Pt.Extract, t), e.forEach(s => s.visit(this, null)), this._inI18nBlock && this._reportError(e[e.length - 1], "Unclosed block"), new hc(this._messages, this._errors); }
    merge(e, t, s) { this._init(Pt.Merge, s), this._translations = t; let i = new De("wrapper", [], [], e, !1, void 0, void 0, void 0, !1).visit(this, null); return this._inI18nBlock && this._reportError(e[e.length - 1], "Unclosed block"), new Ys(i.children, this._errors); }
    visitExpansionCase(e, t) { let s = P(this, e.expression, t); if (this._mode === Pt.Merge)
        return new ui(e.value, s, e.sourceSpan, e.valueSourceSpan, e.expSourceSpan); }
    visitExpansion(e, t) { this._mayBeAddBlockChildren(e); let s = this._inIcu; this._inIcu || (this._isInTranslatableSection && this._addMessage([e]), this._inIcu = !0); let r = P(this, e.cases, t); return this._mode === Pt.Merge && (e = new wn(e.switchValue, e.type, r, e.sourceSpan, e.switchValueSourceSpan)), this._inIcu = s, e; }
    visitComment(e, t) { let s = DC(e); if (s && this._isInTranslatableSection) {
        this._reportError(e, "Could not start a block inside a translatable section");
        return;
    } let r = PC(e); if (r && !this._inI18nBlock) {
        this._reportError(e, "Trying to close an unopened block");
        return;
    } if (!this._inI18nNode && !this._inIcu) {
        if (this._inI18nBlock) {
            if (r)
                if (this._depth == this._blockStartDepth) {
                    this._closeTranslatableSection(e, this._blockChildren), this._inI18nBlock = !1;
                    let i = this._addMessage(this._blockChildren, this._blockMeaningAndDesc), a = this._translateMessage(e, i);
                    return P(this, a);
                }
                else {
                    this._reportError(e, "I18N blocks should not cross element boundaries");
                    return;
                }
        }
        else if (s) {
            if (!zh && console && console.warn) {
                zh = !0;
                let i = e.sourceSpan.details ? `, ${e.sourceSpan.details}` : "";
                console.warn(`I18n comments are deprecated, use an <ng-container> element instead (${e.sourceSpan.start}${i})`);
            }
            this._inI18nBlock = !0, this._blockStartDepth = this._depth, this._blockChildren = [], this._blockMeaningAndDesc = e.value.replace(kC, "").trim(), this._openTranslatableSection(e);
        }
    } }
    visitText(e, t) { return this._isInTranslatableSection && this._mayBeAddBlockChildren(e), e; }
    visitElement(e, t) { return this._visitElementLike(e, t); }
    visitAttribute(e, t) { throw new Error("unreachable code"); }
    visitBlock(e, t) { P(this, e.children, t); }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { return this._visitElementLike(e, t); }
    visitDirective(e, t) { throw new Error("unreachable code"); }
    _init(e, t) { this._mode = e, this._inI18nBlock = !1, this._inI18nNode = !1, this._depth = 0, this._inIcu = !1, this._msgCountAtSectionStart = void 0, this._errors = [], this._messages = [], this._inImplicitNode = !1, this._createI18nMessage = yf(t, Tp, !this._preserveSignificantWhitespace, this._preserveSignificantWhitespace); }
    _visitElementLike(e, t) { this._mayBeAddBlockChildren(e), this._depth++; let s = this._inI18nNode, r = this._inImplicitNode, i = [], a, o = e instanceof Ce ? e.tagName : e.name, l = LC(e), c = l ? l.value : "", h = this._implicitTags.some(g => o === g) && !this._inIcu && !this._isInTranslatableSection, p = !r && h; if (this._inImplicitNode = r || h, !this._isInTranslatableSection && !this._inIcu) {
        if (l || p) {
            this._inI18nNode = !0;
            let g = this._addMessage(e.children, c);
            a = this._translateMessage(e, g);
        }
        if (this._mode == Pt.Extract) {
            let g = l || p;
            g && this._openTranslatableSection(e), P(this, e.children), g && this._closeTranslatableSection(e, e.children);
        }
    }
    else
        (l || p) && this._reportError(e, "Could not mark an element as translatable inside a translatable section"), this._mode == Pt.Extract && P(this, e.children); return this._mode === Pt.Merge && (a || e.children).forEach(v => { let E = v.visit(this, t); E && !this._isInTranslatableSection && (i = i.concat(E)); }), this._visitAttributesOf(e), this._depth--, this._inI18nNode = s, this._inImplicitNode = r, this._mode === Pt.Merge ? e instanceof De ? new De(e.name, this._translateAttributes(e), this._translateDirectives(e), i, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.isVoid) : new Ce(e.componentName, e.tagName, e.fullName, this._translateAttributes(e), this._translateDirectives(e), i, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan) : null; }
    _visitAttributesOf(e) { let t = {}, s = this._implicitAttrs[e instanceof Ce ? e.tagName || "" : e.name] || []; e.attrs.filter(r => r instanceof En && r.name.startsWith(ur)).forEach(r => { t[r.name.slice(ur.length)] = r.value; }), e.attrs.forEach(r => { r.name in t ? this._addMessage([r], t[r.name]) : s.some(i => r.name === i) && this._addMessage([r]); }); }
    _addMessage(e, t) { if (e.length == 0 || this._isEmptyAttributeValue(e) || this._isPlaceholderOnlyAttributeValue(e) || this._isPlaceholderOnlyMessage(e))
        return null; let { meaning: s, description: r, id: i } = Gh(t), a = this._createI18nMessage(e, s, r, i); return this._messages.push(a), a; }
    _isEmptyAttributeValue(e) { return Xh(e) ? e[0].value.trim() === "" : !1; }
    _isPlaceholderOnlyAttributeValue(e) { if (!Xh(e))
        return !1; let t = e[0].valueTokens ?? [], s = t.filter(i => i.type === 17), r = t.filter(i => i.type === 16).map(i => i.parts[0].trim()).join(""); return s.length === 1 && r === ""; }
    _isPlaceholderOnlyMessage(e) { if (!BC(e))
        return !1; let t = e[0].tokens, s = t.filter(i => i.type === 8), r = t.filter(i => i.type === 5).map(i => i.parts[0].trim()).join(""); return s.length === 1 && r === ""; }
    _translateMessage(e, t) { if (t && this._mode === Pt.Merge) {
        let s = this._translations.get(t);
        if (s)
            return s;
        this._reportError(e, `Translation unavailable for message id="${this._translations.digest(t)}"`);
    } return []; }
    _translateAttributes(e) { let t = {}, s = []; return e.attrs.forEach(r => { r.name.startsWith(ur) && (t[r.name.slice(ur.length)] = Gh(r.value)); }), e.attrs.forEach(r => { if (!(r.name === rd || r.name.startsWith(ur)))
        if (r.value && r.value != "" && t.hasOwnProperty(r.name)) {
            let { meaning: i, description: a, id: o } = t[r.name], l = this._createI18nMessage([r], i, a, o), c = this._translations.get(l);
            if (c)
                if (c.length == 0)
                    s.push(new En(r.name, "", r.sourceSpan, void 0, void 0, void 0, void 0));
                else if (c[0] instanceof on) {
                    let h = c[0].value;
                    s.push(new En(r.name, h, r.sourceSpan, void 0, void 0, void 0, void 0));
                }
                else
                    this._reportError(e, `Unexpected translation for attribute "${r.name}" (id="${o || this._translations.digest(l)}")`);
            else
                this._reportError(e, `Translation unavailable for attribute "${r.name}" (id="${o || this._translations.digest(l)}")`);
        }
        else
            s.push(r); }), s; }
    _translateDirectives(e) { return e.directives.map(t => new Ba(t.name, this._translateAttributes(t), t.sourceSpan, t.startSourceSpan, t.endSourceSpan)); }
    _mayBeAddBlockChildren(e) { this._inI18nBlock && !this._inIcu && this._depth == this._blockStartDepth && this._blockChildren.push(e); }
    _openTranslatableSection(e) { this._isInTranslatableSection ? this._reportError(e, "Unexpected section start") : this._msgCountAtSectionStart = this._messages.length; }
    get _isInTranslatableSection() { return this._msgCountAtSectionStart !== void 0; }
    _closeTranslatableSection(e, t) { if (!this._isInTranslatableSection) {
        this._reportError(e, "Unexpected section end");
        return;
    } let s = this._msgCountAtSectionStart; if (t.reduce((i, a) => i + (a instanceof Nn ? 0 : 1), 0) == 1)
        for (let i = this._messages.length - 1; i >= s; i--) {
            let a = this._messages[i].nodes;
            if (!(a.length == 1 && a[0] instanceof Rt)) {
                this._messages.splice(i, 1);
                break;
            }
        } this._msgCountAtSectionStart = void 0; }
    _reportError(e, t) { this._errors.push(new N(e.sourceSpan, t)); }
};
function DC(n) { return !!(n instanceof Nn && n.value && n.value.startsWith("i18n")); }
function PC(n) { return !!(n instanceof Nn && n.value && n.value === "/i18n"); }
function LC(n) { return n.attrs.find(e => e instanceof En && e.name === rd) || null; }
function Gh(n) { if (!n)
    return { meaning: "", description: "", id: "" }; let e = n.indexOf(bC), t = n.indexOf(TC), [s, r] = e > -1 ? [n.slice(0, e), n.slice(e + 2)] : [n, ""], [i, a] = t > -1 ? [s.slice(0, t), s.slice(t + 1)] : ["", s]; return { meaning: i, description: a, id: r.trim() }; }
function BC(n) { return n.length === 1 && n[0] instanceof on; }
function Xh(n) { return n.length === 1 && n[0] instanceof En; }
var pc = class {
    closedByParent = !1;
    implicitNamespacePrefix = null;
    isVoid = !1;
    ignoreFirstLf = !1;
    canSelfClose = !0;
    preventNamespaceInheritance = !1;
    requireExtraParent(e) { return !1; }
    isClosedByChild(e) { return !1; }
    getContentType() { return Mt.PARSABLE_DATA; }
}, MC = new pc;
function RC(n) { return MC; }
var Dn = class extends mf {
    constructor() { super(RC); }
    parse(e, t, s = {}) { return super.parse(e, t, ue(S({}, s), { tokenizeBlocks: !1, tokenizeLet: !1, selectorlessEnabled: !1 })); }
}, FC = "1.2", $C = "urn:oasis:names:tc:xliff:document:1.2", OC = "en", zt = "x", VC = "mrk", qC = "file", id = "source", UC = "seg-source", HC = "alt-trans", WC = "target", fc = "trans-unit", jC = "context-group", Yh = "context", dc = class extends Us {
    write(e, t) { let s = new zC, r = []; e.forEach(l => { let c = []; l.sources.forEach(p => { let g = new M(jC, { purpose: "location" }); g.children.push(new j(10), new M(Yh, { "context-type": "sourcefile" }, [new Q(p.filePath)]), new j(10), new M(Yh, { "context-type": "linenumber" }, [new Q(`${p.startLine}`)]), new j(8)), c.push(new j(8), g); }); let h = new M(fc, { id: l.id, datatype: "html" }); h.children.push(new j(8), new M(id, {}, s.serialize(l.nodes)), ...c), l.description && h.children.push(new j(8), new M("note", { priority: "1", from: "description" }, [new Q(l.description)])), l.meaning && h.children.push(new j(8), new M("note", { priority: "1", from: "meaning" }, [new Q(l.meaning)])), h.children.push(new j(6)), r.push(new j(6), h); }); let i = new M("body", {}, [...r, new j(4)]), a = new M("file", { "source-language": t || OC, datatype: "plaintext", original: "ng2.template" }, [new j(4), i, new j(2)]), o = new M("xliff", { version: FC, xmlns: $C }, [new j(2), a, new j]); return Lc([new Yr({ version: "1.0", encoding: "UTF-8" }), new j, o, new j]); }
    load(e, t) {
        let s = new mc, { locale: r, msgIdToHtml: i, errors: a } = s.parse(e, t), o = {}, l = new GC;
        if (Object.keys(i).forEach(c => { let { i18nNodes: h, errors: p } = l.convert(i[c], t); a.push(...p), o[c] = h; }), a.length)
            throw new Error(`xliff parse errors:
${a.join(`
`)}`);
        return { locale: r, i18nNodesByMsgId: o };
    }
    digest(e) { return np(e); }
}, zC = class {
    visitText(e, t) { return [new Q(e.value)]; }
    visitContainer(e, t) { let s = []; return e.children.forEach(r => s.push(...r.visit(this))), s; }
    visitIcu(e, t) { let s = [new Q(`{${e.expressionPlaceholder}, ${e.type}, `)]; return Object.keys(e.cases).forEach(r => { s.push(new Q(`${r} {`), ...e.cases[r].visit(this), new Q("} ")); }), s.push(new Q("}")), s; }
    visitTagPlaceholder(e, t) { let s = XC(e.tag); if (e.isVoid)
        return [new M(zt, { id: e.startName, ctype: s, "equiv-text": `<${e.tag}/>` })]; let r = new M(zt, { id: e.startName, ctype: s, "equiv-text": `<${e.tag}>` }), i = new M(zt, { id: e.closeName, ctype: s, "equiv-text": `</${e.tag}>` }); return [r, ...this.serialize(e.children), i]; }
    visitPlaceholder(e, t) { return [new M(zt, { id: e.name, "equiv-text": `{{${e.value}}}` })]; }
    visitBlockPlaceholder(e, t) { let s = `x-${e.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`, r = new M(zt, { id: e.startName, ctype: s, "equiv-text": `@${e.name}` }), i = new M(zt, { id: e.closeName, ctype: s, "equiv-text": "}" }); return [r, ...this.serialize(e.children), i]; }
    visitIcuPlaceholder(e, t) { let s = `{${e.value.expression}, ${e.value.type}, ${Object.keys(e.value.cases).map(r => r + " {...}").join(" ")}}`; return [new M(zt, { id: e.name, "equiv-text": s })]; }
    serialize(e) { return [].concat(...e.map(t => t.visit(this))); }
}, mc = class {
    _unitMlString;
    _errors;
    _msgIdToHtml;
    _locale = null;
    parse(e, t) { this._unitMlString = null, this._msgIdToHtml = {}; let s = new Dn().parse(e, t); return this._errors = s.errors, P(this, s.rootNodes, null), { msgIdToHtml: this._msgIdToHtml, errors: this._errors, locale: this._locale }; }
    visitElement(e, t) { switch (e.name) {
        case fc:
            this._unitMlString = null;
            let s = e.attrs.find(c => c.name === "id");
            if (!s)
                this._addError(e, `<${fc}> misses the "id" attribute`);
            else {
                let c = s.value;
                this._msgIdToHtml.hasOwnProperty(c) ? this._addError(e, `Duplicated translations for msg ${c}`) : (P(this, e.children, null), typeof this._unitMlString == "string" ? this._msgIdToHtml[c] = this._unitMlString : this._addError(e, `Message ${c} misses a translation`));
            }
            break;
        case id:
        case UC:
        case HC: break;
        case WC:
            let r = e.startSourceSpan.end.offset, i = e.endSourceSpan.start.offset, o = e.startSourceSpan.start.file.content.slice(r, i);
            this._unitMlString = o;
            break;
        case qC:
            let l = e.attrs.find(c => c.name === "target-language");
            l && (this._locale = l.value), P(this, e.children, null);
            break;
        default: P(this, e.children, null);
    } }
    visitAttribute(e, t) { }
    visitText(e, t) { }
    visitComment(e, t) { }
    visitExpansion(e, t) { }
    visitExpansionCase(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { }
    visitDirective(e, t) { }
    _addError(e, t) { this._errors.push(new N(e.sourceSpan, t)); }
}, GC = class {
    _errors;
    convert(e, t) { let s = new Dn().parse(e, t, { tokenizeExpansionForms: !0 }); return this._errors = s.errors, { i18nNodes: this._errors.length > 0 || s.rootNodes.length == 0 ? [] : [].concat(...P(this, s.rootNodes)), errors: this._errors }; }
    visitText(e, t) { return new Rt(e.value, e.sourceSpan); }
    visitElement(e, t) { if (e.name === zt) {
        let s = e.attrs.find(r => r.name === "id");
        return s ? new pt("", s.value, e.sourceSpan) : (this._addError(e, `<${zt}> misses the "id" attribute`), null);
    } return e.name === VC ? [].concat(...P(this, e.children)) : (this._addError(e, "Unexpected tag"), null); }
    visitExpansion(e, t) { let s = {}; return P(this, e.cases).forEach(r => { s[r.value] = new et(r.nodes, e.sourceSpan); }), new kn(e.switchValue, e.type, s, e.sourceSpan); }
    visitExpansionCase(e, t) { return { value: e.value, nodes: P(this, e.expression) }; }
    visitComment(e, t) { }
    visitAttribute(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { this._addError(e, "Unexpected node"); }
    visitDirective(e, t) { this._addError(e, "Unexpected node"); }
    _addError(e, t) { this._errors.push(new N(e.sourceSpan, t)); }
};
function XC(n) { switch (n.toLowerCase()) {
    case "br": return "lb";
    case "img": return "image";
    default: return `x-${n}`;
} }
var YC = "2.0", QC = "urn:oasis:names:tc:xliff:document:2.0", ZC = "en", jn = "ph", gc = "pc", JC = "mrk", ad = "xliff", od = "source", KC = "target", vc = "unit", wc = class extends Us {
    write(e, t) { let s = new Ec, r = []; e.forEach(o => { let l = new M(vc, { id: o.id }), c = new M("notes"); (o.description || o.meaning) && (o.description && c.children.push(new j(8), new M("note", { category: "description" }, [new Q(o.description)])), o.meaning && c.children.push(new j(8), new M("note", { category: "meaning" }, [new Q(o.meaning)]))), o.sources.forEach(p => { c.children.push(new j(8), new M("note", { category: "location" }, [new Q(`${p.filePath}:${p.startLine}${p.endLine !== p.startLine ? "," + p.endLine : ""}`)])); }), c.children.push(new j(6)), l.children.push(new j(6), c); let h = new M("segment"); h.children.push(new j(8), new M(od, {}, s.serialize(o.nodes)), new j(6)), l.children.push(new j(6), h, new j(4)), r.push(new j(4), l); }); let i = new M("file", { original: "ng.template", id: "ngi18n" }, [...r, new j(2)]), a = new M(ad, { version: YC, xmlns: QC, srcLang: t || ZC }, [new j(2), i, new j]); return Lc([new Yr({ version: "1.0", encoding: "UTF-8" }), new j, a, new j]); }
    load(e, t) {
        let s = new Sc, { locale: r, msgIdToHtml: i, errors: a } = s.parse(e, t), o = {}, l = new eA;
        if (Object.keys(i).forEach(c => { let { i18nNodes: h, errors: p } = l.convert(i[c], t); a.push(...p), o[c] = h; }), a.length)
            throw new Error(`xliff2 parse errors:
${a.join(`
`)}`);
        return { locale: r, i18nNodesByMsgId: o };
    }
    digest(e) { return Tc(e); }
}, Ec = class {
    _nextPlaceholderId = 0;
    visitText(e, t) { return [new Q(e.value)]; }
    visitContainer(e, t) { let s = []; return e.children.forEach(r => s.push(...r.visit(this))), s; }
    visitIcu(e, t) { let s = [new Q(`{${e.expressionPlaceholder}, ${e.type}, `)]; return Object.keys(e.cases).forEach(r => { s.push(new Q(`${r} {`), ...e.cases[r].visit(this), new Q("} ")); }), s.push(new Q("}")), s; }
    visitTagPlaceholder(e, t) { let s = tA(e.tag); if (e.isVoid)
        return [new M(jn, { id: (this._nextPlaceholderId++).toString(), equiv: e.startName, type: s, disp: `<${e.tag}/>` })]; let r = new M(gc, { id: (this._nextPlaceholderId++).toString(), equivStart: e.startName, equivEnd: e.closeName, type: s, dispStart: `<${e.tag}>`, dispEnd: `</${e.tag}>` }), i = [].concat(...e.children.map(a => a.visit(this))); return i.length ? i.forEach(a => r.children.push(a)) : r.children.push(new Q("")), [r]; }
    visitPlaceholder(e, t) { let s = (this._nextPlaceholderId++).toString(); return [new M(jn, { id: s, equiv: e.name, disp: `{{${e.value}}}` })]; }
    visitBlockPlaceholder(e, t) { let s = new M(gc, { id: (this._nextPlaceholderId++).toString(), equivStart: e.startName, equivEnd: e.closeName, type: "other", dispStart: `@${e.name}`, dispEnd: "}" }), r = [].concat(...e.children.map(i => i.visit(this))); return r.length ? r.forEach(i => s.children.push(i)) : s.children.push(new Q("")), [s]; }
    visitIcuPlaceholder(e, t) { let s = Object.keys(e.value.cases).map(i => i + " {...}").join(" "), r = (this._nextPlaceholderId++).toString(); return [new M(jn, { id: r, equiv: e.name, disp: `{${e.value.expression}, ${e.value.type}, ${s}}` })]; }
    serialize(e) { return this._nextPlaceholderId = 0, [].concat(...e.map(t => t.visit(this))); }
}, Sc = class {
    _unitMlString;
    _errors;
    _msgIdToHtml;
    _locale = null;
    parse(e, t) { this._unitMlString = null, this._msgIdToHtml = {}; let s = new Dn().parse(e, t); return this._errors = s.errors, P(this, s.rootNodes, null), { msgIdToHtml: this._msgIdToHtml, errors: this._errors, locale: this._locale }; }
    visitElement(e, t) { switch (e.name) {
        case vc:
            this._unitMlString = null;
            let s = e.attrs.find(h => h.name === "id");
            if (!s)
                this._addError(e, `<${vc}> misses the "id" attribute`);
            else {
                let h = s.value;
                this._msgIdToHtml.hasOwnProperty(h) ? this._addError(e, `Duplicated translations for msg ${h}`) : (P(this, e.children, null), typeof this._unitMlString == "string" ? this._msgIdToHtml[h] = this._unitMlString : this._addError(e, `Message ${h} misses a translation`));
            }
            break;
        case od: break;
        case KC:
            let r = e.startSourceSpan.end.offset, i = e.endSourceSpan.start.offset, o = e.startSourceSpan.start.file.content.slice(r, i);
            this._unitMlString = o;
            break;
        case ad:
            let l = e.attrs.find(h => h.name === "trgLang");
            l && (this._locale = l.value);
            let c = e.attrs.find(h => h.name === "version");
            if (c) {
                let h = c.value;
                h !== "2.0" ? this._addError(e, `The XLIFF file version ${h} is not compatible with XLIFF 2.0 serializer`) : P(this, e.children, null);
            }
            break;
        default: P(this, e.children, null);
    } }
    visitAttribute(e, t) { }
    visitText(e, t) { }
    visitComment(e, t) { }
    visitExpansion(e, t) { }
    visitExpansionCase(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { }
    visitDirective(e, t) { }
    _addError(e, t) { this._errors.push(new N(e.sourceSpan, t)); }
}, eA = class {
    _errors;
    convert(e, t) { let s = new Dn().parse(e, t, { tokenizeExpansionForms: !0 }); return this._errors = s.errors, { i18nNodes: this._errors.length > 0 || s.rootNodes.length == 0 ? [] : [].concat(...P(this, s.rootNodes)), errors: this._errors }; }
    visitText(e, t) { return new Rt(e.value, e.sourceSpan); }
    visitElement(e, t) { switch (e.name) {
        case jn:
            let s = e.attrs.find(a => a.name === "equiv");
            if (s)
                return [new pt("", s.value, e.sourceSpan)];
            this._addError(e, `<${jn}> misses the "equiv" attribute`);
            break;
        case gc:
            let r = e.attrs.find(a => a.name === "equivStart"), i = e.attrs.find(a => a.name === "equivEnd");
            if (!r)
                this._addError(e, `<${jn}> misses the "equivStart" attribute`);
            else if (!i)
                this._addError(e, `<${jn}> misses the "equivEnd" attribute`);
            else {
                let a = r.value, o = i.value;
                return [].concat(new pt("", a, e.sourceSpan), ...e.children.map(c => c.visit(this, null)), new pt("", o, e.sourceSpan));
            }
            break;
        case JC: return [].concat(...P(this, e.children));
        default: this._addError(e, "Unexpected tag");
    } return null; }
    visitExpansion(e, t) { let s = {}; return P(this, e.cases).forEach(r => { s[r.value] = new et(r.nodes, e.sourceSpan); }), new kn(e.switchValue, e.type, s, e.sourceSpan); }
    visitExpansionCase(e, t) { return { value: e.value, nodes: [].concat(...P(this, e.expression)) }; }
    visitComment(e, t) { }
    visitAttribute(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { this._addError(e, "Unexpected node"); }
    visitDirective(e, t) { this._addError(e, "Unexpected node"); }
    _addError(e, t) { this._errors.push(new N(e.sourceSpan, t)); }
};
function tA(n) { switch (n.toLowerCase()) {
    case "br":
    case "b":
    case "i":
    case "u": return "fmt";
    case "img": return "image";
    case "a": return "link";
    default: return "other";
} }
var Qh = "translationbundle", Zh = "translation", Jh = "ph", xc = class extends Us {
    write(e, t) { throw new Error("Unsupported"); }
    load(e, t) {
        let s = new yc, { locale: r, msgIdToHtml: i, errors: a } = s.parse(e, t), o = {}, l = new Cc;
        if (Object.keys(i).forEach(c => {
            nA(o, c, function () {
                let { i18nNodes: p, errors: g } = l.convert(i[c], t);
                if (g.length)
                    throw new Error(`xtb parse errors:
${g.join(`
`)}`);
                return p;
            });
        }), a.length)
            throw new Error(`xtb parse errors:
${a.join(`
`)}`);
        return { locale: r, i18nNodesByMsgId: o };
    }
    digest(e) { return xp(e); }
    createNameMapper(e) { return new ma(e, Bc); }
};
function nA(n, e, t) { Object.defineProperty(n, e, { configurable: !0, enumerable: !0, get: function () { let s = t(); return Object.defineProperty(n, e, { enumerable: !0, value: s }), s; }, set: s => { throw new Error("Could not overwrite an XTB translation"); } }); }
var yc = class {
    _bundleDepth;
    _errors;
    _msgIdToHtml;
    _locale = null;
    parse(e, t) { this._bundleDepth = 0, this._msgIdToHtml = {}; let s = new Dn().parse(e, t); return this._errors = s.errors, P(this, s.rootNodes), { msgIdToHtml: this._msgIdToHtml, errors: this._errors, locale: this._locale }; }
    visitElement(e, t) { switch (e.name) {
        case Qh:
            this._bundleDepth++, this._bundleDepth > 1 && this._addError(e, `<${Qh}> elements can not be nested`);
            let s = e.attrs.find(i => i.name === "lang");
            s && (this._locale = s.value), P(this, e.children, null), this._bundleDepth--;
            break;
        case Zh:
            let r = e.attrs.find(i => i.name === "id");
            if (!r)
                this._addError(e, `<${Zh}> misses the "id" attribute`);
            else {
                let i = r.value;
                if (this._msgIdToHtml.hasOwnProperty(i))
                    this._addError(e, `Duplicated translations for msg ${i}`);
                else {
                    let a = e.startSourceSpan.end.offset, o = e.endSourceSpan.start.offset, c = e.startSourceSpan.start.file.content.slice(a, o);
                    this._msgIdToHtml[i] = c;
                }
            }
            break;
        default: this._addError(e, "Unexpected tag");
    } }
    visitAttribute(e, t) { }
    visitText(e, t) { }
    visitComment(e, t) { }
    visitExpansion(e, t) { }
    visitExpansionCase(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { this._addError(e, "Unexpected node"); }
    visitDirective(e, t) { this._addError(e, "Unexpected node"); }
    _addError(e, t) { this._errors.push(new N(e.sourceSpan, t)); }
}, Cc = class {
    _errors;
    convert(e, t) { let s = new Dn().parse(e, t, { tokenizeExpansionForms: !0 }); return this._errors = s.errors, { i18nNodes: this._errors.length > 0 || s.rootNodes.length == 0 ? [] : P(this, s.rootNodes), errors: this._errors }; }
    visitText(e, t) { return new Rt(e.value, e.sourceSpan); }
    visitExpansion(e, t) { let s = {}; return P(this, e.cases).forEach(r => { s[r.value] = new et(r.nodes, e.sourceSpan); }), new kn(e.switchValue, e.type, s, e.sourceSpan); }
    visitExpansionCase(e, t) { return { value: e.value, nodes: P(this, e.expression) }; }
    visitElement(e, t) { if (e.name === Jh) {
        let s = e.attrs.find(r => r.name === "name");
        if (s)
            return new pt("", s.value, e.sourceSpan);
        this._addError(e, `<${Jh}> misses the "name" attribute`);
    }
    else
        this._addError(e, "Unexpected tag"); return null; }
    visitComment(e, t) { }
    visitAttribute(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { this._addError(e, "Unexpected node"); }
    visitDirective(e, t) { this._addError(e, "Unexpected node"); }
    _addError(e, t) { this._errors.push(new N(e.sourceSpan, t)); }
}, no = class n {
    _i18nNodesByMsgId;
    digest;
    mapperFactory;
    _i18nToHtml;
    constructor(e = {}, t, s, r, i = Ns.Warning, a) { this._i18nNodesByMsgId = e, this.digest = s, this.mapperFactory = r, this._i18nToHtml = new Ac(e, t, s, r, i, a); }
    static load(e, t, s, r, i) { let { locale: a, i18nNodesByMsgId: o } = s.load(e, t), l = h => s.digest(h), c = h => s.createNameMapper(h); return new n(o, a, l, c, r, i); }
    get(e) {
        let t = this._i18nToHtml.convert(e);
        if (t.errors.length)
            throw new Error(t.errors.join(`
`));
        return t.nodes;
    }
    has(e) { return this.digest(e) in this._i18nNodesByMsgId; }
}, Ac = class {
    _i18nNodesByMsgId;
    _locale;
    _digest;
    _mapperFactory;
    _missingTranslationStrategy;
    _console;
    _srcMsg;
    _errors = [];
    _contextStack = [];
    _mapper;
    constructor(e = {}, t, s, r, i, a) { this._i18nNodesByMsgId = e, this._locale = t, this._digest = s, this._mapperFactory = r, this._missingTranslationStrategy = i, this._console = a; }
    convert(e) { this._contextStack.length = 0, this._errors.length = 0; let t = this._convertToText(e), s = e.nodes[0].sourceSpan.start.file.url, r = new Ga().parse(t, s, { tokenizeExpansionForms: !0 }); return { nodes: r.rootNodes, errors: [...this._errors, ...r.errors] }; }
    visitText(e, t) { return lo(e.value); }
    visitContainer(e, t) { return e.children.map(s => s.visit(this)).join(""); }
    visitIcu(e, t) { let s = Object.keys(e.cases).map(i => `${i} {${e.cases[i].visit(this)}}`); return `{${this._srcMsg.placeholders.hasOwnProperty(e.expression) ? this._srcMsg.placeholders[e.expression].text : e.expression}, ${e.type}, ${s.join(" ")}}`; }
    visitPlaceholder(e, t) { let s = this._mapper(e.name); return this._srcMsg.placeholders.hasOwnProperty(s) ? this._srcMsg.placeholders[s].text : this._srcMsg.placeholderToMessage.hasOwnProperty(s) ? this._convertToText(this._srcMsg.placeholderToMessage[s]) : (this._addError(e, `Unknown placeholder "${e.name}"`), ""); }
    visitTagPlaceholder(e, t) { let s = `${e.tag}`, r = Object.keys(e.attrs).map(a => `${a}="${e.attrs[a]}"`).join(" "); if (e.isVoid)
        return `<${s} ${r}/>`; let i = e.children.map(a => a.visit(this)).join(""); return `<${s} ${r}>${i}</${s}>`; }
    visitIcuPlaceholder(e, t) { return this._convertToText(this._srcMsg.placeholderToMessage[e.name]); }
    visitBlockPlaceholder(e, t) { let s = e.parameters.length === 0 ? "" : ` (${e.parameters.join("; ")})`, r = e.children.map(i => i.visit(this)).join(""); return `@${e.name}${s} {${r}}`; }
    _convertToText(e) { let t = this._digest(e), s = this._mapperFactory ? this._mapperFactory(e) : null, r; if (this._contextStack.push({ msg: this._srcMsg, mapper: this._mapper }), this._srcMsg = e, this._i18nNodesByMsgId.hasOwnProperty(t))
        r = this._i18nNodesByMsgId[t], this._mapper = o => s ? s.toInternalName(o) : o;
    else {
        if (this._missingTranslationStrategy === Ns.Error) {
            let o = this._locale ? ` for locale "${this._locale}"` : "";
            this._addError(e.nodes[0], `Missing translation for message "${t}"${o}`);
        }
        else if (this._console && this._missingTranslationStrategy === Ns.Warning) {
            let o = this._locale ? ` for locale "${this._locale}"` : "";
            this._console.warn(`Missing translation for message "${t}"${o}`);
        }
        r = e.nodes, this._mapper = o => o;
    } let i = r.map(o => o.visit(this)).join(""), a = this._contextStack.pop(); return this._srcMsg = a.msg, this._mapper = a.mapper, i; }
    _addError(e, t) { this._errors.push(new N(e.sourceSpan, t)); }
}, Kh = class {
    _htmlParser;
    getTagDefinition;
    _translationBundle;
    constructor(e, t, s, r = Ns.Warning, i) { if (this._htmlParser = e, t) {
        let a = sA(s);
        this._translationBundle = no.load(t, "i18n", a, r, i);
    }
    else
        this._translationBundle = new no({}, null, np, void 0, r, i); }
    parse(e, t, s = {}) { let r = s.interpolationConfig || ot, i = this._htmlParser.parse(e, t, S({ interpolationConfig: r }, s)); return i.errors.length ? new Ys(i.rootNodes, i.errors) : NC(i.rootNodes, this._translationBundle, r, [], {}); }
};
function sA(n) { switch (n = (n || "xlf").toLowerCase(), n) {
    case "xmb": return new hl;
    case "xtb": return new xc;
    case "xliff2":
    case "xlf2": return new wc;
    case "xliff":
    case "xlf":
    default: return new dc;
} }
var ep = class {
    _htmlParser;
    _implicitTags;
    _implicitAttrs;
    _locale;
    _preserveWhitespace;
    _messages = [];
    constructor(e, t, s, r = null, i = !0) { this._htmlParser = e, this._implicitTags = t, this._implicitAttrs = s, this._locale = r, this._preserveWhitespace = i; }
    updateFromTemplate(e, t, s) { let r = this._htmlParser.parse(e, t, { tokenizeExpansionForms: !0, interpolationConfig: s }); if (r.errors.length)
        return r.errors; let i = this._preserveWhitespace ? r.rootNodes : wt(new fi(!1), r.rootNodes), a = IC(i, s, this._implicitTags, this._implicitAttrs, this._preserveWhitespace); return a.errors.length ? a.errors : (this._messages.push(...a.messages), []); }
    getMessages() { return this._messages; }
    write(e, t) { let s = {}, r = new _c; this._messages.forEach(a => { let o = e.digest(a); s.hasOwnProperty(o) ? s[o].sources.push(...a.sources) : s[o] = a; }); let i = Object.keys(s).map(a => { let o = e.createNameMapper(s[a]), l = s[a], c = o ? r.convert(l.nodes, o) : l.nodes, h = new Ie(c, {}, {}, l.meaning, l.description, a); return h.sources = l.sources, t && h.sources.forEach(p => p.filePath = t(p.filePath)), h; }); return e.write(i, this._locale); }
}, _c = class extends ol {
    convert(e, t) { return t ? e.map(s => s.visit(this, t)) : e; }
    visitTagPlaceholder(e, t) { let s = t.toPublicName(e.startName), r = e.closeName ? t.toPublicName(e.closeName) : e.closeName, i = e.children.map(a => a.visit(this, t)); return new qt(e.tag, e.attrs, s, r, i, e.isVoid, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); }
    visitBlockPlaceholder(e, t) { let s = t.toPublicName(e.startName), r = e.closeName ? t.toPublicName(e.closeName) : e.closeName, i = e.children.map(a => a.visit(this, t)); return new Ut(e.name, e.parameters, s, r, i, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); }
    visitPlaceholder(e, t) { return new pt(e.value, t.toPublicName(e.name), e.sourceSpan); }
    visitIcuPlaceholder(e, t) { return new Tn(e.value, t.toPublicName(e.name), e.sourceSpan); }
};
function rA(n) { let e = ld(n); return ie([], [Ir(e).toStmt()]).callFn([]); }
function ld(n) { return y(f.setClassMetadata).callFn([n.type, n.decorators, n.ctorParameters ?? d(null), n.propDecorators ?? d(null)]); }
function t_(n, e) { return e === null || e.length === 0 ? rA(n) : cd(n, e.map(t => new J(t.symbolName, He)), ud(e)); }
function n_(n, e, t) { return cd(n, t.map(s => new J(s, He)), e); }
function cd(n, e, t) { let s = ld(n), r = ie(e, [s.toStmt()]), i = y(f.setClassMetadataAsync).callFn([n.type, t, r]); return ie([], [Ir(i).toStmt()]).callFn([]); }
function ud(n) { let e = n.map(({ symbolName: t, importPath: s, isDefaultImport: r }) => { let i = ie([new J("m", He)], D("m").prop(r ? "default" : t)); return new es(s).prop("then").callFn([i]); }); return ie([], R(e)); }
var iA = "12.0.0", aA = "18.0.0";
function oA(n) { let e = new ae; return e.set("minVersion", d(iA)), e.set("version", d("20.3.7")), e.set("ngImport", y(f.core)), e.set("type", n.type), e.set("decorators", n.decorators), e.set("ctorParameters", n.ctorParameters), e.set("propDecorators", n.propDecorators), y(f.declareClassMetadata).callFn([e.toLiteralMap()]); }
function s_(n, e) { if (e === null || e.length === 0)
    return oA(n); let t = new ae, s = new ae; return s.set("decorators", n.decorators), s.set("ctorParameters", n.ctorParameters ?? d(null)), s.set("propDecorators", n.propDecorators ?? d(null)), t.set("minVersion", d(aA)), t.set("version", d("20.3.7")), t.set("ngImport", y(f.core)), t.set("type", n.type), t.set("resolveDeferredDeps", ud(e)), t.set("resolveMetadata", ie(e.map(r => new J(r.symbolName, He)), s.toLiteralMap())), y(f.declareClassMetadataAsync).callFn([t.toLiteralMap()]); }
function gr(n, e) { return n === null || n.length === 0 ? null : R(n.map(t => e(t))); }
function Mo(n, e) { let t = Object.keys(n).map(s => { let r = n[s]; return { key: s, value: e(r), quoted: !0 }; }); return t.length > 0 ? he(t) : null; }
function lA(n) { return n === "invalid" ? d("invalid") : n === null ? d(null) : R(n.map(hd)); }
function hd(n) { let e = new ae; return e.set("token", n.token), n.attributeNameType !== null && e.set("attribute", d(!0)), n.host && e.set("host", d(!0)), n.optional && e.set("optional", d(!0)), n.self && e.set("self", d(!0)), n.skipSelf && e.set("skipSelf", d(!0)), e.toLiteralMap(); }
function r_(n) { let e = pd(n), t = y(f.declareDirective).callFn([e.toLiteralMap()]), s = Qf(n); return { expression: t, type: s, statements: [] }; }
function pd(n) { let e = new ae, t = cA(n); return e.set("minVersion", d(t)), e.set("version", d("20.3.7")), e.set("type", n.type.value), n.isStandalone !== void 0 && e.set("isStandalone", d(n.isStandalone)), n.isSignal && e.set("isSignal", d(n.isSignal)), n.selector !== null && e.set("selector", d(n.selector)), e.set("inputs", fd(n) ? pA(n.inputs) : fA(n.inputs)), e.set("outputs", dl(n.outputs)), e.set("host", uA(n.host)), e.set("providers", n.providers), n.queries.length > 0 && e.set("queries", R(n.queries.map(tp))), n.viewQueries.length > 0 && e.set("viewQueries", R(n.viewQueries.map(tp))), n.exportAs !== null && e.set("exportAs", Me(n.exportAs)), n.usesInheritance && e.set("usesInheritance", d(!0)), n.lifecycle.usesOnChanges && e.set("usesOnChanges", d(!0)), n.hostDirectives?.length && e.set("hostDirectives", hA(n.hostDirectives)), e.set("ngImport", y(f.core)), e; }
function cA(n) { let e = "14.0.0"; return Object.values(n.inputs).some(s => s.transformFunction !== null) && (e = "16.1.0"), fd(n) && (e = "17.1.0"), (n.queries.some(s => s.isSignal) || n.viewQueries.some(s => s.isSignal)) && (e = "17.2.0"), e; }
function fd(n) { return Object.values(n.inputs).some(e => e.isSignal); }
function tp(n) { let e = new ae; return e.set("propertyName", d(n.propertyName)), n.first && e.set("first", d(!0)), e.set("predicate", Array.isArray(n.predicate) ? Me(n.predicate) : xs(n.predicate)), n.emitDistinctChangesOnly || e.set("emitDistinctChangesOnly", d(!1)), n.descendants && e.set("descendants", d(!0)), e.set("read", n.read), n.static && e.set("static", d(!0)), n.isSignal && e.set("isSignal", d(!0)), e.toLiteralMap(); }
function uA(n) { let e = new ae; return e.set("attributes", Mo(n.attributes, t => t)), e.set("listeners", Mo(n.listeners, d)), e.set("properties", Mo(n.properties, d)), n.specialAttributes.styleAttr && e.set("styleAttribute", d(n.specialAttributes.styleAttr)), n.specialAttributes.classAttr && e.set("classAttribute", d(n.specialAttributes.classAttr)), e.values.length > 0 ? e.toLiteralMap() : null; }
function hA(n) { let e = n.map(t => { let s = [{ key: "directive", value: t.isForwardReference ? Dc(t.directive.type) : t.directive.type, quoted: !1 }], r = t.inputs ? Za(t.inputs) : null, i = t.outputs ? Za(t.outputs) : null; return r && s.push({ key: "inputs", value: r, quoted: !1 }), i && s.push({ key: "outputs", value: i, quoted: !1 }), he(s); }); return R(e); }
function pA(n) { let e = Object.getOwnPropertyNames(n); return e.length === 0 ? null : he(e.map(t => { let s = n[t]; return { key: t, quoted: Rc.test(t), value: he([{ key: "classPropertyName", quoted: !1, value: Me(s.classPropertyName) }, { key: "publicName", quoted: !1, value: Me(s.bindingPropertyName) }, { key: "isSignal", quoted: !1, value: Me(s.isSignal) }, { key: "isRequired", quoted: !1, value: Me(s.required) }, { key: "transformFunction", quoted: !1, value: s.transformFunction ?? yn }]) }; })); }
function fA(n) { let e = Object.getOwnPropertyNames(n); return e.length === 0 ? null : he(e.map(t => { let s = n[t], r = s.bindingPropertyName, i = r !== t, a; if (i || s.transformFunction !== null) {
    let o = [Me(r), Me(t)];
    s.transformFunction !== null && o.push(s.transformFunction), a = R(o);
}
else
    a = Me(r); return { key: t, quoted: Rc.test(t), value: a }; })); }
function i_(n, e, t) { let s = dA(n, e, t), r = y(f.declareComponent).callFn([s.toLiteralMap()]), i = Xf(n); return { expression: r, type: i, statements: [] }; }
function dA(n, e, t) { let s = pd(n), r = new kc; if (z(r, e.nodes), s.set("template", mA(e, t)), t.isInline && s.set("isInline", d(!0)), r.hasBlocks && s.set("minVersion", d("17.0.0")), s.set("styles", gr(n.styles, d)), s.set("dependencies", vA(n)), s.set("viewProviders", n.viewProviders), s.set("animations", n.animations), n.changeDetection !== null) {
    if (typeof n.changeDetection == "object")
        throw new Error("Impossible state! Change detection flag is not resolved!");
    s.set("changeDetection", y(f.ChangeDetectionStrategy).prop(Ei[n.changeDetection]));
} if (n.encapsulation !== xt.Emulated && s.set("encapsulation", y(f.ViewEncapsulation).prop(xt[n.encapsulation])), n.interpolation !== ot && s.set("interpolation", R([d(n.interpolation.start), d(n.interpolation.end)])), e.preserveWhitespaces === !0 && s.set("preserveWhitespaces", d(!0)), n.defer.mode === 0) {
    let i = [], a = !1;
    for (let o of n.defer.blocks.values())
        o === null ? i.push(d(null)) : (i.push(o), a = !0);
    a && s.set("deferBlockDependencies", R(i));
}
else
    throw new Error("Unsupported defer function emit mode in partial compilation"); return s; }
function mA(n, e) { if (e.inlineTemplateLiteralExpression !== null)
    return e.inlineTemplateLiteralExpression; if (e.isInline)
    return d(e.content, null, null); let t = e.content, s = new ei(t, e.sourceUrl), r = new os(s, 0, 0, 0), i = gA(s, t), a = new L(r, i); return d(t, null, a); }
function gA(n, e) {
    let t = e.length, s = 0, r = 0, i = 0;
    do
        s = e.indexOf(`
`, r), s !== -1 && (r = s + 1, i++);
    while (s !== -1);
    return new os(n, t, i, t - r);
}
function vA(n) { let e = n.declarationListEmitMode !== 0 ? Dc : t => t; if (n.declarationListEmitMode === 3)
    throw new Error("Unsupported emit mode"); return gr(n.declarations, t => { switch (t.kind) {
    case Kt.Directive:
        let s = new ae;
        return s.set("kind", d(t.isComponent ? "component" : "directive")), s.set("type", e(t.type)), s.set("selector", d(t.selector)), s.set("inputs", gr(t.inputs, d)), s.set("outputs", gr(t.outputs, d)), s.set("exportAs", gr(t.exportAs, d)), s.toLiteralMap();
    case Kt.Pipe:
        let r = new ae;
        return r.set("kind", d("pipe")), r.set("type", e(t.type)), r.set("name", d(t.name)), r.toLiteralMap();
    case Kt.NgModule:
        let i = new ae;
        return i.set("kind", d("ngmodule")), i.set("type", e(t.type)), i.toLiteralMap();
} }); }
var kc = class extends pm {
    hasBlocks = !1;
    visitDeferredBlock() { this.hasBlocks = !0; }
    visitDeferredBlockPlaceholder() { this.hasBlocks = !0; }
    visitDeferredBlockLoading() { this.hasBlocks = !0; }
    visitDeferredBlockError() { this.hasBlocks = !0; }
    visitIfBlock() { this.hasBlocks = !0; }
    visitIfBlockBranch() { this.hasBlocks = !0; }
    visitForLoopBlock() { this.hasBlocks = !0; }
    visitForLoopBlockEmpty() { this.hasBlocks = !0; }
    visitSwitchBlock() { this.hasBlocks = !0; }
    visitSwitchBlockCase() { this.hasBlocks = !0; }
}, wA = "12.0.0";
function a_(n) { let e = new ae; return e.set("minVersion", d(wA)), e.set("version", d("20.3.7")), e.set("ngImport", y(f.core)), e.set("type", n.type.value), e.set("deps", lA(n.deps)), e.set("target", y(f.FactoryTarget).prop(Bt[n.target])), { expression: y(f.declareFactory).callFn([e.toLiteralMap()]), statements: [], type: wp(n) }; }
var EA = "12.0.0";
function o_(n) { let e = SA(n), t = y(f.declareInjectable).callFn([e.toLiteralMap()]), s = kp(n); return { expression: t, type: s, statements: [] }; }
function SA(n) { let e = new ae; if (e.set("minVersion", d(EA)), e.set("version", d("20.3.7")), e.set("ngImport", y(f.core)), e.set("type", n.type.value), n.providedIn !== void 0) {
    let t = xs(n.providedIn);
    t.value !== null && e.set("providedIn", t);
} return n.useClass !== void 0 && e.set("useClass", xs(n.useClass)), n.useExisting !== void 0 && e.set("useExisting", xs(n.useExisting)), n.useValue !== void 0 && e.set("useValue", xs(n.useValue)), n.useFactory !== void 0 && e.set("useFactory", n.useFactory), n.deps !== void 0 && e.set("deps", R(n.deps.map(hd))), e; }
var xA = "12.0.0";
function l_(n) { let e = yA(n), t = y(f.declareInjector).callFn([e.toLiteralMap()]), s = qp(n); return { expression: t, type: s, statements: [] }; }
function yA(n) { let e = new ae; return e.set("minVersion", d(xA)), e.set("version", d("20.3.7")), e.set("ngImport", y(f.core)), e.set("type", n.type.value), e.set("providers", n.providers), n.imports.length > 0 && e.set("imports", R(n.imports)), e; }
var CA = "14.0.0";
function c_(n) { let e = AA(n), t = y(f.declareNgModule).callFn([e.toLiteralMap()]), s = Up(n); return { expression: t, type: s, statements: [] }; }
function AA(n) { let e = new ae; if (n.kind === Yt.Local)
    throw new Error("Invalid path! Local compilation mode should not get into the partial compilation path"); return e.set("minVersion", d(CA)), e.set("version", d("20.3.7")), e.set("ngImport", y(f.core)), e.set("type", n.type.value), n.bootstrap.length > 0 && e.set("bootstrap", Ct(n.bootstrap, n.containsForwardDecls)), n.declarations.length > 0 && e.set("declarations", Ct(n.declarations, n.containsForwardDecls)), n.imports.length > 0 && e.set("imports", Ct(n.imports, n.containsForwardDecls)), n.exports.length > 0 && e.set("exports", Ct(n.exports, n.containsForwardDecls)), n.schemas !== null && n.schemas.length > 0 && e.set("schemas", R(n.schemas.map(t => t.value))), n.id !== null && e.set("id", n.id), e; }
var _A = "14.0.0";
function u_(n) { let e = kA(n), t = y(f.declarePipe).callFn([e.toLiteralMap()]), s = Hp(n); return { expression: t, type: s, statements: [] }; }
function kA(n) { let e = new ae; return e.set("minVersion", d(_A)), e.set("version", d("20.3.7")), e.set("ngImport", y(f.core)), e.set("type", n.type.value), n.isStandalone !== void 0 && e.set("isStandalone", d(n.isStandalone)), e.set("name", d(n.pipeName ?? n.name)), n.pure === !1 && e.set("pure", d(n.pure)), e; }
function h_(n) { let e = { className: n.className }; n.filePath && (e.filePath = n.filePath, e.lineNumber = n.lineNumber), n.forbidOrphanRendering && (e.forbidOrphanRendering = d(!0)); let t = y(f.setClassDebugInfo).callFn([n.type, La(e)]); return ie([], [Ir(t).toStmt()]).callFn([]); }
function p_(n) { let i = `${n.className}_HmrLoad`, a = n.namespaceDependencies.map(b => new tn({ moduleName: b.moduleName, name: null })), o = D("m").prop("default"), l = y(f.replaceMetadata).callFn([n.type, o, R(a), R(n.localDependencies.map(b => b.runtimeRepresentation)), D("import").prop("meta"), D("id")]), c = ie([new J("m")], o.and(l)), h = y(f.getReplaceMetadataURL).callFn([D("id"), D("t"), D("import").prop("meta").prop("url")]), p = new An(i, [new J("t")], [new es(h, null, "@vite-ignore").prop("then").callFn([c]).toStmt()], null, le.Final), g = ie([new J("d")], D("d").prop("id").identical(D("id")).and(D(i).callFn([D("d").prop("timestamp")]))), v = D(i).callFn([D("Date").prop("now").callFn([])]), E = D("import").prop("meta").prop("hot"), C = E.clone().prop("on").callFn([d("angular:component-update"), g]); return ie([], [new ce("id", d(encodeURIComponent(`${n.filePath}@${n.className}`)), null, le.Final), p, Ir(v).toStmt(), Ir(E.and(C)).toStmt()]).callFn([]); }
function f_(n, e, t) { let s = "\u0275\u0275namespaces", r = [t.className, s].map(a => new J(a, He)), i = []; for (let a of t.localDependencies)
    r.push(new J(a.name)); for (let a = 0; a < t.namespaceDependencies.length; a++)
    i.push(new ce(t.namespaceDependencies[a].assignedName, D(s).key(d(a)), He, le.Final)); i.push(...e); for (let a of n)
    if (a.initializer !== null) {
        i.push(D(t.className).prop(a.name).set(a.initializer).toStmt());
        for (let o of a.statements)
            i.push(o);
    } return new An(`${t.className}_UpdateMetadata`, r, i, null, le.Final); }
var d_ = new zo("20.3.7");
export { se as AST, Nr as ASTWithName, Xe as ASTWithSource, Ze as AbsoluteSourceSpan, qo as ArrayType, xn as ArrowFunctionExpr, En as Attribute, Ne as Binary, x as BinaryOperator, W as BinaryOperatorExpr, ta as BindingPipe, qi as BindingPipeType, G as BindingType, at as Block, Ma as BlockParameter, oa as BoundElementProperty, _t as BuiltinType, jt as BuiltinTypeName, $o as CUSTOM_ELEMENTS_SCHEMA, Fs as Call, Rs as Chain, Ei as ChangeDetectionStrategy, ac as CombinedRecursiveAstVisitor, jo as CommaExpr, Nn as Comment, jh as CompilerConfig, uc as CompilerFacadeImpl, Ce as Component, ea as Conditional, Tt as ConditionalExpr, Zi as ConstantPool, Jn as CssSelector, ot as DEFAULT_INTERPOLATION_CONFIG, He as DYNAMIC_TYPE, An as DeclareFunctionStmt, ce as DeclareVarStmt, Ba as Directive, Qs as DomElementSchemaRegistry, es as DynamicImportExpr, bi as EOF, De as Element, Vl as ElementSchemaRegistry, Yo as EmitterVisitorContext, $e as EmptyExpr, wn as Expansion, ui as ExpansionCase, Y as Expression, Zo as ExpressionBinding, nt as ExpressionStatement, Je as ExpressionType, tn as ExternalExpr, Wo as ExternalReference, Bt as FactoryTarget, Zt as FunctionExpr, Ga as HtmlParser, q as HtmlTagDefinition, Kh as I18NHtmlParser, br as IfStmt, $t as ImplicitReceiver, Ls as InstantiateExpr, xi as Interpolation, ga as InterpolationConfig, Fe as InvokeFunctionExpr, Tr as JSDocComment, wl as JitEvaluator, rs as KeyedRead, kr as LeadingComment, Ra as LetDeclaration, di as Lexer, na as LiteralArray, dt as LiteralArrayExpr, Ee as LiteralExpr, sa as LiteralMap, bt as LiteralMapExpr, Ge as LiteralPrimitive, _r as LocalizedString, Uo as MapType, ep as MessageBundle, kt as NONE_TYPE, Oo as NO_ERRORS_SCHEMA, an as NodeWithI18n, Rr as NonNullAssert, Ms as NotExpr, ft as ParenthesizedExpr, Or as ParenthesizedExpression, N as ParseError, mn as ParseErrorLevel, os as ParseLocation, ei as ParseSourceFile, L as ParseSourceSpan, ns as ParseSpan, Ys as ParseTreeResult, aa as ParsedEvent, Be as ParsedEventType, ys as ParsedProperty, Lt as ParsedPropertyType, Jo as ParsedVariable, $a as Parser, Lr as PrefixNot, Jt as PropertyRead, f as R3Identifiers, Yt as R3NgModuleMetadataKind, Sa as R3SelectorScopeMode, Ja as R3TargetBinder, Kt as R3TemplateDependencyKind, Ft as ReadKeyExpr, We as ReadPropExpr, tt as ReadVarExpr, qr as RecursiveAstVisitor, Hu as RecursiveVisitor, cc as ResourceLoader, xe as ReturnStatement, Hw as SCHEMA, th as SECURITY_SCHEMA, io as STRING_TYPE, ra as SafeCall, Pr as SafeKeyedRead, Dr as SafePropertyRead, Fo as SelectorContext, Ro as SelectorListContext, yr as SelectorMatcher, zi as SelectorlessMatcher, Us as Serializer, Rl as SplitInterpolation, Cn as Statement, le as StmtModifier, Er as StringToken, Yn as StringTokenKind, Mt as TagContentType, Fr as TaggedTemplateLiteral, Ps as TaggedTemplateLiteralExpr, Fl as TemplateBindingParseResult, $r as TemplateLiteral, ia as TemplateLiteralElement, Ar as TemplateLiteralElementExpr, Bs as TemplateLiteralExpr, on as Text, ss as ThisReceiver, mt as TmplAstBlockNode, tl as TmplAstBoundAttribute, la as TmplAstBoundDeferredTrigger, nl as TmplAstBoundEvent, $s as TmplAstBoundText, vr as TmplAstComponent, qs as TmplAstContent, is as TmplAstDeferredBlock, Wr as TmplAstDeferredBlockError, Hr as TmplAstDeferredBlockLoading, Ur as TmplAstDeferredBlockPlaceholder, Vt as TmplAstDeferredTrigger, Ep as TmplAstDirective, Ot as TmplAstElement, Vs as TmplAstForLoopBlock, zr as TmplAstForLoopBlockEmpty, Xr as TmplAstHostElement, ca as TmplAstHoverDeferredTrigger, Sp as TmplAstIcu, rl as TmplAstIdleDeferredTrigger, fa as TmplAstIfBlock, Gn as TmplAstIfBlockBranch, il as TmplAstImmediateDeferredTrigger, ua as TmplAstInteractionDeferredTrigger, Pc as TmplAstLetDeclaration, sl as TmplAstNeverDeferredTrigger, pm as TmplAstRecursiveVisitor, Gr as TmplAstReference, pa as TmplAstSwitchBlock, jr as TmplAstSwitchBlockCase, Ke as TmplAstTemplate, Un as TmplAstText, Os as TmplAstTextAttribute, al as TmplAstTimerDeferredTrigger, da as TmplAstUnknownBlock, _n as TmplAstVariable, ha as TmplAstViewportDeferredTrigger, Nt as Token, O as TokenType, Yi as TransplantedType, pe as TreeError, Sn as Type, Ic as TypeModifier, Kn as TypeofExpr, Br as TypeofExpression, Ts as Unary, Ds as UnaryOperator, nn as UnaryOperatorExpr, d_ as VERSION, Vr as VariableBinding, zo as Version, xt as ViewEncapsulation, Cr as VoidExpr, Mr as VoidExpression, H as WrappedNodeExpr, dc as Xliff, wc as Xliff2, hl as Xmb, Dn as XmlParser, xc as Xtb, xf as _ATTR_TO_PROP, h_ as compileClassDebugInfo, rA as compileClassMetadata, t_ as compileComponentClassMetadata, s_ as compileComponentDeclareClassMetadata, Qy as compileComponentFromMetadata, oA as compileDeclareClassMetadata, i_ as compileDeclareComponentFromMetadata, r_ as compileDeclareDirectiveFromMetadata, a_ as compileDeclareFactoryFunction, o_ as compileDeclareInjectableFromMetadata, l_ as compileDeclareInjectorFromMetadata, c_ as compileDeclareNgModuleFromMetadata, u_ as compileDeclarePipeFromMetadata, YA as compileDeferResolverFunction, Yy as compileDirectiveFromMetadata, $n as compileFactoryFunction, p_ as compileHmrInitializer, f_ as compileHmrUpdateCallback, gu as compileInjectable, _u as compileInjector, Wm as compileNgModule, n_ as compileOpaqueAsyncClassMetadata, ku as compilePipeFromMetadata, ip as computeMsgId, TA as core, Am as createCssSelectorFromNode, kp as createInjectableType, Nc as createMayBeForwardRefExpression, Ir as devOnlyGuardedExpression, md as emitDistinctChangesOnlyDefaultValue, XA as encapsulateStyle, NA as escapeRegExp, QA as findMatchingDirectivesAndPipes, ql as getHtmlTagDefinition, el as getNsPrefix, rm as getSafePropertyAccessString, Vm as identifierName, du as isNgContainer, Ko as isNgContent, hm as isNgTemplate, up as jsDocComment, Bd as leadingComment, d as literal, he as literalMap, Ya as makeBindingParser, Ui as mergeNsAndName, IA as outputAst, nC as parseHostBindings, jf as parseTemplate, _C as preserveWhitespacesDefault, ZA as publishFacade, $m as r3JitTypeSourceSpan, On as sanitizeIdentifier, GA as setEnableTemplateSourceLocations, It as splitNsName, z as tmplAstVisitAll, sC as verifyHostBindings, P as visitAll };
/*! Bundled license information:

@angular/compiler/fesm2022/compiler.mjs:
  (**
   * @license Angular v20.3.7
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)

@angular/compiler/fesm2022/compiler.mjs:
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
  (**
   *
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
