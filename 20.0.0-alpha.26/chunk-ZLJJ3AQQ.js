import { a as U, b as Se } from "@nf-internal/chunk-A2Y7EL3B";
import { a as h, b as w, d as ye, h as f, i as Ot, j as vt } from "@nf-internal/chunk-FJYW2LMB";
var G = (e, t) => { let r = []; if (e && r.push(e), t)
    for (let n of t)
        r.push(n); return r; }, z = (e, t) => `${e || "anonymous"}${t && t.length > 0 ? ` (a.k.a. ${t.join(",")})` : ""}`, K = () => { let e = [], t = [], r = !1, n = new Set, o = d => d.sort((l, m) => Dt[m.step] - Dt[l.step] || Mt[m.priority || "normal"] - Mt[l.priority || "normal"]), s = d => { let l = !1, m = g => { let E = G(g.name, g.aliases); if (E.includes(d)) {
    l = !0;
    for (let y of E)
        n.delete(y);
    return !1;
} return !0; }; return e = e.filter(m), t = t.filter(m), l; }, i = d => { let l = !1, m = g => { if (g.middleware === d) {
    l = !0;
    for (let E of G(g.name, g.aliases))
        n.delete(E);
    return !1;
} return !0; }; return e = e.filter(m), t = t.filter(m), l; }, a = d => (e.forEach(l => { d.add(l.middleware, h({}, l)); }), t.forEach(l => { d.addRelativeTo(l.middleware, h({}, l)); }), d.identifyOnResolve?.(p.identifyOnResolve()), d), c = d => { let l = []; return d.before.forEach(m => { m.before.length === 0 && m.after.length === 0 ? l.push(m) : l.push(...c(m)); }), l.push(d), d.after.reverse().forEach(m => { m.before.length === 0 && m.after.length === 0 ? l.push(m) : l.push(...c(m)); }), l; }, u = (d = !1) => { let l = [], m = [], g = {}; return e.forEach(y => { let S = w(h({}, y), { before: [], after: [] }); for (let x of G(S.name, S.aliases))
    g[x] = S; l.push(S); }), t.forEach(y => { let S = w(h({}, y), { before: [], after: [] }); for (let x of G(S.name, S.aliases))
    g[x] = S; m.push(S); }), m.forEach(y => { if (y.toMiddleware) {
    let S = g[y.toMiddleware];
    if (S === void 0) {
        if (d)
            return;
        throw new Error(`${y.toMiddleware} is not found when adding ${z(y.name, y.aliases)} middleware ${y.relation} ${y.toMiddleware}`);
    }
    y.relation === "after" && S.after.push(y), y.relation === "before" && S.before.push(y);
} }), o(l).map(c).reduce((y, S) => (y.push(...S), y), []); }, p = { add: (d, l = {}) => { let { name: m, override: g, aliases: E } = l, y = h({ step: "initialize", priority: "normal", middleware: d }, l), S = G(m, E); if (S.length > 0) {
        if (S.some(x => n.has(x))) {
            if (!g)
                throw new Error(`Duplicate middleware name '${z(m, E)}'`);
            for (let x of S) {
                let R = e.findIndex(_ => _.name === x || _.aliases?.some(M => M === x));
                if (R === -1)
                    continue;
                let b = e[R];
                if (b.step !== y.step || y.priority !== b.priority)
                    throw new Error(`"${z(b.name, b.aliases)}" middleware with ${b.priority} priority in ${b.step} step cannot be overridden by "${z(m, E)}" middleware with ${y.priority} priority in ${y.step} step.`);
                e.splice(R, 1);
            }
        }
        for (let x of S)
            n.add(x);
    } e.push(y); }, addRelativeTo: (d, l) => { let { name: m, override: g, aliases: E } = l, y = h({ middleware: d }, l), S = G(m, E); if (S.length > 0) {
        if (S.some(x => n.has(x))) {
            if (!g)
                throw new Error(`Duplicate middleware name '${z(m, E)}'`);
            for (let x of S) {
                let R = t.findIndex(_ => _.name === x || _.aliases?.some(M => M === x));
                if (R === -1)
                    continue;
                let b = t[R];
                if (b.toMiddleware !== y.toMiddleware || b.relation !== y.relation)
                    throw new Error(`"${z(b.name, b.aliases)}" middleware ${b.relation} "${b.toMiddleware}" middleware cannot be overridden by "${z(m, E)}" middleware ${y.relation} "${y.toMiddleware}" middleware.`);
                t.splice(R, 1);
            }
        }
        for (let x of S)
            n.add(x);
    } t.push(y); }, clone: () => a(K()), use: d => { d.applyToStack(p); }, remove: d => typeof d == "string" ? s(d) : i(d), removeByTag: d => { let l = !1, m = g => { let { tags: E, name: y, aliases: S } = g; if (E && E.includes(d)) {
        let x = G(y, S);
        for (let R of x)
            n.delete(R);
        return l = !0, !1;
    } return !0; }; return e = e.filter(m), t = t.filter(m), l; }, concat: d => { let l = a(K()); return l.use(d), l.identifyOnResolve(r || l.identifyOnResolve() || (d.identifyOnResolve?.() ?? !1)), l; }, applyToStack: a, identify: () => u(!0).map(d => { let l = d.step ?? d.relation + " " + d.toMiddleware; return z(d.name, d.aliases) + " - " + l; }), identifyOnResolve(d) { return typeof d == "boolean" && (r = d), r; }, resolve: (d, l) => { for (let m of u().map(g => g.middleware).reverse())
        d = m(d, l); return r && console.log(p.identify()), d; } }; return p; }, Dt = { initialize: 5, serialize: 4, build: 3, finalizeRequest: 2, deserialize: 1 }, Mt = { high: 3, normal: 2, low: 1 };
var Pt = class {
    config;
    middlewareStack = K();
    initConfig;
    handlers;
    constructor(t) { this.config = t; let { protocol: r, protocolSettings: n } = t; n && typeof r == "function" && (t.protocol = new r(n)); }
    send(t, r, n) { let o = typeof r != "function" ? r : void 0, s = typeof r == "function" ? r : n, i = o === void 0 && this.config.cacheMiddleware === !0, a; if (i) {
        this.handlers || (this.handlers = new WeakMap);
        let c = this.handlers;
        c.has(t.constructor) ? a = c.get(t.constructor) : (a = t.resolveMiddleware(this.middlewareStack, this.config, o), c.set(t.constructor, a));
    }
    else
        delete this.handlers, a = t.resolveMiddleware(this.middlewareStack, this.config, o); if (s)
        a(t).then(c => s(null, c.output), c => s(c)).catch(() => { });
    else
        return a(t).then(c => c.output); }
    destroy() { this.config?.requestHandler?.destroy?.(), delete this.handlers; }
};
var re = (function (e) { return e.HTTP = "http", e.HTTPS = "https", e; })(re || {});
var ne = (function (e) { return e.MD5 = "md5", e.CRC32 = "crc32", e.CRC32C = "crc32c", e.SHA1 = "sha1", e.SHA256 = "sha256", e; })(ne || {});
var oe = "__smithy_context";
var Ee = e => typeof e == "function" ? e() : e;
var vs = e => ({ setHttpHandler(t) { e.httpHandler = t; }, httpHandler() { return e.httpHandler; }, updateHttpClientConfig(t, r) { e.httpHandler?.updateHttpClientConfig(t, r); }, httpHandlerConfigs() { return e.httpHandler.httpHandlerConfigs(); } }), Ds = e => ({ httpHandler: e.httpHandler() });
var A = class e {
    method;
    protocol;
    hostname;
    port;
    path;
    query;
    headers;
    username;
    password;
    fragment;
    body;
    constructor(t) { this.method = t.method || "GET", this.hostname = t.hostname || "localhost", this.port = t.port, this.query = t.query || {}, this.headers = t.headers || {}, this.body = t.body, this.protocol = t.protocol ? t.protocol.slice(-1) !== ":" ? `${t.protocol}:` : t.protocol : "https:", this.path = t.path ? t.path.charAt(0) !== "/" ? `/${t.path}` : t.path : "/", this.username = t.username, this.password = t.password, this.fragment = t.fragment; }
    static clone(t) { let r = new e(w(h({}, t), { headers: h({}, t.headers) })); return r.query && (r.query = Vn(r.query)), r; }
    static isInstance(t) { if (!t)
        return !1; let r = t; return "method" in r && "protocol" in r && "hostname" in r && "path" in r && typeof r.query == "object" && typeof r.headers == "object"; }
    clone() { return e.clone(this); }
};
function Vn(e) { return Object.keys(e).reduce((t, r) => { let n = e[r]; return w(h({}, t), { [r]: Array.isArray(n) ? [...n] : n }); }, {}); }
var I = class {
    statusCode;
    reason;
    headers;
    body;
    constructor(t) { this.statusCode = t.statusCode, this.reason = t.reason, this.headers = t.headers || {}, this.body = t.body; }
    static isInstance(t) { if (!t)
        return !1; let r = t; return typeof r.statusCode == "number" && typeof r.headers == "object"; }
};
var P = e => e[oe] || (e[oe] = {});
var $ = e => { if (typeof e == "function")
    return e; let t = Promise.resolve(e); return () => t; };
var we = (e, t, r, n, o) => ({ name: t, namespace: e, traits: r, input: n, output: o });
var $t = e => (t, r) => n => f(null, null, function* () {
    let { response: o } = yield t(n), { operationSchema: s } = P(r), [, i, a, c, u, p] = s ?? [];
    try {
        let d = yield e.protocol.deserializeResponse(we(i, a, c, u, p), h(h({}, e), r), o);
        return { response: o, output: d };
    }
    catch (d) {
        if (Object.defineProperty(d, "$response", { value: o, enumerable: !1, writable: !1, configurable: !1 }), !("$metadata" in d)) {
            let l = "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";
            try {
                d.message += `
  ` + l;
            }
            catch {
                !r.logger || r.logger?.constructor?.name === "NoOpLogger" ? console.warn(l) : r.logger?.warn?.(l);
            }
            typeof d.$responseBodyText < "u" && d.$response && (d.$response.body = d.$responseBodyText);
            try {
                if (I.isInstance(o)) {
                    let { headers: m = {} } = o, g = Object.entries(m);
                    d.$metadata = { httpStatusCode: o.statusCode, requestId: We(/^x-[\w-]+-request-?id$/, g), extendedRequestId: We(/^x-[\w-]+-id-2$/, g), cfId: We(/^x-[\w-]+-cf-id$/, g) };
                }
            }
            catch { }
        }
        throw d;
    }
}), We = (e, t) => (t.find(([r]) => r.match(e)) || [void 0, void 0])[1];
var kt = e => (t, r) => n => f(null, null, function* () { let { operationSchema: o } = P(r), [, s, i, a, c, u] = o ?? [], p = r.endpointV2?.url && e.urlParser ? () => f(null, null, function* () { return e.urlParser(r.endpointV2.url); }) : e.endpoint, d = yield e.protocol.serializeRequest(we(s, i, a, c, u), n.input, w(h(h({}, e), r), { endpoint: p })); return t(w(h({}, n), { request: d })); });
var Wn = { name: "deserializerMiddleware", step: "deserialize", tags: ["DESERIALIZER"], override: !0 }, Yn = { name: "serializerMiddleware", step: "serialize", tags: ["SERIALIZER"], override: !0 };
function Js(e) { return { applyToStack: t => { t.add(kt(e), Yn), t.add($t(e), Wn), e.protocol.setSerdeContext(e); } }; }
function V(e) { if (typeof e == "object")
    return e; e = e | 0; let t = {}, r = 0; for (let n of ["httpLabel", "idempotent", "idempotencyToken", "sensitive", "httpPayload", "httpResponseCode", "httpQueryParams"])
    (e >> r++ & 1) === 1 && (t[n] = 1); return t; }
