import { a as z } from "@nf-internal/chunk-6IPESDY2";
import "@nf-internal/chunk-5F3OA6QR";
import { e as k, i as v } from "@nf-internal/chunk-KQGCPFC3";
import { y as $, z as d } from "@nf-internal/chunk-STIBVO4O";
import { f as E } from "@nf-internal/chunk-FJYW2LMB";
import * as o from "@angular/core";
import { PLATFORM_ID as M } from "@angular/core";
import * as P from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin as b, CrudModule as N } from "@rollthecloudinc/crud";
import * as C from "@rollthecloudinc/auth";
import { AuthModule as F } from "@rollthecloudinc/auth";
import "@rollthecloudinc/awcog";
import { COGNITO_SETTINGS as O } from "@rollthecloudinc/awcog";
import { CognitoIdentityClient as S } from "@aws-sdk/client-cognito-identity";
import { S3Client as X } from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool as x } from "@aws-sdk/credential-provider-cognito-identity";
var I = E(z(), 1);
import { map as a, switchMap as c, tap as l, take as D } from "rxjs/operators";
import { SignatureV4 as G } from "@aws-sdk/signature-v4";
import { HttpRequest as R } from "@aws-sdk/protocol-http";
import * as A from "@rollthecloudinc/utils";
import { UtilsModule as U } from "@rollthecloudinc/utils";
import * as T from "@rollthecloudinc/dparam";
import * as j from "@angular/common/http";
var _ = (u, g, p, n, f, y) => new b({ id: "aws_s3_entity", title: "AWS S3 Entity", create: ({ object: i, identity: m, params: s, parentObject: e }) => d({ success: !1 }).pipe(n.resolveParams({ params: s }), c(({ options: t }) => m({ object: i, parentObject: e }).pipe(a(({ identity: r }) => ({ identity: r, options: t })))), c(({ options: t, identity: r }) => w({ method: "PUT", body: JSON.stringify(i), headers: { "Content-Type": "application/json", host: `${t.bucket}.s3.amazonaws.com` }, hostname: `${t.bucket}.s3.amazonaws.com`, path: `${t.prefix}${r}.json`, protocol: "https:", service: "s3", cognitoSettings: p, authFacade: g }).pipe(a(h => ({ signedHttpRequest: h, options: t })))), l(({ signedHttpRequest: t }) => delete t.headers.host), a(({ signedHttpRequest: t, options: r }) => ({ signedHttpRequest: t, options: r, url: `https://${r.bucket}.s3.amazonaws.com${t.path}` })), c(({ signedHttpRequest: t, url: r }) => f.put(r, JSON.stringify(i), { headers: t.headers, withCredentials: !1 })), a(() => ({ success: !0 }))), read: ({}) => d({ success: !1 }), update: ({ object: i, identity: m, params: s }) => d({ success: !1 }).pipe(n.resolveParams({ params: s }), c(({ options: e }) => m({ object: i }).pipe(a(({ identity: t }) => ({ identity: t, options: e })))), c(({ options: e, identity: t }) => w({ method: "PUT", body: JSON.stringify(i), headers: { "Content-Type": "application/json", host: `${e.bucket}.s3.amazonaws.com` }, hostname: `${e.bucket}.s3.amazonaws.com`, path: `${e.prefix}${t}.json`, protocol: "https:", service: "s3", cognitoSettings: p, authFacade: g }).pipe(a(r => ({ signedHttpRequest: r, options: e })))), l(({ signedHttpRequest: e }) => delete e.headers.host), a(({ signedHttpRequest: e, options: t }) => ({ signedHttpRequest: e, options: t, url: `https://${t.bucket}.s3.amazonaws.com${e.path}` })), c(({ signedHttpRequest: e, url: t }) => f.put(t, JSON.stringify(i), { headers: e.headers, withCredentials: !1 })), a(() => ({ success: !0 }))), delete: ({}) => d({ success: !1 }), query: ({ rule: i, params: m }) => d({ entities: [], success: !1 }).pipe(n.resolveParams({ params: m }), a(({ options: s }) => ({ options: s, identityCondition: i.conditions.all.map(e => e.any.find(t => t.fact === "identity")).find(e => !!e) })), c(({ identityCondition: s, options: e }) => v(() => s !== void 0 && s && s.fact === "identity" && e && e.bucket, w({ method: "GET", body: void 0, headers: { "Content-Type": "application/json", host: `${e ? e.bucket : ""}.s3.amazonaws.com` }, hostname: `${e ? e.bucket : ""}.s3.amazonaws.com`, path: `${e && e.prefix ? e.prefix : ""}${s ? s.value : ""}.json`, protocol: "https:", service: "s3", cognitoSettings: p, authFacade: g }).pipe(l(() => console.log(".marker({ event: AFTER , entity: s3 , op: query , meta: { action: createSignedRequest } })")), l(t => delete t.headers.host), a(t => ({ signedHttpRequest: t, options: e, url: `https://${e.bucket}.s3.amazonaws.com${t.path}` })), l(() => console.log(".marker({ event: BEFORE , entity: crud , op: query , meta: { http: get } })")), c(({ signedHttpRequest: t, url: r }) => f.get(r, { headers: t.headers, withCredentials: !1 })), l(() => console.log(".marker({ event: AFTER , entity: s3 , op: query , meta: { http: get } })")), a(t => ({ entities: t ? [t] : [], success: !!t }))), d({ entities: [], success: !1 })))) });
var w = ({ body: u, headers: g, hostname: p, method: n = "GET", path: f = "/", port: y = 443, protocol: i = "https:", query: m, service: s, cognitoSettings: e, authFacade: t }) => d(new R({ body: u, headers: g, hostname: p, method: n, path: f, port: y, protocol: i, query: m })).pipe(l(() => console.log(".marker({ event: BEGIN , context: s3, entity: sig , op: signv4 , meta: {  } })")), c(r => $(new G({ credentials: x({ client: new S({ region: e.region }), identityPoolId: e.identityPoolId, logins: { [`cognito-idp.${e.region}.amazonaws.com/${e.userPoolId}`]: () => k(t.getUser$.pipe(a(h => h ? h.id_token : void 0))) } }), region: e.region, service: s, sha256: I.Sha256 }).sign(r).then(h => (console.log(".marker({ event: RESOLVED, entity: s3 , op: signv4 , meta: {  } })"), h))).pipe(l(() => console.log(".marker({ /s3/sign/after/sig })")), D(1))), a(r => r), l(() => console.log(".marker({ event: END , context: s3, entity: sig , op: signv4 , meta: {  } })"))), ie = (() => { class u {
    constructor(p, n, f, y, i, m, s) { f.register(_(n, y, p, i, m, s)); }
    static { this.\u0275fac = function (n) { return new (n || u)(o.\u0275\u0275inject(O), o.\u0275\u0275inject(M), o.\u0275\u0275inject(P.CrudAdaptorPluginManager), o.\u0275\u0275inject(C.AuthFacade), o.\u0275\u0275inject(T.ParamEvaluatorService), o.\u0275\u0275inject(j.HttpClient), o.\u0275\u0275inject(A.AsyncApiCallHelperService)); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: u }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({ imports: [U, F, N] }); }
} return u; })();
export { ie as Aws3Module };
