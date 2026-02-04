import { e as H } from "@nf-internal/chunk-KQGCPFC3";
import { H as k, f as R, k as w, l as g, vb as L, z as E } from "@nf-internal/chunk-STIBVO4O";
import { a as _, b as N, h as A } from "@nf-internal/chunk-FJYW2LMB";
import * as D from "@angular/common";
import { CommonModule as ie } from "@angular/common";
import * as e from "@angular/core";
import { forwardRef as F } from "@angular/core";
import * as s from "@angular/forms";
import { NG_VALUE_ACCESSOR as U, NG_VALIDATORS as W, FormsModule as re, ReactiveFormsModule as oe } from "@angular/forms";
import { MaterialModule as se } from "@rollthecloudinc/material";
import * as S from "@rollthecloudinc/dparam";
import { ParamPluginInstance as h, DparamModule as ae } from "@rollthecloudinc/dparam";
import * as P from "@rollthecloudinc/plugin";
import { BasePluginManager as J, PluginDef as q, Plugin as z } from "@rollthecloudinc/plugin";
import * as G from "@rollthecloudinc/utils";
import { createRoleHandler as K, RoleRegistry as le } from "@rollthecloudinc/utils";
import * as y from "@angular/material/dialog";
import { MAT_DIALOG_DATA as ce } from "@angular/material/dialog";
import * as Q from "@angular/material/button";
import { tap as T, map as X, filter as ue } from "rxjs/operators";
function de(n, r) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275element(1, "druid-detour-interaction-listener", 4), e.\u0275\u0275elementStart(2, "button", 3), e.\u0275\u0275listener("click", function () { let o = e.\u0275\u0275restoreView(t).index, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.deleteListener$.next(o)); }), e.\u0275\u0275text(3, "Delete"), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = r.index, i = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("formControlName", t)("listener", i.interactions$.value.interactions.listeners[t]);
} }
var b = class {
    constructor(r) { this.interactions = r && r.interactions ? new x(r.interactions) : new x; }
}, x = class {
    constructor(r) { this.listeners = [], r && r.listeners && Array.isArray(r.listeners) && (this.listeners = r.listeners.map(t => new M(t))); }
}, M = class {
    constructor(r) { this.handler = r && r.handler ? new h(r.handler) : new h, this.event = r && r.event ? new h(r.event) : new h; }
}, Y = (() => { class n extends J {
    constructor(t, i) { super(t, i); }
    pluginDef() { return E(new q({ name: "interaction_event" })); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(P.PluginConfigurationManager), e.\u0275\u0275inject(G.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Z = (() => { class n extends J {
    constructor(t, i) { super(t, i); }
    pluginDef() { return E(new q({ name: "interaction_handler" })); }
    discovery() { super.discovery(); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(P.PluginConfigurationManager), e.\u0275\u0275inject(G.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), me = (() => { class n {
    set listener(t) { this.listener$.next(t); }
    constructor(t, i, o) { this.fb = t, this.iepm = i, this.ihpm = o, this.eventPlugins$ = this.iepm.getPlugins(), this.handlerPlugins$ = this.ihpm.getPlugins(), this.listenerForm = this.fb.group({ event: this.fb.control(""), handler: this.fb.control("") }), this.contexts = [], this.listener$ = new g(new M), this.event$ = new g(new h), this.handler$ = new g(new h), this.listenerSub = this.listener$.pipe(L(a => { this.event$.next(a && a.event ? a.event : new h), this.handler$.next(a && a.handler ? a.handler : new h); })).subscribe(), this.onTouched = () => { }; }
    writeValue(t) { t && this.listenerForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.listenerForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.listenerForm.disable() : this.listenerForm.enable(); }
    validate(t) { return this.listenerForm.valid ? null : this.listenerForm.errors; }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(Y), e.\u0275\u0275directiveInject(Z)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-detour-interaction-listener"]], inputs: { contexts: "contexts", listener: "listener" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: U, useExisting: F(() => n), multi: !0 }, { provide: W, useExisting: F(() => n), multi: !0 }])], decls: 5, vars: 9, consts: [[3, "formGroup"], ["formControlName", "event", "title", "Event", 3, "plugins", "instance"], ["formControlName", "handler", "title", "Handler", 3, "plugins", "instance"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0), e.\u0275\u0275element(1, "druid-params-plugin-instance", 1), e.\u0275\u0275pipe(2, "async"), e.\u0275\u0275element(3, "druid-params-plugin-instance", 2), e.\u0275\u0275pipe(4, "async"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formGroup", o.listenerForm), e.\u0275\u0275advance(), e.\u0275\u0275property("plugins", e.\u0275\u0275pipeBind1(2, 5, o.eventPlugins$))("instance", o.event$.value), e.\u0275\u0275advance(2), e.\u0275\u0275property("plugins", e.\u0275\u0275pipeBind1(4, 7, o.handlerPlugins$))("instance", o.handler$.value)); }, dependencies: [s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, S.PluginInstanceComponent, D.AsyncPipe], encapsulation: 2 }); }
} return n; })(), pe = (() => { class n {
    set interactions(t) { this.interactions$.next(t); }
    set contexts(t) { this.contexts$.next(t); }
    get listeners() { return this.interactionsForm.get("listeners"); }
    constructor(t) { this.fb = t, this.interactions$ = new g(new b({ interactions: { listeners: [] } })), this.contexts$ = new g([]), this.afterViewInit$ = new w, this.interactionsForm = this.fb.group({ listeners: this.fb.array([]) }), this.addListener$ = new w, this.deleteListener$ = new w, this.addListenerSub = this.addListener$.pipe(T(() => this.listeners.push(this.fb.control("")))).subscribe(), this.deleteListenerSub = this.deleteListener$.pipe(T(i => { this.interactions$.value.interactions.listeners.splice(i, 1), this.listeners.removeAt(i); })).subscribe(), this.interactionsSub = k([this.interactions$, this.afterViewInit$]).pipe(X(([i]) => i), ue(i => i.interactions.listeners.length !== 0), T(i => { this.listeners.clear(), i.interactions.listeners.forEach((o, a) => { this.listeners.push(this.fb.control("")); }); })).subscribe(), this.onTouched = () => { }; }
    ngAfterViewInit() { this.afterViewInit$.next(void 0), this.afterViewInit$.complete(); }
    writeValue(t) { t && this.interactionsForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.interactionsForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.interactionsForm.disable() : this.interactionsForm.enable(); }
    validate(t) { return this.interactionsForm.valid ? null : this.interactionsForm.errors; }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-detour-interactions-form"]], inputs: { interactions: "interactions", contexts: "contexts" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: U, useExisting: F(() => n), multi: !0 }, { provide: W, useExisting: F(() => n), multi: !0 }])], decls: 5, vars: 2, consts: [[3, "formGroup"], ["formArrayName", "listeners"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "formControlName", "listener"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1), e.\u0275\u0275template(2, de, 4, 2, "div", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(3, "button", 3), e.\u0275\u0275listener("click", function () { return o.addListener$.next(void 0); }), e.\u0275\u0275text(4, "Add Listener"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formGroup", o.interactionsForm), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", o.listeners.controls)); }, dependencies: [D.NgForOf, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, s.FormArrayName, me], encapsulation: 2 }); }
} return n; })(), Ee = (() => { class n {
    constructor(t, i, o) { this.data = t, this.dialogRef = i, this.fb = o, this.interactionsForm = this.fb.group({ interactions: this.fb.control("") }), this.contexts = [], this.interactions = new b, this.contexts = t.contexts, this.interactions = t.interactions; }
    submit() { let t = new b(this.interactionsForm.value); console.log("interactions payload", t), this.dialogRef.close(t); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(ce), e.\u0275\u0275directiveInject(y.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-detour-interactions-dialog"]], standalone: !1, decls: 8, vars: 4, consts: [[1, "interactions-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["formControlName", "interactions", 3, "contexts", "interactions"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2), e.\u0275\u0275element(4, "druid-detour-interactions-form", 3), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(5, "mat-dialog-actions")(6, "button", 4), e.\u0275\u0275text(7, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", o.interactionsForm), e.\u0275\u0275advance(4), e.\u0275\u0275property("contexts", o.contexts)("interactions", o.interactions), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !o.interactionsForm.valid)); }, dependencies: [s.\u0275NgNoValidate, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, Q.MatButton, y.MatDialogActions, y.MatDialogContent, pe], encapsulation: 2 }); }
} return n; })(), V = class extends z {
    constructor(r) { super(r), r && (this.connect = r.connect); }
}, v = class extends z {
    constructor(r) { super(r), r && (this.handle = r.handle); }
}, B = new Set, he = n => new V({ title: "DOM", id: "dom", connect: ({ filteredListeners: r, listenerParams: t, renderer: i, callback: o }) => new R(a => { let u = new Map, f = r.length; for (let c = 0; c < f; c++) {
        let l = t[c].type;
        if (u.has(l)) {
            let d = u.get(l);
            d.push(c), u.set(l, d);
        }
        else
            u.set(l, [c]);
    } let $ = (c => l => { if (c.has(l.type)) {
        let d = c.get(l.type), ee = d.length;
        d.forEach((ve, m) => { let O = t[d[m]].target; if (l.target.matches(O))
            if (console.log(`delegated target match ${O}`), r[m].handler.settings.params) {
                let te = r[m].handler.settings.paramsString ? r[m].handler.settings.paramsString.split("&").filter(p => p.indexOf("=:") !== -1).map(p => p.split("=", 2)[1].substr(1)) : [];
                n.paramValues(r[m].handler.settings.params.reduce((p, I, j) => new Map([...p, [te[j], I]]), new Map)).pipe(X(p => Array.from(p).reduce((I, [j, ne]) => N(_({}, I), { [j]: ne }), {}))).subscribe(p => { o({ handlerParams: p, plugin: r[m].handler.plugin, index: m, evt: l }); });
            }
            else
                o({ handlerParams: {}, plugin: r[m].handler.plugin, index: m, evt: l }); });
    } })(u), C = Array.from(u); for (let c = 0; c < C.length; c++) {
        let l = C[c][0];
        B.has(l) || (console.log(`[InteractionEvent] Adding global listener for type '${l}'`), i.listen("document", l, $), B.add(l));
    } a.next({}), a.complete(); }) }), fe = () => new v({ title: "Hello World", id: "hello_world", handle: ({}) => { console.log("Hello World"); } });
function Te(n) { return new v({ id: n.id, title: n.title, handle: ({ handlerParams: r, evt: t, panelPageComponent: i }) => { let o = K(n.role, n.handler); return console.log("we are here in role handler plugin factory", i), o(i.injector, r, t); } }); }
function Ve(n) { let { pluginId: r, title: t, role: i, handler: o, paramEvaluatorService: a } = n; return new v({ id: r, title: t, handle: l => A(null, [l], function* ({ handlerParams: u, evt: f, listener: $, renderer: C, panelPageComponent: c }) { try {
        let d = u ? yield ge(a, u) : {};
        if (i && o)
            return K(i, o)(c.injector, d, f);
        console.warn(`[Interaction] Handler '${r}' executed without a role handler.`);
    }
    catch (d) {
        console.error(`[Interaction] Handler '${r}' failed.`, d);
    } }) }); }
function ge(n, r) { return A(this, null, function* () { if (!r || typeof r != "object")
    return {}; let t = Object.entries(r), i = new Map(t.map(([u, f]) => [u, f])), o = n.paramValues(i), a = yield H(o); return Array.from(a.entries()).reduce((u, [f, $]) => N(_({}, u), { [f]: $ }), {}); }); }
function Pe(n) { return new v({ id: n.id, title: n.title, handle: ({ handlerParams: r, evt: t, panelPageComponent: i }) => { let a = i.injector.get(le).get(n.role, n.scope); return n.handler({ roleInstances: a, params: r, event: t }); } }); }
var Ge = (() => { class n {
    constructor(t, i, o) { t.register(he(o)), i.register(fe()); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(Y), e.\u0275\u0275inject(Z), e.\u0275\u0275inject(S.ParamEvaluatorService)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [ie, re, oe, se, ae] }); }
} return n; })();
export { Ge as DetourModule, V as InteractionEventPlugin, Y as InteractionEventPluginManager, v as InteractionHandlerPlugin, Z as InteractionHandlerPluginManager, x as InteractionInteractions, M as InteractionListener, me as InteractionListenerComponent, Ee as InteractionsDialogComponent, pe as InteractionsFormComponent, b as InteractionsFormPayload, Pe as createDynamicInteractionHandlerPlugin, Ve as handlerFromJsonFactory, he as interactionEventDomFactory, fe as interactionHandlerHelloWorldFactory, Te as roleHandlerPluginFactory };