var v = (() => { class e {
    ref;
    memberName;
    static symbol = Symbol.for("@smithy/nor");
    symbol = e.symbol;
    name;
    schema;
    _isMemberSchema;
    traits;
    memberTraits;
    normalizedTraits;
    constructor(r, n) { this.ref = r, this.memberName = n; let o = [], s = r, i = r; for (this._isMemberSchema = !1; Ye(s);)
        o.push(s[1]), s = s[0], i = Ee(s), this._isMemberSchema = !0; if (o.length > 0) {
        this.memberTraits = {};
        for (let a = o.length - 1; a >= 0; --a) {
            let c = o[a];
            Object.assign(this.memberTraits, V(c));
        }
    }
    else
        this.memberTraits = 0; if (i instanceof e) {
        let a = this.memberTraits;
        Object.assign(this, i), this.memberTraits = Object.assign({}, a, i.getMemberTraits(), this.getMemberTraits()), this.normalizedTraits = void 0, this.memberName = n ?? i.memberName;
        return;
    } if (this.schema = Ee(i), Xn(this.schema) ? (this.name = `${this.schema[1]}#${this.schema[2]}`, this.traits = this.schema[3]) : (this.name = this.memberName ?? String(i), this.traits = 0), this._isMemberSchema && !n)
        throw new Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(!0)} missing member name.`); }
    static [Symbol.hasInstance](r) { let n = this.prototype.isPrototypeOf(r); return !n && typeof r == "object" && r !== null ? r.symbol === this.symbol : n; }
    static of(r) { let n = Ee(r); if (n instanceof e)
        return n; if (Ye(n)) {
        let [o, s] = n;
        if (o instanceof e)
            return Object.assign(o.getMergedTraits(), V(s)), o;
        throw new Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(r, null, 2)}.`);
    } return new e(n); }
    getSchema() { let r = this.schema; return r[0] === 0 ? r[4] : r; }
    getName(r = !1) { let { name: n } = this; return !r && n && n.includes("#") ? n.split("#")[1] : n || void 0; }
    getMemberName() { return this.memberName; }
    isMemberSchema() { return this._isMemberSchema; }
    isListSchema() { let r = this.getSchema(); return typeof r == "number" ? r >= 64 && r < 128 : r[0] === 1; }
    isMapSchema() { let r = this.getSchema(); return typeof r == "number" ? r >= 128 && r <= 255 : r[0] === 2; }
    isStructSchema() { let r = this.getSchema(); return r[0] === 3 || r[0] === -3; }
    isBlobSchema() { let r = this.getSchema(); return r === 21 || r === 42; }
    isTimestampSchema() { let r = this.getSchema(); return typeof r == "number" && r >= 4 && r <= 7; }
    isUnitSchema() { return this.getSchema() === "unit"; }
    isDocumentSchema() { return this.getSchema() === 15; }
    isStringSchema() { return this.getSchema() === 0; }
    isBooleanSchema() { return this.getSchema() === 2; }
    isNumericSchema() { return this.getSchema() === 1; }
    isBigIntegerSchema() { return this.getSchema() === 17; }
    isBigDecimalSchema() { return this.getSchema() === 19; }
    isStreaming() { let { streaming: r } = this.getMergedTraits(); return !!r || this.getSchema() === 42; }
    isIdempotencyToken() { let r = i => (i & 4) === 4 || !!i?.idempotencyToken, { normalizedTraits: n, traits: o, memberTraits: s } = this; return r(n) || r(o) || r(s); }
    getMergedTraits() { return this.normalizedTraits ?? (this.normalizedTraits = h(h({}, this.getOwnTraits()), this.getMemberTraits())); }
    getMemberTraits() { return V(this.memberTraits); }
    getOwnTraits() { return V(this.traits); }
    getKeySchema() { let [r, n] = [this.isDocumentSchema(), this.isMapSchema()]; if (!r && !n)
        throw new Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(!0)}`); let o = this.getSchema(), s = r ? 15 : o[4] ?? 0; return se([s, 0], "key"); }
    getValueSchema() { let r = this.getSchema(), [n, o, s] = [this.isDocumentSchema(), this.isMapSchema(), this.isListSchema()], i = typeof r == "number" ? 63 & r : r && typeof r == "object" && (o || s) ? r[3 + r[0]] : n ? 15 : void 0; if (i != null)
        return se([i, 0], o ? "value" : "member"); throw new Error(`@smithy/core/schema - ${this.getName(!0)} has no value member.`); }
    getMemberSchema(r) { let n = this.getSchema(); if (this.isStructSchema() && n[4].includes(r)) {
        let o = n[4].indexOf(r), s = n[5][o];
        return se(Ye(s) ? s : [s, 0], r);
    } if (this.isDocumentSchema())
        return se([15, 0], r); throw new Error(`@smithy/core/schema - ${this.getName(!0)} has no no member=${r}.`); }
    getMemberSchemas() { let r = {}; try {
        for (let [n, o] of this.structIterator())
            r[n] = o;
    }
    catch { } return r; }
    getEventStreamMember() { if (this.isStructSchema()) {
        for (let [r, n] of this.structIterator())
            if (n.isStreaming() && n.isStructSchema())
                return r;
    } return ""; }
    *structIterator() { if (this.isUnitSchema())
        return; if (!this.isStructSchema())
        throw new Error("@smithy/core/schema - cannot iterate non-struct schema."); let r = this.getSchema(); for (let n = 0; n < r[4].length; ++n)
        yield [r[4][n], se([r[5][n], 0], r[4][n])]; }
} return e; })();
function se(e, t) { if (e instanceof v)
    return Object.assign(e, { memberName: t, _isMemberSchema: !0 }); let r = v; return new r(e, t); }
var Ye = e => Array.isArray(e) && e.length === 2, Xn = e => Array.isArray(e) && e.length >= 5;
var ie = class e {
    namespace;
    schemas;
    exceptions;
    static registries = new Map;
    constructor(t, r = new Map, n = new Map) { this.namespace = t, this.schemas = r, this.exceptions = n; }
    static for(t) { return e.registries.has(t) || e.registries.set(t, new e(t)), e.registries.get(t); }
    register(t, r) { let n = this.normalizeShapeId(t); e.for(n.split("#")[0]).schemas.set(n, r); }
    getSchema(t) { let r = this.normalizeShapeId(t); if (!this.schemas.has(r))
        throw new Error(`@smithy/core/schema - schema not found for ${r}`); return this.schemas.get(r); }
    registerError(t, r) { let n = t, o = e.for(n[1]); o.schemas.set(n[1] + "#" + n[2], n), o.exceptions.set(n, r); }
    getErrorCtor(t) { let r = t; return e.for(r[1]).exceptions.get(r); }
    getBaseException() { for (let t of this.exceptions.keys())
        if (Array.isArray(t)) {
            let [, r, n] = t, o = r + "#" + n;
            if (o.startsWith("smithy.ts.sdk.synthetic.") && o.endsWith("ServiceException"))
                return t;
        } }
    find(t) { return [...this.schemas.values()].find(t); }
    clear() { this.schemas.clear(), this.exceptions.clear(); }
    normalizeShapeId(t) { return t.includes("#") ? t : this.namespace + "#" + t; }
};
var Xe = "***SensitiveInformation***";
function xe(e, t) { if (t == null)
    return t; let r = v.of(e); if (r.getMergedTraits().sensitive)
    return Xe; if (r.isListSchema()) {
    if (!!r.getValueSchema().getMergedTraits().sensitive)
        return Xe;
}
else if (r.isMapSchema()) {
    if (!!r.getKeySchema().getMergedTraits().sensitive || !!r.getValueSchema().getMergedTraits().sensitive)
        return Xe;
}
else if (r.isStructSchema() && typeof t == "object") {
    let n = t, o = {};
    for (let [s, i] of r.structIterator())
        n[s] != null && (o[s] = xe(i, n[s]));
    return o;
} return t; }
var Ke = class {
    middlewareStack = K();
    schema;
    static classBuilder() { return new Qe; }
    resolveMiddlewareWithContext(t, r, n, { middlewareFn: o, clientName: s, commandName: i, inputFilterSensitiveLog: a, outputFilterSensitiveLog: c, smithyContext: u, additionalContext: p, CommandCtor: d }) { for (let y of o.bind(this)(d, t, r, n))
        this.middlewareStack.use(y); let l = t.concat(this.middlewareStack), { logger: m } = r, g = h({ logger: m, clientName: s, commandName: i, inputFilterSensitiveLog: a, outputFilterSensitiveLog: c, [oe]: h({ commandInstance: this }, u) }, p), { requestHandler: E } = r; return l.resolve(y => E.handle(y.request, n || {}), g); }
}, Qe = class {
    _init = () => { };
    _ep = {};
    _middlewareFn = () => [];
    _commandName = "";
    _clientName = "";
    _additionalContext = {};
    _smithyContext = {};
    _inputFilterSensitiveLog = void 0;
    _outputFilterSensitiveLog = void 0;
    _serializer = null;
    _deserializer = null;
    _operationSchema;
    init(t) { this._init = t; }
    ep(t) { return this._ep = t, this; }
    m(t) { return this._middlewareFn = t, this; }
    s(t, r, n = {}) { return this._smithyContext = h({ service: t, operation: r }, n), this; }
    c(t = {}) { return this._additionalContext = t, this; }
    n(t, r) { return this._clientName = t, this._commandName = r, this; }
    f(t = n => n, r = n => n) { return this._inputFilterSensitiveLog = t, this._outputFilterSensitiveLog = r, this; }
    ser(t) { return this._serializer = t, this; }
    de(t) { return this._deserializer = t, this; }
    sc(t) { return this._operationSchema = t, this._smithyContext.operationSchema = t, this; }
    build() { let t = this, r; return r = class extends Ke {
        input;
        static getEndpointParameterInstructions() { return t._ep; }
        constructor(...[n]) { super(), this.input = n ?? {}, t._init(this), this.schema = t._operationSchema; }
        resolveMiddleware(n, o, s) { let i = t._operationSchema, a = i?.[4] ?? i?.input, c = i?.[5] ?? i?.output; return this.resolveMiddlewareWithContext(n, o, s, { CommandCtor: r, middlewareFn: t._middlewareFn, clientName: t._clientName, commandName: t._commandName, inputFilterSensitiveLog: t._inputFilterSensitiveLog ?? (i ? xe.bind(null, a) : u => u), outputFilterSensitiveLog: t._outputFilterSensitiveLog ?? (i ? xe.bind(null, c) : u => u), smithyContext: t._smithyContext, additionalContext: t._additionalContext }); }
        serialize = t._serializer;
        deserialize = t._deserializer;
    }; }
};
var Kn = e => t => r => f(null, null, function* () { if (!A.isInstance(r.request))
    return t(r); let { request: n } = r, { handlerProtocol: o = "" } = e.requestHandler.metadata || {}; if (o.indexOf("h2") >= 0 && !n.headers[":authority"])
    delete n.headers.host, n.headers[":authority"] = n.hostname + (n.port ? ":" + n.port : "");
else if (!n.headers.host) {
    let s = n.hostname;
    n.port != null && (s += `:${n.port}`), n.headers.host = s;
} return t(r); }), Qn = { name: "hostHeaderMiddleware", step: "build", priority: "low", tags: ["HOST"], override: !0 }, hi = e => ({ applyToStack: t => { t.add(Kn(e), Qn); } });
var Jn = () => (e, t) => r => f(null, null, function* () { try {
    let o = yield e(r), { clientName: s, commandName: i, logger: a, dynamoDbDocumentClientOptions: c = {} } = t, { overrideInputFilterSensitiveLog: u, overrideOutputFilterSensitiveLog: p } = c, d = u ?? t.inputFilterSensitiveLog, l = p ?? t.outputFilterSensitiveLog, n = o.output, { $metadata: m } = n, g = ye(n, ["$metadata"]);
    return a?.info?.({ clientName: s, commandName: i, input: d(r.input), output: l(g), metadata: m }), o;
}
catch (o) {
    let { clientName: s, commandName: i, logger: a, dynamoDbDocumentClientOptions: c = {} } = t, { overrideInputFilterSensitiveLog: u } = c, p = u ?? t.inputFilterSensitiveLog;
    throw a?.error?.({ clientName: s, commandName: i, input: p(r.input), error: o, metadata: o.$metadata }), o;
} }), Zn = { name: "loggerMiddleware", tags: ["LOGGER"], step: "initialize", override: !0 }, Si = e => ({ applyToStack: t => { t.add(Jn(), Zn); } });
var Ut = { step: "build", tags: ["RECURSION_DETECTION"], name: "recursionDetectionMiddleware", override: !0, priority: "low" };
var Lt = () => e => t => f(null, null, function* () { return e(t); });
var Ci = e => ({ applyToStack: t => { t.add(Lt(), Ut); } });
var Ht = (e, t) => { if (!t || t.length === 0)
    return e; let r = []; for (let n of t)
    for (let o of e)
        o.schemeId.split("#")[1] === n && r.push(o); for (let n of e)
    r.find(({ schemeId: o }) => o === n.schemeId) || r.push(n); return r; };
function eo(e) { let t = new Map; for (let r of e)
    t.set(r.schemeId, r); return t; }
var Ft = (e, t) => (r, n) => o => f(null, null, function* () {
    let s = e.httpAuthSchemeProvider(yield t.httpAuthSchemeParametersProvider(e, n, o.input)), i = e.authSchemePreference ? yield e.authSchemePreference() : [], a = Ht(s, i), c = eo(e.httpAuthSchemes), u = P(n), p = [];
    for (let d of a) {
        let l = c.get(d.schemeId);
        if (!l) {
            p.push(`HttpAuthScheme \`${d.schemeId}\` was not enabled for this service.`);
            continue;
        }
        let m = l.identityProvider(yield t.identityProviderConfigProvider(e));
        if (!m) {
            p.push(`HttpAuthScheme \`${d.schemeId}\` did not have an IdentityProvider configured.`);
            continue;
        }
        let { identityProperties: g = {}, signingProperties: E = {} } = d.propertiesExtractor?.(e, n) || {};
        d.identityProperties = Object.assign(d.identityProperties || {}, g), d.signingProperties = Object.assign(d.signingProperties || {}, E), u.selectedHttpAuthScheme = { httpAuthOption: d, identity: yield m(d.identityProperties), signer: l.signer };
        break;
    }
    if (!u.selectedHttpAuthScheme)
        throw new Error(p.join(`
`));
    return r(o);
});
var to = { step: "serialize", tags: ["HTTP_AUTH_SCHEME"], name: "httpAuthSchemeMiddleware", override: !0, relation: "before", toMiddleware: "endpointV2Middleware" }, Pi = (e, { httpAuthSchemeParametersProvider: t, identityProviderConfigProvider: r }) => ({ applyToStack: n => { n.addRelativeTo(Ft(e, { httpAuthSchemeParametersProvider: t, identityProviderConfigProvider: r }), to); } });
var ro = e => t => { throw t; }, no = (e, t) => { }, zt = e => (t, r) => n => f(null, null, function* () { if (!A.isInstance(n.request))
    return t(n); let s = P(r).selectedHttpAuthScheme; if (!s)
    throw new Error("No HttpAuthScheme was selected: unable to sign request"); let { httpAuthOption: { signingProperties: i = {} }, identity: a, signer: c } = s, u = yield t(w(h({}, n), { request: yield c.sign(n.request, a, i) })).catch((c.errorHandler || ro)(i)); return (c.successHandler || no)(u.response, i), u; });
