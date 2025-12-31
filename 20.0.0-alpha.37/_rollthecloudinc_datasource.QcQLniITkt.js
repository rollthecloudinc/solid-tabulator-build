import { g as j } from "@nf-internal/chunk-VZR6KEPQ";
import { H as M, k as V, l as h, z as l } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import * as g from "@angular/common";
import { CommonModule as X } from "@angular/common";
import * as e from "@angular/core";
import { forwardRef as d } from "@angular/core";
import * as s from "@angular/forms";
import { NG_VALUE_ACCESSOR as S, Validators as $, NG_VALIDATORS as E, ReactiveFormsModule as Y } from "@angular/forms";
import { MaterialModule as Z } from "@rollthecloudinc/material";
import { DurlModule as ee } from "@rollthecloudinc/durl";
import * as R from "@angular/material/checkbox";
import * as f from "@angular/material/input";
import { filter as _, switchMap as m, tap as P, map as c, delay as te, catchError as ie, defaultIfEmpty as ne } from "rxjs/operators";
import * as q from "@rollthecloudinc/plugin";
import { BasePluginManager as re, PluginDef as oe, Plugin as se } from "@rollthecloudinc/plugin";
import * as z from "@rollthecloudinc/utils";
import * as L from "@angular/material/autocomplete";
import * as U from "@angular/material/select";
import * as b from "@rollthecloudinc/attributes";
import { AttributeValue as ae } from "@rollthecloudinc/attributes";
import { ContentBinding as ue } from "@rollthecloudinc/content";
import { Snippet as H } from "@rollthecloudinc/snippet";
import { Param as Q } from "@rollthecloudinc/dparam";
import * as J from "@ngrx/data";
import * as K from "@angular/common/http";
function le(i, n) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = n.$implicit;
    e.\u0275\u0275property("value", t.value.id), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.value.title);
} }
function ce(i, n) { }
function pe(i, n) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = n.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function me(i, n) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 9)(1, "mat-form-field")(2, "mat-label"), e.\u0275\u0275text(3, "Binding"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-select", 10), e.\u0275\u0275template(5, pe, 2, 2, "mat-option", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(6, "button", 6), e.\u0275\u0275listener("click", function () { let o = e.\u0275\u0275restoreView(t).index, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.removeBinding(o)); }), e.\u0275\u0275text(7, "Remove"), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = n.index, r = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("formGroupName", t), e.\u0275\u0275advance(5), e.\u0275\u0275property("ngForOf", r.bindableOptions);
} }
var Te = (() => { class i {
    constructor(t) { this.fb = t, this.onChange = () => { }, this.onTouched = () => { }, this.formGroup = this.fb.group({ query: [""], trackBy: [""], valueMapping: [""], labelMapping: [""], idMapping: [""], multiple: [""], limit: [""] }), this.formGroup.valueChanges.subscribe(r => { this.onChange(r); }); }
    ngOnChanges(t) { t.datasourceOptions && t.datasourceOptions.currentValue && this.formGroup.patchValue(this.datasourceOptions, { emitEvent: !1 }); }
    writeValue(t) { console.log("Datasource Options Write Value", t), t && this.formGroup.patchValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.onChange = t; }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    static { this.\u0275fac = function (r) { return new (r || i)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-datasource-options"]], inputs: { datasourceOptions: "datasourceOptions" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: S, useExisting: d(() => i), multi: !0 }]), e.\u0275\u0275NgOnChangesFeature], decls: 16, vars: 1, consts: [[3, "formGroup"], ["matInput", "", "formControlName", "query", "placeholder", "Query"], ["matInput", "", "formControlName", "trackBy", "placeholder", "Track By"], ["matInput", "", "formControlName", "idMapping", "placeholder", "Id"], ["matInput", "", "formControlName", "valueMapping", "placeholder", "Value"], ["matInput", "", "formControlName", "labelMapping", "placeholder", "Label"], ["formControlName", "multiple"], ["matInput", "", "formControlName", "limit", "placeholder", "Limit"]], template: function (r, o) { r & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field"), e.\u0275\u0275element(2, "input", 1), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-form-field"), e.\u0275\u0275element(4, "input", 2), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(5, "mat-form-field"), e.\u0275\u0275element(6, "input", 3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(7, "mat-form-field"), e.\u0275\u0275element(8, "input", 4), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(9, "mat-form-field"), e.\u0275\u0275element(10, "input", 5), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(11, "div")(12, "mat-checkbox", 6), e.\u0275\u0275text(13, "Multiple"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(14, "mat-form-field"), e.\u0275\u0275element(15, "input", 7), e.\u0275\u0275elementEnd()()), r & 2 && e.\u0275\u0275property("formGroup", o.formGroup); }, dependencies: [s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, R.MatCheckbox, f.MatInput, f.MatFormField], encapsulation: 2 }); }
} return i; })(), B = (() => { class i {
    constructor(t) { this.viewContainerRef = t; }
    static { this.\u0275fac = function (r) { return new (r || i)(e.\u0275\u0275directiveInject(e.ViewContainerRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["", "classifiedsUiDatasourceRendererHost", ""]], standalone: !1 }); }
} return i; })(), O = (() => { class i extends re {
    constructor(t, r) { super(t, r); }
    pluginDef() { return l(new oe({ name: "datasource" })); }
    static { this.\u0275fac = function (r) { return new (r || i)(e.\u0275\u0275inject(q.PluginConfigurationManager), e.\u0275\u0275inject(z.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), Ae = (() => { class i {
    set datasource(t) { this.datasource$.next(t); }
    get bindings() { return this.formGroup.get("renderer").get("bindings"); }
    constructor(t, r, o) { this.fb = t, this.componentFactoryResolver = r, this.dpm = o, this.datasources$ = this.dpm.getPlugins(), this.formGroup = this.fb.group({ plugin: this.fb.control("", [$.required]), settings: this.fb.control(""), renderer: this.fb.group({ type: this.fb.control("pane"), bindings: this.fb.array([]) }) }), this.bindableOptions = [], this.contexts = [], this.settings$ = new h([]), this.componentRef$ = new h(void 0), this.datasource$ = new h(void 0), this.afterViewInit$ = new V, this.contextForwardingSub = this.componentRef$.pipe(_(a => !!a)).subscribe(a => { a.instance.contexts = this.contexts, a.instance.settings = this.settings$.value; }), this.rendererSub = M([this.formGroup.get("plugin").valueChanges, this.afterViewInit$]).pipe(m(([a, u]) => a && a !== "" ? this.dpm.getPlugin(a) : l(void 0))).subscribe(a => { a && this.renderPlugin(a); }), this.settingsSub = M([this.componentRef$, this.settings$]).pipe(_(([a, u]) => !!a)).subscribe(([a, u]) => { a.instance.settings = u; }), this.datasourceSub = this.datasource$.pipe(P(a => { setTimeout(() => this.settings$.next(a ? a.settings : [])); })).subscribe(a => { this.formGroup.get("renderer").get("bindings").clear(), a ? (this.formGroup.get("plugin").setValue(a.plugin), this.formGroup.get("renderer").get("type").setValue("pane"), a.renderer && a.renderer.bindings && a.renderer.bindings.forEach(u => { this.addBinding(u); })) : (this.formGroup.get("plugin").setValue(""), this.formGroup.get("renderer").get("type").setValue("pane")); }), this.onTouched = () => { }; }
    ngOnInit() { }
    ngAfterViewInit() { this.afterViewInit$.next(void 0); }
    renderPlugin(t) { let r = this.componentFactoryResolver.resolveComponentFactory(t.editor), o = this.datasourceHost.viewContainerRef; o.clear(), this.componentRef$.next(o.createComponent(r)); }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    addBinding(t) { this.bindings.push(this.fb.group({ type: this.fb.control("pane", $.required), id: this.fb.control(t ? t.id : "", $.required) })); }
    removeBinding(t) { this.bindings.removeAt(t); }
    static { this.\u0275fac = function (r) { return new (r || i)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(e.ComponentFactoryResolver), e.\u0275\u0275directiveInject(O)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-datasource-form"]], viewQuery: function (r, o) { if (r & 1 && e.\u0275\u0275viewQuery(B, 7), r & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.datasourceHost = a.first);
        } }, inputs: { bindableOptions: "bindableOptions", contexts: "contexts", datasource: "datasource" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: S, useExisting: d(() => i), multi: !0 }, { provide: E, useExisting: d(() => i), multi: !0 }])], decls: 16, vars: 7, consts: [[3, "formGroup"], ["required", "", "formControlName", "plugin"], [3, "value", 4, "ngFor", "ngForOf"], ["classifiedsUiDatasourceRendererHost", ""], ["formGroupName", "renderer"], ["formArrayName", "bindings"], ["type", "button", 3, "click"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "value"], [3, "formGroupName"], ["required", "", "formControlName", "id"]], template: function (r, o) { r & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field")(2, "mat-label"), e.\u0275\u0275text(3, "Datasource"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-select", 1), e.\u0275\u0275template(5, le, 2, 2, "mat-option", 2), e.\u0275\u0275pipe(6, "async"), e.\u0275\u0275pipe(7, "keyvalue"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementContainerStart(8), e.\u0275\u0275template(9, ce, 0, 0, "ng-template", 3), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementStart(10, "div", 4)(11, "div", 5)(12, "button", 6), e.\u0275\u0275listener("click", function () { return o.addBinding(); }), e.\u0275\u0275text(13, "Add Binding"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(14, "div"), e.\u0275\u0275template(15, me, 8, 2, "div", 7), e.\u0275\u0275elementEnd()()()()), r & 2 && (e.\u0275\u0275property("formGroup", o.formGroup), e.\u0275\u0275advance(5), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(7, 5, e.\u0275\u0275pipeBind1(6, 3, o.datasources$))), e.\u0275\u0275advance(10), e.\u0275\u0275property("ngForOf", o.bindings.controls)); }, dependencies: [g.NgForOf, s.NgControlStatus, s.NgControlStatusGroup, s.RequiredValidator, s.FormGroupDirective, s.FormControlName, s.FormGroupName, s.FormArrayName, L.MatOption, f.MatFormField, f.MatLabel, U.MatSelect, B, g.AsyncPipe, g.KeyValuePipe], encapsulation: 2 }); }
} return i; })(), de = (() => { class i {
    set settings(t) { this.settings$.next(t); }
    constructor(t, r) { this.fb = t, this.attributeSerializer = r, this.settings$ = new h(void 0), this.formGroup = this.fb.group({ data: this.fb.control("") }), this.settingsSub = this.settings$.pipe(c(o => o ? this.attributeSerializer.deserializeAsObject(o) : void 0)).subscribe(o => { o && o.data ? this.formGroup.get("data").setValue(o.data) : this.formGroup.get("data").setValue(""); }), this.onTouched = () => { }; }
    ngOnInit() { }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    static { this.\u0275fac = function (r) { return new (r || i)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(b.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-data-source-form"]], inputs: { settings: "settings" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: S, useExisting: d(() => i), multi: !0 }, { provide: E, useExisting: d(() => i), multi: !0 }])], decls: 2, vars: 1, consts: [[3, "formGroup"], ["formControlName", "data", "cols", "60", "rows", "20"]], template: function (r, o) { r & 1 && (e.\u0275\u0275elementStart(0, "div", 0), e.\u0275\u0275element(1, "textarea", 1), e.\u0275\u0275elementEnd()), r & 2 && e.\u0275\u0275property("formGroup", o.formGroup); }, dependencies: [s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName], encapsulation: 2 }); }
} return i; })(), fe = (() => { class i {
    constructor(t) { this.controlContainer = t, this.settings = []; }
    static { this.\u0275fac = function (r) { return new (r || i)(e.\u0275\u0275directiveInject(s.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-data-datasource"]], inputs: { settings: "settings" }, standalone: !1, decls: 2, vars: 2, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "settings"]], template: function (r, o) { r & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-data-source-form", 1), e.\u0275\u0275elementContainerEnd()), r & 2 && (e.\u0275\u0275property("formGroup", o.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("settings", o.settings)); }, dependencies: [s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, de], encapsulation: 2 }); }
} return i; })(), C = class extends se {
    constructor(n) { super(n), n && (this.editor = n.editor, this.fetch = n.fetch, this.getBindings = n.getBindings ? n.getBindings : () => l([]), this.editorOptions = n.editorOptions ? n.editorOptions : () => l(new x)); }
}, I = class {
    constructor(n) { n && (this.url = n.url, this.method = n.method ? n.method : void 0, n.renderer !== void 0 && (this.renderer = new D(n.renderer)), n.params !== void 0 && (this.params = n.params.map(t => new Q(t))), n.body && (this.body = new H(n.body))); }
}, D = class {
    constructor(n) { n && (this.type = n.type, this.query = n.query, this.trackBy = n.trackBy, n.data !== void 0 && (this.data = new H(n.data)), n.bindings !== void 0 && (this.bindings = n.bindings.map(t => new ue(t)))); }
}, v = class {
    constructor(n) { this.results = [], n && (this.results = n.results); }
}, N = class {
    constructor(n) { n && (this.query = n.query, this.trackBy = n.trackBy, this.idMapping = n.idMapping, this.labelMapping = n.labelMapping, this.valueMapping = n.valueMapping, this.multiple = n.multiple, this.limit = n.limit); }
}, T = class {
    constructor(n) { this.settings = [], this.params = [], n && (this.plugin = n.plugin, n.renderer && (this.renderer = new D(n.renderer)), n.settings && (this.settings = n.settings.map(t => new ae(t))), n.params && (this.params = n.params.map(t => new Q(t)))); }
}, x = class {
    constructor(n) { this.fullscreen = !1, n && (this.fullscreen = n.fullscreen); }
}, he = (() => { class i {
    set settings(t) { this.settings$.next(t); }
    constructor(t, r) { this.fb = t, this.attributeSerializer = r, this.settings$ = new h(void 0), this.formGroup = this.fb.group({ data: this.fb.control("") }), this.settingsSub = this.settings$.pipe(c(o => o ? this.attributeSerializer.deserializeAsObject(o) : void 0)).subscribe(o => { o && o.data; }), this.onTouched = () => { }; }
    ngOnInit() { }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    static { this.\u0275fac = function (r) { return new (r || i)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(b.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-datasource-source-form"]], inputs: { settings: "settings" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: S, useExisting: d(() => i), multi: !0 }, { provide: E, useExisting: d(() => i), multi: !0 }])], decls: 2, vars: 0, template: function (r, o) { r & 1 && (e.\u0275\u0275elementStart(0, "p"), e.\u0275\u0275text(1, "Datasource"), e.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return i; })(), ge = (() => { class i {
    constructor(t) { this.controlContainer = t, this.settings = []; }
    static { this.\u0275fac = function (r) { return new (r || i)(e.\u0275\u0275directiveInject(s.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-datasource-source"]], inputs: { settings: "settings" }, standalone: !1, decls: 2, vars: 2, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "settings"]], template: function (r, o) { r & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-datasource-source-form", 1), e.\u0275\u0275elementContainerEnd()), r & 2 && (e.\u0275\u0275property("formGroup", o.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("settings", o.settings)); }, dependencies: [s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, he], encapsulation: 2 }); }
} return i; })(), ve = i => new C({ id: "data", title: "Data", editor: fe, fetch: ({ settings: n }) => l(new v).pipe(c(() => i.deserializeAsObject(n)), c(t => new v({ results: JSON.parse(t.data) }))) }), be = i => new C({ id: "datasource_datasource", title: "Datasource", editor: ge, fetch: ({ settings: n }) => l(new v) }), ke = (() => { class i {
    constructor(t, r) { [ve(r), be(r)].forEach(o => t.register(o)); }
    static { this.\u0275fac = function (r) { return new (r || i)(e.\u0275\u0275inject(O), e.\u0275\u0275inject(b.AttributeSerializerService)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [X, Y, Z, ee] }); }
} return i; })(), Re = (() => { class i {
    constructor(t, r) { this.config = t, this.http = r, this.cache = new Map; }
    getData(t) { return this.cache.has(t) ? l(this.cache.get(t)).pipe(te(0)) : this.http.get(`${t}`).pipe(ie(() => l([])), c(r => Array.isArray(r) ? r : [r]), P(r => this.cache.set(t, r))); }
    postData({ url: t, body: r = "" }) { return this.http.post(`${t}`, r).pipe(c(o => Array.isArray(o) ? o : [o])); }
    static { this.\u0275fac = function (r) { return new (r || i)(e.\u0275\u0275inject(J.DefaultDataServiceConfig), e.\u0275\u0275inject(K.HttpClient)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), Pe = new N({ query: "", trackBy: "", idMapping: "", labelMapping: "", valueMapping: "", multiple: !1, limit: 0 }), qe = new I({ url: "", renderer: { type: "", data: { content: "", contentType: "" }, query: "", trackBy: "", bindings: [] }, params: [] }), A = class {
    constructor(n) { n && (this.label = n.label, this.dataItem = n.dataItem, n.value !== void 0 && (this.value = n.value)); }
}, k = class {
    constructor(n) { n && (this.value = n.value, this.label = n.label, this.id = n.id, this.multiple = n.multiple, this.limit = n.limit); }
}, ze = (() => { class i {
    constructor(t, r) { this.dpm = t, this.attributeSerializer = r; }
    evalDatasource({ datasource: t, metadata: r, datasources: o }) { return l(t).pipe(m(a => this.dpm.getPlugin(a.plugin).pipe(c(u => [a, u]))), m(([a, u]) => u.fetch({ settings: a.settings, metadata: r, datasource: a, datasources: o }).pipe(c(p => [a, p]))), m(([a, u]) => j(a.renderer.bindings.reduce((p, y) => [...p, ...o && o.has(y.id) ? [l(o.get(y.id))] : []], [])).pipe(m(p => p.reduce((y, F) => y.pipe(m(G => this.dpm.getPlugin(F.plugin).pipe(c(w => [w, G, F]))), m(([G, w, W]) => G.fetch({ settings: F.settings, dataset: w, metadata: r, datasource: W, datasources: o }))), l(u))), c(p => p), ne(u)))); }
    static { this.\u0275fac = function (r) { return new (r || i)(e.\u0275\u0275inject(O), e.\u0275\u0275inject(b.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })();
export { fe as DataDatasourceComponent, de as DataSourceFormComponent, v as Dataset, T as Datasource, Re as DatasourceApiService, x as DatasourceEditorOptions, ze as DatasourceEvaluator, Ae as DatasourceFormComponent, ke as DatasourceModule, N as DatasourceOptions, Te as DatasourceOptionsComponent, C as DatasourcePlugin, O as DatasourcePluginManager, B as DatasourceRendererHostDirective, ge as DatasourceSourceComponent, he as DatasourceSourceFormComponent, D as Renderer, I as Rest, k as SelectMapping, A as SelectOption, Pe as mockDatasourceOptions, qe as mockRest };
