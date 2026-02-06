import { a as x, b as S, d as W, h as m } from "@nf-internal/chunk-FJYW2LMB";
import { Crc32 as Ze } from "@aws-crypto/crc32";
var Z = {}, $ = {};
for (let t = 0; t < 256; t++) {
    let e = t.toString(16).toLowerCase();
    e.length === 1 && (e = `0${e}`), Z[t] = e, $[e] = t;
}
function J(t) { if (t.length % 2 !== 0)
    throw new Error("Hex encoded strings must have an even number length"); let e = new Uint8Array(t.length / 2); for (let r = 0; r < t.length; r += 2) {
    let o = t.slice(r, r + 2).toLowerCase();
    if (o in $)
        e[r / 2] = $[o];
    else
        throw new Error(`Cannot decode unrecognized sequence ${o} as hexadecimal`);
} return e; }
function f(t) { let e = ""; for (let r = 0; r < t.byteLength; r++)
    e += Z[t[r]]; return e; }
var E = class t {
    constructor(e) { if (this.bytes = e, e.byteLength !== 8)
        throw new Error("Int64 buffers must be exactly 8 bytes"); }
    static fromNumber(e) { if (e > 9223372036854776e3 || e < -9223372036854776e3)
        throw new Error(`${e} is too large (or, if negative, too small) to represent as an Int64`); let r = new Uint8Array(8); for (let o = 7, n = Math.abs(Math.round(e)); o > -1 && n > 0; o--, n /= 256)
        r[o] = n; return e < 0 && V(r), new t(r); }
    valueOf() { let e = this.bytes.slice(0), r = e[0] & 128; return r && V(e), parseInt(f(e), 16) * (r ? -1 : 1); }
    toString() { return String(this.valueOf()); }
};
function V(t) { for (let e = 0; e < 8; e++)
    t[e] ^= 255; for (let e = 7; e > -1 && (t[e]++, t[e] === 0); e--)
    ; }
var I = class {
    constructor(e, r) { this.toUtf8 = e, this.fromUtf8 = r; }
    format(e) { let r = []; for (let s of Object.keys(e)) {
        let a = this.fromUtf8(s);
        r.push(Uint8Array.from([a.byteLength]), a, this.formatHeaderValue(e[s]));
    } let o = new Uint8Array(r.reduce((s, a) => s + a.byteLength, 0)), n = 0; for (let s of r)
        o.set(s, n), n += s.byteLength; return o; }
    formatHeaderValue(e) { switch (e.type) {
        case "boolean": return Uint8Array.from([e.value ? 0 : 1]);
        case "byte": return Uint8Array.from([2, e.value]);
        case "short":
            let r = new DataView(new ArrayBuffer(3));
            return r.setUint8(0, 3), r.setInt16(1, e.value, !1), new Uint8Array(r.buffer);
        case "integer":
            let o = new DataView(new ArrayBuffer(5));
            return o.setUint8(0, 4), o.setInt32(1, e.value, !1), new Uint8Array(o.buffer);
        case "long":
            let n = new Uint8Array(9);
            return n[0] = 5, n.set(e.value.bytes, 1), n;
        case "binary":
            let s = new DataView(new ArrayBuffer(3 + e.value.byteLength));
            s.setUint8(0, 6), s.setUint16(1, e.value.byteLength, !1);
            let a = new Uint8Array(s.buffer);
            return a.set(e.value, 3), a;
        case "string":
            let u = this.fromUtf8(e.value), i = new DataView(new ArrayBuffer(3 + u.byteLength));
            i.setUint8(0, 7), i.setUint16(1, u.byteLength, !1);
            let h = new Uint8Array(i.buffer);
            return h.set(u, 3), h;
        case "timestamp":
            let c = new Uint8Array(9);
            return c[0] = 8, c.set(E.fromNumber(e.value.valueOf()).bytes, 1), c;
        case "uuid":
            if (!He.test(e.value))
                throw new Error(`Invalid UUID received: ${e.value}`);
            let p = new Uint8Array(17);
            return p[0] = 9, p.set(J(e.value.replace(/\-/g, "")), 1), p;
    } }
    parse(e) { let r = {}, o = 0; for (; o < e.byteLength;) {
        let n = e.getUint8(o++), s = this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + o, n));
        switch (o += n, e.getUint8(o++)) {
            case 0:
                r[s] = { type: ee, value: !0 };
                break;
            case 1:
                r[s] = { type: ee, value: !1 };
                break;
            case 2:
                r[s] = { type: be, value: e.getInt8(o++) };
                break;
            case 3:
                r[s] = { type: Se, value: e.getInt16(o, !1) }, o += 2;
                break;
            case 4:
                r[s] = { type: Ie, value: e.getInt32(o, !1) }, o += 4;
                break;
            case 5:
                r[s] = { type: Ue, value: new E(new Uint8Array(e.buffer, e.byteOffset + o, 8)) }, o += 8;
                break;
            case 6:
                let a = e.getUint16(o, !1);
                o += 2, r[s] = { type: Te, value: new Uint8Array(e.buffer, e.byteOffset + o, a) }, o += a;
                break;
            case 7:
                let u = e.getUint16(o, !1);
                o += 2, r[s] = { type: ve, value: this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + o, u)) }, o += u;
                break;
            case 8:
                r[s] = { type: _e, value: new Date(new E(new Uint8Array(e.buffer, e.byteOffset + o, 8)).valueOf()) }, o += 8;
                break;
            case 9:
                let i = new Uint8Array(e.buffer, e.byteOffset + o, 16);
                o += 16, r[s] = { type: Ne, value: `${f(i.subarray(0, 4))}-${f(i.subarray(4, 6))}-${f(i.subarray(6, 8))}-${f(i.subarray(8, 10))}-${f(i.subarray(10))}` };
                break;
            default: throw new Error("Unrecognized header type tag");
        }
    } return r; }
};
var ee = "boolean", be = "byte", Se = "short", Ie = "integer", Ue = "long", Te = "binary", ve = "string", _e = "timestamp", Ne = "uuid", He = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
import { Crc32 as Xe } from "@aws-crypto/crc32";
var De = 4, Ce = De * 2, Oe = 4, Fe = Ce + Oe * 2;
var G = t => { if (typeof t == "function")
    return t; let e = Promise.resolve(t); return () => e; };
