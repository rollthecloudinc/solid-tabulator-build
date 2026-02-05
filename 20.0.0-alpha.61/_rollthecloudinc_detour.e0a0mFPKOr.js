import { e as W } from "@nf-internal/chunk-KQGCPFC3";
import { H as J, f as U, k as M, l as y, vb as q, z as T } from "@nf-internal/chunk-STIBVO4O";
import { a as v, b as A, h as E } from "@nf-internal/chunk-FJYW2LMB";
import * as j from "@angular/common";
import { CommonModule as ae } from "@angular/common";
import * as e from "@angular/core";
import { forwardRef as D } from "@angular/core";
import * as s from "@angular/forms";
import { NG_VALUE_ACCESSOR as z, NG_VALIDATORS as K, FormsModule as le, ReactiveFormsModule as ce } from "@angular/forms";
import { MaterialModule as ue } from "@rollthecloudinc/material";
import * as N from "@rollthecloudinc/dparam";
import { ParamPluginInstance as f, DparamModule as de } from "@rollthecloudinc/dparam";
import * as O from "@rollthecloudinc/plugin";
import { BasePluginManager as Q, PluginDef as X, Plugin as Y } from "@rollthecloudinc/plugin";
import * as P from "@rollthecloudinc/utils";
import { createRoleHandler as Z, RoleRegistry as me } from "@rollthecloudinc/utils";
import * as w from "@angular/material/dialog";
import { MAT_DIALOG_DATA as pe } from "@angular/material/dialog";
import * as ee from "@angular/material/button";
import { tap as V, map as te, filter as he } from "rxjs/operators";
import * as ie from "@angular/router";
function fe(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275element(1, "druid-detour-interaction-listener", 4), e.\u0275\u0275elementStart(2, "button", 3), e.\u0275\u0275listener("click", function () { let o = e.\u0275\u0275restoreView(t).index, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.deleteListener$.next(o)); }), e.\u0275\u0275text(3, "Delete"), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = r.index, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("formControlName", t)("listener", n.interactions$.value.interactions.listeners[t]);
} }
var $ = class {
    constructor(r) { this.interactions = r && r.interactions ? new S(r.interactions) : new S; }
}, S = class {
    constructor(r) { this.listeners = [], r && r.listeners && Array.isArray(r.listeners) && (this.listeners = r.listeners.map(t => new C(t))); }
}, C = class {
    constructor(r) { this.handler = r && r.handler ? new f(r.handler) : new f, this.event = r && r.event ? new f(r.event) : new f; }
}, ne = (() => { class i extends Q {
    constructor(t, n) { super(t, n); }
    pluginDef() { return T(new X({ name: "interaction_event" })); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(O.PluginConfigurationManager), e.\u0275\u0275inject(P.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), re = (() => { class i extends Q {
    constructor(t, n) { super(t, n); }
    pluginDef() { return T(new X({ name: "interaction_handler" })); }
    discovery() { super.discovery(); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(O.PluginConfigurationManager), e.\u0275\u0275inject(P.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), ge = (() => { class i {
    set listener(t) { this.listener$.next(t); }
    constructor(t, n, o) { this.fb = t, this.iepm = n, this.ihpm = o, this.eventPlugins$ = this.iepm.getPlugins(), this.handlerPlugins$ = this.ihpm.getPlugins(), this.listenerForm = this.fb.group({ event: this.fb.control(""), handler: this.fb.control("") }), this.contexts = [], this.listener$ = new y(new C), this.event$ = new y(new f), this.handler$ = new y(new f), this.listenerSub = this.listener$.pipe(q(a => { this.event$.next(a && a.event ? a.event : new f), this.handler$.next(a && a.handler ? a.handler : new f); })).subscribe(), this.onTouched = () => { }; }
    writeValue(t) { t && this.listenerForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.listenerForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.listenerForm.disable() : this.listenerForm.enable(); }
    validate(t) { return this.listenerForm.valid ? null : this.listenerForm.errors; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(ne), e.\u0275\u0275directiveInject(re)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-detour-interaction-listener"]], inputs: { contexts: "contexts", listener: "listener" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: z, useExisting: D(() => i), multi: !0 }, { provide: K, useExisting: D(() => i), multi: !0 }])], decls: 5, vars: 9, consts: [[3, "formGroup"], ["formControlName", "event", "title", "Event", 3, "plugins", "instance"], ["formControlName", "handler", "title", "Handler", 3, "plugins", "instance"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 0), e.\u0275\u0275element(1, "druid-params-plugin-instance", 1), e.\u0275\u0275pipe(2, "async"), e.\u0275\u0275element(3, "druid-params-plugin-instance", 2), e.\u0275\u0275pipe(4, "async"), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("formGroup", o.listenerForm), e.\u0275\u0275advance(), e.\u0275\u0275property("plugins", e.\u0275\u0275pipeBind1(2, 5, o.eventPlugins$))("instance", o.event$.value), e.\u0275\u0275advance(2), e.\u0275\u0275property("plugins", e.\u0275\u0275pipeBind1(4, 7, o.handlerPlugins$))("instance", o.handler$.value)); }, dependencies: [s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, N.PluginInstanceComponent, j.AsyncPipe], encapsulation: 2 }); }
} return i; })(), ve = (() => { class i {
    set interactions(t) { this.interactions$.next(t); }
    set contexts(t) { this.contexts$.next(t); }
    get listeners() { return this.interactionsForm.get("listeners"); }
    constructor(t) { this.fb = t, this.interactions$ = new y(new $({ interactions: { listeners: [] } })), this.contexts$ = new y([]), this.afterViewInit$ = new M, this.interactionsForm = this.fb.group({ listeners: this.fb.array([]) }), this.addListener$ = new M, this.deleteListener$ = new M, this.addListenerSub = this.addListener$.pipe(V(() => this.listeners.push(this.fb.control("")))).subscribe(), this.deleteListenerSub = this.deleteListener$.pipe(V(n => { this.interactions$.value.interactions.listeners.splice(n, 1), this.listeners.removeAt(n); })).subscribe(), this.interactionsSub = J([this.interactions$, this.afterViewInit$]).pipe(te(([n]) => n), he(n => n.interactions.listeners.length !== 0), V(n => { this.listeners.clear(), n.interactions.listeners.forEach((o, a) => { this.listeners.push(this.fb.control("")); }); })).subscribe(), this.onTouched = () => { }; }
    ngAfterViewInit() { this.afterViewInit$.next(void 0), this.afterViewInit$.complete(); }
    writeValue(t) { t && this.interactionsForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.interactionsForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.interactionsForm.disable() : this.interactionsForm.enable(); }
    validate(t) { return this.interactionsForm.valid ? null : this.interactionsForm.errors; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-detour-interactions-form"]], inputs: { interactions: "interactions", contexts: "contexts" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: z, useExisting: D(() => i), multi: !0 }, { provide: K, useExisting: D(() => i), multi: !0 }])], decls: 5, vars: 2, consts: [[3, "formGroup"], ["formArrayName", "listeners"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "formControlName", "listener"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1), e.\u0275\u0275template(2, fe, 4, 2, "div", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(3, "button", 3), e.\u0275\u0275listener("click", function () { return o.addListener$.next(void 0); }), e.\u0275\u0275text(4, "Add Listener"), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("formGroup", o.interactionsForm), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", o.listeners.controls)); }, dependencies: [j.NgForOf, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, s.FormArrayName, ge], encapsulation: 2 }); }
} return i; })(), Pe = (() => { class i {
    constructor(t, n, o) { this.data = t, this.dialogRef = n, this.fb = o, this.interactionsForm = this.fb.group({ interactions: this.fb.control("") }), this.contexts = [], this.interactions = new $, this.contexts = t.contexts, this.interactions = t.interactions; }
    submit() { let t = new $(this.interactionsForm.value); console.log("interactions payload", t), this.dialogRef.close(t); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(pe), e.\u0275\u0275directiveInject(w.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-detour-interactions-dialog"]], standalone: !1, decls: 8, vars: 4, consts: [[1, "interactions-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["formControlName", "interactions", 3, "contexts", "interactions"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2), e.\u0275\u0275element(4, "druid-detour-interactions-form", 3), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(5, "mat-dialog-actions")(6, "button", 4), e.\u0275\u0275text(7, "Save"), e.\u0275\u0275elementEnd()()()), n & 2 && (e.\u0275\u0275property("formGroup", o.interactionsForm), e.\u0275\u0275advance(4), e.\u0275\u0275property("contexts", o.contexts)("interactions", o.interactions), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !o.interactionsForm.valid)); }, dependencies: [s.\u0275NgNoValidate, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, ee.MatButton, w.MatDialogActions, w.MatDialogContent, ve], encapsulation: 2 }); }
} return i; })(), G = class extends Y {
    constructor(r) { super(r), r && (this.connect = r.connect); }
}, g = class extends Y {
    constructor(r) { super(r), r && (this.handle = r.handle); }
}, b = new Map, ye = i => new G({ title: "DOM", id: "dom", connect: ({ filteredListeners: r, listenerParams: t, renderer: n, panelPageId: o, callback: a }) => new U(d => { b.has(o) && (b.get(o).forEach(c => c()), b.delete(o)); let u = new Map, F = r.length; for (let c = 0; c < F; c++) {
        let l = t[c].type;
        if (u.has(l)) {
            let m = u.get(l);
            m.push(c), u.set(l, m);
        }
        else
            u.set(l, [c]);
    } let R = (c => l => { if (c.has(l.type)) {
        let m = c.get(l.type), H = m.length;
        m.forEach((Fe, p) => { let k = t[m[p]].target; if (l.target.matches(k)) {
            console.log(`delegated target match ${k}`);
            let B = l.target.getAttribute("data-resolved-params"), L = B ? JSON.parse(B) : {};
            if (r[p].handler.settings.params) {
                let oe = r[p].handler.settings.paramsString ? r[p].handler.settings.paramsString.split("&").filter(h => h.indexOf("=:") !== -1).map(h => h.split("=", 2)[1].substr(1)) : [];
                i.paramValues(r[p].handler.settings.params.reduce((h, _, I) => new Map([...h, [oe[I], _]]), new Map)).pipe(te(h => Array.from(h).reduce((_, [I, se]) => A(v({}, _), { [I]: se }), {}))).subscribe(h => { a({ handlerParams: v(v({}, h), L), plugin: r[p].handler.plugin, index: p, evt: l }); });
            }
            else
                a({ handlerParams: v({}, L), plugin: r[p].handler.plugin, index: p, evt: l });
        } });
    } })(u), x = Array.from(u); for (let c = 0; c < x.length; c++) {
        let l = x[c][0], m = n.listen("document", l, H => { R(H); });
        b.has(o) || b.set(o, []), b.get(o).push(m);
    } d.next({}), d.complete(); }) }), be = () => new g({ title: "Hello World", id: "hello_world", handle: ({}) => { console.log("Hello World"); } }), we = ({ router: i }) => new g({ title: "Navigate", id: "navigate", handle: ({ handlerParams: r }) => { let t = r.path, n = r?.replace ?? !1; i.navigateByUrl(t, { replaceUrl: n }); } });
