import { a as Y } from "@nf-internal/chunk-3FGMCB2V";
import { g as P, i as x } from "@nf-internal/chunk-KQGCPFC3";
import { H as I, P as B, k as w, l as h, vb as z, z as p } from "@nf-internal/chunk-STIBVO4O";
import { a as F, b as q, f as X } from "@nf-internal/chunk-FJYW2LMB";
import * as e from "@angular/core";
import { forwardRef as y } from "@angular/core";
import * as R from "@rollthecloudinc/plugin";
import { Plugin as Z, BasePluginManager as ee, PluginDef as te } from "@rollthecloudinc/plugin";
var H = X(Y(), 1);
import { map as f, switchMap as M, filter as U, tap as _, debounceTime as ie, delay as re, defaultIfEmpty as ne } from "rxjs/operators";
import * as a from "@angular/forms";
import { Validators as L, NG_VALUE_ACCESSOR as O, NG_VALIDATORS as j, FormsModule as se, ReactiveFormsModule as ae } from "@angular/forms";
import * as K from "@rollthecloudinc/utils";
import * as m from "@angular/common";
import { CommonModule as oe } from "@angular/common";
import * as E from "@angular/material/autocomplete";
import * as J from "@angular/material/checkbox";
import * as d from "@angular/material/input";
import * as k from "@angular/material/select";
import { MaterialModule as le } from "@rollthecloudinc/material";
import * as T from "@rollthecloudinc/token";
function pe(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 10), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = s.$implicit;
    e.\u0275\u0275property("value", t.value.id), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.value.title);
} }
function me(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 10), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = s.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function ue(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field", 2)(1, "mat-label"), e.\u0275\u0275text(2, "Context"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-select", 11), e.\u0275\u0275template(4, me, 2, 2, "mat-option", 4), e.\u0275\u0275elementEnd()()), r & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(4), e.\u0275\u0275property("ngForOf", t.contexts);
} }
function ce(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div", 12)(1, "mat-checkbox", 13), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()()), r & 2) {
    let t = s.index, i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("formGroupName", t), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(i.flagsAsArray[t]);
} }
function fe(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div", 1)(1, "div"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-form-field", 2)(4, "mat-label"), e.\u0275\u0275text(5, "Type"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(6, "mat-select", 3), e.\u0275\u0275template(7, pe, 2, 2, "mat-option", 4), e.\u0275\u0275pipe(8, "async"), e.\u0275\u0275pipe(9, "keyvalue"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275template(10, ue, 5, 1, "mat-form-field", 5), e.\u0275\u0275elementStart(11, "mat-form-field", 2), e.\u0275\u0275element(12, "input", 6), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(13, "mat-form-field", 2), e.\u0275\u0275element(14, "input", 7), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(15, "div", 8), e.\u0275\u0275template(16, ce, 3, 2, "div", 9), e.\u0275\u0275elementEnd()()), r & 2) {
    let t = s.$implicit, i = s.index, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("formGroup", t), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(n.paramName(i)), e.\u0275\u0275advance(5), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(9, 7, e.\u0275\u0275pipeBind1(8, 5, n.paramPlugins$))), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngIf", t.get("mapping").get("type").value == "context"), e.\u0275\u0275advance(6), e.\u0275\u0275property("ngForOf", t.get("flags").controls);
} }
function de(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 4), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = s.$implicit;
    e.\u0275\u0275property("value", t.value.id), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.value.title);
} }
var S = class extends Z {
    constructor(s) { super(s), s && (this.evalParam = s.evalParam, s.condition && (this.condition = s.condition), s.usedContexts && (this.usedContexts = s.usedContexts)); }
}, ge = () => new S({ id: "static", title: "Static", evalParam: ({ param: r, metadata: s }) => p(r.mapping.value) }), he = r => new S({ id: "inputparam", title: "Input Param", evalParam: ({ param: s, metadata: t }) => p(s.mapping.value).pipe(f(i => t.has("inputparams") && t.get("inputparams").has(i) ? t.get("inputparams").get(i) : void 0), M(i => x(() => i !== void 0, i !== void 0 ? r.paramValue(i, t) : p(s.mapping.testValue), p(s.mapping.testValue)))) }), D = (() => { class r extends ee {
    constructor(t, i) { super(t, i); }
    pluginDef() { return p(new te({ name: "param" })); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(R.PluginConfigurationManager), e.\u0275\u0275inject(K.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), ve = (() => { class r {
    set params(t) { console.log('Input "params" set:', t), this.params$.next(t); }
    set paramValues(t) { console.log('Input "paramValues" set:', t), this.paramValues$.next(t || []); }
    constructor(t, i) { this.fb = t, this.ppm = i, this.contexts = [], this.params$ = new h({}), this.paramValues$ = new h([]), this.init$ = new w, this.formArray = this.fb.array([]), this.paramPlugins$ = this.ppm.getPlugins(), this.flags = new Map, this.savedParams = new Map, this.paramIndexes = new Map, this.onTouched = () => { }, this.flags.set("page", "Page"), this.flags.set("limit", "Limit"), this.flags.set("offset", "Offset"), this.flags.set("searchString", "Search String"), I([this.params$, this.paramValues$, this.init$]).pipe(U(([n, o]) => !!n && !!o), _(([n, o]) => { console.log("params$ emitted value:", n), console.log("paramValues$.value (current):", o); let u = new Map(this.paramIndexes); this.formArray.clear(), this.paramIndexes.clear(); let c = 0; for (let l in n)
        console.log("Processing param:", l), Array.isArray(n[l]) ? n[l].forEach(v => this.buildParams(v, c++, u)) : n[l].indexOf(":") === 0 && this.buildParams(n[l], c++, u); })).subscribe(); }
    ngOnInit() { this.init$.next(void 0); }
    writeValue(t) { t && this.formArray.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formArray.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formArray.disable() : this.formArray.enable(); }
    validate(t) { return this.formArray.valid ? null : this.formArray.errors; }
    buildParams(t, i, n) { console.log(`Building param: ${t}, index: ${i}`), this.paramIndexes.set(t, i); let o = this.fb.group({ mapping: this.fb.group({ type: this.fb.control("", L.required), value: this.fb.control("", L.required), testValue: this.fb.control(""), context: this.fb.control("") }), flags: this.fb.array(this.flagsAsArray.map(u => this.fb.group({ name: u, enabled: this.fb.control(!1) }))) }); this.formArray.push(o), this.savedParams.has(t) ? o.setValue(this.savedParams.get(t)) : i < this.paramValues$.value.length && Array.from(n).findIndex(([c, l]) => l === i) === -1 && o.setValue(this.paramValues$.value[i]); }
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
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(D)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-params-form"]], inputs: { contexts: "contexts", params: "params", paramValues: "paramValues" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: O, useExisting: y(() => r), multi: !0 }, { provide: j, useExisting: y(() => r), multi: !0 }])], decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["formGroupName", "mapping"], ["required", "", "formControlName", "type"], [3, "value", 4, "ngFor", "ngForOf"], ["formGroupName", "mapping", 4, "ngIf"], ["matInput", "", "formControlName", "value", "placeholder", "value", "required", ""], ["matInput", "", "formControlName", "testValue", "placeholder", "Test Value", "required", ""], ["formArrayName", "flags"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "context"], [3, "formGroupName"], ["formControlName", "enabled"]], template: function (i, n) { i & 1 && e.\u0275\u0275template(0, fe, 17, 9, "div", 0), i & 2 && e.\u0275\u0275property("ngForOf", n.formArray.controls); }, dependencies: [m.NgForOf, m.NgIf, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, a.FormGroupName, a.FormArrayName, E.MatOption, J.MatCheckbox, d.MatInput, d.MatFormField, d.MatLabel, k.MatSelect, m.AsyncPipe, m.KeyValuePipe], encapsulation: 2 }); }
} return r; })(), ye = (() => { class r {
    set settings(t) { this.settings$.next(t); }
    constructor(t) { this.fb = t, this.contexts = [], this.settings$ = new h(void 0), this.afterViewInit$ = new w, this.paramValues$ = new h([]), this.formGroup = this.fb.group({ paramsString: this.fb.control(""), params: this.fb.control([]) }), this.paramsStringChangeSub = this.formGroup.get("paramsString").valueChanges.pipe(ie(500)).subscribe(i => { let n = H.default.parse("?" + i); this.paramsParsed = n; }), this.settingsSub = this.settings$.pipe(_(i => { i && this.formGroup.get("paramsString").setValue(i.paramsString ? i.paramsString : ""); })).subscribe(), this.settingsParamsSub = I([this.settings$, this.formGroup.get("paramsString").valueChanges]).pipe(U(([i]) => i !== void 0), re(1), _(([i]) => this.paramValues$.next(i.params))).subscribe(), this.onTouched = () => { }; }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : this.formGroup.errors; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(a.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["druid-params-querystring"]], inputs: { contexts: "contexts", settings: "settings" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: O, useExisting: y(() => r), multi: !0 }, { provide: j, useExisting: y(() => r), multi: !0 }])], decls: 6, vars: 4, consts: [[3, "formGroup"], [1, "params-container"], ["matInput", "", "placeholder", "Params", "formControlName", "paramsString"], ["formControlName", "params", 3, "params", "paramValues", "contexts"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "mat-form-field"), e.\u0275\u0275element(4, "input", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275element(5, "classifieds-ui-params-form", 3), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275property("formGroup", n.formGroup), e.\u0275\u0275advance(5), e.\u0275\u0275property("params", n.paramsParsed)("paramValues", n.paramValues$.value)("contexts", n.contexts)); }, dependencies: [a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, d.MatInput, d.MatFormField, ve], encapsulation: 2 }); }
} return r; })(), C = class {
    constructor(s) { s && (this.mapping = new N(s.mapping), s.flags !== void 0 && (this.flags = s.flags.map(t => new A(t)))); }
}, N = class {
    constructor(s) { s && (this.type = s.type, this.value = s.value, this.testValue = s.testValue, this.context = s.context); }
}, A = class {
    constructor(s) { s && (this.name = s.name, this.enabled = s.enabled); }
}, G = class {
    constructor(s) { s && (this.plugin = s.plugin, this.settings = s.settings ? new V(s.settings) : new V); }
}, V = class {
    constructor(s) { s && (this.paramsString = s.paramsString, s.params && Array.isArray(s.params) && (this.params = s.params.map(t => new C(t)))); }
}, _e = (() => { class r {
    set title(t) { this.title$.next(t); }
    set plugins(t) { this.plugins$.next(t); }
    set instance(t) { this.instance$.next(t); }
    constructor(t) { this.fb = t, this.plugins$ = new h([]), this.title$ = new h("Plugin"), this.instance$ = new h(new G), this.instanceForm = this.fb.group({ plugin: this.fb.control(""), settings: this.fb.control("") }), this.instanceSub = this.instance$.pipe(B(i => !!i), z(i => { this.instanceForm.get("plugin").setValue(i.plugin); })).subscribe(), this.onTouched = () => { }; }
    writeValue(t) { t && this.instanceForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.instanceForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.instanceForm.disable() : this.instanceForm.enable(); }
    validate(t) { return this.instanceForm.valid ? null : this.instanceForm.errors; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(a.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["druid-params-plugin-instance"]], inputs: { title: "title", plugins: "plugins", instance: "instance" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: O, useExisting: y(() => r), multi: !0 }, { provide: j, useExisting: y(() => r), multi: !0 }])], decls: 10, vars: 10, consts: [[3, "formGroup"], ["required", "", "formControlName", "plugin"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "settings", 3, "settings"], [3, "value"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field")(2, "mat-label"), e.\u0275\u0275text(3), e.\u0275\u0275pipe(4, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(5, "mat-select", 1), e.\u0275\u0275template(6, de, 2, 2, "mat-option", 2), e.\u0275\u0275pipe(7, "async"), e.\u0275\u0275pipe(8, "keyvalue"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275element(9, "druid-params-querystring", 3), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formGroup", n.instanceForm), e.\u0275\u0275advance(3), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(4, 4, n.title$)), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(8, 8, e.\u0275\u0275pipeBind1(7, 6, n.plugins$))), e.\u0275\u0275advance(3), e.\u0275\u0275property("settings", n.instance$.value.settings)); }, dependencies: [m.NgForOf, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, E.MatOption, d.MatFormField, d.MatLabel, k.MatSelect, ye, m.AsyncPipe, m.KeyValuePipe], encapsulation: 2 }); }
} return r; })(), Q = (() => { class r {
    constructor(t, i) { this.paramPluginManager = t, this.tokenizerService = i; }
    paramValue(t, i) { return this.paramPluginManager.getPlugins().pipe(f(n => Array.from(n).map(([o, u]) => u)), f(n => n.find(o => o.condition && o.condition({ param: t, metadata: i }) || !o.condition && o.id === t.mapping.type)), M(n => x(() => !!n, n ? n.evalParam({ param: t, metadata: i }) : p(), p(t.mapping.value))), f(n => t.mapping.value && typeof n == "string" && this.tokenizerService.discoverTokens(n).length === 0 ? n : t.mapping.testValue)); }
    paramValues(t) { return P(Array.from(t.keys()).map(i => this.paramValue(t.get(i), new Map).pipe(f(n => [i, n])))).pipe(f(i => i.reduce((n, o) => new Map([...n, o]), new Map)), ne(new Map)); }
    resolveParams({ params: t }) { return M(() => x(() => Object.keys(t).length > 1, P(Object.keys(t).map(i => this.paramValue(t[i], new Map).pipe(f(n => ({ [i]: n }))))).pipe(f(i => i.reduce((n, o) => F(F({}, n), o), {})), f(i => ({ options: i }))), x(() => Object.keys(t).length !== 0, this.paramValue(Object.keys(t).length !== 0 ? t[Object.keys(t)[0]] : new C, new Map).pipe(f(i => ({ options: { [Object.keys(t)[0]]: i } }))), p({ options: {} })))); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(D), e.\u0275\u0275inject(T.TokenizerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), Ne = (() => { class r {
    constructor(t, i) { t.register(ge()), t.register(he(i)); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(D), e.\u0275\u0275inject(Q)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: r }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [oe, se, ae, le] }); }
} return r; })(), Ae = (() => { class r {
    constructor(t, i) { this.evaluator = t, this.tokenizer = i; }
    resolveParamsForTarget(t, i, n) { if (!t || !i || i.length === 0)
        return p({}); let o = t.split("&").map(c => c.split("=", 2)[0]), u = i.reduce((c, l, v) => { let b = o[v]; return c.set(b, l), c; }, new Map); return console.log("Resolving params for target:", { paramsString: t, paramsArray: i, paramMap: u }), this.evaluator.paramValues(u).pipe(M(c => { let l = new Map, v = Array.from(c.entries()).reduce((g, [$, W]) => q(F({}, g), { [$]: W }), {}); for (let g in n)
        l = new Map([...l, ...this.tokenizer.generateGenericTokens(n[g], g === "_root" ? "" : g)]); let b = {}; for (let g of Object.keys(v)) {
        let $ = v[g];
        typeof $ == "string" ? b[g] = this.tokenizer.replaceTokens($, l) : b[g] = $;
    } return p(b); })); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(Q), e.\u0275\u0275inject(T.TokenizerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })();
export { Ne as DparamModule, A as Flag, N as Mapping, C as Param, Q as ParamEvaluatorService, S as ParamPlugin, G as ParamPluginInstance, D as ParamPluginManager, V as ParamSettings, ve as ParamsFormComponent, ye as ParamsQuerystringComponent, _e as PluginInstanceComponent, Ae as TargetParamResolverService };
