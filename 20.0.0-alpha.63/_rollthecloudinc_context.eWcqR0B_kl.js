import { a as d } from "@nf-internal/chunk-VJMH5IEE";
import { g as q, i as S, j as f } from "@nf-internal/chunk-KQGCPFC3";
import { H as z, l as D, m as B, z as u } from "@nf-internal/chunk-STIBVO4O";
import { a as b, b as V } from "@nf-internal/chunk-FJYW2LMB";
import * as i from "@angular/core";
import { InjectionToken as ce, forwardRef as x } from "@angular/core";
import * as g from "@angular/common";
import { CommonModule as le } from "@angular/common";
import * as a from "@angular/forms";
import { Validators as M, NG_VALUE_ACCESSOR as J, NG_VALIDATORS as K, ReactiveFormsModule as ue, FormsModule as pe } from "@angular/forms";
import { MaterialModule as de } from "@rollthecloudinc/material";
import * as X from "@rollthecloudinc/token";
import { TokenModule as me } from "@rollthecloudinc/token";
import { Snippet as fe, SnippetModule as ge } from "@rollthecloudinc/snippet";
import * as y from "@rollthecloudinc/datasource";
import { Rest as he, Datasource as F, DatasourceFormComponent as ve, DatasourcePlugin as Ce, Dataset as v, DatasourceModule as ye } from "@rollthecloudinc/datasource";
import * as E from "@rollthecloudinc/plugin";
import { Plugin as W, BasePluginManager as Y, PluginDef as Z } from "@rollthecloudinc/plugin";
import * as ee from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin as be, PublicApiBridgeService as L } from "@rollthecloudinc/bridge";
import { map as c, tap as te, switchMap as p, take as h, filter as A, scan as Q, defaultIfEmpty as xe, debounceTime as Me } from "rxjs/operators";
import * as N from "@rollthecloudinc/dparam";
import { ParamPlugin as Fe } from "@rollthecloudinc/dparam";
import * as j from "@rollthecloudinc/attributes";
import * as T from "@angular/material/autocomplete";
import * as m from "@angular/material/input";
import * as _ from "@angular/material/select";
import { ContentBinding as we } from "@rollthecloudinc/content";
import { getRouterSelectors as je } from "@ngrx/router-store";
import * as ie from "@ngrx/store";
import { select as De } from "@ngrx/store";
import * as R from "@rollthecloudinc/utils";
function Se(n, o) { if (n & 1 && (i.\u0275\u0275elementStart(0, "mat-option", 3), i.\u0275\u0275text(1), i.\u0275\u0275elementEnd()), n & 2) {
    let e = o.$implicit;
    i.\u0275\u0275property("value", e), i.\u0275\u0275advance(), i.\u0275\u0275textInterpolate(e);
} }
function Pe(n, o) { if (n & 1 && (i.\u0275\u0275elementStart(0, "mat-option", 5), i.\u0275\u0275text(1), i.\u0275\u0275elementEnd()), n & 2) {
    let e = o.$implicit;
    i.\u0275\u0275property("value", e.value.name), i.\u0275\u0275advance(), i.\u0275\u0275textInterpolate(e.value.title);
} }
function Ie(n, o) { }
var G = new ce("ContextPlugin"), w = class extends W {
    constructor(o) { super(o), this.global = !1, o && (this.name = this.id, this.baseObject = o.baseObject, this.resolver = o.resolver, this.global = o.global === void 0 ? !1 : o.global, this.internal = o.internal === void 0 ? !1 : o.internal, this.group = o.group !== void 0 ? o.group : void 0, o.editorComponent && (this.editorComponent = o.editorComponent)); }
}, $ = class {
    constructor(o) { this.name = o.name, this.adaptor = o.adaptor, o.plugin && (this.plugin = o.plugin), this.adaptor === "rest" ? this.rest = new he(o.rest) : this.adaptor === "snippet" || this.adaptor === "json" ? this.snippet = new fe(o.snippet) : this.adaptor === "data" ? this.data = o.data : this.adaptor === "token" ? this.tokens = new Map([...o.tokens]) : this.adaptor === "datasource" && (this.datasource = new F(o.datasource)); }
}, C = class {
    constructor(o) { o && (this.name = o.name); }
}, Ae = (() => { class n {
    set settings(e) { this.settings$.next(e); }
    constructor(e, t) { this.fb = e, this.attributeSerializer = t, this.contexts = [], this.settings$ = new D(void 0), this.formGroup = this.fb.group({ name: this.fb.control("", [M.required]) }), this.settingsSub = this.settings$.pipe(c(r => r ? new C(this.attributeSerializer.deserializeAsObject(r)) : void 0)).subscribe(r => { r ? this.formGroup.get("name").setValue(r.name) : this.formGroup.get("name").setValue(""); }), this.onTouched = () => { }; }
    writeValue(e) { e && this.formGroup.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.formGroup.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(e) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275directiveInject(a.UntypedFormBuilder), i.\u0275\u0275directiveInject(j.AttributeSerializerService)); }; }
    static { this.\u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-context-datasource-form"]], inputs: { contexts: "contexts", settings: "settings" }, standalone: !1, features: [i.\u0275\u0275ProvidersFeature([{ provide: J, useExisting: x(() => n), multi: !0 }, { provide: K, useExisting: x(() => n), multi: !0 }])], decls: 6, vars: 2, consts: [[3, "formGroup"], ["required", "", "formControlName", "name"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (t, r) { t & 1 && (i.\u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field")(2, "mat-label"), i.\u0275\u0275text(3, "Context"), i.\u0275\u0275elementEnd(), i.\u0275\u0275elementStart(4, "mat-select", 1), i.\u0275\u0275template(5, Se, 2, 2, "mat-option", 2), i.\u0275\u0275elementEnd()()()), t & 2 && (i.\u0275\u0275property("formGroup", r.formGroup), i.\u0275\u0275advance(5), i.\u0275\u0275property("ngForOf", r.contexts)); }, dependencies: [g.NgForOf, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, T.MatOption, m.MatFormField, m.MatLabel, _.MatSelect], encapsulation: 2 }); }
} return n; })(), Ge = (() => { class n {
    constructor(e) { this.controlContainer = e, this.contexts = [], this.settings = []; }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-context-datasource"]], inputs: { contexts: "contexts", settings: "settings" }, standalone: !1, decls: 2, vars: 3, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "contexts", "settings"]], template: function (t, r) { t & 1 && (i.\u0275\u0275elementContainerStart(0, 0), i.\u0275\u0275element(1, "classifieds-ui-context-datasource-form", 1), i.\u0275\u0275elementContainerEnd()), t & 2 && (i.\u0275\u0275property("formGroup", r.controlContainer.control), i.\u0275\u0275advance(), i.\u0275\u0275property("contexts", r.contexts)("settings", r.settings)); }, dependencies: [a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, Ae], encapsulation: 2 }); }
} return n; })(), $e = (() => { class n {
    constructor(e, t, r) { this.fb = e, this.controlContainer = t, this.attributeSerializer = r; }
    ngOnInit() { this.controlContainer.control.addControl("adaptor", this.fb.control("datasource", M.required)), this.controlContainer.control.addControl("datasource", this.fb.control("")), this.controlContainer.control.addControl("_proxy", this.fb.control("")), this.proxyControlSub = this.controlContainer.control.get("_proxy").valueChanges.pipe(c(e => e ? new F(V(b({}, e), { settings: this.attributeSerializer.serialize(e.settings, "settings").attributes })) : new F), te(e => this.controlContainer.control.get("datasource").setValue(e))).subscribe(); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275directiveInject(a.UntypedFormBuilder), i.\u0275\u0275directiveInject(a.ControlContainer), i.\u0275\u0275directiveInject(j.AttributeSerializerService)); }; }
    static { this.\u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-datasource-context-editor"]], viewQuery: function (t, r) { if (t & 1 && i.\u0275\u0275viewQuery(ve, 7), t & 2) {
            let s;
            i.\u0275\u0275queryRefresh(s = i.\u0275\u0275loadQuery()) && (r.datasourceFormComp = s.first);
        } }, standalone: !1, decls: 2, vars: 1, consts: [[3, "formGroup"], ["formControlName", "_proxy"]], template: function (t, r) { t & 1 && (i.\u0275\u0275elementContainerStart(0, 0), i.\u0275\u0275element(1, "classifieds-ui-datasource-form", 1), i.\u0275\u0275elementContainerEnd()), t & 2 && i.\u0275\u0275property("formGroup", r.controlContainer.control); }, dependencies: [a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, y.DatasourceFormComponent], encapsulation: 2 }); }
} return n; })(), Oe = n => { let o = { path: "", arg0: "", arg2: "", arg3: "", arg4: "", arg5: "" }; return new w({ id: "route", name: "route", title: "Route", global: !0, baseObject: o, resolver: n }); }, Ee = (n, o) => new be({ id: "context", title: "Context", build: () => { L.prototype.resolveContext = (e, t) => new Promise(r => { n.getPlugin(e).pipe(p(s => s.resolver.resolve(s, t).pipe(h(1)))).subscribe(s => { r(s); }); }), L.prototype.resolveMergedContext = e => new Promise(t => { o.resolveMerged(e).pipe(te(r => t(r)), h(1)).subscribe(); }); } }), Ne = (n, o) => new Fe({ id: "context", title: "Context", evalParam: ({ param: e, metadata: t }) => { let r = e.mapping.context && e.mapping.context !== "" ? new $(t.get("contexts").find(s => s.name === e.mapping.context)) : void 0; return r ? n.resolve(r).pipe(h(1), p(s => S(() => e.mapping.value && e.mapping.value !== "", u(s).pipe(c(l => o.generateGenericTokens(Array.isArray(l) ? l[0] : l)), c(l => o.replaceTokens(`[${e.mapping.value}]`, l)), h(1)), u(Array.isArray(s) ? s[0] : s)).pipe(h(1)))) : u(); }, usedContexts: ({ param: e, metadata: t }) => u([e.mapping.context]) }), Te = (n, o) => new Ce({ id: "context", title: "Context", editor: Ge, fetch: ({ settings: e, metadata: t }) => u(new v).pipe(c(() => new C(o.deserializeAsObject(e))), c(r => t.get("contexts").find(s => s.name === r.name)), p(r => n.resolve(r).pipe(c(s => s instanceof v ? s : new v({ results: Array.isArray(s) ? s : [s] })), h(1)))), getBindings: ({ settings: e, metadata: t }) => u([]).pipe(c(() => new C(o.deserializeAsObject(e))), c(r => [new we({ id: r.name, type: "context" })])) }), _e = n => { let o = { dataset: new v }; return new w({ id: "datasource", name: "datasource", title: "Datasource", baseObject: o, resolver: n, editorComponent: $e }); }, P = (() => { class n {
    constructor(e) { this.routerStore = e; }
    resolve(e, t) { let { selectCurrentRoute: r } = je(); return this.routerStore.pipe(De(r), c(s => ({ path: `/pages/panelpage/${s.params.panelPageId}` }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(ie.Store)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), U = (() => { class n {
    constructor(e) { this.viewContainerRef = e; }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275directiveInject(i.ViewContainerRef)); }; }
    static { this.\u0275dir = i.\u0275\u0275defineDirective({ type: n, selectors: [["", "classifiedsUiContextEditorHost", ""]], standalone: !1 }); }
} return n; })(), k = (() => { class n extends Y {
    constructor(e, t) { super(e, t); }
    pluginDef() { return u(new Z({ name: "context" })); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(E.PluginConfigurationManager), i.\u0275\u0275inject(R.ModuleLoaderService)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), lt = (() => { class n {
    set context(e) { this.context$.next(e); }
    constructor(e, t, r) { this.fb = e, this.componentFactoryResolver = t, this.cpm = r, this.contextForm = this.fb.group({ name: this.fb.control("", M.required), plugin: this.fb.control("", M.required) }), this.context$ = new D(void 0), this.onTouched = () => { }; }
    ngOnInit() { this.contextPlugins = this.cpm.getPlugins().pipe(c(e => new Map(Array.from(e).filter(([t, r], s) => !r.internal).map(([t, r], s) => [r.name, r])))), this.contextForm.get("plugin").valueChanges.pipe(p(e => this.cpm.getPlugin(e))).subscribe(e => { e.editorComponent ? this.renderEditor(e) : this.editorHost.viewContainerRef.clear(); }), this.context$.pipe(A(() => !!this.componentRef)).subscribe(e => { this.componentRef.instance.context = e; }); }
    writeValue(e) { e && this.contextForm.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.contextForm.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.contextForm.disable() : this.contextForm.enable(); }
    validate(e) { return this.contextForm.valid ? null : { invalidForm: { valid: !1, message: "context is invalid" } }; }
    renderEditor(e) { let t = this.componentFactoryResolver.resolveComponentFactory(e.editorComponent), r = this.editorHost.viewContainerRef; r.clear(), this.componentRef = r.createComponent(t), this.componentRef.instance.context = this.context$.value; }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275directiveInject(a.UntypedFormBuilder), i.\u0275\u0275directiveInject(i.ComponentFactoryResolver), i.\u0275\u0275directiveInject(k)); }; }
    static { this.\u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-context-form"]], viewQuery: function (t, r) { if (t & 1 && i.\u0275\u0275viewQuery(U, 7), t & 2) {
            let s;
            i.\u0275\u0275queryRefresh(s = i.\u0275\u0275loadQuery()) && (r.editorHost = s.first);
        } }, inputs: { context: "context" }, standalone: !1, features: [i.\u0275\u0275ProvidersFeature([{ provide: J, useExisting: x(() => n), multi: !0 }, { provide: K, useExisting: x(() => n), multi: !0 }])], decls: 12, vars: 6, consts: [["fxLayout", "column", 3, "formGroup"], ["matInput", "", "formControlName", "name", "placeholder", "Name", "required", ""], ["required", "", "formControlName", "plugin"], [3, "value", 4, "ngFor", "ngForOf"], ["classifiedsUiContextEditorHost", ""], [3, "value"]], template: function (t, r) { t & 1 && (i.\u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field"), i.\u0275\u0275element(2, "input", 1), i.\u0275\u0275elementEnd(), i.\u0275\u0275elementStart(3, "mat-form-field")(4, "mat-label"), i.\u0275\u0275text(5, "Type"), i.\u0275\u0275elementEnd(), i.\u0275\u0275elementStart(6, "mat-select", 2), i.\u0275\u0275template(7, Pe, 2, 2, "mat-option", 3), i.\u0275\u0275pipe(8, "async"), i.\u0275\u0275pipe(9, "keyvalue"), i.\u0275\u0275elementEnd()(), i.\u0275\u0275elementContainerStart(10), i.\u0275\u0275template(11, Ie, 0, 0, "ng-template", 4), i.\u0275\u0275elementContainerEnd(), i.\u0275\u0275elementEnd()), t & 2 && (i.\u0275\u0275property("formGroup", r.contextForm), i.\u0275\u0275advance(7), i.\u0275\u0275property("ngForOf", i.\u0275\u0275pipeBind1(9, 4, i.\u0275\u0275pipeBind1(8, 2, r.contextPlugins)))); }, dependencies: [g.NgForOf, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, T.MatOption, m.MatInput, m.MatFormField, m.MatLabel, _.MatSelect, U, g.AsyncPipe, g.KeyValuePipe], encapsulation: 2 }); }
} return n; })(), I = (() => { class n {
    constructor(e) { this.dpm = e; }
    resolve(e, t, r) { return u(new v).pipe(c(() => new F(t)), p(s => this.dpm.getPlugin(s.plugin).pipe(c(l => ({ ds: s, p: l })))), p(({ ds: s, p: l }) => l.fetch({ settings: s.settings, metadata: r })), c(s => s)); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(y.DatasourcePluginManager)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), O = class {
    constructor(o, e) { this.cpm = o, this.rcm = e; }
    resolveGlobals(o = d()) { return this.cpm.getPlugins().pipe(c(e => Array.from(e.values()).filter(t => t.global === !0)), p(e => f(...e.map(t => t.resolver.resolve(t, {}).pipe(c(r => [t.name, r, e.length])))).pipe(Q((t, [r, s, l]) => new Map([...t, [`_${r}`, s], ["__len", l]]), new Map([])), A(t => t.size - 1 === +t.get("__len")), c(t => Object.assign({}, ...[...t.entries()].filter(([r, s]) => r !== "__len").map(([r, s]) => ({ [r]: s }))))))); }
    resolveGlobalsSingle(o = d()) { return this.cpm.getPlugins().pipe(c(e => Array.from(e.values()).filter(t => t.global === !0)), p(e => f(...e.map(t => t.resolver.resolve(t, {}).pipe(c(r => [t.name, r])))))); }
    resolveAll(o, e = d()) { return f(...o.map(t => this.resolve(t, e).pipe(c(r => [t.name, Array.isArray(r) ? r.length > 0 ? r[0] : void 0 : r])))).pipe(Q((t, [r, s]) => new Map([...t, [r, s]]), new Map), A(t => t.size === o.length), c(t => Object.assign({}, ...[...t.entries()].map(([r, s]) => ({ [r]: s }))))); }
    resolveAllSingle(o, e = d()) { return f(...o.map(t => this.resolve(t, e).pipe(c(r => [t.name, Array.isArray(r) ? r.length > 0 ? r[0] : void 0 : r])))).pipe(c(([t, r]) => [t, r])); }
    resolveMerged(o, e = d()) { return this.rcm.getPlugins().pipe(p(() => this.rcm.add$.pipe(xe(void 0))), p(() => this.rcm.getPlugins()), p(t => z([...Array.from(t).map(([r, s]) => s.resolve()), this.resolveGlobals(e), o.length === 0 ? u({}) : this.resolveAll(o, e)]).pipe(Me(0), c(r => r.reduce((s, l) => b(b({}, s), l), {}))))); }
    resolveMergedSingle(o, e = d()) { return o.length !== 0 ? this.rcm.getPlugins().pipe(p(t => f(...Array.from(t).map(([r, s]) => s.resolveSingle()), this.resolveGlobalsSingle(), this.resolveAllSingle(o)))) : this.rcm.getPlugins().pipe(p(t => f(...Array.from(t).map(([r, s]) => s.resolveSingle()), this.resolveGlobalsSingle()))); }
    resolve(o, e = d()) { return o.plugin ? this.cpm.getPlugin(o.plugin).pipe(p(t => t.resolver.resolve(t, this.getDataObject(o), new Map([["name", o.name]])))) : u(this.getDataObject(o)); }
    getDataObject(o) { switch (o.adaptor) {
        case "rest": return o.rest;
        case "snippet": return o.snippet;
        case "json": return JSON.parse(o.snippet.content);
        case "data": return o.data;
        case "token": return o.tokens;
        case "datasource": return o.datasource;
        case "form": return o.data;
        default: return;
    } }
}, Re = (() => { class n extends Y {
    constructor(e, t) { super(e, t), this.add$ = new B(1); }
    pluginDef() { return u(new Z({ name: "resolved_context" })); }
    register(e) { let t = this.pluginInstances.has(e.id); super.register(e), t || this.add$.next(void 0); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(E.PluginConfigurationManager), i.\u0275\u0275inject(R.ModuleLoaderService)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ke = (() => { class n extends O {
    constructor(e, t) { super(e, t); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(k), i.\u0275\u0275inject(Re)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ut = (() => { class n {
    constructor(e, t, r, s, l, ne, re, oe, se) { e.forEach(ae => s.register(ae)), l.register(Ee(s, t)), re.register(Ne(t, r)), ne.register(Te(t, oe)), s.register(_e(se)); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(G), i.\u0275\u0275inject(ke), i.\u0275\u0275inject(X.TokenizerService), i.\u0275\u0275inject(k), i.\u0275\u0275inject(ee.BridgeBuilderPluginManager), i.\u0275\u0275inject(y.DatasourcePluginManager), i.\u0275\u0275inject(N.ParamPluginManager), i.\u0275\u0275inject(j.AttributeSerializerService), i.\u0275\u0275inject(I)); }; }
    static { this.\u0275mod = i.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = i.\u0275\u0275defineInjector({ providers: [{ provide: P, useClass: P }, { provide: I, useClass: I }, { provide: G, useFactory: Oe, multi: !0, deps: [P] }], imports: [le, ue, pe, de, me, ge, ye] }); }
} return n; })(), pt = (() => { class n {
    constructor(e) { this.contextPlugins = e; }
    getAll(e) { return typeof e > "u" ? this.contextPlugins : e ? this.contextPlugins.filter(t => t.global) : this.contextPlugins.filter(t => !t.global); }
    getAllObjects() { return this.contextPlugins.map(e => e.baseObject); }
    lookupContext(e) { return this.contextPlugins.find(t => t.name === e); }
    register(e) { this.contextPlugins.push(e); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(G)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), H = class extends W {
    constructor(o) { super(o), this.resolve = o.resolve, this.resolveSingle = o.resolveSingle; }
}, dt = (() => { class n {
    constructor(e) { this.ppm = e; }
    extractContexts(e) { return q(e.map(t => this.ppm.getPlugin(t.mapping.type).pipe(p(r => S(() => !!r && !!r.usedContexts, r ? r.usedContexts ? r.usedContexts({ param: t, metadata: new Map([]) }) : u([]) : u([]), u([])))))).pipe(c(t => t.reduce((r, s) => [...r, ...s.filter(l => !r.includes(l))], []))); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(N.ParamPluginManager)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })();
export { O as BaseInlineContextResolverService, G as CONTEXT_PLUGIN, C as ContextDatasource, Ge as ContextDatasourceComponent, Ae as ContextDatasourceFormComponent, lt as ContextFormComponent, pt as ContextManagerService, ut as ContextModule, w as ContextPlugin, k as ContextPluginManager, $e as DatasourceContextEditorComponent, $ as InlineContext, ke as InlineContextResolverService, dt as ParamContextExtractorService, H as ResolvedContextPlugin, Re as ResolvedContextPluginManager };