var v = t => new TextEncoder().encode(t);
var g = t => typeof t == "string" ? v(t) : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(t);
var te = t => new TextDecoder("utf-8").decode(t);
var re = "X-Amz-Algorithm", oe = "X-Amz-Credential", B = "X-Amz-Date", se = "X-Amz-SignedHeaders", ne = "X-Amz-Expires", j = "X-Amz-Signature", z = "X-Amz-Security-Token";
var K = "authorization", Q = B.toLowerCase(), Me = "date", ae = [K, Q, Me], ie = j.toLowerCase(), U = "x-amz-content-sha256", ce = z.toLowerCase();
var fe = { authorization: !0, "cache-control": !0, connection: !0, expect: !0, from: !0, "keep-alive": !0, "max-forwards": !0, pragma: !0, referer: !0, te: !0, trailer: !0, "transfer-encoding": !0, upgrade: !0, "user-agent": !0, "x-amzn-trace-id": !0 }, ue = /^proxy-/, pe = /^sec-/;
var _ = "AWS4-HMAC-SHA256";
var le = "AWS4-HMAC-SHA256-PAYLOAD", he = "UNSIGNED-PAYLOAD", me = 50, X = "aws4_request", ye = 3600 * 24 * 7;
var R = {}, N = [], H = (t, e, r) => `${t}/${e}/${r}/${X}`, de = (t, e, r, o, n) => m(null, null, function* () { let s = yield ge(t, e.secretAccessKey, e.accessKeyId), a = `${r}:${o}:${n}:${f(s)}:${e.sessionToken}`; if (a in R)
    return R[a]; for (N.push(a); N.length > me;)
    delete R[N.shift()]; let u = `AWS4${e.secretAccessKey}`; for (let i of [r, o, n, X])
    u = yield ge(t, u, i); return R[a] = u; }), Ct = () => { N.length = 0, Object.keys(R).forEach(t => { delete R[t]; }); }, ge = (t, e, r) => { let o = new t(e); return o.update(g(r)), o.digest(); };
