import { e as n } from "@nf-internal/chunk-FJYW2LMB";
var U = n(i => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    i.toUtf8 = i.fromUtf8 = void 0;
    var E = e => { let o = []; for (let r = 0, a = e.length; r < a; r++) {
        let t = e.charCodeAt(r);
        if (t < 128)
            o.push(t);
        else if (t < 2048)
            o.push(t >> 6 | 192, t & 63 | 128);
        else if (r + 1 < e.length && (t & 64512) === 55296 && (e.charCodeAt(r + 1) & 64512) === 56320) {
            let u = 65536 + ((t & 1023) << 10) + (e.charCodeAt(++r) & 1023);
            o.push(u >> 18 | 240, u >> 12 & 63 | 128, u >> 6 & 63 | 128, u & 63 | 128);
        }
        else
            o.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
    } return Uint8Array.from(o); };
    i.fromUtf8 = E;
    var j = e => { let o = ""; for (let r = 0, a = e.length; r < a; r++) {
        let t = e[r];
        if (t < 128)
            o += String.fromCharCode(t);
        else if (192 <= t && t < 224) {
            let u = e[++r];
            o += String.fromCharCode((t & 31) << 6 | u & 63);
        }
        else if (240 <= t && t < 365) {
            let P = "%" + [t, e[++r], e[++r], e[++r]].map(x => x.toString(16)).join("%");
            o += decodeURIComponent(P);
        }
        else
            o += String.fromCharCode((t & 15) << 12 | (e[++r] & 63) << 6 | e[++r] & 63);
    } return o; };
    i.toUtf8 = j;
});
var l = n(c => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    c.toUtf8 = c.fromUtf8 = void 0;
    function B(e) { return new TextEncoder().encode(e); }
    c.fromUtf8 = B;
    function O(e) { return new TextDecoder("utf-8").decode(e); }
    c.toUtf8 = O;
});
var A = n(s => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });
    s.toUtf8 = s.fromUtf8 = void 0;
    var v = U(), g = l(), w = e => typeof TextEncoder == "function" ? (0, g.fromUtf8)(e) : (0, v.fromUtf8)(e);
    s.fromUtf8 = w;
    var C = e => typeof TextDecoder == "function" ? (0, g.toUtf8)(e) : (0, v.toUtf8)(e);
    s.toUtf8 = C;
});
var _ = n(b => {
    "use strict";
    Object.defineProperty(b, "__esModule", { value: !0 });
    b.convertToBuffer = void 0;
    var D = A(), M = typeof Buffer < "u" && Buffer.from ? function (e) { return Buffer.from(e, "utf8"); } : D.fromUtf8;
    function q(e) { return e instanceof Uint8Array ? e : typeof e == "string" ? M(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e); }
    b.convertToBuffer = q;
});
var h = n(y => {
    "use strict";
    Object.defineProperty(y, "__esModule", { value: !0 });
    y.isEmptyData = void 0;
    function F(e) { return typeof e == "string" ? e.length === 0 : e.byteLength === 0; }
    y.isEmptyData = F;
});
var T = n(m => {
    "use strict";
    Object.defineProperty(m, "__esModule", { value: !0 });
    m.numToUint8 = void 0;
    function S(e) { return new Uint8Array([(e & 4278190080) >> 24, (e & 16711680) >> 16, (e & 65280) >> 8, e & 255]); }
    m.numToUint8 = S;
});
var p = n(d => {
    "use strict";
    Object.defineProperty(d, "__esModule", { value: !0 });
    d.uint32ArrayFrom = void 0;
    function L(e) { if (!Array.from) {
        for (var o = new Uint32Array(e.length), r = 0; r < e.length;)
            o[r] = e[r];
        return o;
    } return Uint32Array.from(e); }
    d.uint32ArrayFrom = L;
});
var V = n(f => {
    "use strict";
    Object.defineProperty(f, "__esModule", { value: !0 });
    f.uint32ArrayFrom = f.numToUint8 = f.isEmptyData = f.convertToBuffer = void 0;
    var R = _();
    Object.defineProperty(f, "convertToBuffer", { enumerable: !0, get: function () { return R.convertToBuffer; } });
    var I = h();
    Object.defineProperty(f, "isEmptyData", { enumerable: !0, get: function () { return I.isEmptyData; } });
    var J = T();
    Object.defineProperty(f, "numToUint8", { enumerable: !0, get: function () { return J.numToUint8; } });
    var N = p();
    Object.defineProperty(f, "uint32ArrayFrom", { enumerable: !0, get: function () { return N.uint32ArrayFrom; } });
});
export { V as a };
