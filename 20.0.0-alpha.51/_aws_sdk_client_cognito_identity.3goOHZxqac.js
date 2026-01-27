import { $ as p, A as be, Aa as uo, B as Re, Ba as fo, C as _e, Ca as lo, D as Ae, E as we, F as tt, G as _, I as Te, J as et, K as De, L as $e, M as Le, N as Me, O as Ue, P as ke, Q as Oe, R as Ne, T as Ge, Y as Fe, Z as He, _ as Be, a as pe, aa as ze, b as me, ba as je, c as de, ca as We, da as Ke, e as ue, ea as qe, f as fe, fa as Je, g as le, ga as Ve, h as he, ha as N, i as Jt, ia as Qe, j as ye, ja as Ye, ka as Ze, l as ge, la as Xe, m as Ie, ma as to, n as X, na as eo, oa as oo, p as K, pa as ro, q as Se, r as ve, ra as m, sa as no, ta as io, u as Vt, ua as so, v as Pe, va as ao, w as Ee, wa as co, xa as G, y as A, ya as po, z as E, za as mo } from "@nf-internal/chunk-ZLJJ3AQQ";
import { a as xe, b as Ce } from "@nf-internal/chunk-A2Y7EL3B";
import "@nf-internal/chunk-SC2LNWXG";
import { a as C, b as ae, g as ce, h as S } from "@nf-internal/chunk-FJYW2LMB";
var ot = class extends Te {
    serializeRequest(t, e, r) { return S(this, null, function* () { let n = this.serializer, a = {}, s = {}, u = yield r.endpoint(), c = A.of(t?.input), f = c.getSchema(), l, x = new de({ protocol: "", hostname: "", port: void 0, path: "/", fragment: void 0, query: a, headers: s, body: void 0 }); u && (this.updateServiceEndpoint(x, u), this.setHostPrefix(x, t, e)); let h = C({}, e); if (e) {
        let y = c.getEventStreamMember();
        if (y) {
            if (h[y]) {
                let k = {};
                for (let [O, Z] of c.structIterator())
                    O !== y && h[O] && (n.write(Z, h[O]), k[O] = n.flush());
                l = yield this.serializeEventStream({ eventStream: h[y], requestSchema: c, initialRequest: k });
            }
        }
        else
            n.write(f, h), l = n.flush();
    } return x.headers = s, x.query = a, x.body = l, x.method = "POST", x; }); }
    deserializeResponse(t, e, r) { return S(this, null, function* () { let n = this.deserializer, a = A.of(t.output), s = {}; if (r.statusCode >= 300) {
        let c = yield Vt(r.body, e);
        throw c.byteLength > 0 && Object.assign(s, yield n.read(15, c)), yield this.handleError(t, e, r, s, this.deserializeMetadata(r)), new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
    } for (let c in r.headers) {
        let f = r.headers[c];
        delete r.headers[c], r.headers[c.toLowerCase()] = f;
    } let u = a.getEventStreamMember(); if (u)
        s[u] = yield this.deserializeEventStream({ response: r, responseSchema: a, initialResponseContainer: s });
    else {
        let c = yield Vt(r.body, e);
        c.byteLength > 0 && Object.assign(s, yield n.read(a, c));
    } return s.$metadata = this.deserializeMetadata(r), s; }); }
};
function ho(o, t, e) { if (e?.source) {
    let r = e.source;
    if (typeof t == "number" && (t > Number.MAX_SAFE_INTEGER || t < Number.MIN_SAFE_INTEGER || r !== String(t)))
        return r.includes(".") ? new _(r, "bigDecimal") : BigInt(r);
} return t; }
var yo = (o, t) => Ze(o, t).then(e => { if (e.length)
    try {
        return JSON.parse(e);
    }
    catch (r) {
        throw r?.name === "SyntaxError" && Object.defineProperty(r, "$responseBodyText", { value: e }), r;
    } return {}; });
