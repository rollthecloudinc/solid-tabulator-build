import "@nf-internal/chunk-FJYW2LMB";
var U = Object.prototype.toString;
function C(e) { return U.call(e) === "[object Function]"; }
var E = function (e, n) { if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function"); }, $ = (function () { function e(n, a) { for (var r = 0; r < a.length; r++) {
    var s = a[r];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(n, s.key, s);
} } return function (n, a, r) { return a && e(n.prototype, a), r && e(n, r), n; }; })();
function f(e) { return e.split("").map(function (n) { return "(?:" + n.toUpperCase() + "|" + n.toLowerCase() + ")"; }).join(""); }
function g(e, n) { for (var a = e.length - 1; a >= 0; a--)
    e[a] === n && Array.prototype.splice.call(e, a, 1); }
function A(e, n) { return Object.prototype.hasOwnProperty.call(e, n); }
var h = {}, y = (function () { $(e, null, [{ key: "getInstance", value: function (a) { return h[a] = h[a] || new e, h[a]; } }]); function e() { E(this, e), this.plurals = [], this.singulars = [], this.uncountables = [], this.humans = [], this.acronyms = {}, this.acronymRegex = /(?=a)b/; } return $(e, [{ key: "acronym", value: function (a) { this.acronyms[a.toLowerCase()] = a; var r = []; for (var s in this.acronyms)
            A(this.acronyms, s) && r.push(this.acronyms[s]); this.acronymRegex = new RegExp(r.join("|")); } }, { key: "plural", value: function (a, r) { typeof a == "string" && g(this.uncountables, a), g(this.uncountables, r), this.plurals.unshift([a, r]); } }, { key: "singular", value: function (a, r) { typeof a == "string" && g(this.uncountables, a), g(this.uncountables, r), this.singulars.unshift([a, r]); } }, { key: "irregular", value: function (a, r) { g(this.uncountables, a), g(this.uncountables, r); var s = a[0], u = a.substr(1), i = r[0], t = r.substr(1); if (s.toUpperCase() === i.toUpperCase())
            this.plural(new RegExp("(" + s + ")" + u + "$", "i"), "$1" + t), this.plural(new RegExp("(" + i + ")" + t + "$", "i"), "$1" + t), this.singular(new RegExp("(" + s + ")" + u + "$", "i"), "$1" + u), this.singular(new RegExp("(" + i + ")" + t + "$", "i"), "$1" + u);
        else {
            var p = f(u), o = f(t);
            this.plural(new RegExp(s.toUpperCase() + p + "$"), i.toUpperCase() + t), this.plural(new RegExp(s.toLowerCase() + p + "$"), i.toLowerCase() + t), this.plural(new RegExp(i.toUpperCase() + o + "$"), i.toUpperCase() + t), this.plural(new RegExp(i.toLowerCase() + o + "$"), i.toLowerCase() + t), this.singular(new RegExp(s.toUpperCase() + p + "$"), s.toUpperCase() + u), this.singular(new RegExp(s.toLowerCase() + p + "$"), s.toLowerCase() + u), this.singular(new RegExp(i.toUpperCase() + o + "$"), s.toUpperCase() + u), this.singular(new RegExp(i.toLowerCase() + o + "$"), s.toLowerCase() + u);
        } } }, { key: "uncountable", value: function () { for (var a = arguments.length, r = Array(a), s = 0; s < a; s++)
            r[s] = arguments[s]; this.uncountables = this.uncountables.concat(r); } }, { key: "human", value: function (a, r) { this.humans.unshift([a, r]); } }, { key: "clear", value: function () { var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "all"; a === "all" ? (this.plurals = [], this.singulars = [], this.uncountables = [], this.humans = []) : this[a] = []; } }]), e; })();
