import { a as L, b as Q } from "@nf-internal/chunk-5UOPT6NO";
import { a as d } from "@nf-internal/chunk-VJMH5IEE";
import { g as q, i as S, j as f } from "@nf-internal/chunk-VZR6KEPQ";
import { H as z, l as D, m as B, z as u } from "@nf-internal/chunk-STIBVO4O";
import { a as b, b as V } from "@nf-internal/chunk-FJYW2LMB";
import * as i from "@angular/core";
import { InjectionToken as ue, forwardRef as x } from "@angular/core";
import * as g from "@angular/common";
import { CommonModule as pe } from "@angular/common";
import * as a from "@angular/forms";
import { Validators as M, NG_VALUE_ACCESSOR as X, NG_VALIDATORS as W, ReactiveFormsModule as de, FormsModule as me } from "@angular/forms";
import { MaterialModule as fe } from "@rollthecloudinc/material";
import * as Y from "@rollthecloudinc/token";
import { TokenModule as ge } from "@rollthecloudinc/token";
import { Snippet as he, SnippetModule as ve } from "@rollthecloudinc/snippet";
import * as y from "@rollthecloudinc/datasource";
import { Rest as Ce, Datasource as F, DatasourceFormComponent as ye, DatasourcePlugin as be, Dataset as v, DatasourceModule as xe } from "@rollthecloudinc/datasource";
import * as E from "@rollthecloudinc/plugin";
import { Plugin as Z, BasePluginManager as ee, PluginDef as te } from "@rollthecloudinc/plugin";
import * as ie from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin as Me, PublicApiBridgeService as U } from "@rollthecloudinc/bridge";
import { map as c, tap as ne, switchMap as p, take as h, filter as A, scan as H, defaultIfEmpty as Fe, debounceTime as we } from "rxjs/operators";
import * as N from "@rollthecloudinc/dparam";
import { ParamPlugin as je } from "@rollthecloudinc/dparam";
import * as j from "@rollthecloudinc/attributes";
import * as T from "@angular/material/autocomplete";
import * as m from "@angular/material/input";
import * as _ from "@angular/material/select";
import { ContentBinding as De } from "@rollthecloudinc/content";
import { getRouterSelectors as Se } from "@ngrx/router-store";
import * as oe from "@ngrx/store";
import { select as Pe } from "@ngrx/store";
import * as R from "@rollthecloudinc/utils";
function Ie(n, r) { if (n & 1 && (i.\u0275\u0275elementStart(0, "mat-option", 3), i.\u0275\u0275text(1), i.\u0275\u0275elementEnd()), n & 2) {
    let e = r.$implicit;
    i.\u0275\u0275property("value", e), i.\u0275\u0275advance(), i.\u0275\u0275textInterpolate(e);
} }
function Ae(n, r) { if (n & 1 && (i.\u0275\u0275elementStart(0, "mat-option", 5), i.\u0275\u0275text(1), i.\u0275\u0275elementEnd()), n & 2) {
    let e = r.$implicit;
    i.\u0275\u0275property("value", e.value.name), i.\u0275\u0275advance(), i.\u0275\u0275textInterpolate(e.value.title);
} }
function Ge(n, r) { }
var G = new ue("ContextPlugin"), w = class extends Z {
    constructor(r) { super(r), this.global = !1, r && (this.name = this.id, this.baseObject = r.baseObject, this.resolver = r.resolver, this.global = r.global === void 0 ? !1 : r.global, this.internal = r.internal === void 0 ? !1 : r.internal, this.group = r.group !== void 0 ? r.group : void 0, r.editorComponent && (this.editorComponent = r.editorComponent)); }
}, $ = class {
    constructor(r) { this.name = r.name, this.adaptor = r.adaptor, r.plugin && (this.plugin = r.plugin), this.adaptor === "rest" ? this.rest = new Ce(r.rest) : this.adaptor === "snippet" || this.adaptor === "json" ? this.snippet = new he(r.snippet) : this.adaptor === "data" ? this.data = r.data : this.adaptor === "token" ? this.tokens = new Map([...r.tokens]) : this.adaptor === "datasource" && (this.datasource = new F(r.datasource)); }
}, C = class {
    constructor(r) { r && (this.name = r.name); }
}, $e = (() => { class n {
    set settings(e) { this.settings$.next(e); }
    constructor(e, t) { this.fb = e, this.attributeSerializer = t, this.contexts = [], this.settings$ = new D(void 0), this.formGroup = this.fb.group({ name: this.fb.control("", [M.required]) }), this.settingsSub = this.settings$.pipe(c(o => o ? new C(this.attributeSerializer.deserializeAsObject(o)) : void 0)).subscribe(o => { o ? this.formGroup.get("name").setValue(o.name) : this.formGroup.get("name").setValue(""); }), this.onTouched = () => { }; }
    writeValue(e) { e && this.formGroup.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.formGroup.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(e) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275directiveInject(a.UntypedFormBuilder), i.\u0275\u0275directiveInject(j.AttributeSerializerService)); }; }
    static { this.\u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-context-datasource-form"]], inputs: { contexts: "contexts", settings: "settings" }, standalone: !1, features: [i.\u0275\u0275ProvidersFeature([{ provide: X, useExisting: x(() => n), multi: !0 }, { provide: W, useExisting: x(() => n), multi: !0 }])], decls: 6, vars: 2, consts: [[3, "formGroup"], ["required", "", "formControlName", "name"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (t, o) { t & 1 && (i.\u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field")(2, "mat-label"), i.\u0275\u0275text(3, "Context"), i.\u0275\u0275elementEnd(), i.\u0275\u0275elementStart(4, "mat-select", 1), i.\u0275\u0275template(5, Ie, 2, 2, "mat-option", 2), i.\u0275\u0275elementEnd()()()), t & 2 && (i.\u0275\u0275property("formGroup", o.formGroup), i.\u0275\u0275advance(5), i.\u0275\u0275property("ngForOf", o.contexts)); }, dependencies: [g.NgForOf, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, T.MatOption, m.MatFormField, m.MatLabel, _.MatSelect], encapsulation: 2 }); }
} return n; })(), Oe = (() => { class n {
    constructor(e) { this.controlContainer = e, this.contexts = [], this.settings = []; }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-context-datasource"]], inputs: { contexts: "contexts", settings: "settings" }, standalone: !1, decls: 2, vars: 3, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "contexts", "settings"]], template: function (t, o) { t & 1 && (i.\u0275\u0275elementContainerStart(0, 0), i.\u0275\u0275element(1, "classifieds-ui-context-datasource-form", 1), i.\u0275\u0275elementContainerEnd()), t & 2 && (i.\u0275\u0275property("formGroup", o.controlContainer.control), i.\u0275\u0275advance(), i.\u0275\u0275property("contexts", o.contexts)("settings", o.settings)); }, dependencies: [a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, $e], encapsulation: 2 }); }
} return n; })(), Ee = (() => { class n {
    constructor(e, t, o) { this.fb = e, this.controlContainer = t, this.attributeSerializer = o; }
    ngOnInit() { this.controlContainer.control.addControl("adaptor", this.fb.control("datasource", M.required)), this.controlContainer.control.addControl("datasource", this.fb.control("")), this.controlContainer.control.addControl("_proxy", this.fb.control("")), this.proxyControlSub = this.controlContainer.control.get("_proxy").valueChanges.pipe(c(e => e ? new F(V(b({}, e), { settings: this.attributeSerializer.serialize(e.settings, "settings").attributes })) : new F), ne(e => this.controlContainer.control.get("datasource").setValue(e))).subscribe(); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275directiveInject(a.UntypedFormBuilder), i.\u0275\u0275directiveInject(a.ControlContainer), i.\u0275\u0275directiveInject(j.AttributeSerializerService)); }; }
    static { this.\u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-datasource-context-editor"]], viewQuery: function (t, o) { if (t & 1 && i.\u0275\u0275viewQuery(ye, 7), t & 2) {
            let s;
            i.\u0275\u0275queryRefresh(s = i.\u0275\u0275loadQuery()) && (o.datasourceFormComp = s.first);
        } }, standalone: !1, decls: 2, vars: 1, consts: [[3, "formGroup"], ["formControlName", "_proxy"]], template: function (t, o) { t & 1 && (i.\u0275\u0275elementContainerStart(0, 0), i.\u0275\u0275element(1, "classifieds-ui-datasource-form", 1), i.\u0275\u0275elementContainerEnd()), t & 2 && i.\u0275\u0275property("formGroup", o.controlContainer.control); }, dependencies: [a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, y.DatasourceFormComponent], encapsulation: 2 }); }
} return n; })(), Ne = n => { let r = { path: "", arg0: "", arg2: "", arg3: "", arg4: "", arg5: "" }; return new w({ id: "route", name: "route", title: "Route", global: !0, baseObject: r, resolver: n }); }, Te = (n, r) => new Me({ id: "context", title: "Context", build: () => { U.prototype.resolveContext = (e, t) => new Promise(o => { n.getPlugin(e).pipe(p(s => s.resolver.resolve(s, t).pipe(h(1)))).subscribe(s => { o(s); }); }), U.prototype.resolveMergedContext = e => new Promise(t => { r.resolveMerged(e).pipe(ne(o => t(o)), h(1)).subscribe(); }); } }), _e = (n, r) => new je({ id: "context", title: "Context", evalParam: ({ param: e, metadata: t }) => { let o = e.mapping.context && e.mapping.context !== "" ? new $(t.get("contexts").find(s => s.name === e.mapping.context)) : void 0; return o ? n.resolve(o).pipe(h(1), p(s => S(() => e.mapping.value && e.mapping.value !== "", u(s).pipe(c(l => r.generateGenericTokens(Array.isArray(l) ? l[0] : l)), c(l => r.replaceTokens(`[${e.mapping.value}]`, l)), h(1)), u(Array.isArray(s) ? s[0] : s)).pipe(h(1)))) : u(); }, usedContexts: ({ param: e, metadata: t }) => u([e.mapping.context]) }), Re = (n, r) => new be({ id: "context", title: "Context", editor: Oe, fetch: ({ settings: e, metadata: t }) => u(new v).pipe(c(() => new C(r.deserializeAsObject(e))), c(o => t.get("contexts").find(s => s.name === o.name)), p(o => n.resolve(o).pipe(c(s => s instanceof v ? s : new v({ results: Array.isArray(s) ? s : [s] })), h(1)))), getBindings: ({ settings: e, metadata: t }) => u([]).pipe(c(() => new C(r.deserializeAsObject(e))), c(o => [new De({ id: o.name, type: "context" })])) }), ke = n => { let r = { dataset: new v }; return new w({ id: "datasource", name: "datasource", title: "Datasource", baseObject: r, resolver: n, editorComponent: Ee }); }, P = (() => { class n {
    constructor(e) { this.routerStore = e; }
    resolve(e, t) { let { selectCurrentRoute: o } = Se(); return this.routerStore.pipe(Pe(o), c(s => ({ path: `/pages/panelpage/${s.params.panelPageId}` }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(oe.Store)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), J = (() => { class n {
    constructor(e) { this.viewContainerRef = e; }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275directiveInject(i.ViewContainerRef)); }; }
    static { this.\u0275dir = i.\u0275\u0275defineDirective({ type: n, selectors: [["", "classifiedsUiContextEditorHost", ""]], standalone: !1 }); }
} return n; })(), k = (() => { class n extends ee {
    constructor(e, t) { super(e, t); }
    pluginDef() { return u(new te({ name: "context" })); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(E.PluginConfigurationManager), i.\u0275\u0275inject(R.ModuleLoaderService)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), mt = (() => { class n {
    set context(e) { this.context$.next(e); }
    constructor(e, t, o) { this.fb = e, this.componentFactoryResolver = t, this.cpm = o, this.contextForm = this.fb.group({ name: this.fb.control("", M.required), plugin: this.fb.control("", M.required) }), this.context$ = new D(void 0), this.onTouched = () => { }; }
    ngOnInit() { this.contextPlugins = this.cpm.getPlugins().pipe(c(e => new Map(Array.from(e).filter(([t, o], s) => !o.internal).map(([t, o], s) => [o.name, o])))), this.contextForm.get("plugin").valueChanges.pipe(p(e => this.cpm.getPlugin(e))).subscribe(e => { e.editorComponent ? this.renderEditor(e) : this.editorHost.viewContainerRef.clear(); }), this.context$.pipe(A(() => !!this.componentRef)).subscribe(e => { this.componentRef.instance.context = e; }); }
    writeValue(e) { e && this.contextForm.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.contextForm.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.contextForm.disable() : this.contextForm.enable(); }
    validate(e) { return this.contextForm.valid ? null : { invalidForm: { valid: !1, message: "context is invalid" } }; }
    renderEditor(e) { let t = this.componentFactoryResolver.resolveComponentFactory(e.editorComponent), o = this.editorHost.viewContainerRef; o.clear(), this.componentRef = o.createComponent(t), this.componentRef.instance.context = this.context$.value; }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275directiveInject(a.UntypedFormBuilder), i.\u0275\u0275directiveInject(i.ComponentFactoryResolver), i.\u0275\u0275directiveInject(k)); }; }
    static { this.\u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-context-form"]], viewQuery: function (t, o) { if (t & 1 && i.\u0275\u0275viewQuery(J, 7), t & 2) {
            let s;
            i.\u0275\u0275queryRefresh(s = i.\u0275\u0275loadQuery()) && (o.editorHost = s.first);
        } }, inputs: { context: "context" }, standalone: !1, features: [i.\u0275\u0275ProvidersFeature([{ provide: X, useExisting: x(() => n), multi: !0 }, { provide: W, useExisting: x(() => n), multi: !0 }])], decls: 12, vars: 6, consts: [["fxLayout", "column", 3, "formGroup"], ["matInput", "", "formControlName", "name", "placeholder", "Name", "required", ""], ["required", "", "formControlName", "plugin"], [3, "value", 4, "ngFor", "ngForOf"], ["classifiedsUiContextEditorHost", ""], [3, "value"]], template: function (t, o) { t & 1 && (i.\u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field"), i.\u0275\u0275element(2, "input", 1), i.\u0275\u0275elementEnd(), i.\u0275\u0275elementStart(3, "mat-form-field")(4, "mat-label"), i.\u0275\u0275text(5, "Type"), i.\u0275\u0275elementEnd(), i.\u0275\u0275elementStart(6, "mat-select", 2), i.\u0275\u0275template(7, Ae, 2, 2, "mat-option", 3), i.\u0275\u0275pipe(8, "async"), i.\u0275\u0275pipe(9, "keyvalue"), i.\u0275\u0275elementEnd()(), i.\u0275\u0275elementContainerStart(10), i.\u0275\u0275template(11, Ge, 0, 0, "ng-template", 4), i.\u0275\u0275elementContainerEnd(), i.\u0275\u0275elementEnd()), t & 2 && (i.\u0275\u0275property("formGroup", o.contextForm), i.\u0275\u0275advance(7), i.\u0275\u0275property("ngForOf", i.\u0275\u0275pipeBind1(9, 4, i.\u0275\u0275pipeBind1(8, 2, o.contextPlugins)))); }, dependencies: [g.NgForOf, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, T.MatOption, m.MatInput, m.MatFormField, m.MatLabel, _.MatSelect, L, J, g.AsyncPipe, g.KeyValuePipe], encapsulation: 2 }); }
} return n; })(), I = (() => { class n {
    constructor(e) { this.dpm = e; }
    resolve(e, t, o) { return u(new v).pipe(c(() => new F(t)), p(s => this.dpm.getPlugin(s.plugin).pipe(c(l => ({ ds: s, p: l })))), p(({ ds: s, p: l }) => l.fetch({ settings: s.settings, metadata: o })), c(s => s)); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(y.DatasourcePluginManager)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), O = class {
    constructor(r, e) { this.cpm = r, this.rcm = e; }
    resolveGlobals(r = d()) { return this.cpm.getPlugins().pipe(c(e => Array.from(e.values()).filter(t => t.global === !0)), p(e => f(...e.map(t => t.resolver.resolve(t, {}).pipe(c(o => [t.name, o, e.length])))).pipe(H((t, [o, s, l]) => new Map([...t, [`_${o}`, s], ["__len", l]]), new Map([])), A(t => t.size - 1 === +t.get("__len")), c(t => Object.assign({}, ...[...t.entries()].filter(([o, s]) => o !== "__len").map(([o, s]) => ({ [o]: s }))))))); }
    resolveGlobalsSingle(r = d()) { return this.cpm.getPlugins().pipe(c(e => Array.from(e.values()).filter(t => t.global === !0)), p(e => f(...e.map(t => t.resolver.resolve(t, {}).pipe(c(o => [t.name, o])))))); }
    resolveAll(r, e = d()) { return f(...r.map(t => this.resolve(t, e).pipe(c(o => [t.name, Array.isArray(o) ? o.length > 0 ? o[0] : void 0 : o])))).pipe(H((t, [o, s]) => new Map([...t, [o, s]]), new Map), A(t => t.size === r.length), c(t => Object.assign({}, ...[...t.entries()].map(([o, s]) => ({ [o]: s }))))); }
    resolveAllSingle(r, e = d()) { return f(...r.map(t => this.resolve(t, e).pipe(c(o => [t.name, Array.isArray(o) ? o.length > 0 ? o[0] : void 0 : o])))).pipe(c(([t, o]) => [t, o])); }
    resolveMerged(r, e = d()) { return this.rcm.getPlugins().pipe(p(() => this.rcm.add$.pipe(Fe(void 0))), p(() => this.rcm.getPlugins()), p(t => z([...Array.from(t).map(([o, s]) => s.resolve()), this.resolveGlobals(e), r.length === 0 ? u({}) : this.resolveAll(r, e)]).pipe(we(0), c(o => o.reduce((s, l) => b(b({}, s), l), {}))))); }
    resolveMergedSingle(r, e = d()) { return r.length !== 0 ? this.rcm.getPlugins().pipe(p(t => f(...Array.from(t).map(([o, s]) => s.resolveSingle()), this.resolveGlobalsSingle(), this.resolveAllSingle(r)))) : this.rcm.getPlugins().pipe(p(t => f(...Array.from(t).map(([o, s]) => s.resolveSingle()), this.resolveGlobalsSingle()))); }
    resolve(r, e = d()) { return r.plugin ? this.cpm.getPlugin(r.plugin).pipe(p(t => t.resolver.resolve(t, this.getDataObject(r), new Map([["name", r.name]])))) : u(this.getDataObject(r)); }
    getDataObject(r) { switch (r.adaptor) {
        case "rest": return r.rest;
        case "snippet": return r.snippet;
        case "json": return JSON.parse(r.snippet.content);
        case "data": return r.data;
        case "token": return r.tokens;
        case "datasource": return r.datasource;
        default: return;
    } }
}, Ve = (() => { class n extends ee {
    constructor(e, t) { super(e, t), this.add$ = new B(1); }
    pluginDef() { return u(new te({ name: "resolved_context" })); }
    register(e) { let t = this.pluginInstances.has(e.id); super.register(e), t || this.add$.next(void 0); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(E.PluginConfigurationManager), i.\u0275\u0275inject(R.ModuleLoaderService)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Be = (() => { class n extends O {
    constructor(e, t) { super(e, t); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(k), i.\u0275\u0275inject(Ve)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ft = (() => { class n {
    constructor(e, t, o, s, l, re, se, ae, ce) { e.forEach(le => s.register(le)), l.register(Te(s, t)), se.register(_e(t, o)), re.register(Re(t, ae)), s.register(ke(ce)); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(G), i.\u0275\u0275inject(Be), i.\u0275\u0275inject(Y.TokenizerService), i.\u0275\u0275inject(k), i.\u0275\u0275inject(ie.BridgeBuilderPluginManager), i.\u0275\u0275inject(y.DatasourcePluginManager), i.\u0275\u0275inject(N.ParamPluginManager), i.\u0275\u0275inject(j.AttributeSerializerService), i.\u0275\u0275inject(I)); }; }
    static { this.\u0275mod = i.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = i.\u0275\u0275defineInjector({ providers: [{ provide: P, useClass: P }, { provide: I, useClass: I }, { provide: G, useFactory: Ne, multi: !0, deps: [P] }], imports: [pe, de, me, fe, Q, ge, ve, xe] }); }
} return n; })(), gt = (() => { class n {
    constructor(e) { this.contextPlugins = e; }
    getAll(e) { return typeof e > "u" ? this.contextPlugins : e ? this.contextPlugins.filter(t => t.global) : this.contextPlugins.filter(t => !t.global); }
    getAllObjects() { return this.contextPlugins.map(e => e.baseObject); }
    lookupContext(e) { return this.contextPlugins.find(t => t.name === e); }
    register(e) { this.contextPlugins.push(e); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(G)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), K = class extends Z {
    constructor(r) { super(r), this.resolve = r.resolve, this.resolveSingle = r.resolveSingle; }
}, ht = (() => { class n {
    constructor(e) { this.ppm = e; }
    extractContexts(e) { return q(e.map(t => this.ppm.getPlugin(t.mapping.type).pipe(p(o => S(() => !!o && !!o.usedContexts, o ? o.usedContexts ? o.usedContexts({ param: t, metadata: new Map([]) }) : u([]) : u([]), u([])))))).pipe(c(t => t.reduce((o, s) => [...o, ...s.filter(l => !o.includes(l))], []))); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(N.ParamPluginManager)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })();
export { O as BaseInlineContextResolverService, G as CONTEXT_PLUGIN, C as ContextDatasource, Oe as ContextDatasourceComponent, $e as ContextDatasourceFormComponent, mt as ContextFormComponent, gt as ContextManagerService, ft as ContextModule, w as ContextPlugin, k as ContextPluginManager, Ee as DatasourceContextEditorComponent, $ as InlineContext, Be as InlineContextResolverService, ht as ParamContextExtractorService, K as ResolvedContextPlugin, Ve as ResolvedContextPluginManager };
