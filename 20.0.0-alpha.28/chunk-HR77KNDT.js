import { e as W } from "@nf-internal/chunk-FJYW2LMB";
var q = W(() => { });
var ht = W((M, Z) => {
    (function (d, _) { typeof M == "object" && typeof Z < "u" ? _(M) : typeof define == "function" && define.amd ? define(["exports"], _) : (d = d || self, _(d.JSONPath = {})); })(M, function (d) {
        "use strict";
        function _(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _ = function (r) { return typeof r; } : _ = function (r) { return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r; }, _(t);
        }
        function G(t, r) { if (!(t instanceof r))
            throw new TypeError("Cannot call a class as a function"); }
        function K(t, r) { if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(r && r.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), r && E(t, r); }
        function A(t) { return A = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e); }, A(t); }
        function E(t, r) { return E = Object.setPrototypeOf || function (n, u) { return n.__proto__ = u, n; }, E(t, r); }
        function Y() { if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
            return !1; if (typeof Proxy == "function")
            return !0; try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0;
        }
        catch {
            return !1;
        } }
        function O(t, r, e) { return Y() ? O = Reflect.construct : O = function (u, i, a) { var c = [null]; c.push.apply(c, i); var f = Function.bind.apply(u, c), h = new f; return a && E(h, a.prototype), h; }, O.apply(null, arguments); }
        function Q(t) { return Function.toString.call(t).indexOf("[native code]") !== -1; }
        function R(t) { var r = typeof Map == "function" ? new Map : void 0; return R = function (n) { if (n === null || !Q(n))
            return n; if (typeof n != "function")
            throw new TypeError("Super expression must either be null or a function"); if (typeof r < "u") {
            if (r.has(n))
                return r.get(n);
            r.set(n, u);
        } function u() { return O(n, arguments, A(this).constructor); } return u.prototype = Object.create(n.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), E(u, n); }, R(t); }
        function X(t) { if (t === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t; }
        function x(t, r) { return r && (typeof r == "object" || typeof r == "function") ? r : X(t); }
        function tt(t) { return function () { var r = A(t), e; if (Y()) {
            var n = A(this).constructor;
            e = Reflect.construct(r, arguments, n);
        }
        else
            e = r.apply(this, arguments); return x(this, e); }; }
        function z(t) { return rt(t) || et(t) || H(t) || nt(); }
        function rt(t) { if (Array.isArray(t))
            return J(t); }
        function et(t) { if (typeof Symbol < "u" && Symbol.iterator in Object(t))
            return Array.from(t); }
        function H(t, r) { if (t) {
            if (typeof t == "string")
                return J(t, r);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
                return Array.from(e);
            if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                return J(t, r);
        } }
        function J(t, r) { (r == null || r > t.length) && (r = t.length); for (var e = 0, n = new Array(r); e < r; e++)
            n[e] = t[e]; return n; }
        function nt() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function ut(t) {
            if (typeof Symbol > "u" || t[Symbol.iterator] == null) {
                if (Array.isArray(t) || (t = H(t))) {
                    var r = 0, e = function () { };
                    return { s: e, n: function () { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] }; }, e: function (c) { throw c; }, f: e };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var n, u = !0, i = !1, a;
            return { s: function () { n = t[Symbol.iterator](); }, n: function () { var c = n.next(); return u = c.done, c; }, e: function (c) { i = !0, a = c; }, f: function () { try {
                    !u && n.return != null && n.return();
                }
                finally {
                    if (i)
                        throw a;
                } } };
        }
        var it = function () { try {
            return Object.prototype.toString.call(global.process) === "[object process]";
        }
        catch {
            return !1;
        } }, b = Object.prototype.hasOwnProperty, ot = function (r, e, n) { for (var u = r.length, i = 0; i < u; i++) {
            var a = r[i];
            n(a) && e.push(r.splice(i--, 1)[0]);
        } };
        l.nodeVMSupported = it();
        var at = l.nodeVMSupported ? q() : { runInNewContext: function (r, e) { var n = Object.keys(e), u = []; ot(n, u, function (h) { return typeof e[h] == "function"; }); var i = n.map(function (h, o) { return e[h]; }), a = u.reduce(function (h, o) { var s = e[o].toString(); return /function/.test(s) || (s = "function " + s), "var " + o + "=" + s + ";" + h; }, ""); r = a + r, !r.match(/(["'])use strict\1/) && !n.includes("arguments") && (r = "var arguments = undefined;" + r), r = r.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, ""); var c = r.lastIndexOf(";"), f = c > -1 ? r.slice(0, c + 1) + " return " + r.slice(c + 1) : " return " + r; return O(Function, z(n).concat([f])).apply(void 0, z(i)); } };
        function $(t, r) { return t = t.slice(), t.push(r), t; }
        function w(t, r) { return r = r.slice(), r.unshift(t), r; }
        var ct = (function (t) { K(e, t); var r = tt(e); function e(n) { var u; return G(this, e), u = r.call(this, 'JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)'), u.avoidNew = !0, u.value = n, u.name = "NewError", u; } return e; })(R(Error));
        function l(t, r, e, n, u) { if (!(this instanceof l))
            try {
                return new l(t, r, e, n, u);
            }
            catch (f) {
                if (!f.avoidNew)
                    throw f;
                return f.value;
            } typeof t == "string" && (u = n, n = e, e = r, r = t, t = null); var i = t && _(t) === "object"; if (t = t || {}, this.json = t.json || e, this.path = t.path || r, this.resultType = t.resultType || "value", this.flatten = t.flatten || !1, this.wrap = b.call(t, "wrap") ? t.wrap : !0, this.sandbox = t.sandbox || {}, this.preventEval = t.preventEval || !1, this.parent = t.parent || null, this.parentProperty = t.parentProperty || null, this.callback = t.callback || n || null, this.otherTypeCallback = t.otherTypeCallback || u || function () { throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator."); }, t.autostart !== !1) {
            var a = { path: i ? t.path : r };
            i ? "json" in t && (a.json = t.json) : a.json = e;
            var c = this.evaluate(a);
            if (!c || _(c) !== "object")
                throw new ct(c);
            return c;
        } }
        l.prototype.evaluate = function (t, r, e, n) { var u = this, i = this.parent, a = this.parentProperty, c = this.flatten, f = this.wrap; if (this.currResultType = this.resultType, this.currPreventEval = this.preventEval, this.currSandbox = this.sandbox, e = e || this.callback, this.currOtherTypeCallback = n || this.otherTypeCallback, r = r || this.json, t = t || this.path, t && _(t) === "object" && !Array.isArray(t)) {
            if (!t.path && t.path !== "")
                throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');
            if (!b.call(t, "json"))
                throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');
            var h = t;
            r = h.json, c = b.call(t, "flatten") ? t.flatten : c, this.currResultType = b.call(t, "resultType") ? t.resultType : this.currResultType, this.currSandbox = b.call(t, "sandbox") ? t.sandbox : this.currSandbox, f = b.call(t, "wrap") ? t.wrap : f, this.currPreventEval = b.call(t, "preventEval") ? t.preventEval : this.currPreventEval, e = b.call(t, "callback") ? t.callback : e, this.currOtherTypeCallback = b.call(t, "otherTypeCallback") ? t.otherTypeCallback : this.currOtherTypeCallback, i = b.call(t, "parent") ? t.parent : i, a = b.call(t, "parentProperty") ? t.parentProperty : a, t = t.path;
        } if (i = i || null, a = a || null, Array.isArray(t) && (t = l.toPathString(t)), !(!t && t !== "" || !r)) {
            this._obj = r;
            var o = l.toPathArray(t);
            o[0] === "$" && o.length > 1 && o.shift(), this._hasParentSelector = null;
            var s = this._trace(o, r, ["$"], i, a, e).filter(function (y) { return y && !y.isParentSelector; });
            return s.length ? !f && s.length === 1 && !s[0].hasArrExpr ? this._getPreferredOutput(s[0]) : s.reduce(function (y, p) { var F = u._getPreferredOutput(p); return c && Array.isArray(F) ? y = y.concat(F) : y.push(F), y; }, []) : f ? [] : void 0;
        } }, l.prototype._getPreferredOutput = function (t) { var r = this.currResultType; switch (r) {
            default: throw new TypeError("Unknown result type");
            case "all": {
                var e = Array.isArray(t.path) ? t.path : l.toPathArray(t.path);
                return t.pointer = l.toPointer(e), t.path = typeof t.path == "string" ? t.path : l.toPathString(t.path), t;
            }
            case "value":
            case "parent":
            case "parentProperty": return t[r];
            case "path": return l.toPathString(t[r]);
            case "pointer": return l.toPointer(t.path);
        } }, l.prototype._handleCallback = function (t, r, e) { if (r) {
            var n = this._getPreferredOutput(t);
            t.path = typeof t.path == "string" ? t.path : l.toPathString(t.path), r(n, e, t);
        } }, l.prototype._trace = function (t, r, e, n, u, i, a, c) { var f, h = this; if (!t.length)
            return f = { path: e, value: r, parent: n, parentProperty: u, hasArrExpr: a }, this._handleCallback(f, i, "value"), f; var o = t[0], s = t.slice(1), y = []; function p(v) { Array.isArray(v) ? v.forEach(function (P) { y.push(P); }) : y.push(v); } if ((typeof o != "string" || c) && r && b.call(r, o))
            p(this._trace(s, r[o], $(e, o), r, o, i, a));
        else if (o === "*")
            this._walk(o, s, r, e, n, u, i, function (v, P, C, D, m, B, T, I) { p(h._trace(w(v, C), D, m, B, T, I, !0, !0)); });
        else if (o === "..")
            p(this._trace(s, r, e, n, u, i, a)), this._walk(o, s, r, e, n, u, i, function (v, P, C, D, m, B, T, I) { _(D[v]) === "object" && p(h._trace(w(P, C), D[v], $(m, v), D, v, I, !0)); });
        else {
            if (o === "^")
                return this._hasParentSelector = !0, { path: e.slice(0, -1), expr: s, isParentSelector: !0 };
            if (o === "~")
                return f = { path: $(e, o), value: u, parent: n, parentProperty: null }, this._handleCallback(f, i, "property"), f;
            if (o === "$")
                p(this._trace(s, r, e, null, null, i, a));
            else if (/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(o))
                p(this._slice(o, s, r, e, n, u, i));
            else if (o.indexOf("?(") === 0) {
                if (this.currPreventEval)
                    throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
                this._walk(o, s, r, e, n, u, i, function (v, P, C, D, m, B, T, I) { h._eval(P.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/, "$1"), D[v], v, m, B, T) && p(h._trace(w(v, C), D, m, B, T, I, !0)); });
            }
            else if (o[0] === "(") {
                if (this.currPreventEval)
                    throw new Error("Eval [(expr)] prevented in JSONPath expression.");
                p(this._trace(w(this._eval(o, r, e[e.length - 1], e.slice(0, -1), n, u), s), r, e, n, u, i, a));
            }
            else if (o[0] === "@") {
                var F = !1, S = o.slice(1, -2);
                switch (S) {
                    default: throw new TypeError("Unknown value type " + S);
                    case "scalar":
                        (!r || !["object", "function"].includes(_(r))) && (F = !0);
                        break;
                    case "boolean":
                    case "string":
                    case "undefined":
                    case "function":
                        _(r) === S && (F = !0);
                        break;
                    case "integer":
                        Number.isFinite(r) && !(r % 1) && (F = !0);
                        break;
                    case "number":
                        Number.isFinite(r) && (F = !0);
                        break;
                    case "nonFinite":
                        typeof r == "number" && !Number.isFinite(r) && (F = !0);
                        break;
                    case "object":
                        r && _(r) === S && (F = !0);
                        break;
                    case "array":
                        Array.isArray(r) && (F = !0);
                        break;
                    case "other":
                        F = this.currOtherTypeCallback(r, e, n, u);
                        break;
                    case "null":
                        r === null && (F = !0);
                        break;
                }
                if (F)
                    return f = { path: e, value: r, parent: n, parentProperty: u }, this._handleCallback(f, i, "value"), f;
            }
            else if (o[0] === "`" && r && b.call(r, o.slice(1))) {
                var V = o.slice(1);
                p(this._trace(s, r[V], $(e, V), r, V, i, a, !0));
            }
            else if (o.includes(",")) {
                var ft = o.split(","), k = ut(ft), L;
                try {
                    for (k.s(); !(L = k.n()).done;) {
                        var st = L.value;
                        p(this._trace(w(st, s), r, e, n, u, i, !0));
                    }
                }
                catch (v) {
                    k.e(v);
                }
                finally {
                    k.f();
                }
            }
            else
                !c && r && b.call(r, o) && p(this._trace(s, r[o], $(e, o), r, o, i, a, !0));
        } if (this._hasParentSelector)
            for (var g = 0; g < y.length; g++) {
                var N = y[g];
                if (N && N.isParentSelector) {
                    var j = h._trace(N.expr, r, N.path, n, u, i, a);
                    if (Array.isArray(j)) {
                        y[g] = j[0];
                        for (var lt = j.length, U = 1; U < lt; U++)
                            g++, y.splice(g, 0, j[U]);
                    }
                    else
                        y[g] = j;
                }
            } return y; }, l.prototype._walk = function (t, r, e, n, u, i, a, c) { if (Array.isArray(e))
            for (var f = e.length, h = 0; h < f; h++)
                c(h, t, r, e, n, u, i, a);
        else
            e && _(e) === "object" && Object.keys(e).forEach(function (o) { c(o, t, r, e, n, u, i, a); }); }, l.prototype._slice = function (t, r, e, n, u, i, a) { if (Array.isArray(e)) {
            var c = e.length, f = t.split(":"), h = f[2] && Number.parseInt(f[2]) || 1, o = f[0] && Number.parseInt(f[0]) || 0, s = f[1] && Number.parseInt(f[1]) || c;
            o = o < 0 ? Math.max(0, o + c) : Math.min(c, o), s = s < 0 ? Math.max(0, s + c) : Math.min(c, s);
            for (var y = [], p = o; p < s; p += h) {
                var F = this._trace(w(p, r), e, n, u, i, a, !0);
                F.forEach(function (S) { y.push(S); });
            }
            return y;
        } }, l.prototype._eval = function (t, r, e, n, u, i) { if (!this._obj || !r)
            return !1; t.includes("@parentProperty") && (this.currSandbox._$_parentProperty = i, t = t.replace(/@parentProperty/g, "_$_parentProperty")), t.includes("@parent") && (this.currSandbox._$_parent = u, t = t.replace(/@parent/g, "_$_parent")), t.includes("@property") && (this.currSandbox._$_property = e, t = t.replace(/@property/g, "_$_property")), t.includes("@path") && (this.currSandbox._$_path = l.toPathString(n.concat([e])), t = t.replace(/@path/g, "_$_path")), t.includes("@root") && (this.currSandbox._$_root = this.json, t = t.replace(/@root/g, "_$_root")), t.match(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/) && (this.currSandbox._$_v = r, t = t.replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g, "_$_v$1")); try {
            return at.runInNewContext(t, this.currSandbox);
        }
        catch (a) {
            throw console.log(a), new Error("jsonPath: " + a.message + ": " + t);
        } }, l.cache = {}, l.toPathString = function (t) { for (var r = t, e = r.length, n = "$", u = 1; u < e; u++)
            /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(r[u]) || (n += /^[\*0-9]+$/.test(r[u]) ? "[" + r[u] + "]" : "['" + r[u] + "']"); return n; }, l.toPointer = function (t) { for (var r = t, e = r.length, n = "", u = 1; u < e; u++)
            /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(r[u]) || (n += "/" + r[u].toString().replace(/~/g, "~0").replace(/\//g, "~1")); return n; }, l.toPathArray = function (t) { var r = l.cache; if (r[t])
            return r[t].concat(); var e = [], n = t.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g, ";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g, function (i, a) { return "[#" + (e.push(a) - 1) + "]"; }).replace(/\['((?:[\0-&\(-\\\^-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)'\]/g, function (i, a) { return "['" + a.replace(/\./g, "%@%").replace(/~/g, "%%@@%%") + "']"; }).replace(/~/g, ";~;").replace(/'?\.'?(?!(?:[\0-Z\\-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*\])|\['?/g, ";").replace(/%@%/g, ".").replace(/%%@@%%/g, "~").replace(/(?:;)?(\^+)(?:;)?/g, function (i, a) { return ";" + a.split("").join(";") + ";"; }).replace(/;;;|;;/g, ";..;").replace(/;$|'?\]|'$/g, ""), u = n.split(";").map(function (i) { var a = i.match(/#([0-9]+)/); return !a || !a[1] ? i : e[a[1]]; }); return r[t] = u, r[t]; }, d.JSONPath = l, Object.defineProperty(d, "__esModule", { value: !0 });
    });
});
export { ht as a };
