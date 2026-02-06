import { a as Nt } from "@nf-internal/chunk-HR77KNDT";
import { c as Ct, e as E } from "@nf-internal/chunk-FJYW2LMB";
var Ye = E(($, De) => { (function (e, t) { typeof $ == "object" && typeof De < "u" ? t($) : typeof define == "function" && define.amd ? define(["exports"], t) : (e = e || self, t(e.curriable = {})); })($, function (e) {
    "use strict";
    var t = typeof Symbol == "function" ? Symbol("curriable placeholder") : 60881;
    function n(a, f) { function l(d) { return function () { var o = d.length, v = arguments, g = v.length, c = [], m = 0, O = f, S; if (o)
        for (var w = -1; ++w < o;)
            c[w] = S = d[w] === t && m < g ? v[m++] : d[w], S !== t && --O; if (m < g)
        for (; m < g;)
            c[c.length] = S = v[m], S !== t && m < f && --O, ++m; return O > 0 ? l(c) : a.apply(this, c); }; } return l([]); }
    function r(a, f) { var l = typeof f == "number" ? f : a.length, d = n(a, l); return d.arity = l, d.fn = a, d; }
    r.__ = t;
    function i(a) { return a === t; }
    r.isPlaceholder = i;
    function u(a) { return a.fn; }
    r.uncurry = u, e.__ = t, e.curry = r, e.default = r, e.isPlaceholder = i, e.uncurry = u, Object.defineProperty(e, "__esModule", { value: !0 });
}); });
var Je = E(y => {
    "use strict";
    y.__esModule = !0;
    y.UNPARSEABLE_TAGS = y.TYPEDARRAY_TAGS = y.TOSTRING_TAGS = y.SELF_TAGS = y.PRIMITIVE_TAGS = y.ITERABLE_TAGS = y.OBJECT_CLASS_TYPE_MAP = y.OBJECT_CLASS_MAP = y.SVG_ELEMENT_REGEXP = y.HTML_ELEMENT_REGEXP = y.HAS_UINT16ARRAY_SUPPORT = y.HAS_BUFFER_FROM_SUPPORT = void 0;
    var Q, Z, L, q, jt = typeof Buffer < "u" && typeof Buffer.from == "function";
    y.HAS_BUFFER_FROM_SUPPORT = jt;
    var Ft = typeof Uint16Array == "function";
    y.HAS_UINT16ARRAY_SUPPORT = Ft;
    var It = /\[object (HTML(.*)Element)\]/;
    y.HTML_ELEMENT_REGEXP = It;
    var Bt = /\[object (SVG(.*)Element)\]/;
    y.SVG_ELEMENT_REGEXP = Bt;
    var Ut = ["Arguments", "Array", "ArrayBuffer", "Boolean", "DataView", "Date", "DocumentFragment", "Error", "Event", "Float32Array", "Float64Array", "Function", "Generator", "GeneratorFunction", "HTMLElement", "Int8Array", "Int16Array", "Int32Array", "Map", "Null", "Number", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "Undefined", "WeakMap", "WeakSet", "Window"], de = Ut.reduce(function (e, t) { return e["[object " + t + "]"] = t, e; }, {});
    y.OBJECT_CLASS_MAP = de;
    var b = Object.keys(de).reduce(function (e, t) { return e[de[t].toUpperCase()] = t, e; }, {});
    y.OBJECT_CLASS_TYPE_MAP = b;
    var Gt = { "[object Map]": !0, "[object Set]": !0 };
    y.ITERABLE_TAGS = Gt;
    var kt = { boolean: !0, function: !0, number: !0, string: !0, undefined: !0 };
    y.PRIMITIVE_TAGS = kt;
    var qt = (Q = {}, Q[b.ARGUMENTS] = !0, Q[b.ARRAY] = !0, Q);
    y.SELF_TAGS = qt;
    var Dt = (Z = {}, Z[b.REGEXP] = !0, Z[b.SYMBOL] = !0, Z);
    y.TOSTRING_TAGS = Dt;
    var Yt = (L = {}, L[b.FLOAT32ARRAY] = !0, L[b.FLOAT64ARRAY] = !0, L[b.INT8ARRAY] = !0, L[b.INT16ARRAY] = !0, L[b.INT32ARRAY] = !0, L[b.UINT8ARRAY] = !0, L[b.UINT8CLAMPEDARRAY] = !0, L[b.UINT16ARRAY] = !0, L[b.UINT32ARRAY] = !0, L);
    y.TYPEDARRAY_TAGS = Yt;
    var Jt = (q = {}, q[b.GENERATOR] = !0, q[b.PROMISE] = !0, q[b.WEAKMAP] = !0, q[b.WEAKSET] = !0, q);
    y.UNPARSEABLE_TAGS = Jt;
});
var tt = E(A => {
    "use strict";
    A.__esModule = !0;
    A.getFunctionName = Ve;
    A.getIntegerHashValue = Ht;
    A.getSortedEvent = He;
    A.shouldSort = ye;
    A.shouldSortPair = ze;
    A.sort = te;
    A.getSortedIterable = Ke;
    A.getSortedObject = We;
    A.getStringifiedArrayBufferFallback = Xe;
    A.getStringifiedArrayBufferModern = $e;
    A.getStringifiedArrayBufferNoSupport = Qe;
    A.getStringifiedDocumentFragment = Ze;
    A.getCutoffIndex = _e;
    A.getNormalizedValue = H;
    A.createReplacer = et;
    A.stringify = ee;
    A.getStringifiedArrayBuffer = void 0;
    var h = Je(), xt = /^\s*function\s*([^(]*)/i, xe = Object.prototype.toString, Vt = Object.keys;
    function Ve(e) { return e.name || (e.toString().match(xt) || [])[1] || "anonymous"; }
    function Ht(e) { for (var t = e.length, n = 5381, r = 52711, i; t--;)
        i = e.charCodeAt(t), n = n * 33 ^ i, r = r * 33 ^ i; return (n >>> 0) * 4096 + (r >>> 0); }
    function He(e) { return { bubbles: e.bubbles, cancelBubble: e.cancelBubble, cancelable: e.cancelable, composed: e.composed, currentTarget: e.currentTarget, defaultPrevented: e.defaultPrevented, eventPhase: e.eventPhase, isTrusted: e.isTrusted, returnValue: e.returnValue, target: e.target, type: e.type }; }
    function ye(e, t) { return e > t; }
    function ze(e, t) { return e[0] > t[0]; }
    function te(e, t) { for (var n, r, i = 0; i < e.length; ++i) {
        for (r = e[i], n = i - 1; ~n && t(e[n], r); --n)
            e[n + 1] = e[n];
        e[n + 1] = r;
    } return e; }
    function Ke(e, t, n) { var r = typeof e.get == "function", i = []; r ? (e.forEach(function (d, o) { i.push([ee(o, t, n), ee(d, t, n)]); }), te(i, ze)) : (e.forEach(function (d) { i.push(ee(d, t, n)); }), te(i, ye)); for (var u = Ve(e.constructor) + "|[", a = 0, f = i.length, l; a < f; ++a)
        l = i[a], u += (a ? "," : "") + (r ? "[" + l[0] + "," + l[1] + "]" : l); return u + "]"; }
    function We(e) { for (var t = te(Vt(e), ye), n = {}, r, i = 0; i < t.length; ++i)
        r = t[i], n[r] = e[r]; return n; }
    function Xe(e) { return String.fromCharCode.apply(null, new Uint16Array(e)); }
    function $e(e) { return Buffer.from(e).toString("utf8"); }
    function Qe() { return ""; }
    var he = (function () { return h.HAS_BUFFER_FROM_SUPPORT ? $e : h.HAS_UINT16ARRAY_SUPPORT ? Xe : Qe; })();
    A.getStringifiedArrayBuffer = he;
    function Ze(e) { for (var t = e.children, n = "", r = 0; r < t.length; ++r)
        n += t[r].outerHTML; return n; }
    function _e(e, t) { for (var n = 0; n < e.length; ++n)
        if (e[n] === t)
            return n + 1; return 0; }
    function H(e, t, n, r) { if (r === void 0) {
        var i = typeof e;
        if (i === "string" || h.PRIMITIVE_TAGS[i])
            return i + "|" + e;
        if (e === null)
            return "null|" + e;
    } var u = r || xe.call(e); return h.SELF_TAGS[u] ? e : u === h.OBJECT_CLASS_TYPE_MAP.OBJECT ? We(e) : h.TOSTRING_TAGS[u] ? h.OBJECT_CLASS_MAP[u] + "|" + e.toString() : h.ITERABLE_TAGS[u] ? Ke(e, t, n) : u === h.OBJECT_CLASS_TYPE_MAP.DATE ? h.OBJECT_CLASS_MAP[u] + "|" + e.getTime() : u === h.OBJECT_CLASS_TYPE_MAP.ERROR ? h.OBJECT_CLASS_MAP[u] + "|" + e.stack : u === h.OBJECT_CLASS_TYPE_MAP.EVENT ? He(e) : h.UNPARSEABLE_TAGS[u] ? h.OBJECT_CLASS_MAP[u] + "|NOT_ENUMERABLE" : h.HTML_ELEMENT_REGEXP.test(u) || h.SVG_ELEMENT_REGEXP.test(u) ? u.slice(8, -1) + "|" + e.outerHTML : u === h.OBJECT_CLASS_TYPE_MAP.DOCUMENTFRAGMENT ? h.OBJECT_CLASS_MAP[u] + "|" + Ze(e) : h.TYPEDARRAY_TAGS[u] ? h.OBJECT_CLASS_MAP[u] + "|" + e.join(",") : u === h.OBJECT_CLASS_TYPE_MAP.ARRAYBUFFER ? h.OBJECT_CLASS_MAP[u] + "|" + he(e) : u === h.OBJECT_CLASS_TYPE_MAP.DATAVIEW ? h.OBJECT_CLASS_MAP[u] + "|" + he(e.buffer) : e; }
    function et(e, t) { return e === void 0 && (e = []), t === void 0 && (t = []), function (n, r) { if (typeof r == "object")
        if (e.length) {
            var i = _e(e, this);
            i === 0 ? e.push(this) : (e.splice(i), t.splice(i)), t.push(n);
            var u = _e(e, r);
            if (u !== 0)
                return "[~" + (t.slice(0, u).join(".") || ".") + "]";
            e.push(r);
        }
        else
            e[0] = r, t[0] = n; return n && this[n] instanceof Date ? H(this[n], e, t, h.OBJECT_CLASS_TYPE_MAP.DATE, e, t) : H(r, e, t); }; }
    function ee(e, t, n) { if (!e || typeof e != "object")
        return H(e, t, n); var r = xe.call(e); return r === h.OBJECT_CLASS_TYPE_MAP.DATE || r === h.OBJECT_CLASS_TYPE_MAP.REGEXP ? H(e, t, n, r) : JSON.stringify(e, et(t, n)); }
});
var nt = E(z => {
    "use strict";
    z.__esModule = !0;
    z.hash = T;
    z.default = void 0;
    var re = Ye(), rt = tt();
    function T(e) { return (0, rt.getIntegerHashValue)((0, rt.stringify)(e)); }
    T.is = (0, re.curry)(function (e, t) { return T(e) === T(t); });
    T.is.all = (0, re.curry)(function (e) { for (var t = T.is(e), n = 1; n < arguments.length; ++n)
        if (!t(arguments[n]))
            return !1; return !0; }, 2);
    T.is.any = (0, re.curry)(function (e) { for (var t = T.is(e), n = 1; n < arguments.length; n++)
        if (t(arguments[n]))
            return !0; return !1; }, 2);
    T.is.not = (0, re.curry)(function (e, t) { return T(e) !== T(t); });
    var zt = T;
    z.default = zt;
});
var ne = E(ge => {
    "use strict";
    Object.defineProperty(ge, "__esModule", { value: !0 });
    var Kt = (function () { function e(t, n) { for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; })(), Wt = nt(), Xt = $t(Wt);
    function $t(e) { return e && e.__esModule ? e : { default: e }; }
    function Qt(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    var pe = (function () { function e(t, n, r) { Qt(this, e), this.id = t; var i = { cache: !0 }; if (typeof r > "u" && (r = i), typeof n != "function" ? (this.value = n, this.type = this.constructor.CONSTANT) : (this.calculationMethod = n, this.type = this.constructor.DYNAMIC), !this.id)
        throw new Error("factId required"); return this.priority = parseInt(r.priority || 1, 10), this.options = Object.assign({}, i, r), this.cacheKeyMethod = this.defaultCacheKeys, this; } return Kt(e, [{ key: "isConstant", value: function () { return this.type === this.constructor.CONSTANT; } }, { key: "isDynamic", value: function () { return this.type === this.constructor.DYNAMIC; } }, { key: "calculate", value: function (n, r) { return Object.prototype.hasOwnProperty.call(this, "value") ? this.value : this.calculationMethod(n, r); } }, { key: "defaultCacheKeys", value: function (n, r) { return { params: r, id: n }; } }, { key: "getCacheKey", value: function (n) { if (this.options.cache === !0) {
                var r = this.cacheKeyMethod(this.id, n), i = e.hashFromObject(r);
                return i;
            } } }], [{ key: "hashFromObject", value: function (n) { return (0, Xt.default)(n); } }]), e; })();
    pe.CONSTANT = "CONSTANT";
    pe.DYNAMIC = "DYNAMIC";
    ge.default = pe;
});
var K = E(me => {
    "use strict";
    Object.defineProperty(me, "__esModule", { value: !0 });
    me.default = Zt;
    function Zt(e) { try {
        (typeof process < "u" && process.env && process.env.DEBUG && process.env.DEBUG.match(/json-rules-engine/) || typeof window < "u" && window.localStorage && window.localStorage.debug && window.localStorage.debug.match(/json-rules-engine/)) && console.log(e);
    }
    catch { } }
});
var Ee = E((Sn, it) => { function er(e) { return !!e && typeof e == "object"; } it.exports = er; });
var at = E(Ae => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    var tr = (function () { function e(t, n) { for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; })(), rr = K(), nr = ut(rr), ir = Ee(), ur = ut(ir);
    function ut(e) { return e && e.__esModule ? e : { default: e }; }
    function ar(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    var or = (function () { function e(t) { if (ar(this, e), !t)
        throw new Error("Condition: constructor options required"); var n = e.booleanOperator(t); if (Object.assign(this, t), n) {
        var r = t[n];
        if (!Array.isArray(r))
            throw new Error('"' + n + '" must be an array');
        this.operator = n, this.priority = parseInt(t.priority, 10) || 1, this[n] = r.map(function (i) { return new e(i); });
    }
    else {
        if (!Object.prototype.hasOwnProperty.call(t, "fact"))
            throw new Error('Condition: constructor "fact" property required');
        if (!Object.prototype.hasOwnProperty.call(t, "operator"))
            throw new Error('Condition: constructor "operator" property required');
        if (!Object.prototype.hasOwnProperty.call(t, "value"))
            throw new Error('Condition: constructor "value" property required');
        Object.prototype.hasOwnProperty.call(t, "priority") && (t.priority = parseInt(t.priority, 10));
    } } return tr(e, [{ key: "toJSON", value: function () { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, r = {}; this.priority && (r.priority = this.priority); var i = e.booleanOperator(this); return i ? r[i] = this[i].map(function (u) { return u.toJSON(n); }) : (r.operator = this.operator, r.value = this.value, r.fact = this.fact, this.factResult !== void 0 && (r.factResult = this.factResult), this.result !== void 0 && (r.result = this.result), this.params && (r.params = this.params), this.path && (r.path = this.path)), n ? JSON.stringify(r) : r; } }, { key: "_getValue", value: function (n) { var r = this.value; return (0, ur.default)(r) && Object.prototype.hasOwnProperty.call(r, "fact") ? n.factValue(r.fact, r.params, r.path) : Promise.resolve(r); } }, { key: "evaluate", value: function (n, r) { var i = this; if (!n)
                return Promise.reject(new Error("almanac required")); if (!r)
                return Promise.reject(new Error("operatorMap required")); if (this.isBooleanOperator())
                return Promise.reject(new Error("Cannot evaluate() a boolean condition")); var u = r.get(this.operator); return u ? this._getValue(n).then(function (a) { return n.factValue(i.fact, i.params, i.path).then(function (f) { var l = u.evaluate(f, a); return (0, nr.default)("condition::evaluate <" + f + " " + i.operator + " " + a + "?> (" + l + ")"), { result: l, leftHandSideValue: f, rightHandSideValue: a, operator: i.operator }; }); }) : Promise.reject(new Error("Unknown operator: " + this.operator)); } }, { key: "booleanOperator", value: function () { return e.booleanOperator(this); } }, { key: "isBooleanOperator", value: function () { return e.booleanOperator(this) !== void 0; } }], [{ key: "booleanOperator", value: function (n) { if (Object.prototype.hasOwnProperty.call(n, "any"))
                return "any"; if (Object.prototype.hasOwnProperty.call(n, "all"))
                return "all"; } }]), e; })();
    Ae.default = or;
});
var ot = E((Rn, ie) => { var fr = (function () {
    "use strict";
    function e(o, v) { return v != null && o instanceof v; }
    var t;
    try {
        t = Map;
    }
    catch {
        t = function () { };
    }
    var n;
    try {
        n = Set;
    }
    catch {
        n = function () { };
    }
    var r;
    try {
        r = Promise;
    }
    catch {
        r = function () { };
    }
    function i(o, v, g, c, m) { typeof v == "object" && (g = v.depth, c = v.prototype, m = v.includeNonEnumerable, v = v.circular); var O = [], S = [], w = typeof Buffer < "u"; typeof v > "u" && (v = !0), typeof g > "u" && (g = 1 / 0); function P(s, N) { if (s === null)
        return null; if (N === 0)
        return s; var p, B; if (typeof s != "object")
        return s; if (e(s, t))
        p = new t;
    else if (e(s, n))
        p = new n;
    else if (e(s, r))
        p = new r(function (J, x) { s.then(function (V) { J(P(V, N - 1)); }, function (V) { x(P(V, N - 1)); }); });
    else if (i.__isArray(s))
        p = [];
    else if (i.__isRegExp(s))
        p = new RegExp(s.source, d(s)), s.lastIndex && (p.lastIndex = s.lastIndex);
    else if (i.__isDate(s))
        p = new Date(s.getTime());
    else {
        if (w && Buffer.isBuffer(s))
            return Buffer.allocUnsafe ? p = Buffer.allocUnsafe(s.length) : p = new Buffer(s.length), s.copy(p), p;
        e(s, Error) ? p = Object.create(s) : typeof c > "u" ? (B = Object.getPrototypeOf(s), p = Object.create(B)) : (p = Object.create(c), B = c);
    } if (v) {
        var U = O.indexOf(s);
        if (U != -1)
            return S[U];
        O.push(s), S.push(p);
    } e(s, t) && s.forEach(function (J, x) { var V = P(x, N - 1), Mt = P(J, N - 1); p.set(V, Mt); }), e(s, n) && s.forEach(function (J) { var x = P(J, N - 1); p.add(x); }); for (var R in s) {
        var ve;
        B && (ve = Object.getOwnPropertyDescriptor(B, R)), !(ve && ve.set == null) && (p[R] = P(s[R], N - 1));
    } if (Object.getOwnPropertySymbols)
        for (var ke = Object.getOwnPropertySymbols(s), R = 0; R < ke.length; R++) {
            var W = ke[R], k = Object.getOwnPropertyDescriptor(s, W);
            k && !k.enumerable && !m || (p[W] = P(s[W], N - 1), k.enumerable || Object.defineProperty(p, W, { enumerable: !1 }));
        } if (m)
        for (var qe = Object.getOwnPropertyNames(s), R = 0; R < qe.length; R++) {
            var X = qe[R], k = Object.getOwnPropertyDescriptor(s, X);
            k && k.enumerable || (p[X] = P(s[X], N - 1), Object.defineProperty(p, X, { enumerable: !1 }));
        } return p; } return P(o, g); }
    i.clonePrototype = function (v) { if (v === null)
        return null; var g = function () { }; return g.prototype = v, new g; };
    function u(o) { return Object.prototype.toString.call(o); }
    i.__objToStr = u;
    function a(o) { return typeof o == "object" && u(o) === "[object Date]"; }
    i.__isDate = a;
    function f(o) { return typeof o == "object" && u(o) === "[object Array]"; }
    i.__isArray = f;
    function l(o) { return typeof o == "object" && u(o) === "[object RegExp]"; }
    i.__isRegExp = l;
    function d(o) { var v = ""; return o.global && (v += "g"), o.ignoreCase && (v += "i"), o.multiline && (v += "m"), v; }
    return i.__getRegExpFlags = d, i;
})(); typeof ie == "object" && ie.exports && (ie.exports = fr); });
var ft = E(Oe => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    var sr = (function () { function e(t, n) { for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; })(), lr = ot(), ue = cr(lr);
    function cr(e) { return e && e.__esModule ? e : { default: e }; }
    function vr(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    var dr = (function () { function e(t, n, r, i) { vr(this, e), this.conditions = (0, ue.default)(t), this.event = (0, ue.default)(n), this.priority = (0, ue.default)(r), this.name = (0, ue.default)(i), this.result = null; } return sr(e, [{ key: "setResult", value: function (n) { this.result = n; } }, { key: "toJSON", value: function () { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, r = { conditions: this.conditions.toJSON(!1), event: this.event, priority: this.priority, name: this.name, result: this.result }; return n ? JSON.stringify(r) : r; } }]), e; })();
    Oe.default = dr;
});
var Se = E((Pn, be) => {
    "use strict";
    var D = typeof Reflect == "object" ? Reflect : null, st = D && typeof D.apply == "function" ? D.apply : function (t, n, r) { return Function.prototype.apply.call(t, n, r); }, ae;
    D && typeof D.ownKeys == "function" ? ae = D.ownKeys : Object.getOwnPropertySymbols ? ae = function (t) { return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)); } : ae = function (t) { return Object.getOwnPropertyNames(t); };
    function hr(e) { console && console.warn && console.warn(e); }
    var ct = Number.isNaN || function (t) { return t !== t; };
    function _() { _.init.call(this); }
    be.exports = _;
    be.exports.once = gr;
    _.EventEmitter = _;
    _.prototype._events = void 0;
    _.prototype._eventsCount = 0;
    _.prototype._maxListeners = void 0;
    var lt = 10;
    function oe(e) { if (typeof e != "function")
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e); }
    Object.defineProperty(_, "defaultMaxListeners", { enumerable: !0, get: function () { return lt; }, set: function (e) { if (typeof e != "number" || e < 0 || ct(e))
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + "."); lt = e; } });
    _.init = function () { (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0; };
    _.prototype.setMaxListeners = function (t) { if (typeof t != "number" || t < 0 || ct(t))
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + "."); return this._maxListeners = t, this; };
    function vt(e) { return e._maxListeners === void 0 ? _.defaultMaxListeners : e._maxListeners; }
    _.prototype.getMaxListeners = function () { return vt(this); };
    _.prototype.emit = function (t) { for (var n = [], r = 1; r < arguments.length; r++)
        n.push(arguments[r]); var i = t === "error", u = this._events; if (u !== void 0)
        i = i && u.error === void 0;
    else if (!i)
        return !1; if (i) {
        var a;
        if (n.length > 0 && (a = n[0]), a instanceof Error)
            throw a;
        var f = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
        throw f.context = a, f;
    } var l = u[t]; if (l === void 0)
        return !1; if (typeof l == "function")
        st(l, this, n);
    else
        for (var d = l.length, o = pt(l, d), r = 0; r < d; ++r)
            st(o[r], this, n); return !0; };
    function dt(e, t, n, r) { var i, u, a; if (oe(n), u = e._events, u === void 0 ? (u = e._events = Object.create(null), e._eventsCount = 0) : (u.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), u = e._events), a = u[t]), a === void 0)
        a = u[t] = n, ++e._eventsCount;
    else if (typeof a == "function" ? a = u[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), i = vt(e), i > 0 && a.length > i && !a.warned) {
        a.warned = !0;
        var f = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        f.name = "MaxListenersExceededWarning", f.emitter = e, f.type = t, f.count = a.length, hr(f);
    } return e; }
    _.prototype.addListener = function (t, n) { return dt(this, t, n, !1); };
    _.prototype.on = _.prototype.addListener;
    _.prototype.prependListener = function (t, n) { return dt(this, t, n, !0); };
    function _r() { if (!this.fired)
        return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments); }
    function ht(e, t, n) { var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, i = _r.bind(r); return i.listener = n, r.wrapFn = i, i; }
    _.prototype.once = function (t, n) { return oe(n), this.on(t, ht(this, t, n)), this; };
    _.prototype.prependOnceListener = function (t, n) { return oe(n), this.prependListener(t, ht(this, t, n)), this; };
    _.prototype.removeListener = function (t, n) { var r, i, u, a, f; if (oe(n), i = this._events, i === void 0)
        return this; if (r = i[t], r === void 0)
        return this; if (r === n || r.listener === n)
        --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, r.listener || n));
    else if (typeof r != "function") {
        for (u = -1, a = r.length - 1; a >= 0; a--)
            if (r[a] === n || r[a].listener === n) {
                f = r[a].listener, u = a;
                break;
            }
        if (u < 0)
            return this;
        u === 0 ? r.shift() : yr(r, u), r.length === 1 && (i[t] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", t, f || n);
    } return this; };
    _.prototype.off = _.prototype.removeListener;
    _.prototype.removeAllListeners = function (t) { var n, r, i; if (r = this._events, r === void 0)
        return this; if (r.removeListener === void 0)
        return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : r[t] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete r[t]), this; if (arguments.length === 0) {
        var u = Object.keys(r), a;
        for (i = 0; i < u.length; ++i)
            a = u[i], a !== "removeListener" && this.removeAllListeners(a);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
    } if (n = r[t], typeof n == "function")
        this.removeListener(t, n);
    else if (n !== void 0)
        for (i = n.length - 1; i >= 0; i--)
            this.removeListener(t, n[i]); return this; };
    function _t(e, t, n) { var r = e._events; if (r === void 0)
        return []; var i = r[t]; return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? pr(i) : pt(i, i.length); }
    _.prototype.listeners = function (t) { return _t(this, t, !0); };
    _.prototype.rawListeners = function (t) { return _t(this, t, !1); };
    _.listenerCount = function (e, t) { return typeof e.listenerCount == "function" ? e.listenerCount(t) : yt.call(e, t); };
    _.prototype.listenerCount = yt;
    function yt(e) { var t = this._events; if (t !== void 0) {
        var n = t[e];
        if (typeof n == "function")
            return 1;
        if (n !== void 0)
            return n.length;
    } return 0; }
    _.prototype.eventNames = function () { return this._eventsCount > 0 ? ae(this._events) : []; };
    function pt(e, t) { for (var n = new Array(t), r = 0; r < t; ++r)
        n[r] = e[r]; return n; }
    function yr(e, t) { for (; t + 1 < e.length; t++)
        e[t] = e[t + 1]; e.pop(); }
    function pr(e) { for (var t = new Array(e.length), n = 0; n < t.length; ++n)
        t[n] = e[n].listener || e[n]; return t; }
    function gr(e, t) { return new Promise(function (n, r) { function i(a) { e.removeListener(t, u), r(a); } function u() { typeof e.removeListener == "function" && e.removeListener("error", i), n([].slice.call(arguments)); } gt(e, t, u, { once: !0 }), t !== "error" && mr(e, i, { once: !0 }); }); }
    function mr(e, t, n) { typeof e.on == "function" && gt(e, "error", t, n); }
    function gt(e, t, n, r) { if (typeof e.on == "function")
        r.once ? e.once(t, n) : e.on(t, n);
    else if (typeof e.addEventListener == "function")
        e.addEventListener(t, function i(u) { r.once && e.removeEventListener(t, i), n(u); });
    else
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e); }
});
var Pe = E(Te => {
    "use strict";
    Object.defineProperty(Te, "__esModule", { value: !0 });
    var Er = (function () { function e(t, n) { for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; })(), Ar = at(), Or = Re(Ar), br = ft(), Sr = Re(br), wr = Se(), Rr = K(), we = Re(Rr);
    function Re(e) { return e && e.__esModule ? e : { default: e }; }
    function Tr(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    function Pr(e, t) { if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t && (typeof t == "object" || typeof t == "function") ? t : e; }
    function Lr(e, t) { if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }
    var Mr = (function (e) { Lr(t, e); function t(n) { Tr(this, t); var r = Pr(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); typeof n == "string" && (n = JSON.parse(n)), n && n.conditions && r.setConditions(n.conditions), n && n.onSuccess && r.on("success", n.onSuccess), n && n.onFailure && r.on("failure", n.onFailure), n && (n.name || n.name === 0) && r.setName(n.name); var i = n && n.priority || 1; r.setPriority(i); var u = n && n.event || { type: "unknown" }; return r.setEvent(u), r; } return Er(t, [{ key: "setPriority", value: function (r) { if (r = parseInt(r, 10), r <= 0)
                throw new Error("Priority must be greater than zero"); return this.priority = r, this; } }, { key: "setName", value: function (r) { if (!r && r !== 0)
                throw new Error('Rule "name" must be defined'); return this.name = r, this; } }, { key: "setConditions", value: function (r) { if (!Object.prototype.hasOwnProperty.call(r, "all") && !Object.prototype.hasOwnProperty.call(r, "any"))
                throw new Error('"conditions" root must contain a single instance of "all" or "any"'); return this.conditions = new Or.default(r), this; } }, { key: "setEvent", value: function (r) { if (!r)
                throw new Error("Rule: setEvent() requires event object"); if (!Object.prototype.hasOwnProperty.call(r, "type"))
                throw new Error('Rule: setEvent() requires event object with "type" property'); return this.event = { type: r.type }, r.params && (this.event.params = r.params), this; } }, { key: "setEngine", value: function (r) { return this.engine = r, this; } }, { key: "toJSON", value: function () { var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, i = { conditions: this.conditions.toJSON(!1), priority: this.priority, event: this.event, name: this.name }; return r ? JSON.stringify(i) : i; } }, { key: "prioritizeConditions", value: function (r) { var i = this, u = r.reduce(function (a, f) { var l = f.priority; if (!l) {
                var d = i.engine.getFact(f.fact);
                l = d && d.priority || 1;
            } return a[l] || (a[l] = []), a[l].push(f), a; }, {}); return Object.keys(u).sort(function (a, f) { return Number(a) > Number(f) ? -1 : 1; }).map(function (a) { return u[a]; }); } }, { key: "evaluate", value: function (r) { var i = this, u = new Sr.default(this.conditions, this.event, this.priority, this.name), a = function (c) { if (c.isBooleanOperator()) {
                var m = c[c.operator], O = void 0;
                return c.operator === "all" ? O = o(m) : O = d(m), O.then(function (S) { var w = S === !0; return c.result = w, w; });
            }
            else
                return c.evaluate(r, i.engine.operators).then(function (S) { var w = S.result; return c.factResult = S.leftHandSideValue, c.result = w, w; }); }, f = function (c, m) { return Array.isArray(c) || (c = [c]), Promise.all(c.map(function (O) { return a(O); })).then(function (O) { return (0, we.default)("rule::evaluateConditions results", O), m.call(O, function (S) { return S === !0; }); }); }, l = function (c, m) { if (c.length === 0)
                return Promise.resolve(!0); var O = Array.prototype.some; m === "all" && (O = Array.prototype.every); for (var S = i.prioritizeConditions(c), w = Promise.resolve(), P = function (p) { var B = S[p], U = !1; w = w.then(function (R) { return m === "any" && R === !0 || U ? ((0, we.default)("prioritizeAndRun::detected truthy result; skipping remaining conditions"), U = !0, !0) : m === "all" && R === !1 || U ? ((0, we.default)("prioritizeAndRun::detected falsey result; skipping remaining conditions"), U = !0, !1) : f(B, O); }); }, s = 0; s < S.length; s++)
                P(s); return w; }, d = function (c) { return l(c, "any"); }, o = function (c) { return l(c, "all"); }, v = function (c) { return u.setResult(c), c ? i.emit("success", u.event, r, u) : i.emit("failure", u.event, r, u), u; }; return u.conditions.any ? d(u.conditions.any).then(function (g) { return v(g); }) : o(u.conditions.all).then(function (g) { return v(g); }); } }]), t; })(wr.EventEmitter);
    Te.default = Mr;
});
var fe = E(Le => {
    "use strict";
    Object.defineProperty(Le, "__esModule", { value: !0 });
    var Cr = (function () { function e(t, n) { for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; })();
    function Nr(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    var jr = (function () { function e(t, n, r) { if (Nr(this, e), this.name = String(t), !t)
        throw new Error("Missing operator name"); if (typeof n != "function")
        throw new Error("Missing operator callback"); this.cb = n, this.factValueValidator = r, this.factValueValidator || (this.factValueValidator = function () { return !0; }); } return Cr(e, [{ key: "evaluate", value: function (n, r) { return this.factValueValidator(n) && this.cb(n, r); } }]), e; })();
    Le.default = jr;
});
var mt = E(Me => {
    "use strict";
    Object.defineProperty(Me, "__esModule", { value: !0 });
    function Fr(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    function Ir(e, t) { if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t && (typeof t == "object" || typeof t == "function") ? t : e; }
    function Br(e, t) { if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }
    var Cn = Me.UndefinedFactError = (function (e) { Br(t, e); function t() { var n; Fr(this, t); for (var r = arguments.length, i = Array(r), u = 0; u < r; u++)
        i[u] = arguments[u]; var a = Ir(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(i))); return a.code = "UNDEFINED_FACT", a; } return t; })(Error);
});
var At = E(Fe => {
    "use strict";
    Object.defineProperty(Fe, "__esModule", { value: !0 });
    var Ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, Ur = (function () { function e(t, n) { for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; })(), Gr = ne(), Ne = je(Gr), kr = mt(), qr = K(), F = je(qr), Dr = Nt(), Yr = Ee(), Et = je(Yr);
    function je(e) { return e && e.__esModule ? e : { default: e }; }
    function Jr(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    var xr = (function () { function e(t) { var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}; Jr(this, e), this.factMap = new Map(t), this.factResultsCache = new Map, this.allowUndefinedFacts = !!r.allowUndefinedFacts; for (var i in n) {
        var u = void 0;
        n[i] instanceof Ne.default ? u = n[i] : u = new Ne.default(i, n[i]), this._addConstantFact(u), (0, F.default)("almanac::constructor initialized runtime fact:" + u.id + " with " + u.value + "<" + Ce(u.value) + ">");
    } } return Ur(e, [{ key: "_getFact", value: function (n) { return this.factMap.get(n); } }, { key: "_addConstantFact", value: function (n) { this.factMap.set(n.id, n), this._setFactValue(n, {}, n.value); } }, { key: "_setFactValue", value: function (n, r, i) { var u = n.getCacheKey(r), a = Promise.resolve(i); return u && this.factResultsCache.set(u, a), a; } }, { key: "addRuntimeFact", value: function (n, r) { (0, F.default)("almanac::addRuntimeFact id:" + n); var i = new Ne.default(n, r); return this._addConstantFact(i); } }, { key: "factValue", value: function (n) { var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", u = void 0, a = this._getFact(n); if (a === void 0)
                return this.allowUndefinedFacts ? Promise.resolve(void 0) : Promise.reject(new kr.UndefinedFactError("Undefined fact: " + n)); if (a.isConstant())
                u = Promise.resolve(a.calculate(r, this));
            else {
                var f = a.getCacheKey(r), l = f && this.factResultsCache.get(f);
                l ? (u = Promise.resolve(l), (0, F.default)("almanac::factValue cache hit for fact:" + n)) : ((0, F.default)("almanac::factValue cache miss for fact:" + n + "; calculating"), u = this._setFactValue(a, r, a.calculate(r, this)));
            } if (i) {
                if (typeof i == "string" && i.startsWith("$"))
                    return (0, F.default)("condition::evaluate extracting object property " + i), u.then(function (o) { if ((0, Et.default)(o)) {
                        var v = (0, Dr.JSONPath)({ path: i, json: o, wrap: !1 });
                        return (0, F.default)("condition::evaluate extracting object property " + i + ", received: " + v), v;
                    }
                    else
                        return (0, F.default)("condition::evaluate could not compute object path(" + i + ") of non-object: " + o + " <" + (typeof o > "u" ? "undefined" : Ce(o)) + ">; continuing with " + o), o; });
                var d = void 0;
                try {
                    d = Ct("selectn");
                }
                catch {
                    throw console.error(`Oops! Looks like you're trying to use the deprecated syntax for the ".path" property.`), console.error('Please convert your "path" properties to JsonPath syntax (ensure your path starts with "$")'), console.error('Alternatively, if you wish to continue using old syntax (provided by selectn), you may "npm install selectn" as a direct dependency.'), console.error("See https://github.com/CacheControl/json-rules-engine/blob/master/CHANGELOG.md#500--2019-10-27 for more information."), new Error('json-rules-engine: Unmet peer dependency "selectn" required for use of deprecated ".path" syntax. please "npm install selectn" or convert to json-path syntax');
                }
                return u.then(function (o) { if ((0, Et.default)(o)) {
                    var v = d(i)(o);
                    return (0, F.default)("condition::evaluate extracting object property " + i + ", received: " + v), v;
                }
                else
                    return (0, F.default)("condition::evaluate could not compute object path(" + i + ") of non-object: " + o + " <" + (typeof o > "u" ? "undefined" : Ce(o)) + ">; continuing with " + o), o; });
            } return u; } }]), e; })();
    Fe.default = xr;
});
var Ot = E(Ie => {
    "use strict";
    Object.defineProperty(Ie, "__esModule", { value: !0 });
    var Vr = function () { var t = []; return function () { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; return n.event && t.push(n.event), t; }; };
    Ie.SuccessEventFact = Vr;
});
var bt = E(Be => {
    "use strict";
    Object.defineProperty(Be, "__esModule", { value: !0 });
    var Hr = fe(), j = zr(Hr);
    function zr(e) { return e && e.__esModule ? e : { default: e }; }
    var M = [];
    M.push(new j.default("equal", function (e, t) { return e === t; }));
    M.push(new j.default("notEqual", function (e, t) { return e !== t; }));
    M.push(new j.default("in", function (e, t) { return t.indexOf(e) > -1; }));
    M.push(new j.default("notIn", function (e, t) { return t.indexOf(e) === -1; }));
    M.push(new j.default("contains", function (e, t) { return e.indexOf(t) > -1; }, Array.isArray));
    M.push(new j.default("doesNotContain", function (e, t) { return e.indexOf(t) === -1; }, Array.isArray));
    function se(e) { return Number.parseFloat(e).toString() !== "NaN"; }
    M.push(new j.default("lessThan", function (e, t) { return e < t; }, se));
    M.push(new j.default("lessThanInclusive", function (e, t) { return e <= t; }, se));
    M.push(new j.default("greaterThan", function (e, t) { return e > t; }, se));
    M.push(new j.default("greaterThanInclusive", function (e, t) { return e >= t; }, se));
    Be.default = M;
});
var Rt = E(I => {
    "use strict";
    Object.defineProperty(I, "__esModule", { value: !0 });
    I.FINISHED = I.RUNNING = I.READY = void 0;
    var Kr = (function () { function e(t, n) { for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; })(), Wr = ne(), le = Y(Wr), Xr = Pe(), Ue = Y(Xr), $r = fe(), Ge = Y($r), Qr = At(), Zr = Y(Qr), en = Se(), tn = Ot(), rn = bt(), nn = Y(rn), un = K(), G = Y(un);
    function Y(e) { return e && e.__esModule ? e : { default: e }; }
    function an(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    function on(e, t) { if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t && (typeof t == "object" || typeof t == "function") ? t : e; }
    function fn(e, t) { if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }
    var sn = I.READY = "READY", St = I.RUNNING = "RUNNING", wt = I.FINISHED = "FINISHED", ln = (function (e) { fn(t, e); function t() { var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; an(this, t); var i = on(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return i.rules = [], i.allowUndefinedFacts = r.allowUndefinedFacts || !1, i.operators = new Map, i.facts = new Map, i.status = sn, n.map(function (u) { return i.addRule(u); }), nn.default.map(function (u) { return i.addOperator(u); }), i; } return Kr(t, [{ key: "addRule", value: function (r) { if (!r)
                throw new Error("Engine: addRule() requires options"); if (!Object.prototype.hasOwnProperty.call(r, "conditions"))
                throw new Error('Engine: addRule() argument requires "conditions" property'); if (!Object.prototype.hasOwnProperty.call(r, "event"))
                throw new Error('Engine: addRule() argument requires "event" property'); var i = void 0; return r instanceof Ue.default ? i = r : i = new Ue.default(r), i.setEngine(this), this.rules.push(i), this.prioritizedRules = null, this; } }, { key: "removeRule", value: function (r) { if (!(r instanceof Ue.default))
                throw new Error("Engine: removeRule() rule must be a instance of Rule"); var i = this.rules.indexOf(r); return i === -1 ? !1 : (this.prioritizedRules = null, !!this.rules.splice(i, 1).length); } }, { key: "addOperator", value: function (r, i) { var u = void 0; r instanceof Ge.default ? u = r : u = new Ge.default(r, i), (0, G.default)("engine::addOperator name:" + u.name), this.operators.set(u.name, u); } }, { key: "removeOperator", value: function (r) { var i = void 0; return r instanceof Ge.default ? i = r.name : i = r, this.operators.delete(i); } }, { key: "addFact", value: function (r, i, u) { var a = r, f = void 0; return r instanceof le.default ? (a = r.id, f = r) : f = new le.default(r, i, u), (0, G.default)("engine::addFact id:" + a), this.facts.set(a, f), this; } }, { key: "removeFact", value: function (r) { var i = void 0; return r instanceof le.default ? i = r.id : i = r, this.facts.delete(i); } }, { key: "prioritizeRules", value: function () { if (!this.prioritizedRules) {
                var r = this.rules.reduce(function (i, u) { var a = u.priority; return i[a] || (i[a] = []), i[a].push(u), i; }, {});
                this.prioritizedRules = Object.keys(r).sort(function (i, u) { return Number(i) > Number(u) ? -1 : 1; }).map(function (i) { return r[i]; });
            } return this.prioritizedRules; } }, { key: "stop", value: function () { return this.status = wt, this; } }, { key: "getFact", value: function (r) { return this.facts.get(r); } }, { key: "evaluateRules", value: function (r, i) { var u = this; return Promise.all(r.map(function (a) { if (u.status !== St) {
                (0, G.default)("engine::run status:" + u.status + "; skipping remaining rules");
                return;
            } return a.evaluate(i).then(function (f) { (0, G.default)("engine::run ruleResult:" + f.result), f.result ? (u.emit("success", a.event, i, f), u.emit(a.event.type, a.event.params, i, f), i.factValue("success-events", { event: a.event })) : u.emit("failure", a.event, i, f); }); })); } }, { key: "run", value: function () { var r = this, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; (0, G.default)("engine::run started"), (0, G.default)("engine::run runtimeFacts:", i), i["success-events"] = new le.default("success-events", (0, tn.SuccessEventFact)(), { cache: !1 }), this.status = St; var u = new Zr.default(this.facts, i, { allowUndefinedFacts: this.allowUndefinedFacts }), a = this.prioritizeRules(), f = Promise.resolve(); return new Promise(function (l, d) { a.map(function (o) { return f = f.then(function () { return r.evaluateRules(o, u); }).catch(d), f; }), f.then(function () { return r.status = wt, (0, G.default)("engine::run completed"), u.factValue("success-events"); }).then(function (o) { l({ events: o, almanac: u }); }).catch(d); }); } }]), t; })(en.EventEmitter);
    I.default = ln;
});
var Pt = E(C => {
    "use strict";
    Object.defineProperty(C, "__esModule", { value: !0 });
    C.Engine = C.Operator = C.Rule = C.Fact = void 0;
    C.default = function (e, t) { return new Tt.default(e, t); };
    var cn = Rt(), Tt = ce(cn), vn = ne(), dn = ce(vn), hn = Pe(), _n = ce(hn), yn = fe(), pn = ce(yn);
    function ce(e) { return e && e.__esModule ? e : { default: e }; }
    C.Fact = dn.default;
    C.Rule = _n.default;
    C.Operator = pn.default;
    C.Engine = Tt.default;
});
var gn = E((Gn, Lt) => { Lt.exports = Pt(); });
export default gn();
