import { e as E } from "@nf-internal/chunk-FJYW2LMB";
var R = E(c => { c.__esModule = !0; c.toClosest = c.toMoney = c.toClean = c.toNumber = c.toNumberString = void 0; function _(e) { return e.replace(/[-[\]/{}()*+?.\\^$]/g, "\\$&"); } function S(e, r) { var i = r === void 0 ? {} : r, t = i.decimalMark, d = t === void 0 ? "." : t; if (typeof e == "number")
    return e.toString(); if (typeof e != "string")
    return "NaN"; var m = _(d), a = e.trim(), p = a.match(/^\(.*\)$|^-/), v = new RegExp("[^\\d" + m + "]|" + m + "(?=.*" + m + ")|^\\D*" + m + "\\D*$", "g"); return a = a.replace(v, "").replace(d, "."), a === "" ? a = "NaN" : p && (a = "-" + a), a; } c.toNumberString = S; function M(e, r) { var i = r === void 0 ? {} : r, t = i.decimalMark, d = t === void 0 ? "." : t, m = S(e, { decimalMark: d }); return m === "NaN" ? NaN : Number(m); } c.toNumber = M; function k(e, r) { var i = r === void 0 ? {} : r, t = i.decimalMark, d = t === void 0 ? "." : t, m = i.thousandSeperator, a = m === void 0 ? null : m, p = i.thousandSeparator, v = p === void 0 ? "," : p, b = i.maxPrecision, l = b === void 0 ? 100 : b, y = i.minPrecision, f = y === void 0 ? 0 : y; if (a && (v = a, console.error("`thousandSeperator` is deprecated use `thousandSeparator` instead.")), e = S(e), e === "NaN")
    return "NaN"; if (l < 0)
    throw new Error("maxPrecision must be >= 0"); if (f < 0)
    throw new Error("minPrecision must be >= 0"); if (l > 100)
    throw new Error("maxPrecision must be <= 100"); if (f > 100)
    throw new Error("minPrecision must be <= 100"); if (f > l)
    throw new Error("minPrecision must be <= maxPrecision"); var n = e, u = n.lastIndexOf("."); if (u > -1) {
    var N = u === 0 ? "0" : n.slice(0, u), g = n.slice(u + 1, u + 1 + l), x = n.slice(u + 1 + l);
    if (x.length > 0 && +x[0] > 4) {
        var o = (BigInt(N + g) + BigInt(1)).toString(10);
        N = o.slice(0, o.length - g.length), g = o.slice(o.length - g.length);
    }
    n = N + d + g;
}
else
    n += d; for (var h = 0, o = n.length - 1; o >= 0 && n[o] === "0"; o--)
    h++; if (n = n.slice(0, n.length - h), f > 0) {
    var s = void 0;
    u > -1 ? s = f - (n.length - u - 1) : s = f;
    for (var o = 0; o < s; o++)
        n += "0";
} var P = _(d), w = new RegExp("\\d(?=(\\d{3})+" + P + ")", "g"), I = new RegExp(P + "$"); return n = n.replace(w, "$&" + v).replace(I, ""), n; } c.toClean = k; function $(e, r) { var i = r === void 0 ? {} : r, t = i.decimalMark, d = t === void 0 ? "." : t, m = i.thousandSeperator, a = m === void 0 ? null : m, p = i.thousandSeparator, v = p === void 0 ? "," : p, b = i.maxPrecision, l = b === void 0 ? 2 : b, y = i.minPrecision, f = y === void 0 ? 2 : y, n = i.symbol, u = n === void 0 ? "$" : n, N = i.symbolBehind, g = N === void 0 ? !1 : N, x = i.useParens, o = x === void 0 ? !0 : x; a && (v = a, console.error("`thousandSeperator` is deprecated use `thousandSeparator` instead.")); var h = typeof e == "number" ? e : M(e, { decimalMark: d }), s = S(e, { decimalMark: d }); if (isNaN(h))
    return "NaN"; if (h === 1 / 0)
    return "Infinity"; if (h === -1 / 0)
    return o ? "(Infinity)" : "-Infinity"; l < 2 && typeof arguments[1].minPrecision > "u" && (f = l), f > 2 && typeof arguments[1].maxPrecision > "u" && (l = f); var P = h < 0; return s = k(P ? s.slice(1) : s, { decimalMark: d, thousandSeparator: v, maxPrecision: l, minPrecision: f }), s = g ? s + " " + u : u + s, P && (s = o ? "(" + s + ")" : "-" + s), s; } c.toMoney = $; function C(e, r) { if (r === void 0 && (r = 1), typeof e != "number" && (e = M(e)), isNaN(e))
    return NaN; if (e === 1 / 0 || e === -1 / 0)
    return e; if (typeof r != "number" && (r = M(r)), isNaN(r))
    throw Error("roundTo must be a number"); if (r === 1 / 0 || r === -1 / 0)
    return r; for (var i = Math.round(e / r) * r, t = 0; !Number.isInteger(r);)
    r *= 10, t++; return i = +i.toFixed(t), i; } c.toClosest = C; });
export default R();
