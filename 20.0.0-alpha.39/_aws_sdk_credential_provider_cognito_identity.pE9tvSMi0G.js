import { a as x } from "@nf-internal/chunk-SC2LNWXG";
import { h as f } from "@nf-internal/chunk-FJYW2LMB";
var c = class t extends x {
    name = "CredentialsProviderError";
    constructor(e, r = !0) { super(e, r), Object.setPrototypeOf(this, t.prototype); }
};
function p(t) { return Promise.all(Object.keys(t).reduce((e, r) => { let o = t[r]; return typeof o == "string" ? e.push([r, o]) : e.push(o().then(n => [r, n])), e; }, [])).then(e => e.reduce((r, [o, n]) => (r[o] = n, r), {})); }
function S(t) { return e => f(null, null, function* () { t.logger?.debug("@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity"); let { GetCredentialsForIdentityCommand: r, CognitoIdentityClient: o } = yield import("@nf-internal/loadCognitoIdentity-2BPZSC6R"), n = l => t.clientConfig?.[l] ?? t.parentClientConfig?.[l] ?? e?.callerClientConfig?.[l], { Credentials: { AccessKeyId: i = j(t.logger), Expiration: s, SecretKey: g = D(t.logger), SessionToken: m } = k(t.logger) } = yield (t.client ?? new o(Object.assign({}, t.clientConfig ?? {}, { region: n("region"), profile: n("profile"), userAgentAppId: n("userAgentAppId") }))).send(new r({ CustomRoleArn: t.customRoleArn, IdentityId: t.identityId, Logins: t.logins ? yield p(t.logins) : void 0 })); return { identityId: t.identityId, accessKeyId: i, secretAccessKey: g, sessionToken: m, expiration: s }; }); }
function j(t) { throw new c("Response from Amazon Cognito contained no access key ID", { logger: t }); }
function k(t) { throw new c("Response from Amazon Cognito contained no credentials", { logger: t }); }
function D(t) { throw new c("Response from Amazon Cognito contained no secret key", { logger: t }); }
var A = "IdentityIds", I = class {
    dbName;
    constructor(e = "aws:cognito-identity-ids") { this.dbName = e; }
    getItem(e) { return this.withObjectStore("readonly", r => { let o = r.get(e); return new Promise(n => { o.onerror = () => n(null), o.onsuccess = () => n(o.result ? o.result.value : null); }); }).catch(() => null); }
    removeItem(e) { return this.withObjectStore("readwrite", r => { let o = r.delete(e); return new Promise((n, i) => { o.onerror = () => i(o.error), o.onsuccess = () => n(); }); }); }
    setItem(e, r) { return this.withObjectStore("readwrite", o => { let n = o.put({ id: e, value: r }); return new Promise((i, s) => { n.onerror = () => s(n.error), n.onsuccess = () => i(); }); }); }
    getDb() { let e = self.indexedDB.open(this.dbName, 1); return new Promise((r, o) => { e.onsuccess = () => { r(e.result); }, e.onerror = () => { o(e.error); }, e.onblocked = () => { o(new Error("Unable to access DB")); }, e.onupgradeneeded = () => { let n = e.result; n.onerror = () => { o(new Error("Failed to create object store")); }, n.createObjectStore(A, { keyPath: "id" }); }; }); }
    withObjectStore(e, r) { return this.getDb().then(o => { let n = o.transaction(A, e); return n.oncomplete = () => o.close(), new Promise((i, s) => { n.onerror = () => s(n.error), i(r(n.objectStore(A))); }).catch(i => { throw o.close(), i; }); }); }
};
var h = class {
    store;
    constructor(e = {}) { this.store = e; }
    getItem(e) { return e in this.store ? this.store[e] : null; }
    removeItem(e) { delete this.store[e]; }
    setItem(e, r) { this.store[e] = r; }
};
var E = new h;
function v() { return typeof self == "object" && self.indexedDB ? new I : typeof window == "object" && window.localStorage ? window.localStorage : E; }
function Q({ accountId: t, cache: e = v(), client: r, clientConfig: o, customRoleArn: n, identityPoolId: i, logins: s, userIdentifier: g = !s || Object.keys(s).length === 0 ? "ANONYMOUS" : void 0, logger: m, parentClientConfig: l }) { m?.debug("@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity"); let d = g ? `aws:cognito-identity-credentials:${i}:${g}` : void 0, y = a => f(null, null, function* () { let { GetIdCommand: C, CognitoIdentityClient: P } = yield import("@nf-internal/loadCognitoIdentity-2BPZSC6R"), b = u => o?.[u] ?? l?.[u] ?? a?.callerClientConfig?.[u], O = r ?? new P(Object.assign({}, o ?? {}, { region: b("region"), profile: b("profile"), userAgentAppId: b("userAgentAppId") })), w = d && (yield e.getItem(d)); if (!w) {
    let { IdentityId: u = R(m) } = yield O.send(new C({ AccountId: t, IdentityPoolId: i, Logins: s ? yield p(s) : void 0 }));
    w = u, d && Promise.resolve(e.setItem(d, w)).catch(() => { });
} return y = S({ client: O, customRoleArn: n, logins: s, identityId: w }), y(a); }); return a => y(a).catch(C => f(null, null, function* () { throw d && Promise.resolve(e.removeItem(d)).catch(() => { }), C; })); }
function R(t) { throw new c("Response from Amazon Cognito contained no identity ID", { logger: t }); }
export { S as fromCognitoIdentity, Q as fromCognitoIdentityPool };