function Re(i) { return new g({ id: i.id, title: i.title, handle: ({ handlerParams: r, evt: t, panelPageComponent: n }) => { let o = Z(i.role, i.handler); return console.log("we are here in role handler plugin factory", n), o(n.injector, r, t); } }); }
function He(i) { let { pluginId: r, title: t, role: n, handler: o, paramEvaluatorService: a } = i; return new g({ id: r, title: t, handle: c => E(null, [c], function* ({ handlerParams: d, evt: u, listener: F, renderer: R, panelPageComponent: x }) { try {
        let l = d ? yield $e(a, d) : {};
        if (n && o)
            return Z(n, o)(x.injector, l, u);
        console.warn(`[Interaction] Handler '${r}' executed without a role handler.`);
    }
    catch (l) {
        console.error(`[Interaction] Handler '${r}' failed.`, l);
    } }) }); }
function $e(i, r) { return E(this, null, function* () { if (!r || typeof r != "object")
    return {}; let t = Object.entries(r), n = new Map(t.map(([d, u]) => [d, u])), o = i.paramValues(n), a = yield W(o); return Array.from(a.entries()).reduce((d, [u, F]) => A(v({}, d), { [u]: F }), {}); }); }
function ke(i) { return new g({ id: i.id, title: i.title, handle: ({ handlerParams: r, evt: t, panelPageComponent: n }) => { let a = n.injector.get(me).get(i.role, i.scope); return i.handler({ roleInstances: a, params: r, event: t }); } }); }
var Be = (() => { class i {
    constructor(t, n, o, a) { n.register(ye(a)), o.register(be()), o.register(we({ router: t })); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(ie.Router), e.\u0275\u0275inject(ne), e.\u0275\u0275inject(re), e.\u0275\u0275inject(N.ParamEvaluatorService)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [ae, le, ce, ue, de] }); }
} return i; })();
export { Be as DetourModule, G as InteractionEventPlugin, ne as InteractionEventPluginManager, g as InteractionHandlerPlugin, re as InteractionHandlerPluginManager, S as InteractionInteractions, C as InteractionListener, ge as InteractionListenerComponent, Pe as InteractionsDialogComponent, ve as InteractionsFormComponent, $ as InteractionsFormPayload, ke as createDynamicInteractionHandlerPlugin, He as handlerFromJsonFactory, ye as interactionEventDomFactory, be as interactionHandlerHelloWorldFactory, we as interactionHandlerNavigateFactory, Re as roleHandlerPluginFactory };
