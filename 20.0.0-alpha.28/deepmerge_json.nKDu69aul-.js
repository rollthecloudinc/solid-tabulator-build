import { e as m } from "@nf-internal/chunk-FJYW2LMB";
var $ = m((u, d) => { (function (c, o) { typeof u == "object" && typeof d < "u" ? d.exports = o() : typeof define == "function" && define.amd ? define(o) : (c = typeof globalThis < "u" ? globalThis : c || self, c.merge = o()); })(u, function () {
    "use strict";
    let c = "__proto__", o = (n, e) => e, f = (n, e) => e.map(t => i(t)), a = (n, e) => { if (e && e.hasOwnProperty("__proto__")) {
        let t = {};
        for (let r in e)
            r !== c && (t[r] = e[r]);
        return t;
    } return Object.assign({}, e); }, l = function (n, e) { return n = a(void 0, n), Object.keys(e).forEach(t => { t !== c && (n[t] = i(n[t], e[t])); }), n; }, b = function (n, e) { return n = f(void 0, n), e.forEach((t, r) => n[r] = i(n[r], t)), n; }, y = function (n, e) { return n = f(void 0, n), Object.keys(e).forEach(t => { t !== c && (n = t in s ? s[t](n, e[t]) : e); }), n; }, s = { $push: (n, e) => n.concat(e), $append: (n, e) => n.concat(e), $prepend: (n, e) => e.concat(n), $replace: function (n, e) { n = f(void 0, n); let t; return Object.keys(e).forEach(r => { if (t = Number.parseInt(r), t < 0 || Number.isNaN(t))
            throw Error(`Invalid index for $replace: ${r}`); n[t] = i.clone(e[r]); }), n; }, $merge: function (n, e) { n = n.slice(); let t; return Object.keys(e).forEach(r => { if (t = Number.parseInt(r), t < 0 || Number.isNaN(t))
            throw Error(`Invalid index for $merge: ${r}`); n[t] = i(n[t], e[r]); }), n; }, $insert: function (n, e) { n = f(void 0, n); let t; return Object.keys(e).forEach(r => { if (t = Number.parseInt(r), Number.isNaN(t))
            throw Error(`Invalid index for $insert: ${r}`); n.splice(t, 0, e[r]); }), n; }, $set: f }, h = { oo: l, oa: a, ob: o, aa: b, ao: y, ab: o, bb: o, bo: a, ba: f };
    function i(n, e) { if (e === void 0) {
        if (n == null)
            return n;
        Array.isArray(n) ? e = [] : typeof n == "object" ? e = {} : e = n;
    }
    else if (e === null)
        return null; let t = Array.isArray(n) ? "a" : typeof n == "object" ? "o" : "b", r = Array.isArray(e) ? "a" : typeof e == "object" ? "o" : "b"; return h[t + r](n, e); }
    return i.clone = n => i(n), i.multi = (n, ...e) => { if (!e)
        return i(n); for (let t = 0; t < e.length; t++)
        n = i(n, e[t]); return n; }, i;
}); });
export default $();