var D = ({ headers: t }, e, r) => { let o = {}; for (let n of Object.keys(t).sort()) {
    if (t[n] == null)
        continue;
    let s = n.toLowerCase();
    (s in fe || e?.has(s) || ue.test(s) || pe.test(s)) && (!r || r && !r.has(s)) || (o[s] = t[n].trim().replace(/\s+/g, " "));
} return o; };
var b = t => encodeURIComponent(t).replace(/[!'()*]/g, $e), $e = t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`;
var F = ({ query: t = {} }) => { let e = [], r = {}; for (let o of Object.keys(t).sort()) {
    if (o.toLowerCase() === ie)
        continue;
    e.push(o);
    let n = t[o];
    typeof n == "string" ? r[o] = `${b(o)}=${b(n)}` : Array.isArray(n) && (r[o] = n.slice(0).sort().reduce((s, a) => s.concat([`${b(o)}=${b(a)}`]), []).join("&"));
} return e.map(o => r[o]).filter(o => o).join("&"); };
var Ae = t => typeof ArrayBuffer == "function" && t instanceof ArrayBuffer || Object.prototype.toString.call(t) === "[object ArrayBuffer]";
var T = (o, n) => m(null, [o, n], function* ({ headers: t, body: e }, r) { for (let s of Object.keys(t))
    if (s.toLowerCase() === U)
        return t[s]; if (e == null)
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"; if (typeof e == "string" || ArrayBuffer.isView(e) || Ae(e)) {
    let s = new r;
    return s.update(g(e)), f(yield s.digest());
} return he; });
var we = (t, e) => { t = t.toLowerCase(); for (let r of Object.keys(e))
    if (t === r.toLowerCase())
        return !0; return !1; };
var C = o => { var n = o, { headers: t, query: e } = n, r = W(n, ["headers", "query"]); return S(x({}, r), { headers: x({}, t), query: e ? ke(e) : void 0 }); }, ke = t => Object.keys(t).reduce((e, r) => { let o = t[r]; return S(x({}, e), { [r]: Array.isArray(o) ? [...o] : o }); }, {});
var q = (t, e = {}) => { let { headers: r, query: o = {} } = typeof t.clone == "function" ? t.clone() : C(t); for (let n of Object.keys(r)) {
    let s = n.toLowerCase();
    s.slice(0, 6) === "x-amz-" && !e.unhoistableHeaders?.has(s) && (o[n] = r[n], delete r[n]);
} return S(x({}, t), { headers: r, query: o }); };
var O = t => { t = typeof t.clone == "function" ? t.clone() : C(t); for (let e of Object.keys(t.headers))
    ae.indexOf(e.toLowerCase()) > -1 && delete t.headers[e]; return t; };
var xe = t => Le(t).toISOString().replace(/\.\d{3}Z$/, "Z"), Le = t => typeof t == "number" ? new Date(t * 1e3) : typeof t == "string" ? Number(t) ? new Date(Number(t) * 1e3) : new Date(t) : t;
var Ee = class {
    constructor({ applyChecksum: e, credentials: r, region: o, service: n, sha256: s, uriEscapePath: a = !0 }) { this.headerMarshaller = new I(te, v), this.service = n, this.sha256 = s, this.uriEscapePath = a, this.applyChecksum = typeof e == "boolean" ? e : !0, this.regionProvider = G(o), this.credentialProvider = G(r); }
    presign(o) { return m(this, arguments, function* (e, r = {}) { let { signingDate: n = new Date, expiresIn: s = 3600, unsignableHeaders: a, unhoistableHeaders: u, signableHeaders: i, signingRegion: h, signingService: c } = r, p = yield this.credentialProvider(); this.validateResolvedCredentials(p); let d = h ?? (yield this.regionProvider()), { longDate: A, shortDate: y } = M(n); if (s > ye)
        return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future"); let w = H(y, d, c ?? this.service), l = q(O(e), { unhoistableHeaders: u }); p.sessionToken && (l.query[z] = p.sessionToken), l.query[re] = _, l.query[oe] = `${p.accessKeyId}/${w}`, l.query[B] = A, l.query[ne] = s.toString(10); let Y = D(l, a, i); return l.query[se] = Re(Y), l.query[j] = yield this.getSignature(A, w, this.getSigningKey(p, d, y, c), this.createCanonicalRequest(l, Y, yield T(e, this.sha256))), l; }); }
    sign(e, r) { return m(this, null, function* () { return typeof e == "string" ? this.signString(e, r) : e.headers && e.payload ? this.signEvent(e, r) : e.message ? this.signMessage(e, r) : this.signRequest(e, r); }); }
    signEvent(u, i) {
        return m(this, arguments, function* ({ headers: e, payload: r }, { signingDate: o = new Date, priorSignature: n, signingRegion: s, signingService: a }) {
            let h = s ?? (yield this.regionProvider()), { shortDate: c, longDate: p } = M(o), d = H(c, h, a ?? this.service), A = yield T({ headers: {}, body: r }, this.sha256), y = new this.sha256;
            y.update(e);
            let w = f(yield y.digest()), l = [le, p, d, n, w, A].join(`
`);
            return this.signString(l, { signingDate: o, signingRegion: h, signingService: a });
        });
    }
    signMessage(s, a) { return m(this, arguments, function* (e, { signingDate: r = new Date, signingRegion: o, signingService: n }) { return this.signEvent({ headers: this.headerMarshaller.format(e.message.headers), payload: e.message.body }, { signingDate: r, signingRegion: o, signingService: n, priorSignature: e.priorSignature }).then(i => ({ message: e.message, signature: i })); }); }
    signString(s) { return m(this, arguments, function* (e, { signingDate: r = new Date, signingRegion: o, signingService: n } = {}) { let a = yield this.credentialProvider(); this.validateResolvedCredentials(a); let u = o ?? (yield this.regionProvider()), { shortDate: i } = M(r), h = new this.sha256(yield this.getSigningKey(a, u, i, n)); return h.update(g(e)), f(yield h.digest()); }); }
    signRequest(u) { return m(this, arguments, function* (e, { signingDate: r = new Date, signableHeaders: o, unsignableHeaders: n, signingRegion: s, signingService: a } = {}) { let i = yield this.credentialProvider(); this.validateResolvedCredentials(i); let h = s ?? (yield this.regionProvider()), c = O(e), { longDate: p, shortDate: d } = M(r), A = H(d, h, a ?? this.service); c.headers[Q] = p, i.sessionToken && (c.headers[ce] = i.sessionToken); let y = yield T(c, this.sha256); !we(U, c.headers) && this.applyChecksum && (c.headers[U] = y); let w = D(c, n, o), l = yield this.getSignature(p, A, this.getSigningKey(i, h, d, a), this.createCanonicalRequest(c, w, y)); return c.headers[K] = `${_} Credential=${i.accessKeyId}/${A}, SignedHeaders=${Re(w)}, Signature=${l}`, c; }); }
    createCanonicalRequest(e, r, o) {
        let n = Object.keys(r).sort();
        return `${e.method}
${this.getCanonicalPath(e)}
${F(e)}
${n.map(s => `${s}:${r[s]}`).join(`
`)}

${n.join(";")}
${o}`;
    }
    createStringToSign(e, r, o) {
        return m(this, null, function* () {
            let n = new this.sha256;
            n.update(g(o));
            let s = yield n.digest();
            return `${_}
${e}
${r}
${f(s)}`;
        });
    }
    getCanonicalPath({ path: e }) { if (this.uriEscapePath) {
        let r = [];
        for (let s of e.split("/"))
            s?.length !== 0 && s !== "." && (s === ".." ? r.pop() : r.push(s));
        let o = `${e?.startsWith("/") ? "/" : ""}${r.join("/")}${r.length > 0 && e?.endsWith("/") ? "/" : ""}`;
        return encodeURIComponent(o).replace(/%2F/g, "/");
    } return e; }
    getSignature(e, r, o, n) { return m(this, null, function* () { let s = yield this.createStringToSign(e, r, n), a = new this.sha256(yield o); return a.update(g(s)), f(yield a.digest()); }); }
    getSigningKey(e, r, o, n) { return de(this.sha256, e, o, r, n || this.service); }
    validateResolvedCredentials(e) { if (typeof e != "object" || typeof e.accessKeyId != "string" || typeof e.secretAccessKey != "string")
        throw new Error("Resolved credential object is not valid"); }
}, M = t => { let e = xe(t).replace(/[\-:]/g, ""); return { longDate: e, shortDate: e.slice(0, 8) }; }, Re = t => Object.keys(t).sort().join(";");
export { Ee as SignatureV4, Ct as clearCredentialCache, H as createScope, D as getCanonicalHeaders, F as getCanonicalQuery, T as getPayloadHash, de as getSigningKey, q as moveHeadersToQuery, O as prepareRequest };