var oo = { step: "finalizeRequest", tags: ["HTTP_SIGNING"], name: "httpSigningMiddleware", aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"], override: !0, relation: "after", toMiddleware: "retryMiddleware" }, zi = e => ({ applyToStack: t => { t.addRelativeTo(zt(e), oo); } });
var so = (e, t, r, n = s => s, ...o) => f(null, null, function* () { let s = new e(r); return s = n(s) ?? s, yield t.send(s, ...o); });
function io(e, t, r, n, o) { return function (i, a, ...c) { return vt(this, null, function* () { let u = a, p = i.startingToken ?? u[r], d = !0, l; for (; d;) {
    if (u[r] = p, o && (u[o] = u[o] ?? i.pageSize), i.client instanceof e)
        l = yield new Ot(so(t, i.client, a, i.withCommand, ...c));
    else
        throw new Error(`Invalid client, expected instance of ${e.name}`);
    yield l;
    let m = p;
    p = ao(l, n), d = !!(p && (!i.stopOnSameToken || p !== m));
} return void 0; }); }; }
var ao = (e, t) => { let r = e, n = t.split("."); for (let o of n) {
    if (!r || typeof r != "object")
        return;
    r = r[o];
} return r; };
var Bt = class {
    authSchemes = new Map;
    constructor(t) { for (let [r, n] of Object.entries(t))
        n !== void 0 && this.authSchemes.set(r, n); }
    getIdentityProvider(t) { return this.authSchemes.get(t); }
};
var jt = { name: "serializerMiddleware", step: "serialize", tags: ["SERIALIZER"], override: !0 };
var L = e => { if (typeof e == "function")
    return e; let t = Promise.resolve(e); return () => t; };
var qt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Je = Object.entries(qt).reduce((e, [t, r]) => (e[r] = Number(t), e), {}), Gt = qt.split(""), B = 6, W = 8, Vt = 63;
var Re = e => { let t = e.length / 4 * 3; e.slice(-2) === "==" ? t -= 2 : e.slice(-1) === "=" && t--; let r = new ArrayBuffer(t), n = new DataView(r); for (let o = 0; o < e.length; o += 4) {
    let s = 0, i = 0;
    for (let u = o, p = o + 3; u <= p; u++)
        if (e[u] !== "=") {
            if (!(e[u] in Je))
                throw new TypeError(`Invalid character ${e[u]} in base64 string.`);
            s |= Je[e[u]] << (p - u) * B, i += B;
        }
        else
            s >>= B;
    let a = o / 4 * 3;
    s >>= i % W;
    let c = Math.floor(i / W);
    for (let u = 0; u < c; u++) {
        let p = (c - u - 1) * W;
        n.setUint8(a + u, (s & 255 << p) >> p);
    }
} return new Uint8Array(r); };
var H = e => typeof e == "string" ? U(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
function Wt(e) { let t; typeof e == "string" ? t = U(e) : t = e; let r = typeof t == "object" && typeof t.length == "number", n = typeof t == "object" && typeof t.byteOffset == "number" && typeof t.byteLength == "number"; if (!r && !n)
    throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array."); let o = ""; for (let s = 0; s < t.length; s += 3) {
    let i = 0, a = 0;
    for (let u = s, p = Math.min(s + 3, t.length); u < p; u++)
        i |= t[u] << (p - u - 1) * W, a += W;
    let c = Math.ceil(a / B);
    i <<= c * B - a;
    for (let u = 1; u <= c; u++) {
        let p = (c - u) * B;
        o += Gt[(i & Vt << p) >> p];
    }
    o += "==".slice(0, 4 - c);
} return o; }
var Q = class e extends Uint8Array {
    static fromString(t, r = "utf-8") { if (typeof t == "string")
        return r === "base64" ? e.mutate(Re(t)) : e.mutate(U(t)); throw new Error(`Unsupported conversion from ${typeof t} to Uint8ArrayBlobAdapter.`); }
    static mutate(t) { return Object.setPrototypeOf(t, e.prototype), t; }
    transformToString(t = "utf-8") { return t === "base64" ? Wt(this) : Se(this); }
};
var k = e => encodeURIComponent(e).replace(/[!'()*]/g, co), co = e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`;
function Yt(e) { let t = []; for (let r of Object.keys(e).sort()) {
    let n = e[r];
    if (r = k(r), Array.isArray(n))
        for (let o = 0, s = n.length; o < s; o++)
            t.push(`${r}=${k(n[o])}`);
    else {
        let o = r;
        (n || typeof n == "string") && (o += `=${k(n)}`), t.push(o);
    }
} return t.join("&"); }
function Ze(e, t) { return new Request(e, t); }
function Xt(e = 0) { return new Promise((t, r) => { e && setTimeout(() => { let n = new Error(`Request did not complete within ${e} ms`); n.name = "TimeoutError", r(n); }, e); }); }
var et = { supported: void 0 }, Kt = class e {
    config;
    configProvider;
    static create(t) { return typeof t?.handle == "function" ? t : new e(t); }
    constructor(t) { typeof t == "function" ? this.configProvider = t().then(r => r || {}) : (this.config = t ?? {}, this.configProvider = Promise.resolve(this.config)), et.supported === void 0 && (et.supported = typeof Request < "u" && "keepalive" in Ze("https://[::1]")); }
    destroy() { }
    handle(o) { return f(this, arguments, function* (t, { abortSignal: r, requestTimeout: n } = {}) { this.config || (this.config = yield this.configProvider); let s = n ?? this.config.requestTimeout, i = this.config.keepAlive === !0, a = this.config.credentials; if (r?.aborted) {
        let R = new Error("Request aborted");
        return R.name = "AbortError", Promise.reject(R);
    } let c = t.path, u = Yt(t.query || {}); u && (c += `?${u}`), t.fragment && (c += `#${t.fragment}`); let p = ""; if (t.username != null || t.password != null) {
        let R = t.username ?? "", b = t.password ?? "";
        p = `${R}:${b}@`;
    } let { port: d, method: l } = t, m = `${t.protocol}//${p}${t.hostname}${d ? `:${d}` : ""}${c}`, g = l === "GET" || l === "HEAD" ? void 0 : t.body, E = { body: g, headers: new Headers(t.headers), method: l, credentials: a }; this.config?.cache && (E.cache = this.config.cache), g && (E.duplex = "half"), typeof AbortController < "u" && (E.signal = r), et.supported && (E.keepalive = i), typeof this.config.requestInit == "function" && Object.assign(E, this.config.requestInit(t)); let y = () => { }, S = Ze(m, E), x = [fetch(S).then(R => { let b = R.headers, _ = {}; for (let ge of b.entries())
            _[ge[0]] = ge[1]; return R.body != null ? { response: new I({ headers: _, reason: R.statusText, statusCode: R.status, body: R.body }) } : R.blob().then(ge => ({ response: new I({ headers: _, reason: R.statusText, statusCode: R.status, body: ge }) })); }), Xt(s)]; return r && x.push(new Promise((R, b) => { let _ = () => { let M = new Error("Request aborted"); M.name = "AbortError", b(M); }; if (typeof r.addEventListener == "function") {
        let M = r;
        M.addEventListener("abort", _, { once: !0 }), y = () => M.removeEventListener("abort", _);
    }
    else
        r.onabort = _; })), Promise.race(x).finally(y); }); }
    updateHttpClientConfig(t, r) { this.config = void 0, this.configProvider = this.configProvider.then(n => (n[t] = r, n)); }
    httpHandlerConfigs() { return this.config ?? {}; }
};
var ya = e => f(null, null, function* () { return typeof Blob == "function" && e instanceof Blob || e.constructor?.name === "Blob" ? Blob.prototype.arrayBuffer !== void 0 ? new Uint8Array(yield e.arrayBuffer()) : uo(e) : fo(e); });
function uo(e) { return f(this, null, function* () { let t = yield lo(e), r = Re(t); return new Uint8Array(r); }); }
function fo(e) { return f(this, null, function* () { let t = [], r = e.getReader(), n = !1, o = 0; for (; !n;) {
    let { done: a, value: c } = yield r.read();
    c && (t.push(c), o += c.length), n = a;
} let s = new Uint8Array(o), i = 0; for (let a of t)
    s.set(a, i), i += a.length; return s; }); }
function lo(e) { return new Promise((t, r) => { let n = new FileReader; n.onloadend = () => { if (n.readyState !== 2)
    return r(new Error("Reader aborted too early")); let o = n.result ?? "", s = o.indexOf(","), i = s > -1 ? s + 1 : o.length; t(o.substring(i)); }, n.onabort = () => r(new Error("Read aborted")), n.onerror = () => r(n.error), n.readAsDataURL(e); }); }
var Qt = {}, tt = {};
for (let e = 0; e < 256; e++) {
    let t = e.toString(16).toLowerCase();
    t.length === 1 && (t = `0${t}`), Qt[e] = t, tt[t] = e;
}
function Jt(e) { if (e.length % 2 !== 0)
    throw new Error("Hex encoded strings must have an even number length"); let t = new Uint8Array(e.length / 2); for (let r = 0; r < e.length; r += 2) {
    let n = e.slice(r, r + 2).toLowerCase();
    if (n in tt)
        t[r / 2] = tt[n];
    else
        throw new Error(`Cannot decode unrecognized sequence ${n} as hexadecimal`);
} return t; }
function N(e) { let t = ""; for (let r = 0; r < e.byteLength; r++)
    t += Qt[e[r]]; return t; }
var rt = (...r) => f(null, [...r], function* (e = new Uint8Array, t) { if (e instanceof Uint8Array)
    return Q.mutate(e); if (!e)
    return Q.mutate(new Uint8Array); let n = t.streamCollector(e); return Q.mutate(yield n); });
var nt = e => { if (e != null) {
    if (typeof e == "string") {
        let t = parseFloat(e);
        if (!Number.isNaN(t))
            return String(t) !== String(e) && So.warn(yo(`Expected number but observed string: ${e}`)), t;
    }
    if (typeof e == "number")
        return e;
    throw new TypeError(`Expected number, got ${typeof e}: ${e}`);
} }, po = Math.ceil(34028234663852886e22), Zt = e => { let t = nt(e); if (t !== void 0 && !Number.isNaN(t) && t !== 1 / 0 && t !== -1 / 0 && Math.abs(t) > po)
    throw new TypeError(`Expected 32-bit float, got ${e}`); return t; }, mo = e => { if (e != null) {
    if (Number.isInteger(e) && !Number.isNaN(e))
        return e;
    throw new TypeError(`Expected integer, got ${typeof e}: ${e}`);
} };
var er = e => rr(e, 16), tr = e => rr(e, 8), rr = (e, t) => { let r = mo(e); if (r !== void 0 && ho(r, t) !== r)
    throw new TypeError(`Expected ${t}-bit integer, got ${e}`); return r; }, ho = (e, t) => { switch (t) {
    case 32: return Int32Array.of(e)[0];
    case 16: return Int16Array.of(e)[0];
    case 8: return Int8Array.of(e)[0];
} };
var nr = e => nt(typeof e == "string" ? Te(e) : e);
var or = e => Zt(typeof e == "string" ? Te(e) : e), go = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g, Te = e => { let t = e.match(go); if (t === null || t[0].length !== e.length)
    throw new TypeError("Expected real number, got implicit NaN"); return parseFloat(e); };
var ae = e => er(typeof e == "string" ? Te(e) : e), sr = e => tr(typeof e == "string" ? Te(e) : e), yo = e => String(new TypeError(e).stack || e).split(`
`).slice(0, 5).filter(t => !t.includes("stackTraceWarning")).join(`
`), So = { warn: console.warn };
var Eo = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], st = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function Ca(e) { let t = e.getUTCFullYear(), r = e.getUTCMonth(), n = e.getUTCDay(), o = e.getUTCDate(), s = e.getUTCHours(), i = e.getUTCMinutes(), a = e.getUTCSeconds(), c = o < 10 ? `0${o}` : `${o}`, u = s < 10 ? `0${s}` : `${s}`, p = i < 10 ? `0${i}` : `${i}`, d = a < 10 ? `0${a}` : `${a}`; return `${Eo[n]}, ${c} ${st[r]} ${t} ${u}:${p}:${d} GMT`; }
var _a = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
var wo = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/), Ia = e => { if (e == null)
    return; if (typeof e != "string")
    throw new TypeError("RFC-3339 date-times must be expressed as strings"); let t = wo.exec(e); if (!t)
    throw new TypeError("Invalid RFC-3339 date-time value"); let [r, n, o, s, i, a, c, u, p] = t, d = ae(ce(n)), l = j(o, "month", 1, 12), m = j(s, "day", 1, 31), g = Ae(d, l, m, { hours: i, minutes: a, seconds: c, fractionalMilliseconds: u }); return p.toUpperCase() != "Z" && g.setTime(g.getTime() - vo(p)), g; }, xo = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/), Ro = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/), To = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/), Na = e => { if (e == null)
    return; if (typeof e != "string")
    throw new TypeError("RFC-7231 date-times must be expressed as strings"); let t = xo.exec(e); if (t) {
    let [r, n, o, s, i, a, c, u] = t;
    return Ae(ae(ce(s)), ot(o), j(n, "day", 1, 31), { hours: i, minutes: a, seconds: c, fractionalMilliseconds: u });
} if (t = Ro.exec(e), t) {
    let [r, n, o, s, i, a, c, u] = t;
    return Co(Ae(Ao(s), ot(o), j(n, "day", 1, 31), { hours: i, minutes: a, seconds: c, fractionalMilliseconds: u }));
} if (t = To.exec(e), t) {
    let [r, n, o, s, i, a, c, u] = t;
    return Ae(ae(ce(u)), ot(n), j(o.trimLeft(), "day", 1, 31), { hours: s, minutes: i, seconds: a, fractionalMilliseconds: c });
} throw new TypeError("Invalid RFC-7231 date-time value"); }, Oa = e => { if (e == null)
    return; let t; if (typeof e == "number")
    t = e;
else if (typeof e == "string")
    t = nr(e);
else if (typeof e == "object" && e.tag === 1)
    t = e.value;
else
    throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation"); if (Number.isNaN(t) || t === 1 / 0 || t === -1 / 0)
    throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics"); return new Date(Math.round(t * 1e3)); }, Ae = (e, t, r, n) => { let o = t - 1; return Io(e, o, r), new Date(Date.UTC(e, o, r, j(n.hours, "hour", 0, 23), j(n.minutes, "minute", 0, 59), j(n.seconds, "seconds", 0, 60), Oo(n.fractionalMilliseconds))); }, Ao = e => { let t = new Date().getUTCFullYear(), r = Math.floor(t / 100) * 100 + ae(ce(e)); return r < t ? r + 100 : r; }, bo = 50 * 365 * 24 * 60 * 60 * 1e3, Co = e => e.getTime() - new Date().getTime() > bo ? new Date(Date.UTC(e.getUTCFullYear() - 100, e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds())) : e, ot = e => { let t = st.indexOf(e); if (t < 0)
    throw new TypeError(`Invalid month: ${e}`); return t + 1; }, _o = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Io = (e, t, r) => { let n = _o[t]; if (t === 1 && No(e) && (n = 29), r > n)
    throw new TypeError(`Invalid day for ${st[t]} in ${e}: ${r}`); }, No = e => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), j = (e, t, r, n) => { let o = sr(ce(e)); if (o < r || o > n)
    throw new TypeError(`${t} must be between ${r} and ${n}, inclusive`); return o; }, Oo = e => e == null ? 0 : or("0." + e) * 1e3, vo = e => { let t = e[0], r = 1; if (t == "+")
    r = 1;
else if (t == "-")
    r = -1;
else
    throw new TypeError(`Offset direction, ${t}, must be "+" or "-"`); let n = Number(e.substring(1, 3)), o = Number(e.substring(4, 6)); return r * (n * 60 + o) * 60 * 1e3; }, ce = e => { let t = 0; for (; t < e.length - 1 && e.charAt(t) === "0";)
    t++; return t === 0 ? e : e.slice(t); };
var it = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var C = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0")), at = () => { if (it)
    return it(); let e = new Uint8Array(16); return crypto.getRandomValues(e), e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, C[e[0]] + C[e[1]] + C[e[2]] + C[e[3]] + "-" + C[e[4]] + C[e[5]] + "-" + C[e[6]] + C[e[7]] + "-" + C[e[8]] + C[e[9]] + "-" + C[e[10]] + C[e[11]] + C[e[12]] + C[e[13]] + C[e[14]] + C[e[15]]; };