var go = (o, t) => { let e = (a, s) => Object.keys(a).find(u => u.toLowerCase() === s.toLowerCase()), r = a => { let s = a; return typeof s == "number" && (s = s.toString()), s.indexOf(",") >= 0 && (s = s.split(",")[0]), s.indexOf(":") >= 0 && (s = s.split(":")[0]), s.indexOf("#") >= 0 && (s = s.split("#")[1]), s; }, n = e(o.headers, "x-amzn-errortype"); if (n !== void 0)
    return r(o.headers[n]); if (t && typeof t == "object") {
    let a = e(t, "code");
    if (a && t[a] !== void 0)
        return r(t[a]);
    if (t.__type !== void 0)
        return r(t.__type);
} };
var rt = class extends N {
    settings;
    constructor(t) { super(), this.settings = t; }
    read(t, e) { return S(this, null, function* () { return this._read(t, typeof e == "string" ? JSON.parse(e, ho) : yield yo(e, this.serdeContext)); }); }
    readObject(t, e) { return this._read(t, e); }
    _read(t, e) { let r = e !== null && typeof e == "object", n = A.of(t); if (r) {
        if (n.isStructSchema()) {
            let s = {};
            for (let [u, c] of Ye(n, e, this.settings.jsonName ? "jsonName" : !1)) {
                let f = this.settings.jsonName ? c.getMergedTraits().jsonName ?? u : u, l = this._read(c, e[f]);
                l != null && (s[u] = l);
            }
            return s;
        }
        if (Array.isArray(e) && n.isListSchema()) {
            let s = n.getValueSchema(), u = [], c = !!n.getMergedTraits().sparse;
            for (let f of e)
                (c || f != null) && u.push(this._read(s, f));
            return u;
        }
        if (n.isMapSchema()) {
            let s = n.getValueSchema(), u = {}, c = !!n.getMergedTraits().sparse;
            for (let [f, l] of Object.entries(e))
                (c || l != null) && (u[f] = this._read(s, l));
            return u;
        }
    } if (n.isBlobSchema() && typeof e == "string")
        return X(e); let a = n.getMergedTraits().mediaType; if (n.isStringSchema() && typeof e == "string" && a)
        return a === "application/json" || a.endsWith("+json") ? tt.from(e) : e; if (n.isTimestampSchema() && e != null)
        switch (et(n, this.settings)) {
            case 5: return Re(e);
            case 6: return _e(e);
            case 7: return Ae(e);
            default: return console.warn("Missing timestamp format, parsing value with Date constructor:", e), new Date(e);
        } if (n.isBigIntegerSchema() && (typeof e == "number" || typeof e == "string"))
        return BigInt(e); if (n.isBigDecimalSchema() && e != null) {
        if (e instanceof _)
            return e;
        let s = e;
        return s.type === "bigDecimal" && "string" in s ? new _(s.string, s.type) : new _(String(e), "bigDecimal");
    } if (n.isNumericSchema() && typeof e == "string") {
        switch (e) {
            case "Infinity": return 1 / 0;
            case "-Infinity": return -1 / 0;
            case "NaN": return NaN;
        }
        return e;
    } if (n.isDocumentSchema())
        if (r) {
            let s = Array.isArray(e) ? [] : {};
            for (let [u, c] of Object.entries(e))
                c instanceof _ ? s[u] = c : s[u] = this._read(n, c);
            return s;
        }
        else
            return structuredClone(e); return e; }
};
var Io = "\u039D", nt = class {
    values = new Map;
    counter = 0;
    stage = 0;
    createReplacer() { if (this.stage === 1)
        throw new Error("@aws-sdk/core/protocols - JsonReplacer already created."); if (this.stage === 2)
        throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted."); return this.stage = 1, (t, e) => { if (e instanceof _) {
        let r = `${Io + "nv" + this.counter++}_` + e.string;
        return this.values.set(`"${r}"`, e.string), r;
    } if (typeof e == "bigint") {
        let r = e.toString(), n = `${Io + "b" + this.counter++}_` + r;
        return this.values.set(`"${n}"`, r), n;
    } return e; }; }
    replaceInJson(t) { if (this.stage === 0)
        throw new Error("@aws-sdk/core/protocols - JsonReplacer not created yet."); if (this.stage === 2)
        throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted."); if (this.stage = 2, this.counter === 0)
        return t; for (let [e, r] of this.values)
        t = t.replace(e, r); return t; }
};
var it = class extends N {
    settings;
    buffer;
    useReplacer = !1;
    rootSchema;
    constructor(t) { super(), this.settings = t; }
    write(t, e) { this.rootSchema = A.of(t), this.buffer = this._write(this.rootSchema, e); }
    writeDiscriminatedDocument(t, e) { this.write(t, e), typeof this.buffer == "object" && (this.buffer.__type = A.of(t).getName(!0)); }
    flush() { let { rootSchema: t, useReplacer: e } = this; if (this.rootSchema = void 0, this.useReplacer = !1, t?.isStructSchema() || t?.isDocumentSchema()) {
        if (!e)
            return JSON.stringify(this.buffer);
        let r = new nt;
        return r.replaceInJson(JSON.stringify(this.buffer, r.createReplacer(), 0));
    } return this.buffer; }
    _write(t, e, r) { let n = e !== null && typeof e == "object", a = A.of(t); if (n) {
        if (a.isStructSchema()) {
            let s = {};
            for (let [u, c] of Qe(a, e)) {
                let f = this._write(c, e[u], a);
                if (f !== void 0) {
                    let l = c.getMergedTraits().jsonName, x = this.settings.jsonName ? l ?? u : u;
                    s[x] = f;
                }
            }
            return s;
        }
        if (Array.isArray(e) && a.isListSchema()) {
            let s = a.getValueSchema(), u = [], c = !!a.getMergedTraits().sparse;
            for (let f of e)
                (c || f != null) && u.push(this._write(s, f));
            return u;
        }
        if (a.isMapSchema()) {
            let s = a.getValueSchema(), u = {}, c = !!a.getMergedTraits().sparse;
            for (let [f, l] of Object.entries(e))
                (c || l != null) && (u[f] = this._write(s, l));
            return u;
        }
        if (e instanceof Uint8Array && (a.isBlobSchema() || a.isDocumentSchema()))
            return a === this.rootSchema ? e : (this.serdeContext?.base64Encoder ?? K)(e);
        if (e instanceof Date && (a.isTimestampSchema() || a.isDocumentSchema()))
            switch (et(a, this.settings)) {
                case 5: return e.toISOString().replace(".000Z", "Z");
                case 6: return be(e);
                case 7: return e.getTime() / 1e3;
                default: return console.warn("Missing timestamp format, using epoch seconds", e), e.getTime() / 1e3;
            }
        e instanceof _ && (this.useReplacer = !0);
    } if (!(e === null && r?.isStructSchema())) {
        if (a.isStringSchema()) {
            if (typeof e > "u" && a.isIdempotencyToken())
                return we();
            let s = a.getMergedTraits().mediaType;
            return e != null && s && (s === "application/json" || s.endsWith("+json")) ? tt.from(e) : e;
        }
        if (typeof e == "number" && a.isNumericSchema())
            return Math.abs(e) === 1 / 0 || isNaN(e) ? String(e) : e;
        if (typeof e == "string" && a.isBlobSchema())
            return a === this.rootSchema ? e : (this.serdeContext?.base64Encoder ?? K)(e);
        if (typeof e == "bigint" && (this.useReplacer = !0), a.isDocumentSchema())
            if (n) {
                let s = Array.isArray(e) ? [] : {};
                for (let [u, c] of Object.entries(e))
                    c instanceof _ ? (this.useReplacer = !0, s[u] = c) : s[u] = this._write(a, c);
                return s;
            }
            else
                return structuredClone(e);
        return e;
    } }
};
var st = class extends N {
    settings;
    constructor(t) { super(), this.settings = t; }
    createSerializer() { let t = new it(this.settings); return t.setSerdeContext(this.serdeContext), t; }
    createDeserializer() { let t = new rt(this.settings); return t.setSerdeContext(this.serdeContext), t; }
};
var at = class o extends ot {
    serializer;
    deserializer;
    serviceTarget;
    codec;
    mixin;
    awsQueryCompatible;
    constructor({ defaultNamespace: t, serviceTarget: e, awsQueryCompatible: r, jsonCodec: n }) { super({ defaultNamespace: t }), this.serviceTarget = e, this.codec = n ?? new st({ timestampFormat: { useTrait: !0, default: 7 }, jsonName: !1 }), this.serializer = this.codec.createSerializer(), this.deserializer = this.codec.createDeserializer(), this.awsQueryCompatible = !!r, this.mixin = new Ve(this.awsQueryCompatible); }
    serializeRequest(t, e, r) { return S(this, null, function* () { let n = yield ce(o.prototype, this, "serializeRequest").call(this, t, e, r); return n.path.endsWith("/") || (n.path += "/"), Object.assign(n.headers, { "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`, "x-amz-target": `${this.serviceTarget}.${t.name}` }), this.awsQueryCompatible && (n.headers["x-amzn-query-mode"] = "true"), (Pe(t.input) === "unit" || !n.body) && (n.body = "{}"), n; }); }
    getPayloadCodec() { return this.codec; }
    handleError(t, e, r, n, a) { return S(this, null, function* () { this.awsQueryCompatible && this.mixin.setQueryCompatError(n, r); let s = go(r, n) ?? "Unknown", { errorSchema: u, errorMetadata: c } = yield this.mixin.getErrorSchemaOrThrowBaseException(s, this.options.defaultNamespace, r, n, a, this.awsQueryCompatible ? this.mixin.findQueryCompatibleError : void 0), f = A.of(u), l = n.message ?? n.Message ?? "Unknown", x = E.for(u[1]).getErrorCtor(u) ?? Error, h = new x(l), y = {}; for (let [k, O] of f.structIterator())
        n[k] != null && (y[k] = this.codec.createDeserializer().readObject(O, n[k])); throw this.awsQueryCompatible && this.mixin.queryCompatOutput(n, y), this.mixin.decorateServiceException(Object.assign(h, c, { $fault: f.getMergedTraits().error, message: l }, y), n); }); }
};
var ct = class extends at {
    constructor({ defaultNamespace: t, serviceTarget: e, awsQueryCompatible: r, jsonCodec: n }) { super({ defaultNamespace: t, serviceTarget: e, awsQueryCompatible: r, jsonCodec: n }); }
    getShapeId() { return "aws.protocols#awsJson1_1"; }
    getJsonRpcVersion() { return "1.1"; }
    getDefaultContentType() { return "application/x-amz-json-1.1"; }
};
var xo = (o, t, e) => S(null, null, function* () { return { operation: he(t).operation, region: (yield Jt(o.region)()) || (() => { throw new Error("expected `region` to be configured for `aws.auth#sigv4`"); })() }; });
function Fr(o) { return { schemeId: "aws.auth#sigv4", signingProperties: { name: "cognito-identity", region: o.region }, propertiesExtractor: (t, e) => ({ signingProperties: { config: t, context: e } }) }; }
function pt(o) { return { schemeId: "smithy.api#noAuth" }; }
var Co = o => { let t = []; switch (o.operation) {
    case "GetCredentialsForIdentity": {
        t.push(pt(o));
        break;
    }
    case "GetId": {
        t.push(pt(o));
        break;
    }
    case "GetOpenIdToken": {
        t.push(pt(o));
        break;
    }
    case "UnlinkIdentity": {
        t.push(pt(o));
        break;
    }
    default: t.push(Fr(o));
} return t; }, So = o => { let t = Fe(o); return Object.assign(t, { authSchemePreference: Jt(o.authSchemePreference ?? []) }); };
var vo = o => Object.assign(o, { useDualstackEndpoint: o.useDualstackEndpoint ?? !1, useFipsEndpoint: o.useFipsEndpoint ?? !1, defaultSigningName: "cognito-identity" }), d = { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
var Po = { name: "@aws-sdk/client-cognito-identity", description: "AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native", version: "3.953.0", scripts: { build: "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs", "build:cjs": "node ../../scripts/compilation/inline client-cognito-identity", "build:es": "tsc -p tsconfig.es.json", "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build", "build:types": "tsc -p tsconfig.types.json", "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4", clean: "rimraf ./dist-* && rimraf *.tsbuildinfo", "extract:docs": "api-extractor run --local", "generate:client": "node ../../scripts/generate-clients/single-service --solo cognito-identity", "test:e2e": "yarn g:vitest run -c vitest.config.e2e.mts --mode development", "test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.mts", "test:index": "tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs" }, main: "./dist-cjs/index.js", types: "./dist-types/index.d.ts", module: "./dist-es/index.js", sideEffects: !1, dependencies: { "@aws-crypto/sha256-browser": "5.2.0", "@aws-crypto/sha256-js": "5.2.0", "@aws-sdk/core": "3.953.0", "@aws-sdk/credential-provider-node": "3.953.0", "@aws-sdk/middleware-host-header": "3.953.0", "@aws-sdk/middleware-logger": "3.953.0", "@aws-sdk/middleware-recursion-detection": "3.953.0", "@aws-sdk/middleware-user-agent": "3.953.0", "@aws-sdk/region-config-resolver": "3.953.0", "@aws-sdk/types": "3.953.0", "@aws-sdk/util-endpoints": "3.953.0", "@aws-sdk/util-user-agent-browser": "3.953.0", "@aws-sdk/util-user-agent-node": "3.953.0", "@smithy/config-resolver": "^4.4.4", "@smithy/core": "^3.19.0", "@smithy/fetch-http-handler": "^5.3.7", "@smithy/hash-node": "^4.2.6", "@smithy/invalid-dependency": "^4.2.6", "@smithy/middleware-content-length": "^4.2.6", "@smithy/middleware-endpoint": "^4.3.15", "@smithy/middleware-retry": "^4.4.15", "@smithy/middleware-serde": "^4.2.7", "@smithy/middleware-stack": "^4.2.6", "@smithy/node-config-provider": "^4.3.6", "@smithy/node-http-handler": "^4.4.6", "@smithy/protocol-http": "^5.3.6", "@smithy/smithy-client": "^4.10.0", "@smithy/types": "^4.10.0", "@smithy/url-parser": "^4.2.6", "@smithy/util-base64": "^4.3.0", "@smithy/util-body-length-browser": "^4.2.0", "@smithy/util-body-length-node": "^4.2.1", "@smithy/util-defaults-mode-browser": "^4.3.14", "@smithy/util-defaults-mode-node": "^4.2.17", "@smithy/util-endpoints": "^3.2.6", "@smithy/util-middleware": "^4.2.6", "@smithy/util-retry": "^4.2.6", "@smithy/util-utf8": "^4.2.0", tslib: "^2.6.2" }, devDependencies: { "@aws-sdk/client-iam": "3.953.0", "@tsconfig/node18": "18.2.4", "@types/chai": "^4.2.11", "@types/node": "^18.19.69", concurrently: "7.0.0", "downlevel-dts": "0.10.1", rimraf: "3.0.2", typescript: "~5.8.3" }, engines: { node: ">=18.0.0" }, typesVersions: { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } }, files: ["dist-*/**"], author: { name: "AWS SDK for JavaScript Team", url: "https://aws.amazon.com/javascript/" }, license: "Apache-2.0", browser: { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser" }, "react-native": { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native" }, homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity", repository: { type: "git", url: "https://github.com/aws/aws-sdk-js-v3.git", directory: "clients/client-cognito-identity" } };
var Qt = o => new TextEncoder().encode(o);
var Br = typeof Buffer < "u" && Buffer.from ? function (o) { return Buffer.from(o, "utf8"); } : Qt;
function M(o) { return o instanceof Uint8Array ? o : typeof o == "string" ? Br(o) : ArrayBuffer.isView(o) ? new Uint8Array(o.buffer, o.byteOffset, o.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(o); }
function F(o) { return typeof o == "string" ? o.length === 0 : o.byteLength === 0; }
var Yt = { name: "SHA-256" }, Zt = { name: "HMAC", hash: Yt }, Eo = new Uint8Array([227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85]);
var Xt = (function () { function o(t) { this.toHash = new Uint8Array(0), this.secret = t, this.reset(); } return o.prototype.update = function (t) { if (!F(t)) {
    var e = M(t), r = new Uint8Array(this.toHash.byteLength + e.byteLength);
    r.set(this.toHash, 0), r.set(e, this.toHash.byteLength), this.toHash = r;
} }, o.prototype.digest = function () { var t = this; return this.key ? this.key.then(function (e) { return G().crypto.subtle.sign(Zt, e, t.toHash).then(function (r) { return new Uint8Array(r); }); }) : F(this.toHash) ? Promise.resolve(Eo) : Promise.resolve().then(function () { return G().crypto.subtle.digest(Yt, t.toHash); }).then(function (e) { return Promise.resolve(new Uint8Array(e)); }); }, o.prototype.reset = function () { var t = this; this.toHash = new Uint8Array(0), this.secret && this.secret !== void 0 && (this.key = new Promise(function (e, r) { G().crypto.subtle.importKey("raw", M(t.secret), Zt, !1, ["sign"]).then(e, r); }), this.key.catch(function () { })); }, o; })();
import { __awaiter as zr, __generator as jr } from "tslib";
var R = 64, bo = 32, Ro = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), _o = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], Ao = Math.pow(2, 53) - 1;
var q = (function () { function o() { this.state = Int32Array.from(_o), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1; } return o.prototype.update = function (t) { if (this.finished)
    throw new Error("Attempted to update an already finished hash."); var e = 0, r = t.byteLength; if (this.bytesHashed += r, this.bytesHashed * 8 > Ao)
    throw new Error("Cannot hash more than 2^53 - 1 bits"); for (; r > 0;)
    this.buffer[this.bufferLength++] = t[e++], r--, this.bufferLength === R && (this.hashBuffer(), this.bufferLength = 0); }, o.prototype.digest = function () { if (!this.finished) {
    var t = this.bytesHashed * 8, e = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), r = this.bufferLength;
    if (e.setUint8(this.bufferLength++, 128), r % R >= R - 8) {
        for (var n = this.bufferLength; n < R; n++)
            e.setUint8(n, 0);
        this.hashBuffer(), this.bufferLength = 0;
    }
    for (var n = this.bufferLength; n < R - 8; n++)
        e.setUint8(n, 0);
    e.setUint32(R - 8, Math.floor(t / 4294967296), !0), e.setUint32(R - 4, t), this.hashBuffer(), this.finished = !0;
} for (var a = new Uint8Array(bo), n = 0; n < 8; n++)
    a[n * 4] = this.state[n] >>> 24 & 255, a[n * 4 + 1] = this.state[n] >>> 16 & 255, a[n * 4 + 2] = this.state[n] >>> 8 & 255, a[n * 4 + 3] = this.state[n] >>> 0 & 255; return a; }, o.prototype.hashBuffer = function () { for (var t = this, e = t.buffer, r = t.state, n = r[0], a = r[1], s = r[2], u = r[3], c = r[4], f = r[5], l = r[6], x = r[7], h = 0; h < R; h++) {
    if (h < 16)
        this.temp[h] = (e[h * 4] & 255) << 24 | (e[h * 4 + 1] & 255) << 16 | (e[h * 4 + 2] & 255) << 8 | e[h * 4 + 3] & 255;
    else {
        var y = this.temp[h - 2], k = (y >>> 17 | y << 15) ^ (y >>> 19 | y << 13) ^ y >>> 10;
        y = this.temp[h - 15];
        var O = (y >>> 7 | y << 25) ^ (y >>> 18 | y << 14) ^ y >>> 3;
        this.temp[h] = (k + this.temp[h - 7] | 0) + (O + this.temp[h - 16] | 0);
    }
    var Z = (((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) + (c & f ^ ~c & l) | 0) + (x + (Ro[h] + this.temp[h] | 0) | 0) | 0, Gr = ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + (n & a ^ n & s ^ a & s) | 0;
    x = l, l = f, f = c, c = u + Z | 0, u = s, s = a, a = n, n = Z + Gr | 0;
} r[0] += n, r[1] += a, r[2] += s, r[3] += u, r[4] += c, r[5] += f, r[6] += l, r[7] += x; }, o; })();
var wo = (function () { function o(t) { this.secret = t, this.hash = new q, this.reset(); } return o.prototype.update = function (t) { if (!(F(t) || this.error))
    try {
        this.hash.update(M(t));
    }
    catch (e) {
        this.error = e;
    } }, o.prototype.digestSync = function () { if (this.error)
    throw this.error; return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest(); }, o.prototype.digest = function () { return zr(this, void 0, void 0, function () { return jr(this, function (t) { return [2, this.digestSync()]; }); }); }, o.prototype.reset = function () { if (this.hash = new q, this.secret) {
    this.outer = new q;
    var t = Wr(this.secret), e = new Uint8Array(R);
    e.set(t);
    for (var r = 0; r < R; r++)
        t[r] ^= 54, e[r] ^= 92;
    this.hash.update(t), this.outer.update(e);
    for (var r = 0; r < t.byteLength; r++)
        t[r] = 0;
} }, o; })();
function Wr(o) { var t = M(o); if (t.byteLength > R) {
    var e = new q;
    e.update(t), t = e.digest();
} var r = new Uint8Array(R); return r.set(t), r; }
import { __awaiter as Zc, __generator as Xc } from "tslib";
var Kr = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
function To(o) { if (qr(o) && typeof o.crypto.subtle == "object") {
    var t = o.crypto.subtle;
    return Jr(t);
} return !1; }
function qr(o) { if (typeof o == "object" && typeof o.crypto == "object") {
    var t = o.crypto.getRandomValues;
    return typeof t == "function";
} return !1; }
function Jr(o) { return o && Kr.every(function (t) { return typeof o[t] == "function"; }); }
var Do = (function () { function o(t) { To(G()) ? this.hash = new Xt(t) : this.hash = new wo(t); } return o.prototype.update = function (t, e) { this.hash.update(M(t)); }, o.prototype.digest = function () { return this.hash.digest(); }, o.prototype.reset = function () { this.hash.reset(); }, o; })();
var Ho = "required";
var P = "argv";
var $o = "isSet", Q = "booleanEquals", H = "error", D = "endpoint", U = "tree", te = "PartitionResult", ee = "getAttr", J = "stringEquals", Lo = { [Ho]: !1, type: "string" }, Mo = { [Ho]: !0, default: !1, type: "boolean" }, Uo = { ref: "Endpoint" }, Bo = { fn: Q, [P]: [{ ref: "UseFIPS" }, !0] }, zo = { fn: Q, [P]: [{ ref: "UseDualStack" }, !0] }, g = {}, V = { ref: "Region" }, ko = { fn: ee, [P]: [{ ref: te }, "supportsFIPS"] }, jo = { ref: te }, Oo = { fn: Q, [P]: [!0, { fn: ee, [P]: [jo, "supportsDualStack"] }] }, No = [Bo], Go = [zo], Fo = [V], Vr = { version: "1.0", parameters: { Region: Lo, UseDualStack: Mo, UseFIPS: Mo, Endpoint: Lo }, rules: [{ conditions: [{ fn: $o, [P]: [Uo] }], rules: [{ conditions: No, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: H }, { conditions: Go, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: H }, { endpoint: { url: Uo, properties: g, headers: g }, type: D }], type: U }, { conditions: [{ fn: $o, [P]: Fo }], rules: [{ conditions: [{ fn: "aws.partition", [P]: Fo, assign: te }], rules: [{ conditions: [Bo, zo], rules: [{ conditions: [{ fn: Q, [P]: [!0, ko] }, Oo], rules: [{ conditions: [{ fn: J, [P]: [V, "us-east-1"] }], endpoint: { url: "https://cognito-identity-fips.us-east-1.amazonaws.com", properties: g, headers: g }, type: D }, { conditions: [{ fn: J, [P]: [V, "us-east-2"] }], endpoint: { url: "https://cognito-identity-fips.us-east-2.amazonaws.com", properties: g, headers: g }, type: D }, { conditions: [{ fn: J, [P]: [V, "us-west-1"] }], endpoint: { url: "https://cognito-identity-fips.us-west-1.amazonaws.com", properties: g, headers: g }, type: D }, { conditions: [{ fn: J, [P]: [V, "us-west-2"] }], endpoint: { url: "https://cognito-identity-fips.us-west-2.amazonaws.com", properties: g, headers: g }, type: D }, { endpoint: { url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: g, headers: g }, type: D }], type: U }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: H }], type: U }, { conditions: No, rules: [{ conditions: [{ fn: Q, [P]: [ko, !0] }], rules: [{ endpoint: { url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}", properties: g, headers: g }, type: D }], type: U }, { error: "FIPS is enabled but this partition does not support FIPS", type: H }], type: U }, { conditions: Go, rules: [{ conditions: [Oo], rules: [{ conditions: [{ fn: J, [P]: ["aws", { fn: ee, [P]: [jo, "name"] }] }], endpoint: { url: "https://cognito-identity.{Region}.amazonaws.com", properties: g, headers: g }, type: D }, { endpoint: { url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: g, headers: g }, type: D }], type: U }, { error: "DualStack is enabled but this partition does not support DualStack", type: H }], type: U }, { endpoint: { url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}", properties: g, headers: g }, type: D }], type: U }], type: U }, { error: "Invalid Configuration: Missing Region", type: H }] }, Wo = Vr;
var Qr = new Me({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] }), Ko = (o, t = {}) => Qr.get(o, () => ke(Wo, { endpointParams: o, logger: t.logger }));
Ue.aws = Oe;
var qo = o => ({ apiVersion: "2014-06-30", base64Decoder: o?.base64Decoder ?? X, base64Encoder: o?.base64Encoder ?? K, disableHostPrefix: o?.disableHostPrefix ?? !1, endpointProvider: o?.endpointProvider ?? Ko, extensions: o?.extensions ?? [], httpAuthSchemeProvider: o?.httpAuthSchemeProvider ?? Co, httpAuthSchemes: o?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: t => t.getIdentityProvider("aws.auth#sigv4"), signer: new Ge }, { schemeId: "smithy.api#noAuth", identityProvider: t => t.getIdentityProvider("smithy.api#noAuth") || (() => S(null, null, function* () { return {}; })), signer: new $e }], logger: o?.logger ?? new Je, protocol: o?.protocol ?? ct, protocolSettings: o?.protocolSettings ?? { defaultNamespace: "com.amazonaws.cognitoidentity", xmlNamespace: "http://cognito-identity.amazonaws.com/doc/2014-06-30/", version: "2014-06-30", serviceTarget: "AWSCognitoIdentityService" }, serviceId: o?.serviceId ?? "Cognito Identity", urlParser: o?.urlParser ?? Ne, utf8Decoder: o?.utf8Decoder ?? xe, utf8Encoder: o?.utf8Encoder ?? Ce });
var Jo = o => { let t = uo(o), e = () => t().then(We), r = qo(o); return ae(C(C({}, r), o), { runtime: "browser", defaultsMode: t, bodyLengthChecker: o?.bodyLengthChecker ?? He, credentialDefaultProvider: o?.credentialDefaultProvider ?? (n => () => Promise.reject(new Error("Credential is missing"))), defaultUserAgentProvider: o?.defaultUserAgentProvider ?? po({ serviceId: r.serviceId, clientVersion: Po.version }), maxAttempts: o?.maxAttempts ?? io, region: o?.region ?? mo("Region is missing"), requestHandler: Se.create(o?.requestHandler ?? e), retryMode: o?.retryMode ?? (() => S(null, null, function* () { return (yield e()).retryMode || so; })), sha256: o?.sha256 ?? Do, streamCollector: o?.streamCollector ?? ve, useDualstackEndpoint: o?.useDualstackEndpoint ?? (() => Promise.resolve(to)), useFipsEndpoint: o?.useFipsEndpoint ?? (() => Promise.resolve(eo)) }); };
var Vo = o => { let t = o.httpAuthSchemes, e = o.httpAuthSchemeProvider, r = o.credentials; return { setHttpAuthScheme(n) { let a = t.findIndex(s => s.schemeId === n.schemeId); a === -1 ? t.push(n) : t.splice(a, 1, n); }, httpAuthSchemes() { return t; }, setHttpAuthSchemeProvider(n) { e = n; }, httpAuthSchemeProvider() { return e; }, setCredentials(n) { r = n; }, credentials() { return r; } }; }, Qo = o => ({ httpAuthSchemes: o.httpAuthSchemes(), httpAuthSchemeProvider: o.httpAuthSchemeProvider(), credentials: o.credentials() });
var Yo = (o, t) => { let e = Object.assign(fo(o), Ke(o), pe(o), Vo(o)); return t.forEach(r => r.configure(e)), Object.assign(o, lo(e), qe(e), me(e), Qo(e)); };
var B = class extends Be {
    config;
    constructor(...[t]) { let e = Jo(t || {}); super(e), this.initConfig = e; let r = vo(e), n = Le(r), a = ao(n), s = oo(a), u = s, c = no(u), f = So(c), l = Yo(f, t?.extensions || []); this.config = l, this.middlewareStack.use(Ee(this.config)), this.middlewareStack.use(Xe(this.config)), this.middlewareStack.use(co(this.config)), this.middlewareStack.use(ro(this.config)), this.middlewareStack.use(ue(this.config)), this.middlewareStack.use(fe(this.config)), this.middlewareStack.use(le(this.config)), this.middlewareStack.use(ye(this.config, { httpAuthSchemeParametersProvider: xo, identityProviderConfigProvider: x => S(this, null, function* () { return new De({ "aws.auth#sigv4": x.credentials }); }) })), this.middlewareStack.use(ge(this.config)); }
    destroy() { super.destroy(); }
};
var v = class o extends je {
    constructor(t) { super(t), Object.setPrototypeOf(this, o.prototype); }
};
var mt = class o extends v {
    name = "InternalErrorException";
    $fault = "server";
    constructor(t) { super(C({ name: "InternalErrorException", $fault: "server" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, dt = class o extends v {
    name = "InvalidParameterException";
    $fault = "client";
    constructor(t) { super(C({ name: "InvalidParameterException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, ut = class o extends v {
    name = "LimitExceededException";
    $fault = "client";
    constructor(t) { super(C({ name: "LimitExceededException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, ft = class o extends v {
    name = "NotAuthorizedException";
    $fault = "client";
    constructor(t) { super(C({ name: "NotAuthorizedException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, lt = class o extends v {
    name = "ResourceConflictException";
    $fault = "client";
    constructor(t) { super(C({ name: "ResourceConflictException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, ht = class o extends v {
    name = "TooManyRequestsException";
    $fault = "client";
    constructor(t) { super(C({ name: "TooManyRequestsException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, yt = class o extends v {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(t) { super(C({ name: "ResourceNotFoundException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, gt = class o extends v {
    name = "ExternalServiceException";
    $fault = "client";
    constructor(t) { super(C({ name: "ExternalServiceException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, It = class o extends v {
    name = "InvalidIdentityPoolConfigurationException";
    $fault = "client";
    constructor(t) { super(C({ name: "InvalidIdentityPoolConfigurationException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, xt = class o extends v {
    name = "DeveloperUserAlreadyRegisteredException";
    $fault = "client";
    constructor(t) { super(C({ name: "DeveloperUserAlreadyRegisteredException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
}, Ct = class o extends v {
    name = "ConcurrentModificationException";
    $fault = "client";
    constructor(t) { super(C({ name: "ConcurrentModificationException", $fault: "client" }, t)), Object.setPrototypeOf(this, o.prototype); }
};
var Zo = "AllowClassicFlow", Yr = "AccountId", Zr = "AccessKeyId", Xr = "AmbiguousRoleResolution", Xo = "AllowUnauthenticatedIdentities", tr = "Credentials", tn = "CreationDate", en = "ClientId", on = "CognitoIdentityProvider", rn = "CreateIdentityPoolInput", nn = "CognitoIdentityProviderList", er = "CognitoIdentityProviders", sn = "CreateIdentityPool", an = "ConcurrentModificationException", cn = "CustomRoleArn", pn = "Claim", mn = "DeleteIdentities", dn = "DeleteIdentitiesInput", un = "DescribeIdentityInput", fn = "DeleteIdentityPool", ln = "DeleteIdentityPoolInput", hn = "DescribeIdentityPoolInput", yn = "DescribeIdentityPool", gn = "DeleteIdentitiesResponse", In = "DescribeIdentity", vt = "DeveloperProviderName", xn = "DeveloperUserAlreadyRegisteredException", or = "DeveloperUserIdentifier", Cn = "DeveloperUserIdentifierList", Sn = "DestinationUserIdentifier", vn = "Expiration", Pn = "ErrorCode", En = "ExternalServiceException", bn = "GetCredentialsForIdentity", Rn = "GetCredentialsForIdentityInput", _n = "GetCredentialsForIdentityResponse", An = "GetId", wn = "GetIdInput", Tn = "GetIdentityPoolRoles", Dn = "GetIdentityPoolRolesInput", $n = "GetIdentityPoolRolesResponse", Ln = "GetIdResponse", Mn = "GetOpenIdToken", Un = "GetOpenIdTokenForDeveloperIdentity", kn = "GetOpenIdTokenForDeveloperIdentityInput", On = "GetOpenIdTokenForDeveloperIdentityResponse", Nn = "GetOpenIdTokenInput", Gn = "GetOpenIdTokenResponse", Fn = "GetPrincipalTagAttributeMap", Hn = "GetPrincipalTagAttributeMapInput", Bn = "GetPrincipalTagAttributeMapResponse", zn = "HideDisabled", jn = "Identities", Wn = "IdentityDescription", Kn = "InternalErrorException", b = "IdentityId", qn = "InvalidIdentityPoolConfigurationException", Jn = "IdentityIdsToDelete", Vn = "IdentitiesList", Qn = "IdentityPool", Yn = "InvalidParameterException", I = "IdentityPoolId", Zn = "IdentityPoolsList", oe = "IdentityPoolName", Pt = "IdentityProviderName", Xn = "IdentityPoolShortDescription", ti = "IdentityProviderToken", rr = "IdentityPoolTags", ei = "IdentityPools", z = "Logins", oi = "LookupDeveloperIdentity", ri = "LookupDeveloperIdentityInput", ni = "LookupDeveloperIdentityResponse", ii = "LimitExceededException", si = "ListIdentities", ai = "ListIdentitiesInput", ci = "ListIdentityPools", pi = "ListIdentityPoolsInput", mi = "ListIdentityPoolsResponse", di = "ListIdentitiesResponse", ui = "LoginsMap", fi = "LastModifiedDate", li = "ListTagsForResource", hi = "ListTagsForResourceInput", yi = "ListTagsForResourceResponse", gi = "LoginsToRemove", Ii = "MergeDeveloperIdentities", xi = "MergeDeveloperIdentitiesInput", Ci = "MergeDeveloperIdentitiesResponse", re = "MaxResults", Si = "MappingRulesList", vi = "MappingRule", Pi = "MatchType", Ei = "NotAuthorizedException", j = "NextToken", nr = "OpenIdConnectProviderARNs", bi = "OIDCToken", Ri = "ProviderName", Et = "PrincipalTags", ir = "Roles", ne = "ResourceArn", _i = "RoleARN", Ai = "RulesConfiguration", wi = "ResourceConflictException", Ti = "RulesConfigurationType", sr = "RoleMappings", Di = "RoleMappingMap", $i = "RoleMapping", Li = "ResourceNotFoundException", Mi = "Rules", Ui = "SetIdentityPoolRoles", ki = "SetIdentityPoolRolesInput", Oi = "SecretKey", Ni = "SecretKeyString", ar = "SupportedLoginProviders", cr = "SamlProviderARNs", Gi = "SetPrincipalTagAttributeMap", Fi = "SetPrincipalTagAttributeMapInput", Hi = "SetPrincipalTagAttributeMapResponse", Bi = "ServerSideTokenCheck", zi = "SessionToken", ji = "SourceUserIdentifier", pr = "Token", Wi = "TokenDuration", Ki = "TagKeys", qi = "TooManyRequestsException", Ji = "TagResource", Vi = "TagResourceInput", Qi = "TagResourceResponse", mr = "Tags", Yi = "Type", ie = "UseDefaults", Zi = "UnlinkDeveloperIdentity", Xi = "UnlinkDeveloperIdentityInput", ts = "UnlinkIdentity", es = "UnprocessedIdentityIds", os = "UnprocessedIdentityIdList", rs = "UnlinkIdentityInput", ns = "UnprocessedIdentityId", is = "UpdateIdentityPool", ss = "UntagResource", as = "UntagResourceInput", cs = "UntagResourceResponse", ps = "Value", $ = "client", w = "error", L = "httpError", T = "message", ms = "server", dr = "smithy.ts.sdk.synthetic.com.amazonaws.cognitoidentity", i = "com.amazonaws.cognitoidentity", ds = [0, i, ti, 8, 0], ur = [0, i, bi, 8, 0], us = [0, i, Ni, 8, 0], fs = [3, i, on, 0, [Ri, en, Bi], [0, 0, 2]], ls = [-3, i, an, { [w]: $, [L]: 400 }, [T], [0]];
E.for(i).registerError(ls, Ct);
var hs = [3, i, rn, 0, [oe, Xo, Zo, ar, vt, nr, er, cr, rr], [0, 2, 2, 128, 0, 64, () => lr, 64, 128]], ys = [3, i, tr, 0, [Zr, Oi, zi, vn], [0, [() => us, 0], 0, 4]], gs = [3, i, dn, 0, [Jn], [64]], Is = [3, i, gn, 0, [es], [() => Ia]], xs = [3, i, ln, 0, [I], [0]], Cs = [3, i, un, 0, [b], [0]], Ss = [3, i, hn, 0, [I], [0]], vs = [-3, i, xn, { [w]: $, [L]: 400 }, [T], [0]];
E.for(i).registerError(vs, xt);
var Ps = [-3, i, En, { [w]: $, [L]: 400 }, [T], [0]];
E.for(i).registerError(Ps, gt);
var Es = [3, i, Rn, 0, [b, z, cn], [0, [() => Y, 0], 0]], bs = [3, i, _n, 0, [b, tr], [0, [() => ys, 0]]], Rs = [3, i, Dn, 0, [I], [0]], _s = [3, i, $n, 0, [I, ir, sr], [0, 128, () => hr]], As = [3, i, wn, 0, [Yr, I, z], [0, 0, [() => Y, 0]]], ws = [3, i, Ln, 0, [b], [0]], Ts = [3, i, kn, 0, [I, b, z, Et, Wi], [0, 0, [() => Y, 0], 128, 1]], Ds = [3, i, On, 0, [b, pr], [0, [() => ur, 0]]], $s = [3, i, Nn, 0, [b, z], [0, [() => Y, 0]]], Ls = [3, i, Gn, 0, [b, pr], [0, [() => ur, 0]]], Ms = [3, i, Hn, 0, [I, Pt], [0, 0]], Us = [3, i, Bn, 0, [I, Pt, ie, Et], [0, 0, 2, 128]], fr = [3, i, Wn, 0, [b, z, tn, fi], [0, 64, 4, 4]], St = [3, i, Qn, 0, [I, oe, Xo, Zo, ar, vt, nr, er, cr, rr], [0, 0, 2, 2, 128, 0, 64, () => lr, 64, 128]], ks = [3, i, Xn, 0, [I, oe], [0, 0]], Os = [-3, i, Kn, { [w]: ms }, [T], [0]];
E.for(i).registerError(Os, mt);
var Ns = [-3, i, qn, { [w]: $, [L]: 400 }, [T], [0]];
E.for(i).registerError(Ns, It);
var Gs = [-3, i, Yn, { [w]: $, [L]: 400 }, [T], [0]];
E.for(i).registerError(Gs, dt);
var Fs = [-3, i, ii, { [w]: $, [L]: 400 }, [T], [0]];
E.for(i).registerError(Fs, ut);
var Hs = [3, i, ai, 0, [I, re, j, zn], [0, 1, 0, 2]], Bs = [3, i, di, 0, [I, jn, j], [0, () => ha, 0]], zs = [3, i, pi, 0, [re, j], [1, 0]], js = [3, i, mi, 0, [ei, j], [() => ya, 0]], Ws = [3, i, hi, 0, [ne], [0]], Ks = [3, i, yi, 0, [mr], [128]], qs = [3, i, ri, 0, [I, b, or, re, j], [0, 0, 0, 1, 0]], Js = [3, i, ni, 0, [b, Cn, j], [0, 64, 0]], Vs = [3, i, vi, 0, [pn, Pi, ps, _i], [0, 0, 0, 0]], Qs = [3, i, xi, 0, [ji, Sn, vt, I], [0, 0, 0, 0]], Ys = [3, i, Ci, 0, [b], [0]], Zs = [-3, i, Ei, { [w]: $, [L]: 403 }, [T], [0]];
E.for(i).registerError(Zs, ft);
var Xs = [-3, i, wi, { [w]: $, [L]: 409 }, [T], [0]];
E.for(i).registerError(Xs, lt);
var ta = [-3, i, Li, { [w]: $, [L]: 404 }, [T], [0]];
E.for(i).registerError(ta, yt);
var ea = [3, i, $i, 0, [Yi, Xr, Ai], [0, 0, () => oa]], oa = [3, i, Ti, 0, [Mi], [() => ga]], ra = [3, i, ki, 0, [I, ir, sr], [0, 128, () => hr]], na = [3, i, Fi, 0, [I, Pt, ie, Et], [0, 0, 2, 128]], ia = [3, i, Hi, 0, [I, Pt, ie, Et], [0, 0, 2, 128]], sa = [3, i, Vi, 0, [ne, mr], [0, 128]], aa = [3, i, Qi, 0, [], []], ca = [-3, i, qi, { [w]: $, [L]: 429 }, [T], [0]];
E.for(i).registerError(ca, ht);
var pa = [3, i, Xi, 0, [b, I, vt, or], [0, 0, 0, 0]], ma = [3, i, rs, 0, [b, z, gi], [0, [() => Y, 0], 64]], da = [3, i, ns, 0, [b, Pn], [0, 0]], ua = [3, i, as, 0, [ne, Ki], [0, 64]], fa = [3, i, cs, 0, [], []], bt = "unit", la = [-3, dr, "CognitoIdentityServiceException", 0, [], []];
E.for(dr).registerError(la, v);
var lr = [1, i, nn, 0, () => fs];
var ha = [1, i, Vn, 0, () => fr];
var ya = [1, i, Zn, 0, () => ks];
var ga = [1, i, Si, 0, () => Vs];
var Ia = [1, i, os, 0, () => da];
var Y = [2, i, ui, 0, [0, 0], [() => ds, 0]];
var hr = [2, i, Di, 0, 0, () => ea];
var yr = [9, i, sn, 0, () => hs, () => St], gr = [9, i, mn, 0, () => gs, () => Is], Ir = [9, i, fn, 0, () => xs, () => bt], xr = [9, i, In, 0, () => Cs, () => fr], Cr = [9, i, yn, 0, () => Ss, () => St], Sr = [9, i, bn, 0, () => Es, () => bs], vr = [9, i, An, 0, () => As, () => ws], Pr = [9, i, Tn, 0, () => Rs, () => _s], Er = [9, i, Mn, 0, () => $s, () => Ls], br = [9, i, Un, 0, () => Ts, () => Ds], Rr = [9, i, Fn, 0, () => Ms, () => Us], _r = [9, i, si, 0, () => Hs, () => Bs], Ar = [9, i, ci, 0, () => zs, () => js], wr = [9, i, li, 0, () => Ws, () => Ks], Tr = [9, i, oi, 0, () => qs, () => Js], Dr = [9, i, Ii, 0, () => Qs, () => Ys], $r = [9, i, Ui, 0, () => ra, () => bt], Lr = [9, i, Gi, 0, () => na, () => ia], Mr = [9, i, Ji, 0, () => sa, () => aa], Ur = [9, i, Zi, 0, () => pa, () => bt], kr = [9, i, ts, 0, () => ma, () => bt], Or = [9, i, ss, 0, () => ua, () => fa], Nr = [9, i, is, 0, () => St, () => St];
var Rt = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "CreateIdentityPool", {}).n("CognitoIdentityClient", "CreateIdentityPoolCommand").sc(yr).build() {
};
var _t = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "DeleteIdentities", {}).n("CognitoIdentityClient", "DeleteIdentitiesCommand").sc(gr).build() {
};
var At = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "DeleteIdentityPool", {}).n("CognitoIdentityClient", "DeleteIdentityPoolCommand").sc(Ir).build() {
};
var wt = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "DescribeIdentity", {}).n("CognitoIdentityClient", "DescribeIdentityCommand").sc(xr).build() {
};
var Tt = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "DescribeIdentityPool", {}).n("CognitoIdentityClient", "DescribeIdentityPoolCommand").sc(Cr).build() {
};
var Dt = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {}).n("CognitoIdentityClient", "GetCredentialsForIdentityCommand").sc(Sr).build() {
};
var $t = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetId", {}).n("CognitoIdentityClient", "GetIdCommand").sc(vr).build() {
};
var Lt = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetIdentityPoolRoles", {}).n("CognitoIdentityClient", "GetIdentityPoolRolesCommand").sc(Pr).build() {
};
var Mt = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetOpenIdToken", {}).n("CognitoIdentityClient", "GetOpenIdTokenCommand").sc(Er).build() {
};
var Ut = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetOpenIdTokenForDeveloperIdentity", {}).n("CognitoIdentityClient", "GetOpenIdTokenForDeveloperIdentityCommand").sc(br).build() {
};
var kt = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "GetPrincipalTagAttributeMapCommand").sc(Rr).build() {
};
var Ot = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "ListIdentities", {}).n("CognitoIdentityClient", "ListIdentitiesCommand").sc(_r).build() {
};
var W = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "ListIdentityPools", {}).n("CognitoIdentityClient", "ListIdentityPoolsCommand").sc(Ar).build() {
};
var Nt = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "ListTagsForResource", {}).n("CognitoIdentityClient", "ListTagsForResourceCommand").sc(wr).build() {
};
var Gt = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "LookupDeveloperIdentity", {}).n("CognitoIdentityClient", "LookupDeveloperIdentityCommand").sc(Tr).build() {
};
var Ft = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "MergeDeveloperIdentities", {}).n("CognitoIdentityClient", "MergeDeveloperIdentitiesCommand").sc(Dr).build() {
};
var Ht = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "SetIdentityPoolRoles", {}).n("CognitoIdentityClient", "SetIdentityPoolRolesCommand").sc($r).build() {
};
var Bt = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "SetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "SetPrincipalTagAttributeMapCommand").sc(Lr).build() {
};
var zt = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "TagResource", {}).n("CognitoIdentityClient", "TagResourceCommand").sc(Mr).build() {
};
var jt = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "UnlinkDeveloperIdentity", {}).n("CognitoIdentityClient", "UnlinkDeveloperIdentityCommand").sc(Ur).build() {
};
var Wt = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "UnlinkIdentity", {}).n("CognitoIdentityClient", "UnlinkIdentityCommand").sc(kr).build() {
};
var Kt = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "UntagResource", {}).n("CognitoIdentityClient", "UntagResourceCommand").sc(Or).build() {
};
var qt = class extends p.classBuilder().ep(d).m(function (t, e, r, n) { return [m(r, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "UpdateIdentityPool", {}).n("CognitoIdentityClient", "UpdateIdentityPoolCommand").sc(Nr).build() {
};
var xa = { CreateIdentityPoolCommand: Rt, DeleteIdentitiesCommand: _t, DeleteIdentityPoolCommand: At, DescribeIdentityCommand: wt, DescribeIdentityPoolCommand: Tt, GetCredentialsForIdentityCommand: Dt, GetIdCommand: $t, GetIdentityPoolRolesCommand: Lt, GetOpenIdTokenCommand: Mt, GetOpenIdTokenForDeveloperIdentityCommand: Ut, GetPrincipalTagAttributeMapCommand: kt, ListIdentitiesCommand: Ot, ListIdentityPoolsCommand: W, ListTagsForResourceCommand: Nt, LookupDeveloperIdentityCommand: Gt, MergeDeveloperIdentitiesCommand: Ft, SetIdentityPoolRolesCommand: Ht, SetPrincipalTagAttributeMapCommand: Bt, TagResourceCommand: zt, UnlinkDeveloperIdentityCommand: jt, UnlinkIdentityCommand: Wt, UntagResourceCommand: Kt, UpdateIdentityPoolCommand: qt }, se = class extends B {
};
ze(xa, se);
var of = Ie(B, W, "NextToken", "NextToken", "MaxResults");
var nf = { AUTHENTICATED_ROLE: "AuthenticatedRole", DENY: "Deny" }, sf = { ACCESS_DENIED: "AccessDenied", INTERNAL_SERVER_ERROR: "InternalServerError" }, af = { CONTAINS: "Contains", EQUALS: "Equals", NOT_EQUAL: "NotEqual", STARTS_WITH: "StartsWith" }, cf = { RULES: "Rules", TOKEN: "Token" };
export { p as $Command, nf as AmbiguousRoleResolutionType, se as CognitoIdentity, B as CognitoIdentityClient, fs as CognitoIdentityProvider$, v as CognitoIdentityServiceException, la as CognitoIdentityServiceException$, Ct as ConcurrentModificationException, ls as ConcurrentModificationException$, yr as CreateIdentityPool$, Rt as CreateIdentityPoolCommand, hs as CreateIdentityPoolInput$, ys as Credentials$, gr as DeleteIdentities$, _t as DeleteIdentitiesCommand, gs as DeleteIdentitiesInput$, Is as DeleteIdentitiesResponse$, Ir as DeleteIdentityPool$, At as DeleteIdentityPoolCommand, xs as DeleteIdentityPoolInput$, xr as DescribeIdentity$, wt as DescribeIdentityCommand, Cs as DescribeIdentityInput$, Cr as DescribeIdentityPool$, Tt as DescribeIdentityPoolCommand, Ss as DescribeIdentityPoolInput$, xt as DeveloperUserAlreadyRegisteredException, vs as DeveloperUserAlreadyRegisteredException$, sf as ErrorCode, gt as ExternalServiceException, Ps as ExternalServiceException$, Sr as GetCredentialsForIdentity$, Dt as GetCredentialsForIdentityCommand, Es as GetCredentialsForIdentityInput$, bs as GetCredentialsForIdentityResponse$, vr as GetId$, $t as GetIdCommand, As as GetIdInput$, ws as GetIdResponse$, Pr as GetIdentityPoolRoles$, Lt as GetIdentityPoolRolesCommand, Rs as GetIdentityPoolRolesInput$, _s as GetIdentityPoolRolesResponse$, Er as GetOpenIdToken$, Mt as GetOpenIdTokenCommand, br as GetOpenIdTokenForDeveloperIdentity$, Ut as GetOpenIdTokenForDeveloperIdentityCommand, Ts as GetOpenIdTokenForDeveloperIdentityInput$, Ds as GetOpenIdTokenForDeveloperIdentityResponse$, $s as GetOpenIdTokenInput$, Ls as GetOpenIdTokenResponse$, Rr as GetPrincipalTagAttributeMap$, kt as GetPrincipalTagAttributeMapCommand, Ms as GetPrincipalTagAttributeMapInput$, Us as GetPrincipalTagAttributeMapResponse$, fr as IdentityDescription$, St as IdentityPool$, ks as IdentityPoolShortDescription$, mt as InternalErrorException, Os as InternalErrorException$, It as InvalidIdentityPoolConfigurationException, Ns as InvalidIdentityPoolConfigurationException$, dt as InvalidParameterException, Gs as InvalidParameterException$, ut as LimitExceededException, Fs as LimitExceededException$, _r as ListIdentities$, Ot as ListIdentitiesCommand, Hs as ListIdentitiesInput$, Bs as ListIdentitiesResponse$, Ar as ListIdentityPools$, W as ListIdentityPoolsCommand, zs as ListIdentityPoolsInput$, js as ListIdentityPoolsResponse$, wr as ListTagsForResource$, Nt as ListTagsForResourceCommand, Ws as ListTagsForResourceInput$, Ks as ListTagsForResourceResponse$, Tr as LookupDeveloperIdentity$, Gt as LookupDeveloperIdentityCommand, qs as LookupDeveloperIdentityInput$, Js as LookupDeveloperIdentityResponse$, Vs as MappingRule$, af as MappingRuleMatchType, Dr as MergeDeveloperIdentities$, Ft as MergeDeveloperIdentitiesCommand, Qs as MergeDeveloperIdentitiesInput$, Ys as MergeDeveloperIdentitiesResponse$, ft as NotAuthorizedException, Zs as NotAuthorizedException$, lt as ResourceConflictException, Xs as ResourceConflictException$, yt as ResourceNotFoundException, ta as ResourceNotFoundException$, ea as RoleMapping$, cf as RoleMappingType, oa as RulesConfigurationType$, $r as SetIdentityPoolRoles$, Ht as SetIdentityPoolRolesCommand, ra as SetIdentityPoolRolesInput$, Lr as SetPrincipalTagAttributeMap$, Bt as SetPrincipalTagAttributeMapCommand, na as SetPrincipalTagAttributeMapInput$, ia as SetPrincipalTagAttributeMapResponse$, Mr as TagResource$, zt as TagResourceCommand, sa as TagResourceInput$, aa as TagResourceResponse$, ht as TooManyRequestsException, ca as TooManyRequestsException$, Ur as UnlinkDeveloperIdentity$, jt as UnlinkDeveloperIdentityCommand, pa as UnlinkDeveloperIdentityInput$, kr as UnlinkIdentity$, Wt as UnlinkIdentityCommand, ma as UnlinkIdentityInput$, da as UnprocessedIdentityId$, Or as UntagResource$, Kt as UntagResourceCommand, ua as UntagResourceInput$, fa as UntagResourceResponse$, Nr as UpdateIdentityPool$, qt as UpdateIdentityPoolCommand, Be as __Client, of as paginateListIdentityPools };