function R(e) { e.plural(/$/, "s"), e.plural(/s$/i, "s"), e.plural(/^(ax|test)is$/i, "$1es"), e.plural(/(octop|vir)us$/i, "$1i"), e.plural(/(octop|vir)i$/i, "$1i"), e.plural(/(alias|status)$/i, "$1es"), e.plural(/(bu)s$/i, "$1ses"), e.plural(/(buffal|tomat)o$/i, "$1oes"), e.plural(/([ti])um$/i, "$1a"), e.plural(/([ti])a$/i, "$1a"), e.plural(/sis$/i, "ses"), e.plural(/(?:([^f])fe|([lr])f)$/i, "$1$2ves"), e.plural(/(hive)$/i, "$1s"), e.plural(/([^aeiouy]|qu)y$/i, "$1ies"), e.plural(/(x|ch|ss|sh)$/i, "$1es"), e.plural(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices"), e.plural(/^(m|l)ouse$/i, "$1ice"), e.plural(/^(m|l)ice$/i, "$1ice"), e.plural(/^(ox)$/i, "$1en"), e.plural(/^(oxen)$/i, "$1"), e.plural(/(quiz)$/i, "$1zes"), e.singular(/s$/i, ""), e.singular(/(ss)$/i, "$1"), e.singular(/(n)ews$/i, "$1ews"), e.singular(/([ti])a$/i, "$1um"), e.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i, "$1sis"), e.singular(/(^analy)(sis|ses)$/i, "$1sis"), e.singular(/([^f])ves$/i, "$1fe"), e.singular(/(hive)s$/i, "$1"), e.singular(/(tive)s$/i, "$1"), e.singular(/([lr])ves$/i, "$1f"), e.singular(/([^aeiouy]|qu)ies$/i, "$1y"), e.singular(/(s)eries$/i, "$1eries"), e.singular(/(m)ovies$/i, "$1ovie"), e.singular(/(x|ch|ss|sh)es$/i, "$1"), e.singular(/^(m|l)ice$/i, "$1ouse"), e.singular(/(bus)(es)?$/i, "$1"), e.singular(/(o)es$/i, "$1"), e.singular(/(shoe)s$/i, "$1"), e.singular(/(cris|test)(is|es)$/i, "$1is"), e.singular(/^(a)x[ie]s$/i, "$1xis"), e.singular(/(octop|vir)(us|i)$/i, "$1us"), e.singular(/(alias|status)(es)?$/i, "$1"), e.singular(/^(ox)en/i, "$1"), e.singular(/(vert|ind)ices$/i, "$1ex"), e.singular(/(matr)ices$/i, "$1ix"), e.singular(/(quiz)zes$/i, "$1"), e.singular(/(database)s$/i, "$1"), e.irregular("person", "people"), e.irregular("man", "men"), e.irregular("child", "children"), e.irregular("sex", "sexes"), e.irregular("move", "moves"), e.irregular("zombie", "zombies"), e.uncountable("equipment", "information", "rice", "money", "species", "series", "fish", "sheep", "jeans", "police"); }
var d = { en: R };
function l(e, n) { if (C(e) && (n = e, e = null), e = e || "en", n)
    n(y.getInstance(e));
else
    return y.getInstance(e); }
for (v in d)
    l(v, d[v]);
var v;
function z(e, n) { var a = "" + e, r, s, u; if (a.length === 0)
    return a; var i = a.toLowerCase().match(/\b\w+$/); if (i && l().uncountables.indexOf(i[0]) > -1)
    return a; for (var t = 0, p = n.length; t < p; t++)
    if (r = n[t], s = r[0], u = r[1], a.match(s)) {
        a = a.replace(s, u);
        break;
    } return a; }
function L(e) { var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en"; return z(e, l(n).plurals); }
function O(e) { var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en"; return z(e, l(n).singulars); }
function x(e) { var n = e == null ? "" : String(e); return n.charAt(0).toUpperCase() + n.slice(1); }
function I(e, n) { n == null && (n = !0); var a = "" + e; return n ? a = a.replace(/^[a-z\d]*/, function (r) { return l().acronyms[r] || x(r); }) : a = a.replace(new RegExp("^(?:" + l().acronymRegex.source + "(?=\\b|[A-Z_])|\\w)"), function (r) { return r.toLowerCase(); }), a = a.replace(/(?:_|(\/))([a-z\d]*)/gi, function (r, s, u, i, t) { return s || (s = ""), "" + s + (l().acronyms[u] || x(u)); }), a; }
function c(e) { var n = "" + e; return n = n.replace(new RegExp("(?:([A-Za-z\\d])|^)(" + l().acronymRegex.source + ")(?=\\b|[^a-z])", "g"), function (a, r, s) { return "" + (r || "") + (r ? "_" : "") + s.toLowerCase(); }), n = n.replace(/([A-Z\d]+)([A-Z][a-z])/g, "$1_$2"), n = n.replace(/([a-z\d])([A-Z])/g, "$1_$2"), n = n.replace(/-/g, "_"), n.toLowerCase(); }
function k(e, n) { var a = "" + e, r = l().humans, s = void 0, u = void 0, i = void 0; n = n || {}, (n.capitalize === null || n.capitalize === void 0) && (n.capitalize = !0); for (var t = 0, p = r.length; t < p; t++)
    if (s = r[t], u = s[0], i = s[1], u.test && u.test(a) || a.indexOf(u) > -1) {
        a = a.replace(u, i);
        break;
    } return a = a.replace(/_id$/, ""), a = a.replace(/_/g, " "), a = a.replace(/([a-z\d]*)/gi, function (o) { return l().acronyms[o] || o.toLowerCase(); }), n.capitalize && (a = a.replace(/^\w/, function (o) { return o.toUpperCase(); })), a; }
function N(e) { return k(c(e)).replace(/(^|[\s¿/]+)([a-z])/g, function (n, a, r, s, u) { return n.replace(r, r.toUpperCase()); }); }
function Z(e) { return L(c(e)); }
function H(e) { return I(O(e.replace(/.*\./g, ""))); }
function P(e) { return e.replace(/_/g, "-"); }
function D(e) { var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0; return "" + c(e) + (n ? "_id" : "id"); }
function T(e) { var n = Math.abs(Number(e)), a = n % 100; if (a === 11 || a === 12 || a === 13)
    return "th"; switch (n % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
} }
function G(e) { return "" + e + T(e); }
var w = { \u00C0: "A", \u00C1: "A", \u00C2: "A", \u00C3: "A", \u00C4: "A", \u00C5: "A", \u00C6: "AE", \u00C7: "C", \u00C8: "E", \u00C9: "E", \u00CA: "E", \u00CB: "E", \u00CC: "I", \u00CD: "I", \u00CE: "I", \u00CF: "I", \u00D0: "D", \u00D1: "N", \u00D2: "O", \u00D3: "O", \u00D4: "O", \u00D5: "O", \u00D6: "O", "\xD7": "x", \u00D8: "O", \u00D9: "U", \u00DA: "U", \u00DB: "U", \u00DC: "U", \u00DD: "Y", \u00DE: "Th", \u00DF: "ss", \u00E0: "a", \u00E1: "a", \u00E2: "a", \u00E3: "a", \u00E4: "a", \u00E5: "a", \u00E6: "ae", \u00E7: "c", \u00E8: "e", \u00E9: "e", \u00EA: "e", \u00EB: "e", \u00EC: "i", \u00ED: "i", \u00EE: "i", \u00EF: "i", \u00F0: "d", \u00F1: "n", \u00F2: "o", \u00F3: "o", \u00F4: "o", \u00F5: "o", \u00F6: "o", \u00F8: "o", \u00F9: "u", \u00FA: "u", \u00FB: "u", \u00FC: "u", \u00FD: "y", \u00FE: "th", \u00FF: "y", \u0100: "A", \u0101: "a", \u0102: "A", \u0103: "a", \u0104: "A", \u0105: "a", \u0106: "C", \u0107: "c", \u0108: "C", \u0109: "c", \u010A: "C", \u010B: "c", \u010C: "C", \u010D: "c", \u010E: "D", \u010F: "d", \u0110: "D", \u0111: "d", \u0112: "E", \u0113: "e", \u0114: "E", \u0115: "e", \u0116: "E", \u0117: "e", \u0118: "E", \u0119: "e", \u011A: "E", \u011B: "e", \u011C: "G", \u011D: "g", \u011E: "G", \u011F: "g", \u0120: "G", \u0121: "g", \u0122: "G", \u0123: "g", \u0124: "H", \u0125: "h", \u0126: "H", \u0127: "h", \u0128: "I", \u0129: "i", \u012A: "I", \u012B: "i", \u012C: "I", \u012D: "i", \u012E: "I", \u012F: "i", \u0130: "I", \u0131: "i", \u0132: "IJ", \u0133: "ij", \u0134: "J", \u0135: "j", \u0136: "K", \u0137: "k", \u0138: "k", \u0139: "L", \u013A: "l", \u013B: "L", \u013C: "l", \u013D: "L", \u013E: "l", \u013F: "L", \u0140: "l", \u0141: "L", \u0142: "l", \u0143: "N", \u0144: "n", \u0145: "N", \u0146: "n", \u0147: "N", \u0148: "n", \u0149: "'n", \u014A: "NG", \u014B: "ng", \u014C: "O", \u014D: "o", \u014E: "O", \u014F: "o", \u0150: "O", \u0151: "o", \u0152: "OE", \u0153: "oe", \u0154: "R", \u0155: "r", \u0156: "R", \u0157: "r", \u0158: "R", \u0159: "r", \u015A: "S", \u015B: "s", \u015C: "S", \u015D: "s", \u015E: "S", \u015F: "s", \u0160: "S", \u0161: "s", \u0162: "T", \u0163: "t", \u0164: "T", \u0165: "t", \u0166: "T", \u0167: "t", \u0168: "U", \u0169: "u", \u016A: "U", \u016B: "u", \u016C: "U", \u016D: "u", \u016E: "U", \u016F: "u", \u0170: "U", \u0171: "u", \u0172: "U", \u0173: "u", \u0174: "W", \u0175: "w", \u0176: "Y", \u0177: "y", \u0178: "Y", \u0179: "Z", \u017A: "z", \u017B: "Z", \u017C: "z", \u017D: "Z", \u017E: "z", \u0410: "A", \u0411: "B", \u0412: "V", \u0413: "G", \u0414: "D", \u0415: "E", \u0401: "E", \u0416: "ZH", \u0417: "Z", \u0418: "I", \u0419: "J", \u041A: "K", \u041B: "L", \u041C: "M", \u041D: "N", \u041E: "O", \u041F: "P", \u0420: "R", \u0421: "S", \u0422: "T", \u0423: "U", \u0424: "F", \u0425: "KH", \u0426: "C", \u0427: "CH", \u0428: "SH", \u0429: "SHCH", \u042A: "", \u042B: "Y", \u042C: "", \u042D: "E", \u042E: "YU", \u042F: "YA", \u0430: "a", \u0431: "b", \u0432: "v", \u0433: "g", \u0434: "d", \u0435: "e", \u0451: "e", \u0436: "zh", \u0437: "z", \u0438: "i", \u0439: "j", \u043A: "k", \u043B: "l", \u043C: "m", \u043D: "n", \u043E: "o", \u043F: "p", \u0440: "r", \u0441: "s", \u0442: "t", \u0443: "u", \u0444: "f", \u0445: "kh", \u0446: "c", \u0447: "ch", \u0448: "sh", \u0449: "shch", \u044A: "", \u044B: "y", \u044C: "", \u044D: "e", \u044E: "yu", \u044F: "ya" }, _ = "?", m = {}, b = (function () { $(e, null, [{ key: "getInstance", value: function (a) { return m[a] = m[a] || new e, m[a]; } }]); function e() { E(this, e), this.approximations = {}; for (var n in w)
    this.approximate(n, w[n]); } return $(e, [{ key: "approximate", value: function (a, r) { this.approximations[a] = r; } }, { key: "transliterate", value: function (a, r) { var s = this; return a.replace(/[^\u0000-\u007f]/g, function (u) { return s.approximations[u] || r || _; }); } }]), e; })();
function S(e, n) { if (C(e) && (n = e, e = null), e = e || "en", n)
    n(b.getInstance(e));
else
    return b.getInstance(e); }
function j(e) { var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.locale || "en", r = n.replacement || "?"; return S(a).transliterate(e, r); }
function Y(e) { var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; n.separator === void 0 && (n.separator = "-"), n.separator === null && (n.separator = ""); var a = j(e, n); if (a = a.replace(/[^a-z0-9\-_]+/ig, n.separator), n.separator.length) {
    var r = new RegExp(n.separator);
    a = a.replace(new RegExp(r.source + "{2,}"), n.separator), a = a.replace(new RegExp("^" + r.source + "|" + r.source + "$", "i"), "");
} return n.preserveCase ? a : a.toLowerCase(); }
function q(e) { return c(e).toUpperCase().replace(/\s+/g, "_"); }
export { I as camelize, x as capitalize, H as classify, q as constantify, P as dasherize, D as foreignKey, k as humanize, l as inflections, T as ordinal, G as ordinalize, Y as parameterize, L as pluralize, O as singularize, Z as tableize, N as titleize, j as transliterate, S as transliterations, c as underscore };