var J = function (t) { return Object.assign(new String(t), { deserializeJSON() { return JSON.parse(String(t)); }, toString() { return String(t); }, toJSON() { return String(t); } }); };
J.from = e => e && typeof e == "object" && (e instanceof J || "deserializeJSON" in e) ? e : typeof e == "string" || Object.getPrototypeOf(e) === String.prototype ? J(String(e)) : J(JSON.stringify(e));
J.fromObject = J.from;
var ir = /^-?\d*(\.\d+)?$/, ar = class e {
    string;
    type;
    constructor(t, r) { if (this.string = t, this.type = r, !ir.test(t))
        throw new Error('@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".'); }
    toString() { return this.string; }
    static [Symbol.hasInstance](t) { if (!t || typeof t != "object")
        return !1; let r = t; return e.prototype.isPrototypeOf(t) || r.type === "bigDecimal" && ir.test(r.string); }
};
var be = class {
    serdeContext;
    setSerdeContext(t) { this.serdeContext = t; }
};
var cr = class extends be {
    options;
    constructor(t) { super(), this.options = t; }
    getRequestType() { return A; }
    getResponseType() { return I; }
    setSerdeContext(t) { this.serdeContext = t, this.serializer.setSerdeContext(t), this.deserializer.setSerdeContext(t), this.getPayloadCodec() && this.getPayloadCodec().setSerdeContext(t); }
    updateServiceEndpoint(t, r) { if ("url" in r) {
        t.protocol = r.url.protocol, t.hostname = r.url.hostname, t.port = r.url.port ? Number(r.url.port) : void 0, t.path = r.url.pathname, t.fragment = r.url.hash || void 0, t.username = r.url.username || void 0, t.password = r.url.password || void 0, t.query || (t.query = {});
        for (let [n, o] of r.url.searchParams.entries())
            t.query[n] = o;
        return t;
    }
    else
        return t.protocol = r.protocol, t.hostname = r.hostname, t.port = r.port ? Number(r.port) : void 0, t.path = r.path, t.query = h({}, r.query), t; }
    setHostPrefix(t, r, n) { let o = v.of(r.input), s = V(r.traits ?? {}); if (s.endpoint) {
        let i = s.endpoint?.[0];
        if (typeof i == "string") {
            let a = [...o.structIterator()].filter(([, c]) => c.getMergedTraits().hostLabel);
            for (let [c] of a) {
                let u = n[c];
                if (typeof u != "string")
                    throw new Error(`@smithy/core/schema - ${c} in input must be a string as hostLabel.`);
                i = i.replace(`{${c}}`, u);
            }
            t.hostname = i + t.hostname;
        }
    } }
    deserializeMetadata(t) { return { httpStatusCode: t.statusCode, requestId: t.headers["x-amzn-requestid"] ?? t.headers["x-amzn-request-id"] ?? t.headers["x-amz-request-id"], extendedRequestId: t.headers["x-amz-id-2"], cfId: t.headers["x-amz-cf-id"] }; }
    serializeEventStream(o) { return f(this, arguments, function* ({ eventStream: t, requestSchema: r, initialRequest: n }) { return (yield this.loadEventStreamCapability()).serializeEventStream({ eventStream: t, requestSchema: r, initialRequest: n }); }); }
    deserializeEventStream(o) { return f(this, arguments, function* ({ response: t, responseSchema: r, initialResponseContainer: n }) { return (yield this.loadEventStreamCapability()).deserializeEventStream({ response: t, responseSchema: r, initialResponseContainer: n }); }); }
    loadEventStreamCapability() { return f(this, null, function* () { let { EventStreamSerde: t } = yield import("@nf-internal/event-streams-K2LSVX7S"); return new t({ marshaller: this.getEventStreamMarshaller(), serializer: this.serializer, deserializer: this.deserializer, serdeContext: this.serdeContext, defaultContentType: this.getDefaultContentType() }); }); }
    getDefaultContentType() { throw new Error(`@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`); }
    deserializeHttpMessage(t, r, n, o, s) { return f(this, null, function* () { return []; }); }
    getEventStreamMarshaller() { let t = this.serdeContext; if (!t.eventStreamMarshaller)
        throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext."); return t.eventStreamMarshaller; }
};
function Ga(e, t) { if (t.timestampFormat.useTrait && e.isTimestampSchema() && (e.getSchema() === 5 || e.getSchema() === 6 || e.getSchema() === 7))
    return e.getSchema(); let { httpLabel: r, httpPrefixHeaders: n, httpHeader: o, httpQuery: s } = e.getMergedTraits(); return (t.httpBindings ? typeof n == "string" || o ? 6 : s || r ? 5 : void 0 : void 0) ?? t.timestampFormat.default; }
function ur(e, t, r) { e.__smithy_context ? e.__smithy_context.features || (e.__smithy_context.features = {}) : e.__smithy_context = { features: {} }, e.__smithy_context.features[t] = r; }
var dr = class {
    sign(t, r, n) { return f(this, null, function* () { return t; }); }
};
var Do = e => function (r) { return ct(r) && r.expiration.getTime() - Date.now() < e; };
var fr = Do(3e5), ct = e => e.expiration !== void 0, lr = (e, t, r) => { if (e === void 0)
    return; let n = typeof e != "function" ? () => f(null, null, function* () { return Promise.resolve(e); }) : e, o, s, i, a = !1, c = u => f(null, null, function* () { s || (s = n(u)); try {
    o = yield s, i = !0, a = !1;
}
finally {
    s = void 0;
} return o; }); return t === void 0 ? u => f(null, null, function* () { return (!i || u?.forceRefresh) && (o = yield c(u)), o; }) : u => f(null, null, function* () { return (!i || u?.forceRefresh) && (o = yield c(u)), a ? o : r(o) ? (t(o) && (yield c(u)), o) : (a = !0, o); }); };
var Mo = void 0;
function Po(e) { return e === void 0 ? !0 : typeof e == "string" && e.length <= 50; }
function cc(e) { let t = L(e.userAgentAppId ?? Mo), { customUserAgent: r } = e; return Object.assign(e, { customUserAgent: typeof r == "string" ? [[r]] : r, userAgentAppId: () => f(null, null, function* () { let n = yield t(); if (!Po(n)) {
        let o = e.logger?.constructor?.name === "NoOpLogger" || !e.logger ? console : e.logger;
        typeof n != "string" ? o?.warn("userAgentAppId must be a string or undefined.") : n.length > 50 && o?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
    } return n; }) }); }
var fc = (e, t) => { for (let r of Object.keys(e)) {
    let n = e[r], o = function (i, a, c) { return f(this, null, function* () { let u = new n(i); if (typeof a == "function")
        this.send(u, a);
    else if (typeof c == "function") {
        if (typeof a != "object")
            throw new Error(`Expected http options but got ${typeof a}`);
        this.send(u, a || {}, c);
    }
    else
        return this.send(u, a); }); }, s = (r[0].toLowerCase() + r.slice(1)).replace(/Command$/, "");
    t.prototype[s] = o;
} };
var pr = class e extends Error {
    $fault;
    $response;
    $retryable;
    $metadata;
    constructor(t) { super(t.message), Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype), this.name = t.name, this.$fault = t.$fault, this.$metadata = t.$metadata; }
    static isInstance(t) { if (!t)
        return !1; let r = t; return e.prototype.isPrototypeOf(r) || !!r.$fault && !!r.$metadata && (r.$fault === "client" || r.$fault === "server"); }
    static [Symbol.hasInstance](t) { if (!t)
        return !1; let r = t; return this === e ? e.isInstance(t) : e.isInstance(t) ? r.name && this.name ? this.prototype.isPrototypeOf(t) || r.name === this.name : this.prototype.isPrototypeOf(t) : !1; }
}, ut = (e, t = {}) => { Object.entries(t).filter(([, n]) => n !== void 0).forEach(([n, o]) => { (e[n] == null || e[n] === "") && (e[n] = o); }); let r = e.message || e.Message || "UnknownError"; return e.message = r, delete e.Message, e; };
var mr = class {
    capacity;
    data = new Map;
    parameters = [];
    constructor({ size: t, params: r }) { this.capacity = t ?? 50, r && (this.parameters = r); }
    get(t, r) { let n = this.hash(t); if (n === !1)
        return r(); if (!this.data.has(n)) {
        if (this.data.size > this.capacity + 10) {
            let o = this.data.keys(), s = 0;
            for (;;) {
                let { value: i, done: a } = o.next();
                if (this.data.delete(i), a || ++s > 10)
                    break;
            }
        }
        this.data.set(n, r());
    } return this.data.get(n); }
    size() { return this.data.size; }
    hash(t) { let r = "", { parameters: n } = this; if (n.length === 0)
        return !1; for (let o of n) {
        let s = String(t[o] ?? "");
        if (s.includes("|;"))
            return !1;
        r += s + "|;";
    } return r; }
};
var $o = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"), ue = e => $o.test(e) || e.startsWith("[") && e.endsWith("]");
var ko = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"), Y = (e, t = !1) => { if (!t)
    return ko.test(e); let r = e.split("."); for (let n of r)
    if (!Y(n))
        return !1; return !0; };
var de = {};
var F = "endpoints";
function O(e) { return typeof e != "object" || e == null ? e : "ref" in e ? `$${O(e.ref)}` : "fn" in e ? `${e.fn}(${(e.argv || []).map(O).join(", ")})` : JSON.stringify(e, null, 2); }
var T = class extends Error {
    constructor(t) { super(t), this.name = "EndpointError"; }
};
var hr = (e, t) => e === t;
var gr = e => { let t = e.split("."), r = []; for (let n of t) {
    let o = n.indexOf("[");
    if (o !== -1) {
        if (n.indexOf("]") !== n.length - 1)
            throw new T(`Path: '${e}' does not end with ']'`);
        let s = n.slice(o + 1, -1);
        if (Number.isNaN(parseInt(s)))
            throw new T(`Invalid array index: '${s}' in path: '${e}'`);
        o !== 0 && r.push(n.slice(0, o)), r.push(s);
    }
    else
        r.push(n);
} return r; };
var Ce = (e, t) => gr(t).reduce((r, n) => { if (typeof r != "object")
    throw new T(`Index '${n}' in '${t}' not found in '${JSON.stringify(e)}'`); return Array.isArray(r) ? r[parseInt(n)] : r[n]; }, e);
var yr = e => e != null;
var Sr = e => !e;
var dt = { [re.HTTP]: 80, [re.HTTPS]: 443 }, Er = e => { let t = (() => { try {
    if (e instanceof URL)
        return e;
    if (typeof e == "object" && "hostname" in e) {
        let { hostname: l, port: m, protocol: g = "", path: E = "", query: y = {} } = e, S = new URL(`${g}//${l}${m ? `:${m}` : ""}${E}`);
        return S.search = Object.entries(y).map(([x, R]) => `${x}=${R}`).join("&"), S;
    }
    return new URL(e);
}
catch {
    return null;
} })(); if (!t)
    return console.error(`Unable to parse ${JSON.stringify(e)} as a whatwg URL.`), null; let r = t.href, { host: n, hostname: o, pathname: s, protocol: i, search: a } = t; if (a)
    return null; let c = i.slice(0, -1); if (!Object.values(re).includes(c))
    return null; let u = ue(o), p = r.includes(`${n}:${dt[c]}`) || typeof e == "string" && e.includes(`${n}:${dt[c]}`), d = `${n}${p ? `:${dt[c]}` : ""}`; return { scheme: c, authority: d, path: s, normalizedPath: s.endsWith("/") ? s : `${s}/`, isIp: u }; };
