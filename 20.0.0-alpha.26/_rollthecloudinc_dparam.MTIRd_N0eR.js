import { a as K } from "@nf-internal/chunk-3FGMCB2V";
import { g as C, i as h } from "@nf-internal/chunk-VZR6KEPQ";
import { H as S, P as E, k as F, l as c, vb as j, z as u } from "@nf-internal/chunk-STIBVO4O";
import { a as x, f as z } from "@nf-internal/chunk-FJYW2LMB";
import * as e from "@angular/core";
import { forwardRef as g } from "@angular/core";
import * as T from "@rollthecloudinc/plugin";
import { Plugin as J, BasePluginManager as H, PluginDef as Q } from "@rollthecloudinc/plugin";
var L = z(K(), 1);
import { map as p, switchMap as V, filter as k, tap as M, debounceTime as W, delay as X, defaultIfEmpty as Y } from "rxjs/operators";
import * as a from "@angular/forms";
import { Validators as D, NG_VALUE_ACCESSOR as _, NG_VALIDATORS as A, FormsModule as Z, ReactiveFormsModule as ee } from "@angular/forms";
import * as q from "@rollthecloudinc/utils";
import * as l from "@angular/common";
import { CommonModule as te } from "@angular/common";
import * as N from "@angular/material/autocomplete";
import * as B from "@angular/material/checkbox";
import * as m from "@angular/material/input";
import * as G from "@angular/material/select";
import { MaterialModule as ie } from "@rollthecloudinc/material";
import * as R from "@rollthecloudinc/token";
function re(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 10), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = s.$implicit;
    e.\u0275\u0275property("value", t.value.id), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.value.title);
} }
function ne(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 10), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = s.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function se(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field", 2)(1, "mat-label"), e.\u0275\u0275text(2, "Context"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-select", 11), e.\u0275\u0275template(4, ne, 2, 2, "mat-option", 4), e.\u0275\u0275elementEnd()()), r & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(4), e.\u0275\u0275property("ngForOf", t.contexts);
} }
function ae(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div", 12)(1, "mat-checkbox", 13), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()()), r & 2) {
    let t = s.index, i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("formGroupName", t), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(i.flagsAsArray[t]);
} }
function oe(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div", 1)(1, "div"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-form-field", 2)(4, "mat-label"), e.\u0275\u0275text(5, "Type"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(6, "mat-select", 3), e.\u0275\u0275template(7, re, 2, 2, "mat-option", 4), e.\u0275\u0275pipe(8, "async"), e.\u0275\u0275pipe(9, "keyvalue"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275template(10, se, 5, 1, "mat-form-field", 5), e.\u0275\u0275elementStart(11, "mat-form-field", 2), e.\u0275\u0275element(12, "input", 6), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(13, "mat-form-field", 2), e.\u0275\u0275element(14, "input", 7), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(15, "div", 8), e.\u0275\u0275template(16, ae, 3, 2, "div", 9), e.\u0275\u0275elementEnd()()), r & 2) {
    let t = s.$implicit, i = s.index, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("formGroup", t), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(n.paramName(i)), e.\u0275\u0275advance(5), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(9, 7, e.\u0275\u0275pipeBind1(8, 5, n.paramPlugins$))), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngIf", t.get("mapping").get("type").value == "context"), e.\u0275\u0275advance(6), e.\u0275\u0275property("ngForOf", t.get("flags").controls);
} }
function le(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 4), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = s.$implicit;
    e.\u0275\u0275property("value", t.value.id), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.value.title);
} }
var v = class extends J {
    constructor(s) { super(s), s && (this.evalParam = s.evalParam, s.condition && (this.condition = s.condition), s.usedContexts && (this.usedContexts = s.usedContexts)); }
}, pe = () => new v({ id: "static", title: "Static", evalParam: ({ param: r, metadata: s }) => u(r.mapping.value) }), me = r => new v({ id: "inputparam", title: "Input Param", evalParam: ({ param: s, metadata: t }) => u(s.mapping.value).pipe(p(i => t.has("inputparams") && t.get("inputparams").has(i) ? t.get("inputparams").get(i) : void 0), V(i => h(() => i !== void 0, i !== void 0 ? r.paramValue(i, t) : u(s.mapping.testValue), u(s.mapping.testValue)))) }), O = (() => { class r extends H {
    constructor(t, i) { super(t, i); }
    pluginDef() { return u(new Q({ name: "param" })); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(T.PluginConfigurationManager), e.\u0275\u0275inject(q.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), ue = (() => { class r {
    set params(t) { console.log('Input "params" set:', t), this.params$.next(t); }
    set paramValues(t) { console.log('Input "paramValues" set:', t), this.paramValues$.next(t || []); }
    constructor(t, i) { this.fb = t, this.ppm = i, this.contexts = [], this.params$ = new c({}), this.paramValues$ = new c([]), this.init$ = new F, this.formArray = this.fb.array([]), this.paramPlugins$ = this.ppm.getPlugins(), this.flags = new Map, this.savedParams = new Map, this.paramIndexes = new Map, this.onTouched = () => { }, this.flags.set("page", "Page"), this.flags.set("limit", "Limit"), this.flags.set("offset", "Offset"), this.flags.set("searchString", "Search String"), S([this.params$, this.paramValues$, this.init$]).pipe(k(([n, o]) => !!n && !!o), M(([n, o]) => { console.log("params$ emitted value:", n), console.log("paramValues$.value (current):", o); let f = new Map(this.paramIndexes); this.formArray.clear(), this.paramIndexes.clear(); let $ = 0; for (let d in n)
        console.log("Processing param:", d), Array.isArray(n[d]) ? n[d].forEach(U => this.buildParams(U, $++, f)) : n[d].indexOf(":") === 0 && this.buildParams(n[d], $++, f); })).subscribe(); }
    ngOnInit() { this.init$.next(void 0); }
    writeValue(t) { t && this.formArray.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formArray.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formArray.disable() : this.formArray.enable(); }
    validate(t) { return this.formArray.valid ? null : this.formArray.errors; }
    buildParams(t, i, n) { console.log(`Building param: ${t}, index: ${i}`), this.paramIndexes.set(t, i); let o = this.fb.group({ mapping: this.fb.group({ type: this.fb.control("", D.required), value: this.fb.control("", D.required), testValue: this.fb.control(""), context: this.fb.control("") }), flags: this.fb.array(this.flagsAsArray.map(f => this.fb.group({ name: f, enabled: this.fb.control(!1) }))) }); this.formArray.push(o), this.savedParams.has(t) ? o.setValue(this.savedParams.get(t)) : i < this.paramValues$.value.length && Array.from(n).findIndex(([$, d]) => d === i) === -1 && o.setValue(this.paramValues$.value[i]); }
    paramName(t) { let i = 0; for (let n in this.params$.value)
        if (Array.isArray(this.params$.value[n]))
            for (let o = 0; o < this.params$.value[n].length; o++) {
                if (t === i)
                    return this.params$.value[n][o];
                i++;
            }
        else if (this.params$.value[n].indexOf(":") === 0) {
            if (i === t)
                return this.params$.value[n];
            i++;
        } }
    get flagsAsArray() { return Array.from(this.flags.keys()); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(O)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-params-form"]], inputs: { contexts: "contexts", params: "params", paramValues: "paramValues" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: _, useExisting: g(() => r), multi: !0 }, { provide: A, useExisting: g(() => r), multi: !0 }])], decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["formGroupName", "mapping"], ["required", "", "formControlName", "type"], [3, "value", 4, "ngFor", "ngForOf"], ["formGroupName", "mapping", 4, "ngIf"], ["matInput", "", "formControlName", "value", "placeholder", "value", "required", ""], ["matInput", "", "formControlName", "testValue", "placeholder", "Test Value", "required", ""], ["formArrayName", "flags"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "context"], [3, "formGroupName"], ["formControlName", "enabled"]], template: function (i, n) { i & 1 && e.\u0275\u0275template(0, oe, 17, 9, "div", 0), i & 2 && e.\u0275\u0275property("ngForOf", n.formArray.controls); }, dependencies: [l.NgForOf, l.NgIf, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, a.FormGroupName, a.FormArrayName, N.MatOption, B.MatCheckbox, m.MatInput, m.MatFormField, m.MatLabel, G.MatSelect, l.AsyncPipe, l.KeyValuePipe], encapsulation: 2 }); }
} return r; })(), ce = (() => { class r {
    set settings(t) { this.settings$.next(t); }
    constructor(t) { this.fb = t, this.contexts = [], this.settings$ = new c(void 0), this.afterViewInit$ = new F, this.paramValues$ = new c([]), this.formGroup = this.fb.group({ paramsString: this.fb.control(""), params: this.fb.control([]) }), this.paramsStringChangeSub = this.formGroup.get("paramsString").valueChanges.pipe(W(500)).subscribe(i => { let n = L.default.parse("?" + i); this.paramsParsed = n; }), this.settingsSub = this.settings$.pipe(M(i => { i && this.formGroup.get("paramsString").setValue(i.paramsString ? i.paramsString : ""); })).subscribe(), this.settingsParamsSub = S([this.settings$, this.formGroup.get("paramsString").valueChanges]).pipe(k(([i]) => i !== void 0), X(1), M(([i]) => this.paramValues$.next(i.params))).subscribe(), this.onTouched = () => { }; }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : this.formGroup.errors; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(a.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["druid-params-querystring"]], inputs: { contexts: "contexts", settings: "settings" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: _, useExisting: g(() => r), multi: !0 }, { provide: A, useExisting: g(() => r), multi: !0 }])], decls: 6, vars: 4, consts: [[3, "formGroup"], [1, "params-container"], ["matInput", "", "placeholder", "Params", "formControlName", "paramsString"], ["formControlName", "params", 3, "params", "paramValues", "contexts"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "mat-form-field"), e.\u0275\u0275element(4, "input", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275element(5, "classifieds-ui-params-form", 3), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275property("formGroup", n.formGroup), e.\u0275\u0275advance(5), e.\u0275\u0275property("params", n.paramsParsed)("paramValues", n.paramValues$.value)("contexts", n.contexts)); }, dependencies: [a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, m.MatInput, m.MatFormField, ue], encapsulation: 2 }); }
} return r; })(), y = class {
    constructor(s) { s && (this.mapping = new w(s.mapping), s.flags !== void 0 && (this.flags = s.flags.map(t => new I(t)))); }
}, w = class {
    constructor(s) { s && (this.type = s.type, this.value = s.value, this.testValue = s.testValue, this.context = s.context); }
}, I = class {
    constructor(s) { s && (this.name = s.name, this.enabled = s.enabled); }
}, P = class {
    constructor(s) { s && (this.plugin = s.plugin, this.settings = s.settings ? new b(s.settings) : new b); }
}, b = class {
    constructor(s) { s && (this.paramsString = s.paramsString, s.params && Array.isArray(s.params) && (this.params = s.params.map(t => new y(t)))); }
}, Ve = (() => { class r {
    set title(t) { this.title$.next(t); }
    set plugins(t) { this.plugins$.next(t); }
    set instance(t) { this.instance$.next(t); }
    constructor(t) { this.fb = t, this.plugins$ = new c([]), this.title$ = new c("Plugin"), this.instance$ = new c(new P), this.instanceForm = this.fb.group({ plugin: this.fb.control(""), settings: this.fb.control("") }), this.instanceSub = this.instance$.pipe(E(i => !!i), j(i => { this.instanceForm.get("plugin").setValue(i.plugin); })).subscribe(), this.onTouched = () => { }; }
    writeValue(t) { t && this.instanceForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.instanceForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.instanceForm.disable() : this.instanceForm.enable(); }
    validate(t) { return this.instanceForm.valid ? null : this.instanceForm.errors; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(a.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["druid-params-plugin-instance"]], inputs: { title: "title", plugins: "plugins", instance: "instance" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: _, useExisting: g(() => r), multi: !0 }, { provide: A, useExisting: g(() => r), multi: !0 }])], decls: 10, vars: 10, consts: [[3, "formGroup"], ["required", "", "formControlName", "plugin"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "settings", 3, "settings"], [3, "value"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field")(2, "mat-label"), e.\u0275\u0275text(3), e.\u0275\u0275pipe(4, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(5, "mat-select", 1), e.\u0275\u0275template(6, le, 2, 2, "mat-option", 2), e.\u0275\u0275pipe(7, "async"), e.\u0275\u0275pipe(8, "keyvalue"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275element(9, "druid-params-querystring", 3), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formGroup", n.instanceForm), e.\u0275\u0275advance(3), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(4, 4, n.title$)), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(8, 8, e.\u0275\u0275pipeBind1(7, 6, n.plugins$))), e.\u0275\u0275advance(3), e.\u0275\u0275property("settings", n.instance$.value.settings)); }, dependencies: [l.NgForOf, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, N.MatOption, m.MatFormField, m.MatLabel, G.MatSelect, ce, l.AsyncPipe, l.KeyValuePipe], encapsulation: 2 }); }
} return r; })(), fe = (() => { class r {
    constructor(t, i) { this.paramPluginManager = t, this.tokenizerService = i; }
    paramValue(t, i) { return this.paramPluginManager.getPlugins().pipe(p(n => Array.from(n).map(([o, f]) => f)), p(n => n.find(o => o.condition && o.condition({ param: t, metadata: i }) || !o.condition && o.id === t.mapping.type)), V(n => h(() => !!n, n ? n.evalParam({ param: t, metadata: i }) : u(), u(t.mapping.value))), p(n => t.mapping.value && typeof n == "string" && this.tokenizerService.discoverTokens(n).length === 0 ? n : t.mapping.testValue)); }
    paramValues(t) { return C(Array.from(t.keys()).map(i => this.paramValue(t.get(i), new Map).pipe(p(n => [i, n])))).pipe(p(i => i.reduce((n, o) => new Map([...n, o]), new Map)), Y(new Map)); }
    resolveParams({ params: t }) { return V(() => h(() => Object.keys(t).length > 1, C(Object.keys(t).map(i => this.paramValue(t[i], new Map).pipe(p(n => ({ [i]: n }))))).pipe(p(i => i.reduce((n, o) => x(x({}, n), o), {})), p(i => ({ options: i }))), h(() => Object.keys(t).length !== 0, this.paramValue(Object.keys(t).length !== 0 ? t[Object.keys(t)[0]] : new y, new Map).pipe(p(i => ({ options: { [Object.keys(t)[0]]: i } }))), u({ options: {} })))); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(O), e.\u0275\u0275inject(R.TokenizerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), Me = (() => { class r {
    constructor(t, i) { t.register(pe()), t.register(me(i)); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(O), e.\u0275\u0275inject(fe)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: r }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [te, Z, ee, ie] }); }
} return r; })();
export { Me as DparamModule, I as Flag, w as Mapping, y as Param, fe as ParamEvaluatorService, v as ParamPlugin, P as ParamPluginInstance, O as ParamPluginManager, b as ParamSettings, ue as ParamsFormComponent, ce as ParamsQuerystringComponent, Ve as PluginInstanceComponent };
