import { e as x } from "@nf-internal/chunk-FJYW2LMB";
var z = x((y, g) => {
    (function (c, f) { typeof define == "function" && define.amd ? define([], f) : typeof y == "object" ? g.exports = f() : c.CSSJSON = f(); })(y, function () {
        var c = new function () {
            var f = this;
            f.init = function () { String.prototype.trim = function () { return this.replace(/^\s+|\s+$/g, ""); }, String.prototype.repeat = function (t) { return new Array(1 + t).join(this); }; }, f.init();
            var B = /([^\s\;\{\}][^\;\{\}]*)\{/g, D = /\}/g, F = /([^\;\{\}]*)\;/g, E = /\/\*[\s\S]*?\*\//g, N = /([^\:]+):([^\;]*);/, $ = /(\/\*[\s\S]*?\*\/)|([^\s\;\{\}][^\;\{\}]*(?=\{))|(\})|([^\;\{\}]+\;(?!\s*\*\/))/gmi, b = 1, h = 2, q = 3, C = 4, v = function (t) { return typeof t > "u" || t.length == 0 || t == null; };
            f.toJSON = function (t, r) { var e = { children: {}, attributes: {} }, n = null, s = 0; if (typeof r > "u")
                var r = { ordered: !1, comments: !1, stripComments: !1, split: !1 }; for (r.stripComments && (r.comments = !1, t = t.replace(E, "")); (n = $.exec(t)) != null;)
                if (!v(n[b]) && r.comments) {
                    var u = n[b].trim();
                    e[s++] = u;
                }
                else if (v(n[h]))
                    if (v(n[q])) {
                        if (!v(n[C])) {
                            var J = n[C].trim(), S = N.exec(J);
                            if (S) {
                                var a = S[1].trim(), d = S[2].trim();
                                if (r.ordered) {
                                    var l = {};
                                    l.name = a, l.value = d, l.type = "attr", e[s++] = l;
                                }
                                else if (a in e.attributes) {
                                    var O = e.attributes[a];
                                    O instanceof Array || (e.attributes[a] = [O]), e.attributes[a].push(d);
                                }
                                else
                                    e.attributes[a] = d;
                            }
                            else
                                e[s++] = J;
                        }
                    }
                    else
                        return e;
                else {
                    var a = n[h].trim(), o = f.toJSON(t, r);
                    if (r.ordered) {
                        var l = {};
                        l.name = a, l.value = o, l.type = "rule", e[s++] = l;
                    }
                    else {
                        if (r.split)
                            var m = a.split(",");
                        else
                            var m = [a];
                        for (i in m) {
                            var p = m[i].trim();
                            if (p in e.children)
                                for (var X in o.attributes)
                                    e.children[p].attributes[X] = o.attributes[X];
                            else
                                e.children[p] = o;
                        }
                    }
                } return e; }, f.toCSS = function (t, r, e) {
                var n = "";
                if (typeof r > "u" && (r = 0), typeof e > "u" && (e = !1), t.attributes)
                    for (i in t.attributes) {
                        var s = t.attributes[i];
                        if (s instanceof Array)
                            for (var u = 0; u < s.length; u++)
                                n += A(i, s[u], r);
                        else
                            n += A(i, s, r);
                    }
                if (t.children) {
                    var a = !0;
                    for (i in t.children)
                        e && !a ? n += `
` : a = !1, n += w(i, t.children[i], r);
                }
                return n;
            };
            var A = function (t, r, e) {
                return "	".repeat(e) + t + ": " + r + `;
`;
            }, w = function (t, r, e) {
                var n = "	".repeat(e) + t + ` {
`;
                return n += f.toCSS(r, e + 1), n += "	".repeat(e) + `}
`, n;
            };
        };
        return c;
    });
});
export default z();
