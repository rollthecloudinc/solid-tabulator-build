import { $ as d, A as wo, Aa as kp, Ba as Bp, C as Gm, Ca as Pp, E as _n, F as An, G as Rn, H as vr, I as jm, J as wr, K as zm, M as qm, N as Hm, O as Fm, P as Vm, Q as Km, R as Wm, S as fe, T as Zm, U as Xm, V as Jm, W as Qm, X as Ym, Y as tp, Z as ep, _ as rp, a as Am, aa as op, b as Rm, ba as np, c as se, ca as sp, d as Bn, da as ip, e as vm, ea as ap, f as wm, fa as vn, g as Om, ga as cp, h as Ro, ha as Or, i as Ar, ia as up, j as Tm, k as Dm, l as Im, la as mp, m as er, ma as pp, n as dr, na as lp, o as Lm, oa as dp, p as Oe, pa as fp, q as Mm, qa as gp, r as Pn, ra as f, s as $m, sa as xp, t as Ue, ta as hp, u as vo, ua as Cp, va as yp, w as Um, wa as Ep, x as Nm, xa as be, y as Et, ya as Sp, z as Lt, za as bp } from "@nf-internal/chunk-ZLJJ3AQQ";
import { a as Rr, b as $e } from "@nf-internal/chunk-A2Y7EL3B";
import "@nf-internal/chunk-SC2LNWXG";
import { a as u, b as p, d as _m, g as sc, h as _, i as It, j as de, k as Fe } from "@nf-internal/chunk-FJYW2LMB";
function Ay(r) { return t => o => _(null, null, function* () { let { request: e } = o; if (r.expectContinueHeader !== !1 && se.isInstance(e) && e.body && r.runtime === "node" && r.requestHandler?.constructor?.name !== "FetchHttpHandler") {
    let s = !0;
    if (typeof r.expectContinueHeader == "number")
        try {
            s = (Number(e.headers?.["content-length"]) ?? r.bodyLengthChecker?.(e.body) ?? 1 / 0) >= r.expectContinueHeader;
        }
        catch { }
    else
        s = !!r.expectContinueHeader;
    s && (e.headers.Expect = "100-continue");
} return t(p(u({}, o), { request: e })); }); }
var Ry = { step: "build", tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"], name: "addExpectContinueMiddleware", override: !0 }, _p = r => ({ applyToStack: t => { t.add(Ay(r), Ry); } });
var Ve = { WHEN_SUPPORTED: "WHEN_SUPPORTED", WHEN_REQUIRED: "WHEN_REQUIRED" }, Ap = Ve.WHEN_SUPPORTED, wn = { WHEN_SUPPORTED: "WHEN_SUPPORTED", WHEN_REQUIRED: "WHEN_REQUIRED" }, Rp = Ve.WHEN_SUPPORTED, rt = (function (r) { return r.MD5 = "MD5", r.CRC32 = "CRC32", r.CRC32C = "CRC32C", r.CRC64NVME = "CRC64NVME", r.SHA1 = "SHA1", r.SHA256 = "SHA256", r; })(rt || {});
var Oo = rt.CRC32;
var ic = { CrtCrc64Nvme: null };
var vy = typeof ReadableStream == "function" ? ReadableStream : function () { }, On = class extends vy {
};
var To = r => typeof ReadableStream == "function" && (r?.constructor?.name === ReadableStream.name || r instanceof ReadableStream);
var vp = ({ expectedChecksum: r, checksum: t, source: o, checksumSourceLocation: e, base64Encoder: s }) => { if (!To(o))
    throw new Error(`@smithy/util-stream: unsupported source type ${o?.constructor?.name ?? o} in ChecksumStream.`); let a = s ?? Oe; if (typeof TransformStream != "function")
    throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream."); let c = new TransformStream({ start() { }, transform(k, A) { return _(this, null, function* () { t.update(k), A.enqueue(k); }); }, flush(k) { return _(this, null, function* () { let A = yield t.digest(), v = a(A); if (r !== v) {
        let I = new Error(`Checksum mismatch: expected "${r}" but received "${v}" in response header "${e}".`);
        k.error(I);
    }
    else
        k.terminate(); }); } }); o.pipeThrough(c); let x = c.readable; return Object.setPrototypeOf(x, On.prototype), x; };
var Tn = class {
    allocByteArray;
    byteLength = 0;
    byteArrays = [];
    constructor(t) { this.allocByteArray = t; }
    push(t) { this.byteArrays.push(t), this.byteLength += t.byteLength; }
    flush() { if (this.byteArrays.length === 1) {
        let e = this.byteArrays[0];
        return this.reset(), e;
    } let t = this.allocByteArray(this.byteLength), o = 0; for (let e = 0; e < this.byteArrays.length; ++e) {
        let s = this.byteArrays[e];
        t.set(s, o), o += s.byteLength;
    } return this.reset(), t; }
    reset() { this.byteArrays = [], this.byteLength = 0; }
};
function wy(r, t, o) { let e = r.getReader(), s = !1, a = 0, c = ["", new Tn(k => new Uint8Array(k))], x = -1, h = k => _(null, null, function* () { let { value: A, done: v } = yield e.read(), I = A; if (v) {
    if (x !== -1) {
        let T = ac(c, x);
        Do(T) > 0 && k.enqueue(T);
    }
    k.close();
}
else {
    let T = Ty(I, !1);
    if (x !== T && (x >= 0 && k.enqueue(ac(c, x)), x = T), x === -1) {
        k.enqueue(I);
        return;
    }
    let $ = Do(I);
    a += $;
    let G = Do(c[x]);
    if ($ >= t && G === 0)
        k.enqueue(I);
    else {
        let q = Oy(c, x, I);
        !s && a > t * 2 && (s = !0, o?.warn(`@smithy/util-stream - stream chunk size ${$} is below threshold of ${t}, automatically buffering.`)), q >= t ? k.enqueue(ac(c, x)) : yield h(k);
    }
} }); return new ReadableStream({ pull: h }); }
var wp = wy;
function Oy(r, t, o) { switch (t) {
    case 0: return r[0] += o, Do(r[0]);
    case 1:
    case 2: return r[t].push(o), Do(r[t]);
} }
function ac(r, t) { switch (t) {
    case 0:
        let o = r[0];
        return r[0] = "", o;
    case 1:
    case 2: return r[t].flush();
} throw new Error(`@smithy/util-stream - invalid index ${t} given to flush()`); }
function Do(r) { return r?.byteLength ?? r?.length ?? 0; }
function Ty(r, t = !0) { return t && typeof Buffer < "u" && r instanceof Buffer ? 2 : r instanceof Uint8Array ? 1 : typeof r == "string" ? 0 : -1; }
var Op = (r, t) => {
    let { base64Encoder: o, bodyLengthChecker: e, checksumAlgorithmFn: s, checksumLocationName: a, streamHasher: c } = t, x = o !== void 0 && e !== void 0 && s !== void 0 && a !== void 0 && c !== void 0, h = x ? c(s, r) : void 0, k = r.getReader();
    return new ReadableStream({ pull(v) {
            return _(this, null, function* () {
                let { value: I, done: T } = yield k.read();
                if (T) {
                    if (v.enqueue(`0\r
`), x) {
                        let $ = o(yield h);
                        v.enqueue(`${a}:${$}\r
`), v.enqueue(`\r
`);
                    }
                    v.close();
                }
                else
                    v.enqueue(`${(e(I) || 0).toString(16)}\r
${I}\r
`);
            });
        } });
};
function Tp(r, t) { return _(this, null, function* () { let o = 0, e = [], s = r.getReader(), a = !1; for (; !a;) {
    let { done: h, value: k } = yield s.read();
    if (k && (e.push(k), o += k?.byteLength ?? 0), o >= t)
        break;
    a = h;
} s.releaseLock(); let c = new Uint8Array(Math.min(t, o)), x = 0; for (let h of e) {
    if (h.byteLength > c.byteLength - x) {
        c.set(h.subarray(0, c.byteLength - x), x);
        break;
    }
    else
        c.set(h, x);
    x += h.length;
} return c; }); }
var Dp = "The stream has already been transformed.", Dn = r => {
    if (!Ip(r) && !To(r)) {
        let s = r?.__proto__?.constructor?.name || r;
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${s}`);
    }
    let t = !1, o = () => _(null, null, function* () { if (t)
        throw new Error(Dp); return t = !0, yield Pn(r); }), e = s => {
        if (typeof s.stream != "function")
            throw new Error(`Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.
If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body`);
        return s.stream();
    };
    return Object.assign(r, { transformToByteArray: o, transformToString: s => _(null, null, function* () { let a = yield o(); if (s === "base64")
            return Oe(a); if (s === "hex")
            return Ue(a); if (s === void 0 || s === "utf8" || s === "utf-8")
            return $e(a); if (typeof TextDecoder == "function")
            return new TextDecoder(s).decode(a); throw new Error("TextDecoder is not available, please make sure polyfill is provided."); }), transformToWebStream: () => { if (t)
            throw new Error(Dp); if (t = !0, Ip(r))
            return e(r); if (To(r))
            return r; throw new Error(`Cannot transform payload to web stream, got ${r}`); } });
}, Ip = r => typeof Blob == "function" && r instanceof Blob;
function Lp(r) { return _(this, null, function* () { return typeof r.stream == "function" && (r = r.stream()), r.tee(); }); }
function cc(r) { return encodeURIComponent(r).replace(/[!'()*]/g, function (t) { return "%" + t.charCodeAt(0).toString(16).toUpperCase(); }); }
function Mp(r) { return (r.includes(",") || r.includes('"')) && (r = `"${r.replace(/"/g, '\\"')}"`), r; }
var uc = "(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?", mc = "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)", pc = "(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?", $p = "(\\d?\\d)", Up = "(\\d{4})", Dy = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/), Iy = new RegExp(`^${uc}, ${$p} ${mc} ${Up} ${pc} GMT$`), Ly = new RegExp(`^${uc}, ${$p}-${mc}-(\\d\\d) ${pc} GMT$`), My = new RegExp(`^${uc} ${mc} ( [1-9]|\\d\\d) ${pc} ${Up}$`), $y = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], Np = r => { if (r == null)
    return; let t = NaN; if (typeof r == "number")
    t = r;
else if (typeof r == "string") {
    if (!/^-?\d*\.?\d+$/.test(r))
        throw new TypeError("parseEpochTimestamp - numeric string invalid.");
    t = Number.parseFloat(r);
}
else
    typeof r == "object" && r.tag === 1 && (t = r.value); if (isNaN(t) || Math.abs(t) === 1 / 0)
    throw new TypeError("Epoch timestamps must be valid finite numbers."); return new Date(Math.round(t * 1e3)); }, Gp = r => { if (r == null)
    return; if (typeof r != "string")
    throw new TypeError("RFC3339 timestamps must be strings"); let t = Dy.exec(r); if (!t)
    throw new TypeError(`Invalid RFC3339 timestamp format ${r}`); let [, o, e, s, a, c, x, , h, k] = t; Ke(e, 1, 12), Ke(s, 1, 31), Ke(a, 0, 23), Ke(c, 0, 59), Ke(x, 0, 60); let A = new Date(Date.UTC(Number(o), Number(e) - 1, Number(s), Number(a), Number(c), Number(x), Number(h) ? Math.round(parseFloat(`0.${h}`) * 1e3) : 0)); if (A.setUTCFullYear(Number(o)), k.toUpperCase() != "Z") {
    let [, v, I, T] = /([+-])(\d\d):(\d\d)/.exec(k) || [void 0, "+", 0, 0], $ = v === "-" ? 1 : -1;
    A.setTime(A.getTime() + $ * (Number(I) * 60 * 60 * 1e3 + Number(T) * 60 * 1e3));
} return A; }, jp = r => { if (r == null)
    return; if (typeof r != "string")
    throw new TypeError("RFC7231 timestamps must be strings."); let t, o, e, s, a, c, x, h; if ((h = Iy.exec(r)) ? [, t, o, e, s, a, c, x] = h : (h = Ly.exec(r)) ? ([, t, o, e, s, a, c, x] = h, e = (Number(e) + 1900).toString()) : (h = My.exec(r)) && ([, o, t, s, a, c, x, e] = h), e && c) {
    let k = Date.UTC(Number(e), $y.indexOf(o), Number(t), Number(s), Number(a), Number(c), x ? Math.round(parseFloat(`0.${x}`) * 1e3) : 0);
    Ke(t, 1, 31), Ke(s, 0, 23), Ke(a, 0, 59), Ke(c, 0, 60);
    let A = new Date(k);
    return A.setUTCFullYear(Number(e)), A;
} throw new TypeError(`Invalid RFC7231 date-time value ${r}.`); };
function Ke(r, t, o) { let e = Number(r); if (e < t || e > o)
    throw new Error(`Value ${e} out of range [${t}, ${o}]`); }
function zp(r, t, o) { if (o <= 0 || !Number.isInteger(o))
    throw new Error("Invalid number of delimiters (" + o + ") for splitEvery."); let e = r.split(t); if (o === 1)
    return e; let s = [], a = ""; for (let c = 0; c < e.length; c++)
    a === "" ? a = e[c] : a += t + e[c], (c + 1) % o === 0 && (s.push(a), a = ""); return a !== "" && s.push(a), s; }
var In = r => { let t = r.length, o = [], e = !1, s, a = 0; for (let c = 0; c < t; ++c) {
    let x = r[c];
    switch (x) {
        case '"':
            s !== "\\" && (e = !e);
            break;
        case ",":
            e || (o.push(r.slice(a, c)), a = c + 1);
            break;
        default:
    }
    s = x;
} return o.push(r.slice(a)), o.map(c => { c = c.trim(); let x = c.length; return x < 2 ? c : (c[0] === '"' && c[x - 1] === '"' && (c = c.slice(1, x - 1)), c.replace(/\\"/g, '"')); }); };
var Ln = class extends jm {
    serializeRequest(t, o, e) { return _(this, null, function* () { let s = u({}, o ?? {}), a = this.serializer, c = {}, x = {}, h = yield e.endpoint(), k = Et.of(t?.input), A = k.getSchema(), v = !1, I, T = new se({ protocol: "", hostname: "", port: void 0, path: "", fragment: void 0, query: c, headers: x, body: void 0 }); if (h) {
        this.updateServiceEndpoint(T, h), this.setHostPrefix(T, t, s);
        let $ = Nm(t.traits);
        if ($.http) {
            T.method = $.http[0];
            let [G, q] = $.http[1].split("?");
            T.path == "/" ? T.path = G : T.path += G;
            let et = new URLSearchParams(q ?? "");
            Object.assign(c, Object.fromEntries(et));
        }
    } for (let [$, G] of k.structIterator()) {
        let q = G.getMergedTraits() ?? {}, et = s[$];
        if (!(et == null && !G.isIdempotencyToken()))
            if (q.httpPayload)
                G.isStreaming() ? G.isStructSchema() ? s[$] && (I = yield this.serializeEventStream({ eventStream: s[$], requestSchema: k })) : I = et : (a.write(G, et), I = a.flush()), delete s[$];
            else if (q.httpLabel) {
                a.write(G, et);
                let it = a.flush();
                T.path.includes(`{${$}+}`) ? T.path = T.path.replace(`{${$}+}`, it.split("/").map(cc).join("/")) : T.path.includes(`{${$}}`) && (T.path = T.path.replace(`{${$}}`, cc(it))), delete s[$];
            }
            else if (q.httpHeader)
                a.write(G, et), x[q.httpHeader.toLowerCase()] = String(a.flush()), delete s[$];
            else if (typeof q.httpPrefixHeaders == "string") {
                for (let [it, vt] of Object.entries(et)) {
                    let gt = q.httpPrefixHeaders + it;
                    a.write([G.getValueSchema(), { httpHeader: gt }], vt), x[gt.toLowerCase()] = a.flush();
                }
                delete s[$];
            }
            else
                q.httpQuery || q.httpQueryParams ? (this.serializeQuery(G, et, c), delete s[$]) : v = !0;
    } return v && s && (a.write(A, s), I = a.flush()), T.headers = x, T.query = c, T.body = I, T; }); }
    serializeQuery(t, o, e) { let s = this.serializer, a = t.getMergedTraits(); if (a.httpQueryParams) {
        for (let [c, x] of Object.entries(o))
            if (!(c in e)) {
                let h = t.getValueSchema();
                Object.assign(h.getMergedTraits(), p(u({}, a), { httpQuery: c, httpQueryParams: void 0 })), this.serializeQuery(h, x, e);
            }
        return;
    } if (t.isListSchema()) {
        let c = !!t.getMergedTraits().sparse, x = [];
        for (let h of o) {
            s.write([t.getValueSchema(), a], h);
            let k = s.flush();
            (c || k !== void 0) && x.push(k);
        }
        e[a.httpQuery] = x;
    }
    else
        s.write([t, a], o), e[a.httpQuery] = s.flush(); }
    deserializeResponse(t, o, e) { return _(this, null, function* () { let s = this.deserializer, a = Et.of(t.output), c = {}; if (e.statusCode >= 300) {
        let h = yield vo(e.body, o);
        throw h.byteLength > 0 && Object.assign(c, yield s.read(15, h)), yield this.handleError(t, o, e, c, this.deserializeMetadata(e)), new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
    } for (let h in e.headers) {
        let k = e.headers[h];
        delete e.headers[h], e.headers[h.toLowerCase()] = k;
    } let x = yield this.deserializeHttpMessage(a, o, e, c); if (x.length) {
        let h = yield vo(e.body, o);
        if (h.byteLength > 0) {
            let k = yield s.read(a, h);
            for (let A of x)
                c[A] = k[A];
        }
    }
    else
        x.discardResponseBody && (yield vo(e.body, o)); return c.$metadata = this.deserializeMetadata(e), c; }); }
    deserializeHttpMessage(t, o, e, s, a) { return _(this, null, function* () { let c; s instanceof Set ? c = a : c = s; let x = !0, h = this.deserializer, k = Et.of(t), A = []; for (let [v, I] of k.structIterator()) {
        let T = I.getMemberTraits();
        if (T.httpPayload) {
            if (x = !1, I.isStreaming())
                I.isStructSchema() ? c[v] = yield this.deserializeEventStream({ response: e, responseSchema: k }) : c[v] = Dn(e.body);
            else if (e.body) {
                let G = yield vo(e.body, o);
                G.byteLength > 0 && (c[v] = yield h.read(I, G));
            }
        }
        else if (T.httpHeader) {
            let $ = String(T.httpHeader).toLowerCase(), G = e.headers[$];
            if (G != null)
                if (I.isListSchema()) {
                    let q = I.getValueSchema();
                    q.getMergedTraits().httpHeader = $;
                    let et;
                    q.isTimestampSchema() && q.getSchema() === 4 ? et = zp(G, ",", 2) : et = In(G);
                    let it = [];
                    for (let vt of et)
                        it.push(yield h.read(q, vt.trim()));
                    c[v] = it;
                }
                else
                    c[v] = yield h.read(I, G);
        }
        else if (T.httpPrefixHeaders !== void 0) {
            c[v] = {};
            for (let [$, G] of Object.entries(e.headers))
                if ($.startsWith(T.httpPrefixHeaders)) {
                    let q = I.getValueSchema();
                    q.getMergedTraits().httpHeader = $, c[v][$.slice(T.httpPrefixHeaders.length)] = yield h.read(q, G);
                }
        }
        else
            T.httpResponseCode ? c[v] = e.statusCode : A.push(v);
    } return A.discardResponseBody = x, A; }); }
};
var Tr = class extends vr {
    settings;
    constructor(t) { super(), this.settings = t; }
    read(t, o) { let e = Et.of(t); if (e.isListSchema())
        return In(o).map(s => this.read(e.getValueSchema(), s)); if (e.isBlobSchema())
        return (this.serdeContext?.base64Decoder ?? dr)(o); if (e.isTimestampSchema())
        switch (wr(e, this.settings)) {
            case 5: return Gp(o);
            case 6: return jp(o);
            case 7: return Np(o);
            default: return console.warn("Missing timestamp format, parsing value with Date constructor:", o), new Date(o);
        } if (e.isStringSchema()) {
        let s = e.getMergedTraits().mediaType, a = o;
        if (s)
            return e.getMergedTraits().httpHeader && (a = this.base64ToUtf8(a)), (s === "application/json" || s.endsWith("+json")) && (a = An.from(a)), a;
    } return e.isNumericSchema() ? Number(o) : e.isBigIntegerSchema() ? BigInt(o) : e.isBigDecimalSchema() ? new Rn(o, "bigDecimal") : e.isBooleanSchema() ? String(o).toLowerCase() === "true" : o; }
    base64ToUtf8(t) { return (this.serdeContext?.utf8Encoder ?? $e)((this.serdeContext?.base64Decoder ?? dr)(t)); }
};
var Mn = class extends vr {
    codecDeserializer;
    stringDeserializer;
    constructor(t, o) { super(), this.codecDeserializer = t, this.stringDeserializer = new Tr(o); }
    setSerdeContext(t) { this.stringDeserializer.setSerdeContext(t), this.codecDeserializer.setSerdeContext(t), this.serdeContext = t; }
    read(t, o) { let e = Et.of(t), s = e.getMergedTraits(), a = this.serdeContext?.utf8Encoder ?? $e; if (s.httpHeader || s.httpResponseCode)
        return this.stringDeserializer.read(e, a(o)); if (s.httpPayload) {
        if (e.isBlobSchema()) {
            let c = this.serdeContext?.utf8Decoder ?? Rr;
            return typeof o == "string" ? c(o) : o;
        }
        else if (e.isStringSchema())
            return "byteLength" in o ? a(o) : o;
    } return this.codecDeserializer.read(e, o); }
};
var $n = class extends vr {
    settings;
    stringBuffer = "";
    constructor(t) { super(), this.settings = t; }
    write(t, o) { let e = Et.of(t); switch (typeof o) {
        case "object":
            if (o === null) {
                this.stringBuffer = "null";
                return;
            }
            if (e.isTimestampSchema()) {
                if (!(o instanceof Date))
                    throw new Error(`@smithy/core/protocols - received non-Date value ${o} when schema expected Date in ${e.getName(!0)}`);
                switch (wr(e, this.settings)) {
                    case 5:
                        this.stringBuffer = o.toISOString().replace(".000Z", "Z");
                        break;
                    case 6:
                        this.stringBuffer = wo(o);
                        break;
                    case 7:
                        this.stringBuffer = String(o.getTime() / 1e3);
                        break;
                    default: console.warn("Missing timestamp format, using epoch seconds", o), this.stringBuffer = String(o.getTime() / 1e3);
                }
                return;
            }
            if (e.isBlobSchema() && "byteLength" in o) {
                this.stringBuffer = (this.serdeContext?.base64Encoder ?? Oe)(o);
                return;
            }
            if (e.isListSchema() && Array.isArray(o)) {
                let c = "";
                for (let x of o) {
                    this.write([e.getValueSchema(), e.getMergedTraits()], x);
                    let h = this.flush(), k = e.getValueSchema().isTimestampSchema() ? h : Mp(h);
                    c !== "" && (c += ", "), c += k;
                }
                this.stringBuffer = c;
                return;
            }
            this.stringBuffer = JSON.stringify(o, null, 2);
            break;
        case "string":
            let s = e.getMergedTraits().mediaType, a = o;
            if (s && ((s === "application/json" || s.endsWith("+json")) && (a = An.from(a)), e.getMergedTraits().httpHeader)) {
                this.stringBuffer = (this.serdeContext?.base64Encoder ?? Oe)(a.toString());
                return;
            }
            this.stringBuffer = o;
            break;
        default: e.isIdempotencyToken() ? this.stringBuffer = _n() : this.stringBuffer = String(o);
    } }
    flush() { let t = this.stringBuffer; return this.stringBuffer = "", t; }
};
var Un = class {
    codecSerializer;
    stringSerializer;
    buffer;
    constructor(t, o, e = new $n(o)) { this.codecSerializer = t, this.stringSerializer = e; }
    setSerdeContext(t) { this.codecSerializer.setSerdeContext(t), this.stringSerializer.setSerdeContext(t); }
    write(t, o) { let e = Et.of(t), s = e.getMergedTraits(); if (s.httpHeader || s.httpLabel || s.httpQuery) {
        this.stringSerializer.write(e, o), this.buffer = this.stringSerializer.flush();
        return;
    } return this.codecSerializer.write(e, o); }
    flush() { if (this.buffer !== void 0) {
        let t = this.buffer;
        return this.buffer = void 0, t;
    } return this.codecSerializer.flush(); }
};
var lc = { SignatureV4a: null };
var dc = r => { let t = "#text"; for (let o in r)
    r.hasOwnProperty(o) && r[o][t] !== void 0 ? r[o] = r[o][t] : typeof r[o] == "object" && r[o] !== null && (r[o] = dc(r[o])); return r; };
function qp(r) { return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function Hp(r) { return r.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#x0D;").replace(/\n/g, "&#x0A;").replace(/\u0085/g, "&#x85;").replace(/\u2028/, "&#x2028;"); }
var Dr = class {
    value;
    constructor(t) { this.value = t; }
    toString() { return Hp("" + this.value); }
};
var ke = class r {
    name;
    children;
    attributes = {};
    static of(t, o, e) { let s = new r(t); return o !== void 0 && s.addChildNode(new Dr(o)), e !== void 0 && s.withName(e), s; }
    constructor(t, o = []) { this.name = t, this.children = o; }
    withName(t) { return this.name = t, this; }
    addAttribute(t, o) { return this.attributes[t] = o, this; }
    addChildNode(t) { return this.children.push(t), this; }
    removeAttribute(t) { return delete this.attributes[t], this; }
    n(t) { return this.name = t, this; }
    c(t) { return this.children.push(t), this; }
    a(t, o) { return o != null && (this.attributes[t] = o), this; }
    cc(t, o, e = o) { if (t[o] != null) {
        let s = r.of(o, t[o]).withName(e);
        this.c(s);
    } }
    l(t, o, e, s) { t[o] != null && s().map(c => { c.withName(e), this.c(c); }); }
    lc(t, o, e, s) { if (t[o] != null) {
        let a = s(), c = new r(e);
        a.map(x => { c.c(x); }), this.c(c);
    } }
    toString() { let t = !!this.children.length, o = `<${this.name}`, e = this.attributes; for (let s of Object.keys(e)) {
        let a = e[s];
        a != null && (o += ` ${s}="${qp("" + a)}"`);
    } return o += t ? `>${this.children.map(s => s.toString()).join("")}</${this.name}>` : "/>"; }
};
var fc;
function gc(r) { fc || (fc = new DOMParser); let t = fc.parseFromString(r, "application/xml"); if (t.getElementsByTagName("parsererror").length > 0)
    throw new Error("DOMParser XML parsing error."); let o = e => { if (e.nodeType === Node.TEXT_NODE && e.textContent?.trim())
    return e.textContent; if (e.nodeType === Node.ELEMENT_NODE) {
    let s = e;
    if (s.attributes.length === 0 && s.childNodes.length === 0)
        return "";
    let a = {}, c = Array.from(s.attributes);
    for (let h of c)
        a[`${h.name}`] = h.value;
    let x = Array.from(s.childNodes);
    for (let h of x) {
        let k = o(h);
        if (k != null) {
            let A = h.nodeName;
            if (x.length === 1 && c.length === 0 && A === "#text")
                return k;
            a[A] ? Array.isArray(a[A]) ? a[A].push(k) : a[A] = [a[A], k] : a[A] = k;
        }
        else if (x.length === 1 && c.length === 0)
            return s.textContent;
    }
    return a;
} return null; }; return { [t.documentElement.nodeName]: o(t.documentElement) }; }
var Nn = class extends Or {
    settings;
    stringDeserializer;
    constructor(t) { super(), this.settings = t, this.stringDeserializer = new Tr(t); }
    setSerdeContext(t) { this.serdeContext = t, this.stringDeserializer.setSerdeContext(t); }
    read(t, o, e) { let s = Et.of(t), a = s.getMemberSchemas(); if (s.isStructSchema() && s.isMemberSchema() && !!Object.values(a).find(k => !!k.getMemberTraits().eventPayload)) {
        let k = {}, A = Object.keys(a)[0];
        return a[A].isBlobSchema() ? k[A] = o : k[A] = this.read(a[A], o), k;
    } let x = (this.serdeContext?.utf8Encoder ?? $e)(o), h = this.parseXml(x); return this.readSchema(t, e ? h[e] : h); }
    readSchema(t, o) { let e = Et.of(t); if (e.isUnitSchema())
        return; let s = e.getMergedTraits(); if (e.isListSchema() && !Array.isArray(o))
        return this.readSchema(e, [o]); if (o == null)
        return o; if (typeof o == "object") {
        let a = !!s.sparse, c = !!s.xmlFlattened;
        if (e.isListSchema()) {
            let h = e.getValueSchema(), k = [], A = h.getMergedTraits().xmlName ?? "member", v = c ? o : (o[0] ?? o)[A], I = Array.isArray(v) ? v : [v];
            for (let T of I)
                (T != null || a) && k.push(this.readSchema(h, T));
            return k;
        }
        let x = {};
        if (e.isMapSchema()) {
            let h = e.getKeySchema(), k = e.getValueSchema(), A;
            c ? A = Array.isArray(o) ? o : [o] : A = Array.isArray(o.entry) ? o.entry : [o.entry];
            let v = h.getMergedTraits().xmlName ?? "key", I = k.getMergedTraits().xmlName ?? "value";
            for (let T of A) {
                let $ = T[v], G = T[I];
                (G != null || a) && (x[$] = this.readSchema(k, G));
            }
            return x;
        }
        if (e.isStructSchema()) {
            for (let [h, k] of e.structIterator()) {
                let A = k.getMergedTraits(), v = A.httpPayload ? A.xmlName ?? k.getName() : k.getMemberTraits().xmlName ?? h;
                o[v] != null && (x[h] = this.readSchema(k, o[v]));
            }
            return x;
        }
        if (e.isDocumentSchema())
            return o;
        throw new Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${e.getName(!0)}`);
    } return e.isListSchema() ? [] : e.isMapSchema() || e.isStructSchema() ? {} : this.stringDeserializer.read(e, o); }
    parseXml(t) { if (t.length) {
        let o;
        try {
            o = gc(t);
        }
        catch (c) {
            throw c && typeof c == "object" && Object.defineProperty(c, "$responseBodyText", { value: t }), c;
        }
        let e = "#text", s = Object.keys(o)[0], a = o[s];
        return a[e] && (a[s] = a[e], delete a[e]), dc(a);
    } return {}; }
};
var Fp = (r, t) => { if (t?.Error?.Code !== void 0)
    return t.Error.Code; if (t?.Code !== void 0)
    return t.Code; if (r.statusCode == 404)
    return "NotFound"; };
var Gn = class extends Or {
    settings;
    stringBuffer;
    byteBuffer;
    buffer;
    constructor(t) { super(), this.settings = t; }
    write(t, o) { let e = Et.of(t); if (e.isStringSchema() && typeof o == "string")
        this.stringBuffer = o;
    else if (e.isBlobSchema())
        this.byteBuffer = "byteLength" in o ? o : (this.serdeContext?.base64Decoder ?? dr)(o);
    else {
        this.buffer = this.writeStruct(e, o, void 0);
        let s = e.getMergedTraits();
        s.httpPayload && !s.xmlName && this.buffer.withName(e.getName());
    } }
    flush() { if (this.byteBuffer !== void 0) {
        let o = this.byteBuffer;
        return delete this.byteBuffer, o;
    } if (this.stringBuffer !== void 0) {
        let o = this.stringBuffer;
        return delete this.stringBuffer, o;
    } let t = this.buffer; return this.settings.xmlNamespace && (t?.attributes?.xmlns || t.addAttribute("xmlns", this.settings.xmlNamespace)), delete this.buffer, t.toString(); }
    writeStruct(t, o, e) { let s = t.getMergedTraits(), a = t.isMemberSchema() && !s.httpPayload ? t.getMemberTraits().xmlName ?? t.getMemberName() : s.xmlName ?? t.getName(); if (!a || !t.isStructSchema())
        throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${t.getName(!0)}.`); let c = ke.of(a), [x, h] = this.getXmlnsAttribute(t, e); for (let [k, A] of up(t, o)) {
        let v = o[k];
        if (v != null || A.isIdempotencyToken()) {
            if (A.getMergedTraits().xmlAttribute) {
                c.addAttribute(A.getMergedTraits().xmlName ?? k, this.writeSimple(A, v));
                continue;
            }
            if (A.isListSchema())
                this.writeList(A, v, c, h);
            else if (A.isMapSchema())
                this.writeMap(A, v, c, h);
            else if (A.isStructSchema())
                c.addChildNode(this.writeStruct(A, v, h));
            else {
                let I = ke.of(A.getMergedTraits().xmlName ?? A.getMemberName());
                this.writeSimpleInto(A, v, I, h), c.addChildNode(I);
            }
        }
    } return h && c.addAttribute(x, h), c; }
    writeList(t, o, e, s) { if (!t.isMemberSchema())
        throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${t.getName(!0)}`); let a = t.getMergedTraits(), c = t.getValueSchema(), x = c.getMergedTraits(), h = !!x.sparse, k = !!a.xmlFlattened, [A, v] = this.getXmlnsAttribute(t, s), I = (T, $) => { if (c.isListSchema())
        this.writeList(c, Array.isArray($) ? $ : [$], T, v);
    else if (c.isMapSchema())
        this.writeMap(c, $, T, v);
    else if (c.isStructSchema()) {
        let G = this.writeStruct(c, $, v);
        T.addChildNode(G.withName(k ? a.xmlName ?? t.getMemberName() : x.xmlName ?? "member"));
    }
    else {
        let G = ke.of(k ? a.xmlName ?? t.getMemberName() : x.xmlName ?? "member");
        this.writeSimpleInto(c, $, G, v), T.addChildNode(G);
    } }; if (k)
        for (let T of o)
            (h || T != null) && I(e, T);
    else {
        let T = ke.of(a.xmlName ?? t.getMemberName());
        v && T.addAttribute(A, v);
        for (let $ of o)
            (h || $ != null) && I(T, $);
        e.addChildNode(T);
    } }
    writeMap(t, o, e, s, a = !1) { if (!t.isMemberSchema())
        throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${t.getName(!0)}`); let c = t.getMergedTraits(), x = t.getKeySchema(), k = x.getMergedTraits().xmlName ?? "key", A = t.getValueSchema(), v = A.getMergedTraits(), I = v.xmlName ?? "value", T = !!v.sparse, $ = !!c.xmlFlattened, [G, q] = this.getXmlnsAttribute(t, s), et = (it, vt, gt) => { let tr = ke.of(k, vt), [_o, kn] = this.getXmlnsAttribute(x, q); kn && tr.addAttribute(_o, kn), it.addChildNode(tr); let Ao = ke.of(I); A.isListSchema() ? this.writeList(A, gt, Ao, q) : A.isMapSchema() ? this.writeMap(A, gt, Ao, q, !0) : A.isStructSchema() ? Ao = this.writeStruct(A, gt, q) : this.writeSimpleInto(A, gt, Ao, q), it.addChildNode(Ao); }; if ($) {
        for (let [it, vt] of Object.entries(o))
            if (T || vt != null) {
                let gt = ke.of(c.xmlName ?? t.getMemberName());
                et(gt, it, vt), e.addChildNode(gt);
            }
    }
    else {
        let it;
        a || (it = ke.of(c.xmlName ?? t.getMemberName()), q && it.addAttribute(G, q), e.addChildNode(it));
        for (let [vt, gt] of Object.entries(o))
            if (T || gt != null) {
                let tr = ke.of("entry");
                et(tr, vt, gt), (a ? e : it).addChildNode(tr);
            }
    } }
    writeSimple(t, o) { if (o === null)
        throw new Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value."); let e = Et.of(t), s = null; if (o && typeof o == "object")
        if (e.isBlobSchema())
            s = (this.serdeContext?.base64Encoder ?? Oe)(o);
        else if (e.isTimestampSchema() && o instanceof Date)
            switch (wr(e, this.settings)) {
                case 5:
                    s = o.toISOString().replace(".000Z", "Z");
                    break;
                case 6:
                    s = wo(o);
                    break;
                case 7:
                    s = String(o.getTime() / 1e3);
                    break;
                default:
                    console.warn("Missing timestamp format, using http date", o), s = wo(o);
                    break;
            }
        else {
            if (e.isBigDecimalSchema() && o)
                return o instanceof Rn ? o.string : String(o);
            throw e.isMapSchema() || e.isListSchema() ? new Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.") : new Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${e.getName(!0)}`);
        } if ((e.isBooleanSchema() || e.isNumericSchema() || e.isBigIntegerSchema() || e.isBigDecimalSchema()) && (s = String(o)), e.isStringSchema() && (o === void 0 && e.isIdempotencyToken() ? s = _n() : s = String(o)), s === null)
        throw new Error(`Unhandled schema-value pair ${e.getName(!0)}=${o}`); return s; }
    writeSimpleInto(t, o, e, s) { let a = this.writeSimple(t, o), c = Et.of(t), x = new Dr(a), [h, k] = this.getXmlnsAttribute(c, s); k && e.addAttribute(h, k), e.addChildNode(x); }
    getXmlnsAttribute(t, o) { let e = t.getMergedTraits(), [s, a] = e.xmlNamespace ?? []; return a && a !== o ? [s ? `xmlns:${s}` : "xmlns", a] : [void 0, void 0]; }
};
var jn = class extends Or {
    settings;
    constructor(t) { super(), this.settings = t; }
    createSerializer() { let t = new Gn(this.settings); return t.setSerdeContext(this.serdeContext), t; }
    createDeserializer() { let t = new Nn(this.settings); return t.setSerdeContext(this.serdeContext), t; }
};
var zn = class r extends Ln {
    codec;
    serializer;
    deserializer;
    mixin = new cp;
    constructor(t) { super(t); let o = { timestampFormat: { useTrait: !0, default: 5 }, httpBindings: !0, xmlNamespace: t.xmlNamespace, serviceNamespace: t.defaultNamespace }; this.codec = new jn(o), this.serializer = new Un(this.codec.createSerializer(), o), this.deserializer = new Mn(this.codec.createDeserializer(), o); }
    getPayloadCodec() { return this.codec; }
    getShapeId() { return "aws.protocols#restXml"; }
    serializeRequest(t, o, e) { return _(this, null, function* () { let s = yield sc(r.prototype, this, "serializeRequest").call(this, t, o, e), a = Et.of(t.input); if (!s.headers["content-type"]) {
        let c = this.mixin.resolveRestContentType(this.getDefaultContentType(), a);
        c && (s.headers["content-type"] = c);
    } return typeof s.body == "string" && s.headers["content-type"] === this.getDefaultContentType() && !s.body.startsWith("<?xml ") && !this.hasUnstructuredPayloadBinding(a) && (s.body = '<?xml version="1.0" encoding="UTF-8"?>' + s.body), s; }); }
    deserializeResponse(t, o, e) { return _(this, null, function* () { return sc(r.prototype, this, "deserializeResponse").call(this, t, o, e); }); }
    handleError(t, o, e, s, a) { return _(this, null, function* () { let c = Fp(e, s) ?? "Unknown", { errorSchema: x, errorMetadata: h } = yield this.mixin.getErrorSchemaOrThrowBaseException(c, this.options.defaultNamespace, e, s, a), k = Et.of(x), A = s.Error?.message ?? s.Error?.Message ?? s.message ?? s.Message ?? "Unknown", v = Lt.for(x[1]).getErrorCtor(x) ?? Error, I = new v(A); yield this.deserializeHttpMessage(x, o, e, s); let T = {}; for (let [$, G] of k.structIterator()) {
        let q = G.getMergedTraits().xmlName ?? $, et = s.Error?.[q] ?? s[q];
        T[$] = this.codec.createDeserializer().readSchema(G, et);
    } throw this.mixin.decorateServiceException(Object.assign(I, h, { $fault: k.getMergedTraits().error, message: A }, T), s); }); }
    getDefaultContentType() { return "application/xml"; }
    hasUnstructuredPayloadBinding(t) { for (let [, o] of t.structIterator())
        if (o.getMergedTraits().httpPayload)
            return !(o.isStructSchema() || o.isMapSchema() || o.isListSchema()); return !1; }
};
var Io = [rt.CRC32, rt.CRC32C, rt.CRC64NVME, rt.SHA1, rt.SHA256], Vp = [rt.SHA256, rt.SHA1, rt.CRC32, rt.CRC32C, rt.CRC64NVME];
var Kp = (r, { requestChecksumRequired: t, requestAlgorithmMember: o, requestChecksumCalculation: e }) => { if (!o)
    return e === Ve.WHEN_SUPPORTED || t ? Oo : void 0; if (!r[o])
    return; let s = r[o]; if (!Io.includes(s))
    throw new Error(`The checksum algorithm "${s}" is not supported by the client. Select one of ${Io}.`); return s; };
var Ir = r => r === rt.MD5 ? "content-md5" : `x-amz-checksum-${r.toLowerCase()}`;
var Wp = (r, t) => { let o = r.toLowerCase(); for (let e of Object.keys(t))
    if (o === e.toLowerCase())
        return !0; return !1; };
var Zp = (r, t) => { let o = r.toLowerCase(); for (let e of Object.keys(t))
    if (e.toLowerCase().startsWith(o))
        return !0; return !1; };
var qn = r => r !== void 0 && typeof r != "string" && !ArrayBuffer.isView(r) && !Qm(r);
import { __values as jy } from "tslib";
var xc = r => new TextEncoder().encode(r);
var Uy = typeof Buffer < "u" && Buffer.from ? function (r) { return Buffer.from(r, "utf8"); } : xc;
function hc(r) { return r instanceof Uint8Array ? r : typeof r == "string" ? Uy(r) : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(r); }
function Cc(r) { return typeof r == "string" ? r.length === 0 : r.byteLength === 0; }
function yc(r) { return new Uint8Array([(r & 4278190080) >> 24, (r & 16711680) >> 16, (r & 65280) >> 8, r & 255]); }
function Ec(r) { if (!Uint32Array.from) {
    for (var t = new Uint32Array(r.length), o = 0; o < r.length;)
        t[o] = r[o], o += 1;
    return t;
} return Uint32Array.from(r); }
import { __awaiter as Ny, __generator as Gy } from "tslib";
var bc = (function () { function r() { this.crc32c = new Sc; } return r.prototype.update = function (t) { Cc(t) || this.crc32c.update(hc(t)); }, r.prototype.digest = function () { return Ny(this, void 0, void 0, function () { return Gy(this, function (t) { return [2, yc(this.crc32c.digest())]; }); }); }, r.prototype.reset = function () { this.crc32c = new Sc; }, r; })();
var Sc = (function () { function r() { this.checksum = 4294967295; } return r.prototype.update = function (t) { var o, e; try {
    for (var s = jy(t), a = s.next(); !a.done; a = s.next()) {
        var c = a.value;
        this.checksum = this.checksum >>> 8 ^ qy[(this.checksum ^ c) & 255];
    }
}
catch (x) {
    o = { error: x };
}
finally {
    try {
        a && !a.done && (e = s.return) && e.call(s);
    }
    finally {
        if (o)
            throw o.error;
    }
} return this; }, r.prototype.digest = function () { return (this.checksum ^ 4294967295) >>> 0; }, r; })();
var zy = [0, 4067132163, 3778769143, 324072436, 3348797215, 904991772, 648144872, 3570033899, 2329499855, 2024987596, 1809983544, 2575936315, 1296289744, 3207089363, 2893594407, 1578318884, 274646895, 3795141740, 4049975192, 51262619, 3619967088, 632279923, 922689671, 3298075524, 2592579488, 1760304291, 2075979607, 2312596564, 1562183871, 2943781820, 3156637768, 1313733451, 549293790, 3537243613, 3246849577, 871202090, 3878099393, 357341890, 102525238, 4101499445, 2858735121, 1477399826, 1264559846, 3107202533, 1845379342, 2677391885, 2361733625, 2125378298, 820201905, 3263744690, 3520608582, 598981189, 4151959214, 85089709, 373468761, 3827903834, 3124367742, 1213305469, 1526817161, 2842354314, 2107672161, 2412447074, 2627466902, 1861252501, 1098587580, 3004210879, 2688576843, 1378610760, 2262928035, 1955203488, 1742404180, 2511436119, 3416409459, 969524848, 714683780, 3639785095, 205050476, 4266873199, 3976438427, 526918040, 1361435347, 2739821008, 2954799652, 1114974503, 2529119692, 1691668175, 2005155131, 2247081528, 3690758684, 697762079, 986182379, 3366744552, 476452099, 3993867776, 4250756596, 255256311, 1640403810, 2477592673, 2164122517, 1922457750, 2791048317, 1412925310, 1197962378, 3037525897, 3944729517, 427051182, 170179418, 4165941337, 746937522, 3740196785, 3451792453, 1070968646, 1905808397, 2213795598, 2426610938, 1657317369, 3053634322, 1147748369, 1463399397, 2773627110, 4215344322, 153784257, 444234805, 3893493558, 1021025245, 3467647198, 3722505002, 797665321, 2197175160, 1889384571, 1674398607, 2443626636, 1164749927, 3070701412, 2757221520, 1446797203, 137323447, 4198817972, 3910406976, 461344835, 3484808360, 1037989803, 781091935, 3705997148, 2460548119, 1623424788, 1939049696, 2180517859, 1429367560, 2807687179, 3020495871, 1180866812, 410100952, 3927582683, 4182430767, 186734380, 3756733383, 763408580, 1053836080, 3434856499, 2722870694, 1344288421, 1131464017, 2971354706, 1708204729, 2545590714, 2229949006, 1988219213, 680717673, 3673779818, 3383336350, 1002577565, 4010310262, 493091189, 238226049, 4233660802, 2987750089, 1082061258, 1395524158, 2705686845, 1972364758, 2279892693, 2494862625, 1725896226, 952904198, 3399985413, 3656866545, 731699698, 4283874585, 222117402, 510512622, 3959836397, 3280807620, 837199303, 582374963, 3504198960, 68661723, 4135334616, 3844915500, 390545967, 1230274059, 3141532936, 2825850620, 1510247935, 2395924756, 2091215383, 1878366691, 2644384480, 3553878443, 565732008, 854102364, 3229815391, 340358836, 3861050807, 4117890627, 119113024, 1493875044, 2875275879, 3090270611, 1247431312, 2660249211, 1828433272, 2141937292, 2378227087, 3811616794, 291187481, 34330861, 4032846830, 615137029, 3603020806, 3314634738, 939183345, 1776939221, 2609017814, 2295496738, 2058945313, 2926798794, 1545135305, 1330124605, 3173225534, 4084100981, 17165430, 307568514, 3762199681, 888469610, 3332340585, 3587147933, 665062302, 2042050490, 2346497209, 2559330125, 1793573966, 3190661285, 1279665062, 1595330642, 2910671697], qy = Ec(zy);
import { AwsCrc32 as Hy } from "@aws-crypto/crc32";
var Xp = () => Hy;
var Hn = (r, t) => {
    switch (r) {
        case rt.MD5: return t.md5;
        case rt.CRC32: return Xp();
        case rt.CRC32C: return bc;
        case rt.CRC64NVME:
            if (typeof ic.CrtCrc64Nvme != "function")
                throw new Error(`Please check whether you have installed the "@aws-sdk/crc64-nvme-crt" package explicitly. 
You must also register the package by calling [require("@aws-sdk/crc64-nvme-crt");] or an ESM equivalent such as [import "@aws-sdk/crc64-nvme-crt";]. 
For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
            return ic.CrtCrc64Nvme;
        case rt.SHA1: return t.sha1;
        case rt.SHA256: return t.sha256;
        default: throw new Error(`Unsupported checksum algorithm: ${r}`);
    }
};
var Fn = (r, t) => { let o = new r; return o.update(Lm(t || "")), o.digest(); };
var Jp = { name: "flexibleChecksumsMiddleware", step: "build", tags: ["BODY_CHECKSUM"], override: !0 }, Qp = (r, t) => (o, e) => s => _(null, null, function* () { if (!se.isInstance(s.request) || Zp("x-amz-checksum-", s.request.headers))
    return o(s); let { request: a, input: c } = s, { body: x, headers: h } = a, { base64Encoder: k, streamHasher: A } = r, { requestChecksumRequired: v, requestAlgorithmMember: I } = t, T = yield r.requestChecksumCalculation(), $ = I?.name, G = I?.httpHeader; $ && !c[$] && (T === Ve.WHEN_SUPPORTED || v) && (c[$] = Oo, G && (h[G] = Oo)); let q = Kp(c, { requestChecksumRequired: v, requestAlgorithmMember: I?.name, requestChecksumCalculation: T }), et = x, it = h; if (q) {
    switch (q) {
        case rt.CRC32:
            fe(e, "FLEXIBLE_CHECKSUMS_REQ_CRC32", "U");
            break;
        case rt.CRC32C:
            fe(e, "FLEXIBLE_CHECKSUMS_REQ_CRC32C", "V");
            break;
        case rt.CRC64NVME:
            fe(e, "FLEXIBLE_CHECKSUMS_REQ_CRC64", "W");
            break;
        case rt.SHA1:
            fe(e, "FLEXIBLE_CHECKSUMS_REQ_SHA1", "X");
            break;
        case rt.SHA256:
            fe(e, "FLEXIBLE_CHECKSUMS_REQ_SHA256", "Y");
            break;
    }
    let gt = Ir(q), tr = Hn(q, r);
    if (qn(x)) {
        let { getAwsChunkedEncodingStream: _o, bodyLengthChecker: kn } = r;
        et = _o(typeof r.requestStreamBufferSize == "number" && r.requestStreamBufferSize >= 8 * 1024 ? wp(x, r.requestStreamBufferSize, e.logger) : x, { base64Encoder: k, bodyLengthChecker: kn, checksumLocationName: gt, checksumAlgorithmFn: tr, streamHasher: A }), it = p(u({}, h), { "content-encoding": h["content-encoding"] ? `${h["content-encoding"]},aws-chunked` : "aws-chunked", "transfer-encoding": "chunked", "x-amz-decoded-content-length": h["content-length"], "x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER", "x-amz-trailer": gt }), delete it["content-length"];
    }
    else if (!Wp(gt, h)) {
        let _o = yield Fn(tr, x);
        it = p(u({}, h), { [gt]: k(_o) });
    }
} return yield o(p(u({}, s), { request: p(u({}, a), { headers: it, body: et }) })); });
var Yp = { name: "flexibleChecksumsInputMiddleware", toMiddleware: "serializerMiddleware", relation: "before", tags: ["BODY_CHECKSUM"], override: !0 }, tl = (r, t) => (o, e) => s => _(null, null, function* () { let a = s.input, { requestValidationModeMember: c } = t, x = yield r.requestChecksumCalculation(), h = yield r.responseChecksumValidation(); switch (x) {
    case Ve.WHEN_REQUIRED:
        fe(e, "FLEXIBLE_CHECKSUMS_REQ_WHEN_REQUIRED", "a");
        break;
    case Ve.WHEN_SUPPORTED:
        fe(e, "FLEXIBLE_CHECKSUMS_REQ_WHEN_SUPPORTED", "Z");
        break;
} switch (h) {
    case wn.WHEN_REQUIRED:
        fe(e, "FLEXIBLE_CHECKSUMS_RES_WHEN_REQUIRED", "c");
        break;
    case wn.WHEN_SUPPORTED:
        fe(e, "FLEXIBLE_CHECKSUMS_RES_WHEN_SUPPORTED", "b");
        break;
} return c && !a[c] && h === wn.WHEN_SUPPORTED && (a[c] = "ENABLED"), o(s); });
var Vn = (r = []) => { let t = []; for (let o of Vp)
    !r.includes(o) || !Io.includes(o) || t.push(o); return t; };
var el = r => { let t = r.lastIndexOf("-"); if (t !== -1) {
    let o = r.slice(t + 1);
    if (!o.startsWith("0")) {
        let e = parseInt(o, 10);
        if (!isNaN(e) && e >= 1 && e <= 1e4)
            return !0;
    }
} return !1; };
var rl = (e, s) => _(null, [e, s], function* (r, { checksumAlgorithmFn: t, base64Encoder: o }) { return o(yield Fn(t, r)); });
var ol = (s, a) => _(null, [s, a], function* (r, { config: t, responseAlgorithms: o, logger: e }) { let c = Vn(o), { body: x, headers: h } = r; for (let k of c) {
    let A = Ir(k), v = h[A];
    if (v) {
        let I;
        try {
            I = Hn(k, t);
        }
        catch (G) {
            if (k === rt.CRC64NVME) {
                e?.warn(`Skipping ${rt.CRC64NVME} checksum validation: ${G.message}`);
                continue;
            }
            throw G;
        }
        let { base64Encoder: T } = t;
        if (qn(x)) {
            r.body = vp({ expectedChecksum: v, checksumSourceLocation: A, checksum: new I, source: x, base64Encoder: T });
            return;
        }
        let $ = yield rl(x, { checksumAlgorithmFn: I, base64Encoder: T });
        if ($ === v)
            break;
        throw new Error(`Checksum mismatch: expected "${$}" but received "${v}" in response header "${A}".`);
    }
} });
var nl = { name: "flexibleChecksumsResponseMiddleware", toMiddleware: "deserializerMiddleware", relation: "after", tags: ["BODY_CHECKSUM"], override: !0 }, sl = (r, t) => (o, e) => s => _(null, null, function* () { if (!se.isInstance(s.request))
    return o(s); let a = s.input, c = yield o(s), x = c.response, { requestValidationModeMember: h, responseAlgorithms: k } = t; if (h && a[h] === "ENABLED") {
    let { clientName: A, commandName: v } = e;
    if (A === "S3Client" && v === "GetObjectCommand" && Vn(k).every(T => { let $ = Ir(T), G = x.headers[$]; return !G || el(G); }))
        return c;
    yield ol(x, { config: r, responseAlgorithms: k, logger: e.logger });
} return c; });
var N = (r, t) => ({ applyToStack: o => { o.add(Qp(r, t), Jp), o.addRelativeTo(tl(r, t), Yp), o.addRelativeTo(sl(r, t), nl); } });
var il = r => { let { requestChecksumCalculation: t, responseChecksumValidation: o, requestStreamBufferSize: e } = r; return Object.assign(r, { requestChecksumCalculation: Ar(t ?? Ap), responseChecksumValidation: Ar(o ?? Rp), requestStreamBufferSize: Number(e ?? 0) }); };
var Fy = "content-length", Vy = "x-amz-decoded-content-length";
function Ky() { return (r, t) => o => _(null, null, function* () { let { request: e } = o; if (se.isInstance(e) && !(Fy in e.headers) && !(Vy in e.headers)) {
    let s = "Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage.";
    typeof t?.logger?.warn == "function" && !(t.logger instanceof vn) ? t.logger.warn(s) : console.warn(s);
} return r(u({}, o)); }); }
var Wy = { step: "finalizeRequest", tags: ["CHECK_CONTENT_LENGTH_HEADER"], name: "getCheckContentLengthHeaderPlugin", override: !0 }, al = r => ({ applyToStack: t => { t.add(Ky(), Wy); } });
var cl = r => (t, o) => e => _(null, null, function* () { let s = yield r.region(), a = r.region, c = () => { }; o.__s3RegionRedirect && (Object.defineProperty(r, "region", { writable: !1, value: () => _(null, null, function* () { return o.__s3RegionRedirect; }) }), c = () => Object.defineProperty(r, "region", { writable: !0, value: a })); try {
    let x = yield t(e);
    if (o.__s3RegionRedirect) {
        c();
        let h = yield r.region();
        if (s !== h)
            throw new Error("Region was not restored following S3 region redirect.");
    }
    return x;
}
catch (x) {
    throw c(), x;
} }), ul = { tags: ["REGION_REDIRECT", "S3"], name: "regionRedirectEndpointMiddleware", override: !0, relation: "before", toMiddleware: "endpointV2Middleware" };
function Zy(r) { return (t, o) => e => _(null, null, function* () { try {
    return yield t(e);
}
catch (s) {
    if (r.followRegionRedirects) {
        let a = s?.$metadata?.httpStatusCode, c = o.commandName === "HeadBucketCommand", x = s?.$response?.headers?.["x-amz-bucket-region"];
        if (x && (a === 301 || a === 400 && (s?.name === "IllegalLocationConstraintException" || c))) {
            try {
                let h = x;
                o.logger?.debug(`Redirecting from ${yield r.region()} to ${h}`), o.__s3RegionRedirect = h;
            }
            catch (h) {
                throw new Error("Region redirect failed: " + h);
            }
            return t(e);
        }
    }
    throw s;
} }); }
var Xy = { step: "initialize", tags: ["REGION_REDIRECT", "S3"], name: "regionRedirectMiddleware", override: !0 }, ml = r => ({ applyToStack: t => { t.add(Zy(r), Xy), t.addRelativeTo(cl(r), ul); } });
var Jy = r => (t, o) => e => _(null, null, function* () { let s = yield t(e), { response: a } = s; if (Bn.isInstance(a) && a.headers.expires) {
    a.headers.expiresstring = a.headers.expires;
    try {
        Gm(a.headers.expires);
    }
    catch (c) {
        o.logger?.warn(`AWS SDK Warning for ${o.clientName}::${o.commandName} response parsing (${a.headers.expires}): ${c}`), delete a.headers.expires;
    }
} return s; }), Qy = { tags: ["S3"], name: "s3ExpiresMiddleware", override: !0, relation: "after", toMiddleware: "deserializerMiddleware" }, Kn = r => ({ applyToStack: t => { t.addRelativeTo(Jy(r), Qy); } });
var pl = (() => { class r {
    data;
    lastPurgeTime = Date.now();
    static EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 3e4;
    constructor(o = {}) { this.data = o; }
    get(o) { let e = this.data[o]; if (e)
        return e; }
    set(o, e) { return this.data[o] = e, e; }
    delete(o) { delete this.data[o]; }
    purgeExpired() { return _(this, null, function* () { let o = Date.now(); if (!(this.lastPurgeTime + r.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS > o))
        for (let e in this.data) {
            let s = this.data[e];
            if (!s.isRefreshing) {
                let a = yield s.identity;
                a.expiration && a.expiration.getTime() < o && delete this.data[e];
            }
        } }); }
} return r; })();
var Lr = class {
    _identity;
    isRefreshing;
    accessed;
    constructor(t, o = !1, e = Date.now()) { this._identity = t, this.isRefreshing = o, this.accessed = e; }
    get identity() { return this.accessed = Date.now(), this._identity; }
};
var kc = (() => {
    class r {
        createSessionFn;
        cache;
        static REFRESH_WINDOW_MS = 6e4;
        constructor(o, e = new pl) { this.createSessionFn = o, this.cache = e; }
        getS3ExpressIdentity(o, e) { return _(this, null, function* () { let s = e.Bucket, { cache: a } = this, c = a.get(s); return c ? c.identity.then(x => (x.expiration?.getTime() ?? 0) < Date.now() ? a.set(s, new Lr(this.getIdentity(s))).identity : ((x.expiration?.getTime() ?? 0) < Date.now() + r.REFRESH_WINDOW_MS && !c.isRefreshing && (c.isRefreshing = !0, this.getIdentity(s).then(A => { a.set(s, new Lr(Promise.resolve(A))); })), x)) : a.set(s, new Lr(this.getIdentity(s))).identity; }); }
        getIdentity(o) {
            return _(this, null, function* () {
                yield this.cache.purgeExpired().catch(a => {
                    console.warn(`Error while clearing expired entries in S3ExpressIdentityCache: 
` + a);
                });
                let e = yield this.createSessionFn(o);
                if (!e.Credentials?.AccessKeyId || !e.Credentials?.SecretAccessKey)
                    throw new Error("s3#createSession response credential missing AccessKeyId or SecretAccessKey.");
                return { accessKeyId: e.Credentials.AccessKeyId, secretAccessKey: e.Credentials.SecretAccessKey, sessionToken: e.Credentials.SessionToken, expiration: e.Credentials.Expiration ? new Date(e.Credentials.Expiration) : void 0 };
            });
        }
    }
    return r;
})();
var ll = "Directory", dl = "S3Express", fl = "sigv4-s3express", Wn = "X-Amz-S3session-Token", Lo = Wn.toLowerCase();
var Mo = class extends Ym {
    signWithCredentials(t, o, e) { return _(this, null, function* () { let s = gl(o); t.headers[Lo] = o.sessionToken; let a = this; return xl(a, s), a.signRequest(t, e ?? {}); }); }
    presignWithCredentials(t, o, e) { return _(this, null, function* () { let s = gl(o); return delete t.headers[Lo], t.headers[Wn] = o.sessionToken, t.query = t.query ?? {}, t.query[Wn] = o.sessionToken, xl(this, s), this.presign(t, e); }); }
};
function gl(r) { return { accessKeyId: r.accessKeyId, secretAccessKey: r.secretAccessKey, expiration: r.expiration }; }
function xl(r, t) { let o = setTimeout(() => { throw new Error("SignatureV4S3Express credential override was created but not called."); }, 10), e = r.credentialProvider, s = () => (clearTimeout(o), r.credentialProvider = e, Promise.resolve(t)); r.credentialProvider = s; }
var hl = r => (t, o) => e => _(null, null, function* () { if (o.endpointV2) {
    let s = o.endpointV2, a = s.properties?.authSchemes?.[0]?.name === fl;
    if ((s.properties?.backend === dl || s.properties?.bucketType === ll) && (fe(o, "S3_EXPRESS_BUCKET", "J"), o.isS3ExpressBucket = !0), a) {
        let x = e.input.Bucket;
        if (x) {
            let h = yield r.s3ExpressIdentityProvider.getS3ExpressIdentity(yield r.credentials(), { Bucket: x });
            o.s3ExpressIdentity = h, se.isInstance(e.request) && h.sessionToken && (e.request.headers[Lo] = h.sessionToken);
        }
    }
} return t(e); }), Cl = { name: "s3ExpressMiddleware", step: "build", tags: ["S3", "S3_EXPRESS"], override: !0 }, Bc = r => ({ applyToStack: t => { t.add(hl(r), Cl); } });
var yl = (r, t, o, e) => _(null, null, function* () { let s = yield e.signWithCredentials(o, r, {}); if (s.headers["X-Amz-Security-Token"] || s.headers["x-amz-security-token"])
    throw new Error("X-Amz-Security-Token must not be set for s3-express requests."); return s; });
var Yy = r => t => { throw t; }, tE = (r, t) => { };
var El = r => (t, o) => e => _(null, null, function* () { if (!se.isInstance(e.request))
    return t(e); let a = Ro(o).selectedHttpAuthScheme; if (!a)
    throw new Error("No HttpAuthScheme was selected: unable to sign request"); let { httpAuthOption: { signingProperties: c = {} }, identity: x, signer: h } = a, k; o.s3ExpressIdentity ? k = yield yl(o.s3ExpressIdentity, c, e.request, yield r.signer()) : k = yield h.sign(e.request, x, c); let A = yield t(p(u({}, e), { request: k })).catch((h.errorHandler || Yy)(c)); return (h.successHandler || tE)(A.response, c), A; }), Pc = r => ({ applyToStack: t => { t.addRelativeTo(El(r), Dm); } });
var Sl = (r, { session: t }) => { let [o, e] = t, { forcePathStyle: s, useAccelerateEndpoint: a, disableMultiregionAccessPoints: c, followRegionRedirects: x, s3ExpressIdentityProvider: h, bucketEndpoint: k, expectContinueHeader: A } = r; return Object.assign(r, { forcePathStyle: s ?? !1, useAccelerateEndpoint: a ?? !1, disableMultiregionAccessPoints: c ?? !1, followRegionRedirects: x ?? !1, s3ExpressIdentityProvider: h ?? new kc(v => _(null, null, function* () { return o().send(new e({ Bucket: v })); })), bucketEndpoint: k ?? !1, expectContinueHeader: A ?? 2097152 }); };
var eE = { CopyObjectCommand: !0, UploadPartCopyCommand: !0, CompleteMultipartUploadCommand: !0 }, rE = 3e3, oE = r => (t, o) => e => _(null, null, function* () { let s = yield t(e), { response: a } = s; if (!Bn.isInstance(a))
    return s; let { statusCode: c, body: x } = a; if (c < 200 || c >= 300 || !(typeof x?.stream == "function" || typeof x?.pipe == "function" || typeof x?.tee == "function"))
    return s; let k = x, A = x; x && typeof x == "object" && !(x instanceof Uint8Array) && ([k, A] = yield Lp(x)), a.body = A; let v = yield nE(k, { streamCollector: T => _(null, null, function* () { return Tp(T, rE); }) }); typeof k?.destroy == "function" && k.destroy(); let I = r.utf8Encoder(v.subarray(v.length - 16)); if (v.length === 0 && eE[o.commandName]) {
    let T = new Error("S3 aborted request");
    throw T.name = "InternalError", T;
} return I && I.endsWith("</Error>") && (a.statusCode = 400), s; }), nE = (r = new Uint8Array, t) => r instanceof Uint8Array ? Promise.resolve(r) : t.streamCollector(r) || Promise.resolve(new Uint8Array), sE = { relation: "after", toMiddleware: "deserializerMiddleware", tags: ["THROW_200_EXCEPTIONS", "S3"], name: "throw200ExceptionsMiddleware", override: !0 }, E = r => ({ applyToStack: t => { t.addRelativeTo(oE(r), sE); } });
var bl = r => typeof r == "string" && r.indexOf("arn:") === 0 && r.split(":").length >= 6;
function kl(r) { return (t, o) => e => _(null, null, function* () { if (r.bucketEndpoint) {
    let s = o.endpointV2;
    if (s) {
        let a = e.input.Bucket;
        if (typeof a == "string")
            try {
                let c = new URL(a);
                o.endpointV2 = p(u({}, s), { url: c });
            }
            catch (c) {
                let x = `@aws-sdk/middleware-sdk-s3: bucketEndpoint=true was set but Bucket=${a} could not be parsed as URL.`;
                throw o.logger?.constructor?.name === "NoOpLogger" ? console.warn(x) : o.logger?.warn?.(x), c;
            }
    }
} return t(e); }); }
var Bl = { name: "bucketEndpointMiddleware", override: !0, relation: "after", toMiddleware: "endpointV2Middleware" };
function iE({ bucketEndpoint: r }) { return t => o => _(null, null, function* () { let { input: { Bucket: e } } = o; if (!r && typeof e == "string" && !bl(e) && e.indexOf("/") >= 0) {
    let s = new Error(`Bucket name shouldn't contain '/', received '${e}'`);
    throw s.name = "InvalidBucketName", s;
} return t(u({}, o)); }); }
var aE = { step: "initialize", tags: ["VALIDATE_BUCKET_NAME"], name: "validateBucketNameMiddleware", override: !0 }, Pl = r => ({ applyToStack: t => { t.add(iE(r), aE), t.addRelativeTo(kl(r), Bl); } });
var _l = r => Object.assign(r, { eventStreamMarshaller: r.eventStreamSerdeProvider(r) });
var $o = { CrtSignerV4: null };
var Mr = class {
    sigv4aSigner;
    sigv4Signer;
    signerOptions;
    static sigv4aDependency() { return typeof $o.CrtSignerV4 == "function" ? "crt" : typeof lc.SignatureV4a == "function" ? "js" : "none"; }
    constructor(t) { this.sigv4Signer = new Mo(t), this.signerOptions = t; }
    sign(e) { return _(this, arguments, function* (t, o = {}) { return o.signingRegion === "*" ? this.getSigv4aSigner().sign(t, o) : this.sigv4Signer.sign(t, o); }); }
    signWithCredentials(s, a) { return _(this, arguments, function* (t, o, e = {}) { if (e.signingRegion === "*") {
        let c = this.getSigv4aSigner(), x = $o.CrtSignerV4;
        if (x && c instanceof x)
            return c.signWithCredentials(t, o, e);
        throw new Error(`signWithCredentials with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
    } return this.sigv4Signer.signWithCredentials(t, o, e); }); }
    presign(e) { return _(this, arguments, function* (t, o = {}) { if (o.signingRegion === "*") {
        let s = this.getSigv4aSigner(), a = $o.CrtSignerV4;
        if (a && s instanceof a)
            return s.presign(t, o);
        throw new Error(`presign with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
    } return this.sigv4Signer.presign(t, o); }); }
    presignWithCredentials(s, a) { return _(this, arguments, function* (t, o, e = {}) { if (e.signingRegion === "*")
        throw new Error("Method presignWithCredentials is not supported for [signingRegion=*]."); return this.sigv4Signer.presignWithCredentials(t, o, e); }); }
    getSigv4aSigner() { if (!this.sigv4aSigner) {
        let t = $o.CrtSignerV4, o = lc.SignatureV4a;
        if (this.signerOptions.runtime === "node") {
            if (!t && !o)
                throw new Error("Neither CRT nor JS SigV4a implementation is available. Please load either @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
            if (t && typeof t == "function")
                this.sigv4aSigner = new t(p(u({}, this.signerOptions), { signingAlgorithm: 1 }));
            else if (o && typeof o == "function")
                this.sigv4aSigner = new o(u({}, this.signerOptions));
            else
                throw new Error("Available SigV4a implementation is not a valid constructor. Please ensure you've properly imported @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a.For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
        }
        else {
            if (!o || typeof o != "function")
                throw new Error("JS SigV4a implementation is not available or not a valid constructor. Please check whether you have installed the @aws-sdk/signature-v4a package explicitly. The CRT implementation is not available for browsers. You must also register the package by calling [require('@aws-sdk/signature-v4a');] or an ESM equivalent such as [import '@aws-sdk/signature-v4a';]. For more information please go to https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a");
            this.sigv4aSigner = new o(u({}, this.signerOptions));
        }
    } return this.sigv4aSigner; }
};
var Xc = "required", m = "type", S = "rules", l = "conditions";
var C = "argv";
var F = "assign";
var L = "properties", We = "backend", Nt = "authSchemes", Pt = "disableDoubleEncoding", _t = "signingName", qt = "signingRegion", M = "headers", Jc = "signingRegionSet";
var xe = "isSet", kt = "booleanEquals", U = "error", ts = "aws.partition", Y = "stringEquals", Ct = "getAttr", yt = "name", ut = "substring", Al = "bucketSuffix", Qc = "parseURL", B = "endpoint", b = "tree", es = "aws.isVirtualHostableS3Bucket", rs = "{url#scheme}://{Bucket}.{url#authority}{url#path}";
var Rl = "accessPointSuffix", Yn = "{url#scheme}://{url#authority}{url#path}", $d = "hardwareType", Ud = "regionPrefix", vl = "bucketAliasSuffix", Wc = "outpostId", fr = "isValidHostLabel", Yc = "sigv4a", Ho = "s3-outposts";
var Nd = "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}", Gd = "https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}", wl = "https://{Bucket}.s3.{partitionResult#dnsSuffix}", jd = "aws.parseArn", zd = "bucketArn", qd = "arnType";
var tu = "s3-object-lambda", Hd = "accesspoint", eu = "accessPointName", Ol = "{url#scheme}://{accessPointName}-{bucketArn#accountId}.{url#authority}{url#path}", Tl = "mrapPartition", Dl = "outpostType", Il = "arnPrefix", Fd = "{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}", Ll = "https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", Ml = "https://s3.{partitionResult#dnsSuffix}", $r = { [Xc]: !1, [m]: "string" }, Ur = { [Xc]: !0, default: !1, [m]: "boolean" }, Uo = { [Xc]: !1, [m]: "boolean" }, Pe = { fn: kt, [C]: [{ ref: "Accelerate" }, !0] }, pt = { fn: kt, [C]: [{ ref: "UseFIPS" }, !0] }, at = { fn: kt, [C]: [{ ref: "UseDualStack" }, !0] }, bt = { fn: xe, [C]: [{ ref: "Endpoint" }] }, Vd = { fn: ts, [C]: [{ ref: "Region" }], [F]: "partitionResult" }, $l = { fn: Y, [C]: [{ fn: Ct, [C]: [{ ref: "partitionResult" }, yt] }, "aws-cn"] }, Go = { fn: xe, [C]: [{ ref: "Bucket" }] }, J = { ref: "Bucket" }, Ul = { [l]: [Pe], [U]: "S3Express does not support S3 Accelerate.", [m]: U }, Nl = { [l]: [bt, { fn: Qc, [C]: [{ ref: "Endpoint" }], [F]: "url" }], [S]: [{ [l]: [{ fn: xe, [C]: [{ ref: "DisableS3ExpressSessionAuth" }] }, { fn: kt, [C]: [{ ref: "DisableS3ExpressSessionAuth" }, !0] }], [S]: [{ [l]: [{ fn: kt, [C]: [{ fn: Ct, [C]: [{ ref: "url" }, "isIp"] }, !0] }], [S]: [{ [l]: [{ fn: "uriEncode", [C]: [J], [F]: "uri_encoded_bucket" }], [S]: [{ [B]: { url: "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}", [L]: { [We]: "S3Express", [Nt]: [{ [Pt]: !0, [yt]: "sigv4", [_t]: "s3express", [qt]: "{Region}" }] }, [M]: {} }, [m]: B }], [m]: b }], [m]: b }, { [l]: [{ fn: es, [C]: [J, !1] }], [S]: [{ [B]: { url: rs, [L]: { [We]: "S3Express", [Nt]: [{ [Pt]: !0, [yt]: "sigv4", [_t]: "s3express", [qt]: "{Region}" }] }, [M]: {} }, [m]: B }], [m]: b }, { [U]: "S3Express bucket name is not a valid virtual hostable name.", [m]: U }], [m]: b }, { [l]: [{ fn: kt, [C]: [{ fn: Ct, [C]: [{ ref: "url" }, "isIp"] }, !0] }], [S]: [{ [l]: [{ fn: "uriEncode", [C]: [J], [F]: "uri_encoded_bucket" }], [S]: [{ [B]: { url: "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}", [L]: { [We]: "S3Express", [Nt]: [{ [Pt]: !0, [yt]: "sigv4-s3express", [_t]: "s3express", [qt]: "{Region}" }] }, [M]: {} }, [m]: B }], [m]: b }], [m]: b }, { [l]: [{ fn: es, [C]: [J, !1] }], [S]: [{ [B]: { url: rs, [L]: { [We]: "S3Express", [Nt]: [{ [Pt]: !0, [yt]: "sigv4-s3express", [_t]: "s3express", [qt]: "{Region}" }] }, [M]: {} }, [m]: B }], [m]: b }, { [U]: "S3Express bucket name is not a valid virtual hostable name.", [m]: U }], [m]: b }, Jt = { fn: Qc, [C]: [{ ref: "Endpoint" }], [F]: "url" }, _c = { fn: kt, [C]: [{ fn: Ct, [C]: [{ ref: "url" }, "isIp"] }, !0] }, Kd = { ref: "url" }, Wd = { fn: "uriEncode", [C]: [J], [F]: "uri_encoded_bucket" }, ge = { [We]: "S3Express", [Nt]: [{ [Pt]: !0, [yt]: "sigv4", [_t]: "s3express", [qt]: "{Region}" }] }, j = {}, Zd = { fn: es, [C]: [J, !1] }, Gl = { [U]: "S3Express bucket name is not a valid virtual hostable name.", [m]: U }, jl = { fn: xe, [C]: [{ ref: "UseS3ExpressControlEndpoint" }] }, zl = { fn: kt, [C]: [{ ref: "UseS3ExpressControlEndpoint" }, !0] }, H = { fn: "not", [C]: [bt] }, Z = { fn: kt, [C]: [{ ref: "UseDualStack" }, !1] }, V = { fn: kt, [C]: [{ ref: "UseFIPS" }, !1] }, Zn = { [U]: "Unrecognized S3Express bucket name format.", [m]: U }, ql = { fn: "not", [C]: [Go] }, Hl = { ref: $d }, Fl = { [l]: [H], [U]: "Expected a endpoint to be specified but no endpoint was found", [m]: U }, Xn = { [Nt]: [{ [Pt]: !0, [yt]: Yc, [_t]: Ho, [Jc]: ["*"] }, { [Pt]: !0, [yt]: "sigv4", [_t]: Ho, [qt]: "{Region}" }] }, Ac = { fn: kt, [C]: [{ ref: "ForcePathStyle" }, !1] }, cE = { ref: "ForcePathStyle" }, Bt = { fn: kt, [C]: [{ ref: "Accelerate" }, !1] }, wt = { fn: Y, [C]: [{ ref: "Region" }, "aws-global"] }, Mt = { [Nt]: [{ [Pt]: !0, [yt]: "sigv4", [_t]: "s3", [qt]: "us-east-1" }] }, X = { fn: "not", [C]: [wt] }, $t = { fn: kt, [C]: [{ ref: "UseGlobalEndpoint" }, !0] }, Vl = { url: "https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: { [Nt]: [{ [Pt]: !0, [yt]: "sigv4", [_t]: "s3", [qt]: "{Region}" }] }, [M]: {} }, At = { [Nt]: [{ [Pt]: !0, [yt]: "sigv4", [_t]: "s3", [qt]: "{Region}" }] }, Ut = { fn: kt, [C]: [{ ref: "UseGlobalEndpoint" }, !1] }, Kl = { url: "https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}", [L]: At, [M]: {} }, Wl = { url: "https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}", [L]: At, [M]: {} }, Zl = { url: "https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: At, [M]: {} }, Rc = { fn: kt, [C]: [{ fn: Ct, [C]: [Kd, "isIp"] }, !1] }, vc = { url: Nd, [L]: At, [M]: {} }, Zc = { url: rs, [L]: At, [M]: {} }, Xl = { [B]: Zc, [m]: B }, wc = { url: Gd, [L]: At, [M]: {} }, Jl = { url: "https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}", [L]: At, [M]: {} }, Jn = { [U]: "Invalid region: region was not a valid DNS name.", [m]: U }, ie = { ref: zd }, Xd = { ref: qd }, Oc = { fn: Ct, [C]: [ie, "service"] }, ru = { ref: eu }, Ql = { [l]: [at], [U]: "S3 Object Lambda does not support Dual-stack", [m]: U }, Yl = { [l]: [Pe], [U]: "S3 Object Lambda does not support S3 Accelerate", [m]: U }, td = { [l]: [{ fn: xe, [C]: [{ ref: "DisableAccessPoints" }] }, { fn: kt, [C]: [{ ref: "DisableAccessPoints" }, !0] }], [U]: "Access points are not supported for this operation", [m]: U }, Tc = { [l]: [{ fn: xe, [C]: [{ ref: "UseArnRegion" }] }, { fn: kt, [C]: [{ ref: "UseArnRegion" }, !1] }, { fn: "not", [C]: [{ fn: Y, [C]: [{ fn: Ct, [C]: [ie, "region"] }, "{Region}"] }] }], [U]: "Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`", [m]: U }, Jd = { fn: Ct, [C]: [{ ref: "bucketPartition" }, yt] }, Qd = { fn: Ct, [C]: [ie, "accountId"] }, Dc = { [Nt]: [{ [Pt]: !0, [yt]: "sigv4", [_t]: tu, [qt]: "{bucketArn#region}" }] }, ed = { [U]: "Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName}`", [m]: U }, Ic = { [U]: "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`", [m]: U }, Lc = { [U]: "Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)", [m]: U }, Mc = { [U]: "Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`", [m]: U }, rd = { [U]: "Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.", [m]: U }, od = { [U]: "Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided", [m]: U }, No = { [Nt]: [{ [Pt]: !0, [yt]: "sigv4", [_t]: "s3", [qt]: "{bucketArn#region}" }] }, nd = { [Nt]: [{ [Pt]: !0, [yt]: Yc, [_t]: Ho, [Jc]: ["*"] }, { [Pt]: !0, [yt]: "sigv4", [_t]: Ho, [qt]: "{bucketArn#region}" }] }, sd = { fn: jd, [C]: [J] }, id = { url: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: At, [M]: {} }, ad = { url: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: At, [M]: {} }, cd = { url: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: At, [M]: {} }, $c = { url: Fd, [L]: At, [M]: {} }, ud = { url: "https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: At, [M]: {} }, md = { ref: "UseObjectLambdaEndpoint" }, Uc = { [Nt]: [{ [Pt]: !0, [yt]: "sigv4", [_t]: tu, [qt]: "{Region}" }] }, pd = { url: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: At, [M]: {} }, ld = { url: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}", [L]: At, [M]: {} }, dd = { url: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: At, [M]: {} }, Nc = { url: Yn, [L]: At, [M]: {} }, fd = { url: "https://s3.{Region}.{partitionResult#dnsSuffix}", [L]: At, [M]: {} }, Gc = [{ ref: "Region" }], uE = [{ ref: "Endpoint" }], mE = [J], jc = [Pe], Nr = [bt, Jt], gd = [{ fn: xe, [C]: [{ ref: "DisableS3ExpressSessionAuth" }] }, { fn: kt, [C]: [{ ref: "DisableS3ExpressSessionAuth" }, !0] }], pE = [Wd], xd = [Zd], Be = [Vd], zc = [pt, at], jo = [pt, Z], zo = [V, at], qo = [V, Z], hd = [{ fn: ut, [C]: [J, 6, 14, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: ut, [C]: [J, 14, 16, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], Ne = [{ [l]: [pt, at], [B]: { url: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: ge, [M]: {} }, [m]: B }, { [l]: jo, [B]: { url: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [L]: ge, [M]: {} }, [m]: B }, { [l]: zo, [B]: { url: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: ge, [M]: {} }, [m]: B }, { [l]: qo, [B]: { url: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [L]: ge, [M]: {} }, [m]: B }], Cd = [{ fn: ut, [C]: [J, 6, 15, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: ut, [C]: [J, 15, 17, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], yd = [{ fn: ut, [C]: [J, 6, 19, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: ut, [C]: [J, 19, 21, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], Ed = [{ fn: ut, [C]: [J, 6, 20, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: ut, [C]: [J, 20, 22, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], Sd = [{ fn: ut, [C]: [J, 6, 26, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: ut, [C]: [J, 26, 28, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], Ge = [{ [l]: [pt, at], [B]: { url: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: { [We]: "S3Express", [Nt]: [{ [Pt]: !0, [yt]: "sigv4-s3express", [_t]: "s3express", [qt]: "{Region}" }] }, [M]: {} }, [m]: B }, { [l]: jo, [B]: { url: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [L]: { [We]: "S3Express", [Nt]: [{ [Pt]: !0, [yt]: "sigv4-s3express", [_t]: "s3express", [qt]: "{Region}" }] }, [M]: {} }, [m]: B }, { [l]: zo, [B]: { url: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: { [We]: "S3Express", [Nt]: [{ [Pt]: !0, [yt]: "sigv4-s3express", [_t]: "s3express", [qt]: "{Region}" }] }, [M]: {} }, [m]: B }, { [l]: qo, [B]: { url: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [L]: { [We]: "S3Express", [Nt]: [{ [Pt]: !0, [yt]: "sigv4-s3express", [_t]: "s3express", [qt]: "{Region}" }] }, [M]: {} }, [m]: B }], bd = [J, 0, 7, !0], kd = [{ fn: ut, [C]: [J, 7, 15, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: ut, [C]: [J, 15, 17, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], Bd = [{ fn: ut, [C]: [J, 7, 16, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: ut, [C]: [J, 16, 18, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], Pd = [{ fn: ut, [C]: [J, 7, 20, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: ut, [C]: [J, 20, 22, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], _d = [{ fn: ut, [C]: [J, 7, 21, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: ut, [C]: [J, 21, 23, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], Ad = [{ fn: ut, [C]: [J, 7, 27, !0], [F]: "s3expressAvailabilityZoneId" }, { fn: ut, [C]: [J, 27, 29, !0], [F]: "s3expressAvailabilityZoneDelim" }, { fn: Y, [C]: [{ ref: "s3expressAvailabilityZoneDelim" }, "--"] }], lE = [Go], Rd = [{ fn: fr, [C]: [{ ref: Wc }, !1] }], vd = [{ fn: Y, [C]: [{ ref: Ud }, "beta"] }], dE = ["*"], wd = [{ fn: fr, [C]: [{ ref: "Region" }, !1] }], rr = [{ fn: Y, [C]: [{ ref: "Region" }, "us-east-1"] }], qc = [{ fn: Y, [C]: [Xd, Hd] }], Od = [{ fn: Ct, [C]: [ie, "resourceId[1]"], [F]: eu }, { fn: "not", [C]: [{ fn: Y, [C]: [ru, ""] }] }], fE = [ie, "resourceId[1]"], Td = [at], Hc = [{ fn: "not", [C]: [{ fn: Y, [C]: [{ fn: Ct, [C]: [ie, "region"] }, ""] }] }], Dd = [{ fn: "not", [C]: [{ fn: xe, [C]: [{ fn: Ct, [C]: [ie, "resourceId[2]"] }] }] }], gE = [ie, "resourceId[2]"], Fc = [{ fn: ts, [C]: [{ fn: Ct, [C]: [ie, "region"] }], [F]: "bucketPartition" }], Id = [{ fn: Y, [C]: [Jd, { fn: Ct, [C]: [{ ref: "partitionResult" }, yt] }] }], Vc = [{ fn: fr, [C]: [{ fn: Ct, [C]: [ie, "region"] }, !0] }], Kc = [{ fn: fr, [C]: [Qd, !1] }], Ld = [{ fn: fr, [C]: [ru, !1] }], Qn = [pt], Md = [{ fn: fr, [C]: [{ ref: "Region" }, !0] }], xE = { version: "1.0", parameters: { Bucket: $r, Region: $r, UseFIPS: Ur, UseDualStack: Ur, Endpoint: $r, ForcePathStyle: Ur, Accelerate: Ur, UseGlobalEndpoint: Ur, UseObjectLambdaEndpoint: Uo, Key: $r, Prefix: $r, CopySource: $r, DisableAccessPoints: Uo, DisableMultiRegionAccessPoints: Ur, UseArnRegion: Uo, UseS3ExpressControlEndpoint: Uo, DisableS3ExpressSessionAuth: Uo }, [S]: [{ [l]: [{ fn: xe, [C]: Gc }], [S]: [{ [l]: [Pe, pt], error: "Accelerate cannot be used with FIPS", [m]: U }, { [l]: [at, bt], error: "Cannot set dual-stack in combination with a custom endpoint.", [m]: U }, { [l]: [bt, pt], error: "A custom endpoint cannot be combined with FIPS", [m]: U }, { [l]: [bt, Pe], error: "A custom endpoint cannot be combined with S3 Accelerate", [m]: U }, { [l]: [pt, Vd, $l], error: "Partition does not support FIPS", [m]: U }, { [l]: [Go, { fn: ut, [C]: [J, 0, 6, !0], [F]: Al }, { fn: Y, [C]: [{ ref: Al }, "--x-s3"] }], [S]: [Ul, Nl, { [l]: [jl, zl], [S]: [{ [l]: Be, [S]: [{ [l]: [Wd, H], [S]: [{ [l]: zc, endpoint: { url: "https://s3express-control-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: ge, [M]: j }, [m]: B }, { [l]: jo, endpoint: { url: "https://s3express-control-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: ge, [M]: j }, [m]: B }, { [l]: zo, endpoint: { url: "https://s3express-control.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: ge, [M]: j }, [m]: B }, { [l]: qo, endpoint: { url: "https://s3express-control.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: ge, [M]: j }, [m]: B }], [m]: b }], [m]: b }], [m]: b }, { [l]: xd, [S]: [{ [l]: Be, [S]: [{ [l]: gd, [S]: [{ [l]: hd, [S]: Ne, [m]: b }, { [l]: Cd, [S]: Ne, [m]: b }, { [l]: yd, [S]: Ne, [m]: b }, { [l]: Ed, [S]: Ne, [m]: b }, { [l]: Sd, [S]: Ne, [m]: b }, Zn], [m]: b }, { [l]: hd, [S]: Ge, [m]: b }, { [l]: Cd, [S]: Ge, [m]: b }, { [l]: yd, [S]: Ge, [m]: b }, { [l]: Ed, [S]: Ge, [m]: b }, { [l]: Sd, [S]: Ge, [m]: b }, Zn], [m]: b }], [m]: b }, Gl], [m]: b }, { [l]: [Go, { fn: ut, [C]: bd, [F]: Rl }, { fn: Y, [C]: [{ ref: Rl }, "--xa-s3"] }], [S]: [Ul, Nl, { [l]: xd, [S]: [{ [l]: Be, [S]: [{ [l]: gd, [S]: [{ [l]: kd, [S]: Ne, [m]: b }, { [l]: Bd, [S]: Ne, [m]: b }, { [l]: Pd, [S]: Ne, [m]: b }, { [l]: _d, [S]: Ne, [m]: b }, { [l]: Ad, [S]: Ne, [m]: b }, Zn], [m]: b }, { [l]: kd, [S]: Ge, [m]: b }, { [l]: Bd, [S]: Ge, [m]: b }, { [l]: Pd, [S]: Ge, [m]: b }, { [l]: _d, [S]: Ge, [m]: b }, { [l]: Ad, [S]: Ge, [m]: b }, Zn], [m]: b }], [m]: b }, Gl], [m]: b }, { [l]: [ql, jl, zl], [S]: [{ [l]: Be, [S]: [{ [l]: Nr, endpoint: { url: Yn, [L]: ge, [M]: j }, [m]: B }, { [l]: zc, endpoint: { url: "https://s3express-control-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: ge, [M]: j }, [m]: B }, { [l]: jo, endpoint: { url: "https://s3express-control-fips.{Region}.{partitionResult#dnsSuffix}", [L]: ge, [M]: j }, [m]: B }, { [l]: zo, endpoint: { url: "https://s3express-control.dualstack.{Region}.{partitionResult#dnsSuffix}", [L]: ge, [M]: j }, [m]: B }, { [l]: qo, endpoint: { url: "https://s3express-control.{Region}.{partitionResult#dnsSuffix}", [L]: ge, [M]: j }, [m]: B }], [m]: b }], [m]: b }, { [l]: [Go, { fn: ut, [C]: [J, 49, 50, !0], [F]: $d }, { fn: ut, [C]: [J, 8, 12, !0], [F]: Ud }, { fn: ut, [C]: bd, [F]: vl }, { fn: ut, [C]: [J, 32, 49, !0], [F]: Wc }, { fn: ts, [C]: Gc, [F]: "regionPartition" }, { fn: Y, [C]: [{ ref: vl }, "--op-s3"] }], [S]: [{ [l]: Rd, [S]: [{ [l]: [{ fn: Y, [C]: [Hl, "e"] }], [S]: [{ [l]: vd, [S]: [Fl, { [l]: Nr, endpoint: { url: "https://{Bucket}.ec2.{url#authority}", [L]: Xn, [M]: j }, [m]: B }], [m]: b }, { endpoint: { url: "https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}", [L]: Xn, [M]: j }, [m]: B }], [m]: b }, { [l]: [{ fn: Y, [C]: [Hl, "o"] }], [S]: [{ [l]: vd, [S]: [Fl, { [l]: Nr, endpoint: { url: "https://{Bucket}.op-{outpostId}.{url#authority}", [L]: Xn, [M]: j }, [m]: B }], [m]: b }, { endpoint: { url: "https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}", [L]: Xn, [M]: j }, [m]: B }], [m]: b }, { error: 'Unrecognized hardware type: "Expected hardware type o or e but got {hardwareType}"', [m]: U }], [m]: b }, { error: "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.", [m]: U }], [m]: b }, { [l]: lE, [S]: [{ [l]: [bt, { fn: "not", [C]: [{ fn: xe, [C]: [{ fn: Qc, [C]: uE }] }] }], error: "Custom endpoint `{Endpoint}` was not a valid URI", [m]: U }, { [l]: [Ac, Zd], [S]: [{ [l]: Be, [S]: [{ [l]: wd, [S]: [{ [l]: [Pe, $l], error: "S3 Accelerate cannot be used in this region", [m]: U }, { [l]: [at, pt, Bt, H, wt], endpoint: { url: "https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", [L]: Mt, [M]: j }, [m]: B }, { [l]: [at, pt, Bt, H, X, $t], [S]: [{ endpoint: Vl, [m]: B }], [m]: b }, { [l]: [at, pt, Bt, H, X, Ut], endpoint: Vl, [m]: B }, { [l]: [Z, pt, Bt, H, wt], endpoint: { url: "https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}", [L]: Mt, [M]: j }, [m]: B }, { [l]: [Z, pt, Bt, H, X, $t], [S]: [{ endpoint: Kl, [m]: B }], [m]: b }, { [l]: [Z, pt, Bt, H, X, Ut], endpoint: Kl, [m]: B }, { [l]: [at, V, Pe, H, wt], endpoint: { url: "https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}", [L]: Mt, [M]: j }, [m]: B }, { [l]: [at, V, Pe, H, X, $t], [S]: [{ endpoint: Wl, [m]: B }], [m]: b }, { [l]: [at, V, Pe, H, X, Ut], endpoint: Wl, [m]: B }, { [l]: [at, V, Bt, H, wt], endpoint: { url: "https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", [L]: Mt, [M]: j }, [m]: B }, { [l]: [at, V, Bt, H, X, $t], [S]: [{ endpoint: Zl, [m]: B }], [m]: b }, { [l]: [at, V, Bt, H, X, Ut], endpoint: Zl, [m]: B }, { [l]: [Z, V, Bt, bt, Jt, _c, wt], endpoint: { url: Nd, [L]: Mt, [M]: j }, [m]: B }, { [l]: [Z, V, Bt, bt, Jt, Rc, wt], endpoint: { url: rs, [L]: Mt, [M]: j }, [m]: B }, { [l]: [Z, V, Bt, bt, Jt, _c, X, $t], [S]: [{ [l]: rr, endpoint: vc, [m]: B }, { endpoint: vc, [m]: B }], [m]: b }, { [l]: [Z, V, Bt, bt, Jt, Rc, X, $t], [S]: [{ [l]: rr, endpoint: Zc, [m]: B }, Xl], [m]: b }, { [l]: [Z, V, Bt, bt, Jt, _c, X, Ut], endpoint: vc, [m]: B }, { [l]: [Z, V, Bt, bt, Jt, Rc, X, Ut], endpoint: Zc, [m]: B }, { [l]: [Z, V, Pe, H, wt], endpoint: { url: Gd, [L]: Mt, [M]: j }, [m]: B }, { [l]: [Z, V, Pe, H, X, $t], [S]: [{ [l]: rr, endpoint: wc, [m]: B }, { endpoint: wc, [m]: B }], [m]: b }, { [l]: [Z, V, Pe, H, X, Ut], endpoint: wc, [m]: B }, { [l]: [Z, V, Bt, H, wt], endpoint: { url: wl, [L]: Mt, [M]: j }, [m]: B }, { [l]: [Z, V, Bt, H, X, $t], [S]: [{ [l]: rr, endpoint: { url: wl, [L]: At, [M]: j }, [m]: B }, { endpoint: Jl, [m]: B }], [m]: b }, { [l]: [Z, V, Bt, H, X, Ut], endpoint: Jl, [m]: B }], [m]: b }, Jn], [m]: b }], [m]: b }, { [l]: [bt, Jt, { fn: Y, [C]: [{ fn: Ct, [C]: [Kd, "scheme"] }, "http"] }, { fn: es, [C]: [J, !0] }, Ac, V, Z, Bt], [S]: [{ [l]: Be, [S]: [{ [l]: wd, [S]: [Xl], [m]: b }, Jn], [m]: b }], [m]: b }, { [l]: [Ac, { fn: jd, [C]: mE, [F]: zd }], [S]: [{ [l]: [{ fn: Ct, [C]: [ie, "resourceId[0]"], [F]: qd }, { fn: "not", [C]: [{ fn: Y, [C]: [Xd, ""] }] }], [S]: [{ [l]: [{ fn: Y, [C]: [Oc, tu] }], [S]: [{ [l]: qc, [S]: [{ [l]: Od, [S]: [Ql, Yl, { [l]: Hc, [S]: [td, { [l]: Dd, [S]: [Tc, { [l]: Fc, [S]: [{ [l]: Be, [S]: [{ [l]: Id, [S]: [{ [l]: Vc, [S]: [{ [l]: [{ fn: Y, [C]: [Qd, ""] }], error: "Invalid ARN: Missing account id", [m]: U }, { [l]: Kc, [S]: [{ [l]: Ld, [S]: [{ [l]: Nr, endpoint: { url: Ol, [L]: Dc, [M]: j }, [m]: B }, { [l]: Qn, endpoint: { url: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", [L]: Dc, [M]: j }, [m]: B }, { endpoint: { url: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}", [L]: Dc, [M]: j }, [m]: B }], [m]: b }, ed], [m]: b }, Ic], [m]: b }, Lc], [m]: b }, Mc], [m]: b }], [m]: b }], [m]: b }, rd], [m]: b }, { error: "Invalid ARN: bucket ARN is missing a region", [m]: U }], [m]: b }, od], [m]: b }, { error: "Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`", [m]: U }], [m]: b }, { [l]: qc, [S]: [{ [l]: Od, [S]: [{ [l]: Hc, [S]: [{ [l]: qc, [S]: [{ [l]: Hc, [S]: [td, { [l]: Dd, [S]: [Tc, { [l]: Fc, [S]: [{ [l]: Be, [S]: [{ [l]: [{ fn: Y, [C]: [Jd, "{partitionResult#name}"] }], [S]: [{ [l]: Vc, [S]: [{ [l]: [{ fn: Y, [C]: [Oc, "s3"] }], [S]: [{ [l]: Kc, [S]: [{ [l]: Ld, [S]: [{ [l]: jc, error: "Access Points do not support S3 Accelerate", [m]: U }, { [l]: zc, endpoint: { url: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", [L]: No, [M]: j }, [m]: B }, { [l]: jo, endpoint: { url: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", [L]: No, [M]: j }, [m]: B }, { [l]: zo, endpoint: { url: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", [L]: No, [M]: j }, [m]: B }, { [l]: [V, Z, bt, Jt], endpoint: { url: Ol, [L]: No, [M]: j }, [m]: B }, { [l]: qo, endpoint: { url: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}", [L]: No, [M]: j }, [m]: B }], [m]: b }, ed], [m]: b }, Ic], [m]: b }, { error: "Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}", [m]: U }], [m]: b }, Lc], [m]: b }, Mc], [m]: b }], [m]: b }], [m]: b }, rd], [m]: b }], [m]: b }], [m]: b }, { [l]: [{ fn: fr, [C]: [ru, !0] }], [S]: [{ [l]: Td, error: "S3 MRAP does not support dual-stack", [m]: U }, { [l]: Qn, error: "S3 MRAP does not support FIPS", [m]: U }, { [l]: jc, error: "S3 MRAP does not support S3 Accelerate", [m]: U }, { [l]: [{ fn: kt, [C]: [{ ref: "DisableMultiRegionAccessPoints" }, !0] }], error: "Invalid configuration: Multi-Region Access Point ARNs are disabled.", [m]: U }, { [l]: [{ fn: ts, [C]: Gc, [F]: Tl }], [S]: [{ [l]: [{ fn: Y, [C]: [{ fn: Ct, [C]: [{ ref: Tl }, yt] }, { fn: Ct, [C]: [ie, "partition"] }] }], [S]: [{ endpoint: { url: "https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}", [L]: { [Nt]: [{ [Pt]: !0, name: Yc, [_t]: "s3", [Jc]: dE }] }, [M]: j }, [m]: B }], [m]: b }, { error: "Client was configured for partition `{mrapPartition#name}` but bucket referred to partition `{bucketArn#partition}`", [m]: U }], [m]: b }], [m]: b }, { error: "Invalid Access Point Name", [m]: U }], [m]: b }, od], [m]: b }, { [l]: [{ fn: Y, [C]: [Oc, Ho] }], [S]: [{ [l]: Td, error: "S3 Outposts does not support Dual-stack", [m]: U }, { [l]: Qn, error: "S3 Outposts does not support FIPS", [m]: U }, { [l]: jc, error: "S3 Outposts does not support S3 Accelerate", [m]: U }, { [l]: [{ fn: xe, [C]: [{ fn: Ct, [C]: [ie, "resourceId[4]"] }] }], error: "Invalid Arn: Outpost Access Point ARN contains sub resources", [m]: U }, { [l]: [{ fn: Ct, [C]: fE, [F]: Wc }], [S]: [{ [l]: Rd, [S]: [Tc, { [l]: Fc, [S]: [{ [l]: Be, [S]: [{ [l]: Id, [S]: [{ [l]: Vc, [S]: [{ [l]: Kc, [S]: [{ [l]: [{ fn: Ct, [C]: gE, [F]: Dl }], [S]: [{ [l]: [{ fn: Ct, [C]: [ie, "resourceId[3]"], [F]: eu }], [S]: [{ [l]: [{ fn: Y, [C]: [{ ref: Dl }, Hd] }], [S]: [{ [l]: Nr, endpoint: { url: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.{url#authority}", [L]: nd, [M]: j }, [m]: B }, { endpoint: { url: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}", [L]: nd, [M]: j }, [m]: B }], [m]: b }, { error: "Expected an outpost type `accesspoint`, found {outpostType}", [m]: U }], [m]: b }, { error: "Invalid ARN: expected an access point name", [m]: U }], [m]: b }, { error: "Invalid ARN: Expected a 4-component resource", [m]: U }], [m]: b }, Ic], [m]: b }, Lc], [m]: b }, Mc], [m]: b }], [m]: b }], [m]: b }, { error: "Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId}`", [m]: U }], [m]: b }, { error: "Invalid ARN: The Outpost Id was not set", [m]: U }], [m]: b }, { error: "Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})", [m]: U }], [m]: b }, { error: "Invalid ARN: No ARN type specified", [m]: U }], [m]: b }, { [l]: [{ fn: ut, [C]: [J, 0, 4, !1], [F]: Il }, { fn: Y, [C]: [{ ref: Il }, "arn:"] }, { fn: "not", [C]: [{ fn: xe, [C]: [sd] }] }], error: "Invalid ARN: `{Bucket}` was not a valid ARN", [m]: U }, { [l]: [{ fn: kt, [C]: [cE, !0] }, sd], error: "Path-style addressing cannot be used with ARN buckets", [m]: U }, { [l]: pE, [S]: [{ [l]: Be, [S]: [{ [l]: [Bt], [S]: [{ [l]: [at, H, pt, wt], endpoint: { url: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: Mt, [M]: j }, [m]: B }, { [l]: [at, H, pt, X, $t], [S]: [{ endpoint: id, [m]: B }], [m]: b }, { [l]: [at, H, pt, X, Ut], endpoint: id, [m]: B }, { [l]: [Z, H, pt, wt], endpoint: { url: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: Mt, [M]: j }, [m]: B }, { [l]: [Z, H, pt, X, $t], [S]: [{ endpoint: ad, [m]: B }], [m]: b }, { [l]: [Z, H, pt, X, Ut], endpoint: ad, [m]: B }, { [l]: [at, H, V, wt], endpoint: { url: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [L]: Mt, [M]: j }, [m]: B }, { [l]: [at, H, V, X, $t], [S]: [{ endpoint: cd, [m]: B }], [m]: b }, { [l]: [at, H, V, X, Ut], endpoint: cd, [m]: B }, { [l]: [Z, bt, Jt, V, wt], endpoint: { url: Fd, [L]: Mt, [M]: j }, [m]: B }, { [l]: [Z, bt, Jt, V, X, $t], [S]: [{ [l]: rr, endpoint: $c, [m]: B }, { endpoint: $c, [m]: B }], [m]: b }, { [l]: [Z, bt, Jt, V, X, Ut], endpoint: $c, [m]: B }, { [l]: [Z, H, V, wt], endpoint: { url: Ll, [L]: Mt, [M]: j }, [m]: B }, { [l]: [Z, H, V, X, $t], [S]: [{ [l]: rr, endpoint: { url: Ll, [L]: At, [M]: j }, [m]: B }, { endpoint: ud, [m]: B }], [m]: b }, { [l]: [Z, H, V, X, Ut], endpoint: ud, [m]: B }], [m]: b }, { error: "Path-style addressing cannot be used with S3 Accelerate", [m]: U }], [m]: b }], [m]: b }], [m]: b }, { [l]: [{ fn: xe, [C]: [md] }, { fn: kt, [C]: [md, !0] }], [S]: [{ [l]: Be, [S]: [{ [l]: Md, [S]: [Ql, Yl, { [l]: Nr, endpoint: { url: Yn, [L]: Uc, [M]: j }, [m]: B }, { [l]: Qn, endpoint: { url: "https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}", [L]: Uc, [M]: j }, [m]: B }, { endpoint: { url: "https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}", [L]: Uc, [M]: j }, [m]: B }], [m]: b }, Jn], [m]: b }], [m]: b }, { [l]: [ql], [S]: [{ [l]: Be, [S]: [{ [l]: Md, [S]: [{ [l]: [pt, at, H, wt], endpoint: { url: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", [L]: Mt, [M]: j }, [m]: B }, { [l]: [pt, at, H, X, $t], [S]: [{ endpoint: pd, [m]: B }], [m]: b }, { [l]: [pt, at, H, X, Ut], endpoint: pd, [m]: B }, { [l]: [pt, Z, H, wt], endpoint: { url: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}", [L]: Mt, [M]: j }, [m]: B }, { [l]: [pt, Z, H, X, $t], [S]: [{ endpoint: ld, [m]: B }], [m]: b }, { [l]: [pt, Z, H, X, Ut], endpoint: ld, [m]: B }, { [l]: [V, at, H, wt], endpoint: { url: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", [L]: Mt, [M]: j }, [m]: B }, { [l]: [V, at, H, X, $t], [S]: [{ endpoint: dd, [m]: B }], [m]: b }, { [l]: [V, at, H, X, Ut], endpoint: dd, [m]: B }, { [l]: [V, Z, bt, Jt, wt], endpoint: { url: Yn, [L]: Mt, [M]: j }, [m]: B }, { [l]: [V, Z, bt, Jt, X, $t], [S]: [{ [l]: rr, endpoint: Nc, [m]: B }, { endpoint: Nc, [m]: B }], [m]: b }, { [l]: [V, Z, bt, Jt, X, Ut], endpoint: Nc, [m]: B }, { [l]: [V, Z, H, wt], endpoint: { url: Ml, [L]: Mt, [M]: j }, [m]: B }, { [l]: [V, Z, H, X, $t], [S]: [{ [l]: rr, endpoint: { url: Ml, [L]: At, [M]: j }, [m]: B }, { endpoint: fd, [m]: B }], [m]: b }, { [l]: [V, Z, H, X, Ut], endpoint: fd, [m]: B }], [m]: b }, Jn], [m]: b }], [m]: b }], [m]: b }, { error: "A region must be set when sending requests to S3.", [m]: U }] }, Yd = xE;
var hE = new Hm({ size: 50, params: ["Accelerate", "Bucket", "DisableAccessPoints", "DisableMultiRegionAccessPoints", "DisableS3ExpressSessionAuth", "Endpoint", "ForcePathStyle", "Region", "UseArnRegion", "UseDualStack", "UseFIPS", "UseGlobalEndpoint", "UseObjectLambdaEndpoint", "UseS3ExpressControlEndpoint"] }), os = (r, t = {}) => hE.get(r, () => Vm(Yd, { endpointParams: r, logger: t.logger }));
Fm.aws = Km;
var CE = r => (t, o, e) => _(null, null, function* () { if (!e)
    throw new Error("Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`"); let s = yield r(t, o, e), a = Ro(o)?.commandInstance?.constructor?.getEndpointParameterInstructions; if (!a)
    throw new Error(`getEndpointParameterInstructions() is not defined on \`${o.commandName}\``); let c = yield gp(e, { getEndpointParameterInstructions: a }, t); return Object.assign(s, c); }), yE = (r, t, o) => _(null, null, function* () { return { operation: Ro(t).operation, region: (yield Ar(r.region)()) || (() => { throw new Error("expected `region` to be configured for `aws.auth#sigv4`"); })() }; }), tf = CE(yE);
function ef(r) { return { schemeId: "aws.auth#sigv4", signingProperties: { name: "s3", region: r.region }, propertiesExtractor: (t, o) => ({ signingProperties: { config: t, context: o } }) }; }
function rf(r) { return { schemeId: "aws.auth#sigv4a", signingProperties: { name: "s3", region: r.region }, propertiesExtractor: (t, o) => ({ signingProperties: { config: t, context: o } }) }; }
var EE = (r, t, o) => s => { let c = r(s).properties?.authSchemes; if (!c)
    return t(s); let x = []; for (let k of c) {
    let h = k, { name: A, properties: v = {} } = h, I = _m(h, ["name", "properties"]), T = A.toLowerCase();
    A !== T && console.warn(`HttpAuthScheme has been normalized with lowercasing: \`${A}\` to \`${T}\``);
    let $;
    if (T === "sigv4a") {
        $ = "aws.auth#sigv4a";
        let et = c.find(it => { let vt = it.name.toLowerCase(); return vt !== "sigv4a" && vt.startsWith("sigv4"); });
        if (Mr.sigv4aDependency() === "none" && et)
            continue;
    }
    else if (T.startsWith("sigv4"))
        $ = "aws.auth#sigv4";
    else
        throw new Error(`Unknown HttpAuthScheme found in \`@smithy.rules#endpointRuleSet\`: \`${T}\``);
    let G = o[$];
    if (!G)
        throw new Error(`Could not find HttpAuthOption create function for \`${$}\``);
    let q = G(s);
    q.schemeId = $, q.signingProperties = u(u(u({}, q.signingProperties || {}), I), v), x.push(q);
} return x; }, SE = r => { let t = []; switch (r.operation) {
    default: t.push(ef(r)), t.push(rf(r));
} return t; }, of = EE(os, SE, { "aws.auth#sigv4": ef, "aws.auth#sigv4a": rf }), nf = r => { let t = tp(r), o = Jm(t); return Object.assign(o, { authSchemePreference: Ar(r.authSchemePreference ?? []) }); };
var sf = r => Object.assign(r, { useFipsEndpoint: r.useFipsEndpoint ?? !1, useDualstackEndpoint: r.useDualstackEndpoint ?? !1, forcePathStyle: r.forcePathStyle ?? !1, useAccelerateEndpoint: r.useAccelerateEndpoint ?? !1, useGlobalEndpoint: r.useGlobalEndpoint ?? !1, disableMultiregionAccessPoints: r.disableMultiregionAccessPoints ?? !1, defaultSigningName: "s3" }), g = { ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" }, UseArnRegion: { type: "clientContextParams", name: "useArnRegion" }, DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" }, Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" }, DisableS3ExpressSessionAuth: { type: "clientContextParams", name: "disableS3ExpressSessionAuth" }, UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" }, UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
var Rt = class r extends np {
    constructor(t) { super(t), Object.setPrototypeOf(this, r.prototype); }
};
var ns = class r extends Rt {
    name = "NoSuchUpload";
    $fault = "client";
    constructor(t) { super(u({ name: "NoSuchUpload", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, ss = class r extends Rt {
    name = "ObjectNotInActiveTierError";
    $fault = "client";
    constructor(t) { super(u({ name: "ObjectNotInActiveTierError", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, is = class r extends Rt {
    name = "BucketAlreadyExists";
    $fault = "client";
    constructor(t) { super(u({ name: "BucketAlreadyExists", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, as = class r extends Rt {
    name = "BucketAlreadyOwnedByYou";
    $fault = "client";
    constructor(t) { super(u({ name: "BucketAlreadyOwnedByYou", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, cs = class r extends Rt {
    name = "NoSuchBucket";
    $fault = "client";
    constructor(t) { super(u({ name: "NoSuchBucket", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, us = class r extends Rt {
    name = "InvalidObjectState";
    $fault = "client";
    StorageClass;
    AccessTier;
    constructor(t) { super(u({ name: "InvalidObjectState", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype), this.StorageClass = t.StorageClass, this.AccessTier = t.AccessTier; }
}, ms = class r extends Rt {
    name = "NoSuchKey";
    $fault = "client";
    constructor(t) { super(u({ name: "NoSuchKey", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, ps = class r extends Rt {
    name = "NotFound";
    $fault = "client";
    constructor(t) { super(u({ name: "NotFound", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, ls = class r extends Rt {
    name = "EncryptionTypeMismatch";
    $fault = "client";
    constructor(t) { super(u({ name: "EncryptionTypeMismatch", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, ds = class r extends Rt {
    name = "InvalidRequest";
    $fault = "client";
    constructor(t) { super(u({ name: "InvalidRequest", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, fs = class r extends Rt {
    name = "InvalidWriteOffset";
    $fault = "client";
    constructor(t) { super(u({ name: "InvalidWriteOffset", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, gs = class r extends Rt {
    name = "TooManyParts";
    $fault = "client";
    constructor(t) { super(u({ name: "TooManyParts", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, xs = class r extends Rt {
    name = "IdempotencyParameterMismatch";
    $fault = "client";
    constructor(t) { super(u({ name: "IdempotencyParameterMismatch", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
}, hs = class r extends Rt {
    name = "ObjectAlreadyInActiveTierError";
    $fault = "client";
    constructor(t) { super(u({ name: "ObjectAlreadyInActiveTierError", $fault: "client" }, t)), Object.setPrototypeOf(this, r.prototype); }
};
var bE = "Account", kE = "AnalyticsAndOperator", Cs = "AccelerateConfiguration", Ns = "AccessControlList", Gr = "ACL", hf = "AnalyticsConfigurationList", gr = "AccessControlPolicy", Cf = "AccessControlTranslation", Fo = "AnalyticsConfiguration", yf = "AbortDate", BE = "AnalyticsExportDestination", PE = "AnalyticsFilter", _E = "AllowedHeaders", AE = "AllowedHeader", RE = "AccountId", Ef = "AbortIncompleteMultipartUpload", af = "AccessKeyId", vE = "AllowedMethods", wE = "AbortMultipartUpload", OE = "AbortMultipartUploadOutput", TE = "AbortMultipartUploadRequest", DE = "AllowedMethod", IE = "AllowedOrigins", LE = "AllowedOrigin", ME = "AccessPointAlias", Sf = "AccessPointArn", $E = "AllowQuotedRecordDelimiter", pu = "AcceptRanges", bf = "AbortRuleId", ys = "AbacStatus", UE = "AnalyticsS3BucketDestination", NE = "ApplyServerSideEncryptionByDefault", GE = "ArchiveStatus", kf = "AccessTier", Zo = "And", P = "Bucket", lu = "BucketArn", jE = "BucketAlreadyExists", zE = "BucketAccountId", qE = "BucketAlreadyOwnedByYou", Bf = "BlockedEncryptionTypes", du = "BypassGovernanceRetention", HE = "BucketInfo", Qt = "BucketKeyEnabled", FE = "BucketLifecycleConfiguration", VE = "BucketLocationName", Es = "BucketLoggingStatus", KE = "BucketLocationType", WE = "BucketName", Pf = "BytesProcessed", cf = "BlockPublicAcls", uf = "BlockPublicPolicy", fu = "BucketRegion", _f = "BytesReturned", Af = "BytesScanned", Xo = "Body", gu = "Buckets", Rf = "Checksum", Q = "ChecksumAlgorithm", ZE = "CannedACL", XE = "CreateBucket", ou = "CreateBucketConfiguration", JE = "CreateBucketMetadataConfiguration", QE = "CreateBucketMetadataConfigurationRequest", YE = "CreateBucketMetadataTableConfiguration", tS = "CreateBucketMetadataTableConfigurationRequest", eS = "CreateBucketOutput", rS = "CreateBucketRequest", jr = "CacheControl", Yt = "ChecksumCRC32", te = "ChecksumCRC32C", ee = "ChecksumCRC64NVME", Jo = "Cache-Control", oS = "CreationDate", Qo = "Content-Disposition", zr = "ContentDisposition", nS = "ContinuationEvent", Yo = "Content-Encoding", qr = "ContentEncoding", sS = "CloudFunction", iS = "CloudFunctionConfiguration", Hr = "ContentLanguage", tn = "Content-Language", en = "Content-Length", rn = "ContentLength", xt = "Content-MD5", ht = "ContentMD5", aS = "CompletedMultipartUpload", cS = "CompleteMultipartUploadOutput", uS = "CreateMultipartUploadOutput", mS = "CompleteMultipartUploadResult", pS = "CompleteMultipartUploadRequest", lS = "CreateMultipartUploadRequest", vf = "CompleteMultipartUpload", dS = "CreateMultipartUpload", wf = "ChecksumMode", fS = "CopyObject", gS = "CopyObjectOutput", Of = "CopyObjectResult", Ss = "CORSConfiguration", xu = "CORSRules", hu = "CORSRule", xS = "CopyObjectRequest", hS = "CommonPrefix", CS = "CommonPrefixList", yS = "CompletedPartList", Tf = "CopyPartResult", ES = "CompletedPart", Gs = "CommonPrefixes", Cu = "ContentRange", SS = "ConfirmRemoveSelfBucketAccess", Df = "Content-Range", If = "CopySource", re = "ChecksumSHA1", oe = "ChecksumSHA256", Lf = "CopySourceIfMatch", Mf = "CopySourceIfModifiedSince", $f = "CopySourceIfNoneMatch", Uf = "CopySourceIfUnmodifiedSince", bS = "CreateSessionOutput", kS = "CreateSessionResult", BS = "CopySourceRange", PS = "CreateSessionRequest", Nf = "CopySourceSSECustomerAlgorithm", yu = "CopySourceSSECustomerKey", Gf = "CopySourceSSECustomerKeyMD5", jf = "CSV", zf = "CopySourceVersionId", _S = "CSVInput", AS = "CSVOutput", Eu = "ConfigurationState", RS = "CreateSession", he = "ChecksumType", on = "Content-Type", vS = "ClientToken", Fr = "ContentType", wS = "CompressionType", ae = "ContinuationToken", qf = "Condition", OS = "Code", TS = "Comments", Hf = "Contents", DS = "Cont", mf = "Credentials", Vr = "Days", IS = "DaysAfterInitiation", LS = "DeleteBucket", MS = "DeleteBucketAnalyticsConfiguration", $S = "DeleteBucketAnalyticsConfigurationRequest", US = "DeleteBucketCors", NS = "DeleteBucketCorsRequest", GS = "DeleteBucketEncryption", jS = "DeleteBucketEncryptionRequest", zS = "DeleteBucketInventoryConfiguration", qS = "DeleteBucketInventoryConfigurationRequest", HS = "DeleteBucketIntelligentTieringConfiguration", FS = "DeleteBucketIntelligentTieringConfigurationRequest", VS = "DeleteBucketLifecycle", KS = "DeleteBucketLifecycleRequest", WS = "DeleteBucketMetadataConfiguration", ZS = "DeleteBucketMetadataConfigurationRequest", XS = "DeleteBucketMetricsConfigurationRequest", JS = "DeleteBucketMetricsConfiguration", QS = "DeleteBucketMetadataTableConfiguration", YS = "DeleteBucketMetadataTableConfigurationRequest", tb = "DeleteBucketOwnershipControls", eb = "DeleteBucketOwnershipControlsRequest", rb = "DeleteBucketPolicy", ob = "DeleteBucketPolicyRequest", nb = "DeleteBucketRequest", sb = "DeleteBucketReplicationRequest", ib = "DeleteBucketReplication", ab = "DeleteBucketTagging", cb = "DeleteBucketTaggingRequest", ub = "DeleteBucketWebsite", mb = "DeleteBucketWebsiteRequest", pb = "DataExport", lb = "DestinationIfMatch", db = "DestinationIfModifiedSince", fb = "DestinationIfNoneMatch", gb = "DestinationIfUnmodifiedSince", xr = "DeleteMarker", xb = "DeleteMarkerEntry", Ff = "DeleteMarkerReplication", hb = "DeleteMarkerVersionId", Vf = "DeleteMarkers", Su = "DisplayName", Cb = "DeletedObject", yb = "DeleteObjectOutput", Eb = "DeleteObjectsOutput", Sb = "DeleteObjectRequest", bb = "DeleteObjectsRequest", kb = "DeleteObjectTagging", Bb = "DeleteObjectTaggingOutput", Pb = "DeleteObjectTaggingRequest", _b = "DeletedObjects", Ab = "DeleteObject", Rb = "DeleteObjects", vb = "DeletePublicAccessBlock", wb = "DeletePublicAccessBlockRequest", Ob = "DataRedundancy", Kf = "DefaultRetention", Tb = "DeleteResult", Wf = "DestinationResult", Zf = "Date", nu = "Delete", Db = "Deleted", or = "Delimiter", js = "Destination", Ib = "Description", Xf = "Details", je = "Expiration", Lb = "EmailAddress", Jf = "EventBridgeConfiguration", w = "ExpectedBucketOwner", nn = "EncryptionConfiguration", Qf = "ErrorCode", Mb = "ErrorDetails", bu = "ErrorDocument", $b = "EndEvent", Ub = "ExposeHeaders", Nb = "ExposeHeader", Yf = "ErrorMessage", Gb = "ExpiredObjectDeleteMarker", tg = "ExistingObjectReplication", bs = "ExpiresString", eg = "ExpectedSourceBucketOwner", ku = "EncryptionType", jb = "EncryptionTypeList", zb = "EncryptionTypeMismatch", Gt = "ETag", nr = "EncodingType", qb = "EventThreshold", rg = "ExpressionType", Bu = "Encryption", Hb = "Enabled", og = "End", ng = "Errors", sn = "Error", Pu = "Events", _u = "Event", Te = "Expires", sg = "Expression", Ze = "Filter", ig = "FieldDelimiter", Fb = "FileHeaderInfo", Vb = "FetchOwner", ag = "FilterRule", Kb = "FilterRuleList", Wb = "FilterRules", Zb = "Field", cg = "Format", Xb = "Frequency", zs = "Grants", Jb = "GetBucketAbac", Qb = "GetBucketAccelerateConfiguration", Yb = "GetBucketAccelerateConfigurationOutput", tk = "GetBucketAnalyticsConfigurationOutput", ek = "GetBucketAccelerateConfigurationRequest", rk = "GetBucketAnalyticsConfigurationRequest", ok = "GetBucketAnalyticsConfiguration", nk = "GetBucketAbacOutput", sk = "GetBucketAclOutput", ik = "GetBucketAbacRequest", ak = "GetBucketAclRequest", ck = "GetBucketAcl", uk = "GetBucketCors", mk = "GetBucketCorsOutput", pk = "GetBucketCorsRequest", lk = "GetBucketEncryption", dk = "GetBucketEncryptionOutput", fk = "GetBucketEncryptionRequest", gk = "GetBucketInventoryConfiguration", xk = "GetBucketInventoryConfigurationOutput", hk = "GetBucketInventoryConfigurationRequest", Ck = "GetBucketIntelligentTieringConfiguration", yk = "GetBucketIntelligentTieringConfigurationOutput", Ek = "GetBucketIntelligentTieringConfigurationRequest", Sk = "GetBucketLocation", bk = "GetBucketLifecycleConfiguration", kk = "GetBucketLifecycleConfigurationOutput", Bk = "GetBucketLifecycleConfigurationRequest", Pk = "GetBucketLocationOutput", _k = "GetBucketLoggingOutput", Ak = "GetBucketLocationRequest", Rk = "GetBucketLoggingRequest", vk = "GetBucketLogging", wk = "GetBucketMetadataConfiguration", Ok = "GetBucketMetadataConfigurationOutput", Tk = "GetBucketMetricsConfigurationOutput", ug = "GetBucketMetadataConfigurationResult", Dk = "GetBucketMetadataConfigurationRequest", Ik = "GetBucketMetricsConfigurationRequest", Lk = "GetBucketMetricsConfiguration", Mk = "GetBucketMetadataTableConfiguration", $k = "GetBucketMetadataTableConfigurationOutput", mg = "GetBucketMetadataTableConfigurationResult", Uk = "GetBucketMetadataTableConfigurationRequest", Nk = "GetBucketNotificationConfiguration", Gk = "GetBucketNotificationConfigurationRequest", jk = "GetBucketOwnershipControls", zk = "GetBucketOwnershipControlsOutput", qk = "GetBucketOwnershipControlsRequest", Hk = "GetBucketPolicy", Fk = "GetBucketPolicyOutput", Vk = "GetBucketPolicyRequest", Kk = "GetBucketPolicyStatus", Wk = "GetBucketPolicyStatusOutput", Zk = "GetBucketPolicyStatusRequest", Xk = "GetBucketReplication", Jk = "GetBucketReplicationOutput", Qk = "GetBucketRequestPayment", Yk = "GetBucketRequestPaymentOutput", tB = "GetBucketRequestPaymentRequest", eB = "GetBucketReplicationRequest", rB = "GetBucketTagging", oB = "GetBucketTaggingOutput", nB = "GetBucketTaggingRequest", sB = "GetBucketVersioning", iB = "GetBucketVersioningOutput", aB = "GetBucketVersioningRequest", cB = "GetBucketWebsite", uB = "GetBucketWebsiteOutput", mB = "GetBucketWebsiteRequest", Kr = "GrantFullControl", pg = "GlacierJobParameters", pB = "GetObject", lB = "GetObjectAcl", dB = "GetObjectAclOutput", fB = "GetObjectAttributesOutput", gB = "GetObjectAttributesParts", xB = "GetObjectAclRequest", hB = "GetObjectAttributesResponse", CB = "GetObjectAttributesRequest", yB = "GetObjectAttributes", EB = "GetObjectLockConfiguration", SB = "GetObjectLockConfigurationOutput", bB = "GetObjectLockConfigurationRequest", kB = "GetObjectLegalHold", BB = "GetObjectLegalHoldOutput", PB = "GetObjectLegalHoldRequest", _B = "GetObjectOutput", AB = "GetObjectRequest", RB = "GetObjectRetentionOutput", vB = "GetObjectRetentionRequest", wB = "GetObjectRetention", OB = "GetObjectTagging", TB = "GetObjectTaggingOutput", DB = "GetObjectTorrentOutput", IB = "GetObjectTaggingRequest", LB = "GetObjectTorrentRequest", MB = "GetObjectTorrent", $B = "GetPublicAccessBlock", UB = "GetPublicAccessBlockOutput", NB = "GetPublicAccessBlockRequest", Wr = "GrantRead", Zr = "GrantReadACP", Au = "GrantWrite", Xr = "GrantWriteACP", Ru = "Grant", vu = "Grantee", GB = "HeadBucket", jB = "HeadBucketOutput", zB = "HeadBucketRequest", qB = "HttpErrorCodeReturnedEquals", lg = "HostName", HB = "HeadObject", FB = "HeadObjectOutput", VB = "HeadObjectRequest", KB = "HttpRedirectCode", Ot = "Id", Vo = "InventoryConfiguration", dg = "InventoryConfigurationList", Jr = "ID", wu = "IndexDocument", WB = "InventoryDestination", ZB = "IsEnabled", XB = "InventoryEncryption", JB = "InventoryFilter", fg = "IsLatest", Qr = "IfMatch", QB = "IfMatchInitiatedTime", YB = "IfMatchLastModifiedTime", tP = "IfMatchSize", Ou = "If-Modified-Since", gg = "IfModifiedSince", eP = "InitiateMultipartUploadResult", hr = "If-Match", an = "IfNoneMatch", Yr = "If-None-Match", rP = "InventoryOptionalFields", oP = "InvalidObjectState", nP = "IncludedObjectVersions", pf = "IsPublic", lf = "IgnorePublicAcls", sP = "IdempotencyParameterMismatch", iP = "InvalidRequest", aP = "IsRestoreInProgress", Tu = "InputSerialization", cP = "InventoryS3BucketDestination", uP = "InventorySchedule", ze = "IsTruncated", mP = "IntelligentTieringAndOperator", Ko = "IntelligentTieringConfiguration", xg = "IntelligentTieringConfigurationList", hg = "InventoryTableConfigurationResult", pP = "InventoryTableConfigurationUpdates", ks = "InventoryTableConfiguration", lP = "IntelligentTieringFilter", Cg = "IfUnmodifiedSince", Du = "If-Unmodified-Since", dP = "InvalidWriteOffset", Iu = "Initiator", fP = "Initiated", yg = "JSON", gP = "JSONInput", xP = "JSONOutput", Bs = "JournalTableConfiguration", Eg = "JournalTableConfigurationResult", hP = "JournalTableConfigurationUpdates", W = "Key", CP = "KeyCount", yP = "KeyId", EP = "KmsKeyArn", qs = "KeyMarker", SP = "KMSContext", bP = "KMSKeyId", kP = "KMSMasterKeyID", BP = "KeyPrefixEquals", Ps = "Location", PP = "ListAllMyBucketsResult", _P = "ListAllMyDirectoryBucketsResult", AP = "ListBuckets", RP = "ListBucketAnalyticsConfigurations", vP = "ListBucketAnalyticsConfigurationsOutput", wP = "ListBucketAnalyticsConfigurationResult", OP = "ListBucketAnalyticsConfigurationsRequest", TP = "ListBucketInventoryConfigurations", DP = "ListBucketInventoryConfigurationsOutput", IP = "ListBucketInventoryConfigurationsRequest", LP = "ListBucketIntelligentTieringConfigurations", MP = "ListBucketIntelligentTieringConfigurationsOutput", $P = "ListBucketIntelligentTieringConfigurationsRequest", UP = "ListBucketMetricsConfigurations", NP = "ListBucketMetricsConfigurationsOutput", GP = "ListBucketMetricsConfigurationsRequest", jP = "ListBucketsOutput", zP = "ListBucketsRequest", Sg = "ListBucketResult", su = "LocationConstraint", iu = "LifecycleConfiguration", qP = "ListDirectoryBuckets", HP = "ListDirectoryBucketsOutput", FP = "ListDirectoryBucketsRequest", Lu = "LoggingEnabled", VP = "LifecycleExpiration", KP = "LambdaFunctionArn", WP = "LambdaFunctionConfiguration", ZP = "LambdaFunctionConfigurationList", XP = "LambdaFunctionConfigurations", _s = "LegalHold", JP = "LocationInfo", QP = "ListInventoryConfigurationsResult", qe = "LastModified", YP = "ListMetricsConfigurationsResult", t_ = "LastModifiedTime", e_ = "ListMultipartUploads", r_ = "ListMultipartUploadsOutput", o_ = "ListMultipartUploadsResult", n_ = "ListMultipartUploadsRequest", Mu = "Last-Modified", s_ = "ListObjects", i_ = "ListObjectsOutput", a_ = "ListObjectsRequest", c_ = "ListObjectsV2", u_ = "ListObjectsV2Output", m_ = "ListObjectVersionsOutput", p_ = "ListObjectsV2Request", l_ = "ListObjectVersionsRequest", d_ = "ListObjectVersions", f_ = "ListParts", g_ = "ListPartsOutput", x_ = "ListPartsResult", h_ = "ListPartsRequest", C_ = "LifecycleRule", y_ = "LifecycleRuleAndOperator", E_ = "LifecycleRuleFilter", S_ = "LifecycleRules", b_ = "ListVersionsResult", to = "Metadata", k_ = "MetricsAndOperator", B_ = "MaxAgeSeconds", P_ = "MaxBuckets", au = "MetadataConfiguration", bg = "MetricsConfigurationList", kg = "MetadataConfigurationResult", Wo = "MetricsConfiguration", __ = "MetadataDirective", A_ = "MaxDirectoryBuckets", Bg = "MfaDelete", Pg = "MetadataEntry", R_ = "MetricsFilter", $u = "MFA", _g = "MFADelete", eo = "MaxKeys", Uu = "MissingMeta", v_ = "MpuObjectSize", Hs = "MaxParts", cu = "MetadataTableConfiguration", Ag = "MetadataTableConfigurationResult", w_ = "MetadataTableEncryptionConfiguration", Rg = "MultipartUpload", O_ = "MultipartUploadList", vg = "MaxUploads", wg = "Marker", Og = "Metrics", T_ = "Message", D_ = "Minutes", Tg = "Mode", Cr = "Name", uu = "NotificationConfiguration", I_ = "NotificationConfigurationFilter", cn = "NextContinuationToken", Dg = "NoncurrentDays", L_ = "NotFound", Ig = "NextKeyMarker", M_ = "NextMarker", Lg = "NewerNoncurrentVersions", Mg = "NextPartNumberMarker", $_ = "NoSuchBucket", U_ = "NoSuchKey", N_ = "NoSuchUpload", G_ = "NextUploadIdMarker", $g = "NoncurrentVersionExpiration", j_ = "NextVersionIdMarker", z_ = "NoncurrentVersionTransitions", q_ = "NoncurrentVersionTransitionList", Ug = "NoncurrentVersionTransition", Ie = "Owner", H_ = "ObjectAttributes", F_ = "ObjectAlreadyInActiveTierError", As = "OwnershipControls", V_ = "OwnershipControlsRule", K_ = "OwnershipControlsRules", W_ = "OptionalFields", Z_ = "ObjectIdentifier", X_ = "ObjectIdentifierList", Ng = "OutputLocation", Rs = "ObjectLockConfiguration", J_ = "ObjectLockEnabled", Q_ = "ObjectLockEnabledForBucket", Y_ = "ObjectLockLegalHold", ro = "ObjectLockLegalHoldStatus", oo = "ObjectLockMode", tA = "ObjectLockRetention", no = "ObjectLockRetainUntilDate", eA = "ObjectLockRule", rA = "ObjectList", oA = "ObjectNotInActiveTierError", Gg = "ObjectOwnership", Nu = "OptionalObjectAttributes", nA = "ObjectParts", sA = "ObjectPart", iA = "ObjectSize", jg = "ObjectSizeGreaterThan", zg = "ObjectSizeLessThan", aA = "OutputSchemaVersion", Gu = "OutputSerialization", cA = "ObjectVersion", uA = "ObjectVersionList", mA = "Objects", qg = "Object", mt = "Prefix", vs = "PublicAccessBlockConfiguration", pA = "PutBucketAbac", lA = "PutBucketAccelerateConfiguration", dA = "PutBucketAccelerateConfigurationRequest", fA = "PutBucketAnalyticsConfigurationRequest", gA = "PutBucketAnalyticsConfiguration", xA = "PutBucketAbacRequest", hA = "PutBucketAclRequest", CA = "PutBucketAcl", yA = "PutBucketCors", EA = "PutBucketCorsRequest", SA = "PutBucketEncryption", bA = "PutBucketEncryptionRequest", kA = "PutBucketInventoryConfiguration", BA = "PutBucketInventoryConfigurationRequest", PA = "PutBucketIntelligentTieringConfiguration", _A = "PutBucketIntelligentTieringConfigurationRequest", AA = "PutBucketLogging", RA = "PutBucketLifecycleConfiguration", vA = "PutBucketLifecycleConfigurationOutput", wA = "PutBucketLifecycleConfigurationRequest", OA = "PutBucketLoggingRequest", TA = "PutBucketMetricsConfiguration", DA = "PutBucketMetricsConfigurationRequest", IA = "PutBucketNotificationConfiguration", LA = "PutBucketNotificationConfigurationRequest", MA = "PutBucketOwnershipControls", $A = "PutBucketOwnershipControlsRequest", UA = "PutBucketPolicy", NA = "PutBucketPolicyRequest", GA = "PutBucketReplication", jA = "PutBucketRequestPayment", zA = "PutBucketRequestPaymentRequest", qA = "PutBucketReplicationRequest", HA = "PutBucketTagging", FA = "PutBucketTaggingRequest", VA = "PutBucketVersioning", KA = "PutBucketVersioningRequest", WA = "PutBucketWebsite", ZA = "PutBucketWebsiteRequest", Fs = "PartsCount", XA = "PartitionDateSource", JA = "ProgressEvent", QA = "ParquetInput", YA = "PartsList", yr = "PartNumber", Vs = "PartNumberMarker", tR = "PutObject", eR = "PutObjectAcl", rR = "PutObjectAclOutput", oR = "PutObjectAclRequest", nR = "PutObjectLockConfiguration", sR = "PutObjectLockConfigurationOutput", iR = "PutObjectLockConfigurationRequest", aR = "PutObjectLegalHold", cR = "PutObjectLegalHoldOutput", uR = "PutObjectLegalHoldRequest", mR = "PutObjectOutput", pR = "PutObjectRequest", lR = "PutObjectRetentionOutput", dR = "PutObjectRetentionRequest", fR = "PutObjectRetention", gR = "PutObjectTagging", xR = "PutObjectTaggingOutput", hR = "PutObjectTaggingRequest", ws = "PartitionedPrefix", CR = "PutPublicAccessBlock", yR = "PutPublicAccessBlockRequest", Hg = "PolicyStatus", Ks = "Parts", Ws = "Part", ER = "Parquet", Fg = "Payer", Vg = "Payload", Kg = "Permission", Wg = "Policy", Zg = "Progress", SR = "Priority", Xg = "Protocol", bR = "Quiet", kR = "QueueArn", Jg = "QuoteCharacter", BR = "QueueConfigurationList", PR = "QueueConfigurations", Qg = "QueueConfiguration", Yg = "QuoteEscapeCharacter", _R = "QuoteFields", AR = "Queue", un = "Rules", ju = "RedirectAllRequestsTo", lt = "RequestCharged", tx = "ResponseCacheControl", ex = "ResponseContentDisposition", rx = "ResponseContentEncoding", ox = "ResponseContentLanguage", nx = "ResponseContentType", Os = "ReplicationConfiguration", zu = "RecordDelimiter", sx = "ResponseExpires", RR = "RestoreExpiryDate", Zs = "RecordExpiration", vR = "RecordsEvent", wR = "ReplicaKmsKeyID", OR = "ReplaceKeyPrefixWith", TR = "ReplaceKeyWith", ix = "ReplicaModifications", DR = "RenameObject", IR = "RenameObjectOutput", LR = "RestoreObjectOutput", MR = "RestoreOutputPath", $R = "RenameObjectRequest", UR = "RestoreObjectRequest", NR = "RestoreObject", nt = "RequestPayer", df = "RestrictPublicBuckets", Ts = "RequestPaymentConfiguration", ax = "RequestProgress", qu = "RoutingRules", GR = "ReplicationRuleAndOperator", jR = "ReplicationRuleFilter", zR = "ReplicationRule", qR = "ReplicationRules", HR = "RequestRoute", mu = "RestoreRequest", cx = "RoutingRule", Hu = "ReplicationStatus", Fu = "RestoreStatus", FR = "RenameSource", ux = "ReplicationTime", VR = "ReplicationTimeValue", KR = "RequestToken", WR = "RetainUntilDate", Ds = "Range", Vu = "Restore", ZR = "Records", mx = "Redirect", Is = "Retention", XR = "Role", so = "Rule", Ft = "Status", px = "StartAfter", ff = "SecretAccessKey", JR = "SseAlgorithm", QR = "StreamingBlob", lx = "S3BucketDestination", Vt = "StorageClass", dx = "StorageClassAnalysis", YR = "StorageClassAnalysisDataExport", t3 = "SessionCredentialValue", e3 = "SessionCredentials", r3 = "StatusCode", o3 = "SkipDestinationValidation", n3 = "StatsEvent", s3 = "SourceIfMatch", i3 = "SourceIfModifiedSince", a3 = "SourceIfNoneMatch", c3 = "SourceIfUnmodifiedSince", fx = "SSE-KMS", gx = "SseKmsEncryptedObjects", u3 = "S3KeyFilter", m3 = "S3Key", p3 = "S3Location", l3 = "SessionMode", d3 = "SelectObjectContent", f3 = "SelectObjectContentEventStream", g3 = "SelectObjectContentOutput", x3 = "SelectObjectContentRequest", xx = "SelectParameters", Ls = "SimplePrefix", hx = "ScanRange", Cx = "SSE-S3", yx = "SourceSelectionCriteria", ce = "ServerSideEncryption", h3 = "SSEAlgorithm", C3 = "ServerSideEncryptionByDefault", Ms = "ServerSideEncryptionConfiguration", Tt = "SSECustomerAlgorithm", _e = "SSECustomerKey", Dt = "SSECustomerKeyMD5", Ex = "SSEKMS", Xe = "SSEKMSEncryptionContext", ne = "SSEKMSKeyId", y3 = "ServerSideEncryptionRule", E3 = "ServerSideEncryptionRules", Sx = "SSES3", gf = "SessionToken", bx = "S3TablesDestination", kx = "S3TablesDestinationResult", S3 = "S3", b3 = "Schedule", io = "Size", k3 = "Start", Bx = "Stats", B3 = "Suffix", ao = "Tags", Ku = "TableArn", P3 = "TopicArn", _3 = "TargetBucket", Wu = "TableBucketArn", A3 = "TableBucketType", Zu = "TagCount", R3 = "TopicConfigurationList", v3 = "TopicConfigurations", Px = "TopicConfiguration", w3 = "TaggingDirective", Xu = "TransitionDefaultMinimumObjectSize", _x = "TargetGrants", O3 = "TargetGrant", T3 = "TieringList", D3 = "TransitionList", I3 = "TooManyParts", Ax = "TableNamespace", Xs = "TableName", Rx = "TargetObjectKeyFormat", L3 = "TargetPrefix", M3 = "TotalPartsCount", Js = "TagSet", vx = "TableStatus", Ae = "Tag", De = "Tagging", wx = "Tier", $3 = "Tierings", Ox = "Tiering", U3 = "Time", Tx = "Token", N3 = "Topic", G3 = "Transitions", Dx = "Transition", mn = "Type", j3 = "Uploads", z3 = "UpdateBucketMetadataInventoryTableConfiguration", q3 = "UpdateBucketMetadataInventoryTableConfigurationRequest", H3 = "UpdateBucketMetadataJournalTableConfiguration", F3 = "UpdateBucketMetadataJournalTableConfigurationRequest", sr = "UploadId", Ix = "UploadIdMarker", Lx = "UserMetadata", V3 = "UploadPart", K3 = "UploadPartCopy", W3 = "UploadPartCopyOutput", Z3 = "UploadPartCopyRequest", X3 = "UploadPartOutput", J3 = "UploadPartRequest", Q3 = "URI", Y3 = "Upload", Ju = "Value", $s = "VersioningConfiguration", ot = "VersionId", Mx = "VersionIdMarker", tv = "Versions", ev = "Version", Us = "WebsiteConfiguration", rv = "WriteGetObjectResponse", ov = "WriteGetObjectResponseRequest", nv = "WriteOffsetBytes", pn = "WebsiteRedirectLocation", sv = "Years", $x = "accept-ranges", iv = "bucket-region", ue = "client", Er = "continuation-token", Qs = "delimiter", me = "error", Qu = "eventPayload", av = "endpoint", Ys = "encoding-type", cv = "fetch-owner", R = "http", Ce = "httpError", n = "httpHeader", uv = "hostLabel", tt = "httpPayload", co = "httpPrefixHeaders", D = "httpQuery", Ux = "http://www.w3.org/2001/XMLSchema-instance", Re = "id", mv = "idempotencyToken", Nx = "key-marker", pv = "marker", lv = "max-buckets", dv = "max-directory-buckets", Yu = "max-keys", fv = "max-parts", gv = "max-uploads", ln = "prefix", ti = "partNumber", xv = "part-number-marker", Gx = "response-cache-control", jx = "response-content-disposition", zx = "response-content-encoding", qx = "response-content-language", Hx = "response-content-type", Fx = "response-expires", Vx = "streaming", hv = "start-after", Kx = "smithy.ts.sdk.synthetic.com.amazonaws.s3", dn = "uploadId", Cv = "upload-id-marker", pe = "versionId", yv = "version-id-marker", Wx = "xsi", Ev = "xmlAttribute", z = "xmlFlattened", y = "xmlName", Zx = "xmlNamespace", uo = "x-amz-acl", Xx = "x-amz-abort-date", Sv = "x-amz-access-point-alias", Jx = "x-amz-abort-rule-id", bv = "x-amz-archive-status", Qx = "x-amz-bucket-arn", tm = "x-amz-bypass-governance-retention", kv = "x-amz-bucket-location-name", Bv = "x-amz-bucket-location-type", Pv = "x-amz-bucket-object-lock-enabled", Yx = "x-amz-bucket-object-lock-token", _v = "x-amz-bucket-region", em = "x-amz-checksum-algorithm", Sr = "x-amz-checksum-crc32", br = "x-amz-checksum-crc32c", kr = "x-amz-checksum-crc64nvme", t0 = "x-amz-checksum-mode", Av = "x-amz-confirm-remove-self-bucket-access", Br = "x-amz-checksum-sha1", Pr = "x-amz-checksum-sha256", e0 = "x-amz-copy-source", r0 = "x-amz-copy-source-if-match", o0 = "x-amz-copy-source-if-modified-since", n0 = "x-amz-copy-source-if-none-match", s0 = "x-amz-copy-source-if-unmodified-since", Rv = "x-amz-create-session-mode", vv = "x-amz-copy-source-range", i0 = "x-amz-copy-source-server-side-encryption-customer-algorithm", a0 = "x-amz-copy-source-server-side-encryption-customer-key", c0 = "x-amz-copy-source-server-side-encryption-customer-key-MD5", u0 = "x-amz-copy-source-version-id", mo = "x-amz-checksum-type", wv = "x-amz-client-token", ei = "x-amz-delete-marker", fn = "x-amz-expiration", O = "x-amz-expected-bucket-owner", Ov = "x-amz-fwd-error-code", Tv = "x-amz-fwd-error-message", Dv = "x-amz-fwd-header-Cache-Control", Iv = "x-amz-fwd-header-Content-Disposition", Lv = "x-amz-fwd-header-Content-Encoding", Mv = "x-amz-fwd-header-Content-Language", $v = "x-amz-fwd-header-Content-Range", Uv = "x-amz-fwd-header-Content-Type", Nv = "x-amz-fwd-header-ETag", Gv = "x-amz-fwd-header-Expires", jv = "x-amz-fwd-header-Last-Modified", zv = "x-amz-fwd-header-accept-ranges", qv = "x-amz-fwd-header-x-amz-checksum-crc32", Hv = "x-amz-fwd-header-x-amz-checksum-crc32c", Fv = "x-amz-fwd-header-x-amz-checksum-crc64nvme", Vv = "x-amz-fwd-header-x-amz-checksum-sha1", Kv = "x-amz-fwd-header-x-amz-checksum-sha256", Wv = "x-amz-fwd-header-x-amz-delete-marker", Zv = "x-amz-fwd-header-x-amz-expiration", Xv = "x-amz-fwd-header-x-amz-missing-meta", Jv = "x-amz-fwd-header-x-amz-mp-parts-count", Qv = "x-amz-fwd-header-x-amz-object-lock-legal-hold", Yv = "x-amz-fwd-header-x-amz-object-lock-mode", tw = "x-amz-fwd-header-x-amz-object-lock-retain-until-date", ew = "x-amz-fwd-header-x-amz-restore", rw = "x-amz-fwd-header-x-amz-request-charged", ow = "x-amz-fwd-header-x-amz-replication-status", nw = "x-amz-fwd-header-x-amz-storage-class", sw = "x-amz-fwd-header-x-amz-server-side-encryption", iw = "x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id", aw = "x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled", cw = "x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm", uw = "x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5", mw = "x-amz-fwd-header-x-amz-tagging-count", pw = "x-amz-fwd-header-x-amz-version-id", lw = "x-amz-fwd-status", po = "x-amz-grant-full-control", lo = "x-amz-grant-read", fo = "x-amz-grant-read-acp", rm = "x-amz-grant-write", go = "x-amz-grant-write-acp", dw = "x-amz-if-match-initiated-time", fw = "x-amz-if-match-last-modified-time", gw = "x-amz-if-match-size", xo = "x-amz-meta-", om = "x-amz-mfa", xw = "x-amz-metadata-directive", m0 = "x-amz-missing-meta", hw = "x-amz-mp-object-size", Cw = "x-amz-max-parts", p0 = "x-amz-mp-parts-count", yw = "x-amz-object-attributes", gn = "x-amz-object-lock-legal-hold", xn = "x-amz-object-lock-mode", hn = "x-amz-object-lock-retain-until-date", Ew = "x-amz-object-ownership", nm = "x-amz-optional-object-attributes", Sw = "x-amz-object-size", bw = "x-amz-part-number-marker", l0 = "x-amz-restore", dt = "x-amz-request-charged", kw = "x-amz-restore-output-path", st = "x-amz-request-payer", Bw = "x-amz-request-route", d0 = "x-amz-replication-status", Pw = "x-amz-rename-source", _w = "x-amz-rename-source-if-match", Aw = "x-amz-rename-source-if-modified-since", Rw = "x-amz-rename-source-if-none-match", vw = "x-amz-rename-source-if-unmodified-since", ww = "x-amz-request-token", Cn = "x-amz-storage-class", ct = "x-amz-sdk-checksum-algorithm", Ow = "x-amz-skip-destination-validation", f0 = "x-amz-source-expected-bucket-owner", ye = "x-amz-server-side-encryption", Ee = "x-amz-server-side-encryption-aws-kms-key-id", Se = "x-amz-server-side-encryption-bucket-key-enabled", ir = "x-amz-server-side-encryption-context", jt = "x-amz-server-side-encryption-customer-algorithm", Le = "x-amz-server-side-encryption-customer-key", zt = "x-amz-server-side-encryption-customer-key-MD5", sm = "x-amz-tagging", g0 = "x-amz-tagging-count", Tw = "x-amz-tagging-directive", im = "x-amz-transition-default-minimum-object-size", He = "x-amz-version-id", Dw = "x-amz-write-offset-bytes", yn = "x-amz-website-redirect-location", Iw = "xsi:type", i = "com.amazonaws.s3", x0 = [0, i, yu, 8, 0], xf = [0, i, t3, 8, 0], Me = [0, i, _e, 8, 0], ar = [0, i, Xe, 8, 0], Ht = [0, i, ne, 8, 0], En = [0, i, QR, { [Vx]: 1 }, 42], h0 = [3, i, ys, 0, [Ft], [0]], Lw = [3, i, Ef, 0, [IS], [1]], Mw = [3, i, OE, 0, [lt], [[0, { [n]: dt }]]], $w = [3, i, TE, 0, [P, W, sr, nt, w, QB], [[0, 1], [0, 1], [0, { [D]: dn }], [0, { [n]: st }], [0, { [n]: O }], [6, { [n]: dw }]]], Uw = [3, i, Cs, 0, [Ft], [0]], C0 = [3, i, gr, 0, [zs, Ie], [[() => oi, { [y]: Ns }], () => Je]], Nw = [3, i, Cf, 0, [Ie], [0]], Gw = [3, i, kE, 0, [mt, ao], [0, [() => Qe, { [y]: Ae, [z]: 1 }]]], am = [3, i, Fo, 0, [Ot, Ze, dx], [0, [() => W2, 0], () => o2]], jw = [3, i, BE, 0, [lx], [() => zw]], zw = [3, i, UE, 0, [cg, zE, P, mt], [0, 0, 0, 0]], qw = [3, i, Bf, 0, [ku], [[() => P2, { [z]: 1 }]]], Hw = [3, i, P, 0, [Cr, oS, fu, lu], [0, 4, 0, 0]], Fw = [-3, i, jE, { [me]: ue, [Ce]: 409 }, [], []];
Lt.for(i).registerError(Fw, is);
var Vw = [-3, i, qE, { [me]: ue, [Ce]: 409 }, [], []];
Lt.for(i).registerError(Vw, as);
var Kw = [3, i, HE, 0, [Ob, mn], [0, 0]], Ww = [3, i, FE, 0, [un], [[() => N0, { [y]: so, [z]: 1 }]]], Zw = [3, i, Es, 0, [Lu], [[() => B0, 0]]], Xw = [3, i, Rf, 0, [Yt, te, ee, re, oe, he], [0, 0, 0, 0, 0, 0]], Jw = [3, i, hS, 0, [mt], [0]], Qw = [3, i, aS, 0, [Ks], [[() => b2, { [y]: Ws, [z]: 1 }]]], Yw = [3, i, ES, 0, [Gt, Yt, te, ee, re, oe, yr], [0, 0, 0, 0, 0, 0, 1]], tO = [3, i, cS, { [y]: mS }, [Ps, P, W, je, Gt, Yt, te, ee, re, oe, he, ce, ot, ne, Qt, lt], [0, 0, 0, [0, { [n]: fn }], 0, 0, 0, 0, 0, 0, 0, [0, { [n]: ye }], [0, { [n]: He }], [() => Ht, { [n]: Ee }], [2, { [n]: Se }], [0, { [n]: dt }]]], eO = [3, i, pS, 0, [P, W, Rg, sr, Yt, te, ee, re, oe, he, v_, nt, w, Qr, an, Tt, _e, Dt], [[0, 1], [0, 1], [() => Qw, { [y]: vf, [tt]: 1 }], [0, { [D]: dn }], [0, { [n]: Sr }], [0, { [n]: br }], [0, { [n]: kr }], [0, { [n]: Br }], [0, { [n]: Pr }], [0, { [n]: mo }], [1, { [n]: hw }], [0, { [n]: st }], [0, { [n]: O }], [0, { [n]: hr }], [0, { [n]: Yr }], [0, { [n]: jt }], [() => Me, { [n]: Le }], [0, { [n]: zt }]]], rO = [3, i, qf, 0, [qB, BP], [0, 0]], oO = [3, i, nS, 0, [], []], nO = [3, i, gS, 0, [Of, je, zf, ot, ce, Tt, Dt, ne, Xe, Qt, lt], [[() => iO, 16], [0, { [n]: fn }], [0, { [n]: u0 }], [0, { [n]: He }], [0, { [n]: ye }], [0, { [n]: jt }], [0, { [n]: zt }], [() => Ht, { [n]: Ee }], [() => ar, { [n]: ir }], [2, { [n]: Se }], [0, { [n]: dt }]]], sO = [3, i, xS, 0, [Gr, P, jr, Q, zr, qr, Hr, Fr, If, Lf, Mf, $f, Uf, Te, Kr, Wr, Zr, Xr, Qr, an, W, to, __, w3, ce, Vt, pn, Tt, _e, Dt, ne, Xe, Qt, Nf, yu, Gf, nt, De, oo, no, ro, w, eg], [[0, { [n]: uo }], [0, 1], [0, { [n]: Jo }], [0, { [n]: em }], [0, { [n]: Qo }], [0, { [n]: Yo }], [0, { [n]: tn }], [0, { [n]: on }], [0, { [n]: e0 }], [0, { [n]: r0 }], [4, { [n]: o0 }], [0, { [n]: n0 }], [4, { [n]: s0 }], [4, { [n]: Te }], [0, { [n]: po }], [0, { [n]: lo }], [0, { [n]: fo }], [0, { [n]: go }], [0, { [n]: hr }], [0, { [n]: Yr }], [0, 1], [128, { [co]: xo }], [0, { [n]: xw }], [0, { [n]: Tw }], [0, { [n]: ye }], [0, { [n]: Cn }], [0, { [n]: yn }], [0, { [n]: jt }], [() => Me, { [n]: Le }], [0, { [n]: zt }], [() => Ht, { [n]: Ee }], [() => ar, { [n]: ir }], [2, { [n]: Se }], [0, { [n]: i0 }], [() => x0, { [n]: a0 }], [0, { [n]: c0 }], [0, { [n]: st }], [0, { [n]: sm }], [0, { [n]: xn }], [5, { [n]: hn }], [0, { [n]: gn }], [0, { [n]: O }], [0, { [n]: f0 }]]], iO = [3, i, Of, 0, [Gt, qe, he, Yt, te, ee, re, oe], [0, 4, 0, 0, 0, 0, 0, 0]], aO = [3, i, Tf, 0, [Gt, qe, Yt, te, ee, re, oe], [0, 4, 0, 0, 0, 0, 0]], cO = [3, i, Ss, 0, [xu], [[() => U0, { [y]: hu, [z]: 1 }]]], uO = [3, i, hu, 0, [Jr, _E, vE, IE, Ub, B_], [0, [64, { [y]: AE, [z]: 1 }], [64, { [y]: DE, [z]: 1 }], [64, { [y]: LE, [z]: 1 }], [64, { [y]: Nb, [z]: 1 }], 1]], mO = [3, i, ou, 0, [su, Ps, P, ao], [0, () => f1, () => Kw, [() => Qe, 0]]], pO = [3, i, QE, 0, [P, ht, Q, au, w], [[0, 1], [0, { [n]: xt }], [0, { [n]: ct }], [() => g1, { [y]: au, [tt]: 1 }], [0, { [n]: O }]]], lO = [3, i, tS, 0, [P, ht, Q, cu, w], [[0, 1], [0, { [n]: xt }], [0, { [n]: ct }], [() => C1, { [y]: cu, [tt]: 1 }], [0, { [n]: O }]]], dO = [3, i, eS, 0, [Ps, lu], [[0, { [n]: Ps }], [0, { [n]: Qx }]]], fO = [3, i, rS, 0, [Gr, P, ou, Kr, Wr, Zr, Au, Xr, Q_, Gg], [[0, { [n]: uo }], [0, 1], [() => mO, { [y]: ou, [tt]: 1 }], [0, { [n]: po }], [0, { [n]: lo }], [0, { [n]: fo }], [0, { [n]: rm }], [0, { [n]: go }], [2, { [n]: Pv }], [0, { [n]: Ew }]]], gO = [3, i, uS, { [y]: eP }, [yf, bf, P, W, sr, ce, Tt, Dt, ne, Xe, Qt, lt, Q, he], [[4, { [n]: Xx }], [0, { [n]: Jx }], [0, { [y]: P }], 0, 0, [0, { [n]: ye }], [0, { [n]: jt }], [0, { [n]: zt }], [() => Ht, { [n]: Ee }], [() => ar, { [n]: ir }], [2, { [n]: Se }], [0, { [n]: dt }], [0, { [n]: em }], [0, { [n]: mo }]]], xO = [3, i, lS, 0, [Gr, P, jr, zr, qr, Hr, Fr, Te, Kr, Wr, Zr, Xr, W, to, ce, Vt, pn, Tt, _e, Dt, ne, Xe, Qt, nt, De, oo, no, ro, w, Q, he], [[0, { [n]: uo }], [0, 1], [0, { [n]: Jo }], [0, { [n]: Qo }], [0, { [n]: Yo }], [0, { [n]: tn }], [0, { [n]: on }], [4, { [n]: Te }], [0, { [n]: po }], [0, { [n]: lo }], [0, { [n]: fo }], [0, { [n]: go }], [0, 1], [128, { [co]: xo }], [0, { [n]: ye }], [0, { [n]: Cn }], [0, { [n]: yn }], [0, { [n]: jt }], [() => Me, { [n]: Le }], [0, { [n]: zt }], [() => Ht, { [n]: Ee }], [() => ar, { [n]: ir }], [2, { [n]: Se }], [0, { [n]: st }], [0, { [n]: sm }], [0, { [n]: xn }], [5, { [n]: hn }], [0, { [n]: gn }], [0, { [n]: O }], [0, { [n]: em }], [0, { [n]: mo }]]], hO = [3, i, bS, { [y]: kS }, [ce, ne, Xe, Qt, mf], [[0, { [n]: ye }], [() => Ht, { [n]: Ee }], [() => ar, { [n]: ir }], [2, { [n]: Se }], [() => ZI, { [y]: mf }]]], CO = [3, i, PS, 0, [l3, P, ce, ne, Xe, Qt], [[0, { [n]: Rv }], [0, 1], [0, { [n]: ye }], [() => Ht, { [n]: Ee }], [() => ar, { [n]: ir }], [2, { [n]: Se }]]], yO = [3, i, _S, 0, [Fb, TS, Yg, zu, ig, Jg, $E], [0, 0, 0, 0, 0, 0, 2]], EO = [3, i, AS, 0, [_R, Yg, zu, ig, Jg], [0, 0, 0, 0, 0]], SO = [3, i, Kf, 0, [Tg, Vr, sv], [0, 1, 1]], bO = [3, i, nu, 0, [mA, bR], [[() => L2, { [y]: qg, [z]: 1 }], 2]], kO = [3, i, $S, 0, [P, Ot, w], [[0, 1], [0, { [D]: Re }], [0, { [n]: O }]]], BO = [3, i, NS, 0, [P, w], [[0, 1], [0, { [n]: O }]]], PO = [3, i, jS, 0, [P, w], [[0, 1], [0, { [n]: O }]]], _O = [3, i, FS, 0, [P, Ot, w], [[0, 1], [0, { [D]: Re }], [0, { [n]: O }]]], AO = [3, i, qS, 0, [P, Ot, w], [[0, 1], [0, { [D]: Re }], [0, { [n]: O }]]], RO = [3, i, KS, 0, [P, w], [[0, 1], [0, { [n]: O }]]], vO = [3, i, ZS, 0, [P, w], [[0, 1], [0, { [n]: O }]]], wO = [3, i, YS, 0, [P, w], [[0, 1], [0, { [n]: O }]]], OO = [3, i, XS, 0, [P, Ot, w], [[0, 1], [0, { [D]: Re }], [0, { [n]: O }]]], TO = [3, i, eb, 0, [P, w], [[0, 1], [0, { [n]: O }]]], DO = [3, i, ob, 0, [P, w], [[0, 1], [0, { [n]: O }]]], IO = [3, i, sb, 0, [P, w], [[0, 1], [0, { [n]: O }]]], LO = [3, i, nb, 0, [P, w], [[0, 1], [0, { [n]: O }]]], MO = [3, i, cb, 0, [P, w], [[0, 1], [0, { [n]: O }]]], $O = [3, i, mb, 0, [P, w], [[0, 1], [0, { [n]: O }]]], UO = [3, i, Cb, 0, [W, ot, xr, hb], [0, 0, 2, 0]], NO = [3, i, xb, 0, [Ie, W, ot, fg, qe], [() => Je, 0, 0, 2, 4]], GO = [3, i, Ff, 0, [Ft], [0]], jO = [3, i, yb, 0, [xr, ot, lt], [[2, { [n]: ei }], [0, { [n]: He }], [0, { [n]: dt }]]], zO = [3, i, Sb, 0, [P, W, $u, ot, nt, du, w, Qr, YB, tP], [[0, 1], [0, 1], [0, { [n]: om }], [0, { [D]: pe }], [0, { [n]: st }], [2, { [n]: tm }], [0, { [n]: O }], [0, { [n]: hr }], [6, { [n]: fw }], [1, { [n]: gw }]]], qO = [3, i, Eb, { [y]: Tb }, [Db, lt, ng], [[() => k2, { [z]: 1 }], [0, { [n]: dt }], [() => _2, { [y]: sn, [z]: 1 }]]], HO = [3, i, bb, 0, [P, nu, $u, nt, du, w, Q], [[0, 1], [() => bO, { [y]: nu, [tt]: 1 }], [0, { [n]: om }], [0, { [n]: st }], [2, { [n]: tm }], [0, { [n]: O }], [0, { [n]: ct }]]], FO = [3, i, Bb, 0, [ot], [[0, { [n]: He }]]], VO = [3, i, Pb, 0, [P, W, ot, w], [[0, 1], [0, 1], [0, { [D]: pe }], [0, { [n]: O }]]], KO = [3, i, wb, 0, [P, w], [[0, 1], [0, { [n]: O }]]], WO = [3, i, js, 0, [P, bE, Vt, Cf, nn, ux, Og], [0, 0, 0, () => Nw, () => JO, () => TI, () => E1]], ZO = [3, i, Wf, 0, [A3, Wu, Ax], [0, 0, 0]], XO = [3, i, Bu, 0, [ku, bP, SP], [0, [() => Ht, 0], 0]], JO = [3, i, nn, 0, [wR], [0]], QO = [-3, i, zb, { [me]: ue, [Ce]: 400 }, [], []];
Lt.for(i).registerError(QO, ls);
var YO = [3, i, $b, 0, [], []], tT = [3, i, sn, 0, [W, ot, OS, T_], [0, 0, 0, 0]], cm = [3, i, Mb, 0, [Qf, Yf], [0, 0]], y0 = [3, i, bu, 0, [W], [0]], eT = [3, i, Jf, 0, [], []], rT = [3, i, tg, 0, [Ft], [0]], oT = [3, i, ag, 0, [Cr, Ju], [0, 0]], nT = [3, i, nk, 0, [ys], [[() => h0, 16]]], sT = [3, i, ik, 0, [P, w], [[0, 1], [0, { [n]: O }]]], iT = [3, i, Yb, { [y]: Cs }, [Ft, lt], [0, [0, { [n]: dt }]]], aT = [3, i, ek, 0, [P, w, nt], [[0, 1], [0, { [n]: O }], [0, { [n]: st }]]], cT = [3, i, sk, { [y]: gr }, [Ie, zs], [() => Je, [() => oi, { [y]: Ns }]]], uT = [3, i, ak, 0, [P, w], [[0, 1], [0, { [n]: O }]]], mT = [3, i, tk, 0, [Fo], [[() => am, 16]]], pT = [3, i, rk, 0, [P, Ot, w], [[0, 1], [0, { [D]: Re }], [0, { [n]: O }]]], lT = [3, i, mk, { [y]: Ss }, [xu], [[() => U0, { [y]: hu, [z]: 1 }]]], dT = [3, i, pk, 0, [P, w], [[0, 1], [0, { [n]: O }]]], fT = [3, i, dk, 0, [Ms], [[() => M0, 16]]], gT = [3, i, fk, 0, [P, w], [[0, 1], [0, { [n]: O }]]], xT = [3, i, yk, 0, [Ko], [[() => um, 16]]], hT = [3, i, Ek, 0, [P, Ot, w], [[0, 1], [0, { [D]: Re }], [0, { [n]: O }]]], CT = [3, i, xk, 0, [Vo], [[() => mm, 16]]], yT = [3, i, hk, 0, [P, Ot, w], [[0, 1], [0, { [D]: Re }], [0, { [n]: O }]]], ET = [3, i, kk, { [y]: iu }, [un, Xu], [[() => N0, { [y]: so, [z]: 1 }], [0, { [n]: im }]]], ST = [3, i, Bk, 0, [P, w], [[0, 1], [0, { [n]: O }]]], bT = [3, i, Pk, { [y]: su }, [su], [0]], kT = [3, i, Ak, 0, [P, w], [[0, 1], [0, { [n]: O }]]], BT = [3, i, _k, { [y]: Es }, [Lu], [[() => B0, 0]]], PT = [3, i, Rk, 0, [P, w], [[0, 1], [0, { [n]: O }]]], _T = [3, i, Ok, 0, [ug], [[() => RT, 16]]], AT = [3, i, Dk, 0, [P, w], [[0, 1], [0, { [n]: O }]]], RT = [3, i, ug, 0, [kg], [() => x1]], vT = [3, i, $k, 0, [mg], [[() => OT, 16]]], wT = [3, i, Uk, 0, [P, w], [[0, 1], [0, { [n]: O }]]], OT = [3, i, mg, 0, [Ag, Ft, sn], [() => y1, 0, () => cm]], TT = [3, i, Tk, 0, [Wo], [[() => lm, 16]]], DT = [3, i, Ik, 0, [P, Ot, w], [[0, 1], [0, { [D]: Re }], [0, { [n]: O }]]], IT = [3, i, Gk, 0, [P, w], [[0, 1], [0, { [n]: O }]]], LT = [3, i, zk, 0, [As], [[() => w0, 16]]], MT = [3, i, qk, 0, [P, w], [[0, 1], [0, { [n]: O }]]], $T = [3, i, Fk, 0, [Wg], [[0, 16]]], UT = [3, i, Vk, 0, [P, w], [[0, 1], [0, { [n]: O }]]], NT = [3, i, Wk, 0, [Hg], [[() => j1, 16]]], GT = [3, i, Zk, 0, [P, w], [[0, 1], [0, { [n]: O }]]], jT = [3, i, Jk, 0, [Os], [[() => D0, 16]]], zT = [3, i, eB, 0, [P, w], [[0, 1], [0, { [n]: O }]]], qT = [3, i, Yk, { [y]: Ts }, [Fg], [0]], HT = [3, i, tB, 0, [P, w], [[0, 1], [0, { [n]: O }]]], FT = [3, i, oB, { [y]: De }, [Js], [[() => Qe, 0]]], VT = [3, i, nB, 0, [P, w], [[0, 1], [0, { [n]: O }]]], KT = [3, i, iB, { [y]: $s }, [Ft, _g], [0, [0, { [y]: Bg }]]], WT = [3, i, aB, 0, [P, w], [[0, 1], [0, { [n]: O }]]], ZT = [3, i, uB, { [y]: Us }, [ju, wu, bu, qu], [() => T0, () => S0, () => y0, [() => j0, 0]]], XT = [3, i, mB, 0, [P, w], [[0, 1], [0, { [n]: O }]]], JT = [3, i, dB, { [y]: gr }, [Ie, zs, lt], [() => Je, [() => oi, { [y]: Ns }], [0, { [n]: dt }]]], QT = [3, i, xB, 0, [P, W, ot, nt, w], [[0, 1], [0, 1], [0, { [D]: pe }], [0, { [n]: st }], [0, { [n]: O }]]], YT = [3, i, fB, { [y]: hB }, [xr, qe, ot, lt, Gt, Rf, nA, Vt, iA], [[2, { [n]: ei }], [4, { [n]: Mu }], [0, { [n]: He }], [0, { [n]: dt }], 0, () => Xw, [() => tD, 0], 0, 1]], tD = [3, i, gB, 0, [M3, Vs, Mg, Hs, ze, Ks], [[1, { [y]: Fs }], 0, 0, 1, 2, [() => N2, { [y]: Ws, [z]: 1 }]]], eD = [3, i, CB, 0, [P, W, ot, Hs, Vs, Tt, _e, Dt, nt, w, H_], [[0, 1], [0, 1], [0, { [D]: pe }], [1, { [n]: Cw }], [0, { [n]: bw }], [0, { [n]: jt }], [() => Me, { [n]: Le }], [0, { [n]: zt }], [0, { [n]: st }], [0, { [n]: O }], [64, { [n]: yw }]]], rD = [3, i, BB, 0, [_s], [[() => A0, { [y]: _s, [tt]: 1 }]]], oD = [3, i, PB, 0, [P, W, ot, nt, w], [[0, 1], [0, 1], [0, { [D]: pe }], [0, { [n]: st }], [0, { [n]: O }]]], nD = [3, i, SB, 0, [Rs], [[() => _0, 16]]], sD = [3, i, bB, 0, [P, w], [[0, 1], [0, { [n]: O }]]], iD = [3, i, _B, 0, [Xo, xr, pu, je, Vu, qe, rn, Gt, Yt, te, ee, re, oe, he, Uu, ot, jr, zr, qr, Hr, Cu, Fr, Te, bs, pn, ce, to, Tt, Dt, ne, Qt, Vt, lt, Hu, Fs, Zu, oo, no, ro], [[() => En, 16], [2, { [n]: ei }], [0, { [n]: $x }], [0, { [n]: fn }], [0, { [n]: l0 }], [4, { [n]: Mu }], [1, { [n]: en }], [0, { [n]: Gt }], [0, { [n]: Sr }], [0, { [n]: br }], [0, { [n]: kr }], [0, { [n]: Br }], [0, { [n]: Pr }], [0, { [n]: mo }], [1, { [n]: m0 }], [0, { [n]: He }], [0, { [n]: Jo }], [0, { [n]: Qo }], [0, { [n]: Yo }], [0, { [n]: tn }], [0, { [n]: Df }], [0, { [n]: on }], [4, { [n]: Te }], [0, { [n]: bs }], [0, { [n]: yn }], [0, { [n]: ye }], [128, { [co]: xo }], [0, { [n]: jt }], [0, { [n]: zt }], [() => Ht, { [n]: Ee }], [2, { [n]: Se }], [0, { [n]: Cn }], [0, { [n]: dt }], [0, { [n]: d0 }], [1, { [n]: p0 }], [1, { [n]: g0 }], [0, { [n]: xn }], [5, { [n]: hn }], [0, { [n]: gn }]]], aD = [3, i, AB, 0, [P, Qr, gg, an, Cg, W, Ds, tx, ex, rx, ox, nx, sx, ot, Tt, _e, Dt, nt, yr, w, wf], [[0, 1], [0, { [n]: hr }], [4, { [n]: Ou }], [0, { [n]: Yr }], [4, { [n]: Du }], [0, 1], [0, { [n]: Ds }], [0, { [D]: Gx }], [0, { [D]: jx }], [0, { [D]: zx }], [0, { [D]: qx }], [0, { [D]: Hx }], [6, { [D]: Fx }], [0, { [D]: pe }], [0, { [n]: jt }], [() => Me, { [n]: Le }], [0, { [n]: zt }], [0, { [n]: st }], [1, { [D]: ti }], [0, { [n]: O }], [0, { [n]: t0 }]]], cD = [3, i, RB, 0, [Is], [[() => R0, { [y]: Is, [tt]: 1 }]]], uD = [3, i, vB, 0, [P, W, ot, nt, w], [[0, 1], [0, 1], [0, { [D]: pe }], [0, { [n]: st }], [0, { [n]: O }]]], mD = [3, i, TB, { [y]: De }, [ot, Js], [[0, { [n]: He }], [() => Qe, 0]]], pD = [3, i, IB, 0, [P, W, ot, w, nt], [[0, 1], [0, 1], [0, { [D]: pe }], [0, { [n]: O }], [0, { [n]: st }]]], lD = [3, i, DB, 0, [Xo, lt], [[() => En, 16], [0, { [n]: dt }]]], dD = [3, i, LB, 0, [P, W, nt, w], [[0, 1], [0, 1], [0, { [n]: st }], [0, { [n]: O }]]], fD = [3, i, UB, 0, [vs], [[() => O0, 16]]], gD = [3, i, NB, 0, [P, w], [[0, 1], [0, { [n]: O }]]], xD = [3, i, pg, 0, [wx], [0]], hD = [3, i, Ru, 0, [vu, Kg], [[() => E0, { [Zx]: [Wx, Ux] }], 0]], E0 = [3, i, vu, 0, [Su, Lb, Jr, Q3, mn], [0, 0, 0, 0, [0, { [y]: Iw, [Ev]: 1 }]]], CD = [3, i, jB, 0, [lu, KE, VE, fu, ME], [[0, { [n]: Qx }], [0, { [n]: Bv }], [0, { [n]: kv }], [0, { [n]: _v }], [2, { [n]: Sv }]]], yD = [3, i, zB, 0, [P, w], [[0, 1], [0, { [n]: O }]]], ED = [3, i, FB, 0, [xr, pu, je, Vu, GE, qe, rn, Yt, te, ee, re, oe, he, Gt, Uu, ot, jr, zr, qr, Hr, Fr, Cu, Te, bs, pn, ce, to, Tt, Dt, ne, Qt, Vt, lt, Hu, Fs, Zu, oo, no, ro], [[2, { [n]: ei }], [0, { [n]: $x }], [0, { [n]: fn }], [0, { [n]: l0 }], [0, { [n]: bv }], [4, { [n]: Mu }], [1, { [n]: en }], [0, { [n]: Sr }], [0, { [n]: br }], [0, { [n]: kr }], [0, { [n]: Br }], [0, { [n]: Pr }], [0, { [n]: mo }], [0, { [n]: Gt }], [1, { [n]: m0 }], [0, { [n]: He }], [0, { [n]: Jo }], [0, { [n]: Qo }], [0, { [n]: Yo }], [0, { [n]: tn }], [0, { [n]: on }], [0, { [n]: Df }], [4, { [n]: Te }], [0, { [n]: bs }], [0, { [n]: yn }], [0, { [n]: ye }], [128, { [co]: xo }], [0, { [n]: jt }], [0, { [n]: zt }], [() => Ht, { [n]: Ee }], [2, { [n]: Se }], [0, { [n]: Cn }], [0, { [n]: dt }], [0, { [n]: d0 }], [1, { [n]: p0 }], [1, { [n]: g0 }], [0, { [n]: xn }], [5, { [n]: hn }], [0, { [n]: gn }]]], SD = [3, i, VB, 0, [P, Qr, gg, an, Cg, W, Ds, tx, ex, rx, ox, nx, sx, ot, Tt, _e, Dt, nt, yr, w, wf], [[0, 1], [0, { [n]: hr }], [4, { [n]: Ou }], [0, { [n]: Yr }], [4, { [n]: Du }], [0, 1], [0, { [n]: Ds }], [0, { [D]: Gx }], [0, { [D]: jx }], [0, { [D]: zx }], [0, { [D]: qx }], [0, { [D]: Hx }], [6, { [D]: Fx }], [0, { [D]: pe }], [0, { [n]: jt }], [() => Me, { [n]: Le }], [0, { [n]: zt }], [0, { [n]: st }], [1, { [D]: ti }], [0, { [n]: O }], [0, { [n]: t0 }]]], bD = [-3, i, sP, { [me]: ue, [Ce]: 400 }, [], []];
Lt.for(i).registerError(bD, xs);
var S0 = [3, i, wu, 0, [B3], [0]], b0 = [3, i, Iu, 0, [Jr, Su], [0, 0]], k0 = [3, i, Tu, 0, [jf, wS, yg, ER], [() => yO, 0, () => ND, () => U1]], kD = [3, i, mP, 0, [mt, ao], [0, [() => Qe, { [y]: Ae, [z]: 1 }]]], um = [3, i, Ko, 0, [Ot, Ze, Ft, $3], [0, [() => BD, 0], 0, [() => H2, { [y]: Ox, [z]: 1 }]]], BD = [3, i, lP, 0, [mt, Ae, Zo], [0, () => ho, [() => kD, 0]]], PD = [-3, i, oP, { [me]: ue, [Ce]: 403 }, [Vt, kf], [0, 0]];
Lt.for(i).registerError(PD, us);
var _D = [-3, i, iP, { [me]: ue, [Ce]: 400 }, [], []];
Lt.for(i).registerError(_D, ds);
var AD = [-3, i, dP, { [me]: ue, [Ce]: 400 }, [], []];
Lt.for(i).registerError(AD, fs);
var mm = [3, i, Vo, 0, [js, ZB, Ze, Ot, nP, W_, b3], [[() => RD, 0], 2, () => wD, 0, 0, [() => w2, 0], () => TD]], RD = [3, i, WB, 0, [lx], [[() => OD, 0]]], vD = [3, i, XB, 0, [Sx, Ex], [[() => t2, { [y]: Cx }], [() => QI, { [y]: fx }]]], wD = [3, i, JB, 0, [mt], [0]], OD = [3, i, cP, 0, [RE, P, cg, mt, Bu], [0, 0, 0, 0, [() => vD, 0]]], TD = [3, i, uP, 0, [Xb], [0]], DD = [3, i, ks, 0, [Eu, nn], [0, () => pm]], ID = [3, i, hg, 0, [Eu, vx, sn, Xs, Ku], [0, 0, () => cm, 0, 0]], LD = [3, i, pP, 0, [Eu, nn], [0, () => pm]], MD = [3, i, Bs, 0, [Zs, nn], [() => fm, () => pm]], $D = [3, i, Eg, 0, [vx, sn, Xs, Ku, Zs], [0, () => cm, 0, 0, () => fm]], UD = [3, i, hP, 0, [Zs], [() => fm]], ND = [3, i, gP, 0, [mn], [0]], GD = [3, i, xP, 0, [zu], [0]], jD = [3, i, WP, 0, [Ot, KP, Pu, Ze], [0, [0, { [y]: sS }], [64, { [y]: _u, [z]: 1 }], [() => dm, 0]]], zD = [3, i, VP, 0, [Zf, Vr, Gb], [5, 1, 2]], qD = [3, i, C_, 0, [je, Jr, mt, Ze, Ft, G3, z_, $g, Ef], [() => zD, 0, 0, [() => FD, 0], 0, [() => V2, { [y]: Dx, [z]: 1 }], [() => I2, { [y]: Ug, [z]: 1 }], () => k1, () => Lw]], HD = [3, i, y_, 0, [mt, ao, jg, zg], [0, [() => Qe, { [y]: Ae, [z]: 1 }], 1, 1]], FD = [3, i, E_, 0, [mt, Ae, jg, zg, Zo], [0, () => ho, 1, 1, [() => HD, 0]]], VD = [3, i, vP, { [y]: wP }, [ze, ae, cn, hf], [2, 0, 0, [() => S2, { [y]: Fo, [z]: 1 }]]], KD = [3, i, OP, 0, [P, ae, w], [[0, 1], [0, { [D]: Er }], [0, { [n]: O }]]], WD = [3, i, MP, 0, [ze, ae, cn, xg], [2, 0, 0, [() => R2, { [y]: Ko, [z]: 1 }]]], ZD = [3, i, $P, 0, [P, ae, w], [[0, 1], [0, { [D]: Er }], [0, { [n]: O }]]], XD = [3, i, DP, { [y]: QP }, [ae, dg, ze, cn], [0, [() => v2, { [y]: Vo, [z]: 1 }], 2, 0]], JD = [3, i, IP, 0, [P, ae, w], [[0, 1], [0, { [D]: Er }], [0, { [n]: O }]]], QD = [3, i, NP, { [y]: YP }, [ze, ae, cn, bg], [2, 0, 0, [() => T2, { [y]: Wo, [z]: 1 }]]], YD = [3, i, GP, 0, [P, ae, w], [[0, 1], [0, { [D]: Er }], [0, { [n]: O }]]], t1 = [3, i, jP, { [y]: PP }, [gu, Ie, ae, mt], [[() => $0, 0], () => Je, 0, 0]], e1 = [3, i, zP, 0, [P_, ae, mt, fu], [[1, { [D]: lv }], [0, { [D]: Er }], [0, { [D]: ln }], [0, { [D]: iv }]]], r1 = [3, i, HP, { [y]: _P }, [gu, ae], [[() => $0, 0], 0]], o1 = [3, i, FP, 0, [ae, A_], [[0, { [D]: Er }], [1, { [D]: dv }]]], n1 = [3, i, r_, { [y]: o_ }, [P, qs, Ix, Ig, mt, or, G_, vg, ze, j3, Gs, nr, lt], [0, 0, 0, 0, 0, 0, 0, 1, 2, [() => D2, { [y]: Y3, [z]: 1 }], [() => ri, { [z]: 1 }], 0, [0, { [n]: dt }]]], s1 = [3, i, n_, 0, [P, or, nr, qs, vg, mt, Ix, w, nt], [[0, 1], [0, { [D]: Qs }], [0, { [D]: Ys }], [0, { [D]: Nx }], [1, { [D]: gv }], [0, { [D]: ln }], [0, { [D]: Cv }], [0, { [n]: O }], [0, { [n]: st }]]], i1 = [3, i, i_, { [y]: Sg }, [ze, wg, M_, Hf, Cr, mt, or, eo, Gs, nr, lt], [2, 0, 0, [() => G0, { [z]: 1 }], 0, 0, 0, 1, [() => ri, { [z]: 1 }], 0, [0, { [n]: dt }]]], a1 = [3, i, a_, 0, [P, or, nr, wg, eo, mt, nt, w, Nu], [[0, 1], [0, { [D]: Qs }], [0, { [D]: Ys }], [0, { [D]: pv }], [1, { [D]: Yu }], [0, { [D]: ln }], [0, { [n]: st }], [0, { [n]: O }], [64, { [n]: nm }]]], c1 = [3, i, u_, { [y]: Sg }, [ze, Hf, Cr, mt, or, eo, Gs, nr, CP, ae, cn, px, lt], [2, [() => G0, { [z]: 1 }], 0, 0, 0, 1, [() => ri, { [z]: 1 }], 0, 1, 0, 0, 0, [0, { [n]: dt }]]], u1 = [3, i, p_, 0, [P, or, nr, eo, mt, ae, Vb, px, nt, w, Nu], [[0, 1], [0, { [D]: Qs }], [0, { [D]: Ys }], [1, { [D]: Yu }], [0, { [D]: ln }], [0, { [D]: Er }], [2, { [D]: cv }], [0, { [D]: hv }], [0, { [n]: st }], [0, { [n]: O }], [64, { [n]: nm }]]], m1 = [3, i, m_, { [y]: b_ }, [ze, qs, Mx, Ig, j_, tv, Vf, Cr, mt, or, eo, Gs, nr, lt], [2, 0, 0, 0, 0, [() => M2, { [y]: ev, [z]: 1 }], [() => B2, { [y]: xr, [z]: 1 }], 0, 0, 0, 1, [() => ri, { [z]: 1 }], 0, [0, { [n]: dt }]]], p1 = [3, i, l_, 0, [P, or, nr, qs, eo, mt, Mx, w, nt, Nu], [[0, 1], [0, { [D]: Qs }], [0, { [D]: Ys }], [0, { [D]: Nx }], [1, { [D]: Yu }], [0, { [D]: ln }], [0, { [D]: yv }], [0, { [n]: O }], [0, { [n]: st }], [64, { [n]: nm }]]], l1 = [3, i, g_, { [y]: x_ }, [yf, bf, P, W, sr, Vs, Mg, Hs, ze, Ks, Iu, Ie, Vt, lt, Q, he], [[4, { [n]: Xx }], [0, { [n]: Jx }], 0, 0, 0, 0, 0, 1, 2, [() => U2, { [y]: Ws, [z]: 1 }], () => b0, () => Je, 0, [0, { [n]: dt }], 0, 0]], d1 = [3, i, h_, 0, [P, W, Hs, Vs, sr, nt, w, Tt, _e, Dt], [[0, 1], [0, 1], [1, { [D]: fv }], [0, { [D]: xv }], [0, { [D]: dn }], [0, { [n]: st }], [0, { [n]: O }], [0, { [n]: jt }], [() => Me, { [n]: Le }], [0, { [n]: zt }]]], f1 = [3, i, JP, 0, [mn, Cr], [0, 0]], B0 = [3, i, Lu, 0, [_3, _x, L3, Rx], [0, [() => q2, 0], 0, [() => i2, 0]]], g1 = [3, i, au, 0, [Bs, ks], [() => MD, () => DD]], x1 = [3, i, kg, 0, [Wf, Eg, hg], [() => ZO, () => $D, () => ID]], h1 = [3, i, Pg, 0, [Cr, Ju], [0, 0]], C1 = [3, i, cu, 0, [bx], [() => jI]], y1 = [3, i, Ag, 0, [kx], [() => zI]], pm = [3, i, w_, 0, [JR, EP], [0, 0]], E1 = [3, i, Og, 0, [Ft, qb], [0, () => I0]], S1 = [3, i, k_, 0, [mt, ao, Sf], [0, [() => Qe, { [y]: Ae, [z]: 1 }], 0]], lm = [3, i, Wo, 0, [Ot, Ze], [0, [() => Z2, 0]]], b1 = [3, i, Rg, 0, [sr, W, fP, Vt, Ie, Iu, Q, he], [0, 0, 4, 0, () => Je, () => b0, 0, 0]], k1 = [3, i, $g, 0, [Dg, Lg], [1, 1]], B1 = [3, i, Ug, 0, [Dg, Vt, Lg], [1, 0, 1]], P1 = [-3, i, $_, { [me]: ue, [Ce]: 404 }, [], []];
Lt.for(i).registerError(P1, cs);
var _1 = [-3, i, U_, { [me]: ue, [Ce]: 404 }, [], []];
Lt.for(i).registerError(_1, ms);
var A1 = [-3, i, N_, { [me]: ue, [Ce]: 404 }, [], []];
Lt.for(i).registerError(A1, ns);
var R1 = [-3, i, L_, { [me]: ue }, [], []];
Lt.for(i).registerError(R1, ps);
var P0 = [3, i, uu, 0, [v3, PR, XP, Jf], [[() => F2, { [y]: Px, [z]: 1 }], [() => G2, { [y]: Qg, [z]: 1 }], [() => O2, { [y]: iS, [z]: 1 }], () => eT]], dm = [3, i, I_, 0, [W], [[() => NI, { [y]: m3 }]]], v1 = [3, i, qg, 0, [W, qe, Gt, Q, he, io, Vt, Ie, Fu], [0, 4, 0, [64, { [z]: 1 }], 0, 1, 0, () => Je, () => L0]], w1 = [-3, i, F_, { [me]: ue, [Ce]: 403 }, [], []];
Lt.for(i).registerError(w1, hs);
var O1 = [3, i, Z_, 0, [W, ot, Gt, t_, io], [0, 0, 0, 6, 1]], _0 = [3, i, Rs, 0, [J_, so], [0, () => T1]], A0 = [3, i, Y_, 0, [Ft], [0]], R0 = [3, i, tA, 0, [Tg, WR], [0, 5]], T1 = [3, i, eA, 0, [Kf], [() => SO]], D1 = [-3, i, oA, { [me]: ue, [Ce]: 403 }, [], []];
Lt.for(i).registerError(D1, ss);
var I1 = [3, i, sA, 0, [yr, io, Yt, te, ee, re, oe], [1, 1, 0, 0, 0, 0, 0]], L1 = [3, i, cA, 0, [Gt, Q, he, io, Vt, W, ot, fg, qe, Ie, Fu], [0, [64, { [z]: 1 }], 0, 1, 0, 0, 0, 2, 4, () => Je, () => L0]], M1 = [3, i, Ng, 0, [S3], [[() => GI, 0]]], v0 = [3, i, Gu, 0, [jf, yg], [() => EO, () => GD]], Je = [3, i, Ie, 0, [Su, Jr], [0, 0]], w0 = [3, i, As, 0, [un], [[() => $2, { [y]: so, [z]: 1 }]]], $1 = [3, i, V_, 0, [Gg], [0]], U1 = [3, i, QA, 0, [], []], N1 = [3, i, Ws, 0, [yr, qe, Gt, io, Yt, te, ee, re, oe], [1, 4, 0, 1, 0, 0, 0, 0, 0]], G1 = [3, i, ws, { [y]: ws }, [XA], [0]], j1 = [3, i, Hg, 0, [pf], [[2, { [y]: pf }]]], z1 = [3, i, Zg, 0, [Af, Pf, _f], [1, 1, 1]], q1 = [3, i, JA, 0, [Xf], [[() => z1, { [Qu]: 1 }]]], O0 = [3, i, vs, 0, [cf, lf, uf, df], [[2, { [y]: cf }], [2, { [y]: lf }], [2, { [y]: uf }], [2, { [y]: df }]]], H1 = [3, i, xA, 0, [P, ht, Q, w, ys], [[0, 1], [0, { [n]: xt }], [0, { [n]: ct }], [0, { [n]: O }], [() => h0, { [y]: ys, [tt]: 1 }]]], F1 = [3, i, dA, 0, [P, Cs, w, Q], [[0, 1], [() => Uw, { [y]: Cs, [tt]: 1 }], [0, { [n]: O }], [0, { [n]: ct }]]], V1 = [3, i, hA, 0, [Gr, gr, P, ht, Q, Kr, Wr, Zr, Au, Xr, w], [[0, { [n]: uo }], [() => C0, { [y]: gr, [tt]: 1 }], [0, 1], [0, { [n]: xt }], [0, { [n]: ct }], [0, { [n]: po }], [0, { [n]: lo }], [0, { [n]: fo }], [0, { [n]: rm }], [0, { [n]: go }], [0, { [n]: O }]]], K1 = [3, i, fA, 0, [P, Ot, Fo, w], [[0, 1], [0, { [D]: Re }], [() => am, { [y]: Fo, [tt]: 1 }], [0, { [n]: O }]]], W1 = [3, i, EA, 0, [P, Ss, ht, Q, w], [[0, 1], [() => cO, { [y]: Ss, [tt]: 1 }], [0, { [n]: xt }], [0, { [n]: ct }], [0, { [n]: O }]]], Z1 = [3, i, bA, 0, [P, ht, Q, Ms, w], [[0, 1], [0, { [n]: xt }], [0, { [n]: ct }], [() => M0, { [y]: Ms, [tt]: 1 }], [0, { [n]: O }]]], X1 = [3, i, _A, 0, [P, Ot, w, Ko], [[0, 1], [0, { [D]: Re }], [0, { [n]: O }], [() => um, { [y]: Ko, [tt]: 1 }]]], J1 = [3, i, BA, 0, [P, Ot, Vo, w], [[0, 1], [0, { [D]: Re }], [() => mm, { [y]: Vo, [tt]: 1 }], [0, { [n]: O }]]], Q1 = [3, i, vA, 0, [Xu], [[0, { [n]: im }]]], Y1 = [3, i, wA, 0, [P, Q, iu, w, Xu], [[0, 1], [0, { [n]: ct }], [() => Ww, { [y]: iu, [tt]: 1 }], [0, { [n]: O }], [0, { [n]: im }]]], tI = [3, i, OA, 0, [P, Es, ht, Q, w], [[0, 1], [() => Zw, { [y]: Es, [tt]: 1 }], [0, { [n]: xt }], [0, { [n]: ct }], [0, { [n]: O }]]], eI = [3, i, DA, 0, [P, Ot, Wo, w], [[0, 1], [0, { [D]: Re }], [() => lm, { [y]: Wo, [tt]: 1 }], [0, { [n]: O }]]], rI = [3, i, LA, 0, [P, uu, w, o3], [[0, 1], [() => P0, { [y]: uu, [tt]: 1 }], [0, { [n]: O }], [2, { [n]: Ow }]]], oI = [3, i, $A, 0, [P, ht, w, As, Q], [[0, 1], [0, { [n]: xt }], [0, { [n]: O }], [() => w0, { [y]: As, [tt]: 1 }], [0, { [n]: ct }]]], nI = [3, i, NA, 0, [P, ht, Q, SS, Wg, w], [[0, 1], [0, { [n]: xt }], [0, { [n]: ct }], [2, { [n]: Av }], [0, 16], [0, { [n]: O }]]], sI = [3, i, qA, 0, [P, ht, Q, Os, Tx, w], [[0, 1], [0, { [n]: xt }], [0, { [n]: ct }], [() => D0, { [y]: Os, [tt]: 1 }], [0, { [n]: Yx }], [0, { [n]: O }]]], iI = [3, i, zA, 0, [P, ht, Q, Ts, w], [[0, 1], [0, { [n]: xt }], [0, { [n]: ct }], [() => DI, { [y]: Ts, [tt]: 1 }], [0, { [n]: O }]]], aI = [3, i, FA, 0, [P, ht, Q, De, w], [[0, 1], [0, { [n]: xt }], [0, { [n]: ct }], [() => gm, { [y]: De, [tt]: 1 }], [0, { [n]: O }]]], cI = [3, i, KA, 0, [P, ht, Q, $u, $s, w], [[0, 1], [0, { [n]: xt }], [0, { [n]: ct }], [0, { [n]: om }], [() => h2, { [y]: $s, [tt]: 1 }], [0, { [n]: O }]]], uI = [3, i, ZA, 0, [P, ht, Q, Us, w], [[0, 1], [0, { [n]: xt }], [0, { [n]: ct }], [() => C2, { [y]: Us, [tt]: 1 }], [0, { [n]: O }]]], mI = [3, i, rR, 0, [lt], [[0, { [n]: dt }]]], pI = [3, i, oR, 0, [Gr, gr, P, ht, Q, Kr, Wr, Zr, Au, Xr, W, nt, ot, w], [[0, { [n]: uo }], [() => C0, { [y]: gr, [tt]: 1 }], [0, 1], [0, { [n]: xt }], [0, { [n]: ct }], [0, { [n]: po }], [0, { [n]: lo }], [0, { [n]: fo }], [0, { [n]: rm }], [0, { [n]: go }], [0, 1], [0, { [n]: st }], [0, { [D]: pe }], [0, { [n]: O }]]], lI = [3, i, cR, 0, [lt], [[0, { [n]: dt }]]], dI = [3, i, uR, 0, [P, W, _s, nt, ot, ht, Q, w], [[0, 1], [0, 1], [() => A0, { [y]: _s, [tt]: 1 }], [0, { [n]: st }], [0, { [D]: pe }], [0, { [n]: xt }], [0, { [n]: ct }], [0, { [n]: O }]]], fI = [3, i, sR, 0, [lt], [[0, { [n]: dt }]]], gI = [3, i, iR, 0, [P, Rs, nt, Tx, ht, Q, w], [[0, 1], [() => _0, { [y]: Rs, [tt]: 1 }], [0, { [n]: st }], [0, { [n]: Yx }], [0, { [n]: xt }], [0, { [n]: ct }], [0, { [n]: O }]]], xI = [3, i, mR, 0, [je, Gt, Yt, te, ee, re, oe, he, ce, ot, Tt, Dt, ne, Xe, Qt, io, lt], [[0, { [n]: fn }], [0, { [n]: Gt }], [0, { [n]: Sr }], [0, { [n]: br }], [0, { [n]: kr }], [0, { [n]: Br }], [0, { [n]: Pr }], [0, { [n]: mo }], [0, { [n]: ye }], [0, { [n]: He }], [0, { [n]: jt }], [0, { [n]: zt }], [() => Ht, { [n]: Ee }], [() => ar, { [n]: ir }], [2, { [n]: Se }], [1, { [n]: Sw }], [0, { [n]: dt }]]], hI = [3, i, pR, 0, [Gr, Xo, P, jr, zr, qr, Hr, rn, ht, Fr, Q, Yt, te, ee, re, oe, Te, Qr, an, Kr, Wr, Zr, Xr, W, nv, to, ce, Vt, pn, Tt, _e, Dt, ne, Xe, Qt, nt, De, oo, no, ro, w], [[0, { [n]: uo }], [() => En, 16], [0, 1], [0, { [n]: Jo }], [0, { [n]: Qo }], [0, { [n]: Yo }], [0, { [n]: tn }], [1, { [n]: en }], [0, { [n]: xt }], [0, { [n]: on }], [0, { [n]: ct }], [0, { [n]: Sr }], [0, { [n]: br }], [0, { [n]: kr }], [0, { [n]: Br }], [0, { [n]: Pr }], [4, { [n]: Te }], [0, { [n]: hr }], [0, { [n]: Yr }], [0, { [n]: po }], [0, { [n]: lo }], [0, { [n]: fo }], [0, { [n]: go }], [0, 1], [1, { [n]: Dw }], [128, { [co]: xo }], [0, { [n]: ye }], [0, { [n]: Cn }], [0, { [n]: yn }], [0, { [n]: jt }], [() => Me, { [n]: Le }], [0, { [n]: zt }], [() => Ht, { [n]: Ee }], [() => ar, { [n]: ir }], [2, { [n]: Se }], [0, { [n]: st }], [0, { [n]: sm }], [0, { [n]: xn }], [5, { [n]: hn }], [0, { [n]: gn }], [0, { [n]: O }]]], CI = [3, i, lR, 0, [lt], [[0, { [n]: dt }]]], yI = [3, i, dR, 0, [P, W, Is, nt, ot, du, ht, Q, w], [[0, 1], [0, 1], [() => R0, { [y]: Is, [tt]: 1 }], [0, { [n]: st }], [0, { [D]: pe }], [2, { [n]: tm }], [0, { [n]: xt }], [0, { [n]: ct }], [0, { [n]: O }]]], EI = [3, i, xR, 0, [ot], [[0, { [n]: He }]]], SI = [3, i, hR, 0, [P, W, ot, ht, Q, De, w, nt], [[0, 1], [0, 1], [0, { [D]: pe }], [0, { [n]: xt }], [0, { [n]: ct }], [() => gm, { [y]: De, [tt]: 1 }], [0, { [n]: O }], [0, { [n]: st }]]], bI = [3, i, yR, 0, [P, ht, Q, vs, w], [[0, 1], [0, { [n]: xt }], [0, { [n]: ct }], [() => O0, { [y]: vs, [tt]: 1 }], [0, { [n]: O }]]], kI = [3, i, Qg, 0, [Ot, kR, Pu, Ze], [0, [0, { [y]: AR }], [64, { [y]: _u, [z]: 1 }], [() => dm, 0]]], fm = [3, i, Zs, 0, [je, Vr], [0, 1]], BI = [3, i, vR, 0, [Vg], [[21, { [Qu]: 1 }]]], PI = [3, i, mx, 0, [lg, KB, Xg, OR, TR], [0, 0, 0, 0, 0]], T0 = [3, i, ju, 0, [lg, Xg], [0, 0]], _I = [3, i, IR, 0, [], []], AI = [3, i, $R, 0, [P, W, FR, lb, fb, db, gb, s3, a3, i3, c3, vS], [[0, 1], [0, 1], [0, { [n]: Pw }], [0, { [n]: hr }], [0, { [n]: Yr }], [4, { [n]: Ou }], [4, { [n]: Du }], [0, { [n]: _w }], [0, { [n]: Rw }], [6, { [n]: Aw }], [6, { [n]: vw }], [0, { [n]: wv, [mv]: 1 }]]], RI = [3, i, ix, 0, [Ft], [0]], D0 = [3, i, Os, 0, [XR, un], [0, [() => j2, { [y]: so, [z]: 1 }]]], vI = [3, i, zR, 0, [Jr, SR, mt, Ze, Ft, yx, tg, js, Ff], [0, 1, 0, [() => OI, 0], 0, () => JI, () => rT, () => WO, () => GO]], wI = [3, i, GR, 0, [mt, ao], [0, [() => Qe, { [y]: Ae, [z]: 1 }]]], OI = [3, i, jR, 0, [mt, Ae, Zo], [0, () => ho, [() => wI, 0]]], TI = [3, i, ux, 0, [Ft, U3], [0, () => I0]], I0 = [3, i, VR, 0, [D_], [1]], DI = [3, i, Ts, 0, [Fg], [0]], II = [3, i, ax, 0, [Hb], [2]], LI = [3, i, LR, 0, [lt, MR], [[0, { [n]: dt }], [0, { [n]: kw }]]], MI = [3, i, UR, 0, [P, W, ot, mu, nt, Q, w], [[0, 1], [0, 1], [0, { [D]: pe }], [() => $I, { [tt]: 1, [y]: mu }], [0, { [n]: st }], [0, { [n]: ct }], [0, { [n]: O }]]], $I = [3, i, mu, 0, [Vr, pg, mn, wx, Ib, xx, Ng], [1, () => xD, 0, 0, 0, () => VI, [() => M1, 0]]], L0 = [3, i, Fu, 0, [aP, RR], [2, 4]], UI = [3, i, cx, 0, [qf, mx], [() => rO, () => PI]], NI = [3, i, u3, 0, [Wb], [[() => A2, { [y]: ag, [z]: 1 }]]], GI = [3, i, p3, 0, [WE, mt, Bu, ZE, Ns, De, Lx, Vt], [0, 0, [() => XO, 0], 0, [() => oi, 0], [() => gm, 0], [() => K2, 0], 0]], jI = [3, i, bx, 0, [Wu, Xs], [0, 0]], zI = [3, i, kx, 0, [Wu, Xs, Ku, Ax], [0, 0, 0, 0]], qI = [3, i, hx, 0, [k3, og], [1, 1]], HI = [3, i, g3, 0, [Vg], [[() => X2, 16]]], FI = [3, i, x3, 0, [P, W, Tt, _e, Dt, sg, rg, ax, Tu, Gu, hx, w], [[0, 1], [0, 1], [0, { [n]: jt }], [() => Me, { [n]: Le }], [0, { [n]: zt }], 0, 0, () => II, () => k0, () => v0, () => qI, [0, { [n]: O }]]], VI = [3, i, xx, 0, [Tu, rg, sg, Gu], [() => k0, 0, 0, () => v0]], KI = [3, i, C3, 0, [h3, kP], [0, [() => Ht, 0]]], M0 = [3, i, Ms, 0, [un], [[() => z2, { [y]: so, [z]: 1 }]]], WI = [3, i, y3, 0, [NE, Qt, Bf], [[() => KI, 0], 2, [() => qw, 0]]], ZI = [3, i, e3, 0, [af, ff, gf, je], [[0, { [y]: af }], [() => xf, { [y]: ff }], [() => xf, { [y]: gf }], [4, { [y]: je }]]], XI = [3, i, Ls, { [y]: Ls }, [], []], JI = [3, i, yx, 0, [gx, ix], [() => YI, () => RI]], QI = [3, i, Ex, { [y]: fx }, [yP], [[() => Ht, 0]]], YI = [3, i, gx, 0, [Ft], [0]], t2 = [3, i, Sx, { [y]: Cx }, [], []], e2 = [3, i, Bx, 0, [Af, Pf, _f], [1, 1, 1]], r2 = [3, i, n3, 0, [Xf], [[() => e2, { [Qu]: 1 }]]], o2 = [3, i, dx, 0, [pb], [() => n2]], n2 = [3, i, YR, 0, [aA, js], [0, () => jw]], ho = [3, i, Ae, 0, [W, Ju], [0, 0]], gm = [3, i, De, 0, [Js], [[() => Qe, 0]]], s2 = [3, i, O3, 0, [vu, Kg], [[() => E0, { [Zx]: [Wx, Ux] }], 0]], i2 = [3, i, Rx, 0, [Ls, ws], [[() => XI, { [y]: Ls }], [() => G1, { [y]: ws }]]], a2 = [3, i, Ox, 0, [Vr, kf], [1, 0]], c2 = [-3, i, I3, { [me]: ue, [Ce]: 400 }, [], []];
Lt.for(i).registerError(c2, gs);
var u2 = [3, i, Px, 0, [Ot, P3, Pu, Ze], [0, [0, { [y]: N3 }], [64, { [y]: _u, [z]: 1 }], [() => dm, 0]]], m2 = [3, i, Dx, 0, [Zf, Vr, Vt], [5, 1, 0]], p2 = [3, i, q3, 0, [P, ht, Q, ks, w], [[0, 1], [0, { [n]: xt }], [0, { [n]: ct }], [() => LD, { [y]: ks, [tt]: 1 }], [0, { [n]: O }]]], l2 = [3, i, F3, 0, [P, ht, Q, Bs, w], [[0, 1], [0, { [n]: xt }], [0, { [n]: ct }], [() => UD, { [y]: Bs, [tt]: 1 }], [0, { [n]: O }]]], d2 = [3, i, W3, 0, [zf, Tf, ce, Tt, Dt, ne, Qt, lt], [[0, { [n]: u0 }], [() => aO, 16], [0, { [n]: ye }], [0, { [n]: jt }], [0, { [n]: zt }], [() => Ht, { [n]: Ee }], [2, { [n]: Se }], [0, { [n]: dt }]]], f2 = [3, i, Z3, 0, [P, If, Lf, Mf, $f, Uf, BS, W, yr, sr, Tt, _e, Dt, Nf, yu, Gf, nt, w, eg], [[0, 1], [0, { [n]: e0 }], [0, { [n]: r0 }], [4, { [n]: o0 }], [0, { [n]: n0 }], [4, { [n]: s0 }], [0, { [n]: vv }], [0, 1], [1, { [D]: ti }], [0, { [D]: dn }], [0, { [n]: jt }], [() => Me, { [n]: Le }], [0, { [n]: zt }], [0, { [n]: i0 }], [() => x0, { [n]: a0 }], [0, { [n]: c0 }], [0, { [n]: st }], [0, { [n]: O }], [0, { [n]: f0 }]]], g2 = [3, i, X3, 0, [ce, Gt, Yt, te, ee, re, oe, Tt, Dt, ne, Qt, lt], [[0, { [n]: ye }], [0, { [n]: Gt }], [0, { [n]: Sr }], [0, { [n]: br }], [0, { [n]: kr }], [0, { [n]: Br }], [0, { [n]: Pr }], [0, { [n]: jt }], [0, { [n]: zt }], [() => Ht, { [n]: Ee }], [2, { [n]: Se }], [0, { [n]: dt }]]], x2 = [3, i, J3, 0, [Xo, P, rn, ht, Q, Yt, te, ee, re, oe, W, yr, sr, Tt, _e, Dt, nt, w], [[() => En, 16], [0, 1], [1, { [n]: en }], [0, { [n]: xt }], [0, { [n]: ct }], [0, { [n]: Sr }], [0, { [n]: br }], [0, { [n]: kr }], [0, { [n]: Br }], [0, { [n]: Pr }], [0, 1], [1, { [D]: ti }], [0, { [D]: dn }], [0, { [n]: jt }], [() => Me, { [n]: Le }], [0, { [n]: zt }], [0, { [n]: st }], [0, { [n]: O }]]], h2 = [3, i, $s, 0, [_g, Ft], [[0, { [y]: Bg }], 0]], C2 = [3, i, Us, 0, [bu, wu, ju, qu], [() => y0, () => S0, () => T0, [() => j0, 0]]], y2 = [3, i, ov, 0, [HR, KR, Xo, r3, Qf, Yf, pu, jr, zr, qr, Hr, rn, Cu, Fr, Yt, te, ee, re, oe, xr, Gt, Te, je, qe, Uu, to, oo, ro, no, Fs, Hu, lt, Vu, ce, Tt, ne, Dt, Vt, Zu, ot, Qt], [[0, { [uv]: 1, [n]: Bw }], [0, { [n]: ww }], [() => En, 16], [1, { [n]: lw }], [0, { [n]: Ov }], [0, { [n]: Tv }], [0, { [n]: zv }], [0, { [n]: Dv }], [0, { [n]: Iv }], [0, { [n]: Lv }], [0, { [n]: Mv }], [1, { [n]: en }], [0, { [n]: $v }], [0, { [n]: Uv }], [0, { [n]: qv }], [0, { [n]: Hv }], [0, { [n]: Fv }], [0, { [n]: Vv }], [0, { [n]: Kv }], [2, { [n]: Wv }], [0, { [n]: Nv }], [4, { [n]: Gv }], [0, { [n]: Zv }], [4, { [n]: jv }], [1, { [n]: Xv }], [128, { [co]: xo }], [0, { [n]: Yv }], [0, { [n]: Qv }], [5, { [n]: tw }], [1, { [n]: Jv }], [0, { [n]: ow }], [0, { [n]: rw }], [0, { [n]: ew }], [0, { [n]: sw }], [0, { [n]: cw }], [() => Ht, { [n]: iw }], [0, { [n]: uw }], [0, { [n]: nw }], [1, { [n]: mw }], [0, { [n]: pw }], [2, { [n]: aw }]]], K = "unit", E2 = [-3, Kx, "S3ServiceException", 0, [], []];
Lt.for(Kx).registerError(E2, Rt);
var S2 = [1, i, hf, 0, [() => am, 0]], $0 = [1, i, gu, 0, [() => Hw, { [y]: P }]];
var ri = [1, i, CS, 0, () => Jw], b2 = [1, i, yS, 0, () => Yw], U0 = [1, i, xu, 0, [() => uO, 0]], k2 = [1, i, _b, 0, () => UO], B2 = [1, i, Vf, 0, () => NO], P2 = [1, i, jb, 0, [0, { [y]: ku }]], _2 = [1, i, ng, 0, () => tT];
var A2 = [1, i, Kb, 0, () => oT], oi = [1, i, zs, 0, [() => hD, { [y]: Ru }]], R2 = [1, i, xg, 0, [() => um, 0]], v2 = [1, i, dg, 0, [() => mm, 0]], w2 = [1, i, rP, 0, [0, { [y]: Zb }]], O2 = [1, i, ZP, 0, [() => jD, 0]], N0 = [1, i, S_, 0, [() => qD, 0]], T2 = [1, i, bg, 0, [() => lm, 0]], D2 = [1, i, O_, 0, () => b1], I2 = [1, i, q_, 0, () => B1];
var L2 = [1, i, X_, 0, () => O1], G0 = [1, i, rA, 0, [() => v1, 0]], M2 = [1, i, uA, 0, [() => L1, 0]];
var $2 = [1, i, K_, 0, () => $1], U2 = [1, i, Ks, 0, () => N1], N2 = [1, i, YA, 0, () => I1], G2 = [1, i, BR, 0, [() => kI, 0]], j2 = [1, i, qR, 0, [() => vI, 0]], j0 = [1, i, qu, 0, [() => UI, { [y]: cx }]], z2 = [1, i, E3, 0, [() => WI, 0]], Qe = [1, i, Js, 0, [() => ho, { [y]: Ae }]], q2 = [1, i, _x, 0, [() => s2, { [y]: Ru }]], H2 = [1, i, T3, 0, () => a2], F2 = [1, i, R3, 0, [() => u2, 0]], V2 = [1, i, D3, 0, () => m2], K2 = [1, i, Lx, 0, [() => h1, { [y]: Pg }]];
var W2 = [3, i, PE, 0, [mt, Ae, Zo], [0, () => ho, [() => Gw, 0]]], Z2 = [3, i, R_, 0, [mt, Ae, Sf, Zo], [0, () => ho, 0, [() => S1, 0]]], X2 = [3, i, f3, { [Vx]: 1 }, [ZR, Bx, Zg, DS, og], [[() => BI, 0], [() => r2, 0], [() => q1, 0], () => oO, () => YO]], z0 = [9, i, wE, { [R]: ["DELETE", "/{Key+}?x-id=AbortMultipartUpload", 204] }, () => $w, () => Mw], q0 = [9, i, vf, { [R]: ["POST", "/{Key+}", 200] }, () => eO, () => tO], H0 = [9, i, fS, { [R]: ["PUT", "/{Key+}?x-id=CopyObject", 200] }, () => sO, () => nO], F0 = [9, i, XE, { [R]: ["PUT", "/", 200] }, () => fO, () => dO], V0 = [9, i, JE, { [R]: ["POST", "/?metadataConfiguration", 200] }, () => pO, () => K], K0 = [9, i, YE, { [R]: ["POST", "/?metadataTable", 200] }, () => lO, () => K], W0 = [9, i, dS, { [R]: ["POST", "/{Key+}?uploads", 200] }, () => xO, () => gO], Z0 = [9, i, RS, { [R]: ["GET", "/?session", 200] }, () => CO, () => hO], X0 = [9, i, LS, { [R]: ["DELETE", "/", 204] }, () => LO, () => K], J0 = [9, i, MS, { [R]: ["DELETE", "/?analytics", 204] }, () => kO, () => K], Q0 = [9, i, US, { [R]: ["DELETE", "/?cors", 204] }, () => BO, () => K], Y0 = [9, i, GS, { [R]: ["DELETE", "/?encryption", 204] }, () => PO, () => K], th = [9, i, HS, { [R]: ["DELETE", "/?intelligent-tiering", 204] }, () => _O, () => K], eh = [9, i, zS, { [R]: ["DELETE", "/?inventory", 204] }, () => AO, () => K], rh = [9, i, VS, { [R]: ["DELETE", "/?lifecycle", 204] }, () => RO, () => K], oh = [9, i, WS, { [R]: ["DELETE", "/?metadataConfiguration", 204] }, () => vO, () => K], nh = [9, i, QS, { [R]: ["DELETE", "/?metadataTable", 204] }, () => wO, () => K], sh = [9, i, JS, { [R]: ["DELETE", "/?metrics", 204] }, () => OO, () => K], ih = [9, i, tb, { [R]: ["DELETE", "/?ownershipControls", 204] }, () => TO, () => K], ah = [9, i, rb, { [R]: ["DELETE", "/?policy", 204] }, () => DO, () => K], ch = [9, i, ib, { [R]: ["DELETE", "/?replication", 204] }, () => IO, () => K], uh = [9, i, ab, { [R]: ["DELETE", "/?tagging", 204] }, () => MO, () => K], mh = [9, i, ub, { [R]: ["DELETE", "/?website", 204] }, () => $O, () => K], ph = [9, i, Ab, { [R]: ["DELETE", "/{Key+}?x-id=DeleteObject", 204] }, () => zO, () => jO], lh = [9, i, Rb, { [R]: ["POST", "/?delete", 200] }, () => HO, () => qO], dh = [9, i, kb, { [R]: ["DELETE", "/{Key+}?tagging", 204] }, () => VO, () => FO], fh = [9, i, vb, { [R]: ["DELETE", "/?publicAccessBlock", 204] }, () => KO, () => K], gh = [9, i, Jb, { [R]: ["GET", "/?abac", 200] }, () => sT, () => nT], xh = [9, i, Qb, { [R]: ["GET", "/?accelerate", 200] }, () => aT, () => iT], hh = [9, i, ck, { [R]: ["GET", "/?acl", 200] }, () => uT, () => cT], Ch = [9, i, ok, { [R]: ["GET", "/?analytics&x-id=GetBucketAnalyticsConfiguration", 200] }, () => pT, () => mT], yh = [9, i, uk, { [R]: ["GET", "/?cors", 200] }, () => dT, () => lT], Eh = [9, i, lk, { [R]: ["GET", "/?encryption", 200] }, () => gT, () => fT], Sh = [9, i, Ck, { [R]: ["GET", "/?intelligent-tiering&x-id=GetBucketIntelligentTieringConfiguration", 200] }, () => hT, () => xT], bh = [9, i, gk, { [R]: ["GET", "/?inventory&x-id=GetBucketInventoryConfiguration", 200] }, () => yT, () => CT], kh = [9, i, bk, { [R]: ["GET", "/?lifecycle", 200] }, () => ST, () => ET], Bh = [9, i, Sk, { [R]: ["GET", "/?location", 200] }, () => kT, () => bT], Ph = [9, i, vk, { [R]: ["GET", "/?logging", 200] }, () => PT, () => BT], _h = [9, i, wk, { [R]: ["GET", "/?metadataConfiguration", 200] }, () => AT, () => _T], Ah = [9, i, Mk, { [R]: ["GET", "/?metadataTable", 200] }, () => wT, () => vT], Rh = [9, i, Lk, { [R]: ["GET", "/?metrics&x-id=GetBucketMetricsConfiguration", 200] }, () => DT, () => TT], vh = [9, i, Nk, { [R]: ["GET", "/?notification", 200] }, () => IT, () => P0], wh = [9, i, jk, { [R]: ["GET", "/?ownershipControls", 200] }, () => MT, () => LT], Oh = [9, i, Hk, { [R]: ["GET", "/?policy", 200] }, () => UT, () => $T], Th = [9, i, Kk, { [R]: ["GET", "/?policyStatus", 200] }, () => GT, () => NT], Dh = [9, i, Xk, { [R]: ["GET", "/?replication", 200] }, () => zT, () => jT], Ih = [9, i, Qk, { [R]: ["GET", "/?requestPayment", 200] }, () => HT, () => qT], Lh = [9, i, rB, { [R]: ["GET", "/?tagging", 200] }, () => VT, () => FT], Mh = [9, i, sB, { [R]: ["GET", "/?versioning", 200] }, () => WT, () => KT], $h = [9, i, cB, { [R]: ["GET", "/?website", 200] }, () => XT, () => ZT], Uh = [9, i, pB, { [R]: ["GET", "/{Key+}?x-id=GetObject", 200] }, () => aD, () => iD], Nh = [9, i, lB, { [R]: ["GET", "/{Key+}?acl", 200] }, () => QT, () => JT], Gh = [9, i, yB, { [R]: ["GET", "/{Key+}?attributes", 200] }, () => eD, () => YT], jh = [9, i, kB, { [R]: ["GET", "/{Key+}?legal-hold", 200] }, () => oD, () => rD], zh = [9, i, EB, { [R]: ["GET", "/?object-lock", 200] }, () => sD, () => nD], qh = [9, i, wB, { [R]: ["GET", "/{Key+}?retention", 200] }, () => uD, () => cD], Hh = [9, i, OB, { [R]: ["GET", "/{Key+}?tagging", 200] }, () => pD, () => mD], Fh = [9, i, MB, { [R]: ["GET", "/{Key+}?torrent", 200] }, () => dD, () => lD], Vh = [9, i, $B, { [R]: ["GET", "/?publicAccessBlock", 200] }, () => gD, () => fD], Kh = [9, i, GB, { [R]: ["HEAD", "/", 200] }, () => yD, () => CD], Wh = [9, i, HB, { [R]: ["HEAD", "/{Key+}", 200] }, () => SD, () => ED], Zh = [9, i, RP, { [R]: ["GET", "/?analytics&x-id=ListBucketAnalyticsConfigurations", 200] }, () => KD, () => VD], Xh = [9, i, LP, { [R]: ["GET", "/?intelligent-tiering&x-id=ListBucketIntelligentTieringConfigurations", 200] }, () => ZD, () => WD], Jh = [9, i, TP, { [R]: ["GET", "/?inventory&x-id=ListBucketInventoryConfigurations", 200] }, () => JD, () => XD], Qh = [9, i, UP, { [R]: ["GET", "/?metrics&x-id=ListBucketMetricsConfigurations", 200] }, () => YD, () => QD], Yh = [9, i, AP, { [R]: ["GET", "/?x-id=ListBuckets", 200] }, () => e1, () => t1], tC = [9, i, qP, { [R]: ["GET", "/?x-id=ListDirectoryBuckets", 200] }, () => o1, () => r1], eC = [9, i, e_, { [R]: ["GET", "/?uploads", 200] }, () => s1, () => n1], rC = [9, i, s_, { [R]: ["GET", "/", 200] }, () => a1, () => i1], oC = [9, i, c_, { [R]: ["GET", "/?list-type=2", 200] }, () => u1, () => c1], nC = [9, i, d_, { [R]: ["GET", "/?versions", 200] }, () => p1, () => m1], sC = [9, i, f_, { [R]: ["GET", "/{Key+}?x-id=ListParts", 200] }, () => d1, () => l1], iC = [9, i, pA, { [R]: ["PUT", "/?abac", 200] }, () => H1, () => K], aC = [9, i, lA, { [R]: ["PUT", "/?accelerate", 200] }, () => F1, () => K], cC = [9, i, CA, { [R]: ["PUT", "/?acl", 200] }, () => V1, () => K], uC = [9, i, gA, { [R]: ["PUT", "/?analytics", 200] }, () => K1, () => K], mC = [9, i, yA, { [R]: ["PUT", "/?cors", 200] }, () => W1, () => K], pC = [9, i, SA, { [R]: ["PUT", "/?encryption", 200] }, () => Z1, () => K], lC = [9, i, PA, { [R]: ["PUT", "/?intelligent-tiering", 200] }, () => X1, () => K], dC = [9, i, kA, { [R]: ["PUT", "/?inventory", 200] }, () => J1, () => K], fC = [9, i, RA, { [R]: ["PUT", "/?lifecycle", 200] }, () => Y1, () => Q1], gC = [9, i, AA, { [R]: ["PUT", "/?logging", 200] }, () => tI, () => K], xC = [9, i, TA, { [R]: ["PUT", "/?metrics", 200] }, () => eI, () => K], hC = [9, i, IA, { [R]: ["PUT", "/?notification", 200] }, () => rI, () => K], CC = [9, i, MA, { [R]: ["PUT", "/?ownershipControls", 200] }, () => oI, () => K], yC = [9, i, UA, { [R]: ["PUT", "/?policy", 200] }, () => nI, () => K], EC = [9, i, GA, { [R]: ["PUT", "/?replication", 200] }, () => sI, () => K], SC = [9, i, jA, { [R]: ["PUT", "/?requestPayment", 200] }, () => iI, () => K], bC = [9, i, HA, { [R]: ["PUT", "/?tagging", 200] }, () => aI, () => K], kC = [9, i, VA, { [R]: ["PUT", "/?versioning", 200] }, () => cI, () => K], BC = [9, i, WA, { [R]: ["PUT", "/?website", 200] }, () => uI, () => K], PC = [9, i, tR, { [R]: ["PUT", "/{Key+}?x-id=PutObject", 200] }, () => hI, () => xI], _C = [9, i, eR, { [R]: ["PUT", "/{Key+}?acl", 200] }, () => pI, () => mI], AC = [9, i, aR, { [R]: ["PUT", "/{Key+}?legal-hold", 200] }, () => dI, () => lI], RC = [9, i, nR, { [R]: ["PUT", "/?object-lock", 200] }, () => gI, () => fI], vC = [9, i, fR, { [R]: ["PUT", "/{Key+}?retention", 200] }, () => yI, () => CI], wC = [9, i, gR, { [R]: ["PUT", "/{Key+}?tagging", 200] }, () => SI, () => EI], OC = [9, i, CR, { [R]: ["PUT", "/?publicAccessBlock", 200] }, () => bI, () => K], TC = [9, i, DR, { [R]: ["PUT", "/{Key+}?renameObject", 200] }, () => AI, () => _I], DC = [9, i, NR, { [R]: ["POST", "/{Key+}?restore", 200] }, () => MI, () => LI], IC = [9, i, d3, { [R]: ["POST", "/{Key+}?select&select-type=2", 200] }, () => FI, () => HI], LC = [9, i, z3, { [R]: ["PUT", "/?metadataInventoryTable", 200] }, () => p2, () => K], MC = [9, i, H3, { [R]: ["PUT", "/?metadataJournalTable", 200] }, () => l2, () => K], $C = [9, i, V3, { [R]: ["PUT", "/{Key+}?x-id=UploadPart", 200] }, () => x2, () => g2], UC = [9, i, K3, { [R]: ["PUT", "/{Key+}?x-id=UploadPartCopy", 200] }, () => f2, () => d2], NC = [9, i, rv, { [av]: ["{RequestRoute}."], [R]: ["POST", "/WriteGetObjectResponse", 200] }, () => y2, () => K];
var Co = class extends d.classBuilder().ep(p(u({}, g), { DisableS3ExpressSessionAuth: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "CreateSession", {}).n("S3Client", "CreateSessionCommand").sc(Z0).build() {
};
var GC = { name: "@aws-sdk/client-s3", description: "AWS SDK for JavaScript S3 Client for Node.js, Browser and React Native", version: "3.953.0", scripts: { build: "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs", "build:cjs": "node ../../scripts/compilation/inline client-s3", "build:es": "tsc -p tsconfig.es.json", "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build", "build:types": "tsc -p tsconfig.types.json", "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4", clean: "rimraf ./dist-* && rimraf *.tsbuildinfo", "extract:docs": "api-extractor run --local", "generate:client": "node ../../scripts/generate-clients/single-service --solo s3", test: "yarn g:vitest run", "test:browser": "node ./test/browser-build/esbuild && yarn g:vitest run -c vitest.config.browser.mts", "test:browser:watch": "node ./test/browser-build/esbuild && yarn g:vitest watch -c vitest.config.browser.mts", "test:e2e": "yarn g:vitest run -c vitest.config.e2e.mts && yarn test:browser", "test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.mts", "test:index": "tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs", "test:integration": "yarn g:vitest run -c vitest.config.integ.mts", "test:integration:watch": "yarn g:vitest watch -c vitest.config.integ.mts", "test:watch": "yarn g:vitest watch" }, main: "./dist-cjs/index.js", types: "./dist-types/index.d.ts", module: "./dist-es/index.js", sideEffects: !1, dependencies: { "@aws-crypto/sha1-browser": "5.2.0", "@aws-crypto/sha256-browser": "5.2.0", "@aws-crypto/sha256-js": "5.2.0", "@aws-sdk/core": "3.953.0", "@aws-sdk/credential-provider-node": "3.953.0", "@aws-sdk/middleware-bucket-endpoint": "3.953.0", "@aws-sdk/middleware-expect-continue": "3.953.0", "@aws-sdk/middleware-flexible-checksums": "3.953.0", "@aws-sdk/middleware-host-header": "3.953.0", "@aws-sdk/middleware-location-constraint": "3.953.0", "@aws-sdk/middleware-logger": "3.953.0", "@aws-sdk/middleware-recursion-detection": "3.953.0", "@aws-sdk/middleware-sdk-s3": "3.953.0", "@aws-sdk/middleware-ssec": "3.953.0", "@aws-sdk/middleware-user-agent": "3.953.0", "@aws-sdk/region-config-resolver": "3.953.0", "@aws-sdk/signature-v4-multi-region": "3.953.0", "@aws-sdk/types": "3.953.0", "@aws-sdk/util-endpoints": "3.953.0", "@aws-sdk/util-user-agent-browser": "3.953.0", "@aws-sdk/util-user-agent-node": "3.953.0", "@smithy/config-resolver": "^4.4.4", "@smithy/core": "^3.19.0", "@smithy/eventstream-serde-browser": "^4.2.6", "@smithy/eventstream-serde-config-resolver": "^4.3.6", "@smithy/eventstream-serde-node": "^4.2.6", "@smithy/fetch-http-handler": "^5.3.7", "@smithy/hash-blob-browser": "^4.2.7", "@smithy/hash-node": "^4.2.6", "@smithy/hash-stream-node": "^4.2.6", "@smithy/invalid-dependency": "^4.2.6", "@smithy/md5-js": "^4.2.6", "@smithy/middleware-content-length": "^4.2.6", "@smithy/middleware-endpoint": "^4.3.15", "@smithy/middleware-retry": "^4.4.15", "@smithy/middleware-serde": "^4.2.7", "@smithy/middleware-stack": "^4.2.6", "@smithy/node-config-provider": "^4.3.6", "@smithy/node-http-handler": "^4.4.6", "@smithy/protocol-http": "^5.3.6", "@smithy/smithy-client": "^4.10.0", "@smithy/types": "^4.10.0", "@smithy/url-parser": "^4.2.6", "@smithy/util-base64": "^4.3.0", "@smithy/util-body-length-browser": "^4.2.0", "@smithy/util-body-length-node": "^4.2.1", "@smithy/util-defaults-mode-browser": "^4.3.14", "@smithy/util-defaults-mode-node": "^4.2.17", "@smithy/util-endpoints": "^3.2.6", "@smithy/util-middleware": "^4.2.6", "@smithy/util-retry": "^4.2.6", "@smithy/util-stream": "^4.5.7", "@smithy/util-utf8": "^4.2.0", "@smithy/util-waiter": "^4.2.6", tslib: "^2.6.2" }, devDependencies: { "@aws-sdk/signature-v4-crt": "3.953.0", "@tsconfig/node18": "18.2.4", "@types/node": "^18.19.69", concurrently: "7.0.0", "downlevel-dts": "0.10.1", rimraf: "3.0.2", typescript: "~5.8.3" }, engines: { node: ">=18.0.0" }, typesVersions: { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } }, files: ["dist-*/**"], author: { name: "AWS SDK for JavaScript Team", url: "https://aws.amazon.com/javascript/" }, license: "Apache-2.0", browser: { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser" }, "react-native": { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native" }, homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-s3", repository: { type: "git", url: "https://github.com/aws/aws-sdk-js-v3.git", directory: "clients/client-s3" } };
var Sn = r => new TextEncoder().encode(r);
function xm(r) { return typeof r == "string" ? r.length === 0 : r.byteLength === 0; }
var hm = { name: "SHA-1" }, Cm = { name: "HMAC", hash: hm }, jC = new Uint8Array([218, 57, 163, 238, 94, 107, 75, 13, 50, 85, 191, 239, 149, 96, 24, 144, 175, 216, 7, 9]);
var ym = (function () { function r(t) { this.toHash = new Uint8Array(0), t !== void 0 && (this.key = new Promise(function (o, e) { be().crypto.subtle.importKey("raw", zC(t), Cm, !1, ["sign"]).then(o, e); }), this.key.catch(function () { })); } return r.prototype.update = function (t) { if (!xm(t)) {
    var o = zC(t), e = new Uint8Array(this.toHash.byteLength + o.byteLength);
    e.set(this.toHash, 0), e.set(o, this.toHash.byteLength), this.toHash = e;
} }, r.prototype.digest = function () { var t = this; return this.key ? this.key.then(function (o) { return be().crypto.subtle.sign(Cm, o, t.toHash).then(function (e) { return new Uint8Array(e); }); }) : xm(this.toHash) ? Promise.resolve(jC) : Promise.resolve().then(function () { return be().crypto.subtle.digest(hm, t.toHash); }).then(function (o) { return Promise.resolve(new Uint8Array(o)); }); }, r.prototype.reset = function () { this.toHash = new Uint8Array(0); }, r; })();
function zC(r) { return typeof r == "string" ? Sn(r) : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(r); }
import { __awaiter as yG, __generator as EG } from "tslib";
var Q2 = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
function qC(r) { if (Y2(r) && typeof r.crypto.subtle == "object") {
    var t = r.crypto.subtle;
    return tL(t);
} return !1; }
function Y2(r) { if (typeof r == "object" && typeof r.crypto == "object") {
    var t = r.crypto.getRandomValues;
    return typeof t == "function";
} return !1; }
function tL(r) { return r && Q2.every(function (t) { return typeof r[t] == "function"; }); }
var eL = typeof Buffer < "u" && Buffer.from ? function (r) { return Buffer.from(r, "utf8"); } : Sn;
function Em(r) { return r instanceof Uint8Array ? r : typeof r == "string" ? eL(r) : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(r); }
var HC = (function () { function r(t) { if (qC(be()))
    this.hash = new ym(t);
else
    throw new Error("SHA1 not supported"); } return r.prototype.update = function (t, o) { this.hash.update(Em(t)); }, r.prototype.digest = function () { return this.hash.digest(); }, r.prototype.reset = function () { this.hash.reset(); }, r; })();
var Sm = r => new TextEncoder().encode(r);
var rL = typeof Buffer < "u" && Buffer.from ? function (r) { return Buffer.from(r, "utf8"); } : Sm;
function Ye(r) { return r instanceof Uint8Array ? r : typeof r == "string" ? rL(r) : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(r); }
function yo(r) { return typeof r == "string" ? r.length === 0 : r.byteLength === 0; }
var bm = { name: "SHA-256" }, km = { name: "HMAC", hash: bm }, FC = new Uint8Array([227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85]);
var Bm = (function () { function r(t) { this.toHash = new Uint8Array(0), this.secret = t, this.reset(); } return r.prototype.update = function (t) { if (!yo(t)) {
    var o = Ye(t), e = new Uint8Array(this.toHash.byteLength + o.byteLength);
    e.set(this.toHash, 0), e.set(o, this.toHash.byteLength), this.toHash = e;
} }, r.prototype.digest = function () { var t = this; return this.key ? this.key.then(function (o) { return be().crypto.subtle.sign(km, o, t.toHash).then(function (e) { return new Uint8Array(e); }); }) : yo(this.toHash) ? Promise.resolve(FC) : Promise.resolve().then(function () { return be().crypto.subtle.digest(bm, t.toHash); }).then(function (o) { return Promise.resolve(new Uint8Array(o)); }); }, r.prototype.reset = function () { var t = this; this.toHash = new Uint8Array(0), this.secret && this.secret !== void 0 && (this.key = new Promise(function (o, e) { be().crypto.subtle.importKey("raw", Ye(t.secret), km, !1, ["sign"]).then(o, e); }), this.key.catch(function () { })); }, r; })();
import { __awaiter as oL, __generator as nL } from "tslib";
var le = 64, VC = 32, KC = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), WC = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], ZC = Math.pow(2, 53) - 1;
var bn = (function () { function r() { this.state = Int32Array.from(WC), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1; } return r.prototype.update = function (t) { if (this.finished)
    throw new Error("Attempted to update an already finished hash."); var o = 0, e = t.byteLength; if (this.bytesHashed += e, this.bytesHashed * 8 > ZC)
    throw new Error("Cannot hash more than 2^53 - 1 bits"); for (; e > 0;)
    this.buffer[this.bufferLength++] = t[o++], e--, this.bufferLength === le && (this.hashBuffer(), this.bufferLength = 0); }, r.prototype.digest = function () { if (!this.finished) {
    var t = this.bytesHashed * 8, o = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), e = this.bufferLength;
    if (o.setUint8(this.bufferLength++, 128), e % le >= le - 8) {
        for (var s = this.bufferLength; s < le; s++)
            o.setUint8(s, 0);
        this.hashBuffer(), this.bufferLength = 0;
    }
    for (var s = this.bufferLength; s < le - 8; s++)
        o.setUint8(s, 0);
    o.setUint32(le - 8, Math.floor(t / 4294967296), !0), o.setUint32(le - 4, t), this.hashBuffer(), this.finished = !0;
} for (var a = new Uint8Array(VC), s = 0; s < 8; s++)
    a[s * 4] = this.state[s] >>> 24 & 255, a[s * 4 + 1] = this.state[s] >>> 16 & 255, a[s * 4 + 2] = this.state[s] >>> 8 & 255, a[s * 4 + 3] = this.state[s] >>> 0 & 255; return a; }, r.prototype.hashBuffer = function () { for (var t = this, o = t.buffer, e = t.state, s = e[0], a = e[1], c = e[2], x = e[3], h = e[4], k = e[5], A = e[6], v = e[7], I = 0; I < le; I++) {
    if (I < 16)
        this.temp[I] = (o[I * 4] & 255) << 24 | (o[I * 4 + 1] & 255) << 16 | (o[I * 4 + 2] & 255) << 8 | o[I * 4 + 3] & 255;
    else {
        var T = this.temp[I - 2], $ = (T >>> 17 | T << 15) ^ (T >>> 19 | T << 13) ^ T >>> 10;
        T = this.temp[I - 15];
        var G = (T >>> 7 | T << 25) ^ (T >>> 18 | T << 14) ^ T >>> 3;
        this.temp[I] = ($ + this.temp[I - 7] | 0) + (G + this.temp[I - 16] | 0);
    }
    var q = (((h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7)) + (h & k ^ ~h & A) | 0) + (v + (KC[I] + this.temp[I] | 0) | 0) | 0, et = ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + (s & a ^ s & c ^ a & c) | 0;
    v = A, A = k, k = h, h = x + q | 0, x = c, c = a, a = s, s = q + et | 0;
} e[0] += s, e[1] += a, e[2] += c, e[3] += x, e[4] += h, e[5] += k, e[6] += A, e[7] += v; }, r; })();
var XC = (function () { function r(t) { this.secret = t, this.hash = new bn, this.reset(); } return r.prototype.update = function (t) { if (!(yo(t) || this.error))
    try {
        this.hash.update(Ye(t));
    }
    catch (o) {
        this.error = o;
    } }, r.prototype.digestSync = function () { if (this.error)
    throw this.error; return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest(); }, r.prototype.digest = function () { return oL(this, void 0, void 0, function () { return nL(this, function (t) { return [2, this.digestSync()]; }); }); }, r.prototype.reset = function () { if (this.hash = new bn, this.secret) {
    this.outer = new bn;
    var t = sL(this.secret), o = new Uint8Array(le);
    o.set(t);
    for (var e = 0; e < le; e++)
        t[e] ^= 54, o[e] ^= 92;
    this.hash.update(t), this.outer.update(o);
    for (var e = 0; e < t.byteLength; e++)
        t[e] = 0;
} }, r; })();
function sL(r) { var t = Ye(r); if (t.byteLength > le) {
    var o = new bn;
    o.update(t), t = o.digest();
} var e = new Uint8Array(le); return e.set(t), e; }
import { __awaiter as Aj, __generator as Rj } from "tslib";
var iL = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
function JC(r) { if (aL(r) && typeof r.crypto.subtle == "object") {
    var t = r.crypto.subtle;
    return cL(t);
} return !1; }
function aL(r) { if (typeof r == "object" && typeof r.crypto == "object") {
    var t = r.crypto.getRandomValues;
    return typeof t == "function";
} return !1; }
function cL(r) { return r && iL.every(function (t) { return typeof r[t] == "function"; }); }
var QC = (function () { function r(t) { JC(be()) ? this.hash = new Bm(t) : this.hash = new XC(t); } return r.prototype.update = function (t, o) { this.hash.update(Ye(t)); }, r.prototype.digest = function () { return this.hash.digest(); }, r.prototype.reset = function () { this.hash.reset(); }, r; })();
import { Crc32 as EL } from "@aws-crypto/crc32";
var Eo = class r {
    bytes;
    constructor(t) { if (this.bytes = t, t.byteLength !== 8)
        throw new Error("Int64 buffers must be exactly 8 bytes"); }
    static fromNumber(t) { if (t > 9223372036854776e3 || t < -9223372036854776e3)
        throw new Error(`${t} is too large (or, if negative, too small) to represent as an Int64`); let o = new Uint8Array(8); for (let e = 7, s = Math.abs(Math.round(t)); e > -1 && s > 0; e--, s /= 256)
        o[e] = s; return t < 0 && YC(o), new r(o); }
    valueOf() { let t = this.bytes.slice(0), o = t[0] & 128; return o && YC(t), parseInt(Ue(t), 16) * (o ? -1 : 1); }
    toString() { return String(this.valueOf()); }
};
function YC(r) { for (let t = 0; t < 8; t++)
    r[t] ^= 255; for (let t = 7; t > -1 && (r[t]++, r[t] === 0); t--)
    ; }
var ni = class {
    toUtf8;
    fromUtf8;
    constructor(t, o) { this.toUtf8 = t, this.fromUtf8 = o; }
    format(t) { let o = []; for (let a of Object.keys(t)) {
        let c = this.fromUtf8(a);
        o.push(Uint8Array.from([c.byteLength]), c, this.formatHeaderValue(t[a]));
    } let e = new Uint8Array(o.reduce((a, c) => a + c.byteLength, 0)), s = 0; for (let a of o)
        e.set(a, s), s += a.byteLength; return e; }
    formatHeaderValue(t) { switch (t.type) {
        case "boolean": return Uint8Array.from([t.value ? 0 : 1]);
        case "byte": return Uint8Array.from([2, t.value]);
        case "short":
            let o = new DataView(new ArrayBuffer(3));
            return o.setUint8(0, 3), o.setInt16(1, t.value, !1), new Uint8Array(o.buffer);
        case "integer":
            let e = new DataView(new ArrayBuffer(5));
            return e.setUint8(0, 4), e.setInt32(1, t.value, !1), new Uint8Array(e.buffer);
        case "long":
            let s = new Uint8Array(9);
            return s[0] = 5, s.set(t.value.bytes, 1), s;
        case "binary":
            let a = new DataView(new ArrayBuffer(3 + t.value.byteLength));
            a.setUint8(0, 6), a.setUint16(1, t.value.byteLength, !1);
            let c = new Uint8Array(a.buffer);
            return c.set(t.value, 3), c;
        case "string":
            let x = this.fromUtf8(t.value), h = new DataView(new ArrayBuffer(3 + x.byteLength));
            h.setUint8(0, 7), h.setUint16(1, x.byteLength, !1);
            let k = new Uint8Array(h.buffer);
            return k.set(x, 3), k;
        case "timestamp":
            let A = new Uint8Array(9);
            return A[0] = 8, A.set(Eo.fromNumber(t.value.valueOf()).bytes, 1), A;
        case "uuid":
            if (!hL.test(t.value))
                throw new Error(`Invalid UUID received: ${t.value}`);
            let v = new Uint8Array(17);
            return v[0] = 9, v.set($m(t.value.replace(/\-/g, "")), 1), v;
    } }
    parse(t) { let o = {}, e = 0; for (; e < t.byteLength;) {
        let s = t.getUint8(e++), a = this.toUtf8(new Uint8Array(t.buffer, t.byteOffset + e, s));
        switch (e += s, t.getUint8(e++)) {
            case 0:
                o[a] = { type: ty, value: !0 };
                break;
            case 1:
                o[a] = { type: ty, value: !1 };
                break;
            case 2:
                o[a] = { type: uL, value: t.getInt8(e++) };
                break;
            case 3:
                o[a] = { type: mL, value: t.getInt16(e, !1) }, e += 2;
                break;
            case 4:
                o[a] = { type: pL, value: t.getInt32(e, !1) }, e += 4;
                break;
            case 5:
                o[a] = { type: lL, value: new Eo(new Uint8Array(t.buffer, t.byteOffset + e, 8)) }, e += 8;
                break;
            case 6:
                let c = t.getUint16(e, !1);
                e += 2, o[a] = { type: dL, value: new Uint8Array(t.buffer, t.byteOffset + e, c) }, e += c;
                break;
            case 7:
                let x = t.getUint16(e, !1);
                e += 2, o[a] = { type: fL, value: this.toUtf8(new Uint8Array(t.buffer, t.byteOffset + e, x)) }, e += x;
                break;
            case 8:
                o[a] = { type: gL, value: new Date(new Eo(new Uint8Array(t.buffer, t.byteOffset + e, 8)).valueOf()) }, e += 8;
                break;
            case 9:
                let h = new Uint8Array(t.buffer, t.byteOffset + e, 16);
                e += 16, o[a] = { type: xL, value: `${Ue(h.subarray(0, 4))}-${Ue(h.subarray(4, 6))}-${Ue(h.subarray(6, 8))}-${Ue(h.subarray(8, 10))}-${Ue(h.subarray(10))}` };
                break;
            default: throw new Error("Unrecognized header type tag");
        }
    } return o; }
};
var ty = "boolean", uL = "byte", mL = "short", pL = "integer", lL = "long", dL = "binary", fL = "string", gL = "timestamp", xL = "uuid", hL = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
import { Crc32 as CL } from "@aws-crypto/crc32";
var ey = 4, cr = ey * 2, _r = 4, yL = cr + _r * 2;
function ry({ byteLength: r, byteOffset: t, buffer: o }) { if (r < yL)
    throw new Error("Provided message too short to accommodate event stream message overhead"); let e = new DataView(o, t, r), s = e.getUint32(0, !1); if (r !== s)
    throw new Error("Reported message length does not match received message length"); let a = e.getUint32(ey, !1), c = e.getUint32(cr, !1), x = e.getUint32(r - _r, !1), h = new CL().update(new Uint8Array(o, t, cr)); if (c !== h.digest())
    throw new Error(`The prelude checksum specified in the message (${c}) does not match the calculated CRC32 checksum (${h.digest()})`); if (h.update(new Uint8Array(o, t + cr, r - (cr + _r))), x !== h.digest())
    throw new Error(`The message checksum (${h.digest()}) did not match the expected value of ${x}`); return { headers: new DataView(o, t + cr + _r, a), body: new Uint8Array(o, t + cr + _r + a, s - a - (cr + _r + _r)) }; }
var si = class {
    headerMarshaller;
    messageBuffer;
    isEndOfStream;
    constructor(t, o) { this.headerMarshaller = new ni(t, o), this.messageBuffer = [], this.isEndOfStream = !1; }
    feed(t) { this.messageBuffer.push(this.decode(t)); }
    endOfStream() { this.isEndOfStream = !0; }
    getMessage() { let t = this.messageBuffer.pop(), o = this.isEndOfStream; return { getMessage() { return t; }, isEndOfStream() { return o; } }; }
    getAvailableMessages() { let t = this.messageBuffer; this.messageBuffer = []; let o = this.isEndOfStream; return { getMessages() { return t; }, isEndOfStream() { return o; } }; }
    encode({ headers: t, body: o }) { let e = this.headerMarshaller.format(t), s = e.byteLength + o.byteLength + 16, a = new Uint8Array(s), c = new DataView(a.buffer, a.byteOffset, a.byteLength), x = new EL; return c.setUint32(0, s, !1), c.setUint32(4, e.byteLength, !1), c.setUint32(8, x.update(a.subarray(0, 8)).digest(), !1), a.set(e, 12), a.set(o, e.byteLength + 12), c.setUint32(s - 4, x.update(a.subarray(8, s - 4)).digest(), !1), a; }
    decode(t) { let { headers: o, body: e } = ry(t); return { headers: this.headerMarshaller.parse(o), body: e }; }
    formatHeaders(t) { return this.headerMarshaller.format(t); }
};
var ii = class {
    options;
    constructor(t) { this.options = t; }
    [Symbol.asyncIterator]() { return this.asyncIterator(); }
    asyncIterator() { return de(this, null, function* () { try {
        for (var t = Fe(this.options.inputStream), o, e, s; o = !(e = yield new It(t.next())).done; o = !1) {
            let a = e.value;
            yield this.options.decoder.decode(a);
        }
    }
    catch {
        s = [e];
    }
    finally {
        try {
            o && (e = t.return) && (yield new It(e.call(t)));
        }
        finally {
            if (s)
                throw s[0];
        }
    } }); }
};
var ai = class {
    options;
    constructor(t) { this.options = t; }
    [Symbol.asyncIterator]() { return this.asyncIterator(); }
    asyncIterator() { return de(this, null, function* () { try {
        for (var t = Fe(this.options.messageStream), o, e, s; o = !(e = yield new It(t.next())).done; o = !1) {
            let a = e.value;
            yield this.options.encoder.encode(a);
        }
    }
    catch {
        s = [e];
    }
    finally {
        try {
            o && (e = t.return) && (yield new It(e.call(t)));
        }
        finally {
            if (s)
                throw s[0];
        }
    } this.options.includeEndFrame && (yield new Uint8Array(0)); }); }
};
var ci = class {
    options;
    constructor(t) { this.options = t; }
    [Symbol.asyncIterator]() { return this.asyncIterator(); }
    asyncIterator() { return de(this, null, function* () { try {
        for (var t = Fe(this.options.messageStream), o, e, s; o = !(e = yield new It(t.next())).done; o = !1) {
            let a = e.value;
            let c = yield new It(this.options.deserializer(a));
            c !== void 0 && (yield c);
        }
    }
    catch {
        s = [e];
    }
    finally {
        try {
            o && (e = t.return) && (yield new It(e.call(t)));
        }
        finally {
            if (s)
                throw s[0];
        }
    } }); }
};
var ui = class {
    options;
    constructor(t) { this.options = t; }
    [Symbol.asyncIterator]() { return this.asyncIterator(); }
    asyncIterator() { return de(this, null, function* () { try {
        for (var t = Fe(this.options.inputStream), o, e, s; o = !(e = yield new It(t.next())).done; o = !1) {
            let a = e.value;
            yield this.options.serializer(a);
        }
    }
    catch {
        s = [e];
    }
    finally {
        try {
            o && (e = t.return) && (yield new It(e.call(t)));
        }
        finally {
            if (s)
                throw s[0];
        }
    } }); }
};
function oy(r) { let t = 0, o = 0, e = null, s = null, a = x => { if (typeof x != "number")
    throw new Error("Attempted to allocate an event message where size was not a number: " + x); t = x, o = 4, e = new Uint8Array(x), new DataView(e.buffer).setUint32(0, x, !1); }, c = function () { return de(this, null, function* () { let x = r[Symbol.asyncIterator](); for (;;) {
    let { value: h, done: k } = yield new It(x.next());
    if (k) {
        if (t)
            if (t === o)
                yield e;
            else
                throw new Error("Truncated event message received.");
        else
            return;
        return;
    }
    let A = h.length, v = 0;
    for (; v < A;) {
        if (!e) {
            let T = A - v;
            s || (s = new Uint8Array(4));
            let $ = Math.min(4 - o, T);
            if (s.set(h.slice(v, v + $), o), o += $, v += $, o < 4)
                break;
            a(new DataView(s.buffer).getUint32(0, !1)), s = null;
        }
        let I = Math.min(t - o, A - v);
        e.set(h.slice(v, v + I), o), o += I, v += I, t && t === o && (yield e, e = null, t = 0, o = 0);
    }
} }); }; return { [Symbol.asyncIterator]: c }; }
function ny(r, t) { return function (o) { return _(this, null, function* () { let { value: e } = o.headers[":message-type"]; if (e === "error") {
    let s = new Error(o.headers[":error-message"].value || "UnknownError");
    throw s.name = o.headers[":error-code"].value, s;
}
else if (e === "exception") {
    let s = o.headers[":exception-type"].value, a = { [s]: o }, c = yield r(a);
    if (c.$unknown) {
        let x = new Error(t(o.body));
        throw x.name = s, x;
    }
    throw c[s];
}
else if (e === "event") {
    let s = { [o.headers[":event-type"].value]: o }, a = yield r(s);
    return a.$unknown ? void 0 : a;
}
else
    throw Error(`Unrecognizable event type: ${o.headers[":event-type"].value}`); }); }; }
var mi = class {
    eventStreamCodec;
    utfEncoder;
    constructor({ utf8Encoder: t, utf8Decoder: o }) { this.eventStreamCodec = new si(t, o), this.utfEncoder = t; }
    deserialize(t, o) { let e = oy(t); return new ci({ messageStream: new ii({ inputStream: e, decoder: this.eventStreamCodec }), deserializer: ny(o, this.utfEncoder) }); }
    serialize(t, o) { return new ai({ messageStream: new ui({ inputStream: t, serializer: o }), encoder: this.eventStreamCodec, includeEndFrame: !0 }); }
};
var sy = r => ({ [Symbol.asyncIterator]: function () { return de(this, null, function* () { let t = r.getReader(); try {
        for (;;) {
            let { done: o, value: e } = yield new It(t.read());
            if (o)
                return;
            yield e;
        }
    }
    finally {
        t.releaseLock();
    } }); } }), iy = r => { let t = r[Symbol.asyncIterator](); return new ReadableStream({ pull(e) { return _(this, null, function* () { let { done: s, value: a } = yield t.next(); if (s)
        return e.close(); e.enqueue(a); }); } }); };
var pi = class {
    universalMarshaller;
    constructor({ utf8Encoder: t, utf8Decoder: o }) { this.universalMarshaller = new mi({ utf8Decoder: o, utf8Encoder: t }); }
    deserialize(t, o) { let e = SL(t) ? sy(t) : t; return this.universalMarshaller.deserialize(e, o); }
    serialize(t, o) { let e = this.universalMarshaller.serialize(t, o); return typeof ReadableStream == "function" ? iy(e) : e; }
}, SL = r => typeof ReadableStream == "function" && r instanceof ReadableStream;
var ay = r => new pi(r);
function cy(e, s) { return _(this, arguments, function* (r, t, o = 1024 * 1024) { let a = r.size, c = 0; for (; c < a;) {
    let x = r.slice(c, Math.min(a, c + o));
    t(new Uint8Array(yield x.arrayBuffer())), c += x.size;
} }); }
var uy = function (t, o) { return _(this, null, function* () { let e = new t; return yield cy(o, s => { e.update(s); }), e.digest(); }); };
var my = [1732584193, 4023233417, 2562383102, 271733878];
var li = class {
    state;
    buffer;
    bufferLength;
    bytesHashed;
    finished;
    constructor() { this.reset(); }
    update(t) { if (kL(t))
        return; if (this.finished)
        throw new Error("Attempted to update an already finished hash."); let o = BL(t), e = 0, { byteLength: s } = o; for (this.bytesHashed += s; s > 0;)
        this.buffer.setUint8(this.bufferLength++, o[e++]), s--, this.bufferLength === 64 && (this.hashBuffer(), this.bufferLength = 0); }
    digest() { return _(this, null, function* () { if (!this.finished) {
        let { buffer: o, bufferLength: e, bytesHashed: s } = this, a = s * 8;
        if (o.setUint8(this.bufferLength++, 128), e % 64 >= 56) {
            for (let c = this.bufferLength; c < 64; c++)
                o.setUint8(c, 0);
            this.hashBuffer(), this.bufferLength = 0;
        }
        for (let c = this.bufferLength; c < 56; c++)
            o.setUint8(c, 0);
        o.setUint32(56, a >>> 0, !0), o.setUint32(60, Math.floor(a / 4294967296), !0), this.hashBuffer(), this.finished = !0;
    } let t = new DataView(new ArrayBuffer(16)); for (let o = 0; o < 4; o++)
        t.setUint32(o * 4, this.state[o], !0); return new Uint8Array(t.buffer, t.byteOffset, t.byteLength); }); }
    hashBuffer() { let { buffer: t, state: o } = this, e = o[0], s = o[1], a = o[2], c = o[3]; e = Kt(e, s, a, c, t.getUint32(0, !0), 7, 3614090360), c = Kt(c, e, s, a, t.getUint32(4, !0), 12, 3905402710), a = Kt(a, c, e, s, t.getUint32(8, !0), 17, 606105819), s = Kt(s, a, c, e, t.getUint32(12, !0), 22, 3250441966), e = Kt(e, s, a, c, t.getUint32(16, !0), 7, 4118548399), c = Kt(c, e, s, a, t.getUint32(20, !0), 12, 1200080426), a = Kt(a, c, e, s, t.getUint32(24, !0), 17, 2821735955), s = Kt(s, a, c, e, t.getUint32(28, !0), 22, 4249261313), e = Kt(e, s, a, c, t.getUint32(32, !0), 7, 1770035416), c = Kt(c, e, s, a, t.getUint32(36, !0), 12, 2336552879), a = Kt(a, c, e, s, t.getUint32(40, !0), 17, 4294925233), s = Kt(s, a, c, e, t.getUint32(44, !0), 22, 2304563134), e = Kt(e, s, a, c, t.getUint32(48, !0), 7, 1804603682), c = Kt(c, e, s, a, t.getUint32(52, !0), 12, 4254626195), a = Kt(a, c, e, s, t.getUint32(56, !0), 17, 2792965006), s = Kt(s, a, c, e, t.getUint32(60, !0), 22, 1236535329), e = Wt(e, s, a, c, t.getUint32(4, !0), 5, 4129170786), c = Wt(c, e, s, a, t.getUint32(24, !0), 9, 3225465664), a = Wt(a, c, e, s, t.getUint32(44, !0), 14, 643717713), s = Wt(s, a, c, e, t.getUint32(0, !0), 20, 3921069994), e = Wt(e, s, a, c, t.getUint32(20, !0), 5, 3593408605), c = Wt(c, e, s, a, t.getUint32(40, !0), 9, 38016083), a = Wt(a, c, e, s, t.getUint32(60, !0), 14, 3634488961), s = Wt(s, a, c, e, t.getUint32(16, !0), 20, 3889429448), e = Wt(e, s, a, c, t.getUint32(36, !0), 5, 568446438), c = Wt(c, e, s, a, t.getUint32(56, !0), 9, 3275163606), a = Wt(a, c, e, s, t.getUint32(12, !0), 14, 4107603335), s = Wt(s, a, c, e, t.getUint32(32, !0), 20, 1163531501), e = Wt(e, s, a, c, t.getUint32(52, !0), 5, 2850285829), c = Wt(c, e, s, a, t.getUint32(8, !0), 9, 4243563512), a = Wt(a, c, e, s, t.getUint32(28, !0), 14, 1735328473), s = Wt(s, a, c, e, t.getUint32(48, !0), 20, 2368359562), e = Zt(e, s, a, c, t.getUint32(20, !0), 4, 4294588738), c = Zt(c, e, s, a, t.getUint32(32, !0), 11, 2272392833), a = Zt(a, c, e, s, t.getUint32(44, !0), 16, 1839030562), s = Zt(s, a, c, e, t.getUint32(56, !0), 23, 4259657740), e = Zt(e, s, a, c, t.getUint32(4, !0), 4, 2763975236), c = Zt(c, e, s, a, t.getUint32(16, !0), 11, 1272893353), a = Zt(a, c, e, s, t.getUint32(28, !0), 16, 4139469664), s = Zt(s, a, c, e, t.getUint32(40, !0), 23, 3200236656), e = Zt(e, s, a, c, t.getUint32(52, !0), 4, 681279174), c = Zt(c, e, s, a, t.getUint32(0, !0), 11, 3936430074), a = Zt(a, c, e, s, t.getUint32(12, !0), 16, 3572445317), s = Zt(s, a, c, e, t.getUint32(24, !0), 23, 76029189), e = Zt(e, s, a, c, t.getUint32(36, !0), 4, 3654602809), c = Zt(c, e, s, a, t.getUint32(48, !0), 11, 3873151461), a = Zt(a, c, e, s, t.getUint32(60, !0), 16, 530742520), s = Zt(s, a, c, e, t.getUint32(8, !0), 23, 3299628645), e = Xt(e, s, a, c, t.getUint32(0, !0), 6, 4096336452), c = Xt(c, e, s, a, t.getUint32(28, !0), 10, 1126891415), a = Xt(a, c, e, s, t.getUint32(56, !0), 15, 2878612391), s = Xt(s, a, c, e, t.getUint32(20, !0), 21, 4237533241), e = Xt(e, s, a, c, t.getUint32(48, !0), 6, 1700485571), c = Xt(c, e, s, a, t.getUint32(12, !0), 10, 2399980690), a = Xt(a, c, e, s, t.getUint32(40, !0), 15, 4293915773), s = Xt(s, a, c, e, t.getUint32(4, !0), 21, 2240044497), e = Xt(e, s, a, c, t.getUint32(32, !0), 6, 1873313359), c = Xt(c, e, s, a, t.getUint32(60, !0), 10, 4264355552), a = Xt(a, c, e, s, t.getUint32(24, !0), 15, 2734768916), s = Xt(s, a, c, e, t.getUint32(52, !0), 21, 1309151649), e = Xt(e, s, a, c, t.getUint32(16, !0), 6, 4149444226), c = Xt(c, e, s, a, t.getUint32(44, !0), 10, 3174756917), a = Xt(a, c, e, s, t.getUint32(8, !0), 15, 718787259), s = Xt(s, a, c, e, t.getUint32(36, !0), 21, 3951481745), o[0] = e + o[0] & 4294967295, o[1] = s + o[1] & 4294967295, o[2] = a + o[2] & 4294967295, o[3] = c + o[3] & 4294967295; }
    reset() { this.state = Uint32Array.from(my), this.buffer = new DataView(new ArrayBuffer(64)), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1; }
};
function di(r, t, o, e, s, a) { return t = (t + r & 4294967295) + (e + a & 4294967295) & 4294967295, (t << s | t >>> 32 - s) + o & 4294967295; }
function Kt(r, t, o, e, s, a, c) { return di(t & o | ~t & e, r, t, s, a, c); }
function Wt(r, t, o, e, s, a, c) { return di(t & e | o & ~e, r, t, s, a, c); }
function Zt(r, t, o, e, s, a, c) { return di(t ^ o ^ e, r, t, s, a, c); }
function Xt(r, t, o, e, s, a, c) { return di(o ^ (t | ~e), r, t, s, a, c); }
function kL(r) { return typeof r == "string" ? r.length === 0 : r.byteLength === 0; }
function BL(r) { return typeof r == "string" ? Rr(r) : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(r); }
var py = r => ({ apiVersion: "2006-03-01", base64Decoder: r?.base64Decoder ?? dr, base64Encoder: r?.base64Encoder ?? Oe, disableHostPrefix: r?.disableHostPrefix ?? !1, endpointProvider: r?.endpointProvider ?? os, extensions: r?.extensions ?? [], getAwsChunkedEncodingStream: r?.getAwsChunkedEncodingStream ?? Op, httpAuthSchemeProvider: r?.httpAuthSchemeProvider ?? of, httpAuthSchemes: r?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: t => t.getIdentityProvider("aws.auth#sigv4"), signer: new Zm }, { schemeId: "aws.auth#sigv4a", identityProvider: t => t.getIdentityProvider("aws.auth#sigv4a"), signer: new Xm }], logger: r?.logger ?? new vn, protocol: r?.protocol ?? zn, protocolSettings: r?.protocolSettings ?? { defaultNamespace: "com.amazonaws.s3", xmlNamespace: "http://s3.amazonaws.com/doc/2006-03-01/", version: "2006-03-01", serviceTarget: "AmazonS3" }, sdkStreamMixin: r?.sdkStreamMixin ?? Dn, serviceId: r?.serviceId ?? "S3", signerConstructor: r?.signerConstructor ?? Mr, signingEscapePath: r?.signingEscapePath ?? !1, urlParser: r?.urlParser ?? Wm, useArnRegion: r?.useArnRegion ?? void 0, utf8Decoder: r?.utf8Decoder ?? Rr, utf8Encoder: r?.utf8Encoder ?? $e });
var ly = r => { let t = kp(r), o = () => t().then(sp), e = py(r); return p(u(u({}, e), r), { runtime: "browser", defaultsMode: t, bodyLengthChecker: r?.bodyLengthChecker ?? ep, credentialDefaultProvider: r?.credentialDefaultProvider ?? (s => () => Promise.reject(new Error("Credential is missing"))), defaultUserAgentProvider: r?.defaultUserAgentProvider ?? Sp({ serviceId: e.serviceId, clientVersion: GC.version }), eventStreamSerdeProvider: r?.eventStreamSerdeProvider ?? ay, maxAttempts: r?.maxAttempts ?? hp, md5: r?.md5 ?? li, region: r?.region ?? bp("Region is missing"), requestHandler: Mm.create(r?.requestHandler ?? o), retryMode: r?.retryMode ?? (() => _(null, null, function* () { return (yield o()).retryMode || Cp; })), sha1: r?.sha1 ?? HC, sha256: r?.sha256 ?? QC, streamCollector: r?.streamCollector ?? Pn, streamHasher: r?.streamHasher ?? uy, useDualstackEndpoint: r?.useDualstackEndpoint ?? (() => Promise.resolve(pp)), useFipsEndpoint: r?.useFipsEndpoint ?? (() => Promise.resolve(lp)) }); };
var dy = r => { let t = r.httpAuthSchemes, o = r.httpAuthSchemeProvider, e = r.credentials; return { setHttpAuthScheme(s) { let a = t.findIndex(c => c.schemeId === s.schemeId); a === -1 ? t.push(s) : t.splice(a, 1, s); }, httpAuthSchemes() { return t; }, setHttpAuthSchemeProvider(s) { o = s; }, httpAuthSchemeProvider() { return o; }, setCredentials(s) { e = s; }, credentials() { return e; } }; }, fy = r => ({ httpAuthSchemes: r.httpAuthSchemes(), httpAuthSchemeProvider: r.httpAuthSchemeProvider(), credentials: r.credentials() });
var gy = (r, t) => { let o = Object.assign(Bp(r), ip(r), Am(r), dy(r)); return t.forEach(e => e.configure(o)), Object.assign(r, Pp(o), ap(o), Rm(o), fy(o)); };
var ve = class extends rp {
    config;
    constructor(...[t]) { let o = ly(t || {}); super(o), this.initConfig = o; let e = sf(o), s = qm(e), a = il(s), c = yp(a), x = dp(c), h = x, k = xp(h), A = _l(k), v = nf(A), I = Sl(v, { session: [() => this, Co] }), T = gy(I, t?.extensions || []); this.config = T, this.middlewareStack.use(Um(this.config)), this.middlewareStack.use(mp(this.config)), this.middlewareStack.use(Ep(this.config)), this.middlewareStack.use(fp(this.config)), this.middlewareStack.use(vm(this.config)), this.middlewareStack.use(wm(this.config)), this.middlewareStack.use(Om(this.config)), this.middlewareStack.use(Tm(this.config, { httpAuthSchemeParametersProvider: tf, identityProviderConfigProvider: $ => _(this, null, function* () { return new zm({ "aws.auth#sigv4": $.credentials, "aws.auth#sigv4a": $.credentials }); }) })), this.middlewareStack.use(Im(this.config)), this.middlewareStack.use(Pl(this.config)), this.middlewareStack.use(_p(this.config)), this.middlewareStack.use(ml(this.config)), this.middlewareStack.use(Bc(this.config)), this.middlewareStack.use(Pc(this.config)); }
    destroy() { super.destroy(); }
};
var fi = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "AbortMultipartUpload", {}).n("S3Client", "AbortMultipartUploadCommand").sc(z0).build() {
};
function PL(r) { return t => o => _(null, null, function* () { let e = u({}, o.input), s = [{ target: "SSECustomerKey", hash: "SSECustomerKeyMD5" }, { target: "CopySourceSSECustomerKey", hash: "CopySourceSSECustomerKeyMD5" }]; for (let a of s) {
    let c = e[a.target];
    if (c) {
        let x;
        typeof c == "string" ? AL(c, r) ? x = r.base64Decoder(c) : (x = r.utf8Decoder(c), e[a.target] = r.base64Encoder(x)) : (x = ArrayBuffer.isView(c) ? new Uint8Array(c.buffer, c.byteOffset, c.byteLength) : new Uint8Array(c), e[a.target] = r.base64Encoder(x));
        let h = new r.md5;
        h.update(x), e[a.hash] = r.base64Encoder(yield h.digest());
    }
} return t(p(u({}, o), { input: e })); }); }
var _L = { name: "ssecMiddleware", step: "initialize", tags: ["SSE"], override: !0 }, St = r => ({ applyToStack: t => { t.add(PL(r), _L); } });
function AL(r, t) { if (!/^(?:[A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r))
    return !1; try {
    return t.base64Decoder(r).length === 32;
}
catch {
    return !1;
} }
var gi = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), St(e)]; }).s("AmazonS3", "CompleteMultipartUpload", {}).n("S3Client", "CompleteMultipartUploadCommand").sc(q0).build() {
};
var xi = class extends d.classBuilder().ep(p(u({}, g), { DisableS3ExpressSessionAuth: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" }, CopySource: { type: "contextParams", name: "CopySource" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), St(e)]; }).s("AmazonS3", "CopyObject", {}).n("S3Client", "CopyObjectCommand").sc(H0).build() {
};
function RL(r) { return t => o => _(null, null, function* () { let { CreateBucketConfiguration: e } = o.input, s = yield r.region(); return !e?.LocationConstraint && !e?.Location && s !== "us-east-1" && (o.input.CreateBucketConfiguration = o.input.CreateBucketConfiguration ?? {}, o.input.CreateBucketConfiguration.LocationConstraint = s), t(o); }); }
var vL = { step: "initialize", tags: ["LOCATION_CONSTRAINT", "CREATE_BUCKET_CONFIGURATION"], name: "locationConstraintMiddleware", override: !0 }, xy = r => ({ applyToStack: t => { t.add(RL(r), vL); } });
var hi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, DisableAccessPoints: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), xy(e)]; }).s("AmazonS3", "CreateBucket", {}).n("S3Client", "CreateBucketCommand").sc(F0).build() {
};
var Ci = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "CreateBucketMetadataConfiguration", {}).n("S3Client", "CreateBucketMetadataConfigurationCommand").sc(V0).build() {
};
var yi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "CreateBucketMetadataTableConfiguration", {}).n("S3Client", "CreateBucketMetadataTableConfigurationCommand").sc(K0).build() {
};
var Ei = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), St(e)]; }).s("AmazonS3", "CreateMultipartUpload", {}).n("S3Client", "CreateMultipartUploadCommand").sc(W0).build() {
};
var Si = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketAnalyticsConfiguration", {}).n("S3Client", "DeleteBucketAnalyticsConfigurationCommand").sc(J0).build() {
};
var bi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucket", {}).n("S3Client", "DeleteBucketCommand").sc(X0).build() {
};
var ki = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketCors", {}).n("S3Client", "DeleteBucketCorsCommand").sc(Q0).build() {
};
var Bi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketEncryption", {}).n("S3Client", "DeleteBucketEncryptionCommand").sc(Y0).build() {
};
var Pi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketIntelligentTieringConfiguration", {}).n("S3Client", "DeleteBucketIntelligentTieringConfigurationCommand").sc(th).build() {
};
var _i = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketInventoryConfiguration", {}).n("S3Client", "DeleteBucketInventoryConfigurationCommand").sc(eh).build() {
};
var Ai = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketLifecycle", {}).n("S3Client", "DeleteBucketLifecycleCommand").sc(rh).build() {
};
var Ri = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketMetadataConfiguration", {}).n("S3Client", "DeleteBucketMetadataConfigurationCommand").sc(oh).build() {
};
var vi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketMetadataTableConfiguration", {}).n("S3Client", "DeleteBucketMetadataTableConfigurationCommand").sc(nh).build() {
};
var wi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketMetricsConfiguration", {}).n("S3Client", "DeleteBucketMetricsConfigurationCommand").sc(sh).build() {
};
var Oi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketOwnershipControls", {}).n("S3Client", "DeleteBucketOwnershipControlsCommand").sc(ih).build() {
};
var Ti = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketPolicy", {}).n("S3Client", "DeleteBucketPolicyCommand").sc(ah).build() {
};
var Di = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketReplication", {}).n("S3Client", "DeleteBucketReplicationCommand").sc(ch).build() {
};
var Ii = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketTagging", {}).n("S3Client", "DeleteBucketTaggingCommand").sc(uh).build() {
};
var Li = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeleteBucketWebsite", {}).n("S3Client", "DeleteBucketWebsiteCommand").sc(mh).build() {
};
var Mi = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "DeleteObject", {}).n("S3Client", "DeleteObjectCommand").sc(ph).build() {
};
var $i = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 }), E(e)]; }).s("AmazonS3", "DeleteObjects", {}).n("S3Client", "DeleteObjectsCommand").sc(lh).build() {
};
var Ui = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "DeleteObjectTagging", {}).n("S3Client", "DeleteObjectTaggingCommand").sc(dh).build() {
};
var Ni = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "DeletePublicAccessBlock", {}).n("S3Client", "DeletePublicAccessBlockCommand").sc(fh).build() {
};
var Gi = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketAbac", {}).n("S3Client", "GetBucketAbacCommand").sc(gh).build() {
};
var ji = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketAccelerateConfiguration", {}).n("S3Client", "GetBucketAccelerateConfigurationCommand").sc(xh).build() {
};
var zi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketAcl", {}).n("S3Client", "GetBucketAclCommand").sc(hh).build() {
};
var qi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketAnalyticsConfiguration", {}).n("S3Client", "GetBucketAnalyticsConfigurationCommand").sc(Ch).build() {
};
var Hi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketCors", {}).n("S3Client", "GetBucketCorsCommand").sc(yh).build() {
};
var Fi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketEncryption", {}).n("S3Client", "GetBucketEncryptionCommand").sc(Eh).build() {
};
var Vi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketIntelligentTieringConfiguration", {}).n("S3Client", "GetBucketIntelligentTieringConfigurationCommand").sc(Sh).build() {
};
var Ki = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketInventoryConfiguration", {}).n("S3Client", "GetBucketInventoryConfigurationCommand").sc(bh).build() {
};
var Wi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketLifecycleConfiguration", {}).n("S3Client", "GetBucketLifecycleConfigurationCommand").sc(kh).build() {
};
var Zi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketLocation", {}).n("S3Client", "GetBucketLocationCommand").sc(Bh).build() {
};
var Xi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketLogging", {}).n("S3Client", "GetBucketLoggingCommand").sc(Ph).build() {
};
var Ji = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketMetadataConfiguration", {}).n("S3Client", "GetBucketMetadataConfigurationCommand").sc(_h).build() {
};
var Qi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketMetadataTableConfiguration", {}).n("S3Client", "GetBucketMetadataTableConfigurationCommand").sc(Ah).build() {
};
var Yi = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketMetricsConfiguration", {}).n("S3Client", "GetBucketMetricsConfigurationCommand").sc(Rh).build() {
};
var ta = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketNotificationConfiguration", {}).n("S3Client", "GetBucketNotificationConfigurationCommand").sc(vh).build() {
};
var ea = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketOwnershipControls", {}).n("S3Client", "GetBucketOwnershipControlsCommand").sc(wh).build() {
};
var ra = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketPolicy", {}).n("S3Client", "GetBucketPolicyCommand").sc(Oh).build() {
};
var oa = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketPolicyStatus", {}).n("S3Client", "GetBucketPolicyStatusCommand").sc(Th).build() {
};
var na = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketReplication", {}).n("S3Client", "GetBucketReplicationCommand").sc(Dh).build() {
};
var sa = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketRequestPayment", {}).n("S3Client", "GetBucketRequestPaymentCommand").sc(Ih).build() {
};
var ia = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketTagging", {}).n("S3Client", "GetBucketTaggingCommand").sc(Lh).build() {
};
var aa = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketVersioning", {}).n("S3Client", "GetBucketVersioningCommand").sc(Mh).build() {
};
var ca = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetBucketWebsite", {}).n("S3Client", "GetBucketWebsiteCommand").sc($h).build() {
};
var ua = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetObjectAcl", {}).n("S3Client", "GetObjectAclCommand").sc(Nh).build() {
};
var ma = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), St(e)]; }).s("AmazonS3", "GetObjectAttributes", {}).n("S3Client", "GetObjectAttributesCommand").sc(Gh).build() {
};
var pa = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestChecksumRequired: !1, requestValidationModeMember: "ChecksumMode", responseAlgorithms: ["CRC64NVME", "CRC32", "CRC32C", "SHA256", "SHA1"] }), St(e), Kn(e)]; }).s("AmazonS3", "GetObject", {}).n("S3Client", "GetObjectCommand").sc(Uh).build() {
};
var la = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetObjectLegalHold", {}).n("S3Client", "GetObjectLegalHoldCommand").sc(jh).build() {
};
var da = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetObjectLockConfiguration", {}).n("S3Client", "GetObjectLockConfigurationCommand").sc(zh).build() {
};
var fa = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetObjectRetention", {}).n("S3Client", "GetObjectRetentionCommand").sc(qh).build() {
};
var ga = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetObjectTagging", {}).n("S3Client", "GetObjectTaggingCommand").sc(Hh).build() {
};
var xa = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "GetObjectTorrent", {}).n("S3Client", "GetObjectTorrentCommand").sc(Fh).build() {
};
var ha = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "GetPublicAccessBlock", {}).n("S3Client", "GetPublicAccessBlockCommand").sc(Vh).build() {
};
var mr = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "HeadBucket", {}).n("S3Client", "HeadBucketCommand").sc(Kh).build() {
};
var pr = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), St(e), Kn(e)]; }).s("AmazonS3", "HeadObject", {}).n("S3Client", "HeadObjectCommand").sc(Wh).build() {
};
var Ca = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListBucketAnalyticsConfigurations", {}).n("S3Client", "ListBucketAnalyticsConfigurationsCommand").sc(Zh).build() {
};
var ya = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListBucketIntelligentTieringConfigurations", {}).n("S3Client", "ListBucketIntelligentTieringConfigurationsCommand").sc(Xh).build() {
};
var Ea = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListBucketInventoryConfigurations", {}).n("S3Client", "ListBucketInventoryConfigurationsCommand").sc(Jh).build() {
};
var Sa = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListBucketMetricsConfigurations", {}).n("S3Client", "ListBucketMetricsConfigurationsCommand").sc(Qh).build() {
};
var So = class extends d.classBuilder().ep(g).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListBuckets", {}).n("S3Client", "ListBucketsCommand").sc(Yh).build() {
};
var bo = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListDirectoryBuckets", {}).n("S3Client", "ListDirectoryBucketsCommand").sc(tC).build() {
};
var ba = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Prefix: { type: "contextParams", name: "Prefix" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListMultipartUploads", {}).n("S3Client", "ListMultipartUploadsCommand").sc(eC).build() {
};
var ka = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Prefix: { type: "contextParams", name: "Prefix" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListObjects", {}).n("S3Client", "ListObjectsCommand").sc(rC).build() {
};
var ko = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Prefix: { type: "contextParams", name: "Prefix" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListObjectsV2", {}).n("S3Client", "ListObjectsV2Command").sc(oC).build() {
};
var Ba = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Prefix: { type: "contextParams", name: "Prefix" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "ListObjectVersions", {}).n("S3Client", "ListObjectVersionsCommand").sc(nC).build() {
};
var Bo = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), St(e)]; }).s("AmazonS3", "ListParts", {}).n("S3Client", "ListPartsCommand").sc(sC).build() {
};
var Pa = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !1 })]; }).s("AmazonS3", "PutBucketAbac", {}).n("S3Client", "PutBucketAbacCommand").sc(iC).build() {
};
var _a = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !1 })]; }).s("AmazonS3", "PutBucketAccelerateConfiguration", {}).n("S3Client", "PutBucketAccelerateConfigurationCommand").sc(aC).build() {
};
var Aa = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketAcl", {}).n("S3Client", "PutBucketAclCommand").sc(cC).build() {
};
var Ra = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "PutBucketAnalyticsConfiguration", {}).n("S3Client", "PutBucketAnalyticsConfigurationCommand").sc(uC).build() {
};
var va = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketCors", {}).n("S3Client", "PutBucketCorsCommand").sc(mC).build() {
};
var wa = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketEncryption", {}).n("S3Client", "PutBucketEncryptionCommand").sc(pC).build() {
};
var Oa = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "PutBucketIntelligentTieringConfiguration", {}).n("S3Client", "PutBucketIntelligentTieringConfigurationCommand").sc(lC).build() {
};
var Ta = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "PutBucketInventoryConfiguration", {}).n("S3Client", "PutBucketInventoryConfigurationCommand").sc(dC).build() {
};
var Da = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 }), E(e)]; }).s("AmazonS3", "PutBucketLifecycleConfiguration", {}).n("S3Client", "PutBucketLifecycleConfigurationCommand").sc(fC).build() {
};
var Ia = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketLogging", {}).n("S3Client", "PutBucketLoggingCommand").sc(gC).build() {
};
var La = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "PutBucketMetricsConfiguration", {}).n("S3Client", "PutBucketMetricsConfigurationCommand").sc(xC).build() {
};
var Ma = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "PutBucketNotificationConfiguration", {}).n("S3Client", "PutBucketNotificationConfigurationCommand").sc(hC).build() {
};
var $a = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketOwnershipControls", {}).n("S3Client", "PutBucketOwnershipControlsCommand").sc(CC).build() {
};
var Ua = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketPolicy", {}).n("S3Client", "PutBucketPolicyCommand").sc(yC).build() {
};
var Na = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketReplication", {}).n("S3Client", "PutBucketReplicationCommand").sc(EC).build() {
};
var Ga = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketRequestPayment", {}).n("S3Client", "PutBucketRequestPaymentCommand").sc(SC).build() {
};
var ja = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketTagging", {}).n("S3Client", "PutBucketTaggingCommand").sc(bC).build() {
};
var za = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketVersioning", {}).n("S3Client", "PutBucketVersioningCommand").sc(kC).build() {
};
var qa = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutBucketWebsite", {}).n("S3Client", "PutBucketWebsiteCommand").sc(BC).build() {
};
var Ha = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 }), E(e)]; }).s("AmazonS3", "PutObjectAcl", {}).n("S3Client", "PutObjectAclCommand").sc(_C).build() {
};
var Fa = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !1 }), al(e), E(e), St(e)]; }).s("AmazonS3", "PutObject", {}).n("S3Client", "PutObjectCommand").sc(PC).build() {
};
var Va = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 }), E(e)]; }).s("AmazonS3", "PutObjectLegalHold", {}).n("S3Client", "PutObjectLegalHoldCommand").sc(AC).build() {
};
var Ka = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 }), E(e)]; }).s("AmazonS3", "PutObjectLockConfiguration", {}).n("S3Client", "PutObjectLockConfigurationCommand").sc(RC).build() {
};
var Wa = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 }), E(e)]; }).s("AmazonS3", "PutObjectRetention", {}).n("S3Client", "PutObjectRetentionCommand").sc(vC).build() {
};
var Za = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 }), E(e)]; }).s("AmazonS3", "PutObjectTagging", {}).n("S3Client", "PutObjectTaggingCommand").sc(wC).build() {
};
var Xa = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "PutPublicAccessBlock", {}).n("S3Client", "PutPublicAccessBlockCommand").sc(OC).build() {
};
var Ja = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e)]; }).s("AmazonS3", "RenameObject", {}).n("S3Client", "RenameObjectCommand").sc(TC).build() {
};
var Qa = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !1 }), E(e)]; }).s("AmazonS3", "RestoreObject", {}).n("S3Client", "RestoreObjectCommand").sc(DC).build() {
};
var Ya = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), St(e)]; }).s("AmazonS3", "SelectObjectContent", { eventStream: { output: !0 } }).n("S3Client", "SelectObjectContentCommand").sc(IC).build() {
};
var tc = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "UpdateBucketMetadataInventoryTableConfiguration", {}).n("S3Client", "UpdateBucketMetadataInventoryTableConfigurationCommand").sc(LC).build() {
};
var ec = class extends d.classBuilder().ep(p(u({}, g), { UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !0 })]; }).s("AmazonS3", "UpdateBucketMetadataJournalTableConfiguration", {}).n("S3Client", "UpdateBucketMetadataJournalTableConfigurationCommand").sc(MC).build() {
};
var rc = class extends d.classBuilder().ep(p(u({}, g), { Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), N(e, { requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" }, requestChecksumRequired: !1 }), E(e), St(e)]; }).s("AmazonS3", "UploadPart", {}).n("S3Client", "UploadPartCommand").sc($C).build() {
};
var oc = class extends d.classBuilder().ep(p(u({}, g), { DisableS3ExpressSessionAuth: { type: "staticContextParams", value: !0 }, Bucket: { type: "contextParams", name: "Bucket" } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions()), E(e), St(e)]; }).s("AmazonS3", "UploadPartCopy", {}).n("S3Client", "UploadPartCopyCommand").sc(UC).build() {
};
var nc = class extends d.classBuilder().ep(p(u({}, g), { UseObjectLambdaEndpoint: { type: "staticContextParams", value: !0 } })).m(function (t, o, e, s) { return [f(e, t.getEndpointParameterInstructions())]; }).s("AmazonS3", "WriteGetObjectResponse", {}).n("S3Client", "WriteGetObjectResponseCommand").sc(NC).build() {
};
var wL = { AbortMultipartUploadCommand: fi, CompleteMultipartUploadCommand: gi, CopyObjectCommand: xi, CreateBucketCommand: hi, CreateBucketMetadataConfigurationCommand: Ci, CreateBucketMetadataTableConfigurationCommand: yi, CreateMultipartUploadCommand: Ei, CreateSessionCommand: Co, DeleteBucketCommand: bi, DeleteBucketAnalyticsConfigurationCommand: Si, DeleteBucketCorsCommand: ki, DeleteBucketEncryptionCommand: Bi, DeleteBucketIntelligentTieringConfigurationCommand: Pi, DeleteBucketInventoryConfigurationCommand: _i, DeleteBucketLifecycleCommand: Ai, DeleteBucketMetadataConfigurationCommand: Ri, DeleteBucketMetadataTableConfigurationCommand: vi, DeleteBucketMetricsConfigurationCommand: wi, DeleteBucketOwnershipControlsCommand: Oi, DeleteBucketPolicyCommand: Ti, DeleteBucketReplicationCommand: Di, DeleteBucketTaggingCommand: Ii, DeleteBucketWebsiteCommand: Li, DeleteObjectCommand: Mi, DeleteObjectsCommand: $i, DeleteObjectTaggingCommand: Ui, DeletePublicAccessBlockCommand: Ni, GetBucketAbacCommand: Gi, GetBucketAccelerateConfigurationCommand: ji, GetBucketAclCommand: zi, GetBucketAnalyticsConfigurationCommand: qi, GetBucketCorsCommand: Hi, GetBucketEncryptionCommand: Fi, GetBucketIntelligentTieringConfigurationCommand: Vi, GetBucketInventoryConfigurationCommand: Ki, GetBucketLifecycleConfigurationCommand: Wi, GetBucketLocationCommand: Zi, GetBucketLoggingCommand: Xi, GetBucketMetadataConfigurationCommand: Ji, GetBucketMetadataTableConfigurationCommand: Qi, GetBucketMetricsConfigurationCommand: Yi, GetBucketNotificationConfigurationCommand: ta, GetBucketOwnershipControlsCommand: ea, GetBucketPolicyCommand: ra, GetBucketPolicyStatusCommand: oa, GetBucketReplicationCommand: na, GetBucketRequestPaymentCommand: sa, GetBucketTaggingCommand: ia, GetBucketVersioningCommand: aa, GetBucketWebsiteCommand: ca, GetObjectCommand: pa, GetObjectAclCommand: ua, GetObjectAttributesCommand: ma, GetObjectLegalHoldCommand: la, GetObjectLockConfigurationCommand: da, GetObjectRetentionCommand: fa, GetObjectTaggingCommand: ga, GetObjectTorrentCommand: xa, GetPublicAccessBlockCommand: ha, HeadBucketCommand: mr, HeadObjectCommand: pr, ListBucketAnalyticsConfigurationsCommand: Ca, ListBucketIntelligentTieringConfigurationsCommand: ya, ListBucketInventoryConfigurationsCommand: Ea, ListBucketMetricsConfigurationsCommand: Sa, ListBucketsCommand: So, ListDirectoryBucketsCommand: bo, ListMultipartUploadsCommand: ba, ListObjectsCommand: ka, ListObjectsV2Command: ko, ListObjectVersionsCommand: Ba, ListPartsCommand: Bo, PutBucketAbacCommand: Pa, PutBucketAccelerateConfigurationCommand: _a, PutBucketAclCommand: Aa, PutBucketAnalyticsConfigurationCommand: Ra, PutBucketCorsCommand: va, PutBucketEncryptionCommand: wa, PutBucketIntelligentTieringConfigurationCommand: Oa, PutBucketInventoryConfigurationCommand: Ta, PutBucketLifecycleConfigurationCommand: Da, PutBucketLoggingCommand: Ia, PutBucketMetricsConfigurationCommand: La, PutBucketNotificationConfigurationCommand: Ma, PutBucketOwnershipControlsCommand: $a, PutBucketPolicyCommand: Ua, PutBucketReplicationCommand: Na, PutBucketRequestPaymentCommand: Ga, PutBucketTaggingCommand: ja, PutBucketVersioningCommand: za, PutBucketWebsiteCommand: qa, PutObjectCommand: Fa, PutObjectAclCommand: Ha, PutObjectLegalHoldCommand: Va, PutObjectLockConfigurationCommand: Ka, PutObjectRetentionCommand: Wa, PutObjectTaggingCommand: Za, PutPublicAccessBlockCommand: Xa, RenameObjectCommand: Ja, RestoreObjectCommand: Qa, SelectObjectContentCommand: Ya, UpdateBucketMetadataInventoryTableConfigurationCommand: tc, UpdateBucketMetadataJournalTableConfigurationCommand: ec, UploadPartCommand: rc, UploadPartCopyCommand: oc, WriteGetObjectResponseCommand: nc }, Pm = class extends ve {
};
op(wL, Pm);
var Ett = er(ve, So, "ContinuationToken", "ContinuationToken", "MaxBuckets");
var Ptt = er(ve, bo, "ContinuationToken", "ContinuationToken", "MaxDirectoryBuckets");
var wtt = er(ve, ko, "ContinuationToken", "NextContinuationToken", "MaxKeys");
var Ltt = er(ve, Bo, "PartNumberMarker", "NextPartNumberMarker", "MaxParts");
var Po = () => { let r = new WeakSet; return (t, o) => { if (typeof o == "object" && o !== null) {
    if (r.has(o))
        return "[Circular]";
    r.add(o);
} return o; }; };
var hy = r => new Promise(t => setTimeout(t, r * 1e3));
var Cy = { minDelay: 2, maxDelay: 120 }, ft = (function (r) { return r.ABORTED = "ABORTED", r.FAILURE = "FAILURE", r.SUCCESS = "SUCCESS", r.RETRY = "RETRY", r.TIMEOUT = "TIMEOUT", r; })(ft || {}), lr = r => { if (r.state === ft.ABORTED) {
    let t = new Error(`${JSON.stringify(p(u({}, r), { reason: "Request was aborted" }), Po())}`);
    throw t.name = "AbortError", t;
}
else if (r.state === ft.TIMEOUT) {
    let t = new Error(`${JSON.stringify(p(u({}, r), { reason: "Waiter has timed out" }), Po())}`);
    throw t.name = "TimeoutError", t;
}
else if (r.state !== ft.SUCCESS)
    throw new Error(`${JSON.stringify(r, Po())}`); return r; };
var OL = (r, t, o, e) => { if (e > o)
    return t; let s = r * 2 ** (e - 1); return TL(r, s); }, TL = (r, t) => r + Math.random() * (t - r), Ey = (h, k, A) => _(null, [h, k, A], function* ({ minDelay: r, maxDelay: t, maxWaitTime: o, abortController: e, client: s, abortSignal: a }, c, x) { let v = {}, { state: I, reason: T } = yield x(s, c); if (T) {
    let et = yy(T);
    v[et] |= 0, v[et] += 1;
} if (I !== ft.RETRY)
    return { state: I, reason: T, observedResponses: v }; let $ = 1, G = Date.now() + o * 1e3, q = Math.log(t / r) / Math.log(2) + 1; for (;;) {
    if (e?.signal?.aborted || a?.aborted) {
        let gt = "AbortController signal aborted.";
        return v[gt] |= 0, v[gt] += 1, { state: ft.ABORTED, observedResponses: v };
    }
    let et = OL(r, t, q, $);
    if (Date.now() + et * 1e3 > G)
        return { state: ft.TIMEOUT, observedResponses: v };
    yield hy(et);
    let { state: it, reason: vt } = yield x(s, c);
    if (vt) {
        let gt = yy(vt);
        v[gt] |= 0, v[gt] += 1;
    }
    if (it !== ft.RETRY)
        return { state: it, reason: vt, observedResponses: v };
    $ += 1;
} }), yy = r => r?.$responseBodyText ? `Deserialization error for body: ${r.$responseBodyText}` : r?.$metadata?.httpStatusCode ? r.$response || r.message ? `${r.$response.statusCode ?? r.$metadata.httpStatusCode ?? "Unknown"}: ${r.message}` : `${r.$metadata.httpStatusCode}: OK` : String(r?.message ?? JSON.stringify(r, Po()) ?? "Unknown");
var Sy = r => { if (r.maxWaitTime <= 0)
    throw new Error("WaiterConfiguration.maxWaitTime must be greater than 0"); if (r.minDelay <= 0)
    throw new Error("WaiterConfiguration.minDelay must be greater than 0"); if (r.maxDelay <= 0)
    throw new Error("WaiterConfiguration.maxDelay must be greater than 0"); if (r.maxWaitTime <= r.minDelay)
    throw new Error(`WaiterConfiguration.maxWaitTime [${r.maxWaitTime}] must be greater than WaiterConfiguration.minDelay [${r.minDelay}] for this waiter`); if (r.maxDelay < r.minDelay)
    throw new Error(`WaiterConfiguration.maxDelay [${r.maxDelay}] must be greater than WaiterConfiguration.minDelay [${r.minDelay}] for this waiter`); };
var by = r => { let t, o = new Promise(e => { t = () => e({ state: ft.ABORTED }), typeof r.addEventListener == "function" ? r.addEventListener("abort", t) : r.onabort = t; }); return { clearListener() { typeof r.removeEventListener == "function" && r.removeEventListener("abort", t); }, aborted: o }; }, we = (r, t, o) => _(null, null, function* () { let e = u(u({}, Cy), r); Sy(e); let s = [Ey(e, t, o)], a = []; if (r.abortSignal) {
    let { aborted: c, clearListener: x } = by(r.abortSignal);
    a.push(x), s.push(c);
} if (r.abortController?.signal) {
    let { aborted: c, clearListener: x } = by(r.abortController.signal);
    a.push(x), s.push(c);
} return Promise.race(s).then(c => { for (let x of a)
    x(); return c; }); });
var ky = (r, t) => _(null, null, function* () { let o; try {
    return o = yield r.send(new mr(t)), { state: ft.SUCCESS, reason: o };
}
catch (e) {
    if (o = e, e.name && e.name == "NotFound")
        return { state: ft.RETRY, reason: o };
} return { state: ft.RETRY, reason: o }; }), eet = (r, t) => _(null, null, function* () { return we(u(u({}, { minDelay: 5, maxDelay: 120 }), r), t, ky); }), ret = (r, t) => _(null, null, function* () { let e = yield we(u(u({}, { minDelay: 5, maxDelay: 120 }), r), t, ky); return lr(e); });
var By = (r, t) => _(null, null, function* () { let o; try {
    o = yield r.send(new mr(t));
}
catch (e) {
    if (o = e, e.name && e.name == "NotFound")
        return { state: ft.SUCCESS, reason: o };
} return { state: ft.RETRY, reason: o }; }), aet = (r, t) => _(null, null, function* () { return we(u(u({}, { minDelay: 5, maxDelay: 120 }), r), t, By); }), cet = (r, t) => _(null, null, function* () { let e = yield we(u(u({}, { minDelay: 5, maxDelay: 120 }), r), t, By); return lr(e); });
var Py = (r, t) => _(null, null, function* () { let o; try {
    return o = yield r.send(new pr(t)), { state: ft.SUCCESS, reason: o };
}
catch (e) {
    if (o = e, e.name && e.name == "NotFound")
        return { state: ft.RETRY, reason: o };
} return { state: ft.RETRY, reason: o }; }), fet = (r, t) => _(null, null, function* () { return we(u(u({}, { minDelay: 5, maxDelay: 120 }), r), t, Py); }), get = (r, t) => _(null, null, function* () { let e = yield we(u(u({}, { minDelay: 5, maxDelay: 120 }), r), t, Py); return lr(e); });
var _y = (r, t) => _(null, null, function* () { let o; try {
    o = yield r.send(new pr(t));
}
catch (e) {
    if (o = e, e.name && e.name == "NotFound")
        return { state: ft.SUCCESS, reason: o };
} return { state: ft.RETRY, reason: o }; }), Eet = (r, t) => _(null, null, function* () { return we(u(u({}, { minDelay: 5, maxDelay: 120 }), r), t, _y); }), bet = (r, t) => _(null, null, function* () { let e = yield we(u(u({}, { minDelay: 5, maxDelay: 120 }), r), t, _y); return lr(e); });
var Pet = { Disabled: "Disabled", Enabled: "Enabled" }, _et = { requester: "requester" }, Aet = { requester: "requester" }, Ret = { Enabled: "Enabled", Suspended: "Suspended" }, vet = { AmazonCustomerByEmail: "AmazonCustomerByEmail", CanonicalUser: "CanonicalUser", Group: "Group" }, wet = { FULL_CONTROL: "FULL_CONTROL", READ: "READ", READ_ACP: "READ_ACP", WRITE: "WRITE", WRITE_ACP: "WRITE_ACP" }, Oet = { Destination: "Destination" }, Tet = { COMPOSITE: "COMPOSITE", FULL_OBJECT: "FULL_OBJECT" }, Det = { AES256: "AES256", aws_fsx: "aws:fsx", aws_kms: "aws:kms", aws_kms_dsse: "aws:kms:dsse" }, Iet = { authenticated_read: "authenticated-read", aws_exec_read: "aws-exec-read", bucket_owner_full_control: "bucket-owner-full-control", bucket_owner_read: "bucket-owner-read", private: "private", public_read: "public-read", public_read_write: "public-read-write" }, Let = { CRC32: "CRC32", CRC32C: "CRC32C", CRC64NVME: "CRC64NVME", SHA1: "SHA1", SHA256: "SHA256" }, Met = { COPY: "COPY", REPLACE: "REPLACE" }, $et = { OFF: "OFF", ON: "ON" }, Uet = { COMPLIANCE: "COMPLIANCE", GOVERNANCE: "GOVERNANCE" }, Net = { DEEP_ARCHIVE: "DEEP_ARCHIVE", EXPRESS_ONEZONE: "EXPRESS_ONEZONE", FSX_ONTAP: "FSX_ONTAP", FSX_OPENZFS: "FSX_OPENZFS", GLACIER: "GLACIER", GLACIER_IR: "GLACIER_IR", INTELLIGENT_TIERING: "INTELLIGENT_TIERING", ONEZONE_IA: "ONEZONE_IA", OUTPOSTS: "OUTPOSTS", REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY", SNOW: "SNOW", STANDARD: "STANDARD", STANDARD_IA: "STANDARD_IA" }, Get = { COPY: "COPY", REPLACE: "REPLACE" }, jet = { authenticated_read: "authenticated-read", private: "private", public_read: "public-read", public_read_write: "public-read-write" }, zet = { SingleAvailabilityZone: "SingleAvailabilityZone", SingleLocalZone: "SingleLocalZone" }, qet = { Directory: "Directory" }, Het = { AvailabilityZone: "AvailabilityZone", LocalZone: "LocalZone" }, Fet = { EU: "EU", af_south_1: "af-south-1", ap_east_1: "ap-east-1", ap_northeast_1: "ap-northeast-1", ap_northeast_2: "ap-northeast-2", ap_northeast_3: "ap-northeast-3", ap_south_1: "ap-south-1", ap_south_2: "ap-south-2", ap_southeast_1: "ap-southeast-1", ap_southeast_2: "ap-southeast-2", ap_southeast_3: "ap-southeast-3", ap_southeast_4: "ap-southeast-4", ap_southeast_5: "ap-southeast-5", ca_central_1: "ca-central-1", cn_north_1: "cn-north-1", cn_northwest_1: "cn-northwest-1", eu_central_1: "eu-central-1", eu_central_2: "eu-central-2", eu_north_1: "eu-north-1", eu_south_1: "eu-south-1", eu_south_2: "eu-south-2", eu_west_1: "eu-west-1", eu_west_2: "eu-west-2", eu_west_3: "eu-west-3", il_central_1: "il-central-1", me_central_1: "me-central-1", me_south_1: "me-south-1", sa_east_1: "sa-east-1", us_east_2: "us-east-2", us_gov_east_1: "us-gov-east-1", us_gov_west_1: "us-gov-west-1", us_west_1: "us-west-1", us_west_2: "us-west-2" }, Vet = { BucketOwnerEnforced: "BucketOwnerEnforced", BucketOwnerPreferred: "BucketOwnerPreferred", ObjectWriter: "ObjectWriter" }, Ket = { DISABLED: "DISABLED", ENABLED: "ENABLED" }, Wet = { AES256: "AES256", aws_kms: "aws:kms" }, Zet = { DISABLED: "DISABLED", ENABLED: "ENABLED" }, Xet = { ReadOnly: "ReadOnly", ReadWrite: "ReadWrite" }, Jet = { CSV: "CSV" }, Qet = { V_1: "V_1" }, Yet = { NONE: "NONE", SSE_C: "SSE-C" }, trt = { Disabled: "Disabled", Enabled: "Enabled" }, ert = { ARCHIVE_ACCESS: "ARCHIVE_ACCESS", DEEP_ARCHIVE_ACCESS: "DEEP_ARCHIVE_ACCESS" }, rrt = { CSV: "CSV", ORC: "ORC", Parquet: "Parquet" }, ort = { All: "All", Current: "Current" }, nrt = { BucketKeyStatus: "BucketKeyStatus", ChecksumAlgorithm: "ChecksumAlgorithm", ETag: "ETag", EncryptionStatus: "EncryptionStatus", IntelligentTieringAccessTier: "IntelligentTieringAccessTier", IsMultipartUploaded: "IsMultipartUploaded", LastModifiedDate: "LastModifiedDate", LifecycleExpirationDate: "LifecycleExpirationDate", ObjectAccessControlList: "ObjectAccessControlList", ObjectLockLegalHoldStatus: "ObjectLockLegalHoldStatus", ObjectLockMode: "ObjectLockMode", ObjectLockRetainUntilDate: "ObjectLockRetainUntilDate", ObjectOwner: "ObjectOwner", ReplicationStatus: "ReplicationStatus", Size: "Size", StorageClass: "StorageClass" }, srt = { Daily: "Daily", Weekly: "Weekly" }, irt = { DEEP_ARCHIVE: "DEEP_ARCHIVE", GLACIER: "GLACIER", GLACIER_IR: "GLACIER_IR", INTELLIGENT_TIERING: "INTELLIGENT_TIERING", ONEZONE_IA: "ONEZONE_IA", STANDARD_IA: "STANDARD_IA" }, art = { Disabled: "Disabled", Enabled: "Enabled" }, crt = { all_storage_classes_128K: "all_storage_classes_128K", varies_by_storage_class: "varies_by_storage_class" }, urt = { FULL_CONTROL: "FULL_CONTROL", READ: "READ", WRITE: "WRITE" }, mrt = { DeliveryTime: "DeliveryTime", EventTime: "EventTime" }, prt = { aws: "aws", customer: "customer" }, lrt = { s3_IntelligentTiering: "s3:IntelligentTiering", s3_LifecycleExpiration_: "s3:LifecycleExpiration:*", s3_LifecycleExpiration_Delete: "s3:LifecycleExpiration:Delete", s3_LifecycleExpiration_DeleteMarkerCreated: "s3:LifecycleExpiration:DeleteMarkerCreated", s3_LifecycleTransition: "s3:LifecycleTransition", s3_ObjectAcl_Put: "s3:ObjectAcl:Put", s3_ObjectCreated_: "s3:ObjectCreated:*", s3_ObjectCreated_CompleteMultipartUpload: "s3:ObjectCreated:CompleteMultipartUpload", s3_ObjectCreated_Copy: "s3:ObjectCreated:Copy", s3_ObjectCreated_Post: "s3:ObjectCreated:Post", s3_ObjectCreated_Put: "s3:ObjectCreated:Put", s3_ObjectRemoved_: "s3:ObjectRemoved:*", s3_ObjectRemoved_Delete: "s3:ObjectRemoved:Delete", s3_ObjectRemoved_DeleteMarkerCreated: "s3:ObjectRemoved:DeleteMarkerCreated", s3_ObjectRestore_: "s3:ObjectRestore:*", s3_ObjectRestore_Completed: "s3:ObjectRestore:Completed", s3_ObjectRestore_Delete: "s3:ObjectRestore:Delete", s3_ObjectRestore_Post: "s3:ObjectRestore:Post", s3_ObjectTagging_: "s3:ObjectTagging:*", s3_ObjectTagging_Delete: "s3:ObjectTagging:Delete", s3_ObjectTagging_Put: "s3:ObjectTagging:Put", s3_ReducedRedundancyLostObject: "s3:ReducedRedundancyLostObject", s3_Replication_: "s3:Replication:*", s3_Replication_OperationFailedReplication: "s3:Replication:OperationFailedReplication", s3_Replication_OperationMissedThreshold: "s3:Replication:OperationMissedThreshold", s3_Replication_OperationNotTracked: "s3:Replication:OperationNotTracked", s3_Replication_OperationReplicatedAfterThreshold: "s3:Replication:OperationReplicatedAfterThreshold" }, drt = { prefix: "prefix", suffix: "suffix" }, frt = { Disabled: "Disabled", Enabled: "Enabled" }, grt = { Disabled: "Disabled", Enabled: "Enabled" }, xrt = { Disabled: "Disabled", Enabled: "Enabled" }, hrt = { Disabled: "Disabled", Enabled: "Enabled" }, Crt = { Disabled: "Disabled", Enabled: "Enabled" }, yrt = { Disabled: "Disabled", Enabled: "Enabled" }, Ert = { Disabled: "Disabled", Enabled: "Enabled" }, Srt = { BucketOwner: "BucketOwner", Requester: "Requester" }, brt = { Disabled: "Disabled", Enabled: "Enabled" }, krt = { Enabled: "Enabled", Suspended: "Suspended" }, Brt = { http: "http", https: "https" }, Prt = { COMPLETE: "COMPLETE", COMPLETED: "COMPLETED", FAILED: "FAILED", PENDING: "PENDING", REPLICA: "REPLICA" }, _rt = { ENABLED: "ENABLED" }, Art = { CHECKSUM: "Checksum", ETAG: "ETag", OBJECT_PARTS: "ObjectParts", OBJECT_SIZE: "ObjectSize", STORAGE_CLASS: "StorageClass" }, Rrt = { Enabled: "Enabled" }, vrt = { COMPLIANCE: "COMPLIANCE", GOVERNANCE: "GOVERNANCE" }, wrt = { ARCHIVE_ACCESS: "ARCHIVE_ACCESS", DEEP_ARCHIVE_ACCESS: "DEEP_ARCHIVE_ACCESS" }, Ort = { url: "url" }, Trt = { DEEP_ARCHIVE: "DEEP_ARCHIVE", EXPRESS_ONEZONE: "EXPRESS_ONEZONE", FSX_ONTAP: "FSX_ONTAP", FSX_OPENZFS: "FSX_OPENZFS", GLACIER: "GLACIER", GLACIER_IR: "GLACIER_IR", INTELLIGENT_TIERING: "INTELLIGENT_TIERING", ONEZONE_IA: "ONEZONE_IA", OUTPOSTS: "OUTPOSTS", REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY", SNOW: "SNOW", STANDARD: "STANDARD", STANDARD_IA: "STANDARD_IA" }, Drt = { RESTORE_STATUS: "RestoreStatus" }, Irt = { STANDARD: "STANDARD" }, Lrt = { Disabled: "Disabled", Enabled: "Enabled" }, Mrt = { Bulk: "Bulk", Expedited: "Expedited", Standard: "Standard" }, $rt = { SQL: "SQL" }, Urt = { BZIP2: "BZIP2", GZIP: "GZIP", NONE: "NONE" }, Nrt = { IGNORE: "IGNORE", NONE: "NONE", USE: "USE" }, Grt = { DOCUMENT: "DOCUMENT", LINES: "LINES" }, jrt = { ALWAYS: "ALWAYS", ASNEEDED: "ASNEEDED" }, zrt = { SELECT: "SELECT" };
export { d as $Command, h0 as AbacStatus$, Lw as AbortIncompleteMultipartUpload$, z0 as AbortMultipartUpload$, fi as AbortMultipartUploadCommand, Mw as AbortMultipartUploadOutput$, $w as AbortMultipartUploadRequest$, Uw as AccelerateConfiguration$, C0 as AccessControlPolicy$, Nw as AccessControlTranslation$, Gw as AnalyticsAndOperator$, am as AnalyticsConfiguration$, jw as AnalyticsExportDestination$, W2 as AnalyticsFilter$, zw as AnalyticsS3BucketDestination$, Jet as AnalyticsS3ExportFileFormat, wrt as ArchiveStatus, qw as BlockedEncryptionTypes$, Hw as Bucket$, Pet as BucketAbacStatus, Ret as BucketAccelerateStatus, is as BucketAlreadyExists, Fw as BucketAlreadyExists$, as as BucketAlreadyOwnedByYou, Vw as BucketAlreadyOwnedByYou$, jet as BucketCannedACL, Kw as BucketInfo$, Ww as BucketLifecycleConfiguration$, Fet as BucketLocationConstraint, Zw as BucketLoggingStatus$, urt as BucketLogsPermission, qet as BucketType, krt as BucketVersioningStatus, cO as CORSConfiguration$, uO as CORSRule$, yO as CSVInput$, EO as CSVOutput$, Xw as Checksum$, Let as ChecksumAlgorithm, _rt as ChecksumMode, Tet as ChecksumType, Jw as CommonPrefix$, q0 as CompleteMultipartUpload$, gi as CompleteMultipartUploadCommand, tO as CompleteMultipartUploadOutput$, eO as CompleteMultipartUploadRequest$, Qw as CompletedMultipartUpload$, Yw as CompletedPart$, Urt as CompressionType, rO as Condition$, oO as ContinuationEvent$, H0 as CopyObject$, xi as CopyObjectCommand, nO as CopyObjectOutput$, sO as CopyObjectRequest$, iO as CopyObjectResult$, aO as CopyPartResult$, F0 as CreateBucket$, hi as CreateBucketCommand, mO as CreateBucketConfiguration$, V0 as CreateBucketMetadataConfiguration$, Ci as CreateBucketMetadataConfigurationCommand, pO as CreateBucketMetadataConfigurationRequest$, K0 as CreateBucketMetadataTableConfiguration$, yi as CreateBucketMetadataTableConfigurationCommand, lO as CreateBucketMetadataTableConfigurationRequest$, dO as CreateBucketOutput$, fO as CreateBucketRequest$, W0 as CreateMultipartUpload$, Ei as CreateMultipartUploadCommand, gO as CreateMultipartUploadOutput$, xO as CreateMultipartUploadRequest$, Z0 as CreateSession$, Co as CreateSessionCommand, hO as CreateSessionOutput$, CO as CreateSessionRequest$, zet as DataRedundancy, SO as DefaultRetention$, bO as Delete$, X0 as DeleteBucket$, J0 as DeleteBucketAnalyticsConfiguration$, Si as DeleteBucketAnalyticsConfigurationCommand, kO as DeleteBucketAnalyticsConfigurationRequest$, bi as DeleteBucketCommand, Q0 as DeleteBucketCors$, ki as DeleteBucketCorsCommand, BO as DeleteBucketCorsRequest$, Y0 as DeleteBucketEncryption$, Bi as DeleteBucketEncryptionCommand, PO as DeleteBucketEncryptionRequest$, th as DeleteBucketIntelligentTieringConfiguration$, Pi as DeleteBucketIntelligentTieringConfigurationCommand, _O as DeleteBucketIntelligentTieringConfigurationRequest$, eh as DeleteBucketInventoryConfiguration$, _i as DeleteBucketInventoryConfigurationCommand, AO as DeleteBucketInventoryConfigurationRequest$, rh as DeleteBucketLifecycle$, Ai as DeleteBucketLifecycleCommand, RO as DeleteBucketLifecycleRequest$, oh as DeleteBucketMetadataConfiguration$, Ri as DeleteBucketMetadataConfigurationCommand, vO as DeleteBucketMetadataConfigurationRequest$, nh as DeleteBucketMetadataTableConfiguration$, vi as DeleteBucketMetadataTableConfigurationCommand, wO as DeleteBucketMetadataTableConfigurationRequest$, sh as DeleteBucketMetricsConfiguration$, wi as DeleteBucketMetricsConfigurationCommand, OO as DeleteBucketMetricsConfigurationRequest$, ih as DeleteBucketOwnershipControls$, Oi as DeleteBucketOwnershipControlsCommand, TO as DeleteBucketOwnershipControlsRequest$, ah as DeleteBucketPolicy$, Ti as DeleteBucketPolicyCommand, DO as DeleteBucketPolicyRequest$, ch as DeleteBucketReplication$, Di as DeleteBucketReplicationCommand, IO as DeleteBucketReplicationRequest$, LO as DeleteBucketRequest$, uh as DeleteBucketTagging$, Ii as DeleteBucketTaggingCommand, MO as DeleteBucketTaggingRequest$, mh as DeleteBucketWebsite$, Li as DeleteBucketWebsiteCommand, $O as DeleteBucketWebsiteRequest$, NO as DeleteMarkerEntry$, GO as DeleteMarkerReplication$, frt as DeleteMarkerReplicationStatus, ph as DeleteObject$, Mi as DeleteObjectCommand, jO as DeleteObjectOutput$, zO as DeleteObjectRequest$, dh as DeleteObjectTagging$, Ui as DeleteObjectTaggingCommand, FO as DeleteObjectTaggingOutput$, VO as DeleteObjectTaggingRequest$, lh as DeleteObjects$, $i as DeleteObjectsCommand, qO as DeleteObjectsOutput$, HO as DeleteObjectsRequest$, fh as DeletePublicAccessBlock$, Ni as DeletePublicAccessBlockCommand, KO as DeletePublicAccessBlockRequest$, UO as DeletedObject$, WO as Destination$, ZO as DestinationResult$, Ort as EncodingType, XO as Encryption$, JO as EncryptionConfiguration$, Yet as EncryptionType, ls as EncryptionTypeMismatch, QO as EncryptionTypeMismatch$, YO as EndEvent$, cm as ErrorDetails$, y0 as ErrorDocument$, lrt as Event, eT as EventBridgeConfiguration$, rT as ExistingObjectReplication$, hrt as ExistingObjectReplicationStatus, Zet as ExpirationState, art as ExpirationStatus, $rt as ExpressionType, Nrt as FileHeaderInfo, oT as FilterRule$, drt as FilterRuleName, gh as GetBucketAbac$, Gi as GetBucketAbacCommand, nT as GetBucketAbacOutput$, sT as GetBucketAbacRequest$, xh as GetBucketAccelerateConfiguration$, ji as GetBucketAccelerateConfigurationCommand, iT as GetBucketAccelerateConfigurationOutput$, aT as GetBucketAccelerateConfigurationRequest$, hh as GetBucketAcl$, zi as GetBucketAclCommand, cT as GetBucketAclOutput$, uT as GetBucketAclRequest$, Ch as GetBucketAnalyticsConfiguration$, qi as GetBucketAnalyticsConfigurationCommand, mT as GetBucketAnalyticsConfigurationOutput$, pT as GetBucketAnalyticsConfigurationRequest$, yh as GetBucketCors$, Hi as GetBucketCorsCommand, lT as GetBucketCorsOutput$, dT as GetBucketCorsRequest$, Eh as GetBucketEncryption$, Fi as GetBucketEncryptionCommand, fT as GetBucketEncryptionOutput$, gT as GetBucketEncryptionRequest$, Sh as GetBucketIntelligentTieringConfiguration$, Vi as GetBucketIntelligentTieringConfigurationCommand, xT as GetBucketIntelligentTieringConfigurationOutput$, hT as GetBucketIntelligentTieringConfigurationRequest$, bh as GetBucketInventoryConfiguration$, Ki as GetBucketInventoryConfigurationCommand, CT as GetBucketInventoryConfigurationOutput$, yT as GetBucketInventoryConfigurationRequest$, kh as GetBucketLifecycleConfiguration$, Wi as GetBucketLifecycleConfigurationCommand, ET as GetBucketLifecycleConfigurationOutput$, ST as GetBucketLifecycleConfigurationRequest$, Bh as GetBucketLocation$, Zi as GetBucketLocationCommand, bT as GetBucketLocationOutput$, kT as GetBucketLocationRequest$, Ph as GetBucketLogging$, Xi as GetBucketLoggingCommand, BT as GetBucketLoggingOutput$, PT as GetBucketLoggingRequest$, _h as GetBucketMetadataConfiguration$, Ji as GetBucketMetadataConfigurationCommand, _T as GetBucketMetadataConfigurationOutput$, AT as GetBucketMetadataConfigurationRequest$, RT as GetBucketMetadataConfigurationResult$, Ah as GetBucketMetadataTableConfiguration$, Qi as GetBucketMetadataTableConfigurationCommand, vT as GetBucketMetadataTableConfigurationOutput$, wT as GetBucketMetadataTableConfigurationRequest$, OT as GetBucketMetadataTableConfigurationResult$, Rh as GetBucketMetricsConfiguration$, Yi as GetBucketMetricsConfigurationCommand, TT as GetBucketMetricsConfigurationOutput$, DT as GetBucketMetricsConfigurationRequest$, vh as GetBucketNotificationConfiguration$, ta as GetBucketNotificationConfigurationCommand, IT as GetBucketNotificationConfigurationRequest$, wh as GetBucketOwnershipControls$, ea as GetBucketOwnershipControlsCommand, LT as GetBucketOwnershipControlsOutput$, MT as GetBucketOwnershipControlsRequest$, Oh as GetBucketPolicy$, ra as GetBucketPolicyCommand, $T as GetBucketPolicyOutput$, UT as GetBucketPolicyRequest$, Th as GetBucketPolicyStatus$, oa as GetBucketPolicyStatusCommand, NT as GetBucketPolicyStatusOutput$, GT as GetBucketPolicyStatusRequest$, Dh as GetBucketReplication$, na as GetBucketReplicationCommand, jT as GetBucketReplicationOutput$, zT as GetBucketReplicationRequest$, Ih as GetBucketRequestPayment$, sa as GetBucketRequestPaymentCommand, qT as GetBucketRequestPaymentOutput$, HT as GetBucketRequestPaymentRequest$, Lh as GetBucketTagging$, ia as GetBucketTaggingCommand, FT as GetBucketTaggingOutput$, VT as GetBucketTaggingRequest$, Mh as GetBucketVersioning$, aa as GetBucketVersioningCommand, KT as GetBucketVersioningOutput$, WT as GetBucketVersioningRequest$, $h as GetBucketWebsite$, ca as GetBucketWebsiteCommand, ZT as GetBucketWebsiteOutput$, XT as GetBucketWebsiteRequest$, Uh as GetObject$, Nh as GetObjectAcl$, ua as GetObjectAclCommand, JT as GetObjectAclOutput$, QT as GetObjectAclRequest$, Gh as GetObjectAttributes$, ma as GetObjectAttributesCommand, YT as GetObjectAttributesOutput$, tD as GetObjectAttributesParts$, eD as GetObjectAttributesRequest$, pa as GetObjectCommand, jh as GetObjectLegalHold$, la as GetObjectLegalHoldCommand, rD as GetObjectLegalHoldOutput$, oD as GetObjectLegalHoldRequest$, zh as GetObjectLockConfiguration$, da as GetObjectLockConfigurationCommand, nD as GetObjectLockConfigurationOutput$, sD as GetObjectLockConfigurationRequest$, iD as GetObjectOutput$, aD as GetObjectRequest$, qh as GetObjectRetention$, fa as GetObjectRetentionCommand, cD as GetObjectRetentionOutput$, uD as GetObjectRetentionRequest$, Hh as GetObjectTagging$, ga as GetObjectTaggingCommand, mD as GetObjectTaggingOutput$, pD as GetObjectTaggingRequest$, Fh as GetObjectTorrent$, xa as GetObjectTorrentCommand, lD as GetObjectTorrentOutput$, dD as GetObjectTorrentRequest$, Vh as GetPublicAccessBlock$, ha as GetPublicAccessBlockCommand, fD as GetPublicAccessBlockOutput$, gD as GetPublicAccessBlockRequest$, xD as GlacierJobParameters$, hD as Grant$, E0 as Grantee$, Kh as HeadBucket$, mr as HeadBucketCommand, CD as HeadBucketOutput$, yD as HeadBucketRequest$, Wh as HeadObject$, pr as HeadObjectCommand, ED as HeadObjectOutput$, SD as HeadObjectRequest$, xs as IdempotencyParameterMismatch, bD as IdempotencyParameterMismatch$, S0 as IndexDocument$, b0 as Initiator$, k0 as InputSerialization$, ert as IntelligentTieringAccessTier, kD as IntelligentTieringAndOperator$, um as IntelligentTieringConfiguration$, BD as IntelligentTieringFilter$, trt as IntelligentTieringStatus, us as InvalidObjectState, PD as InvalidObjectState$, ds as InvalidRequest, _D as InvalidRequest$, fs as InvalidWriteOffset, AD as InvalidWriteOffset$, mm as InventoryConfiguration$, Ket as InventoryConfigurationState, RD as InventoryDestination$, vD as InventoryEncryption$, wD as InventoryFilter$, rrt as InventoryFormat, srt as InventoryFrequency, ort as InventoryIncludedObjectVersions, nrt as InventoryOptionalField, OD as InventoryS3BucketDestination$, TD as InventorySchedule$, DD as InventoryTableConfiguration$, ID as InventoryTableConfigurationResult$, LD as InventoryTableConfigurationUpdates$, ND as JSONInput$, GD as JSONOutput$, Grt as JSONType, MD as JournalTableConfiguration$, $D as JournalTableConfigurationResult$, UD as JournalTableConfigurationUpdates$, jD as LambdaFunctionConfiguration$, zD as LifecycleExpiration$, qD as LifecycleRule$, HD as LifecycleRuleAndOperator$, FD as LifecycleRuleFilter$, Zh as ListBucketAnalyticsConfigurations$, Ca as ListBucketAnalyticsConfigurationsCommand, VD as ListBucketAnalyticsConfigurationsOutput$, KD as ListBucketAnalyticsConfigurationsRequest$, Xh as ListBucketIntelligentTieringConfigurations$, ya as ListBucketIntelligentTieringConfigurationsCommand, WD as ListBucketIntelligentTieringConfigurationsOutput$, ZD as ListBucketIntelligentTieringConfigurationsRequest$, Jh as ListBucketInventoryConfigurations$, Ea as ListBucketInventoryConfigurationsCommand, XD as ListBucketInventoryConfigurationsOutput$, JD as ListBucketInventoryConfigurationsRequest$, Qh as ListBucketMetricsConfigurations$, Sa as ListBucketMetricsConfigurationsCommand, QD as ListBucketMetricsConfigurationsOutput$, YD as ListBucketMetricsConfigurationsRequest$, Yh as ListBuckets$, So as ListBucketsCommand, t1 as ListBucketsOutput$, e1 as ListBucketsRequest$, tC as ListDirectoryBuckets$, bo as ListDirectoryBucketsCommand, r1 as ListDirectoryBucketsOutput$, o1 as ListDirectoryBucketsRequest$, eC as ListMultipartUploads$, ba as ListMultipartUploadsCommand, n1 as ListMultipartUploadsOutput$, s1 as ListMultipartUploadsRequest$, nC as ListObjectVersions$, Ba as ListObjectVersionsCommand, m1 as ListObjectVersionsOutput$, p1 as ListObjectVersionsRequest$, rC as ListObjects$, ka as ListObjectsCommand, i1 as ListObjectsOutput$, a1 as ListObjectsRequest$, oC as ListObjectsV2$, ko as ListObjectsV2Command, c1 as ListObjectsV2Output$, u1 as ListObjectsV2Request$, sC as ListParts$, Bo as ListPartsCommand, l1 as ListPartsOutput$, d1 as ListPartsRequest$, f1 as LocationInfo$, Het as LocationType, B0 as LoggingEnabled$, Lrt as MFADelete, brt as MFADeleteStatus, g1 as MetadataConfiguration$, x1 as MetadataConfigurationResult$, Met as MetadataDirective, h1 as MetadataEntry$, C1 as MetadataTableConfiguration$, y1 as MetadataTableConfigurationResult$, pm as MetadataTableEncryptionConfiguration$, E1 as Metrics$, S1 as MetricsAndOperator$, lm as MetricsConfiguration$, Z2 as MetricsFilter$, grt as MetricsStatus, b1 as MultipartUpload$, cs as NoSuchBucket, P1 as NoSuchBucket$, ms as NoSuchKey, _1 as NoSuchKey$, ns as NoSuchUpload, A1 as NoSuchUpload$, k1 as NoncurrentVersionExpiration$, B1 as NoncurrentVersionTransition$, ps as NotFound, R1 as NotFound$, P0 as NotificationConfiguration$, dm as NotificationConfigurationFilter$, hs as ObjectAlreadyInActiveTierError, w1 as ObjectAlreadyInActiveTierError$, Art as ObjectAttributes, Iet as ObjectCannedACL, O1 as ObjectIdentifier$, _0 as ObjectLockConfiguration$, Rrt as ObjectLockEnabled, A0 as ObjectLockLegalHold$, $et as ObjectLockLegalHoldStatus, Uet as ObjectLockMode, R0 as ObjectLockRetention$, vrt as ObjectLockRetentionMode, T1 as ObjectLockRule$, ss as ObjectNotInActiveTierError, D1 as ObjectNotInActiveTierError$, Vet as ObjectOwnership, I1 as ObjectPart$, Trt as ObjectStorageClass, L1 as ObjectVersion$, Irt as ObjectVersionStorageClass, Drt as OptionalObjectAttributes, M1 as OutputLocation$, v0 as OutputSerialization$, Je as Owner$, Oet as OwnerOverride, w0 as OwnershipControls$, $1 as OwnershipControlsRule$, U1 as ParquetInput$, N1 as Part$, mrt as PartitionDateSource, G1 as PartitionedPrefix$, Srt as Payer, wet as Permission, j1 as PolicyStatus$, z1 as Progress$, q1 as ProgressEvent$, Brt as Protocol, O0 as PublicAccessBlockConfiguration$, iC as PutBucketAbac$, Pa as PutBucketAbacCommand, H1 as PutBucketAbacRequest$, aC as PutBucketAccelerateConfiguration$, _a as PutBucketAccelerateConfigurationCommand, F1 as PutBucketAccelerateConfigurationRequest$, cC as PutBucketAcl$, Aa as PutBucketAclCommand, V1 as PutBucketAclRequest$, uC as PutBucketAnalyticsConfiguration$, Ra as PutBucketAnalyticsConfigurationCommand, K1 as PutBucketAnalyticsConfigurationRequest$, mC as PutBucketCors$, va as PutBucketCorsCommand, W1 as PutBucketCorsRequest$, pC as PutBucketEncryption$, wa as PutBucketEncryptionCommand, Z1 as PutBucketEncryptionRequest$, lC as PutBucketIntelligentTieringConfiguration$, Oa as PutBucketIntelligentTieringConfigurationCommand, X1 as PutBucketIntelligentTieringConfigurationRequest$, dC as PutBucketInventoryConfiguration$, Ta as PutBucketInventoryConfigurationCommand, J1 as PutBucketInventoryConfigurationRequest$, fC as PutBucketLifecycleConfiguration$, Da as PutBucketLifecycleConfigurationCommand, Q1 as PutBucketLifecycleConfigurationOutput$, Y1 as PutBucketLifecycleConfigurationRequest$, gC as PutBucketLogging$, Ia as PutBucketLoggingCommand, tI as PutBucketLoggingRequest$, xC as PutBucketMetricsConfiguration$, La as PutBucketMetricsConfigurationCommand, eI as PutBucketMetricsConfigurationRequest$, hC as PutBucketNotificationConfiguration$, Ma as PutBucketNotificationConfigurationCommand, rI as PutBucketNotificationConfigurationRequest$, CC as PutBucketOwnershipControls$, $a as PutBucketOwnershipControlsCommand, oI as PutBucketOwnershipControlsRequest$, yC as PutBucketPolicy$, Ua as PutBucketPolicyCommand, nI as PutBucketPolicyRequest$, EC as PutBucketReplication$, Na as PutBucketReplicationCommand, sI as PutBucketReplicationRequest$, SC as PutBucketRequestPayment$, Ga as PutBucketRequestPaymentCommand, iI as PutBucketRequestPaymentRequest$, bC as PutBucketTagging$, ja as PutBucketTaggingCommand, aI as PutBucketTaggingRequest$, kC as PutBucketVersioning$, za as PutBucketVersioningCommand, cI as PutBucketVersioningRequest$, BC as PutBucketWebsite$, qa as PutBucketWebsiteCommand, uI as PutBucketWebsiteRequest$, PC as PutObject$, _C as PutObjectAcl$, Ha as PutObjectAclCommand, mI as PutObjectAclOutput$, pI as PutObjectAclRequest$, Fa as PutObjectCommand, AC as PutObjectLegalHold$, Va as PutObjectLegalHoldCommand, lI as PutObjectLegalHoldOutput$, dI as PutObjectLegalHoldRequest$, RC as PutObjectLockConfiguration$, Ka as PutObjectLockConfigurationCommand, fI as PutObjectLockConfigurationOutput$, gI as PutObjectLockConfigurationRequest$, xI as PutObjectOutput$, hI as PutObjectRequest$, vC as PutObjectRetention$, Wa as PutObjectRetentionCommand, CI as PutObjectRetentionOutput$, yI as PutObjectRetentionRequest$, wC as PutObjectTagging$, Za as PutObjectTaggingCommand, EI as PutObjectTaggingOutput$, SI as PutObjectTaggingRequest$, OC as PutPublicAccessBlock$, Xa as PutPublicAccessBlockCommand, bI as PutPublicAccessBlockRequest$, kI as QueueConfiguration$, jrt as QuoteFields, fm as RecordExpiration$, BI as RecordsEvent$, PI as Redirect$, T0 as RedirectAllRequestsTo$, TC as RenameObject$, Ja as RenameObjectCommand, _I as RenameObjectOutput$, AI as RenameObjectRequest$, RI as ReplicaModifications$, Crt as ReplicaModificationsStatus, D0 as ReplicationConfiguration$, vI as ReplicationRule$, wI as ReplicationRuleAndOperator$, OI as ReplicationRuleFilter$, Ert as ReplicationRuleStatus, Prt as ReplicationStatus, TI as ReplicationTime$, xrt as ReplicationTimeStatus, I0 as ReplicationTimeValue$, _et as RequestCharged, Aet as RequestPayer, DI as RequestPaymentConfiguration$, II as RequestProgress$, DC as RestoreObject$, Qa as RestoreObjectCommand, LI as RestoreObjectOutput$, MI as RestoreObjectRequest$, $I as RestoreRequest$, zrt as RestoreRequestType, L0 as RestoreStatus$, UI as RoutingRule$, Pm as S3, ve as S3Client, NI as S3KeyFilter$, GI as S3Location$, Rt as S3ServiceException, E2 as S3ServiceException$, prt as S3TablesBucketType, jI as S3TablesDestination$, zI as S3TablesDestinationResult$, QI as SSEKMS$, t2 as SSES3$, qI as ScanRange$, IC as SelectObjectContent$, Ya as SelectObjectContentCommand, X2 as SelectObjectContentEventStream$, HI as SelectObjectContentOutput$, FI as SelectObjectContentRequest$, VI as SelectParameters$, Det as ServerSideEncryption, KI as ServerSideEncryptionByDefault$, M0 as ServerSideEncryptionConfiguration$, WI as ServerSideEncryptionRule$, ZI as SessionCredentials$, Xet as SessionMode, XI as SimplePrefix$, JI as SourceSelectionCriteria$, YI as SseKmsEncryptedObjects$, yrt as SseKmsEncryptedObjectsStatus, e2 as Stats$, r2 as StatsEvent$, Net as StorageClass, o2 as StorageClassAnalysis$, n2 as StorageClassAnalysisDataExport$, Qet as StorageClassAnalysisSchemaVersion, Wet as TableSseAlgorithm, ho as Tag$, gm as Tagging$, Get as TaggingDirective, s2 as TargetGrant$, i2 as TargetObjectKeyFormat$, Mrt as Tier, a2 as Tiering$, gs as TooManyParts, c2 as TooManyParts$, u2 as TopicConfiguration$, m2 as Transition$, crt as TransitionDefaultMinimumObjectSize, irt as TransitionStorageClass, vet as Type, LC as UpdateBucketMetadataInventoryTableConfiguration$, tc as UpdateBucketMetadataInventoryTableConfigurationCommand, p2 as UpdateBucketMetadataInventoryTableConfigurationRequest$, MC as UpdateBucketMetadataJournalTableConfiguration$, ec as UpdateBucketMetadataJournalTableConfigurationCommand, l2 as UpdateBucketMetadataJournalTableConfigurationRequest$, $C as UploadPart$, rc as UploadPartCommand, UC as UploadPartCopy$, oc as UploadPartCopyCommand, d2 as UploadPartCopyOutput$, f2 as UploadPartCopyRequest$, g2 as UploadPartOutput$, x2 as UploadPartRequest$, h2 as VersioningConfiguration$, C2 as WebsiteConfiguration$, NC as WriteGetObjectResponse$, nc as WriteGetObjectResponseCommand, y2 as WriteGetObjectResponseRequest$, tT as _Error$, v1 as _Object$, rp as __Client, Ett as paginateListBuckets, Ptt as paginateListDirectoryBuckets, wtt as paginateListObjectsV2, Ltt as paginateListParts, eet as waitForBucketExists, aet as waitForBucketNotExists, fet as waitForObjectExists, Eet as waitForObjectNotExists, ret as waitUntilBucketExists, cet as waitUntilBucketNotExists, get as waitUntilObjectExists, bet as waitUntilObjectNotExists };
