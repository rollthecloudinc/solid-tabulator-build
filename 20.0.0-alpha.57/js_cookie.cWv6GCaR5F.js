import { e as v } from "@nf-internal/chunk-FJYW2LMB";
var x = v((l, w) => { (function (d) { var p; if (typeof define == "function" && define.amd && (define(d), p = !0), typeof l == "object" && (w.exports = d(), p = !0), !p) {
    var C = window.Cookies, r = window.Cookies = d();
    r.noConflict = function () { return window.Cookies = C, r; };
} })(function () { function d() { for (var r = 0, i = {}; r < arguments.length; r++) {
    var u = arguments[r];
    for (var g in u)
        i[g] = u[g];
} return i; } function p(r) { return r.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent); } function C(r) { function i() { } function u(e, o, n) { if (!(typeof document > "u")) {
    n = d({ path: "/" }, i.defaults, n), typeof n.expires == "number" && (n.expires = new Date(new Date * 1 + n.expires * 864e5)), n.expires = n.expires ? n.expires.toUTCString() : "";
    try {
        var s = JSON.stringify(o);
        /^[\{\[]/.test(s) && (o = s);
    }
    catch { }
    o = r.write ? r.write(o, e) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
    var t = "";
    for (var c in n)
        n[c] && (t += "; " + c, n[c] !== !0 && (t += "=" + n[c].split(";")[0]));
    return document.cookie = e + "=" + o + t;
} } function g(e, o) { if (!(typeof document > "u")) {
    for (var n = {}, s = document.cookie ? document.cookie.split("; ") : [], t = 0; t < s.length; t++) {
        var c = s[t].split("="), f = c.slice(1).join("=");
        !o && f.charAt(0) === '"' && (f = f.slice(1, -1));
        try {
            var a = p(c[0]);
            if (f = (r.read || r)(f, a) || p(f), o)
                try {
                    f = JSON.parse(f);
                }
                catch { }
            if (n[a] = f, e === a)
                break;
        }
        catch { }
    }
    return e ? n[e] : n;
} } return i.set = u, i.get = function (e) { return g(e, !1); }, i.getJSON = function (e) { return g(e, !0); }, i.remove = function (e, o) { u(e, "", d(o, { expires: -1 })); }, i.defaults = {}, i.withConverter = C, i; } return C(function () { }); }); });
export default x();
/*! Bundled license information:

js-cookie/src/js.cookie.js:
  (*!
   * JavaScript Cookie v2.2.1
   * https://github.com/js-cookie/js-cookie
   *
   * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
   * Released under the MIT license
   *)
*/