var wr = (e, t) => e === t;
var xr = (e, t, r, n) => t >= r || e.length < r ? null : n ? e.substring(e.length - r, e.length - t) : e.substring(t, r);
var Rr = e => encodeURIComponent(e).replace(/[!*'()]/g, t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`);
var Tr = { booleanEquals: hr, getAttr: Ce, isSet: yr, isValidHostLabel: Y, not: Sr, parseURL: Er, stringEquals: wr, substring: xr, uriEncode: Rr };
var _e = (e, t) => { let r = [], n = h(h({}, t.endpointParams), t.referenceRecord), o = 0; for (; o < e.length;) {
    let s = e.indexOf("{", o);
    if (s === -1) {
        r.push(e.slice(o));
        break;
    }
    r.push(e.slice(o, s));
    let i = e.indexOf("}", s);
    if (i === -1) {
        r.push(e.slice(s));
        break;
    }
    e[s + 1] === "{" && e[i + 1] === "}" && (r.push(e.slice(s + 1, i)), o = i + 2);
    let a = e.substring(s + 1, i);
    if (a.includes("#")) {
        let [c, u] = a.split("#");
        r.push(Ce(n[c], u));
    }
    else
        r.push(n[a]);
    o = i + 1;
} return r.join(""); };
var Ar = ({ ref: e }, t) => h(h({}, t.endpointParams), t.referenceRecord)[e];
var X = (e, t, r) => { if (typeof e == "string")
    return _e(e, r); if (e.fn)
    return br.callFunction(e, r); if (e.ref)
    return Ar(e, r); throw new T(`'${t}': ${String(e)} is not a string, function or reference.`); }, Ie = ({ fn: e, argv: t }, r) => { let n = t.map(s => ["boolean", "number"].includes(typeof s) ? s : br.evaluateExpression(s, "arg", r)), o = e.split("."); return o[0] in de && o[1] != null ? de[o[0]][o[1]](...n) : Tr[e](...n); }, br = { evaluateExpression: X, callFunction: Ie };
var Cr = (n, r) => { var o = n, { assign: e } = o, t = ye(o, ["assign"]); if (e && e in r.referenceRecord)
    throw new T(`'${e}' is already defined in Reference Record.`); let s = Ie(t, r); return r.logger?.debug?.(`${F} evaluateCondition: ${O(t)} = ${O(s)}`), h({ result: s === "" ? !0 : !!s }, e != null && { toAssign: { name: e, value: s } }); };
var Z = (e = [], t) => { let r = {}; for (let n of e) {
    let { result: o, toAssign: s } = Cr(n, w(h({}, t), { referenceRecord: h(h({}, t.referenceRecord), r) }));
    if (!o)
        return { result: o };
    s && (r[s.name] = s.value, t.logger?.debug?.(`${F} assign: ${s.name} := ${O(s.value)}`));
} return { result: !0, referenceRecord: r }; };
var _r = (e, t) => Object.entries(e).reduce((r, [n, o]) => w(h({}, r), { [n]: o.map(s => { let i = X(s, "Header value entry", t); if (typeof i != "string")
        throw new T(`Header '${n}' value '${i}' is not a string`); return i; }) }), {});
var ft = (e, t) => Object.entries(e).reduce((r, [n, o]) => w(h({}, r), { [n]: Nr.getEndpointProperty(o, t) }), {}), Ir = (e, t) => { if (Array.isArray(e))
    return e.map(r => Ir(r, t)); switch (typeof e) {
    case "string": return _e(e, t);
    case "object":
        if (e === null)
            throw new T(`Unexpected endpoint property: ${e}`);
        return Nr.getEndpointProperties(e, t);
    case "boolean": return e;
    default: throw new T(`Unexpected endpoint property type: ${typeof e}`);
} }, Nr = { getEndpointProperty: Ir, getEndpointProperties: ft };
var Or = (e, t) => { let r = X(e, "Endpoint URL", t); if (typeof r == "string")
    try {
        return new URL(r);
    }
    catch (n) {
        throw console.error(`Failed to construct URL with ${r}`, n), n;
    } throw new T(`Endpoint URL must be a string, got ${typeof r}`); };
var vr = (e, t) => { let { conditions: r, endpoint: n } = e, { result: o, referenceRecord: s } = Z(r, t); if (!o)
    return; let i = w(h({}, t), { referenceRecord: h(h({}, t.referenceRecord), s) }), { url: a, properties: c, headers: u } = n; return t.logger?.debug?.(`${F} Resolving endpoint from template: ${O(n)}`), w(h(h({}, u != null && { headers: _r(u, i) }), c != null && { properties: ft(c, i) }), { url: Or(a, i) }); };
var Dr = (e, t) => { let { conditions: r, error: n } = e, { result: o, referenceRecord: s } = Z(r, t); if (o)
    throw new T(X(n, "Error", w(h({}, t), { referenceRecord: h(h({}, t.referenceRecord), s) }))); };
var lt = (e, t) => { for (let r of e)
    if (r.type === "endpoint") {
        let n = vr(r, t);
        if (n)
            return n;
    }
    else if (r.type === "error")
        Dr(r, t);
    else if (r.type === "tree") {
        let n = Mr.evaluateTreeRule(r, t);
        if (n)
            return n;
    }
    else
        throw new T(`Unknown endpoint rule: ${r}`); throw new T("Rules evaluation failed"); }, Uo = (e, t) => { let { conditions: r, rules: n } = e, { result: o, referenceRecord: s } = Z(r, t); if (o)
    return Mr.evaluateRules(n, w(h({}, t), { referenceRecord: h(h({}, t.referenceRecord), s) })); }, Mr = { evaluateRules: lt, evaluateTreeRule: Uo };
var Lu = (e, t) => { let { endpointParams: r, logger: n } = t, { parameters: o, rules: s } = e; t.logger?.debug?.(`${F} Initial EndpointParams: ${O(r)}`); let i = Object.entries(o).filter(([, u]) => u.default != null).map(([u, p]) => [u, p.default]); if (i.length > 0)
    for (let [u, p] of i)
        r[u] = r[u] ?? p; let a = Object.entries(o).filter(([, u]) => u.required).map(([u]) => u); for (let u of a)
    if (r[u] == null)
        throw new T(`Missing required parameter: '${u}'`); let c = lt(s, { endpointParams: r, logger: n, referenceRecord: {} }); return t.logger?.debug?.(`${F} Resolved endpoint: ${O(c)}`), c; };
var pt = (e, t = !1) => { if (t) {
    for (let r of e.split("."))
        if (!pt(r))
            return !1;
    return !0;
} return !(!Y(e) || e.length < 3 || e.length > 63 || e !== e.toLowerCase() || ue(e)); };
var Pr = e => { let t = e.split(":"); if (t.length < 6)
    return null; let [r, n, o, s, i, ...a] = t; if (r !== "arn" || n === "" || o === "" || a.join(":") === "")
    return null; let c = a.map(u => u.split("/")).flat(); return { partition: n, service: o, region: s, accountId: i, resourceId: c }; };
var $r = { partitions: [{ id: "aws", outputs: { dnsSuffix: "amazonaws.com", dualStackDnsSuffix: "api.aws", implicitGlobalRegion: "us-east-1", name: "aws", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$", regions: { "af-south-1": { description: "Africa (Cape Town)" }, "ap-east-1": { description: "Asia Pacific (Hong Kong)" }, "ap-east-2": { description: "Asia Pacific (Taipei)" }, "ap-northeast-1": { description: "Asia Pacific (Tokyo)" }, "ap-northeast-2": { description: "Asia Pacific (Seoul)" }, "ap-northeast-3": { description: "Asia Pacific (Osaka)" }, "ap-south-1": { description: "Asia Pacific (Mumbai)" }, "ap-south-2": { description: "Asia Pacific (Hyderabad)" }, "ap-southeast-1": { description: "Asia Pacific (Singapore)" }, "ap-southeast-2": { description: "Asia Pacific (Sydney)" }, "ap-southeast-3": { description: "Asia Pacific (Jakarta)" }, "ap-southeast-4": { description: "Asia Pacific (Melbourne)" }, "ap-southeast-5": { description: "Asia Pacific (Malaysia)" }, "ap-southeast-6": { description: "Asia Pacific (New Zealand)" }, "ap-southeast-7": { description: "Asia Pacific (Thailand)" }, "aws-global": { description: "aws global region" }, "ca-central-1": { description: "Canada (Central)" }, "ca-west-1": { description: "Canada West (Calgary)" }, "eu-central-1": { description: "Europe (Frankfurt)" }, "eu-central-2": { description: "Europe (Zurich)" }, "eu-north-1": { description: "Europe (Stockholm)" }, "eu-south-1": { description: "Europe (Milan)" }, "eu-south-2": { description: "Europe (Spain)" }, "eu-west-1": { description: "Europe (Ireland)" }, "eu-west-2": { description: "Europe (London)" }, "eu-west-3": { description: "Europe (Paris)" }, "il-central-1": { description: "Israel (Tel Aviv)" }, "me-central-1": { description: "Middle East (UAE)" }, "me-south-1": { description: "Middle East (Bahrain)" }, "mx-central-1": { description: "Mexico (Central)" }, "sa-east-1": { description: "South America (Sao Paulo)" }, "us-east-1": { description: "US East (N. Virginia)" }, "us-east-2": { description: "US East (Ohio)" }, "us-west-1": { description: "US West (N. California)" }, "us-west-2": { description: "US West (Oregon)" } } }, { id: "aws-cn", outputs: { dnsSuffix: "amazonaws.com.cn", dualStackDnsSuffix: "api.amazonwebservices.com.cn", implicitGlobalRegion: "cn-northwest-1", name: "aws-cn", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^cn\\-\\w+\\-\\d+$", regions: { "aws-cn-global": { description: "aws-cn global region" }, "cn-north-1": { description: "China (Beijing)" }, "cn-northwest-1": { description: "China (Ningxia)" } } }, { id: "aws-eusc", outputs: { dnsSuffix: "amazonaws.eu", dualStackDnsSuffix: "api.amazonwebservices.eu", implicitGlobalRegion: "eusc-de-east-1", name: "aws-eusc", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$", regions: { "eusc-de-east-1": { description: "EU (Germany)" } } }, { id: "aws-iso", outputs: { dnsSuffix: "c2s.ic.gov", dualStackDnsSuffix: "api.aws.ic.gov", implicitGlobalRegion: "us-iso-east-1", name: "aws-iso", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^us\\-iso\\-\\w+\\-\\d+$", regions: { "aws-iso-global": { description: "aws-iso global region" }, "us-iso-east-1": { description: "US ISO East" }, "us-iso-west-1": { description: "US ISO WEST" } } }, { id: "aws-iso-b", outputs: { dnsSuffix: "sc2s.sgov.gov", dualStackDnsSuffix: "api.aws.scloud", implicitGlobalRegion: "us-isob-east-1", name: "aws-iso-b", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^us\\-isob\\-\\w+\\-\\d+$", regions: { "aws-iso-b-global": { description: "aws-iso-b global region" }, "us-isob-east-1": { description: "US ISOB East (Ohio)" }, "us-isob-west-1": { description: "US ISOB West" } } }, { id: "aws-iso-e", outputs: { dnsSuffix: "cloud.adc-e.uk", dualStackDnsSuffix: "api.cloud-aws.adc-e.uk", implicitGlobalRegion: "eu-isoe-west-1", name: "aws-iso-e", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$", regions: { "aws-iso-e-global": { description: "aws-iso-e global region" }, "eu-isoe-west-1": { description: "EU ISOE West" } } }, { id: "aws-iso-f", outputs: { dnsSuffix: "csp.hci.ic.gov", dualStackDnsSuffix: "api.aws.hci.ic.gov", implicitGlobalRegion: "us-isof-south-1", name: "aws-iso-f", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^us\\-isof\\-\\w+\\-\\d+$", regions: { "aws-iso-f-global": { description: "aws-iso-f global region" }, "us-isof-east-1": { description: "US ISOF EAST" }, "us-isof-south-1": { description: "US ISOF SOUTH" } } }, { id: "aws-us-gov", outputs: { dnsSuffix: "amazonaws.com", dualStackDnsSuffix: "api.aws", implicitGlobalRegion: "us-gov-west-1", name: "aws-us-gov", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^us\\-gov\\-\\w+\\-\\d+$", regions: { "aws-us-gov-global": { description: "aws-us-gov global region" }, "us-gov-east-1": { description: "AWS GovCloud (US-East)" }, "us-gov-west-1": { description: "AWS GovCloud (US-West)" } } }], version: "1.1" };
var Ho = $r, Fo = "", kr = e => { let { partitions: t } = Ho; for (let n of t) {
    let { regions: o, outputs: s } = n;
    for (let [i, a] of Object.entries(o))
        if (i === e)
            return h(h({}, s), a);
} for (let n of t) {
    let { regionRegex: o, outputs: s } = n;
    if (new RegExp(o).test(e))
        return h({}, s);
} let r = t.find(n => n.id === "aws"); if (!r)
    throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist."); return h({}, r.outputs); };
var Ur = () => Fo;
var zo = { isVirtualHostableS3Bucket: pt, parseArn: Pr, partition: kr };
de.aws = zo;
function Lr(e) { let t = {}; if (e = e.replace(/^\?/, ""), e)
    for (let r of e.split("&")) {
        let [n, o = null] = r.split("=");
        n = decodeURIComponent(n), o && (o = decodeURIComponent(o)), n in t ? Array.isArray(t[n]) ? t[n].push(o) : t[n] = [t[n], o] : t[n] = o;
    } return t; }
var Ne = e => { if (typeof e == "string")
    return Ne(new URL(e)); let { hostname: t, pathname: r, port: n, protocol: o, search: s } = e, i; return s && (i = Lr(s)), { hostname: t, port: n ? parseInt(n) : void 0, protocol: o, path: r, query: i }; };
function Hr(e, t, r) { return e.$source || (e.$source = {}), e.$source[t] = r, e; }
function D(e, t, r) { e.__aws_sdk_context ? e.__aws_sdk_context.features || (e.__aws_sdk_context.features = {}) : e.__aws_sdk_context = { features: {} }, e.__aws_sdk_context.features[t] = r; }
var mt = e => I.isInstance(e) ? e.headers?.date ?? e.headers?.Date : void 0;
var ee = e => new Date(Date.now() + e);
var Fr = (e, t) => Math.abs(ee(t).getTime() - e) >= 3e5;
var ht = (e, t) => { let r = Date.parse(e); return Fr(r, t) ? r - Date.now() : t; };
var fe = (e, t) => { if (!t)
    throw new Error(`Property \`${e}\` is not resolved for AWS SDK SigV4Auth`); return t; }, Oe = e => f(null, null, function* () { let t = fe("context", e.context), r = fe("config", e.config), n = t.endpointV2?.properties?.authSchemes?.[0], s = yield fe("signer", r.signer)(n), i = e?.signingRegion, a = e?.signingRegionSet, c = e?.signingName; return { config: r, signer: s, signingRegion: i, signingRegionSet: a, signingName: c }; }), le = class {
    sign(t, r, n) { return f(this, null, function* () { if (!A.isInstance(t))
        throw new Error("The request is not an instance of `HttpRequest` and cannot be signed"); let o = yield Oe(n), { config: s, signer: i } = o, { signingRegion: a, signingName: c } = o, u = n.context; if (u?.authSchemes?.length ?? !1) {
        let [d, l] = u.authSchemes;
        d?.name === "sigv4a" && l?.name === "sigv4" && (a = l?.signingRegion ?? a, c = l?.signingName ?? c);
    } return yield i.sign(t, { signingDate: ee(s.systemClockOffset), signingRegion: a, signingService: c }); }); }
    errorHandler(t) { return r => { let n = r.ServerTime ?? mt(r.$response); if (n) {
        let o = fe("config", t.config), s = o.systemClockOffset;
        o.systemClockOffset = ht(n, o.systemClockOffset), o.systemClockOffset !== s && r.$metadata && (r.$metadata.clockSkewCorrected = !0);
    } throw r; }; }
    successHandler(t, r) { let n = mt(t); if (n) {
        let o = fe("config", r.config);
        o.systemClockOffset = ht(n, o.systemClockOffset);
    } }
};
var gt = class extends le {
    sign(t, r, n) { return f(this, null, function* () { if (!A.isInstance(t))
        throw new Error("The request is not an instance of `HttpRequest` and cannot be signed"); let { config: o, signer: s, signingRegion: i, signingRegionSet: a, signingName: c } = yield Oe(n), p = ((yield o.sigv4aSigningRegionSet?.()) ?? a ?? [i]).join(","); return yield s.sign(t, { signingDate: ee(o.systemClockOffset), signingRegion: p, signingService: c }); }); }
};
var zr = (e, t, r) => { let n, o, s, i = !1, a = () => f(null, null, function* () { o || (o = e()); try {
    n = yield o, s = !0, i = !1;
}
finally {
    o = void 0;
} return n; }); return t === void 0 ? c => f(null, null, function* () { return (!s || c?.forceRefresh) && (n = yield a()), n; }) : c => f(null, null, function* () { return (!s || c?.forceRefresh) && (n = yield a()), i ? n : r && !r(n) ? (i = !0, n) : (t(n) && (yield a()), n); }); };
var jd = e => (e.sigv4aSigningRegionSet = L(e.sigv4aSigningRegionSet), e);
var Br = "X-Amz-Algorithm", jr = "X-Amz-Credential", yt = "X-Amz-Date", qr = "X-Amz-SignedHeaders", Gr = "X-Amz-Expires", St = "X-Amz-Signature", Et = "X-Amz-Security-Token";
var wt = "authorization", xt = yt.toLowerCase(), Bo = "date", Vr = [wt, xt, Bo], Wr = St.toLowerCase(), pe = "x-amz-content-sha256", Yr = Et.toLowerCase();
var Xr = { authorization: !0, "cache-control": !0, connection: !0, expect: !0, from: !0, "keep-alive": !0, "max-forwards": !0, pragma: !0, referer: !0, te: !0, trailer: !0, "transfer-encoding": !0, upgrade: !0, "user-agent": !0, "x-amzn-trace-id": !0 }, Kr = /^proxy-/, Qr = /^sec-/;
var ve = "AWS4-HMAC-SHA256";
var Jr = "AWS4-HMAC-SHA256-PAYLOAD", Zr = "UNSIGNED-PAYLOAD", en = 50, Rt = "aws4_request", tn = 3600 * 24 * 7;
var De = {}, Tt = [], Me = (e, t, r) => `${e}/${t}/${r}/${Rt}`, nn = (e, t, r, n, o) => f(null, null, function* () { let s = yield rn(e, t.secretAccessKey, t.accessKeyId), i = `${r}:${n}:${o}:${N(s)}:${t.sessionToken}`; if (i in De)
    return De[i]; for (Tt.push(i); Tt.length > en;)
    delete De[Tt.shift()]; let a = `AWS4${t.secretAccessKey}`; for (let c of [r, n, o, Rt])
    a = yield rn(e, a, c); return De[i] = a; });
var rn = (e, t, r) => { let n = new e(t); return n.update(H(r)), n.digest(); };
var At = ({ headers: e }, t, r) => { let n = {}; for (let o of Object.keys(e).sort()) {
    if (e[o] == null)
        continue;
    let s = o.toLowerCase();
    (s in Xr || t?.has(s) || Kr.test(s) || Qr.test(s)) && (!r || r && !r.has(s)) || (n[s] = e[o].trim().replace(/\s+/g, " "));
} return n; };
var on = e => typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || Object.prototype.toString.call(e) === "[object ArrayBuffer]";
var Pe = (n, o) => f(null, [n, o], function* ({ headers: e, body: t }, r) { for (let s of Object.keys(e))
    if (s.toLowerCase() === pe)
        return e[s]; if (t == null)
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"; if (typeof t == "string" || ArrayBuffer.isView(t) || on(t)) {
    let s = new r;
    return s.update(H(t)), N(yield s.digest());
} return Zr; });
var $e = class {
    format(t) { let r = []; for (let s of Object.keys(t)) {
        let i = U(s);
        r.push(Uint8Array.from([i.byteLength]), i, this.formatHeaderValue(t[s]));
    } let n = new Uint8Array(r.reduce((s, i) => s + i.byteLength, 0)), o = 0; for (let s of r)
        n.set(s, o), o += s.byteLength; return n; }
    formatHeaderValue(t) { switch (t.type) {
        case "boolean": return Uint8Array.from([t.value ? 0 : 1]);
        case "byte": return Uint8Array.from([2, t.value]);
        case "short":
            let r = new DataView(new ArrayBuffer(3));
            return r.setUint8(0, 3), r.setInt16(1, t.value, !1), new Uint8Array(r.buffer);
        case "integer":
            let n = new DataView(new ArrayBuffer(5));
            return n.setUint8(0, 4), n.setInt32(1, t.value, !1), new Uint8Array(n.buffer);
        case "long":
            let o = new Uint8Array(9);
            return o[0] = 5, o.set(t.value.bytes, 1), o;
        case "binary":
            let s = new DataView(new ArrayBuffer(3 + t.value.byteLength));
            s.setUint8(0, 6), s.setUint16(1, t.value.byteLength, !1);
            let i = new Uint8Array(s.buffer);
            return i.set(t.value, 3), i;
        case "string":
            let a = U(t.value), c = new DataView(new ArrayBuffer(3 + a.byteLength));
            c.setUint8(0, 7), c.setUint16(1, a.byteLength, !1);
            let u = new Uint8Array(c.buffer);
            return u.set(a, 3), u;
        case "timestamp":
            let p = new Uint8Array(9);
            return p[0] = 8, p.set(bt.fromNumber(t.value.valueOf()).bytes, 1), p;
        case "uuid":
            if (!jo.test(t.value))
                throw new Error(`Invalid UUID received: ${t.value}`);
            let d = new Uint8Array(17);
            return d[0] = 9, d.set(Jt(t.value.replace(/\-/g, "")), 1), d;
    } }
};
var jo = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/, bt = class e {
    bytes;
    constructor(t) { if (this.bytes = t, t.byteLength !== 8)
        throw new Error("Int64 buffers must be exactly 8 bytes"); }
    static fromNumber(t) { if (t > 9223372036854776e3 || t < -9223372036854776e3)
        throw new Error(`${t} is too large (or, if negative, too small) to represent as an Int64`); let r = new Uint8Array(8); for (let n = 7, o = Math.abs(Math.round(t)); n > -1 && o > 0; n--, o /= 256)
        r[n] = o; return t < 0 && sn(r), new e(r); }
    valueOf() { let t = this.bytes.slice(0), r = t[0] & 128; return r && sn(t), parseInt(N(t), 16) * (r ? -1 : 1); }
    toString() { return String(this.valueOf()); }
};
function sn(e) { for (let t = 0; t < 8; t++)
    e[t] ^= 255; for (let t = 7; t > -1 && (e[t]++, e[t] === 0); t--)
    ; }
var an = (e, t) => { e = e.toLowerCase(); for (let r of Object.keys(t))
    if (e === r.toLowerCase())
        return !0; return !1; };
var cn = (e, t = {}) => { let { headers: r, query: n = {} } = A.clone(e); for (let o of Object.keys(r)) {
    let s = o.toLowerCase();
    (s.slice(0, 6) === "x-amz-" && !t.unhoistableHeaders?.has(s) || t.hoistableHeaders?.has(s)) && (n[o] = r[o], delete r[o]);
} return w(h({}, e), { headers: r, query: n }); };
var Ct = e => { e = A.clone(e); for (let t of Object.keys(e.headers))
    Vr.indexOf(t.toLowerCase()) > -1 && delete e.headers[t]; return e; };
var un = ({ query: e = {} }) => { let t = [], r = {}; for (let n of Object.keys(e)) {
    if (n.toLowerCase() === Wr)
        continue;
    let o = k(n);
    t.push(o);
    let s = e[n];
    typeof s == "string" ? r[o] = `${o}=${k(s)}` : Array.isArray(s) && (r[o] = s.slice(0).reduce((i, a) => i.concat([`${o}=${k(a)}`]), []).sort().join("&"));
} return t.sort().map(n => r[n]).filter(n => n).join("&"); };
var dn = e => qo(e).toISOString().replace(/\.\d{3}Z$/, "Z"), qo = e => typeof e == "number" ? new Date(e * 1e3) : typeof e == "string" ? Number(e) ? new Date(Number(e) * 1e3) : new Date(e) : e;
var ke = class {
    service;
    regionProvider;
    credentialProvider;
    sha256;
    uriEscapePath;
    applyChecksum;
    constructor({ applyChecksum: t, credentials: r, region: n, service: o, sha256: s, uriEscapePath: i = !0 }) { this.service = o, this.sha256 = s, this.uriEscapePath = i, this.applyChecksum = typeof t == "boolean" ? t : !0, this.regionProvider = $(n), this.credentialProvider = $(r); }
    createCanonicalRequest(t, r, n) {
        let o = Object.keys(r).sort();
        return `${t.method}
${this.getCanonicalPath(t)}
${un(t)}
${o.map(s => `${s}:${r[s]}`).join(`
`)}

${o.join(";")}
${n}`;
    }
    createStringToSign(t, r, n, o) {
        return f(this, null, function* () {
            let s = new this.sha256;
            s.update(H(n));
            let i = yield s.digest();
            return `${o}
${t}
${r}
${N(i)}`;
        });
    }
    getCanonicalPath({ path: t }) { if (this.uriEscapePath) {
        let r = [];
        for (let s of t.split("/"))
            s?.length !== 0 && s !== "." && (s === ".." ? r.pop() : r.push(s));
        let n = `${t?.startsWith("/") ? "/" : ""}${r.join("/")}${r.length > 0 && t?.endsWith("/") ? "/" : ""}`;
        return k(n).replace(/%2F/g, "/");
    } return t; }
    validateResolvedCredentials(t) { if (typeof t != "object" || typeof t.accessKeyId != "string" || typeof t.secretAccessKey != "string")
        throw new Error("Resolved credential object is not valid"); }
    formatDate(t) { let r = dn(t).replace(/[\-:]/g, ""); return { longDate: r, shortDate: r.slice(0, 8) }; }
    getCanonicalHeaderList(t) { return Object.keys(t).sort().join(";"); }
};
var me = class extends ke {
    headerFormatter = new $e;
    constructor({ applyChecksum: t, credentials: r, region: n, service: o, sha256: s, uriEscapePath: i = !0 }) { super({ applyChecksum: t, credentials: r, region: n, service: o, sha256: s, uriEscapePath: i }); }
    presign(n) { return f(this, arguments, function* (t, r = {}) { let { signingDate: o = new Date, expiresIn: s = 3600, unsignableHeaders: i, unhoistableHeaders: a, signableHeaders: c, hoistableHeaders: u, signingRegion: p, signingService: d } = r, l = yield this.credentialProvider(); this.validateResolvedCredentials(l); let m = p ?? (yield this.regionProvider()), { longDate: g, shortDate: E } = this.formatDate(o); if (s > tn)
        return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future"); let y = Me(E, m, d ?? this.service), S = cn(Ct(t), { unhoistableHeaders: a, hoistableHeaders: u }); l.sessionToken && (S.query[Et] = l.sessionToken), S.query[Br] = ve, S.query[jr] = `${l.accessKeyId}/${y}`, S.query[yt] = g, S.query[Gr] = s.toString(10); let x = At(S, i, c); return S.query[qr] = this.getCanonicalHeaderList(x), S.query[St] = yield this.getSignature(g, y, this.getSigningKey(l, m, E, d), this.createCanonicalRequest(S, x, yield Pe(t, this.sha256))), S; }); }
    sign(t, r) { return f(this, null, function* () { return typeof t == "string" ? this.signString(t, r) : t.headers && t.payload ? this.signEvent(t, r) : t.message ? this.signMessage(t, r) : this.signRequest(t, r); }); }
    signEvent(a, c) {
        return f(this, arguments, function* ({ headers: t, payload: r }, { signingDate: n = new Date, priorSignature: o, signingRegion: s, signingService: i }) {
            let u = s ?? (yield this.regionProvider()), { shortDate: p, longDate: d } = this.formatDate(n), l = Me(p, u, i ?? this.service), m = yield Pe({ headers: {}, body: r }, this.sha256), g = new this.sha256;
            g.update(t);
            let E = N(yield g.digest()), y = [Jr, d, l, o, E, m].join(`
`);
            return this.signString(y, { signingDate: n, signingRegion: u, signingService: i });
        });
    }
    signMessage(s, i) { return f(this, arguments, function* (t, { signingDate: r = new Date, signingRegion: n, signingService: o }) { return this.signEvent({ headers: this.headerFormatter.format(t.message.headers), payload: t.message.body }, { signingDate: r, signingRegion: n, signingService: o, priorSignature: t.priorSignature }).then(c => ({ message: t.message, signature: c })); }); }
    signString(s) { return f(this, arguments, function* (t, { signingDate: r = new Date, signingRegion: n, signingService: o } = {}) { let i = yield this.credentialProvider(); this.validateResolvedCredentials(i); let a = n ?? (yield this.regionProvider()), { shortDate: c } = this.formatDate(r), u = new this.sha256(yield this.getSigningKey(i, a, c, o)); return u.update(H(t)), N(yield u.digest()); }); }
    signRequest(a) { return f(this, arguments, function* (t, { signingDate: r = new Date, signableHeaders: n, unsignableHeaders: o, signingRegion: s, signingService: i } = {}) { let c = yield this.credentialProvider(); this.validateResolvedCredentials(c); let u = s ?? (yield this.regionProvider()), p = Ct(t), { longDate: d, shortDate: l } = this.formatDate(r), m = Me(l, u, i ?? this.service); p.headers[xt] = d, c.sessionToken && (p.headers[Yr] = c.sessionToken); let g = yield Pe(p, this.sha256); !an(pe, p.headers) && this.applyChecksum && (p.headers[pe] = g); let E = At(p, o, n), y = yield this.getSignature(d, m, this.getSigningKey(c, u, l, i), this.createCanonicalRequest(p, E, g)); return p.headers[wt] = `${ve} Credential=${c.accessKeyId}/${m}, SignedHeaders=${this.getCanonicalHeaderList(E)}, Signature=${y}`, p; }); }
    getSignature(t, r, n, o) { return f(this, null, function* () { let s = yield this.createStringToSign(t, r, o, ve), i = new this.sha256(yield n); return i.update(H(s)), N(yield i.digest()); }); }
    getSigningKey(t, r, n, o) { return nn(this.sha256, t, n, r, o || this.service); }
};
var Gf = e => { let t = e.credentials, r = !!e.credentials, n; Object.defineProperty(e, "credentials", { set(u) { u && u !== t && u !== n && (r = !0), t = u; let p = Go(e, { credentials: t, credentialDefaultProvider: e.credentialDefaultProvider }), d = Vo(e, p); r && !d.attributed ? (n = l => f(null, null, function* () { return d(l).then(m => Hr(m, "CREDENTIALS_CODE", "e")); }), n.memoized = d.memoized, n.configBound = d.configBound, n.attributed = !0) : n = d; }, get() { return n; }, enumerable: !0, configurable: !0 }), e.credentials = t; let { signingEscapePath: o = !0, systemClockOffset: s = e.systemClockOffset || 0, sha256: i } = e, a; return e.signer ? a = L(e.signer) : e.regionInfoProvider ? a = () => L(e.region)().then(u => f(null, null, function* () { return [(yield e.regionInfoProvider(u, { useFipsEndpoint: yield e.useFipsEndpoint(), useDualstackEndpoint: yield e.useDualstackEndpoint() })) || {}, u]; })).then(([u, p]) => { let { signingRegion: d, signingService: l } = u; e.signingRegion = e.signingRegion || d || p, e.signingName = e.signingName || l || e.serviceId; let m = w(h({}, e), { credentials: e.credentials, region: e.signingRegion, service: e.signingName, sha256: i, uriEscapePath: o }), g = e.signerConstructor || me; return new g(m); }) : a = u => f(null, null, function* () { u = Object.assign({}, { name: "sigv4", signingName: e.signingName || e.defaultSigningName, signingRegion: yield L(e.region)(), properties: {} }, u); let p = u.signingRegion, d = u.signingName; e.signingRegion = e.signingRegion || p, e.signingName = e.signingName || d || e.serviceId; let l = w(h({}, e), { credentials: e.credentials, region: e.signingRegion, service: e.signingName, sha256: i, uriEscapePath: o }), m = e.signerConstructor || me; return new m(l); }), Object.assign(e, { systemClockOffset: s, signingEscapePath: o, signer: a }); };
function Go(e, { credentials: t, credentialDefaultProvider: r }) { let n; return t ? t?.memoized ? n = t : n = lr(t, fr, ct) : r ? n = L(r(Object.assign({}, e, { parentClientConfig: e }))) : n = () => f(null, null, function* () { throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured."); }), n.memoized = !0, n; }
function Vo(e, t) { if (t.configBound)
    return t; let r = n => f(null, null, function* () { return t(w(h({}, n), { callerClientConfig: e })); }); return r.memoized = t.memoized, r.configBound = !0, r; }
var fn = typeof TextEncoder == "function" ? new TextEncoder : null, tl = e => { if (typeof e == "string") {
    if (fn)
        return fn.encode(e).byteLength;
    let t = e.length;
    for (let r = t - 1; r >= 0; r--) {
        let n = e.charCodeAt(r);
        n > 127 && n <= 2047 ? t++ : n > 2047 && n <= 65535 && (t += 2), n >= 56320 && n <= 57343 && r--;
    }
    return t;
}
else {
    if (typeof e.byteLength == "number")
        return e.byteLength;
    if (typeof e.size == "number")
        return e.size;
} throw new Error(`Body Length computation failed for ${e}`); };
var sl = e => { switch (e) {
    case "standard": return { retryMode: "standard", connectionTimeout: 3100 };
    case "in-region": return { retryMode: "standard", connectionTimeout: 1100 };
    case "cross-region": return { retryMode: "standard", connectionTimeout: 3100 };
    case "mobile": return { retryMode: "standard", connectionTimeout: 3e4 };
    default: return {};
} };
var ln = e => { let t = []; for (let r in ne) {
    let n = ne[r];
    e[n] !== void 0 && t.push({ algorithmId: () => n, checksumConstructor: () => e[n] });
} return { addChecksumAlgorithm(r) { t.push(r); }, checksumAlgorithms() { return t; } }; }, pn = e => { let t = {}; return e.checksumAlgorithms().forEach(r => { t[r.algorithmId()] = r.checksumConstructor(); }), t; };
var mn = e => ({ setRetryStrategy(t) { e.retryStrategy = t; }, retryStrategy() { return e.retryStrategy; } }), hn = e => { let t = {}; return t.retryStrategy = e.retryStrategy(), t; };
var ll = e => Object.assign(ln(e), mn(e));
var pl = e => Object.assign(pn(e), hn(e));
var Ue = class {
    trace() { }
    debug() { }
    info() { }
    warn() { }
    error() { }
};
var gn = class {
    queryCompat;
    constructor(t = !1) { this.queryCompat = t; }
    resolveRestContentType(t, r) { let n = r.getMemberSchemas(), o = Object.values(n).find(s => !!s.getMergedTraits().httpPayload); if (o) {
        let s = o.getMergedTraits().mediaType;
        return s || (o.isStringSchema() ? "text/plain" : o.isBlobSchema() ? "application/octet-stream" : t);
    }
    else if (!r.isUnitSchema() && Object.values(n).find(i => { let { httpQuery: a, httpQueryParams: c, httpHeader: u, httpLabel: p, httpPrefixHeaders: d } = i.getMergedTraits(); return !a && !c && !u && !p && d === void 0; }))
        return t; }
    getErrorSchemaOrThrowBaseException(t, r, n, o, s, i) { return f(this, null, function* () { let a = r, c = t; t.includes("#") && ([a, c] = t.split("#")); let u = { $metadata: s, $fault: n.statusCode < 500 ? "client" : "server" }, p = ie.for(a); try {
        return { errorSchema: i?.(p, c) ?? p.getSchema(t), errorMetadata: u };
    }
    catch {
        o.message = o.message ?? o.Message ?? "UnknownError";
        let l = ie.for("smithy.ts.sdk.synthetic." + a), m = l.getBaseException();
        if (m) {
            let g = l.getErrorCtor(m) ?? Error;
            throw this.decorateServiceException(Object.assign(new g({ name: c }), u), o);
        }
        throw this.decorateServiceException(Object.assign(new Error(c), u), o);
    } }); }
    decorateServiceException(t, r = {}) { if (this.queryCompat) {
        let n = t.Message ?? r.Message, o = ut(t, r);
        n && (o.message = n), o.Error = w(h({}, o.Error), { Type: o.Error.Type, Code: o.Error.Code, Message: o.Error.message ?? o.Error.Message ?? n });
        let s = o.$metadata.requestId;
        return s && (o.RequestId = s), o;
    } return ut(t, r); }
    setQueryCompatError(t, r) { let n = r.headers?.["x-amzn-query-error"]; if (t !== void 0 && n != null) {
        let [o, s] = n.split(";"), i = Object.entries(t), a = { Code: o, Type: s };
        Object.assign(t, a);
        for (let [c, u] of i)
            a[c === "message" ? "Message" : c] = u;
        delete a.__type, t.Error = a;
    } }
    queryCompatOutput(t, r) { t.Error && (r.Error = t.Error), t.Type && (r.Type = t.Type), t.Code && (r.Code = t.Code); }
    findQueryCompatibleError(t, r) { try {
        return t.getSchema(r);
    }
    catch {
        return t.find(o => v.of(o).getMergedTraits().awsQueryError?.[0] === r);
    } }
};
var yn = class {
    serdeContext;
    setSerdeContext(t) { this.serdeContext = t; }
};
function* Rl(e, t) { if (e.isUnitSchema())
    return; let r = e.getSchema(); for (let n = 0; n < r[4].length; ++n) {
    let o = r[4][n], s = r[5][n], i = new v([s, 0], o);
    !(o in t) && !i.isIdempotencyToken() || (yield [o, i]);
} }
function* Tl(e, t, r) { if (e.isUnitSchema())
    return; let n = e.getSchema(), o = Object.keys(t).filter(s => s !== "__type").length; for (let s = 0; s < n[4].length && o !== 0; ++s) {
    let i = n[4][s], a = n[5][s], c = new v([a, 0], i), u = i;
    r && (u = c.getMergedTraits()[r] ?? i), u in t && (yield [i, c], o -= 1);
} }
var _l = (e, t) => rt(e, t).then(r => (t?.utf8Encoder ?? Se)(r));
var Wo = /\d{12}\.ddb/;
function Sn(e, t, r) { return f(this, null, function* () { if (r.request?.headers?.["smithy-protocol"] === "rpc-v2-cbor" && D(e, "PROTOCOL_RPC_V2_CBOR", "M"), typeof t.retryStrategy == "function") {
    let s = yield t.retryStrategy();
    typeof s.acquireInitialRetryToken == "function" ? s.constructor?.name?.includes("Adaptive") ? D(e, "RETRY_MODE_ADAPTIVE", "F") : D(e, "RETRY_MODE_STANDARD", "E") : D(e, "RETRY_MODE_LEGACY", "D");
} if (typeof t.accountIdEndpointMode == "function") {
    let s = e.endpointV2;
    switch (String(s?.url?.hostname).match(Wo) && D(e, "ACCOUNT_ID_ENDPOINT", "O"), yield t.accountIdEndpointMode?.()) {
        case "disabled":
            D(e, "ACCOUNT_ID_MODE_DISABLED", "Q");
            break;
        case "preferred":
            D(e, "ACCOUNT_ID_MODE_PREFERRED", "P");
            break;
        case "required":
            D(e, "ACCOUNT_ID_MODE_REQUIRED", "R");
            break;
    }
} let o = e.__smithy_context?.selectedHttpAuthScheme?.identity; if (o?.$source) {
    let s = o;
    s.accountId && D(e, "RESOLVED_ACCOUNT_ID", "T");
    for (let [i, a] of Object.entries(s.$source ?? {}))
        D(e, i, a);
} }); }
var _t = "user-agent", Le = "x-amz-user-agent";
var En = /[^!$%&'*+\-.^_`|~\w]/g, wn = /[^!$%&'*+\-.^_`|~\w#]/g;
function xn(e) { let t = ""; for (let r in e) {
    let n = e[r];
    if (t.length + n.length + 1 <= 1024) {
        t.length ? t += "," + n : t += n;
        continue;
    }
    break;
} return t; }
var Yo = e => (t, r) => n => f(null, null, function* () { let { request: o } = n; if (!A.isInstance(o))
    return t(n); let { headers: s } = o, i = r?.userAgent?.map(He) || [], a = (yield e.defaultUserAgentProvider()).map(He); yield Sn(r, e, n); let c = r; a.push(`m/${xn(Object.assign({}, r.__smithy_context?.features, c.__aws_sdk_context?.features))}`); let u = e?.customUserAgent?.map(He) || [], p = yield e.userAgentAppId(); p && a.push(He(["app", `${p}`])); let d = Ur(), l = (d ? [d] : []).concat([...a, ...i, ...u]).join(" "), m = [...a.filter(g => g.startsWith("aws-sdk-")), ...u].join(" "); return e.runtime !== "browser" ? (m && (s[Le] = s[Le] ? `${s[_t]} ${m}` : m), s[_t] = l) : s[Le] = l, t(w(h({}, n), { request: o })); }), He = e => { let t = e[0].split("/").map(i => i.replace(En, "-")).join("/"), r = e[1]?.replace(wn, "-"), n = t.indexOf("/"), o = t.substring(0, n), s = t.substring(n + 1); return o === "api" && (s = s.toLowerCase()), [o, s, r].filter(i => i && i.length > 0).reduce((i, a, c) => { switch (c) {
    case 0: return a;
    case 1: return `${i}/${a}`;
    default: return `${i}#${a}`;
} }, ""); }, Xo = { name: "getUserAgentMiddleware", step: "build", priority: "low", tags: ["SET_USER_AGENT", "USER_AGENT"], override: !0 }, Hl = e => ({ applyToStack: t => { t.add(Yo(e), Xo); } });
var An = new Set, bn = (e, t = Y) => { if (!An.has(e) && !t(e))
    if (e === "*")
        console.warn('@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.');
    else
        throw new Error(`Region not accepted: region="${e}" is not a valid hostname component.`);
else
    An.add(e); };
var Fe = e => typeof e == "string" && (e.startsWith("fips-") || e.endsWith("-fips"));
var Cn = e => Fe(e) ? ["fips-aws-global", "aws-fips"].includes(e) ? "us-east-1" : e.replace(/fips-(dkr-|prod-)?|-fips/, "") : e;
var Kl = e => { let { region: t, useFipsEndpoint: r } = e; if (!t)
    throw new Error("Region is missing"); return Object.assign(e, { region: () => f(null, null, function* () { let n = typeof t == "function" ? yield t() : t, o = Cn(n); return bn(o), o; }), useFipsEndpoint: () => f(null, null, function* () { let n = typeof t == "string" ? t : yield t(); return Fe(n) ? !0 : typeof r != "function" ? Promise.resolve(!!r) : r(); }) }); };
var _n = "content-length";
function Ko(e) { return t => r => f(null, null, function* () { let n = r.request; if (A.isInstance(n)) {
    let { body: o, headers: s } = n;
    if (o && Object.keys(s).map(i => i.toLowerCase()).indexOf(_n) === -1)
        try {
            let i = e(o);
            n.headers = w(h({}, n.headers), { [_n]: String(i) });
        }
        catch { }
} return t(w(h({}, r), { request: n })); }); }
var Qo = { step: "build", tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"], name: "contentLengthMiddleware", override: !0 }, ep = e => ({ applyToStack: t => { t.add(Ko(e.bodyLengthChecker), Qo); } });
var In = e => f(null, null, function* () { let t = e?.Bucket || ""; if (typeof e.Bucket == "string" && (e.Bucket = t.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))), rs(t)) {
    if (e.ForcePathStyle === !0)
        throw new Error("Path-style addressing cannot be used with ARN buckets");
}
else
    (!ts(t) || t.indexOf(".") !== -1 && !String(e.Endpoint).startsWith("http:") || t.toLowerCase() !== t || t.length < 3) && (e.ForcePathStyle = !0); return e.DisableMultiRegionAccessPoints && (e.disableMultiRegionAccessPoints = !0, e.DisableMRAP = !0), e; }), Jo = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/, Zo = /(\d+\.){3}\d+/, es = /\.\./;
var ts = e => Jo.test(e) && !Zo.test(e) && !es.test(e), rs = e => { let [t, r, n, , , o] = e.split(":"), s = t === "arn" && e.split(":").length >= 6, i = !!(s && r && n && o); if (s && !i)
    throw new Error(`Invalid ARN: ${e} was an invalid ARN.`); return i; };
var Nn = (e, t, r, n = !1) => { let o = () => f(null, null, function* () { let s; return n ? s = r.clientContextParams?.[e] ?? r[e] ?? r[t] : s = r[e] ?? r[t], typeof s == "function" ? s() : s; }); return e === "credentialScope" || t === "CredentialScope" ? () => f(null, null, function* () { let s = typeof r.credentials == "function" ? yield r.credentials() : r.credentials; return s?.credentialScope ?? s?.CredentialScope; }) : e === "accountId" || t === "AccountId" ? () => f(null, null, function* () { let s = typeof r.credentials == "function" ? yield r.credentials() : r.credentials; return s?.accountId ?? s?.AccountId; }) : e === "endpoint" || t === "endpoint" ? () => f(null, null, function* () { if (r.isCustomEndpoint === !1)
    return; let s = yield o(); if (s && typeof s == "object") {
    if ("url" in s)
        return s.url.href;
    if ("hostname" in s) {
        let { protocol: i, hostname: a, port: c, path: u } = s;
        return `${i}//${a}${c ? ":" + c : ""}${u}`;
    }
} return s; }) : o; };
var ze = e => f(null, null, function* () { });
var Be = e => typeof e == "object" ? "url" in e ? Ne(e.url) : e : Ne(e);
var On = (e, t, r, n) => f(null, null, function* () { if (!r.isCustomEndpoint) {
    let i;
    r.serviceConfiguredEndpoint ? i = yield r.serviceConfiguredEndpoint() : i = yield ze(r.serviceId), i && (r.endpoint = () => Promise.resolve(Be(i)), r.isCustomEndpoint = !0);
} let o = yield ns(e, t, r); if (typeof r.endpointProvider != "function")
    throw new Error("config.endpointProvider is not set."); return r.endpointProvider(o, n); }), ns = (e, t, r) => f(null, null, function* () { let n = {}, o = t?.getEndpointParameterInstructions?.() || {}; for (let [s, i] of Object.entries(o))
    switch (i.type) {
        case "staticContextParams":
            n[s] = i.value;
            break;
        case "contextParams":
            n[s] = e[i.name];
            break;
        case "clientContextParams":
        case "builtInParams":
            n[s] = yield Nn(i.name, s, r, i.type !== "builtInParams")();
            break;
        case "operationContextParams":
            n[s] = i.get(e);
            break;
        default: throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(i));
    } return Object.keys(o).length === 0 && Object.assign(n, r), String(r.serviceId).toLowerCase() === "s3" && (yield In(n)), n; });
var vn = ({ config: e, instructions: t }) => (r, n) => o => f(null, null, function* () { e.isCustomEndpoint && ur(n, "ENDPOINT_OVERRIDE", "N"); let s = yield On(o.input, { getEndpointParameterInstructions() { return t; } }, h({}, e), n); n.endpointV2 = s, n.authSchemes = s.properties?.authSchemes; let i = n.authSchemes?.[0]; if (i) {
    n.signing_region = i.signingRegion, n.signing_service = i.signingName;
    let c = P(n)?.selectedHttpAuthScheme?.httpAuthOption;
    c && (c.signingProperties = Object.assign(c.signingProperties || {}, { signing_region: i.signingRegion, signingRegion: i.signingRegion, signing_service: i.signingName, signingName: i.signingName, signingRegionSet: i.signingRegionSet }, i.properties));
} return r(h({}, o)); });
var os = { step: "serialize", tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"], name: "endpointV2Middleware", override: !0, relation: "before", toMiddleware: jt.name }, Ap = (e, t) => ({ applyToStack: r => { r.addRelativeTo(vn({ config: e, instructions: t }), os); } });
var Np = e => { let t = e.tls ?? !0, { endpoint: r, useDualstackEndpoint: n, useFipsEndpoint: o } = e, s = r != null ? () => f(null, null, function* () { return Be(yield $(r)()); }) : void 0, a = Object.assign(e, { endpoint: s, tls: t, isCustomEndpoint: !!r, useDualstackEndpoint: $(n ?? !1), useFipsEndpoint: $(o ?? !1) }), c; return a.serviceConfiguredEndpoint = () => f(null, null, function* () { return e.serviceId && !c && (c = ze(e.serviceId)), c; }), a; };
var q = (function (e) { return e.STANDARD = "standard", e.ADAPTIVE = "adaptive", e; })(q || {}), he = 3, ss = q.STANDARD;
var Dn = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException"], Mn = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"], Pn = [500, 502, 503, 504], $n = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"], kn = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"];
var is = e => e?.$retryable !== void 0;
var as = e => e.$metadata?.clockSkewCorrected, cs = e => { let t = new Set(["Failed to fetch", "NetworkError when attempting to fetch resource", "The Internet connection appears to be offline", "Load failed", "Network request failed"]); return e && e instanceof TypeError ? t.has(e.message) : !1; }, je = e => e.$metadata?.httpStatusCode === 429 || Dn.includes(e.name) || e.$retryable?.throttling == !0, qe = (e, t = 0) => is(e) || as(e) || Mn.includes(e.name) || $n.includes(e?.code || "") || kn.includes(e?.code || "") || Pn.includes(e.$metadata?.httpStatusCode || 0) || cs(e) || e.cause !== void 0 && t <= 10 && qe(e.cause, t + 1), Un = e => { if (e.$metadata?.httpStatusCode !== void 0) {
    let t = e.$metadata.httpStatusCode;
    return 500 <= t && t <= 599 && !qe(e);
} return !1; };
var Ge = class e {
    static setTimeoutFn = setTimeout;
    beta;
    minCapacity;
    minFillRate;
    scaleConstant;
    smooth;
    currentCapacity = 0;
    enabled = !1;
    lastMaxRate = 0;
    measuredTxRate = 0;
    requestCount = 0;
    fillRate;
    lastThrottleTime;
    lastTimestamp = 0;
    lastTxRateBucket;
    maxCapacity;
    timeWindow = 0;
    constructor(t) { this.beta = t?.beta ?? .7, this.minCapacity = t?.minCapacity ?? 1, this.minFillRate = t?.minFillRate ?? .5, this.scaleConstant = t?.scaleConstant ?? .4, this.smooth = t?.smooth ?? .8; let r = this.getCurrentTimeInSeconds(); this.lastThrottleTime = r, this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity; }
    getCurrentTimeInSeconds() { return Date.now() / 1e3; }
    getSendToken() { return f(this, null, function* () { return this.acquireTokenBucket(1); }); }
    acquireTokenBucket(t) { return f(this, null, function* () { if (this.enabled) {
        if (this.refillTokenBucket(), t > this.currentCapacity) {
            let r = (t - this.currentCapacity) / this.fillRate * 1e3;
            yield new Promise(n => e.setTimeoutFn(n, r));
        }
        this.currentCapacity = this.currentCapacity - t;
    } }); }
    refillTokenBucket() { let t = this.getCurrentTimeInSeconds(); if (!this.lastTimestamp) {
        this.lastTimestamp = t;
        return;
    } let r = (t - this.lastTimestamp) * this.fillRate; this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + r), this.lastTimestamp = t; }
    updateClientSendingRate(t) { let r; if (this.updateMeasuredRate(), je(t)) {
        let o = this.enabled ? Math.min(this.measuredTxRate, this.fillRate) : this.measuredTxRate;
        this.lastMaxRate = o, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), r = this.cubicThrottle(o), this.enableTokenBucket();
    }
    else
        this.calculateTimeWindow(), r = this.cubicSuccess(this.getCurrentTimeInSeconds()); let n = Math.min(r, 2 * this.measuredTxRate); this.updateTokenBucketRate(n); }
    calculateTimeWindow() { this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3)); }
    cubicThrottle(t) { return this.getPrecise(t * this.beta); }
    cubicSuccess(t) { return this.getPrecise(this.scaleConstant * Math.pow(t - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate); }
    enableTokenBucket() { this.enabled = !0; }
    updateTokenBucketRate(t) { this.refillTokenBucket(), this.fillRate = Math.max(t, this.minFillRate), this.maxCapacity = Math.max(t, this.minCapacity), this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity); }
    updateMeasuredRate() { let t = this.getCurrentTimeInSeconds(), r = Math.floor(t * 2) / 2; if (this.requestCount++, r > this.lastTxRateBucket) {
        let n = this.requestCount / (r - this.lastTxRateBucket);
        this.measuredTxRate = this.getPrecise(n * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = r;
    } }
    getPrecise(t) { return parseFloat(t.toFixed(8)); }
};
var Ln = "amz-sdk-invocation-id", Hn = "amz-sdk-request";
var zn = () => { let e = 100; return { computeNextBackoffDelay: n => Math.floor(Math.min(2e4, Math.random() * 2 ** n * e)), setDelayBase: n => { e = n; } }; };
var Nt = ({ retryDelay: e, retryCount: t, retryCost: r }) => ({ getRetryCount: () => t, getRetryDelay: () => Math.min(2e4, e), getRetryCost: () => r });
var te = class {
    maxAttempts;
    mode = q.STANDARD;
    capacity = 500;
    retryBackoffStrategy = zn();
    maxAttemptsProvider;
    constructor(t) { this.maxAttempts = t, this.maxAttemptsProvider = typeof t == "function" ? t : () => f(this, null, function* () { return t; }); }
    acquireInitialRetryToken(t) { return f(this, null, function* () { return Nt({ retryDelay: 100, retryCount: 0 }); }); }
    refreshRetryTokenForRetry(t, r) { return f(this, null, function* () { let n = yield this.getMaxAttempts(); if (this.shouldRetry(t, r, n)) {
        let o = r.errorType;
        this.retryBackoffStrategy.setDelayBase(o === "THROTTLING" ? 500 : 100);
        let s = this.retryBackoffStrategy.computeNextBackoffDelay(t.getRetryCount()), i = r.retryAfterHint ? Math.max(r.retryAfterHint.getTime() - Date.now() || 0, s) : s, a = this.getCapacityCost(o);
        return this.capacity -= a, Nt({ retryDelay: i, retryCount: t.getRetryCount() + 1, retryCost: a });
    } throw new Error("No retry token available"); }); }
    recordSuccess(t) { this.capacity = Math.max(500, this.capacity + (t.getRetryCost() ?? 1)); }
    getCapacity() { return this.capacity; }
    getMaxAttempts() { return f(this, null, function* () { try {
        return yield this.maxAttemptsProvider();
    }
    catch {
        return console.warn(`Max attempts provider could not resolve. Using default of ${he}`), he;
    } }); }
    shouldRetry(t, r, n) { return t.getRetryCount() + 1 < n && this.capacity >= this.getCapacityCost(r.errorType) && this.isRetryableError(r.errorType); }
    getCapacityCost(t) { return t === "TRANSIENT" ? 10 : 5; }
    isRetryableError(t) { return t === "THROTTLING" || t === "TRANSIENT"; }
};
var Ve = class {
    maxAttemptsProvider;
    rateLimiter;
    standardRetryStrategy;
    mode = q.ADAPTIVE;
    constructor(t, r) { this.maxAttemptsProvider = t; let { rateLimiter: n } = r ?? {}; this.rateLimiter = n ?? new Ge, this.standardRetryStrategy = new te(t); }
    acquireInitialRetryToken(t) { return f(this, null, function* () { return yield this.rateLimiter.getSendToken(), this.standardRetryStrategy.acquireInitialRetryToken(t); }); }
    refreshRetryTokenForRetry(t, r) { return f(this, null, function* () { return this.rateLimiter.updateClientSendingRate(r), this.standardRetryStrategy.refreshRetryTokenForRetry(t, r); }); }
    recordSuccess(t) { this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(t); }
};
var sm = e => { let { retryStrategy: t, retryMode: r, maxAttempts: n } = e, o = $(n ?? he); return Object.assign(e, { maxAttempts: o, retryStrategy: () => f(null, null, function* () { return t || ((yield $(r)()) === q.ADAPTIVE ? new Ve(o) : new te(o)); }) }); };
var Bn = e => e?.body instanceof ReadableStream;
var jn = e => e instanceof Error ? e : e instanceof Object ? Object.assign(new Error, e) : typeof e == "string" ? new Error(e) : new Error(`AWS SDK error wrapper for ${e}`);
var fs = e => (t, r) => n => f(null, null, function* () { let o = yield e.retryStrategy(), s = yield e.maxAttempts(); if (ls(o)) {
    o = o;
    let i = yield o.acquireInitialRetryToken(r.partition_id), a = new Error, c = 0, u = 0, { request: p } = n, d = A.isInstance(p);
    for (d && (p.headers[Ln] = at());;)
        try {
            d && (p.headers[Hn] = `attempt=${c + 1}; max=${s}`);
            let { response: l, output: m } = yield t(n);
            return o.recordSuccess(i), m.$metadata.attempts = c + 1, m.$metadata.totalRetryDelay = u, { response: l, output: m };
        }
        catch (l) {
            let m = ps(l);
            if (a = jn(l), d && Bn(p))
                throw (r.logger instanceof Ue ? console : r.logger)?.warn("An error was encountered in a non-retryable streaming request."), a;
            try {
                i = yield o.refreshRetryTokenForRetry(i, m);
            }
            catch {
                throw a.$metadata || (a.$metadata = {}), a.$metadata.attempts = c + 1, a.$metadata.totalRetryDelay = u, a;
            }
            c = i.getRetryCount();
            let g = i.getRetryDelay();
            u += g, yield new Promise(E => setTimeout(E, g));
        }
}
else
    return o = o, o?.mode && (r.userAgent = [...r.userAgent || [], ["cfg/retry-mode", o.mode]]), o.retry(t, n); }), ls = e => typeof e.acquireInitialRetryToken < "u" && typeof e.refreshRetryTokenForRetry < "u" && typeof e.recordSuccess < "u", ps = e => { let t = { error: e, errorType: ms(e) }, r = gs(e.$response); return r && (t.retryAfterHint = r), t; }, ms = e => je(e) ? "THROTTLING" : qe(e) ? "TRANSIENT" : Un(e) ? "SERVER_ERROR" : "CLIENT_ERROR", hs = { name: "retryMiddleware", tags: ["RETRY"], step: "finalizeRequest", priority: "high", override: !0 }, ym = e => ({ applyToStack: t => { t.add(fs(e), hs); } }), gs = e => { if (!I.isInstance(e))
    return; let t = Object.keys(e.headers).find(s => s.toLowerCase() === "retry-after"); if (!t)
    return; let r = e.headers[t], n = Number(r); return Number.isNaN(n) ? new Date(r) : new Date(n * 1e3); };
var wm = !1;
var Rm = !1;
var Am = ({ serviceId: e, clientVersion: t }) => r => f(null, null, function* () { let n = typeof window < "u" ? window.navigator : void 0, o = n?.userAgent ?? "", s = n?.userAgentData?.platform ?? qn.os(o) ?? "other", i = void 0, a = n?.userAgentData?.brands ?? [], c = a[a.length - 1], u = c?.brand ?? qn.browser(o) ?? "unknown", p = c?.version ?? "unknown", d = [["aws-sdk-js", t], ["ua", "2.1"], [`os/${s}`, i], ["lang/js"], ["md/browser", `${u}_${p}`]]; e && d.push([`api/${e}`, t]); let l = yield r?.userAgentAppId?.(); return l && d.push([`app/${l}`]), d; }), qn = { os(e) { if (/iPhone|iPad|iPod/.test(e))
        return "iOS"; if (/Macintosh|Mac OS X/.test(e))
        return "macOS"; if (/Windows NT/.test(e))
        return "Windows"; if (/Android/.test(e))
        return "Android"; if (/Linux/.test(e))
        return "Linux"; }, browser(e) { if (/EdgiOS|EdgA|Edg\//.test(e))
        return "Microsoft Edge"; if (/Firefox\//.test(e))
        return "Firefox"; if (/Chrome\//.test(e))
        return "Chrome"; if (/Safari\//.test(e))
        return "Safari"; } };
var _m = e => () => Promise.reject(e);
var Gn = ["in-region", "cross-region", "mobile", "standard", "legacy"];
var Dm = ({ defaultsMode: e } = {}) => zr(() => f(null, null, function* () { let t = typeof e == "function" ? yield e() : e; switch (t?.toLowerCase()) {
    case "auto": return Promise.resolve(ys() ? "mobile" : "standard");
    case "mobile":
    case "in-region":
    case "cross-region":
    case "standard":
    case "legacy": return Promise.resolve(t?.toLocaleLowerCase());
    case void 0: return Promise.resolve("legacy");
    default: throw new Error(`Invalid parameter for "defaultsMode", expect ${Gn.join(", ")}, got ${t}`);
} })), ys = () => { let e = window?.navigator; if (e?.connection) {
    let { effectiveType: t, rtt: r, downlink: n } = e?.connection;
    if (typeof t == "string" && t !== "4g" || Number(r) > 100 || Number(n) < 10)
        return !0;
} return e?.userAgentData?.mobile || typeof e?.maxTouchPoints == "number" && e?.maxTouchPoints > 1; };
var $m = e => ({ setRegion(t) { e.region = t; }, region() { return e.region; } }), km = e => ({ region: e.region() });
var Ss = {};
function Lm() { return typeof window < "u" ? window : typeof self < "u" ? self : Ss; }
export { vs as a, Ds as b, A as c, I as d, hi as e, Si as f, Ci as g, P as h, $ as i, Pi as j, oo as k, zi as l, io as m, Re as n, H as o, Wt as p, Kt as q, ya as r, Jt as s, N as t, rt as u, Ee as v, Js as w, V as x, v as y, ie as z, Ca as A, Ia as B, Na as C, Oa as D, at as E, J as F, ar as G, be as H, cr as I, Ga as J, Bt as K, dr as L, cc as M, mr as N, de as O, Lu as P, zo as Q, Ne as R, D as S, le as T, gt as U, jd as V, on as W, me as X, Gf as Y, tl as Z, Pt as _, Ke as $, fc as aa, pr as ba, sl as ca, ll as da, pl as ea, Ue as fa, gn as ga, yn as ha, Rl as ia, Tl as ja, _l as ka, Hl as la, wm as ma, Rm as na, Kl as oa, ep as pa, ns as qa, Ap as ra, Np as sa, he as ta, ss as ua, sm as va, ym as wa, Lm as xa, Am as ya, _m as za, Dm as Aa, $m as Ba, km as Ca };
