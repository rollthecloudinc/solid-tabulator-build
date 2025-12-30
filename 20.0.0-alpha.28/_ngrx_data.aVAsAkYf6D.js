import { j as Re } from "@nf-internal/chunk-VZR6KEPQ";
import { A as U, Q as se, p as Q, z as T } from "@nf-internal/chunk-STIBVO4O";
import { a as y, b as E } from "@nf-internal/chunk-FJYW2LMB";
import * as h from "@angular/core";
import { InjectionToken as R, isDevMode as lt, Optional as yt, provideEnvironmentInitializer as we, inject as O, makeEnvironmentProviders as pt } from "@angular/core";
import { filter as D, map as m, delay as N, timeout as be, catchError as X, shareReplay as _, take as $e, mergeMap as Z, withLatestFrom as x, concatMap as Et } from "rxjs/operators";
import * as ve from "@angular/common/http";
import { HttpParams as Ue, HttpHeaders as gt } from "@angular/common/http";
import { createEntityAdapter as ft } from "@ngrx/entity";
import * as Y from "@ngrx/store";
import { ScannedActionsSubject as Ye, createSelector as L, createFeatureSelector as St, compose as At, ReducerManager as vt, combineReducers as mt } from "@ngrx/store";
import * as ee from "@ngrx/effects";
import { createEffect as B, ofType as Ne, EffectSources as Dt } from "@ngrx/effects";
var F = (() => { class s {
    create(e, r, i, a) { let c = typeof e == "string" ? E(y({}, a || {}), { entityName: e, entityOp: r, data: i }) : e; return this.createCore(c); }
    createCore(e) { let { entityName: r, entityOp: i, tag: a } = e; if (!r)
        throw new Error("Missing entity name for new action"); if (i == null)
        throw new Error("Missing EntityOp for new action"); return { type: this.formatActionType(i, a || r), payload: e }; }
    createFromAction(e, r) { return this.create(y(y({}, e.payload), r)); }
    formatActionType(e, r) { return `[${r}] ${e}`; }
    static { this.\u0275fac = function (r) { return new (r || s); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), K = class {
    constructor(t, e) { this.entityName = t, this.selectId = e; }
    mustBeEntity(t) { let e = this.extractData(t); if (!e)
        return this.throwError(t, "should have a single entity."); let r = this.selectId(e); return this.isNotKeyType(r) && this.throwError(t, "has a missing or invalid entity key (id)"), e; }
    mustBeEntities(t) { let e = this.extractData(t); return Array.isArray(e) ? (e.forEach((r, i) => { let a = this.selectId(r); if (this.isNotKeyType(a)) {
        let c = `, item ${i + 1}, does not have a valid entity key (id)`;
        this.throwError(t, c);
    } }), e) : this.throwError(t, "should be an array of entities"); }
    mustBeKey(t) { let e = this.extractData(t); if (e === void 0)
        throw new Error("should be a single entity key"); if (this.isNotKeyType(e))
        throw new Error("is not a valid key (id)"); return e; }
    mustBeKeys(t) { let e = this.extractData(t); return Array.isArray(e) ? (e.forEach((r, i) => { if (this.isNotKeyType(r)) {
        let a = `${this.entityName} ', item ${i + 1}, is not a valid entity key (id)`;
        this.throwError(t, a);
    } }), e) : this.throwError(t, "should be an array of entity keys (id)"); }
    mustBeUpdate(t) { let e = this.extractData(t); if (!e)
        return this.throwError(t, "should be a single entity update"); let { id: r, changes: i } = e, a = this.selectId(i); return (this.isNotKeyType(r) || this.isNotKeyType(a)) && this.throwError(t, "has a missing or invalid entity key (id)"), e; }
    mustBeUpdates(t) { let e = this.extractData(t); return Array.isArray(e) ? (e.forEach((r, i) => { let { id: a, changes: c } = r, n = this.selectId(c); (this.isNotKeyType(a) || this.isNotKeyType(n)) && this.throwError(t, `, item ${i + 1}, has a missing or invalid entity key (id)`); }), e) : this.throwError(t, "should be an array of entity updates"); }
    mustBeUpdateResponse(t) { let e = this.extractData(t); if (!e)
        return this.throwError(t, "should be a single entity update"); let { id: r, changes: i } = e, a = this.selectId(i); return (this.isNotKeyType(r) || this.isNotKeyType(a)) && this.throwError(t, "has a missing or invalid entity key (id)"), e; }
    mustBeUpdateResponses(t) { let e = this.extractData(t); return Array.isArray(e) ? (e.forEach((r, i) => { let { id: a, changes: c } = r, n = this.selectId(c); (this.isNotKeyType(a) || this.isNotKeyType(n)) && this.throwError(t, `, item ${i + 1}, has a missing or invalid entity key (id)`); }), e) : this.throwError(t, "should be an array of entity updates"); }
    extractData(t) { return t.payload && t.payload.data; }
    isNotKeyType(t) { return typeof t != "string" && typeof t != "number"; }
    throwError(t, e) { throw new Error(`${this.entityName} EntityAction guard for "${t.type}": payload ${e}`); }
};
function V(s) { return s?.id; }
function Fe(s) { if (s == null)
    return []; if (Array.isArray(s[0])) {
    let [t, ...e] = s;
    s = [...t, ...e];
} return s; }
function Ve(s) { return s = s || V, function (e) { let r = s(e); if (r == null)
    throw new Error("Primary key may not be null/undefined."); return e && { id: r, changes: e }; }; }
function Ie(...s) { let t = Fe(s); switch (t.length) {
    case 0: return D(r => r.payload && r.payload.entityOp != null);
    case 1:
        let e = t[0];
        return D(r => r.payload && e === r.payload.entityOp);
    default: return D(r => { let i = r.payload && r.payload.entityOp; return i && t.some(a => a === i); });
} }
function xe(...s) { let t = Fe(s); switch (t.length) {
    case 0: return D(r => r.payload && r.payload.entityName != null);
    case 1:
        let e = t[0];
        return D(r => r.payload && e === r.payload.entityName);
    default: return D(r => { let i = r.payload && r.payload.entityName; return !!i && t.some(a => a === i); });
} }
var C = (function (s) { return s.Add = "Add", s.Delete = "Delete", s.Update = "Update", s.Upsert = "Upsert", s; })(C || {}), ie = class {
    add(t, e) { return e = Array.isArray(e) ? e : e ? [e] : [], { entityName: t, op: C.Add, entities: e }; }
    delete(t, e) { let r = Array.isArray(e) ? e : e ? [e] : []; return { entityName: t, op: C.Delete, entities: r }; }
    update(t, e) { return e = Array.isArray(e) ? e : e ? [e] : [], { entityName: t, op: C.Update, entities: e }; }
    upsert(t, e) { return e = Array.isArray(e) ? e : e ? [e] : [], { entityName: t, op: C.Upsert, entities: e }; }
}, Xt = new ie;
function je(s) { s = s && s.changes ? s : { changes: [] }; let t = s.changes.filter(e => e != null && e.entities && e.entities.length > 0); return E(y({}, s), { changes: t }); }
var A = (function (s) { return s[s.IgnoreChanges = 0] = "IgnoreChanges", s[s.PreserveChanges = 1] = "PreserveChanges", s[s.OverwriteChanges = 2] = "OverwriteChanges", s; })(A || {}), f = (function (s) { return s.CLEAR_COLLECTIONS = "@ngrx/data/entity-cache/clear-collections", s.LOAD_COLLECTIONS = "@ngrx/data/entity-cache/load-collections", s.MERGE_QUERY_SET = "@ngrx/data/entity-cache/merge-query-set", s.SET_ENTITY_CACHE = "@ngrx/data/entity-cache/set-cache", s.SAVE_ENTITIES = "@ngrx/data/entity-cache/save-entities", s.SAVE_ENTITIES_CANCEL = "@ngrx/data/entity-cache/save-entities-cancel", s.SAVE_ENTITIES_CANCELED = "@ngrx/data/entity-cache/save-entities-canceled", s.SAVE_ENTITIES_ERROR = "@ngrx/data/entity-cache/save-entities-error", s.SAVE_ENTITIES_SUCCESS = "@ngrx/data/entity-cache/save-entities-success", s; })(f || {}), ae = class {
    constructor(t, e) { this.type = f.CLEAR_COLLECTIONS, this.payload = { collections: t, tag: e }; }
}, ne = class {
    constructor(t, e) { this.type = f.LOAD_COLLECTIONS, this.payload = { collections: t, tag: e }; }
}, ce = class {
    constructor(t, e, r) { this.type = f.MERGE_QUERY_SET, this.payload = { querySet: t, mergeStrategy: e === null ? A.PreserveChanges : e, tag: r }; }
}, oe = class {
    constructor(t, e) { this.cache = t, this.type = f.SET_ENTITY_CACHE, this.payload = { cache: t, tag: e }; }
}, de = class {
    constructor(t, e, r) { this.type = f.SAVE_ENTITIES, r = r || {}, t && (t.tag = t.tag || r.tag), this.payload = E(y({ changeSet: t, url: e }, r), { tag: t.tag }); }
}, he = class {
    constructor(t, e, r, i) { this.type = f.SAVE_ENTITIES_CANCEL, this.payload = { correlationId: t, reason: e, entityNames: r, tag: i }; }
}, ue = class {
    constructor(t, e, r) { this.type = f.SAVE_ENTITIES_CANCELED, this.payload = { correlationId: t, reason: e, tag: r }; }
}, le = class {
    constructor(t, e) { this.type = f.SAVE_ENTITIES_ERROR; let r = e.payload.correlationId; this.payload = { error: t, originalAction: e, correlationId: r }; }
}, $ = class {
    constructor(t, e, r) { this.type = f.SAVE_ENTITIES_SUCCESS, r = r || {}, t && (t.tag = t.tag || r.tag), this.payload = E(y({ changeSet: t, url: e }, r), { tag: t.tag }); }
}, o = (function (s) { return s.CANCEL_PERSIST = "@ngrx/data/cancel-persist", s.CANCELED_PERSIST = "@ngrx/data/canceled-persist", s.QUERY_ALL = "@ngrx/data/query-all", s.QUERY_ALL_SUCCESS = "@ngrx/data/query-all/success", s.QUERY_ALL_ERROR = "@ngrx/data/query-all/error", s.QUERY_LOAD = "@ngrx/data/query-load", s.QUERY_LOAD_SUCCESS = "@ngrx/data/query-load/success", s.QUERY_LOAD_ERROR = "@ngrx/data/query-load/error", s.QUERY_MANY = "@ngrx/data/query-many", s.QUERY_MANY_SUCCESS = "@ngrx/data/query-many/success", s.QUERY_MANY_ERROR = "@ngrx/data/query-many/error", s.QUERY_BY_KEY = "@ngrx/data/query-by-key", s.QUERY_BY_KEY_SUCCESS = "@ngrx/data/query-by-key/success", s.QUERY_BY_KEY_ERROR = "@ngrx/data/query-by-key/error", s.SAVE_ADD_MANY = "@ngrx/data/save/add-many", s.SAVE_ADD_MANY_ERROR = "@ngrx/data/save/add-many/error", s.SAVE_ADD_MANY_SUCCESS = "@ngrx/data/save/add-many/success", s.SAVE_ADD_ONE = "@ngrx/data/save/add-one", s.SAVE_ADD_ONE_ERROR = "@ngrx/data/save/add-one/error", s.SAVE_ADD_ONE_SUCCESS = "@ngrx/data/save/add-one/success", s.SAVE_DELETE_MANY = "@ngrx/data/save/delete-many", s.SAVE_DELETE_MANY_SUCCESS = "@ngrx/data/save/delete-many/success", s.SAVE_DELETE_MANY_ERROR = "@ngrx/data/save/delete-many/error", s.SAVE_DELETE_ONE = "@ngrx/data/save/delete-one", s.SAVE_DELETE_ONE_SUCCESS = "@ngrx/data/save/delete-one/success", s.SAVE_DELETE_ONE_ERROR = "@ngrx/data/save/delete-one/error", s.SAVE_UPDATE_MANY = "@ngrx/data/save/update-many", s.SAVE_UPDATE_MANY_SUCCESS = "@ngrx/data/save/update-many/success", s.SAVE_UPDATE_MANY_ERROR = "@ngrx/data/save/update-many/error", s.SAVE_UPDATE_ONE = "@ngrx/data/save/update-one", s.SAVE_UPDATE_ONE_SUCCESS = "@ngrx/data/save/update-one/success", s.SAVE_UPDATE_ONE_ERROR = "@ngrx/data/save/update-one/error", s.SAVE_UPSERT_MANY = "@ngrx/data/save/upsert-many", s.SAVE_UPSERT_MANY_SUCCESS = "@ngrx/data/save/upsert-many/success", s.SAVE_UPSERT_MANY_ERROR = "@ngrx/data/save/upsert-many/error", s.SAVE_UPSERT_ONE = "@ngrx/data/save/upsert-one", s.SAVE_UPSERT_ONE_SUCCESS = "@ngrx/data/save/upsert-one/success", s.SAVE_UPSERT_ONE_ERROR = "@ngrx/data/save/upsert-one/error", s.ADD_ALL = "@ngrx/data/add-all", s.ADD_MANY = "@ngrx/data/add-many", s.ADD_ONE = "@ngrx/data/add-one", s.REMOVE_ALL = "@ngrx/data/remove-all", s.REMOVE_MANY = "@ngrx/data/remove-many", s.REMOVE_ONE = "@ngrx/data/remove-one", s.UPDATE_MANY = "@ngrx/data/update-many", s.UPDATE_ONE = "@ngrx/data/update-one", s.UPSERT_MANY = "@ngrx/data/upsert-many", s.UPSERT_ONE = "@ngrx/data/upsert-one", s.COMMIT_ALL = "@ngrx/data/commit-all", s.COMMIT_MANY = "@ngrx/data/commit-many", s.COMMIT_ONE = "@ngrx/data/commit-one", s.UNDO_ALL = "@ngrx/data/undo-all", s.UNDO_MANY = "@ngrx/data/undo-many", s.UNDO_ONE = "@ngrx/data/undo-one", s.SET_CHANGE_STATE = "@ngrx/data/set-change-state", s.SET_COLLECTION = "@ngrx/data/set-collection", s.SET_FILTER = "@ngrx/data/set-filter", s.SET_LOADED = "@ngrx/data/set-loaded", s.SET_LOADING = "@ngrx/data/set-loading", s; })(o || {}), ye = "/success", me = "/error";
function Ct(s) { return s + me; }
function Pe(s) { return s + ye; }
var I = class extends Error {
    constructor(t, e) { super(typeof t == "string" ? t : _t(t) ?? void 0), this.error = t, this.requestData = e, this.name = this.constructor.name; }
};
function _t(s) { let { error: t, body: e, message: r } = s, i = null; return t ? i = typeof t == "string" ? t : t.message : r ? i = r : e && (i = typeof e == "string" ? e : e.error), typeof i == "string" ? i : i ? JSON.stringify(i) : null; }
var q = class {
}, k = class {
}, Qe = new R("@ngrx/data Plural Names"), H = class {
}, Le = class {
}, G = class {
}, Mt = (() => { class s {
    constructor(e) { this.pluralizer = e, this.knownHttpResourceUrls = {}; }
    getResourceUrls(e, r, i = !1) { let a = this.knownHttpResourceUrls[e]; if (!a) {
        let c = i ? r : Tt(r);
        a = { entityResourceUrl: `${c}/${e}/`.toLowerCase(), collectionResourceUrl: `${c}/${this.pluralizer.pluralize(e)}/`.toLowerCase() }, this.registerHttpResourceUrls({ [e]: a });
    } return a; }
    entityResource(e, r, i) { return this.getResourceUrls(e, r, i).entityResourceUrl; }
    collectionResource(e, r) { return this.getResourceUrls(e, r).collectionResourceUrl; }
    registerHttpResourceUrls(e) { this.knownHttpResourceUrls = y(y({}, this.knownHttpResourceUrls), e || {}); }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(H)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })();
function Tt(s) { return s.replace(/^[/\s]+|[/\s]+$/g, ""); }
var pe = class {
    get name() { return this._name; }
    constructor(t, e, r, i) { this.http = e, this.httpUrlGenerator = r, this.getDelay = 0, this.saveDelay = 0, this.timeout = 0, this.trailingSlashEndpoints = !1, this._name = `${t} DefaultDataService`, this.entityName = t; let { root: a = "api", delete404OK: c = !0, getDelay: n = 0, saveDelay: u = 0, timeout: d = 0, trailingSlashEndpoints: l = !1 } = i || {}; this.delete404OK = c, this.entityUrl = r.entityResource(t, a, l), this.entitiesUrl = r.collectionResource(t, a), this.getDelay = n, this.saveDelay = u, this.timeout = d; }
    add(t, e) { let r = t || new Error(`No "${this.entityName}" entity to add`); return this.execute("POST", this.entityUrl, r, null, e); }
    delete(t, e) { let r; return t == null && (r = new Error(`No "${this.entityName}" key to delete`)), this.execute("DELETE", this.entityUrl + t, r, null, e).pipe(m(i => t)); }
    getAll(t) { return this.execute("GET", this.entitiesUrl, null, null, t); }
    getById(t, e) { let r; return t == null && (r = new Error(`No "${this.entityName}" key to get`)), this.execute("GET", this.entityUrl + t, r, null, e); }
    getWithQuery(t, e) { let r = typeof t == "string" ? { fromString: t } : { fromObject: t }, i = new Ue(r); return this.execute("GET", this.entitiesUrl, void 0, { params: i }, e); }
    update(t, e) { let r = t && t.id, i = r == null ? new Error(`No "${this.entityName}" update data or id`) : t.changes; return this.execute("PUT", this.entityUrl + r, i, null, e); }
    upsert(t, e) { let r = t || new Error(`No "${this.entityName}" entity to upsert`); return this.execute("POST", this.entityUrl, r, null, e); }
    execute(t, e, r, i, a) { let c; a && (c = { headers: a?.httpHeaders ? new gt(a?.httpHeaders) : void 0, params: a?.httpParams ? new Ue(a?.httpParams) : void 0 }); let n; (i || c) && (lt() && i && c && console.warn("@ngrx/data: options.httpParams will be merged with queryParams when both are are provided to getWithQuery(). In the event of a conflict HttpOptions.httpParams will override queryParams`. The queryParams parameter of getWithQuery() will be removed in next major release."), n = E(y({}, i), { headers: c?.headers ?? i?.headers, params: c?.params ?? i?.params })); let u = { method: t, url: e, data: r, options: n }; if (r instanceof Error)
        return this.handleError(u)(r); let d; switch (t) {
        case "DELETE": {
            d = this.http.delete(e, n), this.saveDelay && (d = d.pipe(N(this.saveDelay)));
            break;
        }
        case "GET": {
            d = this.http.get(e, n), this.getDelay && (d = d.pipe(N(this.getDelay)));
            break;
        }
        case "POST": {
            d = this.http.post(e, r, n), this.saveDelay && (d = d.pipe(N(this.saveDelay)));
            break;
        }
        case "PUT": {
            d = this.http.put(e, r, n), this.saveDelay && (d = d.pipe(N(this.saveDelay)));
            break;
        }
        default: {
            let l = new Error("Unimplemented HTTP method, " + t);
            d = U(l);
        }
    } return this.timeout && (d = d.pipe(be(this.timeout + this.saveDelay))), d.pipe(X(this.handleError(u))); }
    handleError(t) { return e => { let r = this.handleDelete404(e, t); if (r)
        return r; let i = new I(e, t); return U(i); }; }
    handleDelete404(t, e) { if (t.status === 404 && e.method === "DELETE" && this.delete404OK)
        return T({}); }
}, Be = (() => { class s {
    constructor(e, r, i) { this.http = e, this.httpUrlGenerator = r, this.config = i, i = i || {}, r.registerHttpResourceUrls(i.entityHttpResourceUrls); }
    create(e) { return new pe(e, this.http, this.httpUrlGenerator, this.config); }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(ve.HttpClient), h.\u0275\u0275inject(G), h.\u0275\u0275inject(q, 8)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })();
function Ot(s) { let t = s.entityName; if (!t)
    throw new Error("Missing required entityName"); s.entityName = t = t.trim(); let e = s.selectId || V, r = s.sortComparer = s.sortComparer || !1, i = ft({ selectId: e, sortComparer: r }), a = s.entityDispatcherOptions || {}, c = i.getInitialState(y({ entityName: t, filter: "", loaded: !1, loading: !1, changeState: {} }, s.additionalCollectionState || {})), n = s.noChangeTracking === !0; return { entityName: t, entityAdapter: i, entityDispatcherOptions: a, initialState: c, metadata: s, noChangeTracking: n, selectId: e, sortComparer: r }; }
var Ke = new R("@ngrx/data Entity Metadata"), j = (() => { class s {
    constructor(e) { this.definitions = {}, e && e.forEach(r => this.registerMetadataMap(r)); }
    getDefinition(e, r = !0) { e = e.trim(); let i = this.definitions[e]; if (!i && r)
        throw new Error(`No EntityDefinition for entity type "${e}".`); return i; }
    registerMetadata(e) { if (e) {
        let r = Ot(e);
        this.registerDefinition(r);
    } }
    registerMetadataMap(e = {}) { Object.keys(e || {}).forEach(r => this.registerMetadata(y({ entityName: r }, e[r]))); }
    registerDefinition(e) { this.definitions[e.entityName] = e; }
    registerDefinitions(e) { Object.assign(this.definitions, e); }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(Ke, 8)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), ke = C.Update, qe = (() => { class s {
    constructor(e, r, i) { this.entityDefinitionService = e, this.http = r, this.idSelectors = {}, this.saveDelay = 0, this.timeout = 0; let { saveDelay: a = 0, timeout: c = 0 } = i || {}; this.saveDelay = a, this.timeout = c; }
    saveEntities(e, r) { e = this.filterChangeSet(e), e = this.flattenUpdates(e); let i = this.http.post(r, e).pipe(m(a => this.restoreUpdates(a)), X(this.handleError({ method: "POST", url: r, data: e }))); return this.timeout && (i = i.pipe(be(this.timeout))), this.saveDelay && (i = i.pipe(N(this.saveDelay))), i; }
    handleError(e) { return r => { let i = new I(r, e); return U(i); }; }
    filterChangeSet(e) { return je(e); }
    flattenUpdates(e) { let r = e.changes; if (r.length === 0)
        return e; let i = !1; return r = r.map(a => a.op === ke && a.entities.length > 0 ? (i = !0, E(y({}, a), { entities: a.entities.map(c => c.changes) })) : a), i ? E(y({}, e), { changes: r }) : e; }
    restoreUpdates(e) { if (e == null)
        return e; let r = e.changes; if (r.length === 0)
        return e; let i = !1; return r = r.map(a => { if (a.op === ke) {
        i = !0;
        let c = this.getIdSelector(a.entityName);
        return E(y({}, a), { entities: a.entities.map(n => ({ id: c(n), changes: n })) });
    }
    else
        return a; }), i ? E(y({}, e), { changes: r }) : e; }
    getIdSelector(e) { let r = this.idSelectors[e]; return r || (r = this.entityDefinitionService.getDefinition(e).selectId, this.idSelectors[e] = r), r; }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(j), h.\u0275\u0275inject(ve.HttpClient), h.\u0275\u0275inject(q, 8)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), He = (() => { class s {
    constructor(e) { this.defaultDataServiceFactory = e, this.services = {}; }
    getService(e) { e = e.trim(); let r = this.services[e]; return r || (r = this.defaultDataServiceFactory.create(e), this.services[e] = r), r; }
    registerService(e, r) { this.services[e.trim()] = r; }
    registerServices(e) { this.services = y(y({}, this.services), e); }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(Be)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), W = class {
}, Rt = (() => { class s {
    constructor(e, r) { this.logger = e, this.entityActionFactory = r; }
    handleSuccess(e) { let r = Pe(e.payload.entityOp); return i => this.entityActionFactory.createFromAction(e, { entityOp: r, data: i }); }
    handleError(e) { let r = Ct(e.payload.entityOp); return i => { let c = { error: i instanceof I ? i : new I(i, null), originalAction: e }; return this.logger.error(c), this.entityActionFactory.createFromAction(e, { entityOp: r, data: c }); }; }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(k), h.\u0275\u0275inject(F)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), z = class {
    constructor(t) { this.message = t, this.message = t || "Canceled by user"; }
}, De = (() => { class s {
    constructor() { this.seed = 0, this.prefix = "CRID"; }
    next() { return this.seed += 1, this.prefix + this.seed; }
    static { this.\u0275fac = function (r) { return new (r || s); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), Ce = (() => { class s {
    constructor() { this.optimisticAdd = !1, this.optimisticDelete = !0, this.optimisticUpdate = !1, this.optimisticUpsert = !1, this.optimisticSaveEntities = !1; }
    static { this.\u0275fac = function (r) { return new (r || s); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), Ut = (() => { class s {
    constructor(e, r, i, a) { this.correlationIdGenerator = e, this.defaultDispatcherOptions = r, this.store = a, this.reducedActions$ = i.pipe(_(1)), this.raSubscription = this.reducedActions$.subscribe(); }
    dispatch(e) { return this.store.dispatch(e), e; }
    cancelSaveEntities(e, r, i, a) { if (!e)
        throw new Error("Missing correlationId"); let c = new he(e, r, i, a); this.dispatch(c); }
    clearCollections(e, r) { this.dispatch(new ae(e, r)); }
    loadCollections(e, r) { this.dispatch(new ne(e, r)); }
    mergeQuerySet(e, r, i) { this.dispatch(new ce(e, r, i)); }
    setEntityCache(e, r) { this.dispatch(new oe(e, r)); }
    saveEntities(e, r, i) { let a = Array.isArray(e) ? { changes: e } : e; i = i || {}; let c = i.correlationId == null ? this.correlationIdGenerator.next() : i.correlationId, n = i.isOptimistic == null ? this.defaultDispatcherOptions.optimisticSaveEntities || !1 : i.isOptimistic === !0, u = i.tag || "Save Entities"; i = E(y({}, i), { correlationId: c, isOptimistic: n, tag: u }); let d = new de(a, r, i); return this.dispatch(d), this.getSaveEntitiesResponseData$(i.correlationId).pipe(_(1)); }
    getSaveEntitiesResponseData$(e) { return this.reducedActions$.pipe(D(r => r.type === f.SAVE_ENTITIES_SUCCESS || r.type === f.SAVE_ENTITIES_ERROR || r.type === f.SAVE_ENTITIES_CANCEL), D(r => e === r.payload.correlationId), $e(1), Z(r => r.type === f.SAVE_ENTITIES_CANCEL ? U(new z(r.payload.reason)) : r.type === f.SAVE_ENTITIES_SUCCESS ? T(r.payload.changeSet) : U(r.payload))); }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(De), h.\u0275\u0275inject(Ce), h.\u0275\u0275inject(Ye), h.\u0275\u0275inject(Y.Store)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), Ee = class {
    constructor(t, e, r, i = V, a, c, n, u) { this.entityName = t, this.entityActionFactory = e, this.store = r, this.selectId = i, this.defaultDispatcherOptions = a, this.reducedActions$ = c, this.correlationIdGenerator = u, this.guard = new K(t, i), this.toUpdate = Ve(i); let d = L(n, l => l[t]); this.entityCollection$ = r.select(d); }
    createEntityAction(t, e, r) { return this.entityActionFactory.create(y({ entityName: this.entityName, entityOp: t, data: e }, r)); }
    createAndDispatch(t, e, r) { let i = this.createEntityAction(t, e, r); return this.dispatch(i), i; }
    dispatch(t) { return this.store.dispatch(t), t; }
    add(t, e) { e = this.setSaveEntityActionOptions(e, this.defaultDispatcherOptions.optimisticAdd); let r = this.createEntityAction(o.SAVE_ADD_ONE, t, e); return e.isOptimistic && this.guard.mustBeEntity(r), this.dispatch(r), this.getResponseData$(e.correlationId).pipe(x(this.entityCollection$), m(([i, a]) => a.entities[this.selectId(i)]), _(1)); }
    cancel(t, e, r) { if (!t)
        throw new Error("Missing correlationId"); this.createAndDispatch(o.CANCEL_PERSIST, e, { correlationId: t }); }
    delete(t, e) { e = this.setSaveEntityActionOptions(e, this.defaultDispatcherOptions.optimisticDelete); let r = this.getKey(t), i = this.createEntityAction(o.SAVE_DELETE_ONE, r, e); return this.guard.mustBeKey(i), this.dispatch(i), this.getResponseData$(e.correlationId).pipe(m(() => r), _(1)); }
    getAll(t) { t = this.setQueryEntityActionOptions(t); let e = this.createEntityAction(o.QUERY_ALL, null, t); return this.dispatch(e), this.getResponseData$(t.correlationId).pipe(x(this.entityCollection$), m(([r, i]) => r.reduce((a, c) => { let n = i.entities[this.selectId(c)]; return n && a.push(n), a; }, [])), _(1)); }
    getByKey(t, e) { e = this.setQueryEntityActionOptions(e); let r = this.createEntityAction(o.QUERY_BY_KEY, t, e); return this.dispatch(r), this.getResponseData$(e.correlationId).pipe(x(this.entityCollection$), m(([i, a]) => a.entities[this.selectId(i)]), _(1)); }
    getWithQuery(t, e) { e = this.setQueryEntityActionOptions(e); let r = this.createEntityAction(o.QUERY_MANY, t, e); return this.dispatch(r), this.getResponseData$(e.correlationId).pipe(x(this.entityCollection$), m(([i, a]) => i.reduce((c, n) => { let u = a.entities[this.selectId(n)]; return u && c.push(u), c; }, [])), _(1)); }
    load(t) { t = this.setQueryEntityActionOptions(t); let e = this.createEntityAction(o.QUERY_LOAD, null, t); return this.dispatch(e), this.getResponseData$(t.correlationId).pipe(_(1)); }
    loadWithQuery(t, e) { e = this.setQueryEntityActionOptions(e); let r = this.createEntityAction(o.QUERY_MANY, t, e); return this.dispatch(r), this.getResponseData$(e.correlationId).pipe(_(1)); }
    update(t, e) { let r = this.toUpdate(t); e = this.setSaveEntityActionOptions(e, this.defaultDispatcherOptions.optimisticUpdate); let i = this.createEntityAction(o.SAVE_UPDATE_ONE, r, e); return e.isOptimistic && this.guard.mustBeUpdate(i), this.dispatch(i), this.getResponseData$(e.correlationId).pipe(m(a => a.changes), x(this.entityCollection$), m(([a, c]) => c.entities[this.selectId(a)]), _(1)); }
    upsert(t, e) { e = this.setSaveEntityActionOptions(e, this.defaultDispatcherOptions.optimisticUpsert); let r = this.createEntityAction(o.SAVE_UPSERT_ONE, t, e); return e.isOptimistic && this.guard.mustBeEntity(r), this.dispatch(r), this.getResponseData$(e.correlationId).pipe(x(this.entityCollection$), m(([i, a]) => a.entities[this.selectId(i)]), _(1)); }
    addAllToCache(t, e) { this.createAndDispatch(o.ADD_ALL, t, e); }
    addOneToCache(t, e) { this.createAndDispatch(o.ADD_ONE, t, e); }
    addManyToCache(t, e) { this.createAndDispatch(o.ADD_MANY, t, e); }
    clearCache(t) { this.createAndDispatch(o.REMOVE_ALL, void 0, t); }
    removeOneFromCache(t, e) { this.createAndDispatch(o.REMOVE_ONE, this.getKey(t), e); }
    removeManyFromCache(t, e) { if (!t || t.length === 0)
        return; let r = typeof t[0] == "object" ? t.map(i => this.getKey(i)) : t; this.createAndDispatch(o.REMOVE_MANY, r, e); }
    updateOneInCache(t, e) { let r = this.toUpdate(t); this.createAndDispatch(o.UPDATE_ONE, r, e); }
    updateManyInCache(t, e) { if (!t || t.length === 0)
        return; let r = t.map(i => this.toUpdate(i)); this.createAndDispatch(o.UPDATE_MANY, r, e); }
    upsertOneInCache(t, e) { this.createAndDispatch(o.UPSERT_ONE, t, e); }
    upsertManyInCache(t, e) { !t || t.length === 0 || this.createAndDispatch(o.UPSERT_MANY, t, e); }
    setFilter(t) { this.createAndDispatch(o.SET_FILTER, t); }
    setLoaded(t) { this.createAndDispatch(o.SET_LOADED, !!t); }
    setLoading(t) { this.createAndDispatch(o.SET_LOADING, !!t); }
    getKey(t) { return typeof t == "object" ? this.selectId(t) : t; }
    getResponseData$(t) { return this.reducedActions$.pipe(D(e => !!e.payload), D(e => { let { correlationId: r, entityName: i, entityOp: a } = e.payload; return i === this.entityName && r === t && (a.endsWith(ye) || a.endsWith(me) || a === o.CANCEL_PERSIST); }), $e(1), Z(e => { let { entityOp: r } = e.payload; return r === o.CANCEL_PERSIST ? U(new z(e.payload.data)) : r.endsWith(ye) ? T(e.payload.data) : U(e.payload.data.error); })); }
    setQueryEntityActionOptions(t) { t = t || {}; let e = t.correlationId == null ? this.correlationIdGenerator.next() : t.correlationId; return E(y({}, t), { correlationId: e }); }
    setSaveEntityActionOptions(t, e) { t = t || {}; let r = t.correlationId == null ? this.correlationIdGenerator.next() : t.correlationId, i = t.isOptimistic == null ? e || !1 : t.isOptimistic === !0; return E(y({}, t), { correlationId: r, isOptimistic: i }); }
}, te = "entityCache", _e = new R("@ngrx/data Entity Cache Name"), Ge = new R("@ngrx/data Entity Cache Meta Reducers"), We = new R("@ngrx/data Entity Collection Meta Reducers"), Nt = new R("@ngrx/data Initial Entity Cache State"), re = new R("@ngrx/data Entity Cache Selector"), It = { provide: re, useFactory: ze, deps: [[new yt, _e]] };
function ze(s) { return s = s || te, St(s); }
var Me = (() => { class s {
    constructor(e, r, i, a, c, n) { this.entityActionFactory = e, this.store = r, this.entityDispatcherDefaultOptions = i, this.entityCacheSelector = c, this.correlationIdGenerator = n, this.reducedActions$ = a.pipe(_(1)), this.raSubscription = this.reducedActions$.subscribe(); }
    create(e, r = V, i = {}) { let a = y(y({}, this.entityDispatcherDefaultOptions), i); return new Ee(e, this.entityActionFactory, this.store, r, a, this.reducedActions$, this.entityCacheSelector, this.correlationIdGenerator); }
    ngOnDestroy() { this.raSubscription.unsubscribe(); }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(F), h.\u0275\u0275inject(Y.Store), h.\u0275\u0275inject(Ce), h.\u0275\u0275inject(Ye), h.\u0275\u0275inject(re), h.\u0275\u0275inject(De)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), Je = new R("@ngrx/data Entity Effects Scheduler"), Xe = (() => { class s {
    constructor(e, r, i, a, c) { this.actions = e, this.dataService = r, this.entityActionFactory = i, this.logger = a, this.scheduler = c, this.responseDelay = 10, this.saveEntitiesCancel$ = B(() => this.actions.pipe(Ne(f.SAVE_ENTITIES_CANCEL), D(n => n.payload.correlationId != null)), { dispatch: !1 }), this.saveEntities$ = B(() => this.actions.pipe(Ne(f.SAVE_ENTITIES), Z(n => this.saveEntities(n)))); }
    saveEntities(e) { let r = e.payload.error; if (r)
        return this.handleSaveEntitiesError$(e)(r); try {
        let i = je(e.payload.changeSet), { correlationId: a, mergeStrategy: c, tag: n, url: u } = e.payload, d = { correlationId: a, mergeStrategy: c, tag: n };
        if (i.changes.length === 0)
            return T(new $(i, u, d));
        let l = this.saveEntitiesCancel$.pipe(D(g => a === g.payload.correlationId), m(g => new ue(a, g.payload.reason, g.payload.tag))), p = this.dataService.saveEntities(i, u).pipe(Et(g => this.handleSaveEntitiesSuccess$(e, this.entityActionFactory)(g)), X(this.handleSaveEntitiesError$(e)));
        return se(l, p);
    }
    catch (i) {
        return this.handleSaveEntitiesError$(e)(i);
    } }
    handleSaveEntitiesError$(e) { return r => { let i = r instanceof I ? r : new I(r, null); return T(new le(i, e)).pipe(N(this.responseDelay, this.scheduler || Q)); }; }
    handleSaveEntitiesSuccess$(e, r) { let { url: i, correlationId: a, mergeStrategy: c, tag: n } = e.payload, u = { correlationId: a, mergeStrategy: c, tag: n }; return d => { if (d)
        return T(new $(d, i, u)); if (d = e.payload.changeSet, !e.payload.isOptimistic)
        return T(new $(d, i, u)); let l = d.changes.reduce((p, g) => p.indexOf(g.entityName) === -1 ? p.concat(g.entityName) : p, []); return Re(l.map(p => r.create(p, o.SET_LOADING, !1))); }; }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(ee.Actions), h.\u0275\u0275inject(qe), h.\u0275\u0275inject(F), h.\u0275\u0275inject(k), h.\u0275\u0275inject(Je, 8)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), xt = [o.QUERY_ALL, o.QUERY_LOAD, o.QUERY_BY_KEY, o.QUERY_MANY, o.SAVE_ADD_ONE, o.SAVE_DELETE_ONE, o.SAVE_UPDATE_ONE, o.SAVE_UPSERT_ONE], Ze = (() => { class s {
    constructor(e, r, i, a, c) { this.actions = e, this.dataService = r, this.entityActionFactory = i, this.resultHandler = a, this.scheduler = c, this.responseDelay = 10, this.cancel$ = B(() => this.actions.pipe(Ie(o.CANCEL_PERSIST), m(n => n.payload.correlationId), D(n => n != null)), { dispatch: !1 }), this.persist$ = B(() => this.actions.pipe(Ie(xt), Z(n => this.persist(n)))); }
    persist(e) { if (e.payload.skip)
        return this.handleSkipSuccess$(e); if (e.payload.error)
        return this.handleError$(e)(e.payload.error); try {
        let r = this.cancel$.pipe(D(a => e.payload.correlationId === a), m(a => this.entityActionFactory.createFromAction(e, { entityOp: o.CANCELED_PERSIST }))), i = this.callDataService(e).pipe(m(this.resultHandler.handleSuccess(e)), X(this.handleError$(e)));
        return se(r, i);
    }
    catch (r) {
        return this.handleError$(e)(r);
    } }
    callDataService(e) { let { entityName: r, entityOp: i, data: a, httpOptions: c } = e.payload, n = this.dataService.getService(r); switch (i) {
        case o.QUERY_ALL:
        case o.QUERY_LOAD: return n.getAll(c);
        case o.QUERY_BY_KEY: return n.getById(a, c);
        case o.QUERY_MANY: return n.getWithQuery(a, c);
        case o.SAVE_ADD_ONE: return n.add(a, c);
        case o.SAVE_DELETE_ONE: return n.delete(a, c);
        case o.SAVE_UPDATE_ONE:
            let { id: u, changes: d } = a;
            return n.update(a, c).pipe(m(l => l && Object.keys(l).length > 0 ? { id: u, changes: y(y({}, d), l), changed: !0 } : { id: u, changes: d, changed: !1 }));
        case o.SAVE_UPSERT_ONE: return n.upsert(a, c).pipe(m(l => l && Object.keys(l).length > 0 ? l : a));
        default: throw new Error(`Persistence action "${i}" is not implemented.`);
    } }
    handleError$(e) { return r => T(this.resultHandler.handleError(e)(r)).pipe(N(this.responseDelay, this.scheduler || Q)); }
    handleSkipSuccess$(e) { let r = Pe(e.payload.entityOp), i = this.entityActionFactory.createFromAction(e, { entityOp: r }); return T(i).pipe(N(this.responseDelay, this.scheduler || Q)); }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(ee.Actions), h.\u0275\u0275inject(He), h.\u0275\u0275inject(F), h.\u0275\u0275inject(W), h.\u0275\u0275inject(Je, 8)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })();
function Zt(s = []) { return s.length === 0 ? (t, e) => t : (t, e) => { if (!t)
    return []; let r = typeof e == "string" ? new RegExp(e, "i") : e; if (r) {
    let i = a => s.some(c => r.test(a[c]));
    return t.filter(i);
} return t; }; }
var ge = class {
    constructor(t, e) { this.entityName = t, t = t.trim(); let { dispatcher: r, selectors: i, selectors$: a } = e.create(t); this.entityName = t, this.dispatcher = r, this.guard = r.guard, this.selectId = r.selectId, this.toUpdate = r.toUpdate, this.selectors = i, this.selectors$ = a, this.collection$ = a.collection$, this.count$ = a.count$, this.entities$ = a.entities$, this.entityActions$ = a.entityActions$, this.entityMap$ = a.entityMap$, this.errors$ = a.errors$, this.filter$ = a.filter$, this.filteredEntities$ = a.filteredEntities$, this.keys$ = a.keys$, this.loaded$ = a.loaded$, this.loading$ = a.loading$, this.changeState$ = a.changeState$; }
    createEntityAction(t, e, r) { return this.dispatcher.createEntityAction(t, e, r); }
    createAndDispatch(t, e, r) { return this.dispatcher.createAndDispatch(t, e, r); }
    dispatch(t) { return this.dispatcher.dispatch(t); }
    get store() { return this.dispatcher.store; }
    add(t, e) { return this.dispatcher.add(t, e); }
    cancel(t, e, r) { this.dispatcher.cancel(t, e, r); }
    delete(t, e) { return this.dispatcher.delete(t, e); }
    getAll(t) { return this.dispatcher.getAll(t); }
    getByKey(t, e) { return this.dispatcher.getByKey(t, e); }
    getWithQuery(t, e) { return this.dispatcher.getWithQuery(t, e); }
    load(t) { return this.dispatcher.load(t); }
    loadWithQuery(t, e) { return this.dispatcher.loadWithQuery(t, e); }
    update(t, e) { return this.dispatcher.update(t, e); }
    upsert(t, e) { return this.dispatcher.upsert(t, e); }
    addAllToCache(t, e) { this.dispatcher.addAllToCache(t, e); }
    addOneToCache(t, e) { this.dispatcher.addOneToCache(t, e); }
    addManyToCache(t, e) { this.dispatcher.addManyToCache(t, e); }
    clearCache() { this.dispatcher.clearCache(); }
    removeOneFromCache(t, e) { this.dispatcher.removeOneFromCache(t, e); }
    removeManyFromCache(t, e) { this.dispatcher.removeManyFromCache(t, e); }
    updateOneInCache(t, e) { this.dispatcher.updateOneInCache(t, e); }
    updateManyInCache(t, e) { this.dispatcher.updateManyInCache(t, e); }
    upsertOneInCache(t, e) { this.dispatcher.upsertOneInCache(t, e); }
    upsertManyInCache(t, e) { this.dispatcher.upsertManyInCache(t, e); }
    setFilter(t) { this.dispatcher.setFilter(t); }
    setLoaded(t) { this.dispatcher.setLoaded(!!t); }
    setLoading(t) { this.dispatcher.setLoading(!!t); }
}, J = (() => { class s {
    constructor(e) { this.entityDefinitionService = e; }
    create(e) { let r = this.entityDefinitionService && this.entityDefinitionService.getDefinition(e, !1); return r && r.initialState || Lt(e); }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(j, 8)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })();
function Lt(s) { return { entityName: s, ids: [], entities: {}, filter: void 0, loaded: !1, loading: !1, changeState: {} }; }
var et = (() => { class s {
    constructor(e, r) { this.entityCollectionCreator = e || new J, this.selectEntityCache = r || ze(te); }
    createCollectionSelector(e) { let r = (i = {}) => i[e] || this.entityCollectionCreator.create(e); return L(this.selectEntityCache, r); }
    createCollectionSelectors(e) { let r = typeof e == "string" ? { entityName: e } : e, i = S => S.ids, a = S => S.entities, c = L(i, a, (S, b) => S.map(ut => b[ut])), n = L(i, S => S.length), u = S => S.filter, d = r.filterFn, l = d ? L(c, u, (S, b) => d(S, b)) : c, p = S => S.loaded, g = S => S.loading, M = S => S.changeState, P = r.additionalCollectionState || {}, w = {}; return Object.keys(P).forEach(S => { w["select" + S[0].toUpperCase() + S.slice(1)] = b => b[S]; }), y({ selectCount: n, selectEntities: c, selectEntityMap: a, selectFilter: u, selectFilteredEntities: l, selectKeys: i, selectLoaded: p, selectLoading: g, selectChangeState: M }, w); }
    create(e) { let r = typeof e == "string" ? { entityName: e } : e, i = r.entityName, a = this.createCollectionSelector(i), c = this.createCollectionSelectors(r), n = {}; return Object.keys(c).forEach(u => { n[u] = L(a, c[u]); }), y({ entityName: i, selectCollection: a, selectEntityCache: this.selectEntityCache }, n); }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(J, 8), h.\u0275\u0275inject(re, 8)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), Te = (() => { class s {
    constructor(e, r, i) { this.store = e, this.actions = r, this.selectEntityCache = i, this.entityCache$ = this.store.select(this.selectEntityCache), this.entityActionErrors$ = r.pipe(D(a => a.payload && a.payload.entityOp && a.payload.entityOp.endsWith(me)), _(1)); }
    create(e, r) { let i = { entityName: e }; return Object.keys(r).forEach(a => { if (a.startsWith("select")) {
        let c = a[6].toLowerCase() + a.substring(7) + "$";
        i[c] = this.store.select(r[a]);
    } }), i.entityActions$ = this.actions.pipe(xe(e)), i.errors$ = this.entityActionErrors$.pipe(xe(e)), i; }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(Y.Store), h.\u0275\u0275inject(ee.Actions), h.\u0275\u0275inject(re)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), tt = (() => { class s {
    constructor(e, r, i, a) { this.entityDispatcherFactory = e, this.entityDefinitionService = r, this.entitySelectorsFactory = i, this.entitySelectors$Factory = a; }
    create(e) { e = e.trim(); let r = this.entityDefinitionService.getDefinition(e), i = this.entityDispatcherFactory.create(e, r.selectId, r.entityDispatcherOptions), a = this.entitySelectorsFactory.create(r.metadata), c = this.entitySelectors$Factory.create(e, a); return { dispatcher: i, entityName: e, selectors: a, selectors$: c }; }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(Me), h.\u0275\u0275inject(j), h.\u0275\u0275inject(et), h.\u0275\u0275inject(Te)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), rt = (() => { class s {
    constructor(e) { this.entityCollectionServiceElementsFactory = e; }
    create(e) { return new ge(e, this.entityCollectionServiceElementsFactory); }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(tt)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), st = (() => { class s {
    constructor(e, r, i, a) { this.entityCollectionServiceFactory = e, this.store = a, this.entityActionErrors$ = i.entityActionErrors$, this.entityCache$ = i.entityCache$, this.reducedActions$ = r.reducedActions$; }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(rt), h.\u0275\u0275inject(Me), h.\u0275\u0275inject(Te), h.\u0275\u0275inject(Y.Store)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), kt = (() => { class s {
    constructor(e) { this.entityServicesElements = e, this.EntityCollectionServices = {}; }
    get entityActionErrors$() { return this.entityServicesElements.entityActionErrors$; }
    get entityCache$() { return this.entityServicesElements.entityCache$; }
    get entityCollectionServiceFactory() { return this.entityServicesElements.entityCollectionServiceFactory; }
    get reducedActions$() { return this.entityServicesElements.reducedActions$; }
    get store() { return this.entityServicesElements.store; }
    dispatch(e) { this.store.dispatch(e); }
    createEntityCollectionService(e) { return this.entityCollectionServiceFactory.create(e); }
    getEntityCollectionService(e) { let r = this.EntityCollectionServices[e]; return r || (r = this.createEntityCollectionService(e), this.EntityCollectionServices[e] = r), r; }
    registerEntityCollectionService(e, r) { this.EntityCollectionServices[r || e.entityName] = e; }
    registerEntityCollectionServices(e) { Array.isArray(e) ? e.forEach(r => this.registerEntityCollectionService(r)) : Object.keys(e || {}).forEach(r => { this.registerEntityCollectionService(e[r], r); }); }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(st)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), fe = class {
}, v = (function (s) { return s[s.Unchanged = 0] = "Unchanged", s[s.Added = 1] = "Added", s[s.Deleted = 2] = "Deleted", s[s.Updated = 3] = "Updated", s; })(v || {}), Se = class {
    constructor(t, e) { this.adapter = t, this.selectId = e, this.selectId = e || V; }
    commitAll(t) { return Object.keys(t.changeState).length === 0 ? t : E(y({}, t), { changeState: {} }); }
    commitMany(t, e) { if (t == null || t.length === 0)
        return e; let r = !1, i = t.reduce((a, c) => { let n = typeof c == "object" ? this.selectId(c) : c; return a[n] && (r || (a = y({}, a), r = !0), delete a[n]), a; }, e.changeState); return r ? E(y({}, e), { changeState: i }) : e; }
    commitOne(t, e) { return t == null ? e : this.commitMany([t], e); }
    mergeQueryResults(t, e, r) { return this.mergeServerUpserts(t, e, A.PreserveChanges, r); }
    mergeSaveAdds(t, e, r) { return this.mergeServerUpserts(t, e, A.OverwriteChanges, r); }
    mergeSaveDeletes(t, e, r) { r = r ?? A.OverwriteChanges; let i = t; return e = r === A.IgnoreChanges ? e : this.commitMany(i, e), this.adapter.removeMany(i, e); }
    mergeSaveUpdates(t, e, r, i = !1) { if (t == null || t.length === 0)
        return e; let a = !1, c = e.changeState; r = r ?? A.OverwriteChanges; let n; switch (r) {
        case A.IgnoreChanges: return n = u(t), this.adapter.updateMany(n, e);
        case A.OverwriteChanges: return c = t.reduce((d, l) => { let p = l.id; return d[p] && (a || (d = y({}, d), a = !0), delete d[p]), d; }, e.changeState), e = a ? E(y({}, e), { changeState: c }) : e, n = u(t), this.adapter.updateMany(n, e);
        case A.PreserveChanges: {
            let d = [];
            return c = t.reduce((l, p) => { let g = p.id, M = l[g]; if (M) {
                a || (l = y({}, l), a = !0);
                let P = this.selectId(p.changes), w = M;
                P !== g && delete l[g];
                let S = y(y({}, w.originalValue), p.changes);
                l[P] = E(y({}, w), { originalValue: S });
            }
            else
                d.push(p); return l; }, e.changeState), e = a ? E(y({}, e), { changeState: c }) : e, n = u(d), this.adapter.updateMany(n, e);
        }
    } function u(d) { return i === !0 && (d = d.filter(l => l.changed === !0)), d.map(l => ({ id: l.id, changes: l.changes })); } }
    mergeSaveUpserts(t, e, r) { return this.mergeServerUpserts(t, e, A.OverwriteChanges, r); }
    mergeServerUpserts(t, e, r, i) { if (t == null || t.length === 0)
        return e; let a = !1, c = e.changeState; switch (i = i ?? r, i) {
        case A.IgnoreChanges: return this.adapter.upsertMany(t, e);
        case A.OverwriteChanges: return e = this.adapter.upsertMany(t, e), c = t.reduce((n, u) => { let d = this.selectId(u); return n[d] && (a || (n = y({}, n), a = !0), delete n[d]), n; }, e.changeState), a ? E(y({}, e), { changeState: c }) : e;
        case A.PreserveChanges: {
            let n = [];
            return c = t.reduce((u, d) => { let l = this.selectId(d); return u[l] ? a || (u = E(y({}, u), { [l]: E(y({}, u[l]), { originalValue: d }) }), a = !0) : n.push(d), u; }, e.changeState), e = this.adapter.upsertMany(n, e), a ? E(y({}, e), { changeState: c }) : e;
        }
    } }
    trackAddMany(t, e, r) { if (r === A.IgnoreChanges || t == null || t.length === 0)
        return e; let i = !1, a = t.reduce((c, n) => { let u = this.selectId(n); if (u == null || u === "")
        throw new Error(`${e.entityName} entity add requires a key to be tracked`); return c[u] || (i || (i = !0, c = y({}, c)), c[u] = { changeType: v.Added }), c; }, e.changeState); return i ? E(y({}, e), { changeState: a }) : e; }
    trackAddOne(t, e, r) { return t == null ? e : this.trackAddMany([t], e, r); }
    trackDeleteMany(t, e, r) { if (r === A.IgnoreChanges || t == null || t.length === 0)
        return e; let i = !1, a = e.entities, c = t.reduce((n, u) => { let d = a[u]; if (d) {
        let p = n[u];
        p ? p.changeType === v.Added ? (l(), delete n[u]) : p.changeType === v.Updated && (l(), n[u] = E(y({}, n[u]), { changeType: v.Deleted })) : (l(), n[u] = { changeType: v.Deleted, originalValue: d });
    } return n; function l() { i || (i = !0, n = y({}, n)); } }, e.changeState); return i ? E(y({}, e), { changeState: c }) : e; }
    trackDeleteOne(t, e, r) { return t == null ? e : this.trackDeleteMany([t], e, r); }
    trackUpdateMany(t, e, r) { if (r === A.IgnoreChanges || t == null || t.length === 0)
        return e; let i = !1, a = e.entities, c = t.reduce((n, u) => { let { id: d, changes: l } = u; if (d == null || d === "")
        throw new Error(`${e.entityName} entity update requires a key to be tracked`); let p = a[d]; return p && (n[d] || (i || (i = !0, n = y({}, n)), n[d] = { changeType: v.Updated, originalValue: p })), n; }, e.changeState); return i ? E(y({}, e), { changeState: c }) : e; }
    trackUpdateOne(t, e, r) { return t == null ? e : this.trackUpdateMany([t], e, r); }
    trackUpsertMany(t, e, r) { if (r === A.IgnoreChanges || t == null || t.length === 0)
        return e; let i = !1, a = e.entities, c = t.reduce((n, u) => { let d = this.selectId(u); if (d == null || d === "")
        throw new Error(`${e.entityName} entity upsert requires a key to be tracked`); if (!n[d]) {
        i || (i = !0, n = y({}, n));
        let p = a[d];
        n[d] = p == null ? { changeType: v.Added } : { changeType: v.Updated, originalValue: p };
    } return n; }, e.changeState); return i ? E(y({}, e), { changeState: c }) : e; }
    trackUpsertOne(t, e, r) { return t == null ? e : this.trackUpsertMany([t], e, r); }
    undoAll(t) { let e = Object.keys(t.changeState), { remove: r, upsert: i } = e.reduce((a, c) => { let n = a.chgState[c]; switch (n.changeType) {
        case v.Added:
            a.remove.push(c);
            break;
        case v.Deleted:
            let u = n.originalValue;
            u && a.upsert.push(u);
            break;
        case v.Updated:
            a.upsert.push(n.originalValue);
            break;
    } return a; }, { remove: [], upsert: [], chgState: t.changeState }); return t = this.adapter.removeMany(r, t), t = this.adapter.upsertMany(i, t), E(y({}, t), { changeState: {} }); }
    undoMany(t, e) { if (t == null || t.length === 0)
        return e; let r = !1, { changeState: i, remove: a, upsert: c } = t.reduce((n, u) => { let d = n.changeState, l = typeof u == "object" ? this.selectId(u) : u, p = d[l]; if (p)
        switch (r || (d = y({}, d), r = !0), delete d[l], n.changeState = d, p.changeType) {
            case v.Added:
                n.remove.push(l);
                break;
            case v.Deleted:
                let g = p.originalValue;
                g && n.upsert.push(g);
                break;
            case v.Updated:
                n.upsert.push(p.originalValue);
                break;
        } return n; }, { remove: [], upsert: [], changeState: e.changeState }); return e = this.adapter.removeMany(a, e), e = this.adapter.upsertMany(c, e), r ? E(y({}, e), { changeState: i }) : e; }
    undoOne(t, e) { return t == null ? e : this.undoMany([t], e); }
}, Ae = class {
    constructor(t, e, r) { this.entityName = t, this.definition = e, this.methods = { [o.CANCEL_PERSIST]: this.cancelPersist.bind(this), [o.QUERY_ALL]: this.queryAll.bind(this), [o.QUERY_ALL_ERROR]: this.queryAllError.bind(this), [o.QUERY_ALL_SUCCESS]: this.queryAllSuccess.bind(this), [o.QUERY_BY_KEY]: this.queryByKey.bind(this), [o.QUERY_BY_KEY_ERROR]: this.queryByKeyError.bind(this), [o.QUERY_BY_KEY_SUCCESS]: this.queryByKeySuccess.bind(this), [o.QUERY_LOAD]: this.queryLoad.bind(this), [o.QUERY_LOAD_ERROR]: this.queryLoadError.bind(this), [o.QUERY_LOAD_SUCCESS]: this.queryLoadSuccess.bind(this), [o.QUERY_MANY]: this.queryMany.bind(this), [o.QUERY_MANY_ERROR]: this.queryManyError.bind(this), [o.QUERY_MANY_SUCCESS]: this.queryManySuccess.bind(this), [o.SAVE_ADD_MANY]: this.saveAddMany.bind(this), [o.SAVE_ADD_MANY_ERROR]: this.saveAddManyError.bind(this), [o.SAVE_ADD_MANY_SUCCESS]: this.saveAddManySuccess.bind(this), [o.SAVE_ADD_ONE]: this.saveAddOne.bind(this), [o.SAVE_ADD_ONE_ERROR]: this.saveAddOneError.bind(this), [o.SAVE_ADD_ONE_SUCCESS]: this.saveAddOneSuccess.bind(this), [o.SAVE_DELETE_MANY]: this.saveDeleteMany.bind(this), [o.SAVE_DELETE_MANY_ERROR]: this.saveDeleteManyError.bind(this), [o.SAVE_DELETE_MANY_SUCCESS]: this.saveDeleteManySuccess.bind(this), [o.SAVE_DELETE_ONE]: this.saveDeleteOne.bind(this), [o.SAVE_DELETE_ONE_ERROR]: this.saveDeleteOneError.bind(this), [o.SAVE_DELETE_ONE_SUCCESS]: this.saveDeleteOneSuccess.bind(this), [o.SAVE_UPDATE_MANY]: this.saveUpdateMany.bind(this), [o.SAVE_UPDATE_MANY_ERROR]: this.saveUpdateManyError.bind(this), [o.SAVE_UPDATE_MANY_SUCCESS]: this.saveUpdateManySuccess.bind(this), [o.SAVE_UPDATE_ONE]: this.saveUpdateOne.bind(this), [o.SAVE_UPDATE_ONE_ERROR]: this.saveUpdateOneError.bind(this), [o.SAVE_UPDATE_ONE_SUCCESS]: this.saveUpdateOneSuccess.bind(this), [o.SAVE_UPSERT_MANY]: this.saveUpsertMany.bind(this), [o.SAVE_UPSERT_MANY_ERROR]: this.saveUpsertManyError.bind(this), [o.SAVE_UPSERT_MANY_SUCCESS]: this.saveUpsertManySuccess.bind(this), [o.SAVE_UPSERT_ONE]: this.saveUpsertOne.bind(this), [o.SAVE_UPSERT_ONE_ERROR]: this.saveUpsertOneError.bind(this), [o.SAVE_UPSERT_ONE_SUCCESS]: this.saveUpsertOneSuccess.bind(this), [o.ADD_ALL]: this.addAll.bind(this), [o.ADD_MANY]: this.addMany.bind(this), [o.ADD_ONE]: this.addOne.bind(this), [o.REMOVE_ALL]: this.removeAll.bind(this), [o.REMOVE_MANY]: this.removeMany.bind(this), [o.REMOVE_ONE]: this.removeOne.bind(this), [o.UPDATE_MANY]: this.updateMany.bind(this), [o.UPDATE_ONE]: this.updateOne.bind(this), [o.UPSERT_MANY]: this.upsertMany.bind(this), [o.UPSERT_ONE]: this.upsertOne.bind(this), [o.COMMIT_ALL]: this.commitAll.bind(this), [o.COMMIT_MANY]: this.commitMany.bind(this), [o.COMMIT_ONE]: this.commitOne.bind(this), [o.UNDO_ALL]: this.undoAll.bind(this), [o.UNDO_MANY]: this.undoMany.bind(this), [o.UNDO_ONE]: this.undoOne.bind(this), [o.SET_CHANGE_STATE]: this.setChangeState.bind(this), [o.SET_COLLECTION]: this.setCollection.bind(this), [o.SET_FILTER]: this.setFilter.bind(this), [o.SET_LOADED]: this.setLoaded.bind(this), [o.SET_LOADING]: this.setLoading.bind(this) }, this.adapter = e.entityAdapter, this.isChangeTracking = e.noChangeTracking !== !0, this.selectId = e.selectId, this.guard = new K(t, this.selectId), this.toUpdate = Ve(this.selectId), this.entityChangeTracker = r || new Se(this.adapter, this.selectId); }
    cancelPersist(t) { return this.setLoadingFalse(t); }
    queryAll(t) { return this.setLoadingTrue(t); }
    queryAllError(t, e) { return this.setLoadingFalse(t); }
    queryAllSuccess(t, e) { let r = this.extractData(e), i = this.extractMergeStrategy(e); return E(y({}, this.entityChangeTracker.mergeQueryResults(r, t, i)), { loaded: !0, loading: !1 }); }
    queryByKey(t, e) { return this.setLoadingTrue(t); }
    queryByKeyError(t, e) { return this.setLoadingFalse(t); }
    queryByKeySuccess(t, e) { let r = this.extractData(e), i = this.extractMergeStrategy(e); return t = r == null ? t : this.entityChangeTracker.mergeQueryResults([r], t, i), this.setLoadingFalse(t); }
    queryLoad(t) { return this.setLoadingTrue(t); }
    queryLoadError(t, e) { return this.setLoadingFalse(t); }
    queryLoadSuccess(t, e) { let r = this.extractData(e); return E(y({}, this.adapter.setAll(r, t)), { loading: !1, loaded: !0, changeState: {} }); }
    queryMany(t, e) { return this.setLoadingTrue(t); }
    queryManyError(t, e) { return this.setLoadingFalse(t); }
    queryManySuccess(t, e) { let r = this.extractData(e), i = this.extractMergeStrategy(e); return E(y({}, this.entityChangeTracker.mergeQueryResults(r, t, i)), { loaded: !0, loading: !1 }); }
    saveAddMany(t, e) { if (this.isOptimistic(e)) {
        let r = this.guard.mustBeEntities(e), i = this.extractMergeStrategy(e);
        t = this.entityChangeTracker.trackAddMany(r, t, i), t = this.adapter.addMany(r, t);
    } return this.setLoadingTrue(t); }
    saveAddManyError(t, e) { return this.setLoadingFalse(t); }
    saveAddManySuccess(t, e) { let r = this.guard.mustBeEntities(e), i = this.extractMergeStrategy(e); return this.isOptimistic(e) ? t = this.entityChangeTracker.mergeSaveUpserts(r, t, i) : t = this.entityChangeTracker.mergeSaveAdds(r, t, i), this.setLoadingFalse(t); }
    saveAddOne(t, e) { if (this.isOptimistic(e)) {
        let r = this.guard.mustBeEntity(e), i = this.extractMergeStrategy(e);
        t = this.entityChangeTracker.trackAddOne(r, t, i), t = this.adapter.addOne(r, t);
    } return this.setLoadingTrue(t); }
    saveAddOneError(t, e) { return this.setLoadingFalse(t); }
    saveAddOneSuccess(t, e) { let r = this.guard.mustBeEntity(e), i = this.extractMergeStrategy(e); if (this.isOptimistic(e)) {
        let a = this.toUpdate(r);
        t = this.entityChangeTracker.mergeSaveUpdates([a], t, i, !1);
    }
    else
        t = this.entityChangeTracker.mergeSaveAdds([r], t, i); return this.setLoadingFalse(t); }
    saveDeleteOne(t, e) { let r = this.extractData(e), i = typeof r == "object" ? this.selectId(r) : r, a = t.changeState[i]; if (a && (a.changeType === v.Added ? (t = this.adapter.removeOne(i, t), t = this.entityChangeTracker.commitOne(i, t), e.payload.skip = !0) : t = this.entityChangeTracker.trackDeleteOne(i, t)), this.isOptimistic(e)) {
        let c = this.extractMergeStrategy(e);
        t = this.entityChangeTracker.trackDeleteOne(i, t, c), t = this.adapter.removeOne(i, t);
    } return this.setLoadingTrue(t); }
    saveDeleteOneError(t, e) { return this.setLoadingFalse(t); }
    saveDeleteOneSuccess(t, e) { let r = this.extractData(e); if (this.isOptimistic(e)) {
        let i = this.extractMergeStrategy(e);
        t = this.entityChangeTracker.mergeSaveDeletes([r], t, i);
    }
    else
        t = this.adapter.removeOne(r, t), t = this.entityChangeTracker.commitOne(r, t); return this.setLoadingFalse(t); }
    saveDeleteMany(t, e) { let r = this.extractData(e).map(i => typeof i == "object" ? this.selectId(i) : i); if (r.forEach(i => { let a = t.changeState[i]; a && (a.changeType === v.Added ? (t = this.adapter.removeOne(i, t), t = this.entityChangeTracker.commitOne(i, t), e.payload.skip = !0) : t = this.entityChangeTracker.trackDeleteOne(i, t)); }), this.isOptimistic(e)) {
        let i = this.extractMergeStrategy(e);
        t = this.entityChangeTracker.trackDeleteMany(r, t, i), t = this.adapter.removeMany(r, t);
    } return this.setLoadingTrue(t); }
    saveDeleteManyError(t, e) { return this.setLoadingFalse(t); }
    saveDeleteManySuccess(t, e) { let r = this.extractData(e); if (this.isOptimistic(e)) {
        let i = this.extractMergeStrategy(e);
        t = this.entityChangeTracker.mergeSaveDeletes(r, t, i);
    }
    else
        t = this.adapter.removeMany(r, t), t = this.entityChangeTracker.commitMany(r, t); return this.setLoadingFalse(t); }
    saveUpdateOne(t, e) { let r = this.guard.mustBeUpdate(e); if (this.isOptimistic(e)) {
        let i = this.extractMergeStrategy(e);
        t = this.entityChangeTracker.trackUpdateOne(r, t, i), t = this.adapter.updateOne(r, t);
    } return this.setLoadingTrue(t); }
    saveUpdateOneError(t, e) { return this.setLoadingFalse(t); }
    saveUpdateOneSuccess(t, e) { let r = this.guard.mustBeUpdateResponse(e), i = this.isOptimistic(e), a = this.extractMergeStrategy(e); return t = this.entityChangeTracker.mergeSaveUpdates([r], t, a, i), this.setLoadingFalse(t); }
    saveUpdateMany(t, e) { let r = this.guard.mustBeUpdates(e); if (this.isOptimistic(e)) {
        let i = this.extractMergeStrategy(e);
        t = this.entityChangeTracker.trackUpdateMany(r, t, i), t = this.adapter.updateMany(r, t);
    } return this.setLoadingTrue(t); }
    saveUpdateManyError(t, e) { return this.setLoadingFalse(t); }
    saveUpdateManySuccess(t, e) { let r = this.guard.mustBeUpdateResponses(e), i = this.isOptimistic(e), a = this.extractMergeStrategy(e); return t = this.entityChangeTracker.mergeSaveUpdates(r, t, a, !1), this.setLoadingFalse(t); }
    saveUpsertOne(t, e) { if (this.isOptimistic(e)) {
        let r = this.guard.mustBeEntity(e), i = this.extractMergeStrategy(e);
        t = this.entityChangeTracker.trackUpsertOne(r, t, i), t = this.adapter.upsertOne(r, t);
    } return this.setLoadingTrue(t); }
    saveUpsertOneError(t, e) { return this.setLoadingFalse(t); }
    saveUpsertOneSuccess(t, e) { let r = this.guard.mustBeEntity(e), i = this.extractMergeStrategy(e); return t = this.entityChangeTracker.mergeSaveUpserts([r], t, i), this.setLoadingFalse(t); }
    saveUpsertMany(t, e) { if (this.isOptimistic(e)) {
        let r = this.guard.mustBeEntities(e), i = this.extractMergeStrategy(e);
        t = this.entityChangeTracker.trackUpsertMany(r, t, i), t = this.adapter.upsertMany(r, t);
    } return this.setLoadingTrue(t); }
    saveUpsertManyError(t, e) { return this.setLoadingFalse(t); }
    saveUpsertManySuccess(t, e) { let r = this.guard.mustBeEntities(e), i = this.extractMergeStrategy(e); return t = this.entityChangeTracker.mergeSaveUpserts(r, t, i), this.setLoadingFalse(t); }
    addAll(t, e) { let r = this.guard.mustBeEntities(e); return E(y({}, this.adapter.setAll(r, t)), { loading: !1, loaded: !0, changeState: {} }); }
    addMany(t, e) { let r = this.guard.mustBeEntities(e), i = this.extractMergeStrategy(e); return t = this.entityChangeTracker.trackAddMany(r, t, i), this.adapter.addMany(r, t); }
    addOne(t, e) { let r = this.guard.mustBeEntity(e), i = this.extractMergeStrategy(e); return t = this.entityChangeTracker.trackAddOne(r, t, i), this.adapter.addOne(r, t); }
    removeMany(t, e) { let r = this.guard.mustBeKeys(e), i = this.extractMergeStrategy(e); return t = this.entityChangeTracker.trackDeleteMany(r, t, i), this.adapter.removeMany(r, t); }
    removeOne(t, e) { let r = this.guard.mustBeKey(e), i = this.extractMergeStrategy(e); return t = this.entityChangeTracker.trackDeleteOne(r, t, i), this.adapter.removeOne(r, t); }
    removeAll(t, e) { return E(y({}, this.adapter.removeAll(t)), { loaded: !1, loading: !1, changeState: {} }); }
    updateMany(t, e) { let r = this.guard.mustBeUpdates(e), i = this.extractMergeStrategy(e); return t = this.entityChangeTracker.trackUpdateMany(r, t, i), this.adapter.updateMany(r, t); }
    updateOne(t, e) { let r = this.guard.mustBeUpdate(e), i = this.extractMergeStrategy(e); return t = this.entityChangeTracker.trackUpdateOne(r, t, i), this.adapter.updateOne(r, t); }
    upsertMany(t, e) { let r = this.guard.mustBeEntities(e), i = this.extractMergeStrategy(e); return t = this.entityChangeTracker.trackUpsertMany(r, t, i), this.adapter.upsertMany(r, t); }
    upsertOne(t, e) { let r = this.guard.mustBeEntity(e), i = this.extractMergeStrategy(e); return t = this.entityChangeTracker.trackUpsertOne(r, t, i), this.adapter.upsertOne(r, t); }
    commitAll(t) { return this.entityChangeTracker.commitAll(t); }
    commitMany(t, e) { return this.entityChangeTracker.commitMany(this.extractData(e), t); }
    commitOne(t, e) { return this.entityChangeTracker.commitOne(this.extractData(e), t); }
    undoAll(t) { return this.entityChangeTracker.undoAll(t); }
    undoMany(t, e) { return this.entityChangeTracker.undoMany(this.extractData(e), t); }
    undoOne(t, e) { return this.entityChangeTracker.undoOne(this.extractData(e), t); }
    setChangeState(t, e) { let r = this.extractData(e); return t.changeState === r ? t : E(y({}, t), { changeState: r }); }
    setCollection(t, e) { let r = this.extractData(e); return t === r ? t : r; }
    setFilter(t, e) { let r = this.extractData(e); return t.filter === r ? t : E(y({}, t), { filter: r }); }
    setLoaded(t, e) { let r = this.extractData(e) === !0 || !1; return t.loaded === r ? t : E(y({}, t), { loaded: r }); }
    setLoading(t, e) { return this.setLoadingFlag(t, this.extractData(e)); }
    setLoadingFalse(t) { return this.setLoadingFlag(t, !1); }
    setLoadingTrue(t) { return this.setLoadingFlag(t, !0); }
    setLoadingFlag(t, e) { return e = e === !0, t.loading === e ? t : E(y({}, t), { loading: e }); }
    extractData(t) { return t.payload && t.payload.data; }
    extractMergeStrategy(t) { return this.isChangeTracking ? t.payload && t.payload.mergeStrategy : A.IgnoreChanges; }
    isOptimistic(t) { return t.payload && t.payload.isOptimistic === !0; }
}, it = (() => { class s {
    constructor(e) { this.entityDefinitionService = e; }
    create(e) { let r = this.entityDefinitionService.getDefinition(e); return new Ae(e, r).methods; }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(j)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), at = (() => { class s {
    constructor(e) { this.methodsFactory = e; }
    create(e) { let r = this.methodsFactory.create(e); return function (a, c) { let n = r[c.payload.entityOp]; return n ? n(a, c) : a; }; }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(it)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), nt = (() => { class s {
    constructor(e, r) { this.entityCollectionReducerFactory = e, this.entityCollectionReducers = {}, this.entityCollectionMetaReducer = At.apply(null, r || []); }
    getOrCreateReducer(e) { let r = this.entityCollectionReducers[e]; return r || (r = this.entityCollectionReducerFactory.create(e), r = this.registerReducer(e, r), this.entityCollectionReducers[e] = r), r; }
    registerReducer(e, r) { return r = this.entityCollectionMetaReducer(r), this.entityCollectionReducers[e.trim()] = r; }
    registerReducers(e) { (e ? Object.keys(e) : []).forEach(i => this.registerReducer(i, e[i])); }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(at), h.\u0275\u0275inject(We, 8)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), ct = (() => { class s {
    constructor(e, r, i) { this.entityCollectionCreator = e, this.entityCollectionReducerRegistry = r, this.logger = i; }
    create() { return e.bind(this); function e(r = {}, i) { switch (i.type) {
        case f.CLEAR_COLLECTIONS: return this.clearCollectionsReducer(r, i);
        case f.LOAD_COLLECTIONS: return this.loadCollectionsReducer(r, i);
        case f.MERGE_QUERY_SET: return this.mergeQuerySetReducer(r, i);
        case f.SAVE_ENTITIES: return this.saveEntitiesReducer(r, i);
        case f.SAVE_ENTITIES_CANCEL: return this.saveEntitiesCancelReducer(r, i);
        case f.SAVE_ENTITIES_ERROR: return this.saveEntitiesErrorReducer(r, i);
        case f.SAVE_ENTITIES_SUCCESS: return this.saveEntitiesSuccessReducer(r, i);
        case f.SET_ENTITY_CACHE: return i.payload.cache;
    } let a = i.payload; return a && a.entityName && a.entityOp && !a.error ? this.applyCollectionReducer(r, i) : r; } }
    clearCollectionsReducer(e, r) { let { collections: i, tag: a } = r.payload, c = o.REMOVE_ALL; return i || (i = Object.keys(e)), e = i.reduce((n, u) => { let d = { entityName: u, entityOp: c }, l = { type: `[${u}] ${r.type}`, payload: d }; return n = this.applyCollectionReducer(n, l), n; }, e), e; }
    loadCollectionsReducer(e, r) { let { collections: i, tag: a } = r.payload, c = o.ADD_ALL; return e = Object.keys(i).reduce((u, d) => { let l = { entityName: d, entityOp: c, data: i[d] }, p = { type: `[${d}] ${r.type}`, payload: l }; return u = this.applyCollectionReducer(u, p), u; }, e), e; }
    mergeQuerySetReducer(e, r) { let { mergeStrategy: i, querySet: a, tag: c } = r.payload; i = i === null ? A.PreserveChanges : i; let n = o.QUERY_MANY_SUCCESS; return e = Object.keys(a).reduce((d, l) => { let p = { entityName: l, entityOp: n, data: a[l], mergeStrategy: i }, g = { type: `[${l}] ${r.type}`, payload: p }; return d = this.applyCollectionReducer(d, g), d; }, e), e; }
    saveEntitiesReducer(e, r) { let { changeSet: i, correlationId: a, isOptimistic: c, mergeStrategy: n, tag: u } = r.payload; try {
        i.changes.forEach(l => { let p = l.entityName, g = { entityName: p, entityOp: d(l), data: l.entities, correlationId: a, isOptimistic: c, mergeStrategy: n, tag: u }, M = { type: `[${p}] ${r.type}`, payload: g }; if (e = this.applyCollectionReducer(e, M), M.payload.error)
            throw M.payload.error; });
    }
    catch (l) {
        r.payload.error = l;
    } return e; function d(l) { switch (l.op) {
        case C.Add: return o.SAVE_ADD_MANY;
        case C.Delete: return o.SAVE_DELETE_MANY;
        case C.Update: return o.SAVE_UPDATE_MANY;
        case C.Upsert: return o.SAVE_UPSERT_MANY;
    } } }
    saveEntitiesCancelReducer(e, r) { return this.clearLoadingFlags(e, r.payload.entityNames || []); }
    saveEntitiesErrorReducer(e, r) { let c = r.payload.originalAction.payload.changeSet.changes.map(n => n.entityName); return this.clearLoadingFlags(e, c); }
    saveEntitiesSuccessReducer(e, r) { let { changeSet: i, correlationId: a, isOptimistic: c, mergeStrategy: n, tag: u } = r.payload; return i.changes.forEach(l => { let p = l.entityName, g = { entityName: p, entityOp: d(l), data: l.entities, correlationId: a, isOptimistic: c, mergeStrategy: n, tag: u }, M = { type: `[${p}] ${r.type}`, payload: g }; e = this.applyCollectionReducer(e, M); }), e; function d(l) { switch (l.op) {
        case C.Add: return o.SAVE_ADD_MANY_SUCCESS;
        case C.Delete: return o.SAVE_DELETE_MANY_SUCCESS;
        case C.Update: return o.SAVE_UPDATE_MANY_SUCCESS;
        case C.Upsert: return o.SAVE_UPSERT_MANY_SUCCESS;
    } } }
    applyCollectionReducer(e = {}, r) { let i = r.payload.entityName, a = e[i], c = this.entityCollectionReducerRegistry.getOrCreateReducer(i), n; try {
        n = c(a || this.entityCollectionCreator.create(i), r);
    }
    catch (u) {
        this.logger.error(u), r.payload.error = u;
    } return r.payload.error || a === n ? e : E(y({}, e), { [i]: n }); }
    clearLoadingFlags(e, r) { let i = !1; return r.forEach(a => { let c = e[a]; c.loading && (i || (e = y({}, e), i = !0), e[a] = E(y({}, c), { loading: !1 })); }), e; }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(J), h.\u0275\u0275inject(nt), h.\u0275\u0275inject(k)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), wt = (() => { class s {
    error(e, r) { e && (r ? console.error(e, r) : console.error(e)); }
    log(e, r) { e && (r ? console.log(e, r) : console.log(e)); }
    warn(e, r) { e && (r ? console.warn(e, r) : console.warn(e)); }
    static { this.\u0275fac = function (r) { return new (r || s); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })(), bt = ["equipment", "information", "money", "series"], $t = (() => { class s {
    constructor(e) { this.pluralNames = {}, e && e.forEach(r => this.registerPluralNames(r)); }
    pluralize(e) { let r = this.pluralNames[e]; return r || (bt.indexOf(e.toLowerCase()) >= 0 ? e : /[aeiou]y$/.test(e) ? e + "s" : e.endsWith("y") ? e.substring(0, e.length - 1) + "ies" : /[s|ss|sh|ch|x|z]$/.test(e) ? e + "es" : e + "s"); }
    registerPluralNames(e) { this.pluralNames = y(y({}, this.pluralNames), e || {}); }
    static { this.\u0275fac = function (r) { return new (r || s)(h.\u0275\u0275inject(Qe, 8)); }; }
    static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }); }
} return s; })();
function Yt() { return "xxxxxxxxxx4xxyxxxxxxxxxxxxxx".replace(/[xy]/g, function (s) { let t = Math.random() * 16 | 0; return (s === "x" ? t : t & 3 | 8).toString(16); }); }
function er() { return Yt(); }
function tr(s) { let t = ("00" + (s || new Date().getTime()).toString(16)).slice(-12); return "xxxxxxxxxx4xxyxxx".replace(/[xy]/g, function (e) { let r = Math.random() * 16 | 0; return (e === "x" ? r : r & 3 | 8).toString(16); }) + t; }
function rr(s, t) { let e = s.slice(-12), r = t.slice(-12); return e !== r ? e < r ? -1 : +(e !== r) : s < t ? -1 : +(s !== t); }
var ot = [De, Ce, F, Ut, ct, It, J, at, it, nt, tt, rt, j, Me, et, Te, st, { provide: _e, useValue: te }, { provide: fe, useClass: kt }, { provide: k, useClass: wt }, we(() => Ft())];
function Ft() { let s = O(vt), t = O(ct), e = O(_e, { optional: !0 }), r = O(Nt, { optional: !0 }), i = O(Ge, { optional: !0 }), a = e || te, c = (i || []).map(d => d instanceof R ? O(d) : d), n = typeof r == "function" ? r() : r, u = { key: a, reducers: t.create(), reducerFactory: mt, initialState: n || {}, metaReducers: c }; s.addFeature(u); }
var dt = [Be, qe, He, Xe, Ze, { provide: G, useClass: Mt }, { provide: W, useClass: Rt }, { provide: H, useClass: $t }, we(() => Vt())];
function Vt() { let s = O(Dt), t = O(Xe), e = O(Ze); s.addEffects(t), s.addEffects(e); }
function Oe(s) { return [{ provide: Ge, useValue: s.entityCacheMetaReducers ? s.entityCacheMetaReducers : [] }, { provide: We, useValue: s.entityCollectionMetaReducers ? s.entityCollectionMetaReducers : [] }, { provide: Qe, multi: !0, useValue: s.pluralNames ? s.pluralNames : {} }, { provide: Ke, multi: !0, useValue: s.entityMetadata ? s.entityMetadata : [] }]; }
function sr(s, ...t) { return pt([ot, Oe(s), ...t.map(e => e.\u0275providers)]); }
var ht = (function (s) { return s[s.WithEffects = 0] = "WithEffects", s; })(ht || {});
function ir() { return { \u0275kind: ht.WithEffects, \u0275providers: [dt] }; }
var jt = (() => { class s {
    static forRoot(e) { return { ngModule: s, providers: [Oe(e)] }; }
    static { this.\u0275fac = function (r) { return new (r || s); }; }
    static { this.\u0275mod = h.\u0275\u0275defineNgModule({ type: s }); }
    static { this.\u0275inj = h.\u0275\u0275defineInjector({ providers: [ot] }); }
} return s; })(), ar = (() => { class s {
    static forRoot(e) { return { ngModule: s, providers: [Oe(e)] }; }
    static { this.\u0275fac = function (r) { return new (r || s); }; }
    static { this.\u0275mod = h.\u0275\u0275defineNgModule({ type: s }); }
    static { this.\u0275inj = h.\u0275\u0275defineInjector({ providers: [dt], imports: [jt] }); }
} return s; })();
export { ie as ChangeSetItemFactory, C as ChangeSetOperation, v as ChangeType, ae as ClearCollections, De as CorrelationIdGenerator, I as DataServiceError, pe as DefaultDataService, q as DefaultDataServiceConfig, Be as DefaultDataServiceFactory, Mt as DefaultHttpUrlGenerator, wt as DefaultLogger, Rt as DefaultPersistenceResultHandler, $t as DefaultPluralizer, Ge as ENTITY_CACHE_META_REDUCERS, te as ENTITY_CACHE_NAME, _e as ENTITY_CACHE_NAME_TOKEN, re as ENTITY_CACHE_SELECTOR_TOKEN, We as ENTITY_COLLECTION_META_REDUCERS, Ke as ENTITY_METADATA_TOKEN, F as EntityActionFactory, K as EntityActionGuard, f as EntityCacheAction, qe as EntityCacheDataService, Ut as EntityCacheDispatcher, Xe as EntityCacheEffects, ct as EntityCacheReducerFactory, Se as EntityChangeTrackerBase, J as EntityCollectionCreator, at as EntityCollectionReducerFactory, Ae as EntityCollectionReducerMethods, it as EntityCollectionReducerMethodsFactory, nt as EntityCollectionReducerRegistry, ge as EntityCollectionServiceBase, tt as EntityCollectionServiceElementsFactory, rt as EntityCollectionServiceFactory, ar as EntityDataModule, jt as EntityDataModuleWithoutEffects, He as EntityDataService, j as EntityDefinitionService, Ee as EntityDispatcherBase, Ce as EntityDispatcherDefaultOptions, Me as EntityDispatcherFactory, Ze as EntityEffects, Le as EntityHttpResourceUrls, o as EntityOp, Te as EntitySelectors$Factory, et as EntitySelectorsFactory, fe as EntityServices, kt as EntityServicesBase, st as EntityServicesElements, G as HttpUrlGenerator, Nt as INITIAL_ENTITY_CACHE_STATE, ne as LoadCollections, k as Logger, ce as MergeQuerySet, A as MergeStrategy, me as OP_ERROR, ye as OP_SUCCESS, Qe as PLURAL_NAMES_TOKEN, z as PersistanceCanceled, W as PersistenceResultHandler, H as Pluralizer, Zt as PropsFilterFnFactory, de as SaveEntities, he as SaveEntitiesCancel, ue as SaveEntitiesCanceled, le as SaveEntitiesError, $ as SaveEntitiesSuccess, oe as SetEntityCache, Xt as changeSetItemFactory, Lt as createEmptyEntityCollection, ze as createEntityCacheSelector, Ot as createEntityDefinition, V as defaultSelectId, It as entityCacheSelectorProvider, je as excludeEmptyChangeSetItems, Fe as flattenArgs, er as getGuid, tr as getGuidComb, rr as guidComparer, Ct as makeErrorOp, Pe as makeSuccessOp, Tt as normalizeRoot, Ie as ofEntityOp, xe as ofEntityType, xt as persistOps, sr as provideEntityData, Ve as toUpdateFactory, ir as withEffects };
