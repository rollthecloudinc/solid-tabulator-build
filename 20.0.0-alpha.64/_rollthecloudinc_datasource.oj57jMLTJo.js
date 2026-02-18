import { g as B } from "@nf-internal/chunk-KQGCPFC3";
import { H as w, k as V, l as g, z as u } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import * as v from "@angular/common";
import { CommonModule as Y } from "@angular/common";
import * as e from "@angular/core";
import { forwardRef as d } from "@angular/core";
import * as a from "@angular/forms";
import { NG_VALUE_ACCESSOR as D, Validators as $, NG_VALIDATORS as O, ReactiveFormsModule as Z } from "@angular/forms";
import { MaterialModule as ee } from "@rollthecloudinc/material";
import { DurlModule as te } from "@rollthecloudinc/durl";
import * as q from "@angular/material/checkbox";
import * as f from "@angular/material/input";
import { filter as _, switchMap as m, tap as P, map as c, delay as ie, catchError as ne, defaultIfEmpty as re } from "rxjs/operators";
import * as z from "@rollthecloudinc/plugin";
import { BasePluginManager as oe, PluginDef as se, Plugin as ae } from "@rollthecloudinc/plugin";
import * as Q from "@rollthecloudinc/utils";
import * as L from "@angular/material/autocomplete";
import * as U from "@angular/material/select";
import * as y from "@rollthecloudinc/attributes";
import { AttributeValue as le } from "@rollthecloudinc/attributes";
import { ContentBinding as ue } from "@rollthecloudinc/content";
import { Snippet as H } from "@rollthecloudinc/snippet";
import { Param as J } from "@rollthecloudinc/dparam";
import * as K from "@ngrx/data";
import * as W from "@angular/common/http";
function ce(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = r.$implicit;
    e.\u0275\u0275property("value", t.value.id), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.value.title);
} }
function pe(i, r) { }
function me(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = r.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function de(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 9)(1, "mat-form-field")(2, "mat-label"), e.\u0275\u0275text(3, "Binding"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-select", 10), e.\u0275\u0275template(5, me, 2, 2, "mat-option", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(6, "button", 6), e.\u0275\u0275listener("click", function () { let o = e.\u0275\u0275restoreView(t).index, s = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(s.removeBinding(o)); }), e.\u0275\u0275text(7, "Remove"), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = r.index, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("formGroupName", t), e.\u0275\u0275advance(5), e.\u0275\u0275property("ngForOf", n.bindableOptions);
} }
var Te = (() => { class i {
    constructor(t) { this.fb = t, this.onChange = () => { }, this.onTouched = () => { }, this.formGroup = this.fb.group({ query: [""], trackBy: [""], valueMapping: [""], labelMapping: [""], idMapping: [""], multiple: [""], limit: [""] }), this.formGroup.valueChanges.subscribe(n => { this.onChange(n); }); }
    ngOnChanges(t) { t.datasourceOptions && t.datasourceOptions.currentValue && this.formGroup.patchValue(this.datasourceOptions, { emitEvent: !1 }); }
    writeValue(t) { console.log("Datasource Options Write Value", t), t && this.formGroup.patchValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.onChange = t; }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    setFillContent(t) { this.fillContent = t; }
    fill() { if (this.fillContent) {
        let t = this.fillContent.query, n = this.fillContent.trackBy, o = this.fillContent.valueMapping, s = this.fillContent.labelMapping, l = this.fillContent.idMapping, p = this.fillContent.multiple, h = this.fillContent.limit;
        this.formGroup.patchValue({ query: t, trackBy: n, valueMapping: o, labelMapping: s, idMapping: l, multiple: p, limit: h });
    } }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(a.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-datasource-options"]], inputs: { datasourceOptions: "datasourceOptions" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: D, useExisting: d(() => i), multi: !0 }]), e.\u0275\u0275NgOnChangesFeature], decls: 16, vars: 1, consts: [[3, "formGroup"], ["matInput", "", "formControlName", "query", "placeholder", "Query"], ["matInput", "", "formControlName", "trackBy", "placeholder", "Track By"], ["matInput", "", "formControlName", "idMapping", "placeholder", "Id"], ["matInput", "", "formControlName", "valueMapping", "placeholder", "Value"], ["matInput", "", "formControlName", "labelMapping", "placeholder", "Label"], ["formControlName", "multiple"], ["matInput", "", "formControlName", "limit", "placeholder", "Limit"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field"), e.\u0275\u0275element(2, "input", 1), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-form-field"), e.\u0275\u0275element(4, "input", 2), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(5, "mat-form-field"), e.\u0275\u0275element(6, "input", 3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(7, "mat-form-field"), e.\u0275\u0275element(8, "input", 4), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(9, "mat-form-field"), e.\u0275\u0275element(10, "input", 5), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(11, "div")(12, "mat-checkbox", 6), e.\u0275\u0275text(13, "Multiple"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(14, "mat-form-field"), e.\u0275\u0275element(15, "input", 7), e.\u0275\u0275elementEnd()()), n & 2 && e.\u0275\u0275property("formGroup", o.formGroup); }, dependencies: [a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, q.MatCheckbox, f.MatInput, f.MatFormField], encapsulation: 2 }); }
} return i; })(), j = (() => { class i {
    constructor(t) { this.viewContainerRef = t; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(e.ViewContainerRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["", "classifiedsUiDatasourceRendererHost", ""]], standalone: !1 }); }
} return i; })(), E = (() => { class i extends oe {
    constructor(t, n) { super(t, n); }
    pluginDef() { return u(new se({ name: "datasource" })); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(z.PluginConfigurationManager), e.\u0275\u0275inject(Q.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), ke = (() => { class i {
    set datasource(t) { this.datasource$.next(t); }
    get bindings() { return this.formGroup.get("renderer").get("bindings"); }
    constructor(t, n, o) { this.fb = t, this.componentFactoryResolver = n, this.dpm = o, this.datasources$ = this.dpm.getPlugins(), this.formGroup = this.fb.group({ plugin: this.fb.control("", [$.required]), settings: this.fb.control(""), renderer: this.fb.group({ type: this.fb.control("pane"), bindings: this.fb.array([]) }) }), this.bindableOptions = [], this.contexts = [], this.settings$ = new g([]), this.componentRef$ = new g(void 0), this.datasource$ = new g(void 0), this.afterViewInit$ = new V, this.contextForwardingSub = this.componentRef$.pipe(_(s => !!s)).subscribe(s => { s.instance.contexts = this.contexts, s.instance.settings = this.settings$.value; }), this.rendererSub = w([this.formGroup.get("plugin").valueChanges, this.afterViewInit$]).pipe(m(([s, l]) => s && s !== "" ? this.dpm.getPlugin(s) : u(void 0))).subscribe(s => { s && this.renderPlugin(s); }), this.settingsSub = w([this.componentRef$, this.settings$]).pipe(_(([s, l]) => !!s)).subscribe(([s, l]) => { s.instance.settings = l; }), this.datasourceSub = this.datasource$.pipe(P(s => { setTimeout(() => this.settings$.next(s ? s.settings : [])); })).subscribe(s => { this.formGroup.get("renderer").get("bindings").clear(), s ? (this.formGroup.get("plugin").setValue(s.plugin), this.formGroup.get("renderer").get("type").setValue("pane"), s.renderer && s.renderer.bindings && s.renderer.bindings.forEach(l => { this.addBinding(l); })) : (this.formGroup.get("plugin").setValue(""), this.formGroup.get("renderer").get("type").setValue("pane")); }), this.onTouched = () => { }; }
    ngOnInit() { }
    ngAfterViewInit() { this.afterViewInit$.next(void 0); }
    renderPlugin(t) { let n = this.componentFactoryResolver.resolveComponentFactory(t.editor), o = this.datasourceHost.viewContainerRef; o.clear(), this.componentRef$.next(o.createComponent(n)); }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    addBinding(t) { this.bindings.push(this.fb.group({ type: this.fb.control("pane", $.required), id: this.fb.control(t ? t.id : "", $.required) })); }
    removeBinding(t) { this.bindings.removeAt(t); }
    fill() { this.formGroup.patchValue({ plugin: "data" }), setTimeout(() => { this.fillContent && this.componentRef$.value.instance.setFillContent(this.fillContent), this.componentRef$.value.instance.fill(); }, 500); }
    setFillContent(t) { this.fillContent = t; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(e.ComponentFactoryResolver), e.\u0275\u0275directiveInject(E)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-datasource-form"]], viewQuery: function (n, o) { if (n & 1 && e.\u0275\u0275viewQuery(j, 7), n & 2) {
            let s;
            e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (o.datasourceHost = s.first);
        } }, inputs: { bindableOptions: "bindableOptions", contexts: "contexts", datasource: "datasource" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: D, useExisting: d(() => i), multi: !0 }, { provide: O, useExisting: d(() => i), multi: !0 }])], decls: 16, vars: 7, consts: [[3, "formGroup"], ["required", "", "formControlName", "plugin"], [3, "value", 4, "ngFor", "ngForOf"], ["classifiedsUiDatasourceRendererHost", ""], ["formGroupName", "renderer"], ["formArrayName", "bindings"], ["type", "button", 3, "click"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "value"], [3, "formGroupName"], ["required", "", "formControlName", "id"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field")(2, "mat-label"), e.\u0275\u0275text(3, "Datasource"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-select", 1), e.\u0275\u0275template(5, ce, 2, 2, "mat-option", 2), e.\u0275\u0275pipe(6, "async"), e.\u0275\u0275pipe(7, "keyvalue"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementContainerStart(8), e.\u0275\u0275template(9, pe, 0, 0, "ng-template", 3), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementStart(10, "div", 4)(11, "div", 5)(12, "button", 6), e.\u0275\u0275listener("click", function () { return o.addBinding(); }), e.\u0275\u0275text(13, "Add Binding"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(14, "div"), e.\u0275\u0275template(15, de, 8, 2, "div", 7), e.\u0275\u0275elementEnd()()()()), n & 2 && (e.\u0275\u0275property("formGroup", o.formGroup), e.\u0275\u0275advance(5), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(7, 5, e.\u0275\u0275pipeBind1(6, 3, o.datasources$))), e.\u0275\u0275advance(10), e.\u0275\u0275property("ngForOf", o.bindings.controls)); }, dependencies: [v.NgForOf, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, a.FormGroupName, a.FormArrayName, L.MatOption, f.MatFormField, f.MatLabel, U.MatSelect, j, v.AsyncPipe, v.KeyValuePipe], encapsulation: 2 }); }
} return i; })(), T = (() => { class i {
    set settings(t) { this.settings$.next(t); }
    constructor(t, n) { this.fb = t, this.attributeSerializer = n, this.settings$ = new g(void 0), this.fillContent = [{ id: 1, name: "Batman" }, { id: 2, name: "Superman" }, { id: 3, name: "Spiderman" }], this.formGroup = this.fb.group({ data: this.fb.control("") }), this.settingsSub = this.settings$.pipe(c(o => o ? this.attributeSerializer.deserializeAsObject(o) : void 0)).subscribe(o => { o && o.data ? this.formGroup.get("data").setValue(o.data) : this.formGroup.get("data").setValue(""); }), this.onTouched = () => { }; }
    ngOnInit() { }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    fill() { this.formGroup.patchValue({ data: JSON.stringify(this.fillContent) }); }
    setFillContent(t) { this.fillContent = t; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(y.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-data-source-form"]], inputs: { settings: "settings" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: D, useExisting: d(() => i), multi: !0 }, { provide: O, useExisting: d(() => i), multi: !0 }])], decls: 2, vars: 1, consts: [[3, "formGroup"], ["formControlName", "data", "cols", "60", "rows", "20"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 0), e.\u0275\u0275element(1, "textarea", 1), e.\u0275\u0275elementEnd()), n & 2 && e.\u0275\u0275property("formGroup", o.formGroup); }, dependencies: [a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName], encapsulation: 2 }); }
} return i; })(), fe = (() => { class i {
    constructor(t) { this.controlContainer = t, this.settings = []; }
    fill() { this.datasourceForm.fill(); }
    setFillContent(t) { this.datasourceForm.setFillContent(t); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-data-datasource"]], viewQuery: function (n, o) { if (n & 1 && e.\u0275\u0275viewQuery(T, 5), n & 2) {
            let s;
            e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (o.datasourceForm = s.first);
        } }, inputs: { settings: "settings" }, standalone: !1, decls: 2, vars: 2, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "settings"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-data-source-form", 1), e.\u0275\u0275elementContainerEnd()), n & 2 && (e.\u0275\u0275property("formGroup", o.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("settings", o.settings)); }, dependencies: [a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, T], encapsulation: 2 }); }
} return i; })(), C = class extends ae {
    constructor(r) { super(r), r && (this.editor = r.editor, this.fetch = r.fetch, this.getBindings = r.getBindings ? r.getBindings : () => u([]), this.editorOptions = r.editorOptions ? r.editorOptions : () => u(new x)); }
}, N = class {
    constructor(r) { r && (this.url = r.url, this.method = r.method ? r.method : void 0, r.renderer !== void 0 && (this.renderer = new F(r.renderer)), r.params !== void 0 && (this.params = r.params.map(t => new J(t))), r.body && (this.body = new H(r.body))); }
}, F = class {
    constructor(r) { r && (this.type = r.type, this.query = r.query, this.trackBy = r.trackBy, r.data !== void 0 && (this.data = new H(r.data)), r.bindings !== void 0 && (this.bindings = r.bindings.map(t => new ue(t)))); }
}, b = class {
    constructor(r) { this.results = [], r && (this.results = r.results); }
}, I = class {
    constructor(r) { r && (this.query = r.query, this.trackBy = r.trackBy, this.idMapping = r.idMapping, this.labelMapping = r.labelMapping, this.valueMapping = r.valueMapping, this.multiple = r.multiple, this.limit = r.limit); }
}, k = class {
    constructor(r) { this.settings = [], this.params = [], r && (this.plugin = r.plugin, r.renderer && (this.renderer = new F(r.renderer)), r.settings && (this.settings = r.settings.map(t => new le(t))), r.params && (this.params = r.params.map(t => new J(t)))); }
}, x = class {
    constructor(r) { this.fullscreen = !1, r && (this.fullscreen = r.fullscreen); }
}, he = (() => { class i {
    set settings(t) { this.settings$.next(t); }
    constructor(t, n) { this.fb = t, this.attributeSerializer = n, this.settings$ = new g(void 0), this.formGroup = this.fb.group({ data: this.fb.control("") }), this.settingsSub = this.settings$.pipe(c(o => o ? this.attributeSerializer.deserializeAsObject(o) : void 0)).subscribe(o => { o && o.data; }), this.onTouched = () => { }; }
    ngOnInit() { }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(y.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-datasource-source-form"]], inputs: { settings: "settings" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: D, useExisting: d(() => i), multi: !0 }, { provide: O, useExisting: d(() => i), multi: !0 }])], decls: 2, vars: 0, template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "p"), e.\u0275\u0275text(1, "Datasource"), e.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return i; })(), ge = (() => { class i {
    constructor(t) { this.controlContainer = t, this.settings = []; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-datasource-source"]], inputs: { settings: "settings" }, standalone: !1, decls: 2, vars: 2, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "settings"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-datasource-source-form", 1), e.\u0275\u0275elementContainerEnd()), n & 2 && (e.\u0275\u0275property("formGroup", o.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("settings", o.settings)); }, dependencies: [a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, he], encapsulation: 2 }); }
} return i; })(), ve = i => new C({ id: "data", title: "Data", editor: fe, fetch: ({ settings: r }) => u(new b).pipe(c(() => i.deserializeAsObject(r)), c(t => new b({ results: JSON.parse(t.data) }))) }), be = i => new C({ id: "datasource_datasource", title: "Datasource", editor: ge, fetch: ({ settings: r }) => u(new b) }), Ae = (() => { class i {
    constructor(t, n) { [ve(n), be(n)].forEach(o => t.register(o)); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(E), e.\u0275\u0275inject(y.AttributeSerializerService)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [Y, Z, ee, te] }); }
} return i; })(), Re = (() => { class i {
    constructor(t, n) { this.config = t, this.http = n, this.cache = new Map; }
    getData(t) { return this.cache.has(t) ? u(this.cache.get(t)).pipe(ie(0)) : this.http.get(`${t}`).pipe(ne(() => u([])), c(n => Array.isArray(n) ? n : [n]), P(n => this.cache.set(t, n))); }
    postData({ url: t, body: n = "" }) { return this.http.post(`${t}`, n).pipe(c(o => Array.isArray(o) ? o : [o])); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(K.DefaultDataServiceConfig), e.\u0275\u0275inject(W.HttpClient)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), qe = new I({ query: "", trackBy: "", idMapping: "", labelMapping: "", valueMapping: "", multiple: !1, limit: 0 }), Pe = new N({ url: "", renderer: { type: "", data: { content: "", contentType: "" }, query: "", trackBy: "", bindings: [] }, params: [] }), A = class {
    constructor(r) { r && (this.label = r.label, this.dataItem = r.dataItem, r.value !== void 0 && (this.value = r.value)); }
}, R = class {
    constructor(r) { r && (this.value = r.value, this.label = r.label, this.id = r.id, this.multiple = r.multiple, this.limit = r.limit); }
}, ze = (() => { class i {
    constructor(t, n) { this.dpm = t, this.attributeSerializer = n; }
    evalDatasource({ datasource: t, metadata: n, datasources: o }) { return u(t).pipe(m(s => this.dpm.getPlugin(s.plugin).pipe(c(l => [s, l]))), m(([s, l]) => l.fetch({ settings: s.settings, metadata: n, datasource: s, datasources: o }).pipe(c(p => [s, p]))), m(([s, l]) => B(s.renderer.bindings.reduce((p, h) => [...p, ...o && o.has(h.id) ? [u(o.get(h.id))] : []], [])).pipe(m(p => p.reduce((h, S) => h.pipe(m(G => this.dpm.getPlugin(S.plugin).pipe(c(M => [M, G, S]))), m(([G, M, X]) => G.fetch({ settings: S.settings, dataset: M, metadata: n, datasource: X, datasources: o }))), u(l))), c(p => p), re(l)))); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(E), e.\u0275\u0275inject(y.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })();
export { fe as DataDatasourceComponent, T as DataSourceFormComponent, b as Dataset, k as Datasource, Re as DatasourceApiService, x as DatasourceEditorOptions, ze as DatasourceEvaluator, ke as DatasourceFormComponent, Ae as DatasourceModule, I as DatasourceOptions, Te as DatasourceOptionsComponent, C as DatasourcePlugin, E as DatasourcePluginManager, j as DatasourceRendererHostDirective, ge as DatasourceSourceComponent, he as DatasourceSourceFormComponent, F as Renderer, N as Rest, R as SelectMapping, A as SelectOption, qe as mockDatasourceOptions, Pe as mockRest };
